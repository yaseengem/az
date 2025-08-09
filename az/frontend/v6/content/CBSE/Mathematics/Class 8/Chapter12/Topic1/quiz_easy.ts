import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl8_ch12_t1_qe1',
        type: "mcq",
        question: "What is the factored form of x² + 5x + 6?",
        options: ["(x + 2)(x + 3)", "(x - 2)(x - 3)", "(x + 3)(x + 2)", "(x - 3)(x + 2)"],
        correctAnswer: "(x + 2)(x + 3)",
        explanation: "The factors are (x + 2) and (x + 3) because 2 + 3 = 5 (coefficient of x) and 2 × 3 = 6 (constant term). 🔢",
        wrongAnswerExplanations: {
            "(x - 2)(x - 3)": "This gives x² - 5x + 6, not x² + 5x + 6.",
            "(x + 3)(x + 2)": "This is the same as (x + 2)(x + 3), just written in a different order.",
            "(x - 3)(x + 2)": "This gives x² - x - 6, not x² + 5x + 6."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch12_t1_qe2',
        type: "mcq",
        question: "Which of these is a perfect square trinomial?",
        options: ["x² + 4x + 4", "x² + 4x + 3", "x² - 4x + 3", "x² - 2x + 3"],
        correctAnswer: "x² + 4x + 4",
        explanation: "x² + 4x + 4 is a perfect square trinomial because it can be written as (x + 2)². The middle term is twice the product of the terms in the binomial. 🎯",
        wrongAnswerExplanations: {
            "x² + 4x + 3": "This is not a perfect square as it factors to (x + 1)(x + 3).",
            "x² - 4x + 3": "This is not a perfect square as it factors to (x - 1)(x - 3).",
            "x² - 2x + 3": "This is not a perfect square as it cannot be factored."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch12_t1_qe3',
        type: "mcq",
        question: "What is the factored form of x² - y²?",
        options: ["(x + y)(x - y)", "(x - y)(x - y)", "(x + y)(x + y)", "(x - y²)"],
        correctAnswer: "(x + y)(x - y)",
        explanation: "x² - y² is the difference of squares and can be factored as (x + y)(x - y). This is a standard algebraic identity. 📐",
        wrongAnswerExplanations: {
            "(x - y)(x - y)": "This equals x² - 2xy + y², not x² - y².",
            "(x + y)(x + y)": "This equals x² + 2xy + y², not x² - y².",
            "(x - y²)": "This is not a valid factorization of x² - y²."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch12_t1_qe4',
        type: "mcq",
        question: "Which method would you use to factorize 3x² + 15x?",
        options: ["Common factor", "Difference of squares", "Perfect square trinomial", "Grouping"],
        correctAnswer: "Common factor",
        explanation: "3x² + 15x has a common factor of 3x, giving 3x(x + 5). Common factoring is the first step in factorization. 🎨",
        wrongAnswerExplanations: {
            "Difference of squares": "This method is for expressions like a² - b².",
            "Perfect square trinomial": "This method is for expressions like a² + 2ab + b².",
            "Grouping": "This method is used when there are 4 terms."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch12_t1_qe5',
        type: "mcq",
        question: "What is the factored form of x² + 6x + 9?",
        options: ["(x + 3)²", "(x - 3)²", "(x + 3)(x + 3)", "(x - 3)(x - 3)"],
        correctAnswer: "(x + 3)²",
        explanation: "x² + 6x + 9 is a perfect square trinomial. The middle term (6x) is twice the product of x and 3, and 9 is the square of 3. Therefore, it factors to (x + 3)². 🎯",
        wrongAnswerExplanations: {
            "(x - 3)²": "This expands to x² - 6x + 9, not x² + 6x + 9.",
            "(x + 3)(x + 3)": "This is the same as (x + 3)², just written differently.",
            "(x - 3)(x - 3)": "This expands to x² - 6x + 9, not x² + 6x + 9."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch12_t1_qe6',
        type: "mcq",
        question: "Which expression has 5 as a common factor?",
        options: ["5x² + 10x", "x² + 5x", "5x² + 5", "5x² + 15x + 20"],
        correctAnswer: "5x² + 15x + 20",
        explanation: "5x² + 15x + 20 = 5(x² + 3x + 4). All terms have 5 as a common factor. 🔢",
        wrongAnswerExplanations: {
            "5x² + 10x": "This has 5x as a common factor, not just 5.",
            "x² + 5x": "This has no common factor.",
            "5x² + 5": "This has 5 as a common factor but is not the correct answer."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch12_t1_qe7',
        type: "mcq",
        question: "What is the first step in factoring 6x² - 24?",
        options: ["Take out common factor 6", "Split the middle term", "Use difference of squares", "Group terms"],
        correctAnswer: "Take out common factor 6",
        explanation: "Always start by finding the common factor. Here, 6 is common to both terms: 6(x² - 4). Then you can factor further if possible. 🎯",
        wrongAnswerExplanations: {
            "Split the middle term": "There is no middle term to split.",
            "Use difference of squares": "First take out the common factor, then use difference of squares.",
            "Group terms": "There are only two terms, so grouping is not needed."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch12_t1_qe8',
        type: "mcq",
        question: "Which expression is already in factored form?",
        options: ["(2x + 1)(x - 3)", "x² - 9", "a² + 2ab + b²", "4x² - 16"],
        correctAnswer: "(2x + 1)(x - 3)",
        explanation: "The expression (2x + 1)(x - 3) is already factored as it's written as a product of two binomials. No further factorization is possible. 📝",
        wrongAnswerExplanations: {
            "x² - 9": "This can be factored as (x + 3)(x - 3).",
            "a² + 2ab + b²": "This can be factored as (a + b)².",
            "4x² - 16": "This can be factored as 4(x² - 4) = 4(x + 2)(x - 2)."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch12_t1_qe9',
        type: "mcq",
        question: "What type of expression is x² - 4xy + 4y²?",
        options: ["Perfect square trinomial", "Difference of squares", "Sum of squares", "None of these"],
        correctAnswer: "Perfect square trinomial",
        explanation: "x² - 4xy + 4y² is a perfect square trinomial that factors to (x - 2y)². The middle term -4xy is twice the product of x and -2y. 🎨",
        wrongAnswerExplanations: {
            "Difference of squares": "This form is a² - b², which this expression is not.",
            "Sum of squares": "Sum of squares cannot be factored.",
            "None of these": "It is a perfect square trinomial."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch12_t1_qe10',
        type: "mcq",
        question: "Which is the correct factored form of 25x² - 1?",
        options: ["(5x + 1)(5x - 1)", "(5x)² - 1", "25(x + 1)(x - 1)", "(5x + 5)(5x - 5)"],
        correctAnswer: "(5x + 1)(5x - 1)",
        explanation: "25x² - 1 is a difference of squares where a = 5x and b = 1. Using a² - b² = (a + b)(a - b), we get (5x + 1)(5x - 1). 📐",
        wrongAnswerExplanations: {
            "(5x)² - 1": "This is not factored completely.",
            "25(x + 1)(x - 1)": "This equals 25x² - 25, not 25x² - 1.",
            "(5x + 5)(5x - 5)": "This equals 25x² - 25, not 25x² - 1."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch12_t1_qe11',
        type: "mcq",
        question: "What is the factored form of 3x² + 12x + 12?",
        options: ["3(x² + 4x + 4)", "3(x + 2)²", "3(x + 2)(x + 2)", "(3x + 6)(x + 2)"],
        correctAnswer: "3(x + 2)²",
        explanation: "First take out the common factor 3, giving 3(x² + 4x + 4). Then recognize that x² + 4x + 4 is a perfect square trinomial equal to (x + 2)². 🎯",
        wrongAnswerExplanations: {
            "3(x² + 4x + 4)": "This is partially factored but can be factored further.",
            "3(x + 2)(x + 2)": "This is the same as 3(x + 2)², just written differently.",
            "(3x + 6)(x + 2)": "This is not the correct factorization."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch12_t1_qe12',
        type: "mcq",
        question: "Which expression cannot be factored further?",
        options: ["x² - 4", "x² + x + 1", "x² + 6x + 9", "x² - 9"],
        correctAnswer: "x² + x + 1",
        explanation: "x² + x + 1 cannot be factored as it has no real factors. It's called a prime trinomial. 🔒",
        wrongAnswerExplanations: {
            "x² - 4": "This can be factored as (x + 2)(x - 2).",
            "x² + 6x + 9": "This can be factored as (x + 3)².",
            "x² - 9": "This can be factored as (x + 3)(x - 3)."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch12_t1_qe13',
        type: "mcq",
        question: "What is the common factor in 12x³y² + 18x²y³ - 24xy⁴?",
        options: ["6xy²", "6x²y²", "6xy", "6x"],
        correctAnswer: "6xy²",
        explanation: "Find the highest power of each variable common to all terms: x¹ and y² are common, and 6 is the GCF of 12, 18, and 24. So 6xy² is the common factor. 🔢",
        wrongAnswerExplanations: {
            "6x²y²": "x² is not common to all terms.",
            "6xy": "y² is common to all terms, not just y.",
            "6x": "y² is also common to all terms."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch12_t1_qe14',
        type: "mcq",
        question: "Which method would you use to factor x² + 2x - 15?",
        options: ["Split middle term", "Common factor", "Perfect square", "Difference of squares"],
        correctAnswer: "Split middle term",
        explanation: "To factor x² + 2x - 15, split the middle term to find two numbers that add to 2 and multiply to -15. The numbers are 5 and -3. 🎯",
        wrongAnswerExplanations: {
            "Common factor": "There is no common factor to all terms.",
            "Perfect square": "This is not a perfect square trinomial.",
            "Difference of squares": "This is not in the form a² - b²."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch12_t1_qe15',
        type: "mcq",
        question: "What is the first step in factoring 2x² + 10x + 12?",
        options: ["Take out 2", "Split the middle term", "Find factors of 12", "Check if it's a perfect square"],
        correctAnswer: "Take out 2",
        explanation: "Always check for a common factor first. Here, 2 is common to all terms: 2(x² + 5x + 6). Then factor the expression inside the parentheses. 🎨",
        wrongAnswerExplanations: {
            "Split the middle term": "First take out the common factor 2.",
            "Find factors of 12": "First take out the common factor 2.",
            "Check if it's a perfect square": "First take out the common factor 2."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch12_t1_qe16',
        type: "mcq",
        question: "Which expression represents (x + 3)²?",
        options: ["x² + 6x + 9", "x² - 6x + 9", "x² + 3x + 9", "x² + 9"],
        correctAnswer: "x² + 6x + 9",
        explanation: "Using the square of binomial formula (a + b)² = a² + 2ab + b², when a = x and b = 3, we get x² + 2(x)(3) + 3² = x² + 6x + 9. 📐",
        wrongAnswerExplanations: {
            "x² - 6x + 9": "This is (x - 3)², not (x + 3)².",
            "x² + 3x + 9": "The middle term should be 6x, not 3x.",
            "x² + 9": "This is missing the middle term 6x."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch12_t1_qe17',
        type: "mcq",
        question: "What is the factored form of x² - 8x + 16?",
        options: ["(x - 4)²", "(x + 4)²", "(x - 4)(x - 4)", "(x + 4)(x - 4)"],
        correctAnswer: "(x - 4)²",
        explanation: "This is a perfect square trinomial. The middle term -8x is twice the product of x and -4, and 16 is the square of 4. Therefore, it factors to (x - 4)². 🎯",
        wrongAnswerExplanations: {
            "(x + 4)²": "This expands to x² + 8x + 16, not x² - 8x + 16.",
            "(x - 4)(x - 4)": "This is the same as (x - 4)², just written differently.",
            "(x + 4)(x - 4)": "This expands to x² - 16, not x² - 8x + 16."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch12_t1_qe18',
        type: "mcq",
        question: "Which of these is a factor of 36x² - 1?",
        options: ["(6x + 1)", "(6x - 1)", "6(x + 1)", "6(x - 1)"],
        correctAnswer: "(6x + 1)",
        explanation: "36x² - 1 is a difference of squares that factors to (6x + 1)(6x - 1). Therefore, (6x + 1) is one of its factors. 🔢",
        wrongAnswerExplanations: {
            "(6x - 1)": "This is also a factor, but not the one asked for.",
            "6(x + 1)": "This is not a factor of 36x² - 1.",
            "6(x - 1)": "This is not a factor of 36x² - 1."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch12_t1_qe19',
        type: "mcq",
        question: "What is the common factor in 15x⁴y³ + 25x³y⁴ - 20x²y⁵?",
        options: ["5x²y³", "5xy³", "5x²y", "5x³y³"],
        correctAnswer: "5x²y³",
        explanation: "Find the highest power of each variable common to all terms: x² and y³ are common, and 5 is the GCF of 15, 25, and 20. So 5x²y³ is the common factor. 🎨",
        wrongAnswerExplanations: {
            "5xy³": "x² is common to all terms, not just x.",
            "5x²y": "y³ is common to all terms, not just y.",
            "5x³y³": "x³ is not common to all terms."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch12_t1_qe20',
        type: "mcq",
        question: "Which expression is the difference of perfect squares?",
        options: ["x² - 4", "x² + 4", "x² - 2x + 1", "x² + 2x + 1"],
        correctAnswer: "x² - 4",
        explanation: "x² - 4 is a difference of perfect squares because it's in the form a² - b² where a = x and b = 2. It factors to (x + 2)(x - 2). 📐",
        wrongAnswerExplanations: {
            "x² + 4": "This is a sum of squares and cannot be factored.",
            "x² - 2x + 1": "This is a perfect square trinomial (x - 1)².",
            "x² + 2x + 1": "This is a perfect square trinomial (x + 1)²."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    }
]; 