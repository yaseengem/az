import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl8_ch13_t1_qe1',
        type: "mcq",
        question: "Which type of graph is best suited to show the change in temperature over a 24-hour period?",
        options: ["Bar Graph", "Line Graph", "Pie Chart", "Pictograph"],
        correctAnswer: "Line Graph",
        explanation: "Line graphs are ideal for showing continuous changes over time, making them perfect for displaying temperature variations throughout the day. 📈",
        wrongAnswerExplanations: {
            "Bar Graph": "Bar graphs are better for comparing discrete categories rather than continuous changes.",
            "Pie Chart": "Pie charts show parts of a whole, not changes over time.",
            "Pictograph": "Pictographs are better for showing quantities using pictures, not temporal changes."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch13_t1_qe2',
        type: "mcq",
        question: "What type of graph would be best to represent the favorite colors of students in a class?",
        options: ["Line Graph", "Bar Graph", "Scatter Plot", "Area Graph"],
        correctAnswer: "Bar Graph",
        explanation: "Bar graphs are excellent for comparing discrete categories like favorite colors, showing the frequency or count for each color clearly. 📊",
        wrongAnswerExplanations: {
            "Line Graph": "Line graphs are for continuous data over time, not categorical data.",
            "Scatter Plot": "Scatter plots show relationships between two variables, not categorical data.",
            "Area Graph": "Area graphs show cumulative totals over time, not categorical data."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch13_t1_qe3',
        type: "mcq",
        question: "Which graph type shows parts of a whole as slices of a circle?",
        options: ["Bar Graph", "Line Graph", "Pie Chart", "Histogram"],
        correctAnswer: "Pie Chart",
        explanation: "Pie charts divide a circle into sectors (slices), where each slice represents a proportion of the whole. They're perfect for showing percentages or parts of a total. 🥧",
        wrongAnswerExplanations: {
            "Bar Graph": "Bar graphs show comparisons between categories using rectangular bars.",
            "Line Graph": "Line graphs show trends over time using connected points.",
            "Histogram": "Histograms show frequency distribution of continuous data using adjacent rectangles."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch13_t1_qe4',
        type: "mcq",
        question: "In a line graph, what do the points connected by lines represent?",
        options: ["Categories", "Data values at specific intervals", "Parts of a whole", "Pictures"],
        correctAnswer: "Data values at specific intervals",
        explanation: "In a line graph, each point represents a data value at a specific time or interval, and connecting lines show the trend between points. 📉",
        wrongAnswerExplanations: {
            "Categories": "Categories are better represented in bar graphs.",
            "Parts of a whole": "Parts of a whole are shown in pie charts.",
            "Pictures": "Pictures are used in pictographs, not line graphs."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch13_t1_qe5',
        type: "mcq",
        question: "What is the purpose of a pictograph?",
        options: ["To show changes over time", "To represent data using pictures or symbols", "To show parts of a whole", "To plot two variables"],
        correctAnswer: "To represent data using pictures or symbols",
        explanation: "Pictographs use pictures or symbols to represent quantities, making data easy to understand visually. For example, 🍎 might represent 10 apples. 🖼️",
        wrongAnswerExplanations: {
            "To show changes over time": "This is primarily the purpose of line graphs.",
            "To show parts of a whole": "This is the main purpose of pie charts.",
            "To plot two variables": "This is the purpose of scatter plots."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch13_t1_qe6',
        type: "mcq",
        question: "Which axis typically represents the independent variable in a graph?",
        options: ["Y-axis", "X-axis", "Both axes", "Neither axis"],
        correctAnswer: "X-axis",
        explanation: "The x-axis (horizontal axis) typically represents the independent variable, such as time, while the y-axis shows the dependent variable. 📏",
        wrongAnswerExplanations: {
            "Y-axis": "The y-axis typically shows the dependent variable.",
            "Both axes": "Each axis has a specific role; they don't both show independent variables.",
            "Neither axis": "The x-axis definitely represents the independent variable."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch13_t1_qe7',
        type: "mcq",
        question: "What type of graph would best show the relationship between height and weight of students?",
        options: ["Pie Chart", "Bar Graph", "Scatter Plot", "Pictograph"],
        correctAnswer: "Scatter Plot",
        explanation: "Scatter plots are perfect for showing relationships between two continuous variables, like height and weight, by plotting points on a coordinate plane. 📊",
        wrongAnswerExplanations: {
            "Pie Chart": "Pie charts show parts of a whole, not relationships between variables.",
            "Bar Graph": "Bar graphs compare categories, not relationships between continuous variables.",
            "Pictograph": "Pictographs use symbols to show quantities, not relationships between variables."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch13_t1_qe8',
        type: "mcq",
        question: "What does the height of a bar represent in a bar graph?",
        options: ["Time period", "Category name", "Quantity or frequency", "Percentage"],
        correctAnswer: "Quantity or frequency",
        explanation: "In a bar graph, the height of each bar represents the quantity or frequency of that category. Taller bars show larger values. 📊",
        wrongAnswerExplanations: {
            "Time period": "Time periods are typically shown on the x-axis.",
            "Category name": "Category names are shown below the bars on the x-axis.",
            "Percentage": "While bars can show percentages, this isn't always the case."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch13_t1_qe9',
        type: "mcq",
        question: "Which type of graph is best for showing the distribution of students' marks in a test?",
        options: ["Pie Chart", "Line Graph", "Histogram", "Pictograph"],
        correctAnswer: "Histogram",
        explanation: "Histograms are ideal for showing the distribution of continuous data like test scores, grouping them into intervals. 📊",
        wrongAnswerExplanations: {
            "Pie Chart": "Pie charts show parts of a whole, not distributions.",
            "Line Graph": "Line graphs show trends over time, not distributions.",
            "Pictograph": "Pictographs use symbols for quantities, not suitable for distributions."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch13_t1_qe10',
        type: "mcq",
        question: "What is the main difference between a bar graph and a histogram?",
        options: ["Color of bars", "Bars touch in histogram but have gaps in bar graph", "Number of bars", "Height of bars"],
        correctAnswer: "Bars touch in histogram but have gaps in bar graph",
        explanation: "In histograms, bars touch because they show continuous data intervals, while bar graphs have gaps because they show discrete categories. 📊",
        wrongAnswerExplanations: {
            "Color of bars": "Color is not a defining difference between these graphs.",
            "Number of bars": "Both can have any number of bars.",
            "Height of bars": "Height represents frequency in both types."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch13_t1_qe11',
        type: "mcq",
        question: "Which graph type is best for comparing monthly rainfall over a year?",
        options: ["Scatter Plot", "Bar Graph", "Pie Chart", "Pictograph"],
        correctAnswer: "Bar Graph",
        explanation: "Bar graphs are excellent for comparing discrete values over time periods, like monthly rainfall totals. Each bar can represent one month's rainfall. 📊",
        wrongAnswerExplanations: {
            "Scatter Plot": "Scatter plots show relationships between two variables.",
            "Pie Chart": "Pie charts show parts of a whole, not monthly comparisons.",
            "Pictograph": "Pictographs are less precise for showing exact quantities."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch13_t1_qe12',
        type: "mcq",
        question: "What does each sector in a pie chart represent?",
        options: ["Time intervals", "A percentage or fraction of the whole", "Two related variables", "Change over time"],
        correctAnswer: "A percentage or fraction of the whole",
        explanation: "Each sector (slice) in a pie chart represents a portion of the total, shown as a percentage or fraction of the complete circle (100%). 🥧",
        wrongAnswerExplanations: {
            "Time intervals": "Time intervals are better shown in line or bar graphs.",
            "Two related variables": "This is shown in scatter plots.",
            "Change over time": "Changes over time are better shown in line graphs."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch13_t1_qe13',
        type: "mcq",
        question: "What type of graph would best show the budget allocation for different departments?",
        options: ["Line Graph", "Scatter Plot", "Pie Chart", "Histogram"],
        correctAnswer: "Pie Chart",
        explanation: "Pie charts are perfect for showing how a total (budget) is divided among different categories (departments), as each slice represents a proportion. 💰",
        wrongAnswerExplanations: {
            "Line Graph": "Line graphs show trends over time, not proportions.",
            "Scatter Plot": "Scatter plots show relationships between variables.",
            "Histogram": "Histograms show frequency distributions."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch13_t1_qe14',
        type: "mcq",
        question: "Which type of graph shows data points scattered on a coordinate plane?",
        options: ["Bar Graph", "Line Graph", "Pie Chart", "Scatter Plot"],
        correctAnswer: "Scatter Plot",
        explanation: "Scatter plots display data points on a coordinate plane, showing relationships between two variables. Each point represents two related values. 📊",
        wrongAnswerExplanations: {
            "Bar Graph": "Bar graphs use bars to compare categories.",
            "Line Graph": "Line graphs connect points to show trends over time.",
            "Pie Chart": "Pie charts show parts of a whole in a circle."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch13_t1_qe15',
        type: "mcq",
        question: "What is the purpose of gridlines on a graph?",
        options: ["Decoration", "To make reading values easier", "To make the graph bigger", "To add color"],
        correctAnswer: "To make reading values easier",
        explanation: "Gridlines help readers accurately read values and make comparisons between data points on the graph. They serve as reference lines. 📏",
        wrongAnswerExplanations: {
            "Decoration": "Gridlines are functional, not decorative.",
            "To make the graph bigger": "Gridlines don't affect the graph's size.",
            "To add color": "Color is not the primary purpose of gridlines."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch13_t1_qe16',
        type: "mcq",
        question: "Which graph type uses a key or legend most often?",
        options: ["Bar Graph", "Line Graph", "Pictograph", "All of these"],
        correctAnswer: "All of these",
        explanation: "All types of graphs can use legends to explain what different colors, symbols, or lines represent in the data visualization. 🔑",
        wrongAnswerExplanations: {
            "Bar Graph": "While bar graphs use legends, they're not the only type.",
            "Line Graph": "Line graphs use legends, but not exclusively.",
            "Pictograph": "Pictographs use legends, but not exclusively."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch13_t1_qe17',
        type: "mcq",
        question: "What should always be included in a graph?",
        options: ["Pictures", "Title and labels", "Colors", "Animation"],
        correctAnswer: "Title and labels",
        explanation: "Every graph must have a title explaining what it shows and labels on axes or categories to make the data meaningful and clear. 📝",
        wrongAnswerExplanations: {
            "Pictures": "Pictures aren't necessary for most graphs.",
            "Colors": "While helpful, colors aren't essential.",
            "Animation": "Animation is not necessary for basic graphs."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch13_t1_qe18',
        type: "mcq",
        question: "Which type of graph is best for showing trends over time?",
        options: ["Pie Chart", "Line Graph", "Pictograph", "Scatter Plot"],
        correctAnswer: "Line Graph",
        explanation: "Line graphs excel at showing trends and patterns over time by connecting data points with lines, making it easy to see increases and decreases. 📈",
        wrongAnswerExplanations: {
            "Pie Chart": "Pie charts show proportions, not trends over time.",
            "Pictograph": "Pictographs show quantities with symbols, not trends.",
            "Scatter Plot": "Scatter plots show relationships between variables."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch13_t1_qe19',
        type: "mcq",
        question: "What type of data is best represented by a bar graph?",
        options: ["Continuous data over time", "Categorical data", "Proportions of a whole", "Correlations"],
        correctAnswer: "Categorical data",
        explanation: "Bar graphs are ideal for comparing categorical data, where each category can be represented by a bar of different height. 📊",
        wrongAnswerExplanations: {
            "Continuous data over time": "This is better shown with line graphs.",
            "Proportions of a whole": "This is better shown with pie charts.",
            "Correlations": "This is better shown with scatter plots."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch13_t1_qe20',
        type: "mcq",
        question: "When reading a graph, what should you look at first?",
        options: ["The colors", "The title and axes labels", "The biggest number", "The legend only"],
        correctAnswer: "The title and axes labels",
        explanation: "The title and axes labels tell you what the graph is about and what each axis represents, providing essential context for understanding the data. 📖",
        wrongAnswerExplanations: {
            "The colors": "Colors are secondary to understanding the graph's purpose.",
            "The biggest number": "Individual values should be examined after understanding the context.",
            "The legend only": "The legend helps but isn't the first thing to check."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    }
]; 