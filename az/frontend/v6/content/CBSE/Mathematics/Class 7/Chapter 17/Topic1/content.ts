import { TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic1Content: TopicContent = {
    id: 'cl7_ch17_t1',
    topicNumber: 1,
    topicName: 'Number patterns and sequences',
    duration: 45,
    description: 'Explore number patterns, sequences, and their applications in mathematics and puzzles.',
    explanation: `
# Number Patterns and Sequences 🔢

Number patterns and sequences are everywhere in mathematics and daily life! Recognizing and understanding these patterns helps us solve problems, make predictions, and develop logical thinking. In this topic, we will explore different types of number patterns, how to identify them, and how to use them to solve interesting puzzles and problems.

## What is a Sequence? 📈
A sequence is an ordered list of numbers that follow a specific rule. Each number in the sequence is called a term. For example, in the sequence 2, 4, 6, 8, ... each term increases by 2.

### Types of Sequences
- **Arithmetic Sequence**: The difference between consecutive terms is constant. Example: 5, 8, 11, 14, ... (difference is +3)
- **Geometric Sequence**: Each term is multiplied by a constant to get the next term. Example: 3, 6, 12, 24, ... (multiplied by 2)
- **Fibonacci Sequence**: Each term is the sum of the two preceding terms. Example: 0, 1, 1, 2, 3, 5, 8, ...
- **Square Numbers**: 1, 4, 9, 16, 25, ... (each term is n²)
- **Triangular Numbers**: 1, 3, 6, 10, 15, ... (sum of first n natural numbers)

## How to Identify Patterns? 🕵️‍♂️
1. **Look for a Rule**: Check if the difference or ratio between terms is constant.
2. **Check for Alternating Patterns**: Sometimes, the pattern alternates (e.g., +2, -1, +2, -1, ...).
3. **Observe Position**: The value of each term may depend on its position (e.g., n² for the nth term).
4. **Use Tables or Diagrams**: Drawing can help visualize complex patterns.

## Examples and Explanations
- **Example 1**: What is the next term in 7, 14, 21, 28, ...?
  - This is an arithmetic sequence (+7 each time). Next term: 28 + 7 = 35.
- **Example 2**: Find the 5th term in 2, 4, 8, 16, ...
  - This is a geometric sequence (×2 each time). 5th term: 16 × 2 = 32.
- **Example 3**: What is the missing number in 1, 4, __, 16, 25?
  - These are square numbers. The missing number is 9 (3²).
- **Example 4**: The sequence is 1, 3, 6, 10, __. What comes next?
  - These are triangular numbers. Next term: 10 + 5 = 15.

## Real-Life Applications 🌍
- **Calendar Patterns**: Days of the week repeat every 7 days.
- **Nature**: Petal arrangements, pinecones, and shells often follow Fibonacci patterns.
- **Games and Puzzles**: Sudoku, magic squares, and logic puzzles use number patterns.
- **Banking**: Interest calculations use geometric sequences.

## Sample Questions
1. What is the 12th term of the sequence 5, 10, 15, ...?
2. If a pattern starts at 3 and each term is double the previous, what is the 6th term?
3. Find the missing number: 2, 5, 10, 17, __ (Pattern: n² + 1)
4. Which comes next: 1, 1, 2, 3, 5, 8, __?

## Tips for Solving Pattern Problems 📝
- Write out several terms to spot the rule.
- Check for addition, subtraction, multiplication, or division patterns.
- Try to express the nth term using a formula.
- Use logic and reasoning for puzzles.

## Short Summary ✨
Number patterns and sequences help us understand mathematical relationships and develop logical thinking. By practicing with different types of sequences and puzzles, you can improve your problem-solving skills and enjoy the beauty of mathematics! 🌟

### More Examples
- **Arithmetic**: 12, 17, 22, 27, ... (add 5)
- **Geometric**: 1, 3, 9, 27, ... (multiply by 3)
- **Fibonacci**: 2, 2, 4, 6, 10, ... (sum of previous two)

### Practice Puzzle
A snail climbs 3 cm every day and slips 2 cm every night. How many days will it take to climb a 10 cm wall?

## Summary Table
| Sequence Type      | Example         | Rule                |
|-------------------|-----------------|---------------------|
| Arithmetic        | 2, 5, 8, 11     | Add 3               |
| Geometric         | 3, 6, 12, 24    | Multiply by 2       |
| Square Numbers    | 1, 4, 9, 16     | n²                  |
| Triangular        | 1, 3, 6, 10     | n(n+1)/2            |
| Fibonacci         | 0, 1, 1, 2, 3   | Sum of previous two |

Enjoy exploring number patterns and sequences! 🔢✨
`,
    quiz: {
        questions: [
            ...easyQuestions,
            ...mediumQuestions
        ]
    }
}; 