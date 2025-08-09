import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
  {
    id: 'cl10_ch8_t1_qe1',
    type: 'mcq',
    question: 'In a right triangle, the ratio of the side opposite to an angle to the hypotenuse is called:',
    options: [
      'sine of the angle',
      'cosine of the angle',
      'tangent of the angle',
      'cotangent of the angle'
    ],
    correctAnswer: 'sine of the angle',
    explanation: 'Sine of an angle = Opposite side / Hypotenuse',
    wrongAnswerExplanations: {
      'cosine of the angle': 'Cosine of an angle = Adjacent side / Hypotenuse',
      'tangent of the angle': 'Tangent of an angle = Opposite side / Adjacent side',
      'cotangent of the angle': 'Cotangent of an angle = Adjacent side / Opposite side'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl10_ch8_t1_qe2',
    type: 'mcq',
    question: 'In a right triangle, if sin θ = 0.5, then the value of cos θ is:',
    options: [
      '√3/2',
      '0.5',
      '1',
      '2'
    ],
    correctAnswer: '√3/2',
    explanation: 'Using sin²θ + cos²θ = 1, cos θ = √(1 - sin²θ) = √(1 - 0.25) = √3/2',
    wrongAnswerExplanations: {
      '0.5': 'This would make sin²θ + cos²θ = 0.5, which is incorrect.',
      '1': 'This would make sin²θ + cos²θ = 1.25, which is incorrect.',
      '2': 'This would make sin²θ + cos²θ = 4.25, which is incorrect.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 45
  },
  {
    id: 'cl10_ch8_t1_qe3',
    type: 'mcq',
    question: 'The value of sin 30° is:',
    options: [
      '1/2',
      '√3/2',
      '√2/2',
      '1'
    ],
    correctAnswer: '1/2',
    explanation: 'sin 30° = 1/2 is a standard trigonometric value.',
    wrongAnswerExplanations: {
      '√3/2': 'This is the value of cos 30°, not sin 30°.',
      '√2/2': 'This is the value of sin 45°, not sin 30°.',
      '1': 'sin θ can never exceed 1 for any angle θ.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl10_ch8_t1_qe4',
    type: 'mcq',
    question: 'If tan θ = 1, then the value of θ is:',
    options: [
      '45°',
      '30°',
      '60°',
      '90°'
    ],
    correctAnswer: '45°',
    explanation: 'tan 45° = 1 is a standard trigonometric value.',
    wrongAnswerExplanations: {
      '30°': 'tan 30° = 1/√3, not 1.',
      '60°': 'tan 60° = √3, not 1.',
      '90°': 'tan 90° is undefined, not 1.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl10_ch8_t1_qe5',
    type: 'mcq',
    question: 'The value of cosec θ is equal to:',
    options: [
      '1/sin θ',
      '1/cos θ',
      '1/tan θ',
      '1/cot θ'
    ],
    correctAnswer: '1/sin θ',
    explanation: 'By definition, cosec θ = 1/sin θ',
    wrongAnswerExplanations: {
      '1/cos θ': 'This is the definition of sec θ, not cosec θ.',
      '1/tan θ': 'This is the definition of cot θ, not cosec θ.',
      '1/cot θ': 'This equals tan θ, not cosec θ.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl10_ch8_t1_qe6',
    type: 'mcq',
    question: 'In a right triangle, which side is the hypotenuse?',
    options: [
      'The side opposite to the right angle',
      'The side opposite to the smallest angle',
      'The side adjacent to the right angle',
      'The shortest side'
    ],
    correctAnswer: 'The side opposite to the right angle',
    explanation: 'The hypotenuse is always the side opposite to the right angle in a right triangle.',
    wrongAnswerExplanations: {
      'The side opposite to the smallest angle': 'This is not the definition of the hypotenuse.',
      'The side adjacent to the right angle': 'There are two sides adjacent to the right angle.',
      'The shortest side': 'The hypotenuse is actually the longest side in a right triangle.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl10_ch8_t1_qe7',
    type: 'mcq',
    question: 'The value of sin 90° is:',
    options: [
      '1',
      '0',
      '√3/2',
      'undefined'
    ],
    correctAnswer: '1',
    explanation: 'sin 90° = 1 is a standard trigonometric value.',
    wrongAnswerExplanations: {
      '0': 'This is the value of sin 0°, not sin 90°.',
      '√3/2': 'This is the value of sin 60°, not sin 90°.',
      'undefined': 'sin 90° is defined and equals 1.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl10_ch8_t1_qe8',
    type: 'mcq',
    question: 'If sin θ = 3/5, what is the value of cos θ?',
    options: [
      '4/5',
      '3/4',
      '5/3',
      '5/4'
    ],
    correctAnswer: '4/5',
    explanation: 'Using sin²θ + cos²θ = 1, cos θ = √(1 - sin²θ) = √(1 - 9/25) = 4/5',
    wrongAnswerExplanations: {
      '3/4': 'This is an incorrect calculation.',
      '5/3': 'This would make cos θ > 1, which is impossible.',
      '5/4': 'This would make cos θ > 1, which is impossible.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 45
  },
  {
    id: 'cl10_ch8_t1_qe9',
    type: 'mcq',
    question: 'Which of the following is equal to tan θ?',
    options: [
      'sin θ / cos θ',
      'cos θ / sin θ',
      'sin θ × cos θ',
      '1 / sin θ'
    ],
    correctAnswer: 'sin θ / cos θ',
    explanation: 'By definition, tan θ = sin θ / cos θ = Opposite / Adjacent',
    wrongAnswerExplanations: {
      'cos θ / sin θ': 'This is the definition of cot θ, not tan θ.',
      'sin θ × cos θ': 'This equals ½sin(2θ), not tan θ.',
      '1 / sin θ': 'This is the definition of cosec θ, not tan θ.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl10_ch8_t1_qe10',
    type: 'mcq',
    question: 'In which quadrant is sin θ negative and cos θ negative?',
    options: [
      'Third quadrant',
      'First quadrant',
      'Second quadrant',
      'Fourth quadrant'
    ],
    correctAnswer: 'Third quadrant',
    explanation: 'In the third quadrant (180° to 270°), both sin θ and cos θ are negative.',
    wrongAnswerExplanations: {
      'First quadrant': 'In the first quadrant, both sin θ and cos θ are positive.',
      'Second quadrant': 'In the second quadrant, sin θ is positive and cos θ is negative.',
      'Fourth quadrant': 'In the fourth quadrant, sin θ is negative and cos θ is positive.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 45
  },
  {
    id: 'cl10_ch8_t1_qe11',
    type: 'mcq',
    question: 'The value of cos 60° is:',
    options: [
      '1/2',
      '√3/2',
      '√2/2',
      '0'
    ],
    correctAnswer: '1/2',
    explanation: 'cos 60° = 1/2 is a standard trigonometric value.',
    wrongAnswerExplanations: {
      '√3/2': 'This is the value of sin 60°, not cos 60°.',
      '√2/2': 'This is the value of cos 45°, not cos 60°.',
      '0': 'This is the value of cos 90°, not cos 60°.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl10_ch8_t1_qe12',
    type: 'mcq',
    question: 'If sin θ = cos θ, then the value of θ is:',
    options: [
      '45°',
      '30°',
      '60°',
      '90°'
    ],
    correctAnswer: '45°',
    explanation: 'When sin θ = cos θ, tan θ = 1, which occurs at θ = 45°',
    wrongAnswerExplanations: {
      '30°': 'At 30°, sin θ = 1/2 and cos θ = √3/2, so they\'re not equal.',
      '60°': 'At 60°, sin θ = √3/2 and cos θ = 1/2, so they\'re not equal.',
      '90°': 'At 90°, sin θ = 1 and cos θ = 0, so they\'re not equal.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 45
  },
  {
    id: 'cl10_ch8_t1_qe13',
    type: 'mcq',
    question: 'The value of sin² θ + cos² θ for any angle θ is:',
    options: [
      '1',
      '0',
      'sin θ',
      'cos θ'
    ],
    correctAnswer: '1',
    explanation: 'sin² θ + cos² θ = 1 is a fundamental trigonometric identity.',
    wrongAnswerExplanations: {
      '0': 'This is incorrect. The sum is always 1.',
      'sin θ': 'The sum is a constant, not dependent on the value of sin θ.',
      'cos θ': 'The sum is a constant, not dependent on the value of cos θ.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl10_ch8_t1_qe14',
    type: 'mcq',
    question: 'Which trigonometric ratio is undefined at θ = 90°?',
    options: [
      'tan θ',
      'sin θ',
      'cos θ',
      'cosec θ'
    ],
    correctAnswer: 'tan θ',
    explanation: 'At θ = 90°, cos θ = 0, so tan θ = sin θ/cos θ is undefined.',
    wrongAnswerExplanations: {
      'sin θ': 'sin 90° = 1, which is defined.',
      'cos θ': 'cos 90° = 0, which is defined.',
      'cosec θ': 'cosec 90° = 1, which is defined.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 45
  },
  {
    id: 'cl10_ch8_t1_qe15',
    type: 'mcq',
    question: 'In a right-angled triangle, if one acute angle is 30°, what is the other acute angle?',
    options: [
      '60°',
      '45°',
      '90°',
      '30°'
    ],
    correctAnswer: '60°',
    explanation: 'In a triangle, angles sum to 180°. In a right triangle with one angle 90°, the other two sum to 90°.',
    wrongAnswerExplanations: {
      '45°': 'This would make the sum of angles 30° + 45° + 90° = 165°, not 180°.',
      '90°': 'A triangle cannot have two right angles.',
      '30°': 'This would make the sum of angles 30° + 30° + 90° = 150°, not 180°.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 45
  },
  {
    id: 'cl10_ch8_t1_qe16',
    type: 'mcq',
    question: 'The value of tan 45° × cot 45° is:',
    options: [
      '1',
      '0',
      '2',
      '1/2'
    ],
    correctAnswer: '1',
    explanation: 'Since cot θ = 1/tan θ, tan 45° × cot 45° = tan 45° × (1/tan 45°) = 1',
    wrongAnswerExplanations: {
      '0': 'This is incorrect because any number multiplied by its reciprocal is 1.',
      '2': 'This is incorrect because any number multiplied by its reciprocal is 1.',
      '1/2': 'This is incorrect because any number multiplied by its reciprocal is 1.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 45
  },
  {
    id: 'cl10_ch8_t1_qe17',
    type: 'mcq',
    question: 'If cos θ = 0.8, what is the value of sin θ?',
    options: [
      '0.6',
      '0.8',
      '0.64',
      '0.36'
    ],
    correctAnswer: '0.6',
    explanation: 'Using sin²θ + cos²θ = 1, sin θ = √(1 - cos²θ) = √(1 - 0.64) = 0.6',
    wrongAnswerExplanations: {
      '0.8': 'This would make sin²θ + cos²θ = 1.28, which is incorrect.',
      '0.64': 'This is the value of cos²θ, not sin θ.',
      '0.36': 'This is the value of sin²θ, not sin θ.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 45
  },
  {
    id: 'cl10_ch8_t1_qe18',
    type: 'mcq',
    question: 'Which of the following is an odd function?',
    options: [
      'sin θ',
      'cos θ',
      'sec θ',
      'cosec² θ'
    ],
    correctAnswer: 'sin θ',
    explanation: 'sin(-θ) = -sin θ, making it an odd function.',
    wrongAnswerExplanations: {
      'cos θ': 'cos(-θ) = cos θ, so it\'s an even function.',
      'sec θ': 'sec(-θ) = sec θ, so it\'s an even function.',
      'cosec² θ': 'cosec²(-θ) = cosec² θ, so it\'s an even function.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 45
  },
  {
    id: 'cl10_ch8_t1_qe19',
    type: 'mcq',
    question: 'If a right triangle has legs of lengths 5 and 12, what is the length of the hypotenuse?',
    options: [
      '13',
      '17',
      '10',
      '√169'
    ],
    correctAnswer: '13',
    explanation: 'Using the Pythagorean theorem: 5² + 12² = c², so c = √(25 + 144) = √169 = 13',
    wrongAnswerExplanations: {
      '17': 'This is 5 + 12, not the correct application of the Pythagorean theorem.',
      '10': 'This is not the correct value from the Pythagorean theorem.',
      '√169': 'This simplifies to 13.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 45
  },
  {
    id: 'cl10_ch8_t1_qe20',
    type: 'mcq',
    question: 'Which trigonometric ratio is always positive in the second quadrant?',
    options: [
      'sin θ',
      'cos θ',
      'tan θ',
      'cot θ'
    ],
    correctAnswer: 'sin θ',
    explanation: 'In the second quadrant (90° to 180°), only sin θ is positive; cos θ, tan θ, and cot θ are negative.',
    wrongAnswerExplanations: {
      'cos θ': 'cos θ is negative in the second quadrant.',
      'tan θ': 'tan θ is negative in the second quadrant.',
      'cot θ': 'cot θ is negative in the second quadrant.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 45
  }
];
