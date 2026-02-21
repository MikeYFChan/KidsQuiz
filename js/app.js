// ============================================
// Kids Quiz - Combined Application
// ============================================

// ============================================
// State Management
// ============================================
const state = {
    questionsData: {},
    questionsLoaded: false,
    currentView: 'dashboard',
    currentSubject: '',
    currentYear: '',
    currentSkill: null,
    currentQuestions: [],
    currentQuestionIndex: 0,
    userAnswers: [],
    timerInterval: null,
    timeRemaining: 0,
    users: [],
    currentUser: null,
    quizHistory: {},
    smartScore: 0,
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
// Utility Functions
// ============================================
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

function normalizeAnswer(answer) {
    if (answer === null || answer === undefined) return '';
    return String(answer)
        .normalize('NFKC') // Normalize Unicode (handles full-width chars)
        .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()！？。，、；：「」『』（）]/g, '') // Remove punctuation
        .replace(/\s+/g, '') // Remove all whitespace
        .toLowerCase();
}

function compareAnswers(userAns, correctAns) {
    const normUser = normalizeAnswer(userAns);
    const normCorrect = normalizeAnswer(correctAns);
    const isMatched = normUser === normCorrect;

    if (!isMatched) {
        console.log(`Answer Mismatch: [${userAns}] -> [${normUser}] vs Correct: [${correctAns}] -> [${normCorrect}]`);
    }
    return isMatched;
}

function getElement(id) {
    return document.getElementById(id);
}

// Sound Effects Utility (Internal Oscillator Based)
const sounds = {
    audioCtx: null,
    init() {
        if (!this.audioCtx) {
            this.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        }
    },
    play(freqs, type = 'sine', duration = 0.2) {
        try {
            this.init();
            if (this.audioCtx.state === 'suspended') this.audioCtx.resume();
            const oscillator = this.audioCtx.createOscillator();
            const gainNode = this.audioCtx.createGain();
            oscillator.type = type;
            oscillator.connect(gainNode);
            gainNode.connect(this.audioCtx.destination);
            const now = this.audioCtx.currentTime;
            gainNode.gain.setValueAtTime(0, now);
            gainNode.gain.linearRampToValueAtTime(0.1, now + 0.05);
            gainNode.gain.exponentialRampToValueAtTime(0.0001, now + duration);
            freqs.forEach((f, i) => {
                oscillator.frequency.setValueAtTime(f, now + (i * 0.1));
            });
            oscillator.start(now);
            oscillator.stop(now + duration);
        } catch (e) {
            console.error('Audio error:', e);
        }
    },
    correct() {
        this.play([523.25, 659.25, 783.99], 'sine', 0.5); // C5, E5, G5
    },
    incorrect() {
        this.play([220, 196], 'triangle', 0.3); // A3, G3
    }
};

function createElement(tag, className = '', innerHTML = '') {
    const el = document.createElement(tag);
    if (className) el.className = className;
    if (innerHTML) el.innerHTML = innerHTML;
    return el;
}

function showScreen(screenName) {
    state.currentView = screenName;
    const screens = ['dashboard-screen', 'subject-screen', 'year-screen', 'skill-screen', 'question-screen', 'results-screen', 'report-screen'];
    screens.forEach(id => {
        const el = getElement(id);
        if (el) {
            el.classList.remove('active');
            if (id === `${screenName}-screen`) el.classList.add('active');
        }
    });

    // Hide progress-related sidebar items during quiz to avoid distraction
    const reportBtn = getElement('open-report-btn');
    const historyBtn = getElement('sidebar-history');
    if (screenName === 'question') {
        if (reportBtn) reportBtn.style.display = 'none';
        if (historyBtn) historyBtn.style.display = 'none';
    } else {
        if (reportBtn) reportBtn.style.display = 'flex';
        if (historyBtn) historyBtn.style.display = 'flex';
    }


    // Sidebar active state
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
        if (item.dataset.view === screenName || item.dataset.subject === state.currentSubject) {
            item.classList.add('active');
        }
    });

    // Refresh Dashboard Rewards
    if (screenName === 'dashboard') {
        const rewardsSection = getElement('dashboard-rewards-section');
        const starsVal = getElement('dash-total-stars');
        const badgesVal = getElement('dash-total-badges');
        const badgesGrid = getElement('badges-grid');

        if (rewardsSection) {
            rewardsSection.style.display = 'block';

            if (!state.currentUser) {
                if (starsVal) starsVal.textContent = '0';
                if (badgesVal) badgesVal.textContent = '0';
                if (badgesGrid) {
                    badgesGrid.innerHTML = '<p class="empty-rewards-msg">Please <strong>Select a User</strong> in the sidebar to start earning stars! 👤</p>';
                }
            } else {
                if (starsVal) starsVal.textContent = state.rewards.stars || 0;
                if (badgesVal) badgesVal.textContent = state.rewards.badges.length || 0;

                if (badgesGrid) {
                    if (state.rewards.badges.length === 0) {
                        badgesGrid.innerHTML = '<p class="empty-rewards-msg">Keep practicing to earn your first star! ⭐</p>';
                    } else {
                        badgesGrid.innerHTML = '';
                        state.rewards.badges.forEach(badge => {
                            const badgeEl = document.createElement('div');
                            badgeEl.className = 'badge-item';
                            const icon = badge.split(' ').pop();
                            badgeEl.innerHTML = `
                                <div class="badge-icon">${icon}</div>
                                <div class="badge-name">${badge}</div>
                            `;
                            badgesGrid.appendChild(badgeEl);
                        });
                    }
                }
            }
        }
    }
}

// ============================================
// MCQ Generator Functions
// ============================================
function generateNumericDistractors(correct) {
    const c = Number(correct);
    if (!Number.isFinite(c)) return ['1', '2', '3'];
    const set = new Set();
    set.add(String(c + 1));
    set.add(String(c - 1));
    set.add(String(Math.round(c * 1.1)));
    if (Number.isInteger(c) && Math.abs(c) >= 10) {
        const s = String(Math.abs(c));
        const swapped = Number(s.split('').reverse().join('')) * (c < 0 ? -1 : 1);
        if (swapped !== c) set.add(String(swapped));
    }
    const arr = Array.from(set).filter(x => x !== String(correct));
    while (arr.length < 3) arr.push(String(c + arr.length + 1));
    return arr.slice(0, 3);
}

function generateFractionDistractors(correct) {
    const parts = String(correct).split('/').map(s => s.trim());
    const n = Number(parts[0]);
    const d = Number(parts[1]);
    const out = [];
    if (Number.isFinite(n) && Number.isFinite(d) && d !== 0) {
        out.push(`${n * 2}/${d * 2}`);
        out.push(String(n / d));
        out.push(`${n + 1}/${d}`);
    }
    return out.filter(x => x !== correct).slice(0, 3);
}

