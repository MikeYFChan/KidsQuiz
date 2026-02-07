# 🤝 Contributing to KidsQuiz / 參與貢獻

我們歡迎任何形式的貢獻！這份指南將協助您快速開始。
We welcome all forms of contribution! This guide will help you get started quickly.

---

## 📝 Ways to Contribute / 貢獻方式

1.  **新增題目 Add Questions**: 為 `questions.json` 貢獻更多有趣的題目。
2.  **報告問題 Report Issues**: 如果發現 Bug 或題目錯誤，請提交 Issue。
3.  **優化功能 Improve Features**: 提交 Pull Request (PR) 以改善 UI 或核心邏輯。

---

## 📂 Question Format / 題目格式

題目存儲於 `questions.json`。請遵循以下格式：
Questions are stored in `questions.json`. Please follow this format:

```json
{
  "subject": "Maths",
  "year": "Year 3",
  "question": "10 + 5 = ?",
  "answer": "15",
  "choices": ["15", "14", "16", "20"],
  "correctIndex": 0,
  "explanation": "10 + 5 = 15"
}
```

> [!TIP]
> **自動選項產生**: 如果不提供 `choices`，系統會自動根據 `answer` 產生替代選項。

---

## 🚀 Workflow / 開發流程

1.  **Fork & Clone**: 將倉庫 Fork 到您的帳號並 Clone 到本地。
2.  **切換分支 Create Branch**: `git checkout -b feature/new-questions`
3.  **驗證格式 Verify JSON**: 提交前請確保 JSON 格式正確。
    -   `python3 -c "import json; json.load(open('questions.json'))"`
4.  **提交 PR Submit PR**: 將改動 Push 到您的倉庫並發起 PR。

---

## 🎨 Code Style / 代碼規範

-   **HTML/CSS**: 遵循語義化 HTML 與響應式 CSS 規範。
-   **JavaScript**: 使用現代 ES6+ 語法。

---

<div align="center">

**感謝您的付出！Thank you for your contribution!** 🙏

</div>
