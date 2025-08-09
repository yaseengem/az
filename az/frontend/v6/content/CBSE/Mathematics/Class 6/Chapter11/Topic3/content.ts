import { QuizQuestion, TopicQuiz, TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic3Content: TopicContent = {
    id: 'cl6_ch11_t3',
    topicNumber: 3,
    topicName: "Practical Measurement Problems",
    duration: 45,
    description: "Solving real-world measurement problems involving perimeter and area calculations",
    explanation: `
# Practical Measurement Problems 📏

Welcome to the world of practical measurements! 🌟 In this topic, we'll learn how to solve real-world problems involving measurements of length, area, and perimeter. Let's explore how mathematics helps us in everyday life! 🚀

## Understanding Practical Measurements 📊

### What are Practical Measurement Problems? 🤔

Practical measurement problems are real-life situations where we need to:
- Calculate distances
- Find areas of spaces
- Determine perimeters
- Measure quantities
- Compare sizes

### Common Types of Problems 🏗️

1. **Fencing Problems** 🏡
   - Calculating the length of fence needed for a garden
   - Example: A rectangular garden is 15m long and 10m wide. How much fencing is needed?

2. **Flooring Problems** 🏠
   - Finding the area for tiles or carpet
   - Example: A room is 6m long and 4m wide. How many square meters of tiles are needed?

3. **Painting Problems** 🎨
   - Calculating the area to be painted
   - Example: A wall is 3m high and 5m wide. What is its area?

4. **Sports Field Problems** ⚽
   - Finding perimeters of playing fields
   - Example: A square field has sides of 50m. What is its perimeter?

## Problem-Solving Steps 📝

1. **Understand the Problem**
   - Read carefully
   - Identify what's given
   - Determine what's needed

2. **Choose the Right Formula**
   - Perimeter: Sum of all sides
   - Area: Length × Width
   - Square: Side × Side
   - Rectangle: Length × Width

3. **Convert Units if Needed**
   - 1 meter = 100 centimeters
   - 1 kilometer = 1000 meters

4. **Calculate Carefully**
   - Show all steps
   - Check calculations
   - Verify units

## Real-Life Applications 🌍

1. **Home Improvement** 🏠
   - Measuring rooms for furniture
   - Calculating paint needed
   - Planning garden layouts

2. **Sports** ⚽
   - Marking playing fields
   - Setting up tracks
   - Planning sports facilities

3. **Construction** 🏗️
   - Building houses
   - Laying roads
   - Creating parks

## Practice Problems 🏋️‍♀️

1. **Example 1**: A rectangular garden is 12m long and 8m wide. What is its perimeter?
   - Solution: 2 × (12 + 8) = 40m

2. **Example 2**: A square room has sides of 5m. What is its area?
   - Solution: 5 × 5 = 25m²

3. **Example 3**: A circular track has a radius of 50m. What is its circumference?
   - Solution: 2 × π × 50 ≈ 314m

## Common Mistakes to Avoid ❌

1. **Unit Confusion** 📏
   - Always check units
   - Convert when necessary
   - Keep units consistent

2. **Formula Mix-ups** 🔄
   - Use correct formula
   - Perimeter vs Area
   - Different shapes

3. **Calculation Errors** ➗
   - Double-check math
   - Use calculator carefully
   - Verify answers

## Summary ✨

In this topic, we learned:
- How to solve practical measurement problems
- Different types of measurement problems
- Real-life applications
- Common mistakes to avoid
- The importance of careful calculations

### Additional Examples and Sample Questions:

1. **Example**: A rectangular pool is 25m long and 15m wide. What is its area?
   - Solution: 25 × 15 = 375m²

2. **Example**: A square garden has a perimeter of 40m. What is the length of each side?
   - Solution: 40 ÷ 4 = 10m

3. **Question**: If a room is 4m by 6m, how many square meters of carpet are needed?
   - Solution: 4 × 6 = 24m²

4. **Question**: A running track is 400m around. If it's a square, how long is each side?
   - Solution: 400 ÷ 4 = 100m
`,
    quiz: {
        questions: [
            ...easyQuestions,
            ...mediumQuestions
        ]
    }
};
