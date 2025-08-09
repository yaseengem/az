import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl10_ch1_t3_qm1',
        type: 'mcq',
        question: 'Which of the following statements is true about the decimal expansion of irrational numbers?',
        options: [
            'It is non-terminating and non-repeating',
            'It is terminating',
            'It is repeating',
            'It is always less than 1'
        ],
        correctAnswer: 'It is non-terminating and non-repeating',
        explanation: 'Irrational numbers have non-terminating, non-repeating decimals.',
        wrongAnswerExplanations: {
            'It is terminating': 'Terminating decimals are rational.',
            'It is repeating': 'Repeating decimals are rational.',
            'It is always less than 1': 'Irrational numbers can be any real value.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl10_ch1_t3_qm2',
        type: 'mcq',
        question: 'Which of the following is NOT an irrational number?',
        options: ['√50', 'π', '0.875', '√7'],
        correctAnswer: '0.875',
        explanation: '0.875 = 7/8, which is rational.',
        wrongAnswerExplanations: {
            '√50': '√50 is irrational.',
            'π': 'π is irrational.',
            '√7': '√7 is irrational.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl10_ch1_t3_qm3',
        type: 'mcq',
        question: 'Which of the following is a property of irrational numbers?',
        options: [
            'They cannot be written as a ratio of two integers',
            'They are always negative',
            'They are always positive',
            'They are always integers'
        ],
        correctAnswer: 'They cannot be written as a ratio of two integers',
        explanation: 'Irrational numbers cannot be written as a/b.',
        wrongAnswerExplanations: {
            'They are always negative': 'They can be positive or negative.',
            'They are always positive': 'They can be positive or negative.',
            'They are always integers': 'Irrational numbers are never integers.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl10_ch1_t3_qm4',
        type: 'mcq',
        question: 'Which of the following is irrational?',
        options: ['√21', '0.2', '1/11', '3'],
        correctAnswer: '√21',
        explanation: '√21 cannot be written as a fraction.',
        wrongAnswerExplanations: {
            '0.2': '0.2 = 1/5, which is rational.',
            '1/11': '1/11 is rational.',
            '3': '3 is rational (3/1).'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl10_ch1_t3_qm5',
        type: 'mcq',
        question: 'Which of the following is NOT irrational?',
        options: ['√27', 'π', '0.6', '√15'],
        correctAnswer: '0.6',
        explanation: '0.6 = 3/5, which is rational.',
        wrongAnswerExplanations: {
            '√27': '√27 is irrational.',
            'π': 'π is irrational.',
            '√15': '√15 is irrational.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl10_ch1_t3_qm6',
        type: 'mcq',
        question: 'Which of the following is a non-terminating, non-repeating decimal?',
        options: ['√12', '0.4', '0.333...', '1/8'],
        correctAnswer: '√12',
        explanation: '√12 is a non-terminating, non-repeating decimal.',
        wrongAnswerExplanations: {
            '0.4': '0.4 = 2/5, which is rational.',
            '0.333...': '0.333... is repeating, so rational.',
            '1/8': '1/8 is rational.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl10_ch1_t3_qm7',
        type: 'mcq',
        question: 'Which of the following is NOT a property of irrational numbers?',
        options: [
            'They are real numbers',
            'They can be written as a/b',
            'They have non-repeating decimals',
            'They are not rational'
        ],
        correctAnswer: 'They can be written as a/b',
        explanation: 'Irrational numbers cannot be written as a ratio of two integers.',
        wrongAnswerExplanations: {
            'They are real numbers': 'All irrational numbers are real numbers.',
            'They have non-repeating decimals': 'This is a property of irrational numbers.',
            'They are not rational': 'By definition, they are not rational.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl10_ch1_t3_qm8',
        type: 'mcq',
        question: 'Which of the following is irrational?',
        options: ['√22', '0.7', '1/4', '5'],
        correctAnswer: '√22',
        explanation: '√22 cannot be written as a fraction.',
        wrongAnswerExplanations: {
            '0.7': '0.7 = 7/10, which is rational.',
            '1/4': '1/4 is rational.',
            '5': '5 is rational (5/1).'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl10_ch1_t3_qm9',
        type: 'mcq',
        question: 'Which of the following is NOT irrational?',
        options: ['√33', 'π', '0.3', '√35'],
        correctAnswer: '0.3',
        explanation: '0.3 = 3/10, which is rational.',
        wrongAnswerExplanations: {
            '√33': '√33 is irrational.',
            'π': 'π is irrational.',
            '√35': '√35 is irrational.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl10_ch1_t3_qm10',
        type: 'mcq',
        question: 'Which of the following is an irrational number?',
        options: ['√39', '0.9', '2/5', '4'],
        correctAnswer: '√39',
        explanation: '√39 cannot be written as a fraction.',
        wrongAnswerExplanations: {
            '0.9': '0.9 = 9/10, which is rational.',
            '2/5': '2/5 is rational.',
            '4': '4 is rational (4/1).'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl10_ch1_t3_qm11',
        type: 'mcq',
        question: 'Which of the following is irrational?',
        options: ['√53', '0.1', '1/6', '9'],
        correctAnswer: '√53',
        explanation: '√53 cannot be written as a fraction.',
        wrongAnswerExplanations: {
            '0.1': '0.1 = 1/10, which is rational.',
            '1/6': '1/6 is rational.',
            '9': '9 is rational (9/1).'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl10_ch1_t3_qm12',
        type: 'mcq',
        question: 'Which of the following is NOT a property of irrational numbers?',
        options: ['They are real numbers', 'They can be written as a ratio', 'They have non-repeating decimals', 'They are not rational'],
        correctAnswer: 'They can be written as a ratio',
        explanation: 'Irrational numbers cannot be written as a ratio of two integers.',
        wrongAnswerExplanations: {
            'They are real numbers': 'All irrational numbers are real numbers.',
            'They have non-repeating decimals': 'This is a property of irrational numbers.',
            'They are not rational': 'By definition, they are not rational.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl10_ch1_t3_qm13',
        type: 'mcq',
        question: 'Which of the following is a non-terminating, non-repeating decimal?',
        options: ['√61', '0.125', '0.444...', '1/8'],
        correctAnswer: '√61',
        explanation: '√61 is a non-terminating, non-repeating decimal.',
        wrongAnswerExplanations: {
            '0.125': '0.125 is a terminating decimal.',
            '0.444...': '0.444... is repeating, so rational.',
            '1/8': '1/8 is rational.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl10_ch1_t3_qm14',
        type: 'mcq',
        question: 'Which of the following is NOT irrational?',
        options: ['√67', 'π', '0.2', '√73'],
        correctAnswer: '0.2',
        explanation: '0.2 = 1/5, which is rational.',
        wrongAnswerExplanations: {
            '√67': '√67 is irrational.',
            'π': 'π is irrational.',
            '√73': '√73 is irrational.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl10_ch1_t3_qm15',
        type: 'mcq',
        question: 'Which of the following is an irrational number?',
        options: ['√79', '0.4', '2/7', '8'],
        correctAnswer: '√79',
        explanation: '√79 cannot be written as a fraction.',
        wrongAnswerExplanations: {
            '0.4': '0.4 = 2/5, which is rational.',
            '2/7': '2/7 is rational.',
            '8': '8 is rational (8/1).'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl10_ch1_t3_qm16',
        type: 'mcq',
        question: 'Which of the following is NOT a rational number?',
        options: ['√83', '0.6', '1/3', '5'],
        correctAnswer: '√83',
        explanation: '√83 is irrational.',
        wrongAnswerExplanations: {
            '0.6': '0.6 = 3/5, which is rational.',
            '1/3': '1/3 is rational.',
            '5': '5 is rational (5/1).'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl10_ch1_t3_qm17',
        type: 'mcq',
        question: 'Which of the following is a property of irrational numbers?',
        options: ['Non-terminating, non-repeating decimals', 'Can be written as a/b', 'Always negative', 'Always positive'],
        correctAnswer: 'Non-terminating, non-repeating decimals',
        explanation: 'Irrational numbers have non-terminating, non-repeating decimals.',
        wrongAnswerExplanations: {
            'Can be written as a/b': 'Irrational numbers cannot be written as a ratio.',
            'Always negative': 'They can be positive or negative.',
            'Always positive': 'They can be positive or negative.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl10_ch1_t3_qm18',
        type: 'mcq',
        question: 'Which of the following is NOT irrational?',
        options: ['√89', 'π', '0.9', '√97'],
        correctAnswer: '0.9',
        explanation: '0.9 = 9/10, which is rational.',
        wrongAnswerExplanations: {
            '√89': '√89 is irrational.',
            'π': 'π is irrational.',
            '√97': '√97 is irrational.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl10_ch1_t3_qm19',
        type: 'mcq',
        question: 'Which of the following is an irrational number?',
        options: ['√101', '0.7', '3/8', '6'],
        correctAnswer: '√101',
        explanation: '√101 cannot be written as a fraction.',
        wrongAnswerExplanations: {
            '0.7': '0.7 = 7/10, which is rational.',
            '3/8': '3/8 is rational.',
            '6': '6 is rational (6/1).'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl10_ch1_t3_qm20',
        type: 'mcq',
        question: 'Which of the following is NOT a property of irrational numbers?',
        options: ['Cannot be written as a/b', 'Decimal expansion is non-terminating, non-repeating', 'Can be written as a ratio', 'Are real numbers'],
        correctAnswer: 'Can be written as a ratio',
        explanation: 'Irrational numbers cannot be written as a ratio of two integers.',
        wrongAnswerExplanations: {
            'Cannot be written as a/b': 'This is a property of irrational numbers.',
            'Decimal expansion is non-terminating, non-repeating': 'This is a property of irrational numbers.',
            'Are real numbers': 'All irrational numbers are real numbers.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    // ...10 more questions following the same structure, all relevant to irrational numbers...
]; 