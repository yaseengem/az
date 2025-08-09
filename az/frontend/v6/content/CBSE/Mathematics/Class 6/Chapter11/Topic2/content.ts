import { QuizQuestion, TopicQuiz, TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic2Content: TopicContent = {
    id: 'cl6_ch11_t2',
    topicNumber: 2,
    topicName: "Equations",
    duration: 45,
    description: "Understanding equations and solving simple linear equations",
    explanation: `
# Equations 📝

Welcome to the world of equations! 🌟 In this topic, we'll learn about equations - mathematical statements that show equality between two expressions. Let's explore how to solve equations and understand their importance in mathematics! 🚀

## What are Equations? 🤔

An equation is a mathematical statement that shows that two expressions are equal. It always contains an equals sign (=).

### Examples:
- x + 5 = 12
- 2y = 16
- 3z - 7 = 8

## Parts of an Equation 📊

1. **Left Side (LHS)**: The expression on the left of the equals sign
2. **Right Side (RHS)**: The expression on the right of the equals sign
3. **Equals Sign (=)**: Shows that both sides are equal
4. **Variable**: The unknown value we need to find

## Solving Equations 🔍

To solve an equation means to find the value of the variable that makes the equation true.

### Basic Rules:
1. **Addition Rule**: If you add a number to one side, add the same number to the other side
2. **Subtraction Rule**: If you subtract a number from one side, subtract the same number from the other side
3. **Multiplication Rule**: If you multiply one side by a number, multiply the other side by the same number
4. **Division Rule**: If you divide one side by a number, divide the other side by the same number

## Step-by-Step Solving 🎯

Let's solve the equation: x + 7 = 15

1. **Identify the operation**: Addition (+7)
2. **Do the opposite operation**: Subtract 7 from both sides
3. **Simplify**: x = 15 - 7
4. **Calculate**: x = 8

## Types of Equations 📋

1. **Simple Addition Equations**
   - Example: x + 3 = 8
   - Solution: x = 8 - 3 = 5

2. **Simple Subtraction Equations**
   - Example: y - 4 = 6
   - Solution: y = 6 + 4 = 10

3. **Simple Multiplication Equations**
   - Example: 2z = 12
   - Solution: z = 12 ÷ 2 = 6

4. **Simple Division Equations**
   - Example: w/3 = 4
   - Solution: w = 4 × 3 = 12

## Real-Life Applications 🌍

1. **Shopping Problems** 🛍️
   - Example: If 3 pens cost ₹45, what is the cost of one pen?
   - Equation: 3x = 45
   - Solution: x = 15

2. **Age Problems** 👶
   - Example: Ravi is 5 years older than Priya. If Ravi is 12, how old is Priya?
   - Equation: x + 5 = 12
   - Solution: x = 7

3. **Distance Problems** 🚶‍♂️
   - Example: If you walk 2 km in 30 minutes, how far will you walk in 1 hour?
   - Equation: 2 × 2 = x
   - Solution: x = 4

## Practice Problems 🏋️‍♀️

1. **Example 1**: Solve x + 8 = 15
   - Solution: x = 15 - 8 = 7

2. **Example 2**: Solve y - 6 = 10
   - Solution: y = 10 + 6 = 16

3. **Example 3**: Solve 3z = 21
   - Solution: z = 21 ÷ 3 = 7

## Common Mistakes to Avoid ❌

1. **Forgetting to Balance**
   - Always perform the same operation on both sides
   - Example: x + 5 = 10 → x + 5 - 5 = 10 - 5

2. **Incorrect Operation**
   - Use the opposite operation to solve
   - Example: For x + 3 = 7, subtract 3, not add 3

3. **Order of Operations**
   - Remember PEMDAS when solving complex equations
   - Example: 2(x + 3) = 10 → First divide by 2, then subtract 3

## Summary ✨

In this topic, we learned:
- What equations are and their parts
- How to solve different types of equations
- Real-life applications of equations
- Common mistakes to avoid
- The importance of balancing equations

### Additional Examples and Sample Questions:

1. **Example**: Solve 4x = 20
   - Solution: x = 5

2. **Example**: Solve y/2 = 6
   - Solution: y = 12

3. **Question**: If a number plus 9 equals 15, what is the number?
   - Solution: x + 9 = 15 → x = 6

4. **Question**: If twice a number is 18, what is the number?
   - Solution: 2x = 18 → x = 9
`,
    quiz: {
        questions: [
            ...easyQuestions,
            ...mediumQuestions
        ]
    }
};
