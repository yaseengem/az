import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl5_ch13_t2_qe1',
        type: 'mcq',
        question: 'What does repeated subtraction help you find?',
        options: [
            'The number of times you can subtract one number from another',
            'The sum of two numbers',
            'The product of two numbers',
            'The largest number'
        ],
        correctAnswer: 'The number of times you can subtract one number from another',
        explanation: 'Repeated subtraction shows how many times you can subtract the divisor from the dividend.',
        wrongAnswerExplanations: {
            'The sum of two numbers': 'Repeated subtraction is used for division, not addition.',
            'The product of two numbers': 'Repeated subtraction is used for division, not multiplication.',
            'The largest number': 'Repeated subtraction is used to find how many times one number fits into another.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch13_t2_qe2',
        type: 'mcq',
        question: 'If you divide 18 by 3 using repeated subtraction, how many times do you subtract 3?',
        options: [
            '3',
            '5',
            '6',
            '9'
        ],
        correctAnswer: '6',
        explanation: '18 - 3 = 15 (1), 15 - 3 = 12 (2), 12 - 3 = 9 (3), 9 - 3 = 6 (4), 6 - 3 = 3 (5), 3 - 3 = 0 (6).',
        wrongAnswerExplanations: {
            '3': 'You need to subtract 3 more times to reach 0.',
            '5': 'You need to subtract 3 one more time to reach 0.',
            '9': 'This is too many subtractions.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch13_t2_qe3',
        type: 'mcq',
        question: 'What is the first step in division using repeated subtraction?',
        options: [
            'Subtract the divisor from the dividend',
            'Add the numbers',
            'Multiply the numbers',
            'Find the largest number'
        ],
        correctAnswer: 'Subtract the divisor from the dividend',
        explanation: 'The first step is to subtract the divisor from the dividend to start the repeated subtraction process.',
        wrongAnswerExplanations: {
            'Add the numbers': 'Addition is not part of division by repeated subtraction.',
            'Multiply the numbers': 'Multiplication is not part of division by repeated subtraction.',
            'Find the largest number': 'You need to subtract, not find the largest number.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch13_t2_qe4',
        type: 'mcq',
        question: 'When do you stop subtracting in repeated subtraction?',
        options: [
            'When you reach 0 or a number smaller than the divisor',
            'When you get tired',
            'After 10 subtractions',
            'When the numbers are equal'
        ],
        correctAnswer: 'When you reach 0 or a number smaller than the divisor',
        explanation: 'You stop when you can\'t subtract anymore, either because you reached 0 or the remaining number is smaller than the divisor.',
        wrongAnswerExplanations: {
            'When you get tired': 'You should continue until you reach 0 or a number smaller than the divisor.',
            'After 10 subtractions': 'The number of subtractions depends on the numbers, not a fixed count.',
            'When the numbers are equal': 'You should continue until you reach 0 or a number smaller than the divisor.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch13_t2_qe5',
        type: 'mcq',
        question: 'What is 15 ÷ 5 using repeated subtraction?',
        options: [
            '3',
            '5',
            '10',
            '15'
        ],
        correctAnswer: '3',
        explanation: '15 - 5 = 10 (1), 10 - 5 = 5 (2), 5 - 5 = 0 (3). You subtracted 5 three times.',
        wrongAnswerExplanations: {
            '5': 'This is the divisor, not the number of subtractions.',
            '10': 'This is the first difference, not the number of subtractions.',
            '15': 'This is the dividend, not the number of subtractions.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch13_t2_qe6',
        type: 'mcq',
        question: 'If you divide 24 by 6 using repeated subtraction, how many times do you subtract 6?',
        options: [
            '4',
            '6',
            '8',
            '12'
        ],
        correctAnswer: '4',
        explanation: '24 - 6 = 18 (1), 18 - 6 = 12 (2), 12 - 6 = 6 (3), 6 - 6 = 0 (4). You subtracted 6 four times.',
        wrongAnswerExplanations: {
            '6': 'This is the divisor, not the number of subtractions.',
            '8': 'This is too many subtractions.',
            '12': 'This is the first difference, not the number of subtractions.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch13_t2_qe7',
        type: 'mcq',
        question: 'What is the remainder when you divide 17 by 4 using repeated subtraction?',
        options: [
            '1',
            '2',
            '3',
            '4'
        ],
        correctAnswer: '1',
        explanation: '17 - 4 = 13 (1), 13 - 4 = 9 (2), 9 - 4 = 5 (3), 5 - 4 = 1 (4). 1 is less than 4, so the remainder is 1.',
        wrongAnswerExplanations: {
            '2': 'This is not the correct remainder.',
            '3': 'This is not the correct remainder.',
            '4': 'This is the divisor, not the remainder.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch13_t2_qe8',
        type: 'mcq',
        question: 'How many times can you subtract 7 from 28 before reaching 0?',
        options: [
            '4',
            '7',
            '14',
            '21'
        ],
        correctAnswer: '4',
        explanation: '28 - 7 = 21 (1), 21 - 7 = 14 (2), 14 - 7 = 7 (3), 7 - 7 = 0 (4). You can subtract 7 four times.',
        wrongAnswerExplanations: {
            '7': 'This is the divisor, not the number of subtractions.',
            '14': 'This is the second difference, not the number of subtractions.',
            '21': 'This is the first difference, not the number of subtractions.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch13_t2_qe9',
        type: 'mcq',
        question: 'What is 12 ÷ 3 using repeated subtraction?',
        options: [
            '4',
            '3',
            '6',
            '9'
        ],
        correctAnswer: '4',
        explanation: '12 - 3 = 9 (1), 9 - 3 = 6 (2), 6 - 3 = 3 (3), 3 - 3 = 0 (4). You subtracted 3 four times.',
        wrongAnswerExplanations: {
            '3': 'This is the divisor, not the number of subtractions.',
            '6': 'This is the second difference, not the number of subtractions.',
            '9': 'This is the first difference, not the number of subtractions.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch13_t2_qe10',
        type: 'mcq',
        question: 'If you divide 30 by 5 using repeated subtraction, how many times do you subtract 5?',
        options: [
            '6',
            '5',
            '10',
            '15'
        ],
        correctAnswer: '6',
        explanation: '30 - 5 = 25 (1), 25 - 5 = 20 (2), 20 - 5 = 15 (3), 15 - 5 = 10 (4), 10 - 5 = 5 (5), 5 - 5 = 0 (6).',
        wrongAnswerExplanations: {
            '5': 'This is the divisor, not the number of subtractions.',
            '10': 'This is the fourth difference, not the number of subtractions.',
            '15': 'This is the third difference, not the number of subtractions.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch13_t2_qe11',
        type: 'mcq',
        question: 'What is the remainder when you divide 19 by 3 using repeated subtraction?',
        options: [
            '1',
            '2',
            '3',
            '0'
        ],
        correctAnswer: '1',
        explanation: '19 - 3 = 16 (1), 16 - 3 = 13 (2), 13 - 3 = 10 (3), 10 - 3 = 7 (4), 7 - 3 = 4 (5), 4 - 3 = 1 (6). 1 is less than 3, so the remainder is 1.',
        wrongAnswerExplanations: {
            '2': 'This is not the correct remainder.',
            '3': 'This is the divisor, not the remainder.',
            '0': 'There is a remainder of 1.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch13_t2_qe12',
        type: 'mcq',
        question: 'How many times can you subtract 8 from 32 before reaching 0?',
        options: [
            '4',
            '8',
            '16',
            '24'
        ],
        correctAnswer: '4',
        explanation: '32 - 8 = 24 (1), 24 - 8 = 16 (2), 16 - 8 = 8 (3), 8 - 8 = 0 (4). You can subtract 8 four times.',
        wrongAnswerExplanations: {
            '8': 'This is the divisor, not the number of subtractions.',
            '16': 'This is the second difference, not the number of subtractions.',
            '24': 'This is the first difference, not the number of subtractions.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch13_t2_qe13',
        type: 'mcq',
        question: 'What is 16 ÷ 4 using repeated subtraction?',
        options: [
            '4',
            '3',
            '5',
            '6'
        ],
        correctAnswer: '4',
        explanation: '16 - 4 = 12 (1), 12 - 4 = 8 (2), 8 - 4 = 4 (3), 4 - 4 = 0 (4). You subtracted 4 four times.',
        wrongAnswerExplanations: {
            '3': 'You need to subtract 4 one more time to reach 0.',
            '5': 'This is too many subtractions.',
            '6': 'This is too many subtractions.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch13_t2_qe14',
        type: 'mcq',
        question: 'If you divide 25 by 5 using repeated subtraction, how many times do you subtract 5?',
        options: [
            '5',
            '4',
            '6',
            '7'
        ],
        correctAnswer: '5',
        explanation: '25 - 5 = 20 (1), 20 - 5 = 15 (2), 15 - 5 = 10 (3), 10 - 5 = 5 (4), 5 - 5 = 0 (5).',
        wrongAnswerExplanations: {
            '4': 'You need to subtract 5 one more time to reach 0.',
            '6': 'This is too many subtractions.',
            '7': 'This is too many subtractions.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch13_t2_qe15',
        type: 'mcq',
        question: 'What is the remainder when you divide 22 by 4 using repeated subtraction?',
        options: [
            '2',
            '1',
            '3',
            '0'
        ],
        correctAnswer: '2',
        explanation: '22 - 4 = 18 (1), 18 - 4 = 14 (2), 14 - 4 = 10 (3), 10 - 4 = 6 (4), 6 - 4 = 2 (5). 2 is less than 4, so the remainder is 2.',
        wrongAnswerExplanations: {
            '1': 'This is not the correct remainder.',
            '3': 'This is not the correct remainder.',
            '0': 'There is a remainder of 2.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch13_t2_qe16',
        type: 'mcq',
        question: 'How many times can you subtract 9 from 36 before reaching 0?',
        options: [
            '4',
            '9',
            '18',
            '27'
        ],
        correctAnswer: '4',
        explanation: '36 - 9 = 27 (1), 27 - 9 = 18 (2), 18 - 9 = 9 (3), 9 - 9 = 0 (4). You can subtract 9 four times.',
        wrongAnswerExplanations: {
            '9': 'This is the divisor, not the number of subtractions.',
            '18': 'This is the second difference, not the number of subtractions.',
            '27': 'This is the first difference, not the number of subtractions.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch13_t2_qe17',
        type: 'mcq',
        question: 'What is 21 ÷ 7 using repeated subtraction?',
        options: [
            '3',
            '7',
            '14',
            '21'
        ],
        correctAnswer: '3',
        explanation: '21 - 7 = 14 (1), 14 - 7 = 7 (2), 7 - 7 = 0 (3). You subtracted 7 three times.',
        wrongAnswerExplanations: {
            '7': 'This is the divisor, not the number of subtractions.',
            '14': 'This is the first difference, not the number of subtractions.',
            '21': 'This is the dividend, not the number of subtractions.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch13_t2_qe18',
        type: 'mcq',
        question: 'If you divide 27 by 9 using repeated subtraction, how many times do you subtract 9?',
        options: [
            '3',
            '9',
            '18',
            '27'
        ],
        correctAnswer: '3',
        explanation: '27 - 9 = 18 (1), 18 - 9 = 9 (2), 9 - 9 = 0 (3). You subtracted 9 three times.',
        wrongAnswerExplanations: {
            '9': 'This is the divisor, not the number of subtractions.',
            '18': 'This is the first difference, not the number of subtractions.',
            '27': 'This is the dividend, not the number of subtractions.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch13_t2_qe19',
        type: 'mcq',
        question: 'What is the remainder when you divide 23 by 5 using repeated subtraction?',
        options: [
            '3',
            '2',
            '1',
            '0'
        ],
        correctAnswer: '3',
        explanation: '23 - 5 = 18 (1), 18 - 5 = 13 (2), 13 - 5 = 8 (3), 8 - 5 = 3 (4). 3 is less than 5, so the remainder is 3.',
        wrongAnswerExplanations: {
            '2': 'This is not the correct remainder.',
            '1': 'This is not the correct remainder.',
            '0': 'There is a remainder of 3.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch13_t2_qe20',
        type: 'mcq',
        question: 'How many times can you subtract 6 from 24 before reaching 0?',
        options: [
            '4',
            '6',
            '12',
            '18'
        ],
        correctAnswer: '4',
        explanation: '24 - 6 = 18 (1), 18 - 6 = 12 (2), 12 - 6 = 6 (3), 6 - 6 = 0 (4). You can subtract 6 four times.',
        wrongAnswerExplanations: {
            '6': 'This is the divisor, not the number of subtractions.',
            '12': 'This is the second difference, not the number of subtractions.',
            '18': 'This is the first difference, not the number of subtractions.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    }
]; 