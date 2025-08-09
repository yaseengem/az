import { generateId } from '../../../../../../app/utils/idGenerator';
import { QuizQuestion, TopicQuiz, TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic4Content: TopicContent = {
    id: 'cl9_ch2_t4',
    topicNumber: 4,
    topicName: "Operations on Polynomials",
    duration: 45,
    description: "Understanding how to add, subtract, and multiply polynomials",
    explanation: `
# Operations on Polynomials 🧮

In this topic, we'll learn how to perform various mathematical operations with polynomials. Just like we can add, subtract, and multiply numbers, we can perform similar operations with polynomial expressions. These skills are essential for solving equations and simplifying expressions in algebra! 📊

## Addition and subtraction 🔢

Adding and subtracting polynomials is straightforward - we combine like terms (terms with the same variables and exponents).

### Steps for adding polynomials:
1. Arrange the polynomials with like terms aligned
2. Combine like terms by adding their coefficients
3. Write the simplified expression with all terms

### Steps for subtracting polynomials:
1. Change the sign of each term in the polynomial being subtracted (multiply by -1)
2. Then follow the same process as addition

### Examples of addition:

**Example 1:** Add P(x) = 3x² + 5x - 2 and Q(x) = 2x² - 3x + 4
- Group like terms: (3x² + 2x²) + (5x - 3x) + (-2 + 4)
- Combine coefficients: 5x² + 2x + 2

**Example 2:** Add P(x) = 4x³ - 2x + 7 and Q(x) = 2x³ + 3x² - 5
- Group like terms: (4x³ + 2x³) + (0 + 3x²) + (-2x + 0) + (7 - 5)
- Combine coefficients: 6x³ + 3x² - 2x + 2

### Examples of subtraction:

**Example 1:** Subtract Q(x) = 2x² - 3x + 4 from P(x) = 3x² + 5x - 2
- P(x) - Q(x) = 3x² + 5x - 2 - (2x² - 3x + 4)
- Change signs in Q(x): 3x² + 5x - 2 - 2x² + 3x - 4
- Group like terms: (3x² - 2x²) + (5x + 3x) + (-2 - 4)
- Combine coefficients: x² + 8x - 6

**Example 2:** Subtract Q(x) = 3x² + 4 from P(x) = 2x³ + 5x² - 3x + 1
- P(x) - Q(x) = 2x³ + 5x² - 3x + 1 - (3x² + 4)
- Change signs in Q(x): 2x³ + 5x² - 3x + 1 - 3x² - 4
- Group like terms: 2x³ + (5x² - 3x²) - 3x + (1 - 4)
- Combine coefficients: 2x³ + 2x² - 3x - 3

## Multiplication of polynomials 🔡

Multiplication of polynomials involves multiplying each term of one polynomial with every term of the other polynomial, then combining like terms.

### Monomial × Polynomial:
Multiply the monomial by each term of the polynomial.

**Example 1:** Multiply 3x by (2x² - 4x + 5)
- 3x × 2x² = 6x³
- 3x × (-4x) = -12x²
- 3x × 5 = 15x
- Result: 6x³ - 12x² + 15x

**Example 2:** Multiply 2x² by (4x³ - 2x + 3)
- 2x² × 4x³ = 8x⁵
- 2x² × (-2x) = -4x³
- 2x² × 3 = 6x²
- Result: 8x⁵ - 4x³ + 6x²

### Binomial × Binomial:

There are several methods to multiply binomials:

#### Method 1: Distribute each term
Multiply each term of the first binomial by every term of the second binomial.

**Example:** Multiply (x + 3) by (x + 2)
- x × x = x²
- x × 2 = 2x
- 3 × x = 3x
- 3 × 2 = 6
- Combine like terms: x² + 2x + 3x + 6 = x² + 5x + 6

#### Method 2: FOIL method (First, Outer, Inner, Last)
For products of the form (a + b)(c + d):
- F: Multiply the First terms (a × c)
- O: Multiply the Outer terms (a × d)
- I: Multiply the Inner terms (b × c)
- L: Multiply the Last terms (b × d)
- Add all the products

**Example:** Multiply (2x - 3) by (4x + 5) using FOIL
- F: 2x × 4x = 8x²
- O: 2x × 5 = 10x
- I: -3 × 4x = -12x
- L: -3 × 5 = -15
- Add all products: 8x² + 10x - 12x - 15 = 8x² - 2x - 15

#### Method 3: Vertical multiplication
Similar to long multiplication with numbers, arrange polynomials vertically and multiply.

**Example:** Multiply (x² + 2x - 3) by (2x - 1)

\`\`\`
     x² + 2x - 3
  ×        2x - 1
  --------------
     -x² - 2x + 3   ← multiply by (-1)
   2x³ + 4x² - 6x   ← multiply by (2x)
  --------------
   2x³ + 3x² - 8x + 3
\`\`\`

### Special Products:

Some binomial multiplications have patterns that we can memorize:

1. **(a + b)²** = a² + 2ab + b²

   **Example:** (x + 5)² = x² + 2(x)(5) + 5² = x² + 10x + 25

2. **(a - b)²** = a² - 2ab + b²

   **Example:** (2x - 3)² = (2x)² - 2(2x)(3) + 3² = 4x² - 12x + 9

3. **(a + b)(a - b)** = a² - b²

   **Example:** (x + 4)(x - 4) = x² - 16

4. **(x + a)(x + b)** = x² + (a + b)x + ab

   **Example:** (x + 2)(x + 3) = x² + (2 + 3)x + (2 × 3) = x² + 5x + 6

## Practice problems 🎯

Let's practice with a few examples:

**Problem 1:** Add the polynomials P(x) = 3x³ - 5x + 2 and Q(x) = 2x³ + 4x² - 3
- P(x) + Q(x) = (3x³ + 2x³) + (0 + 4x²) + (-5x + 0) + (2 - 3)
- P(x) + Q(x) = 5x³ + 4x² - 5x - 1

**Problem 2:** Subtract Q(x) = 4x² - x + 7 from P(x) = 2x³ + 4x² - 5
- P(x) - Q(x) = 2x³ + 4x² - 5 - (4x² - x + 7)
- P(x) - Q(x) = 2x³ + 4x² - 5 - 4x² + x - 7
- P(x) - Q(x) = 2x³ + (4x² - 4x²) + x + (-5 - 7)
- P(x) - Q(x) = 2x³ + x - 12

**Problem 3:** Multiply (3x - 2) by (x + 4)
- Using FOIL:
- F: 3x × x = 3x²
- O: 3x × 4 = 12x
- I: -2 × x = -2x
- L: -2 × 4 = -8
- Result: 3x² + 12x - 2x - 8 = 3x² + 10x - 8

**Problem 4:** Multiply (2x + 5)²
- Using the formula (a + b)² = a² + 2ab + b²:
- (2x)² + 2(2x)(5) + 5²
- 4x² + 20x + 25

**Problem 5:** Expand (x - 3)(x² + 3x + 9)
- x(x² + 3x + 9) - 3(x² + 3x + 9)
- x³ + 3x² + 9x - 3x² - 9x - 27
- x³ + 0x² + 0x - 27
- x³ - 27

These operations on polynomials are fundamental skills that you'll use throughout your mathematical journey! Understanding how to add, subtract, and multiply polynomials will help you solve more complex problems in algebra and calculus. 🚀
    `,
    quiz: {
        questions: [
            ...easyQuestions,
            ...mediumQuestions
        ]
    }
}; 