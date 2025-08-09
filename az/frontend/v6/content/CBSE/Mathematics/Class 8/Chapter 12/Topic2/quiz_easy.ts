// filepath: content/CBSE/Mathematics/Class 8/Chapter12/Topic2/quiz_easy.ts
import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl8_ch12_t2_qe1',
        type: "mcq",
        question: "What is the factored form of x² + 5x + 6?",
        options: ["(x + 2)(x + 3)", "(x + 3)(x + 2)", "(x - 2)(x - 3)", "(x - 3)(x + 2)"],
        correctAnswer: "(x + 2)(x + 3)",
        explanation: "To factor x² + 5x + 6, find two numbers that add to 5 and multiply to 6. These numbers are 2 and 3, so the factors are (x + 2)(x + 3). 🔢",
        wrongAnswerExplanations: {
            "(x + 3)(x + 2)": "While this is technically correct due to multiplication being commutative, the standard form lists factors in ascending order.",
            "(x - 2)(x - 3)": "This would give x² - 5x + 6, which is not the original expression.",
            "(x - 3)(x + 2)": "This would give x² - x - 6, which is not the original expression."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch12_t2_qe2',
        type: "mcq",
        question: "Which of these is a factor of x² - 4?",
        options: ["(x + 2)", "(x - 2)", "(x + 4)", "(x - 4)"],
        correctAnswer: "(x + 2)",
        explanation: "x² - 4 is a difference of squares (a² - b²), which factors as (x + 2)(x - 2). Therefore, (x + 2) is one of its factors. 🎯",
        wrongAnswerExplanations: {
            "(x - 2)": "While this is also a factor, it's not the one listed in the options.",
            "(x + 4)": "This is not a factor. The factors are (x + 2) and (x - 2).",
            "(x - 4)": "This is not a factor. The factors are (x + 2) and (x - 2)."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch12_t2_qe3',
        type: "mcq",
        question: "What is the common factor in 3x²y and 6xy²?",
        options: ["3xy", "6xy", "3x", "xy"],
        correctAnswer: "3xy",
        explanation: "Find the common variables with lowest powers and common coefficient: 3 is common, x appears with power 1 or more in both terms, y appears with power 1 or more in both terms. So 3xy is the common factor. 📝",
        wrongAnswerExplanations: {
            "6xy": "6 is not a common factor as it only appears in the second term.",
            "3x": "This misses the common y term.",
            "xy": "This misses the common coefficient 3."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch12_t2_qe4',
        type: "mcq",
        question: "Which expression is already in factored form?",
        options: ["x² + 4x", "2(x + 3)", "x² - 9", "x + 2"],
        correctAnswer: "2(x + 3)",
        explanation: "2(x + 3) is already factored as it shows a common factor 2 multiplied by a binomial (x + 3). No further factorization is possible. ✨",
        wrongAnswerExplanations: {
            "x² + 4x": "This can be factored as x(x + 4).",
            "x² - 9": "This can be factored as (x + 3)(x - 3).",
            "x + 2": "This is a binomial that cannot be factored further, but it's not in factored form to begin with."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch12_t2_qe5',
        type: "mcq",
        question: "What is the factored form of 2x² + 10x?",
        options: ["2x(x + 5)", "x(2x + 10)", "2(x² + 5x)", "x(x + 5)"],
        correctAnswer: "2x(x + 5)",
        explanation: "Take out the common factor: 2x is common to both terms. Then group the remaining terms: 2x(x + 5). This is the most simplified factored form. 🎨",
        wrongAnswerExplanations: {
            "x(2x + 10)": "While mathematically correct, it's not the most simplified form as 2 can be factored out.",
            "2(x² + 5x)": "While mathematically correct, it's not the most simplified form as x can be factored out.",
            "x(x + 5)": "This is incorrect as it misses the common factor 2."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch12_t2_qe6',
        type: "mcq",
        question: "Which of these expressions has x - 2 as a factor?",
        options: ["x² - 4", "x² - 2x", "x² - 4x + 4", "x² + 2x + 4"],
        correctAnswer: "x² - 4x + 4",
        explanation: "x² - 4x + 4 can be factored as (x - 2)(x - 2) or (x - 2)². This is a perfect square trinomial, so x - 2 is indeed a factor. 🎭",
        wrongAnswerExplanations: {
            "x² - 4": "This factors as (x + 2)(x - 2), but we're specifically looking for x - 2.",
            "x² - 2x": "This factors as x(x - 2), but we're looking for the complete factor x - 2.",
            "x² + 2x + 4": "This is (x + 2)², which doesn't have x - 2 as a factor."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch12_t2_qe7',
        type: "mcq",
        question: "What is the factored form of x² + 2x + 1?",
        options: ["(x + 1)²", "(x - 1)²", "(x + 1)(x + 1)", "(x - 1)(x - 1)"],
        correctAnswer: "(x + 1)²",
        explanation: "This is a perfect square trinomial. When a trinomial has the form a² + 2ab + b², it factors as (a + b)². Here, a = x and b = 1, so it's (x + 1)². 🔷",
        wrongAnswerExplanations: {
            "(x - 1)²": "This would expand to x² - 2x + 1, not x² + 2x + 1.",
            "(x + 1)(x + 1)": "While this is technically correct, the more concise notation is (x + 1)².",
            "(x - 1)(x - 1)": "This would expand to x² - 2x + 1, not x² + 2x + 1."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch12_t2_qe8',
        type: "mcq",
        question: "Which expression represents the factored form of 6x² - 3x?",
        options: ["3x(2x - 1)", "x(6x - 3)", "3(2x² - x)", "6x(x - 1)"],
        correctAnswer: "3x(2x - 1)",
        explanation: "Take out the greatest common factor: 3x is common to both terms. Then group the remaining terms: 3x(2x - 1). This is the most simplified factored form. 🎯",
        wrongAnswerExplanations: {
            "x(6x - 3)": "While mathematically correct, it's not the most simplified form as 3 can be factored out.",
            "3(2x² - x)": "While mathematically correct, it's not the most simplified form as x can be factored out.",
            "6x(x - 1)": "This is incorrect as it would give 6x² - 6x, not 6x² - 3x."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch12_t2_qe9',
        type: "mcq",
        question: "What is the common factor in 8x³y² and 12x²y³?",
        options: ["4x²y²", "8x²y²", "4xy²", "4x²y"],
        correctAnswer: "4x²y²",
        explanation: "Find the common coefficient (GCD of 8 and 12 = 4) and common variables with lowest powers (x² appears in both, y² appears in both). So 4x²y² is the common factor. 📊",
        wrongAnswerExplanations: {
            "8x²y²": "8 is not a common factor as the second term only has a factor of 4.",
            "4xy²": "This misses the common x term (x² is common).",
            "4x²y": "This misses one power of y (y² is common)."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch12_t2_qe10',
        type: "mcq",
        question: "Which of these is the factored form of x² - y²?",
        options: ["(x + y)(x - y)", "(x - y)(x - y)", "(x + y)(x + y)", "(x - y)²"],
        correctAnswer: "(x + y)(x - y)",
        explanation: "x² - y² is a difference of squares (a² - b²), which always factors as (a + b)(a - b). Here, a = x and b = y, so it factors as (x + y)(x - y). 🔲",
        wrongAnswerExplanations: {
            "(x - y)(x - y)": "This would give x² - 2xy + y², not x² - y².",
            "(x + y)(x + y)": "This would give x² + 2xy + y², not x² - y².",
            "(x - y)²": "This would give x² - 2xy + y², not x² - y²."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch12_t2_qe11',
        type: "mcq",
        question: "What is the factored form of 3x² - 12?",
        options: ["3(x² - 4)", "3(x + 2)(x - 2)", "(3x + 6)(x - 2)", "(x + 2)(3x - 6)"],
        correctAnswer: "3(x + 2)(x - 2)",
        explanation: "First factor out the common factor 3, giving 3(x² - 4). Then factor x² - 4 as a difference of squares: (x + 2)(x - 2). The final answer is 3(x + 2)(x - 2). 🎨",
        wrongAnswerExplanations: {
            "3(x² - 4)": "This is partially factored. x² - 4 can be factored further.",
            "(3x + 6)(x - 2)": "This would expand to 3x² - 6x + 6x - 12, which is not the original expression.",
            "(x + 2)(3x - 6)": "This would expand to 3x² - 6x + 6x - 12, which is not the original expression."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch12_t2_qe12',
        type: "mcq",
        question: "Which expression is the factored form of 4x² + 12x + 9?",
        options: ["(2x + 3)²", "(2x - 3)²", "4(x + 3)²", "(4x + 3)²"],
        correctAnswer: "(2x + 3)²",
        explanation: "This is a perfect square trinomial. Comparing with a² + 2ab + b², we see that a = 2x and b = 3, making the factored form (2x + 3)². 🔷",
        wrongAnswerExplanations: {
            "(2x - 3)²": "This would expand to 4x² - 12x + 9, not 4x² + 12x + 9.",
            "4(x + 3)²": "This would expand to 4x² + 24x + 36, not 4x² + 12x + 9.",
            "(4x + 3)²": "This would expand to 16x² + 24x + 9, not 4x² + 12x + 9."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch12_t2_qe13',
        type: "mcq",
        question: "What is the factored form of xy + 2y?",
        options: ["y(x + 2)", "x(y + 2)", "2(xy + y)", "(x + 2)y"],
        correctAnswer: "y(x + 2)",
        explanation: "Find the common factor: y appears in both terms. Factor it out: y(x + 2). This is the most simplified factored form. 🎯",
        wrongAnswerExplanations: {
            "x(y + 2)": "This would expand to xy + 2x, not xy + 2y.",
            "2(xy + y)": "This would expand to 2xy + 2y, not xy + 2y.",
            "(x + 2)y": "While this is technically correct, the standard form puts the common factor first: y(x + 2)."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch12_t2_qe14',
        type: "mcq",
        question: "Which of these expressions has 2x as a common factor?",
        options: ["2x² + 4x", "x² + 2x", "2x² + x", "x² + 4x"],
        correctAnswer: "2x² + 4x",
        explanation: "In 2x² + 4x, both terms contain 2x: 2x² = (2x)(x) and 4x = (2x)(2). Therefore, 2x is a common factor. 📝",
        wrongAnswerExplanations: {
            "x² + 2x": "The common factor here is only x, not 2x.",
            "2x² + x": "There is no common factor of 2x as the second term only has x.",
            "x² + 4x": "The common factor here is only x, not 2x."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch12_t2_qe15',
        type: "mcq",
        question: "What is the factored form of x² - 6x + 9?",
        options: ["(x - 3)²", "(x + 3)²", "(x - 3)(x - 3)", "(x + 3)(x - 3)"],
        correctAnswer: "(x - 3)²",
        explanation: "This is a perfect square trinomial in the form a² - 2ab + b², which factors as (a - b)². Here, a = x and b = 3, so it factors as (x - 3)². 🎭",
        wrongAnswerExplanations: {
            "(x + 3)²": "This would expand to x² + 6x + 9, not x² - 6x + 9.",
            "(x - 3)(x - 3)": "While this is technically correct, the more concise notation is (x - 3)².",
            "(x + 3)(x - 3)": "This would expand to x² - 9, not x² - 6x + 9."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch12_t2_qe16',
        type: "mcq",
        question: "Which expression represents the factored form of 5x² - 15x?",
        options: ["5x(x - 3)", "x(5x - 15)", "5(x² - 3x)", "5x(x + 3)"],
        correctAnswer: "5x(x - 3)",
        explanation: "Take out the greatest common factor: 5x is common to both terms. Then group the remaining terms: 5x(x - 3). This is the most simplified factored form. ✨",
        wrongAnswerExplanations: {
            "x(5x - 15)": "While mathematically correct, it's not the most simplified form as 5 can be factored out.",
            "5(x² - 3x)": "While mathematically correct, it's not the most simplified form as x can be factored out.",
            "5x(x + 3)": "This would expand to 5x² + 15x, not 5x² - 15x."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch12_t2_qe17',
        type: "mcq",
        question: "What is the factored form of 2x² + 6x + 4?",
        options: ["2(x² + 3x + 2)", "2(x + 2)(x + 1)", "2(x + 1)²", "(2x + 2)(x + 2)"],
        correctAnswer: "2(x + 2)(x + 1)",
        explanation: "First factor out the common factor 2: 2(x² + 3x + 2). Then factor the trinomial inside by finding numbers that add to 3 and multiply to 2: 2(x + 2)(x + 1). 🔢",
        wrongAnswerExplanations: {
            "2(x² + 3x + 2)": "This is partially factored. The expression inside the parentheses can be factored further.",
            "2(x + 1)²": "This would expand to 2x² + 4x + 2, not 2x² + 6x + 4.",
            "(2x + 2)(x + 2)": "This would expand to 2x² + 6x + 4, but it's not in the most simplified form."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch12_t2_qe18',
        type: "mcq",
        question: "Which of these is a factor of x² + 6x + 9?",
        options: ["(x + 3)", "(x - 3)", "(x + 9)", "(x - 9)"],
        correctAnswer: "(x + 3)",
        explanation: "x² + 6x + 9 is a perfect square trinomial that factors as (x + 3)². Therefore, (x + 3) is one of its factors. 🎯",
        wrongAnswerExplanations: {
            "(x - 3)": "This would be a factor of x² - 6x + 9, not x² + 6x + 9.",
            "(x + 9)": "This is not a factor. The factors are (x + 3) twice.",
            "(x - 9)": "This is not a factor. The factors are (x + 3) twice."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch12_t2_qe19',
        type: "mcq",
        question: "What is the common factor in 12x²y and 18xy²?",
        options: ["6xy", "12xy", "6x", "6y"],
        correctAnswer: "6xy",
        explanation: "Find the common coefficient (GCD of 12 and 18 = 6) and common variables with lowest powers (x appears with power 1 or more, y appears with power 1 or more). So 6xy is the common factor. 📊",
        wrongAnswerExplanations: {
            "12xy": "12 is not a common factor as the second term only has a factor of 6.",
            "6x": "This misses the common y term.",
            "6y": "This misses the common x term."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch12_t2_qe20',
        type: "mcq",
        question: "Which expression is NOT in factored form?",
        options: ["x² + 4x + 4", "2(x + 1)", "(x - 2)(x + 3)", "(x + 1)(x - 1)"],
        correctAnswer: "x² + 4x + 4",
        explanation: "x² + 4x + 4 is a perfect square trinomial that can be factored as (x + 2)². All other options are already in factored form. 🔍",
        wrongAnswerExplanations: {
            "2(x + 1)": "This is already in factored form with 2 as a factor.",
            "(x - 2)(x + 3)": "This is already in factored form as a product of binomials.",
            "(x + 1)(x - 1)": "This is already in factored form as a difference of squares."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    }
]; 