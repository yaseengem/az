import { QuizQuestion, TopicQuiz, TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic3Content: TopicContent = {
  id: 'cl10_ch4_t3',
  topicNumber: 3,
  topicName: "Nature of roots",
  duration: 45,
  description: "Understanding the nature of roots of quadratic equations based on discriminant, relationships between roots and coefficients, and special cases.",
  explanation: `
# Nature of Roots of Quadratic Equations 🔍

Understanding the nature of roots is essential for analyzing quadratic equations and solving related problems. In this topic, we'll explore how to determine whether roots are real or complex, equal or distinct, and how roots relate to coefficients. Let's dive into this fascinating aspect of quadratic equations! 📈

## The Discriminant: Key to Understanding Roots 🔑

The most important tool for analyzing the nature of roots is the **discriminant**. For a quadratic equation in standard form:

ax² + bx + c = 0 (where a ≠ 0)

The discriminant is defined as:

D = b² - 4ac

The value of this discriminant tells us everything about the nature of the roots.

### Three Possible Scenarios for the Discriminant 🔢

1. **D > 0**: Two distinct real roots
   - The equation has two different real number solutions
   - The graph of the corresponding function cuts the x-axis at two points
   - Roots are given by x = (-b ± √D) / 2a

2. **D = 0**: Two equal (coincident) real roots
   - The equation has one repeated real solution
   - The graph of the corresponding function touches the x-axis at exactly one point (tangent)
   - The single root is given by x = -b / 2a

3. **D < 0**: Two complex conjugate roots
   - The equation has no real solutions, but two complex solutions
   - The graph of the corresponding function doesn't intersect the x-axis
   - Roots are given by x = (-b ± i√(-D)) / 2a, where i = √(-1)

### Example 1: Analyzing Different Quadratic Equations 📝

Let's examine three equations to understand the different cases:

a) x² - 5x + 6 = 0
   - Here, a = 1, b = -5, c = 6
   - D = (-5)² - 4(1)(6) = 25 - 24 = 1 > 0
   - Since D > 0, this equation has two distinct real roots
   - We can verify: roots are 2 and 3

b) x² - 6x + 9 = 0
   - Here, a = 1, b = -6, c = 9
   - D = (-6)² - 4(1)(9) = 36 - 36 = 0
   - Since D = 0, this equation has two equal real roots
   - The single root is x = 6/2 = 3
   - We can verify: this equation can be written as (x - 3)² = 0

c) x² + x + 1 = 0
   - Here, a = 1, b = 1, c = 1
   - D = (1)² - 4(1)(1) = 1 - 4 = -3 < 0
   - Since D < 0, this equation has two complex conjugate roots
   - The roots are x = (-1 ± i√3)/2

## Relationship Between Coefficients and Roots 🔄

If α and β are the two roots of the quadratic equation ax² + bx + c = 0, then:

- Sum of roots: α + β = -b/a
- Product of roots: α × β = c/a

These relationships are extremely useful for solving problems without having to find the exact values of the roots.

### Example 2: Using Root Relationships 🧩

For the equation 3x² - 7x - 6 = 0:
- a = 3, b = -7, c = -6
- Sum of roots = -(-7)/3 = 7/3
- Product of roots = -6/3 = -2

Now, if we're asked to find α² + β², we can use:
- α² + β² = (α + β)² - 2(α × β) = (7/3)² - 2(-2) = 49/9 + 4 = 49/9 + 36/9 = 85/9

## Determining the Nature of Roots Without Solving 🧠

We can use the discriminant to determine the nature of roots without actually solving the equation.

### For a quadratic equation ax² + bx + c = 0:

1. If D > 0, the roots are real and distinct
2. If D = 0, the roots are real and equal
3. If D < 0, the roots are non-real complex conjugates

Additionally:
- If c/a > 0, then either both roots are positive or both are negative
- If c/a < 0, then one root is positive and one is negative
- If b/a > 0, then either both roots are positive or both are negative
- If c = 0, then one root is always zero

### Example 3: Analyzing Root Signs Without Solving 🔍

For the equation 2x² - 7x - 4 = 0:
- a = 2, b = -7, c = -4
- c/a = -4/2 = -2 < 0, so one root is positive and one is negative
- Additionally, D = (-7)² - 4(2)(-4) = 49 + 32 = 81 > 0, so roots are real and distinct

## Special Cases of Quadratic Equations ⭐

### 1. When roots are reciprocals of each other

If α and β are reciprocals, then α = 1/β and β = 1/α. This means:
- αβ = 1
- Since αβ = c/a, we have c = a

So, if the roots of ax² + bx + c = 0 are reciprocals of each other, then c = a.

### 2. When roots are equal in magnitude but opposite in sign

If α = -β, then:
- α + β = 0
- Since α + β = -b/a, we have b = 0

So, if the roots of ax² + bx + c = 0 have equal magnitude but opposite signs, then b = 0.

### Example 4: Finding Equations with Special Properties 🧪

Find the value of k for which the equation kx² + 6x + 1 = 0 has roots that are reciprocals of each other.

Solution:
- For reciprocal roots, we need c = a, which means 1 = k
- So k = 1

## Forming Quadratic Equations When Roots are Given 📝

If we know the roots α and β, we can form the quadratic equation using:
- x² - (α + β)x + αβ = 0

### Example 5: Forming Equations with Given Roots 📊

Form a quadratic equation whose roots are 3 + √2 and 3 - √2.

Solution:
- Sum of roots = (3 + √2) + (3 - √2) = 6
- Product of roots = (3 + √2)(3 - √2) = 9 - 2 = 7
- Therefore, the equation is x² - 6x + 7 = 0

## Discriminant and the Nature of Parabolas 📊

The discriminant also tells us about the position of the parabola y = ax² + bx + c relative to the x-axis:

1. If D > 0: Parabola intersects x-axis at two points
2. If D = 0: Parabola is tangent to the x-axis at one point
3. If D < 0: Parabola doesn't intersect the x-axis

## Real-World Applications of the Nature of Roots 🌍

### Example 6: Projectile Motion Problem 🚀

A ball is thrown upward from the ground with an initial velocity of 20 m/s. Its height (in meters) after t seconds is given by h = 20t - 5t². When will the ball hit the ground?

Solution:
- We need to find t when h = 0: 20t - 5t² = 0
- 5t(4 - t) = 0
- t = 0 or t = 4
- Since t = 0 represents the starting point, the ball hits the ground at t = 4 seconds

### Example 7: Area Optimization Problem 📏

A farmer has 100 meters of fencing to enclose a rectangular field along a straight river. No fencing is needed along the river. What dimensions will maximize the enclosed area?

Solution:
- If x = length along the river and y = width perpendicular to the river
- Then the perimeter constraint gives: x + 2y = 100
- Area = xy = x(50 - x/2) = 50x - x²/2
- To maximize area, we take the derivative and set it equal to zero:
  - dA/dx = 50 - x = 0
  - x = 50
- So y = 25, giving dimensions of 50m × 25m

## Conditions on Coefficients for Special Types of Roots 🔢

### 1. For real and equal roots
D = b² - 4ac = 0
This is a critical condition used to find values of parameters.

### 2. For rational roots
If a, b, c are integers and roots are rational, they are of the form p/q where p divides c and q divides a.

### 3. For purely imaginary roots
If the roots are purely imaginary (of the form ki where k is a real number), then:
- b = 0
- ac > 0

### Example 8: Finding Parameter Values 🔍

For what value(s) of k will the equation x² + kx + 25 = 0 have equal roots?

Solution:
- For equal roots, D = 0: k² - 4(1)(25) = 0
- k² = 100, so k = ±10
- The equation will have equal roots when k = 10 or k = -10

## Common Methods for Analyzing the Nature of Roots 📝

### Method 1: Using the Discriminant Directly
Calculate D = b² - 4ac and analyze its sign.

### Method 2: Completing the Square
Rewrite the equation as a perfect square plus a constant to visualize the roots.

### Method 3: Using Vieta's Formulas
Leverage the relationships between roots and coefficients to analyze properties.

### Example 9: Complete the Square Method 🔄

Analyze the nature of roots of x² + 6x + 8 = 0 by completing the square.

Solution:
- Rearranging: x² + 6x = -8
- Adding (6/2)² = 9 to both sides: x² + 6x + 9 = -8 + 9
- (x + 3)² = 1
- x + 3 = ±1
- x = -3 ± 1
- Roots are -2 and -4, which are real and distinct

## Practice Problems for Different Types of Root Nature Questions 🏋️‍♀️

### Type 1: Discriminant Analysis
For each equation, determine whether the roots are real and distinct, real and equal, or non-real complex:
1. 2x² - 3x + 7 = 0
2. 3x² + 12x + 12 = 0
3. 5x² - 10x + 5 = 0

### Type 2: Finding Parameter Values
Find the range of values of k for which the equation has:
1. Real roots: x² + kx + 9 = 0
2. No real roots: 2x² + kx + 8 = 0
3. At least one real root: kx² + 6x + 9 = 0

### Type 3: Using Root-Coefficient Relations
If α and β are the roots of 3x² - 10x + 7 = 0, find:
1. α + β
2. α × β
3. α² + β²
4. 1/α + 1/β

## Summary ✨

In this topic, we've explored:

1. **The discriminant (D = b² - 4ac)** as the key to determining the nature of roots
   - D > 0: Two distinct real roots
   - D = 0: Two equal real roots
   - D < 0: Two complex conjugate roots

2. **Relationships between roots and coefficients**
   - Sum of roots = -b/a
   - Product of roots = c/a
   - These relationships help solve complex problems without finding actual roots

3. **Special cases of quadratic equations**
   - Reciprocal roots: c = a
   - Roots equal in magnitude but opposite in sign: b = 0
   - Rational roots conditions
   - Purely imaginary roots conditions

4. **Real-world applications** in physics, engineering, and optimization problems

5. **Methods for analyzing roots**
   - Direct discriminant calculation
   - Completing the square
   - Using Vieta's formulas

Understanding the nature of roots allows us to:
- Solve equations more efficiently
- Analyze solution behavior without explicit calculation
- Apply quadratic models to real-world problems
- Connect algebraic solutions to graphical representations

These skills are fundamental to higher mathematics, including calculus, complex analysis, and differential equations. Mastering the nature of roots provides a strong foundation for future mathematical study and applications.

### Additional Practice Questions:
1. For what values of m will the roots of x² + mx + 16 be real?
2. If one root of the equation x² - 6x + k = 0 is triple the other, find k.
3. If α and β are the roots of 2x² - 5x + 3 = 0, find the value of α²β + αβ².
4. The sum of the reciprocals of the roots of ax² + bx + c = 0 is given by what expression in terms of a, b, and c?
5. When will a quadratic equation have exactly one real solution?
`,
  quiz: {
    questions: [
      ...easyQuestions,
      ...mediumQuestions
    ]
  }
};
