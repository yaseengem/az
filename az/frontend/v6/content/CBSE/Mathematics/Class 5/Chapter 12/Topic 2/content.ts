import { QuizQuestion, TopicQuiz, TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic2Content: TopicContent = {
    id: 'cl5_ch12_t2',
    topicNumber: 2,
    topicName: "Line Graphs and Pie Charts",
    duration: 45,
    description: "Understanding and interpreting data using line graphs and pie charts",
    explanation: `
# Line Graphs and Pie Charts 📊

Data visualization helps us understand information quickly and easily. In this topic, we'll learn about two more types of graphs: line graphs and pie charts. These graphs help us see patterns and make comparisons in different ways. Let's explore how they work! 🎯

## What is a Line Graph? 📈

A line graph uses points connected by lines to show how data changes over time. It's like drawing a path that shows the journey of your data!

### Key Parts of a Line Graph
1. **Title**: Tells us what the graph is about
2. **X-axis**: Shows time periods
3. **Y-axis**: Shows the measurements
4. **Points**: Mark the data values
5. **Lines**: Connect the points to show changes

### Example of a Line Graph
Let's say we're tracking temperature over a week:
- Monday: 20°C
- Tuesday: 25°C
- Wednesday: 22°C
- Thursday: 24°C
- Friday: 21°C

The line would go up and down to show these temperature changes.

## What is a Pie Chart? 🥧

A pie chart is a circular graph divided into slices to show parts of a whole. It's like cutting a pie into pieces to share!

### Key Parts of a Pie Chart
1. **Title**: Describes what the chart shows
2. **Slices**: Represent different categories
3. **Labels**: Identify each category
4. **Percentages**: Show what part each slice represents
5. **Colors**: Help distinguish between slices

### Example of a Pie Chart
Imagine a chart showing favorite fruits in a class:
- Apples: 30%
- Bananas: 20%
- Oranges: 25%
- Other fruits: 25%

Each fruit would get a slice sized according to its percentage.

## How to Read Graphs 📖

### Reading a Line Graph
1. Look at the title to understand the topic
2. Check the x-axis for time periods
3. Look at the y-axis for measurements
4. Follow the line to see how values change
5. Note any patterns or trends

### Reading a Pie Chart
1. Read the title to know the topic
2. Look at the size of each slice
3. Check the percentages or labels
4. Compare the sizes of different slices
5. Add up to make sure it's 100%

## Creating Your Own Graphs ✏️

### Making a Line Graph
1. Draw the x and y axes
2. Label the time periods on the x-axis
3. Add a scale on the y-axis
4. Plot the points for each time period
5. Connect the points with lines
6. Add a title and labels

### Making a Pie Chart
1. Calculate the percentage for each category
2. Convert percentages to degrees (1% = 3.6°)
3. Draw a circle
4. Use a protractor to measure and draw slices
5. Add labels and a title
6. Use different colors for each slice

## Real-Life Examples 🌟

### Example 1: Temperature Changes
A line graph showing daily temperature:
- 6 AM: 15°C
- 12 PM: 25°C
- 6 PM: 20°C
- 12 AM: 18°C

### Example 2: Class Budget
A pie chart showing how money is spent:
- Books: 40%
- Stationery: 25%
- Sports: 20%
- Other: 15%

## Tips for Good Graphs 💡

1. **Choose the Right Graph**: Use line graphs for changes over time, pie charts for parts of a whole
2. **Use Clear Labels**: Make sure everything is easy to read
3. **Keep it Simple**: Don't include too much information
4. **Use Appropriate Scales**: Make sure the numbers make sense
5. **Add Colors**: Different colors help distinguish categories

## Common Mistakes to Avoid ❌

1. Using the wrong type of graph for your data
2. Forgetting to label the axes
3. Using uneven scales
4. Making slices too small in pie charts
5. Not connecting points properly in line graphs

## Practice Questions 📝

1. If a line graph shows plant growth and it grows 2 cm each day for 3 days, what is the total growth?
   - Answer: 6 cm (2 cm × 3 days)

2. In a pie chart, if one slice is 90 degrees, what percentage does it represent?
   - Answer: 25% (90° ÷ 360° × 100)

3. If a line graph shows temperature and it was 20°C at 8 AM and 25°C at 12 PM, what was the increase?
   - Answer: 5°C (25°C - 20°C)

## Summary ✨

- Line graphs show changes over time
- Pie charts show parts of a whole
- Both types of graphs need clear titles and labels
- Line graphs use points and lines
- Pie charts use slices and percentages
- Graphs help us understand data quickly

Remember: Choose the right graph for your data, and make it clear and easy to read! Practice making and reading different types of graphs to become a data expert! 🎯
`,
    quiz: {
        questions: [
            ...easyQuestions,
            ...mediumQuestions
        ]
    }
}; 