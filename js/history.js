// History Management Module
let quizHistory = {};

import { showToast } from './ui.js';

const REMOTE_API_BASE = (window.REMOTE_API_BASE && window.REMOTE_API_BASE.trim()) || '';
const REMOTE_SYNC_ENABLED = (typeof window.REMOTE_SYNC_ENABLED === 'boolean') ? window.REMOTE_SYNC_ENABLED : false;

function apiUrl(funcName) {
    if (!REMOTE_API_BASE) return null;
    return `${REMOTE_API_BASE.replace(/\/$/, '')}/${funcName}`;
}

async function saveQuizResultToRemote(result) {
    if (!REMOTE_SYNC_ENABLED) return;
    const url = apiUrl('saveQuizResult');
    if (!url) return;
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(result)
        });
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        console.log('Quiz result saved to remote successfully');
    } catch (error) {
        console.warn('Error saving quiz result to remote:', error);
    }
}

export function loadHistoryFromStorage() {
    try {
        const raw = localStorage.getItem('quiz_history');
        quizHistory = raw ? JSON.parse(raw) : {};
    } catch (e) {
        quizHistory = {};
    }
}

export function saveHistoryToStorage() {
    try {
        localStorage.setItem('quiz_history', JSON.stringify(quizHistory));
    } catch (e) {
        console.warn('Failed to save history', e);
    }
}

export function recordHistory(entry, currentUser) {
    if (!currentUser || !currentUser.id) return;
    const id = String(currentUser.id);
    if (!quizHistory[id]) quizHistory[id] = [];
    quizHistory[id].push(entry);
    saveHistoryToStorage();
    saveQuizResultToRemote({
        userId: currentUser.id,
        subject: entry.subject,
        year: entry.year,
        correct: entry.correct,
        total: entry.total,
        percentage: entry.percentage,
        date: entry.date
    });
}

export function showHistoryModalFor(userId) {
    const list = document.getElementById('history-list');
    if (!list) return;
    const entries = quizHistory[String(userId)] || [];
    if (!entries.length) {
        list.innerHTML = '<p>No history for this user.</p>';
    } else {
        list.innerHTML = '';
        const ul = document.createElement('div');
        entries.slice().reverse().forEach(e => {
            const item = document.createElement('div');
            item.style.padding = '8px 0';
            item.style.borderBottom = '1px solid #eee';
            item.innerHTML = `<strong>${new Date(e.date).toLocaleString()}</strong><div>${e.subject} - ${e.year} — ${e.correct}/${e.total} (${e.percentage}%)</div>`;
            ul.appendChild(item);
        });
        list.appendChild(ul);
    }
    const modal = document.getElementById('history-modal');
    if (modal) modal.style.display = 'flex';
}

export function initHistoryManagement() {
    loadHistoryFromStorage();
    setupHistoryEventListeners();
}

function setupHistoryEventListeners() {
    const openHistoryBtn = document.getElementById('open-history-btn');
    const closeHistoryBtn = document.getElementById('close-history-btn');
    const clearHistoryBtn = document.getElementById('clear-history-btn');

    if (openHistoryBtn) {
        openHistoryBtn.addEventListener('click', () => {
            const currentUser = JSON.parse(localStorage.getItem('quiz_current_user'));
            if (!currentUser) {
                showToast('Please select a user first', 'info');
                return;
            }
            showHistoryModalFor(currentUser.id);
        });
    }

    if (closeHistoryBtn) {
        closeHistoryBtn.addEventListener('click', () => {
            const modal = document.getElementById('history-modal');
            if (modal) modal.style.display = 'none';
        });
    }

    if (clearHistoryBtn) {
        clearHistoryBtn.addEventListener('click', () => {
            const currentUser = JSON.parse(localStorage.getItem('quiz_current_user'));
            if (!currentUser) return;
            if (!confirm('Clear history for this user?')) return;
            delete quizHistory[String(currentUser.id)];
            saveHistoryToStorage();
            showHistoryModalFor(currentUser.id);
        });
    }
}
