import { generateId } from '../../../../../../app/utils/idGenerator';
import { QuizQuestion, TopicQuiz, TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic2Content: TopicContent = {
  id: 'cl10_ch8_t2',
  topicNumber: 2,
  topicName: "Trigonometric Identities",
  duration: 45,
  description: "Understanding fundamental trigonometric identities including Pythagorean identities, addition and subtraction formulas, and double angle formulas",
  explanation: `
# Trigonometric Identities 🔄

Trigonometric identities are equations involving trigonometric functions that are true for all values of the variables involved. These powerful tools help us solve complex trigonometric problems and establish relationships between different angles. Let's explore these fascinating equations! 📐

## Fundamental Identities: The Building Blocks 🧱

### The Pythagorean Identities 📏

The most fundamental trigonometric identity relates sine and cosine:

1. **sin²θ + cos²θ = 1** 

This identity is derived from the Pythagorean theorem applied to a unit circle. If we place angle θ in standard position on the unit circle, then the coordinates of the point on the circle are (cos θ, sin θ), and these coordinates satisfy x² + y² = 1.

From this primary identity, we can derive two more Pythagorean identities:

2. **1 + tan²θ = sec²θ**
   - Dividing the first identity by cos²θ: 
     sin²θ/cos²θ + cos²θ/cos²θ = 1/cos²θ
     tan²θ + 1 = sec²θ

3. **1 + cot²θ = csc²θ**
   - Dividing the first identity by sin²θ:
     sin²θ/sin²θ + cos²θ/sin²θ = 1/sin²θ
     1 + cot²θ = csc²θ

### Example: Using the Pythagorean Identity 💡
**Problem**: If cos θ = 3/5, find sin θ.
**Solution**: Using sin²θ + cos²θ = 1
sin²θ = 1 - cos²θ = 1 - (3/5)² = 1 - 9/25 = 16/25
Therefore, sin θ = ± 4/5
Since no quadrant information is given, both values are possible.

### Quotient Identities 📊

These identities establish relationships between different trigonometric functions:

4. **tan θ = sin θ / cos θ** 
5. **cot θ = cos θ / sin θ** 

### Reciprocal Identities 🔄

Each trigonometric function has a reciprocal function:

6. **sin θ = 1 / csc θ** (or csc θ = 1 / sin θ)
7. **cos θ = 1 / sec θ** (or sec θ = 1 / cos θ)
8. **tan θ = 1 / cot θ** (or cot θ = 1 / tan θ)

## Addition and Subtraction Formulas 🔢

These powerful formulas allow us to find trigonometric values of sums or differences of angles.

### Sine Formulas:
9. **sin(A + B) = sin A cos B + cos A sin B**
10. **sin(A - B) = sin A cos B - cos A sin B**

### Cosine Formulas:
11. **cos(A + B) = cos A cos B - sin A sin B**
12. **cos(A - B) = cos A cos B + sin A sin B**

### Tangent Formulas:
13. **tan(A + B) = (tan A + tan B) / (1 - tan A tan B)**
14. **tan(A - B) = (tan A - tan B) / (1 + tan A tan B)**

### Example: Finding sin(75°) 💡
**Problem**: Calculate sin(75°) using the addition formula.
**Solution**: 75° = 45° + 30°
sin(75°) = sin(45° + 30°)
         = sin 45° cos 30° + cos 45° sin 30°
         = (1/√2)(√3/2) + (1/√2)(1/2)
         = √3/2√2 + 1/2√2
         = (√3 + 1)/2√2
         ≈ 0.9659

## Double Angle Formulas 2️⃣

These formulas relate trigonometric functions of double angles to functions of the original angle.

15. **sin 2A = 2 sin A cos A**
16. **cos 2A = cos²A - sin²A = 2cos²A - 1 = 1 - 2sin²A**
17. **tan 2A = 2 tan A / (1 - tan²A)**

### Example: Finding cos 2A 💡
**Problem**: If sin A = 4/5 and A is in the first quadrant, find cos 2A.
**Solution**: 
First, we find cos A using the Pythagorean identity:
cos²A = 1 - sin²A = 1 - (4/5)² = 1 - 16/25 = 9/25
So cos A = 3/5 (since A is in first quadrant)

Using the double angle formula:
cos 2A = cos²A - sin²A = (3/5)² - (4/5)² = 9/25 - 16/25 = -7/25

## Triple Angle Formulas 3️⃣

These identities relate trigonometric functions of triple angles to functions of the original angle.

18. **sin 3A = 3 sin A - 4 sin³A**
19. **cos 3A = 4 cos³A - 3 cos A**

## Half Angle Formulas ½

These formulas are useful when we need to find trigonometric values of half angles.

20. **sin(A/2) = ±√[(1 - cos A)/2]**
21. **cos(A/2) = ±√[(1 + cos A)/2]**
22. **tan(A/2) = (1 - cos A)/sin A = sin A/(1 + cos A)**

The sign depends on the quadrant in which A/2 lies.

### Example: Finding sin(π/8) 💡
**Problem**: Calculate sin(π/8) using the half-angle formula.
**Solution**: π/8 = π/4 ÷ 2
Using the half-angle formula for sine:
sin(π/8) = √[(1 - cos(π/4))/2]
         = √[(1 - 1/√2)/2]
         = √[(1 - 1/√2)/2]
         = √[((√2 - 1)/√2)/2]
         = √[(√2 - 1)/2√2]
         = √(√2 - 1)/2
         ≈ 0.3827

## Product-to-Sum Formulas ✖️➡️➕

These formulas allow us to convert products of trigonometric functions to sums or differences.

23. **sin A sin B = ½[cos(A - B) - cos(A + B)]**
24. **cos A cos B = ½[cos(A - B) + cos(A + B)]**
25. **sin A cos B = ½[sin(A + B) + sin(A - B)]**

## Sum-to-Product Formulas ➕➡️✖️

These formulas convert sums or differences of trigonometric functions to products.

26. **sin A + sin B = 2 sin((A + B)/2) cos((A - B)/2)**
27. **sin A - sin B = 2 cos((A + B)/2) sin((A - B)/2)**
28. **cos A + cos B = 2 cos((A + B)/2) cos((A - B)/2)**
29. **cos A - cos B = -2 sin((A + B)/2) sin((A - B)/2)**

## Applications of Trigonometric Identities ✅

### 1. Simplifying Expressions

**Example**: Simplify sin³θ - cos³θ
**Solution**:
sin³θ - cos³θ = (sin θ - cos θ)(sin²θ + sin θ cos θ + cos²θ)
               = (sin θ - cos θ)(1 + sin θ cos θ)
               
### 2. Proving Other Identities

**Example**: Prove that (1 + tan θ)/(1 - tan θ) = (sec θ + tan θ)²
**Solution**:
Left side: (1 + tan θ)/(1 - tan θ) = [(1 + sin θ/cos θ)/(1 - sin θ/cos θ)] = [(cos θ + sin θ)/(cos θ - sin θ)]
Right side: (sec θ + tan θ)² = (1/cos θ + sin θ/cos θ)² = (1 + sin θ)²/cos²θ = (1 + sin θ)²/(1 - sin²θ) = (1 + sin θ)²/(1 + sin θ)(1 - sin θ) = (1 + sin θ)/(1 - sin θ) = (cos θ + sin θ)/(cos θ - sin θ)
Thus, both sides are equal.

### 3. Finding Trigonometric Values

**Example**: Find sin 15° using the difference formula.
**Solution**:
sin 15° = sin(45° - 30°)
        = sin 45° cos 30° - cos 45° sin 30°
        = (1/√2)(√3/2) - (1/√2)(1/2)
        = (√3 - 1)/2√2
        ≈ 0.2588

## Common Values to Memorize 📊

It's helpful to memorize the trigonometric values of common angles:

| Angle | 0° | 30° | 45° | 60° | 90° |
|-------|-----|------|------|------|-----|
| sin θ | 0  | 1/2 | 1/√2| √3/2| 1   |
| cos θ | 1  | √3/2| 1/√2| 1/2 | 0   |
| tan θ | 0  | 1/√3| 1   | √3  | Undef|

## Some Important Facts 💯

1. **Even and Odd Functions**:
   - Cosine and secant are even functions: f(-x) = f(x)
   - Sine, tangent, cosecant, and cotangent are odd functions: f(-x) = -f(x)

2. **Periodicity**:
   - Sine, cosine, secant, and cosecant have period 2π
   - Tangent and cotangent have period π

3. **Complementary Angles** (angles adding up to 90°):
   - sin(90° - θ) = cos θ
   - cos(90° - θ) = sin θ
   - tan(90° - θ) = cot θ

4. **Supplementary Angles** (angles adding up to 180°):
   - sin(180° - θ) = sin θ
   - cos(180° - θ) = -cos θ
   - tan(180° - θ) = -tan θ

## Sample Questions 📝

1. **Question**: If sin θ = 3/5 and θ is in the first quadrant, find the value of cos 2θ.
   **Answer**: First, find cos θ = 4/5. Then, using cos 2θ = cos²θ - sin²θ, we get cos 2θ = (4/5)² - (3/5)² = 16/25 - 9/25 = 7/25.
   
2. **Question**: Prove that: (sin A + cos A)² = 1 + 2 sin A cos A
   **Answer**: (sin A + cos A)² = sin²A + cos²A + 2sin A cos A = 1 + 2sin A cos A

3. **Question**: If sin C + cos C = √2 sin(C + π/4), prove that sin C cos C = 1/4
   **Answer**: Using the formula for sin(C + π/4), replace √2 sin(C + π/4) with sin C + cos C. Solve to find sin C cos C = 1/4.

## Summary ✨

Trigonometric identities are powerful mathematical tools that help us:

1. **Simplify complex expressions** 🔄
2. **Find trigonometric values at non-standard angles** 📏
3. **Solve trigonometric equations** 🧮
4. **Prove other mathematical relationships** ✅
5. **Apply to real-world problems involving triangles and periodic phenomena** 🌍

The key to mastering trigonometric identities is understanding the fundamental identities, practicing their applications, and recognizing patterns in more complex expressions. Remember that most complex identities can be derived from the basic ones!

Keep practicing with these identities, and you'll develop the mathematical intuition needed to tackle even the most challenging trigonometric problems with confidence. 🎯
`,
  quiz: {
    questions: [
      ...easyQuestions,
      ...mediumQuestions
    ]
  }
};
