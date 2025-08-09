// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 7\Chapter12\Topic1\quiz_easy.ts
import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl7_ch12_t1_qe1',
        type: "mcq",
        question: "What are the terms in the algebraic expression 3x² + 5y - 7?",
        options: ["3x², 5y, -7", "3, x², 5, y, -7", "3x², 5y, 7", "3, x, 5, y, 7"],
        correctAnswer: "3x², 5y, -7",
        explanation: "Terms are parts of an expression separated by + or - signs. Here, the terms are 3x², 5y, and -7. 🔢",
        wrongAnswerExplanations: {
            "3, x², 5, y, -7": "Individual numbers and variables are not terms; terms are separated by + or - signs.",
            "3x², 5y, 7": "The last term is -7, not 7, as it has a negative sign.",
            "3, x, 5, y, 7": "These are not the terms; 3x² is a single term, not separate 3 and x²."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch12_t1_qe2',
        type: "mcq",
        question: "What is the coefficient of x in the term -7x?",
        options: ["-7", "7", "x", "-7x"],
        correctAnswer: "-7",
        explanation: "The coefficient is the number that multiplies the variable. In -7x, the coefficient is -7. 🔢",
        wrongAnswerExplanations: {
            "7": "The coefficient includes the sign, so it's -7, not 7.",
            "x": "x is the variable, not the coefficient.",
            "-7x": "This is the entire term, not just the coefficient."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch12_t1_qe3',
        type: "mcq",
        question: "In the expression 5y² + 3y + 8, what is the coefficient of y²?",
        options: ["5", "2", "5y", "5y²"],
        correctAnswer: "5",
        explanation: "The coefficient is the numerical factor of a term. In 5y², the coefficient is 5. 🧮",
        wrongAnswerExplanations: {
            "2": "2 is the exponent of y, not the coefficient.",
            "5y": "5 is the coefficient, y is the variable with exponent 2.",
            "5y²": "This is the entire term, the coefficient is just 5."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch12_t1_qe4',
        type: "mcq",
        question: "What is the constant term in the expression 7x + 4y - 9?",
        options: ["-9", "9", "0", "7"],
        correctAnswer: "-9",
        explanation: "The constant term has no variables. In the expression 7x + 4y - 9, the constant term is -9. 🔢",
        wrongAnswerExplanations: {
            "9": "The constant term includes its sign, so it's -9, not 9.",
            "0": "There is a constant term (-9) in the expression.",
            "7": "7 is the coefficient of x, not the constant term."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch12_t1_qe5',
        type: "mcq",
        question: "Which of these is a monomial?",
        options: ["5x", "3x + 2", "y² - 5y", "a + b + c"],
        correctAnswer: "5x",
        explanation: "A monomial has exactly one term. 5x is a single term, so it's a monomial. 🧮",
        wrongAnswerExplanations: {
            "3x + 2": "This has two terms (3x and 2), so it's a binomial, not a monomial.",
            "y² - 5y": "This has two terms (y² and -5y), making it a binomial.",
            "a + b + c": "This has three terms (a, b, and c), making it a trinomial."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch12_t1_qe6',
        type: "mcq",
        question: "What is the algebraic expression for 'five times a number decreased by 3'?",
        options: ["5x - 3", "5 - 3x", "5x + 3", "x - 3"],
        correctAnswer: "5x - 3",
        explanation: "Five times a number (5x) decreased by 3 means we subtract 3: 5x - 3. ➖",
        wrongAnswerExplanations: {
            "5 - 3x": "This represents 5 decreased by three times the number.",
            "5x + 3": "This represents five times the number increased by 3.",
            "x - 3": "This represents the number decreased by 3, not 5 times the number."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch12_t1_qe7',
        type: "mcq",
        question: "Which expression represents 'twice the sum of a number and 5'?",
        options: ["2(x + 5)", "2x + 5", "x + 10", "2x + 10"],
        correctAnswer: "2(x + 5)",
        explanation: "Twice the sum means 2 × (x + 5), which equals 2(x + 5). 🧮",
        wrongAnswerExplanations: {
            "2x + 5": "This represents twice the number plus 5, not twice the sum.",
            "x + 10": "This represents the number plus twice 5, not twice the sum.",
            "2x + 10": "This is the expanded form of 2(x + 5), not the original expression."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch12_t1_qe8',
        type: "mcq",
        question: "How many terms are in the expression 3x² + 5x - 7 + 2xy?",
        options: ["4", "3", "2", "5"],
        correctAnswer: "4",
        explanation: "The terms are 3x², 5x, -7, and 2xy. There are 4 terms total. 🔢",
        wrongAnswerExplanations: {
            "3": "There are 4 terms, not 3. Don't forget to count all parts separated by + or -.",
            "2": "There are 4 distinct terms in this expression.",
            "5": "There are only 4 terms, not 5, in this expression."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch12_t1_qe9',
        type: "mcq",
        question: "What is the coefficient of a in the expression 7a + 3b - 5c?",
        options: ["7", "3", "-5", "0"],
        correctAnswer: "7",
        explanation: "The coefficient of a is the number multiplying a. In 7a, the coefficient is 7. 🧮",
        wrongAnswerExplanations: {
            "3": "3 is the coefficient of b, not a.",
            "-5": "-5 is the coefficient of c, not a.",
            "0": "The term with a is 7a, so the coefficient is 7, not 0."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch12_t1_qe10',
        type: "mcq",
        question: "Which of the following is a binomial?",
        options: ["x + 7", "5y", "a + b + c", "2m² - 3m + 4"],
        correctAnswer: "x + 7",
        explanation: "A binomial has exactly two terms. x + 7 has two terms: x and 7. 🧮",
        wrongAnswerExplanations: {
            "5y": "This has only one term, making it a monomial.",
            "a + b + c": "This has three terms, making it a trinomial.",
            "2m² - 3m + 4": "This has three terms, making it a trinomial."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch12_t1_qe11',
        type: "mcq",
        question: "Which of these is the coefficient of y in the term 8xy²?",
        options: ["8x", "8", "y", "8xy"],
        correctAnswer: "8x",
        explanation: "In 8xy², the coefficient of y is 8x (everything multiplying y). 🔢",
        wrongAnswerExplanations: {
            "8": "8 is only part of the coefficient of y; the full coefficient is 8x.",
            "y": "y is the variable itself, not its coefficient.",
            "8xy": "This includes y itself, while the coefficient is just 8x."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch12_t1_qe12',
        type: "mcq",
        question: "In the expression 4p + 3q, what is the variable part of the first term?",
        options: ["p", "4", "4p", "q"],
        correctAnswer: "p",
        explanation: "The variable part of the term 4p is p; the coefficient is 4. 🧮",
        wrongAnswerExplanations: {
            "4": "4 is the numerical coefficient, not the variable part.",
            "4p": "This is the entire term, not just the variable part.",
            "q": "q is the variable in the second term, not the first term."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch12_t1_qe13',
        type: "mcq",
        question: "What is the coefficient of x² in the expression 7x³ + x² - 5x + 9?",
        options: ["1", "7", "-5", "0"],
        correctAnswer: "1",
        explanation: "In x², the coefficient is 1 (not written but implied: 1x²). 🧮",
        wrongAnswerExplanations: {
            "7": "7 is the coefficient of x³, not x².",
            "-5": "-5 is the coefficient of x, not x².",
            "0": "The coefficient is 1, not 0. When no number is written, the coefficient is 1."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch12_t1_qe14',
        type: "mcq",
        question: "The expression 'a number added to 15' can be written as:",
        options: ["x + 15", "15 - x", "15x", "15 + x²"],
        correctAnswer: "x + 15",
        explanation: "A number (x) added to 15 means x + 15. ➕",
        wrongAnswerExplanations: {
            "15 - x": "This means 15 minus a number, not added to it.",
            "15x": "This means 15 multiplied by a number, not added.",
            "15 + x²": "This means 15 added to the square of a number, not the number itself."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch12_t1_qe15',
        type: "mcq",
        question: "What type of expression is 9a - 3b + 5c?",
        options: ["Trinomial", "Binomial", "Monomial", "None of these"],
        correctAnswer: "Trinomial",
        explanation: "A trinomial has exactly three terms. This expression has the three terms: 9a, -3b, and 5c. 🧮",
        wrongAnswerExplanations: {
            "Binomial": "A binomial has two terms, but this expression has three terms.",
            "Monomial": "A monomial has one term, but this expression has three terms.",
            "None of these": "This expression is correctly classified as a trinomial."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch12_t1_qe16',
        type: "mcq",
        question: "What is the algebraic expression for 'the product of a number and 6 decreased by 4'?",
        options: ["6x - 4", "6 - 4x", "(6x) - 4", "6(x - 4)"],
        correctAnswer: "6x - 4",
        explanation: "The product of a number and 6 (6x) decreased by 4 equals 6x - 4. 🔢",
        wrongAnswerExplanations: {
            "6 - 4x": "This means 6 decreased by the product of 4 and the number.",
            "(6x) - 4": "This is the same as 6x - 4, just with unnecessary parentheses.",
            "6(x - 4)": "This means 6 times the difference of x and 4, not the product of x and 6 decreased by 4."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch12_t1_qe17',
        type: "mcq",
        question: "In the expression 12ab² - 7a²b, which term has the variable b²?",
        options: ["12ab²", "7a²b", "12ab", "-7a²b"],
        correctAnswer: "12ab²",
        explanation: "The first term 12ab² contains b². The second term has only b¹. 🧮",
        wrongAnswerExplanations: {
            "7a²b": "This term has b raised to power 1, not b².",
            "12ab": "The term is 12ab², not 12ab (the exponent matters).",
            "-7a²b": "This term has b raised to power 1, not b², and includes the negative sign."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch12_t1_qe18',
        type: "mcq",
        question: "What is the algebraic expression for 'three less than twice a number'?",
        options: ["2x - 3", "3 - 2x", "2x + 3", "3x - 2"],
        correctAnswer: "2x - 3",
        explanation: "Twice a number is 2x, and three less than that is 2x - 3. ➖",
        wrongAnswerExplanations: {
            "3 - 2x": "This means 3 decreased by twice the number, not twice the number decreased by 3.",
            "2x + 3": "This means twice the number increased by 3, not decreased by 3.",
            "3x - 2": "This means three times the number decreased by 2, not twice the number decreased by 3."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch12_t1_qe19',
        type: "mcq",
        question: "If x = 2, what is the value of the expression 3x² - 4x + 5?",
        options: ["9", "13", "7", "11"],
        correctAnswer: "9",
        explanation: "Substituting x = 2: 3(2²) - 4(2) + 5 = 3(4) - 8 + 5 = 12 - 8 + 5 = 9. 🧮",
        wrongAnswerExplanations: {
            "13": "Check your calculation. 3(4) - 8 + 5 = 12 - 8 + 5 = 9, not 13.",
            "7": "Check your calculation. 3(4) - 8 + 5 = 12 - 8 + 5 = 9, not 7.",
            "11": "Check your calculation. 3(4) - 8 + 5 = 12 - 8 + 5 = 9, not 11."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch12_t1_qe20',
        type: "mcq",
        question: "Which of these expressions represents 'the sum of square of a number and 10'?",
        options: ["x² + 10", "x + 10²", "(x + 10)²", "10x²"],
        correctAnswer: "x² + 10",
        explanation: "The square of a number is x², and its sum with 10 is x² + 10. ➕",
        wrongAnswerExplanations: {
            "x + 10²": "This means the sum of x and 10², which is x + 100.",
            "(x + 10)²": "This means the square of (x + 10), not the sum of x² and 10.",
            "10x²": "This means 10 times x², not the sum of x² and 10."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    }
];
