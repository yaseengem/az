import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
  {
    id: 'cl10_ch4_t2_qm1',
    type: 'mcq',
    question: 'For what values of k will the equation 2x² + kx + 3 = 0 have real and equal roots?',
    options: [
      'k = ±6',
      'k = ±2√6',
      'k = 6',
      'k = -6'
    ],
    correctAnswer: 'k = ±2√6',
    explanation: 'For equal roots, b² = 4ac: k² = 4(2)(3) = 24, so k = ±2√6.',
    wrongAnswerExplanations: {
      'k = ±6': 'This is incorrect as k² = 36, not 24.',
      'k = 6': 'This is only one possible value and it\'s incorrect; we need k² = 24.',
      'k = -6': 'This is only one possible value and it\'s incorrect; we need k² = 24.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch4_t2_qm2',
    type: 'mcq',
    question: 'If α and β are the roots of the quadratic equation 3x² - 5x - 2 = 0, then α² + β² equals:',
    options: [
      '25/9',
      '9/25',
      '5/3',
      '3/5'
    ],
    correctAnswer: '25/9',
    explanation: 'α² + β² = (α + β)² - 2αβ = (5/3)² - 2(-2/3) = 25/9 + 4/3 = 25/9.',
    wrongAnswerExplanations: {
      '9/25': 'This is the reciprocal of the correct answer.',
      '5/3': 'This is α + β, not α² + β².',
      '3/5': 'This is the reciprocal of α + β, not α² + β².'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch4_t2_qm3',
    type: 'mcq',
    question: 'The quadratic equation whose roots are triple the roots of x² - 4x + 3 = 0 is:',
    options: [
      'x² - 12x + 27 = 0',
      'x² - 36x + 27 = 0',
      'x² - 12x + 36 = 0',
      '9x² - 36x + 27 = 0'
    ],
    correctAnswer: 'x² - 12x + 27 = 0',
    explanation: 'If roots of original are α and β, new roots are 3α and 3β, so new equation is x² - (3α+3β)x + 3α·3β = x² - 12x + 27.',
    wrongAnswerExplanations: {
      'x² - 36x + 27 = 0': 'Incorrect calculation of the coefficient of x.',
      'x² - 12x + 36 = 0': 'Incorrect calculation of the constant term.',
      '9x² - 36x + 27 = 0': 'The leading coefficient should be 1, not 9.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch4_t2_qm4',
    type: 'mcq',
    question: 'If one root of the quadratic equation x² + px + 12 = 0 is 4, then the value of p is:',
    options: [
      '-7',
      '7',
      '-3',
      '3'
    ],
    correctAnswer: '-7',
    explanation: 'If x = 4 is a root, then 4² + 4p + 12 = 0, so 16 + 4p + 12 = 0, giving 4p = -28, thus p = -7.',
    wrongAnswerExplanations: {
      '7': 'This gives 16 + 28 + 12 = 56, not 0.',
      '-3': 'This gives 16 - 12 + 12 = 16, not 0.',
      '3': 'This gives 16 + 12 + 12 = 40, not 0.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch4_t2_qm5',
    type: 'mcq',
    question: 'The sum of a number and its reciprocal is 5. Which quadratic equation represents this situation?',
    options: [
      'x² - 5x + 1 = 0',
      'x² + 5x + 1 = 0',
      'x² - 5x - 1 = 0',
      'x² + 5x - 1 = 0'
    ],
    correctAnswer: 'x² - 5x + 1 = 0',
    explanation: 'Let x be the number. Then x + 1/x = 5, which gives x² - 5x + 1 = 0 when multiplied by x.',
    wrongAnswerExplanations: {
      'x² + 5x + 1 = 0': 'This represents x + 1/x = -5, not 5.',
      'x² - 5x - 1 = 0': 'This doesn\'t represent the given condition correctly.',
      'x² + 5x - 1 = 0': 'This doesn\'t represent the given condition correctly.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch4_t2_qm6',
    type: 'mcq',
    question: 'For what value of k will the quadratic equation kx² + 2x + 1 = 0 have exactly one solution?',
    options: [
      'k = 1',
      'k = 2',
      'k = -1',
      'k = 4'
    ],
    correctAnswer: 'k = 1',
    explanation: 'For exactly one solution, b² = 4ac: 2² = 4·k·1, so 4 = 4k, thus k = 1.',
    wrongAnswerExplanations: {
      'k = 2': 'This gives discriminant = 0 - 8 = -8, which means no real solutions.',
      'k = -1': 'This gives discriminant = 4 + 4 = 8 > 0, meaning two distinct solutions.',
      'k = 4': 'This gives discriminant = 4 - 16 = -12, which means no real solutions.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch4_t2_qm7',
    type: 'mcq',
    question: 'The sum of the squares of two consecutive positive integers is 85. Which quadratic equation models this problem?',
    options: [
      'x² + (x+1)² = 85',
      'x² + (x-1)² = 85',
      'x + (x+1) = 85',
      '(x-1)² + (x+1)² = 85'
    ],
    correctAnswer: 'x² + (x+1)² = 85',
    explanation: 'If x and x+1 are consecutive integers, their squares sum to x² + (x+1)² = 85.',
    wrongAnswerExplanations: {
      'x² + (x-1)² = 85': 'This represents the sum of squares of x and x-1, not consecutive positive integers.',
      'x + (x+1) = 85': 'This is the sum of numbers, not sum of their squares.',
      '(x-1)² + (x+1)² = 85': 'These aren\'t consecutive integers; they\'re x-1 and x+1.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch4_t2_qm8',
    type: 'mcq',
    question: 'When simplified, the equation x²/(x-2) + 4 = 0 becomes:',
    options: [
      'x² + 4(x-2) = 0',
      'x² + 4x - 8 = 0',
      'x² - 2x + 8 = 0',
      'x² - 8 = 0'
    ],
    correctAnswer: 'x² + 4(x-2) = 0',
    explanation: 'Multiplying both sides by (x-2): x² + 4(x-2) = 0.',
    wrongAnswerExplanations: {
      'x² + 4x - 8 = 0': 'Incorrect expansion of the equation.',
      'x² - 2x + 8 = 0': 'Incorrect transformation of the original equation.',
      'x² - 8 = 0': 'This doesn\'t account for the term x²/(x-2) properly.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch4_t2_qm9',
    type: 'mcq',
    question: 'If α and β are the roots of 2x² - 7x + 3 = 0, then the value of 1/α + 1/β is:',
    options: [
      '7/3',
      '3/7',
      '7/2',
      '2/7'
    ],
    correctAnswer: '7/3',
    explanation: '1/α + 1/β = c/b = 3/(-7) = -3/7, but since we need 1/α + 1/β, it\'s 7/3.',
    wrongAnswerExplanations: {
      '3/7': 'This is the reciprocal of the correct answer.',
      '7/2': 'This uses a/c instead of c/b for the formula.',
      '2/7': 'This uses a different incorrect formula.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch4_t2_qm10',
    type: 'mcq',
    question: 'The roots of which quadratic equation differ by 5?',
    options: [
      'x² - 3x - 10 = 0',
      'x² - 5x + 6 = 0',
      'x² + 5x + 6 = 0',
      'x² - x - 6 = 0'
    ],
    correctAnswer: 'x² - 3x - 10 = 0',
    explanation: 'For roots α and β with difference 5, we solve x² - 3x - 10 = 0, giving roots -2 and 5 with difference 7.',
    wrongAnswerExplanations: {
      'x² - 5x + 6 = 0': 'Roots are 2 and 3, difference is 1, not 5.',
      'x² + 5x + 6 = 0': 'Roots are -2 and -3, difference is 1, not 5.',
      'x² - x - 6 = 0': 'Roots are 3 and -2, difference is 5, so this is correct.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch4_t2_qm11',
    type: 'mcq',
    question: 'Which of these methods can be used to find the roots of x² + 2x - 8 = 0?',
    options: [
      'Both factorization and quadratic formula',
      'Only factorization',
      'Only quadratic formula',
      'Neither method will work for this equation'
    ],
    correctAnswer: 'Both factorization and quadratic formula',
    explanation: 'This equation can be factored as (x+4)(x-2)=0 and can also be solved using the quadratic formula.',
    wrongAnswerExplanations: {
      'Only factorization': 'The quadratic formula works for all quadratic equations, including this one.',
      'Only quadratic formula': 'This equation can be factored as (x+4)(x-2)=0.',
      'Neither method will work for this equation': 'Both methods work for standard quadratic equations.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch4_t2_qm12',
    type: 'mcq',
    question: 'If the discriminant of ax² + bx + c = 0 equals 25, then the difference between its roots is:',
    options: [
      '5/|a|',
      '5|a|',
      '25/|a|',
      '25|a|'
    ],
    correctAnswer: '5/|a|',
    explanation: 'The difference between roots is √(b² - 4ac)/|a| = √25/|a| = 5/|a|.',
    wrongAnswerExplanations: {
      '5|a|': 'This multiplies by |a| instead of dividing.',
      '25/|a|': 'This uses discriminant directly without taking its square root.',
      '25|a|': 'This uses discriminant and multiplies instead of dividing.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch4_t2_qm13',
    type: 'mcq',
    question: 'Which best describes the approach for solving a quadratic equation using factorization?',
    options: [
      'Find two numbers whose product is c and sum is b',
      'Find two numbers whose product is a·c and sum is b',
      'Find two numbers whose product is a and sum is b',
      'Find two numbers whose product is b and sum is c'
    ],
    correctAnswer: 'Find two numbers whose product is a·c and sum is b',
    explanation: 'For ax² + bx + c, we find p, q where p·q = a·c and p+q = b to rewrite as a(x² + (p/a)x + (q/a)x + (p·q)/(a²)).',
    wrongAnswerExplanations: {
      'Find two numbers whose product is c and sum is b': 'This only works when a = 1.',
      'Find two numbers whose product is a and sum is b': 'This doesn\'t correctly describe the factorization process.',
      'Find two numbers whose product is b and sum is c': 'This doesn\'t correctly describe the factorization process.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch4_t2_qm14',
    type: 'mcq',
    question: 'A ball is thrown upward from a height of 16 feet with an initial velocity of 32 ft/s. Its height h after t seconds is given by h = -16t² + 32t + 16. When does the ball hit the ground?',
    options: [
      '2 seconds',
      '3 seconds',
      '1 second',
      '4 seconds'
    ],
    correctAnswer: '3 seconds',
    explanation: 'The ball hits the ground when h = 0: -16t² + 32t + 16 = 0. Factoring: -16(t² - 2t - 1) = 0, giving t = 3.',
    wrongAnswerExplanations: {
      '2 seconds': 'At t = 2, the height is h = -16(4) + 32(2) + 16 = 16 feet, not 0.',
      '1 second': 'At t = 1, the height is h = -16(1) + 32(1) + 16 = 32 feet, not 0.',
      '4 seconds': 'Solving the equation gives t = 3 or t = -0.5, and only t = 3 is relevant.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch4_t2_qm15',
    type: 'mcq',
    question: 'If p and q are the roots of x² - 6x + 9 = 0, then the value of p² + q² is:',
    options: [
      '18',
      '9',
      '36',
      '27'
    ],
    correctAnswer: '18',
    explanation: 'p² + q² = (p + q)² - 2pq = 6² - 2(9) = 36 - 18 = 18.',
    wrongAnswerExplanations: {
      '9': 'This is the value of pq, not p² + q².',
      '36': 'This is the value of (p + q)², not p² + q².',
      '27': 'This is an incorrect calculation.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch4_t2_qm16',
    type: 'mcq',
    question: 'Which quadratic equation has roots that are the reciprocals of the roots of x² - 5x + 6 = 0?',
    options: [
      '6x² - 5x + 1 = 0',
      'x² - 5x + 6 = 0',
      '6x² + 5x + 1 = 0',
      'x² + 5x + 6 = 0'
    ],
    correctAnswer: '6x² - 5x + 1 = 0',
    explanation: 'If roots of original are p, q, then new equation has roots 1/p, 1/q, giving 6x² - 5x + 1 = 0.',
    wrongAnswerExplanations: {
      'x² - 5x + 6 = 0': 'This is the original equation, not the one with reciprocal roots.',
      '6x² + 5x + 1 = 0': 'The middle coefficient should be -5, not +5.',
      'x² + 5x + 6 = 0': 'This equation has roots that are negatives, not reciprocals, of original roots.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch4_t2_qm17',
    type: 'mcq',
    question: 'The product of two consecutive positive integers is 72. Which equation represents this situation?',
    options: [
      'x(x+1) = 72',
      'x(x-1) = 72',
      'x² + x = 72',
      'x² - x = 72'
    ],
    correctAnswer: 'x(x+1) = 72',
    explanation: 'If x and x+1 are consecutive integers, their product is x(x+1) = 72.',
    wrongAnswerExplanations: {
      'x(x-1) = 72': 'This represents the product of x and x-1, not consecutive positive integers.',
      'x² + x = 72': 'This is the expanded form of x(x+1) = 72, which is correct.',
      'x² - x = 72': 'This is the expanded form of x(x-1) = 72, not consecutive positive integers.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch4_t2_qm18',
    type: 'mcq',
    question: 'To find a quadratic equation whose roots are 5 more than the roots of x² - 3x + 2 = 0, we:',
    options: [
      'Replace x with (y - 5) and simplify',
      'Replace x with (y + 5) and simplify',
      'Add 5 to each coefficient',
      'Multiply each coefficient by 5'
    ],
    correctAnswer: 'Replace x with (y - 5) and simplify',
    explanation: 'If y = x + 5, then x = y - 5. Substituting: (y-5)² - 3(y-5) + 2 = 0 gives the required equation.',
    wrongAnswerExplanations: {
      'Replace x with (y + 5) and simplify': 'This gives roots that are 5 less, not 5 more.',
      'Add 5 to each coefficient': 'This doesn\'t give an equation with roots 5 more than the original.',
      'Multiply each coefficient by 5': 'This scales the roots, doesn\'t add 5 to them.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch4_t2_qm19',
    type: 'mcq',
    question: 'For the quadratic equation 2x² - 6x + c = 0 to have equal roots, the value of c must be:',
    options: [
      '9/2',
      '3/2',
      '9',
      '6'
    ],
    correctAnswer: '9/2',
    explanation: 'For equal roots, b² = 4ac: (-6)² = 4(2)(c), so 36 = 8c, thus c = 9/2.',
    wrongAnswerExplanations: {
      '3/2': 'This gives discriminant = 36 - 12 = 24, not 0.',
      '9': 'This gives discriminant = 36 - 72 = -36, not 0.',
      '6': 'This gives discriminant = 36 - 48 = -12, not 0.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch4_t2_qm20',
    type: 'mcq',
    question: 'A rectangle has a perimeter of 24 units and an area of 32 square units. What quadratic equation can be used to find its dimensions?',
    options: [
      'x² - 12x + 32 = 0',
      'x² + 12x + 32 = 0',
      'x² - 12x - 32 = 0',
      '2x² - 24x + 32 = 0'
    ],
    correctAnswer: 'x² - 12x + 32 = 0',
    explanation: 'If length is x, width is (24-2x)/2 = 12-x. Area: x(12-x) = 32, so x² - 12x + 32 = 0.',
    wrongAnswerExplanations: {
      'x² + 12x + 32 = 0': 'This doesn\'t model the relationship between perimeter and area correctly.',
      'x² - 12x - 32 = 0': 'The area equals 32, not -32.',
      '2x² - 24x + 32 = 0': 'Incorrect modeling of the perimeter-area relationship.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  }
];
