import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
  {
    id: 'cl3_ch5_t1_qm1',
    type: 'mcq',
    question: 'Which shape has all sides equal and all angles right angles?',
    options: ['Square', 'Rectangle', 'Triangle', 'Rhombus'],
    correctAnswer: 'Square',
    explanation: 'A square has all sides equal and all angles 90°.',
    wrongAnswerExplanations: {
      'Rectangle': 'Rectangle has equal angles but not all sides equal.',
      'Triangle': 'Triangle has 3 sides.',
      'Rhombus': 'Rhombus has equal sides but not all angles are 90°.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 45
  },
  {
    id: 'cl3_ch5_t1_qm2',
    type: 'mcq',
    question: 'Which shape is like a door?',
    options: ['Rectangle', 'Circle', 'Triangle', 'Square'],
    correctAnswer: 'Rectangle',
    explanation: 'Most doors are rectangles.',
    wrongAnswerExplanations: {
      'Circle': 'Doors are not round.',
      'Triangle': 'Doors are not triangles.',
      'Square': 'Some doors are square, but most are rectangles.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 45
  },
  {
    id: 'cl3_ch5_t1_qm3',
    type: 'mcq',
    question: 'How many corners does a pentagon have?',
    options: ['3', '4', '5', '6'],
    correctAnswer: '5',
    explanation: 'A pentagon has 5 corners (vertices).',
    wrongAnswerExplanations: {
      '3': 'A triangle has 3 corners.',
      '4': 'A square or rectangle has 4 corners.',
      '6': 'A hexagon has 6 corners.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 45
  },
  {
    id: 'cl3_ch5_t1_qm4',
    type: 'mcq',
    question: 'Which shape has only curved lines and no straight sides?',
    options: ['Circle', 'Rectangle', 'Triangle', 'Square'],
    correctAnswer: 'Circle',
    explanation: 'A circle is made of a curved line only.',
    wrongAnswerExplanations: {
      'Rectangle': 'Rectangle has straight sides.',
      'Triangle': 'Triangle has straight sides.',
      'Square': 'Square has straight sides.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 45
  },
  {
    id: 'cl3_ch5_t1_qm5',
    type: 'mcq',
    question: 'Which shape is like a diamond 💎?',
    options: ['Rhombus', 'Square', 'Rectangle', 'Circle'],
    correctAnswer: 'Rhombus',
    explanation: 'A rhombus looks like a diamond.',
    wrongAnswerExplanations: {
      'Square': 'A square has right angles, a rhombus does not.',
      'Rectangle': 'A rectangle has right angles.',
      'Circle': 'A circle is round.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 45
  },
  {
    id: 'cl3_ch5_t1_qm6',
    type: 'mcq',
    question: 'How many sides does a hexagon have?',
    options: ['5', '6', '7', '8'],
    correctAnswer: '6',
    explanation: 'A hexagon has 6 sides.',
    wrongAnswerExplanations: {
      '5': 'A pentagon has 5 sides.',
      '7': 'A heptagon has 7 sides.',
      '8': 'An octagon has 8 sides.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 45
  },
  {
    id: 'cl3_ch5_t1_qm7',
    type: 'mcq',
    question: 'Which shape has 3 sides and 3 corners?',
    options: ['Triangle', 'Square', 'Rectangle', 'Circle'],
    correctAnswer: 'Triangle',
    explanation: 'A triangle has 3 sides and 3 corners.',
    wrongAnswerExplanations: {
      'Square': 'A square has 4 sides.',
      'Rectangle': 'A rectangle has 4 sides.',
      'Circle': 'A circle has no sides.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 45
  },
  {
    id: 'cl3_ch5_t1_qm8',
    type: 'mcq',
    question: 'Which shape is like an egg 🥚?',
    options: ['Oval', 'Circle', 'Square', 'Triangle'],
    correctAnswer: 'Oval',
    explanation: 'An egg is shaped like an oval.',
    wrongAnswerExplanations: {
      'Circle': 'A circle is round, not oval.',
      'Square': 'A square has straight sides.',
      'Triangle': 'A triangle has 3 sides.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 45
  },
  {
    id: 'cl3_ch5_t1_qm9',
    type: 'mcq',
    question: 'Which shape has opposite sides equal and 4 right angles?',
    options: ['Rectangle', 'Square', 'Rhombus', 'Triangle'],
    correctAnswer: 'Rectangle',
    explanation: 'A rectangle has opposite sides equal and 4 right angles.',
    wrongAnswerExplanations: {
      'Square': 'A square has all sides equal.',
      'Rhombus': 'A rhombus does not have all right angles.',
      'Triangle': 'A triangle has 3 sides.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 45
  },
  {
    id: 'cl3_ch5_t1_qm10',
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
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 45
  },
  // ...10 more questions following the same structure...
];
