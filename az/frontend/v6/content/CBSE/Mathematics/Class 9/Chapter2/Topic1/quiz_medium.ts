import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl9_ch2_t1_qm1',
        type: "mcq",
        question: "Which of the following pairs contains one polynomial and one non-polynomial expression?",
        options: ["x² + 3x, 2x - 5", "4x³ + 2, x^(-1) + 3", "√x - 1, 1/x² + 5", "x⁻¹, 1/x"],
        correctAnswer: "4x³ + 2, x^(-1) + 3",
        explanation: "A polynomial must have variables with only non-negative integer exponents. In the pair '4x³ + 2, x^(-1) + 3', the first expression 4x³ + 2 is a polynomial, while the second expression x^(-1) + 3 has a negative exponent and is not a polynomial. 🔍",
        wrongAnswerExplanations: {
            "x² + 3x, 2x - 5": "Both expressions are polynomials with non-negative integer exponents.",
            "√x - 1, 1/x² + 5": "Neither expression is a polynomial (both contain non-integer exponents or variables in denominators).",
            "x⁻¹, 1/x": "Neither expression is a polynomial (both have variables in denominator or negative exponents)."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch2_t1_qm2',
        type: "mcq",
        question: "Identify the algebraic expression that has exactly three terms but is NOT a polynomial:",
        options: ["x³ - 2x + 5", "3x² + 4x + 1", "x² + 1/x + 3", "2x⁴ - x² + 7"],
        correctAnswer: "x² + 1/x + 3",
        explanation: "x² + 1/x + 3 has three terms (x², 1/x, and 3), but it's not a polynomial because 1/x has a variable in the denominator, which is not allowed in polynomials. It's an algebraic expression, but specifically not a polynomial. 📊",
        wrongAnswerExplanations: {
            "x³ - 2x + 5": "This is a valid trinomial polynomial with three terms and non-negative integer exponents.",
            "3x² + 4x + 1": "This is a valid trinomial polynomial with three terms and non-negative integer exponents.",
            "2x⁴ - x² + 7": "This is a valid trinomial polynomial with three terms and non-negative integer exponents."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch2_t1_qm3',
        type: "mcq",
        question: "Which expression becomes a polynomial after multiplying by x²?",
        options: ["1/x", "√x", "1/x³", "x⁻⁴"],
        correctAnswer: "1/x",
        explanation: "Multiplying 1/x by x² gives x²(1/x) = x, which is a polynomial. The negative exponent in 1/x (which can be written as x⁻¹) is raised by 2, resulting in x¹, a valid polynomial. Multiplication by x² increases the power by 2. 🧮",
        wrongAnswerExplanations: {
            "√x": "x²(√x) = x²(x^(1/2)) = x^(5/2), which still has a fractional exponent and isn't a polynomial.",
            "1/x³": "x²(1/x³) = x²(x⁻³) = x⁻¹, which still has a negative exponent and isn't a polynomial.",
            "x⁻⁴": "x²(x⁻⁴) = x⁻², which still has a negative exponent and isn't a polynomial."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch2_t1_qm4',
        type: "mcq",
        question: "If an algebraic expression has a term with a variable in the denominator, what statement is TRUE?",
        options: ["It must be a trinomial", "It cannot be a polynomial", "It must have a negative coefficient", "It has degree zero"],
        correctAnswer: "It cannot be a polynomial",
        explanation: "A polynomial must not have variables in any denominator. If an algebraic expression has a term with a variable in the denominator (like 1/x, 3/(x+2), etc.), it violates the definition of a polynomial, making it a rational expression instead. 🔍",
        wrongAnswerExplanations: {
            "It must be a trinomial": "Having a variable in the denominator doesn't determine the number of terms.",
            "It must have a negative coefficient": "The coefficient can be positive or negative regardless of the denominator.",
            "It has degree zero": "Terms with variables in denominators often have negative degrees, not zero."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch2_t1_qm5',
        type: "mcq",
        question: "Select the statement that correctly differentiates between polynomials and other algebraic expressions:",
        options: ["Polynomials can have any kind of exponents, while other algebraic expressions cannot", "Polynomials must have at least two terms, while other algebraic expressions can have any number", "Polynomials cannot include division operations involving variables, while other algebraic expressions can", "Polynomials must have at least one variable, while other algebraic expressions can be constants"],
        correctAnswer: "Polynomials cannot include division operations involving variables, while other algebraic expressions can",
        explanation: "The key difference is that polynomials are restricted to addition, subtraction, and multiplication of variables with non-negative integer exponents. Other algebraic expressions can include division by variables, radicals, and fractional or negative exponents. 📝",
        wrongAnswerExplanations: {
            "Polynomials can have any kind of exponents, while other algebraic expressions cannot": "Actually, polynomials are restricted to non-negative integer exponents.",
            "Polynomials must have at least two terms, while other algebraic expressions can have any number": "Polynomials can have any number of terms, including just one (monomials).",
            "Polynomials must have at least one variable, while other algebraic expressions can be constants": "Polynomials can be constants (degree 0 polynomials like 5, -3, etc.)."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch2_t1_qm6',
        type: "mcq",
        question: "How many terms are in the expression 3x⁴ - 0x³ + 2x² - 0x + 5?",
        options: ["3", "4", "5", "7"],
        correctAnswer: "3",
        explanation: "When counting terms, we ignore those with zero coefficients. In 3x⁴ - 0x³ + 2x² - 0x + 5, the terms 0x³ and 0x contribute nothing, so there are only 3 terms: 3x⁴, 2x², and 5. Zero coefficients effectively remove terms! 🔢",
        wrongAnswerExplanations: {
            "4": "This counts one of the zero-coefficient terms, which should be ignored.",
            "5": "This counts all terms including those with zero coefficients, which should be ignored.",
            "7": "There are only 5 terms written, and only 3 of them have non-zero coefficients."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch2_t1_qm7',
        type: "mcq",
        question: "Which of the following cannot be classified as a monomial, binomial, or trinomial?",
        options: ["5x³", "y² - 9", "z³ + z² + z", "x⁴ + x³ + x² + x + 1"],
        correctAnswer: "x⁴ + x³ + x² + x + 1",
        explanation: "The expression x⁴ + x³ + x² + x + 1 has five terms, so it is simply called a polynomial. Monomials have exactly one term, binomials have exactly two terms, and trinomials have exactly three terms. Anything with four or more terms is just called a polynomial. 📊",
        wrongAnswerExplanations: {
            "5x³": "This is a monomial with exactly one term.",
            "y² - 9": "This is a binomial with exactly two terms.",
            "z³ + z² + z": "This is a trinomial with exactly three terms."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch2_t1_qm8',
        type: "mcq",
        question: "Which of these is NOT an algebraic expression?",
        options: ["x² = y²", "2(a + b) - 3c", "p/q + r/s", "m² + n² - 2mn"],
        correctAnswer: "x² = y²",
        explanation: "An algebraic expression must not contain relation symbols like =, <, or >. The statement x² = y² is an equation, not an algebraic expression, because it contains an equals sign that establishes a relation between two expressions. 🔍",
        wrongAnswerExplanations: {
            "2(a + b) - 3c": "This is a valid algebraic expression with variables, constants, and operations.",
            "p/q + r/s": "This is a valid algebraic expression involving division and addition.",
            "m² + n² - 2mn": "This is a valid algebraic expression representing (m - n)²."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch2_t1_qm9',
        type: "mcq",
        question: "If an expression has a radical involving a variable (like √x), but otherwise follows polynomial rules, it is:",
        options: ["Still a polynomial but of a special type", "Not a polynomial but still an algebraic expression", "Not an algebraic expression at all", "A polynomial as long as no division is involved"],
        correctAnswer: "Not a polynomial but still an algebraic expression",
        explanation: "An expression with a radical involving a variable (like √x, which equals x^(1/2)) has a fractional exponent, making it not a polynomial. However, it's still an algebraic expression because it involves variables, constants, and algebraic operations. 📐",
        wrongAnswerExplanations: {
            "Still a polynomial but of a special type": "No, polynomials strictly cannot have fractional exponents.",
            "Not an algebraic expression at all": "It is definitely an algebraic expression, just not a polynomial.",
            "A polynomial as long as no division is involved": "Even without division, the presence of a radical (fractional exponent) disqualifies it from being a polynomial."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch2_t1_qm10',
        type: "mcq",
        question: "Which of the following pairs consists of a binomial and a trinomial?",
        options: ["x² - 4, x³ + x² + 1", "3x, 2x² + 3x - 5", "x³ - x + 5, 4x⁴ - 3", "7x² - 2, 4 - 3x + 2x²"],
        correctAnswer: "x² - 4, x³ + x² + 1",
        explanation: "A binomial has exactly two terms, and a trinomial has exactly three terms. In the pair 'x² - 4, x³ + x² + 1', x² - 4 is a binomial with two terms, and x³ + x² + 1 is a trinomial with three terms. Counting terms is key to classification! 📊",
        wrongAnswerExplanations: {
            "3x, 2x² + 3x - 5": "3x is a monomial (not binomial), 2x² + 3x - 5 is a trinomial.",
            "x³ - x + 5, 4x⁴ - 3": "x³ - x + 5 is a trinomial, 4x⁴ - 3 is a binomial.",
            "7x² - 2, 4 - 3x + 2x²": "7x² - 2 is a binomial, 4 - 3x + 2x² is a trinomial, but they're in the wrong order."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 60
    }
];