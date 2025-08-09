// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 7\Chapter8\Topic3\content.ts
import { TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic3Content: TopicContent = {
  id: 'cl7_ch8_t3',
  topicNumber: 3,
  topicName: "Financial Literacy Applications",
  duration: 45,
  description: "Learning how to apply mathematical concepts in financial contexts like budgeting, banking, and investment scenarios.",
  explanation: `
# Financial Literacy Applications 💰

Financial literacy is an essential life skill that helps us make informed decisions about money management. In this topic, we'll explore how percentages, ratios, and simple interest can be applied to real-life financial situations. Understanding these applications will help you develop strong financial decision-making skills for your future! 🎯

## Budgeting and Money Management 📊

Budgeting is a systematic approach to managing your income and expenses. It involves tracking how much money comes in and goes out over a specific period.

### Creating a Budget
A good budget typically allocates your income into different categories:
- **Needs** (50%): Essential expenses like food, housing, utilities
- **Wants** (30%): Non-essential expenses like entertainment, eating out
- **Savings and Debt Repayment** (20%): Money set aside for future needs or to pay off loans

**Example 1:** 
If Ravi earns ₹20,000 per month, his budget might look like:
- Needs: 50% of ₹20,000 = ₹10,000
- Wants: 30% of ₹20,000 = ₹6,000
- Savings: 20% of ₹20,000 = ₹4,000

### Calculating Percentage of Income
To find what percentage of income you're spending on a particular expense:

Percentage = (Expense ÷ Total Income) × 100%

**Example 2:**
If Priya pays ₹7,500 rent from her monthly salary of ₹25,000, what percentage of her income goes to rent?
Percentage = (7,500 ÷ 25,000) × 100% = 30%

## Banking Applications 🏦

### Simple Interest
One of the most common financial calculations is simple interest, which is the money earned or paid on a principal amount over time.

The formula for Simple Interest (SI) is:
SI = (P × R × T) ÷ 100

Where:
- P = Principal (the initial amount of money)
- R = Rate of interest per annum (yearly)
- T = Time period (in years)

**Example 3:**
If you deposit ₹10,000 in a bank at 6% simple interest for 3 years, your interest earned would be:
SI = (10,000 × 6 × 3) ÷ 100 = ₹1,800

The final amount in your account would be:
A = P + SI = ₹10,000 + ₹1,800 = ₹11,800

### Comparing Investment Options
Different banks or financial institutions may offer different interest rates. To make an informed choice, calculate and compare the returns.

**Example 4:**
Bank A offers 5.5% simple interest and Bank B offers 5.75% simple interest. If you want to invest ₹50,000 for 2 years, which bank gives better returns?

Bank A: SI = (50,000 × 5.5 × 2) ÷ 100 = ₹5,500
Bank B: SI = (50,000 × 5.75 × 2) ÷ 100 = ₹5,750

Bank B offers ₹250 more in interest, so it's the better option for investment.

## Consumer Mathematics 🛒

### Discount Calculations
Retailers often offer discounts to attract customers. The discount is calculated as a percentage of the marked price.

Discount = (Discount Percentage × Marked Price) ÷ 100
Sale Price = Marked Price - Discount

**Example 5:**
A shirt marked at ₹1,200 is on sale with a 25% discount. What is the sale price?
Discount = (25 × 1,200) ÷ 100 = ₹300
Sale Price = ₹1,200 - ₹300 = ₹900

### Computing Final Price After Tax
After discounts are applied, taxes (like GST) are often added to get the final price.

Final Price = Discounted Price + Tax

**Example 6:**
A smartphone costs ₹12,000 after a 20% discount. If GST of 18% is applied to the discounted price, what is the final price?

GST amount = (18 × 12,000) ÷ 100 = ₹2,160
Final Price = ₹12,000 + ₹2,160 = ₹14,160

## Profit and Loss Calculations 📈

### Profit and Loss Percentage
In business transactions, it's important to know whether you're making a profit or experiencing a loss, and by what percentage.

Profit = Selling Price (SP) - Cost Price (CP)
Profit Percentage = (Profit ÷ CP) × 100%

Loss = Cost Price (CP) - Selling Price (SP)
Loss Percentage = (Loss ÷ CP) × 100%

**Example 7:**
Rahul buys a bicycle for ₹6,000 and sells it for ₹6,900. What is his profit percentage?

Profit = ₹6,900 - ₹6,000 = ₹900
Profit Percentage = (900 ÷ 6,000) × 100% = 15%

**Example 8:**
Meena buys a watch for ₹2,400 and sells it for ₹2,160. What is her loss percentage?

Loss = ₹2,400 - ₹2,160 = ₹240
Loss Percentage = (240 ÷ 2,400) × 100% = 10%

## Loans and EMI Calculations 💳

### Loan Amount Calculation
When taking a loan, you eventually pay back the principal plus interest.

Total Repayment = Principal + Simple Interest

**Example 9:**
Amit borrows ₹50,000 at 8% simple interest for 3 years. How much will he repay in total?

Interest = (50,000 × 8 × 3) ÷ 100 = ₹12,000
Total Repayment = ₹50,000 + ₹12,000 = ₹62,000

### Equal Installments
Sometimes loans are repaid in equal installments (EMIs). For simple interest loans, this can be calculated as:

EMI = Total Repayment ÷ Number of Installments

**Example 10:**
If Sanjay repays a loan of ₹30,000 plus interest of ₹4,500 in 15 equal monthly installments, what is the EMI amount?

Total Repayment = ₹30,000 + ₹4,500 = ₹34,500
EMI = ₹34,500 ÷ 15 = ₹2,300 per month

## Effective Rate Calculations 🔄

### Single Discount vs. Successive Discounts
Sometimes stores offer successive discounts (e.g., "20% off, then an additional 10% off"). This is not the same as a single discount of 30%.

For successive discounts: 
Final Price = Original Price × (1 - first discount/100) × (1 - second discount/100)

**Example 11:**
A laptop priced at ₹40,000 is offered with two successive discounts of 15% and 10%. What is the final price?

After first discount: ₹40,000 × (1 - 15/100) = ₹40,000 × 0.85 = ₹34,000
After second discount: ₹34,000 × (1 - 10/100) = ₹34,000 × 0.9 = ₹30,600

The effective discount is ₹9,400 or 23.5% (not 25%).

### Markup and Selling Price Calculation
Businesses often mark up their products above the cost price to make a profit.

Selling Price = Cost Price × (1 + Markup Percentage/100)

**Example 12:**
A shopkeeper buys a table for ₹8,000 and marks it up by 35%. What is the selling price?

Selling Price = ₹8,000 × (1 + 35/100) = ₹8,000 × 1.35 = ₹10,800

## Personal Finance Applications 💼

### Saving for a Goal
To save for a specific financial goal, you can calculate how much to save regularly.

Monthly Saving = Goal Amount ÷ Number of Months

**Example 13:**
Neha wants to save ₹36,000 for a trip in 9 months. How much should she save monthly?

Monthly Saving = ₹36,000 ÷ 9 = ₹4,000 per month

### Emergency Fund Calculation
Financial experts recommend having an emergency fund equal to 3-6 months of expenses.

**Example 14:**
If Rohit's monthly expenses are ₹25,000, how much should he have in his emergency fund for 4 months?

Emergency Fund = ₹25,000 × 4 = ₹100,000

## Sample Questions 📝

1. **Question:** Sita invested ₹15,000 in a fixed deposit at 6.5% simple interest per annum for 3 years. How much interest will she earn?
   **Solution:** 
   SI = (P × R × T) ÷ 100
   SI = (15,000 × 6.5 × 3) ÷ 100
   SI = ₹2,925

2. **Question:** A smartphone's price is reduced from ₹18,000 to ₹15,300. What is the discount percentage?
   **Solution:**
   Discount = 18,000 - 15,300 = ₹2,700
   Discount Percentage = (2,700 ÷ 18,000) × 100% = 15%

3. **Question:** Arjun bought goods for ₹2,400 and sold them for ₹3,000. Find his profit percentage.
   **Solution:**
   Profit = 3,000 - 2,400 = ₹600
   Profit Percentage = (600 ÷ 2,400) × 100% = 25%

## Summary 📌

Financial literacy applications involve using mathematical concepts to understand and make decisions about money matters. In this topic, we've learned how to:

1. Calculate and manage budgets based on percentages of income
2. Compute simple interest for savings and loans
3. Calculate discounts, taxes, and final prices
4. Determine profit, loss, and their respective percentages
5. Plan for financial goals using mathematical calculations

These skills are invaluable for personal financial management and developing good money habits. Financial literacy empowers you to make informed decisions about saving, spending, investing, and borrowing, which will benefit you throughout your life. 🌟

Remember, the key to financial success lies in understanding these fundamental concepts and applying them correctly in real-life situations. Practice these calculations regularly to build your confidence and proficiency in financial mathematics! 💪
`,
  quiz: {
    questions: [...easyQuestions, ...mediumQuestions]
  }
};
