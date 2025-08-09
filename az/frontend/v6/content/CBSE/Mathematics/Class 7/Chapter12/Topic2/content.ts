// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 7\Chapter12\Topic2\content.ts
import { QuizQuestion, TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic2Content: TopicContent = {
    id: 'cl7_ch12_t2',
    topicNumber: 2,
    topicName: "Addition and Subtraction of Expressions",
    duration: 45,
    description: "Understanding how to add and subtract algebraic expressions, combining like terms, and solving related problems",
    explanation: `
# Addition and Subtraction of Algebraic Expressions ➕➖

Welcome to the world of algebraic expressions! 🌟 In this topic, we'll learn how to add and subtract expressions, which are fundamental skills in algebra. These operations help us simplify complex expressions and solve real-world problems. Let's explore these concepts together! 🚀

## What is an Algebraic Expression? 📝

An algebraic expression is a mathematical phrase that contains variables, constants, and operations like addition, subtraction, multiplication, and division. For example, 3x + 5, 2a² - 4b + 7, and xy + z are all algebraic expressions.

### Components of an Algebraic Expression

1. **Variables**: Letters like x, y, a, b that represent unknown values
2. **Constants**: Numbers like 3, -5, 7 that have fixed values
3. **Coefficients**: Numbers that multiply variables (e.g., in 3x, 3 is the coefficient)
4. **Terms**: Parts of an expression separated by + or - signs (e.g., 3x, -4y, 7)

## Understanding Terms 🧩

Before we learn to add and subtract expressions, we need to understand what terms are and how to identify them:

### What is a Term?

A term is a product of variables and constants. For example:
- In 3x + 5, the terms are 3x and 5
- In 4a² - 3ab + 2, the terms are 4a², -3ab, and 2

### Like Terms vs. Unlike Terms

**Like terms** have the same variables with the same exponents. Only their coefficients may differ.

Examples of like terms:
- 3x and 5x
- -2y² and 4y²
- 7ab and -3ab

**Unlike terms** have different variables or the same variables with different exponents.

Examples of unlike terms:
- 5x and 7y
- 3x and 3x²
- 4ab and 4a²b

## Adding Algebraic Expressions ➕

Adding algebraic expressions is similar to adding numbers, but we need to pay attention to like and unlike terms.

### How to Add Algebraic Expressions:

1. Identify like terms in the expressions
2. Combine like terms by adding their coefficients
3. Keep unlike terms as they are

### Examples:

**Example 1**: Add 3x + 2y and 5x - 4y + 1

Solution:
(3x + 2y) + (5x - 4y + 1)
= 3x + 2y + 5x - 4y + 1
= (3 + 5)x + (2 - 4)y + 1
= 8x - 2y + 1

**Example 2**: Add 4a² - 3ab + 5b² and 2a² + 7ab - b²

Solution:
(4a² - 3ab + 5b²) + (2a² + 7ab - b²)
= 4a² - 3ab + 5b² + 2a² + 7ab - b²
= (4 + 2)a² + (-3 + 7)ab + (5 - 1)b²
= 6a² + 4ab + 4b²

## Subtracting Algebraic Expressions ➖

Subtraction of algebraic expressions involves changing the sign of each term in the expression being subtracted and then adding.

### How to Subtract Algebraic Expressions:

1. Change the sign of each term in the expression being subtracted
2. Add the resulting expression to the first one
3. Combine like terms

### Examples:

**Example 1**: Subtract 4x + 3 from 7x - 2

Solution:
(7x - 2) - (4x + 3)
= 7x - 2 - 4x - 3
= 7x - 4x - 2 - 3
= 3x - 5

**Example 2**: Subtract 3p² - 5pq + 2q² from 5p² + 4pq - 8q²

Solution:
(5p² + 4pq - 8q²) - (3p² - 5pq + 2q²)
= 5p² + 4pq - 8q² - 3p² + 5pq - 2q²
= (5 - 3)p² + (4 + 5)pq + (-8 - 2)q²
= 2p² + 9pq - 10q²

## Special Products in Algebra 🌈

Some algebraic expressions follow special patterns that are worth remembering:

1. **(a + b)²** = a² + 2ab + b²
   Example: (x + 3)² = x² + 2(x)(3) + 3² = x² + 6x + 9

2. **(a - b)²** = a² - 2ab + b²
   Example: (y - 4)² = y² - 2(y)(4) + 4² = y² - 8y + 16

3. **(a + b)(a - b)** = a² - b²
   Example: (2z + 5)(2z - 5) = (2z)² - 5² = 4z² - 25

These patterns help us quickly multiply certain expressions without having to multiply term by term.

## Using the Distributive Property 🔄

The distributive property is very useful when adding and subtracting expressions with parentheses. It states that:

a(b + c) = ab + ac

This property allows us to remove parentheses in expressions.

### Examples:

**Example 1**: Simplify 3(x + 2) - 2(x - 1)

Solution:
3(x + 2) - 2(x - 1)
= 3x + 6 - 2x + 2
= 3x - 2x + 6 + 2
= x + 8

**Example 2**: Simplify 4(2a - b) + 3(a + 2b)

Solution:
4(2a - b) + 3(a + 2b)
= 8a - 4b + 3a + 6b
= (8 + 3)a + (-4 + 6)b
= 11a + 2b

## Real-Life Applications 🌍

Algebraic expressions help us solve many real-world problems:

### Example 1: Geometry

A rectangle has length (x + 5) units and width (x - 2) units. Express its perimeter.

Solution:
Perimeter = 2(length + width)
= 2((x + 5) + (x - 2))
= 2(2x + 3)
= 4x + 6 units

### Example 2: Cost Calculation

If the cost of x pencils is 5x rupees and the cost of y erasers is 3y rupees, express the total cost of these items.

Solution:
Total cost = 5x + 3y rupees

### Example 3: Age Problems

John is x years old. His sister is 5 years younger than him, and his brother is twice his sister's age. Express the sum of all their ages.

Solution:
John's age = x years
Sister's age = (x - 5) years
Brother's age = 2(x - 5) = 2x - 10 years

Sum of ages = x + (x - 5) + (2x - 10)
= x + x - 5 + 2x - 10
= 4x - 15 years

## Common Mistakes to Avoid ⚠️

When adding and subtracting algebraic expressions, be careful to avoid these common errors:

1. **Combining unlike terms**: Terms like 3x and 4y cannot be combined because they have different variables.

2. **Forgetting to change signs during subtraction**: When subtracting an expression, change the sign of each term in the expression being subtracted.

3. **Errors with negative signs**: Be careful when dealing with negative signs, especially when using the distributive property.

4. **Incorrect use of parentheses**: Make sure to distribute correctly when removing parentheses.

## Sample Questions with Solutions 📚

### Question 1:
Simplify: (3x² - 4x + 7) + (2x² + 5x - 3)

Solution:
(3x² - 4x + 7) + (2x² + 5x - 3)
= 3x² - 4x + 7 + 2x² + 5x - 3
= (3 + 2)x² + (-4 + 5)x + (7 - 3)
= 5x² + x + 4

### Question 2:
Simplify: (8a - 5b + 3c) - (3a - 2b - 4c)

Solution:
(8a - 5b + 3c) - (3a - 2b - 4c)
= 8a - 5b + 3c - 3a + 2b + 4c
= (8 - 3)a + (-5 + 2)b + (3 + 4)c
= 5a - 3b + 7c

### Question 3:
Simplify: 4(x + 2) - 3(2x - 1)

Solution:
4(x + 2) - 3(2x - 1)
= 4x + 8 - 6x + 3
= 4x - 6x + 8 + 3
= -2x + 11

## Practice Problems 🏋️‍♂️

Try these practice problems to strengthen your skills:

1. Simplify: (5y² - 3y + 2) + (4y² + 7y - 8)
2. Subtract (3m - 4n) from (5m + 2n)
3. Simplify: 2(3p + q) - 4(p - 2q)
4. Find the perimeter of a triangle with sides (x + 2), (2x - 1), and (x + 5)

## Summary 📋

In this topic, we've learned:

1. **Algebraic Expressions**: Combinations of variables, constants, and operations
2. **Terms**: Parts of expressions separated by + or - signs
3. **Like Terms**: Terms with identical variables and exponents
4. **Addition**: Combine like terms by adding their coefficients
5. **Subtraction**: Change signs of the expression being subtracted, then add
6. **Distributive Property**: Used to remove parentheses in expressions
7. **Real-Life Applications**: How to use algebraic expressions to solve practical problems

Understanding how to add and subtract algebraic expressions is crucial for developing your algebraic skills. These operations form the foundation for more advanced topics in algebra. With practice, you'll become more comfortable working with expressions of all kinds! 💪
`,
    quiz: {
        questions: [...easyQuestions, ...mediumQuestions]
    }
};
