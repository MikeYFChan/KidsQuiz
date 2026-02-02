// Archived example function: saveQuizResult
// Archived on 2026-02-02 — see MIGRATING_FUNCTIONS.md for migration guidance

const { getStore } = require('@netlify/blobs');

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: JSON.stringify({ error: 'Method not allowed' }) };
  }

  try {
    const { userId, subject, year } = JSON.parse(event.body);
    if (!userId || !subject || !year) {
      return { statusCode: 400, body: JSON.stringify({ error: 'Missing required fields' }) };
    }

    const store = getStore('quiz-results');
    const resultId = `${userId}_${Date.now()}`;
    const resultData = { userId, subject, year, date: new Date().toISOString() };
    await store.set(resultId, JSON.stringify(resultData));

    return { statusCode: 200, body: JSON.stringify({ success: true, resultId }) };
  } catch (error) {
    console.error('Error:', error);
    return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
  }
};