function generateTextDistractors(correct) {
    const lc = String(correct).trim().toLowerCase();
    const map = {
        happy: ['glad', 'cheerful', 'sad'],
        cold: ['hot', 'warm', 'cool'],
        foot: ['feet', 'toes', 'legs'],
        leaf: ['leaves', 'leafs', 'leaf']
    };
    if (map[lc]) return map[lc].slice(0, 3);
    const out = [];
    if (lc.endsWith('y')) out.push(lc.slice(0, -1) + 'ies');
    out.push(lc + 's');
    out.push(lc + 'ed');
    const uniq = Array.from(new Set(out)).filter(x => x !== lc);
    while (uniq.length < 3) uniq.push('no');
    return uniq.slice(0, 3);
}

function generateListDistractors(correct) {
    const parts = String(correct).split(',').map(p => p.trim()).filter(Boolean);
    if (parts.length < 2) return ['solid, liquid, gas', 'solid, liquid, water', 'solid, gas, liquid'];
    const out = [];
    out.push(parts.slice().reverse().join(', '));
    out.push(['plasma'].concat(parts.slice(1)).join(', '));
    out.push(parts.slice(0, parts.length - 1).concat(['water']).join(', '));
    return out.slice(0, 3);
}

function detectType(answer) {
    const a = String(answer);
    if (a.indexOf(',') !== -1) return 'list';
    if (/^\s*\d+\/\d+\s*$/.test(a)) return 'fraction';
    if (/^-?\d+\.\d+$/.test(a.trim())) return 'decimal';
    if (/^-?\d+$/.test(a.trim())) return 'integer';
    if (a.trim().length === 1 && /[^A-Za-z0-9\s]/.test(a)) return 'symbol';
    return 'text';
}

function questionNeedsReview(question, answer) {
    const q = String(question).toLowerCase();
    if (q.includes('enter') || q.includes('example')) return true;
    if (String(answer).indexOf(',') !== -1) return true;
    if (String(answer).length > 40) return true;
    if (q.startsWith('what is a') || q.startsWith('what is the')) return true;
    return false;
}

function convertNestedToMcq(normalized) {
    let skippedInvalidItems = 0;

    for (const sub of Object.keys(normalized)) {
        const years = normalized[sub];
        for (const yr of Object.keys(years)) {
            const arr = years[yr];
            for (const item of arr) {
                if (!item || typeof item !== 'object') {
                    skippedInvalidItems++;
                    continue;
                }

                if (item.choices && Array.isArray(item.choices) && item.choices.length >= 4) continue;
                const answer = item.answer || item.answer === 0 ? item.answer : item.correct || item.answer === 0 ? item.answer : (item.answer === undefined ? item.answer : item.answer);
                const type = detectType(answer);
                let distractors = [];
                if (type === 'integer' || type === 'decimal') distractors = generateNumericDistractors(answer);
                else if (type === 'fraction') distractors = generateFractionDistractors(answer);
                else if (type === 'list') distractors = generateListDistractors(answer);
                else distractors = generateTextDistractors(answer);

                const choices = [String(answer)].concat(distractors).filter(Boolean);
                const seen = new Set();
                const uniq = [];
                for (const c of choices) {
                    const cc = String(c).trim();
                    if (!seen.has(cc)) { seen.add(cc); uniq.push(cc); }
                }
                while (uniq.length < 4) {
                    const filler = 'alt' + uniq.length;
                    if (!seen.has(filler)) { seen.add(filler); uniq.push(filler); }
                }
                const final = uniq.slice(0, 4);
                for (let i = final.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [final[i], final[j]] = [final[j], final[i]];
                }
                item.choices = final;
                item.correctIndex = final.indexOf(String(answer));
                item.answer = final[item.correctIndex] || String(answer);
                item.needsReview = questionNeedsReview(item.question || '', item.answer);
                if (!item.meta || typeof item.meta !== 'object') item.meta = {};
                item.meta.generator = type;
            }
        }
    }

    if (skippedInvalidItems) console.warn(`convertNestedToMcq: skipped ${skippedInvalidItems} invalid question items`);
}

// ============================================
// UI Functions
// ============================================
let toastContainer = null;

function showToast(message, type = 'info', duration = 4000) {
    if (!toastContainer) {
        toastContainer = document.createElement('div');
        toastContainer.id = 'toast-container';
        toastContainer.style.cssText = 'position:fixed;top:20px;right:20px;z-index:10000;display:flex;flex-direction:column;gap:10px;';
        document.body.appendChild(toastContainer);
    }

    const toast = document.createElement('div');
    const colors = { error: '#e74c3c', success: '#37af65', info: '#4a90e2', warning: '#f39c12' };
    const icons = { error: '❌', success: '✅', info: 'ℹ️', warning: '⚠️' };
    toast.style.cssText = `background:${colors[type] || colors.info};color:white;padding:12px 20px;border-radius:8px;box-shadow:0 4px 12px rgba(0,0,0,0.2);font-size:14px;max-width:300px;animation:toastSlideIn 0.3s ease;display:flex;align-items:center;gap:10px;`;
    toast.innerHTML = `<span>${icons[type] || icons.info}</span><span>${message}</span>`;

    const style = document.createElement('style');
    style.textContent = '@keyframes toastSlideIn{from{opacity:0;transform:translateX(100px);}to{opacity:1;transform:translateX(0);}}@keyframes toastSlideOut{from{opacity:1;transform:translateX(0);}to{opacity:0;transform:translateX(100px);}}';
    if (!document.head.querySelector('#toast-styles')) { style.id = 'toast-styles'; document.head.appendChild(style); }

    toastContainer.appendChild(toast);

    setTimeout(() => {
        toast.style.animation = 'toastSlideOut 0.3s ease forwards';
        setTimeout(() => toast.remove(), 300);
    }, duration);
}

function showConfirmDialog(message, onConfirm, onCancel) {
    if (confirm(message)) {
        onConfirm?.();
    } else {
        onCancel?.();
    }
}

function showLoadingIndicator(show) {
    const existing = document.querySelector('.loading-indicator');
    if (show) {
        if (!existing) {
            const container = document.querySelector('.container') || document.body;
            const indicator = document.createElement('div');
            indicator.className = 'loading-indicator';
            indicator.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.7);display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:9999;';
            indicator.innerHTML = '<div style="width:60px;height:60px;border:6px solid rgba(255,255,255,0.3);border-top-color:#fff;border-radius:50%;animation:spin 1s linear infinite;"></div><p style="color:#fff;font-size:1.5rem;margin-top:1rem;">Loading questions...</p>';
            const spinStyle = document.createElement('style');
            spinStyle.textContent = '@keyframes spin{to{transform:rotate(360deg);}}';
            if (!document.head.querySelector('#spin-style')) { spinStyle.id = 'spin-style'; document.head.appendChild(spinStyle); }
            container.appendChild(indicator);
        }
    } else {
        if (existing) existing.remove();
    }
}

// ============================================
// User Management
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

