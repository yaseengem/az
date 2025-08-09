import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl4_ch7_t2_qm1',
        type: "mcq",
        question: "If a jug contains 2 litres and 300 millilitres of water, how much water is that in millilitres?",
        options: ["230 mL", "2300 mL", "2030 mL", "203 mL"],
        correctAnswer: "2300 mL",
        explanation: "2 L = 2000 mL. Adding 300 mL gives 2000 + 300 = 2300 mL. 🧮",
        wrongAnswerExplanations: {
            "230 mL": "This is incorrect. 2 L = 2000 mL, not 200 mL.",
            "2030 mL": "This incorrectly places the 3 in the tens position.",
            "203 mL": "This is much too small. 2 L alone is 2000 mL."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch7_t2_qm2',
        type: "mcq",
        question: "Mira has 3 bottles of water. Bottle A contains 750 mL, bottle B contains 1.25 L, and bottle C contains 875 mL. How much water does she have in total?",
        options: ["2.125 L", "2.875 L", "2.75 L", "3.125 L"],
        correctAnswer: "2.875 L",
        explanation: "Converting all to litres: 750 mL = 0.75 L. Total: 0.75 + 1.25 + 0.875 = 2.875 L. 💧",
        wrongAnswerExplanations: {
            "2.125 L": "This is incorrect. Check your addition of the three values.",
            "2.75 L": "This is missing the 0.125 L from bottle C.",
            "3.125 L": "This is too high. Check your addition of the three values."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch7_t2_qm3',
        type: "mcq",
        question: "A container has 3.5 litres of water. If 1750 millilitres are poured out, how much water remains?",
        options: ["1.75 L", "1.25 L", "2.25 L", "1.75 mL"],
        correctAnswer: "1.75 L",
        explanation: "3.5 L - 1.75 L (1750 mL) = 1.75 L. Convert all units to litres for easier calculation. 🚰",
        wrongAnswerExplanations: {
            "1.25 L": "This is incorrect. 3.5 - 1.75 = 1.75, not 1.25.",
            "2.25 L": "This incorrectly subtracts 1.25 L instead of 1.75 L.",
            "1.75 mL": "The answer should be in litres, not millilitres."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch7_t2_qm4',
        type: "mcq",
        question: "A recipe calls for 250 mL of milk, 125 mL of water, and 75 mL of oil. How much liquid is needed in total?",
        options: ["350 mL", "400 mL", "450 mL", "500 mL"],
        correctAnswer: "450 mL",
        explanation: "Adding all quantities: 250 mL + 125 mL + 75 mL = 450 mL of liquid. 👨‍🍳",
        wrongAnswerExplanations: {
            "350 mL": "This is missing the 75 mL of oil in the calculation.",
            "400 mL": "This is incorrect. Check your addition of all three liquids.",
            "500 mL": "This is too high. Check your addition of all three liquids."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch7_t2_qm5',
        type: "mcq",
        question: "If a pitcher contains 1.8 litres of juice and you pour it equally into 6 glasses, how much juice will be in each glass?",
        options: ["0.3 L", "0.3 mL", "300 mL", "30 mL"],
        correctAnswer: "300 mL",
        explanation: "1.8 L ÷ 6 = 0.3 L = 300 mL per glass. Each glass gets an equal share. 🥤",
        wrongAnswerExplanations: {
            "0.3 L": "This is correct in litres, but the most appropriate unit would be millilitres.",
            "0.3 mL": "This is much too small. 0.3 L = 300 mL, not 0.3 mL.",
            "30 mL": "This is too small. 1.8 L = 1800 mL, so each glass gets 1800 ÷ 6 = 300 mL."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch7_t2_qm6',
        type: "mcq",
        question: "Rahul filled a bucket with 4 litres of water. He used 1500 millilitres for watering plants and 750 millilitres for cleaning. How much water is left in the bucket?",
        options: ["1.75 L", "1750 mL", "Both A and B", "2.25 L"],
        correctAnswer: "Both A and B",
        explanation: "4 L - 1.5 L - 0.75 L = 1.75 L = 1750 mL. Both answers are correct, just different units. 💧",
        wrongAnswerExplanations: {
            "1.75 L": "This is correct, but 1750 mL is also correct as they're equivalent.",
            "1750 mL": "This is correct, but 1.75 L is also correct as they're equivalent.",
            "2.25 L": "This is incorrect. 4 - 1.5 - 0.75 = 1.75, not 2.25."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch7_t2_qm7',
        type: "mcq",
        question: "A bottle can hold 1.5 litres of water. If it is already filled with 850 millilitres, how much more water can be added?",
        options: ["650 mL", "1350 mL", "500 mL", "150 mL"],
        correctAnswer: "650 mL",
        explanation: "Capacity: 1.5 L = 1500 mL. Already filled: 850 mL. Space left: 1500 - 850 = 650 mL. 🧮",
        wrongAnswerExplanations: {
            "1350 mL": "This adds instead of subtracts: 1500 + 850 = 2350, not 1350.",
            "500 mL": "This is incorrect. 1500 - 850 = 650, not 500.",
            "150 mL": "This confuses 1.5 L with 1.5 mL. 1.5 L = 1500 mL."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch7_t2_qm8',
        type: "mcq",
        question: "Priya buys 1.75 litres of milk every day. How much milk does she buy in a week (7 days)?",
        options: ["10.5 L", "12.25 L", "8.75 L", "7.75 L"],
        correctAnswer: "12.25 L",
        explanation: "7 days × 1.75 L = 12.25 L of milk for the whole week. 🥛",
        wrongAnswerExplanations: {
            "10.5 L": "This is incorrect. 7 × 1.75 = 12.25, not 10.5.",
            "8.75 L": "This is incorrect. 7 × 1.75 = 12.25, not 8.75.",
            "7.75 L": "This is incorrect. 7 × 1.75 = 12.25, not 7.75."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch7_t2_qm9',
        type: "mcq",
        question: "A water tank has a capacity of 25 litres. It is currently filled with 18.5 litres of water. How much more water can it hold?",
        options: ["6.5 L", "6500 mL", "Both A and B", "7.5 L"],
        correctAnswer: "Both A and B",
        explanation: "Remaining capacity: 25 L - 18.5 L = 6.5 L = 6500 mL. Both answers are correct. 🚰",
        wrongAnswerExplanations: {
            "6.5 L": "This is correct, but 6500 mL is also correct as they're equivalent.",
            "6500 mL": "This is correct, but 6.5 L is also correct as they're equivalent.",
            "7.5 L": "This is incorrect. 25 - 18.5 = 6.5, not 7.5."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch7_t2_qm10',
        type: "mcq",
        question: "A juice carton contains 850 mL. If you pour out 275 mL, what fraction of the original amount remains?",
        options: ["1/4", "2/3", "3/4", "1/2"],
        correctAnswer: "2/3",
        explanation: "Remaining juice: 850 - 275 = 575 mL. Fraction: 575/850 = 0.676... ≈ 2/3. 🧃",
        wrongAnswerExplanations: {
            "1/4": "If 1/4 remained, that would be 850 ÷ 4 = 212.5 mL, not 575 mL.",
            "3/4": "If 3/4 remained, that would be 3 × 850 ÷ 4 = 637.5 mL, not 575 mL.",
            "1/2": "If 1/2 remained, that would be 850 ÷ 2 = 425 mL, not 575 mL."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch7_t2_qm11',
        type: "mcq",
        question: "A 2-litre container is filled with water. If 1/5 of the water is poured out, how much water is left?",
        options: ["1.8 L", "1.6 L", "0.4 L", "1.5 L"],
        correctAnswer: "1.6 L",
        explanation: "1/5 of 2 L = 0.4 L is poured out. Remaining water: 2 L - 0.4 L = 1.6 L. 📊",
        wrongAnswerExplanations: {
            "1.8 L": "This is incorrect. 2 - (2 × 1/5) = 2 - 0.4 = 1.6, not 1.8.",
            "0.4 L": "This is the amount poured out, not the amount left.",
            "1.5 L": "This is incorrect. 2 - (2 × 1/5) = 2 - 0.4 = 1.6, not 1.5."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch7_t2_qm12',
        type: "mcq",
        question: "Mom bought 3.25 litres of milk. The family used 1.75 litres. What percentage of the milk is left?",
        options: ["40%", "46.15%", "50%", "53.85%"],
        correctAnswer: "46.15%",
        explanation: "Milk left: 3.25 - 1.75 = 1.5 L. Percentage: (1.5 ÷ 3.25) × 100 = 46.15%. 🥛",
        wrongAnswerExplanations: {
            "40%": "This is incorrect. (1.5 ÷ 3.25) × 100 = 46.15%, not 40%.",
            "50%": "This would be correct if half the milk was left, but 1.5 L is not half of 3.25 L.",
            "53.85%": "This is the percentage used (1.75 ÷ 3.25), not the percentage left."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch7_t2_qm13',
        type: "mcq",
        question: "A water cooler dispenses 250 mL with each cup. How many cups can be filled from a 4-litre container?",
        options: ["16", "40", "4", "160"],
        correctAnswer: "16",
        explanation: "4 L = 4000 mL. Number of cups: 4000 ÷ 250 = 16 cups. 🚰",
        wrongAnswerExplanations: {
            "40": "This incorrectly divides by 100 instead of 250.",
            "4": "This incorrectly treats the 250 mL as 1 L.",
            "160": "This incorrectly divides by 25 instead of 250."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch7_t2_qm14',
        type: "mcq",
        question: "A small pool contains 325 litres of water. If 75 litres evaporate, what percentage of the water remains?",
        options: ["76.92%", "23.08%", "85%", "250%"],
        correctAnswer: "76.92%",
        explanation: "Water left: 325 - 75 = 250 L. Percentage: (250 ÷ 325) × 100 = 76.92%. 🏊",
        wrongAnswerExplanations: {
            "23.08%": "This is the percentage that evaporated (75 ÷ 325), not the percentage remaining.",
            "85%": "This is incorrect. (250 ÷ 325) × 100 = 76.92%, not 85%.",
            "250%": "This confuses the amount (250 L) with the percentage."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch7_t2_qm15',
        type: "mcq",
        question: "If 2.5 litres of water fills 5 identical bottles equally, how much water is in each bottle?",
        options: ["0.5 litres", "0.05 litres", "500 millilitres", "5000 millilitres"],
        correctAnswer: "500 millilitres",
        explanation: "2.5 L ÷ 5 = 0.5 L = 500 mL per bottle. 🧮",
        wrongAnswerExplanations: {
            "0.5 litres": "This is correct, but the most appropriate unit would be millilitres.",
            "0.05 litres": "This is incorrect. 2.5 ÷ 5 = 0.5, not 0.05.",
            "5000 millilitres": "This is the total amount, not the amount per bottle."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch7_t2_qm16',
        type: "mcq",
        question: "A jug contains 1.2 litres of juice. If it is poured equally into 8 cups, how much juice will be in each cup?",
        options: ["150 mL", "15 mL", "1.5 L", "0.15 L"],
        correctAnswer: "150 mL",
        explanation: "1.2 L = 1200 mL. 1200 mL ÷ 8 = 150 mL per cup. 🧃",
        wrongAnswerExplanations: {
            "15 mL": "This is too small. 1.2 L = 1200 mL, and 1200 ÷ 8 = 150, not 15.",
            "1.5 L": "This is larger than the total amount in the jug (1.2 L).",
            "0.15 L": "This is correct in litres (0.15 L = 150 mL), but millilitres is more appropriate."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch7_t2_qm17',
        type: "mcq",
        question: "Sita has 2 jugs. One contains 1.25 litres of water and the other contains 750 millilitres. If she pours both into a bucket, how much water will be in the bucket?",
        options: ["2 L", "2000 mL", "Both A and B", "875 mL"],
        correctAnswer: "Both A and B",
        explanation: "Total: 1.25 L + 0.75 L = 2 L = 2000 mL. Both answers are correct, just different units. 🪣",
        wrongAnswerExplanations: {
            "2 L": "This is correct, but 2000 mL is also correct as they're equivalent.",
            "2000 mL": "This is correct, but 2 L is also correct as they're equivalent.",
            "875 mL": "This incorrectly adds 1.25 mL instead of 1.25 L."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch7_t2_qm18',
        type: "mcq",
        question: "A recipe needs 1.5 litres of milk. If you only have a 250 mL measuring cup, how many full cups will you need to pour?",
        options: ["6", "5", "15", "7.5"],
        correctAnswer: "6",
        explanation: "1.5 L = 1500 mL. 1500 ÷ 250 = 6 full cups. 👨‍🍳",
        wrongAnswerExplanations: {
            "5": "This would give 5 × 250 = 1250 mL, which is less than 1.5 L.",
            "15": "This incorrectly converts 1.5 L to 15000 mL instead of 1500 mL.",
            "7.5": "You can't pour a partial cup, only full cups."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch7_t2_qm19',
        type: "mcq",
        question: "Amit has a 5-litre water container that is 3/5 full. How much water is in the container?",
        options: ["3 L", "2 L", "1.67 L", "3000 mL"],
        correctAnswer: "3 L",
        explanation: "3/5 of 5 L = 3 L of water in the container. 🧮",
        wrongAnswerExplanations: {
            "2 L": "This is the amount of empty space (2/5 of 5 L), not the amount of water.",
            "1.67 L": "This incorrectly calculates 5 ÷ 3 instead of 5 × (3/5).",
            "3000 mL": "This is correct numerically (3 L = 3000 mL), but the question asks for an answer in litres."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch7_t2_qm20',
        type: "mcq",
        question: "A tank contains 12.5 litres of water. After some water is used, it has 9.75 litres left. What fraction of the original water was used?",
        options: ["1/5", "2/9", "2/5", "11/50"],
        correctAnswer: "11/50",
        explanation: "Water used: 12.5 - 9.75 = 2.75 L. Fraction: 2.75/12.5 = 11/50. 📊",
        wrongAnswerExplanations: {
            "1/5": "1/5 of 12.5 is 2.5 L, not 2.75 L.",
            "2/9": "This is incorrect. 2.75/12.5 simplifies to 11/50, not 2/9.",
            "2/5": "2/5 of 12.5 is 5 L, not 2.75 L."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    }
];
