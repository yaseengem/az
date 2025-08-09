import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
  {
    id: 'cl3_ch6_t2_qm1',
    type: 'mcq',
    question: 'If you have ₹50 and buy a book for ₹32, how much money is left?',
    options: ['₹18', '₹22', '₹28', '₹20'],
    correctAnswer: '₹18',
    explanation: '₹50 - ₹32 = ₹18.',
    wrongAnswerExplanations: {
      '₹22': '₹50 - ₹32 is ₹18.',
      '₹28': '₹50 - ₹32 is ₹18.',
      '₹20': '₹50 - ₹32 is ₹18.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 45
  },
  {
    id: 'cl3_ch6_t2_qm2',
    type: 'mcq',
    question: 'Convert 250 paise to rupees.',
    options: ['₹2.50', '₹25', '₹0.25', '₹2'],
    correctAnswer: '₹2.50',
    explanation: '250 ÷ 100 = ₹2.50.',
    wrongAnswerExplanations: {
      '₹25': '₹25 is 2500 paise.',
      '₹0.25': '₹0.25 is 25 paise.',
      '₹2': '₹2 is 200 paise.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 45
  },
  {
    id: 'cl3_ch6_t2_qm3',
    type: 'mcq',
    question: 'If a pen costs ₹7 and a notebook costs ₹13, what is the total cost?',
    options: ['₹20', '₹21', '₹19', '₹18'],
    correctAnswer: '₹20',
    explanation: '₹7 + ₹13 = ₹20.',
    wrongAnswerExplanations: {
      '₹21': '₹7 + ₹13 is ₹20.',
      '₹19': '₹7 + ₹13 is ₹20.',
      '₹18': '₹7 + ₹13 is ₹20.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 45
  },
  {
    id: 'cl3_ch6_t2_qm4',
    type: 'mcq',
    question: 'If you have ₹100 and buy 2 toys for ₹35 each, how much is left?',
    options: ['₹30', '₹25', '₹20', '₹15'],
    correctAnswer: '₹30',
    explanation: '₹35 × 2 = ₹70; ₹100 - ₹70 = ₹30.',
    wrongAnswerExplanations: {
      '₹25': '₹100 - ₹70 is ₹30.',
      '₹20': '₹100 - ₹70 is ₹30.',
      '₹15': '₹100 - ₹70 is ₹30.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 45
  },
  // ...16 more questions following the same structure...
];
