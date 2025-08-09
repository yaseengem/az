// Topic 1: Place value (tenths, hundredths)
// content.ts will be created here for the topic.

import { TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic1Content: TopicContent = {
   id: 'cl6_ch8_t1',
   topicNumber: 1,
   topicName: "Place Value in Decimals",
   duration: 45,
   description: "Understanding place value in decimals including tenths and hundredths",
   explanation: `# Place Value in Decimals 🔢

Welcome to the world of decimals! 🌟 In this topic, we'll learn about place value in decimal numbers, focusing on tenths and hundredths. Let's explore this fascinating concept! 🚀

## Understanding Decimal Place Value 📊

### Decimal Point and Place Values
- The decimal point (.) separates the whole number part from the fractional part
- Each position to the right of the decimal point has a specific place value
- The first place after the decimal is tenths (1/10)
- The second place is hundredths (1/100)

### Place Value Chart
\`\`\`
Hundreds | Tens | Ones | . | Tenths | Hundredths
0 | 0 | 0 | . | 0 | 0
\`\`\`

## Tenths (1/10) 📏
- One tenth = 0.1 = 1/10
- Example: 0.3 means 3 tenths or 3/10
- Visual representation: Dividing a whole into 10 equal parts

## Hundredths (1/100) 📐
- One hundredth = 0.01 = 1/100
- Example: 0.25 means 25 hundredths or 25/100
- Visual representation: Dividing a whole into 100 equal parts

## Reading Decimal Numbers 📖
1. **Whole Number Part**
   - Read the number before the decimal point normally
   - Example: In 12.34, read "twelve"

2. **Decimal Part**
   - Read each digit separately
   - Example: In 12.34, read "point three four"

## Writing Decimal Numbers ✍️
1. **From Words to Numbers**
   - Example: "Three and twenty-five hundredths" = 3.25
   - Example: "Fourteen and six tenths" = 14.6

2. **From Fractions to Decimals**
   - Tenths: 3/10 = 0.3
   - Hundredths: 25/100 = 0.25

## Comparing Decimal Numbers 🔍
1. **Step 1**: Compare whole number parts
2. **Step 2**: If whole numbers are equal, compare tenths
3. **Step 3**: If tenths are equal, compare hundredths

## Real-Life Applications 🌍
1. **Money** 💰
   - ₹12.50 = 12 rupees and 50 paise
   - $3.75 = 3 dollars and 75 cents

2. **Measurements** 📏
   - Length: 1.25 meters
   - Weight: 2.5 kilograms

3. **Time** ⏰
   - 1.5 hours = 1 hour and 30 minutes
   - 0.75 hours = 45 minutes

## Practice Problems 🏋️‍♀️
1. **Example 1**: Write 7 tenths as a decimal
   - Solution: 0.7

2. **Example 2**: Write 45 hundredths as a decimal
   - Solution: 0.45

3. **Example 3**: Compare 0.3 and 0.25
   - Solution: 0.3 > 0.25

## Common Mistakes to Avoid ❌
1. **Misplacing Decimal Point**
   - Wrong: Writing 0.25 as 25.0
   - Correct: 0.25

2. **Reading Decimals Incorrectly**
   - Wrong: Reading 0.25 as "zero point twenty-five"
   - Correct: "zero point two five"

3. **Comparing Decimals**
   - Wrong: Thinking 0.3 is less than 0.25
   - Correct: 0.3 is greater than 0.25

## Summary ✨
In this topic, we learned:
- The meaning of tenths and hundredths
- How to read and write decimal numbers
- How to compare decimal numbers
- Real-life applications of decimals
- Common mistakes to avoid

### Additional Examples and Sample Questions:

1. **Example**: Write "five and three tenths" as a decimal
   - Solution: 5.3

2. **Example**: Write 0.08 in words
   - Solution: Eight hundredths

3. **Question**: Which is greater: 0.7 or 0.65?
   - Solution: 0.7 is greater

4. **Question**: Write 3/10 as a decimal
   - Solution: 0.3`,
   quiz: {
      questions: [
         ...easyQuestions,
         ...mediumQuestions
      ]
   }
};
