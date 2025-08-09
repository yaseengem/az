import { QuizQuestion, TopicQuiz, TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic1Content: TopicContent = {
  id: 'cl8_ch5_t1',
  topicNumber: 1,
  topicName: "Finding squares and square roots",
  duration: 45,
  description: "Learn about perfect squares, finding square roots using different methods including prime factorization and division, and exploring properties of squares and square roots",
  explanation: `
# Finding Squares and Square Roots 🔢

Have you ever wondered why we call it "squaring" a number? Let's explore the fascinating world of squares and square roots! 📐

## What are Squares? 🌟

When we multiply a number by itself, we get its square. So if we take a number 'n', its square is n × n = n².

**Examples:**
- 5² = 5 × 5 = 25
- 9² = 9 × 9 = 81
- (-7)² = (-7) × (-7) = 49

In geometric terms, if you have a square with side length 'n', its area would be n² square units. That's why we call it "squaring" a number! 🏢

## What are Perfect Squares? 🎯

A **perfect square** is a number that can be expressed as the square of an integer. Perfect squares are incredibly important in mathematics!

**First few perfect squares:**
1² = 1
2² = 4
3² = 9
4² = 16
5² = 25
6² = 36
7² = 49
8² = 64
9² = 81
10² = 100

**Sample Question:** Is 45 a perfect square? 
**Answer:** No, because there is no whole number that when squared gives 45.

## Patterns in Squares 📊

Squares have fascinating patterns:

1. **Pattern in differences**: If we find the difference between consecutive perfect squares, we get a sequence of odd numbers:
   - 4 - 1 = 3 (odd)
   - 9 - 4 = 5 (odd)
   - 16 - 9 = 7 (odd)
   - 25 - 16 = 9 (odd)
   
2. **Pattern in last digits**: The units place of a square follows a pattern:
   - Numbers ending in 0 have squares ending in 0
   - Numbers ending in 1 or 9 have squares ending in 1
   - Numbers ending in 2 or 8 have squares ending in 4
   - Numbers ending in 3 or 7 have squares ending in 9
   - Numbers ending in 4 or 6 have squares ending in 6
   - Numbers ending in 5 have squares ending in 5

3. **Sum of odd numbers**: The sum of first n odd numbers gives n²:
   - 1 = 1² = 1
   - 1 + 3 = 4 = 2²
   - 1 + 3 + 5 = 9 = 3²
   - 1 + 3 + 5 + 7 = 16 = 4²

## Properties of Perfect Squares 🔍

1. A perfect square number has an even number of zeros at the end.
   - 100 = 10² has 2 zeros (even number)
   - 10000 = 100² has 4 zeros (even number)

2. A perfect square cannot end with 2, 3, 7, or 8 in the units place.

3. If a perfect square ends with digit 6, then the number ends with digit 4 or 6.

4. The number of digits in a square follows a pattern based on the original number.

5. A perfect square is either divisible by 3 or leaves a remainder of 1 when divided by 3.

## What are Square Roots? 🧮

The square root of a number 'a' is a value 'b' such that b² = a. We write this as b = √a.

**Examples:**
- √25 = 5 (since 5² = 25)
- √64 = 8 (since 8² = 64)
- √100 = 10 (since 10² = 100)

**Sample Question:** What is the value of √144?
**Answer:** Since 12² = 144, we have √144 = 12

## Finding Square Roots: Methods 🔎

### 1. Prime Factorization Method 🌿

This method uses the fundamental theorem of arithmetic to find square roots:

**Step 1**: Find the prime factorization of the given number
**Step 2**: Group the prime factors in pairs
**Step 3**: Take one factor from each pair to get the square root

**Example: Finding √576**
- Prime factorization: 576 = 2⁶ × 3²
- Grouping in pairs: 576 = (2²)³ × (3²)¹
- Taking one from each pair: √576 = 2³ × 3¹ = 8 × 3 = 24

**Sample Question:** Find the square root of 1764 using prime factorization.
**Solution:**
1764 = 2² × 3² × 7²
√1764 = 2 × 3 × 7 = 42

### 2. Long Division Method 🔢

The long division method is useful when the prime factorization is difficult:

**Steps for finding √2025:**
1. Pair the digits from right to left: 20 25
2. Find largest digit whose square ≤ 20 (4)
3. Subtract: 20 - 16 = 4
4. Bring down next pair: 4 25
5. Double the quotient, find next digit: 8_ × _ ≤ 425
6. 85 × 5 = 425
7. Subtract: 425 - 425 = 0

So √2025 = 45

### 3. Estimating Square Roots 📈

For numbers that are not perfect squares, we can estimate the square root:

**Example: Estimating √30**
- We know that 5² = 25 and 6² = 36
- Since 25 < 30 < 36, we have 5 < √30 < 6
- √30 is closer to √36 than √25, so √30 ≈ 5.48

## Applications of Squares and Square Roots 🌍

1. **Geometry**: Calculating area of squares, finding diagonal lengths using the Pythagorean theorem
   - Area of a square with side 5 cm = 5² = 25 cm²
   - Diagonal of a square with side s is s√2

2. **Distance Formula**: Finding distance between two points (x₁, y₁) and (x₂, y₂):
   - Distance = √[(x₂-x₁)² + (y₂-y₁)²]

3. **Real-life Applications**:
   - Architects use square roots to calculate measurements
   - Engineers use square calculations for area and structural stability
   - Computer scientists use squares in various algorithms

## Special Manipulations with Squares and Square Roots 🌟

1. **Square of a sum**: (a + b)² = a² + 2ab + b²
   - Example: (5 + 3)² = 5² + 2(5)(3) + 3² = 25 + 30 + 9 = 64

2. **Square of a difference**: (a - b)² = a² - 2ab + b²
   - Example: (7 - 2)² = 7² - 2(7)(2) + 2² = 49 - 28 + 4 = 25

3. **Difference of squares**: a² - b² = (a + b)(a - b)
   - Example: 16² - 9² = (16 + 9)(16 - 9) = 25 × 7 = 175

4. **Square root properties**:
   - √(a × b) = √a × √b
   - √(a/b) = √a/√b (where b > 0)

**Sample Question:** Simplify √75.
**Solution:**
√75 = √(25 × 3) = √25 × √3 = 5√3

## Square Root of Decimals and Fractions 📝

1. **Decimals**: For a number like 0.25:
   - √0.25 = √(25/100) = √25/√100 = 5/10 = 0.5

2. **Fractions**: For a fraction like 4/9:
   - √(4/9) = √4/√9 = 2/3

**Sample Question:** Find the value of √0.0169.
**Solution:**
√0.0169 = √(169/10000) = √169/√10000 = 13/100 = 0.13

## Summary ✨

In this topic, we've explored:
- What squares and perfect squares are and their patterns
- Properties of perfect squares and how to identify them
- Different methods to find square roots (prime factorization, long division)
- Estimating square roots for non-perfect squares
- Real-life applications of squares and square roots

Understanding squares and square roots is essential for many areas of mathematics and real-world applications. The ability to calculate squares and find square roots helps us solve problems in geometry, algebra, science, engineering, and everyday life situations.

### Additional Practice Questions:
1. Find the square root of 1156 using prime factorization.
2. What is the square of 23?
3. Estimate the value of √87 to the nearest whole number.
4. Find the smallest number that must be subtracted from 423 to get a perfect square.
5. Simplify: √288 ÷ √18

Remember, practice makes perfect! Try solving more problems to strengthen your understanding of squares and square roots. 🚀
`,
  quiz: {
    questions: [
      ...easyQuestions,
      ...mediumQuestions
    ]
  }
};
