// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 6\Chapter3\Topic2\content.ts
// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 6\Chapter3\Topic2\content.ts
import { TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic2Content: TopicContent = {
  id: 'cl6_ch3_t2',
  topicNumber: 2,
  topicName: "Prime and Composite Numbers",
  duration: 45,
  description: "Learn about prime and composite numbers, their properties, and how to identify them using various methods",
  explanation: `# Prime and Composite Numbers 🔢

Hello young mathematicians! 👋 Today, we're going to explore the fascinating world of prime and composite numbers. These special types of numbers have unique properties that make them important building blocks in mathematics. Let's discover what makes them special!

## What are Prime Numbers? 🌟

**Prime numbers** are natural numbers greater than 1 that have exactly two factors: 1 and the number itself. In other words, a prime number can only be divided evenly by 1 and itself.

The first few prime numbers are:
2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, ...

Let's look at a few examples:

- **2** is a prime number because its only factors are 1 and 2.
- **3** is a prime number because its only factors are 1 and 3.
- **5** is a prime number because its only factors are 1 and 5.

**Important Note:** The number 1 is neither prime nor composite. It has only one factor (itself), but prime numbers must have exactly two factors.

### Special Features of Prime Numbers:

1. 2 is the only even prime number. All other even numbers are divisible by 2, which means they have at least three factors.
2. Every prime number greater than 3 can be written in the form of either 6n + 1 or 6n - 1, where n is a natural number. (However, not all numbers of the form 6n ± 1 are prime.)
3. Prime numbers have no factors other than 1 and themselves.
4. There are infinitely many prime numbers (proven by the ancient Greek mathematician Euclid).

## What are Composite Numbers? 📚

**Composite numbers** are natural numbers greater than 1 that have more than two factors. In other words, they can be divided evenly by numbers other than just 1 and themselves.

The first few composite numbers are:
4, 6, 8, 9, 10, 12, 14, 15, 16, 18, 20, ...

Let's look at a few examples:

- **4** is a composite number because its factors are 1, 2, and 4.
- **6** is a composite number because its factors are 1, 2, 3, and 6.
- **9** is a composite number because its factors are 1, 3, and 9.

### Special Features of Composite Numbers:

1. All even numbers greater than 2 are composite.
2. A composite number can be expressed as a product of prime numbers.
3. The smallest composite number is 4.
4. Composite numbers have at least one prime factor.

## How to Identify Prime and Composite Numbers 🔍

### Method 1: Division Method

To check if a number n is prime:
1. Find the square root of n (or the closest integer less than or equal to its square root).
2. Divide n by all prime numbers from 2 up to that value.
3. If none of these divisions result in a whole number, then n is prime.

Example: Let's check if 29 is prime.
- Square root of 29 is approximately 5.385
- We need to check if 29 is divisible by 2, 3, or 5
  - 29 ÷ 2 = 14.5 (not a whole number)
  - 29 ÷ 3 = 9.67 (not a whole number)
  - 29 ÷ 5 = 5.8 (not a whole number)
- Since none of these divisions result in whole numbers, 29 is a prime number.

### Method 2: Sieve of Eratosthenes

This is an ancient technique to find all prime numbers up to any given limit:

1. Create a list of numbers from 2 to the limit.
2. Start with the first number in the list (2) and mark all its multiples as composite.
3. Move to the next unmarked number. This is a prime number. Mark all its multiples as composite.
4. Repeat until you've processed all numbers in the list.
5. The unmarked numbers are prime numbers.

Let's use this method to find all prime numbers up to 30:

1. List: 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30
2. Mark multiples of 2 (except 2 itself): 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30
3. Mark multiples of 3 (except 3 itself): 6, 9, 12, 15, 18, 21, 24, 27, 30
4. Mark multiples of 5 (except 5 itself): 10, 15, 20, 25, 30
5. Mark multiples of 7 (except 7 itself): 14, 21, 28

The unmarked numbers are the primes: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29

## Prime Factorization 🔬

Prime factorization means expressing a number as a product of its prime factors. Every composite number can be written as a product of prime numbers in a unique way (this is called the Fundamental Theorem of Arithmetic).

### Methods for Prime Factorization:

#### 1. Division Method

1. Divide the number by the smallest prime number that divides it evenly.
2. Continue dividing the quotient by the smallest prime number that divides it.
3. Continue this process until the quotient becomes 1.

Example: Prime factorization of 60

- 60 ÷ 2 = 30
- 30 ÷ 2 = 15
- 15 ÷ 3 = 5
- 5 ÷ 5 = 1

So, 60 = 2 × 2 × 3 × 5 = 2² × 3 × 5

#### 2. Factor Tree Method

1. Choose any pair of factors of the given number.
2. Write these factors as branches below the number.
3. If a factor is prime, circle it. If not, further factorize it.
4. Continue until all branches end in circled prime numbers.

Example: Prime factorization of 36 using a factor tree

\`\`\`
       36
      /  \\
     6    6
    / \\  / \\
   2   3 2   3
\`\`\`

So, 36 = 2 × 3 × 2 × 3 = 2² × 3²

## Applications of Prime and Composite Numbers 🌍

### 1. Cryptography and Security

Prime numbers are fundamental in creating secure encryption methods, including RSA encryption, which helps keep our online activities secure.

### 2. Mathematics and Computer Science

Many mathematical theories and computer algorithms use properties of prime numbers.

### 3. Coding and Error Correction

Prime numbers help in creating systems that can detect and correct errors when data is transmitted.

### 4. Everyday Applications

Understanding prime factorization helps us find the LCM (Least Common Multiple) and HCF (Highest Common Factor) of numbers, which are used in various practical situations like:

- Dividing objects into equal groups
- Finding when recurring events will coincide
- Simplifying fractions

## Interesting Facts About Prime Numbers 🌠

1. The ancient Greeks knew about prime numbers over 2000 years ago!
2. The largest known prime number (as of 2023) has more than 24 million digits!
3. Mathematicians are still searching for patterns in prime numbers.
4. Twin primes are pairs of prime numbers that differ by 2, like (3,5), (5,7), (11,13), etc.
5. The Goldbach conjecture states that every even integer greater than 2 can be expressed as the sum of two prime numbers.

## Sample Questions 📝

1. **Question:** Is 31 a prime number?
   **Solution:** 
   - Square root of 31 is approximately 5.57
   - We need to check if 31 is divisible by 2, 3, or 5
   - 31 ÷ 2 = 15.5 (not a whole number)
   - 31 ÷ 3 = 10.33 (not a whole number)
   - 31 ÷ 5 = 6.2 (not a whole number)
   - Since 31 is not divisible by any of these numbers, 31 is a prime number.

2. **Question:** Find the prime factorization of 84.
   **Solution:**
   - 84 ÷ 2 = 42
   - 42 ÷ 2 = 21
   - 21 ÷ 3 = 7
   - 7 ÷ 7 = 1
   - Therefore, 84 = 2 × 2 × 3 × 7 = 2² × 3 × 7

3. **Question:** How many factors does 36 have?
   **Solution:**
   - Prime factorization: 36 = 2² × 3²
   - Powers: 2 appears 2 times, 3 appears 2 times
   - Number of factors = (2+1) × (2+1) = 3 × 3 = 9
   - The factors of 36 are: 1, 2, 3, 4, 6, 9, 12, 18, 36

4. **Question:** Which of these numbers is a prime number: 51, 53, or 57?
   **Solution:**
   - 51 = 3 × 17, so it's composite
   - 57 = 3 × 19, so it's composite
   - For 53:
     - Square root of 53 is approximately 7.28
     - Check if divisible by 2, 3, 5, or 7
     - None of these divide 53 evenly
     - Therefore, 53 is a prime number

## Summary ✨

In this lesson, we've learned about:

- **Prime Numbers**: Natural numbers greater than 1 with exactly two factors (1 and the number itself).
- **Composite Numbers**: Natural numbers greater than 1 with more than two factors.
- **Methods to Identify Prime Numbers**: Division method and Sieve of Eratosthenes.
- **Prime Factorization**: Expressing a number as a product of prime factors using division method or factor tree method.
- **Applications**: How prime and composite numbers are used in cryptography, mathematics, and everyday life.

Remember, 1 is neither prime nor composite, and 2 is the only even prime number. Every natural number greater than 1 is either prime or composite.

Understanding prime and composite numbers helps us solve many mathematical problems and gives us insight into the fascinating world of numbers! Keep practicing, and you'll master these concepts in no time! 🌟`,
  quiz: {
    questions: [
      ...easyQuestions,
      ...mediumQuestions
    ]
  }
};
