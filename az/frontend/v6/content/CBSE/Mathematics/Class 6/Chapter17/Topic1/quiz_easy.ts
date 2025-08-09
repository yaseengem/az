import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl6_ch17_t1_qe1',
        type: "mcq",
        question: "If you have ₹500 and spend ₹200 on books, how much money do you have left?",
        options: ["₹200", "₹300", "₹400", "₹500"],
        correctAnswer: "₹300",
        explanation: "₹500 - ₹200 = ₹300. This is a basic subtraction problem in money calculations. 💰",
        wrongAnswerExplanations: {
            "₹200": "This would be the amount spent, not the amount left.",
            "₹400": "This is more than what you started with, which is not possible.",
            "₹500": "This is the original amount, not the amount after spending."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch17_t1_qe2',
        type: "mcq",
        question: "What is 20% of ₹1000?",
        options: ["₹100", "₹200", "₹300", "₹400"],
        correctAnswer: "₹200",
        explanation: "20% of ₹1000 = (20 × 1000) ÷ 100 = ₹200. This is a basic percentage calculation. 📊",
        wrongAnswerExplanations: {
            "₹100": "This would be 10% of ₹1000, not 20%.",
            "₹300": "This would be 30% of ₹1000, not 20%.",
            "₹400": "This would be 40% of ₹1000, not 20%."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch17_t1_qe3',
        type: "mcq",
        question: "If you save ₹50 every week, how much will you save in 4 weeks?",
        options: ["₹100", "₹150", "₹200", "₹250"],
        correctAnswer: "₹200",
        explanation: "₹50 × 4 weeks = ₹200. This is a basic multiplication problem in savings. 💵",
        wrongAnswerExplanations: {
            "₹100": "This would be saving for only 2 weeks.",
            "₹150": "This would be saving for 3 weeks.",
            "₹250": "This is more than what you would save in 4 weeks."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch17_t1_qe4',
        type: "mcq",
        question: "Which is better value: 5 notebooks for ₹100 or 8 notebooks for ₹160?",
        options: ["5 notebooks for ₹100", "8 notebooks for ₹160", "Both are equal", "Cannot be determined"],
        correctAnswer: "Both are equal",
        explanation: "Both options cost ₹20 per notebook (₹100/5 = ₹20, ₹160/8 = ₹20). 🛒",
        wrongAnswerExplanations: {
            "5 notebooks for ₹100": "This is the same value as the other option.",
            "8 notebooks for ₹160": "This is the same value as the other option.",
            "Cannot be determined": "The values can be determined and are equal."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch17_t1_qe5',
        type: "mcq",
        question: "If a toy costs ₹300 and you have ₹250, how much more money do you need?",
        options: ["₹25", "₹50", "₹75", "₹100"],
        correctAnswer: "₹50",
        explanation: "₹300 - ₹250 = ₹50. This is a basic subtraction problem to find the difference. 🧸",
        wrongAnswerExplanations: {
            "₹25": "This is less than the actual amount needed.",
            "₹75": "This is more than the actual amount needed.",
            "₹100": "This is more than the actual amount needed."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch17_t1_qe6',
        type: "mcq",
        question: "What is the total cost if you buy 3 items at ₹50 each?",
        options: ["₹100", "₹150", "₹200", "₹250"],
        correctAnswer: "₹150",
        explanation: "3 × ₹50 = ₹150. This is a basic multiplication problem in shopping. 🛍️",
        wrongAnswerExplanations: {
            "₹100": "This would be the cost of 2 items.",
            "₹200": "This would be the cost of 4 items.",
            "₹250": "This would be the cost of 5 items."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch17_t1_qe7',
        type: "mcq",
        question: "If you get ₹1000 and spend 40% on books, how much is left?",
        options: ["₹400", "₹500", "₹600", "₹700"],
        correctAnswer: "₹600",
        explanation: "40% of ₹1000 = ₹400 spent, so ₹1000 - ₹400 = ₹600 left. 📚",
        wrongAnswerExplanations: {
            "₹400": "This is the amount spent, not the amount left.",
            "₹500": "This would be 50% left, not 60%.",
            "₹700": "This is more than 60% of ₹1000."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch17_t1_qe8',
        type: "mcq",
        question: "Which is better value: 3 chocolates for ₹60 or 5 chocolates for ₹95?",
        options: ["3 chocolates for ₹60", "5 chocolates for ₹95", "Both are equal", "Cannot be determined"],
        correctAnswer: "5 chocolates for ₹95",
        explanation: "₹60/3 = ₹20 per chocolate vs ₹95/5 = ₹19 per chocolate. 🍫",
        wrongAnswerExplanations: {
            "3 chocolates for ₹60": "This costs ₹20 per chocolate, which is more expensive.",
            "Both are equal": "The per-chocolate prices are different.",
            "Cannot be determined": "The values can be determined and compared."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch17_t1_qe9',
        type: "mcq",
        question: "If you save ₹25 every day, how much will you save in a week?",
        options: ["₹125", "₹150", "₹175", "₹200"],
        correctAnswer: "₹175",
        explanation: "₹25 × 7 days = ₹175. This is a basic multiplication problem in daily savings. 💰",
        wrongAnswerExplanations: {
            "₹125": "This would be saving for 5 days.",
            "₹150": "This would be saving for 6 days.",
            "₹200": "This would be saving for 8 days."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch17_t1_qe10',
        type: "mcq",
        question: "What is 15% of ₹200?",
        options: ["₹20", "₹30", "₹40", "₹50"],
        correctAnswer: "₹30",
        explanation: "15% of ₹200 = (15 × 200) ÷ 100 = ₹30. This is a basic percentage calculation. 📊",
        wrongAnswerExplanations: {
            "₹20": "This would be 10% of ₹200.",
            "₹40": "This would be 20% of ₹200.",
            "₹50": "This would be 25% of ₹200."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch17_t1_qe11',
        type: "mcq",
        question: "If you have ₹1000 and spend ₹300 on clothes and ₹200 on books, how much is left?",
        options: ["₹400", "₹500", "₹600", "₹700"],
        correctAnswer: "₹500",
        explanation: "₹1000 - ₹300 - ₹200 = ₹500. This is a basic subtraction problem with multiple expenses. 👕",
        wrongAnswerExplanations: {
            "₹400": "This would be the total spent, not the amount left.",
            "₹600": "This is more than what would be left.",
            "₹700": "This is more than what would be left."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch17_t1_qe12',
        type: "mcq",
        question: "Which is better value: 2 kg for ₹100 or 5 kg for ₹240?",
        options: ["2 kg for ₹100", "5 kg for ₹240", "Both are equal", "Cannot be determined"],
        correctAnswer: "5 kg for ₹240",
        explanation: "₹100/2 = ₹50 per kg vs ₹240/5 = ₹48 per kg. 🛒",
        wrongAnswerExplanations: {
            "2 kg for ₹100": "This costs ₹50 per kg, which is more expensive.",
            "Both are equal": "The per-kg prices are different.",
            "Cannot be determined": "The values can be determined and compared."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch17_t1_qe13',
        type: "mcq",
        question: "If you save 25% of ₹800, how much do you save?",
        options: ["₹100", "₹200", "₹300", "₹400"],
        correctAnswer: "₹200",
        explanation: "25% of ₹800 = (25 × 800) ÷ 100 = ₹200. This is a basic percentage calculation. 💵",
        wrongAnswerExplanations: {
            "₹100": "This would be 12.5% of ₹800.",
            "₹300": "This would be 37.5% of ₹800.",
            "₹400": "This would be 50% of ₹800."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch17_t1_qe14',
        type: "mcq",
        question: "What is the total cost if you buy 4 items at ₹75 each?",
        options: ["₹200", "₹250", "₹300", "₹350"],
        correctAnswer: "₹300",
        explanation: "4 × ₹75 = ₹300. This is a basic multiplication problem in shopping. 🛍️",
        wrongAnswerExplanations: {
            "₹200": "This would be the cost of about 2.67 items.",
            "₹250": "This would be the cost of about 3.33 items.",
            "₹350": "This would be the cost of about 4.67 items."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch17_t1_qe15',
        type: "mcq",
        question: "If you have ₹500 and spend ₹150 on snacks and ₹200 on stationery, how much is left?",
        options: ["₹100", "₹150", "₹200", "₹250"],
        correctAnswer: "₹150",
        explanation: "₹500 - ₹150 - ₹200 = ₹150. This is a basic subtraction problem with multiple expenses. 📝",
        wrongAnswerExplanations: {
            "₹100": "This is less than what would be left.",
            "₹200": "This is more than what would be left.",
            "₹250": "This is more than what would be left."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch17_t1_qe16',
        type: "mcq",
        question: "What is 10% of ₹500?",
        options: ["₹25", "₹50", "₹75", "₹100"],
        correctAnswer: "₹50",
        explanation: "10% of ₹500 = (10 × 500) ÷ 100 = ₹50. This is a basic percentage calculation. 📊",
        wrongAnswerExplanations: {
            "₹25": "This would be 5% of ₹500.",
            "₹75": "This would be 15% of ₹500.",
            "₹100": "This would be 20% of ₹500."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch17_t1_qe17',
        type: "mcq",
        question: "If you save ₹40 every week, how much will you save in 5 weeks?",
        options: ["₹150", "₹200", "₹250", "₹300"],
        correctAnswer: "₹200",
        explanation: "₹40 × 5 weeks = ₹200. This is a basic multiplication problem in savings. 💰",
        wrongAnswerExplanations: {
            "₹150": "This would be saving for 3.75 weeks.",
            "₹250": "This would be saving for 6.25 weeks.",
            "₹300": "This would be saving for 7.5 weeks."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch17_t1_qe18',
        type: "mcq",
        question: "Which is better value: 4 pens for ₹80 or 6 pens for ₹120?",
        options: ["4 pens for ₹80", "6 pens for ₹120", "Both are equal", "Cannot be determined"],
        correctAnswer: "Both are equal",
        explanation: "Both options cost ₹20 per pen (₹80/4 = ₹20, ₹120/6 = ₹20). ✏️",
        wrongAnswerExplanations: {
            "4 pens for ₹80": "This is the same value as the other option.",
            "6 pens for ₹120": "This is the same value as the other option.",
            "Cannot be determined": "The values can be determined and are equal."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch17_t1_qe19',
        type: "mcq",
        question: "If you have ₹1000 and spend 30% on toys, how much is left?",
        options: ["₹600", "₹700", "₹800", "₹900"],
        correctAnswer: "₹700",
        explanation: "30% of ₹1000 = ₹300 spent, so ₹1000 - ₹300 = ₹700 left. 🧸",
        wrongAnswerExplanations: {
            "₹600": "This would be 40% left, not 70%.",
            "₹800": "This would be 20% spent, not 30%.",
            "₹900": "This would be 10% spent, not 30%."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch17_t1_qe20',
        type: "mcq",
        question: "What is the total cost if you buy 5 items at ₹40 each?",
        options: ["₹150", "₹200", "₹250", "₹300"],
        correctAnswer: "₹200",
        explanation: "5 × ₹40 = ₹200. This is a basic multiplication problem in shopping. 🛍️",
        wrongAnswerExplanations: {
            "₹150": "This would be the cost of 3.75 items.",
            "₹250": "This would be the cost of 6.25 items.",
            "₹300": "This would be the cost of 7.5 items."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    }
]; 