// Quiz Module
import { shuffleArray, showScreen, getElement, createElement, normalizeAnswer, convertNestedToMcq } from './utils.js';
import { showToast, showConfirmDialog } from './ui.js';

let questionsData = {};
let questionsLoaded = false;
let currentSubject = '';
let currentYear = '';
let currentQuestions = [];
let currentQuestionIndex = 0;
let userAnswers = [];
let timerInterval = null;
let timeRemaining = 0;

export async function loadQuestions() {
    showLoadingIndicator(true);
    try {
        const baseRoot = (() => {
            const seg = location.pathname.split('/').filter(Boolean);
            if (seg.length > 0 && location.hostname !== 'localhost') {
                return '/' + seg[0] + '/';
            }
            return '/';
        })();

        const paths = [
            baseRoot + 'data/questions_mcq.json',
            baseRoot + 'questions_mcq.json',
            baseRoot + 'questions.json',
            './data/questions_mcq.json',
            './questions_mcq.json',
            'questions_mcq.json',
            './questions.json',
            'questions.json',
            '/questions.json'
        ];

        let response = null;
        let loadedPath = null;

        for (const path of paths) {
            try {
                response = await fetch(path, { cache: 'no-cache', headers: { 'Accept': 'application/json' } });
                if (response.ok) {
                    loadedPath = path;
                    break;
                }
            } catch (err) {
                console.log(`Failed to load from ${path}:`, err);
                continue;
            }
        }

        if (!response || !response.ok) {
            showToast('Failed to load questions. Please refresh the page.', 'error');
            throw new Error(`questions.json not found.`);
        }

        const loadedData = await response.json();

        if (!loadedData || typeof loadedData !== 'object') {
            throw new Error('Invalid JSON format in questions.json');
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
        questionsData = normalized;
        questionsLoaded = true;
        console.log(`Questions loaded from ${loadedPath || 'questions.json'}`);
        } catch (error) {
            console.error('Failed to load questions.json:', error);
            showToast('Failed to load questions. Please check that questions.json exists in the root directory.', 'error');
            questionsLoaded = false;
        } finally {
            showLoadingIndicator(false);
        }
}

function showLoadingIndicator(show) {
    const existing = document.getElementById('loading-indicator');
    if (show) {
        if (!existing) {
            const indicator = createElement('div', 'loading-indicator', `
                <div class="loading-spinner"></div>
                <p>Loading questions...</p>
            `);
            indicator.innerHTML = `
                <div class="loading-spinner"></div>
                <p>Loading questions...</p>
            `;
            document.querySelector('.container').appendChild(indicator);
        }
    } else {
        if (existing) existing.remove();
    }
}

export function startQuiz() {
    if (!questionsLoaded) {
        showToast('Questions are still loading. Please wait...', 'info');
        return;
    }

    if (!questionsData[currentSubject] || !questionsData[currentSubject][currentYear]) {
        showToast(`No questions available for ${currentSubject} - ${currentYear}`, 'error');
        return;
    }

    const allQuestions = questionsData[currentSubject][currentYear];
    const shuffledQuestions = shuffleArray(allQuestions);
    currentQuestions = shuffledQuestions.slice(0, 5);

    currentQuestionIndex = 0;
    userAnswers = [];
    stopTimer();

    getElement('quiz-title').textContent = `${currentSubject} - ${currentYear}`;
    getElement('total-questions').textContent = currentQuestions.length;

    showScreen('question');
    loadQuestion(0);
    startTimer();
}

function startTimer() {
    timeRemaining = 60;
    updateTimerDisplay();
    timerInterval = setInterval(() => {
        timeRemaining--;
        updateTimerDisplay();
        if (timeRemaining <= 0) {
            stopTimer();
            handleTimeUp();
        }
    }, 1000);
}

function stopTimer() {
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
}

function updateTimerDisplay() {
    const timerEl = getElement('timer-display');
    if (timerEl) {
        timerEl.textContent = `Time: ${timeRemaining}s`;
        timerEl.style.color = timeRemaining <= 10 ? '#e74c3c' : '#fff';
    }
}

function handleTimeUp() {
    showToast('Time is up! Submitting your answers...', 'warning');
    submitQuiz();
}

export function selectSubject(subject) {
    currentSubject = subject;
    const currentUser = JSON.parse(localStorage.getItem('quiz_current_user'));
    if (currentUser && currentUser.grade) {
        currentYear = currentUser.grade;
        loadQuestions().then(() => startQuiz());
    } else {
        showScreen('year');
    }
}

export function selectYear(year) {
    currentYear = year;
    if (!questionsLoaded) {
        loadQuestions().then(startQuiz);
    } else {
        startQuiz();
    }
}

export function loadQuestion(index) {
    const question = currentQuestions[index];
    getElement('question-text').textContent = question.question;
    getElement('current-question').textContent = index + 1;

    const progress = ((index + 1) / currentQuestions.length) * 100;
    getElement('progress-fill').style.width = progress + '%';

    const prevBtn = getElement('prev-btn');
    const nextBtn = getElement('next-btn');

    prevBtn.style.display = index === 0 ? 'none' : 'inline-block';
    nextBtn.textContent = index === currentQuestions.length - 1 ? 'Finish Quiz' : 'Next Question';

    const answerInput = getElement('answer-input');
    const choicesContainer = getElement('choices-container');

    if (question.choices && Array.isArray(question.choices) && question.choices.length > 0) {
        answerInput.style.display = 'none';
        answerInput.required = false;
        choicesContainer.innerHTML = '';

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
            choicesContainer.appendChild(wrapper);
        });

        const prev = userAnswers[index];
        if (prev) {
            const selected = choicesContainer.querySelector(`input[value="${CSS.escape(prev)}"]`);
            if (selected) selected.checked = true;
        }

        const firstInput = choicesContainer.querySelector('input[name="choice"]');
        if (firstInput) firstInput.focus();
    } else {
        choicesContainer.innerHTML = '';
        answerInput.style.display = '';
        answerInput.required = true;
        answerInput.value = userAnswers[index] || '';
        answerInput.focus();
    }
}

