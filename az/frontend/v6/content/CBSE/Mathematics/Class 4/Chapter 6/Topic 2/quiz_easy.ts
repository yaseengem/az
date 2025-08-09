import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl4_ch6_t2_qe1',
        type: "mcq",
        question: "Raju buys a pencil for ₹5 and a notebook for ₹15. How much money did he spend in total?",
        options: ["₹10", "₹15", "₹20", "₹25"],
        correctAnswer: "₹20",
        explanation: "Adding the costs: ₹5 + ₹15 = ₹20. Total money spent is ₹20.",
        wrongAnswerExplanations: {
            "₹10": "This is less than even the cost of the notebook (₹15).",
            "₹15": "This is only the cost of the notebook, ignoring the pencil cost.",
            "₹25": "This is more than the actual sum. Check your addition."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch6_t2_qe2',
        type: "mcq",
        question: "Sita has ₹50. She buys fruits for ₹25. How much money does she have left?",
        options: ["₹15", "₹20", "₹25", "₹30"],
        correctAnswer: "₹25",
        explanation: "Subtracting expenses: ₹50 - ₹25 = ₹25. She has ₹25 left.",
        wrongAnswerExplanations: {
            "₹15": "The difference between ₹50 and ₹25 is not ₹15.",
            "₹20": "₹50 - ₹25 is not ₹20. Check your subtraction.",
            "₹30": "₹50 - ₹25 is not ₹30. Check your subtraction."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch6_t2_qe3',
        type: "mcq",
        question: "If Rahul earns ₹200 in a week, how much does he earn in 2 weeks?",
        options: ["₹200", "₹300", "₹400", "₹500"],
        correctAnswer: "₹400",
        explanation: "Earnings for 2 weeks: ₹200 × 2 = ₹400. He earns ₹400 in 2 weeks.",
        wrongAnswerExplanations: {
            "₹200": "This is his earnings for only 1 week.",
            "₹300": "₹200 × 2 is not ₹300. Check your multiplication.",
            "₹500": "₹200 × 2 is not ₹500. Check your multiplication."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch6_t2_qe4',
        type: "mcq",
        question: "Meena's father gives her ₹10 every day for 5 days. How much money does she receive in total?",
        options: ["₹40", "₹45", "₹50", "₹55"],
        correctAnswer: "₹50",
        explanation: "Total money received: ₹10 × 5 = ₹50. She receives ₹50 in total.",
        wrongAnswerExplanations: {
            "₹40": "₹10 × 5 is not ₹40. Check your multiplication.",
            "₹45": "₹10 × 5 is not ₹45. Check your multiplication.",
            "₹55": "₹10 × 5 is not ₹55. Check your multiplication."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch6_t2_qe5',
        type: "mcq",
        question: "Which coin is of highest value?",
        options: ["₹1 coin", "₹2 coin", "₹5 coin", "₹10 coin"],
        correctAnswer: "₹10 coin",
        explanation: "The ₹10 coin has the highest value among the given options.",
        wrongAnswerExplanations: {
            "₹1 coin": "₹1 is less than ₹2, ₹5, and ₹10.",
            "₹2 coin": "₹2 is less than ₹5 and ₹10.",
            "₹5 coin": "₹5 is less than ₹10."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch6_t2_qe6',
        type: "mcq",
        question: "Rohan spends ₹15 on a toy and ₹8 on chocolates. If he had ₹50, how much money does he have left?",
        options: ["₹23", "₹27", "₹35", "₹42"],
        correctAnswer: "₹27",
        explanation: "Money left: ₹50 - (₹15 + ₹8) = ₹50 - ₹23 = ₹27",
        wrongAnswerExplanations: {
            "₹23": "This is only the amount spent, not what remains.",
            "₹35": "The calculation is incorrect. Check your subtraction.",
            "₹42": "The calculation is incorrect. Check your subtraction."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch6_t2_qe7',
        type: "mcq",
        question: "If a shopkeeper buys oranges for ₹40 and sells them for ₹60, how much profit does he make?",
        options: ["₹10", "₹20", "₹30", "₹40"],
        correctAnswer: "₹20",
        explanation: "Profit = Selling price - Cost price = ₹60 - ₹40 = ₹20",
        wrongAnswerExplanations: {
            "₹10": "The difference between ₹60 and ₹40 is not ₹10.",
            "₹30": "The difference between ₹60 and ₹40 is not ₹30.",
            "₹40": "This is the cost price, not the profit."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch6_t2_qe8',
        type: "mcq",
        question: "How many ₹5 notes make ₹25?",
        options: ["3", "4", "5", "6"],
        correctAnswer: "5",
        explanation: "Number of notes = ₹25 ÷ ₹5 = 5 notes",
        wrongAnswerExplanations: {
            "3": "3 notes of ₹5 would make only ₹15.",
            "4": "4 notes of ₹5 would make only ₹20.",
            "6": "6 notes of ₹5 would make ₹30, which is more than ₹25."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch6_t2_qe9',
        type: "mcq",
        question: "If a pencil costs ₹3, how many pencils can be bought with ₹24?",
        options: ["6", "7", "8", "9"],
        correctAnswer: "8",
        explanation: "Number of pencils = ₹24 ÷ ₹3 = 8 pencils",
        wrongAnswerExplanations: {
            "6": "6 pencils would cost ₹18, not ₹24.",
            "7": "7 pencils would cost ₹21, not ₹24.",
            "9": "9 pencils would cost ₹27, which is more than ₹24."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch6_t2_qe10',
        type: "mcq",
        question: "Which is the correct way to write fifty-five rupees and seventy-five paise?",
        options: ["₹55.75", "₹55.57", "₹55.7", "₹55.5"],
        correctAnswer: "₹55.75",
        explanation: "Fifty-five rupees and seventy-five paise is written as ₹55.75",
        wrongAnswerExplanations: {
            "₹55.57": "This represents fifty-five rupees and fifty-seven paise.",
            "₹55.7": "This represents fifty-five rupees and seventy paise.",
            "₹55.5": "This represents fifty-five rupees and fifty paise."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch6_t2_qe11',
        type: "mcq",
        question: "Amit works for 5 days and earns ₹50 each day. How much does he earn in total?",
        options: ["₹200", "₹250", "₹300", "₹350"],
        correctAnswer: "₹250",
        explanation: "Total earnings = ₹50 × 5 = ₹250",
        wrongAnswerExplanations: {
            "₹200": "5 days at ₹50 per day is not ₹200.",
            "₹300": "5 days at ₹50 per day is not ₹300.",
            "₹350": "5 days at ₹50 per day is not ₹350."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch6_t2_qe12',
        type: "mcq",
        question: "The cost of 3 books is ₹90. What is the cost of 1 book?",
        options: ["₹20", "₹25", "₹30", "₹35"],
        correctAnswer: "₹30",
        explanation: "Cost of 1 book = ₹90 ÷ 3 = ₹30",
        wrongAnswerExplanations: {
            "₹20": "₹90 ÷ 3 is not ₹20.",
            "₹25": "₹90 ÷ 3 is not ₹25.",
            "₹35": "₹90 ÷ 3 is not ₹35."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch6_t2_qe13',
        type: "mcq",
        question: "Ram borrowed ₹100 from his friend. He returned ₹70. How much money does he still need to return?",
        options: ["₹20", "₹30", "₹40", "₹50"],
        correctAnswer: "₹30",
        explanation: "Money still to be returned = ₹100 - ₹70 = ₹30",
        wrongAnswerExplanations: {
            "₹20": "The difference between ₹100 and ₹70 is not ₹20.",
            "₹40": "The difference between ₹100 and ₹70 is not ₹40.",
            "₹50": "The difference between ₹100 and ₹70 is not ₹50."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch6_t2_qe14',
        type: "mcq",
        question: "A shopkeeper bought a box of pens for ₹120 and sold it for ₹150. What is his profit?",
        options: ["₹20", "₹30", "₹40", "₹50"],
        correctAnswer: "₹30",
        explanation: "Profit = Selling price - Cost price = ₹150 - ₹120 = ₹30",
        wrongAnswerExplanations: {
            "₹20": "The difference between ₹150 and ₹120 is not ₹20.",
            "₹40": "The difference between ₹150 and ₹120 is not ₹40.",
            "₹50": "The difference between ₹150 and ₹120 is not ₹50."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch6_t2_qe15',
        type: "mcq",
        question: "Which of these represents the most money?",
        options: ["5 notes of ₹10", "10 coins of ₹5", "2 notes of ₹20 and 5 coins of ₹2", "1 note of ₹50"],
        correctAnswer: "1 note of ₹50",
        explanation: "Values are: 5×₹10=₹50, 10×₹5=₹50, 2×₹20+5×₹2=₹50. All equal ₹50.",
        wrongAnswerExplanations: {
            "5 notes of ₹10": "5 × ₹10 = ₹50, same as the other options.",
            "10 coins of ₹5": "10 × ₹5 = ₹50, same as the other options.",
            "2 notes of ₹20 and 5 coins of ₹2": "2 × ₹20 + 5 × ₹2 = ₹40 + ₹10 = ₹50, same as the other options."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch6_t2_qe16',
        type: "mcq",
        question: "Seema spends ₹12 every day on her lunch. How much will she spend in a week (7 days)?",
        options: ["₹72", "₹77", "₹84", "₹90"],
        correctAnswer: "₹84",
        explanation: "Weekly expense = ₹12 × 7 = ₹84",
        wrongAnswerExplanations: {
            "₹72": "₹12 × 7 is not ₹72. Check your multiplication.",
            "₹77": "₹12 × 7 is not ₹77. Check your multiplication.",
            "₹90": "₹12 × 7 is not ₹90. Check your multiplication."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch6_t2_qe17',
        type: "mcq",
        question: "If I have 3 notes of ₹20 and 4 coins of ₹5, how much money do I have in total?",
        options: ["₹60", "₹75", "₹80", "₹95"],
        correctAnswer: "₹80",
        explanation: "Total money = (3 × ₹20) + (4 × ₹5) = ₹60 + ₹20 = ₹80",
        wrongAnswerExplanations: {
            "₹60": "This only accounts for the 3 notes of ₹20, not the 4 coins of ₹5.",
            "₹75": "The calculation is incorrect. Check your addition.",
            "₹95": "The calculation is incorrect. Check your addition."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch6_t2_qe18',
        type: "mcq",
        question: "A shopkeeper buys 12 toys for ₹120. How much does each toy cost?",
        options: ["₹8", "₹10", "₹12", "₹15"],
        correctAnswer: "₹10",
        explanation: "Cost per toy = ₹120 ÷ 12 = ₹10",
        wrongAnswerExplanations: {
            "₹8": "₹120 ÷ 12 is not ₹8. Check your division.",
            "₹12": "₹120 ÷ 12 is not ₹12. Check your division.",
            "₹15": "₹120 ÷ 12 is not ₹15. Check your division."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch6_t2_qe19',
        type: "mcq",
        question: "Maya has ₹100. She wants to buy a book for ₹45 and a pen for ₹15. How much money will she have left?",
        options: ["₹30", "₹40", "₹45", "₹55"],
        correctAnswer: "₹40",
        explanation: "Money left = ₹100 - (₹45 + ₹15) = ₹100 - ₹60 = ₹40",
        wrongAnswerExplanations: {
            "₹30": "The calculation is incorrect. Check your subtraction.",
            "₹45": "The calculation is incorrect. Check your subtraction.",
            "₹55": "The calculation is incorrect. Check your subtraction."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch6_t2_qe20',
        type: "mcq",
        question: "If a shopkeeper sells a notebook at ₹25 that cost him ₹20, what is his gain on each notebook?",
        options: ["₹3", "₹5", "₹7", "₹10"],
        correctAnswer: "₹5",
        explanation: "Gain = Selling price - Cost price = ₹25 - ₹20 = ₹5",
        wrongAnswerExplanations: {
            "₹3": "The difference between ₹25 and ₹20 is not ₹3.",
            "₹7": "The difference between ₹25 and ₹20 is not ₹7.",
            "₹10": "The difference between ₹25 and ₹20 is not ₹10."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    }
];
