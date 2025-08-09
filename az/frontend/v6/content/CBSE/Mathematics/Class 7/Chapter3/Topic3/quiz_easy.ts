import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl7_ch3_t3_qe1',
        type: "mcq",
        question: "What is the purpose of a bar graph?",
        options: ["To show trends over time", "To compare quantities", "To show parts of a whole", "To show relationships between variables"],
        correctAnswer: "To compare quantities",
        explanation: "Bar graphs are used to compare quantities across different categories. 📊",
        wrongAnswerExplanations: {
            "To show trends over time": "Line graphs are better for showing trends over time.",
            "To show parts of a whole": "Pie charts are better for showing parts of a whole.",
            "To show relationships between variables": "Scatter plots are better for showing relationships between variables."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch3_t3_qe2',
        type: "mcq",
        question: "In a bar graph, what does the height of each bar represent?",
        options: ["The category name", "The quantity being measured", "The time period", "The percentage"],
        correctAnswer: "The quantity being measured",
        explanation: "The height of each bar represents the quantity or value for that category. 📏",
        wrongAnswerExplanations: {
            "The category name": "The category name is usually written below the bar.",
            "The time period": "Time period is usually shown on the x-axis.",
            "The percentage": "Percentage is only shown if the data is in percentages."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch3_t3_qe3',
        type: "mcq",
        question: "What is a double bar graph used for?",
        options: ["To show two different scales", "To compare two sets of data", "To show data over two time periods", "To show two different types of graphs"],
        correctAnswer: "To compare two sets of data",
        explanation: "Double bar graphs are used to compare two different sets of data for the same categories. 📊",
        wrongAnswerExplanations: {
            "To show two different scales": "Different scales can be shown on the same axis.",
            "To show data over two time periods": "This is one possible use, but not the main purpose.",
            "To show two different types of graphs": "Double bar graphs show the same type of graph twice."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch3_t3_qe4',
        type: "mcq",
        question: "In a bar graph, what is usually shown on the x-axis?",
        options: ["Categories", "Values", "Percentages", "Time periods"],
        correctAnswer: "Categories",
        explanation: "The x-axis typically shows the categories being compared. 📊",
        wrongAnswerExplanations: {
            "Values": "Values are shown on the y-axis.",
            "Percentages": "Percentages are shown on the y-axis if used.",
            "Time periods": "Time periods are shown on the x-axis only in time series graphs."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch3_t3_qe5',
        type: "mcq",
        question: "What is the main difference between a bar graph and a double bar graph?",
        options: ["Number of axes", "Type of data", "Number of data sets", "Scale of measurement"],
        correctAnswer: "Number of data sets",
        explanation: "A double bar graph shows two sets of data for each category, while a regular bar graph shows only one. 📊",
        wrongAnswerExplanations: {
            "Number of axes": "Both use the same number of axes.",
            "Type of data": "Both can show the same types of data.",
            "Scale of measurement": "Both can use the same scale."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch3_t3_qe6',
        type: "mcq",
        question: "In a double bar graph, how are the two sets of data usually distinguished?",
        options: ["Different colors", "Different heights", "Different widths", "Different positions"],
        correctAnswer: "Different colors",
        explanation: "The two sets of data are usually shown in different colors or patterns for easy comparison. 🎨",
        wrongAnswerExplanations: {
            "Different heights": "Heights represent values, not different data sets.",
            "Different widths": "Bars usually have the same width.",
            "Different positions": "Bars are usually side by side."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch3_t3_qe7',
        type: "mcq",
        question: "What should every bar graph include?",
        options: ["Title, labels, scale", "Colors, patterns, shapes", "Numbers, words, symbols", "Lines, dots, curves"],
        correctAnswer: "Title, labels, scale",
        explanation: "Every bar graph should have a title, labels for axes, and a scale to show values. 📊",
        wrongAnswerExplanations: {
            "Colors, patterns, shapes": "These are optional for better visualization.",
            "Numbers, words, symbols": "These are part of labels and scale.",
            "Lines, dots, curves": "These are not necessary for bar graphs."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch3_t3_qe8',
        type: "mcq",
        question: "When would you use a double bar graph instead of a single bar graph?",
        options: ["When you have more categories", "When you want to compare two related sets of data", "When you have larger numbers", "When you want to show trends"],
        correctAnswer: "When you want to compare two related sets of data",
        explanation: "Double bar graphs are used when you need to compare two different sets of data for the same categories. 📊",
        wrongAnswerExplanations: {
            "When you have more categories": "This doesn't require a double bar graph.",
            "When you have larger numbers": "The size of numbers doesn't determine the type of graph.",
            "When you want to show trends": "Line graphs are better for showing trends."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch3_t3_qe9',
        type: "mcq",
        question: "What is the purpose of a scale in a bar graph?",
        options: ["To show the categories", "To measure the values", "To add colors", "To make the graph look better"],
        correctAnswer: "To measure the values",
        explanation: "The scale helps us measure and read the values represented by the bars. 📏",
        wrongAnswerExplanations: {
            "To show the categories": "Categories are shown on the x-axis.",
            "To add colors": "Colors are used for distinction, not measurement.",
            "To make the graph look better": "The scale is for functionality, not appearance."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch3_t3_qe10',
        type: "mcq",
        question: "In a double bar graph showing boys' and girls' test scores, what would each pair of bars represent?",
        options: ["Different subjects", "Different classes", "Different schools", "Different test scores"],
        correctAnswer: "Different subjects",
        explanation: "Each pair of bars would typically represent a subject, with one bar for boys' scores and one for girls' scores. 📊",
        wrongAnswerExplanations: {
            "Different classes": "Classes would be separate categories.",
            "Different schools": "Schools would be separate categories.",
            "Different test scores": "Test scores are the values, not the categories."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch3_t3_qe11',
        type: "mcq",
        question: "What is the advantage of using a double bar graph?",
        options: ["It can show more categories", "It can compare two related sets of data easily", "It can show larger numbers", "It can show trends better"],
        correctAnswer: "It can compare two related sets of data easily",
        explanation: "Double bar graphs make it easy to compare two different sets of data for the same categories. 📊",
        wrongAnswerExplanations: {
            "It can show more categories": "This is not a unique advantage of double bar graphs.",
            "It can show larger numbers": "The size of numbers doesn't affect the choice of graph.",
            "It can show trends better": "Line graphs are better for showing trends."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch3_t3_qe12',
        type: "mcq",
        question: "In a bar graph showing favorite fruits, what would be on the x-axis?",
        options: ["Number of students", "Types of fruits", "Percentages", "Colors"],
        correctAnswer: "Types of fruits",
        explanation: "The x-axis would show the different types of fruits being compared. 🍎",
        wrongAnswerExplanations: {
            "Number of students": "This would be on the y-axis.",
            "Percentages": "This would be on the y-axis if used.",
            "Colors": "Colors are used for distinction, not as axis labels."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch3_t3_qe13',
        type: "mcq",
        question: "What is the purpose of a legend in a double bar graph?",
        options: ["To show the scale", "To explain what each color represents", "To show the categories", "To show the values"],
        correctAnswer: "To explain what each color represents",
        explanation: "The legend explains which color represents which set of data. 📊",
        wrongAnswerExplanations: {
            "To show the scale": "The scale is shown on the y-axis.",
            "To show the categories": "Categories are shown on the x-axis.",
            "To show the values": "Values are shown by the height of bars."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch3_t3_qe14',
        type: "mcq",
        question: "In a bar graph, what determines the width of the bars?",
        options: ["The value being shown", "The category being shown", "The scale being used", "The space available"],
        correctAnswer: "The space available",
        explanation: "The width of bars is determined by the space available and should be consistent for all bars. 📏",
        wrongAnswerExplanations: {
            "The value being shown": "Values determine height, not width.",
            "The category being shown": "Categories don't affect bar width.",
            "The scale being used": "Scale affects height, not width."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch3_t3_qe15',
        type: "mcq",
        question: "What is the main purpose of using different colors in a double bar graph?",
        options: ["To make it look attractive", "To distinguish between the two sets of data", "To show different scales", "To show different categories"],
        correctAnswer: "To distinguish between the two sets of data",
        explanation: "Different colors help distinguish between the two different sets of data being compared. 🎨",
        wrongAnswerExplanations: {
            "To make it look attractive": "While colors can make it attractive, that's not their main purpose.",
            "To show different scales": "Different scales are shown on the axis, not by colors.",
            "To show different categories": "Categories are shown on the x-axis."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch3_t3_qe16',
        type: "mcq",
        question: "In a bar graph showing monthly rainfall, what would be on the y-axis?",
        options: ["Months", "Amount of rainfall", "Temperature", "Days"],
        correctAnswer: "Amount of rainfall",
        explanation: "The y-axis would show the amount of rainfall in each month. 🌧️",
        wrongAnswerExplanations: {
            "Months": "Months would be on the x-axis.",
            "Temperature": "This would be a different measurement.",
            "Days": "This would be a different measurement."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch3_t3_qe17',
        type: "mcq",
        question: "What is the purpose of a title in a bar graph?",
        options: ["To make it look complete", "To explain what the graph is about", "To show the scale", "To show the categories"],
        correctAnswer: "To explain what the graph is about",
        explanation: "The title tells us what information the graph is showing. 📊",
        wrongAnswerExplanations: {
            "To make it look complete": "While it does make it look complete, that's not its main purpose.",
            "To show the scale": "The scale is shown on the y-axis.",
            "To show the categories": "Categories are shown on the x-axis."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch3_t3_qe18',
        type: "mcq",
        question: "In a double bar graph comparing two years' data, what would each pair of bars represent?",
        options: ["Different months", "Different values", "Different scales", "Different colors"],
        correctAnswer: "Different months",
        explanation: "Each pair of bars would represent a month, with one bar for each year's data. 📅",
        wrongAnswerExplanations: {
            "Different values": "Values are shown by the height of bars.",
            "Different scales": "The scale is shown on the y-axis.",
            "Different colors": "Colors distinguish between the two years."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch3_t3_qe19',
        type: "mcq",
        question: "What is the main advantage of using a bar graph?",
        options: ["It can show exact values", "It can show trends over time", "It can show parts of a whole", "It can show relationships between variables"],
        correctAnswer: "It can show exact values",
        explanation: "Bar graphs make it easy to read exact values for each category. 📊",
        wrongAnswerExplanations: {
            "It can show trends over time": "Line graphs are better for showing trends.",
            "It can show parts of a whole": "Pie charts are better for showing parts of a whole.",
            "It can show relationships between variables": "Scatter plots are better for showing relationships."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch3_t3_qe20',
        type: "mcq",
        question: "In a double bar graph, what is the purpose of placing bars side by side?",
        options: ["To save space", "To make it look better", "To make comparison easier", "To show different scales"],
        correctAnswer: "To make comparison easier",
        explanation: "Placing bars side by side makes it easier to compare the two sets of data for each category. 📊",
        wrongAnswerExplanations: {
            "To save space": "While it does save space, that's not the main purpose.",
            "To make it look better": "While it can look better, that's not the main purpose.",
            "To show different scales": "Different scales are shown on the y-axis."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    }
]; 