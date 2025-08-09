// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 7\Chapter13\Topic3\quiz_easy.ts
import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl7_ch13_t3_qe1',
        type: "mcq",
        question: "What is the standard form of 5,000,000?",
        options: ["5 × 10⁶", "5 × 10⁵", "5 × 10⁴", "5 × 10⁷"],
        correctAnswer: "5 × 10⁶",
        explanation: "Count the zeros after 5: there are 6 zeros, so it's 5 × 10⁶. 🔢",
        wrongAnswerExplanations: {
            "5 × 10⁵": "This would be 500,000, which is too small.",
            "5 × 10⁴": "This would be 50,000, which is too small.",
            "5 × 10⁷": "This would be 50,000,000, which is too large."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch13_t3_qe2',
        type: "mcq",
        question: "How would you write 0.0001 in scientific notation?",
        options: ["1 × 10⁻⁴", "1 × 10⁴", "10 × 10⁻⁴", "0.1 × 10⁻³"],
        correctAnswer: "1 × 10⁻⁴",
        explanation: "Move decimal point 4 places right to get 1, so multiply by 10⁻⁴. 📏",
        wrongAnswerExplanations: {
            "1 × 10⁴": "This would be 10,000, not 0.0001.",
            "10 × 10⁻⁴": "This would be 0.001, not 0.0001.",
            "0.1 × 10⁻³": "This equals 0.0001 but is not in standard scientific notation."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch13_t3_qe3',
        type: "mcq",
        question: "What is 10⁶ × 10³?",
        options: ["10⁹", "10⁸", "10⁵", "10³"],
        correctAnswer: "10⁹",
        explanation: "When multiplying powers with same base, add exponents: 10⁶ × 10³ = 10⁶⁺³ = 10⁹. ✖️",
        wrongAnswerExplanations: {
            "10⁸": "Adding exponents: 6 + 3 = 9, not 8.",
            "10⁵": "We add exponents, not subtract them.",
            "10³": "This is much too small."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch13_t3_qe4',
        type: "mcq",
        question: "Which expression represents one billion?",
        options: ["10⁶", "10⁹", "10¹²", "10⁸"],
        correctAnswer: "10⁹",
        explanation: "One billion is 1,000,000,000, which has 9 zeros, so it's 10⁹. 🔍",
        wrongAnswerExplanations: {
            "10⁶": "This is one million, not one billion.",
            "10¹²": "This is one trillion, too large.",
            "10⁸": "This is 100 million, too small."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch13_t3_qe5',
        type: "mcq",
        question: "What is 10⁴ ÷ 10²?",
        options: ["10⁶", "10²", "10⁸", "10"],
        correctAnswer: "10²",
        explanation: "When dividing powers with same base, subtract exponents: 10⁴ ÷ 10² = 10⁴⁻² = 10². ➗",
        wrongAnswerExplanations: {
            "10⁶": "We subtract exponents, not add them.",
            "10⁸": "This would make the number larger, not smaller.",
            "10": "This would be 10¹, not 10²."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch13_t3_qe6',
        type: "mcq",
        question: "What is the value of (10⁴)²?",
        options: ["10⁶", "10⁸", "10¹⁶", "10²"],
        correctAnswer: "10⁸",
        explanation: "When raising a power to a power, multiply exponents: (10⁴)² = 10⁴×² = 10⁸. 🎯",
        wrongAnswerExplanations: {
            "10⁶": "We multiply exponents, not add them.",
            "10¹⁶": "4 × 2 = 8, not 16.",
            "10²": "This would make the number smaller, not larger."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch13_t3_qe7',
        type: "mcq",
        question: "Which is equal to 0.000001?",
        options: ["1 × 10⁻⁶", "1 × 10⁶", "10⁻⁶", "6 × 10⁻¹"],
        correctAnswer: "1 × 10⁻⁶",
        explanation: "Count decimal places to the right: 6 places, so it's 1 × 10⁻⁶. 🔍",
        wrongAnswerExplanations: {
            "1 × 10⁶": "This is 1,000,000, not 0.000001.",
            "10⁻⁶": "This equals 1 × 10⁻⁶ but is not in standard scientific notation.",
            "6 × 10⁻¹": "This equals 0.6, not 0.000001."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch13_t3_qe8',
        type: "mcq",
        question: "What is 2 × 10⁵ in expanded form?",
        options: ["20,000", "200,000", "2,000,000", "20,000,000"],
        correctAnswer: "200,000",
        explanation: "2 × 10⁵ means 2 followed by 5 zeros = 200,000. 📝",
        wrongAnswerExplanations: {
            "20,000": "This has only 4 zeros.",
            "2,000,000": "This has 6 zeros.",
            "20,000,000": "This has 7 zeros."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch13_t3_qe9',
        type: "mcq",
        question: "What is the standard form of 47,000?",
        options: ["4.7 × 10⁴", "47 × 10³", "4.7 × 10³", "47 × 10⁴"],
        correctAnswer: "4.7 × 10⁴",
        explanation: "Move decimal point left until 1-digit number: 4.7, moved 4 places, so × 10⁴. 📊",
        wrongAnswerExplanations: {
            "47 × 10³": "Not in standard form (should be 1-digit number × power of 10).",
            "4.7 × 10³": "This would be 4,700, too small.",
            "47 × 10⁴": "Not in standard form and too large."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch13_t3_qe10',
        type: "mcq",
        question: "What is 10⁵ × 10⁻³?",
        options: ["10²", "10⁸", "10⁻²", "10⁻⁸"],
        correctAnswer: "10²",
        explanation: "Add exponents: 5 + (-3) = 2, so 10⁵ × 10⁻³ = 10². ➕",
        wrongAnswerExplanations: {
            "10⁸": "Adding 5 and -3 gives 2, not 8.",
            "10⁻²": "5 + (-3) = 2, not -2.",
            "10⁻⁸": "This would be much too small."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch13_t3_qe11',
        type: "mcq",
        question: "How many zeros are in 10⁷?",
        options: ["6", "7", "8", "5"],
        correctAnswer: "7",
        explanation: "The exponent tells us the number of zeros: 10⁷ = 10,000,000 (7 zeros). 0️⃣",
        wrongAnswerExplanations: {
            "6": "10⁶ would have 6 zeros.",
            "8": "10⁸ would have 8 zeros.",
            "5": "10⁵ would have 5 zeros."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch13_t3_qe12',
        type: "mcq",
        question: "What is 3 × 10⁴ × 2 × 10³?",
        options: ["6 × 10⁷", "5 × 10⁷", "6 × 10⁶", "5 × 10⁶"],
        correctAnswer: "6 × 10⁷",
        explanation: "Multiply numbers (3 × 2 = 6) and add exponents (4 + 3 = 7). 🧮",
        wrongAnswerExplanations: {
            "5 × 10⁷": "3 × 2 = 6, not 5.",
            "6 × 10⁶": "Adding exponents: 4 + 3 = 7, not 6.",
            "5 × 10⁶": "Both the coefficient and exponent are wrong."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch13_t3_qe13',
        type: "mcq",
        question: "What is 10⁶ ÷ 10⁻²?",
        options: ["10⁴", "10⁸", "10⁻⁴", "10⁻⁸"],
        correctAnswer: "10⁸",
        explanation: "Subtract exponents: 6 - (-2) = 6 + 2 = 8, so 10⁶ ÷ 10⁻² = 10⁸. ➖",
        wrongAnswerExplanations: {
            "10⁴": "When dividing by a negative power, we add the absolute values.",
            "10⁻⁴": "The result should be positive.",
            "10⁻⁸": "The result should be positive."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch13_t3_qe14',
        type: "mcq",
        question: "Which represents one trillion?",
        options: ["10⁹", "10¹²", "10¹⁵", "10⁶"],
        correctAnswer: "10¹²",
        explanation: "One trillion is 1,000,000,000,000, which has 12 zeros, so it's 10¹². 💫",
        wrongAnswerExplanations: {
            "10⁹": "This is one billion, too small.",
            "10¹⁵": "This is one quadrillion, too large.",
            "10⁶": "This is one million, too small."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch13_t3_qe15',
        type: "mcq",
        question: "What is (10²)³?",
        options: ["10⁵", "10⁶", "10⁸", "10⁹"],
        correctAnswer: "10⁶",
        explanation: "Multiply exponents: (10²)³ = 10²×³ = 10⁶. 🎯",
        wrongAnswerExplanations: {
            "10⁵": "2 × 3 = 6, not 5.",
            "10⁸": "2 × 3 = 6, not 8.",
            "10⁹": "2 × 3 = 6, not 9."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch13_t3_qe16',
        type: "mcq",
        question: "What is 0.00001 written in scientific notation?",
        options: ["1 × 10⁻⁵", "1 × 10⁵", "1 × 10⁻⁴", "10⁻⁵"],
        correctAnswer: "1 × 10⁻⁵",
        explanation: "Count 5 decimal places, so it's 1 × 10⁻⁵. 📏",
        wrongAnswerExplanations: {
            "1 × 10⁵": "This is 100,000, not 0.00001.",
            "1 × 10⁻⁴": "This would be 0.0001, too large.",
            "10⁻⁵": "This equals 1 × 10⁻⁵ but is not in standard notation."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch13_t3_qe17',
        type: "mcq",
        question: "What is 4 × 10⁵ × 5 × 10⁻² simplified?",
        options: ["20 × 10³", "2 × 10³", "20 × 10⁷", "2 × 10⁷"],
        correctAnswer: "20 × 10³",
        explanation: "Multiply numbers (4 × 5 = 20) and add exponents (5 + (-2) = 3). 🧮",
        wrongAnswerExplanations: {
            "2 × 10³": "4 × 5 = 20, not 2.",
            "20 × 10⁷": "5 + (-2) = 3, not 7.",
            "2 × 10⁷": "Both the coefficient and exponent are wrong."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch13_t3_qe18',
        type: "mcq",
        question: "What is 10⁴ × 10⁻⁴?",
        options: ["10⁸", "10⁰", "10⁻⁸", "1"],
        correctAnswer: "10⁰",
        explanation: "Add exponents: 4 + (-4) = 0, and 10⁰ = 1. Any number raised to power 0 equals 1. ✨",
        wrongAnswerExplanations: {
            "10⁸": "Adding 4 and -4 gives 0, not 8.",
            "10⁻⁸": "Adding 4 and -4 gives 0, not -8.",
            "1": "While this is the value of 10⁰, the question asks for the expression."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch13_t3_qe19',
        type: "mcq",
        question: "What is 3 × 10⁶ written in expanded form?",
        options: ["300,000", "3,000,000", "30,000,000", "300,000,000"],
        correctAnswer: "3,000,000",
        explanation: "3 × 10⁶ means 3 followed by 6 zeros = 3,000,000. 📝",
        wrongAnswerExplanations: {
            "300,000": "This has only 5 zeros.",
            "30,000,000": "This has 7 zeros.",
            "300,000,000": "This has 8 zeros."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch13_t3_qe20',
        type: "mcq",
        question: "What is 10⁸ ÷ 10⁵?",
        options: ["10³", "10¹³", "10⁻³", "10⁴"],
        correctAnswer: "10³",
        explanation: "Subtract exponents: 8 - 5 = 3, so 10⁸ ÷ 10⁵ = 10³. ➗",
        wrongAnswerExplanations: {
            "10¹³": "We subtract exponents, not add them.",
            "10⁻³": "8 - 5 = 3, not -3.",
            "10⁴": "8 - 5 = 3, not 4."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    }
];
