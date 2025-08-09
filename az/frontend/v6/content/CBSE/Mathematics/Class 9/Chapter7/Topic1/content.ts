import { TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic1Content: TopicContent = {
    id: 'cl9_ch7_t1',
    topicNumber: 1,
    topicName: "Introduction to Triangles",
    duration: 45,
    description: "Basic introduction to triangles, their elements, classification, and fundamental properties",
    explanation: `
# Introduction to Triangles 🔺

Triangles are one of the most fundamental and important shapes in geometry! 📐 A triangle is a closed figure formed by three line segments joining three non-collinear points. Let's explore the fascinating world of triangles and understand their basic elements, classifications, and properties.

## Elements of a Triangle 📝

A triangle consists of:

1. **Vertices**: The three points where the sides of a triangle meet are called vertices. They are typically labeled with capital letters (A, B, C).

2. **Sides**: The three line segments that form the triangle are called its sides. If the vertices are labeled A, B, and C, then the sides are typically denoted as AB, BC, and CA (or sometimes a, b, and c).

3. **Angles**: The three angles formed at the vertices are usually denoted by ∠A, ∠B, and ∠C (or sometimes by Greek letters α, β, and γ).

4. **Interior**: The region enclosed by the three sides of the triangle.

5. **Exterior**: The region outside the triangle.

## Triangle Inequality Theorem 📊

One of the most important properties of triangles is the Triangle Inequality Theorem, which states:

> The sum of the lengths of any two sides of a triangle must be greater than the length of the third side.

Mathematically:
- a + b > c
- b + c > a
- c + a > b

**Example** 🔍: Can we form a triangle with sides of lengths 3 cm, 4 cm, and 8 cm?
- 3 + 4 = 7, which is less than 8
- So, 3 + 4 ≯ 8
- Therefore, we cannot form a triangle with these measurements.

**Sample Question** ❓: Which of these sets of lengths can form a triangle? (a) 5 cm, 6 cm, 10 cm (b) 7 cm, 8 cm, 14 cm (c) 3 cm, 4 cm, 5 cm.
- For (a): 5 + 6 = 11 > 10, 5 + 10 = 15 > 6, 6 + 10 = 16 > 5. So yes, it can form a triangle.
- For (b): 7 + 8 = 15 > 14, 7 + 14 = 21 > 8, 8 + 14 = 22 > 7. So yes, it can form a triangle.
- For (c): 3 + 4 = 7 > 5, 3 + 5 = 8 > 4, 4 + 5 = 9 > 3. So yes, it can form a triangle.

## Classification of Triangles 📋

Triangles can be classified based on their sides and angles:

### Based on Sides:

1. **Equilateral Triangle**: All three sides are equal in length.
   - All angles are also equal (60° each).
   - Example: A triangle with sides of 5 cm, 5 cm, and 5 cm.
   
2. **Isosceles Triangle**: At least two sides are equal in length.
   - The angles opposite to the equal sides are also equal.
   - Example: A triangle with sides of 5 cm, 5 cm, and 8 cm.
   
3. **Scalene Triangle**: All three sides have different lengths.
   - Generally, all angles are also different.
   - Example: A triangle with sides of 3 cm, 4 cm, and 5 cm.

### Based on Angles:

1. **Acute Triangle**: All three angles are acute (less than 90°).
   - Example: A triangle with angles 60°, 60°, and 60°.
   
2. **Right Triangle**: One angle is a right angle (90°).
   - The side opposite to the right angle is called the hypotenuse, and the other two sides are called the legs or catheti.
   - Example: A triangle with angles 30°, 60°, and 90°.
   
3. **Obtuse Triangle**: One angle is obtuse (greater than 90°).
   - Example: A triangle with angles 30°, 30°, and 120°.

### Combined Classification:

A triangle can fall into multiple categories. For example, a triangle can be both isosceles and right-angled (like a 45°-45°-90° triangle).

## Angle Properties of Triangles 📐

1. **Sum of Angles**: The sum of all interior angles of a triangle is always 180° (or π radians).
   - ∠A + ∠B + ∠C = 180°
   - This is a fundamental property and can be proved using the properties of parallel lines.

2. **Exterior Angle Theorem**: The measure of an exterior angle of a triangle is equal to the sum of the two non-adjacent interior angles.
   - If ∠ACD is an exterior angle at vertex C, then ∠ACD = ∠A + ∠B.

**Example** 🔍: In a triangle, if two angles are 75° and 45°, find the third angle.
- We know ∠A + ∠B + ∠C = 180°
- Given: ∠A = 75° and ∠B = 45°
- Therefore, ∠C = 180° - (75° + 45°) = 180° - 120° = 60°

**Sample Question** ❓: In a triangle, one angle is twice the second angle and the third angle is three times the first angle. Find all three angles.
- Let's denote the angles as x, 2x, and 3x.
- Since the sum of angles in a triangle is 180°, we have: x + 2x + 3x = 180°
- Simplifying: 6x = 180°
- Therefore, x = 30°
- So, the angles are 30°, 60°, and 90°.

## Special Lines and Points in Triangles 📍

1. **Median**: A line segment joining a vertex to the midpoint of the opposite side.
   - Every triangle has three medians.
   - The three medians intersect at a single point called the centroid.
   - The centroid divides each median in the ratio 2:1 (the part from the vertex is twice as long as the part from the side).

2. **Altitude (or Height)**: A line segment drawn from a vertex perpendicular to the opposite side (or its extension).
   - Every triangle has three altitudes.
   - The three altitudes intersect at a single point called the orthocenter.
   - The altitude to the base of a triangle is often used to calculate the area.

3. **Angle Bisector**: A line segment that bisects an angle of the triangle, extending from the vertex to the opposite side.
   - Every triangle has three angle bisectors.
   - The three angle bisectors intersect at a single point called the incenter.
   - The incenter is the center of the inscribed circle (the circle that touches all three sides of the triangle).

4. **Perpendicular Bisector**: A line that bisects a side of the triangle at right angles.
   - Every triangle has three perpendicular bisectors.
   - The three perpendicular bisectors intersect at a single point called the circumcenter.
   - The circumcenter is the center of the circumscribed circle (the circle that passes through all three vertices of the triangle).

## Area of a Triangle 📊

The area of a triangle can be calculated using various formulas:

1. **Base-Height Formula**: Area = (1/2) × base × height
   - This is the most commonly used formula.
   - The base can be any side of the triangle, and the height is the corresponding altitude.

2. **Heron's Formula**: Area = √(s(s-a)(s-b)(s-c))
   - Where s = (a + b + c)/2 (semi-perimeter) and a, b, c are the sides of the triangle.
   - This formula is useful when only the sides are known.

3. **Trigonometric Formula**: Area = (1/2) × a × b × sin(C)
   - Where a and b are two sides of the triangle, and C is the angle between them.

**Example** 🔍: Calculate the area of a triangle with base 6 cm and height 4 cm.
- Using the base-height formula: Area = (1/2) × 6 × 4 = 12 square cm.

**Sample Question** ❓: Find the area of a triangle with sides 6 cm, 8 cm, and 10 cm.
- Using Heron's formula:
- s = (6 + 8 + 10)/2 = 12
- Area = √(12 × (12-6) × (12-8) × (12-10))
- Area = √(12 × 6 × 4 × 2)
- Area = √576 = 24 square cm.

## Similar vs. Congruent Triangles 🔄

It's important to understand the difference between similar and congruent triangles:

- **Similar Triangles**: Triangles that have the same shape but may have different sizes. Their corresponding angles are equal, and their corresponding sides are proportional.

- **Congruent Triangles**: Triangles that have exactly the same size and shape. All corresponding sides and angles are equal.

In the upcoming topics, we'll delve deeper into the concept of congruence and the criteria for determining when two triangles are congruent.

## Practical Applications of Triangles 🏗️

Triangles have numerous practical applications:

1. **Construction**: Triangles are used in construction because they are rigid shapes that don't deform easily under pressure.

2. **Surveying**: Triangulation is a surveying method based on the properties of triangles.

3. **Navigation**: Triangles are used to determine the position of ships and aircraft.

4. **Art and Design**: Triangles are used in various art forms and designs due to their aesthetic appeal.

5. **Engineering**: Trusses (triangular structures) are used in bridges and roofs for strength and stability.

## Summary ✨

In this introduction to triangles, we've explored:

- The basic elements of a triangle (vertices, sides, angles)
- The Triangle Inequality Theorem
- Classification of triangles based on sides and angles
- Angle properties of triangles
- Special lines and points in triangles (medians, altitudes, angle bisectors, perpendicular bisectors)
- Area calculation methods
- The difference between similar and congruent triangles
- Practical applications of triangles

Understanding these fundamentals is crucial as we delve deeper into the study of triangles, particularly the concept of congruence, which we'll explore in the upcoming topics.

### Additional Examples and Sample Questions:

1. **Example**: A triangle has angles in the ratio 2:3:4. Find the measures of all three angles.
   - Let the angles be 2x, 3x, and 4x.
   - Since the sum of angles is 180°, we have: 2x + 3x + 4x = 180°
   - 9x = 180°, so x = 20°
   - Therefore, the angles are 40°, 60°, and 80°.

2. **Example**: The perimeter of an equilateral triangle is 30 cm. Find the length of each side and the area of the triangle.
   - Since it's equilateral, all sides are equal. Let each side be x.
   - Perimeter = 3x = 30 cm, so x = 10 cm.
   - Using the area formula for an equilateral triangle: Area = (√3/4) × side²
   - Area = (√3/4) × 10² = 25√3 ≈ 43.3 square cm.

3. **Question**: If one angle of a triangle is 75° and another is 45°, what is the third angle?
   - Answer: 60° (since the sum of angles in a triangle is 180°)

4. **Question**: A triangle has sides of lengths 5 cm, 12 cm, and 13 cm. Is it a right triangle?
   - Answer: Yes, since 5² + 12² = 25 + 144 = 169 = 13², it satisfies the Pythagorean theorem.
`,
    quiz: {
        questions: [
            ...easyQuestions,
            ...mediumQuestions
        ]
    }
}; 