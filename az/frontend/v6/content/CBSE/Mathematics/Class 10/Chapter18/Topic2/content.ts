import { QuizQuestion, TopicQuiz, TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic2Content: TopicContent = {
  id: 'cl10_ch18_t2',
  topicNumber: 2,
  topicName: "Mental math strategies",
  duration: 45,
  description: "Exploring efficient techniques for performing calculations mentally, focusing on patterns, properties, and shortcuts that make mathematical operations faster and easier.",
  explanation: `
# Mental Math Strategies 🧠

Mental math skills are invaluable for everyday calculations, exams, and real-world problem-solving! 🌟 By using smart strategies and mathematical properties, you can solve problems efficiently without needing a calculator. Let's explore the powerful mental math techniques that will sharpen your mathematical abilities! ⚡

## Addition Strategies 🧮

### 1. Working with Compatible Numbers 🔄

Compatible numbers are pairs that are easy to work with mentally. For example, numbers that sum to 10, 100, or 1000.

- **Make Ten Strategy**: Reorganize numbers to create friendlier computations.
  - Example: 8 + 7 = 8 + (2 + 5) = (8 + 2) + 5 = 10 + 5 = 15
  
- **Look for Tens**: Find pairs that make 10 to simplify addition.
  - Example: 38 + 27 + 12 + 23 = (38 + 12) + (27 + 23) = 50 + 50 = 100

### 2. Compensation Method ⚖️

Adjust one number to make it easier to calculate, then compensate by adjusting the answer.

- **Example**: To calculate 98 + 35:
  - Add 2 to 98 to get 100
  - Add 100 + 35 = 135
  - Subtract 2 (since we added 2 to 98): 135 - 2 = 133

### 3. Breaking Apart Numbers 🧩

Split numbers into more manageable parts based on place value.

- **Example**: To calculate 56 + 38:
  - 56 = 50 + 6
  - 38 = 30 + 8
  - (50 + 30) + (6 + 8) = 80 + 14 = 94

## Subtraction Strategies ➖

### 1. Adding Up Method 📈

Instead of subtracting, find what you need to add to get from the smaller number to the larger number.

- **Example**: To calculate 83 - 47:
  - From 47 to 50 is 3
  - From 50 to 80 is 30
  - From 80 to 83 is 3
  - Total difference: 3 + 30 + 3 = 36

### 2. Equal Addition ⚖️

Add the same amount to both numbers to create a friendlier calculation (this keeps the difference the same).

- **Example**: To calculate 613 - 287:
  - Add 13 to both numbers: 626 - 300
  - Compute 626 - 300 = 326

### 3. Compensation Method ↔️

Adjust one number to simplify, then compensate in the final answer.

- **Example**: To calculate 324 - 198:
  - Round 198 to 200 (adding 2)
  - 324 - 200 = 124
  - Since we added 2 to 198, add 2 to the answer: 124 + 2 = 126

## Multiplication Strategies ✖️

### 1. Multiplying by 10, 100, 1000 🔄

Multiply by 10 by simply adding a zero to the end of the number. For 100, add two zeros, and so on.

- **Example**: 45 × 10 = 450, 45 × 100 = 4500

### 2. Multiplying by 5 🖐️

Multiply by 10, then divide by 2.

- **Example**: 68 × 5 = (68 × 10) ÷ 2 = 680 ÷ 2 = 340

### 3. Multiplying by 9 ✋✓

Multiply by 10, then subtract the original number.

- **Example**: 47 × 9 = (47 × 10) - 47 = 470 - 47 = 423

### 4. Multiplying by 11 (Two-Digit Numbers) 1️⃣1️⃣

For two-digit numbers, add the two digits and place the result between the digits.

- **Example**: 52 × 11
  - Step 1: Add 5 + 2 = 7
  - Step 2: Place 7 between 5 and 2
  - Result: 572
  - With carrying: 85 × 11 = 8(8+5)5 = 8(13)5 = 935 (carrying the 1 from 13)

### 5. Doubling and Halving Strategy 2️⃣

Double one factor and halve the other to create an easier multiplication.

- **Example**: 25 × 16 = 50 × 8 = 100 × 4 = 200 × 2 = 400

### 6. Using Distributive Property 📏

Break down one or both factors into sums or differences.

- **Example**: 35 × 12 = 35 × (10 + 2) = (35 × 10) + (35 × 2) = 350 + 70 = 420

### 7. Difference of Squares Identity 🔍

For products like (a+b)(a-b), use the formula a² - b².

- **Example**: 48 × 52 = (50 - 2) × (50 + 2) = 50² - 2² = 2500 - 4 = 2496

### 8. Squaring Numbers 📊

For squaring numbers close to multiples of 10 or 100:

- **Method 1**: (a+b)² = a² + 2ab + b²
  - Example: 23² = (20 + 3)² = 20² + 2(20)(3) + 3² = 400 + 120 + 9 = 529

- **Method 2**: (a-b)(a+b) + b² = a²
  - Example: 26² = (26-6)(26+6) + 6² = 20×32 + 36 = 640 + 36 = 676

### 9. Multiplying by 25, 125, etc. 🧪

Use the fact that 25 = 100 ÷ 4, 125 = 1000 ÷ 8, etc.

- **Example**: 36 × 25 = 36 × 100 ÷ 4 = 3600 ÷ 4 = 900

## Division Strategies ➗

### 1. Dividing by 5 5️⃣

Multiply by 2, then divide by 10.

- **Example**: 335 ÷ 5 = (335 × 2) ÷ 10 = 670 ÷ 10 = 67

### 2. Dividing by 25 📝

Multiply by 4, then divide by 100.

- **Example**: 175 ÷ 25 = (175 × 4) ÷ 100 = 700 ÷ 100 = 7

### 3. Factoring the Divisor 🔢

Break down the divisor into factors to perform simpler divisions.

- **Example**: 462 ÷ 14 = 462 ÷ 2 ÷ 7 = 231 ÷ 7 = 33

### 4. Dividing by 9, 99, etc. 9️⃣

Check if the sum of digits is divisible by 9 (or if alternating sum and difference is divisible by 11 for division by 99).

- **Example**: To check if 585 is divisible by 9: 5+8+5 = 18, which is divisible by 9. So 585 ÷ 9 = 65.

## Percentage Calculations 💯

### 1. Finding Key Percentages 🔑

Calculate key percentages first, then build from there:
- 10% = divide by 10
- 1% = divide by 100
- 50% = divide by 2
- 25% = divide by 4
- 20% = divide by 5

### 2. Converting Percentages to Fractions ⚡

Common percentages as fractions:
- 25% = 1/4
- 12.5% = 1/8
- 16⅔% = 1/6
- 33⅓% = 1/3
- 37.5% = 3/8
- 62.5% = 5/8
- 66⅔% = 2/3
- 87.5% = 7/8

- **Example**: 16⅔% of 150 = 1/6 of 150 = 150 ÷ 6 = 25

### 3. Building from 10% 🔟

Calculate 10% first, then scale up or down.

- **Example**: To find 35% of 80:
  - 10% of 80 = 8
  - 30% = 3 × 8 = 24
  - 5% = half of 10% = 4
  - 35% = 24 + 4 = 28

## Decimal Calculations 🔢

### 1. Converting to Fractions 🔄

Convert recurring decimals to fractions for easier calculations.

- **Example**: 0.25 × 84 = 1/4 × 84 = 84 ÷ 4 = 21

### 2. Adjusting and Compensating ⚖️

Adjust decimals to make calculations easier, then compensate.

- **Example**: To calculate 4.75 × 4:
  - 4.75 = 5 - 0.25
  - (5 - 0.25) × 4 = 5 × 4 - 0.25 × 4 = 20 - 1 = 19

## Estimating Answers ⚓

### 1. Rounding to Nearest 10, 100, 1000 🔄

Round to convenient values for quick approximations.

- **Example**: 489 × 51 ≈ 500 × 50 = 25,000

### 2. Compatible Numbers Strategy 💫

Adjust numbers to easier values that maintain approximately the same result.

- **Example**: 312 ÷ 48 ≈ 300 ÷ 50 = 6

## Sample Questions and Examples 🧩

### Problem 1: Calculate 28 × 15 mentally.
**Solution**: 
- Method 1: 28 × 15 = 28 × (10 + 5) = 28 × 10 + 28 × 5 = 280 + 140 = 420
- Method 2: 28 × 15 = 28 × (3 × 5) = (28 × 3) × 5 = 84 × 5 = 420

### Problem 2: Find 87.5% of 64 mentally.
**Solution**: 
- 87.5% = 7/8
- 64 ÷ 8 = 8
- 7 × 8 = 56
- Therefore, 87.5% of 64 = 56

### Problem 3: Calculate 997 + 648 mentally.
**Solution**:
- Round 997 to 1000: 1000 + 648 = 1648
- Compensate by subtracting 3: 1648 - 3 = 1645

### Problem 4: Find 5²⁵ mentally.
**Solution**:
- 5² = 25
- 5³ = 125
- 5⁴ = 625
- 5⁵ = 3125

### Problem 5: Determine if 3468 is divisible by 12.
**Solution**:
- For divisibility by 12, a number must be divisible by both 3 and 4
- For 3: sum of digits 3+4+6+8 = 21, which is divisible by 3
- For 4: last two digits 68 is divisible by 4
- Therefore, 3468 is divisible by 12

## Summary of Key Mental Math Strategies ✨

1. **For Addition**:
   - Make tens/hundreds
   - Use compatible numbers
   - Break apart numbers
   - Use compensation

2. **For Subtraction**:
   - Add up from smaller number
   - Equal addition
   - Compensation

3. **For Multiplication**:
   - Use patterns for 5, 9, 11, 25
   - Doubling and halving
   - Distributive property
   - Difference of squares

4. **For Division**:
   - Use equivalent fractions
   - Factor divisors
   - Use divisibility rules

5. **For Percentages**:
   - Convert to fractions
   - Build from 10%
   - Use benchmark percentages

By practicing these mental math strategies regularly, you'll develop mathematical fluency, improve your problem-solving speed, and build confidence in your abilities. Remember that the best strategy often depends on the specific numbers involved and your personal comfort with different techniques. With practice, you'll intuitively choose the most efficient approach for each calculation! 🏆
`,
  quiz: {
    questions: [
      ...easyQuestions,
      ...mediumQuestions
    ]
  }
};
