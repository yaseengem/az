import { QuizQuestion, TopicQuiz, TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic1Content: TopicContent = {
    id: 'cl6_ch11_t1',
    topicNumber: 1,
    topicName: "Introduction to Variables",
    duration: 45,
    description: "Understanding the concept of variables and their use in mathematics",
    explanation: `
# Introduction to Variables 🔢

Welcome to the exciting world of algebra! 🌟 In this topic, we'll learn about variables - the building blocks of algebra. Let's explore how variables help us solve problems and express mathematical relationships! 🚀

## What are Variables? 🤔

A variable is a symbol (usually a letter) that represents an unknown number or value. Think of it as a placeholder that can take different values.

### Examples:
- x can represent any number
- y can represent a person's age
- n can represent the number of items

## Why Use Variables? 💡

1. **Generalization**: Variables help us write general rules
   - Example: Area of rectangle = length × width
   - We can write: A = l × w

2. **Problem Solving**: Variables help us solve problems
   - Example: If a number plus 5 equals 12, what is the number?
   - We can write: x + 5 = 12

3. **Pattern Recognition**: Variables help us describe patterns
   - Example: 2, 4, 6, 8, ...
   - We can write: 2n where n is the position

## Types of Variables 📊

1. **Independent Variables**: Values we choose
   - Example: Number of hours studied

2. **Dependent Variables**: Values that depend on other variables
   - Example: Test score (depends on hours studied)

## Using Variables in Real Life 🌍

1. **Shopping** 🛍️
   - If apples cost ₹20 each
   - Total cost = 20 × n (where n is number of apples)

2. **Time and Distance** ⏱️
   - Distance = Speed × Time
   - We can write: d = s × t

3. **Age Problems** 👶
   - If Ravi is 5 years older than Priya
   - We can write: Ravi's age = Priya's age + 5

## Common Variable Expressions 📝

1. **Addition and Subtraction**
   - x + 5 (a number plus 5)
   - y - 3 (a number minus 3)

2. **Multiplication and Division**
   - 4 × n (4 times a number)
   - m ÷ 2 (a number divided by 2)

3. **Combined Operations**
   - 2x + 3 (twice a number plus 3)
   - 5y - 7 (5 times a number minus 7)

## Practice Problems 🏋️‍♀️

1. **Example 1**: Write an expression for "a number increased by 8"
   - Solution: x + 8

2. **Example 2**: Write an expression for "twice a number decreased by 5"
   - Solution: 2x - 5

3. **Example 3**: Write an expression for "half of a number plus 3"
   - Solution: x/2 + 3

## Common Mistakes to Avoid ❌

1. **Confusing Variables with Numbers**
   - Remember: Variables represent unknown values
   - Example: x + 5 is not 5, it's "a number plus 5"

2. **Incorrect Order of Operations**
   - Remember: PEMDAS (Parentheses, Exponents, Multiplication/Division, Addition/Subtraction)
   - Example: 2x + 3 means (2 × x) + 3, not 2 × (x + 3)

3. **Using Multiple Variables Unnecessarily**
   - Use the same variable for the same unknown
   - Example: If two numbers are equal, use the same variable

## Summary ✨

In this topic, we learned:
- What variables are and why we use them
- Different types of variables
- How to write expressions using variables
- Real-life applications of variables
- Common mistakes to avoid

### Additional Examples and Sample Questions:

1. **Example**: Write an expression for "three times a number plus seven"
   - Solution: 3x + 7

2. **Example**: Write an expression for "a number divided by four minus two"
   - Solution: x/4 - 2

3. **Question**: If a pencil costs ₹5, write an expression for the cost of n pencils
   - Solution: 5n

4. **Question**: Write an expression for "a number multiplied by itself"
   - Solution: x²
`,
    quiz: {
        questions: [
            ...easyQuestions,
            ...mediumQuestions
        ]
    }
};
