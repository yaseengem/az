// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 9\Chapter6\Topic4\content.ts
import { TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic4Content: TopicContent = {
  id: 'cl9_ch6_t4',
  topicNumber: 4,
  topicName: "Pairs of Angles",
  duration: 45,
  description: "Understanding complementary, supplementary, adjacent, and vertically opposite angles",
  explanation: `
# Pairs of Angles 📐

In geometry, the relationships between different angles form the foundation for solving various problems. When two angles relate to each other in specific ways, they create what we call "pairs of angles." Understanding these special angle pairs is essential for analyzing geometric figures, proving theorems, and solving real-world problems. Let's explore the various types of angle pairs and their properties! 🌟

## Complementary Angles 🧩

Two angles are said to be **complementary angles** if their sum equals 90° (a right angle).

### Properties of Complementary Angles:

1. **Sum to 90°**: If angles A and B are complementary, then A + B = 90°.

2. **Complement Calculation**: If angle A measures x degrees, its complement is (90° - x) degrees.

3. **Position Independence**: Complementary angles don't need to be adjacent to each other; they're defined solely by their sum.

4. **Right Angle Formation**: When complementary angles are adjacent, they form a right angle.

### Examples:

- 30° and 60° are complementary angles because 30° + 60° = 90°.
- 45° and 45° are complementary angles because 45° + 45° = 90°.
- 1° and 89° are complementary angles because 1° + 89° = 90°.

### Real-world Applications:

Complementary angles are commonly found in:
- Perpendicular structures like walls and floors
- Square corners in buildings and furniture
- Engineering designs requiring right angles
- Triangulation in surveying and navigation

## Supplementary Angles 📚

Two angles are said to be **supplementary angles** if their sum equals 180° (a straight angle).

### Properties of Supplementary Angles:

1. **Sum to 180°**: If angles C and D are supplementary, then C + D = 180°.

2. **Supplement Calculation**: If angle C measures x degrees, its supplement is (180° - x) degrees.

3. **Position Independence**: Like complementary angles, supplementary angles don't need to be adjacent.

4. **Straight Angle Formation**: When supplementary angles are adjacent, they form a straight angle (a straight line).

5. **Linear Pair**: Adjacent supplementary angles form what's called a linear pair.

### Examples:

- 110° and 70° are supplementary angles because 110° + 70° = 180°.
- 45° and 135° are supplementary angles because 45° + 135° = 180°.
- 90° and 90° are supplementary angles because 90° + 90° = 180°.

### Real-world Applications:

Supplementary angles appear in:
- Structural support systems
- Road layouts and intersections
- Door hinges and swing paths
- Astronomical measurements

## Adjacent Angles 📍

Two angles are said to be **adjacent angles** if they:
1. Share a common vertex
2. Share a common side
3. Have non-overlapping interiors

### Properties of Adjacent Angles:

1. **Common Vertex**: They meet at the same point.

2. **Common Ray**: They share one side.

3. **No Overlap**: Their interiors don't overlap.

4. **Sum Flexibility**: Unlike complementary or supplementary angles, adjacent angles can sum to any value (though special cases exist when they sum to 90° or 180°).

### Examples:

In the figure where rays OA, OB, and OC emanate from point O:
- ∠AOB and ∠BOC are adjacent angles.
- ∠AOB and ∠AOC are not adjacent because they don't share a common side other than the vertex.

### Real-world Applications:

Adjacent angles appear in:
- Gears and mechanical systems
- Construction of roofs and supports
- Design of transportation routes
- Circuit designs in electronics

## Linear Pair 📏

A **linear pair** is a special case of adjacent angles where:
1. They are adjacent (share a vertex and one side)
2. Their non-common sides form a straight line

### Properties of Linear Pair:

1. **Supplementary**: Angles in a linear pair are always supplementary (sum to 180°).

2. **Straight Line**: The non-common sides form a straight line.

3. **Converse**: If two adjacent angles are supplementary, they form a linear pair.

### Example:

When a ray stands on a straight line, the adjacent angles formed are a linear pair. If angles P and Q form a linear pair, then P + Q = 180°.

### Real-world Applications:

Linear pairs are found in:
- Structural beams in construction
- Railway tracks at junctions
- Highway intersections
- Door frame alignments

## Vertically Opposite Angles ✖️

When two lines intersect, they form two pairs of **vertically opposite angles** (also called vertical angles).

### Properties of Vertically Opposite Angles:

1. **Equal Measure**: Vertically opposite angles are always equal in measure.

2. **Non-adjacent**: Unlike adjacent angles, vertical angles are not adjacent to each other.

3. **Opposite Position**: They lie on opposite sides of the intersection point.

4. **Diagonal Positioning**: They're positioned diagonally across from each other.

### Proof of Equality:

When two lines intersect, they form four angles. Let's call them a, b, c, and d.

- Angles a and b form a linear pair, so a + b = 180°
- Angles b and c form a linear pair, so b + c = 180°

From these equations, we can deduce that a + b = b + c, which simplifies to a = c. Similarly, b = d.

Therefore, vertically opposite angles are equal in measure.

### Examples:

When two straight lines intersect at a point, four angles are formed. The angles that are opposite to each other are vertically opposite angles and are equal:
- If one angle is 35°, its vertically opposite angle is also 35°.
- If another angle is 145°, its vertically opposite angle is also 145°.

### Real-world Applications:

Vertically opposite angles appear in:
- Road intersections
- Structural cross-bracing
- Scissor mechanisms
- Design of electrical transmission towers

## Angles Formed by Parallel Lines and a Transversal 🚂

When two parallel lines are crossed by another line (called a transversal), several special angle relationships are formed.

### Types of Angles Formed:

1. **Corresponding Angles**: Angles in the same relative position at each intersection.
   - Example: When the transversal crosses the first parallel line creating an angle in the top-right quadrant, the angle formed in the top-right quadrant where it crosses the second parallel line is its corresponding angle.
   - Property: Corresponding angles are equal.

2. **Alternate Interior Angles**: Angles on opposite sides of the transversal and between the parallel lines.
   - Property: Alternate interior angles are equal.

3. **Alternate Exterior Angles**: Angles on opposite sides of the transversal and outside the parallel lines.
   - Property: Alternate exterior angles are equal.

4. **Co-interior (Allied) Angles**: Angles on the same side of the transversal and between the parallel lines.
   - Property: Co-interior angles are supplementary (sum to 180°).

### Examples:

If a transversal intersects two parallel lines forming an angle of 65°, then:
- All corresponding angles will measure 65°.
- All alternate interior and exterior angles will measure 65°.
- All co-interior angles will sum to 180° (e.g., 65° and 115°).

### Real-world Applications:

These angle relationships appear in:
- Railway track systems
- Rafter and truss designs
- Agricultural field patterns
- Circuit board layouts

## Problem Solving with Angle Relationships 🧮

### Problem 1:
If two angles are complementary and one is twice the other, find the measures of these angles.

**Solution**:
Let's say one angle is x and the other is 2x. Since they're complementary:
x + 2x = 90°
3x = 90°
x = 30°

So, the angles are 30° and 60°.

### Problem 2:
In a linear pair, if one angle is 15° more than half of the other, find both angles.

**Solution**:
Let's say the angles are y and z. Since they form a linear pair:
y + z = 180°

Given that one angle is 15° more than half of the other, we have:
z = (y/2) + 15°

Substituting into the first equation:
y + ((y/2) + 15°) = 180°
y + y/2 + 15° = 180°
3y/2 + 15° = 180°
3y/2 = 165°
y = 110°

Therefore, z = (110°/2) + 15° = 55° + 15° = 70°

The angles are 110° and 70°.

### Problem 3:
Two supplementary angles are in the ratio 2:3. Find the angles.

**Solution**:
Let's say the angles are 2x and 3x. Since they're supplementary:
2x + 3x = 180°
5x = 180°
x = 36°

So, the angles are 2 × 36° = 72° and 3 × 36° = 108°.

## Theorems Involving Angle Pairs 📜

### Theorem 1: Adjacent Angles on a Straight Line
The sum of the measures of adjacent angles on a straight line is 180°.

**Proof**:
When a ray stands on a straight line, it divides the straight angle (180°) into two adjacent angles whose sum equals 180°.

### Theorem 2: Vertically Opposite Angles
Vertically opposite angles formed by the intersection of two lines are equal.

**Proof**:
As demonstrated earlier, using the properties of linear pairs.

### Theorem 3: Angles in a Triangle
The sum of all angles in a triangle is 180°.

**Proof**:
Draw a line through one vertex of the triangle, parallel to the opposite side. This creates a straight angle at the vertex, using corresponding angles with the other two angles of the triangle.

## Practical Applications of Angle Pairs 🌍

### Architecture and Construction
Architects and engineers use angle relationships to ensure structural stability, proper alignment, and aesthetic appeal in buildings. Complementary and supplementary angles are especially important in designing stable structures.

### Navigation and Surveying
Surveyors use angle relationships to accurately measure land boundaries, elevation changes, and to create precise maps. The concepts of complementary and supplementary angles help in triangulation methods.

### Art and Design
Artists use angle relationships to create perspective, balance, and harmony in their works. The Golden Ratio, which involves specific angle relationships, has been used in art and architecture for centuries.

### Mechanical Engineering
Gears, levers, and other mechanical components rely on precise angle relationships for proper operation. The angles between moving parts determine the direction, speed, and force of motion.

## Summary ✍️

We've explored various types of angle pairs and their properties:

1. **Complementary Angles**: Sum to 90°
2. **Supplementary Angles**: Sum to 180°
3. **Adjacent Angles**: Share a vertex and a side
4. **Linear Pair**: Adjacent angles that form a straight line (sum to 180°)
5. **Vertically Opposite Angles**: Formed by intersecting lines; equal in measure
6. **Angles with Parallel Lines**: Create special relationships like corresponding, alternate, and co-interior angles

Understanding these relationships is fundamental to solving geometric problems and has numerous applications in everyday life, from construction and engineering to art and navigation. 📐

In the next topic, we'll explore the fascinating world of triangles, where these angle relationships play a crucial role in determining the properties and classifications of these three-sided shapes.
`,
quiz: {
   questions: [
     ...easyQuestions,
     ...mediumQuestions
   ]
 }
};
