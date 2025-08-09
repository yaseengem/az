import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl5_ch6_t2_qe1',
        type: "mcq",
        question: "Which of these numbers is divisible by 2?",
        options: ["23", "34", "45", "57"],
        correctAnswer: "34",
        explanation: "34 is divisible by 2 because its last digit (4) is even. 🔢",
        wrongAnswerExplanations: {
            "23": "23 is not divisible by 2 because its last digit (3) is odd.",
            "45": "45 is not divisible by 2 because its last digit (5) is odd.",
            "57": "57 is not divisible by 2 because its last digit (7) is odd."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch6_t2_qe2',
        type: "mcq",
        question: "Which number is divisible by 5?",
        options: ["32", "43", "55", "67"],
        correctAnswer: "55",
        explanation: "55 is divisible by 5 because its last digit is 5. 🔢",
        wrongAnswerExplanations: {
            "32": "32 is not divisible by 5 because its last digit is not 0 or 5.",
            "43": "43 is not divisible by 5 because its last digit is not 0 or 5.",
            "67": "67 is not divisible by 5 because its last digit is not 0 or 5."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch6_t2_qe3',
        type: "mcq",
        question: "Which of these numbers is divisible by 3?",
        options: ["14", "21", "25", "28"],
        correctAnswer: "21",
        explanation: "21 is divisible by 3 because 2 + 1 = 3, and 3 is divisible by 3. 🔢",
        wrongAnswerExplanations: {
            "14": "14 is not divisible by 3 because 1 + 4 = 5, and 5 is not divisible by 3.",
            "25": "25 is not divisible by 3 because 2 + 5 = 7, and 7 is not divisible by 3.",
            "28": "28 is not divisible by 3 because 2 + 8 = 10, and 10 is not divisible by 3."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch6_t2_qe4',
        type: "mcq",
        question: "Which number is divisible by 10?",
        options: ["25", "30", "35", "45"],
        correctAnswer: "30",
        explanation: "30 is divisible by 10 because its last digit is 0. 🔢",
        wrongAnswerExplanations: {
            "25": "25 is not divisible by 10 because its last digit is not 0.",
            "35": "35 is not divisible by 10 because its last digit is not 0.",
            "45": "45 is not divisible by 10 because its last digit is not 0."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch6_t2_qe5',
        type: "mcq",
        question: "Which of these numbers is divisible by both 2 and 3?",
        options: ["12", "14", "16", "18"],
        correctAnswer: "12",
        explanation: "12 is divisible by 2 (last digit is even) and 3 (1 + 2 = 3, which is divisible by 3). 🔢",
        wrongAnswerExplanations: {
            "14": "14 is divisible by 2 but not by 3 (1 + 4 = 5).",
            "16": "16 is divisible by 2 but not by 3 (1 + 6 = 7).",
            "18": "18 is also divisible by both 2 and 3, but 12 is the smallest option."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch6_t2_qe6',
        type: "mcq",
        question: "Which number is divisible by both 5 and 10?",
        options: ["15", "20", "25", "30"],
        correctAnswer: "20",
        explanation: "20 is divisible by both 5 (last digit is 0) and 10 (last digit is 0). 🔢",
        wrongAnswerExplanations: {
            "15": "15 is divisible by 5 but not by 10.",
            "25": "25 is divisible by 5 but not by 10.",
            "30": "30 is also divisible by both 5 and 10, but 20 is the smallest option."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch6_t2_qe7',
        type: "mcq",
        question: "Which of these numbers is divisible by 3?",
        options: ["123", "124", "125", "127"],
        correctAnswer: "123",
        explanation: "123 is divisible by 3 because 1 + 2 + 3 = 6, and 6 is divisible by 3. 🔢",
        wrongAnswerExplanations: {
            "124": "124 is not divisible by 3 because 1 + 2 + 4 = 7.",
            "125": "125 is not divisible by 3 because 1 + 2 + 5 = 8.",
            "127": "127 is not divisible by 3 because 1 + 2 + 7 = 10."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch6_t2_qe8',
        type: "mcq",
        question: "Which number is divisible by 2?",
        options: ["111", "222", "333", "555"],
        correctAnswer: "222",
        explanation: "222 is divisible by 2 because its last digit (2) is even. 🔢",
        wrongAnswerExplanations: {
            "111": "111 is not divisible by 2 because its last digit (1) is odd.",
            "333": "333 is not divisible by 2 because its last digit (3) is odd.",
            "555": "555 is not divisible by 2 because its last digit (5) is odd."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch6_t2_qe9',
        type: "mcq",
        question: "Which of these numbers is divisible by 5?",
        options: ["100", "101", "102", "103"],
        correctAnswer: "100",
        explanation: "100 is divisible by 5 because its last digit is 0. 🔢",
        wrongAnswerExplanations: {
            "101": "101 is not divisible by 5 because its last digit is not 0 or 5.",
            "102": "102 is not divisible by 5 because its last digit is not 0 or 5.",
            "103": "103 is not divisible by 5 because its last digit is not 0 or 5."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch6_t2_qe10',
        type: "mcq",
        question: "Which number is divisible by 10?",
        options: ["50", "55", "60", "65"],
        correctAnswer: "50",
        explanation: "50 is divisible by 10 because its last digit is 0. 🔢",
        wrongAnswerExplanations: {
            "55": "55 is not divisible by 10 because its last digit is not 0.",
            "60": "60 is also divisible by 10, but 50 is the smallest option.",
            "65": "65 is not divisible by 10 because its last digit is not 0."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch6_t2_qe11',
        type: "mcq",
        question: "Which of these numbers is divisible by both 2 and 5?",
        options: ["20", "25", "30", "35"],
        correctAnswer: "20",
        explanation: "20 is divisible by both 2 (last digit is even) and 5 (last digit is 0). 🔢",
        wrongAnswerExplanations: {
            "25": "25 is divisible by 5 but not by 2.",
            "30": "30 is also divisible by both 2 and 5, but 20 is the smallest option.",
            "35": "35 is divisible by 5 but not by 2."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch6_t2_qe12',
        type: "mcq",
        question: "Which number is divisible by 3?",
        options: ["234", "235", "236", "237"],
        correctAnswer: "234",
        explanation: "234 is divisible by 3 because 2 + 3 + 4 = 9, and 9 is divisible by 3. 🔢",
        wrongAnswerExplanations: {
            "235": "235 is not divisible by 3 because 2 + 3 + 5 = 10.",
            "236": "236 is not divisible by 3 because 2 + 3 + 6 = 11.",
            "237": "237 is also divisible by 3, but 234 is the smallest option."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch6_t2_qe13',
        type: "mcq",
        question: "Which of these numbers is divisible by 2?",
        options: ["345", "346", "347", "348"],
        correctAnswer: "346",
        explanation: "346 is divisible by 2 because its last digit (6) is even. 🔢",
        wrongAnswerExplanations: {
            "345": "345 is not divisible by 2 because its last digit (5) is odd.",
            "347": "347 is not divisible by 2 because its last digit (7) is odd.",
            "348": "348 is also divisible by 2, but 346 is the smallest option."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch6_t2_qe14',
        type: "mcq",
        question: "Which number is divisible by 5?",
        options: ["450", "451", "452", "453"],
        correctAnswer: "450",
        explanation: "450 is divisible by 5 because its last digit is 0. 🔢",
        wrongAnswerExplanations: {
            "451": "451 is not divisible by 5 because its last digit is not 0 or 5.",
            "452": "452 is not divisible by 5 because its last digit is not 0 or 5.",
            "453": "453 is not divisible by 5 because its last digit is not 0 or 5."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch6_t2_qe15',
        type: "mcq",
        question: "Which of these numbers is divisible by 10?",
        options: ["100", "105", "110", "115"],
        correctAnswer: "100",
        explanation: "100 is divisible by 10 because its last digit is 0. 🔢",
        wrongAnswerExplanations: {
            "105": "105 is not divisible by 10 because its last digit is not 0.",
            "110": "110 is also divisible by 10, but 100 is the smallest option.",
            "115": "115 is not divisible by 10 because its last digit is not 0."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch6_t2_qe16',
        type: "mcq",
        question: "Which number is divisible by both 3 and 5?",
        options: ["15", "20", "25", "30"],
        correctAnswer: "15",
        explanation: "15 is divisible by both 3 (1 + 5 = 6, which is divisible by 3) and 5 (last digit is 5). 🔢",
        wrongAnswerExplanations: {
            "20": "20 is divisible by 5 but not by 3.",
            "25": "25 is divisible by 5 but not by 3.",
            "30": "30 is also divisible by both 3 and 5, but 15 is the smallest option."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch6_t2_qe17',
        type: "mcq",
        question: "Which of these numbers is divisible by 3?",
        options: ["567", "568", "569", "570"],
        correctAnswer: "567",
        explanation: "567 is divisible by 3 because 5 + 6 + 7 = 18, and 18 is divisible by 3. 🔢",
        wrongAnswerExplanations: {
            "568": "568 is not divisible by 3 because 5 + 6 + 8 = 19.",
            "569": "569 is not divisible by 3 because 5 + 6 + 9 = 20.",
            "570": "570 is also divisible by 3, but 567 is the smallest option."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch6_t2_qe18',
        type: "mcq",
        question: "Which number is divisible by 2?",
        options: ["678", "679", "680", "681"],
        correctAnswer: "678",
        explanation: "678 is divisible by 2 because its last digit (8) is even. 🔢",
        wrongAnswerExplanations: {
            "679": "679 is not divisible by 2 because its last digit (9) is odd.",
            "680": "680 is also divisible by 2, but 678 is the smallest option.",
            "681": "681 is not divisible by 2 because its last digit (1) is odd."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch6_t2_qe19',
        type: "mcq",
        question: "Which of these numbers is divisible by 5?",
        options: ["700", "701", "702", "703"],
        correctAnswer: "700",
        explanation: "700 is divisible by 5 because its last digit is 0. 🔢",
        wrongAnswerExplanations: {
            "701": "701 is not divisible by 5 because its last digit is not 0 or 5.",
            "702": "702 is not divisible by 5 because its last digit is not 0 or 5.",
            "703": "703 is not divisible by 5 because its last digit is not 0 or 5."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch6_t2_qe20',
        type: "mcq",
        question: "Which number is divisible by 10?",
        options: ["800", "805", "810", "815"],
        correctAnswer: "800",
        explanation: "800 is divisible by 10 because its last digit is 0. 🔢",
        wrongAnswerExplanations: {
            "805": "805 is not divisible by 10 because its last digit is not 0.",
            "810": "810 is also divisible by 10, but 800 is the smallest option.",
            "815": "815 is not divisible by 10 because its last digit is not 0."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    }
]; 