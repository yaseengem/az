import { QuizQuestion, TopicQuiz, TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic2Content: TopicContent = {
    id: 'cl5_ch3_t2',
    topicNumber: 2,
    topicName: "Perimeter of Irregular Shapes",
    duration: 45,
    description: "Learning how to calculate the perimeter of irregular shapes by adding all side lengths",
    explanation: `
# Perimeter of Irregular Shapes 📏

Welcome to the world of perimeters! 🎯 In this topic, we'll learn how to find the perimeter of irregular shapes. This is an important skill that helps us understand the boundaries of different shapes. Let's get started! 🚀

## What is Perimeter? 🤔

Perimeter is the total distance around a shape. It's like walking around the edge of a shape and measuring how far you've gone.

### Understanding Perimeter
- Perimeter is measured in units (cm, m, etc.)
- It's the sum of all side lengths
- Every shape has a perimeter

## Finding Perimeter of Irregular Shapes 📐

### Step 1: Identify All Sides
1. Look at the shape carefully
2. Find all the sides
3. Label them if needed

### Step 2: Measure Each Side
- Use a ruler to measure each side
- Write down the measurements
- Be careful with units

### Step 3: Add All Sides
- Add up all the measurements
- Include all sides
- Don't miss any sides

## Examples and Practice 💡

### Example 1: L-Shaped Figure
- Side 1: 3 cm
- Side 2: 2 cm
- Side 3: 4 cm
- Side 4: 1 cm
- Side 5: 2 cm
- Side 6: 2 cm
- Perimeter = 3 + 2 + 4 + 1 + 2 + 2 = 14 cm

### Example 2: T-Shaped Figure
- Side 1: 5 cm
- Side 2: 2 cm
- Side 3: 3 cm
- Side 4: 2 cm
- Side 5: 2 cm
- Side 6: 2 cm
- Perimeter = 5 + 2 + 3 + 2 + 2 + 2 = 16 cm

### Example 3: Complex Shape
- Add all side lengths
- Include every side
- Double-check your addition

## Real-Life Applications 🌍

### In Fencing 🏡
- Calculating fence length
- Planning garden boundaries
- Measuring property lines

### In Sports 🏀
- Measuring running tracks
- Planning field boundaries
- Setting up courts

### In Construction 🏗️
- Planning building perimeters
- Measuring property boundaries
- Calculating material needs

## Common Mistakes to Avoid ❌

1. **Missing Sides**
   - Count all sides
   - Don't skip any
   - Double-check your count

2. **Incorrect Units**
   - Use consistent units
   - Don't mix cm and m
   - Include units in answer

3. **Addition Errors**
   - Add carefully
   - Check your work
   - Use a calculator if needed

## Tips for Success 🎯

1. **Draw the Shape**
   - Visualize the shape
   - Label all sides
   - Make it clear

2. **Measure Carefully**
   - Use a ruler
   - Be precise
   - Record measurements

3. **Check Your Work**
   - Add twice
   - Verify units
   - Make sure nothing is missed

## Sample Questions and Solutions 💡

1. **Question**: Find the perimeter of a shape with sides: 4 cm, 3 cm, 5 cm, 2 cm.
   **Solution**: 4 + 3 + 5 + 2 = 14 cm

2. **Question**: A shape has sides: 6 cm, 4 cm, 3 cm, 2 cm, 5 cm. What is its perimeter?
   **Solution**: 6 + 4 + 3 + 2 + 5 = 20 cm

3. **Question**: Find the perimeter of an L-shape with sides: 5 cm, 3 cm, 2 cm, 4 cm, 1 cm, 3 cm.
   **Solution**: 5 + 3 + 2 + 4 + 1 + 3 = 18 cm

## Summary ✨

In this topic, we learned:
- What perimeter is
- How to find perimeter of irregular shapes
- How to measure and add sides
- Real-life applications
- Common mistakes to avoid
- Tips for success

Remember, practice makes perfect! The more you work with perimeters, the better you'll get at calculating them.

### Additional Practice Questions 🏋️‍♀️

1. Find the perimeter of a shape with sides: 7 cm, 4 cm, 6 cm, 3 cm.
2. Calculate the perimeter of a T-shape with sides: 8 cm, 3 cm, 4 cm, 3 cm, 2 cm, 2 cm.
3. A shape has sides: 5 cm, 4 cm, 3 cm, 2 cm, 4 cm. What is its perimeter?
4. Draw an irregular shape and find its perimeter by measuring all sides.
`,
    quiz: {
        questions: [
            ...easyQuestions,
            ...mediumQuestions
        ]
    }
}; 