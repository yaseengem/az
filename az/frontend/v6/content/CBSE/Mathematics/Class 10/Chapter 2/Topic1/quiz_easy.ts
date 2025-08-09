import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
  {
    id: 'cl10_ch2_t1_qe1',
    type: 'mcq',
    question: 'What is a zero of a polynomial p(x)?',
    options: [
      'A value of x for which p(x) = 0',
      'A value of x for which p(x) = 1',
      'A value of x for which p(x) = x',
      'A value of x for which p(x) is undefined'
    ],
    correctAnswer: 'A value of x for which p(x) = 0',
    explanation: 'A zero of a polynomial is a value of x that makes the polynomial equal to zero.',
    wrongAnswerExplanations: {
      'A value of x for which p(x) = 1': 'A zero specifically makes the polynomial equal to 0, not 1.',
      'A value of x for which p(x) = x': 'A zero makes the polynomial equal to 0, not equal to the value of x.',
      'A value of x for which p(x) is undefined': 'Zeros are defined values that make the polynomial equal to 0.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch2_t1_qe2',
    type: 'mcq',
    question: 'If x = 2 is a zero of the polynomial x² - 5x + 6, then the value of the polynomial at x = 2 is:',
    options: [
      '0',
      '2',
      '4',
      '-4'
    ],
    correctAnswer: '0',
    explanation: 'Since x = 2 is a zero, p(2) = 0. We can verify: 2² - 5(2) + 6 = 4 - 10 + 6 = 0.',
    wrongAnswerExplanations: {
      '2': 'If x = 2 is a zero, the polynomial evaluates to 0, not 2.',
      '4': 'If x = 2 is a zero, the polynomial evaluates to 0, not 4.',
      '-4': 'If x = 2 is a zero, the polynomial evaluates to 0, not -4.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch2_t1_qe3',
    type: 'mcq',
    question: 'The number of zeros a quadratic polynomial can have is:',
    options: [
      '0, 1, or 2',
      'Exactly 1',
      'Exactly 2',
      'At least 2'
    ],
    correctAnswer: '0, 1, or 2',
    explanation: 'A quadratic polynomial can have 0, 1, or 2 real zeros, depending on its discriminant.',
    wrongAnswerExplanations: {
      'Exactly 1': 'Quadratic polynomials can have 0, 1, or 2 zeros, not just exactly 1.',
      'Exactly 2': 'Quadratic polynomials can have 0, 1, or 2 zeros, not just exactly 2.',
      'At least 2': 'Quadratic polynomials can have fewer than 2 zeros.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch2_t1_qe4',
    type: 'mcq',
    question: 'If α is a zero of the polynomial p(x) = x² - 5x + 6, then p(x) can be written as:',
    options: [
      'p(x) = (x - α)(x - β), where β is another zero',
      'p(x) = (x + α)(x + β), where β is another zero',
      'p(x) = (x - α)(x + β), where β is another zero',
      'p(x) = (x - α)²'
    ],
    correctAnswer: 'p(x) = (x - α)(x - β), where β is another zero',
    explanation: 'Any polynomial can be factored as p(x) = a(x - α)(x - β)..., where α, β, etc. are zeros and a is a constant.',
    wrongAnswerExplanations: {
      'p(x) = (x + α)(x + β), where β is another zero': 'Zeros appear as (x - α), not (x + α) in the factorization.',
      'p(x) = (x - α)(x + β), where β is another zero': 'Zeros appear as (x - β), not (x + β) in the factorization.',
      'p(x) = (x - α)²': 'This would be true only if α is a repeated zero, which is not generally the case.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch2_t1_qe5',
    type: 'mcq',
    question: 'What is the relationship between the degree of a polynomial and the maximum number of zeros it can have?',
    options: [
      'They are equal',
      'The number of zeros is one more than the degree',
      'The number of zeros is one less than the degree',
      'There is no relationship'
    ],
    correctAnswer: 'They are equal',
    explanation: 'A polynomial of degree n can have at most n zeros.',
    wrongAnswerExplanations: {
      'The number of zeros is one more than the degree': 'A polynomial of degree n cannot have more than n zeros.',
      'The number of zeros is one less than the degree': 'A polynomial of degree n can have exactly n zeros.',
      'There is no relationship': 'There is a direct relationship: degree determines maximum number of zeros.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch2_t1_qe6',
    type: 'mcq',
    question: 'Find the zero of the polynomial p(x) = 2x + 5.',
    options: [
      '-2.5',
      '2.5',
      '-5/2',
      '5/2'
    ],
    correctAnswer: '-2.5',
    explanation: 'For p(x) = 0: 2x + 5 = 0 → x = -5/2 = -2.5',
    wrongAnswerExplanations: {
      '2.5': '2(2.5) + 5 = 10, not 0, so this is not a zero.',
      '-5/2': 'This is correct in fractional form, equal to -2.5.',
      '5/2': '2(5/2) + 5 = 5 + 5 = 10, not 0, so this is not a zero.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch2_t1_qe7',
    type: 'mcq',
    question: 'Which of these is a zero of the polynomial x² - 9?',
    options: [
      '3',
      '4',
      '9',
      '-4'
    ],
    correctAnswer: '3',
    explanation: 'For x = 3: 3² - 9 = 9 - 9 = 0, thus 3 is a zero.',
    wrongAnswerExplanations: {
      '4': '4² - 9 = 16 - 9 = 7 ≠ 0, so 4 is not a zero.',
      '9': '9² - 9 = 81 - 9 = 72 ≠ 0, so 9 is not a zero.',
      '-4': '(-4)² - 9 = 16 - 9 = 7 ≠ 0, so -4 is not a zero.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch2_t1_qe8',
    type: 'mcq',
    question: 'The polynomial x² - 1 can be factored as:',
    options: [
      '(x - 1)(x + 1)',
      '(x - 1)²',
      '(x + 1)²',
      'x(x - 1)'
    ],
    correctAnswer: '(x - 1)(x + 1)',
    explanation: 'x² - 1 = (x - 1)(x + 1) is the difference of squares formula.',
    wrongAnswerExplanations: {
      '(x - 1)²': '(x - 1)² = x² - 2x + 1, not x² - 1.',
      '(x + 1)²': '(x + 1)² = x² + 2x + 1, not x² - 1.',
      'x(x - 1)': 'x(x - 1) = x² - x, not x² - 1.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch2_t1_qe9',
    type: 'mcq',
    question: 'If 2 and -3 are the zeros of a polynomial, which of these could be the polynomial?',
    options: [
      'x² + x - 6',
      'x² - x - 6',
      'x² - x + 6',
      'x² + x + 6'
    ],
    correctAnswer: 'x² + x - 6',
    explanation: 'If 2 and -3 are zeros, then p(x) = a(x-2)(x+3) = a(x² + x - 6), where a is a constant.',
    wrongAnswerExplanations: {
      'x² - x - 6': 'If 2 and -3 are zeros, we get x² + x - 6, not x² - x - 6.',
      'x² - x + 6': 'This polynomial does not have 2 and -3 as zeros.',
      'x² + x + 6': 'This polynomial does not have 2 and -3 as zeros.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch2_t1_qe10',
    type: 'mcq',
    question: 'A polynomial of degree 3 can have at most how many zeros?',
    options: [
      '3',
      '2',
      '4',
      'Unlimited'
    ],
    correctAnswer: '3',
    explanation: 'A polynomial of degree n can have at most n zeros. So a polynomial of degree 3 can have at most 3 zeros.',
    wrongAnswerExplanations: {
      '2': 'A cubic polynomial can have up to 3 zeros, not just 2.',
      '4': 'A cubic polynomial cannot have more than 3 zeros.',
      'Unlimited': 'The number of zeros is limited by the degree of the polynomial.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch2_t1_qe11',
    type: 'mcq',
    question: 'If (x - 2) is a factor of p(x), then what is the value of p(2)?',
    options: [
      '0',
      '1',
      '2',
      'Cannot be determined'
    ],
    correctAnswer: '0',
    explanation: 'If (x - 2) is a factor, then 2 is a zero. Therefore, p(2) = 0.',
    wrongAnswerExplanations: {
      '1': 'If (x - 2) is a factor, then p(2) = 0, not 1.',
      '2': 'If (x - 2) is a factor, then p(2) = 0, not 2.',
      'Cannot be determined': 'We can determine p(2) = 0 from the given information.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch2_t1_qe12',
    type: 'mcq',
    question: 'Which of these can be factored as (x - 3)(x - 4)?',
    options: [
      'x² - 7x + 12',
      'x² + 7x + 12',
      'x² - 7x - 12',
      'x² + 7x - 12'
    ],
    correctAnswer: 'x² - 7x + 12',
    explanation: '(x - 3)(x - 4) = x² - 4x - 3x + 12 = x² - 7x + 12',
    wrongAnswerExplanations: {
      'x² + 7x + 12': 'Expanding (x - 3)(x - 4) gives x² - 7x + 12, not x² + 7x + 12.',
      'x² - 7x - 12': 'Expanding (x - 3)(x - 4) gives x² - 7x + 12, not x² - 7x - 12.',
      'x² + 7x - 12': 'Expanding (x - 3)(x - 4) gives x² - 7x + 12, not x² + 7x - 12.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch2_t1_qe13',
    type: 'mcq',
    question: 'What are the zeros of x² - 5x + 6?',
    options: [
      '2 and 3',
      '1 and 6',
      '-2 and -3',
      '-1 and -6'
    ],
    correctAnswer: '2 and 3',
    explanation: 'Factoring: x² - 5x + 6 = (x - 2)(x - 3), so zeros are 2 and 3.',
    wrongAnswerExplanations: {
      '1 and 6': 'If zeros were 1 and 6, the polynomial would be (x-1)(x-6) = x² - 7x + 6.',
      '-2 and -3': 'If zeros were -2 and -3, the polynomial would be (x+2)(x+3) = x² + 5x + 6.',
      '-1 and -6': 'If zeros were -1 and -6, the polynomial would be (x+1)(x+6) = x² + 7x + 6.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch2_t1_qe14',
    type: 'mcq',
    question: 'If α is a zero of the polynomial p(x) = x³ - 4x² + 5x - 2, then the value of p(α) is:',
    options: [
      '0',
      '1',
      'α',
      'α³'
    ],
    correctAnswer: '0',
    explanation: 'By definition, if α is a zero of p(x), then p(α) = 0.',
    wrongAnswerExplanations: {
      '1': 'By definition of a zero, p(α) = 0, not 1.',
      'α': 'By definition of a zero, p(α) = 0, not α.',
      'α³': 'By definition of a zero, p(α) = 0, not α³.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch2_t1_qe15',
    type: 'mcq',
    question: 'A polynomial function f(x) = 0 has solution x = 5 with multiplicity 2. This means:',
    options: [
      '(x - 5)² is a factor of f(x)',
      '(x - 5) is a factor of f(x) twice',
      'f(5) = 2',
      'f(5) has two different values'
    ],
    correctAnswer: '(x - 5)² is a factor of f(x)',
    explanation: 'A zero with multiplicity 2 means (x - 5)² appears as a factor in the polynomial.',
    wrongAnswerExplanations: {
      '(x - 5) is a factor of f(x) twice': 'This is imprecise. It means (x-5)² is a factor, not that (x-5) appears twice separately.',
      'f(5) = 2': 'If 5 is a zero, then f(5) = 0, regardless of multiplicity.',
      'f(5) has two different values': 'A function cannot have two different values at the same input.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch2_t1_qe16',
    type: 'mcq',
    question: 'The zero of the polynomial 3x - 12 is:',
    options: [
      '4',
      '-4',
      '12/3',
      '3/12'
    ],
    correctAnswer: '4',
    explanation: 'Solving 3x - 12 = 0 gives x = 4.',
    wrongAnswerExplanations: {
      '-4': 'Solving 3x - 12 = 0 gives x = 4, not -4.',
      '12/3': 'This equals 4, which is the correct answer.',
      '3/12': 'This equals 1/4, but solving 3x - 12 = 0 gives x = 4.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch2_t1_qe17',
    type: 'mcq',
    question: 'If x = 0 is a zero of p(x) = ax³ + bx² + cx + d, then:',
    options: [
      'd = 0',
      'a = 0',
      'c = 0',
      'b = 0'
    ],
    correctAnswer: 'd = 0',
    explanation: 'If x = 0 is a zero, then p(0) = 0. Substituting: p(0) = a(0)³ + b(0)² + c(0) + d = d = 0.',
    wrongAnswerExplanations: {
      'a = 0': 'The value of a doesn`t determine whether 0 is a zero.',
      'c = 0': 'The value of c doesn`t determine whether 0 is a zero.',
      'b = 0': 'The value of b doesn`t determine whether 0 is a zero.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch2_t1_qe18',
    type: 'mcq',
    question: 'If the polynomial x² - 2x + k has exactly one zero, then the value of k is:',
    options: [
      '1',
      '2',
      '0',
      '-1'
    ],
    correctAnswer: '1',
    explanation: 'For exactly one zero, the discriminant must be 0: b² - 4ac = 0. Here, (-2)² - 4(1)(k) = 4 - 4k = 0. So k = 1.',
    wrongAnswerExplanations: {
      '2': 'Using the discriminant formula, we get 4 - 4k = 0, which gives k = 1, not 2.',
      '0': 'Using the discriminant formula, we get 4 - 4k = 0, which gives k = 1, not 0.',
      '-1': 'Using the discriminant formula, we get 4 - 4k = 0, which gives k = 1, not -1.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch2_t1_qe19',
    type: 'mcq',
    question: 'Which statement is true about the zeros of a polynomial?',
    options: [
      'Every polynomial has at least one zero in the complex number system',
      'Every polynomial has at least one real zero',
      'A polynomial of odd degree always has an odd number of zeros',
      'A polynomial of even degree always has an even number of zeros'
    ],
    correctAnswer: 'Every polynomial has at least one zero in the complex number system',
    explanation: 'According to the Fundamental Theorem of Algebra, every non-constant polynomial has at least one complex zero.',
    wrongAnswerExplanations: {
      'Every polynomial has at least one real zero': 'Some polynomials like x² + 1 have no real zeros.',
      'A polynomial of odd degree always has an odd number of zeros': 'The number of zeros equals the degree, regardless of odd or even.',
      'A polynomial of even degree always has an even number of zeros': 'The number of zeros equals the degree, but they might be complex.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch2_t1_qe20',
    type: 'mcq',
    question: 'If 2 is a zero of p(x) = x³ - 3x² - 10x + 24, then the other zeros are:',
    options: [
      '-4 and 3',
      '4 and -3',
      '4 and 3',
      '-4 and -3'
    ],
    correctAnswer: '-4 and 3',
    explanation: 'Dividing p(x) by (x-2) gives x² - x - 12 which factors as (x-4)(x+3), so the zeros are 2, 4, and -3.',
    wrongAnswerExplanations: {
      '4 and -3': 'The other zeros are -4 and 3, not 4 and -3.',
      '4 and 3': 'The other zeros are -4 and 3, not 4 and 3.',
      '-4 and -3': 'The other zeros are -4 and 3, not -4 and -3.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  }
];
