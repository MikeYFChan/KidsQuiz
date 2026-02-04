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

function showError(elementId, message) {
    const errorEl = document.getElementById(elementId);
    if (errorEl) {
        errorEl.textContent = message;
        errorEl.classList.add('visible');
    }
}

function hideError(elementId) {
    const errorEl = document.getElementById(elementId);
    if (errorEl) {
        errorEl.textContent = '';
        errorEl.classList.remove('visible');
    }
}

function setInputState(inputId, isValid) {
    const input = document.getElementById(inputId);
    if (input) {
        input.classList.remove('valid', 'invalid');
        input.classList.add(isValid ? 'valid' : 'invalid');
    }
}

function clearInputStates() {
    const nameInput = document.getElementById('user-name');
    const gradeSelect = document.getElementById('user-grade');
    if (nameInput) nameInput.classList.remove('valid', 'invalid');
    if (gradeSelect) gradeSelect.classList.remove('valid', 'invalid');
}

function validateName(name) {
    if (!name || name.trim() === '') {
        return 'Please enter your name';
    }
    const trimmed = name.trim();
    if (trimmed.length < 2) {
        return 'Name must be at least 2 characters';
    }
    if (trimmed.length > 50) {
        return 'Name must be less than 50 characters';
    }
    if (!/^[a-zA-Z\s]+$/.test(trimmed)) {
        return 'Name can only contain letters and spaces';
    }
    return null;
}

function validateGrade(grade) {
    if (!grade) {
        return 'Please select your grade';
    }
    return null;
}

function showSuccess(message) {
    const successEl = document.getElementById('user-form-success');
    if (successEl) {
        successEl.textContent = message;
        successEl.classList.add('visible');
        setTimeout(() => {
            successEl.classList.remove('visible');
        }, 3000);
    }
}

function setButtonLoading(button, isLoading) {
    if (button) {
        button.disabled = isLoading;
        button.classList.toggle('loading', isLoading);
        button.textContent = isLoading ? 'Saving...' : 'Save User';
    }
}

function setupUserEventListeners() {
    const openUserModalBtn = document.getElementById('open-user-modal') || document.getElementById('open-user-modal-footer');
    const closeUserModalBtn = document.getElementById('close-user-modal');
    const userForm = document.getElementById('user-form');
    const userSelect = document.getElementById('user-select');
    const nameInput = document.getElementById('user-name');
    const gradeSelect = document.getElementById('user-grade');
    const saveBtn = document.getElementById('save-user-btn');

    if (openUserModalBtn) openUserModalBtn.addEventListener('click', () => {
        openUserModal();
        clearFormErrors();
    });
    if (closeUserModalBtn) closeUserModalBtn.addEventListener('click', closeUserModal);

    if (nameInput) {
        nameInput.addEventListener('input', () => {
            const error = validateName(nameInput.value);
            if (error) {
                showError('user-name-error', error);
                setInputState('user-name', false);
            } else {
                hideError('user-name-error');
                setInputState('user-name', true);
            }
        });

        nameInput.addEventListener('blur', () => {
            if (nameInput.value.trim()) {
                const error = validateName(nameInput.value);
                if (error) {
                    showError('user-name-error', error);
                    setInputState('user-name', false);
                }
            }
        });
    }

    if (gradeSelect) {
        gradeSelect.addEventListener('change', () => {
            const error = validateGrade(gradeSelect.value);
            if (error) {
                showError('user-grade-error', error);
                setInputState('user-grade', false);
            } else {
                hideError('user-grade-error');
                setInputState('user-grade', true);
            }
        });

        gradeSelect.addEventListener('blur', () => {
            if (gradeSelect.value) {
                const error = validateGrade(gradeSelect.value);
                if (error) {
                    showError('user-grade-error', error);
                    setInputState('user-grade', false);
                }
            }
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

            if (nameError) {
                showError('user-name-error', nameError);
                setInputState('user-name', false);
                hasErrors = true;
            } else {
                setInputState('user-name', true);
            }

            if (gradeError) {
                showError('user-grade-error', gradeError);
                setInputState('user-grade', false);
                hasErrors = true;
            } else {
                setInputState('user-grade', true);
            }

            if (hasErrors) {
                if (nameInput && !nameError) nameInput.focus();
                return;
            }

            setButtonLoading(saveBtn, true);

            await new Promise(resolve => setTimeout(resolve, 300));

            const user = { id: Date.now(), name: name.trim(), grade };
            users.push(user);
            saveUsersToStorage();
            setCurrentUser(user);

            setButtonLoading(saveBtn, false);
            showSuccess('User saved successfully!');
            closeUserModal();

            setTimeout(() => {
                clearFormErrors();
                if (nameInput) nameInput.value = '';
                if (gradeSelect) gradeSelect.value = '';
            }, 300);
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

function clearFormErrors() {
    hideError('user-name-error');
    hideError('user-grade-error');
    const nameInput = document.getElementById('user-name');
    const gradeSelect = document.getElementById('user-grade');
    const successEl = document.getElementById('user-form-success');
    if (nameInput) nameInput.classList.remove('valid', 'invalid');
    if (gradeSelect) gradeSelect.classList.remove('valid', 'invalid');
    if (successEl) successEl.classList.remove('visible');
}

export function openUserModal() {
    const modal = document.getElementById('user-modal');
    if (modal) modal.classList.add('active');
    const nameInput = document.getElementById('user-name');
    const gradeSelect = document.getElementById('user-grade');
    if (currentUser) {
        if (nameInput) nameInput.value = currentUser.name || '';
        if (gradeSelect) gradeSelect.value = currentUser.grade || '';
        if (nameInput && currentUser.name) {
            setInputState('user-name', true);
        }
        if (gradeSelect && currentUser.grade) {
            setInputState('user-grade', true);
        }
    } else {
        if (nameInput) nameInput.value = '';
        if (gradeSelect) gradeSelect.value = '';
    }
    clearFormErrors();
    if (nameInput) nameInput.focus();
}

export function closeUserModal() {
    const modal = document.getElementById('user-modal');
    if (modal) modal.classList.remove('active');
    clearFormErrors();
}
