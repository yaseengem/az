import { generateId } from '../../../../../../app/utils/idGenerator';
import { QuizQuestion, TopicQuiz, TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic3Content: TopicContent = {
  id: 'cl9_ch2_t3',
  topicNumber: 3,
  topicName: "Zeroes of a Polynomial",
  duration: 45,
  description: "Understanding zeroes of polynomials and their geometric meaning",
  explanation: `
# Zeroes of a Polynomial 🌟

In this topic, we'll learn about zeroes (also called roots) of polynomials - special values that help us understand polynomial behavior and solve equations! Let's explore this important concept. 📊

## What are zeroes (or roots)? 🤔

**Definition:** A zero or root of a polynomial P(x) is a value of x for which P(x) = 0.

In simpler terms, when we substitute a value for x in a polynomial and get 0 as the result, that value is called a zero of the polynomial.

**Key features of zeroes:**
- They represent the points where the graph of the polynomial crosses or touches the x-axis
- A polynomial of degree n can have at most n zeroes
- If k is a zero of P(x), then (x - k) is a factor of P(x)

**Examples:**
1. For the polynomial P(x) = x - 3:
   * When x = 3: P(3) = 3 - 3 = 0
   * Thus, 3 is a zero of P(x) = x - 3

2. For the polynomial P(x) = x² - 4:
   * When x = 2: P(2) = 2² - 4 = 4 - 4 = 0
   * When x = -2: P(-2) = (-2)² - 4 = 4 - 4 = 0
   * Thus, 2 and -2 are zeroes of P(x) = x² - 4

## Geometric meaning (for linear polynomial) 📈

For a linear polynomial P(x) = ax + b (where a ≠ 0):
- The graph of P(x) is a straight line
- The zero of P(x) is x = -b/a
- Geometrically, this is the point where the line crosses the x-axis

**Example:** For P(x) = 2x - 6:
- Setting P(x) = 0: 2x - 6 = 0
- Solving: 2x = 6, so x = 3
- The zero is 3, and it's the x-coordinate of the point where the line y = 2x - 6 crosses the x-axis

This geometric interpretation extends to higher-degree polynomials as well:
- For a quadratic polynomial, the zeroes represent the x-coordinates of the points where the parabola crosses or touches the x-axis
- For a cubic polynomial, the zeroes are where the cubic curve crosses the x-axis

## Finding zeroes of simple polynomials 🔢

Let's look at methods to find zeroes for different types of polynomials:

### 1. Linear Polynomials (degree 1)
For P(x) = ax + b (where a ≠ 0), the zero is x = -b/a

**Example:** Find the zero of P(x) = 3x + 6
- 3x + 6 = 0
- 3x = -6
- x = -2
- The zero is -2

### 2. Quadratic Polynomials (degree 2)
For P(x) = ax² + bx + c (where a ≠ 0), zeroes can be found by:

**Method 1: Factorization**
- If P(x) can be written as a(x - α)(x - β), then α and β are the zeroes

**Method 2: Quadratic Formula**
- x = [-b ± √(b² - 4ac)]/2a

**Example:** Find the zeroes of P(x) = x² - 5x + 6
- Using factorization: x² - 5x + 6 = (x - 2)(x - 3)
- When (x - 2) = 0, x = 2
- When (x - 3) = 0, x = 3
- The zeroes are 2 and 3

### 3. Using the Remainder Theorem

**Remainder Theorem:** If a polynomial P(x) is divided by (x - a), then the remainder equals P(a).

This means:
- If P(a) = 0, then a is a zero of P(x)
- If a is a zero of P(x), then (x - a) is a factor of P(x)

**Example:** Verify that 2 is a zero of P(x) = x³ - 4x² + 5x - 2
- P(2) = 2³ - 4(2)² + 5(2) - 2
- P(2) = 8 - 16 + 10 - 2
- P(2) = 0
- Since P(2) = 0, 2 is a zero of the polynomial

## Quick exercises 🏋️‍♂️

Let's practice finding zeroes of polynomials:

**Exercise 1:** Find the zero of the linear polynomial P(x) = 5x - 15
- 5x - 15 = 0
- 5x = 15
- x = 3
- The zero is 3

**Exercise 2:** Find the zeroes of the quadratic polynomial P(x) = x² - x - 6
- Factorize: x² - x - 6 = (x - 3)(x + 2)
- When (x - 3) = 0, x = 3
- When (x + 2) = 0, x = -2
- The zeroes are 3 and -2

**Exercise 3:** Verify that -1 is a zero of P(x) = x³ + 3x² + 3x + 1
- P(-1) = (-1)³ + 3(-1)² + 3(-1) + 1
- P(-1) = -1 + 3 - 3 + 1
- P(-1) = 0
- Since P(-1) = 0, -1 is a zero of the polynomial

**Exercise 4:** If one zero of P(x) = x² - 5x + k is 2, find the value of k and the other zero
- Since 2 is a zero, P(2) = 0
- 2² - 5(2) + k = 0
- 4 - 10 + k = 0
- k = 6
- Now P(x) = x² - 5x + 6
- Factorizing: P(x) = (x - 2)(x - 3)
- The other zero is 3

Understanding zeroes of polynomials is crucial for solving polynomial equations, factorizing polynomials, and analyzing function behavior. In the next topic, we'll explore operations on polynomials! 🚀
    `,
  quiz: {
    questions: [
      ...easyQuestions,
      ...mediumQuestions
    ]
  }
};