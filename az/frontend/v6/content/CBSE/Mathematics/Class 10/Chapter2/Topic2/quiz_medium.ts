import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
  {
    id: 'cl10_ch2_t2_qm1',
    type: 'mcq',
    question: 'If α and β are the zeros of the polynomial p(x) = x² - 5x + 6, then the value of α² + β² is:',
    options: ['25', '17', '12', '7'],
    correctAnswer: '17',
    explanation: 'α² + β² = (α + β)² - 2αβ = (-b/a)² - 2(c/a) = 5² - 2(6) = 25 - 12 = 17.',
    wrongAnswerExplanations: {
      '25': 'This is just (α + β)² without subtracting 2αβ.',
      '12': 'This is 2αβ, not α² + β².',
      '7': 'This is not the correct value.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch2_t2_qm2',
    type: 'mcq',
    question: 'The quadratic polynomial whose zeros are reciprocals of the zeros of p(x) = 2x² - 5x + 2 is:',
    options: ['2x² - 5x + 2', '2x² + 5x + 2', 'x² - 5x + 4', '4x² - 5x + 1'],
    correctAnswer: '2x² + 5x + 2',
    explanation: 'If f(x) has zeros α, β, the polynomial with zeros 1/α, 1/β is x²f(1/x). So x²·(2(1/x)² - 5(1/x) + 2) = 2 + 5x + 2x².',
    wrongAnswerExplanations: {
      '2x² - 5x + 2': 'This is the original polynomial.',
      'x² - 5x + 4': 'This is not the correct polynomial.',
      '4x² - 5x + 1': 'This is not the correct polynomial.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch2_t2_qm3',
    type: 'mcq',
    question: 'If α and β are the zeros of p(x) = ax² + bx + c, then the quadratic polynomial with zeros α + 1 and β + 1 is:',
    options: ['ax² + (b-2a)x + (a+b+c)', 'ax² - (b-2a)x + (a-b+c)', 'ax² - (b+2a)x + (a+b+c)', 'ax² + (b+2a)x + (a-b+c)'],
    correctAnswer: 'ax² + (b-2a)x + (a+b+c)',
    explanation: 'If zeros are α+1 and β+1, then x = (y-1). Substituting in original polynomial gives ax² + (b-2a)x + (a+b+c).',
    wrongAnswerExplanations: {
      'ax² - (b-2a)x + (a-b+c)': 'The signs and values in this polynomial are incorrect.',
      'ax² - (b+2a)x + (a+b+c)': 'This has incorrect coefficient for the x term.',
      'ax² + (b+2a)x + (a-b+c)': 'Both the coefficients for x and constant term are incorrect.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch2_t2_qm4',
    type: 'mcq',
    question: 'If α and β are the zeros of p(x) = x² - p(x+1) + q, then the value of α + β is:',
    options: ['p', '-p', 'p+1', '-p-1'],
    correctAnswer: 'p',
    explanation: 'Comparing with ax² + bx + c, we get a = 1, b = -p, so α + β = -b/a = p.',
    wrongAnswerExplanations: {
      '-p': 'This would be correct if the polynomial were x² + p(x+1) + q.',
      'p+1': 'This doesn\'t correctly account for the coefficient of x in the expanded form.',
      '-p-1': 'This doesn\'t match with the correct form after expansion.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch2_t2_qm5',
    type: 'mcq',
    question: 'The quadratic polynomial whose sum of zeros is 8 and whose product of zeros is 12 is:',
    options: ['x² - 8x + 12', 'x² + 8x + 12', 'x² - 8x - 12', '2x² - 8x + 12'],
    correctAnswer: 'x² - 8x + 12',
    explanation: 'Using the relations: sum = -b/a and product = c/a. With a = 1, b = -8, c = 12, we get x² - 8x + 12.',
    wrongAnswerExplanations: {
      'x² + 8x + 12': 'This gives sum = -8, not 8.',
      'x² - 8x - 12': 'This gives product = -12, not 12.',
      '2x² - 8x + 12': 'This gives sum = 4 and product = 6, both incorrect.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch2_t2_qm6',
    type: 'mcq',
    question: 'If α and β are the zeros of the polynomial 2x² - 5x + k such that α² + β² = 13/4, then the value of k is:',
    options: ['2', '3', '4', '5'],
    correctAnswer: '2',
    explanation: 'Using α² + β² = (α + β)² - 2αβ = (5/2)² - 2k/2 = 25/4 - k = 13/4. Solving, k = 3.',
    wrongAnswerExplanations: {
      '2': 'Using the relation α² + β² = 13/4, k comes out to be 3, not 2.',
      '4': 'Using the relation α² + β² = 13/4, k comes out to be 3, not 4.',
      '5': 'Using the relation α² + β² = 13/4, k comes out to be 3, not 5.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch2_t2_qm7',
    type: 'mcq',
    question: 'If the zeros of the polynomial f(x) = x² + px + q are in the ratio m:n, then:',
    options: ['p² = 4qmn/(m+n)²', 'p² = 4q(m+n)²/mn', 'p² = 4qm²n²/(m+n)²', 'p² = 4q(m+n)/mn'],
    correctAnswer: 'p² = 4qmn/(m+n)²',
    explanation: 'If zeros α and β are in ratio m:n, α = mk, β = nk for some k. Using relations between zeros and coefficients, p² = 4qmn/(m+n)².',
    wrongAnswerExplanations: {
      'p² = 4q(m+n)²/mn': 'This is not the correct relationship.',
      'p² = 4qm²n²/(m+n)²': 'This is not the correct relationship.',
      'p² = 4q(m+n)/mn': 'This is not the correct relationship.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch2_t2_qm8',
    type: 'mcq',
    question: 'If α and β are the zeros of the polynomial p(x) = x² - 2x - 8, then the value of α³ + β³ is:',
    options: ['22', '26', '8', '-8'],
    correctAnswer: '26',
    explanation: 'α³ + β³ = (α + β)³ - 3αβ(α + β) = (2)³ - 3(-8)(2) = 8 + 48 = 56.',
    wrongAnswerExplanations: {
      '22': 'The calculation contains an error.',
      '8': 'This is (α + β)³ without considering the 3αβ(α + β) term.',
      '-8': 'This doesn\'t account for both terms correctly.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch2_t2_qm9',
    type: 'mcq',
    question: 'The quadratic polynomial whose zeros are the square of the zeros of p(x) = x² - 5x + 6 is:',
    options: ['x² - 13x + 36', 'x² - 11x + 24', 'x² - 13x + 24', 'x² - 11x + 36'],
    correctAnswer: 'x² - 13x + 36',
    explanation: 'If zeros of p(x) are α and β, we want a polynomial with zeros α² and β². Thus, sum = α² + β² = (α+β)² - 2αβ = 5² - 2(6) = 13, and product = α²β² = (αβ)² = 6² = 36.',
    wrongAnswerExplanations: {
      'x² - 11x + 24': 'This doesn\'t have the correct coefficients for zeros α² and β².',
      'x² - 13x + 24': 'The product should be 36, not 24.',
      'x² - 11x + 36': 'The sum should be 13, not 11.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch2_t2_qm10',
    type: 'mcq',
    question: 'If one zero of the polynomial p(x) = (k-1)x² + kx - 2 is -2, then the value of k is:',
    options: ['2', '4', '0', '1'],
    correctAnswer: '2',
    explanation: 'If -2 is a zero, p(-2) = 0. So (k-1)(-2)² + k(-2) - 2 = 0. Simplifying, 4(k-1) - 2k - 2 = 0, which gives k = 2.',
    wrongAnswerExplanations: {
      '4': 'This doesn\'t satisfy p(-2) = 0.',
      '0': 'This would make the polynomial -x² - 2, which doesn\'t have -2 as a zero.',
      '1': 'This would make the polynomial x - 2, which is not quadratic.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch2_t2_qm11',
    type: 'mcq',
    question: 'If α and β are the zeros of the polynomial x² - 3x - 10, then the polynomial having zeros α² and β² is:',
    options: ['x² - 19x + 100', 'x² - 9x + 100', 'x² - 19x + 9', 'x² - 9x + 10'],
    correctAnswer: 'x² - 19x + 100',
    explanation: 'Sum of zeros α² + β² = (α + β)² - 2αβ = 3² - 2(-10) = 9 + 20 = 29. Product α²β² = (αβ)² = (-10)² = 100. Thus, p(x) = x² - 19x + 100.',
    wrongAnswerExplanations: {
      'x² - 9x + 100': 'The sum of zeros α² + β² = 19, not 9.',
      'x² - 19x + 9': 'The product of zeros α²β² = 100, not 9.',
      'x² - 9x + 10': 'Both coefficients are incorrect.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch2_t2_qm12',
    type: 'mcq',
    question: 'If the sum of the zeros of the polynomial ax² + bx + c is equal to the product of its zeros, then:',
    options: ['b = c', 'b = -c', 'a = c', 'a = -c'],
    correctAnswer: 'b = c',
    explanation: 'Sum of zeros = -b/a, product of zeros = c/a. If they are equal, -b/a = c/a, so b = -c.',
    wrongAnswerExplanations: {
      'b = -c': 'This should be b = c if -b/a = c/a.',
      'a = c': 'This doesn\'t relate to the condition given.',
      'a = -c': 'This doesn\'t relate to the condition given.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch2_t2_qm13',
    type: 'mcq',
    question: 'If α and β are the zeros of p(x) = x² + x - 6, then the value of α³β + αβ³ is:',
    options: ['-24', '24', '6', '-6'],
    correctAnswer: '-24',
    explanation: 'α³β + αβ³ = αβ(α² + β²) = αβ((α+β)² - 2αβ) = (c/a)((-b/a)² - 2(c/a)) = -6(1² - 2(-6)) = -6(1 + 12) = -78.',
    wrongAnswerExplanations: {
      '24': 'The calculation contains errors in signs.',
      '6': 'This value doesn\'t account for all terms correctly.',
      '-6': 'This value doesn\'t account for all terms correctly.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch2_t2_qm14',
    type: 'mcq',
    question: 'Given that one of the zeros of the cubic polynomial x³ - 6x² + 11x - 6 is 1, the product of the other two zeros is:',
    options: ['6', '3', '2', '11'],
    correctAnswer: '6',
    explanation: 'If 1 is a zero, (x-1) is a factor. Dividing, we get x³ - 6x² + 11x - 6 = (x-1)(x² - 5x + 6). The other zeros are of x² - 5x + 6, with product 6.',
    wrongAnswerExplanations: {
      '3': 'This doesn\'t match the product of zeros of x² - 5x + 6.',
      '2': 'This doesn\'t match the product of zeros of x² - 5x + 6.',
      '11': 'This is related to the coefficient of x in the original polynomial, not the product of zeros.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch2_t2_qm15',
    type: 'mcq',
    question: 'If the zeros of the polynomial p(x) = ax² + bx + c are α and -α, then:',
    options: ['b = 0', 'a + c = 0', 'a = c', 'a - c = 0'],
    correctAnswer: 'b = 0',
    explanation: 'Sum of zeros = α + (-α) = 0 = -b/a, so b = 0.',
    wrongAnswerExplanations: {
      'a + c = 0': 'This doesn\'t follow from the given condition.',
      'a = c': 'This doesn\'t follow from the given condition.',
      'a - c = 0': 'Product of zeros = α(-α) = -α² = c/a. This gives -α² = c/a, not a = c.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch2_t2_qm16',
    type: 'mcq',
    question: 'If the polynomial x⁴ - 6x³ + 16x² - 25x + 10 is divided by x² - 2x + k, the remainder is zero. The value of k is:',
    options: ['1', '2', '5', '10'],
    correctAnswer: '5',
    explanation: 'If x² - 2x + k divides the polynomial exactly, then any zero of x² - 2x + k is also a zero of the original polynomial. Let α be a zero, then k = α² + 2α = 5.',
    wrongAnswerExplanations: {
      '1': 'This value of k doesn\'t make x² - 2x + k a factor.',
      '2': 'This value of k doesn\'t make x² - 2x + k a factor.',
      '10': 'This value of k doesn\'t make x² - 2x + k a factor.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch2_t2_qm17',
    type: 'mcq',
    question: 'If one zero of the polynomial px² + qx + r is twice the other, then:',
    options: ['q² = 8pr', 'q² = 5pr', 'q² = 9pr', 'q² = 2pr'],
    correctAnswer: 'q² = 5pr',
    explanation: 'If zeros are α and 2α, then α + 2α = -q/p and α(2α) = r/p. This gives α = -q/3p and 2α² = r/p. Substituting, q² = 5pr.',
    wrongAnswerExplanations: {
      'q² = 8pr': 'This doesn\'t follow from the condition of one zero being twice the other.',
      'q² = 9pr': 'This doesn\'t follow from the condition of one zero being twice the other.',
      'q² = 2pr': 'This doesn\'t follow from the condition of one zero being twice the other.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch2_t2_qm18',
    type: 'mcq',
    question: 'The quadratic polynomial whose zeros are the squares of the zeros of x² + 3x + 2 is:',
    options: ['x² - 5x + 4', 'x² + 5x + 4', 'x² - 5x - 4', 'x² + 5x - 4'],
    correctAnswer: 'x² - 5x + 4',
    explanation: 'Zeros of x² + 3x + 2 are -1 and -2. Squares are 1 and 4. So the new polynomial has zeros 1 and 4, giving x² - 5x + 4.',
    wrongAnswerExplanations: {
      'x² + 5x + 4': 'This has zeros -1 and -4, not 1 and 4.',
      'x² - 5x - 4': 'This has zeros 5±√41/2, not 1 and 4.',
      'x² + 5x - 4': 'This has zeros -5±√41/2, not 1 and 4.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch2_t2_qm19',
    type: 'mcq',
    question: 'If α and β are the zeros of the quadratic polynomial 2x² + 5x + k, and α - β = 3, then the value of k is:',
    options: ['1', '2', '4', '5'],
    correctAnswer: '1',
    explanation: 'Using (α - β)² = (α + β)² - 4αβ = (-5/2)² - 4(k/2) = 25/4 - 2k = 9. Solving, k = 1.',
    wrongAnswerExplanations: {
      '2': 'This value of k doesn\'t satisfy the condition α - β = 3.',
      '4': 'This value of k doesn\'t satisfy the condition α - β = 3.',
      '5': 'This value of k doesn\'t satisfy the condition α - β = 3.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch2_t2_qm20',
    type: 'mcq',
    question: 'If 2 + √3 is a zero of the polynomial x² + px + q, where p and q are rational numbers, then the other zero is:',
    options: ['2 - √3', '-2 + √3', '-2 - √3', '√3 - 2'],
    correctAnswer: '2 - √3',
    explanation: 'If p and q are rational and 2 + √3 is a zero, then its conjugate 2 - √3 must also be a zero for p and q to be rational.',
    wrongAnswerExplanations: {
      '-2 + √3': 'This is not the conjugate of 2 + √3.',
      '-2 - √3': 'This is not the conjugate of 2 + √3.',
      '√3 - 2': 'This is -(2 - √3), not the correct conjugate.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  }
];
