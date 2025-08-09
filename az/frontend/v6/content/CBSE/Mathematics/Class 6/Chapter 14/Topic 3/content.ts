// Topic 3: Perpendicular bisectors
// content.ts will be created here for the topic.

import { QuizQuestion, TopicQuiz, TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic3Content: TopicContent = {
    id: 'cl6_ch14_t3',
    topicNumber: 3,
    topicName: "Perpendicular Bisectors",
    duration: 45,
    description: "Learn how to construct perpendicular bisectors of line segments and understand their properties and applications",
    explanation: `
# Perpendicular Bisectors 📐

Welcome to the world of perpendicular bisectors! 🌟 In this topic, we'll learn how to construct perpendicular bisectors of line segments and understand their important properties. Let's get started! 🚀

## Understanding Perpendicular Bisectors 📏

A perpendicular bisector is a line that:
1. Divides a line segment into two equal parts (bisects it)
2. Makes a right angle (90°) with the line segment
3. Passes through the midpoint of the segment

## Tools Required 🛠️
- Compass
- Ruler
- Pencil
- Sharpener
- Eraser

## Step-by-Step Construction 📝

### Step 1: Draw the Line Segment
1. Use a ruler to draw a line segment AB
2. Make sure the segment is clear and straight
3. Mark points A and B clearly

### Step 2: Find the Midpoint
1. Open the compass more than half of AB
2. Place the compass at point A
3. Draw arcs above and below the line
4. Without changing the compass width, place it at point B
5. Draw arcs that intersect the previous arcs
6. The intersection points are equidistant from A and B

### Step 3: Draw the Perpendicular Bisector
1. Use a ruler to join the intersection points
2. This line is the perpendicular bisector
3. It should pass through the midpoint of AB
4. It should make a 90° angle with AB

## Properties of Perpendicular Bisectors ✨

1. **Equidistant Property** 📏
   - Every point on the perpendicular bisector is equidistant from both endpoints
   - This means PA = PB for any point P on the bisector

2. **Midpoint Property** 📍
   - The perpendicular bisector always passes through the midpoint
   - It divides the segment into two equal parts

3. **Right Angle Property** 📐
   - The bisector makes a 90° angle with the original segment
   - This is true at every point of intersection

## Practical Applications 🌍

1. **Finding Midpoints** 📍
   - Used in geometry to find exact midpoints
   - Helpful in dividing lines into equal parts

2. **Construction of Other Shapes** 🔷
   - Essential for constructing triangles
   - Used in making regular polygons
   - Important for creating symmetrical designs

3. **Real-World Uses** 🏗️
   - Architecture and design
   - Engineering drawings
   - Art and pattern making

## Common Mistakes to Avoid ❌

1. **Incorrect Compass Width** 📏
   - Using less than half the length of AB
   - Results in arcs that don't intersect
   - Solution: Always use more than half the length

2. **Slipping Compass** 🚫
   - Not keeping the compass steady
   - Causes inaccurate arcs
   - Solution: Hold the compass firmly

3. **Uneven Pressure** ⚠️
   - Pressing too hard or too lightly
   - Affects the quality of the construction
   - Solution: Maintain consistent pressure

## Practice Problems 🏋️‍♀️

### Problem 1: Basic Construction
Draw a line segment of 6 cm and construct its perpendicular bisector.

Solution:
1. Draw AB = 6 cm
2. Open compass to >3 cm
3. Draw arcs from A and B
4. Join intersection points

### Problem 2: Verification
How can you verify that your construction is correct?

Solution:
1. Measure both halves of AB
2. Check if they are equal
3. Use a protractor to verify 90° angle
4. Ensure the bisector passes through the midpoint

### Problem 3: Application
Construct a perpendicular bisector of a 5 cm line segment and use it to draw an isosceles triangle.

Solution:
1. Draw AB = 5 cm
2. Construct perpendicular bisector
3. Choose a point P on the bisector
4. Join PA and PB to form the triangle

## Step-by-Step Examples 📝

### Example 1: Finding the Midpoint
1. Draw a line segment of 8 cm
2. Construct its perpendicular bisector
3. The point where the bisector meets the segment is the midpoint
4. Verify by measuring both halves

### Example 2: Creating Symmetry
1. Draw a line segment
2. Construct its perpendicular bisector
3. Notice how the bisector creates a line of symmetry
4. Any point on one side has a mirror image on the other

## Summary ✨

In this topic, we learned:
- What a perpendicular bisector is
- How to construct it using a compass and ruler
- Important properties of perpendicular bisectors
- Practical applications in geometry
- Common mistakes to avoid
- How to verify our constructions

### Additional Examples and Sample Questions:

1. **Example**: Draw a line segment of 7 cm and construct its perpendicular bisector. Verify that it divides the segment into two equal parts.

2. **Example**: Construct a perpendicular bisector of a 4 cm line segment and use it to draw an equilateral triangle.

3. **Question**: Why must the compass be opened more than half the length of the segment when constructing a perpendicular bisector?

4. **Question**: How can you use a perpendicular bisector to find the center of a circle if you only have a part of its circumference?
`,
    quiz: {
        questions: [
            ...easyQuestions,
            ...mediumQuestions
        ]
    }
};
