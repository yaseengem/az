import { generateId } from '../../../../../../app/utils/idGenerator';
import { QuizQuestion, TopicQuiz, TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic1Content: TopicContent = {
    id: 'cl5_ch11_t1',
    topicNumber: 1,
    topicName: 'Formula for Area of Rectangles',
    duration: 45,
    description: 'Learn how to calculate the area of rectangles using the standard formula, with real-life examples and practice questions.',
    explanation: `
# Formula for Area of Rectangles 🟦

Rectangles are everywhere! From your classroom blackboard to your notebook, and even the floor tiles at home, rectangles are one of the most common shapes we see in our daily lives. But how do we find out how much space a rectangle covers? That's where the concept of **area** comes in!

## What is Area? 📏

**Area** is the amount of space inside a shape. Imagine you want to cover a table with a cloth. The area tells you how much cloth you need to cover the table completely, without leaving any part uncovered.

## Understanding Rectangles 🔲

A **rectangle** is a four-sided shape with opposite sides equal and all angles right angles (90°). Examples include books, doors, and mobile screens.

- **Length (l):** The longer side of the rectangle
- **Breadth (b) or Width (w):** The shorter side of the rectangle

## The Area Formula 🧮

The area of a rectangle is calculated by multiplying its length by its breadth:

\[
Area = Length \times Breadth
\]
Or, using symbols:
\[
A = l \times b
\]

### Example 1
If a rectangle has a length of 8 cm and a breadth of 5 cm:
- Area = 8 cm × 5 cm = 40 cm²

### Example 2
A classroom blackboard is 2 m long and 1 m wide. What is its area?
- Area = 2 m × 1 m = 2 m²

## Why Multiply? 🤔

Imagine filling a rectangle with 1 cm × 1 cm squares. The number of squares that fit inside is the area. If the length is 6 cm and the breadth is 4 cm, you can fit 6 rows of 4 squares each, which is 6 × 4 = 24 squares. So, the area is 24 cm².

## Units of Area 📐

- If length and breadth are in **centimetres (cm)**, area is in **square centimetres (cm²)**
- If in **metres (m)**, area is in **square metres (m²)**
- If in **millimetres (mm)**, area is in **square millimetres (mm²)**

**Tip:** Always write the correct unit for area!

## Real-Life Examples 🌍

- **Flooring:** To tile a rectangular floor, you need to know its area to buy the right amount of tiles.
- **Gardening:** To cover a rectangular garden with grass, you need to know the area to buy enough grass.
- **Painting:** To paint a wall, you need to know its area to buy enough paint.

### Example 3
A rectangular garden is 10 m long and 7 m wide. What is its area?
- Area = 10 m × 7 m = 70 m²

### Example 4
A book cover is 20 cm long and 15 cm wide. What is its area?
- Area = 20 cm × 15 cm = 300 cm²

## Sample Questions ❓

1. A rectangle has a length of 12 cm and a breadth of 6 cm. What is its area?
2. The length of a playground is 50 m and the breadth is 30 m. Find the area.
3. A rectangular table top is 1.5 m long and 0.8 m wide. What is its area?
4. If a rectangle's area is 56 cm² and its length is 7 cm, what is its breadth?

## Practice with Area 🏋️‍♂️

Try drawing rectangles on graph paper and counting the number of squares inside to check your answer using the formula!

## Common Mistakes to Avoid ⚠️

- Don't forget to multiply length and breadth.
- Always use the same units for both length and breadth.
- Don't forget to write the unit as square units (cm², m², etc.).

## Quick Recap ��

- **Area** is the space inside a rectangle.
- **Formula:** Area = Length × Breadth
- **Unit:** Square units (cm², m², etc.)
- Use the formula to solve real-life problems!

## Summary ✨

The area of a rectangle helps us find out how much space it covers. By multiplying the length and breadth, we get the area in square units. This is useful in many real-life situations, like tiling floors, making gardens, or covering books. Practice using the formula and soon you'll be able to find the area of any rectangle you see!

### More Examples:
- A rectangle with l = 9 cm, b = 3 cm → Area = 27 cm²
- A rectangle with l = 5 m, b = 2 m → Area = 10 m²
- A rectangle with l = 14 cm, b = 7 cm → Area = 98 cm²

### More Sample Questions:
- What is the area of a rectangle with length 11 cm and breadth 4 cm?
- If a rectangle's area is 81 m² and its length is 9 m, what is its breadth?
- A rectangular mat is 2 m long and 1.5 m wide. Find its area.
`,
    quiz: {
        questions: [
            ...easyQuestions,
            ...mediumQuestions
        ]
    }
}; 