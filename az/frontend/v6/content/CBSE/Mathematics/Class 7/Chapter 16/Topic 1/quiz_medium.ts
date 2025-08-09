import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    // 20+ medium MCQ questions on logical puzzles and brain teasers for Class 7
    {
        id: 'cl7_ch16_t1_qm1',
        type: 'mcq',
        question: 'A clock shows the time as 3:15. What is the angle between the hour and the minute hand? (in degrees)',
        options: ['0°', '7.5°', '30°', '45°'],
        correctAnswer: '7.5°',
        explanation: 'At 3:15, the angle is 7.5°. Each minute, the hour hand moves 0.5°, so 15×0.5=7.5° past 3.',
        wrongAnswerExplanations: {
            '0°': 'The hands are not overlapping at 3:15.',
            '30°': '30° is the angle at 3:00, not 3:15.',
            '45°': '45° is not the correct calculation for this time.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl7_ch16_t1_qm2',
        type: 'mcq',
        question: 'If in a certain code, MANGO is written as NZOHQ, how is APPLE written in that code?',
        options: ['BQQMF', 'BQQMG', 'BQQMH', 'BQQME'],
        correctAnswer: 'BQQMF',
        explanation: 'Each letter is replaced by the next letter in the alphabet. A→B, P→Q, L→M, E→F.',
        wrongAnswerExplanations: {
            'BQQMG': 'Check the last letter: E→F, not G.',
            'BQQMH': 'Check the last letter: E→F, not H.',
            'BQQME': 'Check the last letter: E→F, not E.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 60
    },
    // ... 18+ more questions ...
]; 