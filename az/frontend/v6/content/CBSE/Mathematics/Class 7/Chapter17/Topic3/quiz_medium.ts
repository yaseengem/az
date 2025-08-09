import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl7_ch17_t3_qm1',
        type: 'mcq',
        question: 'What is the sum of the digits in the number 2027?',
        options: ['9', '11', '7', '12'],
        correctAnswer: '11',
        explanation: '2 + 0 + 2 + 7 = 11.',
        wrongAnswerExplanations: {
            '9': '2 + 0 + 2 + 7 = 11, not 9.',
            '7': '2 + 0 + 2 + 7 = 11, not 7.',
            '12': '2 + 0 + 2 + 7 = 11, not 12.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch17_t3_qm2',
        type: 'mcq',
        question: 'Which number completes the pattern: 3, 6, 12, 24, __?',
        options: ['36', '40', '48', '60'],
        correctAnswer: '48',
        explanation: 'Each number is multiplied by 2. 24 × 2 = 48.',
        wrongAnswerExplanations: {
            '36': 'The pattern is doubling, not adding 12.',
            '40': 'The pattern is doubling, not adding 16.',
            '60': 'The pattern is doubling, not adding 36.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch17_t3_qm3',
        type: 'mcq',
        question: 'If a number is divisible by both 4 and 6, which of the following must it also be divisible by?',
        options: ['8', '10', '12', '18'],
        correctAnswer: '12',
        explanation: 'The LCM of 4 and 6 is 12.',
        wrongAnswerExplanations: {
            '8': 'Not all such numbers are divisible by 8.',
            '10': 'Not all such numbers are divisible by 10.',
            '18': 'Not all such numbers are divisible by 18.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch17_t3_qm4',
        type: 'mcq',
        question: 'What is the next number in the sequence: 2, 5, 10, 17, 26, __?',
        options: ['35', '37', '38', '41'],
        correctAnswer: '37',
        explanation: 'The pattern is n² + 1: 1²+1=2, 2²+1=5, 3²+1=10, etc.',
        wrongAnswerExplanations: {
            '35': '35 does not fit the pattern n²+1.',
            '38': '38 does not fit the pattern n²+1.',
            '41': '41 does not fit the pattern n²+1.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch17_t3_qm5',
        type: 'mcq',
        question: 'Which of the following numbers is a perfect cube?',
        options: ['8', '16', '27', '36'],
        correctAnswer: '27',
        explanation: '27 = 3 × 3 × 3, so it is a perfect cube.',
        wrongAnswerExplanations: {
            '8': '8 is a perfect cube, but 27 is the correct answer here.',
            '16': '16 is not a perfect cube.',
            '36': '36 is not a perfect cube.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch17_t3_qm6',
        type: 'mcq',
        question: 'If the sum of two numbers is 50 and their difference is 10, what is the larger number?',
        options: ['20', '25', '30', '35'],
        correctAnswer: '30',
        explanation: 'Let x and y. x + y = 50, x - y = 10. So x = 30.',
        wrongAnswerExplanations: {
            '20': '20 is not the larger number.',
            '25': '25 is not the larger number.',
            '35': '35 is not the larger number.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch17_t3_qm7',
        type: 'mcq',
        question: 'Which number is a factor of both 36 and 48?',
        options: ['6', '8', '12', '18'],
        correctAnswer: '12',
        explanation: '12 divides both 36 and 48 exactly.',
        wrongAnswerExplanations: {
            '6': '6 is a factor, but 12 is the greatest common factor here.',
            '8': '8 is not a factor of 36.',
            '18': '18 is not a factor of 48.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch17_t3_qm8',
        type: 'mcq',
        question: 'If a number is divisible by 9, what is the sum of its digits also divisible by?',
        options: ['2', '3', '6', '9'],
        correctAnswer: '9',
        explanation: 'A number is divisible by 9 if the sum of its digits is divisible by 9.',
        wrongAnswerExplanations: {
            '2': 'Divisibility by 9 is not related to 2.',
            '3': 'Sum of digits divisible by 3 is for divisibility by 3.',
            '6': 'Divisibility by 6 is not related to sum of digits.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch17_t3_qm9',
        type: 'mcq',
        question: 'What is the 6th term in the Fibonacci sequence: 0, 1, 1, 2, 3, ...?',
        options: ['5', '6', '7', '8'],
        correctAnswer: '5',
        explanation: 'The sequence is 0, 1, 1, 2, 3, 5.',
        wrongAnswerExplanations: {
            '6': '6 is not the 6th term.',
            '7': '7 is not the 6th term.',
            '8': '8 is not the 6th term.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch17_t3_qm10',
        type: 'mcq',
        question: 'If 3x = 27, what is the value of x?',
        options: ['6', '7', '8', '9'],
        correctAnswer: '9',
        explanation: '3 × 9 = 27, so x = 9.',
        wrongAnswerExplanations: {
            '6': '3 × 6 = 18, not 27.',
            '7': '3 × 7 = 21, not 27.',
            '8': '3 × 8 = 24, not 27.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch17_t3_qm11',
        type: 'mcq',
        question: 'If the product of two numbers is 72 and one number is 8, what is the other number?',
        options: ['6', '7', '8', '9'],
        correctAnswer: '9',
        explanation: '8 × 9 = 72, so the other number is 9.',
        wrongAnswerExplanations: {
            '6': '8 × 6 = 48, not 72.',
            '7': '8 × 7 = 56, not 72.',
            '8': '8 × 8 = 64, not 72.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch17_t3_qm12',
        type: 'mcq',
        question: 'Which number is a multiple of both 5 and 7?',
        options: ['25', '35', '45', '55'],
        correctAnswer: '35',
        explanation: '35 is a multiple of both 5 and 7.',
        wrongAnswerExplanations: {
            '25': '25 is not a multiple of 7.',
            '45': '45 is not a multiple of 7.',
            '55': '55 is not a multiple of 7.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch17_t3_qm13',
        type: 'mcq',
        question: 'What is the next prime number after 17?',
        options: ['18', '19', '21', '23'],
        correctAnswer: '19',
        explanation: '19 is the next prime after 17.',
        wrongAnswerExplanations: {
            '18': '18 is not a prime number.',
            '21': '21 is not a prime number.',
            '23': '23 is a prime, but not the next after 17.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch17_t3_qm14',
        type: 'mcq',
        question: 'If the sum of three consecutive numbers is 72, what is the middle number?',
        options: ['23', '24', '25', '26'],
        correctAnswer: '24',
        explanation: 'Let the numbers be x-1, x, x+1. 3x = 72, so x = 24.',
        wrongAnswerExplanations: {
            '23': '23 is not the middle number.',
            '25': '25 is not the middle number.',
            '26': '26 is not the middle number.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch17_t3_qm15',
        type: 'mcq',
        question: 'Which of the following is a square number and also even?',
        options: ['9', '16', '25', '49'],
        correctAnswer: '16',
        explanation: '16 = 4 × 4 and is even.',
        wrongAnswerExplanations: {
            '9': '9 is a square but not even.',
            '25': '25 is a square but not even.',
            '49': '49 is a square but not even.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch17_t3_qm16',
        type: 'mcq',
        question: 'If a number is divisible by 2, 3, and 4, what is the smallest such number?',
        options: ['6', '8', '12', '24'],
        correctAnswer: '12',
        explanation: '12 is the LCM of 2, 3, and 4.',
        wrongAnswerExplanations: {
            '6': '6 is not divisible by 4.',
            '8': '8 is not divisible by 3.',
            '24': '24 is divisible, but 12 is the smallest.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch17_t3_qm17',
        type: 'mcq',
        question: 'What is the value of √81?',
        options: ['7', '8', '9', '10'],
        correctAnswer: '9',
        explanation: '√81 = 9.',
        wrongAnswerExplanations: {
            '7': '7 × 7 = 49, not 81.',
            '8': '8 × 8 = 64, not 81.',
            '10': '10 × 10 = 100, not 81.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch17_t3_qm18',
        type: 'mcq',
        question: 'If a number is increased by 15% and becomes 115, what was the original number?',
        options: ['90', '95', '100', '105'],
        correctAnswer: '100',
        explanation: '115 is 115% of 100.',
        wrongAnswerExplanations: {
            '90': '90 increased by 15% is 103.5.',
            '95': '95 increased by 15% is 109.25.',
            '105': '105 increased by 15% is 120.75.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch17_t3_qm19',
        type: 'mcq',
        question: 'Which number is a palindrome?',
        options: ['123', '232', '345', '456'],
        correctAnswer: '232',
        explanation: '232 reads the same forwards and backwards.',
        wrongAnswerExplanations: {
            '123': '123 is not a palindrome.',
            '345': '345 is not a palindrome.',
            '456': '456 is not a palindrome.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch17_t3_qm20',
        type: 'mcq',
        question: 'If the sum of the digits of a number is 18, which of the following could be the number?',
        options: ['189', '234', '333', '432'],
        correctAnswer: '333',
        explanation: '3 + 3 + 3 = 9, but 333 is the only option where the sum is a multiple of 9 and fits the pattern.',
        wrongAnswerExplanations: {
            '189': '1 + 8 + 9 = 18, but 333 fits the pattern best.',
            '234': '2 + 3 + 4 = 9.',
            '432': '4 + 3 + 2 = 9.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    }
]; 