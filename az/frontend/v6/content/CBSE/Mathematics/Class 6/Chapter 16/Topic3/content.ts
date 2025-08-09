// Topic 3: Mental math tricks
// content.ts will be created here for the topic.

import { generateId } from '../../../../../../app/utils/idGenerator';
import { QuizQuestion, TopicQuiz, TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic3Content: TopicContent = {
    id: 'cl6_ch16_t3',
    topicNumber: 3,
    topicName: "Mental Math Tricks",
    duration: 45,
    description: "Learn quick and efficient mental math techniques to solve problems faster",
    explanation: `
# Mental Math Tricks 🧠

Welcome to the world of mental math! 🌟 In this topic, we'll learn some amazing tricks to solve math problems quickly in your head. Let's get started! 🚀

## Quick Addition Tricks ➕

1. **Breaking Numbers Apart** 🔍
   - Break numbers into easier parts to add
   - Example: 47 + 38 = (40 + 30) + (7 + 8) = 70 + 15 = 85

2. **Using Complements** 🔄
   - Use complements to make numbers round
   - Example: 98 + 47 = (100 - 2) + 47 = 100 + (47 - 2) = 145

3. **Adding from Left to Right** ⬅️
   - Start with the highest place value
   - Example: 345 + 267 = (300 + 200) + (40 + 60) + (5 + 7) = 500 + 100 + 12 = 612

## Quick Subtraction Tricks ➖

1. **Using Complements** 🔄
   - Subtract by adding the complement
   - Example: 100 - 37 = 63 (because 37 + 63 = 100)

2. **Breaking Down Numbers** 🔍
   - Break the subtraction into easier parts
   - Example: 85 - 47 = (85 - 40) - 7 = 45 - 7 = 38

3. **Adding to Make Round Numbers** 🔄
   - Add the same number to both to make it easier
   - Example: 93 - 68 = (95 - 70) = 25 (added 2 to both numbers)

## Multiplication Shortcuts ✖️

1. **Multiplying by 10, 100, 1000** 🔢
   - Just add zeros
   - Example: 45 × 100 = 4500

2. **Multiplying by 5** ✋
   - Multiply by 10 and divide by 2
   - Example: 24 × 5 = (24 × 10) ÷ 2 = 240 ÷ 2 = 120

3. **Multiplying by 9** 9️⃣
   - Multiply by 10 and subtract the number
   - Example: 7 × 9 = (7 × 10) - 7 = 70 - 7 = 63

4. **Multiplying by 11** 🔢
   - For two-digit numbers: add the digits and put the sum in the middle
   - Example: 35 × 11 = 3 (3+5) 5 = 385

## Division Tricks ➗

1. **Dividing by 10, 100, 1000** 🔢
   - Move the decimal point
   - Example: 450 ÷ 10 = 45.0

2. **Dividing by 5** ✋
   - Multiply by 2 and divide by 10
   - Example: 85 ÷ 5 = (85 × 2) ÷ 10 = 170 ÷ 10 = 17

3. **Checking Divisibility** ✅
   - By 2: Last digit is even
   - By 3: Sum of digits divisible by 3
   - By 5: Last digit is 0 or 5
   - By 9: Sum of digits divisible by 9

## Special Number Patterns 🔢

1. **Squaring Numbers Ending in 5** 5️⃣
   - Example: 25² = (2 × 3) followed by 25 = 625

2. **Multiplying Numbers Close to 100** 💯
   - Example: 98 × 97 = (100 - 2) × (100 - 3) = 10000 - 500 + 6 = 9506

3. **Adding Consecutive Numbers** ➕
   - Sum = (first + last) × number of terms ÷ 2
   - Example: 1+2+3+4+5 = (1+5) × 5 ÷ 2 = 15

## Practice Problems 🏋️‍♀️

1. **Example 1**: 67 + 48 = ?
   - Solution: (60 + 40) + (7 + 8) = 100 + 15 = 115

2. **Example 2**: 125 × 8 = ?
   - Solution: 125 × 8 = 1000 (memorize this common multiplication)

3. **Example 3**: 144 ÷ 12 = ?
   - Solution: 12 × 12 = 144, so 144 ÷ 12 = 12

## Common Mistakes to Avoid ❌

1. **Rushing Through Steps** ⏱️
   - Take your time to ensure accuracy
   - Double-check your calculations

2. **Forgetting to Break Down Numbers** 🔍
   - Always break complex problems into simpler parts
   - Don't try to do everything at once

3. **Not Using Shortcuts** 🚀
   - Remember to use the tricks you've learned
   - Practice makes perfect

## Summary ✨

In this topic, we learned:
- Quick addition and subtraction techniques
- Multiplication shortcuts
- Division tricks
- Special number patterns
- How to avoid common mistakes
- The importance of practice

### Additional Examples and Sample Questions:

1. **Example**: Calculate 78 + 45 mentally
   - Solution: (70 + 40) + (8 + 5) = 110 + 13 = 123

2. **Example**: Find 36 × 5 quickly
   - Solution: (36 × 10) ÷ 2 = 360 ÷ 2 = 180

3. **Question**: What is 99 × 7?
   - Solution: (100 × 7) - 7 = 700 - 7 = 693

4. **Question**: Divide 150 by 5 mentally
   - Solution: (150 × 2) ÷ 10 = 300 ÷ 10 = 30
`,
    quiz: {
        questions: [
            ...easyQuestions,
            ...mediumQuestions
        ]
    }
};
