# 🚀 Deploy to GitHub Pages / 部署指南

KidsQuiz 是一個純靜態應用，非常適合使用 GitHub Pages 進行免費託管。
KidsQuiz is a pure static app, perfect for free hosting on GitHub Pages.

---

## 🛠️ Step-by-Step / 部署步驟

### 1. 推送到 GitHub
確保您的代碼已推送到 GitHub 倉庫的主分支 (`main`)。

### 2. 啟用 Pages
1.  進入您的 GitHub 倉庫 **Settings**。
2.  點擊左側導航欄的 **Pages**。
3.  在 **Build and deployment > Branch** 下，選擇 `main` 並點擊 **Save**。

### 3. 存取網址
部署完成後（約 1-2 分鐘），您的網址格式為：
`https://<YOUR_USERNAME>.github.io/KidsQuiz/`

---

## 🔍 Troubleshooting / 常見問題

-   **題目無法載入 Questions Not Loading**: 檢查 `questions.json` 是否存在於根目錄且 JSON 格式正確。
-   **404 錯誤**: 確保倉庫名稱與 URL 一致，且 Pages 已成功構建。
-   **樣式混亂**: 清除瀏覽器緩存並確保 `Quiz.css` 路徑正確。

---

## 🌐 Custom Domain / 自定義域名

若要使用自定義域名，請在 **Pages** 設置頁面的 **Custom domain** 欄位輸入您的網址，並根據 GitHub 提供之 IP 配置您的 DNS A 記錄。

---

<div align="center">

**祝部署順利！Happy Deploying！** 🚀

</div>
