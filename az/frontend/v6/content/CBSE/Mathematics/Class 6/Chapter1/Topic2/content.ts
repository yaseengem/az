// Topic 2: Estimation and rounding
// content.ts will be created here for the topic.

import { QuizQuestion, TopicQuiz, TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic2Content: TopicContent = {
    id: 'cl6_ch1_t2',
    topicNumber: 2,
    topicName: "Estimation and Rounding",
    duration: 45,
    description: "Understanding estimation and rounding techniques for numbers, with practical applications in daily life",
    explanation: `
# Estimation and Rounding 📊

Estimation and rounding are essential skills that help us make quick calculations and understand numbers better in our daily lives! Let's explore these concepts in detail. 🚀

## What is Estimation? 🤔
Estimation is making a reasonable guess about a number or quantity without doing exact calculations. It helps us:
- Make quick decisions
- Check if our answers are reasonable
- Solve problems faster in real-life situations

## Types of Estimation 📝
1. **Rounding Off** 🔄
   - Making numbers simpler by reducing their digits
   - Helps in quick calculations
   - Makes numbers easier to remember

2. **Front-end Estimation** 🔢
   - Using the first digit of numbers
   - Quick but less accurate
   - Good for rough calculations

3. **Compatible Numbers** 🤝
   - Using numbers that are easy to work with
   - Makes mental math simpler
   - Often used in division

## Rounding Rules 📏
1. **To the Nearest Ten** 🔟
   - Look at the ones digit
   - If it's 5 or more, round up
   - If it's less than 5, round down
   - Example: 47 → 50, 42 → 40

2. **To the Nearest Hundred** 💯
   - Look at the tens digit
   - If it's 5 or more, round up
   - If it's less than 5, round down
   - Example: 347 → 300, 365 → 400

3. **To the Nearest Thousand** 1000
   - Look at the hundreds digit
   - If it's 5 or more, round up
   - If it's less than 5, round down
   - Example: 3,478 → 3,000, 3,678 → 4,000

## Practical Examples 🌟
1. **Shopping Estimation** 🛍️
   - Item 1: ₹245 → ₹250
   - Item 2: ₹178 → ₹180
   - Total estimate: ₹430

2. **Distance Estimation** 🚗
   - Home to school: 2.3 km → 2 km
   - School to park: 1.8 km → 2 km
   - Total estimate: 4 km

3. **Time Estimation** ⏰
   - Homework: 45 minutes → 1 hour
   - Playtime: 35 minutes → 30 minutes
   - Total estimate: 1.5 hours

## Sample Questions and Solutions 💡
1. **Question**: Round 3,487 to the nearest hundred.
   **Solution**: Look at the tens digit (8). Since 8 > 5, round up to 3,500.

2. **Question**: Estimate the sum of 2,345 + 1,789.
   **Solution**: 
   - 2,345 → 2,300
   - 1,789 → 1,800
   - Estimated sum: 4,100

3. **Question**: A store has 1,234 items. About how many items would that be to the nearest hundred?
   **Solution**: 1,234 → 1,200 (since 3 < 5)

## Real-Life Applications 🌍
1. **Money Management** 💰
   - Estimating monthly expenses
   - Rounding prices while shopping
   - Calculating tips in restaurants

2. **Time Management** ⏳
   - Estimating travel time
   - Planning daily schedules
   - Setting deadlines

3. **Measurements** 📏
   - Estimating distances
   - Approximating weights
   - Guessing quantities

## Common Mistakes to Avoid ❌
1. **Over-rounding** 🔄
   - Don't round too early in calculations
   - Keep original numbers for exact answers
   - Round only at the final step

2. **Incorrect Place Value** 🔢
   - Pay attention to which digit you're rounding
   - Check if you're rounding to tens, hundreds, or thousands
   - Verify your answer makes sense

3. **Forgetting to Estimate** 🤔
   - Always estimate before calculating
   - Use estimation to check your answers
   - Compare estimates with exact answers

## Practice Exercises 🏋️‍♀️
1. Round these numbers to the nearest ten:
   - 47 → 50
   - 83 → 80
   - 65 → 70

2. Estimate the following sums:
   - 234 + 567 → 200 + 600 = 800
   - 1,234 + 2,345 → 1,200 + 2,300 = 3,500

3. Round these numbers to the nearest hundred:
   - 347 → 300
   - 678 → 700
   - 950 → 1,000

## Summary ✨
Estimation and rounding are valuable skills that help us:
- Make quick calculations
- Check the reasonableness of answers
- Solve real-life problems efficiently

Remember:
- Round up if the digit is 5 or more
- Round down if the digit is less than 5
- Always estimate before calculating
- Use estimation to verify your answers

Practice these skills regularly, and you'll become a master at making quick and accurate estimates! 🎯
`,
    quiz: {
        questions: [
            ...easyQuestions,
            ...mediumQuestions
        ]
    }
};
