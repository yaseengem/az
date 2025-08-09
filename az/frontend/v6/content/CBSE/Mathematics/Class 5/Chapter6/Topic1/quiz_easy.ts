import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl5_ch6_t1_qe1',
        type: "mcq",
        question: "Which of these numbers is a multiple of 3?",
        options: ["12", "14", "16", "17"],
        correctAnswer: "12",
        explanation: "12 is a multiple of 3 because 3 × 4 = 12. 🔢",
        wrongAnswerExplanations: {
            "14": "14 is not a multiple of 3 as it's not divisible by 3.",
            "16": "16 is not a multiple of 3 as it's not divisible by 3.",
            "17": "17 is not a multiple of 3 as it's not divisible by 3."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch6_t1_qe2',
        type: "mcq",
        question: "What are the factors of 15?",
        options: ["1, 3, 5, 15", "1, 2, 3, 5, 15", "1, 3, 5, 10, 15", "1, 5, 15"],
        correctAnswer: "1, 3, 5, 15",
        explanation: "15 can be divided by 1, 3, 5, and 15 without leaving a remainder. 🧮",
        wrongAnswerExplanations: {
            "1, 2, 3, 5, 15": "2 is not a factor of 15 as 15 ÷ 2 leaves a remainder.",
            "1, 3, 5, 10, 15": "10 is not a factor of 15 as 15 ÷ 10 leaves a remainder.",
            "1, 5, 15": "3 is also a factor of 15, so this list is incomplete."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch6_t1_qe3',
        type: "mcq",
        question: "Which number is a common multiple of 4 and 6?",
        options: ["12", "14", "16", "18"],
        correctAnswer: "12",
        explanation: "12 is divisible by both 4 and 6, making it a common multiple. 🔢",
        wrongAnswerExplanations: {
            "14": "14 is not divisible by 4 or 6.",
            "16": "16 is not divisible by 6.",
            "18": "18 is not divisible by 4."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch6_t1_qe4',
        type: "mcq",
        question: "What is the smallest prime number?",
        options: ["0", "1", "2", "3"],
        correctAnswer: "2",
        explanation: "2 is the smallest prime number as it has exactly two factors: 1 and itself. 🔢",
        wrongAnswerExplanations: {
            "0": "0 is not a prime number as it has infinite factors.",
            "1": "1 is not a prime number as it has only one factor.",
            "3": "3 is a prime number but not the smallest one."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch6_t1_qe5',
        type: "mcq",
        question: "Which of these numbers is a multiple of 5?",
        options: ["23", "25", "27", "29"],
        correctAnswer: "25",
        explanation: "25 is a multiple of 5 because 5 × 5 = 25. 🔢",
        wrongAnswerExplanations: {
            "23": "23 is not a multiple of 5 as it's not divisible by 5.",
            "27": "27 is not a multiple of 5 as it's not divisible by 5.",
            "29": "29 is not a multiple of 5 as it's not divisible by 5."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch6_t1_qe6',
        type: "mcq",
        question: "What is the greatest common factor of 12 and 18?",
        options: ["2", "3", "6", "9"],
        correctAnswer: "6",
        explanation: "6 is the largest number that divides both 12 and 18 without remainder. 🔢",
        wrongAnswerExplanations: {
            "2": "2 is a common factor but not the greatest one.",
            "3": "3 is a common factor but not the greatest one.",
            "9": "9 is not a factor of 12."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch6_t1_qe7',
        type: "mcq",
        question: "Which of these numbers is a composite number?",
        options: ["7", "9", "11", "13"],
        correctAnswer: "9",
        explanation: "9 is a composite number as it has more than two factors (1, 3, 9). 🔢",
        wrongAnswerExplanations: {
            "7": "7 is a prime number with only two factors.",
            "11": "11 is a prime number with only two factors.",
            "13": "13 is a prime number with only two factors."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch6_t1_qe8',
        type: "mcq",
        question: "What is the least common multiple of 4 and 5?",
        options: ["10", "15", "20", "25"],
        correctAnswer: "20",
        explanation: "20 is the smallest number that is a multiple of both 4 and 5. 🔢",
        wrongAnswerExplanations: {
            "10": "10 is not a multiple of 4.",
            "15": "15 is not a multiple of 4.",
            "25": "25 is not a multiple of 4."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch6_t1_qe9',
        type: "mcq",
        question: "Which of these numbers is a factor of 24?",
        options: ["5", "7", "8", "9"],
        correctAnswer: "8",
        explanation: "8 is a factor of 24 because 24 ÷ 8 = 3 with no remainder. 🔢",
        wrongAnswerExplanations: {
            "5": "5 is not a factor of 24 as 24 ÷ 5 leaves a remainder.",
            "7": "7 is not a factor of 24 as 24 ÷ 7 leaves a remainder.",
            "9": "9 is not a factor of 24 as 24 ÷ 9 leaves a remainder."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch6_t1_qe10',
        type: "mcq",
        question: "What is the sum of the first three multiples of 4?",
        options: ["12", "24", "36", "48"],
        correctAnswer: "24",
        explanation: "First three multiples of 4 are 4, 8, and 12. Their sum is 24. 🔢",
        wrongAnswerExplanations: {
            "12": "This is just the first multiple of 4.",
            "36": "This is the sum of the first four multiples of 4.",
            "48": "This is the sum of the first five multiples of 4."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch6_t1_qe11',
        type: "mcq",
        question: "Which of these numbers is a multiple of both 2 and 3?",
        options: ["8", "12", "14", "16"],
        correctAnswer: "12",
        explanation: "12 is divisible by both 2 and 3, making it a common multiple. 🔢",
        wrongAnswerExplanations: {
            "8": "8 is not divisible by 3.",
            "14": "14 is not divisible by 3.",
            "16": "16 is not divisible by 3."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch6_t1_qe12',
        type: "mcq",
        question: "What is the smallest composite number?",
        options: ["1", "2", "4", "6"],
        correctAnswer: "4",
        explanation: "4 is the smallest composite number as it has more than two factors (1, 2, 4). 🔢",
        wrongAnswerExplanations: {
            "1": "1 is neither prime nor composite.",
            "2": "2 is a prime number.",
            "6": "6 is a composite number but not the smallest one."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch6_t1_qe13',
        type: "mcq",
        question: "Which of these numbers is a multiple of 7?",
        options: ["28", "30", "32", "34"],
        correctAnswer: "28",
        explanation: "28 is a multiple of 7 because 7 × 4 = 28. 🔢",
        wrongAnswerExplanations: {
            "30": "30 is not a multiple of 7 as it's not divisible by 7.",
            "32": "32 is not a multiple of 7 as it's not divisible by 7.",
            "34": "34 is not a multiple of 7 as it's not divisible by 7."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch6_t1_qe14',
        type: "mcq",
        question: "What is the greatest common factor of 15 and 20?",
        options: ["1", "3", "5", "10"],
        correctAnswer: "5",
        explanation: "5 is the largest number that divides both 15 and 20 without remainder. 🔢",
        wrongAnswerExplanations: {
            "1": "1 is a common factor but not the greatest one.",
            "3": "3 is not a factor of 20.",
            "10": "10 is not a factor of 15."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch6_t1_qe15',
        type: "mcq",
        question: "Which of these numbers is a prime number?",
        options: ["21", "23", "25", "27"],
        correctAnswer: "23",
        explanation: "23 is a prime number as it has exactly two factors: 1 and itself. 🔢",
        wrongAnswerExplanations: {
            "21": "21 is a composite number with factors 1, 3, 7, 21.",
            "25": "25 is a composite number with factors 1, 5, 25.",
            "27": "27 is a composite number with factors 1, 3, 9, 27."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch6_t1_qe16',
        type: "mcq",
        question: "What is the least common multiple of 6 and 8?",
        options: ["12", "16", "24", "32"],
        correctAnswer: "24",
        explanation: "24 is the smallest number that is a multiple of both 6 and 8. 🔢",
        wrongAnswerExplanations: {
            "12": "12 is not a multiple of 8.",
            "16": "16 is not a multiple of 6.",
            "32": "32 is not the least common multiple."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch6_t1_qe17',
        type: "mcq",
        question: "Which of these numbers is a factor of 36?",
        options: ["7", "8", "9", "10"],
        correctAnswer: "9",
        explanation: "9 is a factor of 36 because 36 ÷ 9 = 4 with no remainder. 🔢",
        wrongAnswerExplanations: {
            "7": "7 is not a factor of 36 as 36 ÷ 7 leaves a remainder.",
            "8": "8 is not a factor of 36 as 36 ÷ 8 leaves a remainder.",
            "10": "10 is not a factor of 36 as 36 ÷ 10 leaves a remainder."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch6_t1_qe18',
        type: "mcq",
        question: "What is the sum of the first four multiples of 5?",
        options: ["20", "30", "50", "60"],
        correctAnswer: "50",
        explanation: "First four multiples of 5 are 5, 10, 15, and 20. Their sum is 50. 🔢",
        wrongAnswerExplanations: {
            "20": "This is just the first four multiples added incorrectly.",
            "30": "This is the sum of the first three multiples of 5.",
            "60": "This is the sum of the first five multiples of 5."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch6_t1_qe19',
        type: "mcq",
        question: "Which of these numbers is a multiple of both 3 and 4?",
        options: ["12", "14", "16", "18"],
        correctAnswer: "12",
        explanation: "12 is divisible by both 3 and 4, making it a common multiple. 🔢",
        wrongAnswerExplanations: {
            "14": "14 is not divisible by 3 or 4.",
            "16": "16 is not divisible by 3.",
            "18": "18 is not divisible by 4."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch6_t1_qe20',
        type: "mcq",
        question: "What is the greatest common factor of 24 and 36?",
        options: ["6", "8", "12", "18"],
        correctAnswer: "12",
        explanation: "12 is the largest number that divides both 24 and 36 without remainder. 🔢",
        wrongAnswerExplanations: {
            "6": "6 is a common factor but not the greatest one.",
            "8": "8 is not a factor of 36.",
            "18": "18 is not a factor of 24."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    }
]; 