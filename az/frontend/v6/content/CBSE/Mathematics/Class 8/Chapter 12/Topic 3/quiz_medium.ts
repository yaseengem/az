// filepath: content/CBSE/Mathematics/Class 8/Chapter12/Topic3/quiz_medium.ts
import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl8_ch12_t3_qm1',
        type: "mcq",
        question: "If (ax² + bx + c) ÷ x = px + q, what are p and q in terms of a, b, and c?",
        options: ["p = a, q = b + c", "p = a, q = b", "p = b, q = c/x", "p = a, q = c/x"],
        correctAnswer: "p = a, q = c/x",
        explanation: "When dividing by x, ax²/x = ax, bx/x = b, and c/x = c/x. So the result is ax + b + c/x. Comparing with px + q, we get p = a and q = c/x. 🧮",
        wrongAnswerExplanations: {
            "p = a, q = b + c": "The constant term c when divided by x gives c/x, not c.",
            "p = a, q = b": "This ignores what happens to the constant term c when divided by x.",
            "p = b, q = c/x": "The coefficient of x should be a, not b."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl8_ch12_t3_qm2',
        type: "mcq",
        question: "What is (x³y² + 2x²y² - xy²) ÷ (xy)?",
        options: ["x² + 2x - 1", "x²y + 2xy - y", "x² + 2x - y", "x²y + 2x - 1"],
        correctAnswer: "x² + 2x - 1",
        explanation: "Divide each term by xy: x³y²/(xy) = x², 2x²y²/(xy) = 2x, and -xy²/(xy) = -1. Result is x² + 2x - 1. 📊",
        wrongAnswerExplanations: {
            "x²y + 2xy - y": "The y terms should cancel out in each term.",
            "x² + 2x - y": "The last term should be -1, not -y.",
            "x²y + 2x - 1": "The first term should not have y after division."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch12_t3_qm3',
        type: "mcq",
        question: "When dividing (4x³ - 2x² + 6x - 3) by x, which term requires special attention?",
        options: ["-2x²", "6x", "-3", "4x³"],
        correctAnswer: "-3",
        explanation: "The constant term -3 requires special attention because when divided by x, it becomes -3/x and cannot be simplified further. Other terms divide evenly by x. 🔍",
        wrongAnswerExplanations: {
            "-2x²": "This term divides evenly by x to give -2x.",
            "6x": "This term divides evenly by x to give 6.",
            "4x³": "This term divides evenly by x to give 4x²."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch12_t3_qm4',
        type: "mcq",
        question: "What is (6x⁴y³ - 3x³y³ + 9x²y³) ÷ (3x²y²)?",
        options: ["2x²y + x + 3", "2x²y - xy + 3y", "2x²y - x + 3", "2x² - x + 3y"],
        correctAnswer: "2x²y - xy + 3y",
        explanation: "Divide each term by 3x²y²: 6x⁴y³/(3x²y²) = 2x²y, -3x³y³/(3x²y²) = -xy, and 9x²y³/(3x²y²) = 3y. Result is 2x²y - xy + 3y. 🎯",
        wrongAnswerExplanations: {
            "2x²y + x + 3": "The y terms don't cancel completely in the last two terms.",
            "2x²y - x + 3": "The y terms don't cancel completely.",
            "2x² - x + 3y": "The first term should include y."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl8_ch12_t3_qm5',
        type: "mcq",
        question: "If (ax³ + bx² + cx + d) ÷ x² = px + q + r/x², what is r?",
        options: ["a", "b", "c", "d"],
        correctAnswer: "d",
        explanation: "When dividing by x², ax³/x² = ax, bx²/x² = b, cx/x² = c/x, and d/x² = d/x². Comparing with px + q + r/x², r = d. 🎨",
        wrongAnswerExplanations: {
            "a": "a becomes the coefficient of x in the quotient.",
            "b": "b becomes the constant term in the quotient.",
            "c": "c/x becomes part of the quotient."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl8_ch12_t3_qm6',
        type: "mcq",
        question: "What is (8x⁵y⁴ - 4x⁴y⁴ + 2x³y⁴) ÷ (2x²y²)?",
        options: ["4x³y² - 2x²y² + xy²", "4x³y² - 2x²y² + x", "4x³y - 2x²y + xy", "4x³ - 2x² + x"],
        correctAnswer: "4x³y² - 2x²y² + xy²",
        explanation: "Divide each term by 2x²y²: 8x⁵y⁴/(2x²y²) = 4x³y², -4x⁴y⁴/(2x²y²) = -2x²y², and 2x³y⁴/(2x²y²) = xy². Result is 4x³y² - 2x²y² + xy². 🎭",
        wrongAnswerExplanations: {
            "4x³y² - 2x²y² + x": "The last term should be xy².",
            "4x³y - 2x²y + xy": "The y exponents are incorrect.",
            "4x³ - 2x² + x": "The y terms don't cancel completely."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl8_ch12_t3_qm7',
        type: "mcq",
        question: "When dividing (px⁴ + qx³ + rx² + sx) by x², what type of terms appear in the quotient?",
        options: [
            "Only terms with x",
            "Terms with x² and x",
            "Terms with x² and constant terms",
            "Terms with x², x, and constant terms"
        ],
        correctAnswer: "Terms with x², x, and constant terms",
        explanation: "Dividing each term by x²: x⁴/x² = x², x³/x² = x, x²/x² = 1, and x/x² = 1/x. So we get terms with x², x, and constant terms. 🎪",
        wrongAnswerExplanations: {
            "Only terms with x": "We also get x² terms and constant terms.",
            "Terms with x² and x": "We also get constant terms.",
            "Terms with x² and constant terms": "We also get terms with x."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch12_t3_qm8',
        type: "mcq",
        question: "What is (12x⁶y⁵ - 6x⁵y⁵ + 3x⁴y⁵) ÷ (3x³y³)?",
        options: ["4x³y² - 2x²y² + xy²", "4x³y - 2x²y + xy", "4x³ - 2x² + x", "4x²y² - 2xy² + y²"],
        correctAnswer: "4x³y² - 2x²y² + xy²",
        explanation: "Divide each term by 3x³y³: 12x⁶y⁵/(3x³y³) = 4x³y², -6x⁵y⁵/(3x³y³) = -2x²y², and 3x⁴y⁵/(3x³y³) = xy². Result is 4x³y² - 2x²y² + xy². 📏",
        wrongAnswerExplanations: {
            "4x³y - 2x²y + xy": "The y exponents are incorrect.",
            "4x³ - 2x² + x": "The y terms don't cancel completely.",
            "4x²y² - 2xy² + y²": "The x exponents are incorrect."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl8_ch12_t3_qm9',
        type: "mcq",
        question: "If (ax³ + bx² + cx + d) ÷ (px + q) = mx² + nx + r, what determines the value of r?",
        options: [
            "Only the constant term d",
            "The coefficients c and q",
            "The remainder after division",
            "The coefficients b and p"
        ],
        correctAnswer: "The remainder after division",
        explanation: "When dividing a polynomial by px + q, r is the remainder after division. It depends on all coefficients a, b, c, d, p, and q. 🧩",
        wrongAnswerExplanations: {
            "Only the constant term d": "The remainder depends on all terms, not just d.",
            "The coefficients c and q": "The remainder depends on all coefficients.",
            "The coefficients b and p": "The remainder depends on all coefficients."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl8_ch12_t3_qm10',
        type: "mcq",
        question: "What is (15x⁷y⁶ - 9x⁶y⁶ + 6x⁵y⁶) ÷ (3x⁴y⁴)?",
        options: ["5x³y² - 3x²y² + 2xy²", "5x³y - 3x²y + 2xy", "5x³ - 3x² + 2x", "5x²y² - 3xy² + 2y²"],
        correctAnswer: "5x³y² - 3x²y² + 2xy²",
        explanation: "Divide each term by 3x⁴y⁴: 15x⁷y⁶/(3x⁴y⁴) = 5x³y², -9x⁶y⁶/(3x⁴y⁴) = -3x²y², and 6x⁵y⁶/(3x⁴y⁴) = 2xy². Result is 5x³y² - 3x²y² + 2xy². 🎯",
        wrongAnswerExplanations: {
            "5x³y - 3x²y + 2xy": "The y exponents are incorrect.",
            "5x³ - 3x² + 2x": "The y terms don't cancel completely.",
            "5x²y² - 3xy² + 2y²": "The x exponents are incorrect."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl8_ch12_t3_qm11',
        type: "mcq",
        question: "When dividing a polynomial by x², what happens to terms with degree less than 2?",
        options: [
            "They become zero",
            "They remain unchanged",
            "They become fractions with x in denominator",
            "They cannot be divided"
        ],
        correctAnswer: "They become fractions with x in denominator",
        explanation: "Terms with degree less than 2 (like x or constants) when divided by x² give fractions with x in denominator. For example, x/x² = 1/x and k/x² = k/x². 📊",
        wrongAnswerExplanations: {
            "They become zero": "Division by x² gives fractions, not zero.",
            "They remain unchanged": "They are divided by x², changing their form.",
            "They cannot be divided": "They can be divided, resulting in fractions."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch12_t3_qm12',
        type: "mcq",
        question: "What is (16x⁸y⁷ - 8x⁷y⁷ + 4x⁶y⁷) ÷ (4x⁵y⁵)?",
        options: ["4x³y² - 2x²y² + xy²", "4x³y - 2x²y + xy", "4x³ - 2x² + x", "4x²y² - 2xy² + y²"],
        correctAnswer: "4x³y² - 2x²y² + xy²",
        explanation: "Divide each term by 4x⁵y⁵: 16x⁸y⁷/(4x⁵y⁵) = 4x³y², -8x⁷y⁷/(4x⁵y⁵) = -2x²y², and 4x⁶y⁷/(4x⁵y⁵) = xy². Result is 4x³y² - 2x²y² + xy². 🎨",
        wrongAnswerExplanations: {
            "4x³y - 2x²y + xy": "The y exponents are incorrect.",
            "4x³ - 2x² + x": "The y terms don't cancel completely.",
            "4x²y² - 2xy² + y²": "The x exponents are incorrect."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl8_ch12_t3_qm13',
        type: "mcq",
        question: "If (px⁴ + qx³ + rx² + sx + t) ÷ x³ = ax + b + c/x + d/x², what is d?",
        options: ["p", "q", "s", "t"],
        correctAnswer: "t",
        explanation: "When dividing by x³, t/x³ becomes t/x³ = t/x². Comparing with the given form, d = t. The term with the lowest power in numerator becomes the term with highest power in denominator. 🔍",
        wrongAnswerExplanations: {
            "p": "p becomes the coefficient of x in the quotient.",
            "q": "q becomes the constant term b in the quotient.",
            "s": "s/x³ becomes s/x in the quotient."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl8_ch12_t3_qm14',
        type: "mcq",
        question: "What is (18x⁹y⁸ - 12x⁸y⁸ + 6x⁷y⁸) ÷ (6x⁶y⁶)?",
        options: ["3x³y² - 2x²y² + xy²", "3x³y - 2x²y + xy", "3x³ - 2x² + x", "3x²y² - 2xy² + y²"],
        correctAnswer: "3x³y² - 2x²y² + xy²",
        explanation: "Divide each term by 6x⁶y⁶: 18x⁹y⁸/(6x⁶y⁶) = 3x³y², -12x⁸y⁸/(6x⁶y⁶) = -2x²y², and 6x⁷y⁸/(6x⁶y⁶) = xy². Result is 3x³y² - 2x²y² + xy². 🎭",
        wrongAnswerExplanations: {
            "3x³y - 2x²y + xy": "The y exponents are incorrect.",
            "3x³ - 2x² + x": "The y terms don't cancel completely.",
            "3x²y² - 2xy² + y²": "The x exponents are incorrect."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl8_ch12_t3_qm15',
        type: "mcq",
        question: "When dividing (ax⁴ + bx³ + cx² + dx + e) by x², what is the coefficient of 1/x?",
        options: ["c", "d", "e", "b"],
        correctAnswer: "d",
        explanation: "When dividing by x², dx/x² = d/x. So d is the coefficient of 1/x in the quotient. Terms with higher powers give terms with x or constants. 🎪",
        wrongAnswerExplanations: {
            "c": "c/x² becomes a constant term.",
            "e": "e/x² becomes e/x².",
            "b": "b/x² becomes bx."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch12_t3_qm16',
        type: "mcq",
        question: "What is (20x¹⁰y⁹ - 15x⁹y⁹ + 10x⁸y⁹) ÷ (5x⁷y⁷)?",
        options: ["4x³y² - 3x²y² + 2xy²", "4x³y - 3x²y + 2xy", "4x³ - 3x² + 2x", "4x²y² - 3xy² + 2y²"],
        correctAnswer: "4x³y² - 3x²y² + 2xy²",
        explanation: "Divide each term by 5x⁷y⁷: 20x¹⁰y⁹/(5x⁷y⁷) = 4x³y², -15x⁹y⁹/(5x⁷y⁷) = -3x²y², and 10x⁸y⁹/(5x⁷y⁷) = 2xy². Result is 4x³y² - 3x²y² + 2xy². 📏",
        wrongAnswerExplanations: {
            "4x³y - 3x²y + 2xy": "The y exponents are incorrect.",
            "4x³ - 3x² + 2x": "The y terms don't cancel completely.",
            "4x²y² - 3xy² + 2y²": "The x exponents are incorrect."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl8_ch12_t3_qm17',
        type: "mcq",
        question: "If (px³ + qx² + rx + s) ÷ x = ax² + bx + c + d/x, what determines the value of d?",
        options: ["p", "q", "r", "s"],
        correctAnswer: "s",
        explanation: "When dividing by x, s/x becomes s/x. Comparing with the given form, d = s. The constant term becomes the coefficient of 1/x in the quotient. 🎯",
        wrongAnswerExplanations: {
            "p": "p becomes the coefficient of x² in the quotient.",
            "q": "q becomes the coefficient of x in the quotient.",
            "r": "r becomes the constant term in the quotient."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch12_t3_qm18',
        type: "mcq",
        question: "What is (24x¹¹y¹⁰ - 18x¹⁰y¹⁰ + 12x⁹y¹⁰) ÷ (6x⁸y⁸)?",
        options: ["4x³y² - 3x²y² + 2xy²", "4x³y - 3x²y + 2xy", "4x³ - 3x² + 2x", "4x²y² - 3xy² + 2y²"],
        correctAnswer: "4x³y² - 3x²y² + 2xy²",
        explanation: "Divide each term by 6x⁸y⁸: 24x¹¹y¹⁰/(6x⁸y⁸) = 4x³y², -18x¹⁰y¹⁰/(6x⁸y⁸) = -3x²y², and 12x⁹y¹⁰/(6x⁸y⁸) = 2xy². Result is 4x³y² - 3x²y² + 2xy². 🎨",
        wrongAnswerExplanations: {
            "4x³y - 3x²y + 2xy": "The y exponents are incorrect.",
            "4x³ - 3x² + 2x": "The y terms don't cancel completely.",
            "4x²y² - 3xy² + 2y²": "The x exponents are incorrect."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl8_ch12_t3_qm19',
        type: "mcq",
        question: "When dividing a polynomial by x³, what is the relationship between the degree of a term and its position in the quotient?",
        options: [
            "Degree - 3 = power in quotient",
            "Degree + 3 = power in quotient",
            "Degree × 3 = power in quotient",
            "Degree ÷ 3 = power in quotient"
        ],
        correctAnswer: "Degree - 3 = power in quotient",
        explanation: "When dividing by x³, subtract 3 from the degree of each term to get its power in the quotient. Terms with degree < 3 become terms with negative powers (fractions). 🔍",
        wrongAnswerExplanations: {
            "Degree + 3 = power in quotient": "We subtract 3, not add 3.",
            "Degree × 3 = power in quotient": "We subtract 3, not multiply by 3.",
            "Degree ÷ 3 = power in quotient": "We subtract 3, not divide by 3."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch12_t3_qm20',
        type: "mcq",
        question: "What is (28x¹²y¹¹ - 21x¹¹y¹¹ + 14x¹⁰y¹¹) ÷ (7x⁹y⁹)?",
        options: ["4x³y² - 3x²y² + 2xy²", "4x³y - 3x²y + 2xy", "4x³ - 3x² + 2x", "4x²y² - 3xy² + 2y²"],
        correctAnswer: "4x³y² - 3x²y² + 2xy²",
        explanation: "Divide each term by 7x⁹y⁹: 28x¹²y¹¹/(7x⁹y⁹) = 4x³y², -21x¹¹y¹¹/(7x⁹y⁹) = -3x²y², and 14x¹⁰y¹¹/(7x⁹y⁹) = 2xy². Result is 4x³y² - 3x²y² + 2xy². 🎭",
        wrongAnswerExplanations: {
            "4x³y - 3x²y + 2xy": "The y exponents are incorrect.",
            "4x³ - 3x² + 2x": "The y terms don't cancel completely.",
            "4x²y² - 3xy² + 2y²": "The x exponents are incorrect."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    }
]; 