// ============================================
// Quiz Functions
// ============================================
async function loadQuestions() {
    showLoadingIndicator(true);

    // Check if we already have data from a script tag (for local file access)
    if (typeof QUESTIONS_DATA !== 'undefined') {
        console.log('Using pre-loaded QUESTIONS_DATA from script tag');
        let normalized = QUESTIONS_DATA;
        convertNestedToMcq(normalized);
        state.questionsData = normalized;
        state.questionsLoaded = true;
        showLoadingIndicator(false);
        return;
    }

    // Timeout protection - hide loading after 10 seconds
    const timeoutId = setTimeout(() => {
        console.log('Loading timeout - hiding indicator');
        showLoadingIndicator(false);
    }, 10000);

    try {
        // ... (rest of the fetch logic remains as fallback or for production)
        const baseRoot = (() => {
            const seg = location.pathname.split('/').filter(Boolean);
            const cleaned = seg.filter(s => s && s !== 'index.html');
            if (cleaned.length > 0 && location.hostname !== 'localhost') {
                return '/' + cleaned[0] + '/';
            }
            return '/';
        })();

        const paths = [
            baseRoot + 'questions.json',
            'questions.json',
            baseRoot + 'data/questions.json',
            'data/questions.json'
        ];

        console.log('Attempting to load questions from:', baseRoot);

        let response = null;
        let loadedPath = null;

        for (const path of paths) {
            try {
                response = await fetch(path, { cache: 'no-cache' });
                if (response.ok) {
                    loadedPath = path;
                    console.log('Successfully loaded:', loadedPath);
                    break;
                }
            } catch (err) {
                console.log(`Failed: ${path} - ${err.message}`);
                continue;
            }
        }

        if (!response || !response.ok) {
            console.error('All paths failed');
            showToast('Failed to load questions. Opening via file:// without local server?', 'warning');
            clearTimeout(timeoutId);
            showLoadingIndicator(false);
            return;
        }

        const loadedData = await response.json();

        if (!loadedData || typeof loadedData !== 'object') {
            throw new Error('Invalid JSON format');
        }

        let normalized = {};
        if (Array.isArray(loadedData)) {
            for (const item of loadedData) {
                const sub = item.subject || 'Unknown';
                const yr = item.year || 'Year 3';
                if (!normalized[sub]) normalized[sub] = {};
                if (!normalized[sub][yr]) normalized[sub][yr] = [];
                if (item.correctIndex != null && Array.isArray(item.choices) && item.choices[item.correctIndex]) {
                    item.answer = item.choices[item.correctIndex];
                }
                normalized[sub][yr].push(item);
            }
        } else {
            normalized = loadedData;
        }

        convertNestedToMcq(normalized);
        state.questionsData = normalized;
        state.questionsLoaded = true;
        console.log('Questions loaded successfully!');

    } catch (error) {
        console.error('Error loading questions:', error);
        showToast('Failed to load questions. Check console for details.', 'error');
    } finally {
        clearTimeout(timeoutId);
        showLoadingIndicator(false);
    }
}

function startQuiz() {
    if (!state.questionsLoaded) {
        showToast('Questions are still loading. Please wait...', 'info');
        return;
    }

    if (!state.questionsData[state.currentSubject] || !state.questionsData[state.currentSubject][state.currentYear]) {
        showToast(`No questions available for ${state.currentSubject} - ${state.currentYear}`, 'error');
        return;
    }

    const allQuestions = state.questionsData[state.currentSubject][state.currentYear];
    const shuffledQuestions = shuffleArray(allQuestions);
    state.currentQuestions = shuffledQuestions.slice(0, 5);
    state.currentQuestionIndex = 0;
    state.userAnswers = [];
    stopTimer();

    const quizTitle = getElement('quiz-title');
    const totalQuestions = getElement('total-questions');
    if (quizTitle) quizTitle.textContent = `${state.currentSubject} - ${state.currentYear}`;
    if (totalQuestions) totalQuestions.textContent = state.currentQuestions.length;

    showScreen('question');
    loadQuestion(0);
}

function startTimer() {
    state.timeRemaining = 120;
    updateTimerDisplay();
    stopTimer();
    state.timerInterval = setInterval(() => {
        state.timeRemaining--;
        updateTimerDisplay();
        if (state.timeRemaining <= 0) {
            stopTimer();
            showToast('Time is up! Moving to next question...', 'warning');

            // Auto submit and move on
            const choicesContainer = getElement('choices-container');
            const selectedChoice = choicesContainer?.querySelector('input[name="choice"]:checked');
            const answerInput = getElement('answer-input');
            let userAnswer = selectedChoice ? selectedChoice.value : (answerInput ? answerInput.value.trim() : '');

            if (userAnswer === '') {
                state.userAnswers[state.currentQuestionIndex] = 'No answer';
            } else {
                state.userAnswers[state.currentQuestionIndex] = userAnswer;
            }

            nextQuestion();
        }
    }, 1000);
}

function stopTimer() {
    if (state.timerInterval) {
        clearInterval(state.timerInterval);
        state.timerInterval = null;
    }
}

function updateUserUI() {
    const userDisplay = getElement('current-user-name');
    const welcomeDisplay = getElement('welcome-name');

    if (state.currentUser) {
        if (userDisplay) userDisplay.textContent = state.currentUser.name;
        if (welcomeDisplay) welcomeDisplay.textContent = state.currentUser.name;

        // Update reward indicators in sidebar if they exist
        const starCountEl = getElement('sidebar-star-count');
        if (starCountEl) {
            starCountEl.textContent = state.rewards.stars || 0;
            starCountEl.parentElement.style.display = state.rewards.stars > 0 ? 'flex' : 'none';
        }
    } else {
        if (welcomeDisplay) welcomeDisplay.textContent = 'Learner';
        const starCountEl = getElement('sidebar-star-count');
        if (starCountEl) starCountEl.parentElement.style.display = 'none';
    }

    // Update grade badge/info if needed
    const userGrade = getElement('current-user-grade');
    if (userGrade && state.currentUser) {
        userGrade.textContent = state.currentUser.grade || 'No Grade';
    }

    // Update XP and Level UI
    const levelEl = getElement('sidebar-level');
    const xpBarEl = getElement('sidebar-xp-fill');
    const streakEl = getElement('sidebar-streak-count');
    const xpTextEl = getElement('sidebar-xp-text');

    if (state.currentUser) {
        const rewards = state.rewards;
        if (levelEl) levelEl.textContent = `Lvl ${rewards.level || 1}`;
        if (streakEl) {
            streakEl.textContent = rewards.streak || 0;
            streakEl.parentElement.style.display = (rewards.streak > 0) ? 'flex' : 'none';
        }

        if (xpBarEl && xpTextEl) {
            const currentLevel = rewards.level || 1;
            const currentXP = rewards.xp || 0;
            const prevThreshold = getLevelThreshold(currentLevel - 1);
            const nextThreshold = getLevelThreshold(currentLevel);
            const progress = ((currentXP - prevThreshold) / (nextThreshold - prevThreshold)) * 100;

            xpBarEl.style.width = `${Math.min(100, Math.max(0, progress))}%`;
            xpTextEl.textContent = `${currentXP} / ${nextThreshold} XP`;
        }
    } else {
        if (levelEl) levelEl.textContent = '';
        if (xpBarEl) xpBarEl.style.width = '0%';
        if (xpTextEl) xpTextEl.textContent = 'Guest';
        if (streakEl) streakEl.parentElement.style.display = 'none';
    }
}

