import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl5_ch14_t1_qm1',
        type: "mcq",
        question: "A jug contains 2.5 L of juice. How many mL is this?",
        options: ["250 mL", "2500 mL", "25 mL", "25000 mL"],
        correctAnswer: "2500 mL",
        explanation: "2.5 L × 1000 = 2500 mL. To convert from L to mL, multiply by 1000. 🧃",
        wrongAnswerExplanations: {
            "250 mL": "This is 0.25 L, not 2.5 L. You need to multiply by 1000, not 100.",
            "25 mL": "This is far too small. 2.5 L is much larger than 25 mL.",
            "25000 mL": "This is 25 L, which is 10 times larger than 2.5 L."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch14_t1_qm2',
        type: "mcq",
        question: "If you pour 300 mL of milk into a 1 L bottle, how much more can it hold?",
        options: ["300 mL", "700 mL", "1000 mL", "600 mL"],
        correctAnswer: "700 mL",
        explanation: "1 L = 1000 mL, and 1000 - 300 = 700 mL remaining capacity. 🥛",
        wrongAnswerExplanations: {
            "300 mL": "300 mL is the amount already in the bottle, not what it can still hold.",
            "1000 mL": "1000 mL is the total capacity, but 300 mL is already filled.",
            "600 mL": "The calculation is 1000 - 300 = 700 mL, not 600 mL."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch14_t1_qm3',
        type: "mcq",
        question: "Which is the best estimate for the volume of a bathtub?",
        options: ["50 mL", "5 L", "100 L", "500 mL"],
        correctAnswer: "100 L",
        explanation: "Bathtubs typically hold between 80-150 L of water. 100 L is a reasonable estimate. 🛁",
        wrongAnswerExplanations: {
            "50 mL": "50 mL is extremely small, just a few tablespoons of water.",
            "5 L": "5 L is far too small for a bathtub, closer to a bucket.",
            "500 mL": "500 mL is just half a liter, less than a standard water bottle."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl5_ch14_t1_qm4',
        type: "mcq",
        question: "A bottle has 750 mL of water. How many more mL do you need to make it 1 L?",
        options: ["250 mL", "100 mL", "500 mL", "750 mL"],
        correctAnswer: "250 mL",
        explanation: "1 L = 1000 mL, and 1000 - 750 = 250 mL are needed to reach 1 L. 💧",
        wrongAnswerExplanations: {
            "100 mL": "750 + 100 = 850 mL, which is less than 1 L (1000 mL).",
            "500 mL": "750 + 500 = 1250 mL, which exceeds 1 L.",
            "750 mL": "750 + 750 = 1500 mL, which far exceeds 1 L."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch14_t1_qm5',
        type: "mcq",
        question: "Which of these is closest to the volume of a large bucket?",
        options: ["10 mL", "10 L", "100 mL", "1 L"],
        correctAnswer: "10 L",
        explanation: "Large buckets typically hold about 10-15 L of water. 🪣",
        wrongAnswerExplanations: {
            "10 mL": "10 mL is extremely small, less than a tablespoon.",
            "100 mL": "100 mL is about half a cup, far too small for a bucket.",
            "1 L": "1 L is closer to a small jug, much smaller than a large bucket."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch14_t1_qm6',
        type: "mcq",
        question: "If a recipe needs 1.5 L of milk, how many mL is that?",
        options: ["150 mL", "1500 mL", "15 mL", "1000 mL"],
        correctAnswer: "1500 mL",
        explanation: "1.5 L × 1000 = 1500 mL. Multiply by 1000 to convert L to mL. 👨‍🍳",
        wrongAnswerExplanations: {
            "150 mL": "This is 0.15 L, which is 10 times smaller than 1.5 L.",
            "15 mL": "This is 0.015 L, which is 100 times smaller than 1.5 L.",
            "1000 mL": "This is 1 L, not 1.5 L."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch14_t1_qm7',
        type: "mcq",
        question: "Which measuring tool is best for measuring 50 mL of medicine?",
        options: ["Measuring jug", "Measuring spoon", "Measuring cup", "Ruler"],
        correctAnswer: "Measuring cup",
        explanation: "Measuring cups are marked for small volumes like 50 mL and are precise for medicines. 💊",
        wrongAnswerExplanations: {
            "Measuring jug": "Jugs are for larger volumes and may not be precise enough for medicine.",
            "Measuring spoon": "Spoons typically measure 5-15 mL, not precisely 50 mL.",
            "Ruler": "Rulers measure length, not volume."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch14_t1_qm8',
        type: "mcq",
        question: "A tank holds 20 L of water. How many 250 mL glasses can you fill?",
        options: ["40", "60", "80", "100"],
        correctAnswer: "80",
        explanation: "20 L = 20000 mL, and 20000 ÷ 250 = 80 glasses. 🥤",
        wrongAnswerExplanations: {
            "40": "This would only use 40 × 250 = 10000 mL = 10 L of water.",
            "60": "This would only use 60 × 250 = 15000 mL = 15 L of water.",
            "100": "This would require 100 × 250 = 25000 mL = 25 L, more than the tank holds."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl5_ch14_t1_qm9',
        type: "mcq",
        question: "What is the volume in cubic centimeters (cm³) of a cube with 10 cm sides?",
        options: ["100 cm³", "1000 cm³", "10 cm³", "10000 cm³"],
        correctAnswer: "1000 cm³",
        explanation: "Volume of cube = side³ = 10 × 10 × 10 = 1000 cm³. 📦",
        wrongAnswerExplanations: {
            "100 cm³": "This would be a cube with sides of about 4.6 cm, not 10 cm.",
            "10 cm³": "This would be a cube with sides of about 2.15 cm, not 10 cm.",
            "10000 cm³": "This would be a cube with sides of about 21.5 cm, not 10 cm."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl5_ch14_t1_qm10',
        type: "mcq",
        question: "How many liters are in 5000 mL?",
        options: ["5 L", "50 L", "500 L", "0.5 L"],
        correctAnswer: "5 L",
        explanation: "5000 mL ÷ 1000 = 5 L. Divide by 1000 to convert from mL to L. 🧮",
        wrongAnswerExplanations: {
            "50 L": "This would be 50000 mL, not 5000 mL.",
            "500 L": "This would be 500000 mL, much larger than 5000 mL.",
            "0.5 L": "0.5 L = 500 mL, which is 10 times smaller than 5000 mL."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch14_t1_qm11',
        type: "mcq",
        question: "Which is heavier, 1 L of water or 1 L of oil?",
        options: ["Water", "Oil", "They weigh the same", "Depends on the container"],
        correctAnswer: "Water",
        explanation: "Water is denser than oil, so 1 L of water weighs more than 1 L of oil. 💧🛢️",
        wrongAnswerExplanations: {
            "Oil": "Oil is less dense than water, so it weighs less for the same volume.",
            "They weigh the same": "Equal volumes of different substances can have different weights due to density.",
            "Depends on the container": "The weight depends on the substance, not the container."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl5_ch14_t1_qm12',
        type: "mcq",
        question: "A small bottle contains 200 mL of liquid. How many such bottles are needed to fill a 2 L container?",
        options: ["5", "10", "15", "20"],
        correctAnswer: "10",
        explanation: "2 L = 2000 mL, and 2000 ÷ 200 = 10 bottles. 🍶",
        wrongAnswerExplanations: {
            "5": "5 bottles would only provide 5 × 200 = 1000 mL = 1 L.",
            "15": "15 bottles would provide 15 × 200 = 3000 mL = 3 L, too much.",
            "20": "20 bottles would provide 20 × 200 = 4000 mL = 4 L, far too much."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl5_ch14_t1_qm13',
        type: "mcq",
        question: "Which of the following is a unit of volume?",
        options: ["Kilogram", "Liter", "Meter", "Celsius"],
        correctAnswer: "Liter",
        explanation: "Liter (L) is a unit of volume. Kilogram measures mass, meter measures length, and Celsius measures temperature. 📏",
        wrongAnswerExplanations: {
            "Kilogram": "Kilogram (kg) is a unit of mass, not volume.",
            "Meter": "Meter (m) is a unit of length, not volume.",
            "Celsius": "Celsius (°C) is a unit of temperature, not volume."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch14_t1_qm14',
        type: "mcq",
        question: "How much is 3.5 L in mL?",
        options: ["350 mL", "3500 mL", "35 mL", "35000 mL"],
        correctAnswer: "3500 mL",
        explanation: "3.5 L × 1000 = 3500 mL. Converting from L to mL requires multiplying by 1000. 🧪",
        wrongAnswerExplanations: {
            "350 mL": "This would be 0.35 L, not 3.5 L.",
            "35 mL": "This would be 0.035 L, much smaller than 3.5 L.",
            "35000 mL": "This would be 35 L, which is 10 times larger than 3.5 L."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch14_t1_qm15',
        type: "mcq",
        question: "What is the volume of a swimming pool that holds 50,000 L of water?",
        options: ["50 m³", "5 m³", "500 m³", "0.5 m³"],
        correctAnswer: "50 m³",
        explanation: "50,000 L = 50 m³ because 1 m³ = 1000 L. 🏊",
        wrongAnswerExplanations: {
            "5 m³": "5 m³ = 5000 L, which is much smaller than 50,000 L.",
            "500 m³": "500 m³ = 500,000 L, which is 10 times larger than 50,000 L.",
            "0.5 m³": "0.5 m³ = 500 L, which is 100 times smaller than 50,000 L."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl5_ch14_t1_qm16',
        type: "mcq",
        question: "If you have three 250 mL bottles of water, how many liters do you have in total?",
        options: ["0.75 L", "0.25 L", "0.5 L", "3 L"],
        correctAnswer: "0.75 L",
        explanation: "3 × 250 mL = 750 mL = 0.75 L. 🧮",
        wrongAnswerExplanations: {
            "0.25 L": "0.25 L = 250 mL, which is the volume of just one bottle.",
            "0.5 L": "0.5 L = 500 mL, which is the volume of two bottles.",
            "3 L": "3 L = 3000 mL, which is much more than three 250 mL bottles."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch14_t1_qm17',
        type: "mcq",
        question: "What is the total volume if you mix 0.35 L and 450 mL of juice?",
        options: ["485 mL", "800 mL", "385 mL", "0.8 L"],
        correctAnswer: "800 mL",
        explanation: "0.35 L = 350 mL, so 350 mL + 450 mL = 800 mL or 0.8 L. 🧃",
        wrongAnswerExplanations: {
            "485 mL": "This is incorrect; the calculation is 350 mL + 450 mL = 800 mL.",
            "385 mL": "This is incorrect; the calculation is 350 mL + 450 mL = 800 mL.",
            "0.8 L": "This is actually correct, as 800 mL = 0.8 L."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl5_ch14_t1_qm18',
        type: "mcq",
        question: "A recipe requires 750 mL of broth. How many liters is that?",
        options: ["0.75 L", "7.5 L", "75 L", "1.5 L"],
        correctAnswer: "0.75 L",
        explanation: "750 mL ÷ 1000 = 0.75 L. To convert from mL to L, divide by 1000. 🍲",
        wrongAnswerExplanations: {
            "7.5 L": "This would be 7500 mL, much larger than 750 mL.",
            "75 L": "This would be 75000 mL, 100 times larger than 750 mL.",
            "1.5 L": "This would be 1500 mL, twice as much as 750 mL."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch14_t1_qm19',
        type: "mcq",
        question: "A bottle is 1/3 full with 400 mL of water. What is the total capacity of the bottle?",
        options: ["1200 mL", "800 mL", "1600 mL", "1333 mL"],
        correctAnswer: "1200 mL",
        explanation: "If 1/3 of the bottle is 400 mL, the full bottle is 3 × 400 mL = 1200 mL. 🧮",
        wrongAnswerExplanations: {
            "800 mL": "800 mL would be 2/3 of the capacity, not the total.",
            "1600 mL": "1600 mL would be 4 times 400 mL, not 3 times.",
            "1333 mL": "This is not accurate; the exact value is 1200 mL."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl5_ch14_t1_qm20',
        type: "mcq",
        question: "If a jug of 1.2 L is filled to 3/4 of its capacity, how many mL of water does it contain?",
        options: ["900 mL", "750 mL", "300 mL", "1200 mL"],
        correctAnswer: "900 mL",
        explanation: "3/4 of 1.2 L = 3/4 × 1200 mL = 900 mL. 🧪",
        wrongAnswerExplanations: {
            "750 mL": "750 mL would be 3/4 of 1 L, not 1.2 L.",
            "300 mL": "300 mL would be 1/4 of 1.2 L, not 3/4.",
            "1200 mL": "1200 mL = 1.2 L, which is the full capacity, not 3/4 filled."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    }
];
