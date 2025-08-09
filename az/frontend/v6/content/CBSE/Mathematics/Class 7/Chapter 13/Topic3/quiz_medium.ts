// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 7\Chapter13\Topic3\quiz_medium.ts
import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl7_ch13_t3_qm1',
        type: "mcq",
        question: "Convert 0.00000789 to scientific notation.",
        options: ["7.89 × 10⁻⁶", "7.89 × 10⁻⁵", "7.89 × 10⁻⁷", "7.89 × 10⁻⁸"],
        correctAnswer: "7.89 × 10⁻⁶",
        explanation: "Move decimal point right until 1-digit number: 7.89, moved 6 places, so multiply by 10⁻⁶. 🔍",
        wrongAnswerExplanations: {
            "7.89 × 10⁻⁵": "This would be 0.0000789, too large.",
            "7.89 × 10⁻⁷": "This would be 0.000000789, too small.",
            "7.89 × 10⁻⁸": "This would be 0.0000000789, too small."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch13_t3_qm2',
        type: "mcq",
        question: "If Earth's mass is approximately 5.97 × 10²⁴ kg and Moon's mass is 7.34 × 10²² kg, how many times heavier is Earth than Moon?",
        options: ["81.3", "8.13", "813", "0.813"],
        correctAnswer: "81.3",
        explanation: "Divide Earth's mass by Moon's mass: (5.97 × 10²⁴) ÷ (7.34 × 10²²) = 5.97 ÷ 7.34 × 10² = 81.3. 🌍",
        wrongAnswerExplanations: {
            "8.13": "The difference in exponents is 2, so result is larger.",
            "813": "The calculation gives 81.3, not 813.",
            "0.813": "Earth is heavier than Moon, so result should be > 1."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl7_ch13_t3_qm3',
        type: "mcq",
        question: "What is (2.5 × 10⁴) × (4 × 10⁻²) in scientific notation?",
        options: ["1 × 10²", "10 × 10²", "1 × 10³", "10 × 10³"],
        correctAnswer: "1 × 10³",
        explanation: "Multiply numbers (2.5 × 4 = 10) and add exponents (4 + (-2) = 2). Then convert 10 × 10² to 1 × 10³. 🧮",
        wrongAnswerExplanations: {
            "1 × 10²": "This would be too small by a factor of 10.",
            "10 × 10²": "Not in standard scientific notation.",
            "10 × 10³": "Not in standard scientific notation."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch13_t3_qm4',
        type: "mcq",
        question: "A computer can perform 2 × 10⁹ calculations per second. How many calculations can it perform in 5 × 10³ seconds?",
        options: ["1 × 10¹³", "1 × 10¹²", "1 × 10⁶", "1 × 10⁷"],
        correctAnswer: "1 × 10¹³",
        explanation: "Multiply: (2 × 10⁹) × (5 × 10³) = 10 × 10¹² = 1 × 10¹³. 💻",
        wrongAnswerExplanations: {
            "1 × 10¹²": "Don't forget to convert 10 × 10¹² to 1 × 10¹³.",
            "1 × 10⁶": "Adding exponents: 9 + 3 = 12, then adjust for coefficient.",
            "1 × 10⁷": "This is much too small."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch13_t3_qm5',
        type: "mcq",
        question: "Express 0.00000000456 × 1000000 in scientific notation.",
        options: ["4.56 × 10⁻³", "4.56 × 10⁻⁶", "4.56 × 10⁻⁹", "4.56 × 10⁻¹²"],
        correctAnswer: "4.56 × 10⁻³",
        explanation: "First convert 0.00000000456 to 4.56 × 10⁻⁹, then multiply by 10⁶ (1000000 = 10⁶). So 4.56 × 10⁻⁹⁺⁶ = 4.56 × 10⁻³. 📊",
        wrongAnswerExplanations: {
            "4.56 × 10⁻⁶": "Adding exponents: -9 + 6 = -3, not -6.",
            "4.56 × 10⁻⁹": "This is before multiplying by 1000000.",
            "4.56 × 10⁻¹²": "This would make the number even smaller."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl7_ch13_t3_qm6',
        type: "mcq",
        question: "If light travels at 3 × 10⁸ meters per second, how far does it travel in 2 × 10⁻³ seconds?",
        options: ["6 × 10⁵ meters", "6 × 10⁶ meters", "6 × 10⁴ meters", "6 × 10³ meters"],
        correctAnswer: "6 × 10⁵ meters",
        explanation: "Multiply: (3 × 10⁸) × (2 × 10⁻³) = 6 × 10⁸⁻³ = 6 × 10⁵ meters. 💫",
        wrongAnswerExplanations: {
            "6 × 10⁶ meters": "Adding exponents: 8 + (-3) = 5, not 6.",
            "6 × 10⁴ meters": "This is too small by a factor of 10.",
            "6 × 10³ meters": "This is too small by a factor of 100."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch13_t3_qm7',
        type: "mcq",
        question: "What is (1.2 × 10⁻⁴) ÷ (3 × 10⁻⁷) in scientific notation?",
        options: ["4 × 10²", "4 × 10³", "4 × 10⁴", "4 × 10⁵"],
        correctAnswer: "4 × 10²",
        explanation: "Divide numbers (1.2 ÷ 3 = 0.4) and subtract exponents (-4 - (-7) = 3). Then convert 0.4 × 10³ to 4 × 10². ➗",
        wrongAnswerExplanations: {
            "4 × 10³": "Remember to convert to standard scientific notation.",
            "4 × 10⁴": "The exponent difference is 3, not 4.",
            "4 × 10⁵": "This would be much too large."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl7_ch13_t3_qm8',
        type: "mcq",
        question: "A bacterium divides into 2 every hour. If you start with 5 × 10³ bacteria, how many will there be after 4 hours?",
        options: ["8 × 10⁴", "8 × 10³", "8 × 10⁵", "8 × 10⁶"],
        correctAnswer: "8 × 10⁴",
        explanation: "After 4 hours, multiply by 2⁴ = 16. So 5 × 10³ × 16 = 80 × 10³ = 8 × 10⁴. 🦠",
        wrongAnswerExplanations: {
            "8 × 10³": "This would be smaller than the starting amount.",
            "8 × 10⁵": "This would be too large by a factor of 10.",
            "8 × 10⁶": "This would be too large by a factor of 100."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl7_ch13_t3_qm9',
        type: "mcq",
        question: "If the mass of a proton is 1.67 × 10⁻²⁷ kg and the mass of an electron is 9.1 × 10⁻³¹ kg, what is their mass ratio (proton/electron)?",
        options: ["1836", "1836 × 10⁴", "1.836 × 10³", "1.836 × 10⁴"],
        correctAnswer: "1836",
        explanation: "Divide: (1.67 × 10⁻²⁷) ÷ (9.1 × 10⁻³¹) = 1.67 ÷ 0.91 × 10⁴ = 1836. ⚛️",
        wrongAnswerExplanations: {
            "1836 × 10⁴": "The exponent difference is already accounted for.",
            "1.836 × 10³": "The calculation gives exactly 1836.",
            "1.836 × 10⁴": "This is not the correct value."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl7_ch13_t3_qm10',
        type: "mcq",
        question: "What is (2.5 × 10⁻³)² in scientific notation?",
        options: ["6.25 × 10⁻⁶", "6.25 × 10⁻⁵", "6.25 × 10⁻⁷", "6.25 × 10⁻⁴"],
        correctAnswer: "6.25 × 10⁻⁶",
        explanation: "Square 2.5 (= 6.25) and multiply exponents by 2: 10⁻³×² = 10⁻⁶. 🎯",
        wrongAnswerExplanations: {
            "6.25 × 10⁻⁵": "When squaring, multiply exponent by 2: -3 × 2 = -6.",
            "6.25 × 10⁻⁷": "This would be too small.",
            "6.25 × 10⁻⁴": "This would be too large."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch13_t3_qm11',
        type: "mcq",
        question: "The diameter of a virus is approximately 1.5 × 10⁻⁷ meters. How many viruses would fit end-to-end in 3 × 10⁻⁴ meters?",
        options: ["2 × 10³", "2 × 10⁴", "2 × 10²", "2 × 10⁵"],
        correctAnswer: "2 × 10³",
        explanation: "Divide total length by virus size: (3 × 10⁻⁴) ÷ (1.5 × 10⁻⁷) = 2 × 10³. 🦠",
        wrongAnswerExplanations: {
            "2 × 10⁴": "The exponent difference is 3, not 4.",
            "2 × 10²": "This would be too small.",
            "2 × 10⁵": "This would be too large."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch13_t3_qm12',
        type: "mcq",
        question: "A star is 4.2 × 10¹⁶ meters away. Express this distance in light years, given that one light year is 9.46 × 10¹⁵ meters.",
        options: ["4.44", "0.444", "44.4", "0.0444"],
        correctAnswer: "4.44",
        explanation: "Divide: (4.2 × 10¹⁶) ÷ (9.46 × 10¹⁵) = 4.2 ÷ 0.946 = 4.44 light years. ⭐",
        wrongAnswerExplanations: {
            "0.444": "The star is farther than one light year.",
            "44.4": "This would be too far.",
            "0.0444": "This would be much too close."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl7_ch13_t3_qm13',
        type: "mcq",
        question: "What is (8 × 10⁻⁴) × (1.25 × 10⁵) × (5 × 10⁻²) in scientific notation?",
        options: ["5 × 10⁻¹", "5 × 10⁰", "5 × 10¹", "5 × 10²"],
        correctAnswer: "5 × 10⁰",
        explanation: "Multiply numbers (8 × 1.25 × 5 = 50) and add exponents (-4 + 5 + -2 = -1). Convert 50 × 10⁻¹ to 5 × 10⁰. 🧮",
        wrongAnswerExplanations: {
            "5 × 10⁻¹": "Don't forget to convert to standard scientific notation.",
            "5 × 10¹": "This would be too large by a factor of 10.",
            "5 × 10²": "This would be too large by a factor of 100."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl7_ch13_t3_qm14',
        type: "mcq",
        question: "The mass of the Sun is 2 × 10³⁰ kg and the mass of Jupiter is 1.9 × 10²⁷ kg. What fraction of the Sun's mass is Jupiter's mass?",
        options: ["9.5 × 10⁻⁴", "9.5 × 10⁻³", "9.5 × 10⁻²", "9.5 × 10⁻¹"],
        correctAnswer: "9.5 × 10⁻⁴",
        explanation: "Divide: (1.9 × 10²⁷) ÷ (2 × 10³⁰) = 0.95 × 10⁻³ = 9.5 × 10⁻⁴. 🌞",
        wrongAnswerExplanations: {
            "9.5 × 10⁻³": "This would make Jupiter too massive.",
            "9.5 × 10⁻²": "This would make Jupiter too massive.",
            "9.5 × 10⁻¹": "This would make Jupiter too massive."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl7_ch13_t3_qm15',
        type: "mcq",
        question: "If a number is written as 6.4 × 10ⁿ and equals 640,000, what is the value of n?",
        options: ["3", "4", "5", "6"],
        correctAnswer: "5",
        explanation: "640,000 = 6.4 × 10⁵, so n = 5. Count zeros after moving decimal point. 🔢",
        wrongAnswerExplanations: {
            "3": "This would give 6,400, too small.",
            "4": "This would give 64,000, too small.",
            "6": "This would give 6,400,000, too large."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch13_t3_qm16',
        type: "mcq",
        question: "What is (3 × 10⁻²)³ in scientific notation?",
        options: ["2.7 × 10⁻⁵", "2.7 × 10⁻⁶", "2.7 × 10⁻⁴", "2.7 × 10⁻⁷"],
        correctAnswer: "2.7 × 10⁻⁶",
        explanation: "Cube 3 (= 27) and multiply exponent by 3: 10⁻²×³ = 10⁻⁶. Convert 27 × 10⁻⁶ to 2.7 × 10⁻⁵. 🎯",
        wrongAnswerExplanations: {
            "2.7 × 10⁻⁵": "When cubing, multiply exponent by 3: -2 × 3 = -6.",
            "2.7 × 10⁻⁴": "This would be too large.",
            "2.7 × 10⁻⁷": "This would be too small."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch13_t3_qm17',
        type: "mcq",
        question: "A microchip can store 4 × 10¹² bits of data. If each byte is 8 bits, how many bytes can it store?",
        options: ["5 × 10¹¹", "5 × 10¹⁰", "5 × 10¹²", "5 × 10⁹"],
        correctAnswer: "5 × 10¹¹",
        explanation: "Divide total bits by 8: (4 × 10¹²) ÷ 8 = 0.5 × 10¹² = 5 × 10¹¹ bytes. 💾",
        wrongAnswerExplanations: {
            "5 × 10¹⁰": "This would be too small.",
            "5 × 10¹²": "This would be larger than the number of bits.",
            "5 × 10⁹": "This would be much too small."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch13_t3_qm18',
        type: "mcq",
        question: "What is (4 × 10⁵) ÷ (8 × 10⁻⁴) in scientific notation?",
        options: ["5 × 10⁸", "5 × 10⁹", "5 × 10⁷", "5 × 10⁶"],
        correctAnswer: "5 × 10⁸",
        explanation: "Divide numbers (4 ÷ 8 = 0.5) and subtract exponents (5 - (-4) = 9). Convert 0.5 × 10⁹ to 5 × 10⁸. ➗",
        wrongAnswerExplanations: {
            "5 × 10⁹": "Remember to convert to standard scientific notation.",
            "5 × 10⁷": "This would be too small.",
            "5 × 10⁶": "This would be much too small."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch13_t3_qm19',
        type: "mcq",
        question: "The thickness of a paper sheet is 1 × 10⁻⁴ meters. How tall would a stack of 2 × 10⁵ sheets be?",
        options: ["2 × 10¹ meters", "2 × 10² meters", "2 × 10⁻¹ meters", "2 × 10⁰ meters"],
        correctAnswer: "2 × 10¹ meters",
        explanation: "Multiply: (1 × 10⁻⁴) × (2 × 10⁵) = 2 × 10¹ meters = 20 meters. 📚",
        wrongAnswerExplanations: {
            "2 × 10² meters": "This would be 200 meters, too tall.",
            "2 × 10⁻¹ meters": "This would be 0.2 meters, too short.",
            "2 × 10⁰ meters": "This would be 2 meters, too short."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch13_t3_qm20',
        type: "mcq",
        question: "A galaxy is 7.5 × 10²¹ meters from Earth. If light travels at 3 × 10⁸ meters per second, how many seconds does light take to reach Earth?",
        options: ["2.5 × 10¹³", "2.5 × 10¹⁴", "2.5 × 10¹²", "2.5 × 10¹⁵"],
        correctAnswer: "2.5 × 10¹³",
        explanation: "Divide distance by speed: (7.5 × 10²¹) ÷ (3 × 10⁸) = 2.5 × 10¹³ seconds. 🌌",
        wrongAnswerExplanations: {
            "2.5 × 10¹⁴": "This would be too long.",
            "2.5 × 10¹²": "This would be too short.",
            "2.5 × 10¹⁵": "This would be much too long."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    }
];
