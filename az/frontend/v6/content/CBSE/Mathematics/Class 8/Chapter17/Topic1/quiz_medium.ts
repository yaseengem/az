import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl8_ch17_t1_qm1',
        type: "mcq",
        question: "Rahul's monthly income is ₹45,000. Following the 50-30-20 rule, he spends 45% on needs and 35% on wants. How much is he deviating from the recommended savings percentage?",
        options: ["5% less", "10% more", "10% less", "20% less"],
        correctAnswer: "10% less",
        explanation: "Recommended savings is 20%. Rahul spends 45% + 35% = 80%, leaving only 10% for savings, which is 10% less than recommended. 📊",
        wrongAnswerExplanations: {
            "5% less": "The difference between recommended (20%) and actual (10%) savings is 10%, not 5%.",
            "10% more": "He is saving less, not more than the recommended amount.",
            "20% less": "The difference is 10%, not 20%. He saves 10% instead of recommended 20%."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl8_ch17_t1_qm2',
        type: "mcq",
        question: "A family's monthly expenses include: Rent ₹12,000, Groceries ₹8,000, Transportation ₹4,000, and Entertainment ₹6,000. What percentage of total expenses is spent on essential needs (rent, groceries, and transportation)?",
        options: ["60%", "70%", "75%", "80%"],
        correctAnswer: "80%",
        explanation: "Essential needs = 12000 + 8000 + 4000 = 24000. Total expenses = 30000. Percentage = (24000/30000) × 100 = 80%. 💰",
        wrongAnswerExplanations: {
            "60%": "This underestimates the proportion of essential needs.",
            "70%": "This calculation doesn't account for all essential expenses.",
            "75%": "The actual percentage is higher as essential needs form a larger portion."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl8_ch17_t1_qm3',
        type: "mcq",
        question: "If you invest ₹15,000 at 8% simple interest and want to earn ₹4,800 as interest, how long should you invest the money?",
        options: ["3 years", "4 years", "5 years", "6 years"],
        correctAnswer: "4 years",
        explanation: "Time = (Interest × 100)/(Principal × Rate) = (4800 × 100)/(15000 × 8) = 4 years. Using simple interest formula rearranged for time. 📅",
        wrongAnswerExplanations: {
            "3 years": "This would give interest of ₹3,600.",
            "5 years": "This would give interest of ₹6,000.",
            "6 years": "This would give interest of ₹7,200."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch17_t1_qm4',
        type: "mcq",
        question: "A person saves ₹2,000 monthly and receives an annual bonus equal to two months' savings. What percentage of their annual savings comes from the bonus?",
        options: ["12.5%", "14.3%", "16.7%", "20%"],
        correctAnswer: "14.3%",
        explanation: "Monthly savings = ₹2,000, Annual savings = 12 × 2000 = 24000, Bonus = 4000. Percentage = (4000/28000) × 100 ≈ 14.3%. 💹",
        wrongAnswerExplanations: {
            "12.5%": "This would mean bonus equals 1.5 months' savings.",
            "16.7%": "This would mean bonus equals 2.5 months' savings.",
            "20%": "This would mean bonus equals 3 months' savings."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl8_ch17_t1_qm5',
        type: "mcq",
        question: "If you borrow ₹50,000 and need to repay ₹65,000 after 3 years, what is the simple interest rate per annum?",
        options: ["8%", "9%", "10%", "12%"],
        correctAnswer: "10%",
        explanation: "Interest = 65000 - 50000 = 15000. Rate = (Interest × 100)/(Principal × Time) = (15000 × 100)/(50000 × 3) = 10%. 📈",
        wrongAnswerExplanations: {
            "8%": "This would result in repayment of ₹62,000.",
            "9%": "This would result in repayment of ₹63,500.",
            "12%": "This would result in repayment of ₹68,000."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl8_ch17_t1_qm6',
        type: "mcq",
        question: "A family's monthly income is ₹60,000. If they spend 40% on housing, 25% on food, and save 15%, what percentage of income is available for other expenses?",
        options: ["15%", "20%", "25%", "30%"],
        correctAnswer: "20%",
        explanation: "Total allocated = Housing (40%) + Food (25%) + Savings (15%) = 80%. Remaining = 100% - 80% = 20%. 🏠",
        wrongAnswerExplanations: {
            "15%": "This ignores that 80% is already allocated.",
            "25%": "This would exceed 100% of income.",
            "30%": "This would exceed 100% of income."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch17_t1_qm7',
        type: "mcq",
        question: "If you invest ₹20,000 at 6% simple interest for 2.5 years, and reinvest the entire amount (principal + interest) for another 2 years at 8%, what will be the final interest earned in the second investment?",
        options: ["₹3,840", "₹4,000", "₹4,480", "₹4,800"],
        correctAnswer: "₹4,480",
        explanation: "First amount = 20000 + (20000 × 6 × 2.5)/100 = 23000. Second interest = (23000 × 8 × 2)/100 = 4480. 🏦",
        wrongAnswerExplanations: {
            "₹3,840": "This would be interest if only ₹24,000 was reinvested.",
            "₹4,000": "This would be interest if only ₹25,000 was reinvested.",
            "₹4,800": "This would be interest if ₹30,000 was reinvested."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 90
    },
    {
        id: 'cl8_ch17_t1_qm8',
        type: "mcq",
        question: "A person's monthly expenses are: Rent ₹15,000, Food ₹10,000, Transport ₹5,000, Entertainment ₹8,000. If their income increases by 20%, how much extra money can they save monthly if they increase each expense by 10%?",
        options: ["₹4,200", "₹5,200", "₹6,200", "₹7,200"],
        correctAnswer: "₹6,200",
        explanation: "Original total = 38000, New expenses = 41800 (10% increase), Income increase = 7600 (20% of 38000). Extra savings = 7600 - 3800 = 6200. 💵",
        wrongAnswerExplanations: {
            "₹4,200": "This underestimates both the income increase and expense increase.",
            "₹5,200": "This underestimates the income increase.",
            "₹7,200": "This overestimates the difference between income and expense increases."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 90
    },
    {
        id: 'cl8_ch17_t1_qm9',
        type: "mcq",
        question: "You want to save ₹60,000 in 2 years. If you start with ₹20,000 and invest it at 10% simple interest, how much additional monthly saving is needed?",
        options: ["₹1,500", "₹1,667", "₹1,750", "₹2,000"],
        correctAnswer: "₹1,667",
        explanation: "Interest earned = (20000 × 10 × 2)/100 = 4000. Need = 60000 - 24000 = 36000. Monthly saving = 36000/24 ≈ 1667. 🎯",
        wrongAnswerExplanations: {
            "₹1,500": "This would result in less than ₹60,000 after 2 years.",
            "₹1,750": "This would exceed the target amount.",
            "₹2,000": "This would significantly exceed the target amount."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 90
    },
    {
        id: 'cl8_ch17_t1_qm10',
        type: "mcq",
        question: "A family reduces their monthly expenses from ₹50,000 to ₹45,000 and increases their monthly investment from ₹10,000 to ₹15,000. What is the percentage increase in their savings rate?",
        options: ["10%", "12.5%", "15%", "20%"],
        correctAnswer: "12.5%",
        explanation: "Original savings rate = 10000/60000 = 16.7%. New savings rate = 15000/60000 = 25%. Increase = 25% - 16.7% = 12.5%. 📊",
        wrongAnswerExplanations: {
            "10%": "This underestimates the increase in savings rate.",
            "15%": "This overestimates the increase in savings rate.",
            "20%": "This significantly overestimates the increase in savings rate."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl8_ch17_t1_qm11',
        type: "mcq",
        question: "If you invest ₹30,000 at x% interest for 3 years and earn ₹10,800 interest, what is x?",
        options: ["10%", "12%", "12.5%", "15%"],
        correctAnswer: "12%",
        explanation: "Using simple interest formula: 10800 = (30000 × x × 3)/100. Solving for x: x = (10800 × 100)/(30000 × 3) = 12%. 🧮",
        wrongAnswerExplanations: {
            "10%": "This would give interest of ₹9,000.",
            "12.5%": "This would give interest of ₹11,250.",
            "15%": "This would give interest of ₹13,500."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl8_ch17_t1_qm12',
        type: "mcq",
        question: "A person's expenses increase by 5% while income increases by 8%. If original expenses were ₹40,000 and income was ₹50,000, what is the new monthly saving?",
        options: ["₹11,500", "₹12,000", "₹12,500", "₹13,000"],
        correctAnswer: "₹12,500",
        explanation: "New income = 54000, New expenses = 42000. New saving = 54000 - 42000 = 12500. Original saving was 10000. 💰",
        wrongAnswerExplanations: {
            "₹11,500": "This underestimates both income and expense increases.",
            "₹12,000": "This underestimates the income increase.",
            "₹13,000": "This overestimates the difference between income and expense increases."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl8_ch17_t1_qm13',
        type: "mcq",
        question: "You need ₹1,00,000 after 5 years. If you can earn 8% simple interest, how much should you invest today?",
        options: ["₹65,000", "₹68,000", "₹71,429", "₹75,000"],
        correctAnswer: "₹71,429",
        explanation: "Using A = P(1 + rt), 100000 = P(1 + 0.08 × 5). Solving for P: P = 100000/1.4 ≈ 71429. 📈",
        wrongAnswerExplanations: {
            "₹65,000": "This would give less than ₹1,00,000 after 5 years.",
            "₹68,000": "This would give less than ₹1,00,000 after 5 years.",
            "₹75,000": "This would give more than ₹1,00,000 after 5 years."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 90
    },
    {
        id: 'cl8_ch17_t1_qm14',
        type: "mcq",
        question: "In a budget of ₹75,000, essential expenses are ₹45,000 and savings are ₹15,000. What percentage of discretionary income is being saved?",
        options: ["30%", "40%", "50%", "60%"],
        correctAnswer: "50%",
        explanation: "Discretionary income = 75000 - 45000 = 30000. Savings percentage of discretionary = (15000/30000) × 100 = 50%. 🎯",
        wrongAnswerExplanations: {
            "30%": "This is the percentage of total expenses that are discretionary.",
            "40%": "This underestimates the savings as a percentage of discretionary income.",
            "60%": "This overestimates the savings as a percentage of discretionary income."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl8_ch17_t1_qm15',
        type: "mcq",
        question: "A person invests ₹40,000 for 2 years and earns ₹7,200 interest. If they had invested for 3 years at the same rate, how much interest would they earn?",
        options: ["₹9,600", "₹10,800", "₹12,000", "₹14,400"],
        correctAnswer: "₹10,800",
        explanation: "Rate = (7200 × 100)/(40000 × 2) = 9%. For 3 years: Interest = (40000 × 9 × 3)/100 = 10800. 🏦",
        wrongAnswerExplanations: {
            "₹9,600": "This underestimates the interest for 3 years.",
            "₹12,000": "This overestimates the interest for 3 years.",
            "₹14,400": "This significantly overestimates the interest for 3 years."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 90
    },
    {
        id: 'cl8_ch17_t1_qm16',
        type: "mcq",
        question: "If monthly income is ₹80,000 and savings target is 25%, what should be the maximum monthly EMI for a loan to maintain the savings target?",
        options: ["₹20,000", "₹25,000", "₹30,000", "₹35,000"],
        correctAnswer: "₹30,000",
        explanation: "Savings needed = 25% of 80000 = 20000. Maximum EMI = Income - Savings - Other essential expenses (assumed 37.5%) = 30000. 💸",
        wrongAnswerExplanations: {
            "₹20,000": "This is too low and equals the savings amount.",
            "₹25,000": "This leaves too much for other expenses.",
            "₹35,000": "This would not allow maintaining the 25% savings target."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl8_ch17_t1_qm17',
        type: "mcq",
        question: "A family's expenses increased from ₹50,000 to ₹54,000. If their savings decreased from ₹15,000 to ₹13,000, what was the percentage increase in their income?",
        options: ["3%", "4%", "5%", "6%"],
        correctAnswer: "3%",
        explanation: "Original income = 65000, New income = 67000. Percentage increase = ((67000 - 65000)/65000) × 100 = 3%. 📊",
        wrongAnswerExplanations: {
            "4%": "This overestimates the income increase.",
            "5%": "This is the percentage increase in expenses.",
            "6%": "This significantly overestimates the income increase."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 90
    },
    {
        id: 'cl8_ch17_t1_qm18',
        type: "mcq",
        question: "You invest ₹25,000 at 6% and another ₹35,000 at 8% simple interest for 2 years. What is the effective interest rate on the total investment?",
        options: ["7%", "7.1%", "7.2%", "7.3%"],
        correctAnswer: "7.2%",
        explanation: "Total interest = (25000 × 6 × 2)/100 + (35000 × 8 × 2)/100 = 8600. Effective rate = (8600 × 100)/(60000 × 2) = 7.2%. 💹",
        wrongAnswerExplanations: {
            "7%": "This underestimates the weighted average of the two rates.",
            "7.1%": "This underestimates the effective rate.",
            "7.3%": "This overestimates the effective rate."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 90
    },
    {
        id: 'cl8_ch17_t1_qm19',
        type: "mcq",
        question: "A person's salary increased by 15% to ₹69,000. What additional amount can they save monthly if they maintain the same expenses?",
        options: ["₹8,000", "₹9,000", "₹10,000", "₹11,000"],
        correctAnswer: "₹9,000",
        explanation: "Original salary = 69000/1.15 = 60000. Increase = 69000 - 60000 = 9000. If expenses remain same, entire increase can be saved. 💵",
        wrongAnswerExplanations: {
            "₹8,000": "This underestimates the salary increase.",
            "₹10,000": "This overestimates the salary increase.",
            "₹11,000": "This significantly overestimates the salary increase."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl8_ch17_t1_qm20',
        type: "mcq",
        question: "If you reduce each expense category by 10% in a ₹50,000 budget except savings which increases by 5%, what is the total reduction in monthly spending?",
        options: ["₹4,250", "₹4,500", "₹4,750", "₹5,000"],
        correctAnswer: "₹4,500",
        explanation: "Original expenses = 45000 (assuming 10% savings). New expenses = 40500, New savings = 5250. Reduction = 45000 - 40500 = 4500. 🎯",
        wrongAnswerExplanations: {
            "₹4,250": "This underestimates the reduction in spending.",
            "₹4,750": "This overestimates the reduction in spending.",
            "₹5,000": "This would be the reduction if savings didn't increase."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 90
    }
]; 