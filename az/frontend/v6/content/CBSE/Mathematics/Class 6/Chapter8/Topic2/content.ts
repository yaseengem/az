// Topic 2: Addition and subtraction of decimals
// content.ts will be created here for the topic.

import { TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic2Content: TopicContent = {
   id: 'cl6_ch8_t2',
   topicNumber: 2,
   topicName: "Addition and Subtraction of Decimals",
   duration: 45,
   description: "Understanding how to add and subtract decimal numbers",
   explanation: `# Addition and Subtraction of Decimals 🔢

Welcome to the world of decimal operations! 🌟 In this topic, we'll learn how to add and subtract decimal numbers. Let's explore these operations step by step! 🚀

## Understanding Decimal Operations 📊

### Adding Decimals ➕
1. **Align the Decimal Points**
   - Write numbers one below the other
   - Make sure decimal points are aligned
   - Add zeros if needed to make numbers the same length

2. **Add from Right to Left**
   - Start adding from the rightmost digit
   - Carry over if the sum is 10 or more
   - Place the decimal point in the answer directly below the other decimal points

### Subtracting Decimals ➖
1. **Align the Decimal Points**
   - Write numbers one below the other
   - Make sure decimal points are aligned
   - Add zeros if needed to make numbers the same length

2. **Subtract from Right to Left**
   - Start subtracting from the rightmost digit
   - Borrow if needed
   - Place the decimal point in the answer directly below the other decimal points

## Examples 📝

### Addition Example
\`\`\`
  2.35
+ 1.47
-------
  3.82
\`\`\`

### Subtraction Example
\`\`\`
4.62
- 2.35
-------
2.27
\`\`\`

## Real-Life Applications 🌍

1. **Money Calculations** 💰
   - Adding prices of items
   - Calculating change
   - Managing expenses

2. **Measurements** 📏
   - Adding lengths
   - Calculating differences in weights
   - Measuring time differences

3. **Sports** ⚽
   - Calculating scores
   - Measuring distances
   - Timing events

## Practice Problems 🏋️‍♀️

1. **Example 1**: 3.25 + 1.75 = ?
   - Solution: 5.00

2. **Example 2**: 4.50 - 2.25 = ?
   - Solution: 2.25

3. **Example 3**: 1.23 + 0.45 = ?
   - Solution: 1.68

## Common Mistakes to Avoid ❌

1. **Misalignment of Decimal Points**
   - Always align decimal points before adding or subtracting
   - Example: 2.3 + 0.45 should be written as 2.30 + 0.45

2. **Forgetting to Carry Over**
   - Remember to carry over when the sum is 10 or more
   - Example: 0.9 + 0.3 = 1.2, not 0.12

3. **Incorrect Borrowing**
   - When subtracting, borrow from the next left digit
   - Example: 2.5 - 1.7 = 0.8, not 1.2

## Summary ✨

In this topic, we learned:
- How to add decimal numbers
- How to subtract decimal numbers
- The importance of aligning decimal points
- Real-life applications of decimal operations
- Common mistakes to avoid

### Additional Examples and Sample Questions:

1. **Example**: If you have ₹5.75 and spend ₹2.50, how much money do you have left? (Answer: ₹3.25)

2. **Example**: A rope is 3.25 meters long. If you cut off 1.75 meters, how much rope remains? (Answer: 1.50 meters)

3. **Question**: What is the sum of 2.35 and 1.65? (Answer: 4.00)

4. **Question**: If a book costs ₹4.50 and you pay with a ₹10 note, how much change will you get? (Answer: ₹5.50)`,
   quiz: {
      questions: [
         ...easyQuestions,
         ...mediumQuestions
      ]
   }
};
