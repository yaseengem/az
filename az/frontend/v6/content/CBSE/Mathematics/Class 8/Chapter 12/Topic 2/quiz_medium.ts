import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl8_ch12_t2_qm1',
        type: "mcq",
        question: "Which of these expressions is equivalent to (x + 2)(x + 3) + (x + 2)(x + 4)?",
        options: [
            "(x + 2)(2x + 7)",
            "2(x + 2)(x + 3)",
            "(x + 2)(x + 7)",
            "(x + 3)(x + 4)"
        ],
        correctAnswer: "(x + 2)(2x + 7)",
        explanation: "Using distributive property, factor out (x + 2): (x + 2)(x + 3) + (x + 2)(x + 4) = (x + 2)[(x + 3) + (x + 4)] = (x + 2)(2x + 7). This shows how to factor by grouping. 🎯",
        wrongAnswerExplanations: {
            "2(x + 2)(x + 3)": "This would give 2x² + 10x + 12, which is not the expansion of the original expression.",
            "(x + 2)(x + 7)": "This would give x² + 9x + 14, which is not the expansion of the original expression.",
            "(x + 3)(x + 4)": "This would give x² + 7x + 12, which is not the expansion of the original expression."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl8_ch12_t2_qm2',
        type: "mcq",
        question: "If x² + bx + c = (x + p)(x + q), and p + q = 5, pq = 6, what is the value of b?",
        options: ["5", "6", "11", "30"],
        correctAnswer: "5",
        explanation: "In the factored form (x + p)(x + q), the coefficient of x (which is b) equals the sum of p and q. Since p + q = 5, therefore b = 5. This shows the relationship between coefficients and factors. 🔢",
        wrongAnswerExplanations: {
            "6": "6 is the product of p and q (pq), which gives the constant term c, not the coefficient of x.",
            "11": "This is not related to either p + q or pq.",
            "30": "This is not related to either p + q or pq."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch12_t2_qm3',
        type: "mcq",
        question: "What is the factored form of x³ + x² - 6x?",
        options: [
            "x(x + 3)(x - 2)",
            "x(x - 3)(x + 2)",
            "x(x² - 6)",
            "x(x + 1)(x - 6)"
        ],
        correctAnswer: "x(x + 3)(x - 2)",
        explanation: "First factor out the common factor x: x(x² + x - 6). Then factor the quadratic expression inside: x(x + 3)(x - 2). The numbers 3 and -2 are chosen because they add to 1 and multiply to -6. 📊",
        wrongAnswerExplanations: {
            "x(x - 3)(x + 2)": "This would expand to x³ - x² - 6x, not x³ + x² - 6x.",
            "x(x² - 6)": "This is not fully factored. x² - 6 can be factored further.",
            "x(x + 1)(x - 6)": "This would expand to x³ - 5x² - 6x, not x³ + x² - 6x."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl8_ch12_t2_qm4',
        type: "mcq",
        question: "Which of these expressions is equivalent to (x + 2)² - (x - 1)²?",
        options: [
            "6x - 3",
            "6x + 3",
            "2x + 3",
            "2x - 3"
        ],
        correctAnswer: "6x - 3",
        explanation: "Expand (x + 2)² = x² + 4x + 4 and (x - 1)² = x² - 2x + 1. Subtract: (x² + 4x + 4) - (x² - 2x + 1) = 6x - 3. The x² terms cancel out. 🎭",
        wrongAnswerExplanations: {
            "6x + 3": "This would be the result if we added the squares instead of subtracting.",
            "2x + 3": "This misses some terms in the expansion.",
            "2x - 3": "This misses some terms in the expansion."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl8_ch12_t2_qm5',
        type: "mcq",
        question: "What is the factored form of 6x² + 13x + 6?",
        options: [
            "(2x + 3)(3x + 2)",
            "(3x + 2)(2x + 3)",
            "(2x + 1)(3x + 6)",
            "(6x + 1)(x + 6)"
        ],
        correctAnswer: "(2x + 3)(3x + 2)",
        explanation: "To factor this trinomial, find two numbers that add to 13 and multiply to 36 (6 × 6). The numbers are 6 and 7, which can be split as (2x + 3)(3x + 2). 🔍",
        wrongAnswerExplanations: {
            "(3x + 2)(2x + 3)": "While this is technically correct due to multiplication being commutative, the standard form lists factors in ascending order.",
            "(2x + 1)(3x + 6)": "This would expand to 6x² + 15x + 6, not 6x² + 13x + 6.",
            "(6x + 1)(x + 6)": "This would expand to 6x² + 37x + 6, not 6x² + 13x + 6."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch12_t2_qm6',
        type: "mcq",
        question: "If x² + px + q = (x + a)², what must be true about p and q?",
        options: [
            "p = 2a and q = a²",
            "p = a and q = a²",
            "p = a² and q = 2a",
            "p = 2a² and q = a"
        ],
        correctAnswer: "p = 2a and q = a²",
        explanation: "Expanding (x + a)² = x² + 2ax + a². Comparing coefficients with x² + px + q, we get p = 2a and q = a². This is the standard form of a perfect square trinomial. 🎨",
        wrongAnswerExplanations: {
            "p = a and q = a²": "This would not give the correct expansion of (x + a)².",
            "p = a² and q = 2a": "This would not match the coefficients in the expansion of (x + a)².",
            "p = 2a² and q = a": "This would not match the coefficients in the expansion of (x + a)²."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch12_t2_qm7',
        type: "mcq",
        question: "What is the factored form of x⁴ - 16?",
        options: [
            "(x² + 4)(x² - 4)",
            "(x + 2)(x - 2)(x² + 4)",
            "(x + 2)(x - 2)(x + 4)(x - 4)",
            "(x + 4)(x - 4)"
        ],
        correctAnswer: "(x² + 4)(x² - 4)",
        explanation: "First recognize this as a difference of squares: x⁴ - 16 = (x²)² - 4². Factor as (x² + 4)(x² - 4). Note that x² - 4 can be factored further, but this wasn't given as an option. 🌟",
        wrongAnswerExplanations: {
            "(x + 2)(x - 2)(x² + 4)": "This is the complete factorization, but wasn't given as an option.",
            "(x + 2)(x - 2)(x + 4)(x - 4)": "This is incorrect. x⁴ - 16 cannot be factored into four linear factors.",
            "(x + 4)(x - 4)": "This only factors x² - 16, not x⁴ - 16."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl8_ch12_t2_qm8',
        type: "mcq",
        question: "Which expression is equivalent to (x + y)³ - (x - y)³?",
        options: [
            "6xy(x + y)",
            "6xy(x - y)",
            "2y(3x² + y²)",
            "2x(3y² + x²)"
        ],
        correctAnswer: "6xy(x + y)",
        explanation: "Expand (x + y)³ = x³ + 3x²y + 3xy² + y³ and (x - y)³ = x³ - 3x²y + 3xy² - y³. Subtract and factor: 6x²y + 2y³ = 2y(3x² + y²) = 6xy(x + y). 🎯",
        wrongAnswerExplanations: {
            "6xy(x - y)": "This would be the result if we added the cubes instead of subtracting.",
            "2y(3x² + y²)": "This is an intermediate step, but can be factored further.",
            "2x(3y² + x²)": "This is not equivalent to the given expression."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl8_ch12_t2_qm9',
        type: "mcq",
        question: "What is the factored form of 4x² - 4xy + y²?",
        options: [
            "(2x - y)²",
            "(2x + y)²",
            "4(x - y)²",
            "(2x - y)(2x + y)"
        ],
        correctAnswer: "(2x - y)²",
        explanation: "This is a perfect square trinomial in the form a² - 2ab + b² where a = 2x and b = y. Therefore, it factors as (2x - y)². Compare with the standard form (p - q)². 🔷",
        wrongAnswerExplanations: {
            "(2x + y)²": "This would expand to 4x² + 4xy + y², not 4x² - 4xy + y².",
            "4(x - y)²": "This would expand to 4x² - 8xy + 4y², not 4x² - 4xy + y².",
            "(2x - y)(2x + y)": "This would expand to 4x² - y², not 4x² - 4xy + y²."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch12_t2_qm10',
        type: "mcq",
        question: "If x² + kx + 16 = (x + p)², what is the value of k?",
        options: ["8", "-8", "4", "-4"],
        correctAnswer: "8",
        explanation: "If x² + kx + 16 = (x + p)², then p² = 16, so p = 4 (since p is positive in this case). In (x + p)², the coefficient of x is 2p. Therefore, k = 2p = 8. 🔢",
        wrongAnswerExplanations: {
            "-8": "This would give a negative coefficient of x, which doesn't match (x + p)².",
            "4": "This is the value of p, not k. Remember k = 2p.",
            "-4": "This would be -p, but we need k = 2p."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch12_t2_qm11',
        type: "mcq",
        question: "What is the factored form of x³y² + x²y³?",
        options: [
            "x²y²(x + y)",
            "xy(x²y + xy²)",
            "x²y(xy + y²)",
            "xy²(x² + y)"
        ],
        correctAnswer: "x²y²(x + y)",
        explanation: "Find the common factor first: x²y² is common to both terms. Factor it out: x²y²(x + y). This is the most simplified factored form. 📝",
        wrongAnswerExplanations: {
            "xy(x²y + xy²)": "While correct, it's not the most simplified form as xy can be factored out further.",
            "x²y(xy + y²)": "While correct, it's not the most simplified form as y can be factored out further.",
            "xy²(x² + y)": "This would give x³y² + xy³, not x³y² + x²y³."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch12_t2_qm12',
        type: "mcq",
        question: "Which expression is equivalent to (2x + 3)² - (2x - 3)²?",
        options: [
            "12x",
            "24x",
            "18",
            "12x + 18"
        ],
        correctAnswer: "24x",
        explanation: "Expand (2x + 3)² = 4x² + 12x + 9 and (2x - 3)² = 4x² - 12x + 9. Subtract: (4x² + 12x + 9) - (4x² - 12x + 9) = 24x. The x² and constant terms cancel out. 🎭",
        wrongAnswerExplanations: {
            "12x": "This misses that we have 12x twice when subtracting the squares.",
            "18": "The constant terms (9) cancel out in the subtraction.",
            "12x + 18": "The constant terms cancel out, and we have 24x, not 12x."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl8_ch12_t2_qm13',
        type: "mcq",
        question: "What is the factored form of 9x² - 6xy + y²?",
        options: [
            "(3x - y)²",
            "(3x + y)²",
            "9(x - y)²",
            "(3x - y)(3x + y)"
        ],
        correctAnswer: "(3x - y)²",
        explanation: "This is a perfect square trinomial in the form a² - 2ab + b² where a = 3x and b = y. Therefore, it factors as (3x - y)². Compare with the standard form (p - q)². 🔷",
        wrongAnswerExplanations: {
            "(3x + y)²": "This would expand to 9x² + 6xy + y², not 9x² - 6xy + y².",
            "9(x - y)²": "This would expand to 9x² - 18xy + 9y², not 9x² - 6xy + y².",
            "(3x - y)(3x + y)": "This would expand to 9x² - y², not 9x² - 6xy + y²."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch12_t2_qm14',
        type: "mcq",
        question: "If x² - 2x + 1 = (x + a)², what is the value of a?",
        options: ["-1", "1", "2", "-2"],
        correctAnswer: "-1",
        explanation: "Expanding (x + a)² = x² + 2ax + a². Comparing with x² - 2x + 1, we see that 2a = -2, so a = -1. Also, a² = 1 confirms this value of a. 🎯",
        wrongAnswerExplanations: {
            "1": "This would give x² + 2x + 1, not x² - 2x + 1.",
            "2": "This would give x² + 4x + 4, not x² - 2x + 1.",
            "-2": "This would give x² - 4x + 4, not x² - 2x + 1."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch12_t2_qm15',
        type: "mcq",
        question: "What is the factored form of 2x³ + 6x² + 4x?",
        options: [
            "2x(x + 2)(x + 1)",
            "2x(x + 1)²",
            "2x(x² + 3x + 2)",
            "2(x² + 3x + 2)x"
        ],
        correctAnswer: "2x(x + 2)(x + 1)",
        explanation: "First factor out 2x: 2x(x² + 3x + 2). Then factor the quadratic expression inside: 2x(x + 2)(x + 1). The numbers 2 and 1 are chosen because they add to 3 and multiply to 2. 📊",
        wrongAnswerExplanations: {
            "2x(x + 1)²": "This would expand to 2x³ + 4x² + 2x, not 2x³ + 6x² + 4x.",
            "2x(x² + 3x + 2)": "This is partially factored. The expression inside the parentheses can be factored further.",
            "2(x² + 3x + 2)x": "While this is equivalent, it's not in the standard factored form."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl8_ch12_t2_qm16',
        type: "mcq",
        question: "Which expression is equivalent to (x + 1)⁴ - (x - 1)⁴?",
        options: [
            "8x(x² + 2)",
            "4x(2x² + 1)",
            "8x³ + 8x",
            "4x(x² + 1)"
        ],
        correctAnswer: "8x(x² + 2)",
        explanation: "Expand (x + 1)⁴ = x⁴ + 4x³ + 6x² + 4x + 1 and (x - 1)⁴ = x⁴ - 4x³ + 6x² - 4x + 1. Subtract and factor: 8x³ + 8x = 8x(x² + 1). 🎨",
        wrongAnswerExplanations: {
            "4x(2x² + 1)": "This would give 8x³ + 4x, not 8x³ + 8x.",
            "8x³ + 8x": "This is correct but not in factored form.",
            "4x(x² + 1)": "This would give 4x³ + 4x, not 8x³ + 8x."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl8_ch12_t2_qm17',
        type: "mcq",
        question: "What is the factored form of x⁴ + 2x²y² + y⁴?",
        options: [
            "(x² + y²)²",
            "(x + y)⁴",
            "(x² - y²)²",
            "(x + y)²(x - y)²"
        ],
        correctAnswer: "(x² + y²)²",
        explanation: "This is a perfect square trinomial in terms of x² and y². Compare with a² + 2ab + b² where a = x² and b = y². Therefore, it factors as (x² + y²)². 🔷",
        wrongAnswerExplanations: {
            "(x + y)⁴": "This would include terms with x³y and xy³, which are not in the original expression.",
            "(x² - y²)²": "This would give x⁴ - 2x²y² + y⁴, not x⁴ + 2x²y² + y⁴.",
            "(x + y)²(x - y)²": "This would give x⁴ - y⁴, not x⁴ + 2x²y² + y⁴."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl8_ch12_t2_qm18',
        type: "mcq",
        question: "If x² + mx + n = (x - 2)(x + 3), what is the value of m?",
        options: ["1", "5", "-5", "-1"],
        correctAnswer: "1",
        explanation: "Expand (x - 2)(x + 3) = x² + 3x - 2x - 6 = x² + x - 6. Comparing coefficients with x² + mx + n, we see that m = 1. The coefficient of x in the expansion is the sum of the numbers in the factors: 3 + (-2) = 1. 🔢",
        wrongAnswerExplanations: {
            "5": "This would be the sum of the absolute values of the numbers in the factors.",
            "-5": "This would be the negative of the sum of the absolute values.",
            "-1": "This would be the negative of the actual coefficient."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch12_t2_qm19',
        type: "mcq",
        question: "What is the factored form of 8x³ - 2x²y - 4xy² + y³?",
        options: [
            "(2x - y)(4x² + 2xy + y²)",
            "(2x + y)(4x² - 2xy + y²)",
            "(2x - y)(4x² - 2xy + y²)",
            "(2x + y)(4x² + 2xy + y²)"
        ],
        correctAnswer: "(2x - y)(4x² + 2xy + y²)",
        explanation: "This is a difference of cubes pattern: a³ - b³ = (a - b)(a² + ab + b²). Here, a = 2x and b = y, giving (2x - y)(4x² + 2xy + y²). 🎯",
        wrongAnswerExplanations: {
            "(2x + y)(4x² - 2xy + y²)": "This would give 8x³ + 2x²y - 4xy² - y³, not 8x³ - 2x²y - 4xy² + y³.",
            "(2x - y)(4x² - 2xy + y²)": "This would give 8x³ - 6x²y + 4xy² - y³, not 8x³ - 2x²y - 4xy² + y³.",
            "(2x + y)(4x² + 2xy + y²)": "This would give 8x³ + 6x²y + 4xy² + y³, not 8x³ - 2x²y - 4xy² + y³."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl8_ch12_t2_qm20',
        type: "mcq",
        question: "Which expression represents (3x + 2y)² - 4xy?",
        options: [
            "9x² + 4y²",
            "9x² + 4y² + 8xy",
            "9x² + 4y² - 4xy",
            "9x² - 4y²"
        ],
        correctAnswer: "9x² + 4y² - 4xy",
        explanation: "Expand (3x + 2y)² = 9x² + 12xy + 4y². Then subtract 4xy: 9x² + 12xy + 4y² - 4xy = 9x² + 8xy + 4y². Simplify: 9x² + 4y² - 4xy. 🎨",
        wrongAnswerExplanations: {
            "9x² + 4y²": "This misses the xy terms completely.",
            "9x² + 4y² + 8xy": "This would be the result if we added 4xy instead of subtracting.",
            "9x² - 4y²": "This misses the xy terms and has the wrong sign for y²."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    }
]; 