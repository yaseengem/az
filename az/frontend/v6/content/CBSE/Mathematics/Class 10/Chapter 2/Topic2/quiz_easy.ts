import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
  {
    id: 'cl10_ch2_t2_qe1',
    type: 'mcq',
    question: 'If the zeros of a quadratic polynomial p(x) = x² + bx + c are α and β, then α + β = ?',
    options: ['-b', 'b', '-c', 'c'],
    correctAnswer: '-b',
    explanation: 'The sum of zeros equals -b/a, and here a = 1, so α + β = -b.',
    wrongAnswerExplanations: {
      'b': 'The sum of zeros is -b/a, not b.',
      '-c': 'The product of zeros equals c/a, not -c.',
      'c': 'This is the value of the product of zeros divided by a, not the sum.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch2_t2_qe2',
    type: 'mcq',
    question: 'If α and β are the zeros of p(x) = x² - 5x + 6, then αβ = ?',
    options: ['6', '5', '-6', '-5'],
    correctAnswer: '6',
    explanation: 'The product of zeros equals c/a, here a = 1 and c = 6, so αβ = 6.',
    wrongAnswerExplanations: {
      '5': 'The coefficient of x gives us the sum of zeros, not their product.',
      '-6': 'The product of zeros is c/a, which is positive here.',
      '-5': 'This is not the correct product of zeros.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch2_t2_qe3',
    type: 'mcq',
    question: 'If the zeros of p(x) = 2x² - 7x + 3 are α and β, then α + β = ?',
    options: ['3.5', '7', '3', '1.5'],
    correctAnswer: '3.5',
    explanation: 'The sum of zeros equals -b/a = -(-7)/2 = 7/2 = 3.5',
    wrongAnswerExplanations: {
      '7': 'The sum of zeros is -b/a, not b.',
      '3': 'This is the value of c, not the sum of zeros.',
      '1.5': 'The product of zeros equals c/a = 3/2 = 1.5, not the sum.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch2_t2_qe4',
    type: 'mcq',
    question: 'If the zeros of p(x) = x² - 3x - 10 are α and β, then αβ = ?',
    options: ['-10', '10', '3', '-3'],
    correctAnswer: '-10',
    explanation: 'The product of zeros equals c/a, here a = 1 and c = -10, so αβ = -10.',
    wrongAnswerExplanations: {
      '10': 'The product of zeros is c/a which equals -10, not 10.',
      '3': 'This is related to the sum of zeros, not their product.',
      '-3': 'This is the coefficient of x with opposite sign, not the product.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch2_t2_qe5',
    type: 'mcq',
    question: 'If α and β are the zeros of x² - kx + 16, and α + β = 8, the value of k is:',
    options: ['8', '16', '4', '2'],
    correctAnswer: '8',
    explanation: 'Sum of zeros α + β = 8 = -b/a = -(-k)/1 = k, therefore k = 8.',
    wrongAnswerExplanations: {
      '16': 'This is the value of constant term c, not k.',
      '4': 'This is not the correct value of k.',
      '2': 'This is not the correct value of k.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch2_t2_qe6',
    type: 'mcq',
    question: 'For a quadratic polynomial with zeros 2 and -3, which is the correct polynomial?',
    options: ['x² + x - 6', 'x² - x - 6', 'x² - x + 6', 'x² + x + 6'],
    correctAnswer: 'x² + x - 6',
    explanation: 'If zeros are 2 and -3, then p(x) = (x-2)(x+3) = x² + x - 6.',
    wrongAnswerExplanations: {
      'x² - x - 6': 'This polynomial doesn\'t have zeros at 2 and -3.',
      'x² - x + 6': 'This polynomial doesn\'t have zeros at 2 and -3.',
      'x² + x + 6': 'This polynomial doesn\'t have zeros at 2 and -3.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch2_t2_qe7',
    type: 'mcq',
    question: 'If the sum and product of zeros of ax² + bx + c are 3 and -2 respectively, then:',
    options: ['b = -3a and c = -2a', 'b = 3a and c = -2a', 'b = 3a and c = 2a', 'b = -3a and c = 2a'],
    correctAnswer: 'b = -3a and c = -2a',
    explanation: 'Sum of zeros = -b/a = 3, so b = -3a. Product of zeros = c/a = -2, so c = -2a.',
    wrongAnswerExplanations: {
      'b = 3a and c = -2a': 'The sum of zeros is -b/a, so b = -3a not 3a.',
      'b = 3a and c = 2a': 'Both relations are incorrect.',
      'b = -3a and c = 2a': 'The product of zeros is c/a = -2, so c = -2a not 2a.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch2_t2_qe8',
    type: 'mcq',
    question: 'If α and β are the zeros of p(x) = 3x² - 2x - 1, then α² + β² = ?',
    options: ['2/3', '4/9', '2', '4/3'],
    correctAnswer: '2/3',
    explanation: '(α+β)² - 2αβ = (2/3)² - 2(-1/3) = 4/9 + 2/3 = 6/9 = 2/3',
    wrongAnswerExplanations: {
      '4/9': 'This is the value of (α+β)², not α²+β².',
      '2': 'This is not the correct value.',
      '4/3': 'This is not the correct value.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch2_t2_qe9',
    type: 'mcq',
    question: 'A quadratic polynomial whose zeros are 4 and -5 is:',
    options: ['x² + x - 20', 'x² - x - 20', 'x² + x + 20', 'x² - x + 20'],
    correctAnswer: 'x² + x - 20',
    explanation: 'If zeros are 4 and -5, p(x) = (x-4)(x+5) = x² + x - 20.',
    wrongAnswerExplanations: {
      'x² - x - 20': 'This polynomial has zeros at -4 and 5, not 4 and -5.',
      'x² + x + 20': 'This polynomial has no real zeros.',
      'x² - x + 20': 'This polynomial has no real zeros.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch2_t2_qe10',
    type: 'mcq',
    question: 'If the zeros of the quadratic polynomial p(x) = x² + px + q are in the ratio 1:2, then:',
    options: ['2q = p²/9', '9q = p²', 'q = 2p²', '2q = p²'],
    correctAnswer: '2q = p²/9',
    explanation: 'If zeros are in ratio 1:2, then α = k and β = 2k. Using relations, we get 2q = p²/9.',
    wrongAnswerExplanations: {
      '9q = p²': 'This relation is not correct for zeros in ratio 1:2.',
      'q = 2p²': 'This relation is not correct for zeros in ratio 1:2.',
      '2q = p²': 'This relation is not correct for zeros in ratio 1:2.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch2_t2_qe11',
    type: 'mcq',
    question: 'If one zero of the quadratic polynomial p(x) = x² - 3x + k is 2, then the value of k is:',
    options: ['2', '4', '-2', '6'],
    correctAnswer: '2',
    explanation: 'If x = 2 is a zero, then p(2) = 0, so 2² - 3(2) + k = 0. Solving, k = 2.',
    wrongAnswerExplanations: {
      '4': 'This value of k doesn\'t make x = 2 a zero of the polynomial.',
      '-2': 'This value of k doesn\'t make x = 2 a zero of the polynomial.',
      '6': 'This value of k doesn\'t make x = 2 a zero of the polynomial.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch2_t2_qe12',
    type: 'mcq',
    question: 'The quadratic polynomial whose sum of zeros is 7 and product is 12 is:',
    options: ['x² - 7x + 12', 'x² + 7x + 12', 'x² - 7x - 12', 'x² + 7x - 12'],
    correctAnswer: 'x² - 7x + 12',
    explanation: 'If sum = 7 and product = 12, then p(x) = x² - (sum)x + product = x² - 7x + 12.',
    wrongAnswerExplanations: {
      'x² + 7x + 12': 'The sum of zeros would be -7, not 7.',
      'x² - 7x - 12': 'The product of zeros would be -12, not 12.',
      'x² + 7x - 12': 'The sum would be -7 and product -12, both incorrect.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch2_t2_qe13',
    type: 'mcq',
    question: 'If α and β are the zeros of p(x) = x² - 5x + 4, then α² + β² = ?',
    options: ['17', '25', '8', '9'],
    correctAnswer: '17',
    explanation: 'α² + β² = (α+β)² - 2αβ = (5)² - 2(4) = 25 - 8 = 17',
    wrongAnswerExplanations: {
      '25': 'This is just (α+β)², not considering the 2αβ term.',
      '8': 'This is the value of 2αβ, not α²+β².',
      '9': 'This is not the correct value.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch2_t2_qe14',
    type: 'mcq',
    question: 'If the zeros of ax² + bx + c are -3 and 4, then:',
    options: ['b = -a', 'c = -12a', 'b = a', 'c = 12a'],
    correctAnswer: 'b = -a',
    explanation: 'Sum of zeros = -3 + 4 = 1 = -b/a, so b = -a.',
    wrongAnswerExplanations: {
      'c = -12a': 'Product of zeros = -3 × 4 = -12 = c/a, so c = -12a, not -c.',
      'b = a': 'The sum of zeros is 1 = -b/a, so b = -a, not b = a.',
      'c = 12a': 'The product is -12, not 12.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch2_t2_qe15',
    type: 'mcq',
    question: 'If α and β are the zeros of p(x) = 2x² - 5x + 3, then α²β + αβ² = ?',
    options: ['3', '5/2', '6', '15/4'],
    explanation: 'α²β + αβ² = αβ(α+β) = (c/a)(-b/a) = (3/2)(-(-5)/2) = (3/2)(5/2) = 15/4',
    wrongAnswerExplanations: {
      '3': 'This is the value of c, not α²β + αβ².',
      '5/2': 'This is related to the sum of zeros, not the given expression.',
      '6': 'This is not the correct value.'
    },
    correctAnswer: '15/4',
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch2_t2_qe16',
    type: 'mcq',
    question: 'A quadratic polynomial whose sum of zeros is 0 and product is 4 is:',
    options: ['x² + 4', 'x² - 4', 'x² + 4x', 'x² - 4x'],
    correctAnswer: 'x² + 4',
    explanation: 'If sum = 0 and product = 4, then p(x) = x² - 0x + 4 = x² + 4.',
    wrongAnswerExplanations: {
      'x² - 4': 'This polynomial has zeros ±2, sum 0 but product -4, not 4.',
      'x² + 4x': 'This polynomial has zeros 0 and -4, sum -4 not 0.',
      'x² - 4x': 'This polynomial has zeros 0 and 4, sum 4 not 0.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch2_t2_qe17',
    type: 'mcq',
    question: 'If α and β are the zeros of p(x) = x² + x + 1, then 1/α + 1/β = ?',
    options: ['-1', '1', '-2', '2'],
    correctAnswer: '-1',
    explanation: '1/α + 1/β = (α+β)/(αβ) = (-b/a)/(c/a) = -b/c = -1/1 = -1',
    wrongAnswerExplanations: {
      '1': 'This is not the correct value.',
      '-2': 'This is not the correct value.',
      '2': 'This is not the correct value.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch2_t2_qe18',
    type: 'mcq',
    question: 'What is the condition for the quadratic polynomial ax² + bx + c to have equal zeros?',
    options: ['b² = 4ac', 'b² < 4ac', 'b² > 4ac', 'b = 2ac'],
    correctAnswer: 'b² = 4ac',
    explanation: 'Equal zeros occur when the discriminant b² - 4ac = 0, so b² = 4ac.',
    wrongAnswerExplanations: {
      'b² < 4ac': 'This condition gives no real zeros.',
      'b² > 4ac': 'This condition gives two distinct real zeros.',
      'b = 2ac': 'This is not the correct condition for equal zeros.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch2_t2_qe19',
    type: 'mcq',
    question: 'If α and β are the zeros of p(x) = 2x² - 7x + 6, then the value of α²β² is:',
    options: ['9', '6', '3', '36/4'],
    correctAnswer: '9',
    explanation: 'α²β² = (αβ)² = (c/a)² = (6/2)² = 3² = 9',
    wrongAnswerExplanations: {
      '6': 'This is the value of c, not α²β².',
      '3': 'This is the value of c/a, not (c/a)².',
      '36/4': 'This is not the correct simplification of (c/a)².'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch2_t2_qe20',
    type: 'mcq',
    question: 'The polynomial p(x) = ax² + bx + c has zeros -2 and 3. If a = 2, then the value of b is:',
    options: ['-2', '2', '-1', '1'],
    correctAnswer: '-2',
    explanation: 'Sum of zeros = -2 + 3 = 1 = -b/a. Since a = 2, b = -2.',
    wrongAnswerExplanations: {
      '2': 'If b = 2, the sum of zeros would be -1, not 1.',
      '-1': 'If b = -1, the sum of zeros would be 1/2, not 1.',
      '1': 'If b = 1, the sum of zeros would be -1/2, not 1.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  }
];
