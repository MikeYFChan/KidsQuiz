const QUESTIONS_DATA = {
  "Maths": {
    "Year 3": [
      {
        "question": "What is 45 + 41?",
        "answer": "86",
        "explanation": "45 + 41 = 86",
        "choices": [
          "85",
          "86",
          "88",
          "87"
        ],
        "correctIndex": 1
      },
      {
        "question": "What is 29 + 45?",
        "answer": "74",
        "explanation": "29 + 45 = 74",
        "choices": [
          "76",
          "74",
          "73",
          "75"
        ],
        "correctIndex": 1
      },
      {
        "question": "What is 40 + 25?",
        "answer": "65",
        "explanation": "40 + 25 = 65",
        "choices": [
          "65",
          "64",
          "66",
          "67"
        ],
        "correctIndex": 0
      },
      {
        "question": "What is 12 + 44?",
        "answer": "56",
        "explanation": "12 + 44 = 56",
        "choices": [
          "58",
          "57",
          "55",
          "56"
        ],
        "correctIndex": 3
      },
      {
        "question": "What is 13 + 17?",
        "answer": "30",
        "explanation": "13 + 17 = 30",
        "choices": [
          "31",
          "32",
          "29",
          "30"
        ],
        "correctIndex": 3
      },
      {
        "question": "What is 18 + 26?",
        "answer": "44",
        "explanation": "18 + 26 = 44",
        "choices": [
          "44",
          "46",
          "43",
          "45"
        ],
        "correctIndex": 0
      },
      {
        "question": "What is 17 + 33?",
        "answer": "50",
        "explanation": "17 + 33 = 50",
        "choices": [
          "49",
          "50",
          "51",
          "52"
        ],
        "correctIndex": 1
      },
      {
        "question": "What is 17 + 40?",
        "answer": "57",
        "explanation": "17 + 40 = 57",
        "choices": [
          "57",
          "56",
          "58",
          "59"
        ],
        "correctIndex": 0
      },
      {
        "question": "What is 100 - 18?",
        "answer": "82",
        "explanation": "100 - 18 = 82",
        "choices": [
          "83",
          "81",
          "84",
          "82"
        ],
        "correctIndex": 3
      },
      {
        "question": "What is 90 - 18?",
        "answer": "72",
        "explanation": "90 - 18 = 72",
        "choices": [
          "71",
          "74",
          "73",
          "72"
        ],
        "correctIndex": 3
      },
      {
        "question": "What is 70 - 28?",
        "answer": "42",
        "explanation": "70 - 28 = 42",
        "choices": [
          "43",
          "42",
          "44",
          "41"
        ],
        "correctIndex": 1
      },
      {
        "question": "What is 86 - 40?",
        "answer": "46",
        "explanation": "86 - 40 = 46",
        "choices": [
          "46",
          "45",
          "48",
          "47"
        ],
        "correctIndex": 0
      },
      {
        "question": "What is 86 - 30?",
        "answer": "56",
        "explanation": "86 - 30 = 56",
        "choices": [
          "55",
          "56",
          "58",
          "57"
        ],
        "correctIndex": 1
      },
      {
        "question": "What is 71 - 35?",
        "answer": "36",
        "explanation": "71 - 35 = 36",
        "choices": [
          "37",
          "35",
          "38",
          "36"
        ],
        "correctIndex": 3
      },
      {
        "question": "What is 98 - 27?",
        "answer": "71",
        "explanation": "98 - 27 = 71",
        "choices": [
          "73",
          "71",
          "70",
          "72"
        ],
        "correctIndex": 1
      },
      {
        "question": "What is 68 - 27?",
        "answer": "41",
        "explanation": "68 - 27 = 41",
        "choices": [
          "41",
          "40",
          "42",
          "43"
        ],
        "correctIndex": 0
      },
      {
        "question": "What is 7 × 6?",
        "answer": "42",
        "explanation": "7 × 6 = 42",
        "choices": [
          "43",
          "42",
          "44",
          "41"
        ],
        "correctIndex": 1
      },
      {
        "question": "What is 6 × 9?",
        "answer": "54",
        "explanation": "6 × 9 = 54",
        "choices": [
          "55",
          "56",
          "54",
          "53"
        ],
        "correctIndex": 2
      },
      {
        "question": "What is 9 × 8?",
        "answer": "72",
        "explanation": "9 × 8 = 72",
        "choices": [
          "71",
          "74",
          "72",
          "73"
        ],
        "correctIndex": 2
      },
      {
        "question": "What is 4 × 9?",
        "answer": "36",
        "explanation": "4 × 9 = 36",
        "choices": [
          "37",
          "35",
          "36",
          "38"
        ],
        "correctIndex": 2
      },
      {
        "question": "What is 12 × 9?",
        "answer": "108",
        "explanation": "12 × 9 = 108",
        "choices": [
          "108",
          "109",
          "110",
          "107"
        ],
        "correctIndex": 0
      },
      {
        "question": "What is 6 × 4?",
        "answer": "24",
        "explanation": "6 × 4 = 24",
        "choices": [
          "23",
          "25",
          "26",
          "24"
        ],
        "correctIndex": 3
      },
      {
        "question": "What is 2 × 3?",
        "answer": "6",
        "explanation": "2 × 3 = 6",
        "choices": [
          "8",
          "7",
          "6",
          "5"
        ],
        "correctIndex": 2
      },
      {
        "question": "What is 70 ÷ 10?",
        "answer": "7",
        "explanation": "70 ÷ 10 = 7",
        "choices": [
          "9",
          "8",
          "6",
          "7"
        ],
        "correctIndex": 3
      },
      {
        "question": "What is 36 ÷ 9?",
        "answer": "4",
        "explanation": "36 ÷ 9 = 4",
        "choices": [
          "5",
          "6",
          "4",
          "3"
        ],
        "correctIndex": 2
      },
      {
        "question": "What is 80 ÷ 10?",
        "answer": "8",
        "explanation": "80 ÷ 10 = 8",
        "choices": [
          "7",
          "10",
          "8",
          "9"
        ],
        "correctIndex": 2
      },
      {
        "question": "What is 77 ÷ 7?",
        "answer": "11",
        "explanation": "77 ÷ 7 = 11",
        "choices": [
          "11",
          "13",
          "10",
          "12"
        ],
        "correctIndex": 0
      },
      {
        "question": "What is 9 ÷ 3?",
        "answer": "3",
        "explanation": "9 ÷ 3 = 3",
        "choices": [
          "5",
          "4",
          "3",
          "2"
        ],
        "correctIndex": 2
      },
      {
        "question": "What is 20 ÷ 10?",
        "answer": "2",
        "explanation": "20 ÷ 10 = 2",
        "choices": [
          "4",
          "3",
          "2",
          "1"
        ],
        "correctIndex": 2
      },
      {
        "question": "What is 64 ÷ 8?",
        "answer": "8",
        "explanation": "64 ÷ 8 = 8",
        "choices": [
          "7",
          "10",
          "8",
          "9"
        ],
        "correctIndex": 2
      },
      {
        "question": "What is 22 + 33?",
        "answer": "55",
        "explanation": "The answer is 55.",
        "choices": [
          "57",
          "50",
          "65",
          "55"
        ],
        "correctIndex": 3
      },
      {
        "question": "What is 19 + 26?",
        "answer": "45",
        "explanation": "The answer is 45.",
        "choices": [
          "55",
          "45",
          "41",
          "48"
        ],
        "correctIndex": 1
      },
      {
        "question": "What is 39 + 37?",
        "answer": "76",
        "explanation": "The answer is 76.",
        "choices": [
          "86",
          "74",
          "81",
          "76"
        ],
        "correctIndex": 3
      },
      {
        "question": "What is 56 ÷ 7?",
        "answer": "8",
        "explanation": "The answer is 8.",
        "choices": [
          "18",
          "7",
          "8",
          "13"
        ],
        "correctIndex": 2
      },
      {
        "question": "What is 33 - 20?",
        "answer": "13",
        "explanation": "The answer is 13.",
        "choices": [
          "9",
          "17",
          "23",
          "13"
        ],
        "correctIndex": 3
      },
      {
        "question": "What is 18 ÷ 6?",
        "answer": "3",
        "explanation": "The answer is 3.",
        "choices": [
          "7",
          "13",
          "-1",
          "3"
        ],
        "correctIndex": 3
      },
      {
        "question": "What is 10 × 4?",
        "answer": "40",
        "explanation": "The answer is 40.",
        "choices": [
          "50",
          "37",
          "42",
          "40"
        ],
        "correctIndex": 3
      },
      {
        "question": "What is 16 + 23?",
        "answer": "39",
        "explanation": "The answer is 39.",
        "choices": [
          "49",
          "38",
          "39",
          "43"
        ],
        "correctIndex": 2
      },
      {
        "question": "What is 5 × 10?",
        "answer": "50",
        "explanation": "The answer is 50.",
        "choices": [
          "55",
          "50",
          "60",
          "46"
        ],
        "correctIndex": 1
      },
      {
        "question": "What is 42 + 49?",
        "answer": "91",
        "explanation": "The answer is 91.",
        "choices": [
          "91",
          "101",
          "90",
          "92"
        ],
        "correctIndex": 0
      },
      {
        "question": "What is 17 + 25?",
        "answer": "42",
        "explanation": "The answer is 42.",
        "choices": [
          "41",
          "52",
          "42",
          "44"
        ],
        "correctIndex": 2
      },
      {
        "question": "What is 33 ÷ 3?",
        "answer": "11",
        "explanation": "The answer is 11.",
        "choices": [
          "10",
          "14",
          "21",
          "11"
        ],
        "correctIndex": 3
      },
      {
        "question": "What is 10 × 12?",
        "answer": "120",
        "explanation": "The answer is 120.",
        "choices": [
          "130",
          "120",
          "122",
          "116"
        ],
        "correctIndex": 1
      },
      {
        "question": "What is 34 + 20?",
        "answer": "54",
        "explanation": "The answer is 54.",
        "choices": [
          "54",
          "55",
          "51",
          "64"
        ],
        "correctIndex": 0
      },
      {
        "question": "What is 4 × 12?",
        "answer": "48",
        "explanation": "The answer is 48.",
        "choices": [
          "53",
          "58",
          "48",
          "45"
        ],
        "correctIndex": 2
      },
      {
        "question": "What is 42 + 37?",
        "answer": "79",
        "explanation": "The answer is 79.",
        "choices": [
          "83",
          "79",
          "77",
          "89"
        ],
        "correctIndex": 1
      },
      {
        "question": "What is 43 + 41?",
        "answer": "84",
        "explanation": "The answer is 84.",
        "choices": [
          "84",
          "94",
          "79",
          "88"
        ],
        "correctIndex": 0
      },
      {
        "question": "What is 11 × 7?",
        "answer": "77",
        "explanation": "The answer is 77.",
        "choices": [
          "78",
          "87",
          "77",
          "76"
        ],
        "correctIndex": 2
      },
      {
        "question": "What is 12 + 26?",
        "answer": "38",
        "explanation": "The answer is 38.",
        "choices": [
          "38",
          "48",
          "35",
          "40"
        ],
        "correctIndex": 0
      },
      {
        "question": "What is 78 - 49?",
        "answer": "29",
        "explanation": "The answer is 29.",
        "choices": [
          "39",
          "30",
          "28",
          "29"
        ],
        "correctIndex": 3
      }
    ],
    "Year 6": [
      {
        "question": "What is 3 + 0.1?",
        "answer": "3.1",
        "explanation": "3 + 0.1 = 3.1",
        "choices": [
          "3.1",
          "B",
          "A",
          "C"
        ],
        "correctIndex": 0
      },
      {
        "question": "What is 9 + 0.3?",
        "answer": "9.3",
        "explanation": "9 + 0.3 = 9.3",
        "choices": [
          "9.3",
          "B",
          "A",
          "C"
        ],
        "correctIndex": 0
      },
      {
        "question": "What is 7 + 0.6?",
        "answer": "7.6",
        "explanation": "7 + 0.6 = 7.6",
        "choices": [
          "7.6",
          "B",
          "A",
          "C"
        ],
        "correctIndex": 0
      },
      {
        "question": "What is 5 + 0.8?",
        "answer": "5.8",
        "explanation": "5 + 0.8 = 5.8",
        "choices": [
          "B",
          "5.8",
          "C",
          "A"
        ],
        "correctIndex": 1
      },
      {
        "question": "What is 9 + 0.4?",
        "answer": "9.4",
        "explanation": "9 + 0.4 = 9.4",
        "choices": [
          "C",
          "9.4",
          "A",
          "B"
        ],
        "correctIndex": 1
      },
      {
        "question": "What is 1 + 0.3?",
        "answer": "1.3",
        "explanation": "1 + 0.3 = 1.3",
        "choices": [
          "B",
          "A",
          "C",
          "1.3"
        ],
        "correctIndex": 3
      },
      {
        "question": "What is 25% of 40?",
        "answer": "10",
        "explanation": "25% means 25/100, so (25/100) × 40 = 10.",
        "choices": [
          "10",
          "12",
          "11",
          "9"
        ],
        "correctIndex": 0
      },
      {
        "question": "What is 50% of 200?",
        "answer": "100",
        "explanation": "50% means 50/100, so (50/100) × 200 = 100.",
        "choices": [
          "102",
          "101",
          "100",
          "99"
        ],
        "correctIndex": 2
      },
      {
        "question": "What is 10% of 60?",
        "answer": "6",
        "explanation": "10% means 10/100, so (10/100) × 60 = 6.",
        "choices": [
          "5",
          "8",
          "6",
          "7"
        ],
        "correctIndex": 2
      },
      {
        "question": "What is 20% of 20?",
        "answer": "4",
        "explanation": "20% means 20/100, so (20/100) × 20 = 4.",
        "choices": [
          "5",
          "3",
          "4",
          "6"
        ],
        "correctIndex": 2
      },
      {
        "question": "What is 10% of 60?",
        "answer": "6",
        "explanation": "10% means 10/100, so (10/100) × 60 = 6.",
        "choices": [
          "8",
          "6",
          "5",
          "7"
        ],
        "correctIndex": 1
      },
      {
        "question": "What is 20% of 20?",
        "answer": "4",
        "explanation": "20% means 20/100, so (20/100) × 20 = 4.",
        "choices": [
          "3",
          "4",
          "5",
          "6"
        ],
        "correctIndex": 1
      },
      {
        "question": "If 4x = 16, what is x?",
        "answer": "4",
        "explanation": "Divide both sides by 4: x = 16 ÷ 4 = 4.",
        "choices": [
          "4",
          "6",
          "5",
          "3"
        ],
        "correctIndex": 0
      },
      {
        "question": "If 3x = 18, what is x?",
        "answer": "6",
        "explanation": "Divide both sides by 3: x = 18 ÷ 3 = 6.",
        "choices": [
          "7",
          "6",
          "8",
          "5"
        ],
        "correctIndex": 1
      },
      {
        "question": "If 4x = 24, what is x?",
        "answer": "6",
        "explanation": "Divide both sides by 4: x = 24 ÷ 4 = 6.",
        "choices": [
          "7",
          "5",
          "8",
          "6"
        ],
        "correctIndex": 3
      },
      {
        "question": "If 5x = 20, what is x?",
        "answer": "4",
        "explanation": "Divide both sides by 5: x = 20 ÷ 5 = 4.",
        "choices": [
          "6",
          "4",
          "5",
          "3"
        ],
        "correctIndex": 1
      },
      {
        "question": "If 3x = 30, what is x?",
        "answer": "10",
        "explanation": "Divide both sides by 3: x = 30 ÷ 3 = 10.",
        "choices": [
          "9",
          "11",
          "10",
          "12"
        ],
        "correctIndex": 2
      },
      {
        "question": "If 4x = 32, what is x?",
        "answer": "8",
        "explanation": "Divide both sides by 4: x = 32 ÷ 4 = 8.",
        "choices": [
          "10",
          "7",
          "8",
          "9"
        ],
        "correctIndex": 2
      },
      {
        "question": "What is 23 × 12?",
        "answer": "276",
        "explanation": "Calculate 23 × 12 = 276.",
        "choices": [
          "275",
          "277",
          "278",
          "276"
        ],
        "correctIndex": 3
      },
      {
        "question": "What is 15 × 9?",
        "answer": "135",
        "explanation": "Calculate 15 × 9 = 135.",
        "choices": [
          "135",
          "137",
          "136",
          "134"
        ],
        "correctIndex": 0
      },
      {
        "question": "What is 21 × 10?",
        "answer": "210",
        "explanation": "Calculate 21 × 10 = 210.",
        "choices": [
          "209",
          "212",
          "210",
          "211"
        ],
        "correctIndex": 2
      },
      {
        "question": "What is 16 × 11?",
        "answer": "176",
        "explanation": "Calculate 16 × 11 = 176.",
        "choices": [
          "175",
          "176",
          "178",
          "177"
        ],
        "correctIndex": 1
      },
      {
        "question": "What is 23 × 9?",
        "answer": "207",
        "explanation": "Calculate 23 × 9 = 207.",
        "choices": [
          "207",
          "209",
          "208",
          "206"
        ],
        "correctIndex": 0
      },
      {
        "question": "What is 18 × 8?",
        "answer": "144",
        "explanation": "Calculate 18 × 8 = 144.",
        "choices": [
          "144",
          "143",
          "145",
          "146"
        ],
        "correctIndex": 0
      },
      {
        "question": "What is 4 + 4 × 2?",
        "answer": "12",
        "explanation": "Multiply first: 4 × 2 = 8, then add 4 = 12.",
        "choices": [
          "13",
          "14",
          "11",
          "12"
        ],
        "correctIndex": 3
      },
      {
        "question": "What is 2 + 10 × 5?",
        "answer": "52",
        "explanation": "Multiply first: 10 × 5 = 50, then add 2 = 52.",
        "choices": [
          "54",
          "52",
          "53",
          "51"
        ],
        "correctIndex": 1
      },
      {
        "question": "What is 4 + 10 × 8?",
        "answer": "84",
        "explanation": "Multiply first: 10 × 8 = 80, then add 4 = 84.",
        "choices": [
          "83",
          "85",
          "86",
          "84"
        ],
        "correctIndex": 3
      },
      {
        "question": "What is 7 + 3 × 2?",
        "answer": "13",
        "explanation": "Multiply first: 3 × 2 = 6, then add 7 = 13.",
        "choices": [
          "15",
          "13",
          "14",
          "12"
        ],
        "correctIndex": 1
      },
      {
        "question": "What is 8 + 10 × 10?",
        "answer": "108",
        "explanation": "Multiply first: 10 × 10 = 100, then add 8 = 108.",
        "choices": [
          "108",
          "107",
          "110",
          "109"
        ],
        "correctIndex": 0
      },
      {
        "question": "What is 4 + 10 × 9?",
        "answer": "94",
        "explanation": "Multiply first: 10 × 9 = 90, then add 4 = 94.",
        "choices": [
          "96",
          "95",
          "93",
          "94"
        ],
        "correctIndex": 3
      },
      {
        "question": "What is 8.1 + 2.9?",
        "answer": "11.0",
        "explanation": "Calculation yields 11.0.",
        "choices": [
          "10.9",
          "12.0",
          "11.5",
          "11.0"
        ],
        "correctIndex": 3
      },
      {
        "question": "If 10x + 2 = 82, what is x?",
        "answer": "8",
        "explanation": "Calculation yields 8.",
        "choices": [
          "9",
          "8",
          "7",
          "10"
        ],
        "correctIndex": 1
      },
      {
        "question": "What is 4/8 of 80?",
        "answer": "40",
        "explanation": "Calculation yields 40.",
        "choices": [
          "41",
          "42",
          "40",
          "39"
        ],
        "correctIndex": 2
      },
      {
        "question": "What is 7.9 + 4.6?",
        "answer": "12.5",
        "explanation": "Calculation yields 12.5.",
        "choices": [
          "13.5",
          "13.0",
          "12.5",
          "12.4"
        ],
        "correctIndex": 2
      },
      {
        "question": "What is 5/8 of 80?",
        "answer": "50",
        "explanation": "Calculation yields 50.",
        "choices": [
          "49",
          "50",
          "51",
          "52"
        ],
        "correctIndex": 1
      },
      {
        "question": "What is 2/8 of 80?",
        "answer": "20",
        "explanation": "Calculation yields 20.",
        "choices": [
          "20",
          "19",
          "22",
          "21"
        ],
        "correctIndex": 0
      },
      {
        "question": "What is 3/10 of 100?",
        "answer": "30",
        "explanation": "Calculation yields 30.",
        "choices": [
          "31",
          "30",
          "29",
          "32"
        ],
        "correctIndex": 1
      },
      {
        "question": "If 9x + 6 = 78, what is x?",
        "answer": "8",
        "explanation": "Calculation yields 8.",
        "choices": [
          "9",
          "8",
          "10",
          "7"
        ],
        "correctIndex": 1
      },
      {
        "question": "If 2x + 15 = 23, what is x?",
        "answer": "4",
        "explanation": "Calculation yields 4.",
        "choices": [
          "4",
          "6",
          "3",
          "5"
        ],
        "correctIndex": 0
      },
      {
        "question": "What is 7/6 of 60?",
        "answer": "70",
        "explanation": "Calculation yields 70.",
        "choices": [
          "69",
          "71",
          "72",
          "70"
        ],
        "correctIndex": 3
      },
      {
        "question": "If 4x + 8 = 32, what is x?",
        "answer": "6",
        "explanation": "Calculation yields 6.",
        "choices": [
          "7",
          "6",
          "5",
          "8"
        ],
        "correctIndex": 1
      },
      {
        "question": "If 4x + 15 = 43, what is x?",
        "answer": "7",
        "explanation": "Calculation yields 7.",
        "choices": [
          "7",
          "6",
          "9",
          "8"
        ],
        "correctIndex": 0
      },
      {
        "question": "If 6x + 5 = 47, what is x?",
        "answer": "7",
        "explanation": "Calculation yields 7.",
        "choices": [
          "9",
          "8",
          "6",
          "7"
        ],
        "correctIndex": 3
      },
      {
        "question": "If 3x + 13 = 22, what is x?",
        "answer": "3",
        "explanation": "Calculation yields 3.",
        "choices": [
          "3",
          "5",
          "2",
          "4"
        ],
        "correctIndex": 0
      },
      {
        "question": "What is 3/10 of 100?",
        "answer": "30",
        "explanation": "Calculation yields 30.",
        "choices": [
          "30",
          "29",
          "32",
          "31"
        ],
        "correctIndex": 0
      },
      {
        "question": "If 5x + 20 = 45, what is x?",
        "answer": "5",
        "explanation": "Calculation yields 5.",
        "choices": [
          "7",
          "4",
          "5",
          "6"
        ],
        "correctIndex": 2
      },
      {
        "question": "What is 5/8 of 80?",
        "answer": "50",
        "explanation": "Calculation yields 50.",
        "choices": [
          "52",
          "49",
          "51",
          "50"
        ],
        "correctIndex": 3
      },
      {
        "question": "What is 1.7 + 8.6?",
        "answer": "10.3",
        "explanation": "Calculation yields 10.3.",
        "choices": [
          "10.8",
          "10.3",
          "11.3",
          "10.2"
        ],
        "correctIndex": 1
      },
      {
        "question": "If 3x + 1 = 25, what is x?",
        "answer": "8",
        "explanation": "Calculation yields 8.",
        "choices": [
          "10",
          "8",
          "7",
          "9"
        ],
        "correctIndex": 1
      },
      {
        "question": "What is 3/10 of 100?",
        "answer": "30",
        "explanation": "Calculation yields 30.",
        "choices": [
          "31",
          "30",
          "32",
          "29"
        ],
        "correctIndex": 1
      }
    ]
  },
  "English": {
    "Year 3": [
      {
        "question": "Which word means the same as 'cold'?",
        "answer": "chilly",
        "explanation": "'chilly' is a synonym for 'cold'.",
        "choices": [
          "chillys",
          "None of the above",
          "chilly",
          "The opposite"
        ],
        "correctIndex": 2
      },
      {
        "question": "What is the opposite of 'big'?",
        "answer": "small",
        "explanation": "The opposite of 'big' is 'small'.",
        "choices": [
          "small",
          "None of the above",
          "The opposite",
          "smalls"
        ],
        "correctIndex": 0
      },
      {
        "question": "What is the plural of 'car'?",
        "answer": "cars",
        "explanation": "The plural of 'car' is 'cars'.",
        "choices": [
          "The opposite",
          "cars",
          "carss",
          "None of the above"
        ],
        "correctIndex": 1
      },
      {
        "question": "Which word means the same as 'sad'?",
        "answer": "unhappy",
        "explanation": "'unhappy' is a synonym for 'sad'.",
        "choices": [
          "unhappy",
          "The opposite",
          "unhappys",
          "None of the above"
        ],
        "correctIndex": 0
      },
      {
        "question": "Which word means the same as 'small'?",
        "answer": "tiny",
        "explanation": "'tiny' is a synonym for 'small'.",
        "choices": [
          "tiny",
          "tinys",
          "The opposite",
          "None of the above"
        ],
        "correctIndex": 0
      },
      {
        "question": "Which word means the same as 'happy'?",
        "answer": "glad",
        "explanation": "'glad' is a synonym for 'happy'.",
        "choices": [
          "glad",
          "None of the above",
          "glads",
          "The opposite"
        ],
        "correctIndex": 0
      },
      {
        "question": "What is the opposite of 'happy'?",
        "answer": "sad",
        "explanation": "The opposite of 'happy' is 'sad'.",
        "choices": [
          "The opposite",
          "None of the above",
          "sads",
          "sad"
        ],
        "correctIndex": 3
      },
      {
        "question": "Which word means the same as 'hot'?",
        "answer": "warm",
        "explanation": "'warm' is a synonym for 'hot'.",
        "choices": [
          "None of the above",
          "warms",
          "The opposite",
          "warm"
        ],
        "correctIndex": 3
      },
      {
        "question": "Is the word 'big' a noun, verb, or adjective?",
        "answer": "adjective",
        "explanation": "'big' is a describing word, so it's an adjective.",
        "choices": [
          "adjectives",
          "None of the above",
          "adjective",
          "The opposite"
        ],
        "correctIndex": 2
      },
      {
        "question": "Is the word 'dog' a noun, verb, or adjective?",
        "answer": "noun",
        "explanation": "'dog' is a naming word, so it's a noun.",
        "choices": [
          "noun",
          "nouns",
          "None of the above",
          "The opposite"
        ],
        "correctIndex": 0
      },
      {
        "question": "Is the word 'cat' a noun, verb, or adjective?",
        "answer": "noun",
        "explanation": "'cat' is a naming word, so it's a noun.",
        "choices": [
          "The opposite",
          "noun",
          "None of the above",
          "nouns"
        ],
        "correctIndex": 1
      },
      {
        "question": "What is the plural of 'house'?",
        "answer": "houses",
        "explanation": "The plural of 'house' is 'houses'.",
        "choices": [
          "None of the above",
          "houses",
          "The opposite",
          "housess"
        ],
        "correctIndex": 1
      },
      {
        "question": "What is the plural of 'baby'?",
        "answer": "babies",
        "explanation": "The plural of 'baby' is 'babies'.",
        "choices": [
          "babies",
          "The opposite",
          "None of the above",
          "babiess"
        ],
        "correctIndex": 0
      },
      {
        "question": "Is the word 'tree' a noun, verb, or adjective?",
        "answer": "noun",
        "explanation": "'tree' is a naming word, so it's a noun.",
        "choices": [
          "The opposite",
          "None of the above",
          "noun",
          "nouns"
        ],
        "correctIndex": 2
      },
      {
        "question": "Is the word 'run' a noun, verb, or adjective?",
        "answer": "verb",
        "explanation": "'run' is an action word, so it's a verb.",
        "choices": [
          "The opposite",
          "None of the above",
          "verbs",
          "verb"
        ],
        "correctIndex": 3
      },
      {
        "question": "What is the plural of 'leaf'?",
        "answer": "leaves",
        "explanation": "The plural of 'leaf' is 'leaves'.",
        "choices": [
          "None of the above",
          "The opposite",
          "leavess",
          "leaves"
        ],
        "correctIndex": 3
      },
      {
        "question": "Is the word 'sad' a noun, verb, or adjective?",
        "answer": "adjective",
        "explanation": "'sad' is a describing word, so it's an adjective.",
        "choices": [
          "The opposite",
          "adjective",
          "None of the above",
          "adjectives"
        ],
        "correctIndex": 1
      },
      {
        "question": "Is the word 'happy' a noun, verb, or adjective?",
        "answer": "adjective",
        "explanation": "'happy' is a describing word, so it's an adjective.",
        "choices": [
          "adjectives",
          "The opposite",
          "None of the above",
          "adjective"
        ],
        "correctIndex": 3
      },
      {
        "question": "What is the opposite of 'fast'?",
        "answer": "slow",
        "explanation": "The opposite of 'fast' is 'slow'.",
        "choices": [
          "The opposite",
          "None of the above",
          "slow",
          "slows"
        ],
        "correctIndex": 2
      },
      {
        "question": "Which word means the same as 'big'?",
        "answer": "large",
        "explanation": "'large' is a synonym for 'big'.",
        "choices": [
          "large",
          "larges",
          "None of the above",
          "The opposite"
        ],
        "correctIndex": 0
      },
      {
        "question": "Is the word 'play' a noun, verb, or adjective?",
        "answer": "verb",
        "explanation": "'play' is an action word, so it's a verb.",
        "choices": [
          "The opposite",
          "verb",
          "verbs",
          "None of the above"
        ],
        "correctIndex": 1
      },
      {
        "question": "Which word means the same as 'fast'?",
        "answer": "quick",
        "explanation": "'quick' is a synonym for 'fast'.",
        "choices": [
          "None of the above",
          "quicks",
          "quick",
          "The opposite"
        ],
        "correctIndex": 2
      },
      {
        "question": "What is the opposite of 'day'?",
        "answer": "night",
        "explanation": "The opposite of 'day' is 'night'.",
        "choices": [
          "None of the above",
          "night",
          "The opposite",
          "nights"
        ],
        "correctIndex": 1
      },
      {
        "question": "Is the word 'jump' a noun, verb, or adjective?",
        "answer": "verb",
        "explanation": "'jump' is an action word, so it's a verb.",
        "choices": [
          "None of the above",
          "The opposite",
          "verb",
          "verbs"
        ],
        "correctIndex": 2
      },
      {
        "question": "What is the opposite of 'up'?",
        "answer": "down",
        "explanation": "The opposite of 'up' is 'down'.",
        "choices": [
          "down",
          "downs",
          "None of the above",
          "The opposite"
        ],
        "correctIndex": 0
      },
      {
        "question": "What is the plural of 'tree'?",
        "answer": "trees",
        "explanation": "The plural of 'tree' is 'trees'.",
        "choices": [
          "The opposite",
          "None of the above",
          "treess",
          "trees"
        ],
        "correctIndex": 3
      },
      {
        "question": "What is the plural of 'city'?",
        "answer": "cities",
        "explanation": "The plural of 'city' is 'cities'.",
        "choices": [
          "None of the above",
          "cities",
          "The opposite",
          "citiess"
        ],
        "correctIndex": 1
      },
      {
        "question": "What is the plural of 'cat'?",
        "answer": "cats",
        "explanation": "The plural of 'cat' is 'cats'.",
        "choices": [
          "catss",
          "The opposite",
          "None of the above",
          "cats"
        ],
        "correctIndex": 3
      },
      {
        "question": "What is the plural of 'bus'?",
        "answer": "buses",
        "explanation": "The plural of 'bus' is 'buses'.",
        "choices": [
          "busess",
          "The opposite",
          "None of the above",
          "buses"
        ],
        "correctIndex": 3
      },
      {
        "question": "What is the opposite of 'hot'?",
        "answer": "cold",
        "explanation": "The opposite of 'hot' is 'cold'.",
        "choices": [
          "None of the above",
          "cold",
          "The opposite",
          "colds"
        ],
        "correctIndex": 1
      },
      {
        "question": "Which word is a synonym for 'end'? (Gen 0)",
        "answer": "finish",
        "explanation": "'finish' means the same as 'end'.",
        "choices": [
          "slow",
          "stop",
          "bad",
          "finish"
        ],
        "correctIndex": 3
      },
      {
        "question": "Which word is a synonym for 'easy'? (Gen 1)",
        "answer": "simple",
        "explanation": "'simple' means the same as 'easy'.",
        "choices": [
          "stop",
          "bad",
          "slow",
          "simple"
        ],
        "correctIndex": 3
      },
      {
        "question": "Which word is a synonym for 'start'? (Gen 2)",
        "answer": "begin",
        "explanation": "'begin' means the same as 'start'.",
        "choices": [
          "begin",
          "stop",
          "slow",
          "bad"
        ],
        "correctIndex": 0
      },
      {
        "question": "Which word is a synonym for 'start'? (Gen 3)",
        "answer": "begin",
        "explanation": "'begin' means the same as 'start'.",
        "choices": [
          "begin",
          "slow",
          "stop",
          "bad"
        ],
        "correctIndex": 0
      },
      {
        "question": "Which word is a synonym for 'hard'? (Gen 4)",
        "answer": "difficult",
        "explanation": "'difficult' means the same as 'hard'.",
        "choices": [
          "stop",
          "slow",
          "difficult",
          "bad"
        ],
        "correctIndex": 2
      },
      {
        "question": "Which word is a synonym for 'hard'? (Gen 5)",
        "answer": "difficult",
        "explanation": "'difficult' means the same as 'hard'.",
        "choices": [
          "difficult",
          "stop",
          "bad",
          "slow"
        ],
        "correctIndex": 0
      },
      {
        "question": "Which word is a synonym for 'fast'? (Gen 6)",
        "answer": "quick",
        "explanation": "'quick' means the same as 'fast'.",
        "choices": [
          "bad",
          "slow",
          "quick",
          "stop"
        ],
        "correctIndex": 2
      },
      {
        "question": "Which word is a synonym for 'end'? (Gen 7)",
        "answer": "finish",
        "explanation": "'finish' means the same as 'end'.",
        "choices": [
          "bad",
          "finish",
          "stop",
          "slow"
        ],
        "correctIndex": 1
      },
      {
        "question": "Which word is a synonym for 'easy'? (Gen 8)",
        "answer": "simple",
        "explanation": "'simple' means the same as 'easy'.",
        "choices": [
          "slow",
          "simple",
          "bad",
          "stop"
        ],
        "correctIndex": 1
      },
      {
        "question": "Which word is a synonym for 'start'? (Gen 9)",
        "answer": "begin",
        "explanation": "'begin' means the same as 'start'.",
        "choices": [
          "bad",
          "slow",
          "begin",
          "stop"
        ],
        "correctIndex": 2
      },
      {
        "question": "Which word is a synonym for 'easy'? (Gen 10)",
        "answer": "simple",
        "explanation": "'simple' means the same as 'easy'.",
        "choices": [
          "slow",
          "stop",
          "simple",
          "bad"
        ],
        "correctIndex": 2
      },
      {
        "question": "Which word is a synonym for 'end'? (Gen 11)",
        "answer": "finish",
        "explanation": "'finish' means the same as 'end'.",
        "choices": [
          "stop",
          "bad",
          "slow",
          "finish"
        ],
        "correctIndex": 3
      },
      {
        "question": "Which word is a synonym for 'start'? (Gen 12)",
        "answer": "begin",
        "explanation": "'begin' means the same as 'start'.",
        "choices": [
          "stop",
          "bad",
          "slow",
          "begin"
        ],
        "correctIndex": 3
      },
      {
        "question": "Which word is a synonym for 'easy'? (Gen 13)",
        "answer": "simple",
        "explanation": "'simple' means the same as 'easy'.",
        "choices": [
          "slow",
          "simple",
          "stop",
          "bad"
        ],
        "correctIndex": 1
      },
      {
        "question": "Which word is a synonym for 'start'? (Gen 14)",
        "answer": "begin",
        "explanation": "'begin' means the same as 'start'.",
        "choices": [
          "begin",
          "stop",
          "bad",
          "slow"
        ],
        "correctIndex": 0
      },
      {
        "question": "Which word is a synonym for 'hard'? (Gen 15)",
        "answer": "difficult",
        "explanation": "'difficult' means the same as 'hard'.",
        "choices": [
          "stop",
          "difficult",
          "slow",
          "bad"
        ],
        "correctIndex": 1
      },
      {
        "question": "Which word is a synonym for 'hard'? (Gen 16)",
        "answer": "difficult",
        "explanation": "'difficult' means the same as 'hard'.",
        "choices": [
          "slow",
          "difficult",
          "bad",
          "stop"
        ],
        "correctIndex": 1
      },
      {
        "question": "Which word is a synonym for 'easy'? (Gen 17)",
        "answer": "simple",
        "explanation": "'simple' means the same as 'easy'.",
        "choices": [
          "slow",
          "simple",
          "bad",
          "stop"
        ],
        "correctIndex": 1
      },
      {
        "question": "Which word is a synonym for 'hard'? (Gen 18)",
        "answer": "difficult",
        "explanation": "'difficult' means the same as 'hard'.",
        "choices": [
          "stop",
          "difficult",
          "bad",
          "slow"
        ],
        "correctIndex": 1
      },
      {
        "question": "Which word is a synonym for 'hard'? (Gen 19)",
        "answer": "difficult",
        "explanation": "'difficult' means the same as 'hard'.",
        "choices": [
          "difficult",
          "stop",
          "slow",
          "bad"
        ],
        "correctIndex": 0
      }
    ],
    "Year 6": [
      {
        "question": "Is the sentence active or passive? 'They built a house.'",
        "answer": "active",
        "explanation": "The sentence is in the active voice.",
        "choices": [
          "active",
          "None of the above",
          "actives",
          "The opposite"
        ],
        "correctIndex": 0
      },
      {
        "question": "Which word is a synonym for 'candid'?",
        "answer": "honest",
        "explanation": "'honest' means the same as 'candid'.",
        "choices": [
          "honest",
          "None of the above",
          "honests",
          "The opposite"
        ],
        "correctIndex": 0
      },
      {
        "question": "Which word is a synonym for 'jovial'?",
        "answer": "cheerful",
        "explanation": "'cheerful' means the same as 'jovial'.",
        "choices": [
          "cheerful",
          "None of the above",
          "The opposite",
          "cheerfuls"
        ],
        "correctIndex": 0
      },
      {
        "question": "Which word is an antonym for 'benevolent'?",
        "answer": "cruel",
        "explanation": "'cruel' is the opposite of 'benevolent'.",
        "choices": [
          "The opposite",
          "cruels",
          "None of the above",
          "cruel"
        ],
        "correctIndex": 3
      },
      {
        "question": "Identify the subordinate clause in this sentence: 'Because it was raining, we stayed indoors.'",
        "answer": "Because it was raining",
        "explanation": "'Because it was raining' is the subordinate clause because it cannot stand alone as a complete sentence.",
        "choices": [
          "Because it was raining",
          "None of the above",
          "Because it was rainings",
          "The opposite"
        ],
        "correctIndex": 0
      },
      {
        "question": "Which word is an antonym for 'impeccable'?",
        "answer": "flawed",
        "explanation": "'flawed' is the opposite of 'impeccable'.",
        "choices": [
          "The opposite",
          "flawed",
          "flaweds",
          "None of the above"
        ],
        "correctIndex": 1
      },
      {
        "question": "Which word is an antonym for 'frugal'?",
        "answer": "extravagant",
        "explanation": "'extravagant' is the opposite of 'frugal'.",
        "choices": [
          "extravagants",
          "extravagant",
          "The opposite",
          "None of the above"
        ],
        "correctIndex": 1
      },
      {
        "question": "Which word is an antonym for 'eloquent'?",
        "answer": "inarticulate",
        "explanation": "'inarticulate' is the opposite of 'eloquent'.",
        "choices": [
          "The opposite",
          "inarticulates",
          "None of the above",
          "inarticulate"
        ],
        "correctIndex": 3
      },
      {
        "question": "Which word is an antonym for 'jovial'?",
        "answer": "miserable",
        "explanation": "'miserable' is the opposite of 'jovial'.",
        "choices": [
          "None of the above",
          "The opposite",
          "miserables",
          "miserable"
        ],
        "correctIndex": 3
      },
      {
        "question": "Which word is an antonym for 'candid'?",
        "answer": "deceitful",
        "explanation": "'deceitful' is the opposite of 'candid'.",
        "choices": [
          "None of the above",
          "deceitfuls",
          "The opposite",
          "deceitful"
        ],
        "correctIndex": 3
      },
      {
        "question": "Is the sentence active or passive? 'She wrote a letter.'",
        "answer": "active",
        "explanation": "The sentence is in the active voice.",
        "choices": [
          "active",
          "None of the above",
          "actives",
          "The opposite"
        ],
        "correctIndex": 0
      },
      {
        "question": "Is the sentence active or passive? 'The dog chased the cat.'",
        "answer": "active",
        "explanation": "The sentence is in the active voice.",
        "choices": [
          "active",
          "actives",
          "The opposite",
          "None of the above"
        ],
        "correctIndex": 0
      },
      {
        "question": "Which word is an antonym for 'gregarious'?",
        "answer": "introverted",
        "explanation": "'introverted' is the opposite of 'gregarious'.",
        "choices": [
          "introverteds",
          "The opposite",
          "introverted",
          "None of the above"
        ],
        "correctIndex": 2
      },
      {
        "question": "What tense is this sentence? 'I have eaten breakfast.'",
        "answer": "Present Perfect",
        "explanation": "'have eaten' is the present perfect tense.",
        "choices": [
          "Present Perfects",
          "Present Perfect",
          "None of the above",
          "The opposite"
        ],
        "correctIndex": 1
      },
      {
        "question": "Identify the subordinate clause in this sentence: 'I will go to the park if it stops raining.'",
        "answer": "if it stops raining",
        "explanation": "'if it stops raining' is the subordinate clause because it cannot stand alone as a complete sentence.",
        "choices": [
          "if it stops rainings",
          "if it stops raining",
          "None of the above",
          "The opposite"
        ],
        "correctIndex": 1
      },
      {
        "question": "Which word is an antonym for 'haughty'?",
        "answer": "humble",
        "explanation": "'humble' is the opposite of 'haughty'.",
        "choices": [
          "humbles",
          "None of the above",
          "humble",
          "The opposite"
        ],
        "correctIndex": 2
      },
      {
        "question": "Which word is an antonym for 'abundant'?",
        "answer": "scarce",
        "explanation": "'scarce' is the opposite of 'abundant'.",
        "choices": [
          "scarce",
          "None of the above",
          "The opposite",
          "scarces"
        ],
        "correctIndex": 0
      },
      {
        "question": "Which word is a synonym for 'gregarious'?",
        "answer": "sociable",
        "explanation": "'sociable' means the same as 'gregarious'.",
        "choices": [
          "None of the above",
          "The opposite",
          "sociables",
          "sociable"
        ],
        "correctIndex": 3
      },
      {
        "question": "Identify the preposition: 'The book is on the table.'",
        "answer": "on",
        "explanation": "'on' shows the position of the book relative to the table.",
        "choices": [
          "ons",
          "None of the above",
          "The opposite",
          "on"
        ],
        "correctIndex": 3
      },
      {
        "question": "Is the sentence active or passive? 'The cat was chased by the dog.'",
        "answer": "passive",
        "explanation": "The sentence is in the passive voice.",
        "choices": [
          "passive",
          "passives",
          "The opposite",
          "None of the above"
        ],
        "correctIndex": 0
      },
      {
        "question": "Which word is an antonym for 'diligent'?",
        "answer": "lazy",
        "explanation": "'lazy' is the opposite of 'diligent'.",
        "choices": [
          "The opposite",
          "None of the above",
          "lazys",
          "lazy"
        ],
        "correctIndex": 3
      },
      {
        "question": "Which word is a synonym for 'frugal'?",
        "answer": "thrifty",
        "explanation": "'thrifty' means the same as 'frugal'.",
        "choices": [
          "thriftys",
          "thrifty",
          "The opposite",
          "None of the above"
        ],
        "correctIndex": 1
      },
      {
        "question": "Which word is a synonym for 'benevolent'?",
        "answer": "kind",
        "explanation": "'kind' means the same as 'benevolent'.",
        "choices": [
          "The opposite",
          "None of the above",
          "kinds",
          "kind"
        ],
        "correctIndex": 3
      },
      {
        "question": "Which word is a synonym for 'impeccable'?",
        "answer": "flawless",
        "explanation": "'flawless' means the same as 'impeccable'.",
        "choices": [
          "None of the above",
          "flawless",
          "flawlesss",
          "The opposite"
        ],
        "correctIndex": 1
      },
      {
        "question": "Identify the subordinate clause in this sentence: 'Although she was tired, she finished her homework.'",
        "answer": "Although she was tired",
        "explanation": "'Although she was tired' is the subordinate clause because it cannot stand alone as a complete sentence.",
        "choices": [
          "Although she was tireds",
          "The opposite",
          "None of the above",
          "Although she was tired"
        ],
        "correctIndex": 3
      },
      {
        "question": "Identify the conjunction: 'I wanted to go, but I was too tired.'",
        "answer": "but",
        "explanation": "'but' connects the two clauses.",
        "choices": [
          "None of the above",
          "buts",
          "but",
          "The opposite"
        ],
        "correctIndex": 2
      },
      {
        "question": "Which word is a synonym for 'haughty'?",
        "answer": "arrogant",
        "explanation": "'arrogant' means the same as 'haughty'.",
        "choices": [
          "arrogant",
          "The opposite",
          "arrogants",
          "None of the above"
        ],
        "correctIndex": 0
      },
      {
        "question": "Which word is a synonym for 'abundant'?",
        "answer": "plentiful",
        "explanation": "'plentiful' means the same as 'abundant'.",
        "choices": [
          "plentiful",
          "None of the above",
          "The opposite",
          "plentifuls"
        ],
        "correctIndex": 0
      },
      {
        "question": "Which word is a synonym for 'eloquent'?",
        "answer": "articulate",
        "explanation": "'articulate' means the same as 'eloquent'.",
        "choices": [
          "None of the above",
          "The opposite",
          "articulate",
          "articulates"
        ],
        "correctIndex": 2
      },
      {
        "question": "Is the sentence active or passive? 'A letter was written by her.'",
        "answer": "passive",
        "explanation": "The sentence is in the passive voice.",
        "choices": [
          "passives",
          "passive",
          "The opposite",
          "None of the above"
        ],
        "correctIndex": 1
      },
      {
        "question": "Fill in the blank: She ___ a letter to her friend. (Gen 0)",
        "answer": "wrote",
        "explanation": "The correct verb form is 'wrote'.",
        "choices": [
          "written",
          "wrote",
          "jumping",
          "write"
        ],
        "correctIndex": 1
      },
      {
        "question": "Fill in the blank: The cat ___ over the fence. (Gen 1)",
        "answer": "jumped",
        "explanation": "The correct verb form is 'jumped'.",
        "choices": [
          "jumping",
          "jumped",
          "write",
          "written"
        ],
        "correctIndex": 1
      },
      {
        "question": "Fill in the blank: The cat ___ over the fence. (Gen 2)",
        "answer": "jumped",
        "explanation": "The correct verb form is 'jumped'.",
        "choices": [
          "written",
          "jumped",
          "jumping",
          "write"
        ],
        "correctIndex": 1
      },
      {
        "question": "Fill in the blank: The cat ___ over the fence. (Gen 3)",
        "answer": "jumped",
        "explanation": "The correct verb form is 'jumped'.",
        "choices": [
          "written",
          "jumping",
          "jumped",
          "write"
        ],
        "correctIndex": 2
      },
      {
        "question": "Fill in the blank: The cat ___ over the fence. (Gen 4)",
        "answer": "jumped",
        "explanation": "The correct verb form is 'jumped'.",
        "choices": [
          "write",
          "written",
          "jumping",
          "jumped"
        ],
        "correctIndex": 3
      },
      {
        "question": "Fill in the blank: The cat ___ over the fence. (Gen 5)",
        "answer": "jumped",
        "explanation": "The correct verb form is 'jumped'.",
        "choices": [
          "jumping",
          "jumped",
          "written",
          "write"
        ],
        "correctIndex": 1
      },
      {
        "question": "Fill in the blank: The cat ___ over the fence. (Gen 6)",
        "answer": "jumped",
        "explanation": "The correct verb form is 'jumped'.",
        "choices": [
          "jumping",
          "written",
          "write",
          "jumped"
        ],
        "correctIndex": 3
      },
      {
        "question": "Fill in the blank: The cat ___ over the fence. (Gen 7)",
        "answer": "jumped",
        "explanation": "The correct verb form is 'jumped'.",
        "choices": [
          "written",
          "jumped",
          "jumping",
          "write"
        ],
        "correctIndex": 1
      },
      {
        "question": "Fill in the blank: The cat ___ over the fence. (Gen 8)",
        "answer": "jumped",
        "explanation": "The correct verb form is 'jumped'.",
        "choices": [
          "write",
          "jumped",
          "jumping",
          "written"
        ],
        "correctIndex": 1
      },
      {
        "question": "Fill in the blank: The cat ___ over the fence. (Gen 9)",
        "answer": "jumped",
        "explanation": "The correct verb form is 'jumped'.",
        "choices": [
          "jumping",
          "write",
          "jumped",
          "written"
        ],
        "correctIndex": 2
      },
      {
        "question": "Fill in the blank: The cat ___ over the fence. (Gen 10)",
        "answer": "jumped",
        "explanation": "The correct verb form is 'jumped'.",
        "choices": [
          "written",
          "write",
          "jumping",
          "jumped"
        ],
        "correctIndex": 3
      },
      {
        "question": "Fill in the blank: The cat ___ over the fence. (Gen 11)",
        "answer": "jumped",
        "explanation": "The correct verb form is 'jumped'.",
        "choices": [
          "written",
          "write",
          "jumped",
          "jumping"
        ],
        "correctIndex": 2
      },
      {
        "question": "Fill in the blank: She ___ a letter to her friend. (Gen 12)",
        "answer": "wrote",
        "explanation": "The correct verb form is 'wrote'.",
        "choices": [
          "written",
          "write",
          "wrote",
          "jumping"
        ],
        "correctIndex": 2
      },
      {
        "question": "Fill in the blank: The cat ___ over the fence. (Gen 13)",
        "answer": "jumped",
        "explanation": "The correct verb form is 'jumped'.",
        "choices": [
          "write",
          "written",
          "jumping",
          "jumped"
        ],
        "correctIndex": 3
      },
      {
        "question": "Fill in the blank: She ___ a letter to her friend. (Gen 14)",
        "answer": "wrote",
        "explanation": "The correct verb form is 'wrote'.",
        "choices": [
          "written",
          "jumping",
          "wrote",
          "write"
        ],
        "correctIndex": 2
      },
      {
        "question": "Fill in the blank: The cat ___ over the fence. (Gen 15)",
        "answer": "jumped",
        "explanation": "The correct verb form is 'jumped'.",
        "choices": [
          "jumped",
          "written",
          "jumping",
          "write"
        ],
        "correctIndex": 0
      },
      {
        "question": "Fill in the blank: She ___ a letter to her friend. (Gen 16)",
        "answer": "wrote",
        "explanation": "The correct verb form is 'wrote'.",
        "choices": [
          "written",
          "write",
          "jumping",
          "wrote"
        ],
        "correctIndex": 3
      },
      {
        "question": "Fill in the blank: The cat ___ over the fence. (Gen 17)",
        "answer": "jumped",
        "explanation": "The correct verb form is 'jumped'.",
        "choices": [
          "jumping",
          "jumped",
          "written",
          "write"
        ],
        "correctIndex": 1
      },
      {
        "question": "Fill in the blank: She ___ a letter to her friend. (Gen 18)",
        "answer": "wrote",
        "explanation": "The correct verb form is 'wrote'.",
        "choices": [
          "write",
          "jumping",
          "wrote",
          "written"
        ],
        "correctIndex": 2
      },
      {
        "question": "Fill in the blank: The cat ___ over the fence. (Gen 19)",
        "answer": "jumped",
        "explanation": "The correct verb form is 'jumped'.",
        "choices": [
          "jumping",
          "written",
          "write",
          "jumped"
        ],
        "correctIndex": 3
      }
    ]
  },
  "Science": {
    "Year 3": [
      {
        "question": "Which materials are attracted to magnets?",
        "answer": "Iron and Steel",
        "explanation": "Magnetic materials include iron, steel, nickel, and cobalt.",
        "choices": [
          "Iron and Steels",
          "The opposite",
          "None of the above",
          "Iron and Steel"
        ],
        "correctIndex": 3
      },
      {
        "question": "Is wood a conductor or insulator of electricity?",
        "answer": "Insulator",
        "explanation": "Electricity does not flow easily through wood.",
        "choices": [
          "Insulators",
          "Insulator",
          "The opposite",
          "None of the above"
        ],
        "correctIndex": 1
      },
      {
        "question": "Which organ pumps blood around the body?",
        "answer": "Heart",
        "explanation": "The heart pumps blood.",
        "choices": [
          "The opposite",
          "None of the above",
          "Heart",
          "Hearts"
        ],
        "correctIndex": 2
      },
      {
        "question": "Which state of matter has a fixed shape?",
        "answer": "Solid",
        "explanation": "Solids maintain their shape.",
        "choices": [
          "Solids",
          "None of the above",
          "Solid",
          "The opposite"
        ],
        "correctIndex": 2
      },
      {
        "question": "Does sound travel faster in water or in air?",
        "answer": "Water",
        "explanation": "Sound waves travel faster in denser mediums like water.",
        "choices": [
          "Waters",
          "Water",
          "None of the above",
          "The opposite"
        ],
        "correctIndex": 1
      },
      {
        "question": "Which of these is a source of light? (Sun, Tree, Rock)",
        "answer": "Sun",
        "explanation": "The Sun provides natural light.",
        "choices": [
          "Suns",
          "None of the above",
          "Sun",
          "The opposite"
        ],
        "correctIndex": 2
      },
      {
        "question": "Which sense organ do we use for sight?",
        "answer": "Eyes",
        "explanation": "We use our eyes to see.",
        "choices": [
          "The opposite",
          "Eyes",
          "Eyess",
          "None of the above"
        ],
        "correctIndex": 1
      },
      {
        "question": "What part of a plant grows downwards into the soil?",
        "answer": "Roots",
        "explanation": "Roots anchor the plant and absorb water.",
        "choices": [
          "Roots",
          "None of the above",
          "The opposite",
          "Rootss"
        ],
        "correctIndex": 0
      },
      {
        "question": "What is the freezing point of water in degrees Celsius?",
        "answer": "0",
        "explanation": "Water freezes at 0 degrees Celsius.",
        "choices": [
          "2",
          "1",
          "Option 4",
          "0"
        ],
        "correctIndex": 3
      },
      {
        "question": "Which animal breathes water through gills?",
        "answer": "Fish",
        "explanation": "Fish live in water and use gills to breathe.",
        "choices": [
          "None of the above",
          "Fishs",
          "Fish",
          "The opposite"
        ],
        "correctIndex": 2
      },
      {
        "question": "What part of a plant grows downwards into the soil?",
        "answer": "Roots",
        "explanation": "Roots anchor the plant and absorb water.",
        "choices": [
          "Roots",
          "None of the above",
          "The opposite",
          "Rootss"
        ],
        "correctIndex": 0
      },
      {
        "question": "What is the boiling point of water in degrees Celsius?",
        "answer": "100",
        "explanation": "Water boils at 100 degrees Celsius.",
        "choices": [
          "102",
          "99",
          "101",
          "100"
        ],
        "correctIndex": 3
      },
      {
        "question": "Which materials are attracted to magnets?",
        "answer": "Iron and Steel",
        "explanation": "Magnetic materials include iron, steel, nickel, and cobalt.",
        "choices": [
          "Iron and Steels",
          "The opposite",
          "None of the above",
          "Iron and Steel"
        ],
        "correctIndex": 3
      },
      {
        "question": "Which of these is a source of light? (Sun, Tree, Rock)",
        "answer": "Sun",
        "explanation": "The Sun provides natural light.",
        "choices": [
          "Suns",
          "None of the above",
          "Sun",
          "The opposite"
        ],
        "correctIndex": 2
      },
      {
        "question": "Which sense organ do we use for sight?",
        "answer": "Eyes",
        "explanation": "We use our eyes to see.",
        "choices": [
          "The opposite",
          "Eyes",
          "Eyess",
          "None of the above"
        ],
        "correctIndex": 1
      },
      {
        "question": "What is the freezing point of water in degrees Celsius?",
        "answer": "0",
        "explanation": "Water freezes at 0 degrees Celsius.",
        "choices": [
          "2",
          "1",
          "Option 4",
          "0"
        ],
        "correctIndex": 3
      },
      {
        "question": "What type of animal is a frog?",
        "answer": "Amphibian",
        "explanation": "Frogs start life in water and then move to land.",
        "choices": [
          "Amphibian",
          "Amphibians",
          "None of the above",
          "The opposite"
        ],
        "correctIndex": 0
      },
      {
        "question": "What part of the plant produces seeds?",
        "answer": "Flower",
        "explanation": "Flowers produce seeds for reproduction.",
        "choices": [
          "Flower",
          "The opposite",
          "None of the above",
          "Flowers"
        ],
        "correctIndex": 0
      },
      {
        "question": "Which animal breathes water through gills?",
        "answer": "Fish",
        "explanation": "Fish live in water and use gills to breathe.",
        "choices": [
          "None of the above",
          "Fishs",
          "Fish",
          "The opposite"
        ],
        "correctIndex": 2
      },
      {
        "question": "Which organ pumps blood around the body?",
        "answer": "Heart",
        "explanation": "The heart pumps blood.",
        "choices": [
          "The opposite",
          "None of the above",
          "Heart",
          "Hearts"
        ],
        "correctIndex": 2
      },
      {
        "question": "Which state of matter flows to take the shape of its container?",
        "answer": "Liquid",
        "explanation": "Liquids flow and adapt to their container's shape.",
        "choices": [
          "None of the above",
          "Liquid",
          "The opposite",
          "Liquids"
        ],
        "correctIndex": 1
      },
      {
        "question": "What is the hard outer skeleton of insects called?",
        "answer": "Exoskeleton",
        "explanation": "Insects have an exoskeleton.",
        "choices": [
          "Exoskeleton",
          "None of the above",
          "The opposite",
          "Exoskeletons"
        ],
        "correctIndex": 0
      },
      {
        "question": "What is the boiling point of water in degrees Celsius?",
        "answer": "100",
        "explanation": "Water boils at 100 degrees Celsius.",
        "choices": [
          "102",
          "99",
          "101",
          "100"
        ],
        "correctIndex": 3
      },
      {
        "question": "What do herbivores eat?",
        "answer": "Plants",
        "explanation": "Herbivores eat only plants.",
        "choices": [
          "None of the above",
          "The opposite",
          "Plantss",
          "Plants"
        ],
        "correctIndex": 3
      },
      {
        "question": "What do plants need to make food? (Sunlight, Darkness, Ice)",
        "answer": "Sunlight",
        "explanation": "Plants use sunlight for photosynthesis.",
        "choices": [
          "The opposite",
          "Sunlight",
          "None of the above",
          "Sunlights"
        ],
        "correctIndex": 1
      },
      {
        "question": "What is the hard outer skeleton of insects called?",
        "answer": "Exoskeleton",
        "explanation": "Insects have an exoskeleton.",
        "choices": [
          "Exoskeleton",
          "None of the above",
          "The opposite",
          "Exoskeletons"
        ],
        "correctIndex": 0
      },
      {
        "question": "What invisible force pulls objects towards the Earth?",
        "answer": "Gravity",
        "explanation": "Gravity keeps us pulled to the ground.",
        "choices": [
          "The opposite",
          "Gravity",
          "None of the above",
          "Gravitys"
        ],
        "correctIndex": 1
      },
      {
        "question": "Is wood a conductor or insulator of electricity?",
        "answer": "Insulator",
        "explanation": "Electricity does not flow easily through wood.",
        "choices": [
          "Insulators",
          "Insulator",
          "The opposite",
          "None of the above"
        ],
        "correctIndex": 1
      },
      {
        "question": "What invisible force pulls objects towards the Earth?",
        "answer": "Gravity",
        "explanation": "Gravity keeps us pulled to the ground.",
        "choices": [
          "The opposite",
          "Gravity",
          "None of the above",
          "Gravitys"
        ],
        "correctIndex": 1
      },
      {
        "question": "What do carnivores eat?",
        "answer": "Meat",
        "explanation": "Carnivores eat other animals.",
        "choices": [
          "Meat",
          "Meats",
          "The opposite",
          "None of the above"
        ],
        "correctIndex": 0
      },
      {
        "question": "Which of these is a plant part? (Gen 0)",
        "answer": "Leaf",
        "explanation": "Leaf is a part of a plant.",
        "choices": [
          "Leaf",
          "Water",
          "Sun",
          "Rock"
        ],
        "correctIndex": 0
      },
      {
        "question": "Which of these is a plant part? (Gen 1)",
        "answer": "Leaf",
        "explanation": "Leaf is a part of a plant.",
        "choices": [
          "Sun",
          "Leaf",
          "Rock",
          "Water"
        ],
        "correctIndex": 1
      },
      {
        "question": "Which of these is a plant part? (Gen 2)",
        "answer": "Leaf",
        "explanation": "Leaf is a part of a plant.",
        "choices": [
          "Sun",
          "Leaf",
          "Rock",
          "Water"
        ],
        "correctIndex": 1
      },
      {
        "question": "Which of these is a plant part? (Gen 3)",
        "answer": "Leaf",
        "explanation": "Leaf is a part of a plant.",
        "choices": [
          "Leaf",
          "Rock",
          "Water",
          "Sun"
        ],
        "correctIndex": 0
      },
      {
        "question": "Which of these is a plant part? (Gen 4)",
        "answer": "Leaf",
        "explanation": "Leaf is a part of a plant.",
        "choices": [
          "Rock",
          "Sun",
          "Water",
          "Leaf"
        ],
        "correctIndex": 3
      },
      {
        "question": "Which of these is a plant part? (Gen 5)",
        "answer": "Leaf",
        "explanation": "Leaf is a part of a plant.",
        "choices": [
          "Water",
          "Leaf",
          "Rock",
          "Sun"
        ],
        "correctIndex": 1
      },
      {
        "question": "Which of these is a plant part? (Gen 6)",
        "answer": "Leaf",
        "explanation": "Leaf is a part of a plant.",
        "choices": [
          "Sun",
          "Leaf",
          "Water",
          "Rock"
        ],
        "correctIndex": 1
      },
      {
        "question": "Which of these is a plant part? (Gen 7)",
        "answer": "Leaf",
        "explanation": "Leaf is a part of a plant.",
        "choices": [
          "Rock",
          "Water",
          "Leaf",
          "Sun"
        ],
        "correctIndex": 2
      },
      {
        "question": "Which of these is a plant part? (Gen 8)",
        "answer": "Leaf",
        "explanation": "Leaf is a part of a plant.",
        "choices": [
          "Sun",
          "Rock",
          "Leaf",
          "Water"
        ],
        "correctIndex": 2
      },
      {
        "question": "Which of these is a plant part? (Gen 9)",
        "answer": "Leaf",
        "explanation": "Leaf is a part of a plant.",
        "choices": [
          "Water",
          "Rock",
          "Leaf",
          "Sun"
        ],
        "correctIndex": 2
      },
      {
        "question": "Which of these is a plant part? (Gen 10)",
        "answer": "Leaf",
        "explanation": "Leaf is a part of a plant.",
        "choices": [
          "Leaf",
          "Sun",
          "Water",
          "Rock"
        ],
        "correctIndex": 0
      },
      {
        "question": "Which of these is a plant part? (Gen 11)",
        "answer": "Leaf",
        "explanation": "Leaf is a part of a plant.",
        "choices": [
          "Rock",
          "Leaf",
          "Sun",
          "Water"
        ],
        "correctIndex": 1
      },
      {
        "question": "Which of these is a plant part? (Gen 12)",
        "answer": "Leaf",
        "explanation": "Leaf is a part of a plant.",
        "choices": [
          "Leaf",
          "Sun",
          "Rock",
          "Water"
        ],
        "correctIndex": 0
      },
      {
        "question": "Which of these is a plant part? (Gen 13)",
        "answer": "Leaf",
        "explanation": "Leaf is a part of a plant.",
        "choices": [
          "Water",
          "Rock",
          "Leaf",
          "Sun"
        ],
        "correctIndex": 2
      },
      {
        "question": "Which of these is a plant part? (Gen 14)",
        "answer": "Leaf",
        "explanation": "Leaf is a part of a plant.",
        "choices": [
          "Water",
          "Sun",
          "Leaf",
          "Rock"
        ],
        "correctIndex": 2
      },
      {
        "question": "Which of these is a plant part? (Gen 15)",
        "answer": "Leaf",
        "explanation": "Leaf is a part of a plant.",
        "choices": [
          "Rock",
          "Leaf",
          "Water",
          "Sun"
        ],
        "correctIndex": 1
      },
      {
        "question": "Which of these is a plant part? (Gen 16)",
        "answer": "Leaf",
        "explanation": "Leaf is a part of a plant.",
        "choices": [
          "Water",
          "Leaf",
          "Sun",
          "Rock"
        ],
        "correctIndex": 1
      },
      {
        "question": "Which of these is a plant part? (Gen 17)",
        "answer": "Leaf",
        "explanation": "Leaf is a part of a plant.",
        "choices": [
          "Leaf",
          "Sun",
          "Rock",
          "Water"
        ],
        "correctIndex": 0
      },
      {
        "question": "Which of these is a plant part? (Gen 18)",
        "answer": "Leaf",
        "explanation": "Leaf is a part of a plant.",
        "choices": [
          "Leaf",
          "Sun",
          "Water",
          "Rock"
        ],
        "correctIndex": 0
      },
      {
        "question": "Which of these is a plant part? (Gen 19)",
        "answer": "Leaf",
        "explanation": "Leaf is a part of a plant.",
        "choices": [
          "Water",
          "Sun",
          "Leaf",
          "Rock"
        ],
        "correctIndex": 2
      }
    ],
    "Year 6": [
      {
        "question": "Which blood vessels carry blood away from the heart?",
        "answer": "Arteries",
        "explanation": "Arteries carry oxygen-rich blood away from the heart.",
        "choices": [
          "The opposite",
          "Arteriess",
          "Arteries",
          "None of the above"
        ],
        "correctIndex": 2
      },
      {
        "question": "What gas do plants take in during photosynthesis?",
        "answer": "Carbon Dioxide",
        "explanation": "Plants take in carbon dioxide and release oxygen.",
        "choices": [
          "None of the above",
          "Carbon Dioxides",
          "Carbon Dioxide",
          "The opposite"
        ],
        "correctIndex": 2
      },
      {
        "question": "Which organ in the human body is responsible for filtering blood and producing urine?",
        "answer": "Kidney",
        "explanation": "Kidneys are the primary organs of the excretory system.",
        "choices": [
          "Kidneys",
          "None of the above",
          "Kidney",
          "The opposite"
        ],
        "correctIndex": 2
      },
      {
        "question": "What gas do humans need to breathe in to survive?",
        "answer": "Oxygen",
        "explanation": "Humans inhale oxygen and exhale carbon dioxide.",
        "choices": [
          "The opposite",
          "None of the above",
          "Oxygen",
          "Oxygens"
        ],
        "correctIndex": 2
      },
      {
        "question": "What causes the passing of day and night?",
        "answer": "Earth spinning on its axis",
        "explanation": "As Earth rotates, different parts face the sun.",
        "choices": [
          "Earth spinning on its axiss",
          "None of the above",
          "Earth spinning on its axis",
          "The opposite"
        ],
        "correctIndex": 2
      },
      {
        "question": "In an electrical circuit, what component provides the push to move electrons?",
        "answer": "Battery/Cell",
        "explanation": "A battery provides the voltage (push).",
        "choices": [
          "The opposite",
          "Battery/Cells",
          "None of the above",
          "Battery/Cell"
        ],
        "correctIndex": 3
      },
      {
        "question": "Which organ in the human body is responsible for filtering blood and producing urine?",
        "answer": "Kidney",
        "explanation": "Kidneys are the primary organs of the excretory system.",
        "choices": [
          "Kidneys",
          "None of the above",
          "Kidney",
          "The opposite"
        ],
        "correctIndex": 2
      },
      {
        "question": "What biological process involves cells breaking down sugar to release energy?",
        "answer": "Respiration",
        "explanation": "Respiration occurs in all living cells to produce energy.",
        "choices": [
          "Respirations",
          "None of the above",
          "The opposite",
          "Respiration"
        ],
        "correctIndex": 3
      },
      {
        "question": "Which nutrient is mainly responsible for muscle growth and repair?",
        "answer": "Protein",
        "explanation": "Proteins are the building blocks of tissue.",
        "choices": [
          "Protein",
          "Proteins",
          "The opposite",
          "None of the above"
        ],
        "correctIndex": 0
      },
      {
        "question": "What is the force that opposes motion between two surfaces?",
        "answer": "Friction",
        "explanation": "Friction slows things down when they rub together.",
        "choices": [
          "None of the above",
          "Frictions",
          "The opposite",
          "Friction"
        ],
        "correctIndex": 3
      },
      {
        "question": "What is the largest planet in our solar system?",
        "answer": "Jupiter",
        "explanation": "Jupiter is the largest planet.",
        "choices": [
          "The opposite",
          "None of the above",
          "Jupiter",
          "Jupiters"
        ],
        "correctIndex": 2
      },
      {
        "question": "What is the force that opposes motion between two surfaces?",
        "answer": "Friction",
        "explanation": "Friction slows things down when they rub together.",
        "choices": [
          "None of the above",
          "Frictions",
          "The opposite",
          "Friction"
        ],
        "correctIndex": 3
      },
      {
        "question": "What biological process involves cells breaking down sugar to release energy?",
        "answer": "Respiration",
        "explanation": "Respiration occurs in all living cells to produce energy.",
        "choices": [
          "Respirations",
          "None of the above",
          "The opposite",
          "Respiration"
        ],
        "correctIndex": 3
      },
      {
        "question": "What is the transparent front part of the eye called?",
        "answer": "Cornea",
        "explanation": "The cornea covers the iris and pupil.",
        "choices": [
          "Corneas",
          "Cornea",
          "The opposite",
          "None of the above"
        ],
        "correctIndex": 1
      },
      {
        "question": "Which blood vessels carry blood away from the heart?",
        "answer": "Arteries",
        "explanation": "Arteries carry oxygen-rich blood away from the heart.",
        "choices": [
          "The opposite",
          "Arteriess",
          "Arteries",
          "None of the above"
        ],
        "correctIndex": 2
      },
      {
        "question": "Is copper a conductor or an insulator?",
        "answer": "Conductor",
        "explanation": "Copper allows electricity to flow easily through it.",
        "choices": [
          "Conductor",
          "None of the above",
          "The opposite",
          "Conductors"
        ],
        "correctIndex": 0
      },
      {
        "question": "What type of energy is stored in a compressed spring?",
        "answer": "Potential Energy",
        "explanation": "Elastic potential energy is stored when a spring is compressed.",
        "choices": [
          "The opposite",
          "Potential Energy",
          "Potential Energys",
          "None of the above"
        ],
        "correctIndex": 1
      },
      {
        "question": "Is copper a conductor or an insulator?",
        "answer": "Conductor",
        "explanation": "Copper allows electricity to flow easily through it.",
        "choices": [
          "Conductor",
          "None of the above",
          "The opposite",
          "Conductors"
        ],
        "correctIndex": 0
      },
      {
        "question": "Which part of a flower contains the pollen?",
        "answer": "Anther",
        "explanation": "The anther is the pollen-bearing part of the stamen.",
        "choices": [
          "Anther",
          "Anthers",
          "The opposite",
          "None of the above"
        ],
        "correctIndex": 0
      },
      {
        "question": "What gas do humans need to breathe in to survive?",
        "answer": "Oxygen",
        "explanation": "Humans inhale oxygen and exhale carbon dioxide.",
        "choices": [
          "The opposite",
          "None of the above",
          "Oxygen",
          "Oxygens"
        ],
        "correctIndex": 2
      },
      {
        "question": "What gas do plants take in during photosynthesis?",
        "answer": "Carbon Dioxide",
        "explanation": "Plants take in carbon dioxide and release oxygen.",
        "choices": [
          "None of the above",
          "Carbon Dioxides",
          "Carbon Dioxide",
          "The opposite"
        ],
        "correctIndex": 2
      },
      {
        "question": "In an electrical circuit, what component provides the push to move electrons?",
        "answer": "Battery/Cell",
        "explanation": "A battery provides the voltage (push).",
        "choices": [
          "The opposite",
          "Battery/Cells",
          "None of the above",
          "Battery/Cell"
        ],
        "correctIndex": 3
      },
      {
        "question": "What is the process by which a liquid turns into a gas called?",
        "answer": "Evaporation",
        "explanation": "Heat causes a liquid to evaporate into a gas.",
        "choices": [
          "The opposite",
          "None of the above",
          "Evaporations",
          "Evaporation"
        ],
        "correctIndex": 3
      },
      {
        "question": "What type of energy is stored in a compressed spring?",
        "answer": "Potential Energy",
        "explanation": "Elastic potential energy is stored when a spring is compressed.",
        "choices": [
          "The opposite",
          "Potential Energy",
          "Potential Energys",
          "None of the above"
        ],
        "correctIndex": 1
      },
      {
        "question": "Which part of a flower contains the pollen?",
        "answer": "Anther",
        "explanation": "The anther is the pollen-bearing part of the stamen.",
        "choices": [
          "Anther",
          "Anthers",
          "The opposite",
          "None of the above"
        ],
        "correctIndex": 0
      },
      {
        "question": "What name is given to animals with a backbone?",
        "answer": "Vertebrates",
        "explanation": "Vertebrates include mammals, birds, reptiles, amphibians, and fish.",
        "choices": [
          "Vertebrates",
          "The opposite",
          "Vertebratess",
          "None of the above"
        ],
        "correctIndex": 0
      },
      {
        "question": "What is the process by which a liquid turns into a gas called?",
        "answer": "Evaporation",
        "explanation": "Heat causes a liquid to evaporate into a gas.",
        "choices": [
          "The opposite",
          "None of the above",
          "Evaporations",
          "Evaporation"
        ],
        "correctIndex": 3
      },
      {
        "question": "What is the largest planet in our solar system?",
        "answer": "Jupiter",
        "explanation": "Jupiter is the largest planet.",
        "choices": [
          "The opposite",
          "None of the above",
          "Jupiter",
          "Jupiters"
        ],
        "correctIndex": 2
      },
      {
        "question": "What is the transparent front part of the eye called?",
        "answer": "Cornea",
        "explanation": "The cornea covers the iris and pupil.",
        "choices": [
          "Corneas",
          "Cornea",
          "The opposite",
          "None of the above"
        ],
        "correctIndex": 1
      },
      {
        "question": "How long does it take the Earth to orbit the Sun?",
        "answer": "365 days (1 year)",
        "explanation": "One full orbit takes approximately 365.25 days.",
        "choices": [
          "365 days (1 year)",
          "C",
          "A",
          "B"
        ],
        "correctIndex": 0
      },
      {
        "question": "What planet is known as the Red Planet? (Gen 0)",
        "answer": "Mars",
        "explanation": "Mars appears red due to iron oxide.",
        "choices": [
          "Venus",
          "Jupiter",
          "Mars",
          "Earth"
        ],
        "correctIndex": 2
      },
      {
        "question": "What planet is known as the Red Planet? (Gen 1)",
        "answer": "Mars",
        "explanation": "Mars appears red due to iron oxide.",
        "choices": [
          "Mars",
          "Earth",
          "Venus",
          "Jupiter"
        ],
        "correctIndex": 0
      },
      {
        "question": "What planet is known as the Red Planet? (Gen 2)",
        "answer": "Mars",
        "explanation": "Mars appears red due to iron oxide.",
        "choices": [
          "Mars",
          "Jupiter",
          "Venus",
          "Earth"
        ],
        "correctIndex": 0
      },
      {
        "question": "What planet is known as the Red Planet? (Gen 3)",
        "answer": "Mars",
        "explanation": "Mars appears red due to iron oxide.",
        "choices": [
          "Earth",
          "Jupiter",
          "Venus",
          "Mars"
        ],
        "correctIndex": 3
      },
      {
        "question": "What planet is known as the Red Planet? (Gen 4)",
        "answer": "Mars",
        "explanation": "Mars appears red due to iron oxide.",
        "choices": [
          "Mars",
          "Jupiter",
          "Venus",
          "Earth"
        ],
        "correctIndex": 0
      },
      {
        "question": "What planet is known as the Red Planet? (Gen 5)",
        "answer": "Mars",
        "explanation": "Mars appears red due to iron oxide.",
        "choices": [
          "Jupiter",
          "Mars",
          "Venus",
          "Earth"
        ],
        "correctIndex": 1
      },
      {
        "question": "What planet is known as the Red Planet? (Gen 6)",
        "answer": "Mars",
        "explanation": "Mars appears red due to iron oxide.",
        "choices": [
          "Jupiter",
          "Mars",
          "Earth",
          "Venus"
        ],
        "correctIndex": 1
      },
      {
        "question": "What planet is known as the Red Planet? (Gen 7)",
        "answer": "Mars",
        "explanation": "Mars appears red due to iron oxide.",
        "choices": [
          "Earth",
          "Mars",
          "Venus",
          "Jupiter"
        ],
        "correctIndex": 1
      },
      {
        "question": "What planet is known as the Red Planet? (Gen 8)",
        "answer": "Mars",
        "explanation": "Mars appears red due to iron oxide.",
        "choices": [
          "Mars",
          "Venus",
          "Earth",
          "Jupiter"
        ],
        "correctIndex": 0
      },
      {
        "question": "What planet is known as the Red Planet? (Gen 9)",
        "answer": "Mars",
        "explanation": "Mars appears red due to iron oxide.",
        "choices": [
          "Mars",
          "Earth",
          "Jupiter",
          "Venus"
        ],
        "correctIndex": 0
      },
      {
        "question": "What planet is known as the Red Planet? (Gen 10)",
        "answer": "Mars",
        "explanation": "Mars appears red due to iron oxide.",
        "choices": [
          "Earth",
          "Mars",
          "Venus",
          "Jupiter"
        ],
        "correctIndex": 1
      },
      {
        "question": "What planet is known as the Red Planet? (Gen 11)",
        "answer": "Mars",
        "explanation": "Mars appears red due to iron oxide.",
        "choices": [
          "Venus",
          "Jupiter",
          "Earth",
          "Mars"
        ],
        "correctIndex": 3
      },
      {
        "question": "What planet is known as the Red Planet? (Gen 12)",
        "answer": "Mars",
        "explanation": "Mars appears red due to iron oxide.",
        "choices": [
          "Mars",
          "Venus",
          "Earth",
          "Jupiter"
        ],
        "correctIndex": 0
      },
      {
        "question": "What planet is known as the Red Planet? (Gen 13)",
        "answer": "Mars",
        "explanation": "Mars appears red due to iron oxide.",
        "choices": [
          "Mars",
          "Earth",
          "Venus",
          "Jupiter"
        ],
        "correctIndex": 0
      },
      {
        "question": "What planet is known as the Red Planet? (Gen 14)",
        "answer": "Mars",
        "explanation": "Mars appears red due to iron oxide.",
        "choices": [
          "Mars",
          "Jupiter",
          "Venus",
          "Earth"
        ],
        "correctIndex": 0
      },
      {
        "question": "What planet is known as the Red Planet? (Gen 15)",
        "answer": "Mars",
        "explanation": "Mars appears red due to iron oxide.",
        "choices": [
          "Venus",
          "Jupiter",
          "Earth",
          "Mars"
        ],
        "correctIndex": 3
      },
      {
        "question": "What planet is known as the Red Planet? (Gen 16)",
        "answer": "Mars",
        "explanation": "Mars appears red due to iron oxide.",
        "choices": [
          "Venus",
          "Mars",
          "Jupiter",
          "Earth"
        ],
        "correctIndex": 1
      },
      {
        "question": "What planet is known as the Red Planet? (Gen 17)",
        "answer": "Mars",
        "explanation": "Mars appears red due to iron oxide.",
        "choices": [
          "Earth",
          "Venus",
          "Jupiter",
          "Mars"
        ],
        "correctIndex": 3
      },
      {
        "question": "What planet is known as the Red Planet? (Gen 18)",
        "answer": "Mars",
        "explanation": "Mars appears red due to iron oxide.",
        "choices": [
          "Mars",
          "Jupiter",
          "Earth",
          "Venus"
        ],
        "correctIndex": 0
      },
      {
        "question": "What planet is known as the Red Planet? (Gen 19)",
        "answer": "Mars",
        "explanation": "Mars appears red due to iron oxide.",
        "choices": [
          "Earth",
          "Mars",
          "Jupiter",
          "Venus"
        ],
        "correctIndex": 1
      }
    ]
  },
  "Chinese": {
    "Year 3": [
      {
        "question": "「井底之（ ）」，括號內是什麼動物？",
        "answer": "蛙",
        "explanation": "井底之蛙，比喻見識淺薄的人。",
        "choices": [
          "蛙",
          "The opposite",
          "蛙s",
          "None of the above"
        ],
        "correctIndex": 0
      },
      {
        "question": "「守株待兔」中，「株」是指什麼？",
        "answer": "樹樁",
        "explanation": "「株」指的是露出地面的樹根和樹莖。",
        "choices": [
          "None of the above",
          "The opposite",
          "樹樁s",
          "樹樁"
        ],
        "correctIndex": 3
      },
      {
        "question": "「高興」的反義詞是什麼？",
        "answer": "傷心",
        "explanation": "「高興」指情緒良好，相反詞是「傷心」。",
        "choices": [
          "None of the above",
          "傷心s",
          "傷心",
          "The opposite"
        ],
        "correctIndex": 2
      },
      {
        "question": "「井底之（ ）」，括號內是什麼動物？",
        "answer": "蛙",
        "explanation": "井底之蛙，比喻見識淺薄的人。",
        "choices": [
          "蛙",
          "The opposite",
          "蛙s",
          "None of the above"
        ],
        "correctIndex": 0
      },
      {
        "question": "下列哪個標點符號用於疑問句結尾？",
        "answer": "？",
        "explanation": "問號「？」用於提問。",
        "choices": [
          "C",
          "？",
          "B",
          "A"
        ],
        "correctIndex": 1
      },
      {
        "question": "「狐假虎威」中，是誰借了老虎的威風？",
        "answer": "狐狸",
        "explanation": "狐狸藉著老虎的威風去嚇唬百獸。",
        "choices": [
          "The opposite",
          "狐狸s",
          "None of the above",
          "狐狸"
        ],
        "correctIndex": 3
      },
      {
        "question": "一（ ）衣服，括號中應填什麼量詞？",
        "answer": "件",
        "explanation": "衣服的量詞通常是用「件」。",
        "choices": [
          "The opposite",
          "件",
          "件s",
          "None of the above"
        ],
        "correctIndex": 1
      },
      {
        "question": "「天空」的量詞是什麼？",
        "answer": "片",
        "explanation": "通常說「一片天空」。",
        "choices": [
          "None of the above",
          "The opposite",
          "片s",
          "片"
        ],
        "correctIndex": 3
      },
      {
        "question": "下列哪個標點符號用於疑問句結尾？",
        "answer": "？",
        "explanation": "問號「？」用於提問。",
        "choices": [
          "C",
          "？",
          "B",
          "A"
        ],
        "correctIndex": 1
      },
      {
        "question": "「狐假虎威」中，是誰借了老虎的威風？",
        "answer": "狐狸",
        "explanation": "狐狸藉著老虎的威風去嚇唬百獸。",
        "choices": [
          "The opposite",
          "狐狸s",
          "None of the above",
          "狐狸"
        ],
        "correctIndex": 3
      },
      {
        "question": "「美麗」的同義詞是？",
        "answer": "漂亮",
        "explanation": "兩者都形容外表好看。",
        "choices": [
          "漂亮",
          "None of the above",
          "The opposite",
          "漂亮s"
        ],
        "correctIndex": 0
      },
      {
        "question": "「美麗」的同義詞是？",
        "answer": "漂亮",
        "explanation": "兩者都形容外表好看。",
        "choices": [
          "漂亮",
          "None of the above",
          "The opposite",
          "漂亮s"
        ],
        "correctIndex": 0
      },
      {
        "question": "「勇敢」的反義詞是？",
        "answer": "膽小",
        "explanation": "勇敢的反義是膽小或懦弱。",
        "choices": [
          "The opposite",
          "膽小",
          "膽小s",
          "None of the above"
        ],
        "correctIndex": 1
      },
      {
        "question": "「天空」的量詞是什麼？",
        "answer": "片",
        "explanation": "通常說「一片天空」。",
        "choices": [
          "None of the above",
          "The opposite",
          "片s",
          "片"
        ],
        "correctIndex": 3
      },
      {
        "question": "下列哪個標點符號用於疑問句結尾？",
        "answer": "？",
        "explanation": "問號「？」用於提問。",
        "choices": [
          "C",
          "？",
          "B",
          "A"
        ],
        "correctIndex": 1
      },
      {
        "question": "「守株待兔」中，「株」是指什麼？",
        "answer": "樹樁",
        "explanation": "「株」指的是露出地面的樹根和樹莖。",
        "choices": [
          "None of the above",
          "The opposite",
          "樹樁s",
          "樹樁"
        ],
        "correctIndex": 3
      },
      {
        "question": "「美麗」的同義詞是？",
        "answer": "漂亮",
        "explanation": "兩者都形容外表好看。",
        "choices": [
          "漂亮",
          "None of the above",
          "The opposite",
          "漂亮s"
        ],
        "correctIndex": 0
      },
      {
        "question": "「畫蛇（ ）足」可以填入哪個字？",
        "answer": "添",
        "explanation": "畫蛇添足，比喻多此一舉。",
        "choices": [
          "添s",
          "添",
          "None of the above",
          "The opposite"
        ],
        "correctIndex": 1
      },
      {
        "question": "「高興」的反義詞是什麼？",
        "answer": "傷心",
        "explanation": "「高興」指情緒良好，相反詞是「傷心」。",
        "choices": [
          "None of the above",
          "傷心s",
          "傷心",
          "The opposite"
        ],
        "correctIndex": 2
      },
      {
        "question": "「高興」的反義詞是什麼？",
        "answer": "傷心",
        "explanation": "「高興」指情緒良好，相反詞是「傷心」。",
        "choices": [
          "None of the above",
          "傷心s",
          "傷心",
          "The opposite"
        ],
        "correctIndex": 2
      },
      {
        "question": "「守株待兔」中，「株」是指什麼？",
        "answer": "樹樁",
        "explanation": "「株」指的是露出地面的樹根和樹莖。",
        "choices": [
          "None of the above",
          "The opposite",
          "樹樁s",
          "樹樁"
        ],
        "correctIndex": 3
      },
      {
        "question": "「井底之（ ）」，括號內是什麼動物？",
        "answer": "蛙",
        "explanation": "井底之蛙，比喻見識淺薄的人。",
        "choices": [
          "蛙",
          "The opposite",
          "蛙s",
          "None of the above"
        ],
        "correctIndex": 0
      },
      {
        "question": "「畫蛇（ ）足」可以填入哪個字？",
        "answer": "添",
        "explanation": "畫蛇添足，比喻多此一舉。",
        "choices": [
          "添s",
          "添",
          "None of the above",
          "The opposite"
        ],
        "correctIndex": 1
      },
      {
        "question": "一（ ）衣服，括號中應填什麼量詞？",
        "answer": "件",
        "explanation": "衣服的量詞通常是用「件」。",
        "choices": [
          "The opposite",
          "件",
          "件s",
          "None of the above"
        ],
        "correctIndex": 1
      },
      {
        "question": "一（ ）衣服，括號中應填什麼量詞？",
        "answer": "件",
        "explanation": "衣服的量詞通常是用「件」。",
        "choices": [
          "The opposite",
          "件",
          "件s",
          "None of the above"
        ],
        "correctIndex": 1
      },
      {
        "question": "「畫蛇（ ）足」可以填入哪個字？",
        "answer": "添",
        "explanation": "畫蛇添足，比喻多此一舉。",
        "choices": [
          "添s",
          "添",
          "None of the above",
          "The opposite"
        ],
        "correctIndex": 1
      },
      {
        "question": "「天空」的量詞是什麼？",
        "answer": "片",
        "explanation": "通常說「一片天空」。",
        "choices": [
          "None of the above",
          "The opposite",
          "片s",
          "片"
        ],
        "correctIndex": 3
      },
      {
        "question": "「狐假虎威」中，是誰借了老虎的威風？",
        "answer": "狐狸",
        "explanation": "狐狸藉著老虎的威風去嚇唬百獸。",
        "choices": [
          "The opposite",
          "狐狸s",
          "None of the above",
          "狐狸"
        ],
        "correctIndex": 3
      },
      {
        "question": "「勇敢」的反義詞是？",
        "answer": "膽小",
        "explanation": "勇敢的反義是膽小或懦弱。",
        "choices": [
          "The opposite",
          "膽小",
          "膽小s",
          "None of the above"
        ],
        "correctIndex": 1
      },
      {
        "question": "「勇敢」的反義詞是？",
        "answer": "膽小",
        "explanation": "勇敢的反義是膽小或懦弱。",
        "choices": [
          "The opposite",
          "膽小",
          "膽小s",
          "None of the above"
        ],
        "correctIndex": 1
      },
      {
        "question": "What does '大' mean? (Gen 0)",
        "answer": "Big",
        "explanation": "'大' means big.",
        "choices": [
          "Small",
          "Good",
          "Bad",
          "Big"
        ],
        "correctIndex": 3
      },
      {
        "question": "What does '大' mean? (Gen 1)",
        "answer": "Big",
        "explanation": "'大' means big.",
        "choices": [
          "Bad",
          "Good",
          "Small",
          "Big"
        ],
        "correctIndex": 3
      },
      {
        "question": "What does '大' mean? (Gen 2)",
        "answer": "Big",
        "explanation": "'大' means big.",
        "choices": [
          "Bad",
          "Small",
          "Good",
          "Big"
        ],
        "correctIndex": 3
      },
      {
        "question": "What does '大' mean? (Gen 3)",
        "answer": "Big",
        "explanation": "'大' means big.",
        "choices": [
          "Big",
          "Small",
          "Good",
          "Bad"
        ],
        "correctIndex": 0
      },
      {
        "question": "What does '大' mean? (Gen 4)",
        "answer": "Big",
        "explanation": "'大' means big.",
        "choices": [
          "Big",
          "Good",
          "Small",
          "Bad"
        ],
        "correctIndex": 0
      },
      {
        "question": "What does '大' mean? (Gen 5)",
        "answer": "Big",
        "explanation": "'大' means big.",
        "choices": [
          "Small",
          "Big",
          "Good",
          "Bad"
        ],
        "correctIndex": 1
      },
      {
        "question": "What does '大' mean? (Gen 6)",
        "answer": "Big",
        "explanation": "'大' means big.",
        "choices": [
          "Good",
          "Small",
          "Bad",
          "Big"
        ],
        "correctIndex": 3
      },
      {
        "question": "What does '大' mean? (Gen 7)",
        "answer": "Big",
        "explanation": "'大' means big.",
        "choices": [
          "Good",
          "Big",
          "Bad",
          "Small"
        ],
        "correctIndex": 1
      },
      {
        "question": "What does '大' mean? (Gen 8)",
        "answer": "Big",
        "explanation": "'大' means big.",
        "choices": [
          "Big",
          "Bad",
          "Small",
          "Good"
        ],
        "correctIndex": 0
      },
      {
        "question": "What does '大' mean? (Gen 9)",
        "answer": "Big",
        "explanation": "'大' means big.",
        "choices": [
          "Small",
          "Good",
          "Big",
          "Bad"
        ],
        "correctIndex": 2
      },
      {
        "question": "What does '大' mean? (Gen 10)",
        "answer": "Big",
        "explanation": "'大' means big.",
        "choices": [
          "Big",
          "Small",
          "Good",
          "Bad"
        ],
        "correctIndex": 0
      },
      {
        "question": "What does '大' mean? (Gen 11)",
        "answer": "Big",
        "explanation": "'大' means big.",
        "choices": [
          "Good",
          "Small",
          "Big",
          "Bad"
        ],
        "correctIndex": 2
      },
      {
        "question": "What does '大' mean? (Gen 12)",
        "answer": "Big",
        "explanation": "'大' means big.",
        "choices": [
          "Small",
          "Good",
          "Big",
          "Bad"
        ],
        "correctIndex": 2
      },
      {
        "question": "What does '大' mean? (Gen 13)",
        "answer": "Big",
        "explanation": "'大' means big.",
        "choices": [
          "Big",
          "Small",
          "Bad",
          "Good"
        ],
        "correctIndex": 0
      },
      {
        "question": "What does '大' mean? (Gen 14)",
        "answer": "Big",
        "explanation": "'大' means big.",
        "choices": [
          "Big",
          "Good",
          "Small",
          "Bad"
        ],
        "correctIndex": 0
      },
      {
        "question": "What does '大' mean? (Gen 15)",
        "answer": "Big",
        "explanation": "'大' means big.",
        "choices": [
          "Good",
          "Bad",
          "Big",
          "Small"
        ],
        "correctIndex": 2
      },
      {
        "question": "What does '大' mean? (Gen 16)",
        "answer": "Big",
        "explanation": "'大' means big.",
        "choices": [
          "Small",
          "Bad",
          "Good",
          "Big"
        ],
        "correctIndex": 3
      },
      {
        "question": "What does '大' mean? (Gen 17)",
        "answer": "Big",
        "explanation": "'大' means big.",
        "choices": [
          "Small",
          "Big",
          "Good",
          "Bad"
        ],
        "correctIndex": 1
      },
      {
        "question": "What does '大' mean? (Gen 18)",
        "answer": "Big",
        "explanation": "'大' means big.",
        "choices": [
          "Small",
          "Bad",
          "Good",
          "Big"
        ],
        "correctIndex": 3
      },
      {
        "question": "What does '大' mean? (Gen 19)",
        "answer": "Big",
        "explanation": "'大' means big.",
        "choices": [
          "Small",
          "Big",
          "Bad",
          "Good"
        ],
        "correctIndex": 1
      }
    ],
    "Year 6": [
      {
        "question": "「草船借箭」是出自哪部古典小說的情節？",
        "answer": "三國演義",
        "explanation": "諸葛亮利用草船向曹操借箭的典故。",
        "choices": [
          "三國演義",
          "None of the above",
          "The opposite",
          "三國演義s"
        ],
        "correctIndex": 0
      },
      {
        "question": "「負隅頑抗」中的「隅」意思是什麼？",
        "answer": "角落/險要處",
        "explanation": "「隅」指角落或地勢險要的地方。",
        "choices": [
          "The opposite",
          "None of the above",
          "角落/險要處s",
          "角落/險要處"
        ],
        "correctIndex": 3
      },
      {
        "question": "「汗牛充棟」是用來形容什麼很多？",
        "answer": "藏書",
        "explanation": "形容書籍極多。",
        "choices": [
          "藏書s",
          "The opposite",
          "藏書",
          "None of the above"
        ],
        "correctIndex": 2
      },
      {
        "question": "「鍥而不捨」比喻什麼？",
        "answer": "做事有恆心",
        "explanation": "「鍥」即雕刻，比喻堅持到底不放棄。",
        "choices": [
          "None of the above",
          "The opposite",
          "做事有恆心",
          "做事有恆心s"
        ],
        "correctIndex": 2
      },
      {
        "question": "「草船借箭」是出自哪部古典小說的情節？",
        "answer": "三國演義",
        "explanation": "諸葛亮利用草船向曹操借箭的典故。",
        "choices": [
          "三國演義",
          "None of the above",
          "The opposite",
          "三國演義s"
        ],
        "correctIndex": 0
      },
      {
        "question": "「鷸蚌相爭，（ ）得利」？",
        "answer": "漁翁",
        "explanation": "比喻兩敗俱傷，讓第三者獲利。",
        "choices": [
          "None of the above",
          "漁翁s",
          "The opposite",
          "漁翁"
        ],
        "correctIndex": 3
      },
      {
        "question": "「鍥而不捨」比喻什麼？",
        "answer": "做事有恆心",
        "explanation": "「鍥」即雕刻，比喻堅持到底不放棄。",
        "choices": [
          "None of the above",
          "The opposite",
          "做事有恆心",
          "做事有恆心s"
        ],
        "correctIndex": 2
      },
      {
        "question": "被稱為「詩仙」的唐代著名詩人是誰？",
        "answer": "李白",
        "explanation": "李白的詩風浪漫奔放，有「詩仙」之稱。",
        "choices": [
          "The opposite",
          "李白s",
          "李白",
          "None of the above"
        ],
        "correctIndex": 2
      },
      {
        "question": "「慷慨」的反義詞是什麼？",
        "answer": "吝嗇",
        "explanation": "慷慨指大方，吝嗇指小氣。",
        "choices": [
          "吝嗇",
          "None of the above",
          "吝嗇s",
          "The opposite"
        ],
        "correctIndex": 0
      },
      {
        "question": "「尖酸刻薄」通常用來形容什麼？",
        "answer": "說話冷酷無情",
        "explanation": "形容說話帶刺、不留情面。",
        "choices": [
          "說話冷酷無情",
          "None of the above",
          "The opposite",
          "說話冷酷無情s"
        ],
        "correctIndex": 0
      },
      {
        "question": "「負隅頑抗」中的「隅」意思是什麼？",
        "answer": "角落/險要處",
        "explanation": "「隅」指角落或地勢險要的地方。",
        "choices": [
          "The opposite",
          "None of the above",
          "角落/險要處s",
          "角落/險要處"
        ],
        "correctIndex": 3
      },
      {
        "question": "《背影》這篇著名散文的作者是誰？",
        "answer": "朱自清",
        "explanation": "《背影》是現代作家朱自清的代表作。",
        "choices": [
          "朱自清",
          "None of the above",
          "朱自清s",
          "The opposite"
        ],
        "correctIndex": 0
      },
      {
        "question": "「慷慨」的反義詞是什麼？",
        "answer": "吝嗇",
        "explanation": "慷慨指大方，吝嗇指小氣。",
        "choices": [
          "吝嗇",
          "None of the above",
          "吝嗇s",
          "The opposite"
        ],
        "correctIndex": 0
      },
      {
        "question": "「鍥而不捨」比喻什麼？",
        "answer": "做事有恆心",
        "explanation": "「鍥」即雕刻，比喻堅持到底不放棄。",
        "choices": [
          "None of the above",
          "The opposite",
          "做事有恆心",
          "做事有恆心s"
        ],
        "correctIndex": 2
      },
      {
        "question": "「草船借箭」是出自哪部古典小說的情節？",
        "answer": "三國演義",
        "explanation": "諸葛亮利用草船向曹操借箭的典故。",
        "choices": [
          "三國演義",
          "None of the above",
          "The opposite",
          "三國演義s"
        ],
        "correctIndex": 0
      },
      {
        "question": "被稱為「詩聖」的唐代著名詩人是誰？",
        "answer": "杜甫",
        "explanation": "杜甫的詩反映現實，被尊為「詩聖」。",
        "choices": [
          "杜甫s",
          "杜甫",
          "None of the above",
          "The opposite"
        ],
        "correctIndex": 1
      },
      {
        "question": "「慷慨」的反義詞是什麼？",
        "answer": "吝嗇",
        "explanation": "慷慨指大方，吝嗇指小氣。",
        "choices": [
          "吝嗇",
          "None of the above",
          "吝嗇s",
          "The opposite"
        ],
        "correctIndex": 0
      },
      {
        "question": "「負隅頑抗」中的「隅」意思是什麼？",
        "answer": "角落/險要處",
        "explanation": "「隅」指角落或地勢險要的地方。",
        "choices": [
          "The opposite",
          "None of the above",
          "角落/險要處s",
          "角落/險要處"
        ],
        "correctIndex": 3
      },
      {
        "question": "《背影》這篇著名散文的作者是誰？",
        "answer": "朱自清",
        "explanation": "《背影》是現代作家朱自清的代表作。",
        "choices": [
          "朱自清",
          "None of the above",
          "朱自清s",
          "The opposite"
        ],
        "correctIndex": 0
      },
      {
        "question": "《背影》這篇著名散文的作者是誰？",
        "answer": "朱自清",
        "explanation": "《背影》是現代作家朱自清的代表作。",
        "choices": [
          "朱自清",
          "None of the above",
          "朱自清s",
          "The opposite"
        ],
        "correctIndex": 0
      },
      {
        "question": "被稱為「詩仙」的唐代著名詩人是誰？",
        "answer": "李白",
        "explanation": "李白的詩風浪漫奔放，有「詩仙」之稱。",
        "choices": [
          "The opposite",
          "李白s",
          "李白",
          "None of the above"
        ],
        "correctIndex": 2
      },
      {
        "question": "「尖酸刻薄」通常用來形容什麼？",
        "answer": "說話冷酷無情",
        "explanation": "形容說話帶刺、不留情面。",
        "choices": [
          "說話冷酷無情",
          "None of the above",
          "The opposite",
          "說話冷酷無情s"
        ],
        "correctIndex": 0
      },
      {
        "question": "「鷸蚌相爭，（ ）得利」？",
        "answer": "漁翁",
        "explanation": "比喻兩敗俱傷，讓第三者獲利。",
        "choices": [
          "None of the above",
          "漁翁s",
          "The opposite",
          "漁翁"
        ],
        "correctIndex": 3
      },
      {
        "question": "被稱為「詩仙」的唐代著名詩人是誰？",
        "answer": "李白",
        "explanation": "李白的詩風浪漫奔放，有「詩仙」之稱。",
        "choices": [
          "The opposite",
          "李白s",
          "李白",
          "None of the above"
        ],
        "correctIndex": 2
      },
      {
        "question": "「汗牛充棟」是用來形容什麼很多？",
        "answer": "藏書",
        "explanation": "形容書籍極多。",
        "choices": [
          "藏書s",
          "The opposite",
          "藏書",
          "None of the above"
        ],
        "correctIndex": 2
      },
      {
        "question": "被稱為「詩聖」的唐代著名詩人是誰？",
        "answer": "杜甫",
        "explanation": "杜甫的詩反映現實，被尊為「詩聖」。",
        "choices": [
          "杜甫s",
          "杜甫",
          "None of the above",
          "The opposite"
        ],
        "correctIndex": 1
      },
      {
        "question": "被稱為「詩聖」的唐代著名詩人是誰？",
        "answer": "杜甫",
        "explanation": "杜甫的詩反映現實，被尊為「詩聖」。",
        "choices": [
          "杜甫s",
          "杜甫",
          "None of the above",
          "The opposite"
        ],
        "correctIndex": 1
      },
      {
        "question": "「鷸蚌相爭，（ ）得利」？",
        "answer": "漁翁",
        "explanation": "比喻兩敗俱傷，讓第三者獲利。",
        "choices": [
          "None of the above",
          "漁翁s",
          "The opposite",
          "漁翁"
        ],
        "correctIndex": 3
      },
      {
        "question": "「尖酸刻薄」通常用來形容什麼？",
        "answer": "說話冷酷無情",
        "explanation": "形容說話帶刺、不留情面。",
        "choices": [
          "說話冷酷無情",
          "None of the above",
          "The opposite",
          "說話冷酷無情s"
        ],
        "correctIndex": 0
      },
      {
        "question": "「汗牛充棟」是用來形容什麼很多？",
        "answer": "藏書",
        "explanation": "形容書籍極多。",
        "choices": [
          "藏書s",
          "The opposite",
          "藏書",
          "None of the above"
        ],
        "correctIndex": 2
      },
      {
        "question": "Which idiom means 'to give up halfway'? (Gen 0)",
        "answer": "半途而废",
        "explanation": "半途而废 means giving up halfway.",
        "choices": [
          "画蛇添足",
          "守株待兔",
          "半途而废",
          "狐假虎威"
        ],
        "correctIndex": 2
      },
      {
        "question": "Which idiom means 'to give up halfway'? (Gen 1)",
        "answer": "半途而废",
        "explanation": "半途而废 means giving up halfway.",
        "choices": [
          "半途而废",
          "守株待兔",
          "狐假虎威",
          "画蛇添足"
        ],
        "correctIndex": 0
      },
      {
        "question": "Which idiom means 'to give up halfway'? (Gen 2)",
        "answer": "半途而废",
        "explanation": "半途而废 means giving up halfway.",
        "choices": [
          "狐假虎威",
          "守株待兔",
          "半途而废",
          "画蛇添足"
        ],
        "correctIndex": 2
      },
      {
        "question": "Which idiom means 'to give up halfway'? (Gen 3)",
        "answer": "半途而废",
        "explanation": "半途而废 means giving up halfway.",
        "choices": [
          "狐假虎威",
          "守株待兔",
          "半途而废",
          "画蛇添足"
        ],
        "correctIndex": 2
      },
      {
        "question": "Which idiom means 'to give up halfway'? (Gen 4)",
        "answer": "半途而废",
        "explanation": "半途而废 means giving up halfway.",
        "choices": [
          "守株待兔",
          "画蛇添足",
          "狐假虎威",
          "半途而废"
        ],
        "correctIndex": 3
      },
      {
        "question": "Which idiom means 'to give up halfway'? (Gen 5)",
        "answer": "半途而废",
        "explanation": "半途而废 means giving up halfway.",
        "choices": [
          "守株待兔",
          "狐假虎威",
          "画蛇添足",
          "半途而废"
        ],
        "correctIndex": 3
      },
      {
        "question": "Which idiom means 'to give up halfway'? (Gen 6)",
        "answer": "半途而废",
        "explanation": "半途而废 means giving up halfway.",
        "choices": [
          "半途而废",
          "守株待兔",
          "狐假虎威",
          "画蛇添足"
        ],
        "correctIndex": 0
      },
      {
        "question": "Which idiom means 'to give up halfway'? (Gen 7)",
        "answer": "半途而废",
        "explanation": "半途而废 means giving up halfway.",
        "choices": [
          "守株待兔",
          "画蛇添足",
          "狐假虎威",
          "半途而废"
        ],
        "correctIndex": 3
      },
      {
        "question": "Which idiom means 'to give up halfway'? (Gen 8)",
        "answer": "半途而废",
        "explanation": "半途而废 means giving up halfway.",
        "choices": [
          "画蛇添足",
          "狐假虎威",
          "半途而废",
          "守株待兔"
        ],
        "correctIndex": 2
      },
      {
        "question": "Which idiom means 'to give up halfway'? (Gen 9)",
        "answer": "半途而废",
        "explanation": "半途而废 means giving up halfway.",
        "choices": [
          "守株待兔",
          "半途而废",
          "画蛇添足",
          "狐假虎威"
        ],
        "correctIndex": 1
      },
      {
        "question": "Which idiom means 'to give up halfway'? (Gen 10)",
        "answer": "半途而废",
        "explanation": "半途而废 means giving up halfway.",
        "choices": [
          "半途而废",
          "狐假虎威",
          "画蛇添足",
          "守株待兔"
        ],
        "correctIndex": 0
      },
      {
        "question": "Which idiom means 'to give up halfway'? (Gen 11)",
        "answer": "半途而废",
        "explanation": "半途而废 means giving up halfway.",
        "choices": [
          "狐假虎威",
          "守株待兔",
          "画蛇添足",
          "半途而废"
        ],
        "correctIndex": 3
      },
      {
        "question": "Which idiom means 'to give up halfway'? (Gen 12)",
        "answer": "半途而废",
        "explanation": "半途而废 means giving up halfway.",
        "choices": [
          "半途而废",
          "画蛇添足",
          "狐假虎威",
          "守株待兔"
        ],
        "correctIndex": 0
      },
      {
        "question": "Which idiom means 'to give up halfway'? (Gen 13)",
        "answer": "半途而废",
        "explanation": "半途而废 means giving up halfway.",
        "choices": [
          "守株待兔",
          "半途而废",
          "画蛇添足",
          "狐假虎威"
        ],
        "correctIndex": 1
      },
      {
        "question": "Which idiom means 'to give up halfway'? (Gen 14)",
        "answer": "半途而废",
        "explanation": "半途而废 means giving up halfway.",
        "choices": [
          "半途而废",
          "狐假虎威",
          "画蛇添足",
          "守株待兔"
        ],
        "correctIndex": 0
      },
      {
        "question": "Which idiom means 'to give up halfway'? (Gen 15)",
        "answer": "半途而废",
        "explanation": "半途而废 means giving up halfway.",
        "choices": [
          "守株待兔",
          "狐假虎威",
          "画蛇添足",
          "半途而废"
        ],
        "correctIndex": 3
      },
      {
        "question": "Which idiom means 'to give up halfway'? (Gen 16)",
        "answer": "半途而废",
        "explanation": "半途而废 means giving up halfway.",
        "choices": [
          "半途而废",
          "守株待兔",
          "狐假虎威",
          "画蛇添足"
        ],
        "correctIndex": 0
      },
      {
        "question": "Which idiom means 'to give up halfway'? (Gen 17)",
        "answer": "半途而废",
        "explanation": "半途而废 means giving up halfway.",
        "choices": [
          "守株待兔",
          "画蛇添足",
          "狐假虎威",
          "半途而废"
        ],
        "correctIndex": 3
      },
      {
        "question": "Which idiom means 'to give up halfway'? (Gen 18)",
        "answer": "半途而废",
        "explanation": "半途而废 means giving up halfway.",
        "choices": [
          "画蛇添足",
          "半途而废",
          "狐假虎威",
          "守株待兔"
        ],
        "correctIndex": 1
      },
      {
        "question": "Which idiom means 'to give up halfway'? (Gen 19)",
        "answer": "半途而废",
        "explanation": "半途而废 means giving up halfway.",
        "choices": [
          "半途而废",
          "狐假虎威",
          "画蛇添足",
          "守株待兔"
        ],
        "correctIndex": 0
      }
    ]
  },
  "11+": {
    "Verbal Reasoning": [
      {
        "question": "Which letter comes next? A, C, E, G, _",
        "answer": "I",
        "explanation": "The sequence skips one letter (+2 positions).",
        "choices": [
          "Is",
          "The opposite",
          "I",
          "None of the above"
        ],
        "correctIndex": 2
      },
      {
        "question": "Which word is the odd one out: Apple, Banana, Carrot, Orange?",
        "answer": "Carrot",
        "explanation": "Carrot is a vegetable, the others are fruits.",
        "choices": [
          "Carrots",
          "Carrot",
          "The opposite",
          "None of the above"
        ],
        "correctIndex": 1
      },
      {
        "question": "Find the missing word: Foot is to Leg as Hand is to _?",
        "answer": "Arm",
        "explanation": "The foot is at the end of the leg, the hand is at the end of the arm.",
        "choices": [
          "Arms",
          "The opposite",
          "None of the above",
          "Arm"
        ],
        "correctIndex": 3
      },
      {
        "question": "What is the synonym of 'Rapid'?",
        "answer": "Fast",
        "explanation": "Rapid means moving or acting very quickly.",
        "choices": [
          "Fast",
          "None of the above",
          "Fasts",
          "The opposite"
        ],
        "correctIndex": 0
      },
      {
        "question": "If CAT is coded as DBU, what is DOG coded as?",
        "answer": "EPH",
        "explanation": "Each letter is shifted 1 place forward in the alphabet.",
        "choices": [
          "None of the above",
          "The opposite",
          "EPHs",
          "EPH"
        ],
        "correctIndex": 3
      },
      {
        "question": "What is the next number: 2, 4, 8, 16, _",
        "answer": "32",
        "explanation": "Each number is multiplied by 2.",
        "choices": [
          "32",
          "33",
          "31",
          "34"
        ],
        "correctIndex": 0
      },
      {
        "question": "Which letter comes next? A, C, E, G, _",
        "answer": "I",
        "explanation": "The sequence skips one letter (+2 positions).",
        "choices": [
          "Is",
          "The opposite",
          "I",
          "None of the above"
        ],
        "correctIndex": 2
      },
      {
        "question": "What is the next number: 2, 4, 8, 16, _",
        "answer": "32",
        "explanation": "Each number is multiplied by 2.",
        "choices": [
          "32",
          "33",
          "31",
          "34"
        ],
        "correctIndex": 0
      },
      {
        "question": "Which letter comes next? A, C, E, G, _",
        "answer": "I",
        "explanation": "The sequence skips one letter (+2 positions).",
        "choices": [
          "Is",
          "The opposite",
          "I",
          "None of the above"
        ],
        "correctIndex": 2
      },
      {
        "question": "Complete the word: S _ C R E T (A hidden piece of information)",
        "answer": "E",
        "explanation": "The word is SECRET.",
        "choices": [
          "E",
          "Es",
          "The opposite",
          "None of the above"
        ],
        "correctIndex": 0
      },
      {
        "question": "Unscramble these letters to find an animal: R T G I E",
        "answer": "TIGER",
        "explanation": "The letters rearrange to spell TIGER.",
        "choices": [
          "The opposite",
          "TIGERs",
          "TIGER",
          "None of the above"
        ],
        "correctIndex": 2
      },
      {
        "question": "Unscramble these letters to find an animal: R T G I E",
        "answer": "TIGER",
        "explanation": "The letters rearrange to spell TIGER.",
        "choices": [
          "The opposite",
          "TIGERs",
          "TIGER",
          "None of the above"
        ],
        "correctIndex": 2
      },
      {
        "question": "What is the synonym of 'Rapid'?",
        "answer": "Fast",
        "explanation": "Rapid means moving or acting very quickly.",
        "choices": [
          "Fast",
          "None of the above",
          "Fasts",
          "The opposite"
        ],
        "correctIndex": 0
      },
      {
        "question": "Which two words are most similar in meaning? Wealthy, Poor, Rich, Smart",
        "answer": "Wealthy and Rich",
        "explanation": "Both mean having a lot of money.",
        "choices": [
          "None of the above",
          "The opposite",
          "Wealthy and Rich",
          "Wealthy and Richs"
        ],
        "correctIndex": 2
      },
      {
        "question": "If HOT is to COLD, what is HIGH to?",
        "answer": "LOW",
        "explanation": "They are opposites (antonyms).",
        "choices": [
          "None of the above",
          "The opposite",
          "LOW",
          "LOWs"
        ],
        "correctIndex": 2
      },
      {
        "question": "If HOT is to COLD, what is HIGH to?",
        "answer": "LOW",
        "explanation": "They are opposites (antonyms).",
        "choices": [
          "None of the above",
          "The opposite",
          "LOW",
          "LOWs"
        ],
        "correctIndex": 2
      },
      {
        "question": "What is the next number: 2, 4, 8, 16, _",
        "answer": "32",
        "explanation": "Each number is multiplied by 2.",
        "choices": [
          "32",
          "33",
          "31",
          "34"
        ],
        "correctIndex": 0
      },
      {
        "question": "Find the missing word: Foot is to Leg as Hand is to _?",
        "answer": "Arm",
        "explanation": "The foot is at the end of the leg, the hand is at the end of the arm.",
        "choices": [
          "Arms",
          "The opposite",
          "None of the above",
          "Arm"
        ],
        "correctIndex": 3
      },
      {
        "question": "What is the synonym of 'Rapid'?",
        "answer": "Fast",
        "explanation": "Rapid means moving or acting very quickly.",
        "choices": [
          "Fast",
          "None of the above",
          "Fasts",
          "The opposite"
        ],
        "correctIndex": 0
      },
      {
        "question": "If HOT is to COLD, what is HIGH to?",
        "answer": "LOW",
        "explanation": "They are opposites (antonyms).",
        "choices": [
          "None of the above",
          "The opposite",
          "LOW",
          "LOWs"
        ],
        "correctIndex": 2
      },
      {
        "question": "Complete the word: S _ C R E T (A hidden piece of information)",
        "answer": "E",
        "explanation": "The word is SECRET.",
        "choices": [
          "E",
          "Es",
          "The opposite",
          "None of the above"
        ],
        "correctIndex": 0
      },
      {
        "question": "Complete the word: S _ C R E T (A hidden piece of information)",
        "answer": "E",
        "explanation": "The word is SECRET.",
        "choices": [
          "E",
          "Es",
          "The opposite",
          "None of the above"
        ],
        "correctIndex": 0
      },
      {
        "question": "Find the missing word: Foot is to Leg as Hand is to _?",
        "answer": "Arm",
        "explanation": "The foot is at the end of the leg, the hand is at the end of the arm.",
        "choices": [
          "Arms",
          "The opposite",
          "None of the above",
          "Arm"
        ],
        "correctIndex": 3
      },
      {
        "question": "If CAT is coded as DBU, what is DOG coded as?",
        "answer": "EPH",
        "explanation": "Each letter is shifted 1 place forward in the alphabet.",
        "choices": [
          "None of the above",
          "The opposite",
          "EPHs",
          "EPH"
        ],
        "correctIndex": 3
      },
      {
        "question": "Which two words are most similar in meaning? Wealthy, Poor, Rich, Smart",
        "answer": "Wealthy and Rich",
        "explanation": "Both mean having a lot of money.",
        "choices": [
          "None of the above",
          "The opposite",
          "Wealthy and Rich",
          "Wealthy and Richs"
        ],
        "correctIndex": 2
      },
      {
        "question": "Which word is the odd one out: Apple, Banana, Carrot, Orange?",
        "answer": "Carrot",
        "explanation": "Carrot is a vegetable, the others are fruits.",
        "choices": [
          "Carrots",
          "Carrot",
          "The opposite",
          "None of the above"
        ],
        "correctIndex": 1
      },
      {
        "question": "Which word is the odd one out: Apple, Banana, Carrot, Orange?",
        "answer": "Carrot",
        "explanation": "Carrot is a vegetable, the others are fruits.",
        "choices": [
          "Carrots",
          "Carrot",
          "The opposite",
          "None of the above"
        ],
        "correctIndex": 1
      },
      {
        "question": "Unscramble these letters to find an animal: R T G I E",
        "answer": "TIGER",
        "explanation": "The letters rearrange to spell TIGER.",
        "choices": [
          "The opposite",
          "TIGERs",
          "TIGER",
          "None of the above"
        ],
        "correctIndex": 2
      },
      {
        "question": "Which two words are most similar in meaning? Wealthy, Poor, Rich, Smart",
        "answer": "Wealthy and Rich",
        "explanation": "Both mean having a lot of money.",
        "choices": [
          "None of the above",
          "The opposite",
          "Wealthy and Rich",
          "Wealthy and Richs"
        ],
        "correctIndex": 2
      },
      {
        "question": "If CAT is coded as DBU, what is DOG coded as?",
        "answer": "EPH",
        "explanation": "Each letter is shifted 1 place forward in the alphabet.",
        "choices": [
          "None of the above",
          "The opposite",
          "EPHs",
          "EPH"
        ],
        "correctIndex": 3
      },
      {
        "question": "Which word is the odd one out? (Gen 0)",
        "answer": "Apple",
        "explanation": "Apple is a fruit, others are vehicles.",
        "choices": [
          "Car",
          "Bus",
          "Train",
          "Apple"
        ],
        "correctIndex": 3
      },
      {
        "question": "Which word is the odd one out? (Gen 1)",
        "answer": "Apple",
        "explanation": "Apple is a fruit, others are vehicles.",
        "choices": [
          "Apple",
          "Train",
          "Bus",
          "Car"
        ],
        "correctIndex": 0
      },
      {
        "question": "Which word is the odd one out? (Gen 2)",
        "answer": "Apple",
        "explanation": "Apple is a fruit, others are vehicles.",
        "choices": [
          "Bus",
          "Train",
          "Car",
          "Apple"
        ],
        "correctIndex": 3
      },
      {
        "question": "Which word is the odd one out? (Gen 3)",
        "answer": "Apple",
        "explanation": "Apple is a fruit, others are vehicles.",
        "choices": [
          "Apple",
          "Bus",
          "Train",
          "Car"
        ],
        "correctIndex": 0
      },
      {
        "question": "Which word is the odd one out? (Gen 4)",
        "answer": "Apple",
        "explanation": "Apple is a fruit, others are vehicles.",
        "choices": [
          "Bus",
          "Apple",
          "Train",
          "Car"
        ],
        "correctIndex": 1
      },
      {
        "question": "Which word is the odd one out? (Gen 5)",
        "answer": "Apple",
        "explanation": "Apple is a fruit, others are vehicles.",
        "choices": [
          "Bus",
          "Car",
          "Apple",
          "Train"
        ],
        "correctIndex": 2
      },
      {
        "question": "Which word is the odd one out? (Gen 6)",
        "answer": "Apple",
        "explanation": "Apple is a fruit, others are vehicles.",
        "choices": [
          "Bus",
          "Apple",
          "Car",
          "Train"
        ],
        "correctIndex": 1
      },
      {
        "question": "Which word is the odd one out? (Gen 7)",
        "answer": "Apple",
        "explanation": "Apple is a fruit, others are vehicles.",
        "choices": [
          "Train",
          "Apple",
          "Car",
          "Bus"
        ],
        "correctIndex": 1
      },
      {
        "question": "Which word is the odd one out? (Gen 8)",
        "answer": "Apple",
        "explanation": "Apple is a fruit, others are vehicles.",
        "choices": [
          "Bus",
          "Train",
          "Car",
          "Apple"
        ],
        "correctIndex": 3
      },
      {
        "question": "Which word is the odd one out? (Gen 9)",
        "answer": "Apple",
        "explanation": "Apple is a fruit, others are vehicles.",
        "choices": [
          "Car",
          "Apple",
          "Bus",
          "Train"
        ],
        "correctIndex": 1
      },
      {
        "question": "Which word is the odd one out? (Gen 10)",
        "answer": "Apple",
        "explanation": "Apple is a fruit, others are vehicles.",
        "choices": [
          "Train",
          "Bus",
          "Apple",
          "Car"
        ],
        "correctIndex": 2
      },
      {
        "question": "Which word is the odd one out? (Gen 11)",
        "answer": "Apple",
        "explanation": "Apple is a fruit, others are vehicles.",
        "choices": [
          "Car",
          "Bus",
          "Apple",
          "Train"
        ],
        "correctIndex": 2
      },
      {
        "question": "Which word is the odd one out? (Gen 12)",
        "answer": "Apple",
        "explanation": "Apple is a fruit, others are vehicles.",
        "choices": [
          "Car",
          "Apple",
          "Bus",
          "Train"
        ],
        "correctIndex": 1
      },
      {
        "question": "Which word is the odd one out? (Gen 13)",
        "answer": "Apple",
        "explanation": "Apple is a fruit, others are vehicles.",
        "choices": [
          "Train",
          "Car",
          "Bus",
          "Apple"
        ],
        "correctIndex": 3
      },
      {
        "question": "Which word is the odd one out? (Gen 14)",
        "answer": "Apple",
        "explanation": "Apple is a fruit, others are vehicles.",
        "choices": [
          "Apple",
          "Bus",
          "Train",
          "Car"
        ],
        "correctIndex": 0
      },
      {
        "question": "Which word is the odd one out? (Gen 15)",
        "answer": "Apple",
        "explanation": "Apple is a fruit, others are vehicles.",
        "choices": [
          "Car",
          "Bus",
          "Apple",
          "Train"
        ],
        "correctIndex": 2
      },
      {
        "question": "Which word is the odd one out? (Gen 16)",
        "answer": "Apple",
        "explanation": "Apple is a fruit, others are vehicles.",
        "choices": [
          "Apple",
          "Train",
          "Bus",
          "Car"
        ],
        "correctIndex": 0
      },
      {
        "question": "Which word is the odd one out? (Gen 17)",
        "answer": "Apple",
        "explanation": "Apple is a fruit, others are vehicles.",
        "choices": [
          "Car",
          "Train",
          "Bus",
          "Apple"
        ],
        "correctIndex": 3
      },
      {
        "question": "Which word is the odd one out? (Gen 18)",
        "answer": "Apple",
        "explanation": "Apple is a fruit, others are vehicles.",
        "choices": [
          "Apple",
          "Car",
          "Bus",
          "Train"
        ],
        "correctIndex": 0
      },
      {
        "question": "Which word is the odd one out? (Gen 19)",
        "answer": "Apple",
        "explanation": "Apple is a fruit, others are vehicles.",
        "choices": [
          "Car",
          "Bus",
          "Train",
          "Apple"
        ],
        "correctIndex": 3
      }
    ],
    "English & Maths": [
      {
        "question": "Solve for x: 3x - 5 = 16",
        "answer": "7",
        "explanation": "Add 5 to both sides: 3x = 21. Divide by 3: x = 7.",
        "choices": [
          "6",
          "9",
          "8",
          "7"
        ],
        "correctIndex": 3
      },
      {
        "question": "Solve for x: 3x - 5 = 16",
        "answer": "7",
        "explanation": "Add 5 to both sides: 3x = 21. Divide by 3: x = 7.",
        "choices": [
          "6",
          "9",
          "8",
          "7"
        ],
        "correctIndex": 3
      },
      {
        "question": "Change this sentence to passive voice: 'The mechanic fixed the car.'",
        "answer": "The car was fixed by the mechanic.",
        "explanation": "The object (car) becomes the subject of the passive sentence.",
        "choices": [
          "The car was fixed by the mechanic.s",
          "The opposite",
          "None of the above",
          "The car was fixed by the mechanic."
        ],
        "correctIndex": 3
      },
      {
        "question": "What is the spelling of the 12th month of the year?",
        "answer": "December",
        "explanation": "January is 1st, December is 12th.",
        "choices": [
          "Decembers",
          "The opposite",
          "None of the above",
          "December"
        ],
        "correctIndex": 3
      },
      {
        "question": "If a square has a perimeter of 24cm, what is its area?",
        "answer": "36cm²",
        "explanation": "Side length = 24 ÷ 4 = 6cm. Area = 6 × 6 = 36.",
        "choices": [
          "12cm²",
          "48cm²",
          "20cm²",
          "36cm²"
        ],
        "correctIndex": 3
      },
      {
        "question": "What is the spelling of the 12th month of the year?",
        "answer": "December",
        "explanation": "January is 1st, December is 12th.",
        "choices": [
          "Decembers",
          "The opposite",
          "None of the above",
          "December"
        ],
        "correctIndex": 3
      },
      {
        "question": "Identify the main verb: 'The blue bird gracefully flew across the sky.'",
        "answer": "flew",
        "explanation": "'flew' is the action word.",
        "choices": [
          "flew",
          "None of the above",
          "The opposite",
          "flews"
        ],
        "correctIndex": 0
      },
      {
        "question": "What is 3 squared plus 4 squared?",
        "answer": "25",
        "explanation": "3² = 9, 4² = 16. 9 + 16 = 25.",
        "choices": [
          "27",
          "25",
          "26",
          "24"
        ],
        "correctIndex": 1
      },
      {
        "question": "What is 15% of 200?",
        "answer": "30",
        "explanation": "10% is 20, 5% is 10. 20 + 10 = 30.",
        "choices": [
          "32",
          "30",
          "29",
          "31"
        ],
        "correctIndex": 1
      },
      {
        "question": "Change this sentence to passive voice: 'The mechanic fixed the car.'",
        "answer": "The car was fixed by the mechanic.",
        "explanation": "The object (car) becomes the subject of the passive sentence.",
        "choices": [
          "The car was fixed by the mechanic.s",
          "The opposite",
          "None of the above",
          "The car was fixed by the mechanic."
        ],
        "correctIndex": 3
      },
      {
        "question": "If 4 tickets cost £12, how much do 7 tickets cost?",
        "answer": "£21",
        "explanation": "1 ticket = £12 ÷ 4 = £3. 7 tickets = 7 × £3 = £21.",
        "choices": [
          "£21",
          "A",
          "B",
          "C"
        ],
        "correctIndex": 0
      },
      {
        "question": "If 4 tickets cost £12, how much do 7 tickets cost?",
        "answer": "£21",
        "explanation": "1 ticket = £12 ÷ 4 = £3. 7 tickets = 7 × £3 = £21.",
        "choices": [
          "£21",
          "A",
          "B",
          "C"
        ],
        "correctIndex": 0
      },
      {
        "question": "Choose the correct spelling: Acommodate / Accommodate / Accomodate",
        "answer": "Accommodate",
        "explanation": "It has two 'c's and two 'm's.",
        "choices": [
          "The opposite",
          "Accommodate",
          "None of the above",
          "Accommodates"
        ],
        "correctIndex": 1
      },
      {
        "question": "A train leaves at 08:45 and takes 40 minutes. What time does it arrive?",
        "answer": "09:25",
        "explanation": "Add 40 mins to 08:45 -> 15 mins to 09:00, plus 25 mins = 09:25.",
        "choices": [
          "09:25",
          "A",
          "B",
          "C"
        ],
        "correctIndex": 0
      },
      {
        "question": "What is the spelling of the 12th month of the year?",
        "answer": "December",
        "explanation": "January is 1st, December is 12th.",
        "choices": [
          "Decembers",
          "The opposite",
          "None of the above",
          "December"
        ],
        "correctIndex": 3
      },
      {
        "question": "If a square has a perimeter of 24cm, what is its area?",
        "answer": "36cm²",
        "explanation": "Side length = 24 ÷ 4 = 6cm. Area = 6 × 6 = 36.",
        "choices": [
          "12cm²",
          "48cm²",
          "20cm²",
          "36cm²"
        ],
        "correctIndex": 3
      },
      {
        "question": "What is 15% of 200?",
        "answer": "30",
        "explanation": "10% is 20, 5% is 10. 20 + 10 = 30.",
        "choices": [
          "32",
          "30",
          "29",
          "31"
        ],
        "correctIndex": 1
      },
      {
        "question": "Identify the main verb: 'The blue bird gracefully flew across the sky.'",
        "answer": "flew",
        "explanation": "'flew' is the action word.",
        "choices": [
          "flew",
          "None of the above",
          "The opposite",
          "flews"
        ],
        "correctIndex": 0
      },
      {
        "question": "Change this sentence to passive voice: 'The mechanic fixed the car.'",
        "answer": "The car was fixed by the mechanic.",
        "explanation": "The object (car) becomes the subject of the passive sentence.",
        "choices": [
          "The car was fixed by the mechanic.s",
          "The opposite",
          "None of the above",
          "The car was fixed by the mechanic."
        ],
        "correctIndex": 3
      },
      {
        "question": "Choose the correct spelling: Acommodate / Accommodate / Accomodate",
        "answer": "Accommodate",
        "explanation": "It has two 'c's and two 'm's.",
        "choices": [
          "The opposite",
          "Accommodate",
          "None of the above",
          "Accommodates"
        ],
        "correctIndex": 1
      },
      {
        "question": "What is 3 squared plus 4 squared?",
        "answer": "25",
        "explanation": "3² = 9, 4² = 16. 9 + 16 = 25.",
        "choices": [
          "27",
          "25",
          "26",
          "24"
        ],
        "correctIndex": 1
      },
      {
        "question": "Identify the main verb: 'The blue bird gracefully flew across the sky.'",
        "answer": "flew",
        "explanation": "'flew' is the action word.",
        "choices": [
          "flew",
          "None of the above",
          "The opposite",
          "flews"
        ],
        "correctIndex": 0
      },
      {
        "question": "What is 15% of 200?",
        "answer": "30",
        "explanation": "10% is 20, 5% is 10. 20 + 10 = 30.",
        "choices": [
          "32",
          "30",
          "29",
          "31"
        ],
        "correctIndex": 1
      },
      {
        "question": "What is 3 squared plus 4 squared?",
        "answer": "25",
        "explanation": "3² = 9, 4² = 16. 9 + 16 = 25.",
        "choices": [
          "27",
          "25",
          "26",
          "24"
        ],
        "correctIndex": 1
      },
      {
        "question": "Choose the correct spelling: Acommodate / Accommodate / Accomodate",
        "answer": "Accommodate",
        "explanation": "It has two 'c's and two 'm's.",
        "choices": [
          "The opposite",
          "Accommodate",
          "None of the above",
          "Accommodates"
        ],
        "correctIndex": 1
      },
      {
        "question": "Solve for x: 3x - 5 = 16",
        "answer": "7",
        "explanation": "Add 5 to both sides: 3x = 21. Divide by 3: x = 7.",
        "choices": [
          "6",
          "9",
          "8",
          "7"
        ],
        "correctIndex": 3
      },
      {
        "question": "If a square has a perimeter of 24cm, what is its area?",
        "answer": "36cm²",
        "explanation": "Side length = 24 ÷ 4 = 6cm. Area = 6 × 6 = 36.",
        "choices": [
          "12cm²",
          "48cm²",
          "20cm²",
          "36cm²"
        ],
        "correctIndex": 3
      },
      {
        "question": "A train leaves at 08:45 and takes 40 minutes. What time does it arrive?",
        "answer": "09:25",
        "explanation": "Add 40 mins to 08:45 -> 15 mins to 09:00, plus 25 mins = 09:25.",
        "choices": [
          "09:25",
          "A",
          "B",
          "C"
        ],
        "correctIndex": 0
      },
      {
        "question": "If 4 tickets cost £12, how much do 7 tickets cost?",
        "answer": "£21",
        "explanation": "1 ticket = £12 ÷ 4 = £3. 7 tickets = 7 × £3 = £21.",
        "choices": [
          "£21",
          "A",
          "B",
          "C"
        ],
        "correctIndex": 0
      },
      {
        "question": "A train leaves at 08:45 and takes 40 minutes. What time does it arrive?",
        "answer": "09:25",
        "explanation": "Add 40 mins to 08:45 -> 15 mins to 09:00, plus 25 mins = 09:25.",
        "choices": [
          "09:25",
          "A",
          "B",
          "C"
        ],
        "correctIndex": 0
      },
      {
        "question": "If a train leaves at 10:00 and travels for 2 hours, what time does it arrive? (Gen 0)",
        "answer": "12:00",
        "explanation": "10:00 + 2 hours is 12:00.",
        "choices": [
          "11:00",
          "13:00",
          "14:00",
          "12:00"
        ],
        "correctIndex": 3
      },
      {
        "question": "If a train leaves at 10:00 and travels for 2 hours, what time does it arrive? (Gen 1)",
        "answer": "12:00",
        "explanation": "10:00 + 2 hours is 12:00.",
        "choices": [
          "11:00",
          "13:00",
          "12:00",
          "14:00"
        ],
        "correctIndex": 2
      },
      {
        "question": "If a train leaves at 10:00 and travels for 2 hours, what time does it arrive? (Gen 2)",
        "answer": "12:00",
        "explanation": "10:00 + 2 hours is 12:00.",
        "choices": [
          "13:00",
          "14:00",
          "11:00",
          "12:00"
        ],
        "correctIndex": 3
      },
      {
        "question": "If a train leaves at 10:00 and travels for 2 hours, what time does it arrive? (Gen 3)",
        "answer": "12:00",
        "explanation": "10:00 + 2 hours is 12:00.",
        "choices": [
          "13:00",
          "11:00",
          "14:00",
          "12:00"
        ],
        "correctIndex": 3
      },
      {
        "question": "If a train leaves at 10:00 and travels for 2 hours, what time does it arrive? (Gen 4)",
        "answer": "12:00",
        "explanation": "10:00 + 2 hours is 12:00.",
        "choices": [
          "14:00",
          "11:00",
          "13:00",
          "12:00"
        ],
        "correctIndex": 3
      },
      {
        "question": "If a train leaves at 10:00 and travels for 2 hours, what time does it arrive? (Gen 5)",
        "answer": "12:00",
        "explanation": "10:00 + 2 hours is 12:00.",
        "choices": [
          "12:00",
          "13:00",
          "14:00",
          "11:00"
        ],
        "correctIndex": 0
      },
      {
        "question": "If a train leaves at 10:00 and travels for 2 hours, what time does it arrive? (Gen 6)",
        "answer": "12:00",
        "explanation": "10:00 + 2 hours is 12:00.",
        "choices": [
          "14:00",
          "12:00",
          "11:00",
          "13:00"
        ],
        "correctIndex": 1
      },
      {
        "question": "If a train leaves at 10:00 and travels for 2 hours, what time does it arrive? (Gen 7)",
        "answer": "12:00",
        "explanation": "10:00 + 2 hours is 12:00.",
        "choices": [
          "14:00",
          "12:00",
          "13:00",
          "11:00"
        ],
        "correctIndex": 1
      },
      {
        "question": "If a train leaves at 10:00 and travels for 2 hours, what time does it arrive? (Gen 8)",
        "answer": "12:00",
        "explanation": "10:00 + 2 hours is 12:00.",
        "choices": [
          "11:00",
          "13:00",
          "14:00",
          "12:00"
        ],
        "correctIndex": 3
      },
      {
        "question": "If a train leaves at 10:00 and travels for 2 hours, what time does it arrive? (Gen 9)",
        "answer": "12:00",
        "explanation": "10:00 + 2 hours is 12:00.",
        "choices": [
          "14:00",
          "12:00",
          "13:00",
          "11:00"
        ],
        "correctIndex": 1
      },
      {
        "question": "If a train leaves at 10:00 and travels for 2 hours, what time does it arrive? (Gen 10)",
        "answer": "12:00",
        "explanation": "10:00 + 2 hours is 12:00.",
        "choices": [
          "12:00",
          "11:00",
          "14:00",
          "13:00"
        ],
        "correctIndex": 0
      },
      {
        "question": "If a train leaves at 10:00 and travels for 2 hours, what time does it arrive? (Gen 11)",
        "answer": "12:00",
        "explanation": "10:00 + 2 hours is 12:00.",
        "choices": [
          "11:00",
          "13:00",
          "12:00",
          "14:00"
        ],
        "correctIndex": 2
      },
      {
        "question": "If a train leaves at 10:00 and travels for 2 hours, what time does it arrive? (Gen 12)",
        "answer": "12:00",
        "explanation": "10:00 + 2 hours is 12:00.",
        "choices": [
          "12:00",
          "13:00",
          "14:00",
          "11:00"
        ],
        "correctIndex": 0
      },
      {
        "question": "If a train leaves at 10:00 and travels for 2 hours, what time does it arrive? (Gen 13)",
        "answer": "12:00",
        "explanation": "10:00 + 2 hours is 12:00.",
        "choices": [
          "11:00",
          "13:00",
          "14:00",
          "12:00"
        ],
        "correctIndex": 3
      },
      {
        "question": "If a train leaves at 10:00 and travels for 2 hours, what time does it arrive? (Gen 14)",
        "answer": "12:00",
        "explanation": "10:00 + 2 hours is 12:00.",
        "choices": [
          "12:00",
          "11:00",
          "13:00",
          "14:00"
        ],
        "correctIndex": 0
      },
      {
        "question": "If a train leaves at 10:00 and travels for 2 hours, what time does it arrive? (Gen 15)",
        "answer": "12:00",
        "explanation": "10:00 + 2 hours is 12:00.",
        "choices": [
          "14:00",
          "12:00",
          "11:00",
          "13:00"
        ],
        "correctIndex": 1
      },
      {
        "question": "If a train leaves at 10:00 and travels for 2 hours, what time does it arrive? (Gen 16)",
        "answer": "12:00",
        "explanation": "10:00 + 2 hours is 12:00.",
        "choices": [
          "12:00",
          "11:00",
          "14:00",
          "13:00"
        ],
        "correctIndex": 0
      },
      {
        "question": "If a train leaves at 10:00 and travels for 2 hours, what time does it arrive? (Gen 17)",
        "answer": "12:00",
        "explanation": "10:00 + 2 hours is 12:00.",
        "choices": [
          "12:00",
          "14:00",
          "13:00",
          "11:00"
        ],
        "correctIndex": 0
      },
      {
        "question": "If a train leaves at 10:00 and travels for 2 hours, what time does it arrive? (Gen 18)",
        "answer": "12:00",
        "explanation": "10:00 + 2 hours is 12:00.",
        "choices": [
          "12:00",
          "13:00",
          "14:00",
          "11:00"
        ],
        "correctIndex": 0
      },
      {
        "question": "If a train leaves at 10:00 and travels for 2 hours, what time does it arrive? (Gen 19)",
        "answer": "12:00",
        "explanation": "10:00 + 2 hours is 12:00.",
        "choices": [
          "11:00",
          "12:00",
          "14:00",
          "13:00"
        ],
        "correctIndex": 1
      }
    ]
  }
};
