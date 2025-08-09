import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl8_ch2_t2_qm1',
        type: 'mcq',
        question: "A father's age is three times his son's age. After 8 years, the father's age will be twice his son's age. What is the son's current age?",
        options: ['16 years', '12 years', '14 years', '18 years'],
        correctAnswer: '16 years',
        explanation: "Let son's age be x. Then 3x + 8 = 2(x + 8). Solving: 3x + 8 = 2x + 16, so x = 16. 👨‍👦",
        wrongAnswerExplanations: {
            '12 years': 'If son were 12, after 8 years father would be 44 and son 20, ratio not 2:1.',
            '14 years': 'If son were 14, after 8 years father would be 50 and son 22, ratio not 2:1.',
            '18 years': 'If son were 18, after 8 years father would be 62 and son 26, ratio not 2:1.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch2_t2_qm2',
        type: 'mcq',
        question: 'In a two-digit number, the tens digit is twice the ones digit. If the digits are reversed, the new number is 27 more than the original number. Find the original number.',
        options: ['42', '63', '84', '21'],
        correctAnswer: '42',
        explanation: 'Let ones digit be x. Original number = 2x × 10 + x = 21x. Reversed = 10x + 2x = 12x. Then 12x - 21x = -9x = 27. So x = 3, making number 42. 🔢',
        wrongAnswerExplanations: {
            '63': 'When 63 is reversed to 36, difference is not 27.',
            '84': 'When 84 is reversed to 48, difference is not 27.',
            '21': 'Tens digit (2) is not twice ones digit (1).'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch2_t2_qm3',
        type: 'mcq',
        question: 'A tank can be filled by pipe A in 6 hours and by pipe B in 8 hours. If both pipes are opened together, in how many hours will the tank be filled?',
        options: ['3.43 hours', '4 hours', '3 hours', '5 hours'],
        correctAnswer: '3.43 hours',
        explanation: 'Let time be x. In 1 hour, A fills 1/6 and B fills 1/8. Together in x hours: x(1/6 + 1/8) = 1. Solving: x = 1/(7/24) ≈ 3.43. 🚰',
        wrongAnswerExplanations: {
            '4 hours': 'In 4 hours, tank would be overfilled.',
            '3 hours': 'In 3 hours, tank would not be completely filled.',
            '5 hours': 'In 5 hours, tank would be overfilled.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch2_t2_qm4',
        type: 'mcq',
        question: 'A shopkeeper marks up an item by 60% and then gives a 25% discount. If the selling price is ₹600, what was the cost price?',
        options: ['₹500', '₹450', '₹550', '₹400'],
        correctAnswer: '₹500',
        explanation: 'Let CP be x. After markup: 1.6x. After 25% discount: 1.6x × 0.75 = 1.2x = 600. So x = 500. 💰',
        wrongAnswerExplanations: {
            '₹450': 'This would give final price of ₹540, not ₹600.',
            '₹550': 'This would give final price of ₹660, not ₹600.',
            '₹400': 'This would give final price of ₹480, not ₹600.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch2_t2_qm5',
        type: 'mcq',
        question: 'Two trains start at the same time from points A and B, 300 km apart, traveling towards each other. If one train is 20 km/h faster than the other and they meet after 2 hours, what is the speed of the slower train?',
        options: ['70 km/h', '80 km/h', '60 km/h', '90 km/h'],
        correctAnswer: '70 km/h',
        explanation: 'Let slower speed be x. Then x + (x+20) × 2 = 300. Solving: 4x + 40 = 300, so x = 70. 🚂',
        wrongAnswerExplanations: {
            '80 km/h': 'With this speed, trains would meet earlier than 2 hours.',
            '60 km/h': 'With this speed, trains would meet later than 2 hours.',
            '90 km/h': 'With this speed, trains would meet much earlier than 2 hours.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch2_t2_qm6',
        type: 'mcq',
        question: 'In an isosceles triangle, the base angles are equal and the vertex angle is 40°. What is the measure of each base angle?',
        options: ['70°', '65°', '75°', '80°'],
        correctAnswer: '70°',
        explanation: 'Let base angle be x. Then 2x + 40° = 180° (angle sum). Solving: 2x = 140°, so x = 70°. 📐',
        wrongAnswerExplanations: {
            '65°': 'This would make total angles 170°, not 180°.',
            '75°': 'This would make total angles 190°, not 180°.',
            '80°': 'This would make total angles 200°, not 180°.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch2_t2_qm7',
        type: 'mcq',
        question: 'A mixture of milk and water contains 80% milk. How many liters of water should be added to 50 liters of this mixture to make it 60% milk?',
        options: ['16.67 L', '15 L', '20 L', '25 L'],
        correctAnswer: '16.67 L',
        explanation: 'Milk in 50L = 40L. Let added water be x. Then 40/(50+x) = 0.6. Solving: 40 = 30 + 0.6x, so x = 16.67. 🥛',
        wrongAnswerExplanations: {
            '15 L': 'This would make mixture about 62% milk, not 60%.',
            '20 L': 'This would make mixture about 57% milk, not 60%.',
            '25 L': 'This would make mixture about 53% milk, not 60%.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch2_t2_qm8',
        type: 'mcq',
        question: "A man's monthly income is ₹50,000. He spends 30% on rent and saves 25% of the remainder. How much does he save?",
        options: ['₹8,750', '₹12,500', '₹10,000', '₹7,500'],
        correctAnswer: '₹8,750',
        explanation: 'After rent: 50000 × 0.7 = 35000. Savings = 35000 × 0.25 = 8750. 💵',
        wrongAnswerExplanations: {
            '₹12,500': 'This would be 25% of total income, not remainder.',
            '₹10,000': 'This would be 20% of total income.',
            '₹7,500': 'This would be 15% of total income.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch2_t2_qm9',
        type: 'mcq',
        question: 'A rectangular field has length 5 meters more than twice its width. If the perimeter is 70 meters, what is the width?',
        options: ['12 meters', '10 meters', '15 meters', '14 meters'],
        correctAnswer: '12 meters',
        explanation: 'Let width be x. Length = 2x + 5. Using 2(l + w) = 70: 2(2x + 5 + x) = 70. Solving: 6x + 10 = 70, so x = 12. 📏',
        wrongAnswerExplanations: {
            '10 meters': 'This would give perimeter of 60 meters, not 70.',
            '15 meters': 'This would give perimeter of 85 meters, not 70.',
            '14 meters': 'This would give perimeter of 80 meters, not 70.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch2_t2_qm10',
        type: 'mcq',
        question: 'Three consecutive even integers sum to 66. What is the smallest integer?',
        options: ['20', '18', '22', '24'],
        correctAnswer: '20',
        explanation: 'Let smallest be x. Then x + (x+2) + (x+4) = 66. Solving: 3x + 6 = 66, so x = 20. 🔢',
        wrongAnswerExplanations: {
            '18': 'Sum of 18, 20, 22 is 60, not 66.',
            '22': 'Sum of 22, 24, 26 is 72, not 66.',
            '24': 'Sum of 24, 26, 28 is 78, not 66.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch2_t2_qm11',
        type: 'mcq',
        question: 'A boat travels 24 km upstream in 3 hours and the same distance downstream in 2 hours. What is the speed of the boat in still water?',
        options: ['12 km/h', '10 km/h', '14 km/h', '16 km/h'],
        correctAnswer: '12 km/h',
        explanation: 'Let boat speed be x and current speed be y. Then: x-y = 8 and x+y = 12. Solving: 2x = 20, so x = 12. ⛵',
        wrongAnswerExplanations: {
            '10 km/h': 'This speed cannot satisfy both upstream and downstream times.',
            '14 km/h': 'This speed would make journey times too short.',
            '16 km/h': 'This speed would make journey times much too short.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch2_t2_qm12',
        type: 'mcq',
        question: 'The ratio of two numbers is 3:4, and their sum is 49. What is the smaller number?',
        options: ['21', '18', '24', '27'],
        correctAnswer: '21',
        explanation: 'Let smaller be 3x and larger be 4x. Then 3x + 4x = 49. Solving: 7x = 49, so 3x = 21. 🔢',
        wrongAnswerExplanations: {
            '18': 'With 18 and 24, ratio is 3:4 but sum is 42, not 49.',
            '24': 'This is the larger number, not the smaller.',
            '27': 'With 27 and 36, ratio is 3:4 but sum is 63, not 49.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch2_t2_qm13',
        type: 'mcq',
        question: 'A sum of money becomes ₹7,200 in 2 years at 10% simple interest per annum. What is the principal amount?',
        options: ['₹6,000', '₹5,500', '₹6,500', '₹5,000'],
        correctAnswer: '₹6,000',
        explanation: 'Let principal be P. Then P + (P × 10% × 2) = 7200. Solving: P(1 + 0.2) = 7200, so P = 6000. 💰',
        wrongAnswerExplanations: {
            '₹5,500': 'This would give ₹6,600 after 2 years, not ₹7,200.',
            '₹6,500': 'This would give ₹7,800 after 2 years, not ₹7,200.',
            '₹5,000': 'This would give ₹6,000 after 2 years, not ₹7,200.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch2_t2_qm14',
        type: 'mcq',
        question: 'The area of a rectangle is 120 cm². If its length is 5 cm more than its width, what is the width?',
        options: ['8 cm', '10 cm', '12 cm', '6 cm'],
        correctAnswer: '8 cm',
        explanation: 'Let width be x. Length = x + 5. Area = x(x + 5) = 120. Solving: x² + 5x - 120 = 0, so x = 8. 📐',
        wrongAnswerExplanations: {
            '10 cm': 'This would give area of 150 cm², not 120 cm².',
            '12 cm': 'This would give area of 204 cm², not 120 cm².',
            '6 cm': 'This would give area of 66 cm², not 120 cm².'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch2_t2_qm15',
        type: 'mcq',
        question: 'In a class, the number of girls is 4 more than twice the number of boys. If total students are 52, how many boys are there?',
        options: ['16', '18', '14', '20'],
        correctAnswer: '16',
        explanation: 'Let boys be x. Girls = 2x + 4. Total: x + 2x + 4 = 52. Solving: 3x + 4 = 52, so x = 16. 👨‍🎓',
        wrongAnswerExplanations: {
            '18': 'This would give total of 58 students, not 52.',
            '14': 'This would give total of 46 students, not 52.',
            '20': 'This would give total of 64 students, not 52.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch2_t2_qm16',
        type: 'mcq',
        question: 'A cyclist covers a distance at 15 km/h and returns at 10 km/h. If the total journey takes 5 hours, what is the distance one way?',
        options: ['30 km', '25 km', '35 km', '40 km'],
        correctAnswer: '30 km',
        explanation: 'Let distance be x. Then x/15 + x/10 = 5. Solving: (2x + 3x)/30 = 5, so x = 30. 🚲',
        wrongAnswerExplanations: {
            '25 km': 'This would take about 4.17 hours total, not 5 hours.',
            '35 km': 'This would take about 5.83 hours total, not 5 hours.',
            '40 km': 'This would take about 6.67 hours total, not 5 hours.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch2_t2_qm17',
        type: 'mcq',
        question: 'The sum of the digits of a two-digit number is 9. If the number is 27 more than the number formed by reversing its digits, what is the number?',
        options: ['63', '72', '81', '54'],
        correctAnswer: '63',
        explanation: 'Let digits be x and y. Then x + y = 9 and 10x + y - (10y + x) = 27. Solving gives x = 6, y = 3. 🔢',
        wrongAnswerExplanations: {
            '72': 'When reversed, difference is not 27.',
            '81': 'Sum of digits is not 9.',
            '54': 'When reversed, difference is not 27.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch2_t2_qm18',
        type: 'mcq',
        question: 'A tank has two inlet pipes and one outlet pipe. First inlet fills 1/3 tank per hour, second inlet fills 1/4 tank per hour, and outlet empties 1/5 tank per hour. If tank is empty, how long will it take to fill?',
        options: ['2.5 hours', '3 hours', '2 hours', '3.5 hours'],
        correctAnswer: '2.5 hours',
        explanation: 'Net filling per hour = 1/3 + 1/4 - 1/5 = 47/60. Time = 1 ÷ (47/60) = 2.5 hours. 🚰',
        wrongAnswerExplanations: {
            '3 hours': 'Tank would overflow before 3 hours.',
            '2 hours': 'Tank would not be full in 2 hours.',
            '3.5 hours': 'Tank would overflow well before 3.5 hours.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch2_t2_qm19',
        type: 'mcq',
        question: 'Three angles of a quadrilateral are equal, and the fourth angle is 20° more than each of the equal angles. What is the measure of each equal angle?',
        options: ['85°', '90°', '80°', '95°'],
        correctAnswer: '85°',
        explanation: 'Let equal angle be x. Then 3x + (x + 20) = 360° (angle sum). Solving: 4x + 20 = 360, so x = 85°. 📐',
        wrongAnswerExplanations: {
            '90°': 'This would make sum 380°, not 360°.',
            '80°': 'This would make sum 340°, not 360°.',
            '95°': 'This would make total angles 400°, not 360°.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch2_t2_qm20',
        type: 'mcq',
        question: 'A shopkeeper buys 80 items at ₹x each. He sells 75% at 20% profit and rest at 10% loss. If his total profit is ₹280, what is the cost price per item?',
        options: ['₹100', '₹80', '₹120', '₹90'],
        correctAnswer: '₹100',
        explanation: 'Let CP be x. Then 60x × 0.2 - 20x × 0.1 = 280. Solving: 12x - 2x = 280, so x = 100. 💰',
        wrongAnswerExplanations: {
            '₹80': 'This would give total profit of ₹224, not ₹280.',
            '₹120': 'This would give total profit of ₹336, not ₹280.',
            '₹90': 'This would give total profit of ₹252, not ₹280.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    }
]; 