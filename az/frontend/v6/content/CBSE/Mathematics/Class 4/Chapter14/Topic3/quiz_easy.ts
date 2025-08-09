import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl4_ch14_t3_qe1',
        type: "mcq",
        question: "What information can we find from a pictograph showing fruits sold in a week?",
        options: ["Only the names of fruits", "Only the days of the week", "Number of fruits sold each day", "Temperature each day"],
        correctAnswer: "Number of fruits sold each day",
        explanation: "A pictograph showing fruits sold in a week tells us the quantity of fruits sold on each day using pictures or symbols.",
        wrongAnswerExplanations: {
            "Only the names of fruits": "A pictograph shows quantities, not just names of items.",
            "Only the days of the week": "While days may be shown, the main purpose is to show quantities.",
            "Temperature each day": "A pictograph about fruits would show fruit quantities, not temperature."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch14_t3_qe2',
        type: "mcq",
        question: "In a bar graph showing number of students in different classes, what does the height of each bar represent?",
        options: ["Age of students", "Names of classes", "Number of students", "Number of teachers"],
        correctAnswer: "Number of students",
        explanation: "In a bar graph, the height of each bar represents the quantity being measured - in this case, the number of students in each class.",
        wrongAnswerExplanations: {
            "Age of students": "The bar heights represent quantities, not ages.",
            "Names of classes": "Names would be shown on the horizontal axis, not by bar heights.",
            "Number of teachers": "The question states the graph shows number of students, not teachers."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch14_t3_qe3',
        type: "mcq",
        question: "What does 🍎🍎🍎 mean in a pictograph where 🍎 = 5 apples?",
        options: ["3 apples", "8 apples", "15 apples", "5 apples"],
        correctAnswer: "15 apples",
        explanation: "When 🍎 represents 5 apples, then 🍎🍎🍎 means 3 × 5 = 15 apples. We multiply the number of symbols by what each symbol represents.",
        wrongAnswerExplanations: {
            "3 apples": "This counts the number of symbols, not what they represent.",
            "8 apples": "This is not the correct calculation of what the symbols represent.",
            "5 apples": "This is what one 🍎 represents, not three."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch14_t3_qe4',
        type: "mcq",
        question: "What is the title of a chart used for?",
        options: ["To make the chart colorful", "To tell what information the chart shows", "To show the date", "To count numbers"],
        correctAnswer: "To tell what information the chart shows",
        explanation: "The title of a chart explains what data or information is being displayed in the chart, helping readers understand its purpose.",
        wrongAnswerExplanations: {
            "To make the chart colorful": "Titles provide information, not decoration.",
            "To show the date": "Dates might be included elsewhere, but not as the main purpose of a title.",
            "To count numbers": "Titles describe the data, they don't perform calculations."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch14_t3_qe5',
        type: "mcq",
        question: "What are the vertical lines on a bar graph called?",
        options: ["Bars", "Axis", "Labels", "Scale"],
        correctAnswer: "Bars",
        explanation: "The vertical rectangles on a bar graph are called bars. Their heights represent the values being shown for each category.",
        wrongAnswerExplanations: {
            "Axis": "The horizontal and vertical lines that form the framework of the graph are called axes.",
            "Labels": "Labels are text descriptions for different parts of the graph.",
            "Scale": "Scale refers to the numbering system used on the axes."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch14_t3_qe6',
        type: "mcq",
        question: "Look at this pictograph showing books read: Monday: 📚📚, Tuesday: 📚📚📚. If 📚 = 3 books, how many total books were read on these two days?",
        options: ["5 books", "9 books", "15 books", "6 books"],
        correctAnswer: "15 books",
        explanation: "Monday: 📚📚 = 2 × 3 = 6 books. Tuesday: 📚📚📚 = 3 × 3 = 9 books. Total: 6 + 9 = 15 books.",
        wrongAnswerExplanations: {
            "5 books": "This counts the total number of symbols, not what they represent.",
            "9 books": "This is only the count for Tuesday, not both days combined.",
            "6 books": "This is only the count for Monday, not both days combined."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch14_t3_qe7',
        type: "mcq",
        question: "What does the horizontal axis (x-axis) usually show in a bar graph about students' favorite sports?",
        options: ["Number of students", "Types of sports", "Days of the week", "Ages of students"],
        correctAnswer: "Types of sports",
        explanation: "In a bar graph about favorite sports, the horizontal axis typically shows the different categories (sports), while the vertical axis shows the quantities (number of students).",
        wrongAnswerExplanations: {
            "Number of students": "This would typically be shown on the vertical axis.",
            "Days of the week": "A graph about favorite sports would show sports, not days.",
            "Ages of students": "A graph about favorite sports would focus on sports, not student ages."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch14_t3_qe8',
        type: "mcq",
        question: "What is the purpose of a key or legend in a pictograph?",
        options: ["To make the graph colorful", "To explain what each symbol represents", "To add numbers", "To show the date"],
        correctAnswer: "To explain what each symbol represents",
        explanation: "A key or legend in a pictograph explains what each symbol represents, such as '⭐ = 5 students' or '🚗 = 10 cars'.",
        wrongAnswerExplanations: {
            "To make the graph colorful": "The key provides information, not just decoration.",
            "To add numbers": "The key explains symbols, it doesn't perform calculations.",
            "To show the date": "Dates might be included elsewhere, but that's not the purpose of a key."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch14_t3_qe9',
        type: "mcq",
        question: "In a bar graph showing favorite colors, which color is most popular if its bar is the tallest?",
        options: ["We can't tell from the bar height", "The color with the shortest bar", "The color with the tallest bar", "All colors are equally popular"],
        correctAnswer: "The color with the tallest bar",
        explanation: "In a bar graph, the height of each bar represents the quantity. The tallest bar shows the most popular choice - in this case, the favorite color chosen by most people.",
        wrongAnswerExplanations: {
            "We can't tell from the bar height": "Bar height directly shows the quantity or popularity.",
            "The color with the shortest bar": "The shortest bar represents the least popular choice.",
            "All colors are equally popular": "Different bar heights indicate different levels of popularity."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch14_t3_qe10',
        type: "mcq",
        question: "What could the vertical axis (y-axis) show in a chart about rainfall in different months?",
        options: ["Names of months", "Temperature", "Amount of rainfall in cm", "Days in each month"],
        correctAnswer: "Amount of rainfall in cm",
        explanation: "In a rainfall chart, the vertical axis typically shows the amount of rainfall (measured in cm or mm), while the horizontal axis shows the time period (months).",
        wrongAnswerExplanations: {
            "Names of months": "Month names would typically be shown on the horizontal axis.",
            "Temperature": "A rainfall chart would show rainfall amounts, not temperature.",
            "Days in each month": "This information wouldn't be the main focus of a rainfall chart."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch14_t3_qe11',
        type: "mcq",
        question: "What can we learn from looking at a pictograph showing the number of ice creams 🍦 sold each day of the week?",
        options: ["Only the price of ice creams", "Which day had the most sales", "Only the flavors available", "The shop's opening hours"],
        correctAnswer: "Which day had the most sales",
        explanation: "A pictograph showing daily ice cream sales would help us identify which day had the highest sales by looking at which day has the most symbols.",
        wrongAnswerExplanations: {
            "Only the price of ice creams": "A pictograph showing sales quantities doesn't show prices.",
            "Only the flavors available": "A sales pictograph shows quantities, not typically flavors.",
            "The shop's opening hours": "Operating hours wouldn't be shown in a sales pictograph."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch14_t3_qe12',
        type: "mcq",
        question: "In a bar graph showing heights of five children, if Ravi's bar is taller than Sita's bar, what does this mean?",
        options: ["Sita is older than Ravi", "Ravi is taller than Sita", "Ravi and Sita are the same height", "We can't tell who is taller"],
        correctAnswer: "Ravi is taller than Sita",
        explanation: "In a bar graph showing heights, taller bars represent greater heights. If Ravi's bar is taller than Sita's, it means Ravi is taller than Sita.",
        wrongAnswerExplanations: {
            "Sita is older than Ravi": "The graph shows heights, not ages.",
            "Ravi and Sita are the same height": "Different bar heights indicate different actual heights.",
            "We can't tell who is taller": "Bar heights directly represent the measure being shown."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch14_t3_qe13',
        type: "mcq",
        question: "What information do we need to correctly read a bar graph?",
        options: ["Only the title", "Only the labels on bars", "Labels and scale on both axes", "Only colors of the bars"],
        correctAnswer: "Labels and scale on both axes",
        explanation: "To correctly read a bar graph, we need labels (to know what each bar represents) and scales on both axes (to know the exact values).",
        wrongAnswerExplanations: {
            "Only the title": "While important, the title alone doesn't provide enough information to read the values.",
            "Only the labels on bars": "Labels help identify categories but don't show values without a scale.",
            "Only colors of the bars": "Colors may help distinguish bars but don't provide measurement information."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch14_t3_qe14',
        type: "mcq",
        question: "In a pictograph showing fruits in a basket where 🍎 = 4 apples, 🍌 = 3 bananas, and 🍊 = 2 oranges, how many total fruits are there if we see 🍎🍎 🍌🍌🍌 🍊🍊?",
        options: ["7 fruits", "14 fruits", "23 fruits", "17 fruits"],
        correctAnswer: "23 fruits",
        explanation: "🍎🍎 = 2 × 4 = 8 apples, 🍌🍌🍌 = 3 × 3 = 9 bananas, 🍊🍊 = 2 × 2 = 4 oranges. Total: 8 + 9 + 4 = 21 fruits.",
        wrongAnswerExplanations: {
            "7 fruits": "This only counts the number of symbols, not what they represent.",
            "14 fruits": "This calculation is incorrect.",
            "17 fruits": "This calculation is incorrect."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch14_t3_qe15',
        type: "mcq",
        question: "What does it mean when two bars in a bar graph are the same height?",
        options: ["The data is wrong", "The categories have the same value", "One category is more important", "The graph is incomplete"],
        correctAnswer: "The categories have the same value",
        explanation: "When two bars have the same height, it means the quantities they represent are equal or the same value.",
        wrongAnswerExplanations: {
            "The data is wrong": "Equal values in different categories is perfectly normal and doesn't indicate an error.",
            "One category is more important": "Bar height shows quantity, not importance.",
            "The graph is incomplete": "Equal values don't mean missing data."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch14_t3_qe16',
        type: "mcq",
        question: "In a pictograph of pets in a neighborhood, if 🐶 represents 2 dogs and 🐱 represents 3 cats, what does 🐶🐶🐶 🐱🐱 mean?",
        options: ["3 dogs and 2 cats", "5 pets total", "6 dogs and 6 cats", "12 pets total"],
        correctAnswer: "12 pets total",
        explanation: "🐶🐶🐶 = 3 × 2 = 6 dogs, 🐱🐱 = 2 × 3 = 6 cats. Total pets: 6 + 6 = 12 pets.",
        wrongAnswerExplanations: {
            "3 dogs and 2 cats": "This counts the symbols, not what they represent.",
            "5 pets total": "This only counts the number of symbols, not their values.",
            "6 dogs and 6 cats": "This is correct for each type, but the question asks for the total."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch14_t3_qe17',
        type: "mcq",
        question: "What does the scale on a graph tell us?",
        options: ["The weight of the paper", "How to measure the values shown", "The title of the graph", "The color coding"],
        correctAnswer: "How to measure the values shown",
        explanation: "The scale on a graph tells us how to interpret the measurements or values shown, like '1 cm = 10 students' or numerically as '0, 10, 20, 30...'",
        wrongAnswerExplanations: {
            "The weight of the paper": "Scale refers to measurement units, not physical properties of the paper.",
            "The title of the graph": "The title and scale are different components of a graph.",
            "The color coding": "Scale refers to measurement units, not color information."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch14_t3_qe18',
        type: "mcq",
        question: "If a bar graph shows the number of books read by 5 students, what would be a good title for this graph?",
        options: ["Colors of Books", "Ages of Students", "Number of Books Read by Students", "School Timetable"],
        correctAnswer: "Number of Books Read by Students",
        explanation: "A good title clearly describes what information the graph is showing. 'Number of Books Read by Students' accurately describes a graph showing how many books each student has read.",
        wrongAnswerExplanations: {
            "Colors of Books": "This doesn't match the described content of the graph.",
            "Ages of Students": "The graph shows books read, not student ages.",
            "School Timetable": "This is unrelated to a graph about books read."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch14_t3_qe19',
        type: "mcq",
        question: "In a pictograph showing toys collected for charity, what might half a symbol represent?",
        options: ["A broken toy", "Nothing at all", "Half the value of a full symbol", "Double the value of a full symbol"],
        correctAnswer: "Half the value of a full symbol",
        explanation: "In a pictograph, half a symbol represents half the value of what a complete symbol stands for. If one symbol = 10 toys, then half a symbol = 5 toys.",
        wrongAnswerExplanations: {
            "A broken toy": "Half symbols represent quantity, not the condition of items.",
            "Nothing at all": "Half symbols have value; they aren't meaningless.",
            "Double the value of a full symbol": "Half a symbol would logically represent half, not double, the value."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch14_t3_qe20',
        type: "mcq",
        question: "When looking at a bar graph showing rainfall in different cities, how can you tell which city had the least rainfall?",
        options: ["The city with the tallest bar", "The city with the shortest bar", "The city listed first", "The city with the most colorful bar"],
        correctAnswer: "The city with the shortest bar",
        explanation: "In a bar graph, shorter bars represent smaller values. The city with the shortest bar would have the least rainfall.",
        wrongAnswerExplanations: {
            "The city with the tallest bar": "The tallest bar represents the greatest value (most rainfall).",
            "The city listed first": "Position in the listing doesn't determine the value.",
            "The city with the most colorful bar": "Color doesn't typically represent quantity in a standard bar graph."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    }
];
