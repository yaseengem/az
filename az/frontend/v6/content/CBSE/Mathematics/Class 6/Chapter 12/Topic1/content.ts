import { QuizQuestion, TopicQuiz, TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic1Content: TopicContent = {
    id: 'cl6_ch12_t1',
    topicNumber: 1,
    topicName: "Simplifying Ratios",
    duration: 45,
    description: "Understanding how to simplify ratios and express them in their simplest form",
    explanation: `
# Simplifying Ratios 📊

Welcome to the world of ratios! 🌟 In this topic, we'll learn how to simplify ratios and express them in their simplest form. Ratios are everywhere in our daily lives, from recipes to maps to comparing quantities. Let's dive in! 🚀

## What is a Ratio? 🤔

A ratio is a way to compare two or more quantities. It shows how much of one thing there is compared to another. For example:
- If there are 4 boys and 6 girls in a class, the ratio of boys to girls is 4:6
- If a recipe calls for 2 cups of flour and 1 cup of sugar, the ratio of flour to sugar is 2:1

## Understanding Ratio Notation 📝

Ratios can be written in different ways:
1. Using a colon (:) - 4:6
2. Using the word "to" - 4 to 6
3. As a fraction - 4/6

## Simplifying Ratios 🔄

To simplify a ratio means to make it as simple as possible by dividing both numbers by their greatest common factor (GCF). Here's how:

1. **Find the GCF** of the numbers in the ratio
2. **Divide both numbers** by the GCF
3. **Write the simplified ratio**

### Example 1: Simplifying 4:6
- GCF of 4 and 6 is 2
- Divide both by 2: 4 ÷ 2 = 2, 6 ÷ 2 = 3
- Simplified ratio: 2:3

### Example 2: Simplifying 15:25
- GCF of 15 and 25 is 5
- Divide both by 5: 15 ÷ 5 = 3, 25 ÷ 5 = 5
- Simplified ratio: 3:5

## Real-Life Applications 🌍

1. **Cooking Recipes** 🍳
   - If a recipe uses 2 cups of flour and 4 cups of water
   - Ratio is 2:4, which simplifies to 1:2
   - This means for every 1 cup of flour, you need 2 cups of water

2. **Maps and Scales** 🗺️
   - If a map scale is 1:1000
   - This means 1 cm on the map equals 1000 cm in real life
   - The ratio is already in its simplest form

3. **Mixing Colors** 🎨
   - To make green, you might mix blue and yellow in a 2:3 ratio
   - This means for every 2 parts blue, you need 3 parts yellow

## Common Mistakes to Avoid ❌

1. **Not Finding the GCF** 🤔
   - Always find the greatest common factor, not just any common factor
   - Example: For 8:12, don't just divide by 2 (4:6), divide by 4 (2:3)

2. **Incorrect Order** 🔄
   - The order of numbers in a ratio matters
   - 2:3 is different from 3:2
   - Example: The ratio of boys to girls is 2:3 means 2 boys for every 3 girls

3. **Not Simplifying Completely** 📊
   - Make sure to simplify until no common factors remain
   - Example: 6:9 should be simplified to 2:3, not left as 6:9

## Practice Problems 🏋️‍♀️

1. **Example 1**: Simplify 12:18
   - GCF is 6
   - 12 ÷ 6 = 2, 18 ÷ 6 = 3
   - Answer: 2:3

2. **Example 2**: Simplify 20:30
   - GCF is 10
   - 20 ÷ 10 = 2, 30 ÷ 10 = 3
   - Answer: 2:3

3. **Example 3**: Simplify 9:15
   - GCF is 3
   - 9 ÷ 3 = 3, 15 ÷ 3 = 5
   - Answer: 3:5

## Summary ✨

In this topic, we learned:
- What ratios are and how to write them
- How to simplify ratios using the GCF
- Real-life applications of ratios
- Common mistakes to avoid
- The importance of ratio order

### Additional Examples and Sample Questions:

1. **Example**: In a class of 24 students, 16 are girls. What is the ratio of girls to boys in simplest form? (Answer: 2:1)

2. **Example**: A recipe uses 3 cups of milk and 6 cups of flour. What is the ratio of milk to flour in simplest form? (Answer: 1:2)

3. **Question**: If the ratio of red marbles to blue marbles is 4:6, what is the simplified ratio? (Answer: 2:3)

4. **Question**: A map scale is 1:5000. What does this ratio mean? (Answer: 1 unit on the map equals 5000 units in real life)
`,
    quiz: {
        questions: [
            ...easyQuestions,
            ...mediumQuestions
        ]
    }
};
