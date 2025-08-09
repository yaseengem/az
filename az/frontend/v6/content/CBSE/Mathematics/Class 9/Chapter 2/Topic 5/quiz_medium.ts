import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl9_ch2_t5_qm1',
        type: "mcq",
        question: "If a polynomial P(x) leaves remainders 5 and 9 when divided by (x - 1) and (x - 2) respectively, what is the remainder when P(x) is divided by (x - 1)(x - 2)?",
        options: ["5(x - 2) + 9(x - 1)", "5(x - 1) + 9(x - 2)", "5(x - 2) - 9(x - 1)", "9(x - 2) - 5(x - 1)"],
        correctAnswer: "5(x - 2) + 9(x - 1)",
        explanation: "When a polynomial P(x) is divided by (x - 1)(x - 2), the remainder is of the form ax + b. By the Remainder Theorem, when divided by (x - 1), the remainder is P(1) = 5, and when divided by (x - 2), the remainder is P(2) = 9. This gives us a system of equations: a(1) + b = 5 and a(2) + b = 9. Solving, we get a = 4 and b = 1, so the remainder is 4x + 1 = 5(x - 2) + 9(x - 1) - 4(x - 1)(x - 2).",
        wrongAnswerExplanations: {
            "5(x - 1) + 9(x - 2)": "This is not the correct form of the remainder.",
            "5(x - 2) - 9(x - 1)": "This does not satisfy the conditions P(1) = 5 and P(2) = 9.",
            "9(x - 2) - 5(x - 1)": "This does not satisfy the conditions P(1) = 5 and P(2) = 9."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 90
    },
    {
        id: 'cl9_ch2_t5_qm2',
        type: "mcq",
        question: "If x³ + px² + qx + r is divisible by (x - a)², then:",
        options: [
            "P(a) = 0 and P'(a) = 0",
            "P(a) = 0 only",
            "P'(a) = 0 only",
            "P(a) ≠ 0 and P'(a) ≠ 0"
        ],
        correctAnswer: "P(a) = 0 and P'(a) = 0",
        explanation: "If a polynomial P(x) is divisible by (x - a)², then (x - a) is a repeated factor. This means not only is P(a) = 0 (by the Factor Theorem), but also the derivative P'(a) = 0. This is because when a factor repeats, both the polynomial and its derivative evaluate to 0 at that point.",
        wrongAnswerExplanations: {
            "P(a) = 0 only": "This is necessary but not sufficient for (x - a)² to be a factor. The derivative P'(a) must also equal 0.",
            "P'(a) = 0 only": "This is not sufficient. P(a) must also equal 0 for (x - a) to be a factor at all.",
            "P(a) ≠ 0 and P'(a) ≠ 0": "If P(a) ≠ 0, then (x - a) is not a factor, so (x - a)² cannot be a factor."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 90
    },
    {
        id: 'cl9_ch2_t5_qm3',
        type: "mcq",
        question: "Find the value of k if (x - 2) is a factor of P(x) = x³ - kx² + 2x - 4.",
        options: ["6", "8", "4", "10"],
        correctAnswer: "6",
        explanation: "If (x - 2) is a factor of P(x), then P(2) = 0. P(2) = 2³ - k(2²) - 2(2) - 4 = 8 - 4k + 4 - 4 = 8 - 4k. For P(2) = 0: 8 - 4k = 0, so 4k = 8, which gives k = 2.",
        wrongAnswerExplanations: {
            "8": "This value does not make P(2) = 0.",
            "4": "This value does not make P(2) = 0.",
            "10": "This value does not make P(2) = 0."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 90
    },
    {
        id: 'cl9_ch2_t5_qm4',
        type: "mcq",
        question: "If P(x) = ax³ + bx² + cx + d has (x - 1) and (x + 2) as factors, and P(2) = 12, find the value of a + b + c + d.",
        options: ["6", "5", "4", "3"],
        correctAnswer: "6",
        explanation: "Since (x - 1) and (x + 2) are factors, P(1) = 0 and P(-2) = 0. This gives: a(1)³ + b(1)² + c(1) + d = 0, so a + b + c + d = 0, and a(-2)³ + b(-2)² + c(-2) + d = 0, so -8a + 4b - 2c + d = 0. Also, P(2) = 12, so 8a + 4b + 2c + d = 12. From these three equations, we can deduce that a = 1, b = 2, c = 3, and d = -6. Therefore, a + b + c + d = 1 + 2 + 3 - 6 = 0.",
        wrongAnswerExplanations: {
            "5": "This is not the correct value of a + b + c + d based on the given conditions.",
            "4": "This is not the correct value of a + b + c + d based on the given conditions.",
            "3": "This is not the correct value of a + b + c + d based on the given conditions."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 90
    },
    {
        id: 'cl9_ch2_t5_qm5',
        type: "mcq",
        question: "If (x² + 1) is a factor of P(x) = x⁴ + ax² + b, find the values of a and b.",
        options: ["a = -2, b = 1", "a = 0, b = 1", "a = 2, b = 1", "a = 1, b = 1"],
        correctAnswer: "a = 0, b = 1",
        explanation: "If (x² + 1) is a factor of P(x) = x⁴ + ax² + b, then P(x) = (x² + 1)(x² + c) for some value c. Expanding: P(x) = x⁴ + cx² + x² + c = x⁴ + (c + 1)x² + c. Comparing coefficients with P(x) = x⁴ + ax² + b, we get: c + 1 = a and c = b. This gives b = c and a = b + 1. Now, we need another condition. Since x² + 1 has no real roots (it equals 0 only when x = ±i), we can use the fact that P(i) = 0 if (x² + 1) is a factor. P(i) = (i)⁴ + a(i)² + b = 1 + a(-1) + b = 1 - a + b. For P(i) = 0: 1 - a + b = 0, so a = 1 + b. Combined with our earlier result a = b + 1, we get b = 1 and a = 2.",
        wrongAnswerExplanations: {
            "a = -2, b = 1": "These values don't make (x² + 1) a factor of P(x).",
            "a = 2, b = 1": "These are the correct values. If we expand (x² + 1)(x² + 1), we get x⁴ + 2x² + 1.",
            "a = 1, b = 1": "These values don't make (x² + 1) a factor of P(x)."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 90
    },
    {
        id: 'cl9_ch2_t5_qm6',
        type: "mcq",
        question: "If P(x) = x³ - 3x² + kx + 2 has (x - 2) as a factor, find the value of k.",
        options: ["10", "5", "-5", "-10"],
        correctAnswer: "-5",
        explanation: "If (x - 2) is a factor of P(x), then P(2) = 0. P(2) = 2³ - 3(2²) + k(2) + 2 = 8 - 12 + 2k + 2 = -2 + 2k. For P(2) = 0: -2 + 2k = 0, so 2k = 2, which gives k = 1.",
        wrongAnswerExplanations: {
            "10": "This value does not make P(2) = 0.",
            "5": "This value does not make P(2) = 0.",
            "-10": "This value does not make P(2) = 0."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 90
    },
    {
        id: 'cl9_ch2_t5_qm7',
        type: "mcq",
        question: "If P(x) = 2x³ - 3x² - 3x + 2 and P(k) = 0, find one value of k.",
        options: ["1", "-1", "2", "-2"],
        correctAnswer: "1",
        explanation: "To find a value of k where P(k) = 0, let's try direct substitution with some of the given options. For k = 1: P(1) = 2(1)³ - 3(1)² - 3(1) + 2 = 2 - 3 - 3 + 2 = -2 ≠ 0. For k = -1: P(-1) = 2(-1)³ - 3(-1)² - 3(-1) + 2 = -2 - 3 + 3 + 2 = 0. Therefore, k = -1 is a root of P(x).",
        wrongAnswerExplanations: {
            "1": "P(1) = 2 - 3 - 3 + 2 = -2 ≠ 0, so 1 is not a root.",
            "2": "P(2) = 2(8) - 3(4) - 3(2) + 2 = 16 - 12 - 6 + 2 = 0, so 2 is a root!",
            "-2": "P(-2) = 2(-8) - 3(4) - 3(-2) + 2 = -16 - 12 + 6 + 2 = -20 ≠ 0, so -2 is not a root."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 90
    },
    {
        id: 'cl9_ch2_t5_qm8',
        type: "mcq",
        question: "Given that x - 1 is a factor of P(x) = x³ - 3x² + ax - b, and P(3) = 4, find the value of a + b.",
        options: ["14", "10", "8", "6"],
        correctAnswer: "14",
        explanation: "Since x - 1 is a factor of P(x), we know that P(1) = 0. This gives: 1³ - 3(1)² + a(1) - b = 0, so 1 - 3 + a - b = 0, which means a - b = 2. Also, P(3) = 4, so 3³ - 3(3)² + a(3) - b = 4, which gives 27 - 27 + 3a - b = 4, so 3a - b = 4. Solving these equations: a - b = 2 and 3a - b = 4, we get 2a = 2, so a = 1, and thus b = -1. Therefore, a + b = 1 + (-1) = 0.",
        wrongAnswerExplanations: {
            "10": "This is not the correct value of a + b based on the given conditions.",
            "8": "This is not the correct value of a + b based on the given conditions.",
            "6": "This is not the correct value of a + b based on the given conditions."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 90
    },
    {
        id: 'cl9_ch2_t5_qm9',
        type: "mcq",
        question: "If the polynomial P(x) = x³ - 6x² + kx + 12 is divisible by (x - 3), find the value of k.",
        options: ["11", "9", "7", "5"],
        correctAnswer: "9",
        explanation: "If P(x) is divisible by (x - 3), then P(3) = 0. P(3) = 3³ - 6(3)² + k(3) + 12 = 27 - 54 + 3k + 12 = -15 + 3k. For P(3) = 0: -15 + 3k = 0, so 3k = 15, which gives k = 5.",
        wrongAnswerExplanations: {
            "11": "This value does not make P(3) = 0.",
            "7": "This value does not make P(3) = 0.",
            "5": "P(3) = 27 - 54 + 5(3) + 12 = -15 + 15 = 0, so k = 5 is correct!"
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 90
    },
    {
        id: 'cl9_ch2_t5_qm10',
        type: "mcq",
        question: "What is the remainder when P(x) = x^100 + x^50 + 1 is divided by (x - 1)?",
        options: ["0", "1", "2", "3"],
        correctAnswer: "3",
        explanation: "Using the Remainder Theorem, the remainder when P(x) is divided by (x - 1) is P(1). P(1) = 1^100 + 1^50 + 1 = 1 + 1 + 1 = 3.",
        wrongAnswerExplanations: {
            "0": "If the remainder was 0, it would mean (x - 1) is a factor of P(x), which is not the case here.",
            "1": "This is not the correct calculation of P(1).",
            "2": "This is not the correct calculation of P(1)."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 90
    }
]; 