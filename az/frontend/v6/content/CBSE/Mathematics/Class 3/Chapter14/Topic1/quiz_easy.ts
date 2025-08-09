import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl3_ch14_t1_qe1',
        type: "mcq",
        question: "How many paise make 1 rupee?",
        options: ["10 paise", "50 paise", "100 paise", "1000 paise"],
        correctAnswer: "100 paise",
        explanation: "100 paise = 1 rupee. This is the basic relationship between rupees and paise.",
        wrongAnswerExplanations: {
            "10 paise": "10 paise is only 1/10 of a rupee. You need 100 paise to make 1 rupee.",
            "50 paise": "50 paise is half a rupee (₹0.50). You need 100 paise to make 1 rupee.",
            "1000 paise": "1000 paise is equal to 10 rupees, not 1 rupee."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl3_ch14_t1_qe2',
        type: "mcq",
        question: "Which coin is NOT used in Indian currency?",
        options: ["₹1", "₹2", "₹5", "₹7"],
        correctAnswer: "₹7",
        explanation: "There is no ₹7 coin in Indian currency. Common Indian coins are ₹1, ₹2, ₹5, and ₹10.",
        wrongAnswerExplanations: {
            "₹1": "The ₹1 coin is a valid Indian currency coin.",
            "₹2": "The ₹2 coin is a valid Indian currency coin.",
            "₹5": "The ₹5 coin is a valid Indian currency coin."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl3_ch14_t1_qe3',
        type: "mcq",
        question: "Rohit has three ₹5 coins. How much money does he have in total?",
        options: ["₹5", "₹10", "₹15", "₹20"],
        correctAnswer: "₹15",
        explanation: "Three ₹5 coins = 5 + 5 + 5 = ₹15. When adding equal values, we multiply: 3 × ₹5 = ₹15.",
        wrongAnswerExplanations: {
            "₹5": "This would be correct if Rohit had only one ₹5 coin, but he has three coins.",
            "₹10": "This would be correct if Rohit had two ₹5 coins, but he has three coins.",
            "₹20": "This is more than the actual amount. Three ₹5 coins add up to ₹15, not ₹20."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl3_ch14_t1_qe4',
        type: "mcq",
        question: "Priya went to a store with ₹50. She bought a pencil for ₹8. How much money does she have left?",
        options: ["₹58", "₹42", "₹40", "₹48"],
        correctAnswer: "₹42",
        explanation: "To find the remaining amount: ₹50 - ₹8 = ₹42. Priya has ₹42 left after buying the pencil.",
        wrongAnswerExplanations: {
            "₹58": "This is the sum of the amounts (₹50 + ₹8), but we need to subtract the cost of the pencil.",
            "₹40": "This is incorrect. The correct calculation is ₹50 - ₹8 = ₹42.",
            "₹48": "This is incorrect. The correct calculation is ₹50 - ₹8 = ₹42."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl3_ch14_t1_qe5',
        type: "mcq",
        question: "Which of these is the correct way to write 5 rupees and 50 paise?",
        options: ["₹5.5", "₹5.50", "₹5.05", "₹5,50"],
        correctAnswer: "₹5.50",
        explanation: "₹5.50 is the correct way to write 5 rupees and 50 paise. The decimal point separates rupees and paise.",
        wrongAnswerExplanations: {
            "₹5.5": "While mathematically equal to ₹5.50, money values are typically written with two decimal places.",
            "₹5.05": "This represents 5 rupees and 5 paise, not 5 rupees and 50 paise.",
            "₹5,50": "This is incorrect. In India, we use a decimal point (.) not a comma (,) to separate rupees and paise."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl3_ch14_t1_qe6',
        type: "mcq",
        question: "Neha has a ₹10 note, two ₹5 coins, and three ₹2 coins. How much money does she have in total?",
        options: ["₹16", "₹21", "₹26", "₹17"],
        correctAnswer: "₹26",
        explanation: "Total money = ₹10 + (2 × ₹5) + (3 × ₹2) = ₹10 + ₹10 + ₹6 = ₹26",
        wrongAnswerExplanations: {
            "₹16": "This is incomplete. You've probably forgotten to add some of the coins.",
            "₹21": "This is incorrect. The correct calculation is ₹10 + ₹10 + ₹6 = ₹26.",
            "₹17": "This is incorrect. The correct calculation is ₹10 + ₹10 + ₹6 = ₹26."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch14_t1_qe7',
        type: "mcq",
        question: "What is 75 paise equal to?",
        options: ["₹0.75", "₹0.075", "₹7.5", "₹0.175"],
        correctAnswer: "₹0.75",
        explanation: "75 paise = 75/100 rupees = ₹0.75. This shows the relationship between paise and rupees.",
        wrongAnswerExplanations: {
            "₹0.075": "This is incorrect. 75 paise is 75/100 of a rupee, which equals ₹0.75.",
            "₹7.5": "This is much larger than 75 paise. 75 paise is less than 1 rupee (₹0.75).",
            "₹0.175": "This is incorrect. 75 paise equals ₹0.75."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl3_ch14_t1_qe8',
        type: "mcq",
        question: "Raju bought a chocolate for ₹15.50 and paid with a ₹20 note. How much change should he get?",
        options: ["₹4.50", "₹5.50", "₹5", "₹4"],
        correctAnswer: "₹4.50",
        explanation: "Change = ₹20 - ₹15.50 = ₹4.50. This is the amount Raju should receive back.",
        wrongAnswerExplanations: {
            "₹5.50": "This is incorrect. The change is calculated as ₹20 - ₹15.50 = ₹4.50.",
            "₹5": "This is incorrect. The exact change is ₹4.50, not ₹5.",
            "₹4": "This is incorrect. The exact change is ₹4.50, not ₹4."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 40
    },
    {
        id: 'cl3_ch14_t1_qe9',
        type: "mcq",
        question: "Which is more: 350 paise or ₹3.75?",
        options: ["350 paise", "₹3.75", "Both are equal", "Cannot be compared"],
        correctAnswer: "₹3.75",
        explanation: "350 paise = ₹3.50, whereas ₹3.75 = 375 paise. Since 375 > 350, ₹3.75 is more than 350 paise.",
        wrongAnswerExplanations: {
            "350 paise": "350 paise equals ₹3.50, which is less than ₹3.75.",
            "Both are equal": "They are not equal. 350 paise = ₹3.50, while ₹3.75 = 375 paise.",
            "Cannot be compared": "They can be compared by converting to the same unit (either both to paise or both to rupees)."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 40
    },
    {
        id: 'cl3_ch14_t1_qe10',
        type: "mcq",
        question: "If you have 4 coins of 25 paise each, how much money do you have?",
        options: ["₹1", "₹1.25", "₹0.25", "₹0.75"],
        correctAnswer: "₹1",
        explanation: "4 coins of 25 paise each = 4 × 25 paise = 100 paise = ₹1",
        wrongAnswerExplanations: {
            "₹1.25": "This is incorrect. 4 × 25 paise = 100 paise = ₹1, not ₹1.25.",
            "₹0.25": "This is the value of just one 25 paise coin, not all four coins.",
            "₹0.75": "This is the value of three 25 paise coins, not all four coins."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl3_ch14_t1_qe11',
        type: "mcq",
        question: "How many 50 paise coins equal ₹10?",
        options: ["5 coins", "20 coins", "25 coins", "10 coins"],
        correctAnswer: "20 coins",
        explanation: "Since each coin is 50 paise (₹0.50), we divide: ₹10 ÷ ₹0.50 = 20 coins",
        wrongAnswerExplanations: {
            "5 coins": "5 coins of 50 paise would be 5 × ₹0.50 = ₹2.50, not ₹10.",
            "25 coins": "25 coins of 50 paise would be 25 × ₹0.50 = ₹12.50, not ₹10.",
            "10 coins": "10 coins of 50 paise would be 10 × ₹0.50 = ₹5, not ₹10."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 40
    },
    {
        id: 'cl3_ch14_t1_qe12',
        type: "mcq",
        question: "Meera has ₹25. She wants to buy 5 notebooks that cost ₹6 each. Does she have enough money?",
        options: ["Yes, she will have ₹1 left", "Yes, she will have ₹5 left", "No, she needs ₹5 more", "No, she needs ₹10 more"],
        correctAnswer: "No, she needs ₹5 more",
        explanation: "Cost of 5 notebooks = 5 × ₹6 = ₹30. Since she has only ₹25, she needs ₹30 - ₹25 = ₹5 more.",
        wrongAnswerExplanations: {
            "Yes, she will have ₹1 left": "This is incorrect. The total cost is ₹30, which exceeds her ₹25.",
            "Yes, she will have ₹5 left": "This is incorrect. She doesn't have enough money to start with.",
            "No, she needs ₹10 more": "This is incorrect. She needs exactly ₹5 more to buy all 5 notebooks."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch14_t1_qe13',
        type: "mcq",
        question: "Which of these shows the correct order of coins from lowest to highest value?",
        options: ["50 paise, ₹1, ₹2, ₹5", "₹1, 50 paise, ₹2, ₹5", "50 paise, ₹1, ₹5, ₹2", "₹1, ₹2, 50 paise, ₹5"],
        correctAnswer: "50 paise, ₹1, ₹2, ₹5",
        explanation: "The correct ascending order is 50 paise (₹0.50), ₹1, ₹2, and ₹5.",
        wrongAnswerExplanations: {
            "₹1, 50 paise, ₹2, ₹5": "This is incorrect. 50 paise (₹0.50) is less than ₹1.",
            "50 paise, ₹1, ₹5, ₹2": "This is incorrect. ₹2 is less than ₹5.",
            "₹1, ₹2, 50 paise, ₹5": "This is incorrect. 50 paise (₹0.50) is less than both ₹1 and ₹2."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 35
    },
    {
        id: 'cl3_ch14_t1_qe14',
        type: "mcq",
        question: "If a shopkeeper gives you ₹2.50 change from a ₹10 note, how much did your purchase cost?",
        options: ["₹7.50", "₹12.50", "₹8.50", "₹7"],
        correctAnswer: "₹7.50",
        explanation: "Purchase cost = ₹10 - ₹2.50 = ₹7.50",
        wrongAnswerExplanations: {
            "₹12.50": "This is incorrect. If the purchase cost was ₹12.50, you would need to pay more, not receive change.",
            "₹8.50": "This is incorrect. ₹10 - ₹8.50 = ₹1.50, not ₹2.50.",
            "₹7": "This is incorrect. ₹10 - ₹7 = ₹3, not ₹2.50."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 40
    },
    {
        id: 'cl3_ch14_t1_qe15',
        type: "mcq",
        question: "How would you write 'five rupees and twenty-five paise' using the ₹ symbol?",
        options: ["₹5.25", "₹5.025", "₹5,25", "₹525"],
        correctAnswer: "₹5.25",
        explanation: "Five rupees and twenty-five paise is written as ₹5.25, with rupees before the decimal point and paise after it.",
        wrongAnswerExplanations: {
            "₹5.025": "This represents 5 rupees and 2.5 paise, which is incorrect.",
            "₹5,25": "In Indian currency notation, we use a decimal point (.), not a comma (,) to separate rupees and paise.",
            "₹525": "This represents 525 rupees, which is much more than 5 rupees and 25 paise."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl3_ch14_t1_qe16',
        type: "mcq",
        question: "Aryan bought a notebook for ₹12.50 and a pencil for ₹3.75. What was the total cost?",
        options: ["₹15.25", "₹16.25", "₹16.75", "₹16"],
        correctAnswer: "₹16.25",
        explanation: "Total cost = ₹12.50 + ₹3.75 = ₹16.25",
        wrongAnswerExplanations: {
            "₹15.25": "This is incorrect. The correct sum is ₹12.50 + ₹3.75 = ₹16.25.",
            "₹16.75": "This is incorrect. The correct sum is ₹12.50 + ₹3.75 = ₹16.25.",
            "₹16": "This is incomplete. The exact total is ₹16.25."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 40
    },
    {
        id: 'cl3_ch14_t1_qe17',
        type: "mcq",
        question: "Which is the largest amount?",
        options: ["350 paise", "₹3.05", "₹3.50", "₹0.35"],
        correctAnswer: "₹3.50",
        explanation: "Converting to the same unit: 350 paise = ₹3.50, ₹3.05 = 305 paise, ₹0.35 = 35 paise. ₹3.50 is the largest.",
        wrongAnswerExplanations: {
            "350 paise": "350 paise = ₹3.50, which is equal to (not larger than) the correct answer.",
            "₹3.05": "₹3.05 = 305 paise, which is less than 350 paise or ₹3.50.",
            "₹0.35": "₹0.35 = 35 paise, which is much less than the other amounts."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch14_t1_qe18',
        type: "mcq",
        question: "If Sita has 3 coins of ₹2 each and 4 coins of ₹5 each, how much money does she have in total?",
        options: ["₹26", "₹20", "₹23", "₹6"],
        correctAnswer: "₹26",
        explanation: "Total = (3 × ₹2) + (4 × ₹5) = ₹6 + ₹20 = ₹26",
        wrongAnswerExplanations: {
            "₹20": "This is only the value of the ₹5 coins (4 × ₹5 = ₹20), excluding the ₹2 coins.",
            "₹23": "This is incorrect. The correct calculation is ₹6 + ₹20 = ₹26.",
            "₹6": "This is only the value of the ₹2 coins (3 × ₹2 = ₹6), excluding the ₹5 coins."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 40
    },
    {
        id: 'cl3_ch14_t1_qe19',
        type: "mcq",
        question: "If you have two ₹10 notes and spend ₹15.50, how much money do you have left?",
        options: ["₹4.50", "₹5.50", "₹4", "₹5"],
        correctAnswer: "₹4.50",
        explanation: "Money left = ₹20 - ₹15.50 = ₹4.50",
        wrongAnswerExplanations: {
            "₹5.50": "This is incorrect. The correct calculation is ₹20 - ₹15.50 = ₹4.50.",
            "₹4": "This is incorrect. The exact amount left is ₹4.50, not ₹4.",
            "₹5": "This is incorrect. The exact amount left is ₹4.50, not ₹5."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 35
    },
    {
        id: 'cl3_ch14_t1_qe20',
        type: "mcq",
        question: "If three chocolates cost ₹4.50 each, how much will you pay for all three?",
        options: ["₹13.50", "₹12.50", "₹14.50", "₹12"],
        correctAnswer: "₹13.50",
        explanation: "Total cost = 3 × ₹4.50 = ₹13.50",
        wrongAnswerExplanations: {
            "₹12.50": "This is incorrect. The correct calculation is 3 × ₹4.50 = ₹13.50.",
            "₹14.50": "This is incorrect. The correct calculation is 3 × ₹4.50 = ₹13.50.",
            "₹12": "This is incorrect. The correct calculation is 3 × ₹4.50 = ₹13.50."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 35
    }
];
