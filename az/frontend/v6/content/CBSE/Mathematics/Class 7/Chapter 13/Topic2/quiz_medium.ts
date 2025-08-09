// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 7\Chapter13\Topic2\quiz_medium.ts
import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl7_ch13_t2_qm1',
        type: "mcq",
        question: "Multiply (3 × 10⁴) × (2 × 10⁻²) and express the result in scientific notation.",
        options: ["6 × 10²", "6 × 10⁶", "6 × 10⁻⁶", "0.6 × 10³"],
        correctAnswer: "6 × 10²",
        explanation: "Multiply the coefficients: 3 × 2 = 6. Add the exponents: 4 + (-2) = 2. So the result is 6 × 10². 🧮",
        wrongAnswerExplanations: {
            "6 × 10⁶": "When multiplying powers of 10, we add the exponents, not the numbers themselves.",
            "6 × 10⁻⁶": "The exponents should be added: 4 + (-2) = 2, not -6.",
            "0.6 × 10³": "The coefficient should be 6, not 0.6."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch13_t2_qm2',
        type: "mcq",
        question: "Divide (8 × 10⁵) ÷ (4 × 10²) and express the result in scientific notation.",
        options: ["2 × 10³", "2 × 10⁷", "2 × 10²", "2 × 10⁻³"],
        correctAnswer: "2 × 10³",
        explanation: "Divide the coefficients: 8 ÷ 4 = 2. Subtract the exponents: 5 - 2 = 3. So the result is 2 × 10³. 📊",
        wrongAnswerExplanations: {
            "2 × 10⁷": "When dividing powers of 10, we subtract the exponents, not add them.",
            "2 × 10²": "The correct exponent is 5 - 2 = 3, not 2.",
            "2 × 10⁻³": "The exponent should be positive: 5 - 2 = 3, not -3."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch13_t2_qm3',
        type: "mcq",
        question: "Which expression is equal to (3 × 10⁴) + (7 × 10⁴)?",
        options: ["10 × 10⁴", "1 × 10⁵", "3.7 × 10⁴", "37 × 10³"],
        correctAnswer: "1 × 10⁵",
        explanation: "Add the coefficients with same powers: (3 + 7) × 10⁴ = 10 × 10⁴. Convert to proper scientific notation: 1 × 10⁵. 🔢",
        wrongAnswerExplanations: {
            "10 × 10⁴": "This is correct arithmetically but not in proper scientific notation as the coefficient must be < 10.",
            "3.7 × 10⁴": "We add the coefficients, not combine them as digits (3 + 7 = 10, not 3.7).",
            "37 × 10³": "This is not in proper scientific notation, and the calculation is incorrect."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl7_ch13_t2_qm4',
        type: "mcq",
        question: "Calculate (6 × 10⁻³) × (5 × 10⁻⁴) and express the result in scientific notation.",
        options: ["3 × 10⁻⁷", "30 × 10⁻⁷", "3 × 10⁻⁶", "3 × 10⁻⁸"],
        correctAnswer: "3 × 10⁻⁶",
        explanation: "Multiply the coefficients: 6 × 5 = 30. Add the exponents: (-3) + (-4) = -7. Express in scientific notation: 3 × 10⁻⁶. 📝",
        wrongAnswerExplanations: {
            "3 × 10⁻⁷": "After multiplying, we get 30 × 10⁻⁷, which in scientific notation is 3 × 10⁻⁶.",
            "30 × 10⁻⁷": "This is not in proper scientific notation as the coefficient must be < 10.",
            "3 × 10⁻⁸": "The correct exponent is -7, which converts to 3 × 10⁻⁶ in scientific notation."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl7_ch13_t2_qm5',
        type: "mcq",
        question: "Calculate (4.2 × 10⁵) ÷ (7 × 10⁻³) and express the result in scientific notation.",
        options: ["6 × 10⁸", "0.6 × 10⁸", "6 × 10⁷", "0.6 × 10⁹"],
        correctAnswer: "6 × 10⁷",
        explanation: "Divide the coefficients: 4.2 ÷ 7 = 0.6. Subtract the exponents: 5 - (-3) = 8. Result is 0.6 × 10⁸ = 6 × 10⁷. 🧮",
        wrongAnswerExplanations: {
            "6 × 10⁸": "The coefficient should be 0.6, not 6, before converting to proper scientific notation.",
            "0.6 × 10⁸": "This is arithmetically correct but not in proper scientific notation as coefficient must be ≥ 1.",
            "0.6 × 10⁹": "This is incorrect both in coefficient and exponent."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl7_ch13_t2_qm6',
        type: "mcq",
        question: "The distance from the Earth to the Sun is about 150,000,000,000 meters, and the speed of light is about 300,000,000 meters per second. How long does it take light to travel from the Sun to Earth?",
        options: ["500 seconds", "5 × 10² seconds", "8.3 minutes", "5 minutes"],
        correctAnswer: "500 seconds",
        explanation: "Distance/Speed = Time. (1.5 × 10¹¹) ÷ (3 × 10⁸) = 5 × 10² = 500 seconds, which is about 8.3 minutes. ☀️",
        wrongAnswerExplanations: {
            "5 × 10² seconds": "This equals 500 seconds, which is the correct answer in scientific notation.",
            "8.3 minutes": "This is approximately correct (500 seconds = 8.33 minutes), but the question asks for seconds.",
            "5 minutes": "500 seconds equals 8.33 minutes, not 5 minutes."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl7_ch13_t2_qm7',
        type: "mcq",
        question: "The mass of an electron is approximately 9.1 × 10⁻³¹ kg. If there are 6.02 × 10²³ electrons, what is their total mass?",
        options: ["5.48 × 10⁻⁷ kg", "5.48 × 10⁻⁸ kg", "5.48 × 10⁻⁶ kg", "5.48 × 10⁹ kg"],
        correctAnswer: "5.48 × 10⁻⁷ kg",
        explanation: "Total mass = individual mass × number of electrons = (9.1 × 10⁻³¹) × (6.02 × 10²³) = 5.48 × 10⁻⁷ kg. ⚛️",
        wrongAnswerExplanations: {
            "5.48 × 10⁻⁸ kg": "Check the exponent calculation. The correct exponent is (-31) + 23 = -8, giving 54.8 × 10⁻⁸ = 5.48 × 10⁻⁷.",
            "5.48 × 10⁻⁶ kg": "The exponent calculation should be (-31) + 23 = -8, resulting in 5.48 × 10⁻⁷ kg.",
            "5.48 × 10⁹ kg": "This answer is far too large. The exponents add to a negative number, not a positive one."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl7_ch13_t2_qm8',
        type: "mcq",
        question: "Express the product of 0.0035 and 0.00027 in scientific notation.",
        options: ["9.45 × 10⁻⁷", "9.45 × 10⁻⁶", "9.45 × 10⁻⁸", "0.945 × 10⁻⁶"],
        correctAnswer: "9.45 × 10⁻⁷",
        explanation: "Convert to scientific notation: (3.5 × 10⁻³) × (2.7 × 10⁻⁴) = 9.45 × 10⁻⁷. 🔍",
        wrongAnswerExplanations: {
            "9.45 × 10⁻⁶": "The exponents should add to -7, not -6.",
            "9.45 × 10⁻⁸": "The exponents should add to -7, not -8.",
            "0.945 × 10⁻⁶": "This equals 9.45 × 10⁻⁷ but is not in proper scientific notation."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch13_t2_qm9',
        type: "mcq",
        question: "A bacteria population doubles every hour. If there are 5 × 10⁴ bacteria initially, how many will there be after 3 hours?",
        options: ["4 × 10⁵", "8 × 10⁵", "15 × 10⁴", "4 × 10⁶"],
        correctAnswer: "4 × 10⁵",
        explanation: "After 3 hours: 5 × 10⁴ × 2³ = 5 × 10⁴ × 8 = 40 × 10⁴ = 4 × 10⁵. 🦠",
        wrongAnswerExplanations: {
            "8 × 10⁵": "After doubling 3 times, we multiply by 8, not 16, so 5 × 10⁴ × 8 = 4 × 10⁵.",
            "15 × 10⁴": "Doubling means multiplying by 2 each time, not adding the original amount.",
            "4 × 10⁶": "This is 10 times larger than the correct answer."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch13_t2_qm10',
        type: "mcq",
        question: "If the radius of Earth is approximately 6.37 × 10⁶ meters, what is its surface area in scientific notation? (Surface area of a sphere = 4πr²)",
        options: ["5.1 × 10¹⁴ square meters", "5.1 × 10¹³ square meters", "1.28 × 10¹⁴ square meters", "1.28 × 10¹³ square meters"],
        correctAnswer: "5.1 × 10¹⁴ square meters",
        explanation: "Surface area = 4π(6.37 × 10⁶)² = 4 × 3.14 × (6.37)² × 10¹² ≈ 5.1 × 10¹⁴ square meters. 🌎",
        wrongAnswerExplanations: {
            "5.1 × 10¹³ square meters": "The exponent should be 14, not 13, as the radius is squared.",
            "1.28 × 10¹⁴ square meters": "This calculation is missing the factor of π.",
            "1.28 × 10¹³ square meters": "This is incorrect in both the numerical value and the exponent."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl7_ch13_t2_qm11',
        type: "mcq",
        question: "What is (2.5 × 10⁻⁴) × (4 × 10⁶) ÷ (2 × 10⁻⁵) in scientific notation?",
        options: ["5 × 10⁷", "5 × 10⁻³", "5 × 10⁵", "0.5 × 10⁸"],
        correctAnswer: "5 × 10⁷",
        explanation: "First multiply: (2.5 × 10⁻⁴) × (4 × 10⁶) = 10 × 10². Then divide by (2 × 10⁻⁵): 10 × 10² ÷ (2 × 10⁻⁵) = 5 × 10⁷. 📊",
        wrongAnswerExplanations: {
            "5 × 10⁻³": "The exponent calculation is incorrect. We add exponents when multiplying and subtract when dividing.",
            "5 × 10⁵": "Check your exponent calculation: (-4) + 6 - (-5) = 7, not 5.",
            "0.5 × 10⁸": "The coefficient should be 5, not 0.5, in proper scientific notation."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl7_ch13_t2_qm12',
        type: "mcq",
        question: "If light travels at 3 × 10⁸ meters per second, how far does it travel in one year (approximately 3.15 × 10⁷ seconds)?",
        options: ["9.45 × 10¹⁵ meters", "9.45 × 10¹⁶ meters", "3.15 × 10¹⁵ meters", "3 × 10¹⁵ meters"],
        correctAnswer: "9.45 × 10¹⁵ meters",
        explanation: "Distance = Speed × Time = (3 × 10⁸) × (3.15 × 10⁷) = 9.45 × 10¹⁵ meters. This is one light-year! 💫",
        wrongAnswerExplanations: {
            "9.45 × 10¹⁶ meters": "The exponent should be 15, not 16. Check the addition: 8 + 7 = 15.",
            "3.15 × 10¹⁵ meters": "This calculation only accounts for time, not speed × time.",
            "3 × 10¹⁵ meters": "This calculation is missing the factor of 3.15 from the time component."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch13_t2_qm13',
        type: "mcq",
        question: "The volume of a cube with side length 2.5 × 10⁻² meters is:",
        options: ["1.5625 × 10⁻⁵ cubic meters", "7.5 × 10⁻⁴ cubic meters", "1.5625 × 10⁻⁶ cubic meters", "6.25 × 10⁻⁴ cubic meters"],
        correctAnswer: "1.5625 × 10⁻⁵ cubic meters",
        explanation: "Volume of cube = (side length)³. So (2.5 × 10⁻²)³ = (2.5)³ × (10⁻²)³ = 15.625 × 10⁻⁶ = 1.5625 × 10⁻⁵ cubic meters. 📦",
        wrongAnswerExplanations: {
            "7.5 × 10⁻⁴ cubic meters": "This is the calculation for 3 × side length, not the cube volume.",
            "1.5625 × 10⁻⁶ cubic meters": "The exponent should be -6, but in scientific notation, it becomes 1.5625 × 10⁻⁵.",
            "6.25 × 10⁻⁴ cubic meters": "This is the calculation for (side length)², not (side length)³."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl7_ch13_t2_qm14',
        type: "mcq",
        question: "If 1 mole of a substance contains 6.02 × 10²³ molecules, how many molecules are in 0.25 moles?",
        options: ["1.505 × 10²³ molecules", "15.05 × 10²² molecules", "1.505 × 10²⁴ molecules", "2.408 × 10²³ molecules"],
        correctAnswer: "1.505 × 10²³ molecules",
        explanation: "Number of molecules = (0.25 moles) × (6.02 × 10²³ molecules/mole) = 1.505 × 10²³ molecules. ⚗️",
        wrongAnswerExplanations: {
            "15.05 × 10²² molecules": "This equals 1.505 × 10²³ but is not written in proper scientific notation.",
            "1.505 × 10²⁴ molecules": "Check the calculation. 0.25 × (6.02 × 10²³) = 1.505 × 10²³, not 10²⁴.",
            "2.408 × 10²³ molecules": "This is incorrect. The correct calculation is 0.25 × 6.02 = 1.505."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch13_t2_qm15',
        type: "mcq",
        question: "Simplify [(4 × 10⁻³) × (2 × 10⁵)] ÷ [(8 × 10⁻⁴) × (5 × 10²)].",
        options: ["2 × 10⁴", "0.2 × 10⁴", "2 × 10³", "0.2 × 10⁵"],
        correctAnswer: "2 × 10⁴",
        explanation: "[(4 × 10⁻³) × (2 × 10⁵)] ÷ [(8 × 10⁻⁴) × (5 × 10²)] = (8 × 10²) ÷ (4 × 10⁻²) = 2 × 10⁴. 🧮",
        wrongAnswerExplanations: {
            "0.2 × 10⁴": "The coefficient should be 2, not 0.2.",
            "2 × 10³": "Check your exponent calculation: 2 + (-3) + 5 - [(-4) + 2] = 6, resulting in 2 × 10⁴.",
            "0.2 × 10⁵": "This is incorrect in both the coefficient and the exponent."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl7_ch13_t2_qm16',
        type: "mcq",
        question: "Convert 47,300,000,000,000 to scientific notation.",
        options: ["4.73 × 10¹³", "47.3 × 10¹²", "473 × 10¹¹", "4730 × 10⁹"],
        correctAnswer: "4.73 × 10¹³",
        explanation: "Move the decimal point 13 places left to get 4.73, giving 4.73 × 10¹³. 🔢",
        wrongAnswerExplanations: {
            "47.3 × 10¹²": "This equals 4.73 × 10¹³ but is not in proper scientific notation.",
            "473 × 10¹¹": "This equals 4.73 × 10¹³ but is not in proper scientific notation.",
            "4730 × 10⁹": "This equals 4.73 × 10¹³ but is not in proper scientific notation."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch13_t2_qm17',
        type: "mcq",
        question: "Calculate (3.6 × 10⁻⁵)² and express the result in scientific notation.",
        options: ["1.296 × 10⁻¹⁰", "1.296 × 10⁻⁹", "12.96 × 10⁻¹⁰", "1.296 × 10⁻⁸"],
        correctAnswer: "1.296 × 10⁻⁹",
        explanation: "(3.6 × 10⁻⁵)² = (3.6)² × (10⁻⁵)² = 12.96 × 10⁻¹⁰ = 1.296 × 10⁻⁹. 📝",
        wrongAnswerExplanations: {
            "1.296 × 10⁻¹⁰": "The exponent should be -9, not -10, after converting to proper scientific notation.",
            "12.96 × 10⁻¹⁰": "This equals 1.296 × 10⁻⁹ but is not in proper scientific notation.",
            "1.296 × 10⁻⁸": "Check the exponent: (-5) × 2 = -10, which converts to 1.296 × 10⁻⁹."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl7_ch13_t2_qm18',
        type: "mcq",
        question: "What is the result of (7 × 10⁻³) - (3 × 10⁻³) in scientific notation?",
        options: ["4 × 10⁻³", "4 × 10⁻⁶", "10 × 10⁻³", "0.4 × 10⁻²"],
        correctAnswer: "4 × 10⁻³",
        explanation: "When the exponents are the same, subtract the coefficients: (7 - 3) × 10⁻³ = 4 × 10⁻³. 🔍",
        wrongAnswerExplanations: {
            "4 × 10⁻⁶": "When subtracting numbers in scientific notation with the same exponent, the exponent remains unchanged.",
            "10 × 10⁻³": "The coefficients are subtracted: 7 - 3 = 4, not 10.",
            "0.4 × 10⁻²": "This equals 4 × 10⁻³ but is not in proper scientific notation."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch13_t2_qm19',
        type: "mcq",
        question: "A certain star is 8.5 × 10¹⁶ meters away from Earth. If a spaceship travels at 3 × 10⁴ meters per second, how long would it take to reach the star?",
        options: ["2.83 × 10¹² seconds", "2.83 × 10¹¹ seconds", "2.55 × 10²¹ seconds", "2.55 × 10¹² seconds"],
        correctAnswer: "2.83 × 10¹² seconds",
        explanation: "Time = Distance ÷ Speed = (8.5 × 10¹⁶) ÷ (3 × 10⁴) = 2.83 × 10¹² seconds (about 90,000 years). 🚀",
        wrongAnswerExplanations: {
            "2.83 × 10¹¹ seconds": "Check the exponent calculation: 16 - 4 = 12, not 11.",
            "2.55 × 10²¹ seconds": "This calculation multiplies distance by speed instead of dividing.",
            "2.55 × 10¹² seconds": "The coefficient is incorrect. 8.5 ÷ 3 = 2.83, not 2.55."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl7_ch13_t2_qm20',
        type: "mcq",
        question: "If Earth's mass is 5.97 × 10²⁴ kg and the Moon's mass is 7.35 × 10²² kg, how many times heavier is the Earth than the Moon?",
        options: ["81.2 times", "8.12 times", "812 times", "8.12 × 10² times"],
        correctAnswer: "81.2 times",
        explanation: "Divide Earth's mass by Moon's mass: (5.97 × 10²⁴) ÷ (7.35 × 10²²) = 0.812 × 10² = 81.2 times. 🌎🌙",
        wrongAnswerExplanations: {
            "8.12 times": "The correct calculation is 5.97 ÷ 7.35 = 0.812, but the exponents must also be accounted for.",
            "812 times": "Check your decimal place. The correct answer is 81.2, not 812.",
            "8.12 × 10² times": "This equals 812 times, which is incorrect. The answer is 81.2 times."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    }
];
