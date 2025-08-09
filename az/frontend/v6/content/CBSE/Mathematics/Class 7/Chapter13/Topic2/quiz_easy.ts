// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 7\Chapter13\Topic2\quiz_easy.ts
import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl7_ch13_t2_qe1',
        type: "mcq",
        question: "Which of the following numbers is written in scientific notation?",
        options: ["3456", "3.456 × 1000", "3.456 × 10³", "3,456"],
        correctAnswer: "3.456 × 10³",
        explanation: "Scientific notation has the form a × 10ⁿ where 1 ≤ a < 10 and n is an integer. Here 3.456 × 10³ follows this format. 🔢",
        wrongAnswerExplanations: {
            "3456": "This is standard decimal notation, not scientific notation.",
            "3.456 × 1000": "While mathematically equivalent, scientific notation uses powers of 10 (10ⁿ).",
            "3,456": "This is standard decimal notation with a comma separator, not scientific notation."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch13_t2_qe2',
        type: "mcq",
        question: "What is 6,300,000 written in scientific notation?",
        options: ["6.3 × 10⁶", "63 × 10⁵", "0.63 × 10⁷", "630 × 10⁴"],
        correctAnswer: "6.3 × 10⁶",
        explanation: "To convert to scientific notation, move the decimal point after the first non-zero digit. Since we moved it 6 places, the power of 10 is 6. 🔢",
        wrongAnswerExplanations: {
            "63 × 10⁵": "In scientific notation, the first number must be between 1 and 10.",
            "0.63 × 10⁷": "In scientific notation, the first number must be between 1 and 10.",
            "630 × 10⁴": "In scientific notation, the first number must be between 1 and 10."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 40
    },
    {
        id: 'cl7_ch13_t2_qe3',
        type: "mcq",
        question: "What is 0.000425 expressed in scientific notation?",
        options: ["4.25 × 10⁻⁴", "4.25 × 10⁴", "0.425 × 10⁻³", "42.5 × 10⁻⁵"],
        correctAnswer: "4.25 × 10⁻⁴",
        explanation: "Move the decimal point right until after the first non-zero digit. Since we moved 4 places right, the power is -4. 🔍",
        wrongAnswerExplanations: {
            "4.25 × 10⁴": "This is incorrect because the power should be negative when converting a decimal less than 1.",
            "0.425 × 10⁻³": "In scientific notation, the first number must be between 1 and 10.",
            "42.5 × 10⁻⁵": "In scientific notation, the first number must be between 1 and 10."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 40
    },
    {
        id: 'cl7_ch13_t2_qe4',
        type: "mcq",
        question: "Which of the following is equivalent to 5 × 10⁷?",
        options: ["50,000,000", "5,000,000", "500,000", "0.0000005"],
        correctAnswer: "50,000,000",
        explanation: "5 × 10⁷ means 5 followed by 7 zeros, which equals 50,000,000. Move the decimal point 7 places to the right. 🧮",
        wrongAnswerExplanations: {
            "5,000,000": "This is 5 × 10⁶, not 5 × 10⁷.",
            "500,000": "This is 5 × 10⁵, not 5 × 10⁷.",
            "0.0000005": "This is 5 × 10⁻⁷, not 5 × 10⁷."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch13_t2_qe5',
        type: "mcq",
        question: "Which of the following is equivalent to 3.6 × 10⁻²?",
        options: ["0.036", "0.36", "0.0036", "36"],
        correctAnswer: "0.036",
        explanation: "For negative exponents, move the decimal point left. 3.6 × 10⁻² means move the decimal point 2 places left, giving 0.036. 📏",
        wrongAnswerExplanations: {
            "0.36": "This is 3.6 × 10⁻¹, not 3.6 × 10⁻².",
            "0.0036": "This is 3.6 × 10⁻³, not 3.6 × 10⁻².",
            "36": "This is 3.6 × 10¹, not 3.6 × 10⁻²."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch13_t2_qe6',
        type: "mcq",
        question: "If the distance from Earth to the Sun is approximately 1.5 × 10¹¹ meters, what is this in standard form?",
        options: ["15,000,000,000 meters", "150,000,000,000 meters", "1,500,000,000 meters", "1,500,000,000,000 meters"],
        correctAnswer: "150,000,000,000 meters",
        explanation: "1.5 × 10¹¹ means moving the decimal point 11 places right, resulting in 150,000,000,000 meters. 🌞",
        wrongAnswerExplanations: {
            "15,000,000,000 meters": "This is 1.5 × 10¹⁰, not 1.5 × 10¹¹.",
            "1,500,000,000 meters": "This is 1.5 × 10⁹, not 1.5 × 10¹¹.",
            "1,500,000,000,000 meters": "This is 1.5 × 10¹², not 1.5 × 10¹¹."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch13_t2_qe7',
        type: "mcq",
        question: "Which of these numbers is the smallest?",
        options: ["2.5 × 10⁻³", "2.5 × 10⁻⁵", "2.5 × 10⁻¹", "2.5 × 10⁻⁴"],
        correctAnswer: "2.5 × 10⁻⁵",
        explanation: "For negative exponents, the more negative the exponent, the smaller the number. So 2.5 × 10⁻⁵ is the smallest. 📉",
        wrongAnswerExplanations: {
            "2.5 × 10⁻³": "This equals 0.0025, which is larger than 2.5 × 10⁻⁵.",
            "2.5 × 10⁻¹": "This equals 0.25, which is larger than 2.5 × 10⁻⁵.",
            "2.5 × 10⁻⁴": "This equals 0.00025, which is larger than 2.5 × 10⁻⁵."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch13_t2_qe8',
        type: "mcq",
        question: "The mass of a hydrogen atom is approximately 1.67 × 10⁻²⁴ grams. Which statement is true?",
        options: ["It equals 0.0000000000000000000000167 grams", "It equals 1.67 grams", "It equals 16,700,000,000,000,000,000,000 grams", "It equals 0.0167 grams"],
        correctAnswer: "It equals 0.0000000000000000000000167 grams",
        explanation: "For 10⁻²⁴, move the decimal point 24 places to the left, resulting in 0.0000000000000000000000167 grams. ⚛️",
        wrongAnswerExplanations: {
            "It equals 1.67 grams": "This would be 1.67 × 10⁰, not 1.67 × 10⁻²⁴.",
            "It equals 16,700,000,000,000,000,000,000 grams": "This would be 1.67 × 10²², not 1.67 × 10⁻²⁴.",
            "It equals 0.0167 grams": "This would be 1.67 × 10⁻², not 1.67 × 10⁻²⁴."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch13_t2_qe9',
        type: "mcq",
        question: "How would you write 4,700 in scientific notation?",
        options: ["4.7 × 10³", "47 × 10²", "0.47 × 10⁴", "470 × 10¹"],
        correctAnswer: "4.7 × 10³",
        explanation: "In scientific notation, the coefficient must be between 1 and 10. Moving the decimal point 3 places gives 4.7 × 10³. 🔢",
        wrongAnswerExplanations: {
            "47 × 10²": "In scientific notation, the first number must be between 1 and 10.",
            "0.47 × 10⁴": "In scientific notation, the first number must be between 1 and 10.",
            "470 × 10¹": "In scientific notation, the first number must be between 1 and 10."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch13_t2_qe10',
        type: "mcq",
        question: "What is 7.85 × 10⁴ converted to standard form?",
        options: ["78,500", "7,850", "785,000", "7,850,000"],
        correctAnswer: "78,500",
        explanation: "To convert to standard form, move the decimal point right by 4 places: 7.85 → 78,500. 📊",
        wrongAnswerExplanations: {
            "7,850": "This is 7.85 × 10³, not 7.85 × 10⁴.",
            "785,000": "This is 7.85 × 10⁵, not 7.85 × 10⁴.",
            "7,850,000": "This is 7.85 × 10⁶, not 7.85 × 10⁴."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch13_t2_qe11',
        type: "mcq",
        question: "Which of these represents 0.0000072 in scientific notation?",
        options: ["7.2 × 10⁻⁶", "7.2 × 10⁶", "72 × 10⁻⁷", "0.72 × 10⁻⁵"],
        correctAnswer: "7.2 × 10⁻⁶",
        explanation: "Move the decimal point 6 places right to get 7.2, so the scientific notation is 7.2 × 10⁻⁶. 🔍",
        wrongAnswerExplanations: {
            "7.2 × 10⁶": "This equals 7,200,000, not 0.0000072.",
            "72 × 10⁻⁷": "In scientific notation, the first number must be between 1 and 10.",
            "0.72 × 10⁻⁵": "In scientific notation, the first number must be between 1 and 10."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 40
    },
    {
        id: 'cl7_ch13_t2_qe12',
        type: "mcq",
        question: "Which of the following is equal to 8,400,000,000?",
        options: ["8.4 × 10⁹", "84 × 10⁸", "8.4 × 10⁸", "84 × 10⁷"],
        correctAnswer: "8.4 × 10⁹",
        explanation: "Scientific notation requires the form a × 10ⁿ where 1 ≤ a < 10. Moving the decimal point 9 places gives 8.4 × 10⁹. 🧮",
        wrongAnswerExplanations: {
            "84 × 10⁸": "In scientific notation, the first number must be between 1 and 10.",
            "8.4 × 10⁸": "This equals 840,000,000, not 8,400,000,000.",
            "84 × 10⁷": "In scientific notation, the first number must be between 1 and 10."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 40
    },
    {
        id: 'cl7_ch13_t2_qe13',
        type: "mcq",
        question: "Which of these numbers is written in scientific notation?",
        options: ["5,000,000", "5 × 10⁶", "50 × 100,000", "5 million"],
        correctAnswer: "5 × 10⁶",
        explanation: "Scientific notation has the form a × 10ⁿ where 1 ≤ a < 10. Here 5 × 10⁶ follows this format. 📝",
        wrongAnswerExplanations: {
            "5,000,000": "This is standard decimal notation, not scientific notation.",
            "50 × 100,000": "Scientific notation requires powers of 10, not 100,000.",
            "5 million": "This is a word form, not scientific notation."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch13_t2_qe14',
        type: "mcq",
        question: "The diameter of a red blood cell is approximately 7.5 × 10⁻⁶ meters. What is this in standard form?",
        options: ["0.0000075 meters", "0.000075 meters", "0.00075 meters", "0.0075 meters"],
        correctAnswer: "0.0000075 meters",
        explanation: "For 10⁻⁶, move the decimal point 6 places to the left, resulting in 0.0000075 meters. 🔬",
        wrongAnswerExplanations: {
            "0.000075 meters": "This is 7.5 × 10⁻⁵, not 7.5 × 10⁻⁶.",
            "0.00075 meters": "This is 7.5 × 10⁻⁴, not 7.5 × 10⁻⁶.",
            "0.0075 meters": "This is 7.5 × 10⁻³, not 7.5 × 10⁻⁶."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch13_t2_qe15',
        type: "mcq",
        question: "When do scientists typically use scientific notation?",
        options: [
            "When working with very large or very small numbers", 
            "Only when working with decimals", 
            "Only when working with whole numbers", 
            "Only when working with fractions"
        ],
        correctAnswer: "When working with very large or very small numbers",
        explanation: "Scientific notation is most useful for representing very large or very small numbers efficiently. 🔭",
        wrongAnswerExplanations: {
            "Only when working with decimals": "Scientific notation can be used for any number, not just decimals.",
            "Only when working with whole numbers": "Scientific notation is actually most useful for non-whole numbers.",
            "Only when working with fractions": "Scientific notation isn't limited to fractions."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch13_t2_qe16',
        type: "mcq",
        question: "What is 2.54 × 10⁻² written in standard form?",
        options: ["0.0254", "0.254", "25.4", "254"],
        correctAnswer: "0.0254",
        explanation: "For 10⁻², move the decimal point 2 places left: 2.54 → 0.0254. 📏",
        wrongAnswerExplanations: {
            "0.254": "This is 2.54 × 10⁻¹, not 2.54 × 10⁻².",
            "25.4": "This is 2.54 × 10¹, not 2.54 × 10⁻².",
            "254": "This is 2.54 × 10², not 2.54 × 10⁻²."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch13_t2_qe17',
        type: "mcq",
        question: "Which is the largest number?",
        options: ["3.2 × 10⁵", "3.2 × 10⁴", "3.2 × 10⁶", "3.2 × 10³"],
        correctAnswer: "3.2 × 10⁶",
        explanation: "For positive exponents, the larger the exponent, the larger the number. So 3.2 × 10⁶ is the largest. 📈",
        wrongAnswerExplanations: {
            "3.2 × 10⁵": "This is smaller than 3.2 × 10⁶.",
            "3.2 × 10⁴": "This is smaller than 3.2 × 10⁶.",
            "3.2 × 10³": "This is smaller than 3.2 × 10⁶."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 40
    },
    {
        id: 'cl7_ch13_t2_qe18',
        type: "mcq",
        question: "Earth's mass is approximately 5.97 × 10²⁴ kg. How would you read this number?",
        options: [
            "Five point nine seven times ten to the power of twenty-four kilograms", 
            "Five point nine seven times twenty-four kilograms", 
            "Five point nine seven divided by ten to the power of twenty-four kilograms", 
            "Five point nine seven plus ten to the power of twenty-four kilograms"
        ],
        correctAnswer: "Five point nine seven times ten to the power of twenty-four kilograms",
        explanation: "Scientific notation is read as the decimal number times ten to the power of the exponent. 🌎",
        wrongAnswerExplanations: {
            "Five point nine seven times twenty-four kilograms": "This would be 5.97 × 24, not 5.97 × 10²⁴.",
            "Five point nine seven divided by ten to the power of twenty-four kilograms": "This would be 5.97 ÷ 10²⁴, not 5.97 × 10²⁴.",
            "Five point nine seven plus ten to the power of twenty-four kilograms": "This would be 5.97 + 10²⁴, not 5.97 × 10²⁴."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch13_t2_qe19',
        type: "mcq",
        question: "Convert 936,000,000 to scientific notation.",
        options: ["9.36 × 10⁸", "93.6 × 10⁷", "936 × 10⁶", "0.936 × 10⁹"],
        correctAnswer: "9.36 × 10⁸",
        explanation: "Move the decimal point 8 places left to get 9.36, giving 9.36 × 10⁸. 🔢",
        wrongAnswerExplanations: {
            "93.6 × 10⁷": "In scientific notation, the first number must be between 1 and 10.",
            "936 × 10⁶": "In scientific notation, the first number must be between 1 and 10.",
            "0.936 × 10⁹": "In scientific notation, the first number must be between 1 and 10."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 40
    },
    {
        id: 'cl7_ch13_t2_qe20',
        type: "mcq",
        question: "Convert 0.00000394 to scientific notation.",
        options: ["3.94 × 10⁻⁶", "3.94 × 10⁶", "39.4 × 10⁻⁷", "0.394 × 10⁻⁵"],
        correctAnswer: "3.94 × 10⁻⁶",
        explanation: "Move the decimal point 6 places right to get 3.94, giving 3.94 × 10⁻⁶. 🔍",
        wrongAnswerExplanations: {
            "3.94 × 10⁶": "This equals 3,940,000, not 0.00000394.",
            "39.4 × 10⁻⁷": "In scientific notation, the first number must be between 1 and 10.",
            "0.394 × 10⁻⁵": "In scientific notation, the first number must be between 1 and 10."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 40
    }
];
