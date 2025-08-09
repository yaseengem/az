// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 7\Chapter8\Topic2\quiz_easy.ts
import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: "cl7_ch8_t2_qe1",
        type: "mcq",
        question: "What is 25% as a decimal?",
        options: ["0.025", "0.25", "2.5", "25"],
        correctAnswer: "0.25",
        explanation: "To convert a percentage to a decimal, we divide by 100. So, 25% = 25/100 = 0.25. 🔢",
        wrongAnswerExplanations: {
            "0.025": "This is 2.5%, not 25%. Remember to divide by 100, not 1000.",
            "2.5": "This is 250%, not 25%. You should divide by 100, not 10.",
            "25": "This is 2500%, not 25%. You need to divide by 100."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: "cl7_ch8_t2_qe2",
        type: "mcq",
        question: "What is 0.4 as a percentage?",
        options: ["0.4%", "4%", "40%", "400%"],
        correctAnswer: "40%",
        explanation: "To convert a decimal to a percentage, multiply by 100. So, 0.4 × 100 = 40%. 📊",
        wrongAnswerExplanations: {
            "0.4%": "This is 0.004 as a decimal, not 0.4. You need to multiply by 100.",
            "4%": "This is 0.04 as a decimal, not 0.4. Remember to multiply by 100.",
            "400%": "This is 4 as a decimal, not 0.4. You should multiply by 100, not 1000."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: "cl7_ch8_t2_qe3",
        type: "mcq",
        question: "What fraction does 75% represent in its simplest form?",
        options: ["3/4", "7/5", "75/100", "7/10"],
        correctAnswer: "3/4",
        explanation: "75% = 75/100, which simplifies to 3/4 by dividing both numerator and denominator by 25. ¾",
        wrongAnswerExplanations: {
            "7/5": "This is 140%, not 75%.",
            "75/100": "This is correct but not in its simplest form. It can be simplified to 3/4.",
            "7/10": "This is 70%, not 75%."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: "cl7_ch8_t2_qe4",
        type: "mcq",
        question: "If a shirt costs ₹800 and there is a 20% discount, what is the discounted price?",
        options: ["₹600", "₹640", "₹680", "₹700"],
        correctAnswer: "₹640",
        explanation: "20% of ₹800 = 0.2 × ₹800 = ₹160. So discounted price = ₹800 - ₹160 = ₹640. 💰",
        wrongAnswerExplanations: {
            "₹600": "This assumes a 25% discount, not 20%.",
            "₹680": "This assumes a 15% discount, not 20%.",
            "₹700": "This assumes a 12.5% discount, not 20%."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: "cl7_ch8_t2_qe5",
        type: "mcq",
        question: "What is 20% of 150?",
        options: ["3", "15", "30", "300"],
        correctAnswer: "30",
        explanation: "20% of 150 = (20/100) × 150 = 0.2 × 150 = 30. 🧮",
        wrongAnswerExplanations: {
            "3": "This is 2% of 150, not 20%.",
            "15": "This is 10% of 150, not 20%.",
            "300": "This is 200% of 150, not 20%."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: "cl7_ch8_t2_qe6",
        type: "mcq",
        question: "If the cost price of an item is ₹500 and the selling price is ₹600, what is the profit percentage?",
        options: ["10%", "20%", "80%", "100%"],
        correctAnswer: "20%",
        explanation: "Profit = ₹600 - ₹500 = ₹100. Profit percentage = (100/500) × 100% = 20%. 📈",
        wrongAnswerExplanations: {
            "10%": "This would mean a profit of ₹50, not ₹100.",
            "80%": "This would mean a profit of ₹400, not ₹100.",
            "100%": "This would mean a profit of ₹500, not ₹100."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: "cl7_ch8_t2_qe7",
        type: "mcq",
        question: "If the cost price of an item is ₹400 and the selling price is ₹320, what is the loss percentage?",
        options: ["20%", "25%", "80%", "125%"],
        correctAnswer: "20%",
        explanation: "Loss = ₹400 - ₹320 = ₹80. Loss percentage = (80/400) × 100% = 20%. 📉",
        wrongAnswerExplanations: {
            "25%": "This would mean a loss of ₹100, not ₹80.",
            "80%": "This would mean a loss of ₹320, not ₹80.",
            "125%": "This would mean a loss of ₹500, not ₹80."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: "cl7_ch8_t2_qe8",
        type: "mcq",
        question: "What will be the simple interest on ₹5000 at 8% per annum for 2 years?",
        options: ["₹400", "₹800", "₹1000", "₹5800"],
        correctAnswer: "₹800",
        explanation: "Simple Interest = (Principal × Rate × Time)/100 = (5000 × 8 × 2)/100 = ₹800. 🏦",
        wrongAnswerExplanations: {
            "₹400": "This would be the interest for 1 year, not 2 years.",
            "₹1000": "This would be the interest at 10% rate, not 8%.",
            "₹5800": "This is the total amount (principal + interest), not just the interest."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: "cl7_ch8_t2_qe9",
        type: "mcq",
        question: "If the simple interest on a sum for 2 years at 5% per annum is ₹500, what is the principal amount?",
        options: ["₹2500", "₹5000", "₹10000", "₹25000"],
        correctAnswer: "₹5000",
        explanation: "Using the formula SI = (P × R × T)/100, we get 500 = (P × 5 × 2)/100, solving for P gives ₹5000. 💵",
        wrongAnswerExplanations: {
            "₹2500": "This would give an interest of ₹250, not ₹500.",
            "₹10000": "This would give an interest of ₹1000, not ₹500.",
            "₹25000": "This would give an interest of ₹2500, not ₹500."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: "cl7_ch8_t2_qe10",
        type: "mcq",
        question: "What is 3/5 expressed as a percentage?",
        options: ["0.6%", "6%", "60%", "600%"],
        correctAnswer: "60%",
        explanation: "3/5 = 0.6 as a decimal. To convert to percentage, multiply by 100: 0.6 × 100 = 60%. 🔢",
        wrongAnswerExplanations: {
            "0.6%": "This is 0.006 as a decimal, not 0.6. You need to multiply by 100.",
            "6%": "This is 0.06 as a decimal, not 0.6. Remember to multiply by 100.",
            "600%": "This is 6 as a decimal, not 0.6. You should multiply by 100, not 1000."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: "cl7_ch8_t2_qe11",
        type: "mcq",
        question: "A student scored 72 out of 90 in a test. What percentage did they score?",
        options: ["72%", "80%", "90%", "120%"],
        correctAnswer: "80%",
        explanation: "Percentage = (72/90) × 100% = 0.8 × 100% = 80%. The student scored 80% on the test. 📝",
        wrongAnswerExplanations: {
            "72%": "This would be correct if the test was out of 100, not 90.",
            "90%": "This would mean scoring 81 out of 90, not 72.",
            "120%": "It's not possible to score more than 100% on a test."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: "cl7_ch8_t2_qe12",
        type: "mcq",
        question: "What is the formula for calculating simple interest?",
        options: ["(P × R)/100", "P × R × T", "(P × R × T)/100", "(P × R × T × 100)"],
        correctAnswer: "(P × R × T)/100",
        explanation: "Simple Interest = (Principal × Rate × Time)/100 is the correct formula. 🏦",
        wrongAnswerExplanations: {
            "(P × R)/100": "This formula is missing the time factor.",
            "P × R × T": "This formula is missing the division by 100.",
            "(P × R × T × 100)": "This formula multiplies by 100 instead of dividing by it."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: "cl7_ch8_t2_qe13",
        type: "mcq",
        question: "In a class of 40 students, 25% are absent. How many students are present?",
        options: ["10", "15", "25", "30"],
        correctAnswer: "30",
        explanation: "25% of 40 = 0.25 × 40 = 10 students are absent. So, 40 - 10 = 30 students are present. 👨‍🎓",
        wrongAnswerExplanations: {
            "10": "This is the number of absent students, not present ones.",
            "15": "This represents 37.5% of the class, not 75% (present students).",
            "25": "This represents 62.5% of the class, not 75% (present students)."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: "cl7_ch8_t2_qe14",
        type: "mcq",
        question: "If 40% of a number is 60, what is the number?",
        options: ["24", "120", "150", "240"],
        correctAnswer: "150",
        explanation: "If 40% of x is 60, then 0.4x = 60. Solving for x: x = 60/0.4 = 150. 🧮",
        wrongAnswerExplanations: {
            "24": "This would mean 40% of 24 = 9.6, not 60.",
            "120": "This would mean 40% of 120 = 48, not 60.",
            "240": "This would mean 40% of 240 = 96, not 60."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: "cl7_ch8_t2_qe15",
        type: "mcq",
        question: "If the cost price is ₹200 and the profit is 15%, what is the selling price?",
        options: ["₹215", "₹230", "₹260", "₹300"],
        correctAnswer: "₹230",
        explanation: "Profit = 15% of ₹200 = 0.15 × ₹200 = ₹30. Selling price = ₹200 + ₹30 = ₹230. 💰",
        wrongAnswerExplanations: {
            "₹215": "This represents a profit of 7.5%, not 15%.",
            "₹260": "This represents a profit of 30%, not 15%.",
            "₹300": "This represents a profit of 50%, not 15%."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: "cl7_ch8_t2_qe16",
        type: "mcq",
        question: "A shopkeeper buys an item for ₹1200 and sells it at a loss of 10%. What is the selling price?",
        options: ["₹1080", "₹1100", "₹1180", "₹1320"],
        correctAnswer: "₹1080",
        explanation: "Loss = 10% of ₹1200 = 0.1 × ₹1200 = ₹120. Selling price = ₹1200 - ₹120 = ₹1080. 📉",
        wrongAnswerExplanations: {
            "₹1100": "This represents a loss of approximately 8.3%, not 10%.",
            "₹1180": "This represents a loss of approximately 1.7%, not 10%.",
            "₹1320": "This represents a profit of 10%, not a loss of 10%."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: "cl7_ch8_t2_qe17",
        type: "mcq",
        question: "The simple interest on ₹2000 at 10% per annum after 3 years will be:",
        options: ["₹200", "₹400", "₹600", "₹800"],
        correctAnswer: "₹600",
        explanation: "Simple Interest = (Principal × Rate × Time)/100 = (2000 × 10 × 3)/100 = ₹600. 🏦",
        wrongAnswerExplanations: {
            "₹200": "This would be the interest for 1 year, not 3 years.",
            "₹400": "This would be the interest for 2 years, not 3 years.",
            "₹800": "This would be the interest for 4 years, not 3 years."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: "cl7_ch8_t2_qe18",
        type: "mcq",
        question: "Which of the following is equal to 0.35 as a percentage?",
        options: ["0.35%", "3.5%", "35%", "350%"],
        correctAnswer: "35%",
        explanation: "To convert a decimal to a percentage, multiply by 100. So, 0.35 × 100 = 35%. 📊",
        wrongAnswerExplanations: {
            "0.35%": "This is 0.0035 as a decimal, not 0.35. You need to multiply by 100.",
            "3.5%": "This is 0.035 as a decimal, not 0.35. Remember to multiply by 100.",
            "350%": "This is 3.5 as a decimal, not 0.35. You multiplied by 1000 instead of 100."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: "cl7_ch8_t2_qe19",
        type: "mcq",
        question: "In how many years will ₹4000 amount to ₹4800 at 5% simple interest per annum?",
        options: ["2 years", "4 years", "5 years", "8 years"],
        correctAnswer: "4 years",
        explanation: "Interest = ₹4800 - ₹4000 = ₹800. Using SI = (P×R×T)/100, 800 = (4000×5×T)/100. Solving: T = 4 years. ⏱️",
        wrongAnswerExplanations: {
            "2 years": "This would give an interest of ₹400, not ₹800.",
            "5 years": "This would give an interest of ₹1000, not ₹800.",
            "8 years": "This would give an interest of ₹1600, not ₹800."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: "cl7_ch8_t2_qe20",
        type: "mcq",
        question: "If a shopkeeper gives a discount of 20% on an item marked at ₹500, what is the selling price?",
        options: ["₹100", "₹400", "₹420", "₹480"],
        correctAnswer: "₹400",
        explanation: "Discount = 20% of ₹500 = 0.2 × ₹500 = ₹100. Selling price = ₹500 - ₹100 = ₹400. 🏷️",
        wrongAnswerExplanations: {
            "₹100": "This is the amount of discount, not the selling price.",
            "₹420": "This represents a discount of 16%, not 20%.",
            "₹480": "This represents a discount of 4%, not 20%."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    }
];
