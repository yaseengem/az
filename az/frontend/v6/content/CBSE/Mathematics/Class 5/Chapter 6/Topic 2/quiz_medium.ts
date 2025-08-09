import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl5_ch6_t2_qm1',
        type: "mcq",
        question: "Which of these numbers is divisible by both 2 and 3?",
        options: ["123", "234", "345", "456"],
        correctAnswer: "234",
        explanation: "234 is divisible by 2 (last digit is even) and 3 (2 + 3 + 4 = 9, which is divisible by 3). 🔢",
        wrongAnswerExplanations: {
            "123": "123 is divisible by 3 but not by 2.",
            "345": "345 is divisible by 3 but not by 2.",
            "456": "456 is also divisible by both 2 and 3, but 234 is the smallest option."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch6_t2_qm2',
        type: "mcq",
        question: "Which number is divisible by both 5 and 10?",
        options: ["250", "255", "260", "265"],
        correctAnswer: "250",
        explanation: "250 is divisible by both 5 (last digit is 0) and 10 (last digit is 0). 🔢",
        wrongAnswerExplanations: {
            "255": "255 is divisible by 5 but not by 10.",
            "260": "260 is also divisible by both 5 and 10, but 250 is the smallest option.",
            "265": "265 is divisible by 5 but not by 10."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch6_t2_qm3',
        type: "mcq",
        question: "Which of these numbers is divisible by 3?",
        options: ["456", "457", "458", "459"],
        correctAnswer: "459",
        explanation: "459 is divisible by 3 because 4 + 5 + 9 = 18, and 18 is divisible by 3. 🔢",
        wrongAnswerExplanations: {
            "456": "456 is also divisible by 3, but 459 is the largest option.",
            "457": "457 is not divisible by 3 because 4 + 5 + 7 = 16.",
            "458": "458 is not divisible by 3 because 4 + 5 + 8 = 17."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch6_t2_qm4',
        type: "mcq",
        question: "Which number is divisible by 2?",
        options: ["567", "568", "569", "570"],
        correctAnswer: "568",
        explanation: "568 is divisible by 2 because its last digit (8) is even. 🔢",
        wrongAnswerExplanations: {
            "567": "567 is not divisible by 2 because its last digit (7) is odd.",
            "569": "569 is not divisible by 2 because its last digit (9) is odd.",
            "570": "570 is also divisible by 2, but 568 is the smallest option."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch6_t2_qm5',
        type: "mcq",
        question: "Which of these numbers is divisible by 5?",
        options: ["678", "679", "680", "681"],
        correctAnswer: "680",
        explanation: "680 is divisible by 5 because its last digit is 0. 🔢",
        wrongAnswerExplanations: {
            "678": "678 is not divisible by 5 because its last digit is not 0 or 5.",
            "679": "679 is not divisible by 5 because its last digit is not 0 or 5.",
            "681": "681 is not divisible by 5 because its last digit is not 0 or 5."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch6_t2_qm6',
        type: "mcq",
        question: "Which number is divisible by 10?",
        options: ["789", "790", "791", "792"],
        correctAnswer: "790",
        explanation: "790 is divisible by 10 because its last digit is 0. 🔢",
        wrongAnswerExplanations: {
            "789": "789 is not divisible by 10 because its last digit is not 0.",
            "791": "791 is not divisible by 10 because its last digit is not 0.",
            "792": "792 is not divisible by 10 because its last digit is not 0."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch6_t2_qm7',
        type: "mcq",
        question: "Which of these numbers is divisible by both 2 and 5?",
        options: ["890", "891", "892", "893"],
        correctAnswer: "890",
        explanation: "890 is divisible by both 2 (last digit is even) and 5 (last digit is 0). 🔢",
        wrongAnswerExplanations: {
            "891": "891 is not divisible by either 2 or 5.",
            "892": "892 is divisible by 2 but not by 5.",
            "893": "893 is not divisible by either 2 or 5."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch6_t2_qm8',
        type: "mcq",
        question: "Which number is divisible by 3?",
        options: ["901", "902", "903", "904"],
        correctAnswer: "903",
        explanation: "903 is divisible by 3 because 9 + 0 + 3 = 12, and 12 is divisible by 3. 🔢",
        wrongAnswerExplanations: {
            "901": "901 is not divisible by 3 because 9 + 0 + 1 = 10.",
            "902": "902 is not divisible by 3 because 9 + 0 + 2 = 11.",
            "904": "904 is not divisible by 3 because 9 + 0 + 4 = 13."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch6_t2_qm9',
        type: "mcq",
        question: "Which of these numbers is divisible by 2?",
        options: ["1234", "1235", "1236", "1237"],
        correctAnswer: "1236",
        explanation: "1236 is divisible by 2 because its last digit (6) is even. 🔢",
        wrongAnswerExplanations: {
            "1234": "1234 is also divisible by 2, but 1236 is the largest option.",
            "1235": "1235 is not divisible by 2 because its last digit (5) is odd.",
            "1237": "1237 is not divisible by 2 because its last digit (7) is odd."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch6_t2_qm10',
        type: "mcq",
        question: "Which number is divisible by 5?",
        options: ["2345", "2346", "2347", "2348"],
        correctAnswer: "2345",
        explanation: "2345 is divisible by 5 because its last digit is 5. 🔢",
        wrongAnswerExplanations: {
            "2346": "2346 is not divisible by 5 because its last digit is not 0 or 5.",
            "2347": "2347 is not divisible by 5 because its last digit is not 0 or 5.",
            "2348": "2348 is not divisible by 5 because its last digit is not 0 or 5."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch6_t2_qm11',
        type: "mcq",
        question: "Which of these numbers is divisible by 10?",
        options: ["3456", "3457", "3458", "3460"],
        correctAnswer: "3460",
        explanation: "3460 is divisible by 10 because its last digit is 0. 🔢",
        wrongAnswerExplanations: {
            "3456": "3456 is not divisible by 10 because its last digit is not 0.",
            "3457": "3457 is not divisible by 10 because its last digit is not 0.",
            "3458": "3458 is not divisible by 10 because its last digit is not 0."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch6_t2_qm12',
        type: "mcq",
        question: "Which number is divisible by both 3 and 5?",
        options: ["4560", "4561", "4562", "4563"],
        correctAnswer: "4560",
        explanation: "4560 is divisible by both 3 (4 + 5 + 6 + 0 = 15, which is divisible by 3) and 5 (last digit is 0). 🔢",
        wrongAnswerExplanations: {
            "4561": "4561 is not divisible by either 3 or 5.",
            "4562": "4562 is not divisible by either 3 or 5.",
            "4563": "4563 is divisible by 3 but not by 5."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch6_t2_qm13',
        type: "mcq",
        question: "Which of these numbers is divisible by 3?",
        options: ["5678", "5679", "5680", "5681"],
        correctAnswer: "5679",
        explanation: "5679 is divisible by 3 because 5 + 6 + 7 + 9 = 27, and 27 is divisible by 3. 🔢",
        wrongAnswerExplanations: {
            "5678": "5678 is not divisible by 3 because 5 + 6 + 7 + 8 = 26.",
            "5680": "5680 is not divisible by 3 because 5 + 6 + 8 + 0 = 19.",
            "5681": "5681 is not divisible by 3 because 5 + 6 + 8 + 1 = 20."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch6_t2_qm14',
        type: "mcq",
        question: "Which number is divisible by 2?",
        options: ["6789", "6790", "6791", "6792"],
        correctAnswer: "6790",
        explanation: "6790 is divisible by 2 because its last digit (0) is even. 🔢",
        wrongAnswerExplanations: {
            "6789": "6789 is not divisible by 2 because its last digit (9) is odd.",
            "6791": "6791 is not divisible by 2 because its last digit (1) is odd.",
            "6792": "6792 is also divisible by 2, but 6790 is the smallest option."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch6_t2_qm15',
        type: "mcq",
        question: "Which of these numbers is divisible by 5?",
        options: ["7890", "7891", "7892", "7893"],
        correctAnswer: "7890",
        explanation: "7890 is divisible by 5 because its last digit is 0. 🔢",
        wrongAnswerExplanations: {
            "7891": "7891 is not divisible by 5 because its last digit is not 0 or 5.",
            "7892": "7892 is not divisible by 5 because its last digit is not 0 or 5.",
            "7893": "7893 is not divisible by 5 because its last digit is not 0 or 5."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch6_t2_qm16',
        type: "mcq",
        question: "Which number is divisible by 10?",
        options: ["8901", "8902", "8903", "8910"],
        correctAnswer: "8910",
        explanation: "8910 is divisible by 10 because its last digit is 0. 🔢",
        wrongAnswerExplanations: {
            "8901": "8901 is not divisible by 10 because its last digit is not 0.",
            "8902": "8902 is not divisible by 10 because its last digit is not 0.",
            "8903": "8903 is not divisible by 10 because its last digit is not 0."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch6_t2_qm17',
        type: "mcq",
        question: "Which of these numbers is divisible by both 2 and 3?",
        options: ["9012", "9013", "9014", "9015"],
        correctAnswer: "9012",
        explanation: "9012 is divisible by both 2 (last digit is even) and 3 (9 + 0 + 1 + 2 = 12, which is divisible by 3). 🔢",
        wrongAnswerExplanations: {
            "9013": "9013 is not divisible by either 2 or 3.",
            "9014": "9014 is divisible by 2 but not by 3.",
            "9015": "9015 is divisible by 3 but not by 2."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch6_t2_qm18',
        type: "mcq",
        question: "Which number is divisible by both 5 and 10?",
        options: ["12340", "12341", "12342", "12343"],
        correctAnswer: "12340",
        explanation: "12340 is divisible by both 5 (last digit is 0) and 10 (last digit is 0). 🔢",
        wrongAnswerExplanations: {
            "12341": "12341 is not divisible by either 5 or 10.",
            "12342": "12342 is not divisible by either 5 or 10.",
            "12343": "12343 is not divisible by either 5 or 10."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch6_t2_qm19',
        type: "mcq",
        question: "Which of these numbers is divisible by 3?",
        options: ["23456", "23457", "23458", "23459"],
        correctAnswer: "23457",
        explanation: "23457 is divisible by 3 because 2 + 3 + 4 + 5 + 7 = 21, and 21 is divisible by 3. 🔢",
        wrongAnswerExplanations: {
            "23456": "23456 is not divisible by 3 because 2 + 3 + 4 + 5 + 6 = 20.",
            "23458": "23458 is not divisible by 3 because 2 + 3 + 4 + 5 + 8 = 22.",
            "23459": "23459 is not divisible by 3 because 2 + 3 + 4 + 5 + 9 = 23."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch6_t2_qm20',
        type: "mcq",
        question: "Which number is divisible by 2?",
        options: ["34567", "34568", "34569", "34570"],
        correctAnswer: "34568",
        explanation: "34568 is divisible by 2 because its last digit (8) is even. 🔢",
        wrongAnswerExplanations: {
            "34567": "34567 is not divisible by 2 because its last digit (7) is odd.",
            "34569": "34569 is not divisible by 2 because its last digit (9) is odd.",
            "34570": "34570 is also divisible by 2, but 34568 is the smallest option."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    }
]; 