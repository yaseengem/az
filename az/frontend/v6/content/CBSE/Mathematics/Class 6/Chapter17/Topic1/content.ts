// Topic 1: Budgeting and money calculations
// content.ts will be created here for the topic.

import { QuizQuestion, TopicQuiz, TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic1Content: TopicContent = {
    id: 'cl6_ch17_t1',
    topicNumber: 1,
    topicName: "Budgeting and Money Calculations",
    duration: 45,
    description: "Understanding basic budgeting concepts and money calculations in real-life scenarios",
    explanation: `
# Budgeting and Money Calculations 💰

Welcome to the world of budgeting and money management! 🏦 In this topic, we'll learn how to handle money wisely and make smart financial decisions. Let's explore the exciting world of budgeting and money calculations! 🚀

## Understanding Money and Budgeting 📊

### What is Budgeting? 📝
Budgeting is like making a plan for your money. It helps you:
- Track how much money you have
- Plan how to spend it wisely
- Save for important things
- Avoid running out of money

### Basic Money Concepts 💡

1. **Income** 💵
   - Money you receive (pocket money, gifts, etc.)
   - Example: ₹500 pocket money per week

2. **Expenses** 💸
   - Money you spend
   - Two types:
     * Fixed expenses (same amount regularly)
     * Variable expenses (changes each time)

3. **Savings** 🏦
   - Money you keep aside for future use
   - Example: Saving ₹50 from ₹500 pocket money

## Real-Life Money Calculations 🧮

### 1. Basic Budget Planning 📋
Let's say you get ₹1000 pocket money per month:
- School supplies: ₹200
- Snacks: ₹300
- Entertainment: ₹200
- Savings: ₹300

### 2. Percentage Calculations 📈
- If you save 30% of ₹1000:
  * 30% of ₹1000 = ₹300
  * Formula: (Percentage × Total) ÷ 100

### 3. Price Comparisons 🛒
- Comparing prices per unit:
  * 500g for ₹100 vs 1kg for ₹180
  * Which is better value? (₹200/kg vs ₹180/kg)

## Practical Examples 🌟

### Example 1: Monthly Budget
Rahul's monthly budget:
- Income: ₹2000
- Expenses:
  * Books: ₹500
  * Stationery: ₹200
  * Sports: ₹300
  * Savings: ₹1000
- Total expenses: ₹2000
- Balance: ₹0

### Example 2: Shopping Smart
Comparing two offers:
1. 5 notebooks for ₹100
2. 8 notebooks for ₹160
- Which is better?
- Solution: Calculate price per notebook
  * Option 1: ₹20 per notebook
  * Option 2: ₹20 per notebook
  * Both are equally good!

## Money Management Tips 💡

1. **Track Your Spending** 📱
   - Write down everything you spend
   - Use a notebook or app

2. **Set Goals** 🎯
   - Short-term (new toy)
   - Long-term (bicycle)

3. **Save Regularly** 🏦
   - Save a fixed amount
   - Use a piggy bank

4. **Compare Prices** 🛍️
   - Look for best deals
   - Calculate per unit cost

## Common Money Mistakes to Avoid ❌

1. **Impulse Buying** 🛒
   - Don't buy without thinking
   - Ask: "Do I really need this?"

2. **Not Tracking Expenses** 📊
   - Keep records
   - Know where money goes

3. **No Savings Plan** 💰
   - Always save something
   - Even small amounts add up

## Practice Problems 🏋️‍♀️

1. **Problem**: You have ₹500. You spend ₹200 on books and ₹150 on snacks. How much do you have left?
   - Solution: ₹500 - ₹200 - ₹150 = ₹150

2. **Problem**: If you save 20% of ₹1000, how much do you save?
   - Solution: (20 × 1000) ÷ 100 = ₹200

3. **Problem**: Which is better: 2 kg for ₹100 or 5 kg for ₹240?
   - Solution: Calculate per kg price
     * Option 1: ₹50/kg
     * Option 2: ₹48/kg
     * Option 2 is better

## Summary ✨

In this topic, we learned:
- What budgeting means
- How to track income and expenses
- Basic money calculations
- Smart shopping tips
- Importance of saving
- How to avoid common money mistakes

### Additional Examples and Sample Questions:

1. **Example**: If you save ₹50 every week, how much will you save in 4 weeks? (Answer: ₹200)

2. **Example**: A toy costs ₹300. You have ₹250. How much more do you need? (Answer: ₹50)

3. **Question**: If you get ₹1000 and spend 40% on books, how much is left? (Answer: ₹600)

4. **Question**: Which is better: 3 chocolates for ₹60 or 5 chocolates for ₹95? (Answer: 5 chocolates for ₹95 is better at ₹19 per chocolate vs ₹20 per chocolate)
`,
    quiz: {
        questions: [
            ...easyQuestions,
            ...mediumQuestions
        ]
    }
};
