// Topic 2: Cross-number puzzles
// content.ts will be created here for the topic.

import { QuizQuestion, TopicQuiz, TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic2Content: TopicContent = {
    id: 'cl6_ch16_t2',
    topicNumber: 2,
    topicName: "Cross-number Puzzles",
    duration: 45,
    description: "Understanding and solving cross-number puzzles using mathematical operations",
    explanation: `# Cross-number Puzzles

Welcome to the world of cross-number puzzles! In this topic, we'll explore fun number puzzles that combine the structure of crosswords with mathematical operations. Let's dive in and learn how to solve these engaging puzzles!

## What are Cross-number Puzzles?

Cross-number puzzles are similar to crossword puzzles, but instead of words, you fill in numbers based on mathematical clues. Each number must satisfy both its across and down clues.

Example of a simple 3x3 cross-number puzzle:
\`\`\`
  1   2   3
1 □ + □ = □
2 □ × □ = □
3 □ - □ = □
\`\`\`

## Types of Clues

### 1. Addition Clues
- Example: "A1 + A2 = A3" means the sum of numbers in cells A1 and A2 equals A3
- Practice: If A1 = 5 and A2 = 3, then A3 = 8

### 2. Subtraction Clues
- Example: "D1 - D2 = D3" means the difference between D1 and D2 equals D3
- Practice: If D1 = 9 and D2 = 4, then D3 = 5

### 3. Multiplication Clues
- Example: "B1 × B2 = B3" means the product of B1 and B2 equals B3
- Practice: If B1 = 3 and B2 = 4, then B3 = 12

### 4. Division Clues
- Example: "C1 ÷ C2 = C3" means C1 divided by C2 equals C3
- Practice: If C1 = 15 and C2 = 3, then C3 = 5

## Solving Strategies

### 1. Start with Single-Digit Numbers
- Begin with clues that can only have single-digit answers
- Example: A × B = 6 (possible pairs: 1×6, 2×3, 3×2, 6×1)

### 2. Look for Unique Solutions
- Find clues that have only one possible answer
- Example: A + B = 2 (only possible with 1 + 1)

### 3. Use Intersecting Clues
- Use information from both across and down clues
- Example: If a cell is part of both an addition and multiplication clue

### 4. Process of Elimination
- Eliminate impossible numbers based on other filled cells
- Example: If a digit can't be repeated, eliminate it from other cells

## Example Puzzle

Let's solve a simple 2x2 puzzle:
\`\`\`
1   2
1 □ + □ = 7
2 □ × □ = 12
\`\`\`

Solution:
1. From the multiplication clue (□ × □ = 12), possible pairs are:
   - 3 × 4
   - 4 × 3
   - 2 × 6
   - 6 × 2

2. From the addition clue (□ + □ = 7), possible pairs are:
   - 1 + 6
   - 2 + 5
   - 3 + 4
   - 4 + 3
   - 5 + 2
   - 6 + 1

3. The only pair that satisfies both clues is 3 and 4:
   - 3 + 4 = 7
   - 3 × 4 = 12

## Tips for Solving

1. **Start Small**
   - Begin with smaller puzzles (2x2 or 3x3)
   - Practice with single-digit numbers first

2. **Use Pencil**
   - Write lightly so you can erase mistakes
   - Keep track of possible numbers for each cell

3. **Check Your Work**
   - Verify that all clues are satisfied
   - Make sure no numbers are repeated unless allowed

4. **Look for Patterns**
   - Notice relationships between numbers
   - Use properties of operations (commutative, associative)

## Common Mistakes to Avoid

1. **Ignoring Clues**
   - Always consider both across and down clues
   - Don't focus on just one direction

2. **Forgetting Constraints**
   - Remember if numbers can be repeated
   - Check if negative numbers are allowed

3. **Rushing Through**
   - Take time to think through each step
   - Double-check your answers

## Summary

In this topic, we learned:
- What cross-number puzzles are
- Different types of clues (addition, subtraction, multiplication, division)
- Strategies for solving puzzles
- How to avoid common mistakes
- Tips for successful puzzle-solving

### Additional Examples and Sample Questions:

1. **Example**: Solve this 2x2 puzzle:
\`\`\`
1   2
1 □ + □ = 9
2 □ × □ = 20
\`\`\`
   - Solution: 4 and 5 (4 + 5 = 9, 4 × 5 = 20)

2. **Example**: Solve this 3x3 puzzle:
\`\`\`
1   2   3
1 □ + □ = □
2 □ × □ = □
3 □ - □ = □
\`\`\`
   Clues:
   - A1 + A2 = A3
   - B1 × B2 = B3
   - C1 - C2 = C3
   - A1 + B1 = C1
   - A2 × B2 = C2
   - A3 - B3 = C3

3. **Question**: In a 2x2 puzzle, if A1 + A2 = 8 and B1 × B2 = 15, what are the possible numbers?
   - Answer: 3 and 5 (3 + 5 = 8, 3 × 5 = 15)

4. **Question**: In a 3x3 puzzle, if a cell is part of both "A + B = 10" and "C × D = 24", what could the number be?
   - Answer: 6 (because 6 + 4 = 10 and 6 × 4 = 24)`,
    quiz: {
        questions: [
            ...easyQuestions,
            ...mediumQuestions
        ]
    }
};
