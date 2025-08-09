import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl6_ch9_t3_qe1',
        type: "mcq",
        question: "In a bar graph, what does the height of a bar represent?",
        options: ["The value of the data", "The color of the data", "The name of the data", "The time of the data"],
        correctAnswer: "The value of the data",
        explanation: "The height of a bar shows the quantity or value of the data it represents. 📊",
        wrongAnswerExplanations: {
            "The color of the data": "Color is used for distinction, not for value.",
            "The name of the data": "The name is usually written below the bar.",
            "The time of the data": "Time is shown on the axis, not by bar height."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch9_t3_qe2',
        type: "mcq",
        question: "In a pictograph, what does the key tell us?",
        options: ["What each symbol represents", "The title of the graph", "The total number of items", "The colors used"],
        correctAnswer: "What each symbol represents",
        explanation: "The key explains what each picture or symbol stands for in the graph. 📊",
        wrongAnswerExplanations: {
            "The title of the graph": "The title is shown separately at the top.",
            "The total number of items": "This is calculated from the symbols.",
            "The colors used": "Colors are usually not explained in the key."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch9_t3_qe3',
        type: "mcq",
        question: "What is the first thing you should look at when reading any chart?",
        options: ["The title", "The colors", "The numbers", "The shapes"],
        correctAnswer: "The title",
        explanation: "The title tells you what the chart is about and what information it shows. 📊",
        wrongAnswerExplanations: {
            "The colors": "Colors are secondary to understanding the data.",
            "The numbers": "Numbers need context from the title.",
            "The shapes": "Shapes are part of the visualization, not the main information."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch9_t3_qe4',
        type: "mcq",
        question: "In a pictograph, if 📚 = 2 books, how many books does 📚📚📚 represent?",
        options: ["6 books", "2 books", "3 books", "5 books"],
        correctAnswer: "6 books",
        explanation: "Each 📚 represents 2 books, so 3 symbols = 3 × 2 = 6 books. 📊",
        wrongAnswerExplanations: {
            "2 books": "This is the value of one symbol.",
            "3 books": "This is the number of symbols, not the total books.",
            "5 books": "This is not the correct calculation."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch9_t3_qe5',
        type: "mcq",
        question: "What does the x-axis of a bar graph usually show?",
        options: ["Categories or groups", "Values or numbers", "Colors", "Time"],
        correctAnswer: "Categories or groups",
        explanation: "The x-axis typically shows the different categories or groups being compared. 📊",
        wrongAnswerExplanations: {
            "Values or numbers": "These are usually shown on the y-axis.",
            "Colors": "Colors are not shown on axes.",
            "Time": "Time is only shown on the x-axis for time-based data."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch9_t3_qe6',
        type: "mcq",
        question: "In a pie chart, what does each slice represent?",
        options: ["A part of the whole", "A different color", "A time period", "A measurement"],
        correctAnswer: "A part of the whole",
        explanation: "Each slice shows a portion or percentage of the total data. 📊",
        wrongAnswerExplanations: {
            "A different color": "Colors are used for distinction, not meaning.",
            "A time period": "Pie charts don't typically show time.",
            "A measurement": "This is too vague - it's specifically a part of the whole."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch9_t3_qe7',
        type: "mcq",
        question: "What should you check before reading the values on a bar graph?",
        options: ["The scale", "The colors", "The title", "The shape"],
        correctAnswer: "The scale",
        explanation: "The scale tells you what each unit on the axis represents. 📊",
        wrongAnswerExplanations: {
            "The colors": "Colors don't affect the values.",
            "The title": "The title is important but doesn't help read values.",
            "The shape": "The shape doesn't affect the values."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch9_t3_qe8',
        type: "mcq",
        question: "If a pictograph shows 🌳 = 5 trees, how many trees does 🌳🌳 represent?",
        options: ["10 trees", "5 trees", "2 trees", "7 trees"],
        correctAnswer: "10 trees",
        explanation: "Each 🌳 represents 5 trees, so 2 symbols = 2 × 5 = 10 trees. 📊",
        wrongAnswerExplanations: {
            "5 trees": "This is the value of one symbol.",
            "2 trees": "This is the number of symbols, not the total trees.",
            "7 trees": "This is not the correct calculation."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch9_t3_qe9',
        type: "mcq",
        question: "What is the best use of a bar graph?",
        options: ["Comparing different categories", "Showing parts of a whole", "Showing changes over time", "Showing relationships"],
        correctAnswer: "Comparing different categories",
        explanation: "Bar graphs are best for comparing quantities across different categories. 📊",
        wrongAnswerExplanations: {
            "Showing parts of a whole": "This is better shown in a pie chart.",
            "Showing changes over time": "This is better shown in a line graph.",
            "Showing relationships": "This is better shown in a scatter plot."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch9_t3_qe10',
        type: "mcq",
        question: "In a pie chart, what do all the slices add up to?",
        options: ["100%", "50%", "The total number", "The average"],
        correctAnswer: "100%",
        explanation: "All slices together make up the whole, which is 100%. 📊",
        wrongAnswerExplanations: {
            "50%": "This is only half of the whole.",
            "The total number": "Pie charts show percentages, not total numbers.",
            "The average": "This is not what the slices represent."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch9_t3_qe11',
        type: "mcq",
        question: "What does the y-axis of a bar graph usually show?",
        options: ["Values or numbers", "Categories", "Colors", "Time"],
        correctAnswer: "Values or numbers",
        explanation: "The y-axis shows the numerical values or quantities being measured. 📊",
        wrongAnswerExplanations: {
            "Categories": "These are usually shown on the x-axis.",
            "Colors": "Colors are not shown on axes.",
            "Time": "Time is usually shown on the x-axis."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch9_t3_qe12',
        type: "mcq",
        question: "If a pictograph shows 🍎 = 3 apples, how many apples does 🍎🍎🍎🍎 represent?",
        options: ["12 apples", "3 apples", "4 apples", "7 apples"],
        correctAnswer: "12 apples",
        explanation: "Each 🍎 represents 3 apples, so 4 symbols = 4 × 3 = 12 apples. 📊",
        wrongAnswerExplanations: {
            "3 apples": "This is the value of one symbol.",
            "4 apples": "This is the number of symbols, not the total apples.",
            "7 apples": "This is not the correct calculation."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch9_t3_qe13',
        type: "mcq",
        question: "What is the best use of a pictograph?",
        options: ["Showing simple counts with pictures", "Showing complex data", "Showing trends", "Showing percentages"],
        correctAnswer: "Showing simple counts with pictures",
        explanation: "Pictographs are best for simple data that can be represented with pictures. 📊",
        wrongAnswerExplanations: {
            "Showing complex data": "Pictographs are too simple for complex data.",
            "Showing trends": "This is better shown in a line graph.",
            "Showing percentages": "This is better shown in a pie chart."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch9_t3_qe14',
        type: "mcq",
        question: "In a bar graph, what helps you read the exact value of a bar?",
        options: ["The scale on the y-axis", "The color of the bar", "The width of the bar", "The title"],
        correctAnswer: "The scale on the y-axis",
        explanation: "The scale on the y-axis helps you determine the exact value of each bar. 📊",
        wrongAnswerExplanations: {
            "The color of the bar": "Color doesn't indicate value.",
            "The width of the bar": "Width is usually the same for all bars.",
            "The title": "The title doesn't give exact values."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch9_t3_qe15',
        type: "mcq",
        question: "What is the best use of a pie chart?",
        options: ["Showing parts of a whole", "Comparing different items", "Showing changes over time", "Showing relationships"],
        correctAnswer: "Showing parts of a whole",
        explanation: "Pie charts are best for showing how different parts make up a whole. 📊",
        wrongAnswerExplanations: {
            "Comparing different items": "This is better shown in a bar graph.",
            "Showing changes over time": "This is better shown in a line graph.",
            "Showing relationships": "This is better shown in a scatter plot."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch9_t3_qe16',
        type: "mcq",
        question: "If a bar graph's scale is 1 cm = 10 students, how many students does a 3 cm bar represent?",
        options: ["30 students", "10 students", "3 students", "13 students"],
        correctAnswer: "30 students",
        explanation: "Each cm represents 10 students, so 3 cm = 3 × 10 = 30 students. 📊",
        wrongAnswerExplanations: {
            "10 students": "This is the value for 1 cm.",
            "3 students": "This is the length in cm, not the number of students.",
            "13 students": "This is not the correct calculation."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch9_t3_qe17',
        type: "mcq",
        question: "What should you do if a pictograph has half symbols?",
        options: ["Count them as half the value", "Ignore them", "Count them as full symbols", "Add them to the next symbol"],
        correctAnswer: "Count them as half the value",
        explanation: "Half symbols represent half of the value of a full symbol. 📊",
        wrongAnswerExplanations: {
            "Ignore them": "This would give incorrect totals.",
            "Count them as full symbols": "This would overcount the value.",
            "Add them to the next symbol": "This is not how half symbols work."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch9_t3_qe18',
        type: "mcq",
        question: "In a pie chart, what does a larger slice indicate?",
        options: ["A larger portion of the whole", "A more important category", "A higher number", "A better value"],
        correctAnswer: "A larger portion of the whole",
        explanation: "The size of the slice shows what portion of the total it represents. 📊",
        wrongAnswerExplanations: {
            "A more important category": "Size shows quantity, not importance.",
            "A higher number": "This is too vague - it's specifically a portion.",
            "A better value": "Size doesn't indicate quality."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch9_t3_qe19',
        type: "mcq",
        question: "What should you check in a pictograph before counting symbols?",
        options: ["The key", "The title", "The colors", "The size"],
        correctAnswer: "The key",
        explanation: "The key tells you what value each symbol represents. 📊",
        wrongAnswerExplanations: {
            "The title": "The title is important but doesn't help with counting.",
            "The colors": "Colors don't affect the value of symbols.",
            "The size": "The size of symbols doesn't affect their value."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch9_t3_qe20',
        type: "mcq",
        question: "What is the main purpose of a chart or graph?",
        options: ["To show data visually", "To make things colorful", "To fill space", "To look nice"],
        correctAnswer: "To show data visually",
        explanation: "Charts and graphs help us understand data through visual representation. 📊",
        wrongAnswerExplanations: {
            "To make things colorful": "Color is secondary to data representation.",
            "To fill space": "This is not the purpose of data visualization.",
            "To look nice": "Appearance is secondary to data communication."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    }
]; 