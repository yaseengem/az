// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 9\Chapter1\Topic3\content.ts
import { generateId } from '../../../../../../app/utils/idGenerator';
import { QuizQuestion, TopicQuiz, TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic3Content: TopicContent = {
  id: 'cl9_ch1_t3',
  topicNumber: 3,
  topicName: "Real Numbers and their Decimal Expansions",
  duration: 45,
  description: "Understanding real numbers, their representation on number line, and decimal expansions of real numbers",
  explanation: `
# Real Numbers and their Decimal Expansions 🌐

Welcome to the fascinating world of real numbers! In this topic, we'll explore what real numbers are, how we represent them on a number line, and understand their decimal expansions. This knowledge is fundamental to advanced mathematics and everyday calculations. 🧮

## What are Real Numbers? 🤔

**Real numbers** are the collection of all rational and irrational numbers. We represent the set of real numbers using the symbol ℝ.

Mathematically: ℝ = ℚ ∪ 𝕀 (The union of rational and irrational numbers)

Real numbers include:
- Natural numbers (ℕ): 1, 2, 3, ...
- Whole numbers (𝕎): 0, 1, 2, 3, ...
- Integers (ℤ): ..., -3, -2, -1, 0, 1, 2, 3, ...
- Rational numbers (ℚ): Numbers expressible as p/q where p, q are integers and q ≠ 0
- Irrational numbers (𝕀): Numbers like √2, π, e that cannot be expressed as fractions

## The Real Number Line 📏

The real number line is one of the most powerful visualization tools in mathematics:
- It's a straight line extending infinitely in both directions
- Every point on the line corresponds to exactly one real number
- The number 0 is usually placed at the center
- Positive numbers extend to the right, negative numbers to the left
- Numbers increase in value as we move from left to right

How do we plot different types of numbers?
- **Integers**: Easy to mark at evenly spaced points
- **Rational numbers**: Can be plotted as exact points (though many are very close together)
- **Irrational numbers**: Can only be approximated but have exact locations (like π or √2)

## The Completeness Property ✅

A key property of real numbers is **completeness**:
- There are no "gaps" or "holes" on the real number line
- Every point on the line corresponds to a real number
- Every real number corresponds to a point on the line

This property distinguishes real numbers from rational numbers, which have "gaps" where irrational numbers exist.

## Decimal Expansions of Real Numbers 🔢

Every real number can be represented as a decimal expansion. This representation helps us understand the nature of the number:

### Decimal Expansions of Rational Numbers

Rational numbers (p/q) have decimal expansions that are either:
1. **Terminating decimals**: The decimal expansion ends with zeros.
   - Examples: 1/2 = 0.5, 3/4 = 0.75, 1/8 = 0.125

2. **Repeating (recurring) decimals**: The decimal expansion has a digit or group of digits that repeat infinitely.
   - Examples: 1/3 = 0.333... (single digit repetition)
   - 1/6 = 0.166666... (written as 0.16̅)
   - 1/7 = 0.142857142857... (block repetition, written as 0.142857̅)

**Important Fact**: A rational number will have a terminating decimal expansion if and only if its denominator (when expressed in lowest terms) has prime factors of only 2 and/or 5.

For example:
- 1/4 = 0.25 (terminates because 4 = 2²)
- 1/20 = 0.05 (terminates because 20 = 2² × 5)
- 1/6 = 0.166... (repeating because 6 = 2 × 3 has a prime factor other than 2 or 5)

### Decimal Expansions of Irrational Numbers

Irrational numbers have decimal expansions that are:
- **Non-terminating**: They go on forever
- **Non-repeating**: They never fall into a repeating pattern

Examples:
- √2 = 1.414213562373095...
- π = 3.141592653589793...
- e = 2.718281828459045...

## Converting Repeating Decimals to Fractions 🔄

We can convert repeating decimals back to fractions using algebraic methods:

**Example**: Convert 0.333... to a fraction.
1. Let x = 0.333...
2. Multiply by 10: 10x = 3.333...
3. Subtract: 10x - x = 3.333... - 0.333...
4. Simplify: 9x = 3
5. Solve: x = 3/9 = 1/3

**Example**: Convert 0.23232323... to a fraction.
1. Let x = 0.232323...
2. Multiply by 100: 100x = 23.232323...
3. Subtract: 100x - x = 23.232323... - 0.232323...
4. Simplify: 99x = 23
5. Solve: x = 23/99 = 23/99

## Comparing Real Numbers 📊

To compare real numbers, we can:
1. Place them on the number line and see which is to the right
2. Compare their decimal expansions digit by digit from left to right

**Example**: Which is larger, 3.14 or π?
Since π ≈ 3.141592..., and 3.14 < 3.141592..., we know that 3.14 < π.

## Representations on the Number Line 📌

To represent irrational numbers like √2 on the number line:
1. Draw a unit square with sides of length 1
2. The diagonal of the square has length √2 (by the Pythagorean theorem)
3. Using a compass, we can mark exactly where √2 falls on the number line

To represent π:
- Using geometric constructions is more complex
- In practice, we use an approximation like 3.14 or 22/7

## Density of Real Numbers 🌟

A remarkable property of real numbers is their **density**:
- Between any two real numbers, there are infinitely many more real numbers
- This is true no matter how close the two numbers are

For example, between 0.1 and 0.2, we have:
0.11, 0.12, 0.13, ..., 0.19, and infinitely more!

## Sample Questions and Examples ❓

**Example 1**: Classify the decimal expansion of 3/8.
**Answer**: 3/8 = 0.375. Since it terminates, it's a terminating decimal.

**Example 2**: Convert 0.27272727... to a fraction.
**Answer**: Let x = 0.272727...
100x = 27.272727...
100x - x = 27.272727... - 0.272727...
99x = 27
x = 27/99 = 3/11

**Example 3**: Is the number 0.010010001... rational or irrational?
**Answer**: It's irrational because the pattern of zeros increases each time, so it never repeats in a fixed pattern.

**Example 4**: Locate √3 on the number line.
**Answer**: We can use a right triangle with base 1 and height √2 to find √3 using the Pythagorean theorem.

## Summary ✨

In this topic, we've explored:
- Real numbers as the union of rational and irrational numbers
- The real number line and the completeness property
- Decimal expansions of rational numbers (terminating or repeating)
- Decimal expansions of irrational numbers (non-terminating, non-repeating)
- Methods to convert between fractions and decimals
- Techniques for comparing and representing real numbers

Understanding the decimal expansions of real numbers helps us grasp their nature and properties. It explains why calculators can only show approximations of irrational numbers and why some calculations can never be exact.

In the next topic, we'll explore operations on real numbers and discover how to work with both rational and irrational numbers in mathematical operations. 🚀
`,
  quiz: {
    questions: [
      ...easyQuestions,
      ...mediumQuestions
    ]
  }
};