import { TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic1Content: TopicContent = {
    id: 'cl8_ch12_t1',
    topicNumber: 1,
    topicName: "Methods of factorisation",
    duration: 45,
    description: "Learn different methods to factorize algebraic expressions including common factors, grouping, difference of squares, perfect squares, and more.",
    explanation: `
# Methods of Factorisation 🧮

Welcome to an exciting journey into the world of factorisation! In this topic, we'll learn various methods to break down algebraic expressions into their factors. Let's make factorisation fun and easy to understand! 🎯

## What is Factorisation? 📝

Factorisation is the process of breaking down an algebraic expression into a product of simpler expressions. It's like breaking down a number into its prime factors, but with algebraic expressions.

For example:
- 12 = 2 × 2 × 3 (number factorisation)
- x² + 5x + 6 = (x + 2)(x + 3) (algebraic factorisation)

## Common Methods of Factorisation 🔍

### 1. Common Factor Method 🎨
This is the first step in factorisation. Always look for common factors first!

Steps:
1. Find the highest common factor (HCF) of all terms
2. Factor out the HCF
3. Write the remaining terms in brackets

Example:
- 3x² + 6x + 9
- Common factor is 3
- 3(x² + 2x + 3)

### 2. Grouping Method 📦
Use this method when you have four terms that can be paired.

Steps:
1. Group terms that have common factors
2. Factor each group separately
3. Look for a common binomial factor

Example:
ax + ay + bx + by
= a(x + y) + b(x + y)
= (x + y)(a + b)

### 3. Perfect Square Trinomials 🎯
These are special expressions that are squares of binomials.

Forms:
- a² + 2ab + b² = (a + b)²
- a² - 2ab + b² = (a - b)²

Example:
x² + 6x + 9
= x² + 2(x)(3) + 3²
= (x + 3)²

### 4. Difference of Squares 📐
When you have an expression in the form a² - b².

Formula: a² - b² = (a + b)(a - b)

Examples:
- x² - 4 = (x + 2)(x - 2)
- 25x² - 1 = (5x + 1)(5x - 1)

### 5. Sum and Difference of Cubes 🎲
These are special forms that have their own factorisation patterns.

Formulas:
- a³ + b³ = (a + b)(a² - ab + b²)
- a³ - b³ = (a - b)(a² + ab + b²)

Example:
8x³ + 27 = (2x + 3)(4x² - 6x + 9)

## Step-by-Step Factorisation Process 📋

1. Always check for common factors first
2. If no common factors, check if it's:
   - Perfect square trinomial
   - Difference of squares
   - Sum or difference of cubes
3. If none of the above, try:
   - Grouping method
   - Splitting the middle term

## Common Mistakes to Avoid ⚠️

1. Forgetting to check for common factors first
2. Not recognizing perfect squares
3. Making sign errors
4. Incomplete factorisation

## Tips and Tricks 💡

1. **For trinomials (ax² + bx + c)**:
   - Find factors of ac that add to b
   - Split the middle term using these factors

2. **For perfect squares**:
   - Middle term should be twice the product of the terms in the factors
   - Last term should be square of the constant term

3. **For difference of squares**:
   - Both terms must be perfect squares
   - Sign between terms must be negative

## Real-World Applications 🌍

1. **Area Problems**:
   - Finding dimensions of rectangles
   - Calculating garden layouts
   - Architectural designs

2. **Financial Calculations**:
   - Profit and loss calculations
   - Investment growth patterns
   - Cost optimization

3. **Physics Applications**:
   - Motion equations
   - Force calculations
   - Energy formulas

## Practice Strategy 🎯

1. Start with simple expressions having common factors
2. Move to perfect squares and difference of squares
3. Practice trinomial factorisation
4. Try complex expressions combining multiple methods

## Sample Problems and Solutions 📝

### Problem 1:
Factor: 2x² + 10x + 12
Solution:
1. Common factor: 2
2. 2(x² + 5x + 6)
3. 2(x + 2)(x + 3)

### Problem 2:
Factor: x² - 16
Solution:
1. Difference of squares
2. (x + 4)(x - 4)

### Problem 3:
Factor: x² + 6x + 9
Solution:
1. Perfect square trinomial
2. (x + 3)²

## Quick Reference Guide 📌

1. **Common Factor**: Factor out GCF first
2. **Perfect Square**: Check if middle term is twice √(first × last)
3. **Difference of Squares**: Look for a² - b² pattern
4. **Grouping**: Try with 4 terms
5. **Trinomials**: Find factors that multiply and add correctly

## Summary ✨

1. Always start with common factors
2. Recognize special patterns:
   - Perfect squares
   - Difference of squares
   - Sum/difference of cubes
3. Use systematic approach
4. Check your work by expanding

Remember:
- Practice regularly
- Start with simpler problems
- Double-check your work
- Use patterns to your advantage

Keep practicing, and you'll master factorisation in no time! Good luck! 🌟
`,
    quiz: {
        questions: [
            ...easyQuestions,
            ...mediumQuestions
        ]
    }
}; 