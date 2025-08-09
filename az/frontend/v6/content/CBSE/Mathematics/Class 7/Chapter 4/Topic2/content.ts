import { TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic2Content: TopicContent = {
    id: 'cl7_ch4_t2',
    topicNumber: 2,
    title: "Solving linear equations using transposition",
    description: "Learn how to solve linear equations using the transposition method, a powerful technique for finding unknown values.",
    explanation: `# Solving Linear Equations Using Transposition

Linear equations are mathematical statements that show the equality of two expressions. They are called "linear" because the highest power of the variable is 1. In this topic, we'll learn how to solve these equations using the transposition method.

## What is Transposition?

Transposition is a method of solving equations where we move terms from one side of the equation to the other. When we move a term, we change its sign. For example:
- If we move a positive term to the other side, it becomes negative
- If we move a negative term to the other side, it becomes positive

## Basic Rules of Transposition

1. **Moving Numbers**: When moving a number to the other side, change its sign
   - Example: x + 5 = 10 → x = 10 - 5

2. **Moving Variables**: When moving a variable term, change its sign
   - Example: 2x = x + 3 → 2x - x = 3

3. **Moving Multipliers**: When moving a multiplier, it becomes a divisor
   - Example: 3x = 15 → x = 15 ÷ 3

4. **Moving Divisors**: When moving a divisor, it becomes a multiplier
   - Example: x/4 = 5 → x = 5 × 4

## Step-by-Step Process

Let's solve an equation step by step:

**Example 1**: Solve 3x + 7 = 19

1. Move the constant term (7) to the right side:
   3x = 19 - 7
   3x = 12

2. Move the coefficient (3) to the right side:
   x = 12 ÷ 3
   x = 4

**Example 2**: Solve 2(x - 3) = 10

1. First, expand the brackets:
   2x - 6 = 10

2. Move the constant term (-6) to the right side:
   2x = 10 + 6
   2x = 16

3. Move the coefficient (2) to the right side:
   x = 16 ÷ 2
   x = 8

## Common Mistakes to Avoid

1. **Forgetting to Change Signs**: Always remember to change the sign when moving terms
   - Wrong: x + 5 = 10 → x = 10 + 5
   - Right: x + 5 = 10 → x = 10 - 5

2. **Incorrect Order of Operations**: Always follow BODMAS (Brackets, Orders, Division, Multiplication, Addition, Subtraction)
   - Wrong: 2x + 3 = 7 → x = (7 + 3) ÷ 2
   - Right: 2x + 3 = 7 → x = (7 - 3) ÷ 2

3. **Not Simplifying First**: Always simplify both sides before transposing
   - Wrong: 2x + 3x = 15 → 2x = 15 - 3x
   - Right: 5x = 15 → x = 3

## Real-Life Applications

1. **Shopping**: If you have ₹500 and want to buy some notebooks costing ₹40 each, how many can you buy?
   - Equation: 40x = 500
   - Solution: x = 500 ÷ 40 = 12.5
   - You can buy 12 notebooks

2. **Time and Distance**: If you travel at 60 km/h and want to cover 300 km, how long will it take?
   - Equation: 60t = 300
   - Solution: t = 300 ÷ 60 = 5 hours

## Practice Problems

1. Solve: 4x - 7 = 13
2. Solve: 3(x + 2) = 15
3. Solve: 2x + 5 = 3x - 1
4. Solve: x/3 + 4 = 7

## Summary

- Transposition is a method of solving equations by moving terms from one side to the other
- Remember to change signs when moving terms
- Follow the correct order of operations
- Always simplify before solving
- Practice with different types of equations to become proficient

By mastering the transposition method, you'll be able to solve a wide variety of linear equations efficiently and accurately. This skill is fundamental in mathematics and will be useful in many real-life situations.`,
    quiz: {
        questions: [
            ...easyQuestions,
            ...mediumQuestions
        ]
    }
}; 