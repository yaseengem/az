import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl4_ch14_t2_qe1',
        type: "mcq",
        question: "What is a pictograph?",
        options: ["A graph made with words", "A graph using pictures or symbols to represent data", "A graph showing only numbers", "A graph with only colors"],
        correctAnswer: "A graph using pictures or symbols to represent data",
        explanation: "A pictograph uses pictures or symbols to represent quantities or data values, making them visually appealing and easy to understand.",
        wrongAnswerExplanations: {
            "A graph made with words": "Pictographs use pictures or symbols, not words, to represent data.",
            "A graph showing only numbers": "Pictographs use pictures or symbols, not just numbers.",
            "A graph with only colors": "Pictographs use pictures or symbols, not just colors."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch14_t2_qe2',
        type: "mcq",
        question: "In a pictograph, if 🍎 represents 5 apples, how many apples are represented by 3 apple symbols?",
        options: ["3 apples", "8 apples", "15 apples", "5 apples"],
        correctAnswer: "15 apples",
        explanation: "If one 🍎 symbol represents 5 apples, then 3 🍎 symbols represent 3 × 5 = 15 apples.",
        wrongAnswerExplanations: {
            "3 apples": "This doesn't account for each symbol representing 5 apples.",
            "8 apples": "This is an incorrect calculation. 3 × 5 = 15, not 8.",
            "5 apples": "This is the value of only one symbol, not three symbols."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch14_t2_qe3',
        type: "mcq",
        question: "What does a key or legend tell us in a pictograph?",
        options: ["The title of the graph", "What each picture or symbol represents", "The total number of items", "The colors used in the graph"],
        correctAnswer: "What each picture or symbol represents",
        explanation: "A key or legend in a pictograph explains what each symbol represents, such as '🍎 = 5 apples' or '👧 = 2 students'.",
        wrongAnswerExplanations: {
            "The title of the graph": "The title appears at the top of the graph, not in the key.",
            "The total number of items": "The key doesn't show totals, but what each symbol represents.",
            "The colors used in the graph": "While colors may be part of the symbols, the key explains what the symbols represent."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch14_t2_qe4',
        type: "mcq",
        question: "Which of these is a bar graph?",
        options: ["A graph with circular sections", "A graph with lines connecting points", "A graph with rectangles of different heights", "A graph with pictures representing numbers"],
        correctAnswer: "A graph with rectangles of different heights",
        explanation: "A bar graph displays data using rectangular bars of different heights or lengths, with the length proportional to the value they represent.",
        wrongAnswerExplanations: {
            "A graph with circular sections": "This describes a pie chart, not a bar graph.",
            "A graph with lines connecting points": "This describes a line graph, not a bar graph.",
            "A graph with pictures representing numbers": "This describes a pictograph, not a bar graph."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch14_t2_qe5',
        type: "mcq",
        question: "What are the two main parts of a bar graph?",
        options: ["Title and colors", "X-axis and Y-axis", "Pictures and numbers", "Legend and footnotes"],
        correctAnswer: "X-axis and Y-axis",
        explanation: "Bar graphs have two main parts: the X-axis (horizontal) and Y-axis (vertical). The X-axis shows categories, and the Y-axis shows values.",
        wrongAnswerExplanations: {
            "Title and colors": "While bar graphs have titles and may use colors, these aren't the main structural parts.",
            "Pictures and numbers": "Bar graphs use bars and numbers, not pictures.",
            "Legend and footnotes": "While some bar graphs may have legends, these aren't the main structural parts."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch14_t2_qe6',
        type: "mcq",
        question: "If a bar in a bar graph is 5 units high and each unit represents 2 items, how many items does the bar represent?",
        options: ["2 items", "5 items", "7 items", "10 items"],
        correctAnswer: "10 items",
        explanation: "If each unit represents 2 items, then 5 units represent 5 × 2 = 10 items.",
        wrongAnswerExplanations: {
            "2 items": "This is what 1 unit represents, not 5 units.",
            "5 items": "This is the number of units, not the total items represented.",
            "7 items": "This is an incorrect calculation. 5 × 2 = 10, not 7."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch14_t2_qe7',
        type: "mcq",
        question: "Which graph type uses equal-sized squares to represent data?",
        options: ["Line graph", "Pictograph", "Bar graph", "Pie chart"],
        correctAnswer: "Pictograph",
        explanation: "Pictographs often use equal-sized symbols or pictures, such as squares, to represent a fixed quantity of items.",
        wrongAnswerExplanations: {
            "Line graph": "Line graphs use points connected by lines, not equal-sized squares.",
            "Bar graph": "Bar graphs use rectangles of varying heights, not equal-sized squares.",
            "Pie chart": "Pie charts use circular sections of different sizes, not squares."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch14_t2_qe8',
        type: "mcq",
        question: "In a pictograph showing flowers collected by students, if 🌼 = 5 flowers, how many flowers did Rani collect if she has 3 whole flower symbols and half a flower symbol?",
        options: ["3 flowers", "15 flowers", "17.5 flowers", "18 flowers"],
        correctAnswer: "17.5 flowers",
        explanation: "3 whole 🌼 symbols = 3 × 5 = 15 flowers. Half a 🌼 symbol = 0.5 × 5 = 2.5 flowers. Total: 15 + 2.5 = 17.5 flowers.",
        wrongAnswerExplanations: {
            "3 flowers": "This counts only the number of symbols, not what they represent.",
            "15 flowers": "This counts only the whole symbols, ignoring the half symbol.",
            "18 flowers": "This incorrectly calculates the value of half a symbol as 3 instead of 2.5."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch14_t2_qe9',
        type: "mcq",
        question: "Which graph type is better for comparing exact values between different categories?",
        options: ["Pictograph", "Bar graph", "Both are equally good", "Neither is good for comparing values"],
        correctAnswer: "Bar graph",
        explanation: "Bar graphs are better for comparing exact values between categories because the height of each bar precisely represents the value.",
        wrongAnswerExplanations: {
            "Pictograph": "Pictographs are good for approximate comparisons but less precise than bar graphs.",
            "Both are equally good": "Bar graphs are more precise for exact value comparisons.",
            "Neither is good for comparing values": "Both graphs can compare values, but bar graphs do it more precisely."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch14_t2_qe10',
        type: "mcq",
        question: "What does the height of a bar in a bar graph represent?",
        options: ["The name of the category", "The color of the category", "The value or quantity of the category", "The position of the category"],
        correctAnswer: "The value or quantity of the category",
        explanation: "In a bar graph, the height of each bar represents the value or quantity of that category.",
        wrongAnswerExplanations: {
            "The name of the category": "Category names are usually shown on the X-axis, not by the bar height.",
            "The color of the category": "Colors may distinguish bars but don't determine their height.",
            "The position of the category": "The position relates to where the bar is placed, not its height."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch14_t2_qe11',
        type: "mcq",
        question: "Which of these would be BEST displayed using a pictograph?",
        options: ["The exact heights of 20 students", "The number of books read by each class", "The temperature changes over a week", "The exact weight of different objects"],
        correctAnswer: "The number of books read by each class",
        explanation: "Pictographs work well for simple, whole-number data like books read by different classes, using book symbols.",
        wrongAnswerExplanations: {
            "The exact heights of 20 students": "Exact measurements work better with bar graphs that show precise values.",
            "The temperature changes over a week": "Temperature changes over time work better with line graphs.",
            "The exact weight of different objects": "Exact weights work better with bar graphs for precise comparison."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch14_t2_qe12',
        type: "mcq",
        question: "What information is usually shown on the X-axis of a bar graph?",
        options: ["Values or quantities", "Category names", "The title of the graph", "The scale or units"],
        correctAnswer: "Category names",
        explanation: "The X-axis (horizontal axis) of a bar graph typically shows the names of different categories being compared.",
        wrongAnswerExplanations: {
            "Values or quantities": "These are shown on the Y-axis, not the X-axis.",
            "The title of the graph": "The title appears at the top of the graph, not on the X-axis.",
            "The scale or units": "The scale is typically shown on the Y-axis, not the X-axis."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch14_t2_qe13',
        type: "mcq",
        question: "If a pictograph shows 🍦 = 4 ice creams, and Class 4-A has 3 ice cream symbols, how many ice creams does Class 4-A have?",
        options: ["3 ice creams", "4 ice creams", "7 ice creams", "12 ice creams"],
        correctAnswer: "12 ice creams",
        explanation: "If one 🍦 symbol represents 4 ice creams, then 3 🍦 symbols represent 3 × 4 = 12 ice creams.",
        wrongAnswerExplanations: {
            "3 ice creams": "This counts the number of symbols, not what they represent.",
            "4 ice creams": "This is what one symbol represents, not three symbols.",
            "7 ice creams": "This incorrectly adds the number of symbols (3) to what one symbol represents (4)."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch14_t2_qe14',
        type: "mcq",
        question: "In a bar graph, which axis typically shows the scale or measurement units?",
        options: ["X-axis", "Y-axis", "Both axes", "Neither axis"],
        correctAnswer: "Y-axis",
        explanation: "The Y-axis (vertical axis) typically shows the scale or measurement units in a bar graph.",
        wrongAnswerExplanations: {
            "X-axis": "The X-axis typically shows categories, not the scale.",
            "Both axes": "Typically only the Y-axis shows the scale or units.",
            "Neither axis": "The scale must be shown, typically on the Y-axis."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch14_t2_qe15',
        type: "mcq",
        question: "What is the purpose of using different colors in a bar graph?",
        options: ["To make it look pretty", "To distinguish between different categories", "Colors have no purpose in bar graphs", "To show the exact values"],
        correctAnswer: "To distinguish between different categories",
        explanation: "Different colors in a bar graph help distinguish between different categories and make the graph easier to read.",
        wrongAnswerExplanations: {
            "To make it look pretty": "While colors make graphs visually appealing, their main purpose is functional.",
            "Colors have no purpose in bar graphs": "Colors serve an important purpose in distinguishing categories.",
            "To show the exact values": "Values are shown by the height of bars, not by their colors."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch14_t2_qe16',
        type: "mcq",
        question: "Which of these is an advantage of a pictograph over a bar graph?",
        options: ["It shows more precise values", "It's more visually appealing for young children", "It can display more categories", "It uses less space"],
        correctAnswer: "It's more visually appealing for young children",
        explanation: "Pictographs use pictures or symbols which are more visually appealing and engaging for young children.",
        wrongAnswerExplanations: {
            "It shows more precise values": "Bar graphs actually show more precise values than pictographs.",
            "It can display more categories": "Both can display multiple categories, but bar graphs often handle more.",
            "It uses less space": "Pictographs often require more space than bar graphs for the same data."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch14_t2_qe17',
        type: "mcq",
        question: "In a bar graph showing the favorite fruits of children, which part would show 'Apple', 'Banana', and 'Orange'?",
        options: ["The Y-axis", "The X-axis", "The title", "The legend"],
        correctAnswer: "The X-axis",
        explanation: "The X-axis (horizontal axis) would show the different fruit categories like Apple, Banana, and Orange.",
        wrongAnswerExplanations: {
            "The Y-axis": "The Y-axis would show the number of children, not the fruit names.",
            "The title": "The title would name the entire graph, not list individual categories.",
            "The legend": "A simple bar graph might not need a legend, and fruit names would be on the X-axis."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch14_t2_qe18',
        type: "mcq",
        question: "If a pictograph uses half symbols, what does a half symbol represent?",
        options: ["Half a unit", "Half the value of a whole symbol", "It means the data is uncertain", "It means the data is not important"],
        correctAnswer: "Half the value of a whole symbol",
        explanation: "In a pictograph, a half symbol represents half the value of a whole symbol. If a whole symbol equals 10, a half symbol equals 5.",
        wrongAnswerExplanations: {
            "Half a unit": "This is vague; it depends on what the whole symbol represents.",
            "It means the data is uncertain": "Half symbols represent precise values, not uncertainty.",
            "It means the data is not important": "Half symbols are as important as whole symbols in data representation."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch14_t2_qe19',
        type: "mcq",
        question: "When reading a bar graph, which of these questions can you answer?",
        options: ["How the data was collected", "Who created the graph", "Which category has the highest value", "When the graph was made"],
        correctAnswer: "Which category has the highest value",
        explanation: "A bar graph clearly shows which category has the highest value by the height of its bar compared to others.",
        wrongAnswerExplanations: {
            "How the data was collected": "Bar graphs don't typically show the data collection method.",
            "Who created the graph": "This information isn't part of the graph content.",
            "When the graph was made": "The creation date isn't typically shown on the graph itself."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch14_t2_qe20',
        type: "mcq",
        question: "What would be a good title for a bar graph showing how many books different classes read?",
        options: ["Books Are Fun", "Classes in Our School", "Number of Books Read by Each Class", "Reading Time"],
        correctAnswer: "Number of Books Read by Each Class",
        explanation: "A good graph title clearly explains what the graph shows: the number of books read by each class.",
        wrongAnswerExplanations: {
            "Books Are Fun": "This is too vague and doesn't explain what the graph shows.",
            "Classes in Our School": "This doesn't mention books or reading, which is the data being shown.",
            "Reading Time": "This is too vague and doesn't specify books read by classes."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    }
];
