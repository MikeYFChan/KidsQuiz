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
        "question": "What is 84 ÷ 7?",
        "answer": "12",
        "explanation": "84 ÷ 7 = 12",
        "choices": [
          "10",
          "12",
          "22",
          "11"
        ],
        "correctIndex": 1
      },
      {
        "question": "What is 51 - 39?",
        "answer": "12",
        "explanation": "51 - 39 = 12",
        "choices": [
          "10",
          "22",
          "11",
          "12"
        ],
        "correctIndex": 3
      },
      {
        "question": "What is 82 + 24?",
        "answer": "106",
        "explanation": "82 + 24 = 106",
        "choices": [
          "107",
          "105",
          "116",
          "106"
        ],
        "correctIndex": 3
      },
      {
        "question": "What is 3 × 4?",
        "answer": "12",
        "explanation": "3 × 4 = 12",
        "choices": [
          "10",
          "12",
          "11",
          "22"
        ],
        "correctIndex": 1
      },
      {
        "question": "What is 11 × 4?",
        "answer": "44",
        "explanation": "11 × 4 = 44",
        "choices": [
          "54",
          "44",
          "45",
          "42"
        ],
        "correctIndex": 1
      },
      {
        "question": "What is 57 + 23?",
        "answer": "80",
        "explanation": "57 + 23 = 80",
        "choices": [
          "90",
          "80",
          "78",
          "81"
        ],
        "correctIndex": 1
      },
      {
        "question": "What is 50 + 68?",
        "answer": "118",
        "explanation": "50 + 68 = 118",
        "choices": [
          "118",
          "116",
          "117",
          "128"
        ],
        "correctIndex": 0
      },
      {
        "question": "What is 98 + 37?",
        "answer": "135",
        "explanation": "98 + 37 = 135",
        "choices": [
          "135",
          "134",
          "136",
          "133"
        ],
        "correctIndex": 0
      },
      {
        "question": "What is 29 + 12?",
        "answer": "41",
        "explanation": "29 + 12 = 41",
        "choices": [
          "42",
          "39",
          "41",
          "51"
        ],
        "correctIndex": 2
      },
      {
        "question": "What is 99 - 29?",
        "answer": "70",
        "explanation": "99 - 29 = 70",
        "choices": [
          "70",
          "80",
          "68",
          "69"
        ],
        "correctIndex": 0
      },
      {
        "question": "What is 9 × 3?",
        "answer": "27",
        "explanation": "9 × 3 = 27",
        "choices": [
          "27",
          "25",
          "37",
          "26"
        ],
        "correctIndex": 0
      },
      {
        "question": "What is 66 + 21?",
        "answer": "87",
        "explanation": "66 + 21 = 87",
        "choices": [
          "88",
          "86",
          "87",
          "97"
        ],
        "correctIndex": 2
      },
      {
        "question": "What is 90 ÷ 9?",
        "answer": "10",
        "explanation": "90 ÷ 9 = 10",
        "choices": [
          "20",
          "11",
          "10",
          "8"
        ],
        "correctIndex": 2
      },
      {
        "question": "What is 97 - 47?",
        "answer": "50",
        "explanation": "97 - 47 = 50",
        "choices": [
          "50",
          "60",
          "49",
          "48"
        ],
        "correctIndex": 0
      },
      {
        "question": "What is 12 + 92?",
        "answer": "104",
        "explanation": "12 + 92 = 104",
        "choices": [
          "103",
          "104",
          "105",
          "102"
        ],
        "correctIndex": 1
      },
      {
        "question": "What is 21 - 17?",
        "answer": "4",
        "explanation": "21 - 17 = 4",
        "choices": [
          "3",
          "4",
          "5",
          "14"
        ],
        "correctIndex": 1
      },
      {
        "question": "What is 3 × 8?",
        "answer": "24",
        "explanation": "3 × 8 = 24",
        "choices": [
          "22",
          "23",
          "25",
          "24"
        ],
        "correctIndex": 3
      },
      {
        "question": "What is 72 ÷ 9?",
        "answer": "8",
        "explanation": "72 ÷ 9 = 8",
        "choices": [
          "18",
          "7",
          "8",
          "6"
        ],
        "correctIndex": 2
      },
      {
        "question": "What is 49 + 94?",
        "answer": "143",
        "explanation": "49 + 94 = 143",
        "choices": [
          "141",
          "153",
          "143",
          "142"
        ],
        "correctIndex": 2
      },
      {
        "question": "What is 80 - 29?",
        "answer": "51",
        "explanation": "80 - 29 = 51",
        "choices": [
          "61",
          "52",
          "51",
          "49"
        ],
        "correctIndex": 2
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
        "question": "If 3x + 3 = 33, what is x?",
        "answer": "10",
        "explanation": "Subtract 3, divide by 3.",
        "choices": [
          "8",
          "15",
          "11",
          "10"
        ],
        "correctIndex": 3
      },
      {
        "question": "What is 1/10 of 120?",
        "answer": "12",
        "explanation": "Divide by 10, then multiply by 1.",
        "choices": [
          "10",
          "12",
          "13",
          "11"
        ],
        "correctIndex": 1
      },
      {
        "question": "What is 2.7 + 3.4?",
        "answer": "6.1",
        "explanation": "Add the decimals to get 6.1.",
        "choices": [
          "7.3",
          "6.0",
          "7.1",
          "6.1"
        ],
        "correctIndex": 3
      },
      {
        "question": "What is 20% of 110?",
        "answer": "22",
        "explanation": "20% is the same as 20/100 × 110.",
        "choices": [
          "23",
          "21",
          "20",
          "22"
        ],
        "correctIndex": 3
      },
      {
        "question": "If 4x + 8 = 20, what is x?",
        "answer": "3",
        "explanation": "Subtract 8, divide by 4.",
        "choices": [
          "3",
          "8",
          "1",
          "4"
        ],
        "correctIndex": 0
      },
      {
        "question": "If 6x + 9 = 57, what is x?",
        "answer": "8",
        "explanation": "Subtract 9, divide by 6.",
        "choices": [
          "8",
          "13",
          "6",
          "7"
        ],
        "correctIndex": 0
      },
      {
        "question": "What is 25% of 160?",
        "answer": "40",
        "explanation": "25% is the same as 25/100 × 160.",
        "choices": [
          "40",
          "41",
          "39",
          "38"
        ],
        "correctIndex": 0
      },
      {
        "question": "If 5x + 5 = 50, what is x?",
        "answer": "9",
        "explanation": "Subtract 5, divide by 5.",
        "choices": [
          "10",
          "7",
          "8",
          "9"
        ],
        "correctIndex": 3
      },
      {
        "question": "What is 5.8 + 6.8?",
        "answer": "12.6",
        "explanation": "Add the decimals to get 12.6.",
        "choices": [
          "12.6",
          "13.1",
          "12.5",
          "13.6"
        ],
        "correctIndex": 0
      },
      {
        "question": "What is 50% of 70?",
        "answer": "35",
        "explanation": "50% is the same as 50/100 × 70.",
        "choices": [
          "35",
          "36",
          "40",
          "33"
        ],
        "correctIndex": 0
      },
      {
        "question": "What is 5/10 of 80?",
        "answer": "40",
        "explanation": "Divide by 10, then multiply by 5.",
        "choices": [
          "38",
          "39",
          "40",
          "41"
        ],
        "correctIndex": 2
      },
      {
        "question": "What is 4.5 + 8.2?",
        "answer": "12.7",
        "explanation": "Add the decimals to get 12.7.",
        "choices": [
          "12.7",
          "13.2",
          "13.7",
          "12.6"
        ],
        "correctIndex": 0
      },
      {
        "question": "If 2x + 6 = 12, what is x?",
        "answer": "3",
        "explanation": "Subtract 6, divide by 2.",
        "choices": [
          "1",
          "8",
          "3",
          "4"
        ],
        "correctIndex": 2
      },
      {
        "question": "What is 3.4 + 8.2?",
        "answer": "11.6",
        "explanation": "Add the decimals to get 11.6.",
        "choices": [
          "12.6",
          "11.6",
          "11.5",
          "12.8"
        ],
        "correctIndex": 1
      },
      {
        "question": "What is 2/2 of 12?",
        "answer": "12",
        "explanation": "Divide by 2, then multiply by 2.",
        "choices": [
          "11",
          "12",
          "13",
          "10"
        ],
        "correctIndex": 1
      },
      {
        "question": "What is 5.9 + 8.1?",
        "answer": "14.0",
        "explanation": "Add the decimals to get 14.0.",
        "choices": [
          "14.5",
          "14.0",
          "15.2",
          "15.0"
        ],
        "correctIndex": 1
      },
      {
        "question": "If 2x + 4 = 22, what is x?",
        "answer": "9",
        "explanation": "Subtract 4, divide by 2.",
        "choices": [
          "10",
          "8",
          "7",
          "9"
        ],
        "correctIndex": 3
      },
      {
        "question": "If 2x + 5 = 23, what is x?",
        "answer": "9",
        "explanation": "Subtract 5, divide by 2.",
        "choices": [
          "9",
          "10",
          "7",
          "8"
        ],
        "correctIndex": 0
      },
      {
        "question": "What is 3.8 + 2.8?",
        "answer": "6.6",
        "explanation": "Add the decimals to get 6.6.",
        "choices": [
          "7.1",
          "7.6",
          "7.8",
          "6.6"
        ],
        "correctIndex": 3
      },
      {
        "question": "What is 4/5 of 25?",
        "answer": "20",
        "explanation": "Divide by 5, then multiply by 4.",
        "choices": [
          "18",
          "21",
          "25",
          "20"
        ],
        "correctIndex": 3
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
        "question": "Which word is a noun?",
        "answer": "dog",
        "explanation": "The correct answer is dog.",
        "choices": [
          "dog",
          "and",
          "fast",
          "run"
        ],
        "correctIndex": 0
      },
      {
        "question": "Which word is an antonym for 'hot'?",
        "answer": "cold",
        "explanation": "The correct answer is cold.",
        "choices": [
          "sunny",
          "boiling",
          "warm",
          "cold"
        ],
        "correctIndex": 3
      },
      {
        "question": "What is the past tense of 'run'?",
        "answer": "ran",
        "explanation": "The correct answer is ran.",
        "choices": [
          "running",
          "rans",
          "ran",
          "runned"
        ],
        "correctIndex": 2
      },
      {
        "question": "What is the plural of 'child'?",
        "answer": "children",
        "explanation": "The correct answer is children.",
        "choices": [
          "childes",
          "childs",
          "children",
          "childrens"
        ],
        "correctIndex": 2
      },
      {
        "question": "Which word is a synonym for 'angry'?",
        "answer": "mad",
        "explanation": "The correct answer is mad.",
        "choices": [
          "glad",
          "mad",
          "calm",
          "sad"
        ],
        "correctIndex": 1
      },
      {
        "question": "Which word is a verb?",
        "answer": "jump",
        "explanation": "The correct answer is jump.",
        "choices": [
          "jump",
          "blue",
          "slowly",
          "table"
        ],
        "correctIndex": 0
      },
      {
        "question": "Which word is a pronoun?",
        "answer": "she",
        "explanation": "The correct answer is she.",
        "choices": [
          "run",
          "she",
          "happy",
          "cat"
        ],
        "correctIndex": 1
      },
      {
        "question": "Which word is a proper noun?",
        "answer": "London",
        "explanation": "The correct answer is London.",
        "choices": [
          "town",
          "London",
          "place",
          "city"
        ],
        "correctIndex": 1
      },
      {
        "question": "What is the past tense of 'see'?",
        "answer": "saw",
        "explanation": "The correct answer is saw.",
        "choices": [
          "sees",
          "seen",
          "saw",
          "seed"
        ],
        "correctIndex": 2
      },
      {
        "question": "Which word is a synonym for 'big'?",
        "answer": "large",
        "explanation": "The correct answer is large.",
        "choices": [
          "tiny",
          "little",
          "small",
          "large"
        ],
        "correctIndex": 3
      },
      {
        "question": "What is the plural of 'foot'?",
        "answer": "feet",
        "explanation": "The correct answer is feet.",
        "choices": [
          "feet",
          "feets",
          "footies",
          "foots"
        ],
        "correctIndex": 0
      },
      {
        "question": "Which word is a synonym for 'happy'?",
        "answer": "joyful",
        "explanation": "The correct answer is joyful.",
        "choices": [
          "joyful",
          "sad",
          "tired",
          "angry"
        ],
        "correctIndex": 0
      },
      {
        "question": "Which word is an antonym for 'fast'?",
        "answer": "slow",
        "explanation": "The correct answer is slow.",
        "choices": [
          "rapid",
          "slow",
          "swift",
          "quick"
        ],
        "correctIndex": 1
      },
      {
        "question": "What is the past tense of 'eat'?",
        "answer": "ate",
        "explanation": "The correct answer is ate.",
        "choices": [
          "eating",
          "eats",
          "ate",
          "eated"
        ],
        "correctIndex": 2
      },
      {
        "question": "What is the past tense of 'go'?",
        "answer": "went",
        "explanation": "The correct answer is went.",
        "choices": [
          "goed",
          "goes",
          "gone",
          "went"
        ],
        "correctIndex": 3
      },
      {
        "question": "What is the plural of 'tooth'?",
        "answer": "teeth",
        "explanation": "The correct answer is teeth.",
        "choices": [
          "teethes",
          "teeth",
          "toothes",
          "tooths"
        ],
        "correctIndex": 1
      },
      {
        "question": "What is the plural of 'mouse'?",
        "answer": "mice",
        "explanation": "The correct answer is mice.",
        "choices": [
          "mouse",
          "mouses",
          "mice",
          "mices"
        ],
        "correctIndex": 2
      },
      {
        "question": "Which word is an antonym for 'bright'?",
        "answer": "dark",
        "explanation": "The correct answer is dark.",
        "choices": [
          "light",
          "shiny",
          "dark",
          "radiant"
        ],
        "correctIndex": 2
      },
      {
        "question": "Which word is an adjective?",
        "answer": "beautiful",
        "explanation": "The correct answer is beautiful.",
        "choices": [
          "run",
          "quickly",
          "apple",
          "beautiful"
        ],
        "correctIndex": 3
      },
      {
        "question": "Which word is a synonym for 'smart'?",
        "answer": "clever",
        "explanation": "The correct answer is clever.",
        "choices": [
          "slow",
          "dull",
          "heavy",
          "clever"
        ],
        "correctIndex": 3
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
        "question": "What is the antonym of 'industrious'?",
        "answer": "lazy",
        "explanation": "The correct answer is lazy.",
        "choices": [
          "hardworking",
          "lazy",
          "busy",
          "diligent"
        ],
        "correctIndex": 1
      },
      {
        "question": "What is the plural of 'crisis'?",
        "answer": "crises",
        "explanation": "The correct answer is crises.",
        "choices": [
          "crisises",
          "crises",
          "crisi",
          "crise"
        ],
        "correctIndex": 1
      },
      {
        "question": "Which punctuation mark is used to show possession?",
        "answer": "Apostrophe",
        "explanation": "The correct answer is Apostrophe.",
        "choices": [
          "Apostrophe",
          "Colon",
          "Comma",
          "Semicolon"
        ],
        "correctIndex": 0
      },
      {
        "question": "Which word contains a silent letter?",
        "answer": "knight",
        "explanation": "The correct answer is knight.",
        "choices": [
          "night",
          "right",
          "light",
          "knight"
        ],
        "correctIndex": 3
      },
      {
        "question": "Which sentence is in the active voice?",
        "answer": "The dog chased the ball.",
        "explanation": "The correct answer is The dog chased the ball..",
        "choices": [
          "The ball was chased by the dog.",
          "The dog chased the ball.",
          "The ball was chased.",
          "The ball is being chased."
        ],
        "correctIndex": 1
      },
      {
        "question": "Which sentence is in the passive voice?",
        "answer": "The cake was eaten by John.",
        "explanation": "The correct answer is The cake was eaten by John..",
        "choices": [
          "The cake is delicious.",
          "John ate the cake.",
          "John is eating the cake.",
          "The cake was eaten by John."
        ],
        "correctIndex": 3
      },
      {
        "question": "What is a simile?",
        "answer": "A comparison using 'like' or 'as'",
        "explanation": "The correct answer is A comparison using 'like' or 'as'.",
        "choices": [
          "A comparison using 'like' or 'as'",
          "An exaggeration",
          "A word that sounds like its meaning",
          "Giving human traits to objects"
        ],
        "correctIndex": 0
      },
      {
        "question": "What is a synonym for 'meticulous'?",
        "answer": "careful",
        "explanation": "The correct answer is careful.",
        "choices": [
          "sloppy",
          "careless",
          "messy",
          "careful"
        ],
        "correctIndex": 3
      },
      {
        "question": "Identify the preposition in this sentence: 'The cat is under the table.'",
        "answer": "under",
        "explanation": "The correct answer is under.",
        "choices": [
          "under",
          "is",
          "table",
          "cat"
        ],
        "correctIndex": 0
      },
      {
        "question": "Which word is a metaphor?",
        "answer": "He is a shining star.",
        "explanation": "The correct answer is He is a shining star..",
        "choices": [
          "He is very smart.",
          "He is a shining star.",
          "He shines like a star.",
          "The star is bright."
        ],
        "correctIndex": 1
      },
      {
        "question": "What is the antonym of 'optimistic'?",
        "answer": "pessimistic",
        "explanation": "The correct answer is pessimistic.",
        "choices": [
          "positive",
          "cheerful",
          "hopeful",
          "pessimistic"
        ],
        "correctIndex": 3
      },
      {
        "question": "What is the past participle of 'write'?",
        "answer": "written",
        "explanation": "The correct answer is written.",
        "choices": [
          "writing",
          "wrote",
          "writes",
          "written"
        ],
        "correctIndex": 3
      },
      {
        "question": "What is the meaning of the suffix '-less'?",
        "answer": "without",
        "explanation": "The correct answer is without.",
        "choices": [
          "process of",
          "full of",
          "without",
          "capable of"
        ],
        "correctIndex": 2
      },
      {
        "question": "Which part of speech is 'eloquent'?",
        "answer": "Adjective",
        "explanation": "The correct answer is Adjective.",
        "choices": [
          "Adjective",
          "Noun",
          "Verb",
          "Adverb"
        ],
        "correctIndex": 0
      },
      {
        "question": "Which word is spelled correctly?",
        "answer": "accommodate",
        "explanation": "The correct answer is accommodate.",
        "choices": [
          "acomodate",
          "accomodate",
          "acommodate",
          "accommodate"
        ],
        "correctIndex": 3
      },
      {
        "question": "What is the meaning of the prefix 'un-'?",
        "answer": "not",
        "explanation": "The correct answer is not.",
        "choices": [
          "before",
          "again",
          "not",
          "after"
        ],
        "correctIndex": 2
      },
      {
        "question": "Which part of speech is 'quickly'?",
        "answer": "Adverb",
        "explanation": "The correct answer is Adverb.",
        "choices": [
          "Adjective",
          "Verb",
          "Noun",
          "Adverb"
        ],
        "correctIndex": 3
      },
      {
        "question": "What is the meaning of the root 'bio'?",
        "answer": "life",
        "explanation": "The correct answer is life.",
        "choices": [
          "water",
          "light",
          "life",
          "earth"
        ],
        "correctIndex": 2
      },
      {
        "question": "Identify the conjunction in this sentence: 'I wanted to go, but it rained.'",
        "answer": "but",
        "explanation": "The correct answer is but.",
        "choices": [
          "wanted",
          "to",
          "but",
          "it"
        ],
        "correctIndex": 2
      },
      {
        "question": "What is a synonym for 'abundant'?",
        "answer": "plentiful",
        "explanation": "The correct answer is plentiful.",
        "choices": [
          "plentiful",
          "empty",
          "scarce",
          "rare"
        ],
        "correctIndex": 0
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
        "question": "Which part of the body pushes blood around?",
        "answer": "Heart",
        "explanation": "The correct answer is Heart.",
        "choices": [
          "Brain",
          "Heart",
          "Lungs",
          "Stomach"
        ],
        "correctIndex": 1
      },
      {
        "question": "Which sense uses the eyes?",
        "answer": "Sight",
        "explanation": "The correct answer is Sight.",
        "choices": [
          "Taste",
          "Hearing",
          "Sight",
          "Smell"
        ],
        "correctIndex": 2
      },
      {
        "question": "What gives us heat and light during the day?",
        "answer": "The Sun",
        "explanation": "The correct answer is The Sun.",
        "choices": [
          "The Moon",
          "The Sun",
          "The Stars",
          "The Clouds"
        ],
        "correctIndex": 1
      },
      {
        "question": "What do plants need to make their own food?",
        "answer": "Sunlight",
        "explanation": "The correct answer is Sunlight.",
        "choices": [
          "Rocks",
          "Plastic",
          "Sunlight",
          "Darkness"
        ],
        "correctIndex": 2
      },
      {
        "question": "Which planet do we live on?",
        "answer": "Earth",
        "explanation": "The correct answer is Earth.",
        "choices": [
          "Mars",
          "Earth",
          "Jupiter",
          "Saturn"
        ],
        "correctIndex": 1
      },
      {
        "question": "What do fish use to breathe underwater?",
        "answer": "Gills",
        "explanation": "The correct answer is Gills.",
        "choices": [
          "Gills",
          "Lungs",
          "Nose",
          "Skin"
        ],
        "correctIndex": 0
      },
      {
        "question": "What season comes after Winter?",
        "answer": "Spring",
        "explanation": "The correct answer is Spring.",
        "choices": [
          "Spring",
          "Fall",
          "Autumn",
          "Summer"
        ],
        "correctIndex": 0
      },
      {
        "question": "Which is a source of light?",
        "answer": "The Sun",
        "explanation": "The correct answer is The Sun.",
        "choices": [
          "A rock",
          "A mirror",
          "The Sun",
          "A book"
        ],
        "correctIndex": 2
      },
      {
        "question": "What part of a plant makes seeds?",
        "answer": "Flower",
        "explanation": "The correct answer is Flower.",
        "choices": [
          "Leaf",
          "Stem",
          "Root",
          "Flower"
        ],
        "correctIndex": 3
      },
      {
        "question": "What is a habitat?",
        "answer": "Where an animal lives",
        "explanation": "The correct answer is Where an animal lives.",
        "choices": [
          "How an animal sleeps",
          "What an animal eats",
          "Where an animal lives",
          "When an animal hunts"
        ],
        "correctIndex": 2
      },
      {
        "question": "What happens when you heat ice?",
        "answer": "It melts",
        "explanation": "The correct answer is It melts.",
        "choices": [
          "It shrinks",
          "It freezes",
          "It changes color",
          "It melts"
        ],
        "correctIndex": 3
      },
      {
        "question": "Which animal lays eggs?",
        "answer": "Chicken",
        "explanation": "The correct answer is Chicken.",
        "choices": [
          "Chicken",
          "Cow",
          "Cat",
          "Dog"
        ],
        "correctIndex": 0
      },
      {
        "question": "What is the Earth's natural satellite?",
        "answer": "The Moon",
        "explanation": "The correct answer is The Moon.",
        "choices": [
          "The Moon",
          "The Sun",
          "Venus",
          "Mars"
        ],
        "correctIndex": 0
      },
      {
        "question": "Which animal is a mammal?",
        "answer": "Dog",
        "explanation": "The correct answer is Dog.",
        "choices": [
          "Snake",
          "Frog",
          "Fish",
          "Dog"
        ],
        "correctIndex": 3
      },
      {
        "question": "What do we call frozen water?",
        "answer": "Ice",
        "explanation": "The correct answer is Ice.",
        "choices": [
          "Steam",
          "Ice",
          "Cloud",
          "Vapor"
        ],
        "correctIndex": 1
      },
      {
        "question": "What pushes a sailing boat?",
        "answer": "Wind",
        "explanation": "The correct answer is Wind.",
        "choices": [
          "Electricity",
          "Wind",
          "Magnets",
          "Gravity"
        ],
        "correctIndex": 1
      },
      {
        "question": "What happens to a puddle on a hot day?",
        "answer": "It evaporates",
        "explanation": "The correct answer is It evaporates.",
        "choices": [
          "It evaporates",
          "It grows bigger",
          "It turns to ice",
          "It freezes"
        ],
        "correctIndex": 0
      },
      {
        "question": "Which material is magnetic?",
        "answer": "Iron",
        "explanation": "The correct answer is Iron.",
        "choices": [
          "Wood",
          "Iron",
          "Glass",
          "Plastic"
        ],
        "correctIndex": 1
      },
      {
        "question": "What helps birds fly?",
        "answer": "Wings and feathers",
        "explanation": "The correct answer is Wings and feathers.",
        "choices": [
          "Shells",
          "Wings and feathers",
          "Fur and paws",
          "Fins and scales"
        ],
        "correctIndex": 1
      },
      {
        "question": "What part of the plant absorbs water?",
        "answer": "Roots",
        "explanation": "The correct answer is Roots.",
        "choices": [
          "Leaves",
          "Roots",
          "Stem",
          "Flower"
        ],
        "correctIndex": 1
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
        "question": "Which animal group has a backbone, hair, and feeds milk to young?",
        "answer": "Mammals",
        "explanation": "The correct answer is Mammals.",
        "choices": [
          "Birds",
          "Mammals",
          "Reptiles",
          "Amphibians"
        ],
        "correctIndex": 1
      },
      {
        "question": "What planet is known as the Red Planet?",
        "answer": "Mars",
        "explanation": "The correct answer is Mars.",
        "choices": [
          "Venus",
          "Jupiter",
          "Mars",
          "Saturn"
        ],
        "correctIndex": 2
      },
      {
        "question": "What is the process of a liquid turning into a gas called?",
        "answer": "Evaporation",
        "explanation": "The correct answer is Evaporation.",
        "choices": [
          "Melting",
          "Evaporation",
          "Condensation",
          "Freezing"
        ],
        "correctIndex": 1
      },
      {
        "question": "What state of matter has a definite shape and volume?",
        "answer": "Solid",
        "explanation": "The correct answer is Solid.",
        "choices": [
          "Liquid",
          "Gas",
          "Plasma",
          "Solid"
        ],
        "correctIndex": 3
      },
      {
        "question": "What force pulls objects towards the Earth?",
        "answer": "Gravity",
        "explanation": "The correct answer is Gravity.",
        "choices": [
          "Magnetism",
          "Gravity",
          "Air resistance",
          "Friction"
        ],
        "correctIndex": 1
      },
      {
        "question": "What instrument is used to measure temperature?",
        "answer": "Thermometer",
        "explanation": "The correct answer is Thermometer.",
        "choices": [
          "Hygrometer",
          "Barometer",
          "Thermometer",
          "Anemometer"
        ],
        "correctIndex": 2
      },
      {
        "question": "What is the process by which plants make food?",
        "answer": "Photosynthesis",
        "explanation": "The correct answer is Photosynthesis.",
        "choices": [
          "Evaporation",
          "Photosynthesis",
          "Digestion",
          "Respiration"
        ],
        "correctIndex": 1
      },
      {
        "question": "What is the unit of measurement for force?",
        "answer": "Newton",
        "explanation": "The correct answer is Newton.",
        "choices": [
          "Volt",
          "Watt",
          "Joule",
          "Newton"
        ],
        "correctIndex": 3
      },
      {
        "question": "Which part of the flower produces pollen?",
        "answer": "Anther (Stamen)",
        "explanation": "The correct answer is Anther (Stamen).",
        "choices": [
          "Style",
          "Ovary",
          "Petal",
          "Anther (Stamen)"
        ],
        "correctIndex": 3
      },
      {
        "question": "What type of circuit has only one path for electricity to flow?",
        "answer": "Series circuit",
        "explanation": "The correct answer is Series circuit.",
        "choices": [
          "Series circuit",
          "Parallel circuit",
          "Short circuit",
          "Open circuit"
        ],
        "correctIndex": 0
      },
      {
        "question": "Which blood vessels carry blood away from the heart?",
        "answer": "Arteries",
        "explanation": "The correct answer is Arteries.",
        "choices": [
          "Capillaries",
          "Veins",
          "Arteries",
          "Valves"
        ],
        "correctIndex": 2
      },
      {
        "question": "What part of the cell contains genetic material?",
        "answer": "Nucleus",
        "explanation": "The correct answer is Nucleus.",
        "choices": [
          "Nucleus",
          "Mitochondria",
          "Cell membrane",
          "Cytoplasm"
        ],
        "correctIndex": 0
      },
      {
        "question": "What is the hardest natural substance on Earth?",
        "answer": "Diamond",
        "explanation": "The correct answer is Diamond.",
        "choices": [
          "Diamond",
          "Quartz",
          "Gold",
          "Iron"
        ],
        "correctIndex": 0
      },
      {
        "question": "What type of energy is stored in food?",
        "answer": "Chemical energy",
        "explanation": "The correct answer is Chemical energy.",
        "choices": [
          "Electrical energy",
          "Chemical energy",
          "Thermal energy",
          "Kinetic energy"
        ],
        "correctIndex": 1
      },
      {
        "question": "What causes the seasons on Earth?",
        "answer": "Earth's tilt on its axis",
        "explanation": "The correct answer is Earth's tilt on its axis.",
        "choices": [
          "Ocean currents",
          "Earth's tilt on its axis",
          "Distance from the Sun",
          "Moon's gravity"
        ],
        "correctIndex": 1
      },
      {
        "question": "What type of rock is formed from cooled lava or magma?",
        "answer": "Igneous",
        "explanation": "The correct answer is Igneous.",
        "choices": [
          "Fossil",
          "Sedimentary",
          "Metamorphic",
          "Igneous"
        ],
        "correctIndex": 3
      },
      {
        "question": "Which gas do humans breathe out?",
        "answer": "Carbon dioxide",
        "explanation": "The correct answer is Carbon dioxide.",
        "choices": [
          "Hydrogen",
          "Carbon dioxide",
          "Nitrogen",
          "Oxygen"
        ],
        "correctIndex": 1
      },
      {
        "question": "How long does it take for Earth to orbit the Sun?",
        "answer": "1 year (365 days)",
        "explanation": "The correct answer is 1 year (365 days).",
        "choices": [
          "1 day",
          "10 years",
          "1 year (365 days)",
          "1 month"
        ],
        "correctIndex": 2
      },
      {
        "question": "Which organ is the control center of the body?",
        "answer": "Brain",
        "explanation": "The correct answer is Brain.",
        "choices": [
          "Liver",
          "Lungs",
          "Heart",
          "Brain"
        ],
        "correctIndex": 3
      },
      {
        "question": "What is the boiling point of water in Celsius?",
        "answer": "100°C",
        "explanation": "The correct answer is 100°C.",
        "choices": [
          "0°C",
          "100°C",
          "50°C",
          "212°C"
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
        "question": "Which means 'Ten'?",
        "answer": "十",
        "explanation": "The correct answer is 十.",
        "choices": [
          "八",
          "十",
          "百",
          "五"
        ],
        "correctIndex": 1
      },
      {
        "question": "What does '白' mean?",
        "answer": "White",
        "explanation": "The correct answer is White.",
        "choices": [
          "Black",
          "White",
          "Red",
          "Blue"
        ],
        "correctIndex": 1
      },
      {
        "question": "What does '小' mean?",
        "answer": "Small",
        "explanation": "The correct answer is Small.",
        "choices": [
          "Big",
          "Small",
          "Many",
          "None"
        ],
        "correctIndex": 1
      },
      {
        "question": "What does '火' mean?",
        "answer": "Fire",
        "explanation": "The correct answer is Fire.",
        "choices": [
          "Wood",
          "Fire",
          "Earth",
          "Water"
        ],
        "correctIndex": 1
      },
      {
        "question": "Which means 'Mouth'?",
        "answer": "口",
        "explanation": "The correct answer is 口.",
        "choices": [
          "口",
          "手",
          "耳",
          "目"
        ],
        "correctIndex": 0
      },
      {
        "question": "What does '多' mean?",
        "answer": "Many/Much",
        "explanation": "The correct answer is Many/Much.",
        "choices": [
          "Good",
          "Few/Little",
          "Many/Much",
          "Bad"
        ],
        "correctIndex": 2
      },
      {
        "question": "What does '羊' mean?",
        "answer": "Sheep",
        "explanation": "The correct answer is Sheep.",
        "choices": [
          "Fish",
          "Pig",
          "Bird",
          "Sheep"
        ],
        "correctIndex": 3
      },
      {
        "question": "What does '牛' mean?",
        "answer": "Cow",
        "explanation": "The correct answer is Cow.",
        "choices": [
          "Horse",
          "Cow",
          "Dog",
          "Cat"
        ],
        "correctIndex": 1
      },
      {
        "question": "What does '日' mean?",
        "answer": "Sun/Day",
        "explanation": "The correct answer is Sun/Day.",
        "choices": [
          "Moon",
          "Rain",
          "Wind",
          "Sun/Day"
        ],
        "correctIndex": 3
      },
      {
        "question": "What does '人' mean?",
        "answer": "Person",
        "explanation": "The correct answer is Person.",
        "choices": [
          "Person",
          "Ghost",
          "Plant",
          "Animal"
        ],
        "correctIndex": 0
      },
      {
        "question": "Which means 'One'?",
        "answer": "一",
        "explanation": "The correct answer is 一.",
        "choices": [
          "三",
          "一",
          "二",
          "十"
        ],
        "correctIndex": 1
      },
      {
        "question": "What does '上' mean?",
        "answer": "Up/Above",
        "explanation": "The correct answer is Up/Above.",
        "choices": [
          "Left",
          "Up/Above",
          "Down/Below",
          "Right"
        ],
        "correctIndex": 1
      },
      {
        "question": "What does '下' mean?",
        "answer": "Down/Below",
        "explanation": "The correct answer is Down/Below.",
        "choices": [
          "Up/Above",
          "Down/Below",
          "Middle",
          "Outside"
        ],
        "correctIndex": 1
      },
      {
        "question": "What does '黑' mean?",
        "answer": "Black",
        "explanation": "The correct answer is Black.",
        "choices": [
          "White",
          "Green",
          "Black",
          "Yellow"
        ],
        "correctIndex": 2
      },
      {
        "question": "Which means 'Hand'?",
        "answer": "手",
        "explanation": "The correct answer is 手.",
        "choices": [
          "足",
          "頭",
          "手",
          "心"
        ],
        "correctIndex": 2
      },
      {
        "question": "What does '水' mean?",
        "answer": "Water",
        "explanation": "The correct answer is Water.",
        "choices": [
          "Water",
          "Sun",
          "Moon",
          "Fire"
        ],
        "correctIndex": 0
      },
      {
        "question": "What does '山' mean?",
        "answer": "Mountain",
        "explanation": "The correct answer is Mountain.",
        "choices": [
          "Mountain",
          "Sea",
          "River",
          "Lake"
        ],
        "correctIndex": 0
      },
      {
        "question": "What does '好' mean?",
        "answer": "Good",
        "explanation": "The correct answer is Good.",
        "choices": [
          "Good",
          "Bad",
          "Slow",
          "Fast"
        ],
        "correctIndex": 0
      },
      {
        "question": "What does '天' mean?",
        "answer": "Sky/Heaven",
        "explanation": "The correct answer is Sky/Heaven.",
        "choices": [
          "Tree",
          "Sky/Heaven",
          "Earth",
          "Person"
        ],
        "correctIndex": 1
      },
      {
        "question": "What does '月' mean?",
        "answer": "Moon/Month",
        "explanation": "The correct answer is Moon/Month.",
        "choices": [
          "Star",
          "Snow",
          "Cloud",
          "Moon/Month"
        ],
        "correctIndex": 3
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
        "question": "What does the idiom '画龙点睛' mean?",
        "answer": "Adding the vital finishing touch",
        "explanation": "The correct answer is Adding the vital finishing touch.",
        "choices": [
          "Drawing a dragon's eyes",
          "Adding the vital finishing touch",
          "Seeing a dragon",
          "Painting a beautiful picture"
        ],
        "correctIndex": 1
      },
      {
        "question": "What does the idiom '狐假虎威' mean?",
        "answer": "Borrowing someone's power to intimidate others",
        "explanation": "The correct answer is Borrowing someone's power to intimidate others.",
        "choices": [
          "A fox and a tiger fighting",
          "Being very clever",
          "Borrowing someone's power to intimidate others",
          "Running away from danger"
        ],
        "correctIndex": 2
      },
      {
        "question": "What is the meaning of '雪中送炭'?",
        "answer": "Providing help when it is most needed",
        "explanation": "The correct answer is Providing help when it is most needed.",
        "choices": [
          "Being very cold",
          "Making a snowman",
          "Sending coal in winter",
          "Providing help when it is most needed"
        ],
        "correctIndex": 3
      },
      {
        "question": "Who was known as the 'Sage of Calligraphy' (书圣)?",
        "answer": "Wang Xizhi (王羲之)",
        "explanation": "The correct answer is Wang Xizhi (王羲之).",
        "choices": [
          "Liu Gongquan (柳公权)",
          "Ouyang Xun (欧阳询)",
          "Wang Xizhi (王羲之)",
          "Yan Zhenqing (颜真卿)"
        ],
        "correctIndex": 2
      },
      {
        "question": "What does '亡羊补牢' mean?",
        "answer": "It's never too late to mend",
        "explanation": "The correct answer is It's never too late to mend.",
        "choices": [
          "Counting animals",
          "Losing a sheep",
          "It's never too late to mend",
          "Repairing a fence"
        ],
        "correctIndex": 2
      },
      {
        "question": "What does the idiom '破釜沉舟' mean?",
        "answer": "Burning one's bridges; determined to fight to the end",
        "explanation": "The correct answer is Burning one's bridges; determined to fight to the end.",
        "choices": [
          "Repairing a ship",
          "Burning one's bridges; determined to fight to the end",
          "Cooking soup in a broken pot",
          "Sailing a boat"
        ],
        "correctIndex": 1
      },
      {
        "question": "What does the idiom '井底之蛙' mean?",
        "answer": "A person with limited outlook/experience",
        "explanation": "The correct answer is A person with limited outlook/experience.",
        "choices": [
          "Someone who likes swimming",
          "A frog living in a well",
          "A very rich person",
          "A person with limited outlook/experience"
        ],
        "correctIndex": 3
      },
      {
        "question": "Which idiom describes 'doing things in the wrong order'?",
        "answer": "本末倒置",
        "explanation": "The correct answer is 本末倒置.",
        "choices": [
          "半途而废",
          "精益求精",
          "全心全意",
          "本末倒置"
        ],
        "correctIndex": 3
      },
      {
        "question": "What does the idiom '刻舟求剑' mean?",
        "answer": "Taking measures without regard to changes in circumstances",
        "explanation": "The correct answer is Taking measures without regard to changes in circumstances.",
        "choices": [
          "Carving wood to make a sword",
          "Looking for a lost item",
          "Sailing on a river",
          "Taking measures without regard to changes in circumstances"
        ],
        "correctIndex": 3
      },
      {
        "question": "What does the idiom '对牛弹琴' mean?",
        "answer": "Talking to the wrong audience",
        "explanation": "The correct answer is Talking to the wrong audience.",
        "choices": [
          "Talking to the wrong audience",
          "Studying animal behavior",
          "Playing music for cows",
          "Being a great musician"
        ],
        "correctIndex": 0
      },
      {
        "question": "Which phrase means 'Everything goes smoothly'?",
        "answer": "一帆风顺",
        "explanation": "The correct answer is 一帆风顺.",
        "choices": [
          "心神不定",
          "七上八下",
          "乱七八糟",
          "一帆风顺"
        ],
        "correctIndex": 3
      },
      {
        "question": "Who is the author of the poem '静夜思' (Thoughts in a Tranquil Night)?",
        "answer": "Li Bai (李白)",
        "explanation": "The correct answer is Li Bai (李白).",
        "choices": [
          "Su Shi (苏轼)",
          "Du Fu (杜甫)",
          "Li Bai (李白)",
          "Wang Wei (王维)"
        ],
        "correctIndex": 2
      },
      {
        "question": "What does '锦上添花' mean?",
        "answer": "Adding brilliance to its present splendor",
        "explanation": "The correct answer is Adding brilliance to its present splendor.",
        "choices": [
          "Wearing expensive clothes",
          "Adding brilliance to its present splendor",
          "Making a mistake",
          "Growing flowers on silk"
        ],
        "correctIndex": 1
      },
      {
        "question": "What does the idiom '画蛇添足' mean?",
        "answer": "Ruin the effect by adding something superfluous",
        "explanation": "The correct answer is Ruin the effect by adding something superfluous.",
        "choices": [
          "Being brave in battle",
          "Moving very fast",
          "Drawing a picture of a snake",
          "Ruin the effect by adding something superfluous"
        ],
        "correctIndex": 3
      },
      {
        "question": "What does '三思而后行' mean?",
        "answer": "Think thrice before you act",
        "explanation": "The correct answer is Think thrice before you act.",
        "choices": [
          "Walk for three hours",
          "Think thrice before you act",
          "Act quickly without thinking",
          "Three people going together"
        ],
        "correctIndex": 1
      },
      {
        "question": "Which novel is ONE of the Four Great Classical Novels of Chinese literature?",
        "answer": "Journey to the West (西游记)",
        "explanation": "The correct answer is Journey to the West (西游记).",
        "choices": [
          "Analects (论语)",
          "The Art of War (孙子兵法)",
          "Dao De Jing (道德经)",
          "Journey to the West (西游记)"
        ],
        "correctIndex": 3
      },
      {
        "question": "What does the idiom '守株待兔' mean?",
        "answer": "Wait for windfalls instead of working hard",
        "explanation": "The correct answer is Wait for windfalls instead of working hard.",
        "choices": [
          "Protecting animals",
          "Planting a tree",
          "Wait for windfalls instead of working hard",
          "Hunting rabbits in the forest"
        ],
        "correctIndex": 2
      },
      {
        "question": "What does '矛盾' refer to in modern Chinese?",
        "answer": "Contradiction",
        "explanation": "The correct answer is Contradiction.",
        "choices": [
          "A type of weapon",
          "Peace and harmony",
          "Spear and shield",
          "Contradiction"
        ],
        "correctIndex": 3
      },
      {
        "question": "What does '百闻不如一见' mean?",
        "answer": "Seeing it once is better than hearing about it a hundred times",
        "explanation": "The correct answer is Seeing it once is better than hearing about it a hundred times.",
        "choices": [
          "Reading many books",
          "Listening carefully is important",
          "Seeing it once is better than hearing about it a hundred times",
          "Meeting a hundred people"
        ],
        "correctIndex": 2
      },
      {
        "question": "What does the proverb '失败是成功之母' mean?",
        "answer": "Failure is the mother of success",
        "explanation": "The correct answer is Failure is the mother of success.",
        "choices": [
          "Mothers are successful",
          "Success comes naturally",
          "Failure is the mother of success",
          "Failing is very bad"
        ],
        "correctIndex": 2
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
        "question": "Select the word that CANNOT be made from the letters in 'COMPREHENSION'",
        "answer": "SPHERE",
        "explanation": "The correct answer is SPHERE.",
        "choices": [
          "OPEN",
          "MORE",
          "PRIME",
          "SPHERE"
        ],
        "correctIndex": 3
      },
      {
        "question": "What is the next letter in the sequence: A, C, E, G, __ ?",
        "answer": "I",
        "explanation": "The correct answer is I.",
        "choices": [
          "I",
          "K",
          "H",
          "J"
        ],
        "correctIndex": 0
      },
      {
        "question": "Find the hidden word in this sentence: 'The macaque eventually left.'",
        "answer": "QUEEN",
        "explanation": "The correct answer is QUEEN.",
        "choices": [
          "EVE",
          "MAC",
          "QUEEN",
          "CAQUE"
        ],
        "correctIndex": 2
      },
      {
        "question": "If RED is 27, BLUE is 40, what is GREEN?",
        "answer": "49",
        "explanation": "The correct answer is 49.",
        "choices": [
          "45",
          "49",
          "50",
          "48"
        ],
        "correctIndex": 1
      },
      {
        "question": "Which word is the odd one out?",
        "answer": "Guitar",
        "explanation": "The correct answer is Guitar.",
        "choices": [
          "Piano",
          "Drum",
          "Flute",
          "Violin",
          "Guitar"
        ],
        "correctIndex": 4
      },
      {
        "question": "Which word is a synonym for 'Huge'?",
        "answer": "Gigantic",
        "explanation": "The correct answer is Gigantic.",
        "choices": [
          "Small",
          "Gigantic",
          "Tiny",
          "Miniature"
        ],
        "correctIndex": 1
      },
      {
        "question": "Which word means the OPPOSITE of 'Brave'?",
        "answer": "Cowardly",
        "explanation": "The correct answer is Cowardly.",
        "choices": [
          "Fearless",
          "Heroic",
          "Cowardly",
          "Strong"
        ],
        "correctIndex": 2
      },
      {
        "question": "If TREE is coded as USFF, how is BARK coded?",
        "answer": "CBSL",
        "explanation": "The correct answer is CBSL.",
        "choices": [
          "CARL",
          "CBSL",
          "BBSL",
          "DABM"
        ],
        "correctIndex": 1
      },
      {
        "question": "If A=1, B=2, C=3, what does CAB equal?",
        "answer": "312",
        "explanation": "The correct answer is 312.",
        "choices": [
          "321",
          "312",
          "213",
          "123"
        ],
        "correctIndex": 1
      },
      {
        "question": "Which word means the same as 'Start'?",
        "answer": "Begin",
        "explanation": "The correct answer is Begin.",
        "choices": [
          "End",
          "Begin",
          "Pause",
          "Stop"
        ],
        "correctIndex": 1
      },
      {
        "question": "Which two words must change places for the sentence to make sense? 'The blue sky flew in the bird.'",
        "answer": "sky and bird",
        "explanation": "The correct answer is sky and bird.",
        "choices": [
          "The and blue",
          "blue and flew",
          "sky and bird",
          "in and the"
        ],
        "correctIndex": 2
      },
      {
        "question": "Find the hidden word: 'She panics every time.'",
        "answer": "ICE",
        "explanation": "The correct answer is ICE.",
        "choices": [
          "PAN",
          "TIME",
          "ICE",
          "EVERY"
        ],
        "correctIndex": 2
      },
      {
        "question": "What is the anagram of 'LISTEN'?",
        "answer": "SILENT",
        "explanation": "The correct answer is SILENT.",
        "choices": [
          "SILENT",
          "TINELS",
          "INLETS",
          "LINSET"
        ],
        "correctIndex": 0
      },
      {
        "question": "If 2 means A, 4 means B, 6 means C, what does 8 mean?",
        "answer": "D",
        "explanation": "The correct answer is D.",
        "choices": [
          "D",
          "G",
          "E",
          "F"
        ],
        "correctIndex": 0
      },
      {
        "question": "Find the missing number in the sequence: 2, 4, 8, 16, __",
        "answer": "32",
        "explanation": "The correct answer is 32.",
        "choices": [
          "64",
          "24",
          "32",
          "20"
        ],
        "correctIndex": 2
      },
      {
        "question": "Which word is the odd one out?",
        "answer": "Carrot",
        "explanation": "The correct answer is Carrot.",
        "choices": [
          "Apple",
          "Banana",
          "Orange",
          "Carrot"
        ],
        "correctIndex": 3
      },
      {
        "question": "Which pair of words have the most SIMILAR meaning?",
        "answer": "Happy : Joyful",
        "explanation": "The correct answer is Happy : Joyful.",
        "choices": [
          "Hot : Cold",
          "Happy : Joyful",
          "Up : Down",
          "Fast : Slow"
        ],
        "correctIndex": 1
      },
      {
        "question": "Which word is the odd one out?",
        "answer": "Lake",
        "explanation": "The correct answer is Lake.",
        "choices": [
          "Sea",
          "Lake",
          "Ocean",
          "River"
        ],
        "correctIndex": 1
      },
      {
        "question": "Choose the word that completes the sentence: The artist picked up her ___ to paint.",
        "answer": "Brush",
        "explanation": "The correct answer is Brush.",
        "choices": [
          "Chisel",
          "Brush",
          "Pencil",
          "Hammer"
        ],
        "correctIndex": 1
      },
      {
        "question": "If CAT is to MEOW, then DOG is to: ",
        "answer": "BARK",
        "explanation": "The correct answer is BARK.",
        "choices": [
          "BITE",
          "BARK",
          "TAIL",
          "RUN"
        ],
        "correctIndex": 1
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
        "question": "Which implies a comparison: 'He ran like the wind' or 'The wind blew'?",
        "answer": "He ran like the wind",
        "explanation": "The correct answer is He ran like the wind.",
        "choices": [
          "Both",
          "Neither",
          "The wind blew",
          "He ran like the wind"
        ],
        "correctIndex": 3
      },
      {
        "question": "What is 15% of 200?",
        "answer": "30",
        "explanation": "The correct answer is 30.",
        "choices": [
          "30",
          "15",
          "20",
          "45"
        ],
        "correctIndex": 0
      },
      {
        "question": "Find the perimeter of a rectangle with length 8cm and width 5cm.",
        "answer": "26cm",
        "explanation": "The correct answer is 26cm.",
        "choices": [
          "13cm",
          "26cm",
          "30cm",
          "40cm"
        ],
        "correctIndex": 1
      },
      {
        "question": "Choose the correct homophone: 'I need to buy a new ___ of shoes.'",
        "answer": "pair",
        "explanation": "The correct answer is pair.",
        "choices": [
          "pare",
          "pear",
          "peer",
          "pair"
        ],
        "correctIndex": 3
      },
      {
        "question": "Identify the adverb: 'The dog barked loudly.'",
        "answer": "Loudly",
        "explanation": "The correct answer is Loudly.",
        "choices": [
          "The",
          "Loudly",
          "Barked",
          "Dog"
        ],
        "correctIndex": 1
      },
      {
        "question": "Which word is spelled incorrectly?",
        "answer": "Definately",
        "explanation": "The correct answer is Definately.",
        "choices": [
          "Receive",
          "Definitely",
          "Definately",
          "Separate"
        ],
        "correctIndex": 2
      },
      {
        "question": "Which word is an antonym for 'Expand'?",
        "answer": "Shrink",
        "explanation": "The correct answer is Shrink.",
        "choices": [
          "Widen",
          "Shrink",
          "Grow",
          "Increase"
        ],
        "correctIndex": 1
      },
      {
        "question": "Which word is a preposition?",
        "answer": "Under",
        "explanation": "The correct answer is Under.",
        "choices": [
          "Happy",
          "Ran",
          "Under",
          "Quickly"
        ],
        "correctIndex": 2
      },
      {
        "question": "What is the next prime number after 13?",
        "answer": "17",
        "explanation": "The correct answer is 17.",
        "choices": [
          "19",
          "15",
          "17",
          "14"
        ],
        "correctIndex": 2
      },
      {
        "question": "Which sentence uses correct punctuation?",
        "answer": "It's cold outside.",
        "explanation": "The correct answer is It's cold outside..",
        "choices": [
          "It's cold outside?",
          "It cold outside",
          "It's cold outside.",
          "Its cold outside."
        ],
        "correctIndex": 2
      },
      {
        "question": "What is the plural of 'Library'?",
        "answer": "Libraries",
        "explanation": "The correct answer is Libraries.",
        "choices": [
          "Libraries",
          "Librariess",
          "Librarys",
          "Libraris"
        ],
        "correctIndex": 0
      },
      {
        "question": "Solve for x: 3x - 5 = 16",
        "answer": "7",
        "explanation": "The correct answer is 7.",
        "choices": [
          "5",
          "7",
          "6",
          "8"
        ],
        "correctIndex": 1
      },
      {
        "question": "If y = 2x + 4, find y when x = 3.",
        "answer": "10",
        "explanation": "The correct answer is 10.",
        "choices": [
          "11",
          "12",
          "9",
          "10"
        ],
        "correctIndex": 3
      },
      {
        "question": "What is the area of a triangle with base 10cm and height 6cm?",
        "answer": "30 sq cm",
        "explanation": "The correct answer is 30 sq cm.",
        "choices": [
          "16 sq cm",
          "60 sq cm",
          "40 sq cm",
          "30 sq cm"
        ],
        "correctIndex": 3
      },
      {
        "question": "What is the square root of 144?",
        "answer": "12",
        "explanation": "The correct answer is 12.",
        "choices": [
          "12",
          "14",
          "16",
          "10"
        ],
        "correctIndex": 0
      },
      {
        "question": "What is the subject of this sentence: 'The heavy rain flooded the streets.'",
        "answer": "The heavy rain",
        "explanation": "The correct answer is The heavy rain.",
        "choices": [
          "Flooded",
          "The streets",
          "Heavy",
          "The heavy rain"
        ],
        "correctIndex": 3
      },
      {
        "question": "What is 3/4 as a decimal?",
        "answer": "0.75",
        "explanation": "The correct answer is 0.75.",
        "choices": [
          "3.4",
          "0.50",
          "0.25",
          "0.75"
        ],
        "correctIndex": 3
      },
      {
        "question": "Identify the proper noun: 'The girl visited Paris on Tuesday.'",
        "answer": "Paris",
        "explanation": "The correct answer is Paris.",
        "choices": [
          "on",
          "Paris",
          "visited",
          "girl"
        ],
        "correctIndex": 1
      },
      {
        "question": "If 3 apples cost 90p, how much do 5 apples cost?",
        "answer": "£1.50",
        "explanation": "The correct answer is £1.50.",
        "choices": [
          "£1.80",
          "£1.50",
          "£1.00",
          "£1.20"
        ],
        "correctIndex": 1
      },
      {
        "question": "Convert 4500 milliliters to liters.",
        "answer": "4.5 L",
        "explanation": "The correct answer is 4.5 L.",
        "choices": [
          "450 L",
          "4.5 L",
          "0.45 L",
          "45 L"
        ],
        "correctIndex": 1
      }
    ]
  }
};
