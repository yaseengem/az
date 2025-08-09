import { QuizQuestion, TopicQuiz, TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic3Content: TopicContent = {
   id: 'cl5_ch16_t3',
   topicNumber: 3,
   topicName: "Mental Math Tricks",
   duration: 45,
   description: "Learning quick mental calculation techniques to solve math problems faster",
   explanation: `# Mental Math Tricks 🧠

Mental math is like having a superpower! 🦸‍♂️ It helps you solve math problems quickly in your head, without needing paper or a calculator. Let's learn some amazing tricks to become mental math champions! 🏆

## Why Learn Mental Math? 🤔

Mental math helps you:
- Solve problems faster
- Build number sense
- Improve concentration
- Boost confidence
- Make math more fun!

## Addition Tricks ➕

### 1. Breaking Numbers Apart
Example: 47 + 28
- Break 28 into 20 + 8
- 47 + 20 = 67
- 67 + 8 = 75

### 2. Making Tens
Example: 8 + 6
- Take 2 from 6 to make 8 into 10
- 10 + 4 = 14

### 3. Doubles and Near Doubles
Example: 7 + 8
- 7 + 7 = 14 (double)
- 14 + 1 = 15

## Subtraction Tricks ➖

### 1. Counting Up
Example: 42 - 28
- Count up from 28 to 42
- 28 to 30 = 2
- 30 to 40 = 10
- 40 to 42 = 2
- Total: 2 + 10 + 2 = 14

### 2. Breaking Down
Example: 63 - 27
- 63 - 20 = 43
- 43 - 7 = 36

## Multiplication Tricks ✖️

### 1. Multiplying by 5
- Divide by 2 and multiply by 10
Example: 24 × 5
- 24 ÷ 2 = 12
- 12 × 10 = 120

### 2. Multiplying by 9
- Multiply by 10 and subtract the number
Example: 7 × 9
- 7 × 10 = 70
- 70 - 7 = 63

### 3. Multiplying by 11
- For 2-digit numbers: add the digits and put in middle
Example: 35 × 11
- 3 + 5 = 8
- Put 8 between 3 and 5
- Answer: 385

## Division Tricks ➗

### 1. Dividing by 5
- Multiply by 2 and divide by 10
Example: 45 ÷ 5
- 45 × 2 = 90
- 90 ÷ 10 = 9

### 2. Dividing by 9
- Sum of digits trick
Example: 63 ÷ 9
- 6 + 3 = 9
- 9 ÷ 9 = 1
- Answer: 7

## Special Number Patterns 🔢

### 1. Square Numbers
- 1² = 1
- 2² = 4
- 3² = 9
- 4² = 16
- 5² = 25

### 2. Times Tables Patterns
- 9 times table: digits add to 9
- 11 times table: mirror numbers
- 5 times table: ends with 0 or 5

## Practice Examples 📝

1. Quick Addition:
\`\`\`
37 + 48 = ?
- 37 + 50 = 87
- 87 - 2 = 85
\`\`\`

2. Fast Multiplication:
\`\`\`
15 × 12 = ?
- 15 × 10 = 150
- 15 × 2 = 30
- 150 + 30 = 180
\`\`\`

3. Easy Division:
\`\`\`
84 ÷ 4 = ?
- 80 ÷ 4 = 20
- 4 ÷ 4 = 1
- 20 + 1 = 21
\`\`\`

## Tips for Mental Math 💡

1. Practice regularly
2. Start with easy numbers
3. Break problems into smaller steps
4. Use number patterns
5. Check your answers

## Sample Questions ❓

1. What is 25 × 4?
   - Answer: 100 (25 × 4 = 100)

2. Calculate 67 - 29 mentally
   - Answer: 38 (67 - 30 = 37, 37 + 1 = 38)

3. Find 8 × 7 using the doubles method
   - Answer: 56 (7 × 7 = 49, 49 + 7 = 56)

## Practice Problems 📝

1. Calculate 45 + 38 mentally
   - Answer: 83 (45 + 40 = 85, 85 - 2 = 83)

2. What is 12 × 11?
   - Answer: 132 (1 1+2 2)

3. Find 96 ÷ 8
   - Answer: 12 (80 ÷ 8 = 10, 16 ÷ 8 = 2, 10 + 2 = 12)

## Real-Life Applications 🌍

Mental math is useful for:
- Shopping calculations 🛍️
- Time management ⏰
- Sports scores 🏀
- Cooking measurements 🍳
- Travel distances 🚗

## Summary ✨

- Mental math makes calculations faster
- There are tricks for all operations
- Practice improves speed and accuracy
- Patterns help remember facts
- It's a valuable life skill

Remember: The more you practice mental math, the better you'll get! 🎯`,
   quiz: {
      questions: [
         ...easyQuestions,
         ...mediumQuestions
      ]
   }
}; 