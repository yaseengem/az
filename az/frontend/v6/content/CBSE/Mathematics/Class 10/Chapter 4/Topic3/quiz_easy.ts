import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
  {
    id: 'cl10_ch4_t3_qe1',
    type: 'mcq',
    question: 'For the quadratic equation ax² + bx + c = 0, the discriminant is represented by:',
    options: ['b² + 4ac', 'b² - 4ac', '√b² - 4ac', '2a'],
    correctAnswer: 'b² - 4ac',
    explanation: 'The discriminant of ax² + bx + c = 0 is b² - 4ac, which determines the nature of roots.',
    wrongAnswerExplanations: {
      'b² + 4ac': 'This is incorrect. The discriminant formula subtracts 4ac from b².',
      '√b² - 4ac': 'This represents part of the quadratic formula, not the discriminant itself.',
      '2a': 'This is the denominator in the quadratic formula, not the discriminant.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch4_t3_qe2',
    type: 'mcq',
    question: 'If the discriminant of a quadratic equation is positive, then the roots are:',
    options: ['Real and equal', 'Real and distinct', 'Complex conjugates', 'Zero'],
    correctAnswer: 'Real and distinct',
    explanation: 'When discriminant b² - 4ac > 0, the quadratic equation has two real and distinct roots.',
    wrongAnswerExplanations: {
      'Real and equal': 'Real and equal roots occur when the discriminant equals zero.',
      'Complex conjugates': 'Complex conjugate roots occur when the discriminant is negative.',
      'Zero': 'This does not describe the nature of roots; it is a value roots can take.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch4_t3_qe3',
    type: 'mcq',
    question: 'If the discriminant of a quadratic equation is zero, then the roots are:',
    options: ['Real and distinct', 'Real and equal', 'Imaginary', 'One real and one imaginary'],
    correctAnswer: 'Real and equal',
    explanation: 'When discriminant b² - 4ac = 0, the quadratic equation has two real and equal roots (coincident roots).',
    wrongAnswerExplanations: {
      'Real and distinct': 'Real and distinct roots occur when the discriminant is positive.',
      'Imaginary': 'Purely imaginary roots occur when a=0 and the discriminant is negative.',
      'One real and one imaginary': 'This is not possible; complex roots always come in conjugate pairs.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch4_t3_qe4',
    type: 'mcq',
    question: 'If the discriminant of a quadratic equation is negative, then the roots are:',
    options: ['Real and equal', 'Real and distinct', 'Complex conjugates', 'Rational numbers'],
    correctAnswer: 'Complex conjugates',
    explanation: 'When discriminant b² - 4ac < 0, the quadratic equation has complex conjugate roots.',
    wrongAnswerExplanations: {
      'Real and equal': 'Real and equal roots occur when the discriminant equals zero.',
      'Real and distinct': 'Real and distinct roots occur when the discriminant is positive.',
      'Rational numbers': 'Roots may be rational or irrational based on the coefficients, not the discriminant sign.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch4_t3_qe5',
    type: 'mcq',
    question: 'For the equation x² - 5x + 6 = 0, the discriminant is:',
    options: ['1', '25', '49', '1'],
    correctAnswer: '1',
    explanation: 'For x² - 5x + 6 = 0, a=1, b=-5, c=6. Discriminant = b² - 4ac = 25 - 24 = 1.',
    wrongAnswerExplanations: {
      '25': 'This is only b², but we need to subtract 4ac.',
      '49': 'This is incorrect. The discriminant equals b² - 4ac = 25 - 24 = 1.',
      '1': 'This is a duplicate option and should not appear.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch4_t3_qe6',
    type: 'mcq',
    question: 'The equation 2x² - 3x + 5 = 0 has:',
    options: ['Real and equal roots', 'Real and distinct roots', 'Complex roots', 'No solution'],
    correctAnswer: 'Complex roots',
    explanation: 'Discriminant = (-3)² - 4(2)(5) = 9 - 40 = -31 < 0, so the roots are complex.',
    wrongAnswerExplanations: {
      'Real and equal roots': 'For real and equal roots, the discriminant must be 0.',
      'Real and distinct roots': 'For real and distinct roots, the discriminant must be positive.',
      'No solution': 'Quadratic equations always have solutions, though they may be complex.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch4_t3_qe7',
    type: 'mcq',
    question: 'Which of these quadratic equations has equal roots?',
    options: ['x² - 5x + 6 = 0', 'x² - 4x + 4 = 0', 'x² + x + 1 = 0', 'x² - 9 = 0'],
    correctAnswer: 'x² - 4x + 4 = 0',
    explanation: 'For x² - 4x + 4 = 0, discriminant = (-4)² - 4(1)(4) = 16 - 16 = 0, giving equal roots.',
    wrongAnswerExplanations: {
      'x² - 5x + 6 = 0': 'Discriminant = 25 - 24 = 1 > 0, so roots are real and distinct.',
      'x² + x + 1 = 0': 'Discriminant = 1 - 4 = -3 < 0, so roots are complex.',
      'x² - 9 = 0': 'This equals (x-3)(x+3)=0, so roots are distinct: 3 and -3.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch4_t3_qe8',
    type: 'mcq',
    question: 'If α and β are the roots of x² + px + q = 0, then α + β equals:',
    options: ['p', '-p', 'q', '-q'],
    correctAnswer: '-p',
    explanation: 'For roots α and β of x² + px + q = 0, sum of roots α + β = -p (coefficient of x with sign changed).',
    wrongAnswerExplanations: {
      'p': 'The sum of roots equals the negative of the coefficient of x.',
      'q': 'q is related to the product of roots, not their sum.',
      '-q': 'The product of roots equals q, not -q.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch4_t3_qe9',
    type: 'mcq',
    question: 'If α and β are the roots of x² + px + q = 0, then α × β equals:',
    options: ['p', '-p', 'q', '-q'],
    correctAnswer: 'q',
    explanation: 'For roots α and β of x² + px + q = 0, product of roots α × β = q (constant term).',
    wrongAnswerExplanations: {
      'p': 'p is related to the sum of roots, not their product.',
      '-p': 'The sum of roots equals -p, not the product.',
      '-q': 'The product of roots equals the constant term without changing its sign.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch4_t3_qe10',
    type: 'mcq',
    question: 'If the discriminant of ax² + bx + c = 0 is zero, then the roots are:',
    options: ['x = -b/2a and x = c/a', 'x = -b/a and x = c/a', 'Both x = -b/2a', 'Both x = b/2a'],
    correctAnswer: 'Both x = -b/2a',
    explanation: 'When discriminant = 0, the two roots are equal and given by x = -b/2a.',
    wrongAnswerExplanations: {
      'x = -b/2a and x = c/a': 'When discriminant = 0, both roots are -b/2a.',
      'x = -b/a and x = c/a': 'These values do not correspond to the roots of the equation.',
      'Both x = b/2a': 'The correct formula is -b/2a, not b/2a.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch4_t3_qe11',
    type: 'mcq',
    question: 'For which value of k will the equation x² + kx + 9 = 0 have equal roots?',
    options: ['±6', '±3', '±9', '±18'],
    correctAnswer: '±6',
    explanation: 'For equal roots, discriminant = 0: k² - 4(1)(9) = 0, thus k² = 36, so k = ±6.',
    wrongAnswerExplanations: {
      '±3': 'This gives k² = 9, which makes the discriminant = 9 - 36 = -27, not 0.',
      '±9': 'This gives k² = 81, which makes the discriminant = 81 - 36 = 45, not 0.',
      '±18': 'This gives k² = 324, which makes the discriminant = 324 - 36 = 288, not 0.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch4_t3_qe12',
    type: 'mcq',
    question: 'The quadratic equation x² + 2x + k = 0 will have real and equal roots if:',
    options: ['k = 0', 'k = 1', 'k = -1', 'k = 2'],
    correctAnswer: 'k = 1',
    explanation: 'For equal roots, discriminant = 0: (2)² - 4(1)(k) = 0, thus 4 - 4k = 0, so k = 1.',
    wrongAnswerExplanations: {
      'k = 0': 'This gives discriminant = 4 > 0, resulting in real and distinct roots.',
      'k = -1': 'This gives discriminant = 4 + 4 = 8 > 0, resulting in real and distinct roots.',
      'k = 2': 'This gives discriminant = 4 - 8 = -4 < 0, resulting in complex roots.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch4_t3_qe13',
    type: 'mcq',
    question: 'For the quadratic equation 3x² - 2x + k = 0, what is the value of k for which one root is twice the other?',
    options: ['1/3', '2/3', '1/6', '1/12'],
    correctAnswer: '1/3',
    explanation: 'If α, β are roots with α = 2β, then α·β = k/3 and α+β = 2/3. This gives β² + 2β/3 - k/3 = 0, which requires k = 1/3.',
    wrongAnswerExplanations: {
      '2/3': 'This value does not satisfy the condition that one root is twice the other.',
      '1/6': 'This value does not satisfy the condition that one root is twice the other.',
      '1/12': 'This value does not satisfy the condition that one root is twice the other.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch4_t3_qe14',
    type: 'mcq',
    question: 'If the sum of the roots of the quadratic equation ax² + bx + c = 0 is zero, then:',
    options: ['a = 0', 'b = 0', 'c = 0', 'a = c'],
    correctAnswer: 'b = 0',
    explanation: 'Sum of roots = -b/a. If sum = 0, then -b/a = 0, which means b = 0.',
    wrongAnswerExplanations: {
      'a = 0': 'If a = 0, the equation becomes linear, not quadratic.',
      'c = 0': 'c = 0 means product of roots = 0, not sum = 0.',
      'a = c': 'This condition does not ensure sum of roots = 0.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch4_t3_qe15',
    type: 'mcq',
    question: 'If the product of the roots of the quadratic equation ax² + bx + c = 0 is negative, then:',
    options: ['a and c have the same sign', 'a and c have opposite signs', 'b and c have the same sign', 'a = -c'],
    correctAnswer: 'a and c have opposite signs',
    explanation: 'Product of roots = c/a. If product is negative, then c/a < 0, meaning a and c have opposite signs.',
    wrongAnswerExplanations: {
      'a and c have the same sign': 'If a and c have the same sign, their product c/a would be positive.',
      'b and c have the same sign': 'The signs of b and c do not determine the sign of the product of roots.',
      'a = -c': 'This is too restrictive and not necessary for the product to be negative.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch4_t3_qe16',
    type: 'mcq',
    question: 'For what value of k will the quadratic equation kx² + 6x + 1 = 0 have equal roots?',
    options: ['9', '6', '36', '1/9'],
    correctAnswer: '9',
    explanation: 'For equal roots, discriminant = 0: (6)² - 4(k)(1) = 0, thus 36 = 4k, so k = 9.',
    wrongAnswerExplanations: {
      '6': 'This gives discriminant = 36 - 24 = 12 > 0, resulting in real and distinct roots.',
      '36': 'This gives discriminant = 36 - 144 = -108 < 0, resulting in complex roots.',
      '1/9': 'This gives discriminant = 36 - 4/9 > 0, resulting in real and distinct roots.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch4_t3_qe17',
    type: 'mcq',
    question: 'The quadratic equation x² - 6x + 9 = 0 has:',
    options: ['No real roots', 'Two distinct real roots', 'One real root', 'Two equal real roots'],
    correctAnswer: 'Two equal real roots',
    explanation: 'This equation equals (x-3)² = 0, so x = 3 is repeated twice, giving two equal real roots.',
    wrongAnswerExplanations: {
      'No real roots': 'The equation has real roots, not complex ones.',
      'Two distinct real roots': 'The roots are equal (x = 3), not distinct.',
      'One real root': 'Technically, there are two roots, but they have the same value.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch4_t3_qe18',
    type: 'mcq',
    question: 'If one root of the quadratic equation x² + kx + 16 = 0 is 4, what is the value of k?',
    options: ['-8', '4', '-4', '8'],
    correctAnswer: '-8',
    explanation: 'If x = 4 is a root, then 4² + 4k + 16 = 0, thus 16 + 4k + 16 = 0, giving 4k = -32, so k = -8.',
    wrongAnswerExplanations: {
      '4': 'Substituting k = 4 and x = 4 gives 16 + 16 + 16 = 48, not 0.',
      '-4': 'Substituting k = -4 and x = 4 gives 16 - 16 + 16 = 16, not 0.',
      '8': 'Substituting k = 8 and x = 4 gives 16 + 32 + 16 = 64, not 0.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch4_t3_qe19',
    type: 'mcq',
    question: 'For which of these values of k will the equation x² + kx + 4 = 0 have real roots?',
    options: ['k = 3', 'k = -3', 'k = 4', 'k = ±4'],
    correctAnswer: 'k = ±4',
    explanation: 'For real roots, discriminant ≥ 0: k² - 16 ≥ 0, thus k² ≥ 16, so k ≥ 4 or k ≤ -4, i.e., k = ±4 or beyond.',
    wrongAnswerExplanations: {
      'k = 3': 'This gives discriminant = 9 - 16 = -7 < 0, resulting in complex roots.',
      'k = -3': 'This gives discriminant = 9 - 16 = -7 < 0, resulting in complex roots.',
      'k = 4': 'This value alone is incomplete; both k = 4 and k = -4 give real roots.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch4_t3_qe20',
    type: 'mcq',
    question: 'Which of these can be the discriminant of a quadratic equation with rational coefficients and irrational roots?',
    options: ['25', '0', '-4', '-9'],
    correctAnswer: '-9',
    explanation: 'For irrational roots with rational coefficients, the discriminant must be negative but not a perfect square.',
    wrongAnswerExplanations: {
      '25': 'Positive discriminant gives real roots, not irrational ones.',
      '0': 'Zero discriminant gives equal rational roots.',
      '-4': 'This gives roots with √-4 = 2i, which are complex but not irrational.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  }
];
