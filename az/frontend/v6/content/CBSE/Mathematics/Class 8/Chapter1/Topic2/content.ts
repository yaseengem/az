import { QuizQuestion, TopicQuiz, TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic2Content: TopicContent = {
    id: 'cl8_ch1_t2',
    topicNumber: 2,
    topicName: 'Operations: addition, subtraction, multiplication, division',
    duration: 45,
    description: 'Master the four basic operations on rational numbers: addition, subtraction, multiplication, and division, with rules, examples, and applications.',
    explanation: `
# Operations on Rational Numbers (Class 8, Chapter 1, Topic 2) ➕➖✖️➗

Rational numbers are numbers that can be written as a fraction where the numerator and denominator are both integers, and the denominator is not zero. In this topic, we will learn how to perform the four basic operations—addition, subtraction, multiplication, and division—on rational numbers. Understanding these operations is essential for solving real-life problems and for higher mathematics. Let's explore each operation in detail, with examples, rules, and tips! 🌟

## 1. Addition of Rational Numbers ➕

### Rule:
To add two rational numbers, make their denominators the same (find the Least Common Denominator), then add the numerators.

### Example 1:
2⁄5 + 1⁄5 = 3⁄5

### Example 2:
3⁄4 + 2⁄3 = 9⁄12 + 8⁄12 = 17⁄12

### Adding Negative Rational Numbers:
-2⁄7 + 3⁄7 = 1⁄7

### Adding Mixed Signs:
5⁄6 + (−1⁄2) = 5⁄6 − 3⁄6 = 2⁄6 = 1⁄3

**Tip:** Always convert to a common denominator before adding.

## 2. Subtraction of Rational Numbers ➖

### Rule:
To subtract, add the additive inverse (opposite) of the number being subtracted.

### Example 1:
7⁄8 − 3⁄8 = 4⁄8 = 1⁄2

### Example 2:
5⁄6 − 1⁄4 = 10⁄12 − 3⁄12 = 7⁄12

### Subtracting Negative Numbers:
2⁄3 − (−1⁄3) = 2⁄3 + 1⁄3 = 1

**Tip:** Subtracting a negative is the same as adding a positive.

## 3. Multiplication of Rational Numbers ✖️

### Rule:
Multiply the numerators, multiply the denominators.

### Example 1:
2⁄5 × 3⁄7 = 6⁄35

### Example 2:
−4⁄9 × 3⁄8 = −12⁄72 = −1⁄6

### Multiplying by Reciprocals:
5⁄6 × 6⁄5 = 1

**Tip:** The product of two rational numbers is always rational.

## 4. Division of Rational Numbers ➗

### Rule:
To divide by a rational number, multiply by its reciprocal (flip numerator and denominator).

### Example 1:
3⁄4 ÷ 2⁄5 = 3⁄4 × 5⁄2 = 15⁄8

### Example 2:
−7⁄9 ÷ 1⁄3 = −7⁄9 × 3 = −21⁄9 = −7⁄3

### Dividing by Negative Numbers:
2⁄3 ÷ −4⁄5 = 2⁄3 × −5⁄4 = −10⁄12 = −5⁄6

**Tip:** Never divide by zero! Division by zero is undefined. 🚫

## Important Points to Remember 📌
- Always simplify your answers.
- The sum, difference, product, and quotient (except by zero) of two rational numbers is always a rational number.
- Use the number line to visualize addition and subtraction.
- Multiplying or dividing two negative rational numbers gives a positive result.
- Multiplying or dividing a positive and a negative rational number gives a negative result.

## Real-Life Applications 🌍
- Sharing food or money among friends (fractions)
- Cooking recipes (measuring ingredients)
- Dividing distances, time, or resources
- Science experiments and data analysis

## Sample Questions & Practice 📝
1. 3⁄5 + 2⁄7 = ?
2. 4⁄9 − 1⁄3 = ?
3. −2⁄3 × 3⁄4 = ?
4. 5⁄6 ÷ 1⁄2 = ?
5. If you have ¾ of a cake and eat ½, how much is left?
6. If a recipe needs ⅔ cup of sugar and you have ⅓, how much more do you need?
7. If you split ⅚ of a pizza among 2 friends, how much does each get?

## Summary ✨
- Addition: Make denominators same, add numerators.
- Subtraction: Add the opposite.
- Multiplication: Multiply numerators and denominators.
- Division: Multiply by the reciprocal.
- Always simplify answers and check for negative signs.
- Rational numbers are closed under all four operations (except division by zero).

Keep practicing these operations to become a rational number expert! 💪
`,
    quiz: {
        questions: [
            ...easyQuestions,
            ...mediumQuestions
        ]
    }
}; 