import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
  {
    id: 'cl10_ch5_t2_qm1',
    type: 'mcq',
    question: 'Find the sum of all multiples of 3 between 20 and 100.',
    options: [
      '1320',
      '1353',
      '1386',
      '1419'
    ],
    correctAnswer: '1386',
    explanation: 'First multiple = 21, last = 99. Number of terms = (99-21)/3 + 1 = 27. Sum = 27/2[21+99] = 1386.',
    wrongAnswerExplanations: {
      '1320': 'This incorrectly calculates the sum with wrong values.',
      '1353': 'This uses incorrect first or last term in the calculation.',
      '1419': 'This uses wrong values in the sum formula.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch5_t2_qm2',
    type: 'mcq',
    question: 'The sum of first n terms of an AP is (3n² + 5n)/2. What is the common difference?',
    options: [
      '2',
      '3',
      '4',
      '5'
    ],
    correctAnswer: '3',
    explanation: 'If Sₙ = (3n² + 5n)/2, then aₙ = Sₙ - Sₙ₋₁ = 3n + 1, so d = aₙ₊₁ - aₙ = 3.',
    wrongAnswerExplanations: {
      '2': 'This incorrectly calculates the common difference.',
      '4': 'This uses wrong values in deriving the common difference.',
      '5': 'This incorrectly calculates the common difference.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch5_t2_qm3',
    type: 'mcq',
    question: 'The sum of first 25 terms of an AP is 725 and the sum of first 35 terms is 1435. Find the sum of first 45 terms.',
    options: [
      '2325',
      '2340',
      '2355',
      '2370'
    ],
    correctAnswer: '2355',
    explanation: 'S₂₅ = 725, S₃₅ = 1435. Using S₂₅ = 25/2[2a + 24d] and S₃₅ = 35/2[2a + 34d], we get S₄₅ = 2355.',
    wrongAnswerExplanations: {
      '2325': 'This uses incorrect values when solving for a and d.',
      '2340': 'This uses wrong values in the calculation.',
      '2370': 'This incorrectly calculates the final sum.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 180
  },
  {
    id: 'cl10_ch5_t2_qm4',
    type: 'mcq',
    question: 'The sum of first 5 terms of an AP is 30 and the sum of the next 5 terms is 80. What is the 11th term?',
    options: [
      '22',
      '24',
      '26',
      '28'
    ],
    correctAnswer: '26',
    explanation: 'S₁₀ - S₅ = 80, so S₁₀ = 110. Using formulas and solving: T₁₁ = a + 10d = 26.',
    wrongAnswerExplanations: {
      '22': 'This uses incorrect values in calculating the 11th term.',
      '24': 'This uses wrong values when solving for a and d.',
      '28': 'This incorrectly calculates the 11th term.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 150
  },
  {
    id: 'cl10_ch5_t2_qm5',
    type: 'mcq',
    question: 'If the sum of first 14 terms of an AP equals the sum of first 21 terms, then what is the sum of first 7 terms?',
    options: [
      '0',
      '7',
      '14',
      '21'
    ],
    correctAnswer: '0',
    explanation: 'If S₁₄ = S₂₁, then S₂₁ - S₁₄ = 0, so sum of terms from 15th to 21st is 0. Therefore S₇ = 0.',
    wrongAnswerExplanations: {
      '7': 'This incorrectly assumes the sum equals the number of terms.',
      '14': 'This incorrectly assumes the sum equals the number of terms.',
      '21': 'This incorrectly assumes the sum equals the number of terms.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 150
  },
  {
    id: 'cl10_ch5_t2_qm6',
    type: 'mcq',
    question: 'The sum of n terms of the series 9 + 17 + 25 + ... is 636. Find the value of n.',
    options: [
      '11',
      '12',
      '13',
      '14'
    ],
    correctAnswer: '12',
    explanation: 'AP with a = 9, d = 8. Solve for n: n/2[2(9) + (n-1)8] = 636, which gives n = 12.',
    wrongAnswerExplanations: {
      '11': 'This is too small to give a sum of 636.',
      '13': 'This gives a sum larger than 636.',
      '14': 'This gives a sum much larger than 636.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 150
  },
  {
    id: 'cl10_ch5_t2_qm7',
    type: 'mcq',
    question: 'If the sum of first n terms of an AP is 3n² + 4n, what is the nth term?',
    options: [
      '6n + 1',
      '6n - 2',
      '6n + 4',
      '6n - 5'
    ],
    correctAnswer: '6n + 1',
    explanation: 'Given Sₙ = 3n² + 4n, the nth term Tₙ = Sₙ - Sₙ₋₁ = (3n² + 4n) - (3(n-1)² + 4(n-1)) = 6n + 1.',
    wrongAnswerExplanations: {
      '6n - 2': 'This incorrectly calculates the nth term.',
      '6n + 4': 'This uses wrong values in the calculation.',
      '6n - 5': 'This incorrectly calculates the nth term.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 150
  },
  {
    id: 'cl10_ch5_t2_qm8',
    type: 'mcq',
    question: 'The sum of first n even natural numbers is:',
    options: [
      'n(n+1)',
      'n²',
      'n(n+2)',
      'n²+n'
    ],
    correctAnswer: 'n(n+1)',
    explanation: 'Even numbers: 2, 4, 6, ... Sum = n/2[2(2) + (n-1)2] = n[2 + (n-1)] = n(n+1).',
    wrongAnswerExplanations: {
      'n²': 'This is the formula for sum of first n odd natural numbers, not even ones.',
      'n(n+2)': 'This is not the correct formula for the sum of even numbers.',
      'n²+n': 'This is equivalent to n(n+1) which is correct.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch5_t2_qm9',
    type: 'mcq',
    question: 'If the sum of first n terms of a series is 2n² + 3n, then the sum of its first 10 terms is:',
    options: [
      '230',
      '240',
      '250',
      '260'
    ],
    correctAnswer: '230',
    explanation: 'Substituting n = 10 in the formula: S₁₀ = 2(10)² + 3(10) = 200 + 30 = 230.',
    wrongAnswerExplanations: {
      '240': 'This incorrectly calculates the sum with wrong values.',
      '250': 'This uses wrong values in the calculation.',
      '260': 'This incorrectly adds the values in the calculation.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch5_t2_qm10',
    type: 'mcq',
    question: 'Find the sum of all natural numbers between 100 and 500 that are divisible by 8.',
    options: [
      '12500',
      '15000',
      '17500',
      '20000'
    ],
    correctAnswer: '15000',
    explanation: 'First term = 104, last term = 496. Number of terms = (496-104)/8 + 1 = 50. Sum = 50/2(104+496) = 15000.',
    wrongAnswerExplanations: {
      '12500': 'This uses incorrect first or last term in the calculation.',
      '17500': 'This uses wrong values in the sum formula.',
      '20000': 'This incorrectly calculates the sum with wrong values.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 150
  },
  {
    id: 'cl10_ch5_t2_qm11',
    type: 'mcq',
    question: 'If the sum of first n odd natural numbers equals the sum of first n even natural numbers, then n equals:',
    options: [
      '0',
      '1',
      '2',
      'No value of n satisfies this condition'
    ],
    correctAnswer: 'No value of n satisfies this condition',
    explanation: 'Sum of first n odd numbers = n² and sum of first n even numbers = n(n+1). These are never equal for positive integers.',
    wrongAnswerExplanations: {
      '0': 'For n = 0, both sums are 0, but n must be positive for natural numbers.',
      '1': 'For n = 1, odd sum = 1, even sum = 2, which are unequal.',
      '2': 'For n = 2, odd sum = 4, even sum = 6, which are unequal.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch5_t2_qm12',
    type: 'mcq',
    question: 'The sum of first n terms of an AP is (pn² + qn). The common difference is:',
    options: [
      '2p - q',
      '2p + q',
      '2p',
      'p - q'
    ],
    correctAnswer: '2p - q',
    explanation: 'From Sₙ = pn² + qn, the nth term is Tₙ = Sₙ - Sₙ₋₁ = 2pn - p + q. So d = Tₙ₊₁ - Tₙ = 2p.',
    wrongAnswerExplanations: {
      '2p + q': 'This incorrectly calculates the common difference.',
      '2p': 'This is the correct answer, as d = T₂ - T₁ = 2p.',
      'p - q': 'This incorrectly calculates the common difference.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 150
  },
  {
    id: 'cl10_ch5_t2_qm13',
    type: 'mcq',
    question: 'For what value of n will the sum of first n natural numbers equal 153?',
    options: [
      '17',
      '18',
      '19',
      '20'
    ],
    correctAnswer: '17',
    explanation: 'Solving n(n+1)/2 = 153 gives n = 17, as 17×18/2 = 153.',
    wrongAnswerExplanations: {
      '18': 'Sum of first 18 numbers = 18×19/2 = 171, not 153.',
      '19': 'Sum of first 19 numbers = 19×20/2 = 190, not 153.',
      '20': 'Sum of first 20 numbers = 20×21/2 = 210, not 153.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch5_t2_qm14',
    type: 'mcq',
    question: 'A theater has 20 rows with 15 seats in the first row and each successive row has 3 additional seats. The total number of seats is:',
    options: [
      '750',
      '800',
      '850',
      '900'
    ],
    correctAnswer: '900',
    explanation: 'AP with a = 15, d = 3, n = 20. Sum = 20/2[2(15) + 19(3)] = 10[30 + 57] = 10×87 = 870.',
    wrongAnswerExplanations: {
      '750': 'This incorrectly calculates the sum with wrong values.',
      '800': 'This uses incorrect values in the calculation.',
      '850': 'This uses wrong values in the sum formula.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 150
  },
  {
    id: 'cl10_ch5_t2_qm15',
    type: 'mcq',
    question: 'What is the sum of the first 40 positive integers that are divisible by 6?',
    options: [
      '4800',
      '4920',
      '5040',
      '5160'
    ],
    correctAnswer: '4920',
    explanation: 'Numbers: 6, 12, 18, ... 240. Using S₄₀ = 40/2[2(6) + (40-1)6] = 20[12 + 234] = 20×246 = 4920.',
    wrongAnswerExplanations: {
      '4800': 'This uses incorrect values in the calculation.',
      '5040': 'This uses wrong values in the sum formula.',
      '5160': 'This incorrectly calculates the sum.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 150
  },
  {
    id: 'cl10_ch5_t2_qm16',
    type: 'mcq',
    question: 'In an AP with first term a and common difference d, the sum of its first n terms is:',
    options: [
      '[n(2a + (n-1)d)]/2',
      '[n(2a + (n+1)d)]/2',
      '[n(a + (n-1)d)]/2',
      '[n(a + (n+1)d)]/2'
    ],
    correctAnswer: '[n(2a + (n-1)d)]/2',
    explanation: 'The standard formula for sum of n terms of an AP is Sₙ = n/2[2a + (n-1)d].',
    wrongAnswerExplanations: {
      '[n(2a + (n+1)d)]/2': 'This incorrectly uses (n+1) instead of (n-1).',
      '[n(a + (n-1)d)]/2': 'This omits the 2 before a in the formula.',
      '[n(a + (n+1)d)]/2': 'This both omits the 2 before a and uses (n+1) incorrectly.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch5_t2_qm17',
    type: 'mcq',
    question: 'A man saved ₹1500 in the first year, and increased his savings by ₹300 each year. How much will he save in the 10th year?',
    options: [
      '₹3900',
      '₹4200',
      '₹4500',
      '₹4800'
    ],
    correctAnswer: '₹4200',
    explanation: 'AP with a = 1500, d = 300. T₁₀ = 1500 + 9(300) = 1500 + 2700 = 4200.',
    wrongAnswerExplanations: {
      '₹3900': 'This incorrectly calculates the 10th term as 1500 + 8(300).',
      '₹4500': 'This incorrectly calculates the 10th term as 1500 + 10(300).',
      '₹4800': 'This incorrectly calculates the 10th term as 1500 + 11(300).'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch5_t2_qm18',
    type: 'mcq',
    question: 'The sum of the first n terms of an AP whose first term is 8 and common difference is 5 is 570. Find n.',
    options: [
      '15',
      '18',
      '20',
      '21'
    ],
    correctAnswer: '15',
    explanation: 'Using S₁₅ = 15/2[2(8) + (15-1)5] = 7.5[16 + 70] = 7.5×86 = 645.',
    wrongAnswerExplanations: {
      '18': 'This gives a sum larger than 570.',
      '20': 'This gives a sum much larger than 570.',
      '21': 'This gives a sum much larger than 570.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch5_t2_qm19',
    type: 'mcq',
    question: 'The sum of first 16 terms of the sequence 1, 4, 9, 16, 25, ... is:',
    options: [
      '816',
      '1360',
      '1496',
      '1666'
    ],
    correctAnswer: '1496',
    explanation: 'This is a sequence of squares (n²). Sum = 1² + 2² + ... + 16² = [16×17×33]/6 = 1496.',
    wrongAnswerExplanations: {
      '816': 'This uses an incorrect formula for sum of squares.',
      '1360': 'This uses wrong values in the calculation.',
      '1666': 'This incorrectly calculates the sum of squares.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 150
  },
  {
    id: 'cl10_ch5_t2_qm20',
    type: 'mcq',
    question: 'If S₁, S₂, S₃, ... are the sums of first 1, 2, 3, ... terms of an AP, then S₁ + S₃ + S₅ + ... + S₂ₙ₋₁ equals:',
    options: [
      'n·S₂ₙ',
      'n·S₂ₙ₋₁',
      'n·S₂ₙ₋₂',
      'n·S₂ₙ₊₁'
    ],
    correctAnswer: 'n·S₂ₙ₋₁',
    explanation: 'Using pattern analysis and mathematical induction, S₁ + S₃ + S₅ + ... + S₂ₙ₋₁ = n·S₂ₙ₋₁.',
    wrongAnswerExplanations: {
      'n·S₂ₙ': 'This is incorrect based on the pattern of AP sums.',
      'n·S₂ₙ₋₂': 'This is incorrect based on the pattern of AP sums.',
      'n·S₂ₙ₊₁': 'This is incorrect based on the pattern of AP sums.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 180
  }
];
