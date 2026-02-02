# Quick Reference Guide

## What Changed

### 🎨 Color Improvements

Your grades are now much easier to read with brighter colors:

- **Score percentage**: Bright gold (#FFD700) instead of pale yellow
- **Correct answers**: Bright green (#00FF00) instead of light green
- **Incorrect answers**: Bright red (#FF0000) instead of light red
- Added shadows for even better visibility

### ☁️ Remote Storage Added

User data and quiz scores now automatically sync to the cloud:

- User names and grades backup to Netlify
- Quiz results automatically saved to remote
- Still works offline with local storage
- Seamless syncing when back online

---

## Quick Start (Local Testing)

1. Open `index.html` in your browser
2. Add users (Year 3 or Year 6)
3. Select a subject and take a quiz
4. View your results with improved color contrast

---

## Deployment to Netlify

```bash
# 1. Install Netlify CLI
npm install -g netlify-cli

# 2. Login to your Netlify account
netlify login

# 3. Deploy to production
netlify deploy --prod
```

See `DEPLOYMENT.md` for detailed instructions.

---

## Features

✅ **Local Storage**: Works offline, data saved immediately  
✅ **Remote Backup**: Automatic cloud sync when online  
✅ **User Management**: Add students, track their progress  
✅ **Quiz History**: View all past quiz results  
✅ **Better Colors**: Grade colors are now highly visible  
✅ **Mobile Friendly**: Works on tablets and phones

---

## File Structure

```
Quiz/
├── index.html              ← Main app (updated with remote sync)
├── Quiz.css                ← Styles (colors improved)
├── questions.json          ← Quiz questions
├── netlify.toml            ← Netlify config (updated)
├── package.json            ← Dependencies (new)
├── DEPLOYMENT.md           ← Setup guide (new)
├── CHANGES.md              ← What changed (new)
└── netlify/functions/
    ├── saveUser.js         ← Save users to cloud (new)
    ├── saveQuizResult.js   ← Save scores to cloud (new)
    └── getUserResults.js   ← Retrieve scores (new)
```

---

## API Endpoints (After Deployment)

The following APIs are available automatically:

**POST** `/.netlify/functions/saveUser`

- Saves user data to remote
- Called automatically

**POST** `/.netlify/functions/saveQuizResult`

- Saves quiz results to remote
- Called automatically

**GET** `/.netlify/functions/getUserResults`

- Retrieves user quiz history
- Called automatically

No configuration needed - they work out of the box!

---

## Troubleshooting

### Colors still look bad?

- Clear browser cache (Ctrl+F5 or Cmd+Shift+R)
- Check `Quiz.css` for the new color values

### Data not saving to remote?

- Check browser console (F12) for errors
- Verify site is deployed to Netlify
- Local storage still works as fallback

### Questions not loading?

- Ensure `questions.json` is deployed
- Check browser console for fetch errors
- Verify `netlify.toml` is in root directory

---

## Support Resources

- **Netlify Docs**: https://docs.netlify.com
- **Netlify Functions**: https://docs.netlify.com/functions/overview
- **Netlify Blobs**: https://docs.netlify.com/blobs/overview

---

**Last Updated**: January 29, 2026

---

## MCQ Generation and Tests 🔧

We've added an automatic MCQ generator that converts `questions.json` into multiple-choice quizzes (4 choices per question). Files and scripts added:

- `scripts/generate-mcqs.js` — generator entry (supports `--sample=N`, `--overwrite`, `--dry-run`)
- `src/lib/distractors.js` — heuristic distractor functions
- `src/lib/normalizers.js` — number/fraction/decimal normalization helpers
- `data/questions_mcq_sample.json` — sample of generated MCQs (20 items)
- `data/mcq-manual-review.json` — items flagged for manual review
- `tests/*` — Jest tests for generators and output

How to run locally:

1. Install dev dependencies: `npm install`
2. Generate a 20-item sample: `npm run generate-sample` (writes `data/questions_mcq_sample.json`)
3. Generate the full MCQ file (overwrite): `node scripts/generate-mcqs.js --overwrite` or `npm run generate-mcqs -- --overwrite`
4. Run tests: `npm test`

Notes:

- The generator marks list/definition/free-text questions as `needsReview:true` and writes these to `data/mcq-manual-review.json` for manual curation.
- Use the built-in review tool to inspect and correct flagged items: open `tools/mcq-review.html` in your site (Deployed URL: `/tools/mcq-review.html`) or locally via file server to review and download the reviewed JSON.
- The project includes a basic CI workflow (`.github/workflows/ci.yml`) that runs tests and performs basic checks on Netlify functions.
