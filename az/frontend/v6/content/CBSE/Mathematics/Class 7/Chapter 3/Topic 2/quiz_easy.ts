import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl7_ch3_t2_qe1',
        type: "mcq",
        question: "What is the mean of the numbers 2, 4, 6, 8, 10?",
        options: ["5", "6", "7", "8"],
        correctAnswer: "6",
        explanation: "Mean = (2 + 4 + 6 + 8 + 10) ÷ 5 = 30 ÷ 5 = 6. 📊",
        wrongAnswerExplanations: {
            "5": "This is incorrect calculation.",
            "7": "This is incorrect calculation.",
            "8": "This is incorrect calculation."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch3_t2_qe2',
        type: "mcq",
        question: "What is the median of the numbers 3, 1, 5, 7, 9?",
        options: ["3", "5", "7", "9"],
        correctAnswer: "5",
        explanation: "When arranged in order: 1, 3, 5, 7, 9. The middle number is 5. 📏",
        wrongAnswerExplanations: {
            "3": "This is not the middle number when arranged in order.",
            "7": "This is not the middle number when arranged in order.",
            "9": "This is not the middle number when arranged in order."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch3_t2_qe3',
        type: "mcq",
        question: "What is the mode of the numbers 2, 3, 4, 4, 5, 4, 6?",
        options: ["2", "3", "4", "5"],
        correctAnswer: "4",
        explanation: "4 appears most often (3 times) in the set. 🎯",
        wrongAnswerExplanations: {
            "2": "This number appears only once.",
            "3": "This number appears only once.",
            "5": "This number appears only once."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch3_t2_qe4',
        type: "mcq",
        question: "Which measure of central tendency is calculated by adding all numbers and dividing by the count?",
        options: ["Mean", "Median", "Mode", "Range"],
        correctAnswer: "Mean",
        explanation: "Mean is calculated by adding all numbers and dividing by how many numbers there are. 📝",
        wrongAnswerExplanations: {
            "Median": "Median is the middle number when arranged in order.",
            "Mode": "Mode is the most frequent number.",
            "Range": "Range is the difference between highest and lowest numbers."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch3_t2_qe5',
        type: "mcq",
        question: "What is the mean of 10, 20, 30?",
        options: ["15", "20", "25", "30"],
        correctAnswer: "20",
        explanation: "Mean = (10 + 20 + 30) ÷ 3 = 60 ÷ 3 = 20. 📊",
        wrongAnswerExplanations: {
            "15": "This is incorrect calculation.",
            "25": "This is incorrect calculation.",
            "30": "This is incorrect calculation."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch3_t2_qe6',
        type: "mcq",
        question: "What is the median of 2, 4, 6, 8?",
        options: ["4", "5", "6", "7"],
        correctAnswer: "5",
        explanation: "When arranged: 2, 4, 6, 8. The two middle numbers are 4 and 6. Median = (4 + 6) ÷ 2 = 5. 📏",
        wrongAnswerExplanations: {
            "4": "This is only one of the middle numbers.",
            "6": "This is only one of the middle numbers.",
            "7": "This is incorrect calculation."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch3_t2_qe7',
        type: "mcq",
        question: "What is the mode of 1, 2, 2, 3, 3, 3, 4?",
        options: ["1", "2", "3", "4"],
        correctAnswer: "3",
        explanation: "3 appears most often (3 times) in the set. 🎯",
        wrongAnswerExplanations: {
            "1": "This number appears only once.",
            "2": "This number appears only twice.",
            "4": "This number appears only once."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch3_t2_qe8',
        type: "mcq",
        question: "Which measure is best for finding the most common shoe size?",
        options: ["Mean", "Median", "Mode", "Range"],
        correctAnswer: "Mode",
        explanation: "Mode is best for finding the most common or frequent value. 👟",
        wrongAnswerExplanations: {
            "Mean": "Mean would give an average that might not exist as a size.",
            "Median": "Median would give the middle size, not the most common.",
            "Range": "Range shows the spread, not the most common size."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch3_t2_qe9',
        type: "mcq",
        question: "What is the mean of 5, 10, 15, 20?",
        options: ["10", "12.5", "15", "17.5"],
        correctAnswer: "12.5",
        explanation: "Mean = (5 + 10 + 15 + 20) ÷ 4 = 50 ÷ 4 = 12.5. 📊",
        wrongAnswerExplanations: {
            "10": "This is incorrect calculation.",
            "15": "This is incorrect calculation.",
            "17.5": "This is incorrect calculation."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch3_t2_qe10',
        type: "mcq",
        question: "What is the median of 1, 3, 5, 7, 9, 11?",
        options: ["5", "6", "7", "8"],
        correctAnswer: "6",
        explanation: "When arranged: 1, 3, 5, 7, 9, 11. The two middle numbers are 5 and 7. Median = (5 + 7) ÷ 2 = 6. 📏",
        wrongAnswerExplanations: {
            "5": "This is only one of the middle numbers.",
            "7": "This is only one of the middle numbers.",
            "8": "This is incorrect calculation."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch3_t2_qe11',
        type: "mcq",
        question: "What is the mode of 2, 2, 3, 4, 4, 4, 5, 5?",
        options: ["2", "3", "4", "5"],
        correctAnswer: "4",
        explanation: "4 appears most often (3 times) in the set. 🎯",
        wrongAnswerExplanations: {
            "2": "This number appears only twice.",
            "3": "This number appears only once.",
            "5": "This number appears only twice."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch3_t2_qe12',
        type: "mcq",
        question: "Which measure is best for finding the average height of students?",
        options: ["Mean", "Median", "Mode", "Range"],
        correctAnswer: "Mean",
        explanation: "Mean is best for finding the average when there are no extreme values. 📏",
        wrongAnswerExplanations: {
            "Median": "Median would give the middle height, not the average.",
            "Mode": "Mode would give the most common height, not the average.",
            "Range": "Range shows the spread, not the average."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch3_t2_qe13',
        type: "mcq",
        question: "What is the mean of 12, 15, 18, 21?",
        options: ["15", "16.5", "18", "19.5"],
        correctAnswer: "16.5",
        explanation: "Mean = (12 + 15 + 18 + 21) ÷ 4 = 66 ÷ 4 = 16.5. 📊",
        wrongAnswerExplanations: {
            "15": "This is incorrect calculation.",
            "18": "This is incorrect calculation.",
            "19.5": "This is incorrect calculation."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch3_t2_qe14',
        type: "mcq",
        question: "What is the median of 4, 8, 12, 16, 20?",
        options: ["8", "12", "16", "20"],
        correctAnswer: "12",
        explanation: "When arranged: 4, 8, 12, 16, 20. The middle number is 12. 📏",
        wrongAnswerExplanations: {
            "8": "This is not the middle number.",
            "16": "This is not the middle number.",
            "20": "This is not the middle number."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch3_t2_qe15',
        type: "mcq",
        question: "What is the mode of 1, 1, 2, 2, 2, 3, 3, 3, 3?",
        options: ["1", "2", "3", "No mode"],
        correctAnswer: "3",
        explanation: "3 appears most often (4 times) in the set. 🎯",
        wrongAnswerExplanations: {
            "1": "This number appears only twice.",
            "2": "This number appears only three times.",
            "No mode": "There is a mode in this set."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch3_t2_qe16',
        type: "mcq",
        question: "Which measure is best for finding the middle income in a city?",
        options: ["Mean", "Median", "Mode", "Range"],
        correctAnswer: "Median",
        explanation: "Median is best for income data as it's not affected by extreme values. 💰",
        wrongAnswerExplanations: {
            "Mean": "Mean can be affected by very high or low incomes.",
            "Mode": "Mode would give the most common income, not the middle.",
            "Range": "Range shows the spread, not the middle value."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch3_t2_qe17',
        type: "mcq",
        question: "What is the mean of 6, 12, 18, 24, 30?",
        options: ["15", "18", "20", "22"],
        correctAnswer: "18",
        explanation: "Mean = (6 + 12 + 18 + 24 + 30) ÷ 5 = 90 ÷ 5 = 18. 📊",
        wrongAnswerExplanations: {
            "15": "This is incorrect calculation.",
            "20": "This is incorrect calculation.",
            "22": "This is incorrect calculation."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch3_t2_qe18',
        type: "mcq",
        question: "What is the median of 3, 6, 9, 12, 15, 18?",
        options: ["9", "10.5", "12", "13.5"],
        correctAnswer: "10.5",
        explanation: "When arranged: 3, 6, 9, 12, 15, 18. The two middle numbers are 9 and 12. Median = (9 + 12) ÷ 2 = 10.5. 📏",
        wrongAnswerExplanations: {
            "9": "This is only one of the middle numbers.",
            "12": "This is only one of the middle numbers.",
            "13.5": "This is incorrect calculation."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch3_t2_qe19',
        type: "mcq",
        question: "What is the mode of 5, 5, 6, 7, 7, 7, 8, 8, 8, 8?",
        options: ["5", "7", "8", "No mode"],
        correctAnswer: "8",
        explanation: "8 appears most often (4 times) in the set. 🎯",
        wrongAnswerExplanations: {
            "5": "This number appears only twice.",
            "7": "This number appears only three times.",
            "No mode": "There is a mode in this set."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch3_t2_qe20',
        type: "mcq",
        question: "Which measure is best for finding the most popular color in a survey?",
        options: ["Mean", "Median", "Mode", "Range"],
        correctAnswer: "Mode",
        explanation: "Mode is best for categorical data like colors. 🎨",
        wrongAnswerExplanations: {
            "Mean": "Mean cannot be calculated for colors.",
            "Median": "Median cannot be calculated for colors.",
            "Range": "Range cannot be calculated for colors."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    }
]; 