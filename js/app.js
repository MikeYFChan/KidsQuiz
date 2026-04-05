// ============================================
// Event Listeners Setup
// ============================================
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

    // Theme Toggle
    const themeBtn = getElement('theme-toggle');
    if (themeBtn) {
        themeBtn.addEventListener('click', toggleTheme);
    }

    // User modal buttons and form handling
    const openUserModalBtn = getElement('open-user-modal') || getElement('open-user-modal-footer');
    const closeUserModalBtn = getElement('close-user-modal');
    const userForm = getElement('user-form');
    const nameInput = getElement('user-name');
    const gradeSelect = getElement('user-grade');
    const avatarInput = getElement('user-avatar-input');
    const saveBtn = getElement('save-user-btn');

    if (openUserModalBtn) {
        openUserModalBtn.addEventListener('click', () => {
            renderAvatarGrid();
            openUserModal();
        });
    }

    if (closeUserModalBtn) {
        closeUserModalBtn.addEventListener('click', closeUserModal);
    }

    if (userForm) {
        userForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const name = nameInput?.value || '';
            const grade = gradeSelect?.value || '';
            const avatar = avatarInput?.value || '👤';

            if (name.trim().length < 2) {
                showToast('Please enter a valid name', 'error');
                return;
            }

            const newUser = {
                id: Date.now().toString(),
                name: name.trim(),
                grade: grade,
                avatar: avatar,
                rewards: { stars: 0, badges: [], xp: 0, level: 1, streak: 0, lastActiveDate: null }
            };

            state.users.push(newUser);
            saveUsersToStorage();
            renderUserSelect();
            setCurrentUser(newUser);
            closeUserModal();
            userForm.reset();
        });
    }

    // Navigation items
    document.querySelectorAll('.nav-item').forEach(button => {
        button.addEventListener('click', () => {
            if (button.dataset.view === 'dashboard') showScreen('dashboard');
            else if (button.dataset.subject) selectSubject(button.dataset.subject);
            else if (button.id === 'sidebar-history') {
                if (!state.currentUser) { showToast('Please select a student first', 'info'); return; }
                showHistoryModal(state.currentUser.id);
            } else if (button.id === 'open-report-btn') {
                openProgressReport();
            }
            if (window.innerWidth <= 900 && sidebar) sidebar.classList.remove('active');
        });
    });

    // Dashboard navigation
    document.querySelectorAll('.recommendation-card').forEach(card => {
        card.addEventListener('click', () => {
            if (card.id === 'resume-skill-card') selectSubject(state.currentSubject || 'Maths');
            else if (card.dataset.subject) selectSubject(card.dataset.subject);
            else if (card.id === 'dash-report-card') openProgressReport();
        });
    });

    // Subject/Year Selection
    document.querySelectorAll('.subject-button').forEach(btn => btn.onclick = () => selectSubject(btn.dataset.subject));

    // Quiz Listeners
    if (getElement('quiz-form')) {
        getElement('quiz-form').addEventListener('submit', (e) => {
            e.preventDefault();
            submitQuiz();
        });
    }

    if (getElement('back-to-start')) getElement('back-to-start').onclick = () => showScreen('skill');
    if (getElement('restart-btn')) getElement('restart-btn').onclick = restartQuiz;
    if (getElement('new-quiz-btn')) getElement('new-quiz-btn').onclick = chooseNewQuiz;
    if (getElement('results-dashboard-btn')) getElement('results-dashboard-btn').onclick = goToDashboard;
    if (getElement('back-to-subjects')) getElement('back-to-subjects').onclick = backToSubjects;
    if (getElement('report-back-btn')) getElement('report-back-btn').onclick = () => showScreen('dashboard');
    if (getElement('speak-btn')) getElement('speak-btn').onclick = speakQuestion;
    if (getElement('close-explanation')) getElement('close-explanation').onclick = closeExplanation;

    // User Select
    if (getElement('user-select')) {
        getElement('user-select').addEventListener('change', (e) => {
            const id = e.target.value;
            if (id === 'guest') setCurrentUser(null);
            else {
                const user = state.users.find(u => String(u.id) === String(id));
                if (user) setCurrentUser(user);
            }
        });
    }

    // History Modal specific
    if (getElement('close-history-btn')) {
        getElement('close-history-btn').onclick = () => {
            const modal = getElement('history-modal');
            if (modal) modal.style.display = 'none';
        };
    }

    if (getElement('clear-history-btn')) {
        getElement('clear-history-btn').onclick = () => {
            if (!state.currentUser) return;
            if (confirm('Clear history for this user?')) {
                delete state.quizHistory[String(state.currentUser.id)];
                saveHistoryToStorage();
                showHistoryModal(state.currentUser.id);
            }
        };
    }

    if (getElement('import-data-btn')) getElement('import-data-btn').onclick = () => getElement('import-input').click();
    if (getElement('import-input')) getElement('import-input').onchange = importUserData;

    // Shop Listeners
    if (getElement('open-shop-btn')) getElement('open-shop-btn').onclick = openShop;
    if (getElement('close-shop-btn')) getElement('close-shop-btn').onclick = closeShop;
    document.querySelectorAll('.shop-tab').forEach(tab => {
        tab.addEventListener('click', (e) => {
            document.querySelectorAll('.shop-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            const target = tab.dataset.target;
            document.querySelectorAll('.shop-grid').forEach(g => {
                g.style.display = (g.id === target) ? 'flex' : 'none';
            });
        });
    });
}

