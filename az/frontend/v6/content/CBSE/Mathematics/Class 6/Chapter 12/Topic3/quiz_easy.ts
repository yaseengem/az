import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl6_ch12_t3_q1',
        type: 'mcq',
        question: 'On a map with scale 1:1000, 1 cm represents:',
        options: [
            '10 meters',
            '100 meters',
            '1 kilometer',
            '10 kilometers'
        ],
        correctAnswer: '10 meters',
        explanation: '1:1000 means 1 cm on map = 1000 cm in real life. 1000 cm = 10 meters.',
        wrongAnswerExplanations: {
            '100 meters': '1000 cm is equal to 10 meters, not 100 meters.',
            '1 kilometer': '1000 cm is equal to 10 meters, not 1 kilometer.',
            '10 kilometers': '1000 cm is equal to 10 meters, not 10 kilometers.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch12_t3_q2',
        type: 'mcq',
        question: 'If a map scale is 1:50000, what does this mean?',
        options: [
            '1 cm on map = 50000 cm in real life',
            '1 cm on map = 50000 m in real life',
            '1 cm on map = 50000 km in real life',
            '1 m on map = 50000 cm in real life'
        ],
        correctAnswer: '1 cm on map = 50000 cm in real life',
        explanation: 'The scale 1:50000 means that 1 unit on the map equals 50000 units in real life.',
        wrongAnswerExplanations: {
            '1 cm on map = 50000 m in real life': 'The scale ratio is in the same units, so 1 cm = 50000 cm.',
            '1 cm on map = 50000 km in real life': 'The scale ratio is in the same units, so 1 cm = 50000 cm.',
            '1 m on map = 50000 cm in real life': 'The scale ratio is in the same units, so 1 cm = 50000 cm.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch12_t3_q3',
        type: 'mcq',
        question: 'On a map with scale 1:2000, two points are 5 cm apart. What is the actual distance?',
        options: [
            '100 meters',
            '1 kilometer',
            '10 meters',
            '1000 meters'
        ],
        correctAnswer: '100 meters',
        explanation: '5 cm × 2000 = 10000 cm = 100 meters.',
        wrongAnswerExplanations: {
            '1 kilometer': '10000 cm is equal to 100 meters, not 1 kilometer.',
            '10 meters': '10000 cm is equal to 100 meters, not 10 meters.',
            '1000 meters': '10000 cm is equal to 100 meters, not 1000 meters.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch12_t3_q4',
        type: 'mcq',
        question: 'A building is 30 meters tall. If drawn at scale 1:100, how tall will it be in the drawing?',
        options: [
            '30 cm',
            '3 cm',
            '300 cm',
            '0.3 cm'
        ],
        correctAnswer: '30 cm',
        explanation: '30 meters = 3000 cm; 3000 ÷ 100 = 30 cm.',
        wrongAnswerExplanations: {
            '3 cm': '30 meters = 3000 cm, divided by 100 = 30 cm.',
            '300 cm': '30 meters = 3000 cm, divided by 100 = 30 cm.',
            '0.3 cm': '30 meters = 3000 cm, divided by 100 = 30 cm.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch12_t3_q5',
        type: 'mcq',
        question: 'If 1 cm on a map represents 2 km in real life, what is the scale?',
        options: [
            '1:200000',
            '1:2000',
            '1:200',
            '1:20'
        ],
        correctAnswer: '1:200000',
        explanation: '2 km = 200000 cm, so scale is 1:200000.',
        wrongAnswerExplanations: {
            '1:2000': '2 km = 200000 cm, not 2000 cm.',
            '1:200': '2 km = 200000 cm, not 200 cm.',
            '1:20': '2 km = 200000 cm, not 20 cm.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch12_t3_q6',
        type: 'mcq',
        question: 'On a map with scale 1:25000, a river is 8 cm long. What is its actual length?',
        options: [
            '2 km',
            '20 km',
            '200 m',
            '2000 m'
        ],
        correctAnswer: '2 km',
        explanation: '8 cm × 25000 = 200000 cm = 2 km.',
        wrongAnswerExplanations: {
            '20 km': '200000 cm is equal to 2 km, not 20 km.',
            '200 m': '200000 cm is equal to 2 km, not 200 m.',
            '2000 m': '200000 cm is equal to 2 km, not 2000 m.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch12_t3_q7',
        type: 'mcq',
        question: 'A model car is made at scale 1:24. If the real car is 4.8 m long, how long is the model?',
        options: [
            '20 cm',
            '2 cm',
            '200 cm',
            '0.2 cm'
        ],
        correctAnswer: '20 cm',
        explanation: '4.8 m = 480 cm; 480 ÷ 24 = 20 cm.',
        wrongAnswerExplanations: {
            '2 cm': '480 cm divided by 24 = 20 cm.',
            '200 cm': '480 cm divided by 24 = 20 cm.',
            '0.2 cm': '480 cm divided by 24 = 20 cm.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch12_t3_q8',
        type: 'mcq',
        question: 'Two cities are 25 km apart. On a map, they are 5 cm apart. What is the map\'s scale?',
        options: [
            '1:500000',
            '1:5000',
            '1:500',
            '1:50'
        ],
        correctAnswer: '1:500000',
        explanation: '25 km = 2500000 cm; Scale = 5:2500000 = 1:500000.',
        wrongAnswerExplanations: {
            '1:5000': '25 km = 2500000 cm, scale is 1:500000.',
            '1:500': '25 km = 2500000 cm, scale is 1:500000.',
            '1:50': '25 km = 2500000 cm, scale is 1:500000.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch12_t3_q9',
        type: 'mcq',
        question: 'On a map with scale 1:10000, a park is 3 cm wide. What is its actual width?',
        options: [
            '300 meters',
            '30 meters',
            '3 kilometers',
            '3000 meters'
        ],
        correctAnswer: '300 meters',
        explanation: '3 cm × 10000 = 30000 cm = 300 meters.',
        wrongAnswerExplanations: {
            '30 meters': '30000 cm is equal to 300 meters, not 30 meters.',
            '3 kilometers': '30000 cm is equal to 300 meters, not 3 kilometers.',
            '3000 meters': '30000 cm is equal to 300 meters, not 3000 meters.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch12_t3_q10',
        type: 'mcq',
        question: 'A real bridge is 120 m long. If drawn at scale 1:2000, how long will it be in the drawing?',
        options: [
            '6 cm',
            '60 cm',
            '0.6 cm',
            '600 cm'
        ],
        correctAnswer: '6 cm',
        explanation: '120 m = 12000 cm; 12000 ÷ 2000 = 6 cm.',
        wrongAnswerExplanations: {
            '60 cm': '12000 cm divided by 2000 = 6 cm.',
            '0.6 cm': '12000 cm divided by 2000 = 6 cm.',
            '600 cm': '12000 cm divided by 2000 = 6 cm.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch12_t3_q11',
        type: 'mcq',
        question: 'If a map scale is 1:5000, what distance does 2 cm represent?',
        options: [
            '100 meters',
            '10 meters',
            '1 kilometer',
            '1000 meters'
        ],
        correctAnswer: '100 meters',
        explanation: '2 cm × 5000 = 10000 cm = 100 meters.',
        wrongAnswerExplanations: {
            '10 meters': '10000 cm is equal to 100 meters, not 10 meters.',
            '1 kilometer': '10000 cm is equal to 100 meters, not 1 kilometer.',
            '1000 meters': '10000 cm is equal to 100 meters, not 1000 meters.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch12_t3_q12',
        type: 'mcq',
        question: 'A real building is 45 m tall. If drawn at scale 1:150, how tall will it be in the drawing?',
        options: [
            '30 cm',
            '3 cm',
            '300 cm',
            '0.3 cm'
        ],
        correctAnswer: '30 cm',
        explanation: '45 m = 4500 cm; 4500 ÷ 150 = 30 cm.',
        wrongAnswerExplanations: {
            '3 cm': '4500 cm divided by 150 = 30 cm.',
            '300 cm': '4500 cm divided by 150 = 30 cm.',
            '0.3 cm': '4500 cm divided by 150 = 30 cm.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch12_t3_q13',
        type: 'mcq',
        question: 'On a map with scale 1:100000, two towns are 4 cm apart. What is the actual distance?',
        options: [
            '4 km',
            '40 km',
            '400 m',
            '4000 m'
        ],
        correctAnswer: '4 km',
        explanation: '4 cm × 100000 = 400000 cm = 4 km.',
        wrongAnswerExplanations: {
            '40 km': '400000 cm is equal to 4 km, not 40 km.',
            '400 m': '400000 cm is equal to 4 km, not 400 m.',
            '4000 m': '400000 cm is equal to 4 km, not 4000 m.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch12_t3_q14',
        type: 'mcq',
        question: 'A model airplane is made at scale 1:72. If the real airplane is 36 m long, how long is the model?',
        options: [
            '50 cm',
            '5 cm',
            '500 cm',
            '0.5 cm'
        ],
        correctAnswer: '50 cm',
        explanation: '36 m = 3600 cm; 3600 ÷ 72 = 50 cm.',
        wrongAnswerExplanations: {
            '5 cm': '3600 cm divided by 72 = 50 cm.',
            '500 cm': '3600 cm divided by 72 = 50 cm.',
            '0.5 cm': '3600 cm divided by 72 = 50 cm.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch12_t3_q15',
        type: 'mcq',
        question: 'If 1 cm on a map represents 5 km in real life, what is the scale?',
        options: [
            '1:500000',
            '1:5000',
            '1:500',
            '1:50'
        ],
        correctAnswer: '1:500000',
        explanation: '5 km = 500000 cm, so scale is 1:500000.',
        wrongAnswerExplanations: {
            '1:5000': '5 km = 500000 cm, not 5000 cm.',
            '1:500': '5 km = 500000 cm, not 500 cm.',
            '1:50': '5 km = 500000 cm, not 50 cm.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch12_t3_q16',
        type: 'mcq',
        question: 'On a map with scale 1:20000, a lake is 6 cm long. What is its actual length?',
        options: [
            '1.2 km',
            '12 km',
            '120 m',
            '1200 m'
        ],
        correctAnswer: '1.2 km',
        explanation: '6 cm × 20000 = 120000 cm = 1.2 km.',
        wrongAnswerExplanations: {
            '12 km': '120000 cm is equal to 1.2 km, not 12 km.',
            '120 m': '120000 cm is equal to 1.2 km, not 120 m.',
            '1200 m': '120000 cm is equal to 1.2 km, not 1200 m.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch12_t3_q17',
        type: 'mcq',
        question: 'A real tree is 15 m tall. If drawn at scale 1:50, how tall will it be in the drawing?',
        options: [
            '30 cm',
            '3 cm',
            '300 cm',
            '0.3 cm'
        ],
        correctAnswer: '30 cm',
        explanation: '15 m = 1500 cm; 1500 ÷ 50 = 30 cm.',
        wrongAnswerExplanations: {
            '3 cm': '1500 cm divided by 50 = 30 cm.',
            '300 cm': '1500 cm divided by 50 = 30 cm.',
            '0.3 cm': '1500 cm divided by 50 = 30 cm.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch12_t3_q18',
        type: 'mcq',
        question: 'Two villages are 8 km apart. On a map, they are 4 cm apart. What is the map\'s scale?',
        options: [
            '1:200000',
            '1:2000',
            '1:200',
            '1:20'
        ],
        correctAnswer: '1:200000',
        explanation: '8 km = 800000 cm; Scale = 4:800000 = 1:200000.',
        wrongAnswerExplanations: {
            '1:2000': '8 km = 800000 cm, scale is 1:200000.',
            '1:200': '8 km = 800000 cm, scale is 1:200000.',
            '1:20': '8 km = 800000 cm, scale is 1:200000.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch12_t3_q19',
        type: 'mcq',
        question: 'On a map with scale 1:5000, a road is 8 cm long. What is its actual length?',
        options: [
            '400 meters',
            '40 meters',
            '4 kilometers',
            '4000 meters'
        ],
        correctAnswer: '400 meters',
        explanation: '8 cm × 5000 = 40000 cm = 400 meters.',
        wrongAnswerExplanations: {
            '40 meters': '40000 cm is equal to 400 meters, not 40 meters.',
            '4 kilometers': '40000 cm is equal to 400 meters, not 4 kilometers.',
            '4000 meters': '40000 cm is equal to 400 meters, not 4000 meters.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch12_t3_q20',
        type: 'mcq',
        question: 'A model ship is made at scale 1:100. If the real ship is 25 m long, how long is the model?',
        options: [
            '25 cm',
            '2.5 cm',
            '250 cm',
            '0.25 cm'
        ],
        correctAnswer: '25 cm',
        explanation: '25 m = 2500 cm; 2500 ÷ 100 = 25 cm.',
        wrongAnswerExplanations: {
            '2.5 cm': '2500 cm divided by 100 = 25 cm.',
            '250 cm': '2500 cm divided by 100 = 25 cm.',
            '0.25 cm': '2500 cm divided by 100 = 25 cm.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    }
]; 