import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl6_ch10_t2_qe1',
        type: "mcq",
        question: "What is the area of a square with side length 5 cm?",
        options: ["10 cm²", "20 cm²", "25 cm²", "30 cm²"],
        correctAnswer: "25 cm²",
        explanation: "Area of square = side × side = 5 × 5 = 25 cm². Remember to use square units for area! 📐",
        wrongAnswerExplanations: {
            "10 cm²": "This would be the perimeter (5 + 5 + 5 + 5), not the area.",
            "20 cm²": "This is incorrect. The area is side × side, not side × 4.",
            "30 cm²": "This is incorrect. The area of a 5 cm square is 25 cm²."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch10_t2_qe2',
        type: "mcq",
        question: "A rectangle has length 8 cm and width 3 cm. What is its area?",
        options: ["11 cm²", "24 cm²", "32 cm²", "48 cm²"],
        correctAnswer: "24 cm²",
        explanation: "Area of rectangle = length × width = 8 × 3 = 24 cm². Multiply the two dimensions to get area. 📏",
        wrongAnswerExplanations: {
            "11 cm²": "This would be the sum of length and width, not the area.",
            "32 cm²": "This is incorrect. The area is length × width, not length × 4.",
            "48 cm²": "This is incorrect. The area of an 8 cm × 3 cm rectangle is 24 cm²."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch10_t2_qe3',
        type: "mcq",
        question: "What is the area of a triangle with base 6 cm and height 4 cm?",
        options: ["10 cm²", "12 cm²", "24 cm²", "48 cm²"],
        correctAnswer: "12 cm²",
        explanation: "Area of triangle = ½ × base × height = ½ × 6 × 4 = 12 cm². Don't forget the ½! 🔺",
        wrongAnswerExplanations: {
            "10 cm²": "This would be the sum of base and height, not the area.",
            "24 cm²": "This would be base × height, but you forgot to multiply by ½.",
            "48 cm²": "This is incorrect. The area of a triangle is ½ × base × height."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch10_t2_qe4',
        type: "mcq",
        question: "If a square has an area of 49 cm², what is the length of its sides?",
        options: ["7 cm", "14 cm", "21 cm", "28 cm"],
        correctAnswer: "7 cm",
        explanation: "Area = side², so side = √49 = 7 cm. The square root of the area gives the side length. 🔲",
        wrongAnswerExplanations: {
            "14 cm": "This would be twice the correct side length.",
            "21 cm": "This is incorrect. The square root of 49 is 7.",
            "28 cm": "This is incorrect. The side length is the square root of the area."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch10_t2_qe5',
        type: "mcq",
        question: "What is the area of a circle with radius 3 cm? (Use π = 3.14)",
        options: ["9.42 cm²", "18.84 cm²", "28.26 cm²", "37.68 cm²"],
        correctAnswer: "28.26 cm²",
        explanation: "Area = π × radius² = 3.14 × 3 × 3 = 28.26 cm². Remember to square the radius! ⭕",
        wrongAnswerExplanations: {
            "9.42 cm²": "This would be the circumference (2πr), not the area.",
            "18.84 cm²": "This is incorrect. The area is π × radius², not 2π × radius.",
            "37.68 cm²": "This is incorrect. The area of a circle with radius 3 cm is 28.26 cm²."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch10_t2_qe6',
        type: "mcq",
        question: "A rectangular garden is 12 m long and 8 m wide. What is its area?",
        options: ["20 m²", "40 m²", "96 m²", "120 m²"],
        correctAnswer: "96 m²",
        explanation: "Area = length × width = 12 × 8 = 96 m². Multiply the two dimensions to get area. 🌱",
        wrongAnswerExplanations: {
            "20 m²": "This would be the sum of length and width, not the area.",
            "40 m²": "This is incorrect. The area is length × width, not length + width.",
            "120 m²": "This is incorrect. The area of a 12 m × 8 m rectangle is 96 m²."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch10_t2_qe7',
        type: "mcq",
        question: "What is the area of a triangle with base 10 cm and height 5 cm?",
        options: ["15 cm²", "25 cm²", "50 cm²", "100 cm²"],
        correctAnswer: "25 cm²",
        explanation: "Area = ½ × base × height = ½ × 10 × 5 = 25 cm². Don't forget to multiply by ½! 🔺",
        wrongAnswerExplanations: {
            "15 cm²": "This would be the sum of base and height, not the area.",
            "50 cm²": "This would be base × height, but you forgot to multiply by ½.",
            "100 cm²": "This is incorrect. The area of a triangle is ½ × base × height."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch10_t2_qe8',
        type: "mcq",
        question: "If a rectangle has an area of 60 cm² and length 10 cm, what is its width?",
        options: ["5 cm", "6 cm", "10 cm", "12 cm"],
        correctAnswer: "6 cm",
        explanation: "Area = length × width, so width = area ÷ length = 60 ÷ 10 = 6 cm. 📏",
        wrongAnswerExplanations: {
            "5 cm": "This is incorrect. The width is area divided by length.",
            "10 cm": "This would make the area 100 cm², not 60 cm².",
            "12 cm": "This is incorrect. The width is area divided by length."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch10_t2_qe9',
        type: "mcq",
        question: "What is the area of a square with side length 9 cm?",
        options: ["18 cm²", "36 cm²", "81 cm²", "162 cm²"],
        correctAnswer: "81 cm²",
        explanation: "Area = side × side = 9 × 9 = 81 cm². Square the side length to get area. 🔲",
        wrongAnswerExplanations: {
            "18 cm²": "This would be twice the side length, not the area.",
            "36 cm²": "This would be 4 times the side length, not the area.",
            "162 cm²": "This is incorrect. The area of a 9 cm square is 81 cm²."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch10_t2_qe10',
        type: "mcq",
        question: "A circular pizza has a radius of 7 cm. What is its area? (Use π = 3.14)",
        options: ["21.98 cm²", "43.96 cm²", "153.86 cm²", "307.72 cm²"],
        correctAnswer: "153.86 cm²",
        explanation: "Area = π × radius² = 3.14 × 7 × 7 = 153.86 cm². Remember to square the radius! 🍕",
        wrongAnswerExplanations: {
            "21.98 cm²": "This would be the circumference (2πr), not the area.",
            "43.96 cm²": "This is incorrect. The area is π × radius², not 2π × radius.",
            "307.72 cm²": "This is incorrect. The area of a circle with radius 7 cm is 153.86 cm²."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch10_t2_qe11',
        type: "mcq",
        question: "What is the area of a rectangle with length 15 m and width 4 m?",
        options: ["19 m²", "38 m²", "60 m²", "120 m²"],
        correctAnswer: "60 m²",
        explanation: "Area = length × width = 15 × 4 = 60 m². Multiply the two dimensions to get area. 📏",
        wrongAnswerExplanations: {
            "19 m²": "This would be the sum of length and width, not the area.",
            "38 m²": "This would be twice the sum of length and width, not the area.",
            "120 m²": "This is incorrect. The area of a 15 m × 4 m rectangle is 60 m²."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch10_t2_qe12',
        type: "mcq",
        question: "If a triangle has an area of 24 cm² and base 8 cm, what is its height?",
        options: ["3 cm", "6 cm", "12 cm", "24 cm"],
        correctAnswer: "6 cm",
        explanation: "Area = ½ × base × height, so height = (2 × area) ÷ base = (2 × 24) ÷ 8 = 6 cm. 🔺",
        wrongAnswerExplanations: {
            "3 cm": "This is incorrect. The height is (2 × area) divided by base.",
            "12 cm": "This would make the area 48 cm², not 24 cm².",
            "24 cm": "This is incorrect. The height is (2 × area) divided by base."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch10_t2_qe13',
        type: "mcq",
        question: "What is the area of a square with side length 11 cm?",
        options: ["22 cm²", "44 cm²", "121 cm²", "242 cm²"],
        correctAnswer: "121 cm²",
        explanation: "Area = side × side = 11 × 11 = 121 cm². Square the side length to get area. 🔲",
        wrongAnswerExplanations: {
            "22 cm²": "This would be twice the side length, not the area.",
            "44 cm²": "This would be 4 times the side length, not the area.",
            "242 cm²": "This is incorrect. The area of an 11 cm square is 121 cm²."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch10_t2_qe14',
        type: "mcq",
        question: "A rectangular field is 20 m long and 15 m wide. What is its area?",
        options: ["35 m²", "70 m²", "300 m²", "600 m²"],
        correctAnswer: "300 m²",
        explanation: "Area = length × width = 20 × 15 = 300 m². Multiply the two dimensions to get area. 🌾",
        wrongAnswerExplanations: {
            "35 m²": "This would be the sum of length and width, not the area.",
            "70 m²": "This would be twice the sum of length and width, not the area.",
            "600 m²": "This is incorrect. The area of a 20 m × 15 m rectangle is 300 m²."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch10_t2_qe15',
        type: "mcq",
        question: "What is the area of a circle with radius 5 cm? (Use π = 3.14)",
        options: ["15.7 cm²", "31.4 cm²", "78.5 cm²", "157 cm²"],
        correctAnswer: "78.5 cm²",
        explanation: "Area = π × radius² = 3.14 × 5 × 5 = 78.5 cm². Remember to square the radius! ⭕",
        wrongAnswerExplanations: {
            "15.7 cm²": "This would be the circumference (2πr), not the area.",
            "31.4 cm²": "This is incorrect. The area is π × radius², not 2π × radius.",
            "157 cm²": "This is incorrect. The area of a circle with radius 5 cm is 78.5 cm²."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch10_t2_qe16',
        type: "mcq",
        question: "If a square has an area of 144 cm², what is the length of its sides?",
        options: ["12 cm", "24 cm", "36 cm", "48 cm"],
        correctAnswer: "12 cm",
        explanation: "Area = side², so side = √144 = 12 cm. The square root of the area gives the side length. 🔲",
        wrongAnswerExplanations: {
            "24 cm": "This would be twice the correct side length.",
            "36 cm": "This is incorrect. The square root of 144 is 12.",
            "48 cm": "This is incorrect. The side length is the square root of the area."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch10_t2_qe17',
        type: "mcq",
        question: "What is the area of a triangle with base 12 cm and height 8 cm?",
        options: ["20 cm²", "48 cm²", "96 cm²", "192 cm²"],
        correctAnswer: "48 cm²",
        explanation: "Area = ½ × base × height = ½ × 12 × 8 = 48 cm². Don't forget to multiply by ½! 🔺",
        wrongAnswerExplanations: {
            "20 cm²": "This would be the sum of base and height, not the area.",
            "96 cm²": "This would be base × height, but you forgot to multiply by ½.",
            "192 cm²": "This is incorrect. The area of a triangle is ½ × base × height."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch10_t2_qe18',
        type: "mcq",
        question: "A rectangular room is 9 m long and 6 m wide. What is its area?",
        options: ["15 m²", "30 m²", "54 m²", "108 m²"],
        correctAnswer: "54 m²",
        explanation: "Area = length × width = 9 × 6 = 54 m². Multiply the two dimensions to get area. 🏠",
        wrongAnswerExplanations: {
            "15 m²": "This would be the sum of length and width, not the area.",
            "30 m²": "This would be twice the sum of length and width, not the area.",
            "108 m²": "This is incorrect. The area of a 9 m × 6 m rectangle is 54 m²."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch10_t2_qe19',
        type: "mcq",
        question: "What is the area of a square with side length 13 cm?",
        options: ["26 cm²", "52 cm²", "169 cm²", "338 cm²"],
        correctAnswer: "169 cm²",
        explanation: "Area = side × side = 13 × 13 = 169 cm². Square the side length to get area. 🔲",
        wrongAnswerExplanations: {
            "26 cm²": "This would be twice the side length, not the area.",
            "52 cm²": "This would be 4 times the side length, not the area.",
            "338 cm²": "This is incorrect. The area of a 13 cm square is 169 cm²."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch10_t2_qe20',
        type: "mcq",
        question: "A circular garden has a radius of 4 m. What is its area? (Use π = 3.14)",
        options: ["12.56 m²", "25.12 m²", "50.24 m²", "100.48 m²"],
        correctAnswer: "50.24 m²",
        explanation: "Area = π × radius² = 3.14 × 4 × 4 = 50.24 m². Remember to square the radius! 🌸",
        wrongAnswerExplanations: {
            "12.56 m²": "This would be the circumference (2πr), not the area.",
            "25.12 m²": "This is incorrect. The area is π × radius², not 2π × radius.",
            "100.48 m²": "This is incorrect. The area of a circle with radius 4 m is 50.24 m²."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    }
]; 