import { generateId } from '../../../../../../app/utils/idGenerator';
import { QuizQuestion, TopicQuiz, TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic3Content: TopicContent = {
    id: 'cl5_ch11_t3',
    topicNumber: 3,
    topicName: 'Area and Boundary',
    duration: 45,
    description: 'Understand the difference between area and boundary (perimeter) of rectangles, with examples and practice questions.',
    explanation: `
# Area and Boundary (Perimeter) of Rectangles 🟦🖊️

When we look at a rectangle, we can talk about two important things: the **area** (the space inside) and the **boundary** (the length around it, also called the perimeter). Let's learn how to find both and why they matter!

## What is Area? 📏

**Area** is the amount of space inside a shape. For rectangles, we use:
\[
Area = Length \times Breadth
\]
- Measured in square units (cm², m², etc.)

## What is Boundary (Perimeter)? 🚧

**Perimeter** is the total length around a shape. For rectangles, it's like walking all the way around the edge!
\[
Perimeter = 2 \times (Length + Breadth)
\]
- Measured in units (cm, m, etc.)

## Why are Both Important? 🤔

- **Area** tells us how much space we have to use or cover (like painting a wall or tiling a floor).
- **Perimeter** tells us how much material we need to go around the edge (like fencing a garden or putting a border around a picture).

## Example 1: Rectangle with l = 8 cm, b = 5 cm
- Area = 8 × 5 = 40 cm²
- Perimeter = 2 × (8 + 5) = 2 × 13 = 26 cm

## Example 2: Rectangle with l = 10 m, b = 4 m
- Area = 10 × 4 = 40 m²
- Perimeter = 2 × (10 + 4) = 2 × 14 = 28 m

## Real-Life Examples 🌍
- **Fencing:** To put a fence around a rectangular garden, you need to know the perimeter.
- **Tiling:** To cover the floor, you need to know the area.
- **Framing:** To put a border around a photo, you need the perimeter.

## Sample Questions ❓
1. A rectangle has a length of 12 cm and a breadth of 6 cm. Find its area and perimeter.
2. A playground is 50 m long and 30 m wide. What is its area? What is its perimeter?
3. A table top is 1.5 m long and 0.8 m wide. Find its area and perimeter.
4. If a rectangle's area is 56 cm² and its length is 7 cm, what is its breadth? What is its perimeter?

## Practice with Area and Perimeter 🏋️‍♂️
Try drawing rectangles on graph paper, count the squares for area, and add up the sides for perimeter!

## Common Mistakes to Avoid ⚠️
- Don't mix up area and perimeter formulas.
- Always use the same units for all sides.
- Write the correct unit: area (cm², m²), perimeter (cm, m).

## Quick Recap 📝
- **Area:** Space inside (l × b)
- **Perimeter:** Length around (2 × (l + b))
- Use the right formula for the right question!

## Summary ✨
Area and perimeter help us solve different real-life problems. Area is for covering, perimeter is for surrounding. Practice both and you'll be a rectangle expert!

### More Examples:
- l = 9 cm, b = 3 cm → Area = 27 cm², Perimeter = 24 cm
- l = 5 m, b = 2 m → Area = 10 m², Perimeter = 14 m
- l = 14 cm, b = 7 cm → Area = 98 cm², Perimeter = 42 cm

### More Sample Questions:
- What is the area and perimeter of a rectangle with length 11 cm and breadth 4 cm?
- If a rectangle's area is 81 m² and its length is 9 m, what is its breadth and perimeter?
- A mat is 2 m long and 1.5 m wide. Find its area and perimeter.
`,
    quiz: {
        questions: [
            ...easyQuestions,
            ...mediumQuestions
        ]
    }
}; 