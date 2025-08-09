// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 7\Chapter12\Topic2\quiz_easy.ts
import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl7_ch12_t2_qe1',
        type: "mcq",
        question: "Which of the following is an example of an algebraic expression?",
        options: ["5", "x + 5", "x = 5", "5x = 10"],
        correctAnswer: "x + 5",
        explanation: "x + 5 is an algebraic expression as it combines variables and constants with operations. The other options are either constants or equations. 🔢",
        wrongAnswerExplanations: {
            "5": "5 is just a constant, not an algebraic expression.",
            "x = 5": "x = 5 is an equation, not an expression.",
            "5x = 10": "5x = 10 is an equation, not an expression."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch12_t2_qe2',
        type: "mcq",
        question: "In the expression 5x - 3, what is the coefficient of x?",
        options: ["3", "5", "-3", "x"],
        correctAnswer: "5",
        explanation: "In the term 5x, 5 is the coefficient of the variable x. It's the number that multiplies the variable. 🧮",
        wrongAnswerExplanations: {
            "3": "3 is a constant term in the expression, not the coefficient of x.",
            "-3": "-3 is a constant term in the expression, not the coefficient of x.",
            "x": "x is the variable, not its coefficient."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch12_t2_qe3',
        type: "mcq",
        question: "Which of the following is a term in the expression 3x + 4y - 7?",
        options: ["3x + 4y", "3x", "x + 4y", "3x - 7"],
        correctAnswer: "3x",
        explanation: "A term is a single mathematical expression. In 3x + 4y - 7, the terms are 3x, 4y, and -7. Each is separated by + or - signs. 📝",
        wrongAnswerExplanations: {
            "3x + 4y": "This combines two separate terms, 3x and 4y.",
            "x + 4y": "x is not a term in the given expression; 3x is.",
            "3x - 7": "This combines two separate terms, 3x and -7."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch12_t2_qe4',
        type: "mcq",
        question: "How many terms are in the expression 4x² + 7x - 5?",
        options: ["1", "2", "3", "4"],
        correctAnswer: "3",
        explanation: "The expression 4x² + 7x - 5 has three terms: 4x², 7x, and -5, each separated by + or - signs. 🔢",
        wrongAnswerExplanations: {
            "1": "The expression has 3 terms, not 1.",
            "2": "The expression has 3 terms, not 2.",
            "4": "The expression has 3 terms, not 4."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch12_t2_qe5',
        type: "mcq",
        question: "What is the result of adding 3x + 2 and 4x + 5?",
        options: ["7x + 7", "7x + 3", "12x + 10", "7 + 7x"],
        correctAnswer: "7x + 7",
        explanation: "To add expressions, combine like terms: (3x + 2) + (4x + 5) = 3x + 4x + 2 + 5 = 7x + 7. Like terms have the same variable with the same exponent. 🧩",
        wrongAnswerExplanations: {
            "7x + 3": "The constant terms are 2 + 5 = 7, not 3.",
            "12x + 10": "This would be (3x × 4x) + (2 × 5), which is multiplication, not addition.",
            "7 + 7x": "This is correct mathematically but written in a different order; the standard form is 7x + 7."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch12_t2_qe6',
        type: "mcq",
        question: "Which of the following expressions is the result of subtracting 2x - 3 from 5x + 4?",
        options: ["3x + 7", "3x + 1", "7x + 1", "3x - 1"],
        correctAnswer: "3x + 7",
        explanation: "To subtract (2x - 3) from (5x + 4): (5x + 4) - (2x - 3) = 5x + 4 - 2x + 3 = 3x + 7. Remember to change signs when subtracting an expression. ➖",
        wrongAnswerExplanations: {
            "3x + 1": "This would be 5x + 4 - 2x - 3, but the negative sign distributes to make -2x + 3.",
            "7x + 1": "This would be 5x + 2x + 4 - 3, which adds instead of subtracts the expressions.",
            "3x - 1": "This would be 5x - 2x + 4 - 3, but the correct subtraction gives 3x + 7."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch12_t2_qe7',
        type: "mcq",
        question: "In the expression 4x + 5y - 3z + 8, which term is a constant?",
        options: ["4x", "5y", "-3z", "8"],
        correctAnswer: "8",
        explanation: "A constant term has no variables. In 4x + 5y - 3z + 8, the term 8 is a constant as it doesn't contain any variables. 🔢",
        wrongAnswerExplanations: {
            "4x": "4x contains the variable x, so it's not a constant term.",
            "5y": "5y contains the variable y, so it's not a constant term.",
            "-3z": "-3z contains the variable z, so it's not a constant term."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch12_t2_qe8',
        type: "mcq",
        question: "Which of the following are like terms?",
        options: ["3x and 4y", "5x² and 2x", "7xy and 7yx", "9z and 4z"],
        correctAnswer: "9z and 4z",
        explanation: "Like terms have the same variables with the same exponents. 9z and 4z both have the variable z with exponent 1, making them like terms. 🧮",
        wrongAnswerExplanations: {
            "3x and 4y": "These terms have different variables (x and y), so they are not like terms.",
            "5x² and 2x": "These terms have different exponents of x (x² and x¹), so they are not like terms.",
            "7xy and 7yx": "In algebra, xy and yx represent the same product (commutative property), so these are actually like terms."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch12_t2_qe9',
        type: "mcq",
        question: "What is the simplified form of 6x - 9x + 4x?",
        options: ["x", "19x", "1x", "1"],
        correctAnswer: "x",
        explanation: "To simplify, combine like terms: 6x - 9x + 4x = (6 - 9 + 4)x = 1x = x. Remember, when the coefficient is 1, we typically write just the variable. 🧩",
        wrongAnswerExplanations: {
            "19x": "This would be 6x + 9x + 4x, not 6x - 9x + 4x.",
            "1x": "This is technically correct as 1x = x, but we typically simplify 1x to just x.",
            "1": "x is a variable term, not a constant. The simplified form is x."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch12_t2_qe10',
        type: "mcq",
        question: "What is the result of 3(x + 2)?",
        options: ["3x + 2", "3x + 5", "3x + 6", "3x × 2"],
        correctAnswer: "3x + 6",
        explanation: "Using the distributive property: 3(x + 2) = 3 × x + 3 × 2 = 3x + 6. Multiply each term inside the parentheses by 3. 📊",
        wrongAnswerExplanations: {
            "3x + 2": "This only distributes 3 to x, not to 2.",
            "3x + 5": "This incorrectly adds 3 and 2 instead of multiplying them.",
            "3x × 2": "This would be 3x × 2 = 6x, not 3(x + 2)."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch12_t2_qe11',
        type: "mcq",
        question: "The expression 2(3x - 1) + 4 simplifies to:",
        options: ["6x - 2 + 4", "6x + 2", "6x - 2", "9x - 2"],
        correctAnswer: "6x + 2",
        explanation: "First distribute: 2(3x - 1) + 4 = 6x - 2 + 4 = 6x + 2. Apply the distributive property then combine like terms. 🔢",
        wrongAnswerExplanations: {
            "6x - 2 + 4": "This is a step in the simplification process, but not fully simplified.",
            "6x - 2": "This ignores the + 4 in the original expression.",
            "9x - 2": "This incorrectly multiplies 3x by 3 instead of 2."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch12_t2_qe12',
        type: "mcq",
        question: "What is the coefficient of y in the expression 7xy?",
        options: ["7", "x", "7x", "y"],
        correctAnswer: "7x",
        explanation: "In 7xy, the coefficient of y is 7x. The coefficient includes everything multiplied by the variable. 🧩",
        wrongAnswerExplanations: {
            "7": "7 is the numerical coefficient of the product xy, not specifically of y.",
            "x": "x is a variable, not the complete coefficient of y.",
            "y": "y is the variable itself, not its coefficient."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch12_t2_qe13',
        type: "mcq",
        question: "Which of the following is NOT a term in the expression 3a² - 4b + 5?",
        options: ["3a²", "-4b", "5", "a²"],
        correctAnswer: "a²",
        explanation: "The terms in 3a² - 4b + 5 are 3a², -4b, and 5. a² without a coefficient isn't part of the expression; it's 3a² that appears. 📝",
        wrongAnswerExplanations: {
            "3a²": "3a² is the first term in the expression.",
            "-4b": "-4b is the second term in the expression.",
            "5": "5 is the third term in the expression."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch12_t2_qe14',
        type: "mcq",
        question: "How many variables are in the expression 5x²y + 3xy² - 7?",
        options: ["1", "2", "3", "4"],
        correctAnswer: "2",
        explanation: "The expression 5x²y + 3xy² - 7 contains two variables: x and y. A variable is a letter that represents a value. 🔤",
        wrongAnswerExplanations: {
            "1": "There are two variables (x and y), not one.",
            "3": "There are only two distinct variables (x and y), not three.",
            "4": "There are only two distinct variables (x and y), not four."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch12_t2_qe15',
        type: "mcq",
        question: "Simplify: 4p + 7p",
        options: ["11p", "28p", "11", "p⁴⁷"],
        correctAnswer: "11p",
        explanation: "To add like terms, add the coefficients: 4p + 7p = (4 + 7)p = 11p. The variable part stays the same. ➕",
        wrongAnswerExplanations: {
            "28p": "This would be 4p × 7p = 28p², not 4p + 7p.",
            "11": "The result must include the variable p, as it's 11p, not just 11.",
            "p⁴⁷": "This would involve exponents, but the expression involves addition, not multiplication."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch12_t2_qe16',
        type: "mcq",
        question: "Which of the following expressions has the same value as 2(x - 3)?",
        options: ["2x - 6", "2x - 3", "2x + 6", "2x + 3"],
        correctAnswer: "2x - 6",
        explanation: "Using the distributive property: 2(x - 3) = 2x - 6. Multiply each term inside the parentheses by 2. 🧮",
        wrongAnswerExplanations: {
            "2x - 3": "This only distributes 2 to x, not to -3.",
            "2x + 6": "The sign changes incorrectly; it should be 2x - 6.",
            "2x + 3": "This distributes 2 to x but incorrectly changes -3 to +3."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch12_t2_qe17',
        type: "mcq",
        question: "What is the result of (8m - 5) - (3m + 2)?",
        options: ["5m - 7", "5m - 3", "5m + 3", "11m - 7"],
        correctAnswer: "5m - 7",
        explanation: "To subtract expressions: (8m - 5) - (3m + 2) = 8m - 5 - 3m - 2 = 5m - 7. Change all signs in the second expression and then combine like terms. ➖",
        wrongAnswerExplanations: {
            "5m - 3": "This incorrectly computes -5 - 2 = -3, but it should be -5 - 2 = -7.",
            "5m + 3": "This incorrectly adds the constant terms instead of subtracting.",
            "11m - 7": "This adds the terms (8m + 3m) instead of subtracting them."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch12_t2_qe18',
        type: "mcq",
        question: "In the expression 5 + 3k², what is the constant term?",
        options: ["5", "3", "k²", "3k²"],
        correctAnswer: "5",
        explanation: "The constant term in an expression is the term without any variables. In 5 + 3k², the constant term is 5. 🔢",
        wrongAnswerExplanations: {
            "3": "3 is the coefficient of k², not a constant term by itself.",
            "k²": "k² is a variable term, not a constant.",
            "3k²": "3k² is a variable term, not a constant."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch12_t2_qe19',
        type: "mcq",
        question: "Which of the following is the expression for 'seven less than twice a number'?",
        options: ["2n - 7", "7 - 2n", "2n + 7", "7n - 2"],
        correctAnswer: "2n - 7",
        explanation: "If n is the number, then 'twice a number' is 2n, and 'seven less than twice a number' is 2n - 7. 📝",
        wrongAnswerExplanations: {
            "7 - 2n": "This represents 'seven minus twice a number', not 'seven less than twice a number'.",
            "2n + 7": "This represents 'seven more than twice a number', not 'seven less than'.",
            "7n - 2": "This represents '2 less than 7 times a number', not 'seven less than twice a number'."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch12_t2_qe20',
        type: "mcq",
        question: "Which of these expressions represents 'the sum of twice a number and three times another number'?",
        options: ["2x × 3y", "2x + 3y", "2 + 3xy", "2 × 3 + x + y"],
        correctAnswer: "2x + 3y",
        explanation: "If x and y are the two numbers, then 'twice a number' is 2x, 'three times another number' is 3y, and their sum is 2x + 3y. ➕",
        wrongAnswerExplanations: {
            "2x × 3y": "This represents the product, not the sum, of twice a number and three times another number.",
            "2 + 3xy": "This represents 2 plus 3 times the product of the numbers, not their individual multiples.",
            "2 × 3 + x + y": "This represents 6 plus the sum of the numbers, not 2x + 3y."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    }
];
