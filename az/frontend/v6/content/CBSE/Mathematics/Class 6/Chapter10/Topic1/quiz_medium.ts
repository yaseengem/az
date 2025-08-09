import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl6_ch10_t1_qm1',
        type: "mcq",
        question: "A square and a rectangle have the same perimeter. The square has side length 10 cm. If the rectangle has width 8 cm, what is its length?",
        options: ["10 cm", "12 cm", "14 cm", "16 cm"],
        correctAnswer: "12 cm",
        explanation: "Square perimeter = 4 × 10 = 40 cm. Rectangle: 40 = 2 × (length + 8). Solving gives length = 12 cm. 📐",
        wrongAnswerExplanations: {
            "10 cm": "This would make it a square, but the perimeter would be 36 cm.",
            "14 cm": "This would give a perimeter of 44 cm.",
            "16 cm": "This would give a perimeter of 48 cm."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch10_t1_qm2',
        type: "mcq",
        question: "A rectangular field has length twice its width. If its perimeter is 120 meters, what is its length?",
        options: ["20 m", "30 m", "40 m", "50 m"],
        correctAnswer: "40 m",
        explanation: "Let width = x, then length = 2x. Perimeter = 2 × (2x + x) = 120. Solving gives x = 20 m, so length = 40 m. 🌾",
        wrongAnswerExplanations: {
            "20 m": "This would be the width, not the length.",
            "30 m": "This doesn't satisfy the given conditions.",
            "50 m": "This would make the perimeter too large."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch10_t1_qm3',
        type: "mcq",
        question: "A square has the same perimeter as a rectangle with length 15 cm and width 9 cm. What is the side length of the square?",
        options: ["10 cm", "12 cm", "14 cm", "16 cm"],
        correctAnswer: "12 cm",
        explanation: "Rectangle perimeter = 2 × (15 + 9) = 48 cm. Square side = 48 ÷ 4 = 12 cm. ⬜",
        wrongAnswerExplanations: {
            "10 cm": "This would give a perimeter of 40 cm.",
            "14 cm": "This would give a perimeter of 56 cm.",
            "16 cm": "This would give a perimeter of 64 cm."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch10_t1_qm4',
        type: "mcq",
        question: "A rectangular garden has length 25 m and width 15 m. If a square garden has the same perimeter, what is its area?",
        options: ["100 m²", "200 m²", "300 m²", "400 m²"],
        correctAnswer: "400 m²",
        explanation: "Rectangle perimeter = 2 × (25 + 15) = 80 m. Square side = 80 ÷ 4 = 20 m. Area = 20 × 20 = 400 m². 🌱",
        wrongAnswerExplanations: {
            "100 m²": "This would be for a 10 m × 10 m square.",
            "200 m²": "This would be for a 14.14 m × 14.14 m square.",
            "300 m²": "This would be for a 17.32 m × 17.32 m square."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch10_t1_qm5',
        type: "mcq",
        question: "A rectangle has length 3 times its width. If its perimeter is 64 cm, what is its width?",
        options: ["6 cm", "8 cm", "10 cm", "12 cm"],
        correctAnswer: "8 cm",
        explanation: "Let width = x, then length = 3x. Perimeter = 2 × (3x + x) = 64. Solving gives x = 8 cm. 📐",
        wrongAnswerExplanations: {
            "6 cm": "This would give a perimeter of 48 cm.",
            "10 cm": "This would give a perimeter of 80 cm.",
            "12 cm": "This would give a perimeter of 96 cm."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch10_t1_qm6',
        type: "mcq",
        question: "A square has perimeter 48 cm. A rectangle has length 16 cm and the same perimeter. What is its width?",
        options: ["4 cm", "6 cm", "8 cm", "10 cm"],
        correctAnswer: "8 cm",
        explanation: "Square perimeter = 48 cm. Rectangle: 48 = 2 × (16 + width). Solving gives width = 8 cm. 📏",
        wrongAnswerExplanations: {
            "4 cm": "This would give a perimeter of 40 cm.",
            "6 cm": "This would give a perimeter of 44 cm.",
            "10 cm": "This would give a perimeter of 52 cm."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch10_t1_qm7',
        type: "mcq",
        question: "A rectangular field has length 40 m and width 30 m. If a square field has the same perimeter, what is its side length?",
        options: ["25 m", "30 m", "35 m", "40 m"],
        correctAnswer: "35 m",
        explanation: "Rectangle perimeter = 2 × (40 + 30) = 140 m. Square side = 140 ÷ 4 = 35 m. 🌾",
        wrongAnswerExplanations: {
            "25 m": "This would give a perimeter of 100 m.",
            "30 m": "This would give a perimeter of 120 m.",
            "40 m": "This would give a perimeter of 160 m."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch10_t1_qm8',
        type: "mcq",
        question: "A rectangle has length 5 cm more than its width. If its perimeter is 50 cm, what is its length?",
        options: ["10 cm", "12 cm", "15 cm", "20 cm"],
        correctAnswer: "15 cm",
        explanation: "Let width = x, then length = x + 5. Perimeter = 2 × (x + 5 + x) = 50. Solving gives x = 10 cm, so length = 15 cm. 📐",
        wrongAnswerExplanations: {
            "10 cm": "This would be the width, not the length.",
            "12 cm": "This doesn't satisfy the given conditions.",
            "20 cm": "This would make the perimeter too large."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch10_t1_qm9',
        type: "mcq",
        question: "A square has perimeter 60 cm. A rectangle has width 10 cm and the same perimeter. What is its length?",
        options: ["15 cm", "20 cm", "25 cm", "30 cm"],
        correctAnswer: "20 cm",
        explanation: "Square perimeter = 60 cm. Rectangle: 60 = 2 × (length + 10). Solving gives length = 20 cm. 📏",
        wrongAnswerExplanations: {
            "15 cm": "This would give a perimeter of 50 cm.",
            "25 cm": "This would give a perimeter of 70 cm.",
            "30 cm": "This would give a perimeter of 80 cm."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch10_t1_qm10',
        type: "mcq",
        question: "A rectangular garden has length 35 m and width 25 m. If a square garden has the same perimeter, what is its area?",
        options: ["400 m²", "625 m²", "900 m²", "1225 m²"],
        correctAnswer: "900 m²",
        explanation: "Rectangle perimeter = 2 × (35 + 25) = 120 m. Square side = 120 ÷ 4 = 30 m. Area = 30 × 30 = 900 m². 🌱",
        wrongAnswerExplanations: {
            "400 m²": "This would be for a 20 m × 20 m square.",
            "625 m²": "This would be for a 25 m × 25 m square.",
            "1225 m²": "This would be for a 35 m × 35 m square."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch10_t1_qm11',
        type: "mcq",
        question: "A rectangle has length 4 times its width. If its perimeter is 100 cm, what is its width?",
        options: ["8 cm", "10 cm", "12 cm", "15 cm"],
        correctAnswer: "10 cm",
        explanation: "Let width = x, then length = 4x. Perimeter = 2 × (4x + x) = 100. Solving gives x = 10 cm. 📐",
        wrongAnswerExplanations: {
            "8 cm": "This would give a perimeter of 80 cm.",
            "12 cm": "This would give a perimeter of 120 cm.",
            "15 cm": "This would give a perimeter of 150 cm."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch10_t1_qm12',
        type: "mcq",
        question: "A square has perimeter 80 cm. A rectangle has length 25 cm and the same perimeter. What is its width?",
        options: ["10 cm", "12 cm", "15 cm", "20 cm"],
        correctAnswer: "15 cm",
        explanation: "Square perimeter = 80 cm. Rectangle: 80 = 2 × (25 + width). Solving gives width = 15 cm. 📏",
        wrongAnswerExplanations: {
            "10 cm": "This would give a perimeter of 70 cm.",
            "12 cm": "This would give a perimeter of 74 cm.",
            "20 cm": "This would give a perimeter of 90 cm."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch10_t1_qm13',
        type: "mcq",
        question: "A rectangular field has length 45 m and width 35 m. If a square field has the same perimeter, what is its side length?",
        options: ["30 m", "35 m", "40 m", "45 m"],
        correctAnswer: "40 m",
        explanation: "Rectangle perimeter = 2 × (45 + 35) = 160 m. Square side = 160 ÷ 4 = 40 m. 🌾",
        wrongAnswerExplanations: {
            "30 m": "This would give a perimeter of 120 m.",
            "35 m": "This would give a perimeter of 140 m.",
            "45 m": "This would give a perimeter of 180 m."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch10_t1_qm14',
        type: "mcq",
        question: "A rectangle has length 6 cm more than its width. If its perimeter is 60 cm, what is its length?",
        options: ["12 cm", "15 cm", "18 cm", "24 cm"],
        correctAnswer: "18 cm",
        explanation: "Let width = x, then length = x + 6. Perimeter = 2 × (x + 6 + x) = 60. Solving gives x = 12 cm, so length = 18 cm. 📐",
        wrongAnswerExplanations: {
            "12 cm": "This would be the width, not the length.",
            "15 cm": "This doesn't satisfy the given conditions.",
            "24 cm": "This would make the perimeter too large."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch10_t1_qm15',
        type: "mcq",
        question: "A square has perimeter 72 cm. A rectangle has width 12 cm and the same perimeter. What is its length?",
        options: ["18 cm", "20 cm", "24 cm", "30 cm"],
        correctAnswer: "24 cm",
        explanation: "Square perimeter = 72 cm. Rectangle: 72 = 2 × (length + 12). Solving gives length = 24 cm. 📏",
        wrongAnswerExplanations: {
            "18 cm": "This would give a perimeter of 60 cm.",
            "20 cm": "This would give a perimeter of 64 cm.",
            "30 cm": "This would give a perimeter of 84 cm."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch10_t1_qm16',
        type: "mcq",
        question: "A rectangular garden has length 40 m and width 30 m. If a square garden has the same perimeter, what is its area?",
        options: ["900 m²", "1225 m²", "1600 m²", "2025 m²"],
        correctAnswer: "1225 m²",
        explanation: "Rectangle perimeter = 2 × (40 + 30) = 140 m. Square side = 140 ÷ 4 = 35 m. Area = 35 × 35 = 1225 m². 🌱",
        wrongAnswerExplanations: {
            "900 m²": "This would be for a 30 m × 30 m square.",
            "1600 m²": "This would be for a 40 m × 40 m square.",
            "2025 m²": "This would be for a 45 m × 45 m square."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch10_t1_qm17',
        type: "mcq",
        question: "A rectangle has length 5 times its width. If its perimeter is 120 cm, what is its width?",
        options: ["8 cm", "10 cm", "12 cm", "15 cm"],
        correctAnswer: "10 cm",
        explanation: "Let width = x, then length = 5x. Perimeter = 2 × (5x + x) = 120. Solving gives x = 10 cm. 📐",
        wrongAnswerExplanations: {
            "8 cm": "This would give a perimeter of 96 cm.",
            "12 cm": "This would give a perimeter of 144 cm.",
            "15 cm": "This would give a perimeter of 180 cm."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch10_t1_qm18',
        type: "mcq",
        question: "A square has perimeter 100 cm. A rectangle has length 30 cm and the same perimeter. What is its width?",
        options: ["15 cm", "20 cm", "25 cm", "30 cm"],
        correctAnswer: "20 cm",
        explanation: "Square perimeter = 100 cm. Rectangle: 100 = 2 × (30 + width). Solving gives width = 20 cm. 📏",
        wrongAnswerExplanations: {
            "15 cm": "This would give a perimeter of 90 cm.",
            "25 cm": "This would give a perimeter of 110 cm.",
            "30 cm": "This would give a perimeter of 120 cm."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch10_t1_qm19',
        type: "mcq",
        question: "A rectangular field has length 50 m and width 40 m. If a square field has the same perimeter, what is its side length?",
        options: ["35 m", "40 m", "45 m", "50 m"],
        correctAnswer: "45 m",
        explanation: "Rectangle perimeter = 2 × (50 + 40) = 180 m. Square side = 180 ÷ 4 = 45 m. 🌾",
        wrongAnswerExplanations: {
            "35 m": "This would give a perimeter of 140 m.",
            "40 m": "This would give a perimeter of 160 m.",
            "50 m": "This would give a perimeter of 200 m."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch10_t1_qm20',
        type: "mcq",
        question: "A rectangle has length 8 cm more than its width. If its perimeter is 80 cm, what is its length?",
        options: ["16 cm", "20 cm", "24 cm", "32 cm"],
        correctAnswer: "24 cm",
        explanation: "Let width = x, then length = x + 8. Perimeter = 2 × (x + 8 + x) = 80. Solving gives x = 16 cm, so length = 24 cm. 📐",
        wrongAnswerExplanations: {
            "16 cm": "This would be the width, not the length.",
            "20 cm": "This doesn't satisfy the given conditions.",
            "32 cm": "This would make the perimeter too large."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    }
]; 