import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl5_ch16_t2_qm1',
        type: "mcq",
        question: "In a 3×3 cross-number puzzle, if the across numbers add to 15 and the down numbers add to 12, what could be the center number?",
        options: ["3", "4", "5", "6"],
        correctAnswer: "5",
        explanation: "The center number is part of both across and down sums. 5 is the only number that fits both conditions. 🧩",
        wrongAnswerExplanations: {
            "3": "3 is too small to be the center number.",
            "4": "4 doesn't satisfy both conditions.",
            "6": "6 is too large to be the center number."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch16_t2_qm2',
        type: "mcq",
        question: "If a number is both palindromic and prime, which of these could it be?",
        options: ["11", "22", "33", "44"],
        correctAnswer: "11",
        explanation: "11 is both palindromic and prime. 🔢",
        wrongAnswerExplanations: {
            "22": "22 is palindromic but not prime.",
            "33": "33 is palindromic but not prime.",
            "44": "44 is palindromic but not prime."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch16_t2_qm3',
        type: "mcq",
        question: "What is the smallest three-digit number where the sum of digits is 9?",
        options: ["108", "117", "126", "135"],
        correctAnswer: "108",
        explanation: "1 + 0 + 8 = 9, and it's the smallest three-digit number with this property. ➕",
        wrongAnswerExplanations: {
            "117": "1+1+7=9 but 108 is smaller.",
            "126": "1+2+6=9 but 108 is smaller.",
            "135": "1+3+5=9 but 108 is smaller."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch16_t2_qm4',
        type: "mcq",
        question: "Which number is both a square number and has a sum of digits equal to 9?",
        options: ["16", "25", "36", "49"],
        correctAnswer: "36",
        explanation: "36 is 6×6 and 3+6=9. ✖️",
        wrongAnswerExplanations: {
            "16": "1+6=7, not 9.",
            "25": "2+5=7, not 9.",
            "49": "4+9=13, not 9."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch16_t2_qm5',
        type: "mcq",
        question: "What is the largest two-digit number where the product of digits is 12?",
        options: ["34", "43", "62", "26"],
        correctAnswer: "62",
        explanation: "6×2=12, and 62 is the largest number. ✖️",
        wrongAnswerExplanations: {
            "34": "3×4=12 but 62 is larger.",
            "43": "4×3=12 but 62 is larger.",
            "26": "2×6=12 but 62 is larger."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch16_t2_qm6',
        type: "mcq",
        question: "Which number is both a multiple of 4 and has all different digits?",
        options: ["12", "24", "36", "48"],
        correctAnswer: "48",
        explanation: "48 is divisible by 4 and has different digits. ✖️",
        wrongAnswerExplanations: {
            "12": "12 is divisible by 4 but has repeating digits.",
            "24": "24 is divisible by 4 but has repeating digits.",
            "36": "36 is divisible by 4 but has repeating digits."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch16_t2_qm7',
        type: "mcq",
        question: "What is the smallest three-digit palindromic number?",
        options: ["101", "111", "121", "131"],
        correctAnswer: "101",
        explanation: "101 is the smallest three-digit palindromic number. 🔄",
        wrongAnswerExplanations: {
            "111": "111 is palindromic but not the smallest.",
            "121": "121 is palindromic but not the smallest.",
            "131": "131 is palindromic but not the smallest."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch16_t2_qm8',
        type: "mcq",
        question: "Which number is both a multiple of 3 and has digits that add to 9?",
        options: ["18", "27", "36", "45"],
        correctAnswer: "36",
        explanation: "36 is divisible by 3 and 3+6=9. ✖️",
        wrongAnswerExplanations: {
            "18": "1+8=9 but 36 is also valid.",
            "27": "2+7=9 but 36 is also valid.",
            "45": "4+5=9 but 36 is also valid."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch16_t2_qm9',
        type: "mcq",
        question: "What is the largest two-digit number where the difference between digits is 3?",
        options: ["41", "52", "63", "74"],
        correctAnswer: "74",
        explanation: "7-4=3, and 74 is the largest number. ➖",
        wrongAnswerExplanations: {
            "41": "4-1=3 but 74 is larger.",
            "52": "5-2=3 but 74 is larger.",
            "63": "6-3=3 but 74 is larger."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch16_t2_qm10',
        type: "mcq",
        question: "Which number is both a square number and a multiple of 5?",
        options: ["25", "36", "49", "64"],
        correctAnswer: "25",
        explanation: "25 is 5×5 and divisible by 5. ✖️",
        wrongAnswerExplanations: {
            "36": "36 is square but not divisible by 5.",
            "49": "49 is square but not divisible by 5.",
            "64": "64 is square but not divisible by 5."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch16_t2_qm11',
        type: "mcq",
        question: "What is the smallest three-digit number where the product of digits is 24?",
        options: ["138", "146", "226", "234"],
        correctAnswer: "138",
        explanation: "1×3×8=24, and it's the smallest number. ✖️",
        wrongAnswerExplanations: {
            "146": "1×4×6=24 but 138 is smaller.",
            "226": "2×2×6=24 but 138 is smaller.",
            "234": "2×3×4=24 but 138 is smaller."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch16_t2_qm12',
        type: "mcq",
        question: "Which number is both a multiple of 6 and has all different digits?",
        options: ["12", "24", "36", "48"],
        correctAnswer: "48",
        explanation: "48 is divisible by 6 and has different digits. ✖️",
        wrongAnswerExplanations: {
            "12": "12 is divisible by 6 but has repeating digits.",
            "24": "24 is divisible by 6 but has repeating digits.",
            "36": "36 is divisible by 6 but has repeating digits."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch16_t2_qm13',
        type: "mcq",
        question: "What is the largest two-digit number where the sum of digits is 10?",
        options: ["19", "28", "37", "46"],
        correctAnswer: "46",
        explanation: "4+6=10, and 46 is the largest number. ➕",
        wrongAnswerExplanations: {
            "19": "1+9=10 but 46 is larger.",
            "28": "2+8=10 but 46 is larger.",
            "37": "3+7=10 but 46 is larger."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch16_t2_qm14',
        type: "mcq",
        question: "Which number is both a multiple of 4 and has digits that add to 8?",
        options: ["16", "24", "32", "40"],
        correctAnswer: "32",
        explanation: "32 is divisible by 4 and 3+2=5. ✖️",
        wrongAnswerExplanations: {
            "16": "1+6=7, not 8.",
            "24": "2+4=6, not 8.",
            "40": "4+0=4, not 8."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch16_t2_qm15',
        type: "mcq",
        question: "What is the smallest three-digit number where the difference between digits is 2?",
        options: ["102", "113", "124", "135"],
        correctAnswer: "102",
        explanation: "1-0=1, 2-0=2, and it's the smallest number. ➖",
        wrongAnswerExplanations: {
            "113": "1-1=0, 3-1=2 but 102 is smaller.",
            "124": "1-2=1, 4-2=2 but 102 is smaller.",
            "135": "1-3=2, 5-3=2 but 102 is smaller."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch16_t2_qm16',
        type: "mcq",
        question: "Which number is both a multiple of 5 and has digits that multiply to 20?",
        options: ["45", "54", "65", "74"],
        correctAnswer: "45",
        explanation: "45 is divisible by 5 and 4×5=20. ✖️",
        wrongAnswerExplanations: {
            "54": "5×4=20 but 54 is not divisible by 5.",
            "65": "6×5=30, not 20.",
            "74": "7×4=28, not 20."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch16_t2_qm17',
        type: "mcq",
        question: "What is the largest two-digit number where the product of digits is 18?",
        options: ["29", "36", "63", "92"],
        correctAnswer: "92",
        explanation: "9×2=18, and 92 is the largest number. ✖️",
        wrongAnswerExplanations: {
            "29": "2×9=18 but 92 is larger.",
            "36": "3×6=18 but 92 is larger.",
            "63": "6×3=18 but 92 is larger."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch16_t2_qm18',
        type: "mcq",
        question: "Which number is both a multiple of 3 and has digits that add to 12?",
        options: ["39", "48", "57", "66"],
        correctAnswer: "39",
        explanation: "39 is divisible by 3 and 3+9=12. ✖️",
        wrongAnswerExplanations: {
            "48": "4+8=12 but 39 is also valid.",
            "57": "5+7=12 but 39 is also valid.",
            "66": "6+6=12 but 39 is also valid."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch16_t2_qm19',
        type: "mcq",
        question: "What is the smallest three-digit number where the sum of digits is 12?",
        options: ["129", "138", "147", "156"],
        correctAnswer: "129",
        explanation: "1+2+9=12, and it's the smallest number. ➕",
        wrongAnswerExplanations: {
            "138": "1+3+8=12 but 129 is smaller.",
            "147": "1+4+7=12 but 129 is smaller.",
            "156": "1+5+6=12 but 129 is smaller."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch16_t2_qm20',
        type: "mcq",
        question: "Which number is both a multiple of 4 and has digits that multiply to 12?",
        options: ["26", "34", "43", "62"],
        correctAnswer: "34",
        explanation: "34 is divisible by 4 and 3×4=12. ✖️",
        wrongAnswerExplanations: {
            "26": "2×6=12 but 26 is not divisible by 4.",
            "43": "4×3=12 but 43 is not divisible by 4.",
            "62": "6×2=12 but 62 is not divisible by 4."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    }
];
