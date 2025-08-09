import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl5_ch14_t3_qm1',
        type: 'mcq',
        question: 'Convert 2.5 km to meters',
        options: ['250 m', '2500 m', '25000 m', '250000 m'],
        correctAnswer: '2500 m',
        explanation: 'To convert kilometers to meters, multiply by 1000. 2.5 km × 1000 = 2500 m',
        wrongAnswerExplanations: {
            '250 m': 'This would be 0.25 km, which is too short.',
            '25000 m': 'This would be 25 km, which is too long.',
            '250000 m': 'This would be 250 km, which is much too long.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl5_ch14_t3_qm2',
        type: 'mcq',
        question: 'Which is greater: 1.5 kg or 1500 g?',
        options: ['1.5 kg', '1500 g', 'They are equal', 'Cannot be compared'],
        correctAnswer: 'They are equal',
        explanation: '1 kg = 1000 g, so 1.5 kg = 1500 g',
        wrongAnswerExplanations: {
            '1.5 kg': 'This is equal to 1500 g, not greater.',
            '1500 g': 'This is equal to 1.5 kg, not greater.',
            'Cannot be compared': 'They can be compared by converting to the same unit.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl5_ch14_t3_qm3',
        type: 'mcq',
        question: 'Convert 750 mL to liters',
        options: ['0.075 L', '0.75 L', '7.5 L', '75 L'],
        correctAnswer: '0.75 L',
        explanation: 'To convert milliliters to liters, divide by 1000. 750 mL ÷ 1000 = 0.75 L',
        wrongAnswerExplanations: {
            '0.075 L': 'This would be 75 mL, which is too small.',
            '7.5 L': 'This would be 7500 mL, which is too large.',
            '75 L': 'This would be 75000 mL, which is much too large.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl5_ch14_t3_qm4',
        type: 'mcq',
        question: 'If a water tank holds 2.5 m³, how many liters is that?',
        options: ['25 L', '250 L', '2500 L', '25000 L'],
        correctAnswer: '2500 L',
        explanation: '1 m³ = 1000 L, so 2.5 m³ = 2500 L',
        wrongAnswerExplanations: {
            '25 L': 'This would be 0.025 m³, which is too small.',
            '250 L': 'This would be 0.25 m³, which is too small.',
            '25000 L': 'This would be 25 m³, which is too large.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl5_ch14_t3_qm5',
        type: 'mcq',
        question: 'Convert 3.2 kg to grams',
        options: ['32 g', '320 g', '3200 g', '32000 g'],
        correctAnswer: '3200 g',
        explanation: 'To convert kilograms to grams, multiply by 1000. 3.2 kg × 1000 = 3200 g',
        wrongAnswerExplanations: {
            '32 g': 'This would be 0.032 kg, which is too light.',
            '320 g': 'This would be 0.32 kg, which is too light.',
            '32000 g': 'This would be 32 kg, which is too heavy.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl5_ch14_t3_qm6',
        type: 'mcq',
        question: 'Which is more: 4500 mL or 4.5 L?',
        options: ['4500 mL', '4.5 L', 'They are equal', 'Cannot be compared'],
        correctAnswer: 'They are equal',
        explanation: '1000 mL = 1 L, so 4500 mL = 4.5 L',
        wrongAnswerExplanations: {
            '4500 mL': 'This is equal to 4.5 L, not more.',
            '4.5 L': 'This is equal to 4500 mL, not more.',
            'Cannot be compared': 'They can be compared by converting to the same unit.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl5_ch14_t3_qm7',
        type: 'mcq',
        question: 'Convert 1250 g to kilograms',
        options: ['0.125 kg', '1.25 kg', '12.5 kg', '125 kg'],
        correctAnswer: '1.25 kg',
        explanation: 'To convert grams to kilograms, divide by 1000. 1250 g ÷ 1000 = 1.25 kg',
        wrongAnswerExplanations: {
            '0.125 kg': 'This would be 125 g, which is too light.',
            '12.5 kg': 'This would be 12500 g, which is too heavy.',
            '125 kg': 'This would be 125000 g, which is much too heavy.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl5_ch14_t3_qm8',
        type: 'mcq',
        question: 'If a road is 3.5 km long, how many meters is that?',
        options: ['35 m', '350 m', '3500 m', '35000 m'],
        correctAnswer: '3500 m',
        explanation: 'To convert kilometers to meters, multiply by 1000. 3.5 km × 1000 = 3500 m',
        wrongAnswerExplanations: {
            '35 m': 'This would be 0.035 km, which is too short.',
            '350 m': 'This would be 0.35 km, which is too short.',
            '35000 m': 'This would be 35 km, which is too long.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl5_ch14_t3_qm9',
        type: 'mcq',
        question: 'Convert 0.8 L to milliliters',
        options: ['8 mL', '80 mL', '800 mL', '8000 mL'],
        correctAnswer: '800 mL',
        explanation: 'To convert liters to milliliters, multiply by 1000. 0.8 L × 1000 = 800 mL',
        wrongAnswerExplanations: {
            '8 mL': 'This would be 0.008 L, which is too small.',
            '80 mL': 'This would be 0.08 L, which is too small.',
            '8000 mL': 'This would be 8 L, which is too large.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl5_ch14_t3_qm10',
        type: 'mcq',
        question: 'Which is heavier: 2.3 kg or 2300 g?',
        options: ['2.3 kg', '2300 g', 'They are equal', 'Cannot be compared'],
        correctAnswer: 'They are equal',
        explanation: '1 kg = 1000 g, so 2.3 kg = 2300 g',
        wrongAnswerExplanations: {
            '2.3 kg': 'This is equal to 2300 g, not heavier.',
            '2300 g': 'This is equal to 2.3 kg, not heavier.',
            'Cannot be compared': 'They can be compared by converting to the same unit.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl5_ch14_t3_qm11',
        type: 'mcq',
        question: 'Convert 4.5 m to centimeters',
        options: ['45 cm', '450 cm', '4500 cm', '45000 cm'],
        correctAnswer: '450 cm',
        explanation: 'To convert meters to centimeters, multiply by 100. 4.5 m × 100 = 450 cm',
        wrongAnswerExplanations: {
            '45 cm': 'This would be 0.45 m, which is too short.',
            '4500 cm': 'This would be 45 m, which is too long.',
            '45000 cm': 'This would be 450 m, which is much too long.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl5_ch14_t3_qm12',
        type: 'mcq',
        question: 'If a bottle contains 1.25 L of juice, how many milliliters is that?',
        options: ['125 mL', '1250 mL', '12500 mL', '125000 mL'],
        correctAnswer: '1250 mL',
        explanation: 'To convert liters to milliliters, multiply by 1000. 1.25 L × 1000 = 1250 mL',
        wrongAnswerExplanations: {
            '125 mL': 'This would be 0.125 L, which is too small.',
            '12500 mL': 'This would be 12.5 L, which is too large.',
            '125000 mL': 'This would be 125 L, which is much too large.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl5_ch14_t3_qm13',
        type: 'mcq',
        question: 'Convert 1750 g to kilograms',
        options: ['0.175 kg', '1.75 kg', '17.5 kg', '175 kg'],
        correctAnswer: '1.75 kg',
        explanation: 'To convert grams to kilograms, divide by 1000. 1750 g ÷ 1000 = 1.75 kg',
        wrongAnswerExplanations: {
            '0.175 kg': 'This would be 175 g, which is too light.',
            '17.5 kg': 'This would be 17500 g, which is too heavy.',
            '175 kg': 'This would be 175000 g, which is much too heavy.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl5_ch14_t3_qm14',
        type: 'mcq',
        question: 'Which is longer: 2.8 km or 2800 m?',
        options: ['2.8 km', '2800 m', 'They are equal', 'Cannot be compared'],
        correctAnswer: 'They are equal',
        explanation: '1 km = 1000 m, so 2.8 km = 2800 m',
        wrongAnswerExplanations: {
            '2.8 km': 'This is equal to 2800 m, not longer.',
            '2800 m': 'This is equal to 2.8 km, not longer.',
            'Cannot be compared': 'They can be compared by converting to the same unit.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl5_ch14_t3_qm15',
        type: 'mcq',
        question: 'Convert 0.6 kg to grams',
        options: ['6 g', '60 g', '600 g', '6000 g'],
        correctAnswer: '600 g',
        explanation: 'To convert kilograms to grams, multiply by 1000. 0.6 kg × 1000 = 600 g',
        wrongAnswerExplanations: {
            '6 g': 'This would be 0.006 kg, which is too light.',
            '60 g': 'This would be 0.06 kg, which is too light.',
            '6000 g': 'This would be 6 kg, which is too heavy.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl5_ch14_t3_qm16',
        type: 'mcq',
        question: 'If a swimming pool holds 3.5 m³ of water, how many liters is that?',
        options: ['35 L', '350 L', '3500 L', '35000 L'],
        correctAnswer: '3500 L',
        explanation: '1 m³ = 1000 L, so 3.5 m³ = 3500 L',
        wrongAnswerExplanations: {
            '35 L': 'This would be 0.035 m³, which is too small.',
            '350 L': 'This would be 0.35 m³, which is too small.',
            '35000 L': 'This would be 35 m³, which is too large.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl5_ch14_t3_qm17',
        type: 'mcq',
        question: 'Convert 850 mL to liters',
        options: ['0.085 L', '0.85 L', '8.5 L', '85 L'],
        correctAnswer: '0.85 L',
        explanation: 'To convert milliliters to liters, divide by 1000. 850 mL ÷ 1000 = 0.85 L',
        wrongAnswerExplanations: {
            '0.085 L': 'This would be 85 mL, which is too small.',
            '8.5 L': 'This would be 8500 mL, which is too large.',
            '85 L': 'This would be 85000 mL, which is much too large.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl5_ch14_t3_qm18',
        type: 'mcq',
        question: 'Which is more: 1.8 L or 1800 mL?',
        options: ['1.8 L', '1800 mL', 'They are equal', 'Cannot be compared'],
        correctAnswer: 'They are equal',
        explanation: '1000 mL = 1 L, so 1800 mL = 1.8 L',
        wrongAnswerExplanations: {
            '1.8 L': 'This is equal to 1800 mL, not more.',
            '1800 mL': 'This is equal to 1.8 L, not more.',
            'Cannot be compared': 'They can be compared by converting to the same unit.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl5_ch14_t3_qm19',
        type: 'mcq',
        question: 'Convert 2.4 m to centimeters',
        options: ['24 cm', '240 cm', '2400 cm', '24000 cm'],
        correctAnswer: '240 cm',
        explanation: 'To convert meters to centimeters, multiply by 100. 2.4 m × 100 = 240 cm',
        wrongAnswerExplanations: {
            '24 cm': 'This would be 0.24 m, which is too short.',
            '2400 cm': 'This would be 24 m, which is too long.',
            '24000 cm': 'This would be 240 m, which is much too long.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl5_ch14_t3_qm20',
        type: 'mcq',
        question: 'If a bag of rice weighs 2.6 kg, how many grams is that?',
        options: ['26 g', '260 g', '2600 g', '26000 g'],
        correctAnswer: '2600 g',
        explanation: 'To convert kilograms to grams, multiply by 1000. 2.6 kg × 1000 = 2600 g',
        wrongAnswerExplanations: {
            '26 g': 'This would be 0.026 kg, which is too light.',
            '260 g': 'This would be 0.26 kg, which is too light.',
            '26000 g': 'This would be 26 kg, which is too heavy.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 60
    }
];