function updateTimerDisplay() {
    const timerEl = getElement('timer-display');
    if (timerEl) {
        timerEl.textContent = `Time: ${state.timeRemaining}s`;
        timerEl.style.color = state.timeRemaining <= 10 ? '#e74c3c' : '#fff';
    }
}

function selectSubject(subject) {
    state.currentSubject = subject;
    const currentUser = state.currentUser;
    if (currentUser && currentUser.grade && state.questionsData[subject]?.[currentUser.grade]) {
        state.currentYear = currentUser.grade;
        showSkillTree(subject, state.currentYear);
    } else {
        const titleEl = getElement('selected-subject-title');
        if (titleEl) titleEl.textContent = subject + ' - Select Topic';

        const yearSelectionEl = getElement('year-selection');
        if (yearSelectionEl) {
            yearSelectionEl.innerHTML = '';
            const categories = Object.keys(state.questionsData[subject] || {});

            // Map common topics to icons for a premium feel
            const topicIcons = {
                'Verbal Reasoning': '🧠',
                'English & Maths': '➕',
                'Year 3': '🥉',
                'Year 6': '🥇',
                'Default': '📝'
            };

            categories.forEach(cat => {
                const btn = document.createElement('button');
                btn.type = 'button';
                btn.className = 'year-button';

                const icon = topicIcons[cat] || topicIcons['Default'];
                btn.innerHTML = `
                    <span class="subject-icon">${icon}</span>
                    <span class="subject-name">${cat}</span>
                `;

                btn.onclick = () => selectYear(cat);
                yearSelectionEl.appendChild(btn);
            });
        }
        showScreen('year');
    }
}

function selectYear(year) {
    state.currentYear = year;
    showSkillTree(state.currentSubject, year);
}

function showSkillTree(subject, year) {
    const skillListEl = getElement('skill-list');
    const titleEl = getElement('skill-subject-title');
    const subtitleEl = getElement('skill-year-subtitle');

    if (titleEl) titleEl.textContent = subject;
    if (subtitleEl) subtitleEl.textContent = year;

    if (skillListEl) {
        skillListEl.innerHTML = '';

        // Synthesize skills from questions for now (Mocking IXL categories)
        // In a real app, questions.json would have SkillIDs
        const categories = {
            'A': 'Basics & Identity',
            'B': 'Advanced Concepts',
            'C': 'Problem Solving'
        };

        Object.entries(categories).forEach(([code, name]) => {
            const categorySection = document.createElement('div');
            categorySection.className = 'skill-category';
            categorySection.innerHTML = `<h2>${code}. ${name}</h2>`;

            const itemsGrid = document.createElement('div');
            itemsGrid.className = 'skill-items';

            // Just split questions into 5 arbitrary skills for demo
            for (let i = 1; i <= 5; i++) {
                const skillId = `${code}.${i}`;
                const mastery = state.currentUser ? getSkillScore(state.currentUser.id, subject, year, skillId) : 0;

                const skillItem = document.createElement('div');
                skillItem.className = 'skill-item';
                skillItem.innerHTML = `
                    <span class="skill-id">${skillId}</span>
                    <span class="skill-name">Practice Set ${i}</span>
                    <span class="skill-score" style="background: ${mastery === 100 ? 'var(--accent)' : 'var(--success)'}">${mastery}</span>
                `;
                skillItem.onclick = () => startPractice(skillId);
                itemsGrid.appendChild(skillItem);
            }
            categorySection.appendChild(itemsGrid);
            skillListEl.appendChild(categorySection);
        });
    }
    showScreen('skill');
}

function startPractice(skillId) {
    state.currentSkill = skillId;
    state.smartScore = 0;
    const smartScoreEl = getElement('smart-score');
    if (smartScoreEl) smartScoreEl.textContent = '0';
    startQuiz();
}

function speakQuestion() {
    if (!('speechSynthesis' in window)) {
        showToast('Sorry, your browser does not support text-to-speech.', 'error');
        return;
    }

    // Cancel any ongoing speech
    window.speechSynthesis.cancel();

    const question = state.currentQuestions[state.currentQuestionIndex];
    if (!question) return;

    const utterance = new SpeechSynthesisUtterance(question.question);

    // Set language based on subject
    // Chinese -> Cantonese (zh-HK) per user request
    if (state.currentSubject === 'Chinese') {
        utterance.lang = 'zh-HK';
    } else {
        utterance.lang = 'en-GB';
    }

    // Adjust rate and pitch for a friendly teacher-like voice
    utterance.rate = 0.9;
    utterance.pitch = 1.0;

    window.speechSynthesis.speak(utterance);
}

function speakEncouragement() {
    if (!('speechSynthesis' in window)) return;

    const phrases = {
        en: ["Excellent!", "Brilliant!", "You're a star!", "Keep it up!", "Great job!", "Spot on!"],
        zh: ["好叻呀！", "非常之好！", "答啱喇！", "繼續加油！", "你真係聰明！", "太棒了！"]
    };

    const lang = state.currentSubject === 'Chinese' ? 'zh' : 'en';
    const list = phrases[lang];
    const randomPhrase = list[Math.floor(Math.random() * list.length)];

    const utterance = new SpeechSynthesisUtterance(randomPhrase);
    utterance.lang = lang === 'zh' ? 'zh-HK' : 'en-GB';
    utterance.rate = 1.0;
    utterance.pitch = 1.1; // Slightly higher pitch for excitement

    window.speechSynthesis.speak(utterance);
}

