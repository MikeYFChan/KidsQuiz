// ARCHIVED: netlify/functions/saveQuizResult.js
// This Netlify function was archived on 2026-02-02 when the project stopped using Netlify.
// See `archive/netlify-functions/saveQuizResult.js` for the original implementation and `MIGRATING_FUNCTIONS.md` for migration guidance.

exports.handler = async (event) => {
  return {
    statusCode: 410,
    body: JSON.stringify({ error: 'This function has been archived. Migrate to a serverless provider (Vercel/Supabase/etc.).' }),
    headers: { 'Content-Type': 'application/json' }
  };
};
