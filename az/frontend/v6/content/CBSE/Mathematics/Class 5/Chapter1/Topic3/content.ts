import { QuizQuestion, TopicQuiz, TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic3Content: TopicContent = {
    id: 'cl5_ch1_t3',
    topicNumber: 3,
    topicName: "Multiplication and Division Word Problems",
    duration: 45,
    description: "Solving real-life word problems involving multiplication and division in fishing and boat scenarios",
    explanation: `
# Multiplication and Division Word Problems ✖️➗

Welcome to the world of word problems! 🎯 In this topic, we'll learn how to solve real-life problems using multiplication and division. These skills are super important in everyday life, especially in fishing and boat-related situations. Let's dive in! 🚀

## Understanding Word Problems 📝

Word problems are math questions written in everyday language. They tell us a story and ask us to find something using math. To solve them, we need to:
1. Read carefully
2. Find the important numbers
3. Decide which operation to use
4. Solve the problem
5. Check if our answer makes sense

## Multiplication Word Problems ✖️

Multiplication helps us when we need to:
- Find the total of many equal groups
- Calculate repeated addition
- Determine area or total quantity

### Example 1: Fish Catch 🎣
- A boat catches 250 fish per trip
- It makes 4 trips in a day
- Total fish caught = 250 × 4 = 1,000 fish

### Example 2: Boat Capacity 🚢
- A boat can carry 50 boxes
- Each box weighs 20 kg
- Total weight = 50 × 20 = 1,000 kg

## Division Word Problems ➗

Division helps us when we need to:
- Share things equally
- Find how many groups we can make
- Calculate how much each person gets

### Example 1: Sharing Fish 🐟
- A fisherman caught 1,200 fish
- He wants to share them equally among 4 markets
- Fish per market = 1,200 ÷ 4 = 300 fish

### Example 2: Fuel Calculation ⛽
- A boat has 2,000 liters of fuel
- It uses 200 liters per trip
- Number of trips possible = 2,000 ÷ 200 = 10 trips

## Problem-Solving Steps 🧠

### Step 1: Understand the Problem
- Read the problem carefully
- Identify what's being asked
- Find the important numbers

### Step 2: Choose the Operation
- Look for keywords:
  - Multiplication: "times", "each", "per", "total"
  - Division: "share", "divide", "per", "each"

### Step 3: Solve the Problem
- Write the number sentence
- Do the calculation
- Check your work

### Step 4: Verify the Answer
- Does it make sense?
- Is it reasonable?
- Did we answer the question?

## Sample Problems and Solutions 💡

### Problem 1: Fish Market
- A fish market sells 150 kg of fish per day
- Each kg costs ₹200
- What's the total daily sales?
- Solution: 150 × ₹200 = ₹30,000

### Problem 2: Boat Trips
- A boat can carry 1,000 kg
- Each box weighs 25 kg
- How many boxes can it carry?
- Solution: 1,000 ÷ 25 = 40 boxes

### Problem 3: Fuel Consumption
- A boat uses 150 liters of fuel per trip
- It has 1,500 liters of fuel
- How many trips can it make?
- Solution: 1,500 ÷ 150 = 10 trips

## Common Mistakes to Avoid ❌

1. **Misreading the Problem**
   - Read carefully
   - Understand what's being asked
   - Don't rush

2. **Choosing Wrong Operation**
   - Look for keywords
   - Think about what the problem is asking
   - Check if your choice makes sense

3. **Calculation Errors**
   - Double-check your work
   - Use estimation to verify
   - Make sure units match

## Tips for Success 🎯

1. **Read Carefully**
   - Take your time
   - Underline important information
   - Draw pictures if helpful

2. **Practice Regularly**
   - Solve different types of problems
   - Start with simple problems
   - Gradually increase difficulty

3. **Check Your Work**
   - Verify calculations
   - Ensure answer makes sense
   - Include units in your answer

## Summary ✨

In this topic, we learned:
- How to solve multiplication word problems
- How to solve division word problems
- Problem-solving steps
- Common mistakes to avoid
- Tips for success

Remember, practice makes perfect! The more word problems you solve, the better you'll get at them.

### Additional Practice Problems 🏋️‍♀️

1. A fishing boat catches 320 fish per trip. How many fish will it catch in 5 trips?
2. A boat can carry 800 kg of fish. If each fish weighs 2 kg, how many fish can it carry?
3. A fisherman caught 1,500 fish and wants to share them equally among 6 markets. How many fish will each market get?
4. A boat uses 180 liters of fuel per trip. If it has 1,800 liters of fuel, how many trips can it make?
`,
    quiz: {
        questions: [
            ...easyQuestions,
            ...mediumQuestions
        ]
    }
}; 