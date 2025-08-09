import { TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic1Content: TopicContent = {
    id: 'cl8_ch17_t1',
    topicNumber: 1,
    topicName: "Financial calculations: budgeting, interest",
    duration: 45,
    description: "Learn essential financial calculations including budgeting principles, interest calculations, and practical money management skills.",
    explanation: `
# Financial Calculations: Budgeting and Interest 💰

Let's explore the essential concepts of financial calculations that will help you manage money wisely and make informed financial decisions! 📊

## Understanding Budgeting 📝

### 1. What is a Budget? 🎯
A budget is a financial plan that helps you:
- Track income and expenses
- Set financial goals
- Make informed spending decisions
- Build savings

### 2. The 50-30-20 Rule 📋
A popular budgeting guideline:
- 50% for needs (essential expenses)
- 30% for wants (non-essential expenses)
- 20% for savings and debt repayment

Example:
For a monthly income of ₹50,000:
- Needs: ₹25,000 (rent, food, utilities)
- Wants: ₹15,000 (entertainment, shopping)
- Savings: ₹10,000

### 3. Essential Budget Categories 🏠
1. Housing (rent/mortgage)
2. Utilities (electricity, water)
3. Food and groceries
4. Transportation
5. Healthcare
6. Education
7. Savings
8. Emergency fund

### 4. Calculating Percentages in Budget 🧮

To calculate percentage:
(Amount ÷ Total Budget) × 100 = Percentage

Example:
If rent is ₹12,000 in a ₹40,000 budget:
(12000 ÷ 40000) × 100 = 30%

## Understanding Interest 💹

### 1. Simple Interest Formula 📈
Simple Interest (SI) = (Principal × Rate × Time)/100

Where:
- Principal (P) = Initial amount
- Rate (R) = Interest rate per annum
- Time (T) = Time in years

Example:
Calculate SI on ₹10,000 at 8% for 2 years:
SI = (10000 × 8 × 2)/100 = ₹1,600

### 2. Finding Principal 🏦
Principal = (Interest × 100)/(Rate × Time)

Example:
If interest earned is ₹900 at 6% for 3 years:
P = (900 × 100)/(6 × 3) = ₹5,000

### 3. Finding Rate 📊
Rate = (Interest × 100)/(Principal × Time)

Example:
If ₹8,000 earns ₹1,600 interest in 4 years:
R = (1600 × 100)/(8000 × 4) = 5%

### 4. Finding Time ⏰
Time = (Interest × 100)/(Principal × Rate)

Example:
If ₹6,000 earns ₹900 at 5%:
T = (900 × 100)/(6000 × 5) = 3 years

## Practical Applications 🌟

### 1. Monthly Savings Calculation 💵
To calculate monthly savings needed:
Target Amount ÷ Number of Months = Monthly Saving

Example:
To save ₹24,000 in a year:
24000 ÷ 12 = ₹2,000 per month

### 2. Emergency Fund Planning 🆘
Recommended: 3-6 months of expenses

Example:
Monthly expenses = ₹30,000
Emergency fund needed = ₹30,000 × 6 = ₹1,80,000

### 3. Loan EMI Impact 🏛️
Consider:
- Monthly income
- Existing expenses
- Savings goals
- EMI amount

Example:
Income: ₹50,000
Essential expenses: ₹25,000
Savings goal: ₹10,000
Maximum EMI possible = ₹15,000

## Smart Financial Practices 📱

### 1. Tracking Expenses 📝
- Keep receipts
- Use expense tracking apps
- Review spending weekly
- Categorize expenses

### 2. Setting Financial Goals 🎯
- Short-term (1 year)
- Medium-term (1-5 years)
- Long-term (5+ years)

Example:
Short-term: Emergency fund
Medium-term: Car purchase
Long-term: Retirement savings

### 3. Saving Strategies 💎
1. Pay yourself first
2. Automate savings
3. Cut unnecessary expenses
4. Look for additional income
5. Review and adjust regularly

## Common Financial Mistakes to Avoid ⚠️

1. Not having a budget
2. Overspending on wants
3. No emergency fund
4. Ignoring savings
5. Taking too much debt

## Tips for Success 🌟

1. **Start Early**
   - Begin budgeting now
   - Start saving small amounts
   - Build good habits

2. **Be Realistic**
   - Set achievable goals
   - Allow for flexibility
   - Review and adjust

3. **Stay Informed**
   - Learn about finance
   - Compare interest rates
   - Understand terms and conditions

4. **Use Technology**
   - Budgeting apps
   - Automatic payments
   - Expense trackers

## Sample Problems and Solutions 📝

### Problem 1:
Calculate the simple interest on ₹15,000 at 6% for 2.5 years.

Solution:
SI = (15000 × 6 × 2.5)/100 = ₹2,250

### Problem 2:
What percentage of a ₹35,000 budget is ₹7,000?

Solution:
Percentage = (7000/35000) × 100 = 20%

### Problem 3:
How much should you save monthly to accumulate ₹60,000 in 2 years?

Solution:
Monthly saving = 60000/(2 × 12) = ₹2,500

## Summary ✨

Financial calculations involve:
- Creating and following budgets
- Understanding interest calculations
- Setting and achieving financial goals
- Making informed money decisions

Remember:
- Track your expenses
- Save regularly
- Understand interest
- Plan for emergencies
- Review and adjust your budget

Practice these concepts regularly to build strong financial management skills! 🎯
`,
    quiz: {
        questions: [
            ...easyQuestions,
            ...mediumQuestions
        ]
    }
}; 