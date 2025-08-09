import { TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic2Content: TopicContent = {
  id: 'cl3_ch5_t2',
  topicNumber: 2,
  topicName: 'Exploring Patterns and Designs',
  duration: 45,
  description: 'Learn to identify, create, and extend patterns and designs using shapes, numbers, and colors. Develop logical thinking and creativity through fun examples and activities.',
  explanation: `
# Exploring Patterns and Designs 🎨🔷

Patterns and designs are everywhere! From the tiles on the floor to the petals of a flower 🌸, patterns make things look beautiful and help us understand how things repeat or change. In this topic, we will learn what patterns are, how to find them, and how to create our own designs using shapes, numbers, and colors.

## What is a Pattern? 🔁
A pattern is something that repeats or changes in a regular way. Patterns can be made with shapes, numbers, colors, or objects. Recognizing patterns helps us solve problems and predict what comes next.

### Examples of Patterns:
- Red, blue, red, blue, red, blue... (color pattern)
- ▲ ● ▲ ● ▲ ● ... (shape pattern)
- 2, 4, 6, 8, 10... (number pattern, counting by 2)
- 🟩🟦🟩🟦🟩🟦... (color and shape pattern)

## Types of Patterns
1. **Repeating Patterns**: The same part repeats again and again. Example: 🍎🍌🍎🍌🍎🍌
2. **Growing Patterns**: Something is added each time. Example: 1, 2, 3, 4, 5...
3. **Shrinking Patterns**: Something is taken away each time. Example: 10, 8, 6, 4...

## Patterns in Shapes and Designs 🟠🔺
Patterns can be made by arranging shapes in a certain order. For example:
- Square, triangle, square, triangle...
- Circle, circle, square, circle, circle, square...

You can also make designs by repeating shapes in a special way, like in rangoli or tile designs.

## Patterns in Numbers 🔢
Number patterns help us in maths. For example:
- 5, 10, 15, 20... (adding 5 each time)
- 12, 10, 8, 6... (subtracting 2 each time)
- 1, 4, 9, 16... (squares: 1², 2², 3², 4²)

## Patterns in Nature 🌱
Nature is full of patterns:
- The petals of a flower
- The stripes on a zebra 🦓
- The spiral of a snail shell 🐚

## How to Find the Next in a Pattern?
- Look for what repeats or changes.
- Check if something is added, subtracted, or alternates.
- Try to continue the pattern in the same way.

### Example 1:
Pattern: 3, 6, 9, 12, __
- Each number increases by 3. Next is 15.

### Example 2:
Pattern: 🔴🟡🔴🟡🔴 __
- The pattern is red, yellow, red, yellow. Next is red.

## Creating Your Own Patterns ✏️
- Use colors, shapes, or numbers.
- Decide what repeats or changes.
- Draw or write your pattern.

## Sample Questions 📝
1. What comes next: 7, 14, 21, 28, __?
2. Fill in the blank: 🟢🟢🔵🟢🟢🔵🟢 __
3. What is the next shape: ◼️, ◻️, ◼️, ◻️, __?

## Summary ✨
- Patterns repeat or change in a regular way.
- We can find patterns in shapes, numbers, colors, and nature.
- Patterns help us predict and solve problems.
- Try making your own patterns for fun and learning! 😊
`,
  quiz: {
    questions: [
      ...easyQuestions,
      ...mediumQuestions
    ]
  }
};
