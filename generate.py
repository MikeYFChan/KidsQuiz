import json
import random

def get_maths(year, count):
    qs = []
    for _ in range(count):
        op = random.choice(['+', '-', '*', '/'])
        if year == 'Year 3':
            if op == '+':
                a, b = random.randint(10, 99), random.randint(10, 99)
                ans = a + b
                q = f"What is {a} + {b}?"
            elif op == '-':
                a = random.randint(20, 99)
                b = random.randint(10, a)
                ans = a - b
                q = f"What is {a} - {b}?"
            elif op == '*':
                a, b = random.randint(2, 12), random.randint(2, 12)
                ans = a * b
                q = f"What is {a} × {b}?"
            else:
                b, ans = random.randint(2, 12), random.randint(2, 12)
                a = b * ans
                q = f"What is {a} ÷ {b}?"
        else:
            if op == '+':
                a, b = random.randint(100, 999), random.randint(100, 999)
                ans = a + b
                q = f"What is {a} + {b}?"
            elif op == '-':
                a = random.randint(200, 999)
                b = random.randint(100, a)
                ans = a - b
                q = f"What is {a} - {b}?"
            elif op == '*':
                a, b = random.randint(10, 99), random.randint(5, 20)
                ans = a * b
                q = f"What is {a} × {b}?"
            else:
                b, ans = random.randint(5, 20), random.randint(10, 50)
                a = b * ans
                q = f"What is {a} ÷ {b}?"

        choices = {str(ans)}
        while len(choices) < 4:
            wrong = ans + random.randint(-20, 20)
            if wrong != ans and wrong > 0:
                choices.add(str(wrong))
        
        c_list = list(choices)
        random.shuffle(c_list)
        qs.append({
            "question": q,
            "answer": str(ans),
            "explanation": f"{q.replace('What is ', '').replace('?', '')} = {ans}",
            "choices": c_list,
            "correctIndex": c_list.index(str(ans)),
            "needsReview": False,
            "meta": {"generator": "integer"}
        })
    return qs

def get_english(year, count):
    y3_words = [("happy", "glad"), ("sad", "unhappy"), ("big", "large"), ("small", "tiny"), ("fast", "quick"), ("slow", "sluggish"), ("hot", "warm"), ("cold", "chilly"), ("good", "excellent"), ("bad", "awful")]
    y6_words = [("abundant", "plentiful"), ("benevolent", "kind"), ("candid", "honest"), ("diligent", "hard-working"), ("eloquent", "fluent"), ("frugal", "thrifty"), ("gregarious", "sociable"), ("haughty", "arrogant"), ("inevitable", "unavoidable"), ("lucid", "clear")]
    verbs = [("run", "ran"), ("eat", "ate"), ("go", "went"), ("see", "saw"), ("do", "did"), ("have", "had"), ("say", "said"), ("make", "made"), ("know", "knew"), ("think", "thought")]
    
    words = y3_words if year == "Year 3" else y6_words
    qs = []
    
    for i in range(count):
        ctype = random.choice(["synonym", "past_tense", "antonym"])
        if ctype == "synonym":
            pair = random.choice(words)
            q = f"What is a synonym for '{pair[0]}'?"
            ans = pair[1]
            choices = {ans}
            while len(choices) < 4:
                w = random.choice(words)[1]
                if w != ans: choices.add(w)
        elif ctype == "past_tense":
            pair = random.choice(verbs)
            q = f"What is the past tense of '{pair[0]}'?"
            ans = pair[1]
            choices = {ans}
            while len(choices) < 4:
                w = random.choice(verbs)[1]
                if w != ans: choices.add(w)
        else:
            pair = random.choice(words)
            q = f"Which word has a similar meaning to '{pair[0]}'?"
            ans = pair[1]
            choices = {ans}
            while len(choices) < 4:
                w = random.choice(words)[1]
                if w != ans: choices.add(w)

        c_list = list(choices)
        random.shuffle(c_list)
        qs.append({
            "question": f"[{i+1}] {q}",
            "answer": ans,
            "explanation": f"The answer is {ans}.",
            "choices": c_list,
            "correctIndex": c_list.index(ans)
        })
    return qs

