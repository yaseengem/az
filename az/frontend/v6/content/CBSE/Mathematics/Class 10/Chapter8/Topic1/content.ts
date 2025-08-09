import { generateId } from '../../../../../../app/utils/idGenerator';
import { QuizQuestion, TopicQuiz, TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic1Content: TopicContent = {
  id: 'cl10_ch8_t1',
  topicNumber: 1,
  topicName: "Trigonometric Ratios",
  duration: 45,
  description: "Introduction to trigonometric ratios in right-angled triangles, their values for standard angles, and fundamental trigonometric identities",
  explanation: `
# Trigonometric Ratios 📐

Trigonometry is the branch of mathematics that studies relationships between side lengths and angles of triangles. The word "trigonometry" comes from the Greek words "trigonon" (triangle) and "metron" (measure). Let's dive into the fascinating world of trigonometric ratios! 🌟

## Introduction to Trigonometric Ratios 🔍

Trigonometric ratios are the relationships between the sides of a right-angled triangle with respect to its angles. These ratios are fundamental to solving problems involving triangles and have applications in various fields, from construction to physics to computer graphics.

### The Right-Angled Triangle 📏

In a right-angled triangle:
- One angle is exactly 90° (right angle)
- The side opposite to the right angle is called the **hypotenuse** (the longest side)
- The other two sides are called **adjacent** or **opposite** depending on which angle we're referring to

Let's consider a right-angled triangle with an angle θ:
- **Hypotenuse (h)**: The side opposite to the right angle
- **Adjacent side (a)**: The side adjacent to angle θ (excluding the hypotenuse)
- **Opposite side (o)**: The side opposite to angle θ

## The Six Trigonometric Ratios 🧮

For an angle θ in a right-angled triangle, we define six trigonometric ratios:

1. **Sine (sin)**: 
   - sin θ = Opposite side / Hypotenuse = o/h
   - Measures the ratio of the opposite side to the hypotenuse

2. **Cosine (cos)**:
   - cos θ = Adjacent side / Hypotenuse = a/h
   - Measures the ratio of the adjacent side to the hypotenuse

3. **Tangent (tan)**:
   - tan θ = Opposite side / Adjacent side = o/a
   - Measures the ratio of the opposite side to the adjacent side

4. **Cosecant (cosec)**:
   - cosec θ = Hypotenuse / Opposite side = h/o = 1/sin θ
   - Reciprocal of sine

5. **Secant (sec)**:
   - sec θ = Hypotenuse / Adjacent side = h/a = 1/cos θ
   - Reciprocal of cosine

6. **Cotangent (cot)**:
   - cot θ = Adjacent side / Opposite side = a/o = 1/tan θ
   - Reciprocal of tangent

### Example 1: 🌟
In a right-angled triangle, if the sides adjacent to the right angle are 3 cm and 4 cm, find all six trigonometric ratios for the angle θ opposite to the 4 cm side.

**Solution**:
First, let's identify the sides:
- Hypotenuse (h) = √(3² + 4²) = √25 = 5 cm (using the Pythagorean theorem)
- Adjacent side (a) = 4 cm (adjacent to angle θ)
- Opposite side (o) = 3 cm (opposite to angle θ)

Now, calculate the trigonometric ratios:
- sin θ = o/h = 3/5
- cos θ = a/h = 4/5
- tan θ = o/a = 3/4
- cosec θ = h/o = 5/3
- sec θ = h/a = 5/4
- cot θ = a/o = 4/3

## Trigonometric Ratios for Standard Angles 📊

It's essential to memorize the trigonometric ratios for standard angles (0°, 30°, 45°, 60°, and 90°) as they are frequently used.

| Angle | sin | cos | tan | cosec | sec | cot |
|-------|-----|-----|-----|-------|-----|-----|
| 0°    | 0   | 1   | 0   | ∞     | 1   | ∞   |
| 30°   | 1/2 | √3/2| 1/√3| 2     | 2/√3| √3  |
| 45°   | 1/√2| 1/√2| 1   | √2    | √2  | 1   |
| 60°   | √3/2| 1/2 | √3  | 2/√3  | 2   | 1/√3|
| 90°   | 1   | 0   | ∞   | 1     | ∞   | 0   |

### Example 2: 🌟
Find the value of sin 30° × cos 60° + cos 30° × sin 60°.

**Solution**:
sin 30° × cos 60° + cos 30° × sin 60°
= (1/2) × (1/2) + (√3/2) × (√3/2)
= 1/4 + 3/4
= 1

Interestingly, this equals sin 90° = 1, which is not a coincidence! This is an example of the sine addition formula: sin(A + B) = sin A cos B + cos A sin B.

## Fundamental Trigonometric Identities ⚖️

These identities are relationships between trigonometric ratios that are true for all values of θ where the ratios are defined:

1. **Pythagorean Identities**:
   - sin²θ + cos²θ = 1
   - 1 + tan²θ = sec²θ
   - 1 + cot²θ = cosec²θ

2. **Quotient Identities**:
   - tan θ = sin θ / cos θ
   - cot θ = cos θ / sin θ

3. **Reciprocal Identities**:
   - cosec θ = 1 / sin θ
   - sec θ = 1 / cos θ
   - cot θ = 1 / tan θ

### Example 3: 🌟
Verify that sin²θ + cos²θ = 1 for θ = 45°.

**Solution**:
For θ = 45°:
- sin 45° = 1/√2
- cos 45° = 1/√2

Now, sin²45° + cos²45° = (1/√2)² + (1/√2)² = 1/2 + 1/2 = 1 ✓

## Trigonometric Ratios in Different Quadrants 🌐

The signs of trigonometric ratios depend on the quadrant in which the angle lies:

| Quadrant | Angle Range | sin | cos | tan |
|----------|-------------|-----|-----|-----|
| I        | 0° to 90°   | +   | +   | +   |
| II       | 90° to 180° | +   | -   | -   |
| III      | 180° to 270°| -   | -   | +   |
| IV       | 270° to 360°| -   | +   | -   |

A helpful mnemonic to remember this is "All Students Take Calculus" (All trigonometric functions are positive in the first quadrant, Sine is positive in the second quadrant, Tangent is positive in the third, and Cosine is positive in the fourth).

### Example 4: 🌟
If sin θ = 3/5 and θ is in the second quadrant, find cos θ and tan θ.

**Solution**:
Since sin θ = 3/5, we know:
- sin²θ + cos²θ = 1
- cos²θ = 1 - sin²θ = 1 - (3/5)² = 1 - 9/25 = 16/25
- cos θ = ±4/5

Since θ is in the second quadrant, cos θ is negative, so cos θ = -4/5.
Now, tan θ = sin θ / cos θ = (3/5) / (-4/5) = -3/4.

## Applications of Trigonometric Ratios 🏗️

Trigonometric ratios have countless practical applications:

1. **Height and Distance Calculation**:
   - Finding the height of tall structures
   - Measuring distances that can't be directly measured
   - Navigation and surveying

2. **Engineering and Physics**:
   - Analyzing forces in structures
   - Describing wave motion
   - Resolving vectors

3. **Computer Graphics**:
   - Rotation and transformation of objects
   - Creating realistic animations
   - Game development

### Example 5: 🌟
From a point on the ground 20 meters away from the base of a tower, the angle of elevation to the top of the tower is 30°. Find the height of the tower.

**Solution**:
Let the height of the tower be h meters.
Using tan 30° = h / 20
h = 20 × tan 30° = 20 × (1/√3) ≈ 11.55 meters

## Complementary Angles and Their Trigonometric Ratios 🔄

For complementary angles (angles that sum to 90°), the following relationships hold:
- sin θ = cos(90° - θ)
- cos θ = sin(90° - θ)
- tan θ = cot(90° - θ)
- cot θ = tan(90° - θ)
- sec θ = cosec(90° - θ)
- cosec θ = sec(90° - θ)

### Example 6: 🌟
Verify that sin 60° = cos 30°.

**Solution**:
- sin 60° = √3/2
- cos 30° = √3/2

Therefore, sin 60° = cos 30° ✓
This is expected because 60° and 30° are complementary angles (60° + 30° = 90°).

## Summary ✨

Trigonometric ratios are powerful mathematical tools that relate the sides of a right-angled triangle to its angles. Here's a recap:

- The six trigonometric ratios (sin, cos, tan, cosec, sec, cot) provide different ways to relate sides of a right-angled triangle.
- Standard angles (0°, 30°, 45°, 60°, 90°) have specific values for these ratios that are useful to memorize.
- Fundamental identities like sin²θ + cos²θ = 1 help in simplifying and solving trigonometric expressions.
- The signs of trigonometric ratios depend on the quadrant in which the angle lies.
- Complementary angles have related trigonometric values.

Understanding trigonometric ratios is crucial for advanced mathematical concepts and has widespread practical applications in various fields.

### Additional Sample Questions:

1. **Question**: In a right-angled triangle, if one of the acute angles is 60°, what is the other acute angle?
   **Answer**: 30° (Since angles in a triangle sum to 180°, and one angle is 90°, the other two must sum to 90°).

2. **Question**: If sin θ = 12/13 and θ is acute, find the value of cos θ.
   **Answer**: 5/13 (Using sin²θ + cos²θ = 1)

3. **Question**: In which quadrant is the angle θ if sin θ < 0 and cos θ < 0?
   **Answer**: Third quadrant (where both sine and cosine are negative)

4. **Question**: If tan θ = 3/4, find the value of sin θ.
   **Answer**: 3/5 (Using tan θ = sin θ / cos θ and sin²θ + cos²θ = 1)

5. **Question**: Verify the identity: (1 - cos²θ) / sin²θ = 1.
   **Answer**: (1 - cos²θ) / sin²θ = sin²θ / sin²θ = 1 (Using sin²θ + cos²θ = 1)
`,
  quiz: {
    questions: [
      ...easyQuestions,
      ...mediumQuestions
    ]
  }
};
