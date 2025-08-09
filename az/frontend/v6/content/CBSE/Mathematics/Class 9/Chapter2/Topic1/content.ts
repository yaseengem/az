import { generateId } from '../../../../../../app/utils/idGenerator';
import { QuizQuestion, TopicQuiz, TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic1Content: TopicContent = {
   id: 'cl9_ch2_t1',
   topicNumber: 1,
   topicName: "Introduction",
   duration: 45,
   description: "Understanding algebraic expressions and basic concepts of polynomials",
   explanation: `
# Introduction 🧮

Welcome to the fascinating world of polynomials! In this chapter, we'll explore these fundamental algebraic expressions that serve as building blocks for advanced mathematics. Polynomials appear everywhere in mathematics and have numerous applications in science, engineering, and everyday life. Let's begin our journey! 📚

## What is an algebraic expression? 🤔

An algebraic expression is a combination of:
- Variables (like x, y, z)
- Constants (numbers)
- Mathematical operations (+, -, ×, ÷)

**Examples of algebraic expressions:**
- 2x + 3
- 5y² - 7y + 2
- 3a + 4b - 5c
- x² + y²/2

An algebraic expression can include operations like addition, subtraction, multiplication, division, powers, and even roots.

## What is a polynomial? 📐

A polynomial is a special type of algebraic expression with specific rules:

**Definition:** A polynomial is an expression made up of variables and coefficients using only addition, subtraction, and multiplication operations (no division by variables).

The general form of a polynomial in one variable x is:
P(x) = aₙxⁿ + aₙ₋₁xⁿ⁻¹ + ... + a₂x² + a₁x + a₀

Where:
- aₙ, aₙ₋₁, ..., a₀ are coefficients (real numbers)
- x is the variable
- n is a non-negative integer called the degree
- aₙ ≠ 0 (the coefficient of the highest power must not be zero)

**Examples of polynomials:**
- 5x³ + 2x² - 7x + 3
- 2y² - 4
- 7z
- 9

## Difference between polynomials and other algebraic expressions 🔍

Not all algebraic expressions are polynomials. The key differences are:

**Polynomials MUST have:**
- Variables with only whole number exponents (0, 1, 2, 3...)
- No variables in the denominator
- No variables under radicals (square roots, etc.)

**NOT polynomials:**
- 3/x (has variable in denominator)
- 2√x (has fractional exponent: x^(1/2))
- 1/(x-1) (has variable in denominator)
- x^(-2) (has negative exponent)

## Classification based on terms: monomial, binomial, trinomial 📋

Polynomials are classified by the number of terms they contain:

1. **Monomial:** Contains exactly one term
   - Examples: 7x³, -4y², 5, 3z⁵
   
2. **Binomial:** Contains exactly two terms
   - Examples: x² + 5, 3y - 7, 4z³ + 2z

3. **Trinomial:** Contains exactly three terms
   - Examples: x² + 2x + 1, 3y³ - 5y + 2, z² - 9z + 20

4. **Polynomial with 4 or more terms:** No special name, just called a polynomial
   - Example: a⁴ + 3a³ - 2a² + a - 7

## Applications of polynomials 🌟

Polynomials are widely used in various fields:

1. **Physics:** Motion equations, oscillations, wave functions
2. **Engineering:** Signal processing, control systems
3. **Economics:** Cost, revenue, and profit functions
4. **Computer Graphics:** Curve and surface modeling
5. **Statistics:** Regression analysis and data fitting

## Examples and practice 🎯

**Example 1:** Identify which expressions are polynomials:
- 3x² + 5x - 7 ✓ (polynomial: trinomial)
- x³ - 4 ✓ (polynomial: binomial)
- 2/x ✗ (not a polynomial: variable in denominator)
- 5√x + 2 ✗ (not a polynomial: variable under radical)

**Example 2:** Classify the following polynomials:
- 7x ➝ Monomial (one term)
- 4y³ - 9 ➝ Binomial (two terms)
- z² + 3z - 10 ➝ Trinomial (three terms)

**Quick Quiz:**
1. Which of the following is a polynomial?
   a) x² + 3x + 1
   b) 1/x + 2
   c) √x - 5
   d) x^(-1) + x

2. The expression 5x³ - 2x + 7 is a:
   a) Monomial
   b) Binomial
   c) Trinomial
   d) None of these

3. Which of these is NOT a polynomial?
   a) 3x⁴ + 2x² - 1
   b) 5
   c) 7x
   d) 2/(x+1)

In the next section, we'll delve deeper into polynomials in one variable, including their formal definition, degrees, and classification based on their properties. This knowledge will be the foundation for understanding more complex concepts like factorization and finding zeros. Let's continue our exploration of polynomials! 🚀
  `,
   quiz: {
      questions: [
         ...easyQuestions,
         ...mediumQuestions
      ]
   }
};
