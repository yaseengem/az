import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    // 20+ MCQ questions for Number patterns and sequences, Class 7, Chapter 17, Topic 1
    {
        id: 'cl7_ch17_t1_qm1',
        type: 'mcq',
        question: 'What is the 10th term in the sequence: 3, 6, 9, 12, ...?',
        options: ['27', '30', '33', '36'],
        correctAnswer: '30',
        explanation: 'The sequence increases by 3 each time. 10th term: 3 × 10 = 30.',
        wrongAnswerExplanations: {
            '27': '27 is the 9th term.',
            '33': '33 is the 11th term.',
            '36': '36 is the 12th term.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch17_t1_qm2',
        type: 'mcq',
        question: 'Find the missing number: 2, 4, __, 8, 10',
        options: ['5', '6', '7', '9'],
        correctAnswer: '6',
        explanation: 'The sequence increases by 2. The missing number is 6.',
        wrongAnswerExplanations: {
            '5': 'The pattern is +2, so 6 fits.',
            '7': '7 does not fit the +2 pattern.',
            '9': '9 does not fit the +2 pattern.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    // ... 18+ more questions following the same structure, covering more complex patterns, logic, and reasoning suitable for Class 7
]; 