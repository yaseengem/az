import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl8_ch11_t2_qe1',
        type: 'mcq',
        question: 'If 6 workers can complete a task in 12 days, how many days will it take for 9 workers to complete the same task? 🤔',
        options: ['8 days', '18 days', '15 days', '10 days'],
        correctAnswer: '8 days',
        explanation: 'Using inverse proportion: (6 × 12 = 9 × x), so x = (6 × 12) ÷ 9 = 8 days',
        wrongAnswerExplanations: {
            '18 days': 'This would be direct proportion. Remember, more workers means fewer days.',
            '15 days': 'Check your calculations. More workers means the time should decrease.',
            '10 days': 'The calculation is incorrect. Use (6 × 12) ÷ 9 to get the answer.'
        },
        difficulty: 'easy',
        marks: 2,
        recommendedTime: 2
    },
    {
        id: 'cl8_ch11_t2_qe2',
        type: 'mcq',
        question: 'When quantity A increases, quantity B decreases in the same ratio. This relationship is called: 📊',
        options: ['Inverse proportion', 'Direct proportion', 'Linear relation', 'Equal proportion'],
        correctAnswer: 'Inverse proportion',
        explanation: 'In inverse proportion, as one quantity increases, the other decreases proportionally.',
        wrongAnswerExplanations: {
            'Direct proportion': 'In direct proportion, both quantities increase or decrease together.',
            'Linear relation': 'Linear relation doesn\'t necessarily mean inverse relationship.',
            'Equal proportion': 'This is not a mathematical term for this relationship.'
        },
        difficulty: 'easy',
        marks: 2,
        recommendedTime: 1
    },
    {
        id: 'cl8_ch11_t2_qe3',
        type: 'mcq',
        question: 'If x ∝ 1/y, and x = 24 when y = 3, what is the value of x when y = 6? 🔢',
        options: ['12', '48', '8', '16'],
        correctAnswer: '12',
        explanation: 'In inverse proportion, xy = k. Here k = 72, so when y = 6, x = 72 ÷ 6 = 12',
        wrongAnswerExplanations: {
            '48': 'This would be direct proportion. The value should decrease as y increases.',
            '8': 'The calculation is incorrect. Use k = xy = 72.',
            '16': 'Check your calculations using k = xy = 72.'
        },
        difficulty: 'easy',
        marks: 2,
        recommendedTime: 2
    },
    {
        id: 'cl8_ch11_t2_qe4',
        type: 'mcq',
        question: 'The speed of a car is inversely proportional to the time taken. If it takes 4 hours at 60 km/h, how long will it take at 40 km/h? ⏱️',
        options: ['6 hours', '3 hours', '5 hours', '2 hours'],
        correctAnswer: '6 hours',
        explanation: 'Speed × Time = constant. (60 × 4 = 40 × x), so x = (60 × 4) ÷ 40 = 6 hours',
        wrongAnswerExplanations: {
            '3 hours': 'Lower speed means more time needed, not less.',
            '5 hours': 'Calculate using (60 × 4) ÷ 40 to get the correct answer.',
            '2 hours': 'This is incorrect as slower speed requires more time.'
        },
        difficulty: 'easy',
        marks: 2,
        recommendedTime: 2
    },
    {
        id: 'cl8_ch11_t2_qe5',
        type: 'mcq',
        question: 'In inverse proportion, if one quantity becomes 3 times, the other quantity becomes: 🎯',
        options: ['1/3 times', '3 times', '9 times', '6 times'],
        correctAnswer: '1/3 times',
        explanation: 'In inverse proportion, when one quantity is multiplied by n, the other is divided by n.',
        wrongAnswerExplanations: {
            '3 times': 'This would be direct proportion.',
            '9 times': 'This would be squaring the number, not inverse proportion.',
            '6 times': 'This is incorrect for inverse proportion.'
        },
        difficulty: 'easy',
        marks: 2,
        recommendedTime: 1
    },
    {
        id: 'cl8_ch11_t2_qe6',
        type: 'mcq',
        question: 'If 8 taps fill a tank in 12 hours, how many taps are needed to fill it in 4 hours? 🚰',
        options: ['24 taps', '16 taps', '20 taps', '32 taps'],
        correctAnswer: '24 taps',
        explanation: 'Using inverse proportion: (8 × 12 = x × 4), so x = (8 × 12) ÷ 4 = 24 taps',
        wrongAnswerExplanations: {
            '16 taps': 'This is not enough taps to reduce the time to one-third.',
            '20 taps': 'The calculation is incorrect. Use (8 × 12) ÷ 4.',
            '32 taps': 'This is more than needed. Check your calculations.'
        },
        difficulty: 'easy',
        marks: 2,
        recommendedTime: 2
    },
    {
        id: 'cl8_ch11_t2_qe7',
        type: 'mcq',
        question: 'The symbol used to represent inverse proportion is: ➗',
        options: ['∝ 1/x', '∝ x', '= x', '× x'],
        correctAnswer: '∝ 1/x',
        explanation: 'The symbol ∝ 1/x shows that one quantity is proportional to the reciprocal of the other.',
        wrongAnswerExplanations: {
            '∝ x': 'This represents direct proportion.',
            '= x': 'This shows equality, not inverse proportion.',
            '× x': 'This shows multiplication, not inverse proportion.'
        },
        difficulty: 'easy',
        marks: 2,
        recommendedTime: 1
    },
    {
        id: 'cl8_ch11_t2_qe8',
        type: 'mcq',
        question: 'If pressure is inversely proportional to volume, and pressure is 100 kPa at 5 m³, what is the pressure at 10 m³? 📊',
        options: ['50 kPa', '200 kPa', '150 kPa', '75 kPa'],
        correctAnswer: '50 kPa',
        explanation: 'As volume doubles, pressure halves. (100 × 5 = x × 10), so x = (100 × 5) ÷ 10 = 50 kPa',
        wrongAnswerExplanations: {
            '200 kPa': 'This would be direct proportion. Pressure should decrease.',
            '150 kPa': 'The pressure should decrease, not increase.',
            '75 kPa': 'The calculation is incorrect. Use (100 × 5) ÷ 10.'
        },
        difficulty: 'easy',
        marks: 2,
        recommendedTime: 2
    },
    {
        id: 'cl8_ch11_t2_qe9',
        type: 'mcq',
        question: 'In inverse proportion, the product of corresponding values is always: 🎯',
        options: ['Constant', 'Zero', 'Variable', 'Increasing'],
        correctAnswer: 'Constant',
        explanation: 'In inverse proportion, xy = k where k is constant for all corresponding values.',
        wrongAnswerExplanations: {
            'Zero': 'The product is never zero unless one quantity is zero.',
            'Variable': 'The product must remain constant in inverse proportion.',
            'Increasing': 'The product stays constant, not increasing.'
        },
        difficulty: 'easy',
        marks: 2,
        recommendedTime: 1
    },
    {
        id: 'cl8_ch11_t2_qe10',
        type: 'mcq',
        question: 'If 15 workers can build a wall in 10 days, how many workers are needed to build it in 6 days? 👷',
        options: ['25 workers', '20 workers', '30 workers', '9 workers'],
        correctAnswer: '25 workers',
        explanation: 'Using inverse proportion: (15 × 10 = x × 6), so x = (15 × 10) ÷ 6 = 25 workers',
        wrongAnswerExplanations: {
            '20 workers': 'This is not enough workers to reduce time to 6 days.',
            '30 workers': 'This is more than needed. Check your calculations.',
            '9 workers': 'With fewer workers, it would take longer, not shorter.'
        },
        difficulty: 'easy',
        marks: 2,
        recommendedTime: 2
    },
    {
        id: 'cl8_ch11_t2_qe11',
        type: 'mcq',
        question: 'The graph of an inverse proportion is called a: 📈',
        options: ['Hyperbola', 'Straight line', 'Parabola', 'Circle'],
        correctAnswer: 'Hyperbola',
        explanation: 'The graph of y = k/x is a hyperbola, showing inverse relationship between variables.',
        wrongAnswerExplanations: {
            'Straight line': 'A straight line represents direct proportion.',
            'Parabola': 'A parabola represents quadratic relationships.',
            'Circle': 'A circle represents a different type of relationship.'
        },
        difficulty: 'easy',
        marks: 2,
        recommendedTime: 1
    },
    {
        id: 'cl8_ch11_t2_qe12',
        type: 'mcq',
        question: 'If x ∝ 1/y and x = 12 when y = 4, what is y when x = 8? 🔢',
        options: ['6', '3', '2', '4'],
        correctAnswer: '6',
        explanation: 'Using xy = k, k = 48. When x = 8, y = 48 ÷ 8 = 6',
        wrongAnswerExplanations: {
            '3': 'Check your calculations using xy = 48.',
            '2': 'This value doesn\'t satisfy xy = 48.',
            '4': 'This would make xy = 32, not 48.'
        },
        difficulty: 'easy',
        marks: 2,
        recommendedTime: 2
    },
    {
        id: 'cl8_ch11_t2_qe13',
        type: 'mcq',
        question: 'When quantity A triples, quantity B in inverse proportion becomes: 📊',
        options: ['1/3 of original', 'Triple', 'Double', '2/3 of original'],
        correctAnswer: '1/3 of original',
        explanation: 'In inverse proportion, when one quantity triples, the other becomes one-third.',
        wrongAnswerExplanations: {
            'Triple': 'This would be direct proportion.',
            'Double': 'This is incorrect for inverse proportion.',
            '2/3 of original': 'The reduction should be to one-third, not two-thirds.'
        },
        difficulty: 'easy',
        marks: 2,
        recommendedTime: 1
    },
    {
        id: 'cl8_ch11_t2_qe14',
        type: 'mcq',
        question: 'If 20 machines can produce items in 8 hours, how many hours will 40 machines take? ⚙️',
        options: ['4 hours', '16 hours', '12 hours', '6 hours'],
        correctAnswer: '4 hours',
        explanation: 'Using inverse proportion: (20 × 8 = 40 × x), so x = (20 × 8) ÷ 40 = 4 hours',
        wrongAnswerExplanations: {
            '16 hours': 'More machines means less time, not more.',
            '12 hours': 'The time should decrease with more machines.',
            '6 hours': 'Calculate using (20 × 8) ÷ 40 to get correct answer.'
        },
        difficulty: 'easy',
        marks: 2,
        recommendedTime: 2
    },
    {
        id: 'cl8_ch11_t2_qe15',
        type: 'mcq',
        question: 'In inverse proportion, if quantity A is halved, quantity B is: 🎯',
        options: ['Doubled', 'Halved', 'Unchanged', 'Quadrupled'],
        correctAnswer: 'Doubled',
        explanation: 'When one quantity is halved in inverse proportion, the other doubles to maintain constant product.',
        wrongAnswerExplanations: {
            'Halved': 'This would be direct proportion.',
            'Unchanged': 'The quantity must change to maintain inverse proportion.',
            'Quadrupled': 'This change would be too large.'
        },
        difficulty: 'easy',
        marks: 2,
        recommendedTime: 1
    },
    {
        id: 'cl8_ch11_t2_qe16',
        type: 'mcq',
        question: 'If 12 painters can paint a building in 15 days, how many painters are needed to do it in 10 days? 🎨',
        options: ['18 painters', '8 painters', '20 painters', '15 painters'],
        correctAnswer: '18 painters',
        explanation: 'Using inverse proportion: (12 × 15 = x × 10), so x = (12 × 15) ÷ 10 = 18 painters',
        wrongAnswerExplanations: {
            '8 painters': 'Fewer painters would take longer, not shorter time.',
            '20 painters': 'This is more than needed. Check calculations.',
            '15 painters': 'This wouldn\'t reduce the time to 10 days.'
        },
        difficulty: 'easy',
        marks: 2,
        recommendedTime: 2
    },
    {
        id: 'cl8_ch11_t2_qe17',
        type: 'mcq',
        question: 'The constant k in inverse proportion (xy = k) represents: 🤔',
        options: ['Product of corresponding values', 'Sum of values', 'Difference of values', 'Average of values'],
        correctAnswer: 'Product of corresponding values',
        explanation: 'In inverse proportion, k is the constant product of corresponding x and y values.',
        wrongAnswerExplanations: {
            'Sum of values': 'The sum is not constant in inverse proportion.',
            'Difference of values': 'The difference is not constant in inverse proportion.',
            'Average of values': 'The average varies in inverse proportion.'
        },
        difficulty: 'easy',
        marks: 2,
        recommendedTime: 1
    },
    {
        id: 'cl8_ch11_t2_qe18',
        type: 'mcq',
        question: 'If speed and time are inversely proportional, when speed becomes 75 km/h from 50 km/h, time will: ⏱️',
        options: ['Decrease by 1/3', 'Increase by 1/3', 'Remain same', 'Double'],
        correctAnswer: 'Decrease by 1/3',
        explanation: 'As speed increases by 1.5 times, time decreases to 2/3 of original (reduction by 1/3).',
        wrongAnswerExplanations: {
            'Increase by 1/3': 'Time should decrease as speed increases.',
            'Remain same': 'Time must change in inverse proportion.',
            'Double': 'This would be incorrect as speed increased.'
        },
        difficulty: 'easy',
        marks: 2,
        recommendedTime: 2
    },
    {
        id: 'cl8_ch11_t2_qe19',
        type: 'mcq',
        question: 'Which of these represents inverse proportion? 📊',
        options: ['xy = 24', 'x + y = 24', 'x - y = 24', 'x = 24y'],
        correctAnswer: 'xy = 24',
        explanation: 'The equation xy = constant (here 24) represents inverse proportion.',
        wrongAnswerExplanations: {
            'x + y = 24': 'This is a linear equation, not inverse proportion.',
            'x - y = 24': 'This shows difference is constant, not inverse proportion.',
            'x = 24y': 'This represents direct proportion.'
        },
        difficulty: 'easy',
        marks: 2,
        recommendedTime: 1
    },
    {
        id: 'cl8_ch11_t2_qe20',
        type: 'mcq',
        question: 'If 16 people can eat food for 12 days, for how many days will the same food last for 24 people? 🍽️',
        options: ['8 days', '18 days', '6 days', '10 days'],
        correctAnswer: '8 days',
        explanation: 'Using inverse proportion: (16 × 12 = 24 × x), so x = (16 × 12) ÷ 24 = 8 days',
        wrongAnswerExplanations: {
            '18 days': 'More people means fewer days, not more.',
            '6 days': 'Check your calculations using (16 × 12) ÷ 24.',
            '10 days': 'This is incorrect. The food will last fewer days.'
        },
        difficulty: 'easy',
        marks: 2,
        recommendedTime: 2
    }
]; 