import { QuizQuestion, TopicQuiz, TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic1Content: TopicContent = {
    id: 'cl5_ch3_t1',
    topicNumber: 1,
    topicName: "Calculating Area by Counting Squares",
    duration: 45,
    description: "Learning how to calculate area by counting unit squares in a shape",
    explanation: `
# Calculating Area by Counting Squares 📏

Welcome to the world of area calculation! 🎯 In this topic, we'll learn how to find the area of shapes by counting squares. This is a fun and practical way to understand how much space a shape covers. Let's get started! 🚀

## What is Area? 🤔

Area is the amount of space inside a shape. We measure area in square units, like square centimeters (cm²) or square meters (m²).

### Understanding Unit Squares
- A unit square is a square with sides of 1 unit
- It has an area of 1 square unit
- We can use these squares to measure area

## Counting Squares Method 📊

### Step 1: Draw the Shape
1. Draw the shape on grid paper
2. Make sure the shape aligns with the grid lines
3. Count the number of complete squares inside

### Step 2: Count Complete Squares
- Count all full squares inside the shape
- Write down the number
- Example: 8 complete squares

### Step 3: Count Partial Squares
- For partial squares, estimate how much of each square is covered
- Add up the partial squares
- Example: 2 half squares = 1 full square

### Step 4: Calculate Total Area
- Add complete squares and partial squares
- Write the answer in square units
- Example: 8 + 1 = 9 square units

## Examples and Practice 💡

### Example 1: Simple Rectangle
- 4 squares across
- 3 squares down
- Total area = 4 × 3 = 12 square units

### Example 2: L-Shaped Figure
- Count complete squares: 6
- Count partial squares: 2 halves = 1
- Total area = 6 + 1 = 7 square units

### Example 3: Complex Shape
- Count complete squares: 10
- Count partial squares: 4 quarters = 1
- Total area = 10 + 1 = 11 square units

## Real-Life Applications 🌍

### In Home Design 🏠
- Measuring floor space
- Planning room layouts
- Calculating carpet area

### In Art and Design 🎨
- Planning drawings
- Creating patterns
- Designing layouts

### In Sports 🏀
- Measuring court areas
- Planning field layouts
- Calculating playing spaces

## Common Mistakes to Avoid ❌

1. **Missing Partial Squares**
   - Don't forget to count partial squares
   - Estimate carefully
   - Add them up correctly

2. **Counting Lines Instead of Squares**
   - Count the spaces, not the lines
   - Remember each square is 1 unit
   - Double-check your counting

3. **Incorrect Units**
   - Always include "square units"
   - Use the correct unit (cm², m², etc.)
   - Don't forget the square symbol

## Tips for Success 🎯

1. **Use Grid Paper**
   - Draw shapes on grid paper
   - Make counting easier
   - Keep track of squares

2. **Count Systematically**
   - Count row by row
   - Use a pencil to mark counted squares
   - Double-check your work

3. **Practice Regularly**
   - Try different shapes
   - Start with simple shapes
   - Gradually try more complex ones

## Sample Questions and Solutions 💡

1. **Question**: Find the area of a shape with 5 complete squares and 2 half squares.
   **Solution**: 5 + (2 × ½) = 6 square units

2. **Question**: A rectangle covers 4 squares across and 3 squares down. What is its area?
   **Solution**: 4 × 3 = 12 square units

3. **Question**: A shape has 8 complete squares and 4 quarter squares. What is its area?
   **Solution**: 8 + (4 × ¼) = 9 square units

## Summary ✨

In this topic, we learned:
- What area is
- How to count squares to find area
- How to handle partial squares
- Real-life applications
- Common mistakes to avoid
- Tips for success

Remember, practice makes perfect! The more you count squares, the better you'll get at finding areas.

### Additional Practice Questions 🏋️‍♀️

1. Draw a shape with 6 complete squares and find its area.
2. Count the squares in a 5×3 rectangle and calculate its area.
3. Find the area of a shape with:
   - 7 complete squares
   - 3 half squares
   - 2 quarter squares
4. Draw an L-shaped figure and count its area using squares.
`,
    quiz: {
        questions: [
            ...easyQuestions,
            ...mediumQuestions
        ]
    }
}; 