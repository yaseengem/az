import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl6_ch6_t3_e1',
        type: 'mcq',
        question: 'What is the result of 4 × (-3)?',
        options: ['12', '-12', '7', '-7'],
        correctAnswer: '-12',
        explanation: 'When multiplying numbers with different signs, the product is negative. 4 × (-3) = -12.',
        wrongAnswerExplanations: {
            '12': 'This would be the result if both numbers were positive.',
            '7': 'This would be the result if you added the numbers.',
            '-7': 'This would be the result if you subtracted the numbers.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch6_t3_e2',
        type: 'mcq',
        question: 'What is the result of -12 ÷ (-4)?',
        options: ['-3', '3', '-8', '8'],
        correctAnswer: '3',
        explanation: 'When dividing two negative numbers, the quotient is positive. -12 ÷ (-4) = 3.',
        wrongAnswerExplanations: {
            '-3': 'This would be the result if you divided 12 by -4.',
            '-8': 'This would be the result if you subtracted the numbers.',
            '8': 'This would be the result if you divided 12 by 4.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch6_t3_e3',
        type: 'mcq',
        question: 'If the temperature drops by 2°C every hour for 3 hours, what is the total temperature change?',
        options: ['-6°C', '6°C', '-5°C', '5°C'],
        correctAnswer: '-6°C',
        explanation: 'A drop in temperature is represented by a negative number. -2°C × 3 hours = -6°C.',
        wrongAnswerExplanations: {
            '6°C': 'This would be the result if you multiplied the absolute values.',
            '-5°C': 'This would be the result if you added the numbers.',
            '5°C': 'This would be the result if you subtracted the numbers.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch6_t3_e4',
        type: 'mcq',
        question: 'What is the result of -5 × (-2)?',
        options: ['-10', '-7', '7', '10'],
        correctAnswer: '10',
        explanation: 'When multiplying two negative numbers, the product is positive. -5 × (-2) = 10.',
        wrongAnswerExplanations: {
            '-10': 'This would be the result if you multiplied the absolute values and kept the negative sign.',
            '-7': 'This would be the result if you added the numbers.',
            '7': 'This would be the result if you subtracted the numbers.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch6_t3_e5',
        type: 'mcq',
        question: 'If you withdraw ₹200 every day for 5 days, what is your total withdrawal?',
        options: ['₹1000', '-₹1000', '₹200', '-₹200'],
        correctAnswer: '-₹1000',
        explanation: 'Withdrawals are represented by negative numbers. -₹200 × 5 days = -₹1000.',
        wrongAnswerExplanations: {
            '₹1000': 'This would be the result if you multiplied the absolute values.',
            '₹200': 'This would be the result if you only considered one day.',
            '-₹200': 'This would be the result if you only considered one day.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    }
]; 