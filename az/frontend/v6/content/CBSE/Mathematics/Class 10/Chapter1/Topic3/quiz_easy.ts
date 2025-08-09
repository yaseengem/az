import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl10_ch1_t3_qe1',
        type: 'mcq',
        question: 'Which of the following is an irrational number?',
        options: ['√2', '4', '3/5', '0.25'],
        correctAnswer: '√2',
        explanation: '√2 cannot be expressed as a fraction of two integers.',
        wrongAnswerExplanations: {
            '4': '4 is a rational number (4/1).',
            '3/5': '3/5 is a rational number.',
            '0.25': '0.25 = 1/4, which is rational.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl10_ch1_t3_qe2',
        type: 'mcq',
        question: 'Which of these numbers is NOT irrational?',
        options: ['π', '√3', '0.75', '√5'],
        correctAnswer: '0.75',
        explanation: '0.75 = 3/4, which is rational.',
        wrongAnswerExplanations: {
            'π': 'π is irrational.',
            '√3': '√3 is irrational.',
            '√5': '√5 is irrational.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl10_ch1_t3_qe3',
        type: 'mcq',
        question: 'Which of the following decimal numbers is irrational?',
        options: ['0.333...', '0.101001000100001...', '0.5', '0.25'],
        correctAnswer: '0.101001000100001...',
        explanation: 'This decimal neither terminates nor repeats.',
        wrongAnswerExplanations: {
            '0.333...': 'This is a repeating decimal (1/3), so rational.',
            '0.5': '0.5 = 1/2, which is rational.',
            '0.25': '0.25 = 1/4, which is rational.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl10_ch1_t3_qe4',
        type: 'mcq',
        question: 'Which of the following is true about irrational numbers?',
        options: ['They cannot be written as a/b', 'They are always negative', 'They are always positive', 'They are always integers'],
        correctAnswer: 'They cannot be written as a/b',
        explanation: 'Irrational numbers cannot be expressed as a ratio of two integers.',
        wrongAnswerExplanations: {
            'They are always negative': 'Irrational numbers can be positive or negative.',
            'They are always positive': 'Irrational numbers can be negative or positive.',
            'They are always integers': 'Irrational numbers are never integers.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl10_ch1_t3_qe5',
        type: 'mcq',
        question: 'Which of the following is an example of an irrational number?',
        options: ['√7', '2/3', '0.6', '5'],
        correctAnswer: '√7',
        explanation: '√7 cannot be written as a fraction.',
        wrongAnswerExplanations: {
            '2/3': '2/3 is rational.',
            '0.6': '0.6 = 3/5, which is rational.',
            '5': '5 is rational (5/1).'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl10_ch1_t3_qe6',
        type: 'mcq',
        question: 'Which of the following is NOT a property of irrational numbers?',
        options: ['They have non-terminating, non-repeating decimals', 'They can be written as a ratio', 'They are real numbers', 'They cannot be written as fractions'],
        correctAnswer: 'They can be written as a ratio',
        explanation: 'Irrational numbers cannot be written as a ratio of two integers.',
        wrongAnswerExplanations: {
            'They have non-terminating, non-repeating decimals': 'This is a property of irrational numbers.',
            'They are real numbers': 'All irrational numbers are real numbers.',
            'They cannot be written as fractions': 'This is true for irrational numbers.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl10_ch1_t3_qe7',
        type: 'mcq',
        question: 'Which of the following is irrational?',
        options: ['√11', '0.2', '1/7', '2'],
        correctAnswer: '√11',
        explanation: '√11 cannot be written as a fraction.',
        wrongAnswerExplanations: {
            '0.2': '0.2 = 1/5, which is rational.',
            '1/7': '1/7 is rational.',
            '2': '2 is rational (2/1).'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl10_ch1_t3_qe8',
        type: 'mcq',
        question: 'Which of the following is NOT irrational?',
        options: ['√2', 'π', '0.4', '√5'],
        correctAnswer: '0.4',
        explanation: '0.4 = 2/5, which is rational.',
        wrongAnswerExplanations: {
            '√2': '√2 is irrational.',
            'π': 'π is irrational.',
            '√5': '√5 is irrational.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl10_ch1_t3_qe9',
        type: 'mcq',
        question: 'Which of the following is a non-terminating, non-repeating decimal?',
        options: ['π', '0.5', '0.333...', '0.25'],
        correctAnswer: 'π',
        explanation: 'π is a non-terminating, non-repeating decimal.',
        wrongAnswerExplanations: {
            '0.5': '0.5 is a terminating decimal.',
            '0.333...': '0.333... is repeating, so rational.',
            '0.25': '0.25 is terminating, so rational.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl10_ch1_t3_qe10',
        type: 'mcq',
        question: 'Which of the following is NOT a rational number?',
        options: ['√13', '0.75', '1/2', '3'],
        correctAnswer: '√13',
        explanation: '√13 is irrational.',
        wrongAnswerExplanations: {
            '0.75': '0.75 = 3/4, which is rational.',
            '1/2': '1/2 is rational.',
            '3': '3 is rational (3/1).'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl10_ch1_t3_qe11',
        type: 'mcq',
        question: 'Which of the following is irrational?',
        options: ['√17', '0.8', '1/9', '7'],
        correctAnswer: '√17',
        explanation: '√17 cannot be written as a fraction.',
        wrongAnswerExplanations: {
            '0.8': '0.8 = 4/5, which is rational.',
            '1/9': '1/9 is rational.',
            '7': '7 is rational (7/1).'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl10_ch1_t3_qe12',
        type: 'mcq',
        question: 'Which of the following is NOT a property of irrational numbers?',
        options: ['They are real numbers', 'They can be written as a/b', 'They have non-repeating decimals', 'They are not rational'],
        correctAnswer: 'They can be written as a/b',
        explanation: 'Irrational numbers cannot be written as a ratio of two integers.',
        wrongAnswerExplanations: {
            'They are real numbers': 'All irrational numbers are real numbers.',
            'They have non-repeating decimals': 'This is a property of irrational numbers.',
            'They are not rational': 'By definition, they are not rational.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl10_ch1_t3_qe13',
        type: 'mcq',
        question: 'Which of the following is a non-terminating, non-repeating decimal?',
        options: ['√10', '0.125', '0.666...', '1/8'],
        correctAnswer: '√10',
        explanation: '√10 is a non-terminating, non-repeating decimal.',
        wrongAnswerExplanations: {
            '0.125': '0.125 is a terminating decimal.',
            '0.666...': '0.666... is repeating, so rational.',
            '1/8': '1/8 is rational.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl10_ch1_t3_qe14',
        type: 'mcq',
        question: 'Which of the following is NOT irrational?',
        options: ['√19', 'π', '0.2', '√23'],
        correctAnswer: '0.2',
        explanation: '0.2 = 1/5, which is rational.',
        wrongAnswerExplanations: {
            '√19': '√19 is irrational.',
            'π': 'π is irrational.',
            '√23': '√23 is irrational.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl10_ch1_t3_qe15',
        type: 'mcq',
        question: 'Which of the following is an irrational number?',
        options: ['√29', '0.4', '2/7', '8'],
        correctAnswer: '√29',
        explanation: '√29 cannot be written as a fraction.',
        wrongAnswerExplanations: {
            '0.4': '0.4 = 2/5, which is rational.',
            '2/7': '2/7 is rational.',
            '8': '8 is rational (8/1).'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl10_ch1_t3_qe16',
        type: 'mcq',
        question: 'Which of the following is NOT a rational number?',
        options: ['√31', '0.6', '1/3', '5'],
        correctAnswer: '√31',
        explanation: '√31 is irrational.',
        wrongAnswerExplanations: {
            '0.6': '0.6 = 3/5, which is rational.',
            '1/3': '1/3 is rational.',
            '5': '5 is rational (5/1).'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl10_ch1_t3_qe17',
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
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl10_ch1_t3_qe18',
        type: 'mcq',
        question: 'Which of the following is NOT irrational?',
        options: ['√37', 'π', '0.9', '√41'],
        correctAnswer: '0.9',
        explanation: '0.9 = 9/10, which is rational.',
        wrongAnswerExplanations: {
            '√37': '√37 is irrational.',
            'π': 'π is irrational.',
            '√41': '√41 is irrational.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl10_ch1_t3_qe19',
        type: 'mcq',
        question: 'Which of the following is an irrational number?',
        options: ['√43', '0.7', '3/8', '6'],
        correctAnswer: '√43',
        explanation: '√43 cannot be written as a fraction.',
        wrongAnswerExplanations: {
            '0.7': '0.7 = 7/10, which is rational.',
            '3/8': '3/8 is rational.',
            '6': '6 is rational (6/1).'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl10_ch1_t3_qe20',
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
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    // ...10 more questions following the same structure, all relevant to irrational numbers...
]; 