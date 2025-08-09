import { QuizQuestion, TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic1Content: TopicContent = {
    id: 'cl8_ch10_t1',
    topicNumber: 1,
    topicName: "Laws of exponents",
    duration: 60,
    description: "Learn the fundamental laws and properties of exponents, including multiplication, division, and power rules.",
    explanation: `
# Laws of Exponents 🔢

Welcome to the fascinating world of exponents! In this topic, we'll explore the fundamental laws that make working with exponents easier and more efficient. Let's dive in! 📚

## 1. What are Exponents? 🤔

An exponent (or power) shows how many times a number is multiplied by itself.
For example:
- 2³ means 2 × 2 × 2 = 8
- 5² means 5 × 5 = 25
- 3⁴ means 3 × 3 × 3 × 3 = 81

## 2. Basic Laws of Exponents 📋

### 2.1 Multiplication Law ✖️
When multiplying powers with the same base, add the exponents:
- xᵃ × xᵇ = xᵃ⁺ᵇ
- Example: 2³ × 2⁴ = 2³⁺⁴ = 2⁷

### 2.2 Division Law ➗
When dividing powers with the same base, subtract the exponents:
- xᵃ ÷ xᵇ = xᵃ⁻ᵇ
- Example: 5⁶ ÷ 5² = 5⁶⁻² = 5⁴

### 2.3 Power of a Power Law 🔄
When raising a power to another power, multiply the exponents:
- (xᵃ)ᵇ = xᵃˣᵇ
- Example: (2³)² = 2³ˣ² = 2⁶

### 2.4 Power of a Product Law 🎯
When raising a product to a power:
- (x × y)ⁿ = xⁿ × yⁿ
- Example: (2 × 3)² = 2² × 3² = 4 × 9 = 36

## 3. Special Cases 🌟

### 3.1 Zero Exponent Rule
Any number (except 0) raised to the power 0 equals 1:
- x⁰ = 1 (where x ≠ 0)
- Example: 7⁰ = 1, 100⁰ = 1

### 3.2 Power of 1
Any number raised to power 1 equals the number itself:
- x¹ = x
- Example: 5¹ = 5, 10¹ = 10

### 3.3 Negative Exponents
A negative exponent means the reciprocal of the positive exponent:
- x⁻ⁿ = 1/xⁿ
- Example: 2⁻³ = 1/2³ = 1/8

## 4. Practical Applications 🌍

### 4.1 Scientific Notation
- Used to write very large or very small numbers
- Example: 1,000,000 = 10⁶
- Example: 0.000001 = 10⁻⁶

### 4.2 Real-World Examples
1. Computer Storage: 
   - 2¹⁰ bytes = 1 kilobyte
   - 2²⁰ bytes = 1 megabyte

2. Population Growth:
   - If population doubles every decade: 1000 × 2³ after 30 years

## 5. Problem-Solving Tips 💡

1. Always identify the base and exponent clearly
2. Look for same bases when multiplying or dividing
3. Remember special cases (0 and 1 exponents)
4. Break down complex expressions step by step

## 6. Common Mistakes to Avoid ⚠️

1. Don't add exponents when multiplying different bases
   - Wrong: 2³ × 3² = 5⁵
   - Correct: 2³ × 3² = 8 × 9 = 72

2. Don't multiply exponents when adding same bases
   - Wrong: 2³ + 2² = 2⁶
   - Correct: 2³ + 2² = 8 + 4 = 12

3. Don't forget parentheses in power of power
   - (2³)² ≠ 2³²
   - (2³)² = 2⁶ = 64

## 7. Practice Examples 📝

Let's solve some examples:

1. Simplify: 2⁴ × 2³
   - Solution: 2⁴⁺³ = 2⁷ = 128

2. Simplify: 5⁵ ÷ 5²
   - Solution: 5⁵⁻² = 5³ = 125

3. Simplify: (3²)⁴
   - Solution: 3²ˣ⁴ = 3⁸ = 6,561

4. Simplify: (2 × 4)³
   - Solution: 2³ × 4³ = 8 × 64 = 512

## Summary 📌

1. Key Laws:
   - Multiplication: Add exponents (same base)
   - Division: Subtract exponents (same base)
   - Power of Power: Multiply exponents
   - Power of Product: Apply power to each factor

2. Special Rules:
   - x⁰ = 1 (x ≠ 0)
   - x¹ = x
   - x⁻ⁿ = 1/xⁿ

3. Remember:
   - Always check the base
   - Follow order of operations
   - Use parentheses when needed
   - Break down complex problems

Keep practicing these laws, and you'll become a master of exponents! 🎯
`,
    quiz: {
        questions: [
            ...easyQuestions,
            ...mediumQuestions
        ]
    }
}; 