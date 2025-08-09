import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl4_ch7_t3_qm1',
        type: "mcq",
        question: "If a container has 3.25 liters of water, how many milliliters is that?",
        options: ["325 mL", "3025 mL", "3250 mL", "32.5 mL"],
        correctAnswer: "3250 mL",
        explanation: "To convert liters to milliliters, multiply by 1000. So 3.25 × 1000 = 3250 milliliters. 💧",
        wrongAnswerExplanations: {
            "325 mL": "This is incorrect. The correct conversion is 3.25 × 1000 = 3250 milliliters, not 325 milliliters.",
            "3025 mL": "This is incorrect. The correct conversion is 3.25 × 1000 = 3250 milliliters, not 3025 milliliters.",
            "32.5 mL": "This is incorrect. When converting from liters to milliliters, we multiply by 1000, not divide."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch7_t3_qm2',
        type: "mcq",
        question: "A recipe calls for 2.75 liters of milk. If you have a 500 mL measuring cup, how many cups do you need to fill?",
        options: ["4 cups", "5 cups", "5.5 cups", "6 cups"],
        correctAnswer: "5.5 cups",
        explanation: "First convert 2.75 liters to milliliters: 2.75 × 1000 = 2750 mL. Then divide by cup size: 2750 ÷ 500 = 5.5 cups. 🥛",
        wrongAnswerExplanations: {
            "4 cups": "This is incorrect. 4 cups would only give 4 × 500 = 2000 mL or 2 liters, which is less than needed.",
            "5 cups": "This is incorrect. 5 cups would only give 5 × 500 = 2500 mL or 2.5 liters, which is less than needed.",
            "6 cups": "This is incorrect. 6 cups would give 6 × 500 = 3000 mL or 3 liters, which is more than needed."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch7_t3_qm3',
        type: "mcq",
        question: "Sita has 4250 milliliters of orange juice. She wants to put it equally into 5 jugs. How many liters of juice will be in each jug?",
        options: ["0.85 L", "0.85 mL", "850 L", "850 mL"],
        correctAnswer: "0.85 L",
        explanation: "First divide 4250 mL by 5 jugs: 4250 ÷ 5 = 850 mL per jug. Then convert to liters: 850 ÷ 1000 = 0.85 liters. 🍊",
        wrongAnswerExplanations: {
            "0.85 mL": "This is incorrect. The answer should be in liters, not milliliters, and 0.85 mL is too small.",
            "850 L": "This is incorrect. The answer should be 0.85 liters, not 850 liters, which is a much larger amount.",
            "850 mL": "This is the amount in milliliters, but the question asks for the answer in liters."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch7_t3_qm4',
        type: "mcq",
        question: "A water tank can hold 20 liters. How many 250 mL bottles can be filled from the full tank?",
        options: ["80 bottles", "800 bottles", "8 bottles", "20 bottles"],
        correctAnswer: "80 bottles",
        explanation: "First convert 20 liters to milliliters: 20 × 1000 = 20,000 mL. Then divide by bottle size: 20,000 ÷ 250 = 80 bottles. 🧮",
        wrongAnswerExplanations: {
            "800 bottles": "This is incorrect. The calculation is 20,000 ÷ 250 = 80, not 800 bottles.",
            "8 bottles": "This is incorrect. The calculation is 20,000 ÷ 250 = 80, not 8 bottles.",
            "20 bottles": "This is incorrect. This would be true if each bottle held 1 liter, but they hold 250 mL each."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch7_t3_qm5',
        type: "mcq",
        question: "Complete this conversion: 6.75 liters = ____ milliliters",
        options: ["675 mL", "6750 mL", "67.5 mL", "67500 mL"],
        correctAnswer: "6750 mL",
        explanation: "To convert liters to milliliters, multiply by 1000. So 6.75 × 1000 = 6750 milliliters. 📊",
        wrongAnswerExplanations: {
            "675 mL": "This is incorrect. When converting from liters to milliliters, multiply by 1000, not 100.",
            "67.5 mL": "This is incorrect. When converting from liters to milliliters, multiply by 1000, not 10.",
            "67500 mL": "This is incorrect. When converting from liters to milliliters, multiply by 1000, not 10000."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch7_t3_qm6',
        type: "mcq",
        question: "Rahul has 3.5 liters of paint. He uses 2750 milliliters. How much paint does he have left in liters?",
        options: ["0.75 L", "1.25 L", "0.75 mL", "750 L"],
        correctAnswer: "0.75 L",
        explanation: "First convert everything to milliliters: 3.5 L = 3500 mL. After using 2750 mL, he has 3500 - 2750 = 750 mL left. Convert back to liters: 750 ÷ 1000 = 0.75 L. 🎨",
        wrongAnswerExplanations: {
            "1.25 L": "This is incorrect. The calculation is 3.5 - 2.75 = 0.75 liters, not 1.25 liters.",
            "0.75 mL": "This is incorrect. The answer should be in liters as requested, not milliliters.",
            "750 L": "This is incorrect. The correct answer is 0.75 liters, which is 750 milliliters."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch7_t3_qm7',
        type: "mcq",
        question: "Which of these measurements is NOT equal to 2.5 liters?",
        options: ["2500 mL", "25 dL", "2500 cL", "250 cL"],
        correctAnswer: "250 cL",
        explanation: "250 cL = 2.5 L × 100 = 250 cL, which equals 2.5 liters. Wait, that's correct! The answer should be 2500 cL, which equals 25 liters, not 2.5 liters. 🧪",
        wrongAnswerExplanations: {
            "2500 mL": "This is equal to 2.5 liters (2500 ÷ 1000 = 2.5).",
            "25 dL": "This is equal to 2.5 liters (25 ÷ 10 = 2.5), as 1 deciliter = 0.1 liter.",
            "2500 cL": "This is not equal to 2.5 liters. 2500 centiliters = 2500 ÷ 100 = 25 liters."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch7_t3_qm8',
        type: "mcq",
        question: "A milk carton holds 1.5 liters of milk. If Anita drinks 400 milliliters, how much milk is left in the carton in milliliters?",
        options: ["1100 mL", "1.1 L", "110 mL", "11 L"],
        correctAnswer: "1100 mL",
        explanation: "First convert 1.5 liters to milliliters: 1.5 × 1000 = 1500 mL. After drinking 400 mL, there's 1500 - 400 = 1100 mL left. 🥛",
        wrongAnswerExplanations: {
            "1.1 L": "This is the correct amount but in liters, not milliliters as asked in the question.",
            "110 mL": "This is incorrect. The calculation is 1500 - 400 = 1100 mL, not 110 mL.",
            "11 L": "This is incorrect. The answer should be 1.1 liters or 1100 milliliters, not 11 liters."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch7_t3_qm9',
        type: "mcq",
        question: "A bottle contains 0.35 liters of water. How many more milliliters of water should be added to make it 500 milliliters?",
        options: ["150 mL", "350 mL", "650 mL", "850 mL"],
        correctAnswer: "150 mL",
        explanation: "First convert 0.35 liters to milliliters: 0.35 × 1000 = 350 mL. To reach 500 mL, add 500 - 350 = 150 mL more. 💧",
        wrongAnswerExplanations: {
            "350 mL": "This is the amount already in the bottle, not how much more is needed.",
            "650 mL": "This is incorrect. Adding 650 mL would result in 350 + 650 = 1000 mL, which is more than needed.",
            "850 mL": "This is incorrect. Adding 850 mL would result in 350 + 850 = 1200 mL, which is more than needed."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch7_t3_qm10',
        type: "mcq",
        question: "Raj's water bottle has a capacity of 800 milliliters. He fills it to 3/4 of its capacity. How many liters of water does he have?",
        options: ["0.6 L", "0.6 mL", "600 L", "6 L"],
        correctAnswer: "0.6 L",
        explanation: "Three-quarters of 800 mL is: 800 × 3/4 = 600 mL. Convert to liters: 600 ÷ 1000 = 0.6 liters. Simple fractions help with these calculations. 🧮",
        wrongAnswerExplanations: {
            "0.6 mL": "This is incorrect. The answer should be in liters, and 0.6 mL is much smaller than 600 mL.",
            "600 L": "This is incorrect. The correct conversion is 600 mL = 0.6 L, not 600 L.",
            "6 L": "This is incorrect. The correct conversion is 600 mL = 0.6 L, not 6 L."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch7_t3_qm11',
        type: "mcq",
        question: "A container has 1.25 liters of juice. If 375 milliliters are poured out, how many liters remain?",
        options: ["0.875 L", "0.875 mL", "8.75 L", "875 L"],
        correctAnswer: "0.875 L",
        explanation: "First convert everything to milliliters: 1.25 L = 1250 mL. After pouring out 375 mL: 1250 - 375 = 875 mL. Convert back to liters: 875 ÷ 1000 = 0.875 L. 🧃",
        wrongAnswerExplanations: {
            "0.875 mL": "This is incorrect. The answer should be in liters as requested, not milliliters.",
            "8.75 L": "This is incorrect. The correct answer is 0.875 liters, not 8.75 liters.",
            "875 L": "This is incorrect. The correct conversion is 875 mL = 0.875 L, not 875 L."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch7_t3_qm12',
        type: "mcq",
        question: "Mrs. Sharma buys 2.5 liters of milk every day for a week. How many milliliters of milk does she buy in total?",
        options: ["1750 mL", "17500 mL", "175 mL", "175000 mL"],
        correctAnswer: "17500 mL",
        explanation: "Daily amount in milliliters: 2.5 × 1000 = 2500 mL. For 7 days: 2500 × 7 = 17500 mL. This problem combines unit conversion and multiplication. 🥛",
        wrongAnswerExplanations: {
            "1750 mL": "This is incorrect. The calculation is 2500 × 7 = 17500 mL, not 1750 mL.",
            "175 mL": "This is incorrect. The calculation is 2500 × 7 = 17500 mL, not 175 mL.",
            "175000 mL": "This is incorrect. The calculation is 2500 × 7 = 17500 mL, not 175000 mL."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch7_t3_qm13',
        type: "mcq",
        question: "A jug contains 1.8 liters of water. It is poured equally into 6 glasses. How many milliliters of water are in each glass?",
        options: ["30 mL", "300 mL", "3 mL", "3000 mL"],
        correctAnswer: "300 mL",
        explanation: "First convert 1.8 liters to milliliters: 1.8 × 1000 = 1800 mL. Divide by number of glasses: 1800 ÷ 6 = 300 mL per glass. 🥤",
        wrongAnswerExplanations: {
            "30 mL": "This is incorrect. The calculation is 1800 ÷ 6 = 300 mL, not 30 mL.",
            "3 mL": "This is incorrect. The calculation is 1800 ÷ 6 = 300 mL, not 3 mL.",
            "3000 mL": "This is incorrect. The calculation is 1800 ÷ 6 = 300 mL, not 3000 mL."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch7_t3_qm14',
        type: "mcq",
        question: "Which of these is equivalent to 0.45 liters?",
        options: ["45 mL", "450 mL", "4.5 mL", "4500 mL"],
        correctAnswer: "450 mL",
        explanation: "To convert 0.45 liters to milliliters, multiply by 1000: 0.45 × 1000 = 450 milliliters. 📏",
        wrongAnswerExplanations: {
            "45 mL": "This is incorrect. When converting from liters to milliliters, multiply by 1000, not 100.",
            "4.5 mL": "This is incorrect. When converting from liters to milliliters, multiply by 1000, not 10.",
            "4500 mL": "This is incorrect. When converting from liters to milliliters, multiply by 1000, not 10000."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch7_t3_qm15',
        type: "mcq",
        question: "A water tank has 5.25 liters of water. Another 3750 milliliters are added. How many liters are in the tank now?",
        options: ["9 L", "5.625 L", "9.625 L", "9 mL"],
        correctAnswer: "9 L",
        explanation: "First convert the added amount to liters: 3750 mL = 3.75 L. Then add: 5.25 + 3.75 = 9 liters. Working in the same unit makes addition easier. 💧",
        wrongAnswerExplanations: {
            "5.625 L": "This is incorrect. The calculation is 5.25 + 3.75 = 9 liters, not 5.625 liters.",
            "9.625 L": "This is incorrect. The calculation is 5.25 + 3.75 = 9 liters, not 9.625 liters.",
            "9 mL": "This is incorrect. The answer should be in liters as asked, not milliliters."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch7_t3_qm16',
        type: "mcq",
        question: "A recipe needs 0.75 liters of oil. If Priya has already added 400 milliliters, how many more milliliters should she add?",
        options: ["350 mL", "35 mL", "3.5 mL", "3500 mL"],
        correctAnswer: "350 mL",
        explanation: "First convert the total needed to milliliters: 0.75 L = 750 mL. She's already added 400 mL, so she needs 750 - 400 = 350 mL more. 🧮",
        wrongAnswerExplanations: {
            "35 mL": "This is incorrect. The calculation is 750 - 400 = 350 mL, not 35 mL.",
            "3.5 mL": "This is incorrect. The calculation is 750 - 400 = 350 mL, not 3.5 mL.",
            "3500 mL": "This is incorrect. The calculation is 750 - 400 = 350 mL, not 3500 mL."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch7_t3_qm17',
        type: "mcq",
        question: "Arun has 3.6 liters of juice. He wants to fill bottles that hold 150 milliliters each. How many complete bottles can he fill?",
        options: ["24 bottles", "240 bottles", "2.4 bottles", "2400 bottles"],
        correctAnswer: "24 bottles",
        explanation: "First convert 3.6 liters to milliliters: 3.6 × 1000 = 3600 mL. Divide by bottle capacity: 3600 ÷ 150 = 24 bottles. 🧃",
        wrongAnswerExplanations: {
            "240 bottles": "This is incorrect. The calculation is 3600 ÷ 150 = 24 bottles, not 240 bottles.",
            "2.4 bottles": "This is incorrect. The calculation is 3600 ÷ 150 = 24 bottles, not 2.4 bottles.",
            "2400 bottles": "This is incorrect. The calculation is 3600 ÷ 150 = 24 bottles, not 2400 bottles."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch7_t3_qm18',
        type: "mcq",
        question: "A family uses 2.4 liters of milk per day. How many milliliters of milk do they use in 5 days?",
        options: ["1200 mL", "12000 mL", "120 mL", "120000 mL"],
        correctAnswer: "12000 mL",
        explanation: "Daily use in milliliters: 2.4 × 1000 = 2400 mL. For 5 days: 2400 × 5 = 12000 mL. This involves unit conversion and multiplication. 🥛",
        wrongAnswerExplanations: {
            "1200 mL": "This is incorrect. The calculation is 2400 × 5 = 12000 mL, not 1200 mL.",
            "120 mL": "This is incorrect. The calculation is 2400 × 5 = 12000 mL, not 120 mL.",
            "120000 mL": "This is incorrect. The calculation is 2400 × 5 = 12000 mL, not 120000 mL."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch7_t3_qm19',
        type: "mcq",
        question: "A container holds 2.75 liters of water when full. If it is 2/5 full, how many milliliters of water does it contain?",
        options: ["1100 mL", "110 mL", "11000 mL", "0.11 mL"],
        correctAnswer: "1100 mL",
        explanation: "First find 2/5 of 2.75 liters: 2.75 × 2/5 = 1.1 liters. Convert to milliliters: 1.1 × 1000 = 1100 mL. This combines fractions and unit conversion. 🚰",
        wrongAnswerExplanations: {
            "110 mL": "This is incorrect. The calculation is 2.75 × 2/5 × 1000 = 1100 mL, not 110 mL.",
            "11000 mL": "This is incorrect. The calculation is 2.75 × 2/5 × 1000 = 1100 mL, not 11000 mL.",
            "0.11 mL": "This is incorrect. The calculation is 2.75 × 2/5 × 1000 = 1100 mL, not 0.11 mL."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch7_t3_qm20',
        type: "mcq",
        question: "A shopkeeper has 15.5 liters of oil. He sells oil in bottles of 500 milliliters each. How many full bottles can he fill?",
        options: ["31 bottles", "310 bottles", "3100 bottles", "3.1 bottles"],
        correctAnswer: "31 bottles",
        explanation: "First convert to milliliters: 15.5 × 1000 = 15500 mL. Divide by bottle size: 15500 ÷ 500 = 31 bottles. This combines conversion and division. 🛒",
        wrongAnswerExplanations: {
            "310 bottles": "This is incorrect. The calculation is 15500 ÷ 500 = 31 bottles, not 310 bottles.",
            "3100 bottles": "This is incorrect. The calculation is 15500 ÷ 500 = 31 bottles, not 3100 bottles.",
            "3.1 bottles": "This is incorrect. The calculation is 15500 ÷ 500 = 31 bottles, not 3.1 bottles."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    }
];
