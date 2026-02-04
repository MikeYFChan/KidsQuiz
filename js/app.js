// Main Application Entry Point
import { initUserManagement } from './user.js';
import { initHistoryManagement } from './history.js';
import { initQuizEventListeners, loadQuestions } from './quiz.js';

document.addEventListener('DOMContentLoaded', async () => {
    initUserManagement();
    initHistoryManagement();
    initQuizEventListeners();
    await loadQuestions();
});
