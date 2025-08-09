import { TopicContent } from '../../../../../types';
import { questions as easyQuestions } from './quiz_easy';
import { questions as mediumQuestions } from './quiz_medium';

const content: TopicContent = {
  id: 'cl10_ch10_t1',
  topicNumber: 1,
  topicName: 'Tangent to a circle',
  duration: 60,
  description: 'Study of tangents to circles, their properties, and how to find the number of tangents from a point to a circle.',
  explanation: `# Tangent to a Circle

## Introduction 🔍
A tangent to a circle is a straight line that touches the circle at exactly one point. This point is called the point of tangency. Unlike a secant, which intersects a circle at two points, a tangent makes contact with the circle at precisely one point before continuing on its way.

## Basic Properties of Tangents ✨

### Property 1: Point of Contact
A tangent to a circle touches the circle at exactly one point. This single point of contact is what distinguishes tangents from other lines like secants (which intersect the circle at two points) or lines that don't touch the circle at all.

### Property 2: Perpendicular to Radius
The most fundamental property of a tangent is that it is **perpendicular to the radius** drawn to the point of contact. If O is the center of a circle and P is a point on the circle, then the tangent at P is perpendicular to OP.

*Example:* 
Consider a circle with center O and radius 5 cm. If we draw a tangent at point P on the circle, the angle between the tangent and the radius OP will be 90°.

### Property 3: Tangent-Radius Theorem
If a line is tangent to a circle, then the radius drawn to the point of tangency is perpendicular to the tangent. Conversely, if a line is perpendicular to a radius at its endpoint on the circle, then the line is a tangent to the circle.

*Example:* 
If we draw a radius OQ = 7 cm to a point Q on a circle, and draw a line perpendicular to OQ at Q, this line will be the tangent to the circle at Q.

## Tangents from an External Point 🌟

### Property 4: Equal Tangents
If from an external point P, two tangents PT and PS are drawn to a circle with center O, then:
1. The tangents are equal in length (PT = PS)
2. The tangents subtend equal angles at the center (∠OTP = ∠OSP = 90°)
3. The line joining the center to the external point bisects the angle between the tangent-radii (∠TOS)

*Example:*
From a point P that is 13 cm away from the center of a circle with radius 5 cm, two tangents are drawn touching the circle at points A and B. The length of each tangent is √(13² - 5²) = √(169 - 25) = √144 = 12 cm. Both PA and PB are equal, measuring 12 cm each.

### Property 5: Length of the Tangent
The length of the tangent from an external point P to a circle with center O and radius r is given by:
PT = √(OP² - r²), where T is the point of tangency.

*Example:*
If a point P is at a distance of 17 cm from the center of a circle with radius 8 cm, the length of the tangent from P to the circle is:
PT = √(17² - 8²) = √(289 - 64) = √225 = 15 cm

### Property 6: Angle Between Tangents
The angle between two tangents drawn from an external point P to a circle with center O is given by:
∠TPS = 2sin⁻¹(r/OP), where r is the radius and OP is the distance from P to O.

## Construction of Tangents 📐

### From a Point on the Circle
To construct a tangent at a point P on the circle:
1. Draw radius OP from the center O to the point P
2. Draw a line perpendicular to OP at P
3. This perpendicular line is the tangent at P

### From an External Point
To construct tangents from an external point P:
1. Join OP, where O is the center of the circle
2. Construct the perpendicular bisector of OP, which meets OP at M
3. With M as the center and MO as the radius, draw a circle
4. This circle will intersect the original circle at points T and S
5. Join PT and PS, these are the required tangents

## Common Tangents to Two Circles 🔄

When we have two circles, we can draw up to four common tangents depending on the relative positions of the circles:

1. **External Tangents**: These don't pass through the space between the circles
2. **Internal Tangents**: These pass through the space between the circles

The number of common tangents depends on how the circles are positioned:
- Two non-intersecting circles (no common points): 4 common tangents (2 external, 2 internal)
- Two touching circles (one common point): 3 common tangents (1 external, 2 internal)
- Two intersecting circles (two common points): 2 common tangents (both external)
- One circle inside another (no common points): 0 common tangents
- Two concentric circles (no common points): 0 common tangents

## Applications of Tangents 🌐

1. **Astronomy**: The concept of tangent lines is used in studying orbits of celestial bodies
2. **Optics**: In reflection and refraction of light
3. **Engineering**: In designing roads, railways, and pipelines that need to connect different circular paths
4. **Architecture**: In designing arches and domes

## Sample Problems and Solutions ✏️

### Problem 1:
A circle has a radius of 5 cm. Find the length of the tangent drawn to this circle from a point at a distance of 13 cm from its center.

**Solution:**
Let the center of the circle be O, the point be P, and the point of tangency be T.
Given: OP = 13 cm, radius = 5 cm
We need to find PT.
In the right-angled triangle OTP, OT = 5 cm, OP = 13 cm, and ∠OTP = 90° (tangent property)
Using Pythagoras theorem: PT² = OP² - OT² = 13² - 5² = 169 - 25 = 144
Therefore, PT = 12 cm

### Problem 2:
Two concentric circles have radii 5 cm and 3 cm. Find the length of the chord of the larger circle that touches the smaller circle.

**Solution:**
Let the common center be O, and let the chord AB of the larger circle touch the smaller circle at point P.
The perpendicular from O to chord AB passes through P.
Let OM be the perpendicular from O to AB, with M being the midpoint of AB.
Given: OP = 3 cm, OA = OB = 5 cm
In the right-angled triangle OAM: AM² = OA² - OM² = 5² - 3² = 25 - 9 = 16
Therefore, AM = 4 cm
Since AB = 2AM, the length of chord AB = 2 × 4 = 8 cm

### Problem 3:
From a point P which is at a distance of 13 cm from the center O of a circle of radius 5 cm, two tangents PQ and PR are drawn to the circle. Find the area of the quadrilateral PQOR.

**Solution:**
Since PQ and PR are tangents, ∠OQP = ∠ORP = 90°
Using the tangent-radius property: PQ = PR = √(OP² - r²) = √(13² - 5²) = √(169 - 25) = √144 = 12 cm
Area of quadrilateral PQOR = Area of triangle POQ + Area of triangle POR
Area of triangle POQ = (1/2) × OQ × PQ = (1/2) × 5 × 12 = 30 cm²
Area of triangle POR = (1/2) × OR × PR = (1/2) × 5 × 12 = 30 cm²
Therefore, Area of quadrilateral PQOR = 30 + 30 = 60 cm²

## Summary 📝

1. A tangent is a line that touches the circle at exactly one point
2. The tangent at any point of a circle is perpendicular to the radius through that point
3. From an external point, two tangents can be drawn to a circle, and they are equal in length
4. The length of the tangent from a point to a circle can be calculated using PT = √(OP² - r²)
5. The number of common tangents to two circles depends on their relative positions

Remember, tangents have practical applications in various fields including engineering, architecture, and astronomy. Understanding the properties of tangents helps us solve complex geometric problems involving circles and their interactions with lines and points in space.`,
  quiz: {
    questions: [...easyQuestions, ...mediumQuestions]
  }
};

export default content;
