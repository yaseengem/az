import { TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic2Content: TopicContent = {
    id: 'cl8_ch2_t2',
    topicNumber: 2,
    topicName: "Applications in word problems",
    duration: 45,
    description: "Learn how to solve real-world problems by converting them into linear equations and solving them systematically.",
    explanation: `
# Applications of Linear Equations in Word Problems 🌟

Welcome to one of the most practical and exciting topics in mathematics! Here, we'll learn how to use linear equations to solve real-world problems. This skill is incredibly valuable as it helps us tackle everyday situations using mathematical tools. Let's dive in! 🚀

## Understanding Word Problems 📚

Word problems can seem challenging at first, but they become much easier when you follow a systematic approach. Here's how to tackle them:

### Step 1: Read and Understand 📖
- Read the problem carefully, multiple times if needed
- Identify the unknown quantity (what you need to find)
- List all the given information
- Note any relationships between quantities

### Step 2: Choose a Variable ✏️
- Let's say we need to find a number
- We can represent it as x
- All other quantities should be expressed in terms of x

### Step 3: Form an Equation 🔢
- Use the relationships identified to write an equation
- Make sure all terms are on the correct sides
- Check if the equation makes sense

### Step 4: Solve the Equation ➗
- Use standard methods to solve the linear equation
- Keep track of your steps
- Check if your solution is reasonable

## Common Types of Word Problems 📋

### 1. Number Problems 🔢
Example: "A number increased by 5 equals 12"
- Let the number be x
- Equation: x + 5 = 12
- Solution: x = 7

### 2. Age Problems 👨‍👦
Example: "A father is 30 years older than his son. In 5 years, he will be three times as old as his son."
- Let son's current age be x
- Father's age = x + 30
- After 5 years: (x + 30 + 5) = 3(x + 5)
- Solve to find x

### 3. Money Problems 💰
Example: "A shopkeeper bought items at ₹x each and sold at 20% profit"
- Cost Price (CP) = x
- Selling Price (SP) = x + 20% of x = 1.2x
- Use given conditions to form equation

### 4. Distance-Speed-Time Problems 🚗
Remember the formula: Distance = Speed × Time
Example: "A car travels 300 km in 4 hours. Find its speed."
- Let speed be x km/h
- Equation: x × 4 = 300
- Solution: x = 75 km/h

### 5. Geometry Problems 📐
Example: "Length of a rectangle is 5 more than its width. If perimeter is 30 cm, find dimensions."
- Let width be x
- Length = x + 5
- Perimeter = 2(length + width)
- 2(x + 5 + x) = 30

## Practical Tips and Tricks 💡

1. **Draw Diagrams** 🎨
   - Visual representation helps understand the problem
   - Especially useful in geometry problems
   - Label all known and unknown quantities

2. **Check Units** 📏
   - Make sure all measurements are in same units
   - Convert if necessary (e.g., km to m, hours to minutes)

3. **Use Common Sense** 🤔
   - Age can't be negative
   - Distance can't be negative
   - Time can't be negative
   - Prices are usually positive

4. **Verify Your Answer** ✅
   - Substitute back into original problem
   - Check if it satisfies all conditions
   - Make sure it's reasonable

## Sample Problems with Solutions 📝

### Problem 1: Age Problem
"A mother's age is twice her daughter's age. After 10 years, mother's age will be 10 years more than twice her daughter's age. Find their present ages."

Solution:
1. Let daughter's age be x
2. Mother's age = 2x
3. After 10 years: (2x + 10) = 2(x + 10) + 10
4. Simplify: 2x + 10 = 2x + 20 + 10
5. Solve: 2x + 10 = 2x + 30
6. Therefore: x = 20
7. Daughter's age = 20, Mother's age = 40

### Problem 2: Number Problem
"The sum of three consecutive integers is 51. Find the numbers."

Solution:
1. Let smallest number be x
2. Three consecutive integers: x, (x+1), (x+2)
3. Equation: x + (x+1) + (x+2) = 51
4. Simplify: 3x + 3 = 51
5. Solve: 3x = 48, x = 16
6. Numbers are: 16, 17, 18

### Problem 3: Money Problem
"A shopkeeper sells an item at 20% profit. If selling price is ₹600, find the cost price."

Solution:
1. Let cost price be x
2. Selling price = x + 20% of x = 1.2x
3. Equation: 1.2x = 600
4. Solve: x = 500
5. Therefore, cost price = ₹500

## Common Mistakes to Avoid ⚠️

1. **Not Reading Carefully** 📚
   - Missing important information
   - Misunderstanding relationships
   - Rushing to form equation

2. **Wrong Variable Assignment** ❌
   - Using multiple variables unnecessarily
   - Not defining variable clearly
   - Inconsistent use of variable

3. **Unit Errors** 📏
   - Mixing different units
   - Not converting units properly
   - Ignoring units in final answer

4. **Calculation Errors** 🧮
   - Sign mistakes
   - Arithmetic errors
   - Not checking work

## Summary ✨

1. Word problems become easy when approached systematically
2. Always follow the four steps:
   - Read and understand
   - Choose variable
   - Form equation
   - Solve and verify

3. Remember to:
   - Draw diagrams when helpful
   - Check units
   - Verify answer
   - Use common sense

4. Practice different types of problems:
   - Number problems
   - Age problems
   - Money problems
   - Distance-speed-time problems
   - Geometry problems

Keep practicing! The more problems you solve, the better you'll get at identifying patterns and forming equations. Remember, every real-world problem is an opportunity to apply your mathematical skills! 🎯
`,
    quiz: {
        questions: [
            ...easyQuestions,
            ...mediumQuestions
        ]
    }
}; 