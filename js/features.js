// ============================================
// Progress Reporting & Insights
// ============================================
// ============================================
function openProgressReport() {
    if (state.currentView === 'question') {
        showToast('Finish your practice first!', 'info');
        return;
    }
    if (!state.currentUser) {
        showToast('Please select a student first in the sidebar.', 'info');
        return;
    }
    const reportData = generateReportData(state.currentUser.id);
    renderReport(reportData);
    showScreen('report');
}

function generateReportData(userId) {
    const history = state.quizHistory ? (state.quizHistory[String(userId)] || []) : [];
    if (history.length === 0) return null;

    const subjectStats = {};
    const mistakeStats = {};
    const weeklyActivity = new Array(7).fill(0);
    const now = new Date();

    history.forEach(entry => {
        // Subject Stats
        if (!subjectStats[entry.subject]) {
            subjectStats[entry.subject] = { total: 0, correct: 0, count: 0 };
        }
        subjectStats[entry.subject].total += entry.total;
        subjectStats[entry.subject].correct += entry.correct;
        subjectStats[entry.subject].count += 1;

        // Mistake Stats
        if (entry.mistakes) {
            entry.mistakes.forEach(m => {
                mistakeStats[m.skill] = (mistakeStats[m.skill] || 0) + 1;
            });
        }

        // Weekly Activity
        const entryDate = new Date(entry.date);
        const diffDays = Math.floor((now - entryDate) / (1000 * 60 * 60 * 24));
        if (diffDays < 7) {
            weeklyActivity[6 - diffDays] += entry.correct;
        }
    });

    let strongest = { name: 'N/A', score: -1 };
    let weakest = { name: 'N/A', score: 101 };

    Object.entries(subjectStats).forEach(([name, stats]) => {
        const avg = (stats.correct / stats.total) * 100;
        if (avg > strongest.score) strongest = { name, score: avg };
        if (avg < weakest.score) weakest = { name, score: avg };
    });

    const topMistakes = Object.entries(mistakeStats)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 3)
        .map(([skill, count]) => ({ skill, count }));

    return {
        student: state.currentUser.name,
        totalQuizzes: history.length,
        totalStars: history.filter(h => h.star).length,
        strongest: strongest.name !== 'N/A' ? strongest : null,
        weakest: weakest.name !== 'N/A' ? weakest : null,
        recentTrend: history.slice(-5).map(h => h.percentage),
        weeklyActivity,
        topMistakes
    };
}

function renderReport(data) {
    const content = getElement('report-content-full');
    if (!content) return;

    if (!data) {
        content.innerHTML = `
            <div class="no-data-premium">
                <div class="no-data-icon">📊</div>
                <h4>Empty Slate</h4>
                <p>Start your first quiz to unlock personalized insights and learning patterns!</p>
                <button onclick="showScreen('subject')" class="primary-btn" style="margin-top: 1rem">Start Learning</button>
            </div>
        `;
        return;
    }

    const getSubjectIcon = (subject) => {
        const icons = { 'Maths': '🔢', 'English': '📚', 'Chinese': '🧧', 'Verbal Reasoning': '💡', 'Non-Verbal Reasoning': '🧩', 'Science': '🧪' };
        return icons[subject] || '📝';
    };

    const trendHtml = data.recentTrend.map((p, i) => `
        <div class="trend-bar-wrapper">
            <span class="trend-percent">${p}%</span>
            <div class="trend-bar" style="height: ${Math.max(p, 5)}%; animation-delay: ${i * 0.1}s"></div>
        </div>
    `).join('');

    const maxDayScore = Math.max(...data.weeklyActivity, 1);
    const activityHtml = data.weeklyActivity.map((score, i) => {
        const height = (score / maxDayScore) * 100;
        const opacity = Math.max(0.2, score / maxDayScore);
        const dayName = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][(new Date().getDay() - (6 - i) + 7) % 7];
        return `<div class="activity-col"><div class="activity-bar" style="height: ${Math.max(height, 5)}%; opacity: ${opacity}" title="${score} correct"></div><span class="activity-day">${dayName}</span></div>`;
    }).join('');

    const mistakesHtml = data.topMistakes.length > 0
        ? data.topMistakes.map(m => `<div class="mistake-pill"><span class="skill-name">${m.skill}</span><span class="mistake-count">${m.count} misses</span></div>`).join('')
        : '<p class="empty-msg">No recurring mistakes found. Excellent!</p>';

    content.innerHTML = `
        <div class="report-stats-grid">
            <div class="report-stat-card"><span class="stat-label">Quizzes Completed</span><span class="stat-value">${data.totalQuizzes}</span></div>
            <div class="report-stat-card"><span class="stat-label">Stars Collected</span><span class="stat-value">${data.totalStars}</span></div>
        </div>
        <div class="report-section"><h4>📅 Weekly Activity</h4><div class="activity-chart">${activityHtml}</div></div>
        <div class="report-insights">
            <div class="insight-item highlight"><span class="insight-icon">${data.strongest ? getSubjectIcon(data.strongest.name) : '⭐'}</span><div class="insight-text"><strong>Strongest Subject: ${data.strongest ? data.strongest.name : 'Starting Out'}</strong><p>${data.strongest ? `Excellent mastery at ${Math.round(data.strongest.score)}%` : 'Keep practicing!'}</p></div></div>
            <div class="insight-item focus"><span class="insight-icon">${data.weakest ? getSubjectIcon(data.weakest.name) : '🎯'}</span><div class="insight-text"><strong>Focus Required: ${data.weakest ? data.weakest.name : 'N/A'}</strong><p>${data.weakest ? `Target: Improve ${data.weakest.name}` : 'Keep going!'}</p></div></div>
        </div>
        <div class="report-section"><h4>🔍 Mistakes Analysis</h4><div class="mistakes-container">${mistakesHtml}</div></div>
        <div class="report-trend"><h4>📈 Accuracy Trend</h4><div class="trend-chart">${trendHtml}</div><div class="trend-labels"><span>Start</span><span>Now</span></div></div>
    `;
}

// ============================================
// Data Portability
// ============================================
// ============================================
function exportUserData() {
    if (!state.currentUser) return;
    const data = { user: state.currentUser, history: state.quizHistory[String(state.currentUser.id)] || [], timestamp: new Date().toISOString() };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `KidsQuiz_${state.currentUser.name}_Backup.json`;
    a.click();
    showToast('Data exported successfully!', 'success');
}

function importUserData(event) {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
        try {
            const data = JSON.parse(e.target.result);
            if (!data.user || !data.history) throw new Error('Invalid format');
            const importedUser = data.user;
            importedUser.id = Date.now().toString();
            state.users.push(importedUser);
            state.quizHistory[importedUser.id] = data.history;
            saveUsersToStorage();
            saveHistoryToStorage();
            renderUserSelect();
            setCurrentUser(importedUser);
            showToast(`Data imported for ${importedUser.name}`, 'success');
        } catch (err) {
            showToast('Failed to import data.', 'error');
        }
    };
    reader.readAsText(file);
}
