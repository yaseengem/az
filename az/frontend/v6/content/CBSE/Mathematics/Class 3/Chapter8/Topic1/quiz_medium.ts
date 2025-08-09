import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
  {
    id: 'cl3_ch8_t1_qm1',
    type: 'mcq',
    question: 'A bag of sugar weighs 2 kg. If you add a 500 g packet of salt, what is the total weight?',
    options: ['2.5 kg', '2.05 kg', '2.500 g', '2 kg'],
    correctAnswer: '2.5 kg',
    explanation: '2 kg + 500 g = 2.5 kg.',
    wrongAnswerExplanations: {
      '2.05 kg': '500 g is 0.5 kg, not 0.05 kg.',
      '2.500 g': '2.5 kg = 2500 g, not 2.500 g.',
      '2 kg': 'You must add the 500 g to 2 kg.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 45
  },
  {
    id: 'cl3_ch8_t1_qm2',
    type: 'mcq',
    question: 'If a balance scale is level with a 1 kg stone on one side, which of these could be on the other side?',
    options: ['1000 g of rice', '2 kg of sugar', '500 g of salt', '1 g of cotton'],
    correctAnswer: '1000 g of rice',
    explanation: '1 kg = 1000 g, so the weights are equal.',
    wrongAnswerExplanations: {
      '2 kg of sugar': '2 kg is double 1 kg.',
      '500 g of salt': '500 g is half of 1 kg.',
      '1 g of cotton': '1 g is much less than 1 kg.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 45
  },
  {
    id: 'cl3_ch8_t1_qm3',
    type: 'mcq',
    question: 'Which is the best estimate for the weight of a school bag?',
    options: ['5 g', '2 kg', '20 kg', '500 kg'],
    correctAnswer: '2 kg',
    explanation: 'A school bag usually weighs around 2 kg.',
    wrongAnswerExplanations: {
      '5 g': '5 g is too light for a school bag.',
      '20 kg': '20 kg is too heavy for a school bag.',
      '500 kg': '500 kg is extremely heavy.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 45
  },
  {
    id: 'cl3_ch8_t1_qm4',
    type: 'mcq',
    question: 'If a balance scale tilts to the left, what does it mean?',
    options: ['Left side is heavier', 'Right side is heavier', 'Both sides are equal', 'Scale is broken'],
    correctAnswer: 'Left side is heavier',
    explanation: 'The side that goes down is heavier.',
    wrongAnswerExplanations: {
      'Right side is heavier': 'The right side would go down if it was heavier.',
      'Both sides are equal': 'The scale would be level if equal.',
      'Scale is broken': 'A tilt usually means one side is heavier.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 45
  },
  // ...16 more questions following the same structure, covering conversions, real-life scenarios, balance scale logic, and estimation...
];
