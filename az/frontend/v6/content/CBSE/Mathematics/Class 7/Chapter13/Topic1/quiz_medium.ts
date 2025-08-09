// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 7\Chapter13\Topic1\quiz_medium.ts
// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 7\Chapter13\Topic1\quiz_medium.ts
import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl7_ch13_t1_qm1',
        type: "mcq",
        question: "Simplify: (3⁴ × 3²) ÷ 3³",
        options: ["3³", "3⁴", "3⁶", "3⁹"],
        correctAnswer: "3³",
        explanation: "(3⁴ × 3²) ÷ 3³ = 3⁴⁺² ÷ 3³ = 3⁶ ÷ 3³ = 3⁶⁻³ = 3³. Add exponents when multiplying and subtract when dividing. 🧮",
        wrongAnswerExplanations: {
            "3⁴": "The calculation requires adding exponents first (4+2=6), then subtracting 3, giving 3³.",
            "3⁶": "This is only the result of 3⁴ × 3², without dividing by 3³.",
            "3⁹": "This would be 3⁴ × 3² × 3³, not (3⁴ × 3²) ÷ 3³."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch13_t1_qm2',
        type: "mcq",
        question: "What is the simplified form of (5²)³?",
        options: ["5⁵", "5⁶", "125³", "15"],
        correctAnswer: "5⁶",
        explanation: "(5²)³ = 5²×³ = 5⁶. When raising a power to another power, multiply the exponents. 🔢",
        wrongAnswerExplanations: {
            "5⁵": "This would be 5² × 5³, not (5²)³.",
            "125³": "This is correct in value, but 5⁶ is the simplified form with exponent laws.",
            "15": "This is 5 × 3, not (5²)³."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch13_t1_qm3',
        type: "mcq",
        question: "How is 0.000072 written in scientific notation?",
        options: ["7.2 × 10⁻⁵", "7.2 × 10⁻⁶", "72 × 10⁻⁷", "7.2 × 10⁻⁴"],
        correctAnswer: "7.2 × 10⁻⁵",
        explanation: "0.000072 = 7.2 × 10⁻⁵. Moving the decimal point 5 places right gives 7.2, so we use 10⁻⁵. 📝",
        wrongAnswerExplanations: {
            "7.2 × 10⁻⁶": "This equals 0.0000072, not 0.000072.",
            "72 × 10⁻⁷": "This equals 0.00000072, not 0.000072.",
            "7.2 × 10⁻⁴": "This equals 0.00072, not 0.000072."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch13_t1_qm4',
        type: "mcq",
        question: "What is the value of (-3)⁴?",
        options: ["-81", "-12", "81", "12"],
        correctAnswer: "81",
        explanation: "(-3)⁴ = (-3)(-3)(-3)(-3) = 9 × 9 = 81. With even exponents, a negative base results in a positive answer. 🔍",
        wrongAnswerExplanations: {
            "-81": "This would be -3⁴, not (-3)⁴.",
            "-12": "This is -3 × 4, not (-3)⁴.",
            "12": "This is 3 × 4, not (-3)⁴."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch13_t1_qm5',
        type: "mcq",
        question: "Which of these equals 3⁻²?",
        options: ["1/9", "-9", "-1/9", "1/6"],
        correctAnswer: "1/9",
        explanation: "3⁻² = 1/3² = 1/9. A negative exponent means taking the reciprocal of the base raised to the positive exponent. ➗",
        wrongAnswerExplanations: {
            "-9": "This would be -(3²), not 3⁻².",
            "-1/9": "A negative exponent doesn't make the result negative.",
            "1/6": "This is 1/(3×2), not 1/3²."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch13_t1_qm6',
        type: "mcq",
        question: "What is the product of 2³ × 2⁻² × 2⁵?",
        options: ["2⁶", "2¹⁰", "2⁻⁴", "1"],
        correctAnswer: "2⁶",
        explanation: "2³ × 2⁻² × 2⁵ = 2³⁻²⁺⁵ = 2⁶. When multiplying powers with the same base, add the exponents. 🧮",
        wrongAnswerExplanations: {
            "2¹⁰": "This would be 2³ × 2² × 2⁵, not 2³ × 2⁻² × 2⁵.",
            "2⁻⁴": "This would be 2⁻³ × 2⁻² × 2¹, not 2³ × 2⁻² × 2⁵.",
            "1": "This would be 2³ × 2⁻³, not 2³ × 2⁻² × 2⁵."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch13_t1_qm7',
        type: "mcq",
        question: "Express 0.00035 in scientific notation.",
        options: ["3.5 × 10⁻³", "3.5 × 10⁻⁴", "35 × 10⁻⁵", "3.5 × 10⁻⁵"],
        correctAnswer: "3.5 × 10⁻⁴",
        explanation: "0.00035 = 3.5 × 10⁻⁴. Moving the decimal 4 places right gives 3.5, so we use 10⁻⁴. 📊",
        wrongAnswerExplanations: {
            "3.5 × 10⁻³": "This equals 0.0035, not 0.00035.",
            "35 × 10⁻⁵": "In scientific notation, the coefficient should be between 1 and 10.",
            "3.5 × 10⁻⁵": "This equals 0.000035, not 0.00035."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch13_t1_qm8',
        type: "mcq",
        question: "What is the value of (10³)²?",
        options: ["10⁵", "10⁶", "1000²", "10⁹"],
        correctAnswer: "10⁶",
        explanation: "(10³)² = 10³×² = 10⁶. When a power is raised to another power, multiply the exponents. 🔢",
        wrongAnswerExplanations: {
            "10⁵": "This would be 10³+², not 10³×².",
            "1000²": "This equals 10⁶, which is correct, but is not in the simplified form.",
            "10⁹": "This would be 10³×³, not 10³×²."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch13_t1_qm9',
        type: "mcq",
        question: "If a = 2, b = 3, and c = -1, what is the value of a² × b⁻¹ × c²?",
        options: ["4/3", "4/9", "-4/3", "-4/9"],
        correctAnswer: "4/3",
        explanation: "a² × b⁻¹ × c² = 2² × 3⁻¹ × (-1)² = 4 × (1/3) × 1 = 4/3. Remember that (-1)² = 1, not -1. 🧩",
        wrongAnswerExplanations: {
            "4/9": "This calculation incorrectly treats b⁻¹ as 1/9 instead of 1/3.",
            "-4/3": "(-1)² = 1, not -1, so the result is positive.",
            "-4/9": "Both the value of b⁻¹ and the sign of c² are incorrect."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl7_ch13_t1_qm10',
        type: "mcq",
        question: "Express 650,000,000 in scientific notation.",
        options: ["6.5 × 10⁸", "65 × 10⁷", "6.5 × 10⁹", "65 × 10⁶"],
        correctAnswer: "6.5 × 10⁸",
        explanation: "650,000,000 = 6.5 × 10⁸. Moving the decimal 8 places left gives 6.5, so we use 10⁸. 📝",
        wrongAnswerExplanations: {
            "65 × 10⁷": "In scientific notation, the coefficient should be between 1 and 10.",
            "6.5 × 10⁹": "This equals 6,500,000,000, not 650,000,000.",
            "65 × 10⁶": "This equals 65,000,000, not 650,000,000."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch13_t1_qm11',
        type: "mcq",
        question: "Simplify: (2⁻³)⁻²",
        options: ["2⁻⁶", "2⁻¹", "2⁶", "2⁵"],
        correctAnswer: "2⁶",
        explanation: "(2⁻³)⁻² = 2⁻³×(⁻²) = 2⁶. A negative exponent raised to a negative power becomes positive. 🔍",
        wrongAnswerExplanations: {
            "2⁻⁶": "When raising a negative exponent to a negative power, the result is positive, not negative.",
            "2⁻¹": "This would be 2⁻³ × 2², not (2⁻³)⁻².",
            "2⁵": "This would be 2⁻³ × 2², not (2⁻³)⁻²."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch13_t1_qm12',
        type: "mcq",
        question: "Which of these equals 10⁻⁴?",
        options: ["0.0001", "0.001", "0.01", "0.1"],
        correctAnswer: "0.0001",
        explanation: "10⁻⁴ = 1/10⁴ = 1/10000 = 0.0001. Moving the decimal point 4 places left from 1. ➗",
        wrongAnswerExplanations: {
            "0.001": "This is 10⁻³, not 10⁻⁴.",
            "0.01": "This is 10⁻², not 10⁻⁴.",
            "0.1": "This is 10⁻¹, not 10⁻⁴."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch13_t1_qm13',
        type: "mcq",
        question: "What is the value of (-2)³?",
        options: ["-8", "-6", "6", "8"],
        correctAnswer: "-8",
        explanation: "(-2)³ = (-2)(-2)(-2) = -8. With odd exponents, a negative base results in a negative answer. 🧪",
        wrongAnswerExplanations: {
            "-6": "This is -2 × 3, not (-2)³.",
            "6": "This is 2 × 3, not (-2)³.",
            "8": "This is 2³, not (-2)³."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch13_t1_qm14',
        type: "mcq",
        question: "Which is equal to (4/5)²?",
        options: ["4²/5²", "8/10", "16/25", "4/25"],
        correctAnswer: "16/25",
        explanation: "(4/5)² = (4/5)(4/5) = 16/25. To square a fraction, square both the numerator and denominator. 🧮",
        wrongAnswerExplanations: {
            "4²/5²": "This equals 16/25, which is correct, but isn't simplified numerically.",
            "8/10": "This is (4/5) × 2, not (4/5)².",
            "4/25": "This is 4/5², not (4/5)²."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch13_t1_qm15',
        type: "mcq",
        question: "What is 7⁰ + 8⁰?",
        options: ["0", "1", "2", "15"],
        correctAnswer: "2",
        explanation: "7⁰ + 8⁰ = 1 + 1 = 2. Any non-zero number raised to the power 0 equals 1. 📊",
        wrongAnswerExplanations: {
            "0": "Any non-zero number raised to 0 equals 1, not 0.",
            "1": "This would be the value if the question was 7⁰ × 8⁰, not 7⁰ + 8⁰.",
            "15": "This is 7 + 8, not 7⁰ + 8⁰."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch13_t1_qm16',
        type: "mcq",
        question: "What is the value of 5⁻¹ + 2⁻¹?",
        options: ["7⁻¹", "7/10", "3/10", "10/7"],
        correctAnswer: "7/10",
        explanation: "5⁻¹ + 2⁻¹ = 1/5 + 1/2 = 2/10 + 5/10 = 7/10. Convert to a common denominator and add. ➕",
        wrongAnswerExplanations: {
            "7⁻¹": "This equals 1/7, not 1/5 + 1/2.",
            "3/10": "This would be 1/5 - 1/10, not 1/5 + 1/2.",
            "10/7": "This is the reciprocal of the correct answer."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl7_ch13_t1_qm17',
        type: "mcq",
        question: "Express 4.5 × 10⁴ as a standard number.",
        options: ["4.5", "45,000", "450,000", "4,500"],
        correctAnswer: "45,000",
        explanation: "4.5 × 10⁴ = 4.5 × 10000 = 45,000. Move the decimal point 4 places right. 🔢",
        wrongAnswerExplanations: {
            "4.5": "This is 4.5 × 10⁰, not 4.5 × 10⁴.",
            "450,000": "This is 4.5 × 10⁵, not 4.5 × 10⁴.",
            "4,500": "This is 4.5 × 10³, not 4.5 × 10⁴."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch13_t1_qm18',
        type: "mcq",
        question: "If 2ᵏ = 64, what is the value of k?",
        options: ["6", "8", "32", "16"],
        correctAnswer: "6",
        explanation: "2ᵏ = 64 means 2ᵏ = 2⁶ (since 2⁶ = 64), therefore k = 6. We use powers of 2: 2¹ = 2, 2² = 4, 2³ = 8, 2⁴ = 16, 2⁵ = 32, 2⁶ = 64. 🔍",
        wrongAnswerExplanations: {
            "8": "2⁸ = 256, not 64.",
            "32": "This is the value of 2⁵, not k.",
            "16": "This is the value of 2⁴, not k."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch13_t1_qm19',
        type: "mcq",
        question: "What is the value of 2⁴ ÷ 2⁻³?",
        options: ["2", "2⁷", "2⁻⁷", "2¹"],
        correctAnswer: "2⁷",
        explanation: "2⁴ ÷ 2⁻³ = 2⁴⁻(⁻³) = 2⁴⁺³ = 2⁷. When dividing powers with the same base, subtract the exponents. ➗",
        wrongAnswerExplanations: {
            "2": "This is 2¹, not 2⁴ ÷ 2⁻³.",
            "2⁻⁷": "This would be 2⁻⁴ ÷ 2³, not 2⁴ ÷ 2⁻³.",
            "2¹": "This equals 2, which is 2⁴ ÷ 2³, not 2⁴ ÷ 2⁻³."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch13_t1_qm20',
        type: "mcq",
        question: "The mass of an electron is approximately 9.1 × 10⁻³¹ kg. What is this in standard form?",
        options: ["0.00000000000000000000000000000091 kg", "0.0000000000000000000000000000091 kg", "0.000000000000000000000000000091 kg", "91 × 10⁻³³ kg"],
        correctAnswer: "0.0000000000000000000000000000091 kg",
        explanation: "9.1 × 10⁻³¹ kg = 0.0000000000000000000000000000091 kg. Move the decimal point 31 places left. 🔬",
        wrongAnswerExplanations: {
            "0.00000000000000000000000000000091 kg": "This has 29 zeros, not 30.",
            "0.000000000000000000000000000091 kg": "This has 28 zeros, not 30.",
            "91 × 10⁻³³ kg": "This is not in standard form and isn't equal to 9.1 × 10⁻³¹ kg."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    }
];
