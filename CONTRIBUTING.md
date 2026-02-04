# Contributing to Primary School Quiz / 貢獻指南

感謝你有興趣為 Primary School Quiz 做出貢獻！這份指南將幫助你了解如何參與項目貢獻，無論是新增題目、改進功能還是修復問題。每一個貢獻都會讓這個項目變得更好，讓更多小學生能夠從中受益。我們歡迎各種形式的貢獻，包括但不限於新增題目、修正錯誤、改善文檔和優化代碼。

Thank you for being interested in contributing to Primary School Quiz! This guide will help you understand how to participate in project contributions, whether it's adding questions, improving features, or fixing issues. Every contribution makes this project better and benefits more primary school students. We welcome contributions in various forms, including but not limited to adding questions, fixing errors, improving documentation, and optimizing code.

---

## Table of Contents / 目錄

1. [Ways to Contribute / 貢獻方式](#ways-to-contribute--貢獻方式)
2. [Adding Questions / 新增題目](#adding-questions--新增題目)
3. [Question Format / 題目格式](#question-format--題目格式)
4. [Best Practices / 最佳實踐](#best-practices--最佳實踐)
5. [Submission Process / 提交流程](#submission-process--提交流程)
6. [Code Style / 代碼規範](#code-style--代碼規範)

---

## Ways to Contribute / 貢獻方式

### 1. Add New Questions / 新增題目
這是最直接也是最需要的貢獻方式。你可以为现有的科目（Maths、English、Science）添加新的题目，也可以为 Year 3 或 Year 6 添加適合該年級的題目。優質的題目應該能夠幫助學生鞏固所學知識，同時保持學習的趣味性。我們特別歡迎能夠涵蓋不同知識點和難度等級的題目。

This is the most direct and needed way to contribute. You can add new questions for existing subjects (Maths, English, Science), or add questions suitable for Year 3 or Year 6. Quality questions should help students consolidate their knowledge while keeping learning fun. We especially welcome questions that can cover different knowledge points and difficulty levels.

### 2. Report Issues / 報告問題
如果你發現題目有錯誤、網頁有問題或功能不正常，請通過 GitHub Issues 報告。詳細的問題描述和截圖會幫助我們更快地定位和解決問題。我們建議在報告問題時提供足夠的上下文信息，包括使用的瀏覽器、操作系统和問題出現的具體步驟。

If you find questions with errors, webpage issues, or malfunctioning features, please report them through GitHub Issues. Detailed problem descriptions and screenshots will help us locate and solve problems faster. We recommend providing enough context information when reporting issues, including the browser used, operating system, and specific steps where the problem occurred.

### 3. Improve Documentation / 改進文檔
如果你發現文檔有不清楚的地方，或者想要添加新的說明內容，歡迎提交改動。好的文檔可以幫助更多人了解和使用這個項目。我們特別歡迎多語言的文檔改進。

If you find unclear parts in the documentation or want to add new explanatory content, feel free to submit changes. Good documentation helps more people understand and use this project. We especially welcome multilingual documentation improvements.

### 4. Feature Requests / 功能建議
如果你有新的功能想法，歡迎通過 GitHub Issues 提出。我們會認真考慮每一個建議，並根據專案的發展方向決定是否實施。建議的功能應該能夠提升用戶體驗或增加學習價值。

If you have new feature ideas, feel free to propose them through GitHub Issues. We will seriously consider each suggestion and decide whether to implement it based on the project's development direction. Suggested features should enhance user experience or add learning value.

---

## Adding Questions / 新增題目

### Step 1: Locate the Questions File / 步驟一：找到題目文件

題目數據儲存在專案根目錄的 `questions.json` 文件中。在添加新題目之前，請確保你已經下載了最新的題目文件，以避免合併衝突。我們建議在開始編輯之前，先將本地倉庫與遠程倉庫同步，確保你擁有最新的題目庫。

Question data is stored in the `questions.json` file in the project root directory. Before adding new questions, make sure you have downloaded the latest questions file to avoid merge conflicts. We recommend synchronizing your local repository with the remote repository before starting editing to ensure you have the latest question bank.

```bash
# 拉取最新更改 / Pull latest changes
git pull origin main
```

### Step 2: Understand the Structure / 步驟二：了解結構

questions.json 文件採用嵌套的 JSON 結構，按科目（Maths、English、Science）和年級（Year 3、Year 6）組織。每個科目-年級組合下是一個題目數組。我們來看看基本的文件結構：

The questions.json file uses a nested JSON structure, organized by subject (Maths, English, Science) and grade level (Year 3, Year 6). Each subject-grade combination contains an array of questions. Let's look at the basic file structure:

```json
{
  "Maths": {
    "Year 3": [
      {
        "question": "What is 2 + 2?",
        "answer": "4",
        "choices": ["4", "3", "5", "6"],
        "correctIndex": 0,
        "explanation": "2 + 2 = 4"
      }
    ],
    "Year 6": []
  },
  "English": {
    "Year 3": [],
    "Year 6": []
  },
  "Science": {
    "Year 3": [],
    "Year 6": []
  }
}
```

### Step 3: Add Your Question / 步驟三：添加你的題目

根據你要添加的題目類型，將其添加到對應的科目和年級下。你可以直接添加到數組的末尾，或者按題號順序插入到正確位置。我們建議在添加新題目時，保持與現有題目相同的格式和結構，這樣可以確保系統能夠正確解析和顯示新題目。

Depending on the type of question you want to add, add it to the corresponding subject and grade level. You can add it directly to the end of the array or insert it in the correct position according to question numbers. We recommend keeping the same format and structure as existing questions when adding new questions to ensure the system can correctly parse and display new questions.

```json
{
  "subject": "Maths",
  "year": "Year 3",
  "question": "What is 15 + 27?",
  "answer": "42",
  "choices": ["42", "40", "41", "43"],
  "correctIndex": 0,
  "explanation": "15 + 27 = 42"
}
```

### Step 4: Verify the JSON / 步驟四：驗證 JSON 格式

在提交之前，請確保你的 JSON 格式是正確的。你可以使用線上 JSON 驗證工具，或者在命令行中使用 Python 或 Node.js 來驗證。我們強烈建議在提交前進行驗證，因為格式錯誤可能會導致整個應用程式無法正常運行。

Before submitting, make sure your JSON format is correct. You can use online JSON validation tools, or use Python or Node.js on the command line to validate. We strongly recommend validating before submission because format errors may cause the entire application to malfunction.

```bash
# 使用 Python 驗證 / Using Python validation
python3 -c "import json; json.load(open('questions.json')); print('JSON is valid')"

# 使用 Node.js 驗證 / Using Node.js validation
node -e "JSON.parse(require('fs').readFileSync('questions.json')); console.log('JSON is valid')"
```

---

## Question Format / 題目格式

### Complete Format / 完整格式

每條題目都應該包含必要的欄位，以確保系統能夠正確處理和顯示。以下是所有可用的欄位及其說明：

Each question should contain necessary fields to ensure the system can correctly process and display it. Here are all available fields and their descriptions:

```json
{
  "subject": "Maths",
  "year": "Year 3",
  "question": "What is 10 + 5?",
  "answer": "15",
  "choices": ["15", "14", "16", "20"],
  "correctIndex": 0,
  "explanation": "10 + 5 = 15"
}
```

### Minimal Format / 簡化格式

如果你只提供問題、答案和解釋，系統會自動生成合理的選項。自動生成的選項適用於大多數情況，特別是數字類和簡單文字類的答案。然而，對於需要精確選項設計的題目（如同義詞比較），我們建議手動提供選項。

If you only provide the question, answer, and explanation, the system will automatically generate reasonable options. Auto-generated options work for most cases, especially numeric answers and simple text answers. However, for questions requiring precise option design (such as synonym comparisons), we recommend manually providing options.

```json
{
  "question": "What is 10 + 5?",
  "answer": "15",
  "explanation": "10 + 5 = 15"
}
```

### Subject and Year Values / 科目和年級取值

請嚴格使用以下取值，確保系統能夠正確識別和分類題目。科目名稱應該是完整的英文單詞，年級應該包含完整的「Year」字樣。

Please strictly use the following values to ensure the system can correctly identify and categorize questions. Subject names should be complete English words, and grades should include the complete "Year" term.

| 欄位 | 有效值 | 說明 |
|------|--------|------|
| subject | "Maths" | 數學科目 |
| subject | "English" | 英語科目 |
| subject | "Science" | 科學科目 |
| year | "Year 3" | 小學三年級 |
| year | "Year 6" | 小學六年級 |

### Writing Good Questions / 撰寫優質題目

**問題應該清晰明確**：問題的表述應該簡潔明了，避免使用複雜的句子結構或生僻的詞彙。對於小學生來說，問題應該是他們能夠輕鬆理解的。避免使用雙重否定或可能引起歧義的表達方式。問題的核心內容應該放在問題的開頭或重要位置，讓學生能夠快速抓住問題的重點。

**Questions should be clear and specific**: Question wording should be concise and clear, avoiding complex sentence structures or obscure vocabulary. For primary school students, questions should be easy for them to understand. Avoid using double negatives or expressions that may cause ambiguity. The core content of the question should be placed at the beginning or important position of the question, allowing students to quickly grasp the key points of the question.

**答案應該準確無誤**：正確答案必須是無可爭議的事實，不應存在多種解釋的可能性。對於開放式問題，應該提供一個標準答案作為評分依據。我們建議在撰寫題目時，先確定標準答案，然後據此設計問題和選項。答案的表述應該與問題中的上下文一致，避免因表述差異而導致評分誤差。

**Answers should be accurate**: The correct answer must be an indisputable fact without multiple possible interpretations. For open-ended questions, a standard answer should be provided as the scoring basis. We recommend when writing questions, first determine the standard answer, then design the question and options accordingly. The answer's wording should be consistent with the context in the question, avoiding scoring errors due to wording differences.

---

## Best Practices / 最佳實踐

### For Multiple Choice Questions / 選擇題最佳實踐

選擇題的設計對於測驗的有效性至關重要。一個好的選擇題應該能夠準確評估學生的知識水平，同時避免學生通過排除法或猜測來正確作答。以下是設計優質選擇題的一些建議：

The design of multiple-choice questions is crucial to the effectiveness of the assessment. A good multiple-choice question should accurately assess students' knowledge level while preventing students from answering correctly through elimination or guessing. Here are some suggestions for designing quality multiple-choice questions:

**Distractors should be plausible / 干擾項應該合理**：每個干擾項都應該是學生可能會犯的錯誤，而不是明顯錯誤的選項。例如，對於數學題「2 + 2 = ?」，好的干擾項可能包括「3」（加錯）和「1」（減錯），而不是「100」這種明顯錯誤的選項。干擾項應該反映出學生的常見錯誤類型，這樣才能達到測驗的目的。

Each distractor should be an error that students might make, rather than an obviously wrong option. For example, for the math question "2 + 2 = ?", good distractors might include "3" (wrong addition) and "1" (subtraction error), rather than obviously wrong options like "100". Distractors should reflect common error types students make, so the test can achieve its purpose.

**Avoid "all of the above" / 避免「以上皆是」**：對於小學程度的測驗，建議避免使用「以上皆是」或「以上皆非」這類選項。這類選項可能會讓學生通過排除法來作答，降低測驗的有效性。同時，這類選項在小學題目中也較少見，可能會讓學生感到困惑。

For primary school level assessments, it is recommended to avoid options like "all of the above" or "none of the above". Such options may allow students to answer through elimination, reducing the effectiveness of the test. Also, such options are rare in primary school questions and may confuse students.

**Randomize correct answer position / 隨機化正確答案位置**：避免將正確答案總是放在第一個或最後一個位置。正確答案在四個選項中的位置應該是隨機分佈的，這樣可以防止學生通過位置規律來猜測答案。我們的系統在渲染題目時會自動打亂選項順序，但手動設計時也應該注意這一點。

Avoid always placing the correct answer in the first or last position. The correct answer's position among the four options should be randomly distributed to prevent students from guessing answers through position patterns. Our system automatically shuffles option order when rendering questions, but this should also be noted when designing manually.

### For Subject-Specific Guidelines / 科目特定指南

**Maths Questions / 數學題目**：數學題目應該涵蓋該年級的計算技能和概念理解。對於 Year 3，可以包括加减乘除的基本運算、簡單的幾何形狀認識和基本的測量概念。對於 Year 6，可以包括較複雜的四則運算、分數和小數、面積和周長計算，以及簡單的代數概念。所有數學題目都應該提供清晰的計算過程或解釋。

Maths questions should cover calculation skills and conceptual understanding at that grade level. For Year 3, it can include basic operations of addition, subtraction, multiplication, division, simple geometric shape recognition, and basic measurement concepts. For Year 6, it can include more complex four operations, fractions and decimals, area and perimeter calculations, and simple algebraic concepts. All math questions should provide clear calculation processes or explanations.

**English Questions / 英語題目**：英語題目可以涵蓋語法、詞彙、拼寫和閱讀理解等方面。對於語法題目，確保涵蓋該年級的語法要點，如動詞時態、名詞單複數、代詞使用等。對於詞彙題目，選擇適合該年級的詞彙難度。對於拼寫題目，選擇常見的拼寫錯誤作為干擾項。

English questions can cover grammar, vocabulary, spelling, and reading comprehension. For grammar questions, ensure covering grammar points for that grade level, such as verb tenses, noun singular/plural, pronoun usage, etc. For vocabulary questions, choose vocabulary difficulty suitable for that grade level. For spelling questions, choose common spelling errors as distractors.

**Science Questions / 科學題目**：科學題目應該涵蓋基礎的科學概念和現象認識。對於 Year 3，可以包括生物的基本需求、物質的基本狀態、簡單的天氣現象等。對於 Year 6，可以包括人體系統、食物鏈、電路基礎和生態適應等主題。所有科學題目都應該使用適合該年齡段的科學詞彙。

Science questions should cover basic scientific concepts and phenomenon recognition. For Year 3, it can include basic needs of living things, basic states of matter, simple weather phenomena, etc. For Year 6, it can include human body systems, food chains, circuit basics, and ecological adaptations. All science questions should use scientific vocabulary suitable for that age group.

---

## Submission Process / 提交流程

### 1. Create a Branch / 創建分支

在進行任何改動之前，請創建一個新的分支來進行你的修改。這樣可以保持主分支的穩定性，也便於我們審核你的貢獻。分支名稱應該描述你要進行的改動類型，例如「add-maths-year3-questions」或「fix-typo-in-english」。

Before making any changes, please create a new branch to make your modifications. This keeps the main branch stable and makes it easier for us to review your contribution. Branch names should describe the type of change you're making, such as "add-maths-year3-questions" or "fix-typo-in-english".

```bash
# 創建並切換到新分支 / Create and switch to new branch
git checkout -b your-branch-name

# 或者使用 GitHub CLI / Or use GitHub CLI
gh pr checkout -b your-branch-name
```

### 2. Make Your Changes / 進行修改

按照上面的指南添加或修改題目。我們建議在提交前進行充分的測試，確保你的改動不會破壞現有功能。你可以通過在本地瀏覽器中打開 index.html 來測試新題目是否正確顯示和計分。

Add or modify questions according to the guidelines above. We recommend thorough testing before submission to ensure your changes don't break existing functionality. You can test new questions by opening index.html in your local browser to see if questions display and score correctly.

### 3. Commit Your Changes / 提交改動

撰寫清晰明確的提交信息，描述你做了什麼改動。好的提交信息可以幫助其他貢獻者了解專案的發展歷史。我們建議使用英文撰寫提交信息，並遵循傳統的提交格式。

Write clear and specific commit messages describing what changes you made. Good commit messages help other contributors understand the project's development history. We recommend writing commit messages in English and following conventional commit formats.

```bash
# 添加改動的文件 / Add changed files
git add questions.json

# 提交改動 / Commit changes
git commit -m "Add 10 new Year 3 Maths questions

- Cover addition, subtraction, multiplication, division
- Include word problems and basic geometry
- All questions have 4 multiple-choice options"
```

### 4. Push and Create Pull Request / 推送並創建 Pull Request

將你的分支推送到 GitHub，然後創建一個 Pull Request 來請求合併到主分支。我們會盡快審核你的貢獻並給出反饋。

Push your branch to GitHub, then create a Pull Request to request merging into the main branch. We will review your contribution as soon as possible and provide feedback.

```bash
# 推送分支到 GitHub / Push branch to GitHub
git push origin your-branch-name

# 或者使用 GitHub CLI / Or use GitHub CLI
gh pr create --title "Add new Maths questions" --body "Added 10 new Year 3 Maths questions covering..."
```

### 5. Pull Request Template / Pull Request 模板

在創建 Pull Request 時，請提供足夠的信息幫助我們理解你的貢獻。

When creating a Pull Request, please provide enough information to help us understand your contribution.

```markdown
## Description / 描述
[請描述你的改動 / Please describe your changes]

## Type of Contribution / 貢獻類型
- [ ] 新增題目 / Add new questions
- [ ] 修正錯誤 / Fix errors
- [ ] 改進文檔 / Improve documentation
- [ ] 其他 / Other

## Subjects and Grades / 科目和年級
- [ ] Maths - Year 3
- [ ] Maths - Year 6
- [ ] English - Year 3
- [ ] English - Year 6
- [ ] Science - Year 3
- [ ] Science - Year 6

## Testing / 測試
[請描述你如何測試這些改動 / Please describe how you tested these changes]

## Additional Notes / 額外說明
[有任何其他信息想提供嗎？/ Any other information you want to provide?]
```

---

## Code Style / 代碼規範

如果你要貢獻代碼改動（非題目），請遵循以下規範。

If you're contributing code changes (not questions), please follow these guidelines.

### HTML Guidelines / HTML 規範

所有 HTML 文件應該遵循 HTML5 標準。屬性值應該使用雙引號包裹，標籤應該正確嵌套和閉合。建議使用有意義的 class 名稱和 id 名稱，提高代碼的可讀性和可維護性。

All HTML files should follow HTML5 standards. Attribute values should be wrapped in double quotes, tags should be properly nested and closed. It's recommended to use meaningful class names and id names to improve code readability and maintainability.

### CSS Guidelines / CSS 規範

CSS 應該組織良好，使用有意義的類名。建議使用 CSS 自定義屬性（variables）來管理顏色和其他可重用的值。所有樣式應該是響應式的，能夠在不同尺寸的螢幕上正常顯示。

CSS should be well-organized with meaningful class names. It's recommended to use CSS custom properties (variables) for colors and other reusable values. All styles should be responsive and display properly on different screen sizes.

### JavaScript Guidelines / JavaScript 規範

JavaScript 代碼應該使用現代 ES6+ 語法，但應該保持良好的兼容性。建議使用 const 和 let 代替 var，使用箭頭函數和模板字符串。函數和變量應該使用有意義的名稱，並添加適當的注釋說明複雜的邏輯。

JavaScript code should use modern ES6+ syntax but maintain good compatibility. It's recommended to use const and let instead of var, use arrow functions and template strings. Functions and variables should use meaningful names, with appropriate comments explaining complex logic.

---

## Questions? / 有問題？

如果你對貢獻流程有任何疑問，歡迎通過 GitHub Issues 聯繫我們。我們會盡快回覆並提供幫助。

If you have any questions about the contribution process, feel free to contact us through GitHub Issues. We will reply as soon as possible and provide assistance.

---

<div align="center">

**感謝你的貢獻！Thank you for your contribution!** 🙏

</div>
