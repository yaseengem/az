import { QuizQuestion, TopicQuiz, TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic3Content: TopicContent = {
    id: 'cl6_ch10_t3',
    topicNumber: 3,
    topicName: "Practical Measurement Problems",
    duration: 45,
    description: "Solving real-world measurement problems involving perimeter and area calculations",
    explanation: `
# Practical Measurement Problems 📏

Welcome to the world of practical measurement! 🌟 In this topic, we'll learn how to apply our knowledge of perimeter and area to solve real-world problems. Let's explore how these concepts help us in everyday life! 🚀

## Understanding Practical Measurements 📐

Practical measurement problems involve applying mathematical concepts to real-life situations. These problems help us:
- Plan construction projects
- Calculate material requirements
- Design spaces efficiently
- Solve everyday measurement challenges

## Common Types of Practical Problems 🏗️

### 1. Fencing and Boundaries
- Calculating fence length for gardens
- Measuring property boundaries
- Planning border decorations
- Example: A rectangular garden needs fencing. If it's 15m long and 10m wide, how much fencing is needed?

### 2. Flooring and Tiling
- Calculating area for flooring
- Determining number of tiles needed
- Planning carpet installation
- Example: A room is 6m long and 4m wide. How many 1m² tiles are needed to cover the floor?

### 3. Painting and Wallpapering
- Calculating wall areas
- Determining paint quantities
- Planning wallpaper requirements
- Example: A room has four walls, each 3m high. Two walls are 4m long, and two are 5m long. What's the total wall area to be painted?

### 4. Sports Fields and Courts
- Measuring track lengths
- Calculating court perimeters
- Planning game boundaries
- Example: A rectangular basketball court is 28m long and 15m wide. What's its perimeter?

## Problem-Solving Steps 📝

1. **Understand the Problem**
   - Read carefully
   - Identify what's given
   - Determine what's needed

2. **Choose the Right Formula**
   - Perimeter for boundaries
   - Area for surfaces
   - Volume for spaces

3. **Convert Units if Necessary**
   - 1 m = 100 cm
   - 1 km = 1000 m
   - 1 cm = 10 mm

4. **Calculate Carefully**
   - Show all steps
   - Check calculations
   - Verify units

## Common Challenges and Solutions 💡

1. **Irregular Shapes**
   - Break into regular shapes
   - Calculate each part
   - Add results together

2. **Missing Measurements**
   - Use given information
   - Apply formulas
   - Solve for unknowns

3. **Unit Conversion**
   - Convert all to same unit
   - Use conversion factors
   - Check final units

## Real-Life Applications 🌍

1. **Home Improvement** 🏠
   - Planning room layouts
   - Calculating material needs
   - Budgeting for projects

2. **Gardening** 🌱
   - Planning garden beds
   - Calculating fence lengths
   - Measuring paths

3. **Sports** ⚽
   - Marking playing fields
   - Planning tracks
   - Designing courts

## Practice Problems 🏋️‍♀️

1. **Example 1**: A rectangular room is 5m long and 4m wide. How much skirting board is needed to go around the room?
   - Solution: Perimeter = 2 × (5 + 4) = 18m

2. **Example 2**: A circular garden has a radius of 7m. How much fencing is needed to enclose it? (Use π = 3.14)
   - Solution: Perimeter = 2 × 3.14 × 7 = 43.96m

3. **Example 3**: A triangular plot has sides of 12m, 16m, and 20m. What's the cost of fencing at ₹50 per meter?
   - Solution: Perimeter = 12 + 16 + 20 = 48m, Cost = 48 × 50 = ₹2400

## Common Mistakes to Avoid ❌

1. **Unit Confusion**
   - Always use consistent units
   - Convert when necessary
   - Check final units

2. **Formula Mix-up**
   - Use correct formula for the problem
   - Don't confuse perimeter and area
   - Check formula application

3. **Calculation Errors**
   - Double-check calculations
   - Verify steps
   - Use estimation to check reasonableness

## Summary ✨

In this topic, we learned:
- How to apply perimeter and area concepts to real problems
- Steps for solving practical measurement problems
- Common types of measurement challenges
- Tips for avoiding common mistakes
- Real-world applications of measurement concepts

### Additional Examples and Sample Questions:

1. **Example**: A rectangular swimming pool is 25m long and 15m wide. What's the cost of tiling the floor at ₹200 per square meter?
   - Solution: Area = 25 × 15 = 375m², Cost = 375 × 200 = ₹75,000

2. **Example**: A circular track has a radius of 50m. How many laps are needed to run 1km?
   - Solution: Perimeter = 2 × 3.14 × 50 = 314m, Laps = 1000 ÷ 314 ≈ 3.18

3. **Question**: A room is 6m long and 4m wide. How much carpet is needed to cover the floor?
   - Solution: Area = 6 × 4 = 24m²

4. **Question**: A triangular garden has sides of 8m, 15m, and 17m. What's the cost of fencing at ₹75 per meter?
   - Solution: Perimeter = 8 + 15 + 17 = 40m, Cost = 40 × 75 = ₹3000
`,
    quiz: {
        questions: [
            ...easyQuestions,
            ...mediumQuestions
        ]
    }
};
