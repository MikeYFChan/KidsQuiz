// ============================================
// Kids Quiz - Combined Application
// ============================================

// ============================================
// State Management
// ============================================
const state = {
    questionsData: {},
    questionsLoaded: false,
    currentSubject: '',
    currentYear: '',
    currentQuestions: [],
    currentQuestionIndex: 0,
    userAnswers: [],
    timerInterval: null,
    timeRemaining: 0,
    users: [],
    currentUser: null,
    quizHistory: {}
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
    return String(answer).replace(/\s+/g, '').toLowerCase();
}

function getElement(id) {
    return document.getElementById(id);
}

function createElement(tag, className = '', innerHTML = '') {
    const el = document.createElement(tag);
    if (className) el.className = className;
    if (innerHTML) el.innerHTML = innerHTML;
    return el;
}

function showScreen(screenName) {
    const screens = ['subject-screen', 'year-screen', 'question-screen', 'results-screen'];
    screens.forEach(id => {
        const el = getElement(id);
        if (el) el.classList.remove('active');
    });
    const target = getElement(`${screenName}-screen`);
    if (target) target.classList.add('active');
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
    toast.style.cssText = `background:${colors[type]||colors.info};color:white;padding:12px 20px;border-radius:8px;box-shadow:0 4px 12px rgba(0,0,0,0.2);font-size:14px;max-width:300px;animation:toastSlideIn 0.3s ease;display:flex;align-items:center;gap:10px;`;
    toast.innerHTML = `<span>${icons[type]||icons.info}</span><span>${message}</span>`;

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
        state.currentUser = raw ? JSON.parse(raw) : null;
    } catch (e) {
        state.currentUser = null;
    }
}

