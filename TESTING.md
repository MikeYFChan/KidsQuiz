# Testing Checklist

## Before Deployment

### ✅ Local Testing (No Deployment Needed)

- [ ] Open `index.html` in a web browser
- [ ] **Add Users**
  - [ ] Click "Add User" button
  - [ ] Enter a name and select a year level
  - [ ] Click "Save User"
  - [ ] Verify user appears in the user dropdown
  - [ ] Add at least 2 users (app requires minimum 2)

- [ ] **Check Color Improvements**
  - [ ] Start a quiz
  - [ ] Complete all questions
  - [ ] View results page
  - [ ] Verify percentage text is **bright gold** and easy to read
  - [ ] Verify "✓ Correct" badges are **bright green** and clear
  - [ ] Verify "✗ Incorrect" badges are **bright red** and visible
  - [ ] Scroll through all questions to check contrast

- [ ] **Test Quiz Functionality**
  - [ ] Select Maths → Year 3
  - [ ] Answer all questions (try both correct and wrong answers)
  - [ ] Click "Finish Quiz"
  - [ ] View results with explanations

- [ ] **Test User Management**
  - [ ] Select different users from dropdown
  - [ ] Click "View History"
  - [ ] Verify quiz results appear
  - [ ] Complete another quiz with same user
  - [ ] Verify new result appears in history
  - [ ] Verify history is in reverse chronological order (newest first)

- [ ] **Test Offline Mode**
  - [ ] Open browser DevTools (F12)
  - [ ] Go to Network tab
  - [ ] Check "Offline" checkbox
  - [ ] Reload page
  - [ ] Add a user
  - [ ] Verify user is saved (check in localStorage if needed)
  - [ ] Complete a quiz
  - [ ] Verify results are saved locally
  - [ ] Uncheck "Offline"
  - [ ] Refresh page
  - [ ] Verify data persists

---

## After Deployment to Netlify

### ✅ Remote Storage Testing

- [ ] **Deploy to Netlify**
  - [ ] Push code to GitHub
  - [ ] Deploy via Netlify CLI or web UI
  - [ ] Verify site is live and accessible

- [ ] **Test Color Improvements (Remote)**
  - [ ] Open deployed site in browser
  - [ ] Take a quiz
  - [ ] Verify colors are bright and readable
  - [ ] Test on mobile device (tablet/phone)
  - [ ] Check colors on different screen sizes

- [ ] **Test Remote Storage**
  - [ ] Add a new user via deployed site
  - [ ] Check browser console (F12 → Console)
  - [ ] Look for "User saved to remote successfully" message
  - [ ] Complete a quiz
  - [ ] Check for "Quiz result saved to remote successfully" message
  - [ ] Open Netlify dashboard
  - [ ] Check Functions logs (optional)

- [ ] **Test Sync Verification**
  - [ ] Add user "TestUser1"
  - [ ] Complete a quiz with 8/10 score
  - [ ] Open DevTools Console
  - [ ] Verify fetch calls to `/.netlify/functions/saveUser`
  - [ ] Verify fetch calls to `/.netlify/functions/saveQuizResult`
  - [ ] Check Network tab for successful responses (200 OK)

- [ ] **Test Multi-Browser Persistence**
  - [ ] Add user and complete quiz on Chrome
  - [ ] Open Firefox (different browser)
  - [ ] User appears in dropdown (localStorage works)
  - [ ] History shows quiz result (local storage persists)

- [ ] **Test Mobile Responsiveness**
  - [ ] Open site on iPhone/Android
  - [ ] Verify text is readable
  - [ ] Verify colors look good
  - [ ] Test all buttons are clickable
  - [ ] Complete quiz on mobile
  - [ ] Verify layout adapts well

---

## Browser Compatibility Testing

Test on these browsers if possible:

- [ ] **Chrome/Edge** (latest version)
- [ ] **Firefox** (latest version)
- [ ] **Safari** (macOS and iOS)
- [ ] **Mobile Safari** (iPad)
- [ ] **Chrome Mobile** (Android)

