import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl7_ch4_t3_qe1',
        type: "mcq",
        question: "If a number is increased by 5 and the result is 12, what is the number?",
        options: ["7", "8", "6", "9"],
        correctAnswer: "7",
        explanation: "Let the number be x. Then x + 5 = 12, so x = 7. 🧮",
        wrongAnswerExplanations: {
            "8": "8 + 5 = 13, not 12.",
            "6": "6 + 5 = 11, not 12.",
            "9": "9 + 5 = 14, not 12."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch4_t3_qe2',
        type: "mcq",
        question: "The sum of two consecutive numbers is 15. What are the numbers?",
        options: ["7 and 8", "6 and 9", "5 and 10", "4 and 11"],
        correctAnswer: "7 and 8",
        explanation: "Let numbers be x and x+1. Then x + (x+1) = 15, so x = 7. 🔢",
        wrongAnswerExplanations: {
            "6 and 9": "These are not consecutive numbers.",
            "5 and 10": "These are not consecutive numbers.",
            "4 and 11": "These are not consecutive numbers."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch4_t3_qe3',
        type: "mcq",
        question: "If you subtract 8 from a number and get 15, what is the number?",
        options: ["23", "22", "24", "21"],
        correctAnswer: "23",
        explanation: "Let the number be x. Then x - 8 = 15, so x = 23. ➖",
        wrongAnswerExplanations: {
            "22": "22 - 8 = 14, not 15.",
            "24": "24 - 8 = 16, not 15.",
            "21": "21 - 8 = 13, not 15."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch4_t3_qe4',
        type: "mcq",
        question: "A number multiplied by 3 gives 24. What is the number?",
        options: ["8", "7", "9", "6"],
        correctAnswer: "8",
        explanation: "Let the number be x. Then 3x = 24, so x = 8. ✖️",
        wrongAnswerExplanations: {
            "7": "7 × 3 = 21, not 24.",
            "9": "9 × 3 = 27, not 24.",
            "6": "6 × 3 = 18, not 24."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch4_t3_qe5',
        type: "mcq",
        question: "If you divide a number by 4 and get 5, what is the number?",
        options: ["20", "16", "24", "12"],
        correctAnswer: "20",
        explanation: "Let the number be x. Then x/4 = 5, so x = 20. ➗",
        wrongAnswerExplanations: {
            "16": "16 ÷ 4 = 4, not 5.",
            "24": "24 ÷ 4 = 6, not 5.",
            "12": "12 ÷ 4 = 3, not 5."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch4_t3_qe6',
        type: "mcq",
        question: "The sum of three consecutive even numbers is 30. What is the middle number?",
        options: ["10", "8", "12", "14"],
        correctAnswer: "10",
        explanation: "Let numbers be x-2, x, x+2. Then 3x = 30, so x = 10. 🔢",
        wrongAnswerExplanations: {
            "8": "8 is not the middle number.",
            "12": "12 is not the middle number.",
            "14": "14 is not the middle number."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch4_t3_qe7',
        type: "mcq",
        question: "If you add 7 to a number and then multiply by 2, you get 24. What is the number?",
        options: ["5", "6", "4", "7"],
        correctAnswer: "5",
        explanation: "Let the number be x. Then 2(x + 7) = 24, so x = 5. ➕✖️",
        wrongAnswerExplanations: {
            "6": "2(6 + 7) = 26, not 24.",
            "4": "2(4 + 7) = 22, not 24.",
            "7": "2(7 + 7) = 28, not 24."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch4_t3_qe8',
        type: "mcq",
        question: "A number when divided by 5 gives 4. What is the number?",
        options: ["20", "15", "25", "10"],
        correctAnswer: "20",
        explanation: "Let the number be x. Then x/5 = 4, so x = 20. ➗",
        wrongAnswerExplanations: {
            "15": "15 ÷ 5 = 3, not 4.",
            "25": "25 ÷ 5 = 5, not 4.",
            "10": "10 ÷ 5 = 2, not 4."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch4_t3_qe9',
        type: "mcq",
        question: "If you subtract 3 from a number and then multiply by 2, you get 14. What is the number?",
        options: ["10", "9", "11", "8"],
        correctAnswer: "10",
        explanation: "Let the number be x. Then 2(x - 3) = 14, so x = 10. ➖✖️",
        wrongAnswerExplanations: {
            "9": "2(9 - 3) = 12, not 14.",
            "11": "2(11 - 3) = 16, not 14.",
            "8": "2(8 - 3) = 10, not 14."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch4_t3_qe10',
        type: "mcq",
        question: "The sum of two numbers is 25 and their difference is 5. What is the larger number?",
        options: ["15", "10", "20", "5"],
        correctAnswer: "15",
        explanation: "Let numbers be x and y. x + y = 25, x - y = 5. Solving gives x = 15. ➕➖",
        wrongAnswerExplanations: {
            "10": "10 is not the larger number.",
            "20": "20 is too large.",
            "5": "5 is not the larger number."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch4_t3_qe11',
        type: "mcq",
        question: "If you multiply a number by 4 and subtract 5, you get 15. What is the number?",
        options: ["5", "4", "6", "3"],
        correctAnswer: "5",
        explanation: "Let the number be x. Then 4x - 5 = 15, so x = 5. ✖️➖",
        wrongAnswerExplanations: {
            "4": "4 × 4 - 5 = 11, not 15.",
            "6": "6 × 4 - 5 = 19, not 15.",
            "3": "3 × 4 - 5 = 7, not 15."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch4_t3_qe12',
        type: "mcq",
        question: "A number when added to its double gives 15. What is the number?",
        options: ["5", "6", "4", "7"],
        correctAnswer: "5",
        explanation: "Let the number be x. Then x + 2x = 15, so x = 5. ➕✖️",
        wrongAnswerExplanations: {
            "6": "6 + 12 = 18, not 15.",
            "4": "4 + 8 = 12, not 15.",
            "7": "7 + 14 = 21, not 15."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch4_t3_qe13',
        type: "mcq",
        question: "If you divide a number by 3 and add 4, you get 9. What is the number?",
        options: ["15", "12", "18", "9"],
        correctAnswer: "15",
        explanation: "Let the number be x. Then x/3 + 4 = 9, so x = 15. ➗➕",
        wrongAnswerExplanations: {
            "12": "12 ÷ 3 + 4 = 8, not 9.",
            "18": "18 ÷ 3 + 4 = 10, not 9.",
            "9": "9 ÷ 3 + 4 = 7, not 9."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch4_t3_qe14',
        type: "mcq",
        question: "The sum of three consecutive odd numbers is 27. What is the middle number?",
        options: ["9", "7", "11", "5"],
        correctAnswer: "9",
        explanation: "Let numbers be x-2, x, x+2. Then 3x = 27, so x = 9. 🔢",
        wrongAnswerExplanations: {
            "7": "7 is not the middle number.",
            "11": "11 is not the middle number.",
            "5": "5 is not the middle number."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch4_t3_qe15',
        type: "mcq",
        question: "If you multiply a number by 5 and add 10, you get 35. What is the number?",
        options: ["5", "6", "4", "7"],
        correctAnswer: "5",
        explanation: "Let the number be x. Then 5x + 10 = 35, so x = 5. ✖️➕",
        wrongAnswerExplanations: {
            "6": "5 × 6 + 10 = 40, not 35.",
            "4": "5 × 4 + 10 = 30, not 35.",
            "7": "5 × 7 + 10 = 45, not 35."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch4_t3_qe16',
        type: "mcq",
        question: "A number when subtracted from 20 gives 8. What is the number?",
        options: ["12", "10", "14", "16"],
        correctAnswer: "12",
        explanation: "Let the number be x. Then 20 - x = 8, so x = 12. ➖",
        wrongAnswerExplanations: {
            "10": "20 - 10 = 10, not 8.",
            "14": "20 - 14 = 6, not 8.",
            "16": "20 - 16 = 4, not 8."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch4_t3_qe17',
        type: "mcq",
        question: "If you add 6 to a number and then divide by 2, you get 8. What is the number?",
        options: ["10", "8", "12", "6"],
        correctAnswer: "10",
        explanation: "Let the number be x. Then (x + 6)/2 = 8, so x = 10. ➕➗",
        wrongAnswerExplanations: {
            "8": "(8 + 6)/2 = 7, not 8.",
            "12": "(12 + 6)/2 = 9, not 8.",
            "6": "(6 + 6)/2 = 6, not 8."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch4_t3_qe18',
        type: "mcq",
        question: "The sum of two numbers is 18 and their difference is 2. What is the smaller number?",
        options: ["8", "10", "6", "12"],
        correctAnswer: "8",
        explanation: "Let numbers be x and y. x + y = 18, x - y = 2. Solving gives y = 8. ➕➖",
        wrongAnswerExplanations: {
            "10": "10 is not the smaller number.",
            "6": "6 is too small.",
            "12": "12 is not the smaller number."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch4_t3_qe19',
        type: "mcq",
        question: "If you multiply a number by 3 and subtract 7, you get 11. What is the number?",
        options: ["6", "5", "7", "4"],
        correctAnswer: "6",
        explanation: "Let the number be x. Then 3x - 7 = 11, so x = 6. ✖️➖",
        wrongAnswerExplanations: {
            "5": "3 × 5 - 7 = 8, not 11.",
            "7": "3 × 7 - 7 = 14, not 11.",
            "4": "3 × 4 - 7 = 5, not 11."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch4_t3_qe20',
        type: "mcq",
        question: "A number when divided by 2 and then added to 10 gives 15. What is the number?",
        options: ["10", "8", "12", "6"],
        correctAnswer: "10",
        explanation: "Let the number be x. Then x/2 + 10 = 15, so x = 10. ➗➕",
        wrongAnswerExplanations: {
            "8": "8 ÷ 2 + 10 = 14, not 15.",
            "12": "12 ÷ 2 + 10 = 16, not 15.",
            "6": "6 ÷ 2 + 10 = 13, not 15."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    }
]; 