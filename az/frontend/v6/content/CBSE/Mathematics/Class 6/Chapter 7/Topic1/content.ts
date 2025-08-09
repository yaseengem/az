// Topic 1: Types of fractions (proper, improper, mixed)
// content.ts will be created here for the topic.

import { QuizQuestion, TopicQuiz, TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic1Content: TopicContent = {
    id: 'cl6_ch7_t1',
    topicNumber: 1,
    topicName: "Types of Fractions",
    duration: 45,
    description: "Understanding different types of fractions including proper, improper, and mixed fractions",
    explanation: `
# Types of Fractions 🧮

Welcome to the world of fractions! 🌟 In this topic, we'll explore different types of fractions and learn how to identify and work with them. Fractions are everywhere in our daily lives - from sharing pizzas 🍕 to measuring ingredients for recipes 📝. Let's dive in! 🚀

## What are Fractions? 🤔

A fraction represents a part of a whole. It consists of two numbers:
- **Numerator** (top number): Shows how many parts we have
- **Denominator** (bottom number): Shows how many equal parts the whole is divided into

For example, in the fraction ¾:
- 3 is the numerator (we have 3 parts)
- 4 is the denominator (the whole is divided into 4 equal parts)

## Types of Fractions 📊

### 1. Proper Fractions 📐
- **Definition**: Fractions where the numerator is less than the denominator
- **Example**: ¾, ⅔, ⅛
- **Real-life example**: If you eat 3 slices of a pizza cut into 8 slices, you've eaten ⅜ of the pizza 🍕

### 2. Improper Fractions 📈
- **Definition**: Fractions where the numerator is greater than or equal to the denominator
- **Example**: 5/4, 7/3, 9/2
- **Real-life example**: If you have 5 quarters (5/4), you have more than one whole dollar 💰

### 3. Mixed Fractions 🔄
- **Definition**: A combination of a whole number and a proper fraction
- **Example**: 1¾, 2⅔, 3⅛
- **Real-life example**: If you have 1 whole pizza and ¾ of another pizza, you have 1¾ pizzas 🍕

## Converting Between Types 🔄

### Converting Improper to Mixed Fractions
1. Divide the numerator by the denominator
2. The quotient becomes the whole number
3. The remainder becomes the new numerator
4. Keep the same denominator

**Example**: Convert 7/3 to a mixed fraction
- 7 ÷ 3 = 2 with remainder 1
- So, 7/3 = 2⅓

### Converting Mixed to Improper Fractions
1. Multiply the whole number by the denominator
2. Add the numerator
3. Keep the same denominator

**Example**: Convert 2⅓ to an improper fraction
- (2 × 3) + 1 = 7
- So, 2⅓ = 7/3

## Equivalent Fractions 🔄
- Fractions that represent the same value but look different
- Created by multiplying or dividing both numerator and denominator by the same number

**Example**: ½ = 2/4 = 3/6 = 4/8
- All these fractions represent the same amount
- We can multiply numerator and denominator by any number to get equivalent fractions

## Real-Life Applications 🌍

1. **Cooking and Recipes** 👩‍🍳
   - Measuring ingredients: ½ cup flour, ¾ teaspoon salt
   - Adjusting recipe quantities: doubling or halving ingredients

2. **Time Management** ⏰
   - Understanding time: ¾ of an hour = 45 minutes
   - Planning schedules: ½ day work, ¼ day study

3. **Money and Finance** 💰
   - Understanding discounts: ¼ off means 25% discount
   - Calculating interest: ½% interest per month

## Practice Problems 🏋️‍♀️

1. **Example 1**: Identify the type of fraction: ⅞
   - Solution: Proper fraction (numerator < denominator)

2. **Example 2**: Convert 9/4 to a mixed fraction
   - Solution: 2¼ (9 ÷ 4 = 2 with remainder 1)

3. **Example 3**: Convert 3⅔ to an improper fraction
   - Solution: 11/3 ((3 × 3) + 2 = 11)

## Common Mistakes to Avoid ❌

1. **Confusing Numerator and Denominator** 🤔
   - Remember: Numerator is on top, denominator is on bottom
   - Example: In ¾, 3 is the numerator, 4 is the denominator

2. **Improper Conversion** 🔄
   - When converting mixed to improper fractions, don't forget to multiply the whole number by the denominator
   - Example: 2⅓ = (2 × 3) + 1 = 7/3, not 2 + 1/3

3. **Simplifying Fractions** 📝
   - Always reduce fractions to their simplest form
   - Example: 4/8 should be simplified to ½

## Summary ✨

In this topic, we learned:
- Different types of fractions: proper, improper, and mixed
- How to convert between improper and mixed fractions
- The concept of equivalent fractions
- Real-life applications of fractions
- Common mistakes to avoid when working with fractions

### Additional Examples and Sample Questions:

1. **Example**: If you have 5/4 of a chocolate bar, how would you express this as a mixed fraction? (Answer: 1¼)

2. **Example**: Convert 3½ to an improper fraction. (Answer: 7/2)

3. **Question**: Which is larger: ⅔ or ¾? (Answer: ¾)

4. **Question**: If a pizza is cut into 8 slices and you eat 5 slices, what fraction of the pizza did you eat? (Answer: ⅝)
`,
    quiz: {
        questions: [
            ...easyQuestions,
            ...mediumQuestions
        ]
    }
};
