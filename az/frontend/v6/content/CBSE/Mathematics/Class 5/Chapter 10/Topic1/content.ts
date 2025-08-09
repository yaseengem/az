import { generateId } from '../../../../../../app/utils/idGenerator';
import { QuizQuestion, TopicQuiz, TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic1Content: TopicContent = {
    id: 'cl5_ch10_t1',
    topicNumber: 1,
    topicName: "Decimal Place Value",
    duration: 45,
    description: "Understanding decimal place values and their significance in numbers",
    explanation: `# Decimal Place Value 🔢

Decimals help us represent numbers that are less than one! 🎯 In this topic, we'll learn about decimal place values and how they help us understand numbers better.

## What are Decimals? 🤔

Decimals are:
- Numbers with a decimal point (.)
- Used to represent parts of a whole
- Written after the ones place
- Example: 2.5 means 2 wholes and 5 tenths

## Decimal Place Values 📊

### 1. Tenths (0.1) 🔟
- First place after decimal point
- Represents 1/10 of a whole
- Example: 0.1 = one tenth

### 2. Hundredths (0.01) 💯
- Second place after decimal point
- Represents 1/100 of a whole
- Example: 0.01 = one hundredth

### 3. Thousandths (0.001) 1000
- Third place after decimal point
- Represents 1/1000 of a whole
- Example: 0.001 = one thousandth

## Understanding Place Value Chart 📈

\`\`\`
Thousands | Hundreds | Tens | Ones | . | Tenths | Hundredths | Thousandths
1 | 2 | 3 | 4 | . | 5 | 6 | 7
\`\`\`

In this number: 1234.567
- 1 is in thousands place
- 2 is in hundreds place
- 3 is in tens place
- 4 is in ones place
- 5 is in tenths place
- 6 is in hundredths place
- 7 is in thousandths place

## Practice Examples 📝

### Example 1: Reading Decimals
What does 3.45 mean?
- Solution: 3 wholes, 4 tenths, and 5 hundredths

### Example 2: Writing Decimals
Write "two and three tenths" as a decimal
- Solution: 2.3

### Example 3: Place Value
What is the value of 7 in 12.375?
- Solution: 7 hundredths (0.07)

## Sample Questions ❓

1. What is the value of 5 in 3.456?
   - Answer: 5 hundredths (0.05)

2. Write "four and two tenths" as a decimal
   - Answer: 4.2

3. What does 0.25 represent?
   - Answer: 25 hundredths or one quarter

## Real-Life Applications 🌍

Decimals are used in:
- Money 💰 (₹2.50)
- Measurements 📏 (1.5 meters)
- Time ⏰ (2.5 hours)
- Sports scores 🏆 (9.8 points)
- Cooking measurements 🥄 (0.5 cups)

## Tips for Understanding Decimals 💡

1. Think of decimals as parts of a whole
2. Use place value charts
3. Practice reading decimals aloud
4. Compare decimals using place value
5. Visualize decimals using grids or circles

## Summary ✨

- Decimals represent parts of a whole
- Place values after decimal point are tenths, hundredths, thousandths
- Each place is 10 times smaller than the one before it
- Understanding place value helps in reading and writing decimals
- Decimals are used in many real-life situations

Remember: The decimal point separates whole numbers from parts! 🎯`,
    quiz: {
        questions: [
            ...easyQuestions,
            ...mediumQuestions
        ]
    }
}; 