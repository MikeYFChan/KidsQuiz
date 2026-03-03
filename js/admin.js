document.addEventListener('DOMContentLoaded', () => {
    // 0. Password Protection
    const passwordModal = document.getElementById('admin-password-modal');
    const passwordInput = document.getElementById('admin-password-input');
    const passwordSubmit = document.getElementById('admin-password-submit');
    const passwordError = document.getElementById('admin-password-error');

    function checkPassword() {
        if (passwordInput.value === '1234') {
            passwordModal.style.display = 'none';
        } else {
            passwordError.style.display = 'block';
            passwordInput.value = '';
            passwordInput.focus();
        }
    }

    if (passwordSubmit) {
        passwordSubmit.addEventListener('click', checkPassword);
    }

    if (passwordInput) {
        passwordInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') checkPassword();
        });
        passwordInput.focus();
    }

    // 1. Initialise State
    loadUsersFromStorage();

    // 2. Tab Navigation
    const tabs = document.querySelectorAll('.admin-tab');
    const sections = document.querySelectorAll('.admin-section');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            sections.forEach(s => s.classList.remove('active'));

            tab.classList.add('active');
            const target = tab.getAttribute('data-target');
            document.getElementById(target).classList.add('active');
        });
    });

    // 3. Render Users
    renderAdminUsers();

    // 4. Load JSON
    const jsonEditor = document.getElementById('json-editor');
    if (typeof QUESTIONS_DATA !== 'undefined') {
        jsonEditor.value = JSON.stringify(QUESTIONS_DATA, null, 2);
    } else {
        jsonEditor.value = "/* QUESTIONS_DATA not found. Please ensure questions-data.js is loaded correctly. */";
    }

    // 5. JSON Editor Actions
    document.getElementById('format-json-btn').addEventListener('click', () => {
        try {
            const parsed = JSON.parse(jsonEditor.value);
            jsonEditor.value = JSON.stringify(parsed, null, 2);
            showToast('JSON formatted successfully', 'success');
        } catch (e) {
            showToast('Invalid JSON format: ' + e.message, 'error');
        }
    });

    document.getElementById('reset-json-btn').addEventListener('click', () => {
        if (confirm("Are you sure you want to reset to the currently loaded file data? All unsaved changes will be lost.")) {
            if (typeof QUESTIONS_DATA !== 'undefined') {
                jsonEditor.value = JSON.stringify(QUESTIONS_DATA, null, 2);
                showToast('Reset successful', 'success');
            }
        }
    });

    document.getElementById('download-json-btn').addEventListener('click', () => {
        try {
            // Verify it parses first
            const parsed = JSON.parse(jsonEditor.value);

            // Create content
            const content = `const QUESTIONS_DATA = ${JSON.stringify(parsed, null, 2)};\n`;

            // Trigger download
            const blob = new Blob([content], { type: 'text/javascript' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'questions-data.js';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);

            showToast('Download started! Please save this file and overwrite js/questions-data.js', 'success', 5000);
        } catch (e) {
            showToast('Cannot download: Invalid JSON format. Please format JSON first to check errors.', 'error');
        }
    });
});

function renderAdminUsers() {
    const tbody = document.getElementById('users-tbody');
    tbody.innerHTML = '';

    if (!state.users || state.users.length === 0) {
        tbody.innerHTML = '<tr><td colspan="7" class="text-center">No users found. Go to the main app to create a user first.</td></tr>';
        return;
    }

    state.users.forEach(user => {
        const tr = document.createElement('tr');

        // Ensure rewards exist
        const rewards = user.rewards || { level: 1, stars: 0, streak: 0, xp: 0 };

        tr.innerHTML = `
            <td><strong>${user.name}</strong></td>
            <td>${user.grade}</td>
            <td><input type="number" class="admin-input" id="lvl-${user.id}" value="${rewards.level}" min="1"></td>
            <td><input type="number" class="admin-input" id="stars-${user.id}" value="${rewards.stars}" min="0"></td>
            <td><input type="number" class="admin-input" id="streak-${user.id}" value="${rewards.streak}" min="0"></td>
            <td><input type="number" class="admin-input" id="xp-${user.id}" value="${rewards.xp}" min="0" step="10"></td>
            <td>
                <button class="btn btn-primary" onclick="saveUserEdits('${user.id}')">💾 Save</button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

window.saveUserEdits = function (userId) {
    const user = state.users.find(u => String(u.id) === String(userId));
    if (!user) {
        showToast('User not found!', 'error');
        return;
    }

    const lvlInput = document.getElementById(`lvl-${userId}`);
    const starsInput = document.getElementById(`stars-${userId}`);
    const streakInput = document.getElementById(`streak-${userId}`);
    const xpInput = document.getElementById(`xp-${userId}`);

    if (!user.rewards) user.rewards = {};

    user.rewards.level = parseInt(lvlInput.value) || 1;
    user.rewards.stars = parseInt(starsInput.value) || 0;
    user.rewards.streak = parseInt(streakInput.value) || 0;
    user.rewards.xp = parseInt(xpInput.value) || 0;

    saveUsersToStorage();

    // If we're editing the currently active user, update them too
    const current = localStorage.getItem('quiz_current_user');
    if (current) {
        try {
            const parsed = JSON.parse(current);
            if (String(parsed.id) === String(userId)) {
                localStorage.setItem('quiz_current_user', JSON.stringify(user));
            }
        } catch (e) { }
    }

    showToast(`Saved changes for ${user.name}!`, 'success');
};
