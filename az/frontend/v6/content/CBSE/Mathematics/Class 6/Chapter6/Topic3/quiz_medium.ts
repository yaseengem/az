import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl6_ch6_t3_m1',
        type: 'mcq',
        question: 'What is the result of -6 × 4 ÷ (-2)?',
        options: ['-12', '12', '-3', '3'],
        correctAnswer: '12',
        explanation: 'First, -6 × 4 = -24. Then, -24 ÷ (-2) = 12.',
        wrongAnswerExplanations: {
            '-12': 'This would be the result if you divided -24 by 2.',
            '-3': 'This would be the result if you divided -6 by 2.',
            '3': 'This would be the result if you divided 6 by 2.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch6_t3_m2',
        type: 'mcq',
        question: 'If a submarine descends 10 meters every minute for 5 minutes, what is its total change in depth?',
        options: ['-50 meters', '50 meters', '-15 meters', '15 meters'],
        correctAnswer: '-50 meters',
        explanation: 'A descent is represented by a negative number. -10 meters × 5 minutes = -50 meters.',
        wrongAnswerExplanations: {
            '50 meters': 'This would be the result if you multiplied the absolute values.',
            '-15 meters': 'This would be the result if you added the numbers.',
            '15 meters': 'This would be the result if you subtracted the numbers.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch6_t3_m3',
        type: 'mcq',
        question: 'What is the result of -15 ÷ 3 × (-2)?',
        options: ['-10', '10', '-5', '5'],
        correctAnswer: '10',
        explanation: 'First, -15 ÷ 3 = -5. Then, -5 × (-2) = 10.',
        wrongAnswerExplanations: {
            '-10': 'This would be the result if you multiplied -5 by 2.',
            '-5': 'This would be the result if you only did the first operation.',
            '5': 'This would be the result if you divided 15 by 3.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch6_t3_m4',
        type: 'mcq',
        question: 'If the temperature drops by 3°C every hour for 4 hours, what is the total temperature change?',
        options: ['-12°C', '12°C', '-7°C', '7°C'],
        correctAnswer: '-12°C',
        explanation: 'A drop in temperature is represented by a negative number. -3°C × 4 hours = -12°C.',
        wrongAnswerExplanations: {
            '12°C': 'This would be the result if you multiplied the absolute values.',
            '-7°C': 'This would be the result if you added the numbers.',
            '7°C': 'This would be the result if you subtracted the numbers.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch6_t3_m5',
        type: 'mcq',
        question: 'What is the result of -8 × (-2) ÷ 4?',
        options: ['-4', '4', '-16', '16'],
        correctAnswer: '4',
        explanation: 'First, -8 × (-2) = 16. Then, 16 ÷ 4 = 4.',
        wrongAnswerExplanations: {
            '-4': 'This would be the result if you divided -16 by 4.',
            '-16': 'This would be the result if you only did the first operation.',
            '16': 'This would be the result if you only did the first operation.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    }
]; 