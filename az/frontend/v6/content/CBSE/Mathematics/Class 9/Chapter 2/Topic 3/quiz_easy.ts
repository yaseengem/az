import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl9_ch2_t3_qe1',
        type: "mcq",
        question: "What is a zero of a polynomial P(x)?",
        options: ["A value of x for which P(x) = 0", "A value of x for which P(x) = 1", "A coefficient that equals zero", "The constant term of the polynomial"],
        correctAnswer: "A value of x for which P(x) = 0",
        explanation: "A zero (or root) of a polynomial P(x) is a value of x for which P(x) = 0. It's where the polynomial equals zero when that value is substituted for the variable. 🌟",
        wrongAnswerExplanations: {
            "A value of x for which P(x) = 1": "A zero specifically makes the polynomial equal to 0, not 1.",
            "A coefficient that equals zero": "While polynomials can have zero coefficients, that's not what 'zero of a polynomial' refers to.",
            "The constant term of the polynomial": "The constant term is just one of the coefficients, not a value of the variable that makes the polynomial zero."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch2_t3_qe2',
        type: "mcq",
        question: "What is the zero of the linear polynomial P(x) = x - 5?",
        options: ["0", "5", "-5", "Cannot be determined"],
        correctAnswer: "5",
        explanation: "To find the zero, we set P(x) = 0 and solve: x - 5 = 0, which gives x = 5. When we substitute x = 5 into the polynomial, we get P(5) = 5 - 5 = 0, confirming that 5 is the zero. 🔢",
        wrongAnswerExplanations: {
            "0": "If we substitute x = 0, we get P(0) = 0 - 5 = -5, which is not zero.",
            "-5": "If we substitute x = -5, we get P(-5) = -5 - 5 = -10, which is not zero.",
            "Cannot be determined": "The zero can be determined by solving the equation x - 5 = 0."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch2_t3_qe3',
        type: "mcq",
        question: "Find the zero of the linear polynomial P(x) = 2x + 8.",
        options: ["-4", "4", "-8", "8"],
        correctAnswer: "-4",
        explanation: "To find the zero, we set P(x) = 0 and solve: 2x + 8 = 0, which gives 2x = -8, so x = -4. We can verify that P(-4) = 2(-4) + 8 = -8 + 8 = 0. 📏",
        wrongAnswerExplanations: {
            "4": "If we substitute x = 4, we get P(4) = 2(4) + 8 = 16, which is not zero.",
            "-8": "If we substitute x = -8, we get P(-8) = 2(-8) + 8 = -16 + 8 = -8, which is not zero.",
            "8": "If we substitute x = 8, we get P(8) = 2(8) + 8 = 24, which is not zero."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch2_t3_qe4',
        type: "mcq",
        question: "What is the geometric meaning of a zero of a polynomial in terms of its graph?",
        options: ["The point where the graph crosses the y-axis", "The point where the graph crosses the x-axis", "The highest point on the graph", "The lowest point on the graph"],
        correctAnswer: "The point where the graph crosses the x-axis",
        explanation: "The zeroes of a polynomial are the x-coordinates of the points where the graph of the polynomial crosses or touches the x-axis. At these points, the y-coordinate (the value of the polynomial) is zero. 📈",
        wrongAnswerExplanations: {
            "The point where the graph crosses the y-axis": "This corresponds to the constant term, not the zeroes of the polynomial.",
            "The highest point on the graph": "This would be a maximum point, not necessarily a zero.",
            "The lowest point on the graph": "This would be a minimum point, not necessarily a zero."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch2_t3_qe5',
        type: "mcq",
        question: "Which of the following is a zero of the polynomial P(x) = x² - 4?",
        options: ["1", "2", "3", "4"],
        correctAnswer: "2",
        explanation: "To find the zeroes, we set P(x) = 0 and solve: x² - 4 = 0, which gives x² = 4, so x = ±2. When x = 2, P(2) = 2² - 4 = 4 - 4 = 0, confirming that 2 is a zero. (Note that -2 is also a zero, but it's not among the options.) 🧮",
        wrongAnswerExplanations: {
            "1": "If we substitute x = 1, we get P(1) = 1² - 4 = 1 - 4 = -3, which is not zero.",
            "3": "If we substitute x = 3, we get P(3) = 3² - 4 = 9 - 4 = 5, which is not zero.",
            "4": "If we substitute x = 4, we get P(4) = 4² - 4 = 16 - 4 = 12, which is not zero."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch2_t3_qe6',
        type: "mcq",
        question: "A polynomial of degree n can have at most how many zeroes?",
        options: ["n-1", "n", "n+1", "2n"],
        correctAnswer: "n",
        explanation: "According to the Fundamental Theorem of Algebra, a polynomial of degree n can have at most n zeroes. For example, a linear polynomial (degree 1) can have at most 1 zero, a quadratic polynomial (degree 2) can have at most 2 zeroes, and so on. 🔢",
        wrongAnswerExplanations: {
            "n-1": "This is less than the maximum possible number of zeroes.",
            "n+1": "This exceeds the maximum possible number of zeroes.",
            "2n": "This greatly exceeds the maximum possible number of zeroes."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch2_t3_qe7',
        type: "mcq",
        question: "If k is a zero of a polynomial P(x), which of the following is a factor of P(x)?",
        options: ["(x + k)", "(x - k)", "k", "P(k)"],
        correctAnswer: "(x - k)",
        explanation: "According to the Factor Theorem, if k is a zero of a polynomial P(x), then (x - k) is a factor of P(x). This means P(x) can be written as P(x) = (x - k) × Q(x) for some polynomial Q(x). 📊",
        wrongAnswerExplanations: {
            "(x + k)": "This would be a factor if -k were a zero, not k.",
            "k": "A zero of a polynomial becomes a factor in the form (x - k), not just k by itself.",
            "P(k)": "P(k) equals zero when k is a zero, it's not a factor of P(x)."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch2_t3_qe8',
        type: "mcq",
        question: "Verify if 3 is a zero of the polynomial P(x) = x² - 9.",
        options: ["Yes, because P(3) = 0", "No, because P(3) = 9", "Yes, because P(3) = -9", "No, because P(3) = 0"],
        correctAnswer: "Yes, because P(3) = 0",
        explanation: "To verify if 3 is a zero, we substitute x = 3 into P(x): P(3) = 3² - 9 = 9 - 9 = 0. Since P(3) = 0, 3 is indeed a zero of the polynomial. 📝",
        wrongAnswerExplanations: {
            "No, because P(3) = 9": "P(3) = 3² - 9 = 9 - 9 = 0, not 9.",
            "Yes, because P(3) = -9": "P(3) = 3² - 9 = 9 - 9 = 0, not -9.",
            "No, because P(3) = 0": "P(3) = 0 actually confirms that 3 is a zero, not that it isn't."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch2_t3_qe9',
        type: "mcq",
        question: "The degree of a polynomial P(x) is 3. What is the maximum number of zeroes it can have?",
        options: ["1", "2", "3", "4"],
        correctAnswer: "3",
        explanation: "A polynomial of degree 3 (a cubic polynomial) can have at most 3 zeroes. This follows from the Fundamental Theorem of Algebra, which states that a polynomial of degree n can have at most n zeroes. 🌟",
        wrongAnswerExplanations: {
            "1": "A cubic polynomial can have more than 1 zero.",
            "2": "A cubic polynomial can have more than 2 zeroes.",
            "4": "A cubic polynomial cannot have more than 3 zeroes."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch2_t3_qe10',
        type: "mcq",
        question: "Find the zero of the linear polynomial P(x) = 3 - x.",
        options: ["0", "3", "-3", "1/3"],
        correctAnswer: "3",
        explanation: "To find the zero, set P(x) = 0 and solve: 3 - x = 0, which gives x = 3. We can verify: P(3) = 3 - 3 = 0, confirming that 3 is the zero. 🔢",
        wrongAnswerExplanations: {
            "0": "P(0) = 3 - 0 = 3, which is not zero.",
            "-3": "P(-3) = 3 - (-3) = 3 + 3 = 6, which is not zero.",
            "1/3": "P(1/3) = 3 - 1/3 = 8/3, which is not zero."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    }
]; 