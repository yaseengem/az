import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl8_ch10_t2_qm1',
        type: 'mcq',
        question: 'What is (2.5 × 10⁴) × (3.0 × 10³) in scientific notation? 🧮',
        options: ['7.5 × 10⁷', '7.5 × 10⁶', '75 × 10⁶', '0.75 × 10⁸'],
        correctAnswer: '7.5 × 10⁷',
        explanation: 'Multiply numbers (2.5 × 3.0 = 7.5) and add exponents (10⁴ × 10³ = 10⁷).',
        wrongAnswerExplanations: {
            '7.5 × 10⁶': 'Added exponents incorrectly',
            '75 × 10⁶': 'First number should be between 1 and 10',
            '0.75 × 10⁸': 'First number should be between 1 and 10'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 2
    },
    {
        id: 'cl8_ch10_t2_qm2',
        type: 'mcq',
        question: 'If Earth`s mass is 5.97 × 10²⁴ kg and Moon`s mass is 7.34 × 10²² kg, how many times heavier is Earth than Moon? 🌍',
        options: ['8.13 × 10¹', '81.3', '8.13 × 10²', '813'],
        correctAnswer: '8.13 × 10¹',
        explanation: 'Divide Earth`s mass by Moon`s mass: (5.97 × 10²⁴) ÷ (7.34 × 10²²) = 5.97/7.34 × 10² = 0.813 × 10² = 8.13 × 10¹.',
        wrongAnswerExplanations: {
            '81.3': 'Not in scientific notation',
            '8.13 × 10²': 'Incorrect exponent calculation',
            '813': 'Not in scientific notation and incorrect'
        },
        difficulty: 'medium',
        marks: 3,
        recommendedTime: 3
    },
    {
        id: 'cl8_ch10_t2_qm3',
        type: 'mcq',
        question: 'What is (4.2 × 10⁻³) ÷ (2.1 × 10⁻⁵) in scientific notation? 📊',
        options: ['2.0 × 10²', '2.0 × 10⁻²', '20 × 10¹', '0.2 × 10³'],
        correctAnswer: '2.0 × 10²',
        explanation: 'Divide numbers (4.2 ÷ 2.1 = 2.0) and subtract exponents (-3 - (-5) = -3 + 5 = 2).',
        wrongAnswerExplanations: {
            '2.0 × 10⁻²': 'Subtracted exponents incorrectly',
            '20 × 10¹': 'First number should be between 1 and 10',
            '0.2 × 10³': 'First number should be between 1 and 10'
        },
        difficulty: 'medium',
        marks: 3,
        recommendedTime: 2
    },
    {
        id: 'cl8_ch10_t2_qm4',
        type: 'mcq',
        question: 'The speed of light is approximately 3.0 × 10⁸ m/s. How far does light travel in 2.0 × 10⁻⁶ seconds? 🚀',
        options: ['6.0 × 10²', '6.0 × 10³', '6.0 × 10⁴', '6.0 × 10²⁴'],
        correctAnswer: '6.0 × 10²',
        explanation: 'Multiply speed by time: (3.0 × 10⁸) × (2.0 × 10⁻⁶) = 6.0 × 10² meters.',
        wrongAnswerExplanations: {
            '6.0 × 10³': 'Added exponents instead of multiplying',
            '6.0 × 10⁴': 'Incorrect exponent calculation',
            '6.0 × 10²⁴': 'Multiplied exponents instead of adding'
        },
        difficulty: 'medium',
        marks: 3,
        recommendedTime: 3
    },
    {
        id: 'cl8_ch10_t2_qm5',
        type: 'mcq',
        question: 'If a bacteria population doubles every hour and starts with 1.0 × 10³ bacteria, what will be the population after 4 hours? 🦠',
        options: ['1.6 × 10⁴', '8.0 × 10³', '2.0 × 10⁴', '1.0 × 10⁷'],
        correctAnswer: '1.6 × 10⁴',
        explanation: 'After 4 hours, population increases by 2⁴ = 16 times: 1.0 × 10³ × 16 = 16 × 10³ = 1.6 × 10⁴.',
        wrongAnswerExplanations: {
            '8.0 × 10³': 'Only multiplied by 8',
            '2.0 × 10⁴': 'Only doubled twice',
            '1.0 × 10⁷': 'Incorrect calculation'
        },
        difficulty: 'medium',
        marks: 3,
        recommendedTime: 3
    },
    {
        id: 'cl8_ch10_t2_qm6',
        type: 'mcq',
        question: 'What is (5.0 × 10⁻⁴) × (4.0 × 10⁻³) × (5.0 × 10²) in scientific notation? 🧮',
        options: ['1.0 × 10⁻⁴', '1.0 × 10⁻³', '1.0 × 10⁻⁵', '1.0 × 10⁻²'],
        correctAnswer: '1.0 × 10⁻⁴',
        explanation: 'Multiply numbers (5.0 × 4.0 × 5.0 = 100 = 1.0) and add exponents (-4 + (-3) + 2 = -5, then adjust for 100).',
        wrongAnswerExplanations: {
            '1.0 × 10⁻³': 'Added exponents incorrectly',
            '1.0 × 10⁻⁵': 'Didn`t adjust for coefficient multiplication',
            '1.0 × 10⁻²': 'Incorrect exponent calculation'
        },
        difficulty: 'medium',
        marks: 3,
        recommendedTime: 3
    },
    {
        id: 'cl8_ch10_t2_qm7',
        type: 'mcq',
        question: 'A computer can perform 2.5 × 10⁹ calculations per second. How many calculations can it perform in 4.0 × 10⁻³ seconds? 💻',
        options: ['1.0 × 10⁷', '1.0 × 10⁶', '1.0 × 10⁸', '1.0 × 10⁵'],
        correctAnswer: '1.0 × 10⁷',
        explanation: 'Multiply rates: (2.5 × 10⁹) × (4.0 × 10⁻³) = 10.0 × 10⁶ = 1.0 × 10⁷.',
        wrongAnswerExplanations: {
            '1.0 × 10⁶': 'Incorrect exponent calculation',
            '1.0 × 10⁸': 'Added exponents instead of subtracting',
            '1.0 × 10⁵': 'Subtracted exponents incorrectly'
        },
        difficulty: 'medium',
        marks: 3,
        recommendedTime: 3
    },
    {
        id: 'cl8_ch10_t2_qm8',
        type: 'mcq',
        question: 'If (x × 10⁴) × (y × 10⁻²) = 3.6 × 10⁵, and x = 1.2, what is y? 🤔',
        options: ['3.0 × 10³', '3.0 × 10²', '3.0 × 10⁴', '3.0 × 10¹'],
        correctAnswer: '3.0 × 10³',
        explanation: 'Substitute x: (1.2 × 10⁴) × (y × 10⁻²) = 3.6 × 10⁵, solve for y = 3.0 × 10³.',
        wrongAnswerExplanations: {
            '3.0 × 10²': 'Incorrect exponent calculation',
            '3.0 × 10⁴': 'Added exponents instead of subtracting',
            '3.0 × 10¹': 'Subtracted exponents incorrectly'
        },
        difficulty: 'medium',
        marks: 3,
        recommendedTime: 3
    },
    {
        id: 'cl8_ch10_t2_qm9',
        type: 'mcq',
        question: 'The mass of an electron is 9.1 × 10⁻³¹ kg. How many electrons make up 1.82 × 10⁻²⁷ kg? 🔬',
        options: ['2.0 × 10³', '2.0 × 10⁴', '2.0 × 10⁵', '2.0 × 10²'],
        correctAnswer: '2.0 × 10⁴',
        explanation: 'Divide total mass by electron mass: (1.82 × 10⁻²⁷) ÷ (9.1 × 10⁻³¹) = 2.0 × 10⁴.',
        wrongAnswerExplanations: {
            '2.0 × 10³': 'Incorrect exponent calculation',
            '2.0 × 10⁵': 'Added exponents instead of subtracting',
            '2.0 × 10²': 'Subtracted exponents incorrectly'
        },
        difficulty: 'medium',
        marks: 3,
        recommendedTime: 3
    },
    {
        id: 'cl8_ch10_t2_qm10',
        type: 'mcq',
        question: 'What is (8.0 × 10⁵) ÷ (2.0 × 10⁻³) in scientific notation? 📊',
        options: ['4.0 × 10⁸', '4.0 × 10⁷', '4.0 × 10⁹', '4.0 × 10⁶'],
        correctAnswer: '4.0 × 10⁸',
        explanation: 'Divide numbers (8.0 ÷ 2.0 = 4.0) and subtract exponents (5 - (-3) = 5 + 3 = 8).',
        wrongAnswerExplanations: {
            '4.0 × 10⁷': 'Incorrect exponent calculation',
            '4.0 × 10⁹': 'Added exponents instead of subtracting',
            '4.0 × 10⁶': 'Subtracted exponents incorrectly'
        },
        difficulty: 'medium',
        marks: 3,
        recommendedTime: 2
    },
    {
        id: 'cl8_ch10_t2_qm11',
        type: 'mcq',
        question: 'If a star is 1.5 × 10¹⁶ meters away and light travels at 3.0 × 10⁸ m/s, how many seconds does light take to reach Earth? ⭐',
        options: ['5.0 × 10⁷', '5.0 × 10⁸', '5.0 × 10⁶', '5.0 × 10⁹'],
        correctAnswer: '5.0 × 10⁷',
        explanation: 'Divide distance by speed: (1.5 × 10¹⁶) ÷ (3.0 × 10⁸) = 0.5 × 10⁸ = 5.0 × 10⁷ seconds.',
        wrongAnswerExplanations: {
            '5.0 × 10⁸': 'Incorrect exponent calculation',
            '5.0 × 10⁶': 'Subtracted exponents incorrectly',
            '5.0 × 10⁹': 'Added exponents instead of subtracting'
        },
        difficulty: 'medium',
        marks: 3,
        recommendedTime: 3
    },
    {
        id: 'cl8_ch10_t2_qm12',
        type: 'mcq',
        question: 'What is the value of (6.0 × 10⁻⁴)² in scientific notation? 🧮',
        options: ['3.6 × 10⁻⁷', '3.6 × 10⁻⁸', '3.6 × 10⁻⁶', '3.6 × 10⁻⁹'],
        correctAnswer: '3.6 × 10⁻⁷',
        explanation: 'Square the number (6.0² = 36 = 3.6 × 10¹) and multiply exponents by 2 (-4 × 2 = -8, then adjust for 3.6).',
        wrongAnswerExplanations: {
            '3.6 × 10⁻⁸': 'Incorrect exponent calculation',
            '3.6 × 10⁻⁶': 'Added exponents instead of multiplying',
            '3.6 × 10⁻⁹': 'Multiplied exponents incorrectly'
        },
        difficulty: 'medium',
        marks: 3,
        recommendedTime: 2
    },
    {
        id: 'cl8_ch10_t2_qm13',
        type: 'mcq',
        question: 'A microorganism weighs 2.0 × 10⁻⁶ grams. What is the total weight of 3.0 × 10⁴ such organisms? 🦠',
        options: ['6.0 × 10⁻²', '6.0 × 10⁻¹', '6.0 × 10⁻³', '6.0 × 10⁻⁴'],
        correctAnswer: '6.0 × 10⁻²',
        explanation: 'Multiply weight by number: (2.0 × 10⁻⁶) × (3.0 × 10⁴) = 6.0 × 10⁻².',
        wrongAnswerExplanations: {
            '6.0 × 10⁻¹': 'Incorrect exponent calculation',
            '6.0 × 10⁻³': 'Subtracted exponents instead of adding',
            '6.0 × 10⁻⁴': 'Added exponents incorrectly'
        },
        difficulty: 'medium',
        marks: 3,
        recommendedTime: 3
    },
    {
        id: 'cl8_ch10_t2_qm14',
        type: 'mcq',
        question: 'If (a × 10⁵) ÷ (b × 10³) = 2.5 × 10⁴ and a = 5.0, what is b? 🤔',
        options: ['2.0', '0.2', '20', '0.02'],
        correctAnswer: '2.0',
        explanation: 'Substitute a: (5.0 × 10⁵) ÷ (b × 10³) = 2.5 × 10⁴, solve for b = 2.0.',
        wrongAnswerExplanations: {
            '0.2': 'Incorrect calculation',
            '20': 'Incorrect decimal placement',
            '0.02': 'Incorrect calculation and decimal placement'
        },
        difficulty: 'medium',
        marks: 3,
        recommendedTime: 3
    },
    {
        id: 'cl8_ch10_t2_qm15',
        type: 'mcq',
        question: 'The radius of an atom is 1.2 × 10⁻¹⁰ meters. How many atoms placed side by side make 1.2 millimeters? 📏',
        options: ['1.0 × 10⁷', '1.0 × 10⁶', '1.0 × 10⁸', '1.0 × 10⁵'],
        correctAnswer: '1.0 × 10⁷',
        explanation: 'Convert 1.2 mm to meters (1.2 × 10⁻³) and divide by atom radius: (1.2 × 10⁻³) ÷ (1.2 × 10⁻¹⁰) = 1.0 × 10⁷.',
        wrongAnswerExplanations: {
            '1.0 × 10⁶': 'Incorrect exponent calculation',
            '1.0 × 10⁸': 'Added exponents instead of subtracting',
            '1.0 × 10⁵': 'Subtracted exponents incorrectly'
        },
        difficulty: 'medium',
        marks: 3,
        recommendedTime: 3
    },
    {
        id: 'cl8_ch10_t2_qm16',
        type: 'mcq',
        question: 'What is (1.2 × 10⁻³) × (5.0 × 10⁻⁴) × (1.5 × 10⁻²) in scientific notation? 🧮',
        options: ['9.0 × 10⁻⁹', '9.0 × 10⁻⁸', '9.0 × 10⁻¹⁰', '9.0 × 10⁻⁷'],
        correctAnswer: '9.0 × 10⁻⁹',
        explanation: 'Multiply numbers (1.2 × 5.0 × 1.5 = 9.0) and add exponents (-3 + (-4) + (-2) = -9).',
        wrongAnswerExplanations: {
            '9.0 × 10⁻⁸': 'Added exponents incorrectly',
            '9.0 × 10⁻¹⁰': 'Added one extra negative power',
            '9.0 × 10⁻⁷': 'Incorrect exponent calculation'
        },
        difficulty: 'medium',
        marks: 3,
        recommendedTime: 3
    },
    {
        id: 'cl8_ch10_t2_qm17',
        type: 'mcq',
        question: 'A data file is 2.5 × 10⁶ bytes. If it`s compressed to 4.0 × 10⁴ bytes, what is the compression ratio? 💾',
        options: ['6.25 × 10¹', '6.25 × 10²', '6.25', '6.25 × 10⁻¹'],
        correctAnswer: '6.25 × 10¹',
        explanation: 'Divide original by compressed size: (2.5 × 10⁶) ÷ (4.0 × 10⁴) = 62.5 = 6.25 × 10¹.',
        wrongAnswerExplanations: {
            '6.25 × 10²': 'Incorrect exponent calculation',
            '6.25': 'Not in scientific notation',
            '6.25 × 10⁻¹': 'Incorrect exponent sign'
        },
        difficulty: 'medium',
        marks: 3,
        recommendedTime: 3
    },
    {
        id: 'cl8_ch10_t2_qm18',
        type: 'mcq',
        question: 'If (x × 10⁻³) × (y × 10⁵) = 8.0 × 10⁴ and x = 4.0, what is y? 🔢',
        options: ['2.0 × 10²', '2.0 × 10³', '2.0 × 10¹', '2.0'],
        correctAnswer: '2.0 × 10²',
        explanation: 'Substitute x: (4.0 × 10⁻³) × (y × 10⁵) = 8.0 × 10⁴, solve for y = 2.0 × 10².',
        wrongAnswerExplanations: {
            '2.0 × 10³': 'Incorrect exponent calculation',
            '2.0 × 10¹': 'Added exponents incorrectly',
            '2.0': 'Not in scientific notation'
        },
        difficulty: 'medium',
        marks: 3,
        recommendedTime: 3
    },
    {
        id: 'cl8_ch10_t2_qm19',
        type: 'mcq',
        question: 'A light-year is approximately 9.46 × 10¹⁵ meters. How many kilometers is this? 🌟',
        options: ['9.46 × 10¹²', '9.46 × 10¹³', '9.46 × 10¹¹', '9.46 × 10¹⁴'],
        correctAnswer: '9.46 × 10¹²',
        explanation: 'Convert meters to kilometers by dividing by 1000 (10³): 9.46 × 10¹⁵ ÷ 10³ = 9.46 × 10¹².',
        wrongAnswerExplanations: {
            '9.46 × 10¹³': 'Only divided by 100',
            '9.46 × 10¹¹': 'Divided by too much',
            '9.46 × 10¹⁴': 'Only divided by 10'
        },
        difficulty: 'medium',
        marks: 3,
        recommendedTime: 3
    },
    {
        id: 'cl8_ch10_t2_qm20',
        type: 'mcq',
        question: 'What is (3.0 × 10⁴)³ in scientific notation? 🧮',
        options: ['2.7 × 10¹³', '2.7 × 10¹²', '2.7 × 10¹⁴', '2.7 × 10¹¹'],
        correctAnswer: '2.7 × 10¹³',
        explanation: 'Cube the number (3.0³ = 27 = 2.7 × 10¹) and multiply exponent by 3 (4 × 3 = 12, then adjust for 2.7).',
        wrongAnswerExplanations: {
            '2.7 × 10¹²': 'Incorrect exponent calculation',
            '2.7 × 10¹⁴': 'Added one extra power',
            '2.7 × 10¹¹': 'Multiplied exponent incorrectly'
        },
        difficulty: 'medium',
        marks: 3,
        recommendedTime: 3
    }
]; 