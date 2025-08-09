// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 7\Chapter8\Topic2\content.ts
import { QuizQuestion, TopicQuiz, TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic2Content: TopicContent = {
  id: 'cl7_ch8_t2',
  topicNumber: 2,
  topicName: "Percentages: conversion, profit/loss, simple interest",
  duration: 45,
  description: "Understanding percentages, their conversions, and applications in profit/loss calculations and simple interest",
  explanation: `
# Percentages: conversion, profit/loss, simple interest 📊

Welcome to the fascinating world of percentages! 🌟 In this topic, we'll explore how percentages are used in our daily lives, especially in financial calculations like profit, loss, and simple interest. Let's dive in and master these essential mathematical concepts! 🚀

## What are Percentages? 🤔

A percentage is a number or ratio expressed as a fraction of 100. The symbol '%' is used to denote a percentage. The word 'percent' comes from the Latin phrase 'per centum', meaning 'by the hundred'.

### Understanding Percentages 📝

Percentages are a convenient way to express fractions with denominator 100. For example:
- 25% means 25 out of 100, which can be written as 25/100 or 0.25
- 75% means 75 out of 100, which can be written as 75/100 or 0.75
- 100% means 100 out of 100, which equals 1 (the whole)
- 200% means 200 out of 100, which equals 2 (twice the whole)

Percentages help us compare quantities easily, express changes, and perform calculations in various fields including finance, statistics, and everyday life.

## Converting Between Fractions, Decimals, and Percentages 🔄

### Fraction to Percentage
To convert a fraction to a percentage, multiply it by 100%:
- 1/4 = (1/4) × 100% = 25%
- 3/5 = (3/5) × 100% = 60%
- 7/20 = (7/20) × 100% = 35%

### Decimal to Percentage
To convert a decimal to a percentage, multiply it by 100%:
- 0.72 = 0.72 × 100% = 72%
- 0.05 = 0.05 × 100% = 5%
- 1.5 = 1.5 × 100% = 150%

### Percentage to Fraction
To convert a percentage to a fraction, divide by 100 and simplify:
- 40% = 40/100 = 2/5
- 75% = 75/100 = 3/4
- 125% = 125/100 = 5/4 = 1 1/4

### Percentage to Decimal
To convert a percentage to a decimal, divide by 100:
- 65% = 65/100 = 0.65
- 7% = 7/100 = 0.07
- 250% = 250/100 = 2.5

## Calculating Percentages of Quantities 🧮

### Finding a Percentage of a Number
To find a percentage of a number, convert the percentage to a decimal and multiply:

**Formula:** P% of X = (P/100) × X

Examples:
- 15% of 80 = (15/100) × 80 = 0.15 × 80 = 12
- 25% of 120 = (25/100) × 120 = 0.25 × 120 = 30
- 75% of 200 = (75/100) × 200 = 0.75 × 200 = 150

### Finding What Percentage One Number is of Another
To find what percentage X is of Y, divide X by Y and multiply by 100%:

**Formula:** X is what percentage of Y = (X/Y) × 100%

Examples:
- 15 is what percentage of 60? (15/60) × 100% = 0.25 × 100% = 25%
- 30 is what percentage of 120? (30/120) × 100% = 0.25 × 100% = 25%
- 75 is what percentage of 50? (75/50) × 100% = 1.5 × 100% = 150%

### Finding the Original Number When a Percentage is Known
If P% of a number X is Y, then:

**Formula:** X = Y × (100/P)

Examples:
- 25% of what number is 15? 15 × (100/25) = 15 × 4 = 60
- 40% of what number is 30? 30 × (100/40) = 30 × 2.5 = 75
- 120% of what number is 96? 96 × (100/120) = 96 × (5/6) = 80

## Percentages in Profit and Loss 💰

In business transactions, profit and loss are typically calculated in terms of percentages based on the cost price (CP) of goods.

### Profit and Loss
- **Profit:** When selling price (SP) is greater than cost price (CP)
- **Loss:** When selling price (SP) is less than cost price (CP)

### Calculating Profit and Loss
- **Profit** = SP - CP
- **Loss** = CP - SP

### Profit Percentage and Loss Percentage
- **Profit Percentage** = (Profit/CP) × 100%
- **Loss Percentage** = (Loss/CP) × 100%

### Examples of Profit and Loss Calculations

**Example 1:** Ram buys a bicycle for ₹2,400 and sells it for ₹3,000. Find the profit percentage.
- Cost Price (CP) = ₹2,400
- Selling Price (SP) = ₹3,000
- Profit = SP - CP = ₹3,000 - ₹2,400 = ₹600
- Profit Percentage = (Profit/CP) × 100% = (600/2,400) × 100% = 25%

**Example 2:** Sita buys a phone for ₹8,000 and sells it for ₹7,200. Find the loss percentage.
- Cost Price (CP) = ₹8,000
- Selling Price (SP) = ₹7,200
- Loss = CP - SP = ₹8,000 - ₹7,200 = ₹800
- Loss Percentage = (Loss/CP) × 100% = (800/8,000) × 100% = 10%

**Example 3:** A shopkeeper marks up the price of an item by 40% and then gives a discount of 10%. Calculate the overall profit percentage.
- Let's say the cost price is ₹100 (for easy calculation)
- Marked price = CP + 40% of CP = ₹100 + ₹40 = ₹140
- Discount = 10% of marked price = 10% of ₹140 = ₹14
- Selling price = Marked price - Discount = ₹140 - ₹14 = ₹126
- Profit = SP - CP = ₹126 - ₹100 = ₹26
- Profit Percentage = (Profit/CP) × 100% = (26/100) × 100% = 26%

## Simple Interest 🏦

Simple interest is the interest calculated only on the initial principal amount, not on the interest earned over time.

### Formula for Simple Interest
**Simple Interest (SI)** = (Principal × Rate × Time) / 100

Where:
- Principal (P) = Amount of money borrowed or invested
- Rate (R) = Rate of interest per annum (per year)
- Time (T) = Time period in years

### Finding Principal, Rate, or Time
- **Principal** = (SI × 100) / (Rate × Time)
- **Rate** = (SI × 100) / (Principal × Time)
- **Time** = (SI × 100) / (Principal × Rate)

### Amount After Simple Interest
**Amount (A)** = Principal (P) + Simple Interest (SI)

### Examples of Simple Interest Calculations

**Example 1:** Rahul deposits ₹5,000 in a bank that offers 5% simple interest per annum. How much interest will he earn after 3 years?
- Principal (P) = ₹5,000
- Rate (R) = 5% per annum
- Time (T) = 3 years
- Simple Interest (SI) = (P × R × T) / 100 = (5,000 × 5 × 3) / 100 = ₹750
- Amount after 3 years = P + SI = ₹5,000 + ₹750 = ₹5,750

**Example 2:** Priya borrowed some money at 8% simple interest per annum. After 2 years, she paid back ₹7,200 including interest. How much did she borrow?
- Rate (R) = 8% per annum
- Time (T) = 2 years
- Amount (A) = ₹7,200
- Let the Principal be P
- SI = (P × 8 × 2) / 100 = 16P / 100
- A = P + SI
- 7,200 = P + 16P/100
- 7,200 = P(1 + 16/100) = P(1.16)
- P = 7,200 / 1.16 = ₹6,207 (approximately)

**Example 3:** A sum of money doubles itself in 10 years at simple interest. What is the rate of interest?
- Let the principal be P
- Amount after 10 years = 2P
- Simple Interest = 2P - P = P
- SI = (P × R × 10) / 100 = 10PR / 100
- P = 10PR / 100
- R = 10%

## Applications of Percentages in Daily Life 🌍

### Discounts and Sales
Shops often advertise discounts like "20% off" or "Buy 1 Get 1 Free (50% off)". Understanding percentages helps us calculate:
- The discounted price of an item
- How much money we're saving
- Whether a 'sale' is actually a good deal

### Taxes
Various taxes are calculated as percentages, such as:
- Goods and Services Tax (GST)
- Income tax
- Property tax

### Academic Scores
Student performance is often measured in percentages:
- Exam scores (e.g., "She scored 85% on her math test")
- Overall grade percentages
- Percentile ranks compared to other students

### Banking and Finance
Percentages are crucial in financial transactions:
- Interest rates on loans and deposits
- Compound interest calculations
- Investment returns and stock market changes
- EMI (Equated Monthly Installment) calculations

### Population and Statistics
Percentages help us understand data about groups:
- Population growth rates
- Literacy rates
- Employment/unemployment rates
- Election results

## Sample Problems and Solutions 📝

**Problem 1:** In an exam, Rohit scored 85 out of 100 in Mathematics, 72 out of 90 in Science, and 40 out of 50 in English. In which subject did he perform best?

**Solution:**
- Mathematics percentage = (85/100) × 100% = 85%
- Science percentage = (72/90) × 100% = 80%
- English percentage = (40/50) × 100% = 80%
- Rohit performed best in Mathematics with 85%.

**Problem 2:** A shopkeeper buys a chair for ₹1,200 and marks it up by 25%. During a sale, he offers a discount of 10% on the marked price. What is the selling price and his profit percentage?

**Solution:**
- Cost price (CP) = ₹1,200
- Marked price = CP + 25% of CP = ₹1,200 + ₹300 = ₹1,500
- Discount = 10% of marked price = 10% of ₹1,500 = ₹150
- Selling price (SP) = Marked price - Discount = ₹1,500 - ₹150 = ₹1,350
- Profit = SP - CP = ₹1,350 - ₹1,200 = ₹150
- Profit percentage = (Profit/CP) × 100% = (150/1,200) × 100% = 12.5%

**Problem 3:** Anjali borrowed ₹8,000 at 6% simple interest per annum. After some time, she paid ₹8,960 to settle the loan. For how many years did she borrow the money?

**Solution:**
- Principal (P) = ₹8,000
- Rate (R) = 6% per annum
- Amount paid (A) = ₹8,960
- Simple Interest (SI) = A - P = ₹8,960 - ₹8,000 = ₹960
- SI = (P × R × T) / 100
- 960 = (8,000 × 6 × T) / 100
- 960 = 480T
- T = 960 / 480 = 2 years

## Summary ✨

In this topic, we've explored:
- What percentages are and how to convert between percentages, fractions, and decimals
- How to find percentages of quantities and solve percentage-related problems
- The concepts of profit and loss and how to calculate profit/loss percentages
- Simple interest calculations and applications
- Real-life applications of percentages

Understanding percentages is crucial for everyday life, from shopping and banking to academics and business. By mastering these concepts, you'll be better equipped to make informed financial decisions and solve practical mathematical problems. 

Remember these key formulas:
- Percentage = (Part/Whole) × 100%
- Profit percentage = (Profit/CP) × 100%
- Loss percentage = (Loss/CP) × 100%
- Simple Interest = (P × R × T) / 100

Keep practicing with real-life examples, and soon working with percentages will become second nature! 🎯
`,
  quiz: {
    questions: [
      ...easyQuestions,
      ...mediumQuestions
    ]
  }
};
