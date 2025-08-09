import { TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic2Content: TopicContent = {
    id: 'cl7_ch16_t2',
    topicNumber: 2,
    topicName: 'Pattern recognition',
    duration: 60,
    description: 'Learn to identify, analyze, and extend patterns in numbers, shapes, and logic. Develop skills for recognizing mathematical and real-life patterns.',
    explanation: `# Pattern Recognition 🔍

Pattern recognition is a fundamental skill in mathematics and everyday life. It involves identifying regularities, trends, or repeated sequences in numbers, shapes, colors, or events. By recognizing patterns, we can make predictions, solve problems, and understand the world around us more effectively.

## What is a Pattern? 🧩
A pattern is a repeated or regular arrangement of numbers, shapes, colors, or objects. Patterns can be found everywhere: in nature (like the petals of a flower 🌸), in music (repeating beats 🎵), in art, and especially in mathematics.

### Types of Patterns
1. **Number Patterns**: Sequences where numbers follow a specific rule (e.g., 2, 4, 6, 8, ... add 2 each time).
2. **Shape Patterns**: Repeating or growing arrangements of shapes (e.g., ◯, ◯, △, ◯, ◯, △, ...).
3. **Color Patterns**: Sequences based on color repetition (e.g., red, blue, red, blue, ...).
4. **Logic Patterns**: Patterns based on logical rules or relationships.

## Why is Pattern Recognition Important? 🌟
- **Builds problem-solving skills**
- **Helps in making predictions**
- **Essential for algebra and higher math**
- **Used in coding, science, and daily life**

## How to Recognize Patterns
1. **Observe carefully**: Look for repetition, regularity, or changes.
2. **Identify the rule**: What is happening from one term to the next?
3. **Test the rule**: Apply it to see if it fits the whole sequence.
4. **Predict the next term**: Use the rule to find what comes next.

## Common Number Patterns
- **Arithmetic Sequence**: Each term increases or decreases by the same number (e.g., 5, 8, 11, 14, ... add 3 each time).
- **Geometric Sequence**: Each term is multiplied or divided by the same number (e.g., 3, 6, 12, 24, ... multiply by 2 each time).
- **Square Numbers**: 1, 4, 9, 16, 25, ... (n²)
- **Cube Numbers**: 1, 8, 27, 64, ... (n³)
- **Fibonacci Sequence**: Each term is the sum of the previous two (e.g., 1, 1, 2, 3, 5, 8, ...).

## Examples
### Example 1: Arithmetic Pattern
**Question:** What comes next: 7, 10, 13, 16, ?
**Solution:** Add 3 each time. Next is 16 + 3 = 19.

### Example 2: Geometric Pattern
**Question:** What comes next: 2, 6, 18, 54, ?
**Solution:** Multiply by 3 each time. Next is 54 × 3 = 162.

### Example 3: Shape Pattern
**Question:** Which shape comes next: ▲, ■, ▲, ■, ▲, ?
**Solution:** The pattern alternates between triangle and square. Next is ■.

### Example 4: Odd and Even Patterns
**Question:** What comes next: 2, 4, 6, 8, ?
**Solution:** Add 2 each time. Next is 10.

### Example 5: Prime Number Pattern
**Question:** What comes next: 2, 3, 5, 7, 11, ?
**Solution:** These are prime numbers. Next is 13.

## How to Approach Pattern Questions
- Write down the sequence.
- Look for addition, subtraction, multiplication, or division.
- Check for alternating or repeating patterns.
- Try to relate the pattern to known sequences (squares, cubes, primes, etc.).
- Draw or visualize if it's a shape or color pattern.

## Practice Questions
1. What comes next: 4, 8, 16, 32, ?
2. Which letter comes next: A, C, E, G, ?
3. Find the missing number: 9, 18, 27, 36, ?
4. What comes next: 1, 4, 9, 16, ?
5. Which shape comes next: ◯, ◯, △, ◯, ◯, △, ◯, ◯, ?

## Real-Life Applications
- **Nature**: Patterns in leaves, shells, and animal markings.
- **Music**: Repeating beats and rhythms.
- **Art**: Designs and motifs.
- **Technology**: Coding, encryption, and data analysis.
- **Daily Life**: Calendar dates, schedules, and routines.

## Tips for Mastering Pattern Recognition
- Practice regularly with different types of patterns.
- Don't rush—observe carefully.
- Use diagrams or tables if needed.
- Discuss with friends or teachers for new perspectives.
- Try creating your own patterns!

## Sample Questions
1. What comes next: 3, 6, 12, 24, ?
2. Which number fits: 1, 3, 6, 10, 15, ?
3. What comes next: 2, 5, 10, 17, ?
4. Which letter comes next: Z, X, V, T, ?
5. Find the missing number: 7, 14, 28, 56, ?

## Summary 📝
Pattern recognition is a powerful tool in mathematics and beyond. By learning to spot and extend patterns, you develop logical thinking, creativity, and problem-solving skills. Patterns are everywhere—keep your eyes open and enjoy the challenge! 🎯
`,
    quiz: {
        questions: [
            ...easyQuestions,
            ...mediumQuestions
        ]
    }
}; 