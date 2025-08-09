import { QuizQuestion, TopicQuiz, TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic1Content: TopicContent = {
    id: 'cl5_ch7_t1',
    topicNumber: 1,
    topicName: "Number Patterns",
    duration: 45,
    description: "Understanding and identifying number patterns in sequences and grids",
    explanation: `# Number Patterns 🔢

Patterns are everywhere in mathematics! 🧩 They help us predict what comes next and understand how numbers relate to each other. In this topic, we'll explore different types of number patterns and learn how to identify and create them.

## What are Number Patterns? 🤔

Number patterns are sequences of numbers that follow a specific rule or order. They can be found in:
- Counting numbers (1, 2, 3, 4, ...)
- Even numbers (2, 4, 6, 8, ...)
- Odd numbers (1, 3, 5, 7, ...)
- Multiplication tables (5, 10, 15, 20, ...)

## Types of Number Patterns 📊

### 1. Growing Patterns 🌱
These patterns increase by a fixed amount:
- Example: 2, 4, 6, 8, 10, ... (adding 2 each time)
- Example: 5, 10, 15, 20, 25, ... (adding 5 each time)

### 2. Shrinking Patterns 🍂
These patterns decrease by a fixed amount:
- Example: 20, 18, 16, 14, 12, ... (subtracting 2 each time)
- Example: 100, 90, 80, 70, 60, ... (subtracting 10 each time)

### 3. Repeating Patterns 🔄
These patterns have a sequence that repeats:
- Example: 1, 2, 3, 1, 2, 3, 1, 2, 3, ...
- Example: A, B, C, A, B, C, A, B, C, ...

### 4. Grid Patterns 📐
Patterns can also be found in number grids:
- Example: In a 3x3 grid, numbers increase by 1 across each row
- Example: In a multiplication table, numbers follow both row and column patterns

## How to Find Patterns? 🔍

1. **Look for the difference** between consecutive numbers
2. **Check if numbers are being added or subtracted**
3. **See if numbers are being multiplied or divided**
4. **Look for repeating sequences**

## Practice Examples 📝

### Example 1: Growing Pattern
What comes next in this pattern? 3, 6, 9, 12, ___
- Solution: The pattern adds 3 each time, so the next number is 15

### Example 2: Shrinking Pattern
What comes next in this pattern? 50, 45, 40, 35, ___
- Solution: The pattern subtracts 5 each time, so the next number is 30

### Example 3: Grid Pattern
Complete this grid:
\`\`\`
2  4  6
4  8  12
6  __  __
\`\`\`
- Solution: The pattern multiplies row number by column number, so the missing numbers are 12 and 18

## Sample Questions ❓

1. What is the next number in this pattern? 7, 14, 21, 28, ___
   - Answer: 35 (adding 7 each time)

2. Complete this pattern: 100, 90, 80, 70, ___
   - Answer: 60 (subtracting 10 each time)

3. What number should replace the question mark?
\`\`\`
1  2  3
2  4  6
3  6  ?
\`\`\`
   - Answer: 9 (multiplying row by column)

## Real-Life Applications 🌍

Number patterns are used in:
- Counting money 💰
- Telling time ⏰
- Measuring ingredients for recipes 🥄
- Creating schedules 📅
- Building structures 🏗️

## Summary ✨

- Number patterns follow specific rules or orders
- They can grow, shrink, or repeat
- Patterns can be found in sequences and grids
- Understanding patterns helps in problem-solving
- Patterns are everywhere in our daily lives

Remember: The key to understanding patterns is to look for the rule that connects the numbers! 🎯`,
    quiz: {
        questions: [
            ...easyQuestions,
            ...mediumQuestions
        ]
    }
}; 