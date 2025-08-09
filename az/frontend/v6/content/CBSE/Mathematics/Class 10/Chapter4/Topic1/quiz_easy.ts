import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
  {
    id: 'cl10_ch4_t1_qe1',
    type: 'mcq',
    question: 'Which of the following is the standard form of a quadratic equation?',
    options: ['ax² + bx + c = 0', 'ax + b = 0', 'ax² + c = 0', 'ax³ + bx² + cx + d = 0'],
    correctAnswer: 'ax² + bx + c = 0',
    explanation: 'The standard form of a quadratic equation is ax² + bx + c = 0, where a ≠ 0 and a, b, c are real numbers.',
    wrongAnswerExplanations: {
      'ax + b = 0': 'This is the standard form of a linear equation, not a quadratic equation.',
      'ax² + c = 0': 'This is a quadratic equation without the linear term, not the standard form.',
      'ax³ + bx² + cx + d = 0': 'This is a cubic equation, not a quadratic equation.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch4_t1_qe2',
    type: 'mcq',
    question: 'What is the degree of a quadratic equation?',
    options: ['1', '2', '3', '4'],
    correctAnswer: '2',
    explanation: 'A quadratic equation has the highest power of the variable as 2, making it a second-degree equation.',
    wrongAnswerExplanations: {
      '1': 'An equation with degree 1 is a linear equation, not quadratic.',
      '3': 'An equation with degree 3 is a cubic equation, not quadratic.',
      '4': 'An equation with degree 4 is a quartic equation, not quadratic.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl10_ch4_t1_qe3',
    type: 'mcq',
    question: 'In the standard form ax² + bx + c = 0, which coefficient must not be zero?',
    options: ['a', 'b', 'c', 'Both a and b'],
    correctAnswer: 'a',
    explanation: 'In a quadratic equation, the coefficient of x² (a) must not be zero, otherwise it becomes a linear or constant equation.',
    wrongAnswerExplanations: {
      'b': 'The coefficient b can be zero, resulting in ax² + c = 0, which is still quadratic.',
      'c': 'The coefficient c can be zero, resulting in ax² + bx = 0, which is still quadratic.',
      'Both a and b': 'Only a must be non-zero; b can be zero in a valid quadratic equation.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 45
  },
  {
    id: 'cl10_ch4_t1_qe4',
    type: 'mcq',
    question: 'Which of the following is NOT a quadratic equation?',
    options: ['2x² + 3x - 7 = 0', 'x² = 9', '3x - 5 = 0', 'x(x-2) = 3'],
    correctAnswer: '3x - 5 = 0',
    explanation: '3x - 5 = 0 is a linear equation with no x² term, so it is not quadratic.',
    wrongAnswerExplanations: {
      '2x² + 3x - 7 = 0': 'This is in standard form ax² + bx + c = 0, making it quadratic.',
      'x² = 9': 'This can be written as x² - 9 = 0, which is quadratic.',
      'x(x-2) = 3': 'This expands to x² - 2x - 3 = 0, which is quadratic.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch4_t1_qe5',
    type: 'mcq',
    question: 'Convert 3 - 2x - x² = 0 to standard form.',
    options: ['x² + 2x - 3 = 0', 'x² + 2x + 3 = 0', '-x² - 2x + 3 = 0', '-x² + 2x + 3 = 0'],
    correctAnswer: '-x² - 2x + 3 = 0',
    explanation: 'Standard form requires rearranging as ax² + bx + c = 0. Here a = -1, b = -2, c = 3.',
    wrongAnswerExplanations: {
      'x² + 2x - 3 = 0': 'This has incorrect signs; the original equation is 3 - 2x - x² = 0.',
      'x² + 2x + 3 = 0': 'This has incorrect signs for all terms.',
      '-x² + 2x + 3 = 0': 'The middle term should be -2x, not +2x.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch4_t1_qe6',
    type: 'mcq',
    question: 'Express (x-2)(x+3) = 0 in standard form.',
    options: ['x² + x - 6 = 0', 'x² - x - 6 = 0', 'x² + x + 6 = 0', 'x² - x + 6 = 0'],
    correctAnswer: 'x² + x - 6 = 0',
    explanation: '(x-2)(x+3) = x² + 3x - 2x - 6 = x² + x - 6 = 0',
    wrongAnswerExplanations: {
      'x² - x - 6 = 0': 'The correct expansion is x² + x - 6 = 0, not x² - x - 6 = 0.',
      'x² + x + 6 = 0': 'The constant term should be -6, not +6.',
      'x² - x + 6 = 0': 'The expansion has incorrect signs for both the middle and constant terms.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch4_t1_qe7',
    type: 'mcq',
    question: 'In the equation 2x² - 4x + 5 = 0, what is the value of b?',
    options: ['-4', '4', '-2', '2'],
    correctAnswer: '-4',
    explanation: 'In ax² + bx + c = 0, comparing with 2x² - 4x + 5 = 0, we get b = -4.',
    wrongAnswerExplanations: {
      '4': 'The coefficient of x is -4, not 4.',
      '-2': 'The coefficient of x is -4, not -2.',
      '2': 'The coefficient of x is -4, not 2.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 45
  },
  {
    id: 'cl10_ch4_t1_qe8',
    type: 'mcq',
    question: 'Identify the values of a, b, and c in the quadratic equation 3x² - 5x + 2 = 0.',
    options: ['a = 3, b = -5, c = 2', 'a = 3, b = 5, c = 2', 'a = -3, b = -5, c = 2', 'a = 3, b = -5, c = -2'],
    correctAnswer: 'a = 3, b = -5, c = 2',
    explanation: 'Comparing with standard form ax² + bx + c = 0, we get a = 3, b = -5, c = 2.',
    wrongAnswerExplanations: {
      'a = 3, b = 5, c = 2': 'The coefficient of x is -5, not 5.',
      'a = -3, b = -5, c = 2': 'The coefficient of x² is 3, not -3.',
      'a = 3, b = -5, c = -2': 'The constant term is 2, not -2.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch4_t1_qe9',
    type: 'mcq',
    question: 'Convert x² = 4x - 3 to standard form.',
    options: ['x² - 4x + 3 = 0', 'x² - 4x - 3 = 0', 'x² + 4x + 3 = 0', 'x² + 4x - 3 = 0'],
    correctAnswer: 'x² - 4x + 3 = 0',
    explanation: 'Moving all terms to one side: x² - 4x + 3 = 0, which is the standard form.',
    wrongAnswerExplanations: {
      'x² - 4x - 3 = 0': 'The constant term should be +3, not -3.',
      'x² + 4x + 3 = 0': 'The coefficient of x should be -4, not +4.',
      'x² + 4x - 3 = 0': 'Both the coefficients of x and the constant term are incorrect.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch4_t1_qe10',
    type: 'mcq',
    question: 'If x² - 5x + p = 0 is a quadratic equation, what must be true about p?',
    options: ['p can be any real number', 'p must be positive', 'p must be negative', 'p must be zero'],
    correctAnswer: 'p can be any real number',
    explanation: 'For a quadratic equation, only the coefficient of x² must be non-zero. p can be any real number.',
    wrongAnswerExplanations: {
      'p must be positive': 'p can be negative, zero, or positive and still form a valid quadratic equation.',
      'p must be negative': 'p can be positive, zero, or negative and still form a valid quadratic equation.',
      'p must be zero': 'p can be any real number, not just zero.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 45
  },
  {
    id: 'cl10_ch4_t1_qe11',
    type: 'mcq',
    question: 'Express the following equation in standard form: x(x+2) = 15',
    options: ['x² + 2x - 15 = 0', 'x² - 2x - 15 = 0', 'x² + 2x + 15 = 0', 'x² - 2x + 15 = 0'],
    correctAnswer: 'x² + 2x - 15 = 0',
    explanation: 'x(x+2) = 15 → x² + 2x = 15 → x² + 2x - 15 = 0',
    wrongAnswerExplanations: {
      'x² - 2x - 15 = 0': 'The coefficient of x should be +2, not -2.',
      'x² + 2x + 15 = 0': 'The constant term should be -15, not +15.',
      'x² - 2x + 15 = 0': 'Both the coefficient of x and the constant term are incorrect.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch4_t1_qe12',
    type: 'mcq',
    question: 'Which of the following equations is in standard form?',
    options: ['x² - 9 = 0', 'x² = 4x + 5', 'x(x-3) = 2', '(x+1)² = 16'],
    correctAnswer: 'x² - 9 = 0',
    explanation: 'x² - 9 = 0 is already in the standard form ax² + bx + c = 0, where b = 0.',
    wrongAnswerExplanations: {
      'x² = 4x + 5': 'This needs to be rearranged to x² - 4x - 5 = 0 to be in standard form.',
      'x(x-3) = 2': 'This expands to x² - 3x = 2 and needs to be rearranged to x² - 3x - 2 = 0.',
      '(x+1)² = 16': 'This needs to be expanded and rearranged to x² + 2x - 15 = 0.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 45
  },
  {
    id: 'cl10_ch4_t1_qe13',
    type: 'mcq',
    question: 'The quadratic equation 2x² + bx + 8 = 0 has equal roots. What is the value of b?',
    options: ['±8', '±4√2', '±8√2', '±12'],
    correctAnswer: '±8',
    explanation: 'For equal roots, b² = 4ac. Here a = 2, c = 8, so b² = 4(2)(8) = 64, thus b = ±8.',
    wrongAnswerExplanations: {
      '±4√2': 'This is incorrect. When a = 2, c = 8, we get b² = 64, so b = ±8.',
      '±8√2': 'This is incorrect. The correct calculation gives b = ±8.',
      '±12': 'This is incorrect. When a = 2, c = 8, we get b² = 64, so b = ±8.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch4_t1_qe14',
    type: 'mcq',
    question: 'Which of the following is the standard form of (x-3)² = 25?',
    options: ['x² - 6x - 16 = 0', 'x² - 6x + 9 - 25 = 0', 'x² - 6x - 16 = 0', 'x² - 6x + 9 + 25 = 0'],
    correctAnswer: 'x² - 6x - 16 = 0',
    explanation: '(x-3)² = 25 → x² - 6x + 9 = 25 → x² - 6x + 9 - 25 = 0 → x² - 6x - 16 = 0',
    wrongAnswerExplanations: {
      'x² - 6x + 9 - 25 = 0': 'This needs to be simplified further to x² - 6x - 16 = 0.',
      'x² - 6x + 9 + 25 = 0': 'This has incorrect signs. The expansion is x² - 6x + 9 - 25 = 0.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch4_t1_qe15',
    type: 'mcq',
    question: 'If the sum and product of the roots of ax² + bx + c = 0 are -3 and 2 respectively, what is the equation?',
    options: ['x² + 3x + 2 = 0', 'x² - 3x + 2 = 0', 'x² + 3x - 2 = 0', 'x² - 3x - 2 = 0'],
    correctAnswer: 'x² + 3x + 2 = 0',
    explanation: 'For roots with sum = -3 and product = 2, the equation is x² - (sum)x + product = x² + 3x + 2 = 0.',
    wrongAnswerExplanations: {
      'x² - 3x + 2 = 0': 'This is incorrect. For sum = -3, the middle term should be +3x, not -3x.',
      'x² + 3x - 2 = 0': 'This is incorrect. For product = 2, the constant term should be +2, not -2.',
      'x² - 3x - 2 = 0': 'Both the coefficient of x and the constant term are incorrect.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch4_t1_qe16',
    type: 'mcq',
    question: 'The number of roots a quadratic equation can have is:',
    options: ['0, 1, or 2', 'Exactly 1', 'Exactly 2', 'At least 1'],
    correctAnswer: '0, 1, or 2',
    explanation: 'A quadratic equation can have 0 roots (no real solutions), 1 root (repeated), or 2 distinct real roots.',
    wrongAnswerExplanations: {
      'Exactly 1': 'A quadratic equation can have 0, 1, or 2 roots, not just 1.',
      'Exactly 2': 'A quadratic equation can have 0, 1, or 2 roots, not just 2.',
      'At least 1': 'A quadratic equation can have 0 roots if there are no real solutions.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 45
  },
  {
    id: 'cl10_ch4_t1_qe17',
    type: 'mcq',
    question: 'What is the degree of the polynomial in the equation x² + 2x + 1 = x + 1?',
    options: ['2', '1', '0', 'Not a polynomial'],
    correctAnswer: '2',
    explanation: 'Rearranging to standard form: x² + x = 0. The highest power of x is 2, so the degree is 2.',
    wrongAnswerExplanations: {
      '1': 'After rearrangement, the equation has an x² term, making it degree 2, not 1.',
      '0': 'This would mean a constant equation, but we have x terms after rearrangement.',
      'Not a polynomial': 'The equation can be written as x² + x = 0, which is a polynomial equation.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch4_t1_qe18',
    type: 'mcq',
    question: 'In the quadratic equation 3x² - 2x + k = 0, what value of k will make one root equal to zero?',
    options: ['0', '1', '2', '3'],
    correctAnswer: '0',
    explanation: 'For one root to be 0, the constant term must be 0. Therefore, k must be 0.',
    wrongAnswerExplanations: {
      '1': 'If k = 1, the equation becomes 3x² - 2x + 1 = 0, which doesn\'t have 0 as a root.',
      '2': 'If k = 2, the equation becomes 3x² - 2x + 2 = 0, which doesn\'t have 0 as a root.',
      '3': 'If k = 3, the equation becomes 3x² - 2x + 3 = 0, which doesn\'t have 0 as a root.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch4_t1_qe19',
    type: 'mcq',
    question: 'What is the standard form of the equation given by (2x-1)(3x+4) = 0?',
    options: ['6x² + 5x - 4 = 0', '6x² + 5x + 4 = 0', '6x² - 5x - 4 = 0', '6x² - 5x + 4 = 0'],
    correctAnswer: '6x² + 5x - 4 = 0',
    explanation: '(2x-1)(3x+4) = 6x² + 8x - 3x - 4 = 6x² + 5x - 4 = 0',
    wrongAnswerExplanations: {
      '6x² + 5x + 4 = 0': 'The constant term should be -4, not +4.',
      '6x² - 5x - 4 = 0': 'The coefficient of x should be +5, not -5.',
      '6x² - 5x + 4 = 0': 'Both the coefficient of x and the constant term are incorrect.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch4_t1_qe20',
    type: 'mcq',
    question: 'If α and β are the roots of ax² + bx + c = 0, then α + β equals:',
    options: ['-b/a', 'b/a', '-c/a', 'c/a'],
    correctAnswer: '-b/a',
    explanation: 'For quadratic equation ax² + bx + c = 0, the sum of roots α + β = -b/a.',
    wrongAnswerExplanations: {
      'b/a': 'The sum of roots is -b/a, not b/a.',
      '-c/a': 'The product of roots is c/a, not the sum.',
      'c/a': 'The product of roots is c/a, not the sum.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  }
];
