import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl8_ch11_t3_qe1',
        type: 'mcq',
        question: 'If 6 workers can complete a task in 12 days, how many days will 9 workers take to complete the same task? 👷',
        options: ['18 days', '8 days', '6 days', '15 days'],
        correctAnswer: '8 days',
        explanation: 'Using inverse proportion: (6 × 12 = 9 × x), so x = 8 days',
        wrongAnswerExplanations: {
            '18 days': 'More workers means less time, not more time.',
            '6 days': 'Check your calculations using (6 × 12) ÷ 9.',
            '15 days': 'More workers will take less time, not more.'
        },
        difficulty: 'easy',
        marks: 2,
        recommendedTime: 2
    },
    {
        id: 'cl8_ch11_t3_qe2',
        type: 'mcq',
        question: 'If 15 pens cost ₹75, how much will 25 pens cost? 🖊️',
        options: ['₹125', '₹100', '₹150', '₹175'],
        correctAnswer: '₹125',
        explanation: 'Using direct proportion: (15/75 = 25/x), so x = ₹125',
        wrongAnswerExplanations: {
            '₹100': 'The cost increases proportionally with quantity.',
            '₹150': 'Check your calculations using cross multiplication.',
            '₹175': 'This is too high for the given ratio.'
        },
        difficulty: 'easy',
        marks: 2,
        recommendedTime: 2
    },
    {
        id: 'cl8_ch11_t3_qe3',
        type: 'mcq',
        question: 'A car travels 240 km in 4 hours. How far will it travel in 6 hours at the same speed? 🚗',
        options: ['300 km', '360 km', '400 km', '420 km'],
        correctAnswer: '360 km',
        explanation: 'Using direct proportion: (240/4 = x/6), so x = 360 km',
        wrongAnswerExplanations: {
            '300 km': 'The distance increases proportionally with time.',
            '400 km': 'Check your calculations using (240 × 6) ÷ 4.',
            '420 km': 'This is too high for the given ratio.'
        },
        difficulty: 'easy',
        marks: 2,
        recommendedTime: 2
    },
    {
        id: 'cl8_ch11_t3_qe4',
        type: 'mcq',
        question: 'If 8 taps can fill a tank in 6 hours, how many taps are needed to fill it in 4 hours? 🚰',
        options: ['10 taps', '12 taps', '14 taps', '16 taps'],
        correctAnswer: '12 taps',
        explanation: 'Using inverse proportion: (8 × 6 = x × 4), so x = 12 taps',
        wrongAnswerExplanations: {
            '10 taps': 'Less time requires more taps.',
            '14 taps': 'Check your calculations using (8 × 6) ÷ 4.',
            '16 taps': 'This is too many taps for the given time.'
        },
        difficulty: 'easy',
        marks: 2,
        recommendedTime: 2
    },
    {
        id: 'cl8_ch11_t3_qe5',
        type: 'mcq',
        question: 'If 20 kg of rice costs ₹800, what is the cost of 5 kg of rice? 🍚',
        options: ['₹200', '₹250', '₹300', '₹350'],
        correctAnswer: '₹200',
        explanation: 'Using direct proportion: (20/800 = 5/x), so x = ₹200',
        wrongAnswerExplanations: {
            '₹250': 'The cost decreases proportionally with quantity.',
            '₹300': 'Check your calculations using (5 × 800) ÷ 20.',
            '₹350': 'This is too high for the given ratio.'
        },
        difficulty: 'easy',
        marks: 2,
        recommendedTime: 2
    },
    {
        id: 'cl8_ch11_t3_qe6',
        type: 'mcq',
        question: 'A machine produces 100 items in 5 hours. How many items will it produce in 8 hours? ⚙️',
        options: ['140 items', '160 items', '180 items', '200 items'],
        correctAnswer: '160 items',
        explanation: 'Using direct proportion: (100/5 = x/8), so x = 160 items',
        wrongAnswerExplanations: {
            '140 items': 'The production increases proportionally with time.',
            '180 items': 'Check your calculations using (100 × 8) ÷ 5.',
            '200 items': 'This is too high for the given ratio.'
        },
        difficulty: 'easy',
        marks: 2,
        recommendedTime: 2
    },
    {
        id: 'cl8_ch11_t3_qe7',
        type: 'mcq',
        question: 'If 12 workers can build a wall in 10 days, how many workers are needed to build it in 15 days? 🏗️',
        options: ['8 workers', '6 workers', '10 workers', '18 workers'],
        correctAnswer: '8 workers',
        explanation: 'Using inverse proportion: (12 × 10 = x × 15), so x = 8 workers',
        wrongAnswerExplanations: {
            '6 workers': 'More time means fewer workers needed.',
            '10 workers': 'Check your calculations using (12 × 10) ÷ 15.',
            '18 workers': 'More time means fewer workers needed.'
        },
        difficulty: 'easy',
        marks: 2,
        recommendedTime: 2
    },
    {
        id: 'cl8_ch11_t3_qe8',
        type: 'mcq',
        question: 'A train covers 300 km in 5 hours. How long will it take to cover 420 km at the same speed? 🚂',
        options: ['6 hours', '7 hours', '8 hours', '9 hours'],
        correctAnswer: '7 hours',
        explanation: 'Using direct proportion: (300/5 = 420/x), so x = 7 hours',
        wrongAnswerExplanations: {
            '6 hours': 'More distance requires proportionally more time.',
            '8 hours': 'Check your calculations using (5 × 420) ÷ 300.',
            '9 hours': 'This is too long for the given ratio.'
        },
        difficulty: 'easy',
        marks: 2,
        recommendedTime: 2
    },
    {
        id: 'cl8_ch11_t3_qe9',
        type: 'mcq',
        question: 'If 16 oranges cost ₹80, how many oranges can be bought for ₹30? 🍊',
        options: ['4 oranges', '6 oranges', '8 oranges', '10 oranges'],
        correctAnswer: '6 oranges',
        explanation: 'Using direct proportion: (16/80 = x/30), so x = 6 oranges',
        wrongAnswerExplanations: {
            '4 oranges': 'Check your calculations using (16 × 30) ÷ 80.',
            '8 oranges': 'Less money means proportionally fewer oranges.',
            '10 oranges': 'This is too many for the given amount.'
        },
        difficulty: 'easy',
        marks: 2,
        recommendedTime: 2
    },
    {
        id: 'cl8_ch11_t3_qe10',
        type: 'mcq',
        question: 'If 9 machines can complete a job in 8 days, how many days will 6 machines take? ⚡',
        options: ['10 days', '12 days', '14 days', '16 days'],
        correctAnswer: '12 days',
        explanation: 'Using inverse proportion: (9 × 8 = 6 × x), so x = 12 days',
        wrongAnswerExplanations: {
            '10 days': 'Fewer machines means more time needed.',
            '14 days': 'Check your calculations using (9 × 8) ÷ 6.',
            '16 days': 'This is too long for the given ratio.'
        },
        difficulty: 'easy',
        marks: 2,
        recommendedTime: 2
    },
    {
        id: 'cl8_ch11_t3_qe11',
        type: 'mcq',
        question: 'A cyclist covers 40 km in 2 hours. How far will they travel in 5 hours at the same speed? 🚲',
        options: ['80 km', '90 km', '100 km', '110 km'],
        correctAnswer: '100 km',
        explanation: 'Using direct proportion: (40/2 = x/5), so x = 100 km',
        wrongAnswerExplanations: {
            '80 km': 'More time means proportionally more distance.',
            '90 km': 'Check your calculations using (40 × 5) ÷ 2.',
            '110 km': 'This is too far for the given ratio.'
        },
        difficulty: 'easy',
        marks: 2,
        recommendedTime: 2
    },
    {
        id: 'cl8_ch11_t3_qe12',
        type: 'mcq',
        question: 'If 15 workers can complete a task in 16 days, how many workers are needed to complete it in 20 days? 👥',
        options: ['10 workers', '12 workers', '14 workers', '18 workers'],
        correctAnswer: '12 workers',
        explanation: 'Using inverse proportion: (15 × 16 = x × 20), so x = 12 workers',
        wrongAnswerExplanations: {
            '10 workers': 'Check your calculations using (15 × 16) ÷ 20.',
            '14 workers': 'More time means fewer workers needed.',
            '18 workers': 'More time means fewer workers needed.'
        },
        difficulty: 'easy',
        marks: 2,
        recommendedTime: 2
    },
    {
        id: 'cl8_ch11_t3_qe13',
        type: 'mcq',
        question: 'If 25 meters of cloth cost ₹500, what is the cost of 35 meters? 🧵',
        options: ['₹600', '₹650', '₹700', '₹750'],
        correctAnswer: '₹700',
        explanation: 'Using direct proportion: (25/500 = 35/x), so x = ₹700',
        wrongAnswerExplanations: {
            '₹600': 'More length means proportionally more cost.',
            '₹650': 'Check your calculations using (35 × 500) ÷ 25.',
            '₹750': 'This is too expensive for the given ratio.'
        },
        difficulty: 'easy',
        marks: 2,
        recommendedTime: 2
    },
    {
        id: 'cl8_ch11_t3_qe14',
        type: 'mcq',
        question: 'If 8 taps can fill a tank in 15 hours, how many taps will fill it in 10 hours? 🚰',
        options: ['10 taps', '12 taps', '14 taps', '16 taps'],
        correctAnswer: '12 taps',
        explanation: 'Using inverse proportion: (8 × 15 = x × 10), so x = 12 taps',
        wrongAnswerExplanations: {
            '10 taps': 'Less time requires more taps.',
            '14 taps': 'Check your calculations using (8 × 15) ÷ 10.',
            '16 taps': 'This is too many taps for the given time.'
        },
        difficulty: 'easy',
        marks: 2,
        recommendedTime: 2
    },
    {
        id: 'cl8_ch11_t3_qe15',
        type: 'mcq',
        question: 'A printer prints 200 pages in 10 minutes. How many pages will it print in 15 minutes? 🖨️',
        options: ['250 pages', '300 pages', '350 pages', '400 pages'],
        correctAnswer: '300 pages',
        explanation: 'Using direct proportion: (200/10 = x/15), so x = 300 pages',
        wrongAnswerExplanations: {
            '250 pages': 'More time means proportionally more pages.',
            '350 pages': 'Check your calculations using (200 × 15) ÷ 10.',
            '400 pages': 'This is too many pages for the given ratio.'
        },
        difficulty: 'easy',
        marks: 2,
        recommendedTime: 2
    },
    {
        id: 'cl8_ch11_t3_qe16',
        type: 'mcq',
        question: 'If 12 kg of apples cost ₹360, how much will 8 kg cost? 🍎',
        options: ['₹240', '₹280', '₹320', '₹340'],
        correctAnswer: '₹240',
        explanation: 'Using direct proportion: (12/360 = 8/x), so x = ₹240',
        wrongAnswerExplanations: {
            '₹280': 'Less weight means proportionally less cost.',
            '₹320': 'Check your calculations using (8 × 360) ÷ 12.',
            '₹340': 'This is too expensive for the given ratio.'
        },
        difficulty: 'easy',
        marks: 2,
        recommendedTime: 2
    },
    {
        id: 'cl8_ch11_t3_qe17',
        type: 'mcq',
        question: 'If 10 workers can build a wall in 12 days, how many days will 15 workers take? 🏗️',
        options: ['6 days', '8 days', '10 days', '14 days'],
        correctAnswer: '8 days',
        explanation: 'Using inverse proportion: (10 × 12 = 15 × x), so x = 8 days',
        wrongAnswerExplanations: {
            '6 days': 'Check your calculations using (10 × 12) ÷ 15.',
            '10 days': 'More workers means less time needed.',
            '14 days': 'More workers means less time needed.'
        },
        difficulty: 'easy',
        marks: 2,
        recommendedTime: 2
    },
    {
        id: 'cl8_ch11_t3_qe18',
        type: 'mcq',
        question: 'A car travels 180 km in 3 hours. How long will it take to travel 300 km at the same speed? 🚗',
        options: ['4 hours', '5 hours', '6 hours', '7 hours'],
        correctAnswer: '5 hours',
        explanation: 'Using direct proportion: (180/3 = 300/x), so x = 5 hours',
        wrongAnswerExplanations: {
            '4 hours': 'More distance requires proportionally more time.',
            '6 hours': 'Check your calculations using (3 × 300) ÷ 180.',
            '7 hours': 'This is too long for the given ratio.'
        },
        difficulty: 'easy',
        marks: 2,
        recommendedTime: 2
    },
    {
        id: 'cl8_ch11_t3_qe19',
        type: 'mcq',
        question: 'If 18 workers can complete a job in 10 days, how many workers are needed to complete it in 6 days? 👷',
        options: ['25 workers', '30 workers', '35 workers', '40 workers'],
        correctAnswer: '30 workers',
        explanation: 'Using inverse proportion: (18 × 10 = x × 6), so x = 30 workers',
        wrongAnswerExplanations: {
            '25 workers': 'Less time requires more workers.',
            '35 workers': 'Check your calculations using (18 × 10) ÷ 6.',
            '40 workers': 'This is too many workers for the given time.'
        },
        difficulty: 'easy',
        marks: 2,
        recommendedTime: 2
    },
    {
        id: 'cl8_ch11_t3_qe20',
        type: 'mcq',
        question: 'If 30 meters of wire costs ₹150, what is the cost of 45 meters of wire? 🔌',
        options: ['₹175', '₹200', '₹225', '₹250'],
        correctAnswer: '₹225',
        explanation: 'Using direct proportion: (30/150 = 45/x), so x = ₹225',
        wrongAnswerExplanations: {
            '₹175': 'More length means proportionally more cost.',
            '₹200': 'Check your calculations using (45 × 150) ÷ 30.',
            '₹250': 'This is too expensive for the given ratio.'
        },
        difficulty: 'easy',
        marks: 2,
        recommendedTime: 2
    }
]; 