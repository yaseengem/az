import { QuizQuestion, TopicQuiz, TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic1Content: TopicContent = {
    id: 'cl5_ch17_t1',
    topicNumber: 1,
    topicName: "Budgeting and Money Management",
    duration: 45,
    description: "Understanding basic budgeting concepts and practical money management skills",
    explanation: `
# Budgeting and Money Management 💰

Money management is an essential life skill that helps us make smart financial decisions! 🧠 In this topic, we'll learn how to create and manage a budget, understand income and expenses, and make wise spending choices. Let's dive into the world of smart money management! 🚀

## What is a Budget? 📊

A budget is:
- A plan for how to spend and save money
- A way to track income and expenses
- A tool to help achieve financial goals
- A method to avoid overspending

## Key Budgeting Concepts 🔑

### 1. Income 💵
- Money you receive regularly
- Can come from allowance, gifts, or small jobs
- Example: ₹100 weekly allowance

### 2. Expenses 💸
- Money you spend
- Can be fixed (same amount regularly) or variable (changes)
- Examples: 
  * Fixed: ₹20 for school lunch daily
  * Variable: ₹50 for a new toy

### 3. Savings 🏦
- Money set aside for future use
- Important for emergencies and big purchases
- Example: Saving ₹10 daily for a new bicycle

## Creating a Simple Budget 📝

### Step 1: List Your Income
- Write down all money you receive
- Example:
  * Weekly allowance: ₹100
  * Birthday gift: ₹500
  * Total income: ₹600

### Step 2: List Your Expenses
- Write down all money you spend
- Example:
  * School lunch: ₹100
  * Stationery: ₹50
  * Entertainment: ₹200
  * Total expenses: ₹350

### Step 3: Calculate Savings
- Subtract expenses from income
- Example: ₹600 - ₹350 = ₹250 savings

## Smart Spending Tips 💡

1. **Needs vs. Wants**
   - Needs: Things you must have (food, school supplies)
   - Wants: Things you'd like to have (toys, games)
   - Always prioritize needs over wants

2. **Comparison Shopping**
   - Compare prices before buying
   - Look for good deals and discounts
   - Example: Compare prices of notebooks at different stores

3. **Saving Strategies**
   - Set specific savings goals
   - Use a piggy bank or savings account
   - Example: Save ₹10 daily for 30 days = ₹300

## Real-Life Examples 🌟

### Example 1: Weekly Budget
Rahul's weekly budget:
- Income: ₹100 allowance
- Expenses:
  * School lunch: ₹50
  * Stationery: ₹20
  * Entertainment: ₹20
- Savings: ₹10

### Example 2: Monthly Budget
Priya's monthly budget:
- Income: ₹500 (allowance + gift)
- Expenses:
  * School supplies: ₹200
  * Books: ₹150
  * Snacks: ₹100
- Savings: ₹50

## Sample Questions ❓

1. If you receive ₹50 daily and spend ₹30, how much can you save in a week?
   - Answer: ₹140 (₹20 daily × 7 days)

2. A toy costs ₹200. If you save ₹10 daily, how many days will it take to buy it?
   - Answer: 20 days

3. Your monthly allowance is ₹400. You spend ₹250 on needs and ₹100 on wants. How much do you save?
   - Answer: ₹50

## Practical Applications 🌍

Budgeting is used in:
- Planning school expenses 📚
- Saving for special occasions 🎁
- Managing pocket money 💰
- Planning family outings 🎢
- Buying gifts for friends 🎁

## Tips for Smart Money Management 💡

1. Always track your spending
2. Set clear savings goals
3. Compare prices before buying
4. Save before spending
5. Learn to say no to unnecessary purchases

## Summary ✨

- A budget helps plan income and expenses
- Track all money coming in and going out
- Save regularly for future needs
- Make smart spending choices
- Set and achieve financial goals

Remember: Good money habits start early! Practice budgeting to become a smart money manager! 🎯
`,
    quiz: {
        questions: [
            ...easyQuestions,
            ...mediumQuestions
        ]
    }
}; 