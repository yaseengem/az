import { QuizQuestion, TopicQuiz, TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic1Content: TopicContent = {
  id: 'cl7_ch4_t1',
  topicNumber: 1,
  topicName: "Forming equations from real-life scenarios",
  duration: 45,
  description: "Understanding how to translate real-world situations into mathematical equations",
  explanation: `
# Forming Equations from Real-Life Scenarios 📝

Equations are powerful tools that help us solve real-world problems! 🌟 In this topic, we'll learn how to translate everyday situations into mathematical equations. This skill is essential for solving problems in mathematics and in real life. Let's dive in! 🚀

## What is an Equation? 🔍

An equation is a mathematical statement that shows the equality between two expressions. It contains an equals sign (=) and usually has variables (like x, y, z) that represent unknown values we need to find. For example:
- 2x + 3 = 7
- y - 5 = 10
- 3z = 15

## Steps to Form Equations from Real-Life Scenarios 📊

1. **Identify the Unknown**: First, determine what you need to find. This becomes your variable.
2. **Understand the Situation**: Read the problem carefully and identify all the given information.
3. **Translate Words to Math**: Convert the words into mathematical expressions.
4. **Form the Equation**: Put everything together with an equals sign.

## Common Words and Their Mathematical Meanings 📚

Here are some common words and their mathematical translations:
- "Sum" or "Total" → Addition (+)
- "Difference" → Subtraction (-)
- "Product" → Multiplication (×)
- "Quotient" → Division (÷)
- "Is" or "Equals" → Equals sign (=)
- "More than" → Addition (+)
- "Less than" → Subtraction (-)
- "Times" → Multiplication (×)
- "Divided by" → Division (÷)

## Examples of Forming Equations 🧮

### Example 1: Shopping Scenario 🛍️
**Problem**: Riya has ₹500. She buys some notebooks for ₹25 each. After buying 8 notebooks, she has ₹300 left. How much did each notebook cost?

**Solution**:
1. Let x be the cost of each notebook
2. Total money spent = 8 × x
3. Money left = ₹300
4. Equation: 500 - 8x = 300

### Example 2: Age Problem 👨‍👩‍👧‍👦
**Problem**: The sum of ages of a father and son is 45 years. The father is 5 times as old as the son. Find their ages.

**Solution**:
1. Let x be the son's age
2. Father's age = 5x
3. Sum of ages = 45
4. Equation: x + 5x = 45

### Example 3: Distance Problem 🚶‍♂️
**Problem**: A train travels a certain distance in 3 hours at a constant speed. If it travels 60 km more, it would take 4 hours. Find the original distance.

**Solution**:
1. Let x be the original distance
2. Speed = x/3
3. New distance = x + 60
4. New time = 4 hours
5. Equation: (x + 60)/4 = x/3

## Tips for Forming Equations 💡

1. **Read Carefully**: Make sure you understand every part of the problem.
2. **Choose Variables Wisely**: Use variables that make sense for the problem.
3. **Check Units**: Ensure all quantities are in the same units.
4. **Verify Your Equation**: Make sure your equation represents the situation correctly.

## Common Mistakes to Avoid ❌

1. **Misinterpreting Words**: Be careful with phrases like "5 less than x" (which is x - 5, not 5 - x).
2. **Incorrect Order**: Pay attention to the order of operations.
3. **Missing Information**: Don't forget to include all given information.
4. **Incorrect Variables**: Choose appropriate variables for the unknowns.

## Practice Problems 📝

1. **Problem**: A number increased by 7 is 15. Find the number.
   **Solution**: Let x be the number. Equation: x + 7 = 15

2. **Problem**: The perimeter of a rectangle is 30 cm. If the length is twice the width, find the dimensions.
   **Solution**: Let w be the width. Then length = 2w. Equation: 2(w + 2w) = 30

3. **Problem**: A shopkeeper sold some apples. If he sold 5 more, he would have sold 20. How many did he sell?
   **Solution**: Let x be the number of apples sold. Equation: x + 5 = 20

## Summary ✨

Forming equations from real-life scenarios is a crucial skill that helps us solve everyday problems. Remember to:
1. Identify the unknown quantity
2. Understand the situation
3. Translate words into mathematical expressions
4. Form the equation correctly
5. Solve the equation to find the answer

With practice, you'll become better at recognizing patterns and forming equations for various situations. This skill will be useful not only in mathematics but also in many real-life applications! 🌟

### Additional Examples and Sample Questions:

1. **Example**: A number when multiplied by 3 and then increased by 5 gives 20. Find the number.
   **Solution**: Let x be the number. Equation: 3x + 5 = 20

2. **Example**: The sum of three consecutive numbers is 45. Find the numbers.
   **Solution**: Let x be the first number. Then the numbers are x, x+1, x+2. Equation: x + (x+1) + (x+2) = 45

3. **Question**: If you have ₹100 and spend some money on books, leaving you with ₹40, how much did you spend on books?
   **Solution**: Let x be the amount spent. Equation: 100 - x = 40

4. **Question**: A rectangle's length is 5 cm more than its width. If the perimeter is 30 cm, find the dimensions.
   **Solution**: Let w be the width. Then length = w + 5. Equation: 2(w + w + 5) = 30
`,
  quiz: {
    questions: [
      ...easyQuestions,
      ...mediumQuestions
    ]
  }
}; 