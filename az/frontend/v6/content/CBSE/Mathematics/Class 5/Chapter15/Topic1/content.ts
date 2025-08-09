import { QuizQuestion, TopicQuiz, TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic1Content: TopicContent = {
    id: 'cl5_ch15_t1',
    topicNumber: 1,
    topicName: "Logical Puzzles",
    duration: 45,
    description: "Understanding and solving logical puzzles including magic squares and number patterns",
    explanation: `# Logical Puzzles 🧩

Welcome to the fascinating world of logical puzzles! 🎯 In this topic, we'll explore different types of puzzles that will help sharpen your mathematical thinking and problem-solving skills. Let's dive in! 🚀

## What are Logical Puzzles? 🤔

Logical puzzles are problems that require:
- Careful thinking 🤔
- Pattern recognition 🔍
- Step-by-step reasoning 📝
- Creative problem-solving 💡

## Magic Squares ✨

### What is a Magic Square?
A magic square is a grid of numbers where:
- The sum of numbers in each row
- The sum of numbers in each column
- The sum of numbers in each diagonal
All add up to the same number! 🎯

### Example of a 3×3 Magic Square:
\`\`\`
8 1 6
3 5 7
4 9 2
\`\`\`
In this magic square:
- Each row adds up to 15
- Each column adds up to 15
- Both diagonals add up to 15

### How to Solve Magic Squares? 🧠

1. **Start with the Center**
   - In a 3×3 magic square, the center number is often the middle number of the sequence
   - For numbers 1-9, the center is 5

2. **Place the Largest Numbers**
   - The largest numbers usually go in the corners
   - This helps balance the sums

3. **Fill in the Remaining Numbers**
   - Make sure each row, column, and diagonal adds up to the magic number
   - The magic number for 1-9 is 15

## Number Pattern Puzzles 🔢

### Example 1: Number Sequences
Find the next number in the sequence:
2, 4, 6, 8, __
- Pattern: Adding 2 each time
- Next number: 10

### Example 2: Shape Patterns
\`\`\`
△ □ ○ △ □ ○ △ __
\`\`\`
- Pattern: Triangle, Square, Circle repeating
- Next shape: □ (Square)

## Logic Grid Puzzles 📊

### How to Solve:
1. Create a grid
2. Use given clues to fill in information
3. Use process of elimination
4. Check for consistency

### Example:
Three friends - Riya, Sam, and Tom - have different favorite colors: red, blue, and green.
Clues:
1. Riya's favorite color isn't red
2. Sam's favorite color isn't blue
3. Tom's favorite color is green

Solution:
- Tom: green
- Riya: blue (can't be red, and green is taken)
- Sam: red (only color left)

## Sample Questions ❓

1. Complete this magic square using numbers 1-9:
\`\`\`
__ __ 6
3 __ __
__ 9 __
\`\`\`
Answer:
\`\`\`
8 1 6
3 5 7
4 9 2
\`\`\`

2. Find the next number in the sequence:
1, 3, 6, 10, 15, __
Answer: 21 (adding 2, then 3, then 4, etc.)

3. Three boxes are labeled "Apples", "Oranges", and "Mixed". All labels are wrong. You can pick one fruit from one box. Which box should you pick from to correctly label all boxes?
Answer: Pick from the "Mixed" box. If you get an apple, that box is "Apples", the box labeled "Oranges" must be "Mixed", and the box labeled "Apples" must be "Oranges".

## Real-Life Applications 🌍

Logical puzzles help us in:
- Planning schedules 📅
- Solving everyday problems 🏠
- Making decisions 🤔
- Understanding patterns in nature 🌿

## Tips for Solving Puzzles 💡

1. Read the problem carefully
2. Look for patterns
3. Start with what you know
4. Use elimination
5. Check your work

## Summary ✨

- Logical puzzles improve problem-solving skills
- Magic squares have equal sums in rows, columns, and diagonals
- Number patterns follow specific rules
- Logic grid puzzles use elimination
- Practice makes perfect! 🎯

Remember: Take your time, think carefully, and enjoy solving puzzles! 🧩`,
    quiz: {
        questions: [
            ...easyQuestions,
            ...mediumQuestions
        ]
    }
}; 