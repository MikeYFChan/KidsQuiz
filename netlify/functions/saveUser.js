// netlify/functions/saveUser.js
// Saves user data (name and grade) to Netlify Blobs

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
    const { id, name, grade } = JSON.parse(event.body);

    if (!id || !name) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Missing required fields: id and name' }),
        headers: { 'Content-Type': 'application/json' }
      };
    }

    // Get the Netlify Blobs store for users
    const store = getStore('users');

    // Save user data
    const userData = {
      id,
      name,
      grade: grade || '',
      savedAt: new Date().toISOString()
    };

    await store.set(`user_${id}`, JSON.stringify(userData));

    return {
      statusCode: 200,
      body: JSON.stringify({ 
        success: true, 
        message: 'User saved successfully',
        user: userData
      }),
      headers: { 'Content-Type': 'application/json' }
    };
  } catch (error) {
    console.error('Error saving user:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
      headers: { 'Content-Type': 'application/json' }
    };
  }
};
