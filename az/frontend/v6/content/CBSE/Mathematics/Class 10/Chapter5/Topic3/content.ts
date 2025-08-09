import { generateId } from '../../../../../../app/utils/idGenerator';
import { QuizQuestion, TopicQuiz, TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic3Content: TopicContent = {
  id: 'cl10_ch5_t3',
  topicNumber: 3,
  topicName: "Applications in daily life",
  duration: 45,
  description: "Practical applications of arithmetic progressions in solving real-life problems related to finance, growth, construction, and other everyday scenarios",
  explanation: `
# Applications of Arithmetic Progressions in Daily Life 🌟

Arithmetic Progressions (APs) are not just theoretical mathematical concepts – they're practical tools that help us model and solve many real-life problems! In this topic, we'll explore how APs can be applied to various situations we encounter in our daily lives. Let's discover the power of this mathematical pattern in action! 💪

## Why APs Are Useful in Real Life 🔍

Arithmetic progressions appear naturally in many scenarios where:
- Values increase or decrease by a fixed amount
- Regular intervals occur in time, distance, or quantity
- Resource distribution follows a uniform pattern
- Growth or reduction happens at a constant rate

Let's explore some important applications in different areas:

## Financial Applications 💰

### 1. Simple Savings Plans 📊

**Example**: Suppose you save ₹100 in the first month, ₹150 in the second month, ₹200 in the third month, and so on.
- This forms an AP with first term a = 100 and common difference d = 50
- After 12 months, your savings will be:
  * Sum = n/2[2a + (n-1)d]
  * S₁₂ = 12/2[200 + 11(50)]
  * S₁₂ = 6[200 + 550]
  * S₁₂ = 6(750) = ₹4,500

### 2. Loan Repayments 🏦

**Example**: A ₹50,000 loan is repaid in instalments, with the first payment being ₹6,000 and each successive payment decreasing by ₹500.
- This forms an AP with first term a = 6,000 and common difference d = -500
- If n is the number of instalments required to repay the loan:
  * Sum = n/2[2a + (n-1)d] = 50,000
  * n/2[12,000 + (n-1)(-500)] = 50,000
  * n[12,000 - 500(n-1)] = 100,000
  * Solving gives n = 10 instalments

### 3. Fixed Deposits with Regular Additions 💳

**Example**: If you deposit ₹5,000 initially and add ₹1,000 more each month, your deposits form an AP. After 24 months, your total deposits would be:
- S₂₄ = 24/2[10,000 + 23,000] = 12 × 33,000 = ₹396,000

**Sample Question** ❓: A company offers a salary of ₹25,000 for the first year with an annual increment of ₹3,000. What will be the total salary earned over 10 years?
- AP with a = 25,000, d = 3,000, n = 10
- S₁₀ = 10/2[50,000 + 52,000] = 5 × 102,000 = ₹510,000

## Construction and Architecture 🏗️

### 1. Stadium Seating Arrangements 🏟️

**Example**: In a stadium, the first row has 20 seats, the second has 24 seats, and so on, with each row having 4 more seats than the previous row.
- For 30 rows, total seats = S₃₀ = 30/2[40 + 116] = 15 × 156 = 2,340 seats

### 2. Step Construction 🪜

**Example**: A staircase is built with the first step 25 cm in width, and each subsequent step is 0.5 cm wider than the previous one. The total width for 15 steps would be:
- S₁₅ = 15/2[50 + 57] = 15/2 × 107 = 802.5 cm

**Sample Question** ❓: A pyramid is constructed with 15 blocks in the bottom row, 12 blocks in the second row from the bottom, and so on. How many blocks are needed for the entire pyramid?
- AP with a = 15, d = -3, until we reach the top (which has 3 blocks)
- Number of rows = (15 - 3)/3 + 1 = 5
- Total blocks = S₅ = 5/2[30 + 6] = 5/2 × 36 = 90 blocks

## Natural Resource Planning 🌱

### 1. Agricultural Field Layouts 🌾

**Example**: A farmer plants trees in rows, with 5 trees in the first row, 8 trees in the second row, and so on, adding 3 more trees in each successive row. For 12 rows:
- Total trees = S₁₂ = 12/2[10 + 38] = 6 × 48 = 288 trees

### 2. Water Conservation Systems 💧

**Example**: A water harvesting system collects 100 liters on the first day of rain, and each subsequent day collects 15 liters more than the previous day. The total water collected over 8 days would be:
- S₈ = 8/2[200 + 105] = 4 × 305 = 1,220 liters

**Sample Question** ❓: A drip irrigation system releases 2 liters in the first hour and increases the output by 0.5 liters each hour. How much water will be released in 10 hours?
- S₁₀ = 10/2[4 + 6.5] = 5 × 10.5 = 52.5 liters

## Time Management and Scheduling 🕒

### 1. Task Allocation 📝

**Example**: A project manager allocates 2 hours for the first task, 2.5 hours for the second task, 3 hours for the third task, and so on. The total time allocated for 10 tasks would be:
- S₁₀ = 10/2[4 + 6.5] = 5 × 10.5 = 52.5 hours

### 2. Productivity Measurement 📈

**Example**: A factory produces 500 units on day 1, with daily production increasing by 50 units each day. Production over 30 days would be:
- S₃₀ = 30/2[1000 + 1950] = 15 × 2950 = 44,250 units

## Business and Marketing Applications 📊

### 1. Sales Growth Analysis 🛒

**Example**: A store's monthly sales revenue starts at ₹50,000 and increases by ₹5,000 each month. The total revenue over a year would be:
- S₁₂ = 12/2[100,000 + 105,000] = 6 × 205,000 = ₹1,230,000

### 2. Progressive Pricing Models 💵

**Example**: A mobile data plan costs ₹300 for the first GB and ₹50 less for each additional GB. The cost for 5 GB would be:
- Sum = 300 + 250 + 200 + 150 + 100 = ₹1,000
- Using AP formula: S₅ = 5/2[600 + 100] = 2.5 × 700 = ₹1,750 (total for all units)

**Sample Question** ❓: A subscription service offers a discount of ₹20 on the base price of ₹200 for each month of commitment. What would be the average monthly cost for a 1-year subscription?
- AP with a = 200, d = -20, n = 12
- Average = S₁₂/12 = (12/2)[400 - 20] = 6 × 380 / 12 = ₹190

## Educational Applications 📚

### 1. Learning Progress Measurement 🎓

**Example**: A student learns 5 words on the first day, 8 words on the second day, and increases by 3 words each day. After 30 days, the total words learned would be:
- S₃₀ = 30/2[10 + 92] = 15 × 102 = 1,530 words

### 2. Grading Systems 📝

**Example**: A teacher awards 10 points for the first correct answer, 8 points for the second, 6 points for the third, and so on. The total points for 8 correct answers would be:
- AP with a = 10, d = -2
- S₈ = 8/2[20 - 2] = 4 × 18 = 72 points

## Population and Growth Studies 👨‍👩‍👧‍👦

### 1. Controlled Population Growth Models 📊

**Example**: A town has 10,000 residents initially and grows by 500 people each year. The population after 25 years would be:
- S₂₅ = 10,000 + 25/2[1000] = 10,000 + 12.5 × 1000 = 22,500 residents

### 2. Resource Consumption Patterns 🍽️

**Example**: A family consumes 20 kg of rice in the first month, with consumption increasing by 2 kg each month. The total consumption over a year would be:
- S₁₂ = 12/2[40 + 62] = 6 × 102 = 612 kg

## Transportation and Logistics 🚚

### 1. Delivery Route Planning 🗺️

**Example**: A delivery service charges ₹100 for the first kilometer and ₹15 for each additional kilometer. The cost of a 10 km delivery would be:
- S₁₀ = 100 + 9 × 15 = 100 + 135 = ₹235

### 2. Fuel Consumption Analysis ⛽

**Example**: A truck consumes 10 liters of fuel on day 1 of a journey, 9.5 liters on day 2, 9 liters on day 3, and so on. The total fuel consumption over 8 days would be:
- AP with a = 10, d = -0.5
- S₈ = 8/2[20 - 3.5] = 4 × 16.5 = 66 liters

## Manufacturing and Production 🏭

### 1. Production Line Efficiency 🔧

**Example**: A factory's production line makes 100 units in the first hour, 110 in the second hour, and so on with an increase of 10 units each hour. The total production in an 8-hour shift would be:
- S₈ = 8/2[200 + 70] = 4 × 270 = 1,080 units

### 2. Quality Control Sampling 🔍

**Example**: A quality control process tests 5 items from the first batch, 8 from the second batch, 11 from the third batch, and so on. The total number of items tested across 15 batches would be:
- AP with a = 5, d = 3
- S₁₅ = 15/2[10 + 47] = 7.5 × 57 = 427.5 ≈ 428 items

## Steps for Solving AP Problems in Real Life ✅

1. **Identify if the problem involves an AP** by checking for a constant difference between consecutive terms
2. **Determine the key values**:
   * First term (a)
   * Common difference (d)
   * Number of terms (n)
3. **Choose the appropriate formula**:
   * For a specific term: aₙ = a + (n-1)d
   * For the sum of terms: Sₙ = n/2[2a + (n-1)d] or Sₙ = n/2(first term + last term)
4. **Substitute the values** and solve for the unknown
5. **Verify your answer** makes sense in the context of the problem

## Tips for AP Application Problems 💡

- **Draw a diagram** or make a table to visualize the progression
- **List the first few terms** to identify the pattern and confirm the common difference
- **Check if the problem involves a decreasing sequence** (negative common difference)
- **Consider constraints** like minimum/maximum values or budget limitations
- **Always verify your answer** in the context of the original problem

## Summary ✨

Arithmetic progressions are powerful mathematical tools with numerous real-world applications:

1. **Financial planning** - savings, loans, investments, salary structures
2. **Construction** - seating arrangements, step designs, material requirements
3. **Resource management** - agricultural planning, water distribution
4. **Scheduling** - task allocation, project management
5. **Business** - sales projections, pricing models
6. **Education** - learning progress, grading systems
7. **Population studies** - growth patterns, resource consumption
8. **Transportation** - delivery charges, fuel consumption
9. **Manufacturing** - production efficiency, quality control

By recognizing arithmetic patterns in daily situations and applying the appropriate formulas, we can make informed decisions, plan efficiently, and solve complex problems with ease.

### Additional Practice Problems:

1. A company starts with 25 employees and adds 4 new employees each month. How many employees will the company have after 2 years?

2. A construction project requires 85 bags of cement in the first week, with weekly requirements decreasing by 5 bags each week. How many total bags will be needed over 12 weeks?

3. A savings plan requires depositing ₹500 in the first month, with monthly deposits increasing by ₹50 each month. How much will be saved in total after 3 years?
`,
  quiz: {
    questions: [
      ...easyQuestions,
      ...mediumQuestions
    ]
  }
};
