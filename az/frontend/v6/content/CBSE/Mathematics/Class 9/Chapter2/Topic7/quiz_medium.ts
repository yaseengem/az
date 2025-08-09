
import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl9_ch2_t7_qm1',
        type: "mcq",
        question: "What is the factorized form of x³ - 27?",
        options: ["(x - 3)(x² + 3x + 9)", "(x - 3)(x² - 3x + 9)", "(x + 3)(x² - 3x + 9)", "(x + 3)(x² + 3x + 9)"],
        correctAnswer: "(x - 3)(x² + 3x + 9)",
        explanation: "x³ - 27 is a difference of cubes: x³ - 3³. Using the identity a³ - b³ = (a - b)(a² + ab + b²), we get (x - 3)(x² + x·3 + 3²) = (x - 3)(x² + 3x + 9). This identity is essential for factorizing difference of cubes expressions. 🧮",
        wrongAnswerExplanations: {
            "(x - 3)(x² - 3x + 9)": "This expands to x³ - 3x² - 3x² + 9x + 9x - 27 = x³ - 6x² + 18x - 27, not x³ - 27.",
            "(x + 3)(x² - 3x + 9)": "This expands to x³ - 3x² + 9x + 3x² - 9x + 27 = x³ + 27, not x³ - 27.",
            "(x + 3)(x² + 3x + 9)": "This expands to x³ + 3x² + 9x + 3x² + 9x + 27 = x³ + 6x² + 18x + 27, not x³ - 27."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch2_t7_qm2',
        type: "mcq",
        question: "If one zero of the polynomial P(x) = x² - 7x + 12 is 3, what is the other zero?",
        options: ["4", "5", "6", "-3"],
        correctAnswer: "4",
        explanation: "If 3 is a zero, then (x - 3) is a factor of P(x). Let's write P(x) = (x - 3)(x - k) and expand: (x - 3)(x - k) = x² - kx - 3x + 3k = x² - (k+3)x + 3k. Comparing with P(x) = x² - 7x + 12, we get k+3 = 7 and 3k = 12, which gives k = 4. So the other zero is 4. 📊",
        wrongAnswerExplanations: {
            "5": "If the zeros were 3 and 5, the polynomial would be (x - 3)(x - 5) = x² - 8x + 15, not x² - 7x + 12.",
            "6": "If the zeros were 3 and 6, the polynomial would be (x - 3)(x - 6) = x² - 9x + 18, not x² - 7x + 12.",
            "-3": "If the zeros were 3 and -3, the polynomial would be (x - 3)(x + 3) = x² - 9, not x² - 7x + 12."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch2_t7_qm3',
        type: "mcq",
        question: "Which of the following is the expansion of (2x - 3y)²?",
        options: ["4x² - 6xy + 9y²", "4x² - 12xy + 9y²", "4x² + 12xy + 9y²", "4x² - 9y²"],
        correctAnswer: "4x² - 12xy + 9y²",
        explanation: "Using the identity (a - b)² = a² - 2ab + b², with a = 2x and b = 3y: (2x - 3y)² = (2x)² - 2(2x)(3y) + (3y)² = 4x² - 12xy + 9y². This demonstrates the application of the perfect square identity for a difference. 📐",
        wrongAnswerExplanations: {
            "4x² - 6xy + 9y²": "This is incorrect. The middle term should be -12xy, not -6xy.",
            "4x² + 12xy + 9y²": "This is (2x + 3y)², not (2x - 3y)².",
            "4x² - 9y²": "This is (2x + 3y)(2x - 3y), not (2x - 3y)²."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch2_t7_qm4',
        type: "mcq",
        question: "For what value of k is x - 1 a factor of the polynomial P(x) = x³ - 3x² + kx - 6?",
        options: ["4", "5", "8", "10"],
        correctAnswer: "8",
        explanation: "For (x - 1) to be a factor of P(x), P(1) must equal 0. P(1) = 1³ - 3(1)² + k(1) - 6 = 1 - 3 + k - 6 = k - 8. For P(1) = 0, we need k - 8 = 0, which gives k = 8. This applies the Factor Theorem to find the value of the coefficient. 🔍",
        wrongAnswerExplanations: {
            "4": "When k = 4, P(1) = 1 - 3 + 4 - 6 = -4, not 0.",
            "5": "When k = 5, P(1) = 1 - 3 + 5 - 6 = -3, not 0.",
            "10": "When k = 10, P(1) = 1 - 3 + 10 - 6 = 2, not 0."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch2_t7_qm5',
        type: "mcq",
        question: "If P(x) = x³ - 3x² + 3x - 5, what is the remainder when P(x) is divided by (x - 2)?",
        options: ["-3", "0", "3", "5"],
        correctAnswer: "-3",
        explanation: "By the Remainder Theorem, when P(x) is divided by (x - a), the remainder equals P(a). So for (x - 2), the remainder is P(2) = 2³ - 3(2²) - 3(2) - 5 = 8 - 3(4) - 6 - 5 = 8 - 12 - 6 - 5 = -15. This demonstrates the practical application of the Remainder Theorem. 🧮",
        wrongAnswerExplanations: {
            "-3": "This is incorrect. Double-check your calculation of P(2).",
            "0": "If the remainder were 0, then (x - 2) would be a factor of P(x), which is not the case.",
            "3": "This is incorrect. Double-check your calculation of P(2).",
            "5": "This is incorrect. Double-check your calculation of P(2)."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch2_t7_qm6',
        type: "mcq",
        question: "Which of the following is the correct factorization of x² + 6x + 9 - y²?",
        options: ["(x + 3 + y)(x + 3 - y)", "(x + 3)² - y²", "(x + 3 - y)(x + 3 + y)", "(x + 3)² - y"],
        correctAnswer: "(x + 3 + y)(x + 3 - y)",
        explanation: "First, recognize that x² + 6x + 9 = (x + 3)². So the expression becomes (x + 3)² - y². Using the identity a² - b² = (a + b)(a - b) with a = (x + 3) and b = y, we get (x + 3 + y)(x + 3 - y). This demonstrates combining multiple algebraic identities to factorize complex expressions. 📝",
        wrongAnswerExplanations: {
            "(x + 3)² - y²": "This is not factorized completely. It's an intermediate step.",
            "(x + 3 - y)(x + 3 + y)": "This is the same as the correct answer, just written in a different order.",
            "(x + 3)² - y": "This is incorrect. The expression is (x + 3)² - y², not (x + 3)² - y."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch2_t7_qm7',
        type: "mcq",
        question: "What is the quotient when x³ - 7x + 6 is divided by (x - 2)?",
        options: ["x² + 2x - 3", "x² + 2x + 3", "x² - 2x - 3", "x² + 2x - 4"],
        correctAnswer: "x² + 2x - 3",
        explanation: "We can use synthetic division to find the quotient when dividing by (x - 2). Set up the division with coefficients [1, 0, -7, 6] and divisor 2:\n2 | 1  0  -7   6\n   |    2   4  -6\n   | 1  2  -3    0\nThe quotient is therefore x² + 2x - 3 (the bottom row except for the remainder). This is an application of polynomial division methods. 🔢",
        wrongAnswerExplanations: {
            "x² + 2x + 3": "This is incorrect. Double-check your synthetic division.",
            "x² - 2x - 3": "This is incorrect. Double-check your synthetic division.",
            "x² + 2x - 4": "This is incorrect. Double-check your synthetic division."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch2_t7_qm8',
        type: "mcq",
        question: "Which of the following expressions equals (a + b)³ - (a - b)³?",
        options: ["2a³", "2b³", "6ab²", "6a²b"],
        correctAnswer: "6a²b",
        explanation: "Using the identities (a + b)³ = a³ + 3a²b + 3ab² + b³ and (a - b)³ = a³ - 3a²b + 3ab² - b³, we get (a + b)³ - (a - b)³ = a³ + 3a²b + 3ab² + b³ - (a³ - 3a²b + 3ab² - b³) = a³ + 3a²b + 3ab² + b³ - a³ + 3a²b - 3ab² + b³ = 6a²b + 2b³. This demonstrates combining and simplifying algebraic identities. 📊",
        wrongAnswerExplanations: {
            "2a³": "This is incorrect. The a³ terms cancel out in the subtraction.",
            "2b³": "This is partially correct, but the complete answer includes 6a²b as well.",
            "6ab²": "This is incorrect. The ab² terms cancel out in the subtraction."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch2_t7_qm9',
        type: "mcq",
        question: "How many real zeros does the polynomial P(x) = x² + 4 have?",
        options: ["0", "1", "2", "Infinite"],
        correctAnswer: "0",
        explanation: "The polynomial P(x) = x² + 4 can be written as x² + 2² (where 2² = 4). This is the sum of squares, which cannot be factored using real numbers. Since this polynomial equals 0 only when x² = -4, which has no real solutions, P(x) has no real zeros. This illustrates understanding polynomial behavior based on its form. 📈",
        wrongAnswerExplanations: {
            "1": "This is incorrect. The polynomial x² + 4 has no real zeros.",
            "2": "This is incorrect. The polynomial x² + 4 has no real zeros.",
            "Infinite": "This is incorrect. A non-zero polynomial of degree n can have at most n zeros."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch2_t7_qm10',
        type: "mcq",
        question: "Which of the following polynomials has x = 2 and x = -3 as its zeros?",
        options: ["x² + x - 6", "x² - x - 6", "x² + x + 6", "x² - x + 6"],
        correctAnswer: "x² + x - 6",
        explanation: "If x = 2 and x = -3 are zeros, then (x - 2) and (x + 3) are factors of the polynomial. So the polynomial is (x - 2)(x + 3) = x² + 3x - 2x - 6 = x² + x - 6. This demonstrates constructing a polynomial from its zeros. 🧮",
        wrongAnswerExplanations: {
            "x² - x - 6": "This factors as (x - 3)(x + 2), so its zeros are x = 3 and x = -2, not x = 2 and x = -3.",
            "x² + x + 6": "This cannot be factored using real numbers and has no real zeros.",
            "x² - x + 6": "This cannot be factored using real numbers and has no real zeros."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 60
    }
]; 