function setCurrentUser(user) {
    state.currentUser = user;
    localStorage.setItem('quiz_current_user', JSON.stringify(user));
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
    const nameInput = getElement('user-name');
    const gradeSelect = getElement('user-grade');
    if (state.currentUser) {
        if (nameInput) nameInput.value = state.currentUser.name || '';
        if (gradeSelect) gradeSelect.value = state.currentUser.grade || '';
        if (nameInput && state.currentUser.name) setInputState('user-name', true);
        if (gradeSelect && state.currentUser.grade) setInputState('user-grade', true);
    } else {
        if (nameInput) nameInput.value = '';
        if (gradeSelect) gradeSelect.value = '';
    }
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
    placeholder.value = '';
    placeholder.textContent = 'Select user';
    sel.appendChild(placeholder);
    state.users.forEach(u => {
        const opt = document.createElement('option');
        opt.value = u.id;
        opt.textContent = `${u.name} (${u.grade || ''})`;
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

function recordHistory(entry, user) {
    if (!user || !user.id) return;
    const id = String(user.id);
    if (!state.quizHistory[id]) state.quizHistory[id] = [];
    state.quizHistory[id].push(entry);
    saveHistoryToStorage();
}

function showHistoryModal(userId) {
    const list = getElement('history-list');
    if (!list) return;
    const entries = state.quizHistory[String(userId)] || [];
    if (!entries.length) {
        list.innerHTML = '<p>No history for this user.</p>';
    } else {
        list.innerHTML = '';
        entries.slice().reverse().forEach(e => {
            const item = document.createElement('div');
            item.style.cssText = 'padding:8px 0;border-bottom:1px solid #eee;';
            item.innerHTML = `<strong>${new Date(e.date).toLocaleString()}</strong><div>${e.subject} - ${e.year} — ${e.correct}/${e.total} (${e.percentage}%)</div>`;
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

    // Timeout protection - hide loading after 10 seconds
    const timeoutId = setTimeout(() => {
        console.log('Loading timeout - hiding indicator');
        showLoadingIndicator(false);
    }, 10000);

    try {
        // Calculate base path for GitHub Pages subdirectory deployment
        const baseRoot = (() => {
            const seg = location.pathname.split('/').filter(Boolean);
            const cleaned = seg.filter(s => s && s !== 'index.html');
            if (cleaned.length > 0 && location.hostname !== 'localhost') {
                return '/' + cleaned[0] + '/';
            }
            return '/';
        })();

        // Priority ordered paths
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
            showToast('Failed to load questions. Please refresh the page.', 'error');
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
    startTimer();
}

function startTimer() {
    state.timeRemaining = 60;
    updateTimerDisplay();
    stopTimer();
    state.timerInterval = setInterval(() => {
        state.timeRemaining--;
        updateTimerDisplay();
        if (state.timeRemaining <= 0) {
            stopTimer();
            showToast('Time is up! Submitting your answers...', 'warning');
            submitQuiz();
        }
    }, 1000);
}

function stopTimer() {
    if (state.timerInterval) {
        clearInterval(state.timerInterval);
        state.timerInterval = null;
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
    const currentUser = JSON.parse(localStorage.getItem('quiz_current_user'));
    if (currentUser && currentUser.grade) {
        state.currentYear = currentUser.grade;
        if (!state.questionsLoaded) {
            loadQuestions().then(startQuiz);
        } else {
            startQuiz();
        }
    } else {
        showScreen('year');
    }
}

function selectYear(year) {
    state.currentYear = year;
    if (!state.questionsLoaded) {
        loadQuestions().then(startQuiz);
    } else {
        startQuiz();
    }
}

function loadQuestion(index) {
    const question = state.currentQuestions[index];
    const questionText = getElement('question-text');
    const currentQuestion = getElement('current-question');
    const progressFill = getElement('progress-fill');

    if (questionText) questionText.textContent = question.question;
    if (currentQuestion) currentQuestion.textContent = index + 1;

    const progress = ((index + 1) / state.currentQuestions.length) * 100;
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
            const wrapper = createElement('div', 'choice-item');
            const letterSpan = createElement('span', 'choice-letter', String.fromCharCode(65 + i));
            const input = document.createElement('input');
            input.type = 'radio';
            input.name = 'choice';
            input.id = id;
            input.value = choice;
            input.className = 'choice-radio';
            const label = document.createElement('label');
            label.htmlFor = id;
            label.className = 'choice-label';
            label.textContent = choice;

            wrapper.appendChild(letterSpan);
            wrapper.appendChild(input);
            wrapper.appendChild(label);
            if (choicesContainer) choicesContainer.appendChild(wrapper);
        });

        const prev = state.userAnswers[index];
        if (prev && choicesContainer) {
            const selected = choicesContainer.querySelector(`input[value="${CSS.escape(prev)}"]`);
            if (selected) selected.checked = true;
        }

        const firstInput = choicesContainer?.querySelector('input[name="choice"]');
        if (firstInput) firstInput.focus();
    } else {
        if (choicesContainer) choicesContainer.innerHTML = '';
        if (answerInput) { answerInput.style.display = ''; answerInput.required = true; answerInput.value = state.userAnswers[index] || ''; answerInput.focus(); }
    }
}

function submitQuiz() {
    stopTimer();

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
    return true;
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

    if (answersList) answersList.innerHTML = '';
    if (resultsSubtitle) resultsSubtitle.textContent = `${state.currentSubject} - ${state.currentYear}`;

    state.currentQuestions.forEach((q, index) => {
        const userAnswer = state.userAnswers[index] || 'No answer';
        const isCorrect = normalizeAnswer(userAnswer) === normalizeAnswer(q.answer);
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
    const scoreText = getElement('score-text');
    const percentageText = getElement('percentage-text');
    const scoreMessage = getElement('score-message');

    if (scoreText) scoreText.textContent = `${correctCount} / ${state.currentQuestions.length}`;
    if (percentageText) percentageText.textContent = `${percentage}%`;

    if (scoreMessage) {
        if (percentage === 100) { scoreMessage.textContent = 'Excellent! Perfect score! 🌟'; scoreMessage.className = 'score-message excellent'; }
        else if (percentage >= 80) { scoreMessage.textContent = 'Well done! Great job! 🎉'; scoreMessage.className = 'score-message great'; }
        else if (percentage >= 60) { scoreMessage.textContent = 'Good effort! Keep practising! 👍'; scoreMessage.className = 'score-message good'; }
        else { scoreMessage.textContent = 'Keep practising! You can do it! 💪'; scoreMessage.className = 'score-message okay'; }
    }

    const currentUser = JSON.parse(localStorage.getItem('quiz_current_user'));
    if (currentUser) {
        const entry = { date: new Date().toISOString(), subject: state.currentSubject, year: state.currentYear, correct: correctCount, total: state.currentQuestions.length, percentage };
        recordHistory(entry, currentUser);
    }
}

function restartQuiz() {
    startQuiz();
}

function chooseNewQuiz() {
    showScreen('subject');
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
    // Subject buttons
    document.querySelectorAll('.subject-button').forEach(button => {
        button.addEventListener('click', () => selectSubject(button.dataset.subject));
    });

    // Year buttons
    document.querySelectorAll('.year-button').forEach(button => {
        button.addEventListener('click', () => selectYear(button.dataset.year));
    });

    // Back button
    const backToSubjectBtn = getElement('back-to-subject');
    if (backToSubjectBtn) {
        backToSubjectBtn.addEventListener('click', () => showScreen('subject'));
    }

    // Quiz form
    const quizForm = getElement('quiz-form');
    if (quizForm) {
        quizForm.addEventListener('submit', (e) => {
            e.preventDefault();
            if (submitQuiz()) nextQuestion();
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

    // Back to start button
    const backToStartBtn = getElement('back-to-start');
    if (backToStartBtn) backToStartBtn.addEventListener('click', backToSubjects);

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
            const selected = state.users.find(u => String(u.id) === String(id));
            if (selected) setCurrentUser(selected);
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

    // History modal styling
    const historyModal = getElement('history-modal');
    if (historyModal) historyModal.style.cssText = 'display:none;position:fixed;left:0;top:0;width:100%;height:100%;background:rgba(0,0,0,0.5);align-items:center;justify-content:center;';
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

    console.log('Kids Quiz initialized successfully!');
});

console.log('Kids Quiz loaded successfully!');
