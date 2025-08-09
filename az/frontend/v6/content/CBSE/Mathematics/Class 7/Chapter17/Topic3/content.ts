import { TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic3Content: TopicContent = {
    id: 'cl7_ch17_t3',
    topicNumber: 3,
    topicName: 'Fun with numbers and puzzles',
    duration: 45,
    description: 'Explore interesting number patterns, puzzles, and tricks to make mathematics enjoyable and engaging.',
    explanation: `
# Fun with Numbers and Puzzles 🎲

Mathematics is not just about solving equations or memorizing formulas—it's also about discovering patterns, playing with numbers, and solving puzzles! In this topic, we will explore the fascinating world of number games, patterns, and mathematical puzzles that make learning math fun and exciting. Let's dive in and see how numbers can surprise and entertain us! 🚀

## 1. Number Patterns 🔢

Number patterns are sequences that follow a certain rule. Recognizing these patterns helps us predict the next numbers and understand how numbers are related.

### Example 1: Arithmetic Patterns
- **Sequence:** 2, 4, 6, 8, ...
- **Rule:** Add 2 to the previous number.
- **Next number:** 10

### Example 2: Geometric Patterns
- **Sequence:** 3, 6, 12, 24, ...
- **Rule:** Multiply by 2 each time.
- **Next number:** 48

### Example 3: Square Numbers
- **Sequence:** 1, 4, 9, 16, 25, ...
- **Rule:** Each number is the square of a natural number (1², 2², 3², ...).

### Example 4: Fibonacci Sequence
- **Sequence:** 0, 1, 1, 2, 3, 5, 8, ...
- **Rule:** Each number is the sum of the previous two numbers.

**Try it:** What is the next number in the sequence 5, 10, 20, 40, ...?
- *Answer: 80 (each number is multiplied by 2)*

## 2. Palindromic Numbers 🔄

A palindromic number reads the same forwards and backwards.
- **Examples:** 121, 1331, 12321
- **Non-examples:** 123, 1241

**Fun Fact:** The number 12321 is a palindrome because reversing its digits gives the same number.

## 3. Magic Squares 🧙‍♂️

A magic square is a grid where the sum of numbers in each row, column, and diagonal is the same.

### Example:
| 2 | 7 | 6 |
|---|---|---|
| 9 | 5 | 1 |
| 4 | 3 | 8 |

- The sum of each row, column, and diagonal is 15.

**Try it:** Can you create your own 3x3 magic square using numbers 1 to 9?

## 4. Number Puzzles and Riddles 🧩

Puzzles help us think logically and creatively. Here are some classic number puzzles:

### Puzzle 1: The Missing Number
- What is the missing number in the sequence: 7, 14, __, 28, 35?
- *Answer: 21 (add 7 each time)*

### Puzzle 2: The Age Riddle
- Riya is twice as old as her brother. If her brother is 7, how old is Riya?
- *Answer: 14*

### Puzzle 3: The Reverse Number
- If you reverse the digits of 73, what number do you get?
- *Answer: 37*

## 5. Special Numbers 🌟

### Perfect Squares and Cubes
- **Perfect Square:** A number that is the product of a number multiplied by itself (e.g., 25 = 5 × 5).
- **Perfect Cube:** A number that is the product of a number multiplied by itself twice (e.g., 27 = 3 × 3 × 3).

### Triangular Numbers
- Numbers that can form an equilateral triangle.
- **Sequence:** 1, 3, 6, 10, 15, ...
- **Formula:** n(n+1)/2
- **Example:** 6 is a triangular number because 1 + 2 + 3 = 6.

## 6. Divisibility Tricks 🤓

- **Divisible by 2:** Last digit is even (0, 2, 4, 6, 8).
- **Divisible by 3:** Sum of digits is divisible by 3.
- **Divisible by 5:** Last digit is 0 or 5.
- **Divisible by 9:** Sum of digits is divisible by 9.

**Example:** Is 234 divisible by 3?
- 2 + 3 + 4 = 9, which is divisible by 3, so yes!

## 7. Fun with Operations 🎲

- **Multiplying by 11:** For a 2-digit number ab, the result is a(a+b)b. Example: 23 × 11 = 253.
- **Adding consecutive numbers:** The sum of the first n odd numbers is n². Example: 1 + 3 + 5 = 9 = 3².

## 8. Puzzles with Patterns 🧠

### Example:
- What comes next: 1, 4, 9, 16, ...?
- *Answer: 25 (next perfect square)*

### Riddle:
- I am a number. I am less than 20 and a multiple of 3. What numbers can I be?
- *Answer: 3, 6, 9, 12, 15, 18*

## 9. Sample Questions for Practice 📝

1. Which number is both a square and a cube?
2. What is the next number in the pattern: 2, 4, 8, 16, ...?
3. If you add the digits of 1234, what is the sum?
4. What is the value of π (pi) up to two decimal places?
5. Which of the following is a triangular number: 6, 8, 10, 12?

## 10. Short Summary ✨

- Numbers can be fun when we look for patterns, play games, and solve puzzles.
- Recognizing patterns helps us predict and solve problems quickly.
- Puzzles and riddles develop logical thinking and creativity.
- Special numbers like palindromes, squares, cubes, and triangular numbers make math interesting.
- Practice with puzzles and patterns makes you a better problem solver!

Keep exploring, keep playing, and enjoy the magic of numbers! 🌈
`,
    quiz: {
        questions: [
            ...easyQuestions,
            ...mediumQuestions
        ]
    }
}; 