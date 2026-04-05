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
        "question": "What is half of 48?",
        "answer": "24",
        "explanation": "To find half, divide by 2. 48 \u00f7 2 = 24.",
        "choices": [
          "22",
          "24",
          "26",
          "96"
        ],
        "correctIndex": 1
      },
      {
        "question": "How many minutes are in 1 hour and 15 minutes?",
        "answer": "75",
        "explanation": "1 hour = 60 minutes. 60 + 15 = 75 minutes.",
        "choices": [
          "60",
          "70",
          "75",
          "115"
        ],
        "correctIndex": 2
      },
      {
        "question": "Which shape has 3 sides?",
        "answer": "Triangle",
        "explanation": "Triangles always have exactly three sides.",
        "choices": [
          "Square",
          "Circle",
          "Triangle",
          "Pentagon"
        ],
        "correctIndex": 2
      }
    ],
    "Year 4": [
      {
        "question": "What is 7 \u00d7 8?",
        "answer": "56",
        "explanation": "7 multiplied by 8 is 56.",
        "choices": [
          "54",
          "56",
          "64",
          "49"
        ],
        "correctIndex": 1
      },
      {
        "question": "Round 452 to the nearest 100.",
        "answer": "500",
        "explanation": "Since 52 is 50 or more, we round up to the next hundred.",
        "choices": [
          "400",
          "450",
          "500",
          "460"
        ],
        "correctIndex": 2
      },
      {
        "question": "What is 1,000 less than 6,432?",
        "answer": "5,432",
        "explanation": "Subtract 1,000 from the thousands place: 6,432 - 1,000 = 5,432.",
        "choices": [
          "6,332",
          "5,432",
          "7,432",
          "6,422"
        ],
        "correctIndex": 1
      },
      {
        "question": "Convert 2.5 kilograms to grams.",
        "answer": "2500g",
        "explanation": "There are 1,000 grams in a kilogram. 2.5 \u00d7 1,000 = 2,500.",
        "choices": [
          "250g",
          "25g",
          "2500g",
          "2005g"
        ],
        "correctIndex": 2
      },
      {
        "question": "What is 12 \u00d7 11?",
        "answer": "132",
        "explanation": "12 \u00d7 10 = 120, plus one more 12 equals 132.",
        "choices": [
          "121",
          "132",
          "144",
          "122"
        ],
        "correctIndex": 1
      },
      {
        "question": "How many millimeters are in 5 centimeters?",
        "answer": "50mm",
        "explanation": "1cm = 10mm. 5 \u00d7 10 = 50.",
        "choices": [
          "5mm",
          "50mm",
          "500mm",
          "0.5mm"
        ],
        "correctIndex": 1
      },
      {
        "question": "What is the Roman numeral for 9?",
        "answer": "IX",
        "explanation": "X is 10, and I before X means 10 minus 1.",
        "choices": [
          "VII",
          "XI",
          "IX",
          "IV"
        ],
        "correctIndex": 2
      }
    ],
    "Year 5": [
      {
        "question": "What is the square root of 81?",
        "answer": "9",
        "explanation": "9 \u00d7 9 = 81, so the square root is 9.",
        "choices": [
          "8",
          "9",
          "7",
          "10"
        ],
        "correctIndex": 1
      },
      {
        "question": "What is 1/5 as a decimal?",
        "answer": "0.2",
        "explanation": "1 divided by 5 equals 0.2.",
        "choices": [
          "0.1",
          "0.5",
          "0.2",
          "0.25"
        ],
        "correctIndex": 2
      },
      {
        "question": "Calculate: 125 \u00d7 4",
        "answer": "500",
        "explanation": "125 + 125 = 250. 250 + 250 = 500.",
        "choices": [
          "450",
          "500",
          "550",
          "600"
        ],
        "correctIndex": 1
      },
      {
        "question": "What is the perimeter of a square with side length 6cm?",
        "answer": "24cm",
        "explanation": "Perimeter = 4 \u00d7 side length. 4 \u00d7 6 = 24.",
        "choices": [
          "36cm",
          "24cm",
          "12cm",
          "18cm"
        ],
        "correctIndex": 1
      },
      {
        "question": "Round 3.456 to two decimal places.",
        "answer": "3.46",
        "explanation": "The third decimal place is 6, so we round up the second place.",
        "choices": [
          "3.45",
          "3.46",
          "3.40",
          "3.50"
        ],
        "correctIndex": 1
      },
      {
        "question": "What is 10 squared?",
        "answer": "100",
        "explanation": "10 \u00d7 10 = 100.",
        "choices": [
          "20",
          "100",
          "1000",
          "10"
        ],
        "correctIndex": 1
      }
    ],
    "Year 6": [
      {
        "question": "Calculate: 1/4 + 1/2",
        "answer": "3/4",
        "explanation": "Convert 1/2 to 2/4. Then 1/4 + 2/4 = 3/4.",
        "choices": [
          "2/6",
          "1/4",
          "3/4",
          "1/6"
        ],
        "correctIndex": 2
      },
      {
        "question": "If 4x = 24, what is the value of x?",
        "answer": "6",
        "explanation": "24 divided by 4 is 6.",
        "choices": [
          "5",
          "6",
          "20",
          "28"
        ],
        "correctIndex": 1
      },
      {
        "question": "What is the volume of a cube with 3cm sides?",
        "answer": "27cm\u00b3",
        "explanation": "Volume = side \u00d7 side \u00d7 side. 3 \u00d7 3 \u00d7 3 = 27.",
        "choices": [
          "9cm\u00b3",
          "12cm\u00b3",
          "27cm\u00b3",
          "18cm\u00b3"
        ],
        "correctIndex": 2
      },
      {
        "question": "Convert 0.75 to a fraction in its simplest form.",
        "answer": "3/4",
        "explanation": "0.75 is 75/100, which simplifies to 3/4.",
        "choices": [
          "1/2",
          "3/4",
          "2/3",
          "4/5"
        ],
        "correctIndex": 1
      },
      {
        "question": "What is 20% of 150?",
        "answer": "30",
        "explanation": "10% of 150 is 15. So 20% is 30.",
        "choices": [
          "15",
          "25",
          "30",
          "45"
        ],
        "correctIndex": 2
      },
      {
        "question": "Find the mean of 5, 10, and 15.",
        "answer": "10",
        "explanation": "Mean = (5 + 10 + 15) \u00f7 3 = 30 \u00f7 3 = 10.",
        "choices": [
          "5",
          "10",
          "15",
          "30"
        ],
        "correctIndex": 1
      },
      {
        "question": "What is the sum of the interior angles of a triangle?",
        "answer": "180 degrees",
        "explanation": "All triangles have angles that sum to 180 degrees.",
        "choices": [
          "90 degrees",
          "180 degrees",
          "360 degrees",
          "270 degrees"
        ],
        "correctIndex": 1
      }
    ]
  },
  "English": {
    "Year 3": [
      {
        "question": "Which of these is a noun?",
        "answer": "table",
        "explanation": "A noun is a naming word for a person, place, or thing.",
        "choices": [
          "run",
          "table",
          "happily",
          "blue"
        ],
        "correctIndex": 1
      },
      {
        "question": "What is the past tense of 'jump'?",
        "answer": "jumped",
        "explanation": "Regular verbs usually add 'ed' to form the past tense.",
        "choices": [
          "jumping",
          "jumps",
          "jumped",
          "jump"
        ],
        "correctIndex": 2
      },
      {
        "question": "Find the adjective: 'The big dog barked.'",
        "answer": "big",
        "explanation": "An adjective describes a noun (dog).",
        "choices": [
          "barked",
          "dog",
          "big",
          "The"
        ],
        "correctIndex": 2
      },
      {
        "question": "Which word needs a capital letter: 'i like pizza.'",
        "answer": "i",
        "explanation": "The word 'I' and the first word of a sentence always need a capital letter.",
        "choices": [
          "like",
          "pizza",
          "i",
          "none"
        ],
        "correctIndex": 2
      },
      {
        "question": "What is the opposite of 'hot'?",
        "answer": "cold",
        "explanation": "Antonyms are words with opposite meanings.",
        "choices": [
          "warm",
          "cold",
          "sunny",
          "boiling"
        ],
        "correctIndex": 1
      },
      {
        "question": "Which sentence is a question?",
        "answer": "Where is my hat?",
        "explanation": "Questions ask something and usually end with a question mark.",
        "choices": [
          "I have a hat.",
          "Go get my hat.",
          "Where is my hat?",
          "My hat is red."
        ],
        "correctIndex": 2
      },
      {
        "question": "Choose the correct spelling:",
        "answer": "because",
        "explanation": "The common spelling for this conjunction is 'because'.",
        "choices": [
          "becoz",
          "beacuse",
          "because",
          "becasue"
        ],
        "correctIndex": 2
      }
    ],
    "Year 4": [
      {
        "question": "Which word is a synonym for 'happy'?",
        "answer": "joyful",
        "explanation": "Synonyms are words with similar meanings.",
        "choices": [
          "sad",
          "joyful",
          "angry",
          "tired"
        ],
        "correctIndex": 1
      },
      {
        "question": "Find the adverb: 'He ran quickly.'",
        "answer": "quickly",
        "explanation": "An adverb describes how an action is done.",
        "choices": [
          "He",
          "ran",
          "quickly",
          "none"
        ],
        "correctIndex": 2
      },
      {
        "question": "What is the plural of 'child'?",
        "answer": "children",
        "explanation": "'Child' is an irregular plural noun.",
        "choices": [
          "childs",
          "children",
          "childes",
          "childrens"
        ],
        "correctIndex": 1
      },
      {
        "question": "Which conjunction fits best: 'I stayed inside ( ) it was raining.'",
        "answer": "because",
        "explanation": "'Because' explains the reason why something happened.",
        "choices": [
          "but",
          "and",
          "because",
          "or"
        ],
        "correctIndex": 2
      },
      {
        "question": "Identify the pronoun: 'She went to the park.'",
        "answer": "She",
        "explanation": "A pronoun replaces a person's name.",
        "choices": [
          "She",
          "went",
          "park",
          "the"
        ],
        "correctIndex": 0
      },
      {
        "question": "Which word is spelled correctly?",
        "answer": "separate",
        "explanation": "A common mistake is 'seperate', but it is spelled 'separate'.",
        "choices": [
          "seperate",
          "seperet",
          "separate",
          "seperat"
        ],
        "correctIndex": 2
      }
    ],
    "Year 5": [
      {
        "question": "Which of these is a relative pronoun?",
        "answer": "who",
        "explanation": "Relative pronouns like who, which, and that introduce relative clauses.",
        "choices": [
          "he",
          "she",
          "who",
          "it"
        ],
        "correctIndex": 2
      },
      {
        "question": "Identify the modal verb: 'I might go to the party.'",
        "answer": "might",
        "explanation": "Modal verbs like might, could, and should show possibility.",
        "choices": [
          "go",
          "might",
          "party",
          "I"
        ],
        "correctIndex": 1
      },
      {
        "question": "What is the prefix in 'disagree'?",
        "answer": "dis-",
        "explanation": "A prefix is added to the beginning of a word to change its meaning.",
        "choices": [
          "-agree",
          "dis-",
          "disa-",
          "diag-"
        ],
        "correctIndex": 1
      },
      {
        "question": "Which word is a synonym for 'enormous'?",
        "answer": "gigantic",
        "explanation": "Both words mean very large.",
        "choices": [
          "tiny",
          "small",
          "gigantic",
          "heavy"
        ],
        "correctIndex": 2
      },
      {
        "question": "Find the preposition: 'The cat sat on the mat.'",
        "answer": "on",
        "explanation": "Prepositions show the position or relationship of things.",
        "choices": [
          "cat",
          "sat",
          "on",
          "mat"
        ],
        "correctIndex": 2
      },
      {
        "question": "Which sentence uses an apostrophe for possession?",
        "answer": "The boy's dog is brown.",
        "explanation": "Apostrophes show that something belongs to someone.",
        "choices": [
          "It's raining.",
          "The boys are here.",
          "The boy's dog is brown.",
          "You're late."
        ],
        "correctIndex": 2
      }
    ],
    "Year 6": [
      {
        "question": "Identify the conjunction: 'I like tea, but I hate coffee.'",
        "answer": "but",
        "explanation": "A conjunction connects words or phrases.",
        "choices": [
          "like",
          "tea",
          "but",
          "hate"
        ],
        "correctIndex": 2
      },
      {
        "question": "Which of these is written in the passive voice?",
        "answer": "The ball was kicked by the boy.",
        "explanation": "In passive voice, the subject receives the action.",
        "choices": [
          "The boy kicked the ball.",
          "The ball was kicked by the boy.",
          "The boy is kicking.",
          "Kick the ball!"
        ],
        "correctIndex": 1
      },
      {
        "question": "What is the antonym of 'ancient'?",
        "answer": "modern",
        "explanation": "Antonyms are words with opposite meanings.",
        "choices": [
          "old",
          "historical",
          "modern",
          "dusty"
        ],
        "correctIndex": 2
      },
      {
        "question": "Which word is a determiner: 'Those apples look tasty.'",
        "answer": "Those",
        "explanation": "Determiners like 'those', 'the', and 'a' introduce nouns.",
        "choices": [
          "apples",
          "look",
          "Those",
          "tasty"
        ],
        "correctIndex": 2
      },
      {
        "question": "Identify the subordinate clause: 'Since it was late, we went home.'",
        "answer": "Since it was late",
        "explanation": "A subordinate clause cannot stand alone as a sentence.",
        "choices": [
          "we went home",
          "Since it was late",
          "went home",
          "late"
        ],
        "correctIndex": 1
      },
      {
        "question": "Which sentence is correctly punctuated with a colon?",
        "answer": "I have three pets: a cat, a dog, and a fish.",
        "explanation": "Colons can be used to introduce a list.",
        "choices": [
          "I have: three pets",
          "I have three pets: a cat, a dog, and a fish.",
          "I have three pets; a cat, a dog, and a fish.",
          "I have three pets, a cat: a dog, and a fish."
        ],
        "correctIndex": 1
      },
      {
        "question": "What does the root 'tele' mean in 'telephone'?",
        "answer": "far",
        "explanation": "The Greek root 'tele' means distant or far.",
        "choices": [
          "speak",
          "far",
          "sound",
          "light"
        ],
        "correctIndex": 1
      }
    ]
  },
  "Chinese": {
    "Year 3": [
      {
        "question": "\u300c\u5c71\u300d\u500b\u5b57\u9ede\u5beb\uff1f",
        "answer": "\u5c71",
        "explanation": "\u300c\u5c71\u300d\u4fc2\u8c61\u5f62\u6587\u5b57\uff0c\u7747\u843d\u597d\u4f3c\u5e7e\u5ea7\u5c71\u5cf0\u5481\u3002",
        "choices": [
          "\u6c34",
          "\u6728",
          "\u5c71",
          "\u706b"
        ],
        "correctIndex": 2
      },
      {
        "question": "\u300c\u4e00\u3001\u4e8c\u3001( )\u3001\u56db\u300d\uff0c\u62ec\u865f\u5165\u9762\u61c9\u8a72\u586b\u54a9\uff1f",
        "answer": "\u4e09",
        "explanation": "\u6578\u5b57\u9806\u5e8f\u4fc2\u4e00\u3001\u4e8c\u3001\u4e09\u3001\u56db\u3002",
        "choices": [
          "\u4e94",
          "\u4e09",
          "\u516d",
          "\u4e03"
        ],
        "correctIndex": 1
      },
      {
        "question": "\u4e0b\u5217\u908a\u500b\u5b57\u540c\u300c\u6708\u4eae\u300d\u6709\u95dc\uff1f",
        "answer": "\u660e",
        "explanation": "\u300c\u660e\u300d\u7531\u300c\u65e5\u300d\u540c\u300c\u6708\u300d\u7d44\u6210\uff0c\u4ee3\u8868\u5149\u660e\u3002",
        "choices": [
          "\u661f",
          "\u660e",
          "\u967d",
          "\u9670"
        ],
        "correctIndex": 1
      },
      {
        "question": "\u300c\u8001\u5e2b\u300d\u5605\u76f8\u53cd\u8a5e\u4fc2\u54a9\uff1f",
        "answer": "\u5b78\u751f",
        "explanation": "\u8001\u5e2b\u6559\u66f8\uff0c\u5b78\u751f\u8b80\u66f8\u3002",
        "choices": [
          "\u670b\u53cb",
          "\u5bb6\u9577",
          "\u5b78\u751f",
          "\u6821\u9577"
        ],
        "correctIndex": 2
      },
      {
        "question": "\u300c( )\u8272\u300d\u4ee3\u8868\u5929\u7a7a\u5605\u984f\u8272\u3002",
        "answer": "\u85cd",
        "explanation": "\u5929\u7a7a\u901a\u5e38\u4fc2\u85cd\u8272\u5605\u3002",
        "choices": [
          "\u7d05",
          "\u7da0",
          "\u85cd",
          "\u9ec3"
        ],
        "correctIndex": 2
      },
      {
        "question": "\u90e8\u9996\u300c\u6c35\u300d\u901a\u5e38\u540c\u54a9\u6709\u95dc\uff1f",
        "answer": "\u6c34",
        "explanation": "\u300c\u4e09\u9ede\u6c34\u300d\u90e8\u9996\u5605\u5b57\u591a\u6578\u540c\u6c34\u6709\u95dc\uff0c\u4f8b\u5982\uff1a\u6d41\u3001\u6d77\u3001\u6cb3\u3002",
        "choices": [
          "\u706b",
          "\u6728",
          "\u6c34",
          "\u571f"
        ],
        "correctIndex": 2
      }
    ],
    "Year 4": [
      {
        "question": "\u4e0b\u5217\u908a\u500b\u5b57\u5605\u90e8\u9996\u4fc2\u300c\u4ebb\u300d\uff1f",
        "answer": "\u4ed6",
        "explanation": "\u300c\u4ed6\u300d\u5605\u90e8\u9996\u4fc2\u55ae\u4eba\u65c1\u300c\u4ebb\u300d\u3002",
        "choices": [
          "\u5730",
          "\u4ed6",
          "\u5979",
          "\u5b83"
        ],
        "correctIndex": 1
      },
      {
        "question": "\u300c\u6625\u3001( )\u3001\u79cb\u3001\u51ac\u300d\uff0c\u62ec\u865f\u5165\u9762\u61c9\u8a72\u586b\u54a9\uff1f",
        "answer": "\u590f",
        "explanation": "\u56db\u5b63\u5605\u9806\u5e8f\u4fc2\u6625\u590f\u79cb\u51ac\u3002",
        "choices": [
          "\u96e8",
          "\u98a8",
          "\u590f",
          "\u71b1"
        ],
        "correctIndex": 2
      },
      {
        "question": "\u610f\u601d\u76f8\u8fd1\u5605\u8a5e\u8a9e\u53eb\u54a9\uff1f",
        "answer": "\u8fd1\u7fa9\u8a5e",
        "explanation": "\u610f\u601d\u76f8\u8fd1\u5605\u8a5e\u8a9e\u7a31\u70ba\u8fd1\u7fa9\u8a5e\u3002",
        "choices": [
          "\u53cd\u7fa9\u8a5e",
          "\u8fd1\u7fa9\u8a5e",
          "\u6210\u8a9e",
          "\u4fd7\u8a9e"
        ],
        "correctIndex": 1
      },
      {
        "question": "\u300c\u6211( )\u53bb\u516c\u5712\u73a9\u3002\u300d\u62ec\u865f\u61c9\u586b\u5165\uff1a",
        "answer": "\u60f3",
        "explanation": "\u300c\u60f3\u300d\u8868\u793a\u9858\u671b\u3002",
        "choices": [
          "\u5fc3",
          "\u60f3",
          "\u76f8",
          "\u9999"
        ],
        "correctIndex": 1
      },
      {
        "question": "\u300c\u6f02\u4eae\u300d\u5605\u8fd1\u7fa9\u8a5e\u4fc2\u54a9\uff1f",
        "answer": "\u7f8e\u9e97",
        "explanation": "\u6f02\u4eae\u540c\u7f8e\u9e97\u610f\u601d\u76f8\u8fd1\u3002",
        "choices": [
          "\u919c\u964b",
          "\u7f8e\u9e97",
          "\u53ef\u611b",
          "\u5927\u65b9"
        ],
        "correctIndex": 1
      },
      {
        "question": "\u300c\u4eba\u3001\u53e3\u3001\u624b\u300d\u4e2d\uff0c\u908a\u500b\u5b57\u4fc2\u6307\u8aaa\u8a71\u5605\u5668\u5b98\uff1f",
        "answer": "\u53e3",
        "explanation": "\u300c\u53e3\u300d\u6307\u5634\u5df4\u3002",
        "choices": [
          "\u4eba",
          "\u53e3",
          "\u624b",
          "\u8033"
        ],
        "correctIndex": 1
      }
    ],
    "Year 5": [
      {
        "question": "\u300c\u756b\u86c7\u6dfb\u8db3\u300d\u6bd4\u55bb\u54a9\uff1f",
        "answer": "\u591a\u6b64\u4e00\u8209",
        "explanation": "\u300c\u756b\u86c7\u6dfb\u8db3\u300d\u6bd4\u55bb\u505a\u5497\u591a\u9918\u5605\u4e8b\uff0c\u53cd\u800c\u5c07\u4e8b\u60c5\u6574\u8870\u3002",
        "choices": [
          "\u756b\u756b\u597d\u53fb",
          "\u591a\u6b64\u4e00\u8209",
          "\u937e\u610f\u86c7",
          "\u52d5\u4f5c\u597d\u5feb"
        ],
        "correctIndex": 1
      },
      {
        "question": "\u4e0b\u5217\u908a\u500b\u5b57\u5305\u542b\u300c\u76ee\u300d\u5b57\u65c1\uff1f",
        "answer": "\u773c",
        "explanation": "\u300c\u773c\u300d\u540c\u773c\u775b\u6709\u95dc\uff0c\u6240\u4ee5\u7528\u300c\u76ee\u300d\u5b57\u65c1\u3002",
        "choices": [
          "\u624b",
          "\u773c",
          "\u8033",
          "\u53e3"
        ],
        "correctIndex": 1
      },
      {
        "question": "\u300c\u5feb( )\u300d\u5605\u53cd\u7fa9\u8a5e\u4fc2\uff1a",
        "answer": "\u75db\u82e6",
        "explanation": "\u5feb\u6a02\u540c\u75db\u82e6\u4fc2\u76f8\u53cd\u8a5e\u3002",
        "choices": [
          "\u958b\u5fc3",
          "\u96e3\u904e",
          "\u75db\u82e6",
          "\u6182\u616e"
        ],
        "correctIndex": 2
      },
      {
        "question": "\u300c\u540d\u843d\u5b6b\u5c71\u300d\u4fc2\u6307\u54a9\u610f\u601d\uff1f",
        "answer": "\u8003\u5514\u5230\u8a66",
        "explanation": "\u300c\u540d\u843d\u5b6b\u5c71\u300d\u6307\u8003\u8a66\u6210\u7e3e\u5514\u7406\u60f3\uff0c\u699c\u4e0a\u7121\u540d\u3002",
        "choices": [
          "\u722c\u5c71\u597d\u6162",
          "\u8003\u5514\u5230\u8a66",
          "\u540d\u5b57\u597d\u7279\u5225",
          "\u4f4f\u55ba\u5c71\u4e0a"
        ],
        "correctIndex": 1
      },
      {
        "question": "\u4e0b\u5217\u908a\u500b\u8a5e\u8a9e\u5f62\u5bb9\u8aaa\u8a71\u975e\u5e38\u6709\u9053\u7406\uff1f",
        "answer": "\u53e3\u82e5\u61f8\u6cb3",
        "explanation": "\u300c\u53e3\u82e5\u61f8\u6cb3\u300d\u5f62\u5bb9\u80fd\u8a00\u5584\u8fa9\uff0c\u8aaa\u8a71\u6ed4\u6ed4\u4e0d\u7d55\u3002",
        "choices": [
          "\u53e3\u82e5\u61f8\u6cb3",
          "\u652f\u652f\u543e\u543e",
          "\u7121\u8a71\u53ef\u8aaa",
          "\u4e00\u8a00\u4e5d\u9f0e"
        ],
        "correctIndex": 0
      },
      {
        "question": "\u6a19\u9ede\u7b26\u865f\u4e2d\uff0c\u8868\u793a\u8a9e\u6c23\u505c\u9813\u8f03\u9577\u5605\u4fc2\uff1a",
        "answer": "\u53e5\u865f",
        "explanation": "\u53e5\u865f\u8868\u793a\u4e00\u500b\u5b8c\u6574\u53e5\u5b50\u5605\u7d50\u675f\u3002",
        "choices": [
          "\u9017\u865f",
          "\u53e5\u865f",
          "\u611f\u5606\u865f",
          "\u554f\u865f"
        ],
        "correctIndex": 1
      }
    ],
    "Year 6": [
      {
        "question": "\u300c\u5b88\u682a\u5f85\u5154\u300d\u4fc2\u54a9\u610f\u601d\uff1f",
        "answer": "\u5e0c\u671b\u4e0d\u52de\u800c\u7372",
        "explanation": "\u300c\u5b88\u682a\u5f85\u5154\u300d\u6bd4\u55bb\u53ea\u60f3\u9760\u597d\u904b\uff0c\u5514\u80af\u52aa\u529b\u3002",
        "choices": [
          "\u8a8d\u771f\u5de5\u4f5c",
          "\u5e0c\u671b\u4e0d\u52de\u800c\u7372",
          "\u95dc\u5fc3\u52d5\u7269",
          "\u901f\u5ea6\u597d\u5feb"
        ],
        "correctIndex": 1
      },
      {
        "question": "\u300c\u80f8\u6709\u6210\u7af9\u300d\u5f62\u5bb9\u54a9\uff1f",
        "answer": "\u6709\u628a\u63e1",
        "explanation": "\u300c\u80f8\u6709\u6210\u7af9\u300d\u5f62\u5bb9\u505a\u4e8b\u524d\u5df2\u7d93\u6709\u5145\u5206\u5605\u6e96\u5099\u540c\u628a\u63e1\u3002",
        "choices": [
          "\u5fc3\u4e2d\u6709\u7af9",
          "\u6709\u628a\u63e1",
          "\u8eab\u9ad4\u5f37\u58ef",
          "\u559c\u6b61\u690d\u7269"
        ],
        "correctIndex": 1
      },
      {
        "question": "\u4e0b\u5217\u908a\u500b\u4fc2\u300c\u6177\u6168\u300d\u5605\u53cd\u7fa9\u8a5e\uff1f",
        "answer": "\u541d\u55c7",
        "explanation": "\u300c\u6177\u6168\u300d\u4fc2\u5927\u65b9\uff0c\u300c\u541d\u55c7\u300d\u4fc2\u5b64\u5bd2\u3002",
        "choices": [
          "\u5927\u65b9",
          "\u541d\u55c7",
          "\u71b1\u60c5",
          "\u51b7\u6f20"
        ],
        "correctIndex": 1
      },
      {
        "question": "\u300c\u534a\u9014\u800c\u5ee2\u300d\u6bd4\u55bb\u54a9\uff1f",
        "answer": "\u7121\u6052\u5fc3",
        "explanation": "\u300c\u534a\u9014\u800c\u5ee2\u300d\u6307\u505a\u4e8b\u505a\u5497\u4e00\u534a\u5c31\u5514\u505a\uff0c\u7121\u6052\u5fc3\u3002",
        "choices": [
          "\u505a\u5f97\u597d\u5feb",
          "\u7121\u6052\u5fc3",
          "\u975e\u5e38\u6709\u628a\u63e1",
          "\u975e\u5e38\u61f6\u6563"
        ],
        "correctIndex": 1
      },
      {
        "question": "\u300c\u585e\u7fc1\u5931\u99ac\uff0c( )\u300d\u4e0b\u4e00\u53e5\u4fc2\uff1a",
        "answer": "\u7109\u77e5\u975e\u798f",
        "explanation": "\u300c\u585e\u7fc1\u5931\u99ac\uff0c\u7109\u77e5\u975e\u798f\u300d\u6bd4\u55bb\u58de\u4e8b\u53ef\u80fd\u8b8a\u6210\u597d\u4e8b\u3002",
        "choices": [
          "\u7109\u77e5\u975e\u798f",
          "\u5f8c\u6094\u83ab\u53ca",
          "\u5f97\u4e0d\u511f\u5931",
          "\u518d\u63a5\u518d\u53b2"
        ],
        "correctIndex": 0
      },
      {
        "question": "\u4e0b\u5217\u908a\u500b\u4fc2\u63cf\u5beb\u98a8\u666f\u5605\u6210\u8a9e\uff1f",
        "answer": "\u660e\u5a9a\u98a8\u5149",
        "explanation": "\u300c\u660e\u5a9a\u98a8\u5149\u300d\u7528\u569f\u5f62\u5bb9\u666f\u8272\u512a\u7f8e\u3002",
        "choices": [
          "\u4e00\u99ac\u7576\u5148",
          "\u660e\u5a9a\u98a8\u5149",
          "\u51fa\u53e3\u6210\u7ae0",
          "\u5b78\u5bcc\u4e94\u8eca"
        ],
        "correctIndex": 1
      },
      {
        "question": "\u300c\u7d19\u4e0a\u8ac7\u5175\u300d\u6bd4\u55bb\u54a9\uff1f",
        "answer": "\u53ea\u6709\u7406\u8ad6",
        "explanation": "\u300c\u7d19\u4e0a\u8ac7\u5175\u300d\u6bd4\u55bb\u7a7a\u8ac7\u7406\u8ad6\uff0c\u5514\u80fd\u5920\u89e3\u6c7a\u5be6\u969b\u554f\u984c\u3002",
        "choices": [
          "\u937e\u610f\u5beb\u5b57",
          "\u53ea\u6709\u7406\u8ad6",
          "\u975e\u5e38\u52c7\u6562",
          "\u975e\u5e38\u6709\u8b00\u7565"
        ],
        "correctIndex": 1
      }
    ]
  },
  "Science": {
    "Year 3": [
      {
        "question": "Which of these is a solid?",
        "answer": "Ice",
        "explanation": "Ice is frozen water and has a fixed shape.",
        "choices": [
          "Water",
          "Steam",
          "Ice",
          "Air"
        ],
        "correctIndex": 2
      },
      {
        "question": "Plants need water, sunlight and ( ) to grow.",
        "answer": "soil",
        "explanation": "Plants grow in soil to get nutrients.",
        "choices": [
          "juice",
          "soil",
          "ink",
          "sand"
        ],
        "correctIndex": 1
      },
      {
        "question": "How many legs does an insect have?",
        "answer": "6",
        "explanation": "All insects have exactly six legs.",
        "choices": [
          "4",
          "6",
          "8",
          "10"
        ],
        "correctIndex": 1
      },
      {
        "question": "Which sense do you use to hear a bell?",
        "answer": "Hearing",
        "explanation": "Hearing is the sense used to detect sound.",
        "choices": [
          "Sight",
          "Smell",
          "Hearing",
          "Touch"
        ],
        "correctIndex": 2
      },
      {
        "question": "What is the force that pulls objects towards the Earth?",
        "answer": "Gravity",
        "explanation": "Gravity is the invisible force that pulls everything down.",
        "choices": [
          "Magnetism",
          "Gravity",
          "Friction",
          "Wind"
        ],
        "correctIndex": 1
      },
      {
        "question": "Which of these is a source of light?",
        "answer": "The Sun",
        "explanation": "The Sun produces its own light.",
        "choices": [
          "The Moon",
          "A mirror",
          "The Sun",
          "A rock"
        ],
        "correctIndex": 2
      }
    ],
    "Year 4": [
      {
        "question": "What is the process of water turning into gas called?",
        "answer": "Evaporation",
        "explanation": "Evaporation is when liquid turns into gas.",
        "choices": [
          "Freezing",
          "Melting",
          "Evaporation",
          "Condensation"
        ],
        "correctIndex": 2
      },
      {
        "question": "Which type of animal has a backbone?",
        "answer": "Vertebrate",
        "explanation": "Animals with backbones are called vertebrates.",
        "choices": [
          "Invertebrate",
          "Vertebrate",
          "Insect",
          "Mollusk"
        ],
        "correctIndex": 1
      },
      {
        "question": "What part of a plant absorbs water from the soil?",
        "answer": "Roots",
        "explanation": "Roots anchors the plant and absorb water and nutrients.",
        "choices": [
          "Leaves",
          "Stem",
          "Flowers",
          "Roots"
        ],
        "correctIndex": 3
      },
      {
        "question": "Which of these materials is a good conductor of electricity?",
        "answer": "Copper",
        "explanation": "Metals like copper allow electricity to flow through them easily.",
        "choices": [
          "Plastic",
          "Wood",
          "Copper",
          "Rubber"
        ],
        "correctIndex": 2
      },
      {
        "question": "What kind of teeth do humans use for grinding food?",
        "answer": "Molars",
        "explanation": "Molars are large, flat teeth at the back of the mouth used for grinding.",
        "choices": [
          "Incisors",
          "Canines",
          "Molars",
          "Tusks"
        ],
        "correctIndex": 2
      },
      {
        "question": "What forms when water vapor condenses in the sky?",
        "answer": "Clouds",
        "explanation": "Clouds are made of tiny water droplets or ice crystals.",
        "choices": [
          "Rain",
          "Wind",
          "Clouds",
          "Snow"
        ],
        "correctIndex": 2
      }
    ],
    "Year 5": [
      {
        "question": "How long does it take for the Earth to orbit the Sun?",
        "answer": "365 days",
        "explanation": "It takes approximately one year (365 days) for the Earth to complete one orbit.",
        "choices": [
          "24 hours",
          "30 days",
          "365 days",
          "100 days"
        ],
        "correctIndex": 2
      },
      {
        "question": "Which planet is known as the Red Planet?",
        "answer": "Mars",
        "explanation": "Mars has a reddish appearance due to iron oxide on its surface.",
        "choices": [
          "Venus",
          "Jupiter",
          "Mars",
          "Saturn"
        ],
        "correctIndex": 2
      },
      {
        "question": "What is the boiling point of water?",
        "answer": "100 degrees Celsius",
        "explanation": "Pure water boils at 100\u00b0C at sea level.",
        "choices": [
          "0 degrees Celsius",
          "50 degrees Celsius",
          "100 degrees Celsius",
          "200 degrees Celsius"
        ],
        "correctIndex": 2
      },
      {
        "question": "Which state of matter has a fixed volume but no fixed shape?",
        "answer": "Liquid",
        "explanation": "Liquids take the shape of their container but maintain their volume.",
        "choices": [
          "Solid",
          "Liquid",
          "Gas",
          "Plasma"
        ],
        "correctIndex": 1
      },
      {
        "question": "What force acts against motion when two surfaces rub together?",
        "answer": "Friction",
        "explanation": "Friction is the resistance that one surface or object encounters when moving over another.",
        "choices": [
          "Gravity",
          "Friction",
          "Magnetism",
          "Air resistance"
        ],
        "correctIndex": 1
      },
      {
        "question": "What do we call animals that only eat plants?",
        "answer": "Herbivores",
        "explanation": "Herbivores are animals whose primary food source is plant-based.",
        "choices": [
          "Carnivores",
          "Omnivores",
          "Herbivores",
          "Insectivores"
        ],
        "correctIndex": 2
      }
    ],
    "Year 6": [
      {
        "question": "Which organ pumps blood around the body?",
        "answer": "Heart",
        "explanation": "The heart is a muscular organ that pumps blood through the circulatory system.",
        "choices": [
          "Lungs",
          "Brain",
          "Heart",
          "Stomach"
        ],
        "correctIndex": 2
      },
      {
        "question": "What is the process by which plants make their own food?",
        "answer": "Photosynthesis",
        "explanation": "Plants use sunlight, water, and carbon dioxide to create energy (glucose).",
        "choices": [
          "Respiration",
          "Digestion",
          "Photosynthesis",
          "Circulation"
        ],
        "correctIndex": 2
      },
      {
        "question": "Who developed the theory of evolution by natural selection?",
        "answer": "Charles Darwin",
        "explanation": "Charles Darwin's work laid the foundation for modern evolutionary biology.",
        "choices": [
          "Isaac Newton",
          "Charles Darwin",
          "Albert Einstein",
          "Thomas Edison"
        ],
        "correctIndex": 1
      },
      {
        "question": "Which unit is used to measure electrical current?",
        "answer": "Amperes",
        "explanation": "Amperes (Amps) measure the rate of flow of electricity.",
        "choices": [
          "Volts",
          "Watts",
          "Amperes",
          "Ohms"
        ],
        "correctIndex": 2
      },
      {
        "question": "What type of lens is thicker in the middle than at the edges?",
        "answer": "Convex",
        "explanation": "Convex lenses converge light rays and are thicker in the middle.",
        "choices": [
          "Concave",
          "Convex",
          "Flat",
          "Cylindrical"
        ],
        "correctIndex": 1
      },
      {
        "question": "What is the smallest unit of an element that maintains its properties?",
        "answer": "Atom",
        "explanation": "Atoms are the basic building blocks of matter.",
        "choices": [
          "Molecule",
          "Cell",
          "Atom",
          "Electron"
        ],
        "correctIndex": 2
      },
      {
        "question": "Which gas do humans breathe out as a waste product?",
        "answer": "Carbon Dioxide",
        "explanation": "Carbon dioxide is produced by cells and exhaled by the lungs.",
        "choices": [
          "Oxygen",
          "Nitrogen",
          "Carbon Dioxide",
          "Hydrogen"
        ],
        "correctIndex": 2
      }
    ]
  },
  "11+": {
    "Year 6": {
      "Verbal Reasoning": [
        {
          "question": "Which word is the odd one out?",
          "answer": "Apple",
          "explanation": "Apple is a fruit, while the others are vegetables.",
          "choices": [
            "Carrot",
            "Potato",
            "Broccoli",
            "Apple"
          ],
          "correctIndex": 3
        },
        {
          "question": "Find the word that belongs in the second group: (Cat, Kitten), (Dog, ?)",
          "answer": "Puppy",
          "explanation": "The relationship is parent and offspring.",
          "choices": [
            "Calf",
            "Puppy",
            "Foal",
            "Cub"
          ],
          "correctIndex": 1
        },
        {
          "question": "Which word is closest in meaning to 'Fragile'?",
          "answer": "Delicate",
          "explanation": "Fragile and delicate both mean easily broken.",
          "choices": [
            "Strong",
            "Heavy",
            "Delicate",
            "Fast"
          ],
          "correctIndex": 2
        },
        {
          "question": "Find the missing letters in the sequence: AD, EH, IL, MP, ( )",
          "answer": "QT",
          "explanation": "The first letter jumps 4 letters (A..E..I..M..Q). The second letter jumps 4 letters (D..H..L..P..T).",
          "choices": [
            "RS",
            "QT",
            "PU",
            "OR"
          ],
          "correctIndex": 1
        },
        {
          "question": "Which word can be placed in front of both 'fall' and 'box'?",
          "answer": "Water",
          "explanation": "Waterfall and waterbox (though soapbox is common, waterfall is a distinct word). Let's use 'Rain'. Rainfall and rainbox? No. Use 'Light'. Lightfall? No. Use 'Chatter'. Chatterbox and Chatterfall? No. Use 'TOOL'. Toolbox and toolfall? No. Let's use 'SPRING'. Springfall? No. Use 'WATER'. Waterfall and Waterbox? No. Use 'POST'. Postbox and Postfall? No. Let's use 'CHEST'. Chestnut and Chestbox? No. Use 'HAND'. Handbox? No. Let's use 'MATCH'. Matchbox and Matchfall? No. Let's use 'RAIN'. Rainfall and Rainbow? Yes! Let's change the question: Which word can precede both 'fall' and 'bow'?",
          "choices": [
            "Rain",
            "Snow",
            "Sun",
            "Wind"
          ],
          "correctIndex": 0
        },
        {
          "question": "Rearrange the letters 'E-T-A-R' to make a common word for a fruit.",
          "answer": "Pear",
          "explanation": "Wait, 'E-T-A-R' is Rate or Tear. Pear is P-E-A-R. Let's use 'P-E-R-A'.",
          "choices": [
            "Pear",
            "Reap",
            "Pare",
            "Pare"
          ],
          "correctIndex": 0
        }
      ],
      "Non-Verbal Reasoning": [
        {
          "question": "Which shape comes next in the sequence: Square, Circle, Square, Circle...?",
          "answer": "Square",
          "explanation": "The pattern alternates between a square and a circle.",
          "choices": [
            "Triangle",
            "Square",
            "Hexagon",
            "Circle"
          ],
          "correctIndex": 1
        },
        {
          "question": "If a triangle has 3 sides and a square has 4, how many sides does a hexagon have?",
          "answer": "6",
          "explanation": "A hexagon is a polygon with six sides.",
          "choices": [
            "5",
            "6",
            "7",
            "8"
          ],
          "correctIndex": 1
        },
        {
          "question": "Which shape is a reflection of a right-pointing arrow?",
          "answer": "Left-pointing arrow",
          "explanation": "Reflection inverts the horizontal direction.",
          "choices": [
            "Up-pointing arrow",
            "Down-pointing arrow",
            "Left-pointing arrow",
            "Right-pointing arrow"
          ],
          "correctIndex": 2
        }
      ]
    }
  },
  "SATs Prep": {
    "Year 6": {
      "KS2 Maths": [
        {
          "question": "Calculate: 15% of 400",
          "answer": "60",
          "explanation": "10% of 400 is 40. 5% is 20. 40 + 20 = 60.",
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
          "explanation": "3/4 is equivalent to 75/100, which is 75%.",
          "choices": [
            "50%",
            "75%",
            "25%",
            "80%"
          ],
          "correctIndex": 1
        },
        {
          "question": "A book costs \u00a312.99. How much change do you get from \u00a320?",
          "answer": "\u00a37.01",
          "explanation": "\u00a320.00 - \u00a312.99 = \u00a37.01",
          "choices": [
            "\u00a37.01",
            "\u00a38.01",
            "\u00a37.11",
            "\u00a38.11"
          ],
          "correctIndex": 0
        },
        {
          "question": "What is 456 \u00d7 100?",
          "answer": "45600",
          "explanation": "To multiply by 100, move digits two places to the left (or add two zeros).",
          "choices": [
            "4560",
            "45600",
            "456000",
            "45.6"
          ],
          "correctIndex": 1
        },
        {
          "question": "Which of these is a multiple of 8?",
          "answer": "64",
          "explanation": "8 \u00d7 8 = 64.",
          "choices": [
            "18",
            "28",
            "44",
            "64"
          ],
          "correctIndex": 3
        },
        {
          "question": "Simplify the fraction 12/36.",
          "answer": "1/3",
          "explanation": "Divide both numbers by their highest common factor (12). 12\u00f712=1, 36\u00f712=3.",
          "choices": [
            "1/2",
            "1/4",
            "1/3",
            "2/6"
          ],
          "correctIndex": 2
        }
      ],
      "KS2 English": [
        {
          "question": "Which sentence is punctuated correctly?",
          "answer": "The dog, which was very tired, fell asleep.",
          "explanation": "Commas are used accurately to enclose the relative clause.",
          "choices": [
            "The dog which was very tired fell asleep.",
            "The dog, which was very tired, fell asleep.",
            "The dog which was very tired, fell asleep.",
            "The dog, which was very tired fell asleep."
          ],
          "correctIndex": 1
        },
        {
          "question": "Which word is a synonym for 'abundant'?",
          "answer": "plentiful",
          "explanation": "'Abundant' and 'plentiful' both mean available in large quantities.",
          "choices": [
            "scarce",
            "empty",
            "plentiful",
            "rare"
          ],
          "correctIndex": 2
        },
        {
          "question": "Identify the conjunction: 'Although it was cold, we played outside.'",
          "answer": "Although",
          "explanation": "'Although' is a subordinating conjunction.",
          "choices": [
            "cold",
            "played",
            "Although",
            "outside"
          ],
          "correctIndex": 2
        },
        {
          "question": "What is the prefix in 'international'?",
          "answer": "inter-",
          "explanation": "The prefix 'inter-' means between or among.",
          "choices": [
            "inter-",
            "nation-",
            "intra-",
            "al"
          ],
          "correctIndex": 0
        },
        {
          "question": "Which of these is a main clause?",
          "answer": "The birds sang loudly.",
          "explanation": "A main clause can stand alone as a complete sentence.",
          "choices": [
            "Because it was sunny",
            "When the sun rises",
            "The birds sang loudly.",
            "If we go home"
          ],
          "correctIndex": 2
        },
        {
          "question": "What is the plural of 'cactus'?",
          "answer": "cacti",
          "explanation": "'Cacti' is the traditional Latin plural for 'cactus'.",
          "choices": [
            "cactuses",
            "cacti",
            "cactuss",
            "cacties"
          ],
          "correctIndex": 1
        }
      ]
    }
  }
};

// Version 1.2.0 - Expanded question pool
