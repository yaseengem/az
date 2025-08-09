import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
  {
    id: 'cl3_ch6_t2_qe1',
    type: 'mcq',
    question: 'How many paise are there in ₹1?',
    options: ['10', '50', '100', '500'],
    correctAnswer: '100',
    explanation: '₹1 = 100 paise.',
    wrongAnswerExplanations: {
      '10': '₹1 is 100 paise, not 10.',
      '50': '₹1 is 100 paise, not 50.',
      '500': '₹1 is 100 paise, not 500.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl3_ch6_t2_qe2',
    type: 'mcq',
    question: 'If you buy a pencil for ₹5 and an eraser for ₹3, what is the total cost?',
    options: ['₹7', '₹8', '₹9', '₹10'],
    correctAnswer: '₹8',
    explanation: '₹5 + ₹3 = ₹8.',
    wrongAnswerExplanations: {
      '₹7': '₹5 + ₹2 = ₹7, not ₹5 + ₹3.',
      '₹9': '₹5 + ₹4 = ₹9, not ₹5 + ₹3.',
      '₹10': '₹5 + ₹5 = ₹10, not ₹5 + ₹3.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl3_ch6_t2_qe3',
    type: 'mcq',
    question: 'What is the value of 50 paise in rupees?',
    options: ['₹0.50', '₹5', '₹0.05', '₹1'],
    correctAnswer: '₹0.50',
    explanation: '50 paise = ₹0.50.',
    wrongAnswerExplanations: {
      '₹5': '₹5 is 500 paise.',
      '₹0.05': '₹0.05 is 5 paise.',
      '₹1': '₹1 is 100 paise.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  // ...17 more questions following the same structure...
];
