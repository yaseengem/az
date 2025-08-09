import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl4_ch6_t1_qm1',
        type: "mcq",
        question: "A shopkeeper buys 25 pencils for ₹100. She sells each pencil for ₹5. What is her total profit?",
        options: ["₹25", "₹50", "₹125", "₹150"],
        correctAnswer: "₹25",
        explanation: "Cost price = ₹100, Selling price = 25 × ₹5 = ₹125, Profit = ₹125 - ₹100 = ₹25. ✏️",
        wrongAnswerExplanations: {
            "₹50": "The correct profit is ₹125 - ₹100 = ₹25, not ₹50.",
            "₹125": "₹125 is the total selling price, not the profit.",
            "₹150": "The sum of cost price and selling price is ₹225, not ₹150, and this is not the profit."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch6_t1_qm2',
        type: "mcq",
        question: "Rahul buys 3 oranges for ₹20 and 2 apples for ₹15. If he gives the shopkeeper ₹50, how much change will he get?",
        options: ["₹5", "₹15", "₹20", "₹35"],
        correctAnswer: "₹15",
        explanation: "Total cost = ₹20 + ₹15 = ₹35, Change = ₹50 - ₹35 = ₹15. 🍊",
        wrongAnswerExplanations: {
            "₹5": "The change is ₹50 - ₹35 = ₹15, not ₹5.",
            "₹20": "The change is ₹50 - ₹35 = ₹15, not ₹20.",
            "₹35": "₹35 is the total cost, not the change."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 40
    },
    {
        id: 'cl4_ch6_t1_qm3',
        type: "mcq",
        question: "A shopkeeper buys 10 books for ₹200 and sells 7 of them for ₹25 each. How much more money does he need to make to recover his cost?",
        options: ["₹25", "₹50", "₹75", "₹125"],
        correctAnswer: "₹25",
        explanation: "Amount received = 7 × ₹25 = ₹175, Still needed = ₹200 - ₹175 = ₹25. 📚",
        wrongAnswerExplanations: {
            "₹50": "The amount still needed is ₹200 - ₹175 = ₹25, not ₹50.",
            "₹75": "The amount still needed is ₹200 - ₹175 = ₹25, not ₹75.",
            "₹125": "The amount still needed is ₹200 - ₹175 = ₹25, not ₹125."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 50
    },
    {
        id: 'cl4_ch6_t1_qm4',
        type: "mcq",
        question: "Meena buys 3 kg of apples at ₹40 per kg and 2 kg of oranges at ₹30 per kg. How much does she spend in total?",
        options: ["₹120", "₹140", "₹180", "₹210"],
        correctAnswer: "₹180",
        explanation: "Total cost = (3 × ₹40) + (2 × ₹30) = ₹120 + ₹60 = ₹180. 🍎",
        wrongAnswerExplanations: {
            "₹120": "₹120 is only the cost of apples, not the total cost.",
            "₹140": "The total cost is ₹120 + ₹60 = ₹180, not ₹140.",
            "₹210": "The total cost is ₹120 + ₹60 = ₹180, not ₹210."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch6_t1_qm5',
        type: "mcq",
        question: "A shopkeeper bought a box of 50 chocolates for ₹200. If she wants to make a profit of ₹100, at what price should she sell each chocolate?",
        options: ["₹3", "₹4", "₹5", "₹6"],
        correctAnswer: "₹6",
        explanation: "Total selling price needed = ₹200 + ₹100 = ₹300, Price per chocolate = ₹300 ÷ 50 = ₹6. 🍫",
        wrongAnswerExplanations: {
            "₹3": "At ₹3 each, the total would be ₹150, which gives a loss, not profit.",
            "₹4": "At ₹4 each, the total would be ₹200, which gives no profit.",
            "₹5": "At ₹5 each, the total would be ₹250, giving only ₹50 profit, not ₹100."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 50
    },
    {
        id: 'cl4_ch6_t1_qm6',
        type: "mcq",
        question: "Raju buys a toy for ₹85 and sells it for ₹75. What is his loss percentage?",
        options: ["10%", "11.76%", "12.5%", "15%"],
        correctAnswer: "11.76%",
        explanation: "Loss = ₹10, Loss percentage = (Loss ÷ Cost price) × 100 = (₹10 ÷ ₹85) × 100 = 11.76%. 📉",
        wrongAnswerExplanations: {
            "10%": "10% of ₹85 is ₹8.5, but the actual loss is ₹10.",
            "12.5%": "12.5% of ₹85 is approximately ₹10.6, not exactly ₹10.",
            "15%": "15% of ₹85 is ₹12.75, not ₹10."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch6_t1_qm7',
        type: "mcq",
        question: "Sita has ₹100. She spends ₹37 on books and ₹45 on stationery. What percentage of her money is left?",
        options: ["8%", "18%", "28%", "38%"],
        correctAnswer: "18%",
        explanation: "Money spent = ₹37 + ₹45 = ₹82, Money left = ₹100 - ₹82 = ₹18, Percentage left = (₹18 ÷ ₹100) × 100 = 18%. 💸",
        wrongAnswerExplanations: {
            "8%": "The money left is ₹18, which is 18% of ₹100, not 8%.",
            "28%": "The money left is ₹18, which is 18% of ₹100, not 28%.",
            "38%": "The money left is ₹18, which is 18% of ₹100, not 38%."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 50
    },
    {
        id: 'cl4_ch6_t1_qm8',
        type: "mcq",
        question: "A fruit seller buys 10 kg of apples for ₹400. She sells 6 kg at ₹50 per kg and the rest at ₹45 per kg. What is her total profit?",
        options: ["₹40", "₹60", "₹70", "₹80"],
        correctAnswer: "₹70",
        explanation: "Selling price = (6 × ₹50) + (4 × ₹45) = ₹300 + ₹180 = ₹480, Profit = ₹480 - ₹400 = ₹80. 🍎",
        wrongAnswerExplanations: {
            "₹40": "The correct profit is ₹80, not ₹40.",
            "₹60": "The correct profit is ₹80, not ₹60.",
            "₹70": "The correct profit is ₹80, not ₹70."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch6_t1_qm9',
        type: "mcq",
        question: "Raj buys 3 shirts for ₹450. He sells each shirt for ₹200. What is his profit or loss?",
        options: ["₹150 profit", "₹150 loss", "₹250 profit", "₹200 profit"],
        correctAnswer: "₹150 profit",
        explanation: "Selling price = 3 × ₹200 = ₹600, Profit = ₹600 - ₹450 = ₹150. Since selling price > cost price, it's a profit. 👕",
        wrongAnswerExplanations: {
            "₹150 loss": "Since selling price > cost price, it's a profit, not a loss.",
            "₹250 profit": "The profit is ₹150, not ₹250.",
            "₹200 profit": "The profit is ₹150, not ₹200."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch6_t1_qm10',
        type: "mcq",
        question: "A shopkeeper buys 20 pens for ₹200 and sells them for ₹15 each. What is the profit percentage?",
        options: ["15%", "20%", "25%", "50%"],
        correctAnswer: "50%",
        explanation: "Selling price = 20 × ₹15 = ₹300, Profit = ₹300 - ₹200 = ₹100, Profit percentage = (₹100 ÷ ₹200) × 100 = 50%. 📈",
        wrongAnswerExplanations: {
            "15%": "₹15 is the selling price per pen, not the profit percentage.",
            "20%": "20% of ₹200 is ₹40, but the actual profit is ₹100.",
            "25%": "25% of ₹200 is ₹50, but the actual profit is ₹100."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 50
    },
    {
        id: 'cl4_ch6_t1_qm11',
        type: "mcq",
        question: "Priya buys 5 kg of sugar at ₹40 per kg and 3 kg of rice at ₹50 per kg. How much change will she get from ₹500?",
        options: ["₹150", "₹220", "₹280", "₹350"],
        correctAnswer: "₹150",
        explanation: "Total cost = (5 × ₹40) + (3 × ₹50) = ₹200 + ₹150 = ₹350, Change = ₹500 - ₹350 = ₹150. 🛒",
        wrongAnswerExplanations: {
            "₹220": "The change is ₹500 - ₹350 = ₹150, not ₹220.",
            "₹280": "The change is ₹500 - ₹350 = ₹150, not ₹280.",
            "₹350": "₹350 is the total cost, not the change."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 50
    },
    {
        id: 'cl4_ch6_t1_qm12',
        type: "mcq",
        question: "A fruit seller buys oranges at ₹4 per orange and sells them at ₹5 per orange. How many oranges must she sell to make a profit of ₹20?",
        options: ["10", "15", "20", "40"],
        correctAnswer: "20",
        explanation: "Profit per orange = ₹5 - ₹4 = ₹1, Number of oranges needed = ₹20 ÷ ₹1 = 20 oranges. 🍊",
        wrongAnswerExplanations: {
            "10": "With a profit of ₹1 per orange, 10 oranges would give a profit of ₹10, not ₹20.",
            "15": "With a profit of ₹1 per orange, 15 oranges would give a profit of ₹15, not ₹20.",
            "40": "With a profit of ₹1 per orange, 40 oranges would give a profit of ₹40, not ₹20."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 50
    },
    {
        id: 'cl4_ch6_t1_qm13',
        type: "mcq",
        question: "Raju buys a dozen bananas for ₹60 and sells each banana for ₹6. What is his profit or loss?",
        options: ["₹12 profit", "₹12 loss", "₹72 profit", "No profit, no loss"],
        correctAnswer: "₹12 profit",
        explanation: "Selling price = 12 × ₹6 = ₹72, Profit = ₹72 - ₹60 = ₹12. Since selling price > cost price, it's a profit. 🍌",
        wrongAnswerExplanations: {
            "₹12 loss": "Since selling price > cost price, it's a profit, not a loss.",
            "₹72 profit": "₹72 is the total selling price, not the profit.",
            "No profit, no loss": "There is a profit of ₹12, not zero."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch6_t1_qm14',
        type: "mcq",
        question: "Meena has ₹200. She spends 25% of her money on a book and 40% on stationery. How much money does she have left?",
        options: ["₹30", "₹50", "₹70", "₹130"],
        correctAnswer: "₹70",
        explanation: "Amount spent = 25% of ₹200 + 40% of ₹200 = ₹50 + ₹80 = ₹130, Money left = ₹200 - ₹130 = ₹70. 💰",
        wrongAnswerExplanations: {
            "₹30": "The money left is ₹70, not ₹30.",
            "₹50": "₹50 is only 25% of ₹200, not the money left.",
            "₹130": "₹130 is the amount spent, not the money left."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 50
    },
    {
        id: 'cl4_ch6_t1_qm15',
        type: "mcq",
        question: "A shopkeeper bought 30 pencils for ₹150. If he wants to make a profit of ₹60, at what price should he sell each pencil?",
        options: ["₹5", "₹6", "₹7", "₹10"],
        correctAnswer: "₹7",
        explanation: "Total selling price needed = ₹150 + ₹60 = ₹210, Price per pencil = ₹210 ÷ 30 = ₹7. ✏️",
        wrongAnswerExplanations: {
            "₹5": "At ₹5 each, the total would be ₹150, which gives no profit.",
            "₹6": "At ₹6 each, the total would be ₹180, giving only ₹30 profit, not ₹60.",
            "₹10": "At ₹10 each, the total would be ₹300, giving a profit of ₹150, not ₹60."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 50
    },
    {
        id: 'cl4_ch6_t1_qm16',
        type: "mcq",
        question: "Ram buys 4 toys for ₹200 and sells 3 of them for ₹180. At what price should he sell the 4th toy to make a total profit of ₹40?",
        options: ["₹40", "₹50", "₹60", "₹80"],
        correctAnswer: "₹60",
        explanation: "Cost price = ₹200, Money already received = ₹180, To make ₹40 profit: ₹200 + ₹40 - ₹180 = ₹60. 🧸",
        wrongAnswerExplanations: {
            "₹40": "Selling the 4th toy for ₹40 would give a total of ₹220, resulting in a profit of only ₹20.",
            "₹50": "Selling the 4th toy for ₹50 would give a total of ₹230, resulting in a profit of only ₹30.",
            "₹80": "Selling the 4th toy for ₹80 would give a total of ₹260, resulting in a profit of ₹60, not ₹40."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch6_t1_qm17',
        type: "mcq",
        question: "A shopkeeper buys 20 erasers for ₹60. He sells 15 erasers at ₹4 each and the rest at ₹3 each. What is his profit?",
        options: ["₹15", "₹18", "₹21", "₹25"],
        correctAnswer: "₹15",
        explanation: "Selling price = (15 × ₹4) + (5 × ₹3) = ₹60 + ₹15 = ₹75, Profit = ₹75 - ₹60 = ₹15. ✏️",
        wrongAnswerExplanations: {
            "₹18": "The profit is ₹15, not ₹18.",
            "₹21": "The profit is ₹15, not ₹21.",
            "₹25": "The profit is ₹15, not ₹25."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch6_t1_qm18',
        type: "mcq",
        question: "Meera buys a basket of 24 fruits for ₹120. She finds that 4 fruits are spoiled. At what price should she sell each of the remaining fruits to make a profit of ₹40?",
        options: ["₹6", "₹8", "₹10", "₹12"],
        correctAnswer: "₹8",
        explanation: "Total selling price needed = ₹120 + ₹40 = ₹160, Fruits to sell = 24 - 4 = 20, Price per fruit = ₹160 ÷ 20 = ₹8. 🍇",
        wrongAnswerExplanations: {
            "₹6": "At ₹6 each, the total would be ₹120, which gives no profit.",
            "₹10": "At ₹10 each, the total would be ₹200, giving a profit of ₹80, not ₹40.",
            "₹12": "At ₹12 each, the total would be ₹240, giving a profit of ₹120, not ₹40."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch6_t1_qm19',
        type: "mcq",
        question: "A shopkeeper buys 25 notebooks for ₹250 and sells each notebook for ₹12. What is his profit percentage?",
        options: ["10%", "20%", "25%", "50%"],
        correctAnswer: "20%",
        explanation: "Selling price = 25 × ₹12 = ₹300, Profit = ₹300 - ₹250 = ₹50, Profit percentage = (₹50 ÷ ₹250) × 100 = 20%. 📚",
        wrongAnswerExplanations: {
            "10%": "10% of ₹250 is ₹25, but the actual profit is ₹50.",
            "25%": "25% of ₹250 is ₹62.5, not ₹50.",
            "50%": "50% of ₹250 is ₹125, not ₹50."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 50
    },
    {
        id: 'cl4_ch6_t1_qm20',
        type: "mcq",
        question: "Rani has ₹500. She spends 30% of her money on clothes, 25% on books, and 15% on stationery. How much money does she have left?",
        options: ["₹100", "₹125", "₹150", "₹350"],
        correctAnswer: "₹150",
        explanation: "Percentage spent = 30% + 25% + 15% = 70%, Percentage left = 100% - 70% = 30%, Money left = 30% of ₹500 = ₹150. 💸",
        wrongAnswerExplanations: {
            "₹100": "The money left is 30% of ₹500 = ₹150, not ₹100.",
            "₹125": "The money left is 30% of ₹500 = ₹150, not ₹125.",
            "₹350": "The amount spent is 70% of ₹500 = ₹350, not the money left."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 50
    }
];
