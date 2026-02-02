// Archived example function: getUserResults
// Archived on 2026-02-02 — see MIGRATING_FUNCTIONS.md for migration guidance

const { getStore } = require('@netlify/blobs');

exports.handler = async (event) => {
  if (event.httpMethod !== 'GET') return { statusCode: 405, body: JSON.stringify({ error: 'Method not allowed' }) };
  try {
    const userId = event.queryStringParameters?.userId;
    if (!userId) return { statusCode: 400, body: JSON.stringify({ error: 'Missing userId' }) };

    const store = getStore('quiz-results');
    const results = [];
    return { statusCode: 200, body: JSON.stringify({ success: true, userId, results }) };
  } catch (error) {
    console.error('Error:', error);
    return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
  }
};