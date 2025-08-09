import { QuizQuestion, TopicQuiz, TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic3Content: TopicContent = {
    id: 'cl5_ch15_t3',
    topicNumber: 3,
    topicName: "Real-life Problem-solving Scenarios",
    duration: 45,
    description: "Applying mathematical reasoning to solve everyday problems and scenarios",
    explanation: `
# Real-life Problem-solving Scenarios 🌍

Welcome to the world of real-life problem solving! 🎯 In this topic, we'll learn how to use math to solve everyday problems. Let's explore how mathematics helps us in our daily lives! 🚀

## Why is Problem-solving Important? 🤔

Problem-solving helps us:
- Make better decisions 🤔
- Save time and money 💰
- Plan effectively 📅
- Understand the world better 🌍

## Types of Real-life Problems 📝

### 1. Shopping Problems 🛍️
- Calculating discounts
- Comparing prices
- Budgeting money

### 2. Time Management ⏰
- Planning schedules
- Calculating durations
- Meeting deadlines

### 3. Measurement Problems 📏
- Cooking recipes
- Building projects
- Travel distances

## Problem-solving Steps 🧩

### Step 1: Understand the Problem
- Read carefully
- Identify what's given
- Know what to find

### Step 2: Plan the Solution
- Choose the right method
- Break it into steps
- Think logically

### Step 3: Solve the Problem
- Do the calculations
- Check your work
- Find the answer

### Step 4: Verify the Answer
- Does it make sense?
- Is it reasonable?
- Check your work

## Example Problems 📚

### Example 1: Shopping Budget
Problem: You have ₹500 and want to buy:
- A book for ₹250
- A toy for ₹175
- A snack for ₹50

Do you have enough money?
Solution:
- Total cost = ₹250 + ₹175 + ₹50 = ₹475
- You have ₹500
- Yes, you have enough money! (₹500 - ₹475 = ₹25 left)

### Example 2: Time Management
Problem: Your school starts at 8:00 AM. It takes:
- 15 minutes to get ready
- 20 minutes to eat breakfast
- 30 minutes to travel

What time should you wake up?
Solution:
- Total time needed = 15 + 20 + 30 = 65 minutes
- 65 minutes = 1 hour and 5 minutes
- Wake up time = 8:00 AM - 1:05 = 6:55 AM

### Example 3: Recipe Scaling
Problem: A cookie recipe needs:
- 2 cups flour
- 1 cup sugar
- ½ cup butter

You want to make double the amount. How much of each ingredient do you need?
Solution:
- Flour: 2 × 2 = 4 cups
- Sugar: 1 × 2 = 2 cups
- Butter: ½ × 2 = 1 cup

## Sample Questions ❓

1. You have ₹1000. You spend ₹350 on books and ₹275 on stationery. How much money do you have left?
   Answer: ₹1000 - ₹350 - ₹275 = ₹375

2. A movie is 2 hours and 15 minutes long. If it starts at 3:30 PM, when will it end?
   Answer: 3:30 PM + 2:15 = 5:45 PM

3. You need to cut a 12-meter rope into 4 equal pieces. How long will each piece be?
   Answer: 12 ÷ 4 = 3 meters

## Real-Life Applications 🌍

Math helps us in:
- Shopping wisely 🛍️
- Managing time ⏰
- Cooking food 🍳
- Building things 🏗️
- Planning trips 🚗

## Tips for Problem-solving 💡

1. Read the problem carefully
2. Write down what you know
3. Draw pictures if helpful
4. Check your work
5. Make sure your answer makes sense

## Summary ✨

- Math is everywhere in daily life
- Problem-solving has clear steps
- Practice makes perfect
- Think carefully and check your work

Remember: Math helps us solve real problems every day! 🎯
`,

    quiz: {
        questions: [
            ...easyQuestions,
            ...mediumQuestions
        ]
    }
}; 