// ============================================
// Initialization
// ============================================
document.addEventListener('DOMContentLoaded', async () => {
    loadUsersFromStorage();
    loadCurrentUser();
    renderUserSelect();
    loadHistoryFromStorage();
    initTheme();
    initDailyQuests();
    setupEventListeners();
    await loadQuestions();
    if (state.questionsLoaded) showScreen('dashboard');
    applyGlobalTheme();
});

// ============================================
// Shop Logic
// ============================================
const SHOP_ITEMS = {
    avatars: [
        { id: 'robot', name: 'Cool Robot', icon: '🤖', price: 10 },
        { id: 'ninja', name: 'Swift Ninja', icon: '🥷', price: 15 },
        { id: 'astronaut', name: 'Astronaut', icon: '🧑‍🚀', price: 20 },
        { id: 'dragon', name: 'Magic Dragon', icon: '🐲', price: 25 },
        { id: 'alien', name: 'Outer Space', icon: '👽', price: 15 }
    ],
    themes: [
        { id: 'default', name: 'Standard Blue', icon: '🟦', price: 0 },
        { id: 'space', name: 'Outer Space', icon: '🌌', price: 20 },
        { id: 'jungle', name: 'Wild Jungle', icon: '🌿', price: 20 }
    ]
};

function openShop() {
    if (!state.currentUser) {
        showToast('Please select a student to use the shop!', 'info');
        return;
    }
    const modal = getElement('shop-modal');
    if (modal) {
        renderShop();
        modal.classList.add('active');
    }
}

function closeShop() {
    const modal = getElement('shop-modal');
    if (modal) modal.classList.remove('active');
}

function renderShop() {
    const starCount = getElement('shop-star-count');
    if (starCount) starCount.textContent = state.rewards.stars || 0;

    const avatarGrid = getElement('shop-avatars');
    const themeGrid = getElement('shop-themes');
    if (!avatarGrid || !themeGrid) return;

    avatarGrid.innerHTML = '';
    SHOP_ITEMS.avatars.forEach(item => {
        const isUnlocked = state.rewards.unlockedAvatars.includes(item.icon);
        const isEquipped = state.currentUser.avatar === item.icon;
        
        const card = document.createElement('div');
        card.className = `shop-item ${isEquipped ? 'equipped' : ''}`;
        card.innerHTML = `
            <div class="shop-item-preview">${item.icon}</div>
            <div class="shop-item-name">${item.name}</div>
            <div class="shop-item-price">${isUnlocked ? 'Owned' : '⭐ ' + item.price}</div>
        `;
        card.onclick = () => handleShopAction('avatar', item);
        avatarGrid.appendChild(card);
    });

    themeGrid.innerHTML = '';
    SHOP_ITEMS.themes.forEach(item => {
        const isUnlocked = state.rewards.unlockedThemes.includes(item.id);
        const isEquipped = state.rewards.currentTheme === item.id;
        
        const card = document.createElement('div');
        card.className = `shop-item ${isEquipped ? 'equipped' : ''}`;
        card.innerHTML = `
            <div class="shop-item-preview">${item.icon}</div>
            <div class="shop-item-name">${item.name}</div>
            <div class="shop-item-price">${isUnlocked ? 'Owned' : '⭐ ' + item.price}</div>
        `;
        card.onclick = () => handleShopAction('theme', item);
        themeGrid.appendChild(card);
    });
}

function handleShopAction(type, item) {
    const rewards = state.rewards;
    if (type === 'avatar') {
        if (rewards.unlockedAvatars.includes(item.icon)) {
            // Equip
            state.currentUser.avatar = item.icon;
            showToast(`Equipped ${item.name}!`, 'success');
        } else {
            // Buy
            if (rewards.stars >= item.price) {
                rewards.stars -= item.price;
                rewards.unlockedAvatars.push(item.icon);
                state.currentUser.avatar = item.icon;
                showToast(`Bought ${item.name}!`, 'success');
            } else {
                showToast("Not enough stars! Keep practicing!", 'warning');
                return;
            }
        }
    } else if (type === 'theme') {
        if (rewards.unlockedThemes.includes(item.id)) {
            rewards.currentTheme = item.id;
            applyGlobalTheme();
            showToast(`Applied ${item.name} theme!`, 'success');
        } else {
            if (rewards.stars >= item.price) {
                rewards.stars -= item.price;
                rewards.unlockedThemes.push(item.id);
                rewards.currentTheme = item.id;
                applyGlobalTheme();
                showToast(`Bought ${item.name} theme!`, 'success');
            } else {
                showToast("Not enough stars!", 'warning');
                return;
            }
        }
    }
    
    saveUsersToStorage();
    updateUserUI();
    renderShop();
}

function applyGlobalTheme() {
    const theme = state.rewards?.currentTheme || 'default';
    document.body.classList.remove('theme-space', 'theme-jungle');
    if (theme !== 'default') {
        document.body.classList.add(`theme-${theme}`);
    }
}

console.log('Kids Quiz loaded successfully!');
