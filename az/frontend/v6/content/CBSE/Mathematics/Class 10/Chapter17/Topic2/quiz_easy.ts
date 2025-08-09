import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
  {
    id: 'cl10_ch17_t2_qe1',
    type: 'mcq',
    question: 'What is the result of 112 × 88 using the "difference of squares" formula?',
    options: ['9,856', '9,886', '9,866', '9,846'],
    correctAnswer: '9,856',
    explanation: '112 × 88 = (100 + 12)(100 - 12) = 100² - 12² = 10,000 - 144 = 9,856',
    wrongAnswerExplanations: {
      '9,886': 'This is an incorrect calculation.',
      '9,866': 'This is an incorrect calculation.',
      '9,846': 'This is an incorrect calculation.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch17_t2_qe2',
    type: 'mcq',
    question: 'Which mental math technique is best for calculating 19 × 21?',
    options: ['Difference of squares', 'Multiplication by 10s', 'Distributive property', 'Doubling and halving'],
    correctAnswer: 'Difference of squares',
    explanation: '19 × 21 = (20 - 1)(20 + 1) = 20² - 1² = 400 - 1 = 399',
    wrongAnswerExplanations: {
      'Multiplication by 10s': 'Not the most efficient for these numbers.',
      'Distributive property': 'Works but less elegant than difference of squares.',
      'Doubling and halving': 'Not applicable for these specific numbers.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch17_t2_qe3',
    type: 'mcq',
    question: 'To calculate 25% of 72 quickly, you could:',
    options: ['Find 1/4 of 72', 'Find 1/5 of 72', 'Find 1/2 of 36', 'Find 1/3 of 72'],
    correctAnswer: 'Find 1/4 of 72',
    explanation: '25% = 1/4, so 25% of 72 = 72 ÷ 4 = 18',
    wrongAnswerExplanations: {
      'Find 1/5 of 72': '1/5 equals 20%, not 25%.',
      'Find 1/2 of 36': 'This equals 18, but is more complex than needed.',
      'Find 1/3 of 72': '1/3 equals 33.33%, not 25%.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 45
  },
  {
    id: 'cl10_ch17_t2_qe4',
    type: 'mcq',
    question: 'Using the distributive property, 47 × 9 can be calculated as:',
    options: ['(47 × 10) - 47', '(50 × 9) - (3 × 9)', '(40 × 9) + (7 × 9)', 'All of the above'],
    correctAnswer: 'All of the above',
    explanation: 'All approaches use distributive property correctly: 47 × 9 = 470 - 47 = 450 - 27 = 360 + 63 = 423',
    wrongAnswerExplanations: {
      '(47 × 10) - 47': 'This is correct but not the only valid approach.',
      '(50 × 9) - (3 × 9)': 'This is correct but not the only valid approach.',
      '(40 × 9) + (7 × 9)': 'This is correct but not the only valid approach.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch17_t2_qe5',
    type: 'mcq',
    question: 'To divide 84 by 4 mentally, which is NOT an efficient strategy?',
    options: ['Factor, then divide by each factor separately', 'Divide 80 by 4, then add 4 ÷ 4', 'Convert to decimal and multiply by 0.25', 'Halve the number twice'],
    correctAnswer: 'Convert to decimal and multiply by 0.25',
    explanation: 'Multiplying by 0.25 is equivalent but more complex than direct division by 4.',
    wrongAnswerExplanations: {
      'Factor, then divide by each factor separately': 'Efficient if factors are easily recognizable.',
      'Divide 80 by 4, then add 4 ÷ 4': 'Breaking into manageable parts is efficient.',
      'Halve the number twice': 'Dividing by 2 twice equals dividing by 4, which is efficient.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch17_t2_qe6',
    type: 'mcq',
    question: 'Using the doubling and halving strategy, how would you calculate 25 × 16?',
    options: ['50 × 8 = 400', '100 × 4 = 400', '12.5 × 32 = 400', 'Any of these approaches'],
    correctAnswer: 'Any of these approaches',
    explanation: 'Doubling one factor and halving the other maintains the product: 25 × 16 = 50 × 8 = 100 × 4 = 400',
    wrongAnswerExplanations: {
      '50 × 8 = 400': 'Correct but not the only valid approach.',
      '100 × 4 = 400': 'Correct but not the only valid approach.',
      '12.5 × 32 = 400': 'Correct but not the only valid approach.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch17_t2_qe7',
    type: 'mcq',
    question: 'To quickly find 15% of a number, you could:',
    options: ['Find 10% + 5%', 'Find 20% - 5%', 'Find 30% ÷ 2', 'Find 5% × 3'],
    correctAnswer: 'Find 10% + 5%',
    explanation: '15% = 10% + 5%. 10% is easy (move decimal point), and 5% is half of 10%.',
    wrongAnswerExplanations: {
      'Find 20% - 5%': 'Works but less intuitive than 10% + 5%.',
      'Find 30% ÷ 2': 'This equals 15% but calculating 30% first is less efficient.',
      'Find 5% × 3': 'Correct mathematically but less efficient mentally.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch17_t2_qe8',
    type: 'mcq',
    question: 'What is 995 + 767 using compensation method?',
    options: ['1,762', '1,752', '1,772', '1,782'],
    correctAnswer: '1,762',
    explanation: 'Add 5 to 995 to get 1000, add 1000 + 767 = 1767, subtract 5 to get 1762',
    wrongAnswerExplanations: {
      '1,752': 'This is an incorrect calculation.',
      '1,772': 'This is an incorrect calculation.',
      '1,782': 'This is an incorrect calculation.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch17_t2_qe9',
    type: 'mcq',
    question: 'Which mental strategy is most efficient for calculating 5² × 4²?',
    options: ['Use the property (a × b)² = a² × b²', 'Calculate 5² first, then multiply by 4²', 'Calculate 5 × 4 first, then square the result', 'Use the distributive property'],
    correctAnswer: 'Calculate 5 × 4 first, then square the result',
    explanation: '5² × 4² = (5 × 4)² = 20² = 400',
    wrongAnswerExplanations: {
      'Use the property (a × b)² = a² × b²': 'This formula is incorrect.',
      'Calculate 5² first, then multiply by 4²': 'Works but requires more steps.',
      'Use the distributive property': 'Not applicable for this type of calculation.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch17_t2_qe10',
    type: 'mcq',
    question: 'To subtract 39 from 200 mentally, you could use:',
    options: ['Subtract 40, then add 1', 'Subtract 30, then subtract 9', 'Add 1 to 39, subtract 40', 'None of these'],
    correctAnswer: 'Subtract 40, then add 1',
    explanation: '200 - 39 = 200 - 40 + 1 = 160 + 1 = 161',
    wrongAnswerExplanations: {
      'Subtract 30, then subtract 9': 'Works but is less efficient.',
      'Add 1 to 39, subtract 40': 'This complicates the calculation.',
      'None of these': 'Multiple valid strategies exist.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 45
  },
  {
    id: 'cl10_ch17_t2_qe11',
    type: 'mcq',
    question: 'When multiplying by 11, which mental math strategy is most efficient?',
    options: ['Multiply by 10 and add the number', 'Add adjacent digits and place between them', 'Multiply by 5.5 and double', 'Multiply by 12 and subtract the number'],
    correctAnswer: 'Add adjacent digits and place between them',
    explanation: 'For 2-digit numbers, add adjacent digits and place between: 45 × 11 = 4(4+5)5 = 495',
    wrongAnswerExplanations: {
      'Multiply by 10 and add the number': 'Works but less elegant for multi-digit numbers.',
      'Multiply by 5.5 and double': 'Unnecessarily complex approach.',
      'Multiply by 12 and subtract the number': 'Works but less efficient.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch17_t2_qe12',
    type: 'mcq',
    question: 'To find the square of 45, you could use:',
    options: ['(40 + 5)² using algebra', '(50 - 5)² using algebra', 'Double 45 and multiply by 22.5', '50² - 5²'],
    correctAnswer: '(50 - 5)² using algebra',
    explanation: '45² = (50 - 5)² = 50² - 2(50)(5) + 5² = 2500 - 500 + 25 = 2025',
    wrongAnswerExplanations: {
      '(40 + 5)² using algebra': 'Works but less convenient with these numbers.',
      'Double 45 and multiply by 22.5': 'This doesn`t calculate 45².',
      '50² - 5²': 'This calculates 50×40, not 45².'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch17_t2_qe13',
    type: 'mcq',
    question: 'Which mental math strategy is most efficient for calculating 37 × 5?',
    options: ['Multiply by 10 and divide by 2', 'Add 37 five times', 'Calculate 40 × 5 - 3 × 5', 'Calculate 35 × 5 + 2 × 5'],
    correctAnswer: 'Multiply by 10 and divide by 2',
    explanation: '37 × 5 = 37 × 10 ÷ 2 = 370 ÷ 2 = 185',
    wrongAnswerExplanations: {
      'Add 37 five times': 'Too time-consuming for mental calculation.',
      'Calculate 40 × 5 - 3 × 5': 'Works but less efficient than multiplying by 10 and halving.',
      'Calculate 35 × 5 + 2 × 5': 'Works but less efficient than multiplying by 10 and halving.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch17_t2_qe14',
    type: 'mcq',
    question: 'To calculate 998 + 325 mentally, the most efficient approach is:',
    options: ['Add 2 to 998, then add 325, then subtract 2', 'Add 325 to 1000, then subtract 2', 'Add 998 to 300, then add 25', 'Break 998 into 900 + 98 and add separately'],
    correctAnswer: 'Add 2 to 998, then add 325, then subtract 2',
    explanation: '998 + 325 = 1000 + 325 - 2 = 1325 - 2 = 1323',
    wrongAnswerExplanations: {
      'Add 325 to 1000, then subtract 2': 'This is essentially the same approach, just reworded.',
      'Add 998 to 300, then add 25': 'Less efficient than working with 1000.',
      'Break 998 into 900 + 98 and add separately': 'More steps than working with 1000.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch17_t2_qe15',
    type: 'mcq',
    question: 'What is the result of 625 ÷ 25 using factorization?',
    options: ['25', '250', '125', '2.5'],
    correctAnswer: '25',
    explanation: '625 ÷ 25 = (25 × 25) ÷ 25 = 25',
    wrongAnswerExplanations: {
      '250': 'This would be 625 × 0.4.',
      '125': 'This would be 625 ÷ 5.',
      '2.5': 'This would be 625 ÷ 250.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 45
  },
  {
    id: 'cl10_ch17_t2_qe16',
    type: 'mcq',
    question: 'To mentally calculate 87 - 29, which strategy is most efficient?',
    options: ['87 - 30 + 1', '90 - 29 - 3', '87 - 20 - 9', '100 - 29 - 13'],
    correctAnswer: '87 - 30 + 1',
    explanation: '87 - 29 = 87 - 30 + 1 = 57 + 1 = 58',
    wrongAnswerExplanations: {
      '90 - 29 - 3': 'Works but has more steps.',
      '87 - 20 - 9': 'Less efficient than rounding 29 up.',
      '100 - 29 - 13': 'Unnecessarily complex.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch17_t2_qe17',
    type: 'mcq',
    question: 'Which mental math property is being used when calculating 8 × 125 as 1000?',
    options: ['8 = 10³ ÷ 125', '8 × 125 = 1000', '8 = 2³ and 125 = 5³', '125 = 1000 ÷ 8'],
    correctAnswer: '8 = 2³ and 125 = 5³',
    explanation: '8 × 125 = 2³ × 5³ = (2 × 5)³ = 10³ = 1000',
    wrongAnswerExplanations: {
      '8 = 10³ ÷ 125': 'Incorrect relationship.',
      '8 × 125 = 1000': 'States the result without explaining the mental strategy.',
      '125 = 1000 ÷ 8': 'Inverse relationship, not useful for calculation.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch17_t2_qe18',
    type: 'mcq',
    question: 'To find 20% of 85 mentally, you could:',
    options: ['Find 10% and double it', 'Divide by 5', 'Calculate 85 ÷ 100 × 20', 'All of these'],
    correctAnswer: 'All of these',
    explanation: 'All approaches work: (85 ÷ 10) × 2 = 8.5 × 2 = 17; 85 ÷ 5 = 17; 85 × 0.2 = 17',
    wrongAnswerExplanations: {
      'Find 10% and double it': 'Correct but not the only valid approach.',
      'Divide by 5': 'Correct but not the only valid approach.',
      'Calculate 85 ÷ 100 × 20': 'Correct but not the only valid approach.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch17_t2_qe19',
    type: 'mcq',
    question: 'When calculating 35 × 12 mentally, which is NOT an efficient approach?',
    options: ['(35 × 10) + (35 × 2)', '(30 × 12) + (5 × 12)', '35 × 6 × 2', '(35 × 3) × 4'],
    correctAnswer: '(35 × 3) × 4',
    explanation: 'Multiplying by 3 first is less intuitive than other methods like multiplying by 10.',
    wrongAnswerExplanations: {
      '(35 × 10) + (35 × 2)': 'Effective use of distributive property with powers of 10.',
      '(30 × 12) + (5 × 12)': 'Effective use of distributive property with simpler numbers.',
      '35 × 6 × 2': 'Uses associative property with factors of 12.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch17_t2_qe20',
    type: 'mcq',
    question: 'Which property is most useful when mentally calculating 25 × 24?',
    options: ['(25 × 20) + (25 × 4)', '25 × 25 - 25', '(100 ÷ 4) × 24', '(20 + 5) × (20 + 4)'],
    correctAnswer: '25 × 25 - 25',
    explanation: '25 × 24 = 25(25 - 1) = 25² - 25 = 625 - 25 = 600',
    wrongAnswerExplanations: {
      '(25 × 20) + (25 × 4)': 'Works but less elegant for these specific numbers.',
      '(100 ÷ 4) × 24': 'Unnecessarily complex approach.',
      '(20 + 5) × (20 + 4)': 'FOIL method requires more steps mentally.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  }
];
