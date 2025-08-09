import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
  {
    id: 'cl3_ch8_t1_qe1',
    type: 'mcq',
    question: 'Which tool is commonly used to compare the weights of two objects?',
    options: ['Ruler', 'Balance scale', 'Thermometer', 'Clock'],
    correctAnswer: 'Balance scale',
    explanation: 'A balance scale helps compare weights by showing which side is heavier.',
    wrongAnswerExplanations: {
      'Ruler': 'A ruler measures length, not weight.',
      'Thermometer': 'A thermometer measures temperature.',
      'Clock': 'A clock tells time, not weight.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl3_ch8_t1_qe2',
    type: 'mcq',
    question: 'If a watermelon weighs 3 kg and a mango weighs 300 g, which is heavier?',
    options: ['Watermelon', 'Mango', 'Both are equal', 'Cannot say'],
    correctAnswer: 'Watermelon',
    explanation: '3 kg is much heavier than 300 g.',
    wrongAnswerExplanations: {
      'Mango': 'A mango is lighter than a watermelon.',
      'Both are equal': '3 kg is more than 300 g.',
      'Cannot say': 'We can compare the weights given.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl3_ch8_t1_qe3',
    type: 'mcq',
    question: 'Which is lighter: a brick 🧱 or a feather 🪶?',
    options: ['Brick', 'Feather', 'Both are equal', 'Cannot say'],
    correctAnswer: 'Feather',
    explanation: 'A feather is much lighter than a brick.',
    wrongAnswerExplanations: {
      'Brick': 'A brick is much heavier than a feather.',
      'Both are equal': 'A brick and a feather do not weigh the same.',
      'Cannot say': 'We know a feather is lighter.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl3_ch8_t1_qe4',
    type: 'mcq',
    question: 'How many grams are there in 1 kilogram?',
    options: ['10', '100', '1000', '10000'],
    correctAnswer: '1000',
    explanation: '1 kilogram = 1000 grams.',
    wrongAnswerExplanations: {
      '10': '1 kg = 1000 grams, not 10.',
      '100': '1 kg = 1000 grams, not 100.',
      '10000': '1 kg = 1000 grams, not 10000.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl3_ch8_t1_qe5',
    type: 'mcq',
    question: 'Which of these objects is likely to weigh less than 1 kg?',
    options: ['School bag', 'Watermelon', 'Pencil', 'Rice sack'],
    correctAnswer: 'Pencil',
    explanation: 'A pencil is very light and weighs much less than 1 kg.',
    wrongAnswerExplanations: {
      'School bag': 'A school bag usually weighs more than 1 kg.',
      'Watermelon': 'A watermelon is heavier than 1 kg.',
      'Rice sack': 'A rice sack is much heavier than 1 kg.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  // ...15 more questions following the same structure, covering comparing weights, heavier/lighter, units (g, kg), balance scale, and real-life examples...
];
