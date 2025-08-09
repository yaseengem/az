import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl7_ch1_t1_qe1',
        type: "mcq",
        question: "What is the result of 5 + (-3)?",
        options: ["8", "2", "-2", "-8"],
        correctAnswer: "2",
        explanation: "Adding a negative number is like subtracting. 5 + (-3) = 5 - 3 = 2. ➕",
        wrongAnswerExplanations: {
            "8": "Adding a negative number decreases the value, it doesn't increase it.",
            "-2": "The result should be positive since 5 is larger than 3.",
            "-8": "This would be the result of -5 + (-3), not 5 + (-3)."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch1_t1_qe2',
        type: "mcq",
        question: "If the temperature is -5°C and it rises by 8°C, what is the new temperature?",
        options: ["-13°C", "3°C", "13°C", "-3°C"],
        correctAnswer: "3°C",
        explanation: "-5 + 8 = 3°C. Rising temperature means adding a positive number. 🌡️",
        wrongAnswerExplanations: {
            "-13°C": "This would be the result of -5 - 8, not -5 + 8.",
            "13°C": "This would be the result of 5 + 8, not -5 + 8.",
            "-3°C": "This would be the result of -5 + 2, not -5 + 8."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch1_t1_qe3',
        type: "mcq",
        question: "What is (-4) × (-3)?",
        options: ["-12", "12", "-7", "7"],
        correctAnswer: "12",
        explanation: "Multiplying two negative numbers gives a positive result. -4 × -3 = 12. ✖️",
        wrongAnswerExplanations: {
            "-12": "This would be the result of -4 × 3, not -4 × -3.",
            "-7": "This is not a valid multiplication result.",
            "7": "This is not a valid multiplication result."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch1_t1_qe4',
        type: "mcq",
        question: "If you have ₹100 and spend ₹150, what is your balance?",
        options: ["₹250", "₹50", "-₹50", "-₹250"],
        correctAnswer: "-₹50",
        explanation: "100 - 150 = -50. Spending more than you have results in a negative balance. 💰",
        wrongAnswerExplanations: {
            "₹250": "This would be the result of 100 + 150, not 100 - 150.",
            "₹50": "This would be the result of 150 - 100, not 100 - 150.",
            "-₹250": "This would be the result of -100 - 150, not 100 - 150."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch1_t1_qe5',
        type: "mcq",
        question: "What is 12 ÷ (-3)?",
        options: ["4", "-4", "36", "-36"],
        correctAnswer: "-4",
        explanation: "Dividing a positive number by a negative number gives a negative result. 12 ÷ -3 = -4. ➗",
        wrongAnswerExplanations: {
            "4": "This would be the result of 12 ÷ 3, not 12 ÷ -3.",
            "36": "This would be the result of 12 × 3, not 12 ÷ -3.",
            "-36": "This would be the result of -12 × 3, not 12 ÷ -3."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch1_t1_qe6',
        type: "mcq",
        question: "What is the result of (-7) - (-3)?",
        options: ["-10", "-4", "4", "10"],
        correctAnswer: "-4",
        explanation: "Subtracting a negative is like adding. -7 - (-3) = -7 + 3 = -4. ➖",
        wrongAnswerExplanations: {
            "-10": "This would be the result of -7 - 3, not -7 - (-3).",
            "4": "This would be the result of 7 - 3, not -7 - (-3).",
            "10": "This would be the result of 7 + 3, not -7 - (-3)."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch1_t1_qe7',
        type: "mcq",
        question: "Which property is shown by 3 + 5 = 5 + 3?",
        options: ["Associative", "Commutative", "Distributive", "Identity"],
        correctAnswer: "Commutative",
        explanation: "The commutative property states that changing the order of numbers in addition doesn't change the result. 🔄",
        wrongAnswerExplanations: {
            "Associative": "Associative property involves grouping of numbers, not their order.",
            "Distributive": "Distributive property involves multiplication over addition.",
            "Identity": "Identity property involves adding zero to a number."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch1_t1_qe8',
        type: "mcq",
        question: "What is the additive inverse of -8?",
        options: ["-8", "8", "1/8", "-1/8"],
        correctAnswer: "8",
        explanation: "The additive inverse of a number is what you add to it to get zero. -8 + 8 = 0. 🔄",
        wrongAnswerExplanations: {
            "-8": "This is the original number, not its additive inverse.",
            "1/8": "This is the multiplicative inverse (reciprocal) of 8.",
            "-1/8": "This is the multiplicative inverse of -8."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch1_t1_qe9',
        type: "mcq",
        question: "If a submarine is at -200m and rises 150m, what is its new depth?",
        options: ["-350m", "-50m", "50m", "350m"],
        correctAnswer: "-50m",
        explanation: "-200 + 150 = -50m. Rising means adding a positive number to the depth. 🌊",
        wrongAnswerExplanations: {
            "-350m": "This would be the result of -200 - 150, not -200 + 150.",
            "50m": "This would be the result of 200 - 150, not -200 + 150.",
            "350m": "This would be the result of 200 + 150, not -200 + 150."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch1_t1_qe10',
        type: "mcq",
        question: "What is (-5) × 4?",
        options: ["-20", "20", "-1", "1"],
        correctAnswer: "-20",
        explanation: "Multiplying a negative number by a positive number gives a negative result. -5 × 4 = -20. ✖️",
        wrongAnswerExplanations: {
            "20": "This would be the result of 5 × 4, not -5 × 4.",
            "-1": "This would be the result of -5 + 4, not -5 × 4.",
            "1": "This would be the result of -5 + 6, not -5 × 4."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch1_t1_qe11',
        type: "mcq",
        question: "Which of these is NOT a property of integer addition?",
        options: ["Closure", "Commutative", "Distributive", "Associative"],
        correctAnswer: "Distributive",
        explanation: "Distributive property involves multiplication over addition, not just addition. 🔍",
        wrongAnswerExplanations: {
            "Closure": "Closure is a property of addition - the sum of two integers is always an integer.",
            "Commutative": "Commutative is a property of addition - a + b = b + a.",
            "Associative": "Associative is a property of addition - (a + b) + c = a + (b + c)."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch1_t1_qe12',
        type: "mcq",
        question: "What is 0 + (-7)?",
        options: ["7", "-7", "0", "70"],
        correctAnswer: "-7",
        explanation: "Adding zero to any number gives the same number. 0 + (-7) = -7. ➕",
        wrongAnswerExplanations: {
            "7": "This would be the result of 0 + 7, not 0 + (-7).",
            "0": "This would be the result of 0 + 0, not 0 + (-7).",
            "70": "This is not a valid addition result."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch1_t1_qe13',
        type: "mcq",
        question: "If you owe ₹500 and pay back ₹300, how much do you still owe?",
        options: ["₹800", "₹200", "-₹200", "-₹800"],
        correctAnswer: "₹200",
        explanation: "-500 + 300 = -200, which means you still owe ₹200. 💰",
        wrongAnswerExplanations: {
            "₹800": "This would be the result of -500 - 300, not -500 + 300.",
            "-₹200": "This represents owing ₹200, which is the correct amount but not the correct format.",
            "-₹800": "This would be the result of -500 - 300, not -500 + 300."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch1_t1_qe14',
        type: "mcq",
        question: "What is (-12) ÷ 3?",
        options: ["4", "-4", "36", "-36"],
        correctAnswer: "-4",
        explanation: "Dividing a negative number by a positive number gives a negative result. -12 ÷ 3 = -4. ➗",
        wrongAnswerExplanations: {
            "4": "This would be the result of 12 ÷ 3, not -12 ÷ 3.",
            "36": "This would be the result of 12 × 3, not -12 ÷ 3.",
            "-36": "This would be the result of -12 × 3, not -12 ÷ 3."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch1_t1_qe15',
        type: "mcq",
        question: "Which of these represents the associative property of addition?",
        options: [
            "3 + 5 = 5 + 3",
            "3 + (5 + 2) = (3 + 5) + 2",
            "3 × (5 + 2) = 3 × 5 + 3 × 2",
            "3 + 0 = 3"
        ],
        correctAnswer: "3 + (5 + 2) = (3 + 5) + 2",
        explanation: "The associative property shows that grouping of numbers doesn't affect the sum. 🔄",
        wrongAnswerExplanations: {
            "3 + 5 = 5 + 3": "This shows the commutative property, not associative.",
            "3 × (5 + 2) = 3 × 5 + 3 × 2": "This shows the distributive property.",
            "3 + 0 = 3": "This shows the additive identity property."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch1_t1_qe16',
        type: "mcq",
        question: "What is the result of (-6) + (-4)?",
        options: ["-10", "-2", "2", "10"],
        correctAnswer: "-10",
        explanation: "Adding two negative numbers gives a more negative result. -6 + (-4) = -10. ➕",
        wrongAnswerExplanations: {
            "-2": "This would be the result of -6 + 4, not -6 + (-4).",
            "2": "This would be the result of 6 - 4, not -6 + (-4).",
            "10": "This would be the result of 6 + 4, not -6 + (-4)."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch1_t1_qe17',
        type: "mcq",
        question: "If the temperature drops from 2°C to -3°C, what is the temperature change?",
        options: ["1°C", "-1°C", "5°C", "-5°C"],
        correctAnswer: "-5°C",
        explanation: "2 - (-3) = 5, but since it's a drop, the change is -5°C. 🌡️",
        wrongAnswerExplanations: {
            "1°C": "This is not the correct temperature change.",
            "-1°C": "This would be the change from 2°C to 1°C.",
            "5°C": "This is the magnitude of change but not the direction."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch1_t1_qe18',
        type: "mcq",
        question: "What is 1 × (-9)?",
        options: ["9", "-9", "8", "-8"],
        correctAnswer: "-9",
        explanation: "Multiplying any number by 1 gives the same number. 1 × (-9) = -9. ✖️",
        wrongAnswerExplanations: {
            "9": "This would be the result of -1 × -9, not 1 × -9.",
            "8": "This is not a valid multiplication result.",
            "-8": "This is not a valid multiplication result."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch1_t1_qe19',
        type: "mcq",
        question: "Which of these is the multiplicative identity for integers?",
        options: ["0", "1", "-1", "2"],
        correctAnswer: "1",
        explanation: "Multiplying any number by 1 gives the same number. This is the multiplicative identity. 🔑",
        wrongAnswerExplanations: {
            "0": "0 is the additive identity, not multiplicative.",
            "-1": "-1 is not the multiplicative identity.",
            "2": "2 is not the multiplicative identity."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch1_t1_qe20',
        type: "mcq",
        question: "What is (-15) ÷ (-3)?",
        options: ["-5", "5", "-45", "45"],
        correctAnswer: "5",
        explanation: "Dividing two negative numbers gives a positive result. -15 ÷ -3 = 5. ➗",
        wrongAnswerExplanations: {
            "-5": "This would be the result of -15 ÷ 3, not -15 ÷ -3.",
            "-45": "This would be the result of -15 × 3, not -15 ÷ -3.",
            "45": "This would be the result of 15 × 3, not -15 ÷ -3."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    }
]; 