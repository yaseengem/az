import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
  {
    id: 'cl10_ch4_t2_qe1',
    type: 'mcq',
    question: 'What is the quadratic formula for solving ax² + bx + c = 0?',
    options: [
      'x = (-b ± √(b² - 4ac))/2a',
      'x = (-b ± √(b² + 4ac))/2a',
      'x = (b ± √(b² - 4ac))/2a',
      'x = (b ± √(b² + 4ac))/2a'
    ],
    correctAnswer: 'x = (-b ± √(b² - 4ac))/2a',
    explanation: 'The standard quadratic formula is x = (-b ± √(b² - 4ac))/2a, derived from completing the square method.',
    wrongAnswerExplanations: {
      'x = (-b ± √(b² + 4ac))/2a': 'The discriminant is b² - 4ac, not b² + 4ac.',
      'x = (b ± √(b² - 4ac))/2a': 'The formula should have -b, not b, in the numerator.',
      'x = (b ± √(b² + 4ac))/2a': 'The formula has both errors: -b should be used and the discriminant is b² - 4ac.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch4_t2_qe2',
    type: 'mcq',
    question: 'The factorized form of x² - 5x + 6 is:',
    options: [
      '(x - 2)(x - 3)',
      '(x + 2)(x + 3)',
      '(x - 2)(x + 3)',
      '(x + 2)(x - 3)'
    ],
    correctAnswer: '(x - 2)(x - 3)',
    explanation: 'When we multiply (x - 2)(x - 3), we get x² - 3x - 2x + 6 = x² - 5x + 6.',
    wrongAnswerExplanations: {
      '(x + 2)(x + 3)': 'This gives x² + 5x + 6, not x² - 5x + 6.',
      '(x - 2)(x + 3)': 'This gives x² + 3x - 2x - 6 = x² + x - 6, not x² - 5x + 6.',
      '(x + 2)(x - 3)': 'This gives x² - 3x + 2x - 6 = x² - x - 6, not x² - 5x + 6.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch4_t2_qe3',
    type: 'mcq',
    question: 'For the quadratic equation 3x² - 6x - 2 = 0, what is the value of a?',
    options: [
      '3',
      '-6',
      '-2',
      '0'
    ],
    correctAnswer: '3',
    explanation: 'In the standard form ax² + bx + c = 0, a is the coefficient of x². Here a = 3.',
    wrongAnswerExplanations: {
      '-6': 'This is the coefficient of x (value of b), not x².',
      '-2': 'This is the constant term (value of c), not the coefficient of x².',
      '0': 'The coefficient of x² is 3, not 0.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl10_ch4_t2_qe4',
    type: 'mcq',
    question: 'Which of these is a quadratic equation in standard form?',
    options: [
      'x² + 3x - 7 = 0',
      'x³ + 2x - 1 = 0',
      '2x - 7 = 0',
      '√x + 5 = 2'
    ],
    correctAnswer: 'x² + 3x - 7 = 0',
    explanation: 'A quadratic equation in standard form is ax² + bx + c = 0, where a ≠ 0.',
    wrongAnswerExplanations: {
      'x³ + 2x - 1 = 0': 'This is a cubic equation due to the x³ term.',
      '2x - 7 = 0': 'This is a linear equation with no x² term.',
      '√x + 5 = 2': 'This contains a square root, not a quadratic term.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl10_ch4_t2_qe5',
    type: 'mcq',
    question: 'The discriminant of the quadratic equation 2x² - 5x + 2 = 0 is:',
    options: [
      '9',
      '25',
      '17',
      '1'
    ],
    correctAnswer: '9',
    explanation: 'Discriminant = b² - 4ac = (-5)² - 4(2)(2) = 25 - 16 = 9.',
    wrongAnswerExplanations: {
      '25': 'This is just b² without subtracting 4ac.',
      '17': 'This is an incorrect calculation of the discriminant.',
      '1': 'This is an incorrect calculation of the discriminant.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 45
  },
  {
    id: 'cl10_ch4_t2_qe6',
    type: 'mcq',
    question: 'The roots of the equation x² - 8x + 15 = 0 are:',
    options: [
      '3 and 5',
      '3 and -5',
      '-3 and 5',
      '-3 and -5'
    ],
    correctAnswer: '3 and 5',
    explanation: 'Factoring x² - 8x + 15 = (x - 3)(x - 5), so the roots are 3 and 5.',
    wrongAnswerExplanations: {
      '3 and -5': 'Incorrect factorization. The product of roots should be 15, not -15.',
      '-3 and 5': 'Incorrect factorization. The sum of roots should be 8, not 2.',
      '-3 and -5': 'Incorrect factorization. The sum of roots should be 8, not -8.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch4_t2_qe7',
    type: 'mcq',
    question: 'If α and β are the roots of the quadratic equation x² - 6x + 9 = 0, then α + β equals:',
    options: [
      '6',
      '9',
      '3',
      '0'
    ],
    correctAnswer: '6',
    explanation: 'For ax² + bx + c = 0, the sum of roots α + β = -b/a = -(-6)/1 = 6.',
    wrongAnswerExplanations: {
      '9': 'This is the product of roots (c/a), not their sum.',
      '3': 'This is α = β = 3, not their sum which is 6.',
      '0': 'Incorrect. The sum of roots is 6, not 0.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 45
  },
  {
    id: 'cl10_ch4_t2_qe8',
    type: 'mcq',
    question: 'Which method involves writing a quadratic expression as a product of two linear factors?',
    options: [
      'Factorization',
      'Completing the square',
      'Quadratic formula',
      'Graphical method'
    ],
    correctAnswer: 'Factorization',
    explanation: 'Factorization involves expressing a quadratic expression as a product of two linear factors.',
    wrongAnswerExplanations: {
      'Completing the square': 'This transforms the equation into (x + p)² = q form, not a product of factors.',
      'Quadratic formula': 'This provides direct solution using a formula, without factoring.',
      'Graphical method': 'This finds solutions by plotting and identifying intercepts.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl10_ch4_t2_qe9',
    type: 'mcq',
    question: 'What are the roots of x² + 4x + 4 = 0?',
    options: [
      'Both roots are -2',
      'Both roots are 2',
      '-2 and 2',
      'No real roots'
    ],
    correctAnswer: 'Both roots are -2',
    explanation: 'x² + 4x + 4 = (x + 2)² = 0, so x = -2 is a repeated root.',
    wrongAnswerExplanations: {
      'Both roots are 2': 'Incorrect factorization. The equation factors as (x + 2)², not (x - 2)².',
      '-2 and 2': 'Incorrect factorization. The equation gives a repeated root, not two different roots.',
      'No real roots': 'The equation has real roots, specifically a repeated root at x = -2.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 45
  },
  {
    id: 'cl10_ch4_t2_qe10',
    type: 'mcq',
    question: 'For what value of k will the equation x² + kx + 1 = 0 have equal roots?',
    options: [
      'k = ±2',
      'k = 2',
      'k = -2',
      'k = 4'
    ],
    correctAnswer: 'k = ±2',
    explanation: 'For equal roots, discriminant = 0: k² - 4(1)(1) = 0, so k² = 4, thus k = ±2.',
    wrongAnswerExplanations: {
      'k = 2': 'This is only one possible value. The negative value is also valid.',
      'k = -2': 'This is only one possible value. The positive value is also valid.',
      'k = 4': 'Incorrect. Solving k² = 4 gives k = ±2, not k = 4.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch4_t2_qe11',
    type: 'mcq',
    question: 'The quadratic formula is used to find:',
    options: [
      'The roots of a quadratic equation',
      'The area under a parabola',
      'The axis of symmetry of a parabola',
      'The vertex of a parabola'
    ],
    correctAnswer: 'The roots of a quadratic equation',
    explanation: 'The quadratic formula x = (-b ± √(b² - 4ac))/2a directly gives the roots of ax² + bx + c = 0.',
    wrongAnswerExplanations: {
      'The area under a parabola': 'This requires integration, not the quadratic formula.',
      'The axis of symmetry of a parabola': 'This is x = -b/2a, derived from but not the quadratic formula itself.',
      'The vertex of a parabola': 'This is found using x = -b/2a and then calculating y-value.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl10_ch4_t2_qe12',
    type: 'mcq',
    question: 'If the discriminant of a quadratic equation is negative, then the equation has:',
    options: [
      'No real roots',
      'One real root',
      'Two equal real roots',
      'Two distinct real roots'
    ],
    correctAnswer: 'No real roots',
    explanation: 'When discriminant < 0, the square root term gives an imaginary number, resulting in no real roots.',
    wrongAnswerExplanations: {
      'One real root': 'One real root occurs when the discriminant equals zero, not when it\'s negative.',
      'Two equal real roots': 'Equal roots occur when the discriminant equals zero, not when it\'s negative.',
      'Two distinct real roots': 'Distinct real roots occur when the discriminant is positive, not negative.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 45
  },
  {
    id: 'cl10_ch4_t2_qe13',
    type: 'mcq',
    question: 'Which of the following equations can be solved by factorization?',
    options: [
      'x² - 7x + 12 = 0',
      'x² - 5x + 7 = 0',
      'x² + 3x + π = 0',
      'x² + 2x - 1 = 0'
    ],
    correctAnswer: 'x² - 7x + 12 = 0',
    explanation: 'x² - 7x + 12 = (x - 3)(x - 4) = 0, so it can be easily factored with integer coefficients.',
    wrongAnswerExplanations: {
      'x² - 5x + 7 = 0': 'This cannot be factored using rational numbers as the roots are irrational.',
      'x² + 3x + π = 0': 'This has an irrational constant π and cannot be factored with rational numbers.',
      'x² + 2x - 1 = 0': 'This cannot be factored using simple integer coefficients.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch4_t2_qe14',
    type: 'mcq',
    question: 'What is the first step in solving a quadratic equation by factorization?',
    options: [
      'Rewrite in standard form ax² + bx + c = 0',
      'Calculate the discriminant',
      'Use the quadratic formula',
      'Graph the equation'
    ],
    correctAnswer: 'Rewrite in standard form ax² + bx + c = 0',
    explanation: 'Before factoring, the equation must be in standard form with zero on one side.',
    wrongAnswerExplanations: {
      'Calculate the discriminant': 'This is used in the quadratic formula, not directly in factorization.',
      'Use the quadratic formula': 'This is an alternative method, not part of the factorization approach.',
      'Graph the equation': 'Graphing is a different method for finding approximate solutions.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl10_ch4_t2_qe15',
    type: 'mcq',
    question: 'If α and β are the roots of x² + px + q = 0, then α·β equals:',
    options: [
      'q',
      'p',
      '-p',
      '-q'
    ],
    correctAnswer: 'q',
    explanation: 'For x² + px + q = 0, the product of roots α·β = c/a = q/1 = q.',
    wrongAnswerExplanations: {
      'p': 'p is related to the sum of roots (α+β = -p), not their product.',
      '-p': 'The sum of roots is -p, not the product.',
      '-q': 'The product is q, not -q, because a = 1 in the given equation.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 45
  },
  {
    id: 'cl10_ch4_t2_qe16',
    type: 'mcq',
    question: 'What happens when you apply the quadratic formula to the equation x² + 6x + 9 = 0?',
    options: [
      'You get a repeated root x = -3',
      'You get two distinct roots: -3 and 3',
      'You get no real roots',
      'The formula doesn\'t apply because the discriminant is zero'
    ],
    correctAnswer: 'You get a repeated root x = -3',
    explanation: 'With a = 1, b = 6, c = 9, the discriminant is 0, giving x = -b/2a = -6/2 = -3 as a repeated root.',
    wrongAnswerExplanations: {
      'You get two distinct roots: -3 and 3': 'The discriminant is zero, so there\'s only one repeated root.',
      'You get no real roots': 'Zero discriminant means one real root (repeated), not no real roots.',
      'The formula doesn\'t apply because the discriminant is zero': 'The formula still works when discriminant = 0.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch4_t2_qe17',
    type: 'mcq',
    question: 'Which equation has roots 2 and -3?',
    options: [
      'x² + x - 6 = 0',
      'x² - x - 6 = 0',
      'x² - x + 6 = 0',
      'x² + x + 6 = 0'
    ],
    correctAnswer: 'x² + x - 6 = 0',
    explanation: 'If roots are 2 and -3, then x² - (2 + (-3))x + (2×(-3)) = 0, giving x² + x - 6 = 0.',
    wrongAnswerExplanations: {
      'x² - x - 6 = 0': 'This equation has roots 3 and -2, not 2 and -3.',
      'x² - x + 6 = 0': 'This equation has no real roots as its discriminant is negative.',
      'x² + x + 6 = 0': 'This equation has no real roots as its discriminant is negative.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch4_t2_qe18',
    type: 'mcq',
    question: 'To solve x² - 6x + 8 = 0 by factorization, we write:',
    options: [
      'x² - 6x + 8 = (x - 2)(x - 4)',
      'x² - 6x + 8 = (x + 2)(x + 4)',
      'x² - 6x + 8 = (x - 2)(x + 4)',
      'x² - 6x + 8 = (x + 2)(x - 4)'
    ],
    correctAnswer: 'x² - 6x + 8 = (x - 2)(x - 4)',
    explanation: 'We need factors of 8 whose sum is -6. Since -2 and -4 sum to -6 and multiply to 8, the factorization is (x - 2)(x - 4).',
    wrongAnswerExplanations: {
      'x² - 6x + 8 = (x + 2)(x + 4)': 'This expands to x² + 6x + 8, not x² - 6x + 8.',
      'x² - 6x + 8 = (x - 2)(x + 4)': 'This expands to x² + 2x - 8, not x² - 6x + 8.',
      'x² - 6x + 8 = (x + 2)(x - 4)': 'This expands to x² - 2x - 8, not x² - 6x + 8.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch4_t2_qe19',
    type: 'mcq',
    question: 'In the quadratic formula x = (-b ± √(b² - 4ac))/2a, what does the discriminant tell us?',
    options: [
      'The nature of the roots of the equation',
      'The value of the roots',
      'The axis of symmetry of the parabola',
      'The vertex of the parabola'
    ],
    correctAnswer: 'The nature of the roots of the equation',
    explanation: 'The discriminant (b² - 4ac) tells whether roots are real or complex, and distinct or equal.',
    wrongAnswerExplanations: {
      'The value of the roots': 'The complete formula gives the values, not just the discriminant.',
      'The axis of symmetry of the parabola': 'The axis is x = -b/2a, determined without the discriminant.',
      'The vertex of the parabola': 'The vertex requires both -b/2a and the corresponding y-value.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 45
  },
  {
    id: 'cl10_ch4_t2_qe20',
    type: 'mcq',
    question: 'If one root of x² + kx - 12 = 0 is 3, what is the value of k?',
    options: [
      '1',
      '4',
      '-4',
      '-1'
    ],
    correctAnswer: '1',
    explanation: 'If x = 3 is a root, then 3² + k(3) - 12 = 0, so 9 + 3k - 12 = 0, giving 3k = 3, thus k = 1.',
    wrongAnswerExplanations: {
      '4': 'This value doesn\'t satisfy the equation when substituting x = 3.',
      '-4': 'This value doesn\'t satisfy the equation when substituting x = 3.',
      '-1': 'This value doesn\'t satisfy the equation when substituting x = 3.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  }
];
