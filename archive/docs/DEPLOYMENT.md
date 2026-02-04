# Primary School Quiz - Setup & Deployment

## 概述

此專案為一個互動式的小學測驗應用，支援本地儲存與（選用的）遠端同步。若想要公開站點，建議將靜態前端發佈到 GitHub Pages；如果需要保留伺服器函式（遠端備份），可選擇將函式移至 Vercel 或其他 serverless 提供者。

## 部署快速指南（推薦）

### 1) 發佈前端到 GitHub Pages（推薦）

1. 建立 GitHub 倉庫並推送程式碼
2. 啟用 GitHub Actions：本專案內已包含範例 workflow，推送至 `main` 分支會自動將網站發佈到 GitHub Pages

> 無需建構步驟，發布目錄為專案根目錄。

### 2) 選擇遠端函式（可選）

- 如果需要保留遠端備份（使用者/成績），建議將 `archive/functions/*`（範例函式）的程式碼遷移到 **Vercel Functions**（或 Cloudflare Workers、AWS Lambda）。
- 若您不需要遠端備份，可直接停用遠端同步（詳見下方）並保留純本地功能。

## 關於前端的遠端同步設定

- 本專案已改為可配置：在瀏覽器環境中設定全域 `window.REMOTE_API_BASE`（例如 `https://your-vercel-app.vercel.app/api`）會使遠端請求導向該基底 URL。
- 若想完全停用遠端同步，設定 `window.REMOTE_SYNC_ENABLED = false`。
- 預設行為：遠端同步預設為停用；如需使用，請設置 `REMOTE_API_BASE` 並同時啟用 `window.REMOTE_SYNC_ENABLED = true`。

## 將函式遷移到 Vercel（簡要）

1. 在 Vercel 建立新專案並連結此 GitHub 倉庫
2. 將 `archive/functions/*.js` 中的 handler 程式碼轉為 Vercel Serverless function（放置於 `api/` 目錄）
3. 轉換任何專案內使用的專屬儲存依賴（例如 `@netlify/blobs`）為目標平台支援的儲存類型，例如 Vercel KV、Supabase、或 S3
4. 在前端環境中設定 `REMOTE_API_BASE` 為 Vercel 部署的基底 URL

詳盡遷移步驟請參考 `MIGRATING_FUNCTIONS.md`。

## 停用遠端同步（只用 localStorage）

1. 在部署或頁面設定中加入 `window.REMOTE_SYNC_ENABLED = false` 或把 `REMOTE_API_BASE` 設為空字串
2. 瀏覽器端會自動僅使用 localStorage 儲存使用者與成績

## 檔案結構（重點）

```
Quiz/
├── index.html                 # Main application (static)
├── Quiz.css
├── questions.json
├── .github/workflows/gh-pages.yml  # GitHub Actions workflow
└── archive/functions/ (範例，遷移指南在 MIGRATING_FUNCTIONS.md)
```

## 故障排除

- 前端載入題目失敗：檢查 `questions.json` 是否存在於網站根目錄
- 若使用遠端函式：檢查 `REMOTE_API_BASE` 是否正確，以及該服務是否回應
- 如果發生同步錯誤，資料仍會保存在 localStorage

---

此文件已更新為以 GitHub Pages 為預設部署方式，並提供函式遷移與停用遠端同步的說明。
