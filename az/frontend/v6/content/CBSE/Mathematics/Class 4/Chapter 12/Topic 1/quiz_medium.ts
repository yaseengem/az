import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl4_ch12_t1_qm1',
        type: "mcq",
        question: "A pineapple weighs 1 kg 200 g. What is its weight in grams?",
        options: ["120 grams", "1200 grams", "1020 grams", "12000 grams"],
        correctAnswer: "1200 grams",
        explanation: "1 kg = 1000 g, so 1 kg 200 g = 1000 g + 200 g = 1200 g. This conversion combines different weight units. 🍍",
        wrongAnswerExplanations: {
            "120 grams": "This is too small. 1 kg alone is 1000 g.",
            "1020 grams": "This is incorrect. 1 kg 200 g = 1000 g + 200 g = 1200 g.",
            "12000 grams": "This is too large. 1 kg = 1000 g, not 10000 g."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch12_t1_qm2',
        type: "mcq",
        question: "If Ravi weighs 32 kg and his sister Meena weighs 28 kg, how much more does Ravi weigh than Meena?",
        options: ["4 kg", "60 kg", "4000 g", "Both 4 kg and 4000 g"],
        correctAnswer: "Both 4 kg and 4000 g",
        explanation: "32 kg - 28 kg = 4 kg = 4000 g. Both answers are correct as they represent the same weight in different units. ⚖️",
        wrongAnswerExplanations: {
            "4 kg": "This is correct, but 4000 g is also correct as they are equivalent.",
            "60 kg": "This is incorrect. 32 kg + 28 kg = 60 kg, but we need the difference, not the sum.",
            "4000 g": "This is correct, but 4 kg is also correct as they are equivalent."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch12_t1_qm3',
        type: "mcq",
        question: "A watermelon weighs 5 kg 500 g. After cutting and removing some parts, it weighs 4 kg 750 g. How much was removed?",
        options: ["750 g", "1 kg 250 g", "1250 g", "Both B and C"],
        correctAnswer: "Both B and C",
        explanation: "5 kg 500 g - 4 kg 750 g = 750 g = 0.75 kg. Converting to the same unit: 5500 g - 4750 g = 750 g = 0.75 kg. 🍉",
        wrongAnswerExplanations: {
            "750 g": "This is correct, but it's not the only correct answer.",
            "1 kg 250 g": "This is incorrect. The difference is 750 g or 0.75 kg, not 1.25 kg.",
            "1250 g": "This is incorrect. The difference is 750 g, not 1250 g."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch12_t1_qm4',
        type: "mcq",
        question: "Five students have weights 28 kg, 30 kg, 26 kg, 29 kg, and 32 kg. What is their average weight?",
        options: ["28 kg", "29 kg", "30 kg", "31 kg"],
        correctAnswer: "29 kg",
        explanation: "Average = Sum ÷ Number = (28 + 30 + 26 + 29 + 32) ÷ 5 = 145 ÷ 5 = 29 kg. Finding the average helps understand typical weights. 👧👦",
        wrongAnswerExplanations: {
            "28 kg": "This is incorrect. The calculation is (28 + 30 + 26 + 29 + 32) ÷ 5 = 145 ÷ 5 = 29 kg.",
            "30 kg": "This is incorrect. The calculation is (28 + 30 + 26 + 29 + 32) ÷ 5 = 145 ÷ 5 = 29 kg.",
            "31 kg": "This is incorrect. The calculation is (28 + 30 + 26 + 29 + 32) ÷ 5 = 145 ÷ 5 = 29 kg."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch12_t1_qm5',
        type: "mcq",
        question: "A recipe calls for 250 g of flour, 150 g of sugar, and 100 g of butter. What is the total weight of these ingredients?",
        options: ["400 g", "500 g", "550 g", "600 g"],
        correctAnswer: "500 g",
        explanation: "250 g + 150 g + 100 g = 500 g. Adding all ingredient weights gives the total for the recipe. 🧁",
        wrongAnswerExplanations: {
            "400 g": "This is incorrect. The sum is 250 g + 150 g + 100 g = 500 g.",
            "550 g": "This is incorrect. The sum is 250 g + 150 g + 100 g = 500 g.",
            "600 g": "This is incorrect. The sum is 250 g + 150 g + 100 g = 500 g."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch12_t1_qm6',
        type: "mcq",
        question: "A fruit seller has 3 kg 500 g of apples and 2 kg 750 g of oranges. What is the total weight of the fruits?",
        options: ["5 kg 250 g", "6 kg 250 g", "6 kg 25 g", "5 kg 2500 g"],
        correctAnswer: "6 kg 250 g",
        explanation: "3 kg 500 g + 2 kg 750 g = 5 kg 1250 g = 6 kg 250 g (since 1250 g = 1 kg 250 g). 🍎🍊",
        wrongAnswerExplanations: {
            "5 kg 250 g": "This is incorrect. 3 kg 500 g + 2 kg 750 g = 5 kg 1250 g = 6 kg 250 g.",
            "6 kg 25 g": "This is incorrect. The answer is 6 kg 250 g, not 6 kg 25 g.",
            "5 kg 2500 g": "This is incorrect. 2500 g should be converted to 2 kg 500 g, making the total 5 kg + 2 kg 500 g = 7 kg 500 g."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch12_t1_qm7',
        type: "mcq",
        question: "If a pomegranate weighs 350 g and a mango weighs 250 g, how many such pomegranates would weigh the same as 7 such mangoes?",
        options: ["3", "5", "7", "9"],
        correctAnswer: "5",
        explanation: "Weight of 7 mangoes = 7 × 250 g = 1750 g. Number of pomegranates = 1750 g ÷ 350 g = 5 pomegranates. 🍎",
        wrongAnswerExplanations: {
            "3": "This is incorrect. 3 pomegranates would weigh 3 × 350 g = 1050 g, less than 7 mangoes.",
            "7": "This is incorrect. 7 pomegranates would weigh 7 × 350 g = 2450 g, more than 7 mangoes.",
            "9": "This is incorrect. 9 pomegranates would weigh 9 × 350 g = 3150 g, much more than 7 mangoes."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch12_t1_qm8',
        type: "mcq",
        question: "A balance scale has a 500 g weight on one side. Which combination of weights on the other side would balance it?",
        options: ["Two 200 g weights and one 50 g weight", "One 200 g weight and three 100 g weights", "Five 100 g weights", "Two 250 g weights"],
        correctAnswer: "Two 200 g weights and one 100 g weight",
        explanation: "We need combinations equaling 500 g. 200 g + 200 g + 100 g = 500 g, which balances the scale. ⚖️",
        wrongAnswerExplanations: {
            "Two 200 g weights and one 50 g weight": "This equals 450 g, which is less than 500 g.",
            "One 200 g weight and three 100 g weights": "This equals 500 g, so this is correct.",
            "Five 100 g weights": "This equals 500 g, so this is correct.",
            "Two 250 g weights": "This equals 500 g, so this is correct."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch12_t1_qm9',
        type: "mcq",
        question: "A box of chocolates weighs 750 g. If you want to make 3 equal gift packages, how much will each package weigh?",
        options: ["250 g", "300 g", "350 g", "400 g"],
        correctAnswer: "250 g",
        explanation: "750 g ÷ 3 = 250 g. Dividing the total weight by the number of packages gives the weight of each package. 🍫",
        wrongAnswerExplanations: {
            "300 g": "This is incorrect. 750 g ÷ 3 = 250 g, not 300 g.",
            "350 g": "This is incorrect. 750 g ÷ 3 = 250 g, not 350 g.",
            "400 g": "This is incorrect. 750 g ÷ 3 = 250 g, not 400 g."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch12_t1_qm10',
        type: "mcq",
        question: "Aman bought 2 kg 500 g of rice and 1 kg 750 g of dal. He used 1 kg 250 g of rice for cooking. How much rice is left?",
        options: ["1 kg 250 g", "1250 g", "Both A and B", "750 g"],
        correctAnswer: "Both A and B",
        explanation: "2 kg 500 g - 1 kg 250 g = 1 kg 250 g = 1250 g. Both answers are correct in different units. 🍚",
        wrongAnswerExplanations: {
            "1 kg 250 g": "This is correct, but 1250 g is also correct as they are equivalent.",
            "1250 g": "This is correct, but 1 kg 250 g is also correct as they are equivalent.",
            "750 g": "This is incorrect. 2 kg 500 g - 1 kg 250 g = 1 kg 250 g = 1250 g, not 750 g."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch12_t1_qm11',
        type: "mcq",
        question: "A grocer has 25 kg of sugar. She sells 8 kg 500 g in the morning and 9 kg 750 g in the afternoon. How much sugar is left?",
        options: ["6 kg 750 g", "7 kg 250 g", "6.75 kg", "7.25 kg"],
        correctAnswer: "6 kg 750 g",
        explanation: "25 kg - 8 kg 500 g - 9 kg 750 g = 25 kg - 18 kg 250 g = 6 kg 750 g. Finding the remainder through subtraction. 🧂",
        wrongAnswerExplanations: {
            "7 kg 250 g": "This is incorrect. The calculation is 25 - (8.5 + 9.75) = 25 - 18.25 = 6.75 kg = 6 kg 750 g.",
            "6.75 kg": "This is correct when expressed in decimal, equivalent to 6 kg 750 g.",
            "7.25 kg": "This is incorrect. The calculation is 25 - (8.5 + 9.75) = 25 - 18.25 = 6.75 kg, not 7.25 kg."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch12_t1_qm12',
        type: "mcq",
        question: "If a kilogram of apples costs ₹80, how much would 2 kg 500 g of apples cost?",
        options: ["₹160", "₹180", "₹200", "₹250"],
        correctAnswer: "₹200",
        explanation: "2 kg 500 g = 2.5 kg. Cost = Rate × Weight = ₹80 × 2.5 = ₹200. This calculation uses proportional reasoning. 🍎",
        wrongAnswerExplanations: {
            "₹160": "This is the cost of 2 kg only (₹80 × 2), not including the extra 500 g.",
            "₹180": "This is incorrect. The cost is ₹80 × 2.5 = ₹200.",
            "₹250": "This is incorrect. The cost is ₹80 × 2.5 = ₹200, not ₹250."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch12_t1_qm13',
        type: "mcq",
        question: "A jar weighs 250 g when empty. When filled with honey, it weighs 1 kg 150 g. What is the weight of the honey?",
        options: ["900 g", "850 g", "1000 g", "1400 g"],
        correctAnswer: "900 g",
        explanation: "Weight of honey = Total weight - Weight of jar = 1 kg 150 g - 250 g = 1000 g + 150 g - 250 g = 900 g. 🍯",
        wrongAnswerExplanations: {
            "850 g": "This is incorrect. The calculation is 1150 g - 250 g = 900 g, not 850 g.",
            "1000 g": "This is incorrect. The calculation is 1150 g - 250 g = 900 g, not 1000 g.",
            "1400 g": "This is incorrect. The calculation is 1150 g - 250 g = 900 g, not 1400 g."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch12_t1_qm14',
        type: "mcq",
        question: "A shopkeeper has 5 kg of tea. He packs it equally in 20 small packets. How much tea is in each packet?",
        options: ["200 g", "250 g", "300 g", "400 g"],
        correctAnswer: "250 g",
        explanation: "5 kg = 5000 g. Weight per packet = 5000 g ÷ 20 = 250 g. This shows how to divide a weight into equal parts. 🍵",
        wrongAnswerExplanations: {
            "200 g": "This is incorrect. 5000 g ÷ 20 = 250 g, not 200 g.",
            "300 g": "This is incorrect. 5000 g ÷ 20 = 250 g, not 300 g.",
            "400 g": "This is incorrect. 5000 g ÷ 20 = 250 g, not 400 g."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch12_t1_qm15',
        type: "mcq",
        question: "In a tug-of-war game, Team A has 4 children with weights 30 kg, 32 kg, 28 kg, and 34 kg. Team B has 4 children with weights 29 kg, 31 kg, 33 kg, and 35 kg. Which team has the greater total weight?",
        options: ["Team A", "Team B", "Both teams have equal weight", "Cannot be determined"],
        correctAnswer: "Team B",
        explanation: "Team A: 30 + 32 + 28 + 34 = 124 kg. Team B: 29 + 31 + 33 + 35 = 128 kg. Team B has greater total weight. 🧩",
        wrongAnswerExplanations: {
            "Team A": "This is incorrect. Team A's total is 124 kg, which is less than Team B's 128 kg.",
            "Both teams have equal weight": "This is incorrect. The teams have different total weights (124 kg vs 128 kg).",
            "Cannot be determined": "This is incorrect. We can determine the answer by adding up the weights."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch12_t1_qm16',
        type: "mcq",
        question: "What is the weight of 5 identical books if each book weighs 300 g?",
        options: ["1 kg", "1 kg 500 g", "1.5 kg", "Both B and C"],
        correctAnswer: "Both B and C",
        explanation: "Total weight = 5 × 300 g = 1500 g = 1 kg 500 g = 1.5 kg. Both forms are correct, just expressed in different units. 📚",
        wrongAnswerExplanations: {
            "1 kg": "This is incorrect. 5 × 300 g = 1500 g = 1.5 kg, not 1 kg.",
            "1 kg 500 g": "This is correct, but it's not the only correct answer.",
            "1.5 kg": "This is correct, but it's not the only correct answer."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch12_t1_qm17',
        type: "mcq",
        question: "A watermelon weighs 3 kg 250 g. Another watermelon weighs 2750 g. Which watermelon is heavier, and by how much?",
        options: ["First by 500 g", "First by 0.5 kg", "Second by 500 g", "Both A and B"],
        correctAnswer: "Both A and B",
        explanation: "First: 3 kg 250 g = 3250 g. Second: 2750 g. Difference = 3250 g - 2750 g = 500 g = 0.5 kg. Both A and B are correct. 🍉",
        wrongAnswerExplanations: {
            "First by 500 g": "This is correct, but 0.5 kg is also correct as they are equivalent.",
            "First by 0.5 kg": "This is correct, but 500 g is also correct as they are equivalent.",
            "Second by 500 g": "This is incorrect. The first watermelon is heavier, not the second."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch12_t1_qm18',
        type: "mcq",
        question: "A teacher wanted to distribute 2 kg of chocolates equally among 16 students. How much chocolate does each student get?",
        options: ["125 g", "225 g", "250 g", "200 g"],
        correctAnswer: "125 g",
        explanation: "2 kg = 2000 g. Amount per student = 2000 g ÷ 16 = 125 g. This shows division of weight among a group. 🍫",
        wrongAnswerExplanations: {
            "225 g": "This is incorrect. 2000 g ÷ 16 = 125 g, not 225 g.",
            "250 g": "This is incorrect. 2000 g ÷ 16 = 125 g, not 250 g.",
            "200 g": "This is incorrect. 2000 g ÷ 16 = 125 g, not 200 g."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch12_t1_qm19',
        type: "mcq",
        question: "A fruit seller had 10 kg of apples. He sold 4 kg 250 g on Monday and 3 kg 850 g on Tuesday. How much did he sell in these two days?",
        options: ["7 kg 100 g", "8 kg 100 g", "8 kg 10 g", "7 kg 10 g"],
        correctAnswer: "8 kg 100 g",
        explanation: "4 kg 250 g + 3 kg 850 g = 7 kg 1100 g = 8 kg 100 g. Converting 1100 g to 1 kg 100 g gives the final answer. 🍎",
        wrongAnswerExplanations: {
            "7 kg 100 g": "This is incorrect. 4 kg 250 g + 3 kg 850 g = 7 kg 1100 g = 8 kg 100 g.",
            "8 kg 10 g": "This is incorrect. The correct answer is 8 kg 100 g, not 8 kg 10 g.",
            "7 kg 10 g": "This is incorrect. The calculation is 4 kg 250 g + 3 kg 850 g = 7 kg 1100 g = 8 kg 100 g."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch12_t1_qm20',
        type: "mcq",
        question: "A recipe needs 1 kg 750 g of flour. Sita has 3 kg of flour. After using the required amount, how much flour will she have left?",
        options: ["1 kg 250 g", "1250 g", "1.25 kg", "All of the above"],
        correctAnswer: "All of the above",
        explanation: "3 kg - 1 kg 750 g = 1 kg 250 g = 1250 g = 1.25 kg. All options represent the same weight in different formats. 🧮",
        wrongAnswerExplanations: {
            "1 kg 250 g": "This is correct, but it's not the only correct answer.",
            "1250 g": "This is correct, but it's not the only correct answer.",
            "1.25 kg": "This is correct, but it's not the only correct answer."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    }
];
