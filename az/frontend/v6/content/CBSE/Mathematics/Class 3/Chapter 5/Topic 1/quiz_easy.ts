import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
  {
    id: 'cl3_ch5_t1_qe1',
    type: 'mcq',
    question: 'Which shape has no corners?',
    options: ['Circle', 'Square', 'Rectangle', 'Triangle'],
    correctAnswer: 'Circle',
    explanation: 'A circle has no corners or edges.',
    wrongAnswerExplanations: {
      'Square': 'A square has 4 corners.',
      'Rectangle': 'A rectangle has 4 corners.',
      'Triangle': 'A triangle has 3 corners.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl3_ch5_t1_qe2',
    type: 'mcq',
    question: 'How many sides does a triangle have?',
    options: ['2', '3', '4', '5'],
    correctAnswer: '3',
    explanation: 'A triangle has 3 sides and 3 corners.',
    wrongAnswerExplanations: {
      '2': 'A triangle has more than 2 sides.',
      '4': 'A triangle has less than 4 sides.',
      '5': 'A triangle has less than 5 sides.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl3_ch5_t1_qe3',
    type: 'mcq',
    question: 'Which shape has all sides equal and 4 corners?',
    options: ['Rectangle', 'Square', 'Triangle', 'Circle'],
    correctAnswer: 'Square',
    explanation: 'A square has 4 equal sides and 4 corners.',
    wrongAnswerExplanations: {
      'Rectangle': 'A rectangle has equal opposite sides, not all sides equal.',
      'Triangle': 'A triangle has 3 sides.',
      'Circle': 'A circle has no sides or corners.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl3_ch5_t1_qe4',
    type: 'mcq',
    question: 'Which shape is like a clock face?',
    options: ['Circle', 'Square', 'Rectangle', 'Triangle'],
    correctAnswer: 'Circle',
    explanation: 'A clock face is round like a circle.',
    wrongAnswerExplanations: {
      'Square': 'A square has straight sides.',
      'Rectangle': 'A rectangle has straight sides.',
      'Triangle': 'A triangle has 3 sides.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl3_ch5_t1_qe5',
    type: 'mcq',
    question: 'How many corners does a rectangle have?',
    options: ['2', '3', '4', '5'],
    correctAnswer: '4',
    explanation: 'A rectangle has 4 corners.',
    wrongAnswerExplanations: {
      '2': 'A rectangle has more than 2 corners.',
      '3': 'A rectangle has more than 3 corners.',
      '5': 'A rectangle has less than 5 corners.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl3_ch5_t1_qe6',
    type: 'mcq',
    question: 'Which shape is like a pizza slice?',
    options: ['Triangle', 'Circle', 'Square', 'Rectangle'],
    correctAnswer: 'Triangle',
    explanation: 'A pizza slice is shaped like a triangle.',
    wrongAnswerExplanations: {
      'Circle': 'A whole pizza is a circle, a slice is a triangle.',
      'Square': 'A square has 4 sides.',
      'Rectangle': 'A rectangle has 4 sides.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl3_ch5_t1_qe7',
    type: 'mcq',
    question: 'Which shape has 4 sides and 4 corners, but not all sides are equal?',
    options: ['Rectangle', 'Square', 'Triangle', 'Circle'],
    correctAnswer: 'Rectangle',
    explanation: 'A rectangle has 4 sides, opposite sides are equal.',
    wrongAnswerExplanations: {
      'Square': 'A square has all sides equal.',
      'Triangle': 'A triangle has 3 sides.',
      'Circle': 'A circle has no sides.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl3_ch5_t1_qe8',
    type: 'mcq',
    question: 'Which shape is like a window pane?',
    options: ['Square', 'Circle', 'Triangle', 'Oval'],
    correctAnswer: 'Square',
    explanation: 'Many window panes are square shaped.',
    wrongAnswerExplanations: {
      'Circle': 'Most window panes are not round.',
      'Triangle': 'Triangle windows are rare.',
      'Oval': 'Oval windows are rare.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl3_ch5_t1_qe9',
    type: 'mcq',
    question: 'How many sides does a square have?',
    options: ['2', '3', '4', '5'],
    correctAnswer: '4',
    explanation: 'A square has 4 equal sides.',
    wrongAnswerExplanations: {
      '2': 'A square has more than 2 sides.',
      '3': 'A square has more than 3 sides.',
      '5': 'A square has less than 5 sides.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl3_ch5_t1_qe10',
    type: 'mcq',
    question: 'Which shape is like a book cover?',
    options: ['Rectangle', 'Circle', 'Triangle', 'Square'],
    correctAnswer: 'Rectangle',
    explanation: 'Most book covers are rectangles.',
    wrongAnswerExplanations: {
      'Circle': 'Book covers are not round.',
      'Triangle': 'Book covers are not triangles.',
      'Square': 'Some books are square, but most are rectangles.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  // ...10 more questions following the same structure...
];