Expected results:
- ✅ All features working
- ✅ Colors displaying correctly
- ✅ Local storage functioning
- ✅ Remote sync attempted (check console)

---

## Error Handling Testing

- [ ] **Offline Remote Save**
  - [ ] Enable offline mode in DevTools
  - [ ] Take quiz
  - [ ] Check console for "Failed to save to remote" warning
  - [ ] Verify local save still works
  - [ ] Go online
  - [ ] Verify no data loss

- [ ] **Invalid Data**
  - [ ] Try adding user with empty name (should fail)
  - [ ] Try quiz without selecting subject (should prevent)
  - [ ] Try quiz without selecting year (should prevent)

- [ ] **Long Quiz Names**
  - [ ] Add user with very long name (50+ characters)
  - [ ] Verify it saves and displays correctly

---

## Performance Testing

- [ ] **Load Time**
  - [ ] Open site in new tab
  - [ ] Measure time until interactive (DevTools → Performance)
  - [ ] Should be < 2 seconds
  - [ ] Should be < 1 second on Netlify

- [ ] **Quiz Responsiveness**
  - [ ] Complete quiz quickly (click next rapidly)
  - [ ] No lag or freezing
  - [ ] Progress bar updates smoothly
  - [ ] Results appear instantly

- [ ] **Data Sync Speed**
  - [ ] Check Network tab for sync latency
  - [ ] Typically 200-500ms for remote save
  - [ ] Local save is instant

---

## Data Backup Verification

After deploying to Netlify:

- [ ] **Check Netlify Blobs Storage**
  - [ ] Go to Netlify Site Dashboard
  - [ ] Navigate to any section (Blobs should be visible)
  - [ ] Verify data is being stored
  - [ ] (Note: Full UI may not be available in all Netlify tiers)

- [ ] **Verify Data Persistence**
  - [ ] Clear browser cache and cookies
  - [ ] Reload site
  - [ ] Verify users still appear (from Netlify Blobs if available)
  - [ ] Note: This requires user re-fetch implementation (currently one-way sync)

---

## Accessibility Testing

- [ ] **Color Contrast**
  - [ ] Run WCAG contrast checker on results page
  - [ ] Verify AA or AAA level contrast
  - [ ] New colors should meet WCAG standards

- [ ] **Font Readability**
  - [ ] Text is readable on all screen sizes
  - [ ] No text overlapping
  - [ ] Good line spacing

- [ ] **Keyboard Navigation**
  - [ ] Can tab through all buttons
  - [ ] Can submit form with Enter key
  - [ ] Can navigate between questions

---

## Final Sign-Off Checklist

Before considering deployment complete:

- [ ] All local tests passed
- [ ] All remote tests passed
- [ ] Color improvements verified
- [ ] Remote storage working
- [ ] Console shows no critical errors
- [ ] Mobile responsive and functional
- [ ] Data persists across page reloads
- [ ] Offline mode works correctly
- [ ] No data loss in any scenario
- [ ] All quiz questions load correctly
- [ ] User history displays properly
- [ ] Clear history function works
- [ ] User selection dropdown functional

---

## Known Limitations (For Future Development)

- ⚠️ No user authentication (suitable for classroom setting)
- ⚠️ Blob storage doesn't have built-in query (stores one-way)
- ⚠️ No user data export feature
- ⚠️ No admin dashboard for teachers
- ⚠️ No email notifications
- ⚠️ No progress tracking per question type

These could be added in future versions if needed.

---

## Troubleshooting Common Issues

### Issue: Colors not bright enough
- **Solution**: Clear cache (Ctrl+F5), verify CSS changes in Quiz.css

### Issue: Remote sync not working
- **Solution**: Check DevTools Console for errors, ensure Netlify Functions are deployed

### Issue: Users not appearing after browser close
- **Solution**: Check localStorage in DevTools, verify local storage is enabled

### Issue: Mobile display broken
- **Solution**: Check viewport meta tag in HTML, test on actual device

---

**Testing Date**: ________________
**Tester Name**: ________________
**Browser/Device**: ________________
**Result**: ✅ PASS / ❌ FAIL

Comments: _________________________________________________________________

