import { QuizQuestion, TopicQuiz, TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic3Content: TopicContent = {
    id: 'cl5_ch3_t3',
    topicNumber: 3,
    topicName: "Area of Irregular Shapes",
    duration: 45,
    description: "Learning how to calculate the area of irregular shapes by breaking them into regular shapes",
    explanation: `
# Area of Irregular Shapes 📏

Welcome to the world of area calculation! 🎯 In this topic, we'll learn how to find the area of irregular shapes by breaking them down into regular shapes we know. This is a clever way to solve complex area problems. Let's get started! 🚀

## What is Area? 🤔

Area is the amount of space inside a shape. We measure area in square units, like square centimeters (cm²) or square meters (m²).

### Understanding Area
- Area is measured in square units
- It tells us how much space a shape covers
- Every shape has an area

## Breaking Down Irregular Shapes 📐

### Step 1: Identify Regular Shapes
1. Look at the irregular shape
2. Find regular shapes within it
3. Common regular shapes:
   - Rectangles
   - Squares
   - Triangles

### Step 2: Calculate Areas
- Find area of each regular shape
- Use appropriate formulas
- Write down the areas

### Step 3: Add or Subtract
- Add areas if shapes are separate
- Subtract areas if there are holes
- Get the final area

## Examples and Practice 💡

### Example 1: L-Shaped Figure
- Break into 2 rectangles
- Rectangle 1: 4 cm × 3 cm = 12 cm²
- Rectangle 2: 2 cm × 2 cm = 4 cm²
- Total area = 12 + 4 = 16 cm²

### Example 2: T-Shaped Figure
- Break into 2 rectangles
- Rectangle 1: 5 cm × 2 cm = 10 cm²
- Rectangle 2: 2 cm × 3 cm = 6 cm²
- Total area = 10 + 6 = 16 cm²

### Example 3: Complex Shape
- Break into multiple shapes
- Calculate each area
- Add or subtract as needed

## Real-Life Applications 🌍

### In Home Design 🏠
- Calculating floor space
- Planning room layouts
- Measuring carpet area

### In Art and Design 🎨
- Planning drawings
- Creating patterns
- Designing layouts

### In Construction 🏗️
- Measuring land area
- Planning building spaces
- Calculating material needs

## Common Mistakes to Avoid ❌

1. **Missing Parts**
   - Don't forget any parts
   - Check all sections
   - Double-count carefully

2. **Incorrect Units**
   - Use square units
   - Don't mix units
   - Include units in answer

3. **Calculation Errors**
   - Check each calculation
   - Verify formulas
   - Use a calculator if needed

## Tips for Success 🎯

1. **Draw the Shape**
   - Visualize the shape
   - Break it down clearly
   - Label measurements

2. **Use Formulas**
   - Rectangle: length × width
   - Square: side × side
   - Triangle: ½ × base × height

3. **Check Your Work**
   - Calculate twice
   - Verify units
   - Make sure nothing is missed

## Sample Questions and Solutions 💡

1. **Question**: Find the area of an L-shape with rectangles 4 cm × 3 cm and 2 cm × 2 cm.
   **Solution**: (4 × 3) + (2 × 2) = 12 + 4 = 16 cm²

2. **Question**: A shape has a rectangle 6 cm × 4 cm and a square 2 cm × 2 cm. What is its area?
   **Solution**: (6 × 4) + (2 × 2) = 24 + 4 = 28 cm²

3. **Question**: Find the area of a shape with a rectangle 5 cm × 3 cm and a triangle with base 3 cm and height 2 cm.
   **Solution**: (5 × 3) + (½ × 3 × 2) = 15 + 3 = 18 cm²

## Summary ✨

In this topic, we learned:
- What area is
- How to break down irregular shapes
- How to calculate areas of regular shapes
- Real-life applications
- Common mistakes to avoid
- Tips for success

Remember, practice makes perfect! The more you work with areas, the better you'll get at calculating them.

### Additional Practice Questions 🏋️‍♀️

1. Find the area of a shape with a rectangle 7 cm × 4 cm and a square 3 cm × 3 cm.
2. Calculate the area of a T-shape with rectangles 8 cm × 3 cm and 4 cm × 2 cm.
3. A shape has a rectangle 5 cm × 4 cm and a triangle with base 4 cm and height 3 cm. What is its area?
4. Draw an irregular shape and find its area by breaking it into regular shapes.
`,
    quiz: {
        questions: [
            ...easyQuestions,
            ...mediumQuestions
        ]
    }
}; 