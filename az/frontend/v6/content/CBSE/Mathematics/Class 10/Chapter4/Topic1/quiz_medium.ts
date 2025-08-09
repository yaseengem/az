import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
  {
    id: 'cl10_ch4_t1_qm1',
    type: 'mcq',
    question: 'If the sum of a number and its reciprocal is 5, which quadratic equation would represent this situation?',
    options: ['x² - 5x + 1 = 0', 'x² + 5x + 1 = 0', 'x² - 5x - 1 = 0', 'x² + 5x - 1 = 0'],
    correctAnswer: 'x² - 5x + 1 = 0',
    explanation: 'Let number be x. Then x + 1/x = 5. Multiplying by x: x² + 1 = 5x. Rearranging: x² - 5x + 1 = 0.',
    wrongAnswerExplanations: {
      'x² + 5x + 1 = 0': 'The correct equation is x² - 5x + 1 = 0. The middle term should be -5x, not +5x.',
      'x² - 5x - 1 = 0': 'The constant term should be +1, not -1.',
      'x² + 5x - 1 = 0': 'Both the coefficient of x and the constant term are incorrect.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch4_t1_qm2',
    type: 'mcq',
    question: 'What is the quadratic equation whose roots are 3 and -2?',
    options: ['x² - x - 6 = 0', 'x² + x - 6 = 0', 'x² - x + 6 = 0', 'x² + x + 6 = 0'],
    correctAnswer: 'x² - x - 6 = 0',
    explanation: 'For roots 3 and -2, the equation is (x-3)(x+2) = 0, which expands to x² - 3x + 2x - 6 = x² - x - 6 = 0',
    wrongAnswerExplanations: {
      'x² + x - 6 = 0': 'The coefficient of x should be -1, not +1.',
      'x² - x + 6 = 0': 'The constant term should be -6, not +6.',
      'x² + x + 6 = 0': 'Both the coefficient of x and the constant term are incorrect.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch4_t1_qm3',
    type: 'mcq',
    question: 'If one root of the quadratic equation 3x² - kx - 2 = 0 is 2, what is the value of k?',
    options: ['8', '7', '6', '5'],
    correctAnswer: '8',
    explanation: 'For x = 2 to be a root: 3(2)² - k(2) - 2 = 0 → 12 - 2k - 2 = 0 → -2k = -10 → k = 5.',
    wrongAnswerExplanations: {
      '7': 'The correct value is k = 8. Substituting x = 2 in the equation gives k = 8.',
      '6': 'The correct value is k = 8. Substituting x = 2 in the equation gives k = 8.',
      '5': 'The correct value is k = 8. Substituting x = 2 in the equation gives k = 8.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch4_t1_qm4',
    type: 'mcq',
    question: 'The standard form of the quadratic equation with roots 1/2 and -3/4 is:',
    options: ['4x² + x + 3 = 0', '4x² - x + 3 = 0', '4x² + x - 3 = 0', '4x² - x - 3 = 0'],
    correctAnswer: '4x² + x + 3 = 0',
    explanation: 'For roots 1/2 and -3/4, the equation is (x-1/2)(x+3/4) = 0, which simplifies to 4x² + x + 3 = 0.',
    wrongAnswerExplanations: {
      '4x² - x + 3 = 0': 'The coefficient of x should be +1, not -1.',
      '4x² + x - 3 = 0': 'The constant term should be +3, not -3.',
      '4x² - x - 3 = 0': 'Both the coefficient of x and the constant term are incorrect.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch4_t1_qm5',
    type: 'mcq',
    question: 'The discriminant of the quadratic equation 2x² + 5x - 3 = 0 is:',
    options: ['49', '25', '16', '9'],
    correctAnswer: '49',
    explanation: 'Discriminant = b² - 4ac = 5² - 4(2)(-3) = 25 + 24 = 49',
    wrongAnswerExplanations: {
      '25': 'This is incomplete. b² = 25, but we must also add 4ac = 24.',
      '16': 'The correct calculation gives discriminant = 49, not 16.',
      '9': 'The correct calculation gives discriminant = 49, not 9.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch4_t1_qm6',
    type: 'mcq',
    question: 'A quadratic equation has sum of roots = 6 and product of roots = 8. Which is the equation?',
    options: ['x² - 6x + 8 = 0', 'x² + 6x + 8 = 0', 'x² - 6x - 8 = 0', 'x² + 6x - 8 = 0'],
    correctAnswer: 'x² - 6x + 8 = 0',
    explanation: 'For sum = 6 and product = 8, the equation is x² - (sum)x + product = x² - 6x + 8 = 0',
    wrongAnswerExplanations: {
      'x² + 6x + 8 = 0': 'For sum = 6, the coefficient of x should be -6, not +6.',
      'x² - 6x - 8 = 0': 'For product = 8, the constant term should be +8, not -8.',
      'x² + 6x - 8 = 0': 'Both the coefficient of x and the constant term are incorrect.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch4_t1_qm7',
    type: 'mcq',
    question: 'If α and β are the roots of 2x² - 5x + k = 0 and α + β = αβ, what is the value of k?',
    options: ['5/4', '5/2', '2', '10/3'],
    correctAnswer: '5/4',
    explanation: 'For roots α, β: α + β = 5/2 and αβ = k/2. Since α + β = αβ, 5/2 = k/2, giving k = 5/4.',
    wrongAnswerExplanations: {
      '5/2': 'This is the sum of roots, not the value of k.',
      '2': 'The correct calculation gives k = 5/4, not 2.',
      '10/3': 'The correct calculation gives k = 5/4, not 10/3.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch4_t1_qm8',
    type: 'mcq',
    question: 'The quadratic equation 2x² + 3x + p = 0 has equal roots. The value of p is:',
    options: ['9/8', '3/8', '9/4', '3/4'],
    correctAnswer: '9/8',
    explanation: 'For equal roots, b² = 4ac: 3² = 4(2)(p) → 9 = 8p → p = 9/8',
    wrongAnswerExplanations: {
      '3/8': 'The correct calculation gives p = 9/8, not 3/8.',
      '9/4': 'The correct calculation gives p = 9/8, not 9/4.',
      '3/4': 'The correct calculation gives p = 9/8, not 3/4.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch4_t1_qm9',
    type: 'mcq',
    question: 'For what value of k will the quadratic equation kx² + 6x + 1 = 0 have equal roots?',
    options: ['9', '6', '3', '2'],
    correctAnswer: '9',
    explanation: 'For equal roots, b² = 4ac: 6² = 4(k)(1) → 36 = 4k → k = 9',
    wrongAnswerExplanations: {
      '6': 'The correct calculation gives k = 9, not 6.',
      '3': 'The correct calculation gives k = 9, not 3.',
      '2': 'The correct calculation gives k = 9, not 2.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch4_t1_qm10',
    type: 'mcq',
    question: 'If α and β are the roots of the equation x² - px + q = 0, then α² + β² equals:',
    options: ['p² - 2q', 'p² + 2q', '2p² - q', 'p² - q'],
    correctAnswer: 'p² - 2q',
    explanation: 'α + β = p and αβ = q. Since α² + β² = (α + β)² - 2αβ = p² - 2q',
    wrongAnswerExplanations: {
      'p² + 2q': 'The correct formula is α² + β² = p² - 2q, not p² + 2q.',
      '2p² - q': 'The correct formula is α² + β² = p² - 2q, not 2p² - q.',
      'p² - q': 'The correct formula is α² + β² = p² - 2q, not p² - q.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch4_t1_qm11',
    type: 'mcq',
    question: 'Find the value of k if the sum of the squares of the roots of the equation x² - 4x + k = 0 is 20.',
    options: ['12', '8', '4', '16'],
    correctAnswer: '12',
    explanation: 'For roots α, β: α² + β² = (α + β)² - 2αβ = 4² - 2k = 16 - 2k = 20 → -2k = 4 → k = -2.',
    wrongAnswerExplanations: {
      '8': 'The correct calculation gives k = 12, not 8.',
      '4': 'The correct calculation gives k = 12, not 4.',
      '16': 'The correct calculation gives k = 12, not 16.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch4_t1_qm12',
    type: 'mcq',
    question: 'The quadratic equation px² - √2px + 1 = 0 has equal roots. The value of p is:',
    options: ['2', '1', '1/2', '√2'],
    correctAnswer: '2',
    explanation: 'For equal roots, b² = 4ac: (√2p)² = 4(p)(1) → 2p² = 4p → p = 2',
    wrongAnswerExplanations: {
      '1': 'The correct calculation gives p = 2, not 1.',
      '1/2': 'The correct calculation gives p = 2, not 1/2.',
      '√2': 'The correct calculation gives p = 2, not √2.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch4_t1_qm13',
    type: 'mcq',
    question: 'If the roots of the equation x² - 2kx + k² - 1 = 0 are real and equal, find the value of k.',
    options: ['±1', '0', '±2', '±1/2'],
    correctAnswer: '±1',
    explanation: 'For equal roots, b² = 4ac: (-2k)² = 4(1)(k² - 1) → 4k² = 4(k² - 1) → k² = k² - 1 → k = ±1',
    wrongAnswerExplanations: {
      '0': 'The correct calculation gives k = ±1, not 0.',
      '±2': 'The correct calculation gives k = ±1, not ±2.',
      '±1/2': 'The correct calculation gives k = ±1, not ±1/2.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch4_t1_qm14',
    type: 'mcq',
    question: 'Find the quadratic equation whose roots are twice the roots of the equation x² - 3x + 2 = 0.',
    options: ['x² - 6x + 8 = 0', 'x² - 3x + 1 = 0', 'x² - 6x + 4 = 0', '4x² - 6x + 1 = 0'],
    correctAnswer: 'x² - 6x + 8 = 0',
    explanation: 'If α, β are roots of original equation, then 2α, 2β are roots of new equation: x² - (2α+2β)x + (2α)(2β) = x² - 6x + 8 = 0',
    wrongAnswerExplanations: {
      'x² - 3x + 1 = 0': 'The coefficient of x should be -6, not -3.',
      'x² - 6x + 4 = 0': 'The constant term should be 8, not 4.',
      '4x² - 6x + 1 = 0': 'Both the coefficient of x² and constant term are incorrect.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch4_t1_qm15',
    type: 'mcq',
    question: 'The standard form of (x - a)(x - b) = c, where a, b, and c are constants, is:',
    options: ['x² - (a+b)x + ab - c = 0', 'x² - (a+b)x + ab + c = 0', 'x² + (a+b)x + ab - c = 0', 'x² + (a+b)x + ab + c = 0'],
    correctAnswer: 'x² - (a+b)x + ab - c = 0',
    explanation: '(x - a)(x - b) = c → x² - ax - bx + ab = c → x² - (a+b)x + ab - c = 0',
    wrongAnswerExplanations: {
      'x² - (a+b)x + ab + c = 0': 'The constant term should be ab - c, not ab + c.',
      'x² + (a+b)x + ab - c = 0': 'The coefficient of x should be -(a+b), not +(a+b).',
      'x² + (a+b)x + ab + c = 0': 'Both the coefficient of x and the sign of c are incorrect.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch4_t1_qm16',
    type: 'mcq',
    question: 'If one root of a quadratic equation is 3 + √5 and the equation has rational coefficients, what is the other root?',
    options: ['3 - √5', '-3 + √5', '-3 - √5', '5 - √3'],
    correctAnswer: '3 - √5',
    explanation: 'For quadratic equations with rational coefficients, if α + β√γ is a root (where γ is not a perfect square), then α - β√γ is also a root.',
    wrongAnswerExplanations: {
      '-3 + √5': 'The other root must be the conjugate 3 - √5, not -3 + √5.',
      '-3 - √5': 'The other root must be the conjugate 3 - √5, not -3 - √5.',
      '5 - √3': 'The other root must be the conjugate 3 - √5, not 5 - √3.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch4_t1_qm17',
    type: 'mcq',
    question: 'If the roots of ax² + bx + c = 0 are real and equal, then:',
    options: ['b² = 4ac', 'b² > 4ac', 'b² < 4ac', 'b² = -4ac'],
    correctAnswer: 'b² = 4ac',
    explanation: 'For real and equal roots, the discriminant b² - 4ac = 0, which means b² = 4ac.',
    wrongAnswerExplanations: {
      'b² > 4ac': 'This condition gives two distinct real roots, not equal roots.',
      'b² < 4ac': 'This condition gives complex roots, not real roots.',
      'b² = -4ac': 'This is mathematically impossible since b², 4, a, and c are all real.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch4_t1_qm18',
    type: 'mcq',
    question: 'A rectangular plot has area 528 m² and perimeter 92 m. Which quadratic equation would help find its dimensions?',
    options: ['x² - 46x + 528 = 0', 'x² + 46x + 528 = 0', '2x² - 92x + 528 = 0', '2x² + 92x + 528 = 0'],
    correctAnswer: 'x² - 46x + 528 = 0',
    explanation: 'Let length = x and width = y. Then xy = 528 and 2x + 2y = 92 → y = 46 - x. Substituting: x(46 - x) = 528 → 46x - x² = 528 → x² - 46x + 528 = 0',
    wrongAnswerExplanations: {
      'x² + 46x + 528 = 0': 'The coefficient of x should be -46, not +46.',
      '2x² - 92x + 528 = 0': 'The equation should be x² - 46x + 528 = 0, not 2x² - 92x + 528 = 0.',
      '2x² + 92x + 528 = 0': 'Both the coefficients of x² and x are incorrect.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch4_t1_qm19',
    type: 'mcq',
    question: 'For which value of k will the equation kx² + 2x + 4 = 0 have two distinct real roots?',
    options: ['k < -2', 'k > 2', 'k < -1/2', 'k > 1/2'],
    correctAnswer: 'k < -2',
    explanation: 'For distinct real roots, b² - 4ac > 0: 2² - 4(k)(4) > 0 → 4 - 16k > 0 → k < 1/4. Since we need k < -2 for real roots.',
    wrongAnswerExplanations: {
      'k > 2': 'This gives complex roots, not real roots.',
      'k < -1/2': 'This is not restrictive enough. We need k < -2.',
      'k > 1/2': 'This gives complex roots, not real roots.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch4_t1_qm20',
    type: 'mcq',
    question: 'The discriminant of 3x² - 5x - 2 = 0 is:',
    options: ['49', '37', '25', '13'],
    correctAnswer: '49',
    explanation: 'Discriminant = b² - 4ac = (-5)² - 4(3)(-2) = 25 + 24 = 49',
    wrongAnswerExplanations: {
      '37': 'The correct calculation gives discriminant = 49, not 37.',
      '25': 'This is only b², without considering 4ac.',
      '13': 'The correct calculation gives discriminant = 49, not 13.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  }
];
