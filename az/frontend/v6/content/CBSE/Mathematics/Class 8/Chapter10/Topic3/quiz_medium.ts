import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl8_ch10_t3_qm1',
        type: 'mcq',
        question: 'If 2⁻³ × 2⁻⁴ = 2ⁿ, what is the value of n?',
        options: ['-7', '7', '-12', '12'],
        correctAnswer: '-7',
        explanation: 'When multiplying powers with same base, add exponents: 2⁻³ × 2⁻⁴ = 2⁻³⁻⁴ = 2⁻⁷',
        wrongAnswerExplanations: {
            '7': 'Adding negative exponents doesn`t give positive result',
            '-12': 'You multiply the exponents instead of adding them',
            '12': 'Neither multiply nor add correctly'
        },
        difficulty: 'medium',
        marks: 3,
        recommendedTime: 2
    },
    {
        id: 'cl8_ch10_t3_qm2',
        type: 'mcq',
        question: 'Which of these expressions equals (2⁻³)²?',
        options: ['2⁻⁶', '2⁻⁹', '2⁶', '2³'],
        correctAnswer: '2⁻⁶',
        explanation: 'When raising a power to a power, multiply exponents: (2⁻³)² = 2⁻³×² = 2⁻⁶',
        wrongAnswerExplanations: {
            '2⁻⁹': 'You multiplied -3 by 3 instead of 2',
            '2⁶': 'Negative times positive gives negative, not positive',
            '2³': 'You divided instead of multiplying exponents'
        },
        difficulty: 'medium',
        marks: 3,
        recommendedTime: 2
    },
    {
        id: 'cl8_ch10_t3_qm3',
        type: 'mcq',
        question: 'If (3⁻²)³ = 3ⁿ, what is n?',
        options: ['-6', '6', '-9', '9'],
        correctAnswer: '-6',
        explanation: 'When raising a power to a power, multiply exponents: (3⁻²)³ = 3⁻²×³ = 3⁻⁶',
        wrongAnswerExplanations: {
            '6': 'Negative times positive gives negative, not positive',
            '-9': 'You added instead of multiplying exponents',
            '9': 'Neither add nor multiply correctly'
        },
        difficulty: 'medium',
        marks: 3,
        recommendedTime: 2
    },
    {
        id: 'cl8_ch10_t3_qm4',
        type: 'mcq',
        question: 'Simplify: (2⁻¹ × 3⁻²) × (2⁻² × 3⁻¹)',
        options: ['(2⁻³ × 3⁻³)', '(2⁻² × 3⁻²)', '(2³ × 3³)', '(2² × 3²)'],
        correctAnswer: '(2⁻³ × 3⁻³)',
        explanation: 'Group like bases and add their exponents: (2⁻¹⁻² × 3⁻²⁻¹) = (2⁻³ × 3⁻³)',
        wrongAnswerExplanations: {
            '(2⁻² × 3⁻²)': 'You didn`t add all exponents correctly',
            '(2³ × 3³)': 'Adding negative exponents doesn`t give positive',
            '(2² × 3²)': 'Neither signs nor addition correct'
        },
        difficulty: 'medium',
        marks: 3,
        recommendedTime: 2
    },
    {
        id: 'cl8_ch10_t3_qm5',
        type: 'mcq',
        question: 'If 5⁻ᵃ = 1/125, what is the value of a?',
        options: ['3', '2', '-3', '5'],
        correctAnswer: '3',
        explanation: '5⁻ᵃ = 1/125 means 5⁻ᵃ = 5⁻³, so a = 3',
        wrongAnswerExplanations: {
            '2': '5⁻² would give 1/25, not 1/125',
            '-3': 'This would give 125, not 1/125',
            '5': '5⁻⁵ would give 1/3125, not 1/125'
        },
        difficulty: 'medium',
        marks: 3,
        recommendedTime: 2
    },
    {
        id: 'cl8_ch10_t3_qm6',
        type: 'mcq',
        question: 'Simplify: (4⁻¹ × 2⁻²) ÷ (2⁻³)',
        options: ['2⁻¹', '2¹', '2⁻³', '2³'],
        correctAnswer: '2⁻¹',
        explanation: '4⁻¹ = (2²)⁻¹ = 2⁻², then (2⁻² × 2⁻²) ÷ 2⁻³ = 2⁻⁴⁺³ = 2⁻¹',
        wrongAnswerExplanations: {
            '2¹': 'Division by negative exponent doesn`t give positive',
            '2⁻³': 'You didn`t convert 4⁻¹ to 2⁻²',
            '2³': 'Neither conversion nor operations correct'
        },
        difficulty: 'medium',
        marks: 3,
        recommendedTime: 2
    },
    {
        id: 'cl8_ch10_t3_qm7',
        type: 'mcq',
        question: 'If (2⁻ᵃ)³ = 2⁻⁶, what is a?',
        options: ['2', '3', '-2', '6'],
        correctAnswer: '2',
        explanation: '(2⁻ᵃ)³ = 2⁻³ᵃ = 2⁻⁶, so -3a = -6, therefore a = 2',
        wrongAnswerExplanations: {
            '3': 'This would give 2⁻⁹, not 2⁻⁶',
            '-2': 'This would give 2⁶, not 2⁻⁶',
            '6': 'This would give 2⁻¹⁸, not 2⁻⁶'
        },
        difficulty: 'medium',
        marks: 3,
        recommendedTime: 2
    },
    {
        id: 'cl8_ch10_t3_qm8',
        type: 'mcq',
        question: 'Simplify: (3⁻² × 2⁻¹) × (3⁻¹ × 2⁻²)',
        options: ['6⁻³', '(3⁻³ × 2⁻³)', '6³', '(3³ × 2³)'],
        correctAnswer: '(3⁻³ × 2⁻³)',
        explanation: 'Group like bases and add exponents: (3⁻²⁻¹ × 2⁻¹⁻²) = (3⁻³ × 2⁻³)',
        wrongAnswerExplanations: {
            '6⁻³': 'You can`t combine different bases',
            '6³': 'Neither combining bases nor signs correct',
            '(3³ × 2³)': 'Adding negative exponents doesn`t give positive'
        },
        difficulty: 'medium',
        marks: 3,
        recommendedTime: 2
    },
    {
        id: 'cl8_ch10_t3_qm9',
        type: 'mcq',
        question: 'If 10⁻ᵃ = 0.001, what is a?',
        options: ['3', '2', '-3', '0.001'],
        correctAnswer: '3',
        explanation: '10⁻ᵃ = 0.001 = 1/1000 = 10⁻³, so a = 3',
        wrongAnswerExplanations: {
            '2': '10⁻² would be 0.01, not 0.001',
            '-3': 'This would give 1000, not 0.001',
            '0.001': 'This is the result, not the exponent'
        },
        difficulty: 'medium',
        marks: 3,
        recommendedTime: 2
    },
    {
        id: 'cl8_ch10_t3_qm10',
        type: 'mcq',
        question: 'Simplify: (2⁻³ × 3⁻²) ÷ (2⁻¹ × 3⁻¹)',
        options: ['2⁻² × 3⁻¹', '2² × 3¹', '2⁻⁴ × 3⁻³', '2⁴ × 3³'],
        correctAnswer: '2⁻² × 3⁻¹',
        explanation: 'When dividing, subtract exponents: 2⁻³⁺¹ × 3⁻²⁺¹ = 2⁻² × 3⁻¹',
        wrongAnswerExplanations: {
            '2² × 3¹': 'Division with negative exponents doesn`t give positive',
            '2⁻⁴ × 3⁻³': 'You added instead of subtracting exponents',
            '2⁴ × 3³': 'Neither signs nor operations correct'
        },
        difficulty: 'medium',
        marks: 3,
        recommendedTime: 2
    },
    {
        id: 'cl8_ch10_t3_qm11',
        type: 'mcq',
        question: 'If (3⁻ᵃ)² = 3⁻⁸, what is a?',
        options: ['4', '2', '8', '-4'],
        correctAnswer: '4',
        explanation: '(3⁻ᵃ)² = 3⁻²ᵃ = 3⁻⁸, so -2a = -8, therefore a = 4',
        wrongAnswerExplanations: {
            '2': 'This would give 3⁻⁴, not 3⁻⁸',
            '8': 'This would give 3⁻¹⁶, not 3⁻⁸',
            '-4': 'This would give 3⁸, not 3⁻⁸'
        },
        difficulty: 'medium',
        marks: 3,
        recommendedTime: 2
    },
    {
        id: 'cl8_ch10_t3_qm12',
        type: 'mcq',
        question: 'Simplify: (5⁻¹)³ × (5⁻²)²',
        options: ['5⁻⁷', '5⁻⁵', '5⁷', '5⁵'],
        correctAnswer: '5⁻⁷',
        explanation: '(5⁻¹)³ = 5⁻³ and (5⁻²)² = 5⁻⁴, then 5⁻³ × 5⁻⁴ = 5⁻⁷',
        wrongAnswerExplanations: {
            '5⁻⁵': 'You didn`t calculate one of the powers correctly',
            '5⁷': 'Multiplying negative exponents doesn`t give positive',
            '5⁵': 'Neither signs nor calculations correct'
        },
        difficulty: 'medium',
        marks: 3,
        recommendedTime: 2
    },
    {
        id: 'cl8_ch10_t3_qm13',
        type: 'mcq',
        question: 'If 2⁻ᵃ × 2⁻⁴ = 2⁻¹⁰, what is a?',
        options: ['6', '4', '-6', '10'],
        correctAnswer: '6',
        explanation: '2⁻ᵃ × 2⁻⁴ = 2⁻ᵃ⁻⁴ = 2⁻¹⁰, so -a - 4 = -10, therefore a = 6',
        wrongAnswerExplanations: {
            '4': 'This would give 2⁻⁸, not 2⁻¹⁰',
            '-6': 'This would give 2², not 2⁻¹⁰',
            '10': 'This would give 2⁻¹⁴, not 2⁻¹⁰'
        },
        difficulty: 'medium',
        marks: 3,
        recommendedTime: 2
    },
    {
        id: 'cl8_ch10_t3_qm14',
        type: 'mcq',
        question: 'Simplify: (4⁻²)² ÷ (2⁻³)²',
        options: ['2⁻⁵', '2⁵', '2⁻²', '2²'],
        correctAnswer: '2⁻⁵',
        explanation: '4⁻² = (2²)⁻² = 2⁻⁴, then (2⁻⁴)² ÷ (2⁻³)² = 2⁻⁸ ÷ 2⁻⁶ = 2⁻⁵',
        wrongAnswerExplanations: {
            '2⁵': 'Division with negative exponents doesn`t give positive',
            '2⁻²': 'You didn`t convert 4⁻² correctly',
            '2²': 'Neither conversion nor operations correct'
        },
        difficulty: 'medium',
        marks: 3,
        recommendedTime: 2
    },
    {
        id: 'cl8_ch10_t3_qm15',
        type: 'mcq',
        question: 'If 3⁻ᵃ = 1/27, what is the value of (3⁻ᵃ)²?',
        options: ['1/729', '1/81', '729', '81'],
        correctAnswer: '1/729',
        explanation: 'If 3⁻ᵃ = 1/27, then a = 3. So (3⁻³)² = 3⁻⁶ = 1/729',
        wrongAnswerExplanations: {
            '1/81': 'You squared 1/27 incorrectly',
            '729': 'Squaring a fraction less than 1 makes it smaller',
            '81': 'Neither operation nor concept correct'
        },
        difficulty: 'medium',
        marks: 3,
        recommendedTime: 2
    },
    {
        id: 'cl8_ch10_t3_qm16',
        type: 'mcq',
        question: 'Simplify: (2⁻³ × 3⁻²) × (2³ × 3²)',
        options: ['1', '6', '1/6', '36'],
        correctAnswer: '1',
        explanation: 'Like bases multiply: 2⁻³⁺³ × 3⁻²⁺² = 2⁰ × 3⁰ = 1 × 1 = 1',
        wrongAnswerExplanations: {
            '6': 'Positive and negative exponents cancel to zero',
            '1/6': 'The exponents cancel completely',
            '36': 'The exponents cancel to give 1, not 36'
        },
        difficulty: 'medium',
        marks: 3,
        recommendedTime: 2
    },
    {
        id: 'cl8_ch10_t3_qm17',
        type: 'mcq',
        question: 'If 5⁻ᵃ × 5⁻³ = 5⁻⁸, what is a?',
        options: ['5', '3', '8', '-5'],
        correctAnswer: '5',
        explanation: '5⁻ᵃ × 5⁻³ = 5⁻ᵃ⁻³ = 5⁻⁸, so -a - 3 = -8, therefore a = 5',
        wrongAnswerExplanations: {
            '3': 'This would give 5⁻⁶, not 5⁻⁸',
            '8': 'This would give 5⁻¹¹, not 5⁻⁸',
            '-5': 'This would give 5², not 5⁻⁸'
        },
        difficulty: 'medium',
        marks: 3,
        recommendedTime: 2
    },
    {
        id: 'cl8_ch10_t3_qm18',
        type: 'mcq',
        question: 'Simplify: (2⁻² × 3⁻¹)³',
        options: ['2⁻⁶ × 3⁻³', '2⁶ × 3³', '2⁻⁴ × 3⁻²', '2⁴ × 3²'],
        correctAnswer: '2⁻⁶ × 3⁻³',
        explanation: 'Distribute the power: (2⁻²)³ × (3⁻¹)³ = 2⁻⁶ × 3⁻³',
        wrongAnswerExplanations: {
            '2⁶ × 3³': 'Negative exponents remain negative when raised to a power',
            '2⁻⁴ × 3⁻²': 'You multiplied exponents by 2 instead of 3',
            '2⁴ × 3²': 'Neither signs nor calculations correct'
        },
        difficulty: 'medium',
        marks: 3,
        recommendedTime: 2
    },
    {
        id: 'cl8_ch10_t3_qm19',
        type: 'mcq',
        question: 'If (2⁻³ × 3⁻²)ᵃ = 2⁻⁶ × 3⁻⁴, what is a?',
        options: ['2', '3', '4', '6'],
        correctAnswer: '2',
        explanation: '(2⁻³)ᵃ × (3⁻²)ᵃ = 2⁻³ᵃ × 3⁻²ᵃ = 2⁻⁶ × 3⁻⁴, so a = 2',
        wrongAnswerExplanations: {
            '3': 'This would give 2⁻⁹ × 3⁻⁶',
            '4': 'This would give 2⁻¹² × 3⁻⁸',
            '6': 'This would give 2⁻¹⁸ × 3⁻¹²'
        },
        difficulty: 'medium',
        marks: 3,
        recommendedTime: 2
    },
    {
        id: 'cl8_ch10_t3_qm20',
        type: 'mcq',
        question: 'Simplify: (4⁻¹ × 9⁻¹) × (2⁻² × 3⁻²)',
        options: ['2⁻⁴ × 3⁻⁴', '2⁴ × 3⁴', '2⁻² × 3⁻²', '2² × 3²'],
        correctAnswer: '2⁻⁴ × 3⁻⁴',
        explanation: '4⁻¹ = 2⁻², 9⁻¹ = 3⁻², then (2⁻² × 3⁻²) × (2⁻² × 3⁻²) = 2⁻⁴ × 3⁻⁴',
        wrongAnswerExplanations: {
            '2⁴ × 3⁴': 'Negative exponents remain negative when multiplying',
            '2⁻² × 3⁻²': 'You didn`t add all the exponents',
            '2² × 3²': 'Neither signs nor calculations correct'
        },
        difficulty: 'medium',
        marks: 3,
        recommendedTime: 2
    }
]; 