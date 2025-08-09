import { QuizQuestion, TopicQuiz, TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic1Content: TopicContent = {
    id: 'cl5_ch2_t1',
    topicNumber: 1,
    topicName: "Identifying 2D Shapes",
    duration: 45,
    description: "Learning about different types of 2D shapes including triangles and quadrilaterals",
    explanation: `
# Identifying 2D Shapes 📐

Welcome to the wonderful world of shapes! 🎨 In this topic, we'll explore different types of 2D (two-dimensional) shapes, focusing on triangles and quadrilaterals. Let's discover the fascinating properties of these shapes! 🚀

## What are 2D Shapes? 🤔

2D shapes are flat shapes that have only two dimensions: length and width. They don't have any thickness or depth. Let's learn about some important 2D shapes:

### Triangles 🔺
Triangles are shapes with three sides and three angles. There are different types of triangles:

1. **By Sides**:
   - **Equilateral Triangle**: All sides equal, all angles 60°
   - **Isosceles Triangle**: Two sides equal, two angles equal
   - **Scalene Triangle**: All sides different, all angles different

2. **By Angles**:
   - **Acute Triangle**: All angles less than 90°
   - **Right Triangle**: One angle exactly 90°
   - **Obtuse Triangle**: One angle more than 90°

### Quadrilaterals ⬜
Quadrilaterals are shapes with four sides and four angles. Common quadrilaterals include:

1. **Square**:
   - All sides equal
   - All angles 90°
   - Opposite sides parallel

2. **Rectangle**:
   - Opposite sides equal
   - All angles 90°
   - Opposite sides parallel

3. **Rhombus**:
   - All sides equal
   - Opposite angles equal
   - Opposite sides parallel

4. **Parallelogram**:
   - Opposite sides equal and parallel
   - Opposite angles equal

5. **Trapezium**:
   - One pair of parallel sides
   - Other sides not parallel

## Properties of 2D Shapes 🔍

### Common Properties
- **Sides**: Straight lines that form the shape
- **Vertices**: Points where sides meet (corners)
- **Angles**: Space between two sides
- **Diagonals**: Lines connecting non-adjacent vertices

### Special Properties
- **Symmetry**: Some shapes can be folded into equal halves
- **Parallel Sides**: Some shapes have sides that never meet
- **Equal Sides**: Some shapes have sides of equal length
- **Equal Angles**: Some shapes have angles of equal measure

## Real-Life Examples 🌍

### Triangles in Real Life
- Pizza slices 🍕
- Traffic signs 🚸
- Roof tops 🏠
- Sandwich halves 🥪

### Quadrilaterals in Real Life
- Windows and doors 🪟
- Books and notebooks 📚
- TV screens 📺
- Floor tiles 🏗️

## Drawing and Identifying Shapes ✏️

### How to Draw Triangles
1. Start with three points
2. Connect the points with straight lines
3. Make sure the lines meet at the vertices

### How to Draw Quadrilaterals
1. Start with four points
2. Connect the points with straight lines
3. Ensure the shape closes properly

## Sample Questions and Solutions 💡

1. **Question**: How many sides does a triangle have?
   **Solution**: A triangle has 3 sides.

2. **Question**: What is the difference between a square and a rectangle?
   **Solution**: A square has all sides equal, while a rectangle has only opposite sides equal.

3. **Question**: How many vertices does a quadrilateral have?
   **Solution**: A quadrilateral has 4 vertices.

## Tips for Identifying Shapes 🎯

1. Count the number of sides
2. Measure the angles
3. Check if sides are equal
4. Look for parallel sides
5. Identify symmetry

## Summary ✨

In this topic, we learned:
- What 2D shapes are
- Different types of triangles
- Various quadrilaterals
- Properties of shapes
- Real-life examples
- How to identify shapes

Remember, shapes are all around us! Practice identifying them in your daily life.

### Additional Practice Questions 🏋️‍♀️

1. Name three objects in your classroom that are shaped like rectangles.
2. Draw an equilateral triangle and label its sides and angles.
3. How many pairs of parallel sides does a rectangle have?
4. What is the difference between a rhombus and a square?
`,
    quiz: {
        questions: [
            ...easyQuestions,
            ...mediumQuestions
        ]
    }
}; 