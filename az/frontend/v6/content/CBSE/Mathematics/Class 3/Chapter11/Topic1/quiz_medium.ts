import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
  {
    id: 'cl3_ch11_t1_qm1',
    type: 'mcq',
    question: 'A jug contains 1.2 L of juice. If you pour out 450 mL, how much juice is left?',
    options: ['750 mL', '800 mL', '850 mL', '900 mL'],
    correctAnswer: '750 mL',
    explanation: '1.2 L = 1200 mL; 1200 - 450 = 750 mL.',
    wrongAnswerExplanations: {
      '800 mL': '1200 - 450 = 750 mL.',
      '850 mL': '1200 - 450 = 750 mL.',
      '900 mL': '1200 - 450 = 750 mL.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 45
  },
  {
    id: 'cl3_ch11_t1_qm2',
    type: 'mcq',
    question: 'Which is more: 2.5 L or 2500 mL?',
    options: ['2.5 L', '2500 mL', 'Both are equal', 'Cannot say'],
    correctAnswer: 'Both are equal',
    explanation: '2.5 L = 2500 mL.',
    wrongAnswerExplanations: {
      '2.5 L': '2.5 L and 2500 mL are equal.',
      '2500 mL': '2.5 L and 2500 mL are equal.',
      'Cannot say': 'We can compare by converting units.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 45
  },
  {
    id: 'cl3_ch11_t1_qm3',
    type: 'mcq',
    question: 'A recipe needs 1.25 L of water. How many millilitres is this?',
    options: ['125 mL', '1250 mL', '1200 mL', '1500 mL'],
    correctAnswer: '1250 mL',
    explanation: '1.25 L = 1250 mL.',
    wrongAnswerExplanations: {
      '125 mL': '1.25 L = 1250 mL.',
      '1200 mL': '1.25 L = 1250 mL.',
      '1500 mL': '1.25 L = 1250 mL.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 45
  },
  {
    id: 'cl3_ch11_t1_qm4',
    type: 'mcq',
    question: 'If you have 3 bottles of 750 mL each, what is the total capacity?',
    options: ['1500 mL', '2000 mL', '2250 mL', '2500 mL'],
    correctAnswer: '2250 mL',
    explanation: '3 × 750 mL = 2250 mL.',
    wrongAnswerExplanations: {
      '1500 mL': '3 × 750 mL = 2250 mL.',
      '2000 mL': '3 × 750 mL = 2250 mL.',
      '2500 mL': '3 × 750 mL = 2250 mL.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 45
  },
  {
    id: 'cl3_ch11_t1_qm5',
    type: 'mcq',
    question: 'A tank holds 5 L of water. If you use 1.8 L, how much is left?',
    options: ['2.2 L', '3.2 L', '3.8 L', '4.2 L'],
    correctAnswer: '3.2 L',
    explanation: '5 L - 1.8 L = 3.2 L.',
    wrongAnswerExplanations: {
      '2.2 L': '5 - 1.8 = 3.2 L.',
      '3.8 L': '5 - 1.8 = 3.2 L.',
      '4.2 L': '5 - 1.8 = 3.2 L.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 45
  },
  {
    id: 'cl3_ch11_t1_qm6',
    type: 'mcq',
    question: 'Which is the correct way to write 3750 mL in litres?',
    options: ['3.75 L', '37.5 L', '0.375 L', '7.5 L'],
    correctAnswer: '3.75 L',
    explanation: '3750 mL = 3.75 L.',
    wrongAnswerExplanations: {
      '37.5 L': '37.5 L = 37500 mL.',
      '0.375 L': '0.375 L = 375 mL.',
      '7.5 L': '7.5 L = 7500 mL.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 45
  },
  {
    id: 'cl3_ch11_t1_qm7',
    type: 'mcq',
    question: 'If a glass holds 250 mL and a jug holds 2.5 L, how many glasses can fill the jug?',
    options: ['8', '10', '12', '14'],
    correctAnswer: '10',
    explanation: '2.5 L = 2500 mL; 2500 ÷ 250 = 10 glasses.',
    wrongAnswerExplanations: {
      '8': '8 × 250 mL = 2000 mL.',
      '12': '12 × 250 mL = 3000 mL.',
      '14': '14 × 250 mL = 3500 mL.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 45
  },
  {
    id: 'cl3_ch11_t1_qm8',
    type: 'mcq',
    question: 'A family uses 4 L of milk every day. How much milk do they use in a week?',
    options: ['14 L', '24 L', '28 L', '30 L'],
    correctAnswer: '28 L',
    explanation: '4 L × 7 days = 28 L.',
    wrongAnswerExplanations: {
      '14 L': '4 × 7 = 28 L.',
      '24 L': '4 × 7 = 28 L.',
      '30 L': '4 × 7 = 28 L.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 45
  },
  {
    id: 'cl3_ch11_t1_qm9',
    type: 'mcq',
    question: 'Which is the best estimate for the capacity of a bathtub?',
    options: ['5 L', '50 L', '500 L', '5000 L'],
    correctAnswer: '50 L',
    explanation: 'A bathtub usually holds about 50 L.',
    wrongAnswerExplanations: {
      '5 L': '5 L is too little for a bathtub.',
      '500 L': '500 L is too much for a bathtub.',
      '5000 L': '5000 L is much too much.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 45
  },
  {
    id: 'cl3_ch11_t1_qm10',
    type: 'mcq',
    question: 'A shopkeeper has 3 cans of oil: 2 L, 1.5 L, and 500 mL. What is the total oil?',
    options: ['3 L', '4 L', '5 L', '4.5 L'],
    correctAnswer: '4 L',
    explanation: '2 L + 1.5 L + 0.5 L = 4 L.',
    wrongAnswerExplanations: {
      '3 L': '2 + 1.5 + 0.5 = 4 L.',
      '5 L': '2 + 1.5 + 0.5 = 4 L.',
      '4.5 L': '2 + 1.5 + 0.5 = 4 L.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 45
  },
  {
    id: 'cl3_ch11_t1_qm11',
    type: 'mcq',
    question: 'If you pour 600 mL of water into a 2 L jug, how much more can it hold?',
    options: ['1.2 L', '1.4 L', '1.6 L', '1.8 L'],
    correctAnswer: '1.4 L',
    explanation: '2 L = 2000 mL; 2000 - 600 = 1400 mL = 1.4 L.',
    wrongAnswerExplanations: {
      '1.2 L': '2000 - 600 = 1400 mL = 1.4 L.',
      '1.6 L': '2000 - 600 = 1400 mL = 1.4 L.',
      '1.8 L': '2000 - 600 = 1400 mL = 1.4 L.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 45
  },
  {
    id: 'cl3_ch11_t1_qm12',
    type: 'mcq',
    question: 'Which is the correct conversion?',
    options: ['1.5 L = 1500 mL', '2 L = 500 mL', '0.5 L = 5000 mL', '1 L = 100 mL'],
    correctAnswer: '1.5 L = 1500 mL',
    explanation: '1.5 L = 1500 mL is correct.',
    wrongAnswerExplanations: {
      '2 L = 500 mL': '2 L = 2000 mL.',
      '0.5 L = 5000 mL': '0.5 L = 500 mL.',
      '1 L = 100 mL': '1 L = 1000 mL.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 45
  },
  {
    id: 'cl3_ch11_t1_qm13',
    type: 'mcq',
    question: 'A tank is filled with 3 buckets of 8 L each. What is the total?',
    options: ['16 L', '20 L', '24 L', '32 L'],
    correctAnswer: '24 L',
    explanation: '3 × 8 L = 24 L.',
    wrongAnswerExplanations: {
      '16 L': '3 × 8 = 24 L.',
      '20 L': '3 × 8 = 24 L.',
      '32 L': '3 × 8 = 24 L.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 45
  },
  {
    id: 'cl3_ch11_t1_qm14',
    type: 'mcq',
    question: 'If you have 2.5 L of juice and pour it equally into 5 glasses, how much does each glass get?',
    options: ['250 mL', '400 mL', '500 mL', '600 mL'],
    correctAnswer: '500 mL',
    explanation: '2.5 L = 2500 mL; 2500 ÷ 5 = 500 mL.',
    wrongAnswerExplanations: {
      '250 mL': '2500 ÷ 5 = 500 mL.',
      '400 mL': '2500 ÷ 5 = 500 mL.',
      '600 mL': '2500 ÷ 5 = 500 mL.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 45
  },
  {
    id: 'cl3_ch11_t1_qm15',
    type: 'mcq',
    question: 'Which is the best estimate for the capacity of a large cooking pot?',
    options: ['1 L', '5 L', '10 L', '20 L'],
    correctAnswer: '5 L',
    explanation: 'A large cooking pot usually holds about 5 L.',
    wrongAnswerExplanations: {
      '1 L': '1 L is too little for a large pot.',
      '10 L': '10 L is more than most large pots.',
      '20 L': '20 L is much more than most pots.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 45
  },
  {
    id: 'cl3_ch11_t1_qm16',
    type: 'mcq',
    question: 'A bottle contains 2 L of water. If you pour out 650 mL, how much is left?',
    options: ['1.25 L', '1.35 L', '1.45 L', '1.55 L'],
    correctAnswer: '1.35 L',
    explanation: '2 L = 2000 mL; 2000 - 650 = 1350 mL = 1.35 L.',
    wrongAnswerExplanations: {
      '1.25 L': '2000 - 650 = 1350 mL = 1.35 L.',
      '1.45 L': '2000 - 650 = 1350 mL = 1.35 L.',
      '1.55 L': '2000 - 650 = 1350 mL = 1.35 L.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 45
  },
  {
    id: 'cl3_ch11_t1_qm17',
    type: 'mcq',
    question: 'If you mix 1.2 L of juice and 800 mL of water, what is the total?',
    options: ['1.8 L', '2 L', '2.2 L', '2.5 L'],
    correctAnswer: '2 L',
    explanation: '1.2 L = 1200 mL; 1200 + 800 = 2000 mL = 2 L.',
    wrongAnswerExplanations: {
      '1.8 L': '1200 + 800 = 2000 mL = 2 L.',
      '2.2 L': '1200 + 800 = 2000 mL = 2 L.',
      '2.5 L': '1200 + 800 = 2000 mL = 2 L.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 45
  },
  {
    id: 'cl3_ch11_t1_qm18',
    type: 'mcq',
    question: 'A measuring cup shows 350 mL. How many such cups make 2.1 L?',
    options: ['4', '5', '6', '7'],
    correctAnswer: '6',
    explanation: '2.1 L = 2100 mL; 2100 ÷ 350 = 6 cups.',
    wrongAnswerExplanations: {
      '4': '4 × 350 = 1400 mL.',
      '5': '5 × 350 = 1750 mL.',
      '7': '7 × 350 = 2450 mL.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 45
  },
  {
    id: 'cl3_ch11_t1_qm19',
    type: 'mcq',
    question: 'Which is the correct way to write 0.75 L in millilitres?',
    options: ['75 mL', '750 mL', '7500 mL', '7.5 mL'],
    correctAnswer: '750 mL',
    explanation: '0.75 L = 750 mL.',
    wrongAnswerExplanations: {
      '75 mL': '0.75 L = 750 mL.',
      '7500 mL': '0.75 L = 750 mL.',
      '7.5 mL': '0.75 L = 750 mL.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 45
  },
  {
    id: 'cl3_ch11_t1_qm20',
    type: 'mcq',
    question: 'A shopkeeper pours 2.4 L of oil into bottles of 300 mL each. How many bottles can he fill?',
    options: ['6', '7', '8', '9'],
    correctAnswer: '8',
    explanation: '2.4 L = 2400 mL; 2400 ÷ 300 = 8 bottles.',
    wrongAnswerExplanations: {
      '6': '6 × 300 = 1800 mL.',
      '7': '7 × 300 = 2100 mL.',
      '9': '9 × 300 = 2700 mL.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 45
  }
];
