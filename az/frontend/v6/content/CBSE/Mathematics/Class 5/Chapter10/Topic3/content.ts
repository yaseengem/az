import { generateId } from '../../../../../../app/utils/idGenerator';
import { QuizQuestion, TopicQuiz, TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic3Content: TopicContent = {
    id: 'cl5_ch10_t3',
    topicNumber: 3,
    topicName: "Money-related Decimal Problems",
    duration: 45,
    description: "Solving real-world problems involving money and decimals",
    explanation: `
# Money-related Decimal Problems 💰

Money and decimals go hand in hand! 💸 In this topic, we'll learn how to solve real-world problems involving money using decimals.

## Understanding Money Decimals 🤔

Money is written with:
- Rupee symbol (₹)
- Decimal point (.)
- Two decimal places (paise)
- Example: ₹25.50 = 25 rupees and 50 paise

## Types of Money Problems 📊

### 1. Addition Problems ➕
- Adding money amounts
- Example: ₹10.25 + ₹5.75 = ₹16.00

### 2. Subtraction Problems ➖
- Finding change
- Example: ₹50.00 - ₹35.25 = ₹14.75

### 3. Multiplication Problems ✖️
- Calculating total cost
- Example: 3 × ₹12.50 = ₹37.50

### 4. Division Problems ➗
- Splitting money
- Example: ₹100.00 ÷ 4 = ₹25.00

## Practice Examples 📝

### Example 1: Adding Money
Rahul bought a pencil for ₹12.50 and an eraser for ₹5.25. How much did he spend?
- Solution: ₹12.50 + ₹5.25 = ₹17.75

### Example 2: Finding Change
Priya gave ₹50.00 for a book costing ₹35.75. How much change should she get?
- Solution: ₹50.00 - ₹35.75 = ₹14.25

### Example 3: Total Cost
If one chocolate costs ₹15.50, how much do 4 chocolates cost?
- Solution: 4 × ₹15.50 = ₹62.00

## Sample Questions ❓

1. Add ₹25.75 and ₹14.25
   - Answer: ₹40.00

2. Subtract ₹18.50 from ₹50.00
   - Answer: ₹31.50

3. Multiply ₹12.25 by 3
   - Answer: ₹36.75

## Real-Life Applications 🌍

Money decimals are used in:
- Shopping 🛍️
- Banking 🏦
- Budgeting 💵
- Business 💼
- Daily expenses 🏠

## Tips for Solving Money Problems 💡

1. Always write the rupee symbol (₹)
2. Keep two decimal places for paise
3. Line up decimal points when adding/subtracting
4. Check your calculations
5. Practice with real shopping scenarios

## Summary ✨

- Money uses decimals for rupees and paise
- Problems can involve addition, subtraction, multiplication, or division
- Always keep two decimal places
- Money problems are common in daily life
- Understanding money decimals helps in financial management

Remember: Practice with real money amounts to become a money math expert! 🎯
`,
    quiz: {
        questions: [
            ...easyQuestions,
            ...mediumQuestions
        ]
    }
}; 