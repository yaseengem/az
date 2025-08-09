import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl5_ch15_t1_qm1',
        type: 'mcq',
        question: 'If a 3×3 magic square has a magic constant of 24, what is the sum of all numbers in the square?',
        options: [
            '48',
            '72',
            '96',
            '120'
        ],
        correctAnswer: '72',
        explanation: 'The sum of all numbers in a magic square is the magic constant multiplied by the number of rows. 24 × 3 = 72.',
        wrongAnswerExplanations: {
            '48': 'This would be for 2 rows, but a 3×3 square has 3 rows.',
            '96': 'This would be for 4 rows, but a 3×3 square has 3 rows.',
            '120': 'This would be for 5 rows, but a 3×3 square has 3 rows.'
        },
        difficulty: 'medium',
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch15_t1_qm2',
        type: 'mcq',
        question: 'In a magic square using numbers 4-12, what is the magic constant?',
        options: [
            '20',
            '24',
            '28',
            '32'
        ],
        correctAnswer: '24',
        explanation: 'The sum of numbers 4-12 is 72. For a 3×3 square, the magic constant is 72 ÷ 3 = 24.',
        wrongAnswerExplanations: {
            '20': 'This is too small for numbers 4-12.',
            '28': 'This is too large for numbers 4-12.',
            '32': 'This is much too large for numbers 4-12.'
        },
        difficulty: 'medium',
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch15_t1_qm3',
        type: 'mcq',
        question: 'What is the next number in this pattern: 1, 4, 9, 16, ___?',
        options: [
            '20',
            '25',
            '30',
            '36'
        ],
        correctAnswer: '25',
        explanation: 'This is a pattern of square numbers. 1²=1, 2²=4, 3²=9, 4²=16, so the next number is 5²=25.',
        wrongAnswerExplanations: {
            '20': 'This is not a perfect square.',
            '30': 'This is not a perfect square.',
            '36': 'This would be 6², skipping 5².'
        },
        difficulty: 'medium',
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch15_t1_qm4',
        type: 'mcq',
        question: 'If the top-left corner of a magic square is 8, and the magic constant is 15, what is the bottom-right corner?',
        options: [
            '2',
            '4',
            '6',
            '7'
        ],
        correctAnswer: '7',
        explanation: 'In a magic square, opposite corners add up to the magic constant. If top-left is 8, bottom-right must be 15 - 8 = 7.',
        wrongAnswerExplanations: {
            '2': 'This would make the sum 10, not 15.',
            '4': 'This would make the sum 12, not 15.',
            '6': 'This would make the sum 14, not 15.'
        },
        difficulty: 'medium',
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch15_t1_qm5',
        type: 'mcq',
        question: 'What is the next number in this pattern: 2, 3, 5, 8, 12, ___?',
        options: [
            '15',
            '17',
            '20',
            '24'
        ],
        correctAnswer: '17',
        explanation: 'This pattern increases by consecutive numbers: +1, +2, +3, +4, so the next increase should be +5. 12 + 5 = 17.',
        wrongAnswerExplanations: {
            '15': 'This would be increasing by 3, breaking the pattern.',
            '20': 'This would be increasing by 8, breaking the pattern.',
            '24': 'This would be increasing by 12, breaking the pattern.'
        },
        difficulty: 'medium',
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch15_t1_qm6',
        type: 'mcq',
        question: 'In a magic square using numbers 5-13, what number is in the center?',
        options: [
            '7',
            '9',
            '11',
            '13'
        ],
        correctAnswer: '9',
        explanation: 'The center number is always the middle number of the sequence. For numbers 5-13, the middle number is 9.',
        wrongAnswerExplanations: {
            '7': 'This is too small to be the middle number.',
            '11': 'This is too large to be the middle number.',
            '13': 'This is the largest number and cannot be in the center.'
        },
        difficulty: 'medium',
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch15_t1_qm7',
        type: 'mcq',
        question: 'What is the next number in this pattern: 1, 1, 2, 3, 5, 8, ___?',
        options: [
            '10',
            '12',
            '13',
            '15'
        ],
        correctAnswer: '13',
        explanation: 'This is the Fibonacci sequence where each number is the sum of the two preceding ones. 5 + 8 = 13.',
        wrongAnswerExplanations: {
            '10': 'This would not follow the Fibonacci pattern.',
            '12': 'This would not follow the Fibonacci pattern.',
            '15': 'This would not follow the Fibonacci pattern.'
        },
        difficulty: 'medium',
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch15_t1_qm8',
        type: 'mcq',
        question: 'If a magic square has numbers 2, 4, 6, 8, 10, 12, 14, 16, 18, what is the magic constant?',
        options: [
            '20',
            '30',
            '40',
            '50'
        ],
        correctAnswer: '30',
        explanation: 'The sum of all numbers is 90. For a 3×3 square, the magic constant is 90 ÷ 3 = 30.',
        wrongAnswerExplanations: {
            '20': 'This is too small for these numbers.',
            '40': 'This is too large for these numbers.',
            '50': 'This is much too large for these numbers.'
        },
        difficulty: 'medium',
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch15_t1_qm9',
        type: 'mcq',
        question: 'What is the next number in this pattern: 3, 6, 12, 24, ___?',
        options: [
            '36',
            '42',
            '48',
            '96'
        ],
        correctAnswer: '48',
        explanation: 'This pattern doubles each time. 24 × 2 = 48.',
        wrongAnswerExplanations: {
            '36': 'This would be adding 12, not doubling.',
            '42': 'This would be adding 18, not doubling.',
            '96': 'This would be quadrupling, not doubling.'
        },
        difficulty: 'medium',
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch15_t1_qm10',
        type: 'mcq',
        question: 'In a magic square, if the top row is 8, 1, 6, what is the middle number of the middle row?',
        options: [
            '2',
            '5',
            '7',
            '9'
        ],
        correctAnswer: '5',
        explanation: 'In a 3×3 magic square using numbers 1-9, 5 is always in the center.',
        wrongAnswerExplanations: {
            '2': 'This is not the center number for a magic square using numbers 1-9.',
            '7': 'This is not the center number for a magic square using numbers 1-9.',
            '9': 'This is not the center number for a magic square using numbers 1-9.'
        },
        difficulty: 'medium',
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch15_t1_qm11',
        type: 'mcq',
        question: 'What is the next number in this pattern: 1, 3, 6, 10, 15, ___?',
        options: [
            '18',
            '20',
            '21',
            '25'
        ],
        correctAnswer: '21',
        explanation: 'This is a pattern of triangular numbers where each number increases by the next integer. 15 + 6 = 21.',
        wrongAnswerExplanations: {
            '18': 'This would be adding 3, not following the triangular pattern.',
            '20': 'This would be adding 5, not following the triangular pattern.',
            '25': 'This would be adding 10, not following the triangular pattern.'
        },
        difficulty: 'medium',
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch15_t1_qm12',
        type: 'mcq',
        question: 'If a magic square has numbers 3, 5, 7, 9, 11, 13, 15, 17, 19, what is the magic constant?',
        options: [
            '27',
            '33',
            '39',
            '45'
        ],
        correctAnswer: '33',
        explanation: 'The sum of all numbers is 99. For a 3×3 square, the magic constant is 99 ÷ 3 = 33.',
        wrongAnswerExplanations: {
            '27': 'This is too small for these numbers.',
            '39': 'This is too large for these numbers.',
            '45': 'This is much too large for these numbers.'
        },
        difficulty: 'medium',
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch15_t1_qm13',
        type: 'mcq',
        question: 'What is the next number in this pattern: 2, 5, 10, 17, 26, ___?',
        options: [
            '34',
            '37',
            '40',
            '50'
        ],
        correctAnswer: '37',
        explanation: 'This pattern increases by consecutive odd numbers: +3, +5, +7, +9, so the next increase should be +11. 26 + 11 = 37.',
        wrongAnswerExplanations: {
            '34': 'This would be increasing by 8, breaking the pattern.',
            '40': 'This would be increasing by 14, breaking the pattern.',
            '50': 'This would be increasing by 24, breaking the pattern.'
        },
        difficulty: 'medium',
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch15_t1_qm14',
        type: 'mcq',
        question: 'In a magic square using numbers 6-14, what is the sum of the four corner numbers?',
        options: [
            '30',
            '40',
            '50',
            '60'
        ],
        correctAnswer: '40',
        explanation: 'The sum of the four corners in a magic square is twice the magic constant. For numbers 6-14, the magic constant is 30, so 2 × 30 = 60. However, since we are using numbers 6-14, the actual sum of the four largest numbers(11, 12, 13, 14) is 50.',
        wrongAnswerExplanations: {
            '30': 'This is too small for the sum of four numbers from 6-14.',
            '50': 'This would be the sum of the four largest numbers.',
            '60': 'This is too large for the sum of four numbers from 6-14.'
        },
        difficulty: 'medium',
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch15_t1_qm15',
        type: 'mcq',
        question: 'What is the next number in this pattern: 1, 2, 4, 7, 11, 16, ___?',
        options: [
            '20',
            '22',
            '24',
            '26'
        ],
        correctAnswer: '22',
        explanation: 'This pattern increases by consecutive numbers: +1, +2, +3, +4, +5, so the next increase should be +6. 16 + 6 = 22.',
        wrongAnswerExplanations: {
            '20': 'This would be increasing by 4, breaking the pattern.',
            '24': 'This would be increasing by 8, breaking the pattern.',
            '26': 'This would be increasing by 10, breaking the pattern.'
        },
        difficulty: 'medium',
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch15_t1_qm16',
        type: 'mcq',
        question: 'If a magic square has numbers 4, 6, 8, 10, 12, 14, 16, 18, 20, what is the magic constant?',
        options: [
            '24',
            '36',
            '48',
            '60'
        ],
        correctAnswer: '36',
        explanation: 'The sum of all numbers is 108. For a 3×3 square, the magic constant is 108 ÷ 3 = 36.',
        wrongAnswerExplanations: {
            '24': 'This is too small for these numbers.',
            '48': 'This is too large for these numbers.',
            '60': 'This is much too large for these numbers.'
        },
        difficulty: 'medium',
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch15_t1_qm17',
        type: 'mcq',
        question: 'What is the next number in this pattern: 1, 4, 9, 16, 25, 36, ___?',
        options: [
            '42',
            '49',
            '56',
            '64'
        ],
        correctAnswer: '49',
        explanation: 'This is a pattern of square numbers. The next number is 7² = 49.',
        wrongAnswerExplanations: {
            '42': 'This is not a perfect square.',
            '56': 'This is not a perfect square.',
            '64': 'This would be 8², skipping 7².'
        },
        difficulty: 'medium',
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch15_t1_qm18',
        type: 'mcq',
        question: 'In a magic square using numbers 7-15, what is the sum of the middle row?',
        options: [
            '30',
            '33',
            '36',
            '39'
        ],
        correctAnswer: '33',
        explanation: 'For numbers 7-15, the magic constant is 33 (sum of all numbers is 99, divided by 3 rows).',
        wrongAnswerExplanations: {
            '30': 'This is too small for these numbers.',
            '36': 'This is too large for these numbers.',
            '39': 'This is much too large for these numbers.'
        },
        difficulty: 'medium',
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch15_t1_qm19',
        type: 'mcq',
        question: 'What is the next number in this pattern: 1, 3, 7, 15, 31, ___?',
        options: [
            '45',
            '55',
            '63',
            '75'
        ],
        correctAnswer: '63',
        explanation: 'This pattern doubles and adds 1 each time. 31 × 2 + 1 = 63.',
        wrongAnswerExplanations: {
            '45': 'This would not follow the pattern of doubling and adding 1.',
            '55': 'This would not follow the pattern of doubling and adding 1.',
            '75': 'This would not follow the pattern of doubling and adding 1.'
        },
        difficulty: 'medium',
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch15_t1_qm20',
        type: 'mcq',
        question: 'If a magic square has numbers 5, 7, 9, 11, 13, 15, 17, 19, 21, what is the magic constant?',
        options: [
            '27',
            '39',
            '45',
            '51'
        ],
        correctAnswer: '39',
        explanation: 'The sum of all numbers is 117. For a 3×3 square, the magic constant is 117 ÷ 3 = 39.',
        wrongAnswerExplanations: {
            '27': 'This is too small for these numbers.',
            '45': 'This is too large for these numbers.',
            '51': 'This is much too large for these numbers.'
        },
        difficulty: 'medium',
        marks: 1,
        recommendedTime: 45
    }
];
