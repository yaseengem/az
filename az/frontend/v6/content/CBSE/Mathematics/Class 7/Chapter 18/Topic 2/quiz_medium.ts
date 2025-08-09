import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    // 20+ MCQs on measurement in daily life, ids like cl7_ch18_t2_qm1, ...
    {
        id: 'cl7_ch18_t2_qm1',
        type: 'mcq',
        question: 'A rectangular garden is 12 m long and 8 m wide. What is its area?',
        options: ['96 m²', '20 m²', '48 m²', '100 m²'],
        correctAnswer: '96 m²',
        explanation: 'Area = length × width = 12 × 8 = 96 m².',
        wrongAnswerExplanations: {
            '20 m²': '20 m² is the sum, not the product.',
            '48 m²': '48 m² is not the correct calculation.',
            '100 m²': '100 m² is not the correct calculation.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch18_t2_qm2',
        type: 'mcq',
        question: 'A water tank can hold 2500 litres. If it is half full, how much water is in the tank?',
        options: ['1250 litres', '250 litres', '5000 litres', '1000 litres'],
        correctAnswer: '1250 litres',
        explanation: 'Half of 2500 litres is 1250 litres.',
        wrongAnswerExplanations: {
            '250 litres': '250 litres is much less than half.',
            '5000 litres': '5000 litres is double the tank capacity.',
            '1000 litres': '1000 litres is less than half.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch18_t2_qm3',
        type: 'mcq',
        question: 'If a runner completes 400 meters in 80 seconds, what is their average speed?',
        options: ['5 m/s', '4 m/s', '0.2 m/s', '8 m/s'],
        correctAnswer: '5 m/s',
        explanation: 'Speed = distance/time = 400/80 = 5 m/s.',
        wrongAnswerExplanations: {
            '4 m/s': '4 m/s is not the correct calculation.',
            '0.2 m/s': '0.2 m/s is not the correct calculation.',
            '8 m/s': '8 m/s is not the correct calculation.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch18_t2_qm4',
        type: 'mcq',
        question: 'A bottle contains 1.5 L of juice. How many millilitres is this?',
        options: ['150 ml', '1500 ml', '15 ml', '1000 ml'],
        correctAnswer: '1500 ml',
        explanation: '1 L = 1000 ml, so 1.5 L = 1500 ml.',
        wrongAnswerExplanations: {
            '150 ml': '150 ml is much less than 1.5 L.',
            '15 ml': '15 ml is much less than 1.5 L.',
            '1000 ml': '1000 ml is only 1 L.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch18_t2_qm5',
        type: 'mcq',
        question: 'If a rope is 2.5 m long, how many centimeters is it?',
        options: ['25 cm', '250 cm', '2.5 cm', '100 cm'],
        correctAnswer: '250 cm',
        explanation: '1 m = 100 cm, so 2.5 m = 250 cm.',
        wrongAnswerExplanations: {
            '25 cm': '25 cm is much less than 2.5 m.',
            '2.5 cm': '2.5 cm is much less than 2.5 m.',
            '100 cm': '100 cm is only 1 m.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch18_t2_qm6',
        type: 'mcq',
        question: 'A rectangular field is 30 m long and 20 m wide. What is its perimeter?',
        options: ['100 m', '60 m', '50 m', '120 m'],
        correctAnswer: '100 m',
        explanation: 'Perimeter = 2 × (length + width) = 2 × (30 + 20) = 100 m.',
        wrongAnswerExplanations: {
            '60 m': '60 m is the sum, not the perimeter.',
            '50 m': '50 m is not the correct calculation.',
            '120 m': '120 m is not the correct calculation.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch18_t2_qm7',
        type: 'mcq',
        question: 'If a car travels 150 km in 3 hours, what is its average speed?',
        options: ['50 km/h', '45 km/h', '60 km/h', '30 km/h'],
        correctAnswer: '50 km/h',
        explanation: 'Speed = distance/time = 150/3 = 50 km/h.',
        wrongAnswerExplanations: {
            '45 km/h': '45 km/h is not the correct calculation.',
            '60 km/h': '60 km/h is not the correct calculation.',
            '30 km/h': '30 km/h is not the correct calculation.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch18_t2_qm8',
        type: 'mcq',
        question: 'A family uses 2.5 L of milk every day. How much milk do they use in a week?',
        options: ['17.5 L', '12.5 L', '7 L', '14 L'],
        correctAnswer: '17.5 L',
        explanation: '2.5 L × 7 days = 17.5 L.',
        wrongAnswerExplanations: {
            '12.5 L': '12.5 L is not the correct calculation.',
            '7 L': '7 L is not the correct calculation.',
            '14 L': '14 L is not the correct calculation.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch18_t2_qm9',
        type: 'mcq',
        question: 'If a person walks 1.2 km every day, how far will they walk in 10 days?',
        options: ['12 km', '10 km', '1.2 km', '24 km'],
        correctAnswer: '12 km',
        explanation: '1.2 km × 10 = 12 km.',
        wrongAnswerExplanations: {
            '10 km': '10 km is not the correct calculation.',
            '1.2 km': '1.2 km is only one day.',
            '24 km': '24 km is double the correct answer.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch18_t2_qm10',
        type: 'mcq',
        question: 'A rectangular room is 6 m long and 4 m wide. What is its area?',
        options: ['24 m²', '10 m²', '20 m²', '12 m²'],
        correctAnswer: '24 m²',
        explanation: 'Area = length × width = 6 × 4 = 24 m².',
        wrongAnswerExplanations: {
            '10 m²': '10 m² is the sum, not the product.',
            '20 m²': '20 m² is not the correct calculation.',
            '12 m²': '12 m² is not the correct calculation.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch18_t2_qm11',
        type: 'mcq',
        question: 'If a jug holds 2 L of juice, how many 250 ml glasses can be filled?',
        options: ['8', '4', '6', '10'],
        correctAnswer: '8',
        explanation: '2 L = 2000 ml, 2000/250 = 8 glasses.',
        wrongAnswerExplanations: {
            '4': '4 is not the correct calculation.',
            '6': '6 is not the correct calculation.',
            '10': '10 is not the correct calculation.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch18_t2_qm12',
        type: 'mcq',
        question: 'A rectangular plot is 15 m long and 10 m wide. What is its perimeter?',
        options: ['50 m', '25 m', '100 m', '40 m'],
        correctAnswer: '50 m',
        explanation: 'Perimeter = 2 × (15 + 10) = 2 × 25 = 50 m.',
        wrongAnswerExplanations: {
            '25 m': '25 m is the sum, not the perimeter.',
            '100 m': '100 m is double the sum.',
            '40 m': '40 m is not the correct calculation.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch18_t2_qm13',
        type: 'mcq',
        question: 'If a car travels 180 km in 3 hours, what is its average speed?',
        options: ['60 km/h', '90 km/h', '30 km/h', '45 km/h'],
        correctAnswer: '60 km/h',
        explanation: 'Speed = distance/time = 180/3 = 60 km/h.',
        wrongAnswerExplanations: {
            '90 km/h': '90 km/h is not the correct calculation.',
            '30 km/h': '30 km/h is not the correct calculation.',
            '45 km/h': '45 km/h is not the correct calculation.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch18_t2_qm14',
        type: 'mcq',
        question: 'A swimming pool is 25 m long and 10 m wide. What is its area?',
        options: ['250 m²', '35 m²', '100 m²', '50 m²'],
        correctAnswer: '250 m²',
        explanation: 'Area = length × width = 25 × 10 = 250 m².',
        wrongAnswerExplanations: {
            '35 m²': '35 m² is not the correct calculation.',
            '100 m²': '100 m² is not the correct calculation.',
            '50 m²': '50 m² is not the correct calculation.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch18_t2_qm15',
        type: 'mcq',
        question: 'If a person drinks 2 litres of water every day, how much water will they drink in 15 days?',
        options: ['30 litres', '20 litres', '15 litres', '25 litres'],
        correctAnswer: '30 litres',
        explanation: '2 L × 15 = 30 L.',
        wrongAnswerExplanations: {
            '20 litres': '20 litres is not the correct calculation.',
            '15 litres': '15 litres is not the correct calculation.',
            '25 litres': '25 litres is not the correct calculation.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch18_t2_qm16',
        type: 'mcq',
        question: 'A rectangular table is 2 m long and 1.5 m wide. What is its area?',
        options: ['3 m²', '2.5 m²', '4 m²', '5 m²'],
        correctAnswer: '3 m²',
        explanation: 'Area = length × width = 2 × 1.5 = 3 m².',
        wrongAnswerExplanations: {
            '2.5 m²': '2.5 m² is not the correct calculation.',
            '4 m²': '4 m² is not the correct calculation.',
            '5 m²': '5 m² is not the correct calculation.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch18_t2_qm17',
        type: 'mcq',
        question: 'If a bus travels 240 km in 6 hours, what is its average speed?',
        options: ['40 km/h', '60 km/h', '30 km/h', '50 km/h'],
        correctAnswer: '40 km/h',
        explanation: 'Speed = distance/time = 240/6 = 40 km/h.',
        wrongAnswerExplanations: {
            '60 km/h': '60 km/h is not the correct calculation.',
            '30 km/h': '30 km/h is not the correct calculation.',
            '50 km/h': '50 km/h is not the correct calculation.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch18_t2_qm18',
        type: 'mcq',
        question: 'A rectangular playground is 50 m long and 30 m wide. What is its perimeter?',
        options: ['160 m', '100 m', '80 m', '120 m'],
        correctAnswer: '160 m',
        explanation: 'Perimeter = 2 × (50 + 30) = 2 × 80 = 160 m.',
        wrongAnswerExplanations: {
            '100 m': '100 m is not the correct calculation.',
            '80 m': '80 m is the sum, not the perimeter.',
            '120 m': '120 m is not the correct calculation.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch18_t2_qm19',
        type: 'mcq',
        question: 'If a person walks 2 km every day, how far will they walk in 30 days?',
        options: ['60 km', '30 km', '15 km', '90 km'],
        correctAnswer: '60 km',
        explanation: '2 km × 30 = 60 km.',
        wrongAnswerExplanations: {
            '30 km': '30 km is only half the distance.',
            '15 km': '15 km is much less than the correct answer.',
            '90 km': '90 km is too high.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch18_t2_qm20',
        type: 'mcq',
        question: 'A rectangular wall is 8 m long and 3 m high. What is its area?',
        options: ['24 m²', '11 m²', '32 m²', '16 m²'],
        correctAnswer: '24 m²',
        explanation: 'Area = length × height = 8 × 3 = 24 m².',
        wrongAnswerExplanations: {
            '11 m²': '11 m² is not the correct calculation.',
            '32 m²': '32 m² is not the correct calculation.',
            '16 m²': '16 m² is not the correct calculation.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    }
    // ... more questions can be added as needed ...
]; 