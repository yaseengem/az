import { QuizQuestion, TopicQuiz, TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic1Content: TopicContent = {
    id: 'cl6_ch10_t1',
    topicNumber: 1,
    topicName: "Perimeter of Squares and Rectangles",
    duration: 45,
    description: "Understanding the concept of perimeter and calculating perimeter of squares and rectangles",
    explanation: `
# Perimeter of Squares and Rectangles 📏

Welcome to the world of perimeter! 🌟 In this topic, we'll learn about the perimeter of squares and rectangles, which is an important concept in geometry. Let's explore how to calculate and apply perimeter in real-life situations! 🚀

## What is Perimeter? 🔍

Perimeter is the total distance around the outside of a shape. Think of it as walking around the edge of a shape and measuring how far you've walked! 🚶‍♂️

### Key Points about Perimeter:
- It's measured in units of length (cm, m, km, etc.)
- It's the sum of all sides of a shape
- It helps us understand the boundary of a shape

## Perimeter of a Square ⬜

A square has four equal sides. To find its perimeter:
- Formula: Perimeter = 4 × side length
- Since all sides are equal, we just multiply one side by 4

### Example:
If a square has sides of 5 cm:
- Perimeter = 4 × 5 cm = 20 cm

## Perimeter of a Rectangle 

A rectangle has two pairs of equal sides:
- Two lengths (longer sides)
- Two widths (shorter sides)

To find its perimeter:
- Formula: Perimeter = 2 × (length + width)
- We add length and width, then multiply by 2

### Example:
If a rectangle has length = 8 cm and width = 5 cm:
- Perimeter = 2 × (8 cm + 5 cm) = 2 × 13 cm = 26 cm

## Real-Life Applications 🌍

1. **Fencing a Garden** 🌱
   - Example: If you want to fence a square garden with sides of 10 meters
   - Solution: Perimeter = 4 × 10 m = 40 meters of fencing needed

2. **Picture Frame** 🖼️
   - Example: A rectangular picture frame has length 30 cm and width 20 cm
   - Solution: Perimeter = 2 × (30 cm + 20 cm) = 100 cm of frame material needed

3. **Running Track** 🏃‍♂️
   - Example: A rectangular track has length 100 m and width 50 m
   - Solution: One lap = 2 × (100 m + 50 m) = 300 m

## Common Mistakes to Avoid ❌

1. **Mixing Units** 📏
   - Always use the same unit for all measurements
   - Example: Don't mix cm and m in the same calculation

2. **Forgetting to Multiply** ✖️
   - Remember to multiply by 4 for squares
   - Remember to multiply by 2 for rectangles

3. **Adding All Sides Separately** ➕
   - While correct, it's more efficient to use the formulas
   - Example: For a square, don't add side + side + side + side

## Practice Problems 🏋️‍♀️

1. **Example 1**: Find the perimeter of a square with side 7 cm
   - Solution: 4 × 7 cm = 28 cm

2. **Example 2**: Find the perimeter of a rectangle with length 12 m and width 8 m
   - Solution: 2 × (12 m + 8 m) = 40 m

3. **Example 3**: A square field has a perimeter of 36 meters. What is the length of one side?
   - Solution: 36 m ÷ 4 = 9 m

## Summary ✨

In this topic, we learned:
- What perimeter is and how to calculate it
- Formulas for squares and rectangles
- Real-life applications of perimeter
- Common mistakes to avoid
- How to solve perimeter problems

### Additional Examples and Sample Questions:

1. **Example**: A rectangular swimming pool is 25 meters long and 15 meters wide. What is the perimeter of the pool? (Answer: 80 meters)

2. **Example**: A square tile has a perimeter of 40 cm. What is the length of each side? (Answer: 10 cm)

3. **Question**: If you want to put a fence around a square garden with sides of 12 meters, how much fencing do you need? (Answer: 48 meters)

4. **Question**: A rectangular room has a length of 8 meters and a width of 6 meters. What is the perimeter of the room? (Answer: 28 meters)
`,
    quiz: {
        questions: [
            ...easyQuestions,
            ...mediumQuestions
        ]
    }
};
