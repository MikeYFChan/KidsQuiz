// User Management Module
let users = [];
let currentUser = null;

const REMOTE_API_BASE = (window.REMOTE_API_BASE && window.REMOTE_API_BASE.trim()) || '';
const REMOTE_SYNC_ENABLED = (typeof window.REMOTE_SYNC_ENABLED === 'boolean') ? window.REMOTE_SYNC_ENABLED : false;

function apiUrl(funcName) {
    if (!REMOTE_API_BASE) return null;
    return `${REMOTE_API_BASE.replace(/\/$/, '')}/${funcName}`;
}

export function loadUsersFromStorage() {
    try {
        const raw = localStorage.getItem('quiz_users');
        users = raw ? JSON.parse(raw) : [];
    } catch (e) {
        users = [];
    }
}

export function saveUsersToStorage() {
    localStorage.setItem('quiz_users', JSON.stringify(users));
    users.forEach(user => {
        saveUserToRemote(user).catch(err => {
            console.warn('Failed to save user to remote:', err);
        });
    });
}

async function saveUserToRemote(user) {
    if (!REMOTE_SYNC_ENABLED) return;
    const url = apiUrl('saveUser');
    if (!url) return;
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id: user.id, name: user.name, grade: user.grade })
        });
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        console.log('User saved to remote successfully');
    } catch (error) {
        console.warn('Error saving user to remote:', error);
    }
}

export function loadCurrentUser() {
    try {
        const raw = localStorage.getItem('quiz_current_user');
        currentUser = raw ? JSON.parse(raw) : null;
    } catch (e) {
        currentUser = null;
    }
    renderUserBanner();
}

export function setCurrentUser(user) {
    currentUser = user;
    localStorage.setItem('quiz_current_user', JSON.stringify(user));
    renderUserBanner();
    renderUserSelect();
}

export function getCurrentUser() {
    return currentUser;
}

export function renderUserBanner() {
    const el = document.getElementById('current-user-display');
    if (!el) return;
    if (currentUser && currentUser.name) {
        el.textContent = `User: ${currentUser.name} (${currentUser.grade || 'No grade'})`;
    } else {
        el.textContent = 'No user selected';
    }
}

export function renderUserSelect() {
    const sel = document.getElementById('user-select');
    if (!sel) return;
    sel.innerHTML = '';
    const placeholder = document.createElement('option');
    placeholder.value = '';
    placeholder.textContent = 'Select user';
    sel.appendChild(placeholder);
    users.forEach(u => {
        const opt = document.createElement('option');
        opt.value = u.id;
        opt.textContent = `${u.name} (${u.grade || ''})`;
        if (currentUser && String(currentUser.id) === String(u.id)) opt.selected = true;
        sel.appendChild(opt);
    });
}

export function initUserManagement() {
    loadUsersFromStorage();
    loadCurrentUser();
    renderUserSelect();
    setupUserEventListeners();
}

function setupUserEventListeners() {
    const openUserModalBtn = document.getElementById('open-user-modal') || document.getElementById('open-user-modal-footer');
    const closeUserModalBtn = document.getElementById('close-user-modal');
    const userForm = document.getElementById('user-form');
    const userSelect = document.getElementById('user-select');

    if (openUserModalBtn) openUserModalBtn.addEventListener('click', openUserModal);
    if (closeUserModalBtn) closeUserModalBtn.addEventListener('click', closeUserModal);

    if (userForm) {
        userForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('user-name').value.trim();
            const grade = document.getElementById('user-grade').value;
            if (!name || !grade) {
                alert('Please enter a name and select a grade.');
                return;
            }
            const user = { id: Date.now(), name, grade };
            users.push(user);
            saveUsersToStorage();
            setCurrentUser(user);
            closeUserModal();
        });
    }

    if (userSelect) {
        userSelect.addEventListener('change', (e) => {
            const id = e.target.value;
            const selected = users.find(u => String(u.id) === String(id));
            if (selected) setCurrentUser(selected);
        });
    }
}

export function openUserModal() {
    document.getElementById('user-modal').style.display = 'flex';
    const nameInput = document.getElementById('user-name');
    const gradeSelect = document.getElementById('user-grade');
    if (currentUser) {
        nameInput.value = currentUser.name || '';
        gradeSelect.value = currentUser.grade || '';
    } else {
        nameInput.value = '';
        gradeSelect.value = '';
    }
    nameInput.focus();
}

export function closeUserModal() {
    document.getElementById('user-modal').style.display = 'none';
}
