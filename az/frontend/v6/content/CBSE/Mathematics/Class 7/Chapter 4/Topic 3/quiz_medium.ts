import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl7_ch4_t3_qm1',
        type: "mcq",
        question: "A father is 3 times as old as his son. If the sum of their ages is 48 years, how old is the son?",
        options: ["12 years", "16 years", "14 years", "10 years"],
        correctAnswer: "12 years",
        explanation: "Let son's age be x. Then 3x + x = 48, so x = 12. 👨‍👦",
        wrongAnswerExplanations: {
            "16 years": "16 × 4 = 64, not 48.",
            "14 years": "14 × 4 = 56, not 48.",
            "10 years": "10 × 4 = 40, not 48."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch4_t3_qm2',
        type: "mcq",
        question: "The perimeter of a rectangle is 50 cm. If its length is 5 cm more than its width, what is its area?",
        options: ["150 cm²", "125 cm²", "175 cm²", "200 cm²"],
        correctAnswer: "150 cm²",
        explanation: "Let width be x. Then 2(x + x + 5) = 50, so x = 10. Area = 10 × 15 = 150 cm². 📐",
        wrongAnswerExplanations: {
            "125 cm²": "This is incorrect calculation.",
            "175 cm²": "This is incorrect calculation.",
            "200 cm²": "This is incorrect calculation."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch4_t3_qm3',
        type: "mcq",
        question: "A number is divided by 3 and then 5 is added to the result. If the final answer is 12, what is the original number?",
        options: ["21", "18", "24", "15"],
        correctAnswer: "21",
        explanation: "Let number be x. Then x/3 + 5 = 12, so x = 21. 🔢",
        wrongAnswerExplanations: {
            "18": "18 ÷ 3 + 5 = 11, not 12.",
            "24": "24 ÷ 3 + 5 = 13, not 12.",
            "15": "15 ÷ 3 + 5 = 10, not 12."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch4_t3_qm4',
        type: "mcq",
        question: "The sum of three consecutive multiples of 5 is 75. What is the largest number?",
        options: ["30", "25", "35", "20"],
        correctAnswer: "30",
        explanation: "Let numbers be x-5, x, x+5. Then 3x = 75, so x = 25. Largest is 30. 🔢",
        wrongAnswerExplanations: {
            "25": "25 is the middle number.",
            "35": "35 is too large.",
            "20": "20 is too small."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch4_t3_qm5',
        type: "mcq",
        question: "A train travels 300 km in 5 hours. What is its speed in km/h?",
        options: ["60 km/h", "50 km/h", "70 km/h", "40 km/h"],
        correctAnswer: "60 km/h",
        explanation: "Let speed be x. Then 5x = 300, so x = 60 km/h. 🚂",
        wrongAnswerExplanations: {
            "50 km/h": "50 × 5 = 250, not 300.",
            "70 km/h": "70 × 5 = 350, not 300.",
            "40 km/h": "40 × 5 = 200, not 300."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch4_t3_qm6',
        type: "mcq",
        question: "If you subtract 7 from a number and then multiply by 3, you get 24. What is the number?",
        options: ["15", "12", "18", "9"],
        correctAnswer: "15",
        explanation: "Let number be x. Then 3(x - 7) = 24, so x = 15. ➖✖️",
        wrongAnswerExplanations: {
            "12": "3(12 - 7) = 15, not 24.",
            "18": "3(18 - 7) = 33, not 24.",
            "9": "3(9 - 7) = 6, not 24."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch4_t3_qm7',
        type: "mcq",
        question: "The sum of two numbers is 35 and their difference is 5. What is the smaller number?",
        options: ["15", "20", "10", "25"],
        correctAnswer: "15",
        explanation: "Let numbers be x and y. x + y = 35, x - y = 5. Solving gives y = 15. ➕➖",
        wrongAnswerExplanations: {
            "20": "20 is not the smaller number.",
            "10": "10 is too small.",
            "25": "25 is not the smaller number."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch4_t3_qm8',
        type: "mcq",
        question: "A number when multiplied by 4 and then 6 is added gives 30. What is the number?",
        options: ["6", "5", "7", "4"],
        correctAnswer: "6",
        explanation: "Let number be x. Then 4x + 6 = 30, so x = 6. ✖️➕",
        wrongAnswerExplanations: {
            "5": "4 × 5 + 6 = 26, not 30.",
            "7": "4 × 7 + 6 = 34, not 30.",
            "4": "4 × 4 + 6 = 22, not 30."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch4_t3_qm9',
        type: "mcq",
        question: "The sum of three consecutive odd numbers is 45. What is the middle number?",
        options: ["15", "13", "17", "11"],
        correctAnswer: "15",
        explanation: "Let numbers be x-2, x, x+2. Then 3x = 45, so x = 15. 🔢",
        wrongAnswerExplanations: {
            "13": "13 is not the middle number.",
            "17": "17 is not the middle number.",
            "11": "11 is not the middle number."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch4_t3_qm10',
        type: "mcq",
        question: "If you divide a number by 5 and then subtract 3, you get 7. What is the number?",
        options: ["50", "40", "60", "30"],
        correctAnswer: "50",
        explanation: "Let number be x. Then x/5 - 3 = 7, so x = 50. ➗➖",
        wrongAnswerExplanations: {
            "40": "40 ÷ 5 - 3 = 5, not 7.",
            "60": "60 ÷ 5 - 3 = 9, not 7.",
            "30": "30 ÷ 5 - 3 = 3, not 7."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch4_t3_qm11',
        type: "mcq",
        question: "A rectangle's length is twice its width. If the perimeter is 60 cm, what is its area?",
        options: ["200 cm²", "150 cm²", "250 cm²", "300 cm²"],
        correctAnswer: "200 cm²",
        explanation: "Let width be x. Then 2(2x + x) = 60, so x = 10. Area = 10 × 20 = 200 cm². 📐",
        wrongAnswerExplanations: {
            "150 cm²": "This is incorrect calculation.",
            "250 cm²": "This is incorrect calculation.",
            "300 cm²": "This is incorrect calculation."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch4_t3_qm12',
        type: "mcq",
        question: "The sum of two numbers is 40 and their difference is 10. What is the larger number?",
        options: ["25", "20", "30", "15"],
        correctAnswer: "25",
        explanation: "Let numbers be x and y. x + y = 40, x - y = 10. Solving gives x = 25. ➕➖",
        wrongAnswerExplanations: {
            "20": "20 is not the larger number.",
            "30": "30 is too large.",
            "15": "15 is not the larger number."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch4_t3_qm13',
        type: "mcq",
        question: "If you add 8 to a number and then multiply by 2, you get 36. What is the number?",
        options: ["10", "8", "12", "6"],
        correctAnswer: "10",
        explanation: "Let number be x. Then 2(x + 8) = 36, so x = 10. ➕✖️",
        wrongAnswerExplanations: {
            "8": "2(8 + 8) = 32, not 36.",
            "12": "2(12 + 8) = 40, not 36.",
            "6": "2(6 + 8) = 28, not 36."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch4_t3_qm14',
        type: "mcq",
        question: "A number when divided by 4 and then 5 is added gives 10. What is the number?",
        options: ["20", "16", "24", "12"],
        correctAnswer: "20",
        explanation: "Let number be x. Then x/4 + 5 = 10, so x = 20. ➗➕",
        wrongAnswerExplanations: {
            "16": "16 ÷ 4 + 5 = 9, not 10.",
            "24": "24 ÷ 4 + 5 = 11, not 10.",
            "12": "12 ÷ 4 + 5 = 8, not 10."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch4_t3_qm15',
        type: "mcq",
        question: "The sum of three consecutive even numbers is 42. What is the smallest number?",
        options: ["12", "14", "10", "16"],
        correctAnswer: "12",
        explanation: "Let numbers be x, x+2, x+4. Then 3x + 6 = 42, so x = 12. 🔢",
        wrongAnswerExplanations: {
            "14": "14 is not the smallest number.",
            "10": "10 is too small.",
            "16": "16 is not the smallest number."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch4_t3_qm16',
        type: "mcq",
        question: "If you multiply a number by 3 and then subtract 8, you get 19. What is the number?",
        options: ["9", "8", "10", "7"],
        correctAnswer: "9",
        explanation: "Let number be x. Then 3x - 8 = 19, so x = 9. ✖️➖",
        wrongAnswerExplanations: {
            "8": "3 × 8 - 8 = 16, not 19.",
            "10": "3 × 10 - 8 = 22, not 19.",
            "7": "3 × 7 - 8 = 13, not 19."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch4_t3_qm17',
        type: "mcq",
        question: "A number when added to its triple gives 32. What is the number?",
        options: ["8", "6", "10", "4"],
        correctAnswer: "8",
        explanation: "Let number be x. Then x + 3x = 32, so x = 8. ➕✖️",
        wrongAnswerExplanations: {
            "6": "6 + 18 = 24, not 32.",
            "10": "10 + 30 = 40, not 32.",
            "4": "4 + 12 = 16, not 32."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch4_t3_qm18',
        type: "mcq",
        question: "If you subtract 5 from a number and then multiply by 4, you get 28. What is the number?",
        options: ["12", "10", "14", "8"],
        correctAnswer: "12",
        explanation: "Let number be x. Then 4(x - 5) = 28, so x = 12. ➖✖️",
        wrongAnswerExplanations: {
            "10": "4(10 - 5) = 20, not 28.",
            "14": "4(14 - 5) = 36, not 28.",
            "8": "4(8 - 5) = 12, not 28."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch4_t3_qm19',
        type: "mcq",
        question: "The sum of two numbers is 45 and their difference is 15. What is the smaller number?",
        options: ["15", "20", "10", "25"],
        correctAnswer: "15",
        explanation: "Let numbers be x and y. x + y = 45, x - y = 15. Solving gives y = 15. ➕➖",
        wrongAnswerExplanations: {
            "20": "20 is not the smaller number.",
            "10": "10 is too small.",
            "25": "25 is not the smaller number."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch4_t3_qm20',
        type: "mcq",
        question: "If you divide a number by 6 and then add 7, you get 12. What is the number?",
        options: ["30", "24", "36", "18"],
        correctAnswer: "30",
        explanation: "Let number be x. Then x/6 + 7 = 12, so x = 30. ➗➕",
        wrongAnswerExplanations: {
            "24": "24 ÷ 6 + 7 = 11, not 12.",
            "36": "36 ÷ 6 + 7 = 13, not 12.",
            "18": "18 ÷ 6 + 7 = 10, not 12."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    }
]; 