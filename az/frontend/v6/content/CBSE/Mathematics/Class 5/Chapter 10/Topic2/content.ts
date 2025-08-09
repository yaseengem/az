import { generateId } from '../../../../../../app/utils/idGenerator';
import { QuizQuestion, TopicQuiz, TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic2Content: TopicContent = {
    id: 'cl5_ch10_t2',
    topicNumber: 2,
    topicName: "Converting Fractions to Decimals",
    duration: 45,
    description: "Understanding how to convert fractions to decimal numbers",
    explanation: `
# Converting Fractions to Decimals 🔄

Converting fractions to decimals is like speaking two different number languages! 🌐 In this topic, we'll learn different methods to change fractions into decimals.

## What is Conversion? 🤔

Converting fractions to decimals means:
- Changing a fraction to its decimal form
- Making it easier to compare numbers
- Helping in calculations
- Example: ½ = 0.5

## Methods of Conversion 📊

### 1. Division Method ➗
- Divide numerator by denominator
- Example: ¾ = 3 ÷ 4 = 0.75
- Works for all fractions

### 2. Place Value Method 🔢
- Use tenths, hundredths, etc.
- Example: 1/10 = 0.1
- Good for fractions with denominators 10, 100, etc.

### 3. Equivalent Fractions Method 🔄
- Make denominator 10, 100, or 1000
- Example: ¼ = 25/100 = 0.25
- Works for fractions that can be converted to tenths, hundredths, etc.

## Common Conversions 📝

### Tenths (1/10)
- 1/10 = 0.1
- 2/10 = 0.2
- 3/10 = 0.3

### Hundredths (1/100)
- 1/100 = 0.01
- 25/100 = 0.25
- 75/100 = 0.75

### Other Common Fractions
- ½ = 0.5
- ¼ = 0.25
- ¾ = 0.75

## Practice Examples 📝

### Example 1: Division Method
Convert ⅜ to decimal
- Solution: 3 ÷ 8 = 0.375

### Example 2: Place Value Method
Convert 7/10 to decimal
- Solution: 0.7 (seven tenths)

### Example 3: Equivalent Fractions
Convert ⅕ to decimal
- Solution: ⅕ = 2/10 = 0.2

## Sample Questions ❓

1. Convert ½ to decimal
   - Answer: 0.5

2. What is ¾ as a decimal?
   - Answer: 0.75

3. Convert 3/10 to decimal
   - Answer: 0.3

## Real-Life Applications 🌍

Converting fractions to decimals is used in:
- Money calculations 💰
- Measurements 📏
- Sports statistics 🏆
- Cooking recipes 🥄
- Science experiments 🔬

## Tips for Conversion 💡

1. Remember common conversions
2. Use division for any fraction
3. Make denominators 10, 100, or 1000 when possible
4. Check your answers
5. Practice with different fractions

## Summary ✨

- Fractions can be converted to decimals
- Three main methods: division, place value, and equivalent fractions
- Common fractions have easy decimal equivalents
- Conversion helps in calculations and comparisons
- This skill is useful in many real-life situations

Remember: Practice converting different fractions to become a decimal expert! 🎯
`,
    quiz: {
        questions: [
            ...easyQuestions,
            ...mediumQuestions
        ]
    }
}; 