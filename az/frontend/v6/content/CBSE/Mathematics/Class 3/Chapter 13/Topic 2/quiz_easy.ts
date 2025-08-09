import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl3_ch13_t2_qe1',
        type: "mcq",
        question: "What is a pictograph?",
        options: ["A type of map", "A chart using pictures to show data", "A photograph", "A drawing of people"],
        correctAnswer: "A chart using pictures to show data",
        explanation: "A pictograph uses pictures or symbols to represent data visually.",
        wrongAnswerExplanations: {
            "A type of map": "A map shows locations, not data representation.",
            "A photograph": "A photograph is a picture taken with a camera, not a data representation.",
            "A drawing of people": "This is just a regular drawing, not a data representation."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl3_ch13_t2_qe2',
        type: "mcq",
        question: "In a bar graph, what does the height of each bar represent?",
        options: ["How popular the category is", "The value or quantity", "The color preference", "The day of the week"],
        correctAnswer: "The value or quantity",
        explanation: "The height of each bar shows the value or quantity for each category in the graph.",
        wrongAnswerExplanations: {
            "How popular the category is": "Popularity might be measured by height, but more generally it's the quantity being measured.",
            "The color preference": "Bar colors don't typically represent data values.",
            "The day of the week": "Days might be categories on the x-axis, but not represented by height."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl3_ch13_t2_qe3',
        type: "mcq",
        question: "If one 🍎 symbol represents 2 apples in a pictograph, how many apples are shown by 3 🍎 symbols?",
        options: ["3 apples", "5 apples", "6 apples", "9 apples"],
        correctAnswer: "6 apples",
        explanation: "If 1 🍎 = 2 apples, then 3 🍎 = 3 × 2 = 6 apples.",
        wrongAnswerExplanations: {
            "3 apples": "This counts the number of symbols, not what they represent.",
            "5 apples": "Incorrect calculation. 3 × 2 = 6, not 5.",
            "9 apples": "Incorrect calculation. 3 × 2 = 6, not 9."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl3_ch13_t2_qe4',
        type: "mcq",
        question: "Which of these is a bar graph?",
        options: ["A circle divided into parts", "A line connecting points", "Rectangles of different heights", "Pictures representing numbers"],
        correctAnswer: "Rectangles of different heights",
        explanation: "A bar graph uses rectangles (bars) of different heights to display data.",
        wrongAnswerExplanations: {
            "A circle divided into parts": "This describes a pie chart, not a bar graph.",
            "A line connecting points": "This describes a line graph, not a bar graph.",
            "Pictures representing numbers": "This describes a pictograph, not a bar graph."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl3_ch13_t2_qe5',
        type: "mcq",
        question: "What do we call the bottom line of a bar graph?",
        options: ["Vertical axis", "Horizontal axis", "Title", "Legend"],
        correctAnswer: "Horizontal axis",
        explanation: "The horizontal line at the bottom of a bar graph is called the horizontal axis or x-axis.",
        wrongAnswerExplanations: {
            "Vertical axis": "The vertical line is called the vertical or y-axis, not the bottom line.",
            "Title": "The title appears at the top of the graph, not at the bottom.",
            "Legend": "The legend explains symbols or colors used in the graph."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl3_ch13_t2_qe6',
        type: "mcq",
        question: "What information does a key in a pictograph tell us?",
        options: ["How to lock the data", "What each symbol represents", "Where the graph was made", "When the data was collected"],
        correctAnswer: "What each symbol represents",
        explanation: "A key explains what each symbol in the pictograph represents or counts for.",
        wrongAnswerExplanations: {
            "How to lock the data": "This is not related to data representation.",
            "Where the graph was made": "This information is not typically included in a key.",
            "When the data was collected": "This would be in the title or caption, not the key."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl3_ch13_t2_qe7',
        type: "mcq",
        question: "If a pictograph shows 5 🐶 and each 🐶 stands for 3 dogs, how many dogs are there in total?",
        options: ["5 dogs", "8 dogs", "15 dogs", "25 dogs"],
        correctAnswer: "15 dogs",
        explanation: "If each 🐶 = 3 dogs, then 5 🐶 = 5 × 3 = 15 dogs total.",
        wrongAnswerExplanations: {
            "5 dogs": "This counts the number of symbols, not what they represent.",
            "8 dogs": "Incorrect calculation. 5 × 3 = 15, not 8.",
            "25 dogs": "Incorrect calculation. 5 × 3 = 15, not 25."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl3_ch13_t2_qe8',
        type: "mcq",
        question: "What should a bar graph always have?",
        options: ["Colors", "A title", "Pictures", "Numbers only"],
        correctAnswer: "A title",
        explanation: "A bar graph should always have a title to tell what data is being shown.",
        wrongAnswerExplanations: {
            "Colors": "Colors can be helpful but aren't required in a bar graph.",
            "Pictures": "Bar graphs use bars, not pictures, to represent data.",
            "Numbers only": "Bar graphs can show categories, not just numbers."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl3_ch13_t2_qe9',
        type: "mcq",
        question: "What does half a symbol mean in a pictograph?",
        options: ["The data is not complete", "Half the value of a full symbol", "It's a mistake", "The information is secret"],
        correctAnswer: "Half the value of a full symbol",
        explanation: "Half a symbol represents half the value that a full symbol stands for.",
        wrongAnswerExplanations: {
            "The data is not complete": "The data is complete, but has a fractional value.",
            "It's a mistake": "It's intentional to show accurate values, not a mistake.",
            "The information is secret": "This is not related to data representation."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl3_ch13_t2_qe10',
        type: "mcq",
        question: "Which is easier to understand at a glance?",
        options: ["A long list of numbers", "A paragraph of text", "A bar graph", "A math equation"],
        correctAnswer: "A bar graph",
        explanation: "A bar graph shows data visually, making it easier to understand quickly at a glance.",
        wrongAnswerExplanations: {
            "A long list of numbers": "Numbers in a list are harder to interpret visually.",
            "A paragraph of text": "Text takes longer to read and process than visual data.",
            "A math equation": "Equations need to be solved to extract information."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl3_ch13_t2_qe11',
        type: "mcq",
        question: "In a bar graph about favorite fruits, what would be on the horizontal axis?",
        options: ["Number of students", "Names of fruits", "Days of the week", "Colors of fruits"],
        correctAnswer: "Names of fruits",
        explanation: "The horizontal axis would show the categories (different fruits) being compared.",
        wrongAnswerExplanations: {
            "Number of students": "This would be on the vertical axis showing the count.",
            "Days of the week": "This isn't relevant for favorite fruits data.",
            "Colors of fruits": "Colors aren't typically used as categories in this case."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl3_ch13_t2_qe12',
        type: "mcq",
        question: "How many books are represented by 4 📚 symbols if each 📚 means 2 books?",
        options: ["2 books", "4 books", "6 books", "8 books"],
        correctAnswer: "8 books",
        explanation: "If each 📚 = 2 books, then 4 📚 = 4 × 2 = 8 books total.",
        wrongAnswerExplanations: {
            "2 books": "This is what one symbol represents, not four symbols.",
            "4 books": "This counts the number of symbols, not what they represent.",
            "6 books": "Incorrect calculation. 4 × 2 = 8, not 6."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl3_ch13_t2_qe13',
        type: "mcq",
        question: "What is the tallest bar in a bar graph?",
        options: ["The most colorful one", "The one with the highest value", "The one on the right", "The one on the left"],
        correctAnswer: "The one with the highest value",
        explanation: "The tallest bar represents the highest value or quantity in the data set.",
        wrongAnswerExplanations: {
            "The most colorful one": "Color doesn't determine height or value in a bar graph.",
            "The one on the right": "Position doesn't determine which bar is tallest.",
            "The one on the left": "Position doesn't determine which bar is tallest."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl3_ch13_t2_qe14',
        type: "mcq",
        question: "What would a pictograph about favorite pets use?",
        options: ["Only words", "Only numbers", "Picture symbols of pets", "Just colors"],
        correctAnswer: "Picture symbols of pets",
        explanation: "A pictograph would use symbols like 🐶, 🐱, or 🐟 to represent the data about pets.",
        wrongAnswerExplanations: {
            "Only words": "Pictographs use symbols/pictures, not just words.",
            "Only numbers": "Pictographs use symbols/pictures to represent numbers.",
            "Just colors": "Pictographs use symbols, not just color differences."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl3_ch13_t2_qe15',
        type: "mcq",
        question: "Which of these would you show in a bar graph?",
        options: ["A story about a dog", "Favorite colors of students in a class", "The alphabet", "A picture of your family"],
        correctAnswer: "Favorite colors of students in a class",
        explanation: "Bar graphs show data like favorite colors that can be counted and compared.",
        wrongAnswerExplanations: {
            "A story about a dog": "Stories are text, not countable data for graphs.",
            "The alphabet": "Letters aren't numerical data for comparison.",
            "A picture of your family": "Pictures aren't data for graphical representation."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl3_ch13_t2_qe16',
        type: "mcq",
        question: "If a bar for 'red' is twice as tall as a bar for 'blue', what does this mean?",
        options: ["Red is prettier than blue", "Twice as many people chose red as blue", "The color red is brighter", "Blue is less expensive"],
        correctAnswer: "Twice as many people chose red as blue",
        explanation: "Bar height shows quantity, so a bar twice as tall means twice the amount.",
        wrongAnswerExplanations: {
            "Red is prettier than blue": "Bar height shows quantity, not subjective qualities.",
            "The color red is brighter": "Bar height shows quantity, not color properties.",
            "Blue is less expensive": "Bar height shows quantity, not cost."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl3_ch13_t2_qe17',
        type: "mcq",
        question: "What helps us read the values on a bar graph?",
        options: ["A magnifying glass", "Scale on the vertical axis", "The color of the bars", "The width of the bars"],
        correctAnswer: "Scale on the vertical axis",
        explanation: "The scale on the vertical axis shows the values that the bar heights represent.",
        wrongAnswerExplanations: {
            "A magnifying glass": "This is a tool, not a part of the graph.",
            "The color of the bars": "Colors help identify categories, not determine values.",
            "The width of the bars": "Width is typically constant and doesn't indicate value."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl3_ch13_t2_qe18',
        type: "mcq",
        question: "If one 🚗 symbol equals 5 cars in a pictograph, how many symbols would show 15 cars?",
        options: ["3 car symbols", "5 car symbols", "10 car symbols", "15 car symbols"],
        correctAnswer: "3 car symbols",
        explanation: "If each 🚗 = 5 cars, then 15 cars ÷ 5 = 3 car symbols needed.",
        wrongAnswerExplanations: {
            "5 car symbols": "This would represent 25 cars (5 × 5), not 15.",
            "10 car symbols": "This would represent 50 cars (10 × 5), not 15.",
            "15 car symbols": "This would represent 75 cars (15 × 5), not 15."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl3_ch13_t2_qe19',
        type: "mcq",
        question: "Why do we use graphs?",
        options: ["To make homework harder", "To show data clearly and quickly", "Because they're colorful", "To hide information"],
        correctAnswer: "To show data clearly and quickly",
        explanation: "Graphs present data visually so we can understand information more easily and quickly.",
        wrongAnswerExplanations: {
            "To make homework harder": "Graphs actually make understanding data easier, not harder.",
            "Because they're colorful": "Colors can help, but the main purpose is clear data presentation.",
            "To hide information": "Graphs aim to clearly show information, not hide it."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl3_ch13_t2_qe20',
        type: "mcq",
        question: "What is NOT typically shown in a bar graph?",
        options: ["Favorite foods", "Weather over time", "Number of siblings", "A story with characters"],
        correctAnswer: "A story with characters",
        explanation: "Bar graphs show countable data, not stories with characters and plots.",
        wrongAnswerExplanations: {
            "Favorite foods": "Food preferences can be counted and shown in a bar graph.",
            "Weather over time": "Weather data can be represented in a bar graph.",
            "Number of siblings": "This countable data can be shown in a bar graph."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    }
];
