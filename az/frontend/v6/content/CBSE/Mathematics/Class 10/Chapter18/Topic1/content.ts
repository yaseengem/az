import { TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic1Content: TopicContent = {
  id: 'cl10_ch18_t1',
  topicNumber: 1,
  topicName: "Financial literacy: budgeting, interest calculations",
  duration: 45,
  description: "Understanding financial literacy, budgeting methods, and calculations involving simple and compound interest for effective money management",
  explanation: `
# Financial Literacy: Budgeting and Interest Calculations 💰

Financial literacy forms the foundation of responsible money management and financial independence! 🌟 In this topic, we'll explore essential concepts of budgeting and interest calculations that will help you make informed financial decisions throughout your life. Let's dive into the world of personal finance! 📊

## Budgeting Fundamentals 📝

Budgeting is the process of creating a plan for how to spend and save money. It's like creating a roadmap for your financial journey!

### Components of a Budget 🧩

A comprehensive budget includes:

1. **Income** 💵: Money coming in from sources like:
   - Salary/wages
   - Allowance
   - Interest earnings
   - Rental income
   - Business profits

2. **Expenses** 🛒: Money going out, typically categorized as:
   - **Fixed expenses**: Costs that remain relatively constant month to month
     - Examples: Rent/mortgage, insurance premiums, loan payments
   - **Variable expenses**: Costs that change frequently
     - Examples: Groceries, utilities, entertainment, dining out
   - **Periodic expenses**: Less frequent costs that occur at regular intervals
     - Examples: Annual subscriptions, quarterly taxes, seasonal expenses

3. **Savings and Investments** 🏦: Money set aside for:
   - Emergency fund
   - Short-term goals (vacation, new phone)
   - Long-term goals (education, retirement)

### Popular Budgeting Methods 📊

1. **50-30-20 Rule**:
   - 50% of income for needs (housing, food, transportation, utilities)
   - 30% for wants (entertainment, dining out, hobbies)
   - 20% for savings and debt repayment

2. **Zero-Based Budgeting**:
   - Income - Expenses = Zero
   - Every rupee is assigned a specific purpose
   - Example: If monthly income is ₹50,000, all ₹50,000 must be allocated to specific categories

3. **Envelope System**:
   - Cash is physically placed in envelopes labeled for different expense categories
   - When an envelope is empty, spending in that category stops
   - Modern variations use virtual "envelopes" in budgeting apps

### Creating a Budget: Step-by-Step 📋

1. **Track your income**: Calculate total monthly income from all sources
2. **List all expenses**: Record fixed, variable, and periodic expenses
3. **Categorize spending**: Group similar expenses together
4. **Set financial goals**: Define short-term and long-term objectives
5. **Allocate funds**: Distribute income across expense categories and savings
6. **Monitor and adjust**: Regularly review and refine your budget

**Example** 📚: Riya earns ₹30,000 per month. Using the 50-30-20 rule, she allocates:
- ₹15,000 (50%) for needs: ₹8,000 rent, ₹4,000 groceries, ₹3,000 utilities
- ₹9,000 (30%) for wants: ₹3,000 dining out, ₹2,000 entertainment, ₹4,000 shopping
- ₹6,000 (20%) for savings: ₹3,000 emergency fund, ₹3,000 education fund

## Interest Calculations: Simple Interest 🔢

Simple interest is interest calculated only on the original principal, not on accumulated interest.

### Simple Interest Formula 📝

Simple Interest (SI) = Principal (P) × Rate (r) × Time (t)

Where:
- P = Principal amount (initial investment or loan)
- r = Rate of interest per time period (usually expressed as decimal)
- t = Time period (in the same units as the rate)

Amount = Principal + Simple Interest = P + P×r×t = P(1 + r×t)

### Examples of Simple Interest Calculations 🧮

**Example 1**: Calculate the simple interest on ₹10,000 at 8% per annum for 3 years.
- SI = P×r×t = 10,000 × 0.08 × 3 = ₹2,400
- Amount = ₹10,000 + ₹2,400 = ₹12,400

**Example 2**: How much will Rahul need to repay if he borrows ₹25,000 at 6% simple interest for 4 years?
- SI = P×r×t = 25,000 × 0.06 × 4 = ₹6,000
- Repayment amount = ₹25,000 + ₹6,000 = ₹31,000

**Example 3**: Find the principal that amounts to ₹13,200 in 2 years at 10% simple interest per annum.
- Amount = P(1 + r×t)
- 13,200 = P(1 + 0.1×2)
- 13,200 = P(1 + 0.2)
- 13,200 = P × 1.2
- P = 13,200 ÷ 1.2 = ₹11,000

## Interest Calculations: Compound Interest 📈

Compound interest is interest calculated on both the initial principal and the accumulated interest from previous periods.

### Compound Interest Formula 📝

Amount (A) = Principal (P) × (1 + Rate (r))^Time (t)

Compound Interest (CI) = A - P = P × [(1 + r)^t - 1]

For interest compounded n times per year:
A = P × (1 + r/n)^(n×t)

### Examples of Compound Interest Calculations 🧮

**Example 1**: Find the compound interest on ₹15,000 at 10% per annum for 2 years, compounded annually.
- A = P(1 + r)^t = 15,000 × (1 + 0.1)^2 = 15,000 × 1.21 = ₹18,150
- CI = ₹18,150 - ₹15,000 = ₹3,150

**Example 2**: Calculate the amount on ₹12,000 at 8% per annum for 1.5 years, compounded half-yearly.
- n = 2 (half-yearly compounding)
- t = 1.5 years
- A = P(1 + r/n)^(n×t) = 12,000 × (1 + 0.08/2)^(2×1.5) = 12,000 × (1.04)^3 = 12,000 × 1.1249 = ₹13,499

**Example 3**: Compare the difference between simple and compound interest on ₹20,000 at 6% per annum for 3 years.
- Simple Interest = P×r×t = 20,000 × 0.06 × 3 = ₹3,600
- Compound Interest = P[(1+r)^t - 1] = 20,000[(1+0.06)^3 - 1] = 20,000[1.191 - 1] = 20,000 × 0.191 = ₹3,820
- Difference = ₹3,820 - ₹3,600 = ₹220

### The Rule of 72 ⚡

The Rule of 72 is a quick way to estimate how many years it will take for an investment to double at a given interest rate:

Time to double ≈ 72 ÷ Interest Rate (%)

**Example**: At 9% interest rate, money will double in approximately 72 ÷ 9 = 8 years.

## Applications of Interest Calculations in Personal Finance 🏦

### 1. Savings and Investments 💼

- **Fixed Deposits (FDs)**: Banks typically offer simple interest on short-term deposits and compound interest on longer-term deposits.
  
  **Example**: Neha invests ₹50,000 in a 5-year FD earning 7% interest compounded quarterly. At maturity, she'll receive:
  A = 50,000 × (1 + 0.07/4)^(4×5) = 50,000 × (1.0175)^20 ≈ ₹70,950

- **Recurring Deposits (RDs)**: These involve regular monthly deposits with compound interest.

### 2. Loans and EMI Calculations 🏠

EMI (Equated Monthly Installment) = P × r × (1+r)^n / [(1+r)^n - 1]

Where:
- P = Principal (loan amount)
- r = Monthly interest rate (annual rate ÷ 12)
- n = Total number of installments (loan tenure in months)

**Example**: For a home loan of ₹20,00,000 at 8% annual interest for 20 years:
- Monthly rate r = 8%/12 = 0.667%
- n = 20×12 = 240 months
- EMI = ₹16,731 (approximately)

### 3. Investment Growth 📊

**Example**: Arjun invests ₹10,000 per year for 10 years at 8% compound interest. Total amount after 10 years:
- Year 1: ₹10,000 + 8% interest = ₹10,800
- Year 2: ₹10,800 + ₹10,000 + 8% interest on ₹20,800 = ₹22,464
- And so on... After 10 years: ₹1,56,455 (approximately)

## Real-Life Applications and Examples 🌍

### 1. Emergency Fund Planning 🚨

Financial experts recommend keeping 3-6 months' worth of expenses in an emergency fund.

**Example**: If monthly expenses are ₹30,000, an ideal emergency fund would be ₹90,000-₹1,80,000.

### 2. Education Planning 🎓

**Example**: Parents want to save ₹10,00,000 for their child's education in 10 years. If they invest in a fund offering 10% annual returns, they need to save approximately ₹6,275 per month.

### 3. Retirement Planning 🌴

**Example**: Meera, age 30, wants to retire at 60 with ₹2 crore. Assuming 8% returns, she needs to save approximately ₹10,400 per month for 30 years.

### 4. Car Loan Comparison 🚗

**Example**: For a ₹6,00,000 car loan:
- Option A: 7% interest for 5 years = EMI of ₹11,867
- Option B: 8% interest for 5 years = EMI of ₹12,166
- Option C: 7% interest for 7 years = EMI of ₹8,996

### 5. Credit Card Interest 💳

Credit cards often charge interest compounded daily on unpaid balances.

**Example**: ₹50,000 unpaid balance at 36% annual interest (3% monthly) would accrue approximately ₹1,500 interest in just one month!

## Summary: Key Concepts in Financial Literacy ✨

1. **Budgeting**:
   - Track income and expenses
   - Categorize spending
   - Allocate funds based on priorities
   - Monitor and adjust regularly

2. **Simple Interest**:
   - Calculated only on original principal
   - SI = P×r×t
   - Used for short-term loans and deposits

3. **Compound Interest**:
   - Calculated on both principal and accumulated interest
   - A = P(1+r)^t
   - Used for long-term investments, savings, and loans

4. **Financial Planning Applications**:
   - Emergency fund calculations
   - Education and retirement planning
   - Loan EMI calculations
   - Investment growth projections

### Additional Practice Questions 📝

1. **Question**: Shruti deposits ₹8,000 in a bank offering 6% simple interest. How much will she have after 2.5 years?
   **Answer**: SI = 8,000×0.06×2.5 = ₹1,200. Total amount = ₹9,200.

2. **Question**: Rohan takes a loan of ₹1,50,000 at 9% compound interest. After 3 years, how much will he owe?
   **Answer**: A = 150,000×(1+0.09)^3 = 150,000×1.295 = ₹1,94,250.

3. **Question**: If Ram spends 65% of his income on expenses and invests the rest, how much does he invest monthly if his income is ₹45,000?
   **Answer**: Investment = 45,000×(1-0.65) = 45,000×0.35 = ₹15,750.

4. **Question**: At what rate of simple interest will ₹20,000 amount to ₹23,200 in 2 years?
   **Answer**: Using SI=P×r×t: 3,200=20,000×r×2, so r=3,200÷40,000=0.08 or 8%.

By mastering these financial literacy concepts, you're taking an important step toward making informed financial decisions that will benefit you throughout your life! 💪
`,
  quiz: {
    questions: [
      ...easyQuestions,
      ...mediumQuestions
    ]
  }
};
