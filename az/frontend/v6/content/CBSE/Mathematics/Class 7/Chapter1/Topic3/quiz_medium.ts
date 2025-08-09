import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl7_ch1_t3_qm1',
        type: "mcq",
        question: "A mountain climber starts at 500m above sea level, climbs 800m, descends 300m, then climbs another 400m. What is their final position?",
        options: ["1400m", "1200m", "1000m", "800m"],
        correctAnswer: "1400m",
        explanation: "Final position = 500m + 800m - 300m + 400m = 1400m above sea level. 🏔️",
        wrongAnswerExplanations: {
            "1200m": "This doesn't account for all the climbs and descents.",
            "1000m": "This is incorrect calculation.",
            "800m": "This is incorrect calculation."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch1_t3_qm2',
        type: "mcq",
        question: "A company's stock price changes as follows: +₹50, -₹30, +₹20, -₹40. If it started at ₹1000, what is the final price?",
        options: ["₹1000", "₹1100", "₹900", "₹1200"],
        correctAnswer: "₹1000",
        explanation: "Final price = ₹1000 + ₹50 - ₹30 + ₹20 - ₹40 = ₹1000. 📈",
        wrongAnswerExplanations: {
            "₹1100": "This is incorrect calculation.",
            "₹900": "This is incorrect calculation.",
            "₹1200": "This is incorrect calculation."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch1_t3_qm3',
        type: "mcq",
        question: "A submarine is at -200m, rises 150m, descends 100m, then rises 50m. What is its final position?",
        options: ["-100m", "-200m", "-50m", "-150m"],
        correctAnswer: "-100m",
        explanation: "Final position = -200m + 150m - 100m + 50m = -100m below sea level. 🚢",
        wrongAnswerExplanations: {
            "-200m": "This is incorrect calculation.",
            "-50m": "This is incorrect calculation.",
            "-150m": "This is incorrect calculation."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch1_t3_qm4',
        type: "mcq",
        question: "A football team's points change as follows: +3, -1, +2, -2, +1. If they started with 10 points, what is their final total?",
        options: ["13 points", "15 points", "11 points", "9 points"],
        correctAnswer: "13 points",
        explanation: "Final total = 10 + 3 - 1 + 2 - 2 + 1 = 13 points. ⚽",
        wrongAnswerExplanations: {
            "15 points": "This is incorrect calculation.",
            "11 points": "This is incorrect calculation.",
            "9 points": "This is incorrect calculation."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch1_t3_qm5',
        type: "mcq",
        question: "The temperature changes as follows: -5°C, +8°C, -3°C, +4°C. If it started at 20°C, what is the final temperature?",
        options: ["24°C", "20°C", "16°C", "28°C"],
        correctAnswer: "24°C",
        explanation: "Final temperature = 20°C - 5°C + 8°C - 3°C + 4°C = 24°C. 🌡️",
        wrongAnswerExplanations: {
            "20°C": "This is incorrect calculation.",
            "16°C": "This is incorrect calculation.",
            "28°C": "This is incorrect calculation."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch1_t3_qm6',
        type: "mcq",
        question: "A bank account balance changes as follows: +₹1000, -₹500, +₹200, -₹300. If it started at ₹-200, what is the final balance?",
        options: ["₹200", "₹0", "₹-200", "₹400"],
        correctAnswer: "₹200",
        explanation: "Final balance = -₹200 + ₹1000 - ₹500 + ₹200 - ₹300 = ₹200. 💰",
        wrongAnswerExplanations: {
            "₹0": "This is incorrect calculation.",
            "₹-200": "This is incorrect calculation.",
            "₹400": "This is incorrect calculation."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch1_t3_qm7',
        type: "mcq",
        question: "A scuba diver's depth changes as follows: -30m, +15m, -20m, +10m. If they started at the surface, what is their final position?",
        options: ["-25m", "-15m", "-35m", "-5m"],
        correctAnswer: "-25m",
        explanation: "Final position = 0m - 30m + 15m - 20m + 10m = -25m below sea level. 🤿",
        wrongAnswerExplanations: {
            "-15m": "This is incorrect calculation.",
            "-35m": "This is incorrect calculation.",
            "-5m": "This is incorrect calculation."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch1_t3_qm8',
        type: "mcq",
        question: "A shop's daily profit/loss (in ₹) for 5 days is: +500, -200, +300, -400, +100. What is the net profit/loss?",
        options: ["₹300 profit", "₹300 loss", "₹100 profit", "₹100 loss"],
        correctAnswer: "₹300 profit",
        explanation: "Net result = ₹500 - ₹200 + ₹300 - ₹400 + ₹100 = ₹300 profit. 💰",
        wrongAnswerExplanations: {
            "₹300 loss": "The result is a profit, not a loss.",
            "₹100 profit": "This is incorrect calculation.",
            "₹100 loss": "The result is a profit, not a loss."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch1_t3_qm9',
        type: "mcq",
        question: "A hiker's elevation changes as follows: +200m, -100m, +300m, -150m. If they started at 500m, what is their final position?",
        options: ["750m", "650m", "850m", "550m"],
        correctAnswer: "750m",
        explanation: "Final position = 500m + 200m - 100m + 300m - 150m = 750m above sea level. 🥾",
        wrongAnswerExplanations: {
            "650m": "This is incorrect calculation.",
            "850m": "This is incorrect calculation.",
            "550m": "This is incorrect calculation."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch1_t3_qm10',
        type: "mcq",
        question: "A company's monthly sales (in ₹1000s) for 4 months are: +50, -20, +30, -10. If they started with ₹200,000, what is their final amount?",
        options: ["₹280,000", "₹240,000", "₹260,000", "₹300,000"],
        correctAnswer: "₹280,000",
        explanation: "Final amount = ₹200,000 + ₹50,000 - ₹20,000 + ₹30,000 - ₹10,000 = ₹280,000. 💰",
        wrongAnswerExplanations: {
            "₹240,000": "This is incorrect calculation.",
            "₹260,000": "This is incorrect calculation.",
            "₹300,000": "This is incorrect calculation."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch1_t3_qm11',
        type: "mcq",
        question: "A football team's goal difference changes as follows: +2, -1, +3, -2, +1. If they started with +5, what is their final goal difference?",
        options: ["+8", "+6", "+4", "+10"],
        correctAnswer: "+8",
        explanation: "Final goal difference = +5 + 2 - 1 + 3 - 2 + 1 = +8. ⚽",
        wrongAnswerExplanations: {
            "+6": "This is incorrect calculation.",
            "+4": "This is incorrect calculation.",
            "+10": "This is incorrect calculation."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch1_t3_qm12',
        type: "mcq",
        question: "A stock's price changes as follows: +₹100, -₹50, +₹75, -₹25. If it started at ₹1000, what is the final price?",
        options: ["₹1100", "₹1000", "₹900", "₹1200"],
        correctAnswer: "₹1100",
        explanation: "Final price = ₹1000 + ₹100 - ₹50 + ₹75 - ₹25 = ₹1100. 📈",
        wrongAnswerExplanations: {
            "₹1000": "This is incorrect calculation.",
            "₹900": "This is incorrect calculation.",
            "₹1200": "This is incorrect calculation."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch1_t3_qm13',
        type: "mcq",
        question: "A submarine's depth changes as follows: -100m, +50m, -75m, +25m. If it started at -200m, what is its final position?",
        options: ["-300m", "-250m", "-200m", "-350m"],
        correctAnswer: "-300m",
        explanation: "Final position = -200m - 100m + 50m - 75m + 25m = -300m below sea level. 🚢",
        wrongAnswerExplanations: {
            "-250m": "This is incorrect calculation.",
            "-200m": "This is incorrect calculation.",
            "-350m": "This is incorrect calculation."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch1_t3_qm14',
        type: "mcq",
        question: "The temperature changes as follows: +5°C, -3°C, +2°C, -4°C. If it started at 15°C, what is the final temperature?",
        options: ["15°C", "20°C", "10°C", "25°C"],
        correctAnswer: "15°C",
        explanation: "Final temperature = 15°C + 5°C - 3°C + 2°C - 4°C = 15°C. 🌡️",
        wrongAnswerExplanations: {
            "20°C": "This is incorrect calculation.",
            "10°C": "This is incorrect calculation.",
            "25°C": "This is incorrect calculation."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch1_t3_qm15',
        type: "mcq",
        question: "A bank account balance changes as follows: -₹200, +₹500, -₹300, +₹400. If it started at ₹1000, what is the final balance?",
        options: ["₹1400", "₹1200", "₹1000", "₹1600"],
        correctAnswer: "₹1400",
        explanation: "Final balance = ₹1000 - ₹200 + ₹500 - ₹300 + ₹400 = ₹1400. 💰",
        wrongAnswerExplanations: {
            "₹1200": "This is incorrect calculation.",
            "₹1000": "This is incorrect calculation.",
            "₹1600": "This is incorrect calculation."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch1_t3_qm16',
        type: "mcq",
        question: "A scuba diver's depth changes as follows: -20m, +10m, -15m, +5m. If they started at -30m, what is their final position?",
        options: ["-50m", "-40m", "-30m", "-60m"],
        correctAnswer: "-50m",
        explanation: "Final position = -30m - 20m + 10m - 15m + 5m = -50m below sea level. 🤿",
        wrongAnswerExplanations: {
            "-40m": "This is incorrect calculation.",
            "-30m": "This is incorrect calculation.",
            "-60m": "This is incorrect calculation."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch1_t3_qm17',
        type: "mcq",
        question: "A shop's daily profit/loss (in ₹) for 4 days is: +200, -100, +150, -50. What is the net profit/loss?",
        options: ["₹200 profit", "₹200 loss", "₹100 profit", "₹100 loss"],
        correctAnswer: "₹200 profit",
        explanation: "Net result = ₹200 - ₹100 + ₹150 - ₹50 = ₹200 profit. 💰",
        wrongAnswerExplanations: {
            "₹200 loss": "The result is a profit, not a loss.",
            "₹100 profit": "This is incorrect calculation.",
            "₹100 loss": "The result is a profit, not a loss."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch1_t3_qm18',
        type: "mcq",
        question: "A hiker's elevation changes as follows: +150m, -50m, +200m, -100m. If they started at 300m, what is their final position?",
        options: ["500m", "400m", "600m", "300m"],
        correctAnswer: "500m",
        explanation: "Final position = 300m + 150m - 50m + 200m - 100m = 500m above sea level. 🥾",
        wrongAnswerExplanations: {
            "400m": "This is incorrect calculation.",
            "600m": "This is incorrect calculation.",
            "300m": "This is incorrect calculation."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch1_t3_qm19',
        type: "mcq",
        question: "A company's monthly sales (in ₹1000s) for 3 months are: +30, -10, +20. If they started with ₹150,000, what is their final amount?",
        options: ["₹190,000", "₹170,000", "₹210,000", "₹230,000"],
        correctAnswer: "₹190,000",
        explanation: "Final amount = ₹150,000 + ₹30,000 - ₹10,000 + ₹20,000 = ₹190,000. 💰",
        wrongAnswerExplanations: {
            "₹170,000": "This is incorrect calculation.",
            "₹210,000": "This is incorrect calculation.",
            "₹230,000": "This is incorrect calculation."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch1_t3_qm20',
        type: "mcq",
        question: "A football team's goal difference changes as follows: +1, -2, +3, -1. If they started with +4, what is their final goal difference?",
        options: ["+5", "+3", "+7", "+1"],
        correctAnswer: "+5",
        explanation: "Final goal difference = +4 + 1 - 2 + 3 - 1 = +5. ⚽",
        wrongAnswerExplanations: {
            "+3": "This is incorrect calculation.",
            "+7": "This is incorrect calculation.",
            "+1": "This is incorrect calculation."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    }
]; 