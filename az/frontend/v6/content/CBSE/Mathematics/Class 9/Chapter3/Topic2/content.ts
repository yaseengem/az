// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 9\Chapter3\Topic2\content.ts
import { TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic2Content: TopicContent = {
  id: 'cl9_ch3_t2',
  topicNumber: 2,
  topicName: "Cartesian System",
  duration: 70, // Estimated duration in minutes
  description: "Understanding plotting points, distance formula, section formula, and applications of coordinate geometry.",
  explanation: `
# The Cartesian System in Action 📊🔍

## Plotting Points on the Cartesian Plane 📍

Now that we understand the basics of the Cartesian coordinate system, let's explore how to use it to solve geometry problems. We'll learn to plot points accurately, find distances between points, locate special points on line segments, and apply these concepts.

### Plotting Points Technique 📌

When plotting points on graph paper or a coordinate grid:

1. **Find the Scale**: Identify how many units each square represents.
2. **Start at the Origin**: Always orient yourself from (0, 0).
3. **Count Carefully**: Move precisely along the grid lines.
4. **Double-Check**: Verify your plotting by counting the coordinates again.

#### Example of Plotting Multiple Points:

Let's plot points A(2, 3), B(-1, 4), C(-3, -2), and D(4, -1):

- For A(2, 3): Move 2 units right and 3 units up from origin.
- For B(-1, 4): Move 1 unit left and 4 units up from origin.
- For C(-3, -2): Move 3 units left and 2 units down from origin.
- For D(4, -1): Move 4 units right and 1 unit down from origin.

## The Distance Formula 📏

One of the most powerful aspects of coordinate geometry is the ability to find distances between points using algebra rather than measurement.

### Distance Between Two Points

For any two points P(x₁, y₁) and Q(x₂, y₂), the distance between them is:

**d = √[(x₂ - x₁)² + (y₂ - y₁)²]**

This formula is derived from the Pythagorean theorem and gives us the straight-line (shortest) distance.

#### Examples:

1. Find the distance between A(3, 4) and B(7, 9):
   d = √[(7 - 3)² + (9 - 4)²] = √[16 + 25] = √41 ≈ 6.40 units

2. Find the distance between P(-2, -3) and Q(1, 5):
   d = √[(1 - (-2))² + (5 - (-3))²] = √[9 + 64] = √73 ≈ 8.54 units

### Special Cases of the Distance Formula

1. **Distance from a Point to the Origin**:
   For a point P(x, y), the distance to the origin O(0, 0) is:
   d(P, O) = √(x² + y²)

2. **Distance from a Point to the x-axis**:
   For a point P(x, y), the distance to the x-axis is |y| (the absolute value of y)

3. **Distance from a Point to the y-axis**:
   For a point P(x, y), the distance to the y-axis is |x| (the absolute value of x)

## The Section Formula ✂️

The section formula helps us find the coordinates of a point that divides a line segment in a given ratio.

### Internal Division

If a point P(x, y) divides the line segment joining A(x₁, y₁) and B(x₂, y₂) internally in the ratio m:n, then:

x = (mx₂ + nx₁)/(m + n)
y = (my₂ + ny₁)/(m + n)

### Midpoint Formula

A special case of the section formula is when m = n = 1 (ratio 1:1), which gives us the midpoint:

x = (x₁ + x₂)/2
y = (y₁ + y₂)/2

#### Examples:

1. Find the midpoint of the line joining P(-2, 5) and Q(6, -3):
   x = (-2 + 6)/2 = 2
   y = (5 + (-3))/2 = 1
   So, the midpoint is (2, 1)

2. Find the point that divides the line segment from A(1, -2) to B(7, 4) in the ratio 2:3:
   x = (2×7 + 3×1)/(2 + 3) = (14 + 3)/5 = 17/5 = 3.4
   y = (2×4 + 3×(-2))/(2 + 3) = (8 - 6)/5 = 2/5 = 0.4
   So, the point is (3.4, 0.4)

### External Division

For external division in the ratio m:n (where P lies outside the segment AB), the formula becomes:

x = (mx₂ - nx₁)/(m - n)
y = (my₂ - ny₁)/(m - n)

Note that m ≠ n for external division to be defined.

## Area of a Triangle Using Coordinates 🔺

Another powerful application of coordinate geometry is finding the area of a triangle when the coordinates of its vertices are known.

### Formula for Area of Triangle

If the vertices of a triangle are A(x₁, y₁), B(x₂, y₂), and C(x₃, y₃), then:

Area = (1/2) × |x₁(y₂ - y₃) + x₂(y₃ - y₁) + x₃(y₁ - y₂)|

The vertical bars indicate that we take the absolute value of the expression.

#### Example:

Find the area of a triangle with vertices at A(1, 1), B(4, 5), and C(7, 2):

Area = (1/2) × |1(5 - 2) + 4(2 - 1) + 7(1 - 5)|
     = (1/2) × |1(3) + 4(1) + 7(-4)|
     = (1/2) × |3 + 4 - 28|
     = (1/2) × |-21|
     = (1/2) × 21
     = 10.5 square units

### Collinearity Using Area Method

Three points A, B, and C are collinear (lie on the same straight line) if and only if the area of triangle ABC is zero.

Using the area formula, we can check if:
|x₁(y₂ - y₃) + x₂(y₃ - y₁) + x₃(y₁ - y₂)| = 0

## Applications of Coordinate Geometry 🌐

### 1. Proving Geometric Properties

Coordinate geometry can be used to prove properties of geometric shapes:
- Parallelism and perpendicularity of lines
- Properties of quadrilaterals (square, rectangle, rhombus)
- Concurrency of lines (when three or more lines pass through the same point)

### 2. Navigation Systems

Modern GPS systems use coordinate geometry to:
- Calculate distances between locations
- Determine optimal routes
- Track movement and speed
- Provide accurate position information

### 3. Computer Graphics

Video games, animations, and design software use coordinate systems to:
- Render images and scenes
- Create 3D environments from 2D coordinates
- Calculate collisions and interactions
- Transform and rotate objects

### 4. Engineering and Architecture

Coordinate geometry is essential in:
- Building design and construction
- Creating technical drawings and blueprints
- Precision manufacturing
- Surveying and mapping land

## Problem-Solving Strategies 🧠

When working with coordinate geometry problems:

1. **Draw and label**: Always sketch the situation when possible.
2. **Choose convenient coordinates**: Often, placing a shape at the origin or with sides along the axes simplifies calculations.
3. **Use the appropriate formula**: Select the distance formula, section formula, or area formula as needed.
4. **Verify reasonableness**: Check if your answer makes geometric sense.

## Sample Problems

### Problem 1: Finding the Fourth Vertex

Three vertices of a rectangle are A(1, 1), B(5, 1), and C(5, 4). Find the coordinates of the fourth vertex D.

**Solution**: 
Since the rectangle has sides parallel to the axes, the fourth vertex D will have the same x-coordinate as C (which is 5) and the same y-coordinate as A (which is 1).

Wait, that's incorrect! Let me recalculate:
The fourth vertex D will have the same x-coordinate as A (which is 1) and the same y-coordinate as C (which is 4). 
Therefore, D(1, 4).

We can verify this by checking that all angles are 90° and opposite sides are equal.

### Problem 2: Checking if Points Form a Square

Determine if the points A(3, 0), B(6, 4), C(2, 7), and D(-1, 3) form a square.

**Solution**:
For these points to form a square, all sides must be equal in length and all angles must be 90°.

Step 1: Calculate the distances between consecutive points:
- d(A, B) = √[(6-3)² + (4-0)²] = √[9 + 16] = √25 = 5
- d(B, C) = √[(2-6)² + (7-4)²] = √[16 + 9] = √25 = 5
- d(C, D) = √[(-1-2)² + (3-7)²] = √[9 + 16] = √25 = 5
- d(D, A) = √[(3-(-1))² + (0-3)²] = √[16 + 9] = √25 = 5

Step 2: Calculate the diagonals:
- d(A, C) = √[(2-3)² + (7-0)²] = √[1 + 49] = √50 = 5√2
- d(B, D) = √[(-1-6)² + (3-4)²] = √[49 + 1] = √50 = 5√2

Since all sides are equal (5 units) and both diagonals are equal (5√2 units), the points form a square.

## Summary

The Cartesian coordinate system provides a powerful framework for solving geometric problems using algebraic methods. Key concepts include:

1. Plotting points accurately on the coordinate plane
2. Finding distances between points using the distance formula
3. Locating points that divide line segments in given ratios using the section formula
4. Calculating areas of triangles using the coordinates of vertices
5. Checking for collinearity of points
6. Applying coordinate geometry to real-world situations

By mastering these concepts, you'll be able to tackle a wide range of geometric problems with precision and confidence. Always remember to draw diagrams, choose convenient coordinates, and verify your answers by checking if they make geometric sense. 🌟
`,
  quiz: {
    questions: [
      ...easyQuestions,
      ...mediumQuestions
    ]
  }
};
