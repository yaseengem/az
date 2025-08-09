import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl5_ch3_t1_qe1',
        type: "mcq",
        question: "What is the area of a shape with 5 complete squares?",
        options: ["3 square units", "4 square units", "5 square units", "6 square units"],
        correctAnswer: "5 square units",
        explanation: "Each complete square counts as 1 square unit. So, 5 complete squares = 5 square units. 📏",
        wrongAnswerExplanations: {
            "3 square units": "This would be for 3 complete squares.",
            "4 square units": "This would be for 4 complete squares.",
            "6 square units": "This would be for 6 complete squares."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch3_t1_qe2',
        type: "mcq",
        question: "If a shape has 2 half squares, how many square units is that?",
        options: ["1 square unit", "2 square units", "3 square units", "4 square units"],
        correctAnswer: "1 square unit",
        explanation: "Two half squares make 1 complete square unit. ½ + ½ = 1 square unit. 📏",
        wrongAnswerExplanations: {
            "2 square units": "This would be for 2 complete squares.",
            "3 square units": "This would be for 3 complete squares.",
            "4 square units": "This would be for 4 complete squares."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch3_t1_qe3',
        type: "mcq",
        question: "What is the area of a rectangle that is 3 squares across and 2 squares down?",
        options: ["4 square units", "5 square units", "6 square units", "7 square units"],
        correctAnswer: "6 square units",
        explanation: "Multiply the number of squares across and down: 3 × 2 = 6 square units. 📏",
        wrongAnswerExplanations: {
            "4 square units": "This would be for 2 × 2 squares.",
            "5 square units": "This is not a possible area for a rectangle with whole squares.",
            "7 square units": "This is not a possible area for a rectangle with whole squares."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch3_t1_qe4',
        type: "mcq",
        question: "If a shape has 4 complete squares and 2 half squares, what is its area?",
        options: ["4 square units", "5 square units", "6 square units", "7 square units"],
        correctAnswer: "5 square units",
        explanation: "4 complete squares + (2 × ½) = 4 + 1 = 5 square units. 📏",
        wrongAnswerExplanations: {
            "4 square units": "This only counts the complete squares.",
            "6 square units": "This counts the half squares as full squares.",
            "7 square units": "This adds too many square units."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch3_t1_qe5',
        type: "mcq",
        question: "What is the area of a square that is 2 squares on each side?",
        options: ["2 square units", "3 square units", "4 square units", "5 square units"],
        correctAnswer: "4 square units",
        explanation: "Multiply the number of squares on each side: 2 × 2 = 4 square units. 📏",
        wrongAnswerExplanations: {
            "2 square units": "This would be for 1 × 2 squares.",
            "3 square units": "This is not a possible area for a square with whole squares.",
            "5 square units": "This is not a possible area for a square with whole squares."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch3_t1_qe6',
        type: "mcq",
        question: "If a shape has 3 complete squares and 4 quarter squares, what is its area?",
        options: ["3 square units", "4 square units", "5 square units", "6 square units"],
        correctAnswer: "4 square units",
        explanation: "3 complete squares + (4 × ¼) = 3 + 1 = 4 square units. 📏",
        wrongAnswerExplanations: {
            "3 square units": "This only counts the complete squares.",
            "5 square units": "This counts the quarter squares as full squares.",
            "6 square units": "This adds too many square units."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch3_t1_qe7',
        type: "mcq",
        question: "What is the area of a rectangle that is 4 squares across and 1 square down?",
        options: ["3 square units", "4 square units", "5 square units", "6 square units"],
        correctAnswer: "4 square units",
        explanation: "Multiply the number of squares across and down: 4 × 1 = 4 square units. 📏",
        wrongAnswerExplanations: {
            "3 square units": "This would be for 3 × 1 squares.",
            "5 square units": "This is not a possible area for a rectangle with whole squares.",
            "6 square units": "This would be for 6 × 1 squares."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch3_t1_qe8',
        type: "mcq",
        question: "If a shape has 6 complete squares and 2 half squares, what is its area?",
        options: ["6 square units", "7 square units", "8 square units", "9 square units"],
        correctAnswer: "7 square units",
        explanation: "6 complete squares + (2 × ½) = 6 + 1 = 7 square units. 📏",
        wrongAnswerExplanations: {
            "6 square units": "This only counts the complete squares.",
            "8 square units": "This counts the half squares as full squares.",
            "9 square units": "This adds too many square units."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch3_t1_qe9',
        type: "mcq",
        question: "What is the area of a square that is 3 squares on each side?",
        options: ["6 square units", "7 square units", "8 square units", "9 square units"],
        correctAnswer: "9 square units",
        explanation: "Multiply the number of squares on each side: 3 × 3 = 9 square units. 📏",
        wrongAnswerExplanations: {
            "6 square units": "This would be for 2 × 3 squares.",
            "7 square units": "This is not a possible area for a square with whole squares.",
            "8 square units": "This is not a possible area for a square with whole squares."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch3_t1_qe10',
        type: "mcq",
        question: "If a shape has 5 complete squares and 4 quarter squares, what is its area?",
        options: ["5 square units", "6 square units", "7 square units", "8 square units"],
        correctAnswer: "6 square units",
        explanation: "5 complete squares + (4 × ¼) = 5 + 1 = 6 square units. 📏",
        wrongAnswerExplanations: {
            "5 square units": "This only counts the complete squares.",
            "7 square units": "This counts the quarter squares as full squares.",
            "8 square units": "This adds too many square units."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch3_t1_qe11',
        type: "mcq",
        question: "What is the area of a rectangle that is 2 squares across and 4 squares down?",
        options: ["6 square units", "7 square units", "8 square units", "9 square units"],
        correctAnswer: "8 square units",
        explanation: "Multiply the number of squares across and down: 2 × 4 = 8 square units. 📏",
        wrongAnswerExplanations: {
            "6 square units": "This would be for 2 × 3 squares.",
            "7 square units": "This is not a possible area for a rectangle with whole squares.",
            "9 square units": "This would be for 3 × 3 squares."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch3_t1_qe12',
        type: "mcq",
        question: "If a shape has 7 complete squares and 2 half squares, what is its area?",
        options: ["7 square units", "8 square units", "9 square units", "10 square units"],
        correctAnswer: "8 square units",
        explanation: "7 complete squares + (2 × ½) = 7 + 1 = 8 square units. 📏",
        wrongAnswerExplanations: {
            "7 square units": "This only counts the complete squares.",
            "9 square units": "This counts the half squares as full squares.",
            "10 square units": "This adds too many square units."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch3_t1_qe13',
        type: "mcq",
        question: "What is the area of a square that is 4 squares on each side?",
        options: ["12 square units", "14 square units", "16 square units", "18 square units"],
        correctAnswer: "16 square units",
        explanation: "Multiply the number of squares on each side: 4 × 4 = 16 square units. 📏",
        wrongAnswerExplanations: {
            "12 square units": "This would be for 3 × 4 squares.",
            "14 square units": "This is not a possible area for a square with whole squares.",
            "18 square units": "This would be for 3 × 6 squares."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch3_t1_qe14',
        type: "mcq",
        question: "If a shape has 8 complete squares and 4 quarter squares, what is its area?",
        options: ["8 square units", "9 square units", "10 square units", "11 square units"],
        correctAnswer: "9 square units",
        explanation: "8 complete squares + (4 × ¼) = 8 + 1 = 9 square units. 📏",
        wrongAnswerExplanations: {
            "8 square units": "This only counts the complete squares.",
            "10 square units": "This counts the quarter squares as full squares.",
            "11 square units": "This adds too many square units."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch3_t1_qe15',
        type: "mcq",
        question: "What is the area of a rectangle that is 3 squares across and 3 squares down?",
        options: ["6 square units", "8 square units", "9 square units", "10 square units"],
        correctAnswer: "9 square units",
        explanation: "Multiply the number of squares across and down: 3 × 3 = 9 square units. 📏",
        wrongAnswerExplanations: {
            "6 square units": "This would be for 2 × 3 squares.",
            "8 square units": "This is not a possible area for a rectangle with whole squares.",
            "10 square units": "This is not a possible area for a rectangle with whole squares."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch3_t1_qe16',
        type: "mcq",
        question: "If a shape has 9 complete squares and 2 half squares, what is its area?",
        options: ["9 square units", "10 square units", "11 square units", "12 square units"],
        correctAnswer: "10 square units",
        explanation: "9 complete squares + (2 × ½) = 9 + 1 = 10 square units. 📏",
        wrongAnswerExplanations: {
            "9 square units": "This only counts the complete squares.",
            "11 square units": "This counts the half squares as full squares.",
            "12 square units": "This adds too many square units."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch3_t1_qe17',
        type: "mcq",
        question: "What is the area of a square that is 5 squares on each side?",
        options: ["20 square units", "22 square units", "24 square units", "25 square units"],
        correctAnswer: "25 square units",
        explanation: "Multiply the number of squares on each side: 5 × 5 = 25 square units. 📏",
        wrongAnswerExplanations: {
            "20 square units": "This would be for 4 × 5 squares.",
            "22 square units": "This is not a possible area for a square with whole squares.",
            "24 square units": "This would be for 4 × 6 squares."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch3_t1_qe18',
        type: "mcq",
        question: "If a shape has 10 complete squares and 4 quarter squares, what is its area?",
        options: ["10 square units", "11 square units", "12 square units", "13 square units"],
        correctAnswer: "11 square units",
        explanation: "10 complete squares + (4 × ¼) = 10 + 1 = 11 square units. 📏",
        wrongAnswerExplanations: {
            "10 square units": "This only counts the complete squares.",
            "12 square units": "This counts the quarter squares as full squares.",
            "13 square units": "This adds too many square units."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch3_t1_qe19',
        type: "mcq",
        question: "What is the area of a rectangle that is 4 squares across and 2 squares down?",
        options: ["6 square units", "7 square units", "8 square units", "9 square units"],
        correctAnswer: "8 square units",
        explanation: "Multiply the number of squares across and down: 4 × 2 = 8 square units. 📏",
        wrongAnswerExplanations: {
            "6 square units": "This would be for 3 × 2 squares.",
            "7 square units": "This is not a possible area for a rectangle with whole squares.",
            "9 square units": "This would be for 3 × 3 squares."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch3_t1_qe20',
        type: "mcq",
        question: "If a shape has 12 complete squares and 2 half squares, what is its area?",
        options: ["12 square units", "13 square units", "14 square units", "15 square units"],
        correctAnswer: "13 square units",
        explanation: "12 complete squares + (2 × ½) = 12 + 1 = 13 square units. 📏",
        wrongAnswerExplanations: {
            "12 square units": "This only counts the complete squares.",
            "14 square units": "This counts the half squares as full squares.",
            "15 square units": "This adds too many square units."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    }
]; 