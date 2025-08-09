import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
  {
    id: 'cl8_ch8_t2_qm1',
    type: 'mcq',
    question: 'Simplify: (2x + 3y)² - (2x - 3y)²',
    options: ['12xy', '24xy', '4xy', '(4x)(3y)'],
    correctAnswer: '24xy',
    explanation: '(2x + 3y)² - (2x - 3y)² = 4(2x)(3y) = 24xy using the identity a² - b² = (a+b)(a-b) 🧮',
    wrongAnswerExplanations: {
      '12xy': 'The result needs to be multiplied by 2 more.',
      '4xy': 'The coefficients are not multiplied correctly.',
      '(4x)(3y)': 'The multiplication is not completed.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 60,
  },
  {
    id: 'cl8_ch8_t2_qm2',
    type: 'mcq',
    question: 'Find the product: (3a - 5b)(3a + 5b)',
    options: ['9a² - 25b²', '9a² + 25b²', '9a² - 30ab + 25b²', '9a² + 30ab + 25b²'],
    correctAnswer: '9a² - 25b²',
    explanation: 'Using the identity (a-b)(a+b) = a² - b²: (3a)² - (5b)² = 9a² - 25b² 📊',
    wrongAnswerExplanations: {
      '9a² + 25b²': 'The sign between terms is incorrect.',
      '9a² - 30ab + 25b²': 'The middle term should not exist in (a+b)(a-b).',
      '9a² + 30ab + 25b²': 'This is (3a + 5b)², not (3a - 5b)(3a + 5b).'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 45,
  },
  {
    id: 'cl8_ch8_t2_qm3',
    type: 'mcq',
    question: 'Multiply: (x + 1/2)(x - 2/3)',
    options: ['x² - (1/6)x - 1/3', 'x² + (1/6)x - 1/3', 'x² - (1/6)x + 1/3', 'x² + (1/6)x + 1/3'],
    correctAnswer: 'x² - (1/6)x - 1/3',
    explanation: '(x + 1/2)(x - 2/3) = x² - 2x/3 + x/2 - 1/3 = x² - (1/6)x - 1/3 🔍',
    wrongAnswerExplanations: {
      'x² + (1/6)x - 1/3': 'The sign of the middle term is incorrect.',
      'x² - (1/6)x + 1/3': 'The sign of the constant term is incorrect.',
      'x² + (1/6)x + 1/3': 'Both middle and constant term signs are incorrect.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 60,
  },
  {
    id: 'cl8_ch8_t2_qm4',
    type: 'mcq',
    question: 'Simplify: (a - b - c)² - (a² + b² + c² - 2ab - 2ac + 2bc)',
    options: ['0', '2(a-b-c)', '4abc', '-2(a-b-c)'],
    correctAnswer: '0',
    explanation: '(a-b-c)² = a² + b² + c² - 2ab - 2ac + 2bc, so the difference is 0 📝',
    wrongAnswerExplanations: {
      '2(a-b-c)': 'The expressions are identical, so their difference is 0.',
      '4abc': 'The expressions are identical, their difference is 0.',
      '-2(a-b-c)': 'The expressions are identical, their difference is 0.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 60,
  },
  {
    id: 'cl8_ch8_t2_qm5',
    type: 'mcq',
    question: 'If A = 2x - 3y and B = 4x + 5y, find the value of A + 2B',
    options: ['10x + 7y', '10x + 13y', '10x - 13y', '10x - 7y'],
    correctAnswer: '10x + 7y',
    explanation: 'A + 2B = (2x - 3y) + 2(4x + 5y) = 2x - 3y + 8x + 10y = 10x + 7y 🎯',
    wrongAnswerExplanations: {
      '10x + 13y': 'The y terms are not combined correctly (-3y + 10y = 7y, not 13y).',
      '10x - 13y': 'The signs of y terms are incorrect.',
      '10x - 7y': 'The sign of the final y term is incorrect.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 45,
  },
  {
    id: 'cl8_ch8_t2_qm6',
    type: 'mcq',
    question: 'Expand: (p - q)³',
    options: ['p³ - 3p²q + 3pq² - q³', 'p³ - 3p²q - 3pq² - q³', 'p³ + 3p²q - 3pq² + q³', 'p³ - 3p²q + 3pq² + q³'],
    correctAnswer: 'p³ - 3p²q + 3pq² - q³',
    explanation: '(p-q)³ = p³ - 3p²q + 3pq² - q³ using the binomial expansion formula 🔢',
    wrongAnswerExplanations: {
      'p³ - 3p²q - 3pq² - q³': 'The sign of the third term is incorrect.',
      'p³ + 3p²q - 3pq² + q³': 'The signs of the second and fourth terms are incorrect.',
      'p³ - 3p²q + 3pq² + q³': 'The sign of the last term is incorrect.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 60,
  },
  {
    id: 'cl8_ch8_t2_qm7',
    type: 'mcq',
    question: 'Multiply: (a + b)(a² - ab + b²)',
    options: ['a³ + b³', 'a³ - b³', 'a³ + a²b + ab² + b³', 'a³ - a²b + ab² - b³'],
    correctAnswer: 'a³ + b³',
    explanation: '(a + b)(a² - ab + b²) = a³ - a²b + ab² + a²b - ab² + b³ = a³ + b³ 🧮',
    wrongAnswerExplanations: {
      'a³ - b³': 'The sign of b³ is incorrect.',
      'a³ + a²b + ab² + b³': 'The middle terms cancel out.',
      'a³ - a²b + ab² - b³': 'The middle terms cancel out and b³ sign is wrong.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 60,
  },
  {
    id: 'cl8_ch8_t2_qm8',
    type: 'mcq',
    question: 'Simplify: (x - y)(x + y) - 2xy',
    options: ['x² - y² - 2xy', 'x² - y² - 4xy', 'x² + y² - 2xy', 'x² - y²'],
    correctAnswer: 'x² - y² - 2xy',
    explanation: '(x - y)(x + y) - 2xy = x² - y² - 2xy, using (a-b)(a+b) = a² - b² 📊',
    wrongAnswerExplanations: {
      'x² - y² - 4xy': 'The coefficient of xy is incorrect.',
      'x² + y² - 2xy': 'The sign of y² is incorrect.',
      'x² - y²': 'The -2xy term is missing.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 45,
  },
  {
    id: 'cl8_ch8_t2_qm9',
    type: 'mcq',
    question: 'Find the product: (2x + 5y)(3x - 2y)',
    options: ['6x² + 11xy - 10y²', '6x² - 11xy - 10y²', '6x² + 15xy - 10y²', '6x² - 15xy + 10y²'],
    correctAnswer: '6x² + 11xy - 10y²',
    explanation: '(2x + 5y)(3x - 2y) = 6x² - 4xy + 15xy - 10y² = 6x² + 11xy - 10y² 🔍',
    wrongAnswerExplanations: {
      '6x² - 11xy - 10y²': 'The sign of the middle term is incorrect.',
      '6x² + 15xy - 10y²': 'The coefficient of xy is incorrect (-4xy + 15xy = 11xy, not 15xy).',
      '6x² - 15xy + 10y²': 'All signs after the first term are incorrect.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 45,
  },
  {
    id: 'cl8_ch8_t2_qm10',
    type: 'mcq',
    question: 'If m = 3p - 4q and n = 2p + 5q, find m - n',
    options: ['p - 9q', '5p - q', 'p - 4q', '3p - 7q'],
    correctAnswer: 'p - 9q',
    explanation: 'm - n = (3p - 4q) - (2p + 5q) = 3p - 4q - 2p - 5q = p - 9q 📏',
    wrongAnswerExplanations: {
      '5p - q': 'Both p and q terms are combined incorrectly.',
      'p - 4q': 'The q terms are not combined correctly (-4q - 5q = -9q, not -4q).',
      '3p - 7q': 'The p terms are not combined correctly (3p - 2p = p, not 3p).'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 45,
  },
  {
    id: 'cl8_ch8_t2_qm11',
    type: 'mcq',
    question: 'Expand (3x - 2y)²',
    options: ['9x² - 12xy + 4y²', '9x² + 12xy + 4y²', '9x² - 12xy - 4y²', '9x² + 4y²'],
    correctAnswer: '9x² - 12xy + 4y²',
    explanation: '(3x - 2y)² = (3x)² - 2(3x)(2y) + (2y)² = 9x² - 12xy + 4y² 🧩',
    wrongAnswerExplanations: {
      '9x² + 12xy + 4y²': 'The sign of the middle term is incorrect.',
      '9x² - 12xy - 4y²': 'The sign of the last term is incorrect.',
      '9x² + 4y²': 'The middle term -12xy is missing.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 45,
  },
  {
    id: 'cl8_ch8_t2_qm12',
    type: 'mcq',
    question: 'Simplify: (x + y + z)² - (x² + y² + z²)',
    options: ['2(xy + yz + zx)', '2(xy - yz - zx)', '2(xy - yz + zx)', 'xy + yz + zx'],
    correctAnswer: '2(xy + yz + zx)',
    explanation: '(x + y + z)² = x² + y² + z² + 2xy + 2yz + 2zx, so the result is 2(xy + yz + zx) 📊',
    wrongAnswerExplanations: {
      '2(xy - yz - zx)': 'The signs of yz and zx terms are incorrect.',
      '2(xy - yz + zx)': 'The sign of yz term is incorrect.',
      'xy + yz + zx': 'The coefficient 2 is missing.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 60,
  },
  {
    id: 'cl8_ch8_t2_qm13',
    type: 'mcq',
    question: 'Find the value of (a - b)(a + b) + ab',
    options: ['a² - b² + ab', 'a² + b²', 'a² - b²', 'a² + ab - b²'],
    correctAnswer: 'a² - b² + ab',
    explanation: '(a - b)(a + b) + ab = a² - b² + ab 🔢',
    wrongAnswerExplanations: {
      'a² + b²': 'The sign of b² is incorrect and ab term is missing.',
      'a² - b²': 'The ab term is missing.',
      'a² + ab - b²': 'The terms are not in correct order.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 45,
  },
  {
    id: 'cl8_ch8_t2_qm14',
    type: 'mcq',
    question: 'Multiply: (x² - 2)(x² + 2)',
    options: ['x⁴ - 4', 'x⁴ + 4', 'x⁴ - x² - 4', 'x⁴ - 2x² - 4'],
    correctAnswer: 'x⁴ - 4',
    explanation: '(x² - 2)(x² + 2) = (x²)² - 2² = x⁴ - 4 using (a-b)(a+b) = a² - b² 🎯',
    wrongAnswerExplanations: {
      'x⁴ + 4': 'The sign of the constant term is incorrect.',
      'x⁴ - x² - 4': 'The middle term should not exist in (a+b)(a-b).',
      'x⁴ - 2x² - 4': 'The middle term should not exist in (a+b)(a-b).'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 45,
  },
  {
    id: 'cl8_ch8_t2_qm15',
    type: 'mcq',
    question: 'If P = 5m² - 3mn + 2n² and Q = 3m² + 4mn - n², find the value of P - Q',
    options: ['2m² - 7mn + 3n²', '2m² + 7mn + 3n²', '8m² - 7mn + n²', '8m² + mn + n²'],
    correctAnswer: '2m² - 7mn + 3n²',
    explanation: 'P - Q = (5m² - 3mn + 2n²) - (3m² + 4mn - n²) = 2m² - 7mn + 3n² 🧮',
    wrongAnswerExplanations: {
      '2m² + 7mn + 3n²': 'The sign of the middle term is incorrect.',
      '8m² - 7mn + n²': 'The m² and n² terms are incorrect.',
      '8m² + mn + n²': 'All terms are combined incorrectly.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 60,
  },
  {
    id: 'cl8_ch8_t2_qm16',
    type: 'mcq',
    question: 'Expand and simplify: (1 + x)(1 - x + x²)',
    options: ['1 + x³', '1 - x³', '1 + x + x² + x³', '1 - x - x² - x³'],
    correctAnswer: '1 + x³',
    explanation: '(1 + x)(1 - x + x²) = 1 - x + x² + x - x² + x³ = 1 + x³ 📝',
    wrongAnswerExplanations: {
      '1 - x³': 'The sign of x³ is incorrect.',
      '1 + x + x² + x³': 'The middle terms cancel out.',
      '1 - x - x² - x³': 'All signs after 1 are incorrect.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 60,
  },
  {
    id: 'cl8_ch8_t2_qm17',
    type: 'mcq',
    question: 'Subtract 4a² - 3ab + 5b² from 9a² + 2ab - 3b²',
    options: ['5a² + 5ab - 8b²', '5a² - 5ab - 8b²', '5a² - ab - 8b²', '5a² + 5ab - 2b²'],
    correctAnswer: '5a² + 5ab - 8b²',
    explanation: '(9a² + 2ab - 3b²) - (4a² - 3ab + 5b²) = 5a² + 5ab - 8b² 📊',
    wrongAnswerExplanations: {
      '5a² - 5ab - 8b²': 'The sign of the middle term is incorrect.',
      '5a² - ab - 8b²': 'The coefficient of ab term is incorrect.',
      '5a² + 5ab - 2b²': 'The coefficient of b² term is incorrect.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 45,
  },
  {
    id: 'cl8_ch8_t2_qm18',
    type: 'mcq',
    question: 'Simplify: (2x - 3)² + (2x + 3)²',
    options: ['8x² + 18', '4x² + 18', '8x² - 18', '8x² - 12x + 18'],
    correctAnswer: '8x² + 18',
    explanation: '(2x - 3)² + (2x + 3)² = 4x² - 12x + 9 + 4x² + 12x + 9 = 8x² + 18 🔍',
    wrongAnswerExplanations: {
      '4x² + 18': 'The coefficient of x² is incorrect (4x² + 4x² = 8x²).',
      '8x² - 18': 'The sign of the constant term is incorrect.',
      '8x² - 12x + 18': 'The middle terms cancel out (-12x + 12x = 0).'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 60,
  },
  {
    id: 'cl8_ch8_t2_qm19',
    type: 'mcq',
    question: 'If A = 2x² - 3xy + 4y² and B = 5x² + 2xy - y², what is A + B?',
    options: ['7x² - xy + 3y²', '7x² - 5xy + 3y²', '7x² + 5xy + 3y²', '3x² - xy + 5y²'],
    correctAnswer: '7x² - xy + 3y²',
    explanation: 'A + B = (2x² - 3xy + 4y²) + (5x² + 2xy - y²) = 7x² - xy + 3y² 🧩',
    wrongAnswerExplanations: {
      '7x² - 5xy + 3y²': 'The coefficient of xy term is incorrect (-3xy + 2xy = -xy).',
      '7x² + 5xy + 3y²': 'The sign of xy term is incorrect.',
      '3x² - xy + 5y²': 'The coefficients of x² and y² terms are incorrect.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 45,
  },
  {
    id: 'cl8_ch8_t2_qm20',
    type: 'mcq',
    question: 'The expression x³y + xy³ can be factored as:',
    options: ['xy(x² + y²)', 'xy(x - y)(x + y)', 'xy(x² - y²)', '(x + y)(xy)'],
    correctAnswer: 'xy(x² + y²)',
    explanation: 'x³y + xy³ = xy(x² + y²) by taking out the common factor xy 📏',
    wrongAnswerExplanations: {
      'xy(x - y)(x + y)': 'This gives x³y - xy³, not x³y + xy³.',
      'xy(x² - y²)': 'This gives x³y - xy³, not x³y + xy³.',
      '(x + y)(xy)': 'This gives x²y + xy², not x³y + xy³.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 45,
  }
];
