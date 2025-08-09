import { TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic2Content: TopicContent = {
    id: 'cl8_ch12_t2',
    topicNumber: 2,
    topicName: "Factorising algebraic expressions",
    duration: 45,
    description: "Learn how to break down algebraic expressions into their factors using various factorization methods.",
    explanation: `
# Factorising Algebraic Expressions 🔢

Factorisation is one of the most important concepts in algebra! It's like breaking down a complex expression into simpler parts that multiply to give the original expression. Let's explore how to master this essential skill! 🎯

## What is Factorisation? 📝

Factorisation is the process of breaking down an algebraic expression into a product of simpler expressions called factors. Just like we can write 12 as 2 × 2 × 3, we can factor algebraic expressions into simpler parts.

## Methods of Factorisation 🛠️

### 1. Common Factor Method 🎯
- **Step 1**: Find the highest common factor (HCF) of all terms
- **Step 2**: Divide each term by the HCF
- **Step 3**: Write as HCF × (remaining terms)

**Examples**:
1. 3x² + 6x
   * Common factor: 3x
   * Result: 3x(x + 2)

2. 12x²y + 18xy²
   * Common factor: 6xy
   * Result: 6xy(2x + 3y)

### 2. Grouping Method 📦
Used when terms can be grouped to find common factors.

**Example**:
ax + ay + bx + by
* Group similar terms: (ax + ay) + (bx + by)
* Factor each group: a(x + y) + b(x + y)
* Final result: (x + y)(a + b)

### 3. Perfect Square Trinomials 🟦
Two special patterns to remember:
1. a² + 2ab + b² = (a + b)²
2. a² - 2ab + b² = (a - b)²

**Examples**:
1. x² + 6x + 9
   * Compare with a² + 2ab + b²
   * Here, a = x, b = 3
   * Result: (x + 3)²

2. 4x² - 4xy + y²
   * Compare with a² - 2ab + b²
   * Here, a = 2x, b = y
   * Result: (2x - y)²

### 4. Difference of Squares 🔲
Pattern: a² - b² = (a + b)(a - b)

**Examples**:
1. x² - 16
   * Here, a = x, b = 4
   * Result: (x + 4)(x - 4)

2. 25x² - 49y²
   * Here, a = 5x, b = 7y
   * Result: (5x + 7y)(5x - 7y)

### 5. Trinomial Factorisation 📐
For expressions like ax² + bx + c:
1. Find two numbers that:
   * Add to give b (coefficient of x)
   * Multiply to give ac

**Example**:
x² + 5x + 6
* ac = 1 × 6 = 6
* Find numbers adding to 5 and multiplying to 6: 2 and 3
* Result: (x + 2)(x + 3)

## Common Mistakes to Avoid ⚠️

1. **Forgetting the Common Factor** ❌
   * In 2x² + 4x, don't just write (x + 2)
   * Correct factorisation: 2x(x + 2)

2. **Sign Errors** ❌
   * In x² - 4x + 4, it's (x - 2)², not (x + 2)²
   * Pay attention to signs when factoring!

3. **Incomplete Factorisation** ❌
   * Don't stop at 2(x² + 3x + 2)
   * Complete factorisation: 2(x + 2)(x + 1)

## Applications of Factorisation 🌟

1. **Simplifying Expressions** 📊
   * Helps in reducing complex expressions to simpler forms
   * Useful in solving equations

2. **Finding Zeros** 🎯
   * If ab = 0, then either a = 0 or b = 0
   * Factoring helps find solutions to equations

3. **Simplifying Fractions** ➗
   * Common factors in numerator and denominator can be cancelled
   * Makes calculations easier

## Tips for Success 🌈

1. **Always Look for Common Factors First** 🔍
   * This is the easiest step and should never be skipped
   * Remember to include numerical coefficients and variables

2. **Recognize Patterns** 👀
   * Perfect squares: Look for squared terms and a middle term
   * Difference of squares: Look for subtraction of squared terms

3. **Check Your Work** ✅
   * Multiply your factors to verify you get the original expression
   * Make sure signs are correct

4. **Practice Systematically** 📚
   * Start with simple expressions
   * Gradually move to more complex ones
   * Learn to recognize patterns

## Sample Problems and Solutions 📝

1. **Problem**: Factor 6x² - 15x
   * **Solution**:
     * Find common factor: 3x
     * Factor out: 3x(2x - 5)

2. **Problem**: Factor x² + 10x + 25
   * **Solution**:
     * Perfect square trinomial
     * a = x, b = 5
     * Result: (x + 5)²

3. **Problem**: Factor x² - y²
   * **Solution**:
     * Difference of squares
     * Result: (x + y)(x - y)

## Summary ✨

Factorisation is a fundamental skill in algebra that helps:
- Simplify complex expressions
- Solve equations
- Work with algebraic fractions
- Understand higher mathematical concepts

Remember:
1. Always look for common factors first
2. Identify special patterns (perfect squares, difference of squares)
3. Use systematic methods for trinomials
4. Check your work by multiplying the factors

Practice regularly with different types of expressions to build confidence and speed in factorisation! 🚀
`,
    quiz: {
        questions: [
            ...easyQuestions,
            ...mediumQuestions
        ]
    }
}; 