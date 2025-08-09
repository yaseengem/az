import { TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic1Content: TopicContent = {
    id: 'cl7_ch18_t1',
    topicNumber: 1,
    topicName: 'Financial calculations: budgeting, interest',
    duration: 45,
    description: 'Learn the basics of budgeting, calculating interest, and managing money in real-life situations.',
    explanation: `
# Financial Calculations: Budgeting, Interest 💰

Understanding how to manage money is an important life skill. In this topic, you will learn about budgeting, how to calculate interest, and how these concepts are used in daily life. Let's explore how you can make smart financial decisions!

## 1. What is Budgeting? 📊

**Budgeting** means planning how to spend your money. It helps you keep track of your income (money you get) and expenses (money you spend). A good budget ensures you don't run out of money and can even help you save for future goals.

### Example:
Suppose you get ₹500 as pocket money every month. You want to spend it on snacks, books, and save some for a new game. Here's how you can plan:
- Snacks: ₹200
- Books: ₹150
- Savings: ₹150

**Total:** ₹500

If you spend more on snacks, you'll have less for books or savings. That's why budgeting is important!

## 2. Types of Expenses 🧾

- **Fixed Expenses:** These stay the same every month (e.g., school fees, bus pass).
- **Variable Expenses:** These can change (e.g., snacks, gifts, outings).
- **Savings:** Money you keep aside for future needs or emergencies.

## 3. Why Save Money? 🏦

Saving money helps you:
- Buy something special in the future
- Handle emergencies
- Achieve bigger goals (like a bicycle or a trip)

## 4. Introduction to Interest 📈

When you keep money in a bank, the bank pays you extra money called **interest**. If you borrow money, you pay interest to the lender.

### Types of Interest:
- **Simple Interest:** Calculated only on the original amount (principal).
- **Compound Interest:** Calculated on the principal and also on the interest earned previously.

## 5. Simple Interest Formula 📝

Simple Interest (SI) = (Principal × Rate × Time) / 100
- **Principal (P):** The original amount of money
- **Rate (R):** Interest rate per year (in %)
- **Time (T):** Time period (in years)

### Example:
If you deposit ₹1,000 in a bank at 5% per year for 2 years:
SI = (1000 × 5 × 2) / 100 = ₹100

You will earn ₹100 as interest in 2 years.

## 6. Compound Interest (CI) Overview 🔄

Compound interest is interest on both the principal and the interest already earned. It helps your money grow faster.

### Formula for Compound Interest:
Amount = Principal × (1 + Rate/100)^Time
Compound Interest = Amount - Principal

### Example:
If you deposit ₹1,000 at 5% per year for 2 years:
Amount = 1000 × (1 + 5/100)^2 = 1000 × 1.1025 = ₹1102.50
CI = ₹1102.50 - ₹1000 = ₹102.50

## 7. Real-Life Applications 🛒

- **Budgeting for a School Event:** Planning how much to spend on decorations, food, and prizes.
- **Saving for a Gadget:** Deciding how much to save each month to buy a new phone.
- **Interest on Savings:** Calculating how much extra money you'll get by keeping your savings in a bank.

## 8. Tips for Smart Money Management 💡

- Always keep track of your spending.
- Save a part of your pocket money regularly.
- Compare prices before buying.
- Avoid borrowing unless necessary.
- Understand the difference between needs and wants.

## 9. Sample Questions for Practice 📝

1. If you save ₹200 every month, how much will you have in 6 months?
2. What is the simple interest on ₹2,000 at 4% per year for 3 years?
3. If you spend ₹150 on books and ₹100 on snacks from ₹500, how much is left?
4. What is the difference between fixed and variable expenses?
5. If you deposit ₹500 at 6% per year for 2 years, what is the compound interest?

## 10. Short Summary ✨

- Budgeting helps you plan your spending and savings.
- Interest is the extra money earned or paid for using money.
- Simple interest is calculated on the original amount; compound interest grows faster.
- Saving money is important for future needs and emergencies.
- Smart money management leads to financial security and independence.

Keep practicing these skills to become a money-smart student! 💸
`,
    quiz: {
        questions: [
            ...easyQuestions,
            ...mediumQuestions
        ]
    }
}; 