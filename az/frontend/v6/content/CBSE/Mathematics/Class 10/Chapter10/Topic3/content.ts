import { TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic3Content: TopicContent = {
  id: 'cl10_ch10_t3',
  topicNumber: 3,
  topicName: "Properties of tangents",
  duration: 45,
  description: "Understanding the key properties of tangents to a circle, including relationships with radii, tangent-chord properties, and applications in problem-solving.",
  explanation: `
# Properties of Tangents to a Circle 🔄

In geometry, a tangent is a straight line that touches a circle at exactly one point and doesn't cut through it. This single point of contact is called the point of tangency. The properties of tangents are foundational to many advanced geometric concepts and have numerous real-world applications. Let's explore the key properties and theorems related to tangents! 📏

## Fundamental Properties of Tangents 🔍

### 1. Tangent-Radius Relationship ⊥
- **Property**: The tangent to a circle at any point is perpendicular to the radius drawn to the point of tangency.
- **Mathematical Expression**: If OA is a radius to point A, and AT is the tangent at A, then OA ⊥ AT.
- **Proof**: Consider any point P on the tangent (except A). OP > OA (since O is the center and A is on the circle). This means A is the point on the tangent closest to O. The shortest distance from a point to a line is along the perpendicular to the line. Therefore, OA ⊥ AT.
- **Example**: If a circle has its center at (0, 0) with radius 5 units, and a tangent is drawn at point (3, 4) on the circle, the slope of the radius is 4/3, and the slope of the tangent is -3/4 (the negative reciprocal, confirming perpendicularity).

### 2. Tangents from an External Point 👆
- **Property**: The lengths of the two tangents drawn from an external point to a circle are equal.
- **Mathematical Expression**: If PA and PB are tangents from external point P to a circle with center O, then PA = PB.
- **Proof**: In the triangles OPA and OPB: OA = OB (radii), OP is common, and ∠OAP = ∠OBP = 90° (tangent-radius property). By the RHS (Right angle-Hypotenuse-Side) congruence criterion, the triangles are congruent. Therefore, PA = PB.
- **Example**: If tangents are drawn from a point 13 cm away from the center of a circle with radius 5 cm, both tangents will have the same length of 12 cm (using Pythagoras theorem).

### 3. Tangent-Chord Property 🔄
- **Property**: If a tangent is drawn at point P on a circle, and a chord PQ is drawn from P, then the angle between the tangent and the chord equals the angle in the alternate segment.
- **Mathematical Expression**: If PT is a tangent at P and PQ is a chord, then ∠TPQ = angle in alternate segment (∠PQR where R is any point on the arc not containing P).
- **Proof**: This follows from the properties of inscribed angles and the fact that the tangent makes a 90° angle with the radius.
- **Example**: If a tangent at point P makes a 40° angle with chord PQ, then any angle inscribed in the alternate segment (the arc containing Q) will also be 40°.

## Advanced Properties and Relationships 📐

### 1. Tangents from External Point and Center 🔍
- **Property**: If PA and PB are tangents from point P to a circle with center O, then P, O, and the midpoint of the arc AB lie in a straight line.
- **Proof**: Due to the equal tangent property, PA = PB. The perpendicular from O to the tangent at A passes through A, and similarly at B. The angle bisector of ∠APB passes through O, and this bisector also contains the midpoint of arc AB.
- **Application**: This property helps in constructing tangents to a circle from an external point.

### 2. Common Tangents to Two Circles 🔄
- **Direct Common Tangents**: These don't cross the line joining the centers. Two non-intersecting circles have two direct common tangents.
- **Transverse Common Tangents**: These cross the line joining the centers. The number depends on the relative sizes and positions of the circles.
- **Formula**: If the circles have radii r₁ and r₂, and the distance between their centers is d:
  * Number of common tangents = 4 if d > r₁ + r₂ (separate circles)
  * Number of common tangents = 3 if d = r₁ + r₂ (externally touching)
  * Number of common tangents = 2 if r₁ - r₂ < d < r₁ + r₂ (intersecting)
  * Number of common tangents = 1 if d = r₁ - r₂ (internally touching)
  * Number of common tangents = 0 if d < r₁ - r₂ (one inside another)
- **Example**: Two circles with radii 5 cm and 3 cm, whose centers are 10 cm apart, have 4 common tangents (2 direct and 2 transverse).

### 3. Angle Between Two Tangents 📐
- **Property**: If two tangents are drawn from an external point P to a circle with center O, then ∠APO = ∠BPO = ½∠APB (where A and B are the points of tangency).
- **Proof**: Since OA ⊥ PA and OB ⊥ PB, triangles OPA and OPB are right-angled. Using trigonometric relationships, we can derive the formula.
- **Example**: If the angle between two tangents from point P is 60°, then each makes a 30° angle with the line joining P to the center.

## Practical Applications 💼

### Geometric Constructions 📐
- **Construction of Tangent from External Point**: Using the properties of equal tangents and right angles, we can construct tangents to a circle from a point outside it.
- **Construction of Tangent at a Point on Circle**: By drawing a radius to the point and then constructing a perpendicular to this radius at that point.

### Problem-Solving Strategies 🧩
1. **Recognize the Right Angle**: Whenever a tangent is involved, there's a right angle at the point of tangency with the radius.
2. **Use Pythagoras Theorem**: In problems involving tangent length, the tangent-radius-center forms a right triangle.
3. **Apply Equal Tangents Property**: When dealing with two tangents from the same external point, use the equality of their lengths.

### Real-World Applications 🌍
- **Optical Properties**: Tangents explain light reflection principles in curved mirrors.
- **Design and Engineering**: Understanding tangents helps in designing curved roads, railway tracks, and architectural elements.
- **Navigation**: Ships and aircraft use tangent principles when plotting courses around spherical obstacles or calculating distances.

## Sample Problems and Solutions 📝

### Problem 1:
Two tangents PA and PB are drawn to a circle with center O from an external point P. If ∠APB = 70°, find ∠AOB.

**Solution**:
We know that in the quadrilateral OAPB:
- OA and OB are radii
- PA and PB are tangents, so ∠OAP = ∠OBP = 90°
- The sum of angles in a quadrilateral is 360°
- So, 90° + 90° + 70° + ∠AOB = 360°
- Therefore, ∠AOB = 360° - 250° = 110°

### Problem 2:
A point P is 13 cm from the center O of a circle of radius 5 cm. The length of the tangent drawn from P to the circle is:

**Solution**:
Using the Pythagorean theorem in the right triangle formed by the center, the point of tangency, and the external point:
OP² = OT² + PT²
13² = 5² + PT²
169 = 25 + PT²
PT² = 144
PT = 12 cm

So, the length of the tangent is 12 cm.

### Problem 3:
Two concentric circles have radii 5 cm and 13 cm. Find the length of a chord of the larger circle that is tangent to the smaller circle.

**Solution**:
If a chord AB of the larger circle is tangent to the smaller circle at point T:
- The perpendicular from the center O to AB passes through T
- The distance from O to AB is 5 cm (radius of smaller circle)
- Using the formula: chord length = 2√(R² - d²) where R is the radius of larger circle and d is the perpendicular distance
- Chord length = 2√(13² - 5²) = 2√(169 - 25) = 2√144 = 2 × 12 = 24 cm

## Additional Properties and Theorems 🌟

### The Alternate Segment Theorem ⚡
- If a tangent is drawn at a point P on a circle, and a chord PQ is drawn, then the angle between the tangent and the chord equals the inscribed angle in the alternate segment.
- This property is particularly useful in proving relationships in cyclic quadrilaterals.

### Tangent-Secant Theorem 🔍
- If from an external point P, a tangent PT and a secant PAB are drawn to a circle, then PT² = PA × PB.
- This relationship helps in calculating lengths when both tangents and secants are involved.

### Tangents to Intersecting Circles 🔄
- When two circles intersect, the two tangents drawn at their points of intersection are either parallel to each other or they intersect at the radical axis of the circles.
- This property is essential in the theory of radical axes and power of a point.

## Summary ✨

The properties of tangents to circles form a crucial part of Euclidean geometry and have wide-ranging applications. Here's a quick recap:

1. **Fundamental Property**: A tangent to a circle is perpendicular to the radius at the point of tangency.
2. **Equal Tangents**: Tangents from an external point to a circle are equal in length.
3. **Tangent-Chord Angle**: The angle between a tangent and chord equals the inscribed angle in the alternate segment.
4. **Common Tangents**: The number of common tangents to two circles depends on their relative positions and sizes.
5. **Angle Properties**: Various relationships exist between angles formed by tangents, radii, and lines joining external points to the center.

Understanding these properties enables us to solve complex geometric problems involving circles and tangents, making them an essential tool in mathematics and its applications in the real world. 🌟

### Quick Check Questions:
1. What is the angle between a tangent and the radius at the point of contact? (Answer: 90°)
2. How many tangents can be drawn from a point outside a circle? (Answer: 2)
3. If tangents PA and PB are drawn from an external point P to a circle, what can you say about PA and PB? (Answer: PA = PB)
4. How many tangents can be drawn to a circle from a point on the circle? (Answer: 1)
5. What is the maximum number of common tangents to two circles? (Answer: 4)
`,
  quiz: {
    questions: [
      ...easyQuestions,
      ...mediumQuestions
    ]
  }
};
