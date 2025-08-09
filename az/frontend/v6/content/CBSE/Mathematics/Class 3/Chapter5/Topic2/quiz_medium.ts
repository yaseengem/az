import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
  {
    id: 'cl3_ch5_t2_qm1',
    type: 'mcq',
    question: 'What comes next in the pattern: 5, 10, 15, 20, __?',
    options: ['22', '23', '25', '30'],
    correctAnswer: '25',
    explanation: 'The pattern adds 5 each time.',
    wrongAnswerExplanations: {
      '22': '22 is not 5 more than 20.',
      '23': '23 is not 5 more than 20.',
      '30': '30 comes after 25 in this pattern.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 45
  },
  {
    id: 'cl3_ch5_t2_qm2',
    type: 'mcq',
    question: 'Fill in the blank: 🟢🟢🔵🟢🟢🔵🟢 __',
    options: ['🟢', '🔵', '🟡', '🔴'],
    correctAnswer: '🟢',
    explanation: 'Pattern is two green, one blue, repeat.',
    wrongAnswerExplanations: {
      '🔵': 'Blue comes after two greens.',
      '🟡': 'Yellow is not in the pattern.',
      '🔴': 'Red is not in the pattern.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 45
  },
  {
    id: 'cl3_ch5_t2_qm3',
    type: 'mcq',
    question: 'Which number comes next: 12, 10, 8, 6, __?',
    options: ['4', '5', '8', '2'],
    correctAnswer: '4',
    explanation: 'The pattern subtracts 2 each time.',
    wrongAnswerExplanations: {
      '5': 'Pattern is even numbers decreasing by 2.',
      '8': '8 is already in the pattern.',
      '2': '2 comes after 4 in this pattern.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 45
  },
  // ...17 more questions following the same structure...
];
