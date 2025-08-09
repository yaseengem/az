import { TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic1Content: TopicContent = {
    id: 'cl7_ch16_t1',
    topicNumber: 1,
    topicName: 'Logical puzzles and brain teasers',
    duration: 60,
    description: 'Sharpen your mind with logical puzzles, brain teasers, and reasoning challenges designed for Class 7 students.',
    explanation: `# Logical Puzzles and Brain Teasers 🧠

Logical puzzles and brain teasers are fun and challenging activities that help you develop critical thinking, reasoning, and problem-solving skills. In this topic, you will learn how to approach different types of puzzles, recognize patterns, and use logic to find solutions. Let's dive into the world of logic!

## What Are Logical Puzzles? 🤔
Logical puzzles are problems that require you to use reasoning and deduction to arrive at the correct answer. They often involve patterns, sequences, codes, or tricky situations where you need to think outside the box. These puzzles are not just for fun—they help you become a better thinker and problem solver in mathematics and everyday life.

## Types of Logical Puzzles
1. **Pattern Recognition**: Finding the rule in a sequence of numbers, shapes, or letters.
2. **Code Deciphering**: Figuring out how words or numbers are coded or decoded.
3. **Sequence and Series**: Predicting the next item in a sequence.
4. **Odd One Out**: Identifying which item does not belong in a group.
5. **Arrangement and Position**: Solving problems about the order or position of objects or people.
6. **Mathematical Reasoning**: Using arithmetic or algebraic logic to solve a puzzle.

## Why Practice Logical Puzzles? 🌟
- **Improves critical thinking**
- **Boosts memory and concentration**
- **Enhances problem-solving skills**
- **Makes learning math more enjoyable**
- **Prepares you for competitive exams and real-life challenges**

## How to Approach a Puzzle
1. **Read the question carefully**
2. **Identify the type of puzzle**
3. **Look for patterns or clues**
4. **Eliminate impossible or illogical options**
5. **Test your answer with the given information**
6. **Double-check your reasoning**

## Examples and Sample Questions

### Example 1: Pattern Recognition
**Question:** What comes next in the sequence: 3, 6, 12, 24, ?
**Solution:** Each number is multiplied by 2. So, 24 × 2 = 48. The answer is 48.

### Example 2: Code Deciphering
**Question:** If CAT is coded as DBU, how is DOG coded?
**Solution:** Each letter is replaced by the next letter in the alphabet. D→E, O→P, G→H. So, DOG is EPH.

### Example 3: Odd One Out
**Question:** Find the odd one out: 2, 4, 8, 16, 20
**Solution:** 2, 4, 8, 16 are all powers of 2. 20 is not. So, 20 is the odd one out.

### Example 4: Arrangement
**Question:** Four friends—A, B, C, D—are sitting in a row. B is not at the end. Who can be at the ends?
**Solution:** Since B is not at the end, A, C, or D can be at the ends.

### Example 5: Mathematical Reasoning
**Question:** If 2 + 3 = 8, 3 + 7 = 27, what is 4 + 5?
**Solution:** The pattern is (first × second) + (first + second). 4×5=20, 4+5=9, so 20+9=29.

## Tips for Solving Puzzles
- Draw diagrams or tables if needed
- Write down all possibilities
- Use elimination to narrow down options
- Stay calm and don't rush
- Practice regularly to improve speed and accuracy

## Practice Questions
1. What comes next: 5, 10, 20, 40, ?
2. If APPLE is coded as BQQMF, how is MANGO coded?
3. Find the odd one out: Square, Triangle, Rectangle, Circle
4. If 1=3, 2=3, 3=5, 4=4, 5=4, then 6=?
5. A clock shows 6:00. What is the angle between the hands?

## Real-Life Applications
- Solving puzzles in newspapers and magazines
- Cracking codes in games and escape rooms
- Logical reasoning in competitive exams
- Making decisions in daily life

## Summary 📝
Logical puzzles and brain teasers are not just games—they are powerful tools to sharpen your mind. By practicing regularly, you will become more confident in solving problems, not just in mathematics but in all areas of life. Remember, every puzzle has a solution—sometimes you just need to look at it from a different angle! Keep practicing and enjoy the challenge! 🎯
`,
    quiz: {
        questions: [
            ...easyQuestions,
            ...mediumQuestions
        ]
    }
}; 