import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
  {
    id: 'cl3_ch11_t2_qe1',
    type: 'mcq',
    question: 'Which unit is used to measure the amount of water in a bottle?',
    options: ['Litre', 'Kilogram', 'Metre', 'Gram'],
    correctAnswer: 'Litre',
    explanation: 'Litre (L) is used to measure liquids.',
    wrongAnswerExplanations: {
      'Kilogram': 'Kilogram is used for weight.',
      'Metre': 'Metre is used for length.',
      'Gram': 'Gram is used for small weights.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl3_ch11_t2_qe2',
    type: 'mcq',
    question: 'How many millilitres are there in 1 litre?',
    options: ['1000', '100', '10', '500'],
    correctAnswer: '1000',
    explanation: '1 litre = 1000 millilitres (mL).',
    wrongAnswerExplanations: {
      '100': '100 mL is much less than 1 L.',
      '10': '10 mL is much less than 1 L.',
      '500': '500 mL is half a litre.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl3_ch11_t2_qe3',
    type: 'mcq',
    question: 'Which holds more: a 2 L jug or a 500 mL bottle?',
    options: ['2 L jug', '500 mL bottle', 'Both hold the same', 'None'],
    correctAnswer: '2 L jug',
    explanation: '2 L is more than 500 mL.',
    wrongAnswerExplanations: {
      '500 mL bottle': '500 mL is less than 2 L.',
      'Both hold the same': '2 L is greater than 500 mL.',
      'None': '2 L jug holds more.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl3_ch11_t2_qe4',
    type: 'mcq',
    question: 'If a glass holds 250 mL, how many glasses can be filled from 1 L of juice?',
    options: ['4', '2', '5', '10'],
    correctAnswer: '4',
    explanation: '1000 mL ÷ 250 mL = 4 glasses.',
    wrongAnswerExplanations: {
      '2': '2 glasses = 500 mL.',
      '5': '5 glasses = 1250 mL.',
      '10': '10 glasses = 2500 mL.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl3_ch11_t2_qe5',
    type: 'mcq',
    question: 'Which is the smallest amount?',
    options: ['100 mL', '1 L', '500 mL', '750 mL'],
    correctAnswer: '100 mL',
    explanation: '100 mL is less than all the others.',
    wrongAnswerExplanations: {
      '1 L': '1 L = 1000 mL, which is more.',
      '500 mL': '500 mL is more than 100 mL.',
      '750 mL': '750 mL is more than 100 mL.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl3_ch11_t2_qe6',
    type: 'mcq',
    question: 'A bottle has 750 mL of water. How much more is needed to make it 1 L?',
    options: ['250 mL', '100 mL', '500 mL', '750 mL'],
    correctAnswer: '250 mL',
    explanation: '1000 mL - 750 mL = 250 mL.',
    wrongAnswerExplanations: {
      '100 mL': '1000 - 750 = 250 mL.',
      '500 mL': '500 mL is too much.',
      '750 mL': '750 mL is already in the bottle.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl3_ch11_t2_qe7',
    type: 'mcq',
    question: 'Which container is likely to hold the most water?',
    options: ['Bucket', 'Cup', 'Spoon', 'Glass'],
    correctAnswer: 'Bucket',
    explanation: 'Buckets hold more than cups, spoons, or glasses.',
    wrongAnswerExplanations: {
      'Cup': 'A cup holds less than a bucket.',
      'Spoon': 'A spoon holds very little.',
      'Glass': 'A glass holds less than a bucket.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl3_ch11_t2_qe8',
    type: 'mcq',
    question: 'If you pour 500 mL of juice into a 1 L jug, how much space is left?',
    options: ['500 mL', '250 mL', '100 mL', '750 mL'],
    correctAnswer: '500 mL',
    explanation: '1 L = 1000 mL; 1000 - 500 = 500 mL.',
    wrongAnswerExplanations: {
      '250 mL': 'Only 500 mL is left.',
      '100 mL': 'Only 500 mL is left.',
      '750 mL': 'Only 500 mL is left.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl3_ch11_t2_qe9',
    type: 'mcq',
    question: 'Which is more: 1 L or 900 mL?',
    options: ['1 L', '900 mL', 'Both are equal', 'None'],
    correctAnswer: '1 L',
    explanation: '1 L = 1000 mL, which is more than 900 mL.',
    wrongAnswerExplanations: {
      '900 mL': '900 mL is less than 1 L.',
      'Both are equal': '1 L is more than 900 mL.',
      'None': '1 L is more.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl3_ch11_t2_qe10',
    type: 'mcq',
    question: 'How many 200 mL glasses can you fill from a 1 L bottle?',
    options: ['5', '4', '3', '6'],
    correctAnswer: '5',
    explanation: '1000 mL ÷ 200 mL = 5 glasses.',
    wrongAnswerExplanations: {
      '4': '4 glasses = 800 mL.',
      '3': '3 glasses = 600 mL.',
      '6': '6 glasses = 1200 mL.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl3_ch11_t2_qe11',
    type: 'mcq',
    question: 'Which is the correct way to write 500 millilitres in litres?',
    options: ['0.5 L', '5 L', '50 L', '1 L'],
    correctAnswer: '0.5 L',
    explanation: '500 mL = 0.5 L.',
    wrongAnswerExplanations: {
      '5 L': '5 L = 5000 mL.',
      '50 L': '50 L = 50000 mL.',
      '1 L': '1 L = 1000 mL.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl3_ch11_t2_qe12',
    type: 'mcq',
    question: 'If a jug holds 2 L, how many 250 mL glasses can it fill?',
    options: ['8', '6', '4', '10'],
    correctAnswer: '8',
    explanation: '2 L = 2000 mL; 2000 ÷ 250 = 8.',
    wrongAnswerExplanations: {
      '6': '6 glasses = 1500 mL.',
      '4': '4 glasses = 1000 mL.',
      '10': '10 glasses = 2500 mL.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl3_ch11_t2_qe13',
    type: 'mcq',
    question: 'Which is the best tool to measure 1 teaspoon of medicine?',
    options: ['Measuring spoon', 'Bucket', 'Jug', 'Cup'],
    correctAnswer: 'Measuring spoon',
    explanation: 'Measuring spoons are used for small amounts.',
    wrongAnswerExplanations: {
      'Bucket': 'A bucket is too big.',
      'Jug': 'A jug is for larger amounts.',
      'Cup': 'A cup is bigger than a spoon.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl3_ch11_t2_qe14',
    type: 'mcq',
    question: 'If you have 3 bottles of 500 mL each, how much liquid do you have in total?',
    options: ['1500 mL', '1000 mL', '2000 mL', '500 mL'],
    correctAnswer: '1500 mL',
    explanation: '3 × 500 mL = 1500 mL.',
    wrongAnswerExplanations: {
      '1000 mL': '2 bottles = 1000 mL.',
      '2000 mL': '4 bottles = 2000 mL.',
      '500 mL': '1 bottle = 500 mL.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl3_ch11_t2_qe15',
    type: 'mcq',
    question: 'Which is more: 3 L or 2500 mL?',
    options: ['3 L', '2500 mL', 'Both are equal', 'None'],
    correctAnswer: '3 L',
    explanation: '3 L = 3000 mL, which is more than 2500 mL.',
    wrongAnswerExplanations: {
      '2500 mL': '2500 mL is less than 3 L.',
      'Both are equal': '3 L is more.',
      'None': '3 L is more.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl3_ch11_t2_qe16',
    type: 'mcq',
    question: 'If a recipe needs 1.5 L of water, how many 500 mL bottles are needed?',
    options: ['3', '2', '4', '5'],
    correctAnswer: '3',
    explanation: '1.5 L = 1500 mL; 1500 ÷ 500 = 3.',
    wrongAnswerExplanations: {
      '2': '2 bottles = 1000 mL.',
      '4': '4 bottles = 2000 mL.',
      '5': '5 bottles = 2500 mL.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl3_ch11_t2_qe17',
    type: 'mcq',
    question: 'Which is the correct way to write 2000 mL in litres?',
    options: ['2 L', '0.2 L', '20 L', '200 L'],
    correctAnswer: '2 L',
    explanation: '2000 mL = 2 L.',
    wrongAnswerExplanations: {
      '0.2 L': '0.2 L = 200 mL.',
      '20 L': '20 L = 20000 mL.',
      '200 L': '200 L = 200000 mL.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl3_ch11_t2_qe18',
    type: 'mcq',
    question: 'If a glass holds 150 mL, how many glasses can be filled from a 900 mL jug?',
    options: ['6', '5', '7', '8'],
    correctAnswer: '6',
    explanation: '900 ÷ 150 = 6 glasses.',
    wrongAnswerExplanations: {
      '5': '5 glasses = 750 mL.',
      '7': '7 glasses = 1050 mL.',
      '8': '8 glasses = 1200 mL.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl3_ch11_t2_qe19',
    type: 'mcq',
    question: 'Which is the best container to carry 10 L of water?',
    options: ['Bucket', 'Cup', 'Glass', 'Spoon'],
    correctAnswer: 'Bucket',
    explanation: 'A bucket can hold 10 L easily.',
    wrongAnswerExplanations: {
      'Cup': 'A cup is too small.',
      'Glass': 'A glass is too small.',
      'Spoon': 'A spoon is too small.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl3_ch11_t2_qe20',
    type: 'mcq',
    question: 'If you have 2 L of juice and pour it into 4 equal bottles, how much juice is in each bottle?',
    options: ['500 mL', '250 mL', '1 L', '2 L'],
    correctAnswer: '500 mL',
    explanation: '2 L = 2000 mL; 2000 ÷ 4 = 500 mL.',
    wrongAnswerExplanations: {
      '250 mL': '4 × 250 mL = 1000 mL.',
      '1 L': '4 × 1 L = 4 L.',
      '2 L': '2 L is the total, not per bottle.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  }
];
