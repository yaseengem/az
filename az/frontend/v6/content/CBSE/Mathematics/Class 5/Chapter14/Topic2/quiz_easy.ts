import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl5_ch14_t2_qe1',
        type: 'mcq',
        question: 'What is the basic unit for measuring length?',
        options: [
            'Meter',
            'Kilogram',
            'Liter',
            'Second'
        ],
        correctAnswer: 'Meter',
        explanation: 'The meter is the basic unit for measuring length in the metric system.',
        wrongAnswerExplanations: {
            'Kilogram': 'Kilogram is used for measuring mass, not length.',
            'Liter': 'Liter is used for measuring volume, not length.',
            'Second': 'Second is used for measuring time, not length.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch14_t2_qe2',
        type: 'mcq',
        question: 'How many centimeters are in 1 meter?',
        options: [
            '10',
            '100',
            '1000',
            '10000'
        ],
        correctAnswer: '100',
        explanation: '1 meter equals 100 centimeters.',
        wrongAnswerExplanations: {
            '10': 'There are more than 10 centimeters in a meter.',
            '1000': '1000 centimeters would be 10 meters.',
            '10000': '10000 centimeters would be 100 meters.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch14_t2_qe3',
        type: 'mcq',
        question: 'Which tool would you use to measure the length of a pencil?',
        options: [
            'Ruler',
            'Scale',
            'Thermometer',
            'Clock'
        ],
        correctAnswer: 'Ruler',
        explanation: 'A ruler is the appropriate tool for measuring the length of small objects like a pencil.',
        wrongAnswerExplanations: {
            'Scale': 'A scale is used for measuring mass, not length.',
            'Thermometer': 'A thermometer measures temperature, not length.',
            'Clock': 'A clock measures time, not length.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch14_t2_qe4',
        type: 'mcq',
        question: 'What is the basic unit for measuring mass?',
        options: [
            'Kilogram',
            'Meter',
            'Liter',
            'Second'
        ],
        correctAnswer: 'Kilogram',
        explanation: 'The kilogram is the basic unit for measuring mass in the metric system.',
        wrongAnswerExplanations: {
            'Meter': 'Meter is used for measuring length, not mass.',
            'Liter': 'Liter is used for measuring volume, not mass.',
            'Second': 'Second is used for measuring time, not mass.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch14_t2_qe5',
        type: 'mcq',
        question: 'How many grams are in 1 kilogram?',
        options: [
            '10',
            '100',
            '1000',
            '10000'
        ],
        correctAnswer: '1000',
        explanation: '1 kilogram equals 1000 grams.',
        wrongAnswerExplanations: {
            '10': 'There are more than 10 grams in a kilogram.',
            '100': 'There are more than 100 grams in a kilogram.',
            '10000': '10000 grams would be 10 kilograms.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch14_t2_qe6',
        type: 'mcq',
        question: 'Which tool would you use to measure the mass of a book?',
        options: [
            'Scale',
            'Ruler',
            'Thermometer',
            'Clock'
        ],
        correctAnswer: 'Scale',
        explanation: 'A scale is the appropriate tool for measuring mass.',
        wrongAnswerExplanations: {
            'Ruler': 'A ruler measures length, not mass.',
            'Thermometer': 'A thermometer measures temperature, not mass.',
            'Clock': 'A clock measures time, not mass.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch14_t2_qe7',
        type: 'mcq',
        question: 'What is the smallest common unit for measuring length?',
        options: [
            'Millimeter',
            'Centimeter',
            'Meter',
            'Kilometer'
        ],
        correctAnswer: 'Millimeter',
        explanation: 'The millimeter is the smallest common unit for measuring length.',
        wrongAnswerExplanations: {
            'Centimeter': 'Centimeter is larger than millimeter.',
            'Meter': 'Meter is much larger than millimeter.',
            'Kilometer': 'Kilometer is the largest unit among these options.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch14_t2_qe8',
        type: 'mcq',
        question: 'How many millimeters are in 1 centimeter?',
        options: [
            '10',
            '100',
            '1000',
            '10000'
        ],
        correctAnswer: '10',
        explanation: '1 centimeter equals 10 millimeters.',
        wrongAnswerExplanations: {
            '100': '100 millimeters would be 10 centimeters.',
            '1000': '1000 millimeters would be 100 centimeters.',
            '10000': '10000 millimeters would be 1000 centimeters.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch14_t2_qe9',
        type: 'mcq',
        question: 'Which unit would you use to measure the mass of a pencil?',
        options: [
            'Grams',
            'Kilograms',
            'Meters',
            'Liters'
        ],
        correctAnswer: 'Grams',
        explanation: 'Grams are used for measuring small masses like a pencil.',
        wrongAnswerExplanations: {
            'Kilograms': 'Kilograms are used for larger masses.',
            'Meters': 'Meters measure length, not mass.',
            'Liters': 'Liters measure volume, not mass.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch14_t2_qe10',
        type: 'mcq',
        question: 'Which unit would you use to measure the length of a classroom?',
        options: [
            'Meters',
            'Centimeters',
            'Millimeters',
            'Kilograms'
        ],
        correctAnswer: 'Meters',
        explanation: 'Meters are used for measuring longer distances like a classroom.',
        wrongAnswerExplanations: {
            'Centimeters': 'Centimeters are too small for measuring a classroom.',
            'Millimeters': 'Millimeters are too small for measuring a classroom.',
            'Kilograms': 'Kilograms measure mass, not length.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch14_t2_qe11',
        type: 'mcq',
        question: 'What is the mass of a typical apple?',
        options: [
            '200 grams',
            '2 kilograms',
            '20 grams',
            '2000 grams'
        ],
        correctAnswer: '200 grams',
        explanation: 'A typical apple weighs about 200 grams.',
        wrongAnswerExplanations: {
            '2 kilograms': '2 kilograms is too heavy for an apple.',
            '20 grams': '20 grams is too light for an apple.',
            '2000 grams': '2000 grams (2 kg) is too heavy for an apple.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch14_t2_qe12',
        type: 'mcq',
        question: 'What is the length of a typical pencil?',
        options: [
            '15 centimeters',
            '15 meters',
            '150 centimeters',
            '1500 millimeters'
        ],
        correctAnswer: '15 centimeters',
        explanation: 'A typical pencil is about 15 centimeters long.',
        wrongAnswerExplanations: {
            '15 meters': '15 meters is much too long for a pencil.',
            '150 centimeters': '150 centimeters is much too long for a pencil.',
            '1500 millimeters': '1500 millimeters (150 cm) is much too long for a pencil.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch14_t2_qe13',
        type: 'mcq',
        question: 'Which tool would you use to measure the length of a room?',
        options: [
            'Measuring tape',
            'Scale',
            'Thermometer',
            'Clock'
        ],
        correctAnswer: 'Measuring tape',
        explanation: 'A measuring tape is used for measuring longer distances like a room.',
        wrongAnswerExplanations: {
            'Scale': 'A scale measures mass, not length.',
            'Thermometer': 'A thermometer measures temperature, not length.',
            'Clock': 'A clock measures time, not length.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch14_t2_qe14',
        type: 'mcq',
        question: 'What is the mass of a typical textbook?',
        options: [
            '1 kilogram',
            '10 grams',
            '100 grams',
            '10 kilograms'
        ],
        correctAnswer: '1 kilogram',
        explanation: 'A typical textbook weighs about 1 kilogram.',
        wrongAnswerExplanations: {
            '10 grams': '10 grams is too light for a textbook.',
            '100 grams': '100 grams is too light for a textbook.',
            '10 kilograms': '10 kilograms is too heavy for a textbook.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch14_t2_qe15',
        type: 'mcq',
        question: 'How do you convert meters to centimeters?',
        options: [
            'Multiply by 100',
            'Divide by 100',
            'Multiply by 10',
            'Divide by 10'
        ],
        correctAnswer: 'Multiply by 100',
        explanation: 'To convert meters to centimeters, multiply by 100 because 1 meter = 100 centimeters.',
        wrongAnswerExplanations: {
            'Divide by 100': 'Dividing by 100 would give you a smaller number, not larger.',
            'Multiply by 10': 'Multiplying by 10 would give you decimeters, not centimeters.',
            'Divide by 10': 'Dividing by 10 would give you a smaller number.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch14_t2_qe16',
        type: 'mcq',
        question: 'How do you convert kilograms to grams?',
        options: [
            'Multiply by 1000',
            'Divide by 1000',
            'Multiply by 100',
            'Divide by 100'
        ],
        correctAnswer: 'Multiply by 1000',
        explanation: 'To convert kilograms to grams, multiply by 1000 because 1 kilogram = 1000 grams.',
        wrongAnswerExplanations: {
            'Divide by 1000': 'Dividing by 1000 would give you a smaller number, not larger.',
            'Multiply by 100': 'Multiplying by 100 would not give you the correct conversion.',
            'Divide by 100': 'Dividing by 100 would give you a smaller number.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch14_t2_qe17',
        type: 'mcq',
        question: 'What is the length of a typical door?',
        options: [
            '2 meters',
            '2 centimeters',
            '20 centimeters',
            '200 centimeters'
        ],
        correctAnswer: '2 meters',
        explanation: 'A typical door is about 2 meters high.',
        wrongAnswerExplanations: {
            '2 centimeters': '2 centimeters is much too short for a door.',
            '20 centimeters': '20 centimeters is much too short for a door.',
            '200 centimeters': '200 centimeters (2 meters) is the same as 2 meters, but meters is the more appropriate unit.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch14_t2_qe18',
        type: 'mcq',
        question: 'What is the mass of a typical watermelon?',
        options: [
            '2 kilograms',
            '2 grams',
            '20 grams',
            '200 grams'
        ],
        correctAnswer: '2 kilograms',
        explanation: 'A typical watermelon weighs about 2 kilograms.',
        wrongAnswerExplanations: {
            '2 grams': '2 grams is much too light for a watermelon.',
            '20 grams': '20 grams is much too light for a watermelon.',
            '200 grams': '200 grams is much too light for a watermelon.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch14_t2_qe19',
        type: 'mcq',
        question: 'Which unit would you use to measure the thickness of a coin?',
        options: [
            'Millimeters',
            'Centimeters',
            'Meters',
            'Kilograms'
        ],
        correctAnswer: 'Millimeters',
        explanation: 'Millimeters are used for measuring very small lengths like the thickness of a coin.',
        wrongAnswerExplanations: {
            'Centimeters': 'Centimeters are too large for measuring a coin\'s thickness.',
            'Meters': 'Meters are much too large for measuring a coin\'s thickness.',
            'Kilograms': 'Kilograms measure mass, not length.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch14_t2_qe20',
        type: 'mcq',
        question: 'Which unit would you use to measure the mass of a bag of rice?',
        options: [
            'Kilograms',
            'Grams',
            'Meters',
            'Liters'
        ],
        correctAnswer: 'Kilograms',
        explanation: 'Kilograms are used for measuring larger masses like a bag of rice.',
        wrongAnswerExplanations: {
            'Grams': 'Grams are used for smaller masses.',
            'Meters': 'Meters measure length, not mass.',
            'Liters': 'Liters measure volume, not mass.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    }
];
