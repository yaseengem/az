import { QuizQuestion, TopicQuiz, TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic3Content: TopicContent = {
    id: 'cl8_ch7_t3',
    topicNumber: 3,
    topicName: 'Simple and compound interest',
    duration: 45,
    description: 'Learn the basics of simple and compound interest, their formulas, and real-life applications.',
    explanation: `
# Simple and Compound Interest 💰

Interest is the extra money paid or earned for borrowing or lending money. In daily life, we encounter interest when we save money in a bank, take a loan, or invest. There are two main types of interest: simple interest and compound interest. Understanding these concepts helps us make better financial decisions.

## Simple Interest (SI) 🧮

Simple interest is calculated only on the original amount (principal) for the entire period. The formula is:

**Simple Interest (SI) = (Principal × Rate × Time) / 100**

- **Principal (P):** The original sum of money borrowed or invested.
- **Rate (R):** The percentage of interest per year.
- **Time (T):** The period for which the money is borrowed or invested (in years).

### Example 1:
If you deposit ₹5,000 in a bank at 6% per annum for 2 years:
SI = (5000 × 6 × 2) / 100 = ₹600

### Example 2:
A loan of ₹2,000 is taken at 10% per annum for 3 years:
SI = (2000 × 10 × 3) / 100 = ₹600

### Key Points:
- Simple interest is always calculated on the principal.
- The total amount to be paid or received = Principal + Simple Interest.

## Compound Interest (CI) 🔄

Compound interest is calculated on the principal and also on the interest earned in previous periods. This means the interest gets added to the principal after each period, and the next interest is calculated on the new total.

**Compound Interest (CI) = Amount - Principal**
Where Amount = Principal × (1 + Rate/100)^Time

- **Principal (P):** The original sum of money.
- **Rate (R):** The annual interest rate.
- **Time (T):** The number of years.

### Example 3:
If you invest ₹1,000 at 10% per annum for 2 years (compounded yearly):
Amount = 1000 × (1 + 10/100)^2 = 1000 × (1.1)^2 = 1000 × 1.21 = ₹1,210
CI = 1210 - 1000 = ₹210

### Example 4:
A sum of ₹2,500 is invested at 8% per annum for 3 years:
Amount = 2500 × (1 + 8/100)^3 = 2500 × (1.08)^3 ≈ 2500 × 1.2597 ≈ ₹3,149.25
CI = 3149.25 - 2500 = ₹649.25

### Key Points:
- Compound interest grows faster than simple interest.
- The frequency of compounding (yearly, half-yearly, quarterly) affects the total interest earned.

## Differences Between Simple and Compound Interest ⚖️
| Feature                | Simple Interest         | Compound Interest         |
|------------------------|------------------------|--------------------------|
| Calculation            | Only on principal      | On principal + interest  |
| Growth                 | Linear                 | Exponential              |
| Formula                | SI = (P×R×T)/100       | CI = P(1+R/100)^T - P    |
| Amount after n years   | P + SI                 | P(1+R/100)^T             |

## Real-Life Applications 🌍
- **Bank Savings:** Banks pay compound interest on savings accounts.
- **Loans:** Most loans (like home loans) use compound interest.
- **Investments:** Investments like fixed deposits, mutual funds, and bonds use compound interest.
- **Everyday Purchases:** Sometimes, buying on EMI involves interest calculations.

## Sample Questions & Practice 📝
1. Find the simple interest on ₹4,000 at 5% per annum for 3 years.
2. If ₹2,000 is invested at 8% per annum for 2 years, what is the compound interest?
3. What will be the total amount after 4 years if ₹1,500 is invested at 6% per annum simple interest?
4. A sum of ₹5,000 is borrowed at 10% per annum compound interest for 2 years. Find the interest earned.

## Tips for Solving Problems 🧠
- Always check if the interest is simple or compound.
- For compound interest, use the formula carefully and check the compounding period.
- Write down all values (P, R, T) before substituting in the formula.
- For time in months, convert to years (e.g., 6 months = 0.5 years).

## Short Summary ✨
- **Simple interest** is calculated only on the principal.
- **Compound interest** is calculated on principal + previous interest.
- Compound interest grows faster and is used in most real-life financial situations.
- Knowing these concepts helps in making smart financial decisions!
`,
    quiz: {
        questions: [
            ...easyQuestions,
            ...mediumQuestions
        ]
    }
};
