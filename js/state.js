// ============================================
// State Management
// ============================================
// ============================================
const state = {
    questionsData: {},
    questionsLoaded: false,
    currentView: 'dashboard',
    currentSubject: 'Maths',
    currentYear: 'Year 3',
    currentSkill: null,
    currentQuestions: [],
    currentQuestionIndex: 0,
    userAnswers: [],
    timeRemaining: 120,
    timerInterval: null,
    users: [],
    currentUser: null,
    quizHistory: {},
    smartScore: 0,
    dailyQuests: [],
    rewards: {
        stars: 0,
        badges: [],
        xp: 0,
        level: 1,
        streak: 0,
        lastActiveDate: null
    }
};

// ============================================
// User Management
// ============================================
// ============================================
function loadUsersFromStorage() {
    try {
        const raw = localStorage.getItem('quiz_users');
        state.users = raw ? JSON.parse(raw) : [];
    } catch (e) {
        state.users = [];
    }
}

function saveUsersToStorage() {
    localStorage.setItem('quiz_users', JSON.stringify(state.users));
}

function loadCurrentUser() {
    try {
        const raw = localStorage.getItem('quiz_current_user');
        const user = raw ? JSON.parse(raw) : null;
        if (user) {
            // This will sync state.rewards and update UI
            setCurrentUser(user);
        }
    } catch (e) {
        state.currentUser = null;
    }
}

function setCurrentUser(user) {
    state.currentUser = user;
    if (user) {
        localStorage.setItem('quiz_current_user', JSON.stringify(user));

        // Always load from the main users list to get latest rewards
        const latestUser = state.users.find(u => String(u.id) === String(user.id));
        if (latestUser) {
            if (!latestUser.rewards) {
                latestUser.rewards = {
                    stars: 0,
                    badges: [],
                    xp: 0,
                    level: 1,
                    streak: 0,
                    lastActiveDate: null
                };
            }
            state.rewards = latestUser.rewards;
            state.currentUser = latestUser;
            checkStreak(); // Check streak when user is set
        } else {
            // New user or fallback
            if (!user.rewards) user.rewards = {
                stars: 0,
                badges: [],
                xp: 0,
                level: 1,
                streak: 0,
                lastActiveDate: null
            };
            state.rewards = user.rewards;
        }

        showToast(`Welcome back, ${state.currentUser.name}!`, 'success');

        // Refresh views to show correct mastery levels
        if (state.currentView === 'skill') {
            showSkillTree(state.currentSubject, state.currentYear);
        } else {
            showScreen('dashboard');
        }
    } else {
        localStorage.removeItem('quiz_current_user');
        showToast('Switched to Guest mode (Scores will not be tracked)', 'info');
    }
    updateUserUI();
    if (state.currentView === 'dashboard') showScreen('dashboard');
}

function validateName(name) {
    if (!name || name.trim() === '') return 'Please enter your name';
    const trimmed = name.trim();
    if (trimmed.length < 2) return 'Name must be at least 2 characters';
    if (trimmed.length > 50) return 'Name must be less than 50 characters';
    if (!/^[a-zA-Z\s]+$/.test(trimmed)) return 'Name can only contain letters and spaces';
    return null;
}

function validateGrade(grade) {
    if (!grade) return 'Please select your grade';
    return null;
}

function setInputState(inputId, isValid) {
    const input = getElement(inputId);
    if (input) {
        input.classList.remove('valid', 'invalid');
        input.classList.add(isValid ? 'valid' : 'invalid');
    }
}

function showError(elementId, message) {
    const errorEl = getElement(elementId);
    if (errorEl) {
        errorEl.textContent = message;
        errorEl.classList.add('visible');
    }
}

function hideError(elementId) {
    const errorEl = getElement(elementId);
    if (errorEl) {
        errorEl.textContent = '';
        errorEl.classList.remove('visible');
    }
}

function clearFormErrors() {
    hideError('user-name-error');
    hideError('user-grade-error');
    const nameInput = getElement('user-name');
    const gradeSelect = getElement('user-grade');
    const successEl = getElement('user-form-success');
    if (nameInput) nameInput.classList.remove('valid', 'invalid');
    if (gradeSelect) gradeSelect.classList.remove('valid', 'invalid');
    if (successEl) successEl.classList.remove('visible');
}

function openUserModal() {
    const modal = getElement('user-modal');
    if (modal) modal.classList.add('active');

    // Reset form fields for a fresh "Add User" experience
    const nameInput = getElement('user-name');
    const gradeSelect = getElement('user-grade');
    if (nameInput) nameInput.value = '';
    if (gradeSelect) gradeSelect.value = '';

    clearFormErrors();
    if (nameInput) nameInput.focus();
}

function closeUserModal() {
    const modal = getElement('user-modal');
    if (modal) modal.classList.remove('active');
    clearFormErrors();
}

