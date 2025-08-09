import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl9_ch2_t1_qe1',
        type: "mcq",
        question: "Which of the following is an algebraic expression?",
        options: ["x = y + 2", "3x² + 5x - 7", "x < 10", "x² = 9"],
        correctAnswer: "3x² + 5x - 7",
        explanation: "An algebraic expression is a combination of variables, constants, and mathematical operations. 3x² + 5x - 7 is an algebraic expression because it contains variables (x), constants (3, 5, -7), and operations (+, -) without any equals sign or inequality. 📝",
        wrongAnswerExplanations: {
            "x = y + 2": "This is an equation (contains '='), not just an expression.",
            "x < 10": "This is an inequality, not an algebraic expression.",
            "x² = 9": "This is an equation, not just an algebraic expression."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch2_t1_qe2',
        type: "mcq",
        question: "Which of these is a polynomial?",
        options: ["x² + 5x - 3", "√x + 2", "1/x + 3", "x^(-2) - 1"],
        correctAnswer: "x² + 5x - 3",
        explanation: "A polynomial contains variables with only whole number exponents and no variables in denominators or under radicals. x² + 5x - 3 fits these criteria with whole number powers (2, 1, 0) and no division by variables or radicals. 🧮",
        wrongAnswerExplanations: {
            "√x + 2": "This contains a radical with variable (√x), which is not allowed in polynomials.",
            "1/x + 3": "This has a variable in the denominator (1/x), which is not allowed in polynomials.",
            "x^(-2) - 1": "This has a negative exponent, which is not allowed in polynomials."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch2_t1_qe3',
        type: "mcq",
        question: "Why is 3/x² not a polynomial?",
        options: ["It has a variable in the denominator", "It has too many terms", "The coefficient is too large", "It has a negative exponent"],
        correctAnswer: "It has a variable in the denominator",
        explanation: "Polynomials cannot have variables in the denominator. In 3/x², the x² appears in the denominator, which means we're dividing by a variable expression. This violates the definition of a polynomial. 🔍",
        wrongAnswerExplanations: {
            "It has too many terms": "3/x² has only one term, so this is not the issue.",
            "The coefficient is too large": "The coefficient 3 is not too large; polynomials can have any real number as coefficients.",
            "It has a negative exponent": "While this is technically true (3/x² = 3x⁻²), the main issue is the variable in the denominator."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch2_t1_qe4',
        type: "mcq",
        question: "Which of these is a monomial?",
        options: ["7x⁴", "x² + 1", "3x - 2", "x² - x + 1"],
        correctAnswer: "7x⁴",
        explanation: "A monomial is a polynomial with exactly one term. 7x⁴ is a single term with coefficient 7 and variable x raised to power 4, making it a monomial. The other options have multiple terms connected by + or - operations. 📊",
        wrongAnswerExplanations: {
            "x² + 1": "This has two terms (x² and 1), making it a binomial.",
            "3x - 2": "This has two terms (3x and -2), making it a binomial.",
            "x² - x + 1": "This has three terms (x², -x, and 1), making it a trinomial."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch2_t1_qe5',
        type: "mcq",
        question: "What type of polynomial is 4y² - 7?",
        options: ["Monomial", "Binomial", "Trinomial", "None of these"],
        correctAnswer: "Binomial",
        explanation: "A binomial has exactly two terms. 4y² - 7 has two terms: 4y² and -7, making it a binomial. Classification based on the number of terms helps identify the complexity of polynomials! 📝",
        wrongAnswerExplanations: {
            "Monomial": "A monomial has exactly one term, but 4y² - 7 has two terms.",
            "Trinomial": "A trinomial has exactly three terms, but 4y² - 7 has only two terms.",
            "None of these": "4y² - 7 is definitely a binomial with two terms."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch2_t1_qe6',
        type: "mcq",
        question: "Which expression is NOT an algebraic expression?",
        options: ["2x + y = 7", "3a² - 4b", "x² + y²/2", "5p - 3q + 2r"],
        correctAnswer: "2x + y = 7",
        explanation: "An algebraic expression contains variables, constants, and operations but no relation symbols like =, <, or >. 2x + y = 7 contains an equals sign, making it an equation, not just an algebraic expression. 🔍",
        wrongAnswerExplanations: {
            "3a² - 4b": "This is a valid algebraic expression with variables, constants, and operations.",
            "x² + y²/2": "This is a valid algebraic expression, containing division but no relation symbols.",
            "5p - 3q + 2r": "This is a valid algebraic expression with multiple variables and operations."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch2_t1_qe7',
        type: "mcq",
        question: "What is the difference between 2x + 3 and 5/x - 1?",
        options: ["2x + 3 is a polynomial; 5/x - 1 is not", "2x + 3 has one term; 5/x - 1 has two", "2x + 3 is a binomial; 5/x - 1 is a monomial", "2x + 3 is an expression; 5/x - 1 is an equation"],
        correctAnswer: "2x + 3 is a polynomial; 5/x - 1 is not",
        explanation: "2x + 3 is a polynomial because it only has variables with non-negative integer exponents. 5/x - 1 is not a polynomial because it has a variable (x) in the denominator, which is not allowed in polynomials. 🧮",
        wrongAnswerExplanations: {
            "2x + 3 has one term; 5/x - 1 has two": "2x + 3 actually has two terms (2x and 3).",
            "2x + 3 is a binomial; 5/x - 1 is a monomial": "5/x - 1 has two terms, not one, so it's not a monomial.",
            "2x + 3 is an expression; 5/x - 1 is an equation": "Both are expressions; neither contains an equals sign."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch2_t1_qe8',
        type: "mcq",
        question: "Which of these is a trinomial?",
        options: ["x³ + 2x² - 5", "7", "3x + 2", "4x⁴ - x"],
        correctAnswer: "x³ + 2x² - 5",
        explanation: "A trinomial is a polynomial with exactly three terms. x³ + 2x² - 5 has three terms: x³, 2x² and -5, making it a trinomial. Counting the number of terms helps classify polynomials. 📊",
        wrongAnswerExplanations: {
            "7": "This is a monomial (one term) with no variable.",
            "3x + 2": "This is a binomial with two terms (3x and 2).",
            "4x⁴ - x": "This is a binomial with two terms (4x⁴ and -x)."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch2_t1_qe9',
        type: "mcq",
        question: "Which of the following is NOT a polynomial?",
        options: ["√x + 3", "x² - 4", "5", "2x - 7"],
        correctAnswer: "√x + 3",
        explanation: "Polynomials cannot have fractional exponents or variables under radicals. √x + 3 contains √x, which is equivalent to x^(1/2) with a fractional exponent 1/2, making it not a polynomial. 🔍",
        wrongAnswerExplanations: {
            "x² - 4": "This is a valid polynomial (binomial) with whole number exponents.",
            "5": "This is a valid polynomial (monomial) of degree 0.",
            "2x - 7": "This is a valid polynomial (binomial) with whole number exponents."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch2_t1_qe10',
        type: "mcq",
        question: "Which statement is true about the expression 3x³ - 2x² + 4?",
        options: ["It is a trinomial", "It is a binomial", "It is not a polynomial", "It has a variable in the denominator"],
        correctAnswer: "It is a trinomial",
        explanation: "A trinomial has exactly three terms. 3x³ - 2x² + 4 has three terms: 3x³, -2x², and 4, making it a trinomial. This classification is based solely on the number of terms in the expression. 📝",
        wrongAnswerExplanations: {
            "It is a binomial": "A binomial has exactly two terms, but this expression has three terms.",
            "It is not a polynomial": "This is definitely a polynomial with whole number exponents and no variables in denominators.",
            "It has a variable in the denominator": "There are no variables in any denominator in this expression."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 45
    }
];