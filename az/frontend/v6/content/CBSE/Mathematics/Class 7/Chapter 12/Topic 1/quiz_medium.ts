// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 7\Chapter12\Topic1\quiz_medium.ts
import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl7_ch12_t1_qm1',
        type: "mcq",
        question: "Simplify the expression: 7x + 3y - 4x + 2y",
        options: ["3x + 5y", "11x + 5y", "3x - y", "11x + y"],
        correctAnswer: "3x + 5y",
        explanation: "Collect like terms: 7x - 4x = 3x and 3y + 2y = 5y. The simplified expression is 3x + 5y. 🧮",
        wrongAnswerExplanations: {
            "11x + 5y": "This calculation adds 7x and 4x instead of subtracting.",
            "3x - y": "The y terms are 3y + 2y = 5y, not -y.",
            "11x + y": "Both x and y terms are calculated incorrectly."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch12_t1_qm2',
        type: "mcq",
        question: "What is the algebraic expression for 'five times the sum of a number and 7'?",
        options: ["5(x + 7)", "5x + 7", "5x + 35", "5 + 7x"],
        correctAnswer: "5(x + 7)",
        explanation: "Five times the sum means 5 × (x + 7), which is written as 5(x + 7). If expanded, it equals 5x + 35. 🔢",
        wrongAnswerExplanations: {
            "5x + 7": "This means 5 times the number plus 7, not 5 times the sum.",
            "5x + 35": "This is the expanded form, but the question asks for the expression representing the statement.",
            "5 + 7x": "This means 5 plus 7 times the number, not 5 times the sum."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch12_t1_qm3',
        type: "mcq",
        question: "If p = 3 and q = -2, find the value of the expression 2p² - 3pq + q²",
        options: ["26", "28", "24", "22"],
        correctAnswer: "26",
        explanation: "Substitute p = 3 and q = -2: 2(3²) - 3(3)(-2) + (-2)² = 2(9) - 3(3)(-2) + 4 = 18 + 18 + 4 = 40 - 18 + 4 = 26. 🧮",
        wrongAnswerExplanations: {
            "28": "Check your calculation. -3(3)(-2) = -3(-6) = +18, not -18.",
            "24": "Check your calculation of the entire expression carefully.",
            "22": "Check your calculation, especially the middle term -3pq."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl7_ch12_t1_qm4',
        type: "mcq",
        question: "Subtract (3x² + 2y - 5) from (7x² - 3y + 2)",
        options: ["4x² - 5y + 7", "10x² - y - 3", "4x² - 5y - 7", "-4x² - 5y + 7"],
        correctAnswer: "4x² - 5y + 7",
        explanation: "(7x² - 3y + 2) - (3x² + 2y - 5) = 7x² - 3y + 2 - 3x² - 2y + 5 = 4x² - 5y + 7. 🧮",
        wrongAnswerExplanations: {
            "10x² - y - 3": "This adds the expressions instead of subtracting.",
            "4x² - 5y - 7": "The constant term should be +7, not -7.",
            "-4x² - 5y + 7": "The x² term should be +4x², not -4x²."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl7_ch12_t1_qm5',
        type: "mcq",
        question: "If a = 2 and b = -3, what is the value of 3a² - 2ab + b²?",
        options: ["21", "27", "15", "33"],
        correctAnswer: "21",
        explanation: "Substitute a = 2, b = -3: 3(2²) - 2(2)(-3) + (-3)² = 3(4) - 2(2)(-3) + 9 = 12 + 12 + 9 = 33 - 12 = 21. 🧮",
        wrongAnswerExplanations: {
            "27": "Check your calculation. The middle term is -2ab = -2(2)(-3) = +12.",
            "15": "Check your calculation of all terms and their signs.",
            "33": "This would be correct if the expression were 3a² + 2ab + b²."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl7_ch12_t1_qm6',
        type: "mcq",
        question: "Add the expressions: 3x²y - 2xy + 5 and -x²y + 3xy - 2",
        options: ["2x²y + xy + 3", "2x²y - 5xy + 3", "4x²y + xy + 3", "2x²y - xy + 7"],
        correctAnswer: "2x²y + xy + 3",
        explanation: "(3x²y - 2xy + 5) + (-x²y + 3xy - 2) = 3x²y - 2xy + 5 - x²y + 3xy - 2 = 2x²y + xy + 3. 🧮",
        wrongAnswerExplanations: {
            "2x²y - 5xy + 3": "Check your addition of the xy terms: -2xy + 3xy = +xy, not -5xy.",
            "4x²y + xy + 3": "The x²y terms are 3x²y + (-x²y) = 2x²y, not 4x²y.",
            "2x²y - xy + 7": "Check both your xy terms and constant terms."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl7_ch12_t1_qm7',
        type: "mcq",
        question: "Which of the following is equivalent to 3(2x - 4) + 2(x + 5)?",
        options: ["8x - 2", "8x + 2", "9x - 2", "7x + 2"],
        correctAnswer: "8x - 2",
        explanation: "3(2x - 4) + 2(x + 5) = 6x - 12 + 2x + 10 = 8x - 2. 🧮",
        wrongAnswerExplanations: {
            "8x + 2": "Check your calculation. 6x - 12 + 2x + 10 = 8x - 2, not 8x + 2.",
            "9x - 2": "Check the coefficient of x: 6x + 2x = 8x, not 9x.",
            "7x + 2": "Check both the coefficient of x and the constant term."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch12_t1_qm8',
        type: "mcq",
        question: "Simplify: 2(3x - 4) - 3(x - 5)",
        options: ["3x + 7", "3x - 7", "6x - 7", "-3x + 7"],
        correctAnswer: "3x + 7",
        explanation: "2(3x - 4) - 3(x - 5) = 6x - 8 - 3x + 15 = 3x + 7. 🧮",
        wrongAnswerExplanations: {
            "3x - 7": "Check your calculation of the constant terms: -8 + 15 = +7, not -7.",
            "6x - 7": "After combining like terms, the coefficient of x is 6 - 3 = 3, not 6.",
            "-3x + 7": "The coefficient of x is positive: 6 - 3 = +3, not -3."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch12_t1_qm9',
        type: "mcq",
        question: "The perimeter of a rectangle with length (x + 3) and width (x - 2) is:",
        options: ["4x + 2", "2x + 2", "4x", "2x + 1"],
        correctAnswer: "4x + 2",
        explanation: "Perimeter = 2(length + width) = 2[(x + 3) + (x - 2)] = 2[2x + 1] = 4x + 2. 📏",
        wrongAnswerExplanations: {
            "2x + 2": "This only accounts for half the perimeter.",
            "4x": "The constant term is missing. After collecting terms, you get 4x + 2.",
            "2x + 1": "This is length + width, not the full perimeter."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch12_t1_qm10',
        type: "mcq",
        question: "If x = -1 and y = 2, what is the value of (x² + y²) - 2xy?",
        options: ["7", "5", "3", "9"],
        correctAnswer: "7",
        explanation: "Substitute x = -1, y = 2: ((-1)² + 2²) - 2(-1)(2) = (1 + 4) - 2(-2) = 5 + 4 = 9 - 2 = 7. 🧮",
        wrongAnswerExplanations: {
            "5": "Check your calculation. -2(-1)(2) = -2(-2) = +4, not -4.",
            "3": "Check the x² term: (-1)² = 1, not -1.",
            "9": "This would be correct if the expression were x² + y² + 2xy."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl7_ch12_t1_qm11',
        type: "mcq",
        question: "Which expression represents 'the square of the sum of x and y'?",
        options: ["(x + y)²", "x² + y²", "x + y²", "x² + y"],
        correctAnswer: "(x + y)²",
        explanation: "The square of the sum is (x + y)², which expands to x² + 2xy + y². 🧮",
        wrongAnswerExplanations: {
            "x² + y²": "This is the sum of squares, not the square of the sum.",
            "x + y²": "This means x plus the square of y, not the square of their sum.",
            "x² + y": "This means the square of x plus y, not the square of their sum."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch12_t1_qm12',
        type: "mcq",
        question: "Write an algebraic expression for 'the product of a number and the sum of the number and 7'.",
        options: ["x(x + 7)", "x + x + 7", "x + 7x", "7x"],
        correctAnswer: "x(x + 7)",
        explanation: "The product of x and (x + 7) is written as x(x + 7). This expands to x² + 7x. 🧮",
        wrongAnswerExplanations: {
            "x + x + 7": "This means the number plus the sum of the number and 7, not their product.",
            "x + 7x": "This is the expanded form, but the question asks for the expression representing the statement.",
            "7x": "This means 7 times the number, not the product described."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch12_t1_qm13',
        type: "mcq",
        question: "The area of a square with side length (2x + 1) is:",
        options: ["4x² + 4x + 1", "4x² + 1", "4x² + 2x + 1", "4x + 1"],
        correctAnswer: "4x² + 4x + 1",
        explanation: "Area of square = (side)² = (2x + 1)² = 4x² + 4x + 1. 🔢",
        wrongAnswerExplanations: {
            "4x² + 1": "This omits the middle term 4x from the expansion of (2x + 1)².",
            "4x² + 2x + 1": "When expanding (2x + 1)², the middle term is 2(2x)(1) = 4x, not 2x.",
            "4x + 1": "This is not the correct expansion of (2x + 1)²."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl7_ch12_t1_qm14',
        type: "mcq",
        question: "Which of these expressions is a like term of 5xy²?",
        options: ["-3xy²", "5x²y", "xy²", "5xy"],
        correctAnswer: "-3xy²",
        explanation: "Like terms have identical variable parts. Both 5xy² and -3xy² have xy² as their variable parts. 🧮",
        wrongAnswerExplanations: {
            "5x²y": "This has x²y, which differs from xy² in the exponents of x and y.",
            "xy²": "This is actually a like term of 5xy², just with coefficient 1.",
            "5xy": "This has xy, but 5xy² has xy². The exponent of y differs."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch12_t1_qm15',
        type: "mcq",
        question: "What is the result of adding 3a² - 4ab and 2a² + 5ab?",
        options: ["5a² + ab", "5a² - ab", "a² + ab", "a² - ab"],
        correctAnswer: "5a² + ab",
        explanation: "(3a² - 4ab) + (2a² + 5ab) = 3a² + 2a² - 4ab + 5ab = 5a² + ab. 🧮",
        wrongAnswerExplanations: {
            "5a² - ab": "Check your addition of the ab terms: -4ab + 5ab = +ab, not -ab.",
            "a² + ab": "The a² terms combine to 3a² + 2a² = 5a², not a².",
            "a² - ab": "Both parts are calculated incorrectly."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch12_t1_qm16',
        type: "mcq",
        question: "Which expression represents 'triple the difference of a number and 5'?",
        options: ["3(x - 5)", "3x - 5", "x - 15", "3x - 15"],
        correctAnswer: "3(x - 5)",
        explanation: "Triple the difference means 3 × (x - 5), which is written as 3(x - 5). 🧮",
        wrongAnswerExplanations: {
            "3x - 5": "This means triple the number minus 5, not triple the difference.",
            "x - 15": "This is the difference of the number and 15, not triple the difference of x and 5.",
            "3x - 15": "This is the expanded form, but the question asks for the expression representing the statement."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch12_t1_qm17',
        type: "mcq",
        question: "If x = 3, what is the value of x³ - 2x² + 4x - 8?",
        options: ["13", "19", "7", "25"],
        correctAnswer: "13",
        explanation: "Substitute x = 3: 3³ - 2(3²) + 4(3) - 8 = 27 - 2(9) + 12 - 8 = 27 - 18 + 12 - 8 = 13. 🧮",
        wrongAnswerExplanations: {
            "19": "Check your calculation of all terms carefully.",
            "7": "Check your calculation. 3³ = 27, not 9.",
            "25": "Check your signs in the calculation."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl7_ch12_t1_qm18',
        type: "mcq",
        question: "The algebraic expression for 'twice the sum of the squares of two numbers' is:",
        options: ["2(x² + y²)", "2x² + 2y²", "2(x + y)²", "(2x + 2y)²"],
        correctAnswer: "2(x² + y²)",
        explanation: "The sum of the squares is (x² + y²), and twice this sum is 2(x² + y²). 🧮",
        wrongAnswerExplanations: {
            "2x² + 2y²": "This is the expanded form, but the question asks for the expression representing the statement.",
            "2(x + y)²": "This is twice the square of the sum, not twice the sum of squares.",
            "(2x + 2y)²": "This is the square of twice the sum, not twice the sum of squares."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch12_t1_qm19',
        type: "mcq",
        question: "Simplify the expression: 3(2x - 4) - 2(3x + 1)",
        options: ["0x - 14", "x - 14", "-8", "6x - 14"],
        correctAnswer: "0x - 14",
        explanation: "3(2x - 4) - 2(3x + 1) = 6x - 12 - 6x - 2 = 0x - 14 = -14. 🧮",
        wrongAnswerExplanations: {
            "x - 14": "Check your calculation. 6x - 6x = 0x, not x.",
            "-8": "Check your constant terms. -12 - 2 = -14, not -8.",
            "6x - 14": "Check your calculation of x terms: 6x - 6x = 0, not 6x."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch12_t1_qm20',
        type: "mcq",
        question: "The expression (a + b)² - (a - b)² simplifies to:",
        options: ["4ab", "2ab", "4a²", "4b²"],
        correctAnswer: "4ab",
        explanation: "(a + b)² - (a - b)² = (a² + 2ab + b²) - (a² - 2ab + b²) = a² + 2ab + b² - a² + 2ab - b² = 4ab. 🧮",
        wrongAnswerExplanations: {
            "2ab": "Check your calculation. The middle terms add to 2ab + 2ab = 4ab, not 2ab.",
            "4a²": "The a² terms cancel out: a² - a² = 0.",
            "4b²": "The b² terms cancel out: b² - b² = 0."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    }
];
