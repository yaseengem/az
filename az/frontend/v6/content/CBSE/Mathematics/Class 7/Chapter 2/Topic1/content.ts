import { QuizQuestion, TopicQuiz, TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic1Content: TopicContent = {
    id: 'cl7_ch2_t1',
    topicNumber: 1,
    topicName: "Multiplication and Division of Fractions and Decimals",
    duration: 45,
    description: "Understanding multiplication and division operations with fractions and decimals, including proper, improper, and mixed fractions",
    explanation: `
# Multiplication and Division of Fractions and Decimals 📊

Welcome to the fascinating world of fractions and decimals! 🎯 In this topic, we'll explore how to multiply and divide these numbers, which are essential for solving real-world problems. Let's dive in! 🚀

## Understanding Fractions and Decimals 🌟

Before we learn operations, let's recall what fractions and decimals are:
- **Fractions** represent parts of a whole (e.g., ½, ¾, ⅔)
- **Decimals** are another way to write fractions (e.g., 0.5 = ½, 0.75 = ¾)

## Multiplication of Fractions ✖️

### Basic Rules:
1. **Multiply numerators**: Multiply the top numbers
2. **Multiply denominators**: Multiply the bottom numbers
3. **Simplify**: Reduce to lowest terms if possible

### Examples:
- ½ × ¾ = (1×3)/(2×4) = 3/8
- ⅔ × ⅘ = (2×4)/(3×5) = 8/15

### Special Cases:
- **Whole Numbers**: Convert to fractions (e.g., 3 = 3/1)
- **Mixed Numbers**: Convert to improper fractions first
- **Zero**: Any fraction × 0 = 0
- **One**: Any fraction × 1 = same fraction

## Division of Fractions ➗

### Basic Rules:
1. **Keep the first fraction** as is
2. **Flip the second fraction** (find its reciprocal)
3. **Multiply** the fractions
4. **Simplify** if possible

### Examples:
- ½ ÷ ¾ = ½ × 4/3 = 4/6 = ⅔
- ⅔ ÷ ⅘ = ⅔ × 5/4 = 10/12 = ⅚

## Multiplication of Decimals ✖️

### Steps:
1. **Ignore the decimal points** and multiply as whole numbers
2. **Count total decimal places** in both numbers
3. **Place decimal point** in answer with same number of decimal places

### Examples:
- 0.5 × 0.3 = 0.15 (1 + 1 = 2 decimal places)
- 1.2 × 0.4 = 0.48 (1 + 1 = 2 decimal places)

## Division of Decimals ➗

### Steps:
1. **Move decimal point** in divisor to make it a whole number
2. **Move decimal point** in dividend same number of places
3. **Divide** as with whole numbers
4. **Place decimal point** in quotient directly above dividend's decimal point

### Examples:
- 0.6 ÷ 0.2 = 6 ÷ 2 = 3
- 1.5 ÷ 0.5 = 15 ÷ 5 = 3

## Real-Life Applications 🌍

### Shopping 🛍️
- Calculating discounts (e.g., 25% off = multiply by 0.75)
- Finding total cost of multiple items

### Cooking 👩‍🍳
- Adjusting recipe quantities
- Converting measurements

### Time Management ⏰
- Calculating fractions of hours
- Dividing tasks among team members

## Common Mistakes to Avoid ❌

1. **Forgetting to simplify** fractions after multiplication
2. **Not converting** mixed numbers to improper fractions
3. **Miscounting decimal places** in multiplication
4. **Forgetting to move decimal points** in division

## Practice Problems 📝

1. **Multiplication**:
   - ⅔ × ¾ = ?
   - 0.4 × 0.6 = ?

2. **Division**:
   - ½ ÷ ⅓ = ?
   - 1.2 ÷ 0.3 = ?

## Summary ✨

Key points to remember:
- **Multiplication of fractions**: Multiply numerators and denominators
- **Division of fractions**: Multiply by the reciprocal
- **Decimal multiplication**: Count total decimal places
- **Decimal division**: Move decimal points to make divisor whole

### Additional Examples:

1. **Shopping Example**:
   If a shirt costs ₹500 and is on sale for ⅖ off, what's the discount amount?
   Solution: ₹500 × ⅖ = ₹200 discount

2. **Cooking Example**:
   A recipe calls for ¾ cup of flour. You want to make ½ the recipe. How much flour do you need?
   Solution: ¾ × ½ = ⅜ cup

3. **Time Example**:
   If you spend ⅔ of an hour on homework and ¼ of that time on math, how long did you spend on math?
   Solution: ⅔ × ¼ = 2/12 = ⅙ hour = 10 minutes

Remember to practice regularly and check your work! 🎯
`,
    quiz: {
        questions: [
            ...easyQuestions,
            ...mediumQuestions
        ]
    }
}; 