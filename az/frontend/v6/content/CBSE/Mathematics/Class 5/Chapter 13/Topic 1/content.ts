import { generateId } from '../../../../../../app/utils/idGenerator';
import { QuizQuestion, TopicQuiz, TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic1Content: TopicContent = {
    id: 'cl5_ch13_t1',
    topicNumber: 1,
    topicName: 'Lattice Multiplication',
    duration: 45,
    description: 'Learn the lattice (grid) method for multiplying numbers, with step-by-step examples and practice questions.',
    explanation: `
# Lattice Multiplication 🧮

Lattice multiplication is a fun and visual way to multiply large numbers! It uses a grid (lattice) to break the multiplication into smaller, easier steps. This method helps you organize your work and see how each digit contributes to the final answer. Let's learn how to use the lattice method step by step!

## What is Lattice Multiplication? 🔢
Lattice multiplication is a method that uses a special grid to multiply two numbers. Each box in the grid helps you multiply single digits and keep track of the place value. This method is especially helpful for multiplying two-digit or three-digit numbers.

## How to Set Up the Lattice Grid 🗒️
1. **Draw a grid**: The number of rows and columns depends on the digits in the numbers you are multiplying. For example, to multiply 23 × 14, draw a 2-column by 2-row grid.
2. **Write the numbers**: Write one number along the top (one digit per column) and the other number along the right side (one digit per row).
3. **Draw diagonals**: Draw a diagonal line in each box from the top right to the bottom left. These lines will help you separate the tens and ones.

## Step-by-Step Example: 23 × 14
Let's multiply 23 by 14 using the lattice method:

1. Draw a 2×2 grid. Write 2 and 3 on top, 1 and 4 on the right.
2. Multiply each pair of digits and write the answer in the corresponding box, with the tens digit above the diagonal and the ones digit below.

|   | 2 | 3 |
|---|---|---|
| 1 | 0/2 | 0/3 |
| 4 | 0/8 | 1/2 |

- 2 × 1 = 2 (write 0 above, 2 below diagonal)
- 3 × 1 = 3 (write 0 above, 3 below)
- 2 × 4 = 8 (write 0 above, 8 below)
- 3 × 4 = 12 (write 1 above, 2 below)

3. Add along the diagonals, starting from the bottom right:
- Bottom right: 2
- Next diagonal: 3 + 8 + 1 = 12 (write 2, carry 1)
- Next diagonal: 0 + 0 + 0 + 2 (from carry) = 2
- Top left: 0

4. Write the answer by reading the digits from left to right: 322.

So, 23 × 14 = 322.

## Why Use Lattice Multiplication? 🤔
- **Organized**: Keeps your work neat and easy to follow.
- **Visual**: Helps you see how each digit is multiplied.
- **Reduces mistakes**: Less likely to forget to add or carry numbers.

## More Examples 📚
### Example 1: 34 × 12
- Set up a 2×2 grid.
- Fill in the boxes:
  - 3 × 1 = 3 (0/3)
  - 4 × 1 = 4 (0/4)
  - 3 × 2 = 6 (0/6)
  - 4 × 2 = 8 (0/8)
- Add along diagonals:
  - Bottom right: 8
  - Next: 4 + 6 = 10 (0, carry 1)
  - Next: 3 + 0 + 1 = 4
- Answer: 408

### Example 2: 56 × 23
- Set up a 2×2 grid.
- Fill in the boxes:
  - 5 × 2 = 10 (1/0)
  - 6 × 2 = 12 (1/2)
  - 5 × 3 = 15 (1/5)
  - 6 × 3 = 18 (1/8)
- Add along diagonals:
  - Bottom right: 8
  - Next: 5 + 2 + 1 = 8
  - Next: 0 + 1 + 1 = 2
  - Top left: 1
- Answer: 1288

## Practice Questions ❓
1. Multiply 42 × 13 using the lattice method.
2. Multiply 67 × 21 using the lattice method.
3. Multiply 85 × 34 using the lattice method.

## Sample Questions with Answers 📝
1. **Question:** What is 24 × 16 using the lattice method?
   **Answer:** 384
2. **Question:** Multiply 31 × 25 using the lattice method.
   **Answer:** 775
3. **Question:** Multiply 53 × 12 using the lattice method.
   **Answer:** 636

## Summary ✨
Lattice multiplication is a helpful and visual way to multiply numbers. It keeps your work organized and helps you avoid mistakes. Practice with different numbers to become a lattice multiplication pro! 💪
`,
    quiz: {
        questions: [
            ...easyQuestions,
            ...mediumQuestions
        ]
    }
}; 