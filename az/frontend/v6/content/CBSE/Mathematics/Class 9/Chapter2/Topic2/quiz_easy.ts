import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl9_ch2_t2_qe1',
        type: "mcq",
        question: "What is the degree of the polynomial 4x³ + 2x² - 5x + 7?",
        options: ["2", "3", "4", "7"],
        correctAnswer: "3",
        explanation: "The degree of a polynomial is the highest power of the variable in the polynomial. In 4x³ + 2x² - 5x + 7, the highest power is x³, so the degree is 3. 📏",
        wrongAnswerExplanations: {
            "2": "This is not the highest power in the polynomial.",
            "4": "There is no term with power 4 in this polynomial.",
            "7": "7 is the constant term, not the degree of the polynomial."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch2_t2_qe2',
        type: "mcq",
        question: "Which of the following is a linear polynomial?",
        options: ["3x² - 2", "5x - 3", "x² + x - 1", "2"],
        correctAnswer: "5x - 3",
        explanation: "A linear polynomial has a degree of 1, meaning the highest power of the variable is 1. The polynomial 5x - 3 has degree 1, making it a linear polynomial. 📈",
        wrongAnswerExplanations: {
            "3x² - 2": "This is a quadratic polynomial (degree 2).",
            "x² + x - 1": "This is a quadratic polynomial (degree 2).",
            "2": "This is a constant polynomial (degree 0)."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch2_t2_qe3',
        type: "mcq",
        question: "What is the degree of the constant polynomial 7?",
        options: ["0", "1", "7", "Undefined"],
        correctAnswer: "0",
        explanation: "A constant polynomial like 7 can be written as 7x⁰. Since the power of x is 0, the degree of the constant polynomial 7 is 0. 🔢",
        wrongAnswerExplanations: {
            "1": "The degree is not 1 because there is no x term.",
            "7": "7 is the value of the constant, not its degree.",
            "Undefined": "The degree of a non-zero constant polynomial is defined as 0."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch2_t2_qe4',
        type: "mcq",
        question: "What type of polynomial is x² - 4x + 6?",
        options: ["Linear", "Quadratic", "Cubic", "Constant"],
        correctAnswer: "Quadratic",
        explanation: "A quadratic polynomial has a degree of 2. Since the highest power in x² - 4x + 6 is 2, it is a quadratic polynomial. 📊",
        wrongAnswerExplanations: {
            "Linear": "Linear polynomials have degree 1, but this polynomial has degree 2.",
            "Cubic": "Cubic polynomials have degree 3, but this polynomial has degree 2.",
            "Constant": "Constant polynomials have degree 0, but this polynomial has degree 2."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch2_t2_qe5',
        type: "mcq",
        question: "What is the degree of the polynomial 5x⁴ - 3x² + 0x + 8?",
        options: ["2", "3", "4", "8"],
        correctAnswer: "4",
        explanation: "The degree of a polynomial is the highest power of the variable. In 5x⁴ - 3x² + 0x + 8, the highest power is 4, so the degree is 4. Note that the term 0x doesn't affect the degree. 📐",
        wrongAnswerExplanations: {
            "2": "This is not the highest power in the polynomial.",
            "3": "There is no term with power 3 in this polynomial.",
            "8": "8 is the constant term, not the degree of the polynomial."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch2_t2_qe6',
        type: "mcq",
        question: "Which of the following is a cubic polynomial?",
        options: ["x² + 2x + 1", "3x - 5", "x³ - 2x² + 4", "7"],
        correctAnswer: "x³ - 2x² + 4",
        explanation: "A cubic polynomial has a degree of 3. Since the highest power in x³ - 2x² + 4 is 3, it is a cubic polynomial. 🧊",
        wrongAnswerExplanations: {
            "x² + 2x + 1": "This is a quadratic polynomial (degree 2).",
            "3x - 5": "This is a linear polynomial (degree 1).",
            "7": "This is a constant polynomial (degree 0)."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch2_t2_qe7',
        type: "mcq",
        question: "What is the degree of the polynomial x⁵ - 10x³ + 2x² - x?",
        options: ["1", "2", "3", "5"],
        correctAnswer: "5",
        explanation: "The degree of a polynomial is the highest power of the variable. In x⁵ - 10x³ + 2x² - x, the highest power is 5, so the degree is 5. 📏",
        wrongAnswerExplanations: {
            "1": "This is not the highest power in the polynomial.",
            "2": "This is not the highest power in the polynomial.",
            "3": "This is not the highest power in the polynomial."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch2_t2_qe8',
        type: "mcq",
        question: "The height of a ball thrown upward can be modeled by the polynomial h(t) = -5t² + 20t + 1.5, where h is the height in meters and t is the time in seconds. What does the constant term 1.5 represent?",
        options: ["The initial height", "The maximum height", "The time of flight", "The speed of the ball"],
        correctAnswer: "The initial height",
        explanation: "When t = 0 (at the start), h(0) = 1.5. This means the ball starts at a height of 1.5 meters above the ground. The constant term in a polynomial representing height versus time gives the initial height. 🌍",
        wrongAnswerExplanations: {
            "The maximum height": "The maximum height is found by calculating the vertex of the parabola, not from the constant term directly.",
            "The time of flight": "The time of flight is found by solving h(t) = 0, not from the constant term.",
            "The speed of the ball": "The speed relates to the coefficient of t, not the constant term."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch2_t2_qe9',
        type: "mcq",
        question: "If we add two polynomials of degrees 3 and 5, what is the maximum possible degree of the resulting polynomial?",
        options: ["3", "5", "8", "15"],
        correctAnswer: "5",
        explanation: "When adding two polynomials, the degree of the sum is at most the maximum of the degrees of the two polynomials. Since the degrees are 3 and 5, the maximum possible degree of the sum is 5. 🧮",
        wrongAnswerExplanations: {
            "3": "This is the smaller degree, not the maximum possible degree.",
            "8": "This would be the sum of the degrees, which applies to multiplication, not addition.",
            "15": "This value is not related to the degrees of the given polynomials."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch2_t2_qe10',
        type: "mcq",
        question: "What is the degree of the polynomial 0?",
        options: ["0", "1", "-1", "Undefined"],
        correctAnswer: "Undefined",
        explanation: "The zero polynomial 0 (or 0x⁰ + 0x¹ + 0x² + ...) is special because it has no leading term. By convention, the degree of the zero polynomial is undefined or sometimes represented as -∞. 🔢",
        wrongAnswerExplanations: {
            "0": "Although some texts define it as 0, the formal definition states that the zero polynomial has undefined degree.",
            "1": "This is not the degree of the zero polynomial.",
            "-1": "While this is sometimes used, the standard convention is that the degree is undefined."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 60
    }
]; 