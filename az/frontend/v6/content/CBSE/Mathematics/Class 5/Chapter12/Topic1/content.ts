import { generateId } from '../../../../../../app/utils/idGenerator';
import { QuizQuestion, TopicQuiz, TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic1Content: TopicContent = {
    id: 'cl5_ch12_t1',
    topicNumber: 1,
    topicName: "Pictographs and Bar Graphs",
    duration: 45,
    description: "Understanding and interpreting data using pictographs and bar graphs",
    explanation: `
# Pictographs and Bar Graphs 📊

Data visualization is an important skill that helps us understand information quickly and easily. In this topic, we'll learn about two common ways to represent data: pictographs and bar graphs. Let's explore how to read, create, and interpret these visual tools! 🎯

## What is a Pictograph? 🖼️

A pictograph is a graph that uses pictures or symbols to represent data. It's like telling a story with pictures! Here's what makes a pictograph special:

### Key Parts of a Pictograph
1. **Title**: Tells us what the graph is about
2. **Symbols**: Pictures that represent the data
3. **Key**: Explains what each symbol stands for
4. **Labels**: Help us understand the categories

### Example of a Pictograph
Let's say we're showing favorite fruits in a class:
- 🍎 represents 2 students
- 🍌 represents 3 students
- 🍊 represents 4 students

If we see 🍎🍎🍎, it means 6 students like apples (3 × 2 = 6).

## What is a Bar Graph? 📈

A bar graph uses rectangular bars to show data. The height or length of each bar represents a quantity. Bar graphs are great for comparing different categories!

### Key Parts of a Bar Graph
1. **Title**: Describes what the graph shows
2. **X-axis**: Shows the categories being compared
3. **Y-axis**: Shows the scale of measurement
4. **Bars**: Represent the quantities
5. **Labels**: Identify the categories and values

### Example of a Bar Graph
Imagine a graph showing books read by grade:
- Grade 3: 10 books
- Grade 4: 15 books
- Grade 5: 20 books

Each grade would have a bar, with heights of 10, 15, and 20 units respectively.

## How to Read Graphs 📖

### Reading a Pictograph
1. Look at the title to understand the topic
2. Check the key to know what each symbol means
3. Count the symbols for each category
4. Multiply the count by the value of each symbol

### Reading a Bar Graph
1. Read the title to know the topic
2. Look at the x-axis labels for categories
3. Check the y-axis scale for measurements
4. Compare the heights of different bars

## Creating Your Own Graphs ✏️

### Making a Pictograph
1. Choose appropriate symbols
2. Decide on a value for each symbol
3. Create a key
4. Draw the symbols for each category
5. Add labels and title

### Making a Bar Graph
1. Draw the x and y axes
2. Label the categories on the x-axis
3. Add a scale on the y-axis
4. Draw bars for each category
5. Add a title and labels

## Real-Life Examples 🌟

### Example 1: Favorite Colors
A pictograph showing favorite colors in a class:
- 🟥 Red: 8 students
- 🟦 Blue: 12 students
- 🟨 Yellow: 6 students

### Example 2: Monthly Rainfall
A bar graph showing rainfall in centimeters:
- January: 5 cm
- February: 8 cm
- March: 12 cm
- April: 15 cm

## Tips for Good Graphs 💡

1. **Choose Clear Symbols**: Use pictures that are easy to understand
2. **Use Appropriate Scale**: Make sure the numbers make sense
3. **Keep it Neat**: Draw straight lines and clear symbols
4. **Add All Labels**: Don't forget titles and keys
5. **Use Colors**: Different colors help distinguish categories

## Common Mistakes to Avoid ❌

1. Forgetting to include a key in pictographs
2. Using uneven scales in bar graphs
3. Missing labels or titles
4. Using unclear symbols
5. Not spacing the bars evenly

## Practice Questions 📝

1. If 🍎 represents 3 students, how many students does 🍎🍎🍎🍎 represent?
   - Answer: 12 students (4 × 3 = 12)

2. In a bar graph, if the y-axis goes from 0 to 20 in steps of 5, what does a bar reaching 15 mean?
   - Answer: The quantity is 15 units

3. If a pictograph shows favorite pets and 🐶 represents 2 students, how many students like dogs if there are 🐶🐶🐶?
   - Answer: 6 students (3 × 2 = 6)

## Summary ✨

- Pictographs use symbols to show data
- Bar graphs use bars to represent quantities
- Both types of graphs need titles and labels
- Keys are important in pictographs
- Scales must be clear and consistent
- Graphs help us understand data quickly

Remember: A good graph tells a clear story about the data! Practice making and reading different types of graphs to become a data expert! 🎯
`,
    quiz: {
        questions: [
            ...easyQuestions,
            ...mediumQuestions
        ]
    }
}; 