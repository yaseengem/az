import { QuizQuestion, TopicQuiz, TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic1Content: TopicContent = {
   id: 'cl5_ch6_t1',
   topicNumber: 1,
   topicName: "Multiples and Factors",
   duration: 45,
   description: "Understanding multiples and factors, and how to find them for any number",
   explanation: `
# Multiples and Factors 🔢

Numbers have special relationships with each other! Let's explore how numbers can be multiples and factors of each other. This will help us understand numbers better! 🧮

## What are Multiples? 🤔

Multiples are what we get when we multiply a number by whole numbers (1, 2, 3, 4, ...).

### Finding Multiples ✖️
- Start with a number
- Multiply it by 1, 2, 3, 4, ...
- The results are its multiples

### Examples:
1. **Multiples of 3**:
   - 3 × 1 = 3
   - 3 × 2 = 6
   - 3 × 3 = 9
   - 3 × 4 = 12
   - So, 3, 6, 9, 12, ... are multiples of 3

2. **Multiples of 5**:
   - 5, 10, 15, 20, 25, ...

## What are Factors? 🔍

Factors are numbers that divide exactly into another number without leaving a remainder.

### Finding Factors ➗
- Start with a number
- Find all numbers that divide it exactly
- These are its factors

### Examples:
1. **Factors of 12**:
   - 1 × 12 = 12
   - 2 × 6 = 12
   - 3 × 4 = 12
   - So, 1, 2, 3, 4, 6, 12 are factors of 12

2. **Factors of 15**:
   - 1, 3, 5, 15

## Real-Life Examples 🌟

1. **Time** ⏰
   - Minutes in an hour (60)
   - Factors: 1, 2, 3, 4, 5, 6, 10, 12, 15, 20, 30, 60
   - Multiples: 60, 120, 180, ...

2. **Money** 💰
   - ₹100 notes
   - Factors: 1, 2, 4, 5, 10, 20, 25, 50, 100
   - Multiples: 100, 200, 300, ...

3. **Sports** ⚽
   - Team sizes
   - Factors help divide players
   - Multiples help count total players

## Finding All Factors 🔍

### Step 1: Start with 1
- 1 is always a factor
- The number itself is always a factor

### Step 2: Check Other Numbers
- Try dividing by 2, 3, 4, ...
- Stop when you reach the square root
- List all pairs of factors

### Step 3: List in Order
- Write factors in order
- Don't repeat numbers
- Check for completeness

## Sample Questions and Solutions 📝

1. **Question**: Find the first 5 multiples of 4
   **Solution**: 4, 8, 12, 16, 20

2. **Question**: Find all factors of 18
   **Solution**: 1, 2, 3, 6, 9, 18

3. **Question**: Is 24 a multiple of 6? Is 6 a factor of 24?
   **Solution**: Yes to both! 6 × 4 = 24, and 24 ÷ 6 = 4

## Practice Problems 🏋️‍♀️

1. Find the first 6 multiples of 7
2. Find all factors of 20
3. Is 15 a multiple of 3? Is 3 a factor of 15?

## Common Mistakes to Avoid ❌

1. **Missing Factors**
   - Wrong: Forgetting 1 and the number itself
   - Right: Always include 1 and the number

2. **Incorrect Multiples**
   - Wrong: Starting with 0
   - Right: Start with the number itself

3. **Confusing Terms**
   - Wrong: Mixing up factors and multiples
   - Right: Remember factors divide, multiples multiply

## Tips for Success 🎯

1. **Practice with Small Numbers**
   - Start with numbers under 20
   - Build confidence
   - Move to larger numbers

2. **Use Visual Aids**
   - Draw arrays
   - Use counters
   - Make it clear

3. **Check Your Work**
   - Verify factors
   - Test multiples
   - Be thorough

## Summary ✨

- Multiples are what we get by multiplying a number
- Factors are numbers that divide exactly into another number
- Every number has at least two factors: 1 and itself
- Multiples go on forever, factors are limited
- Understanding multiples and factors helps in many real-life situations

Remember: Practice finding multiples and factors to become a number expert! 🎯
`,
   quiz: {
      questions: [
         ...easyQuestions,
         ...mediumQuestions
      ]
   }
}; 