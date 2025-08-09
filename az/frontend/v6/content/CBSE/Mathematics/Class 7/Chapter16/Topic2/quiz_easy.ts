import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl7_ch16_t2_qe1',
        type: 'mcq',
        question: 'Which of the following is the next number in the pattern: 2, 4, 8, 16, ?',
        options: ['18', '20', '24', '32'],
        correctAnswer: '32',
        explanation: 'Each number is multiplied by 2. 16 × 2 = 32.',
        wrongAnswerExplanations: {
            '18': 'The pattern is not adding 2, but multiplying by 2.',
            '20': 'The pattern is not adding 4, but multiplying by 2.',
            '24': 'The pattern is not adding 8, but multiplying by 2.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch16_t2_qe2',
        type: 'mcq',
        question: 'Find the missing term: 5, 10, 20, 40, ?',
        options: ['45', '60', '80', '100'],
        correctAnswer: '80',
        explanation: 'Each term is multiplied by 2. 40 × 2 = 80.',
        wrongAnswerExplanations: {
            '45': 'The pattern is not adding 5, but multiplying by 2.',
            '60': 'The pattern is not adding 20, but multiplying by 2.',
            '100': 'The pattern is not adding 60, but multiplying by 2.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch16_t2_qe3',
        type: 'mcq',
        question: 'What comes next in the sequence: 1, 4, 9, 16, ?',
        options: ['20', '25', '30', '36'],
        correctAnswer: '25',
        explanation: 'These are perfect squares: 1², 2², 3², 4², so next is 5² = 25.',
        wrongAnswerExplanations: {
            '20': '20 is not a perfect square.',
            '30': '30 is not a perfect square.',
            '36': '36 is 6², but the next after 16 is 25.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch16_t2_qe4',
        type: 'mcq',
        question: 'Which shape comes next: ◯, ◯, △, ◯, ◯, △, ◯, ◯, ?',
        options: ['△', '◯', '□', '⬠'],
        correctAnswer: '△',
        explanation: 'The pattern repeats: two circles, one triangle.',
        wrongAnswerExplanations: {
            '◯': 'The pattern is two circles, then a triangle.',
            '□': 'Squares are not in the pattern.',
            '⬠': 'Hexagons are not in the pattern.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch16_t2_qe5',
        type: 'mcq',
        question: 'Find the missing letter: A, C, E, G, ?',
        options: ['H', 'I', 'J', 'K'],
        correctAnswer: 'I',
        explanation: 'The pattern skips one letter each time: A, (B), C, (D), E, (F), G, (H), I.',
        wrongAnswerExplanations: {
            'H': 'H is skipped in the pattern.',
            'J': 'J comes after I.',
            'K': 'K is not next in the sequence.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch16_t2_qe6',
        type: 'mcq',
        question: 'Which number completes the pattern: 2, 6, 12, 20, ?',
        options: ['24', '30', '32', '42'],
        correctAnswer: '30',
        explanation: 'The pattern adds consecutive even numbers: +4, +6, +8, so next is 20+10=30.',
        wrongAnswerExplanations: {
            '24': 'The difference increases by 2 each time.',
            '32': 'The next difference is 10, not 12.',
            '42': 'The next difference is 10, not 22.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch16_t2_qe7',
        type: 'mcq',
        question: 'What comes next: 3, 6, 12, 24, ?',
        options: ['36', '48', '60', '72'],
        correctAnswer: '48',
        explanation: 'Each number is multiplied by 2. 24 × 2 = 48.',
        wrongAnswerExplanations: {
            '36': 'The pattern is multiplying by 2, not adding 12.',
            '60': 'The pattern is multiplying by 2, not adding 36.',
            '72': 'The pattern is multiplying by 2, not adding 48.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch16_t2_qe8',
        type: 'mcq',
        question: 'Which is the next odd number in the sequence: 11, 13, 15, 17, ?',
        options: ['18', '19', '21', '23'],
        correctAnswer: '19',
        explanation: 'The sequence increases by 2 each time. 17 + 2 = 19.',
        wrongAnswerExplanations: {
            '18': '18 is even, the pattern is odd numbers.',
            '21': '21 is the next after 19.',
            '23': '23 is after 21.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch16_t2_qe9',
        type: 'mcq',
        question: 'Find the missing term: 100, 90, 80, 70, ?',
        options: ['60', '65', '75', '85'],
        correctAnswer: '60',
        explanation: 'The pattern subtracts 10 each time. 70 - 10 = 60.',
        wrongAnswerExplanations: {
            '65': 'The pattern is subtracting 10, not 5.',
            '75': '75 comes before 70 in the pattern.',
            '85': '85 comes before 80 in the pattern.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch16_t2_qe10',
        type: 'mcq',
        question: 'Which comes next: 2, 5, 10, 17, ?',
        options: ['24', '26', '28', '30'],
        correctAnswer: '26',
        explanation: 'The pattern adds consecutive odd numbers: +3, +5, +7, +9.',
        wrongAnswerExplanations: {
            '24': 'The next difference is 9, not 7.',
            '28': 'The next difference is 9, not 11.',
            '30': 'The next difference is 9, not 13.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch16_t2_qe11',
        type: 'mcq',
        question: 'Which letter comes next: Z, X, V, T, ?',
        options: ['R', 'S', 'U', 'Q'],
        correctAnswer: 'R',
        explanation: 'The pattern skips one letter backward each time: Z, (Y), X, (W), V, (U), T, (S), R.',
        wrongAnswerExplanations: {
            'S': 'S is skipped in the pattern.',
            'U': 'U comes before T.',
            'Q': 'Q comes after R.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch16_t2_qe12',
        type: 'mcq',
        question: 'Find the missing number: 7, 14, 28, 56, ?',
        options: ['70', '84', '112', '120'],
        correctAnswer: '112',
        explanation: 'Each number is multiplied by 2. 56 × 2 = 112.',
        wrongAnswerExplanations: {
            '70': 'The pattern is multiplying by 2, not adding 14.',
            '84': 'The pattern is multiplying by 2, not adding 28.',
            '120': 'The pattern is multiplying by 2, not adding 64.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch16_t2_qe13',
        type: 'mcq',
        question: 'What comes next: 21, 18, 15, 12, ?',
        options: ['9', '10', '11', '8'],
        correctAnswer: '9',
        explanation: 'The pattern subtracts 3 each time. 12 - 3 = 9.',
        wrongAnswerExplanations: {
            '10': 'The pattern is subtracting 3, not 2.',
            '11': 'The pattern is subtracting 3, not 1.',
            '8': 'The pattern is subtracting 3, not 4.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch16_t2_qe14',
        type: 'mcq',
        question: 'Which number fits: 1, 3, 6, 10, 15, ?',
        options: ['18', '20', '21', '22'],
        correctAnswer: '21',
        explanation: 'These are triangular numbers: 1, 3, 6, 10, 15, 21.',
        wrongAnswerExplanations: {
            '18': '18 is not a triangular number.',
            '20': '20 is not a triangular number.',
            '22': '22 is not a triangular number.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch16_t2_qe15',
        type: 'mcq',
        question: 'Find the next term: 2, 5, 10, 17, 26, ?',
        options: ['35', '37', '38', '39'],
        correctAnswer: '37',
        explanation: 'The pattern adds consecutive odd numbers: +3, +5, +7, +9, +11.',
        wrongAnswerExplanations: {
            '35': 'The next difference is 11, not 9.',
            '38': 'The next difference is 11, not 12.',
            '39': 'The next difference is 11, not 13.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch16_t2_qe16',
        type: 'mcq',
        question: 'Which comes next: 1, 8, 27, 64, ?',
        options: ['81', '100', '125', '216'],
        correctAnswer: '125',
        explanation: 'These are cubes: 1³, 2³, 3³, 4³, so next is 5³ = 125.',
        wrongAnswerExplanations: {
            '81': '81 is 9², not a cube.',
            '100': '100 is 10², not a cube.',
            '216': '216 is 6³, but next after 64 is 125.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch16_t2_qe17',
        type: 'mcq',
        question: 'What is the next term: 13, 16, 19, 22, ?',
        options: ['24', '25', '27', '28'],
        correctAnswer: '25',
        explanation: 'The pattern adds 3 each time. 22 + 3 = 25.',
        wrongAnswerExplanations: {
            '24': 'The pattern is adding 3, not 2.',
            '27': '27 is after 25 if you add 3 twice.',
            '28': '28 is after 25 if you add 3 three times.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch16_t2_qe18',
        type: 'mcq',
        question: 'Which number completes the pattern: 4, 9, 16, 25, ?',
        options: ['30', '32', '36', '40'],
        correctAnswer: '36',
        explanation: 'These are perfect squares: 2², 3², 4², 5², so next is 6² = 36.',
        wrongAnswerExplanations: {
            '30': '30 is not a perfect square.',
            '32': '32 is not a perfect square.',
            '40': '40 is not a perfect square.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch16_t2_qe19',
        type: 'mcq',
        question: 'What comes next: 2, 3, 5, 7, 11, ?',
        options: ['12', '13', '14', '15'],
        correctAnswer: '13',
        explanation: 'These are prime numbers. 13 is the next prime after 11.',
        wrongAnswerExplanations: {
            '12': '12 is not a prime number.',
            '14': '14 is not a prime number.',
            '15': '15 is not a prime number.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch16_t2_qe20',
        type: 'mcq',
        question: 'Which shape comes next: ▲, ■, ▲, ■, ▲, ?',
        options: ['■', '▲', '●', '◆'],
        correctAnswer: '■',
        explanation: 'The pattern alternates between triangle and square.',
        wrongAnswerExplanations: {
            '▲': 'The pattern alternates, so after ▲ comes ■.',
            '●': 'Circle is not in the pattern.',
            '◆': 'Diamond is not in the pattern.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    }
]; 