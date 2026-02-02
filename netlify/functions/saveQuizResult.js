// netlify/functions/saveQuizResult.js
// Saves quiz results to Netlify Blobs

const { getStore } = require('@netlify/blobs');

exports.handler = async (event) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' }),
      headers: { 'Content-Type': 'application/json' }
    };
  }

  try {
    const { userId, subject, year, correct, total, percentage, date } = JSON.parse(event.body);

    if (!userId || !subject || !year) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Missing required fields: userId, subject, year' }),
        headers: { 'Content-Type': 'application/json' }
      };
    }

    // Get the Netlify Blobs store for results
    const store = getStore('quiz-results');

    // Create a unique ID for this result entry
    const resultId = `${userId}_${Date.now()}`;

    // Save quiz result
    const resultData = {
      userId,
      subject,
      year,
      correct: correct || 0,
      total: total || 0,
      percentage: percentage || 0,
      date: date || new Date().toISOString()
    };

    await store.set(resultId, JSON.stringify(resultData));

    return {
      statusCode: 200,
      body: JSON.stringify({ 
        success: true, 
        message: 'Quiz result saved successfully',
        resultId,
        result: resultData
      }),
      headers: { 'Content-Type': 'application/json' }
    };
  } catch (error) {
    console.error('Error saving quiz result:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
      headers: { 'Content-Type': 'application/json' }
    };
  }
};
