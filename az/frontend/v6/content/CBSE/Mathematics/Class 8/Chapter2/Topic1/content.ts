import { TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic1Content: TopicContent = {
    id: 'cl8_ch2_t1',
    topicNumber: 1,
    topicName: 'Solving linear equations',
    duration: 45,
    description: 'Learn how to solve linear equations in one variable using different methods, with practical examples and step-by-step explanations.',
    explanation: `
# Solving Linear Equations in One Variable 🧩

Linear equations are equations where the variable has the highest power of 1. In Class 8, you will learn how to solve these equations and apply them to real-life problems. Let's explore how to solve linear equations step by step!

## What is a Linear Equation? 📏
A linear equation in one variable is an equation that can be written in the form ax + b = c, where x is the variable, and a, b, and c are numbers. The solution to the equation is the value of x that makes the equation true.

**Examples:**
- x + 5 = 12
- 2x - 3 = 7
- 4x = 20

## Why Learn Linear Equations? 🤔
Linear equations help us solve everyday problems, like finding the price of an item, calculating age, or dividing things equally. They are the foundation for algebra and higher mathematics.

## Steps to Solve Linear Equations 📝
1. **Simplify both sides:** Remove brackets and combine like terms if needed.
2. **Isolate the variable:** Move all terms with the variable to one side and constants to the other.
3. **Perform operations:** Use addition, subtraction, multiplication, or division to solve for the variable.
4. **Check your answer:** Substitute the value back into the original equation to verify.

### Example 1: x + 7 = 15
- Subtract 7 from both sides: x = 15 - 7 = 8
- **Solution:** x = 8

### Example 2: 3x - 4 = 11
- Add 4 to both sides: 3x = 15
- Divide both sides by 3: x = 5
- **Solution:** x = 5

### Example 3: 2x + 3 = x + 9
- Subtract x from both sides: x + 3 = 9
- Subtract 3 from both sides: x = 6
- **Solution:** x = 6

## Solving Equations with Fractions and Decimals 🧮
Sometimes, equations have fractions or decimals. The steps are the same, but you may need to multiply both sides by a number to clear fractions or decimals.

### Example 4: x/2 + 3 = 7
- Subtract 3 from both sides: x/2 = 4
- Multiply both sides by 2: x = 8
- **Solution:** x = 8

### Example 5: 0.5x = 4
- Divide both sides by 0.5: x = 8
- **Solution:** x = 8

## Word Problems Using Linear Equations 🌍
Linear equations are used to solve real-life problems. Let's see how:

### Example 6: Age Problem
Riya is 4 years older than her brother. If the sum of their ages is 18, how old is Riya?
- Let brother's age = x
- Riya's age = x + 4
- x + (x + 4) = 18
- 2x + 4 = 18
- 2x = 14
- x = 7 (brother), Riya = 11

### Example 7: Money Problem
A pen costs ₹10 more than a pencil. If the pen and pencil together cost ₹40, what is the price of the pencil?
- Let pencil price = x
- Pen price = x + 10
- x + (x + 10) = 40
- 2x + 10 = 40
- 2x = 30
- x = 15 (pencil), pen = 25

## Tips for Solving Linear Equations 📝
- Always do the same operation on both sides.
- Keep your work neat and organized.
- Check your answer by substituting it back.
- If you get a false statement (like 5 = 7), check your steps.

## Common Mistakes to Avoid ⚠️
- Forgetting to change the sign when moving terms across the equals sign.
- Not performing the same operation on both sides.
- Arithmetic errors in addition, subtraction, multiplication, or division.

## Practice Questions to Try Yourself 🏋️‍♂️
1. x - 9 = 3
2. 5x = 35
3. 2x + 7 = 19
4. x/3 = 6
5. 4x - 5 = 11

## Short Summary ✨
- Linear equations have the variable to the power of 1.
- Solve by isolating the variable using basic operations.
- Always check your answer.
- Linear equations are useful in daily life and higher math.

Keep practicing, and you'll become a pro at solving linear equations! 🚀
`,
    quiz: {
        questions: [
            ...easyQuestions,
            ...mediumQuestions
        ]
    }
}; 