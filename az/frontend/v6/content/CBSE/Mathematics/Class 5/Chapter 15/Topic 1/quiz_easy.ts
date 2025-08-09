import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl5_ch15_t1_qe1',
        type: 'mcq',
        question: 'In a 3×3 magic square using numbers 1-9, what is the magic constant (the sum of each row, column, and diagonal)?',
        options: [
            '12',
            '15',
            '18',
            '21'
        ],
        correctAnswer: '15',
        explanation: 'The magic constant for a 3×3 magic square using numbers 1-9 is 15. This is because the sum of all numbers from 1 to 9 is 45, and there are 3 rows, so 45 ÷ 3 = 15.',
        wrongAnswerExplanations: {
            '12': 'This is too small for a 3×3 magic square using numbers 1-9.',
            '18': 'This is too large for a 3×3 magic square using numbers 1-9.',
            '21': 'This is much too large for a 3×3 magic square using numbers 1-9.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch15_t1_qe2',
        type: 'mcq',
        question: 'What number is always in the center of a 3×3 magic square using numbers 1-9?',
        options: [
            '3',
            '5',
            '7',
            '9'
        ],
        correctAnswer: '5',
        explanation: 'The number 5 is always in the center of a 3×3 magic square using numbers 1-9 because it is the middle number of the sequence.',
        wrongAnswerExplanations: {
            '3': '3 is too small to be the center number.',
            '7': '7 is too large to be the center number.',
            '9': '9 is the largest number and cannot be in the center.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch15_t1_qe3',
        type: 'mcq',
        question: 'In a magic square, what must be true about the sum of numbers in each row?',
        options: [
            'They must be different',
            'They must be the same',
            'They must be odd numbers',
            'They must be even numbers'
        ],
        correctAnswer: 'They must be the same',
        explanation: 'In a magic square, the sum of numbers in each row must be the same. This is one of the defining properties of a magic square.',
        wrongAnswerExplanations: {
            'They must be different': 'This is incorrect. The sums must be equal.',
            'They must be odd numbers': 'The sums can be either odd or even.',
            'They must be even numbers': 'The sums can be either odd or even.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch15_t1_qe4',
        type: 'mcq',
        question: 'What is the next number in this pattern: 2, 4, 6, 8, ___?',
        options: [
            '9',
            '10',
            '11',
            '12'
        ],
        correctAnswer: '10',
        explanation: 'The pattern increases by 2 each time. 8 + 2 = 10.',
        wrongAnswerExplanations: {
            '9': 'This would break the pattern of increasing by 2.',
            '11': 'This would break the pattern of increasing by 2.',
            '12': 'This would be increasing by 4, which breaks the pattern.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch15_t1_qe5',
        type: 'mcq',
        question: 'In a magic square, where are the largest numbers usually placed?',
        options: [
            'In the corners',
            'In the center',
            'In the middle of the sides',
            'Randomly'
        ],
        correctAnswer: 'In the corners',
        explanation: 'In a magic square, the largest numbers are usually placed in the corners to help balance the sums.',
        wrongAnswerExplanations: {
            'In the center': 'The center usually has the middle number.',
            'In the middle of the sides': 'The middle of the sides usually has smaller numbers.',
            'Randomly': 'The placement of numbers in a magic square follows specific rules.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch15_t1_qe6',
        type: 'mcq',
        question: 'What is the next number in this pattern: 5, 10, 15, 20, ___?',
        options: [
            '22',
            '24',
            '25',
            '30'
        ],
        correctAnswer: '25',
        explanation: 'The pattern increases by 5 each time. 20 + 5 = 25.',
        wrongAnswerExplanations: {
            '22': 'This would break the pattern of increasing by 5.',
            '24': 'This would break the pattern of increasing by 5.',
            '30': 'This would be increasing by 10, which breaks the pattern.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch15_t1_qe7',
        type: 'mcq',
        question: 'How many numbers are used in a 3×3 magic square?',
        options: [
            '6',
            '8',
            '9',
            '12'
        ],
        correctAnswer: '9',
        explanation: 'A 3×3 magic square uses 9 numbers (3 rows × 3 columns = 9 cells).',
        wrongAnswerExplanations: {
            '6': 'This is too few numbers for a 3×3 grid.',
            '8': 'This is too few numbers for a 3×3 grid.',
            '12': 'This is too many numbers for a 3×3 grid.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch15_t1_qe8',
        type: 'mcq',
        question: 'What is the next number in this pattern: 1, 3, 5, 7, ___?',
        options: [
            '8',
            '9',
            '10',
            '11'
        ],
        correctAnswer: '9',
        explanation: 'The pattern increases by 2 each time, showing odd numbers. 7 + 2 = 9.',
        wrongAnswerExplanations: {
            '8': 'This would break the pattern of odd numbers.',
            '10': 'This would break the pattern of odd numbers.',
            '11': 'This would be increasing by 4, which breaks the pattern.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch15_t1_qe9',
        type: 'mcq',
        question: 'In a magic square, what must be true about the sum of numbers in each diagonal?',
        options: [
            'They must be different',
            'They must be the same',
            'They must be larger than row sums',
            'They must be smaller than row sums'
        ],
        correctAnswer: 'They must be the same',
        explanation: 'In a magic square, the sum of numbers in each diagonal must be the same as the row and column sums.',
        wrongAnswerExplanations: {
            'They must be different': 'This is incorrect. The sums must be equal.',
            'They must be larger than row sums': 'The diagonal sums must equal the row sums.',
            'They must be smaller than row sums': 'The diagonal sums must equal the row sums.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch15_t1_qe10',
        type: 'mcq',
        question: 'What is the next number in this pattern: 10, 20, 30, 40, ___?',
        options: [
            '45',
            '50',
            '55',
            '60'
        ],
        correctAnswer: '50',
        explanation: 'The pattern increases by 10 each time. 40 + 10 = 50.',
        wrongAnswerExplanations: {
            '45': 'This would break the pattern of increasing by 10.',
            '55': 'This would break the pattern of increasing by 10.',
            '60': 'This would be increasing by 20, which breaks the pattern.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch15_t1_qe11',
        type: 'mcq',
        question: 'What is the smallest number usually placed in a 3×3 magic square using numbers 1-9?',
        options: [
            '1',
            '2',
            '3',
            '4'
        ],
        correctAnswer: '1',
        explanation: 'The smallest number (1) is usually placed in a corner of the magic square.',
        wrongAnswerExplanations: {
            '2': '2 is not the smallest number in the sequence 1-9.',
            '3': '3 is not the smallest number in the sequence 1-9.',
            '4': '4 is not the smallest number in the sequence 1-9.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch15_t1_qe12',
        type: 'mcq',
        question: 'What is the next number in this pattern: 3, 6, 9, 12, ___?',
        options: [
            '14',
            '15',
            '16',
            '18'
        ],
        correctAnswer: '15',
        explanation: 'The pattern increases by 3 each time. 12 + 3 = 15.',
        wrongAnswerExplanations: {
            '14': 'This would break the pattern of increasing by 3.',
            '16': 'This would break the pattern of increasing by 3.',
            '18': 'This would be increasing by 6, which breaks the pattern.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch15_t1_qe13',
        type: 'mcq',
        question: 'In a magic square, what must be true about the sum of numbers in each column?',
        options: [
            'They must be different',
            'They must be the same',
            'They must be odd numbers',
            'They must be even numbers'
        ],
        correctAnswer: 'They must be the same',
        explanation: 'In a magic square, the sum of numbers in each column must be the same as the row sums.',
        wrongAnswerExplanations: {
            'They must be different': 'This is incorrect. The sums must be equal.',
            'They must be odd numbers': 'The sums can be either odd or even.',
            'They must be even numbers': 'The sums can be either odd or even.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch15_t1_qe14',
        type: 'mcq',
        question: 'What is the next number in this pattern: 4, 8, 12, 16, ___?',
        options: [
            '18',
            '20',
            '22',
            '24'
        ],
        correctAnswer: '20',
        explanation: 'The pattern increases by 4 each time. 16 + 4 = 20.',
        wrongAnswerExplanations: {
            '18': 'This would break the pattern of increasing by 4.',
            '22': 'This would break the pattern of increasing by 4.',
            '24': 'This would be increasing by 8, which breaks the pattern.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch15_t1_qe15',
        type: 'mcq',
        question: 'What is the largest number used in a 3×3 magic square with numbers 1-9?',
        options: [
            '7',
            '8',
            '9',
            '10'
        ],
        correctAnswer: '9',
        explanation: 'The largest number used in a 3×3 magic square with numbers 1-9 is 9.',
        wrongAnswerExplanations: {
            '7': '7 is not the largest number in the sequence 1-9.',
            '8': '8 is not the largest number in the sequence 1-9.',
            '10': '10 is not part of the sequence 1-9.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch15_t1_qe16',
        type: 'mcq',
        question: 'What is the next number in this pattern: 7, 14, 21, 28, ___?',
        options: [
            '30',
            '32',
            '35',
            '42'
        ],
        correctAnswer: '35',
        explanation: 'The pattern increases by 7 each time. 28 + 7 = 35.',
        wrongAnswerExplanations: {
            '30': 'This would break the pattern of increasing by 7.',
            '32': 'This would break the pattern of increasing by 7.',
            '42': 'This would be increasing by 14, which breaks the pattern.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch15_t1_qe17',
        type: 'mcq',
        question: 'How many diagonals does a 3×3 magic square have?',
        options: [
            '1',
            '2',
            '3',
            '4'
        ],
        correctAnswer: '2',
        explanation: 'A 3×3 magic square has 2 diagonals: one from top-left to bottom-right, and one from top-right to bottom-left.',
        wrongAnswerExplanations: {
            '1': 'A 3×3 square has 2 diagonals.',
            '3': 'A 3×3 square has 2 diagonals.',
            '4': 'A 3×3 square has 2 diagonals.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch15_t1_qe18',
        type: 'mcq',
        question: 'What is the next number in this pattern: 9, 18, 27, 36, ___?',
        options: [
            '40',
            '45',
            '50',
            '54'
        ],
        correctAnswer: '45',
        explanation: 'The pattern increases by 9 each time. 36 + 9 = 45.',
        wrongAnswerExplanations: {
            '40': 'This would break the pattern of increasing by 9.',
            '50': 'This would break the pattern of increasing by 9.',
            '54': 'This would be increasing by 18, which breaks the pattern.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch15_t1_qe19',
        type: 'mcq',
        question: 'In a magic square, what is the relationship between the numbers in opposite corners?',
        options: [
            'They add up to the magic constant',
            'They are always the same',
            'They are always different',
            'They multiply to the magic constant'
        ],
        correctAnswer: 'They add up to the magic constant',
        explanation: 'In a magic square, the numbers in opposite corners add up to the magic constant.',
        wrongAnswerExplanations: {
            'They are always the same': 'Opposite corner numbers are usually different.',
            'They are always different': 'While they are different, their sum is important.',
            'They multiply to the magic constant': 'It is their sum, not product, that matters.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch15_t1_qe20',
        type: 'mcq',
        question: 'What is the next number in this pattern: 11, 22, 33, 44, ___?',
        options: [
            '50',
            '55',
            '60',
            '66'
        ],
        correctAnswer: '55',
        explanation: 'The pattern increases by 11 each time. 44 + 11 = 55.',
        wrongAnswerExplanations: {
            '50': 'This would break the pattern of increasing by 11.',
            '60': 'This would break the pattern of increasing by 11.',
            '66': 'This would be increasing by 22, which breaks the pattern.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    }
];
