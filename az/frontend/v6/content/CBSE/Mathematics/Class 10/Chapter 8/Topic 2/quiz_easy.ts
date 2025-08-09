import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
  {
    id: 'cl10_ch8_t2_qe1',
    type: 'mcq',
    question: 'Which of these is the value of sin²θ + cos²θ for any angle θ?',
    options: [
      '0',
      '1',
      '2',
      'Depends on the value of θ'
    ],
    correctAnswer: '1',
    explanation: 'sin²θ + cos²θ = 1 is a fundamental trigonometric identity that holds true for any angle θ.',
    wrongAnswerExplanations: {
      '0': 'This is incorrect. The sum of sin²θ and cos²θ always equals 1.',
      '2': 'This is incorrect. The sum equals 1, not 2.',
      'Depends on the value of θ': 'This is incorrect. The identity sin²θ + cos²θ = 1 holds for all values of θ.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl10_ch8_t2_qe2',
    type: 'mcq',
    question: 'If sin θ = 3/5, then cos θ equals:',
    options: [
      '4/5',
      '5/3',
      '3/4',
      '2/5'
    ],
    correctAnswer: '4/5',
    explanation: 'Using sin²θ + cos²θ = 1, we get cos²θ = 1 - (3/5)² = 1 - 9/25 = 16/25, so cos θ = 4/5.',
    wrongAnswerExplanations: {
      '5/3': 'This is 1/sin θ, not cos θ.',
      '3/4': 'This is an incorrect calculation.',
      '2/5': 'This is an incorrect calculation.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 45
  },
  {
    id: 'cl10_ch8_t2_qe3',
    type: 'mcq',
    question: 'What is the value of cos²45° - sin²45°?',
    options: [
      '0',
      '1',
      '-1',
      '1/2'
    ],
    correctAnswer: '0',
    explanation: 'At 45°, sin 45° = cos 45° = 1/√2. So cos²45° - sin²45° = (1/2) - (1/2) = 0.',
    wrongAnswerExplanations: {
      '1': 'This is the value of sin²θ + cos²θ, not cos²θ - sin²θ.',
      '-1': 'This would be true if sin²θ > cos²θ, which isn`t the case at 45°.',
      '1/2': 'This is the value of either sin²45° or cos²45° individually, not their difference.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl10_ch8_t2_qe4',
    type: 'mcq',
    question: 'The identity 1 + tan²θ equals:',
    options: [
      'sec²θ',
      'csc²θ',
      'sin²θ',
      'cos²θ'
    ],
    correctAnswer: 'sec²θ',
    explanation: '1 + tan²θ = 1 + (sin θ/cos θ)² = (cos²θ + sin²θ)/cos²θ = 1/cos²θ = sec²θ',
    wrongAnswerExplanations: {
      'csc²θ': 'csc²θ equals 1 + cot²θ, not 1 + tan²θ.',
      'sin²θ': 'sin²θ equals 1 - cos²θ, not 1 + tan²θ.',
      'cos²θ': 'cos²θ equals 1 - sin²θ, not 1 + tan²θ.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl10_ch8_t2_qe5',
    type: 'mcq',
    question: 'If cos θ = 12/13, then sin θ equals:',
    options: [
      '5/13',
      '12/5',
      '4/5',
      '5/12'
    ],
    correctAnswer: '5/13',
    explanation: 'Using sin²θ + cos²θ = 1: sin²θ = 1 - (12/13)² = 1 - 144/169 = 25/169, so sin θ = 5/13.',
    wrongAnswerExplanations: {
      '12/5': 'This is an incorrect calculation.',
      '4/5': 'This is an incorrect calculation.',
      '5/12': 'This is an incorrect calculation.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 45
  },
  {
    id: 'cl10_ch8_t2_qe6',
    type: 'mcq',
    question: 'Which of the following is NOT a trigonometric identity?',
    options: [
      'sin²θ + cos²θ = 1',
      'tan θ = sin θ × cos θ',
      'sec θ = 1/cos θ',
      'cosec θ = 1/sin θ'
    ],
    correctAnswer: 'tan θ = sin θ × cos θ',
    explanation: 'tan θ = sin θ/cos θ, not sin θ × cos θ. The correct identity is tan θ = sin θ/cos θ.',
    wrongAnswerExplanations: {
      'sin²θ + cos²θ = 1': 'This is a correct trigonometric identity.',
      'sec θ = 1/cos θ': 'This is a correct trigonometric identity.',
      'cosec θ = 1/sin θ': 'This is a correct trigonometric identity.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl10_ch8_t2_qe7',
    type: 'mcq',
    question: 'The value of sin 90° - sin 30° is:',
    options: [
      '0.5',
      '1',
      '0',
      '0.75'
    ],
    correctAnswer: '0.5',
    explanation: 'sin 90° = 1 and sin 30° = 0.5, so sin 90° - sin 30° = 1 - 0.5 = 0.5',
    wrongAnswerExplanations: {
      '1': 'This is the value of sin 90°, not sin 90° - sin 30°.',
      '0': 'This is incorrect. sin 90° - sin 30° = 1 - 0.5 = 0.5.',
      '0.75': 'This is an incorrect calculation.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl10_ch8_t2_qe8',
    type: 'mcq',
    question: 'If cos A = 4/5, then tan A equals:',
    options: [
      '3/4',
      '4/3',
      '5/4',
      '4/5'
    ],
    correctAnswer: '3/4',
    explanation: 'If cos A = 4/5, then sin A = 3/5 (using sin²A + cos²A = 1). So tan A = sin A/cos A = (3/5)/(4/5) = 3/4.',
    wrongAnswerExplanations: {
      '4/3': 'This is cot A, not tan A.',
      '5/4': 'This is sec A, not tan A.',
      '4/5': 'This is cos A, not tan A.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 45
  },
  {
    id: 'cl10_ch8_t2_qe9',
    type: 'mcq',
    question: 'cos²θ - sin²θ can be written as:',
    options: [
      'cos 2θ',
      'sin 2θ',
      '2 cos²θ - 1',
      '1 - 2 sin²θ'
    ],
    correctAnswer: 'cos 2θ',
    explanation: 'cos 2θ = cos²θ - sin²θ is a standard double angle identity.',
    wrongAnswerExplanations: {
      'sin 2θ': 'sin 2θ = 2 sin θ cos θ, not cos²θ - sin²θ.',
      '2 cos²θ - 1': 'This is another form of cos 2θ, but not directly cos²θ - sin²θ.',
      '1 - 2 sin²θ': 'This is another form of cos 2θ, but not directly cos²θ - sin²θ.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl10_ch8_t2_qe10',
    type: 'mcq',
    question: 'Which identity is true for all values of θ?',
    options: [
      'sin(-θ) = sin θ',
      'cos(-θ) = cos θ',
      'tan(-θ) = tan θ',
      'cot(-θ) = cot θ'
    ],
    correctAnswer: 'cos(-θ) = cos θ',
    explanation: 'cos(-θ) = cos θ is true for all θ. Cosine is an even function.',
    wrongAnswerExplanations: {
      'sin(-θ) = sin θ': 'Incorrect. sin(-θ) = -sin θ. Sine is an odd function.',
      'tan(-θ) = tan θ': 'Incorrect. tan(-θ) = -tan θ. Tangent is an odd function.',
      'cot(-θ) = cot θ': 'Incorrect. cot(-θ) = -cot θ. Cotangent is an odd function.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl10_ch8_t2_qe11',
    type: 'mcq',
    question: '2 sin θ cos θ is equal to:',
    options: [
      'sin 2θ',
      'cos 2θ',
      'tan θ',
      'sin θ/cos θ'
    ],
    correctAnswer: 'sin 2θ',
    explanation: 'sin 2θ = 2 sin θ cos θ is a standard double angle identity.',
    wrongAnswerExplanations: {
      'cos 2θ': 'cos 2θ = cos²θ - sin²θ, not 2 sin θ cos θ.',
      'tan θ': 'tan θ = sin θ/cos θ, not 2 sin θ cos θ.',
      'sin θ/cos θ': 'This equals tan θ, not 2 sin θ cos θ.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl10_ch8_t2_qe12',
    type: 'mcq',
    question: 'If tan θ = 1, then sin θ × cos θ equals:',
    options: [
      '1/2',
      '1',
      '1/√2',
      '1/4'
    ],
    correctAnswer: '1/2',
    explanation: 'If tan θ = 1, then sin θ = cos θ = 1/√2. So sin θ × cos θ = (1/√2)² = 1/2.',
    wrongAnswerExplanations: {
      '1': 'This would be sin θ + cos θ, not sin θ × cos θ.',
      '1/√2': 'This is the value of sin θ or cos θ individually when tan θ = 1.',
      '1/4': 'This is an incorrect calculation.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 45
  },
  {
    id: 'cl10_ch8_t2_qe13',
    type: 'mcq',
    question: 'The value of sin²30° + sin²45° + sin²60° is:',
    options: [
      '3/2',
      '3/4',
      '1',
      '2'
    ],
    correctAnswer: '3/2',
    explanation: 'sin²30° + sin²45° + sin²60° = (1/4) + (1/2) + (3/4) = 3/2',
    wrongAnswerExplanations: {
      '3/4': 'This is only sin²60°, not the sum of all three.',
      '1': 'This would be sin²θ + cos²θ, but we have three different angles here.',
      '2': 'This is an incorrect calculation.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 45
  },
  {
    id: 'cl10_ch8_t2_qe14',
    type: 'mcq',
    question: '1 - 2 sin²θ equals:',
    options: [
      'cos 2θ',
      'sin 2θ',
      'tan 2θ',
      '2 cos²θ'
    ],
    correctAnswer: 'cos 2θ',
    explanation: 'cos 2θ = cos²θ - sin²θ = (1 - sin²θ) - sin²θ = 1 - 2sin²θ',
    wrongAnswerExplanations: {
      'sin 2θ': 'sin 2θ = 2 sin θ cos θ, not 1 - 2 sin²θ.',
      'tan 2θ': 'tan 2θ = sin 2θ/cos 2θ, not 1 - 2 sin²θ.',
      '2 cos²θ': 'This equals 1 + cos 2θ, not 1 - 2 sin²θ.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl10_ch8_t2_qe15',
    type: 'mcq',
    question: 'If sin θ = 3/5 and cos θ = 4/5, what is the value of sin(θ + 90°)?',
    options: [
      '4/5',
      '3/5',
      '-3/5',
      '-4/5'
    ],
    correctAnswer: '4/5',
    explanation: 'sin(θ + 90°) = cos θ = 4/5',
    wrongAnswerExplanations: {
      '3/5': 'This is sin θ, not sin(θ + 90°).',
      '-3/5': 'This is -sin θ, not sin(θ + 90°).',
      '-4/5': 'This is -cos θ, which equals sin(θ - 90°), not sin(θ + 90°).'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 45
  },
  {
    id: 'cl10_ch8_t2_qe16',
    type: 'mcq',
    question: 'If cot θ = 4/3, what is the value of sec θ?',
    options: [
      '5/3',
      '5/4',
      '4/5',
      '3/5'
    ],
    correctAnswer: '5/3',
    explanation: 'If cot θ = 4/3, then cos θ = 4/5 and sec θ = 5/4. So sec θ = 5/3.',
    wrongAnswerExplanations: {
      '5/4': 'This is an incorrect calculation.',
      '4/5': 'This is cos θ, not sec θ.',
      '3/5': 'This is an incorrect calculation.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch8_t2_qe17',
    type: 'mcq',
    question: 'The value of sec²θ - tan²θ is:',
    options: [
      '1',
      '2',
      '0',
      'Depends on θ'
    ],
    correctAnswer: '1',
    explanation: 'sec²θ - tan²θ = (1/cos²θ) - (sin²θ/cos²θ) = (1-sin²θ)/cos²θ = cos²θ/cos²θ = 1',
    wrongAnswerExplanations: {
      '2': 'This is an incorrect calculation.',
      '0': 'This is an incorrect calculation.',
      'Depends on θ': 'This identity equals 1 for all values of θ where sec θ is defined.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 45
  },
  {
    id: 'cl10_ch8_t2_qe18',
    type: 'mcq',
    question: 'What is cos(-θ) equal to?',
    options: [
      'cos θ',
      '-cos θ',
      'sin θ',
      '-sin θ'
    ],
    correctAnswer: 'cos θ',
    explanation: 'cos(-θ) = cos θ. Cosine is an even function.',
    wrongAnswerExplanations: {
      '-cos θ': 'This would be true if cosine were an odd function, but it is even.',
      'sin θ': 'cos(-θ) does not equal sin θ.',
      '-sin θ': 'cos(-θ) does not equal -sin θ.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl10_ch8_t2_qe19',
    type: 'mcq',
    question: 'The identity sin(90° - θ) equals:',
    options: [
      'cos θ',
      'sin θ',
      '1 - sin θ',
      'cot θ'
    ],
    correctAnswer: 'cos θ',
    explanation: 'sin(90° - θ) = cos θ is a standard complementary angle identity.',
    wrongAnswerExplanations: {
      'sin θ': 'sin(90° - θ) equals cos θ, not sin θ.',
      '1 - sin θ': 'This is not equal to sin(90° - θ).',
      'cot θ': 'sin(90° - θ) equals cos θ, not cot θ.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl10_ch8_t2_qe20',
    type: 'mcq',
    question: 'If sin A = 1/2 and sin B = 1/3, what is the value of sin(A + B)?',
    options: [
      '1/2 + 1/3',
      '(1/2)(1/3)',
      'sin A cos B + cos A sin B',
      '5/6'
    ],
    correctAnswer: 'sin A cos B + cos A sin B',
    explanation: 'sin(A + B) = sin A cos B + cos A sin B. This is the expansion formula for sin(A + B).',
    wrongAnswerExplanations: {
      '1/2 + 1/3': 'sin(A + B) ≠ sin A + sin B',
      '(1/2)(1/3)': 'sin(A + B) ≠ sin A × sin B',
      '5/6': 'This is the value of sin A + sin B, not sin(A + B).'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 45
  }
];
