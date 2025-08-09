import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
  {
    id: 'cl8_ch8_t2_qe1',
    type: 'mcq',
    question: 'What is the sum of 3x + 2y and 4x - 5y?',
    options: ['7x - 3y', '7x + 3y', '7x - 7y', '1x - 7y'],
    correctAnswer: '7x - 3y',
    explanation: 'Add like terms: (3x + 4x) + (2y - 5y) = 7x - 3y 🧮',
    wrongAnswerExplanations: {
      '7x + 3y': 'The sign of y terms is incorrect when combining 2y - 5y.',
      '7x - 7y': 'The y terms are not combined correctly (-5y + 2y ≠ -7y).',
      '1x - 7y': 'The x terms are not combined correctly (3x + 4x = 7x, not 1x).'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30,
  },
  {
    id: 'cl8_ch8_t2_qe2',
    type: 'mcq',
    question: 'Find the difference: (5a - 3b) - (2a - 7b)',
    options: ['3a + 4b', '3a - 4b', '7a - 10b', '7a + 4b'],
    correctAnswer: '3a + 4b',
    explanation: 'Subtract like terms: (5a - 2a) + (-3b - (-7b)) = 3a + 4b 📊',
    wrongAnswerExplanations: {
      '3a - 4b': 'The sign of b terms is incorrect after subtracting -7b.',
      '7a - 10b': 'The terms are added instead of subtracted.',
      '7a + 4b': 'The a terms are not combined correctly (5a - 2a = 3a, not 7a).'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30,
  },
  {
    id: 'cl8_ch8_t2_qe3',
    type: 'mcq',
    question: 'Simplify: 3(x + 2) - 2(x - 5)',
    options: ['x + 16', 'x - 16', '5x + 16', '5x - 16'],
    correctAnswer: 'x + 16',
    explanation: '3(x + 2) - 2(x - 5) = 3x + 6 - 2x + 10 = x + 16 🔍',
    wrongAnswerExplanations: {
      'x - 16': 'The signs are incorrect when combining terms.',
      '5x + 16': 'The x terms are not combined correctly (3x - 2x = x, not 5x).',
      '5x - 16': 'Both the x terms and constant terms are incorrect.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 45,
  },
  {
    id: 'cl8_ch8_t2_qe4',
    type: 'mcq',
    question: 'What is the product of 2x and 3y?',
    options: ['6xy', '5xy', '6(x + y)', '5x + y'],
    correctAnswer: '6xy',
    explanation: '2x × 3y = 2 × 3 × x × y = 6xy 🎯',
    wrongAnswerExplanations: {
      '5xy': 'The coefficients are multiplied incorrectly (2 × 3 = 6, not 5).',
      '6(x + y)': 'This represents addition, not multiplication.',
      '5x + y': 'This represents addition with incorrect coefficients.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30,
  },
  {
    id: 'cl8_ch8_t2_qe5',
    type: 'mcq',
    question: 'Simplify: (3a + 2b) + (5a - 4b)',
    options: ['8a - 2b', '8a + 2b', '2a - 2b', '8a - 6b'],
    correctAnswer: '8a - 2b',
    explanation: 'Add like terms: (3a + 5a) + (2b - 4b) = 8a - 2b 🧩',
    wrongAnswerExplanations: {
      '8a + 2b': 'The sign of b terms is incorrect when combining.',
      '2a - 2b': 'The a terms are not combined correctly (3a + 5a = 8a, not 2a).',
      '8a - 6b': 'The b terms are combined incorrectly (2b - 4b = -2b, not -6b).'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30,
  },
  {
    id: 'cl8_ch8_t2_qe6',
    type: 'mcq',
    question: 'Find the product: (x + 3)(x + 2)',
    options: ['x² + 5x + 6', 'x² + 5x - 6', '2x² + 5x', 'x² + 3x + 2'],
    correctAnswer: 'x² + 5x + 6',
    explanation: '(x + 3)(x + 2) = x² + 2x + 3x + 6 = x² + 5x + 6 📐',
    wrongAnswerExplanations: {
      'x² + 5x - 6': 'The constant term has wrong sign (should be +6).',
      '2x² + 5x': 'The x² term is incorrect and constant term is missing.',
      'x² + 3x + 2': 'The middle term is incorrect (should be 5x).'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 45,
  },
  {
    id: 'cl8_ch8_t2_qe7',
    type: 'mcq',
    question: 'Simplify: 5p - 3q + 2p + 7q',
    options: ['7p + 4q', '7p - 4q', '3p + 4q', '3p - 10q'],
    correctAnswer: '7p + 4q',
    explanation: 'Combine like terms: (5p + 2p) + (-3q + 7q) = 7p + 4q 🧮',
    wrongAnswerExplanations: {
      '7p - 4q': 'The sign of q terms is incorrect.',
      '3p + 4q': 'The p terms are not combined correctly (5p + 2p = 7p, not 3p).',
      '3p - 10q': 'Both p and q terms are combined incorrectly.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30,
  },
  {
    id: 'cl8_ch8_t2_qe8',
    type: 'mcq',
    question: 'What is the result of multiplying 2(a + b) by 3?',
    options: ['6a + 6b', '6a - 6b', '5a + 5b', '6a + 3b'],
    correctAnswer: '6a + 6b',
    explanation: '3 × 2(a + b) = 6(a + b) = 6a + 6b 📊',
    wrongAnswerExplanations: {
      '6a - 6b': 'The sign of b term is incorrect.',
      '5a + 5b': 'The coefficients are incorrect (2 × 3 = 6, not 5).',
      '6a + 3b': 'The coefficient of b term is incorrect (should be 6).'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30,
  },
  {
    id: 'cl8_ch8_t2_qe9',
    type: 'mcq',
    question: 'Find the sum of 3x² - 2x + 5 and 2x² + 4x - 3',
    options: ['5x² + 2x + 2', '5x² - 2x + 2', '5x² + 6x + 2', '1x² + 2x + 2'],
    correctAnswer: '5x² + 2x + 2',
    explanation: '(3x² + 2x²) + (-2x + 4x) + (5 - 3) = 5x² + 2x + 2 🎯',
    wrongAnswerExplanations: {
      '5x² - 2x + 2': 'The middle term is incorrect (-2x + 4x = 2x).',
      '5x² + 6x + 2': 'The middle term is incorrect (-2x + 4x = 2x, not 6x).',
      '1x² + 2x + 2': 'The x² term is incorrect (3x² + 2x² = 5x², not 1x²).'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 45,
  },
  {
    id: 'cl8_ch8_t2_qe10',
    type: 'mcq',
    question: 'Subtract 3a - 5b from 8a + 2b',
    options: ['5a + 7b', '5a - 7b', '11a - 3b', '11a - 7b'],
    correctAnswer: '5a + 7b',
    explanation: '(8a + 2b) - (3a - 5b) = 8a + 2b - 3a + 5b = 5a + 7b 📝',
    wrongAnswerExplanations: {
      '5a - 7b': 'The sign of b terms is incorrect after subtraction.',
      '11a - 3b': 'The terms are added instead of subtracted.',
      '11a - 7b': 'Both a and b terms are combined incorrectly.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 40,
  },
  {
    id: 'cl8_ch8_t2_qe11',
    type: 'mcq',
    question: 'Multiply: x(x + y)',
    options: ['x² + xy', 'x² - xy', '2x + xy', 'x² + y'],
    correctAnswer: 'x² + xy',
    explanation: 'x(x + y) = x × x + x × y = x² + xy 🔢',
    wrongAnswerExplanations: {
      'x² - xy': 'The sign of xy term is incorrect.',
      '2x + xy': 'The x² term is incorrect (x × x = x², not 2x).',
      'x² + y': 'The xy term is missing.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30,
  },
  {
    id: 'cl8_ch8_t2_qe12',
    type: 'mcq',
    question: 'What is the value of 2x - 3y + 5x - 2y?',
    options: ['7x - 5y', '7x + 5y', '3x - 5y', '3x - y'],
    correctAnswer: '7x - 5y',
    explanation: 'Combine like terms: (2x + 5x) + (-3y - 2y) = 7x - 5y 🧩',
    wrongAnswerExplanations: {
      '7x + 5y': 'The sign of y terms is incorrect.',
      '3x - 5y': 'The x terms are not combined correctly (2x + 5x = 7x, not 3x).',
      '3x - y': 'Both x and y terms are combined incorrectly.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30,
  },
  {
    id: 'cl8_ch8_t2_qe13',
    type: 'mcq',
    question: 'What is (a + b)² equal to?',
    options: ['a² + 2ab + b²', 'a² - b²', 'a² + b²', '2a + 2b'],
    correctAnswer: 'a² + 2ab + b²',
    explanation: '(a + b)² = (a + b)(a + b) = a² + ab + ab + b² = a² + 2ab + b² 📊',
    wrongAnswerExplanations: {
      'a² - b²': 'This is (a+b)(a-b), not (a+b)².',
      'a² + b²': 'The middle term 2ab is missing.',
      '2a + 2b': 'This is 2(a+b), not (a+b)².'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 45,
  },
  {
    id: 'cl8_ch8_t2_qe14',
    type: 'mcq',
    question: 'Find the product of (x + 2) and (x - 3)',
    options: ['x² - x - 6', 'x² + x - 6', 'x² - x + 6', 'x² + x + 6'],
    correctAnswer: 'x² - x - 6',
    explanation: '(x + 2)(x - 3) = x² - 3x + 2x - 6 = x² - x - 6 🧮',
    wrongAnswerExplanations: {
      'x² + x - 6': 'The sign of x term is incorrect.',
      'x² - x + 6': 'The sign of constant term is incorrect.',
      'x² + x + 6': 'Both x term and constant term signs are incorrect.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 45,
  },
  {
    id: 'cl8_ch8_t2_qe15',
    type: 'mcq',
    question: 'Simplify: 3(2x - y) - 2(x + 3y)',
    options: ['4x - 9y', '4x + 9y', 'x - 9y', 'x + 9y'],
    correctAnswer: '4x - 9y',
    explanation: '3(2x - y) - 2(x + 3y) = 6x - 3y - 2x - 6y = 4x - 9y 📏',
    wrongAnswerExplanations: {
      '4x + 9y': 'The sign of y terms is incorrect.',
      'x - 9y': 'The x terms are not combined correctly (6x - 2x = 4x, not x).',
      'x + 9y': 'Both x terms and y terms signs are incorrect.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 45,
  },
  {
    id: 'cl8_ch8_t2_qe16',
    type: 'mcq',
    question: 'What is the coefficient of x in the expression 7x - 3y + 5?',
    options: ['7', '3', '-3', '5'],
    correctAnswer: '7',
    explanation: 'The coefficient is the number that multiplies the variable, so for 7x it is 7 🔍',
    wrongAnswerExplanations: {
      '3': 'This is the coefficient of y with wrong sign.',
      '-3': 'This is the coefficient of y.',
      '5': 'This is the constant term.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30,
  },
  {
    id: 'cl8_ch8_t2_qe17',
    type: 'mcq',
    question: 'Find the sum of like terms in 3a + 7b - 2a + 5b',
    options: ['a + 12b', 'a - 12b', '5a + 12b', '5a - 2b'],
    correctAnswer: 'a + 12b',
    explanation: 'Combine like terms: (3a - 2a) + (7b + 5b) = a + 12b 🎯',
    wrongAnswerExplanations: {
      'a - 12b': 'The sign of b terms is incorrect.',
      '5a + 12b': 'The a terms are combined incorrectly (3a - 2a = a, not 5a).',
      '5a - 2b': 'Both a and b terms are combined incorrectly.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30,
  },
  {
    id: 'cl8_ch8_t2_qe18',
    type: 'mcq',
    question: 'What is the constant term in 4x² + 3xy - 7?',
    options: ['-7', '4', '3', '0'],
    correctAnswer: '-7',
    explanation: 'The constant term is the term without variables, which is -7 🧩',
    wrongAnswerExplanations: {
      '4': 'This is the coefficient of x².',
      '3': 'This is the coefficient of xy.',
      '0': 'There is a constant term -7, not 0.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30,
  },
  {
    id: 'cl8_ch8_t2_qe19',
    type: 'mcq',
    question: 'Find the product: (p - 2)(p + 5)',
    options: ['p² + 3p - 10', 'p² - 3p - 10', 'p² + 7p - 10', 'p² + 3p + 10'],
    correctAnswer: 'p² + 3p - 10',
    explanation: '(p - 2)(p + 5) = p² + 5p - 2p - 10 = p² + 3p - 10 📊',
    wrongAnswerExplanations: {
      'p² - 3p - 10': 'The sign of middle term is incorrect.',
      'p² + 7p - 10': 'The middle term is incorrect (5p - 2p = 3p, not 7p).',
      'p² + 3p + 10': 'The sign of constant term is incorrect.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 45,
  },
  {
    id: 'cl8_ch8_t2_qe20',
    type: 'mcq',
    question: 'Simplify: 2(x + 3) + 3(x - 2)',
    options: ['5x + 0', '5x + 6', '5x - 6', '5x - 0'],
    correctAnswer: '5x + 0',
    explanation: '2(x + 3) + 3(x - 2) = 2x + 6 + 3x - 6 = 5x + 0 = 5x 🔢',
    wrongAnswerExplanations: {
      '5x + 6': 'The constant terms cancel out (6 - 6 = 0).',
      '5x - 6': 'The constant terms cancel out (6 - 6 = 0).',
      '5x - 0': 'Zero can be omitted but is not negative.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 45,
  }
];
