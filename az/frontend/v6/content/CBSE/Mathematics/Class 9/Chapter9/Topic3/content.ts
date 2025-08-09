// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 9\Chapter9\Topic3\content.ts
// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 9\Chapter9\Topic3\content.ts
// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 9\Chapter9\Topic3\content.ts
import { TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic3Content: TopicContent = {
  id: 'cl9_ch9_t3',
  topicNumber: 3,
  topicName: "Equal Chords and their Distances from the Centre",
  duration: 45,
  description: "Understanding the relationship between equal chords of a circle and their distances from the center, along with applications and related theorems.",
  explanation: `
# Equal Chords and their Distances from the Centre 🔵

In our study of circles, we've discovered several fascinating properties about chords and their relationships with the center of the circle. One particularly elegant relationship exists between equal chords and their distances from the center. This relationship reveals the beautiful symmetry inherent in circles and has numerous applications in geometry! 🌟

## The Fundamental Theorem of Equal Chords 📜

**Theorem Statement:** Equal chords of a circle are equidistant from the center of the circle.

**Converse:** Chords that are equidistant from the center of a circle are equal in length.

These twin statements form the core of our understanding of equal chords in circles. Let's explore what they mean and why they're true! 🔍

## Visual Understanding 👁️

Imagine a circle with center O and two chords AB and CD that are equal in length. If we draw perpendiculars from O to these chords (let's call them OM and ON respectively), then according to our theorem:
- OM = ON (The perpendicular distances are equal)

Conversely, if we have two chords PQ and RS where the perpendicular distances from the center (OU and OV) are equal, then:
- PQ = RS (The chord lengths are equal)

## Mathematical Proof 🧮

Let's prove that equal chords are equidistant from the center:

**Given:**
- A circle with center O
- Two chords AB and CD such that AB = CD

**To Prove:**
- The perpendicular distances from O to AB and CD are equal

**Proof:**
1. Draw perpendiculars OM and ON from O to chords AB and CD respectively
2. By the perpendicular from center to chord theorem, M is the midpoint of AB and N is the midpoint of CD
3. So AM = MB = AB/2 and CN = ND = CD/2
4. Since AB = CD, we have AM = CN
5. Consider the right triangles OAM and OCN:
   - OA = OC (radii of the same circle)
   - AM = CN (as proven above)
   - ∠OAM = ∠OCN = 90° (perpendicular angles)
6. By the RHS congruence criterion, triangles OAM and OCN are congruent
7. Therefore, OM = ON (corresponding parts of congruent triangles are equal)

This proves that equal chords are equidistant from the center.

The converse can be proven similarly, working backwards from equal distances to show that the chords must be equal in length. ✓

## Important Relationships and Formulas 🧩

### Chord Length and Distance Formula

For a chord at a distance d from the center of a circle with radius r, the chord length c is given by:

c = 2√(r² - d²)

This relationship helps us calculate:
- Chord length when we know the radius and distance from center
- Distance from center when we know the radius and chord length
- Radius when we know the chord length and distance from center

### Equal Chord Relationships

If two chords AB and CD are equal, then:
1. They are equidistant from the center
2. They subtend equal angles at the center
3. The arcs cut off by them are equal
4. The corresponding minor segments are equal in area

## Applications and Examples 📚

### Example 1: Finding the Distance from Center for Equal Chords

**Problem:** In a circle with radius 13 cm, two equal chords each have a length of 24 cm. What is the distance of each chord from the center?

**Solution:**
Using the formula d = √(r² - (c/2)²):
d = √(13² - (24/2)²)
d = √(169 - 144)
d = √25
d = 5 cm

Therefore, each chord is at a distance of 5 cm from the center. 📏

### Example 2: Finding the Length of an Equidistant Chord

**Problem:** In a circle with radius 10 cm, there is a chord AB at a distance of 6 cm from the center. If chord CD is also at a distance of 6 cm from the center, what is the length of CD?

**Solution:**
Since both chords are equidistant from the center, they have the same length.
To find this length, we use the formula c = 2√(r² - d²):
c = 2√(10² - 6²)
c = 2√(100 - 36)
c = 2√64
c = 2 × 8
c = 16 cm

Therefore, CD = 16 cm, the same as AB. 📊

### Example 3: Equal Chords in Concentric Circles

**Problem:** In concentric circles with center O and radii 9 cm and 15 cm respectively, a chord AB of the larger circle is tangent to the smaller circle. What is the length of AB?

**Solution:**
When a chord of a circle is tangent to an inner concentric circle, the distance from the center to the chord equals the radius of the inner circle.
So d = 9 cm and r = 15 cm.
Using the chord length formula:
AB = 2√(r² - d²)
AB = 2√(15² - 9²)
AB = 2√(225 - 81)
AB = 2√144
AB = 2 × 12
AB = 24 cm 🔄

## Practical Applications 🌍

The relationships between equal chords and their distances from the center find practical applications in:

1. **Architecture and Design**: When designing circular structures with symmetrically placed elements.

2. **Engineering**: In the design of circular mechanical components like gears, wheels, and bearings where balance is crucial.

3. **Optics**: Understanding how light rays interact with circular lenses and mirrors.

4. **Satellite Dish Design**: Calculating the focal point for parabolic dishes which utilize principles related to equal chords.

## Extensions and Related Concepts ➕

### Relationship with Perpendicular Bisectors

The perpendicular bisector of any chord passes through the center of the circle. This can be used to locate the center of a circle when only a portion of the circumference is available.

### Equal Chords and Equal Arcs

Equal chords in a circle subtend equal arcs. This property links the concept of equal chords to the concept of equal arcs and central angles.

### Equal Chords in Concentric Circles

In concentric circles (circles with the same center but different radii), if chords of the outer circle are tangent to the inner circle, all such chords are equal in length.

## Common Questions and Misconceptions ❓

### Question 1: If two chords have the same length, are they necessarily symmetrically placed in the circle?

**Answer**: No, equal chords need not be symmetrically placed around the center. They can be placed anywhere in the circle as long as they are the same distance from the center.

### Question 2: Can equal chords be at different distances from the center?

**Answer**: No, equal chords must be equidistant from the center. This is a fundamental property that follows from the geometry of circles.

### Question 3: Is the converse true? If two chords are equidistant from the center, are they equal?

**Answer**: Yes, the converse is true. Chords equidistant from the center must have the same length, as proven by the converse theorem.

## Practice Problems 💪

1. In a circle with radius 17 cm, find the length of a chord that is at a distance of 8 cm from the center.

2. Two chords of a circle are 24 cm and 10 cm in length. If the radius of the circle is 13 cm, find the difference between their distances from the center.

3. In a circle, two parallel chords on the same side of the center have lengths 16 cm and 24 cm. If the radius is 13 cm, find the distance between the chords.

4. A chord of a circle is at a distance of d from the center. Find the length of another chord that is at a distance of 2d from the center, assuming both chords exist in the circle.

## Summary ✨

The relationship between equal chords and their distances from the center reveals fundamental properties of circles:

1. **Equal Chords Theorem**: Equal chords of a circle are equidistant from the center.

2. **Converse Theorem**: Chords equidistant from the center are equal in length.

3. **Mathematical Formula**: For a chord at distance d from the center of a circle with radius r, the chord length c = 2√(r² - d²).

4. **Practical Applications**: These principles have applications in architecture, engineering, optics, and design where circular symmetry is important.

5. **Related Properties**: Equal chords subtend equal arcs and angles at the center, creating connections to other aspects of circle geometry.

Understanding these relationships enhances our appreciation of the geometric elegance of circles and provides powerful tools for solving practical problems involving circular shapes. The symmetry between chord length and distance from center exemplifies the harmonious mathematical patterns found in geometric figures! 🔄🔵
`,
  quiz: {
    questions: [
      ...easyQuestions,
      ...mediumQuestions
    ]
  }
};