function loadQuestion(index) {
    // Start/Reset timer for each question
    startTimer();

    // Cancel speech when loading a new question
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
    }
    const question = state.currentQuestions[index];
    const questionText = getElement('question-text');
    const currentQuestion = getElement('current-question');
    const progressFill = getElement('progress-fill');

    if (questionText) questionText.textContent = question.question;
    if (currentQuestion) currentQuestion.textContent = index + 1;

    const progress = (index / state.currentQuestions.length) * 100;
    if (progressFill) progressFill.style.width = progress + '%';

    const prevBtn = getElement('prev-btn');
    const nextBtn = getElement('next-btn');
    if (prevBtn) prevBtn.style.display = index === 0 ? 'none' : 'inline-block';
    if (nextBtn) nextBtn.textContent = index === state.currentQuestions.length - 1 ? 'Finish Quiz' : 'Next Question';

    const answerInput = getElement('answer-input');
    const choicesContainer = getElement('choices-container');

    if (question.choices && Array.isArray(question.choices) && question.choices.length > 0) {
        if (answerInput) { answerInput.style.display = 'none'; answerInput.required = false; }
        if (choicesContainer) choicesContainer.innerHTML = '';

        question.choices.forEach((choice, i) => {
            const id = `choice-${index}-${i}`;

            const wrapper = document.createElement('div');
            wrapper.className = 'choice-item';
            wrapper.onclick = () => {
                const radio = wrapper.querySelector('input[type="radio"]');
                if (radio) radio.checked = true;

                // Update styling
                if (choicesContainer) {
                    choicesContainer.querySelectorAll('.choice-item').forEach(cw => cw.classList.remove('selected'));
                }
                wrapper.classList.add('selected');
            };

            const input = document.createElement('input');
            input.type = 'radio';
            input.name = 'choice';
            input.id = id;
            input.value = choice;
            input.style.display = 'none'; // hide raw radio button

            const letterSpan = document.createElement('span');
            letterSpan.className = 'choice-letter';
            letterSpan.textContent = String.fromCharCode(65 + i);

            const textSpan = document.createElement('span');
            textSpan.className = 'choice-text';
            textSpan.textContent = choice;

            wrapper.appendChild(input);
            wrapper.appendChild(letterSpan);
            wrapper.appendChild(textSpan);

            if (choicesContainer) choicesContainer.appendChild(wrapper);
        });

        const prev = state.userAnswers[index];
        if (prev && choicesContainer) {
            const selected = choicesContainer.querySelector(`input[value="${CSS.escape(prev)}"]`);
            if (selected) {
                selected.checked = true;
                const wrapper = selected.closest('.choice-item');
                if (wrapper) wrapper.classList.add('selected');
            }
        }

        const firstInput = choicesContainer?.querySelector('input[name="choice"]');
        if (firstInput) firstInput.focus();
    } else {
        if (choicesContainer) choicesContainer.innerHTML = '';
        if (answerInput) { answerInput.style.display = ''; answerInput.required = true; answerInput.value = state.userAnswers[index] || ''; answerInput.focus(); }
    }
}

function updateSmartScore(isCorrect) {
    let score = state.smartScore;
    if (isCorrect) {
        if (score < 80) score += 10;
        else if (score < 90) score += 5;
        else if (score < 96) score += 2;
        else if (score < 100) score += 1;
    } else {
        if (score > 90) score -= 15;
        else if (score > 80) score -= 10;
        else if (score > 50) score -= 5;
        else score = Math.max(0, score - 2);
    }
    state.smartScore = Math.min(100, score);
    const scoreEl = getElement('smart-score');
    if (scoreEl) {
        scoreEl.textContent = state.smartScore;
        // Animation effect
        scoreEl.style.transform = 'scale(1.2)';
        setTimeout(() => scoreEl.style.transform = 'scale(1)', 200);
    }

    // Persist mastery level
    if (state.currentUser) {
        saveSkillScore(state.currentUser.id, state.currentSubject, state.currentYear, state.currentSkill, state.smartScore);
    }
}

function submitQuiz() {
    const choicesContainer = getElement('choices-container');
    const selectedChoice = choicesContainer?.querySelector('input[name="choice"]:checked');
    const answerInput = getElement('answer-input');
    const errorEl = getElement('quiz-answer-error');

    let userAnswer = selectedChoice ? selectedChoice.value : (answerInput ? answerInput.value.trim() : '');

    if (userAnswer === '') {
        if (errorEl) { errorEl.textContent = 'Please enter or select an answer!'; errorEl.classList.add('visible'); }
        if (answerInput) answerInput.focus();
        return false;
    }

    if (errorEl) errorEl.classList.remove('visible');
    state.userAnswers[state.currentQuestionIndex] = userAnswer;

    const question = state.currentQuestions[state.currentQuestionIndex];
    const isCorrect = compareAnswers(userAnswer, question.answer);

    // Play feedback sound
    if (isCorrect) {
        sounds.correct();
        updateSmartScore(true);
        speakEncouragement(); // Add verbal encouragement
        nextQuestion(); // Automatic move on correct
    } else {
        sounds.incorrect();
        updateSmartScore(false);
        showExplanation(question, userAnswer);
    }

    return true;
}

function showExplanation(question, userAnswer) {
    const overlay = getElement('explanation-overlay');
    getElement('exp-question').textContent = question.question;
    getElement('exp-user-answer').textContent = userAnswer;
    getElement('exp-correct-answer').textContent = question.answer;
    getElement('exp-detail').textContent = question.explanation || "Review the concept and try again.";

    if (overlay) overlay.classList.add('active');
}

function closeExplanation() {
    const overlay = getElement('explanation-overlay');
    if (overlay) overlay.classList.remove('active');
    nextQuestion();
}

function nextQuestion() {
    if (state.currentQuestionIndex < state.currentQuestions.length - 1) {
        state.currentQuestionIndex++;
        loadQuestion(state.currentQuestionIndex);
    } else {
        showResults();
    }
}

