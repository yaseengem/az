import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
  {
    id: 'cl3_ch11_t1_qe1',
    type: 'mcq',
    question: 'Which unit is commonly used to measure the capacity of a water bottle?',
    options: ['Litre (L)', 'Kilogram (kg)', 'Centimetre (cm)', 'Gram (g)'],
    correctAnswer: 'Litre (L)',
    explanation: 'Capacity of liquids is measured in litres (L) or millilitres (mL).',
    wrongAnswerExplanations: {
      'Kilogram (kg)': 'Kilogram is used to measure weight, not capacity.',
      'Centimetre (cm)': 'Centimetre is used to measure length.',
      'Gram (g)': 'Gram is used to measure weight.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl3_ch11_t1_qe2',
    type: 'mcq',
    question: 'How many millilitres (mL) are there in 1 litre (L)?',
    options: ['100', '500', '1000', '10'],
    correctAnswer: '1000',
    explanation: '1 litre = 1000 millilitres (mL).',
    wrongAnswerExplanations: {
      '100': '1 litre is 1000 mL, not 100 mL.',
      '500': '1 litre is 1000 mL, not 500 mL.',
      '10': '1 litre is 1000 mL, not 10 mL.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl3_ch11_t1_qe3',
    type: 'mcq',
    question: 'A juice box holds 200 mL. How many such boxes make 1 L?',
    options: ['2', '5', '10', '20'],
    correctAnswer: '5',
    explanation: '5 × 200 mL = 1000 mL = 1 L.',
    wrongAnswerExplanations: {
      '2': '2 × 200 mL = 400 mL, not 1 L.',
      '10': '10 × 200 mL = 2000 mL, which is 2 L.',
      '20': '20 × 200 mL = 4000 mL, which is 4 L.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl3_ch11_t1_qe4',
    type: 'mcq',
    question: 'Which container is likely to have the largest capacity?',
    options: ['Cup', 'Jug', 'Bucket', 'Spoon'],
    correctAnswer: 'Bucket',
    explanation: 'Buckets hold more liquid than cups, jugs, or spoons.',
    wrongAnswerExplanations: {
      'Cup': 'A cup holds less than a bucket.',
      'Jug': 'A jug holds less than a bucket.',
      'Spoon': 'A spoon holds the least.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl3_ch11_t1_qe5',
    type: 'mcq',
    question: 'If you pour 250 mL of milk into a 1 L bottle, how much more can it hold?',
    options: ['250 mL', '500 mL', '750 mL', '1000 mL'],
    correctAnswer: '750 mL',
    explanation: '1 L = 1000 mL; 1000 - 250 = 750 mL left.',
    wrongAnswerExplanations: {
      '250 mL': '250 mL is already filled, 750 mL is left.',
      '500 mL': '500 mL is not correct; 1000 - 250 = 750 mL.',
      '1000 mL': '1000 mL is the total capacity, not the remaining.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl3_ch11_t1_qe6',
    type: 'mcq',
    question: 'Which is more: 1.5 L or 1200 mL?',
    options: ['1.5 L', '1200 mL', 'Both are equal', 'Cannot say'],
    correctAnswer: '1.5 L',
    explanation: '1.5 L = 1500 mL, which is more than 1200 mL.',
    wrongAnswerExplanations: {
      '1200 mL': '1200 mL is less than 1.5 L (1500 mL).',
      'Both are equal': '1.5 L is 1500 mL, not equal to 1200 mL.',
      'Cannot say': 'We can compare by converting units.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl3_ch11_t1_qe7',
    type: 'mcq',
    question: 'A medicine bottle has 60 mL. If you take 5 mL each day, how many days will it last?',
    options: ['10', '12', '15', '20'],
    correctAnswer: '12',
    explanation: '60 ÷ 5 = 12 days.',
    wrongAnswerExplanations: {
      '10': '10 × 5 = 50 mL, not 60 mL.',
      '15': '15 × 5 = 75 mL, more than 60 mL.',
      '20': '20 × 5 = 100 mL, more than 60 mL.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl3_ch11_t1_qe8',
    type: 'mcq',
    question: 'Which is the correct way to write 500 millilitres in litres?',
    options: ['0.5 L', '5 L', '50 L', '0.05 L'],
    correctAnswer: '0.5 L',
    explanation: '500 mL = 0.5 L.',
    wrongAnswerExplanations: {
      '5 L': '5 L = 5000 mL.',
      '50 L': '50 L = 50000 mL.',
      '0.05 L': '0.05 L = 50 mL.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl3_ch11_t1_qe9',
    type: 'mcq',
    question: 'If you have two bottles, one with 750 mL and another with 1 L, what is the total capacity?',
    options: ['1000 mL', '1250 mL', '1750 mL', '2000 mL'],
    correctAnswer: '1750 mL',
    explanation: '750 mL + 1000 mL = 1750 mL.',
    wrongAnswerExplanations: {
      '1000 mL': '1000 mL is just 1 L, not the total.',
      '1250 mL': '1250 mL is not the sum.',
      '2000 mL': '2000 mL is more than the total.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl3_ch11_t1_qe10',
    type: 'mcq',
    question: 'Which of these is the smallest quantity?',
    options: ['1 L', '500 mL', '250 mL', '2 L'],
    correctAnswer: '250 mL',
    explanation: '250 mL is less than 500 mL, 1 L, and 2 L.',
    wrongAnswerExplanations: {
      '1 L': '1 L = 1000 mL, more than 250 mL.',
      '500 mL': '500 mL is more than 250 mL.',
      '2 L': '2 L = 2000 mL, much more than 250 mL.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl3_ch11_t1_qe11',
    type: 'mcq',
    question: 'A bucket holds 8 L. If you fill it with 2 L of water, how much more can it hold?',
    options: ['2 L', '4 L', '6 L', '8 L'],
    correctAnswer: '6 L',
    explanation: '8 L - 2 L = 6 L left.',
    wrongAnswerExplanations: {
      '2 L': '2 L is already filled, 6 L is left.',
      '4 L': '4 L is not correct; 8 - 2 = 6 L.',
      '8 L': '8 L is the total capacity, not the remaining.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl3_ch11_t1_qe12',
    type: 'mcq',
    question: 'Which of these is a correct conversion?',
    options: ['1 L = 100 mL', '1 L = 1000 mL', '1 L = 10 mL', '1 L = 500 mL'],
    correctAnswer: '1 L = 1000 mL',
    explanation: '1 L = 1000 mL is correct.',
    wrongAnswerExplanations: {
      '1 L = 100 mL': '1 L = 1000 mL, not 100 mL.',
      '1 L = 10 mL': '1 L = 1000 mL, not 10 mL.',
      '1 L = 500 mL': '1 L = 1000 mL, not 500 mL.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl3_ch11_t1_qe13',
    type: 'mcq',
    question: 'If you pour 300 mL of juice into a glass and then add 200 mL more, how much is in the glass?',
    options: ['300 mL', '400 mL', '500 mL', '600 mL'],
    correctAnswer: '500 mL',
    explanation: '300 mL + 200 mL = 500 mL.',
    wrongAnswerExplanations: {
      '300 mL': '300 mL is the first amount, not the total.',
      '400 mL': '400 mL is not the sum.',
      '600 mL': '600 mL is more than the total.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl3_ch11_t1_qe14',
    type: 'mcq',
    question: 'Which is the best tool to measure 5 mL of medicine?',
    options: ['Measuring cup', 'Spoon', 'Dropper', 'Bucket'],
    correctAnswer: 'Dropper',
    explanation: 'Droppers are used for small quantities like 5 mL.',
    wrongAnswerExplanations: {
      'Measuring cup': 'Measuring cups are for larger amounts.',
      'Spoon': 'Spoons are less accurate for small amounts.',
      'Bucket': 'Buckets are for large quantities.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl3_ch11_t1_qe15',
    type: 'mcq',
    question: 'A soft drink bottle contains 1.5 L. How many millilitres is this?',
    options: ['150 mL', '1500 mL', '15 mL', '1000 mL'],
    correctAnswer: '1500 mL',
    explanation: '1.5 L = 1500 mL.',
    wrongAnswerExplanations: {
      '150 mL': '150 mL is much less than 1.5 L.',
      '15 mL': '15 mL is much less than 1.5 L.',
      '1000 mL': '1000 mL is 1 L, not 1.5 L.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl3_ch11_t1_qe16',
    type: 'mcq',
    question: 'Which is the correct way to write 2500 mL in litres?',
    options: ['2.5 L', '25 L', '0.25 L', '250 L'],
    correctAnswer: '2.5 L',
    explanation: '2500 mL = 2.5 L.',
    wrongAnswerExplanations: {
      '25 L': '25 L = 25000 mL.',
      '0.25 L': '0.25 L = 250 mL.',
      '250 L': '250 L = 250000 mL.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl3_ch11_t1_qe17',
    type: 'mcq',
    question: 'If you have 3 bottles of 500 mL each, what is the total?',
    options: ['1000 mL', '1500 mL', '2000 mL', '2500 mL'],
    correctAnswer: '1500 mL',
    explanation: '3 × 500 mL = 1500 mL.',
    wrongAnswerExplanations: {
      '1000 mL': '1000 mL is 2 bottles.',
      '2000 mL': '2000 mL is 4 bottles.',
      '2500 mL': '2500 mL is 5 bottles.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl3_ch11_t1_qe18',
    type: 'mcq',
    question: 'Which is the correct symbol for litre?',
    options: ['L', 'M', 'G', 'C'],
    correctAnswer: 'L',
    explanation: 'L is the symbol for litre.',
    wrongAnswerExplanations: {
      'M': 'M is not the symbol for litre.',
      'G': 'G is not the symbol for litre.',
      'C': 'C is not the symbol for litre.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl3_ch11_t1_qe19',
    type: 'mcq',
    question: 'If a glass holds 250 mL and a jug holds 2 L, how many glasses can fill the jug?',
    options: ['4', '6', '8', '10'],
    correctAnswer: '8',
    explanation: '2 L = 2000 mL; 2000 ÷ 250 = 8 glasses.',
    wrongAnswerExplanations: {
      '4': '4 × 250 mL = 1000 mL, not 2 L.',
      '6': '6 × 250 mL = 1500 mL, not 2 L.',
      '10': '10 × 250 mL = 2500 mL, more than 2 L.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl3_ch11_t1_qe20',
    type: 'mcq',
    question: 'Which of these is a real-life use of measuring capacity?',
    options: ['Measuring milk for tea', 'Measuring height', 'Measuring weight', 'Measuring distance'],
    correctAnswer: 'Measuring milk for tea',
    explanation: 'Measuring milk for tea is about capacity.',
    wrongAnswerExplanations: {
      'Measuring height': 'Height is measured in cm or m, not capacity.',
      'Measuring weight': 'Weight is measured in g or kg.',
      'Measuring distance': 'Distance is measured in m or km.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  }
];
