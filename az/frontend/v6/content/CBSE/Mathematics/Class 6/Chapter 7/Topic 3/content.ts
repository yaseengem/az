// Topic 3: Addition and subtraction of fractions
// content.ts will be created here for the topic.

import { TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic3Content: TopicContent = {
    id: 'cl6_ch7_t3',
    topicNumber: 3,
    topicName: "Addition and Subtraction of Fractions",
    duration: 45,
    description: "Learn how to add and subtract fractions with like and unlike denominators, including mixed numbers and real-life applications",
    explanation: `
# Addition and Subtraction of Fractions 🧮

Fractions are everywhere in our daily lives! 🍕 From sharing pizzas to measuring ingredients, understanding how to add and subtract fractions is essential. Let's explore this important mathematical concept step by step. 🚀

## Understanding Like and Unlike Denominators 🔍

Before we can add or subtract fractions, we need to understand denominators:

### Like Denominators
- Fractions with the same denominator (bottom number)
- Example: 1/4 and 3/4 have the same denominator (4)
- Easier to add/subtract because we only need to work with the numerators

### Unlike Denominators
- Fractions with different denominators
- Example: 1/3 and 1/4 have different denominators
- Need to find a common denominator before adding/subtracting

## Adding Fractions with Like Denominators ➕

When denominators are the same, adding is simple:
1. Keep the denominator the same
2. Add the numerators
3. Simplify if possible

### Example:
1/4 + 2/4 = (1 + 2)/4 = 3/4

### Real-life Example:
If you eat 1/4 of a pizza 🍕 and your friend eats 2/4 of the same pizza, together you've eaten 3/4 of the pizza.

## Subtracting Fractions with Like Denominators ➖

Subtraction with like denominators follows the same pattern:
1. Keep the denominator the same
2. Subtract the numerators
3. Simplify if possible

### Example:
3/5 - 1/5 = (3 - 1)/5 = 2/5

### Real-life Example:
If you have 3/5 of a chocolate bar 🍫 and give away 1/5, you're left with 2/5 of the chocolate bar.

## Adding Fractions with Unlike Denominators ➕

When denominators are different, we need to find a common denominator:
1. Find the Least Common Denominator (LCD)
2. Convert each fraction to have the LCD
3. Add the numerators
4. Simplify if possible

### Example:
1/3 + 1/4
- LCD of 3 and 4 is 12
- Convert: 1/3 = 4/12 and 1/4 = 3/12
- Add: 4/12 + 3/12 = 7/12

### Real-life Example:
If you mix 1/3 cup of flour and 1/4 cup of sugar, you have 7/12 cups of mixture.

## Subtracting Fractions with Unlike Denominators ➖

Subtraction with unlike denominators follows the same process:
1. Find the LCD
2. Convert each fraction
3. Subtract the numerators
4. Simplify if possible

### Example:
2/3 - 1/4
- LCD of 3 and 4 is 12
- Convert: 2/3 = 8/12 and 1/4 = 3/12
- Subtract: 8/12 - 3/12 = 5/12

### Real-life Example:
If you have 2/3 of a cake 🎂 and eat 1/4 of it, you're left with 5/12 of the cake.

## Working with Mixed Numbers 🔄

Mixed numbers combine whole numbers and fractions:
1. Convert mixed numbers to improper fractions
2. Follow the same rules for addition/subtraction
3. Convert back to mixed numbers if needed

### Example:
1 1/2 + 2 1/4
- Convert: 1 1/2 = 3/2 and 2 1/4 = 9/4
- LCD is 4
- Convert: 3/2 = 6/4
- Add: 6/4 + 9/4 = 15/4
- Convert back: 15/4 = 3 3/4

## Common Mistakes to Avoid ❌

1. Adding denominators: 1/2 + 1/3 ≠ 2/5
2. Forgetting to find common denominators
3. Not simplifying final answers
4. Mixing up numerators and denominators

## Practice Problems 🏋️‍♀️

Let's try some problems:
1. 2/5 + 1/5 = ?
2. 3/4 - 1/4 = ?
3. 1/2 + 1/3 = ?
4. 2 1/3 - 1 1/4 = ?

## Real-life Applications 🌍

Fractions are used in many everyday situations:
- Cooking and baking 🍳
- Measuring ingredients
- Time management ⏰
- Money calculations 💰
- Sports statistics 🏀

## Summary ✨

Key points to remember:
1. For like denominators, add/subtract numerators directly
2. For unlike denominators, find the LCD first
3. Convert mixed numbers to improper fractions before calculating
4. Always simplify your final answer
5. Practice with real-life examples to understand better

### Additional Examples and Sample Questions:

1. **Example**: If you walk 1/2 mile in the morning and 1/3 mile in the evening, how far did you walk in total?
   (Answer: 5/6 mile)

2. **Example**: A recipe calls for 3/4 cup of flour and 1/2 cup of sugar. How much dry ingredients do you need in total?
   (Answer: 1 1/4 cups)

3. **Question**: If you have 2 1/2 liters of water and use 1 3/4 liters, how much water is left?
   (Answer: 3/4 liter)

4. **Question**: What is the sum of 1/6 and 1/3?
   (Answer: 1/2)
`,
    quiz: {
        questions: [
            ...easyQuestions,
            ...mediumQuestions
        ]
    }
};
