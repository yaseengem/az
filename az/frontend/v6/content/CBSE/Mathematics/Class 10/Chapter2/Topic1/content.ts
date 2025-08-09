import { QuizQuestion, TopicQuiz, TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic1Content: TopicContent = {
  id: 'cl10_ch2_t1',
  topicNumber: 1,
  topicName: "Zeros of a polynomial",
  duration: 45,
  description: "Understanding the concept of zeros of polynomials, their properties, and methods to find them.",
  explanation: `
# Zeros of a Polynomial 🔍

## Introduction 🌟

In mathematics, a zero or root of a polynomial is a value that, when substituted for the variable, makes the polynomial equal to zero. Finding the zeros of a polynomial is one of the fundamental problems in algebra, with applications ranging from solving equations to graphing functions. Let's dive into this fascinating concept! 📊

## Definition and Basic Concepts ✏️

**Zero of a Polynomial**: A number 'α' is called a zero (or root) of a polynomial p(x) if p(α) = 0.

For example, if p(x) = x² - 5x + 6, then:
- p(2) = 2² - 5(2) + 6 = 4 - 10 + 6 = 0
- p(3) = 3² - 5(3) + 6 = 9 - 15 + 6 = 0

So, 2 and 3 are zeros of the polynomial x² - 5x + 6.

### Key Points:
- A polynomial of degree n can have at most n zeros.
- Zeros can be real or complex numbers.
- Some zeros might be repeated (these are called multiple zeros).

## Relationship Between Zeros and Polynomial Factors 🧩

There's a fundamental connection between the zeros of a polynomial and its factors:

**Theorem**: α is a zero of polynomial p(x) if and only if (x - α) is a factor of p(x).

For example, since 2 is a zero of p(x) = x² - 5x + 6, we can write:
p(x) = (x - 2) × (something)

We can find this "something" by polynomial division:
x² - 5x + 6 ÷ (x - 2) = (x - 3)

So, p(x) = (x - 2)(x - 3)

This means that the zeros of p(x) are 2 and 3, which matches our earlier finding.

### Factorization from Zeros:
If a polynomial p(x) of degree n has zeros α₁, α₂, ..., αₙ, then:
p(x) = a(x - α₁)(x - α₂)...(x - αₙ)
where 'a' is the coefficient of the highest power of x in p(x).

## The Remainder Theorem 📝

The Remainder Theorem provides a quick way to evaluate a polynomial at a given value:

**Theorem**: If a polynomial p(x) is divided by (x - a), then the remainder is equal to p(a).

This means that to find p(a), you don't need to substitute a into the polynomial; you can use polynomial division and find the remainder.

### Example:
Let's evaluate p(x) = x³ - 6x² + 11x - 6 at x = 2.

Using the Remainder Theorem:
If p(x) = (x - 2) × q(x) + r, then p(2) = r

Dividing p(x) by (x - 2):
\`\`\`
      x² - 4x + 3
x - 2 ) x³ - 6x² + 11x - 6
      x³ - 2x²
      ---------
      -4x² + 11x
      -4x² + 8x
      ---------
      3x - 6
      3x - 6
      -----
      0
\`\`\`

So, p(x) = (x - 2)(x² - 4x + 3) + 0, meaning p(2) = 0. Thus, 2 is a zero of p(x).

## The Factor Theorem 🛠️

The Factor Theorem is a direct consequence of the Remainder Theorem:

**Theorem**: (x - a) is a factor of p(x) if and only if p(a) = 0.

This gives us a way to check if a certain value is a zero of a polynomial.

### Example:
Is x = -1 a zero of p(x) = x³ + 3x² - x - 3?

Evaluating p(-1):
p(-1) = (-1)³ + 3(-1)² - (-1) - 3
      = -1 + 3 + 1 - 3
      = 0

Since p(-1) = 0, x = -1 is a zero of p(x), and (x + 1) is a factor of p(x).

## Finding All Zeros of a Polynomial 🔎

For higher-degree polynomials, finding all zeros can be challenging. Here's a general approach:

1. **Check for Rational Zeros**: Using the Rational Zero Theorem, list all possible rational zeros.
2. **Verify Each Potential Zero**: Substitute each potential zero into the polynomial to see if it equals 0.
3. **Reduce the Polynomial**: If you find a zero α, divide the polynomial by (x - α) to get a polynomial of lower degree.
4. **Repeat** until you've found all zeros or can easily solve the reduced polynomial.

### Example:
Find all zeros of p(x) = x³ - 2x² - 5x + 6.

Step 1: Check if x = 1 is a zero:
p(1) = 1 - 2 - 5 + 6 = 0

Yes! So (x - 1) is a factor.

Step 2: Divide p(x) by (x - 1):
p(x) = (x - 1)(x² - x - 6)

Step 3: Find zeros of x² - x - 6:
(x - 3)(x + 2) = x² - 3x + 2x - 6 = x² - x - 6

So, the zeros of x² - x - 6 are x = 3 and x = -2.

Therefore, the zeros of p(x) = x³ - 2x² - 5x + 6 are 1, 3, and -2.

## Relationship Between Zeros and Coefficients 🔄

For a quadratic polynomial p(x) = ax² + bx + c with zeros α and β:
- Sum of zeros: α + β = -b/a
- Product of zeros: α × β = c/a

For a cubic polynomial p(x) = ax³ + bx² + cx + d with zeros α, β, and γ:
- Sum of zeros: α + β + γ = -b/a
- Sum of products of zeros taken two at a time: αβ + βγ + γα = c/a
- Product of zeros: α × β × γ = -d/a

These relationships are useful for forming polynomials with given zeros or for finding relationships between zeros.

### Example:
If the sum of the zeros of a quadratic polynomial p(x) = x² - 4x + k is 6, find the value of k.

Using the relationship α + β = -b/a, we have:
α + β = -(-4)/1 = 4

But we're given that α + β = 6. This is a contradiction, so there is no value of k that satisfies the condition.

Let's try again with p(x) = x² - 6x + k.
Using the relationship α + β = -b/a, we have:
α + β = -(-6)/1 = 6 ✓

Now, using αβ = c/a, we have:
αβ = k/1 = k

If we want to find k, we need more information about the zeros. If we know that one of the zeros is 2, then the other is 6 - 2 = 4 (since α + β = 6).
So, αβ = 2 × 4 = 8, meaning k = 8.

## Applications and Sample Questions 📚

### Question 1:
If one of the zeros of the cubic polynomial p(x) = x³ - 5x² + 8x - 4 is 1, find the other zeros.

Solution:
Since 1 is a zero, (x - 1) is a factor of p(x). Dividing p(x) by (x - 1):
p(x) = (x - 1)(x² - 4x + 4) = (x - 1)(x - 2)²

So, the zeros of p(x) are 1 and 2 (with multiplicity 2).

### Question 2:
If α and β are the zeros of the polynomial p(x) = x² - 5x + 6, find the value of α² + β².

Solution:
For p(x) = x² - 5x + 6, we have:
α + β = 5
αβ = 6

Now, α² + β² = (α + β)² - 2αβ = 5² - 2(6) = 25 - 12 = 13.

### Question 3:
Find the polynomial of least degree with real coefficients, having zeros -2, 3 + i, and 3 - i.

Solution:
For real polynomials, complex zeros occur in conjugate pairs. So, 3 + i and 3 - i are indeed a conjugate pair.

The polynomial is:
p(x) = (x + 2)(x - (3 + i))(x - (3 - i)) = (x + 2)(x - 3 - i)(x - 3 + i) = (x + 2)((x - 3)² - (i)²) = (x + 2)((x - 3)² - (-1)) = (x + 2)((x - 3)² + 1) = (x + 2)(x² - 6x + 10) = x³ - 6x² + 10x + 2x² - 12x + 20 = x³ - 4x² - 2x + 20

## Summary ✨

1. A zero of a polynomial p(x) is a value α such that p(α) = 0.
2. A polynomial of degree n can have at most n zeros.
3. If α is a zero of p(x), then (x - α) is a factor of p(x).
4. The Remainder Theorem states that when p(x) is divided by (x - a), the remainder is p(a).
5. The Factor Theorem is a direct consequence: (x - a) is a factor of p(x) if and only if p(a) = 0.
6. There are relationships between the zeros of a polynomial and its coefficients, which can be used to form polynomials with given zeros or to find properties of zeros.

Understanding the concept of zeros is foundational for many areas of mathematics. It helps in solving equations, analyzing functions, and understanding the behavior of polynomials. Keep practicing with different polynomials, and soon you'll be able to find zeros with ease! 🎯

### Additional Practice Questions:
1. Find all zeros of p(x) = x³ - 7x² + 16x - 12.
2. If α and β are the zeros of p(x) = x² - 7x + 10, find the value of 1/α + 1/β.
3. If p(x) = x³ - 6x² + 11x - 6, verify that x = 1, x = 2, and x = 3 are its zeros.
4. If α and β are the zeros of p(x) = x² - 5x + 4, form a polynomial whose zeros are 2α and 2β.
5. Find a cubic polynomial with real coefficients having zeros 2, -1, and 3.
`,
  quiz: {
    questions: [
      ...easyQuestions,
      ...mediumQuestions
    ]
  }
};
