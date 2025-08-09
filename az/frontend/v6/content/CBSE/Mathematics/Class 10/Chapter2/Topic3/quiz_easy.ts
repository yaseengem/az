import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
  {
    id: 'cl10_ch2_t3_qe1',
    type: 'mcq',
    question: 'In the polynomial division p(x) ÷ g(x), what is the name of p(x)?',
    options: [
      'Dividend',
      'Divisor',
      'Quotient',
      'Remainder'
    ],
    correctAnswer: 'Dividend',
    explanation: 'In polynomial division p(x) ÷ g(x), p(x) is called the dividend as it is being divided.',
    wrongAnswerExplanations: {
      'Divisor': 'The divisor is g(x), which divides the dividend p(x).',
      'Quotient': 'The quotient is the result q(x) of the division p(x) ÷ g(x).',
      'Remainder': 'The remainder is what is left after dividing p(x) by g(x).'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch2_t3_qe2',
    type: 'mcq',
    question: 'According to the division algorithm, when polynomial p(x) is divided by g(x), we get:',
    options: [
      'p(x) = g(x) × q(x) + r(x), where degree of r(x) < degree of g(x)',
      'p(x) = g(x) × q(x) - r(x), where degree of r(x) < degree of g(x)',
      'p(x) = g(x) ÷ q(x) + r(x), where degree of r(x) < degree of g(x)',
      'p(x) = g(x) + q(x) × r(x), where degree of r(x) < degree of g(x)'
    ],
    correctAnswer: 'p(x) = g(x) × q(x) + r(x), where degree of r(x) < degree of g(x)',
    explanation: 'The division algorithm states: dividend = divisor × quotient + remainder, with remainder degree less than divisor degree.',
    wrongAnswerExplanations: {
      'p(x) = g(x) × q(x) - r(x), where degree of r(x) < degree of g(x)': 'The remainder is added, not subtracted.',
      'p(x) = g(x) ÷ q(x) + r(x), where degree of r(x) < degree of g(x)': 'The divisor is multiplied by the quotient, not divided.',
      'p(x) = g(x) + q(x) × r(x), where degree of r(x) < degree of g(x)': 'The correct form is divisor × quotient + remainder.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch2_t3_qe3',
    type: 'mcq',
    question: 'When dividing a polynomial by (x - 2), what is the remainder?',
    options: [
      'The value of the polynomial at x = 2',
      'The value of the polynomial at x = -2',
      'Always 0',
      'Cannot be determined without the specific polynomial'
    ],
    correctAnswer: 'The value of the polynomial at x = 2',
    explanation: 'By the remainder theorem, when p(x) is divided by (x - a), the remainder equals p(a).',
    wrongAnswerExplanations: {
      'The value of the polynomial at x = -2': 'For division by (x - 2), the remainder equals p(2), not p(-2).',
      'Always 0': 'The remainder is not always 0, it depends on the polynomial being divided.',
      'Cannot be determined without the specific polynomial': 'While the specific value requires knowing the polynomial, we know it equals p(2).'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch2_t3_qe4',
    type: 'mcq',
    question: 'In the division algorithm, what is the maximum possible degree of the remainder when dividing by a quadratic polynomial?',
    options: [
      '1',
      '2',
      '3',
      'Depends on the degree of the dividend'
    ],
    correctAnswer: '1',
    explanation: 'The degree of the remainder must be less than the degree of the divisor (2), so it can be at most 1.',
    wrongAnswerExplanations: {
      '2': 'The remainder degree must be less than the divisor degree, which is 2 for a quadratic divisor.',
      '3': 'The remainder degree must be less than the divisor degree, not greater.',
      'Depends on the degree of the dividend': 'The remainder degree depends only on the divisor degree, not the dividend.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch2_t3_qe5',
    type: 'mcq',
    question: 'When x³ + x² - 5x + 3 is divided by x - 2, the quotient is:',
    options: [
      'x² + 3x + 1',
      'x² + 3x - 1',
      'x² - 3x + 1',
      'x² + 3x + 2'
    ],
    correctAnswer: 'x² + 3x + 1',
    explanation: 'Using synthetic division or long division, we get q(x) = x² + 3x + 1 with remainder 5.',
    wrongAnswerExplanations: {
      'x² + 3x - 1': 'The correct quotient is x² + 3x + 1, not x² + 3x - 1.',
      'x² - 3x + 1': 'The correct quotient is x² + 3x + 1, not x² - 3x + 1.',
      'x² + 3x + 2': 'The correct quotient is x² + 3x + 1, not x² + 3x + 2.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch2_t3_qe6',
    type: 'mcq',
    question: 'What is the remainder when x⁴ - 2x³ + 3x - 1 is divided by x + 2?',
    options: [
      '11',
      '-11',
      '13',
      '-13'
    ],
    correctAnswer: '11',
    explanation: 'Using remainder theorem, substitute x = -2: (-2)⁴ - 2(-2)³ + 3(-2) - 1 = 16 + 16 - 6 - 1 = 25 = 11.',
    wrongAnswerExplanations: {
      '-11': 'When calculating p(-2), the result is 11, not -11.',
      '13': 'When calculating p(-2), the result is 11, not 13.',
      '-13': 'When calculating p(-2), the result is 11, not -13.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch2_t3_qe7',
    type: 'mcq',
    question: 'If a polynomial p(x) is divided by x - a and the remainder is 0, then:',
    options: [
      'x = a is a zero of p(x)',
      'x = -a is a zero of p(x)',
      'a is the degree of p(x)',
      'p(x) is not divisible by x - a'
    ],
    correctAnswer: 'x = a is a zero of p(x)',
    explanation: 'If the remainder is 0 when dividing by x - a, then p(a) = 0, making a a zero of p(x).',
    wrongAnswerExplanations: {
      'x = -a is a zero of p(x)': 'The zero is a, not -a, when the divisor is x - a.',
      'a is the degree of p(x)': 'The value a is a zero of p(x), not its degree.',
      'p(x) is not divisible by x - a': 'If remainder is 0, then p(x) is perfectly divisible by x - a.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch2_t3_qe8',
    type: 'mcq',
    question: 'In synthetic division, what number do we use when dividing by x + 3?',
    options: [
      '-3',
      '3',
      'x + 3',
      '1/3'
    ],
    correctAnswer: '-3',
    explanation: 'When dividing by x + 3 (which equals x - (-3)), we use -3 in synthetic division.',
    wrongAnswerExplanations: {
      '3': 'For divisor x + 3, we use -3, not 3, in synthetic division.',
      'x + 3': 'In synthetic division, we use a number, not an expression. For x + 3, we use -3.',
      '1/3': 'For divisor x + 3, we use -3, not 1/3, in synthetic division.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch2_t3_qe9',
    type: 'mcq',
    question: 'If the remainder when p(x) is divided by x - 5 is 10, then p(5) equals:',
    options: [
      '10',
      '5',
      '15',
      '0'
    ],
    correctAnswer: '10',
    explanation: 'By the remainder theorem, when p(x) is divided by x - 5, the remainder equals p(5).',
    wrongAnswerExplanations: {
      '5': 'The remainder is p(5), which is given as 10, not 5.',
      '15': 'The remainder is p(5), which is given as 10, not 15.',
      '0': 'If p(5) were 0, the remainder would be 0, but it is given as 10.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch2_t3_qe10',
    type: 'mcq',
    question: 'Which of the following is essential for applying the division algorithm for polynomials?',
    options: [
      'The divisor cannot be a zero polynomial',
      'The dividend must be of higher degree than the divisor',
      'The remainder must be zero',
      'Both polynomials must have the same variable'
    ],
    correctAnswer: 'The divisor cannot be a zero polynomial',
    explanation: 'Division by zero polynomial is undefined, so the divisor must be non-zero for the algorithm to work.',
    wrongAnswerExplanations: {
      'The dividend must be of higher degree than the divisor': 'The dividend can be of lower degree, resulting in a zero quotient.',
      'The remainder must be zero': 'The remainder can be any polynomial of degree less than the divisor.',
      'Both polynomials must have the same variable': 'This is implied; we typically divide polynomials in the same variable.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch2_t3_qe11',
    type: 'mcq',
    question: 'When x³ - 27 is divided by x - 3, the remainder is:',
    options: [
      '0',
      '27',
      '-27',
      '3'
    ],
    correctAnswer: '0',
    explanation: 'x³ - 27 = (x - 3)(x² + 3x + 9), so the remainder is 0. Also, by remainder theorem, p(3) = 3³ - 27 = 0.',
    wrongAnswerExplanations: {
      '27': 'The remainder is 0 since x - 3 is a factor of x³ - 27.',
      '-27': 'The remainder is 0 since x - 3 is a factor of x³ - 27.',
      '3': 'The remainder is 0 since x - 3 is a factor of x³ - 27.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch2_t3_qe12',
    type: 'mcq',
    question: 'What is the quotient when x⁴ - 1 is divided by x - 1?',
    options: [
      'x³ + x² + x + 1',
      'x³ - x² + x - 1',
      'x³ - x² - x - 1',
      'x³ + x² - x - 1'
    ],
    correctAnswer: 'x³ + x² + x + 1',
    explanation: 'x⁴ - 1 = (x - 1)(x³ + x² + x + 1), so the quotient is x³ + x² + x + 1.',
    wrongAnswerExplanations: {
      'x³ - x² + x - 1': 'The correct quotient is x³ + x² + x + 1, not x³ - x² + x - 1.',
      'x³ - x² - x - 1': 'The correct quotient is x³ + x² + x + 1, not x³ - x² - x - 1.',
      'x³ + x² - x - 1': 'The correct quotient is x³ + x² + x + 1, not x³ + x² - x - 1.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch2_t3_qe13',
    type: 'mcq',
    question: 'If p(x) = x³ - 6x² + 11x - 6 and p(2) = 0, then what is the quotient when p(x) is divided by x - 2?',
    options: [
      'x² - 4x + 3',
      'x² + 4x + 3',
      'x² - 4x - 3',
      'x² + 4x - 3'
    ],
    correctAnswer: 'x² - 4x + 3',
    explanation: 'Since p(2) = 0, (x - 2) is a factor. Dividing p(x) by (x - 2) gives quotient x² - 4x + 3.',
    wrongAnswerExplanations: {
      'x² + 4x + 3': 'The correct quotient is x² - 4x + 3, not x² + 4x + 3.',
      'x² - 4x - 3': 'The correct quotient is x² - 4x + 3, not x² - 4x - 3.',
      'x² + 4x - 3': 'The correct quotient is x² - 4x + 3, not x² + 4x - 3.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch2_t3_qe14',
    type: 'mcq',
    question: 'What is the first step in the synthetic division process?',
    options: [
      'Writing the coefficients of the dividend',
      'Finding the value of the divisor',
      'Calculating the remainder',
      'Multiplying by the quotient'
    ],
    correctAnswer: 'Writing the coefficients of the dividend',
    explanation: 'Synthetic division begins by writing the coefficients of the dividend in descending order of powers.',
    wrongAnswerExplanations: {
      'Finding the value of the divisor': 'The value is identified from the divisor (x - a), but writing coefficients comes first.',
      'Calculating the remainder': 'The remainder is found at the end of the process, not the beginning.',
      'Multiplying by the quotient': 'Multiplication occurs during the process, not as the first step.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch2_t3_qe15',
    type: 'mcq',
    question: 'When a polynomial is divided by x - 1, the remainder is 5. What is the value of p(1)?',
    options: [
      '5',
      '1',
      '4',
      '-5'
    ],
    correctAnswer: '5',
    explanation: 'By the remainder theorem, when p(x) is divided by x - a, the remainder equals p(a).',
    wrongAnswerExplanations: {
      '1': 'The remainder equals p(1), which is given as 5, not 1.',
      '4': 'The remainder equals p(1), which is given as 5, not 4.',
      '-5': 'The remainder equals p(1), which is given as 5, not -5.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch2_t3_qe16',
    type: 'mcq',
    question: 'What is the remainder when x² + 5x + 6 is divided by x + 2?',
    options: [
      '0',
      '2',
      '-2',
      '4'
    ],
    correctAnswer: '0',
    explanation: 'x² + 5x + 6 = (x + 2)(x + 3), so the remainder is 0. Also by remainder theorem, p(-2) = 0.',
    wrongAnswerExplanations: {
      '2': 'The remainder is 0 since x + 2 is a factor of x² + 5x + 6.',
      '-2': 'The remainder is 0 since x + 2 is a factor of x² + 5x + 6.',
      '4': 'The remainder is 0 since x + 2 is a factor of x² + 5x + 6.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch2_t3_qe17',
    type: 'mcq',
    question: 'Which property allows us to say that the remainder when p(x) is divided by x - a equals p(a)?',
    options: [
      'Remainder theorem',
      'Factor theorem',
      'Division algorithm',
      'Polynomial identity'
    ],
    correctAnswer: 'Remainder theorem',
    explanation: 'The remainder theorem states that when p(x) is divided by x - a, the remainder equals p(a).',
    wrongAnswerExplanations: {
      'Factor theorem': 'The factor theorem states that x - a is a factor of p(x) if and only if p(a) = 0.',
      'Division algorithm': 'This describes the general form of polynomial division but doesn\'t specifically state the remainder equals p(a).',
      'Polynomial identity': 'This refers to equations that are true for all values, not specifically about remainders.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch2_t3_qe18',
    type: 'mcq',
    question: 'If p(x) = 2x³ + kx² - 2x + 7 and p(1) = 10, what is the value of k?',
    options: [
      '3',
      '2',
      '1',
      '4'
    ],
    correctAnswer: '3',
    explanation: 'Using p(1) = 10: 2(1)³ + k(1)² - 2(1) + 7 = 10, so 2 + k - 2 + 7 = 10, which gives k = 3.',
    wrongAnswerExplanations: {
      '2': 'Solving the equation 2 + k - 2 + 7 = 10 gives k = 3, not 2.',
      '1': 'Solving the equation 2 + k - 2 + 7 = 10 gives k = 3, not 1.',
      '4': 'Solving the equation 2 + k - 2 + 7 = 10 gives k = 3, not 4.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch2_t3_qe19',
    type: 'mcq',
    question: 'What is a practical application of the remainder theorem?',
    options: [
      'Evaluating polynomial values without direct substitution',
      'Finding the degree of a polynomial',
      'Converting decimals to fractions',
      'Solving quadratic equations'
    ],
    correctAnswer: 'Evaluating polynomial values without direct substitution',
    explanation: 'The remainder theorem allows us to find p(a) by finding the remainder when p(x) is divided by x - a.',
    wrongAnswerExplanations: {
      'Finding the degree of a polynomial': 'The remainder theorem doesn\'t help determine polynomial degree.',
      'Converting decimals to fractions': 'The remainder theorem applies to polynomials, not decimal-to-fraction conversion.',
      'Solving quadratic equations': 'While it can help verify solutions, it\'s not primarily for solving equations.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch2_t3_qe20',
    type: 'mcq',
    question: 'Which theorem states that (x - k) is a factor of polynomial p(x) if and only if p(k) = 0?',
    options: [
      'Factor theorem',
      'Remainder theorem',
      'Division algorithm',
      'Binomial theorem'
    ],
    correctAnswer: 'Factor theorem',
    explanation: 'The factor theorem states that (x - k) is a factor of p(x) if and only if p(k) = 0.',
    wrongAnswerExplanations: {
      'Remainder theorem': 'This states that when p(x) is divided by x - a, the remainder equals p(a).',
      'Division algorithm': 'This describes the general form of polynomial division but doesn\'t specifically address factors.',
      'Binomial theorem': 'This deals with expanding powers of binomial expressions, not factors of polynomials.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  }
];
