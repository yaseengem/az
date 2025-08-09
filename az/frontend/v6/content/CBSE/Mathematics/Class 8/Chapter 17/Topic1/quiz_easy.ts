import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl8_ch17_t1_qe1',
        type: "mcq",
        question: "If you have a monthly budget of ₹5000 and spend ₹1200 on food, what percentage of your budget is spent on food?",
        options: ["20%", "24%", "25%", "30%"],
        correctAnswer: "24%",
        explanation: "(1200/5000) × 100 = 24%. To find the percentage, divide the expense by total budget and multiply by 100. 💰",
        wrongAnswerExplanations: {
            "20%": "This would mean spending ₹1000 on food (5000 × 0.20).",
            "25%": "This would mean spending ₹1250 on food (5000 × 0.25).",
            "30%": "This would mean spending ₹1500 on food (5000 × 0.30)."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch17_t1_qe2',
        type: "mcq",
        question: "What is the simple interest on ₹10,000 at 5% per annum for 2 years?",
        options: ["₹500", "₹1000", "₹1500", "₹2000"],
        correctAnswer: "₹1000",
        explanation: "Simple Interest = (Principal × Rate × Time)/100 = (10000 × 5 × 2)/100 = ₹1000. 💸",
        wrongAnswerExplanations: {
            "₹500": "This would be the interest for only 1 year.",
            "₹1500": "This would be the interest at 7.5% rate.",
            "₹2000": "This would be the interest at 10% rate."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch17_t1_qe3',
        type: "mcq",
        question: "In a monthly budget of ₹20,000, if 30% is allocated for rent, how much money is available for rent?",
        options: ["₹5000", "₹6000", "₹7000", "₹8000"],
        correctAnswer: "₹6000",
        explanation: "30% of ₹20,000 = (20000 × 30)/100 = ₹6000. To find a percentage of a number, multiply by percentage and divide by 100. 🏠",
        wrongAnswerExplanations: {
            "₹5000": "This is 25% of ₹20,000.",
            "₹7000": "This is 35% of ₹20,000.",
            "₹8000": "This is 40% of ₹20,000."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch17_t1_qe4',
        type: "mcq",
        question: "If you save ₹200 per month, how much will you save in a year?",
        options: ["₹1200", "₹2000", "₹2400", "₹3600"],
        correctAnswer: "₹2400",
        explanation: "Monthly saving × Number of months = ₹200 × 12 = ₹2400. Regular saving helps in building a financial cushion. 🏦",
        wrongAnswerExplanations: {
            "₹1200": "This would be savings for 6 months.",
            "₹2000": "This would be savings for 10 months.",
            "₹3600": "This would be savings of ₹300 per month."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch17_t1_qe5',
        type: "mcq",
        question: "What is the principal amount if the simple interest is ₹600 at 6% per annum for 2 years?",
        options: ["₹3000", "₹4000", "₹5000", "₹6000"],
        correctAnswer: "₹5000",
        explanation: "Principal = (Interest × 100)/(Rate × Time) = (600 × 100)/(6 × 2) = ₹5000. Using the simple interest formula rearranged. 📊",
        wrongAnswerExplanations: {
            "₹3000": "This would give interest of ₹360.",
            "₹4000": "This would give interest of ₹480.",
            "₹6000": "This would give interest of ₹720."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch17_t1_qe6',
        type: "mcq",
        question: "In a budget, what percentage should ideally be saved according to the 50-30-20 rule?",
        options: ["10%", "15%", "20%", "25%"],
        correctAnswer: "20%",
        explanation: "The 50-30-20 rule suggests 50% for needs, 30% for wants, and 20% for savings. This is a basic budgeting principle. 💵",
        wrongAnswerExplanations: {
            "10%": "This is too low for long-term financial security.",
            "15%": "This is below the recommended savings percentage.",
            "25%": "This exceeds the recommended 20% for savings."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch17_t1_qe7',
        type: "mcq",
        question: "If you deposit ₹8000 at 4% simple interest, how much interest will you earn in 6 months?",
        options: ["₹80", "₹120", "₹160", "₹320"],
        correctAnswer: "₹160",
        explanation: "Interest = (8000 × 4 × 0.5)/100 = ₹160. For 6 months, time is taken as 0.5 years in the simple interest formula. 📈",
        wrongAnswerExplanations: {
            "₹80": "This would be interest for 3 months.",
            "₹120": "This would be interest at 3% rate.",
            "₹320": "This would be interest for 1 year."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch17_t1_qe8',
        type: "mcq",
        question: "What is the rate of interest if ₹12,000 earns ₹900 simple interest in 1.5 years?",
        options: ["4%", "5%", "6%", "8%"],
        correctAnswer: "5%",
        explanation: "Rate = (Interest × 100)/(Principal × Time) = (900 × 100)/(12000 × 1.5) = 5%. Using the simple interest formula solved for rate. 📝",
        wrongAnswerExplanations: {
            "4%": "This would give interest of ₹720.",
            "6%": "This would give interest of ₹1080.",
            "8%": "This would give interest of ₹1440."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch17_t1_qe9',
        type: "mcq",
        question: "In a monthly income of ₹25,000, if 40% goes to rent and 30% to food, how much is left for other expenses?",
        options: ["₹5000", "₹7500", "₹10,000", "₹15,000"],
        correctAnswer: "₹7500",
        explanation: "Remaining = Total - Rent - Food = 25000 - (40% of 25000) - (30% of 25000) = 25000 - 10000 - 7500 = ₹7500. 🧮",
        wrongAnswerExplanations: {
            "₹5000": "This is only 20% of the income.",
            "₹10,000": "This is 40% of the income.",
            "₹15,000": "This is 60% of the income."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch17_t1_qe10',
        type: "mcq",
        question: "What is the time period if ₹15,000 earns ₹1,800 simple interest at 6% per annum?",
        options: ["1.5 years", "2 years", "2.5 years", "3 years"],
        correctAnswer: "2 years",
        explanation: "Time = (Interest × 100)/(Principal × Rate) = (1800 × 100)/(15000 × 6) = 2 years. Using simple interest formula solved for time. ⏰",
        wrongAnswerExplanations: {
            "1.5 years": "This would give interest of ₹1,350.",
            "2.5 years": "This would give interest of ₹2,250.",
            "3 years": "This would give interest of ₹2,700."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch17_t1_qe11',
        type: "mcq",
        question: "If you spend ₹3000 on groceries from a budget of ₹15,000, what percentage is spent on groceries?",
        options: ["15%", "20%", "25%", "30%"],
        correctAnswer: "20%",
        explanation: "(3000/15000) × 100 = 20%. Calculate percentage by dividing expense by total budget and multiplying by 100. 🛒",
        wrongAnswerExplanations: {
            "15%": "This would mean spending ₹2,250 on groceries.",
            "25%": "This would mean spending ₹3,750 on groceries.",
            "30%": "This would mean spending ₹4,500 on groceries."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch17_t1_qe12',
        type: "mcq",
        question: "What is the amount after 1 year if ₹20,000 is invested at 8% simple interest?",
        options: ["₹21,000", "₹21,600", "₹22,000", "₹23,000"],
        correctAnswer: "₹21,600",
        explanation: "Amount = Principal + Interest = 20000 + (20000 × 8 × 1)/100 = 20000 + 1600 = ₹21,600. 💹",
        wrongAnswerExplanations: {
            "₹21,000": "This would be at 5% interest rate.",
            "₹22,000": "This would be at 10% interest rate.",
            "₹23,000": "This would be at 15% interest rate."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch17_t1_qe13',
        type: "mcq",
        question: "In a budget of ₹10,000, if you want to save 15%, how much should you save monthly?",
        options: ["₹1000", "₹1500", "₹2000", "₹2500"],
        correctAnswer: "₹1500",
        explanation: "15% of ₹10,000 = (10000 × 15)/100 = ₹1500. To find savings amount, multiply budget by saving percentage and divide by 100. 🏆",
        wrongAnswerExplanations: {
            "₹1000": "This is 10% of the budget.",
            "₹2000": "This is 20% of the budget.",
            "₹2500": "This is 25% of the budget."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch17_t1_qe14',
        type: "mcq",
        question: "What will be the simple interest on ₹25,000 at 12% per annum for 9 months?",
        options: ["₹1875", "₹2250", "₹2500", "₹3000"],
        correctAnswer: "₹2250",
        explanation: "Interest = (25000 × 12 × 9/12)/100 = ₹2250. For 9 months, time is taken as 9/12 years. 📅",
        wrongAnswerExplanations: {
            "₹1875": "This would be interest for 6 months.",
            "₹2500": "This would be interest for 10 months.",
            "₹3000": "This would be interest for 1 year."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch17_t1_qe15',
        type: "mcq",
        question: "If you save ₹150 per week, how much will you save in 6 months?",
        options: ["₹2700", "₹3600", "₹3900", "₹4200"],
        correctAnswer: "₹3900",
        explanation: "Weekly saving × Number of weeks = 150 × 26 weeks = ₹3900. There are approximately 26 weeks in 6 months. 📊",
        wrongAnswerExplanations: {
            "₹2700": "This would be savings for about 18 weeks.",
            "₹3600": "This would be savings for 24 weeks.",
            "₹4200": "This would be savings for 28 weeks."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch17_t1_qe16',
        type: "mcq",
        question: "What percentage of income is spent on needs according to the 50-30-20 budgeting rule?",
        options: ["20%", "30%", "40%", "50%"],
        correctAnswer: "50%",
        explanation: "The 50-30-20 rule allocates 50% for needs (essential expenses), 30% for wants, and 20% for savings. 📋",
        wrongAnswerExplanations: {
            "20%": "This is the recommended percentage for savings.",
            "30%": "This is the recommended percentage for wants.",
            "40%": "This is less than the recommended percentage for needs."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch17_t1_qe17',
        type: "mcq",
        question: "If your monthly income is ₹30,000 and you spend ₹24,000, what is your savings rate?",
        options: ["15%", "20%", "25%", "30%"],
        correctAnswer: "20%",
        explanation: "Savings rate = ((Income - Expenses)/Income) × 100 = ((30000 - 24000)/30000) × 100 = 20%. 💰",
        wrongAnswerExplanations: {
            "15%": "This would mean saving ₹4,500.",
            "25%": "This would mean saving ₹7,500.",
            "30%": "This would mean saving ₹9,000."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch17_t1_qe18',
        type: "mcq",
        question: "What is the principal amount needed to earn ₹450 as simple interest in 2 years at 9% per annum?",
        options: ["₹2000", "₹2500", "₹3000", "₹3500"],
        correctAnswer: "₹2500",
        explanation: "Principal = (Interest × 100)/(Rate × Time) = (450 × 100)/(9 × 2) = ₹2500. Using simple interest formula solved for principal. 🏦",
        wrongAnswerExplanations: {
            "₹2000": "This would give interest of ₹360.",
            "₹3000": "This would give interest of ₹540.",
            "₹3500": "This would give interest of ₹630."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch17_t1_qe19',
        type: "mcq",
        question: "In a monthly budget of ₹40,000, if 35% is spent on housing and 25% on food, how much is available for other expenses?",
        options: ["₹14,000", "₹16,000", "₹18,000", "₹20,000"],
        correctAnswer: "₹16,000",
        explanation: "Remaining = Total - Housing - Food = 40000 - (40000 × 0.35) - (40000 × 0.25) = 40000 - 14000 - 10000 = ₹16,000. 🏠",
        wrongAnswerExplanations: {
            "₹14,000": "This is 35% of the budget.",
            "₹18,000": "This would mean only 55% is spent on housing and food.",
            "₹20,000": "This would mean only 50% is spent on housing and food."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch17_t1_qe20',
        type: "mcq",
        question: "What is the time period required to earn ₹2,400 as simple interest on ₹12,000 at 10% per annum?",
        options: ["1.5 years", "2 years", "2.5 years", "3 years"],
        correctAnswer: "2 years",
        explanation: "Time = (Interest × 100)/(Principal × Rate) = (2400 × 100)/(12000 × 10) = 2 years. Using simple interest formula solved for time. ⏰",
        wrongAnswerExplanations: {
            "1.5 years": "This would give interest of ₹1,800.",
            "2.5 years": "This would give interest of ₹3,000.",
            "3 years": "This would give interest of ₹3,600."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    }
]; 