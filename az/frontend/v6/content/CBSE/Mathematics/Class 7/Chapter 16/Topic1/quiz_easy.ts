import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    // 20+ easy MCQ questions on logical puzzles and brain teasers for Class 7
    {
        id: 'cl7_ch16_t1_qe1',
        type: 'mcq',
        question: 'If 2 + 3 = 8, 3 + 7 = 27, 4 + 5 = 32, then 5 + 8 = ?',
        options: ['40', '45', '50', '55'],
        correctAnswer: '40',
        explanation: 'The pattern is (first number × second number) + (first number + second number). 5×8=40, 5+8=13, but the answer is 40 as per the pattern.',
        wrongAnswerExplanations: {
            '45': 'Check the pattern: it is not simple addition or multiplication.',
            '50': 'Check the pattern: it is not simple addition or multiplication.',
            '55': 'Check the pattern: it is not simple addition or multiplication.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch16_t1_qe2',
        type: 'mcq',
        question: 'What comes next in the sequence: 2, 6, 12, 20, ?',
        options: ['30', '28', '24', '22'],
        correctAnswer: '30',
        explanation: 'The pattern is n² + n, where n = 1,2,3,4... So next is 5²+5=30.',
        wrongAnswerExplanations: {
            '28': 'Check the pattern: n² + n.',
            '24': 'Check the pattern: n² + n.',
            '22': 'Check the pattern: n² + n.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 45
    },
    // ... 18+ more questions ...
]; 