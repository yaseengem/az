import { TopicContent } from '../../../../../types';
import { quiz_easy } from './quiz_easy';
import { quiz_medium } from './quiz_medium';

export const content: TopicContent = {
  id: 'cl8_ch8_t3',
  topicNumber: 3,
  topicName: 'Standard algebraic identities',
  duration: 45,
  description: 'Learn about standard algebraic identities including squares of sums, squares of differences, and products of sums and differences.',
  explanation: `
# Standard Algebraic Identities

Algebraic identities are equations that are true for all values of the variables. They are extremely useful in simplifying complex algebraic expressions, performing mental calculations, and solving various mathematical problems. In this section, we will explore the most important standard algebraic identities.

## Important Algebraic Identities

### 1. Square of a Sum: (a + b)²
The identity: **(a + b)² = a² + 2ab + b²**

This identity helps us find the square of a sum without multiplying the entire expression.

**Example:** Let's calculate (7 + 3)²
Using the identity: (7 + 3)² = 7² + 2(7)(3) + 3²
                    = 49 + 42 + 9
                    = 100

This is much faster than multiplying (10)(10) directly.

### 2. Square of a Difference: (a - b)²
The identity: **(a - b)² = a² - 2ab + b²**

This helps us find the square of a difference quickly.

**Example:** Let's calculate (9 - 4)²
Using the identity: (9 - 4)² = 9² - 2(9)(4) + 4²
                    = 81 - 72 + 16
                    = 25

### 3. Product of Sum and Difference: (a + b)(a - b)
The identity: **(a + b)(a - b) = a² - b²**

This is particularly useful for finding the difference of squares.

**Example:** Let's calculate 103 × 97
We can rewrite this as (100 + 3)(100 - 3)
Using the identity: (100 + 3)(100 - 3) = 100² - 3²
                    = 10000 - 9
                    = 9991

### 4. Cube of a Sum: (a + b)³
The identity: **(a + b)³ = a³ + 3a²b + 3ab² + b³**

This identity helps us expand the cube of a sum.

**Example:** Let's expand (2 + 1)³
Using the identity: (2 + 1)³ = 2³ + 3(2²)(1) + 3(2)(1²) + 1³
                    = 8 + 12 + 6 + 1
                    = 27

### 5. Cube of a Difference: (a - b)³
The identity: **(a - b)³ = a³ - 3a²b + 3ab² - b³**

This identity helps us expand the cube of a difference.

**Example:** Let's expand (5 - 2)³
Using the identity: (5 - 2)³ = 5³ - 3(5²)(2) + 3(5)(2²) - 2³
                    = 125 - 150 + 60 - 8
                    = 27

### 6. Sum of Cubes: a³ + b³
The identity: **a³ + b³ = (a + b)(a² - ab + b²)**

This is useful for factoring the sum of two cubes.

**Example:** Let's factorize x³ + 8
We can rewrite this as x³ + 2³
Using the identity: x³ + 2³ = (x + 2)(x² - x(2) + 2²)
                    = (x + 2)(x² - 2x + 4)

### 7. Difference of Cubes: a³ - b³
The identity: **a³ - b³ = (a - b)(a² + ab + b²)**

This is useful for factoring the difference of two cubes.

**Example:** Let's factorize 27x³ - 8
We can rewrite this as (3x)³ - 2³
Using the identity: (3x)³ - 2³ = (3x - 2)((3x)² + (3x)(2) + 2²)
                    = (3x - 2)(9x² + 6x + 4)

## Applications of Algebraic Identities

### 1. Mental Calculations
Algebraic identities make mental calculations much easier, especially for squares of numbers close to multiples of 10 or 100.

**Example:** Calculate 98²
Using (a - b)² = a² - 2ab + b², where a = 100 and b = 2
98² = (100 - 2)² = 100² - 2(100)(2) + 2²
    = 10000 - 400 + 4
    = 9604

### 2. Simplifying Algebraic Expressions
Identities help us simplify complex expressions by recognizing patterns.

**Example:** Simplify (x + 3)² - (x - 3)²
(x + 3)² - (x - 3)² = (x² + 6x + 9) - (x² - 6x + 9)
                     = 12x

### 3. Factorizing Expressions
We can use identities to factorize expressions by recognizing patterns.

**Example:** Factorize x² + 6x + 9
This matches the pattern a² + 2ab + b² = (a + b)², where a = x and b = 3
Therefore, x² + 6x + 9 = (x + 3)²

## Practice Problems

1. Expand (3x + 2y)²
2. Find the value of 98² using algebraic identities
3. Simplify (a + b)³ - (a - b)³
4. Factorize 8a³ + 27b³
5. Calculate 997 × 1003 using algebraic identities

## Summary

Standard algebraic identities are powerful tools that help us:
- Perform calculations quickly without working through long multiplication
- Simplify complex algebraic expressions efficiently
- Factorize expressions into simpler forms
- Solve problems in various branches of mathematics

The most important identities to remember are:
- (a + b)² = a² + 2ab + b²
- (a - b)² = a² - 2ab + b²
- (a + b)(a - b) = a² - b²
- (a + b)³ = a³ + 3a²b + 3ab² + b³
- (a - b)³ = a³ - 3a²b + 3ab² - b³
- a³ + b³ = (a + b)(a² - ab + b²)
- a³ - b³ = (a - b)(a² + ab + b²)

These identities are not just formulas to memorize but essential tools that will help you solve problems more efficiently and develop a deeper understanding of algebra.
  `,
  quiz: {
    questions: [
      // Converting easy quiz questions
      ...quiz_easy.questions.map(q => ({
        id: q.id,
        type: 'mcq' as const,
        question: q.question,
        options: q.options.map(opt => opt.text),
        correctAnswer: q.options.find(opt => opt.isCorrect)?.text || '',
        explanation: q.explanation,
        difficulty: 'easy' as const,
        marks: 1,
        recommendedTime: 30,
      })),
      
      // Converting medium quiz questions
      ...quiz_medium.questions.map(q => ({
        id: q.id,
        type: 'mcq' as const,
        question: q.question,
        options: q.options.map(opt => opt.text),
        correctAnswer: q.options.find(opt => opt.isCorrect)?.text || '',
        explanation: q.explanation,
        difficulty: 'medium' as const,
        marks: 2,
        recommendedTime: 45,
      }))
    ]
  }
};
