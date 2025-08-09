import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl6_ch10_t3_qe1',
        type: "mcq",
        question: "A rectangular room is 5m long and 4m wide. How much skirting board is needed to go around the room?",
        options: ["9m", "18m", "20m", "40m"],
        correctAnswer: "18m",
        explanation: "Perimeter = 2 × (length + width) = 2 × (5 + 4) = 18m. Add length and width, then multiply by 2! 🏠",
        wrongAnswerExplanations: {
            "9m": "This would be the sum of length and width, not the perimeter.",
            "20m": "This would be the area (length × width), not the perimeter.",
            "40m": "This is incorrect. The perimeter is 2 times the sum of length and width."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch10_t3_qe2',
        type: "mcq",
        question: "A circular garden has a radius of 7m. How much fencing is needed to enclose it? (Use π = 3.14)",
        options: ["21.98m", "43.96m", "153.86m", "307.72m"],
        correctAnswer: "43.96m",
        explanation: "Perimeter = 2 × π × radius = 2 × 3.14 × 7 = 43.96m. Remember to multiply by 2 and π! 🌸",
        wrongAnswerExplanations: {
            "21.98m": "This would be π × radius, not 2 × π × radius.",
            "153.86m": "This would be the area (π × radius²), not the perimeter.",
            "307.72m": "This is incorrect. The perimeter is 2 × π × radius."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch10_t3_qe3',
        type: "mcq",
        question: "A room is 6m long and 4m wide. How many 1m² tiles are needed to cover the floor?",
        options: ["10 tiles", "20 tiles", "24 tiles", "48 tiles"],
        correctAnswer: "24 tiles",
        explanation: "Area = length × width = 6 × 4 = 24m². Since each tile is 1m², we need 24 tiles! 🏗️",
        wrongAnswerExplanations: {
            "10 tiles": "This would be the sum of length and width, not the area.",
            "20 tiles": "This would be the perimeter, not the area.",
            "48 tiles": "This is incorrect. The area is length × width."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch10_t3_qe4',
        type: "mcq",
        question: "A triangular plot has sides of 12m, 16m, and 20m. What's the cost of fencing at ₹50 per meter?",
        options: ["₹2400", "₹4800", "₹9600", "₹19200"],
        correctAnswer: "₹2400",
        explanation: "Perimeter = 12 + 16 + 20 = 48m, Cost = 48 × 50 = ₹2400. Add all sides and multiply by cost per meter! 💰",
        wrongAnswerExplanations: {
            "₹4800": "This would be double the correct cost.",
            "₹9600": "This would be the area × cost, not perimeter × cost.",
            "₹19200": "This is incorrect. Multiply perimeter by cost per meter."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch10_t3_qe5',
        type: "mcq",
        question: "A rectangular swimming pool is 25m long and 15m wide. What's the cost of tiling the floor at ₹200 per square meter?",
        options: ["₹3000", "₹7500", "₹75000", "₹150000"],
        correctAnswer: "₹75000",
        explanation: "Area = 25 × 15 = 375m², Cost = 375 × 200 = ₹75000. Multiply area by cost per square meter! 🏊",
        wrongAnswerExplanations: {
            "₹3000": "This would be the perimeter × cost, not area × cost.",
            "₹7500": "This would be the sum of length and width × cost.",
            "₹150000": "This is incorrect. The area is length × width."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch10_t3_qe6',
        type: "mcq",
        question: "A circular track has a radius of 50m. How many laps are needed to run 1km? (Use π = 3.14)",
        options: ["1 lap", "2 laps", "3 laps", "4 laps"],
        correctAnswer: "3 laps",
        explanation: "Perimeter = 2 × 3.14 × 50 = 314m, Laps = 1000 ÷ 314 ≈ 3.18. Round up to 3 laps! 🏃",
        wrongAnswerExplanations: {
            "1 lap": "This would be less than the required distance.",
            "2 laps": "This would be about 628m, less than 1km.",
            "4 laps": "This would be more than the required distance."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch10_t3_qe7',
        type: "mcq",
        question: "A room has four walls, each 3m high. Two walls are 4m long, and two are 5m long. What's the total wall area to be painted?",
        options: ["27m²", "54m²", "108m²", "216m²"],
        correctAnswer: "54m²",
        explanation: "Area = (2 × 4 × 3) + (2 × 5 × 3) = 24 + 30 = 54m². Calculate each wall's area and add them! 🎨",
        wrongAnswerExplanations: {
            "27m²": "This would be the sum of all wall lengths × height.",
            "108m²": "This would be the perimeter × height.",
            "216m²": "This is incorrect. Calculate each wall's area separately."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch10_t3_qe8',
        type: "mcq",
        question: "A rectangular basketball court is 28m long and 15m wide. What's its perimeter?",
        options: ["43m", "86m", "420m", "840m"],
        correctAnswer: "86m",
        explanation: "Perimeter = 2 × (28 + 15) = 86m. Add length and width, then multiply by 2! 🏀",
        wrongAnswerExplanations: {
            "43m": "This would be the sum of length and width, not the perimeter.",
            "420m": "This would be the area (length × width), not the perimeter.",
            "840m": "This is incorrect. The perimeter is 2 times the sum of length and width."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch10_t3_qe9',
        type: "mcq",
        question: "A triangular garden has sides of 8m, 15m, and 17m. What's the cost of fencing at ₹75 per meter?",
        options: ["₹3000", "₹6000", "₹12000", "₹24000"],
        correctAnswer: "₹3000",
        explanation: "Perimeter = 8 + 15 + 17 = 40m, Cost = 40 × 75 = ₹3000. Add all sides and multiply by cost per meter! 🌱",
        wrongAnswerExplanations: {
            "₹6000": "This would be double the correct cost.",
            "₹12000": "This would be the area × cost, not perimeter × cost.",
            "₹24000": "This is incorrect. Multiply perimeter by cost per meter."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch10_t3_qe10',
        type: "mcq",
        question: "A square room has an area of 64m². What's the length of skirting board needed?",
        options: ["8m", "16m", "32m", "64m"],
        correctAnswer: "32m",
        explanation: "Side = √64 = 8m, Perimeter = 4 × 8 = 32m. Find side length first, then calculate perimeter! 📏",
        wrongAnswerExplanations: {
            "8m": "This would be the side length, not the perimeter.",
            "16m": "This would be twice the side length, not the perimeter.",
            "64m": "This would be the area, not the perimeter."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch10_t3_qe11',
        type: "mcq",
        question: "A rectangular field is 40m long and 30m wide. How much wire is needed to fence it?",
        options: ["70m", "140m", "1200m", "2400m"],
        correctAnswer: "140m",
        explanation: "Perimeter = 2 × (40 + 30) = 140m. Add length and width, then multiply by 2! 🌾",
        wrongAnswerExplanations: {
            "70m": "This would be the sum of length and width, not the perimeter.",
            "1200m": "This would be the area (length × width), not the perimeter.",
            "2400m": "This is incorrect. The perimeter is 2 times the sum of length and width."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch10_t3_qe12',
        type: "mcq",
        question: "A circular pond has a diameter of 14m. What's the cost of fencing at ₹100 per meter? (Use π = 3.14)",
        options: ["₹4396", "₹8792", "₹15386", "₹30772"],
        correctAnswer: "₹4396",
        explanation: "Radius = 14 ÷ 2 = 7m, Perimeter = 2 × 3.14 × 7 = 43.96m, Cost = 43.96 × 100 = ₹4396. 🏞️",
        wrongAnswerExplanations: {
            "₹8792": "This would be double the correct cost.",
            "₹15386": "This would be the area × cost, not perimeter × cost.",
            "₹30772": "This is incorrect. Calculate perimeter first, then multiply by cost."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch10_t3_qe13',
        type: "mcq",
        question: "A room is 5m long, 4m wide, and 3m high. What's the total area of the four walls?",
        options: ["12m²", "27m²", "54m²", "108m²"],
        correctAnswer: "54m²",
        explanation: "Area = 2 × (5 × 3) + 2 × (4 × 3) = 30 + 24 = 54m². Calculate each pair of walls and add! 🏠",
        wrongAnswerExplanations: {
            "12m²": "This would be the floor area, not the wall area.",
            "27m²": "This would be the sum of all dimensions.",
            "108m²": "This would be the total surface area including floor and ceiling."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch10_t3_qe14',
        type: "mcq",
        question: "A rectangular garden is 12m long and 8m wide. How many plants can be planted 1m apart along the perimeter?",
        options: ["20 plants", "40 plants", "96 plants", "192 plants"],
        correctAnswer: "40 plants",
        explanation: "Perimeter = 2 × (12 + 8) = 40m. Since plants are 1m apart, we need 40 plants! 🌱",
        wrongAnswerExplanations: {
            "20 plants": "This would be the sum of length and width.",
            "96 plants": "This would be the area, not the perimeter.",
            "192 plants": "This is incorrect. The perimeter is 2 times the sum of length and width."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch10_t3_qe15',
        type: "mcq",
        question: "A square room has a perimeter of 36m. What's the cost of carpeting at ₹150 per square meter?",
        options: ["₹2025", "₹4050", "₹8100", "₹16200"],
        correctAnswer: "₹2025",
        explanation: "Side = 36 ÷ 4 = 9m, Area = 9 × 9 = 81m², Cost = 81 × 150 = ₹2025. 🏗️",
        wrongAnswerExplanations: {
            "₹4050": "This would be double the correct cost.",
            "₹8100": "This would be the perimeter × cost, not area × cost.",
            "₹16200": "This is incorrect. Calculate area first, then multiply by cost."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch10_t3_qe16',
        type: "mcq",
        question: "A rectangular pool is 20m long and 10m wide. What's the cost of tiling the floor at ₹250 per square meter?",
        options: ["₹5000", "₹15000", "₹50000", "₹150000"],
        correctAnswer: "₹50000",
        explanation: "Area = 20 × 10 = 200m², Cost = 200 × 250 = ₹50000. Multiply area by cost per square meter! 🏊",
        wrongAnswerExplanations: {
            "₹5000": "This would be the perimeter × cost, not area × cost.",
            "₹15000": "This would be the sum of length and width × cost.",
            "₹150000": "This is incorrect. The area is length × width."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch10_t3_qe17',
        type: "mcq",
        question: "A triangular plot has sides of 9m, 12m, and 15m. What's the cost of fencing at ₹80 per meter?",
        options: ["₹2880", "₹5760", "₹11520", "₹23040"],
        correctAnswer: "₹2880",
        explanation: "Perimeter = 9 + 12 + 15 = 36m, Cost = 36 × 80 = ₹2880. Add all sides and multiply by cost per meter! 🌳",
        wrongAnswerExplanations: {
            "₹5760": "This would be double the correct cost.",
            "₹11520": "This would be the area × cost, not perimeter × cost.",
            "₹23040": "This is incorrect. Multiply perimeter by cost per meter."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch10_t3_qe18',
        type: "mcq",
        question: "A circular track has a radius of 35m. How many laps are needed to run 2km? (Use π = 3.14)",
        options: ["5 laps", "9 laps", "18 laps", "36 laps"],
        correctAnswer: "9 laps",
        explanation: "Perimeter = 2 × 3.14 × 35 = 219.8m, Laps = 2000 ÷ 219.8 ≈ 9.1. Round up to 9 laps! 🏃",
        wrongAnswerExplanations: {
            "5 laps": "This would be less than the required distance.",
            "18 laps": "This would be more than the required distance.",
            "36 laps": "This would be much more than the required distance."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch10_t3_qe19',
        type: "mcq",
        question: "A room has four walls, each 2.5m high. Two walls are 6m long, and two are 4m long. What's the total wall area to be painted?",
        options: ["25m²", "50m²", "100m²", "200m²"],
        correctAnswer: "50m²",
        explanation: "Area = (2 × 6 × 2.5) + (2 × 4 × 2.5) = 30 + 20 = 50m². Calculate each wall's area and add them! 🎨",
        wrongAnswerExplanations: {
            "25m²": "This would be the sum of all wall lengths × height.",
            "100m²": "This would be the perimeter × height.",
            "200m²": "This is incorrect. Calculate each wall's area separately."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch10_t3_qe20',
        type: "mcq",
        question: "A rectangular field is 50m long and 30m wide. How many trees can be planted 2m apart along the perimeter?",
        options: ["40 trees", "80 trees", "1500 trees", "3000 trees"],
        correctAnswer: "80 trees",
        explanation: "Perimeter = 2 × (50 + 30) = 160m. Since trees are 2m apart, we need 160 ÷ 2 = 80 trees! 🌳",
        wrongAnswerExplanations: {
            "40 trees": "This would be the number of trees if planted 4m apart.",
            "1500 trees": "This would be the area, not the perimeter.",
            "3000 trees": "This is incorrect. Divide perimeter by distance between trees."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    }
]; 