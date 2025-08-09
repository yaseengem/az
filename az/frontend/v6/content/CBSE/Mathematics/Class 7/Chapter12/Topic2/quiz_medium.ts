// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 7\Chapter12\Topic2\quiz_medium.ts
import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl7_ch12_t2_qm1',
        type: "mcq",
        question: "If a = 3 and b = 2, what is the value of 2a² - 3b + 5?",
        options: ["14", "16", "20", "23"],
        correctAnswer: "16",
        explanation: "Substitute a = 3 and b = 2: 2a² - 3b + 5 = 2(3²) - 3(2) + 5 = 2(9) - 6 + 5 = 18 - 6 + 5 = 16. 🧮",
        wrongAnswerExplanations: {
            "14": "This would be the result if you calculated 2(3²) - 3(2) + 1 = 18 - 6 + 1 = 13.",
            "20": "This would be the result if you calculated 2(3²) - 3 + 5 = 18 - 3 + 5 = 20.",
            "23": "This would be the result if you calculated 2(3²) + 3(2) + 5 = 18 + 6 + 5 = 29."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch12_t2_qm2',
        type: "mcq",
        question: "Simplify the expression: 3(x - 2) - 2(x + 1)",
        options: ["x - 8", "x - 4", "5x - 8", "x + 5"],
        correctAnswer: "x - 8",
        explanation: "Distribute each coefficient: 3(x - 2) - 2(x + 1) = 3x - 6 - 2x - 2 = x - 8. Combine like terms to simplify. 🔢",
        wrongAnswerExplanations: {
            "x - 4": "This is incorrect. The constant terms are -6 - 2 = -8, not -4.",
            "5x - 8": "This adds 3x + 2x instead of subtracting 3x - 2x.",
            "x + 5": "This is incorrect. The constant terms are -6 - 2 = -8, not +5."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch12_t2_qm3',
        type: "mcq",
        question: "What is the coefficient of x²y in the expression 3x²y - 4xy² + 7x²y + 5?",
        options: ["3", "10", "7", "3 + 7"],
        correctAnswer: "10",
        explanation: "For like terms with x²y, add the coefficients: 3x²y + 7x²y = 10x²y. So the coefficient of x²y is 10. 🧩",
        wrongAnswerExplanations: {
            "3": "This is only the coefficient of the first term with x²y, not the combined result.",
            "7": "This is only the coefficient of the second term with x²y, not the combined result.",
            "3 + 7": "The expression should be evaluated to get 10, not left as 3 + 7."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch12_t2_qm4',
        type: "mcq",
        question: "Which of the following is equivalent to (p + q)(p - q)?",
        options: ["p² - q²", "p² + q²", "p² - pq + pq - q²", "p² + 2pq + q²"],
        correctAnswer: "p² - q²",
        explanation: "(p + q)(p - q) = p² - pq + pq - q² = p² - q². This is a special product that gives the difference of squares. 🔄",
        wrongAnswerExplanations: {
            "p² + q²": "This would be (p + q)² - 2pq, not (p + q)(p - q).",
            "p² - pq + pq - q²": "This is a step in the simplification process, but it simplifies further to p² - q².",
            "p² + 2pq + q²": "This is (p + q)², not (p + q)(p - q)."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch12_t2_qm5',
        type: "mcq",
        question: "Simplify: (2x + 1)(x - 3) + (x + 2)(x - 1)",
        options: ["3x² - 5x - 3", "3x² - 5x - 1", "3x² - 3x - 3", "3x² - 3"],
        correctAnswer: "3x² - 5x - 3",
        explanation: "(2x + 1)(x - 3) + (x + 2)(x - 1) = 2x² - 6x + x - 3 + x² - x + 2x - 2 = 3x² - 5x - 3. Distribute, then combine like terms. 📊",
        wrongAnswerExplanations: {
            "3x² - 5x - 1": "This would result if the constant terms added to -1 instead of -3.",
            "3x² - 3x - 3": "This would result if the coefficient of x was -3 instead of -5.",
            "3x² - 3": "This would result if the x terms canceled out, which they don't."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch12_t2_qm6',
        type: "mcq",
        question: "What is the expression for 'the sum of the squares of two consecutive integers'?",
        options: ["n² + (n+1)²", "n² + (n-1)²", "(n+1)² + (n+2)²", "n² + n²"],
        correctAnswer: "n² + (n+1)²",
        explanation: "If n is the first integer, then n+1 is the next consecutive integer. Therefore, their squares are n² and (n+1)². The sum is n² + (n+1)². 🧮",
        wrongAnswerExplanations: {
            "n² + (n-1)²": "This represents the sum of squares of n and the previous integer, not consecutive integers starting with n.",
            "(n+1)² + (n+2)²": "This represents the sum of squares of the next two integers after n, not starting with n.",
            "n² + n²": "This represents twice the square of n, not the sum of squares of consecutive integers."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch12_t2_qm7',
        type: "mcq",
        question: "Simplify the expression: (2x - 5)² - 4(x - 3)(x + 1)",
        options: ["4x² - 10x + 25 - 4x² + 8x + 12", "-2x + 37", "25", "4x² - 2x + 37"],
        correctAnswer: "-2x + 37",
        explanation: "(2x - 5)² - 4(x - 3)(x + 1) = 4x² - 20x + 25 - 4(x² - 2x - 3) = 4x² - 20x + 25 - 4x² + 8x + 12 = -2x + 37. 🔢",
        wrongAnswerExplanations: {
            "4x² - 10x + 25 - 4x² + 8x + 12": "This is an intermediate step, not the fully simplified expression.",
            "25": "This would be the result if the expressions canceled completely, which they don't.",
            "4x² - 2x + 37": "This incorrectly keeps the 4x² term, which cancels out with -4x²."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch12_t2_qm8',
        type: "mcq",
        question: "What is the result when 3a - 5b - 2c is subtracted from 5a + 3b - 4c?",
        options: ["2a + 8b - 2c", "2a - 8b - 2c", "8a - 2b - 6c", "-2a - 8b + 2c"],
        correctAnswer: "2a + 8b - 2c",
        explanation: "(5a + 3b - 4c) - (3a - 5b - 2c) = 5a + 3b - 4c - 3a + 5b + 2c = 2a + 8b - 2c. When subtracting, change all signs in the second expression. ➖",
        wrongAnswerExplanations: {
            "2a - 8b - 2c": "This incorrectly changes the sign of both 3b and -5b.",
            "8a - 2b - 6c": "This adds the expressions instead of subtracting.",
            "-2a - 8b + 2c": "This subtracts the first expression from the second, not vice versa."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch12_t2_qm9',
        type: "mcq",
        question: "What is the value of 3p² - 4p + 2 when p = -1?",
        options: ["9", "5", "1", "-5"],
        correctAnswer: "9",
        explanation: "Substitute p = -1: 3p² - 4p + 2 = 3(-1)² - 4(-1) + 2 = 3(1) + 4 + 2 = 3 + 4 + 2 = 9. Remember that (-1)² = 1. 🧩",
        wrongAnswerExplanations: {
            "5": "This would be the result if you calculated 3(-1)² - 4(-1) incorrectly.",
            "1": "This would be the result if you calculated 3(-1) - 4(-1) + 2 = -3 + 4 + 2 = 3.",
            "-5": "This would be the result if you calculated 3(-1)² as 3(-1) = -3 instead of 3(1) = 3."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch12_t2_qm10',
        type: "mcq",
        question: "If x = 2 and y = -3, what is the value of the expression 3x² - 2xy + y²?",
        options: ["27", "21", "15", "9"],
        correctAnswer: "21",
        explanation: "Substitute x = 2, y = -3: 3x² - 2xy + y² = 3(2)² - 2(2)(-3) + (-3)² = 3(4) + 12 + 9 = 12 + 12 + 9 = 33 - 12 = 21. 🔢",
        wrongAnswerExplanations: {
            "27": "This would be the result of 3(4) + 2(2)(-3) + 9 = 12 - 12 + 9 = 9.",
            "15": "This would be the result of 3(4) - 2(2)(-3) = 12 - 12 = 0.",
            "9": "This is just the value of y², not the entire expression."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch12_t2_qm11',
        type: "mcq",
        question: "Which expression represents 'twice the sum of a number and 5'?",
        options: ["2n + 5", "2(n + 5)", "2n + 10", "n + 10"],
        correctAnswer: "2(n + 5)",
        explanation: "If n is the number, 'the sum of a number and 5' is (n + 5), and 'twice' that sum is 2(n + 5). 📝",
        wrongAnswerExplanations: {
            "2n + 5": "This represents 'twice a number plus 5', not 'twice the sum of a number and 5'.",
            "2n + 10": "This is the expanded form of 2(n + 5), but the question asks for the expression that represents the phrase.",
            "n + 10": "This represents 'a number plus 10', not 'twice the sum of a number and 5'."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch12_t2_qm12',
        type: "mcq",
        question: "If the length of a rectangle is (x + 5) units and the width is (x - 2) units, what is its area?",
        options: ["x² + 3x - 10 square units", "x² - 3x - 10 square units", "x² + 7x - 10 square units", "x² - 10 square units"],
        correctAnswer: "x² + 3x - 10 square units",
        explanation: "Area = length × width = (x + 5)(x - 2) = x² - 2x + 5x - 10 = x² + 3x - 10 square units. Use FOIL method to multiply. 📊",
        wrongAnswerExplanations: {
            "x² - 3x - 10 square units": "This incorrectly computes 5x - 2x = 3x as -3x.",
            "x² + 7x - 10 square units": "This incorrectly adds 5x + 2x = 7x instead of 5x - 2x = 3x.",
            "x² - 10 square units": "This ignores the middle terms from the product expansion."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch12_t2_qm13',
        type: "mcq",
        question: "What is the result of (a + b + c)² - (a² + b² + c²)?",
        options: ["2ab + 2bc + 2ac", "a² + b² + c²", "2(ab + bc + ac)", "a² + b² + c² + 2(ab + bc + ac)"],
        correctAnswer: "2(ab + bc + ac)",
        explanation: "(a + b + c)² = a² + b² + c² + 2ab + 2bc + 2ac. Subtracting (a² + b² + c²) gives 2ab + 2bc + 2ac = 2(ab + bc + ac). 🧮",
        wrongAnswerExplanations: {
            "2ab + 2bc + 2ac": "This is correct but not fully factored. The most simplified form is 2(ab + bc + ac).",
            "a² + b² + c²": "This is what we're subtracting, not the result.",
            "a² + b² + c² + 2(ab + bc + ac)": "This is (a + b + c)², not the result after subtraction."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch12_t2_qm14',
        type: "mcq",
        question: "Simplify: (m + n)² - (m - n)²",
        options: ["4mn", "2m²", "2n²", "m² - n²"],
        correctAnswer: "4mn",
        explanation: "(m + n)² - (m - n)² = (m² + 2mn + n²) - (m² - 2mn + n²) = 4mn. The m² and n² terms cancel out. 🔄",
        wrongAnswerExplanations: {
            "2m²": "This ignores the n terms and is incorrect.",
            "2n²": "This ignores the m terms and is incorrect.",
            "m² - n²": "This would be the result of (m + n)(m - n), not (m + n)² - (m - n)²."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch12_t2_qm15',
        type: "mcq",
        question: "The perimeter of a square with side length (2x + 1) units is:",
        options: ["8x + 4 units", "4x + 4 units", "8x + 1 units", "4(2x + 1) units"],
        correctAnswer: "8x + 4 units",
        explanation: "Perimeter of square = 4 × side length = 4 × (2x + 1) = 8x + 4 units. Multiply each term by 4. 📏",
        wrongAnswerExplanations: {
            "4x + 4 units": "This would be 4 × (x + 1), not 4 × (2x + 1).",
            "8x + 1 units": "This would be 4 × 2x + 1, which incorrectly distributes 4 only to 2x.",
            "4(2x + 1) units": "This is correct but not expanded as required."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch12_t2_qm16',
        type: "mcq",
        question: "Expand and simplify: (3a - 2b)(a + 4b)",
        options: ["3a² + 12ab - 2ab - 8b²", "3a² + 10ab - 8b²", "3a² - 8b²", "3a² + 12ab - 2ab + 8b²"],
        correctAnswer: "3a² + 10ab - 8b²",
        explanation: "(3a - 2b)(a + 4b) = 3a(a) + 3a(4b) - 2b(a) - 2b(4b) = 3a² + 12ab - 2ab - 8b² = 3a² + 10ab - 8b². 🔢",
        wrongAnswerExplanations: {
            "3a² + 12ab - 2ab - 8b²": "This is a step in the simplification process, but not fully simplified.",
            "3a² - 8b²": "This ignores the middle term 10ab.",
            "3a² + 12ab - 2ab + 8b²": "This incorrectly uses + 8b² instead of - 8b²."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch12_t2_qm17',
        type: "mcq",
        question: "Which expression represents 'the product of a number and the sum of the number and 5'?",
        options: ["n(n + 5)", "n + n(5)", "(n)(n + 5)", "n² + 5"],
        correctAnswer: "n(n + 5)",
        explanation: "If n is the number, 'the sum of the number and 5' is (n + 5), and 'the product of a number and' that sum is n(n + 5). 📝",
        wrongAnswerExplanations: {
            "n + n(5)": "This represents n + 5n, not n(n + 5).",
            "(n)(n + 5)": "This is correct but written in a redundant way; n(n + 5) is cleaner.",
            "n² + 5": "This is n² + 5, not n(n + 5), which expands to n² + 5n."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch12_t2_qm18',
        type: "mcq",
        question: "What is the value of the expression 5y - 3z when y = 2 and z = -1?",
        options: ["7", "10", "13", "16"],
        correctAnswer: "13",
        explanation: "Substitute y = 2, z = -1: 5y - 3z = 5(2) - 3(-1) = 10 + 3 = 13. Remember that -3 × -1 = 3. 🧩",
        wrongAnswerExplanations: {
            "7": "This would be the result of 5(2) - 3(1) = 10 - 3 = 7.",
            "10": "This would be the result if you ignored the z term and only calculated 5y = 5(2) = 10.",
            "16": "This would be the result of 5(2) + 3(2) = 10 + 6 = 16."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch12_t2_qm19',
        type: "mcq",
        question: "What is the coefficient of x in the expression 3x² + 5x - 7?",
        options: ["3", "5", "-7", "0"],
        correctAnswer: "5",
        explanation: "The coefficient of x in 3x² + 5x - 7 is 5, which is the number multiplying x to the power of 1. 🔢",
        wrongAnswerExplanations: {
            "3": "3 is the coefficient of x², not x.",
            "-7": "-7 is the constant term, not the coefficient of x.",
            "0": "The coefficient of x is 5, not 0."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch12_t2_qm20',
        type: "mcq",
        question: "What is the result of (p + 3)(p - 2) - (p - 1)²?",
        options: ["p + 1", "p - 1", "2p + 5", "p² - 5"],
        correctAnswer: "p + 1",
        explanation: "(p + 3)(p - 2) - (p - 1)² = p² - 2p + 3p - 6 - (p² - 2p + 1) = p² + p - 6 - p² + 2p - 1 = 3p - 7. 🧮",
        wrongAnswerExplanations: {
            "p - 1": "This is incorrect. The simplified expression is p + 1, not p - 1.",
            "2p + 5": "This is incorrect. The simplified expression is p + 1, not 2p + 5.",
            "p² - 5": "This is incorrect. The p² terms cancel out, leaving p + 1."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    }
];
