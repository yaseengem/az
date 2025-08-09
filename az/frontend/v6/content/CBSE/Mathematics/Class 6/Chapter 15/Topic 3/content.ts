// Topic 3: Real-life problem-solving scenarios
// content.ts will be created here for the topic.

import { TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic3Content: TopicContent = {
   id: 'cl6_ch15_t3',
   topicNumber: 3,
   topicName: "Real-life Problem-solving Scenarios",
   duration: 45,
   description: "Applying mathematical reasoning to solve real-world problems and make informed decisions",
   explanation: `# Real-life Problem-solving Scenarios 🌍

Welcome to the world of real-life problem-solving! 🎯 In this topic, we'll learn how to apply mathematical reasoning to solve everyday problems and make smart decisions. Let's explore how mathematics helps us in our daily lives! 🚀

## Understanding Real-life Problems 🤔

Real-life problems are situations we encounter every day that require mathematical thinking to solve. These problems help us develop critical thinking and decision-making skills.

### Types of Real-life Problems:

1. **Time Management** ⏰
   - Planning schedules
   - Calculating durations
   - Managing deadlines

2. **Money Matters** 💰
   - Budgeting
   - Shopping calculations
   - Saving and spending

3. **Measurement Problems** 📏
   - Length and distance
   - Area and perimeter
   - Volume and capacity

## Problem-solving Strategies 🎯

1. **Understand the Problem**:
   - Read carefully
   - Identify what's given
   - Determine what's needed

2. **Make a Plan**:
   - Choose appropriate operations
   - Draw diagrams if helpful
   - Break down complex problems

3. **Solve Step by Step**:
   - Show your work
   - Check calculations
   - Verify your answer

## Real-life Examples 🌟

### Example 1: Shopping Budget
\`\`\`
You have ₹500 to spend. You want to buy:
- A notebook for ₹75
- A pen for ₹25
- A ruler for ₹15
How much money will you have left?
\`\`\`

### Example 2: Time Management
\`\`\`
You have 2 hours to complete 3 tasks:
- Task 1 takes 45 minutes
- Task 2 takes 30 minutes
- Task 3 takes 25 minutes
Will you have enough time?
\`\`\`

### Example 3: Measurement
\`\`\`
Your room is 4 meters long and 3 meters wide.
You want to put a carpet that costs ₹200 per square meter.
How much will the carpet cost?
\`\`\`

## Key Skills to Develop 🧠

1. **Critical Thinking**:
   - Analyze situations
   - Identify patterns
   - Make connections

2. **Logical Reasoning**:
   - Follow steps
   - Check solutions
   - Find alternatives

3. **Decision Making**:
   - Compare options
   - Choose best solutions
   - Consider consequences

## Common Problem Types 📝

1. **Word Problems**:
   - Read carefully
   - Identify key information
   - Translate to numbers

2. **Multi-step Problems**:
   - Break into parts
   - Solve each part
   - Combine solutions

3. **Estimation Problems**:
   - Round numbers
   - Make approximations
   - Check reasonableness

## Practice Problems 🏋️‍♀️

1. **Budget Problem**:
\`\`\`
You have ₹1000. You spend:
- ₹250 on books
- ₹150 on stationery
- ₹300 on lunch
How much do you have left?
\`\`\`

2. **Time Problem**:
\`\`\`
A movie starts at 3:30 PM and ends at 5:45 PM.
How long is the movie?
\`\`\`

3. **Measurement Problem**:
\`\`\`
A rectangular garden is 8m long and 5m wide.
What is its perimeter?
\`\`\`

## Common Mistakes to Avoid ❌

1. **Misreading Problems**:
   - Read carefully
   - Understand requirements
   - Check units

2. **Calculation Errors**:
   - Double-check work
   - Use estimation
   - Verify answers

3. **Missing Steps**:
   - Show all work
   - Follow order
   - Don't skip steps

## Summary ✨

In this topic, we learned:
- How to identify and solve real-life problems
- Different types of problem-solving strategies
- Key skills for mathematical reasoning
- Common problem types and their solutions
- How to avoid common mistakes

### Additional Examples and Sample Questions:

1. **Example**: If you save ₹50 every week, how much will you save in 8 weeks?

2. **Example**: A train journey takes 2 hours and 30 minutes. If it starts at 9:15 AM, when will it end?

3. **Question**: A rectangular room is 6m long and 4m wide. What is its area?

4. **Question**: You have ₹200. You want to buy 3 items that cost ₹45, ₹75, and ₹60. Do you have enough money?`,
   quiz: {
      questions: [
         ...easyQuestions,
         ...mediumQuestions
      ]
   }
};
