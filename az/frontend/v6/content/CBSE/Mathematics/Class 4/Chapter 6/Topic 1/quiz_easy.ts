import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl4_ch6_t1_qe1',
        type: "mcq",
        question: "If Ravi buys a pencil for ₹5 and sells it for ₹7, how much profit does he make?",
        options: ["₹1", "₹2", "₹3", "₹12"],
        correctAnswer: "₹2",
        explanation: "Profit = Selling price - Cost price. Here, ₹7 - ₹5 = ₹2. 💰",
        wrongAnswerExplanations: {
            "₹1": "The difference between ₹7 and ₹5 is ₹2, not ₹1.",
            "₹3": "The difference between ₹7 and ₹5 is ₹2, not ₹3.",
            "₹12": "₹12 is the sum of selling price and cost price, not the profit."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch6_t1_qe2',
        type: "mcq",
        question: "Mira bought 3 oranges for ₹15. How much did each orange cost?",
        options: ["₹3", "₹5", "₹8", "₹45"],
        correctAnswer: "₹5",
        explanation: "Cost per orange = Total cost ÷ Number of oranges = ₹15 ÷ 3 = ₹5. 🍊",
        wrongAnswerExplanations: {
            "₹3": "₹15 ÷ 3 = ₹5, not ₹3.",
            "₹8": "₹15 ÷ 3 = ₹5, not ₹8.",
            "₹45": "₹45 is the product of ₹15 and 3, not the cost per orange."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch6_t1_qe3',
        type: "mcq",
        question: "If Amit spends ₹50 on fruits and ₹25 on vegetables, how much money does he spend in total?",
        options: ["₹25", "₹50", "₹75", "₹100"],
        correctAnswer: "₹75",
        explanation: "Total spent = ₹50 + ₹25 = ₹75. Adding the amount spent on different items gives the total expenditure. 🛒",
        wrongAnswerExplanations: {
            "₹25": "₹25 is only the amount spent on vegetables, not the total.",
            "₹50": "₹50 is only the amount spent on fruits, not the total.",
            "₹100": "The total is ₹50 + ₹25 = ₹75, not ₹100."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 25
    },
    {
        id: 'cl4_ch6_t1_qe4',
        type: "mcq",
        question: "Shopkeeper Meera had 12 apples. She sold 8 of them. How many apples does she have left?",
        options: ["4", "8", "12", "20"],
        correctAnswer: "4",
        explanation: "Remaining apples = Total apples - Sold apples = 12 - 8 = 4. 🍎",
        wrongAnswerExplanations: {
            "8": "8 is the number of apples sold, not the remaining apples.",
            "12": "12 is the initial number of apples, not the remaining apples.",
            "20": "20 is the sum of initial apples and sold apples, not the remaining apples."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 25
    },
    {
        id: 'cl4_ch6_t1_qe5',
        type: "mcq",
        question: "If a shopkeeper buys 10 pens for ₹50, what is the cost of each pen?",
        options: ["₹5", "₹10", "₹40", "₹500"],
        correctAnswer: "₹5",
        explanation: "Cost per pen = Total cost ÷ Number of pens = ₹50 ÷ 10 = ₹5. ✏️",
        wrongAnswerExplanations: {
            "₹10": "₹50 ÷ 10 = ₹5, not ₹10.",
            "₹40": "₹50 - 10 = ₹40, but this is not the cost per pen.",
            "₹500": "₹50 × 10 = ₹500, but we need to divide, not multiply."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch6_t1_qe6',
        type: "mcq",
        question: "Neha has ₹20. She buys a chocolate for ₹12. How much money does she have left?",
        options: ["₹8", "₹10", "₹32", "₹2"],
        correctAnswer: "₹8",
        explanation: "Money left = Initial money - Money spent = ₹20 - ₹12 = ₹8. 💸",
        wrongAnswerExplanations: {
            "₹10": "₹20 - ₹12 = ₹8, not ₹10.",
            "₹32": "₹32 is the sum of initial money and money spent, but we need to subtract.",
            "₹2": "₹20 - ₹12 = ₹8, not ₹2."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 25
    },
    {
        id: 'cl4_ch6_t1_qe7',
        type: "mcq",
        question: "If a shopkeeper buys 5 books for ₹100 and sells each for ₹25, what is the total profit?",
        options: ["₹5", "₹20", "₹25", "₹125"],
        correctAnswer: "₹25",
        explanation: "Cost price = ₹100, Selling price = 5 × ₹25 = ₹125. Profit = ₹125 - ₹100 = ₹25. 📚",
        wrongAnswerExplanations: {
            "₹5": "Profit per book is ₹5, but we need total profit which is ₹25.",
            "₹20": "The total profit is ₹25, not ₹20.",
            "₹125": "₹125 is the total selling price, not the profit."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 40
    },
    {
        id: 'cl4_ch6_t1_qe8',
        type: "mcq",
        question: "Ram buys vegetables for ₹45 and pays with a ₹50 note. How much change should he get back?",
        options: ["₹5", "₹10", "₹15", "₹55"],
        correctAnswer: "₹5",
        explanation: "Change = Money given - Cost of items = ₹50 - ₹45 = ₹5. 🧮",
        wrongAnswerExplanations: {
            "₹10": "₹50 - ₹45 = ₹5, not ₹10.",
            "₹15": "₹50 - ₹45 = ₹5, not ₹15.",
            "₹55": "₹55 is the sum of money given and cost, not the change."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch6_t1_qe9',
        type: "mcq",
        question: "If 1 eraser costs ₹2, how much will 6 erasers cost?",
        options: ["₹8", "₹10", "₹12", "₹6"],
        correctAnswer: "₹12",
        explanation: "Cost of 6 erasers = Cost of 1 eraser × 6 = ₹2 × 6 = ₹12. ✏️",
        wrongAnswerExplanations: {
            "₹8": "₹2 × 6 = ₹12, not ₹8.",
            "₹10": "₹2 × 6 = ₹12, not ₹10.",
            "₹6": "₹2 × 6 = ₹12, not ₹6."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 25
    },
    {
        id: 'cl4_ch6_t1_qe10',
        type: "mcq",
        question: "Sita bought 3 notebooks for ₹30 and 2 pens for ₹10. How much did she spend altogether?",
        options: ["₹20", "₹30", "₹40", "₹60"],
        correctAnswer: "₹40",
        explanation: "Total spent = Cost of notebooks + Cost of pens = ₹30 + ₹10 = ₹40. 📝",
        wrongAnswerExplanations: {
            "₹20": "₹30 + ₹10 = ₹40, not ₹20.",
            "₹30": "₹30 is only the cost of notebooks, not the total spent.",
            "₹60": "₹30 + ₹10 = ₹40, not ₹60."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 35
    },
    {
        id: 'cl4_ch6_t1_qe11',
        type: "mcq",
        question: "If a shopkeeper sells 10 candies for ₹20, what is the price of each candy?",
        options: ["₹1", "₹2", "₹5", "₹10"],
        correctAnswer: "₹2",
        explanation: "Price per candy = Total price ÷ Number of candies = ₹20 ÷ 10 = ₹2. 🍬",
        wrongAnswerExplanations: {
            "₹1": "₹20 ÷ 10 = ₹2, not ₹1.",
            "₹5": "₹20 ÷ 10 = ₹2, not ₹5.",
            "₹10": "₹20 ÷ 10 = ₹2, not ₹10."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch6_t1_qe12',
        type: "mcq",
        question: "Rani has ₹15. She wants to buy a chocolate that costs ₹8. Can she buy it?",
        options: ["Yes, and she will have ₹7 left", "Yes, and she will have ₹5 left", "No, she needs ₹3 more", "No, she needs ₹8 more"],
        correctAnswer: "Yes, and she will have ₹7 left",
        explanation: "Money left = ₹15 - ₹8 = ₹7. Since ₹15 > ₹8, she can buy the chocolate. 🍫",
        wrongAnswerExplanations: {
            "Yes, and she will have ₹5 left": "₹15 - ₹8 = ₹7, not ₹5.",
            "No, she needs ₹3 more": "She has enough money as ₹15 > ₹8.",
            "No, she needs ₹8 more": "She has enough money as ₹15 > ₹8."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 35
    },
    {
        id: 'cl4_ch6_t1_qe13',
        type: "mcq",
        question: "A shopkeeper buys a toy for ₹85 and sells it for ₹100. Did the shopkeeper make a profit or loss?",
        options: ["Profit of ₹15", "Profit of ₹85", "Loss of ₹15", "Loss of ₹85"],
        correctAnswer: "Profit of ₹15",
        explanation: "Profit = Selling price - Cost price = ₹100 - ₹85 = ₹15. Since selling price > cost price, it's a profit. 🎯",
        wrongAnswerExplanations: {
            "Profit of ₹85": "The profit is ₹100 - ₹85 = ₹15, not ₹85.",
            "Loss of ₹15": "The shopkeeper made a profit, not a loss, as selling price > cost price.",
            "Loss of ₹85": "The shopkeeper made a profit, not a loss, as selling price > cost price."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 35
    },
    {
        id: 'cl4_ch6_t1_qe14',
        type: "mcq",
        question: "If a box of crayons costs ₹24 and a notebook costs ₹15, how much more does the box of crayons cost?",
        options: ["₹9", "₹15", "₹24", "₹39"],
        correctAnswer: "₹9",
        explanation: "Difference in cost = Cost of crayons - Cost of notebook = ₹24 - ₹15 = ₹9. 🖍️",
        wrongAnswerExplanations: {
            "₹15": "₹15 is the cost of the notebook, not the difference.",
            "₹24": "₹24 is the cost of the crayons, not the difference.",
            "₹39": "₹39 is the sum of the costs, not the difference."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch6_t1_qe15',
        type: "mcq",
        question: "If 3 oranges cost ₹15, how much will 6 oranges cost?",
        options: ["₹18", "₹21", "₹30", "₹45"],
        correctAnswer: "₹30",
        explanation: "Cost of 6 oranges = (Cost of 3 oranges ÷ 3) × 6 = (₹15 ÷ 3) × 6 = ₹5 × 6 = ₹30. 🍊",
        wrongAnswerExplanations: {
            "₹18": "If 3 oranges cost ₹15, then 6 oranges cost ₹30, not ₹18.",
            "₹21": "If 3 oranges cost ₹15, then 6 oranges cost ₹30, not ₹21.",
            "₹45": "₹45 would be the cost of 9 oranges, not 6 oranges."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 35
    },
    {
        id: 'cl4_ch6_t1_qe16',
        type: "mcq",
        question: "Rohit buys a book for ₹50 and sells it for ₹40. Does he make a profit or loss?",
        options: ["Profit of ₹10", "Profit of ₹90", "Loss of ₹10", "Loss of ₹90"],
        correctAnswer: "Loss of ₹10",
        explanation: "Selling price - Cost price = ₹40 - ₹50 = -₹10. Since it's negative, it's a loss of ₹10. 📉",
        wrongAnswerExplanations: {
            "Profit of ₹10": "Since selling price < cost price, it's a loss, not a profit.",
            "Profit of ₹90": "The difference is ₹10, not ₹90, and it's a loss, not a profit.",
            "Loss of ₹90": "The loss is ₹10, not ₹90."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 35
    },
    {
        id: 'cl4_ch6_t1_qe17',
        type: "mcq",
        question: "A pen costs ₹12 and a pencil costs ₹5. How much will 2 pens and 3 pencils cost?",
        options: ["₹17", "₹24", "₹29", "₹39"],
        correctAnswer: "₹39",
        explanation: "Cost = (2 × ₹12) + (3 × ₹5) = ₹24 + ₹15 = ₹39. Adding the cost of all items gives the total cost. 🖊️",
        wrongAnswerExplanations: {
            "₹17": "₹17 is only the cost of 1 pen and 1 pencil.",
            "₹24": "₹24 is only the cost of 2 pens.",
            "₹29": "The correct total is (2 × ₹12) + (3 × ₹5) = ₹39, not ₹29."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 40
    },
    {
        id: 'cl4_ch6_t1_qe18',
        type: "mcq",
        question: "Meera has ₹50. She buys a ruler for ₹15 and a notebook for ₹25. How much money does she have left?",
        options: ["₹10", "₹15", "₹25", "₹40"],
        correctAnswer: "₹10",
        explanation: "Money left = Initial money - Total spent = ₹50 - (₹15 + ₹25) = ₹50 - ₹40 = ₹10. 💰",
        wrongAnswerExplanations: {
            "₹15": "₹15 is the cost of the ruler, not the money left.",
            "₹25": "₹25 is the cost of the notebook, not the money left.",
            "₹40": "₹40 is the total spent, not the money left."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 35
    },
    {
        id: 'cl4_ch6_t1_qe19',
        type: "mcq",
        question: "If a shopkeeper buys 10 toys for ₹200 and sells each for ₹25, does the shopkeeper make a profit or loss?",
        options: ["Profit of ₹50", "Profit of ₹250", "Loss of ₹50", "Loss of ₹250"],
        correctAnswer: "Profit of ₹50",
        explanation: "Cost price = ₹200, Selling price = 10 × ₹25 = ₹250. Profit = ₹250 - ₹200 = ₹50. Since selling price > cost price, it's a profit. 🧸",
        wrongAnswerExplanations: {
            "Profit of ₹250": "₹250 is the total selling price, not the profit.",
            "Loss of ₹50": "Since selling price > cost price, it's a profit, not a loss.",
            "Loss of ₹250": "Since selling price > cost price, it's a profit, not a loss."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch6_t1_qe20',
        type: "mcq",
        question: "Sita gives a ₹100 note to buy fruits worth ₹75. How much change should she get?",
        options: ["₹15", "₹25", "₹35", "₹175"],
        correctAnswer: "₹25",
        explanation: "Change = Money given - Cost of items = ₹100 - ₹75 = ₹25. 🍎",
        wrongAnswerExplanations: {
            "₹15": "₹100 - ₹75 = ₹25, not ₹15.",
            "₹35": "₹100 - ₹75 = ₹25, not ₹35.",
            "₹175": "₹175 is the sum of money given and cost, not the change."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    }
];
