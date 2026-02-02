# Primary School Quiz - Setup Guide

## Overview
This is an interactive quiz application for primary school students with the following features:
- User management with persistent storage (local + remote)
- Multiple subjects and year levels
- Quiz progress tracking and scoring
- History of quiz results
- Remote data backup using Netlify Blobs

## Features
✅ **Local Storage**: User data and quiz results are saved locally (browser localStorage)  
✅ **Remote Sync**: Data automatically syncs to Netlify Functions when online  
✅ **Offline Support**: Works offline with localStorage fallback  
✅ **Better Color Contrast**: Enhanced visibility for grade displays  

## Deployment Instructions

### Prerequisites
- Node.js 14+ installed
- Git account
- Netlify account (free tier is fine)

### Steps to Deploy

#### 1. Prepare the Repository
```bash
cd /Users/mike/Documents/Code/Quiz
git init
git add .
git commit -m "Initial commit"
```

#### 2. Create a Git Repository on GitHub
1. Go to https://github.com/new
2. Create a new repository (e.g., `primary-school-quiz`)
3. Follow the instructions to push your local repo

#### 3. Deploy to Netlify
**Option A: Using Netlify CLI (Recommended)**
```bash
npm install -g netlify-cli
netlify login
netlify deploy --prod
```

**Option B: Using Netlify Web UI**
1. Go to https://netlify.com
2. Click "Add new site" → "Import an existing project"
3. Connect your GitHub repository
4. Configure build settings:
   - Build command: (leave empty)
   - Publish directory: `.`
5. Click "Deploy site"

### Configuration

#### Enable Netlify Blobs (for remote storage)
1. Go to your Netlify site dashboard
2. Click "Site settings" → "Functions"
3. Ensure Functions are enabled
4. The Netlify Blobs setup is automatic (no additional configuration needed)

#### Update netlify.toml (if needed)
The `netlify.toml` file is already configured to:
- Serve the current directory as the publish folder
- Set proper CORS headers for JSON files
- Enable security headers

### Environment Variables (Optional)
If you want to customize the application, you can set environment variables in Netlify:
1. Go to Site settings → Build & deploy → Environment
2. Add any custom variables needed

## Usage

### For Teachers/Administrators
1. Open the application in your browser
2. Click "Add User" to create student profiles (Year 3 or Year 6)
3. Select a student from the dropdown
4. View their quiz history by clicking "View History"

### For Students
1. Select your name from the dropdown (or ask teacher to add you)
2. Choose a subject (Maths, English, Science)
3. Select your year level
4. Answer the quiz questions
5. View your results and explanations

### Remote Data Sync
- User data and quiz results automatically sync to Netlify Blobs when online
- If offline, data saves locally and syncs when connection returns
- Check browser console for sync status messages

## File Structure
```
Quiz/
├── index.html                 # Main application
├── Quiz.css                   # Styling (updated colors for better contrast)
├── questions.json             # Quiz questions database
├── netlify.toml              # Netlify configuration
├── _headers                  # Custom HTTP headers
└── netlify/functions/         # Serverless functions
    ├── saveUser.js           # Save user data to remote
    ├── saveQuizResult.js     # Save quiz results to remote
    └── getUserResults.js     # Retrieve user results
```

## Recent Updates

### Color Contrast Improvements
- Changed percentage text color to bright gold (#FFD700)
- Changed correct answer indicators to bright green (#00FF00)
- Changed incorrect answer indicators to bright red (#FF0000)
- Added text shadows for better readability
- Increased background opacity for better contrast

### Remote Storage Implementation
- Added Netlify Functions for saving user data
- Added Netlify Functions for saving quiz results
- Integrated automatic syncing from the web interface
- Maintained local storage fallback for offline support

## Troubleshooting

### Functions Not Working
- Check browser console for error messages (F12 → Console tab)
- Verify Netlify Functions are deployed: Check site dashboard → Functions
- Ensure `netlify.toml` is in the root directory

### Data Not Syncing
- Check internet connection
- Open browser developer tools (F12) to see network requests
- Check console for error messages
- Local data is still saved even if remote sync fails

### Questions.json Not Loading
- Verify file is in root directory of Netlify deployment
- Check `netlify.toml` header configuration
- Clear browser cache and reload

## Support
For issues with:
- **Netlify Deployment**: https://docs.netlify.com
- **Netlify Functions**: https://docs.netlify.com/functions/overview
- **Netlify Blobs**: https://docs.netlify.com/blobs/overview

## License
Free to use for educational purposes.
