import { TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic2Content: TopicContent = {
  id: 'cl8_ch8_t2',
  topicNumber: 2,
  topicName: "Addition, Subtraction, Multiplication of Expressions",
  duration: 45,
  description: "Learn operations on algebraic expressions including addition, subtraction, multiplication of terms and use of algebraic identities",
  explanation: `
# Addition, Subtraction, and Multiplication of Expressions 🧮

Algebraic expressions are combinations of variables, numbers, and operations such as addition, subtraction, and multiplication. Learning how to perform these operations on expressions is essential for solving equations and simplifying mathematical problems. Let's explore these operations in detail! 🚀

## Understanding Terms and Like Terms 📝

Before we get into operations, let's understand what makes up an algebraic expression:

### Terms
A term is a product of numbers and variables. The number part is called the **coefficient**. For example:
- In the term 5xy, 5 is the coefficient
- In the term -3a²b, -3 is the coefficient
- In the term x², the coefficient is 1 (even though it's not written)

### Like Terms
Like terms have exactly the same variables raised to the same powers. We can add or subtract like terms but not unlike terms. For example:
- 3x and 7x are like terms (both have x with power 1)
- 5xy and -2xy are like terms (both have x and y with power 1)
- 3x² and 2x are unlike terms (different powers of x)
- 4ab and 4ba are like terms (since multiplication is commutative)

## Addition of Algebraic Expressions ➕

To add algebraic expressions, we combine like terms. The steps are:
1. Identify like terms in both expressions
2. Add the coefficients of like terms
3. Keep the variables and their powers the same

### Example 1:
Add 3x + 5y and 4x - 2y

Solution:
1. Identify like terms: 3x and 4x are like terms; 5y and -2y are like terms
2. Add coefficients: 3 + 4 = 7 for x terms; 5 + (-2) = 3 for y terms
3. Result: (3x + 4x) + (5y - 2y) = 7x + 3y

### Example 2:
Add 2a² + 3ab + 4b² and 5a² - 2ab + b²

Solution:
- Like terms: 2a² and 5a², 3ab and -2ab, 4b² and b²
- Adding: (2a² + 5a²) + (3ab - 2ab) + (4b² + b²) = 7a² + ab + 5b²

## Subtraction of Algebraic Expressions ➖

To subtract one expression from another, we add the negative of the second expression to the first. This means changing the sign of each term in the second expression and then adding.

### Example 1:
Subtract 4x - 3y from 9x + 2y

Solution:
1. Change the signs in the second expression: 4x - 3y becomes -4x + 3y
2. Add to the first expression: 9x + 2y + (-4x + 3y) = 9x - 4x + 2y + 3y = 5x + 5y

### Example 2:
Subtract 3a² - 4ab + 2b² from 8a² + 5ab - b²

Solution:
- Change signs: 3a² - 4ab + 2b² becomes -3a² + 4ab - 2b²
- Add: 8a² + 5ab - b² + (-3a² + 4ab - 2b²) = 5a² + 9ab - 3b²

## Multiplication of Algebraic Expressions ✖️

There are different cases for multiplication:

### 1. Multiplying a Monomial by a Monomial
Multiply the coefficients and add the exponents of like variables.

Example: (3x²) × (2x³) = 3 × 2 × x²⁺³ = 6x⁵

### 2. Multiplying a Monomial by a Polynomial
Multiply each term of the polynomial by the monomial.

Example: 2x(3x² + 4x - 5)
- 2x × 3x² = 6x³
- 2x × 4x = 8x²
- 2x × (-5) = -10x
- Result: 6x³ + 8x² - 10x

### 3. Multiplying a Binomial by a Binomial
Use the distributive property (FOIL method: First, Outer, Inner, Last).

Example: (x + 3)(x + 2)
- First terms: x × x = x²
- Outer terms: x × 2 = 2x
- Inner terms: 3 × x = 3x
- Last terms: 3 × 2 = 6
- Combining: x² + 2x + 3x + 6 = x² + 5x + 6

## Special Products (Algebraic Identities) 🌟

Some products occur frequently and can be memorized as identities:

### 1. (a + b)² = a² + 2ab + b²
Example: (x + 5)² = x² + 2(x)(5) + 5² = x² + 10x + 25

### 2. (a - b)² = a² - 2ab + b²
Example: (y - 3)² = y² - 2(y)(3) + 3² = y² - 6y + 9

### 3. (a + b)(a - b) = a² - b²
Example: (2m + n)(2m - n) = (2m)² - n² = 4m² - n²

### 4. (x + a)(x + b) = x² + (a + b)x + ab
Example: (x + 2)(x + 3) = x² + (2 + 3)x + 2×3 = x² + 5x + 6

## Practical Applications 🏗️

Algebraic expressions are used in many real-life situations:

### Example 1: Area Calculation
If a rectangular field has length (x + 3) meters and width x meters, its area will be:
Area = Length × Width = (x + 3) × x = x² + 3x square meters

### Example 2: Temperature Conversion
The formula to convert Celsius (C) to Fahrenheit (F) is F = (9C/5) + 32
If the temperature changes by x degrees Celsius, the change in Fahrenheit is:
Change in F = 9x/5 degrees

## Common Mistakes to Avoid ⚠️

1. **Combining unlike terms**: You cannot add 3x² and 3x directly; they are unlike terms
2. **Forgetting the middle term**: (a + b)² is not a² + b² (it's a² + 2ab + b²)
3. **Distributing incorrectly**: 2(x + y) = 2x + 2y, not 2x + y
4. **Errors with negative signs**: -3(2x - 4) = -6x + 12, not -6x - 12

## Practice Problems 🧩

1. Simplify: (3x - 2y) + (5x + 7y)
   Answer: 8x + 5y

2. Find the product: (a + 5)(a - 2)
   Answer: a² + 3a - 10

3. Expand: (2p - 3q)²
   Answer: 4p² - 12pq + 9q²

4. Simplify: 3(x - 4) - 2(2x + 1)
   Answer: -x - 14

5. Find the value of (x + 3)² - (x - 3)² for any value of x
   Answer: 12x

## Summary ✨

- **Addition and subtraction** of algebraic expressions involve combining like terms
- **Multiplication** requires applying the distributive property and multiplying each term correctly
- **Algebraic identities** like (a + b)² and (a - b)² help simplify complex calculations
- Always identify like terms correctly before performing operations
- Distribute signs properly when working with negative terms
- Memorize common algebraic identities for efficient problem-solving

Understanding these operations on algebraic expressions builds a strong foundation for more advanced topics like factorization, solving equations, and working with polynomials. With practice, you'll become confident in manipulating these expressions! 📈

Remember, algebra is a language that helps us express and solve real-world problems. Master these operations, and you'll have powerful tools to tackle mathematical challenges! 🔍
`,
  quiz: {
    questions: [
      ...easyQuestions,
      ...mediumQuestions
    ]
  }
};
