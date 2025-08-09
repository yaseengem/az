// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 7\Chapter11\Topic1\content.ts
import { QuizQuestion, TopicQuiz, TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic1Content: TopicContent = {
  id: 'cl7_ch11_t1',
  topicNumber: 1,
  topicName: "Perimeter and area of squares, rectangles, parallelograms, triangles, circles",
  duration: 45,
  description: "Learning how to calculate the perimeter and area of common geometric shapes including squares, rectangles, parallelograms, triangles, and circles",
  explanation: `
# Perimeter and Area of Common Shapes 📐

Welcome to the fascinating world of perimeter and area! 🌟 In this topic, we'll explore how to calculate the boundary length (perimeter) and the space covered (area) by various geometric shapes. Understanding these concepts is essential for solving real-life problems involving measurements. Let's dive in and master these important mathematical skills! 🚀

## Introduction to Perimeter and Area 🧮

### What is Perimeter?
Perimeter is the total distance around the boundary of a 2D shape. It's like measuring the length of fence needed to enclose a garden or the ribbon required to wrap around a gift box.

### What is Area?
Area is the measure of the space covered by a 2D shape. Think of it as how much paint you would need to cover a wall or how much carpet you would need for a room.

### Units of Measurement:
- **Perimeter**: Measured in linear units like centimeters (cm), meters (m), kilometers (km), etc.
- **Area**: Measured in square units like square centimeters (cm²), square meters (m²), square kilometers (km²), etc.

## Square ⬜

### Properties:
- All sides are equal in length
- All angles are 90° (right angles)
- Opposite sides are parallel

### Perimeter:
The perimeter of a square is the sum of all four sides.
- Formula: P = 4 × side length
- P = 4s

### Area:
The area of a square is the product of its side length with itself.
- Formula: A = side length × side length
- A = s²

### Example:
A square garden has a side length of 8 meters.
- Perimeter = 4 × 8 = 32 meters
- Area = 8² = 64 square meters

### Sample Question:
If a square has a perimeter of 36 cm, what is its area?
- Side length = 36 ÷ 4 = 9 cm
- Area = 9² = 81 cm²

## Rectangle 🔲

### Properties:
- Opposite sides are equal in length
- All angles are 90° (right angles)
- Opposite sides are parallel

### Perimeter:
The perimeter of a rectangle is the sum of all four sides, or twice the sum of its length and width.
- Formula: P = 2(length + width)
- P = 2(l + w) or P = 2l + 2w

### Area:
The area of a rectangle is the product of its length and width.
- Formula: A = length × width
- A = l × w

### Example:
A rectangular field is 15 meters long and 10 meters wide.
- Perimeter = 2(15 + 10) = 2(25) = 50 meters
- Area = 15 × 10 = 150 square meters

### Sample Question:
If a rectangular room has a length of 6 meters and a width of 4 meters, how much carpet is needed to cover the floor?
- Area = 6 × 4 = 24 square meters

## Parallelogram ◊

### Properties:
- Opposite sides are equal in length and parallel
- Opposite angles are equal
- Consecutive angles are supplementary (add up to 180°)

### Perimeter:
The perimeter of a parallelogram is the sum of all four sides. Since opposite sides are equal, it's twice the sum of adjacent sides.
- Formula: P = 2(a + b), where a and b are adjacent sides
- P = 2a + 2b

### Area:
The area of a parallelogram is the product of its base and height (altitude).
- Formula: A = base × height
- A = b × h

### Example:
A parallelogram has a base of 12 cm and a height of 5 cm, with the non-base side measuring 7 cm.
- Perimeter = 2(12 + 7) = 2(19) = 38 cm
- Area = 12 × 5 = 60 cm²

### Sample Question:
The area of a parallelogram is 72 cm² and its height is 8 cm. What is the length of its base?
- Base = Area ÷ Height = 72 ÷ 8 = 9 cm

## Triangle 🔺

### Properties:
- Has three sides and three angles
- The sum of all angles is 180°
- Various types: equilateral (all sides equal), isosceles (two sides equal), scalene (all sides different)

### Perimeter:
The perimeter of a triangle is the sum of the lengths of all three sides.
- Formula: P = a + b + c, where a, b, and c are the lengths of the sides

### Area:
The area of a triangle can be calculated using different formulas:

1. **Using base and height**:
   - Formula: A = ½ × base × height
   - A = ½bh

2. **Using Heron's formula** (when you know all three sides):
   - Semi-perimeter (s) = (a + b + c) ÷ 2
   - Area = √[s(s-a)(s-b)(s-c)]

### Example:
A triangle has sides of lengths 5 cm, 12 cm, and 13 cm.
- Perimeter = 5 + 12 + 13 = 30 cm
- For area using Heron's formula:
  - s = (5 + 12 + 13) ÷ 2 = 15
  - Area = √[15(15-5)(15-12)(15-13)] = √(15×10×3×2) = √900 = 30 cm²

### Special Case: Right-Angled Triangle
If a triangle has one angle of 90°, it's a right-angled triangle, and its area can be found using:
- Area = ½ × base × height, where base and height are the two sides forming the right angle

### Sample Question:
A triangular park has a base of 14 meters and a height of 8 meters. What is its area?
- Area = ½ × 14 × 8 = 56 square meters

## Circle ⭕

### Properties:
- All points on the circumference are equidistant from the center
- Defined by its radius (r) or diameter (d), where d = 2r

### Perimeter (Circumference):
The circumference of a circle is the distance around it.
- Formula: C = 2πr or C = πd
- Where π (pi) is approximately 3.14159... or 22/7 (commonly used approximation)

### Area:
The area of a circle is determined by its radius.
- Formula: A = πr²

### Example:
A circle has a radius of 7 cm.
- Circumference = 2π × 7 = 14π ≈ 44 cm (using π ≈ 22/7)
- Area = π × 7² = 49π ≈ 154 cm² (using π ≈ 22/7)

### Sample Question:
If a circular garden has a diameter of 10 meters, what is its area?
- Radius = Diameter ÷ 2 = 10 ÷ 2 = 5 meters
- Area = π × 5² = 25π ≈ 78.5 square meters (using π ≈ 3.14)

## Real-World Applications 🌐

### In Construction and Architecture:
- **Flooring**: Calculating carpet, tile, or hardwood flooring needed (area)
- **Fencing**: Determining fence length for a yard (perimeter)
- **Painting**: Estimating paint required for walls (area)
- **Landscaping**: Planning garden beds or lawn areas (area)

### In Daily Life:
- **Home Improvement**: Measuring for wallpaper, curtains, or blinds
- **Sports**: Calculating field or court dimensions
- **Crafts**: Determining fabric needed for sewing projects
- **Shopping**: Understanding price per unit area (e.g., price per square meter)

## Conversion Between Units 📊

When working with perimeter and area, you might need to convert between different units:

### Perimeter (Length) Conversions:
- 1 meter (m) = 100 centimeters (cm)
- 1 kilometer (km) = 1000 meters (m)
- 1 inch (in) = 2.54 centimeters (cm)
- 1 foot (ft) = 30.48 centimeters (cm) or 12 inches

### Area Conversions:
- 1 square meter (m²) = 10,000 square centimeters (cm²)
- 1 square kilometer (km²) = 1,000,000 square meters (m²)
- 1 square foot (ft²) = 144 square inches (in²)
- 1 square yard (yd²) = 9 square feet (ft²)
- 1 acre = 4,840 square yards (yd²) or about 4,047 square meters (m²)

## Special Cases and Variations 🔄

### Composite Shapes:
Many real-world objects are combinations of basic shapes. To find their perimeter or area:

1. **For perimeter**: Add up all the outer boundary segments.
2. **For area**: Divide the shape into known shapes, find the area of each, and add them together.

### Example of a Composite Shape:
An L-shaped garden consists of a 6m × 4m rectangle attached to a 3m × 2m rectangle.
- Total area = (6 × 4) + (3 × 2) = 24 + 6 = 30 square meters
- Perimeter = 6 + 4 + 3 + 2 + 3 + 2 = 20 meters

### Irregular Shapes:
For irregular shapes, we can:
1. Approximate them using regular shapes
2. Divide them into smaller, more manageable shapes
3. Use advanced mathematical techniques like integration

## Visualizing Growth in Area 📈

It's important to understand how changes in dimensions affect perimeter and area:

### Effect of Doubling Dimensions:
- **Doubling the side length of a square**:
  - Perimeter doubles (2 × 4s = 8s)
  - Area quadruples (2s)² = 4s²
  
- **Doubling the radius of a circle**:
  - Circumference doubles (2π × 2r = 4πr)
  - Area quadruples (π × (2r)² = 4πr²)

This relationship shows why a small increase in dimensions can result in a much larger increase in area!

## Problem-Solving Strategies 🧩

When solving perimeter and area problems:

1. **Identify the shape** or break down composite shapes into basic ones
2. **Draw a diagram** with all known dimensions
3. **Choose the appropriate formula** for each shape
4. **Pay attention to units** and convert if necessary
5. **Double-check your calculations**, especially for complex shapes

## Common Mistakes to Avoid ⚠️

### Mixing Up Formulas:
- Confusing area and perimeter formulas
- Using the wrong formula for a particular shape

### Unit Errors:
- Forgetting to square units for area
- Not converting all measurements to the same unit

### Calculation Errors:
- Miscalculating the height of a parallelogram or triangle
- Mistaking diameter for radius in circle calculations

### Conceptual Misunderstandings:
- Assuming that shapes with equal perimeters have equal areas
- Thinking that doubling dimensions doubles the area

## Interesting Facts and Relationships 💡

### Isoperimetric Inequality:
Among all closed curves with a given perimeter, the circle encloses the maximum area.

### Fixed Perimeter, Variable Area:
For a fixed perimeter, the shape that maximizes area is:
- Among all triangles: the equilateral triangle
- Among all quadrilaterals: the square
- Among all shapes: the circle

### Fixed Area, Variable Perimeter:
For a fixed area, the shape that minimizes perimeter is:
- Among all triangles: the equilateral triangle
- Among all quadrilaterals: the square
- Among all shapes: the circle

## Practice Problems with Solutions 📝

### Problem 1:
A rectangular playground is 25 meters long and 15 meters wide. Find the cost of fencing it at ₹120 per meter.

**Solution**:
- Perimeter = 2(length + width) = 2(25 + 15) = 2(40) = 80 meters
- Cost of fencing = 80 × ₹120 = ₹9,600

### Problem 2:
A circular flower bed has a diameter of 3.5 meters. What is the area of the flower bed? (Use π = 22/7)

**Solution**:
- Radius = Diameter ÷ 2 = 3.5 ÷ 2 = 1.75 meters
- Area = πr² = (22/7) × (1.75)² = (22/7) × 3.0625 ≈ 9.625 square meters

### Problem 3:
A triangular garden has sides of lengths 8 meters, 10 meters, and 12 meters. Find its area.

**Solution**:
- Using Heron's formula:
  - Semi-perimeter (s) = (8 + 10 + 12) ÷ 2 = 15
  - Area = √[s(s-a)(s-b)(s-c)] = √[15(15-8)(15-10)(15-12)] = √(15×7×5×3) = √1,575 ≈ 39.7 square meters

## Summary 📚

Understanding perimeter and area is fundamental to solving many real-world problems involving measurement and space. Let's recap what we've learned:

### Key Formulas:

| Shape | Perimeter | Area |
|-------|-----------|------|
| Square | P = 4s | A = s² |
| Rectangle | P = 2(l + w) | A = l × w |
| Parallelogram | P = 2(a + b) | A = b × h |
| Triangle | P = a + b + c | A = ½bh or A = √[s(s-a)(s-b)(s-c)] |
| Circle | C = 2πr | A = πr² |

### Remember:
1. Perimeter is measured in linear units (cm, m, etc.)
2. Area is measured in square units (cm², m², etc.)
3. Choose the right formula for the shape you're working with
4. Pay attention to units and convert when necessary
5. For composite shapes, break them down into simpler forms

By mastering these concepts, you'll be able to solve a wide variety of geometry problems and apply these skills to practical situations. Whether you're calculating the amount of fencing needed for a garden, the carpet required for a room, or the amount of paint needed for a wall, understanding perimeter and area will help you find the answer.

Keep practicing these skills, and soon you'll be able to calculate perimeters and areas with ease! 🌟
`,
  quiz: {
    questions: [
      ...easyQuestions,
      ...mediumQuestions
    ]
  }
};
