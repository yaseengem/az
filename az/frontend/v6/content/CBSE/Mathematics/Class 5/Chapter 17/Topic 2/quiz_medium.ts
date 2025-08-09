import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl5_ch17_t2_qm1',
        type: 'mcq',
        question: 'If a recipe calls for 3/4 cup of milk and you only have a 1/4 cup measure, how many times do you need to fill it?',
        options: [
            '2 times',
            '3 times',
            '4 times',
            '5 times'
        ],
        correctAnswer: '3 times',
        explanation: '3/4 cup = 3 × 1/4 cup. Each 1/4 cup measure filled 3 times equals 3/4 cup.',
        wrongAnswerExplanations: {
            '2 times': 'This would give you 1/2 cup, which is less than 3/4 cup.',
            '4 times': 'This would give you 1 cup, which is more than 3/4 cup.',
            '5 times': 'This would give you 1 1/4 cups, which is too much.'
        },
        difficulty: 'medium',
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch17_t2_qm2',
        type: 'mcq',
        question: 'If you need 500 ml of water and only have a 1/4 cup measure (60 ml), how many times do you need to fill it?',
        options: [
            '6 times',
            '7 times',
            '8 times',
            '9 times'
        ],
        correctAnswer: '8 times',
        explanation: '500 ml ÷ 60 ml = 8.33, so you need to fill the 1/4 cup measure 8 times to get close to 500 ml.',
        wrongAnswerExplanations: {
            '6 times': 'This would give you 360 ml, which is less than 500 ml.',
            '7 times': 'This would give you 420 ml, which is less than 500 ml.',
            '9 times': 'This would give you 540 ml, which is more than 500 ml.'
        },
        difficulty: 'medium',
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch17_t2_qm3',
        type: 'mcq',
        question: 'If a recipe calls for 1.5 kg of flour and you only have a 500 g measure, how many times do you need to use it?',
        options: [
            '2 times',
            '3 times',
            '4 times',
            '5 times'
        ],
        correctAnswer: '3 times',
        explanation: '1.5 kg = 1500 g. 1500 g ÷ 500 g = 3 times.',
        wrongAnswerExplanations: {
            '2 times': 'This would give you 1 kg, which is less than 1.5 kg.',
            '4 times': 'This would give you 2 kg, which is more than 1.5 kg.',
            '5 times': 'This would give you 2.5 kg, which is too much.'
        },
        difficulty: 'medium',
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch17_t2_qm4',
        type: 'mcq',
        question: 'If you need 750 ml of oil and have a 1 cup measure (240 ml), how many cups do you need?',
        options: [
            '2 cups',
            '2.5 cups',
            '3 cups',
            '3.5 cups'
        ],
        correctAnswer: '3 cups',
        explanation: '750 ml ÷ 240 ml = 3.125, so you need 3 cups to get close to 750 ml.',
        wrongAnswerExplanations: {
            '2 cups': 'This would give you 480 ml, which is less than 750 ml.',
            '2.5 cups': 'This would give you 600 ml, which is less than 750 ml.',
            '3.5 cups': 'This would give you 840 ml, which is more than 750 ml.'
        },
        difficulty: 'medium',
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch17_t2_qm5',
        type: 'mcq',
        question: 'If a recipe calls for 2 tablespoons of sugar and you only have a teaspoon measure, how many teaspoons do you need?',
        options: [
            '4 teaspoons',
            '5 teaspoons',
            '6 teaspoons',
            '7 teaspoons'
        ],
        correctAnswer: '6 teaspoons',
        explanation: '1 tablespoon = 3 teaspoons, so 2 tablespoons = 6 teaspoons.',
        wrongAnswerExplanations: {
            '4 teaspoons': 'This is less than 2 tablespoons.',
            '5 teaspoons': 'This is less than 2 tablespoons.',
            '7 teaspoons': 'This is more than 2 tablespoons.'
        },
        difficulty: 'medium',
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch17_t2_qm6',
        type: 'mcq',
        question: 'If you need 1.2 L of water and have a 500 ml measure, how many times do you need to fill it?',
        options: [
            '2 times',
            '2.5 times',
            '3 times',
            '3.5 times'
        ],
        correctAnswer: '2.5 times',
        explanation: '1.2 L = 1200 ml. 1200 ml ÷ 500 ml = 2.4, so you need to fill the measure 2.5 times.',
        wrongAnswerExplanations: {
            '2 times': 'This would give you 1 L, which is less than 1.2 L.',
            '3 times': 'This would give you 1.5 L, which is more than 1.2 L.',
            '3.5 times': 'This would give you 1.75 L, which is too much.'
        },
        difficulty: 'medium',
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch17_t2_qm7',
        type: 'mcq',
        question: 'If a recipe calls for 3/4 cup of butter (170 g) and you only have a kitchen scale, how many grams do you need?',
        options: [
            '150 g',
            '170 g',
            '190 g',
            '210 g'
        ],
        correctAnswer: '170 g',
        explanation: '3/4 cup of butter is equivalent to 170 grams.',
        wrongAnswerExplanations: {
            '150 g': 'This is less than 3/4 cup of butter.',
            '190 g': 'This is more than 3/4 cup of butter.',
            '210 g': 'This is more than 3/4 cup of butter.'
        },
        difficulty: 'medium',
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch17_t2_qm8',
        type: 'mcq',
        question: 'If you need 1/3 cup of milk and only have a tablespoon measure, how many tablespoons do you need?',
        options: [
            '4 tablespoons',
            '5 tablespoons',
            '6 tablespoons',
            '7 tablespoons'
        ],
        correctAnswer: '5 tablespoons',
        explanation: '1/3 cup = 5 tablespoons + 1 teaspoon. Since we only have tablespoons, we use 5 tablespoons.',
        wrongAnswerExplanations: {
            '4 tablespoons': 'This is less than 1/3 cup.',
            '6 tablespoons': 'This is more than 1/3 cup.',
            '7 tablespoons': 'This is more than 1/3 cup.'
        },
        difficulty: 'medium',
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch17_t2_qm9',
        type: 'mcq',
        question: 'If a recipe calls for 2.5 kg of sugar and you only have a 1 kg measure, how many times do you need to use it?',
        options: [
            '2 times',
            '2.5 times',
            '3 times',
            '3.5 times'
        ],
        correctAnswer: '2.5 times',
        explanation: '2.5 kg ÷ 1 kg = 2.5 times.',
        wrongAnswerExplanations: {
            '2 times': 'This would give you 2 kg, which is less than 2.5 kg.',
            '3 times': 'This would give you 3 kg, which is more than 2.5 kg.',
            '3.5 times': 'This would give you 3.5 kg, which is too much.'
        },
        difficulty: 'medium',
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch17_t2_qm10',
        type: 'mcq',
        question: 'If you need 900 ml of water and have a 1/2 cup measure (120 ml), how many times do you need to fill it?',
        options: [
            '6 times',
            '7 times',
            '8 times',
            '9 times'
        ],
        correctAnswer: '7 times',
        explanation: '900 ml ÷ 120 ml = 7.5, so you need to fill the 1/2 cup measure 7 times to get close to 900 ml.',
        wrongAnswerExplanations: {
            '6 times': 'This would give you 720 ml, which is less than 900 ml.',
            '8 times': 'This would give you 960 ml, which is more than 900 ml.',
            '9 times': 'This would give you 1080 ml, which is too much.'
        },
        difficulty: 'medium',
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch17_t2_qm11',
        type: 'mcq',
        question: 'If a recipe calls for 1/2 cup of oil (120 ml) and you only have a tablespoon measure, how many tablespoons do you need?',
        options: [
            '6 tablespoons',
            '7 tablespoons',
            '8 tablespoons',
            '9 tablespoons'
        ],
        correctAnswer: '8 tablespoons',
        explanation: '1/2 cup = 8 tablespoons. This is a standard conversion in cooking.',
        wrongAnswerExplanations: {
            '6 tablespoons': 'This is less than 1/2 cup.',
            '7 tablespoons': 'This is less than 1/2 cup.',
            '9 tablespoons': 'This is more than 1/2 cup.'
        },
        difficulty: 'medium',
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch17_t2_qm12',
        type: 'mcq',
        question: 'If you need 1.8 kg of flour and have a 500 g measure, how many times do you need to use it?',
        options: [
            '3 times',
            '3.5 times',
            '4 times',
            '4.5 times'
        ],
        correctAnswer: '4 times',
        explanation: '1.8 kg = 1800 g. 1800 g ÷ 500 g = 3.6, so you need to use the measure 4 times to get close to 1.8 kg.',
        wrongAnswerExplanations: {
            '3 times': 'This would give you 1.5 kg, which is less than 1.8 kg.',
            '3.5 times': 'This would give you 1.75 kg, which is less than 1.8 kg.',
            '4.5 times': 'This would give you 2.25 kg, which is more than 1.8 kg.'
        },
        difficulty: 'medium',
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch17_t2_qm13',
        type: 'mcq',
        question: 'If a recipe calls for 1 1/4 cups of milk and you only have a 1/4 cup measure, how many times do you need to fill it?',
        options: [
            '4 times',
            '5 times',
            '6 times',
            '7 times'
        ],
        correctAnswer: '5 times',
        explanation: '1 1/4 cups = 5 × 1/4 cup. Each 1/4 cup measure filled 5 times equals 1 1/4 cups.',
        wrongAnswerExplanations: {
            '4 times': 'This would give you 1 cup, which is less than 1 1/4 cups.',
            '6 times': 'This would give you 1 1/2 cups, which is more than 1 1/4 cups.',
            '7 times': 'This would give you 1 3/4 cups, which is too much.'
        },
        difficulty: 'medium',
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch17_t2_qm14',
        type: 'mcq',
        question: 'If you need 1.5 L of water and have a 250 ml measure, how many times do you need to fill it?',
        options: [
            '4 times',
            '5 times',
            '6 times',
            '7 times'
        ],
        correctAnswer: '6 times',
        explanation: '1.5 L = 1500 ml. 1500 ml ÷ 250 ml = 6 times.',
        wrongAnswerExplanations: {
            '4 times': 'This would give you 1 L, which is less than 1.5 L.',
            '5 times': 'This would give you 1.25 L, which is less than 1.5 L.',
            '7 times': 'This would give you 1.75 L, which is more than 1.5 L.'
        },
        difficulty: 'medium',
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch17_t2_qm15',
        type: 'mcq',
        question: 'If a recipe calls for 3/4 cup of sugar (150 g) and you only have a kitchen scale, how many grams do you need?',
        options: [
            '140 g',
            '150 g',
            '160 g',
            '170 g'
        ],
        correctAnswer: '150 g',
        explanation: '3/4 cup of sugar is equivalent to 150 grams.',
        wrongAnswerExplanations: {
            '140 g': 'This is less than 3/4 cup of sugar.',
            '160 g': 'This is more than 3/4 cup of sugar.',
            '170 g': 'This is more than 3/4 cup of sugar.'
        },
        difficulty: 'medium',
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch17_t2_qm16',
        type: 'mcq',
        question: 'If you need 2/3 cup of flour and only have a 1/3 cup measure, how many times do you need to fill it?',
        options: [
            '1 time',
            '2 times',
            '3 times',
            '4 times'
        ],
        correctAnswer: '2 times',
        explanation: '2/3 cup = 2 × 1/3 cup. Each 1/3 cup measure filled 2 times equals 2/3 cup.',
        wrongAnswerExplanations: {
            '1 time': 'This would give you 1/3 cup, which is less than 2/3 cup.',
            '3 times': 'This would give you 1 cup, which is more than 2/3 cup.',
            '4 times': 'This would give you 1 1/3 cups, which is too much.'
        },
        difficulty: 'medium',
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch17_t2_qm17',
        type: 'mcq',
        question: 'If a recipe calls for 1.2 kg of rice and you only have a 300 g measure, how many times do you need to use it?',
        options: [
            '3 times',
            '4 times',
            '5 times',
            '6 times'
        ],
        correctAnswer: '4 times',
        explanation: '1.2 kg = 1200 g. 1200 g ÷ 300 g = 4 times.',
        wrongAnswerExplanations: {
            '3 times': 'This would give you 900 g, which is less than 1.2 kg.',
            '5 times': 'This would give you 1.5 kg, which is more than 1.2 kg.',
            '6 times': 'This would give you 1.8 kg, which is too much.'
        },
        difficulty: 'medium',
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch17_t2_qm18',
        type: 'mcq',
        question: 'If you need 1 1/2 cups of water and have a 1/2 cup measure, how many times do you need to fill it?',
        options: [
            '2 times',
            '3 times',
            '4 times',
            '5 times'
        ],
        correctAnswer: '3 times',
        explanation: '1 1/2 cups = 3 × 1/2 cup. Each 1/2 cup measure filled 3 times equals 1 1/2 cups.',
        wrongAnswerExplanations: {
            '2 times': 'This would give you 1 cup, which is less than 1 1/2 cups.',
            '4 times': 'This would give you 2 cups, which is more than 1 1/2 cups.',
            '5 times': 'This would give you 2 1/2 cups, which is too much.'
        },
        difficulty: 'medium',
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch17_t2_qm19',
        type: 'mcq',
        question: 'If a recipe calls for 2 1/4 cups of flour and you only have a 1/4 cup measure, how many times do you need to fill it?',
        options: [
            '7 times',
            '8 times',
            '9 times',
            '10 times'
        ],
        correctAnswer: '9 times',
        explanation: '2 1/4 cups = 9 × 1/4 cup. Each 1/4 cup measure filled 9 times equals 2 1/4 cups.',
        wrongAnswerExplanations: {
            '7 times': 'This would give you 1 3/4 cups, which is less than 2 1/4 cups.',
            '8 times': 'This would give you 2 cups, which is less than 2 1/4 cups.',
            '10 times': 'This would give you 2 1/2 cups, which is more than 2 1/4 cups.'
        },
        difficulty: 'medium',
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch17_t2_qm20',
        type: 'mcq',
        question: 'If you need 2.5 L of water and have a 500 ml measure, how many times do you need to fill it?',
        options: [
            '4 times',
            '5 times',
            '6 times',
            '7 times'
        ],
        correctAnswer: '5 times',
        explanation: '2.5 L = 2500 ml. 2500 ml ÷ 500 ml = 5 times.',
        wrongAnswerExplanations: {
            '4 times': 'This would give you 2 L, which is less than 2.5 L.',
            '6 times': 'This would give you 3 L, which is more than 2.5 L.',
            '7 times': 'This would give you 3.5 L, which is too much.'
        },
        difficulty: 'medium',
        marks: 1,
        recommendedTime: 45
    }
];
