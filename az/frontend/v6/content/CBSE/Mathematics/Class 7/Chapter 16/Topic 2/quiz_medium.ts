import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl7_ch16_t2_qm1',
        type: 'mcq',
        question: 'What is the next number in the sequence: 2, 6, 12, 20, 30, ?',
        options: ['36', '40', '42', '44'],
        correctAnswer: '42',
        explanation: 'The pattern adds consecutive even numbers: +4, +6, +8, +10, +12.',
        wrongAnswerExplanations: {
            '36': 'The next difference is 12, not 6.',
            '40': 'The next difference is 12, not 10.',
            '44': 'The next difference is 12, not 14.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch16_t2_qm2',
        type: 'mcq',
        question: 'Find the missing term: 3, 8, 15, 24, 35, ?',
        options: ['46', '48', '50', '52'],
        correctAnswer: '48',
        explanation: 'The pattern adds consecutive odd numbers: +5, +7, +9, +11, +13.',
        wrongAnswerExplanations: {
            '46': 'The next difference is 13, not 11.',
            '50': 'The next difference is 13, not 15.',
            '52': 'The next difference is 13, not 17.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch16_t2_qm3',
        type: 'mcq',
        question: 'What comes next: 1, 4, 9, 16, 25, 36, ?',
        options: ['42', '44', '49', '52'],
        correctAnswer: '49',
        explanation: 'These are perfect squares: 1², 2², 3², 4², 5², 6², 7² = 49.',
        wrongAnswerExplanations: {
            '42': '42 is not a perfect square.',
            '44': '44 is not a perfect square.',
            '52': '52 is not a perfect square.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch16_t2_qm4',
        type: 'mcq',
        question: 'Which number fits: 2, 6, 12, 20, 30, 42, ?',
        options: ['54', '56', '60', '62'],
        correctAnswer: '56',
        explanation: 'The pattern adds consecutive even numbers: +4, +6, +8, +10, +12, +14.',
        wrongAnswerExplanations: {
            '54': 'The next difference is 14, not 12.',
            '60': 'The next difference is 14, not 18.',
            '62': 'The next difference is 14, not 20.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch16_t2_qm5',
        type: 'mcq',
        question: 'What comes next: 5, 10, 17, 26, 37, ?',
        options: ['48', '50', '52', '54'],
        correctAnswer: '50',
        explanation: 'The pattern adds consecutive odd numbers: +5, +7, +9, +11, +13.',
        wrongAnswerExplanations: {
            '48': 'The next difference is 13, not 11.',
            '52': 'The next difference is 13, not 15.',
            '54': 'The next difference is 13, not 17.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch16_t2_qm6',
        type: 'mcq',
        question: 'Which letter comes next: B, E, H, K, ?',
        options: ['L', 'M', 'N', 'O'],
        correctAnswer: 'N',
        explanation: 'The pattern skips two letters each time: B, (C, D), E, (F, G), H, (I, J), K, (L, M), N.',
        wrongAnswerExplanations: {
            'L': 'L is skipped in the pattern.',
            'M': 'M is skipped in the pattern.',
            'O': 'O comes after N.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch16_t2_qm7',
        type: 'mcq',
        question: 'Find the missing number: 8, 27, 64, 125, ?',
        options: ['216', '243', '256', '343'],
        correctAnswer: '216',
        explanation: 'These are cubes: 2³, 3³, 4³, 5³, so next is 6³ = 216.',
        wrongAnswerExplanations: {
            '243': '243 is 3⁵, not a cube.',
            '256': '256 is 4⁴, not a cube.',
            '343': '343 is 7³, but next after 125 is 216.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch16_t2_qm8',
        type: 'mcq',
        question: 'What comes next: 13, 17, 19, 23, 29, ?',
        options: ['31', '33', '35', '37'],
        correctAnswer: '31',
        explanation: 'These are prime numbers. 31 is the next prime after 29.',
        wrongAnswerExplanations: {
            '33': '33 is not a prime number.',
            '35': '35 is not a prime number.',
            '37': '37 is after 31.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch16_t2_qm9',
        type: 'mcq',
        question: 'Which number fits: 1, 3, 7, 15, 31, ?',
        options: ['63', '65', '67', '69'],
        correctAnswer: '63',
        explanation: 'The pattern is 2ⁿ - 1: 2¹-1=1, 2²-1=3, 2³-1=7, 2⁴-1=15, 2⁵-1=31, 2⁶-1=63.',
        wrongAnswerExplanations: {
            '65': '65 is not 2ⁿ-1.',
            '67': '67 is not 2ⁿ-1.',
            '69': '69 is not 2ⁿ-1.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch16_t2_qm10',
        type: 'mcq',
        question: 'Find the missing term: 2, 5, 10, 17, 26, ?',
        options: ['35', '37', '38', '39'],
        correctAnswer: '37',
        explanation: 'The pattern adds consecutive odd numbers: +3, +5, +7, +9, +11.',
        wrongAnswerExplanations: {
            '35': 'The next difference is 11, not 9.',
            '38': 'The next difference is 11, not 12.',
            '39': 'The next difference is 11, not 13.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch16_t2_qm11',
        type: 'mcq',
        question: 'Which letter comes next: D, H, L, P, ?',
        options: ['Q', 'R', 'S', 'T'],
        correctAnswer: 'T',
        explanation: 'The pattern skips three letters each time: D, (E,F,G), H, (I,J,K), L, (M,N,O), P, (Q,R,S), T.',
        wrongAnswerExplanations: {
            'Q': 'Q is skipped in the pattern.',
            'R': 'R is skipped in the pattern.',
            'S': 'S is skipped in the pattern.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch16_t2_qm12',
        type: 'mcq',
        question: 'Find the missing number: 6, 11, 18, 27, ?',
        options: ['36', '37', '38', '39'],
        correctAnswer: '38',
        explanation: 'The pattern adds consecutive odd numbers: +5, +7, +9, +11.',
        wrongAnswerExplanations: {
            '36': 'The next difference is 11, not 9.',
            '37': 'The next difference is 11, not 10.',
            '39': 'The next difference is 11, not 12.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch16_t2_qm13',
        type: 'mcq',
        question: 'What comes next: 4, 9, 19, 39, ?',
        options: ['59', '79', '81', '99'],
        correctAnswer: '79',
        explanation: 'The pattern doubles and subtracts 1: 4×2-1=7, 9×2-1=17, 19×2-1=37, 39×2-1=77.',
        wrongAnswerExplanations: {
            '59': 'The pattern is doubling and subtracting 1.',
            '81': '81 is not part of this pattern.',
            '99': '99 is not part of this pattern.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch16_t2_qm14',
        type: 'mcq',
        question: 'Which number fits: 2, 12, 30, 56, ?',
        options: ['72', '90', '110', '132'],
        correctAnswer: '90',
        explanation: 'The pattern is n³ + n: 1³+1=2, 2³+2=10, 3³+3=30, 4³+4=68, 5³+5=130.',
        wrongAnswerExplanations: {
            '72': '72 does not fit the n³+n pattern.',
            '110': '110 does not fit the n³+n pattern.',
            '132': '132 does not fit the n³+n pattern.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch16_t2_qm15',
        type: 'mcq',
        question: 'What comes next: 1, 2, 6, 24, 120, ?',
        options: ['720', '840', '960', '1080'],
        correctAnswer: '720',
        explanation: 'These are factorials: 1!, 2!, 3!, 4!, 5!, so next is 6! = 720.',
        wrongAnswerExplanations: {
            '840': '840 is not a factorial.',
            '960': '960 is not a factorial.',
            '1080': '1080 is not a factorial.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch16_t2_qm16',
        type: 'mcq',
        question: 'Which comes next: 2, 5, 10, 17, 26, 37, ?',
        options: ['48', '50', '52', '54'],
        correctAnswer: '50',
        explanation: 'The pattern adds consecutive odd numbers: +3, +5, +7, +9, +11, +13.',
        wrongAnswerExplanations: {
            '48': 'The next difference is 13, not 11.',
            '52': 'The next difference is 13, not 15.',
            '54': 'The next difference is 13, not 17.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch16_t2_qm17',
        type: 'mcq',
        question: 'Find the missing term: 1, 3, 7, 15, 31, ?',
        options: ['63', '65', '67', '69'],
        correctAnswer: '63',
        explanation: 'The pattern is 2ⁿ - 1: 2¹-1=1, 2²-1=3, 2³-1=7, 2⁴-1=15, 2⁵-1=31, 2⁶-1=63.',
        wrongAnswerExplanations: {
            '65': '65 is not 2ⁿ-1.',
            '67': '67 is not 2ⁿ-1.',
            '69': '69 is not 2ⁿ-1.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch16_t2_qm18',
        type: 'mcq',
        question: 'What comes next: 2, 4, 8, 16, 32, ?',
        options: ['48', '56', '64', '72'],
        correctAnswer: '64',
        explanation: 'Each number is multiplied by 2. 32 × 2 = 64.',
        wrongAnswerExplanations: {
            '48': 'The pattern is multiplying by 2, not adding 16.',
            '56': 'The pattern is multiplying by 2, not adding 24.',
            '72': 'The pattern is multiplying by 2, not adding 40.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch16_t2_qm19',
        type: 'mcq',
        question: 'Which number fits: 3, 6, 12, 24, 48, ?',
        options: ['72', '84', '96', '120'],
        correctAnswer: '96',
        explanation: 'Each number is multiplied by 2. 48 × 2 = 96.',
        wrongAnswerExplanations: {
            '72': 'The pattern is multiplying by 2, not adding 24.',
            '84': 'The pattern is multiplying by 2, not adding 36.',
            '120': 'The pattern is multiplying by 2, not adding 72.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch16_t2_qm20',
        type: 'mcq',
        question: 'What comes next: 5, 11, 23, 47, ?',
        options: ['95', '97', '99', '101'],
        correctAnswer: '95',
        explanation: 'The pattern doubles and adds 1: 5×2+1=11, 11×2+1=23, 23×2+1=47, 47×2+1=95.',
        wrongAnswerExplanations: {
            '97': 'The pattern is doubling and adding 1, not 2.',
            '99': 'The pattern is doubling and adding 1, not 3.',
            '101': 'The pattern is doubling and adding 1, not 6.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    }
]; 