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

    // Export/Import Listeners
    if (getElement('export-data-btn')) getElement('export-data-btn').onclick = exportUserData;
    if (getElement('import-data-btn')) getElement('import-data-btn').onclick = () => getElement('import-input').click();
    if (getElement('import-input')) getElement('import-input').onchange = importUserData;
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
});

console.log('Kids Quiz loaded successfully!');
