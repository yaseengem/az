import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl4_ch11_t2_qe1',
        type: "mcq",
        question: "What is the total number of objects when arranged in 4 rows with 3 objects in each row?",
        options: ["7", "10", "12", "16"],
        correctAnswer: "12",
        explanation: "When we have 4 rows with 3 objects in each row, we multiply: 4 × 3 = 12 objects total.",
        wrongAnswerExplanations: {
            "7": "This is incorrect. We need to multiply rows by objects in each row: 4 × 3 = 12.",
            "10": "This is incorrect. The correct calculation is 4 × 3 = 12, not 4 + 3 + 3.",
            "16": "This is incorrect. You might have calculated 4 × 4 = 16, but there are only 3 objects per row."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch11_t2_qe2',
        type: "mcq",
        question: "If 15 apples 🍎 are arranged in 3 equal rows, how many apples will be in each row?",
        options: ["3", "5", "6", "8"],
        correctAnswer: "5",
        explanation: "To find apples in each row, divide total apples by number of rows: 15 ÷ 3 = 5 apples in each row.",
        wrongAnswerExplanations: {
            "3": "This is incorrect. The number of rows is 3, but to find apples per row we divide: 15 ÷ 3 = 5.",
            "6": "This is incorrect. Dividing 15 by 3 gives 5, not 6.",
            "8": "This is incorrect. 15 divided by 3 equals 5, not 8."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch11_t2_qe3',
        type: "mcq",
        question: "A teacher arranges 24 students in 6 equal columns. How many students are in each column?",
        options: ["3", "4", "5", "6"],
        correctAnswer: "4",
        explanation: "To find students in each column, divide total students by number of columns: 24 ÷ 6 = 4 students per column.",
        wrongAnswerExplanations: {
            "3": "This is incorrect. When we divide 24 by 6, we get 4, not 3.",
            "5": "This is incorrect. The correct calculation is 24 ÷ 6 = 4, not 5.",
            "6": "This is incorrect. The number of columns is 6, but to find students per column: 24 ÷ 6 = 4."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch11_t2_qe4',
        type: "mcq",
        question: "What is the total number of pencils ✏️ when arranged in 5 columns with 4 pencils in each column?",
        options: ["9", "16", "20", "25"],
        correctAnswer: "20",
        explanation: "When we have 5 columns with 4 pencils in each column, we multiply: 5 × 4 = 20 pencils total.",
        wrongAnswerExplanations: {
            "9": "This is incorrect. We need to multiply columns by pencils in each column: 5 × 4 = 20.",
            "16": "This is incorrect. 5 × 4 = 20, not 16. You might have calculated 4 × 4 = 16.",
            "25": "This is incorrect. You might have calculated 5 × 5 = 25, but there are only 4 pencils per column."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch11_t2_qe5',
        type: "mcq",
        question: "If 20 chocolates 🍫 are arranged in 4 equal rows, how many chocolates will be in each row?",
        options: ["4", "5", "6", "10"],
        correctAnswer: "5",
        explanation: "To find chocolates in each row, divide total chocolates by number of rows: 20 ÷ 4 = 5 chocolates per row.",
        wrongAnswerExplanations: {
            "4": "This is incorrect. The number of rows is 4, but to find chocolates per row: 20 ÷ 4 = 5, not 4.",
            "6": "This is incorrect. Dividing 20 by 4 gives 5, not 6.",
            "10": "This is incorrect. 20 divided by 4 equals 5, not 10."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch11_t2_qe6',
        type: "mcq",
        question: "If 18 balls ⚽ are arranged in rows with 3 balls in each row, how many rows will there be?",
        options: ["3", "5", "6", "9"],
        correctAnswer: "6",
        explanation: "To find the number of rows, divide total balls by balls in each row: 18 ÷ 3 = 6 rows.",
        wrongAnswerExplanations: {
            "3": "This is incorrect. The number of balls in each row is 3, not the number of rows.",
            "5": "This is incorrect. Dividing 18 by 3 gives 6, not 5.",
            "9": "This is incorrect. 18 divided by 3 equals 6, not 9."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch11_t2_qe7',
        type: "mcq",
        question: "A flower garden has 28 plants arranged in 7 equal rows. How many plants are in each row?",
        options: ["3", "4", "7", "21"],
        correctAnswer: "4",
        explanation: "To find plants in each row, divide total plants by number of rows: 28 ÷ 7 = 4 plants per row.",
        wrongAnswerExplanations: {
            "3": "This is incorrect. When we divide 28 by 7, we get 4, not 3.",
            "7": "This is incorrect. The number of rows is 7, but to find plants per row we divide: 28 ÷ 7 = 4.",
            "21": "This is incorrect. 28 divided by 7 equals 4, not 21."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch11_t2_qe8',
        type: "mcq",
        question: "What are the rows and columns called when objects are arranged in equal groups?",
        options: ["Lines and spaces", "Vertical and horizontal arrangements", "Addition and subtraction", "Multiplication and division"],
        correctAnswer: "Vertical and horizontal arrangements",
        explanation: "Rows are horizontal arrangements (from left to right) and columns are vertical arrangements (from top to bottom).",
        wrongAnswerExplanations: {
            "Lines and spaces": "These terms aren't typically used to describe rows and columns of objects.",
            "Addition and subtraction": "These are mathematical operations, not terms for arranging objects.",
            "Multiplication and division": "These are operations we use to calculate with rows and columns, not the arrangements themselves."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch11_t2_qe9',
        type: "mcq",
        question: "If 40 chairs are arranged in 8 equal columns, how many chairs are in each column?",
        options: ["5", "6", "8", "32"],
        correctAnswer: "5",
        explanation: "To find chairs in each column, divide total chairs by number of columns: 40 ÷ 8 = 5 chairs per column.",
        wrongAnswerExplanations: {
            "6": "This is incorrect. Dividing 40 by 8 gives 5, not 6.",
            "8": "This is incorrect. The number of columns is 8, but to find chairs per column: 40 ÷ 8 = 5.",
            "32": "This is incorrect. 40 divided by 8 equals 5, not 32."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch11_t2_qe10',
        type: "mcq",
        question: "What is the total number of stars ⭐ when arranged in 3 rows with 7 stars in each row?",
        options: ["10", "18", "21", "28"],
        correctAnswer: "21",
        explanation: "When we have 3 rows with 7 stars in each row, we multiply: 3 × 7 = 21 stars total.",
        wrongAnswerExplanations: {
            "10": "This is incorrect. We need to multiply rows by stars in each row: 3 × 7 = 21.",
            "18": "This is incorrect. 3 × 7 = 21, not 18.",
            "28": "This is incorrect. You might have calculated 4 × 7 = 28, but there are only 3 rows."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch11_t2_qe11',
        type: "mcq",
        question: "If you arrange 30 oranges 🍊 in 6 equal rows, how many oranges will be in each row?",
        options: ["5", "6", "10", "24"],
        correctAnswer: "5",
        explanation: "To find oranges in each row, divide total oranges by number of rows: 30 ÷ 6 = 5 oranges per row.",
        wrongAnswerExplanations: {
            "6": "This is incorrect. The number of rows is 6, but to find oranges per row: 30 ÷ 6 = 5.",
            "10": "This is incorrect. Dividing 30 by 6 gives 5, not 10.",
            "24": "This is incorrect. 30 divided by 6 equals 5, not 24."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch11_t2_qe12',
        type: "mcq",
        question: "A class of 36 students is arranged in 9 equal columns. How many students are in each column?",
        options: ["3", "4", "9", "27"],
        correctAnswer: "4",
        explanation: "To find students in each column, divide total students by number of columns: 36 ÷ 9 = 4 students per column.",
        wrongAnswerExplanations: {
            "3": "This is incorrect. When we divide 36 by 9, we get 4, not 3.",
            "9": "This is incorrect. The number of columns is 9, but to find students per column: 36 ÷ 9 = 4.",
            "27": "This is incorrect. 36 divided by 9 equals 4, not 27."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch11_t2_qe13',
        type: "mcq",
        question: "What mathematical operation do we use to find the total number of objects arranged in rows and columns?",
        options: ["Addition", "Subtraction", "Multiplication", "Division"],
        correctAnswer: "Multiplication",
        explanation: "To find the total number of objects, we multiply the number of rows by the number of objects in each row.",
        wrongAnswerExplanations: {
            "Addition": "Addition would be used if we were counting each row separately and then combining them, which is less efficient.",
            "Subtraction": "Subtraction isn't used to find the total number of objects in rows and columns.",
            "Division": "Division is used to find how many objects are in each row/column when total is known, not to find the total."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch11_t2_qe14',
        type: "mcq",
        question: "If 32 flowers 🌸 are arranged in 4 equal rows, how many flowers will be in each row?",
        options: ["4", "8", "12", "16"],
        correctAnswer: "8",
        explanation: "To find flowers in each row, divide total flowers by number of rows: 32 ÷ 4 = 8 flowers per row.",
        wrongAnswerExplanations: {
            "4": "This is incorrect. The number of rows is 4, but to find flowers per row: 32 ÷ 4 = 8.",
            "12": "This is incorrect. Dividing 32 by 4 gives 8, not 12.",
            "16": "This is incorrect. You might have calculated 4 × 4 = 16, but the correct calculation is 32 ÷ 4 = 8."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch11_t2_qe15',
        type: "mcq",
        question: "What is the total number of books 📚 when arranged in 6 rows with 5 books in each row?",
        options: ["11", "24", "30", "35"],
        correctAnswer: "30",
        explanation: "When we have 6 rows with 5 books in each row, we multiply: 6 × 5 = 30 books total.",
        wrongAnswerExplanations: {
            "11": "This is incorrect. We need to multiply rows by books in each row: 6 × 5 = 30, not 6 + 5 = 11.",
            "24": "This is incorrect. 6 × 5 = 30, not 24.",
            "35": "This is incorrect. You might have calculated 7 × 5 = 35, but there are only 6 rows."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch11_t2_qe16',
        type: "mcq",
        question: "If 27 toys are arranged in rows with 3 toys in each row, how many rows will there be?",
        options: ["3", "7", "9", "24"],
        correctAnswer: "9",
        explanation: "To find the number of rows, divide total toys by toys in each row: 27 ÷ 3 = 9 rows.",
        wrongAnswerExplanations: {
            "3": "This is incorrect. The number of toys in each row is 3, not the number of rows.",
            "7": "This is incorrect. Dividing 27 by 3 gives 9, not 7.",
            "24": "This is incorrect. 27 divided by 3 equals 9, not 24."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch11_t2_qe17',
        type: "mcq",
        question: "A garden has 24 trees planted in 4 equal rows. How many trees are in each row?",
        options: ["4", "6", "8", "20"],
        correctAnswer: "6",
        explanation: "To find trees in each row, divide total trees by number of rows: 24 ÷ 4 = 6 trees per row.",
        wrongAnswerExplanations: {
            "4": "This is incorrect. The number of rows is 4, but to find trees per row we divide: 24 ÷ 4 = 6.",
            "8": "This is incorrect. Dividing 24 by 4 gives 6, not 8.",
            "20": "This is incorrect. 24 divided by 4 equals 6, not 20."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch11_t2_qe18',
        type: "mcq",
        question: "What mathematical operation do we use to find how many objects are in each row when the total number of objects and number of rows are known?",
        options: ["Addition", "Subtraction", "Multiplication", "Division"],
        correctAnswer: "Division",
        explanation: "To find objects in each row, we divide the total number of objects by the number of rows.",
        wrongAnswerExplanations: {
            "Addition": "Addition isn't used to find how many objects are in each row.",
            "Subtraction": "Subtraction isn't used to find how many objects are in each row.",
            "Multiplication": "Multiplication is used to find the total when we know objects per row, not the other way around."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch11_t2_qe19',
        type: "mcq",
        question: "If 42 marbles are arranged in 7 equal columns, how many marbles are in each column?",
        options: ["6", "7", "35", "49"],
        correctAnswer: "6",
        explanation: "To find marbles in each column, divide total marbles by number of columns: 42 ÷ 7 = 6 marbles per column.",
        wrongAnswerExplanations: {
            "7": "This is incorrect. The number of columns is 7, but to find marbles per column: 42 ÷ 7 = 6.",
            "35": "This is incorrect. 42 divided by 7 equals 6, not 35.",
            "49": "This is incorrect. You might have calculated 7 × 7 = 49, but the correct calculation is 42 ÷ 7 = 6."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch11_t2_qe20',
        type: "mcq",
        question: "What is the total number of erasers when arranged in 5 rows with 6 erasers in each row?",
        options: ["11", "25", "30", "35"],
        correctAnswer: "30",
        explanation: "When we have 5 rows with 6 erasers in each row, we multiply: 5 × 6 = 30 erasers total.",
        wrongAnswerExplanations: {
            "11": "This is incorrect. We need to multiply rows by erasers in each row: 5 × 6 = 30, not 5 + 6 = 11.",
            "25": "This is incorrect. You might have calculated 5 × 5 = 25, but there are 6 erasers per row.",
            "35": "This is incorrect. 5 × 6 = 30, not 35."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    }
];
