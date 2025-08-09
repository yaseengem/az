import { QuizQuestion, TopicQuiz, TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic1Content: TopicContent = {
  id: 'cl10_ch4_t1',
  topicNumber: 1,
  topicName: "Standard form of quadratic equations",
  duration: 45,
  description: "Understanding the standard form of quadratic equations, identifying coefficients, and transforming various forms to standard form.",
  explanation: `
# Standard Form of Quadratic Equations 🔢

Quadratic equations are fundamental mathematical expressions that appear in numerous disciplines, from physics to economics. They are the next step up from linear equations, introducing the concept of a second-degree variable. Let's explore the standard form of quadratic equations and understand their key components! 📝

## What is a Quadratic Equation? 🤔

A quadratic equation is an equation of the second degree, meaning the highest power of the variable is 2. The standard form of a quadratic equation is:

ax² + bx + c = 0

Where:
- a, b, and c are real numbers (constants)
- a ≠ 0 (otherwise, it wouldn't be a quadratic equation)
- x is the variable

The standard form is sometimes called the general form, and it's the most convenient way to analyze and solve quadratic equations.

### Examples of Quadratic Equations: 📌
- 2x² + 3x - 5 = 0 (a = 2, b = 3, c = -5)
- x² - 9 = 0 (a = 1, b = 0, c = -9)
- -4x² + 2x + 7 = 0 (a = -4, b = 2, c = 7)

### Non-examples (not in standard form): ⚠️
- x² = 4x - 3 (needs to be rearranged)
- (x-2)(x+5) = 0 (needs to be expanded)
- x² + 3 = 2x (needs to be rearranged)

## Identifying Coefficients in a Quadratic Equation 🔍

In the standard form ax² + bx + c = 0:
- a is the coefficient of x²
- b is the coefficient of x
- c is the constant term

### Quick Identification Examples:
1. 3x² - 2x + 5 = 0: a = 3, b = -2, c = 5
2. -x² + 7 = 0: a = -1, b = 0, c = 7
3. 4x² - 3 = 0: a = 4, b = 0, c = -3

## Converting Equations to Standard Form ✏️

Many quadratic equations aren't initially presented in standard form. Here's how to convert different forms:

### 1. From Factored Form: (x - p)(x - q) = 0
Expand the brackets:
- (x - p)(x - q) = x² - qx - px + pq = x² - (p+q)x + pq = 0

### 2. From Expanded Form Not Equal to Zero: x² + px = q
Move all terms to one side:
- x² + px - q = 0

### 3. From Equations with Fractions:
Multiply all terms by the least common multiple (LCM) of the denominators.

### Example 1: Converting (x-3)(x+2) = 0 to Standard Form 📝
(x-3)(x+2) = 0
x² + 2x - 3x - 6 = 0
x² - x - 6 = 0

So, a = 1, b = -1, c = -6

### Example 2: Converting x² = 3x + 4 to Standard Form 📝
x² = 3x + 4
x² - 3x - 4 = 0

So, a = 1, b = -3, c = -4

### Example 3: Converting x(x-5) = -6 to Standard Form 📝
x(x-5) = -6
x² - 5x = -6
x² - 5x + 6 = 0

So, a = 1, b = -5, c = 6

## Recognizing Quadratic Equations in Different Forms 👀

Quadratic equations can appear in various forms, and it's crucial to recognize them:

### 1. Standard Form: ax² + bx + c = 0
- Example: 2x² - 5x + 3 = 0

### 2. Factored Form: a(x - α)(x - β) = 0
- Example: 2(x - 3)(x + 1) = 0

### 3. Perfect Square Form: a(x - h)² + k = 0
- Example: 2(x - 3)² + 4 = 0

### 4. General Form (with equation not equal to zero):
- Example: 3x² + 2x = 5

## The Discriminant: Predicting the Nature of Roots 🧮

The discriminant of a quadratic equation ax² + bx + c = 0 is given by the formula b² - 4ac. It helps predict the nature of the roots:

1. If b² - 4ac > 0, the equation has two distinct real roots
2. If b² - 4ac = 0, the equation has two equal real roots (one repeated root)
3. If b² - 4ac < 0, the equation has no real roots (two complex roots)

### Example: Analyzing 2x² - 4x + 1 = 0 📝
Here, a = 2, b = -4, c = 1
Discriminant = (-4)² - 4(2)(1) = 16 - 8 = 8 > 0
Therefore, this equation has two distinct real roots.

## Relationship Between Roots and Coefficients 🔗

If α and β are the roots of the quadratic equation ax² + bx + c = 0, then:
- Sum of roots: α + β = -b/a
- Product of roots: α × β = c/a

### Example: Finding the Sum and Product of Roots 📝
For 3x² - 5x + 2 = 0:
- a = 3, b = -5, c = 2
- Sum of roots = -b/a = -(-5)/3 = 5/3
- Product of roots = c/a = 2/3

## Forming Quadratic Equations from Given Roots 🛠️

If we know the roots α and β, we can form the quadratic equation:
(x - α)(x - β) = 0

Expanding:
x² - (α + β)x + αβ = 0

### Example: Forming a Quadratic Equation with Roots 2 and -3 📝
Roots: 2 and -3
(x - 2)(x - (-3)) = 0
(x - 2)(x + 3) = 0
x² + 3x - 2x - 6 = 0
x² + x - 6 = 0

## Practical Problems Leading to Quadratic Equations 🌍

### Problem 1: Area of a Rectangle 📏
A rectangular garden has a perimeter of 26 meters and an area of 40 square meters. Find its dimensions.

Solution:
- Let the length be x meters and the width be y meters
- From the given conditions:
  - 2(x + y) = 26, so x + y = 13
  - xy = 40
- From the first equation: y = 13 - x
- Substituting in the second equation: x(13 - x) = 40
- Expanding: 13x - x² = 40
- Rearranging to standard form: x² - 13x + 40 = 0
- Using the quadratic formula: x = (13 ± √(169 - 160))/2 = (13 ± √9)/2 = (13 ± 3)/2
- x = 8 or x = 5
- Corresponding y values: y = 5 or y = 8

So, the dimensions are either 8m × 5m or 5m × 8m (which are the same rectangle).

### Problem 2: Number Problem 🔢
The sum of a number and its reciprocal is 5. Find the number.

Solution:
- Let the number be x
- Then its reciprocal is 1/x
- Given: x + 1/x = 5
- Multiplying both sides by x: x² + 1 = 5x
- Rearranging to standard form: x² - 5x + 1 = 0
- Using the quadratic formula: x = (5 ± √(25 - 4))/2 = (5 ± √21)/2

The numbers are (5 + √21)/2 ≈ 4.79 and (5 - √21)/2 ≈ 0.21.

## Common Errors and Misconceptions ⚠️

1. **Forgetting that 'a' must be non-zero**: If a = 0, the equation becomes linear, not quadratic.

2. **Incorrectly writing coefficients**: In -3x² + 4x - 2 = 0, a = -3, not 3.

3. **Missing terms**: For x² - 4 = 0, remember that b = 0 (the coefficient of x).

4. **Applying the quadratic formula incorrectly**: Double-check your substitutions!

## Applications of Quadratic Equations in Real Life 🚀

1. **Physics**: Calculating trajectories of projectiles (e.g., ball throws, rocket launches)

2. **Engineering**: Designing parabolic structures like satellite dishes and suspension bridges

3. **Economics**: Modeling supply and demand curves, optimizing profit functions

4. **Architecture**: Creating arches and domes that follow parabolic curves

## Sample Questions and Solutions 📝

### Question 1: Write the following in standard form and identify a, b, and c:
(2x - 3)(x + 4) = 0

Solution:
(2x - 3)(x + 4) = 0
2x² + 8x - 3x - 12 = 0
2x² + 5x - 12 = 0

Therefore, a = 2, b = 5, c = -12

### Question 2: Convert to standard form:
x² = 2x + 8

Solution:
x² = 2x + 8
x² - 2x - 8 = 0

Therefore, a = 1, b = -2, c = -8

### Question 3: If the sum of the roots of the quadratic equation 2x² - kx + 3 = 0 is equal to their product, find the value of k.

Solution:
- Sum of roots = -b/a = k/2
- Product of roots = c/a = 3/2
- Given that sum equals product: k/2 = 3/2
- Therefore, k = 3

## Summary ✨

In this topic, we've explored:
- The standard form of quadratic equations: ax² + bx + c = 0
- How to identify coefficients in quadratic equations
- Methods to convert different forms of equations to standard form
- The relationship between roots and coefficients
- How to form quadratic equations from given roots
- Practical applications of quadratic equations
- Common errors to avoid

Understanding the standard form of quadratic equations is essential as it serves as the foundation for solving these equations, analyzing their properties, and applying them to real-world problems. In the next topic, we'll explore methods to solve quadratic equations, including factorization and the quadratic formula. 🌟

### Practice Questions to Try:
1. Convert (x - 1/2)(x + 2/3) = 0 to standard form.
2. Find the values of a, b, and c in the standard form of 3(x - 2)² + 5 = 0.
3. Form a quadratic equation whose roots are 2 + √3 and 2 - √3.
4. The difference of a number and its reciprocal is 3. Form a quadratic equation to find the number.
5. A ball is thrown upward with an initial velocity of 20 m/s from a height of 5 meters. The height h of the ball after t seconds is given by h = 5 + 20t - 5t². At what time(s) will the ball be at a height of 15 meters?
`,
  quiz: {
    questions: [
      ...easyQuestions,
      ...mediumQuestions
    ]
  }
};
