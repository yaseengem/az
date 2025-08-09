import { QuizQuestion, TopicQuiz, TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic4Content: TopicContent = {
  id: 'cl10_ch1_t4',
  topicNumber: 4,
  topicName: 'Decimal expansions of rational numbers',
  duration: 45,
  description: 'Learn about the types of decimal representations of rational numbers, and how to convert between decimal and rational forms.',
  explanation: `
# Decimal Expansions of Rational Numbers 🔢

Every rational number can be expressed as a decimal through division. But have you ever wondered why some decimals terminate while others keep repeating forever? In this topic, we'll explore the fascinating patterns in decimal expansions of rational numbers and learn how to convert between different representations. 🧮

## Types of Decimal Expansions 📊

When we express rational numbers in decimal form, they fall into exactly one of these categories:

### 1. Terminating Decimals ✂️
- **Definition**: These decimals end after a finite number of digits.
- **Examples**:
  * 1/4 = 0.25
  * 3/8 = 0.375
  * 7/20 = 0.35
  * 1/5 = 0.2

### 2. Non-terminating Repeating Decimals ♻️
These come in two sub-types:

#### a) Purely Repeating Decimals 🔁
- **Definition**: Decimals where the repeating pattern starts immediately after the decimal point.
- **Examples**:
  * 1/3 = 0.333333... (denoted as 0.3̅)
  * 1/7 = 0.142857142857... (denoted as 0.142857̅)
  * 2/11 = 0.181818... (denoted as 0.18̅)

#### b) Mixed Repeating Decimals 🔄
- **Definition**: Decimals with non-repeating digits followed by a repeating pattern.
- **Examples**:
  * 1/6 = 0.166666... (denoted as 0.16̅)
  * 5/12 = 0.416666... (denoted as 0.416̅)
  * 3/22 = 0.136363... (denoted as 0.13̅6̅)

## When Does a Rational Number Have a Terminating Decimal? 🔍

A rational number p/q in its simplest form (where p and q are coprime) has a **terminating decimal** expansion if and only if the prime factorization of q contains only powers of 2 and/or 5.

In mathematical notation: q = 2ᵐ × 5ⁿ, where m, n ≥ 0.

### Why is this true? 🤔
When we divide p by q, we're essentially multiplying by 10ⁿ/10ⁿ to get a denominator of 10ⁿ (which gives a terminating decimal). This is only possible when q can be made into a power of 10 by multiplying by some number.

Since 10 = 2 × 5, the only prime factors that can exist in q are 2 and 5.

### Examples:
1. 3/8 = 0.375 (terminating) because 8 = 2³, which contains only power of 2.
2. 7/25 = 0.28 (terminating) because 25 = 5², which contains only power of 5.
3. 17/40 = 0.425 (terminating) because 40 = 2³ × 5, which contains only powers of 2 and 5.
4. 2/3 = 0.666... (non-terminating) because 3 contains prime factor 3, not just 2 and 5.

## Number of Decimal Places in Terminating Decimals 📏

If a rational number p/q has q = 2ᵐ × 5ⁿ in its simplest form, then its decimal expansion will terminate with:
- Max(m, n) decimal places

### Examples:
1. 1/8 = 1/2³ → m = 3, n = 0 → Max(3, 0) = 3 decimal places → 0.125
2. 3/125 = 3/5³ → m = 0, n = 3 → Max(0, 3) = 3 decimal places → 0.024
3. 7/40 = 7/(2³ × 5) → m = 3, n = 1 → Max(3, 1) = 3 decimal places → 0.175

## Converting Repeating Decimals to Fractions 🔄

### Method for Purely Repeating Decimals:
1. Let x be the decimal number
2. Multiply both sides by 10ⁿ where n is the length of the repeating part
3. Subtract the original equation
4. Solve for x

#### Example 1: Convert 0.333333... to a fraction
- Let x = 0.333333...
- 10x = 3.333333...
- 10x - x = 9x = 3
- x = 3/9 = 1/3

#### Example 2: Convert 0.142857142857... to a fraction
- Let x = 0.142857142857...
- 1000000x = 142857.142857...
- 1000000x - x = 999999x = 142857
- x = 142857/999999 = 1/7

### Method for Mixed Repeating Decimals:
1. Let x be the decimal number
2. Multiply both sides by 10ᵐ where m is the number of non-repeating digits
3. Let y be this new number, which is now a purely repeating decimal
4. Convert y to a fraction using the method above
5. Solve for x

#### Example: Convert 0.416666... to a fraction
- Let x = 0.416666...
- 10x = 4.16666...
- Let y = 4.16666...
- y = 4 + 0.16666...
- 0.16666... = 1/6 (using the purely repeating method)
- y = 4 + 1/6 = 25/6
- 10x = 25/6
- x = 25/60 = 5/12

## Period of Repeating Decimals 🔄

The number of digits in the repeating part is called the **period** of the decimal expansion.

- 1/3 = 0.333333... has period 1
- 1/7 = 0.142857142857... has period 6
- 5/11 = 0.454545... has period 2

## Interesting Patterns in Repeating Decimals 🧩

1. **Period of 1/p**:
   For prime numbers p other than 2 and 5, the period of the decimal expansion of 1/p divides (p-1).
   
   For example:
   - 1/7 has period 6, and 6 divides (7-1) = 6
   - 1/13 has period 6, and 6 divides (13-1) = 12

2. **Complements**:
   Some fractions with the same denominator have digit-wise complementary repeating parts.
   
   For example:
   - 1/9 = 0.111111...
   - 8/9 = 0.888888...

3. **Cyclic Numbers**:
   Some fractions produce interesting cyclic patterns.
   
   For example:
   - 1/7 = 0.142857142857...
   - 2/7 = 0.285714285714...
   - 3/7 = 0.428571428571...
   
   Notice how each numerator yields the same digits in the same order, just starting from a different position!

## Real-life Applications 🌍

Understanding decimal expansions of rational numbers helps in:

1. **Financial Calculations**: Calculating interest, conversions between percentages and decimals.
2. **Measurement and Scientific Notation**: Precise representations of measurements.
3. **Computer Science**: Storing and representing decimal numbers in binary.
4. **Engineering**: Calculations requiring precise fractional values.

## Converting Between Representations 🔄

### Fraction to Decimal:
Simply divide the numerator by the denominator.
- 3/4 = 0.75
- 2/3 = 0.666... = 0.6̅

### Terminating Decimal to Fraction:
1. Write the decimal as a fraction with denominator 10ⁿ (where n is the number of decimal places)
2. Simplify
- 0.75 = 75/100 = 3/4
- 0.625 = 625/1000 = 5/8

### Repeating Decimal to Fraction:
Use the methods shown earlier in this chapter.

## Common Mistakes to Avoid ⚠️

1. **Thinking all rational numbers have terminating decimals**: Only those with denominators of the form 2ᵐ × 5ⁿ terminate.
2. **Confusing repeating patterns**: Always identify the exact repeating pattern, especially in mixed repeating decimals.
3. **Misidentifying the period**: The period is the length of the smallest repeating unit.
4. **Incorrect conversion**: Be careful with the algebraic steps when converting repeating decimals to fractions.

## Practice Problems 📝

1. Determine which of these has a terminating decimal expansion:
   - 7/8 ✓
   - 4/15 ✗
   - 13/25 ✓
   - 11/30 ✗

2. Convert 0.2545454... to a fraction.
   (Answer: 0.2545454... = 28/110 = 14/55)

3. How many decimal places will 17/2⁵ have?
   (Answer: Max(5, 0) = 5 places → 17/32 = 0.53125)

4. Convert 7/6 to a decimal.
   (Answer: 7/6 = 1.166666... = 1.16̅)

## Summary ✨

- Rational numbers have either terminating or repeating decimal expansions
- A rational number p/q has a terminating decimal if and only if q = 2ᵐ × 5ⁿ
- The number of decimal places in a terminating decimal is Max(m, n)
- Repeating decimals can be either purely repeating or mixed repeating
- Repeating decimals can be converted back to fractions using algebraic methods
- The period of a repeating decimal is the length of its repeating part

Understanding decimal expansions helps us see the deep patterns within rational numbers and gives us practical tools for working with fractions in various mathematical and real-world contexts. 🌟

### Additional Examples and Sample Questions:
1. **Example**: Express 23/40 as a decimal.
   Solution: Since 40 = 2³ × 5, the decimal will terminate. 23/40 = 0.575

2. **Example**: Convert 0.363636... to a fraction.
   Solution: Let x = 0.363636...
   100x = 36.3636...
   100x - x = 99x = 36
   x = 36/99 = 4/11

3. **Question**: Which of these will have a purely repeating decimal expansion?
   a) 1/7   b) 1/8   c) 1/9   d) 1/12
   (Answer: a and c, as 7 and 9 have no factors of 2 or 5)

4. **Question**: Find the period of the decimal expansion of 1/11.
   (Answer: Period = 2, as 1/11 = 0.090909...)

5. **Question**: Convert 1.41666... to a fraction.
   (Answer: 1.41666... = 17/12)
`,
  quiz: {
    questions: [
      ...easyQuestions,
      ...mediumQuestions
    ]
  }
};
