import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl5_ch6_t3_e1',
        type: 'mcq',
        question: 'Which of these is a prime number? 🔢',
        options: ['4', '5', '6', '8'],
        correctAnswer: '5',
        explanation: '5 is a prime number because it has exactly two factors: 1 and 5.',
        wrongAnswerExplanations: {
            '4': '4 is a composite number because it has more than two factors (1, 2, 4).',
            '6': '6 is a composite number because it has more than two factors (1, 2, 3, 6).',
            '8': '8 is a composite number because it has more than two factors (1, 2, 4, 8).'
        },
        difficulty: 'easy',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch6_t3_e2',
        type: 'mcq',
        question: 'Which of these is a composite number? 📊',
        options: ['2', '3', '4', '5'],
        correctAnswer: '4',
        explanation: '4 is a composite number because it has more than two factors (1, 2, 4).',
        wrongAnswerExplanations: {
            '2': '2 is a prime number because it has exactly two factors (1, 2).',
            '3': '3 is a prime number because it has exactly two factors (1, 3).',
            '5': '5 is a prime number because it has exactly two factors (1, 5).'
        },
        difficulty: 'easy',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch6_t3_e3',
        type: 'mcq',
        question: 'What is the smallest prime number? 🎯',
        options: ['1', '2', '3', '4'],
        correctAnswer: '2',
        explanation: '2 is the smallest prime number because it has exactly two factors (1 and 2).',
        wrongAnswerExplanations: {
            '1': '1 is neither prime nor composite.',
            '3': '3 is a prime number, but 2 is smaller.',
            '4': '4 is a composite number.'
        },
        difficulty: 'easy',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch6_t3_e4',
        type: 'mcq',
        question: 'What is the smallest composite number? 🔍',
        options: ['1', '2', '3', '4'],
        correctAnswer: '4',
        explanation: '4 is the smallest composite number because it has more than two factors (1, 2, 4).',
        wrongAnswerExplanations: {
            '1': '1 is neither prime nor composite.',
            '2': '2 is a prime number.',
            '3': '3 is a prime number.'
        },
        difficulty: 'easy',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch6_t3_e5',
        type: 'mcq',
        question: 'Which number is neither prime nor composite? ❓',
        options: ['0', '1', '2', '3'],
        correctAnswer: '1',
        explanation: '1 is neither prime nor composite because it has only one factor (itself).',
        wrongAnswerExplanations: {
            '0': '0 is not considered in prime/composite classification.',
            '2': '2 is a prime number.',
            '3': '3 is a prime number.'
        },
        difficulty: 'easy',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch6_t3_e6',
        type: 'mcq',
        question: 'Which of these is a prime number? ✨',
        options: ['9', '11', '12', '15'],
        correctAnswer: '11',
        explanation: '11 is a prime number because it has exactly two factors (1 and 11).',
        wrongAnswerExplanations: {
            '9': '9 is a composite number because it has more than two factors (1, 3, 9).',
            '12': '12 is a composite number because it has more than two factors (1, 2, 3, 4, 6, 12).',
            '15': '15 is a composite number because it has more than two factors (1, 3, 5, 15).'
        },
        difficulty: 'easy',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch6_t3_e7',
        type: 'mcq',
        question: 'Which of these is a composite number? 🎲',
        options: ['7', '11', '13', '14'],
        correctAnswer: '14',
        explanation: '14 is a composite number because it has more than two factors (1, 2, 7, 14).',
        wrongAnswerExplanations: {
            '7': '7 is a prime number because it has exactly two factors (1, 7).',
            '11': '11 is a prime number because it has exactly two factors (1, 11).',
            '13': '13 is a prime number because it has exactly two factors (1, 13).'
        },
        difficulty: 'easy',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch6_t3_e8',
        type: 'mcq',
        question: 'Which of these is the only even prime number? 🔄',
        options: ['1', '2', '4', '6'],
        correctAnswer: '2',
        explanation: '2 is the only even prime number because it has exactly two factors (1 and 2).',
        wrongAnswerExplanations: {
            '1': '1 is neither prime nor composite.',
            '4': '4 is a composite number.',
            '6': '6 is a composite number.'
        },
        difficulty: 'easy',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch6_t3_e9',
        type: 'mcq',
        question: 'Which of these is a prime number? 🎯',
        options: ['10', '12', '13', '14'],
        correctAnswer: '13',
        explanation: '13 is a prime number because it has exactly two factors (1 and 13).',
        wrongAnswerExplanations: {
            '10': '10 is a composite number because it has more than two factors (1, 2, 5, 10).',
            '12': '12 is a composite number because it has more than two factors (1, 2, 3, 4, 6, 12).',
            '14': '14 is a composite number because it has more than two factors (1, 2, 7, 14).'
        },
        difficulty: 'easy',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch6_t3_e10',
        type: 'mcq',
        question: 'Which of these is a composite number? 🔍',
        options: ['17', '19', '20', '23'],
        correctAnswer: '20',
        explanation: '20 is a composite number because it has more than two factors (1, 2, 4, 5, 10, 20).',
        wrongAnswerExplanations: {
            '17': '17 is a prime number because it has exactly two factors (1, 17).',
            '19': '19 is a prime number because it has exactly two factors (1, 19).',
            '23': '23 is a prime number because it has exactly two factors (1, 23).'
        },
        difficulty: 'easy',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch6_t3_e11',
        type: 'mcq',
        question: 'Which of these is a prime number? ✨',
        options: ['16', '17', '18', '20'],
        correctAnswer: '17',
        explanation: '17 is a prime number because it has exactly two factors (1 and 17).',
        wrongAnswerExplanations: {
            '16': '16 is a composite number because it has more than two factors (1, 2, 4, 8, 16).',
            '18': '18 is a composite number because it has more than two factors (1, 2, 3, 6, 9, 18).',
            '20': '20 is a composite number because it has more than two factors (1, 2, 4, 5, 10, 20).'
        },
        difficulty: 'easy',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch6_t3_e12',
        type: 'mcq',
        question: 'Which of these is a composite number? 🎲',
        options: ['19', '21', '23', '29'],
        correctAnswer: '21',
        explanation: '21 is a composite number because it has more than two factors (1, 3, 7, 21).',
        wrongAnswerExplanations: {
            '19': '19 is a prime number because it has exactly two factors (1, 19).',
            '23': '23 is a prime number because it has exactly two factors (1, 23).',
            '29': '29 is a prime number because it has exactly two factors (1, 29).'
        },
        difficulty: 'easy',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch6_t3_e13',
        type: 'mcq',
        question: 'Which of these is a prime number? 🔢',
        options: ['22', '23', '24', '25'],
        correctAnswer: '23',
        explanation: '23 is a prime number because it has exactly two factors (1 and 23).',
        wrongAnswerExplanations: {
            '22': '22 is a composite number because it has more than two factors (1, 2, 11, 22).',
            '24': '24 is a composite number because it has more than two factors (1, 2, 3, 4, 6, 8, 12, 24).',
            '25': '25 is a composite number because it has more than two factors (1, 5, 25).'
        },
        difficulty: 'easy',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch6_t3_e14',
        type: 'mcq',
        question: 'Which of these is a composite number? 📊',
        options: ['27', '29', '31', '37'],
        correctAnswer: '27',
        explanation: '27 is a composite number because it has more than two factors (1, 3, 9, 27).',
        wrongAnswerExplanations: {
            '29': '29 is a prime number because it has exactly two factors (1, 29).',
            '31': '31 is a prime number because it has exactly two factors (1, 31).',
            '37': '37 is a prime number because it has exactly two factors (1, 37).'
        },
        difficulty: 'easy',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch6_t3_e15',
        type: 'mcq',
        question: 'Which of these is a prime number? 🎯',
        options: ['28', '29', '30', '32'],
        correctAnswer: '29',
        explanation: '29 is a prime number because it has exactly two factors (1 and 29).',
        wrongAnswerExplanations: {
            '28': '28 is a composite number because it has more than two factors (1, 2, 4, 7, 14, 28).',
            '30': '30 is a composite number because it has more than two factors (1, 2, 3, 5, 6, 10, 15, 30).',
            '32': '32 is a composite number because it has more than two factors (1, 2, 4, 8, 16, 32).'
        },
        difficulty: 'easy',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch6_t3_e16',
        type: 'mcq',
        question: 'Which of these is a composite number? 🔄',
        options: ['31', '33', '37', '41'],
        correctAnswer: '33',
        explanation: '33 is a composite number because it has more than two factors (1, 3, 11, 33).',
        wrongAnswerExplanations: {
            '31': '31 is a prime number because it has exactly two factors (1, 31).',
            '37': '37 is a prime number because it has exactly two factors (1, 37).',
            '41': '41 is a prime number because it has exactly two factors (1, 41).'
        },
        difficulty: 'easy',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch6_t3_e17',
        type: 'mcq',
        question: 'Which of these is a prime number? ✨',
        options: ['34', '35', '37', '39'],
        correctAnswer: '37',
        explanation: '37 is a prime number because it has exactly two factors (1 and 37).',
        wrongAnswerExplanations: {
            '34': '34 is a composite number because it has more than two factors (1, 2, 17, 34).',
            '35': '35 is a composite number because it has more than two factors (1, 5, 7, 35).',
            '39': '39 is a composite number because it has more than two factors (1, 3, 13, 39).'
        },
        difficulty: 'easy',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch6_t3_e18',
        type: 'mcq',
        question: 'Which of these is a composite number? 🎲',
        options: ['41', '43', '45', '47'],
        correctAnswer: '45',
        explanation: '45 is a composite number because it has more than two factors (1, 3, 5, 9, 15, 45).',
        wrongAnswerExplanations: {
            '41': '41 is a prime number because it has exactly two factors (1, 41).',
            '43': '43 is a prime number because it has exactly two factors (1, 43).',
            '47': '47 is a prime number because it has exactly two factors (1, 47).'
        },
        difficulty: 'easy',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch6_t3_e19',
        type: 'mcq',
        question: 'Which of these is a prime number? 🔢',
        options: ['46', '47', '48', '49'],
        correctAnswer: '47',
        explanation: '47 is a prime number because it has exactly two factors (1 and 47).',
        wrongAnswerExplanations: {
            '46': '46 is a composite number because it has more than two factors (1, 2, 23, 46).',
            '48': '48 is a composite number because it has more than two factors (1, 2, 3, 4, 6, 8, 12, 16, 24, 48).',
            '49': '49 is a composite number because it has more than two factors (1, 7, 49).'
        },
        difficulty: 'easy',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch6_t3_e20',
        type: 'mcq',
        question: 'Which of these is a composite number? 📊',
        options: ['51', '53', '59', '61'],
        correctAnswer: '51',
        explanation: '51 is a composite number because it has more than two factors (1, 3, 17, 51).',
        wrongAnswerExplanations: {
            '53': '53 is a prime number because it has exactly two factors (1, 53).',
            '59': '59 is a prime number because it has exactly two factors (1, 59).',
            '61': '61 is a prime number because it has exactly two factors (1, 61).'
        },
        difficulty: 'easy',
        marks: 2,
        recommendedTime: 45
    }
]; 