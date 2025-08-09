import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl4_ch6_t3_qm1',
        type: "mcq",
        question: "Rohit borrowed ₹250 from his friend. He paid back ₹150 after one week and promised to pay the rest in two equal weekly payments. How much will each of these remaining payments be?",
        options: ["₹25", "₹50", "₹75", "₹100"],
        correctAnswer: "₹50",
        explanation: "Remaining amount = ₹250 - ₹150 = ₹100. For two equal payments: ₹100 ÷ 2 = ₹50 per payment.",
        wrongAnswerExplanations: {
            "₹25": "This would mean 4 equal payments of the remaining amount, not 2.",
            "₹75": "This would mean paying back more than the remaining amount (₹150 instead of ₹100).",
            "₹100": "This would mean a single payment of the remaining amount, not 2 equal payments."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch6_t3_qm2',
        type: "mcq",
        question: "Sita borrowed ₹800 from a bank for 1 year at 10% interest. How much total money will she return to the bank after 1 year?",
        options: ["₹80", "₹880", "₹8000", "₹8800"],
        correctAnswer: "₹880",
        explanation: "Interest = ₹800 × 10% = ₹80. Total repayment = Principal + Interest = ₹800 + ₹80 = ₹880.",
        wrongAnswerExplanations: {
            "₹80": "This is only the interest amount, not the total repayment.",
            "₹8000": "This is 10 times the principal amount, which is incorrect.",
            "₹8800": "This incorrectly calculates the interest as ₹800 × 10 instead of ₹800 × 0.1."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch6_t3_qm3',
        type: "mcq",
        question: "Raj sells mangoes. On Monday, he earned ₹540. On Tuesday, he earned ₹680. On Wednesday, he had to pay back a loan of ₹350. What was his total earnings for these three days?",
        options: ["₹870", "₹1220", "₹1570", "₹890"],
        correctAnswer: "₹870",
        explanation: "Total earnings = Monday + Tuesday - Loan repayment = ₹540 + ₹680 - ₹350 = ₹1220 - ₹350 = ₹870.",
        wrongAnswerExplanations: {
            "₹1220": "This is just the sum of Monday and Tuesday earnings without subtracting the loan repayment.",
            "₹1570": "This incorrectly adds the loan repayment instead of subtracting it.",
            "₹890": "This is an incorrect calculation of the total earnings."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch6_t3_qm4',
        type: "mcq",
        question: "Anita borrowed ₹600 from her mother. She agreed to pay it back in 4 equal monthly installments. After making 2 payments, how much money does she still owe?",
        options: ["₹150", "₹300", "₹450", "₹600"],
        correctAnswer: "₹300",
        explanation: "Monthly payment = ₹600 ÷ 4 = ₹150. After 2 payments: Amount still owed = ₹600 - (2 × ₹150) = ₹600 - ₹300 = ₹300.",
        wrongAnswerExplanations: {
            "₹150": "This is the amount of one monthly payment, not the remaining balance.",
            "₹450": "This would be the amount owed after making only 1 payment.",
            "₹600": "This would be the amount owed if no payments had been made yet."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch6_t3_qm5',
        type: "mcq",
        question: "Rahul buys 3 notebooks for ₹45 each and 2 pens for ₹15 each. If he gives the shopkeeper a ₹200 note, how much change will he receive?",
        options: ["₹35", "₹65", "₹135", "₹165"],
        correctAnswer: "₹65",
        explanation: "Total cost = (3 × ₹45) + (2 × ₹15) = ₹135 + ₹30 = ₹165. Change = ₹200 - ₹165 = ₹35.",
        wrongAnswerExplanations: {
            "₹35": "This is the correct answer. The calculation in the explanation had an error.",
            "₹65": "This is an incorrect calculation of the change.",
            "₹135": "This is the cost of the notebooks, not the change.",
            "₹165": "This is the total cost of all items, not the change."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch6_t3_qm6',
        type: "mcq",
        question: "Meera borrowed ₹400 from a bank at 5% simple interest per year. How much interest will she pay if she returns the money after 2 years?",
        options: ["₹20", "₹40", "₹80", "₹100"],
        correctAnswer: "₹40",
        explanation: "Interest for 1 year = ₹400 × 5% = ₹20. Total interest for 2 years = ₹20 × 2 = ₹40.",
        wrongAnswerExplanations: {
            "₹20": "This is the interest for only 1 year, not 2 years.",
            "₹80": "This incorrectly calculates the interest using 10% instead of 5% for 2 years.",
            "₹100": "This is an incorrect calculation of the interest."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch6_t3_qm7',
        type: "mcq",
        question: "A shopkeeper buys 10 kg of rice for ₹400 and sells it at ₹45 per kg. What is the shopkeeper's profit?",
        options: ["₹45", "₹50", "₹400", "₹450"],
        correctAnswer: "₹50",
        explanation: "Selling price = 10 kg × ₹45 per kg = ₹450. Profit = Selling price - Cost price = ₹450 - ₹400 = ₹50.",
        wrongAnswerExplanations: {
            "₹45": "₹45 is the selling price per kg, not the total profit.",
            "₹400": "₹400 is the cost price, not the profit.",
            "₹450": "₹450 is the selling price, not the profit."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch6_t3_qm8',
        type: "mcq",
        question: "Rani borrowed ₹500 from her friend and promised to pay back with 10% extra as a thank you. How much total money will she return?",
        options: ["₹50", "₹450", "₹550", "₹600"],
        correctAnswer: "₹550",
        explanation: "Extra amount = 10% of ₹500 = ₹50. Total repayment = ₹500 + ₹50 = ₹550.",
        wrongAnswerExplanations: {
            "₹50": "This is only the extra amount, not the total repayment.",
            "₹450": "This incorrectly subtracts 10% instead of adding it.",
            "₹600": "This incorrectly adds 20% instead of 10%."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch6_t3_qm9',
        type: "mcq",
        question: "A bank offers a loan of ₹1000 at 8% interest per year. How much interest will be paid if the loan is taken for 6 months?",
        options: ["₹40", "₹80", "₹120", "₹160"],
        correctAnswer: "₹40",
        explanation: "Interest for 1 year = ₹1000 × 8% = ₹80. Interest for 6 months = ₹80 × (6/12) = ₹80 × 0.5 = ₹40.",
        wrongAnswerExplanations: {
            "₹80": "This is the interest for a full year, not 6 months.",
            "₹120": "This incorrectly calculates the interest for 1.5 years, not 6 months.",
            "₹160": "This incorrectly calculates the interest for 2 years, not 6 months."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch6_t3_qm10',
        type: "mcq",
        question: "Raja buys 5 kg of apples for ₹75 per kg. If he sells all apples for a total of ₹450, what is his profit or loss?",
        options: ["₹75 profit", "₹75 loss", "₹375 profit", "₹375 loss"],
        correctAnswer: "₹75 profit",
        explanation: "Cost price = 5 kg × ₹75 = ₹375. Profit = Selling price - Cost price = ₹450 - ₹375 = ₹75 profit.",
        wrongAnswerExplanations: {
            "₹75 loss": "This is incorrect. Raja made a profit, not a loss.",
            "₹375 profit": "This confuses the cost price with the profit amount.",
            "₹375 loss": "This is incorrect. The cost price was ₹375, but there was a profit, not a loss."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch6_t3_qm11',
        type: "mcq",
        question: "Sita borrows ₹1200 and agrees to repay in 6 equal monthly installments. What is the amount of each installment?",
        options: ["₹150", "₹200", "₹250", "₹300"],
        correctAnswer: "₹200",
        explanation: "Monthly installment = Total loan amount ÷ Number of installments = ₹1200 ÷ 6 = ₹200.",
        wrongAnswerExplanations: {
            "₹150": "This would require 8 installments (₹1200 ÷ ₹150 = 8), not 6.",
            "₹250": "This would require only 4.8 installments (₹1200 ÷ ₹250 = 4.8), not 6.",
            "₹300": "This would require only 4 installments (₹1200 ÷ ₹300 = 4), not 6."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch6_t3_qm12',
        type: "mcq",
        question: "A fruit seller buys 20 kg of oranges for ₹30 per kg. 2 kg of oranges got spoiled. He sold the remaining oranges at ₹40 per kg. What was his profit or loss?",
        options: ["₹60 loss", "₹120 profit", "₹140 profit", "₹180 profit"],
        correctAnswer: "₹140 profit",
        explanation: "Cost = 20 kg × ₹30 = ₹600. Sold = 18 kg × ₹40 = ₹720. Profit = ₹720 - ₹600 = ₹140.",
        wrongAnswerExplanations: {
            "₹60 loss": "This incorrectly assumes all oranges were spoiled and calculates only the loss.",
            "₹120 profit": "This incorrectly calculates the selling price or cost price.",
            "₹180 profit": "This incorrectly assumes all 20 kg were sold, ignoring the spoiled oranges."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 75
    },
    {
        id: 'cl4_ch6_t3_qm13',
        type: "mcq",
        question: "Arjun borrows ₹800 at a simple interest rate of 5% per year. If he repays after 3 years, what will be the total amount he pays back?",
        options: ["₹840", "₹920", "₹960", "₹1120"],
        correctAnswer: "₹920",
        explanation: "Interest = Principal × Rate × Time = ₹800 × 5/100 × 3 = ₹120. Total repayment = ₹800 + ₹120 = ₹920.",
        wrongAnswerExplanations: {
            "₹840": "This incorrectly calculates the interest for only 1 year (₹40) instead of 3 years.",
            "₹960": "This incorrectly calculates the interest rate or the time period.",
            "₹1120": "This incorrectly calculates the interest using a rate of 10% instead of 5%."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch6_t3_qm14',
        type: "mcq",
        question: "Meena borrowed money from three friends: ₹150 from Riya, ₹200 from Sita, and ₹250 from Gita. If she has repaid ₹400 in total, how much does she still need to pay back?",
        options: ["₹150", "₹200", "₹250", "₹600"],
        correctAnswer: "₹200",
        explanation: "Total borrowed = ₹150 + ₹200 + ₹250 = ₹600. Amount still owed = ₹600 - ₹400 = ₹200.",
        wrongAnswerExplanations: {
            "₹150": "This matches the amount borrowed from Riya, but doesn't represent the remaining debt.",
            "₹250": "This matches the amount borrowed from Gita, but doesn't represent the remaining debt.",
            "₹600": "This is the total amount borrowed, not the amount still owed."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch6_t3_qm15',
        type: "mcq",
        question: "A vegetable seller bought 25 kg of potatoes for ₹500. She sold some at ₹25 per kg and earned ₹375. How many kilograms of potatoes did she sell?",
        options: ["10 kg", "15 kg", "20 kg", "25 kg"],
        correctAnswer: "15 kg",
        explanation: "Amount earned = Quantity sold × Price per kg. So, quantity sold = ₹375 ÷ ₹25 = 15 kg.",
        wrongAnswerExplanations: {
            "10 kg": "If she sold 10 kg at ₹25 per kg, she would earn ₹250, not ₹375.",
            "20 kg": "If she sold 20 kg at ₹25 per kg, she would earn ₹500, not ₹375.",
            "25 kg": "This is the total quantity purchased, not the amount sold."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch6_t3_qm16',
        type: "mcq",
        question: "Rohan borrowed ₹350 from his uncle. He has already paid back ₹120 and ₹80 in two installments. If he wants to pay the remaining amount in 3 equal installments, how much will each installment be?",
        options: ["₹50", "₹75", "₹150", "₹200"],
        correctAnswer: "₹50",
        explanation: "Amount paid = ₹120 + ₹80 = ₹200. Remaining = ₹350 - ₹200 = ₹150. Each installment = ₹150 ÷ 3 = ₹50.",
        wrongAnswerExplanations: {
            "₹75": "This would mean paying in 2 equal installments, not 3.",
            "₹150": "This is the total remaining amount, not each installment.",
            "₹200": "This is the amount already paid, not each remaining installment."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch6_t3_qm17',
        type: "mcq",
        question: "A shopkeeper buys 15 packets of biscuits for ₹12 each. She sells them at ₹15 each. What is her percentage profit?",
        options: ["15%", "20%", "25%", "30%"],
        correctAnswer: "25%",
        explanation: "Cost price per packet = ₹12. Profit per packet = ₹15 - ₹12 = ₹3. Percentage profit = (₹3 ÷ ₹12) × 100 = 25%.",
        wrongAnswerExplanations: {
            "15%": "This incorrectly calculates the percentage profit.",
            "20%": "This incorrectly calculates the percentage profit.",
            "30%": "This incorrectly calculates the percentage profit."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch6_t3_qm18',
        type: "mcq",
        question: "Sita lends ₹500 to her friend for 2 years at a simple interest rate of 4% per year. How much interest will she earn?",
        options: ["₹20", "₹40", "₹50", "₹100"],
        correctAnswer: "₹40",
        explanation: "Interest = Principal × Rate × Time = ₹500 × 4/100 × 2 = ₹40.",
        wrongAnswerExplanations: {
            "₹20": "This is the interest for only 1 year, not 2 years.",
            "₹50": "This incorrectly calculates the interest using a rate of 5% instead of 4%.",
            "₹100": "This incorrectly calculates the interest using a rate of 10% instead of 4%."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch6_t3_qm19',
        type: "mcq",
        question: "Raj has ₹500. He spends ₹125 on books, ₹75 on stationery, and ₹150 on a gift. What fraction of his money is left?",
        options: ["1/5", "2/5", "3/5", "3/10"],
        correctAnswer: "3/10",
        explanation: "Money spent = ₹125 + ₹75 + ₹150 = ₹350. Money left = ₹500 - ₹350 = ₹150. Fraction left = ₹150 ÷ ₹500 = 3/10.",
        wrongAnswerExplanations: {
            "1/5": "1/5 of ₹500 is ₹100, not ₹150.",
            "2/5": "2/5 of ₹500 is ₹200, not ₹150.",
            "3/5": "3/5 of ₹500 is ₹300, not ₹150."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 75
    },
    {
        id: 'cl4_ch6_t3_qm20',
        type: "mcq",
        question: "Aman borrowed ₹1500 from a bank. He paid back ₹500 after the first month, ₹300 after the second month, and ₹400 after the third month. What percentage of the loan has he repaid so far?",
        options: ["60%", "70%", "80%", "90%"],
        correctAnswer: "80%",
        explanation: "Total repaid = ₹500 + ₹300 + ₹400 = ₹1200. Percentage repaid = (₹1200 ÷ ₹1500) × 100 = 80%.",
        wrongAnswerExplanations: {
            "60%": "60% of ₹1500 is ₹900, not ₹1200.",
            "70%": "70% of ₹1500 is ₹1050, not ₹1200.",
            "90%": "90% of ₹1500 is ₹1350, not ₹1200."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    }
];