export function submitQuiz() {
    stopTimer();

    const selectedChoice = getElement('choices-container').querySelector('input[name="choice"]:checked');
    let userAnswer = '';
    if (selectedChoice) {
        userAnswer = selectedChoice.value;
    } else {
        userAnswer = getElement('answer-input').value.trim();
    }

    const errorEl = getElement('quiz-answer-error');

    if (userAnswer === '') {
        if (errorEl) {
            errorEl.textContent = 'Please enter or select an answer!';
            errorEl.classList.add('visible');
        }
        const answerInput = getElement('answer-input');
        if (answerInput) answerInput.focus();
        return false;
    }

    if (errorEl) {
        errorEl.classList.remove('visible');
    }

    userAnswers[currentQuestionIndex] = userAnswer;
    return true;
}

export function nextQuestion() {
    if (currentQuestionIndex < currentQuestions.length - 1) {
        currentQuestionIndex++;
        loadQuestion(currentQuestionIndex);
    } else {
        showResults();
    }
}

export function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion(currentQuestionIndex);
    }
}

export function showResults() {
    stopTimer();
    showScreen('results');

    let correctCount = 0;
    const answersList = getElement('answers-list');
    answersList.innerHTML = '';

    getElement('results-subtitle').textContent = `${currentSubject} - ${currentYear}`;

    currentQuestions.forEach((q, index) => {
        const userAnswer = userAnswers[index] || 'No answer';
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
        answersList.appendChild(answerItem);
    });

    const percentage = Math.round((correctCount / currentQuestions.length) * 100);
    getElement('score-text').textContent = `${correctCount} / ${currentQuestions.length}`;
    getElement('percentage-text').textContent = `${percentage}%`;

    const scoreMessage = getElement('score-message');
    if (percentage === 100) {
        scoreMessage.textContent = 'Excellent! Perfect score! 🌟';
        scoreMessage.className = 'score-message excellent';
    } else if (percentage >= 80) {
        scoreMessage.textContent = 'Well done! Great job! 🎉';
        scoreMessage.className = 'score-message great';
    } else if (percentage >= 60) {
        scoreMessage.textContent = 'Good effort! Keep practising! 👍';
        scoreMessage.className = 'score-message good';
    } else {
        scoreMessage.textContent = 'Keep practising! You can do it! 💪';
        scoreMessage.className = 'score-message okay';
    }

    const currentUser = JSON.parse(localStorage.getItem('quiz_current_user'));
    if (currentUser) {
        const entry = {
            date: new Date().toISOString(),
            subject: currentSubject,
            year: currentYear,
            correct: correctCount,
            total: currentQuestions.length,
            percentage
        };
        const { recordHistory } = require('./history.js');
        recordHistory(entry, currentUser);
    }
}

export function restartQuiz() {
    startQuiz();
}

export function chooseNewQuiz() {
    showScreen('subject');
}

export function backToSubjects() {
    showConfirmDialog(
        'Are you sure you want to go back? Your progress will be lost.',
        () => {
            stopTimer();
            showScreen('subject');
        }
    );
}

export function initQuizEventListeners() {
    const subjectButtons = document.querySelectorAll('.subject-button');
    const yearButtons = document.querySelectorAll('.year-button');
    const backToSubjectBtn = document.getElementById('back-to-subject');
    const quizForm = document.getElementById('quiz-form');
    const prevBtn = getElement('prev-btn');
    const nextBtn = getElement('next-btn');
    const restartBtn = getElement('restart-btn');
    const newQuizBtn = getElement('new-quiz-btn');
    const backToStartBtn = getElement('back-to-start');

    subjectButtons.forEach(button => {
        button.addEventListener('click', () => selectSubject(button.dataset.subject));
    });

    yearButtons.forEach(button => {
        button.addEventListener('click', () => selectYear(button.dataset.year));
    });

    if (backToSubjectBtn) {
        backToSubjectBtn.addEventListener('click', () => showScreen('subject'));
    }

    if (quizForm) {
        quizForm.addEventListener('submit', (e) => {
            e.preventDefault();
            if (submitQuiz()) {
                nextQuestion();
            }
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            if (currentQuestionIndex > 0) {
                currentQuestionIndex--;
                loadQuestion(currentQuestionIndex);
            }
        });
    }

    if (restartBtn) {
        restartBtn.addEventListener('click', restartQuiz);
    }

    if (newQuizBtn) {
        newQuizBtn.addEventListener('click', chooseNewQuiz);
    }

    if (backToStartBtn) {
        backToStartBtn.addEventListener('click', backToSubjects);
    }
}

export function isQuestionsLoaded() {
    return questionsLoaded;
}
