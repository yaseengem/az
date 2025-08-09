// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 7\Chapter11\Topic2\content.ts
import { QuizQuestion, TopicQuiz, TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic2Content: TopicContent = {
  id: 'cl7_ch11_t2',
  topicNumber: 2,
  topicName: "Formulas and applications",
  duration: 45,
  description: "Learning and applying formulas to calculate perimeter and area of various geometric shapes with practical real-world examples and problem solving",
  explanation: `
# Formulas and Applications of Perimeter and Area 📏

Welcome to the fascinating world of perimeter and area formulas! 🌟 In this topic, we'll explore the mathematical expressions that help us calculate the boundary length and surface coverage of various shapes. These formulas are incredibly useful in everyday life, from designing gardens and buildings to calculating material requirements for construction projects. Let's dive in and master these essential mathematical tools! 🚀

## Understanding Perimeter and Area 🔍

### What is Perimeter?
Perimeter is the total distance around the boundary of a 2D shape. It's like walking around the entire edge of a figure and measuring how far you've traveled. Perimeter is measured in linear units like centimeters (cm), meters (m), or kilometers (km).

### What is Area?
Area represents the amount of space inside a 2D shape. You can think of it as how many square units would fit inside the shape. Area is measured in square units like square centimeters (cm²), square meters (m²), or square kilometers (km²).

## Perimeter and Area Formulas for Common Shapes 📐

### 1. Rectangle 🟦

#### Perimeter of a Rectangle:
The perimeter of a rectangle is the sum of all its sides. Since a rectangle has two equal lengths and two equal widths:

**Formula:** P = 2(l + w)

Where:
- P = Perimeter
- l = Length
- w = Width

**Example:** A rectangle with length 8 cm and width 5 cm
P = 2(8 + 5) = 2(13) = 26 cm

#### Area of a Rectangle:
The area of a rectangle is the product of its length and width:

**Formula:** A = l × w

**Example:** A rectangle with length 8 cm and width 5 cm
A = 8 × 5 = 40 cm²

### 2. Square 🟧

A square is a special rectangle with all sides equal.

#### Perimeter of a Square:
**Formula:** P = 4s

Where:
- P = Perimeter
- s = Side length

**Example:** A square with side 6 cm
P = 4 × 6 = 24 cm

#### Area of a Square:
**Formula:** A = s²

**Example:** A square with side 6 cm
A = 6² = 36 cm²

### 3. Triangle 🔺

#### Perimeter of a Triangle:
The perimeter of a triangle is the sum of the lengths of all three sides:

**Formula:** P = a + b + c

Where:
- P = Perimeter
- a, b, c = Lengths of the three sides

**Example:** A triangle with sides 5 cm, 12 cm, and 13 cm
P = 5 + 12 + 13 = 30 cm

#### Area of a Triangle:
**Formula:** A = ½ × base × height

Where:
- A = Area
- base = Length of any side chosen as the base
- height = Perpendicular distance from the base to the opposite vertex

**Example:** A triangle with base 12 cm and height 5 cm
A = ½ × 12 × 5 = 30 cm²

### 4. Circle ⭕

#### Perimeter (Circumference) of a Circle:
**Formula:** C = 2πr or C = πd

Where:
- C = Circumference
- π (pi) ≈ 3.14159... or 22/7 (approximate)
- r = Radius
- d = Diameter (d = 2r)

**Example:** A circle with radius 7 cm
C = 2π × 7 = 2 × 22/7 × 7 = 44 cm

#### Area of a Circle:
**Formula:** A = πr²

**Example:** A circle with radius 7 cm
A = π × 7² = 22/7 × 49 = 154 cm²

### 5. Parallelogram ◇

#### Perimeter of a Parallelogram:
**Formula:** P = 2(a + b)

Where:
- P = Perimeter
- a, b = Lengths of adjacent sides

**Example:** A parallelogram with adjacent sides 12 cm and 8 cm
P = 2(12 + 8) = 2 × 20 = 40 cm

#### Area of a Parallelogram:
**Formula:** A = base × height

Where:
- A = Area
- base = Length of any side chosen as the base
- height = Perpendicular distance from the base to the opposite side

**Example:** A parallelogram with base 12 cm and height 8 cm
A = 12 × 8 = 96 cm²

### 6. Trapezoid (Trapezium) 🔷

#### Perimeter of a Trapezoid:
**Formula:** P = a + b + c + d

Where:
- P = Perimeter
- a, b, c, d = Lengths of all four sides

**Example:** A trapezoid with sides 10 cm, 14 cm, 7 cm, and 7 cm
P = 10 + 14 + 7 + 7 = 38 cm

#### Area of a Trapezoid:
**Formula:** A = ½ × (a + c) × h

Where:
- A = Area
- a, c = Lengths of the parallel sides
- h = Perpendicular distance between the parallel sides (height)

**Example:** A trapezoid with parallel sides 10 cm and 14 cm, and height 8 cm
A = ½ × (10 + 14) × 8 = ½ × 24 × 8 = 96 cm²

### 7. Rhombus 🔹

#### Perimeter of a Rhombus:
Since all sides of a rhombus are equal:
**Formula:** P = 4s

Where:
- P = Perimeter
- s = Side length

**Example:** A rhombus with sides 9 cm each
P = 4 × 9 = 36 cm

#### Area of a Rhombus:
The area of a rhombus can be calculated using its diagonals:
**Formula:** A = ½ × d₁ × d₂

Where:
- A = Area
- d₁, d₂ = Lengths of the diagonals

**Example:** A rhombus with diagonals 12 cm and 16 cm
A = ½ × 12 × 16 = 96 cm²

## Special Formulas and Relationships 🧩

### Heron's Formula for Triangle Area:
If you know all three sides of a triangle but not the height, you can use Heron's formula:

**Formula:** A = √(s(s-a)(s-b)(s-c))

Where:
- A = Area
- a, b, c = Lengths of the sides
- s = Semi-perimeter = (a + b + c)/2

**Example:** A triangle with sides 5 cm, 12 cm, and 13 cm
s = (5 + 12 + 13)/2 = 15 cm
A = √(15(15-5)(15-12)(15-13)) = √(15 × 10 × 3 × 2) = √900 = 30 cm²

### Relationship Between Radius, Diameter, Circumference, and Area of Circle:
- Diameter (d) = 2 × Radius (r)
- Circumference (C) = 2πr = πd
- Area (A) = πr²

If you know any one of these values, you can calculate the others.

## Real-World Applications of Perimeter and Area 🌎

### 1. Construction and Architecture 🏗️

#### Fencing and Boundary Calculation:
When building a fence around a property, you need to calculate the perimeter to determine how much fencing material is required.

**Example Problem:** 
A rectangular garden measures 15 m by 12 m. How much fencing is needed to surround it?

**Solution:**
Using the perimeter formula for a rectangle:
P = 2(l + w) = 2(15 + 12) = 2 × 27 = 54 m
So, 54 meters of fencing is required.

#### Flooring and Tiling:
When installing tiles or carpeting, you need to calculate the area to determine how much material to purchase.

**Example Problem:**
A square room has sides of length 4.5 m. How many square tiles of side 30 cm are needed to cover the floor?

**Solution:**
Area of the room = 4.5² = 20.25 m²
Area of one tile = 0.3² = 0.09 m²
Number of tiles needed = 20.25 ÷ 0.09 = 225 tiles

### 2. Agriculture and Landscaping 🌱

#### Land Measurement:
Farmers need to calculate area to determine seed quantities, irrigation requirements, and expected yields.

**Example Problem:**
A farmer has a triangular field with sides 120 m, 160 m, and 200 m. What is the area of this field?

**Solution:**
Using Heron's formula:
s = (120 + 160 + 200)/2 = 240 m
A = √(240(240-120)(240-160)(240-200))
A = √(240 × 120 × 80 × 40)
A = √92,160,000 = 9,600 m²

#### Lawn Coverage:
Calculating how much grass seed or fertilizer is needed based on lawn area.

**Example Problem:**
A circular garden has a radius of 3.5 m. How much fertilizer is needed if 100 g of fertilizer covers 1 m²?

**Solution:**
Area of the garden = πr² = 3.14 × 3.5² = 3.14 × 12.25 = 38.47 m²
Fertilizer required = 38.47 × 100 = 3,847 g or about 3.85 kg

### 3. Manufacturing and Packaging 📦

#### Material Requirements:
Calculating how much material is needed for manufacturing items.

**Example Problem:**
A cylindrical can has a radius of 3.5 cm and height of 10 cm. How much metal sheet is needed to make the can (including top and bottom)?

**Solution:**
Surface area = 2πr² + 2πrh = 2π × 3.5² + 2π × 3.5 × 10
= 2π × 12.25 + 2π × 35
= 24.5π + 70π
= 94.5π ≈ 296.73 cm²

### 4. Home Improvement and Decoration 🏠

#### Wall Painting:
Calculating how much paint is needed based on wall area.

**Example Problem:**
A rectangular wall is 4 m high and 6 m wide. If 1 liter of paint covers 10 m², how much paint is needed for the wall?

**Solution:**
Area of the wall = 4 × 6 = 24 m²
Paint required = 24 ÷ 10 = 2.4 liters

#### Curtain Requirements:
Determining fabric needed for window treatments based on perimeter and area.

**Example Problem:**
A window is 1.5 m wide and 2 m high. How much fabric is needed for curtains if you need twice the width for pleats and an additional 30 cm for hemming at top and bottom?

**Solution:**
Fabric width needed = 1.5 × 2 = 3 m
Fabric height needed = 2 + 0.3 = 2.3 m
Total fabric area = 3 × 2.3 = 6.9 m²

## Problem-Solving Strategies for Perimeter and Area Questions 🧠

### 1. Identifying the Shape and Relevant Formula
Always start by clearly identifying what shape you're working with and recalling the appropriate formula for perimeter or area.

### 2. Drawing a Diagram
Visual representation helps in understanding the problem. Label the known dimensions clearly.

### 3. Converting Units
Make sure all measurements are in the same units before calculating.

**Example:**
If length is 2 m and width is 50 cm, convert to the same unit:
50 cm = 0.5 m, so width = 0.5 m
Or, 2 m = 200 cm, so length = 200 cm

### 4. Breaking Complex Shapes into Simpler Ones
For irregular or compound shapes, try breaking them down into rectangles, triangles, or other basic shapes.

**Example Problem:**
Find the area of an L-shaped figure formed by a 6 × 4 rectangle with a 2 × 2 square removed from one corner.

**Solution:**
Area = Area of rectangle - Area of square
= (6 × 4) - (2 × 2)
= 24 - 4
= 20 square units

### 5. Working Backward
Sometimes you know the perimeter or area and need to find dimensions.

**Example Problem:**
The perimeter of a square is 36 cm. What is its area?

**Solution:**
For a square, P = 4s
So, 36 = 4s
s = 36 ÷ 4 = 9 cm
Area = s² = 9² = 81 cm²

## Common Challenges and Misconceptions 🚧

### 1. Confusing Perimeter and Area
Remember, perimeter is measured in units (e.g., cm, m) and represents distance around, while area is measured in square units (e.g., cm², m²) and represents space inside.

### 2. Not Using the Correct Height in Parallelograms and Triangles
Remember, the height must be perpendicular to the base, not the slant height.

### 3. Incorrect Units
Always verify that your final answer has the correct units: linear units for perimeter (cm, m) and square units for area (cm², m²).

### 4. Mixing Formulas
Don't mix formulas for different shapes. The formula for a rectangle's area won't work for a triangle, and vice versa.

### 5. Forgetting the Factor of ½ in Triangle Area Formula
The area of a triangle is half the product of the base and height: A = ½ × b × h, not simply b × h.

## Practice with Sample Problems 📝

### Problem 1:
A square garden has a side length of 8 m. The owner wants to put a fence around it and also grow grass on it. If fencing costs ₹120 per meter and grass seeds cost ₹50 per square meter, find the total cost.

**Solution:**
Perimeter of the garden = 4 × 8 = 32 m
Cost of fencing = 32 × 120 = ₹3,840
Area of the garden = 8² = 64 m²
Cost of grass seeds = 64 × 50 = ₹3,200
Total cost = ₹3,840 + ₹3,200 = ₹7,040

### Problem 2:
A circular pool has a diameter of 7 m. Find the area of the pool and the length of its boundary.

**Solution:**
Radius of the pool = 7 ÷ 2 = 3.5 m
Area = πr² = 3.14 × 3.5² = 3.14 × 12.25 = 38.47 m²
Circumference = 2πr = 2 × 3.14 × 3.5 = 22 m

### Problem 3:
A triangular park has sides measuring 120 m, 80 m, and 70 m. Find its area using Heron's formula.

**Solution:**
Semi-perimeter s = (120 + 80 + 70) ÷ 2 = 135 m
Area = √(s(s-a)(s-b)(s-c))
= √(135(135-120)(135-80)(135-70))
= √(135 × 15 × 55 × 65)
= √7,253,625
≈ 2,693.3 m²

### Problem 4:
A rectangular field is 90 m long and 60 m wide. A path 2.5 m wide runs around it on the inside. Find the area of the path.

**Solution:**
Area of the field = 90 × 60 = 5,400 m²
Area of the inner rectangle = (90 - 2 × 2.5) × (60 - 2 × 2.5)
= 85 × 55 = 4,675 m²
Area of the path = 5,400 - 4,675 = 725 m²

### Problem 5:
A rhombus has diagonals measuring 16 cm and 12 cm. Find its area and perimeter.

**Solution:**
Area = ½ × d₁ × d₂ = ½ × 16 × 12 = 96 cm²

To find the perimeter, we need the side length. Using the Pythagorean theorem:
Half of diagonal 1 = 16 ÷ 2 = 8 cm
Half of diagonal 2 = 12 ÷ 2 = 6 cm
Side length = √(8² + 6²) = √(64 + 36) = √100 = 10 cm
Perimeter = 4 × side = 4 × 10 = 40 cm

## Summary 📚

Understanding perimeter and area formulas is essential for solving many real-world problems. These formulas allow us to:

1. Calculate boundaries and enclosed spaces of different shapes
2. Determine material requirements for construction, manufacturing, and home improvement
3. Estimate costs for projects involving area coverage or perimeter enclosure
4. Solve complex problems by breaking them down into simpler shapes

The key to mastery is practice. By working through various problems and applications, you'll develop a strong intuition for when and how to apply these formulas. Remember to identify the shape, recall the appropriate formula, convert units as needed, and check that your answer has the correct units.

Perimeter and area calculations are not just mathematical exercises—they're practical tools that help us design, build, and improve the world around us. From agriculture to architecture, these concepts play a crucial role in countless applications, making them truly indispensable in both academic and everyday contexts.

May your perimeters be well-defined and your areas precisely calculated! 🎯
`,
  quiz: {
    questions: [
      ...easyQuestions,
      ...mediumQuestions
    ]
  }
};
