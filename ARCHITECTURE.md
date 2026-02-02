# Architecture Overview

## Data Flow Diagram

```
┌─────────────────────────────────────────────────────────────┐
│                    Browser (index.html)                      │
│  ┌──────────────────────────────────────────────────────┐   │
│  │  User Interface                                       │   │
│  │  - Quiz Questions                                    │   │
│  │  - User Selection                                    │   │
│  │  - Grade Display (NEW: Bright Colors!)              │   │
│  └──────────────┬───────────────────┬──────────────────┘   │
│                 │                   │                       │
│         On Quiz Complete            │                       │
│                 │                   │                       │
│      ┌──────────▼─────────┐  ┌──────▼────────────┐          │
│      │  Local Storage     │  │  Call Remote API  │          │
│      │  (Immediate)       │  │  (Async)          │          │
│      │  ✓ Users           │  │  (Fails Silently) │          │
│      │  ✓ Quiz Results    │  └───────┬──────────┘          │
│      │  ✓ History         │          │                     │
│      └────────────────────┘          │                     │
│                                      │                     │
└──────────────────────────────────────┼─────────────────────┘
                                       │
                          ┌────────────▼──────────────┐
                          │    Serverless Provider    │
                          │  ┌──────────────────────┐ │
                          │  │  Functions Runtime   │ │
                          │  │  (Node.js / Edge)    │ │
                          │  ├──────────────────────┤ │
                          │  │ ✓ saveUser.js        │ │
                          │  │ ✓ saveQuizResult.js  │ │
                          │  │ ✓ getUserResults.js  │ │
                          │  └──────┬───────────────┘ │
                          │         │                 │
                          │  ┌──────▼──────────────┐ │
                          │  │  Storage Backend    │ │
                          │  │  (Vercel KV / S3 /  │ │
                          │  │   Supabase / etc.)  │ │
                          │  └──────────────────────┘ │
                          └───────────────────────────┘
```

## Component Overview

### Frontend Components

- **Quiz Interface**: Handle quiz questions and user answers
- **Results Display**: Show grades with improved color contrast
- **User Management**: Add/select students
- **History View**: Display past quiz results
- **Remote Sync**: Automatic data synchronization

### Backend (Serverless Functions)

#### saveUser.js

- **Purpose**: Save user profile data
- **Triggered By**: User creation/update
- **Stores To**: `users` (storage backend)
- **Data**: `{ id, name, grade, savedAt }`

#### saveQuizResult.js

- **Purpose**: Save quiz completion record
- **Triggered By**: Quiz finish
- **Stores To**: `quiz-results` (storage backend)
- **Data**: `{ userId, subject, year, correct, total, percentage, date }`

#### getUserResults.js

- **Purpose**: Retrieve user's quiz history
- **Triggered By**: Manual request (not yet used)
- **Returns From**: `quiz-results` (storage backend)

### Storage Architecture

```
Storage Backend (example)
│
├── users Store
│   ├── user_1704067200000
│   │   └── { id, name, grade, savedAt }
│   │
│   ├── user_1704067300000
│   │   └── { id, name, grade, savedAt }
│   │
│   └── user_1704067400000
│       └── { id, name, grade, savedAt }
│
└── quiz-results Store
    ├── 1704067200000_1704067500000
    │   └── { userId, subject, year, correct, total, percentage, date }
    │
    ├── 1704067200000_1704067600000
    │   └── { userId, subject, year, correct, total, percentage, date }
    │
    └── 1704067300000_1704067700000
        └── { userId, subject, year, correct, total, percentage, date }
```

## Data Synchronization Flow

```
User Creates Profile
    │
    ├─► Save to localStorage
    │   (Immediate - 1ms)
    │
    └─► Async: Call saveUser.js
        │
        ├─► Function receives POST request
        │
        ├─► Validates data
        │
        ├─► Saves to storage backend
        │
        └─► Returns success/error
            (Fails gracefully if offline)


Quiz Completed
    │
    ├─► Save to localStorage
    │   (Immediate - 1ms)
    │
    ├─► Update history display
    │
    └─► Async: Call saveQuizResult.js
        │
        ├─► Function receives POST request
        │
        ├─► Validates quiz data
        │
        ├─► Saves to Netlify Blobs
        │
        └─► Returns success/error
            (Fails gracefully if offline)
```

## Offline Support

```
Online Mode:
  Local Storage ────► Storage Backend
      ✓ Fast           ✓ Persistent
      ✓ Immediate      ✓ Backed up

Offline Mode:
  Local Storage ──X──► Storage Backend
      ✓ Works           (Retries on reconnect)
      ✓ Functional

Back Online:
  Local Storage ────► Storage Backend
      ✓ Auto-syncs      ✓ Data restored
      ✓ No data loss
```

## Color Improvements

### Display Enhancement

**Before (Hard to Read):**

```
Percentage: Yellow (#f1c40f) on gradient → Low contrast
Correct: Light Green (#90ee90) on semi-transparent → Blends in
Incorrect: Light Red (#ff6b6b) on semi-transparent → Barely visible
```

**After (Easy to Read):**

```
Percentage: Bright Gold (#FFD700) + shadow on gradient → HIGH contrast
Correct: Bright Green (#00FF00) + shadow on semi-transparent → VERY clear
Incorrect: Bright Red (#FF0000) + shadow on semi-transparent → STANDS OUT
```

## Security Considerations

✓ **Client-Side Data**: All sensitive data stays on user's browser
✓ **Function Security**: Serverless platforms typically provide DDoS protection and platform-level security features
✓ **CORS Configured**: Only necessary cross-origin requests allowed
✓ **No Authentication**: Simple blob storage (suitable for quiz app)
✓ **No Database Injections**: No SQL, NoSQL, or code injection risks

## Performance Characteristics

| Operation                 | Time      | Storage    |
| ------------------------- | --------- | ---------- |
| Save user locally         | <1ms      | ~200 bytes |
| Save quiz result locally  | <5ms      | ~300 bytes |
| Save user remotely        | 200-500ms | Unlimited  |
| Save quiz result remotely | 200-500ms | Unlimited  |
| Sync 100 results          | <10s      | Unlimited  |

## Deployment Architecture

```
GitHub
   │
   ├─► Push code
   │
   └─► GitHub Pages (frontend) & Optional Serverless (functions)
       │
       ├─► Build/Publish
       │   ├─ Publish HTML/CSS/JS to Pages
       │   └─ Deploy Functions to chosen provider (Vercel/Cloudflare/etc.)
       │
       └─► Live Site
           ├─ index.html (served globally via Pages)
           ├─ Functions (available via configured base URL)
           └─ Storage (Vercel KV / S3 / Supabase / etc.)
```

---

This architecture provides:

- ✅ Fast local performance
- ✅ Cloud backup for data persistence
- ✅ Offline capability
- ✅ Automatic synchronization
- ✅ Zero-maintenance backend
- ✅ Excellent user experience
