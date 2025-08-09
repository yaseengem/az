import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl8_ch17_t2_qm1',
        type: 'mcq',
        question: 'A rectangular room is 6 meters long and 4 meters wide. What is the most appropriate unit to express its area?',
        options: [
            'Square meters',
            'Cubic meters',
            'Square centimeters',
            'Square kilometers'
        ],
        correctAnswer: 'Square meters',
        explanation: 'Room area is typically measured in square meters as it`s a medium- sized space measurement.',
        wrongAnswerExplanations: {
            'Cubic meters': 'Cubic meters measure volume, not area.',
            'Square centimeters': 'Square centimeters would give too large a number for room area.',
            'Square kilometers': 'Square kilometers are far too large for room measurements.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 2
    },
    {
        id: 'cl8_ch17_t2_qm2',
        type: 'mcq',
        question: 'If you need to measure the amount of water a tank can hold, which combination of measurements would you need?',
        options: [
            'Length, width, and height',
            'Length and width only',
            'Circumference only',
            'Surface area only'
        ],
        correctAnswer: 'Length, width, and height',
        explanation: 'Volume requires all three dimensions - length, width, and height - to be measured.',
        wrongAnswerExplanations: {
            'Length and width only': 'This would only give the area, not volume.',
            'Circumference only': 'Circumference alone cannot determine volume.',
            'Surface area only': 'Surface area doesn`t determine volume capacity.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 2
    },
    {
        id: 'cl8_ch17_t2_qm3',
        type: 'mcq',
        question: 'Which measurement would be most precise for measuring the thickness of a human hair?',
        options: [
            'Micrometers',
            'Centimeters',
            'Millimeters',
            'Meters'
        ],
        correctAnswer: 'Micrometers',
        explanation: 'Hair thickness is extremely small, requiring micrometers for precise measurement.',
        wrongAnswerExplanations: {
            'Centimeters': 'Centimeters are too large to measure hair thickness.',
            'Millimeters': 'Millimeters are too large for accurate hair measurement.',
            'Meters': 'Meters are far too large for hair thickness.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 2
    },
    {
        id: 'cl8_ch17_t2_qm4',
        type: 'mcq',
        question: 'When measuring body weight for medical purposes, which unit provides the most appropriate precision?',
        options: [
            'Kilograms with decimal points',
            'Whole kilograms only',
            'Grams',
            'Metric tons'
        ],
        correctAnswer: 'Kilograms with decimal points',
        explanation: 'Medical weight measurements require precision to decimal points in kilograms.',
        wrongAnswerExplanations: {
            'Whole kilograms only': 'Lacks necessary precision for medical purposes.',
            'Grams': 'Would give unnecessarily large numbers.',
            'Metric tons': 'Far too large for human weight.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 2
    },
    {
        id: 'cl8_ch17_t2_qm5',
        type: 'mcq',
        question: 'Which measurement tool would give the most accurate reading for cooking oil in a recipe?',
        options: [
            'Measuring cylinder',
            'Kitchen scale',
            'Measuring spoons',
            'Measuring cup'
        ],
        correctAnswer: 'Measuring cylinder',
        explanation: 'Measuring cylinders provide the most accurate volume measurements for liquids.',
        wrongAnswerExplanations: {
            'Kitchen scale': 'Measures weight, not volume accurately.',
            'Measuring spoons': 'Less precise for larger liquid volumes.',
            'Measuring cup': 'Less accurate than a measuring cylinder.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 2
    },
    {
        id: 'cl8_ch17_t2_qm6',
        type: 'mcq',
        question: 'What would be the most appropriate tool to measure the slope of a wheelchair ramp?',
        options: [
            'Inclinometer',
            'Ruler',
            'Measuring tape',
            'Level'
        ],
        correctAnswer: 'Inclinometer',
        explanation: 'Inclinometers specifically measure angles of slope with high accuracy.',
        wrongAnswerExplanations: {
            'Ruler': 'Cannot measure angles accurately.',
            'Measuring tape': 'Measures length, not slope angle.',
            'Level': 'Only indicates if surface is horizontal.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 2
    },
    {
        id: 'cl8_ch17_t2_qm7',
        type: 'mcq',
        question: 'For measuring the pressure in a bicycle tire, which unit would be most appropriate?',
        options: [
            'PSI (Pounds per Square Inch)',
            'Pascal',
            'Bar',
            'Atmospheres'
        ],
        correctAnswer: 'PSI (Pounds per Square Inch)',
        explanation: 'PSI is the standard unit for tire pressure measurement in most countries.',
        wrongAnswerExplanations: {
            'Pascal': 'Too small for practical tire pressure readings.',
            'Bar': 'Less commonly used for tire pressure.',
            'Atmospheres': 'Too large for tire pressure measurements.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 2
    },
    {
        id: 'cl8_ch17_t2_qm8',
        type: 'mcq',
        question: 'Which measurement would be most appropriate for tracking a person`s daily water intake ? ',
        options: [
            'Milliliters',
            'Liters',
            'Cubic centimeters',
            'Fluid ounces'
        ],
        correctAnswer: 'Liters',
        explanation: 'Liters are commonly used for daily water intake as they provide practical measurement.',
        wrongAnswerExplanations: {
            'Milliliters': 'Would give unnecessarily large numbers.',
            'Cubic centimeters': 'Not practical for daily use.',
            'Fluid ounces': 'Not standard in metric system.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 2
    },
    {
        id: 'cl8_ch17_t2_qm9',
        type: 'mcq',
        question: 'What would be the most precise way to measure the diameter of a coin?',
        options: [
            'Vernier caliper',
            'Ruler',
            'Measuring tape',
            'String'
        ],
        correctAnswer: 'Vernier caliper',
        explanation: 'Vernier calipers provide precise measurements to fractions of millimeters.',
        wrongAnswerExplanations: {
            'Ruler': 'Not precise enough for small measurements.',
            'Measuring tape': 'Too flexible for precise diameter measurement.',
            'String': 'Not accurate for precise measurements.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 2
    },
    {
        id: 'cl8_ch17_t2_qm10',
        type: 'mcq',
        question: 'Which tool would give the most accurate measurement of wind speed?',
        options: [
            'Anemometer',
            'Barometer',
            'Thermometer',
            'Hygrometer'
        ],
        correctAnswer: 'Anemometer',
        explanation: 'Anemometers are specifically designed to measure wind speed accurately.',
        wrongAnswerExplanations: {
            'Barometer': 'Measures air pressure, not wind speed.',
            'Thermometer': 'Measures temperature, not wind speed.',
            'Hygrometer': 'Measures humidity, not wind speed.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 2
    },
    {
        id: 'cl8_ch17_t2_qm11',
        type: 'mcq',
        question: 'What would be the most appropriate unit to measure the amount of data downloaded from the internet?',
        options: [
            'Gigabytes',
            'Kilometers',
            'Megapixels',
            'Watts'
        ],
        correctAnswer: 'Gigabytes',
        explanation: 'Digital data is measured in bytes, with gigabytes suitable for large downloads.',
        wrongAnswerExplanations: {
            'Kilometers': 'Measures distance, not data.',
            'Megapixels': 'Measures image resolution, not data volume.',
            'Watts': 'Measures power, not data.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 2
    },
    {
        id: 'cl8_ch17_t2_qm12',
        type: 'mcq',
        question: 'Which measurement tool would be most appropriate for measuring the humidity in a greenhouse?',
        options: [
            'Hygrometer',
            'Thermometer',
            'Barometer',
            'pH meter'
        ],
        correctAnswer: 'Hygrometer',
        explanation: 'Hygrometers specifically measure relative humidity in the air.',
        wrongAnswerExplanations: {
            'Thermometer': 'Measures temperature, not humidity.',
            'Barometer': 'Measures air pressure, not humidity.',
            'pH meter': 'Measures acidity, not humidity.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 2
    },
    {
        id: 'cl8_ch17_t2_qm13',
        type: 'mcq',
        question: 'What would be the most appropriate unit for measuring the brightness of a light bulb?',
        options: [
            'Lumens',
            'Watts',
            'Volts',
            'Amperes'
        ],
        correctAnswer: 'Lumens',
        explanation: 'Lumens measure the actual light output or brightness of a light source.',
        wrongAnswerExplanations: {
            'Watts': 'Measures power consumption, not brightness.',
            'Volts': 'Measures electrical potential, not brightness.',
            'Amperes': 'Measures current flow, not brightness.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 2
    },
    {
        id: 'cl8_ch17_t2_qm14',
        type: 'mcq',
        question: 'Which tool would provide the most accurate measurement of soil pH in a garden?',
        options: [
            'Digital pH meter',
            'Litmus paper',
            'Color chart',
            'Thermometer'
        ],
        correctAnswer: 'Digital pH meter',
        explanation: 'Digital pH meters provide precise numerical readings of soil acidity.',
        wrongAnswerExplanations: {
            'Litmus paper': 'Less accurate than digital meters.',
            'Color chart': 'Provides only approximate readings.',
            'Thermometer': 'Measures temperature, not pH.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 2
    },
    {
        id: 'cl8_ch17_t2_qm15',
        type: 'mcq',
        question: 'What would be the most appropriate unit for measuring the energy content of food?',
        options: [
            'Kilocalories',
            'Kilograms',
            'Milliliters',
            'Meters'
        ],
        correctAnswer: 'Kilocalories',
        explanation: 'Kilocalories (food calories) measure the energy content in food.',
        wrongAnswerExplanations: {
            'Kilograms': 'Measures mass, not energy content.',
            'Milliliters': 'Measures volume, not energy.',
            'Meters': 'Measures length, not energy.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 2
    },
    {
        id: 'cl8_ch17_t2_qm16',
        type: 'mcq',
        question: 'Which tool would give the most accurate measurement of a person`s height for medical records ? ',
        options: [
            'Stadiometer',
            'Tape measure',
            'Ruler',
            'Yardstick'
        ],
        correctAnswer: 'Stadiometer',
        explanation: 'Stadiometers are specifically designed for accurate height measurement.',
        wrongAnswerExplanations: {
            'Tape measure': 'Less accurate due to flexibility.',
            'Ruler': 'Too short and less accurate.',
            'Yardstick': 'Less precise than a stadiometer.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 2
    },
    {
        id: 'cl8_ch17_t2_qm17',
        type: 'mcq',
        question: 'What would be the most appropriate unit for measuring the power of a microwave oven?',
        options: [
            'Watts',
            'Volts',
            'Amperes',
            'Ohms'
        ],
        correctAnswer: 'Watts',
        explanation: 'Watts measure power output, which is crucial for microwave cooking capacity.',
        wrongAnswerExplanations: {
            'Volts': 'Measures electrical potential, not power.',
            'Amperes': 'Measures current, not power.',
            'Ohms': 'Measures resistance, not power.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 2
    },
    {
        id: 'cl8_ch17_t2_qm18',
        type: 'mcq',
        question: 'Which measurement would be most appropriate for tracking fuel efficiency in a car?',
        options: [
            'Kilometers per liter',
            'Kilometers per hour',
            'Liters',
            'Kilometers'
        ],
        correctAnswer: 'Kilometers per liter',
        explanation: 'Kilometers per liter measures distance traveled per unit of fuel consumed.',
        wrongAnswerExplanations: {
            'Kilometers per hour': 'Measures speed, not fuel efficiency.',
            'Liters': 'Measures volume only, not efficiency.',
            'Kilometers': 'Measures distance only, not efficiency.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 2
    },
    {
        id: 'cl8_ch17_t2_qm19',
        type: 'mcq',
        question: 'What would be the most appropriate tool for measuring small angles in carpentry?',
        options: [
            'Digital angle finder',
            'Standard protractor',
            'Ruler',
            'Measuring tape'
        ],
        correctAnswer: 'Digital angle finder',
        explanation: 'Digital angle finders provide precise angle measurements needed in carpentry.',
        wrongAnswerExplanations: {
            'Standard protractor': 'Less precise than digital tools.',
            'Ruler': 'Cannot measure angles accurately.',
            'Measuring tape': 'Measures length, not angles.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 2
    },
    {
        id: 'cl8_ch17_t2_qm20',
        type: 'mcq',
        question: 'Which unit would be most appropriate for measuring the capacity of a USB flash drive?',
        options: [
            'Gigabytes',
            'Gigahertz',
            'Pixels',
            'Watts'
        ],
        correctAnswer: 'Gigabytes',
        explanation: 'Storage capacity is measured in gigabytes for digital storage devices.',
        wrongAnswerExplanations: {
            'Gigahertz': 'Measures processor speed, not storage.',
            'Pixels': 'Measures display resolution, not storage.',
            'Watts': 'Measures power consumption, not storage.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 2
    }
]; 