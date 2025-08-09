import { QuizQuestion, TopicQuiz, TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic3Content: TopicContent = {
    id: 'cl10_ch1_t3',
    topicNumber: 3,
    topicName: 'Revisiting irrational numbers',
    duration: 60,
    description: 'Explore the concept of irrational numbers, their properties, decimal expansions, and examples.',
    explanation: `
# Revisiting Irrational Numbers 🌀

Irrational numbers are a fascinating and essential part of mathematics. They are real numbers that cannot be written as a simple fraction (a/b), where a and b are integers and b ≠ 0. In this topic, we will revisit what makes a number irrational, how to recognize them, and why they are important in mathematics and real life.

## What Are Irrational Numbers? 🤔

A number is called **irrational** if it cannot be expressed as a ratio of two integers. In other words, irrational numbers cannot be written as a fraction or a terminating or repeating decimal. Their decimal expansion goes on forever without repeating any pattern.

### Examples of Irrational Numbers
- **√2** (the square root of 2): Its decimal expansion is 1.4142135... and it never ends or repeats.
- **π (pi)**: The value of π is approximately 3.141592653..., and it never terminates or repeats.
- **e** (Euler's number): Approximately 2.718281828..., also non-terminating and non-repeating.
- **√3, √5, √7, ...**: The square roots of non-perfect squares are always irrational.

### What Is NOT Irrational?
- Numbers like 1/2, 0.75, 3, -4, or 0.333... (repeating) are **rational** because they can be written as a fraction or have a repeating/terminating decimal expansion.

## Properties of Irrational Numbers 🌟
- **Non-terminating, non-repeating decimals**: The decimal expansion never ends and never forms a repeating pattern.
- **Cannot be written as a/b**: There are no two integers a and b (with b ≠ 0) such that the number equals a/b.
- **Dense in the real numbers**: Between any two real numbers, there is always at least one irrational number (and, in fact, infinitely many!).
- **Irrational + Rational = Irrational** (unless the rational is zero): For example, π + 1 is irrational.
- **Irrational × Rational = Irrational** (unless the rational is zero): For example, π × 2 is irrational.

## Decimal Expansions: How to Recognize Irrational Numbers 🔍

- **Terminating decimals** (like 0.5, 0.25) are always rational.
- **Repeating decimals** (like 0.333..., 0.142857142857...) are also rational.
- **Non-terminating, non-repeating decimals** (like π, √2) are irrational.

### Example: Is 0.101001000100001... irrational?
Yes! This decimal never terminates and never repeats a pattern, so it is irrational.

## Famous Irrational Numbers and Their Importance 🏆

- **π (pi)**: Used in geometry, trigonometry, and science to calculate the circumference and area of circles, and appears in many formulas.
- **e**: The base of natural logarithms, used in growth and decay problems, finance, and calculus.
- **Golden Ratio (φ)**: Approximately 1.618033988..., found in art, architecture, and nature.

## Why Do Irrational Numbers Matter? 🌍

Irrational numbers fill the gaps between rational numbers on the number line. Without them, the real number system would be incomplete. They are crucial in mathematics, science, engineering, and even art!

## How to Prove a Number Is Irrational? 🧠

- **Proof by contradiction**: Assume the number is rational (can be written as a/b), then show this leads to a contradiction.
- **Example: Proving √2 is irrational**
  1. Assume √2 = a/b, where a and b are integers with no common factors.
  2. Then 2 = a²/b², so a² = 2b².
  3. This means a² is even, so a must be even. Let a = 2k.
  4. Substitute: (2k)² = 2b² → 4k² = 2b² → 2k² = b², so b² is even, so b is even.
  5. But if both a and b are even, they have a common factor of 2, which contradicts our assumption.
  6. Therefore, √2 is irrational.

## More Examples and Practice Questions 📝

1. **Is √5 rational or irrational?**
   - √5 is irrational because it cannot be written as a fraction and its decimal expansion never repeats.
2. **Is 0.272727... rational or irrational?**
   - Rational, because it repeats (27).
3. **Is π + 2 rational or irrational?**
   - Irrational, because the sum of an irrational and a rational (not zero) is irrational.
4. **Is √16 irrational?**
   - No, √16 = 4, which is rational.
5. **Is 0.123456789101112... irrational?**
   - Yes, because the decimal never repeats or terminates.

## Real-Life Applications of Irrational Numbers 🌐
- **Engineering**: Calculating with π and e in formulas for waves, circuits, and growth.
- **Architecture**: The golden ratio is used in design for beauty and balance.
- **Nature**: Patterns in flowers, shells, and galaxies often involve irrational numbers.

## Summary 🎯
- **Irrational numbers** cannot be written as a/b, have non-terminating, non-repeating decimals, and are essential for a complete real number system.
- Famous examples include √2, π, and e.
- Recognize them by their decimal expansion and inability to be written as a fraction.
- They are everywhere in mathematics, science, and the world around us!

## Sample Questions for Practice 📝
1. Is √3 rational or irrational?
2. Is 0.888... rational or irrational?
3. Is π/2 rational or irrational?
4. Is 1.4142135... (with no repeating pattern) rational or irrational?
5. Is 7/8 rational or irrational?

Keep exploring irrational numbers, and you'll see how they make mathematics richer and more interesting! ✨
`,
    quiz: {
        questions: [
            ...easyQuestions,
            ...mediumQuestions
        ]
    }
}; 