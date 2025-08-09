import { QuizQuestion, TopicQuiz, TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic2Content: TopicContent = {
  id: 'cl10_ch4_t2',
  topicNumber: 2,
  topicName: "Solutions by factorization and quadratic formula",
  duration: 45,
  description: "Understanding methods for solving quadratic equations using factorization and the quadratic formula, and analyzing the nature of roots.",
  explanation: `
# Solutions by Factorization and Quadratic Formula 📊

Quadratic equations are fundamental in mathematics and have numerous real-world applications! In this topic, we'll explore effective methods to solve these equations, particularly focusing on factorization and the quadratic formula. Let's unlock the power of quadratic equations! 🔑

## Standard Form of a Quadratic Equation 📝

A quadratic equation in standard form is written as:

ax² + bx + c = 0

Where:
- a, b, and c are constants (a ≠ 0)
- a is the coefficient of x²
- b is the coefficient of x
- c is the constant term

For example, in 2x² - 5x + 3 = 0:
- a = 2
- b = -5
- c = 3

## Method 1: Solving by Factorization 🧮

Factorization is often the quickest method when the equation can be easily factored. It involves expressing the quadratic expression as a product of two linear factors.

### Steps for Factorization:

1. Ensure the equation is in standard form (= 0).
2. If a = 1, find two numbers whose:
   - Product equals c
   - Sum equals b
3. If a ≠ 1, find two numbers whose:
   - Product equals a × c
   - Sum equals b
4. Use these numbers to write the middle term as a sum, then factor by grouping.
5. Set each factor equal to zero and solve.

### Example 1: Factoring When a = 1 🌟

Solve x² + 7x + 12 = 0

**Step 1:** The equation is already in standard form with a = 1.

**Step 2:** We need two numbers whose:
- Product = 12
- Sum = 7
These numbers are 3 and 4.

**Step 3:** Write as factors:
x² + 7x + 12 = (x + 3)(x + 4) = 0

**Step 4:** Set each factor equal to zero:
x + 3 = 0  or  x + 4 = 0
x = -3  or  x = -4

Solution: x = -3 or x = -4

### Example 2: Factoring When a ≠ 1 🌟

Solve 3x² - 10x - 8 = 0

**Step 1:** We have a = 3, b = -10, c = -8.

**Step 2:** We need two numbers whose:
- Product = 3 × (-8) = -24
- Sum = -10
These numbers are -12 and 2.

**Step 3:** Rewrite the middle term:
3x² - 10x - 8 = 3x² - 12x + 2x - 8

**Step 4:** Factor by grouping:
3x² - 12x + 2x - 8 = 3x(x - 4) + 2(x - 4) = (3x + 2)(x - 4) = 0

**Step 5:** Set each factor equal to zero:
3x + 2 = 0  or  x - 4 = 0
x = -2/3  or  x = 4

Solution: x = -2/3 or x = 4

## Method 2: The Quadratic Formula ✨

The quadratic formula provides a direct method for finding solutions to any quadratic equation. For the standard form ax² + bx + c = 0, the solutions are given by:

x = (-b ± √(b² - 4ac)) / 2a

### Example 3: Using the Quadratic Formula 🌟

Solve 2x² - 5x + 2 = 0

**Step 1:** Identify the coefficients:
a = 2, b = -5, c = 2

**Step 2:** Apply the quadratic formula:
x = (-(-5) ± √((-5)² - 4(2)(2))) / 2(2)
x = (5 ± √(25 - 16)) / 4
x = (5 ± √9) / 4
x = (5 ± 3) / 4

**Step 3:** Calculate both solutions:
x = (5 + 3) / 4 = 8/4 = 2
x = (5 - 3) / 4 = 2/4 = 0.5 = 1/2

Solution: x = 2 or x = 1/2

## The Discriminant and Nature of Roots 🔍

The expression b² - 4ac is called the discriminant (D) and determines the nature of the roots:

1. If D > 0, there are two distinct real roots.
   Example: x² - 5x + 6 = 0 has D = 25 - 24 = 1 > 0, so it has two distinct real roots: 2 and 3.

2. If D = 0, there is exactly one real root (repeated).
   Example: x² - 6x + 9 = 0 has D = 36 - 36 = 0, so it has one repeated root: 3.

3. If D < 0, there are no real roots (only complex roots).
   Example: x² + x + 1 = 0 has D = 1 - 4 = -3 < 0, so it has no real roots.

### Example 4: Analyzing the Discriminant 🌟

For the equation 3x² + 2x + 5 = 0:

D = b² - 4ac = 2² - 4(3)(5) = 4 - 60 = -56

Since D < 0, this equation has no real roots.

## Completing the Square Method 🧩

Though not our main focus, completing the square is another method that transforms a quadratic equation into the form (x + p)² = q.

### Steps for Completing the Square:
1. Make a = 1 by dividing all terms by a.
2. Move c to the right side.
3. Add and subtract (b/2)² to complete the perfect square on the left.
4. Rewrite the left side as a perfect square.
5. Solve for x.

### Example 5: Completing the Square 🌟

Solve x² - 6x + 5 = 0

**Step 1:** Move the constant term to the right side:
x² - 6x = -5

**Step 2:** Find (b/2)² = (-6/2)² = (-3)² = 9

**Step 3:** Add and subtract this value:
x² - 6x + 9 - 9 = -5
(x - 3)² - 9 = -5

**Step 4:** Solve for (x - 3)²:
(x - 3)² = 4

**Step 5:** Take the square root of both sides:
x - 3 = ±2
x = 3 ± 2
x = 5 or x = 1

Solution: x = 5 or x = 1

## Relationship Between Roots and Coefficients 🔄

If α and β are the roots of ax² + bx + c = 0, then:

- Sum of roots: α + β = -b/a
- Product of roots: α × β = c/a

These relationships are useful for forming quadratic equations or finding sums and products of expressions involving the roots.

### Example 6: Using Root Relationships 🌟

For the equation 2x² - 5x + 3 = 0, find:
a) The sum of the roots
b) The product of the roots

a) Sum of roots = -b/a = -(-5)/2 = 5/2

b) Product of roots = c/a = 3/2

## Special Cases and Shortcuts ⚡

### Case 1: b = 0 (ax² + c = 0)

Example: 3x² - 12 = 0
Solution: x² = 4, so x = ±2

### Case 2: c = 0 (ax² + bx = 0)

Example: 2x² - 8x = 0
Solution: x(2x - 8) = 0, so x = 0 or x = 4

### Case 3: Perfect Square Trinomial

Example: x² + 10x + 25 = 0
Solution: (x + 5)² = 0, so x = -5

## Applications of Quadratic Equations 🌍

### Area Problems

**Example 7:** A rectangular garden has a perimeter of 26 meters and an area of 40 square meters. Find its dimensions.

Solution:
Let length = x meters and width = y meters.
Perimeter: 2(x + y) = 26, so x + y = 13
Area: xy = 40

From the first equation: y = 13 - x
Substitute into the second: x(13 - x) = 40
x(13 - x) = 40
13x - x² = 40
-x² + 13x - 40 = 0
x² - 13x + 40 = 0

Using the quadratic formula:
x = (13 ± √(169 - 160))/2
x = (13 ± √9)/2
x = (13 ± 3)/2

x = 8 or x = 5
If x = 8, then y = 5
If x = 5, then y = 8

The dimensions are 8 meters × 5 meters.

### Number Problems

**Example 8:** Find two consecutive integers whose product is 72.

Solution:
Let the integers be n and n + 1.
n(n + 1) = 72
n² + n - 72 = 0

Using the quadratic formula:
n = (-1 ± √(1 + 288))/2
n = (-1 ± √289)/2
n = (-1 ± 17)/2

n = 8 or n = -9
Since we need consecutive integers with product 72, the answer is 8 and 9, or -9 and -8.

## Choosing Between Methods ⚖️

1. **Try factorization first** if:
   - The coefficients are small integers
   - You can easily spot factors

2. **Use the quadratic formula** when:
   - Factorization isn't straightforward
   - You need exact roots for complex equations
   - You want to analyze the nature of roots

3. **Consider the discriminant** to quickly determine:
   - Whether to expect real solutions
   - How many distinct solutions to look for

## Common Mistakes to Avoid ⚠️

1. **Sign errors** when applying the quadratic formula
   Correct: x = (-b ± √(b² - 4ac))/2a
   Not: x = (b ± √(b² - 4ac))/2a

2. **Forgetting a ≠ 1** when factoring
   When a ≠ 1, you need to consider a·c, not just c, when finding factors.

3. **Only finding one root**
   Remember that quadratic equations typically have two solutions.

4. **Arithmetic errors** when calculating the discriminant
   Double-check your calculations, especially with negative numbers.

## Summary ✨

In this topic, we've covered two powerful methods for solving quadratic equations:

1. **Factorization Method:**
   - Express as a product of linear factors
   - Set each factor equal to zero
   - Solve the resulting linear equations

2. **Quadratic Formula:**
   - Use x = (-b ± √(b² - 4ac))/2a
   - Works for any quadratic equation
   - The discriminant (b² - 4ac) reveals the nature of roots

We've also explored:
- The relationship between roots and coefficients
- Special cases of quadratic equations
- Real-world applications
- Tips for choosing the appropriate method

Understanding these techniques not only helps solve mathematics problems but also builds the foundation for more advanced concepts in algebra and calculus. Remember to choose the most efficient method based on the specific equation you're solving! 🚀

### Practice Questions:

1. Solve by factorization: x² - 7x + 12 = 0
2. Solve using the quadratic formula: 2x² + 5x - 3 = 0
3. Find the value of k for which the equation x² - kx + 4 = 0 has equal roots.
4. If one root of 3x² + 2x - k = 0 is 2, find the value of k and the other root.
5. For what values of k will the equation x² + kx + 9 = 0 have real roots?
`,
  quiz: {
    questions: [
      ...easyQuestions,
      ...mediumQuestions
    ]
  }
};
