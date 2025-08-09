import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
  {
    id: 'cl10_ch8_t1_qm1',
    type: 'mcq',
    question: 'If sin θ = 3/5 and θ is in the first quadrant, what is the value of cos θ?',
    options: [
      '4/5',
      '3/4',
      '5/4',
      '5/3'
    ],
    correctAnswer: '4/5',
    explanation: 'Using sin²θ + cos²θ = 1, cos θ = √(1 - 9/25) = 4/5. Since θ is in first quadrant, cos θ is positive.',
    wrongAnswerExplanations: {
      '3/4': 'This is an incorrect calculation.',
      '5/4': 'This would make cos θ > 1, which is impossible.',
      '5/3': 'This would make cos θ > 1, which is impossible.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch8_t1_qm2',
    type: 'mcq',
    question: 'If sin θ + cos θ = 1, what is the value of sin θ cos θ?',
    options: [
      '0',
      '1',
      '1/2',
      '1/4'
    ],
    correctAnswer: '0',
    explanation: 'Squaring sin θ + cos θ = 1 gives sin²θ + cos²θ + 2sin θ cos θ = 1. Since sin²θ + cos²θ = 1, we get 2sin θ cos θ = 0.',
    wrongAnswerExplanations: {
      '1': 'This is not the correct value for sin θ cos θ when sin θ + cos θ = 1.',
      '1/2': 'This is not the correct value for sin θ cos θ when sin θ + cos θ = 1.',
      '1/4': 'This is not the correct value for sin θ cos θ when sin θ + cos θ = 1.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch8_t1_qm3',
    type: 'mcq',
    question: 'If cos A = 4/5, what is the value of sin A?',
    options: [
      '3/5',
      '5/4',
      '5/3',
      '4/3'
    ],
    correctAnswer: '3/5',
    explanation: 'Using sin²A + cos²A = 1, sin A = √(1 - cos²A) = √(1 - 16/25) = 3/5',
    wrongAnswerExplanations: {
      '5/4': 'This would make sin A > 1, which is impossible.',
      '5/3': 'This would make sin A > 1, which is impossible.',
      '4/3': 'This would make sin A > 1, which is impossible.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch8_t1_qm4',
    type: 'mcq',
    question: 'In a right-angled triangle, if tan θ = 1/√3, what is the value of sin θ?',
    options: [
      '1/2',
      '√3/2',
      '1/√2',
      '√2/3'
    ],
    correctAnswer: '1/2',
    explanation: 'If tan θ = 1/√3, then sin θ/cos θ = 1/√3. Using sin²θ + cos²θ = 1 and solving gives sin θ = 1/2.',
    wrongAnswerExplanations: {
      '√3/2': 'This is the value of cos θ when tan θ = 1/√3, not sin θ.',
      '1/√2': 'This is the value of sin 45°, not when tan θ = 1/√3.',
      '√2/3': 'This is an incorrect calculation.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch8_t1_qm5',
    type: 'mcq',
    question: 'If sin θ = p and cos θ = q, then the value of sin(90° - θ) is:',
    options: [
      'q',
      'p',
      'p/q',
      'q/p'
    ],
    correctAnswer: 'q',
    explanation: 'sin(90° - θ) = cos θ = q',
    wrongAnswerExplanations: {
      'p': 'This is sin θ, not sin(90° - θ).',
      'p/q': 'This is tan θ, not sin(90° - θ).',
      'q/p': 'This is cot θ, not sin(90° - θ).'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch8_t1_qm6',
    type: 'mcq',
    question: 'What is the value of sin 60° cos 30° + cos 60° sin 30°?',
    options: [
      '1',
      '√3/2',
      '1/2',
      '0'
    ],
    correctAnswer: '1',
    explanation: 'Using the formula sin(A+B) = sinA cosB + cosA sinB, this equals sin(60°+30°) = sin 90° = 1',
    wrongAnswerExplanations: {
      '√3/2': 'This is the value of sin 60°, not the given expression.',
      '1/2': 'This is the value of sin 30°, not the given expression.',
      '0': 'This is the value of sin 0°, not the given expression.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch8_t1_qm7',
    type: 'mcq',
    question: 'If tan θ = 4/3, what is the value of sin θ?',
    options: [
      '4/5',
      '3/5',
      '3/4',
      '5/4'
    ],
    correctAnswer: '4/5',
    explanation: 'If tan θ = 4/3, then sin θ/cos θ = 4/3. Using sin²θ + cos²θ = 1 and solving gives sin θ = 4/5.',
    wrongAnswerExplanations: {
      '3/5': 'This is the value of cos θ when tan θ = 4/3, not sin θ.',
      '3/4': 'This is an incorrect calculation.',
      '5/4': 'This would make sin θ > 1, which is impossible.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch8_t1_qm8',
    type: 'mcq',
    question: 'In a right triangle, if one leg is 8 and the hypotenuse is 17, the sine of the angle opposite to this leg is:',
    options: [
      '8/17',
      '15/17',
      '8/15',
      '√225/17'
    ],
    correctAnswer: '8/17',
    explanation: 'sin θ = Opposite side / Hypotenuse = 8/17',
    wrongAnswerExplanations: {
      '15/17': 'This is the value of cos θ, not sin θ.',
      '8/15': 'This is the value of tan θ, not sin θ.',
      '√225/17': 'This simplifies to 15/17, which is cos θ, not sin θ.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch8_t1_qm9',
    type: 'mcq',
    question: 'If sin θ + cosec θ = 2, what is the value of θ?',
    options: [
      'π/2',
      'π/4',
      'π/6',
      'π/3'
    ],
    correctAnswer: 'π/2',
    explanation: 'When sin θ + 1/sin θ = 2, sin θ = 1, which occurs at θ = π/2 (90°).',
    wrongAnswerExplanations: {
      'π/4': 'At π/4, sin θ + cosec θ ≈ 1.91, not 2.',
      'π/6': 'At π/6, sin θ + cosec θ ≈ 2.5, not 2.',
      'π/3': 'At π/3, sin θ + cosec θ ≈ 2.15, not 2.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch8_t1_qm10',
    type: 'mcq',
    question: 'The value of (sin²45° + cos²30° + tan²60°) is:',
    options: [
      '3',
      '2',
      '1',
      '4'
    ],
    correctAnswer: '3',
    explanation: 'sin²45° = (1/√2)² = 1/2, cos²30° = (√3/2)² = 3/4, tan²60° = (√3)² = 3. Sum = 1/2 + 3/4 + 3 = 4/4 + 3/4 + 12/4 = 19/4 = 3.',
    wrongAnswerExplanations: {
      '2': 'This is an incorrect calculation.',
      '1': 'This is the value of sin²θ + cos²θ for any θ, but the given expression is different.',
      '4': 'This is an incorrect calculation.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch8_t1_qm11',
    type: 'mcq',
    question: 'If sin(θ + φ) = 1 and sin(θ - φ) = 1/2, what is the value of tan θ × tan φ?',
    options: [
      '1/3',
      '3',
      '2/3',
      '3/2'
    ],
    correctAnswer: '1/3',
    explanation: 'Using formulas sin(A+B) = sinAcosB + cosAsinB and sin(A-B) = sinAcosB - cosAsinB, solving gives tan θ × tan φ = 1/3.',
    wrongAnswerExplanations: {
      '3': 'This is the reciprocal of the correct answer.',
      '2/3': 'This is an incorrect calculation.',
      '3/2': 'This is an incorrect calculation.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch8_t1_qm12',
    type: 'mcq',
    question: 'If θ is in the second quadrant and sin θ = 3/5, what is the value of cos θ?',
    options: [
      '-4/5',
      '4/5',
      '-3/5',
      '3/5'
    ],
    correctAnswer: '-4/5',
    explanation: 'When sin θ = 3/5, cos²θ = 1 - 9/25 = 16/25, so cos θ = ±4/5. Since θ is in second quadrant, cos θ is negative.',
    wrongAnswerExplanations: {
      '4/5': 'This would be correct if θ were in the first quadrant.',
      '-3/5': 'This is an incorrect calculation.',
      '3/5': 'This would make sin²θ + cos²θ = 18/25, not 1.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch8_t1_qm13',
    type: 'mcq',
    question: 'The value of cos²θ - sin²θ is equal to:',
    options: [
      'cos 2θ',
      'sin 2θ',
      'tan 2θ',
      '1'
    ],
    correctAnswer: 'cos 2θ',
    explanation: 'This is a standard identity: cos²θ - sin²θ = cos 2θ',
    wrongAnswerExplanations: {
      'sin 2θ': 'The formula for sin 2θ is 2sin θ cos θ, not cos²θ - sin²θ.',
      'tan 2θ': 'The formula for tan 2θ is 2tan θ/(1-tan²θ), not cos²θ - sin²θ.',
      '1': 'cos²θ - sin²θ varies with θ and equals 1 only when θ = 0°.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch8_t1_qm14',
    type: 'mcq',
    question: 'If cos θ = -1/2 and sin θ < 0, in which quadrant does θ lie?',
    options: [
      'Third quadrant',
      'First quadrant',
      'Second quadrant',
      'Fourth quadrant'
    ],
    correctAnswer: 'Third quadrant',
    explanation: 'When cos θ = -1/2, θ could be in second or third quadrant. Since sin θ < 0, θ must be in third quadrant.',
    wrongAnswerExplanations: {
      'First quadrant': 'In first quadrant, both sin θ and cos θ are positive.',
      'Second quadrant': 'In second quadrant, sin θ is positive and cos θ is negative.',
      'Fourth quadrant': 'In fourth quadrant, sin θ is negative and cos θ is positive.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch8_t1_qm15',
    type: 'mcq',
    question: 'If sin θ = a and cos θ = b, what is the value of sin(θ + 90°)?',
    options: [
      'b',
      '-b',
      'a',
      '-a'
    ],
    correctAnswer: 'b',
    explanation: 'sin(θ + 90°) = sin θ cos 90° + cos θ sin 90° = sin θ × 0 + cos θ × 1 = cos θ = b',
    wrongAnswerExplanations: {
      '-b': 'This is the value of sin(θ - 90°), not sin(θ + 90°).',
      'a': 'This is sin θ, not sin(θ + 90°).',
      '-a': 'This is the value of sin(180° - θ), not sin(θ + 90°).'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch8_t1_qm16',
    type: 'mcq',
    question: 'If sin(α + β) = 1 and sin(α - β) = 0, what is the value of sin α and sin β?',
    options: [
      'sin α = 1/√2, sin β = 1/√2',
      'sin α = 1, sin β = 0',
      'sin α = 0, sin β = 1',
      'sin α = 1/2, sin β = 1/2'
    ],
    correctAnswer: 'sin α = 1/√2, sin β = 1/√2',
    explanation: 'When sin(α-β) = 0, α-β = 0° or 180°. Since sin(α+β) = 1, α+β = 90°. Solving gives α = β = 45°, so sin α = sin β = 1/√2.',
    wrongAnswerExplanations: {
      'sin α = 1, sin β = 0': 'This doesn\'t satisfy both equations.',
      'sin α = 0, sin β = 1': 'This doesn\'t satisfy both equations.',
      'sin α = 1/2, sin β = 1/2': 'This doesn\'t satisfy both equations.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch8_t1_qm17',
    type: 'mcq',
    question: 'If cos θ + sin θ = √2, what is the value of cos θ - sin θ?',
    options: [
      '0',
      '1',
      '√2',
      '-√2'
    ],
    correctAnswer: '0',
    explanation: 'Squaring cos θ + sin θ = √2 gives cos²θ + 2sin θ cos θ + sin²θ = 2. Since cos²θ + sin²θ = 1, 2sin θ cos θ = 1, so sin 2θ = 1.',
    wrongAnswerExplanations: {
      '1': 'This is an incorrect calculation.',
      '√2': 'This would make (cos θ + sin θ)² + (cos θ - sin θ)² = 4, which is incorrect.',
      '-√2': 'This would make (cos θ + sin θ)² + (cos θ - sin θ)² = 4, which is incorrect.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch8_t1_qm18',
    type: 'mcq',
    question: 'The value of sin 75° can be expressed as:',
    options: [
      'sin 45° cos 30° + cos 45° sin 30°',
      'sin 45° sin 30° - cos 45° cos 30°',
      'sin 45° cos 30° - cos 45° sin 30°',
      'sin 45° sin 30° + cos 45° cos 30°'
    ],
    correctAnswer: 'sin 45° cos 30° + cos 45° sin 30°',
    explanation: 'Using the formula sin(A+B) = sinA cosB + cosA sinB, sin 75° = sin(45°+30°) = sin 45° cos 30° + cos 45° sin 30°.',
    wrongAnswerExplanations: {
      'sin 45° sin 30° - cos 45° cos 30°': 'This is -cos(45°+30°) = -cos 75°, not sin 75°.',
      'sin 45° cos 30° - cos 45° sin 30°': 'This is sin(45°-30°) = sin 15°, not sin 75°.',
      'sin 45° sin 30° + cos 45° cos 30°': 'This is cos(45°-30°) = cos 15°, not sin 75°.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch8_t1_qm19',
    type: 'mcq',
    question: 'If sin θ + cos θ = a and sin θ - cos θ = b, what is the value of a² - b²?',
    options: [
      '4 sin θ cos θ',
      '2(sin²θ + cos²θ)',
      '2 sin²θ',
      '2 cos²θ'
    ],
    correctAnswer: '4 sin θ cos θ',
    explanation: 'a² - b² = (sin θ + cos θ)² - (sin θ - cos θ)² = 4 sin θ cos θ',
    wrongAnswerExplanations: {
      '2(sin²θ + cos²θ)': 'This equals 2, not a² - b².',
      '2 sin²θ': 'This is not equal to a² - b².',
      '2 cos²θ': 'This is not equal to a² - b².'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch8_t1_qm20',
    type: 'mcq',
    question: 'If sin θ = 3/5 and cos φ = 12/13, what is the value of sin(θ + φ) assuming both angles are in the first quadrant?',
    options: [
      '63/65',
      '56/65',
      '33/65',
      '16/65'
    ],
    correctAnswer: '63/65',
    explanation: 'When sin θ = 3/5, cos θ = 4/5. When cos φ = 12/13, sin φ = 5/13. Using sin(A+B) = sinA cosB + cosA sinB gives 63/65.',
    wrongAnswerExplanations: {
      '56/65': 'This is an incorrect calculation.',
      '33/65': 'This is an incorrect calculation.',
      '16/65': 'This is an incorrect calculation.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  }
];
