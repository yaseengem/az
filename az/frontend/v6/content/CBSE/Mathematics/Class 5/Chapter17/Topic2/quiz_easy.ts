import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl5_ch17_t2_qe1',
        type: 'mcq',
        question: 'How many milliliters are in 1 liter?',
        options: [
            '10',
            '100',
            '1000',
            '10000'
        ],
        correctAnswer: '1000',
        explanation: '1 liter (L) = 1000 milliliters (ml). This is a basic conversion in the metric system.',
        wrongAnswerExplanations: {
            '10': 'This is too small. Remember that 1 liter is 1000 milliliters.',
            '100': 'This is too small. Remember that 1 liter is 1000 milliliters.',
            '10000': 'This is too large. Remember that 1 liter is 1000 milliliters.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch17_t2_qe2',
        type: 'mcq',
        question: 'Which unit would you use to measure a small amount of vanilla extract?',
        options: [
            'Liters',
            'Milliliters',
            'Kilograms',
            'Grams'
        ],
        correctAnswer: 'Milliliters',
        explanation: 'Vanilla extract is a liquid and is typically measured in small amounts using milliliters (ml).',
        wrongAnswerExplanations: {
            'Liters': 'Liters are too large for measuring small amounts of vanilla extract.',
            'Kilograms': 'Kilograms are used for measuring weight, not liquids.',
            'Grams': 'Grams are used for measuring weight, not liquids.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch17_t2_qe3',
        type: 'mcq',
        question: 'How many grams are in 1 kilogram?',
        options: [
            '10',
            '100',
            '1000',
            '10000'
        ],
        correctAnswer: '1000',
        explanation: '1 kilogram (kg) = 1000 grams (g). This is a basic conversion in the metric system.',
        wrongAnswerExplanations: {
            '10': 'This is too small. Remember that 1 kilogram is 1000 grams.',
            '100': 'This is too small. Remember that 1 kilogram is 1000 grams.',
            '10000': 'This is too large. Remember that 1 kilogram is 1000 grams.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch17_t2_qe4',
        type: 'mcq',
        question: 'Which tool would you use to measure 250 ml of milk?',
        options: [
            'Kitchen scale',
            'Measuring cup',
            'Measuring spoon',
            'Ruler'
        ],
        correctAnswer: 'Measuring cup',
        explanation: 'A measuring cup is used to measure liquid volumes like milk.',
        wrongAnswerExplanations: {
            'Kitchen scale': 'A kitchen scale measures weight, not volume.',
            'Measuring spoon': 'Measuring spoons are too small for 250 ml.',
            'Ruler': 'A ruler measures length, not volume.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch17_t2_qe5',
        type: 'mcq',
        question: 'How many milliliters are in 1 cup?',
        options: [
            '120 ml',
            '180 ml',
            '240 ml',
            '300 ml'
        ],
        correctAnswer: '240 ml',
        explanation: '1 cup = 240 milliliters (ml). This is a standard conversion in cooking.',
        wrongAnswerExplanations: {
            '120 ml': 'This is half a cup.',
            '180 ml': 'This is three-quarters of a cup.',
            '300 ml': 'This is more than a cup.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch17_t2_qe6',
        type: 'mcq',
        question: 'Which unit would you use to measure 500 g of flour?',
        options: [
            'Liters',
            'Milliliters',
            'Kilograms',
            'Grams'
        ],
        correctAnswer: 'Grams',
        explanation: 'Flour is typically measured by weight, and 500 g is a common measurement.',
        wrongAnswerExplanations: {
            'Liters': 'Liters measure volume, not weight.',
            'Milliliters': 'Milliliters measure volume, not weight.',
            'Kilograms': '500 g is less than 1 kg, so grams would be more appropriate.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch17_t2_qe7',
        type: 'mcq',
        question: 'How many milliliters are in 1 tablespoon?',
        options: [
            '5 ml',
            '10 ml',
            '15 ml',
            '20 ml'
        ],
        correctAnswer: '15 ml',
        explanation: '1 tablespoon = 15 milliliters (ml). This is a standard conversion in cooking.',
        wrongAnswerExplanations: {
            '5 ml': 'This is 1 teaspoon.',
            '10 ml': 'This is incorrect. 1 tablespoon is 15 ml.',
            '20 ml': 'This is more than 1 tablespoon.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch17_t2_qe8',
        type: 'mcq',
        question: 'Which tool would you use to measure 5 ml of vanilla extract?',
        options: [
            'Measuring cup',
            'Measuring spoon',
            'Kitchen scale',
            'Ruler'
        ],
        correctAnswer: 'Measuring spoon',
        explanation: 'A measuring spoon is used to measure small amounts of liquids like vanilla extract.',
        wrongAnswerExplanations: {
            'Measuring cup': 'Measuring cups are too large for 5 ml.',
            'Kitchen scale': 'A kitchen scale measures weight, not volume.',
            'Ruler': 'A ruler measures length, not volume.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch17_t2_qe9',
        type: 'mcq',
        question: 'How many milliliters are in 1 teaspoon?',
        options: [
            '5 ml',
            '10 ml',
            '15 ml',
            '20 ml'
        ],
        correctAnswer: '5 ml',
        explanation: '1 teaspoon = 5 milliliters (ml). This is a standard conversion in cooking.',
        wrongAnswerExplanations: {
            '10 ml': 'This is incorrect. 1 teaspoon is 5 ml.',
            '15 ml': 'This is 1 tablespoon.',
            '20 ml': 'This is more than 1 teaspoon.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch17_t2_qe10',
        type: 'mcq',
        question: 'Which unit would you use to measure 2 kg of sugar?',
        options: [
            'Liters',
            'Milliliters',
            'Kilograms',
            'Grams'
        ],
        correctAnswer: 'Kilograms',
        explanation: 'Sugar is typically measured by weight, and 2 kg is a common measurement.',
        wrongAnswerExplanations: {
            'Liters': 'Liters measure volume, not weight.',
            'Milliliters': 'Milliliters measure volume, not weight.',
            'Grams': '2 kg is a larger amount, so kilograms would be more appropriate.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch17_t2_qe11',
        type: 'mcq',
        question: 'How many grams are in 500 g of butter?',
        options: [
            '50 g',
            '100 g',
            '500 g',
            '1000 g'
        ],
        correctAnswer: '500 g',
        explanation: '500 g is already in grams, so no conversion is needed.',
        wrongAnswerExplanations: {
            '50 g': 'This is too small. 500 g is already in grams.',
            '100 g': 'This is too small. 500 g is already in grams.',
            '1000 g': 'This is too large. 500 g is already in grams.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch17_t2_qe12',
        type: 'mcq',
        question: 'Which tool would you use to measure 1 kg of flour?',
        options: [
            'Measuring cup',
            'Measuring spoon',
            'Kitchen scale',
            'Ruler'
        ],
        correctAnswer: 'Kitchen scale',
        explanation: 'A kitchen scale is used to measure weight, which is appropriate for 1 kg of flour.',
        wrongAnswerExplanations: {
            'Measuring cup': 'Measuring cups measure volume, not weight.',
            'Measuring spoon': 'Measuring spoons are too small for 1 kg.',
            'Ruler': 'A ruler measures length, not weight.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch17_t2_qe13',
        type: 'mcq',
        question: 'How many cups are in 480 ml?',
        options: [
            '1 cup',
            '2 cups',
            '3 cups',
            '4 cups'
        ],
        correctAnswer: '2 cups',
        explanation: 'Since 1 cup = 240 ml, then 480 ml = 2 cups.',
        wrongAnswerExplanations: {
            '1 cup': 'This is 240 ml.',
            '3 cups': 'This is 720 ml.',
            '4 cups': 'This is 960 ml.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch17_t2_qe14',
        type: 'mcq',
        question: 'Which unit would you use to measure 1 L of water?',
        options: [
            'Liters',
            'Milliliters',
            'Kilograms',
            'Grams'
        ],
        correctAnswer: 'Liters',
        explanation: 'Water is typically measured by volume, and 1 L is a common measurement.',
        wrongAnswerExplanations: {
            'Milliliters': '1 L is a larger amount, so liters would be more appropriate.',
            'Kilograms': 'Kilograms measure weight, not volume.',
            'Grams': 'Grams measure weight, not volume.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch17_t2_qe15',
        type: 'mcq',
        question: 'How many teaspoons are in 1 tablespoon?',
        options: [
            '1',
            '2',
            '3',
            '4'
        ],
        correctAnswer: '3',
        explanation: '1 tablespoon = 3 teaspoons. This is a standard conversion in cooking.',
        wrongAnswerExplanations: {
            '1': 'This is incorrect. 1 tablespoon equals 3 teaspoons.',
            '2': 'This is incorrect. 1 tablespoon equals 3 teaspoons.',
            '4': 'This is incorrect. 1 tablespoon equals 3 teaspoons.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch17_t2_qe16',
        type: 'mcq',
        question: 'Which tool would you use to measure 1 teaspoon of salt?',
        options: [
            'Measuring cup',
            'Measuring spoon',
            'Kitchen scale',
            'Ruler'
        ],
        correctAnswer: 'Measuring spoon',
        explanation: 'A measuring spoon is used to measure small amounts of dry ingredients like salt.',
        wrongAnswerExplanations: {
            'Measuring cup': 'Measuring cups are too large for 1 teaspoon.',
            'Kitchen scale': 'A kitchen scale would be too precise for 1 teaspoon of salt.',
            'Ruler': 'A ruler measures length, not volume.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch17_t2_qe17',
        type: 'mcq',
        question: 'How many milliliters are in 2 cups?',
        options: [
            '240 ml',
            '360 ml',
            '480 ml',
            '600 ml'
        ],
        correctAnswer: '480 ml',
        explanation: 'Since 1 cup = 240 ml, then 2 cups = 480 ml.',
        wrongAnswerExplanations: {
            '240 ml': 'This is 1 cup.',
            '360 ml': 'This is 1.5 cups.',
            '600 ml': 'This is 2.5 cups.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch17_t2_qe18',
        type: 'mcq',
        question: 'Which unit would you use to measure 100 g of chocolate chips?',
        options: [
            'Liters',
            'Milliliters',
            'Kilograms',
            'Grams'
        ],
        correctAnswer: 'Grams',
        explanation: 'Chocolate chips are typically measured by weight, and 100 g is a common measurement.',
        wrongAnswerExplanations: {
            'Liters': 'Liters measure volume, not weight.',
            'Milliliters': 'Milliliters measure volume, not weight.',
            'Kilograms': '100 g is less than 1 kg, so grams would be more appropriate.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch17_t2_qe19',
        type: 'mcq',
        question: 'How many tablespoons are in 1/4 cup?',
        options: [
            '2 tablespoons',
            '3 tablespoons',
            '4 tablespoons',
            '5 tablespoons'
        ],
        correctAnswer: '4 tablespoons',
        explanation: '1/4 cup = 4 tablespoons. This is a standard conversion in cooking.',
        wrongAnswerExplanations: {
            '2 tablespoons': 'This is 1/8 cup.',
            '3 tablespoons': 'This is incorrect. 1/4 cup equals 4 tablespoons.',
            '5 tablespoons': 'This is more than 1/4 cup.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch17_t2_qe20',
        type: 'mcq',
        question: 'Which tool would you use to measure 1 L of milk?',
        options: [
            'Measuring cup',
            'Measuring spoon',
            'Kitchen scale',
            'Liquid measuring jug'
        ],
        correctAnswer: 'Liquid measuring jug',
        explanation: 'A liquid measuring jug is used to measure larger volumes of liquids like milk.',
        wrongAnswerExplanations: {
            'Measuring cup': 'Measuring cups are typically too small for 1 L.',
            'Measuring spoon': 'Measuring spoons are too small for 1 L.',
            'Kitchen scale': 'A kitchen scale measures weight, not volume.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    }
];
