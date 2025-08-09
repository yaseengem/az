import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl5_ch13_t2_qm1',
        type: 'mcq',
        question: 'If you divide 45 by 7 using repeated subtraction, what is the remainder?',
        options: [
            '3',
            '4',
            '5',
            '6'
        ],
        correctAnswer: '3',
        explanation: '45 - 7 = 38 (1), 38 - 7 = 31 (2), 31 - 7 = 24 (3), 24 - 7 = 17 (4), 17 - 7 = 10 (5), 10 - 7 = 3 (6). 3 is less than 7, so the remainder is 3.',
        wrongAnswerExplanations: {
            '4': 'This is not the correct remainder.',
            '5': 'This is not the correct remainder.',
            '6': 'This is not the correct remainder.'
        },
        difficulty: 'medium',
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch13_t2_qm2',
        type: 'mcq',
        question: 'How many times can you subtract 8 from 50 before reaching a number less than 8?',
        options: [
            '6',
            '5',
            '7',
            '8'
        ],
        correctAnswer: '6',
        explanation: '50 - 8 = 42 (1), 42 - 8 = 34 (2), 34 - 8 = 26 (3), 26 - 8 = 18 (4), 18 - 8 = 10 (5), 10 - 8 = 2 (6). 2 is less than 8.',
        wrongAnswerExplanations: {
            '5': 'You can subtract 8 one more time before reaching a number less than 8.',
            '7': 'This is too many subtractions.',
            '8': 'This is too many subtractions.'
        },
        difficulty: 'medium',
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch13_t2_qm3',
        type: 'mcq',
        question: 'What is 38 ÷ 6 using repeated subtraction?',
        options: [
            '6 with remainder 2',
            '5 with remainder 8',
            '7 with remainder 4',
            '4 with remainder 14'
        ],
        correctAnswer: '6 with remainder 2',
        explanation: '38 - 6 = 32 (1), 32 - 6 = 26 (2), 26 - 6 = 20 (3), 20 - 6 = 14 (4), 14 - 6 = 8 (5), 8 - 6 = 2 (6). 2 is less than 6.',
        wrongAnswerExplanations: {
            '5 with remainder 8': '8 is not less than 6, so you can subtract 6 one more time.',
            '7 with remainder 4': 'This is too many subtractions.',
            '4 with remainder 14': '14 is not less than 6, so you can subtract 6 two more times.'
        },
        difficulty: 'medium',
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch13_t2_qm4',
        type: 'mcq',
        question: 'If you divide 55 by 9 using repeated subtraction, what is the remainder?',
        options: [
            '1',
            '2',
            '3',
            '4'
        ],
        correctAnswer: '1',
        explanation: '55 - 9 = 46 (1), 46 - 9 = 37 (2), 37 - 9 = 28 (3), 28 - 9 = 19 (4), 19 - 9 = 10 (5), 10 - 9 = 1 (6). 1 is less than 9.',
        wrongAnswerExplanations: {
            '2': 'This is not the correct remainder.',
            '3': 'This is not the correct remainder.',
            '4': 'This is not the correct remainder.'
        },
        difficulty: 'medium',
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch13_t2_qm5',
        type: 'mcq',
        question: 'How many times can you subtract 11 from 75 before reaching a number less than 11?',
        options: [
            '6',
            '5',
            '7',
            '8'
        ],
        correctAnswer: '6',
        explanation: '75 - 11 = 64 (1), 64 - 11 = 53 (2), 53 - 11 = 42 (3), 42 - 11 = 31 (4), 31 - 11 = 20 (5), 20 - 11 = 9 (6). 9 is less than 11.',
        wrongAnswerExplanations: {
            '5': 'You can subtract 11 one more time before reaching a number less than 11.',
            '7': 'This is too many subtractions.',
            '8': 'This is too many subtractions.'
        },
        difficulty: 'medium',
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch13_t2_qm6',
        type: 'mcq',
        question: 'What is 62 ÷ 8 using repeated subtraction?',
        options: [
            '7 with remainder 6',
            '6 with remainder 14',
            '8 with remainder 6',
            '5 with remainder 22'
        ],
        correctAnswer: '7 with remainder 6',
        explanation: '62 - 8 = 54 (1), 54 - 8 = 46 (2), 46 - 8 = 38 (3), 38 - 8 = 30 (4), 30 - 8 = 22 (5), 22 - 8 = 14 (6), 14 - 8 = 6 (7). 6 is less than 8.',
        wrongAnswerExplanations: {
            '6 with remainder 14': '14 is not less than 8, so you can subtract 8 one more time.',
            '8 with remainder 6': 'This is too many subtractions.',
            '5 with remainder 22': '22 is not less than 8, so you can subtract 8 two more times.'
        },
        difficulty: 'medium',
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch13_t2_qm7',
        type: 'mcq',
        question: 'If you divide 84 by 12 using repeated subtraction, what is the remainder?',
        options: [
            '0',
            '1',
            '2',
            '3'
        ],
        correctAnswer: '0',
        explanation: '84 - 12 = 72 (1), 72 - 12 = 60 (2), 60 - 12 = 48 (3), 48 - 12 = 36 (4), 36 - 12 = 24 (5), 24 - 12 = 12 (6), 12 - 12 = 0 (7).',
        wrongAnswerExplanations: {
            '1': 'There is no remainder when dividing 84 by 12.',
            '2': 'There is no remainder when dividing 84 by 12.',
            '3': 'There is no remainder when dividing 84 by 12.'
        },
        difficulty: 'medium',
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch13_t2_qm8',
        type: 'mcq',
        question: 'How many times can you subtract 13 from 90 before reaching a number less than 13?',
        options: [
            '6',
            '5',
            '7',
            '8'
        ],
        correctAnswer: '6',
        explanation: '90 - 13 = 77 (1), 77 - 13 = 64 (2), 64 - 13 = 51 (3), 51 - 13 = 38 (4), 38 - 13 = 25 (5), 25 - 13 = 12 (6). 12 is less than 13.',
        wrongAnswerExplanations: {
            '5': 'You can subtract 13 one more time before reaching a number less than 13.',
            '7': 'This is too many subtractions.',
            '8': 'This is too many subtractions.'
        },
        difficulty: 'medium',
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch13_t2_qm9',
        type: 'mcq',
        question: 'What is 95 ÷ 14 using repeated subtraction?',
        options: [
            '6 with remainder 11',
            '5 with remainder 25',
            '7 with remainder 11',
            '4 with remainder 39'
        ],
        correctAnswer: '6 with remainder 11',
        explanation: '95 - 14 = 81 (1), 81 - 14 = 67 (2), 67 - 14 = 53 (3), 53 - 14 = 39 (4), 39 - 14 = 25 (5), 25 - 14 = 11 (6). 11 is less than 14.',
        wrongAnswerExplanations: {
            '5 with remainder 25': '25 is not less than 14, so you can subtract 14 one more time.',
            '7 with remainder 11': 'This is too many subtractions.',
            '4 with remainder 39': '39 is not less than 14, so you can subtract 14 two more times.'
        },
        difficulty: 'medium',
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch13_t2_qm10',
        type: 'mcq',
        question: 'If you divide 108 by 15 using repeated subtraction, what is the remainder?',
        options: [
            '3',
            '4',
            '5',
            '6'
        ],
        correctAnswer: '3',
        explanation: '108 - 15 = 93 (1), 93 - 15 = 78 (2), 78 - 15 = 63 (3), 63 - 15 = 48 (4), 48 - 15 = 33 (5), 33 - 15 = 18 (6), 18 - 15 = 3 (7). 3 is less than 15.',
        wrongAnswerExplanations: {
            '4': 'This is not the correct remainder.',
            '5': 'This is not the correct remainder.',
            '6': 'This is not the correct remainder.'
        },
        difficulty: 'medium',
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch13_t2_qm11',
        type: 'mcq',
        question: 'How many times can you subtract 16 from 100 before reaching a number less than 16?',
        options: [
            '6',
            '5',
            '7',
            '8'
        ],
        correctAnswer: '6',
        explanation: '100 - 16 = 84 (1), 84 - 16 = 68 (2), 68 - 16 = 52 (3), 52 - 16 = 36 (4), 36 - 16 = 20 (5), 20 - 16 = 4 (6). 4 is less than 16.',
        wrongAnswerExplanations: {
            '5': 'You can subtract 16 one more time before reaching a number less than 16.',
            '7': 'This is too many subtractions.',
            '8': 'This is too many subtractions.'
        },
        difficulty: 'medium',
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch13_t2_qm12',
        type: 'mcq',
        question: 'What is 120 ÷ 17 using repeated subtraction?',
        options: [
            '7 with remainder 1',
            '6 with remainder 18',
            '8 with remainder 1',
            '5 with remainder 35'
        ],
        correctAnswer: '7 with remainder 1',
        explanation: '120 - 17 = 103 (1), 103 - 17 = 86 (2), 86 - 17 = 69 (3), 69 - 17 = 52 (4), 52 - 17 = 35 (5), 35 - 17 = 18 (6), 18 - 17 = 1 (7). 1 is less than 17.',
        wrongAnswerExplanations: {
            '6 with remainder 18': '18 is not less than 17, so you can subtract 17 one more time.',
            '8 with remainder 1': 'This is too many subtractions.',
            '5 with remainder 35': '35 is not less than 17, so you can subtract 17 two more times.'
        },
        difficulty: 'medium',
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch13_t2_qm13',
        type: 'mcq',
        question: 'If you divide 135 by 18 using repeated subtraction, what is the remainder?',
        options: [
            '9',
            '8',
            '7',
            '6'
        ],
        correctAnswer: '9',
        explanation: '135 - 18 = 117 (1), 117 - 18 = 99 (2), 99 - 18 = 81 (3), 81 - 18 = 63 (4), 63 - 18 = 45 (5), 45 - 18 = 27 (6), 27 - 18 = 9 (7). 9 is less than 18.',
        wrongAnswerExplanations: {
            '8': 'This is not the correct remainder.',
            '7': 'This is not the correct remainder.',
            '6': 'This is not the correct remainder.'
        },
        difficulty: 'medium',
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch13_t2_qm14',
        type: 'mcq',
        question: 'How many times can you subtract 19 from 150 before reaching a number less than 19?',
        options: [
            '7',
            '6',
            '8',
            '9'
        ],
        correctAnswer: '7',
        explanation: '150 - 19 = 131 (1), 131 - 19 = 112 (2), 112 - 19 = 93 (3), 93 - 19 = 74 (4), 74 - 19 = 55 (5), 55 - 19 = 36 (6), 36 - 19 = 17 (7). 17 is less than 19.',
        wrongAnswerExplanations: {
            '6': 'You can subtract 19 one more time before reaching a number less than 19.',
            '8': 'This is too many subtractions.',
            '9': 'This is too many subtractions.'
        },
        difficulty: 'medium',
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch13_t2_qm15',
        type: 'mcq',
        question: 'What is 165 ÷ 20 using repeated subtraction?',
        options: [
            '8 with remainder 5',
            '7 with remainder 25',
            '9 with remainder 5',
            '6 with remainder 45'
        ],
        correctAnswer: '8 with remainder 5',
        explanation: '165 - 20 = 145 (1), 145 - 20 = 125 (2), 125 - 20 = 105 (3), 105 - 20 = 85 (4), 85 - 20 = 65 (5), 65 - 20 = 45 (6), 45 - 20 = 25 (7), 25 - 20 = 5 (8). 5 is less than 20.',
        wrongAnswerExplanations: {
            '7 with remainder 25': '25 is not less than 20, so you can subtract 20 one more time.',
            '9 with remainder 5': 'This is too many subtractions.',
            '6 with remainder 45': '45 is not less than 20, so you can subtract 20 two more times.'
        },
        difficulty: 'medium',
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch13_t2_qm16',
        type: 'mcq',
        question: 'If you divide 180 by 22 using repeated subtraction, what is the remainder?',
        options: [
            '4',
            '5',
            '6',
            '7'
        ],
        correctAnswer: '4',
        explanation: '180 - 22 = 158 (1), 158 - 22 = 136 (2), 136 - 22 = 114 (3), 114 - 22 = 92 (4), 92 - 22 = 70 (5), 70 - 22 = 48 (6), 48 - 22 = 26 (7), 26 - 22 = 4 (8). 4 is less than 22.',
        wrongAnswerExplanations: {
            '5': 'This is not the correct remainder.',
            '6': 'This is not the correct remainder.',
            '7': 'This is not the correct remainder.'
        },
        difficulty: 'medium',
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch13_t2_qm17',
        type: 'mcq',
        question: 'How many times can you subtract 23 from 200 before reaching a number less than 23?',
        options: [
            '8',
            '7',
            '9',
            '10'
        ],
        correctAnswer: '8',
        explanation: '200 - 23 = 177 (1), 177 - 23 = 154 (2), 154 - 23 = 131 (3), 131 - 23 = 108 (4), 108 - 23 = 85 (5), 85 - 23 = 62 (6), 62 - 23 = 39 (7), 39 - 23 = 16 (8). 16 is less than 23.',
        wrongAnswerExplanations: {
            '7': 'You can subtract 23 one more time before reaching a number less than 23.',
            '9': 'This is too many subtractions.',
            '10': 'This is too many subtractions.'
        },
        difficulty: 'medium',
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch13_t2_qm18',
        type: 'mcq',
        question: 'What is 210 ÷ 25 using repeated subtraction?',
        options: [
            '8 with remainder 10',
            '7 with remainder 35',
            '9 with remainder 10',
            '6 with remainder 60'
        ],
        correctAnswer: '8 with remainder 10',
        explanation: '210 - 25 = 185 (1), 185 - 25 = 160 (2), 160 - 25 = 135 (3), 135 - 25 = 110 (4), 110 - 25 = 85 (5), 85 - 25 = 60 (6), 60 - 25 = 35 (7), 35 - 25 = 10 (8). 10 is less than 25.',
        wrongAnswerExplanations: {
            '7 with remainder 35': '35 is not less than 25, so you can subtract 25 one more time.',
            '9 with remainder 10': 'This is too many subtractions.',
            '6 with remainder 60': '60 is not less than 25, so you can subtract 25 two more times.'
        },
        difficulty: 'medium',
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch13_t2_qm19',
        type: 'mcq',
        question: 'If you divide 225 by 27 using repeated subtraction, what is the remainder?',
        options: [
            '9',
            '8',
            '7',
            '6'
        ],
        correctAnswer: '9',
        explanation: '225 - 27 = 198 (1), 198 - 27 = 171 (2), 171 - 27 = 144 (3), 144 - 27 = 117 (4), 117 - 27 = 90 (5), 90 - 27 = 63 (6), 63 - 27 = 36 (7), 36 - 27 = 9 (8). 9 is less than 27.',
        wrongAnswerExplanations: {
            '8': 'This is not the correct remainder.',
            '7': 'This is not the correct remainder.',
            '6': 'This is not the correct remainder.'
        },
        difficulty: 'medium',
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch13_t2_qm20',
        type: 'mcq',
        question: 'How many times can you subtract 28 from 250 before reaching a number less than 28?',
        options: [
            '8',
            '7',
            '9',
            '10'
        ],
        correctAnswer: '8',
        explanation: '250 - 28 = 222 (1), 222 - 28 = 194 (2), 194 - 28 = 166 (3), 166 - 28 = 138 (4), 138 - 28 = 110 (5), 110 - 28 = 82 (6), 82 - 28 = 54 (7), 54 - 28 = 26 (8). 26 is less than 28.',
        wrongAnswerExplanations: {
            '7': 'You can subtract 28 one more time before reaching a number less than 28.',
            '9': 'This is too many subtractions.',
            '10': 'This is too many subtractions.'
        },
        difficulty: 'medium',
        marks: 1,
        recommendedTime: 45
    }
]; 