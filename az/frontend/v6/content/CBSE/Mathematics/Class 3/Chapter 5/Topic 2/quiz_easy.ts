import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
  {
    id: 'cl3_ch5_t2_qe1',
    type: 'mcq',
    question: 'What comes next in the pattern: 🔴🟡🔴🟡🔴 ?',
    options: ['🔴', '🟡', '🟢', '🔵'],
    correctAnswer: '🟡',
    explanation: 'The pattern alternates red and yellow.',
    wrongAnswerExplanations: {
      '🔴': 'Red comes before yellow in the pattern.',
      '🟢': 'Green is not in the pattern.',
      '🔵': 'Blue is not in the pattern.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl3_ch5_t2_qe2',
    type: 'mcq',
    question: 'Which number comes next: 2, 4, 6, 8, __?',
    options: ['9', '10', '12', '8'],
    correctAnswer: '10',
    explanation: 'The pattern adds 2 each time.',
    wrongAnswerExplanations: {
      '9': 'The pattern skips odd numbers.',
      '12': '12 comes after 10 in this pattern.',
      '8': '8 is already in the pattern.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl3_ch5_t2_qe3',
    type: 'mcq',
    question: 'What shape comes next: ◼️, ◻️, ◼️, ◻️, __?',
    options: ['◼️', '◻️', '🔺', '🔵'],
    correctAnswer: '◼️',
    explanation: 'The pattern alternates black and white squares.',
    wrongAnswerExplanations: {
      '◻️': 'White square comes after black square.',
      '🔺': 'Triangle is not in the pattern.',
      '🔵': 'Blue circle is not in the pattern.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  // ...17 more questions following the same structure...
];
