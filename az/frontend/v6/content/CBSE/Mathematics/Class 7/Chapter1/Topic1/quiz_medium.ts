import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl7_ch1_t1_qm1',
        type: "mcq",
        question: "What is the result of (-8) + 5 - (-3)?",
        options: ["0", "-6", "6", "-10"],
        correctAnswer: "0",
        explanation: "-8 + 5 - (-3) = -8 + 5 + 3 = 0. Remember to change the sign when subtracting a negative. 🔢",
        wrongAnswerExplanations: {
            "-6": "This would be the result of -8 + 5 + (-3), not -8 + 5 - (-3).",
            "6": "This would be the result of 8 + 5 - 3, not -8 + 5 - (-3).",
            "-10": "This would be the result of -8 - 5 - 3, not -8 + 5 - (-3)."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch1_t1_qm2',
        type: "mcq",
        question: "If a = -4 and b = 3, what is the value of a² + b²?",
        options: ["25", "-25", "7", "-7"],
        correctAnswer: "25",
        explanation: "a² + b² = (-4)² + 3² = 16 + 9 = 25. Remember that squaring a negative number gives a positive result. 🔢",
        wrongAnswerExplanations: {
            "-25": "This would be the result of -4² + 3², not (-4)² + 3².",
            "7": "This would be the result of -4 + 3, not (-4)² + 3².",
            "-7": "This would be the result of -4 - 3, not (-4)² + 3²."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch1_t1_qm3',
        type: "mcq",
        question: "What is the value of (-12) × 3 ÷ (-4)?",
        options: ["-9", "9", "-16", "16"],
        correctAnswer: "9",
        explanation: "(-12) × 3 ÷ (-4) = -36 ÷ (-4) = 9. Remember the rules for multiplying and dividing negative numbers. 🔢",
        wrongAnswerExplanations: {
            "-9": "This would be the result of (-12) × 3 ÷ 4, not (-12) × 3 ÷ (-4).",
            "-16": "This would be the result of (-12) × 4 ÷ 3, not (-12) × 3 ÷ (-4).",
            "16": "This would be the result of 12 × 4 ÷ 3, not (-12) × 3 ÷ (-4)."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch1_t1_qm4',
        type: "mcq",
        question: "Which expression is equivalent to -3 × (4 - 7)?",
        options: ["-3 × 4 - 7", "-3 × 4 - (-3) × 7", "-3 × 4 + 7", "-3 × 4 + (-3) × 7"],
        correctAnswer: "-3 × 4 - (-3) × 7",
        explanation: "Using the distributive property: -3 × (4 - 7) = -3 × 4 - (-3) × 7. Remember to distribute the negative sign. 🔢",
        wrongAnswerExplanations: {
            "-3 × 4 - 7": "This would be -3 × 4 - 7, not -3 × (4 - 7).",
            "-3 × 4 + 7": "This would be -3 × 4 + 7, not -3 × (4 - 7).",
            "-3 × 4 + (-3) × 7": "This would be -3 × (4 + 7), not -3 × (4 - 7)."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch1_t1_qm5',
        type: "mcq",
        question: "If the temperature changes from -5°C to 8°C and then drops by 12°C, what is the final temperature?",
        options: ["-9°C", "9°C", "-15°C", "15°C"],
        correctAnswer: "-9°C",
        explanation: "-5 + 8 - 12 = -9°C. Calculate the changes step by step. 🌡️",
        wrongAnswerExplanations: {
            "9°C": "This would be the result of 5 + 8 - 12, not -5 + 8 - 12.",
            "-15°C": "This would be the result of -5 - 8 - 12, not -5 + 8 - 12.",
            "15°C": "This would be the result of 5 + 8 + 12, not -5 + 8 - 12."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch1_t1_qm6',
        type: "mcq",
        question: "What is the value of (-2)³ + (-3)²?",
        options: ["-17", "17", "-1", "1"],
        correctAnswer: "-17",
        explanation: "(-2)³ + (-3)² = -8 + 9 = 1. Remember the rules for exponents with negative numbers. 🔢",
        wrongAnswerExplanations: {
            "17": "This would be the result of 2³ + 3², not (-2)³ + (-3)².",
            "-1": "This would be the result of -2 + 3, not (-2)³ + (-3)².",
            "1": "This would be the result of -2 + 3, not (-2)³ + (-3)²."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch1_t1_qm7',
        type: "mcq",
        question: "Which of these expressions is equal to -15?",
        options: ["(-3) × 5", "3 × (-5)", "(-3) × (-5)", "Both A and B"],
        correctAnswer: "Both A and B",
        explanation: "Both (-3) × 5 and 3 × (-5) equal -15. The product of a positive and negative number is negative. 🔢",
        wrongAnswerExplanations: {
            "(-3) × 5": "This is correct but not the only correct answer.",
            "3 × (-5)": "This is correct but not the only correct answer.",
            "(-3) × (-5)": "This equals 15, not -15."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch1_t1_qm8',
        type: "mcq",
        question: "What is the value of (-8) ÷ 2 × (-3)?",
        options: ["-12", "12", "-48", "48"],
        correctAnswer: "12",
        explanation: "(-8) ÷ 2 × (-3) = -4 × (-3) = 12. Remember to perform operations from left to right. 🔢",
        wrongAnswerExplanations: {
            "-12": "This would be the result of (-8) ÷ (2 × (-3)), not (-8) ÷ 2 × (-3).",
            "-48": "This would be the result of -8 × 2 × 3, not (-8) ÷ 2 × (-3).",
            "48": "This would be the result of 8 × 2 × 3, not (-8) ÷ 2 × (-3)."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch1_t1_qm9',
        type: "mcq",
        question: "If a = -5 and b = 2, what is the value of (a + b)²?",
        options: ["-9", "9", "-49", "49"],
        correctAnswer: "9",
        explanation: "(a + b)² = (-5 + 2)² = (-3)² = 9. Remember to perform operations inside parentheses first. 🔢",
        wrongAnswerExplanations: {
            "-9": "This would be the result of -5 + 2², not (-5 + 2)².",
            "-49": "This would be the result of -5² + 2², not (-5 + 2)².",
            "49": "This would be the result of (5 + 2)², not (-5 + 2)²."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch1_t1_qm10',
        type: "mcq",
        question: "What is the value of (-4) × (-3) + (-2) × 5?",
        options: ["2", "-2", "22", "-22"],
        correctAnswer: "2",
        explanation: "(-4) × (-3) + (-2) × 5 = 12 + (-10) = 2. Remember the order of operations. 🔢",
        wrongAnswerExplanations: {
            "-2": "This would be the result of (-4) × (-3) - 2 × 5, not (-4) × (-3) + (-2) × 5.",
            "22": "This would be the result of 4 × 3 + 2 × 5, not (-4) × (-3) + (-2) × 5.",
            "-22": "This would be the result of -4 × 3 - 2 × 5, not (-4) × (-3) + (-2) × 5."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch1_t1_qm11',
        type: "mcq",
        question: "Which expression is equivalent to -2 × (3 - 5)?",
        options: ["-6 - 10", "-6 + 10", "6 - 10", "6 + 10"],
        correctAnswer: "-6 + 10",
        explanation: "Using the distributive property: -2 × (3 - 5) = -2 × 3 - (-2) × 5 = -6 + 10. 🔢",
        wrongAnswerExplanations: {
            "-6 - 10": "This would be -2 × (3 + 5), not -2 × (3 - 5).",
            "6 - 10": "This would be 2 × (3 - 5), not -2 × (3 - 5).",
            "6 + 10": "This would be 2 × (3 + 5), not -2 × (3 - 5)."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch1_t1_qm12',
        type: "mcq",
        question: "What is the value of (-1)⁴ + (-1)³?",
        options: ["-2", "0", "2", "1"],
        correctAnswer: "0",
        explanation: "(-1)⁴ + (-1)³ = 1 + (-1) = 0. Remember that a negative number to an even power is positive. 🔢",
        wrongAnswerExplanations: {
            "-2": "This would be the result of (-1)³ + (-1)³, not (-1)⁴ + (-1)³.",
            "2": "This would be the result of 1⁴ + 1³, not (-1)⁴ + (-1)³.",
            "1": "This would be the result of (-1)⁴, not (-1)⁴ + (-1)³."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch1_t1_qm13',
        type: "mcq",
        question: "If a submarine descends 200m, rises 150m, and then descends another 100m, what is its final position relative to sea level?",
        options: ["-150m", "150m", "-250m", "250m"],
        correctAnswer: "-150m",
        explanation: "-200 + 150 - 100 = -150m. Descending is negative, rising is positive. 🌊",
        wrongAnswerExplanations: {
            "150m": "This would be the result of 200 - 150 + 100, not -200 + 150 - 100.",
            "-250m": "This would be the result of -200 - 150 - 100, not -200 + 150 - 100.",
            "250m": "This would be the result of 200 + 150 + 100, not -200 + 150 - 100."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch1_t1_qm14',
        type: "mcq",
        question: "What is the value of (-3) × 4 ÷ (-2)?",
        options: ["-6", "6", "-24", "24"],
        correctAnswer: "6",
        explanation: "(-3) × 4 ÷ (-2) = -12 ÷ (-2) = 6. Remember to perform operations from left to right. 🔢",
        wrongAnswerExplanations: {
            "-6": "This would be the result of (-3) × 4 ÷ 2, not (-3) × 4 ÷ (-2).",
            "-24": "This would be the result of -3 × 4 × 2, not (-3) × 4 ÷ (-2).",
            "24": "This would be the result of 3 × 4 × 2, not (-3) × 4 ÷ (-2)."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch1_t1_qm15',
        type: "mcq",
        question: "Which of these expressions is equal to 0?",
        options: ["(-5) + 5", "(-3) × 0", "(-2) - (-2)", "All of the above"],
        correctAnswer: "All of the above",
        explanation: "All expressions equal 0: (-5) + 5 = 0, (-3) × 0 = 0, (-2) - (-2) = 0. 🔢",
        wrongAnswerExplanations: {
            "(-5) + 5": "This is correct but not the only correct answer.",
            "(-3) × 0": "This is correct but not the only correct answer.",
            "(-2) - (-2)": "This is correct but not the only correct answer."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch1_t1_qm16',
        type: "mcq",
        question: "What is the value of (-1) × (-1) × (-1)?",
        options: ["1", "-1", "0", "3"],
        correctAnswer: "-1",
        explanation: "(-1) × (-1) × (-1) = 1 × (-1) = -1. An odd number of negative factors gives a negative product. 🔢",
        wrongAnswerExplanations: {
            "1": "This would be the result of (-1) × (-1), not (-1) × (-1) × (-1).",
            "0": "This would be the result of (-1) + 1, not (-1) × (-1) × (-1).",
            "3": "This would be the result of 1 + 1 + 1, not (-1) × (-1) × (-1)."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch1_t1_qm17',
        type: "mcq",
        question: "If a = -2 and b = 3, what is the value of a² - b²?",
        options: ["-5", "5", "-13", "13"],
        correctAnswer: "-5",
        explanation: "a² - b² = (-2)² - 3² = 4 - 9 = -5. Remember to square the numbers first. 🔢",
        wrongAnswerExplanations: {
            "5": "This would be the result of b² - a², not a² - b².",
            "-13": "This would be the result of -(2² + 3²), not (-2)² - 3².",
            "13": "This would be the result of 2² + 3², not (-2)² - 3²."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch1_t1_qm18',
        type: "mcq",
        question: "What is the value of (-4) × 3 + 5 × (-2)?",
        options: ["-22", "22", "-2", "2"],
        correctAnswer: "-22",
        explanation: "(-4) × 3 + 5 × (-2) = -12 + (-10) = -22. Remember the order of operations. 🔢",
        wrongAnswerExplanations: {
            "22": "This would be the result of 4 × 3 + 5 × 2, not (-4) × 3 + 5 × (-2).",
            "-2": "This would be the result of -4 + 3 + 5 - 2, not (-4) × 3 + 5 × (-2).",
            "2": "This would be the result of 4 - 3 + 5 - 2, not (-4) × 3 + 5 × (-2)."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch1_t1_qm19',
        type: "mcq",
        question: "Which expression is equivalent to -3 × (2 + 5)?",
        options: ["-6 - 15", "-6 + 15", "6 - 15", "6 + 15"],
        correctAnswer: "-6 - 15",
        explanation: "Using the distributive property: -3 × (2 + 5) = -3 × 2 + (-3) × 5 = -6 - 15. 🔢",
        wrongAnswerExplanations: {
            "-6 + 15": "This would be -3 × (2 - 5), not -3 × (2 + 5).",
            "6 - 15": "This would be 3 × (2 - 5), not -3 × (2 + 5).",
            "6 + 15": "This would be 3 × (2 + 5), not -3 × (2 + 5)."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch1_t1_qm20',
        type: "mcq",
        question: "What is the value of (-2)³ × (-3)²?",
        options: ["-72", "72", "-36", "36"],
        correctAnswer: "-72",
        explanation: "(-2)³ × (-3)² = -8 × 9 = -72. Remember the rules for exponents with negative numbers. 🔢",
        wrongAnswerExplanations: {
            "72": "This would be the result of 2³ × 3², not (-2)³ × (-3)².",
            "-36": "This would be the result of -2 × 3 × 6, not (-2)³ × (-3)².",
            "36": "This would be the result of 2 × 3 × 6, not (-2)³ × (-3)²."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    }
]; 