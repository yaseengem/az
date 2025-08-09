import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl3_ch14_t1_qm1',
        type: "mcq",
        question: "Rahul buys an eraser for ₹3.50 and a pencil for ₹4.75. If he gives a ₹10 note to the shopkeeper, how much change will he get?",
        options: ["₹1.75", "₹2.75", "₹1.25", "₹2.25"],
        correctAnswer: "₹1.75",
        explanation: "Total cost = ₹3.50 + ₹4.75 = ₹8.25. Change = ₹10 - ₹8.25 = ₹1.75.",
        wrongAnswerExplanations: {
            "₹2.75": "This is incorrect. The total cost is ₹8.25, not ₹7.25.",
            "₹1.25": "This is incorrect. The correct calculation is ₹10 - ₹8.25 = ₹1.75.",
            "₹2.25": "This is incorrect. The correct calculation is ₹10 - ₹8.25 = ₹1.75."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch14_t1_qm2',
        type: "mcq",
        question: "Sita has 5 coins of ₹2 each, 3 coins of ₹5 each, and 2 coins of ₹10 each. How much money does she have in total?",
        options: ["₹45", "₹50", "₹55", "₹60"],
        correctAnswer: "₹55",
        explanation: "Total = (5 × ₹2) + (3 × ₹5) + (2 × ₹10) = ₹10 + ₹15 + ₹20 = ₹45 + ₹10 = ₹55.",
        wrongAnswerExplanations: {
            "₹45": "This is incomplete. You've calculated (5 × ₹2) + (3 × ₹5) + (1 × ₹10) = ₹45, forgetting one ₹10 coin.",
            "₹50": "This is incorrect. The correct calculation is ₹10 + ₹15 + ₹20 = ₹45 + ₹10 = ₹55.",
            "₹60": "This is incorrect. The correct calculation is ₹10 + ₹15 + ₹20 = ₹45 + ₹10 = ₹55."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl3_ch14_t1_qm3',
        type: "mcq",
        question: "Anil has 3 coins of 50 paise each and 2 coins of ₹2 each. How much more money does he need to buy a notebook that costs ₹7.50?",
        options: ["₹2.50", "₹3", "₹4", "₹3.50"],
        correctAnswer: "₹3",
        explanation: "Anil has 3 × 50 paise = ₹1.50 and 2 × ₹2 = ₹4. Total = ₹1.50 + ₹4 = ₹5.50. He needs ₹7.50 - ₹5.50 = ₹3 more.",
        wrongAnswerExplanations: {
            "₹2.50": "This is incorrect. The correct calculation is ₹7.50 - ₹5.50 = ₹3.",
            "₹4": "This is incorrect. The correct calculation is ₹7.50 - ₹5.50 = ₹3.",
            "₹3.50": "This is incorrect. The correct calculation is ₹7.50 - ₹5.50 = ₹3."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl3_ch14_t1_qm4',
        type: "mcq",
        question: "Meera bought 3 books for ₹12.50 each. How much change will she get from a ₹50 note?",
        options: ["₹12.50", "₹25", "₹37.50", "₹12"],
        correctAnswer: "₹12.50",
        explanation: "Total cost = 3 × ₹12.50 = ₹37.50. Change = ₹50 - ₹37.50 = ₹12.50.",
        wrongAnswerExplanations: {
            "₹25": "This is incorrect. The correct calculation is ₹50 - ₹37.50 = ₹12.50.",
            "₹37.50": "This is the total cost of the books, not the change received.",
            "₹12": "This is incorrect. The correct calculation is ₹50 - ₹37.50 = ₹12.50."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch14_t1_qm5',
        type: "mcq",
        question: "Ravi has 3 notes of ₹10 each and 4 coins of ₹5 each. After buying a toy, he is left with ₹15. How much did the toy cost?",
        options: ["₹35", "₹40", "₹45", "₹50"],
        correctAnswer: "₹35",
        explanation: "Ravi initially had 3 × ₹10 = ₹30 and 4 × ₹5 = ₹20, for a total of ₹50. If he's left with ₹15, the toy cost ₹50 - ₹15 = ₹35.",
        wrongAnswerExplanations: {
            "₹40": "This is incorrect. If the toy cost ₹40, Ravi would be left with ₹10, not ₹15.",
            "₹45": "This is incorrect. If the toy cost ₹45, Ravi would be left with ₹5, not ₹15.",
            "₹50": "This is incorrect. If the toy cost ₹50, Ravi would have no money left."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl3_ch14_t1_qm6',
        type: "mcq",
        question: "A shopkeeper has the following coins: 5 coins of ₹5, 10 coins of ₹2, and 20 coins of ₹1. What is the total value of all these coins?",
        options: ["₹55", "₹45", "₹65", "₹75"],
        correctAnswer: "₹65",
        explanation: "Total value = (5 × ₹5) + (10 × ₹2) + (20 × ₹1) = ₹25 + ₹20 + ₹20 = ₹65.",
        wrongAnswerExplanations: {
            "₹55": "This is incorrect. The correct calculation is ₹25 + ₹20 + ₹20 = ₹65.",
            "₹45": "This is incorrect. The correct calculation is ₹25 + ₹20 + ₹20 = ₹65.",
            "₹75": "This is incorrect. The correct calculation is ₹25 + ₹20 + ₹20 = ₹65."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl3_ch14_t1_qm7',
        type: "mcq",
        question: "Rita buys 3 notebooks for ₹18.75. What is the cost of each notebook?",
        options: ["₹6.75", "₹6.25", "₹6", "₹6.50"],
        correctAnswer: "₹6.25",
        explanation: "Cost of each notebook = ₹18.75 ÷ 3 = ₹6.25.",
        wrongAnswerExplanations: {
            "₹6.75": "This is incorrect. The correct calculation is ₹18.75 ÷ 3 = ₹6.25.",
            "₹6": "This is incorrect. The correct calculation is ₹18.75 ÷ 3 = ₹6.25.",
            "₹6.50": "This is incorrect. The correct calculation is ₹18.75 ÷ 3 = ₹6.25."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch14_t1_qm8',
        type: "mcq",
        question: "Arjun needs ₹45 to buy a book. He has the following money: 2 notes of ₹10, 3 coins of ₹5, and 4 coins of ₹2. How much more money does he need?",
        options: ["₹1", "₹2", "₹3", "₹5"],
        correctAnswer: "₹3",
        explanation: "Arjun has 2 × ₹10 = ₹20, 3 × ₹5 = ₹15, and 4 × ₹2 = ₹8. Total = ₹20 + ₹15 + ₹8 = ₹43. He needs ₹45 - ₹43 = ₹3 more.",
        wrongAnswerExplanations: {
            "₹1": "This is incorrect. The correct calculation is ₹45 - ₹43 = ₹3.",
            "₹2": "This is incorrect. The correct calculation is ₹45 - ₹43 = ₹3.",
            "₹5": "This is incorrect. The correct calculation is ₹45 - ₹43 = ₹3."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl3_ch14_t1_qm9',
        type: "mcq",
        question: "A shop offers a discount of ₹2.50 on an item that originally costs ₹15. What is the discounted price?",
        options: ["₹12.50", "₹12", "₹13", "₹17.50"],
        correctAnswer: "₹12.50",
        explanation: "Discounted price = Original price - Discount = ₹15 - ₹2.50 = ₹12.50.",
        wrongAnswerExplanations: {
            "₹12": "This is incorrect. The correct calculation is ₹15 - ₹2.50 = ₹12.50.",
            "₹13": "This is incorrect. The correct calculation is ₹15 - ₹2.50 = ₹12.50.",
            "₹17.50": "This is incorrect. This would be the result of adding the discount instead of subtracting it."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch14_t1_qm10',
        type: "mcq",
        question: "In a game, Neha collected 12 coins of 50 paise each, while Sita collected 5 coins of ₹1 each and 2 coins of ₹2 each. Who collected more money and by how much?",
        options: ["Neha by ₹1", "Sita by ₹1", "Sita by ₹3", "Both collected equal amounts"],
        correctAnswer: "Sita by ₹3",
        explanation: "Neha collected 12 × 50 paise = ₹6. Sita collected 5 × ₹1 + 2 × ₹2 = ₹5 + ₹4 = ₹9. Sita collected ₹9 - ₹6 = ₹3 more than Neha.",
        wrongAnswerExplanations: {
            "Neha by ₹1": "This is incorrect. Neha collected ₹6, which is less than Sita's ₹9.",
            "Sita by ₹1": "This is incorrect. The difference is ₹9 - ₹6 = ₹3, not ₹1.",
            "Both collected equal amounts": "This is incorrect. Neha collected ₹6, while Sita collected ₹9."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl3_ch14_t1_qm11',
        type: "mcq",
        question: "A pencil costs ₹3.75 and an eraser costs ₹2.25. How much will 3 pencils and 2 erasers cost in total?",
        options: ["₹16.25", "₹15.75", "₹16.50", "₹15.50"],
        correctAnswer: "₹15.75",
        explanation: "Cost of 3 pencils = 3 × ₹3.75 = ₹11.25. Cost of 2 erasers = 2 × ₹2.25 = ₹4.50. Total cost = ₹11.25 + ₹4.50 = ₹15.75.",
        wrongAnswerExplanations: {
            "₹16.25": "This is incorrect. The correct calculation is ₹11.25 + ₹4.50 = ₹15.75.",
            "₹16.50": "This is incorrect. The correct calculation is ₹11.25 + ₹4.50 = ₹15.75.",
            "₹15.50": "This is incorrect. The correct calculation is ₹11.25 + ₹4.50 = ₹15.75."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl3_ch14_t1_qm12',
        type: "mcq",
        question: "Ramesh bought 2 kg of apples at ₹85.50 per kg. If he gave a ₹200 note to the shopkeeper, how much change did he receive?",
        options: ["₹29", "₹28", "₹29.50", "₹29.00"],
        correctAnswer: "₹29",
        explanation: "Cost of apples = 2 × ₹85.50 = ₹171. Change = ₹200 - ₹171 = ₹29.",
        wrongAnswerExplanations: {
            "₹28": "This is incorrect. The correct calculation is ₹200 - ₹171 = ₹29.",
            "₹29.50": "This is incorrect. The correct calculation is ₹200 - ₹171 = ₹29.",
            "₹29.00": "This is the same as ₹29, just written with decimal places."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl3_ch14_t1_qm13',
        type: "mcq",
        question: "A school bag costs ₹125.50. If Riya gives the shopkeeper 1 note of ₹100 and 1 note of ₹50, how much change will she get?",
        options: ["₹24.50", "₹25.50", "₹24", "₹25"],
        correctAnswer: "₹24.50",
        explanation: "Riya gives ₹100 + ₹50 = ₹150. Change = ₹150 - ₹125.50 = ₹24.50.",
        wrongAnswerExplanations: {
            "₹25.50": "This is incorrect. The correct calculation is ₹150 - ₹125.50 = ₹24.50.",
            "₹24": "This is incorrect. The exact change is ₹24.50, not ₹24.",
            "₹25": "This is incorrect. The exact change is ₹24.50, not ₹25."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch14_t1_qm14',
        type: "mcq",
        question: "Hari has the following coins: 5 coins of 50 paise, 7 coins of ₹1, and 3 coins of ₹2. What is the total amount he has in rupees and paise?",
        options: ["₹12.50", "₹13", "₹13.50", "₹14"],
        correctAnswer: "₹15.50",
        explanation: "Total = (5 × 50 paise) + (7 × ₹1) + (3 × ₹2) = ₹2.50 + ₹7 + ₹6 = ₹15.50.",
        wrongAnswerExplanations: {
            "₹12.50": "This is incorrect. The correct calculation is ₹2.50 + ₹7 + ₹6 = ₹15.50.",
            "₹13": "This is incorrect. The correct calculation is ₹2.50 + ₹7 + ₹6 = ₹15.50.",
            "₹14": "This is incorrect. The correct calculation is ₹2.50 + ₹7 + ₹6 = ₹15.50."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl3_ch14_t1_qm15',
        type: "mcq",
        question: "A shopkeeper had ₹82.50. After selling some items, he now has ₹127.75. How much money did he earn from the sales?",
        options: ["₹45.25", "₹45.75", "₹44.25", "₹44.75"],
        correctAnswer: "₹45.25",
        explanation: "Money earned = New amount - Initial amount = ₹127.75 - ₹82.50 = ₹45.25.",
        wrongAnswerExplanations: {
            "₹45.75": "This is incorrect. The correct calculation is ₹127.75 - ₹82.50 = ₹45.25.",
            "₹44.25": "This is incorrect. The correct calculation is ₹127.75 - ₹82.50 = ₹45.25.",
            "₹44.75": "This is incorrect. The correct calculation is ₹127.75 - ₹82.50 = ₹45.25."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch14_t1_qm16',
        type: "mcq",
        question: "Five friends went to a movie. Each ticket costs ₹75.50. How much money did they spend in total?",
        options: ["₹372.50", "₹375.50", "₹377.50", "₹370"],
        correctAnswer: "₹377.50",
        explanation: "Total cost = 5 × ₹75.50 = ₹377.50.",
        wrongAnswerExplanations: {
            "₹372.50": "This is incorrect. The correct calculation is 5 × ₹75.50 = ₹377.50.",
            "₹375.50": "This is incorrect. The correct calculation is 5 × ₹75.50 = ₹377.50.",
            "₹370": "This is incorrect. The correct calculation is 5 × ₹75.50 = ₹377.50."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch14_t1_qm17',
        type: "mcq",
        question: "A toy originally priced at ₹85.75 is on sale with a discount of ₹12.50. What is the sale price?",
        options: ["₹73.25", "₹72.25", "₹73.75", "₹98.25"],
        correctAnswer: "₹73.25",
        explanation: "Sale price = Original price - Discount = ₹85.75 - ₹12.50 = ₹73.25.",
        wrongAnswerExplanations: {
            "₹72.25": "This is incorrect. The correct calculation is ₹85.75 - ₹12.50 = ₹73.25.",
            "₹73.75": "This is incorrect. The correct calculation is ₹85.75 - ₹12.50 = ₹73.25.",
            "₹98.25": "This is incorrect. This would be the result of adding the discount (₹85.75 + ₹12.50)."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch14_t1_qm18',
        type: "mcq",
        question: "At a fruit stall, one apple costs ₹12.50, and one orange costs ₹8.75. How much more would you pay for 3 apples than for 3 oranges?",
        options: ["₹3.75", "₹11.25", "₹10.25", "₹12.50"],
        correctAnswer: "₹11.25",
        explanation: "Cost of 3 apples = 3 × ₹12.50 = ₹37.50. Cost of 3 oranges = 3 × ₹8.75 = ₹26.25. Difference = ₹37.50 - ₹26.25 = ₹11.25.",
        wrongAnswerExplanations: {
            "₹3.75": "This is the difference in price between one apple and one orange (₹12.50 - ₹8.75), not three of each.",
            "₹10.25": "This is incorrect. The correct calculation is ₹37.50 - ₹26.25 = ₹11.25.",
            "₹12.50": "This is the cost of just one apple, not the difference between 3 apples and 3 oranges."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl3_ch14_t1_qm19',
        type: "mcq",
        question: "A box of crayons costs ₹24.50. How much will 5 such boxes cost?",
        options: ["₹122.50", "₹122", "₹125", "₹102.50"],
        correctAnswer: "₹122.50",
        explanation: "Total cost = 5 × ₹24.50 = ₹122.50.",
        wrongAnswerExplanations: {
            "₹122": "This is incorrect. The exact cost is ₹122.50, not ₹122.",
            "₹125": "This is incorrect. The correct calculation is 5 × ₹24.50 = ₹122.50.",
            "₹102.50": "This is incorrect. This would be the cost of 4 boxes plus half a box."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch14_t1_qm20',
        type: "mcq",
        question: "Anitha saved ₹5.50 on Monday, ₹7.25 on Tuesday, ₹6.75 on Wednesday, and ₹4.50 on Thursday. How much did she save in all?",
        options: ["₹24", "₹23", "₹24.50", "₹24.00"],
        correctAnswer: "₹24",
        explanation: "Total savings = ₹5.50 + ₹7.25 + ₹6.75 + ₹4.50 = ₹24.",
        wrongAnswerExplanations: {
            "₹23": "This is incorrect. The correct calculation is ₹5.50 + ₹7.25 + ₹6.75 + ₹4.50 = ₹24.",
            "₹24.50": "This is incorrect. The correct calculation is ₹5.50 + ₹7.25 + ₹6.75 + ₹4.50 = ₹24.",
            "₹24.00": "This is the same as ₹24, just written with decimal places."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    }
];
