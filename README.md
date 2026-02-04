# Primary School Quiz / 小學Quiz

---

## About / 關於

Primary School Quiz 是一個專為小學生設計的互動問答遊戲應用程式，支援三個主要科目：數學 (Maths)、英語 (English) 和科學 (Science)。本應用程式專為 Year 3 和 Year 6 的學生量身定制，提供有趣且具教育意義的學習體驗。系統採用純靜態網頁技術，無需任何後端伺服器，可以直接在瀏覽器中運行，也可輕鬆部署到 GitHub Pages。

The Primary School Quiz is an interactive quiz application designed specifically for primary school students. It features three main subjects: Maths, English, and Science. This application is tailored for Year 3 and Year 6 students, providing an engaging and educational learning experience. Built with pure static web technologies, it requires no backend server and can run directly in a browser or be easily deployed to GitHub Pages.

---

## Features / 功能特色

### 🎯 Multi-Subject Support / 多科目支援

本應用程式提供三個核心科目供學生選擇，每個科目都包含豐富的題庫，涵蓋該年級的學習重點。數學科目包括加法、減法、乘法、除法、幾何和計算等題型。英語科目涵蓋語法、詞彙、拼寫和句子結構。科學科目則包括生物、物理和化學的基础知識，讓學生能夠全面學習和鞏固各科知識。

The application offers three core subjects for students to choose from, each containing a rich question bank covering key learning points for that grade level. The Maths subject includes addition, subtraction, multiplication, division, geometry, and calculations. The English subject covers grammar, vocabulary, spelling, and sentence structure. The Science subject includes foundational knowledge of biology, physics, and chemistry.

### 📝 Multiple Choice Questions / 選擇題系統

所有題目都配備了精心設計的選擇題選項，包含一個正確答案和三個干擾項。選擇題的設計考慮到學生的認知水平，確保干擾項具有合理的誤導性，讓學生在回答過程中能夠加深對知識點的理解。系統會自動打亂選項順序，防止學生記住答案位置。

All questions come with carefully designed multiple-choice options, featuring one correct answer and three distractors. The multiple-choice design takes into account students' cognitive level, ensuring distractors have reasonable misleading properties to help students deepen their understanding of the knowledge points while answering. The system automatically shuffles option order to prevent students from memorizing answer positions.

### 👤 User Management / 用戶管理

系統支援多用戶功能，每位學生都可以創建自己的帳戶，輸入姓名和年級資訊。這樣系統能夠為每位用戶獨立保存答題歷史記錄，讓學生和家長可以追蹤學習進度。用戶資料會儲存在本地瀏覽器的 localStorage 中，確保數據隱私和安全。

The system supports multi-user functionality, allowing each student to create their own account with name and grade information. This enables the system to save answer history records independently for each user, allowing students and parents to track learning progress. User data is stored in the browser's localStorage, ensuring data privacy and security.

### 📊 History & Progress Tracking / 歷史記錄與進度追蹤

每次完成測驗後，系統會自動記錄成績並儲存到用戶的歷史記錄中。學生可以隨時查看過去的測驗結果，包括得分百分比、正確題數和完成日期。這項功能讓學生能夠清楚地看到自己的學習進步，激勵他們持續學習和改進。

After each quiz completion, the system automatically records scores and stores them in the user's history. Students can view past quiz results at any time, including score percentage, number of correct answers, and completion date. This feature allows students to clearly see their learning progress, motivating them to continue learning and improving.

### 📱 Responsive Design / 響應式設計

本應用程式採用響應式設計，能夠完美適配不同尺寸的螢幕，包括桌面電腦、平板電腦和智能手機。無論學生使用什麼設備，都能獲得一致且良好的使用體驗。界面設計簡潔直觀，符合小學生的認知特點，讓他們能夠輕鬆導航和操作。

The application uses responsive design that perfectly adapts to different screen sizes, including desktop computers, tablets, and smartphones. Students can enjoy a consistent and excellent user experience regardless of the device they use. The interface design is simple and intuitive, suitable for primary school students' cognitive characteristics, making navigation and operation easy.

### 🚀 No Server Required / 無需伺服器

整個應用程式完全由 HTML、CSS 和 JavaScript 構建，無需任何後端伺服器或資料庫。所有數據都儲存在本地瀏覽器中，或以靜態 JSON 文件的形式存在。這使得部署和維護變得極其簡單，任何人都可以輕鬆地設置和運行這個應用程式。

