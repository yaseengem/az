// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 9\Chapter12\Topic2\quiz_easy.ts
import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl9_ch12_t2_qe1',
        type: "mcq",
        question: "Which of the following is the best graphical representation for showing parts of a whole?",
        options: ["Bar graph", "Pie chart", "Line graph", "Histogram"],
        correctAnswer: "Pie chart",
        explanation: "A pie chart is specifically designed to show how different parts contribute to a whole, with each sector (slice) representing a proportion of the total. The entire circle represents 100% of the data. 🥧",
        wrongAnswerExplanations: {
            "Bar graph": "Bar graphs are better for comparing discrete categories, not showing parts of a whole.",
            "Line graph": "Line graphs are better for showing trends over time, not parts of a whole.",
            "Histogram": "Histograms show frequency distributions of continuous data, not parts of a whole."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch12_t2_qe2',
        type: "mcq",
        question: "What type of graph would be most appropriate to show temperature changes over a week?",
        options: ["Pie chart", "Bar graph", "Line graph", "Histogram"],
        correctAnswer: "Line graph",
        explanation: "A line graph is most appropriate for showing changes in data over time, such as temperature variations throughout a week. It clearly displays trends, patterns, and fluctuations across continuous time periods. 📈",
        wrongAnswerExplanations: {
            "Pie chart": "Pie charts show proportions of a whole, not changes over time.",
            "Bar graph": "While bar graphs can show time data, they are less effective than line graphs at showing continuous changes.",
            "Histogram": "Histograms show frequency distributions, not time-based changes."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch12_t2_qe3',
        type: "mcq",
        question: "When creating a histogram for grouped data with unequal class intervals, what should be used for the height of the rectangles?",
        options: ["Frequency", "Class mark", "Frequency density", "Relative frequency"],
        correctAnswer: "Frequency density",
        explanation: "When class intervals are unequal, histogram rectangles should have heights based on frequency density (frequency ÷ class width). This ensures the area of each rectangle accurately represents the frequency, maintaining the correct visual proportion. 📊",
        wrongAnswerExplanations: {
            "Frequency": "Using raw frequency with unequal intervals would distort the visual representation.",
            "Class mark": "Class marks determine the position on the x-axis, not the height of rectangles.",
            "Relative frequency": "While better than raw frequency, this still doesn't account for varying class widths."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch12_t2_qe4',
        type: "mcq",
        question: "What can we determine directly from a cumulative frequency curve (ogive)?",
        options: ["Mean", "Mode", "Median", "Standard deviation"],
        correctAnswer: "Median",
        explanation: "The median can be determined directly from a cumulative frequency curve by finding the value corresponding to half the total frequency. Draw a horizontal line from the y-axis at N/2 (where N is the total frequency) and read the corresponding x-value where it intersects the ogive. 📉",
        wrongAnswerExplanations: {
            "Mean": "The mean cannot be directly determined from an ogive without calculations.",
            "Mode": "The mode cannot be directly determined from an ogive; it's better found from a histogram.",
            "Standard deviation": "The standard deviation requires calculations and cannot be read directly from an ogive."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch12_t2_qe5',
        type: "mcq",
        question: "In a pie chart, if the central angle of a sector is 72°, what fraction of the total data does this sector represent?",
        options: ["1/4", "1/5", "1/6", "1/3"],
        correctAnswer: "1/5",
        explanation: "In a pie chart, the fraction of data represented by a sector equals its central angle divided by 360°. Here, the fraction is 72°/360° = 1/5. This means the sector represents 20% of the total data. 🔢",
        wrongAnswerExplanations: {
            "1/4": "This would correspond to a central angle of 90°, not 72°.",
            "1/6": "This would correspond to a central angle of 60°, not 72°.",
            "1/3": "This would correspond to a central angle of 120°, not 72°."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch12_t2_qe6',
        type: "mcq",
        question: "Which graph type has no gaps between its bars?",
        options: ["Bar graph", "Histogram", "Line graph", "Scatter plot"],
        correctAnswer: "Histogram",
        explanation: "A histogram has no gaps between its bars because it represents continuous data where one class interval immediately follows another. This visual characteristic distinguishes histograms from bar graphs, which have gaps between bars to represent discrete categories. 📊",
        wrongAnswerExplanations: {
            "Bar graph": "Bar graphs have gaps between bars to represent discrete categories.",
            "Line graph": "Line graphs consist of points connected by lines, not bars.",
            "Scatter plot": "Scatter plots consist of individual points, not bars."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch12_t2_qe7',
        type: "mcq",
        question: "What does the steepness of a line in a line graph indicate?",
        options: ["The value at that point", "The rate of change", "The total value", "The average value"],
        correctAnswer: "The rate of change",
        explanation: "The steepness (slope) of a line in a line graph indicates the rate of change between data points. A steep upward slope shows a rapid increase, a steep downward slope shows a rapid decrease, and a gentle slope indicates a slow change. A horizontal line shows no change. 📈",
        wrongAnswerExplanations: {
            "The value at that point": "The vertical position (y-coordinate) shows the value, not the steepness.",
            "The total value": "The steepness doesn't indicate total value, just how quickly values are changing.",
            "The average value": "The steepness doesn't represent an average, just the rate of change."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch12_t2_qe8',
        type: "mcq",
        question: "In a frequency polygon, what does a peak indicate?",
        options: ["The minimum value", "The maximum value", "A concentration of data (possibly the mode)", "The median value"],
        correctAnswer: "A concentration of data (possibly the mode)",
        explanation: "A peak in a frequency polygon indicates a concentration of data values, often corresponding to the mode or a modal class. It shows where the frequency is highest, meaning more data points fall in that particular range than in neighboring ranges. 📉",
        wrongAnswerExplanations: {
            "The minimum value": "Minimum values typically appear at the lowest points of a frequency polygon, not peaks.",
            "The maximum value": "The maximum individual data value cannot be directly determined from peaks in a frequency polygon.",
            "The median value": "The median is not directly visible from the shape of a frequency polygon."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch12_t2_qe9',
        type: "mcq",
        question: "When is a scatter plot most useful?",
        options: [
            "To show changes over time", 
            "To compare different categories", 
            "To examine the relationship between two variables", 
            "To display parts of a whole"
        ],
        correctAnswer: "To examine the relationship between two variables",
        explanation: "A scatter plot is most useful for examining the relationship or correlation between two continuous variables. Each point represents an observation with values for both variables, allowing us to visualize patterns, trends, or correlations between them. 🔍",
        wrongAnswerExplanations: {
            "To show changes over time": "Line graphs are typically better for showing changes over time.",
            "To compare different categories": "Bar graphs are better for comparing different categories.",
            "To display parts of a whole": "Pie charts are better for displaying parts of a whole."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch12_t2_qe10',
        type: "mcq",
        question: "What is the primary purpose of a box plot (box-and-whisker plot)?",
        options: [
            "To show the exact distribution of all data points", 
            "To compare categorical data", 
            "To show the five-number summary and identify outliers", 
            "To show changes over time"
        ],
        correctAnswer: "To show the five-number summary and identify outliers",
        explanation: "A box plot (or box-and-whisker plot) primarily shows the five-number summary of a dataset: minimum, first quartile (Q1), median, third quartile (Q3), and maximum. It also clearly identifies outliers as individual points beyond the whiskers, making it excellent for comparing distributions. 📦",
        wrongAnswerExplanations: {
            "To show the exact distribution of all data points": "Box plots show a summary, not the exact distribution of every data point.",
            "To compare categorical data": "Box plots are for numerical data, not categorical data.",
            "To show changes over time": "Box plots typically don't show temporal changes; line graphs are better for that."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch12_t2_qe11',
        type: "mcq",
        question: "What is the class mark of the interval 15-25?",
        options: ["15", "20", "25", "40"],
        correctAnswer: "20",
        explanation: "The class mark is the midpoint of a class interval, calculated as (lower limit + upper limit)/2. For the interval 15-25, the class mark is (15 + 25)/2 = 40/2 = 20. 🔢",
        wrongAnswerExplanations: {
            "15": "This is the lower limit of the class interval, not the class mark.",
            "25": "This is the upper limit of the class interval, not the class mark.",
            "40": "This is the sum of the limits, not the class mark, which should be 40/2 = 20."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch12_t2_qe12',
        type: "mcq",
        question: "Which of the following is NOT a type of graphical representation of data?",
        options: ["Histogram", "Polynomial", "Pie chart", "Bar graph"],
        correctAnswer: "Polynomial",
        explanation: "A polynomial is a mathematical expression consisting of variables and coefficients, not a type of graphical representation of data. Histograms, pie charts, and bar graphs are all valid methods for visually representing data. 📊",
        wrongAnswerExplanations: {
            "Histogram": "A histogram is a valid graphical representation for continuous data using adjacent rectangles.",
            "Pie chart": "A pie chart is a valid graphical representation showing parts of a whole as sectors of a circle.",
            "Bar graph": "A bar graph is a valid graphical representation using bars to compare discrete categories."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch12_t2_qe13',
        type: "mcq",
        question: "How many degrees are there in a complete pie chart?",
        options: ["90°", "180°", "270°", "360°"],
        correctAnswer: "360°",
        explanation: "A complete pie chart represents a full circle, which contains 360 degrees. Each sector (slice) of the pie chart has a central angle proportional to the quantity it represents relative to the total. 🥧",
        wrongAnswerExplanations: {
            "90°": "This represents only a quarter of a circle, not a complete pie chart.",
            "180°": "This represents a semicircle, not a complete pie chart.",
            "270°": "This represents three-quarters of a circle, not a complete pie chart."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch12_t2_qe14',
        type: "mcq",
        question: "What information can a frequency polygon provide that a histogram cannot easily show?",
        options: [
            "The exact frequency of each class", 
            "The class with the highest frequency", 
            "Multiple distributions on the same graph for comparison", 
            "The total number of observations"
        ],
        correctAnswer: "Multiple distributions on the same graph for comparison",
        explanation: "A frequency polygon can easily show multiple distributions on the same graph for direct comparison, which is difficult with overlapping histograms. By plotting different data sets as separate polygons, we can clearly see differences in shape, central tendency, and spread. 📉",
        wrongAnswerExplanations: {
            "The exact frequency of each class": "Both histograms and frequency polygons can show exact frequencies.",
            "The class with the highest frequency": "Both can clearly show which class has the highest frequency.",
            "The total number of observations": "Neither directly shows the total number of observations without counting."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch12_t2_qe15',
        type: "mcq",
        question: "In a stem-and-leaf plot, what does the stem typically represent?",
        options: [
            "The ones digit", 
            "The leading digit(s)", 
            "The last digit", 
            "The median value"
        ],
        correctAnswer: "The leading digit(s)",
        explanation: "In a stem-and-leaf plot, the stem typically represents the leading digit(s) of each data value (tens, hundreds, etc.), while the leaf represents the final digit. For example, in the number 37, '3' would be the stem and '7' would be the leaf. 🌱",
        wrongAnswerExplanations: {
            "The ones digit": "The ones digit is the leaf, not the stem.",
            "The last digit": "The last digit is the leaf, not the stem.",
            "The median value": "The stem is part of the data representation, not a statistical measure."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch12_t2_qe16',
        type: "mcq",
        question: "What is misleading about a bar graph that doesn't start at zero?",
        options: [
            "It makes the data look more varied than it is", 
            "It reduces the visual impact of the data", 
            "It exaggerates the differences between values", 
            "It always underestimates the values"
        ],
        correctAnswer: "It exaggerates the differences between values",
        explanation: "A bar graph that doesn't start at zero misleadingly exaggerates the differences between values. Since bar height should be proportional to the actual values, starting at a non-zero point distorts this proportion and can lead to visual misinterpretation of the relative magnitudes. ⚠️",
        wrongAnswerExplanations: {
            "It makes the data look more varied than it is": "While this can be true, it's not the primary issue.",
            "It reduces the visual impact of the data": "It actually increases the visual impact by exaggerating differences.",
            "It always underestimates the values": "It doesn't underestimate values; it distorts the visual comparison between them."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch12_t2_qe17',
        type: "mcq",
        question: "If a dataset has values ranging from 15 to 85, which of these would be a suitable set of class intervals for a histogram?",
        options: [
            "0-20, 20-40, 40-60, 60-80, 80-100", 
            "15-25, 26-36, 37-47, 48-58, 59-69, 70-80, 81-91", 
            "10-20, 20-30, 30-40, 40-50, 50-60, 60-70, 70-80, 80-90", 
            "15-35, 35-55, 55-75, 75-95"
        ],
        correctAnswer: "10-20, 20-30, 30-40, 40-50, 50-60, 60-70, 70-80, 80-90",
        explanation: "For a histogram, class intervals should be continuous with no gaps or overlaps. The option '10-20, 20-30, 30-40...' provides equal intervals that cover the entire range of data from 15 to 85, with each interval having a width of 10. These intervals are continuous (the upper limit of one class equals the lower limit of the next). 📊",
        wrongAnswerExplanations: {
            "0-20, 20-40, 40-60, 60-80, 80-100": "These intervals have unequal widths (the first is width 20), which isn't ideal if frequency density isn't used.",
            "15-25, 26-36, 37-47, 48-58, 59-69, 70-80, 81-91": "These intervals have gaps between them (e.g., between 25 and 26), which is incorrect for a histogram.",
            "15-35, 35-55, 55-75, 75-95": "While these cover the range, having fewer wider intervals (width 20) might obscure important patterns in the data."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch12_t2_qe18',
        type: "mcq",
        question: "What is the purpose of using a double bar graph?",
        options: [
            "To show the range of data", 
            "To compare two sets of data across the same categories", 
            "To show the distribution of data", 
            "To identify outliers in the data"
        ],
        correctAnswer: "To compare two sets of data across the same categories",
        explanation: "A double bar graph is specifically designed to compare two sets of related data across the same categories. For example, it might show sales figures for two different years across the same product categories, allowing for direct visual comparison of the two data sets. 📊",
        wrongAnswerExplanations: {
            "To show the range of data": "Double bar graphs don't emphasize the range; box plots are better for this.",
            "To show the distribution of data": "Histograms are better for showing distributions.",
            "To identify outliers in the data": "Box plots are better for identifying outliers."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch12_t2_qe19',
        type: "mcq",
        question: "If a pie chart shows that expenses on rent is 30% of the total expenses, what is the central angle of the sector representing rent?",
        options: ["30°", "60°", "90°", "108°"],
        correctAnswer: "108°",
        explanation: "To find the central angle in a pie chart, multiply the percentage by 360°. For rent, which is 30% of the total: Central angle = 30% × 360° = 0.3 × 360° = 108°. This angle represents the proportion of total expenses spent on rent. 🥧",
        wrongAnswerExplanations: {
            "30°": "This confuses the percentage (30%) with the angle in degrees.",
            "60°": "This would represent about 16.7% of the total, not 30%.",
            "90°": "This would represent 25% of the total, not 30%."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch12_t2_qe20',
        type: "mcq",
        question: "Which of the following best describes a frequency distribution table?",
        options: [
            "A table showing the number of times each individual data value occurs", 
            "A table organizing data into groups and showing how many values fall into each group", 
            "A table showing the cumulative total of data values", 
            "A table displaying the mean, median, and mode of the data"
        ],
        correctAnswer: "A table organizing data into groups and showing how many values fall into each group",
        explanation: "A frequency distribution table organizes data into groups (classes or intervals) and shows how many data points fall into each group. It provides a structured summary of the data distribution, making it easier to analyze patterns and create visual representations like histograms. 📊",
        wrongAnswerExplanations: {
            "A table showing the number of times each individual data value occurs": "This describes a simple frequency table, not a grouped frequency distribution.",
            "A table showing the cumulative total of data values": "This describes a cumulative frequency table, which is different.",
            "A table displaying the mean, median, and mode of the data": "This describes a summary statistics table, not a frequency distribution."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    }
];
