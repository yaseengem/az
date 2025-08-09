// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 6\Chapter3\Topic4\content.ts
import { TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic4Content: TopicContent = {
  id: 'cl6_ch3_t4',
  topicNumber: 4,
  topicName: "Prime Factorization",
  duration: 45,
  description: "Learn to express numbers as products of prime factors, understand the fundamental theorem of arithmetic, and apply prime factorization to solve various mathematical problems",
  explanation: `# Prime Factorization 🧩

Prime factorization forms the backbone of number theory and has numerous applications in mathematics! 🌟 In this topic, we'll explore how to break down numbers into their prime building blocks and understand why this concept is so important. Let's dive in! 🚀

## What is Prime Factorization? 🤔

Prime factorization is the process of finding which prime numbers multiply together to make the original number. It's like breaking down a number into its smallest building blocks! 

**Prime numbers** are the fundamental building blocks of all numbers. A prime number is a natural number greater than 1 that has exactly two factors: 1 and itself. The first few prime numbers are:
- 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, ...

Every number greater than 1 can be expressed as a product of prime numbers in exactly one way (except for the order of the factors). This important mathematical fact is called the **Fundamental Theorem of Arithmetic**.

**Example:** 12 = 2² × 3 (This is the only way to express 12 as a product of primes)

## Why is Prime Factorization Important? ✨

Prime factorization has several practical applications:
- Finding the HCF (Highest Common Factor) and LCM (Least Common Multiple) of numbers
- Determining if a number is a perfect square or perfect cube
- Simplifying fractions to their lowest terms
- Developing encryption algorithms for computer security
- Solving various mathematical problems efficiently

## Methods for Finding Prime Factorization 🔍

### Method 1: Division Method
This is the most straightforward approach:
1. Divide the number by the smallest prime number that divides it evenly (usually start with 2)
2. Continue dividing the quotient by the smallest possible prime factor
3. Continue until the quotient becomes 1

**Example:** Let's find the prime factorization of 60
- 60 ÷ 2 = 30 (2 is a factor)
- 30 ÷ 2 = 15 (2 is a factor again)
- 15 ÷ 3 = 5 (3 is a factor)
- 5 ÷ 5 = 1 (5 is a factor)

So, 60 = 2 × 2 × 3 × 5 = 2² × 3 × 5

### Method 2: Factor Tree
A factor tree provides a visual way to find prime factors:
1. Start with the number at the top
2. Split it into any two factors
3. Continue splitting non-prime factors until all branches end with prime numbers

**Example:** Factor tree for 36
\`\`\`
        36
       /  \\
      6    6
    / \\  / \\
2   3 2   3
\`\`\`

Reading all the prime factors: 36 = 2 × 3 × 2 × 3 = 2² × 3²

## Using Exponents in Prime Factorization 📝

When multiple occurrences of the same prime factor appear, we use exponents for a more compact representation.

**Example:** 
- 24 = 2 × 2 × 2 × 3 = 2³ × 3
- 80 = 2 × 2 × 2 × 2 × 5 = 2⁴ × 5
- 144 = 2 × 2 × 2 × 2 × 3 × 3 = 2⁴ × 3²

## Finding the Number of Factors Using Prime Factorization 🧮

If a number N = p₁ᵃ × p₂ᵇ × p₃ᶜ × ... (where p₁, p₂, p₃... are prime numbers),
Then the total number of factors = (a+1) × (b+1) × (c+1) × ...

**Example:** Find the number of factors of 72
- Prime factorization: 72 = 2³ × 3²
- Number of factors = (3+1) × (2+1) = 4 × 3 = 12

The 12 factors are: 1, 2, 3, 4, 6, 8, 9, 12, 18, 24, 36, 72

## Using Prime Factorization to Find HCF and LCM 🎯

### Finding HCF (Highest Common Factor)
1. Find the prime factorization of each number
2. Include each common prime factor with the lowest power

**Example:** Find the HCF of 36 and 48
- 36 = 2² × 3²
- 48 = 2⁴ × 3
- Common prime factors: 2² × 3 = 12

### Finding LCM (Least Common Multiple)
1. Find the prime factorization of each number
2. Include each prime factor with the highest power

**Example:** Find the LCM of 36 and 48
- 36 = 2² × 3²
- 48 = 2⁴ × 3
- All prime factors with highest powers: 2⁴ × 3² = 144

## Checking if a Number is a Perfect Square or Cube 🔄

### Perfect Square
A number is a perfect square if all exponents in its prime factorization are even.

**Example:** 
- 36 = 2² × 3² (all exponents are 2, which is even) ✓
- 72 = 2³ × 3² (the exponent of 2 is 3, which is odd) ✗

### Perfect Cube
A number is a perfect cube if all exponents in its prime factorization are multiples of 3.

**Example:**
- 27 = 3³ (the exponent is 3, which is a multiple of 3) ✓
- 72 = 2³ × 3² (the exponent of 3 is 2, which is not a multiple of 3) ✗

## Sample Problems with Solutions 📚

**Problem 1:** Find the prime factorization of 84.
**Solution:** 
84 = 2 × 42
   = 2 × 2 × 21
   = 2² × 3 × 7
Therefore, 84 = 2² × 3 × 7

**Problem 2:** Using prime factorization, find the HCF and LCM of 24 and 36.
**Solution:**
- 24 = 2³ × 3
- 36 = 2² × 3²
- HCF = 2² × 3 = 12
- LCM = 2³ × 3² = 72

**Problem 3:** Is 400 a perfect square? Use prime factorization to check.
**Solution:**
400 = 2⁴ × 5²
Since all the exponents (4 and 2) are even, 400 is a perfect square.
In fact, 400 = 20², so it equals 20 squared.

## Common Mistakes to Avoid ⚠️

1. Forgetting to check if a number is divisible by 2 multiple times
2. Missing some prime factors in the factorization
3. Incorrectly calculating exponents in the prime factorization
4. Stopping the factorization process too early (before reaching all prime factors)

## Summary ✨

Prime factorization is a fundamental concept that allows us to express any composite number as a product of prime numbers.

Key takeaways:
- Every number greater than 1 can be expressed as a product of primes in exactly one way (Fundamental Theorem of Arithmetic)
- Prime factorization helps in finding HCF, LCM, identifying perfect squares, and solving various mathematical problems
- The two main methods for prime factorization are the division method and the factor tree method
- Using exponents makes prime factorization more compact and easier to work with

In the next topics, we'll explore more applications of prime factorization in solving complex mathematical problems.

## Quick Practice Questions ✏️

1. Find the prime factorization of 120.
2. How many factors does 48 have?
3. Is 196 a perfect square? Why?
4. Find the HCF and LCM of 18 and 24 using prime factorization.

(Answers: 1. 2³ × 3 × 5, 2. 10 factors, 3. Yes, because 196 = 2² × 7² has all even exponents, 4. HCF = 6, LCM = 72)`,
  quiz: {
    questions: [
      ...easyQuestions,
      ...mediumQuestions
    ]
  }
};
