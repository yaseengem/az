import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl6_ch10_t1_qe1',
        type: "mcq",
        question: "What is the perimeter of a square with side length 5 cm?",
        options: ["10 cm", "15 cm", "20 cm", "25 cm"],
        correctAnswer: "20 cm",
        explanation: "Perimeter of square = 4 × side = 4 × 5 cm = 20 cm. All sides of a square are equal. 📏",
        wrongAnswerExplanations: {
            "10 cm": "This would be the sum of two sides, but perimeter includes all four sides.",
            "15 cm": "This is not the correct calculation for perimeter of a square.",
            "25 cm": "This is the area (5 × 5), not the perimeter."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch10_t1_qe2',
        type: "mcq",
        question: "A rectangle has length 8 cm and width 6 cm. What is its perimeter?",
        options: ["14 cm", "28 cm", "48 cm", "24 cm"],
        correctAnswer: "28 cm",
        explanation: "Perimeter = 2 × (length + width) = 2 × (8 cm + 6 cm) = 28 cm. 📐",
        wrongAnswerExplanations: {
            "14 cm": "This is just the sum of length and width, but perimeter needs to be doubled.",
            "48 cm": "This is the area (8 × 6), not the perimeter.",
            "24 cm": "This is the sum of all sides without doubling."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch10_t1_qe3',
        type: "mcq",
        question: "If a square has a perimeter of 36 meters, what is the length of each side?",
        options: ["6 m", "9 m", "12 m", "18 m"],
        correctAnswer: "9 m",
        explanation: "Side length = Perimeter ÷ 4 = 36 m ÷ 4 = 9 m. ⬜",
        wrongAnswerExplanations: {
            "6 m": "This would give a perimeter of 24 m, not 36 m.",
            "12 m": "This would give a perimeter of 48 m, not 36 m.",
            "18 m": "This would give a perimeter of 72 m, not 36 m."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch10_t1_qe4',
        type: "mcq",
        question: "What is the perimeter of a rectangle with length 12 m and width 8 m?",
        options: ["20 m", "40 m", "96 m", "48 m"],
        correctAnswer: "40 m",
        explanation: "Perimeter = 2 × (12 m + 8 m) = 2 × 20 m = 40 m. 📏",
        wrongAnswerExplanations: {
            "20 m": "This is just the sum of length and width, but perimeter needs to be doubled.",
            "96 m": "This is the area (12 × 8), not the perimeter.",
            "48 m": "This is the sum of all sides without doubling."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch10_t1_qe5',
        type: "mcq",
        question: "A square garden has sides of 15 meters. How much fencing is needed to enclose it?",
        options: ["15 m", "30 m", "45 m", "60 m"],
        correctAnswer: "60 m",
        explanation: "Fencing needed = Perimeter = 4 × 15 m = 60 m. 🌱",
        wrongAnswerExplanations: {
            "15 m": "This is just one side, but fencing is needed for all four sides.",
            "30 m": "This is two sides, but fencing is needed for all four sides.",
            "45 m": "This is three sides, but fencing is needed for all four sides."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch10_t1_qe6',
        type: "mcq",
        question: "If a rectangle has a perimeter of 30 cm and width of 5 cm, what is its length?",
        options: ["5 cm", "10 cm", "15 cm", "20 cm"],
        correctAnswer: "10 cm",
        explanation: "Perimeter = 2 × (length + width). So, 30 = 2 × (length + 5). Solving gives length = 10 cm. 📐",
        wrongAnswerExplanations: {
            "5 cm": "This would make it a square, but the perimeter would be 20 cm.",
            "15 cm": "This would give a perimeter of 40 cm.",
            "20 cm": "This would give a perimeter of 50 cm."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch10_t1_qe7',
        type: "mcq",
        question: "What is the perimeter of a square tile with side length 25 cm?",
        options: ["50 cm", "75 cm", "100 cm", "125 cm"],
        correctAnswer: "100 cm",
        explanation: "Perimeter = 4 × 25 cm = 100 cm. 🏠",
        wrongAnswerExplanations: {
            "50 cm": "This is just two sides, but perimeter includes all four sides.",
            "75 cm": "This is three sides, but perimeter includes all four sides.",
            "125 cm": "This is the area (25 × 5), not the perimeter."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch10_t1_qe8',
        type: "mcq",
        question: "A rectangular room has length 9 m and width 7 m. What is its perimeter?",
        options: ["16 m", "32 m", "63 m", "48 m"],
        correctAnswer: "32 m",
        explanation: "Perimeter = 2 × (9 m + 7 m) = 2 × 16 m = 32 m. 🏠",
        wrongAnswerExplanations: {
            "16 m": "This is just the sum of length and width, but perimeter needs to be doubled.",
            "63 m": "This is the area (9 × 7), not the perimeter.",
            "48 m": "This is the sum of all sides without doubling."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch10_t1_qe9',
        type: "mcq",
        question: "If a square has a perimeter of 48 cm, what is the length of each side?",
        options: ["8 cm", "12 cm", "16 cm", "24 cm"],
        correctAnswer: "12 cm",
        explanation: "Side length = Perimeter ÷ 4 = 48 cm ÷ 4 = 12 cm. ⬜",
        wrongAnswerExplanations: {
            "8 cm": "This would give a perimeter of 32 cm, not 48 cm.",
            "16 cm": "This would give a perimeter of 64 cm, not 48 cm.",
            "24 cm": "This would give a perimeter of 96 cm, not 48 cm."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch10_t1_qe10',
        type: "mcq",
        question: "A rectangular field has length 50 m and width 30 m. What is its perimeter?",
        options: ["80 m", "160 m", "1500 m", "100 m"],
        correctAnswer: "160 m",
        explanation: "Perimeter = 2 × (50 m + 30 m) = 2 × 80 m = 160 m. 🌾",
        wrongAnswerExplanations: {
            "80 m": "This is just the sum of length and width, but perimeter needs to be doubled.",
            "1500 m": "This is the area (50 × 30), not the perimeter.",
            "100 m": "This is the sum of all sides without doubling."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch10_t1_qe11',
        type: "mcq",
        question: "What is the perimeter of a square with side length 7.5 cm?",
        options: ["15 cm", "22.5 cm", "30 cm", "37.5 cm"],
        correctAnswer: "30 cm",
        explanation: "Perimeter = 4 × 7.5 cm = 30 cm. 📏",
        wrongAnswerExplanations: {
            "15 cm": "This is just two sides, but perimeter includes all four sides.",
            "22.5 cm": "This is three sides, but perimeter includes all four sides.",
            "37.5 cm": "This is the area (7.5 × 5), not the perimeter."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch10_t1_qe12',
        type: "mcq",
        question: "A rectangular picture frame has length 40 cm and width 30 cm. What is its perimeter?",
        options: ["70 cm", "140 cm", "1200 cm", "100 cm"],
        correctAnswer: "140 cm",
        explanation: "Perimeter = 2 × (40 cm + 30 cm) = 2 × 70 cm = 140 cm. 🖼️",
        wrongAnswerExplanations: {
            "70 cm": "This is just the sum of length and width, but perimeter needs to be doubled.",
            "1200 cm": "This is the area (40 × 30), not the perimeter.",
            "100 cm": "This is the sum of all sides without doubling."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch10_t1_qe13',
        type: "mcq",
        question: "If a square has a perimeter of 60 meters, what is the length of each side?",
        options: ["10 m", "15 m", "20 m", "25 m"],
        correctAnswer: "15 m",
        explanation: "Side length = Perimeter ÷ 4 = 60 m ÷ 4 = 15 m. ⬜",
        wrongAnswerExplanations: {
            "10 m": "This would give a perimeter of 40 m, not 60 m.",
            "20 m": "This would give a perimeter of 80 m, not 60 m.",
            "25 m": "This would give a perimeter of 100 m, not 60 m."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch10_t1_qe14',
        type: "mcq",
        question: "A rectangular swimming pool has length 25 m and width 15 m. What is its perimeter?",
        options: ["40 m", "80 m", "375 m", "60 m"],
        correctAnswer: "80 m",
        explanation: "Perimeter = 2 × (25 m + 15 m) = 2 × 40 m = 80 m. 🏊‍♂️",
        wrongAnswerExplanations: {
            "40 m": "This is just the sum of length and width, but perimeter needs to be doubled.",
            "375 m": "This is the area (25 × 15), not the perimeter.",
            "60 m": "This is the sum of all sides without doubling."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch10_t1_qe15',
        type: "mcq",
        question: "What is the perimeter of a square with side length 12.5 cm?",
        options: ["25 cm", "37.5 cm", "50 cm", "62.5 cm"],
        correctAnswer: "50 cm",
        explanation: "Perimeter = 4 × 12.5 cm = 50 cm. 📏",
        wrongAnswerExplanations: {
            "25 cm": "This is just two sides, but perimeter includes all four sides.",
            "37.5 cm": "This is three sides, but perimeter includes all four sides.",
            "62.5 cm": "This is the area (12.5 × 5), not the perimeter."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch10_t1_qe16',
        type: "mcq",
        question: "A rectangular room has length 6 m and width 4 m. What is its perimeter?",
        options: ["10 m", "20 m", "24 m", "12 m"],
        correctAnswer: "20 m",
        explanation: "Perimeter = 2 × (6 m + 4 m) = 2 × 10 m = 20 m. 🏠",
        wrongAnswerExplanations: {
            "10 m": "This is just the sum of length and width, but perimeter needs to be doubled.",
            "24 m": "This is the area (6 × 4), not the perimeter.",
            "12 m": "This is the sum of all sides without doubling."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch10_t1_qe17',
        type: "mcq",
        question: "If a square has a perimeter of 72 cm, what is the length of each side?",
        options: ["12 cm", "18 cm", "24 cm", "36 cm"],
        correctAnswer: "18 cm",
        explanation: "Side length = Perimeter ÷ 4 = 72 cm ÷ 4 = 18 cm. ⬜",
        wrongAnswerExplanations: {
            "12 cm": "This would give a perimeter of 48 cm, not 72 cm.",
            "24 cm": "This would give a perimeter of 96 cm, not 72 cm.",
            "36 cm": "This would give a perimeter of 144 cm, not 72 cm."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch10_t1_qe18',
        type: "mcq",
        question: "A rectangular garden has length 20 m and width 15 m. What is its perimeter?",
        options: ["35 m", "70 m", "300 m", "50 m"],
        correctAnswer: "70 m",
        explanation: "Perimeter = 2 × (20 m + 15 m) = 2 × 35 m = 70 m. 🌱",
        wrongAnswerExplanations: {
            "35 m": "This is just the sum of length and width, but perimeter needs to be doubled.",
            "300 m": "This is the area (20 × 15), not the perimeter.",
            "50 m": "This is the sum of all sides without doubling."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch10_t1_qe19',
        type: "mcq",
        question: "What is the perimeter of a square with side length 9.5 cm?",
        options: ["19 cm", "28.5 cm", "38 cm", "47.5 cm"],
        correctAnswer: "38 cm",
        explanation: "Perimeter = 4 × 9.5 cm = 38 cm. 📏",
        wrongAnswerExplanations: {
            "19 cm": "This is just two sides, but perimeter includes all four sides.",
            "28.5 cm": "This is three sides, but perimeter includes all four sides.",
            "47.5 cm": "This is the area (9.5 × 5), not the perimeter."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch10_t1_qe20',
        type: "mcq",
        question: "A rectangular field has length 45 m and width 35 m. What is its perimeter?",
        options: ["80 m", "160 m", "1575 m", "120 m"],
        correctAnswer: "160 m",
        explanation: "Perimeter = 2 × (45 m + 35 m) = 2 × 80 m = 160 m. 🌾",
        wrongAnswerExplanations: {
            "80 m": "This is just the sum of length and width, but perimeter needs to be doubled.",
            "1575 m": "This is the area (45 × 35), not the perimeter.",
            "120 m": "This is the sum of all sides without doubling."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    }
]; 