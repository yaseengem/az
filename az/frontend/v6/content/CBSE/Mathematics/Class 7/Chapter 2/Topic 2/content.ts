import { QuizQuestion, TopicQuiz, TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic2Content: TopicContent = {
    id: 'cl7_ch2_t2',
    topicNumber: 2,
    topicName: "Properties and Operations of Fractions and Decimals",
    duration: 45,
    description: "Understanding properties of fractions and decimals, including commutative, associative, and distributive properties, and their applications in operations",
    explanation: `
# Properties and Operations of Fractions and Decimals 📊

Welcome to the world of mathematical properties! 🎯 In this topic, we'll explore how fractions and decimals behave under different operations and their special properties. Let's dive in! 🚀

## Properties of Fractions and Decimals 🌟

### Commutative Property 🔄
- **Addition**: a + b = b + a
  - Example: ½ + ⅓ = ⅓ + ½ = ⅚
  - Example: 0.5 + 0.3 = 0.3 + 0.5 = 0.8
- **Multiplication**: a × b = b × a
  - Example: ½ × ⅓ = ⅓ × ½ = ⅙
  - Example: 0.5 × 0.3 = 0.3 × 0.5 = 0.15

### Associative Property 🔗
- **Addition**: (a + b) + c = a + (b + c)
  - Example: (½ + ⅓) + ¼ = ½ + (⅓ + ¼) = 13/12
  - Example: (0.5 + 0.3) + 0.2 = 0.5 + (0.3 + 0.2) = 1.0
- **Multiplication**: (a × b) × c = a × (b × c)
  - Example: (½ × ⅓) × ¼ = ½ × (⅓ × ¼) = 1/24
  - Example: (0.5 × 0.3) × 0.2 = 0.5 × (0.3 × 0.2) = 0.03

### Distributive Property 📐
- **Over Addition**: a × (b + c) = (a × b) + (a × c)
  - Example: ½ × (⅓ + ¼) = (½ × ⅓) + (½ × ¼) = 7/24
  - Example: 0.5 × (0.3 + 0.2) = (0.5 × 0.3) + (0.5 × 0.2) = 0.25

### Identity Properties 🆔
- **Additive Identity**: a + 0 = a
  - Example: ½ + 0 = ½
  - Example: 0.5 + 0 = 0.5
- **Multiplicative Identity**: a × 1 = a
  - Example: ½ × 1 = ½
  - Example: 0.5 × 1 = 0.5

### Inverse Properties 🔄
- **Additive Inverse**: a + (-a) = 0
  - Example: ½ + (-½) = 0
  - Example: 0.5 + (-0.5) = 0
- **Multiplicative Inverse**: a × (1/a) = 1 (for a ≠ 0)
  - Example: ½ × 2 = 1
  - Example: 0.5 × 2 = 1

## Special Properties of Fractions 🎯

### Simplification
- **Common Factors**: Divide numerator and denominator by their greatest common factor
  - Example: 4/8 = ½ (divided by 4)
  - Example: 6/9 = ⅔ (divided by 3)

### Equivalent Fractions
- **Scaling**: Multiply or divide numerator and denominator by same number
  - Example: ½ = 2/4 = 3/6 = 4/8
  - Example: 0.5 = 5/10 = 50/100

### Mixed Numbers
- **Conversion**: Convert between mixed numbers and improper fractions
  - Example: 1½ = 3/2
  - Example: 2⅔ = 8/3

## Special Properties of Decimals 🔢

### Place Value
- **Tenths**: First digit after decimal point
- **Hundredths**: Second digit after decimal point
- **Thousandths**: Third digit after decimal point

### Rounding
- **Rules**: Look at digit to right of place being rounded
  - If ≥ 5, round up
  - If < 5, round down
- Example: 0.456 rounded to hundredths = 0.46
- Example: 0.456 rounded to tenths = 0.5

### Terminating vs. Repeating
- **Terminating**: Decimals that end
  - Example: 0.5, 0.75, 0.125
- **Repeating**: Decimals with repeating pattern
  - Example: 0.333..., 0.666..., 0.142857...

## Applications in Real Life 🌍

### Shopping 🛍️
- Using distributive property for discounts
- Rounding prices to nearest rupee

### Cooking 👩‍🍳
- Scaling recipes using properties
- Converting measurements

### Time Management ⏰
- Adding and subtracting time
- Calculating fractions of hours

## Common Mistakes to Avoid ❌

1. **Forgetting to simplify** fractions after operations
2. **Not converting** mixed numbers properly
3. **Miscounting decimal places** in operations
4. **Forgetting properties** when solving problems

## Practice Problems 📝

1. **Properties**:
   - Show that ½ + (⅓ + ¼) = (½ + ⅓) + ¼
   - Show that 0.5 × (0.3 + 0.2) = (0.5 × 0.3) + (0.5 × 0.2)

2. **Operations**:
   - Simplify 12/16
   - Round 0.456 to nearest hundredth

## Summary ✨

Key points to remember:
- **Commutative Property**: Order doesn't matter in addition/multiplication
- **Associative Property**: Grouping doesn't matter in addition/multiplication
- **Distributive Property**: Multiplication distributes over addition
- **Identity Properties**: Adding 0 or multiplying by 1 doesn't change value
- **Inverse Properties**: Adding opposite or multiplying by reciprocal gives identity

### Additional Examples:

1. **Shopping Example**:
   If a shirt costs ₹500 and pants cost ₹300, and there's a 20% discount on both, what's the total cost?
   Solution: 0.8 × (500 + 300) = (0.8 × 500) + (0.8 × 300) = ₹640

2. **Cooking Example**:
   If a recipe needs 1½ cups of flour and ¾ cup of sugar, and you want to make ⅔ of the recipe, how much of each do you need?
   Solution: ⅔ × (1½ + ¾) = (⅔ × 1½) + (⅔ × ¾) = 1 cup flour + ½ cup sugar

3. **Time Example**:
   If you spend ⅓ hour on math and ¼ hour on science, and then ½ hour on English, how much time did you spend in total?
   Solution: (⅓ + ¼) + ½ = ⅓ + (¼ + ½) = 13/12 hours

Remember to practice regularly and check your work! 🎯
`,
    quiz: {
        questions: [
            ...easyQuestions,
            ...mediumQuestions
        ]
    }
}; 