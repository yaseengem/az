import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl8_ch11_t2_qm1',
        type: 'mcq',
        question: 'If 8 workers can complete a project in 15 days working 6 hours per day, how many days will it take if 12 workers work 8 hours per day? 👷',
        options: ['7.5 days', '9 days', '8.5 days', '10 days'],
        correctAnswer: '7.5 days',
        explanation: 'Using inverse proportion with both workers and hours: (8 × 15 × 6 = 12 × x × 8), so x = 7.5 days',
        wrongAnswerExplanations: {
            '9 days': 'You need to consider both the number of workers and hours per day.',
            '8.5 days': 'Check your calculations using (8 × 15 × 6) ÷ (12 × 8).',
            '10 days': 'This is too long considering more workers and more hours per day.'
        },
        difficulty: 'medium',
        marks: 3,
        recommendedTime: 3
    },
    {
        id: 'cl8_ch11_t2_qm2',
        type: 'mcq',
        question: 'The pressure (P) and volume (V) of a gas are inversely proportional at constant temperature. If P₁ = 600 kPa, V₁ = 200 cm³, and P₂ = 400 kPa, find V₂: 🌡️',
        options: ['300 cm³', '250 cm³', '400 cm³', '150 cm³'],
        correctAnswer: '300 cm³',
        explanation: 'Using P₁V₁ = P₂V₂: (600 × 200 = 400 × V₂), so V₂ = (600 × 200) ÷ 400 = 300 cm³',
        wrongAnswerExplanations: {
            '250 cm³': 'Check your calculations using P₁V₁ = P₂V₂.',
            '400 cm³': 'This would make the product P₂V₂ larger than P₁V₁.',
            '150 cm³': 'As pressure decreases, volume should increase.'
        },
        difficulty: 'medium',
        marks: 3,
        recommendedTime: 3
    },
    {
        id: 'cl8_ch11_t2_qm3',
        type: 'mcq',
        question: 'If y ∝ 1/x², and y = 16 when x = 2, what is the value of y when x = 4? 📊',
        options: ['4', '8', '2', '1'],
        correctAnswer: '4',
        explanation: 'Since y ∝ 1/x², y = k/x². When x = 2, 16 = k/4, so k = 64. When x = 4, y = 64/16 = 4',
        wrongAnswerExplanations: {
            '8': 'Remember y is inversely proportional to x².',
            '2': 'The calculation is incorrect. Use k = 64.',
            '1': 'Check your calculations using k/x².'
        },
        difficulty: 'medium',
        marks: 3,
        recommendedTime: 3
    },
    {
        id: 'cl8_ch11_t2_qm4',
        type: 'mcq',
        question: 'A factory has two machines. Machine A takes 3 hours to produce 100 items, while Machine B takes 4 hours for 80 items. The ratio of their production rates is: ⚙️',
        options: ['4:3', '3:4', '5:4', '4:5'],
        correctAnswer: '4:3',
        explanation: 'Rate = Items/Time. Machine A: 100/3, B: 80/4. Ratio = (100/3):(80/4) = 4:3',
        wrongAnswerExplanations: {
            '3:4': 'You\'ve inverted the ratio. Calculate items per hour for each machine.',
            '5:4': 'Check your calculations of production rates.',
            '4:5': 'This is incorrect. Compare items produced per hour.'
        },
        difficulty: 'medium',
        marks: 3,
        recommendedTime: 3
    },
    {
        id: 'cl8_ch11_t2_qm5',
        type: 'mcq',
        question: 'If 15 workers working 8 hours a day can build a wall in 10 days, how many workers are needed to build it in 6 days if they work 10 hours a day? 🏗️',
        options: ['20 workers', '24 workers', '18 workers', '22 workers'],
        correctAnswer: '20 workers',
        explanation: 'Using (W₁ × H₁ × D₁ = W₂ × H₂ × D₂): (15 × 8 × 10 = x × 10 × 6), so x = 20 workers',
        wrongAnswerExplanations: {
            '24 workers': 'You haven\'t considered the increased hours per day.',
            '18 workers': 'This wouldn\'t be enough workers to complete in 6 days.',
            '22 workers': 'Check your calculations using all three variables.'
        },
        difficulty: 'medium',
        marks: 3,
        recommendedTime: 3
    },
    {
        id: 'cl8_ch11_t2_qm6',
        type: 'mcq',
        question: 'A car travels 360 km at 60 km/h. If the speed is reduced by 25%, how much more time will the journey take? ⏱️',
        options: ['2 hours', '1 hour', '1.5 hours', '2.5 hours'],
        correctAnswer: '2 hours',
        explanation: 'Original time = 6h. New speed = 45 km/h. New time = 8h. Difference = 2h',
        wrongAnswerExplanations: {
            '1 hour': 'The increase in time is more as speed is reduced by 25%.',
            '1.5 hours': 'Calculate new time using 360 ÷ 45 = 8 hours.',
            '2.5 hours': 'The calculation is incorrect. Original time was 6 hours.'
        },
        difficulty: 'medium',
        marks: 3,
        recommendedTime: 3
    },
    {
        id: 'cl8_ch11_t2_qm7',
        type: 'mcq',
        question: 'If x ∝ 1/y and x increases by 20%, y will: 📉',
        options: ['Decrease by 16.67%', 'Decrease by 20%', 'Increase by 16.67%', 'Increase by 20%'],
        correctAnswer: 'Decrease by 16.67%',
        explanation: 'If x increases by 20%, it becomes 1.2x. So y becomes y/1.2, a decrease of 16.67%',
        wrongAnswerExplanations: {
            'Decrease by 20%': 'The decrease is not the same percentage.',
            'Increase by 16.67%': 'In inverse proportion, y should decrease.',
            'Increase by 20%': 'This would be direct proportion.'
        },
        difficulty: 'medium',
        marks: 3,
        recommendedTime: 3
    },
    {
        id: 'cl8_ch11_t2_qm8',
        type: 'mcq',
        question: 'A pump can fill a tank in 3 hours. After working for 1 hour, another pump of double capacity joins in. How long will they take to fill the remaining tank? ⚡',
        options: ['40 minutes', '45 minutes', '50 minutes', '35 minutes'],
        correctAnswer: '40 minutes',
        explanation: '1/3 filled in 1 hour. Remaining 2/3 with combined capacity of 3 units takes 40 minutes.',
        wrongAnswerExplanations: {
            '45 minutes': 'The combined capacity is 3 times the original pump.',
            '50 minutes': 'This is too long given the increased capacity.',
            '35 minutes': 'Check your calculations for remaining volume and combined rate.'
        },
        difficulty: 'medium',
        marks: 3,
        recommendedTime: 3
    },
    {
        id: 'cl8_ch11_t2_qm9',
        type: 'mcq',
        question: 'If 9 machines working 7 hours a day for 10 days can produce 1890 items, how many items will 15 machines produce in 6 days working 8 hours a day? 🏭',
        options: ['2160 items', '1980 items', '2040 items', '2280 items'],
        correctAnswer: '2160 items',
        explanation: 'Using proportion: (9 × 7 × 10 × x = 15 × 8 × 6 × 1890), x = 2160 items',
        wrongAnswerExplanations: {
            '1980 items': 'You haven\'t considered all variables correctly.',
            '2040 items': 'Check your calculations using all four variables.',
            '2280 items': 'This is too high. Verify your multiplication.'
        },
        difficulty: 'medium',
        marks: 3,
        recommendedTime: 3
    },
    {
        id: 'cl8_ch11_t2_qm10',
        type: 'mcq',
        question: 'The intensity of light (I) varies inversely as the square of the distance (d). If I = 100 at d = 2m, what is I at d = 5m? 💡',
        options: ['16', '25', '20', '15'],
        correctAnswer: '16',
        explanation: 'Using I₁d₁² = I₂d₂²: (100 × 4 = I₂ × 25), so I₂ = 16',
        wrongAnswerExplanations: {
            '25': 'Remember intensity varies inversely with square of distance.',
            '20': 'Use the equation I₁d₁² = I₂d₂².',
            '15': 'Check your calculations using square of distances.'
        },
        difficulty: 'medium',
        marks: 3,
        recommendedTime: 3
    },
    {
        id: 'cl8_ch11_t2_qm11',
        type: 'mcq',
        question: 'A spring stretches by 8 cm under a force of 24 N. If the force is reduced to 18 N, the stretch will be (Hooke\'s Law): 🔄',
        options: ['6 cm', '7 cm', '5 cm', '4 cm'],
        correctAnswer: '6 cm',
        explanation: 'Using inverse proportion: (24 × 8 = 18 × x), so x = (24 × 8) ÷ 18 = 6 cm',
        wrongAnswerExplanations: {
            '7 cm': 'The stretch should be proportionally less with less force.',
            '5 cm': 'Check your calculations using (24 × 8) ÷ 18.',
            '4 cm': 'This reduction is too much for the given force change.'
        },
        difficulty: 'medium',
        marks: 3,
        recommendedTime: 3
    },
    {
        id: 'cl8_ch11_t2_qm12',
        type: 'mcq',
        question: 'If y ∝ 1/√x, and y = 12 when x = 9, what is the value of y when x = 4? 📐',
        options: ['18', '16', '15', '20'],
        correctAnswer: '18',
        explanation: 'y = k/√x. When x = 9, 12 = k/3, so k = 36. When x = 4, y = 36/2 = 18',
        wrongAnswerExplanations: {
            '16': 'Remember y is inversely proportional to square root of x.',
            '15': 'Calculate k first using initial values.',
            '20': 'Check your calculations using k = 36.'
        },
        difficulty: 'medium',
        marks: 3,
        recommendedTime: 3
    },
    {
        id: 'cl8_ch11_t2_qm13',
        type: 'mcq',
        question: 'A group of people can eat 100 kg of food in 20 days. If 25 kg more food is available and 5 more people join, how many days will the food last? 👥',
        options: ['18 days', '16 days', '22 days', '20 days'],
        correctAnswer: '18 days',
        explanation: 'Original: 5 kg/day. New food = 125 kg, new consumption = 125/(18) ≈ 6.94 kg/day',
        wrongAnswerExplanations: {
            '16 days': 'You haven\'t balanced the increased food with increased people.',
            '22 days': 'More people will consume food faster.',
            '20 days': 'The time must change with more people.'
        },
        difficulty: 'medium',
        marks: 3,
        recommendedTime: 3
    },
    {
        id: 'cl8_ch11_t2_qm14',
        type: 'mcq',
        question: 'If the radius of a circle is halved and the area becomes one-fourth, this relationship is: 📏',
        options: ['Direct square proportion', 'Inverse proportion', 'Inverse square proportion', 'Direct proportion'],
        correctAnswer: 'Direct square proportion',
        explanation: 'Area ∝ r². When r becomes r/2, area becomes (r/2)² = r²/4',
        wrongAnswerExplanations: {
            'Inverse proportion': 'This would mean area decreases as radius increases.',
            'Inverse square proportion': 'Area increases with radius squared.',
            'Direct proportion': 'The relationship involves squaring.'
        },
        difficulty: 'medium',
        marks: 3,
        recommendedTime: 3
    },
    {
        id: 'cl8_ch11_t2_qm15',
        type: 'mcq',
        question: 'A tap fills a tank in 8 hours. After 2 hours, another tap starts helping. If they take 3 more hours together, what is the ratio of their rates? 🚰',
        options: ['2:1', '1:2', '3:2', '2:3'],
        correctAnswer: '2:1',
        explanation: 'First tap: 1/8 tank/hour. Together they fill 3/5 tank in 3 hours. Second tap rate is half of first.',
        wrongAnswerExplanations: {
            '1:2': 'This would make the second tap faster.',
            '3:2': 'Check the remaining volume and time taken.',
            '2:3': 'The first tap must be faster based on the times.'
        },
        difficulty: 'medium',
        marks: 3,
        recommendedTime: 3
    },
    {
        id: 'cl8_ch11_t2_qm16',
        type: 'mcq',
        question: 'If x ∝ 1/y and x = 5 when y = 8, by what percentage will x increase if y decreases by 20%? 📊',
        options: ['25%', '20%', '30%', '15%'],
        correctAnswer: '25%',
        explanation: 'When y becomes 0.8y, x becomes x/0.8 = 1.25x, a 25% increase',
        wrongAnswerExplanations: {
            '20%': 'The percentage change is not the same in inverse proportion.',
            '30%': 'Calculate using 1/0.8 to find the multiplier.',
            '15%': 'The increase should be more than 20%.'
        },
        difficulty: 'medium',
        marks: 3,
        recommendedTime: 3
    },
    {
        id: 'cl8_ch11_t2_qm17',
        type: 'mcq',
        question: 'A printer prints 200 pages in 8 minutes. How many printers of same type are needed to print 750 pages in 6 minutes? 🖨️',
        options: ['5 printers', '4 printers', '6 printers', '3 printers'],
        correctAnswer: '5 printers',
        explanation: 'Rate = 25 pages/min. For 750 pages in 6 min, need 125 pages/min. So need 5 printers.',
        wrongAnswerExplanations: {
            '4 printers': 'This wouldn\'t complete the job in 6 minutes.',
            '6 printers': 'This is more than needed for the given time.',
            '3 printers': 'The rate would be too slow with only 3 printers.'
        },
        difficulty: 'medium',
        marks: 3,
        recommendedTime: 3
    },
    {
        id: 'cl8_ch11_t2_qm18',
        type: 'mcq',
        question: 'The gravitational force between two masses varies inversely as the square of distance. If force is F at distance d, what is it at distance 3d? 🌍',
        options: ['F/9', 'F/3', '3F', 'F/6'],
        correctAnswer: 'F/9',
        explanation: 'Force ∝ 1/d². At 3d, force becomes F/(3²) = F/9',
        wrongAnswerExplanations: {
            'F/3': 'Remember force varies inversely with square of distance.',
            '3F': 'Force decreases with increased distance.',
            'F/6': 'Use the square of the distance ratio.'
        },
        difficulty: 'medium',
        marks: 3,
        recommendedTime: 3
    },
    {
        id: 'cl8_ch11_t2_qm19',
        type: 'mcq',
        question: 'A water tank has two outlets. First can empty it in 3 hours, second in 6 hours. If both are opened, how long to empty? ⏳',
        options: ['2 hours', '4 hours', '2.5 hours', '1.5 hours'],
        correctAnswer: '2 hours',
        explanation: 'Rate1 = 1/3 tank/hr, Rate2 = 1/6 tank/hr. Combined = 1/2 tank/hr. Time = 2 hours',
        wrongAnswerExplanations: {
            '4 hours': 'Combined rate is faster than individual rates.',
            '2.5 hours': 'Calculate total rate as sum of individual rates.',
            '1.5 hours': 'This is too fast for the given rates.'
        },
        difficulty: 'medium',
        marks: 3,
        recommendedTime: 3
    },
    {
        id: 'cl8_ch11_t2_qm20',
        type: 'mcq',
        question: 'If 12 men working 6 hours a day for 10 days earn ₹21,600, how much will 9 men earn working 8 hours a day for 12 days? 💰',
        options: ['₹21,600', '₹24,000', '₹19,200', '₹23,040'],
        correctAnswer: '₹21,600',
        explanation: 'Using proportion: (12 × 6 × 10 × x = 9 × 8 × 12 × 21600), x = 21600',
        wrongAnswerExplanations: {
            '₹24,000': 'Check your calculations using all variables.',
            '₹19,200': 'The reduced workers is balanced by increased hours and days.',
            '₹23,040': 'Verify your multiplication of all factors.'
        },
        difficulty: 'medium',
        marks: 3,
        recommendedTime: 3
    }
]; 