function showResults() {
    stopTimer();
    showScreen('results');

    let correctCount = 0;
    const answersList = getElement('answers-list');
    const resultsSubtitle = getElement('results-subtitle');
    const scoreMessage = getElement('score-message');

    if (answersList) answersList.innerHTML = '';
    if (resultsSubtitle) resultsSubtitle.textContent = `${state.currentSubject} - ${state.currentYear}`;

    state.currentQuestions.forEach((q, index) => {
        const userAnswer = state.userAnswers[index] || 'No answer';
        const isCorrect = compareAnswers(userAnswer, q.answer);
        if (isCorrect) correctCount++;

        const answerItem = createElement('div', `answer-item ${isCorrect ? 'correct' : 'incorrect'}`);
        answerItem.innerHTML = `
            <div class="answer-header">
                <span class="answer-number">Question ${index + 1}:</span>
                <span class="answer-status">${isCorrect ? '✓ Correct' : '✗ Incorrect'}</span>
            </div>
            <div class="answer-content">
                <p><strong>Question:</strong> ${q.question}</p>
                <p><strong>Your answer:</strong> ${userAnswer}</p>
                <p><strong>Correct answer:</strong> ${q.answer}</p>
                ${q.explanation ? `<p class="explanation"><strong>Explanation:</strong> ${q.explanation}</p>` : ''}
            </div>
        `;
        if (answersList) answersList.appendChild(answerItem);
    });

    const percentage = Math.round((correctCount / state.currentQuestions.length) * 100);
    console.log(`Quiz Finished: ${correctCount}/${state.currentQuestions.length} (${percentage}%)`);
    if (!state.currentUser) console.log("Warning: No user selected. Rewards will not be tracked.");
    const scoreText = getElement('score-text');
    const percentageText = getElement('percentage-text');
    if (percentageText) percentageText.textContent = `${percentage}%`;
    if (percentage === 100 && typeof confetti === 'function') {
        confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#6366f1', '#ec4899', '#fbbf24']
        });
    }

    if (scoreText) scoreText.textContent = `${correctCount} / ${state.currentQuestions.length}`;
    if (percentageText) percentageText.textContent = `${percentage}%`;

    if (scoreMessage) {
        if (percentage === 100) { scoreMessage.textContent = 'Excellent! Perfect score! 🌟'; scoreMessage.className = 'score-message excellent'; }
        else if (percentage >= 80) { scoreMessage.textContent = 'Well done! Great job! 🎉'; scoreMessage.className = 'score-message great'; }
        else if (percentage >= 60) { scoreMessage.textContent = 'Good effort! Keep practising! 👍'; scoreMessage.className = 'score-message good'; }
        else { scoreMessage.textContent = 'Keep practising! You can do it! 💪'; scoreMessage.className = 'score-message okay'; }
    }

    console.log("Checking User State for rewards:", {
        currentUser: state.currentUser,
        rewards: state.rewards,
        percentage: percentage
    });

    if (state.currentUser) {
        let earnedStar = false;
        if (percentage === 100) {
            console.log(`Current rewards object:`, state.rewards);
            if (!state.rewards) {
                console.error("Critical: state.rewards is missing for user!");
                state.rewards = state.currentUser.rewards || { stars: 0, badges: [] };
            }
            console.log(`Awarding Star. Current stars: ${state.rewards.stars}`);
            state.rewards.stars++;
            earnedStar = true;
            console.log(`Star awarded. New total: ${state.rewards.stars}`);
        }

        const entry = {
            date: new Date().toISOString(),
            subject: state.currentSubject,
            year: state.currentYear,
            correct: correctCount,
            total: state.currentQuestions.length,
            percentage,
            star: earnedStar
        };
        recordHistory(entry, state.currentUser);

        if (earnedStar) {
            checkAndAwardBadges(state.currentSubject);
        }

        // Award XP
        let awardedXP = (correctCount * 10); // 10 XP per correct answer
        awardedXP += 50; // Base completion bonus
        if (percentage === 100) awardedXP += 50; // Extra perfect score bonus

        // Streak Multiplier (Example: 1.2x if streak > 1)
        if (state.rewards.streak > 1) {
            awardedXP = Math.round(awardedXP * 1.2);
        }

        awardXP(awardedXP);
        updateUserUI();
    }
}

function awardXP(amount) {
    if (!state.currentUser) return;

    state.rewards.xp = (state.rewards.xp || 0) + amount;
    showToast(`+${amount} XP Earned! ✨`, 'info');

    checkLevelUp();
    saveUsersToStorage();
}

function getLevelThreshold(level) {
    if (level <= 0) return 0;
    // Level 1: 0, Level 2: 100, Level 3: 300, Level 4: 600...
    let total = 0;
    for (let i = 1; i <= level; i++) {
        total += i * 100;
    }
    return total;
}

function checkLevelUp() {
    let currentLevel = state.rewards.level || 1;
    let xp = state.rewards.xp || 0;

    let nextThreshold = getLevelThreshold(currentLevel);

    if (xp >= nextThreshold) {
        state.rewards.level = currentLevel + 1;
        showLevelUpFeedback();
        // Check again in case they jumped multiple levels
        checkLevelUp();
    }
}

function showLevelUpFeedback() {
    showToast(`LEVEL UP! You are now Level ${state.rewards.level}! 🎉`, 'success', 8000);

    if (typeof confetti === 'function') {
        confetti({
            particleCount: 200,
            spread: 90,
            origin: { y: 0.5 },
            colors: ['#ff9500', '#ffcc00', '#34c759', '#0066cc']
        });
    }

    // Play a special sound? (Placeholder)
    sounds.correct();
    setTimeout(() => sounds.correct(), 200);
}

function checkStreak() {
    if (!state.currentUser) return;

    const now = new Date();
    const todayStr = now.toISOString().split('T')[0];
    const lastActive = state.rewards.lastActiveDate;

    if (!lastActive) {
        state.rewards.streak = 1;
        state.rewards.lastActiveDate = todayStr;
    } else if (lastActive === todayStr) {
        // Already active today, do nothing
    } else {
        const lastDate = new Date(lastActive);
        const diffDays = Math.floor((now - lastDate) / (1000 * 60 * 60 * 24));

        if (diffDays === 1) {
            // Consecutive day!
            state.rewards.streak++;
            showToast(`${state.rewards.streak} Day Streak! 🔥`, 'success');
        } else if (diffDays > 1) {
            // Streak broken
            state.rewards.streak = 1;
            showToast('Streak broken, keep practicing every day!', 'warning');
        }
        state.rewards.lastActiveDate = todayStr;
    }

    saveUsersToStorage();
    updateUserUI();
}

function restartQuiz() {
    startQuiz();
}

function chooseNewQuiz() {
    showScreen('subject');
}

function goToDashboard() {
    showScreen('dashboard');
}

function backToSubjects() {
    showConfirmDialog('Are you sure you want to go back? Your progress will be lost.', () => {
        stopTimer();
        showScreen('subject');
    });
}

