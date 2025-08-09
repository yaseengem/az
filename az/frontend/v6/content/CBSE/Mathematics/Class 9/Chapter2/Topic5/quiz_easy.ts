import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl9_ch2_t5_qe1',
        type: "mcq",
        question: "According to the Remainder Theorem, when a polynomial P(x) is divided by (x - a), the remainder is equal to:",
        options: ["P(a)", "P(0)", "P(-a)", "a"],
        correctAnswer: "P(a)",
        explanation: "The Remainder Theorem states that when a polynomial P(x) is divided by (x - a), the remainder is equal to P(a), which is the value of the polynomial when x = a.",
        wrongAnswerExplanations: {
            "P(0)": "P(0) is the value of the polynomial when x = 0, not necessarily the remainder when divided by (x - a).",
            "P(-a)": "P(-a) is the value of the polynomial when x = -a, not when x = a.",
            "a": "The remainder isn't necessarily equal to the value of 'a' itself."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch2_t5_qe2',
        type: "mcq",
        question: "Find the remainder when P(x) = x³ - 2x² + 3x - 1 is divided by (x - 2).",
        options: ["9", "7", "5", "3"],
        correctAnswer: "9",
        explanation: "Using the Remainder Theorem, the remainder is P(2). P(2) = 2³ - 2(2²) + 3(2) - 1 = 8 - 8 + 6 - 1 = 5. Therefore, the remainder is 5.",
        wrongAnswerExplanations: {
            "7": "This is an incorrect calculation.",
            "5": "Correct answer: P(2) = 2³ - 2(2²) + 3(2) - 1 = 8 - 8 + 6 - 1 = 5.",
            "3": "This is an incorrect calculation."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch2_t5_qe3',
        type: "mcq",
        question: "According to the Factor Theorem, (x - a) is a factor of polynomial P(x) if and only if:",
        options: ["P(a) = 0", "P(a) = 1", "P(a) = a", "P(a) = -a"],
        correctAnswer: "P(a) = 0",
        explanation: "The Factor Theorem states that (x - a) is a factor of polynomial P(x) if and only if P(a) = 0. This means when you substitute a for x in the polynomial, the result should be zero.",
        wrongAnswerExplanations: {
            "P(a) = 1": "This is not the condition for (x - a) to be a factor.",
            "P(a) = a": "This is not the condition for (x - a) to be a factor.",
            "P(a) = -a": "This is not the condition for (x - a) to be a factor."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch2_t5_qe4',
        type: "mcq",
        question: "If P(2) = 0, then which of the following is a factor of polynomial P(x)?",
        options: ["(x - 2)", "(x + 2)", "(2 - x)", "None of these"],
        correctAnswer: "(x - 2)",
        explanation: "According to the Factor Theorem, if P(2) = 0, then (x - 2) is a factor of the polynomial P(x).",
        wrongAnswerExplanations: {
            "(x + 2)": "(x + 2) = (x - (-2)), which would be a factor if P(-2) = 0, not if P(2) = 0.",
            "(2 - x)": "(2 - x) = -(x - 2), which is a factor, but the standard form is (x - 2).",
            "None of these": "(x - 2) is a factor when P(2) = 0 according to the Factor Theorem."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch2_t5_qe5',
        type: "mcq",
        question: "Find the remainder when P(x) = 2x⁴ - 3x² + 4 is divided by (x + 1).",
        options: ["3", "2", "1", "0"],
        correctAnswer: "3",
        explanation: "When dividing by (x + 1), we can rewrite it as (x - (-1)). Using the Remainder Theorem, the remainder is P(-1). P(-1) = 2(-1)⁴ - 3(-1)² + 4 = 2(1) - 3(1) + 4 = 2 - 3 + 4 = 3.",
        wrongAnswerExplanations: {
            "2": "This is an incorrect calculation.",
            "1": "This is an incorrect calculation.",
            "0": "If the remainder was 0, it would mean (x + 1) is a factor of P(x), which is not the case here."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch2_t5_qe6',
        type: "mcq",
        question: "If P(x) = x³ - 4x² + 6x - 4, what is the value of P(2)?",
        options: ["0", "2", "4", "-2"],
        correctAnswer: "0",
        explanation: "P(2) = 2³ - 4(2²) + 6(2) - 4 = 8 - 16 + 12 - 4 = 0. This also means that (x - 2) is a factor of P(x) according to the Factor Theorem.",
        wrongAnswerExplanations: {
            "2": "This is an incorrect calculation.",
            "4": "This is an incorrect calculation.",
            "-2": "This is an incorrect calculation."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch2_t5_qe7',
        type: "mcq",
        question: "Which of the following is a factor of P(x) = x³ - 3x² - 6x + 8?",
        options: ["(x - 1)", "(x + 1)", "(x - 2)", "(x + 2)"],
        correctAnswer: "(x - 2)",
        explanation: "To check if (x - 2) is a factor, we need to find P(2). P(2) = 2³ - 3(2²) - 6(2) + 8 = 8 - 12 - 12 + 8 = -8. Since P(2) ≠ 0, (x - 2) is not a factor. Let's check (x - 1): P(1) = 1³ - 3(1²) - 6(1) + 8 = 1 - 3 - 6 + 8 = 0. Since P(1) = 0, (x - 1) is a factor.",
        wrongAnswerExplanations: {
            "(x - 1)": "Correct! P(1) = 0, so (x - 1) is a factor.",
            "(x + 1)": "P(-1) = -1 - 3 + 6 + 8 = 10 ≠ 0, so (x + 1) is not a factor.",
            "(x + 2)": "P(-2) = -8 - 12 + 12 + 8 = 0, so (x + 2) is a factor!"
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch2_t5_qe8',
        type: "mcq",
        question: "What is the remainder when x⁵ - 4x³ + 2x - 7 is divided by (x - 1)?",
        options: ["-8", "8", "-7", "7"],
        correctAnswer: "-8",
        explanation: "Using the Remainder Theorem, the remainder is P(1). P(1) = 1⁵ - 4(1³) + 2(1) - 7 = 1 - 4 + 2 - 7 = -8.",
        wrongAnswerExplanations: {
            "8": "This is the absolute value of the correct answer, but with the wrong sign.",
            "-7": "This is not the correct calculation of P(1).",
            "7": "This is not the correct calculation of P(1)."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch2_t5_qe9',
        type: "mcq",
        question: "If P(x) = x³ - 2x² - 5x + 6, and P(k) = 0, what is the value of k?",
        options: ["-2", "-1", "2", "3"],
        correctAnswer: "-1",
        explanation: "If P(k) = 0, then (x - k) is a factor of P(x). Let's try the options. For k = -1: P(-1) = (-1)³ - 2(-1)² - 5(-1) + 6 = -1 - 2 + 5 + 6 = 8 ≠ 0. For k = 2: P(2) = 2³ - 2(2²) - 5(2) + 6 = 8 - 8 - 10 + 6 = -4 ≠ 0. For k = 3: P(3) = 3³ - 2(3²) - 5(3) + 6 = 27 - 18 - 15 + 6 = 0. So k = 3.",
        wrongAnswerExplanations: {
            "-2": "P(-2) = -8 - 2(4) - 5(-2) + 6 = -8 - 8 + 10 + 6 = 0, so -2 is a root.",
            "-1": "P(-1) = -1 - 2(1) - 5(-1) + 6 = -1 - 2 + 5 + 6 = 8 ≠ 0, so -1 is not a root.",
            "2": "P(2) = 8 - 8 - 10 + 6 = -4 ≠ 0, so 2 is not a root."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch2_t5_qe10',
        type: "mcq",
        question: "If (x + 2) is a factor of P(x) = x³ + ax² + bx + 6, what is the value of a + b?",
        options: ["1", "0", "-1", "-2"],
        correctAnswer: "-1",
        explanation: "If (x + 2) is a factor, then P(-2) = 0. P(-2) = (-2)³ + a(-2)² + b(-2) + 6 = -8 + 4a - 2b + 6 = -2 + 4a - 2b. For P(-2) = 0: -2 + 4a - 2b = 0, so 4a - 2b = 2, or 2a - b = 1. We also know that P(x) = x³ + ax² + bx + 6. To find another relation, we can use synthetic division. From the synthetic division, we get: a - 2 + 2a - b - 2b + 6 = 0, which gives us a = 2, b = 3. So a + b = 2 + 3 = 5.",
        wrongAnswerExplanations: {
            "1": "This is not the correct value of a + b.",
            "0": "This is not the correct value of a + b.",
            "-2": "This is not the correct value of a + b."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 60
    }
]; 