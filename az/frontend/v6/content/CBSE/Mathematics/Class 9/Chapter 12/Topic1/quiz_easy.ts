import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl9_ch12_t1_qe1',
        type: "mcq",
        question: "Which type of graph is most appropriate for displaying the percentage distribution of different categories that make up a whole?",
        options: [
            "Bar graph",
            "Line graph",
            "Pie chart",
            "Histogram"
        ],
        correctAnswer: "Pie chart",
        explanation: "A pie chart is specifically designed to show how different categories contribute to a whole, with each slice representing a percentage of the total. This makes it ideal for displaying percentage distributions of different categories. 🥧",
        wrongAnswerExplanations: {
            "Bar graph": "Bar graphs are better for comparing quantities across different categories, but don't inherently show parts of a whole.",
            "Line graph": "Line graphs are best for showing trends over time, not percentage distributions.",
            "Histogram": "Histograms display frequency distributions of continuous data, not percentage breakdowns of categories."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch12_t1_qe2',
        type: "mcq",
        question: "What is the main difference between a bar graph and a histogram?",
        options: [
            "Bar graphs represent categorical data while histograms represent continuous data grouped in intervals",
            "Bar graphs use horizontal bars while histograms use vertical bars",
            "Bar graphs always have gaps between bars while histograms never have gaps",
            "Bar graphs show percentages while histograms show frequencies"
        ],
        correctAnswer: "Bar graphs represent categorical data while histograms represent continuous data grouped in intervals",
        explanation: "The fundamental difference is in the type of data they represent. Bar graphs display categorical data (distinct categories), while histograms represent continuous data that has been grouped into intervals (bins). This affects how they're constructed and interpreted. 📊",
        wrongAnswerExplanations: {
            "Bar graphs use horizontal bars while histograms use vertical bars": "Both bar graphs and histograms can use either horizontal or vertical bars.",
            "Bar graphs always have gaps between bars while histograms never have gaps": "While there are typically gaps in bar graphs and no gaps in histograms, this is a result of the data type, not the primary difference.",
            "Bar graphs show percentages while histograms show frequencies": "Both can display frequencies or percentages; the display unit isn't the defining difference."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch12_t1_qe3',
        type: "mcq",
        question: "Which graph type is most suitable for showing trends in a dataset over time?",
        options: [
            "Pie chart",
            "Bar graph",
            "Line graph",
            "Histogram"
        ],
        correctAnswer: "Line graph",
        explanation: "Line graphs are specifically designed to display trends and changes over time. By connecting data points with lines, they clearly show how values increase, decrease, or fluctuate across continuous time periods, making patterns easy to identify. 📈",
        wrongAnswerExplanations: {
            "Pie chart": "Pie charts show proportional parts of a whole at a single point in time, not trends over time.",
            "Bar graph": "While bar graphs can show data at different time points, line graphs are better for visualizing continuous trends over time.",
            "Histogram": "Histograms show frequency distributions of data, not temporal trends."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch12_t1_qe4',
        type: "mcq",
        question: "In a pie chart, if a category represents 25% of the total, what angle should its sector have?",
        options: [
            "25°",
            "90°",
            "180°",
            "360°"
        ],
        correctAnswer: "90°",
        explanation: "In a pie chart, the angle of a sector is calculated using the formula: Angle = (Percentage/100) × 360°. For 25%, the angle would be (25/100) × 360° = 90°. Since a full circle is 360°, a quarter of it (25%) would be 90°. 📐",
        wrongAnswerExplanations: {
            "25°": "This confuses the percentage value with the angle measure. 25% of a full circle (360°) is 90°, not 25°.",
            "180°": "This represents 50% of a circle (half), not 25%.",
            "360°": "This represents 100% of a circle (the whole circle), not 25%."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch12_t1_qe5',
        type: "mcq",
        question: "What is an ogive in statistical data representation?",
        options: [
            "A bar graph with horizontal bars",
            "A circular chart showing proportions",
            "A cumulative frequency curve",
            "A graph showing the relationship between two variables"
        ],
        correctAnswer: "A cumulative frequency curve",
        explanation: "An ogive is a graphical representation of cumulative frequencies. It shows how many data values lie below or above certain points, creating a running total of frequencies. Ogives are useful for finding median values and other percentiles graphically. 📉",
        wrongAnswerExplanations: {
            "A bar graph with horizontal bars": "This is simply a horizontal bar graph, not an ogive.",
            "A circular chart showing proportions": "This describes a pie chart, not an ogive.",
            "A graph showing the relationship between two variables": "This generally describes a scatter plot, not an ogive."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch12_t1_qe6',
        type: "mcq",
        question: "When constructing a frequency polygon, where are the points plotted?",
        options: [
            "At the upper right corner of each histogram bar",
            "At the midpoint of the top of each histogram bar",
            "At the lower left corner of each histogram bar",
            "At the center of each histogram bar"
        ],
        correctAnswer: "At the midpoint of the top of each histogram bar",
        explanation: "To construct a frequency polygon, points are plotted at the midpoint of the upper side (top) of each histogram bar. These points represent the class mark on the x-axis and the frequency on the y-axis. The points are then connected with straight lines. 📈",
        wrongAnswerExplanations: {
            "At the upper right corner of each histogram bar": "Points are plotted at the midpoint, not at the corners.",
            "At the lower left corner of each histogram bar": "Points are plotted at the top midpoint, not at the bottom corners.",
            "At the center of each histogram bar": "Points are plotted at the midpoint of the top, not at the center of the entire bar."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch12_t1_qe7',
        type: "mcq",
        question: "What type of graph would best represent the monthly rainfall in a city over a year?",
        options: [
            "Pie chart",
            "Bar graph",
            "Scatter plot",
            "Line graph"
        ],
        correctAnswer: "Bar graph",
        explanation: "A bar graph is ideal for comparing discrete quantities over different categories, like rainfall amounts across different months. Each month can be represented by a bar, with the height proportional to the rainfall amount, making it easy to compare precipitation across the year. 📊",
        wrongAnswerExplanations: {
            "Pie chart": "A pie chart would not effectively show the monthly pattern or allow for easy comparison between individual months.",
            "Scatter plot": "A scatter plot is used to show the relationship between two variables, not for displaying single values over time.",
            "Line graph": "While a line graph could be used, a bar graph is more appropriate for discrete time periods like months, especially for rainfall data which is not continuous."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch12_t1_qe8',
        type: "mcq",
        question: "The angles in a pie chart must always sum to:",
        options: [
            "90°",
            "180°",
            "270°",
            "360°"
        ],
        correctAnswer: "360°",
        explanation: "The angles in a pie chart always sum to 360° because a pie chart represents a complete circle, which has 360 degrees. Each slice represents a proportion of the whole, and together all slices must form the complete circle. 🔄",
        wrongAnswerExplanations: {
            "90°": "90° is a quarter of a circle, not the full circle needed for a pie chart.",
            "180°": "180° is half of a circle, not the full circle needed for a pie chart.",
            "270°": "270° is three-quarters of a circle, not the full circle needed for a pie chart."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch12_t1_qe9',
        type: "mcq",
        question: "Which of the following is true about histograms?",
        options: [
            "There are always gaps between the bars",
            "The horizontal axis represents categories",
            "The area of each bar is proportional to the frequency",
            "They are best used for showing trends over time"
        ],
        correctAnswer: "The area of each bar is proportional to the frequency",
        explanation: "In a histogram, the area of each bar is proportional to the frequency of the data in that interval. This is an important property, especially when the class intervals have different widths. The height then represents the frequency density (frequency divided by class width). 📊",
        wrongAnswerExplanations: {
            "There are always gaps between the bars": "In histograms, bars are adjacent with no gaps because they represent continuous data.",
            "The horizontal axis represents categories": "The horizontal axis represents continuous numerical intervals, not distinct categories.",
            "They are best used for showing trends over time": "Histograms show frequency distributions, not temporal trends. Line graphs are better for showing trends over time."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch12_t1_qe10',
        type: "mcq",
        question: "In which type of graph would the y-axis typically represent frequency?",
        options: [
            "Pie chart",
            "Line graph",
            "Histogram",
            "Scatter plot"
        ],
        correctAnswer: "Histogram",
        explanation: "In a histogram, the y-axis typically represents frequency (count) or relative frequency (percentage). The x-axis shows continuous intervals of data, and the height of each bar indicates how many data points fall within that interval. 📊",
        wrongAnswerExplanations: {
            "Pie chart": "Pie charts don't have axes; they use proportional slices of a circle.",
            "Line graph": "While line graphs can show frequency, they typically show values over time or another continuous variable.",
            "Scatter plot": "Scatter plots show the relationship between two variables, with each axis representing a different variable, not typically frequency."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch12_t1_qe11',
        type: "mcq",
        question: "What is the purpose of using a 'less than' ogive?",
        options: [
            "To find the mode of the data",
            "To determine the median and percentiles",
            "To calculate the mean of the data",
            "To identify the range of the data"
        ],
        correctAnswer: "To determine the median and percentiles",
        explanation: "A 'less than' ogive (cumulative frequency curve) is particularly useful for determining the median and other percentile values graphically. By finding the point on the y-axis corresponding to half the total frequency and projecting horizontally to the curve, then down to the x-axis, we can find the median value. 📉",
        wrongAnswerExplanations: {
            "To find the mode of the data": "Mode is best found from a frequency distribution or histogram, not an ogive.",
            "To calculate the mean of the data": "Mean cannot be directly determined from an ogive; it requires actual data values.",
            "To identify the range of the data": "While ogives do show the full span of data, simple minimum and maximum values are sufficient to find the range."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch12_t1_qe12',
        type: "mcq",
        question: "A frequency polygon can be constructed by joining the midpoints of the tops of histogram bars with straight lines.",
        options: [
            "True",
            "False"
        ],
        correctAnswer: "True",
        explanation: "This is correct. To create a frequency polygon, you plot points at the midpoint of the top of each histogram bar (class mark on x-axis, frequency on y-axis) and connect these points with straight lines. The polygon is typically extended to meet the x-axis at points before the first class and after the last class. 📈",
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch12_t1_qe13',
        type: "mcq",
        question: "Which type of graph is most suitable for comparing the number of students in different classes of a school?",
        options: [
            "Pie chart",
            "Bar graph",
            "Line graph",
            "Scatter plot"
        ],
        correctAnswer: "Bar graph",
        explanation: "A bar graph is ideal for comparing quantities across different discrete categories, such as the number of students in different classes. Each class can be represented by a bar, with the height proportional to the number of students, making visual comparison easy. 📊",
        wrongAnswerExplanations: {
            "Pie chart": "A pie chart would be suitable if you wanted to show what proportion of all students are in each class, but less effective for comparing absolute numbers.",
            "Line graph": "Line graphs are better for showing trends over time or continuous data, not discrete categories like classes.",
            "Scatter plot": "Scatter plots show relationships between two variables, not comparisons across categories."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch12_t1_qe14',
        type: "mcq",
        question: "What type of graph would be most appropriate for displaying the age distribution of a population?",
        options: [
            "Pie chart",
            "Line graph",
            "Histogram",
            "Bar graph"
        ],
        correctAnswer: "Histogram",
        explanation: "A histogram is ideal for displaying the distribution of continuous data like ages. Ages can be grouped into intervals (e.g., 0-10, 10-20, etc.), and the histogram would show how many people fall into each age group, clearly displaying the overall age distribution pattern. 📊",
        wrongAnswerExplanations: {
            "Pie chart": "A pie chart wouldn't effectively show the distribution pattern across a continuous variable like age.",
            "Line graph": "Line graphs are better for showing trends over time, not distributions at a single point in time.",
            "Bar graph": "While similar to histograms, bar graphs are better for discrete categories rather than continuous data grouped into intervals."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch12_t1_qe15',
        type: "mcq",
        question: "When is it appropriate to use a multiple bar graph?",
        options: [
            "When showing parts of a whole",
            "When comparing two or more characteristics for the same categories",
            "When displaying frequency distribution of continuous data",
            "When illustrating trends over time"
        ],
        correctAnswer: "When comparing two or more characteristics for the same categories",
        explanation: "A multiple bar graph is used when you need to compare two or more characteristics across the same set of categories. For example, showing both male and female student counts across different classes, or comparing sales figures for different products across multiple years. 📊",
        wrongAnswerExplanations: {
            "When showing parts of a whole": "This is better represented by a pie chart or stacked bar graph.",
            "When displaying frequency distribution of continuous data": "This is better shown with a histogram.",
            "When illustrating trends over time": "This is better displayed using a line graph."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch12_t1_qe16',
        type: "mcq",
        question: "If the total number of data points is 50, and the cumulative frequency up to a certain value is 35, what percentage of the data lies below that value?",
        options: [
            "35%",
            "50%",
            "65%",
            "70%"
        ],
        correctAnswer: "70%",
        explanation: "To find the percentage of data below a certain value, divide the cumulative frequency by the total number of data points and multiply by 100. In this case: (35/50) × 100 = 70%. This means 70% of the data values lie below the specified value. 📊",
        wrongAnswerExplanations: {
            "35%": "This is the cumulative frequency, not the percentage.",
            "50%": "This is the total number of data points, not the percentage.",
            "65%": "This is an incorrect calculation."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch12_t1_qe17',
        type: "mcq",
        question: "A line graph is the best choice for displaying the relationship between height and weight of students in a class.",
        options: [
            "True",
            "False"
        ],
        correctAnswer: "False",
        explanation: "A line graph is not the best choice for displaying the relationship between two variables like height and weight. A scatter plot would be more appropriate as it shows how one variable relates to another, with each point representing an individual student's height and weight. Line graphs are better for showing trends over time. 📈",
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch12_t1_qe18',
        type: "mcq",
        question: "Which of these is NOT a common mistake when creating graphs?",
        options: [
            "Using different colors for different data categories",
            "Starting the y-axis at a non-zero value to exaggerate differences",
            "Not including clear titles and labels",
            "Using 3D effects that can distort perception"
        ],
        correctAnswer: "Using different colors for different data categories",
        explanation: "Using different colors for different data categories is actually a good practice as it helps distinguish between different data sets and improves clarity. The other options are common mistakes that can mislead viewers or make the graph difficult to interpret. 🎨",
        wrongAnswerExplanations: {
            "Starting the y-axis at a non-zero value to exaggerate differences": "This is a common mistake that can mislead viewers about the magnitude of differences.",
            "Not including clear titles and labels": "This is a common mistake that makes graphs difficult to interpret.",
            "Using 3D effects that can distort perception": "This is a common mistake where decorative 3D effects can distort the visual representation of the data."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch12_t1_qe19',
        type: "mcq",
        question: "What is the key difference between a 'less than' ogive and a 'more than' ogive?",
        options: [
            "A 'less than' ogive starts from the bottom left while a 'more than' ogive starts from the top left",
            "A 'less than' ogive uses cumulative frequencies less than or equal to the upper limit of each class, while a 'more than' ogive uses cumulative frequencies more than or equal to the lower limit",
            "A 'less than' ogive is drawn with a solid line while a 'more than' ogive uses a dotted line",
            "A 'less than' ogive is used for discrete data while a 'more than' ogive is used for continuous data"
        ],
        correctAnswer: "A 'less than' ogive uses cumulative frequencies less than or equal to the upper limit of each class, while a 'more than' ogive uses cumulative frequencies more than or equal to the lower limit",
        explanation: "The key difference is in how cumulative frequencies are calculated. A 'less than' ogive plots cumulative frequencies up to the upper limit of each class interval, showing how many values are less than or equal to that point. A 'more than' ogive plots how many values are greater than or equal to the lower limit of each class. 📉",
        wrongAnswerExplanations: {
            "A 'less than' ogive starts from the bottom left while a 'more than' ogive starts from the top left": "Both types of ogives can start at different points depending on the data; this isn't the defining difference.",
            "A 'less than' ogive is drawn with a solid line while a 'more than' ogive uses a dotted line": "The line style isn't what distinguishes these types of ogives.",
            "A 'less than' ogive is used for discrete data while a 'more than' ogive is used for continuous data": "Both types can be used for either discrete or continuous data."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch12_t1_qe20',
        type: "mcq",
        question: "If a company's quarterly profits are ₹5 lakh, ₹7 lakh, ₹6.5 lakh, and ₹8 lakh, which graph would best show how the profits changed throughout the year?",
        options: [
            "Pie chart",
            "Line graph",
            "Histogram",
            "Scatter plot"
        ],
        correctAnswer: "Line graph",
        explanation: "A line graph is the best choice for showing how a value changes over time. In this case, it would clearly show the trend of quarterly profits rising and falling throughout the year, making patterns and overall direction easy to identify. 📈",
        wrongAnswerExplanations: {
            "Pie chart": "A pie chart would show the proportion of annual profit from each quarter, but not how profits changed over time.",
            "Histogram": "Histograms show frequency distributions, not changes over time.",
            "Scatter plot": "Scatter plots show relationships between two variables, not a single variable's change over time."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    }
];
