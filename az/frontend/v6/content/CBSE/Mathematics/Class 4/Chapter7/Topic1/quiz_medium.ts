import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl4_ch7_t1_qm1',
        type: "mcq",
        question: "Ravi has 2 jugs. One jug has 750 ml of water and the other has 1.25 litres. How much water does he have in total?",
        options: [
            "1 litre", 
            "2 litres", 
            "2.5 litres", 
            "3 litres"
        ],
        correctAnswer: "2 litres",
        explanation: "750 ml = 0.75 litre. 0.75 litre + 1.25 litres = 2 litres. We need to convert to same units first. 🧮",
        wrongAnswerExplanations: {
            "1 litre": "This is too little. 750 ml + 1.25 litres = 750 ml + 1250 ml = 2000 ml = 2 litres.",
            "2.5 litres": "This is too much. 750 ml + 1.25 litres = 750 ml + 1250 ml = 2000 ml = 2 litres.",
            "3 litres": "This is far too much. 750 ml + 1.25 litres = 750 ml + 1250 ml = 2000 ml = 2 litres."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch7_t1_qm2',
        type: "mcq",
        question: "A 2-litre jug is filled with water. If 750 ml of water is poured out, then 250 ml is added, how much water is now in the jug?",
        options: [
            "1.25 litres", 
            "1.5 litres", 
            "1.75 litres", 
            "2 litres"
        ],
        correctAnswer: "1.5 litres",
        explanation: "2 litres - 750 ml + 250 ml = 2000 ml - 750 ml + 250 ml = 1500 ml = 1.5 litres. 🚰",
        wrongAnswerExplanations: {
            "1.25 litres": "This is incorrect. 2 litres - 750 ml + 250 ml = 2000 ml - 750 ml + 250 ml = 1500 ml = 1.5 litres.",
            "1.75 litres": "This is incorrect. 2 litres - 750 ml + 250 ml = 2000 ml - 750 ml + 250 ml = 1500 ml = 1.5 litres.",
            "2 litres": "This would be the original amount, not accounting for the water poured out and added."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch7_t1_qm3',
        type: "mcq",
        question: "A recipe requires 1.5 litres of milk. If you have cups that can hold 250 ml each, how many cups of milk do you need? 🥛",
        options: [
            "4 cups", 
            "5 cups", 
            "6 cups", 
            "8 cups"
        ],
        correctAnswer: "6 cups",
        explanation: "1.5 litres = 1500 ml. 1500 ÷ 250 = 6, so you need 6 cups of 250 ml each.",
        wrongAnswerExplanations: {
            "4 cups": "4 cups would be 4 × 250 ml = 1000 ml = 1 litre, which is less than 1.5 litres.",
            "5 cups": "5 cups would be 5 × 250 ml = 1250 ml, which is less than 1.5 litres.",
            "8 cups": "8 cups would be 8 × 250 ml = 2000 ml = 2 litres, which is more than 1.5 litres."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch7_t1_qm4',
        type: "mcq",
        question: "A water tank holds 15 litres of water. How many 500 ml bottles can be filled from this tank?",
        options: [
            "25 bottles", 
            "30 bottles", 
            "15 bottles", 
            "7.5 bottles"
        ],
        correctAnswer: "30 bottles",
        explanation: "15 litres = 15,000 ml. 15,000 ÷ 500 = 30 bottles. Convert litres to ml first. 🧮",
        wrongAnswerExplanations: {
            "25 bottles": "This is incorrect. 15 litres = 15,000 ml and 15,000 ÷ 500 = 30, not 25.",
            "15 bottles": "This would be correct if each bottle was 1 litre, but they are 500 ml (0.5 litre) each.",
            "7.5 bottles": "This would be correct if each bottle was 2 litres, but they are 500 ml (0.5 litre) each."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch7_t1_qm5',
        type: "mcq",
        question: "If 3 cups of water each holding 150 ml are poured into a jug containing 450 ml, how much water is in the jug now? 🚰",
        options: [
            "600 ml", 
            "750 ml", 
            "900 ml", 
            "1050 ml"
        ],
        correctAnswer: "900 ml",
        explanation: "3 cups × 150 ml = 450 ml. 450 ml + 450 ml (already in jug) = 900 ml total.",
        wrongAnswerExplanations: {
            "600 ml": "This would be 450 ml (in jug) + 150 ml (one cup), but we're adding 3 cups.",
            "750 ml": "This would be 450 ml (in jug) + 300 ml (two cups), but we're adding 3 cups.",
            "1050 ml": "This is incorrect. 450 ml + (3 × 150 ml) = 450 ml + 450 ml = 900 ml, not 1050 ml."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch7_t1_qm6',
        type: "mcq",
        question: "A container has 2.5 litres of water. If 800 ml is used, how much water is left in the container?",
        options: [
            "1.7 litres", 
            "1.8 litres", 
            "1.5 litres", 
            "1.7 kilolitres"
        ],
        correctAnswer: "1.7 litres",
        explanation: "2.5 litres = 2500 ml. 2500 ml - 800 ml = 1700 ml = 1.7 litres. Convert to same units. 🧮",
        wrongAnswerExplanations: {
            "1.8 litres": "This is incorrect. 2.5 litres - 800 ml = 2500 ml - 800 ml = 1700 ml = 1.7 litres, not 1.8 litres.",
            "1.5 litres": "This is incorrect. 2.5 litres - 800 ml = 2500 ml - 800 ml = 1700 ml = 1.7 litres, not 1.5 litres.",
            "1.7 kilolitres": "This is incorrect. The result is 1.7 litres, not kilolitres (1 kilolitre = 1000 litres)."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch7_t1_qm7',
        type: "mcq",
        question: "A jug contains 1.2 litres of juice. It is shared equally among 8 children. How much juice does each child get? 🧃",
        options: [
            "120 ml", 
            "150 ml", 
            "180 ml", 
            "200 ml"
        ],
        correctAnswer: "150 ml",
        explanation: "1.2 litres = 1200 ml. 1200 ml ÷ 8 = 150 ml per child. Convert to ml first.",
        wrongAnswerExplanations: {
            "120 ml": "This is incorrect. 1.2 litres = 1200 ml. 1200 ml ÷ 8 = 150 ml, not 120 ml.",
            "180 ml": "This is incorrect. 1.2 litres = 1200 ml. 1200 ml ÷ 8 = 150 ml, not 180 ml.",
            "200 ml": "This is incorrect. 1.2 litres = 1200 ml. 1200 ml ÷ 8 = 150 ml, not 200 ml."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch7_t1_qm8',
        type: "mcq",
        question: "Mrs. Sharma needs 3.5 litres of milk for making sweets. She already has 2750 ml. How much more milk does she need?",
        options: [
            "500 ml", 
            "750 ml", 
            "1250 ml", 
            "1500 ml"
        ],
        correctAnswer: "750 ml",
        explanation: "3.5 litres = 3500 ml. 3500 ml - 2750 ml = 750 ml more needed. 🥛",
        wrongAnswerExplanations: {
            "500 ml": "This is incorrect. 3.5 litres - 2750 ml = 3500 ml - 2750 ml = 750 ml, not 500 ml.",
            "1250 ml": "This is incorrect. 3.5 litres - 2750 ml = 3500 ml - 2750 ml = 750 ml, not 1250 ml.",
            "1500 ml": "This is incorrect. 3.5 litres - 2750 ml = 3500 ml - 2750 ml = 750 ml, not 1500 ml."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch7_t1_qm9',
        type: "mcq",
        question: "A bottle is 3/4 full with 600 ml of water. What is the total capacity of the bottle?",
        options: [
            "750 ml", 
            "800 ml", 
            "850 ml", 
            "900 ml"
        ],
        correctAnswer: "800 ml",
        explanation: "If 3/4 of the bottle contains 600 ml, then 1/4 contains 200 ml, so the total capacity is 800 ml. 🧮",
        wrongAnswerExplanations: {
            "750 ml": "This is incorrect. If 3/4 = 600 ml, then 1/4 = 200 ml, so total = 800 ml, not 750 ml.",
            "850 ml": "This is incorrect. If 3/4 = 600 ml, then 1/4 = 200 ml, so total = 800 ml, not 850 ml.",
            "900 ml": "This is incorrect. If 3/4 = 600 ml, then 1/4 = 200 ml, so total = 800 ml, not 900 ml."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch7_t1_qm10',
        type: "mcq",
        question: "Rahul drinks 2 litres of water every day. How much water does he drink in a week (7 days)? 💧",
        options: [
            "7 litres", 
            "10 litres", 
            "14 litres", 
            "21 litres"
        ],
        correctAnswer: "14 litres",
        explanation: "2 litres per day × 7 days = 14 litres in total for the week.",
        wrongAnswerExplanations: {
            "7 litres": "This would be for drinking 1 litre per day for 7 days, not 2 litres per day.",
            "10 litres": "This would be for drinking 2 litres per day for 5 days, not 7 days.",
            "21 litres": "This would be for drinking 3 litres per day for 7 days, not 2 litres per day."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch7_t1_qm11',
        type: "mcq",
        question: "A large water bottle holds 2 litres. A small water bottle holds 500 ml. How many small bottles equal the capacity of 3 large bottles?",
        options: [
            "6 small bottles", 
            "8 small bottles", 
            "12 small bottles", 
            "15 small bottles"
        ],
        correctAnswer: "12 small bottles",
        explanation: "3 large bottles = 3 × 2 litres = 6 litres = 6000 ml. 6000 ÷ 500 = 12 small bottles. 🧮",
        wrongAnswerExplanations: {
            "6 small bottles": "This would equal only 6 × 500 ml = 3000 ml = 3 litres, which is not enough.",
            "8 small bottles": "This would equal only 8 × 500 ml = 4000 ml = 4 litres, which is not enough.",
            "15 small bottles": "This would equal 15 × 500 ml = 7500 ml = 7.5 litres, which is too much."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch7_t1_qm12',
        type: "mcq",
        question: "A jug has a capacity of 1.5 litres. How many 125 ml glasses can be filled from this jug?",
        options: [
            "8 glasses", 
            "10 glasses", 
            "12 glasses", 
            "15 glasses"
        ],
        correctAnswer: "12 glasses",
        explanation: "1.5 litres = 1500 ml. 1500 ÷ 125 = 12 glasses. Convert to same unit first. 🧮",
        wrongAnswerExplanations: {
            "8 glasses": "This is incorrect. 1.5 litres = 1500 ml, and 1500 ÷ 125 = 12, not 8.",
            "10 glasses": "This is incorrect. 1.5 litres = 1500 ml, and 1500 ÷ 125 = 12, not 10.",
            "15 glasses": "This is incorrect. 1.5 litres = 1500 ml, and 1500 ÷ 125 = 12, not 15."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch7_t1_qm13',
        type: "mcq",
        question: "Seema wants to fill a 2-litre container using a 250 ml measuring cup. The container already has 500 ml of water. How many full cups does she need to add to fill the container? 🚰",
        options: [
            "5 cups", 
            "6 cups", 
            "7 cups", 
            "8 cups"
        ],
        correctAnswer: "6 cups",
        explanation: "Space remaining = 2 litres - 500 ml = 2000 ml - 500 ml = 1500 ml. 1500 ÷ 250 = 6 cups.",
        wrongAnswerExplanations: {
            "5 cups": "5 cups would add 5 × 250 ml = 1250 ml, which is not enough to fill the container.",
            "7 cups": "7 cups would add 7 × 250 ml = 1750 ml, which is too much for the container.",
            "8 cups": "8 cups would add 8 × 250 ml = 2000 ml, which is far too much for the container."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch7_t1_qm14',
        type: "mcq",
        question: "In a science experiment, students need to measure exactly 75 ml of water. Which measuring tool would be most appropriate?",
        options: [
            "A 1-litre measuring jug", 
            "A 100 ml graduated cylinder", 
            "A 500 ml beaker", 
            "A 1000 ml bucket"
        ],
        correctAnswer: "A 100 ml graduated cylinder",
        explanation: "A 100 ml graduated cylinder allows precise measurement of smaller volumes like 75 ml. 🧪",
        wrongAnswerExplanations: {
            "A 1-litre measuring jug": "This is too large and would not provide precise measurement for 75 ml.",
            "A 500 ml beaker": "This is too large and would not provide precise measurement for 75 ml.",
            "A 1000 ml bucket": "This is far too large and would not provide any precise measurement."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch7_t1_qm15',
        type: "mcq",
        question: "A family uses 20 litres of water daily for drinking and cooking. How much water do they use in 30 days?",
        options: [
            "60 litres", 
            "300 litres", 
            "600 litres", 
            "900 litres"
        ],
        correctAnswer: "600 litres",
        explanation: "20 litres per day × 30 days = 600 litres total. Simple multiplication. 💧",
        wrongAnswerExplanations: {
            "60 litres": "This would be for 3 days (3 × 20 litres), not 30 days.",
            "300 litres": "This would be for 15 days (15 × 20 litres), not 30 days.",
            "900 litres": "This would be for 45 days (45 × 20 litres), not 30 days."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch7_t1_qm16',
        type: "mcq",
        question: "A water tank is 1/3 full with 400 litres of water. What is the total capacity of the tank?",
        options: [
            "800 litres", 
            "1200 litres", 
            "1333 litres", 
            "1600 litres"
        ],
        correctAnswer: "1200 litres",
        explanation: "If 1/3 of the tank contains 400 litres, then total capacity = 3 × 400 litres = 1200 litres. 🧮",
        wrongAnswerExplanations: {
            "800 litres": "This is incorrect. If 1/3 = 400 litres, then full capacity = 3 × 400 = 1200 litres, not 800 litres.",
            "1333 litres": "This is incorrect. If 1/3 = 400 litres, then full capacity = 3 × 400 = 1200 litres, not 1333 litres.",
            "1600 litres": "This is incorrect. If 1/3 = 400 litres, then full capacity = 3 × 400 = 1200 litres, not 1600 litres."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch7_t1_qm17',
        type: "mcq",
        question: "Rohan has two containers. Container A has 1.75 litres of water and Container B has 850 ml. How much more water is in Container A than in Container B? 🚰",
        options: [
            "0.65 litres", 
            "0.9 litres", 
            "0.95 litres", 
            "1.25 litres"
        ],
        correctAnswer: "0.9 litres",
        explanation: "Container A: 1.75 litres = 1750 ml. Difference: 1750 ml - 850 ml = 900 ml = 0.9 litres.",
        wrongAnswerExplanations: {
            "0.65 litres": "This is incorrect. 1.75 litres - 850 ml = 1750 ml - 850 ml = 900 ml = 0.9 litres, not 0.65 litres.",
            "0.95 litres": "This is incorrect. 1.75 litres - 850 ml = 1750 ml - 850 ml = 900 ml = 0.9 litres, not 0.95 litres.",
            "1.25 litres": "This is incorrect. 1.75 litres - 850 ml = 1750 ml - 850 ml = 900 ml = 0.9 litres, not 1.25 litres."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch7_t1_qm18',
        type: "mcq",
        question: "A recipe for 4 people requires 400 ml of milk. How much milk is needed if the recipe is adjusted for 10 people? 🥛",
        options: [
            "800 ml", 
            "1 litre", 
            "1.2 litres", 
            "1.5 litres"
        ],
        correctAnswer: "1 litre",
        explanation: "For 4 people: 400 ml. For 10 people: (400 ÷ 4) × 10 = 100 × 10 = 1000 ml = 1 litre.",
        wrongAnswerExplanations: {
            "800 ml": "This would be enough for 8 people (8 × 100 ml), not 10 people.",
            "1.2 litres": "This would be enough for 12 people (12 × 100 ml), not 10 people.",
            "1.5 litres": "This would be enough for 15 people (15 × 100 ml), not 10 people."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch7_t1_qm19',
        type: "mcq",
        question: "A small milk carton holds 250 ml. How many such cartons would contain the same amount of milk as a large 2.5-litre container?",
        options: [
            "5 cartons", 
            "8 cartons", 
            "10 cartons", 
            "12 cartons"
        ],
        correctAnswer: "10 cartons",
        explanation: "2.5 litres = 2500 ml. 2500 ÷ 250 = 10 cartons. 🧮",
        wrongAnswerExplanations: {
            "5 cartons": "5 cartons would contain 5 × 250 ml = 1250 ml, which is only half of 2.5 litres.",
            "8 cartons": "8 cartons would contain 8 × 250 ml = 2000 ml, which is less than 2.5 litres.",
            "12 cartons": "12 cartons would contain 12 × 250 ml = 3000 ml, which is more than 2.5 litres."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch7_t1_qm20',
        type: "mcq",
        question: "When measuring liquids, which of these statements is true? 🧪",
        options: [
            "A millilitre is larger than a litre", 
            "500 ml is the same as 0.5 litres", 
            "1 litre = 100 millilitres", 
            "We use kilograms to measure liquid volume"
        ],
        correctAnswer: "500 ml is the same as 0.5 litres",
        explanation: "500 ml = 0.5 litres is correct. 1 litre = 1000 ml, so 500 ml = 500/1000 litres = 0.5 litres.",
        wrongAnswerExplanations: {
            "A millilitre is larger than a litre": "This is incorrect. A litre is 1000 times larger than a millilitre.",
            "1 litre = 100 millilitres": "This is incorrect. 1 litre = 1000 millilitres, not 100 millilitres.",
            "We use kilograms to measure liquid volume": "This is incorrect. Kilograms measure mass/weight, not volume."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    }
];
