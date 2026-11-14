(() => {
  'use strict';

  const STORE = 'study-steps-progress-v1';
  const DIFFICULTIES = {
    mixed: 'Mixed practice',
    foundation: 'Foundation',
    core: 'Core',
    stretch: 'Stretch'
  };
  const SUBJECTS = {
    Maths: ['∑', 'Maths', 'Number, calculation, ratio and algebra'],
    English: ['Aa', 'English', 'Reading, grammar, writing and vocabulary'],
    'Verbal Reasoning': ['V', 'Verbal Reasoning', 'Words, codes and language patterns'],
    'Non-Verbal Reasoning': ['N', 'Non-Verbal Reasoning', 'Shapes, sequences and visual patterns'],
    Science: ['＋', 'Science', 'Explore science topics']
  };
  const AVATARS = ['🐼', '🦊', '🐸', '🐱'];
  const GIFTS = [
    { id: 'party-hat', icon: '🎉', name: 'Party hat', cost: 8 },
    { id: 'little-plant', icon: '🌱', name: 'Little plant', cost: 16 },
    { id: 'rocket-pin', icon: '🚀', name: 'Rocket pin', cost: 24 }
  ];
  const state = {
    data: {},
    subject: '',
    topic: '',
    questions: [],
    index: 0,
    answers: [],
    last: null,
    difficulty: 'mixed',
    sessionMode: 'practice',
    sessionType: 'practice',
    recommendation: null,
    missedQuestions: [],
    timerId: null,
    timeRemaining: 0,
    timeExpired: false
  };
  const $ = selector => document.querySelector(selector);
  const get = () => {
    try {
      const saved = JSON.parse(localStorage.getItem(STORE)) || {};
      const record = typeof saved === 'object' && saved !== null ? saved : {};
      const ownedGifts = Array.isArray(record.ownedGifts)
        ? [...new Set(record.ownedGifts.filter(id => GIFTS.some(gift => gift.id === id)))]
        : [];
      return {
        ...record,
        name: typeof record.name === 'string' ? record.name : '',
        history: Array.isArray(record.history) ? record.history : [],
        stars: Number.isSafeInteger(record.stars) && record.stars >= 0 ? record.stars : 0,
        avatar: AVATARS.includes(record.avatar) ? record.avatar : AVATARS[0],
        ownedGifts,
        equippedGift: ownedGifts.includes(record.equippedGift) ? record.equippedGift : ''
      };
    } catch {
      return { name: '', history: [], stars: 0, avatar: AVATARS[0], ownedGifts: [], equippedGift: '' };
    }
  };
  const put = record => localStorage.setItem(STORE, JSON.stringify(record));
  const esc = value => {
    const element = document.createElement('div');
    element.textContent = String(value ?? '');
    return element.innerHTML;
  };
  const questionPool = questions => state.difficulty === 'mixed'
    ? questions
    : questions.filter(question => (question.difficulty || 'core') === state.difficulty);

  function stopTimer() {
    if (state.timerId !== null) {
      clearInterval(state.timerId);
      state.timerId = null;
    }
    $('#timer-display').classList.add('hidden');
  }

  function show(name) {
    if (name !== 'quiz') stopTimer();
    document.querySelectorAll('.view').forEach(element => element.classList.remove('active'));
    $(`#${name}-view`).classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function subjects() {
    const year = $('#year-select').value;
    const renderCard = ([subject, [icon, name, description]]) => {
      const topics = state.data[year]?.[subject] || {};
      const availableTopics = Object.values(topics).filter(questions => questionPool(questions).length > 0).length;
      const available = availableTopics > 0;
      const status = available
        ? `${availableTopics} ${availableTopics === 1 ? 'topic' : 'topics'} ready`
        : `No ${DIFFICULTIES[state.difficulty].toLowerCase()} questions yet`;
      return `<button class="subject-card${available ? '' : ' subject-card-upcoming'}" data-subject="${subject}"${available ? '' : ' disabled'}><span class="subject-icon">${icon}</span><strong>${name}</strong><span class="subject-description">${description}</span><span class="subject-status">${status}</span></button>`;
    };

    $('#subject-grid').innerHTML = Object.entries(SUBJECTS)
      .filter(([subject]) => subject !== 'Science')
      .map(renderCard)
      .join('');
    $('#additional-grid').innerHTML = renderCard(['Science', SUBJECTS.Science]);
    document.querySelectorAll('[data-subject]:not(:disabled)').forEach(button => {
      button.onclick = () => pickSubject(button.dataset.subject);
    });
  }

  function populateMockSubjects() {
    const year = $('#year-select').value;
    const availableSubjects = Object.entries(state.data[year] || {})
      .filter(([, topics]) => Object.values(topics).some(questions => questions.length > 0));
    $('#mock-subject-select').innerHTML = availableSubjects
      .map(([subject]) => `<option value="${esc(subject)}">${esc(subject)}</option>`)
      .join('');
    $('#start-mock-button').disabled = availableSubjects.length === 0;
  }

  function renderTopics(scroll = true) {
    const year = $('#year-select').value;
    const topics = state.data[year]?.[state.subject] || {};
    const entries = Object.entries(topics);
    $('#topic-title').textContent = `${SUBJECTS[state.subject][1]} · ${year}`;
    if (!entries.length) {
      $('#topic-grid').innerHTML = '<p>No questions are available for this year yet.</p>';
    } else {
      $('#topic-grid').innerHTML = entries.map(([topic, questions]) => {
        const available = questionPool(questions).length;
        const detail = available
          ? `${available} ${available === 1 ? 'question' : 'questions'} · ${DIFFICULTIES[state.difficulty]}`
          : `No ${DIFFICULTIES[state.difficulty].toLowerCase()} questions yet`;
        return `<button class="topic-card" data-topic="${esc(topic)}"${available ? '' : ' disabled'}><strong>${esc(topic)}</strong><span>${detail}</span></button>`;
      }).join('');
      document.querySelectorAll('#topic-grid [data-topic]:not(:disabled)').forEach(button => {
        button.onclick = () => start(button.dataset.topic);
      });
    }
    $('#topic-section').classList.remove('hidden');
    if (scroll) $('#topic-section').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function pickSubject(subject) {
    state.subject = subject;
    renderTopics();
  }

  function topicResults(history, subject, topic) {
    let total = 0;
    let correct = 0;
    let attempts = 0;
    history.filter(entry => entry.subject === subject).forEach(entry => {
      const details = Array.isArray(entry.questionDetails)
        ? entry.questionDetails.filter(question => question.topic === topic)
        : [];
      if (details.length) {
        attempts += 1;
        total += details.length;
        correct += details.filter(question => question.correct).length;
      } else if (entry.topic === topic) {
        attempts += 1;
        total += entry.total;
        correct += entry.score;
      }
    });
    return { attempts, total, correct };
  }

  function getRecommendation() {
    const year = $('#year-select').value;
    const record = get();
    const history = Array.isArray(record.history)
      ? record.history.filter(entry => entry.year === year)
      : [];
    const candidates = [];
    const subjectOrder = ['Maths', 'English', 'Verbal Reasoning', 'Non-Verbal Reasoning', 'Science'];

    Object.entries(state.data[year] || {}).forEach(([subject, topics]) => {
      Object.entries(topics).forEach(([topic, questions]) => {
        const available = questionPool(questions);
        if (!available.length) return;
        const results = topicResults(history, subject, topic);
        candidates.push({
          year,
          subject,
          topic,
          attempts: results.attempts,
          accuracy: results.total ? Math.round(results.correct / results.total * 100) : null,
          questionCount: available.length,
          order: subjectOrder.indexOf(subject)
        });
      });
    });

    const weak = candidates
      .filter(candidate => candidate.accuracy !== null && candidate.accuracy < 80)
      .sort((a, b) => a.accuracy - b.accuracy)[0];
    if (weak) {
      return { ...weak, reason: `Recent accuracy here is ${weak.accuracy}%. A short review can help strengthen this skill.` };
    }

    const unpractised = candidates
      .filter(candidate => candidate.attempts === 0)
      .sort((a, b) => a.order - b.order)[0];
    if (unpractised) {
      return { ...unpractised, reason: 'Try a fresh topic to build a broader set of 11+ skills.' };
    }

    const nextReview = candidates.sort((a, b) => a.accuracy - b.accuracy)[0];
    return nextReview
      ? { ...nextReview, reason: 'You have covered every available topic. A quick review will help keep this skill fresh.' }
      : null;
  }

  function renderRecommendation() {
    const recommendation = getRecommendation();
    state.recommendation = recommendation;
    if (!recommendation) {
      $('#recommendation-title').textContent = 'No questions at this level yet';
      $('#recommendation-copy').textContent = 'Choose Mixed practice or another year group to see more topics.';
      $('#recommend-button').textContent = 'No practice available';
      $('#recommend-button').disabled = true;
      return;
    }

    $('#recommendation-title').textContent = `${recommendation.subject} · ${recommendation.topic}`;
    $('#recommendation-copy').textContent = `${recommendation.reason} ${recommendation.questionCount} questions available at this level.`;
    $('#recommend-button').textContent = `Start practice · ${recommendation.questionCount} questions`;
    $('#recommend-button').disabled = false;
  }

  function renderRewards() {
    const record = get();
    const name = $('#student-name').value.trim();
    $('#buddy-avatar').textContent = record.avatar;
    $('#buddy-avatar').setAttribute('aria-label', `${record.avatar} study buddy`);
    $('#buddy-greeting').textContent = name ? `${name}'s study buddy` : 'Ready for an adventure?';
    $('#star-balance').textContent = record.stars;

    const equipped = GIFTS.find(gift => gift.id === record.equippedGift);
    $('#buddy-gift').textContent = equipped?.icon || '';
    $('#buddy-gift').classList.toggle('hidden', !equipped);

    $('#character-options').innerHTML = AVATARS.map(avatar =>
      `<button class="character-choice${avatar === record.avatar ? ' selected' : ''}" type="button" data-avatar="${avatar}" aria-label="Choose ${avatar} as your buddy" aria-pressed="${avatar === record.avatar}">${avatar}</button>`
    ).join('');
    document.querySelectorAll('#character-options [data-avatar]').forEach(button => {
      button.onclick = () => {
        const updated = get();
        updated.avatar = button.dataset.avatar;
        put(updated);
        renderRewards();
      };
    });

    $('#gift-collection').innerHTML = record.ownedGifts.length
      ? record.ownedGifts.map(id => {
        const gift = GIFTS.find(item => item.id === id);
        return `<span class="collection-gift" title="${gift.name}">${gift.icon} <span>${gift.name}</span></span>`;
      }).join('')
      : '<p class="collection-empty">Your buddy’s shelf is waiting for its first gift.</p>';
    $('#gift-shop-items').innerHTML = GIFTS.map(gift => {
      const owned = record.ownedGifts.includes(gift.id);
      const canAfford = record.stars >= gift.cost;
      const label = owned ? 'In your collection' : canAfford ? 'Give this gift' : 'Keep earning stars';
      return `<article class="gift-item"><span class="gift-icon" aria-hidden="true">${gift.icon}</span><div class="gift-details"><strong>${gift.name}</strong><span>⭐ ${gift.cost} stars</span></div><button class="gift-buy-button" type="button" data-gift="${gift.id}"${owned || !canAfford ? ' disabled' : ''}>${label}</button></article>`;
    }).join('');
    document.querySelectorAll('#gift-shop-items [data-gift]:not(:disabled)').forEach(button => {
      button.onclick = () => {
        const gift = GIFTS.find(item => item.id === button.dataset.gift);
        const updated = get();
        if (!gift || updated.stars < gift.cost || updated.ownedGifts.includes(gift.id)) return;
        updated.stars -= gift.cost;
        updated.ownedGifts.push(gift.id);
        updated.equippedGift = gift.id;
        put(updated);
        renderRewards();
      };
    });
  }

  function dashboard() {
    const record = get();
    const history = Array.isArray(record.history) ? record.history : [];
    const total = history.reduce((sum, entry) => sum + entry.total, 0);
    const correct = history.reduce((sum, entry) => sum + entry.score, 0);
    const name = $('#student-name').value.trim();
    $('#dashboard-greeting').textContent = name ? `Welcome back, ${name}.` : 'Welcome to your study space.';
    $('#dashboard-sets').textContent = history.length;
    $('#dashboard-questions').textContent = total;
    $('#dashboard-accuracy').textContent = `${total ? Math.round(correct / total * 100) : 0}%`;
    renderRewards();
    renderRecommendation();
  }

  function start(topic) {
    const year = $('#year-select').value;
    const pool = state.data[year]?.[state.subject]?.[topic] || [];
    const available = questionPool(pool);
    if (!available.length) return;

    stopTimer();
    state.topic = topic;
    state.last = { year, subject: state.subject, topic };
    state.questions = [...available].sort(() => Math.random() - 0.5).slice(0, Math.min(10, available.length));
    state.index = 0;
    state.answers = [];
    state.sessionMode = 'practice';
    state.sessionType = 'practice';
    state.timeExpired = false;
    state.missedQuestions = [];
    show('quiz');
    question();
  }

  function startMock() {
    const year = $('#year-select').value;
    const subject = $('#mock-subject-select').value;
    const topics = state.data[year]?.[subject] || {};
    const questions = Object.entries(topics).flatMap(([topic, pool]) =>
      pool.map(question => ({ ...question, sourceTopic: topic }))
    );
    if (!questions.length) return;

    state.subject = subject;
    state.topic = 'Timed mock';
    state.last = { year, subject, topic: 'Timed mock' };
    state.questions = [...questions].sort(() => Math.random() - 0.5).slice(0, 10);
    state.index = 0;
    state.answers = [];
    state.sessionMode = 'mock';
    state.sessionType = 'mock';
    state.timeExpired = false;
    state.missedQuestions = [];
    show('quiz');
    question();
    startTimer();
  }

  function renderTimer() {
    const minutes = Math.floor(state.timeRemaining / 60);
    const seconds = state.timeRemaining % 60;
    const time = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    $('#timer-display').textContent = `Time left · ${time}`;
    $('#timer-display').setAttribute('aria-label', `Time remaining ${minutes} minutes ${seconds} seconds`);
    $('#timer-display').classList.toggle('low-time', state.timeRemaining <= 60);
    $('#timer-display').classList.remove('hidden');
  }

  function startTimer() {
    stopTimer();
    state.timeRemaining = 10 * 60;
    renderTimer();
    state.timerId = setInterval(() => {
      state.timeRemaining = Math.max(0, state.timeRemaining - 1);
      renderTimer();
      if (state.timeRemaining === 0) finishTimedMock();
    }, 1000);
  }

  function finishTimedMock() {
    if (state.sessionType !== 'mock') return;
    while (state.answers.length < state.questions.length) {
      state.answers.push({ value: 'No answer', correct: false, unanswered: true });
    }
    state.timeExpired = true;
    done();
  }

  function question() {
    const current = state.questions[state.index];
    const currentDifficulty = current.difficulty || 'core';
    const sessionLabel = state.sessionType === 'mock'
      ? 'Timed mock · Mixed difficulty'
      : state.sessionMode === 'missed-review'
        ? 'Missed question review'
        : DIFFICULTIES[state.difficulty];
    $('#quiz-label').textContent = `${state.last.year} · ${SUBJECTS[state.subject][1]} · ${state.topic}`;
    $('#quiz-difficulty').textContent = sessionLabel;
    $('#question-count').textContent = `${state.index + 1} / ${state.questions.length}`;
    $('#progress-fill').style.width = `${state.index / state.questions.length * 100}%`;
    $('#question-number').textContent = `Question ${state.index + 1} · ${DIFFICULTIES[currentDifficulty]}`;
    $('#question-text').textContent = current.question;
    $('#feedback').innerHTML = '';
    $('#next-button').classList.add('hidden');
    $('#skip-button').classList.toggle('hidden', state.sessionType !== 'mock');
    $('#timer-display').classList.toggle('hidden', state.sessionType !== 'mock');
    $('#answers').innerHTML = [...current.choices]
      .sort(() => Math.random() - 0.5)
      .map(choice => `<button class="answer" data-answer="${esc(choice)}">${esc(choice)}</button>`)
      .join('');
    document.querySelectorAll('.answer').forEach(button => {
      button.onclick = () => answer(button.dataset.answer);
    });
  }

  function answer(value) {
    const current = state.questions[state.index];
    const correct = value === current.answer;
    state.answers.push({ value, correct });
    document.querySelectorAll('.answer').forEach(button => {
      button.disabled = true;
      if (state.sessionType !== 'mock') {
        if (button.dataset.answer === current.answer) button.classList.add('correct');
        else if (button.dataset.answer === value) button.classList.add('incorrect');
      }
    });
    $('#feedback').innerHTML = state.sessionType === 'mock'
      ? 'Answer recorded. The answer review will be shown at the end.'
      : correct
        ? `<strong>Correct.</strong> ${esc(current.explanation)}`
        : `<strong>Correct answer: ${esc(current.answer)}</strong> ${esc(current.explanation)}`;
    $('#next-button').textContent = state.index === state.questions.length - 1 ? 'See results' : 'Next question';
    $('#next-button').classList.remove('hidden');
    $('#skip-button').classList.add('hidden');
  }

  function advanceQuestion() {
    if (state.index === state.questions.length - 1) {
      done();
      return;
    }
    state.index += 1;
    question();
  }

  function skipQuestion() {
    if (state.sessionType !== 'mock') return;
    state.answers.push({ value: 'No answer', correct: false, unanswered: true });
    advanceQuestion();
  }

  function done() {
    stopTimer();
    const score = state.answers.reduce((sum, answer) => sum + Number(answer.correct), 0);
    const record = get();
    const name = $('#student-name').value.trim();
    const earnedStars = score + 3;
    state.missedQuestions = state.questions.filter((question, index) => !state.answers[index].correct);
    record.name = name;
    record.stars += earnedStars;
    record.history = Array.isArray(record.history) ? record.history : [];
    record.history.unshift({
      date: new Date().toISOString(),
      year: state.last.year,
      subject: state.subject,
      topic: state.sessionType === 'mock'
        || (state.sessionMode === 'missed-review' && state.last.topic === 'Timed mock')
        ? 'Timed mock'
        : state.last.topic,
      type: state.sessionType,
      difficulty: state.sessionType === 'mock' ? 'mixed' : state.difficulty,
      mode: state.sessionMode,
      timeExpired: state.timeExpired,
      score,
      total: state.questions.length,
      questionDetails: state.questions.map((question, index) => ({
        topic: question.sourceTopic || state.last.topic,
        difficulty: question.difficulty || 'core',
        correct: state.answers[index].correct
      }))
    });
    put(record);
    $('#result-name').textContent = name || 'learner';
    $('#score-number').textContent = `${score}/${state.questions.length}`;
    $('#score-copy').textContent = ` · ${Math.round(score / state.questions.length * 100)}% correct`;
    $('#earned-stars').textContent = `⭐ +${earnedStars} stars for your study buddy!`;
    $('#result-message').textContent = state.timeExpired
      ? 'Time is up. Unanswered questions were marked incorrect. Review your answers below.'
      : score === state.questions.length
        ? 'Every answer was correct. Excellent work.'
        : score >= state.questions.length * 0.7
          ? 'A strong result. Review the questions you missed and try again.'
          : 'Every practice set helps. Review your answers, then give it another go.';
    $('#review-list').innerHTML = state.questions.map((question, index) => {
      const answer = state.answers[index];
      const topic = state.sessionType === 'mock' || question.sourceTopic
        ? `<p class="review-topic">${esc(question.sourceTopic || state.last.topic)}</p>`
        : '';
      return `<article class="review-item ${answer.correct ? 'correct' : ''}"><p><strong>${esc(question.question)}</strong></p>${topic}<p>Your answer: ${esc(answer.value)} · Correct answer: ${esc(question.answer)}</p><p>${esc(question.explanation)}</p></article>`;
    }).join('');
    $('#retry-missed-button').classList.toggle('hidden', state.missedQuestions.length === 0);
    show('results');
  }

  function retryMissed() {
    if (!state.missedQuestions.length) return;
    state.questions = [...state.missedQuestions];
    state.index = 0;
    state.answers = [];
    state.sessionMode = 'missed-review';
    state.sessionType = 'review';
    state.timeExpired = false;
    show('quiz');
    question();
  }

  function historyEntry(entry) {
    const level = DIFFICULTIES[entry.difficulty] || 'Mixed practice';
    const type = entry.type === 'mock' ? ' · Timed mock' : '';
    const review = entry.mode === 'missed-review' ? ' · Missed question review' : '';
    return `<div class="history-entry"><div><p><strong>${esc(entry.year)} · ${esc(SUBJECTS[entry.subject]?.[1] || entry.subject)}</strong></p><span>${esc(entry.topic)} · ${new Date(entry.date).toLocaleDateString('en-GB')} · ${esc(level)}${type}${review}</span></div><strong>${entry.score}/${entry.total}</strong></div>`;
  }

  function progress() {
    const record = get();
    const rows = Array.isArray(record.history) ? record.history : [];
    const total = rows.reduce((sum, entry) => sum + entry.total, 0);
    const correct = rows.reduce((sum, entry) => sum + entry.score, 0);
    $('#progress-summary').innerHTML = `<div class="stat"><strong>${rows.length}</strong><span>Practice sets completed</span></div><div class="stat"><strong>${total}</strong><span>Questions completed</span></div><div class="stat"><strong>${total ? Math.round(correct / total * 100) : 0}%</strong><span>Average accuracy</span></div>`;
    $('#history-list').innerHTML = rows.length
      ? rows.slice(0, 12).map(historyEntry).join('')
      : '<p class="hint">There is no progress yet. Finish your first practice set to see it here.</p>';
  }

  function parentProgress() {
    const record = get();
    const allRows = Array.isArray(record.history) ? record.history : [];
    const year = $('#parent-year-filter').value;
    const rows = year === 'all' ? allRows : allRows.filter(entry => entry.year === year);
    const total = rows.reduce((sum, entry) => sum + entry.total, 0);
    const correct = rows.reduce((sum, entry) => sum + entry.score, 0);
    $('#parent-summary').innerHTML = `<div class="stat"><strong>${rows.length}</strong><span>Practice sessions</span></div><div class="stat"><strong>${total}</strong><span>Questions attempted</span></div><div class="stat"><strong>${total ? Math.round(correct / total * 100) : 0}%</strong><span>Overall accuracy</span></div>`;

    const subjects = new Map();
    const topics = new Map();
    rows.forEach(entry => {
      const subject = subjects.get(entry.subject) || { total: 0, correct: 0, sessions: 0 };
      subject.total += entry.total;
      subject.correct += entry.score;
      subject.sessions += 1;
      subjects.set(entry.subject, subject);

      const details = Array.isArray(entry.questionDetails) && entry.questionDetails.length
        ? entry.questionDetails
        : Array.from({ length: entry.total }, (_, index) => ({
          topic: entry.topic,
          correct: index < entry.score
        }));
      details.forEach(detail => {
        const key = `${entry.subject}::${detail.topic}`;
        const topic = topics.get(key) || { subject: entry.subject, name: detail.topic, total: 0, correct: 0 };
        topic.total += 1;
        topic.correct += Number(detail.correct);
        topics.set(key, topic);
      });
    });

    const subjectRows = [...subjects.entries()]
      .sort((a, b) => Object.keys(SUBJECTS).indexOf(a[0]) - Object.keys(SUBJECTS).indexOf(b[0]));
    $('#subject-analysis').innerHTML = subjectRows.length
      ? subjectRows.map(([subject, results]) => analysisRow(
        SUBJECTS[subject]?.[1] || subject,
        results.correct,
        results.total,
        `${results.total} questions · ${results.sessions} sessions`
      )).join('')
      : '<p class="analytics-empty">Complete a practice session to see subject progress.</p>';

    const topicRows = [...topics.values()]
      .sort((a, b) => (a.correct / a.total) - (b.correct / b.total) || b.total - a.total)
      .slice(0, 8);
    $('#topic-analysis').innerHTML = topicRows.length
      ? topicRows.map(topic => analysisRow(
        `${SUBJECTS[topic.subject]?.[1] || topic.subject} · ${topic.name}`,
        topic.correct,
        topic.total,
        `${topic.total} questions attempted`
      )).join('')
      : '<p class="analytics-empty">Topic insights will appear after the first practice session.</p>';
    $('#parent-history-list').innerHTML = rows.length
      ? rows.slice(0, 8).map(historyEntry).join('')
      : '<p class="analytics-empty">No learning activity recorded for this year yet.</p>';
  }

  function analysisRow(name, correct, total, detail) {
    const accuracy = total ? Math.round(correct / total * 100) : 0;
    return `<div class="analytics-row"><div class="analytics-label"><strong>${esc(name)}</strong><span>${esc(detail)}</span><strong class="analytics-score">${accuracy}%</strong></div><div class="analytics-track" role="progressbar" aria-label="${esc(name)} accuracy" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${accuracy}"><span style="width:${accuracy}%"></span></div></div>`;
  }

  async function init() {
    try {
      const response = await fetch('questions.json', { cache: 'no-store' });
      if (!response.ok) throw Error();
      state.data = await response.json();
    } catch {
      $('#subject-grid').innerHTML = '<p>Questions could not be loaded. Please open this website through a local server and try again.</p>';
      return;
    }

    $('#student-name').value = get().name || '';
    state.difficulty = $('#difficulty-select').value;
    subjects();
    populateMockSubjects();
    dashboard();
    $('#student-name').addEventListener('input', dashboard);
    $('#year-select').addEventListener('change', () => {
      subjects();
      populateMockSubjects();
      $('#topic-section').classList.add('hidden');
      dashboard();
    });
    $('#difficulty-select').addEventListener('change', () => {
      state.difficulty = $('#difficulty-select').value;
      subjects();
      if (state.subject && !$('#topic-section').classList.contains('hidden')) renderTopics(false);
      dashboard();
    });
    $('#next-button').onclick = () => state.index === state.questions.length - 1
      ? done()
      : (state.index++, question());
    $('#skip-button').onclick = skipQuestion;
    $('#start-mock-button').onclick = startMock;
    $('#parent-year-filter').addEventListener('change', parentProgress);
    document.querySelectorAll('[data-action]').forEach(button => {
      button.onclick = event => {
        event.preventDefault();
        const action = button.dataset.action;
        if (action === 'home') {
          dashboard();
          $('#topic-section').classList.add('hidden');
          show('home');
        }
        if (action === 'rewards') {
          dashboard();
          $('#topic-section').classList.add('hidden');
          show('home');
          $('#rewards-section').scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        if (action === 'progress') {
          progress();
          show('progress');
        }
        if (action === 'parents') {
          parentProgress();
          show('parent');
        }
        if (action === 'retry' && state.last) start(state.last.topic);
        if (action === 'retry-missed') retryMissed();
        if (action === 'recommend' && state.recommendation) {
          state.subject = state.recommendation.subject;
          start(state.recommendation.topic);
        }
      };
    });
    $('#clear-progress').onclick = () => {
      if (confirm('Are you sure you want to clear all progress saved on this device?')) {
        localStorage.removeItem(STORE);
        $('#student-name').value = '';
        dashboard();
        progress();
      }
    };
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.getRegistrations().then(registrations => {
        registrations.forEach(registration => registration.unregister());
      });
    }
  }

  document.addEventListener('DOMContentLoaded', init);
})();
