import { QuizQuestion, TopicQuiz, TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic2Content: TopicContent = {
    id: 'cl5_ch4_t2',
    topicNumber: 2,
    topicName: "Equivalent Fractions",
    duration: 45,
    description: "Understanding and finding equivalent fractions through multiplication and division",
    explanation: `
# Equivalent Fractions 🔄

Have you ever noticed that different fractions can represent the same amount? That's what equivalent fractions are all about! Let's explore this fascinating concept that helps us understand fractions better. 🧮

## What are Equivalent Fractions? 🤔

Equivalent fractions are different fractions that represent the same value or amount. They look different but are equal in value!

### Visual Examples 🎨

1. **Pizza Example** 🍕
   - 1/2 of a pizza = 2/4 of a pizza = 4/8 of a pizza
   - All these fractions represent the same amount of pizza!

2. **Chocolate Bar Example** 🍫
   - 1/3 of a chocolate bar = 2/6 of a chocolate bar
   - Both represent the same amount of chocolate

## Finding Equivalent Fractions 🔍

There are two main ways to find equivalent fractions:

### 1. Multiplication Method ✖️

Multiply both numerator and denominator by the same number:
- Example: 1/2 = (1×2)/(2×2) = 2/4
- Example: 2/3 = (2×3)/(3×3) = 6/9

### 2. Division Method ➗

Divide both numerator and denominator by the same number:
- Example: 4/8 = (4÷4)/(8÷4) = 1/2
- Example: 6/9 = (6÷3)/(9÷3) = 2/3

## Simplifying Fractions 📝

Simplifying means finding the simplest form of a fraction by dividing both numbers by their greatest common factor (GCF).

### Examples:
1. 4/8 = 1/2 (divided by 4)
2. 6/9 = 2/3 (divided by 3)
3. 10/15 = 2/3 (divided by 5)

## Real-Life Applications 🌟

1. **Cooking** 👩‍🍳
   - Recipe calls for 1/2 cup but you only have 1/4 cup measure
   - You can use 2/4 cup instead of 1/2 cup

2. **Time** ⏰
   - 30 minutes = 1/2 hour = 2/4 hour
   - All represent the same amount of time

3. **Money** 💰
   - 50 paise = 1/2 rupee = 2/4 rupee
   - All represent the same amount of money

## Sample Questions and Solutions 📝

1. **Question**: Find two equivalent fractions for 1/3
   **Solution**: 2/6 and 3/9 (by multiplying numerator and denominator by 2 and 3)

2. **Question**: Simplify 8/12 to its simplest form
   **Solution**: 2/3 (by dividing numerator and denominator by 4)

3. **Question**: Are 3/4 and 6/8 equivalent fractions?
   **Solution**: Yes, because 3/4 = (3×2)/(4×2) = 6/8

## Practice Problems 🏋️‍♀️

1. Find three equivalent fractions for 2/5
2. Simplify 12/18 to its simplest form
3. Are 4/6 and 8/12 equivalent fractions? Show your work

## Common Mistakes to Avoid ❌

1. **Multiplying only one number**
   - Wrong: 1/2 = 2/2 (only multiplied numerator)
   - Right: 1/2 = 2/4 (multiplied both numbers)

2. **Using different numbers**
   - Wrong: 1/2 = 2/3 (used different multipliers)
   - Right: 1/2 = 2/4 (used same multiplier)

3. **Forgetting to simplify**
   - Wrong: Leaving 4/8 as is
   - Right: Simplifying to 1/2

## Summary ✨

- Equivalent fractions represent the same value
- We can find them by multiplying or dividing both numbers by the same amount
- Simplifying fractions means finding their simplest form
- Equivalent fractions are useful in everyday life for cooking, time, and money

Remember: Just like different words can mean the same thing, different fractions can represent the same amount! Practice finding equivalent fractions to become a fraction expert! 🎯
`,
    quiz: {
        questions: [
            ...easyQuestions,
            ...mediumQuestions
        ]
    }
}; 