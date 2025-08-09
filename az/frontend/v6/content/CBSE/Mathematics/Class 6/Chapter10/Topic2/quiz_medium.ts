import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl6_ch10_t2_qm1',
        type: "mcq",
        question: "A rectangular field is 25 m long and 16 m wide. What is its area in hectares? (1 hectare = 10,000 m²)",
        options: ["0.04 hectares", "0.4 hectares", "4 hectares", "40 hectares"],
        correctAnswer: "0.04 hectares",
        explanation: "Area = 25 × 16 = 400 m². Convert to hectares: 400 ÷ 10,000 = 0.04 hectares. 🌾",
        wrongAnswerExplanations: {
            "0.4 hectares": "This would be 4,000 m², not 400 m².",
            "4 hectares": "This would be 40,000 m², not 400 m².",
            "40 hectares": "This would be 400,000 m², not 400 m²."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch10_t2_qm2',
        type: "mcq",
        question: "A square and a rectangle have the same area. If the square has sides of 12 cm, and the rectangle has a width of 8 cm, what is the length of the rectangle?",
        options: ["12 cm", "16 cm", "18 cm", "24 cm"],
        correctAnswer: "18 cm",
        explanation: "Square area = 12 × 12 = 144 cm². Rectangle area = 144 = 8 × length, so length = 144 ÷ 8 = 18 cm. 📐",
        wrongAnswerExplanations: {
            "12 cm": "This would make the rectangle's area 96 cm², not 144 cm².",
            "16 cm": "This would make the rectangle's area 128 cm², not 144 cm².",
            "24 cm": "This would make the rectangle's area 192 cm², not 144 cm²."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch10_t2_qm3',
        type: "mcq",
        question: "A circular garden has an area of 314 m². What is its radius? (Use π = 3.14)",
        options: ["5 m", "10 m", "15 m", "20 m"],
        correctAnswer: "10 m",
        explanation: "Area = π × radius², so radius² = 314 ÷ 3.14 = 100, thus radius = √100 = 10 m. 🌸",
        wrongAnswerExplanations: {
            "5 m": "This would give an area of 78.5 m², not 314 m².",
            "15 m": "This would give an area of 706.5 m², not 314 m².",
            "20 m": "This would give an area of 1,256 m², not 314 m²."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch10_t2_qm4',
        type: "mcq",
        question: "A triangle has an area of 48 cm² and a height of 8 cm. What is the length of its base?",
        options: ["6 cm", "8 cm", "12 cm", "16 cm"],
        correctAnswer: "12 cm",
        explanation: "Area = ½ × base × height, so base = (2 × area) ÷ height = (2 × 48) ÷ 8 = 12 cm. 🔺",
        wrongAnswerExplanations: {
            "6 cm": "This would give an area of 24 cm², not 48 cm².",
            "8 cm": "This would give an area of 32 cm², not 48 cm².",
            "16 cm": "This would give an area of 64 cm², not 48 cm²."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch10_t2_qm5',
        type: "mcq",
        question: "A rectangular room is 4.5 m long and 3.2 m wide. What is its area in square centimeters?",
        options: ["144 cm²", "1,440 cm²", "14,400 cm²", "144,000 cm²"],
        correctAnswer: "144,000 cm²",
        explanation: "Area = 4.5 m × 3.2 m = 14.4 m². Convert to cm²: 14.4 × 10,000 = 144,000 cm². 🏠",
        wrongAnswerExplanations: {
            "144 cm²": "This is too small. Remember to convert meters to centimeters.",
            "1,440 cm²": "This is too small. Remember to convert meters to centimeters.",
            "14,400 cm²": "This is too small. Remember to convert meters to centimeters."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch10_t2_qm6',
        type: "mcq",
        question: "A square and a circle have the same area. If the square has sides of 10 cm, what is the radius of the circle? (Use π = 3.14)",
        options: ["5 cm", "5.64 cm", "6.28 cm", "7.07 cm"],
        correctAnswer: "5.64 cm",
        explanation: "Square area = 10 × 10 = 100 cm². Circle area = π × radius² = 100, so radius = √(100 ÷ 3.14) ≈ 5.64 cm. ⭕",
        wrongAnswerExplanations: {
            "5 cm": "This would give a circle area of 78.5 cm², not 100 cm².",
            "6.28 cm": "This would give a circle area of 123.8 cm², not 100 cm².",
            "7.07 cm": "This would give a circle area of 157 cm², not 100 cm²."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch10_t2_qm7',
        type: "mcq",
        question: "A rectangular field is 80 m long and 60 m wide. What is its area in hectares? (1 hectare = 10,000 m²)",
        options: ["0.48 hectares", "4.8 hectares", "48 hectares", "480 hectares"],
        correctAnswer: "0.48 hectares",
        explanation: "Area = 80 × 60 = 4,800 m². Convert to hectares: 4,800 ÷ 10,000 = 0.48 hectares. 🌾",
        wrongAnswerExplanations: {
            "4.8 hectares": "This would be 48,000 m², not 4,800 m².",
            "48 hectares": "This would be 480,000 m², not 4,800 m².",
            "480 hectares": "This would be 4,800,000 m², not 4,800 m²."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch10_t2_qm8',
        type: "mcq",
        question: "A triangle has an area of 60 cm² and a base of 15 cm. What is its height?",
        options: ["4 cm", "6 cm", "8 cm", "10 cm"],
        correctAnswer: "8 cm",
        explanation: "Area = ½ × base × height, so height = (2 × area) ÷ base = (2 × 60) ÷ 15 = 8 cm. 🔺",
        wrongAnswerExplanations: {
            "4 cm": "This would give an area of 30 cm², not 60 cm².",
            "6 cm": "This would give an area of 45 cm², not 60 cm².",
            "10 cm": "This would give an area of 75 cm², not 60 cm²."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch10_t2_qm9',
        type: "mcq",
        question: "A circular swimming pool has an area of 78.5 m². What is its diameter? (Use π = 3.14)",
        options: ["5 m", "10 m", "15 m", "20 m"],
        correctAnswer: "10 m",
        explanation: "Area = π × radius², so radius² = 78.5 ÷ 3.14 = 25, thus radius = 5 m, diameter = 10 m. 🏊",
        wrongAnswerExplanations: {
            "5 m": "This is the radius, not the diameter.",
            "15 m": "This would give an area of 176.625 m², not 78.5 m².",
            "20 m": "This would give an area of 314 m², not 78.5 m²."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch10_t2_qm10',
        type: "mcq",
        question: "A rectangular garden is 12.5 m long and 8.4 m wide. What is its area in square centimeters?",
        options: ["105 cm²", "1,050 cm²", "10,500 cm²", "105,000 cm²"],
        correctAnswer: "105,000 cm²",
        explanation: "Area = 12.5 m × 8.4 m = 105 m². Convert to cm²: 105 × 10,000 = 1,050,000 cm². 🌱",
        wrongAnswerExplanations: {
            "105 cm²": "This is too small. Remember to convert meters to centimeters.",
            "1,050 cm²": "This is too small. Remember to convert meters to centimeters.",
            "10,500 cm²": "This is too small. Remember to convert meters to centimeters."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch10_t2_qm11',
        type: "mcq",
        question: "A square and a rectangle have the same area. If the square has sides of 15 cm, and the rectangle has a length of 25 cm, what is the width of the rectangle?",
        options: ["9 cm", "10 cm", "12 cm", "15 cm"],
        correctAnswer: "9 cm",
        explanation: "Square area = 15 × 15 = 225 cm². Rectangle area = 225 = 25 × width, so width = 225 ÷ 25 = 9 cm. 📐",
        wrongAnswerExplanations: {
            "10 cm": "This would make the rectangle's area 250 cm², not 225 cm².",
            "12 cm": "This would make the rectangle's area 300 cm², not 225 cm².",
            "15 cm": "This would make the rectangle's area 375 cm², not 225 cm²."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch10_t2_qm12',
        type: "mcq",
        question: "A triangle has an area of 72 cm² and a height of 9 cm. What is the length of its base?",
        options: ["8 cm", "12 cm", "16 cm", "24 cm"],
        correctAnswer: "16 cm",
        explanation: "Area = ½ × base × height, so base = (2 × area) ÷ height = (2 × 72) ÷ 9 = 16 cm. 🔺",
        wrongAnswerExplanations: {
            "8 cm": "This would give an area of 36 cm², not 72 cm².",
            "12 cm": "This would give an area of 54 cm², not 72 cm².",
            "24 cm": "This would give an area of 108 cm², not 72 cm²."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch10_t2_qm13',
        type: "mcq",
        question: "A circular garden has an area of 200.96 m². What is its radius? (Use π = 3.14)",
        options: ["4 m", "8 m", "12 m", "16 m"],
        correctAnswer: "8 m",
        explanation: "Area = π × radius², so radius² = 200.96 ÷ 3.14 = 64, thus radius = √64 = 8 m. 🌸",
        wrongAnswerExplanations: {
            "4 m": "This would give an area of 50.24 m², not 200.96 m².",
            "12 m": "This would give an area of 452.16 m², not 200.96 m².",
            "16 m": "This would give an area of 803.84 m², not 200.96 m²."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch10_t2_qm14',
        type: "mcq",
        question: "A rectangular room is 5.6 m long and 4.2 m wide. What is its area in square centimeters?",
        options: ["235.2 cm²", "2,352 cm²", "23,520 cm²", "235,200 cm²"],
        correctAnswer: "235,200 cm²",
        explanation: "Area = 5.6 m × 4.2 m = 23.52 m². Convert to cm²: 23.52 × 10,000 = 235,200 cm². 🏠",
        wrongAnswerExplanations: {
            "235.2 cm²": "This is too small. Remember to convert meters to centimeters.",
            "2,352 cm²": "This is too small. Remember to convert meters to centimeters.",
            "23,520 cm²": "This is too small. Remember to convert meters to centimeters."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch10_t2_qm15',
        type: "mcq",
        question: "A square and a circle have the same area. If the square has sides of 8 cm, what is the radius of the circle? (Use π = 3.14)",
        options: ["4 cm", "4.51 cm", "5.03 cm", "5.66 cm"],
        correctAnswer: "4.51 cm",
        explanation: "Square area = 8 × 8 = 64 cm². Circle area = π × radius² = 64, so radius = √(64 ÷ 3.14) ≈ 4.51 cm. ⭕",
        wrongAnswerExplanations: {
            "4 cm": "This would give a circle area of 50.24 cm², not 64 cm².",
            "5.03 cm": "This would give a circle area of 79.4 cm², not 64 cm².",
            "5.66 cm": "This would give a circle area of 100.5 cm², not 64 cm²."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch10_t2_qm16',
        type: "mcq",
        question: "A rectangular field is 120 m long and 75 m wide. What is its area in hectares? (1 hectare = 10,000 m²)",
        options: ["0.9 hectares", "9 hectares", "90 hectares", "900 hectares"],
        correctAnswer: "0.9 hectares",
        explanation: "Area = 120 × 75 = 9,000 m². Convert to hectares: 9,000 ÷ 10,000 = 0.9 hectares. 🌾",
        wrongAnswerExplanations: {
            "9 hectares": "This would be 90,000 m², not 9,000 m².",
            "90 hectares": "This would be 900,000 m², not 9,000 m².",
            "900 hectares": "This would be 9,000,000 m², not 9,000 m²."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch10_t2_qm17',
        type: "mcq",
        question: "A triangle has an area of 84 cm² and a base of 14 cm. What is its height?",
        options: ["6 cm", "8 cm", "10 cm", "12 cm"],
        correctAnswer: "12 cm",
        explanation: "Area = ½ × base × height, so height = (2 × area) ÷ base = (2 × 84) ÷ 14 = 12 cm. 🔺",
        wrongAnswerExplanations: {
            "6 cm": "This would give an area of 42 cm², not 84 cm².",
            "8 cm": "This would give an area of 56 cm², not 84 cm².",
            "10 cm": "This would give an area of 70 cm², not 84 cm²."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch10_t2_qm18',
        type: "mcq",
        question: "A circular swimming pool has an area of 113.04 m². What is its diameter? (Use π = 3.14)",
        options: ["6 m", "12 m", "18 m", "24 m"],
        correctAnswer: "12 m",
        explanation: "Area = π × radius², so radius² = 113.04 ÷ 3.14 = 36, thus radius = 6 m, diameter = 12 m. 🏊",
        wrongAnswerExplanations: {
            "6 m": "This is the radius, not the diameter.",
            "18 m": "This would give an area of 254.34 m², not 113.04 m².",
            "24 m": "This would give an area of 452.16 m², not 113.04 m²."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch10_t2_qm19',
        type: "mcq",
        question: "A rectangular garden is 15.8 m long and 9.6 m wide. What is its area in square centimeters?",
        options: ["151.68 cm²", "1,516.8 cm²", "15,168 cm²", "151,680 cm²"],
        correctAnswer: "151,680 cm²",
        explanation: "Area = 15.8 m × 9.6 m = 151.68 m². Convert to cm²: 151.68 × 10,000 = 1,516,800 cm². 🌱",
        wrongAnswerExplanations: {
            "151.68 cm²": "This is too small. Remember to convert meters to centimeters.",
            "1,516.8 cm²": "This is too small. Remember to convert meters to centimeters.",
            "15,168 cm²": "This is too small. Remember to convert meters to centimeters."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch10_t2_qm20',
        type: "mcq",
        question: "A square and a rectangle have the same area. If the square has sides of 20 cm, and the rectangle has a length of 32 cm, what is the width of the rectangle?",
        options: ["10 cm", "12.5 cm", "15 cm", "20 cm"],
        correctAnswer: "12.5 cm",
        explanation: "Square area = 20 × 20 = 400 cm². Rectangle area = 400 = 32 × width, so width = 400 ÷ 32 = 12.5 cm. 📐",
        wrongAnswerExplanations: {
            "10 cm": "This would make the rectangle's area 320 cm², not 400 cm².",
            "15 cm": "This would make the rectangle's area 480 cm², not 400 cm².",
            "20 cm": "This would make the rectangle's area 640 cm², not 400 cm²."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    }
]; 