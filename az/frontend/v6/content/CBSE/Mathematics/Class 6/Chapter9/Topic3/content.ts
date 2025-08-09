// Topic 3: Interpretation of charts
// content.ts will be created here for the topic.

import { QuizQuestion, TopicQuiz, TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic3Content: TopicContent = {
    id: 'cl6_ch9_t3',
    topicNumber: 3,
    topicName: "Interpretation of Charts",
    duration: 45,
    description: "Understanding how to read and interpret different types of charts and graphs",
    explanation: `
# Interpretation of Charts 📊

Welcome to the world of data visualization! 🌟 In this topic, we'll learn how to read and interpret different types of charts and graphs. This skill helps us understand information quickly and make better decisions. Let's explore! 🚀

## Understanding Different Types of Charts 📈

### Bar Graphs 📊
1. **What is a Bar Graph?**
   - Uses rectangular bars to show quantities
   - Bars can be vertical or horizontal
   - Height/length of bar represents the value

2. **How to Read a Bar Graph**
   - Look at the title to understand the topic
   - Check the axes labels for what is being measured
   - Read the scale to understand the values
   - Compare bar heights to see differences

### Pictographs 🖼️
1. **What is a Pictograph?**
   - Uses pictures or symbols to represent data
   - Each symbol represents a specific quantity
   - Key shows what each symbol means

2. **How to Read a Pictograph**
   - Check the title to understand the topic
   - Look at the key to know what each symbol means
   - Count the symbols to find quantities
   - Multiply symbols by their value if needed

### Pie Charts 🥧
1. **What is a Pie Chart?**
   - Circular graph divided into slices
   - Each slice represents a part of the whole
   - Size of slice shows proportion

2. **How to Read a Pie Chart**
   - Look at the title to understand the topic
   - Check the labels to know what each slice represents
   - Compare slice sizes to see proportions
   - Use percentages to understand exact values

## Real-Life Applications 🌍

1. **Weather Data** 🌤️
   - Bar graphs show temperature changes
   - Pictographs show rainfall amounts
   - Pie charts show weather distribution

2. **School Data** 🏫
   - Bar graphs compare test scores
   - Pictographs show attendance
   - Pie charts show subject preferences

3. **Business** 💼
   - Bar graphs show sales over time
   - Pictographs show product popularity
   - Pie charts show market share

## Practice Problems 🏋️‍♀️

1. **Example 1**: Reading a Bar Graph
   - Title: "Favorite Sports"
   - X-axis: Sports names
   - Y-axis: Number of students
   - Question: Which sport is most popular?

2. **Example 2**: Reading a Pictograph
   - Title: "Books Read This Month"
   - Symbol: 📚 = 2 books
   - Question: How many books were read in total?

3. **Example 3**: Reading a Pie Chart
   - Title: "Time Spent on Activities"
   - Slices: Study, Play, Sleep, Other
   - Question: Which activity takes the most time?

## Common Mistakes to Avoid ❌

1. **Scale Confusion** 📏
   - Always check the scale carefully
   - Don't assume each unit is 1
   - Example: A bar might represent 10 units, not 1

2. **Symbol Value** 🔢
   - Remember to multiply by symbol value
   - Don't just count symbols
   - Example: If 📚 = 2 books, 3 symbols = 6 books

3. **Chart Type** 📊
   - Understand what each chart type shows best
   - Bar graphs for comparisons
   - Pictographs for simple counts
   - Pie charts for proportions

## Summary ✨

In this topic, we learned:
- How to read and interpret different types of charts
- The importance of titles, labels, and scales
- How to extract information from visual data
- Real-life applications of chart interpretation
- Common mistakes to avoid

### Additional Examples and Sample Questions:

1. **Example**: A bar graph shows the number of students in different classes. Class 6A has a bar reaching 30, Class 6B has 25, and Class 6C has 35. What is the total number of students? (Answer: 90)

2. **Example**: A pictograph shows the number of trees planted by different students. If 🌳 = 5 trees, and a student has 4 symbols, how many trees did they plant? (Answer: 20)

3. **Question**: A pie chart shows the distribution of a day's activities. If the "Study" slice is 25%, "Play" is 15%, "Sleep" is 40%, and "Other" is 20%, which activity takes the least time? (Answer: Play)

4. **Question**: A bar graph shows the heights of different plants. If the scale is 1 cm = 10 cm, and a bar is 4 cm tall, what is the actual height of the plant? (Answer: 40 cm)
`,
    quiz: {
        questions: [
            ...easyQuestions,
            ...mediumQuestions
        ]
    }
};
