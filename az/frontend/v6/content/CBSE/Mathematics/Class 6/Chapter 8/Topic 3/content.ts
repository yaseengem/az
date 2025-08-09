// Topic 3: Conversion between fractions and decimals
// content.ts will be created here for the topic.

import { TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic3Content: TopicContent = {
   id: 'cl6_ch8_t3',
   topicNumber: 3,
   topicName: "Conversion between Fractions and Decimals",
   duration: 45,
   description: "Understanding how to convert between fractions and decimal numbers",
   explanation: `# Conversion between Fractions and Decimals 🔄

Welcome to the world of fraction-decimal conversions! 🌟 In this topic, we'll learn how to convert between fractions and decimal numbers. Let's explore these conversions step by step! 🚀

## Understanding Conversions 📊

### Fractions to Decimals ➗
1. **Tenths and Hundredths**
   - Fractions with denominators 10 or 100 can be directly converted
   - Example: 3/10 = 0.3, 25/100 = 0.25

2. **Other Fractions**
   - Divide numerator by denominator
   - Example: 1/2 = 0.5, 3/4 = 0.75

### Decimals to Fractions 📝
1. **Tenths Place**
   - One decimal place = denominator of 10
   - Example: 0.7 = 7/10

2. **Hundredths Place**
   - Two decimal places = denominator of 100
   - Example: 0.25 = 25/100 = 1/4

## Examples 📝

### Fraction to Decimal Examples
1. **Simple Fractions**
   - 1/2 = 0.5
   - 1/4 = 0.25
   - 3/4 = 0.75

2. **Tenths and Hundredths**
   - 7/10 = 0.7
   - 25/100 = 0.25
   - 75/100 = 0.75

### Decimal to Fraction Examples
1. **Tenths**
   - 0.3 = 3/10
   - 0.7 = 7/10
   - 0.9 = 9/10

2. **Hundredths**
   - 0.25 = 25/100 = 1/4
   - 0.50 = 50/100 = 1/2
   - 0.75 = 75/100 = 3/4

## Real-Life Applications 🌍

1. **Measurements** 📏
   - Converting recipe measurements
   - Reading ruler measurements
   - Understanding weather temperatures

2. **Money** 💰
   - Understanding prices
   - Calculating discounts
   - Managing budgets

3. **Sports** ⚽
   - Recording scores
   - Measuring distances
   - Timing events

## Practice Problems 🏋️‍♀️

1. **Example 1**: Convert 3/10 to decimal
   - Solution: 0.3

2. **Example 2**: Convert 0.25 to fraction
   - Solution: 1/4

3. **Example 3**: Convert 1/2 to decimal
   - Solution: 0.5

## Common Mistakes to Avoid ❌

1. **Incorrect Place Value**
   - Remember: Tenths = 1 decimal place
   - Hundredths = 2 decimal places
   - Example: 0.7 is 7/10, not 7/100

2. **Simplifying Fractions**
   - Always simplify fractions to lowest terms
   - Example: 25/100 = 1/4, not 25/100

3. **Division Errors**
   - When converting fractions to decimals, divide carefully
   - Example: 1/2 = 0.5, not 0.2

## Summary ✨

In this topic, we learned:
- How to convert fractions to decimals
- How to convert decimals to fractions
- The importance of place value
- Real-life applications of conversions
- Common mistakes to avoid

### Additional Examples and Sample Questions:

1. **Example**: Convert 7/10 to decimal (Answer: 0.7)

2. **Example**: Convert 0.75 to fraction (Answer: 3/4)

3. **Question**: What is 1/4 as a decimal? (Answer: 0.25)

4. **Question**: What is 0.5 as a fraction? (Answer: 1/2)`,
   quiz: {
      questions: [
         ...easyQuestions,
         ...mediumQuestions
      ]
   }
};
