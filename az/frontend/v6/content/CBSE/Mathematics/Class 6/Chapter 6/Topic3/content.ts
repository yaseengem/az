// Topic 3: Real-life applications (temperature, debt)
// content.ts will be created here for the topic.

import { generateId } from '../../../../../../app/utils/idGenerator';
import { QuizQuestion, TopicQuiz, TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic3Content: TopicContent = {
    id: 'cl6_ch6_t3',
    topicNumber: 3,
    topicName: "Multiplication and Division of Integers",
    duration: 45,
    description: "Understanding how to multiply and divide integers and their applications in real life",
    explanation: `
# Multiplication and Division of Integers 🔢

Welcome to the world of integer multiplication and division! 🌟 In this topic, we'll learn how to multiply and divide integers and understand their applications in real life. Let's get started! 🚀

## Understanding Integer Operations 📊

### Multiplication of Integers ✖️

1. **Same Sign Multiplication** 🔄
   - When multiplying two positive numbers: Product is positive
   - When multiplying two negative numbers: Product is positive
   - Example: 5 × 3 = 15, -5 × (-3) = 15

2. **Different Sign Multiplication** 🔀
   - Product is always negative
   - Example: 5 × (-3) = -15, -5 × 3 = -15

### Division of Integers ➗

1. **Same Sign Division** 🔄
   - When dividing two positive numbers: Quotient is positive
   - When dividing two negative numbers: Quotient is positive
   - Example: 15 ÷ 3 = 5, -15 ÷ (-3) = 5

2. **Different Sign Division** 🔀
   - Quotient is always negative
   - Example: 15 ÷ (-3) = -5, -15 ÷ 3 = -5

## Rules to Remember 📝

1. **Multiplication Rules** ✖️
   - Positive × Positive = Positive
   - Negative × Negative = Positive
   - Positive × Negative = Negative
   - Negative × Positive = Negative

2. **Division Rules** ➗
   - Positive ÷ Positive = Positive
   - Negative ÷ Negative = Positive
   - Positive ÷ Negative = Negative
   - Negative ÷ Positive = Negative

## Real-Life Applications 🌍

1. **Temperature Changes** 🌡️
   - Example: If temperature drops by 2°C every hour for 3 hours
   - Solution: -2 × 3 = -6°C

2. **Bank Transactions** 💰
   - Example: If you withdraw ₹200 every day for 5 days
   - Solution: -200 × 5 = -₹1000

3. **Speed and Time** ⏱️
   - Example: If a car moves at -60 km/h (backwards) for 2 hours
   - Solution: -60 × 2 = -120 km

## Practice Problems 🏋️‍♀️

1. **Example 1**: 4 × (-3) = ?
   - Solution: -12 (Different signs, product is negative)

2. **Example 2**: -12 ÷ (-4) = ?
   - Solution: 3 (Same signs, quotient is positive)

3. **Example 3**: -5 × (-2) = ?
   - Solution: 10 (Same signs, product is positive)

## Common Mistakes to Avoid ❌

1. **Sign Confusion** 🤔
   - Remember: Two negatives make a positive in multiplication and division
   - Example: -4 × -3 = 12, not -12

2. **Division by Zero** 🚫
   - Never divide by zero
   - Example: 5 ÷ 0 is undefined

3. **Order of Operations** 📊
   - Remember PEMDAS (Parentheses, Exponents, Multiplication/Division, Addition/Subtraction)
   - Example: 2 + 3 × 4 = 14, not 20

## Summary ✨

In this topic, we learned:
- How to multiply and divide integers
- Rules for same sign and different sign operations
- Real-life applications of integer operations
- Common mistakes to avoid
- The importance of understanding signs in multiplication and division

### Additional Examples and Sample Questions:

1. **Example**: If a submarine descends 10 meters every minute for 5 minutes, what is its total change in depth? (Answer: -50 meters)

2. **Example**: If the temperature drops by 3°C every hour for 4 hours, what is the total temperature change? (Answer: -12°C)

3. **Question**: If you have ₹600 in debt and want to pay it off in 3 equal installments, how much should you pay each time? (Answer: -₹200)

4. **Question**: A car moves backwards at 40 km/h for 2 hours. What is its total displacement? (Answer: -80 km)
`,
    quiz: {
        questions: [
            ...easyQuestions,
            ...mediumQuestions
        ]
    }
};
