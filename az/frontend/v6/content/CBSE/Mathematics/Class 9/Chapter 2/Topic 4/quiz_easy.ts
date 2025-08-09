import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl9_ch2_t4_qe1',
        type: "mcq",
        question: "What is the sum of the polynomials P(x) = 3x² + 2x - 5 and Q(x) = 2x² - 3x + 4?",
        options: ["5x² - x - 1", "5x² - x - 9", "5x² - x + 9", "x² - x - 1"],
        correctAnswer: "5x² - x - 1",
        explanation: "To add polynomials, we combine like terms. Adding P(x) and Q(x): (3x² + 2x - 5) + (2x² - 3x + 4) = (3x² + 2x²) + (2x - 3x) + (-5 + 4) = 5x² - x - 1. 🧮",
        wrongAnswerExplanations: {
            "5x² - x - 9": "This incorrectly calculates the constant term as -9 instead of -1.",
            "5x² - x + 9": "This incorrectly calculates the constant term as +9 instead of -1.",
            "x² - x - 1": "This incorrectly calculates the coefficient of x² as 1 instead of 5."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch2_t4_qe2',
        type: "mcq",
        question: "What is the difference P(x) - Q(x) when P(x) = 4x² + 3x - 2 and Q(x) = 2x² - x + 3?",
        options: ["2x² + 4x - 5", "2x² + 2x - 5", "6x² + 2x - 5", "2x² + 4x + 1"],
        correctAnswer: "2x² + 4x - 5",
        explanation: "To subtract Q(x) from P(x), we change the sign of each term in Q(x) and then add: (4x² + 3x - 2) - (2x² - x + 3) = 4x² + 3x - 2 - 2x² + x - 3 = (4x² - 2x²) + (3x + x) + (-2 - 3) = 2x² + 4x - 5. 📝",
        wrongAnswerExplanations: {
            "2x² + 2x - 5": "This incorrectly calculates the coefficient of x as 2 instead of 4.",
            "6x² + 2x - 5": "This incorrectly adds the coefficients of x² instead of subtracting.",
            "2x² + 4x + 1": "This incorrectly calculates the constant term as +1 instead of -5."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch2_t4_qe3',
        type: "mcq",
        question: "Simplify the expression: (2x + 3) + (x - 5) - (3x - 2)",
        options: ["0", "x", "0x", "x + 0"],
        correctAnswer: "0",
        explanation: "We combine like terms: (2x + 3) + (x - 5) - (3x - 2) = 2x + 3 + x - 5 - 3x + 2 = (2x + x - 3x) + (3 - 5 + 2) = 0x + 0 = 0. All terms cancel out, resulting in 0. 🔢",
        wrongAnswerExplanations: {
            "x": "The coefficient of x is (2 + 1 - 3) = 0, not 1.",
            "0x": "While this is technically correct (0x = 0), the simplest form is just 0.",
            "x + 0": "The coefficient of x is 0, not 1."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch2_t4_qe4',
        type: "mcq",
        question: "What is the product of 2x and (3x² - 4x + 5)?",
        options: ["6x³ - 8x² + 10x", "6x² - 8x + 10", "6x³ - 8x² + 5x", "6x² - 8x + 5"],
        correctAnswer: "6x³ - 8x² + 10x",
        explanation: "To multiply a monomial by a polynomial, we multiply each term of the polynomial by the monomial: 2x × (3x² - 4x + 5) = 2x × 3x² - 2x × 4x + 2x × 5 = 6x³ - 8x² + 10x. 🔢",
        wrongAnswerExplanations: {
            "6x² - 8x + 10": "This incorrectly calculates the exponents. When multiplying x terms, exponents add.",
            "6x³ - 8x² + 5x": "This incorrectly calculates 2x × 5 as 5x instead of 10x.",
            "6x² - 8x + 5": "This has both incorrect exponents and an incorrect calculation of 2x × 5."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch2_t4_qe5',
        type: "mcq",
        question: "Multiply (x + 3) by (x - 2)",
        options: ["x² + x - 6", "x² - 2x - 3", "x² + x - 3", "x² + x + 6"],
        correctAnswer: "x² + x - 6",
        explanation: "Using the distributive property or the FOIL method (First, Outer, Inner, Last): (x + 3)(x - 2) = x² - 2x + 3x - 6 = x² + x - 6. 📊",
        wrongAnswerExplanations: {
            "x² - 2x - 3": "This incorrectly calculates the middle term as -2x instead of +x.",
            "x² + x - 3": "This incorrectly calculates the constant term as -3 instead of -6.",
            "x² + x + 6": "This incorrectly calculates the constant term as +6 instead of -6."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch2_t4_qe6',
        type: "mcq",
        question: "Simplify: (3x + 2)(x - 1)",
        options: ["3x² - 3x + 2x - 2", "3x² - x - 2", "3x² + 2x - 3", "3x² - x - 3"],
        correctAnswer: "3x² - x - 2",
        explanation: "Using the FOIL method: (3x + 2)(x - 1) = 3x × x + 3x × (-1) + 2 × x + 2 × (-1) = 3x² - 3x + 2x - 2 = 3x² - x - 2. 🧮",
        wrongAnswerExplanations: {
            "3x² - 3x + 2x - 2": "This is the expanded form before combining like terms.",
            "3x² + 2x - 3": "This incorrectly calculates the constant term as -3 instead of -2.",
            "3x² - x - 3": "This incorrectly calculates the constant term as -3 instead of -2."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch2_t4_qe7',
        type: "mcq",
        question: "What is the product (x + 2)²?",
        options: ["x² + 4x + 4", "x² + 4", "2x² + 4", "x² + 2x + 4"],
        correctAnswer: "x² + 4x + 4",
        explanation: "Using the formula (a + b)² = a² + 2ab + b²: (x + 2)² = x² + 2(x)(2) + 2² = x² + 4x + 4. 📐",
        wrongAnswerExplanations: {
            "x² + 4": "This neglects the middle term 2ab = 4x.",
            "2x² + 4": "This incorrectly doubles the x² term and neglects the middle term.",
            "x² + 2x + 4": "This incorrectly calculates the middle term as 2x instead of 4x."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch2_t4_qe8',
        type: "mcq",
        question: "Evaluate (x - 3)²",
        options: ["x² - 6x + 9", "x² - 9", "x² - 3x - 9", "x² + 6x + 9"],
        correctAnswer: "x² - 6x + 9",
        explanation: "Using the formula (a - b)² = a² - 2ab + b²: (x - 3)² = x² - 2(x)(3) + 3² = x² - 6x + 9. 🔢",
        wrongAnswerExplanations: {
            "x² - 9": "This neglects the middle term -2ab = -6x.",
            "x² - 3x - 9": "This incorrectly calculates the middle term as -3x instead of -6x and the constant term as -9 instead of +9.",
            "x² + 6x + 9": "This incorrectly calculates the middle term as +6x instead of -6x."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch2_t4_qe9',
        type: "mcq",
        question: "What is the product of (x + 4)(x - 4)?",
        options: ["x² - 16", "x² - 8x + 16", "x² + 16", "x² + 8x + 16"],
        correctAnswer: "x² - 16",
        explanation: "Using the formula (a + b)(a - b) = a² - b²: (x + 4)(x - 4) = x² - 4² = x² - 16. This special pattern results in the elimination of the middle term. 📊",
        wrongAnswerExplanations: {
            "x² - 8x + 16": "This is the expansion of (x - 4)², not (x + 4)(x - 4).",
            "x² + 16": "This incorrectly calculates the constant term as +16 instead of -16.",
            "x² + 8x + 16": "This is the expansion of (x + 4)², not (x + 4)(x - 4)."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch2_t4_qe10',
        type: "mcq",
        question: "Evaluate (2x - 1)²",
        options: ["4x² - 4x + 1", "4x² - 1", "4x² - 2x + 1", "4x² + 4x + 1"],
        correctAnswer: "4x² - 4x + 1",
        explanation: "Using the formula (a - b)² = a² - 2ab + b²: (2x - 1)² = (2x)² - 2(2x)(1) + 1² = 4x² - 4x + 1. 📝",
        wrongAnswerExplanations: {
            "4x² - 1": "This neglects the middle term -2ab = -4x.",
            "4x² - 2x + 1": "This incorrectly calculates the middle term as -2x instead of -4x.",
            "4x² + 4x + 1": "This incorrectly calculates the middle term as +4x instead of -4x."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    }
]; 