// Topic 1: Pictographs and bar graphs
// content.ts will be created here for the topic.

import { QuizQuestion, TopicQuiz, TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic1Content: TopicContent = {
    id: 'cl6_ch9_t1',
    topicNumber: 1,
    topicName: "Pictographs and Bar Graphs",
    duration: 45,
    description: "Understanding how to read and create pictographs and bar graphs to represent data",
    explanation: `
# Pictographs and Bar Graphs 📊

Welcome to the world of data representation! 🌟 In this topic, we'll learn how to use pictographs and bar graphs to organize and display information in a clear and visual way. Let's explore these tools step by step! 🚀

## Understanding Data Representation 📈

### Pictographs 🖼️
1. **What is a Pictograph?**
   - A graph that uses pictures or symbols to represent data
   - Each picture/symbol stands for a certain number of items
   - Example: If 🍎 = 5 apples, then 🍎🍎 = 10 apples

2. **Parts of a Pictograph**
   - Title: Tells what the graph is about
   - Key: Shows what each symbol represents
   - Categories: Different groups being compared
   - Symbols: Pictures used to show quantities

3. **Reading a Pictograph**
   - Count the number of symbols
   - Multiply by the value of each symbol
   - Example: If 🏀 = 2 basketballs and there are 3 🏀, then total = 6 basketballs

### Bar Graphs 📊
1. **What is a Bar Graph?**
   - A graph that uses bars to represent data
   - Height of each bar shows the quantity
   - Bars can be vertical or horizontal

2. **Parts of a Bar Graph**
   - Title: Describes what the graph shows
   - X-axis: Shows categories
   - Y-axis: Shows numbers/quantities
   - Bars: Represent the data
   - Scale: Numbers on the axis

3. **Reading a Bar Graph**
   - Look at the height of each bar
   - Match it to the scale
   - Compare different bars

## Examples 📝

### Pictograph Example
Fruits Sold in a Week:
- 🍎 = 5 apples
- Monday: 🍎🍎 (10 apples)
- Tuesday: 🍎🍎🍎 (15 apples)
- Wednesday: 🍎 (5 apples)

### Bar Graph Example
Number of Books Read:
- January: 4 books
- February: 6 books
- March: 3 books
- April: 5 books

## Real-Life Applications 🌍

1. **School Data** 🏫
   - Attendance records
   - Test scores
   - Sports participation

2. **Weather** 🌤️
   - Temperature records
   - Rainfall measurements
   - Weather patterns

3. **Business** 💼
   - Sales data
   - Customer preferences
   - Product popularity

## Practice Problems 🏋️‍♀️

1. **Example 1**: Create a pictograph showing favorite fruits of 20 students:
   - Apple: 8 students
   - Banana: 5 students
   - Orange: 7 students

2. **Example 2**: Draw a bar graph for monthly rainfall:
   - January: 5 cm
   - February: 3 cm
   - March: 7 cm
   - April: 4 cm

## Common Mistakes to Avoid ❌

1. **Incorrect Scale**
   - Always check the value of each symbol
   - Make sure the scale is consistent
   - Example: If 🍎 = 5, don't count each 🍎 as 1

2. **Missing Parts**
   - Always include title, key, and labels
   - Make sure bars are properly labeled
   - Example: Don't forget to label the axes

3. **Inconsistent Symbols**
   - Use the same symbol throughout
   - Keep symbols the same size
   - Example: Don't mix different apple symbols

## Summary ✨

In this topic, we learned:
- How to read and create pictographs
- How to read and create bar graphs
- The importance of proper labeling
- Real-life applications of data representation
- Common mistakes to avoid

### Additional Examples and Sample Questions:

1. **Example**: Create a pictograph showing favorite colors of 15 students:
   - Red: 5 students
   - Blue: 4 students
   - Green: 6 students

2. **Example**: Draw a bar graph for weekly savings:
   - Week 1: ₹50
   - Week 2: ₹75
   - Week 3: ₹60
   - Week 4: ₹85

3. **Question**: If 🚗 = 2 cars, how many cars does 🚗🚗🚗 represent? (Answer: 6 cars)

4. **Question**: In a bar graph, if the scale is 1 unit = 5 books, how many books does a bar of 4 units represent? (Answer: 20 books)
`,
    quiz: {
        questions: [
            ...easyQuestions,
            ...mediumQuestions
        ]
    }
};
