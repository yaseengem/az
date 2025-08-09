import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl8_ch9_t3_qe1',
        type: "mcq",
        question: "A cylindrical water tank has a radius of 7 meters and height of 10 meters. What is its volume in cubic meters?",
        options: ["490π m³", "490 m³", "70π m³", "700π m³"],
        correctAnswer: "490π m³",
        explanation: "Volume of cylinder = πr²h = π × 7² × 10 = 490π m³. This formula helps calculate water storage capacity. 🌊",
        wrongAnswerExplanations: {
            "490 m³": "This ignores π in the formula V = πr²h.",
            "70π m³": "This is incorrect as 7² × 10 = 490, not 70.",
            "700π m³": "This is larger than the actual volume of 490π m³."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch9_t3_qe2',
        type: "mcq",
        question: "A gift box is in the shape of a cube with side length 15 cm. How much wrapping paper is needed to cover it completely?",
        options: ["225 cm²", "900 cm²", "1350 cm²", "2250 cm²"],
        correctAnswer: "1350 cm²",
        explanation: "Surface area of cube = 6a² = 6 × 15² = 6 × 225 = 1350 cm². This helps determine the amount of wrapping paper needed. 🎁",
        wrongAnswerExplanations: {
            "225 cm²": "This is only the area of one face (15²).",
            "900 cm²": "This is the area of four faces, but a cube has six faces.",
            "2250 cm²": "This is incorrect as 6 × 15² = 1350, not 2250."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch9_t3_qe3',
        type: "mcq",
        question: "A room is 4 meters long, 3 meters wide, and 3 meters high. How many cubic meters of air does it contain?",
        options: ["24 m³", "36 m³", "48 m³", "12 m³"],
        correctAnswer: "36 m³",
        explanation: "Volume of cuboid = l × w × h = 4 × 3 × 3 = 36 m³. This helps calculate air volume in rooms for ventilation purposes. 🏠",
        wrongAnswerExplanations: {
            "24 m³": "This is incorrect as 4 × 3 × 3 = 36, not 24.",
            "48 m³": "This is larger than the actual volume of 36 m³.",
            "12 m³": "This is only the area of the floor (4 × 3), not the volume."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch9_t3_qe4',
        type: "mcq",
        question: "A cylindrical tin can has radius 5 cm and height 10 cm. What is the area of metal sheet needed to make it (including top and bottom)?",
        options: ["150π cm²", "200π cm²", "150π + 50π cm²", "150π + 100π cm²"],
        correctAnswer: "150π + 100π cm²",
        explanation: "Total surface area = 2πrh + 2πr² = 2π(5)(10) + 2π(5²) = 100π + 50π = 150π cm². This helps calculate material needed for manufacturing. 🥫",
        wrongAnswerExplanations: {
            "150π cm²": "This only accounts for the curved surface area (2πrh).",
            "200π cm²": "This is not the correct sum of curved and circular areas.",
            "150π + 50π cm²": "This is less than the actual surface area needed."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch9_t3_qe5',
        type: "mcq",
        question: "A cubical box has a surface area of 96 square centimeters. What is its volume?",
        options: ["64 cm³", "32 cm³", "16 cm³", "8 cm³"],
        correctAnswer: "64 cm³",
        explanation: "If surface area is 96 cm², then 6a² = 96, so a = 4 cm. Volume = a³ = 4³ = 64 cm³. This helps in storage capacity calculations. 📦",
        wrongAnswerExplanations: {
            "32 cm³": "This is half of the correct volume.",
            "16 cm³": "This is one-fourth of the correct volume.",
            "8 cm³": "This is one-eighth of the correct volume."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch9_t3_qe6',
        type: "mcq",
        question: "A cylindrical pipe has an inner radius of 3 cm and length 100 cm. What volume of water can flow through it?",
        options: ["900π cm³", "300π cm³", "600π cm³", "1200π cm³"],
        correctAnswer: "900π cm³",
        explanation: "Volume = πr²h = π × 3² × 100 = 900π cm³. This helps calculate water flow capacity in pipes. 🚰",
        wrongAnswerExplanations: {
            "300π cm³": "This is one-third of the correct volume.",
            "600π cm³": "This is two-thirds of the correct volume.",
            "1200π cm³": "This is larger than the actual volume."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch9_t3_qe7',
        type: "mcq",
        question: "A rectangular swimming pool is 25 meters long, 10 meters wide, and 2 meters deep. How many cubic meters of water can it hold?",
        options: ["250 m³", "500 m³", "750 m³", "1000 m³"],
        correctAnswer: "500 m³",
        explanation: "Volume of pool = l × w × h = 25 × 10 × 2 = 500 m³. This helps calculate water capacity for swimming pools. 🏊",
        wrongAnswerExplanations: {
            "250 m³": "This is half of the correct volume.",
            "750 m³": "This is more than the actual volume.",
            "1000 m³": "This is twice the actual volume."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch9_t3_qe8',
        type: "mcq",
        question: "A cube and a cuboid have the same volume of 125 cm³. If the cube has side length 5 cm, what could be the dimensions of the cuboid?",
        options: ["5 cm × 5 cm × 5 cm", "25 cm × 1 cm × 5 cm", "25 cm × 25 cm × 0.2 cm", "All of the above"],
        correctAnswer: "All of the above",
        explanation: "Volume = 125 cm³ can be achieved by any dimensions whose product is 125. All given options multiply to give 125 cm³. This shows volume conservation. 📏",
        wrongAnswerExplanations: {
            "5 cm × 5 cm × 5 cm": "This is correct but not the only answer.",
            "25 cm × 1 cm × 5 cm": "This is correct but not the only answer.",
            "25 cm × 25 cm × 0.2 cm": "This is correct but not the only answer."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch9_t3_qe9',
        type: "mcq",
        question: "A cylindrical glass has inner radius 3 cm and height 10 cm. How many milliliters can it hold? (1 cm³ = 1 mL)",
        options: ["90π mL", "30π mL", "60π mL", "120π mL"],
        correctAnswer: "90π mL",
        explanation: "Volume = πr²h = π × 3² × 10 = 90π mL. This helps in measuring liquid capacity of containers. 🥤",
        wrongAnswerExplanations: {
            "30π mL": "This is one-third of the correct volume.",
            "60π mL": "This is two-thirds of the correct volume.",
            "120π mL": "This is larger than the actual volume."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch9_t3_qe10',
        type: "mcq",
        question: "A cubical water tank has a capacity of 1000 liters. What is the length of its side in meters? (1 m³ = 1000 L)",
        options: ["1 m", "10 m", "0.1 m", "100 m"],
        correctAnswer: "1 m",
        explanation: "1000 L = 1 m³. For a cube, if volume is 1 m³, then side length = ∛1 = 1 m. This helps in tank design. 💧",
        wrongAnswerExplanations: {
            "10 m": "This would give a volume of 1000 m³, which is too large.",
            "0.1 m": "This would give a volume of 0.001 m³, which is too small.",
            "100 m": "This would give an extremely large volume of 1,000,000 m³."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    }
]; 