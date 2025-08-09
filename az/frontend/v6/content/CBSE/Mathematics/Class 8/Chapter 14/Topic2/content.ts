import { TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic2Content: TopicContent = {
    id: 'cl8_ch14_t2',
    topicNumber: 2,
    topicName: "Divisibility tests",
    duration: 45,
    description: "Understanding and applying divisibility rules for numbers 2 through 11, with practical applications and problem-solving techniques.",
    explanation: `
# Divisibility Tests 🔢

Divisibility tests are special rules that help us quickly determine if a number is divisible by another number without actually performing the division. These tests make calculations faster and help in factorization, finding LCM and HCF, and solving many mathematical problems. Let's explore these fascinating rules! 🎯

## Basic Concepts 📚

Before diving into specific tests, let's understand what divisibility means:
- A number a is divisible by another number b if there exists a whole number k such that a = b × k
- When a number is divisible by another number, the division results in a whole number with no remainder
- For example, 15 is divisible by 3 because 15 = 3 × 5

## Common Divisibility Tests 🧮

Let's explore the divisibility tests for different numbers:

### Divisibility by 2 ✌️
- **Rule**: A number is divisible by 2 if its last digit is divisible by 2
- **Last digit must be**: 0, 2, 4, 6, or 8
- **Example**: 3456 is divisible by 2 because 6 is divisible by 2
- **Why it works**: In our decimal system, any number can be split into tens and ones. The tens part is always divisible by 2, so only the ones digit matters.

### Divisibility by 3 🔄
- **Rule**: A number is divisible by 3 if the sum of its digits is divisible by 3
- **Example**: Is 423 divisible by 3?
  * Sum of digits = 4 + 2 + 3 = 9
  * 9 is divisible by 3, so 423 is divisible by 3
- **Why it works**: This is based on the fact that 10 ≡ 1 (mod 3), so each place value contributes just the digit value to the remainder.

### Divisibility by 4 🎲
- **Rule**: A number is divisible by 4 if the number formed by its last two digits is divisible by 4
- **Example**: Is 1524 divisible by 4?
  * Last two digits: 24
  * 24 is divisible by 4, so 1524 is divisible by 4
- **Why it works**: Since 100 is divisible by 4, only the last two digits matter.

### Divisibility by 5 🖐️
- **Rule**: A number is divisible by 5 if its last digit is 0 or 5
- **Example**: 1235 is divisible by 5 because it ends in 5
- **Why it works**: In decimal system, only numbers ending in 0 or 5 can be multiples of 5.

### Divisibility by 6 📊
- **Rule**: A number is divisible by 6 if it is divisible by both 2 and 3
- **Example**: Is 426 divisible by 6?
  * It's even (divisible by 2)
  * Sum of digits = 4 + 2 + 6 = 12 is divisible by 3
  * Therefore, 426 is divisible by 6
- **Why it works**: 6 = 2 × 3, and these are coprime numbers.

### Divisibility by 8 🎯
- **Rule**: A number is divisible by 8 if the number formed by its last three digits is divisible by 8
- **Example**: Is 3216 divisible by 8?
  * Last three digits: 216
  * 216 ÷ 8 = 27 (no remainder)
  * Therefore, 3216 is divisible by 8
- **Why it works**: Since 1000 is divisible by 8, only the last three digits matter.

### Divisibility by 9 🔄
- **Rule**: A number is divisible by 9 if the sum of its digits is divisible by 9
- **Example**: Is 729 divisible by 9?
  * 7 + 2 + 9 = 18
  * 1 + 8 = 9
  * Therefore, 729 is divisible by 9
- **Why it works**: Similar to divisibility by 3, based on the fact that 10 ≡ 1 (mod 9).

### Divisibility by 10 🎯
- **Rule**: A number is divisible by 10 if its last digit is 0
- **Example**: 1230 is divisible by 10
- **Why it works**: In decimal system, only numbers ending in 0 can be multiples of 10.

### Divisibility by 11 🔄
- **Rule**: A number is divisible by 11 if the alternating sum of its digits is divisible by 11
- **Example**: Is 143 divisible by 11?
  * Alternating sum = 1 - 4 + 3 = 0
  * 0 is divisible by 11, so 143 is divisible by 11
- **Why it works**: Based on the fact that 10 ≡ -1 (mod 11).

## Combined Divisibility Tests 🎲

Sometimes we need to check divisibility by numbers that are products of the above numbers:

1. **For 12 (= 3 × 4)**:
   - Check divisibility by 3 (sum of digits)
   - Check divisibility by 4 (last two digits)
   Example: 324 is divisible by 12 because:
   - 3 + 2 + 4 = 9 (divisible by 3)
   - 24 is divisible by 4

2. **For 15 (= 3 × 5)**:
   - Check divisibility by 3 (sum of digits)
   - Check divisibility by 5 (ends in 0 or 5)
   Example: 450 is divisible by 15 because:
   - 4 + 5 + 0 = 9 (divisible by 3)
   - Ends in 0 (divisible by 5)

## Practical Applications 🌟

Divisibility tests have many practical applications:

1. **Simplifying Fractions**:
   - Before dividing large numbers, check if they share common factors
   - Example: Simplifying 468/624
   - Both numbers are even (divisible by 2)
   - Both sum to multiples of 3
   - Can quickly find common factors

2. **Finding Factors**:
   - Quickly identify possible factors of a number
   - Example: For 360, check divisibility by small numbers
   - Helps in prime factorization

3. **Verifying Calculations**:
   - Check if multiplication results are reasonable
   - Example: If multiplying by 9, sum of digits should be divisible by 9

## Sample Problems and Solutions 📝

1. **Problem**: Is 23,562 divisible by 6?
   **Solution**:
   - Check if even: Yes (ends in 2)
   - Check if divisible by 3: 2+3+5+6+2 = 18 (divisible by 3)
   - Therefore, divisible by 6

2. **Problem**: Find the smallest 4-digit number divisible by both 8 and 9.
   **Solution**:
   - LCM(8,9) = 72
   - First multiple of 72 ≥ 1000 is 1008
   - Verify: 1008 ÷ 8 = 126, 1+0+0+8 = 9 (divisible by 9)

## Quick Tips for Mental Math 🧠

1. **For testing divisibility by 3 or 9**:
   - Group digits to make sums easier
   - Example: 1,234,567
   - Group: (12+34+56+7) = 109
   - 1+0+9 = 10
   - 1+0 = 1 (not divisible by 3 or 9)

2. **For testing divisibility by 11**:
   - Group digits in pairs from right
   - Take alternating sums and differences
   - Example: 45,254
   - (54) - (52) + (4) = 54 - 52 + 4 = 6
   - Not divisible by 11

## Summary ✨

Divisibility tests are powerful tools that help us:
- Quickly determine if one number divides another
- Simplify calculations and check answers
- Find factors and solve number problems
- Understand number properties and patterns

Remember:
- Each divisibility test has a logical basis
- Some tests can be combined for larger numbers
- Practice makes these tests second nature
- These tests save time in calculations and problem-solving

### Practice Tips 🎯
1. Start with single-digit divisors
2. Practice with progressively larger numbers
3. Combine tests for composite divisors
4. Use mental math whenever possible
5. Verify results with actual division when learning

Keep practicing these tests, and they'll become valuable tools in your mathematical toolkit! 🌟
`,
    quiz: {
        questions: [
            ...easyQuestions,
            ...mediumQuestions
        ]
    }
}; 