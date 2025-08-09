import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl9_ch2_t6_qm1',
        type: "mcq",
        question: "Which of the following is the complete factorization of 2x³ - 2x?",
        options: ["2x(x - 1)(x + 1)", "2x(x² - 1)", "2(x³ - x)", "2x(x - 1)²"],
        correctAnswer: "2x(x - 1)(x + 1)",
        explanation: "First take out the common factor 2x: 2x³ - 2x = 2x(x² - 1). Then factorize x² - 1 as a difference of squares: (x - 1)(x + 1). So the complete factorization is 2x(x - 1)(x + 1). Always factorize completely! 🧮",
        wrongAnswerExplanations: {
            "2x(x² - 1)": "This is partially factorized but x² - 1 can be further factorized.",
            "2(x³ - x)": "This doesn't factor out all common terms; x is also common.",
            "2x(x - 1)²": "This would expand to 2x(x² - 2x + 1) = 2x³ - 4x² + 2x, which is different."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch2_t6_qm2',
        type: "mcq",
        question: "What is the factorized form of x³ - 27?",
        options: ["(x - 3)(x² + 3x + 9)", "(x + 3)(x² - 3x + 9)", "(x - 3)(x² - 3x + 9)", "(x - 3)(x² - 3x - 9)"],
        correctAnswer: "(x - 3)(x² + 3x + 9)",
        explanation: "x³ - 27 is a difference of cubes: a³ - b³ = (a - b)(a² + ab + b²). Here, a = x and b = 3 (since 3³ = 27). So x³ - 27 = (x - 3)(x² + 3x + 9). The formula for difference of cubes is essential to know! 🔍",
        wrongAnswerExplanations: {
            "(x + 3)(x² - 3x + 9)": "This formula applies to sum of cubes (a³ + b³), not difference of cubes.",
            "(x - 3)(x² - 3x + 9)": "The middle term in the second factor should be positive (+3x) for a difference of cubes.",
            "(x - 3)(x² - 3x - 9)": "Both the middle and last terms in the second factor are incorrect."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch2_t6_qm3',
        type: "mcq",
        question: "Which of the following is the factorization of x⁴ - 16?",
        options: ["(x² - 4)(x² + 4)", "(x - 2)(x + 2)(x² + 4)", "(x - 2)²(x + 2)²", "(x - 2)(x + 2)(x - 2i)(x + 2i)"],
        correctAnswer: "(x² - 4)(x² + 4)",
        explanation: "x⁴ - 16 can be viewed as a difference of squares: x⁴ - 16 = x⁴ - 4². Using the formula a² - b² = (a + b)(a - b) with a = x² and b = 4, we get (x² - 4)(x² + 4). Note that x² - 4 can be further factorized, but the question asks for the given options. 📊",
        wrongAnswerExplanations: {
            "(x - 2)(x + 2)(x² + 4)": "This is a more complete factorization, as it breaks down x² - 4 further.",
            "(x - 2)²(x + 2)²": "This would expand to (x² - 4)², which is (x⁴ - 8x² + 16), not x⁴ - 16.",
            "(x - 2)(x + 2)(x - 2i)(x + 2i)": "This is the complete factorization over complex numbers, but not a standard form."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch2_t6_qm4',
        type: "mcq",
        question: "What is the factorized form of x³ + 8y³?",
        options: ["(x + 2y)(x² - 2xy + 4y²)", "(x + 2y)(x² + 2xy + 4y²)", "(x - 2y)(x² + 2xy + 4y²)", "(x - 2y)(x² - 2xy + 4y²)"],
        correctAnswer: "(x + 2y)(x² - 2xy + 4y²)",
        explanation: "x³ + 8y³ is a sum of cubes: a³ + b³ = (a + b)(a² - ab + b²). Here, a = x and b = 2y (since (2y)³ = 8y³). So x³ + 8y³ = (x + 2y)(x² - 2xy + 4y²). The formula for sum of cubes is important! 🧩",
        wrongAnswerExplanations: {
            "(x + 2y)(x² + 2xy + 4y²)": "The middle term in the second factor should be negative (-2xy) for a sum of cubes.",
            "(x - 2y)(x² + 2xy + 4y²)": "This formula applies to difference of cubes (a³ - b³), not sum of cubes.",
            "(x - 2y)(x² - 2xy + 4y²)": "The first factor should be (x + 2y) for a sum of cubes."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch2_t6_qm5',
        type: "mcq",
        question: "Which of the following is the factorization of x² + 6x + 5 - y² - 2y - 1?",
        options: ["(x + y + 3)(x - y + 2)", "(x - y + 3)(x + y + 2)", "(x - y - 3)(x + y - 2)", "(x + y - 3)(x - y - 2)"],
        correctAnswer: "(x + y + 3)(x - y + 2)",
        explanation: "First rearrange to group x and y terms: (x² + 6x + 5) - (y² + 2y + 1) = (x² + 6x + 5) - (y + 1)². Now factorize x² + 6x + 5 = (x + 5)(x + 1) = (x + 5)(x + 1) - (y + 1)² = (x + y + 3)(x - y + 2). This requires careful grouping and algebraic manipulation! 📝",
        wrongAnswerExplanations: {
            "(x - y + 3)(x + y + 2)": "This expands to x² + 5x - y² + 6 which doesn't match the original expression.",
            "(x - y - 3)(x + y - 2)": "This expands to x² - 5x - y² + 6 which doesn't match the original expression.",
            "(x + y - 3)(x - y - 2)": "This expands to x² - 5x - y² - 6 which doesn't match the original expression."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch2_t6_qm6',
        type: "mcq",
        question: "Factorize: x² - 5x - 6",
        options: ["(x - 6)(x + 1)", "(x + 6)(x - 1)", "(x - 3)(x - 2)", "(x - 6)(x - 1)"],
        correctAnswer: "(x - 6)(x + 1)",
        explanation: "To factorize x² - 5x - 6, we need to find two numbers that multiply to give -6 and add up to -5. These numbers are -6 and 1 ((-6) × 1 = -6 and -6 + 1 = -5). So the factorization is (x - 6)(x + 1). Always check by multiplying the factors! 🔢",
        wrongAnswerExplanations: {
            "(x + 6)(x - 1)": "This expands to x² + 5x - 6, which is different from x² - 5x - 6.",
            "(x - 3)(x - 2)": "This expands to x² - 5x + 6, which is different from x² - 5x - 6.",
            "(x - 6)(x - 1)": "This expands to x² - 7x + 6, which is different from x² - 5x - 6."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch2_t6_qm7',
        type: "mcq",
        question: "What is the factorized form of x⁴ - y⁴?",
        options: ["(x - y)(x + y)(x² + y²)", "(x - y)(x + y)(x - y)(x + y)", "(x - y)(x + y)(x² - y²)", "(x² - y²)²"],
        correctAnswer: "(x - y)(x + y)(x² + y²)",
        explanation: "x⁴ - y⁴ can be factorized as a difference of squares: x⁴ - y⁴ = (x²)² - (y²)² = (x² - y²)(x² + y²). Further factorizing x² - y² = (x - y)(x + y), we get x⁴ - y⁴ = (x - y)(x + y)(x² + y²). This is the complete factorization. 🧮",
        wrongAnswerExplanations: {
            "(x - y)(x + y)(x - y)(x + y)": "This expands to (x² - y²)², which is different from x⁴ - y⁴.",
            "(x - y)(x + y)(x² - y²)": "This would be x⁶ - y⁶, not x⁴ - y⁴.",
            "(x² - y²)²": "This expands to x⁴ - 2x²y² + y⁴, which is different from x⁴ - y⁴."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch2_t6_qm8',
        type: "mcq",
        question: "Factorize: 6x² + 17x + 12",
        options: ["(2x + 3)(3x + 4)", "(3x + 4)(2x + 3)", "(6x + 3)(x + 4)", "(3x + 6)(2x + 2)"],
        correctAnswer: "(2x + 3)(3x + 4)",
        explanation: "To factorize 6x² + 17x + 12, we need to find two expressions whose product is 6x² + 17x + 12. The coefficient of x² is 6 = 2 × 3, and the constant term is 12 = 3 × 4. Checking: (2x + 3)(3x + 4) = 6x² + 8x + 9x + 12 = 6x² + 17x + 12. Perfect match! 📊",
        wrongAnswerExplanations: {
            "(3x + 4)(2x + 3)": "This is the same as (2x + 3)(3x + 4), just written in a different order.",
            "(6x + 3)(x + 4)": "This expands to 6x² + 24x + 3x + 12 = 6x² + 27x + 12, which is different.",
            "(3x + 6)(2x + 2)": "This expands to 6x² + 6x + 12x + 12 = 6x² + 18x + 12, which is different."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch2_t6_qm9',
        type: "mcq",
        question: "Factorize: x³ + 64",
        options: ["(x + 4)(x² - 4x + 16)", "(x - 4)(x² + 4x + 16)", "(x + 4)(x² + 4x + 16)", "(x - 4)(x² - 4x + 16)"],
        correctAnswer: "(x + 4)(x² - 4x + 16)",
        explanation: "x³ + 64 is a sum of cubes: a³ + b³ = (a + b)(a² - ab + b²). Here, a = x and b = 4 (since 4³ = 64). So x³ + 64 = (x + 4)(x² - 4x + 16). The formula for sum of cubes is a key identity to remember! 🔍",
        wrongAnswerExplanations: {
            "(x - 4)(x² + 4x + 16)": "This formula applies to difference of cubes (a³ - b³), not sum of cubes.",
            "(x + 4)(x² + 4x + 16)": "The middle term in the second factor should be negative (-4x) for a sum of cubes.",
            "(x - 4)(x² - 4x + 16)": "This would factorize x³ - 64, not x³ + 64."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch2_t6_qm10',
        type: "mcq",
        question: "Factorize: x³ - 3x² - 4x + 12",
        options: ["(x - 3)(x² - 4)", "(x - 2)(x² - x - 6)", "(x - 3)(x² + 4)", "(x + 3)(x² - 6x + 4)"],
        correctAnswer: "(x - 3)(x² - 4)",
        explanation: "We can try to factor by grouping: x³ - 3x² - 4x + 12 = x²(x - 3) - 4(x - 3) = (x - 3)(x² - 4). We can further factorize x² - 4 = (x - 2)(x + 2), giving (x - 3)(x - 2)(x + 2), but the question asks for the options provided. Factoring by grouping is a powerful technique! 🧩",
        wrongAnswerExplanations: {
            "(x - 2)(x² - x - 6)": "This expands to x³ - x² - 6x - 2x² + 2x + 12 = x³ - 3x² - 4x + 12, which is correct, but not the standard approach.",
            "(x - 3)(x² + 4)": "This expands to x³ - 3x² + 4x - 12, which doesn't match the original expression.",
            "(x + 3)(x² - 6x + 4)": "This expands to x³ - 6x² + 4x + 3x² - 18x + 12 = x³ - 3x² - 14x + 12, which doesn't match."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch2_t6_qm11',
        type: "mcq",
        question: "What is the factorized form of 3x² + 10x - 8?",
        options: ["(3x - 2)(x + 4)", "(3x + 4)(x - 2)", "(3x + 2)(x - 4)", "(3x + 6)(x - 4/3)"],
        correctAnswer: "(3x - 2)(x + 4)",
        explanation: "For 3x² + 10x - 8, we need to find values p and q where p × q = 3 × (-8) = -24 and p + q = 10. Testing factors of -24, we find -2 and 12 work (-2 × 12 = -24 and -2 + 12 = 10). So (3x - 2)(x + 4) is the answer. Verifying: 3x² + 12x - 2x - 8 = 3x² + 10x - 8. ✅",
        wrongAnswerExplanations: {
            "(3x + 4)(x - 2)": "This expands to 3x² - 6x + 4x - 8 = 3x² - 2x - 8, which doesn't match the original expression.",
            "(3x + 2)(x - 4)": "This expands to 3x² - 12x + 2x - 8 = 3x² - 10x - 8, which has a negative middle term.",
            "(3x + 6)(x - 4/3)": "This expands to 3x² - 4x + 6x - 8 = 3x² + 2x - 8, which doesn't match."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch2_t6_qm12',
        type: "mcq",
        question: "Which of the following is the complete factorization of x⁴ - 81?",
        options: ["(x² - 9)(x² + 9)", "(x - 3)(x + 3)(x² + 9)", "(x² - 9)²", "(x² + 9)²"],
        correctAnswer: "(x - 3)(x + 3)(x² + 9)",
        explanation: "x⁴ - 81 can be viewed as a difference of squares: x⁴ - 81 = (x²)² - 9². Using the formula a² - b² = (a + b)(a - b), we get (x² - 9)(x² + 9). Further factorizing x² - 9 = (x - 3)(x + 3), the complete factorization is (x - 3)(x + 3)(x² + 9). 🔍",
        wrongAnswerExplanations: {
            "(x² - 9)(x² + 9)": "This is a partial factorization; x² - 9 can be further factorized.",
            "(x² - 9)²": "This expands to x⁴ - 18x² + 81, not x⁴ - 81.",
            "(x² + 9)²": "This expands to x⁴ + 18x² + 81, not x⁴ - 81."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch2_t6_qm13',
        type: "mcq",
        question: "Which of the following pairs has one factorizable and one non-factorizable expression?",
        options: ["x² - 4, x² + 4", "x² - 9, x² - 6x + 9", "x² + 6x + 9, x² + 9", "x² - 10x + 25, x² - 25"],
        correctAnswer: "x² - 4, x² + 4",
        explanation: "In the pair 'x² - 4, x² + 4', the first expression x² - 4 is factorizable as (x - 2)(x + 2) because it's a difference of squares. However, x² + 4 is a sum of squares and cannot be factorized with real coefficients. The other pairs either have both factorizable or both non-factorizable expressions. 🔍",
        wrongAnswerExplanations: {
            "x² - 9, x² - 6x + 9": "Both are factorizable: x² - 9 = (x - 3)(x + 3) and x² - 6x + 9 = (x - 3)².",
            "x² + 6x + 9, x² + 9": "The first is factorizable: (x + 3)², and the second is not factorizable with real coefficients.",
            "x² - 10x + 25, x² - 25": "Both are factorizable: x² - 10x + 25 = (x - 5)² and x² - 25 = (x - 5)(x + 5)."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch2_t6_qm14',
        type: "mcq",
        question: "Factorize the expression: 12x² - 11x + 2",
        options: ["(4x - 1)(3x - 2)", "(3x - 2)(4x - 1)", "(6x - 1)(2x - 2)", "(12x - 2)(x - 1)"],
        correctAnswer: "(4x - 1)(3x - 2)",
        explanation: "For 12x² - 11x + 2, we need values p and q where p × q = 12 × 2 = 24 and p + q = -11. Testing factors of 24, we find -3 and -8 don't work. But (4x - 1)(3x - 2) = 12x² - 8x - 3x + 2 = 12x² - 11x + 2. Factoring quadratics with non-1 leading coefficients requires careful testing! 📊",
        wrongAnswerExplanations: {
            "(3x - 2)(4x - 1)": "This is the same as (4x - 1)(3x - 2), just written in a different order.",
            "(6x - 1)(2x - 2)": "This expands to 12x² - 12x - 2x + 2 = 12x² - 14x + 2, which is incorrect.",
            "(12x - 2)(x - 1)": "This expands to 12x² - 12x - 2x + 2 = 12x² - 14x + 2, which is incorrect."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch2_t6_qm15',
        type: "mcq",
        question: "Which of these techniques would you use first to factorize x⁴ + 3x² - 4?",
        options: ["Substitution method", "Factor theorem", "Grouping terms", "Taking out common factors"],
        correctAnswer: "Substitution method",
        explanation: "For x⁴ + 3x² - 4, substituting u = x² gives u² + 3u - 4, which is a quadratic in u. We can factorize this as (u + 4)(u - 1) = (x² + 4)(x² - 1). Further factorizing x² - 1 gives (x² + 4)(x - 1)(x + 1). Substitution simplifies higher-degree polynomials with patterns! 🧩",
        wrongAnswerExplanations: {
            "Factor theorem": "This requires finding zeros, which is more complex than using substitution here.",
            "Grouping terms": "There are only three terms, and they don't naturally form groups.",
            "Taking out common factors": "There are no common factors across all terms in this expression."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch2_t6_qm16',
        type: "mcq",
        question: "What is the factorization of x³ - 9x?",
        options: ["x(x - 3)(x + 3)", "x(x² - 9)", "(x - 3)(x² + 3x)", "(x + 3)(x² - 3x)"],
        correctAnswer: "x(x - 3)(x + 3)",
        explanation: "First factor out the common term x: x³ - 9x = x(x² - 9). Then recognize x² - 9 as a difference of squares: x² - 9 = (x - 3)(x + 3). So x³ - 9x = x(x - 3)(x + 3). Always look for common factors, then standard patterns! 🔢",
        wrongAnswerExplanations: {
            "x(x² - 9)": "This is a partial factorization; x² - 9 can be further factorized.",
            "(x - 3)(x² + 3x)": "This expands to x³ - 3x² + 3x² - 9x = x³ - 9x, which is correct, but not the conventional form.",
            "(x + 3)(x² - 3x)": "This expands to x³ - 3x² + 3x² - 9x = x³ - 9x, which is correct, but not the conventional form."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch2_t6_qm17',
        type: "mcq",
        question: "Which method is most appropriate for factorizing x³ + x² - 4x - 4?",
        options: ["Factoring by grouping", "Factor theorem", "Difference of squares", "Sum of cubes"],
        correctAnswer: "Factoring by grouping",
        explanation: "For x³ + x² - 4x - 4, we can group the terms: (x³ + x²) + (-4x - 4) = x²(x + 1) - 4(x + 1) = (x + 1)(x² - 4) = (x + 1)(x - 2)(x + 2). Grouping is effective when terms can be paired to reveal a common factor in each group. 🧮",
        wrongAnswerExplanations: {
            "Factor theorem": "While this could work, grouping is more direct and efficient.",
            "Difference of squares": "This only applies to expressions of the form a² - b².",
            "Sum of cubes": "This only applies to expressions of the form a³ + b³."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch2_t6_qm18',
        type: "mcq",
        question: "Which of the following expressions cannot be factorized over real numbers?",
        options: ["x² + 4", "x² - 4", "x² - 4x + 4", "x² + 4x + 4"],
        correctAnswer: "x² + 4",
        explanation: "The expression x² + 4 is a sum of squares and cannot be factorized with real coefficients. To factorize it, we would need complex numbers: x² + 4 = (x - 2i)(x + 2i) where i = √(-1). The other expressions can all be factorized using standard methods with real coefficients. 🔍",
        wrongAnswerExplanations: {
            "x² - 4": "This is a difference of squares and can be factorized as (x - 2)(x + 2).",
            "x² - 4x + 4": "This is a perfect square trinomial and can be factorized as (x - 2)².",
            "x² + 4x + 4": "This is a perfect square trinomial and can be factorized as (x + 2)²."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch2_t6_qm19',
        type: "mcq",
        question: "What is the factorized form of x³ - 2x² - 4x + 8?",
        options: ["(x - 2)(x² - 4)", "(x - 2)(x + 2)(x - 2)", "(x + 2)(x - 2)²", "(x - 2)(x - 2)(x + 2)"],
        correctAnswer: "(x - 2)(x² - 4)",
        explanation: "Factoring by grouping: x³ - 2x² - 4x + 8 = x²(x - 2) - 4(x - 2) = (x - 2)(x² - 4). We can further factorize x² - 4 = (x - 2)(x + 2), giving (x - 2)²(x + 2), but the question asks for the options provided. 📊",
        wrongAnswerExplanations: {
            "(x - 2)(x + 2)(x - 2)": "This is the complete factorization, but written in a non-standard order.",
            "(x + 2)(x - 2)²": "This is the complete factorization, just written differently.",
            "(x - 2)(x - 2)(x + 2)": "This is the complete factorization, but written as (x - 2)²(x + 2)."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch2_t6_qm20',
        type: "mcq",
        question: "Which technique would you use to factorize 6x² + 13x - 5?",
        options: ["Find two numbers whose product is -30 and sum is 13", "Complete the square", "Use the quadratic formula", "Factor out the GCD"],
        correctAnswer: "Find two numbers whose product is -30 and sum is 13",
        explanation: "For 6x² + 13x - 5, we need to find numbers p and q where p × q = 6 × (-5) = -30 and p + q = 13. Testing factors of -30, we find 15 and -2 work (15 × (-2) = -30 and 15 + (-2) = 13). So we can factorize as (3x + 5)(2x - 1). 🧩",
        wrongAnswerExplanations: {
            "Complete the square": "This transforms a quadratic into vertex form, not factorized form.",
            "Use the quadratic formula": "This finds the roots, not a direct factorization.",
            "Factor out the GCD": "There is no common factor to all terms in this expression."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch2_t6_qm21',
        type: "mcq",
        question: "Factorize: x⁴ - 8x² + 16",
        options: ["(x² - 4)²", "(x - 2)²(x + 2)²", "(x² + 4)²", "(x - 2)⁴"],
        correctAnswer: "(x² - 4)²",
        explanation: "We can view x⁴ - 8x² + 16 as a perfect square trinomial in x²: (x²)² - 2(x²)(4) + 4² = (x² - 4)². This follows the pattern a² - 2ab + b² = (a - b)² where a = x² and b = 4. We could further factorize as (x - 2)²(x + 2)², but the question asks for the given options. 🔢",
        wrongAnswerExplanations: {
            "(x - 2)²(x + 2)²": "This is a valid factorization, expanding to (x² - 4)².",
            "(x² + 4)²": "This expands to x⁴ + 8x² + 16, which has a '+' in the middle term, not a '-'.",
            "(x - 2)⁴": "This expands to (x - 2)⁴ = x⁴ - 8x³ + 24x² - 32x + 16, which is not equal to x⁴ - 8x² + 16."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch2_t6_qm22',
        type: "mcq",
        question: "When factorizing x⁴ - 625, what is the first step?",
        options: ["Use the difference of squares formula", "Use the factor theorem", "Group the terms", "Take out common factors"],
        correctAnswer: "Use the difference of squares formula",
        explanation: "For x⁴ - 625, we can view it as a difference of squares: (x²)² - 25². Using a² - b² = (a + b)(a - b), we get (x² + 25)(x² - 25). Then we can further factorize x² - 25 = (x - 5)(x + 5), giving (x² + 25)(x - 5)(x + 5). 📝",
        wrongAnswerExplanations: {
            "Use the factor theorem": "While this would eventually work, the difference of squares formula is more direct.",
            "Group the terms": "This method is for expressions with 4 or more terms; here we only have 2.",
            "Take out common factors": "There are no common factors in x⁴ - 625."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 60
    },
]; 