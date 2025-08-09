import { QuizQuestion, TopicQuiz, TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic1Content: TopicContent = {
    id: 'cl8_ch1_t1',
    topicNumber: 1,
    topicName: 'Properties of rational numbers',
    duration: 45,
    description: 'Explore the properties of rational numbers, including closure, commutativity, associativity, identity, and inverse, with examples and applications.',
    explanation: `
# Properties of Rational Numbers (Class 8, Chapter 1, Topic 1) 🧮

Rational numbers are numbers that can be written as a fraction, where the numerator and denominator are both integers and the denominator is not zero. In this topic, we will explore the important properties of rational numbers, which help us perform operations and solve problems efficiently. Let's use symbols like √, π, and more to make learning fun! 🎉

## What are Rational Numbers? 🤔
A rational number is any number that can be expressed as a fraction like ⅔, where both the top and bottom are integers and the bottom is not zero. Examples include ⅔, -5 (which is -5/1), and 0.75 (which is ¾).

### Examples:
- ⅞ is rational (both 7 and 8 are integers, 8 ≠ 0)
- -3 is rational (can be written as -3/1)
- 0 is rational (can be written as 0/5)
- 2.5 is rational (can be written as ⁵⁄₂)
- 0.333... = ⅓ is rational (repeating decimals are rational) 🔁
- √16 = 4 is rational, but √2 is not (irrational) 🧩
- π is not rational (irrational) 🍰

## Key Properties of Rational Numbers 🔑

### 1. Closure Property 🔒
- **Addition**: The sum of any two rational numbers is always a rational number.
  - Example: ½ + ⅓ = ⅚ (rational)
- **Subtraction**: The difference of any two rational numbers is always a rational number.
  - Example: ¾ - ½ = ¼ (rational)
- **Multiplication**: The product of any two rational numbers is always a rational number.
  - Example: ⅖ × ³⁄₇ = ⁶⁄₃₅ (rational)
- **Division**: The quotient of two rational numbers (except division by zero) is always a rational number.
  - Example: ⁴⁄₅ ÷ ⅔ = ⁴⁄₅ × ³⁄₂ = ¹²⁄₁₀ = ⁶⁄₅ (rational)
  - Note: Division by 0 is not allowed! 🚫

### 2. Commutative Property 🔄
- **Addition**: a + b = b + a
  - Example: ⅔ + ⅚ = ⅚ + ⅔
- **Multiplication**: a × b = b × a
  - Example: ¾ × ⅖ = ⅖ × ¾
- **Note**: Subtraction and division are NOT commutative.

### 3. Associative Property 🤝
- **Addition**: (a + b) + c = a + (b + c)
  - Example: (½ + ⅓) + ¼ = ½ + (⅓ + ¼)
- **Multiplication**: (a × b) × c = a × (b × c)
  - Example: (⅔ × ³⁄₅) × ⁴⁄₇ = ⅔ × (³⁄₅ × ⁴⁄₇)
- **Note**: Subtraction and division are NOT associative.

### 4. Identity Property 🆔
- **Additive Identity**: 0 is the additive identity. For any rational number a, a + 0 = a.
  - Example: ⁷⁄₉ + 0 = ⁷⁄₉
- **Multiplicative Identity**: 1 is the multiplicative identity. For any rational number a, a × 1 = a.
  - Example: ⅝ × 1 = ⅝

### 5. Inverse Property 🔄
- **Additive Inverse**: For every rational number a, there exists -a such that a + (-a) = 0.
  - Example: Additive inverse of ⅗ is -⅗.
- **Multiplicative Inverse**: For every nonzero rational number a, there exists 1/a such that a × 1/a = 1.
  - Example: Multiplicative inverse of ⅖ is ⁵⁄₂.

## Representation of Rational Numbers on the Number Line 📏
Rational numbers can be represented on the number line. For example, ¾ is between 0 and 1. Negative rational numbers are to the left of zero, and positive ones are to the right. Try marking -⅔ on a number line! 🗺️

### Example:
- Mark -⅔ on the number line: Divide the segment between 0 and -1 into 3 equal parts and count 2 parts to the left of 0.
- Mark ⁵⁄₄ (improper fraction) to the right of 1.

## Sample Questions & Practice 📝
1. What is the additive inverse of ⅝? (Answer: -⅝)
2. Is the product of two rational numbers always rational? (Answer: Yes)
3. Find the multiplicative inverse of -3. (Answer: -⅓)
4. If a = ⅖ and b = ³⁄₇, what is a + b? (Answer: ²⁹⁄₃₅)
5. Is subtraction of rational numbers commutative? (Answer: No)
6. Is √9 rational? (Answer: Yes, because √9 = 3)
7. Is π rational? (Answer: No, it is irrational)

## Real-Life Applications 🌍
- Sharing pizza slices 🍕 (fractions)
- Measuring ingredients in recipes 🥄
- Dividing money among friends 💸
- Calculating distances and time ⏱️
- Science experiments using measurements ⚗️

## Summary ✨
- Rational numbers can be written as fractions like ⅔, where both numbers are integers and the bottom is not zero.
- They are closed under addition, subtraction, multiplication, and division (except by zero).
- Addition and multiplication are commutative and associative.
- 0 is the additive identity, 1 is the multiplicative identity.
- Every rational number has an additive inverse; every nonzero rational number has a multiplicative inverse.
- Rational numbers can be represented on the number line and are used in many real-life situations.
- Some numbers like √2 and π are not rational (irrational numbers). 🚫

Keep practicing to master the properties of rational numbers! 💪
`,
    quiz: {
        questions: [
            ...easyQuestions,
            ...mediumQuestions
        ]
    }
}; 