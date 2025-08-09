import { generateId } from '../../../../../../app/utils/idGenerator';
import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: generateId('cl9_ch2_t7_qe1'),
        type: "mcq",
        question: "Which of the following is NOT a polynomial?",
        options: ["5x³ + 2x - 7", "3x² + √x", "x² - 5x + 10", "8"],
        correctAnswer: "3x² + √x",
        explanation: "A polynomial must have only whole number exponents. The term √x has a fractional exponent (x^(1/2)), which makes the expression not a polynomial. The other options have only whole number exponents. 📝",
        wrongAnswerExplanations: {
            "5x³ + 2x - 7": "This is a valid polynomial with whole number exponents (3, 1, and 0).",
            "x² - 5x + 10": "This is a valid polynomial with whole number exponents (2, 1, and 0).",
            "8": "This is a constant polynomial of degree 0."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: generateId('cl9_ch2_t7_qe2'),
        type: "mcq",
        question: "What is the degree of the polynomial 7x⁴ - 3x² + 2x - 5?",
        options: ["2", "3", "4", "5"],
        correctAnswer: "4",
        explanation: "The degree of a polynomial is the highest power of the variable. In this polynomial, the highest power of x is 4 in the term 7x⁴, so the degree is 4. Always look for the term with the highest exponent. 🔍",
        wrongAnswerExplanations: {
            "2": "This is the exponent in the term -3x², not the highest exponent.",
            "3": "There is no term with exponent 3 in this polynomial.",
            "5": "There is no term with exponent 5 in this polynomial."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: generateId('cl9_ch2_t7_qe3'),
        type: "mcq",
        question: "How would you classify the polynomial x² - 9?",
        options: ["Monomial", "Binomial", "Trinomial", "None of these"],
        correctAnswer: "Binomial",
        explanation: "A binomial has exactly two terms. The polynomial x² - 9 has two terms: x² and -9, making it a binomial. Classification based on the number of terms helps identify the polynomial type. 📊",
        wrongAnswerExplanations: {
            "Monomial": "A monomial has exactly one term, but x² - 9 has two terms.",
            "Trinomial": "A trinomial has exactly three terms, but x² - 9 has only two terms.",
            "None of these": "x² - 9 is definitely a binomial with two terms."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: generateId('cl9_ch2_t7_qe4'),
        type: "mcq",
        question: "Which is the correct factorized form of x² - 16?",
        options: ["(x - 4)(x - 4)", "(x + 4)(x + 4)", "(x + 4)(x - 4)", "(x - 8)(x + 2)"],
        correctAnswer: "(x + 4)(x - 4)",
        explanation: "x² - 16 is a difference of squares: x² - 4². Using the identity a² - b² = (a + b)(a - b), we get x² - 16 = (x + 4)(x - 4). This identity is essential for factorizing difference of squares expressions. 🧮",
        wrongAnswerExplanations: {
            "(x - 4)(x - 4)": "This expands to x² - 8x + 16, not x² - 16.",
            "(x + 4)(x + 4)": "This expands to x² + 8x + 16, not x² - 16.",
            "(x - 8)(x + 2)": "This expands to x² - 6x - 16, not x² - 16."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: generateId('cl9_ch2_t7_qe5'),
        type: "mcq",
        question: "If a polynomial P(x) has degree 3, what is the maximum number of zeroes it can have?",
        options: ["1", "2", "3", "4"],
        correctAnswer: "3",
        explanation: "A polynomial of degree n can have at most n zeroes. Since P(x) has degree 3, it can have at most 3 zeroes. This is an important property that relates the degree of a polynomial to its maximum number of zeroes. 📈",
        wrongAnswerExplanations: {
            "1": "A polynomial of degree 3 can have more than 1 zero.",
            "2": "A polynomial of degree 3 can have more than 2 zeroes.",
            "4": "A polynomial of degree 3 cannot have 4 zeroes; the maximum is 3."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: generateId('cl9_ch2_t7_qe6'),
        type: "mcq",
        question: "Which of the following is a zero of the polynomial P(x) = x² - 5x + 6?",
        options: ["1", "2", "4", "5"],
        correctAnswer: "2",
        explanation: "A zero of a polynomial P(x) is a value of x for which P(x) = 0. For P(2) = 2² - 5(2) + 6 = 4 - 10 + 6 = 0. Since P(2) = 0, 2 is a zero of the polynomial. Always substitute the value into the polynomial to check. 🔢",
        wrongAnswerExplanations: {
            "1": "P(1) = 1² - 5(1) + 6 = 1 - 5 + 6 = 2, not 0.",
            "4": "P(4) = 4² - 5(4) + 6 = 16 - 20 + 6 = 2, not 0.",
            "5": "P(5) = 5² - 5(5) + 6 = 25 - 25 + 6 = 6, not 0."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: generateId('cl9_ch2_t7_qe7'),
        type: "mcq",
        question: "Which algebraic identity represents (x + 3)²?",
        options: ["x² + 3²", "x² + 6x + 9", "x² - 6x + 9", "x² - 9"],
        correctAnswer: "x² + 6x + 9",
        explanation: "Using the identity (a + b)² = a² + 2ab + b², with a = x and b = 3: (x + 3)² = x² + 2(x)(3) + 3² = x² + 6x + 9. Algebraic identities provide shortcuts for expanding expressions. 📐",
        wrongAnswerExplanations: {
            "x² + 3²": "This is x² + 9, which is incorrect; it's missing the middle term 6x.",
            "x² - 6x + 9": "This is (x - 3)², not (x + 3)².",
            "x² - 9": "This is (x + 3)(x - 3), not (x + 3)²."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: generateId('cl9_ch2_t7_qe8'),
        type: "mcq",
        question: "What is the value of the polynomial P(x) = 2x³ - 3x² + x - 5 when x = 2?",
        options: ["3", "7", "-1", "11"],
        correctAnswer: "3",
        explanation: "To find P(2), substitute x = 2 into the polynomial: P(2) = 2(2)³ - 3(2)² + 2 - 5 = 2(8) - 3(4) + 2 - 5 = 16 - 12 + 2 - 5 = 3. Evaluating polynomials by substitution is a fundamental skill. 🧮",
        wrongAnswerExplanations: {
            "7": "This is incorrect. Double-check your calculations.",
            "-1": "This is incorrect. Double-check your calculations.",
            "11": "This is incorrect. Double-check your calculations."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: generateId('cl9_ch2_t7_qe9'),
        type: "mcq",
        question: "If (x - 2) is a factor of P(x), then which of the following must be true?",
        options: ["P(0) = 0", "P(2) = 0", "P(-2) = 0", "P(1) = 0"],
        correctAnswer: "P(2) = 0",
        explanation: "By the Factor Theorem, if (x - a) is a factor of P(x), then P(a) = 0. Since (x - 2) is a factor, P(2) = 0. This is a direct application of the Factor Theorem, which relates factors to zeroes. 🔍",
        wrongAnswerExplanations: {
            "P(0) = 0": "If (x - 0) were a factor, then P(0) would be 0, but we're given that (x - 2) is a factor.",
            "P(-2) = 0": "If (x + 2) were a factor, then P(-2) would be 0, but we're given that (x - 2) is a factor.",
            "P(1) = 0": "If (x - 1) were a factor, then P(1) would be 0, but we're given that (x - 2) is a factor."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: generateId('cl9_ch2_t7_qe10'),
        type: "mcq",
        question: "Which of the following expressions equals (a + b)(a - b)?",
        options: ["a² + b²", "a² - b²", "a² + 2ab + b²", "a² - 2ab + b²"],
        correctAnswer: "a² - b²",
        explanation: "Using the identity (a + b)(a - b) = a² - b², we get the difference of squares. This identity is particularly useful for factorizing expressions like x² - 4, x² - 9, etc. 📊",
        wrongAnswerExplanations: {
            "a² + b²": "This is not a standard algebraic identity.",
            "a² + 2ab + b²": "This is (a + b)², not (a + b)(a - b).",
            "a² - 2ab + b²": "This is (a - b)², not (a + b)(a - b)."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 45
    }
]; 