import { generateId } from '../../../../../../app/utils/idGenerator';
import { QuizQuestion, TopicQuiz, TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic1Content: TopicContent = {
  id: 'cl10_ch17_t1',
  topicNumber: 1,
  topicName: "Number properties and patterns",
  duration: 45,
  description: "Exploration of interesting number properties, patterns, and their applications to solve mathematical puzzles and problems",
  explanation: `
# Number Properties and Patterns 🔢

Welcome to the fascinating world of number properties and patterns! 🌟 In this topic, we'll explore the hidden structures and interesting behaviors within numbers that mathematicians have discovered over centuries. Understanding these patterns not only makes math more enjoyable but also helps in solving complex problems more efficiently. Let's dive in!

## Divisibility Rules: Quick Mental Math Tricks ✨

Divisibility rules help us quickly determine if a number is divisible by another without performing full division. Here are some essential rules:

### Divisibility by 2, 5, and 10 🎯
- **Rule for 2**: A number is divisible by 2 if its last digit is even (0, 2, 4, 6, 8).
  * Example: 3,456 ends in 6, so it's divisible by 2.
- **Rule for 5**: A number is divisible by 5 if its last digit is 0 or 5.
  * Example: 1,235 ends in 5, so it's divisible by 5.
- **Rule for 10**: A number is divisible by 10 if it ends with 0.
  * Example: 4,590 ends in 0, so it's divisible by 10.

### Divisibility by 3 and 9 🧮
- **Rule for 3**: A number is divisible by 3 if the sum of its digits is divisible by 3.
  * Example: For 723, the sum is 7+2+3=12, and 12 is divisible by 3, so 723 is divisible by 3.
- **Rule for 9**: A number is divisible by 9 if the sum of its digits is divisible by 9.
  * Example: For 918, the sum is 9+1+8=18, and 18 is divisible by 9, so 918 is divisible by 9.

### Divisibility by 4 and 8 📊
- **Rule for 4**: A number is divisible by 4 if the number formed by its last two digits is divisible by 4.
  * Example: 2,316 ends with 16, and 16 is divisible by 4, so 2,316 is divisible by 4.
- **Rule for 8**: A number is divisible by 8 if the number formed by its last three digits is divisible by 8.
  * Example: 9,624 ends with 624, and 624 is divisible by 8, so 9,624 is divisible by 8.

### Divisibility by 6 and 11 🔍
- **Rule for 6**: A number is divisible by 6 if it is divisible by both 2 and 3.
  * Example: 5,418 is even (divisible by 2) and 5+4+1+8=18 is divisible by 3, so 5,418 is divisible by 6.
- **Rule for 11**: A number is divisible by 11 if the alternating sum of its digits (starting from the units digit with plus sign) is divisible by 11.
  * Example: For 8,745, we compute (5-4+7-8) = 0, which is divisible by 11, so 8,745 is divisible by 11.

## Digital Roots: A Fascinating Pattern 🌱

The digital root of a number is found by repeatedly adding its digits until a single digit is obtained.

- **Example**: Find the digital root of 9,876.
  * Step 1: 9+8+7+6 = 30
  * Step 2: 3+0 = 3
  * So the digital root of 9,876 is 3.

- **Properties of Digital Roots**:
  * The digital root of any multiple of 9 is 9.
  * If two numbers have the same digital root, their sum also has the same digital root.
  * The digital root of a product is the digital root of the product of the digital roots.

## Number Patterns in Sequences and Series 📈

### Triangular Numbers 🔺
These are numbers representing triangular arrangements of objects:
1, 3, 6, 10, 15, 21, ...

The nth triangular number is given by the formula: T_n = n(n+1)/2

### Square Numbers ⬜
These represent square arrangements of objects:
1, 4, 9, 16, 25, 36, ...

The nth square number is n².

### Fibonacci Sequence 🌀
A famous sequence where each number is the sum of the two preceding ones:
0, 1, 1, 2, 3, 5, 8, 13, 21, ...

This sequence appears surprisingly often in nature and art!

## Cyclic Patterns in Powers ♻️

Many numbers show interesting cyclic patterns in their units digits when raised to powers:

- **Units digit of powers of 2**:
  * 2¹ = 2, 2² = 4, 2³ = 8, 2⁴ = 16 (units digit: 6)
  * 2⁵ = 32 (units digit: 2), and the cycle repeats: 4, 8, 6, 2, ...

- **Units digit of powers of 3**:
  * 3¹ = 3, 3² = 9, 3³ = 27 (units digit: 7), 3⁴ = 81 (units digit: 1)
  * The cycle is: 3, 9, 7, 1, ...

- **Units digit of powers of 7**:
  * 7¹ = 7, 7² = 49 (units digit: 9), 7³ = 343 (units digit: 3), 7⁴ = 2401 (units digit: 1)
  * The cycle is: 7, 9, 3, 1, ...

### Example Problem 🧩
What is the units digit of 7²⁰²³?
- The units digits of powers of 7 cycle with period 4: 7, 9, 3, 1, ...
- For 7²⁰²³, we calculate 2023 ÷ 4 = 505 with remainder 3
- So 7²⁰²³ has the same units digit as 7³, which is 3

## Arithmetic Tricks and Patterns 🎭

### Multiplying by 11 🎲
To multiply a two-digit number by 11:
1. Add the digits of the number
2. Place this sum between the original digits
- **Example**: 45 × 11 = 4(4+5)5 = 495

### Squaring Numbers Ending in 5 🎯
To square a number ending in 5:
1. Multiply the tens digit by the next integer
2. Append 25 to the result
- **Example**: 35² = 3 × 4 = 12, and append 25: 1225

### Difference of Squares 📏
The difference between consecutive square numbers follows a pattern:
- (n+1)² - n² = 2n + 1
- **Example**: 5² - 4² = 25 - 16 = 9, and indeed 2(4) + 1 = 9

### Sum of First n Natural Numbers 💡
The sum of the first n natural numbers is given by:
- Sum = n(n+1)/2
- **Example**: Sum of first 10 natural numbers = 10(10+1)/2 = 55

### Sum of First n Square Numbers 📐
The sum of the first n square numbers is given by:
- Sum = n(n+1)(2n+1)/6
- **Example**: Sum of first 4 square numbers = 1² + 2² + 3² + 4² = 4(4+1)(2×4+1)/6 = 30

## Number Patterns in Pascal's Triangle 🔼

Pascal's Triangle is an array of numbers where each number is the sum of the two numbers directly above it:

\`\`\`
    1
   1 1
  1 2 1
 1 3 3 1
1 4 6 4 1
\`\`\`

### Properties of Pascal's Triangle:
- Each row begins and ends with 1
- The sum of numbers in row n is 2^n
- Each entry is a binomial coefficient

## Number Patterns in Everyday Life 🌎

Number patterns appear all around us, from architecture to nature:

### The Golden Ratio 🌻
The golden ratio (approximately 1.618) appears in:
- The spiral patterns of sunflower seeds
- The proportions of famous buildings like the Parthenon
- Art by Leonardo da Vinci

### Music and Mathematics 🎵
- Musical scales follow mathematical patterns
- Rhythms are based on regular numeric divisions of time

## Solving Puzzles Using Number Properties 🧩

Many puzzles can be solved efficiently using number properties:

### Example Puzzle 1: Last Two Digits 🎮
What are the last two digits of 7^82?
- Notice that the last two digits cycle with a period of 20: 07, 49, 43, 01, ...
- 82 ÷ 20 = 4 with remainder 2, so 7^82 has the same last two digits as 7^2, which is 49

### Example Puzzle 2: Digital Root 📱
Find a pattern in the digital roots of powers of 2:
- 2¹ = 2 (digital root: 2)
- 2² = 4 (digital root: 4)
- 2³ = 8 (digital root: 8)
- 2⁴ = 16 (digital root: 7)
- 2⁵ = 32 (digital root: 5)
- 2⁶ = 64 (digital root: 1)
- The pattern cycles: 2, 4, 8, 7, 5, 1, ...

## Mathematical Games Based on Number Properties 🎮

### The Game of Nim 🏆
- Players take turns removing objects from piles
- Using binary number properties helps determine winning strategies

### The 15-Game 🎯
- Players take turns selecting numbers from 1 to 9
- The goal is to have three numbers that sum to 15
- This is equivalent to creating a 3×3 magic square

## Summary ✨

In this topic, we explored:
- **Divisibility Rules**: Quick ways to test if a number is divisible by another
- **Digital Roots**: Patterns formed by repeatedly adding digits
- **Number Sequences**: Triangular, square, and Fibonacci numbers
- **Cyclic Patterns**: Repetition in units digits of powers
- **Arithmetic Tricks**: Mental math shortcuts
- **Pascal's Triangle**: A pattern of binomial coefficients
- **Real-world Applications**: Where number patterns appear in nature and art

Understanding these number properties and patterns doesn't just make mathematics more intriguing—it provides powerful tools for solving problems efficiently and appreciating the underlying structure of mathematics!

### Additional Examples and Practice Problems:

1. **Example**: Find the remainder when 2^50 is divided by 7.
   * Solution: The remainders when dividing powers of 2 by 7 cycle: 2, 4, 1, 2, 4, 1, ... with period 3.
   * 50 ÷ 3 = 16 with remainder 2, so 2^50 gives the same remainder as 2^2 = 4.

2. **Example**: Determine if 12345678987654321 is divisible by 9.
   * Solution: Sum the digits: 1+2+3+4+5+6+7+8+9+8+7+6+5+4+3+2+1 = 81
   * 81 is divisible by 9, so the original number is divisible by 9.

3. **Problem**: If a number has exactly three divisors, what type of number must it be?
   * Answer: A number with exactly three divisors must be the square of a prime number. For example, 4 = 2² has divisors 1, 2, 4.

4. **Problem**: What is the sum of all two-digit numbers divisible by 3?
   * Answer: These numbers form an AP: 12, 15, 18, ..., 99. Using the sum formula for AP, the result is 1683.
`,
  quiz: {
    questions: [
      ...easyQuestions,
      ...mediumQuestions
    ]
  }
};
