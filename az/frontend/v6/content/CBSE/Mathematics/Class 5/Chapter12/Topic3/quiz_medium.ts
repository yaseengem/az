import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl5_ch12_t3_qm1',
        type: "mcq",
        question: "In a class of 40 students, 15 like football, 10 like cricket, and the rest like basketball. What percentage like basketball?",
        options: ["37.5%", "40%", "42.5%", "45%"],
        correctAnswer: "37.5%",
        explanation: "40 - 15 - 10 = 15 students like basketball. (15/40) × 100 = 37.5%. 🏀",
        wrongAnswerExplanations: {
            "40%": "This would be 16 students, not 15.",
            "42.5%": "This would be 17 students, not 15.",
            "45%": "This would be 18 students, not 15."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch12_t3_qm2',
        type: "mcq",
        question: "If a plant grew 2 cm on Monday, 3 cm on Tuesday, and 1 cm on Wednesday, what was its average growth per day?",
        options: ["2 cm", "2.5 cm", "3 cm", "3.5 cm"],
        correctAnswer: "2 cm",
        explanation: "(2 + 3 + 1) ÷ 3 = 2 cm average growth per day. 🌱",
        wrongAnswerExplanations: {
            "2.5 cm": "This would be the total divided by 2.4.",
            "3 cm": "This would be the total divided by 2.",
            "3.5 cm": "This would be the total divided by 1.7."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch12_t3_qm3',
        type: "mcq",
        question: "In a survey of 200 people, 60% prefer tea, 30% prefer coffee, and the rest prefer milk. How many people prefer milk?",
        options: ["20", "25", "30", "35"],
        correctAnswer: "20",
        explanation: "100% - 60% - 30% = 10% prefer milk. 10% of 200 = 20 people. 🥛",
        wrongAnswerExplanations: {
            "25": "This would be 12.5% of 200.",
            "30": "This would be 15% of 200.",
            "35": "This would be 17.5% of 200."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch12_t3_qm4',
        type: "mcq",
        question: "If the temperature was 20°C at 8 AM, 25°C at 12 PM, and 22°C at 4 PM, what was the range of temperatures?",
        options: ["5°C", "6°C", "7°C", "8°C"],
        correctAnswer: "5°C",
        explanation: "Highest (25°C) - Lowest (20°C) = 5°C range. 🌡️",
        wrongAnswerExplanations: {
            "6°C": "This would be if the highest was 26°C.",
            "7°C": "This would be if the highest was 27°C.",
            "8°C": "This would be if the highest was 28°C."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch12_t3_qm5',
        type: "mcq",
        question: "In a class of 50 students, the ratio of boys to girls is 3:2. How many girls are there?",
        options: ["20", "25", "30", "35"],
        correctAnswer: "20",
        explanation: "3 + 2 = 5 parts. 50 ÷ 5 = 10 students per part. 2 parts = 20 girls. 👧",
        wrongAnswerExplanations: {
            "25": "This would be if the ratio was 1:1.",
            "30": "This would be if the ratio was 2:3.",
            "35": "This would be if the ratio was 3:4."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch12_t3_qm6',
        type: "mcq",
        question: "If a shop sold 40 apples on Monday, 50 on Tuesday, and 60 on Wednesday, what was the average daily sales?",
        options: ["50", "55", "60", "65"],
        correctAnswer: "50",
        explanation: "(40 + 50 + 60) ÷ 3 = 50 apples average per day. 🍎",
        wrongAnswerExplanations: {
            "55": "This would be if Wednesday's sales were 75.",
            "60": "This would be if Wednesday's sales were 90.",
            "65": "This would be if Wednesday's sales were 105."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch12_t3_qm7',
        type: "mcq",
        question: "In a test, 25% of students scored 80%, 50% scored 60%, and the rest scored 40%. What percentage scored 40%?",
        options: ["25%", "30%", "35%", "40%"],
        correctAnswer: "25%",
        explanation: "100% - 25% - 50% = 25% scored 40%. 📝",
        wrongAnswerExplanations: {
            "30%": "This would leave only 20% for other scores.",
            "35%": "This would leave only 15% for other scores.",
            "40%": "This would leave only 10% for other scores."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch12_t3_qm8',
        type: "mcq",
        question: "If a plant's height was 10 cm on Monday and 16 cm on Friday, what was the total growth?",
        options: ["6 cm", "7 cm", "8 cm", "9 cm"],
        correctAnswer: "6 cm",
        explanation: "16 cm - 10 cm = 6 cm total growth. 🌱",
        wrongAnswerExplanations: {
            "7 cm": "This would be if Friday's height was 17 cm.",
            "8 cm": "This would be if Friday's height was 18 cm.",
            "9 cm": "This would be if Friday's height was 19 cm."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch12_t3_qm9',
        type: "mcq",
        question: "In a survey of 120 people, 45% prefer summer, 35% prefer winter, and the rest prefer monsoon. How many prefer monsoon?",
        options: ["24", "28", "32", "36"],
        correctAnswer: "24",
        explanation: "100% - 45% - 35% = 20% prefer monsoon. 20% of 120 = 24 people. 🌧️",
        wrongAnswerExplanations: {
            "28": "This would be 23.33% of 120.",
            "32": "This would be 26.67% of 120.",
            "36": "This would be 30% of 120."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch12_t3_qm10',
        type: "mcq",
        question: "If the temperature was 15°C at 6 AM and increased by 2°C every hour until 12 PM, what was the temperature at 12 PM?",
        options: ["27°C", "28°C", "29°C", "30°C"],
        correctAnswer: "27°C",
        explanation: "6 hours × 2°C = 12°C increase. 15°C + 12°C = 27°C. 🌡️",
        wrongAnswerExplanations: {
            "28°C": "This would be if the increase was 2.17°C per hour.",
            "29°C": "This would be if the increase was 2.33°C per hour.",
            "30°C": "This would be if the increase was 2.5°C per hour."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch12_t3_qm11',
        type: "mcq",
        question: "In a class of 60 students, the ratio of boys to girls is 4:5. How many boys are there?",
        options: ["24", "26", "28", "30"],
        correctAnswer: "24",
        explanation: "4 + 5 = 9 parts. 60 ÷ 9 = 6.67 students per part. 4 parts ≈ 24 boys. 👦",
        wrongAnswerExplanations: {
            "26": "This would be if the ratio was 13:17.",
            "28": "This would be if the ratio was 7:8.",
            "30": "This would be if the ratio was 1:1."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch12_t3_qm12',
        type: "mcq",
        question: "If a shop's daily sales were ₹5000, ₹6000, and ₹7000 for three days, what was the average daily sales?",
        options: ["₹6000", "₹6500", "₹7000", "₹7500"],
        correctAnswer: "₹6000",
        explanation: "(5000 + 6000 + 7000) ÷ 3 = ₹6000 average per day. 💰",
        wrongAnswerExplanations: {
            "₹6500": "This would be if the third day was ₹8500.",
            "₹7000": "This would be if the third day was ₹10000.",
            "₹7500": "This would be if the third day was ₹11500."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch12_t3_qm13',
        type: "mcq",
        question: "In a test, 30% of students scored 90%, 40% scored 70%, and the rest scored 50%. What percentage scored 50%?",
        options: ["30%", "35%", "40%", "45%"],
        correctAnswer: "30%",
        explanation: "100% - 30% - 40% = 30% scored 50%. 📝",
        wrongAnswerExplanations: {
            "35%": "This would leave only 25% for other scores.",
            "40%": "This would leave only 20% for other scores.",
            "45%": "This would leave only 15% for other scores."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch12_t3_qm14',
        type: "mcq",
        question: "If a plant's height was 8 cm on Monday and 14 cm on Friday, what was the average daily growth?",
        options: ["1.2 cm", "1.4 cm", "1.6 cm", "1.8 cm"],
        correctAnswer: "1.2 cm",
        explanation: "Total growth = 14 cm - 8 cm = 6 cm. 6 cm ÷ 5 days = 1.2 cm per day. 🌱",
        wrongAnswerExplanations: {
            "1.4 cm": "This would be if the total growth was 7 cm.",
            "1.6 cm": "This would be if the total growth was 8 cm.",
            "1.8 cm": "This would be if the total growth was 9 cm."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch12_t3_qm15',
        type: "mcq",
        question: "In a survey of 150 people, 40% prefer pizza, 35% prefer burgers, and the rest prefer sandwiches. How many prefer sandwiches?",
        options: ["38", "40", "42", "45"],
        correctAnswer: "38",
        explanation: "100% - 40% - 35% = 25% prefer sandwiches. 25% of 150 = 37.5 ≈ 38 people. 🥪",
        wrongAnswerExplanations: {
            "40": "This would be 26.67% of 150.",
            "42": "This would be 28% of 150.",
            "45": "This would be 30% of 150."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch12_t3_qm16',
        type: "mcq",
        question: "If the temperature was 18°C at 6 AM and decreased by 1°C every hour until 12 PM, what was the temperature at 12 PM?",
        options: ["12°C", "13°C", "14°C", "15°C"],
        correctAnswer: "12°C",
        explanation: "6 hours × 1°C = 6°C decrease. 18°C - 6°C = 12°C. 🌡️",
        wrongAnswerExplanations: {
            "13°C": "This would be if the decrease was 0.83°C per hour.",
            "14°C": "This would be if the decrease was 0.67°C per hour.",
            "15°C": "This would be if the decrease was 0.5°C per hour."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch12_t3_qm17',
        type: "mcq",
        question: "In a class of 80 students, the ratio of boys to girls is 5:3. How many girls are there?",
        options: ["30", "32", "34", "36"],
        correctAnswer: "30",
        explanation: "5 + 3 = 8 parts. 80 ÷ 8 = 10 students per part. 3 parts = 30 girls. 👧",
        wrongAnswerExplanations: {
            "32": "This would be if the ratio was 3:2.",
            "34": "This would be if the ratio was 23:17.",
            "36": "This would be if the ratio was 11:9."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch12_t3_qm18',
        type: "mcq",
        question: "If a shop's daily sales were ₹8000, ₹9000, and ₹10000 for three days, what was the average daily sales?",
        options: ["₹9000", "₹9500", "₹10000", "₹10500"],
        correctAnswer: "₹9000",
        explanation: "(8000 + 9000 + 10000) ÷ 3 = ₹9000 average per day. 💰",
        wrongAnswerExplanations: {
            "₹9500": "This would be if the third day was ₹11500.",
            "₹10000": "This would be if the third day was ₹13000.",
            "₹10500": "This would be if the third day was ₹14500."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch12_t3_qm19',
        type: "mcq",
        question: "In a test, 20% of students scored 95%, 45% scored 75%, and the rest scored 55%. What percentage scored 55%?",
        options: ["35%", "40%", "45%", "50%"],
        correctAnswer: "35%",
        explanation: "100% - 20% - 45% = 35% scored 55%. 📝",
        wrongAnswerExplanations: {
            "40%": "This would leave only 15% for other scores.",
            "45%": "This would leave only 10% for other scores.",
            "50%": "This would leave only 5% for other scores."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch12_t3_qm20',
        type: "mcq",
        question: "If a plant's height was 12 cm on Monday and 18 cm on Friday, what was the average daily growth?",
        options: ["1.2 cm", "1.4 cm", "1.6 cm", "1.8 cm"],
        correctAnswer: "1.2 cm",
        explanation: "Total growth = 18 cm - 12 cm = 6 cm. 6 cm ÷ 5 days = 1.2 cm per day. 🌱",
        wrongAnswerExplanations: {
            "1.4 cm": "This would be if the total growth was 7 cm.",
            "1.6 cm": "This would be if the total growth was 8 cm.",
            "1.8 cm": "This would be if the total growth was 9 cm."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    }
]; 