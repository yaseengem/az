import { QuizQuestion, TopicQuiz, TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic2Content: TopicContent = {
    id: 'cl7_ch3_t2',
    topicNumber: 2,
    topicName: "Mean, Median, Mode",
    duration: 45,
    description: "Understanding and calculating measures of central tendency: mean, median, and mode",
    explanation: `
# Mean, Median, and Mode 📊

In this topic, we'll learn about three important ways to describe the "center" of a set of data: mean, median, and mode. These are called measures of central tendency. Let's explore each one! 🚀

## Mean (Average) 📝

The mean is what we commonly call the "average." It's calculated by adding all the numbers and dividing by how many numbers there are.

### Formula:
\`\`\`
Mean = (Sum of all numbers) ÷ (Number of numbers)
\`\`\`

### Example:
If we have the numbers: 5, 7, 9, 11, 13
- Sum = 5 + 7 + 9 + 11 + 13 = 45
- Number of numbers = 5
- Mean = 45 ÷ 5 = 9

## Median 📏

The median is the middle number when the numbers are arranged in order. If there are two middle numbers, we take their average.

### Steps to find median:
1. Arrange numbers in order (smallest to largest)
2. Find the middle number
3. If two middle numbers, average them

### Example:
Numbers: 7, 3, 9, 1, 5
1. In order: 1, 3, 5, 7, 9
2. Middle number = 5

Another example: 2, 4, 6, 8
1. In order: 2, 4, 6, 8
2. Two middle numbers: 4 and 6
3. Median = (4 + 6) ÷ 2 = 5

## Mode 🎯

The mode is the number that appears most often in a set of numbers. A set can have:
- One mode
- More than one mode
- No mode (if all numbers appear the same number of times)

### Example:
Numbers: 2, 3, 4, 4, 5, 4, 6
- 4 appears most often (3 times)
- Mode = 4

## When to Use Each Measure 📊

### Mean:
- Best for data with no extreme values
- Useful for comparing different sets of data
- Example: Average test scores of different classes

### Median:
- Best when there are extreme values
- Useful for income data, house prices
- Example: Median income of a neighborhood

### Mode:
- Best for categorical data
- Useful for finding most common items
- Example: Most popular ice cream flavor

## Real-Life Examples 🌟

### Example 1: Test Scores
Scores: 85, 90, 92, 78, 85, 95, 85
- Mean = (85 + 90 + 92 + 78 + 85 + 95 + 85) ÷ 7 = 87.1
- Median = 85 (when arranged: 78, 85, 85, 85, 90, 92, 95)
- Mode = 85 (appears 3 times)

### Example 2: Family Sizes
Number of children: 2, 3, 1, 2, 4, 2, 3, 2
- Mean = (2 + 3 + 1 + 2 + 4 + 2 + 3 + 2) ÷ 8 = 2.375
- Median = 2 (when arranged: 1, 2, 2, 2, 2, 3, 3, 4)
- Mode = 2 (appears 4 times)

## Common Mistakes to Avoid ❌

1. **Mean**:
   - Forgetting to divide by the number of items
   - Including non-numerical values
   - Using mean when there are extreme values

2. **Median**:
   - Not arranging numbers in order first
   - Forgetting to average two middle numbers
   - Counting the numbers incorrectly

3. **Mode**:
   - Thinking there must always be a mode
   - Not counting all occurrences
   - Confusing with mean or median

## Practice Questions 📝

1. Find the mean, median, and mode of:
   - 5, 7, 9, 11, 13, 15, 17
   - 2, 4, 6, 8, 10, 12, 14, 16
   - 3, 5, 7, 9, 11, 13, 15, 17, 19

2. Which measure would be best for:
   - Finding the average height of students
   - Determining the most common shoe size
   - Calculating the middle income in a city

## Summary ✨

In this topic, we learned:
- How to calculate mean, median, and mode
- When to use each measure
- Real-life applications
- Common mistakes to avoid

Remember, these measures help us understand data better and make informed decisions! 🎯
`,
    quiz: {
        questions: [
            ...easyQuestions,
            ...mediumQuestions
        ]
    }
}; 