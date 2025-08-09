import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl5_ch12_t1_qe1',
        type: "mcq",
        question: "In a pictograph, if each 🍎 represents 5 apples, how many apples does 🍎🍎🍎 represent?",
        options: ["5", "10", "15", "20"],
        correctAnswer: "15",
        explanation: "3 apples × 5 = 15 apples. Each symbol represents 5 apples. 🧮",
        wrongAnswerExplanations: {
            "5": "This is the value of one symbol, not three symbols.",
            "10": "This would be for two symbols, not three.",
            "20": "This would be for four symbols, not three."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch12_t1_qe2',
        type: "mcq",
        question: "What is the main purpose of a bar graph?",
        options: ["To show patterns in data", "To tell a story", "To write numbers", "To draw pictures"],
        correctAnswer: "To show patterns in data",
        explanation: "Bar graphs help visualize and compare data using rectangular bars. 📊",
        wrongAnswerExplanations: {
            "To tell a story": "While graphs can tell stories, their main purpose is data visualization.",
            "To write numbers": "Numbers are just one part of a graph, not its main purpose.",
            "To draw pictures": "Pictures are used in pictographs, not bar graphs."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch12_t1_qe3',
        type: "mcq",
        question: "If a bar graph shows the number of books read by students, what should be on the y-axis?",
        options: ["Student names", "Number of books", "Book titles", "Reading time"],
        correctAnswer: "Number of books",
        explanation: "The y-axis shows the quantity being measured, which is the number of books. 📚",
        wrongAnswerExplanations: {
            "Student names": "Student names would typically go on the x-axis.",
            "Book titles": "Book titles are not numerical data for a bar graph.",
            "Reading time": "This would be a different measurement, not the number of books."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch12_t1_qe4',
        type: "mcq",
        question: "In a pictograph showing favorite fruits, if 🍌 represents 2 bananas, how many bananas does 🍌🍌🍌🍌 represent?",
        options: ["4", "6", "8", "10"],
        correctAnswer: "8",
        explanation: "4 bananas × 2 = 8 bananas. Each symbol represents 2 bananas. 🍌",
        wrongAnswerExplanations: {
            "4": "This would be for two symbols, not four.",
            "6": "This would be for three symbols, not four.",
            "10": "This would be for five symbols, not four."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch12_t1_qe5',
        type: "mcq",
        question: "What is the title of a graph?",
        options: ["A label at the top", "A number on the side", "A color of the bars", "A symbol in the key"],
        correctAnswer: "A label at the top",
        explanation: "The title appears at the top and describes what the graph shows. 📝",
        wrongAnswerExplanations: {
            "A number on the side": "Numbers on the side are part of the scale.",
            "A color of the bars": "Colors are used for differentiation, not as titles.",
            "A symbol in the key": "Symbols in the key explain the data representation."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch12_t1_qe6',
        type: "mcq",
        question: "If a bar graph shows the height of plants, what should be on the x-axis?",
        options: ["Plant names", "Height in cm", "Growth time", "Number of leaves"],
        correctAnswer: "Plant names",
        explanation: "The x-axis shows the categories being compared, which are the plant names. 🌱",
        wrongAnswerExplanations: {
            "Height in cm": "Height would go on the y-axis as it's the measurement.",
            "Growth time": "This would be a different measurement, not the categories.",
            "Number of leaves": "This would be a different measurement, not the categories."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch12_t1_qe7',
        type: "mcq",
        question: "What is a key in a pictograph?",
        options: ["A list of symbols and their values", "A title of the graph", "A type of bar", "A number scale"],
        correctAnswer: "A list of symbols and their values",
        explanation: "The key explains what each symbol represents in the pictograph. 🔑",
        wrongAnswerExplanations: {
            "A title of the graph": "The title is separate from the key.",
            "A type of bar": "Bars are used in bar graphs, not pictographs.",
            "A number scale": "The scale is part of the axes, not the key."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch12_t1_qe8',
        type: "mcq",
        question: "If a bar graph shows test scores from 0 to 100, what should the scale be?",
        options: ["0, 10, 20, 30...", "0, 5, 10, 15...", "0, 20, 40, 60...", "0, 25, 50, 75..."],
        correctAnswer: "0, 20, 40, 60...",
        explanation: "The scale should have equal intervals that make the graph easy to read. 📈",
        wrongAnswerExplanations: {
            "0, 10, 20, 30...": "This would make the graph too crowded.",
            "0, 5, 10, 15...": "This would make the graph too detailed.",
            "0, 25, 50, 75...": "This would make the graph too sparse."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch12_t1_qe9',
        type: "mcq",
        question: "What is the advantage of using a pictograph?",
        options: ["Easy to understand visually", "Shows exact numbers", "Uses only numbers", "Needs no explanation"],
        correctAnswer: "Easy to understand visually",
        explanation: "Pictographs use pictures to make data more engaging and easier to understand. 🖼️",
        wrongAnswerExplanations: {
            "Shows exact numbers": "Pictographs often show approximate values.",
            "Uses only numbers": "Pictographs use pictures, not just numbers.",
            "Needs no explanation": "Pictographs still need a key to explain symbols."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch12_t1_qe10',
        type: "mcq",
        question: "If a bar graph shows the number of students in different grades, what type of data is it showing?",
        options: ["Categorical data", "Numerical data", "Color data", "Time data"],
        correctAnswer: "Categorical data",
        explanation: "Grades are categories, and the graph shows how many students are in each category. 📊",
        wrongAnswerExplanations: {
            "Numerical data": "While the counts are numerical, the grades themselves are categories.",
            "Color data": "Colors are just used for visualization, not the data type.",
            "Time data": "This would be for data that changes over time."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch12_t1_qe11',
        type: "mcq",
        question: "What is the scale in a bar graph?",
        options: ["The numbers on the axes", "The color of the bars", "The title of the graph", "The width of the bars"],
        correctAnswer: "The numbers on the axes",
        explanation: "The scale shows the measurement values on the axes. 📏",
        wrongAnswerExplanations: {
            "The color of the bars": "Colors are for differentiation, not measurement.",
            "The title of the graph": "The title describes what the graph shows.",
            "The width of the bars": "Bar width is for visualization, not measurement."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch12_t1_qe12',
        type: "mcq",
        question: "If a pictograph shows favorite sports and ⚽ represents 4 students, how many students like soccer if there are ⚽⚽⚽?",
        options: ["8", "12", "16", "20"],
        correctAnswer: "12",
        explanation: "3 soccer balls × 4 students = 12 students. ⚽",
        wrongAnswerExplanations: {
            "8": "This would be for two symbols, not three.",
            "16": "This would be for four symbols, not three.",
            "20": "This would be for five symbols, not three."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch12_t1_qe13',
        type: "mcq",
        question: "What is the purpose of labels on a graph?",
        options: ["To identify what is being shown", "To make the graph colorful", "To count the bars", "To measure the height"],
        correctAnswer: "To identify what is being shown",
        explanation: "Labels help readers understand what the graph represents. 🏷️",
        wrongAnswerExplanations: {
            "To make the graph colorful": "Colors are for visualization, not identification.",
            "To count the bars": "Counting is done using the scale, not labels.",
            "To measure the height": "Height is measured using the scale, not labels."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch12_t1_qe14',
        type: "mcq",
        question: "If a bar graph shows the number of books read each month, what type of graph is it?",
        options: ["Vertical bar graph", "Horizontal bar graph", "Pictograph", "Line graph"],
        correctAnswer: "Vertical bar graph",
        explanation: "Time-based data is typically shown in vertical bar graphs. 📚",
        wrongAnswerExplanations: {
            "Horizontal bar graph": "Horizontal bars are better for comparing categories.",
            "Pictograph": "Pictographs use pictures, not bars.",
            "Line graph": "Line graphs show continuous data over time."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch12_t1_qe15',
        type: "mcq",
        question: "What is the difference between a bar graph and a pictograph?",
        options: ["Bar graphs use bars, pictographs use pictures", "Bar graphs use colors, pictographs use numbers", "Bar graphs are bigger, pictographs are smaller", "Bar graphs show time, pictographs show categories"],
        correctAnswer: "Bar graphs use bars, pictographs use pictures",
        explanation: "Bar graphs use rectangular bars, while pictographs use pictures or symbols. 📊",
        wrongAnswerExplanations: {
            "Bar graphs use colors, pictographs use numbers": "Both can use colors and numbers.",
            "Bar graphs are bigger, pictographs are smaller": "Size doesn't determine the type of graph.",
            "Bar graphs show time, pictographs show categories": "Both can show either time or categories."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch12_t1_qe16',
        type: "mcq",
        question: "If a pictograph shows favorite colors and 🟡 represents 3 students, how many students like yellow if there are 🟡🟡?",
        options: ["3", "6", "9", "12"],
        correctAnswer: "6",
        explanation: "2 yellow circles × 3 students = 6 students. 🟡",
        wrongAnswerExplanations: {
            "3": "This is the value of one symbol, not two.",
            "9": "This would be for three symbols, not two.",
            "12": "This would be for four symbols, not two."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch12_t1_qe17',
        type: "mcq",
        question: "What is the purpose of a bar graph's title?",
        options: ["To explain what the graph shows", "To count the bars", "To measure the height", "To color the graph"],
        correctAnswer: "To explain what the graph shows",
        explanation: "The title gives a clear description of the graph's content. 📝",
        wrongAnswerExplanations: {
            "To count the bars": "Counting is done using the scale, not the title.",
            "To measure the height": "Height is measured using the scale, not the title.",
            "To color the graph": "Colors are for visualization, not the title's purpose."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch12_t1_qe18',
        type: "mcq",
        question: "If a bar graph shows the number of students in different sports teams, what should be on the x-axis?",
        options: ["Sports names", "Number of students", "Team colors", "Practice times"],
        correctAnswer: "Sports names",
        explanation: "The x-axis shows the categories being compared, which are the sports names. 🏃",
        wrongAnswerExplanations: {
            "Number of students": "This would go on the y-axis as it's the measurement.",
            "Team colors": "Colors are for visualization, not categories.",
            "Practice times": "This would be a different measurement, not the categories."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch12_t1_qe19',
        type: "mcq",
        question: "What is the advantage of using a bar graph?",
        options: ["Easy to compare different categories", "Uses pictures instead of numbers", "Shows exact values without a scale", "Needs no labels"],
        correctAnswer: "Easy to compare different categories",
        explanation: "Bar graphs make it easy to compare quantities across different categories. 📊",
        wrongAnswerExplanations: {
            "Uses pictures instead of numbers": "Bar graphs use bars, not pictures.",
            "Shows exact values without a scale": "Bar graphs need a scale to show values.",
            "Needs no labels": "Bar graphs need labels to be understood."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch12_t1_qe20',
        type: "mcq",
        question: "If a pictograph shows favorite fruits and 🍓 represents 2 students, how many students like strawberries if there are 🍓🍓🍓🍓🍓?",
        options: ["8", "10", "12", "14"],
        correctAnswer: "10",
        explanation: "5 strawberries × 2 students = 10 students. 🍓",
        wrongAnswerExplanations: {
            "8": "This would be for four symbols, not five.",
            "12": "This would be for six symbols, not five.",
            "14": "This would be for seven symbols, not five."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    }
]; 