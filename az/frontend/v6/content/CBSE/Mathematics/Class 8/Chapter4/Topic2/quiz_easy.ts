// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 8\Chapter4\Topic2\quiz_easy.ts
import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl8_ch4_t2_qe1',
        type: "mcq",
        question: "What is a bar graph used for?",
        options: ["To show continuous data over time", "To compare quantities among different categories", "To show relationships between variables", "To predict future trends"],
        correctAnswer: "To compare quantities among different categories",
        explanation: "Bar graphs are used to compare quantities or values among different categories. They represent data with rectangular bars of heights proportional to the values. 📊",
        wrongAnswerExplanations: {
            "To show continuous data over time": "Line graphs are more suitable for showing continuous data over time.",
            "To show relationships between variables": "Scatter plots are better for showing relationships between variables.",
            "To predict future trends": "Bar graphs display current data, not predictions."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch4_t2_qe2',
        type: "mcq",
        question: "In a pie chart, what does each sector represent?",
        options: ["A percentage of the total value", "A comparison between two values", "The rate of change", "The median value"],
        correctAnswer: "A percentage of the total value",
        explanation: "Each sector in a pie chart represents a percentage or proportion of the whole. The entire circle represents 100% or the whole data set. 🥧",
        wrongAnswerExplanations: {
            "A comparison between two values": "Pie charts show parts of a whole, not direct comparisons between values.",
            "The rate of change": "Pie charts don't show changes over time, they represent proportions at a specific point.",
            "The median value": "Pie charts don't specifically highlight the median value."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch4_t2_qe3',
        type: "mcq",
        question: "What is the sum of all angles in a pie chart?",
        options: ["90°", "180°", "270°", "360°"],
        correctAnswer: "360°",
        explanation: "A pie chart is a full circle, and a complete circle contains 360 degrees. Therefore, all sectors of a pie chart sum to 360°. 🔄",
        wrongAnswerExplanations: {
            "90°": "90° represents a quarter circle, not a complete pie chart.",
            "180°": "180° represents a semicircle, not a complete pie chart.",
            "270°": "270° represents three-quarters of a circle, not a complete pie chart."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch4_t2_qe4',
        type: "mcq",
        question: "Which type of graph is best suited for showing the composition of a whole into different parts?",
        options: ["Bar graph", "Line graph", "Pie chart", "Scatter plot"],
        correctAnswer: "Pie chart",
        explanation: "Pie charts are ideal for showing how a whole is divided into parts, representing the composition or proportional relationship of different categories. 📊",
        wrongAnswerExplanations: {
            "Bar graph": "Bar graphs are better for comparing values across categories rather than showing composition.",
            "Line graph": "Line graphs show trends over time rather than composition.",
            "Scatter plot": "Scatter plots show relationships between two variables rather than composition."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch4_t2_qe5',
        type: "mcq",
        question: "In a bar graph, what do the heights of the bars represent?",
        options: ["Categories", "Frequency or value", "Time intervals", "Percentages only"],
        correctAnswer: "Frequency or value",
        explanation: "In a bar graph, the height of each bar represents the frequency or value of the corresponding category, allowing for easy visual comparison. 📏",
        wrongAnswerExplanations: {
            "Categories": "Categories are represented along the horizontal axis, not by the heights.",
            "Time intervals": "Time intervals might be categories on the horizontal axis, but not what the heights represent.",
            "Percentages only": "Bar heights can represent any values, not just percentages."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch4_t2_qe6',
        type: "mcq",
        question: "What is a double bar graph used for?",
        options: ["Comparing two sets of data across different categories", "Showing data over two time periods", "Representing data with two dependent variables", "Displaying only negative values"],
        correctAnswer: "Comparing two sets of data across different categories",
        explanation: "Double bar graphs display two sets of data side by side for each category, making it easy to compare related data across different categories. 📊",
        wrongAnswerExplanations: {
            "Showing data over two time periods": "While it can show data from different time periods, its primary purpose is comparison of related data sets.",
            "Representing data with two dependent variables": "Bar graphs typically show one dependent variable against categories.",
            "Displaying only negative values": "Double bar graphs can display both positive and negative values."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch4_t2_qe7',
        type: "mcq",
        question: "What is the main advantage of using a pie chart over a bar graph?",
        options: ["Pie charts show exact values better", "Pie charts show the relationship of parts to the whole better", "Pie charts are easier to draw", "Pie charts work better with large numbers of categories"],
        correctAnswer: "Pie charts show the relationship of parts to the whole better",
        explanation: "Pie charts visually represent the proportion of each part relative to the whole, making it easy to see how each slice contributes to the total. 🥧",
        wrongAnswerExplanations: {
            "Pie charts show exact values better": "Bar graphs are actually better for showing exact values.",
            "Pie charts are easier to draw": "Bar graphs are generally easier to draw accurately.",
            "Pie charts work better with large numbers of categories": "Pie charts become cluttered with too many categories."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch4_t2_qe8',
        type: "mcq",
        question: "Which of these is NOT a common feature of a bar graph?",
        options: ["Horizontal axis", "Vertical axis", "Circular sectors", "Title"],
        correctAnswer: "Circular sectors",
        explanation: "Circular sectors are features of pie charts, not bar graphs. Bar graphs consist of rectangular bars on horizontal and vertical axes. 📏",
        wrongAnswerExplanations: {
            "Horizontal axis": "Bar graphs have a horizontal axis, typically showing categories.",
            "Vertical axis": "Bar graphs have a vertical axis, typically showing values or frequencies.",
            "Title": "Bar graphs should include a title describing the data being presented."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch4_t2_qe9',
        type: "mcq",
        question: "What is a stacked bar graph used for?",
        options: ["Comparing the total of each category", "Showing parts of a whole for each category", "Displaying negative values only", "Representing ratios between categories"],
        correctAnswer: "Showing parts of a whole for each category",
        explanation: "Stacked bar graphs show how different components contribute to a total for each category, with segments stacked on top of each other. 📚",
        wrongAnswerExplanations: {
            "Comparing the total of each category": "Simple bar graphs are better for this purpose.",
            "Displaying negative values only": "Stacked bar graphs typically show positive values.",
            "Representing ratios between categories": "Stacked bar graphs show composition within categories, not ratios between them."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch4_t2_qe10',
        type: "mcq",
        question: "If data in a pie chart shows that education expenses are 30% of a family's budget, what angle would the corresponding sector have?",
        options: ["30°", "108°", "120°", "180°"],
        correctAnswer: "108°",
        explanation: "To find the angle, multiply the percentage by 3.6: 30% × 3.6 = 108°. This is because 1% corresponds to 3.6° in a 360° circle. 📐",
        wrongAnswerExplanations: {
            "30°": "This confuses the percentage with the angle measure.",
            "120°": "This would represent 33.3% of the budget, not 30%.",
            "180°": "This would represent 50% of the budget, not 30%."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch4_t2_qe11',
        type: "mcq",
        question: "What does the legend in a graph represent?",
        options: ["The title of the graph", "Historical information about the data", "The description of what different colors or patterns mean", "The source of the data"],
        correctAnswer: "The description of what different colors or patterns mean",
        explanation: "The legend provides information about what different colors, patterns, or symbols in the graph represent, helping readers interpret the data correctly. 📝",
        wrongAnswerExplanations: {
            "The title of the graph": "The title appears at the top and describes what the graph is about.",
            "Historical information about the data": "This might be included elsewhere, not in the legend.",
            "The source of the data": "Source information is usually cited separately, not in the legend."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch4_t2_qe12',
        type: "mcq",
        question: "In a pie chart showing the number of students participating in different sports, the angle for cricket is 90°. What percentage of students play cricket?",
        options: ["25%", "30%", "45%", "90%"],
        correctAnswer: "25%",
        explanation: "To find the percentage, divide the angle by 3.6: 90° ÷ 3.6 = 25%. A 90° angle represents one quarter of the 360° circle. 🏏",
        wrongAnswerExplanations: {
            "30%": "This would correspond to 108°, not 90°.",
            "45%": "This would correspond to 162°, not 90°.",
            "90%": "This confuses the angle with the percentage. 90% would be 324°."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch4_t2_qe13',
        type: "mcq",
        question: "Which graph would be most suitable for showing monthly rainfall over a year?",
        options: ["Pie chart", "Bar graph", "Scatter plot", "3D pie chart"],
        correctAnswer: "Bar graph",
        explanation: "A bar graph is ideal for showing monthly rainfall as it allows easy comparison of discrete values across different time periods. Each month can be a category with its corresponding rainfall as the bar height. 🌧️",
        wrongAnswerExplanations: {
            "Pie chart": "Pie charts are better for showing proportions of a whole, not comparing individual values over time.",
            "Scatter plot": "Scatter plots show relationships between two variables, not appropriate for rainfall by month.",
            "3D pie chart": "3D pie charts can distort data and are less accurate for visualization."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch4_t2_qe14',
        type: "mcq",
        question: "What is an important limitation of pie charts?",
        options: ["They can only show positive values", "They become difficult to read with too many categories", "They cannot represent large numbers", "They cannot be drawn by hand"],
        correctAnswer: "They become difficult to read with too many categories",
        explanation: "Pie charts become cluttered and hard to interpret when there are too many categories, especially when some categories represent small percentages of the total. 🔍",
        wrongAnswerExplanations: {
            "They can only show positive values": "This is true but not the main limitation.",
            "They cannot represent large numbers": "Pie charts represent proportions, not absolute values.",
            "They cannot be drawn by hand": "Pie charts can be drawn by hand with a protractor."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch4_t2_qe15',
        type: "mcq",
        question: "What is the purpose of labeling axes in a bar graph?",
        options: ["To make the graph colorful", "To explain what the bars represent", "To fill empty space", "To show the title of the graph"],
        correctAnswer: "To explain what the bars represent",
        explanation: "Axis labels inform readers what each axis represents, ensuring the data can be correctly understood and interpreted. The horizontal axis typically shows categories while the vertical axis shows values. 📏",
        wrongAnswerExplanations: {
            "To make the graph colorful": "Labels serve a functional purpose, not decorative.",
            "To fill empty space": "Labels are essential components, not fillers.",
            "To show the title of the graph": "The title is displayed separately, usually at the top."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch4_t2_qe16',
        type: "mcq",
        question: "What does a horizontal bar graph look like compared to a regular bar graph?",
        options: ["The bars are displayed horizontally instead of vertically", "The bars have horizontal stripes", "The data is arranged in descending order", "It can only display two categories"],
        correctAnswer: "The bars are displayed horizontally instead of vertically",
        explanation: "In a horizontal bar graph, the bars extend from left to right rather than bottom to top, with categories on the vertical axis and values on the horizontal axis. 📊",
        wrongAnswerExplanations: {
            "The bars have horizontal stripes": "Bar patterns don't define the type of bar graph.",
            "The data is arranged in descending order": "Both vertical and horizontal bar graphs can have any ordering.",
            "It can only display two categories": "Horizontal bar graphs can display many categories."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch4_t2_qe17',
        type: "mcq",
        question: "If a pie chart has 8 equal sectors, what percentage of the total does each sector represent?",
        options: ["8%", "12.5%", "45%", "80%"],
        correctAnswer: "12.5%",
        explanation: "With 8 equal sectors, each represents 1/8 of the total, which is 12.5% (100% ÷ 8 = 12.5%). Each sector would have an angle of 45° (360° ÷ 8). 🍕",
        wrongAnswerExplanations: {
            "8%": "This is incorrect. Each sector would be 100% ÷ 8 = 12.5%.",
            "45%": "45 is the angle in degrees, not the percentage.",
            "80%": "This is incorrect. 80% would be most of the pie, not 1/8."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch4_t2_qe18',
        type: "mcq",
        question: "Which of these data sets would be best represented using a bar graph?",
        options: ["Monthly expenses as a percentage of income", "Number of students in different classes of a school", "The relationship between height and weight", "Changing temperature throughout the day"],
        correctAnswer: "Number of students in different classes of a school",
        explanation: "A bar graph is ideal for comparing discrete values across categories, such as the number of students in each class. Each class can be represented by a separate bar. 👨‍🎓",
        wrongAnswerExplanations: {
            "Monthly expenses as a percentage of income": "A pie chart would be better to show parts of a whole.",
            "The relationship between height and weight": "A scatter plot would be better to show relationship between two variables.",
            "Changing temperature throughout the day": "A line graph would be better to show continuous change over time."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch4_t2_qe19',
        type: "mcq",
        question: "What is the appropriate title for a graph that shows the favorite fruits of students in Class 8?",
        options: ["Fruits and Their Colors", "Class 8 Students and Their Ages", "Favorite Fruits of Class 8 Students", "Types of Fruits Available in the Market"],
        correctAnswer: "Favorite Fruits of Class 8 Students",
        explanation: "The title should clearly describe what the graph represents. 'Favorite Fruits of Class 8 Students' directly states what data is being visualized. 🍎",
        wrongAnswerExplanations: {
            "Fruits and Their Colors": "This doesn't relate to student preferences.",
            "Class 8 Students and Their Ages": "This would be for a graph about ages, not fruit preferences.",
            "Types of Fruits Available in the Market": "This doesn't relate to student preferences."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch4_t2_qe20',
        type: "mcq",
        question: "When should you use a grouped bar graph instead of a simple bar graph?",
        options: ["When you have a very large dataset", "When comparing two or more related groups across categories", "When working with percentages only", "When you need to show just one category"],
        correctAnswer: "When comparing two or more related groups across categories",
        explanation: "Grouped bar graphs are used to compare two or more related sets of data across different categories, with bars for each dataset grouped side by side. 📊",
        wrongAnswerExplanations: {
            "When you have a very large dataset": "Large datasets might need different visualization approaches.",
            "When working with percentages only": "Grouped bar graphs can work with any type of values.",
            "When you need to show just one category": "Simple bar graphs are sufficient for one category."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    }
];
