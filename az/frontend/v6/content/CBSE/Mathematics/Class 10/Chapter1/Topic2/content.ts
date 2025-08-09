import { QuizQuestion, TopicQuiz, TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic2Content: TopicContent = {
  id: 'cl10_ch1_t2',
  topicNumber: 2,
  topicName: "Fundamental theorem of arithmetic",
  duration: 45,
  description: "Understanding the unique prime factorization of natural numbers and its applications in finding HCF and LCM",
  explanation: `
# Fundamental Theorem of Arithmetic 🧮

## Introduction 📚

The Fundamental Theorem of Arithmetic is one of the cornerstone principles in number theory. It states that **every natural number greater than 1 can be expressed as a unique product of prime numbers** (up to the order of the factors). This powerful theorem not only helps us understand the structure of numbers but also provides practical tools for solving various mathematical problems. Let's dive deep into this fascinating concept! 🔍

## Prime Numbers: The Building Blocks 🧱

Before we explore the theorem, let's recall what prime numbers are:

**Prime numbers** are natural numbers greater than 1 that have exactly two factors: 1 and the number itself. Examples include:
- 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31...

**Composite numbers** are natural numbers greater than 1 that have more than two factors. Examples include:
- 4 (factors: 1, 2, 4)
- 6 (factors: 1, 2, 3, 6)
- 15 (factors: 1, 3, 5, 15)

## Statement of the Fundamental Theorem of Arithmetic 📜

The theorem can be stated formally as:

**Every natural number greater than 1 can be represented uniquely as a product of prime numbers, up to the order of the factors.**

This means:
1. Any natural number greater than 1 can be broken down into a product of prime numbers
2. This prime factorization is unique (except for the order in which the primes are written)

## Prime Factorization Process 🔢

To find the prime factorization of a number, we can use the following methods:

### Method 1: Division by Prime Numbers
1. Start dividing the number by the smallest prime number (2)
2. If divisible, divide and continue with the quotient
3. If not, try the next prime number
4. Continue until the quotient becomes 1

### Method 2: Factor Tree
1. Find any two factors of the number
2. Continue factoring each composite factor
3. Stop when all branches end with prime numbers

### Example 1: Prime Factorization of 60 🌟

Using division method:
- 60 ÷ 2 = 30 (divisible by 2)
- 30 ÷ 2 = 15 (divisible by 2)
- 15 ÷ 3 = 5 (divisible by 3)
- 5 ÷ 5 = 1 (divisible by 5)

So, 60 = 2 × 2 × 3 × 5 = 2² × 3 × 5

Using factor tree:
\`\`\`
       60
     /    \
    6      10
   / \    / \
  2   3  2   5
\`\`\`

Either way, we get 60 = 2² × 3 × 5

### Example 2: Prime Factorization of 196 🌟

Using division method:
- 196 ÷ 2 = 98 (divisible by 2)
- 98 ÷ 2 = 49 (divisible by 2)
- 49 ÷ 7 = 7 (divisible by 7)
- 7 ÷ 7 = 1 (divisible by 7)

So, 196 = 2 × 2 × 7 × 7 = 2² × 7²

## Exponent Notation in Prime Factorization ⭐

We can write the prime factorization more compactly using exponents:

For example, 72 = 2³ × 3²
- 2³ means 2 × 2 × 2 = 8
- 3² means 3 × 3 = 9
- So 72 = 8 × 9 = 72

## Applications of the Fundamental Theorem of Arithmetic 🛠️

### 1. Finding HCF (Highest Common Factor) or GCD (Greatest Common Divisor)

To find the HCF of two or more numbers:
1. Find the prime factorization of each number
2. Identify the common prime factors
3. Take each common prime factor with the smallest exponent
4. Multiply these factors to get the HCF

**Example:** Find the HCF of 60 and 48

Prime factorization:
- 60 = 2² × 3 × 5
- 48 = 2⁴ × 3

Common prime factors:
- 2 (with min power = 2)
- 3 (with min power = 1)

Therefore, HCF(60, 48) = 2² × 3 = 12

### 2. Finding LCM (Least Common Multiple)

To find the LCM of two or more numbers:
1. Find the prime factorization of each number
2. Take each prime factor that appears in any of the numbers
3. For each prime factor, use the highest exponent it has in any of the factorizations
4. Multiply these factors to get the LCM

**Example:** Find the LCM of 60 and 48

Prime factorization:
- 60 = 2² × 3 × 5
- 48 = 2⁴ × 3

Taking each prime factor with the highest power:
- 2 (with max power = 4)
- 3 (with max power = 1)
- 5 (with max power = 1)

Therefore, LCM(60, 48) = 2⁴ × 3 × 5 = 240

### 3. Relationship Between HCF and LCM

For any two positive integers a and b:
HCF(a, b) × LCM(a, b) = a × b

**Example:** With a = 60 and b = 48
- HCF(60, 48) = 12
- LCM(60, 48) = 240
- HCF × LCM = 12 × 240 = 2880
- a × b = 60 × 48 = 2880 ✓

### 4. Finding the Total Number of Factors

If the prime factorization of n = p₁ᵏ¹ × p₂ᵏ² × p₃ᵏ³ × ... × pᵣᵏʳ,
then the total number of factors = (k₁ + 1) × (k₂ + 1) × (k₃ + 1) × ... × (kᵣ + 1)

**Example:** How many factors does 72 = 2³ × 3² have?
- Number of factors = (3 + 1) × (2 + 1) = 4 × 3 = 12

The 12 factors of 72 are: 1, 2, 3, 4, 6, 8, 9, 12, 18, 24, 36, 72

### 5. Testing for Perfect Squares and Perfect Cubes

A number is a perfect square if all exponents in its prime factorization are even.
A number is a perfect cube if all exponents in its prime factorization are multiples of 3.

**Examples:**
- 144 = 2⁴ × 3² → All exponents are even, so 144 is a perfect square
- 27 = 3³ → All exponents are multiples of 3, so 27 is a perfect cube
- 72 = 2³ × 3² → Not all exponents are even, so not a perfect square

## Important Properties and Insights 💡

1. **Uniqueness:** The prime factorization of a number is unique (up to the order).
   - Example: 30 can only be expressed as 2 × 3 × 5

2. **Finding if a number is a perfect power:**
   - If all prime factors have exponents divisible by k, the number is a kᵗʰ power.
   - Example: 64 = 2⁶, so all exponents are divisible by 2, making it a perfect square.

3. **Co-prime numbers:**
   - Two numbers are co-prime if their HCF is 1
   - In terms of prime factorization, they share no common prime factors
   - Example: 25 (5²) and 14 (2 × 7) are co-prime

4. **Finding the highest power of a prime dividing a factorial:**
   - To find the highest power of prime p dividing n!, use the formula:
   - ⌊n/p⌋ + ⌊n/p²⌋ + ⌊n/p³⌋ + ... (until the term becomes 0)
   - Example: Highest power of 2 in 10! = ⌊10/2⌋ + ⌊10/4⌋ + ⌊10/8⌋ = 5 + 2 + 1 = 8

## Sample Questions and Solutions 📝

### Sample Question 1:
Find the prime factorization of 980.

**Solution:**
980 = 2 × 490
    = 2 × 2 × 245
    = 2² × 5 × 49
    = 2² × 5 × 7²
Therefore, 980 = 2² × 5 × 7²

### Sample Question 2:
Find the HCF and LCM of 36, 60, and 84.

**Solution:**
Prime factorizations:
- 36 = 2² × 3²
- 60 = 2² × 3 × 5
- 84 = 2² × 3 × 7

HCF: Taking minimum powers of common primes
- Common primes: 2 (min power = 2), 3 (min power = 1)
- HCF = 2² × 3 = 12

LCM: Taking maximum powers of all primes
- All primes: 2 (max power = 2), 3 (max power = 2), 5 (max power = 1), 7 (max power = 1)
- LCM = 2² × 3² × 5 × 7 = 1260

### Sample Question 3:
If the HCF of two numbers is 12 and their LCM is 336, if one of the numbers is 48, find the other number.

**Solution:**
Using the formula: HCF × LCM = Product of the numbers
- 12 × 336 = 48 × Other number
- 4032 = 48 × Other number
- Other number = 4032 ÷ 48 = 84

## Summary ✨

The Fundamental Theorem of Arithmetic is a powerful tool in number theory that assures us every natural number greater than 1 has a unique prime factorization. This theorem:

- Helps us break down numbers into their prime "building blocks"
- Provides methods for finding HCF and LCM systematically
- Gives insight into the structure and properties of numbers
- Has practical applications in various branches of mathematics
- Serves as a foundation for more advanced number theory concepts

Understanding this theorem and its applications helps us tackle a wide range of mathematical problems with confidence and clarity. Whether you're finding factors, testing divisibility, or exploring number patterns, the Fundamental Theorem of Arithmetic provides a solid foundation for your mathematical journey! 🚀

## Practice Problems 🏆

1. Find the prime factorization of 840.
2. Calculate the HCF and LCM of 120 and 150.
3. How many factors does the number 1800 have?
4. Is 1296 a perfect square? A perfect cube? Justify your answer.
5. Find the smallest number that must be multiplied to 252 to make it a perfect square.
`,
  quiz: {
    questions: [
      ...easyQuestions,
      ...mediumQuestions
    ]
  }
};
