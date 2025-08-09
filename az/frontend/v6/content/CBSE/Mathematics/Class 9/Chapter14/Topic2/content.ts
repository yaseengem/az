// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 9\Chapter14\Topic2\content.ts
import { TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic2Content: TopicContent = {
  id: 'cl9_ch14_t2',
  topicNumber: 2,
  topicName: "Review of Word Problems",
  duration: 45,
  description: "Understanding how to translate real-world word problems into mathematical equations and solve them",
  explanation: `
# Review of Word Problems 🔍

## What Are Word Problems? 📝

Word problems (also called story problems) are mathematical exercises where information about a situation is presented in everyday language rather than in mathematical notation. They are an important bridge between abstract mathematics and real-world applications. Word problems require us to translate verbal descriptions into mathematical expressions that we can then solve using our mathematical knowledge.

## Why Are Word Problems Important? 🌟

Word problems are important for several reasons:

- **Real-world application** 🌍: They show how mathematics is used to solve practical, everyday problems.
- **Critical thinking** 🧠: They develop analytical skills by requiring us to extract relevant information from a narrative.
- **Mathematical modeling** 📊: They introduce the basics of creating mathematical models from real situations.
- **Communication skills** 🗣️: They improve our ability to translate between verbal language and mathematical language.
- **Problem-solving strategies** 🛠️: They help develop systematic approaches to tackling complex problems.

## Key Steps to Solving Word Problems 📋

Solving word problems effectively involves a structured approach:

### 1. Understand the Problem 📚

- **Read carefully** 👀: Read the problem multiple times to ensure you understand what is being asked.
- **Identify the unknown** ❓: Determine what you're trying to find.
- **Identify the given information** 📄: List all the facts and values provided in the problem.
- **Identify constraints** 🚧: Note any limitations or special conditions mentioned.

### 2. Devise a Plan 🗺️

- **Choose appropriate variables** 🔤: Assign variables to unknown quantities.
- **Select a mathematical approach** ➗: Decide which mathematical concepts are relevant (algebra, geometry, etc.).
- **Translate words into mathematical expressions** 🔄: Convert the verbal relationships into equations or inequalities.

### 3. Execute the Plan ✅

- **Solve the mathematical equations** 📝: Apply appropriate mathematical techniques to find the values of your variables.
- **Keep track of your work** 📒: Organize your calculations so you can verify them later.
- **Check intermediary results** 🔍: Confirm that interim calculations make sense in the context of the problem.

### 4. Review the Solution 🔄

- **Verify the answer** ✓: Check that your answer satisfies all conditions in the original problem.
- **Interpret the result** 🧩: Explain what your mathematical answer means in the context of the original problem.
- **Look for alternative methods** 🔄: Consider if there are other ways to solve the problem that might be more elegant or efficient.

## Common Types of Word Problems 📚

Let's review some common types of word problems and how to approach them:

### 1. Number Problems ➕➖

These involve finding one or more numbers that satisfy certain conditions.

**Example**: The sum of two numbers is 25, and their difference is 5. Find the numbers.

**Solution**:
- Let x and y be the two numbers.
- Given information: x + y = 25 (sum) and x - y = 5 (difference)
- From equation 1: y = 25 - x
- Substituting into equation 2: x - (25 - x) = 5
- Simplifying: x - 25 + x = 5
- Solving: 2x - 25 = 5, so 2x = 30, and x = 15
- Therefore, y = 25 - 15 = 10
- The two numbers are 15 and 10.
- Verification: 15 + 10 = 25 ✓ and 15 - 10 = 5 ✓

### 2. Age Problems 👶👴

These involve finding ages of people based on relationships between their ages.

**Example**: A father is 4 times as old as his son. In 20 years, the father will be twice as old as his son. Find their present ages.

**Solution**:
- Let x be the son's present age. Then the father's present age is 4x.
- In 20 years, the son's age will be x + 20, and the father's age will be 4x + 20.
- We're told that the father will be twice as old as the son: 4x + 20 = 2(x + 20)
- Simplifying: 4x + 20 = 2x + 40
- Solving: 2x = 20, so x = 10
- Therefore, the son is 10 years old, and the father is 4 × 10 = 40 years old.
- Verification: In 20 years, the son will be 30 and the father will be 60. 60 ÷ 30 = 2 ✓

### 3. Motion Problems 🚗

These involve objects moving at different speeds, often asking when or where they meet.

**Example**: A car and a bus start from the same point and travel in the same direction. The car travels at 60 km/h and the bus at 40 km/h. How far from the starting point will the car be when it is 50 km ahead of the bus?

**Solution**:
- Let t be the time (in hours) it takes for the car to be 50 km ahead of the bus.
- Distance traveled by car = 60t km
- Distance traveled by bus = 40t km
- Since the car is 50 km ahead: 60t - 40t = 50
- Solving: 20t = 50, so t = 2.5 hours
- Therefore, the car will be at a distance of 60 × 2.5 = 150 km from the starting point.
- Verification: Bus distance = 40 × 2.5 = 100 km, and 150 - 100 = 50 km ✓

### 4. Work Problems 👷‍♀️

These involve rates at which tasks can be completed, often by different workers.

**Example**: Rohan can complete a task in 6 hours, while Priya can complete the same task in 4 hours. How long would it take them to complete the task if they work together?

**Solution**:
- Rohan's rate of work: 1/6 of the task per hour
- Priya's rate of work: 1/4 of the task per hour
- Combined rate of work: 1/6 + 1/4 = (4 + 6)/24 = 10/24 of the task per hour
- Time to complete the task = 1 ÷ (10/24) = 24/10 = 2.4 hours
- Therefore, working together, they can complete the task in 2 hours and 24 minutes.
- Verification: In 2.4 hours, Rohan completes 2.4/6 = 0.4 of the task and Priya completes 2.4/4 = 0.6 of the task. Together they complete 0.4 + 0.6 = 1 task ✓

### 5. Mixture Problems 🧪

These involve combining substances with different concentrations or values.

**Example**: How much pure water should be added to 30 liters of a 40% salt solution to make it a 30% salt solution?

**Solution**:
- Let x be the amount of pure water to add (in liters).
- Salt in original solution = 40% of 30 liters = 0.4 × 30 = 12 liters
- Total volume after adding water = 30 + x liters
- Salt in the new solution = 30% of the total volume = 0.3(30 + x)
- Since the amount of salt stays the same: 12 = 0.3(30 + x)
- Solving: 12 = 9 + 0.3x, so 3 = 0.3x, thus x = 10
- Therefore, 10 liters of pure water should be added.
- Verification: New concentration = 12/(30 + 10) = 12/40 = 0.3 = 30% ✓

## Common Pitfalls to Avoid ⚠️

When solving word problems, be careful of these common mistakes:

1. **Misinterpreting the problem** 🚫: Make sure you understand what's being asked before diving into calculations.
2. **Using the wrong operation** ➗: Pay attention to phrases like "more than" (addition) versus "times" (multiplication).
3. **Ignoring units** 📏: Keep track of units throughout your calculation and make sure your final answer uses the correct units.
4. **Forgetting constraints** 🚧: Some problems have specific limitations that must be considered (e.g., "positive integers only").
5. **Not checking the answer** ❌: Always verify that your solution makes sense in the context of the original problem.

## Strategies for Success 🌟

To improve your word problem-solving skills:

1. **Practice regularly** 🔄: The more word problems you solve, the better you'll become at recognizing patterns and approaches.
2. **Draw diagrams** ✏️: Visual representations can often clarify relationships described in the problem.
3. **Work backward** ⏪: Sometimes starting with the answer and working back to the given information can help solve the problem.
4. **Estimate first** 🔢: Make a rough estimate of what the answer should be so you can check if your calculated answer is reasonable.
5. **Break it down** 🧩: Complex problems can often be broken into simpler subproblems.

## Sample Question: Investment Problem 💰

Meera invested some money at 5% simple interest and another amount at 7% simple interest. She invested ₹4000 more at 5% than at 7%. If her annual interest income is ₹1180, how much did she invest at each rate?

**Solution**:

1. **Define variables**:
   - Let x be the amount invested at 7%
   - Then x + 4000 is the amount invested at 5%

2. **Create equations using interest income**:
   - Interest from 5% investment: 0.05(x + 4000)
   - Interest from 7% investment: 0.07x
   - Total interest: 0.05(x + 4000) + 0.07x = 1180

3. **Solve**:
   - 0.05x + 200 + 0.07x = 1180
   - 0.12x + 200 = 1180
   - 0.12x = 980
   - x = 980 ÷ 0.12 = 8166.67

4. **Find both investments**:
   - Amount at 7%: ₹8167 (rounded)
   - Amount at 5%: ₹8167 + ₹4000 = ₹12,167

5. **Verify**:
   - Interest at 5%: 0.05 × 12167 = ₹608.35
   - Interest at 7%: 0.07 × 8167 = ₹571.69
   - Total interest: ₹608.35 + ₹571.69 = ₹1180.04 ≈ ₹1180 ✓

## Summary 📝

Word problems are an essential part of mathematics education because they connect abstract mathematical concepts to real-world applications. By following a structured approach of understanding the problem, devising a plan, executing that plan, and reviewing the solution, you can tackle even complex word problems confidently.

Remember that the key to becoming proficient at solving word problems is practice and attention to detail. As you solve more problems, you'll become better at recognizing patterns and selecting appropriate strategies. Word problems are not just mathematical exercises—they're the foundation of mathematical modeling, which we'll explore further in this chapter.
`,
  quiz: {
    questions: [
      ...easyQuestions,
      ...mediumQuestions
    ]
  }
};
