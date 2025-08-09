// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 9\Chapter9\Topic2\content.ts
import { TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic2Content: TopicContent = {
  id: 'cl9_ch9_t2',
  topicNumber: 2,
  topicName: "Perpendicular from the Centre to a Chord",
  duration: 45,
  description: "Understanding the relationship between the perpendicular from the center of a circle to a chord and its properties",
  explanation: `
# Perpendicular from the Centre to a Chord 📏⭕

The relationship between a circle's center and its chords reveals beautiful geometric properties! In this topic, we'll explore what happens when we draw a perpendicular line from the center of a circle to any chord. This concept is fundamental in circle geometry and has many practical applications. Let's dive in! 🚀

## What Happens When We Draw a Perpendicular? 🤔

When we draw a perpendicular line from the center of a circle to a chord, something remarkable happens:

**Key Theorem**: The perpendicular from the center of a circle to a chord bisects the chord.

In other words, if O is the center of a circle and AB is any chord, then the perpendicular from O to AB meets AB at point M such that:
- AM = MB (M is the midpoint of chord AB)

This seemingly simple relationship has profound implications in geometry! ✨

## Visual Understanding 👁️

Imagine a circle with center O:
- Draw any chord AB (not passing through O)
- Draw line segment OM perpendicular to AB
- Point M divides AB into two equal parts: AM = MB

![Circle with perpendicular from center to chord]

## Mathematical Proof 🧮

Let's prove this theorem using coordinate geometry:

1. Place the circle with center O at the origin (0,0)
2. Let the radius be r
3. Let AB be any chord, and M be the point where perpendicular from O meets AB

Since M lies on the perpendicular from O to AB:
- OM ⊥ AB
- Triangles OMA and OMB both have:
  * OM as a common side
  * OA = OB = r (both are radii)
  * ∠OMA = ∠OMB = 90° (perpendicular lines form right angles)

By the RHS congruence criterion (Right angle, Hypotenuse, Side):
- Triangle OMA ≅ Triangle OMB
- Therefore, AM = MB (corresponding parts of congruent triangles)

This proves that M is the midpoint of chord AB! ✓

## Important Corollaries 🌟

From this fundamental theorem, several important results follow:

1. **Corollary 1**: The perpendicular from the center of a circle to a chord is the shortest distance from the center to the chord.
   
   This is because the shortest distance from a point to a line is always along the perpendicular from the point to the line.

2. **Corollary 2**: The line joining the center of a circle to the midpoint of a chord is perpendicular to the chord.
   
   This is the converse of our main theorem and is also true.

3. **Corollary 3**: If two chords of a circle are equal, then they are equidistant from the center.
   
   This means that if AB and CD are two equal chords, and OM and ON are perpendiculars from the center O to these chords, then OM = ON.

## Relating Chord Length to Distance from Center 📊

There's a beautiful relationship between:
- The length of a chord (let's call it c)
- The distance from the center to the chord (let's call it d)
- The radius of the circle (r)

The formula is:
c = 2√(r² - d²)

This means if we know the radius and the distance from the center to any chord, we can calculate the chord's length without measuring it directly!

## Application in Problem-Solving 🛠️

### Example 1: Finding Chord Length
In a circle with radius 5 cm, if a chord is at a distance of 3 cm from the center, what is the length of the chord?

**Solution**:
Using our formula: c = 2√(r² - d²)
c = 2√(5² - 3²)
c = 2√(25 - 9)
c = 2√16
c = 2 × 4
c = 8 cm

Therefore, the chord length is 8 cm. ✓

### Example 2: Finding Distance to Chord
In a circle with radius 10 cm, what is the distance from the center to a chord of length 12 cm?

**Solution**:
We have c = 12 cm and r = 10 cm.
Using our formula: c = 2√(r² - d²)
12 = 2√(10² - d²)
6 = √(100 - d²)
36 = 100 - d²
d² = 64
d = 8 cm

Therefore, the distance from the center to the chord is 8 cm. ✓

## Real-world Applications 🌎

This geometric principle has numerous practical applications:

1. **Architecture and Engineering**: When designing arched structures or circular components, engineers use these relationships to ensure stability and proper measurements.

2. **Astronomy**: When calculating distances and sizes of celestial bodies, astronomers apply these principles to measurements made through optical instruments.

3. **Physics**: In optics, these relationships help understand the reflection and refraction of light through curved surfaces.

4. **Surveying and Navigation**: These principles are used in determining distances and positions when working with circular arcs or paths.

## Practice Problems 💪

1. In a circle with radius 13 cm, a chord has length 10 cm. Find the distance from the center to the chord.

2. Two chords of lengths 8 cm and 6 cm are drawn in a circle of radius 5 cm. Which chord is closer to the center and by how much?

3. In a circle, if the distance from the center to a chord is half the radius, what is the ratio of the chord length to the diameter?

4. A chord of length 16 cm is drawn in a circle of radius 10 cm. Find the distance from the center to the chord.

5. Two chords are drawn on opposite sides of the center of a circle with radius 17 cm. If the distance from the center to each chord is 8 cm, find the length of each chord.

## Solutions to Practice Problems ✅

1. Using c = 2√(r² - d²):
   10 = 2√(13² - d²)
   5 = √(169 - d²)
   25 = 169 - d²
   d² = 144
   d = 12 cm

2. For the 8 cm chord:
   8 = 2√(5² - d₁²)
   4 = √(25 - d₁²)
   16 = 25 - d₁²
   d₁² = 9
   d₁ = 3 cm

   For the 6 cm chord:
   6 = 2√(5² - d₂²)
   3 = √(25 - d₂²)
   9 = 25 - d₂²
   d₂² = 16
   d₂ = 4 cm

   The 8 cm chord is closer by 1 cm.

3. If d = r/2, then:
   c = 2√(r² - (r/2)²)
   c = 2√(r² - r²/4)
   c = 2√(3r²/4)
   c = 2r√3/2
   c = r√3

   The ratio of chord length to diameter is √3/2.

4. Using c = 2√(r² - d²):
   16 = 2√(10² - d²)
   8 = √(100 - d²)
   64 = 100 - d²
   d² = 36
   d = 6 cm

5. Using c = 2√(r² - d²) with r = 17 and d = 8:
   c = 2√(17² - 8²)
   c = 2√(289 - 64)
   c = 2√225
   c = 2 × 15
   c = 30 cm

   Both chords are 30 cm long.

## Extensions to Three Dimensions 🌌

In three-dimensional space, this concept extends to spheres as well. The perpendicular from the center of a sphere to a plane that intersects the sphere (creating a circular section) passes through the center of that circular section.

## Key Points to Remember 📝

1. **The Main Theorem**: The perpendicular from the center of a circle to a chord bisects the chord.

2. **Distance Formula**: For a chord of length c at distance d from the center of a circle with radius r:
   c = 2√(r² - d²)

3. **Converse**: If a line passes through the midpoint of a chord and the center of the circle, it is perpendicular to the chord.

4. **Equal Chords**: Chords of equal length are equidistant from the center of the circle.

5. **Shortest Distance**: The perpendicular from the center to a chord represents the shortest distance from the center to any point on that chord.

## Summary 🔍

The perpendicular from the center of a circle to a chord bisects the chord. This fundamental property allows us to establish relationships between chord lengths and their distances from the center of the circle.

Understanding this concept helps solve a variety of geometric problems related to circles and has practical applications in many fields, including engineering, astronomy, and physics.

By mastering this topic, you've gained an important tool for analyzing and working with circles, one of the most perfect and beautiful shapes in mathematics! ⭕✨
`,
  quiz: {
    questions: [
      ...easyQuestions,
      ...mediumQuestions
    ]
  }
};
