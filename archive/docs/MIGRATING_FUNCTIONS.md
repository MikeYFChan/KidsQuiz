# Migrating Example Serverless Functions to Vercel (簡明指南)

本檔說明如何把專案中 **範例 serverless 函式**（位於 `archive/functions/`）遷移到 Vercel（或其他提供者）。這會讓您保留遠端備份功能，同時使用 GitHub 來管理代碼並用 GitHub Pages 發佈前端。

## 要點

- 前端：發佈到 GitHub Pages（或任一靜態站點）
- 函式：部署到 Vercel（或其他 serverless 平台）
- 前端設定：在部署環境中設定 `REMOTE_API_BASE` 指向函式的基底 URL，例如 `https://your-vercel.app/api`

## 步驟

1. 建立 Vercel 專案並連結到 GitHub 倉庫。
2. 將範例函式搬到 `api/` 目錄（Vercel 慣用路徑）：
   - `archive/functions/saveUser.js` → `api/saveUser.js`
   - `archive/functions/saveQuizResult.js` → `api/saveQuizResult.js`
   - `archive/functions/getUserResults.js` → `api/getUserResults.js`
3. 修改每個檔案以使用 Vercel 的 handler 格式（保留現有邏輯）：
   - 將 `exports.handler = async (event) => { ... }` 轉為 `export default function handler(req, res) { ... }` 或 `export default async function handler(req, res) { ... }`（取決於語法）
4. 處理依賴與儲存：
   - `@netlify/blobs` 在某些平台上不可用。請選擇替代方案：
     - Vercel KV（鍵值儲存）、Supabase、Firebase、S3 + DynamoDB 等
   - 修改函式內的儲存邏輯以使用新服務的 SDK
5. 設定前端 `REMOTE_API_BASE`：
   - 在部署時，於站台環境變數或直接在網頁中指定 `window.REMOTE_API_BASE`，範例：
     - `window.REMOTE_API_BASE = 'https://your-vercel.app/api'`
6. 測試：
   - 在本地或部署後，確保前端呼叫正確的 URL（例如 `https://your-vercel.app/api/saveUser`）並能正確回應。

## 停用遠端同步（如果您選擇不保留後端）

- 在頁面或部署環境中加入 `window.REMOTE_SYNC_ENABLED = false`。
- 前端會自動僅使用 localStorage 保存使用者與成績，不再嘗試請求遠端函式。

## 範例：把 `saveUser` 改為 Vercel handler

- 範例 (原始)：

  ```js
  exports.handler = async (event) => { ... }
  ```

- Vercel (建議)：
  ```js
  export default async function handler(req, res) {
    if (req.method !== "POST")
      return res.status(405).json({ error: "Method not allowed" });
    // 處理 req.body
    res.status(200).json({ success: true });
  }
  ```

---

如需，我可以幫您：

- 把範例函式自動轉成 Vercel 檔案格式（建立 `api/` 版本）
- 提供範例部署與測試指令
- 或協助把儲存改成 Supabase / S3 等具體目標

請告訴我您想要我接下來幫忙的項目（自動轉檔 / 只更新文件 / 完整部署示範）。
