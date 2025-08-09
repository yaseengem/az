// Topic 3: Symmetrical letters and figures
// content.ts will be created here for the topic.

import { QuizQuestion, TopicQuiz, TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic3Content: TopicContent = {
    id: 'cl6_ch13_t3',
    topicNumber: 3,
    topicName: "Rotational Symmetry",
    duration: 45,
    description: "Understanding rotational symmetry and its applications in shapes and patterns",
    explanation: `
# Rotational Symmetry 🔄

Welcome to the fascinating world of rotational symmetry! 🌟 In this topic, we'll explore how shapes can look the same after rotation and understand the concept of order of rotation. Let's begin our journey! 🚀

## Understanding Rotational Symmetry 📐

Rotational symmetry is when a shape looks exactly the same after being rotated by a certain angle. The number of times a shape matches its original position during a full 360-degree rotation is called its order of rotation.

### What is Order of Rotation? 🔢

- The order of rotation is the number of times a shape matches its original position in one complete turn
- A full turn is 360 degrees
- The angle of rotation = 360° ÷ order of rotation

## Properties of Rotational Symmetry 📏

1. **Order of Rotation** 📊
   - A shape with order 1 has no rotational symmetry
   - A shape with order 2 looks the same after 180° rotation
   - A shape with order 3 looks the same after 120° rotation
   - And so on...

2. **Center of Rotation** ⚪
   - The fixed point around which the shape rotates
   - Usually marked with a dot in diagrams

3. **Angle of Rotation** 📐
   - The smallest angle needed to make the shape look the same
   - Calculated as 360° ÷ order of rotation

## Finding Order of Rotation 🧮

### Step 1: Identify the Center
- Find the point around which the shape can rotate
- This is usually the geometric center

### Step 2: Test Different Angles
- Try rotating the shape by different angles
- Note when it matches its original position

### Step 3: Calculate Order
- Count how many times it matches in a full turn
- This gives the order of rotation

## Common Shapes and Their Orders 📊

1. **Regular Polygons** 🔷
   - Equilateral Triangle: Order 3
   - Square: Order 4
   - Regular Pentagon: Order 5
   - Regular Hexagon: Order 6
   - Circle: Infinite order

2. **Letters and Numbers** 🔤
   - Some letters have rotational symmetry (N, S, Z)
   - Most numbers don't have rotational symmetry

## Real-Life Examples 🌟

1. **Nature** 🌿
   - Flowers (daisies, sunflowers)
   - Snowflakes
   - Starfish

2. **Man-Made Objects** 🏗️
   - Wheels
   - Windmills
   - Ceiling fans
   - Clock faces

## Practice Problems 🏋️‍♀️

1. **Example 1**: Find the order of rotation for a regular hexagon
   - Solution: Order 6 (matches every 60 degrees)

2. **Example 2**: What is the angle of rotation for a shape with order 4?
   - Solution: 90 degrees (360° ÷ 4)

3. **Example 3**: Which letters of the English alphabet have rotational symmetry?
   - Solution: N, S, Z (order 2)

## Common Mistakes to Avoid ❌

1. **Confusing Order and Angle** 📏
   - Remember: Order is the number of matches
   - Angle = 360° ÷ order

2. **Missing the Center** ⚪
   - Always identify the center of rotation first
   - The center must be fixed during rotation

3. **Incomplete Rotation** 🔄
   - Check for a full 360-degree turn
   - Don't stop at the first match

## Summary ✨

In this topic, we learned:
- What rotational symmetry is
- How to find order of rotation
- Properties of rotational symmetry
- Common shapes and their orders
- Real-life examples
- Common mistakes to avoid

Remember:
1. Order of rotation = number of matches in 360°
2. Angle of rotation = 360° ÷ order
3. Some shapes have infinite order (circle)
4. Regular polygons have order equal to their number of sides

### Additional Examples and Sample Questions:

1. **Example**: A shape matches its original position 8 times in a full turn. What is its order of rotation? (Answer: 8)

2. **Example**: What is the angle of rotation for a shape with order 5? (Answer: 72 degrees)

3. **Question**: Which regular polygon has order of rotation 8? (Answer: Regular octagon)

4. **Question**: How many times does a square match its original position in a full turn? (Answer: 4 times)
`,
    quiz: {
        questions: [
            ...easyQuestions,
            ...mediumQuestions
        ]
    }
};
