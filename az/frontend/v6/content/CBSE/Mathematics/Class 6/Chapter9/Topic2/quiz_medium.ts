import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl6_ch9_t2_qm1',
        type: "mcq",
        question: "What is the mean of the numbers 12, 15, 18, 21?",
        options: ["16.5", "15", "18", "16"],
        correctAnswer: "16.5",
        explanation: "Mean = (12 + 15 + 18 + 21) ÷ 4 = 66 ÷ 4 = 16.5. 📊",
        wrongAnswerExplanations: {
            "15": "This is the second number, not the mean.",
            "18": "This is the third number, not the mean.",
            "16": "This is less than the correct mean."
        },
        difficulty: "medium",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch9_t2_qm2',
        type: "mcq",
        question: "What is the median of the numbers 8, 12, 15, 20, 25?",
        options: ["15", "12", "20", "16"],
        correctAnswer: "15",
        explanation: "The numbers are already in order. The middle number is 15. 📊",
        wrongAnswerExplanations: {
            "12": "This is the second number, not the median.",
            "20": "This is the fourth number, not the median.",
            "16": "This is not in the given numbers."
        },
        difficulty: "medium",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch9_t2_qm3',
        type: "mcq",
        question: "What is the mode of the numbers 4, 5, 4, 6, 5, 4, 7?",
        options: ["4", "5", "6", "No mode"],
        correctAnswer: "4",
        explanation: "4 appears three times, which is more than any other number. 📊",
        wrongAnswerExplanations: {
            "5": "This appears twice, not the most frequent.",
            "6": "This appears only once.",
            "No mode": "There is a mode in this set of numbers."
        },
        difficulty: "medium",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch9_t2_qm4',
        type: "mcq",
        question: "What is the mean of the numbers 25, 30, 35, 40, 45?",
        options: ["35", "30", "40", "33"],
        correctAnswer: "35",
        explanation: "Mean = (25 + 30 + 35 + 40 + 45) ÷ 5 = 175 ÷ 5 = 35. 📊",
        wrongAnswerExplanations: {
            "30": "This is the second number, not the mean.",
            "40": "This is the fourth number, not the mean.",
            "33": "This is less than the correct mean."
        },
        difficulty: "medium",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch9_t2_qm5',
        type: "mcq",
        question: "What is the median of the numbers 10, 15, 20, 25, 30, 35?",
        options: ["22.5", "20", "25", "22"],
        correctAnswer: "22.5",
        explanation: "Ordered numbers: 10, 15, 20, 25, 30, 35. Median = (20 + 25) ÷ 2 = 22.5. 📊",
        wrongAnswerExplanations: {
            "20": "This is the third number, not the median.",
            "25": "This is the fourth number, not the median.",
            "22": "This is less than the correct median."
        },
        difficulty: "medium",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch9_t2_qm6',
        type: "mcq",
        question: "What is the mode of the numbers 3, 4, 3, 5, 4, 3, 6, 4?",
        options: ["3 and 4", "3", "4", "No mode"],
        correctAnswer: "3 and 4",
        explanation: "Both 3 and 4 appear three times, which is more than any other number. 📊",
        wrongAnswerExplanations: {
            "3": "4 also appears three times.",
            "4": "3 also appears three times.",
            "No mode": "There are two modes in this set of numbers."
        },
        difficulty: "medium",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch9_t2_qm7',
        type: "mcq",
        question: "What is the mean of the numbers 50, 60, 70, 80, 90?",
        options: ["70", "60", "80", "65"],
        correctAnswer: "70",
        explanation: "Mean = (50 + 60 + 70 + 80 + 90) ÷ 5 = 350 ÷ 5 = 70. 📊",
        wrongAnswerExplanations: {
            "60": "This is the second number, not the mean.",
            "80": "This is the fourth number, not the mean.",
            "65": "This is less than the correct mean."
        },
        difficulty: "medium",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch9_t2_qm8',
        type: "mcq",
        question: "What is the median of the numbers 5, 10, 15, 20, 25, 30, 35?",
        options: ["20", "15", "25", "22.5"],
        correctAnswer: "20",
        explanation: "The numbers are in order. The middle number is 20. 📊",
        wrongAnswerExplanations: {
            "15": "This is the third number, not the median.",
            "25": "This is the fifth number, not the median.",
            "22.5": "This is not in the given numbers."
        },
        difficulty: "medium",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch9_t2_qm9',
        type: "mcq",
        question: "What is the mode of the numbers 2, 3, 2, 4, 3, 2, 5, 3, 2?",
        options: ["2", "3", "2 and 3", "No mode"],
        correctAnswer: "2",
        explanation: "2 appears four times, which is more than any other number. 📊",
        wrongAnswerExplanations: {
            "3": "3 appears three times, not the most frequent.",
            "2 and 3": "2 appears more frequently than 3.",
            "No mode": "There is a mode in this set of numbers."
        },
        difficulty: "medium",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch9_t2_qm10',
        type: "mcq",
        question: "What is the mean of the numbers 100, 200, 300, 400, 500?",
        options: ["300", "200", "400", "250"],
        correctAnswer: "300",
        explanation: "Mean = (100 + 200 + 300 + 400 + 500) ÷ 5 = 1500 ÷ 5 = 300. 📊",
        wrongAnswerExplanations: {
            "200": "This is the second number, not the mean.",
            "400": "This is the fourth number, not the mean.",
            "250": "This is less than the correct mean."
        },
        difficulty: "medium",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch9_t2_qm11',
        type: "mcq",
        question: "What is the median of the numbers 6, 12, 18, 24, 30, 36?",
        options: ["21", "18", "24", "20"],
        correctAnswer: "21",
        explanation: "Ordered numbers: 6, 12, 18, 24, 30, 36. Median = (18 + 24) ÷ 2 = 21. 📊",
        wrongAnswerExplanations: {
            "18": "This is the third number, not the median.",
            "24": "This is the fourth number, not the median.",
            "20": "This is less than the correct median."
        },
        difficulty: "medium",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch9_t2_qm12',
        type: "mcq",
        question: "What is the mode of the numbers 7, 8, 7, 9, 8, 7, 10, 8, 7?",
        options: ["7", "8", "7 and 8", "No mode"],
        correctAnswer: "7",
        explanation: "7 appears four times, which is more than any other number. 📊",
        wrongAnswerExplanations: {
            "8": "8 appears three times, not the most frequent.",
            "7 and 8": "7 appears more frequently than 8.",
            "No mode": "There is a mode in this set of numbers."
        },
        difficulty: "medium",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch9_t2_qm13',
        type: "mcq",
        question: "What is the mean of the numbers 150, 200, 250, 300, 350?",
        options: ["250", "200", "300", "225"],
        correctAnswer: "250",
        explanation: "Mean = (150 + 200 + 250 + 300 + 350) ÷ 5 = 1250 ÷ 5 = 250. 📊",
        wrongAnswerExplanations: {
            "200": "This is the second number, not the mean.",
            "300": "This is the fourth number, not the mean.",
            "225": "This is less than the correct mean."
        },
        difficulty: "medium",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch9_t2_qm14',
        type: "mcq",
        question: "What is the median of the numbers 8, 16, 24, 32, 40, 48?",
        options: ["28", "24", "32", "26"],
        correctAnswer: "28",
        explanation: "Ordered numbers: 8, 16, 24, 32, 40, 48. Median = (24 + 32) ÷ 2 = 28. 📊",
        wrongAnswerExplanations: {
            "24": "This is the third number, not the median.",
            "32": "This is the fourth number, not the median.",
            "26": "This is less than the correct median."
        },
        difficulty: "medium",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch9_t2_qm15',
        type: "mcq",
        question: "What is the mode of the numbers 9, 10, 9, 11, 10, 9, 12, 10, 9?",
        options: ["9", "10", "9 and 10", "No mode"],
        correctAnswer: "9",
        explanation: "9 appears four times, which is more than any other number. 📊",
        wrongAnswerExplanations: {
            "10": "10 appears three times, not the most frequent.",
            "9 and 10": "9 appears more frequently than 10.",
            "No mode": "There is a mode in this set of numbers."
        },
        difficulty: "medium",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch9_t2_qm16',
        type: "mcq",
        question: "What is the mean of the numbers 200, 250, 300, 350, 400?",
        options: ["300", "250", "350", "275"],
        correctAnswer: "300",
        explanation: "Mean = (200 + 250 + 300 + 350 + 400) ÷ 5 = 1500 ÷ 5 = 300. 📊",
        wrongAnswerExplanations: {
            "250": "This is the second number, not the mean.",
            "350": "This is the fourth number, not the mean.",
            "275": "This is less than the correct mean."
        },
        difficulty: "medium",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch9_t2_qm17',
        type: "mcq",
        question: "What is the median of the numbers 10, 20, 30, 40, 50, 60?",
        options: ["35", "30", "40", "32.5"],
        correctAnswer: "35",
        explanation: "Ordered numbers: 10, 20, 30, 40, 50, 60. Median = (30 + 40) ÷ 2 = 35. 📊",
        wrongAnswerExplanations: {
            "30": "This is the third number, not the median.",
            "40": "This is the fourth number, not the median.",
            "32.5": "This is less than the correct median."
        },
        difficulty: "medium",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch9_t2_qm18',
        type: "mcq",
        question: "What is the mode of the numbers 11, 12, 11, 13, 12, 11, 14, 12, 11?",
        options: ["11", "12", "11 and 12", "No mode"],
        correctAnswer: "11",
        explanation: "11 appears four times, which is more than any other number. 📊",
        wrongAnswerExplanations: {
            "12": "12 appears three times, not the most frequent.",
            "11 and 12": "11 appears more frequently than 12.",
            "No mode": "There is a mode in this set of numbers."
        },
        difficulty: "medium",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch9_t2_qm19',
        type: "mcq",
        question: "What is the mean of the numbers 250, 300, 350, 400, 450?",
        options: ["350", "300", "400", "325"],
        correctAnswer: "350",
        explanation: "Mean = (250 + 300 + 350 + 400 + 450) ÷ 5 = 1750 ÷ 5 = 350. 📊",
        wrongAnswerExplanations: {
            "300": "This is the second number, not the mean.",
            "400": "This is the fourth number, not the mean.",
            "325": "This is less than the correct mean."
        },
        difficulty: "medium",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch9_t2_qm20',
        type: "mcq",
        question: "What is the median of the numbers 12, 24, 36, 48, 60, 72?",
        options: ["42", "36", "48", "40"],
        correctAnswer: "42",
        explanation: "Ordered numbers: 12, 24, 36, 48, 60, 72. Median = (36 + 48) ÷ 2 = 42. 📊",
        wrongAnswerExplanations: {
            "36": "This is the third number, not the median.",
            "48": "This is the fourth number, not the median.",
            "40": "This is less than the correct median."
        },
        difficulty: "medium",
        marks: 1,
        recommendedTime: 45
    }
]; 