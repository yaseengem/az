// filepath: content/CBSE/Mathematics/Class 8/Chapter12/Topic3/quiz_easy.ts
import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl8_ch12_t3_qe1',
        type: "mcq",
        question: "What is the result of dividing x² + 2x by x?",
        options: ["x + 2", "x² + 2", "2x", "x"],
        correctAnswer: "x + 2",
        explanation: "When dividing x² + 2x by x, divide each term by x: x²/x = x and 2x/x = 2, giving x + 2. 📝",
        wrongAnswerExplanations: {
            "x² + 2": "This would be incorrect as we need to divide each term by x.",
            "2x": "This is not correct as x²/x = x, not 2x.",
            "x": "This is incomplete as we need to divide both terms by x."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch12_t3_qe2',
        type: "mcq",
        question: "When dividing 6x³y by 2xy, what is the result?",
        options: ["3x²", "3x²y", "3xy²", "3y²"],
        correctAnswer: "3x²",
        explanation: "Divide coefficients: 6/2 = 3. For variables, subtract exponents: x³/x = x², y/y = y¹/y¹ = 1. So result is 3x². 🔢",
        wrongAnswerExplanations: {
            "3x²y": "When dividing y by y, the exponents subtract to give 1, which means y⁰ = 1.",
            "3xy²": "The exponent of x should be 2, not 1, and y terms cancel out.",
            "3y²": "The x terms don't cancel out completely, and y terms do cancel."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch12_t3_qe3',
        type: "mcq",
        question: "What is (x² - 4) ÷ x?",
        options: ["x - 4", "x - 4/x", "x - 4x", "Cannot be divided"],
        correctAnswer: "x - 4/x",
        explanation: "Divide each term by x: x²/x = x and -4/x = -4/x. The result is x - 4/x. The second term cannot be simplified further. ➗",
        wrongAnswerExplanations: {
            "x - 4": "The -4 term must be divided by x, giving -4/x.",
            "x - 4x": "Dividing -4 by x gives -4/x, not -4x.",
            "Cannot be divided": "The expression can be divided by x, giving x - 4/x."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch12_t3_qe4',
        type: "mcq",
        question: "Which is the quotient when 8x⁴y² is divided by 2x²y?",
        options: ["4x²y", "4xy", "4x³y", "4x²y²"],
        correctAnswer: "4x²y",
        explanation: "Divide coefficients: 8/2 = 4. For variables, subtract exponents: x⁴/x² = x² and y²/y = y. Result is 4x²y. 🎯",
        wrongAnswerExplanations: {
            "4xy": "The exponent of x should be 2 (4-2), not 1.",
            "4x³y": "When dividing x⁴ by x², we get x², not x³.",
            "4x²y²": "When dividing y² by y, we get y, not y²."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch12_t3_qe5',
        type: "mcq",
        question: "What is the result of (12x³y² + 6x²y²) ÷ (3xy)?",
        options: ["4x²y + 2xy", "4x²y + 2x", "4xy + 2y", "4x + 2"],
        correctAnswer: "4x²y + 2xy",
        explanation: "Divide each term by 3xy: (12x³y²)/(3xy) = 4x²y and (6x²y²)/(3xy) = 2xy. The result is 4x²y + 2xy. 📊",
        wrongAnswerExplanations: {
            "4x²y + 2x": "The second term should be 2xy, not 2x.",
            "4xy + 2y": "The first term should be 4x²y, not 4xy.",
            "4x + 2": "Both terms should include y after division."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch12_t3_qe6',
        type: "mcq",
        question: "When dividing 15x⁴y³ by 3x²y, what is the quotient?",
        options: ["5x²y²", "5x³y", "5x²y", "5xy²"],
        correctAnswer: "5x²y²",
        explanation: "Divide coefficients: 15/3 = 5. For variables, x⁴/x² = x² and y³/y = y². Result is 5x²y². 🎨",
        wrongAnswerExplanations: {
            "5x³y": "The y exponent should be 2 (3-1), not 1.",
            "5x²y": "The y exponent should be 2 (3-1), not 1.",
            "5xy²": "The x exponent should be 2 (4-2), not 1."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch12_t3_qe7',
        type: "mcq",
        question: "What is (x³ + x² + x) ÷ x?",
        options: ["x² + x + 1", "x³ + x² + 1", "x² + 1 + x", "3x²"],
        correctAnswer: "x² + x + 1",
        explanation: "Divide each term by x: x³/x = x², x²/x = x, and x/x = 1. Result is x² + x + 1. 🔍",
        wrongAnswerExplanations: {
            "x³ + x² + 1": "Each term should be divided by x, reducing each exponent by 1.",
            "x² + 1 + x": "The terms are not in standard descending order.",
            "3x²": "This is not the result of dividing each term by x."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch12_t3_qe8',
        type: "mcq",
        question: "Which is the quotient of (4x³y - 2x²y) ÷ (2xy)?",
        options: ["2x² - x", "2x - 1", "2x² - 2x", "2x - x"],
        correctAnswer: "2x² - x",
        explanation: "Divide each term by 2xy: (4x³y)/(2xy) = 2x² and (-2x²y)/(2xy) = -x. Result is 2x² - x. 🎭",
        wrongAnswerExplanations: {
            "2x - 1": "The exponents are incorrect after division.",
            "2x² - 2x": "The second term should be -x, not -2x.",
            "2x - x": "The first term should be 2x², not 2x."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch12_t3_qe9',
        type: "mcq",
        question: "What is the result of (9x⁴y² - 3x³y²) ÷ (3x²y)?",
        options: ["3x² - x", "3x²y - xy", "3x²y - y", "3x - 1"],
        correctAnswer: "3x²y - xy",
        explanation: "Divide each term by 3x²y: (9x⁴y²)/(3x²y) = 3x²y and (-3x³y²)/(3x²y) = -xy. Result is 3x²y - xy. 🎪",
        wrongAnswerExplanations: {
            "3x² - x": "The y terms don't cancel completely.",
            "3x²y - y": "The second term should be -xy, not -y.",
            "3x - 1": "Both terms should include y after division."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch12_t3_qe10',
        type: "mcq",
        question: "When dividing 6x⁵y³ by 2x³y², what is the quotient?",
        options: ["3x²y", "3xy", "3x³y", "3x²y²"],
        correctAnswer: "3x²y",
        explanation: "Divide coefficients: 6/2 = 3. For variables, x⁵/x³ = x² and y³/y² = y. Result is 3x²y. 🎯",
        wrongAnswerExplanations: {
            "3xy": "The exponent of x should be 2 (5-3), not 1.",
            "3x³y": "When dividing x⁵ by x³, we get x², not x³.",
            "3x²y²": "When dividing y³ by y², we get y, not y²."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch12_t3_qe11',
        type: "mcq",
        question: "What is (x⁴ - x³ + x²) ÷ x²?",
        options: ["x² - x + 1", "x³ - x² + x", "x² - 1 + x", "2x²"],
        correctAnswer: "x² - x + 1",
        explanation: "Divide each term by x²: x⁴/x² = x², x³/x² = x, and x²/x² = 1. Result is x² - x + 1. 📐",
        wrongAnswerExplanations: {
            "x³ - x² + x": "Each term should be divided by x², reducing each exponent by 2.",
            "x² - 1 + x": "The terms are not in standard descending order.",
            "2x²": "This is not the result of dividing each term by x²."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch12_t3_qe12',
        type: "mcq",
        question: "Which is the quotient of (8x⁴y² - 4x³y²) ÷ (4x²y)?",
        options: ["2x² - x", "2x²y - xy", "2x - y", "2x - 1"],
        correctAnswer: "2x²y - xy",
        explanation: "Divide each term by 4x²y: (8x⁴y²)/(4x²y) = 2x²y and (-4x³y²)/(4x²y) = -xy. Result is 2x²y - xy. 🎨",
        wrongAnswerExplanations: {
            "2x² - x": "The y terms don't cancel completely.",
            "2x - y": "The exponents are incorrect after division.",
            "2x - 1": "Both terms should include y after division."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch12_t3_qe13',
        type: "mcq",
        question: "What is the result of (12x³y⁴ + 6x²y³) ÷ (3xy²)?",
        options: ["4x²y² + 2xy", "4xy² + 2y", "4x²y + 2xy", "4x + 2"],
        correctAnswer: "4x²y² + 2xy",
        explanation: "Divide each term by 3xy²: (12x³y⁴)/(3xy²) = 4x²y² and (6x²y³)/(3xy²) = 2xy. Result is 4x²y² + 2xy. 🎭",
        wrongAnswerExplanations: {
            "4xy² + 2y": "The exponents are incorrect after division.",
            "4x²y + 2xy": "The y exponents are incorrect.",
            "4x + 2": "Both terms should include y after division."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch12_t3_qe14',
        type: "mcq",
        question: "When dividing 10x⁶y⁴ by 2x²y², what is the quotient?",
        options: ["5x⁴y²", "5x³y", "5x⁴y", "5x²y²"],
        correctAnswer: "5x⁴y²",
        explanation: "Divide coefficients: 10/2 = 5. For variables, x⁶/x² = x⁴ and y⁴/y² = y². Result is 5x⁴y². 🎪",
        wrongAnswerExplanations: {
            "5x³y": "The exponents are incorrect for both x and y.",
            "5x⁴y": "The y exponent should be 2 (4-2), not 1.",
            "5x²y²": "The x exponent should be 4 (6-2), not 2."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch12_t3_qe15',
        type: "mcq",
        question: "What is (x⁵ + x⁴ + x³) ÷ x³?",
        options: ["x² + x + 1", "x³ + x² + x", "x² + 1 + x", "3x²"],
        correctAnswer: "x² + x + 1",
        explanation: "Divide each term by x³: x⁵/x³ = x², x⁴/x³ = x, and x³/x³ = 1. Result is x² + x + 1. 📏",
        wrongAnswerExplanations: {
            "x³ + x² + x": "Each term should be divided by x³, reducing each exponent by 3.",
            "x² + 1 + x": "The terms are not in standard descending order.",
            "3x²": "This is not the result of dividing each term by x³."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch12_t3_qe16',
        type: "mcq",
        question: "Which is the quotient of (16x⁵y³ - 8x⁴y³) ÷ (4x³y²)?",
        options: ["4x²y - 2xy", "4x²y² - 2xy", "4xy - 2y", "4x - 2"],
        correctAnswer: "4x²y - 2xy",
        explanation: "Divide each term by 4x³y²: (16x⁵y³)/(4x³y²) = 4x²y and (-8x⁴y³)/(4x³y²) = -2xy. Result is 4x²y - 2xy. 🎯",
        wrongAnswerExplanations: {
            "4x²y² - 2xy": "The y exponent in first term is incorrect.",
            "4xy - 2y": "The exponents are incorrect after division.",
            "4x - 2": "Both terms should include y after division."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch12_t3_qe17',
        type: "mcq",
        question: "What is the result of (20x⁴y⁵ + 10x³y⁴) ÷ (5x²y³)?",
        options: ["4x²y² + 2xy", "4xy² + 2y", "4x²y + 2xy", "4x + 2"],
        correctAnswer: "4x²y² + 2xy",
        explanation: "Divide each term by 5x²y³: (20x⁴y⁵)/(5x²y³) = 4x²y² and (10x³y⁴)/(5x²y³) = 2xy. Result is 4x²y² + 2xy. 🎨",
        wrongAnswerExplanations: {
            "4xy² + 2y": "The x exponents are incorrect after division.",
            "4x²y + 2xy": "The y exponents are incorrect.",
            "4x + 2": "Both terms should include y after division."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch12_t3_qe18',
        type: "mcq",
        question: "When dividing 14x⁷y⁵ by 2x³y², what is the quotient?",
        options: ["7x⁴y³", "7x³y²", "7x⁴y²", "7x²y³"],
        correctAnswer: "7x⁴y³",
        explanation: "Divide coefficients: 14/2 = 7. For variables, x⁷/x³ = x⁴ and y⁵/y² = y³. Result is 7x⁴y³. 🎭",
        wrongAnswerExplanations: {
            "7x³y²": "Both exponents are incorrect after division.",
            "7x⁴y²": "The y exponent should be 3 (5-2), not 2.",
            "7x²y³": "The x exponent should be 4 (7-3), not 2."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch12_t3_qe19',
        type: "mcq",
        question: "What is (x⁶ - x⁵ + x⁴) ÷ x⁴?",
        options: ["x² - x + 1", "x³ - x² + x", "x² - 1 + x", "3x²"],
        correctAnswer: "x² - x + 1",
        explanation: "Divide each term by x⁴: x⁶/x⁴ = x², x⁵/x⁴ = x, and x⁴/x⁴ = 1. Result is x² - x + 1. 📐",
        wrongAnswerExplanations: {
            "x³ - x² + x": "Each term should be divided by x⁴, reducing each exponent by 4.",
            "x² - 1 + x": "The terms are not in standard descending order.",
            "3x²": "This is not the result of dividing each term by x⁴."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch12_t3_qe20',
        type: "mcq",
        question: "Which is the quotient of (18x⁶y⁴ - 9x⁵y⁴) ÷ (3x⁴y³)?",
        options: ["6x²y - 3xy", "6xy - 3y", "6x²y² - 3xy", "6x - 3"],
        correctAnswer: "6x²y - 3xy",
        explanation: "Divide each term by 3x⁴y³: (18x⁶y⁴)/(3x⁴y³) = 6x²y and (-9x⁵y⁴)/(3x⁴y³) = -3xy. Result is 6x²y - 3xy. 🎪",
        wrongAnswerExplanations: {
            "6xy - 3y": "The x exponents are incorrect after division.",
            "6x²y² - 3xy": "The y exponent in first term is incorrect.",
            "6x - 3": "Both terms should include y after division."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    }
]; 