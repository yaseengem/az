import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl8_ch12_t1_qm1',
        type: "mcq",
        question: "Which method would you use to factor x² + 7x + 10 - (y² + 4y + 4)?",
        options: [
            "Group similar terms first, then factor each group",
            "Factor each expression separately, then combine",
            "Find common factors first",
            "Use difference of squares"
        ],
        correctAnswer: "Group similar terms first, then factor each group",
        explanation: "First group similar terms: (x² + 7x + 10) - (y² + 4y + 4), then factor each group separately. The first group factors to (x + 2)(x + 5) and the second to (y + 2)². 🎯",
        wrongAnswerExplanations: {
            "Factor each expression separately, then combine": "This makes the process more complicated than necessary.",
            "Find common factors first": "There are no common factors between all terms.",
            "Use difference of squares": "This is not a difference of squares expression."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl8_ch12_t1_qm2',
        type: "mcq",
        question: "What is the factored form of 2x² + 7x + 3?",
        options: [
            "(2x + 1)(x + 3)",
            "(x + 1)(2x + 3)",
            "(2x + 3)(x + 1)",
            "Cannot be factored"
        ],
        correctAnswer: "(2x + 1)(x + 3)",
        explanation: "To factor 2x² + 7x + 3, find numbers that multiply to give 2 × 3 = 6 and add to give 7. The numbers are 1 and 6, leading to (2x + 1)(x + 3). 🔢",
        wrongAnswerExplanations: {
            "(x + 1)(2x + 3)": "This expands to 2x² + 5x + 3, not 2x² + 7x + 3.",
            "(2x + 3)(x + 1)": "This is the same as (x + 1)(2x + 3), which is incorrect.",
            "Cannot be factored": "This expression can be factored as (2x + 1)(x + 3)."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch12_t1_qm3',
        type: "mcq",
        question: "If x² + px + q is a perfect square trinomial, which of these must be true?",
        options: [
            "p² = 4q",
            "p = 2√q",
            "Both p² = 4q and p = 2√q",
            "Either p² = 4q or p = 2√q"
        ],
        correctAnswer: "Both p² = 4q and p = 2√q",
        explanation: "For a perfect square trinomial (x + r)², the middle term p must be twice r (p = 2r) and the last term q must be r² (q = r²). This means p = 2√q and p² = 4q. 📐",
        wrongAnswerExplanations: {
            "p² = 4q": "This alone is not sufficient, as p must also equal 2√q.",
            "p = 2√q": "This alone is not sufficient, as p² must also equal 4q.",
            "Either p² = 4q or p = 2√q": "Both conditions must be satisfied, not just one."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl8_ch12_t1_qm4',
        type: "mcq",
        question: "What is the factored form of 6x² - x - 2?",
        options: [
            "(2x + 1)(3x - 2)",
            "(2x - 1)(3x + 2)",
            "(3x + 1)(2x - 2)",
            "(3x - 1)(2x + 2)"
        ],
        correctAnswer: "(2x + 1)(3x - 2)",
        explanation: "To factor 6x² - x - 2, find factors of 6x² (2x and 3x) and numbers that multiply to -2 and add to -1. The factors are (2x + 1)(3x - 2). 🎨",
        wrongAnswerExplanations: {
            "(2x - 1)(3x + 2)": "This expands to 6x² + 4x - 2, not 6x² - x - 2.",
            "(3x + 1)(2x - 2)": "This expands to 6x² - 4x - 2, not 6x² - x - 2.",
            "(3x - 1)(2x + 2)": "This expands to 6x² + 4x - 2, not 6x² - x - 2."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch12_t1_qm5',
        type: "mcq",
        question: "Which expression is equivalent to (x + 2)² - (x - 3)²?",
        options: [
            "10x - 5",
            "10x + 5",
            "10x",
            "5x - 13"
        ],
        correctAnswer: "10x - 5",
        explanation: "Expand (x + 2)² = x² + 4x + 4 and (x - 3)² = x² - 6x + 9. Subtract: (x² + 4x + 4) - (x² - 6x + 9) = 10x - 5. 🔢",
        wrongAnswerExplanations: {
            "10x + 5": "This is incorrect. Check the subtraction of the constant terms.",
            "10x": "This ignores the constant terms in the expansion.",
            "5x - 13": "This is incorrect. The coefficient of x should be 10."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl8_ch12_t1_qm6',
        type: "mcq",
        question: "What is the factored form of 8x³ + 27?",
        options: [
            "(2x + 3)(4x² - 6x + 9)",
            "(2x - 3)(4x² + 6x + 9)",
            "Cannot be factored",
            "(2x + 3)(4x² + 6x + 9)"
        ],
        correctAnswer: "(2x + 3)(4x² - 6x + 9)",
        explanation: "This is a sum of cubes: 8x³ + 27 = (2x)³ + 3³. Using a³ + b³ = (a + b)(a² - ab + b²), where a = 2x and b = 3. 📐",
        wrongAnswerExplanations: {
            "(2x - 3)(4x² + 6x + 9)": "This is for difference of cubes, not sum of cubes.",
            "Cannot be factored": "This can be factored using the sum of cubes formula.",
            "(2x + 3)(4x² + 6x + 9)": "The middle term in the second factor should be negative."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl8_ch12_t1_qm7',
        type: "mcq",
        question: "Which method would you use to factor x⁴ - 16?",
        options: [
            "Difference of squares twice",
            "Grouping method",
            "Factor out common terms",
            "Split the middle term"
        ],
        correctAnswer: "Difference of squares twice",
        explanation: "First use difference of squares: x⁴ - 16 = (x² + 4)(x² - 4). Then factor x² - 4 again: (x² + 4)(x + 2)(x - 2). 🎯",
        wrongAnswerExplanations: {
            "Grouping method": "There are no terms to group.",
            "Factor out common terms": "There are no common terms to factor out.",
            "Split the middle term": "There is no middle term to split."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch12_t1_qm8',
        type: "mcq",
        question: "What is the factored form of x³y + x²y² + xy³?",
        options: [
            "xy(x² + y + y²)",
            "xy(x + y + y²)",
            "xy(x² + xy + y²)",
            "xy(x + y)²"
        ],
        correctAnswer: "xy(x² + y + y²)",
        explanation: "First factor out the common factor xy, leaving x² + y + y². This cannot be factored further as it's not a perfect square or difference of squares. 🔍",
        wrongAnswerExplanations: {
            "xy(x + y + y²)": "This would give xy² + xy² + xy³, not the original expression.",
            "xy(x² + xy + y²)": "This would include an x²y² term, which isn't in the original.",
            "xy(x + y)²": "This would expand to xy(x² + 2xy + y²), not the original expression."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch12_t1_qm9',
        type: "mcq",
        question: "Which expression is equivalent to (2x - 3y)² - (3x + 2y)²?",
        options: [
            "-13xy - 13y²",
            "-13xy + 13x²",
            "-13xy",
            "-13(x² + y²)"
        ],
        correctAnswer: "-13xy - 13y²",
        explanation: "Expand (2x - 3y)² = 4x² - 12xy + 9y² and (3x + 2y)² = 9x² + 12xy + 4y². Subtract to get -5x² - 24xy + 5y² = -13xy - 13y². 🔢",
        wrongAnswerExplanations: {
            "-13xy + 13x²": "This is incorrect. Check the expansion and subtraction.",
            "-13xy": "This ignores the y² terms in the expansion.",
            "-13(x² + y²)": "This would give -13x² - 13y², which is incorrect."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl8_ch12_t1_qm10',
        type: "mcq",
        question: "What is the factored form of 12x² - 117x + 285?",
        options: [
            "(4x - 19)(3x - 15)",
            "(3x - 19)(4x - 15)",
            "(12x - 19)(x - 15)",
            "(6x - 19)(2x - 15)"
        ],
        correctAnswer: "(4x - 19)(3x - 15)",
        explanation: "Factor 12x² - 117x + 285 by finding factors of 12 and 285 that give -117 when added. 4 × 3 = 12 and 19 × 15 = 285 work. 🎯",
        wrongAnswerExplanations: {
            "(3x - 19)(4x - 15)": "This expands to 12x² - 121x + 285, not 12x² - 117x + 285.",
            "(12x - 19)(x - 15)": "This expands to 12x² - 199x + 285, not 12x² - 117x + 285.",
            "(6x - 19)(2x - 15)": "This expands to 12x² - 144x + 285, not 12x² - 117x + 285."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl8_ch12_t1_qm11',
        type: "mcq",
        question: "Which method would you use to factor x³ - 8y³?",
        options: [
            "Difference of cubes",
            "Difference of squares",
            "Common factor then difference of squares",
            "Split into groups"
        ],
        correctAnswer: "Difference of cubes",
        explanation: "x³ - 8y³ is a difference of cubes (a³ - b³ where a = x and b = 2y). Use the formula a³ - b³ = (a - b)(a² + ab + b²). 📐",
        wrongAnswerExplanations: {
            "Difference of squares": "This is for expressions in the form a² - b².",
            "Common factor then difference of squares": "This is not a difference of squares expression.",
            "Split into groups": "There are no terms to group."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch12_t1_qm12',
        type: "mcq",
        question: "What is the factored form of 4x² - 12x + 9 - y²?",
        options: [
            "(2x - 3 + y)(2x - 3 - y)",
            "(2x - 3)² - y²",
            "(2x + y - 3)(2x - y - 3)",
            "(2x - y + 3)(2x + y - 3)"
        ],
        correctAnswer: "(2x - 3 + y)(2x - 3 - y)",
        explanation: "First recognize that 4x² - 12x + 9 = (2x - 3)². Then the expression becomes (2x - 3)² - y², which is a difference of squares. 🎨",
        wrongAnswerExplanations: {
            "(2x - 3)² - y²": "This is not fully factored.",
            "(2x + y - 3)(2x - y - 3)": "This expands to 4x² - 12x + 9 - y², but in a different order.",
            "(2x - y + 3)(2x + y - 3)": "This gives a different expansion."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl8_ch12_t1_qm13',
        type: "mcq",
        question: "Which expression represents (x - 2y)³ + 8y³?",
        options: [
            "x³ - 6x²y + 12xy² - 8y³ + 8y³",
            "x³ - 6x²y + 12xy² - 8y³",
            "x³ - 6x²y + 12xy²",
            "x³ - 6x²y + 12xy² + 8y³"
        ],
        correctAnswer: "x³ - 6x²y + 12xy² - 8y³ + 8y³",
        explanation: "Expand (x - 2y)³ using the cube formula: x³ - 6x²y + 12xy² - 8y³, then add 8y³. The -8y³ and +8y³ cancel out. 🔢",
        wrongAnswerExplanations: {
            "x³ - 6x²y + 12xy² - 8y³": "This is just (x - 2y)³ without adding 8y³.",
            "x³ - 6x²y + 12xy²": "This is missing terms from the expansion.",
            "x³ - 6x²y + 12xy² + 8y³": "This has the wrong sign for the y³ term in the expansion."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl8_ch12_t1_qm14',
        type: "mcq",
        question: "What is the factored form of x⁴ + 4x³y + 6x²y² + 4xy³ + y⁴?",
        options: [
            "(x + y)⁴",
            "(x² + y²)²",
            "(x² + 2xy + y²)²",
            "Cannot be factored"
        ],
        correctAnswer: "(x + y)⁴",
        explanation: "This is the expansion of (x + y)⁴. The coefficients follow Pascal's triangle: 1, 4, 6, 4, 1. Each term has total degree 4. 📐",
        wrongAnswerExplanations: {
            "(x² + y²)²": "This would give x⁴ + 2x²y² + y⁴, missing some terms.",
            "(x² + 2xy + y²)²": "This is the same as (x + y)⁴, just written differently.",
            "Cannot be factored": "This can be factored as (x + y)⁴."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch12_t1_qm15',
        type: "mcq",
        question: "Which method would you use to factor x⁴ + 2x²y + y²?",
        options: [
            "Perfect square of a binomial",
            "Difference of squares",
            "Grouping method",
            "Common factor"
        ],
        correctAnswer: "Perfect square of a binomial",
        explanation: "Let u = x² and v = y. Then x⁴ + 2x²y + y² becomes u² + 2uv + v² = (u + v)² = (x² + y)². 🎯",
        wrongAnswerExplanations: {
            "Difference of squares": "This is not a difference of squares.",
            "Grouping method": "There are no appropriate terms to group.",
            "Common factor": "There is no common factor to all terms."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch12_t1_qm16',
        type: "mcq",
        question: "What is the factored form of 3x² - 2x - 8?",
        options: [
            "(3x + 4)(x - 2)",
            "(3x - 4)(x + 2)",
            "(x + 4)(3x - 2)",
            "(x - 4)(3x + 2)"
        ],
        correctAnswer: "(3x + 4)(x - 2)",
        explanation: "To factor 3x² - 2x - 8, find factors of 3 × (-8) = -24 that add to -2. The numbers are 4 and -6, giving (3x + 4)(x - 2). 🔢",
        wrongAnswerExplanations: {
            "(3x - 4)(x + 2)": "This expands to 3x² + 2x - 8, not 3x² - 2x - 8.",
            "(x + 4)(3x - 2)": "This expands to 3x² + 10x - 8, not 3x² - 2x - 8.",
            "(x - 4)(3x + 2)": "This expands to 3x² - 10x - 8, not 3x² - 2x - 8."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl8_ch12_t1_qm17',
        type: "mcq",
        question: "Which expression is equivalent to (x + y)³ - (x - y)³?",
        options: [
            "6xy(x + y)",
            "6x²y",
            "6xy²",
            "6xy"
        ],
        correctAnswer: "6xy(x + y)",
        explanation: "Expand (x + y)³ = x³ + 3x²y + 3xy² + y³ and (x - y)³ = x³ - 3x²y + 3xy² - y³. Subtract to get 6x²y + 2y³ = 2y(3x² + y²) = 6xy(x + y). 🎯",
        wrongAnswerExplanations: {
            "6x²y": "This is incomplete. The y³ term is also important.",
            "6xy²": "This misses the x² term in the expansion.",
            "6xy": "This is too simplified and misses terms."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl8_ch12_t1_qm18',
        type: "mcq",
        question: "What is the factored form of 2x² + 5xy + 3y²?",
        options: [
            "(2x + 3y)(x + y)",
            "(x + 3y)(2x + y)",
            "(x + y)(2x + 3y)",
            "Cannot be factored"
        ],
        correctAnswer: "(x + y)(2x + 3y)",
        explanation: "Look for factors where coefficients multiply to give 2 and 3, and their cross products add to give 5. (x + y)(2x + 3y) works. 🎨",
        wrongAnswerExplanations: {
            "(2x + 3y)(x + y)": "This is the same factorization in a different order.",
            "(x + 3y)(2x + y)": "This expands to 2x² + 7xy + 3y², not 2x² + 5xy + 3y².",
            "Cannot be factored": "This expression can be factored as (x + y)(2x + 3y)."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch12_t1_qm19',
        type: "mcq",
        question: "Which method would you use to factor x⁴ - 5x² + 4?",
        options: [
            "Let u = x², then factor quadratic in u",
            "Difference of squares",
            "Grouping method",
            "Common factor"
        ],
        correctAnswer: "Let u = x², then factor quadratic in u",
        explanation: "Let u = x². Then x⁴ - 5x² + 4 becomes u² - 5u + 4, which factors to (u - 1)(u - 4). Replace u with x² to get (x² - 1)(x² - 4). 🔢",
        wrongAnswerExplanations: {
            "Difference of squares": "This is not a simple difference of squares.",
            "Grouping method": "There are no terms to group appropriately.",
            "Common factor": "There is no common factor to all terms."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl8_ch12_t1_qm20',
        type: "mcq",
        question: "What is the factored form of x³ + x²y - xy² - y³?",
        options: [
            "(x + y)(x² - y²)",
            "(x - y)(x² + y²)",
            "(x + y)(x² - xy + y²)",
            "(x - y)(x² + xy + y²)"
        ],
        correctAnswer: "(x + y)(x² - xy + y²)",
        explanation: "This is the difference of cubes formula in reverse. When you multiply (x + y)(x² - xy + y²), you get x³ + x²y - xy² - y³. 📐",
        wrongAnswerExplanations: {
            "(x + y)(x² - y²)": "This expands to x³ + x²y - xy² - y³ + x²y - xy² + y³, which is incorrect.",
            "(x - y)(x² + y²)": "This expands to x³ - y³ + x²y - y³, which is incorrect.",
            "(x - y)(x² + xy + y²)": "This is for x³ + y³, not x³ + x²y - xy² - y³."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    }
]; 