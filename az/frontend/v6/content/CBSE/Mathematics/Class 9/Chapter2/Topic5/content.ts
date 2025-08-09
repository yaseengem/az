import { generateId } from '../../../../../../app/utils/idGenerator';
import { QuizQuestion, TopicQuiz, TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic5Content: TopicContent = {
    id: 'cl9_ch2_t5',
    topicNumber: 5,
    topicName: "Algebraic Identities",
    duration: 45,
    description: "Understanding and applying algebraic identities for polynomial simplification",
    explanation: `
# Algebraic Identities 📐

Algebraic identities are special formulas that help us simplify expressions, factorize polynomials, and solve various mathematical problems efficiently. These powerful tools save us time and effort in complex algebraic manipulations. Let's explore these essential mathematical shortcuts! 🔍

## What are algebraic identities? 🤔

**Algebraic identities** are equations that are true for all values of the variables involved. They represent special patterns in algebraic expressions that occur frequently.

These identities provide ready-made solutions to certain types of algebraic expressions, eliminating the need for step-by-step calculations each time.

## Important algebraic identities 📝

Here are the most important algebraic identities involving polynomials:

### 1. Square of binomials

**(a + b)² = a² + 2ab + b²**

This identity tells us that the square of a sum equals the sum of the squares plus twice the product of the terms.

**Example:**
- (x + 3)² = x² + 2(x)(3) + 3² = x² + 6x + 9
- (2y + 5)² = (2y)² + 2(2y)(5) + 5² = 4y² + 20y + 25

**(a - b)² = a² - 2ab + b²**

This identity tells us that the square of a difference equals the sum of the squares minus twice the product of the terms.

**Example:**
- (x - 4)² = x² - 2(x)(4) + 4² = x² - 8x + 16
- (3z - 2)² = (3z)² - 2(3z)(2) + 2² = 9z² - 12z + 4

### 2. Product of sum and difference

**(a + b)(a - b) = a² - b²**

This identity tells us that the product of the sum and difference of the same two terms equals the difference of their squares.

**Example:**
- (x + 5)(x - 5) = x² - 5² = x² - 25
- (2y + 3)(2y - 3) = (2y)² - 3² = 4y² - 9

### 3. Product of binomials

**(a + b)(c + d) = ac + ad + bc + bd**

This identity gives us a general formula for multiplying two binomials.

**Example:**
- (x + 2)(x + 3) = x² + 3x + 2x + 6 = x² + 5x + 6
- (2y - 1)(3y + 4) = 6y² + 8y - 3y - 4 = 6y² + 5y - 4

**(x + a)(x + b) = x² + (a + b)x + ab**

This special case is useful when both binomials have the same first term.

**Example:**
- (x + 5)(x + 3) = x² + (5 + 3)x + (5 × 3) = x² + 8x + 15
- (y - 2)(y - 7) = y² + (-2 + (-7))y + (-2 × (-7)) = y² - 9y + 14

### 4. Cube of binomials

**(a + b)³ = a³ + 3a²b + 3ab² + b³**

This identity gives us the cube of a sum.

**Example:**
- (x + 2)³ = x³ + 3x²(2) + 3x(2)² + 2³ = x³ + 6x² + 12x + 8

**(a - b)³ = a³ - 3a²b + 3ab² - b³**

This identity gives us the cube of a difference.

**Example:**
- (x - 1)³ = x³ - 3x²(1) + 3x(1)² - 1³ = x³ - 3x² + 3x - 1

### 5. Sum and difference of cubes

**a³ + b³ = (a + b)(a² - ab + b²)**

This identity helps us factorize the sum of cubes.

**Example:**
- x³ + 8 = x³ + 2³ = (x + 2)(x² - x(2) + 2²) = (x + 2)(x² - 2x + 4)

**a³ - b³ = (a - b)(a² + ab + b²)**

This identity helps us factorize the difference of cubes.

**Example:**
- x³ - 27 = x³ - 3³ = (x - 3)(x² + x(3) + 3²) = (x - 3)(x² + 3x + 9)

## Applications of algebraic identities 🛠️

Algebraic identities have numerous applications:

### 1. Simplifying expressions

**Example:** Simplify (x + 5)² - (x - 5)²
- Using the identities: (a + b)² = a² + 2ab + b² and (a - b)² = a² - 2ab + b²
- (x + 5)² - (x - 5)² = (x² + 10x + 25) - (x² - 10x + 25)
- = x² + 10x + 25 - x² + 10x - 25
- = 20x

### 2. Factorizing expressions

**Example:** Factorize x² - 9
- This is a difference of squares: x² - 9 = x² - 3²
- Using the identity: a² - b² = (a + b)(a - b)
- x² - 9 = (x + 3)(x - 3)

### 3. Mental calculations

**Example:** Calculate 98 × 102
- We can view this as (100 - 2) × (100 + 2)
- Using the identity: (a - b)(a + b) = a² - b²
- 98 × 102 = 100² - 2² = 10000 - 4 = 9996

### 4. Polynomial division

**Example:** Divide x³ - 8 by x - 2
- Recognize this as a difference of cubes: x³ - 8 = x³ - 2³
- Using the identity: a³ - b³ = (a - b)(a² + ab + b²)
- x³ - 8 = (x - 2)(x² + 2x + 4)
- So, (x³ - 8) ÷ (x - 2) = x² + 2x + 4

## Proving algebraic identities ✅

We can verify algebraic identities by expanding the expressions on both sides and showing they are equal.

**Example:** Prove that (a + b)² = a² + 2ab + b²

**Proof:**
- (a + b)² = (a + b)(a + b)
- = a(a + b) + b(a + b)
- = a² + ab + ba + b²
- = a² + ab + ab + b²
- = a² + 2ab + b²

## Practice problems 🏋️‍♀️

Let's solve some problems using algebraic identities:

**Problem 1:** Expand (3x - 4y)²
- Using the identity: (a - b)² = a² - 2ab + b²
- (3x - 4y)² = (3x)² - 2(3x)(4y) + (4y)²
- = 9x² - 24xy + 16y²

**Problem 2:** Factorize x² + 6x + 9
- This looks like a perfect square trinomial
- Using the identity: a² + 2ab + b² = (a + b)²
- x² + 6x + 9 = x² + 2(x)(3) + 3²
- = (x + 3)²

**Problem 3:** Simplify (2x + 3)(2x - 3)
- Using the identity: (a + b)(a - b) = a² - b²
- (2x + 3)(2x - 3) = (2x)² - 3²
- = 4x² - 9

**Problem 4:** Factorize 8x³ + 27
- This is a sum of cubes: 8x³ + 27 = (2x)³ + 3³
- Using the identity: a³ + b³ = (a + b)(a² - ab + b²)
- 8x³ + 27 = (2x + 3)((2x)² - (2x)(3) + 3²)
- = (2x + 3)(4x² - 6x + 9)

## Tips for using algebraic identities 🌟

1. **Identify the pattern**: Look for expressions that match standard identities.

2. **Rearrange if necessary**: Sometimes you may need to rearrange terms to match a known identity.

3. **Substitute values**: If the expression has coefficients, substitute them into the appropriate identity.

4. **Combine identities**: Complex problems may require applying multiple identities in sequence.

5. **Practice regularly**: The more you practice, the more easily you'll recognize patterns.

## Summary 📚

Algebraic identities are powerful tools that simplify algebraic manipulations. They help us:
- Expand expressions quickly without multiplying term by term
- Factorize expressions by recognizing standard patterns
- Perform calculations mentally using mathematical shortcuts
- Solve complex problems by breaking them into recognizable patterns

Mastering these identities will make algebraic operations faster and more intuitive. In the next topic, we'll see how these concepts come together in the factorization of polynomials! 🚀
    `,
    quiz: {
        questions: [
            ...easyQuestions,
            ...mediumQuestions
        ]
    }
}; 