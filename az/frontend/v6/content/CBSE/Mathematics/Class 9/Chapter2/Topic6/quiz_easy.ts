import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl9_ch2_t6_qe1',
        type: "mcq",
        question: "Which of the following is the factorization of x² - 9?",
        options: ["(x - 3)(x - 3)", "(x + 3)(x - 3)", "(x - 9)(x + 1)", "(x - 3)(x + 9)"],
        correctAnswer: "(x + 3)(x - 3)",
        explanation: "x² - 9 can be recognized as a difference of squares: a² - b² = (a + b)(a - b). Here a = x and b = 3, so the factorization is (x + 3)(x - 3). This is a key algebraic identity to remember! 🧩",
        wrongAnswerExplanations: {
            "(x - 3)(x - 3)": "This would give x² - 6x + 9, which is different from x² - 9.",
            "(x - 9)(x + 1)": "Multiplying these gives x² - 8x - 9, which is not equal to x² - 9.",
            "(x - 3)(x + 9)": "Multiplying these gives x² + 6x - 27, which is not equal to x² - 9."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch2_t6_qe2',
        type: "mcq",
        question: "Which method would be most suitable to factorize 5x² + 15x?",
        options: ["Difference of squares", "Taking common factor", "Factoring by grouping", "Completing the square"],
        correctAnswer: "Taking common factor",
        explanation: "In 5x² + 15x, we can see that 5x is common to both terms. Taking out this common factor gives 5x(x + 3). This is the simplest and most direct method for factorizing this expression. 📝",
        wrongAnswerExplanations: {
            "Difference of squares": "This only applies to expressions of the form a² - b².",
            "Factoring by grouping": "This is used for expressions with 4 or more terms.",
            "Completing the square": "This is used to rewrite quadratics in vertex form, not for factorization."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch2_t6_qe3',
        type: "mcq",
        question: "What is the factorized form of x² + 6x + 9?",
        options: ["(x + 3)²", "(x - 3)²", "(x + 3)(x + 3)", "(x - 3)(x - 3)"],
        correctAnswer: "(x + 3)²",
        explanation: "x² + 6x + 9 is a perfect square trinomial of the form a² + 2ab + b² = (a + b)². Here a = x and b = 3, giving us (x + 3)². Perfect square trinomials follow this pattern! 🔍",
        wrongAnswerExplanations: {
            "(x - 3)²": "This expands to x² - 6x + 9, which is different from x² + 6x + 9.",
            "(x + 3)(x + 3)": "This is the same as (x + 3)², but the factorized form is typically written with the exponent.",
            "(x - 3)(x - 3)": "This expands to x² - 6x + 9, which is different from x² + 6x + 9."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch2_t6_qe4',
        type: "mcq",
        question: "Which expression is already in factorized form?",
        options: ["(x + 2)(x - 5)", "x² - 3x - 10", "a² - b²", "p² + 6p + 8"],
        correctAnswer: "(x + 2)(x - 5)",
        explanation: "A polynomial is in factorized form when it is written as a product of its factors (simpler polynomials). (x + 2)(x - 5) is already written as a product of its factors, so it's in factorized form. 🧮",
        wrongAnswerExplanations: {
            "x² - 3x - 10": "This is not factorized; it can be written as (x - 5)(x + 2).",
            "a² - b²": "This is not factorized; it can be written as (a + b)(a - b).",
            "p² + 6p + 8": "This is not factorized; it can be written as (p + 2)(p + 4)."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch2_t6_qe5',
        type: "mcq",
        question: "Which of the following is the factorization of 3x² - 27?",
        options: ["3(x - 3)(x + 3)", "3(x² - 9)", "3(x - 3)²", "(3x - 9)(x + 3)"],
        correctAnswer: "3(x - 3)(x + 3)",
        explanation: "First take out the common factor 3: 3x² - 27 = 3(x² - 9). Then factorize x² - 9 as a difference of squares: (x + 3)(x - 3). So the complete factorization is 3(x - 3)(x + 3). 📊",
        wrongAnswerExplanations: {
            "3(x² - 9)": "This is partially factorized but x² - 9 can be further factorized.",
            "3(x - 3)²": "This would expand to 3(x² - 6x + 9) = 3x² - 18x + 27, which is different.",
            "(3x - 9)(x + 3)": "This would expand to 3x² + 9x - 9x - 27 = 3x² - 27, which is correct, but not the conventional form."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch2_t6_qe6',
        type: "mcq",
        question: "What is the factorized form of x² - 10x + 25?",
        options: ["(x - 5)²", "(x + 5)²", "(x - 5)(x - 5)", "(x + 5)(x - 5)"],
        correctAnswer: "(x - 5)²",
        explanation: "x² - 10x + 25 matches the pattern a² - 2ab + b² = (a - b)², which is a perfect square trinomial. Here a = x and b = 5, so the factorization is (x - 5)². Perfect square trinomials are easy to identify! 🔢",
        wrongAnswerExplanations: {
            "(x + 5)²": "This expands to x² + 10x + 25, which is different from x² - 10x + 25.",
            "(x - 5)(x - 5)": "This is the same as (x - 5)², but the factorized form is typically written with the exponent.",
            "(x + 5)(x - 5)": "This expands to x² - 25, which is different from x² - 10x + 25."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch2_t6_qe7',
        type: "mcq",
        question: "Which of the following is the factorization of x² + 5x + 6?",
        options: ["(x + 2)(x + 3)", "(x - 2)(x - 3)", "(x + 6)(x - 1)", "(x + 1)(x + 6)"],
        correctAnswer: "(x + 2)(x + 3)",
        explanation: "To factorize x² + 5x + 6, we need to find two numbers that multiply to give 6 and add up to 5. These numbers are 2 and 3 (2 × 3 = 6 and 2 + 3 = 5). So the factorization is (x + 2)(x + 3). 🧩",
        wrongAnswerExplanations: {
            "(x - 2)(x - 3)": "This expands to x² - 5x + 6, which is different from x² + 5x + 6.",
            "(x + 6)(x - 1)": "This expands to x² + 5x - 6, which is different from x² + 5x + 6.",
            "(x + 1)(x + 6)": "This expands to x² + 7x + 6, which is different from x² + 5x + 6."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch2_t6_qe8',
        type: "mcq",
        question: "Which of the following is the first step in factorizing 6x⁴ - 6x²?",
        options: ["Taking out 6x² as common factor", "Grouping terms", "Using difference of squares", "Using quadratic formula"],
        correctAnswer: "Taking out 6x² as common factor",
        explanation: "In 6x⁴ - 6x², we can see that 6x² is common to both terms. Taking out this common factor gives 6x²(x² - 1). Always look for common factors first when factorizing expressions! 📝",
        wrongAnswerExplanations: {
            "Grouping terms": "This method is used when there are 4 or more terms, but here we only have 2 terms.",
            "Using difference of squares": "This can be used after taking out the common factor, but not as the first step.",
            "Using quadratic formula": "This is used to solve quadratic equations, not to factorize expressions."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch2_t6_qe9',
        type: "mcq",
        question: "Which of the following is the factorization of x² - 5x - 14?",
        options: ["(x - 7)(x + 2)", "(x + 7)(x - 2)", "(x - 2)(x - 7)", "(x + 7)(x + 2)"],
        correctAnswer: "(x - 7)(x + 2)",
        explanation: "To factorize x² - 5x - 14, we need to find two numbers that multiply to give -14 and add up to -5. These numbers are -7 and 2 ((-7) × 2 = -14 and -7 + 2 = -5). So the factorization is (x - 7)(x + 2). 🔢",
        wrongAnswerExplanations: {
            "(x + 7)(x - 2)": "This expands to x² + 5x - 14, which is different from x² - 5x - 14.",
            "(x - 2)(x - 7)": "This expands to x² - 9x + 14, which is different from x² - 5x - 14.",
            "(x + 7)(x + 2)": "This expands to x² + 9x + 14, which is different from x² - 5x - 14."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch2_t6_qe10',
        type: "mcq",
        question: "Which of the following polynomials can be factorized using the identity a³ + b³ = (a + b)(a² - ab + b²)?",
        options: ["x³ + 8", "x³ - 27", "x³ + 27y³", "x³ - 8y³"],
        correctAnswer: "x³ + 8",
        explanation: "The identity a³ + b³ = (a + b)(a² - ab + b²) applies to sums of cubes. In x³ + 8, we can identify a = x and b = 2 (since 2³ = 8), making it a sum of cubes that can be factorized as (x + 2)(x² - 2x + 4). 🧮",
        wrongAnswerExplanations: {
            "x³ - 27": "This is a difference of cubes (a³ - b³), not a sum of cubes.",
            "x³ + 27y³": "This is a sum of cubes, but the second variable complicates the application of the formula.",
            "x³ - 8y³": "This is a difference of cubes (a³ - b³), not a sum of cubes."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch2_t6_qe11',
        type: "mcq",
        question: "What is the complete factorization of x⁴ - 16?",
        options: ["(x² - 4)(x² + 4)", "(x - 2)(x + 2)(x² + 4)", "(x - 2)²(x + 2)²", "(x - 2)(x + 2)(x - 2i)(x + 2i)"],
        correctAnswer: "(x - 2)(x + 2)(x² + 4)",
        explanation: "First recognize x⁴ - 16 as a difference of squares: (x²)² - 4². This gives (x² - 4)(x² + 4). Further factorize x² - 4 as (x - 2)(x + 2). So x⁴ - 16 = (x - 2)(x + 2)(x² + 4). Full factorization requires multiple steps! 🔍",
        wrongAnswerExplanations: {
            "(x² - 4)(x² + 4)": "This is only partially factorized, as x² - 4 can be further factorized.",
            "(x - 2)²(x + 2)²": "This expands to (x² - 4)² = x⁴ - 8x² + 16, not x⁴ - 16.",
            "(x - 2)(x + 2)(x - 2i)(x + 2i)": "This includes complex numbers, which is beyond standard factorization in real numbers."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch2_t6_qe12',
        type: "mcq",
        question: "Which method is used to factorize x² - 4x - 12?",
        options: ["Finding factors of -12 that add up to -4", "Completing the square", "Taking out common factors", "Difference of squares"],
        correctAnswer: "Finding factors of -12 that add up to -4",
        explanation: "To factorize x² - 4x - 12, we need to find two numbers whose product is -12 and sum is -4. These numbers are -6 and 2 ((-6) × 2 = -12 and -6 + 2 = -4). So the factorization is (x - 6)(x + 2). 📊",
        wrongAnswerExplanations: {
            "Completing the square": "This transforms a quadratic into vertex form, not factorized form.",
            "Taking out common factors": "There are no common factors in x² - 4x - 12.",
            "Difference of squares": "This only applies to expressions of the form a² - b²."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch2_t6_qe13',
        type: "mcq",
        question: "Which of these expressions is a perfect square trinomial?",
        options: ["x² + 8x + 16", "x² - 6x + 8", "x² + 5x + 6", "x² - 9"],
        correctAnswer: "x² + 8x + 16",
        explanation: "A perfect square trinomial follows the pattern a² + 2ab + b² = (a + b)². Here, x² + 8x + 16 matches this pattern where a = x and b = 4 (2ab = 2(x)(4) = 8x and b² = 4² = 16). So it equals (x + 4)². 🔢",
        wrongAnswerExplanations: {
            "x² - 6x + 8": "This doesn't match the pattern a² - 2ab + b² as 8 is not a perfect square.",
            "x² + 5x + 6": "This isn't a perfect square trinomial as 6 ≠ (5/2)².",
            "x² - 9": "This is a binomial (difference of squares), not a trinomial."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch2_t6_qe14',
        type: "mcq",
        question: "How do you factorize the expression 2x² - 50?",
        options: ["2(x - 5)(x + 5)", "2(x² - 25)", "(2x - 10)(x + 5)", "(x - 5)(2x + 10)"],
        correctAnswer: "2(x - 5)(x + 5)",
        explanation: "First take out the common factor 2: 2x² - 50 = 2(x² - 25). Then recognize x² - 25 as a difference of squares: (x - 5)(x + 5). So 2x² - 50 = 2(x - 5)(x + 5). Always look for the common factor first! 🧩",
        wrongAnswerExplanations: {
            "2(x² - 25)": "This is partially factorized; x² - 25 can be further factorized.",
            "(2x - 10)(x + 5)": "This expands to 2x² + 10x - 10x - 50 = 2x² - 50, but isn't the conventional form.",
            "(x - 5)(2x + 10)": "This is equivalent to (x - 5)(2)(x + 5), which is the same as 2(x - 5)(x + 5)."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch2_t6_qe15',
        type: "mcq",
        question: "Which of the following is the factorization of x² + 7x + 10?",
        options: ["(x + 5)(x + 2)", "(x + 10)(x - 3)", "(x - 5)(x - 2)", "(x - 10)(x + 3)"],
        correctAnswer: "(x + 5)(x + 2)",
        explanation: "To factorize x² + 7x + 10, we need to find two numbers that multiply to give 10 and add up to 7. These numbers are 5 and 2 (5 × 2 = 10 and 5 + 2 = 7). So the factorization is (x + 5)(x + 2). 📝",
        wrongAnswerExplanations: {
            "(x + 10)(x - 3)": "This expands to x² + 7x - 30, which is different from x² + 7x + 10.",
            "(x - 5)(x - 2)": "This expands to x² - 7x + 10, which is different from x² + 7x + 10.",
            "(x - 10)(x + 3)": "This expands to x² - 7x - 30, which is different from x² + 7x + 10."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch2_t6_qe16',
        type: "mcq",
        question: "What is the first step to factorize x² - 8x + 15?",
        options: ["Find two numbers that multiply to 15 and add up to -8", "Use the quadratic formula", "Complete the square", "Factor out the GCD"],
        correctAnswer: "Find two numbers that multiply to 15 and add up to -8",
        explanation: "To factorize x² - 8x + 15, we need to find two numbers whose product is 15 and sum is -8. These numbers are -5 and -3 ((-5) × (-3) = 15 and -5 + (-3) = -8). So the factorization is (x - 5)(x - 3). 🔍",
        wrongAnswerExplanations: {
            "Use the quadratic formula": "This is used to find roots, not to factorize directly.",
            "Complete the square": "This transforms a quadratic into vertex form, not factorized form.",
            "Factor out the GCD": "There is no common factor to take out in this expression."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch2_t6_qe17',
        type: "mcq",
        question: "Which of the following expressions can be factorized using the difference of squares formula?",
        options: ["16x² - 25y²", "4x² + 9y²", "9x² - 6xy + y²", "25x² + 30xy + 9y²"],
        correctAnswer: "16x² - 25y²",
        explanation: "The difference of squares formula a² - b² = (a + b)(a - b) applies to 16x² - 25y², where a = 4x and b = 5y. So 16x² - 25y² = (4x)² - (5y)² = (4x + 5y)(4x - 5y). Identifying the pattern is key! 🧮",
        wrongAnswerExplanations: {
            "4x² + 9y²": "This is a sum of squares, which cannot be factorized using standard methods.",
            "9x² - 6xy + y²": "This is a perfect square trinomial (3x - y)², not a difference of squares.",
            "25x² + 30xy + 9y²": "This is a perfect square trinomial (5x + 3y)², not a difference of squares."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch2_t6_qe18',
        type: "mcq",
        question: "Which of the following is the factorization of 4x² - 12x + 9?",
        options: ["(2x - 3)²", "(2x + 3)²", "4(x - 3/2)²", "(4x - 3)(x - 3)"],
        correctAnswer: "(2x - 3)²",
        explanation: "4x² - 12x + 9 fits the pattern a² - 2ab + b² = (a - b)² where a = 2x and b = 3. We can verify: (2x)² - 2(2x)(3) + 3² = 4x² - 12x + 9. So the factorization is (2x - 3)². Perfect square trinomials have a specific pattern! 📊",
        wrongAnswerExplanations: {
            "(2x + 3)²": "This expands to 4x² + 12x + 9, which has a '+' in the middle term, not '-'.",
            "4(x - 3/2)²": "This expands to 4(x² - 3x + 9/4) = 4x² - 12x + 9, which is correct but not in standard form.",
            "(4x - 3)(x - 3)": "This expands to 4x² - 12x - 3x + 9 = 4x² - 15x + 9, which is incorrect."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch2_t6_qe19',
        type: "mcq",
        question: "What is the factorized form of 25x² - 16?",
        options: ["(5x - 4)(5x + 4)", "(5x - 4)²", "(25x - 4)(x + 4)", "(5x)² - 4²"],
        correctAnswer: "(5x - 4)(5x + 4)",
        explanation: "25x² - 16 is a difference of squares: (5x)² - 4². Using the formula a² - b² = (a + b)(a - b), we get 25x² - 16 = (5x + 4)(5x - 4). Recognizing the difference of squares pattern saves time! 🔢",
        wrongAnswerExplanations: {
            "(5x - 4)²": "This expands to 25x² - 40x + 16, which is different from 25x² - 16.",
            "(25x - 4)(x + 4)": "This expands to 25x² + 100x - 4x - 16 = 25x² + 96x - 16, which is incorrect.",
            "(5x)² - 4²": "This is the original expression rewritten, not factorized."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch2_t6_qe20',
        type: "mcq",
        question: "When factorizing x² + x - 6, which pair of numbers multiply to give -6 and add up to 1?",
        options: ["3 and -2", "6 and -1", "-3 and 2", "2 and -3"],
        correctAnswer: "3 and -2",
        explanation: "We need two numbers p and q where p × q = -6 and p + q = 1. Testing the pairs: 3 × (-2) = -6 and 3 + (-2) = 1. So the numbers are 3 and -2, giving the factorization (x + 3)(x - 2). 🧩",
        wrongAnswerExplanations: {
            "6 and -1": "6 × (-1) = -6, but 6 + (-1) = 5, not 1.",
            "-3 and 2": "-3 × 2 = -6, but -3 + 2 = -1, not 1.",
            "2 and -3": "2 × (-3) = -6, but 2 + (-3) = -1, not 1."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 45
    }
]; 