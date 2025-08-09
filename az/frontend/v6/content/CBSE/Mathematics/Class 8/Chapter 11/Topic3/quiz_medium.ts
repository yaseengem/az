import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl8_ch11_t3_qm1',
        type: 'mcq',
        question: 'If 12 workers working 8 hours a day can complete a task in 10 days, how many days will 16 workers take if they work 6 hours a day? 👷',
        options: ['10 days', '12 days', '15 days', '8 days'],
        correctAnswer: '10 days',
        explanation: 'Using inverse proportion with both workers and hours: (12 × 8 × 10 = 16 × 6 × x), so x = 10 days',
        wrongAnswerExplanations: {
            '12 days': 'Consider both the number of workers and hours per day.',
            '15 days': 'Check your calculations using (12 × 8 × 10) ÷ (16 × 6).',
            '8 days': 'More workers but fewer hours balance out.'
        },
        difficulty: 'medium',
        marks: 3,
        recommendedTime: 3
    },
    {
        id: 'cl8_ch11_t3_qm2',
        type: 'mcq',
        question: 'A factory produces 1200 items in 5 days with 8 machines. How many machines are needed to produce 1800 items in 6 days? ⚙️',
        options: ['9 machines', '10 machines', '12 machines', '15 machines'],
        correctAnswer: '10 machines',
        explanation: 'Using direct and inverse proportion: (1200 × 6 × x = 1800 × 5 × 8), so x = 10 machines',
        wrongAnswerExplanations: {
            '9 machines': 'Consider both time and quantity changes.',
            '12 machines': 'Check your calculations carefully.',
            '15 machines': 'This is too many machines for the requirement.'
        },
        difficulty: 'medium',
        marks: 3,
        recommendedTime: 3
    },
    {
        id: 'cl8_ch11_t3_qm3',
        type: 'mcq',
        question: 'If 15 workers can build a wall in 12 days working 6 hours daily, how many hours per day should 10 workers work to complete it in 9 days? ⏰',
        options: ['8 hours', '10 hours', '12 hours', '14 hours'],
        correctAnswer: '12 hours',
        explanation: 'Using inverse proportion: (15 × 12 × 6 = 10 × 9 × x), so x = 12 hours',
        wrongAnswerExplanations: {
            '8 hours': 'Fewer workers and days require more hours.',
            '10 hours': 'Check your calculations using (15 × 12 × 6) ÷ (10 × 9).',
            '14 hours': 'This is more hours than needed.'
        },
        difficulty: 'medium',
        marks: 3,
        recommendedTime: 3
    },
    {
        id: 'cl8_ch11_t3_qm4',
        type: 'mcq',
        question: 'A water tank can be filled by pipe A in 4 hours and by pipe B in 6 hours. If both pipes are opened together, how long will it take to fill the tank? 🚰',
        options: ['2.4 hours', '5 hours', '3.5 hours', '2 hours'],
        correctAnswer: '2.4 hours',
        explanation: 'Rate1 = 1/4, Rate2 = 1/6. Total rate = 1/4 + 1/6 = 5/12. Time = 12/5 = 2.4 hours',
        wrongAnswerExplanations: {
            '5 hours': 'Combined rate is faster than individual rates.',
            '3.5 hours': 'Add the rates, not the times.',
            '2 hours': 'Check your calculations using 1/x = 1/4 + 1/6.'
        },
        difficulty: 'medium',
        marks: 3,
        recommendedTime: 3
    },
    {
        id: 'cl8_ch11_t3_qm5',
        type: 'mcq',
        question: 'A car travels 360 km using 30 liters of petrol. How far can it travel with 45 liters if the speed is reduced by 20%? 🚗',
        options: ['432 km', '450 km', '480 km', '540 km'],
        correctAnswer: '432 km',
        explanation: 'First find distance with 45L at normal speed (540 km), then reduce by 20% to get 432 km',
        wrongAnswerExplanations: {
            '450 km': 'Consider both fuel increase and speed reduction.',
            '480 km': 'The 20% speed reduction affects the distance.',
            '540 km': 'This ignores the speed reduction.'
        },
        difficulty: 'medium',
        marks: 3,
        recommendedTime: 3
    },
    {
        id: 'cl8_ch11_t3_qm6',
        type: 'mcq',
        question: 'If 8 men or 12 women can complete a job in 25 days, in how many days will 5 men and 6 women together complete the job? 👥',
        options: ['20 days', '24 days', '28 days', '30 days'],
        correctAnswer: '24 days',
        explanation: '1 man = 1.5 women. Total workforce = 5 men + 6 women = 7.5 + 6 = 13.5 women. Using inverse proportion: (12 × 25 = 13.5 × x), x = 24 days',
        wrongAnswerExplanations: {
            '20 days': 'Consider equivalent workforce calculation.',
            '28 days': 'Check your calculations using women as base unit.',
            '30 days': 'Combined workforce will be faster than this.'
        },
        difficulty: 'medium',
        marks: 3,
        recommendedTime: 3
    },
    {
        id: 'cl8_ch11_t3_qm7',
        type: 'mcq',
        question: 'A pump can fill a tank in 3 hours. After working for 1 hour, another pump of double capacity joins in. How long will they take to fill the remaining tank? ⚡',
        options: ['40 minutes', '45 minutes', '50 minutes', '60 minutes'],
        correctAnswer: '40 minutes',
        explanation: '1/3 filled in 1 hour. Remaining 2/3 with combined capacity of 3 units takes 40 minutes',
        wrongAnswerExplanations: {
            '45 minutes': 'Consider the combined capacity after 1 hour.',
            '50 minutes': 'The second pump has double capacity.',
            '60 minutes': 'Combined rate is faster than this.'
        },
        difficulty: 'medium',
        marks: 3,
        recommendedTime: 3
    },
    {
        id: 'cl8_ch11_t3_qm8',
        type: 'mcq',
        question: 'If 9 machines working 7 hours a day for 10 days can produce 1890 items, how many items will 15 machines produce in 6 days working 8 hours a day? 🏭',
        options: ['2160 items', '1980 items', '2040 items', '2280 items'],
        correctAnswer: '2160 items',
        explanation: 'Using proportion: (9 × 7 × 10 × x = 15 × 8 × 6 × 1890), x = 2160 items',
        wrongAnswerExplanations: {
            '1980 items': 'Consider all variables: machines, hours, and days.',
            '2040 items': 'Check your calculations using all four variables.',
            '2280 items': 'This is too high. Verify your multiplication.'
        },
        difficulty: 'medium',
        marks: 3,
        recommendedTime: 3
    },
    {
        id: 'cl8_ch11_t3_qm9',
        type: 'mcq',
        question: 'A tap can fill a tank in 8 hours. Due to a leak, it takes 10 hours to fill the tank. If the tank is full, in how many hours will the leak empty it? 💧',
        options: ['40 hours', '35 hours', '45 hours', '50 hours'],
        correctAnswer: '40 hours',
        explanation: 'Rate of leak = 1/10 - 1/8 = 1/40 tank/hour. Time to empty = 40 hours',
        wrongAnswerExplanations: {
            '35 hours': 'Calculate difference in filling rates first.',
            '45 hours': 'Use 1/leak_rate to find emptying time.',
            '50 hours': 'The leak rate is faster than this.'
        },
        difficulty: 'medium',
        marks: 3,
        recommendedTime: 3
    },
    {
        id: 'cl8_ch11_t3_qm10',
        type: 'mcq',
        question: 'If 16 workers working 9 hours a day can build a wall in 15 days, how many workers are needed to build it in 12 days working 10 hours a day? 👷',
        options: ['18 workers', '20 workers', '22 workers', '24 workers'],
        correctAnswer: '18 workers',
        explanation: 'Using inverse proportion: (16 × 9 × 15 = x × 10 × 12), so x = 18 workers',
        wrongAnswerExplanations: {
            '20 workers': 'Consider both hours per day and number of days.',
            '22 workers': 'Check your calculations using (16 × 9 × 15) ÷ (10 × 12).',
            '24 workers': 'This is too many workers for the given conditions.'
        },
        difficulty: 'medium',
        marks: 3,
        recommendedTime: 3
    },
    {
        id: 'cl8_ch11_t3_qm11',
        type: 'mcq',
        question: 'A factory produces 800 units in 20 days with 15 workers. If the production needs to be increased by 25%, how many extra workers are needed if time remains same? 🏭',
        options: ['3 workers', '4 workers', '5 workers', '6 workers'],
        correctAnswer: '4 workers',
        explanation: 'New production = 1000 units. Using direct proportion: (800/15 = 1000/x), so extra workers = 19 - 15 = 4',
        wrongAnswerExplanations: {
            '3 workers': 'Production increase requires proportionally more workers.',
            '5 workers': 'Check your calculations using (1000 × 15) ÷ 800.',
            '6 workers': 'This is more workers than needed.'
        },
        difficulty: 'medium',
        marks: 3,
        recommendedTime: 3
    },
    {
        id: 'cl8_ch11_t3_qm12',
        type: 'mcq',
        question: 'Two pipes A and B can fill a tank in 12 and 15 hours respectively. If both are opened together, after how many hours should B be closed so that the tank is filled in 10 hours? ⏱️',
        options: ['4 hours', '5 hours', '6 hours', '7 hours'],
        correctAnswer: '5 hours',
        explanation: 'Let B work for x hours. Equation: x(1/12 + 1/15) + (10-x)/12 = 1. Solving gives x = 5',
        wrongAnswerExplanations: {
            '4 hours': 'Check the equation considering both pipes working together.',
            '6 hours': 'This would fill more than required in 10 hours.',
            '7 hours': 'The tank would be overfilled in 10 hours.'
        },
        difficulty: 'medium',
        marks: 3,
        recommendedTime: 3
    },
    {
        id: 'cl8_ch11_t3_qm13',
        type: 'mcq',
        question: 'A pump can fill a tank in 20 hours. Due to a leak, it takes 25 hours to fill the tank. If the tank is 1/5 full and both pump and leak are open, how long will it take to fill completely? ⚡',
        options: ['20 hours', '25 hours', '30 hours', '35 hours'],
        correctAnswer: '20 hours',
        explanation: 'Net filling rate = 1/25 tank/hour. With 1/5 full, remaining 4/5 takes 20 hours',
        wrongAnswerExplanations: {
            '25 hours': 'Consider the portion already filled.',
            '30 hours': 'The rate remains constant for remaining portion.',
            '35 hours': 'This is too long given the net filling rate.'
        },
        difficulty: 'medium',
        marks: 3,
        recommendedTime: 3
    },
    {
        id: 'cl8_ch11_t3_qm14',
        type: 'mcq',
        question: 'If 10 men working 6 hours a day for 12 days can reap a field, how many days will 15 men working 8 hours a day take to reap the same field? 👨‍🌾',
        options: ['6 days', '8 days', '7 days', '9 days'],
        correctAnswer: '6 days',
        explanation: 'Using inverse proportion: (10 × 6 × 12 = 15 × 8 × x), so x = 6 days',
        wrongAnswerExplanations: {
            '8 days': 'More workers and hours mean fewer days needed.',
            '7 days': 'Check your calculations using (10 × 6 × 12) ÷ (15 × 8).',
            '9 days': 'This is too long with increased workforce and hours.'
        },
        difficulty: 'medium',
        marks: 3,
        recommendedTime: 3
    },
    {
        id: 'cl8_ch11_t3_qm15',
        type: 'mcq',
        question: 'A water tank has three taps A, B, and C. A can fill it in 12 hours, B in 15 hours, and C can empty it in 20 hours. If all taps are opened together, in how many hours will the tank be filled? 🚰',
        options: ['20 hours', '24 hours', '30 hours', '40 hours'],
        correctAnswer: '24 hours',
        explanation: 'Net rate = 1/12 + 1/15 - 1/20 = 1/24 tank/hour. Time = 24 hours',
        wrongAnswerExplanations: {
            '20 hours': 'Consider the emptying effect of tap C.',
            '30 hours': 'Calculate combined rate including the emptying tap.',
            '40 hours': 'The filling would be faster than this.'
        },
        difficulty: 'medium',
        marks: 3,
        recommendedTime: 3
    },
    {
        id: 'cl8_ch11_t3_qm16',
        type: 'mcq',
        question: 'A machine can produce 300 items in 5 days working 8 hours per day. How many hours per day should it work to produce 540 items in 6 days? ⚙️',
        options: ['12 hours', '14 hours', '10 hours', '16 hours'],
        correctAnswer: '12 hours',
        explanation: 'Using proportion: (300 × 6 × x = 540 × 5 × 8), so x = 12 hours',
        wrongAnswerExplanations: {
            '14 hours': 'Check your calculations using (540 × 5 × 8) ÷ (300 × 6).',
            '10 hours': 'More production in similar days needs more hours.',
            '16 hours': 'This is more hours than needed.'
        },
        difficulty: 'medium',
        marks: 3,
        recommendedTime: 3
    },
    {
        id: 'cl8_ch11_t3_qm17',
        type: 'mcq',
        question: 'If 8 workers working 7 hours a day can complete a job in 10 days, how many workers are needed to complete the job in 7 days if they work 5 hours a day? 👥',
        options: ['15 workers', '16 workers', '17 workers', '18 workers'],
        correctAnswer: '16 workers',
        explanation: 'Using inverse proportion: (8 × 7 × 10 = x × 5 × 7), so x = 16 workers',
        wrongAnswerExplanations: {
            '15 workers': 'Less hours per day requires more workers.',
            '17 workers': 'Check your calculations using (8 × 7 × 10) ÷ (5 × 7).',
            '18 workers': 'This is more workers than needed.'
        },
        difficulty: 'medium',
        marks: 3,
        recommendedTime: 3
    },
    {
        id: 'cl8_ch11_t3_qm18',
        type: 'mcq',
        question: 'A tap can fill a tank in 8 hours. Another tap can fill it in 12 hours. If both taps are opened when the tank is 1/4 full, how long will it take to fill completely? 🚰',
        options: ['3.5 hours', '4 hours', '4.5 hours', '5 hours'],
        correctAnswer: '3.5 hours',
        explanation: 'Combined rate = 1/8 + 1/12 = 5/24 tank/hour. For remaining 3/4, time = (3/4)/(5/24) = 3.5 hours',
        wrongAnswerExplanations: {
            '4 hours': 'Consider the portion already filled.',
            '4.5 hours': 'Combined rate is faster than this.',
            '5 hours': 'This is too long with both taps working.'
        },
        difficulty: 'medium',
        marks: 3,
        recommendedTime: 3
    },
    {
        id: 'cl8_ch11_t3_qm19',
        type: 'mcq',
        question: 'A factory increased its workforce by 25% and reduced working hours by 20%. What is the percentage change in production if efficiency remains same? 📊',
        options: ['0% change', '5% decrease', '5% increase', '10% decrease'],
        correctAnswer: '0% change',
        explanation: 'New production = old × 1.25 × 0.8 = old × 1, so no change',
        wrongAnswerExplanations: {
            '5% decrease': 'The increase in workers balances decrease in hours.',
            '5% increase': 'Calculate percentage change using (1.25 × 0.8 - 1) × 100.',
            '10% decrease': 'The changes balance each other out.'
        },
        difficulty: 'medium',
        marks: 3,
        recommendedTime: 3
    },
    {
        id: 'cl8_ch11_t3_qm20',
        type: 'mcq',
        question: 'If 15 workers can build a wall in 12 days, and after 4 days, 5 more workers join. How many more days will it take to complete the wall? 👷',
        options: ['6 days', '7 days', '5 days', '8 days'],
        correctAnswer: '5 days',
        explanation: '1/3 work done in 4 days. Remaining 2/3 with 20 workers takes 5 days',
        wrongAnswerExplanations: {
            '6 days': 'More workers means less time for remaining work.',
            '7 days': 'Consider the portion already completed.',
            '8 days': 'This is too long with additional workers.'
        },
        difficulty: 'medium',
        marks: 3,
        recommendedTime: 3
    }
]; 