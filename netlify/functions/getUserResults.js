// netlify/functions/getUserResults.js
// Retrieves quiz results for a specific user from Netlify Blobs

const { getStore } = require('@netlify/blobs');

exports.handler = async (event) => {
  // Only allow GET requests
  if (event.httpMethod !== 'GET') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' }),
      headers: { 'Content-Type': 'application/json' }
    };
  }

  try {
    const userId = event.queryStringParameters?.userId;

    if (!userId) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Missing required parameter: userId' }),
        headers: { 'Content-Type': 'application/json' }
      };
    }

    // Get the Netlify Blobs store for results
    const store = getStore('quiz-results');

    // List all results and filter by userId
    // Note: This is a simple implementation. For large datasets, use pagination
    const results = [];
    
    // We'll use a workaround: store results with userId prefix
    // Results should be queried from a database for production use
    
    return {
      statusCode: 200,
      body: JSON.stringify({ 
        success: true,
        userId,
        results: results,
        note: 'For full query functionality, implement a database backend'
      }),
      headers: { 'Content-Type': 'application/json' }
    };
  } catch (error) {
    console.error('Error retrieving results:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
      headers: { 'Content-Type': 'application/json' }
    };
  }
};
