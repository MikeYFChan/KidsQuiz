# 🎓 KidsQuiz | 小學互動問答

<div align="center">

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![Type](https://img.shields.io/badge/pure-static-orange.svg)

**KidsQuiz** 是一個專為小學生設計的現代化互動問答平台，專注於提升學習趣味性與成效。
**KidsQuiz** is a modern interactive quiz platform designed for primary school students, focusing on making learning engaging and effective.

[🚀 立即開始 Get Started](#🚀-quick-start) • [✨ 功能特色 Features](#✨-features) • [🛠️ 技術棧 Tech Stack](#🛠️-tech-stack)

</div>

---

## ✨ Features / 功能特色

-   **🎯 多科目支援 Multi-Subject Support**: 涵蓋數學 (Maths)、英語 (English) 及科學 (Science)。
-   **👤 年級定制 Grade-Specific**: 專為 Year 3 及 Year 6 學生量身打造的題庫。
-   **📈 進度追蹤 Progress Tracking**: 本地保存答題歷史，直觀呈現學習進度。
-   **📱 響應式設計 Responsive UI**: 採用專業的 Glassmorphism 設計，完美適配所有設備。
-   **🚀 輕量高效 Lightweight**: 純靜態網頁，無需後端，即開即用。

---

## 🚀 Quick Start / 快速開始

### 🌐 直接在 GitHub Pages 訪問
[https://mikeyfchan.github.io/KidsQuiz/](https://mikeyfchan.github.io/KidsQuiz/)

### 💻 本地運行 Local Setup
1.  **Clone 倉庫**: `git clone https://github.com/MikeYFChan/KidsQuiz.git`
2.  **啟動伺服器**:
    -   Python: `python -m http.server 8000`
    -   Node.js: `npx http-server`
3.  **訪問**: 開啟瀏覽器訪問 `http://localhost:8000`

---

## 📂 Project Structure / 項目結構

```text
KidsQuiz/
├── index.html        # 核心結構 Core Structure
├── Quiz.css          # 現代化樣式 Modern Styling (Glassmorphism)
├── questions.json    # 整合題庫 Integrated Questions
├── js/               # 核心邏輯架構 Core Logic
│   ├── app.js        # 管理控制器 Controller
│   ├── quiz.js       # 問答引擎 Quiz Engine
│   └── ...           # 其他模組 Logic Modules
└── ...
```

---

## 🛠️ Tech Stack / 技術棧

-   **Frontend**: HTML5, CSS3 (Modern Glassmorphism), ES6+ JavaScript
-   **Storage**: Browser `localStorage` for data persistence
-   **Deployment**: Optimized for GitHub Pages

---

## 🤝 Contributing / 參與貢獻

我們歡迎任何形式的貢獻！無論是新增題目還是優化代碼。
We welcome all forms of contribution! Whether it's adding questions or optimizing code.

請參閱 [CONTRIBUTING.md](file:///Users/mike/Documents/Code/KidsQuiz/CONTRIBUTING.md) 了解詳細指引。

---

## 📜 License / 許可證

本項目採用 **MIT License**。詳見 [LICENSE](file:///Users/mike/Documents/Code/KidsQuiz/LICENSE) 文件。
This project is licensed under the **MIT License**. See [LICENSE](file:///Users/mike/Documents/Code/KidsQuiz/LICENSE) for details.

---

<div align="center">

**Happy Learning! / 學習愉快！** 🎮

</div>