def get_science(year, count):
    y3_facts = [("Water boils at what temperature?", "100°C", ["50°C", "90°C", "0°C"]), ("What gas do plants absorb?", "Carbon Dioxide", ["Oxygen", "Nitrogen", "Helium"]), ("How many legs does a spider have?", "8", ["6", "10", "4"]), ("Is the sun a planet or a star?", "Star", ["Planet", "Moon", "Asteroid"])]
    y6_facts = [("What is the chemical symbol for water?", "H2O", ["CO2", "O2", "NaCl"]), ("What force pulls objects toward Earth?", "Gravity", ["Magnetism", "Friction", "Tension"]), ("Which planet is known as the Red Planet?", "Mars", ["Venus", "Jupiter", "Saturn"]), ("What is the powerhouse of the cell?", "Mitochondria", ["Nucleus", "Ribosome", "Membrane"])]
    
    facts = y3_facts if year == "Year 3" else y6_facts
    qs = []
    for i in range(count):
        fact = facts[i % len(facts)]
        q, ans, distractors = fact
        choices = [ans] + distractors[:3]
        random.shuffle(choices)
        qs.append({
            "question": f"[{i+1}] {q}",
            "answer": ans,
            "explanation": f"The answer is {ans}.",
            "choices": choices,
            "correctIndex": choices.index(ans)
        })
    return qs

def get_chinese(year, count):
    y3_idioms = [("一石二鳥", "一", ["二", "三", "四"]), ("守株待兔", "兔", ["貓", "狗", "豬"]), ("畫蛇添足", "足", ["手", "頭", "尾"]), ("井底之蛙", "蛙", ["魚", "鳥", "蟲"])]
    y6_idioms = [("鍥而不捨", "鍥", ["刻", "切", "割"]), ("破釜沉舟", "釜", ["鍋", "碗", "盆"]), ("亡羊補牢", "牢", ["籠", "圈", "網"]), ("掩耳盜鈴", "鈴", ["鐘", "鼓", "鑼"])]
    
    idioms = y3_idioms if year == "Year 3" else y6_idioms
    qs = []
    for i in range(count):
        idiom, ans, distractors = idioms[i % len(idioms)]
        q = f"請完成成語：「{idiom.replace(ans, '（　）')}」"
        choices = [ans] + distractors[:3]
        random.shuffle(choices)
        qs.append({
            "question": f"[{i+1}] {q}",
            "answer": ans,
            "explanation": f"正確成語是{idiom}。",
            "choices": choices,
            "correctIndex": choices.index(ans)
        })
    return qs

def get_11plus_vr(count):
    qs = []
    for i in range(count):
        words = ["cat", "dog", "bird", "fish", "horse", "cow", "pig", "sheep"]
        target = random.choice(words)
        q = f"Which word is the odd one out: {target}, apple, banana, orange?"
        ans = target
        distractors = ["apple", "banana", "orange"]
        choices = [ans] + distractors
        random.shuffle(choices)
        qs.append({
            "question": f"[{i+1}] {q}",
            "answer": ans,
            "explanation": f"{target} is an animal, the rest are fruits.",
            "choices": choices,
            "correctIndex": choices.index(ans)
        })
    return qs

def get_11plus_em(count):
    # Mix of math and english
    return get_maths("Year 6", count // 2) + get_english("Year 6", count - count // 2)


with open('questions.json', encoding='utf-8') as f:
    data = json.load(f)

for subject in data:
    for year in data[subject]:
        current_len = len(data[subject][year])
        needed = 100 - current_len
        if needed > 0:
            if subject == 'Maths':
                data[subject][year].extend(get_maths(year, needed))
            elif subject == 'English':
                data[subject][year].extend(get_english(year, needed))
            elif subject == 'Science':
                data[subject][year].extend(get_science(year, needed))
            elif subject == 'Chinese':
                data[subject][year].extend(get_chinese(year, needed))
            elif subject == '11+ Verbal Reasoning':
                data[subject][year].extend(get_11plus_vr(needed))
            elif subject == '11+ English & Maths':
                data[subject][year].extend(get_11plus_em(needed))

with open('questions.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, indent=2, ensure_ascii=False)

for subject in data:
    for year in data[subject]:
        print(f'{subject} {year}: {len(data[subject][year])}')
