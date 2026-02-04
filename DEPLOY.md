# Deploy to GitHub Pages / 部署到 GitHub Pages

本指南將詳細說明如何將 Primary School Quiz 部署到 GitHub Pages，讓你的問答應用程式可以被任何人透過網頁存取。GitHub Pages 是一個由 GitHub 提供的靜態網站托管服務，完全免費且與 GitHub 倉庫無縫集成。無論你是個人開發者還是教育工作者，這份指南都能幫助你輕鬆地將專案上線，讓學生和家長能夠隨時隨地使用這個學習工具。

This guide will explain in detail how to deploy Primary School Quiz to GitHub Pages, allowing your quiz application to be accessed by anyone via the web. GitHub Pages is a static website hosting service provided by GitHub, completely free and seamlessly integrated with GitHub repositories. Whether you're an individual educator or developer, this guide will help you easily launch your project, allowing students and parents to use this learning tool anytime, anywhere.

---

## Table of Contents / 目錄

1. [Overview / 概述](#overview--概述)
2. [Method 1: Main Branch Deploy / 方法一：主分支部署](#method-1-main-branch-deploy--方法一主分支部署)
3. [Method 2: Docs Folder Deploy / 方法二：docs 文件夾部署](#method-2-docs-folder-deploy--方法二docs-文件夾部署)
4. [Custom Domain / 自定義域名](#custom-domain--自定義域名)
5. [Troubleshooting / 常見問題](#troubleshooting--常見問題)
6. [Advanced Options / 高級選項](#advanced-options--高級選項)

---

## Overview / 概述

GitHub Pages 是一個強大且易於使用的靜態網站托管選項，非常適合 Primary School Quiz 這類純前端應用程式。使用 GitHub Pages 的優勢包括：完全免費使用，無需支付任何托管費用；自動部署，每次推送代碼後網站會自動更新；全球 CDN 加速，讓用戶從最近的伺服器獲取內容；免費 SSL 證書，所有網站都會自動獲得 HTTPS 支援；以及與 GitHub 的深度集成，方便版本控制和協作開發。

GitHub Pages is a powerful and easy-to-use static website hosting option, perfect for pure frontend applications like Primary School Quiz. The advantages of using GitHub Pages include: completely free to use with no hosting fees; automatic deployment with automatic site updates after each code push; global CDN acceleration letting users get content from the nearest server; free SSL certificates with automatic HTTPS support for all sites; and deep integration with GitHub for easy version control and collaborative development.

在開始部署之前，請確保你已經完成以下準備工作。首先，你需要一個 GitHub 帳戶，如果還沒有，可以免費註冊。其次，你需要將專案推送到 GitHub 倉庫。最後，確保你的專案包含所有必要的文件，包括 index.html、Quiz.css 和 questions.json。這些準備工作將確保部署過程順利進行。

Before starting deployment, please ensure you have completed the following preparations. First, you need a GitHub account; if you don't have one, you can register for free. Second, you need to push your project to a GitHub repository. Finally, make sure your project includes all necessary files: index.html, Quiz.css, and questions.json. These preparations will ensure a smooth deployment process.

---

## Method 1: Main Branch Deploy / 方法一：主分支部署

這是最簡單的部署方法，適合大多數情況。通過將主分支直接配置為 GitHub Pages 來源，你的網站會在每次推送代碼到 main 分支時自動更新。這種方法特別適合單純的靜態網站專案，如我們的問答應用程式。

This is the simplest deployment method, suitable for most situations. By configuring the main branch directly as the GitHub Pages source, your website will automatically update each time code is pushed to the main branch. This method is especially suitable for pure static website projects like our quiz application.

### Step 1: Create Repository / 步驟一：創建倉庫

如果你還沒有創建 GitHub 倉庫，請按照以下步驟操作。首先，登錄 GitHub 並點擊右上角的「+」按鈕，選擇「New repository」。在創建倉庫頁面中，輸入倉庫名稱（建議使用 KidsQuiz 或類似名稱），選擇「Public」作為倉庫可見性，勾選「Add a README file」選項，最後點擊「Create repository」按鈕完成創建。如果你已經有了本地專案，可以在創建倉庫後按照 GitHub 的指示將本地代碼推送到遠程倉庫。

If you haven't created a GitHub repository yet, please follow these steps. First, log in to GitHub and click the "+" button in the top right corner, then select "New repository". On the create repository page, enter a repository name (KidsQuiz or similar is recommended), select "Public" as the repository visibility, check "Add a README file" option, and finally click "Create repository" to complete creation. If you already have a local project, you can push local code to the remote repository following GitHub's instructions after repository creation.

```bash
# 如果是本地專案，初始化並推送 / If it's a local project, initialize and push
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/KidsQuiz.git
git push -u origin main
```

### Step 2: Enable GitHub Pages / 步驟二：啟用 GitHub Pages

啟用 GitHub Pages 的過程非常簡單，只需幾個步驟即可完成。首先，進入你的 GitHub 倉庫頁面，點擊頂部的「Settings」標籤。在左側的導航欄中，找到並點擊「Pages」選項。在「Build and deployment」部分，將「Source」從「none」更改為「Deploy from a branch」。然後，在「Branch」部分，選擇「main」分支作為來源，並保留「/(root)」作為文件夾路徑。最後，點擊「Save」按鈕，GitHub Pages 就會開始部署你的網站。

Enabling GitHub Pages is very simple and can be completed in just a few steps. First, go to your GitHub repository page and click the "Settings" tab at the top. In the left navigation bar, find and click the "Pages" option. In the "Build and deployment" section, change "Source" from "none" to "Deploy from a branch". Then, in the "Branch" section, select the "main" branch as the source, and keep "/(root)" as the folder path. Finally, click the "Save" button, and GitHub Pages will start deploying your website.

詳細操作步驟如下：進入倉庫頁面後，點擊導航欄中的「Settings」。在 Settings 頁面的左側菜單中，向下滾動找到「Pages」選項並點擊。在「Build and deployment」區域，找到「Branch」下拉菜單，選擇「main」。確認路徑設置為「/(root)」後，點擊「Save」按鈕。系統會提示頁面將在幾分鐘內刷新，屆時你的網站就會上線。

Detailed operation steps are as follows: After entering the repository page, click "Settings" in the navigation bar. On the Settings page, scroll down the left menu to find and click "Pages". In the "Build and deployment" area, find the "Branch" dropdown menu and select "main". After confirming the path is set to "/(root)", click "Save". The system will prompt that the page will refresh in a few minutes, and then your website will be online.

### Step 3: Access Your Website / 步驟三：訪問你的網站

部署完成後，你的網站將可以透過 URL 訪問。頁面頂部會顯示一個綠色的提示框，表明部署成功，同時顯示網站的 URL。這個 URL 的格式為 `https://yourusername.github.io/KidsQuiz/`，其中 `yourusername` 是你的 GitHub 用戶名，`KidsQuiz` 是你的倉庫名稱。請記住這個 URL，你可以將其分享給學生、家長或其他需要使用這個問答應用的人。

After deployment is complete, your website will be accessible via URL. A green prompt box at the top of the page will indicate successful deployment and display the website's URL. This URL follows the format `https://yourusername.github.io/KidsQuiz/`, where `yourusername` is your GitHub username and `KidsQuiz` is your repository name. Please remember this URL; you can share it with students, parents, or anyone who needs to use this quiz application.

部署完成後的等待時間通常在 1 到 2 分鐘之內，但如果遇到高峰時段或複雜的專案結構，可能需要更長的時間。如果部署失敗，GitHub 會在 Pages 設置頁面顯示錯誤信息，幫助你診斷問題。常見的部署失敗原因包括文件路徑錯誤、JSON 格式無效或缺少必要的文件。

The waiting time after deployment completion is usually within 1 to 2 minutes, but if it encounters peak hours or complex project structures, it may take longer. If deployment fails, GitHub will display error messages on the Pages settings page to help you diagnose the problem. Common deployment failure reasons include file path errors, invalid JSON format, or missing necessary files.

---

## Method 2: Docs Folder Deploy / 方法二：docs 文件夾部署

這種方法適合那些希望保持源代碼和部署文件分開的專案。通過將靜態文件放在專門的 docs 文件夾中，你可以將主分支用於開發，而 docs 文件夾專門用於部署。這種方法特別適合需要頻繁更新源代碼但希望保持部署版本穩定的專案。

This method is suitable for projects that want to keep source code and deployed files separate. By placing static files in a dedicated docs folder, you can use the main branch for development while the docs folder is specifically used for deployment. This method is especially suitable for projects that need frequent source code updates but want to keep deployment versions stable.

### Step 1: Create Docs Folder / 步驟一：創建 docs 文件夾

在你的專案根目錄中創建一個名為 `docs` 的文件夾，然後將所有網站文件移動到這個文件夾中。需要移動的文件包括 index.html、Quiz.css、questions.json 以及任何其他與網站相關的文件。確保 docs 文件夾位於專案的根目錄，而不是在其他文件夾內部。

Create a folder named `docs` in your project root directory, then move all website files to this folder. Files that need to be moved include index.html, Quiz.css, questions.json, and any other website-related files. Make sure the docs folder is in the project root directory, not inside another folder.

```bash
# 創建 docs 文件夾並移動文件 / Create docs folder and move files
mkdir docs
cp index.html Quiz.css questions.json docs/
# 如果有子目錄的文件也需要移動 / Move files from subdirectories if any
# cp -r data/* docs/data/
```

### Step 2: Configure GitHub Pages / 步驟二：配置 GitHub Pages

配置過程與方法一類似，但在選擇分支和文件夾時需要進行相應的調整。首先進入倉庫的 Settings 頁面，然後點擊左側的「Pages」選項。在「Build and deployment」部分，將 Source 設置為「Deploy from a branch」，然後選擇「main」分支作為來源。在 Branch 下的路徑選擇中，這次選擇「/(root)」下的「docs」文件夾，而不是「/(root)」。最後點擊「Save」按鈕完成配置。

The configuration process is similar to Method 1, but adjustments need to be made when selecting branch and folder. First, enter the repository's Settings page, then click the "Pages" option on the left. In the "Build and deployment" section, set Source to "Deploy from a branch", then select the "main" branch as the source. In the path selection under Branch, this time select the "docs" folder under "/(root)" instead of "/(root)". Finally, click "Save" to complete the configuration.

### Step 3: Push and Deploy / 步驟三：推送並部署

將改動推送到 GitHub 後，GitHub Pages 會自動從 docs 文件夾部署你的網站。這個過程與方法一類似，但部署的內容將來自 docs 文件夾而不是專案根目錄。

After pushing changes to GitHub, GitHub Pages will automatically deploy your website from the docs folder. This process is similar to Method 1, but the deployed content will come from the docs folder instead of the project root directory.

```bash
# 提交並推送改動 / Commit and push changes
git add docs/
git commit -m "Move files to docs folder for GitHub Pages"
git push origin main
```

### Step 4: Access Your Website / 步驟四：訪問你的網站

部署完成後，你的網站將可以透過相同的 URL 格式訪問。無論你選擇哪種部署方法，訪問 URL 的格式都是一樣的：`https://yourusername.github.io/KidsQuiz/`。如果選擇了 docs 文件夾部署，確保 docs 文件夾中包含所有必要的文件，且文件路徑引用正確。

After deployment is complete, your website will be accessible via the same URL format. Regardless of which deployment method you choose, the access URL format is the same: `https://yourusername.github.io/KidsQuiz/`. If you chose docs folder deployment, make sure the docs folder contains all necessary files and file path references are correct.

---

## Custom Domain / 自定義域名

如果你擁有自定義域名，可以將其配置為指向你的 GitHub Pages 網站。這可以讓你的問答應用程式透過更專業的域名訪問，例如 `quiz.yourschool.edu.hk` 或 `quiz.yourdomain.com`。使用自定義域名不僅看起來更專業，還可以提高用戶的信任感。

If you have a custom domain, you can configure it to point to your GitHub Pages website. This allows your quiz application to be accessed through a more professional domain, such as `quiz.yourschool.edu.hk` or `quiz.yourdomain.com`. Using a custom domain not only looks more professional but also improves user trust.

### Step 1: Configure DNS / 步驟一：配置 DNS

登錄到你的域名註冊商或 DNS 管理控制台，添加以下 DNS 記錄。對於根域名（如 `example.com`），添加 A 記錄指向 GitHub 的 IP 地址：185.199.108.153、185.199.109.153、185.199.110.153、185.199.111.153。對於子域名（如 `quiz.example.com`），添加 CNAME 記錄指向你的 GitHub Pages URL：`yourusername.github.io`。DNS 記錄的更新可能需要 24 到 48 小時才能完全生效。

Log in to your domain registrar or DNS management console and add the following DNS records. For root domains (like `example.com`), add A records pointing to GitHub's IP addresses: 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153. For subdomains (like `quiz.example.com`), add CNAME records pointing to your GitHub Pages URL: `yourusername.github.io`. DNS record updates may take 24 to 48 hours to fully take effect.

```text
# A 記錄（根域名）/ A records (root domain)
@   IN  A   185.199.108.153
@   IN  A   185.199.109.153
@   IN  A   185.199.110.153
@   IN  A   185.199.111.153

# CNAME 記錄（子域名）/ CNAME records (subdomain)
quiz IN  CNAME   yourusername.github.io
```

### Step 2: Add Domain in GitHub / 步驟二：在 GitHub 添加域名

在你的 GitHub 倉庫 Settings 中，找到 Pages 設置，在「Custom domain」輸入框中輸入你的自定義域名，然後點擊「Save」。GitHub 會自動為你的域名配置 SSL 證書（這可能需要一些時間）。確保你的 DNS 記錄已經正確設置並且已經生效，然後再進行這一步操作。

In your GitHub repository Settings, find Pages settings, enter your custom domain in the "Custom domain" input box, and click "Save". GitHub will automatically configure an SSL certificate for your domain (this may take some time). Make sure your DNS records are correctly set and have taken effect before proceeding with this step.

### Step 3: Enforce HTTPS / 步驟三：強制使用 HTTPS

配置完成後，建議勾選「Enforce HTTPS」選項，確保所有訪問者都透過加密連接訪問你的網站。這不僅能夠保護用戶數據的安全性，還能提高搜尋引擎排名。SSL 證書的自動配置通常在保存自定義域名後的幾分鐘內完成，但如果遇到問題，可能需要等待更長時間。

After configuration is complete, it's recommended to check the "Enforce HTTPS" option to ensure all visitors access your website through encrypted connections. This not only protects user data security but also improves search engine ranking. SSL certificate automatic configuration usually completes within minutes after saving the custom domain, but if you encounter issues, you may need to wait longer.

---

## Troubleshooting / 常見問題

### Questions Not Loading / 題目無法載入

**問題症狀 / Symptoms**：打開網站後，題目區域顯示「Loading question...」或無法看到任何題目。

This is a common issue that can occur for several reasons. First, check if the questions.json file exists in the correct location. If you used the main branch deployment method, questions.json must be in the root directory. If you used the docs folder deployment method, questions.json must be inside the docs folder. Second, verify that the JSON format is correct; any syntax errors in questions.json can cause the entire file to fail to load. Third, check the browser's developer console for specific error messages. You can open the console by pressing F12 and selecting the Console tab.

這個問題可能由多種原因引起。首先，檢查 questions.json 文件是否位於正確的位置。如果你使用主分支部署方法，questions.json 必須在根目錄中。如果使用 docs 文件夾部署方法，questions.json 必須在 docs 文件夾內部。其次，驗證 JSON 格式是否正確；questions.json 中的任何語法錯誤都可能導致整個文件無法載入。第三，檢查瀏覽器的開發者控制台以獲取具體的錯誤信息。你可以按 F12 鍵打開控制台，然後選擇 Console 標籤。

**解決方案 / Solutions**：
- 確保 questions.json 文件路徑正確，與 index.html 在同一目錄
- 使用 JSON 驗證工具檢查 questions.json 格式
- 打開瀏覽器開發者工具（F12）查看控制台錯誤信息
- 確保文件上傳到正確的 GitHub 分支

Make sure the questions.json file path is correct and in the same directory as index.html. Use a JSON validation tool to check the questions.json format. Open browser developer tools (F12) to view console error messages. Make sure files are uploaded to the correct GitHub branch.

### CSS Not Loading / CSS 樣式無法載入

**問題症狀 / Symptoms**：網站內容顯示但沒有樣式，界面看起來混亂或沒有任何樣式。

This problem usually occurs when the CSS file path is incorrect or the file wasn't uploaded to the correct location. Since the index.html file references Quiz.css using a relative path, the CSS file must be in the same directory as the HTML file. Another possibility is that GitHub Pages hasn't refreshed after your latest upload, so try clearing the browser cache and refreshing the page.

這個問題通常發生在 CSS 文件路徑不正確或文件沒有上傳到正確位置的情況下。由於 index.html 文件使用相對路徑引用 Quiz.css，所以 CSS 文件必須與 HTML 文件在同一目錄中。另一種可能是 GitHub Pages 沒有在最後一次上傳後刷新，所以請嘗試清除瀏覽器緩存並刷新頁面。

**解決方案 / Solutions**：
- 確認 Quiz.css 與 index.html 在同一目錄
- 檢查 HTML 中的 CSS 引用路徑是否正確
- 嘗試清除瀏覽器緩存後重新整理
- 等待幾分鐘後再次嘗試訪問

Confirm Quiz.css is in the same directory as index.html. Check if the CSS reference path in HTML is correct. Try clearing browser cache and refreshing. Wait a few minutes and try again.

### 404 Error / 404 錯誤

**問題症狀 / Symptoms**：訪問網站時看到「404 - File not found」錯誤頁面。

This error usually means GitHub Pages couldn't find the expected files. First, verify that your repository name doesn't contain uppercase letters or special characters, as GitHub Pages URLs are case-sensitive. Second, check if GitHub Pages is enabled in the repository settings. Third, ensure the branch and folder you selected for deployment contain the correct files. If you just enabled Pages, it may take a few minutes for the site to become available.

這個錯誤通常意味著 GitHub Pages 無法找到預期的文件。首先，驗證你的倉庫名稱不包含大寫字母或特殊字符，因為 GitHub Pages URL 是區分大小寫的。其次，檢查 GitHub Pages 是否在倉庫設置中啟用。第三，確保你選擇用於部署的分支和文件夾包含正確的文件。如果你是剛啟用 Pages，網站可能需要幾分鐘才能訪問。

**解決方案 / Solutions**：
- 確認倉庫名稱不包含大寫字母
- 在 Settings → Pages 中確認 Pages 已啟用
- 檢查部署分支和文件夾選擇是否正確
- 等待幾分鐘後再次嘗試

Confirm repository name doesn't contain uppercase letters. In Settings → Pages, confirm Pages is enabled. Check if deployment branch and folder selection is correct. Wait a few minutes and try again.

### Images or Resources Not Loading / 圖片或資源無法載入

**問題症狀 / Symptoms**：網站可以載入但圖片或其他資源無法顯示。

This problem occurs when resources are referenced using absolute paths or paths that only work in local environments. In questions.json and HTML, make sure all paths are relative. For example, use `data/questions.json` instead of `/data/questions.json`. Also, make sure all resource files are uploaded to the correct location in the repository.

這個問題發生在資源使用絕對路徑或僅在本地環境中可用的路徑時。在 questions.json 和 HTML 中，確保所有路徑都是相對的。例如，使用 `data/questions.json` 而不是 `/data/questions.json`。同時，確保所有資源文件都上傳到倉庫中的正確位置。

**解決方案 / Solutions**：
- 使用相對路徑引用所有資源
- 確認資源文件已上傳到正確位置
- 檢查 GitHub 上的文件結構是否正確

Use relative paths for all resources. Confirm resource files are uploaded to the correct location. Check if the file structure on GitHub is correct.

### JSON Parsing Error / JSON 解析錯誤

**問題症狀 / Symptoms**：控制台顯示「Unexpected token」或「JSON parse error」。

This error indicates that questions.json contains invalid JSON syntax. Common causes include trailing commas, missing quotes around keys or values, or special characters that aren't properly escaped. Use an online JSON validator to check the file format. Common syntax errors include trailing commas after the last item in an array or object, and unescaped special characters in strings like newlines or quotes.

這個錯誤表示 questions.json 包含無效的 JSON 語法。常見原因包括結尾逗號、鍵或值周圍缺少引號，或特殊字符未正確轉義。使用線上 JSON 驗證工具檢查文件格式。常見的語法錯誤包括數組或對象中最後一個項目的結尾逗號，以及字符串中未轉義的特殊字符（如換行符或引號）。

**解決方案 / Solutions**：
- 使用 JSON 驗證工具檢查 questions.json
- 移除結尾逗號
- 確保所有鍵和字符串值都有引號
- 檢查特殊字符是否需要轉義

Use a JSON validator to check questions.json. Remove trailing commas. Ensure all keys and string values have quotes. Check if special characters need escaping.

---

## Advanced Options / 高級選項

### Using Jekyll / 使用 Jekyll

GitHub Pages 內建支援 Jekyll，一個靜態網站生成器。如果你想要使用 Jekyll 來處理你的網站，只需在專案根目錄中添加一個 `_config.yml` 文件即可。Jekyll 可以自動處理 Markdown 文件、生成目錄結構，並提供主題支持。不過，對於 Primary School Quiz 這樣的純 HTML/CSS/JS 專案，使用 Jekyll 是完全可選的，不啟用也不會影響網站的正常運行。

GitHub Pages has built-in Jekyll support, a static website generator. If you want to use Jekyll to process your website, simply add a `_config.yml` file to the project root directory. Jekyll can automatically process Markdown files, generate directory structures, and provide theme support. However, for pure HTML/CSS/JS projects like Primary School Quiz, using Jekyll is completely optional, and not enabling it won't affect normal website operation.

### Automated Updates / 自動更新

如果你希望在使用 GitHub Actions 自動更新題目，可以創建一個 workflow 文件來自動化部署過程。這對於需要定期更新題目庫的專案特別有用。例如，你可以設置一個每天或每週自動從 Google Sheets 或其他數據源同步題目的工作流程。

If you want to automatically update questions using GitHub Actions, you can create a workflow file to automate the deployment process. This is especially useful for projects that need regular updates to their question bank. For example, you can set up a workflow that automatically synchronizes questions from Google Sheets or other data sources daily or weekly.

```yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Deploy
        run: |
          # 部署命令 / Deployment commands
          echo "Deploying to GitHub Pages..."
```

### Branch Protection / 分支保護

為了防止意外刪除或強制推送，建議在主分支上啟用分支保護規則。進入 Settings → Branches → Add rule，選擇「main」作為分支名稱模式，然後啟用「Require pull request before merging」和「Require status checks before merging」選項。這可以確保所有改動都經過審查才能合併到主分支。

To prevent accidental deletion or force pushes, it's recommended to enable branch protection rules on the main branch. Go to Settings → Branches → Add rule, select "main" as the branch name pattern, then enable "Require pull request before merging" and "Require status checks before merging" options. This ensures all changes are reviewed before being merged into the main branch.

---

## Additional Resources / 額外資源

如果你在部署過程中遇到其他問題，可以參考以下資源。GitHub Pages 官方文檔提供了詳細的說明和教程，涵蓋了各種部署場景和故障排除指南。GitHub Community Forum 也是一個很好的資源，你可以從其他開發者那裡獲得幫助和建議。

If you encounter other issues during deployment, you can refer to the following resources. The GitHub Pages official documentation provides detailed instructions and tutorials covering various deployment scenarios and troubleshooting guides. The GitHub Community Forum is also a great resource where you can get help and advice from other developers.

- [GitHub Pages 官方文檔](https://docs.github.com/en/pages)
- [GitHub Pages 故障排除指南](https://docs.github.com/en/pages/getting-started-with-github-pages/troubleshooting-404-errors)
- [GitHub Community Forum](https://github.community/)

---

<div align="center">

**祝部署順利！Happy Deploying！** 🚀

</div>