// ============================================
// Event Listeners Setup
// ============================================
function setupEventListeners() {
    // Sidebar Toggle
    const toggleBtn = getElement('toggle-sidebar');
    const sidebar = getElement('sidebar');
    if (toggleBtn && sidebar) {
        toggleBtn.addEventListener('click', () => {
            sidebar.classList.toggle('active');
        });
    }

    // Sidebar & Navigation buttons
    document.querySelectorAll('.nav-item').forEach(button => {
        button.addEventListener('click', () => {
            if (button.dataset.view === 'dashboard') {
                showScreen('dashboard');
            } else if (button.dataset.subject) {
                selectSubject(button.dataset.subject);
            } else if (button.id === 'sidebar-history') {
                const currentUser = state.currentUser;
                if (!currentUser) { showToast('Please select a user first', 'info'); return; }
                showHistoryModal(currentUser.id);
            } else if (button.id === 'open-report-btn') {
                openProgressReport();
            }

            // Close sidebar on mobile after click
            if (window.innerWidth <= 900 && sidebar) sidebar.classList.remove('active');
        });
    });

    // Search Functionality
    const searchInput = getElement('skill-search');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase();
            document.querySelectorAll('.skill-item').forEach(item => {
                const text = item.textContent.toLowerCase();
                item.style.display = text.includes(query) ? 'flex' : 'none';
            });
            // Hide empty categories
            document.querySelectorAll('.skill-category').forEach(cat => {
                const visibleItems = cat.querySelectorAll('.skill-item[style="display: flex;"]');
                const allItems = cat.querySelectorAll('.skill-item');
                // Handle initial state where style.display might be empty
                const hasVisible = Array.from(allItems).some(i => i.style.display !== 'none');
                cat.style.display = hasVisible ? 'block' : 'none';
            });
        });
    }

    // Recommendation Cards and Buttons
    document.querySelectorAll('.recommendation-card').forEach(card => {
        const btn = card.querySelector('.start-card-btn');
        const action = () => {
            if (card.id === 'resume-skill-card') {
                // If it's the resume card and we have a skill, hypothetically resume it. 
                // For now, default to a subject if nothing is set.
                selectSubject(state.currentSubject || 'Maths');
            } else if (card.dataset.subject) {
                selectSubject(card.dataset.subject);
            } else if (card.id === 'dash-report-card') {
                openProgressReport();
            }
        };

        // Attach click to the card
        card.addEventListener('click', action);
        // Ensure button click doesn't double-fire but still works if card click is somehow blocked
        if (btn) {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                action();
            });
        }
    });


    // Subject buttons (legacy subjects screen)
    document.querySelectorAll('.subject-button').forEach(button => {
        button.addEventListener('click', () => selectSubject(button.dataset.subject));
    });

    // Year buttons
    document.querySelectorAll('.year-button').forEach(button => {
        button.addEventListener('click', () => selectYear(button.dataset.year));
    });

    // Results back button
    const backToStartBtn = getElement('back-to-start');
    if (backToStartBtn) {
        backToStartBtn.addEventListener('click', () => {
            showScreen('skill');
        });
    }

    // Quiz form
    const quizForm = getElement('quiz-form');
    if (quizForm) {
        quizForm.addEventListener('submit', (e) => {
            e.preventDefault();
            submitQuiz();
        });
    }

    // Previous button
    const prevBtn = getElement('prev-btn');
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            if (state.currentQuestionIndex > 0) {
                state.currentQuestionIndex--;
                loadQuestion(state.currentQuestionIndex);
            }
        });
    }

    // Restart button
    const restartBtn = getElement('restart-btn');
    if (restartBtn) restartBtn.addEventListener('click', restartQuiz);

    // New quiz button
    const newQuizBtn = getElement('new-quiz-btn');
    if (newQuizBtn) newQuizBtn.addEventListener('click', chooseNewQuiz);

    const resDashBtn = getElement('results-dashboard-btn');
    if (resDashBtn) resDashBtn.addEventListener('click', goToDashboard);

    // Back to subjects (Legacy footer)
    const backToSubjectsBtn = getElement('back-to-subjects'); // Renamed or just use existing
    if (backToSubjectsBtn) backToSubjectsBtn.addEventListener('click', backToSubjects);

    // TTS button
    // Quiz Controls
    const exitQuizBtn = getElement('exit-quiz');
    if (exitQuizBtn) {
        exitQuizBtn.addEventListener('click', () => {
            if (confirm('Are you sure you want to exit this practice? Your progress will be saved.')) {
                showScreen('skill');
                stopTimer();
            }
        });
    }

    const speakBtn = getElement('speak-btn');
    if (speakBtn) speakBtn.addEventListener('click', speakQuestion);

    // Explanation Close
    const closeExpBtn = getElement('close-explanation');
    if (closeExpBtn) closeExpBtn.addEventListener('click', closeExplanation);

    const reportBackBtn = getElement('report-back-btn');
    if (reportBackBtn) {
        reportBackBtn.addEventListener('click', () => showScreen('dashboard'));
    }

    // User modal buttons
    const openUserModalBtn = getElement('open-user-modal') || getElement('open-user-modal-footer');
    const closeUserModalBtn = getElement('close-user-modal');
    const userForm = getElement('user-form');
    const nameInput = getElement('user-name');
    const gradeSelect = getElement('user-grade');
    const saveBtn = getElement('save-user-btn');

    if (openUserModalBtn) openUserModalBtn.addEventListener('click', () => { openUserModal(); clearFormErrors(); });
    if (closeUserModalBtn) closeUserModalBtn.addEventListener('click', closeUserModal);

    if (nameInput) {
        nameInput.addEventListener('input', () => {
            const error = validateName(nameInput.value);
            if (error) { showError('user-name-error', error); setInputState('user-name', false); }
            else { hideError('user-name-error'); setInputState('user-name', true); }
        });
    }

    if (gradeSelect) {
        gradeSelect.addEventListener('change', () => {
            const error = validateGrade(gradeSelect.value);
            if (error) { showError('user-grade-error', error); setInputState('user-grade', false); }
            else { hideError('user-grade-error'); setInputState('user-grade', true); }
        });
    }

    if (userForm) {
        userForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            clearFormErrors();

            const name = nameInput?.value || '';
            const grade = gradeSelect?.value || '';
            const nameError = validateName(name);
            const gradeError = validateGrade(grade);

            let hasErrors = false;
            if (nameError) { showError('user-name-error', nameError); setInputState('user-name', false); hasErrors = true; }
            else setInputState('user-name', true);

            if (gradeError) { showError('user-grade-error', gradeError); setInputState('user-grade', false); hasErrors = true; }
            else setInputState('user-grade', true);

            if (hasErrors) return;

            if (saveBtn) { saveBtn.disabled = true; saveBtn.textContent = 'Saving...'; }

            await new Promise(resolve => setTimeout(resolve, 300));

            const user = { id: Date.now(), name: name.trim(), grade };
            state.users.push(user);
            saveUsersToStorage();
            setCurrentUser(user);
            renderUserSelect();

            if (saveBtn) { saveBtn.disabled = false; saveBtn.textContent = 'Save User'; }

            const successEl = getElement('user-form-success');
            if (successEl) { successEl.textContent = 'User saved successfully!'; successEl.classList.add('visible'); }

            setTimeout(() => {
                closeUserModal();
                if (successEl) successEl.classList.remove('visible');
                if (nameInput) nameInput.value = '';
                if (gradeSelect) gradeSelect.value = '';
            }, 500);
        });
    }

    // User select
    const userSelect = getElement('user-select');
    if (userSelect) {
        userSelect.addEventListener('change', (e) => {
            const id = e.target.value;
            if (id === 'guest' || !id) {
                setCurrentUser(null);
            } else {
                const selected = state.users.find(u => String(u.id) === String(id));
                if (selected) setCurrentUser(selected);
            }
        });
    }

    // History buttons
    const openHistoryBtn = getElement('open-history-btn');
    const closeHistoryBtn = getElement('close-history-btn');
    const clearHistoryBtn = getElement('clear-history-btn');

    if (openHistoryBtn) {
        openHistoryBtn.addEventListener('click', () => {
            const currentUser = JSON.parse(localStorage.getItem('quiz_current_user'));
            if (!currentUser) { showToast('Please select a user first', 'info'); return; }
            showHistoryModal(currentUser.id);
        });
    }

    if (closeHistoryBtn) {
        closeHistoryBtn.addEventListener('click', () => {
            const modal = getElement('history-modal');
            if (modal) modal.style.display = 'none';
        });
    }

    if (clearHistoryBtn) {
        clearHistoryBtn.addEventListener('click', () => {
            const currentUser = JSON.parse(localStorage.getItem('quiz_current_user'));
            if (!currentUser) return;
            if (!confirm('Clear history for this user?')) return;
            delete state.quizHistory[String(currentUser.id)];
            saveHistoryToStorage();
            showHistoryModal(currentUser.id);
        });
    }

    // Delete user button
    const deleteUserBtn = getElement('delete-user-btn');
    if (deleteUserBtn) {
        deleteUserBtn.addEventListener('click', () => {
            if (!state.currentUser) {
                showToast('Please select a user to delete', 'info');
                return;
            }

            if (confirm(`Are you sure you want to delete user "${state.currentUser.name}"? This will also remove their history.`)) {
                // Remove from users list
                state.users = state.users.filter(u => String(u.id) !== String(state.currentUser.id));
                saveUsersToStorage();

                // Remove from history
                delete state.quizHistory[String(state.currentUser.id)];
                saveHistoryToStorage();

                // Clear current user
                setCurrentUser(null);
                localStorage.removeItem('quiz_current_user');

                // Update UI
                renderUserSelect();
                showToast('User deleted successfully', 'success');
            }
        });
    }

    // History modal styling
    const historyModal = getElement('history-modal');
    if (historyModal) historyModal.style.cssText = 'display:none;position:fixed;left:0;top:0;width:100%;height:100%;background:rgba(0,0,0,0.5);align-items:center;justify-content:center;';

    if (openReportBtn) {
        openReportBtn.onclick = openProgressReport;
    }
}

