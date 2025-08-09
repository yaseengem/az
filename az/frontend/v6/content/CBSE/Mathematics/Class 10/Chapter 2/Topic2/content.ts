import { TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic2Content: TopicContent = {
  id: 'cl10_ch2_t2',
  topicNumber: 2,
  topicName: "Relationship between zeros and coefficients",
  duration: 45,
  description: "Understanding how the zeros of a polynomial are related to its coefficients and how to use these relationships to form polynomials with given zeros",
  explanation: `
# Relationship Between Zeros and Coefficients 🔢

When working with polynomials, understanding the relationship between the zeros (roots) and coefficients is fundamental to solving many mathematical problems efficiently. These relationships provide powerful shortcuts and insights into polynomial behavior. Let's explore these fascinating connections! 🧮

## Introduction to Zeros of Polynomials 🌱

A zero or root of a polynomial p(x) is a value of x for which p(x) = 0. For a quadratic polynomial p(x) = ax² + bx + c (where a ≠ 0), the zeros can be found using the quadratic formula:

x = (-b ± √(b² - 4ac)) / 2a

For example, the zeros of x² - 5x + 6 are 2 and 3 because:
- p(2) = 2² - 5(2) + 6 = 4 - 10 + 6 = 0
- p(3) = 3² - 5(3) + 6 = 9 - 15 + 6 = 0

## Key Relationships for Quadratic Polynomials 🔑

Let's consider a quadratic polynomial p(x) = ax² + bx + c with zeros α and β.

### The Sum of Zeros Formula 📊
The sum of the zeros is related to the coefficients by:
α + β = -b/a

**Example:** For p(x) = 2x² - 7x + 3
- a = 2, b = -7, c = 3
- α + β = -(-7)/2 = 7/2 = 3.5

### The Product of Zeros Formula 📊
The product of the zeros is related to the coefficients by:
α × β = c/a

**Example:** For p(x) = 2x² - 7x + 3
- α × β = 3/2 = 1.5

These two relationships are collectively known as **Vieta's formulas** for quadratic polynomials.

## Derivation of these Relationships 📝

Let's understand where these formulas come from. If α and β are the zeros of p(x) = ax² + bx + c, then:
p(x) = a(x - α)(x - β)

Expanding:
p(x) = a(x² - (α + β)x + αβ)
p(x) = ax² - a(α + β)x + aαβ

Comparing with the original form:
ax² + bx + c = ax² - a(α + β)x + aαβ

This gives us:
- b = -a(α + β), so α + β = -b/a
- c = aαβ, so αβ = c/a

## Applications of these Relationships 🛠️

### 1. Finding the Sum and Product of Zeros Without Calculating the Zeros
For p(x) = 3x² - 10x + 8:
- Sum of zeros = -(-10)/3 = 10/3
- Product of zeros = 8/3

### 2. Forming a Quadratic Polynomial with Given Zeros
If we know the zeros are 2 and -5, we can write:
p(x) = a(x - 2)(x + 5) = a(x² + 3x - 10)

For a = 1, the polynomial is p(x) = x² + 3x - 10.

### 3. Finding the Value of an Expression Involving Zeros
If α and β are the zeros of x² - 6x + k, and α² + β² = 20, we can find k:
- α + β = 6 (from -b/a)
- (α + β)² = α² + β² + 2αβ
- 36 = 20 + 2αβ
- αβ = 8
- Therefore, k = 8 (from c/a)

## Relationships for Higher Degree Polynomials 📈

For a cubic polynomial p(x) = ax³ + bx² + cx + d with zeros α, β, and γ:
- α + β + γ = -b/a
- αβ + βγ + αγ = c/a
- αβγ = -d/a

For a polynomial of degree n with zeros α₁, α₂, ..., αn:
- The sum of zeros = -coefficient of x^(n-1) / coefficient of x^n
- The product of zeros = (-1)^n × constant term / coefficient of x^n

## Advanced Applications 🔍

### 1. Finding Other Expressions Involving Zeros
If α and β are the zeros of p(x) = ax² + bx + c, then:
- α² + β² = (α + β)² - 2αβ = (-b/a)² - 2(c/a) = (b²/a²) - 2c/a

**Example:** For x² - 5x + 6 with zeros 2 and 3:
- α² + β² = 5² - 2(6) = 25 - 12 = 13

### 2. Formation of New Polynomials with Related Zeros
For zeros α and β of p(x) = ax² + bx + c:
- The polynomial with zeros 1/α and 1/β is: cx² + bx + a
- The polynomial with zeros α² and β² is: ax⁴ + bx² + c
- The polynomial with zeros α + k and β + k is found by substituting y = x - k

### 3. Working with Irrational Zeros
If α + i√β is a zero of a polynomial with real coefficients, then its complex conjugate α - i√β is also a zero.

## Problem-Solving Strategies 🧩

### Strategy 1: When the Sum and Product of Zeros are Given
If the sum of zeros is S and product is P, the polynomial is p(x) = x² - Sx + P.

**Example:** If the sum is 7 and product is 12, the polynomial is x² - 7x + 12.

### Strategy 2: When One Zero and a Coefficient are Given
If one zero is α and the polynomial is ax² + bx + c, substitute p(α) = 0 to find a relationship between the coefficients.

**Example:** If 2 is a zero of x² + kx - 6, then 2² + 2k - 6 = 0, so k = 1.

### Strategy 3: When the Polynomial has a Special Form
For p(x) = ax² + bx + a, the zeros α and β satisfy α + β = -b/a and αβ = 1 (since c = a).

## Real-Life Applications 🌍

### 1. Economics
In economics, quadratic cost functions C(x) = ax² + bx + c model the total cost of producing x units. The zeros can represent break-even points.

### 2. Physics
In projectile motion, the trajectory follows a parabolic path. The zeros of the height function represent when the object hits the ground.

### 3. Engineering
In control systems, the zeros of the transfer function determine the system's response characteristics.

## Sample Questions with Solutions 📝

### Question 1
If α and β are the zeros of the polynomial p(x) = x² - 5x + k such that α² + β² = 29, find the value of k.

**Solution:**
- α + β = 5 (from -b/a, where a = 1, b = -5)
- α² + β² = (α + β)² - 2αβ = 5² - 2k = 25 - 2k = 29
- So, 25 - 2k = 29
- 2k = 25 - 29 = -4
- k = -2

### Question 2
Form a quadratic polynomial whose zeros are 3 + √2 and 3 - √2.

**Solution:**
- Sum of zeros = (3 + √2) + (3 - √2) = 6
- Product of zeros = (3 + √2)(3 - √2) = 9 - 2 = 7
- So, the polynomial is x² - 6x + 7

### Question 3
If one zero of the quadratic polynomial 3x² + 11x + k is the reciprocal of the other, find the value of k.

**Solution:**
- Let the zeros be α and β, where β = 1/α
- αβ = 1 (as β = 1/α)
- From αβ = k/3, we get k/3 = 1, so k = 3

## Summary ✨

The relationship between zeros and coefficients of polynomials provides powerful tools for:
- Finding the sum and product of zeros directly from the coefficients
- Forming polynomials with given zeros
- Solving problems involving expressions of zeros
- Understanding the behavior of polynomial functions

These relationships are fundamental to various mathematical techniques and have applications across different fields. By mastering these connections, you can simplify complex polynomial problems and gain deeper insights into polynomial behavior.

### Key Takeaways:
1. For p(x) = ax² + bx + c with zeros α and β:
   - α + β = -b/a
   - αβ = c/a

2. These relationships extend to higher-degree polynomials with similar patterns.

3. Using these relationships allows us to solve a wide range of polynomial problems without directly finding the zeros.

Remember, understanding the relationship between zeros and coefficients is not just about memorizing formulas—it's about recognizing the elegant mathematical connections that make polynomial theory beautiful and practical! 🌟
`,
  quiz: {
    questions: [
      ...easyQuestions,
      ...mediumQuestions
    ]
  }
};
