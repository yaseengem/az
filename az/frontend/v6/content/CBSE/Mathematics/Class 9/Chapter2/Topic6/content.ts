import { generateId } from '../../../../../../app/utils/idGenerator';
import { QuizQuestion, TopicQuiz, TopicContent } from '../../../../../types';
import { easyQuestions } from './/quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic6Content: TopicContent = {
    id: 'cl9_ch2_t6',
    topicNumber: 6,
    topicName: "Factorisation of Polynomials",
    duration: 45,
    description: "Learning methods to factorize polynomials and their applications",
    explanation: `
# Factorisation of Polynomials 📊

In this topic, we'll learn how to break down polynomials into their basic building blocks called factors. Factorisation is one of the most important skills in algebra as it helps us solve equations, simplify expressions, and understand the behavior of polynomial functions. Let's dive in! 🔍

## What is Factorisation? 🤔

**Factorisation** is the process of expressing a polynomial as a product of its factors (simpler polynomials).

For example, the polynomial x² - 9 can be factorized as (x + 3)(x - 3).

Factorisation is like breaking down a number into its prime factors:
- 12 = 2 × 2 × 3 (prime factorisation of a number)
- x² - 9 = (x + 3)(x - 3) (factorisation of a polynomial)

## Why is Factorisation Important? 🌟

Factorisation helps us:
1. Solve polynomial equations
2. Simplify complex expressions
3. Find roots/zeroes of polynomials
4. Understand the behavior of functions (like where they cross the x-axis)
5. Work with algebraic fractions

## Common Factorisation Methods 🛠️

Let's explore different methods to factorize polynomials:

### 1. Common Factor Method

This is the simplest method where we identify and take out the common factors from all terms.

**Steps:**
1. Find the GCD (Greatest Common Divisor) of all terms
2. Take out the common factor
3. Write the remaining expression in brackets

**Examples:**

a) 3x² + 6x + 9
   - Common factor: 3
   - 3x² + 6x + 9 = 3(x² + 2x + 3)

b) 5x³y + 10x²y² - 15xy³
   - Common factor: 5xy
   - 5x³y + 10x²y² - 15xy³ = 5xy(x² + 2xy - 3y²)

### 2. Factorisation by Grouping

When a polynomial has four or more terms, we can sometimes factorize by grouping the terms.

**Steps:**
1. Group terms that have common factors
2. Factor out the common factors from each group
3. Look for a common binomial factor between the groups

**Example:**

Factorize: x³ + 2x² + 3x + 6

1. Group the terms: (x³ + 2x²) + (3x + 6)
2. Factor each group: x²(x + 2) + 3(x + 2)
3. Factor out the common factor (x + 2): (x + 2)(x² + 3)

### 3. Factorizing Quadratic Polynomials

For quadratic polynomials of the form ax² + bx + c, we need to find factors p and q such that p + q = b and p × q = a × c.

**Steps:**
1. Write the polynomial in the form ax² + bx + c
2. Find two numbers p and q such that p + q = b and p × q = ac
3. Rewrite the middle term bx as px + qx
4. Group and factorize

**Example:**

Factorize: x² + 5x + 6

1. a = 1, b = 5, c = 6
2. We need numbers p and q where p + q = 5 and p × q = 6
3. The numbers are 2 and 3 (2 + 3 = 5 and 2 × 3 = 6)
4. Rewrite: x² + 2x + 3x + 6
5. Group: (x² + 2x) + (3x + 6)
6. Factor each group: x(x + 2) + 3(x + 2)
7. Factor out (x + 2): (x + 2)(x + 3)

### 4. Using the Quadratic Formula

If direct factorization is difficult, we can use the quadratic formula to find the roots, and then form the factors.

For ax² + bx + c = 0, the roots are:
x = (-b ± √(b² - 4ac)) / 2a

If the roots are α and β, then:
ax² + bx + c = a(x - α)(x - β)

**Example:**

Factorize: 2x² + 5x - 3

Using the quadratic formula:
x = (-5 ± √(25 + 24)) / 4
x = (-5 ± √49) / 4
x = (-5 ± 7) / 4
x = 1/2 or x = -2

So, 2x² + 5x - 3 = 2(x - 1/2)(x + 2) = (2x - 1)(x + 2)

### 5. Using Special Identities

Several algebraic identities can help with factorisation:

a) **Perfect Square Trinomials:**
   - a² + 2ab + b² = (a + b)²
   - a² - 2ab + b² = (a - b)²

   **Example:** x² + 6x + 9 = (x + 3)²

b) **Difference of Squares:**
   - a² - b² = (a + b)(a - b)

   **Example:** x² - 16 = (x + 4)(x - 4)

c) **Sum/Difference of Cubes:**
   - a³ + b³ = (a + b)(a² - ab + b²)
   - a³ - b³ = (a - b)(a² + ab + b²)

   **Example:** x³ + 8 = x³ + 2³ = (x + 2)(x² - 2x + 4)

### 6. Using the Factor Theorem

The Factor Theorem states that (x - a) is a factor of polynomial P(x) if and only if P(a) = 0.

**Steps:**
1. Find a value of 'a' for which P(a) = 0
2. Use synthetic division to divide P(x) by (x - a)
3. Factorize the quotient further if possible

**Example:**

Factorize: x³ - 6x² + 11x - 6

Let's check if x = 1 is a zero:
P(1) = 1³ - 6(1)² + 11(1) - 6 = 1 - 6 + 11 - 6 = 0

So (x - 1) is a factor. Using synthetic division:
1 | 1  -6  11  -6
    1  -5   6
  ---------------
    1  -5   6   0

So, x³ - 6x² + 11x - 6 = (x - 1)(x² - 5x + 6)

We can further factorize x² - 5x + 6 = (x - 2)(x - 3)

Therefore, x³ - 6x² + 11x - 6 = (x - 1)(x - 2)(x - 3)

## Practice Problems 🏋️‍♀️

Let's practice with a few examples:

**Problem 1:** Factorize 2x² - 7x - 15

**Solution:**
We're looking for factors p and q where p + q = -7 and p × q = -30 (2 × -15)
The numbers are -10 and 3 (-10 + 3 = -7 and -10 × 3 = -30)

2x² - 7x - 15 = 2x² - 10x + 3x - 15
               = 2x(x - 5) + 3(x - 5)
               = (x - 5)(2x + 3)

**Problem 2:** Factorize x³ + 27

**Solution:**
This is a sum of cubes: x³ + 3³
Using the formula a³ + b³ = (a + b)(a² - ab + b²):
x³ + 27 = (x + 3)(x² - 3x + 9)

**Problem 3:** Factorize 9x² - 16

**Solution:**
This is a difference of squares: (3x)² - 4²
Using the formula a² - b² = (a + b)(a - b):
9x² - 16 = (3x + 4)(3x - 4)

**Problem 4:** Factorize 8x³ + 1

**Solution:**
This is a sum of cubes: (2x)³ + 1³
Using the formula a³ + b³ = (a + b)(a² - ab + b²):
8x³ + 1 = (2x)³ + 1³ = (2x + 1)((2x)² - (2x)(1) + 1²) = (2x + 1)(4x² - 2x + 1)

## Key Points to Remember 🌟

1. Always look for common factors first
2. Identify if the polynomial fits any special pattern (like difference of squares)
3. For quadratic polynomials, find numbers that give the correct sum and product
4. Use the Factor Theorem for higher-degree polynomials
5. Remember that factorizing completely means expressing as a product of irreducible factors
6. Check your factorization by multiplying the factors back to get the original polynomial

Mastering factorisation techniques will significantly improve your skills in algebra and help you solve a wide range of mathematical problems. Next, we'll explore algebraic identities in more detail! 🚀
    `,
    quiz: {
        questions: [
            ...easyQuestions,
            ...mediumQuestions
        ]
    }
}; 