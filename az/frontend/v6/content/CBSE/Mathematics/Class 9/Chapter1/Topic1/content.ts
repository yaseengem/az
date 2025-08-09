// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 9\Chapter1\Topic1\content.ts
import { generateId } from '../../../../../../app/utils/idGenerator';
import { QuizQuestion, TopicQuiz, TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic1Content: TopicContent = {
  id: 'cl9_ch1_t1',
  topicNumber: 1,
  topicName: "Introduction to Number Systems",
  duration: 45,
  description: "Overview of Number Systems and their properties with focus on Natural Numbers, Whole Numbers, Integers, and Rational Numbers",
  explanation: `
# Introduction to Number Systems 🌟

Number systems form the foundation of mathematics! 🧱 Understanding different types of numbers helps us solve various mathematical problems and apply mathematics to real-life situations. In this topic, we'll explore the fundamental number systems that build up to our understanding of real numbers. Let's dive in! 🚀

## Evolving Number Systems 📈

The concept of numbers has evolved over centuries to meet human needs. From basic counting to complex calculations, different number systems were developed to solve increasingly sophisticated problems:

## Natural Numbers (ℕ) 🌿
- **Definition**: These are the numbers used for counting objects, starting from 1: ℕ = {1, 2, 3, ...}.
- **Key Properties** 🔍:
  * **Closed under addition and multiplication**: Adding or multiplying two natural numbers always gives another natural number. For example, 2 + 3 = 5 (ℕ), and 2 × 3 = 6 (ℕ).
  * **Not closed under subtraction or division**: Subtracting a larger number from a smaller one (e.g., 3 - 5 = -2) or dividing unevenly (e.g., 3 ÷ 2 = 1.5) doesn't result in a natural number.
  * **Well-ordered**: Every subset of natural numbers has a smallest element.
- **Examples** 📌: 1 (one book 📚), 2 (two pens ✏️), 3 (three students 👨‍🎓), 42, 100.
- **Sample Question** ❓: If a classroom has 24 students and 5 more join, how many students are there now? (Answer: 29, a natural number.)

## Whole Numbers (𝕎) 🌍
- **Definition**: Natural numbers including zero: 𝕎 = {0, 1, 2, 3, ...}.
- **Key Properties** 🔍:
  * **Includes zero**: Zero represents the concept of "nothing" and serves as the additive identity (e.g., 5 + 0 = 5).
  * **Closed under addition and multiplication**: Like natural numbers, but with additional properties due to zero.
  * **Not closed under subtraction**: For example, 3 - 5 = -2 isn't a whole number.
- **Examples** 📌: 0 (empty box 📦), 1, 2, 3, ...
- **Sample Question** ❓: If you have 7 chocolates 🍫 and eat all of them, how many do you have left? (Answer: 0, a whole number but not a natural number.)

## Integers (ℤ) 🔢
- **Definition**: Whole numbers and their negatives: ℤ = {..., -3, -2, -1, 0, 1, 2, 3, ...}.
- **Key Properties** 🔍:
  * **Closed under addition, subtraction, and multiplication**: For example, -2 + 3 = 1 (ℤ), and -2 × 3 = -6 (ℤ).
  * **Additive inverse**: Every integer has an opposite (e.g., -3 + 3 = 0).
  * **Ordered**: For any two integers, one is always greater than, equal to, or less than the other.
- **Examples** 📌: -5 (temperature below zero ❄️), -1 (loss of ₹1 💰), 0 (neutral point), 3, 42.
- **Sample Question** ❓: If the temperature drops by 7°C from 3°C, what is the new temperature? (Answer: -4°C, an integer.)

## Rational Numbers (ℚ) 🧮
- **Definition**: Numbers that can be expressed as fractions (p/q, where p and q are integers and q ≠ 0): ℚ = {p/q | p, q ∈ ℤ, q ≠ 0}.
- **Key Properties** 🔍:
  * **Closed under addition, subtraction, multiplication, and division** (except division by zero)
  * **Dense**: Between any two rational numbers, there are infinitely many more rational numbers.
  * **Decimal representation**: Always terminating or repeating.
- **Examples** 📌: ½ (half a chocolate bar 🍫), -¾, 5 (as 5/1), 0.75, -1⅓, 0.333... (⅓).
- **Sample Question** ❓: If you divide a pizza 🍕 into 5 equal parts and take 3 parts, what fraction of the pizza do you have? (Answer: ⅗, a rational number.)

## Number Line Representation 📊
The number line is a powerful visual tool for understanding number systems:
- Each point on the line corresponds to a unique number
- Numbers increase from left to right
- ℕ occupies only positive whole number points
- 𝕎 includes 0 and all positive whole number points
- ℤ covers all whole number points (positive, zero, and negative)
- ℚ includes all points that can be expressed as fractions

## The Need for Expanded Number Systems 🔍
Each number system developed to address limitations of the previous system:
- Natural numbers (ℕ) are great for counting but can't represent nothingness
- Whole numbers (𝕎) include zero but can't represent debts or below-zero temperatures
- Integers (ℤ) include negative numbers but can't represent parts or divisions
- Rational numbers (ℚ) include fractions but, as we'll see in the next topic, can't represent certain values like √2 or π

## Practice with Identifying Number Types 🏋️‍♀️
Let's practice identifying which number system(s) each number belongs to:
1. 15: ℕ, 𝕎, ℤ, ℚ
2. 0: 𝕎, ℤ, ℚ
3. -7: ℤ, ℚ
4. 2.5: ℚ
5. ⅞: ℚ

## Summary ✨
In this introduction, we've explored the foundational number systems:
- **Natural Numbers (ℕ)**: For counting (1, 2, 3, ...)
- **Whole Numbers (𝕎)**: Natural numbers plus zero (0, 1, 2, ...)
- **Integers (ℤ)**: Whole numbers and their negatives (..., -2, -1, 0, 1, 2, ...)
- **Rational Numbers (ℚ)**: Numbers expressible as fractions (p/q)

Each system builds upon the previous one, addressing its limitations and adding new capabilities. In the next topics, we'll explore irrational numbers, which complete our understanding of the real number system.

### Additional Examples and Sample Questions:
1. **Example**: The temperature in Delhi was 35°C during the day but dropped to 22°C at night. What was the temperature change? (Answer: -13°C, an integer)
2. **Example**: In a cricket match, a team scored 287 runs and won by 42 runs. How many runs did the opposing team score? (Answer: 245 runs)
3. **Question**: Which number system would you use to represent your bank balance if you have overdrawn your account by ₹500? (Answer: Integers, specifically ℤ⁻, negative integers)
4. **Question**: If you mix ¾ cup of flour with ¼ cup of sugar, how much mixture do you have? (Answer: 1 cup, a rational number)
`,
  quiz: {
    questions: [
      ...easyQuestions,
      ...mediumQuestions
    ]
  }
};
