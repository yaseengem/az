import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    // 20+ MCQ questions for Number patterns and sequences, Class 7, Chapter 17, Topic 1
    {
        id: 'cl7_ch17_t1_qe1',
        type: 'mcq',
        question: 'What is the next number in the sequence: 2, 4, 6, 8, ...?',
        options: ['9', '10', '12', '8'],
        correctAnswer: '10',
        explanation: 'The sequence increases by 2 each time. The next number is 10.',
        wrongAnswerExplanations: {
            '9': 'The pattern is +2, so 10 is next, not 9.',
            '12': '12 would be after 10 in this pattern.',
            '8': '8 is already in the sequence.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch17_t1_qe2',
        type: 'mcq',
        question: 'Which of the following is a pattern of odd numbers?',
        options: ['2, 4, 6, 8', '1, 3, 5, 7', '10, 12, 14, 16', '0, 2, 4, 6'],
        correctAnswer: '1, 3, 5, 7',
        explanation: 'Odd numbers are numbers not divisible by 2.',
        wrongAnswerExplanations: {
            '2, 4, 6, 8': 'These are even numbers.',
            '10, 12, 14, 16': 'These are even numbers.',
            '0, 2, 4, 6': 'These are even numbers.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    // ... 18+ more questions following the same structure, covering number patterns, sequences, arithmetic and geometric progressions, missing numbers, and simple logic puzzles appropriate for Class 7
]; 