// Topic 2: Addition and subtraction of integers
// content.ts will be created here for the topic.

import { generateId } from '../../../../../../app/utils/idGenerator';
import { QuizQuestion, TopicQuiz, TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic2Content: TopicContent = {
    id: 'cl6_ch6_t2',
    topicNumber: 2,
    topicName: "Addition and Subtraction of Integers",
    duration: 45,
    description: "Understanding how to add and subtract integers using number line and real-life examples",
    explanation: `
# Addition and Subtraction of Integers 🔢

Welcome to the world of integer operations! 🌟 In this topic, we'll learn how to add and subtract integers using the number line and understand their applications in real life. Let's get started! 🚀

## Understanding Integer Operations 📊

### Addition of Integers ➕

1. **Same Sign Addition** 🔄
   - When adding two positive numbers: Add their absolute values and keep the positive sign
   - When adding two negative numbers: Add their absolute values and keep the negative sign
   - Example: 5 + 3 = 8, -5 + (-3) = -8

2. **Different Sign Addition** 🔀
   - Subtract the smaller absolute value from the larger one
   - Keep the sign of the number with the larger absolute value
   - Example: 5 + (-3) = 2, -5 + 3 = -2

### Subtraction of Integers ➖

1. **Subtracting a Positive Number** 📉
   - Move left on the number line
   - Example: 5 - 3 = 2, -5 - 3 = -8

2. **Subtracting a Negative Number** 📈
   - Same as adding a positive number
   - Move right on the number line
   - Example: 5 - (-3) = 8, -5 - (-3) = -2

## Number Line Method 📏

The number line is a powerful tool for visualizing integer operations:

1. **Addition** ➕
   - Start at the first number
   - Move right for positive numbers
   - Move left for negative numbers
   - Example: 3 + (-5)
     * Start at 3
     * Move 5 units left
     * End at -2

2. **Subtraction** ➖
   - Start at the first number
   - Move left for positive numbers
   - Move right for negative numbers
   - Example: -3 - (-5)
     * Start at -3
     * Move 5 units right
     * End at 2

## Real-Life Applications 🌍

1. **Temperature Changes** 🌡️
   - Example: If the temperature is -5°C and it rises by 8°C
   - Solution: -5 + 8 = 3°C

2. **Bank Transactions** 💰
   - Example: If you have ₹500 in debt and receive ₹300
   - Solution: -500 + 300 = -₹200

3. **Elevator Movement** 🏢
   - Example: If you're on floor -2 and go up 5 floors
   - Solution: -2 + 5 = 3rd floor

## Common Rules to Remember 📝

1. **Addition Rules** ➕
   - Positive + Positive = Positive
   - Negative + Negative = Negative
   - Different signs: Subtract and keep the sign of the larger number

2. **Subtraction Rules** ➖
   - Subtracting a positive = Adding a negative
   - Subtracting a negative = Adding a positive
   - Example: 5 - (-3) = 5 + 3 = 8

## Practice Problems 🏋️‍♀️

1. **Example 1**: 7 + (-4) = ?
   - Solution: 3 (Different signs, subtract and keep the sign of the larger number)

2. **Example 2**: -6 - (-2) = ?
   - Solution: -4 (Subtracting a negative is like adding a positive)

3. **Example 3**: -3 + (-5) = ?
   - Solution: -8 (Same signs, add and keep the negative sign)

## Common Mistakes to Avoid ❌

1. **Sign Confusion** 🤔
   - Remember: Subtracting a negative is the same as adding a positive
   - Example: 4 - (-2) = 6, not 2

2. **Order of Operations** 📊
   - Always perform operations from left to right
   - Example: -5 + 3 - 2 = (-5 + 3) - 2 = -4

3. **Absolute Value** 📏
   - Don't confuse the sign with the absolute value
   - Example: |-5| = 5, but -5 is still negative

## Summary ✨

In this topic, we learned:
- How to add and subtract integers using the number line
- Rules for same sign and different sign operations
- Real-life applications of integer operations
- Common mistakes to avoid
- The importance of understanding signs and absolute values

### Additional Examples and Sample Questions:

1. **Example**: A submarine is at -200 meters and rises 150 meters. What is its new position? (Answer: -50 meters)

2. **Example**: The temperature was -8°C in the morning and rose by 12°C by afternoon. What was the afternoon temperature? (Answer: 4°C)

3. **Question**: If you have ₹300 in debt and spend ₹200 more, what is your total debt? (Answer: -₹500)

4. **Question**: A hiker starts at 500 meters above sea level and descends 800 meters. What is their new position? (Answer: -300 meters)
`,
    quiz: {
        questions: [
            ...easyQuestions,
            ...mediumQuestions
        ]
    }
};