function renderUserSelect() {
    const sel = getElement('user-select');
    if (!sel) return;
    sel.innerHTML = '';
    const placeholder = document.createElement('option');
    placeholder.value = 'guest';
    placeholder.textContent = 'Guest (No Tracking)';
    if (!state.currentUser) placeholder.selected = true;
    sel.appendChild(placeholder);
    state.users.forEach(u => {
        const opt = document.createElement('option');
        opt.value = u.id;
        opt.textContent = `${u.name} (${u.grade || ''}) ${u.rewards?.stars ? '⭐' + u.rewards.stars : ''}`;
        if (state.currentUser && String(state.currentUser.id) === String(u.id)) opt.selected = true;
        sel.appendChild(opt);
    });
}

// ============================================
// History Management
// ============================================
// ============================================
function loadHistoryFromStorage() {
    try {
        const raw = localStorage.getItem('quiz_history');
        state.quizHistory = raw ? JSON.parse(raw) : {};
    } catch (e) {
        state.quizHistory = {};
    }
}

function saveHistoryToStorage() {
    try {
        localStorage.setItem('quiz_history', JSON.stringify(state.quizHistory));
    } catch (e) {
        console.warn('Failed to save history', e);
    }
}

function saveSkillScore(userId, subject, year, skillId, score) {
    const key = `skill_scores_${userId}`;
    let scores = {};
    try {
        const raw = localStorage.getItem(key);
        scores = raw ? JSON.parse(raw) : {};
    } catch (e) { }

    if (!scores[subject]) scores[subject] = {};
    if (!scores[subject][year]) scores[subject][year] = {};

    // Only update if the new score is higher (Mastery)
    if (!scores[subject][year][skillId] || score > scores[subject][year][skillId]) {
        scores[subject][year][skillId] = score;
        localStorage.setItem(key, JSON.stringify(scores));
    }
}

function getSkillScore(userId, subject, year, skillId) {
    const key = `skill_scores_${userId}`;
    try {
        const raw = localStorage.getItem(key);
        const scores = raw ? JSON.parse(raw) : {};
        return scores[subject]?.[year]?.[skillId] || 0;
    } catch (e) {
        return 0;
    }
}

function recordHistory(entry, user) {
    if (!user || !user.id) return;
    const id = String(user.id);
    if (!state.quizHistory[id]) state.quizHistory[id] = [];
    state.quizHistory[id].push(entry);

    // Update user rewards in stats
    const userIdx = state.users.findIndex(u => String(u.id) === String(user.id));
    if (userIdx !== -1) {
        state.users[userIdx].rewards = state.rewards;
        saveUsersToStorage();
        console.log(`History Recorded. Saved user rewards:`, state.users[userIdx].rewards);

        // Also update stored current user to stay in sync
        localStorage.setItem('quiz_current_user', JSON.stringify(state.users[userIdx]));
    }

    saveHistoryToStorage();
}

/**
 * Check and award badges based on milestones
 * @param {string} subject 
 */
function checkAndAwardBadges(subject) {
    if (!state.currentUser) return;

    const userHistory = state.quizHistory[String(state.currentUser.id)] || [];
    const subjectStars = userHistory.filter(h => h.subject === subject && h.star).length;

    const badgeMap = {
        'Maths': { threshold: 3, name: 'Math Whiz 🔢', icon: '🔢' },
        'English': { threshold: 3, name: 'Word Master 📚', icon: '📚' },
        'Science': { threshold: 3, name: 'Super Scientist 🔬', icon: '🔬' },
        'Chinese': { threshold: 3, name: 'Chinese Expert 🏮', icon: '🏮' }
    };

    const badgeInfo = badgeMap[subject];
    if (badgeInfo && subjectStars >= badgeInfo.threshold) {
        if (!state.rewards.badges.includes(badgeInfo.name)) {
            state.rewards.badges.push(badgeInfo.name);
            showToast(`New Badge Earned: ${badgeInfo.name}! 🏆`, 'success', 6000);

            if (typeof confetti === 'function') {
                confetti({
                    particleCount: 100,
                    spread: 70,
                    origin: { y: 0.6 },
                    colors: ['#fbbf24', '#f59e0b', '#d97706']
                });
            }
        }
    }
}

function showHistoryModal(userId) {
    const list = getElement('history-list');
    if (!list) return;
    const entries = state.quizHistory[String(userId)] || [];
    if (!entries.length) {
        list.innerHTML = '<p class="text-center" style="padding: 2rem; color: var(--text-muted);">No history for this user yet. Start a quiz to see results here!</p>';
    } else {
        list.innerHTML = '';
        entries.slice().reverse().forEach(e => {
            const item = document.createElement('div');
            item.className = 'history-entry';
            item.innerHTML = `
                <div class="history-date">${new Date(e.date).toLocaleString()}</div>
                <div class="history-info">
                    <div class="history-subject">${e.subject} - ${e.year} ${e.star ? '<span class="history-star">⭐</span>' : ''}</div>
                    <div class="history-score">${e.correct}/${e.total} (${e.percentage}%)</div>
                </div>
            `;
            list.appendChild(item);
        });
    }
    const modal = getElement('history-modal');
    if (modal) modal.style.display = 'flex';
}
