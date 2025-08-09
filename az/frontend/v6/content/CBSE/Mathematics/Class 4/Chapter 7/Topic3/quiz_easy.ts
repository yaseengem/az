import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl4_ch7_t3_qe1',
        type: "mcq",
        question: "How many milliliters are there in 1 liter?",
        options: ["10 mL", "100 mL", "1000 mL", "10000 mL"],
        correctAnswer: "1000 mL",
        explanation: "1 liter = 1000 milliliters. This is the standard conversion between liters and milliliters. 💧",
        wrongAnswerExplanations: {
            "10 mL": "This is incorrect. 1 liter is much more than 10 milliliters.",
            "100 mL": "This is incorrect. 1 liter equals 1000 milliliters, not 100 milliliters.",
            "10000 mL": "This is incorrect. 1 liter equals 1000 milliliters, not 10000 milliliters."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch7_t3_qe2',
        type: "mcq",
        question: "If Ravi has 3 liters of juice, how many milliliters of juice does he have?",
        options: ["300 mL", "3000 mL", "30 mL", "30000 mL"],
        correctAnswer: "3000 mL",
        explanation: "Since 1 liter = 1000 milliliters, 3 liters = 3 × 1000 = 3000 milliliters. 🧃",
        wrongAnswerExplanations: {
            "300 mL": "This is incorrect. 3 liters equals 3000 milliliters, not 300 milliliters.",
            "30 mL": "This is incorrect. 3 liters is much more than 30 milliliters.",
            "30000 mL": "This is incorrect. 3 liters equals 3000 milliliters, not 30000 milliliters."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch7_t3_qe3',
        type: "mcq",
        question: "How many liters are equal to 2000 milliliters?",
        options: ["2 L", "0.2 L", "20 L", "200 L"],
        correctAnswer: "2 L",
        explanation: "Since 1000 milliliters = 1 liter, 2000 milliliters = 2000 ÷ 1000 = 2 liters. 🚰",
        wrongAnswerExplanations: {
            "0.2 L": "This is incorrect. 2000 milliliters equals 2 liters, not 0.2 liters.",
            "20 L": "This is incorrect. 2000 milliliters equals 2 liters, not 20 liters.",
            "200 L": "This is incorrect. 2000 milliliters equals 2 liters, not 200 liters."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch7_t3_qe4',
        type: "mcq",
        question: "Anu has 500 milliliters of water. How many liters is this?",
        options: ["5 L", "50 L", "0.5 L", "0.05 L"],
        correctAnswer: "0.5 L",
        explanation: "To convert 500 milliliters to liters, divide by 1000: 500 ÷ 1000 = 0.5 liters. 💦",
        wrongAnswerExplanations: {
            "5 L": "This is incorrect. 500 milliliters equals 0.5 liters, not 5 liters.",
            "50 L": "This is incorrect. 500 milliliters equals 0.5 liters, not 50 liters.",
            "0.05 L": "This is incorrect. 500 milliliters equals 0.5 liters, not 0.05 liters."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch7_t3_qe5',
        type: "mcq",
        question: "Which is more: 1 liter or 900 milliliters?",
        options: ["1 liter", "900 milliliters", "Both are equal", "Cannot be compared"],
        correctAnswer: "1 liter",
        explanation: "1 liter = 1000 milliliters, which is more than 900 milliliters. Converting to the same unit helps comparison. 📏",
        wrongAnswerExplanations: {
            "900 milliliters": "This is incorrect. 1 liter equals 1000 milliliters, which is more than 900 milliliters.",
            "Both are equal": "This is incorrect. 1 liter (1000 milliliters) is more than 900 milliliters.",
            "Cannot be compared": "This is incorrect. We can compare by converting to the same unit."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch7_t3_qe6',
        type: "mcq",
        question: "A water bottle contains 750 milliliters of water. How many liters is this?",
        options: ["7.5 L", "0.75 L", "75 L", "0.075 L"],
        correctAnswer: "0.75 L",
        explanation: "To convert 750 milliliters to liters, divide by 1000: 750 ÷ 1000 = 0.75 liters. 🧴",
        wrongAnswerExplanations: {
            "7.5 L": "This is incorrect. 750 milliliters equals 0.75 liters, not 7.5 liters.",
            "75 L": "This is incorrect. 750 milliliters equals 0.75 liters, not 75 liters.",
            "0.075 L": "This is incorrect. 750 milliliters equals 0.75 liters, not 0.075 liters."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch7_t3_qe7',
        type: "mcq",
        question: "What is half of 1 liter in milliliters?",
        options: ["50 mL", "500 mL", "5000 mL", "100 mL"],
        correctAnswer: "500 mL",
        explanation: "Half of 1 liter = 0.5 liters. To convert to milliliters: 0.5 × 1000 = 500 milliliters. 🥛",
        wrongAnswerExplanations: {
            "50 mL": "This is incorrect. Half of 1 liter (500 milliliters) is much more than 50 milliliters.",
            "5000 mL": "This is incorrect. Half of 1 liter equals 500 milliliters, not 5000 milliliters.",
            "100 mL": "This is incorrect. Half of 1 liter equals 500 milliliters, not 100 milliliters."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch7_t3_qe8',
        type: "mcq",
        question: "If a recipe needs 2.5 liters of milk, how many milliliters is that?",
        options: ["250 mL", "2500 mL", "25 mL", "25000 mL"],
        correctAnswer: "2500 mL",
        explanation: "To convert 2.5 liters to milliliters, multiply by 1000: 2.5 × 1000 = 2500 milliliters. 🥛",
        wrongAnswerExplanations: {
            "250 mL": "This is incorrect. 2.5 liters equals 2500 milliliters, not 250 milliliters.",
            "25 mL": "This is incorrect. 2.5 liters equals 2500 milliliters, not 25 milliliters.",
            "25000 mL": "This is incorrect. 2.5 liters equals 2500 milliliters, not 25000 milliliters."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch7_t3_qe9',
        type: "mcq",
        question: "1.5 liters is equal to how many milliliters?",
        options: ["150 mL", "1500 mL", "15000 mL", "15 mL"],
        correctAnswer: "1500 mL",
        explanation: "To convert 1.5 liters to milliliters, multiply by 1000: 1.5 × 1000 = 1500 milliliters. 💧",
        wrongAnswerExplanations: {
            "150 mL": "This is incorrect. 1.5 liters equals 1500 milliliters, not 150 milliliters.",
            "15000 mL": "This is incorrect. 1.5 liters equals 1500 milliliters, not 15000 milliliters.",
            "15 mL": "This is incorrect. 1.5 liters equals 1500 milliliters, not 15 milliliters."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch7_t3_qe10',
        type: "mcq",
        question: "Mom used 250 milliliters of oil for cooking. How many liters of oil did she use?",
        options: ["2.5 L", "0.25 L", "25 L", "0.025 L"],
        correctAnswer: "0.25 L",
        explanation: "To convert 250 milliliters to liters, divide by 1000: 250 ÷ 1000 = 0.25 liters. 🍳",
        wrongAnswerExplanations: {
            "2.5 L": "This is incorrect. 250 milliliters equals 0.25 liters, not 2.5 liters.",
            "25 L": "This is incorrect. 250 milliliters equals 0.25 liters, not 25 liters.",
            "0.025 L": "This is incorrect. 250 milliliters equals 0.25 liters, not 0.025 liters."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch7_t3_qe11',
        type: "mcq",
        question: "How many 200 mL glasses can be filled from a 1-liter bottle of juice?",
        options: ["2 glasses", "5 glasses", "10 glasses", "20 glasses"],
        correctAnswer: "5 glasses",
        explanation: "Number of glasses = 1000 mL ÷ 200 mL = 5 glasses. Division helps us find how many smaller units fit into a larger unit. 🧃",
        wrongAnswerExplanations: {
            "2 glasses": "This is incorrect. From 1 liter (1000 milliliters), we can fill 5 glasses of 200 milliliters each.",
            "10 glasses": "This is incorrect. From 1 liter (1000 milliliters), we can fill 5 glasses of 200 milliliters each.",
            "20 glasses": "This is incorrect. From 1 liter (1000 milliliters), we can fill 5 glasses of 200 milliliters each."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch7_t3_qe12',
        type: "mcq",
        question: "Which is less: 350 mL or 0.4 L?",
        options: ["350 mL", "0.4 L", "Both are equal", "Cannot be compared"],
        correctAnswer: "350 mL",
        explanation: "Converting to the same unit: 0.4 L = 400 mL. Since 350 mL < 400 mL, 350 mL is less than 0.4 L. 📊",
        wrongAnswerExplanations: {
            "0.4 L": "This is incorrect. 0.4 liters equals 400 milliliters, which is more than 350 milliliters.",
            "Both are equal": "This is incorrect. 0.4 liters (400 milliliters) is not equal to 350 milliliters.",
            "Cannot be compared": "This is incorrect. We can compare by converting to the same unit."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch7_t3_qe13',
        type: "mcq",
        question: "A medicine bottle contains 100 mL of syrup. How many such bottles would make 1 liter?",
        options: ["10 bottles", "100 bottles", "1000 bottles", "0.1 bottles"],
        correctAnswer: "10 bottles",
        explanation: "Number of bottles = 1000 mL ÷ 100 mL = 10 bottles. This shows how to find the number of smaller units in a larger unit. 💊",
        wrongAnswerExplanations: {
            "100 bottles": "This is incorrect. To make 1 liter (1000 milliliters), we need 10 bottles of 100 milliliters each.",
            "1000 bottles": "This is incorrect. To make 1 liter (1000 milliliters), we need 10 bottles of 100 milliliters each.",
            "0.1 bottles": "This is incorrect. To make 1 liter (1000 milliliters), we need 10 bottles of 100 milliliters each."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch7_t3_qe14',
        type: "mcq",
        question: "How would you write 3400 milliliters as liters?",
        options: ["34 L", "3.4 L", "0.34 L", "340 L"],
        correctAnswer: "3.4 L",
        explanation: "To convert 3400 milliliters to liters, divide by 1000: 3400 ÷ 1000 = 3.4 liters. 🚿",
        wrongAnswerExplanations: {
            "34 L": "This is incorrect. 3400 milliliters equals 3.4 liters, not 34 liters.",
            "0.34 L": "This is incorrect. 3400 milliliters equals 3.4 liters, not 0.34 liters.",
            "340 L": "This is incorrect. 3400 milliliters equals 3.4 liters, not 340 liters."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch7_t3_qe15',
        type: "mcq",
        question: "A jug contains 1.75 liters of water. What is this quantity in milliliters?",
        options: ["175 mL", "1750 mL", "17.5 mL", "17500 mL"],
        correctAnswer: "1750 mL",
        explanation: "To convert 1.75 liters to milliliters, multiply by 1000: 1.75 × 1000 = 1750 milliliters. 🏺",
        wrongAnswerExplanations: {
            "175 mL": "This is incorrect. 1.75 liters equals 1750 milliliters, not 175 milliliters.",
            "17.5 mL": "This is incorrect. 1.75 liters equals 1750 milliliters, not 17.5 milliliters.",
            "17500 mL": "This is incorrect. 1.75 liters equals 1750 milliliters, not 17500 milliliters."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch7_t3_qe16',
        type: "mcq",
        question: "Which of these is equal to 1.2 liters?",
        options: ["12 mL", "120 mL", "1200 mL", "12000 mL"],
        correctAnswer: "1200 mL",
        explanation: "To convert 1.2 liters to milliliters, multiply by 1000: 1.2 × 1000 = 1200 milliliters. 🥤",
        wrongAnswerExplanations: {
            "12 mL": "This is incorrect. 1.2 liters equals 1200 milliliters, not 12 milliliters.",
            "120 mL": "This is incorrect. 1.2 liters equals 1200 milliliters, not 120 milliliters.",
            "12000 mL": "This is incorrect. 1.2 liters equals 1200 milliliters, not 12000 milliliters."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch7_t3_qe17',
        type: "mcq",
        question: "Seema drinks 2.5 liters of water daily. How many milliliters of water does she drink in 2 days?",
        options: ["500 mL", "2500 mL", "5000 mL", "25000 mL"],
        correctAnswer: "5000 mL",
        explanation: "Daily intake = 2.5 liters = 2500 milliliters. For 2 days: 2500 × 2 = 5000 milliliters. This involves unit conversion and multiplication. 💧",
        wrongAnswerExplanations: {
            "500 mL": "This is incorrect. In 2 days, she drinks 2 × 2.5 = 5 liters = 5000 milliliters.",
            "2500 mL": "This is incorrect. This is her daily intake, not the 2-day intake.",
            "25000 mL": "This is incorrect. In 2 days, she drinks 2 × 2.5 = 5 liters = 5000 milliliters."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch7_t3_qe18',
        type: "mcq",
        question: "Which is the correct way to convert 4.6 liters to milliliters?",
        options: [
            "4.6 ÷ 1000 = 0.0046 mL",
            "4.6 × 10 = 46 mL",
            "4.6 × 1000 = 4600 mL",
            "4.6 × 100 = 460 mL"
        ],
        correctAnswer: "4.6 × 1000 = 4600 mL",
        explanation: "To convert from liters to milliliters, multiply by 1000. So 4.6 × 1000 = 4600 milliliters. 🧮",
        wrongAnswerExplanations: {
            "4.6 ÷ 1000 = 0.0046 mL": "This is incorrect. We multiply (not divide) by 1000 when converting from liters to milliliters.",
            "4.6 × 10 = 46 mL": "This is incorrect. When converting from liters to milliliters, we multiply by 1000, not 10.",
            "4.6 × 100 = 460 mL": "This is incorrect. When converting from liters to milliliters, we multiply by 1000, not 100."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch7_t3_qe19',
        type: "mcq",
        question: "What is the correct way to write 0.08 liters in milliliters?",
        options: ["8 mL", "80 mL", "800 mL", "8000 mL"],
        correctAnswer: "80 mL",
        explanation: "To convert 0.08 liters to milliliters, multiply by 1000: 0.08 × 1000 = 80 milliliters. 📊",
        wrongAnswerExplanations: {
            "8 mL": "This is incorrect. 0.08 liters equals 80 milliliters, not 8 milliliters.",
            "800 mL": "This is incorrect. 0.08 liters equals 80 milliliters, not 800 milliliters.",
            "8000 mL": "This is incorrect. 0.08 liters equals 80 milliliters, not 8000 milliliters."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch7_t3_qe20',
        type: "mcq",
        question: "John needs to measure 1.25 liters of water for his experiment. If he has a measuring cup that shows milliliters, what measurement should he look for?",
        options: ["125 mL", "1250 mL", "12.5 mL", "12500 mL"],
        correctAnswer: "1250 mL",
        explanation: "To convert 1.25 liters to milliliters, multiply by 1000: 1.25 × 1000 = 1250 milliliters. 🧪",
        wrongAnswerExplanations: {
            "125 mL": "This is incorrect. 1.25 liters equals 1250 milliliters, not 125 milliliters.",
            "12.5 mL": "This is incorrect. 1.25 liters equals 1250 milliliters, not 12.5 milliliters.",
            "12500 mL": "This is incorrect. 1.25 liters equals 1250 milliliters, not 12500 milliliters."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    }
];
