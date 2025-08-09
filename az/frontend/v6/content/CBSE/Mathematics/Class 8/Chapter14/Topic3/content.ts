import { TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic3Content: TopicContent = {
    id: 'cl8_ch14_t3',
    topicNumber: 3,
    topicName: "Properties of numbers",
    duration: 45,
    description: "Understanding fundamental properties of numbers including commutative, associative, distributive, identity, and inverse properties with their applications.",
    explanation: `
# Properties of Numbers 🔢

Properties of numbers are fundamental rules that help us understand how numbers behave in mathematical operations. These properties make calculations easier and help us solve complex problems systematically. Let's explore these important properties! 📚

## Basic Properties of Numbers 📝

### 1. Commutative Property ↔️
- Applies to addition and multiplication
- The order of numbers doesn't affect the result
- Examples:
  * Addition: a + b = b + a
    * 5 + 3 = 3 + 5 = 8
  * Multiplication: a × b = b × a
    * 4 × 6 = 6 × 4 = 24
- Note: Doesn't work for subtraction and division!

### 2. Associative Property 🔄
- Applies to addition and multiplication
- The grouping of numbers doesn't affect the result
- Examples:
  * Addition: (a + b) + c = a + (b + c)
    * (2 + 3) + 4 = 2 + (3 + 4) = 9
  * Multiplication: (a × b) × c = a × (b × c)
    * (2 × 3) × 4 = 2 × (3 × 4) = 24
- Note: Doesn't work for subtraction and division!

### 3. Distributive Property 📊
- Multiplication distributes over addition or subtraction
- a × (b + c) = (a × b) + (a × c)
- Examples:
  * 3 × (4 + 5) = (3 × 4) + (3 × 5)
  * 3 × 9 = 12 + 15 = 27
  * 2 × (10 - 3) = (2 × 10) - (2 × 3)
  * 2 × 7 = 20 - 6 = 14

### 4. Identity Properties 🎯
#### Additive Identity (0)
- Adding zero to any number gives the same number
- a + 0 = a
- Examples: 
  * 5 + 0 = 5
  * -3 + 0 = -3

#### Multiplicative Identity (1)
- Multiplying any number by one gives the same number
- a × 1 = a
- Examples:
  * 7 × 1 = 7
  * -4 × 1 = -4

### 5. Inverse Properties ⚖️
#### Additive Inverse
- For every number a, there exists -a such that a + (-a) = 0
- Examples:
  * 5 + (-5) = 0
  * -3 + 3 = 0

#### Multiplicative Inverse
- For every non-zero number a, there exists 1/a such that a × (1/a) = 1
- Examples:
  * 4 × (1/4) = 1
  * -2 × (-1/2) = 1

## Special Properties 🌟

### 1. Properties of Zero
- Additive Identity: a + 0 = a
- Multiplication by Zero: a × 0 = 0
- Division by Zero: Undefined
- Zero divided by any non-zero number: 0 ÷ a = 0

### 2. Properties of One
- Multiplicative Identity: a × 1 = a
- Division by One: a ÷ 1 = a
- One raised to any power: 1ⁿ = 1

### 3. Properties of Negative Numbers
- Product of two negative numbers is positive
  * (-2) × (-3) = 6
- Product of a positive and negative number is negative
  * 2 × (-3) = -6
- Product of odd number of negative numbers is negative
  * (-2) × (-3) × (-4) = -24
- Product of even number of negative numbers is positive
  * (-2) × (-3) × (-4) × (-5) = 120

## Applications in Algebra 📐

### 1. Like Terms
- Terms with same variables can be combined
- Examples:
  * 2x + 3x = 5x
  * 3xy + 2xy = 5xy

### 2. Factoring
- Using distributive property backwards
- Examples:
  * 2x + 6 = 2(x + 3)
  * ax + ay = a(x + y)

### 3. Perfect Squares
- (a + b)² = a² + 2ab + b²
- (a - b)² = a² - 2ab + b²
- Examples:
  * (x + 2)² = x² + 4x + 4
  * (x - 3)² = x² - 6x + 9

### 4. Difference of Squares
- (a + b)(a - b) = a² - b²
- Examples:
  * (x + 5)(x - 5) = x² - 25
  * (2x + 3)(2x - 3) = 4x² - 9

## Practical Applications 🌍

### 1. Mental Math
- Using properties to calculate quickly
- Example: 25 × 98
  * = 25 × (100 - 2)
  * = (25 × 100) - (25 × 2)
  * = 2500 - 50
  * = 2450

### 2. Problem Solving
- Rearranging terms using properties
- Example: Find the value of 47 + 86 + 53 + 14
  * = (47 + 53) + (86 + 14)
  * = 100 + 100
  * = 200

### 3. Algebraic Expressions
- Simplifying expressions
- Example: Simplify 2(x + 3) - 3(x + 3)
  * = (2 - 3)(x + 3)
  * = -1(x + 3)
  * = -x - 3

## Common Mistakes to Avoid ⚠️

1. Applying commutative property to subtraction or division
   * 8 - 3 ≠ 3 - 8
   * 8 ÷ 2 ≠ 2 ÷ 8

2. Distributing incorrectly
   * 2(x + 3) = 2x + 6 (correct)
   * 2(x + 3) ≠ 2x + 3 (incorrect)

3. Forgetting negative signs
   * (-2)(-3) = 6
   * (-2)(3) = -6

4. Combining unlike terms
   * 2x + 3y ≠ 5xy
   * 3x² + 2x ≠ 5x³

## Summary ✨

1. Key Properties:
   - Commutative (order)
   - Associative (grouping)
   - Distributive (multiplication over addition)
   - Identity (0 and 1)
   - Inverse (additive and multiplicative)

2. Important Points:
   - Not all properties work for all operations
   - Zero and one have special properties
   - Negative numbers follow specific rules
   - Properties help in simplifying expressions

3. Applications:
   - Mental math calculations
   - Algebraic simplification
   - Problem-solving strategies
   - Mathematical proofs

Remember:
- Properties make calculations easier
- Each property has specific conditions
- Practice helps in choosing the right property
- Understanding properties helps in advanced math

Keep practicing these properties, and you'll find mathematics becoming more logical and easier to understand! 🎯
`,
    quiz: {
        questions: [
            ...easyQuestions,
            ...mediumQuestions
        ]
    }
}; 