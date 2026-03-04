// ============================================
// MCQ Generator Functions
// ============================================
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
    if (!normalized || typeof normalized !== 'object') return;

    let skippedInvalidItems = 0;

    for (const sub of Object.keys(normalized)) {
        const years = normalized[sub];
        if (!years || typeof years !== 'object') continue;

        for (const yr of Object.keys(years)) {
            const arr = years[yr];
            if (!Array.isArray(arr)) continue;

            for (const item of arr) {
                if (!item || typeof item !== 'object') {
                    skippedInvalidItems++;
                    continue;
                }

                // If the subject/year isn't already on the item, add it for debugging
                if (!item.subject) item.subject = sub;
                if (!item.year) item.year = yr;

                if (item.choices && Array.isArray(item.choices) && item.choices.length >= 4) continue;

                const answer = item.answer !== undefined ? item.answer : (item.correct !== undefined ? item.correct : null);
                if (answer === null && (!item.choices || item.choices.length === 0)) {
                    skippedInvalidItems++;
                    continue;
                }

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

                // Shuffle choices
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
// Quiz Functions
// ============================================
// ============================================
async function loadQuestions() {
    showLoadingIndicator(true);

    // Check if we already have data from a script tag (for local file access)
    if (typeof QUESTIONS_DATA !== 'undefined' || (typeof window !== 'undefined' && window.QUESTIONS_DATA)) {
        console.log('Using pre-loaded QUESTIONS_DATA from global scope');
        let normalized = (typeof QUESTIONS_DATA !== 'undefined' ? QUESTIONS_DATA : window.QUESTIONS_DATA);

        // Safety check to ensure normalized is an object
        if (normalized && typeof normalized === 'object') {
            try {
                convertNestedToMcq(normalized);
                state.questionsData = normalized;
                state.questionsLoaded = true;
                console.log('Pre-loaded questions processed successfully!');
            } catch (err) {
                console.error('Error processing pre-loaded questions:', err);
            }
        }
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

        const avatarEl = getElement('sidebar-avatar');
        if (avatarEl) avatarEl.textContent = state.currentUser.avatar || '👤';

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
        // ... (existing user logic)
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

    // Always show sidebar subjects unless specifically asked to hide per user preference
    if (getElement('sidebar-subjects-section')) getElement('sidebar-subjects-section').style.display = 'block';
}

function updateTimerDisplay() {
    const timerEl = getElement('timer-display');
    if (timerEl) {
        timerEl.textContent = `Time: ${state.timeRemaining}s`;
        if (state.timeRemaining <= 10) {
            timerEl.classList.add('timer-low');
        } else {
            timerEl.classList.remove('timer-low');
        }
    }
}

async function selectSubject(subject) {
    console.log('--- SUBJECT SELECTION START ---');
    console.log('Requested subject:', subject);
    console.log('Current questionsLoaded state:', state.questionsLoaded);

    // Defensive check: If data isn't loaded, wait or reload
    if (!state.questionsLoaded) {
        console.warn('Questions not loaded yet. Attempting to reload/wait...');
        showLoadingIndicator(true);
        await loadQuestions();
        showLoadingIndicator(false);

        if (!state.questionsLoaded) {
            console.error('CRITICAL: Questions failed to load after retry.');
            showToast('Subject selection unavailable: Question data not found.', 'error');
            return;
        }
    }

    const dataKeys = Object.keys(state.questionsData);
    console.log('Available subjects in data:', dataKeys);

    // Normalize subject name (Case-insensitive + Alias handling)
    let normalizedSubject = subject;
    const lowerSubject = subject.toLowerCase().trim();

    const subjectAliases = {
        'maths': 'Maths',
        'math': 'Maths',
        'english': 'English',
        'chinese': 'Chinese',
        'science': 'Science',
        '11+': '11+'
    };

    // Try to find an exact case-insensitive match from our keys
    const matchedKey = dataKeys.find(k => k.toLowerCase() === lowerSubject);

    if (matchedKey) {
        normalizedSubject = matchedKey;
        console.log('Found exact match (case-insensitive):', matchedKey);
    } else if (subjectAliases[lowerSubject]) {
        normalizedSubject = subjectAliases[lowerSubject];
        console.log('Mapped subject via alias:', normalizedSubject);
    }

    console.log('Final normalized subject:', normalizedSubject);
    state.currentSubject = normalizedSubject;
    const currentUser = state.currentUser;

    // Check if we have data for this subject
    if (!state.questionsData[normalizedSubject]) {
        console.error(`ERROR: No data found for normalized subject: ${normalizedSubject}`);
        console.log('Debugging state.questionsData:', state.questionsData);
        showToast(`Questions for ${normalizedSubject} are coming soon!`, 'info');
        return;
    }

    if (currentUser && currentUser.grade && state.questionsData[normalizedSubject]?.[currentUser.grade]) {
        console.log('Auto-selecting year based on user grade:', currentUser.grade);
        state.currentYear = currentUser.grade;
        showSkillTree(normalizedSubject, state.currentYear);
    } else {
        console.log('No user grade match or guest user. Showing year selection.');
        const titleEl = getElement('selected-subject-title');
        const backBtn = getElement('back-to-subjects');

        if (titleEl) {
            titleEl.textContent = state.currentUser ? `${normalizedSubject} - Select Year` : 'Select Year';
        }

        if (backBtn) {
            if (state.currentUser) {
                backBtn.style.display = 'flex';
                backBtn.textContent = '← Subjects';
                backBtn.onclick = backToSubjects;
            } else {
                // For Guests, hide the back button because sidebar keeps subjects available
                backBtn.style.display = 'none';
            }
        }

        const yearSelectionEl = getElement('year-selection');
        if (yearSelectionEl) {
            yearSelectionEl.innerHTML = '';
            const yearData = state.questionsData[normalizedSubject] || {};
            const categories = Object.keys(yearData);
            console.log('Available years for subject:', categories);

            if (categories.length === 0) {
                console.warn('Subject exists but has NO year categories.');
                yearSelectionEl.innerHTML = '<p class="text-center" style="padding: 2rem; width: 100%;">No topics available yet for this subject.</p>';
            } else {
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
        }
        showScreen('year');
    }
    console.log('--- SUBJECT SELECTION END ---');
}

function selectYear(year) {
    state.currentYear = year;
    showSkillTree(state.currentSubject, year);
}

function showSkillTree(subject, year) {
    const skillListEl = getElement('skill-list');
    const titleEl = getElement('skill-subject-title');
    const subtitleEl = getElement('skill-year-subtitle');

    if (titleEl) titleEl.textContent = state.currentUser ? subject : 'Practice Skills';
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
        scoreEl.classList.remove('score-bounce-animate');
        void scoreEl.offsetWidth; // Force reflow
        scoreEl.classList.add('score-bounce-animate');
    }

    updateMasteryRing(state.smartScore);

    // Mastery fanfare trigger
    if (state.smartScore === 100 && score < 100) {
        sounds.mastery();
        if (scoreEl) {
            showFloatingText(scoreEl, 'Mastered! 🌟');
        }
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
        const questionContainer = document.querySelector('.question-container');
        if (questionContainer) {
            questionContainer.classList.remove('shake-animation');
            void questionContainer.offsetWidth; // trigger reflow
            questionContainer.classList.add('shake-animation');
        }
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
            star: earnedStar,
            mistakes: state.currentQuestions
                .filter((q, i) => !compareAnswers(state.userAnswers[i], q.answer))
                .map(q => ({ question: q.question, skill: q.skill || state.currentSkill || 'General' }))
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
            particleCount: 300,
            spread: 120,
            origin: { y: 0.5 },
            colors: ['#ff9500', '#ffcc00', '#34c759', '#0066cc', '#ff2d55']
        });
    }

    sounds.levelUp();
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
            sounds.streak();
            const streakEl = getElement('sidebar-streak-count');
            if (streakEl) {
                showFloatingText(streakEl.parentElement, '+1 🔥', '#ff9500');
            }
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
