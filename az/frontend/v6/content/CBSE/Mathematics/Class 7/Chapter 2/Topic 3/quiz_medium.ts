import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl7_ch2_t3_m1',
        type: 'mcq',
        question: 'A store offers 20% off on a ₹1500 item, plus an additional 10% off. What is the final price?',
        options: ['₹1050', '₹1080', '₹1100', '₹1120'],
        correctAnswer: '₹1080',
        explanation: 'First discount: ₹1500 × 0.8 = ₹1200, Second discount: ₹1200 × 0.9 = ₹1080',
        wrongAnswerExplanations: {
            '₹1050': 'This is not the correct calculation',
            '₹1100': 'This is not the correct calculation',
            '₹1120': 'This is not the correct calculation'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch2_t3_m2',
        type: 'mcq',
        question: 'A recipe needs 2⅓ cups of flour and 1½ cups of sugar. You want to make ¾ of the recipe. How much of each do you need?',
        options: ['1¾ cups flour, 1⅛ cups sugar', '1½ cups flour, 1¼ cups sugar', '2 cups flour, 1⅜ cups sugar', '1⅞ cups flour, 1⅜ cups sugar'],
        correctAnswer: '1¾ cups flour, 1⅛ cups sugar',
        explanation: 'Flour: 2⅓ × ¾ = 7/3 × 3/4 = 21/12 = 1¾ cups, Sugar: 1½ × ¾ = 3/2 × 3/4 = 9/8 = 1⅛ cups',
        wrongAnswerExplanations: {
            '1½ cups flour, 1¼ cups sugar': 'This is not the correct calculation',
            '2 cups flour, 1⅜ cups sugar': 'This is not the correct calculation',
            '1⅞ cups flour, 1⅜ cups sugar': 'This is not the correct calculation'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch2_t3_m3',
        type: 'mcq',
        question: 'A room is 3½ meters long and 2¼ meters wide. You want to cover ⅔ of its area with tiles. What area needs to be tiled?',
        options: ['5¼ m²', '5½ m²', '5¾ m²', '6 m²'],
        correctAnswer: '5¼ m²',
        explanation: 'Total area = 3½ × 2¼ = 7/2 × 9/4 = 63/8 m², Tiled area = 63/8 × ⅔ = 126/24 = 5¼ m²',
        wrongAnswerExplanations: {
            '5½ m²': 'This is not the correct calculation',
            '5¾ m²': 'This is not the correct calculation',
            '6 m²': 'This is not the correct calculation'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch2_t3_m4',
        type: 'mcq',
        question: 'A runner completes ¾ of a 400m race in 45 seconds. What is their average speed in meters per second?',
        options: ['6⅔ m/s', '7 m/s', '7½ m/s', '8 m/s'],
        correctAnswer: '6⅔ m/s',
        explanation: 'Distance = ¾ × 400 = 300m, Speed = 300m/45s = 6⅔ m/s',
        wrongAnswerExplanations: {
            '7 m/s': 'This is not the correct calculation',
            '7½ m/s': 'This is not the correct calculation',
            '8 m/s': 'This is not the correct calculation'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch2_t3_m5',
        type: 'mcq',
        question: 'A store offers 15% off on a ₹2000 item, plus an additional 5% off. What is the final price?',
        options: ['₹1615', '₹1620', '₹1630', '₹1640'],
        correctAnswer: '₹1615',
        explanation: 'First discount: ₹2000 × 0.85 = ₹1700, Second discount: ₹1700 × 0.95 = ₹1615',
        wrongAnswerExplanations: {
            '₹1620': 'This is not the correct calculation',
            '₹1630': 'This is not the correct calculation',
            '₹1640': 'This is not the correct calculation'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch2_t3_m6',
        type: 'mcq',
        question: 'A recipe needs 1⅔ cups of flour and ¾ cup of sugar. You want to make 1½ times the recipe. How much of each do you need?',
        options: ['2½ cups flour, 1⅛ cups sugar', '2⅓ cups flour, 1¼ cups sugar', '2¾ cups flour, 1⅜ cups sugar', '3 cups flour, 1½ cups sugar'],
        correctAnswer: '2½ cups flour, 1⅛ cups sugar',
        explanation: 'Flour: 1⅔ × 1½ = 5/3 × 3/2 = 15/6 = 2½ cups, Sugar: ¾ × 1½ = 3/4 × 3/2 = 9/8 = 1⅛ cups',
        wrongAnswerExplanations: {
            '2⅓ cups flour, 1¼ cups sugar': 'This is not the correct calculation',
            '2¾ cups flour, 1⅜ cups sugar': 'This is not the correct calculation',
            '3 cups flour, 1½ cups sugar': 'This is not the correct calculation'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch2_t3_m7',
        type: 'mcq',
        question: 'A room is 4⅓ meters long and 3¼ meters wide. You want to cover ⅜ of its area with carpet. What area needs to be carpeted?',
        options: ['5¼ m²', '5½ m²', '5¾ m²', '6 m²'],
        correctAnswer: '5¼ m²',
        explanation: 'Total area = 4⅓ × 3¼ = 13/3 × 13/4 = 169/12 m², Carpeted area = 169/12 × ⅜ = 507/96 = 5¼ m²',
        wrongAnswerExplanations: {
            '5½ m²': 'This is not the correct calculation',
            '5¾ m²': 'This is not the correct calculation',
            '6 m²': 'This is not the correct calculation'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch2_t3_m8',
        type: 'mcq',
        question: 'A runner completes ⅝ of a 800m race in 50 seconds. What is their average speed in meters per second?',
        options: ['10 m/s', '10½ m/s', '11 m/s', '11½ m/s'],
        correctAnswer: '10 m/s',
        explanation: 'Distance = ⅝ × 800 = 500m, Speed = 500m/50s = 10 m/s',
        wrongAnswerExplanations: {
            '10½ m/s': 'This is not the correct calculation',
            '11 m/s': 'This is not the correct calculation',
            '11½ m/s': 'This is not the correct calculation'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch2_t3_m9',
        type: 'mcq',
        question: 'A store offers 25% off on a ₹2400 item, plus an additional 15% off. What is the final price?',
        options: ['₹1530', '₹1540', '₹1550', '₹1560'],
        correctAnswer: '₹1530',
        explanation: 'First discount: ₹2400 × 0.75 = ₹1800, Second discount: ₹1800 × 0.85 = ₹1530',
        wrongAnswerExplanations: {
            '₹1540': 'This is not the correct calculation',
            '₹1550': 'This is not the correct calculation',
            '₹1560': 'This is not the correct calculation'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch2_t3_m10',
        type: 'mcq',
        question: 'A recipe needs 2¼ cups of flour and 1⅓ cups of sugar. You want to make ⅔ of the recipe. How much of each do you need?',
        options: ['1½ cups flour, ⅞ cups sugar', '1⅔ cups flour, 1 cup sugar', '1¾ cups flour, 1⅛ cups sugar', '2 cups flour, 1¼ cups sugar'],
        correctAnswer: '1½ cups flour, ⅞ cups sugar',
        explanation: 'Flour: 2¼ × ⅔ = 9/4 × 2/3 = 18/12 = 1½ cups, Sugar: 1⅓ × ⅔ = 4/3 × 2/3 = 8/9 ≈ ⅞ cups',
        wrongAnswerExplanations: {
            '1⅔ cups flour, 1 cup sugar': 'This is not the correct calculation',
            '1¾ cups flour, 1⅛ cups sugar': 'This is not the correct calculation',
            '2 cups flour, 1¼ cups sugar': 'This is not the correct calculation'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch2_t3_m11',
        type: 'mcq',
        question: 'A room is 5⅓ meters long and 4¼ meters wide. You want to cover ⅝ of its area with tiles. What area needs to be tiled?',
        options: ['14⅙ m²', '14⅓ m²', '14½ m²', '14⅔ m²'],
        correctAnswer: '14⅙ m²',
        explanation: 'Total area = 5⅓ × 4¼ = 16/3 × 17/4 = 272/12 m², Tiled area = 272/12 × ⅝ = 1360/96 = 14⅙ m²',
        wrongAnswerExplanations: {
            '14⅓ m²': 'This is not the correct calculation',
            '14½ m²': 'This is not the correct calculation',
            '14⅔ m²': 'This is not the correct calculation'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch2_t3_m12',
        type: 'mcq',
        question: 'A runner completes ⅞ of a 1600m race in 140 seconds. What is their average speed in meters per second?',
        options: ['10 m/s', '10½ m/s', '11 m/s', '11½ m/s'],
        correctAnswer: '10 m/s',
        explanation: 'Distance = ⅞ × 1600 = 1400m, Speed = 1400m/140s = 10 m/s',
        wrongAnswerExplanations: {
            '10½ m/s': 'This is not the correct calculation',
            '11 m/s': 'This is not the correct calculation',
            '11½ m/s': 'This is not the correct calculation'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch2_t3_m13',
        type: 'mcq',
        question: 'A store offers 30% off on a ₹3000 item, plus an additional 20% off. What is the final price?',
        options: ['₹1680', '₹1690', '₹1700', '₹1710'],
        correctAnswer: '₹1680',
        explanation: 'First discount: ₹3000 × 0.7 = ₹2100, Second discount: ₹2100 × 0.8 = ₹1680',
        wrongAnswerExplanations: {
            '₹1690': 'This is not the correct calculation',
            '₹1700': 'This is not the correct calculation',
            '₹1710': 'This is not the correct calculation'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch2_t3_m14',
        type: 'mcq',
        question: 'A recipe needs 3⅓ cups of flour and 2¼ cups of sugar. You want to make ⅜ of the recipe. How much of each do you need?',
        options: ['1¼ cups flour, ⅞ cups sugar', '1⅓ cups flour, 1 cup sugar', '1½ cups flour, 1⅛ cups sugar', '1⅔ cups flour, 1¼ cups sugar'],
        correctAnswer: '1¼ cups flour, ⅞ cups sugar',
        explanation: 'Flour: 3⅓ × ⅜ = 10/3 × 3/8 = 30/24 = 1¼ cups, Sugar: 2¼ × ⅜ = 9/4 × 3/8 = 27/32 ≈ ⅞ cups',
        wrongAnswerExplanations: {
            '1⅓ cups flour, 1 cup sugar': 'This is not the correct calculation',
            '1½ cups flour, 1⅛ cups sugar': 'This is not the correct calculation',
            '1⅔ cups flour, 1¼ cups sugar': 'This is not the correct calculation'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch2_t3_m15',
        type: 'mcq',
        question: 'A room is 6⅔ meters long and 5¼ meters wide. You want to cover ⅜ of its area with carpet. What area needs to be carpeted?',
        options: ['9⅜ m²', '9½ m²', '9⅝ m²', '9¾ m²'],
        correctAnswer: '9⅜ m²',
        explanation: 'Total area = 6⅔ × 5¼ = 20/3 × 21/4 = 420/12 m², Carpeted area = 420/12 × ⅜ = 1260/96 = 9⅜ m²',
        wrongAnswerExplanations: {
            '9½ m²': 'This is not the correct calculation',
            '9⅝ m²': 'This is not the correct calculation',
            '9¾ m²': 'This is not the correct calculation'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch2_t3_m16',
        type: 'mcq',
        question: 'A runner completes ⅝ of a 2000m race in 125 seconds. What is their average speed in meters per second?',
        options: ['8 m/s', '8½ m/s', '9 m/s', '9½ m/s'],
        correctAnswer: '8 m/s',
        explanation: 'Distance = ⅝ × 2000 = 1250m, Speed = 1250m/125s = 10 m/s',
        wrongAnswerExplanations: {
            '8½ m/s': 'This is not the correct calculation',
            '9 m/s': 'This is not the correct calculation',
            '9½ m/s': 'This is not the correct calculation'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch2_t3_m17',
        type: 'mcq',
        question: 'A store offers 35% off on a ₹4000 item, plus an additional 25% off. What is the final price?',
        options: ['₹1950', '₹1960', '₹1970', '₹1980'],
        correctAnswer: '₹1950',
        explanation: 'First discount: ₹4000 × 0.65 = ₹2600, Second discount: ₹2600 × 0.75 = ₹1950',
        wrongAnswerExplanations: {
            '₹1960': 'This is not the correct calculation',
            '₹1970': 'This is not the correct calculation',
            '₹1980': 'This is not the correct calculation'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch2_t3_m18',
        type: 'mcq',
        question: 'A recipe needs 4⅓ cups of flour and 3¼ cups of sugar. You want to make ⅜ of the recipe. How much of each do you need?',
        options: ['1⅝ cups flour, 1⅛ cups sugar', '1¾ cups flour, 1¼ cups sugar', '1⅞ cups flour, 1⅜ cups sugar', '2 cups flour, 1½ cups sugar'],
        correctAnswer: '1⅝ cups flour, 1⅛ cups sugar',
        explanation: 'Flour: 4⅓ × ⅜ = 13/3 × 3/8 = 39/24 = 1⅝ cups, Sugar: 3¼ × ⅜ = 13/4 × 3/8 = 39/32 ≈ 1⅛ cups',
        wrongAnswerExplanations: {
            '1¾ cups flour, 1¼ cups sugar': 'This is not the correct calculation',
            '1⅞ cups flour, 1⅜ cups sugar': 'This is not the correct calculation',
            '2 cups flour, 1½ cups sugar': 'This is not the correct calculation'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch2_t3_m19',
        type: 'mcq',
        question: 'A room is 7⅔ meters long and 6¼ meters wide. You want to cover ⅜ of its area with tiles. What area needs to be tiled?',
        options: ['17⅞ m²', '18 m²', '18⅛ m²', '18¼ m²'],
        correctAnswer: '17⅞ m²',
        explanation: 'Total area = 7⅔ × 6¼ = 23/3 × 25/4 = 575/12 m², Tiled area = 575/12 × ⅜ = 1725/96 = 17⅞ m²',
        wrongAnswerExplanations: {
            '18 m²': 'This is not the correct calculation',
            '18⅛ m²': 'This is not the correct calculation',
            '18¼ m²': 'This is not the correct calculation'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch2_t3_m20',
        type: 'mcq',
        question: 'A runner completes ⅞ of a 2400m race in 210 seconds. What is their average speed in meters per second?',
        options: ['10 m/s', '10½ m/s', '11 m/s', '11½ m/s'],
        correctAnswer: '10 m/s',
        explanation: 'Distance = ⅞ × 2400 = 2100m, Speed = 2100m/210s = 10 m/s',
        wrongAnswerExplanations: {
            '10½ m/s': 'This is not the correct calculation',
            '11 m/s': 'This is not the correct calculation',
            '11½ m/s': 'This is not the correct calculation'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    }
]; 