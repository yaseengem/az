// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 7\Chapter12\Topic1\content.ts
import { QuizQuestion, TopicQuiz, TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic1Content: TopicContent = {
    id: 'cl7_ch12_t1',
    topicNumber: 1,
    topicName: "Terms, Coefficients, Variables",
    duration: 45,
    description: "Understanding the basic components of algebraic expressions including terms, coefficients, and variables",
    explanation: `
# Terms, Coefficients, Variables 🧮

Welcome to the fascinating world of algebra! 🌟 In this topic, we'll explore the fundamental building blocks of algebraic expressions - terms, coefficients, and variables. Understanding these concepts is crucial as they form the foundation of algebraic thinking and problem-solving. Let's dive in and make these concepts simple and clear! 🚀

## What is an Algebraic Expression? 📝

An algebraic expression is a mathematical phrase that contains numbers, variables, and operations. Unlike equations, expressions don't have an equals sign (=). They represent mathematical calculations that can be simplified, expanded, or factored.

### Examples of Algebraic Expressions:
- 3x + 7
- 5y² - 2y + 9
- 2a + 3b - 4c
- x² + 2xy + y²

Algebraic expressions help us describe real-world situations using mathematical language. For instance, if x represents the number of items you buy, then 5x could represent the total cost when each item costs ₹5.

## Understanding Terms 📊

A term is a part of an algebraic expression. Terms are separated by addition or subtraction operators (+ or -).

### Identifying Terms:

In the expression 7x² + 3x - 5:
- 7x² is the first term
- 3x is the second term
- -5 is the third term

Terms can be:
1. **Single numbers** (like -5)
2. **Single variables** (like y)
3. **Products of numbers and variables** (like 7x²)

Each term stands as a separate entity in the expression, and we often need to work with them individually when simplifying expressions.

## Understanding Coefficients 🔢

A coefficient is the numerical factor of a term that contains a variable.

### Examples:
- In the term 5x, the coefficient is 5
- In the term -7y², the coefficient is -7
- In the term x, the coefficient is 1 (not written explicitly)
- In the term -z³, the coefficient is -1 (often written simply as -)

The coefficient tells us how many times to use the variable in a multiplication. For example, 5x means 5 × x, or "five times x."

### Special Cases:
- When a variable appears alone (like x), its coefficient is 1
- When a variable has a negative sign (like -y), its coefficient is -1

## Understanding Variables 🔤

Variables are symbols (usually letters like x, y, z, a, b, c) that represent unknown values or quantities that can vary. They allow us to write general rules and formulas that work for many different specific values.

### Properties of Variables:
1. Can represent any number
2. Can have exponents (x², y³)
3. Multiple variables can be used in the same expression (xyz, ab²)

Variables help us create general patterns and relationships in mathematics. For example, the formula for the area of a rectangle, A = l × w, uses variables l and w to represent length and width, allowing the formula to work for rectangles of any size.

## Types of Algebraic Expressions 📋

Based on the number of terms, algebraic expressions are classified as:

1. **Monomial**: An expression with exactly one term
   - Examples: 5x, -7y², 3xy

2. **Binomial**: An expression with exactly two terms
   - Examples: 3x + 7, y² - 5, 2a - 3b

3. **Trinomial**: An expression with exactly three terms
   - Examples: x² + 2x + 1, 3a - 4b + 5c, 2x² - 3y² + 4

4. **Polynomial**: A general term for expressions with one or more terms with non-negative integer exponents
   - All of the above are types of polynomials

## Converting Word Problems to Algebraic Expressions 🔄

One of the most powerful applications of algebra is converting real-life problems into algebraic expressions. Here's how to approach this:

1. **Identify the unknown quantity** and assign a variable to it
2. **Look for key phrases** that indicate mathematical operations:
   - "Sum" or "added to" → Addition (+)
   - "Difference" or "decreased by" → Subtraction (-)
   - "Product" or "times" → Multiplication (×)
   - "Quotient" or "divided by" → Division (÷)

### Common Phrases and Their Translations:
- "Five more than a number" → x + 5
- "Three less than twice a number" → 2x - 3
- "The product of a number and 7" → 7x
- "Half of a number" → x ÷ 2 or x/2

## Evaluating Algebraic Expressions 🧩

To evaluate an algebraic expression, substitute the given value for each variable and then perform the calculations following the order of operations (BODMAS or PEMDAS).

### Example:
Evaluate 3x² - 4x + 5 when x = 2

Solution:
1. Substitute x = 2
2. 3(2)² - 4(2) + 5
3. 3(4) - 8 + 5
4. 12 - 8 + 5
5. 9

## Like and Unlike Terms 🔍

**Like terms** are terms that have identical variable parts (same variables raised to the same powers).

### Examples of like terms:
- 5x and -3x
- 7y² and 4y²
- 2ab and 9ab

**Unlike terms** have different variable parts.

### Examples of unlike terms:
- 5x and 5y
- 7x² and 7x
- 2ab and 2a²b

Like terms can be combined by adding or subtracting their coefficients, while unlike terms cannot be combined.

## Addition and Subtraction of Algebraic Expressions 🧮

To add or subtract algebraic expressions:

1. Remove brackets if any
2. Arrange like terms together
3. Combine like terms by adding or subtracting their coefficients

### Example:
Add (3x² + 2x - 7) and (2x² - 5x + 4)

Solution:
(3x² + 2x - 7) + (2x² - 5x + 4)
= 3x² + 2x - 7 + 2x² - 5x + 4
= (3x² + 2x²) + (2x - 5x) + (-7 + 4)
= 5x² - 3x - 3

## Sample Questions with Solutions 📝

### Question 1:
Identify the terms in the expression 3x² - 7xy + 2y² - 5.

**Solution:**
The terms are 3x², -7xy, 2y², and -5.

### Question 2:
What is the coefficient of y in the expression 4x - 8y + 3z?

**Solution:**
In the term -8y, the coefficient of y is -8.

### Question 3:
Simplify the expression: 5a + 3b - 2a + 4b

**Solution:**
5a + 3b - 2a + 4b
= (5a - 2a) + (3b + 4b)
= 3a + 7b

### Question 4:
Write an algebraic expression for "three times the sum of a number and 5".

**Solution:**
Let the number be x.
The sum of the number and 5 is x + 5.
Three times this sum is 3(x + 5), which expands to 3x + 15.

### Question 5:
If a = 3 and b = -2, find the value of 2a² - 3ab + b².

**Solution:**
2a² - 3ab + b²
= 2(3)² - 3(3)(-2) + (-2)²
= 2(9) - 3(3)(-2) + 4
= 18 + 18 + 4
= 40

## Real-Life Applications 🌎

Algebraic expressions have numerous real-life applications:

1. **Finance**: Calculating interest, loans, and investments
   - Example: The formula for compound interest: A = P(1 + r/n)^(nt)

2. **Business**: Modeling cost, revenue, and profit
   - Example: If each item costs c to produce and sells for p, then the profit from selling n items is n(p - c)

3. **Physics**: Describing motion, forces, and energy
   - Example: Distance traveled: d = vt + ½at²

4. **Geometry**: Finding areas, volumes, and perimeters
   - Example: Area of a rectangle with length l and width w: A = l × w

5. **Engineering**: Designing structures and systems
   - Example: The strength of a beam depends on its dimensions and material properties

## Summary 📊

In this topic, we've learned:

- **Algebraic expressions** are mathematical phrases with numbers, variables, and operations
- **Terms** are parts of expressions separated by + or - signs
- **Coefficients** are the numerical factors of variables in a term
- **Variables** are symbols that represent unknown or changing values
- **Like terms** have identical variable parts and can be combined
- Algebraic expressions can be **classified** as monomials, binomials, trinomials, and polynomials
- **Word problems** can be translated into algebraic expressions
- Algebraic expressions can be **evaluated** by substituting values for variables
- Algebraic expressions are widely used in **real-life applications**

Understanding these foundational concepts of algebra will help you solve more complex mathematical problems and develop critical thinking skills. Remember, algebra is not just about manipulating symbols—it's about finding patterns and relationships that help us understand and describe the world around us! 🌟

Now that you have a solid understanding of terms, coefficients, and variables, you're ready to explore more advanced algebraic concepts. Keep practicing with different types of expressions and real-life problems to strengthen your algebraic skills! 🚀
`,
    quiz: {
        questions: [
            ...easyQuestions,
            ...mediumQuestions
        ]
    }
};
