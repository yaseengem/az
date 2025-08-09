import { TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic1Content: TopicContent = {
    id: 'cl8_ch8_t1',
    topicNumber: 1,
    topicName: "Terms, coefficients, constants",
    duration: 45,
    description: "Understanding the basic components of algebraic expressions: terms, coefficients, and constants",
    explanation: `
# Terms, Coefficients, and Constants in Algebraic Expressions 🔢

Welcome to the fascinating world of algebraic expressions! In this topic, we'll explore the fundamental building blocks that make up algebraic expressions. Understanding these basics is crucial for mastering algebra. Let's dive in! 🚀

## What is an Algebraic Expression? 📝

An algebraic expression is a mathematical phrase that contains numbers, variables, and mathematical operations. For example:
- 3x + 5
- 2x² - 4xy + 7
- -5a + 2b - 3

## Terms in Algebraic Expressions 📚

A term is a part of an algebraic expression that is separated by + or - signs.

### Types of Terms 🎯
1. **Variable Terms**: Terms containing variables
   - Examples: 3x, -5y², 2xy
2. **Constant Terms**: Terms without variables
   - Examples: 7, -4, 12

### Examples of Terms in Expressions 📌
In the expression 5x² - 3xy + 2x - 7:
- First term: 5x²
- Second term: -3xy
- Third term: 2x
- Fourth term: -7

## Coefficients in Algebraic Terms 🎨

A coefficient is the numerical factor of a term that contains variables.

### Key Points About Coefficients 🔍
1. **Definition**: The number that multiplies the variable part
2. **Sign Matters**: Can be positive or negative
3. **Default Coefficient**: When no number is written, the coefficient is 1
4. **Pure Numbers**: Constants don't have coefficients; they are complete terms

### Examples of Coefficients 📊
- In 5x: coefficient is 5
- In -3xy: coefficient is -3
- In x: coefficient is 1 (understood)
- In -y: coefficient is -1
- In 7: This is a constant term, not a coefficient

## Constants in Algebraic Expressions 💫

Constants are terms that have fixed values and don't contain variables.

### Properties of Constants 🎯
1. **Fixed Value**: Don't change when variable values change
2. **No Variables**: Contain only numbers
3. **Position**: Can appear anywhere in the expression
4. **Operations**: Can be combined with other constants

### Examples of Constants 📌
- In 3x + 5: 5 is the constant
- In -2y² + 7 - 4: Both 7 and -4 are constants
- In 12: The entire term is a constant

## Degree of Terms 📈

The degree of a term is the sum of the powers of its variables.

### Examples of Degree 🔢
1. x²y³: degree = 2 + 3 = 5
2. 3xy: degree = 1 + 1 = 2
3. -5x³: degree = 3
4. 7: degree = 0 (constant term)

## Like Terms 🤝

Like terms are terms with exactly the same variables raised to the same powers.

### Properties of Like Terms ✨
1. Same variables
2. Same powers
3. Different coefficients allowed
4. Can be combined by adding/subtracting coefficients

### Examples of Like Terms 📝
- 3x² and -5x² are like terms
- 2xy and -3xy are like terms
- 4x²y and 2xy² are NOT like terms
- 5x and 5y are NOT like terms

## Sample Problems and Solutions 🎓

1. **Problem**: Identify the terms in 3x² - 4xy + 2x - 7
   **Solution**: 
   - First term: 3x²
   - Second term: -4xy
   - Third term: 2x
   - Fourth term: -7

2. **Problem**: Find the coefficient of x in -x + 3
   **Solution**: The coefficient is -1

3. **Problem**: Identify like terms in 5x²y - 2xy + 3x²y - xy
   **Solution**: 
   - 5x²y and 3x²y are like terms
   - -2xy and -xy are like terms

## Real-Life Applications 🌍

1. **Shopping** 💰
   - Cost = px + c
   - p: price per item
   - x: number of items
   - c: constant shipping cost

2. **Area Calculations** 📏
   - Rectangle area = lw
   - l: length in variable form
   - w: width in variable form

3. **Time and Distance** 🚗
   - Distance = rt
   - r: rate (speed)
   - t: time

## Common Mistakes to Avoid ⚠️

1. **Forgetting the Understood Coefficient**
   - x is actually 1x
   - -y is actually -1y

2. **Confusing Like Terms**
   - x² and x are NOT like terms
   - xy and yx are the same term (commutative property)

3. **Misidentifying Constants**
   - In 3x + 5, only 5 is a constant
   - The 3 in 3x is a coefficient, not a constant

## Practice Tips 💡

1. **Term Identification**
   - Circle each term in an expression
   - Note the sign (+ or -) that comes with each term

2. **Coefficient Practice**
   - Write coefficients explicitly (1x instead of x)
   - Pay attention to signs

3. **Like Terms Exercise**
   - Group like terms using different colors
   - Add or subtract their coefficients

## Summary ✨

1. **Terms**: Parts of expressions separated by + or - signs
2. **Coefficients**: Numerical factors of variable terms
3. **Constants**: Terms without variables
4. **Like Terms**: Same variables with same powers
5. **Degree**: Sum of powers of variables in a term

### Key Takeaways 🎯
- Every term has a coefficient (even if it's 1)
- Constants are complete terms
- Like terms can be combined
- The degree helps classify terms
- Signs are important parts of coefficients

Remember, mastering these basics is crucial for success in algebra! Keep practicing with different expressions to build your confidence. 🌟
`,
    quiz: {
        questions: [
            ...easyQuestions,
            ...mediumQuestions
        ]
    }
}; 