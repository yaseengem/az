import { QuizQuestion, TopicQuiz, TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic3Content: TopicContent = {
    id: 'cl5_ch12_t3',
    topicNumber: 3,
    topicName: "Data Analysis and Interpretation",
    duration: 45,
    description: "Understanding how to analyze and interpret data from different types of graphs",
    explanation: `
# Data Analysis and Interpretation 📊

Now that we've learned about different types of graphs, let's learn how to understand and explain what the data tells us! This is called data analysis and interpretation. It's like being a detective who finds clues in numbers! 🔍

## What is Data Analysis? 📈

Data analysis means looking at information carefully to understand what it tells us. It's like solving a puzzle where the pieces are numbers and patterns!

### Steps in Data Analysis
1. **Look at the Data**: First, we need to understand what the data shows
2. **Find Patterns**: Look for things that repeat or follow a rule
3. **Compare Values**: See how numbers are different or similar
4. **Calculate**: Do math to find totals, averages, and differences
5. **Draw Conclusions**: Explain what we learned from the data

## Key Concepts in Data Analysis 🔑

### 1. Highest and Lowest Values
- **Highest**: The biggest number in the data
- **Lowest**: The smallest number in the data
- **Range**: The difference between highest and lowest

### 2. Averages
- **Mean**: The total divided by how many numbers there are
- **Median**: The middle number when all numbers are in order
- **Mode**: The number that appears most often

### 3. Percentages
- Shows parts out of 100
- Helps compare different groups
- Makes it easy to understand proportions

### 4. Ratios
- Compares two numbers
- Shows how many times one number contains another
- Helps understand relationships between quantities

## How to Interpret Data 📖

### 1. Reading Graphs
- Look at the title to understand the topic
- Check the axes and labels
- Find the highest and lowest values
- Look for patterns and trends

### 2. Making Comparisons
- Compare different groups
- Look at changes over time
- Find similarities and differences
- Calculate percentages and ratios

### 3. Drawing Conclusions
- Explain what the data shows
- Identify important patterns
- Make predictions based on trends
- Share what you learned

## Real-Life Examples 🌟

### Example 1: Class Survey
In a class of 40 students:
- 15 like football
- 10 like cricket
- 15 like basketball

We can analyze this data to find:
- Most popular sport (football)
- Percentage of students who like each sport
- Ratio of football to cricket fans

### Example 2: Temperature Changes
Temperature over a day:
- 6 AM: 15°C
- 12 PM: 25°C
- 6 PM: 20°C

We can analyze this to find:
- Highest and lowest temperatures
- Temperature range
- Average temperature
- How temperature changed during the day

## Tips for Good Data Analysis 💡

1. **Be Careful**: Look at the data carefully
2. **Check Your Work**: Make sure calculations are correct
3. **Use the Right Tools**: Choose the best way to show the data
4. **Look for Patterns**: Find important trends and relationships
5. **Explain Clearly**: Make sure others can understand your analysis

## Common Mistakes to Avoid ❌

1. Not reading the data carefully
2. Making calculation errors
3. Forgetting to label units
4. Drawing wrong conclusions
5. Not checking your work

## Practice Questions 📝

1. In a class of 50 students, 20 are boys. What percentage are girls?
   - Answer: 60% (50 - 20 = 30 girls; 30/50 × 100 = 60%)

2. If a plant grew 2 cm each day for 5 days, what was its total growth?
   - Answer: 10 cm (2 cm × 5 days = 10 cm)

3. In a survey of 200 people, 40% prefer tea, 30% prefer coffee. How many prefer milk?
   - Answer: 60 people (100% - 40% - 30% = 30%; 30% of 200 = 60)

## Summary ✨

- Data analysis helps us understand information
- We can find patterns and trends in data
- Calculations help us compare and understand numbers
- Good analysis leads to clear conclusions
- Practice makes perfect in data analysis

Remember: Take your time, be careful, and always check your work! With practice, you'll become a data analysis expert! 🎯
`,
    quiz: {
        questions: [
            ...easyQuestions,
            ...mediumQuestions
        ]
    }
}; 