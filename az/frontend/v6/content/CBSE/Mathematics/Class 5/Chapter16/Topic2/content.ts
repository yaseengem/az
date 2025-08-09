import { QuizQuestion, TopicQuiz, TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic2Content: TopicContent = {
    id: 'cl5_ch16_t2',
    topicNumber: 2,
    topicName: "Cross-Number Puzzles",
    duration: 45,
    description: "Solving and creating cross-number puzzles to enhance mathematical thinking",
    explanation: `
# Cross-Number Puzzles 🧩

Cross-number puzzles are like crossword puzzles, but with numbers instead of words! They're a fun way to practice math while solving puzzles. Let's learn how to solve and create these exciting number games! 🎮

## What are Cross-Number Puzzles? 🤔

A cross-number puzzle is:
- A grid with empty squares to fill in numbers
- Clues that help you find the correct numbers
- Similar to a crossword puzzle but with numbers
- A great way to practice different math skills

## Parts of a Cross-Number Puzzle 📝

### 1. The Grid
- Empty squares to fill in numbers
- Numbered clues (like in crosswords)
- Across and Down directions

### 2. The Clues
- Mathematical problems to solve
- Can involve addition, subtraction, multiplication, or division
- Sometimes include special conditions

## How to Solve Cross-Number Puzzles ✏️

### Step 1: Read All Clues
1. Start with the easiest clues
2. Look for clues with unique answers
3. Make a list of possible numbers

### Step 2: Fill in the Grid
1. Start with numbers you're sure about
2. Use the crossing numbers to help
3. Check if numbers fit both across and down

### Step 3: Check Your Work
1. Verify all clues are satisfied
2. Make sure numbers fit in all directions
3. Look for any contradictions

## Example Puzzle 🎯

Let's solve a simple 3×3 puzzle:

\`\`\`
  1 2 3
1 □ □ □
2 □ □ □
3 □ □ □

Across:
1. A prime number
2. Sum of digits is 9
3. Multiple of 3

Down:
1. Even number
2. Square number
3. One more than a multiple of 5
\`\`\`

Solution:
\`\`\`
  1 2 3
1 2 4 6
2 3 9 1
3 5 6 6
\`\`\`

## Types of Clues 📚

### 1. Number Properties
- Prime numbers
- Even/odd numbers
- Square numbers
- Palindromic numbers

### 2. Mathematical Operations
- Sum of digits
- Product of digits
- Difference between digits
- Special calculations

### 3. Special Conditions
- All digits are different
- No zeros allowed
- Increasing/decreasing order
- Specific digit patterns

## Tips for Solving Puzzles 💡

1. Start with the most specific clues
2. Use process of elimination
3. Keep track of possible numbers
4. Check crossing numbers carefully
5. Don't be afraid to erase and try again

## Creating Your Own Puzzles 🎨

### Step 1: Design the Grid
1. Choose the size
2. Number the squares
3. Plan the crossing points

### Step 2: Write the Clues
1. Make some clues easy
2. Include a mix of operations
3. Ensure unique solutions

### Step 3: Test the Puzzle
1. Solve it yourself
2. Ask others to try
3. Make adjustments if needed

## Sample Questions ❓

1. In a 2×2 grid, if the across numbers add to 10 and the down numbers add to 8, what could the numbers be?
   - Answer: Various possibilities, e.g., 3 7 and 4 4

2. Create a clue for the number 25
   - Answer: A square number that's one more than 24

3. What's special about a number where the sum of its digits equals the product of its digits?
   - Answer: It's a special property that some numbers have, like 123 (1+2+3=6, 1×2×3=6)

## Practice Problems 📝

1. Solve this mini-puzzle:
\`\`\`
□ □
□ □

Across:
1. A prime number
2. Sum is 10

Down:
1. Even number
2. Multiple of 3
\`\`\`

2. Create a clue for the number 16
   - Answer: A square number that's double 8

3. What's the smallest 2-digit number where the tens digit is twice the units digit?
   - Answer: 21

## Summary ✨

- Cross-number puzzles combine math and logic
- They help practice different math skills
- Solving them improves problem-solving abilities
- Creating puzzles enhances understanding
- They're fun and educational!

Remember: The more puzzles you solve, the better you'll get at math! 🎯`,
    quiz: {
        questions: [
            ...easyQuestions,
            ...mediumQuestions
        ]
    }
}; 