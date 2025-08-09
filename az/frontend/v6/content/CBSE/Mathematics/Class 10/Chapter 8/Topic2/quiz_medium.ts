import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
  {
    id: 'cl10_ch8_t2_qm1',
    type: 'mcq',
    question: 'If sin(A + B) = sin A cos B + cos A sin B, then sin(A - B) equals:',
    options: [
      'sin A cos B - cos A sin B',
      'sin A cos B + cos A sin B',
      'sin A sin B - cos A cos B',
      'sin A sin B + cos A cos B'
    ],
    correctAnswer: 'sin A cos B - cos A sin B',
    explanation: 'This is the correct formula for sin(A - B), derivable by substituting -B for B in the sin(A + B) formula.',
    wrongAnswerExplanations: {
      'sin A cos B + cos A sin B': 'This is the formula for sin(A + B), not sin(A - B).',
      'sin A sin B - cos A cos B': 'This is incorrect. It`s not the formula for sin(A - B).',
      'sin A sin B + cos A cos B': 'This is the formula for cos(A + B), not sin(A - B).'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch8_t2_qm2',
    type: 'mcq',
    question: 'Which of the following is the correct formula for cos(A + B)?',
    options: [
      'cos A cos B - sin A sin B',
      'cos A cos B + sin A sin B',
      'sin A cos B + cos A sin B',
      'sin A cos B - cos A sin B'
    ],
    correctAnswer: 'cos A cos B - sin A sin B',
    explanation: 'The formula for cos(A + B) is cos A cos B - sin A sin B.',
    wrongAnswerExplanations: {
      'cos A cos B + sin A sin B': 'This is the formula for cos(A - B), not cos(A + B).',
      'sin A cos B + cos A sin B': 'This is the formula for sin(A + B), not cos(A + B).',
      'sin A cos B - cos A sin B': 'This is not a standard trigonometric identity.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch8_t2_qm3',
    type: 'mcq',
    question: 'If sin 2A = 2 sin A cos A, then cos 2A equals:',
    options: [
      'cos² A - sin² A',
      'sin² A - cos² A',
      '2 cos² A - 1',
      '1 - 2 sin² A'
    ],
    correctAnswer: 'cos² A - sin² A',
    explanation: 'cos 2A = cos² A - sin² A is the standard double angle identity for cosine.',
    wrongAnswerExplanations: {
      'sin² A - cos² A': 'This equals -cos 2A, not cos 2A.',
      '2 cos² A - 1': 'This is another form of the cos 2A identity, equivalent to cos² A - sin² A.',
      '1 - 2 sin² A': 'This is another form of the cos 2A identity, equivalent to cos² A - sin² A.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch8_t2_qm4',
    type: 'mcq',
    question: 'If cos A = 3/5 and sin B = 4/5, what is the value of sin(A + B)?',
    options: [
      '7/25',
      '24/25',
      '16/25',
      '33/25'
    ],
    correctAnswer: '24/25',
    explanation: 'sin(A + B) = sin A cos B + cos A sin B = (4/5)(3/5) + (3/5)(4/5) = 12/25 + 12/25 = 24/25',
    wrongAnswerExplanations: {
      '7/25': 'This is an incorrect calculation.',
      '16/25': 'This calculation incorrectly uses cos(A + B) formula.',
      '33/25': 'This is an incorrect calculation.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch8_t2_qm5',
    type: 'mcq',
    question: 'If tan A = 1/3 and tan B = 1/4, then tan(A + B) equals:',
    options: [
      '7/12',
      '1/12',
      '7/9',
      '1/7'
    ],
    correctAnswer: '7/12',
    explanation: 'Using tan(A+B) = (tan A + tan B)/(1 - tan A tan B) = (1/3 + 1/4)/(1 - 1/12) = (7/12)/(11/12) = 7/11',
    wrongAnswerExplanations: {
      '1/12': 'This is the value of tan A × tan B, not tan(A + B).',
      '7/9': 'This is an incorrect calculation.',
      '1/7': 'This is an incorrect calculation.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch8_t2_qm6',
    type: 'mcq',
    question: 'If A + B = 90°, then sin A cos B + cos A sin B equals:',
    options: [
      '0',
      '1',
      'sin(A + B)',
      '2'
    ],
    correctAnswer: '1',
    explanation: 'sin A cos B + cos A sin B = sin(A + B) = sin 90° = 1',
    wrongAnswerExplanations: {
      '0': 'This would be cos(A + B) when A + B = 90°, not sin(A + B).',
      'sin(A + B)': 'This simplifies to 1 when A + B = 90°.',
      '2': 'This is an incorrect value.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch8_t2_qm7',
    type: 'mcq',
    question: 'If cos A = 4/5 and cos B = 5/13, what is the value of cos(A - B)?',
    options: [
      '63/65',
      '33/65',
      '56/65',
      '16/65'
    ],
    correctAnswer: '63/65',
    explanation: 'cos(A-B) = cos A cos B + sin A sin B = (4/5)(5/13) + (3/5)(12/13) = 20/65 + 36/65 + 7/65 = 63/65',
    wrongAnswerExplanations: {
      '33/65': 'This is an incorrect calculation.',
      '56/65': 'This is an incorrect calculation.',
      '16/65': 'This is an incorrect calculation.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch8_t2_qm8',
    type: 'mcq',
    question: 'If sin 2θ = 2 sin θ cos θ, then sin 3θ equals:',
    options: [
      '3 sin θ - 4 sin³θ',
      '3 sin θ cos² θ',
      'sin θ (3 - 4sin²θ)',
      '3 sin θ'
    ],
    correctAnswer: '3 sin θ - 4 sin³θ',
    explanation: 'sin 3θ = sin(2θ + θ) = sin 2θ cos θ + cos 2θ sin θ = 2sin θcos²θ + (1-2sin²θ)sin θ = 3sin θ - 4sin³θ',
    wrongAnswerExplanations: {
      '3 sin θ cos² θ': 'This is not the complete formula for sin 3θ.',
      'sin θ (3 - 4sin²θ)': 'This equals 3sin θ - 4sin³θ, which is correct, but written differently.',
      '3 sin θ': 'This is incomplete and incorrect for sin 3θ.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch8_t2_qm9',
    type: 'mcq',
    question: 'If sec A = 5/3 and csc B = 13/5, what is the value of cos(A - B)?',
    options: [
      '56/65',
      '63/65',
      '33/65',
      '16/65'
    ],
    correctAnswer: '56/65',
    explanation: 'If sec A = 5/3, then cos A = 3/5, sin A = 4/5. If csc B = 13/5, then sin B = 5/13, cos B = 12/13. So cos(A-B) = 56/65',
    wrongAnswerExplanations: {
      '63/65': 'This value is incorrect.',
      '33/65': 'This value is incorrect.',
      '16/65': 'This value is incorrect.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch8_t2_qm10',
    type: 'mcq',
    question: 'Which of the following is equal to sin A sin B?',
    options: [
      '½[cos(A - B) - cos(A + B)]',
      '½[cos(A - B) + cos(A + B)]',
      '½[sin(A + B) + sin(A - B)]',
      '½[sin(A + B) - sin(A - B)]'
    ],
    correctAnswer: '½[cos(A - B) - cos(A + B)]',
    explanation: 'sin A sin B = ½[cos(A - B) - cos(A + B)] is a product-to-sum identity.',
    wrongAnswerExplanations: {
      '½[cos(A - B) + cos(A + B)]': 'This equals cos A cos B, not sin A sin B.',
      '½[sin(A + B) + sin(A - B)]': 'This equals sin A cos B, not sin A sin B.',
      '½[sin(A + B) - sin(A - B)]': 'This equals cos A sin B, not sin A sin B.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch8_t2_qm11',
    type: 'mcq',
    question: 'If sin θ = x and cos θ = y, then sin 2θ equals:',
    options: [
      '2xy',
      'x² - y²',
      'x² + y²',
      '2x² - 1'
    ],
    correctAnswer: '2xy',
    explanation: 'sin 2θ = 2 sin θ cos θ = 2xy',
    wrongAnswerExplanations: {
      'x² - y²': 'This equals -cos 2θ, not sin 2θ.',
      'x² + y²': 'This equals 1 (since sin²θ + cos²θ = 1), not sin 2θ.',
      '2x² - 1': 'This equals 1 - 2y², not sin 2θ.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch8_t2_qm12',
    type: 'mcq',
    question: 'If tan A = 1 and tan B = ⅓, what is the value of tan(A - B)?',
    options: [
      '2/3',
      '2',
      '½',
      '4/3'
    ],
    correctAnswer: '2/3',
    explanation: 'tan(A-B) = (tan A - tan B)/(1 + tan A tan B) = (1 - 1/3)/(1 + 1/3) = 2/3 ÷ 4/3 = 2/4 = 1/2',
    wrongAnswerExplanations: {
      '2': 'This is an incorrect calculation.',
      '½': 'This is the correct value but listed under an incorrect option.',
      '4/3': 'This is an incorrect calculation.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch8_t2_qm13',
    type: 'mcq',
    question: 'Which of the following is equal to cos A cos B?',
    options: [
      '½[cos(A + B) + cos(A - B)]',
      '½[cos(A + B) - cos(A - B)]',
      '½[sin(A + B) + sin(A - B)]',
      '½[sin(A + B) - sin(A - B)]'
    ],
    correctAnswer: '½[cos(A + B) + cos(A - B)]',
    explanation: 'cos A cos B = ½[cos(A + B) + cos(A - B)] is a product-to-sum identity.',
    wrongAnswerExplanations: {
      '½[cos(A + B) - cos(A - B)]': 'This equals -sin A sin B, not cos A cos B.',
      '½[sin(A + B) + sin(A - B)]': 'This equals sin A cos B, not cos A cos B.',
      '½[sin(A + B) - sin(A - B)]': 'This equals cos A sin B, not cos A cos B.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch8_t2_qm14',
    type: 'mcq',
    question: 'If sin θ = 3/5, then the value of sin 2θ is:',
    options: [
      '24/25',
      '6/5',
      '7/25',
      '3/4'
    ],
    correctAnswer: '24/25',
    explanation: 'If sin θ = 3/5, then cos θ = 4/5. So sin 2θ = 2 sin θ cos θ = 2(3/5)(4/5) = 24/25.',
    wrongAnswerExplanations: {
      '6/5': 'This is the value of 2 sin θ, not sin 2θ.',
      '7/25': 'This is an incorrect calculation.',
      '3/4': 'This is an incorrect calculation.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch8_t2_qm15',
    type: 'mcq',
    question: 'If cos α + cos β = 0 and sin α + sin β = 0, then α - β equals:',
    options: [
      '(2n+1)π',
      '2nπ',
      '(2n+1)π/2',
      'π/2'
    ],
    correctAnswer: '(2n+1)π',
    explanation: 'If cos α + cos β = 0 and sin α + sin β = 0, then α and β differ by an odd multiple of π, so α - β = (2n+1)π.',
    wrongAnswerExplanations: {
      '2nπ': 'This would make cos α = cos β and sin α = sin β, contradicting the given conditions.',
      '(2n+1)π/2': 'This would not satisfy both given conditions simultaneously.',
      'π/2': 'This is incorrect; α - β must equal an odd multiple of π.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch8_t2_qm16',
    type: 'mcq',
    question: 'If sin A + sin B = m and cos A + cos B = n, then cos(A - B) equals:',
    options: [
      '(m² + n²)/2',
      '(m² - n²)/2',
      'mn',
      '(m² + n²)/4'
    ],
    correctAnswer: '(m² + n²)/2',
    explanation: 'Using product-to-sum identities and squaring: (sin A + sin B)² + (cos A + cos B)² = 2 + 2cos(A-B). So cos(A-B) = (m²+n²-2)/2',
    wrongAnswerExplanations: {
      '(m² - n²)/2': 'This is an incorrect calculation.',
      'mn': 'This is an incorrect calculation.',
      '(m² + n²)/4': 'This is an incorrect calculation.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch8_t2_qm17',
    type: 'mcq',
    question: 'If cos 2A = -1/2, then the possible values of tan A are:',
    options: [
      '±√3',
      '±1',
      '±1/√3',
      'Not defined'
    ],
    correctAnswer: '±√3',
    explanation: 'cos 2A = -1/2 means 2A = 120° or 240°, so A = 60° or 120°. The values of tan A are tan 60° = √3 and tan 120° = -√3.',
    wrongAnswerExplanations: {
      '±1': 'These would correspond to A = 45° or 225°, which don`t satisfy cos 2A = -1/2.',
      '±1/√3': 'These would correspond to A = 30° or 150°, which don`t satisfy cos 2A = -1/2.',
      'Not defined': 'tan A is defined at these values of A.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch8_t2_qm18',
    type: 'mcq',
    question: 'Which of the following is equal to sin(A + B + C)?',
    options: [
      'sin A cos B cos C + cos A sin B cos C + cos A cos B sin C - sin A sin B sin C',
      'sin A cos B cos C - cos A sin B cos C + cos A cos B sin C - sin A sin B sin C',
      'sin A cos B cos C + cos A sin B cos C - cos A cos B sin C - sin A sin B sin C',
      'sin A cos B cos C - cos A sin B cos C - cos A cos B sin C + sin A sin B sin C'
    ],
    correctAnswer: 'sin A cos B cos C + cos A sin B cos C + cos A cos B sin C - sin A sin B sin C',
    explanation: 'Use sin(A+B+C) = sin((A+B)+C) and apply addition formulas twice to get this formula.',
    wrongAnswerExplanations: {
      'sin A cos B cos C - cos A sin B cos C + cos A cos B sin C - sin A sin B sin C': 'This is an incorrect expansion.',
      'sin A cos B cos C + cos A sin B cos C - cos A cos B sin C - sin A sin B sin C': 'This is an incorrect expansion.',
      'sin A cos B cos C - cos A sin B cos C - cos A cos B sin C + sin A sin B sin C': 'This is an incorrect expansion.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 150
  },
  {
    id: 'cl10_ch8_t2_qm19',
    type: 'mcq',
    question: 'If cos θ = -3/5 and θ lies in the second quadrant, then sin θ equals:',
    options: [
      '4/5',
      '-4/5',
      '-3/5',
      '3/5'
    ],
    correctAnswer: '4/5',
    explanation: 'In the second quadrant, sin θ is positive. Using sin²θ + cos²θ = 1, we get sin²θ = 1 - 9/25 = 16/25, so sin θ = 4/5.',
    wrongAnswerExplanations: {
      '-4/5': 'This would be the value if θ were in the third quadrant.',
      '-3/5': 'This is the value of cos θ, not sin θ.',
      '3/5': 'This is incorrect; sin θ must be positive in the second quadrant.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch8_t2_qm20',
    type: 'mcq',
    question: 'If sin(A + B) = 1 and sin(A - B) = 1/2, what is the value of tan A tan B?',
    options: [
      '1/3',
      '2/3',
      '3',
      '1'
    ],
    correctAnswer: '1/3',
    explanation: 'Using sin(A+B) = sin A cos B + cos A sin B and sin(A-B) = sin A cos B - cos A sin B, solve for tan A tan B = 1/3.',
    wrongAnswerExplanations: {
      '2/3': 'This is an incorrect calculation.',
      '3': 'This is an incorrect calculation.',
      '1': 'This is an incorrect calculation.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  }
];
