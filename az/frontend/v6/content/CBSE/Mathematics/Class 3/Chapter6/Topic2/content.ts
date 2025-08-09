import { TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic2Content: TopicContent = {
  id: 'cl3_ch6_t2',
  topicNumber: 2,
  topicName: 'Simple Transactions and Calculations',
  duration: 45,
  description: 'Learn about using money in daily life, making simple transactions, and performing calculations with rupees and paise. Practice real-life word problems and understand the value of money.',
  explanation: `
# Simple Transactions and Calculations 💰🧾

Money is an important part of our daily life. We use it to buy things, pay for services, and save for the future. In this topic, you will learn how to use money, make simple transactions, and do calculations with rupees (₹) and paise (p).

## What is Money? 💵
Money is what we use to buy things. In India, we use rupees (₹) and paise (p). 1 rupee = 100 paise. Coins and notes come in different values, like ₹1, ₹2, ₹5, ₹10, ₹20, ₹50, ₹100, and so on.

## Understanding Rupees and Paise
- 1 rupee (₹1) = 100 paise (100p)
- 50 paise = half a rupee (½₹)
- 25 paise = quarter of a rupee (¼₹)

### Example:
- 150 paise = 1 rupee 50 paise = ₹1.50
- 250 paise = 2 rupees 50 paise = ₹2.50

## Making Transactions 🛒
A transaction is when you buy or sell something. You give money to get things or get money when you sell things.

### Example:
- You buy a pencil for ₹5. You give ₹5 to the shopkeeper and get the pencil.
- If you give ₹10 for a ₹7 eraser, you get ₹3 back as change.

## Calculating Total Cost
When you buy more than one thing, add their prices to find the total cost.

### Example:
- A pen costs ₹7 and a notebook costs ₹13. Total = ₹7 + ₹13 = ₹20

## Calculating Change
If you pay more than the cost, subtract the cost from the money you gave to find the change.

### Example:
- You pay ₹50 for a toy costing ₹32. Change = ₹50 - ₹32 = ₹18

## Converting Paise to Rupees
To convert paise to rupees, divide by 100.
- 250 paise = 250 ÷ 100 = ₹2.50

## Word Problems and Real-Life Examples
1. Riya buys a chocolate for ₹12 and a juice for ₹18. How much does she spend? (₹12 + ₹18 = ₹30)
2. You have ₹100. You buy a ball for ₹45. How much is left? (₹100 - ₹45 = ₹55)
3. Convert 350 paise to rupees. (350 ÷ 100 = ₹3.50)

## Tips for Transactions 📝
- Always check the total cost before paying.
- Count your change carefully.
- Remember 1 rupee = 100 paise.

## Practice Questions 🏋️‍♂️
1. If you buy a pen for ₹8 and a ruler for ₹12, what is the total cost?
2. You pay ₹20 for a toy costing ₹15. How much change do you get?
3. Convert 500 paise to rupees.

## Summary ✨
- Money is used for buying and selling.
- Add prices to find total cost.
- Subtract to find change.
- 1 rupee = 100 paise.
- Practice helps you become smart with money! 😊
`,
  quiz: {
    questions: [
      ...easyQuestions,
      ...mediumQuestions
    ]
  }
};
