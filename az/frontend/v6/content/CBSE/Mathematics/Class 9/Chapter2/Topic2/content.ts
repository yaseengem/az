import { generateId } from '../../../../../../app/utils/idGenerator';
import { QuizQuestion, TopicQuiz, TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic2Content: TopicContent = {
   id: 'cl9_ch2_t2',
   topicNumber: 2,
   topicName: "Polynomials in One Variable",
   duration: 45,
   description: "Understanding polynomials in one variable, their degrees and types",
   explanation: `
# Polynomials in One Variable 📏

After our introduction to the concept of polynomials, let's now focus specifically on polynomials in one variable. These are the most common type of polynomials that you'll encounter in your mathematical journey. Understanding their properties and classification will help you solve various algebraic problems efficiently! 🧮

## Formal definition 📝

A **polynomial in one variable** x is an expression of the form:

P(x) = aₙxⁿ + aₙ₋₁xⁿ⁻¹ + ... + a₂x² + a₁x + a₀

Where:
- x is the variable
- aₙ, aₙ₋₁, ..., a₂, a₁, a₀ are constants called coefficients
- n is a non-negative integer called the degree of the polynomial
- aₙ ≠ 0 (the coefficient of the highest power must not be zero)

**Examples of polynomials in one variable:**
- P(x) = 5x³ + 2x² - 7x + 3
- P(y) = 2y² - 4
- P(z) = 7z
- P(t) = 9

## Standard form of a polynomial 📊

The **standard form** of a polynomial is written with the terms arranged in descending order of powers (from highest to lowest):

P(x) = aₙxⁿ + aₙ₋₁xⁿ⁻¹ + ... + a₂x² + a₁x + a₀

For example, the standard form of 3 + 2x² + 5x - x³ is:
P(x) = -x³ + 2x² + 5x + 3

Writing polynomials in standard form makes them easier to add, subtract, compare degrees, and identify the leading term.

## Degree of a polynomial 🔍

The **degree** of a polynomial in one variable is the highest power of the variable that appears in the polynomial.

**Examples:**
- Degree of 7x³ + 5x - 2 is 3
- Degree of x² - 4 is 2
- Degree of 5 is 0 (constant polynomial)
- Degree of 3x⁴ - 2x² + 5x - 7 is 4

**Special cases:**
- The degree of the zero polynomial (P(x) = 0) is undefined or sometimes denoted as -∞
- The degree of a non-zero constant polynomial (like P(x) = 5) is 0

## Classification based on degree 📋

Polynomials in one variable are commonly classified by their degree:

1. **Constant Polynomial** (Degree 0)
   - Form: P(x) = a₀ (where a₀ is a non-zero constant)
   - Examples: 5, -3, 8, 12
   - Graph: A horizontal line parallel to the x-axis

2. **Linear Polynomial** (Degree 1)
   - Form: P(x) = a₁x + a₀ (where a₁ ≠ 0)
   - Examples: 3x + 2, -5x + 7, x - 4
   - Graph: Always a straight line (hence "linear") 📈
   - Has exactly one zero (root): x = -a₀/a₁

3. **Quadratic Polynomial** (Degree 2)
   - Form: P(x) = a₂x² + a₁x + a₀ (where a₂ ≠ 0)
   - Examples: x² + 3x + 2, 4x² - 1, 2x² + x
   - Graph: Forms a parabola (U-shape or inverted U-shape) ∪
   - Can have 0, 1, or 2 real zeros

4. **Cubic Polynomial** (Degree 3)
   - Form: P(x) = a₃x³ + a₂x² + a₁x + a₀ (where a₃ ≠ 0)
   - Examples: x³ - x, 2x³ + 3x² - x + 5
   - Graph: Can have S-shape curves with at most 3 real zeros
   - Always has at least one real zero

5. **Quartic Polynomial** (Degree 4)
   - Form: P(x) = a₄x⁴ + a₃x³ + a₂x² + a₁x + a₀ (where a₄ ≠ 0)
   - Example: x⁴ + 2x² + 1

6. **Higher Degree Polynomials**
   - For degrees 5 and above, there's no general algebraic formula to find all zeros
   - Named based on degree: Quintic (5), Sextic (6), Septic (7), etc.

## Classification based on number of terms 📝

Polynomials are also classified by the number of terms they contain:

1. **Monomial:** Contains exactly one term
   - Examples: 7x³, -4x², 5, 3x⁵
   
2. **Binomial:** Contains exactly two terms
   - Examples: x² + 5, 3x - 7, 4x³ + 2x

3. **Trinomial:** Contains exactly three terms
   - Examples: x² + 2x + 1, 3x³ - 5x + 2, x² - 9x + 20

4. **Polynomial with 4 or more terms:** No special name, just called a polynomial
   - Example: x⁴ + 3x³ - 2x² + x - 7

## Value of a polynomial 🔢

The **value of a polynomial** P(x) at x = a is obtained by substituting a for x in the polynomial expression.

**Example:** For P(x) = x² - 3x + 2, find P(2).
- P(2) = 2² - 3(2) + 2
- P(2) = 4 - 6 + 2
- P(2) = 0

This means that 2 is a zero of the polynomial P(x) = x² - 3x + 2.

## Polynomial equations 🧩

A **polynomial equation** is an equation of the form P(x) = 0, where P(x) is a polynomial.

**Examples:**
- Linear equation: 2x + 3 = 0
- Quadratic equation: x² - 5x + 6 = 0
- Cubic equation: x³ - 6x² + 11x - 6 = 0

The solutions of polynomial equations are called the roots or zeros of the polynomial.

## Basic operations on polynomials 🔄

Let's briefly look at the basic operations that can be performed on polynomials:

1. **Addition and Subtraction:** Combine like terms (terms with the same variable and power)
   - (3x² + 2x - 1) + (2x² - 3x + 4) = 5x² - x + 3

2. **Multiplication:** Multiply each term of the first polynomial with each term of the second
   - (x + 2)(x + 3) = x² + 3x + 2x + 6 = x² + 5x + 6

3. **Division:** Use long division or synthetic division to divide polynomials
   - (x² + 5x + 6) ÷ (x + 2) = x + 3 with remainder 0

## Identifying polynomials in one variable 🔎

When working with mathematical expressions, it's important to identify whether they are polynomials in one variable:

**Are polynomials in one variable:**
- 5x³ - 7x² + 4 ✓
- -2x + 8 ✓
- 4 ✓
- x² - 100 ✓

**Not polynomials in one variable:**
- x² + y - 3 ✗ (has two variables: x and y)
- 1/x + 2 ✗ (has variable in denominator)
- √x - 5 ✗ (has fractional exponent)
- x^(-2) ✗ (has negative exponent)

## Applications of polynomials in one variable 🌍

Polynomials in one variable appear in many real-world situations:

1. **Physics**
   - Distance traveled under constant acceleration: s = ut + ½at²
   - Free-falling object height: h = h₀ - ½gt²

2. **Economics**
   - Cost functions: C(x) = 500 + 10x + 0.5x² 
   - Profit functions: P(x) = -x² + 100x - 200

3. **Engineering**
   - Stress distribution in beams
   - Circuit analysis and signal processing

4. **Data Analysis**
   - Polynomial regression to fit curves to data points

Understanding polynomials in one variable and their properties is crucial for solving equations, simplifying expressions, factoring, and finding zeros - all skills that we'll develop further in the following topics. In the next section, we'll explore the concept of zeros of polynomials in depth! 🚀
    `,
   quiz: {
      questions: [
         ...easyQuestions,
         ...mediumQuestions
      ]
   }
}; 