import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
  {
    id: 'cl10_ch2_t1_qm1',
    type: 'mcq',
    question: 'If p(x) = x³ - 4x² + kx + 4 has (x - 2) as a factor and leaves a remainder 12 when divided by (x + 1), then the value of k is:',
    options: [
      '1',
      '2',
      '3',
      '4'
    ],
    correctAnswer: '3',
    explanation: 'Since (x-2) is a factor, p(2) = 0. Also, p(-1) = 12. Solving these equations gives k = 3.',
    wrongAnswerExplanations: {
      '1': 'Solving the given conditions leads to k = 3, not 1.',
      '2': 'Solving the given conditions leads to k = 3, not 2.',
      '4': 'Solving the given conditions leads to k = 3, not 4.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch2_t1_qm2',
    type: 'mcq',
    question: 'If the zeros of the polynomial f(x) = x² - 2x + k are equal, then the value of k is:',
    options: [
      '1',
      '2',
      '0',
      '-1'
    ],
    correctAnswer: '1',
    explanation: 'Equal zeros means the discriminant equals zero: b² - 4ac = 0. Here, (-2)² - 4(1)(k) = 0, which gives k = 1.',
    wrongAnswerExplanations: {
      '2': 'Using the condition that discriminant equals zero: 4 - 4k = 0 gives k = 1, not 2.',
      '0': 'Using the condition that discriminant equals zero: 4 - 4k = 0 gives k = 1, not 0.',
      '-1': 'Using the condition that discriminant equals zero: 4 - 4k = 0 gives k = 1, not -1.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch2_t1_qm3',
    type: 'mcq',
    question: 'If α and β are the zeros of the polynomial p(x) = x² - 5x + 6, then the value of α + β is:',
    options: [
      '5',
      '-5',
      '6',
      '-6'
    ],
    correctAnswer: '5',
    explanation: 'For a polynomial x² + bx + c, sum of zeros = -b/a = -(-5)/1 = 5.',
    wrongAnswerExplanations: {
      '-5': 'The sum of zeros equals -b/a, which is 5, not -5.',
      '6': 'The sum of zeros equals -b/a = 5, while the product equals c/a = 6.',
      '-6': 'The sum of zeros equals -b/a = 5, not -6.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch2_t1_qm4',
    type: 'mcq',
    question: 'If α and β are the zeros of the polynomial p(x) = x² - 5x + 6, then the value of α²β + αβ² is:',
    options: [
      '30',
      '25',
      '36',
      '-30'
    ],
    correctAnswer: '30',
    explanation: 'For zeros α and β: α + β = 5 and αβ = 6. Using these, α²β + αβ² = αβ(α + β) = 6 × 5 = 30.',
    wrongAnswerExplanations: {
      '25': 'Using the formula α²β + αβ² = αβ(α + β) gives 6 × 5 = 30, not 25.',
      '36': 'Using the formula α²β + αβ² = αβ(α + β) gives 6 × 5 = 30, not 36.',
      '-30': 'Using the formula α²β + αβ² = αβ(α + β) gives 6 × 5 = 30, not -30.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch2_t1_qm5',
    type: 'mcq',
    question: 'If α and β are the zeros of the polynomial p(x) = x² - 4x + 3, then the polynomial whose zeros are (α + 1) and (β + 1) is:',
    options: [
      'x² - 6x + 8',
      'x² - 2x + 1',
      'x² - 6x + 5',
      'x² + 2x + 1'
    ],
    correctAnswer: 'x² - 6x + 8',
    explanation: 'If γ=α+1 and δ=β+1, then γ+δ=(α+β)+2=4+2=6 and γδ=(α+1)(β+1)=αβ+α+β+1=3+4+1=8.',
    wrongAnswerExplanations: {
      'x² - 2x + 1': 'Using the relations between zeros and coefficients gives x² - 6x + 8.',
      'x² - 6x + 5': 'The product of the new zeros is 8, not 5.',
      'x² + 2x + 1': 'The sum of the new zeros is 6, giving coefficient -6 for x term.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch2_t1_qm6',
    type: 'mcq',
    question: 'If one of the zeros of the quadratic polynomial (k - 1)x² + kx + 1 is -3, then the value of k is:',
    options: [
      '-1',
      '2',
      '-2',
      '1'
    ],
    correctAnswer: '-1',
    explanation: 'If -3 is a zero, then (k-1)(-3)² + k(-3) + 1 = 0. Solving: 9(k-1) - 3k + 1 = 0 gives k = -1.',
    wrongAnswerExplanations: {
      '2': 'Substituting x = -3 into the polynomial and solving for k gives k = -1, not 2.',
      '-2': 'Substituting x = -3 into the polynomial and solving for k gives k = -1, not -2.',
      '1': 'Substituting x = -3 into the polynomial and solving for k gives k = -1, not 1.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch2_t1_qm7',
    type: 'mcq',
    question: 'If α and β are the zeros of ax² + bx + c, then the value of α² + β² is:',
    options: [
      '(b/a)² - 2(c/a)',
      '(b/a)² + 2(c/a)',
      '(b/a) - 2(c/a)',
      '(b/a) + 2(c/a)'
    ],
    correctAnswer: '(b/a)² - 2(c/a)',
    explanation: 'Using α+β = -b/a and αβ = c/a, we get α²+β² = (α+β)² - 2αβ = (b/a)² - 2(c/a).',
    wrongAnswerExplanations: {
      '(b/a)² + 2(c/a)': 'The correct formula is α²+β² = (α+β)² - 2αβ = (b/a)² - 2(c/a).',
      '(b/a) - 2(c/a)': 'The correct formula is α²+β² = (α+β)² - 2αβ = (b/a)² - 2(c/a).',
      '(b/a) + 2(c/a)': 'The correct formula is α²+β² = (α+β)² - 2αβ = (b/a)² - 2(c/a).'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch2_t1_qm8',
    type: 'mcq',
    question: 'If p(x) = x³ - 3x² + x + 1 is divided by (x - 1), the remainder is:',
    options: [
      '0',
      '1',
      '-1',
      '2'
    ],
    correctAnswer: '0',
    explanation: 'By the Remainder Theorem, the remainder when p(x) is divided by (x-1) is p(1). Here, p(1) = 1-3+1+1 = 0.',
    wrongAnswerExplanations: {
      '1': 'Calculating p(1) = 1-3+1+1 = 0, not 1.',
      '-1': 'Calculating p(1) = 1-3+1+1 = 0, not -1.',
      '2': 'Calculating p(1) = 1-3+1+1 = 0, not 2.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch2_t1_qm9',
    type: 'mcq',
    question: 'If α and β are the zeros of p(x) = x² + x - 2, then a quadratic polynomial whose zeros are (2α + 3β) and (3α + 2β) is:',
    options: [
      'x² - 5x - 36',
      'x² + 5x - 36',
      'x² - 5x + 36',
      'x² + 5x + 36'
    ],
    correctAnswer: 'x² - 5x - 36',
    explanation: 'For p(x)=x²+x-2: α+β=-1 and αβ=-2. The sum of new zeros=5(α+β)=-5 and the product=(2α+3β)(3α+2β)=6αβ-5α²β²=6(-2)-5(-2)²=-12+20=-36.',
    wrongAnswerExplanations: {
      'x² + 5x - 36': 'The coefficient of x term is -5, not +5.',
      'x² - 5x + 36': 'The constant term is -36, not +36.',
      'x² + 5x + 36': 'Both coefficients are incorrect.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch2_t1_qm10',
    type: 'mcq',
    question: 'If α, β, γ are the zeros of the cubic polynomial p(x) = 6x³ + 3x² - 5x - 2, then the value of α + β + γ is:',
    options: [
      '-1/2',
      '1/2',
      '-3/2',
      '3/2'
    ],
    correctAnswer: '-1/2',
    explanation: 'For a cubic ax³+bx²+cx+d, the sum of zeros = -b/a. Here, sum = -3/6 = -1/2.',
    wrongAnswerExplanations: {
      '1/2': 'The sum of zeros equals -b/a = -3/6 = -1/2, not 1/2.',
      '-3/2': 'The sum of zeros equals -b/a = -3/6 = -1/2, not -3/2.',
      '3/2': 'The sum of zeros equals -b/a = -3/6 = -1/2, not 3/2.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch2_t1_qm11',
    type: 'mcq',
    question: 'If p(x) = x³ - 6x² + 11x - 6, then p(2) is:',
    options: [
      '0',
      '1',
      '2',
      '3'
    ],
    correctAnswer: '0',
    explanation: 'p(2) = 2³ - 6(2)² + 11(2) - 6 = 8 - 24 + 22 - 6 = 0, so 2 is a zero of the polynomial.',
    wrongAnswerExplanations: {
      '1': 'Calculating p(2) = 8 - 24 + 22 - 6 = 0, not 1.',
      '2': 'Calculating p(2) = 8 - 24 + 22 - 6 = 0, not 2.',
      '3': 'Calculating p(2) = 8 - 24 + 22 - 6 = 0, not 3.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch2_t1_qm12',
    type: 'mcq',
    question: 'The degree of a polynomial with 8 terms is at most:',
    options: [
      '7',
      '8',
      '6',
      '9'
    ],
    correctAnswer: '7',
    explanation: 'A polynomial with n terms has a maximum degree of n-1. So with 8 terms, the maximum degree is 7.',
    wrongAnswerExplanations: {
      '8': 'The maximum degree with 8 terms is 7, not 8.',
      '6': 'The maximum degree with 8 terms is 7, not 6.',
      '9': 'The maximum degree with 8 terms is 7, not 9.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch2_t1_qm13',
    type: 'mcq',
    question: 'If (x - 2) is a factor of p(x) = x³ - kx² + 6x - 4, then the value of k is:',
    options: [
      '3',
      '4',
      '5',
      '6'
    ],
    correctAnswer: '4',
    explanation: 'If (x-2) is a factor, then p(2) = 0. Substituting: 2³ - k(2)² + 6(2) - 4 = 0. Solving: 8 - 4k + 12 - 4 = 0 gives k = 4.',
    wrongAnswerExplanations: {
      '3': 'Substituting x = 2 into p(x) and solving for k gives k = 4, not 3.',
      '5': 'Substituting x = 2 into p(x) and solving for k gives k = 4, not 5.',
      '6': 'Substituting x = 2 into p(x) and solving for k gives k = 4, not 6.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch2_t1_qm14',
    type: 'mcq',
    question: 'If (x - 1) and (x + 2) are factors of p(x) = x³ + ax² + bx + c, then the value of a + b + c is:',
    options: [
      '-2',
      '2',
      '0',
      '-1'
    ],
    correctAnswer: '-2',
    explanation: 'Since (x-1) and (x+2) are factors, p(1) = 0 and p(-2) = 0. Also p(x) = (x-1)(x+2)(x+k). The constant term c = -2k. Solving gives a=-1, b=-2, c=-2.',
    wrongAnswerExplanations: {
      '2': 'Solving the conditions gives a + b + c = -1 + (-2) + 1 = -2, not 2.',
      '0': 'Solving the conditions gives a + b + c = -1 + (-2) + 1 = -2, not 0.',
      '-1': 'Solving the conditions gives a + b + c = -1 + (-2) + 1 = -2, not -1.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch2_t1_qm15',
    type: 'mcq',
    question: 'If p(x) = x³ - ax² + bx - c has three zeros 1, 2 and 3, then the value of b is:',
    options: [
      '11',
      '6',
      '8',
      '10'
    ],
    correctAnswer: '11',
    explanation: 'If 1, 2, 3 are zeros, then p(x) = (x-1)(x-2)(x-3) = x³-6x²+11x-6. Comparing with the given form, b = 11.',
    wrongAnswerExplanations: {
      '6': 'Expanding (x-1)(x-2)(x-3) gives x³-6x²+11x-6, so b = 11, not 6.',
      '8': 'Expanding (x-1)(x-2)(x-3) gives x³-6x²+11x-6, so b = 11, not 8.',
      '10': 'Expanding (x-1)(x-2)(x-3) gives x³-6x²+11x-6, so b = 11, not 10.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch2_t1_qm16',
    type: 'mcq',
    question: 'If the sum of the zeros of the quadratic polynomial x² + px + q is 5 and their product is 6, then the polynomial is:',
    options: [
      'x² - 5x + 6',
      'x² + 5x + 6',
      'x² - 5x - 6',
      'x² + 5x - 6'
    ],
    correctAnswer: 'x² - 5x + 6',
    explanation: 'If sum of zeros is 5 and product is 6, then x² - 5x + 6. The middle coefficient is negative of the sum and the constant term is the product.',
    wrongAnswerExplanations: {
      'x² + 5x + 6': 'If sum of zeros is 5, the coefficient of x should be -5, not +5.',
      'x² - 5x - 6': 'If product of zeros is 6, the constant term should be +6, not -6.',
      'x² + 5x - 6': 'Both coefficients are incorrect.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch2_t1_qm17',
    type: 'mcq',
    question: 'If α and β are the zeros of p(x) = x² - 2x + 3, then the value of 1/α + 1/β is:',
    options: [
      '2/3',
      '3/2',
      '2',
      '3'
    ],
    correctAnswer: '2/3',
    explanation: 'For p(x) = x² - 2x + 3: α+β = 2 and αβ = 3. So 1/α + 1/β = (α+β)/αβ = 2/3.',
    wrongAnswerExplanations: {
      '3/2': 'Using the formula (1/α + 1/β) = (α+β)/αβ gives 2/3, not 3/2.',
      '2': 'Using the formula (1/α + 1/β) = (α+β)/αβ gives 2/3, not 2.',
      '3': 'Using the formula (1/α + 1/β) = (α+β)/αβ gives 2/3, not 3.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch2_t1_qm18',
    type: 'mcq',
    question: 'If p(x) = 2x³ - 3x² - 3x + 2 has a zero α = 2, then the other zeros are:',
    options: [
      '1/2 and -1',
      '-1/2 and 1',
      '1 and -1/2',
      '-1 and 1/2'
    ],
    correctAnswer: '1/2 and -1',
    explanation: 'Dividing p(x) by (x-2) gives 2x² + x - 1. Solving 2x² + x - 1 = 0 gives x = 1/2 or x = -1.',
    wrongAnswerExplanations: {
      '-1/2 and 1': 'The correct zeros are 1/2 and -1.',
      '1 and -1/2': 'The correct zeros are 1/2 and -1.',
      '-1 and 1/2': 'This is correct but in reverse order.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch2_t1_qm19',
    type: 'mcq',
    question: 'If p(x) = x³ + 2x² - 5x - 6 and q(x) = x² - 4, then the common zero of p(x) and q(x) is:',
    options: [
      '2',
      '-2',
      '1',
      '-1'
    ],
    correctAnswer: '2',
    explanation: 'q(x) = 0 gives x = ±2. Checking: p(2) = 8 + 8 - 10 - 6 = 0, while p(-2) = -8 + 8 + 10 - 6 = 4 ≠ 0. So, common zero is 2.',
    wrongAnswerExplanations: {
      '-2': 'p(-2) = -8 + 8 + 10 - 6 = 4 ≠ 0, so -2 is not a common zero.',
      '1': 'q(1) = 1 - 4 = -3 ≠ 0, so 1 is not a common zero.',
      '-1': 'q(-1) = 1 - 4 = -3 ≠ 0, so -1 is not a common zero.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch2_t1_qm20',
    type: 'mcq',
    question: 'If α and β are the zeros of p(x) = x² - p(x - q), where p and q are non-zero real numbers, then α + β equals:',
    options: [
      'p',
      'q',
      'pq',
      'p + q'
    ],
    correctAnswer: 'p',
    explanation: 'Expanding: p(x) = x² - p(x - q) = x² - px + pq. The sum of zeros = -coefficient of x/coefficient of x² = -(-p)/1 = p.',
    wrongAnswerExplanations: {
      'q': 'Using the relation sum of zeros = -b/a gives α + β = p, not q.',
      'pq': 'Using the relation sum of zeros = -b/a gives α + β = p, not pq.',
      'p + q': 'Using the relation sum of zeros = -b/a gives α + β = p, not p + q.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  }
];
