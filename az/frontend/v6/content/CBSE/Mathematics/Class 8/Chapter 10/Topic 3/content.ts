import { TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic3Content: TopicContent = {
    id: 'cl8_ch10_t3',
    topicNumber: 3,
    topicName: "Negative Exponents",
    duration: 45,
    description: "Learn about negative exponents, their meaning, and how to work with them in mathematical expressions.",
    explanation: `
# Negative Exponents 🔢

Negative exponents are a powerful way to represent very small numbers and reciprocals. Let's explore what they mean and how to work with them! 📚

## What are Negative Exponents? 🤔

A negative exponent indicates how many times to divide by the base number. In other words, a negative exponent means we take the reciprocal of the number raised to the positive exponent.

For any non-zero number a:
a⁻ⁿ = 1/aⁿ

For example:
- 2⁻³ = 1/2³ = 1/8
- 10⁻² = 1/10² = 1/100 = 0.01

## Rules for Working with Negative Exponents 📋

1. Converting to Positive Exponents:
   - Move the number with negative exponent to the denominator
   - Make the exponent positive
   Example: 2⁻³ = 1/2³

2. Multiplying Powers with Same Base:
   - Keep the base
   - Add the exponents (even if negative)
   Example: 2⁻² × 2⁻³ = 2⁻⁵

3. Dividing Powers with Same Base:
   - Keep the base
   - Subtract the exponents
   Example: 2⁻² ÷ 2⁻⁴ = 2² (because -2 - (-4) = -2 + 4 = 2)

4. Power to a Power:
   - Keep the base
   - Multiply the exponents
   Example: (2⁻²)³ = 2⁻⁶

## Common Examples and Applications 🌟

1. Decimal Representation:
   - 10⁻¹ = 1/10 = 0.1
   - 10⁻² = 1/100 = 0.01
   - 10⁻³ = 1/1000 = 0.001

2. Fractions to Negative Exponents:
   - 1/2 = 2⁻¹
   - 1/4 = 2⁻²
   - 1/8 = 2⁻³

3. Scientific Notation:
   - 0.001 = 1 × 10⁻³
   - 0.0025 = 2.5 × 10⁻³
   - 0.000001 = 1 × 10⁻⁶

## Step-by-Step Problem Solving 📝

Let's solve some examples together:

1. Simplify: 2⁻³ × 2⁻²
   - Add the exponents: -3 + (-2) = -5
   - Result: 2⁻⁵ = 1/2⁵ = 1/32

2. Simplify: (3⁻²)³
   - Multiply exponents: -2 × 3 = -6
   - Result: 3⁻⁶ = 1/3⁶ = 1/729

3. Convert 0.0001 to scientific notation
   - Move decimal 4 places right: 1.0000
   - Count moves: 4
   - Result: 1 × 10⁻⁴

## Real-World Applications 🌍

1. Scientific Measurements:
   - Atomic radius: 10⁻¹⁰ meters
   - Mass of electron: 9.1 × 10⁻³¹ kilograms

2. Financial Calculations:
   - Very small percentages
   - Microscopic measurements

3. Computer Science:
   - Data storage units
   - Processing speeds

## Common Mistakes to Avoid ⚠️

1. Forgetting the Reciprocal Rule:
   - INCORRECT: 2⁻³ = -8
   - CORRECT: 2⁻³ = 1/8

2. Adding Instead of Multiplying in Power to Power:
   - INCORRECT: (2⁻³)² = 2⁻⁵
   - CORRECT: (2⁻³)² = 2⁻⁶

3. Wrong Sign in Division:
   - INCORRECT: 2⁻³ ÷ 2⁻² = 2⁻¹
   - CORRECT: 2⁻³ ÷ 2⁻² = 2⁻¹ (because -3 - (-2) = -1)

## Practice Tips 💡

1. Convert Between Forms:
   - Practice converting between fractions and negative exponents
   - Practice converting between decimals and scientific notation

2. Use Real Numbers:
   - Start with simple bases like 2, 3, 5, 10
   - Work up to more complex numbers

3. Check Your Work:
   - Convert answers to decimals
   - Use a calculator to verify results

## Sample Problems with Solutions 📚

1. Problem: Convert 1/16 to negative exponent form
   Solution: 
   - 16 = 2⁴
   - 1/16 = 2⁻⁴

2. Problem: Simplify 3⁻² × 3⁻³
   Solution:
   - Add exponents: -2 + (-3) = -5
   - Result: 3⁻⁵ = 1/3⁵ = 1/243

3. Problem: Convert 0.0001 to scientific notation
   Solution:
   - Move decimal 4 places right: 1.0000
   - Count moves: 4
   - Result: 1 × 10⁻⁴

## Quick Reference Guide 📌

1. Basic Rules:
   - a⁻ⁿ = 1/aⁿ
   - (a⁻ⁿ)ᵐ = a⁻ⁿᵐ
   - a⁻ⁿ × a⁻ᵐ = a⁻(ⁿ⁺ᵐ)
   - a⁻ⁿ ÷ a⁻ᵐ = a⁻(ⁿ⁻ᵐ)

2. Common Values:
   - 10⁻¹ = 0.1
   - 10⁻² = 0.01
   - 10⁻³ = 0.001

3. Conversion Tips:
   - Count decimal places for scientific notation
   - Use factors for converting fractions

## Summary ✨

Negative exponents are:
- A way to represent reciprocals and very small numbers
- Used in scientific notation
- Follow specific rules for operations
- Important in real-world applications

Remember:
- Always convert negative exponents to positive when unsure
- Check answers by converting to decimals
- Practice with real-world examples
- Use scientific notation for very small numbers

Keep practicing these concepts, and you'll become proficient in working with negative exponents! 🎯
`,
    quiz: {
        questions: [
            ...easyQuestions,
            ...mediumQuestions
        ]
    }
}; 