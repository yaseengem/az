import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl4_ch6_t2_qm1',
        type: "mcq",
        question: "Ravi buys a pen for ₹15, a notebook for ₹25, and an eraser for ₹5. If he pays with a ₹100 note, how much change should he receive?",
        options: ["₹45", "₹50", "₹55", "₹65"],
        correctAnswer: "₹55",
        explanation: "Total spent = ₹15 + ₹25 + ₹5 = ₹45. Change = ₹100 - ₹45 = ₹55.",
        wrongAnswerExplanations: {
            "₹45": "This is the amount spent, not the change received.",
            "₹50": "The calculation is incorrect. Check your subtraction.",
            "₹65": "The calculation is incorrect. Check your subtraction."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch6_t2_qm2',
        type: "mcq",
        question: "A fruit vendor buys 50 apples for ₹200 and sells each apple for ₹5. What is the total profit?",
        options: ["₹50", "₹100", "₹150", "₹250"],
        correctAnswer: "₹50",
        explanation: "Selling price = 50 × ₹5 = ₹250. Profit = ₹250 - ₹200 = ₹50.",
        wrongAnswerExplanations: {
            "₹100": "The profit calculation is incorrect. Check your subtraction.",
            "₹150": "The profit calculation is incorrect. Check your subtraction.",
            "₹250": "This is the total selling price, not the profit."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch6_t2_qm3',
        type: "mcq",
        question: "Meera earns ₹150 per day. She works for 5 days and spends ₹300 on groceries. How much money does she have left?",
        options: ["₹300", "₹450", "₹500", "₹750"],
        correctAnswer: "₹450",
        explanation: "Total earnings = ₹150 × 5 = ₹750. Money left = ₹750 - ₹300 = ₹450.",
        wrongAnswerExplanations: {
            "₹300": "This is the amount spent on groceries, not what she has left.",
            "₹500": "The calculation is incorrect. Check your subtraction.",
            "₹750": "This is her total earnings before expenses."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch6_t2_qm4',
        type: "mcq",
        question: "Rohan buys 3 kg of apples at ₹40 per kg and 2 kg of oranges at ₹50 per kg. What is the total cost?",
        options: ["₹120", "₹170", "₹200", "₹220"],
        correctAnswer: "₹220",
        explanation: "Cost of apples = 3 × ₹40 = ₹120. Cost of oranges = 2 × ₹50 = ₹100. Total = ₹120 + ₹100 = ₹220.",
        wrongAnswerExplanations: {
            "₹120": "This is only the cost of apples, not including oranges.",
            "₹170": "The calculation is incorrect. Check your addition.",
            "₹200": "The calculation is incorrect. Check your multiplication or addition."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch6_t2_qm5',
        type: "mcq",
        question: "A shopkeeper sells a jacket for ₹500 that cost him ₹350. If he sells 3 such jackets, what is his total profit?",
        options: ["₹150", "₹350", "₹450", "₹500"],
        correctAnswer: "₹450",
        explanation: "Profit per jacket = ₹500 - ₹350 = ₹150. Total profit = 3 × ₹150 = ₹450.",
        wrongAnswerExplanations: {
            "₹150": "This is the profit on one jacket, not on three jackets.",
            "₹350": "This is the cost price of one jacket, not the profit.",
            "₹500": "This is the selling price of one jacket, not the profit on three."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch6_t2_qm6',
        type: "mcq",
        question: "Rahul has 3 notes of ₹50, 5 notes of ₹20, and 10 coins of ₹5. What is the total amount he has?",
        options: ["₹250", "₹300", "₹350", "₹400"],
        correctAnswer: "₹350",
        explanation: "Total = (3 × ₹50) + (5 × ₹20) + (10 × ₹5) = ₹150 + ₹100 + ₹50 = ₹350",
        wrongAnswerExplanations: {
            "₹250": "The calculation is incorrect. Check your addition.",
            "₹300": "The calculation is incorrect. Check your addition.",
            "₹400": "The calculation is incorrect. Check your addition."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch6_t2_qm7',
        type: "mcq",
        question: "A shopkeeper buys 30 boxes of pencils for ₹600. If each box contains 5 pencils, what is the cost of 1 pencil?",
        options: ["₹2", "₹4", "₹5", "₹20"],
        correctAnswer: "₹4",
        explanation: "Cost per box = ₹600 ÷ 30 = ₹20. Cost per pencil = ₹20 ÷ 5 = ₹4.",
        wrongAnswerExplanations: {
            "₹2": "The calculation is incorrect. Check your division.",
            "₹5": "The calculation is incorrect. Check your division.",
            "₹20": "This is the cost per box, not per pencil."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch6_t2_qm8',
        type: "mcq",
        question: "Sita earns ₹200 in Week 1, ₹250 in Week 2, and spends ₹300 in total. How much money does she have left?",
        options: ["₹100", "₹150", "₹200", "₹250"],
        correctAnswer: "₹150",
        explanation: "Total earnings = ₹200 + ₹250 = ₹450. Money left = ₹450 - ₹300 = ₹150.",
        wrongAnswerExplanations: {
            "₹100": "The calculation is incorrect. Check your subtraction.",
            "₹200": "The calculation is incorrect. Check your subtraction.",
            "₹250": "The calculation is incorrect. Check your subtraction."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch6_t2_qm9',
        type: "mcq",
        question: "A shopkeeper bought 20 toys for ₹300 and sold each toy for ₹20. What was the total profit?",
        options: ["₹80", "₹100", "₹120", "₹400"],
        correctAnswer: "₹100",
        explanation: "Selling price = 20 × ₹20 = ₹400. Profit = ₹400 - ₹300 = ₹100.",
        wrongAnswerExplanations: {
            "₹80": "The profit calculation is incorrect. Check your subtraction.",
            "₹120": "The profit calculation is incorrect. Check your subtraction.",
            "₹400": "This is the total selling price, not the profit."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch6_t2_qm10',
        type: "mcq",
        question: "Raj borrows ₹500 from his friend. He repays ₹200 in the first month and ₹150 in the second month. How much does he still need to repay?",
        options: ["₹100", "₹150", "₹200", "₹350"],
        correctAnswer: "₹150",
        explanation: "Amount repaid = ₹200 + ₹150 = ₹350. Still to repay = ₹500 - ₹350 = ₹150.",
        wrongAnswerExplanations: {
            "₹100": "The calculation is incorrect. Check your subtraction.",
            "₹200": "The calculation is incorrect. Check your subtraction.",
            "₹350": "This is the amount already repaid, not what is still owed."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch6_t2_qm11',
        type: "mcq",
        question: "Asha buys fruits for ₹125, vegetables for ₹95, and milk for ₹30. If she pays with a ₹500 note, how much change will she receive?",
        options: ["₹200", "₹250", "₹300", "₹350"],
        correctAnswer: "₹250",
        explanation: "Total spent = ₹125 + ₹95 + ₹30 = ₹250. Change = ₹500 - ₹250 = ₹250.",
        wrongAnswerExplanations: {
            "₹200": "The calculation is incorrect. Check your subtraction.",
            "₹300": "The calculation is incorrect. Check your subtraction.",
            "₹350": "The calculation is incorrect. Check your subtraction."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch6_t2_qm12',
        type: "mcq",
        question: "A vendor buys 25 kg of rice for ₹1000 and sells it at ₹45 per kg. What is the profit or loss?",
        options: ["₹50 loss", "₹125 profit", "₹125 loss", "₹150 profit"],
        correctAnswer: "₹125 profit",
        explanation: "Selling price = 25 × ₹45 = ₹1125. Profit = ₹1125 - ₹1000 = ₹125 profit.",
        wrongAnswerExplanations: {
            "₹50 loss": "The calculation is incorrect. Check your multiplication and subtraction.",
            "₹125 loss": "The selling price is higher than the cost price, so it's a profit, not a loss.",
            "₹150 profit": "The profit calculation is incorrect. Check your subtraction."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch6_t2_qm13',
        type: "mcq",
        question: "Deepak's expenses for a week are: Monday - ₹40, Tuesday - ₹25, Wednesday - ₹35, Thursday - ₹30, Friday - ₹45. What is his average daily expense?",
        options: ["₹30", "₹35", "₹40", "₹45"],
        correctAnswer: "₹35",
        explanation: "Total expenses = ₹40 + ₹25 + ₹35 + ₹30 + ₹45 = ₹175. Average = ₹175 ÷ 5 = ₹35.",
        wrongAnswerExplanations: {
            "₹30": "The average calculation is incorrect. Check your division.",
            "₹40": "The average calculation is incorrect. Check your division.",
            "₹45": "The average calculation is incorrect. Check your division."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch6_t2_qm14',
        type: "mcq",
        question: "Ritu has 8 notes of ₹10, and she exchanges them for ₹20 notes. How many ₹20 notes will she get?",
        options: ["2", "4", "8", "16"],
        correctAnswer: "4",
        explanation: "Value of ₹10 notes = 8 × ₹10 = ₹80. Number of ₹20 notes = ₹80 ÷ ₹20 = 4 notes.",
        wrongAnswerExplanations: {
            "2": "The calculation is incorrect. Check your division.",
            "8": "The exchange is not one-to-one; you need to consider the value.",
            "16": "The calculation is incorrect. Check your multiplication."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch6_t2_qm15',
        type: "mcq",
        question: "A book costs ₹85. If Raj buys 3 books and gives the shopkeeper ₹300, how much change will he receive?",
        options: ["₹30", "₹45", "₹55", "₹75"],
        correctAnswer: "₹45",
        explanation: "Cost of 3 books = 3 × ₹85 = ₹255. Change = ₹300 - ₹255 = ₹45.",
        wrongAnswerExplanations: {
            "₹30": "The calculation is incorrect. Check your subtraction.",
            "₹55": "The calculation is incorrect. Check your subtraction.",
            "₹75": "The calculation is incorrect. Check your subtraction."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch6_t2_qm16',
        type: "mcq",
        question: "A shopkeeper bought a box of chocolates for ₹240 and sold each chocolate for ₹15. If there were a total of 20 chocolates, what was the profit or loss?",
        options: ["₹60 profit", "₹60 loss", "₹300 profit", "₹300 loss"],
        correctAnswer: "₹60 profit",
        explanation: "Selling price = 20 × ₹15 = ₹300. Profit = ₹300 - ₹240 = ₹60 profit.",
        wrongAnswerExplanations: {
            "₹60 loss": "The selling price is higher than the cost price, so it's a profit, not a loss.",
            "₹300 profit": "This is the total selling price, not the profit.",
            "₹300 loss": "The calculation is incorrect. Check your subtraction."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch6_t2_qm17',
        type: "mcq",
        question: "Sheela buys a dress for ₹350, a belt for ₹75, and shoes for ₹275. How much did she spend in total?",
        options: ["₹600", "₹650", "₹700", "₹750"],
        correctAnswer: "₹700",
        explanation: "Total spent = ₹350 + ₹75 + ₹275 = ₹700",
        wrongAnswerExplanations: {
            "₹600": "The addition is incorrect. Check your addition.",
            "₹650": "The addition is incorrect. Check your addition.",
            "₹750": "The addition is incorrect. Check your addition."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch6_t2_qm18',
        type: "mcq",
        question: "Suresh has ₹500. He spends ⅖ of his money on books. How much money did he spend on books?",
        options: ["₹100", "₹150", "₹200", "₹300"],
        correctAnswer: "₹200",
        explanation: "Amount spent = ⅖ × ₹500 = 2 × ₹500 ÷ 5 = ₹1000 ÷ 5 = ₹200",
        wrongAnswerExplanations: {
            "₹100": "⅖ of ₹500 is not ₹100. Check your calculation.",
            "₹150": "⅖ of ₹500 is not ₹150. Check your calculation.",
            "₹300": "⅖ of ₹500 is not ₹300. Check your calculation."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch6_t2_qm19',
        type: "mcq",
        question: "Amit's monthly pocket money is ₹200. He saves ₹50 every month. What fraction of his pocket money does he save?",
        options: ["¼", "⅓", "2/5", "½"],
        correctAnswer: "¼",
        explanation: "Fraction saved = ₹50 ÷ ₹200 = 1/4 (or ¼)",
        wrongAnswerExplanations: {
            "⅓": "₹50 is not ⅓ of ₹200. Check your calculation.",
            "2/5": "₹50 is not 2/5 of ₹200. Check your calculation.",
            "½": "₹50 is not ½ of ₹200. Check your calculation."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch6_t2_qm20',
        type: "mcq",
        question: "A family earns ₹1500 per week. If they spend ₹1000 on necessities and save the rest, how much do they save in 4 weeks?",
        options: ["₹1000", "₹1500", "₹2000", "₹2500"],
        correctAnswer: "₹2000",
        explanation: "Weekly savings = ₹1500 - ₹1000 = ₹500. Savings in 4 weeks = 4 × ₹500 = ₹2000.",
        wrongAnswerExplanations: {
            "₹1000": "This is the weekly expenditure, not the 4-week savings.",
            "₹1500": "The calculation is incorrect. Check your multiplication.",
            "₹2500": "The calculation is incorrect. Check your multiplication."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    }
];
