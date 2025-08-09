import { TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic3Content: TopicContent = {
    id: 'cl8_ch12_t3',
    topicNumber: 3,
    topicName: "Division of Algebraic Expressions",
    duration: 45,
    description: "Understanding how to divide algebraic expressions, including polynomials by monomials and handling special cases.",
    explanation: `
# Division of Algebraic Expressions 📚

Division of algebraic expressions is a fundamental operation in algebra that follows similar principles to arithmetic division but with variables. Let's explore this concept in detail! 🎯

## Understanding Division of Algebraic Expressions 🧮

Division in algebra is the process of finding how many times one expression (divisor) goes into another expression (dividend). The result is called the quotient. Just like in arithmetic, division is the inverse of multiplication.

### Basic Rules for Division 📝

1. **Coefficient Division** ➗
   - Divide the coefficients using arithmetic division
   - Example: (8x³)/(2x) = 4x²
   - First divide 8 by 2 to get 4

2. **Variable Division** 🔢
   - Subtract the exponents of like variables
   - Rule: x^m ÷ x^n = x^(m-n)
   - Example: x⁵ ÷ x² = x³ (5 - 2 = 3)

3. **Sign Rules** ➕➖
   - Same signs give positive: (+) ÷ (+) = (+), (-) ÷ (-) = (+)
   - Different signs give negative: (+) ÷ (-) = (-), (-) ÷ (+) = (-)

## Methods of Division 🎯

### 1. Division by a Monomial 📊

When dividing an algebraic expression by a monomial, divide each term of the expression by the monomial.

**Example 1**: Divide 6x³y² + 12x²y² by 2xy
\'\'\'
6x³y² ÷ 2xy = 3x²y
12x²y² ÷ 2xy = 6xy
Final answer: 3x²y + 6xy
\'\'\'

**Example 2**: Divide 8x⁴ - 4x³ + 12x² by 2x²
\'\'\'
8x⁴ ÷ 2x² = 4x²
-4x³ ÷ 2x² = -2x
12x² ÷ 2x² = 6
Final answer: 4x² - 2x + 6
    \'\'\'

### 2. Special Cases in Division 🌟

#### a) Division by x
When dividing by x, terms without x in the numerator result in terms with x in the denominator.

**Example**: Divide x² + 3x + 4 by x
\'\'\'
x² ÷ x = x
3x ÷ x = 3
4 ÷ x = 4 / x
Final answer: x + 3 + 4 / x
    \'\'\'

#### b) Division by x²
Terms with degree less than 2 result in negative powers of x.

**Example**: Divide x³ + x² + x + 1 by x²
\'\'\'
x³ ÷ x² = x
x² ÷ x² = 1
x ÷ x² = 1 / x
1 ÷ x² = 1 / x²
Final answer: x + 1 + 1 / x + 1 / x²
\'\'\'

## Common Mistakes to Avoid ⚠️

1. **Forgetting to Divide All Terms** 🚫
   - Wrong: (6x³ + 3x²) ÷ 3x = 2x² + x²
   - Correct: (6x³ + 3x²) ÷ 3x = 2x² + x

2. **Incorrect Exponent Subtraction** 📉
   - Wrong: x⁵ ÷ x² = x³²
   - Correct: x⁵ ÷ x² = x³ (subtract exponents: 5 - 2 = 3)

3. **Sign Errors** ❌
   - Wrong: (-8x³) ÷ (-2x) = -4x²
   - Correct: (-8x³) ÷ (-2x) = 4x² (negative ÷ negative = positive)

## Real-Life Applications 🌍

1. **Rate Problems** 🚗
   - Speed = Distance ÷ Time (involves division of variables)
   - Example: If d = rt, then r = d/t

2. **Financial Calculations** 💰
   - Interest rate = Interest ÷ Principal
   - Cost per unit = Total cost ÷ Number of units

3. **Scientific Calculations** 🔬
   - Density = Mass ÷ Volume
   - Pressure = Force ÷ Area

## Practice Tips 💡

1. **Step-by-Step Approach**
   - First divide the coefficients
   - Then handle the variables
   - Finally, determine the sign of the result

2. **Check Your Answer**
   - Multiply your answer by the divisor
   - Should get back the dividend
   - If not, there's an error

3. **Common Patterns**
   - Look for patterns in similar problems
   - Group like terms before dividing
   - Keep terms in standard form (descending powers)

## Summary ✨

Division of algebraic expressions is a crucial skill that builds upon:
- Understanding of variables and exponents
- Knowledge of arithmetic division
- Sign rules in algebra
- Properties of exponents

Remember:
1. Always divide each term by the divisor
2. Pay attention to signs
3. Use exponent rules correctly
4. Watch out for special cases with variables in denominator
5. Keep your work organized and neat

### Practice Problems 📝

1. Divide 12x⁴y³ by 3x²y
2. Divide x³ + 2x² + 3x + 4 by x
3. Divide 6x⁵y⁴ - 3x⁴y⁴ by 3x²y²

Solutions:
1. 4x²y²
2. x² + 2x + 3 + 4/x
3. 2x³y² - x²y²

Keep practicing these concepts, and you'll master the division of algebraic expressions! 🌟
`,
    quiz: {
    questions: [
        ...easyQuestions,
        ...mediumQuestions
    ]
}
}; 