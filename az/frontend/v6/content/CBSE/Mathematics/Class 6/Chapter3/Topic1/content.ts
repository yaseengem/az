// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 6\Chapter3\Topic1\content.ts
import { TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic1Content: TopicContent = {
  id: 'cl6_ch3_t1',
  topicNumber: 1,
  topicName: "Factors, Multiples, HCF, LCM",
  duration: 45,
  description: "Understand the concepts of factors and multiples, and learn to find the HCF and LCM of numbers using different methods",
  explanation: `
# Factors, Multiples, HCF and LCM 🧮

Hello, young mathematicians! 👋 Today, we're going to explore some fascinating number relationships that will help you solve many mathematical problems. Let's learn about factors, multiples, HCF, and LCM!

## Factors 🔢

**What are Factors?**
Factors are numbers that divide another number completely (with zero remainder). When you can divide a number by another number without any leftovers, the second number is called a factor of the first.

**How to Find Factors:**
To find all factors of a number, we check which numbers divide it evenly from 1 up to the number itself.

**Examples:**
- **Factors of 12**: 1, 2, 3, 4, 6, 12
  * 12 ÷ 1 = 12 (remainder 0) ✅
  * 12 ÷ 2 = 6 (remainder 0) ✅
  * 12 ÷ 3 = 4 (remainder 0) ✅
  * 12 ÷ 4 = 3 (remainder 0) ✅
  * 12 ÷ 5 = 2.4 (has remainder) ❌
  * 12 ÷ 6 = 2 (remainder 0) ✅
  * 12 ÷ 12 = 1 (remainder 0) ✅

- **Factors of 15**: 1, 3, 5, 15
  * 15 ÷ 1 = 15 (remainder 0) ✅
  * 15 ÷ 2 = 7.5 (has remainder) ❌
  * 15 ÷ 3 = 5 (remainder 0) ✅
  * 15 ÷ 5 = 3 (remainder 0) ✅
  * 15 ÷ 15 = 1 (remainder 0) ✅

**Key Properties of Factors:**
1. Every number has at least two factors: 1 and itself.
2. The number of factors is finite.
3. 1 is a factor of every number.
4. The largest factor of a number is the number itself.
5. Every factor is less than or equal to the number.

## Multiples 📈

**What are Multiples?**
Multiples are the results we get when we multiply a number by whole numbers (0, 1, 2, 3, ...).

**How to Find Multiples:**
To find multiples of a number, we multiply it by 0, 1, 2, 3, and so on.

**Examples:**
- **Multiples of 4**: 0, 4, 8, 12, 16, 20, 24, ... (continuing infinitely)
  * 4 × 0 = 0
  * 4 × 1 = 4
  * 4 × 2 = 8
  * 4 × 3 = 12
  * and so on...

- **Multiples of 5**: 0, 5, 10, 15, 20, 25, ... (continuing infinitely)
  * 5 × 0 = 0
  * 5 × 1 = 5
  * 5 × 2 = 10
  * 5 × 3 = 15
  * and so on...

**Key Properties of Multiples:**
1. The number itself is always one of its multiples.
2. 0 is a multiple of every number (because any number times 0 is 0).
3. The list of multiples is infinite.
4. Every multiple is greater than or equal to 0.

## Relationship Between Factors and Multiples 🔄

Let's understand the relationship with an example:
- If 6 is a factor of 24, then 24 is a multiple of 6.
- If 15 is a multiple of 3, then 3 is a factor of 15.

So, if a number A is a factor of number B, then B is a multiple of A.

## Highest Common Factor (HCF) ⬆️

**What is the HCF?**
The Highest Common Factor (HCF) or Greatest Common Divisor (GCD) is the largest positive integer that divides each of the given numbers without a remainder.

**Methods to Find the HCF:**

1. **Listing All Factors Method:**
   - List all factors of each number.
   - Identify the common factors.
   - Choose the largest common factor as the HCF.

   Example: Find HCF of 18 and 24
   - Factors of 18: 1, 2, 3, 6, 9, 18
   - Factors of 24: 1, 2, 3, 4, 6, 8, 12, 24
   - Common factors: 1, 2, 3, 6
   - HCF = 6 (the largest common factor)

2. **Prime Factorization Method:**
   - Express each number as a product of prime factors.
   - Identify the common prime factors with the smallest power.
   - Multiply these common prime factors to find the HCF.

   Example: Find HCF of 36 and 48
   - 36 = 2² × 3²
   - 48 = 2⁴ × 3
   - Common prime factors: 2² × 3
   - HCF = 2² × 3 = 4 × 3 = 12

3. **Division Method (Euclidean Algorithm):**
   - Divide the larger number by the smaller number.
   - Replace the larger number with the smaller number and the smaller number with the remainder.
   - Repeat until the remainder becomes zero.
   - The last non-zero remainder is the HCF.

   Example: Find HCF of 48 and 18
   - 48 ÷ 18 = 2 remainder 12
   - 18 ÷ 12 = 1 remainder 6
   - 12 ÷ 6 = 2 remainder 0
   - The last non-zero remainder is 6, so HCF = 6

**Applications of HCF:**
1. **Reducing fractions:** To express a fraction in its simplest form, we divide both numerator and denominator by their HCF.
2. **Equal distribution:** If we want to divide items into equal groups with no leftovers.

   Example: If 24 apples 🍎 and 36 oranges 🍊 need to be packed in identical boxes with no fruits left over, the maximum number of fruits in each box would be the HCF of 24 and 36, which is 12.

## Least Common Multiple (LCM) ⬇️

**What is the LCM?**
The Least Common Multiple (LCM) is the smallest positive integer that is divisible by all of the given numbers.

**Methods to Find the LCM:**

1. **Listing Multiples Method:**
   - List the multiples of each number.
   - Identify the common multiples.
   - Choose the smallest common multiple as the LCM.

   Example: Find LCM of 4 and 6
   - Multiples of 4: 4, 8, 12, 16, 20, 24, ...
   - Multiples of 6: 6, 12, 18, 24, ...
   - Common multiples: 12, 24, ...
   - LCM = 12 (the smallest common multiple)

2. **Prime Factorization Method:**
   - Express each number as a product of prime factors.
   - Take each prime factor with the highest power from any of the numbers.
   - Multiply these prime factors to find the LCM.

   Example: Find LCM of 12 and 18
   - 12 = 2² × 3
   - 18 = 2 × 3²
   - Highest powers: 2² × 3²
   - LCM = 2² × 3² = 4 × 9 = 36

3. **Using HCF to Find LCM:**
   - For two numbers a and b, LCM × HCF = a × b
   - So, LCM = (a × b) ÷ HCF

   Example: Find LCM of 15 and 20
   - HCF of 15 and 20 is 5
   - LCM = (15 × 20) ÷ 5 = 300 ÷ 5 = 60

**Applications of LCM:**
1. **Finding a common time period:** When two events occur at regular intervals, the LCM gives the time when they occur together again.
2. **Finding a common denominator:** To add or subtract fractions with different denominators, we convert them to equivalent fractions with the LCM as the denominator.

   Example: If one bell rings every 12 minutes ⏰ and another bell rings every 18 minutes ⏰, they will ring together after LCM(12, 18) = 36 minutes.

## Important Relationships 🧠

1. **Product Relationship:** For any two numbers a and b:
   - a × b = HCF(a,b) × LCM(a,b)

2. **Co-prime Numbers:** Numbers whose HCF is 1 are called co-prime or relatively prime.
   - Example: 8 and 15 are co-prime because HCF(8,15) = 1

3. **HCF and LCM of Co-prime Numbers:**
   - If a and b are co-prime, then LCM(a,b) = a × b

4. **Order Relationship:** For any two numbers a and b:
   - HCF(a,b) ≤ a, b ≤ LCM(a,b)
   - HCF(a,b) = LCM(a,b) if and only if a = b

## Sample Questions 📝

1. **Question:** Find the HCF of 24 and 36.
   **Solution:** 
   - 24 = 2³ × 3
   - 36 = 2² × 3²
   - Common prime factors with lowest powers: 2² × 3
   - HCF = 2² × 3 = 4 × 3 = 12

2. **Question:** Find the LCM of 8, 12, and 20.
   **Solution:**
   - 8 = 2³
   - 12 = 2² × 3
   - 20 = 2² × 5
   - Taking highest powers: 2³ × 3 × 5
   - LCM = 8 × 3 × 5 = 120

3. **Question:** A rope of length 60 cm is to be cut into equal parts. What is the maximum length of each part if the length of each part is a natural number?
   **Answer:** The maximum length will be the HCF of 60 and the number of parts. If we want to cut it into, say, 15 equal parts, the maximum length would be HCF(60, 15) = 15 cm.

4. **Question:** Two bells ring at intervals of 15 and 25 minutes respectively. If they ring together at 9:00 AM, when will they next ring together?
   **Answer:** They will ring together after LCM(15, 25) = 75 minutes = 1 hour 15 minutes. So they will next ring together at 10:15 AM.

## Summary ✨

In this lesson, we've learned about:
- **Factors**: Numbers that divide a given number exactly.
- **Multiples**: Results of multiplying a number by whole numbers.
- **HCF (Highest Common Factor)**: The largest number that divides all given numbers.
- **LCM (Least Common Multiple)**: The smallest number that is divisible by all given numbers.

We've also explored different methods to find HCF and LCM:
- Listing factors/multiples
- Prime factorization
- Euclidean algorithm (for HCF)
- Using the relationship: a × b = HCF(a,b) × LCM(a,b)

These concepts are fundamental in mathematics and have many real-life applications, from dividing objects equally to finding when recurring events coincide. Keep practicing to master these important skills! 🌟
`,
  quiz: {
    questions: [
      ...easyQuestions,
      ...mediumQuestions
    ]
  }
};
