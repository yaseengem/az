import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl7_ch17_t3_qe1',
        type: 'mcq',
        question: 'Which of the following is a palindrome number?',
        options: ['123', '121', '231', '312'],
        correctAnswer: '121',
        explanation: 'A palindrome number reads the same forwards and backwards, like 121.',
        wrongAnswerExplanations: {
            '123': '123 reversed is 321, not a palindrome.',
            '231': '231 reversed is 132, not a palindrome.',
            '312': '312 reversed is 213, not a palindrome.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch17_t3_qe2',
        type: 'mcq',
        question: 'What is the next number in the pattern: 2, 4, 8, 16, ...?',
        options: ['18', '20', '24', '32'],
        correctAnswer: '32',
        explanation: 'Each number is multiplied by 2. 16 × 2 = 32.',
        wrongAnswerExplanations: {
            '18': 'The pattern is doubling, not adding.',
            '20': 'The pattern is doubling, not adding.',
            '24': 'The pattern is doubling, not adding.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch17_t3_qe3',
        type: 'mcq',
        question: 'Which number is missing in the sequence: 5, 10, __, 20, 25?',
        options: ['12', '13', '15', '18'],
        correctAnswer: '15',
        explanation: 'The sequence increases by 5 each time. 10 + 5 = 15.',
        wrongAnswerExplanations: {
            '12': 'The pattern is adding 5, not 2.',
            '13': 'The pattern is adding 5, not 3.',
            '18': 'The pattern is adding 5, not 8.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch17_t3_qe4',
        type: 'mcq',
        question: 'If you reverse the digits of 73, what number do you get?',
        options: ['37', '74', '27', '57'],
        correctAnswer: '37',
        explanation: 'Reversing 73 gives 37.',
        wrongAnswerExplanations: {
            '74': '74 is not the reverse of 73.',
            '27': '27 is not the reverse of 73.',
            '57': '57 is not the reverse of 73.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch17_t3_qe5',
        type: 'mcq',
        question: 'What is the sum of the first five odd numbers?',
        options: ['15', '25', '9', '13'],
        correctAnswer: '25',
        explanation: '1 + 3 + 5 + 7 + 9 = 25.',
        wrongAnswerExplanations: {
            '15': 'That is the sum of the first five natural numbers.',
            '9': 'That is the sum of the first two odd numbers.',
            '13': 'That is the sum of the first three odd numbers.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch17_t3_qe6',
        type: 'mcq',
        question: 'Which of the following is a perfect square?',
        options: ['18', '25', '30', '20'],
        correctAnswer: '25',
        explanation: '25 = 5 × 5, so it is a perfect square.',
        wrongAnswerExplanations: {
            '18': '18 is not a perfect square.',
            '30': '30 is not a perfect square.',
            '20': '20 is not a perfect square.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch17_t3_qe7',
        type: 'mcq',
        question: 'What is the value of 7 × 6?',
        options: ['36', '42', '48', '56'],
        correctAnswer: '42',
        explanation: '7 × 6 = 42.',
        wrongAnswerExplanations: {
            '36': '7 × 6 is not 36.',
            '48': '7 × 6 is not 48.',
            '56': '7 × 6 is not 56.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch17_t3_qe8',
        type: 'mcq',
        question: 'Which number is both a square and a cube?',
        options: ['8', '16', '64', '36'],
        correctAnswer: '64',
        explanation: '64 = 8 × 8 and 4 × 4 × 4 = 64.',
        wrongAnswerExplanations: {
            '8': '8 is a cube but not a square.',
            '16': '16 is a square but not a cube.',
            '36': '36 is a square but not a cube.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch17_t3_qe9',
        type: 'mcq',
        question: 'What is the next number in the pattern: 1, 4, 9, 16, ...?',
        options: ['20', '25', '30', '36'],
        correctAnswer: '25',
        explanation: 'These are perfect squares: 1², 2², 3², 4², so next is 5² = 25.',
        wrongAnswerExplanations: {
            '20': '20 is not a perfect square.',
            '30': '30 is not a perfect square.',
            '36': '36 is 6², not the next in the sequence.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch17_t3_qe10',
        type: 'mcq',
        question: 'If you add the digits of 1234, what is the sum?',
        options: ['10', '9', '7', '8'],
        correctAnswer: '10',
        explanation: '1 + 2 + 3 + 4 = 10.',
        wrongAnswerExplanations: {
            '9': '1 + 2 + 3 + 4 = 10, not 9.',
            '7': '1 + 2 + 3 + 4 = 10, not 7.',
            '8': '1 + 2 + 3 + 4 = 10, not 8.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch17_t3_qe11',
        type: 'mcq',
        question: 'What is the smallest 2-digit prime number?',
        options: ['10', '11', '13', '17'],
        correctAnswer: '11',
        explanation: '11 is the smallest 2-digit prime number.',
        wrongAnswerExplanations: {
            '10': '10 is not a prime number.',
            '13': '13 is a 2-digit prime, but not the smallest.',
            '17': '17 is a 2-digit prime, but not the smallest.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch17_t3_qe12',
        type: 'mcq',
        question: 'If you multiply any number by 0, the result is?',
        options: ['0', '1', 'The number itself', 'Cannot say'],
        correctAnswer: '0',
        explanation: 'Any number multiplied by 0 is always 0.',
        wrongAnswerExplanations: {
            '1': 'Multiplying by 0 never gives 1.',
            'The number itself': 'Multiplying by 0 does not return the number.',
            'Cannot say': 'The answer is always 0.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch17_t3_qe13',
        type: 'mcq',
        question: 'Which number is a factor of every number?',
        options: ['0', '1', '2', '10'],
        correctAnswer: '1',
        explanation: '1 is a factor of every number.',
        wrongAnswerExplanations: {
            '0': '0 is not a factor of every number.',
            '2': '2 is not a factor of every number.',
            '10': '10 is not a factor of every number.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch17_t3_qe14',
        type: 'mcq',
        question: 'What is the sum of the angles in a triangle?',
        options: ['90°', '180°', '270°', '360°'],
        correctAnswer: '180°',
        explanation: 'The sum of the angles in a triangle is always 180°.',
        wrongAnswerExplanations: {
            '90°': '90° is the sum of a right angle, not a triangle.',
            '270°': '270° is not the sum of a triangle`s angles.',
            '360°': '360° is the sum of angles in a quadrilateral.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch17_t3_qe15',
        type: 'mcq',
        question: 'Which of these numbers is divisible by 9?',
        options: ['27', '32', '45', '54'],
        correctAnswer: '27',
        explanation: '27 ÷ 9 = 3, so 27 is divisible by 9.',
        wrongAnswerExplanations: {
            '32': '32 is not divisible by 9.',
            '45': '45 is divisible by 9, but 27 is the smallest here.',
            '54': '54 is divisible by 9, but 27 is the smallest here.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch17_t3_qe16',
        type: 'mcq',
        question: 'What is the value of π (pi) up to two decimal places?',
        options: ['3.12', '3.14', '3.16', '3.18'],
        correctAnswer: '3.14',
        explanation: 'π ≈ 3.14.',
        wrongAnswerExplanations: {
            '3.12': 'π is not 3.12.',
            '3.16': 'π is not 3.16.',
            '3.18': 'π is not 3.18.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch17_t3_qe17',
        type: 'mcq',
        question: 'Which of the following is an even number?',
        options: ['13', '17', '22', '27'],
        correctAnswer: '22',
        explanation: '22 is divisible by 2, so it is even.',
        wrongAnswerExplanations: {
            '13': '13 is odd.',
            '17': '17 is odd.',
            '27': '27 is odd.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch17_t3_qe18',
        type: 'mcq',
        question: 'If a number is divisible by both 2 and 3, it is also divisible by?',
        options: ['4', '5', '6', '8'],
        correctAnswer: '6',
        explanation: 'A number divisible by 2 and 3 is divisible by 6.',
        wrongAnswerExplanations: {
            '4': 'Not always true for 4.',
            '5': 'Not always true for 5.',
            '8': 'Not always true for 8.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch17_t3_qe19',
        type: 'mcq',
        question: 'What is the difference between the largest and smallest 2-digit numbers?',
        options: ['88', '89', '90', '91'],
        correctAnswer: '89',
        explanation: '99 - 10 = 89.',
        wrongAnswerExplanations: {
            '88': '99 - 11 = 88, but smallest 2-digit is 10.',
            '90': '99 - 9 = 90, but 9 is not 2-digit.',
            '91': '99 - 8 = 91, but 8 is not 2-digit.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch17_t3_qe20',
        type: 'mcq',
        question: 'Which of the following is a triangular number?',
        options: ['6', '8', '10', '12'],
        correctAnswer: '6',
        explanation: '6 is a triangular number (1 + 2 + 3 = 6).',
        wrongAnswerExplanations: {
            '8': '8 is not a triangular number.',
            '10': '10 is not a triangular number.',
            '12': '12 is not a triangular number.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    }
]; 