import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl7_ch2_t1_qe1',
        type: "mcq",
        question: "What is ½ × ¾?",
        options: ["⅜", "⅝", "⅞", "1"],
        correctAnswer: "⅜",
        explanation: "Multiply numerators (1×3=3) and denominators (2×4=8) to get ⅜. ✖️",
        wrongAnswerExplanations: {
            "⅝": "Incorrect multiplication of numerators and denominators.",
            "⅞": "Incorrect multiplication of numerators and denominators.",
            "1": "Incorrect multiplication of numerators and denominators."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch2_t1_qe2',
        type: "mcq",
        question: "What is ⅔ ÷ ⅘?",
        options: ["⅚", "⅘", "⅔", "⅛"],
        correctAnswer: "⅚",
        explanation: "⅔ ÷ ⅘ = ⅔ × 5/4 = 10/12 = ⅚. ➗",
        wrongAnswerExplanations: {
            "⅘": "Incorrect division - forgot to multiply by reciprocal.",
            "⅔": "Incorrect division - forgot to multiply by reciprocal.",
            "⅛": "Incorrect division - forgot to multiply by reciprocal."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch2_t1_qe3',
        type: "mcq",
        question: "What is 0.5 × 0.3?",
        options: ["0.15", "0.8", "1.5", "0.35"],
        correctAnswer: "0.15",
        explanation: "5 × 3 = 15, then place decimal point after 2 places (1+1). ✖️",
        wrongAnswerExplanations: {
            "0.8": "Incorrect multiplication and decimal placement.",
            "1.5": "Incorrect multiplication and decimal placement.",
            "0.35": "Incorrect multiplication and decimal placement."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch2_t1_qe4',
        type: "mcq",
        question: "What is 1.2 ÷ 0.3?",
        options: ["4", "0.4", "40", "0.04"],
        correctAnswer: "4",
        explanation: "Move decimal points: 12 ÷ 3 = 4. ➗",
        wrongAnswerExplanations: {
            "0.4": "Incorrect decimal point movement.",
            "40": "Incorrect decimal point movement.",
            "0.04": "Incorrect decimal point movement."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch2_t1_qe5',
        type: "mcq",
        question: "If a recipe needs ¾ cup of sugar and you want to make ½ the recipe, how much sugar do you need?",
        options: ["⅜ cup", "½ cup", "¼ cup", "⅛ cup"],
        correctAnswer: "⅜ cup",
        explanation: "¾ × ½ = ⅜ cup. 👩‍🍳",
        wrongAnswerExplanations: {
            "½ cup": "Incorrect multiplication of fractions.",
            "¼ cup": "Incorrect multiplication of fractions.",
            "⅛ cup": "Incorrect multiplication of fractions."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch2_t1_qe6',
        type: "mcq",
        question: "What is ⅓ × ⅙?",
        options: ["1/18", "½", "⅙", "⅓"],
        correctAnswer: "1/18",
        explanation: "1×1=1, 3×6=18, so 1/18. ✖️",
        wrongAnswerExplanations: {
            "½": "Incorrect multiplication of numerators and denominators.",
            "⅙": "Incorrect multiplication of numerators and denominators.",
            "⅓": "Incorrect multiplication of numerators and denominators."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch2_t1_qe7',
        type: "mcq",
        question: "What is 0.4 × 0.6?",
        options: ["0.24", "0.10", "2.4", "0.024"],
        correctAnswer: "0.24",
        explanation: "4×6=24, then place decimal point after 2 places (1+1). ✖️",
        wrongAnswerExplanations: {
            "0.10": "Incorrect multiplication and decimal placement.",
            "2.4": "Incorrect multiplication and decimal placement.",
            "0.024": "Incorrect multiplication and decimal placement."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch2_t1_qe8',
        type: "mcq",
        question: "What is ½ ÷ ⅓?",
        options: ["1½", "⅙", "⅔", "⅓"],
        correctAnswer: "1½",
        explanation: "½ ÷ ⅓ = ½ × 3/1 = 3/2 = 1½. ➗",
        wrongAnswerExplanations: {
            "⅙": "Incorrect division - forgot to multiply by reciprocal.",
            "⅔": "Incorrect division - forgot to multiply by reciprocal.",
            "⅓": "Incorrect division - forgot to multiply by reciprocal."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch2_t1_qe9',
        type: "mcq",
        question: "If a shirt costs ₹500 and is on sale for ⅖ off, what's the discount amount?",
        options: ["₹200", "₹300", "₹100", "₹400"],
        correctAnswer: "₹200",
        explanation: "₹500 × ⅖ = ₹200 discount. 🛍️",
        wrongAnswerExplanations: {
            "₹300": "Incorrect multiplication of fraction and amount.",
            "₹100": "Incorrect multiplication of fraction and amount.",
            "₹400": "Incorrect multiplication of fraction and amount."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch2_t1_qe10',
        type: "mcq",
        question: "What is 0.8 ÷ 0.2?",
        options: ["4", "0.4", "40", "0.04"],
        correctAnswer: "4",
        explanation: "Move decimal points: 8 ÷ 2 = 4. ➗",
        wrongAnswerExplanations: {
            "0.4": "Incorrect decimal point movement.",
            "40": "Incorrect decimal point movement.",
            "0.04": "Incorrect decimal point movement."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch2_t1_qe11',
        type: "mcq",
        question: "What is ⅜ × ⅔?",
        options: ["¼", "½", "⅙", "⅛"],
        correctAnswer: "¼",
        explanation: "3×2=6, 8×3=24, simplify 6/24 to ¼. ✖️",
        wrongAnswerExplanations: {
            "½": "Incorrect multiplication and simplification.",
            "⅙": "Incorrect multiplication and simplification.",
            "⅛": "Incorrect multiplication and simplification."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch2_t1_qe12',
        type: "mcq",
        question: "What is 0.25 × 0.4?",
        options: ["0.1", "1.0", "0.01", "10"],
        correctAnswer: "0.1",
        explanation: "25×4=100, then place decimal point after 3 places (2+1). ✖️",
        wrongAnswerExplanations: {
            "1.0": "Incorrect multiplication and decimal placement.",
            "0.01": "Incorrect multiplication and decimal placement.",
            "10": "Incorrect multiplication and decimal placement."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch2_t1_qe13',
        type: "mcq",
        question: "What is ⅘ ÷ ⅖?",
        options: ["2", "⅖", "⅛", "⅜"],
        correctAnswer: "2",
        explanation: "⅘ ÷ ⅖ = ⅘ × 5/2 = 20/10 = 2. ➗",
        wrongAnswerExplanations: {
            "⅖": "Incorrect division - forgot to multiply by reciprocal.",
            "⅛": "Incorrect division - forgot to multiply by reciprocal.",
            "⅜": "Incorrect division - forgot to multiply by reciprocal."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch2_t1_qe14',
        type: "mcq",
        question: "If you spend ⅔ of an hour on homework and ¼ of that time on math, how long did you spend on math?",
        options: ["⅙ hour", "½ hour", "⅓ hour", "¼ hour"],
        correctAnswer: "⅙ hour",
        explanation: "⅔ × ¼ = 2/12 = ⅙ hour. ⏰",
        wrongAnswerExplanations: {
            "½ hour": "Incorrect multiplication of fractions.",
            "⅓ hour": "Incorrect multiplication of fractions.",
            "¼ hour": "Incorrect multiplication of fractions."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch2_t1_qe15',
        type: "mcq",
        question: "What is 0.6 × 0.7?",
        options: ["0.42", "0.13", "4.2", "0.042"],
        correctAnswer: "0.42",
        explanation: "6×7=42, then place decimal point after 2 places (1+1). ✖️",
        wrongAnswerExplanations: {
            "0.13": "Incorrect multiplication and decimal placement.",
            "4.2": "Incorrect multiplication and decimal placement.",
            "0.042": "Incorrect multiplication and decimal placement."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch2_t1_qe16',
        type: "mcq",
        question: "What is ⅜ ÷ ½?",
        options: ["¾", "⅙", "⅜", "⅛"],
        correctAnswer: "¾",
        explanation: "⅜ ÷ ½ = ⅜ × 2/1 = 6/8 = ¾. ➗",
        wrongAnswerExplanations: {
            "⅙": "Incorrect division - forgot to multiply by reciprocal.",
            "⅜": "Incorrect division - forgot to multiply by reciprocal.",
            "⅛": "Incorrect division - forgot to multiply by reciprocal."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch2_t1_qe17',
        type: "mcq",
        question: "What is 0.9 ÷ 0.3?",
        options: ["3", "0.3", "30", "0.03"],
        correctAnswer: "3",
        explanation: "Move decimal points: 9 ÷ 3 = 3. ➗",
        wrongAnswerExplanations: {
            "0.3": "Incorrect decimal point movement.",
            "30": "Incorrect decimal point movement.",
            "0.03": "Incorrect decimal point movement."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch2_t1_qe18',
        type: "mcq",
        question: "What is ⅚ × ⅔?",
        options: ["5/9", "⅚", "⅔", "⅛"],
        correctAnswer: "5/9",
        explanation: "5×2=10, 6×3=18, simplify 10/18 to 5/9. ✖️",
        wrongAnswerExplanations: {
            "⅚": "Incorrect multiplication and simplification.",
            "⅔": "Incorrect multiplication and simplification.",
            "⅛": "Incorrect multiplication and simplification."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch2_t1_qe19',
        type: "mcq",
        question: "What is 0.15 × 0.2?",
        options: ["0.03", "0.3", "3.0", "0.003"],
        correctAnswer: "0.03",
        explanation: "15×2=30, then place decimal point after 3 places (2+1). ✖️",
        wrongAnswerExplanations: {
            "0.3": "Incorrect multiplication and decimal placement.",
            "3.0": "Incorrect multiplication and decimal placement.",
            "0.003": "Incorrect multiplication and decimal placement."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch2_t1_qe20',
        type: "mcq",
        question: "What is ⅞ ÷ ¼?",
        options: ["3½", "⅞", "⅛", "⅜"],
        correctAnswer: "3½",
        explanation: "⅞ ÷ ¼ = ⅞ × 4/1 = 28/8 = 3½. ➗",
        wrongAnswerExplanations: {
            "⅞": "Incorrect division - forgot to multiply by reciprocal.",
            "⅛": "Incorrect division - forgot to multiply by reciprocal.",
            "⅜": "Incorrect division - forgot to multiply by reciprocal."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    }
]; 