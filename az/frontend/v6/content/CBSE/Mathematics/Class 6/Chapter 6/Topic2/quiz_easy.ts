import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl6_ch6_t2_e1',
        type: 'mcq',
        question: 'What is the result of 5 + (-3)?',
        options: ['8', '2', '-2', '-8'],
        correctAnswer: '2',
        explanation: 'When adding numbers with different signs, subtract the smaller absolute value from the larger one and keep the sign of the number with the larger absolute value. Here, 5 + (-3) = 2.',
        wrongAnswerExplanations: {
            '8': 'This would be the result if both numbers were positive.',
            '-2': 'This would be the result if the signs were reversed.',
            '-8': 'This would be the result if both numbers were negative.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch6_t2_e2',
        type: 'mcq',
        question: 'What is the result of -4 - (-2)?',
        options: ['-6', '-2', '2', '6'],
        correctAnswer: '-2',
        explanation: 'Subtracting a negative number is the same as adding a positive number. So, -4 - (-2) = -4 + 2 = -2.',
        wrongAnswerExplanations: {
            '-6': 'This would be the result if you added the numbers.',
            '2': 'This would be the result if you subtracted 2 from -4.',
            '6': 'This would be the result if you added the absolute values.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch6_t2_e3',
        type: 'mcq',
        question: 'If the temperature is -5°C and it rises by 8°C, what is the new temperature?',
        options: ['-13°C', '-3°C', '3°C', '13°C'],
        correctAnswer: '3°C',
        explanation: 'When adding numbers with different signs, subtract the smaller absolute value from the larger one and keep the sign of the number with the larger absolute value. Here, -5 + 8 = 3.',
        wrongAnswerExplanations: {
            '-13°C': 'This would be the result if you added the absolute values and kept the negative sign.',
            '-3°C': 'This would be the result if you subtracted 8 from 5.',
            '13°C': 'This would be the result if you added the absolute values.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch6_t2_e4',
        type: 'mcq',
        question: 'What is the result of -7 + (-3)?',
        options: ['-10', '-4', '4', '10'],
        correctAnswer: '-10',
        explanation: 'When adding two negative numbers, add their absolute values and keep the negative sign. Here, -7 + (-3) = -10.',
        wrongAnswerExplanations: {
            '-4': 'This would be the result if you subtracted the numbers.',
            '4': 'This would be the result if you subtracted and took the absolute value.',
            '10': 'This would be the result if you added the absolute values.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch6_t2_e5',
        type: 'mcq',
        question: 'If you have ₹300 in debt and receive ₹200, what is your new balance?',
        options: ['₹500', '₹100', '-₹100', '-₹500'],
        correctAnswer: '-₹100',
        explanation: 'Debt is represented by negative numbers. -300 + 200 = -100, which means you still have ₹100 in debt.',
        wrongAnswerExplanations: {
            '₹500': 'This would be the result if you added the absolute values.',
            '₹100': 'This would be the result if you subtracted and took the absolute value.',
            '-₹500': 'This would be the result if you added the absolute values and kept the negative sign.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    }
]; 