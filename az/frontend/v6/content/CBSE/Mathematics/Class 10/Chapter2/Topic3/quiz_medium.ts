import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
  {
    id: 'cl10_ch2_t3_qm1',
    type: 'mcq',
    question: 'If the remainder when a polynomial p(x) is divided by (x - 2) is 3 and the remainder when divided by (x - 3) is 4, what is the remainder when p(x) is divided by (x - 2)(x - 3)?',
    options: [
      '3(x - 3) + 4(x - 2)',
      '3(x - 2) + 4(x - 3)',
      '3(x - 3) - 4(x - 2)',
      '4(x - 3) - 3(x - 2)'
    ],
    correctAnswer: '3(x - 3) + 4(x - 2)',
    explanation: 'By Lagrange\'s interpolation formula, the remainder when dividing by (x-2)(x-3) is r(x) = 3(x-3)/(2-3) + 4(x-2)/(3-2) = 3(x-3) + 4(x-2).',
    wrongAnswerExplanations: {
      '3(x - 2) + 4(x - 3)': 'The remainder uses the form r(a)(x-b)/[(a-b)] + r(b)(x-a)/[(b-a)].',
      '3(x - 3) - 4(x - 2)': 'The sign in the remainder formula is determined by the denominators (a-b) and (b-a).',
      '4(x - 3) - 3(x - 2)': 'The coefficients should match the respective remainders for each linear factor.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch2_t3_qm2',
    type: 'mcq',
    question: 'If p(x) = x³ - 4x² + 6x - 4, then the remainder when p(x) is divided by (x - 2)² is:',
    options: [
      '0',
      '2',
      '-2',
      '4'
    ],
    correctAnswer: '0',
    explanation: 'Since p(2) = 0 and p\'(2) = 0, (x-2)² is a factor of p(x), making the remainder 0.',
    wrongAnswerExplanations: {
      '2': 'If (x-2)² is a factor, the remainder must be 0, not 2.',
      '-2': 'If (x-2)² is a factor, the remainder must be 0, not -2.',
      '4': 'If (x-2)² is a factor, the remainder must be 0, not 4.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch2_t3_qm3',
    type: 'mcq',
    question: 'When a polynomial p(x) is divided by (x - a)(x - b), the remainder is ax - b. What are p(a) and p(b)?',
    options: [
      'p(a) = -b, p(b) = ab',
      'p(a) = a² - b, p(b) = ab - b²',
      'p(a) = a² - b, p(b) = ab',
      'p(a) = -b, p(b) = b² - a'
    ],
    correctAnswer: 'p(a) = -b, p(b) = ab',
    explanation: 'If remainder is ax-b, then substituting x=a gives p(a)=a²-b, and x=b gives p(b)=ab-b=-b+ab=ab.',
    wrongAnswerExplanations: {
      'p(a) = a² - b, p(b) = ab - b²': 'When x=a, p(a)=aa-b=-b; when x=b, p(b)=ab.',
      'p(a) = a² - b, p(b) = ab': 'When x=a, p(a)=aa-b=-b, not a²-b.',
      'p(a) = -b, p(b) = b² - a': 'When x=b, p(b)=ab, not b²-a.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch2_t3_qm4',
    type: 'mcq',
    question: 'What is the remainder when x³ - ax² + bx - c is divided by x - 1, given that the remainder is 6?',
    options: [
      '1 - a + b - c = 6',
      'a - b + c - 1 = 6',
      'c - b + a - 1 = 6',
      '1 + a + b + c = 6'
    ],
    correctAnswer: '1 - a + b - c = 6',
    explanation: 'By remainder theorem, when x=1: 1³ - a(1)² + b(1) - c = 1 - a + b - c = 6.',
    wrongAnswerExplanations: {
      'a - b + c - 1 = 6': 'When x=1, we get 1-a+b-c=6, not a-b+c-1=6.',
      'c - b + a - 1 = 6': 'When x=1, we get 1-a+b-c=6, not c-b+a-1=6.',
      '1 + a + b + c = 6': 'When x=1, we get 1-a+b-c=6, not 1+a+b+c=6.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch2_t3_qm5',
    type: 'mcq',
    question: 'If the remainder when a polynomial p(x) is divided by (x² + 1) is (2x + 3), what is the remainder when p(x) is divided by (x² + 1)²?',
    options: [
      '2x + 3',
      '(2x + 3)(x² + 1)',
      '4x + 6',
      '(x² + 1) + 2x + 3'
    ],
    correctAnswer: '2x + 3',
    explanation: 'When the divisor is (x²+1)², the remainder has degree less than 4, but can be expressed as (2x+3) since it\'s already less than the degree of x²+1.',
    wrongAnswerExplanations: {
      '(2x + 3)(x² + 1)': 'This would have degree 3, which is correct for a remainder, but the remainder is still 2x+3.',
      '4x + 6': 'The remainder doesn\'t double when the divisor is squared.',
      '(x² + 1) + 2x + 3': 'This would have degree 2, but the remainder stays 2x+3.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch2_t3_qm6',
    type: 'mcq',
    question: 'If p(x) = x⁴ - 3x² + 5 when divided by x² + 1 gives the remainder ax + b, then the values of a and b are:',
    options: [
      'a = 0, b = 2',
      'a = 2, b = 0',
      'a = 0, b = 6',
      'a = 6, b = 0'
    ],
    correctAnswer: 'a = 0, b = 2',
    explanation: 'Using p(x) = (x²+1)q(x) + (ax+b) and comparing coefficients, we get a=0, b=2.',
    wrongAnswerExplanations: {
      'a = 2, b = 0': 'The correct values are a=0, b=2, as determined by comparing coefficients.',
      'a = 0, b = 6': 'The correct values are a=0, b=2, as determined by comparing coefficients.',
      'a = 6, b = 0': 'The correct values are a=0, b=2, as determined by comparing coefficients.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch2_t3_qm7',
    type: 'mcq',
    question: 'Find the quotient and remainder when x⁴ + x³ - 7x² - x + 12 is divided by x² - 2x + 3.',
    options: [
      'Quotient: x² + 3x - 4, Remainder: -2x + 0',
      'Quotient: x² + 3x + 4, Remainder: -2x + 0',
      'Quotient: x² + 3x - 4, Remainder: 2x + 0',
      'Quotient: x² - 3x - 4, Remainder: -2x + 0'
    ],
    correctAnswer: 'Quotient: x² + 3x - 4, Remainder: -2x + 0',
    explanation: 'Using polynomial long division, we get quotient = x² + 3x - 4 and remainder = -2x.',
    wrongAnswerExplanations: {
      'Quotient: x² + 3x + 4, Remainder: -2x + 0': 'The correct quotient is x² + 3x - 4, not x² + 3x + 4.',
      'Quotient: x² + 3x - 4, Remainder: 2x + 0': 'The correct remainder is -2x, not 2x.',
      'Quotient: x² - 3x - 4, Remainder: -2x + 0': 'The correct quotient is x² + 3x - 4, not x² - 3x - 4.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch2_t3_qm8',
    type: 'mcq',
    question: 'If the remainder when a polynomial p(x) is divided by x - 1, x - 2, and x - 3 is 2, 3, and 4 respectively, then the remainder when p(x) is divided by (x - 1)(x - 2)(x - 3) is:',
    options: [
      'A polynomial of degree at most 2',
      'A polynomial of degree at most 3',
      'A polynomial of degree exactly 2',
      'A constant polynomial'
    ],
    correctAnswer: 'A polynomial of degree at most 2',
    explanation: 'By the Chinese remainder theorem, the remainder will be a polynomial of degree less than 3, i.e., at most 2.',
    wrongAnswerExplanations: {
      'A polynomial of degree at most 3': 'The degree of the remainder must be less than the degree of the divisor, which is 3.',
      'A polynomial of degree exactly 2': 'The remainder will be of degree at most 2, not necessarily exactly 2.',
      'A constant polynomial': 'The remainder can have terms with x and x², not just a constant.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch2_t3_qm9',
    type: 'mcq',
    question: 'If p(x) = x³ - 6x² + 3x + 10 and g(x) = x - 2, find the quotient and remainder.',
    options: [
      'Quotient: x² - 4x - 5, Remainder: 0',
      'Quotient: x² - 4x - 5, Remainder: 2',
      'Quotient: x² - 4x + 5, Remainder: 0',
      'Quotient: x² - 4x + 5, Remainder: 2'
    ],
    correctAnswer: 'Quotient: x² - 4x - 5, Remainder: 0',
    explanation: 'Using synthetic division with 2: 1, -6, 3, 10 → 1, -4, -5, 0. So quotient = x² - 4x - 5 and remainder = 0.',
    wrongAnswerExplanations: {
      'Quotient: x² - 4x - 5, Remainder: 2': 'The remainder is 0, not 2, as shown by synthetic division.',
      'Quotient: x² - 4x + 5, Remainder: 0': 'The correct quotient is x² - 4x - 5, not x² - 4x + 5.',
      'Quotient: x² - 4x + 5, Remainder: 2': 'Both the quotient and remainder are incorrect.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch2_t3_qm10',
    type: 'mcq',
    question: 'The polynomial x⁴ - 6x³ + 16x² - 25x + k is divided by (x - 1)², and the remainder is x + 4. What is the value of k?',
    options: [
      '14',
      '10',
      '12',
      '16'
    ],
    correctAnswer: '14',
    explanation: 'For remainder (x+4), we need p(1)=5 and p\'(1)=1. Using these conditions, k=14.',
    wrongAnswerExplanations: {
      '10': 'Using the conditions p(1)=5 and p\'(1)=1, we get k=14, not 10.',
      '12': 'Using the conditions p(1)=5 and p\'(1)=1, we get k=14, not 12.',
      '16': 'Using the conditions p(1)=5 and p\'(1)=1, we get k=14, not 16.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch2_t3_qm11',
    type: 'mcq',
    question: 'What is the remainder when x^101 is divided by x - 1?',
    options: [
      '1',
      '0',
      'x',
      '-1'
    ],
    correctAnswer: '1',
    explanation: 'By the remainder theorem, the remainder equals (1)^101 = 1.',
    wrongAnswerExplanations: {
      '0': 'Using the remainder theorem, when x^101 is divided by x-1, the remainder is 1^101 = 1, not 0.',
      'x': 'The remainder must be a constant when dividing by x-1, not a term with x.',
      '-1': 'Using the remainder theorem, when x^101 is divided by x-1, the remainder is 1^101 = 1, not -1.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch2_t3_qm12',
    type: 'mcq',
    question: 'When x³ + x² + x + 1 is divided by x² + x, the remainder is:',
    options: [
      'x + 1',
      '1 - x',
      'x - 1',
      '1'
    ],
    correctAnswer: '1',
    explanation: 'Dividing x³ + x² + x + 1 by x² + x gives quotient = x - 1 and remainder = 1.',
    wrongAnswerExplanations: {
      'x + 1': 'The remainder must have degree less than the divisor, so it can\'t be x + 1.',
      '1 - x': 'The remainder must have degree less than the divisor, so it can\'t be 1 - x.',
      'x - 1': 'The remainder must have degree less than the divisor, so it can\'t be x - 1.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch2_t3_qm13',
    type: 'mcq',
    question: 'If f(x) is a polynomial of degree 4 and f(0) = 2, f(1) = 3, f(2) = 6, f(3) = 11, and f(4) = 18, what is f(5)?',
    options: [
      '27',
      '30',
      '25',
      '28'
    ],
    correctAnswer: '27',
    explanation: 'Using differences, we find f(x) = x⁴/24 + x/4 + 2, giving f(5) = 5⁴/24 + 5/4 + 2 = 25.52 + 1.25 + 2 = 27.',
    wrongAnswerExplanations: {
      '30': 'The correct answer is 27, as calculated using the method of differences.',
      '25': 'The correct answer is 27, as calculated using the method of differences.',
      '28': 'The correct answer is 27, as calculated using the method of differences.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch2_t3_qm14',
    type: 'mcq',
    question: 'If p(x) = ax³ + bx² + cx + d and p(0) = 1, p(1) = 4, p(-1) = 2, p(2) = 11, find the value of a + b + c + d.',
    options: [
      '8',
      '6',
      '10',
      '7'
    ],
    correctAnswer: '8',
    explanation: 'Solving the system of equations from the given values: d=1, a+b+c+d=4, -a+b-c+d=2, 8a+4b+2c+d=11, we get a=1, b=2, c=0, d=1, so a+b+c+d=4.',
    wrongAnswerExplanations: {
      '6': 'The correct value of a+b+c+d is 4, not 6.',
      '10': 'The correct value of a+b+c+d is 4, not 10.',
      '7': 'The correct value of a+b+c+d is 4, not 7.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch2_t3_qm15',
    type: 'mcq',
    question: 'If p(x) = ax³ + bx² + cx + d and p(1) = 3, p(-1) = 1, p(2) = 27, p(-2) = -5, find the value of a.',
    options: [
      '3',
      '2',
      '1',
      '4'
    ],
    correctAnswer: '3',
    explanation: 'Solving the system of equations from the given values, we get a=3, b=2, c=4, d=-6.',
    wrongAnswerExplanations: {
      '2': 'The correct value of a is 3, as determined by solving the system of equations.',
      '1': 'The correct value of a is 3, as determined by solving the system of equations.',
      '4': 'The correct value of a is 3, as determined by solving the system of equations.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch2_t3_qm16',
    type: 'mcq',
    question: 'When a polynomial p(x) is divided by (x - 1)(x - 2), the remainder is 3x - 5. Find the value of p(1).',
    options: [
      '-2',
      '2',
      '-1',
      '1'
    ],
    correctAnswer: '-2',
    explanation: 'If remainder is 3x-5, then p(1)=(3×1-5)=3-5=-2.',
    wrongAnswerExplanations: {
      '2': 'When x=1, p(1)=3(1)-5=-2, not 2.',
      '-1': 'When x=1, p(1)=3(1)-5=-2, not -1.',
      '1': 'When x=1, p(1)=3(1)-5=-2, not 1.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch2_t3_qm17',
    type: 'mcq',
    question: 'If x - 1 is a factor of p(x) = x³ - ax² + bx + 3 and p(3) = 0, then the value of a + b is:',
    options: [
      '6',
      '5',
      '7',
      '4'
    ],
    correctAnswer: '6',
    explanation: 'Since x-1 is a factor, p(1)=0. And p(3)=0. Solving these equations: 1-a+b+3=0 and 27-9a+3b+3=0, we get a=4, b=2, so a+b=6.',
    wrongAnswerExplanations: {
      '5': 'Solving the equations from p(1)=0 and p(3)=0, we get a+b=6, not 5.',
      '7': 'Solving the equations from p(1)=0 and p(3)=0, we get a+b=6, not 7.',
      '4': 'Solving the equations from p(1)=0 and p(3)=0, we get a+b=6, not 4.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch2_t3_qm18',
    type: 'mcq',
    question: 'What is the remainder when x² + x + 1 is divided by x² - x - 2?',
    options: [
      '3x + 3',
      '3x + 1',
      'x + 3',
      'x + 1'
    ],
    correctAnswer: '3x + 3',
    explanation: 'Dividing x² + x + 1 by x² - x - 2 gives quotient=1 and remainder=3x+3.',
    wrongAnswerExplanations: {
      '3x + 1': 'The correct remainder is 3x+3, not 3x+1.',
      'x + 3': 'The correct remainder is 3x+3, not x+3.',
      'x + 1': 'The correct remainder is 3x+3, not x+1.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch2_t3_qm19',
    type: 'mcq',
    question: 'The remainder when x³ + 3x² + 3x + 1 is divided by x + 1 is:',
    options: [
      '0',
      '1',
      '-1',
      '2'
    ],
    correctAnswer: '0',
    explanation: 'x³ + 3x² + 3x + 1 = (x+1)³, so x+1 is a factor and the remainder is 0.',
    wrongAnswerExplanations: {
      '1': 'Since x³ + 3x² + 3x + 1 = (x+1)³, the remainder is 0, not 1.',
      '-1': 'Since x³ + 3x² + 3x + 1 = (x+1)³, the remainder is 0, not -1.',
      '2': 'Since x³ + 3x² + 3x + 1 = (x+1)³, the remainder is 0, not 2.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch2_t3_qm20',
    type: 'mcq',
    question: 'If three consecutive coefficients in the expansion of (1 + x)^20 are 4845, 3876, and 2907, then their positions (starting from the constant term as position 0) are:',
    options: [
      '7, 8, and 9',
      '6, 7, and 8',
      '8, 9, and 10',
      '5, 6, and 7'
    ],
    correctAnswer: '7, 8, and 9',
    explanation: 'Using the properties of binomial coefficients and the given values, these correspond to the 7th, 8th, and 9th terms in the expansion.',
    wrongAnswerExplanations: {
      '6, 7, and 8': 'Based on the values and binomial coefficient properties, the positions are 7, 8, and 9.',
      '8, 9, and 10': 'Based on the values and binomial coefficient properties, the positions are 7, 8, and 9.',
      '5, 6, and 7': 'Based on the values and binomial coefficient properties, the positions are 7, 8, and 9.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  }
];
