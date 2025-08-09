// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 7\Chapter13\Topic1\quiz_easy.ts
// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 7\Chapter13\Topic1\quiz_easy.ts
import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl7_ch13_t1_qe1',
        type: "mcq",
        question: "What is 2³?",
        options: ["6", "8", "9", "12"],
        correctAnswer: "8",
        explanation: "2³ = 2 × 2 × 2 = 8. The exponent 3 means we multiply the base 2 three times. 🧮",
        wrongAnswerExplanations: {
            "6": "This is 2 + 2 + 2, which is not the meaning of exponents.",
            "9": "This is 3², not 2³.",
            "12": "This is 2 × 6 or 3 × 4, not 2³."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch13_t1_qe2',
        type: "mcq",
        question: "What is the value of 5¹?",
        options: ["0", "1", "5", "10"],
        correctAnswer: "5",
        explanation: "5¹ = 5. Any number raised to the power 1 equals the number itself. 🔢",
        wrongAnswerExplanations: {
            "0": "5⁰ = 1, not 0.",
            "1": "5⁰ = 1, but 5¹ = 5.",
            "10": "This is 5 × 2, not 5¹."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch13_t1_qe3',
        type: "mcq",
        question: "What is 10⁰?",
        options: ["0", "1", "10", "Not defined"],
        correctAnswer: "1",
        explanation: "Any non-zero number raised to the power 0 equals 1. So 10⁰ = 1. This is a fundamental law of exponents. 📏",
        wrongAnswerExplanations: {
            "0": "0⁰ is indeterminate, but 10⁰ = 1.",
            "10": "10¹ = 10, but 10⁰ = 1.",
            "Not defined": "10⁰ is well defined and equals 1."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch13_t1_qe4',
        type: "mcq",
        question: "What is the base in the expression 4³?",
        options: ["3", "4", "12", "64"],
        correctAnswer: "4",
        explanation: "In 4³, 4 is the base and 3 is the exponent. The base is the number being multiplied. 🔍",
        wrongAnswerExplanations: {
            "3": "3 is the exponent, not the base.",
            "12": "12 is 4 × 3, not the base.",
            "64": "64 is the value of 4³, not the base."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch13_t1_qe5',
        type: "mcq",
        question: "What is the exponent in the expression 7⁴?",
        options: ["4", "7", "28", "2401"],
        correctAnswer: "4",
        explanation: "In 7⁴, 7 is the base and 4 is the exponent. The exponent tells us how many times to multiply the base. ⚡",
        wrongAnswerExplanations: {
            "7": "7 is the base, not the exponent.",
            "28": "28 is 7 × 4, not the exponent.",
            "2401": "2401 is the value of 7⁴, not the exponent."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch13_t1_qe6',
        type: "mcq",
        question: "Which of the following is equal to 2⁵?",
        options: ["2 × 5", "5 × 5", "2 × 2 × 2 × 2 × 2", "5 × 5 × 5 × 5 × 5"],
        correctAnswer: "2 × 2 × 2 × 2 × 2",
        explanation: "2⁵ means multiplying 2 by itself 5 times: 2 × 2 × 2 × 2 × 2 = 32. 🧩",
        wrongAnswerExplanations: {
            "2 × 5": "This is 10, not 2⁵.",
            "5 × 5": "This is 5², not 2⁵.",
            "5 × 5 × 5 × 5 × 5": "This is 5⁵, not 2⁵."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch13_t1_qe7',
        type: "mcq",
        question: "What is 3² × 3³?",
        options: ["3⁵", "3⁶", "9 × 27", "6⁵"],
        correctAnswer: "3⁵",
        explanation: "3² × 3³ = 3²⁺³ = 3⁵. When multiplying powers with the same base, add the exponents. 🧮",
        wrongAnswerExplanations: {
            "3⁶": "This would be 3² × 3⁴ or 3³ × 3³.",
            "9 × 27": "This is the expanded form, not simplified.",
            "6⁵": "3² × 3³ doesn't equal 6⁵."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch13_t1_qe8',
        type: "mcq",
        question: "How do you write 2 × 2 × 2 × 2 using exponents?",
        options: ["2⁴", "4²", "2 + 2 + 2 + 2", "8²"],
        correctAnswer: "2⁴",
        explanation: "2 × 2 × 2 × 2 = 2⁴. The base is 2, and it appears 4 times, so the exponent is 4. 📝",
        wrongAnswerExplanations: {
            "4²": "This is 4 × 4 = 16, not 2 × 2 × 2 × 2.",
            "2 + 2 + 2 + 2": "This is addition, not multiplication.",
            "8²": "This is 8 × 8 = 64, not 2 × 2 × 2 × 2."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch13_t1_qe9',
        type: "mcq",
        question: "What is 5⁰ × 3⁰?",
        options: ["0", "1", "8", "15"],
        correctAnswer: "1",
        explanation: "5⁰ × 3⁰ = 1 × 1 = 1. Any non-zero number raised to the power 0 equals 1. 🔢",
        wrongAnswerExplanations: {
            "0": "Any number raised to 0 is 1, not 0.",
            "8": "5⁰ × 3⁰ = 1 × 1 = 1, not 8.",
            "15": "This is 5 × 3, not 5⁰ × 3⁰."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch13_t1_qe10',
        type: "mcq",
        question: "Which of these is equal to 10²?",
        options: ["20", "100", "1000", "10 × 10 × 10"],
        correctAnswer: "100",
        explanation: "10² = 10 × 10 = 100. The exponent 2 means we multiply the base 10 twice. 💯",
        wrongAnswerExplanations: {
            "20": "This is 10 + 10, not 10².",
            "1000": "This is 10³, not 10².",
            "10 × 10 × 10": "This is 10³, not 10²."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch13_t1_qe11',
        type: "mcq",
        question: "What is (2⁴) ÷ (2²)?",
        options: ["2⁻²", "2⁰", "2²", "2⁶"],
        correctAnswer: "2²",
        explanation: "(2⁴) ÷ (2²) = 2⁴⁻² = 2². When dividing powers with the same base, subtract the exponents. ➗",
        wrongAnswerExplanations: {
            "2⁻²": "This would be (2²) ÷ (2⁴).",
            "2⁰": "This would be (2⁴) ÷ (2⁴).",
            "2⁶": "This would be (2⁴) × (2²)."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch13_t1_qe12',
        type: "mcq",
        question: "Which of the following equals 4³?",
        options: ["4 × 3", "12⁴", "64", "81"],
        correctAnswer: "64",
        explanation: "4³ = 4 × 4 × 4 = 16 × 4 = 64. We multiply 4 by itself 3 times to get 64. 🧮",
        wrongAnswerExplanations: {
            "4 × 3": "This is 12, not 4³.",
            "12⁴": "This is 12 × 12 × 12 × 12, not 4³.",
            "81": "This is 3⁴ or 9², not 4³."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch13_t1_qe13',
        type: "mcq",
        question: "What is (-5)²?",
        options: ["-25", "-10", "25", "10"],
        correctAnswer: "25",
        explanation: "(-5)² = (-5) × (-5) = 25. When a negative number is squared, the result is positive. ✨",
        wrongAnswerExplanations: {
            "-25": "(-5)² = (-5) × (-5) = 25, not -25.",
            "-10": "This is -5 × 2, not (-5)².",
            "10": "This is 5 × 2, not (-5)²."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch13_t1_qe14',
        type: "mcq",
        question: "What is the product of 2⁴ and 2²?",
        options: ["2⁶", "2⁸", "4⁶", "16"],
        correctAnswer: "2⁶",
        explanation: "2⁴ × 2² = 2⁴⁺² = 2⁶. When multiplying powers with the same base, add the exponents. 🔢",
        wrongAnswerExplanations: {
            "2⁸": "This is 2⁴ × 2⁴, not 2⁴ × 2².",
            "4⁶": "This is (2²)⁶, not 2⁴ × 2².",
            "16": "This is 2⁴, not 2⁴ × 2²."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch13_t1_qe15',
        type: "mcq",
        question: "Which of the following represents 'five cubed'?",
        options: ["5 × 3", "5³", "3⁵", "15"],
        correctAnswer: "5³",
        explanation: "'Five cubed' means 5³, which equals 5 × 5 × 5 = 125. The term 'cubed' refers to the exponent 3. 📊",
        wrongAnswerExplanations: {
            "5 × 3": "This is 15, not 5 cubed.",
            "3⁵": "This is 3 raised to power 5, not 5 cubed.",
            "15": "This is 5 × 3, not 5 cubed."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch13_t1_qe16',
        type: "mcq",
        question: "How is the number 0.0034 written in scientific notation?",
        options: ["3.4 × 10⁻²", "3.4 × 10⁻³", "3.4 × 10⁻⁴", "34 × 10⁻⁵"],
        correctAnswer: "3.4 × 10⁻³",
        explanation: "0.0034 = 3.4 × 10⁻³. In scientific notation, the decimal point moves 3 places right, giving us 3.4 × 10⁻³. 📝",
        wrongAnswerExplanations: {
            "3.4 × 10⁻²": "This equals 0.034, not 0.0034.",
            "3.4 × 10⁻⁴": "This equals 0.00034, not 0.0034.",
            "34 × 10⁻⁵": "This equals 0.00034, not 0.0034."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch13_t1_qe17',
        type: "mcq",
        question: "What is the value of 6⁰?",
        options: ["0", "1", "6", "36"],
        correctAnswer: "1",
        explanation: "Any non-zero number raised to the power 0 equals 1. Therefore, 6⁰ = 1. This is a basic exponent rule. 🔍",
        wrongAnswerExplanations: {
            "0": "Any non-zero number raised to the power 0 equals 1, not 0.",
            "6": "This is 6¹, not 6⁰.",
            "36": "This is 6², not 6⁰."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch13_t1_qe18',
        type: "mcq",
        question: "How is 5,600,000,000 written in scientific notation?",
        options: ["5.6 × 10⁹", "56 × 10⁸", "5.6 × 10⁷", "56 × 10⁷"],
        correctAnswer: "5.6 × 10⁹",
        explanation: "5,600,000,000 = 5.6 × 10⁹. In scientific notation, we move the decimal point until we have a number between 1 and 10, followed by × 10 raised to the appropriate power. 🔢",
        wrongAnswerExplanations: {
            "56 × 10⁸": "This equals 5.6 × 10⁹, but scientific notation requires a number between 1 and 10.",
            "5.6 × 10⁷": "This equals 56,000,000, not 5,600,000,000.",
            "56 × 10⁷": "This equals 560,000,000, not 5,600,000,000."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch13_t1_qe19',
        type: "mcq",
        question: "What is the value of (10⁴) × (10³)?",
        options: ["10⁷", "10¹²", "10⁰", "10¹"],
        correctAnswer: "10⁷",
        explanation: "(10⁴) × (10³) = 10⁴⁺³ = 10⁷. When multiplying powers with the same base, add the exponents. 🚀",
        wrongAnswerExplanations: {
            "10¹²": "This would be (10⁴)³, not (10⁴) × (10³).",
            "10⁰": "This equals 1, not (10⁴) × (10³).",
            "10¹": "This equals 10, not (10⁴) × (10³)."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch13_t1_qe20',
        type: "mcq",
        question: "What is the value of (3²)³?",
        options: ["3⁶", "3⁵", "9³", "27"],
        correctAnswer: "3⁶",
        explanation: "(3²)³ = 3²×³ = 3⁶. When raising a power to another power, multiply the exponents. 📊",
        wrongAnswerExplanations: {
            "3⁵": "This is 3² × 3³, not (3²)³.",
            "9³": "This equals 729, which is correct, but 3⁶ is the simplified form.",
            "27": "This is 3³, not (3²)³."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    }
];
