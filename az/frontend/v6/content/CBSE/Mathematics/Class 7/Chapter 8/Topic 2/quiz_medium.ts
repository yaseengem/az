// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 7\Chapter8\Topic2\quiz_medium.ts
import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: "cl7_ch8_t2_qm1",
        type: "mcq",
        question: "A shopkeeper marks up an item by 25% above the cost price and then gives a discount of 10%. What is the overall profit percentage?",
        options: ["12.5%", "15%", "22.5%", "25%"],
        correctAnswer: "12.5%",
        explanation: "If CP = 100, MP = 125. After 10% discount, SP = 125 × 0.9 = 112.5. Profit = 12.5. So profit percentage = (12.5/100) × 100% = 12.5%. 📊",
        wrongAnswerExplanations: {
            "15%": "This is not the correct calculation of the effective profit percentage.",
            "22.5%": "This incorrectly assumes that percentages can be added (25% - 10% = 15%, not 22.5%).",
            "25%": "This ignores the discount and considers only the markup."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: "cl7_ch8_t2_qm2",
        type: "mcq",
        question: "If the selling price of an item is ₹920 and the profit is 15%, what was the cost price?",
        options: ["₹782", "₹800", "₹850", "₹1058"],
        correctAnswer: "₹800",
        explanation: "If SP = 920 and profit is 15%, then CP + 15% of CP = 920. So CP × 1.15 = 920, which gives CP = 920/1.15 = ₹800. 💵",
        wrongAnswerExplanations: {
            "₹782": "This is incorrect. Check your calculation: 782 × 1.15 = 899.3, not 920.",
            "₹850": "This is incorrect. 850 × 1.15 = 977.5, not 920.",
            "₹1058": "This assumes the selling price is at a 15% loss, not profit."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: "cl7_ch8_t2_qm3",
        type: "mcq",
        question: "A man buys an article for ₹900 and sells it for ₹720. Find the loss percentage.",
        options: ["10%", "15%", "20%", "25%"],
        correctAnswer: "20%",
        explanation: "Loss = 900 - 720 = 180. Loss percentage = (180/900) × 100% = 20%. 📉",
        wrongAnswerExplanations: {
            "10%": "This would mean a loss of ₹90, not ₹180.",
            "15%": "This would mean a loss of ₹135, not ₹180.",
            "25%": "This would mean a loss of ₹225, not ₹180."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: "cl7_ch8_t2_qm4",
        type: "mcq",
        question: "Rahul bought a bike for ₹60,000 and sold it for ₹69,000. What is his profit percentage?",
        options: ["10%", "15%", "20%", "25%"],
        correctAnswer: "15%",
        explanation: "Profit = 69,000 - 60,000 = 9,000. Profit percentage = (9,000/60,000) × 100% = 15%. 🏍️",
        wrongAnswerExplanations: {
            "10%": "This would mean a profit of ₹6,000, not ₹9,000.",
            "20%": "This would mean a profit of ₹12,000, not ₹9,000.",
            "25%": "This would mean a profit of ₹15,000, not ₹9,000."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: "cl7_ch8_t2_qm5",
        type: "mcq",
        question: "What will be the simple interest on a principal of ₹6,400 at 6.25% per annum for 2 years and 8 months?",
        options: ["₹800", "₹960", "₹1,066.67", "₹1,200"],
        correctAnswer: "₹1,066.67",
        explanation: "Time in years = 2 + 8/12 = 2.67. SI = (6400 × 6.25 × 2.67)/100 = ₹1,066.67. 🏦",
        wrongAnswerExplanations: {
            "₹800": "This would be the interest for 2 years, not 2 years and 8 months.",
            "₹960": "This is incorrect. Check your calculation of the time period in years.",
            "₹1,200": "This would be the interest for 3 years, not 2 years and 8 months."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: "cl7_ch8_t2_qm6",
        type: "mcq",
        question: "In what time will ₹2,500 amount to ₹3,000 at 8% simple interest per annum?",
        options: ["2 years", "2.5 years", "3 years", "4 years"],
        correctAnswer: "2.5 years",
        explanation: "Interest = 3000 - 2500 = 500. Using SI = (P×R×T)/100, 500 = (2500×8×T)/100. Solving: T = 2.5 years. ⏱️",
        wrongAnswerExplanations: {
            "2 years": "This would give an interest of ₹400, not ₹500.",
            "3 years": "This would give an interest of ₹600, not ₹500.",
            "4 years": "This would give an interest of ₹800, not ₹500."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: "cl7_ch8_t2_qm7",
        type: "mcq",
        question: "A sum of money doubles itself in 20 years at simple interest. What is the rate of interest per annum?",
        options: ["2.5%", "5%", "10%", "20%"],
        correctAnswer: "5%",
        explanation: "For the sum to double, interest = principal. So, (P×R×20)/100 = P, which gives R = 5%. 📈",
        wrongAnswerExplanations: {
            "2.5%": "At this rate, the money would double in 40 years, not 20 years.",
            "10%": "At this rate, the money would double in 10 years, not 20 years.",
            "20%": "At this rate, the money would double in 5 years, not 20 years."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: "cl7_ch8_t2_qm8",
        type: "mcq",
        question: "A shopkeeper marks an item 30% above the cost price and gives a discount of 10%. If the marked price is ₹650, what is the cost price?",
        options: ["₹450", "₹500", "₹550", "₹600"],
        correctAnswer: "₹500",
        explanation: "MP = 650, and MP = CP × 1.3. So CP = 650/1.3 = 500. 🏷️",
        wrongAnswerExplanations: {
            "₹450": "This would give a marked price of ₹585, not ₹650.",
            "₹550": "This would give a marked price of ₹715, not ₹650.",
            "₹600": "This would give a marked price of ₹780, not ₹650."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: "cl7_ch8_t2_qm9",
        type: "mcq",
        question: "Priya buys a laptop for ₹45,000 and sells it at a loss of 12%. How much does she sell it for?",
        options: ["₹39,600", "₹40,000", "₹42,000", "₹50,400"],
        correctAnswer: "₹39,600",
        explanation: "Loss = 12% of 45,000 = 0.12 × 45,000 = 5,400. SP = 45,000 - 5,400 = 39,600. 💻",
        wrongAnswerExplanations: {
            "₹40,000": "This represents a loss of 11.1%, not 12%.",
            "₹42,000": "This represents a loss of 6.7%, not 12%.",
            "₹50,400": "This represents a profit of 12%, not a loss of 12%."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: "cl7_ch8_t2_qm10",
        type: "mcq",
        question: "If the cost price of 15 books is equal to the selling price of 12 books, what is the profit percentage?",
        options: ["15%", "20%", "25%", "30%"],
        correctAnswer: "25%",
        explanation: "Let the CP of 1 book be ₹x. Then, 15x = 12 × SP. So SP = 15x/12 = 1.25x, giving a profit of 25%. 📚",
        wrongAnswerExplanations: {
            "15%": "This is incorrect. The profit percentage is (SP-CP)/CP × 100% = (1.25x-x)/x × 100% = 25%.",
            "20%": "This is incorrect. Check your calculation.",
            "30%": "This is incorrect. Check your calculation."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: "cl7_ch8_t2_qm11",
        type: "mcq",
        question: "A person borrows ₹12,000 at 10% simple interest. How much should he pay to clear the loan after 3 years and 4 months?",
        options: ["₹14,000", "₹15,000", "₹16,000", "₹17,000"],
        correctAnswer: "₹16,000",
        explanation: "Time = 3 + 4/12 = 3.33 years. SI = (12000 × 10 × 3.33)/100 = ₹4,000. Total = ₹12,000 + ₹4,000 = ₹16,000. 💰",
        wrongAnswerExplanations: {
            "₹14,000": "This underestimates the interest for the given time period.",
            "₹15,000": "This underestimates the interest for the given time period.",
            "₹17,000": "This overestimates the interest for the given time period."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: "cl7_ch8_t2_qm12",
        type: "mcq",
        question: "A shopkeeper buys an article for ₹x and sells it for ₹y. The profit percentage is given by:",
        options: ["(y-x)/y × 100%", "(y-x)/x × 100%", "x/y × 100%", "y/x × 100%"],
        correctAnswer: "(y-x)/x × 100%",
        explanation: "Profit = SP - CP = y - x. Profit percentage = (y-x)/x × 100%. This gives the profit as a percentage of the cost price. 📊",
        wrongAnswerExplanations: {
            "(y-x)/y × 100%": "This calculates profit as a percentage of selling price, not cost price.",
            "x/y × 100%": "This does not calculate profit percentage. It gives cost price as a percentage of selling price.",
            "y/x × 100%": "This does not calculate profit percentage. It gives selling price as a percentage of cost price."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: "cl7_ch8_t2_qm13",
        type: "mcq",
        question: "By selling an article for ₹840, a shopkeeper gains 20%. If he sells it for ₹735, what will be his profit or loss percentage?",
        options: ["5% profit", "5% loss", "10% profit", "15% profit"],
        correctAnswer: "5% profit",
        explanation: "If SP = 840 gives 20% profit, CP = 840/1.2 = 700. New SP = 735, so profit = 735 - 700 = 35. Profit % = (35/700) × 100% = 5%. 🛒",
        wrongAnswerExplanations: {
            "5% loss": "Since the new selling price (₹735) is still above the cost price (₹700), there is a profit, not a loss.",
            "10% profit": "This would require a selling price of ₹770, not ₹735.",
            "15% profit": "This would require a selling price of ₹805, not ₹735."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: "cl7_ch8_t2_qm14",
        type: "mcq",
        question: "If 75% of a number is 60, what is 40% of that number?",
        options: ["30", "32", "45", "48"],
        correctAnswer: "32",
        explanation: "If 75% of x is 60, then x = 60/(0.75) = 80. So 40% of x = 0.4 × 80 = 32. 🧮",
        wrongAnswerExplanations: {
            "30": "This is incorrect. Check your calculation of the original number.",
            "45": "This is incorrect. 45 is 56.25% of 80, not 40%.",
            "48": "This is incorrect. 48 is 60% of 80, not 40%."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: "cl7_ch8_t2_qm15",
        type: "mcq",
        question: "A sum of money placed at simple interest doubles in 15 years. In how many years will it triple?",
        options: ["22.5 years", "30 years", "45 years", "60 years"],
        correctAnswer: "30 years",
        explanation: "If money doubles in 15 years, rate = 100/15 = 6.67%. For tripling, interest = 200% of principal. Time = 200/6.67 = 30 years. ⏳",
        wrongAnswerExplanations: {
            "22.5 years": "This is incorrect. The interest would be 150% of the principal, not 200%.",
            "45 years": "This would give 300% interest, which means the money would become 4 times, not triple.",
            "60 years": "This would give 400% interest, which means the money would become 5 times, not triple."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: "cl7_ch8_t2_qm16",
        type: "mcq",
        question: "A shopkeeper marks his goods at 40% above the cost price and allows a discount of 25%. His profit percentage is:",
        options: ["5%", "10%", "15%", "20%"],
        correctAnswer: "5%",
        explanation: "If CP = 100, MP = 140. After 25% discount, SP = 140 × 0.75 = 105. Profit % = (5/100) × 100% = 5%. 🏷️",
        wrongAnswerExplanations: {
            "10%": "This is incorrect. Check your calculation of the selling price after discount.",
            "15%": "This is incorrect. The profit is not 15 out of 100.",
            "20%": "This is incorrect. You might have calculated the markup minus the discount (40% - 25%)."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: "cl7_ch8_t2_qm17",
        type: "mcq",
        question: "The simple interest on a certain sum of money for 3 years at 8% per annum is ₹1,920. What is the principal amount?",
        options: ["₹6,000", "₹8,000", "₹10,000", "₹12,000"],
        correctAnswer: "₹8,000",
        explanation: "Using SI = (P×R×T)/100, 1920 = (P×8×3)/100. Solving: P = 1920 × 100/(8 × 3) = ₹8,000. 💵",
        wrongAnswerExplanations: {
            "₹6,000": "This would give a simple interest of ₹1,440, not ₹1,920.",
            "₹10,000": "This would give a simple interest of ₹2,400, not ₹1,920.",
            "₹12,000": "This would give a simple interest of ₹2,880, not ₹1,920."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: "cl7_ch8_t2_qm18",
        type: "mcq",
        question: "A person sells two bicycles, each for ₹3,990. On one, he makes a profit of 5% and on the other, he suffers a loss of 5%. His overall result is:",
        options: ["No profit, no loss", "0.25% loss", "0.25% profit", "10% profit"],
        correctAnswer: "0.25% loss",
        explanation: "CP of first bicycle = 3990/1.05 = 3800. CP of second = 3990/0.95 = 4200. Total CP = 8000, total SP = 7980. Loss % = 0.25%. 🚲",
        wrongAnswerExplanations: {
            "No profit, no loss": "This is incorrect. The equal percentage of profit and loss doesn't mean zero overall profit/loss.",
            "0.25% profit": "This is incorrect. There is a loss, not a profit.",
            "10% profit": "This is incorrect. Check your calculation of the total cost price and selling price."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: "cl7_ch8_t2_qm19",
        type: "mcq",
        question: "If the simple interest on ₹2,000 for 219 days at 8% per annum is ₹96, then what is the basis for calculating a year?",
        options: ["360 days", "365 days", "366 days", "400 days"],
        correctAnswer: "365 days",
        explanation: "Using SI = (P×R×T)/100 where T is in years, 96 = (2000×8×219/N)/100. Solving for N (days in year): N = 365. 📅",
        wrongAnswerExplanations: {
            "360 days": "This would give a simple interest of ₹97.33, not ₹96.",
            "366 days": "This would give a simple interest of ₹95.74, not ₹96.",
            "400 days": "This would give a simple interest of ₹87.6, not ₹96."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: "cl7_ch8_t2_qm20",
        type: "mcq",
        question: "The cost price of 20 articles is the same as the selling price of 16 articles. The profit percentage is:",
        options: ["20%", "22%", "25%", "80%"],
        correctAnswer: "25%",
        explanation: "If CP of 20 articles = SP of 16 articles, then SP/CP = 20/16 = 1.25. So profit percentage = (1.25 - 1) × 100% = 25%. 📈",
        wrongAnswerExplanations: {
            "20%": "This is incorrect. Check your ratio calculation.",
            "22%": "This is incorrect. The correct ratio is 20/16 = 5/4 = 1.25.",
            "80%": "This is incorrect. You might have calculated the inverse ratio (SP/CP)."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    }
];
