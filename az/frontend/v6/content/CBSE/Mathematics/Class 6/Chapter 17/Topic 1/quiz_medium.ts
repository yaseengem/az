import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl6_ch17_t1_qm1',
        type: "mcq",
        question: "If you save 15% of your ₹2000 monthly pocket money, how much do you save in 3 months?",
        options: ["₹600", "₹900", "₹1200", "₹1500"],
        correctAnswer: "₹900",
        explanation: "15% of ₹2000 = ₹300 per month. ₹300 × 3 months = ₹900. This involves percentage and multiplication. 💰",
        wrongAnswerExplanations: {
            "₹600": "This would be saving for 2 months, not 3.",
            "₹1200": "This would be saving 20% per month for 3 months.",
            "₹1500": "This would be saving 25% per month for 3 months."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch17_t1_qm2',
        type: "mcq",
        question: "A shop offers 3 notebooks for ₹75 or 5 notebooks for ₹120. Which is the better deal per notebook?",
        options: ["3 notebooks for ₹75", "5 notebooks for ₹120", "Both are equal", "Cannot be determined"],
        correctAnswer: "5 notebooks for ₹120",
        explanation: "₹75/3 = ₹25 per notebook vs ₹120/5 = ₹24 per notebook. The second option is cheaper per notebook. 📚",
        wrongAnswerExplanations: {
            "3 notebooks for ₹75": "This costs ₹25 per notebook, which is more expensive.",
            "Both are equal": "The per-notebook prices are different.",
            "Cannot be determined": "The values can be determined and compared."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch17_t1_qm3',
        type: "mcq",
        question: "If you spend 40% of ₹1500 on books and 25% on stationery, how much money is left?",
        options: ["₹425", "₹525", "₹625", "₹725"],
        correctAnswer: "₹525",
        explanation: "40% of ₹1500 = ₹600 on books, 25% = ₹375 on stationery. ₹1500 - ₹600 - ₹375 = ₹525 left. 📝",
        wrongAnswerExplanations: {
            "₹425": "This would be the amount spent on stationery only.",
            "₹625": "This would be the amount spent on books only.",
            "₹725": "This is more than what would be left."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch17_t1_qm4',
        type: "mcq",
        question: "A toy costs ₹450. If you save ₹30 every week, how many weeks will it take to buy the toy?",
        options: ["12 weeks", "15 weeks", "18 weeks", "20 weeks"],
        correctAnswer: "15 weeks",
        explanation: "₹450 ÷ ₹30 per week = 15 weeks. This is a division problem in savings planning. 🧸",
        wrongAnswerExplanations: {
            "12 weeks": "This would save only ₹360, not enough for the toy.",
            "18 weeks": "This would save ₹540, more than needed.",
            "20 weeks": "This would save ₹600, more than needed."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch17_t1_qm5',
        type: "mcq",
        question: "If you have ₹800 and spend 35% on snacks, 25% on books, and save the rest, how much should you save?",
        options: ["₹280", "₹320", "₹360", "₹400"],
        correctAnswer: "₹320",
        explanation: "35% + 25% = 60% spent, so 40% saved. 40% of ₹800 = ₹320. This involves multiple percentages. 💰",
        wrongAnswerExplanations: {
            "₹280": "This would be 35% of ₹800, the amount spent on snacks.",
            "₹360": "This would be 45% of ₹800, more than what should be saved.",
            "₹400": "This would be 50% of ₹800, more than what should be saved."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch17_t1_qm6',
        type: "mcq",
        question: "Which is better value: 2 kg apples for ₹180 or 3 kg apples for ₹270?",
        options: ["2 kg for ₹180", "3 kg for ₹270", "Both are equal", "Cannot be determined"],
        correctAnswer: "Both are equal",
        explanation: "Both options cost ₹90 per kg (₹180/2 = ₹90, ₹270/3 = ₹90). This is a unit price comparison. 🍎",
        wrongAnswerExplanations: {
            "2 kg for ₹180": "This is the same value as the other option.",
            "3 kg for ₹270": "This is the same value as the other option.",
            "Cannot be determined": "The values can be determined and are equal."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch17_t1_qm7',
        type: "mcq",
        question: "If you save 20% of ₹1200 every month, how much will you save in 6 months?",
        options: ["₹1200", "₹1440", "₹1600", "₹1800"],
        correctAnswer: "₹1440",
        explanation: "20% of ₹1200 = ₹240 per month. ₹240 × 6 months = ₹1440. This involves percentage and multiplication. 💵",
        wrongAnswerExplanations: {
            "₹1200": "This would be saving for 5 months.",
            "₹1600": "This would be saving more than 20% per month.",
            "₹1800": "This would be saving 25% per month."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch17_t1_qm8',
        type: "mcq",
        question: "A bicycle costs ₹3000. If you save ₹200 every week, how many weeks will it take to buy the bicycle?",
        options: ["12 weeks", "15 weeks", "18 weeks", "20 weeks"],
        correctAnswer: "15 weeks",
        explanation: "₹3000 ÷ ₹200 per week = 15 weeks. This is a division problem in savings planning. 🚲",
        wrongAnswerExplanations: {
            "12 weeks": "This would save only ₹2400, not enough for the bicycle.",
            "18 weeks": "This would save ₹3600, more than needed.",
            "20 weeks": "This would save ₹4000, more than needed."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch17_t1_qm9',
        type: "mcq",
        question: "If you have ₹2500 and spend 30% on clothes, 20% on books, and save the rest, how much should you save?",
        options: ["₹1000", "₹1250", "₹1500", "₹1750"],
        correctAnswer: "₹1250",
        explanation: "30% + 20% = 50% spent, so 50% saved. 50% of ₹2500 = ₹1250. This involves multiple percentages. 👕",
        wrongAnswerExplanations: {
            "₹1000": "This would be 40% of ₹2500, less than what should be saved.",
            "₹1500": "This would be 60% of ₹2500, more than what should be saved.",
            "₹1750": "This would be 70% of ₹2500, more than what should be saved."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch17_t1_qm10',
        type: "mcq",
        question: "Which is better value: 4 kg rice for ₹200 or 6 kg rice for ₹300?",
        options: ["4 kg for ₹200", "6 kg for ₹300", "Both are equal", "Cannot be determined"],
        correctAnswer: "Both are equal",
        explanation: "Both options cost ₹50 per kg (₹200/4 = ₹50, ₹300/6 = ₹50). This is a unit price comparison. 🍚",
        wrongAnswerExplanations: {
            "4 kg for ₹200": "This is the same value as the other option.",
            "6 kg for ₹300": "This is the same value as the other option.",
            "Cannot be determined": "The values can be determined and are equal."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch17_t1_qm11',
        type: "mcq",
        question: "If you save 25% of ₹1600 every month, how much will you save in 4 months?",
        options: ["₹1200", "₹1400", "₹1600", "₹1800"],
        correctAnswer: "₹1600",
        explanation: "25% of ₹1600 = ₹400 per month. ₹400 × 4 months = ₹1600. This involves percentage and multiplication. 💰",
        wrongAnswerExplanations: {
            "₹1200": "This would be saving for 3 months.",
            "₹1400": "This would be saving less than 25% per month.",
            "₹1800": "This would be saving more than 25% per month."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch17_t1_qm12',
        type: "mcq",
        question: "A video game costs ₹1800. If you save ₹150 every week, how many weeks will it take to buy the game?",
        options: ["10 weeks", "12 weeks", "14 weeks", "16 weeks"],
        correctAnswer: "12 weeks",
        explanation: "₹1800 ÷ ₹150 per week = 12 weeks. This is a division problem in savings planning. 🎮",
        wrongAnswerExplanations: {
            "10 weeks": "This would save only ₹1500, not enough for the game.",
            "14 weeks": "This would save ₹2100, more than needed.",
            "16 weeks": "This would save ₹2400, more than needed."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch17_t1_qm13',
        type: "mcq",
        question: "If you have ₹3000 and spend 35% on clothes, 25% on books, and save the rest, how much should you save?",
        options: ["₹1000", "₹1200", "₹1400", "₹1600"],
        correctAnswer: "₹1200",
        explanation: "35% + 25% = 60% spent, so 40% saved. 40% of ₹3000 = ₹1200. This involves multiple percentages. 📚",
        wrongAnswerExplanations: {
            "₹1000": "This would be 33.33% of ₹3000, less than what should be saved.",
            "₹1400": "This would be 46.67% of ₹3000, more than what should be saved.",
            "₹1600": "This would be 53.33% of ₹3000, more than what should be saved."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch17_t1_qm14',
        type: "mcq",
        question: "Which is better value: 3 kg sugar for ₹150 or 5 kg sugar for ₹250?",
        options: ["3 kg for ₹150", "5 kg for ₹250", "Both are equal", "Cannot be determined"],
        correctAnswer: "Both are equal",
        explanation: "Both options cost ₹50 per kg (₹150/3 = ₹50, ₹250/5 = ₹50). This is a unit price comparison. 🍬",
        wrongAnswerExplanations: {
            "3 kg for ₹150": "This is the same value as the other option.",
            "5 kg for ₹250": "This is the same value as the other option.",
            "Cannot be determined": "The values can be determined and are equal."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch17_t1_qm15',
        type: "mcq",
        question: "If you save 30% of ₹2000 every month, how much will you save in 5 months?",
        options: ["₹2500", "₹3000", "₹3500", "₹4000"],
        correctAnswer: "₹3000",
        explanation: "30% of ₹2000 = ₹600 per month. ₹600 × 5 months = ₹3000. This involves percentage and multiplication. 💵",
        wrongAnswerExplanations: {
            "₹2500": "This would be saving for about 4.17 months.",
            "₹3500": "This would be saving more than 30% per month.",
            "₹4000": "This would be saving 40% per month."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch17_t1_qm16',
        type: "mcq",
        question: "A laptop costs ₹24000. If you save ₹2000 every month, how many months will it take to buy the laptop?",
        options: ["10 months", "12 months", "14 months", "16 months"],
        correctAnswer: "12 months",
        explanation: "₹24000 ÷ ₹2000 per month = 12 months. This is a division problem in savings planning. 💻",
        wrongAnswerExplanations: {
            "10 months": "This would save only ₹20000, not enough for the laptop.",
            "14 months": "This would save ₹28000, more than needed.",
            "16 months": "This would save ₹32000, more than needed."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch17_t1_qm17',
        type: "mcq",
        question: "If you have ₹4000 and spend 40% on clothes, 30% on books, and save the rest, how much should you save?",
        options: ["₹1000", "₹1200", "₹1400", "₹1600"],
        correctAnswer: "₹1200",
        explanation: "40% + 30% = 70% spent, so 30% saved. 30% of ₹4000 = ₹1200. This involves multiple percentages. 👕",
        wrongAnswerExplanations: {
            "₹1000": "This would be 25% of ₹4000, less than what should be saved.",
            "₹1400": "This would be 35% of ₹4000, more than what should be saved.",
            "₹1600": "This would be 40% of ₹4000, more than what should be saved."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch17_t1_qm18',
        type: "mcq",
        question: "Which is better value: 2 kg flour for ₹100 or 5 kg flour for ₹250?",
        options: ["2 kg for ₹100", "5 kg for ₹250", "Both are equal", "Cannot be determined"],
        correctAnswer: "Both are equal",
        explanation: "Both options cost ₹50 per kg (₹100/2 = ₹50, ₹250/5 = ₹50). This is a unit price comparison. 🍞",
        wrongAnswerExplanations: {
            "2 kg for ₹100": "This is the same value as the other option.",
            "5 kg for ₹250": "This is the same value as the other option.",
            "Cannot be determined": "The values can be determined and are equal."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch17_t1_qm19',
        type: "mcq",
        question: "If you save 35% of ₹1800 every month, how much will you save in 4 months?",
        options: ["₹2200", "₹2400", "₹2600", "₹2800"],
        correctAnswer: "₹2520",
        explanation: "35% of ₹1800 = ₹630 per month. ₹630 × 4 months = ₹2520. This involves percentage and multiplication. 💰",
        wrongAnswerExplanations: {
            "₹2200": "This would be saving less than 35% per month.",
            "₹2600": "This would be saving more than 35% per month.",
            "₹2800": "This would be saving about 39% per month."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch17_t1_qm20',
        type: "mcq",
        question: "A mobile phone costs ₹15000. If you save ₹1250 every month, how many months will it take to buy the phone?",
        options: ["10 months", "12 months", "14 months", "16 months"],
        correctAnswer: "12 months",
        explanation: "₹15000 ÷ ₹1250 per month = 12 months. This is a division problem in savings planning. 📱",
        wrongAnswerExplanations: {
            "10 months": "This would save only ₹12500, not enough for the phone.",
            "14 months": "This would save ₹17500, more than needed.",
            "16 months": "This would save ₹20000, more than needed."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    }
]; 