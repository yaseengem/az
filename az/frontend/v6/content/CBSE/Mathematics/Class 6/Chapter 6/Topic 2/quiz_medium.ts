import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl6_ch6_t2_m1',
        type: 'mcq',
        question: 'What is the result of -12 - (-5) + 3?',
        options: ['-20', '-4', '-10', '4'],
        correctAnswer: '-4',
        explanation: 'First, -12 - (-5) = -12 + 5 = -7. Then, -7 + 3 = -4.',
        wrongAnswerExplanations: {
            '-20': 'This would be the result if you added all the absolute values and kept the negative sign.',
            '-10': 'This would be the result if you added -12 and -5, then added 3.',
            '4': 'This would be the result if you subtracted 5 from 12 and added 3.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch6_t2_m2',
        type: 'mcq',
        question: 'A submarine is at -200 meters and rises 150 meters, then descends 100 meters. What is its final position?',
        options: ['-450 meters', '-150 meters', '-50 meters', '50 meters'],
        correctAnswer: '-150 meters',
        explanation: 'Starting at -200, rising 150 meters: -200 + 150 = -50. Then descending 100 meters: -50 - 100 = -150 meters.',
        wrongAnswerExplanations: {
            '-450 meters': 'This would be the result if you added all the absolute values and kept the negative sign.',
            '-50 meters': 'This would be the result if you only considered the first movement.',
            '50 meters': 'This would be the result if you subtracted all the movements from 200.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch6_t2_m3',
        type: 'mcq',
        question: 'What is the result of 8 - (-4) - 5 + (-3)?',
        options: ['4', '6', '10', '12'],
        correctAnswer: '4',
        explanation: '8 - (-4) = 12, then 12 - 5 = 7, and finally 7 + (-3) = 4.',
        wrongAnswerExplanations: {
            '6': 'This would be the result if you added 8 and -4, then subtracted 5 and added -3.',
            '10': 'This would be the result if you added 8 and -4, then subtracted 5.',
            '12': 'This would be the result if you only considered the first operation.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch6_t2_m4',
        type: 'mcq',
        question: 'If the temperature was -8°C in the morning, rose by 12°C by noon, and then dropped by 5°C in the evening, what was the evening temperature?',
        options: ['-1°C', '1°C', '-9°C', '9°C'],
        correctAnswer: '-1°C',
        explanation: 'Starting at -8°C, rising 12°C: -8 + 12 = 4°C. Then dropping 5°C: 4 - 5 = -1°C.',
        wrongAnswerExplanations: {
            '1°C': 'This would be the result if you only considered the first two changes.',
            '-9°C': 'This would be the result if you added all the absolute values and kept the negative sign.',
            '9°C': 'This would be the result if you added all the changes to 8.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch6_t2_m5',
        type: 'mcq',
        question: 'What is the result of -15 + 7 - (-3) + 5?',
        options: ['-20', '-10', '0', '10'],
        correctAnswer: '0',
        explanation: '-15 + 7 = -8, then -8 - (-3) = -5, and finally -5 + 5 = 0.',
        wrongAnswerExplanations: {
            '-20': 'This would be the result if you added all the absolute values and kept the negative sign.',
            '-10': 'This would be the result if you added -15 and 7, then subtracted 3 and added 5.',
            '10': 'This would be the result if you added all the numbers.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    }
]; 