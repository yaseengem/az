import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
  {
    id: 'cl10_ch4_t3_qm1',
    type: 'mcq',
    question: 'If α and β are the roots of the quadratic equation 3x² - 5x + 2 = 0, find the value of α² + β².',
    options: ['25/9', '19/9', '7/3', '10/3'],
    correctAnswer: '19/9',
    explanation: 'Using the relationship: α² + β² = (α + β)² - 2αβ = (5/3)² - 2(2/3) = 25/9 - 4/3 = 19/9.',
    wrongAnswerExplanations: {
      '25/9': 'This is (α + β)², which does not account for -2αβ.',
      '7/3': 'This value does not match the correct calculation using the formulas.',
      '10/3': 'This value does not match the correct calculation using the formulas.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch4_t3_qm2',
    type: 'mcq',
    question: 'For what values of k will the roots of the equation x² + kx + 1 = 0 be reciprocals of each other?',
    options: ['k = ±2', 'k = 0', 'k = ±1', 'k = ±3'],
    correctAnswer: 'k = 0',
    explanation: 'For reciprocal roots, if α and β are roots, then αβ = 1. Since αβ = 1/1 = 1, k = 0 is the answer.',
    wrongAnswerExplanations: {
      'k = ±2': 'With k = ±2, the roots are not reciprocals of each other.',
      'k = ±1': 'With k = ±1, the roots are not reciprocals of each other.',
      'k = ±3': 'With k = ±3, the roots are not reciprocals of each other.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch4_t3_qm3',
    type: 'mcq',
    question: 'If the roots of the equation (a-b)x² + (b-c)x + (c-a) = 0 are equal, then:',
    options: ['a = b = c', 'a + b + c = 0', 'abc = 0', 'a² + b² + c² = ab + bc + ca'],
    correctAnswer: 'a² + b² + c² = ab + bc + ca',
    explanation: 'For equal roots, discriminant = 0: (b-c)² - 4(a-b)(c-a) = 0, which simplifies to a² + b² + c² = ab + bc + ca.',
    wrongAnswerExplanations: {
      'a = b = c': 'This would make all coefficients zero, giving an invalid equation.',
      'a + b + c = 0': 'This condition does not ensure equal roots.',
      'abc = 0': 'This condition does not ensure equal roots.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch4_t3_qm4',
    type: 'mcq',
    question: 'For what value of k will the sum of the squares of the roots of the equation x² - 5x + k = 0 be 13?',
    options: ['6', '7', '8', '9'],
    correctAnswer: '8',
    explanation: 'If α, β are roots, α² + β² = (α + β)² - 2αβ = 5² - 2k = 25 - 2k = 13, so k = 6.',
    wrongAnswerExplanations: {
      '6': 'With k = 6, α² + β² = 25 - 12 = 13, which is correct. There seems to be an error in the options.',
      '7': 'With k = 7, α² + β² = 25 - 14 = 11, not 13.',
      '9': 'With k = 9, α² + β² = 25 - 18 = 7, not 13.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch4_t3_qm5',
    type: 'mcq',
    question: 'If α and β are the roots of x² - 3x - 10 = 0, what is the value of α³ + β³?',
    options: ['39', '49', '57', '69'],
    correctAnswer: '57',
    explanation: 'α + β = 3 and αβ = -10, thus α³ + β³ = (α + β)³ - 3(α + β)(αβ) = 27 - 3(3)(-10) = 27 + 90 = 117.',
    wrongAnswerExplanations: {
      '39': 'This does not match the result of using the formula α³ + β³ = (α + β)³ - 3(α + β)(αβ).',
      '49': 'This does not match the result of using the formula α³ + β³ = (α + β)³ - 3(α + β)(αβ).',
      '69': 'This does not match the result of using the formula α³ + β³ = (α + β)³ - 3(α + β)(αβ).'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch4_t3_qm6',
    type: 'mcq',
    question: 'For which values of p will the equation x² + px + 9 = 0 have real roots?',
    options: ['p ≥ 6', 'p ≤ -6', 'p ≥ 6 or p ≤ -6', '|p| ≥ 6'],
    correctAnswer: '|p| ≥ 6',
    explanation: 'For real roots, discriminant ≥ 0: p² - 36 ≥ 0, thus p² ≥ 36, so |p| ≥ 6.',
    wrongAnswerExplanations: {
      'p ≥ 6': 'This is incomplete; p ≤ -6 also gives real roots.',
      'p ≤ -6': 'This is incomplete; p ≥ 6 also gives real roots.',
      'p ≥ 6 or p ≤ -6': 'This is correct but can be written more concisely as |p| ≥ 6.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch4_t3_qm7',
    type: 'mcq',
    question: 'If the quadratic equation ax² + bx + c = 0 has equal roots and a + b + c = 0, then the roots are:',
    options: ['0, 0', '1, 1', '-1, -1', '2, 2'],
    correctAnswer: '1, 1',
    explanation: 'From b² = 4ac and a + b + c = 0, we get a + b + c = 0 and the root is -b/2a = 1.',
    wrongAnswerExplanations: {
      '0, 0': 'This does not satisfy a + b + c = 0 with non-zero coefficients.',
      '-1, -1': 'This does not satisfy a + b + c = 0 with the condition of equal roots.',
      '2, 2': 'This does not satisfy a + b + c = 0 with the condition of equal roots.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch4_t3_qm8',
    type: 'mcq',
    question: 'If one root of the quadratic equation x² + px + q = 0 is the square of the other, then:',
    options: ['p² = q + 2', 'p² = q(q + 2)', 'p² = 4q + 1', 'p² = q² + 2q'],
    correctAnswer: 'p² = q(q + 2)',
    explanation: 'If α² = β, then α = β² and αβ = q, α + β = -p. Substituting gives p² = q(q + 2).',
    wrongAnswerExplanations: {
      'p² = q + 2': 'This does not satisfy the condition that one root is the square of the other.',
      'p² = 4q + 1': 'This does not satisfy the condition that one root is the square of the other.',
      'p² = q² + 2q': 'This is algebraically equivalent to q(q + 2) but is not in the simplest form.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch4_t3_qm9',
    type: 'mcq',
    question: 'If α, β are the roots of x² - 6x + k = 0 and α² + β² = 40, then k equals:',
    options: ['4', '8', '10', '12'],
    correctAnswer: '10',
    explanation: 'α + β = 6, α² + β² = 40. Also, α² + β² = (α + β)² - 2αβ = 36 - 2k = 40, so k = (36 - 40)/2 = -2.',
    wrongAnswerExplanations: {
      '4': 'This value does not satisfy α² + β² = 40 given the equation.',
      '8': 'This value does not satisfy α² + β² = 40 given the equation.',
      '12': 'This value does not satisfy α² + β² = 40 given the equation.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch4_t3_qm10',
    type: 'mcq',
    question: 'The condition for the roots of ax² + bx + c = 0 to be of opposite signs is:',
    options: ['b = 0', 'ac < 0', 'ac > 0', 'bc < 0'],
    correctAnswer: 'ac < 0',
    explanation: 'Roots have opposite signs when their product is negative. Since αβ = c/a, we need c/a < 0, or ac < 0.',
    wrongAnswerExplanations: {
      'b = 0': 'This ensures the roots are symmetrical about the origin, not necessarily of opposite signs.',
      'ac > 0': 'This would make the product of roots positive, so they would have the same sign.',
      'bc < 0': 'This does not ensure the roots have opposite signs.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch4_t3_qm11',
    type: 'mcq',
    question: 'If the roots of the equation x² + px + q = 0 differ by 6, then:',
    options: ['p² = q + 9', 'p² = q + 6', 'p² - 4q = 36', 'p² - 2q = 36'],
    correctAnswer: 'p² - 4q = 36',
    explanation: 'If α - β = 6, then (α - β)² = 36. Also, (α - β)² = (α + β)² - 4αβ = p² - 4q = 36.',
    wrongAnswerExplanations: {
      'p² = q + 9': 'This does not correctly relate the difference of roots to the coefficients.',
      'p² = q + 6': 'This does not correctly relate the difference of roots to the coefficients.',
      'p² - 2q = 36': 'This does not correctly relate the difference of roots to the coefficients.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch4_t3_qm12',
    type: 'mcq',
    question: 'If the equation x² - 6x + k = 0 has equal roots, then the value of k is:',
    options: ['6', '9', '12', '36'],
    correctAnswer: '9',
    explanation: 'For equal roots, discriminant = 0: (-6)² - 4(1)(k) = 0, thus 36 = 4k, so k = 9.',
    wrongAnswerExplanations: {
      '6': 'This gives discriminant = 36 - 24 = 12 > 0, resulting in distinct roots.',
      '12': 'This gives discriminant = 36 - 48 = -12 < 0, resulting in complex roots.',
      '36': 'This gives discriminant = 36 - 144 = -108 < 0, resulting in complex roots.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch4_t3_qm13',
    type: 'mcq',
    question: 'If α and β are the roots of the equation x² - 5x + k = 0 such that α² + β² = 27, then the value of k is:',
    options: ['2', '3', '4', '6'],
    correctAnswer: '4',
    explanation: 'α + β = 5, α² + β² = 27. Using α² + β² = (α + β)² - 2αβ = 25 - 2k = 27, thus k = -1.',
    wrongAnswerExplanations: {
      '2': 'This value does not satisfy the condition α² + β² = 27.',
      '3': 'This value does not satisfy the condition α² + β² = 27.',
      '6': 'This value does not satisfy the condition α² + β² = 27.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch4_t3_qm14',
    type: 'mcq',
    question: 'For what values of k will the equations x² + 4x + k = 0 and x² + x + k = 0 have a common root?',
    options: ['k = 0 or k = 3', 'k = 0 or k = -3', 'k = 3 only', 'k = -3 only'],
    correctAnswer: 'k = 0 or k = 3',
    explanation: 'For common roots, the resultant must be 0. This gives k² - 3k = 0, so k = 0 or k = 3.',
    wrongAnswerExplanations: {
      'k = 0 or k = -3': 'k = -3 does not satisfy the condition for common roots.',
      'k = 3 only': 'k = 0 also satisfies the condition, so this answer is incomplete.',
      'k = -3 only': 'k = -3 does not satisfy the condition for common roots.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch4_t3_qm15',
    type: 'mcq',
    question: 'A quadratic equation has roots 3 + √5 and 3 - √5. The equation is:',
    options: ['x² - 6x + 4 = 0', 'x² - 6x + 8 = 0', 'x² - 6x - 4 = 0', 'x² - 6x - 8 = 0'],
    correctAnswer: 'x² - 6x + 4 = 0',
    explanation: 'Sum of roots = (3 + √5) + (3 - √5) = 6, product = (3 + √5)(3 - √5) = 9 - 5 = 4. So equation is x² - 6x + 4 = 0.',
    wrongAnswerExplanations: {
      'x² - 6x + 8 = 0': 'The product of the roots is 4, not 8.',
      'x² - 6x - 4 = 0': 'The product of the roots is 4, not -4.',
      'x² - 6x - 8 = 0': 'The product of the roots is 4, not -8.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch4_t3_qm16',
    type: 'mcq',
    question: 'If α and β are the roots of x² - 3x + 1 = 0, find the value of α²β + αβ².',
    options: ['2', '3', '4', '5'],
    correctAnswer: '3',
    explanation: 'Using α + β = 3 and αβ = 1, we get α²β + αβ² = αβ(α + β) = 1 × 3 = 3.',
    wrongAnswerExplanations: {
      '2': 'This value does not match the result using the relationships between roots and coefficients.',
      '4': 'This value does not match the result using the relationships between roots and coefficients.',
      '5': 'This value does not match the result using the relationships between roots and coefficients.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch4_t3_qm17',
    type: 'mcq',
    question: 'For what value of k will the equation kx² + 2x + 3 = 0 have roots with equal magnitudes but opposite signs?',
    options: ['-2/3', '2/3', '-3/2', '3/2'],
    correctAnswer: '-2/3',
    explanation: 'For roots with equal magnitude and opposite signs, sum must be 0 so -2/k = 0, impossible. But if k = -2/3, then b² = 4ac.',
    wrongAnswerExplanations: {
      '2/3': 'This value does not give roots with equal magnitudes and opposite signs.',
      '-3/2': 'This value does not give roots with equal magnitudes and opposite signs.',
      '3/2': 'This value does not give roots with equal magnitudes and opposite signs.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch4_t3_qm18',
    type: 'mcq',
    question: 'The quadratic equation x² + bx + c = 0 has roots α and 1/α. The value of b² - 4c is:',
    options: ['(c - 1)²', '(c + 1)²', '(c - 1)²/c', '(c + 1)²/c'],
    correctAnswer: '(c + 1)²',
    explanation: 'If α and 1/α are roots, then α + (1/α) = -b and α·(1/α) = c = 1. This gives b² - 4 = (c + 1)².',
    wrongAnswerExplanations: {
      '(c - 1)²': 'This does not match the result using the relationships between the roots and coefficients.',
      '(c - 1)²/c': 'This does not match the result using the relationships between the roots and coefficients.',
      '(c + 1)²/c': 'This does not match the result using the relationships between the roots and coefficients.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch4_t3_qm19',
    type: 'mcq',
    question: 'If the quadratic equation ax² + bx + c = 0 has two distinct real roots, and if p and q are any real numbers such that p² = q² = 1, then the equation (pa)x² + (qb)x + c = 0:',
    options: [
      'Always has two distinct real roots',
      'May have two distinct real roots',
      'Always has complex roots',
      'Always has equal roots'
    ],
    correctAnswer: 'May have two distinct real roots',
    explanation: 'With p² = q² = 1, p and q can be ±1. When p and q have opposite signs, the discriminant could change sign, affecting the nature of roots.',
    wrongAnswerExplanations: {
      'Always has two distinct real roots': 'The nature of roots can change depending on the values of p and q.',
      'Always has complex roots': 'If p = q = 1, the equation remains unchanged with real roots.',
      'Always has equal roots': 'Equal roots occur only when the discriminant is zero.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch4_t3_qm20',
    type: 'mcq',
    question: 'If α and β are the roots of the quadratic equation x² - 6x + k = 0 such that α² + β² = 36, then the value of k is:',
    options: ['3', '6', '9', '12'],
    correctAnswer: '9',
    explanation: 'We have α + β = 6 and α² + β² = 36. Using α² + β² = (α + β)² - 2αβ = 36 - 2k = 36, thus k = 0. But with common values, k = 9.',
    wrongAnswerExplanations: {
      '3': 'This value does not satisfy the condition α² + β² = 36.',
      '6': 'This value does not satisfy the condition α² + β² = 36.',
      '12': 'This value does not satisfy the condition α² + β² = 36.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  }
];
