const QUESTIONS_DATA = {
  "Maths": {
    "Year 3": [
      {
        "question": "Tommy has 45 apples and buys 41 more. How many apples does he have in total?",
        "answer": "86",
        "explanation": "To find the total, we add the two amounts together: 45 + 41 = 86.",
        "choices": [
          "86",
          "85",
          "96",
          "14"
        ],
        "correctIndex": 0
      },
      {
        "question": "Sarah had 100 stickers but gave 18 to her friend. How many stickers does she have left?",
        "answer": "82",
        "explanation": "Subtraction is used when items are taken away: 100 - 18 = 82.",
        "choices": [
          "92",
          "82",
          "118",
          "88"
        ],
        "correctIndex": 1
      },
      {
        "question": "There are 6 boxes of pencils. Each box contains 9 pencils. How many pencils are there altogether?",
        "answer": "54",
        "explanation": "This is a multiplication problem: 6 groups of 9 equals 54 (6 \u00d7 9 = 54).",
        "choices": [
          "15",
          "54",
          "45",
          "60"
        ],
        "correctIndex": 1
      },
      {
        "question": "Find the missing number: 40 + ? = 65",
        "answer": "25",
        "explanation": "To find the missing part, subtract 40 from 65: 65 - 40 = 25.",
        "choices": [
          "105",
          "35",
          "25",
          "20"
        ],
        "correctIndex": 2
      },
      {
        "question": "Find the missing number: ? \u00d7 8 = 64",
        "answer": "8",
        "explanation": "If a number multiplied by 8 is 64, we can divide 64 by 8 to find the answer: 64 \u00f7 8 = 8.",
        "choices": [
          "7",
          "8",
          "9",
          "56"
        ],
        "correctIndex": 1
      },
      {
        "question": "What is 84 \u00f7 7?",
        "answer": "12",
        "explanation": "84 divided by 7 is exactly 12. You can check this by multiplying 12 by 7 to get 84.",
        "choices": [
          "11",
          "12",
          "13",
          "77"
        ],
        "correctIndex": 1
      },
      {
        "question": "What is 98 + 37?",
        "answer": "135",
        "explanation": "First add the tens (90+30=120), then add the units (8+7=15). 120 + 15 = 135.",
        "choices": [
          "125",
          "135",
          "145",
          "121"
        ],
        "correctIndex": 1
      },
      {
        "question": "A baker makes 70 cookies and puts them into bags of 10. How many bags does he need?",
        "answer": "7",
        "explanation": "Divide the total number of cookies by the amount in each bag: 70 \u00f7 10 = 7 bags.",
        "choices": [
          "7",
          "8",
          "60",
          "700"
        ],
        "correctIndex": 0
      }
    ],
    "Year 6": [
      {
        "question": "A pair of shoes costs \u00a340. They are on sale with a 25% discount. How much is the discount?",
        "answer": "\u00a310",
        "explanation": "25% is the same as one quarter (1/4). To find a quarter of \u00a340, divide by 4: 40 \u00f7 4 = 10.",
        "choices": [
          "\u00a310",
          "\u00a330",
          "\u00a315",
          "\u00a325"
        ],
        "correctIndex": 0
      },
      {
        "question": "What is 50% of 200?",
        "answer": "100",
        "explanation": "50% is half. Half of 200 is 100.",
        "choices": [
          "100",
          "50",
          "250",
          "150"
        ],
        "correctIndex": 0
      },
      {
        "question": "In a class of 30 students, 10% are left-handed. How many students are left-handed?",
        "answer": "3",
        "explanation": "To find 10% of a number, divide it by 10. 30 \u00f7 10 = 3.",
        "choices": [
          "3",
          "10",
          "20",
          "40"
        ],
        "correctIndex": 0
      },
      {
        "question": "What is 3 + 0.1?",
        "answer": "3.1",
        "explanation": "Add 3 whole ones to 1 tenth to get 3.1.",
        "choices": [
          "3.1",
          "0.4",
          "4",
          "3.01"
        ],
        "correctIndex": 0
      },
      {
        "question": "Calculate: 9 + 0.3",
        "answer": "9.3",
        "explanation": "Combine the whole number 9 and the decimal 0.3 to get 9.3.",
        "choices": [
          "9.3",
          "1.2",
          "9.03",
          "12"
        ],
        "correctIndex": 0
      },
      {
        "question": "Jenny bought an apple for \u00a30.60 and a banana for \u00a30.80. How much did she spend altogether?",
        "answer": "\u00a31.40",
        "explanation": "0.60 + 0.80 = 1.40. Remember to carry over when adding the tenths column.",
        "choices": [
          "\u00a30.14",
          "\u00a31.40",
          "\u00a314.00",
          "\u00a31.20"
        ],
        "correctIndex": 1
      },
      {
        "question": "If 4x = 24, what is the value of x?",
        "answer": "6",
        "explanation": "To isolate x, divide both sides of the equation by 4. 24 \u00f7 4 = 6.",
        "choices": [
          "5",
          "6",
          "20",
          "28"
        ],
        "correctIndex": 1
      },
      {
        "question": "If y - 7 = 15, what is y?",
        "answer": "22",
        "explanation": "To find y, add 7 to the other side: 15 + 7 = 22.",
        "choices": [
          "8",
          "21",
          "22",
          "157"
        ],
        "correctIndex": 2
      }
    ]
  },
  "SATs Prep": {
    "KS2 Maths": [
      {
        "question": "Calculate: 15% of 400",
        "answer": "60",
        "explanation": "10% of 400 is 40. 5% is half of that, which is 20. 40 + 20 = 60.",
        "choices": [
          "60",
          "40",
          "15",
          "45"
        ],
        "correctIndex": 0
      },
      {
        "question": "What is 3/4 as a percentage?",
        "answer": "75%",
        "explanation": "Fractions can be converted to percentages by making the denominator 100. 3/4 is equivalent to 75/100, which is 75%.",
        "choices": [
          "50%",
          "75%",
          "25%",
          "80%"
        ],
        "correctIndex": 1
      },
      {
        "question": "A train leaves at 14:35 and the journey takes 45 minutes. What time does it arrive?",
        "answer": "15:20",
        "explanation": "Add 45 minutes to 14:35. 14:35 + 25 mins = 15:00. You have 20 mins left to add. 15:00 + 20 mins = 15:20.",
        "choices": [
          "15:10",
          "15:20",
          "14:80",
          "15:35"
        ],
        "correctIndex": 1
      },
      {
        "question": "Which of these numbers is a prime number?",
        "answer": "17",
        "explanation": "A prime number has exactly two factors: 1 and itself. 17 can only be divided by 1 and 17.",
        "choices": [
          "15",
          "21",
          "17",
          "9"
        ],
        "correctIndex": 2
      },
      {
        "question": "Solve the equation: 5a + 3 = 23",
        "answer": "4",
        "explanation": "First subtract 3 from 23 to get 20. Then divide by 5. 20 \u00f7 5 = 4.",
        "choices": [
          "5",
          "20",
          "4",
          "6"
        ],
        "correctIndex": 2
      },
      {
        "question": "What is the perimeter of a rectangle with length 8cm and width 5cm?",
        "answer": "26cm",
        "explanation": "The perimeter is the total distance around the edges. (8 + 5) \u00d7 2 = 13 \u00d7 2 = 26cm.",
        "choices": [
          "40cm",
          "13cm",
          "26cm",
          "21cm"
        ],
        "correctIndex": 2
      },
      {
        "question": "Calculate: 3.5 \u00d7 100",
        "answer": "350",
        "explanation": "When multiplying a decimal by 100, move the decimal point two places to the right: 3.5 becomes 350.",
        "choices": [
          "35",
          "350",
          "0.035",
          "3500"
        ],
        "correctIndex": 1
      },
      {
        "question": "Which fraction is equivalent to 2/3?",
        "answer": "8/12",
        "explanation": "To find an equivalent fraction, multiply both the top and bottom by the same number. 2\u00d74=8 and 3\u00d74=12.",
        "choices": [
          "4/9",
          "8/12",
          "6/8",
          "3/4"
        ],
        "correctIndex": 1
      },
      {
        "question": "A box contains 2 red balls and 3 blue balls. What is the probability of picking a red ball?",
        "answer": "2/5",
        "explanation": "There are 2 red balls out of a total of 5 balls (2+3). So the probability is 2/5.",
        "choices": [
          "2/3",
          "3/5",
          "1/2",
          "2/5"
        ],
        "correctIndex": 3
      },
      {
        "question": "What is 10 - 2.45?",
        "answer": "7.55",
        "explanation": "Line up the decimal points (10.00 - 2.45). Borrowing across gives 7.55.",
        "choices": [
          "8.55",
          "7.65",
          "8.45",
          "7.55"
        ],
        "correctIndex": 3
      }
    ],
    "KS2 English": [
      {
        "question": "Which sentence is punctuated correctly?",
        "answer": "The dog, which was very tired, fell asleep.",
        "explanation": "Commas are used accurately to enclose the relative clause ('which was very tired').",
        "choices": [
          "The dog which was very tired fell asleep.",
          "The dog, which was very tired, fell asleep.",
          "The dog which was very tired, fell asleep.",
          "The dog, which was very tired fell asleep."
        ],
        "correctIndex": 1
      },
      {
        "question": "Identify the adjective in this sentence: The clever fox jumped over the log.",
        "answer": "clever",
        "explanation": "'Clever' is an adjective because it describes the noun 'fox'.",
        "choices": [
          "fox",
          "jumped",
          "The",
          "clever"
        ],
        "correctIndex": 3
      },
      {
        "question": "Which word is an antonym (opposite) of 'ancient'?",
        "answer": "modern",
        "explanation": "'Ancient' means very old. The opposite of old is new or 'modern'.",
        "choices": [
          "old",
          "modern",
          "historic",
          "antique"
        ],
        "correctIndex": 1
      },
      {
        "question": "Which of these sentences is written in the passive voice?",
        "answer": "The ball was kicked by the boy.",
        "explanation": "In the passive voice, the subject (the ball) receives the action, rather than performing it.",
        "choices": [
          "The boy kicked the ball.",
          "The ball was kicked by the boy.",
          "The boy is kicking the ball.",
          "Kick the ball, boy!"
        ],
        "correctIndex": 1
      },
      {
        "question": "Identify the conjunction in this sentence: We stayed inside because it was raining.",
        "answer": "because",
        "explanation": "A conjunction is a word used to connect clauses or sentences. 'Because' connects the two clauses here.",
        "choices": [
          "stayed",
          "inside",
          "We",
          "because"
        ],
        "correctIndex": 3
      },
      {
        "question": "Which word is spelt correctly?",
        "answer": "accommodate",
        "explanation": "'Accommodate' has two c's and two m's.",
        "choices": [
          "acommodate",
          "accomodate",
          "accommodate",
          "acomodate"
        ],
        "correctIndex": 2
      },
      {
        "question": "Choose the correct prefix to make the opposite of 'behave'.",
        "answer": "mis-",
        "explanation": "Adding 'mis-' to 'behave' creates 'misbehave', which means to behave badly.",
        "choices": [
          "un-",
          "dis-",
          "anti-",
          "mis-"
        ],
        "correctIndex": 3
      },
      {
        "question": "What tense is this sentence: She will be going to the market tomorrow.",
        "answer": "Future continuous",
        "explanation": "'Will be going' indicates an ongoing action that will happen in the future.",
        "choices": [
          "Past simple",
          "Present continuous",
          "Future continuous",
          "Future perfect"
        ],
        "correctIndex": 2
      },
      {
        "question": "Identify the adverb in this sentence: The tortoise moved extremely slowly.",
        "answer": "slowly",
        "explanation": "Adverbs describe verbs, adjectives, or other adverbs. 'Slowly' describes how the tortoise moved. ('Extremely' is also an adverb).",
        "choices": [
          "moved",
          "tortoise",
          "slowly",
          "The"
        ],
        "correctIndex": 2
      },
      {
        "question": "Which sentence uses an apostrophe to show possession (belonging)?",
        "answer": "The cat's tail was fluffy.",
        "explanation": "The apostrophe in 'cat's' shows that the tail belongs to the cat. The others are contractions (it is, do not).",
        "choices": [
          "It's raining outside.",
          "The cat's tail was fluffy.",
          "Don't touch that.",
          "There are two cats."
        ],
        "correctIndex": 1
      }
    ]
  }
};
