// Topic 2: Equivalent fractions
// content.ts will be created here for the topic.

import { QuizQuestion, TopicQuiz, TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic2Content: TopicContent = {
    id: 'cl6_ch7_t2',
    topicNumber: 2,
    topicName: "Equivalent Fractions",
    duration: 45,
    description: "Understanding equivalent fractions and how to find them",
    explanation: `
# Equivalent Fractions 🔄

Welcome to the world of equivalent fractions! 🌟 In this topic, we'll learn how to find and work with equivalent fractions. Equivalent fractions are different fractions that represent the same value. Let's explore this fascinating concept! 🚀

## What are Equivalent Fractions? 🤔

Equivalent fractions are fractions that look different but represent the same amount. They have different numerators and denominators but the same value.

**Example**: ½ = 2/4 = 3/6 = 4/8
- All these fractions represent the same amount
- They are all equal to 0.5 or 50%

## Finding Equivalent Fractions 🔍

### Method 1: Multiplication ✖️
- Multiply both numerator and denominator by the same number
- Example: ½ = (1×2)/(2×2) = 2/4

### Method 2: Division ➗
- Divide both numerator and denominator by the same number
- Example: 4/8 = (4÷4)/(8÷4) = ½

## Visual Representation 🎨

1. **Pizza Example** 🍕
   - ½ pizza = 2/4 pizza = 3/6 pizza
   - Different ways to cut the same amount

2. **Number Line** 📏
   - ½, 2/4, 3/6 all land on the same point
   - They represent the same distance from zero

## Simplest Form 📝

- A fraction is in its simplest form when numerator and denominator have no common factors except 1
- Example: 4/8 simplifies to ½
- To simplify:
  1. Find the greatest common factor (GCF)
  2. Divide both numbers by the GCF

## Cross Multiplication ✖️

- A quick way to check if fractions are equivalent
- If a/b = c/d, then a×d = b×c
- Example: Is 3/4 = 6/8?
  - 3×8 = 24
  - 4×6 = 24
  - Yes, they are equivalent!

## Real-Life Applications 🌍

1. **Cooking** 👩‍🍳
   - Adjusting recipe quantities
   - Example: ½ cup = 2/4 cup = 4/8 cup

2. **Measurements** 📏
   - Converting between different units
   - Example: ½ meter = 50/100 meter

3. **Time** ⏰
   - Understanding time fractions
   - Example: ½ hour = 30/60 minutes

## Practice Problems 🏋️‍♀️

1. **Example 1**: Find three equivalent fractions for ⅔
   - Solution: 4/6, 6/9, 8/12

2. **Example 2**: Simplify 12/16
   - Solution: ¾ (divide by 4)

3. **Example 3**: Are 3/5 and 9/15 equivalent?
   - Solution: Yes, because 3×15 = 5×9 = 45

## Common Mistakes to Avoid ❌

1. **Adding/Subtracting Numerators and Denominators** ➕
   - Wrong: ½ + ⅓ = 2/5
   - Correct: Find common denominator first

2. **Multiplying/Dividing by Different Numbers** ✖️
   - Wrong: ½ = (1×2)/(2×3) = 2/6
   - Correct: Must multiply/divide by same number

3. **Not Simplifying** 📝
   - Always reduce fractions to simplest form
   - Example: 4/8 should be ½

## Summary ✨

In this topic, we learned:
- What equivalent fractions are
- How to find equivalent fractions
- Methods to check if fractions are equivalent
- How to simplify fractions
- Real-life applications of equivalent fractions

### Additional Examples and Sample Questions:

1. **Example**: Find two equivalent fractions for ¾
   - Solution: 6/8, 9/12

2. **Example**: Simplify 15/20
   - Solution: ¾

3. **Question**: Are 2/3 and 4/6 equivalent?
   - Solution: Yes, because 2×6 = 3×4 = 12

4. **Question**: What is the simplest form of 8/12?
   - Solution: ⅔
`,
    quiz: {
        questions: [
            ...easyQuestions,
            ...mediumQuestions
        ]
    }
};
