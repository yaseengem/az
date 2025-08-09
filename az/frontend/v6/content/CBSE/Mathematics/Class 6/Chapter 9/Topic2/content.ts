// Topic 2: Mean, median, mode (basic concepts)
// content.ts will be created here for the topic.

import { QuizQuestion, TopicQuiz, TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic2Content: TopicContent = {
    id: 'cl6_ch9_t2',
    topicNumber: 2,
    topicName: "Mean, Median, Mode (Basic Concepts)",
    duration: 45,
    description: "Understanding the basic concepts of mean, median, and mode in data handling",
    explanation: `
# Mean, Median, and Mode 📊

Welcome to the world of data analysis! 🌟 In this topic, we'll learn about three important ways to understand data: mean, median, and mode. These help us find the "average" or "typical" value in a set of numbers. Let's explore each one! 🚀

## Understanding the Basics 📈

### Mean (Average) ➗
1. **What is Mean?**
   - The sum of all numbers divided by how many numbers there are
   - Example: For numbers 2, 4, 6, 8
   - Mean = (2 + 4 + 6 + 8) ÷ 4 = 20 ÷ 4 = 5

2. **How to Calculate Mean**
   - Step 1: Add all the numbers together
   - Step 2: Count how many numbers there are
   - Step 3: Divide the sum by the count

### Median (Middle Value) 📍
1. **What is Median?**
   - The middle number when all numbers are arranged in order
   - Example: For numbers 3, 1, 4, 2, 5
   - Ordered: 1, 2, 3, 4, 5
   - Median = 3 (middle number)

2. **How to Find Median**
   - Step 1: Arrange numbers in order (smallest to largest)
   - Step 2: Find the middle number
   - For even count: Average of two middle numbers

### Mode (Most Common) 🔢
1. **What is Mode?**
   - The number that appears most often
   - Example: For numbers 2, 3, 2, 4, 2, 5
   - Mode = 2 (appears three times)

2. **How to Find Mode**
   - Step 1: Count how many times each number appears
   - Step 2: Find the number that appears most often
   - Note: There can be more than one mode

## Examples 📝

### Mean Example
Test Scores: 85, 90, 75, 80, 95
- Sum = 85 + 90 + 75 + 80 + 95 = 425
- Count = 5
- Mean = 425 ÷ 5 = 85

### Median Example
Ages: 12, 10, 14, 11, 13
- Ordered: 10, 11, 12, 13, 14
- Median = 12 (middle number)

### Mode Example
Favorite Colors: Red, Blue, Red, Green, Red, Blue
- Red appears 3 times
- Blue appears 2 times
- Green appears 1 time
- Mode = Red

## Real-Life Applications 🌍

1. **School Grades** 🏫
   - Mean: Average test score
   - Median: Middle performance
   - Mode: Most common grade

2. **Sports Statistics** ⚽
   - Mean: Average points per game
   - Median: Typical performance
   - Mode: Most frequent score

3. **Business** 💼
   - Mean: Average sales
   - Median: Typical sale amount
   - Mode: Most popular product

## Practice Problems 🏋️‍♀️

1. **Example 1**: Find mean, median, and mode of: 5, 7, 3, 5, 9
   - Mean: (5 + 7 + 3 + 5 + 9) ÷ 5 = 29 ÷ 5 = 5.8
   - Median: 3, 5, 5, 7, 9 → 5
   - Mode: 5 (appears twice)

2. **Example 2**: Find mean, median, and mode of: 10, 15, 20, 25, 30, 35
   - Mean: (10 + 15 + 20 + 25 + 30 + 35) ÷ 6 = 135 ÷ 6 = 22.5
   - Median: (20 + 25) ÷ 2 = 22.5
   - Mode: No mode (all numbers appear once)

## Common Mistakes to Avoid ❌

1. **Mean Mistakes**
   - Forgetting to divide by the count
   - Adding numbers incorrectly
   - Example: For 2, 4, 6, mean is not 12 (it's 4)

2. **Median Mistakes**
   - Not arranging numbers in order
   - Forgetting to average middle numbers for even count
   - Example: For 1, 3, 2, median is not 2 (it's 2 after ordering)

3. **Mode Mistakes**
   - Choosing the highest number instead of most frequent
   - Not checking all numbers
   - Example: For 1, 2, 2, 3, mode is not 3 (it's 2)

## Summary ✨

In this topic, we learned:
- How to calculate mean (average)
- How to find median (middle value)
- How to identify mode (most common)
- Real-life applications of these concepts
- Common mistakes to avoid

### Additional Examples and Sample Questions:

1. **Example**: Find mean, median, and mode of: 8, 12, 8, 10, 14
   - Mean: 10.4
   - Median: 10
   - Mode: 8

2. **Example**: Find mean, median, and mode of: 6, 4, 8, 6, 10, 6
   - Mean: 6.67
   - Median: 6
   - Mode: 6

3. **Question**: If the mean of 5 numbers is 20, what is their total sum? (Answer: 100)

4. **Question**: What is the median of the first 5 odd numbers? (Answer: 5)
`,
    quiz: {
        questions: [
            ...easyQuestions,
            ...mediumQuestions
        ]
    }
};
