import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl5_ch14_t3_qe1',
        type: 'mcq',
        question: 'How many meters are in 1 kilometer?',
        options: [
            '10 meters',
            '100 meters',
            '1000 meters',
            '10000 meters'
        ],
        correctAnswer: '1000 meters',
        explanation: '1 kilometer = 1000 meters.',
        wrongAnswerExplanations: {
            '10 meters': 'This would be 0.01 kilometers, which is too short.',
            '100 meters': 'This would be 0.1 kilometers, which is too short.',
            '10000 meters': 'This would be 10 kilometers, which is too long.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch14_t3_qe2',
        type: 'mcq',
        question: 'How many centimeters are in 1 meter?',
        options: [
            '10 centimeters',
            '100 centimeters',
            '1000 centimeters',
            '10000 centimeters'
        ],
        correctAnswer: '100 centimeters',
        explanation: '1 meter = 100 centimeters.',
        wrongAnswerExplanations: {
            '10 centimeters': 'This would be 0.1 meters, which is too short.',
            '1000 centimeters': 'This would be 10 meters, which is too long.',
            '10000 centimeters': 'This would be 100 meters, which is much too long.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch14_t3_qe3',
        type: 'mcq',
        question: 'How many millimeters are in 1 centimeter?',
        options: [
            '10 millimeters',
            '100 millimeters',
            '1000 millimeters',
            '10000 millimeters'
        ],
        correctAnswer: '10 millimeters',
        explanation: '1 centimeter = 10 millimeters.',
        wrongAnswerExplanations: {
            '100 millimeters': 'This would be 10 centimeters, which is too long.',
            '1000 millimeters': 'This would be 100 centimeters, which is much too long.',
            '10000 millimeters': 'This would be 1000 centimeters, which is much too long.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch14_t3_qe4',
        type: 'mcq',
        question: 'How many grams are in 1 kilogram?',
        options: [
            '10 grams',
            '100 grams',
            '1000 grams',
            '10000 grams'
        ],
        correctAnswer: '1000 grams',
        explanation: '1 kilogram = 1000 grams.',
        wrongAnswerExplanations: {
            '10 grams': 'This would be 0.01 kilograms, which is too light.',
            '100 grams': 'This would be 0.1 kilograms, which is too light.',
            '10000 grams': 'This would be 10 kilograms, which is too heavy.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch14_t3_qe5',
        type: 'mcq',
        question: 'How many milligrams are in 1 gram?',
        options: [
            '10 milligrams',
            '100 milligrams',
            '1000 milligrams',
            '10000 milligrams'
        ],
        correctAnswer: '1000 milligrams',
        explanation: '1 gram = 1000 milligrams.',
        wrongAnswerExplanations: {
            '10 milligrams': 'This would be 0.01 grams, which is too light.',
            '100 milligrams': 'This would be 0.1 grams, which is too light.',
            '10000 milligrams': 'This would be 10 grams, which is too heavy.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch14_t3_qe6',
        type: 'mcq',
        question: 'How many milliliters are in 1 liter?',
        options: [
            '10 milliliters',
            '100 milliliters',
            '1000 milliliters',
            '10000 milliliters'
        ],
        correctAnswer: '1000 milliliters',
        explanation: '1 liter = 1000 milliliters.',
        wrongAnswerExplanations: {
            '10 milliliters': 'This would be 0.01 liters, which is too small.',
            '100 milliliters': 'This would be 0.1 liters, which is too small.',
            '10000 milliliters': 'This would be 10 liters, which is too large.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch14_t3_qe7',
        type: 'mcq',
        question: 'To convert from meters to centimeters, you should:',
        options: [
            'Multiply by 10',
            'Multiply by 100',
            'Divide by 100',
            'Divide by 10'
        ],
        correctAnswer: 'Multiply by 100',
        explanation: 'To convert from meters to centimeters, multiply by 100 because 1 meter = 100 centimeters.',
        wrongAnswerExplanations: {
            'Multiply by 10': 'This would give decimeters, not centimeters.',
            'Divide by 100': 'This would make the number smaller, not larger.',
            'Divide by 10': 'This would make the number smaller, not larger.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch14_t3_qe8',
        type: 'mcq',
        question: 'To convert from grams to kilograms, you should:',
        options: [
            'Multiply by 1000',
            'Divide by 1000',
            'Multiply by 100',
            'Divide by 100'
        ],
        correctAnswer: 'Divide by 1000',
        explanation: 'To convert from grams to kilograms, divide by 1000 because 1 kilogram = 1000 grams.',
        wrongAnswerExplanations: {
            'Multiply by 1000': 'This would make the number much larger.',
            'Multiply by 100': 'This would make the number larger.',
            'Divide by 100': 'This would give hectograms, not kilograms.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch14_t3_qe9',
        type: 'mcq',
        question: 'To convert from liters to milliliters, you should:',
        options: [
            'Multiply by 1000',
            'Divide by 1000',
            'Multiply by 100',
            'Divide by 100'
        ],
        correctAnswer: 'Multiply by 1000',
        explanation: 'To convert from liters to milliliters, multiply by 1000 because 1 liter = 1000 milliliters.',
        wrongAnswerExplanations: {
            'Divide by 1000': 'This would make the number smaller.',
            'Multiply by 100': 'This would give centiliters, not milliliters.',
            'Divide by 100': 'This would make the number smaller.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch14_t3_qe10',
        type: 'mcq',
        question: 'Which is the largest unit of length?',
        options: [
            'Millimeter',
            'Centimeter',
            'Meter',
            'Kilometer'
        ],
        correctAnswer: 'Kilometer',
        explanation: 'Kilometer is the largest unit among these options.',
        wrongAnswerExplanations: {
            'Millimeter': 'Millimeter is the smallest unit.',
            'Centimeter': 'Centimeter is smaller than meter and kilometer.',
            'Meter': 'Meter is smaller than kilometer.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch14_t3_qe11',
        type: 'mcq',
        question: 'Which is the smallest unit of mass?',
        options: [
            'Kilogram',
            'Gram',
            'Milligram',
            'Centigram'
        ],
        correctAnswer: 'Milligram',
        explanation: 'Milligram is the smallest unit among these options.',
        wrongAnswerExplanations: {
            'Kilogram': 'Kilogram is the largest unit.',
            'Gram': 'Gram is larger than milligram.',
            'Centigram': 'Centigram is larger than milligram.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch14_t3_qe12',
        type: 'mcq',
        question: 'Which is the largest unit of volume?',
        options: [
            'Milliliter',
            'Centiliter',
            'Deciliter',
            'Liter'
        ],
        correctAnswer: 'Liter',
        explanation: 'Liter is the largest unit among these options.',
        wrongAnswerExplanations: {
            'Milliliter': 'Milliliter is the smallest unit.',
            'Centiliter': 'Centiliter is smaller than liter.',
            'Deciliter': 'Deciliter is smaller than liter.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch14_t3_qe13',
        type: 'mcq',
        question: 'If you have 2 meters, how many centimeters is that?',
        options: [
            '20 centimeters',
            '200 centimeters',
            '2000 centimeters',
            '20000 centimeters'
        ],
        correctAnswer: '200 centimeters',
        explanation: '2 meters = 2 × 100 = 200 centimeters.',
        wrongAnswerExplanations: {
            '20 centimeters': 'This would be 0.2 meters, which is too short.',
            '2000 centimeters': 'This would be 20 meters, which is too long.',
            '20000 centimeters': 'This would be 200 meters, which is much too long.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch14_t3_qe14',
        type: 'mcq',
        question: 'If you have 3 kilograms, how many grams is that?',
        options: [
            '30 grams',
            '300 grams',
            '3000 grams',
            '30000 grams'
        ],
        correctAnswer: '3000 grams',
        explanation: '3 kilograms = 3 × 1000 = 3000 grams.',
        wrongAnswerExplanations: {
            '30 grams': 'This would be 0.03 kilograms, which is too light.',
            '300 grams': 'This would be 0.3 kilograms, which is too light.',
            '30000 grams': 'This would be 30 kilograms, which is too heavy.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch14_t3_qe15',
        type: 'mcq',
        question: 'If you have 4 liters, how many milliliters is that?',
        options: [
            '40 milliliters',
            '400 milliliters',
            '4000 milliliters',
            '40000 milliliters'
        ],
        correctAnswer: '4000 milliliters',
        explanation: '4 liters = 4 × 1000 = 4000 milliliters.',
        wrongAnswerExplanations: {
            '40 milliliters': 'This would be 0.04 liters, which is too small.',
            '400 milliliters': 'This would be 0.4 liters, which is too small.',
            '40000 milliliters': 'This would be 40 liters, which is too large.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch14_t3_qe16',
        type: 'mcq',
        question: 'If you have 500 grams, how many kilograms is that?',
        options: [
            '0.05 kilograms',
            '0.5 kilograms',
            '5 kilograms',
            '50 kilograms'
        ],
        correctAnswer: '0.5 kilograms',
        explanation: '500 grams = 500 ÷ 1000 = 0.5 kilograms.',
        wrongAnswerExplanations: {
            '0.05 kilograms': 'This would be 50 grams, which is too light.',
            '5 kilograms': 'This would be 5000 grams, which is too heavy.',
            '50 kilograms': 'This would be 50000 grams, which is much too heavy.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch14_t3_qe17',
        type: 'mcq',
        question: 'If you have 600 milliliters, how many liters is that?',
        options: [
            '0.06 liters',
            '0.6 liters',
            '6 liters',
            '60 liters'
        ],
        correctAnswer: '0.6 liters',
        explanation: '600 milliliters = 600 ÷ 1000 = 0.6 liters.',
        wrongAnswerExplanations: {
            '0.06 liters': 'This would be 60 milliliters, which is too small.',
            '6 liters': 'This would be 6000 milliliters, which is too large.',
            '60 liters': 'This would be 60000 milliliters, which is much too large.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch14_t3_qe18',
        type: 'mcq',
        question: 'If you have 70 centimeters, how many meters is that?',
        options: [
            '0.07 meters',
            '0.7 meters',
            '7 meters',
            '70 meters'
        ],
        correctAnswer: '0.7 meters',
        explanation: '70 centimeters = 70 ÷ 100 = 0.7 meters.',
        wrongAnswerExplanations: {
            '0.07 meters': 'This would be 7 centimeters, which is too short.',
            '7 meters': 'This would be 700 centimeters, which is too long.',
            '70 meters': 'This would be 7000 centimeters, which is much too long.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch14_t3_qe19',
        type: 'mcq',
        question: 'If you have 800 milligrams, how many grams is that?',
        options: [
            '0.08 grams',
            '0.8 grams',
            '8 grams',
            '80 grams'
        ],
        correctAnswer: '0.8 grams',
        explanation: '800 milligrams = 800 ÷ 1000 = 0.8 grams.',
        wrongAnswerExplanations: {
            '0.08 grams': 'This would be 80 milligrams, which is too light.',
            '8 grams': 'This would be 8000 milligrams, which is too heavy.',
            '80 grams': 'This would be 80000 milligrams, which is much too heavy.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch14_t3_qe20',
        type: 'mcq',
        question: 'If you have 900 millimeters, how many centimeters is that?',
        options: [
            '0.9 centimeters',
            '9 centimeters',
            '90 centimeters',
            '900 centimeters'
        ],
        correctAnswer: '90 centimeters',
        explanation: '900 millimeters = 900 ÷ 10 = 90 centimeters.',
        wrongAnswerExplanations: {
            '0.9 centimeters': 'This would be 9 millimeters, which is too short.',
            '9 centimeters': 'This would be 90 millimeters, which is too short.',
            '900 centimeters': 'This would be 9000 millimeters, which is too long.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    }
];
