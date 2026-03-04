// ============================================
// Utility Functions
// ============================================
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
    },
    streak() {
        this.play([261.63, 329.63, 392.00, 523.25], 'sine', 0.4); // C4, E4, G4, C5 (Rising Arpeggio)
    },
    levelUp() {
        this.play([523.25, 587.33, 659.25, 698.46, 783.99], 'square', 0.6); // C5, D5, E5, F5, G5 (Jingle)
    },
    mastery() {
        this.play([392.00, 493.88, 587.33, 783.99, 987.77], 'sine', 0.8); // G4, B4, D5, G5, B5 (Major chord fanfare)
    }
};

function showFloatingText(element, text, color = 'var(--accent)') {
    if (!element) return;
    const rect = element.getBoundingClientRect();
    const floatEl = document.createElement('div');
    floatEl.className = 'floating-text';
    floatEl.textContent = text;
    floatEl.style.color = color;
    
    // Position near the center of the element, slightly above
    floatEl.style.left = `${rect.left + rect.width / 2}px`;
    floatEl.style.top = `${rect.top}px`;
    // Offset to roughly center the text horizontally based on width
    floatEl.style.transform = 'translate(-50%, -50%)';
    floatEl.style.textShadow = '0 2px 4px rgba(0,0,0,0.3)';
    
    document.body.appendChild(floatEl);
    
    // Remove after animation completes
    setTimeout(() => {
        if (floatEl.parentNode) floatEl.parentNode.removeChild(floatEl);
    }, 1000);
}

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

const AVATARS = ['👤', '🐱', '🐶', '🦊', '🦁', '🐨', '🐼', '🦖', '🦄', '🦒', '🐙', '🦋', '⚽', '🎨', '🚀'];

function renderAvatarGrid() {
    const grid = getElement('avatar-grid');
    const input = getElement('user-avatar-input');
    if (!grid) return;

    grid.innerHTML = '';
    AVATARS.forEach(avatar => {
        const el = document.createElement('div');
        el.className = 'avatar-option';
        if (input && input.value === avatar) el.classList.add('selected');
        el.textContent = avatar;
        el.onclick = () => {
            document.querySelectorAll('.avatar-option').forEach(opt => opt.classList.remove('selected'));
            el.classList.add('selected');
            if (input) input.value = avatar;
        };
        grid.appendChild(el);
    });
}

function initDailyQuests() {
    const saved = localStorage.getItem('quiz_daily_quests');
    const today = new Date().toISOString().split('T')[0];

    if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.date === today) {
            state.dailyQuests = parsed.quests;
            renderQuests();
            return;
        }
    }

    // Generate new quests
    const questPool = [
        { id: 'math-5', title: 'Math Master', desc: 'Correct 5 Math questions', target: 5, current: 0, type: 'subject', value: 'Maths', reward: 50 },
        { id: 'english-5', title: 'English Pro', desc: 'Correct 5 English questions', target: 5, current: 0, type: 'subject', value: 'English', reward: 50 },
        { id: 'perfect-1', title: 'Perfect Practice', desc: 'Get a 100 SmartScore in any skill', target: 1, current: 0, type: 'score', value: 100, reward: 100 },
        { id: 'xp-200', title: 'XP Hunter', desc: 'Earn 200 XP today', target: 200, current: 0, type: 'xp', value: null, reward: 150 },
        { id: 'chinese-5', title: 'Chinese Scholar', desc: 'Correct 5 Chinese questions', target: 5, current: 0, type: 'subject', value: 'Chinese', reward: 50 }
    ];

    // Pick 3 random
    state.dailyQuests = questPool.sort(() => 0.5 - Math.random()).slice(0, 3);
    localStorage.setItem('quiz_daily_quests', JSON.stringify({ date: today, quests: state.dailyQuests }));
    renderQuests();
}

function updateQuestProgress(type, value, increment = 1) {
    let changed = false;
    state.dailyQuests.forEach(quest => {
        if (quest.completed) return;

        let match = false;
        if (quest.type === type && (quest.value === null || quest.value === value)) {
            match = true;
        } else if (quest.type === 'score' && type === 'score' && value >= quest.value) {
            match = true;
        }

        if (match) {
            quest.current += increment;
            if (quest.current >= quest.target) {
                quest.current = quest.target;
                quest.completed = true;
                awardQuestReward(quest);
            }
            changed = true;
        }
    });

    if (changed) {
        const today = new Date().toISOString().split('T')[0];
        localStorage.setItem('quiz_daily_quests', JSON.stringify({ date: today, quests: state.dailyQuests }));
        renderQuests();
    }
}

function awardQuestReward(quest) {
    addXP(quest.reward);
    state.rewards.stars += 5; // Bonus stars
    saveUsersToStorage();
    showToast(`Quest Completed: ${quest.title}! +${quest.reward} XP & 5 Stars! 🎁`, 'success');
}

function renderQuests() {
    const list = getElement('quests-list');
    const section = getElement('dashboard-quests-section');
    if (!list || !section) return;

    if (state.currentUser) {
        section.style.display = 'block';
        list.innerHTML = '';
        state.dailyQuests.forEach(quest => {
            const progress = (quest.current / quest.target) * 100;
            const card = document.createElement('div');
            card.className = `quest-card ${quest.completed ? 'completed' : ''}`;
            card.innerHTML = `
                <div class="quest-icon">${quest.completed ? '✅' : '🎯'}</div>
                <div class="quest-info">
                    <h4>${quest.title}</h4>
                    <p>${quest.desc}</p>
                    <div class="quest-progress-container">
                        <div class="quest-progress-fill" style="width: ${progress}%"></div>
                    </div>
                </div>
            `;
            list.appendChild(card);
        });
    } else {
        section.style.display = 'none';
    }
}

function updateMasteryRing(score) {
    const ring = getElement('mastery-fill');
    if (!ring) return;

    // Circumference is 163.36 (2 * PI * 26)
    const circumference = 163.36;
    const offset = circumference - (score / 100) * circumference;
    ring.style.strokeDashoffset = offset;

    // Change color based on score
    if (score >= 90) ring.style.stroke = 'var(--success)';
    else if (score >= 70) ring.style.stroke = 'var(--primary)';
    else if (score >= 50) ring.style.stroke = 'var(--warning)';
    else ring.style.stroke = 'var(--accent)';
}



function initTheme() {
    const savedTheme = localStorage.getItem('quiz_theme');
    const themeToggle = getElement('theme-toggle');

    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
        if (themeToggle) themeToggle.textContent = savedTheme === 'dark' ? '☀️' : '🌙';
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        // We don't set data-theme here, let CSS @media handle it
        if (themeToggle) themeToggle.textContent = '☀️';
    }
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    const themeToggle = getElement('theme-toggle');

    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('quiz_theme', newTheme);

    if (themeToggle) themeToggle.textContent = newTheme === 'dark' ? '☀️' : '🌙';

    showToast(`Switched to ${newTheme} mode`, 'info', 2000);
}

// ============================================
// UI Functions
// ============================================
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
