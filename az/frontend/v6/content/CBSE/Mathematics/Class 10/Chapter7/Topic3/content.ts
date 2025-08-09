import { QuizQuestion, TopicQuiz, TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic3Content: TopicContent = {
  id: 'cl10_ch7_t3',
  topicNumber: 3,
  topicName: "Area of triangle using coordinates",
  duration: 45,
  description: "Understanding how to calculate the area of a triangle using the coordinates of its vertices in the Cartesian plane, with applications and special cases.",
  explanation: `
# Area of Triangle Using Coordinates 📐

## Introduction 🌟
When working in coordinate geometry, we often need to find the area of shapes without measuring them directly. One of the most useful applications is finding the area of a triangle when we know the coordinates of its three vertices. In this topic, we'll explore a powerful formula that lets us calculate this area efficiently and accurately. This method is particularly valuable because it works for any triangle in the coordinate plane, regardless of its orientation or size. Let's dive in! 📝

## The Area Formula 📏

The area of a triangle with vertices at points (x₁, y₁), (x₂, y₂), and (x₃, y₃) can be calculated using the formula:

**Area = ½|x₁(y₂ - y₃) + x₂(y₃ - y₁) + x₃(y₁ - y₂)|**

Where |...| represents the absolute value.

This formula is based on the concept of determinants from matrix algebra, but you don't need to understand determinants to use it. The formula works by calculating the area of the triangle using the cross-product of vectors.

### Why We Need the Absolute Value ❓
The formula inside the absolute value symbols can give a positive or negative result, depending on the order of the vertices. The area of a shape is always positive, so we take the absolute value of the result.

## Step-by-Step Method 📋

To find the area of a triangle using coordinates:

1. Identify the coordinates of the three vertices: (x₁, y₁), (x₂, y₂), and (x₃, y₃)
2. Substitute these values into the formula: ½|x₁(y₂ - y₃) + x₂(y₃ - y₁) + x₃(y₁ - y₂)|
3. Perform the calculations inside the absolute value symbols
4. Take the absolute value of the result
5. Multiply by ½ to get the area

## Example 1: Basic Triangle 🔍

Let's find the area of a triangle with vertices at A(0, 0), B(4, 0), and C(0, 3).

1. We have (x₁, y₁) = (0, 0), (x₂, y₂) = (4, 0), and (x₃, y₃) = (0, 3)
2. Area = ½|0(0 - 3) + 4(3 - 0) + 0(0 - 0)|
3. Area = ½|0 + 12 + 0|
4. Area = ½(12)
5. Area = 6 square units

We can verify this result using the standard formula for the area of a triangle (½ × base × height). The base is 4 units and the height is 3 units, so the area is ½ × 4 × 3 = 6 square units.

## Example 2: Triangle with Negative Coordinates 🔍

Find the area of a triangle with vertices at A(-1, 2), B(3, -2), and C(5, 4).

1. We have (x₁, y₁) = (-1, 2), (x₂, y₂) = (3, -2), and (x₃, y₃) = (5, 4)
2. Area = ½|(-1)(-2 - 4) + 3(4 - 2) + 5(2 - (-2))|
3. Area = ½|(-1)(-6) + 3(2) + 5(4)|
4. Area = ½|6 + 6 + 20|
5. Area = ½(32)
6. Area = 16 square units

## Special Cases and Properties 🧩

### 1. Collinear Points
If the three vertices of a triangle are collinear (lie on the same straight line), the area of the triangle is zero. This can be used to check if three points are collinear.

For example, if the area of a triangle with vertices (x₁, y₁), (x₂, y₂), and (x₃, y₃) is zero, then the points are collinear.

### 2. Alternative Formula
An alternative form of the area formula is:

**Area = ½|x₁(y₂ - y₃) + x₂(y₃ - y₁) + x₃(y₁ - y₂)|**

Which can also be written as:

**Area = ½|(x₁y₂ - x₁y₃) + (x₂y₃ - x₂y₁) + (x₃y₁ - x₃y₂)|**

Or in a determinant form:

**Area = ½|x₁(y₂ - y₃) - y₁(x₂ - x₃) + (x₂y₃ - x₃y₂)|**

### 3. Relation to Shoelace Formula
The formula we've discussed is closely related to the Shoelace formula (also known as the Surveyor's formula), which is used to calculate the area of any polygon based on its vertices.

## Applications of Area Formula 🌐

### 1. Checking Collinearity
Three points (x₁, y₁), (x₂, y₂), and (x₃, y₃) are collinear if and only if the area of the triangle formed by them is zero:

x₁(y₂ - y₃) + x₂(y₃ - y₁) + x₃(y₁ - y₂) = 0

### 2. Finding Points with Specific Area Constraints
We can use the area formula to find points that form triangles with a given area. This is useful in optimization problems and in geometric constructions.

### 3. Locus of Points
The set of all points P(x, y) such that the area of the triangle formed by P and two fixed points is constant creates a specific locus. This locus is typically a pair of parallel straight lines.

## Example 3: Checking Collinearity 🔍

Are the points A(1, 3), B(4, 9), and C(7, 15) collinear?

1. We use the area formula: ½|1(9 - 15) + 4(15 - 3) + 7(3 - 9)|
2. Simplify: ½|1(-6) + 4(12) + 7(-6)|
3. Calculate: ½|-6 + 48 - 42|
4. Evaluate: ½|0| = 0

Since the area is zero, the three points are collinear.

## Example 4: Finding a Point for a Given Area 🔍

Find the point (x, 5) on the line y = 5 such that the area of the triangle formed with the points (0, 0) and (3, 0) is 7.5 square units.

1. Let the point be P(x, 5)
2. The vertices of the triangle are (0, 0), (3, 0), and (x, 5)
3. Using the area formula: ½|0(0 - 5) + 3(5 - 0) + x(0 - 0)| = 7.5
4. Simplify: ½|0 + 15 + 0| = 7.5
5. Solve: ½(15) = 7.5, which is true

This means any point on the line y = 5 will create a triangle with an area of 7.5 square units when combined with the points (0, 0) and (3, 0).

## Practical Problem Solving 🧮

### Problem 1: Finding the Area of a Plot of Land
A triangular plot of land has boundary markers at coordinates (0, 0), (50, 0), and (20, 30) in a metric coordinate system where each unit represents 1 meter. What is the area of the plot?

**Solution:**
Using the area formula: 
Area = ½|0(0 - 30) + 50(30 - 0) + 20(0 - 0)| 
     = ½|0 + 1500 + 0| 
     = 750 square meters

### Problem 2: Finding Points that Form a Triangle with a Given Area
Find all points P(x, 4) such that the triangle formed by P, A(1, 1), and B(5, 2) has an area of 6 square units.

**Solution:**
Using the area formula: ½|1(2 - 4) + 5(4 - 1) + x(1 - 2)| = 6
Simplify: ½|1(-2) + 5(3) + x(-1)| = 6
Calculate: ½|-2 + 15 - x| = 6
Therefore: |-2 + 15 - x| = 12
This gives us: -2 + 15 - x = 12 or -2 + 15 - x = -12
Solving: x = 1 or x = 29

So the points P(1, 4) and P(29, 4) both form triangles with A(1, 1) and B(5, 2) that have an area of 6 square units.

## Important Tips and Common Mistakes 🚨

1. **Sign Errors**: Be careful with the signs when calculating the terms x₁(y₂ - y₃), x₂(y₃ - y₁), and x₃(y₁ - y₂).

2. **Forgetting the Factor of ½**: Remember to multiply by ½ at the end.

3. **Skipping the Absolute Value**: The result inside the absolute value symbols can be negative, but the area must be positive, so don't forget the absolute value.

4. **Order of Vertices**: The formula works regardless of the order in which you take the vertices, but you must maintain consistency within the formula.

5. **Units**: Remember to square your units for area (e.g., if coordinates are in meters, the area is in square meters).

## Summary ✨

In this topic, we've learned:

1. The formula for finding the area of a triangle using the coordinates of its vertices: 
   Area = ½|x₁(y₂ - y₃) + x₂(y₃ - y₁) + x₃(y₁ - y₂)|

2. How to apply this formula step by step to find the area of any triangle in the coordinate plane.

3. Special cases like collinear points where the area is zero.

4. Applications of the area formula in checking collinearity and finding points with specific area constraints.

5. Practical examples showing how to use the formula to solve real-world problems.

The coordinate method for finding the area of a triangle is an elegant application of coordinate geometry. It provides a straightforward approach to calculating areas without needing to find the lengths of sides or heights of the triangle. This method is particularly useful in fields like computer graphics, computational geometry, and geographic information systems.

### Practice Questions
1. Find the area of the triangle with vertices (2, 3), (5, 1), and (4, 7).
2. Check if the points (1, 1), (3, 5), and (5, 9) are collinear.
3. Find the coordinates of the point P on the x-axis such that the area of the triangle formed by P, (0, 5), and (5, 0) is 20 square units.
4. What is the area of the triangle formed by the origin and the points (4, 0) and (0, 7)?
  `,
  quiz: {
    questions: [
      ...easyQuestions,
      ...mediumQuestions
    ]
  }
};
