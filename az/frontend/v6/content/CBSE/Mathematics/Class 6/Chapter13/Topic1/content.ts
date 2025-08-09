// Topic 1: Line symmetry in shapes
// content.ts will be created here for the topic.

import { QuizQuestion, TopicQuiz, TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic1Content: TopicContent = {
    id: 'cl6_ch13_t1',
    topicNumber: 1,
    topicName: "Line Symmetry in Shapes",
    duration: 45,
    description: "Understanding line symmetry in different shapes and patterns",
    explanation: `
# Line Symmetry in Shapes 📐

Welcome to the world of line symmetry! 🌟 In this topic, we'll explore how shapes can be divided into identical halves using lines of symmetry. Let's begin our journey! 🚀

## Understanding Line Symmetry 🔄

Line symmetry is when one half of a shape is the mirror image of the other half. It's like folding a piece of paper and having both sides match perfectly!

### What is a Line of Symmetry? 📏

- A line that divides a shape into two identical parts
- Each part is a mirror image of the other
- The line can be vertical, horizontal, or diagonal
- Example: A square has 4 lines of symmetry

## Finding Lines of Symmetry 🧮

### Step 1: Visual Check
- Look at the shape carefully
- Imagine folding it along different lines
- If both halves match exactly, that's a line of symmetry

### Step 2: Drawing Lines
- Use a ruler to draw potential lines of symmetry
- Check if both sides are mirror images
- Count the number of lines that work

## Common Shapes and Their Lines of Symmetry 📊

1. **Regular Polygons** 🔷
   - Equilateral Triangle: 3 lines of symmetry
   - Square: 4 lines of symmetry
   - Regular Pentagon: 5 lines of symmetry
   - Regular Hexagon: 6 lines of symmetry

2. **Other Shapes** 🔶
   - Circle: Infinite lines of symmetry
   - Rectangle: 2 lines of symmetry
   - Rhombus: 2 lines of symmetry
   - Kite: 1 line of symmetry
   - Isosceles Triangle: 1 line of symmetry
   - Scalene Triangle: No lines of symmetry

## Real-Life Examples 🌟

1. **Natural Symmetry** 🌿
   - Butterfly wings
   - Leaves
   - Snowflakes
   - Human face

2. **Man-made Symmetry** 🏗️
   - Buildings
   - Logos
   - Patterns
   - Artwork

## Practice Problems 🏋️‍♀️

1. **Example 1**: How many lines of symmetry does a regular hexagon have?
   - Solution: 6 lines of symmetry (3 vertical, 3 horizontal)

2. **Example 2**: Draw a shape with exactly 2 lines of symmetry
   - Solution: Rectangle or rhombus

3. **Example 3**: Which shape has no lines of symmetry?
   - Solution: Scalene triangle

## Common Mistakes to Avoid ❌

1. **Counting Lines** 📏
   - Remember to count all possible lines
   - Don't miss diagonal lines in shapes like squares
   - Check both vertical and horizontal lines

2. **Shape Properties** 📐
   - Regular shapes have equal sides and angles
   - Irregular shapes may have fewer lines of symmetry
   - Some shapes have no lines of symmetry

3. **Drawing Lines** ✏️
   - Use a ruler for straight lines
   - Make sure lines pass through the center
   - Check both sides match exactly

## Summary ✨

In this topic, we learned:
- What line symmetry is
- How to find lines of symmetry
- Common shapes and their lines of symmetry
- Real-life examples of symmetry
- Common mistakes to avoid

Remember:
1. Line symmetry is about folding
2. Both halves must match exactly
3. Regular shapes have more symmetry
4. Practice drawing symmetrical shapes

### Additional Examples and Sample Questions:

1. **Example**: Draw a shape with exactly 1 line of symmetry (Answer: Isosceles triangle)

2. **Example**: Find a shape with 4 lines of symmetry (Answer: Square)

3. **Question**: How many lines of symmetry does a regular octagon have? (Answer: 8)

4. **Question**: Which shape has infinite lines of symmetry? (Answer: Circle)
`,
    quiz: {
        questions: [
            ...easyQuestions,
            ...mediumQuestions
        ]
    }
};
