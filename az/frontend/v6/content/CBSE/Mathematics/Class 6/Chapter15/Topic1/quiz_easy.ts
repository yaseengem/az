import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl6_ch15_t1_e1',
        type: 'mcq',
        question: 'What is the magic sum in a 3×3 magic square using numbers 1-9?',
        options: ['12', '15', '18', '21'],
        correctAnswer: '15',
        explanation: 'The magic sum is 15 because the sum of all numbers from 1 to 9 is 45, and there are 3 rows/columns, so 45 ÷ 3 = 15.',
        wrongAnswerExplanations: {
            '12': 'This is too low for the magic sum.',
            '18': 'This is too high for the magic sum.',
            '21': 'This is much too high for the magic sum.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch15_t1_e2',
        type: 'mcq',
        question: 'In a magic square, what is the sum of numbers in each row, column, and diagonal?',
        options: ['Same', 'Different', 'Increasing', 'Decreasing'],
        correctAnswer: 'Same',
        explanation: 'In a magic square, the sum of numbers in each row, column, and diagonal must be the same.',
        wrongAnswerExplanations: {
            'Different': 'The sums must be the same in a magic square.',
            'Increasing': 'The sums must be the same in a magic square.',
            'Decreasing': 'The sums must be the same in a magic square.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    }
]; 