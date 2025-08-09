import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    // 20+ MCQs on measurement in daily life, ids like cl7_ch18_t2_qe1, ...
    {
        id: 'cl7_ch18_t2_qe1',
        type: 'mcq',
        question: 'Which unit is commonly used to measure the length of a pencil?',
        options: ['Kilogram', 'Centimeter', 'Litre', 'Second'],
        correctAnswer: 'Centimeter',
        explanation: 'Centimeter (cm) is a standard unit for measuring small lengths like a pencil.',
        wrongAnswerExplanations: {
            'Kilogram': 'Kilogram is used for measuring mass, not length.',
            'Litre': 'Litre is used for measuring volume, not length.',
            'Second': 'Second is used for measuring time, not length.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch18_t2_qe2',
        type: 'mcq',
        question: 'What is the standard unit for measuring mass in the metric system?',
        options: ['Gram', 'Meter', 'Litre', 'Second'],
        correctAnswer: 'Gram',
        explanation: 'Gram (g) is the standard unit for measuring mass in the metric system.',
        wrongAnswerExplanations: {
            'Meter': 'Meter is used for measuring length.',
            'Litre': 'Litre is used for measuring volume.',
            'Second': 'Second is used for measuring time.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch18_t2_qe3',
        type: 'mcq',
        question: 'Which instrument is used to measure temperature in daily life?',
        options: ['Thermometer', 'Barometer', 'Speedometer', 'Ammeter'],
        correctAnswer: 'Thermometer',
        explanation: 'A thermometer is used to measure temperature.',
        wrongAnswerExplanations: {
            'Barometer': 'Barometer measures atmospheric pressure.',
            'Speedometer': 'Speedometer measures speed.',
            'Ammeter': 'Ammeter measures electric current.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch18_t2_qe4',
        type: 'mcq',
        question: 'How many millilitres (ml) are there in 1 litre (L)?',
        options: ['10', '100', '1000', '10000'],
        correctAnswer: '1000',
        explanation: '1 litre = 1000 millilitres (ml).',
        wrongAnswerExplanations: {
            '10': '10 ml is much less than 1 litre.',
            '100': '100 ml is much less than 1 litre.',
            '10000': '10000 ml = 10 litres.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch18_t2_qe5',
        type: 'mcq',
        question: 'Which of the following is the best unit to measure the distance between two cities?',
        options: ['Centimeter', 'Meter', 'Kilometer', 'Millimeter'],
        correctAnswer: 'Kilometer',
        explanation: 'Kilometer (km) is used for measuring long distances like between cities.',
        wrongAnswerExplanations: {
            'Centimeter': 'Centimeter is too small for such distances.',
            'Meter': 'Meter is used for shorter distances.',
            'Millimeter': 'Millimeter is used for very small lengths.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch18_t2_qe6',
        type: 'mcq',
        question: 'What is the standard unit for measuring time?',
        options: ['Minute', 'Hour', 'Second', 'Day'],
        correctAnswer: 'Second',
        explanation: 'Second (s) is the standard unit for measuring time.',
        wrongAnswerExplanations: {
            'Minute': 'Minute is a larger unit, 1 minute = 60 seconds.',
            'Hour': 'Hour is a larger unit, 1 hour = 3600 seconds.',
            'Day': 'Day is a much larger unit.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch18_t2_qe7',
        type: 'mcq',
        question: 'Which tool would you use to measure the length of your classroom?',
        options: ['Measuring tape', 'Thermometer', 'Weighing scale', 'Clock'],
        correctAnswer: 'Measuring tape',
        explanation: 'A measuring tape is used to measure lengths and distances.',
        wrongAnswerExplanations: {
            'Thermometer': 'Thermometer measures temperature.',
            'Weighing scale': 'Weighing scale measures mass.',
            'Clock': 'Clock measures time.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch18_t2_qe8',
        type: 'mcq',
        question: 'Which of the following is the best unit to measure the amount of water in a bottle?',
        options: ['Gram', 'Litre', 'Meter', 'Second'],
        correctAnswer: 'Litre',
        explanation: 'Litre (L) is used for measuring the volume of liquids.',
        wrongAnswerExplanations: {
            'Gram': 'Gram is used for mass.',
            'Meter': 'Meter is used for length.',
            'Second': 'Second is used for time.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch18_t2_qe9',
        type: 'mcq',
        question: 'What is the perimeter of a rectangle with length 5 m and width 3 m?',
        options: ['8 m', '15 m', '16 m', '10 m'],
        correctAnswer: '16 m',
        explanation: 'Perimeter = 2 × (length + width) = 2 × (5 + 3) = 16 m.',
        wrongAnswerExplanations: {
            '8 m': '8 m is just the sum of length and width, not the perimeter.',
            '15 m': '15 m is the area if it were 5 × 3.',
            '10 m': '10 m is not the correct calculation.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 40
    },
    {
        id: 'cl7_ch18_t2_qe10',
        type: 'mcq',
        question: 'Which of these is used to measure the mass of fruits in a shop?',
        options: ['Thermometer', 'Weighing scale', 'Measuring tape', 'Clock'],
        correctAnswer: 'Weighing scale',
        explanation: 'A weighing scale is used to measure mass.',
        wrongAnswerExplanations: {
            'Thermometer': 'Thermometer measures temperature.',
            'Measuring tape': 'Measuring tape measures length.',
            'Clock': 'Clock measures time.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch18_t2_qe11',
        type: 'mcq',
        question: 'How many centimeters are there in 1 meter?',
        options: ['10', '100', '1000', '10000'],
        correctAnswer: '100',
        explanation: '1 meter = 100 centimeters (cm).',
        wrongAnswerExplanations: {
            '10': '10 cm is much less than 1 meter.',
            '1000': '1000 cm = 10 meters.',
            '10000': '10000 cm = 100 meters.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch18_t2_qe12',
        type: 'mcq',
        question: 'Which of the following is the best unit to measure the thickness of a coin?',
        options: ['Meter', 'Centimeter', 'Millimeter', 'Kilometer'],
        correctAnswer: 'Millimeter',
        explanation: 'Millimeter (mm) is used for measuring very small lengths like the thickness of a coin.',
        wrongAnswerExplanations: {
            'Meter': 'Meter is too large for such small measurements.',
            'Centimeter': 'Centimeter is larger than millimeter.',
            'Kilometer': 'Kilometer is used for long distances.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch18_t2_qe13',
        type: 'mcq',
        question: 'What is the area of a rectangle with length 7 m and width 4 m?',
        options: ['11 m²', '28 m²', '22 m²', '14 m²'],
        correctAnswer: '28 m²',
        explanation: 'Area = length × width = 7 × 4 = 28 m².',
        wrongAnswerExplanations: {
            '11 m²': '11 m² is the sum, not the product.',
            '22 m²': '22 m² is not the correct calculation.',
            '14 m²': '14 m² is not the correct calculation.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 40
    },
    {
        id: 'cl7_ch18_t2_qe14',
        type: 'mcq',
        question: 'Which of these is the best unit to measure the capacity of a water tank?',
        options: ['Millilitre', 'Litre', 'Gram', 'Centimeter'],
        correctAnswer: 'Litre',
        explanation: 'Litre (L) is used for measuring large volumes of liquid.',
        wrongAnswerExplanations: {
            'Millilitre': 'Millilitre is used for small volumes.',
            'Gram': 'Gram is used for mass.',
            'Centimeter': 'Centimeter is used for length.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch18_t2_qe15',
        type: 'mcq',
        question: 'Which of the following is a non-standard unit of measurement?',
        options: ['Handspan', 'Meter', 'Kilogram', 'Litre'],
        correctAnswer: 'Handspan',
        explanation: 'Handspan is a non-standard unit, while meter, kilogram, and litre are standard units.',
        wrongAnswerExplanations: {
            'Meter': 'Meter is a standard unit of length.',
            'Kilogram': 'Kilogram is a standard unit of mass.',
            'Litre': 'Litre is a standard unit of volume.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch18_t2_qe16',
        type: 'mcq',
        question: 'Which of these is the best unit to measure the time taken to run a race?',
        options: ['Second', 'Kilogram', 'Litre', 'Centimeter'],
        correctAnswer: 'Second',
        explanation: 'Second (s) is used for measuring short durations like a race.',
        wrongAnswerExplanations: {
            'Kilogram': 'Kilogram is used for mass.',
            'Litre': 'Litre is used for volume.',
            'Centimeter': 'Centimeter is used for length.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch18_t2_qe17',
        type: 'mcq',
        question: 'Which of the following is used to measure the speed of a car?',
        options: ['Thermometer', 'Speedometer', 'Barometer', 'Odometer'],
        correctAnswer: 'Speedometer',
        explanation: 'A speedometer measures the speed of a vehicle.',
        wrongAnswerExplanations: {
            'Thermometer': 'Thermometer measures temperature.',
            'Barometer': 'Barometer measures atmospheric pressure.',
            'Odometer': 'Odometer measures distance travelled.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch18_t2_qe18',
        type: 'mcq',
        question: 'What is the total mass if you combine 500 g of sugar and 1.5 kg of flour?',
        options: ['2 kg', '2.5 kg', '1 kg', '1.75 kg'],
        correctAnswer: '2 kg',
        explanation: '500 g = 0.5 kg, so 0.5 kg + 1.5 kg = 2 kg.',
        wrongAnswerExplanations: {
            '2.5 kg': 'This is too high.',
            '1 kg': 'This is too low.',
            '1.75 kg': 'This is not the correct sum.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 40
    },
    {
        id: 'cl7_ch18_t2_qe19',
        type: 'mcq',
        question: 'Which of these is the best unit to measure the height of a building?',
        options: ['Millimeter', 'Centimeter', 'Meter', 'Kilometer'],
        correctAnswer: 'Meter',
        explanation: 'Meter (m) is used for measuring the height of buildings.',
        wrongAnswerExplanations: {
            'Millimeter': 'Millimeter is too small for such measurements.',
            'Centimeter': 'Centimeter is used for smaller objects.',
            'Kilometer': 'Kilometer is used for very long distances.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch18_t2_qe20',
        type: 'mcq',
        question: 'If a bottle contains 750 ml of water, how many litres is that?',
        options: ['0.75 L', '7.5 L', '75 L', '1.5 L'],
        correctAnswer: '0.75 L',
        explanation: '750 ml = 0.75 litres (since 1000 ml = 1 L).',
        wrongAnswerExplanations: {
            '7.5 L': '7.5 L = 7500 ml.',
            '75 L': '75 L = 75000 ml.',
            '1.5 L': '1.5 L = 1500 ml.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    }
    // ... more questions can be added as needed ...
]; 