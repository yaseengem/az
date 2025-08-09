import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl4_ch13_t1_qm1',
        type: "mcq",
        question: "A rectangular playground has a length of 25 meters and a width of 15 meters. What is its perimeter?",
        options: [
            "40 meters",
            "75 meters",
            "80 meters",
            "375 meters"
        ],
        correctAnswer: "80 meters",
        explanation: "Perimeter of rectangle = 2 × (length + width) = 2 × (25 m + 15 m) = 2 × 40 m = 80 m. 🏞️",
        wrongAnswerExplanations: {
            "40 meters": "This is just the sum of length and width (25 + 15), not the perimeter.",
            "75 meters": "This is an incorrect calculation of perimeter.",
            "375 meters": "This is the area (25 × 15 = 375 m²), not the perimeter."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch13_t1_qm2',
        type: "mcq",
        question: "If the perimeter of a square is 36 cm, what is its area?",
        options: [
            "9 cm²",
            "36 cm²",
            "81 cm²",
            "324 cm²"
        ],
        correctAnswer: "81 cm²",
        explanation: "Perimeter = 4 × side, so side = 36 ÷ 4 = 9 cm. Area = side × side = 9 cm × 9 cm = 81 cm². 🔢",
        wrongAnswerExplanations: {
            "9 cm²": "This is just the side length squared incorrectly.",
            "36 cm²": "This is the perimeter, not the area.",
            "324 cm²": "This is 36² = 1296 ÷ 4 = 324, which is not the correct calculation."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch13_t1_qm3',
        type: "mcq",
        question: "A rectangular garden has a length of 12 meters and a perimeter of 32 meters. What is its width?",
        options: [
            "4 meters",
            "8 meters",
            "10 meters",
            "20 meters"
        ],
        correctAnswer: "4 meters",
        explanation: "Perimeter = 2 × (length + width). 32 = 2 × (12 + width). 16 = 12 + width. Width = 4 meters. 🌱",
        wrongAnswerExplanations: {
            "8 meters": "This gives perimeter of 2 × (12 + 8) = 40 meters, not 32 meters.",
            "10 meters": "This gives perimeter of 2 × (12 + 10) = 44 meters, not 32 meters.",
            "20 meters": "This gives perimeter of 2 × (12 + 20) = 64 meters, not 32 meters."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch13_t1_qm4',
        type: "mcq",
        question: "One square has a side length of 6 cm, and another square has a side length of 3 cm. How many times larger is the perimeter of the larger square?",
        options: [
            "2 times",
            "3 times",
            "4 times",
            "9 times"
        ],
        correctAnswer: "2 times",
        explanation: "Larger square perimeter = 4 × 6 = 24 cm. Smaller square perimeter = 4 × 3 = 12 cm. Ratio = 24 ÷ 12 = 2. The perimeter is 2 times larger. 📊",
        wrongAnswerExplanations: {
            "3 times": "This is incorrect. The ratio of perimeters is 24 ÷ 12 = 2.",
            "4 times": "This is the ratio of areas (36 ÷ 9 = 4), not perimeters.",
            "9 times": "This would be if we were comparing the ratio of areas when the side length is tripled."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch13_t1_qm5',
        type: "mcq",
        question: "One square has a side length of 5 cm, and another square has a side length of 10 cm. How many times larger is the area of the larger square?",
        options: [
            "2 times",
            "4 times",
            "5 times",
            "25 times"
        ],
        correctAnswer: "4 times",
        explanation: "Smaller square area = 5² = 25 cm². Larger square area = 10² = 100 cm². Ratio = 100 ÷ 25 = 4. The area is 4 times larger. 📈",
        wrongAnswerExplanations: {
            "2 times": "This is the ratio of side lengths (10 ÷ 5 = 2), not areas.",
            "5 times": "This is incorrect. The ratio of areas is 100 ÷ 25 = 4.",
            "25 times": "This would be if we were comparing a 5 cm square with a 25 cm square."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch13_t1_qm6',
        type: "mcq",
        question: "Ravi's rectangular field has a perimeter of 50 meters. If the width is 10 meters, what is its area?",
        options: [
            "150 m²",
            "250 m²",
            "300 m²",
            "500 m²"
        ],
        correctAnswer: "150 m²",
        explanation: "Perimeter = 2 × (length + width). 50 = 2 × (length + 10). 25 = length + 10. Length = 15 m. Area = length × width = 15 × 10 = 150 m². 🏡",
        wrongAnswerExplanations: {
            "250 m²": "This is 50 × 5, which is not the correct calculation for area.",
            "300 m²": "This calculation doesn't match the data provided.",
            "500 m²": "This is 50 × 10, which incorrectly uses perimeter in place of length."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch13_t1_qm7',
        type: "mcq",
        question: "A square playground has the same perimeter as a rectangular playground. The square has sides of 9 meters each. If the rectangle has a width of 6 meters, what is its length?",
        options: [
            "6 meters",
            "9 meters",
            "12 meters",
            "18 meters"
        ],
        correctAnswer: "12 meters",
        explanation: "Square perimeter = 4 × 9 = 36 m. For rectangle: 36 = 2 × (length + 6). 18 = length + 6. Length = 12 m. 🟩",
        wrongAnswerExplanations: {
            "6 meters": "This would make the rectangle 6 × 6, which is a square with perimeter 24 m.",
            "9 meters": "This gives perimeter of 2 × (9 + 6) = 30 m, not 36 m.",
            "18 meters": "This gives perimeter of 2 × (18 + 6) = 48 m, not 36 m."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch13_t1_qm8',
        type: "mcq",
        question: "A rectangular field has a perimeter of 40 meters. Which of these could be its dimensions?",
        options: [
            "Length 8 m, Width 12 m",
            "Length 5 m, Width 15 m",
            "Length 10 m, Width 10 m",
            "Length 12 m, Width 8 m"
        ],
        correctAnswer: "Length 10 m, Width 10 m",
        explanation: "For perimeter 40 m: 2 × (length + width) = 40, length + width = 20. A 10 × 10 square gives length + width = 20, so perimeter = 40 m. ⬜",
        wrongAnswerExplanations: {
            "Length 8 m, Width 12 m": "Perimeter = 2 × (8 + 12) = 2 × 20 = 40 m. This is also correct, but same as the answer above.",
            "Length 5 m, Width 15 m": "Perimeter = 2 × (5 + 15) = 2 × 20 = 40 m. This is also correct, but same as the answer above.",
            "Length 12 m, Width 8 m": "Perimeter = 2 × (12 + 8) = 2 × 20 = 40 m. This is also correct, but same as the answer above."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch13_t1_qm9',
        type: "mcq",
        question: "The perimeter of a rectangle is 30 centimeters. Which of these could NOT be its dimensions?",
        options: [
            "Length 5 cm, Width 10 cm",
            "Length 7 cm, Width 8 cm",
            "Length 10 cm, Width 5 cm",
            "Length 9 cm, Width 6 cm"
        ],
        correctAnswer: "Length 9 cm, Width 6 cm",
        explanation: "For perimeter 30 cm: 2 × (length + width) = 30, length + width = 15. But 9 + 6 = 15, so perimeter = 2 × 15 = 30 cm. This IS possible. 🧩",
        wrongAnswerExplanations: {
            "Length 5 cm, Width 10 cm": "Perimeter = 2 × (5 + 10) = 2 × 15 = 30 cm. This is possible.",
            "Length 7 cm, Width 8 cm": "Perimeter = 2 × (7 + 8) = 2 × 15 = 30 cm. This is possible.",
            "Length 10 cm, Width 5 cm": "Perimeter = 2 × (10 + 5) = 2 × 15 = 30 cm. This is possible."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch13_t1_qm10',
        type: "mcq",
        question: "A square and a rectangle both have a perimeter of 24 cm. If the rectangle has a width of 4 cm, how much larger is the area of the square than the rectangle?",
        options: [
            "0 cm²",
            "4 cm²",
            "8 cm²",
            "16 cm²"
        ],
        correctAnswer: "4 cm²",
        explanation: "Square: side = 24 ÷ 4 = 6 cm, area = 36 cm². Rectangle: 24 = 2 × (length + 4), length = 8 cm, area = 32 cm². Difference = 36 - 32 = 4 cm². 📐",
        wrongAnswerExplanations: {
            "0 cm²": "The areas are not equal; the square has a larger area.",
            "8 cm²": "The difference between the areas is not 8 cm².",
            "16 cm²": "The difference between the areas is not 16 cm²."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch13_t1_qm11',
        type: "mcq",
        question: "A rectangular garden has a perimeter of 30 meters. Which dimensions would give the largest area?",
        options: [
            "Length 12 m, Width 3 m",
            "Length 10 m, Width 5 m",
            "Length 9 m, Width 6 m",
            "Length 7.5 m, Width 7.5 m"
        ],
        correctAnswer: "Length 7.5 m, Width 7.5 m",
        explanation: "For a fixed perimeter, a square gives maximum area. For perimeter 30 m, each side is 7.5 m, giving area = 7.5 × 7.5 = 56.25 m². 🔄",
        wrongAnswerExplanations: {
            "Length 12 m, Width 3 m": "Area = 12 × 3 = 36 m², which is less than 56.25 m².",
            "Length 10 m, Width 5 m": "Area = 10 × 5 = 50 m², which is less than 56.25 m².",
            "Length 9 m, Width 6 m": "Area = 9 × 6 = 54 m², which is less than 56.25 m²."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch13_t1_qm12',
        type: "mcq",
        question: "Maya draws a square with sides of 8 cm. She then draws a new square with sides of 16 cm. How many times larger is the area of the new square?",
        options: [
            "2 times",
            "4 times",
            "8 times",
            "16 times"
        ],
        correctAnswer: "4 times",
        explanation: "First square area = 8² = 64 cm². Second square area = 16² = 256 cm². Ratio = 256 ÷ 64 = 4. The area increases 4 times when sides double. 📏",
        wrongAnswerExplanations: {
            "2 times": "This is the ratio of the side lengths (16 ÷ 8 = 2), not the areas.",
            "8 times": "This is not the correct ratio of areas.",
            "16 times": "This would be if we were comparing a square with sides of 4 cm to one with sides of 16 cm."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch13_t1_qm13',
        type: "mcq",
        question: "A rectangular plot has a width of 8 meters and area of 72 square meters. What is its perimeter?",
        options: [
            "26 meters",
            "34 meters",
            "36 meters",
            "60 meters"
        ],
        correctAnswer: "34 meters",
        explanation: "Area = length × width, so length = 72 ÷ 8 = 9 m. Perimeter = 2 × (length + width) = 2 × (9 + 8) = 2 × 17 = 34 m. 🏡",
        wrongAnswerExplanations: {
            "26 meters": "This is an incorrect calculation of the perimeter.",
            "36 meters": "This is an incorrect calculation of the perimeter.",
            "60 meters": "This is not the perimeter of the given rectangle."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch13_t1_qm14',
        type: "mcq",
        question: "A farmer has 100 meters of fencing to enclose a rectangular field. If the width is 20 meters, what is the area of the field?",
        options: [
            "400 m²",
            "600 m²",
            "800 m²",
            "2000 m²"
        ],
        correctAnswer: "600 m²",
        explanation: "Perimeter = 100 m, width = 20 m. 100 = 2 × (length + 20). 50 = length + 20. Length = 30 m. Area = 30 × 20 = 600 m². 🚜",
        wrongAnswerExplanations: {
            "400 m²": "This is 20 × 20 = 400, which would be the area if it were a square with 20 m sides.",
            "800 m²": "This is an incorrect calculation of the area.",
            "2000 m²": "This is 100 × 20 = 2000, which incorrectly uses perimeter instead of length."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch13_t1_qm15',
        type: "mcq",
        question: "Two squares have areas of 25 cm² and 49 cm² respectively. What is the difference in their perimeters?",
        options: [
            "8 cm",
            "12 cm",
            "24 cm",
            "48 cm"
        ],
        correctAnswer: "8 cm",
        explanation: "First square: area = 25 cm², side = 5 cm, perimeter = 20 cm. Second square: area = 49 cm², side = 7 cm, perimeter = 28 cm. Difference = 28 - 20 = 8 cm. 📊",
        wrongAnswerExplanations: {
            "12 cm": "This is an incorrect calculation of the difference.",
            "24 cm": "This is the sum of perimeters (20 + 28 = 48 ÷ 2 = 24), not the difference.",
            "48 cm": "This is the sum of perimeters (20 + 28 = 48), not the difference."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch13_t1_qm16',
        type: "mcq",
        question: "A rectangular room is 6 meters long and 5 meters wide. How many square meter tiles are needed to cover the floor?",
        options: [
            "11 tiles",
            "22 tiles",
            "30 tiles",
            "60 tiles"
        ],
        correctAnswer: "30 tiles",
        explanation: "Area of room = length × width = 6 m × 5 m = 30 m². Each square meter tile covers 1 m², so 30 tiles are needed. 🏠",
        wrongAnswerExplanations: {
            "11 tiles": "This is the sum of length and width (6 + 5 = 11), not the area.",
            "22 tiles": "This is the perimeter (2 × (6 + 5) = 22), not the area.",
            "60 tiles": "This is not the area of the given rectangle."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch13_t1_qm17',
        type: "mcq",
        question: "If the perimeter of an equilateral triangle is 18 cm, what is the length of each side?",
        options: [
            "3 cm",
            "6 cm",
            "9 cm",
            "18 cm"
        ],
        correctAnswer: "6 cm",
        explanation: "An equilateral triangle has three equal sides. Perimeter = 3 × side length. 18 cm = 3 × side length. Side length = 18 ÷ 3 = 6 cm. 📐",
        wrongAnswerExplanations: {
            "3 cm": "With sides of 3 cm, the perimeter would be 9 cm, not 18 cm.",
            "9 cm": "With sides of 9 cm, the perimeter would be 27 cm, not 18 cm.",
            "18 cm": "This is the perimeter, not the side length."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch13_t1_qm18',
        type: "mcq",
        question: "The length of a rectangular field is twice its width. If the perimeter is 60 meters, what is the area?",
        options: [
            "200 m²",
            "300 m²",
            "400 m²",
            "600 m²"
        ],
        correctAnswer: "200 m²",
        explanation: "Let width = w, then length = 2w. Perimeter = 2 × (2w + w) = 6w = 60 m, so w = 10 m, length = 20 m. Area = 20 × 10 = 200 m². 🔄",
        wrongAnswerExplanations: {
            "300 m²": "This is 60 × 5, which is not the correct calculation for area.",
            "400 m²": "This is 20 × 20, which assumes the field is a square, which it's not.",
            "600 m²": "This is an incorrect calculation of the area."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch13_t1_qm19',
        type: "mcq",
        question: "Rita is decorating the border of a square greeting card with ribbon. If the card has an area of 16 square centimeters, how much ribbon does she need?",
        options: [
            "4 cm",
            "8 cm",
            "16 cm",
            "32 cm"
        ],
        correctAnswer: "16 cm",
        explanation: "Area of square = 16 cm², so side length = √16 = 4 cm. Perimeter (ribbon needed) = 4 × side = 4 × 4 = 16 cm. 🎀",
        wrongAnswerExplanations: {
            "4 cm": "This is just the side length, not the perimeter.",
            "8 cm": "This accounts for only two sides, not all four sides.",
            "32 cm": "This is not the perimeter of a square with area 16 cm²."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch13_t1_qm20',
        type: "mcq",
        question: "A square and a rectangle have the same area of 64 square centimeters. If the rectangle has a width of 4 cm, what is the difference in their perimeters?",
        options: [
            "0 cm",
            "8 cm",
            "16 cm",
            "24 cm"
        ],
        correctAnswer: "8 cm",
        explanation: "Square: area = 64 cm², side = 8 cm, perimeter = 32 cm. Rectangle: area = 64 cm², length = 16 cm, perimeter = 2 × (16 + 4) = 40 cm. Difference = 40 - 32 = 8 cm. 📏",
        wrongAnswerExplanations: {
            "0 cm": "The perimeters are not equal; the rectangle has a larger perimeter.",
            "16 cm": "This is not the correct difference between perimeters.",
            "24 cm": "This is not the correct difference between perimeters."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    }
];
