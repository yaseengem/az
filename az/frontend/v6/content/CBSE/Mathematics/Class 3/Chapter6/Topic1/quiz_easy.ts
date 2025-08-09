import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
  {
    id: 'cl3_ch6_t1_qe1',
    type: 'mcq',
    question: 'Which coin is worth the most?',
    options: ['₹1', '₹2', '₹5', '₹10'],
    correctAnswer: '₹10',
    explanation: '₹10 is the highest value coin among the options.',
    wrongAnswerExplanations: {
      '₹1': '₹1 is less than ₹10.',
      '₹2': '₹2 is less than ₹10.',
      '₹5': '₹5 is less than ₹10.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl3_ch6_t1_qe2',
    type: 'mcq',
    question: 'How many ₹2 coins make ₹10?',
    options: ['2', '3', '4', '5'],
    correctAnswer: '5',
    explanation: '5 × ₹2 = ₹10.',
    wrongAnswerExplanations: {
      '2': '2 × ₹2 = ₹4.',
      '3': '3 × ₹2 = ₹6.',
      '4': '4 × ₹2 = ₹8.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl3_ch6_t1_qe3',
    type: 'mcq',
    question: 'If you have ₹5 and buy a pencil for ₹3, how much is left?',
    options: ['₹1', '₹2', '₹3', '₹4'],
    correctAnswer: '₹2',
    explanation: '₹5 - ₹3 = ₹2.',
    wrongAnswerExplanations: {
      '₹1': '₹5 - ₹3 is ₹2.',
      '₹3': '₹5 - ₹3 is ₹2.',
      '₹4': '₹5 - ₹3 is ₹2.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl3_ch6_t1_qe4',
    type: 'mcq',
    question: 'Which note is the smallest in value?',
    options: ['₹10', '₹20', '₹50', '₹100'],
    correctAnswer: '₹10',
    explanation: '₹10 is the smallest note among the options.',
    wrongAnswerExplanations: {
      '₹20': '₹20 is more than ₹10.',
      '₹50': '₹50 is more than ₹10.',
      '₹100': '₹100 is more than ₹10.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl3_ch6_t1_qe5',
    type: 'mcq',
    question: 'How many 50 paise coins make ₹2?',
    options: ['2', '3', '4', '5'],
    correctAnswer: '4',
    explanation: '4 × 50 paise = ₹2.',
    wrongAnswerExplanations: {
      '2': '2 × 50 paise = ₹1.',
      '3': '3 × 50 paise = ₹1.50.',
      '5': '5 × 50 paise = ₹2.50.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl3_ch6_t1_qe6',
    type: 'mcq',
    question: 'If you have ₹20 and buy a toy for ₹15, how much is left?',
    options: ['₹3', '₹4', '₹5', '₹6'],
    correctAnswer: '₹5',
    explanation: '₹20 - ₹15 = ₹5.',
    wrongAnswerExplanations: {
      '₹3': '₹20 - ₹15 is ₹5.',
      '₹4': '₹20 - ₹15 is ₹5.',
      '₹6': '₹20 - ₹15 is ₹5.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl3_ch6_t1_qe7',
    type: 'mcq',
    question: 'Which is more: ₹50 or ₹45?',
    options: ['₹45', '₹50', 'Both are equal', '₹5'],
    correctAnswer: '₹50',
    explanation: '₹50 is more than ₹45.',
    wrongAnswerExplanations: {
      '₹45': '₹45 is less than ₹50.',
      'Both are equal': '₹50 and ₹45 are not equal.',
      '₹5': '₹5 is much less than ₹50.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl3_ch6_t1_qe8',
    type: 'mcq',
    question: 'How many ₹5 coins do you need to make ₹25?',
    options: ['3', '4', '5', '6'],
    correctAnswer: '5',
    explanation: '5 × ₹5 = ₹25.',
    wrongAnswerExplanations: {
      '3': '3 × ₹5 = ₹15.',
      '4': '4 × ₹5 = ₹20.',
      '6': '6 × ₹5 = ₹30.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl3_ch6_t1_qe9',
    type: 'mcq',
    question: 'If you have ₹100 and buy a bag for ₹85, what change do you get?',
    options: ['₹10', '₹15', '₹20', '₹25'],
    correctAnswer: '₹15',
    explanation: '₹100 - ₹85 = ₹15.',
    wrongAnswerExplanations: {
      '₹10': '₹100 - ₹85 is ₹15.',
      '₹20': '₹100 - ₹85 is ₹15.',
      '₹25': '₹100 - ₹85 is ₹15.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl3_ch6_t1_qe10',
    type: 'mcq',
    question: 'Which is equal to ₹1?',
    options: ['100 paise', '50 paise', '10 paise', '500 paise'],
    correctAnswer: '100 paise',
    explanation: '₹1 = 100 paise.',
    wrongAnswerExplanations: {
      '50 paise': '50 paise is half of ₹1.',
      '10 paise': '10 paise is much less than ₹1.',
      '500 paise': '500 paise = ₹5.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl3_ch6_t1_qe11',
    type: 'mcq',
    question: 'If you have ₹2, ₹5, and ₹10 coins, what is the total?',
    options: ['₹15', '₹16', '₹17', '₹18'],
    correctAnswer: '₹17',
    explanation: '₹2 + ₹5 + ₹10 = ₹17.',
    wrongAnswerExplanations: {
      '₹15': '₹2 + ₹5 + ₹10 is ₹17.',
      '₹16': '₹2 + ₹5 + ₹10 is ₹17.',
      '₹18': '₹2 + ₹5 + ₹10 is ₹17.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl3_ch6_t1_qe12',
    type: 'mcq',
    question: 'How many ₹1 coins make ₹8?',
    options: ['6', '7', '8', '9'],
    correctAnswer: '8',
    explanation: '8 × ₹1 = ₹8.',
    wrongAnswerExplanations: {
      '6': '6 × ₹1 = ₹6.',
      '7': '7 × ₹1 = ₹7.',
      '9': '9 × ₹1 = ₹9.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl3_ch6_t1_qe13',
    type: 'mcq',
    question: 'If you buy a pen for ₹8 and a notebook for ₹12, what is the total cost?',
    options: ['₹18', '₹20', '₹22', '₹24'],
    correctAnswer: '₹20',
    explanation: '₹8 + ₹12 = ₹20.',
    wrongAnswerExplanations: {
      '₹18': '₹8 + ₹12 is ₹20.',
      '₹22': '₹8 + ₹12 is ₹20.',
      '₹24': '₹8 + ₹12 is ₹20.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl3_ch6_t1_qe14',
    type: 'mcq',
    question: 'Convert 200 paise to rupees.',
    options: ['₹1', '₹2', '₹3', '₹4'],
    correctAnswer: '₹2',
    explanation: '200 paise = ₹2.',
    wrongAnswerExplanations: {
      '₹1': '100 paise = ₹1.',
      '₹3': '300 paise = ₹3.',
      '₹4': '400 paise = ₹4.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl3_ch6_t1_qe15',
    type: 'mcq',
    question: 'If you have ₹50 and spend ₹35, how much is left?',
    options: ['₹10', '₹15', '₹20', '₹25'],
    correctAnswer: '₹15',
    explanation: '₹50 - ₹35 = ₹15.',
    wrongAnswerExplanations: {
      '₹10': '₹50 - ₹35 is ₹15.',
      '₹20': '₹50 - ₹35 is ₹15.',
      '₹25': '₹50 - ₹35 is ₹15.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl3_ch6_t1_qe16',
    type: 'mcq',
    question: 'Which is more: ₹0.50 or ₹0.75?',
    options: ['₹0.50', '₹0.75', 'Both are equal', '₹1'],
    correctAnswer: '₹0.75',
    explanation: '₹0.75 is more than ₹0.50.',
    wrongAnswerExplanations: {
      '₹0.50': '₹0.50 is less than ₹0.75.',
      'Both are equal': '₹0.50 and ₹0.75 are not equal.',
      '₹1': '₹1 is more than both.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl3_ch6_t1_qe17',
    type: 'mcq',
    question: 'If you have ₹100 and buy 2 toys for ₹35 each, how much is left?',
    options: ['₹20', '₹25', '₹30', '₹35'],
    correctAnswer: '₹30',
    explanation: '₹35 × 2 = ₹70; ₹100 - ₹70 = ₹30.',
    wrongAnswerExplanations: {
      '₹20': '₹100 - ₹70 is ₹30.',
      '₹25': '₹100 - ₹70 is ₹30.',
      '₹35': '₹100 - ₹70 is ₹30.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl3_ch6_t1_qe18',
    type: 'mcq',
    question: 'Which is equal to ₹2.50?',
    options: ['250 paise', '200 paise', '150 paise', '100 paise'],
    correctAnswer: '250 paise',
    explanation: '250 paise = ₹2.50.',
    wrongAnswerExplanations: {
      '200 paise': '200 paise = ₹2.',
      '150 paise': '150 paise = ₹1.50.',
      '100 paise': '100 paise = ₹1.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl3_ch6_t1_qe19',
    type: 'mcq',
    question: 'If you have ₹12 and your friend gives you ₹8, how much do you have now?',
    options: ['₹18', '₹19', '₹20', '₹21'],
    correctAnswer: '₹20',
    explanation: '₹12 + ₹8 = ₹20.',
    wrongAnswerExplanations: {
      '₹18': '₹12 + ₹8 is ₹20.',
      '₹19': '₹12 + ₹8 is ₹20.',
      '₹21': '₹12 + ₹8 is ₹20.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl3_ch6_t1_qe20',
    type: 'mcq',
    question: 'If you buy a ball for ₹18 and pay with a ₹20 note, what change do you get?',
    options: ['₹1', '₹2', '₹3', '₹4'],
    correctAnswer: '₹2',
    explanation: '₹20 - ₹18 = ₹2.',
    wrongAnswerExplanations: {
      '₹1': '₹20 - ₹18 is ₹2.',
      '₹3': '₹20 - ₹18 is ₹2.',
      '₹4': '₹20 - ₹18 is ₹2.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  }
];