The entire application is built purely with HTML, CSS, and JavaScript, requiring no backend servers or databases. All data is stored in the local browser or exists as static JSON files. This makes deployment and maintenance extremely simple, and anyone can easily set up and run this application.

---

## How to Use / 如何使用

### Local Testing / 本地測試

**方法一：直接打開文件 / Method 1: Direct File Opening**

```
1. 下載或克隆本倉庫到本地電腦
2. 雙擊 index.html 文件
3. 在瀏覽器中打開即可使用

1. Download or clone this repository to your local computer
2. Double-click the index.html file
3. Open it in your browser to start using
```

**方法二：使用本地伺服器 / Method 2: Using Local Server**

如果你想使用本地伺服器進行更完整的測試，可以按照以下步驟操作。首先，確保你的電腦已安裝 Python 或 Node.js。如果你使用 Python，可以在專案目錄中運行 python -m http.server 8000 命令來啟動一個簡單的 HTTP 伺服器。伺服器啟動後，在瀏覽器中訪問 http://localhost:8000 即可。如果你偏好使用 Node.js，可以安裝 http-server 套件，然後在專案目錄中運行 npx http-server 命令來啟動伺服器。

If you want to use a local server for more complete testing, follow these steps. First, make sure Python or Node.js is installed on your computer. If using Python, you can run python -m http.server 8000 in the project directory to start a simple HTTP server. After the server starts, visit http://localhost:8000 in your browser. If you prefer Node.js, install the http-server package, then run npx http-server in the project directory.

```bash
# Python / Python
python -m http.server 8000

# Node.js / Node.js
npx http-server -p 8000
```

### Quick Start Guide / 快速開始指南

使用本應用程式的流程非常簡單直觀。首先，打開應用程式後，你會看到科目選擇畫面，可以從 Maths（數學）、English（英語）和 Science（科學）三個科目中選擇。然後，選擇你的年級，系統支援 Year 3 和 Year 6 兩種年級。接著，輸入你的名字並選擇年級來創建用戶檔案，這樣系統就能為你保存答題記錄。選擇完成後，系統會隨機抽取 5 條題目讓你作答，每道題目都需要選擇或輸入答案。完成所有題目後，你可以查看成績、答案詳解和歷史記錄。如果想重新測驗，可以點擊「Take Quiz Again」按鈕；如果你想選擇不同的科目或年級，可以點擊「Choose New Quiz」。

Using this application is very simple and intuitive. First, after opening the application, you will see the subject selection screen where you can choose from Maths, English, and Science. Then, select your grade level - the system supports Year 3 and Year 6. Next, enter your name and select your grade to create a user profile so the system can save your answer records. After selection, the system will randomly select 5 questions for you to answer. After completing all questions, you can view your score, answer explanations, and history. If you want to retake the quiz, click "Take Quiz Again"; if you want to choose a different subject or grade, click "Choose New Quiz".

---

## Project Structure / 項目結構

```
KidsQuiz/
├── index.html          # 主頁面 / Main HTML page
├── Quiz.css            # 樣式文件 / Stylesheet
├── questions.json      # 題目數據庫 / Question database
├── README.md           # 說明文件 / This file
├── CONTRIBUTING.md     # 貢獻指南 / Contributing guide
├── DEPLOY.md          # 部署教學 / Deployment guide
└── data/              # 數據文件夾 / Data folder (optional)
```

---

## Question Format / 題目格式

每條題目都應該按照以下 JSON 格式編寫，確保系統能夠正確解析和顯示。所有題目都包含問題內容、正确答案、選項列表、正確答案索引、解釋說明，以及可選的元數據。subject 欄位用於指定科目，可選值為 Maths、English 或 Science。year 欄位用於指定年級，可選值為 Year 3 或 Year 6。

Each question should be written in the following JSON format to ensure the system can correctly parse and display it. All questions include question content, correct answer, option list, correct answer index, explanation, and optional metadata. The subject field is used to specify the subject, with optional values of Maths, English, or Science. The year field is used to specify the grade level, with optional values of Year 3 or Year 6.

### Standard Format / 標準格式

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

### Without Choices (Auto-generated) / 無選項格式（自動生成）

如果你不想手動編寫選項，系統會根據答案類型自動生成合理的干擾項。對於數字類答案，系統會生成鄰近的數字；對於文字類答案，系統會生成常見的錯誤拼寫或變形。這種方式可以大大減少手動編寫題目的工作量，同時確保選項的質量。

