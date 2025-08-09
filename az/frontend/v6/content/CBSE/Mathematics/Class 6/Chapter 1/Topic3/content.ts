// Topic 3: Roman numerals (up to 1,000)
// content.ts will be created here for the topic.

import { QuizQuestion, TopicQuiz, TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic3Content: TopicContent = {
    id: 'cl6_ch1_t3',
    topicNumber: 3,
    topicName: "Roman Numerals (up to 1,000)",
    duration: 45,
    description: "Understanding Roman numerals, their rules, and conversion between Roman and Hindu-Arabic numerals",
    explanation: `
# Roman Numerals (up to 1,000) 🏛️

Roman numerals are an ancient number system that uses letters from the Latin alphabet to represent numbers. They're still used today in various contexts like clocks, book chapters, and movie credits! Let's learn how to read and write them. 📚

## Basic Roman Numerals 🔢
Here are the basic symbols and their values:
- I = 1
- V = 5
- X = 10
- L = 50
- C = 100
- D = 500
- M = 1000

## Rules for Writing Roman Numerals 📝
1. **Addition Rule** ➕
   - When a smaller numeral follows a larger one, add them
   - Example: VI = 5 + 1 = 6
   - Example: XII = 10 + 1 + 1 = 12

2. **Subtraction Rule** ➖
   - When a smaller numeral comes before a larger one, subtract it
   - Only I, X, and C can be used for subtraction
   - Example: IV = 5 - 1 = 4
   - Example: IX = 10 - 1 = 9

3. **Repetition Rule** 🔄
   - A numeral can be repeated up to 3 times
   - Example: III = 3
   - Example: XXX = 30

4. **No Zero** 0️⃣
   - Roman numerals don't have a symbol for zero
   - This is one reason why they're not used for calculations

## Examples of Roman Numerals 🌟
1. **Numbers 1-10**:
   - I = 1
   - II = 2
   - III = 3
   - IV = 4
   - V = 5
   - VI = 6
   - VII = 7
   - VIII = 8
   - IX = 9
   - X = 10

2. **Tens (10-100)**:
   - X = 10
   - XX = 20
   - XXX = 30
   - XL = 40
   - L = 50
   - LX = 60
   - LXX = 70
   - LXXX = 80
   - XC = 90
   - C = 100

3. **Hundreds (100-1000)**:
   - C = 100
   - CC = 200
   - CCC = 300
   - CD = 400
   - D = 500
   - DC = 600
   - DCC = 700
   - DCCC = 800
   - CM = 900
   - M = 1000

## Converting Hindu-Arabic to Roman Numerals 🔄
Let's practice converting some numbers:
1. **Example**: Convert 48 to Roman numerals
   - 40 = XL
   - 8 = VIII
   - 48 = XLVIII

2. **Example**: Convert 99 to Roman numerals
   - 90 = XC
   - 9 = IX
   - 99 = XCIX

3. **Example**: Convert 444 to Roman numerals
   - 400 = CD
   - 40 = XL
   - 4 = IV
   - 444 = CDXLIV

## Converting Roman to Hindu-Arabic Numerals 🔄
Let's practice converting some Roman numerals:
1. **Example**: Convert XIV to Hindu-Arabic
   - X = 10
   - IV = 4
   - XIV = 14

2. **Example**: Convert LXXVIII to Hindu-Arabic
   - L = 50
   - XX = 20
   - VIII = 8
   - LXXVIII = 78

3. **Example**: Convert DCCLVI to Hindu-Arabic
   - D = 500
   - CC = 200
   - L = 50
   - VI = 6
   - DCCLVI = 756

## Where We See Roman Numerals Today 🌍
1. **Clocks and Watches** ⏰
   - Many traditional clocks use Roman numerals
   - Example: IV for 4 o'clock

2. **Book Chapters** 📚
   - Often numbered with Roman numerals
   - Example: Chapter XII

3. **Movie Credits** 🎬
   - Used for copyright years
   - Example: © MMXXIII (2023)

4. **Monuments and Buildings** 🏛️
   - Used for dates and numbers
   - Example: Built in MDCCCXCIX (1899)

## Common Mistakes to Avoid ❌
1. **Incorrect Subtraction** ➖
   - Only I, X, and C can be used for subtraction
   - Wrong: VX (can't subtract V from X)
   - Right: V

2. **Too Many Repetitions** 🔄
   - Can't repeat a numeral more than 3 times
   - Wrong: IIII
   - Right: IV

3. **Wrong Order** ⬅️
   - Must follow the rules of addition and subtraction
   - Wrong: IIV
   - Right: III

## Practice Exercises 🏋️‍♀️
1. Convert to Roman numerals:
   - 27 → XXVII
   - 49 → XLIX
   - 99 → XCIX
   - 500 → D
   - 999 → CMXCIX

2. Convert to Hindu-Arabic numerals:
   - XXV → 25
   - XLIV → 44
   - LXXXVIII → 88
   - DCC → 700
   - CMXCIX → 999

## Summary ✨
Roman numerals are:
- An ancient number system using letters
- Still used in modern contexts
- Follow specific rules for writing
- Can be converted to and from Hindu-Arabic numerals

Key rules to remember:
- Addition when smaller follows larger
- Subtraction when smaller precedes larger
- Maximum of 3 repetitions
- No symbol for zero

Practice regularly to become comfortable with Roman numerals! 🎯
`,
    quiz: {
        questions: [
            ...easyQuestions,
            ...mediumQuestions
        ]
    }
};
