import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl8_ch2_t2_qe1',
        type: 'mcq',
        question: 'If twice a number increased by 7 equals 25, what is the number?',
        options: ['9', '16', '12', '8'],
        correctAnswer: '9',
        explanation: 'Let x be the number. Then 2x + 7 = 25. Solving: 2x = 18, so x = 9. 🔢',
        wrongAnswerExplanations: {
            '16': 'If x were 16, 2x + 7 would be 39, not 25.',
            '12': 'If x were 12, 2x + 7 would be 31, not 25.',
            '8': 'If x were 8, 2x + 7 would be 23, not 25.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch2_t2_qe2',
        type: 'mcq',
        question: 'A shopkeeper bought some pens at ₹12 each. If the total cost was ₹180, how many pens did they buy?',
        options: ['15', '20', '10', '25'],
        correctAnswer: '15',
        explanation: 'Let x be the number of pens. Then 12x = 180. Solving: x = 180 ÷ 12 = 15 pens. 🖊️',
        wrongAnswerExplanations: {
            '20': 'If x were 20, total cost would be ₹240, not ₹180.',
            '10': 'If x were 10, total cost would be ₹120, not ₹180.',
            '25': 'If x were 25, total cost would be ₹300, not ₹180.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch2_t2_qe3',
        type: 'mcq',
        question: 'The perimeter of a rectangle is 36 cm. If its length is 5 cm more than its width, what is the width?',
        options: ['6.5 cm', '7 cm', '8 cm', '5 cm'],
        correctAnswer: '6.5 cm',
        explanation: 'Let w be width. Length = w + 5. Using perimeter formula: 2(w + (w + 5)) = 36. Solving: 4w + 10 = 36, so w = 6.5. 📏',
        wrongAnswerExplanations: {
            '7 cm': 'If width were 7 cm, perimeter would be 38 cm, not 36 cm.',
            '8 cm': 'If width were 8 cm, perimeter would be 42 cm, not 36 cm.',
            '5 cm': 'If width were 5 cm, perimeter would be 30 cm, not 36 cm.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch2_t2_qe4',
        type: 'mcq',
        question: 'In a class, there are twice as many boys as girls. If the total number of students is 45, how many girls are there?',
        options: ['15', '30', '20', '25'],
        correctAnswer: '15',
        explanation: 'Let x be number of girls. Boys = 2x. Total = x + 2x = 3x = 45. So x = 15 girls. 👧',
        wrongAnswerExplanations: {
            '30': 'If girls were 30, total would be 90 students, not 45.',
            '20': 'If girls were 20, total would be 60 students, not 45.',
            '25': 'If girls were 25, total would be 75 students, not 45.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch2_t2_qe5',
        type: 'mcq',
        question: 'A number decreased by 8 equals 17. What is the number?',
        options: ['25', '9', '21', '13'],
        correctAnswer: '25',
        explanation: 'Let x be the number. Then x - 8 = 17. Solving: x = 17 + 8 = 25. 🔢',
        wrongAnswerExplanations: {
            '9': 'If x were 9, x - 8 would be 1, not 17.',
            '21': 'If x were 21, x - 8 would be 13, not 17.',
            '13': 'If x were 13, x - 8 would be 5, not 17.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch2_t2_qe6',
        type: 'mcq',
        question: 'A train covers 240 km in x hours at a speed of 60 km/h. Find x.',
        options: ['4', '3', '5', '6'],
        correctAnswer: '4',
        explanation: 'Using Distance = Speed × Time: 240 = 60 × x. Solving: x = 240 ÷ 60 = 4 hours. 🚂',
        wrongAnswerExplanations: {
            '3': 'At 60 km/h for 3 hours, distance would be 180 km, not 240 km.',
            '5': 'At 60 km/h for 5 hours, distance would be 300 km, not 240 km.',
            '6': 'At 60 km/h for 6 hours, distance would be 360 km, not 240 km.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch2_t2_qe7',
        type: 'mcq',
        question: 'The sum of three consecutive integers is 51. What is the smallest number?',
        options: ['16', '17', '15', '14'],
        correctAnswer: '16',
        explanation: 'Let x be smallest number. Then x + (x+1) + (x+2) = 51. Solving: 3x + 3 = 51, so x = 16. 🔢',
        wrongAnswerExplanations: {
            '17': 'If smallest is 17, sum would be 54, not 51.',
            '15': 'If smallest is 15, sum would be 48, not 51.',
            '14': 'If smallest is 14, sum would be 45, not 51.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch2_t2_qe8',
        type: 'mcq',
        question: 'A shopkeeper sells a shirt at ₹800 with 20% profit. What was the cost price?',
        options: ['₹667', '₹700', '₹600', '₹640'],
        correctAnswer: '₹667',
        explanation: 'Let CP be x. SP = x + 20% of x = 1.2x = 800. So x = 800 ÷ 1.2 = ₹667. 👕',
        wrongAnswerExplanations: {
            '₹700': 'If CP were ₹700, SP would be ₹840, not ₹800.',
            '₹600': 'If CP were ₹600, SP would be ₹720, not ₹800.',
            '₹640': 'If CP were ₹640, SP would be ₹768, not ₹800.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch2_t2_qe9',
        type: 'mcq',
        question: 'The difference between 5 times a number and 12 is 28. What is the number?',
        options: ['8', '10', '6', '7'],
        correctAnswer: '8',
        explanation: 'Let x be the number. Then 5x - 12 = 28. Solving: 5x = 40, so x = 8. 🔢',
        wrongAnswerExplanations: {
            '10': 'If x were 10, 5x - 12 would be 38, not 28.',
            '6': 'If x were 6, 5x - 12 would be 18, not 28.',
            '7': 'If x were 7, 5x - 12 would be 23, not 28.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch2_t2_qe10',
        type: 'mcq',
        question: 'A rectangular garden has length 3 meters more than its width. If the perimeter is 26 meters, what is the length?',
        options: ['8 meters', '7 meters', '6 meters', '9 meters'],
        correctAnswer: '8 meters',
        explanation: 'Let width be x. Length = x + 3. Using 2(l + w) = 26: 2(x + 3 + x) = 26. Solving: 4x + 6 = 26, x = 5, so length = 8 meters. 🌳',
        wrongAnswerExplanations: {
            '7 meters': 'If length were 7m, perimeter would be 24m, not 26m.',
            '6 meters': 'If length were 6m, perimeter would be 20m, not 26m.',
            '9 meters': 'If length were 9m, perimeter would be 28m, not 26m.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch2_t2_qe11',
        type: 'mcq',
        question: 'If 3 less than twice a number is 15, what is the number?',
        options: ['9', '7', '8', '10'],
        correctAnswer: '9',
        explanation: 'Let x be the number. Then 2x - 3 = 15. Solving: 2x = 18, so x = 9. 🔢',
        wrongAnswerExplanations: {
            '7': 'If x were 7, 2x - 3 would be 11, not 15.',
            '8': 'If x were 8, 2x - 3 would be 13, not 15.',
            '10': 'If x were 10, 2x - 3 would be 17, not 15.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch2_t2_qe12',
        type: 'mcq',
        question: 'A bus travels 360 kilometers at a speed of x km/h for 6 hours. Find x.',
        options: ['60', '50', '70', '80'],
        correctAnswer: '60',
        explanation: 'Using Distance = Speed × Time: 360 = x × 6. Solving: x = 360 ÷ 6 = 60 km/h. 🚌',
        wrongAnswerExplanations: {
            '50': 'At 50 km/h for 6 hours, distance would be 300 km, not 360 km.',
            '70': 'At 70 km/h for 6 hours, distance would be 420 km, not 360 km.',
            '80': 'At 80 km/h for 6 hours, distance would be 480 km, not 360 km.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch2_t2_qe13',
        type: 'mcq',
        question: 'The sum of a number and its triple is 48. What is the number?',
        options: ['12', '16', '14', '10'],
        correctAnswer: '12',
        explanation: 'Let x be the number. Then x + 3x = 48. Solving: 4x = 48, so x = 12. 🔢',
        wrongAnswerExplanations: {
            '16': 'If x were 16, x + 3x would be 64, not 48.',
            '14': 'If x were 14, x + 3x would be 56, not 48.',
            '10': 'If x were 10, x + 3x would be 40, not 48.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch2_t2_qe14',
        type: 'mcq',
        question: 'A shopkeeper bought oranges at ₹15 per kg and sold all at ₹20 per kg. If the profit was ₹150, how many kg did they buy?',
        options: ['30', '25', '35', '40'],
        correctAnswer: '30',
        explanation: 'Let x be kg bought. Profit = (SP - CP)x = (20 - 15)x = 150. So x = 150 ÷ 5 = 30 kg. 🍊',
        wrongAnswerExplanations: {
            '25': 'If kg were 25, profit would be ₹125, not ₹150.',
            '35': 'If kg were 35, profit would be ₹175, not ₹150.',
            '40': 'If kg were 40, profit would be ₹200, not ₹150.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch2_t2_qe15',
        type: 'mcq',
        question: 'The perimeter of a square is 36 cm. What is the length of each side?',
        options: ['9 cm', '6 cm', '12 cm', '8 cm'],
        correctAnswer: '9 cm',
        explanation: 'Let side be x. Using perimeter = 4x = 36. Solving: x = 36 ÷ 4 = 9 cm. 📏',
        wrongAnswerExplanations: {
            '6 cm': 'If side were 6 cm, perimeter would be 24 cm, not 36 cm.',
            '12 cm': 'If side were 12 cm, perimeter would be 48 cm, not 36 cm.',
            '8 cm': 'If side were 8 cm, perimeter would be 32 cm, not 36 cm.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch2_t2_qe16',
        type: 'mcq',
        question: 'A number increased by its half equals 45. What is the number?',
        options: ['30', '25', '35', '40'],
        correctAnswer: '30',
        explanation: 'Let x be number. Then x + x/2 = 45. Solving: 3x/2 = 45, so x = 30. 🔢',
        wrongAnswerExplanations: {
            '25': 'If x were 25, x + x/2 would be 37.5, not 45.',
            '35': 'If x were 35, x + x/2 would be 52.5, not 45.',
            '40': 'If x were 40, x + x/2 would be 60, not 45.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch2_t2_qe17',
        type: 'mcq',
        question: 'The difference between consecutive integers is 1. If sum of three consecutive integers is 42, find the smallest number.',
        options: ['13', '14', '12', '15'],
        correctAnswer: '13',
        explanation: 'Let x be smallest. Then x + (x+1) + (x+2) = 42. Solving: 3x + 3 = 42, so x = 13. 🔢',
        wrongAnswerExplanations: {
            '14': 'If smallest were 14, sum would be 45, not 42.',
            '12': 'If smallest were 12, sum would be 39, not 42.',
            '15': 'If smallest were 15, sum would be 48, not 42.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch2_t2_qe18',
        type: 'mcq',
        question: 'A cyclist covers 150 km in 5 hours. What is their speed in km/h?',
        options: ['30', '25', '35', '40'],
        correctAnswer: '30',
        explanation: 'Using Speed = Distance ÷ Time: x = 150 ÷ 5 = 30 km/h. 🚲',
        wrongAnswerExplanations: {
            '25': 'At 25 km/h for 5 hours, distance would be 125 km, not 150 km.',
            '35': 'At 35 km/h for 5 hours, distance would be 175 km, not 150 km.',
            '40': 'At 40 km/h for 5 hours, distance would be 200 km, not 150 km.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch2_t2_qe19',
        type: 'mcq',
        question: 'If 5 less than thrice a number is 25, what is the number?',
        options: ['10', '12', '8', '15'],
        correctAnswer: '10',
        explanation: 'Let x be number. Then 3x - 5 = 25. Solving: 3x = 30, so x = 10. 🔢',
        wrongAnswerExplanations: {
            '12': 'If x were 12, 3x - 5 would be 31, not 25.',
            '8': 'If x were 8, 3x - 5 would be 19, not 25.',
            '15': 'If x were 15, 3x - 5 would be 40, not 25.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch2_t2_qe20',
        type: 'mcq',
        question: 'A rectangle has width 4 cm less than its length. If perimeter is 40 cm, what is the length?',
        options: ['12 cm', '10 cm', '14 cm', '16 cm'],
        correctAnswer: '12 cm',
        explanation: 'Let length be x. Width = x - 4. Using 2(l + w) = 40: 2(x + (x-4)) = 40. Solving: 4x - 8 = 40, so x = 12 cm. 📏',
        wrongAnswerExplanations: {
            '10 cm': 'If length were 10 cm, perimeter would be 32 cm, not 40 cm.',
            '14 cm': 'If length were 14 cm, perimeter would be 48 cm, not 40 cm.',
            '16 cm': 'If length were 16 cm, perimeter would be 56 cm, not 40 cm.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    }
]; 