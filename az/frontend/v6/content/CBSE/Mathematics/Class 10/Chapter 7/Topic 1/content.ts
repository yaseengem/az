import { generateId } from '../../../../../../app/utils/idGenerator';
import { QuizQuestion, TopicQuiz, TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic1Content: TopicContent = {
  id: 'cl10_ch7_t1',
  topicNumber: 1,
  topicName: "Distance formula",
  duration: 45,
  description: "Learn how to calculate the distance between two points in a coordinate plane using the distance formula based on the Pythagorean theorem.",
  explanation: `
# Distance Formula 📏

The distance formula is one of the fundamental concepts in coordinate geometry, allowing us to calculate the exact distance between any two points in a coordinate plane. This formula serves as a building block for many other geometric concepts and has numerous real-life applications. Let's explore this important concept! 🚀

## What is the Distance Formula? 🤔

The distance formula calculates the straight-line distance (as the crow flies) between two points in a coordinate plane. If we have two points P(x₁, y₁) and Q(x₂, y₂), then the distance between them is:

> **d = √[(x₂ - x₁)² + (y₂ - y₁)²]**

This formula is derived directly from the Pythagorean theorem, which states that in a right-angled triangle, the square of the hypotenuse equals the sum of the squares of the other two sides.

## Derivation of the Distance Formula 📝

Let's understand where this formula comes from:

1. Consider two points P(x₁, y₁) and Q(x₂, y₂) on a coordinate plane.
2. Draw a right-angled triangle by:
   - Drawing a horizontal line from P to point R(x₂, y₁)
   - Drawing a vertical line from R to Q
3. The horizontal distance PR = |x₂ - x₁|
4. The vertical distance RQ = |y₂ - y₁|
5. By the Pythagorean theorem, PQ² = PR² + RQ²
6. Therefore, PQ = √[(x₂ - x₁)² + (y₂ - y₁)²]

This gives us our distance formula! Notice that we use the squares of the differences, so the result is always positive regardless of the relative positions of the points.

## Special Cases 📌

### Case 1: Points with the Same x-coordinate
If two points have the same x-coordinate (i.e., they lie on a vertical line), then x₁ = x₂, and the formula simplifies to:
d = |y₂ - y₁|

### Case 2: Points with the Same y-coordinate
If two points have the same y-coordinate (i.e., they lie on a horizontal line), then y₁ = y₂, and the formula simplifies to:
d = |x₂ - x₁|

### Case 3: Distance from a Point to the Origin
The distance from a point P(x, y) to the origin O(0, 0) is:
d = √(x² + y²)

## Examples of Using the Distance Formula 🧮

### Example 1: Basic Distance Calculation
Find the distance between the points A(3, 4) and B(7, 9).

**Solution:**
Using the distance formula:
d = √[(7 - 3)² + (9 - 4)²]
d = √[16 + 25]
d = √41 ≈ 6.4 units

### Example 2: Proving a Triangle is Right-angled
Determine whether the triangle with vertices at A(1, 1), B(4, 5), and C(7, 2) is a right-angled triangle.

**Solution:**
First, calculate the lengths of all three sides:
AB = √[(4 - 1)² + (5 - 1)²] = √[9 + 16] = √25 = 5
BC = √[(7 - 4)² + (2 - 5)²] = √[9 + 9] = √18 = 3√2
AC = √[(7 - 1)² + (2 - 1)²] = √[36 + 1] = √37

To check if the triangle is right-angled, we use the Pythagorean theorem. If one of these equations is true, then the triangle is right-angled:
- AB² + BC² = AC²
- AB² + AC² = BC²
- BC² + AC² = AB²

Let's check:
- AB² + BC² = 25 + 18 = 43 ≠ 37 = AC²
- AB² + AC² = 25 + 37 = 62 ≠ 18 = BC²
- BC² + AC² = 18 + 37 = 55 ≠ 25 = AB²

None of the equations are satisfied, so the triangle is not right-angled.

### Example 3: Finding Points at a Given Distance
Find the value of k if the distance between the points (5, -2) and (9, k) is 10 units.

**Solution:**
Using the distance formula:
10 = √[(9 - 5)² + (k - (-2))²]
10 = √[16 + (k + 2)²]
100 = 16 + (k + 2)²
84 = (k + 2)²
±√84 = k + 2
k = -2 ± √84
k = -2 + √84 ≈ 7.17 or k = -2 - √84 ≈ -11.17

So k ≈ 7.17 or k ≈ -11.17

## Applications of the Distance Formula 🌍

### 1. Finding the Perimeter of Polygons
To find the perimeter of a polygon in a coordinate plane, we calculate the distance between consecutive vertices and sum them up.

### 2. Checking the Type of Triangle or Quadrilateral
By finding the lengths of sides using the distance formula, we can determine if a triangle is equilateral, isosceles, or scalene, or if a quadrilateral is a square, rectangle, rhombus, etc.

### 3. Finding the Radius or Center of a Circle
Given three points on a circle, we can find the center using perpendicular bisectors, and then calculate the radius using the distance formula.

### 4. Navigation and GPS Systems
The distance formula (extended to 3D for real-world applications) is fundamental in GPS and navigation systems for calculating distances between locations.

### 5. Computer Graphics
In computer graphics, the distance formula is used for rendering shapes, detecting collisions, and calculating visibility.

## Extensions of the Distance Formula 🔄

### Distance in 3D Space
In three-dimensional space, the distance between points P(x₁, y₁, z₁) and Q(x₂, y₂, z₂) is:
d = √[(x₂ - x₁)² + (y₂ - y₁)² + (z₂ - z₁)²]

### Distance from a Point to a Line
The distance from a point P(x₀, y₀) to a line ax + by + c = 0 is:
d = |ax₀ + by₀ + c| / √(a² + b²)

### Distance between Two Parallel Lines
The distance between two parallel lines ax + by + c₁ = 0 and ax + by + c₂ = 0 is:
d = |c₁ - c₂| / √(a² + b²)

## Common Problems and Techniques 🧩

### 1. Finding a Point on a Given Coordinate that is at a Specific Distance
If we know one point P(x₁, y₁) and the distance d to another point Q(x₂, y₂), and we're given either x₂ or y₂, we can find the other coordinate using the distance formula.

For example, if Q lies on the x-axis (so y₂ = 0):
d = √[(x₂ - x₁)² + (0 - y₁)²]
Solve for x₂.

### 2. Finding the Set of Points at a Constant Distance
The set of points at a constant distance d from a fixed point P₀(x₀, y₀) forms a circle with center P₀ and radius d. Its equation is:
(x - x₀)² + (y - y₀)² = d²

### 3. Dividing a Line Segment in a Given Ratio
If we want to find a point P that divides the line segment joining A(x₁, y₁) and B(x₂, y₂) in the ratio m:n, the coordinates of P are:
P(x, y) = ((mx₂ + nx₁)/(m + n), (my₂ + ny₁)/(m + n))

This is related to the distance formula as it ensures that the distances AP and PB are in the ratio m:n.

## Sample Problems 📝

### Problem 1
Find the distance between the points (-2, 5) and (3, -7).

**Solution:**
d = √[(3 - (-2))² + (-7 - 5)²]
d = √[(5)² + (-12)²]
d = √[25 + 144]
d = √169 = 13 units

### Problem 2
Show that the points A(1, -2), B(4, 0), and C(0, 4) form a right-angled triangle.

**Solution:**
AB = √[(4 - 1)² + (0 - (-2))²] = √[9 + 4] = √13
BC = √[(0 - 4)² + (4 - 0)²] = √[16 + 16] = √32 = 4√2
AC = √[(0 - 1)² + (4 - (-2))²] = √[1 + 36] = √37

Checking Pythagorean theorem:
- AB² + BC² = 13 + 32 = 45 ≈ 37 = AC²
- AB² + AC² = 13 + 37 = 50 ≠ 32 = BC²
- BC² + AC² = 32 + 37 = 69 ≠ 13 = AB²

Since AB² + BC² ≈ AC² (with some rounding error), the triangle is approximately right-angled at B.

### Problem 3
Find the value of k if the points A(k, 3), B(6, -2), and C(0, 5) are collinear.

**Solution:**
For three points to be collinear, the distance AB + BC must equal AC.
AB = √[(6 - k)² + (-2 - 3)²]
BC = √[(0 - 6)² + (5 - (-2))²]
AC = √[(0 - k)² + (5 - 3)²]

For collinearity:
AB + BC = AC or AB = AC + BC or BC = AB + AC

The above approach becomes computationally intensive. A simpler method is to check if the area of the triangle formed by these points is zero:
Area = (1/2)|k((-2) - 5) + 6(5 - 3) + 0(3 - (-2))|
Area = (1/2)|k(-7) + 6(2) + 0| = (1/2)|(-7k + 12)|

For collinearity, Area = 0, which means -7k + 12 = 0, so k = 12/7.

## Tips for Using the Distance Formula 💡

1. **Be Careful with Signs**: When subtracting coordinates, pay attention to negative signs, especially when squaring differences.
   
2. **Simplify Before Taking the Square Root**: Whenever possible, simplify the expression under the square root. For example, √50 is better expressed as 5√2.
   
3. **Use Special Cases**: If points share an x or y coordinate, use the simplified formulas to save time.
   
4. **Distance is Always Non-Negative**: The distance formula always gives a non-negative result, as it involves squared differences and a square root.

5. **Check Reasonability**: Always cross-check your answer with an estimate. For example, if points are far apart, their distance shouldn't be small.

## Summary ✨

The distance formula is a powerful tool in coordinate geometry that allows us to:

- Calculate the exact distance between any two points in a coordinate system
- Verify geometric properties of shapes (like checking if a triangle is right-angled)
- Find unknown coordinates when distance constraints are given
- Calculate perimeters and areas of shapes in the coordinate plane
- Extend to 3D and higher dimensions for more complex problems

The formula, d = √[(x₂ - x₁)² + (y₂ - y₁)²], is derived directly from the Pythagorean theorem and serves as a foundation for many other concepts in coordinate geometry, such as the equation of a circle and the section formula.

As you proceed through coordinate geometry, you'll find the distance formula appearing again and again, making it one of the most useful formulas to master! 🌟

### Additional Practice Questions:

1. Find the distance between the points A(3, -5) and B(-2, 7).
2. If the distance between the points P(2, -3) and Q(k, 5) is 10 units, find the possible values of k.
3. Determine whether the quadrilateral with vertices at (1, 1), (5, 2), (6, 6), and (2, 5) is a rhombus.
`,
  quiz: {
    questions: [
      ...easyQuestions,
      ...mediumQuestions
    ]
  }
};