function openProgressReport() {
    console.log('Opening Progress Report...');
    if (state.currentView === 'question') {
        showToast('Finish your practice first!', 'info');
        return;
    }
    if (!state.currentUser) {
        console.log('No user selected for report.');
        showToast('Please select a student first.', 'info');
        return;
    }

    console.log('Generating report for:', state.currentUser.name);
    const reportData = generateReportData(state.currentUser.id);
    renderReport(reportData);

    showScreen('report');
    console.log('Switched to Progress Report screen.');
}

function generateReportData(userId) {
    console.log('Processing history for user ID:', userId);
    const history = state.quizHistory ? (state.quizHistory[String(userId)] || []) : [];
    console.log(`Found ${history.length} history entries.`);

    if (history.length === 0) return null;

    const subjectStats = {};
    history.forEach(entry => {
        if (!subjectStats[entry.subject]) {
            subjectStats[entry.subject] = { total: 0, correct: 0, count: 0 };
        }
        subjectStats[entry.subject].total += entry.total;
        subjectStats[entry.subject].correct += entry.correct;
        subjectStats[entry.subject].count += 1;
    });

    // Calculate strongest/weakest
    let strongest = { name: 'N/A', score: -1 };
    let weakest = { name: 'N/A', score: 101 };

    Object.entries(subjectStats).forEach(([name, stats]) => {
        const avg = (stats.correct / stats.total) * 100;
        if (avg > strongest.score) strongest = { name, score: avg };
        if (avg < weakest.score) weakest = { name, score: avg };
    });

    return {
        student: state.currentUser.name,
        totalQuizzes: history.length,
        totalStars: history.filter(h => h.star).length,
        strongest: strongest.name !== 'N/A' ? strongest : null,
        weakest: weakest.name !== 'N/A' ? weakest : null,
        recentTrend: history.slice(-5).map(h => h.percentage)
    };
}

function renderReport(data) {
    const content = getElement('report-content-full');
    if (!content) return;

    if (!data) {
        content.innerHTML = `
            <div class="no-data-premium">
                <div class="no-data-icon">📊</div>
                <h4>Empty Slate</h4>
                <p>Start your first quiz to unlock personalized insights and learning patterns!</p>
                <button onclick="showScreen('subject')" class="primary-btn" style="margin-top: 1rem">Start Learning</button>
            </div>
        `;
        return;
    }

    const getSubjectIcon = (subject) => {
        const icons = {
            'Maths': '🔢',
            'English': '📚',
            'Chinese': '🧧',
            'Verbal Reasoning': '💡',
            'Non-Verbal Reasoning': '🧩',
            'Science': '🧪'
        };
        return icons[subject] || '📝';
    };

    const trendHtml = data.recentTrend.map((p, i) => `
        <div class="trend-bar-wrapper">
            <span class="trend-percent">${p}%</span>
            <div class="trend-bar" style="height: ${Math.max(p, 5)}%; animation-delay: ${i * 0.1}s"></div>
        </div>
    `).join('');

    const strongestIcon = getSubjectIcon(data.strongest?.name);
    const weakestIcon = getSubjectIcon(data.weakest?.name);

    content.innerHTML = `
        <div class="report-stats-grid">
            <div class="report-stat-card">
                <span class="stat-label">Quizzes</span>
                <span class="stat-value">${data.totalQuizzes}</span>
            </div>
            <div class="report-stat-card">
                <span class="stat-label">Stars</span>
                <span class="stat-value">${data.totalStars}</span>
            </div>
        </div>

        <div class="report-insights">
            <div class="insight-item highlight">
                <span class="insight-icon">${data.strongest ? strongestIcon : '⭐'}</span>
                <div class="insight-text">
                    <strong>Strongest: ${data.strongest ? data.strongest.name : 'Starting Out'}</strong>
                    <p>${data.strongest ? `Excellent mastery at ${Math.round(data.strongest.score)}%` : 'Keep practicing to find your strengths!'}</p>
                </div>
            </div>
            <div class="insight-item focus">
                <span class="insight-icon">${data.weakest ? weakestIcon : '🎯'}</span>
                <div class="insight-text">
                    <strong>Focus Area: ${data.weakest ? data.weakest.name : 'N/A'}</strong>
                    <p>${data.weakest ? `Target: Improve accuracy in ${data.weakest.name}` : 'More data needed for focused analysis.'}</p>
                </div>
            </div>
        </div>

        <div class="report-trend">
            <h4>Recent Accuracy Trend</h4>
            <div class="trend-chart">${trendHtml}</div>
            <div class="trend-labels">
                <span>Earlier</span>
                <span>Recent</span>
            </div>
        </div>
    `;
}

// ============================================
// Initialize Application
// ============================================
document.addEventListener('DOMContentLoaded', async () => {
    console.log('Kids Quiz initializing...');

    // Load user data
    loadUsersFromStorage();
    loadCurrentUser();
    renderUserSelect();
    loadHistoryFromStorage();

    // Setup event listeners
    setupEventListeners();

    // Load questions
    await loadQuestions();

    // Ensure we start at dashboard
    if (state.questionsLoaded) {
        showScreen('dashboard');
    }

    console.log('Kids Quiz initialized successfully!');
});

console.log('Kids Quiz loaded successfully!');