If you don't want to manually write options, the system will automatically generate reasonable distractors based on the answer type. For numeric answers, the system will generate nearby numbers; for text answers, the system will generate common misspellings or variations. This approach can greatly reduce the workload of manually writing questions while ensuring option quality.

```json
{
  "subject": "Maths",
  "year": "Year 3",
  "question": "What is 10 + 5?",
  "answer": "15",
  "explanation": "10 + 5 = 15"
}
```

### Field Descriptions / 欄位說明

| 欄位 Field   | 必須 Required | 類型 Type | 說明 Description                 |
| ------------ | ------------- | --------- | -------------------------------- |
| subject      | ✅            | string    | 科目 (Maths / English / Science) |
| year         | ✅            | string    | 年級 (Year 3 / Year 6)           |
| question     | ✅            | string    | 問題內容                         |
| answer       | ✅            | string    | 正確答案                         |
| choices      | ❌            | array     | 選項列表 (4個選項)               |
| correctIndex | ❌            | number    | 正確答案的索引 (0-3)             |
| explanation  | ✅            | string    | 解釋說明                         |
| needsReview  | ❌            | boolean   | 是否需要人工覆核                 |
| meta         | ❌            | object    | 元數據 (generator 等)            |

---

## Technologies Used / 使用的技術

本應用程式完全使用標準的 Web 技術構建，無需任何外部依賴或框架。這種設計選擇使得應用程式輕量、快速且易於維護。HTML5 用於構建頁面結構，CSS3 用於實現響應式設計和視覺效果，JavaScript (ES6+) 用於處理所有的邏輯功能，包括題目載入、用户交互、成績計算和本地數據儲存。

This application is built entirely using standard Web technologies without any external dependencies or frameworks. This design choice makes the application lightweight, fast, and easy to maintain. HTML5 is used for page structure, CSS3 for responsive design and visual effects, and JavaScript (ES6+) for handling all logic functions including question loading, user interaction, score calculation, and local data storage.

- **HTML5**: 頁面結構 / Page structure
- **CSS3**: 響應式設計、動畫效果 / Responsive design, animations
- **JavaScript (ES6+)**: 業務邏輯 / Business logic
- **localStorage**: 本地數據儲存 / Local data storage
- **JSON**: 題目數據格式 / Question data format

---

## Browser Support / 瀏覽器支援

本應用程式支援所有現代瀏覽器，包括 Google Chrome、Mozilla Firefox、Apple Safari、Microsoft Edge 和 Opera。由於使用了 ES6+ 語法，部分舊版瀏覽器可能不完全支援。建議使用最新版本的瀏覽器以獲得最佳體驗。我們已確保所有核心功能在主流瀏覽器上都能正常運行。

This application supports all modern browsers, including Google Chrome, Mozilla Firefox, Apple Safari, Microsoft Edge, and Opera. Since ES6+ syntax is used, some older browsers may not fully support it. It is recommended to use the latest version of browsers for the best experience. We have ensured that all core functions work properly on mainstream browsers.

| Browser | Status             |
| ------- | ------------------ |
| Chrome  | ✅ Full Support    |
| Firefox | ✅ Full Support    |
| Safari  | ✅ Full Support    |
| Edge    | ✅ Full Support    |
| IE 11   | ⚠️ Limited Support |

---

## Contributing / 貢獻

我們歡迎社區成員貢獻題目、改進功能和修復問題。請參閱 CONTRIBUTING.md 文件了解如何參與貢獻。您的每一個貢獻都會幫助這個項目變得更好，讓更多小學生能夠從中受益。無論是新增題目、修正錯誤還是改進文檔，我們都感激您的付出。

We welcome community members to contribute questions, improve features, and fix issues. Please refer to CONTRIBUTING.md to learn how to contribute. Every contribution helps make this project better and benefits more primary school students. Whether it's adding questions, fixing errors, or improving documentation, we appreciate your efforts.

---

## License / 許可證

本項目採用 MIT 許可證，允許免費使用、複製、修改和分發。如有問題或建議，歡迎提交 Issue 或 Pull Request。

This project is licensed under the MIT License, allowing free use, copying, modification, and distribution. If you have questions or suggestions, feel free to submit an Issue or Pull Request.

---

## Contact / 聯繫方式

如有問題或建議，歡迎通過 GitHub Issues 聯繫我們。我們會盡快回覆您的每一個問題和建議。

If you have questions or suggestions, feel free to contact us through GitHub Issues. We will respond to each of your questions and suggestions as soon as possible.

---

<div align="center">

**Happy Learning! / 學習愉快！** 🎓

</div>
