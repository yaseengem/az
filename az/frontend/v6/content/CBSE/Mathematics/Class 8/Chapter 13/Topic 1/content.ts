import { TopicContent } from '../../../../../types';
import { easyQuestions } from './quiz_easy';
import { mediumQuestions } from './quiz_medium';

export const Topic1Content: TopicContent = {
    id: 'cl8_ch13_t1',
    topicNumber: 1,
    topicName: "Types of graphs",
    duration: 45,
    description: "Understanding different types of graphs, their characteristics, and appropriate uses in data representation",
    explanation: `
# Types of Graphs 📊

Graphs are visual representations of data that help us understand and analyze information quickly and effectively. In this topic, we'll explore various types of graphs, their characteristics, and when to use each type. Let's dive into the world of data visualization! 🎯

## Bar Graphs 📊

Bar graphs use rectangular bars of varying heights or lengths to compare different categories or show changes over time.

### Characteristics:
- Bars can be vertical or horizontal
- Equal width for all bars
- Height/length represents the value
- Gaps between bars (unlike histograms)
- Can be single, double, or grouped

### When to Use:
- Comparing quantities across categories
- Showing discrete data
- Displaying frequency distributions
- Comparing data over time periods

### Example:
Imagine a class's favorite sports:
- Cricket: 15 students 🏏
- Football: 10 students ⚽
- Basketball: 5 students 🏀

The height of each bar would represent the number of students, making it easy to compare preferences.

## Line Graphs 📈

Line graphs connect individual data points to show trends and changes over time.

### Characteristics:
- Points connected by lines
- Shows continuous change
- Good for tracking trends
- Can show multiple sets of data
- X-axis typically represents time

### When to Use:
- Showing trends over time
- Displaying continuous data
- Comparing multiple trends
- Temperature changes
- Population growth

### Example:
Monthly temperature changes:
January: 15°C → February: 18°C → March: 22°C
The line clearly shows the warming trend through these months.

## Pie Charts 🥧

Pie charts divide a circle into sectors to show parts of a whole.

### Characteristics:
- Circle divided into sectors
- Each sector represents a percentage
- Total equals 100%
- Shows proportion of parts to whole
- Each sector's angle is proportional to its value

### When to Use:
- Showing parts of a whole
- Displaying percentages
- Budget allocations
- Market share analysis
- Time distribution

### Example:
Daily study time distribution:
- Mathematics: 30% (108°)
- Science: 25% (90°)
- English: 25% (90°)
- Other subjects: 20% (72°)

## Histograms 📊

Histograms look similar to bar graphs but show frequency distribution of continuous data.

### Characteristics:
- No gaps between bars
- Bars represent frequency
- Width shows class interval
- Area represents frequency
- Used for continuous data

### When to Use:
- Showing distribution of continuous data
- Test score distributions
- Height/weight data
- Age distributions
- Measurement data

### Example:
Test scores distribution:
0-20: 5 students
21-40: 8 students
41-60: 15 students
61-80: 10 students
81-100: 2 students

## Scatter Plots 📊

Scatter plots show relationships between two variables by plotting points on a coordinate plane.

### Characteristics:
- Shows correlation
- Each point represents two values
- Can show positive/negative correlation
- Pattern reveals relationship strength
- No connecting lines (usually)

### When to Use:
- Showing relationships between variables
- Analyzing correlation
- Scientific data
- Height vs. weight
- Study time vs. scores

### Example:
Plotting height (x-axis) against weight (y-axis) might show a positive correlation - as height increases, weight tends to increase too.

## Pictographs 🖼️

Pictographs use pictures or symbols to represent data.

### Characteristics:
- Uses symbols to represent quantities
- Simple and visually appealing
- Good for basic comparisons
- Each symbol represents a specific value
- Can use partial symbols

### When to Use:
- Elementary data representation
- Making data visually interesting
- Simple comparisons
- Public presentations
- Children's data understanding

### Example:
Book reading in a week:
Monday: 📚📚 (2 books)
Tuesday: 📚📚📚 (3 books)
Wednesday: 📚 (1 book)
Where each 📚 represents one book

## Important Considerations When Choosing a Graph Type 🤔

1. **Data Type**
   - Categorical data → Bar graphs, pie charts
   - Continuous data → Line graphs, histograms
   - Relationships → Scatter plots
   - Parts of whole → Pie charts

2. **Purpose**
   - Comparison → Bar graphs
   - Trends → Line graphs
   - Distribution → Histograms
   - Correlation → Scatter plots
   - Proportion → Pie charts

3. **Audience**
   - Technical audience → More complex graphs
   - General audience → Simpler representations
   - Children → Pictographs

## Best Practices 📝

1. **Always Include**:
   - Clear title
   - Labeled axes
   - Legend (if needed)
   - Source of data
   - Scale information

2. **Avoid**:
   - Misleading scales
   - 3D effects when unnecessary
   - Too many categories
   - Cluttered information
   - Inappropriate graph types

## Common Mistakes to Avoid ⚠️

1. Using pie charts for too many categories
2. Not starting bar graph scales at zero
3. Using the wrong graph type for your data
4. Forgetting to label axes
5. Making graphs too complex

## Real-World Applications 🌍

1. **Weather Forecasting**
   - Temperature changes → Line graphs
   - Rainfall distribution → Bar graphs
   - Humidity patterns → Line graphs

2. **Business**
   - Sales data → Bar or line graphs
   - Market share → Pie charts
   - Growth trends → Line graphs

3. **Education**
   - Test scores → Histograms
   - Subject preferences → Bar graphs
   - Time management → Pie charts

## Summary ✨

Different graph types serve different purposes:
- Bar Graphs → Comparisons
- Line Graphs → Trends
- Pie Charts → Parts of a whole
- Histograms → Distributions
- Scatter Plots → Relationships
- Pictographs → Simple visual representation

Choose the right type based on:
- Your data type
- Your message
- Your audience
- The comparison you want to make

Remember: The best graph is one that makes your data clear and easy to understand! 🎯
`,
    quiz: {
        questions: [
            ...easyQuestions,
            ...mediumQuestions
        ]
    }
}; 