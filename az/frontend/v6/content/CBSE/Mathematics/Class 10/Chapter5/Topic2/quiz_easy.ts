import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
  {
    id: 'cl10_ch5_t2_qe1',
    type: 'mcq',
    question: 'What is the sum of first 10 terms of the AP: 5, 8, 11, 14, ...?',
    options: [
      '140',
      '185',
      '230',
      '275'
    ],
    correctAnswer: '230',
    explanation: 'Using S₁₀ = 10/2[2×5 + (10-1)×3] = 5[10 + 27] = 5×37 = 230',
    wrongAnswerExplanations: {
      '140': 'This incorrectly uses n = 10 and d = 5 in the formula.',
      '185': 'This incorrectly calculates the sum formula with wrong values.',
      '275': 'This uses incorrect values in the sum formula.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch5_t2_qe2',
    type: 'mcq',
    question: 'The formula for the sum of first n terms of an AP is:',
    options: [
      'Sₙ = n/2[2a + (n-1)d]',
      'Sₙ = n/2[a + l]',
      'Sₙ = n[2a + (n-1)d]',
      'Both A and B are correct'
    ],
    correctAnswer: 'Both A and B are correct',
    explanation: 'Both formulas are valid: Sₙ = n/2[2a + (n-1)d] and Sₙ = n/2[a + l] where l is the last term.',
    wrongAnswerExplanations: {
      'Sₙ = n/2[2a + (n-1)d]': 'This is correct, but option D is more complete.',
      'Sₙ = n/2[a + l]': 'This is correct, but option D is more complete.',
      'Sₙ = n[2a + (n-1)d]': 'This is incorrect; the formula should have n/2, not just n.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 45
  },
  {
    id: 'cl10_ch5_t2_qe3',
    type: 'mcq',
    question: 'The sum of first 15 terms of the AP: 3, 7, 11, 15, ... is:',
    options: [
      '450',
      '480',
      '510',
      '540'
    ],
    correctAnswer: '450',
    explanation: 'S₁₅ = 15/2[2×3 + (15-1)×4] = 7.5[6 + 56] = 7.5×62 = 450',
    wrongAnswerExplanations: {
      '480': 'This uses an incorrect value of d or n in the formula.',
      '510': 'This uses an incorrect calculation in the sum formula.',
      '540': 'This incorrectly calculates the sum with wrong values.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch5_t2_qe4',
    type: 'mcq',
    question: 'The sum of first 20 natural numbers is:',
    options: [
      '190',
      '200',
      '210',
      '220'
    ],
    correctAnswer: '210',
    explanation: 'Sum of first n natural numbers = n(n+1)/2 = 20×21/2 = 210',
    wrongAnswerExplanations: {
      '190': 'This incorrectly calculates n(n-1)/2 instead of n(n+1)/2.',
      '200': 'This simply multiplies 20×10 but ignores the formula.',
      '220': 'This adds 10 to the correct answer without justification.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl10_ch5_t2_qe5',
    type: 'mcq',
    question: 'If the sum of first n terms of an AP is n², then the first term is:',
    options: [
      '1',
      '2',
      '3',
      '4'
    ],
    correctAnswer: '1',
    explanation: 'For Sₙ = n², S₁ = 1² = 1, which is the first term.',
    wrongAnswerExplanations: {
      '2': 'This is incorrect based on the given condition Sₙ = n².',
      '3': 'This is incorrect based on the given condition Sₙ = n².',
      '4': 'This is incorrect based on the given condition Sₙ = n².'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 45
  },
  {
    id: 'cl10_ch5_t2_qe6',
    type: 'mcq',
    question: 'The sum of first 10 even natural numbers is:',
    options: [
      '100',
      '110',
      '120',
      '130'
    ],
    correctAnswer: '110',
    explanation: 'Even numbers AP: 2, 4, 6, ..., so S₁₀ = 10/2[2×2 + (10-1)×2] = 5[4 + 18] = 110',
    wrongAnswerExplanations: {
      '100': 'This incorrectly calculates the sum formula.',
      '120': 'This incorrectly assumes the sum to be n(n+1) instead of n(n+1)/2.',
      '130': 'This uses wrong values in the sum formula.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch5_t2_qe7',
    type: 'mcq',
    question: 'The sum of first 15 odd natural numbers is:',
    options: [
      '105',
      '225',
      '240',
      '255'
    ],
    correctAnswer: '225',
    explanation: 'Sum of first n odd numbers = n² = 15² = 225',
    wrongAnswerExplanations: {
      '105': 'This incorrectly calculates the formula for sum of natural numbers.',
      '240': 'This adds 15 to the correct answer without justification.',
      '255': 'This uses wrong calculation formula for odd numbers.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 45
  },
  {
    id: 'cl10_ch5_t2_qe8',
    type: 'mcq',
    question: 'In an AP with a = 3 and d = 4, the sum of first 10 terms is:',
    options: [
      '180',
      '210',
      '240',
      '270'
    ],
    correctAnswer: '210',
    explanation: 'S₁₀ = 10/2[2×3 + (10-1)×4] = 5[6 + 36] = 5×42 = 210',
    wrongAnswerExplanations: {
      '180': 'This uses an incorrect calculation in the sum formula.',
      '240': 'This incorrectly multiplies by 6 instead of 5 in the formula.',
      '270': 'This incorrectly adds rather than multiplies in the final step.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 45
  },
  {
    id: 'cl10_ch5_t2_qe9',
    type: 'mcq',
    question: 'What is the sum of the first 20 terms of the AP: -6, -3, 0, 3, ...?',
    options: [
      '270',
      '280',
      '290',
      '300'
    ],
    correctAnswer: '270',
    explanation: 'S₂₀ = 20/2[2×(-6) + (20-1)×3] = 10[-12 + 57] = 10×45 = 270',
    wrongAnswerExplanations: {
      '280': 'This uses an incorrect value in the calculation.',
      '290': 'This calculation is incorrect due to arithmetic errors.',
      '300': 'This uses wrong values in the sum formula.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch5_t2_qe10',
    type: 'mcq',
    question: 'If the sum of first n terms of an AP is 3n² + 4n, then the first term (a) of the AP is:',
    options: [
      '5',
      '6',
      '7',
      '8'
    ],
    correctAnswer: '7',
    explanation: 'For n = 1, S₁ = 3(1)² + 4(1) = 3 + 4 = 7, which equals a.',
    wrongAnswerExplanations: {
      '5': 'This is incorrect based on the given condition.',
      '6': 'This is incorrect based on the given condition.',
      '8': 'This is incorrect based on the given condition.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch5_t2_qe11',
    type: 'mcq',
    question: 'The sum of the first 12 terms of the AP: 3, 8, 13, 18, ... is:',
    options: [
      '390',
      '408',
      '426',
      '444'
    ],
    correctAnswer: '408',
    explanation: 'S₁₂ = 12/2[2×3 + (12-1)×5] = 6[6 + 55] = 6×61 = 366 + 42 = 408',
    wrongAnswerExplanations: {
      '390': 'This uses an incorrect value of the common difference d.',
      '426': 'This uses an incorrect value in the calculation.',
      '444': 'This uses wrong values in the sum formula.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch5_t2_qe12',
    type: 'mcq',
    question: 'The sum of first n terms of an AP is 2n² - 3n. The common difference (d) is:',
    options: [
      '3',
      '4',
      '5',
      '6'
    ],
    correctAnswer: '4',
    explanation: 'From S₁ = 2(1)² - 3(1) = 2 - 3 = -1 and S₂ = 2(2)² - 3(2) = 8 - 6 = 2, we get d = S₂ - S₁ - S₁ = 2 - (-1) - (-1) = 4.',
    wrongAnswerExplanations: {
      '3': 'This incorrectly calculates the common difference.',
      '5': 'This incorrectly calculates the common difference.',
      '6': 'This incorrectly calculates the common difference.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch5_t2_qe13',
    type: 'mcq',
    question: 'The sum of first 10 multiples of 7 is:',
    options: [
      '350',
      '385',
      '405',
      '427'
    ],
    correctAnswer: '385',
    explanation: 'Multiples of 7: 7, 14, 21, ... S₁₀ = 10/2[2×7 + (10-1)×7] = 5[14 + 63] = 5×77 = 385',
    wrongAnswerExplanations: {
      '350': 'This incorrectly calculates the sum formula.',
      '405': 'This uses wrong values in the calculation.',
      '427': 'This uses wrong values in the sum formula.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch5_t2_qe14',
    type: 'mcq',
    question: 'In the formula Sₙ = n/2[2a + (n-1)d], what does "l" represent in terms of "a", "n" and "d"?',
    options: [
      'l = a + (n-1)d',
      'l = a + nd',
      'l = a - (n-1)d',
      'l = a - nd'
    ],
    correctAnswer: 'l = a + (n-1)d',
    explanation: 'Last term l = a + (n-1)d, where a is first term, d is common difference, and n is number of terms.',
    wrongAnswerExplanations: {
      'l = a + nd': 'This incorrectly adds nd instead of (n-1)d to find the last term.',
      'l = a - (n-1)d': 'This subtracts (n-1)d instead of adding it.',
      'l = a - nd': 'This incorrectly subtracts nd to find the last term.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 45
  },
  {
    id: 'cl10_ch5_t2_qe15',
    type: 'mcq',
    question: 'The sum of first 20 terms of the AP: 2, 5, 8, 11, ... is:',
    options: [
      '570',
      '610',
      '650',
      '690'
    ],
    correctAnswer: '610',
    explanation: 'S₂₀ = 20/2[2×2 + (20-1)×3] = 10[4 + 57] = 10×61 = 610',
    wrongAnswerExplanations: {
      '570': 'This uses an incorrect value in the calculation.',
      '650': 'This uses wrong values in the sum formula.',
      '690': 'This incorrectly calculates the sum formula.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch5_t2_qe16',
    type: 'mcq',
    question: 'The sum of the first n terms of an AP is 4n - n². What is the common difference?',
    options: [
      '-1',
      '-2',
      '1',
      '2'
    ],
    correctAnswer: '-2',
    explanation: 'From S₁ = 4(1) - 1² = 4-1 = 3 and S₂ = 4(2) - 2² = 8-4 = 4, T₂ = S₂ - S₁ = 4 - 3 = 1, so d = T₂ - T₁ = 1 - 3 = -2',
    wrongAnswerExplanations: {
      '-1': 'This incorrectly calculates the common difference.',
      '1': 'This forgets to account for the sign in the calculation.',
      '2': 'This uses wrong values in the formula.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch5_t2_qe17',
    type: 'mcq',
    question: 'What is the sum of first 15 terms of the AP: 1, 0, -1, -2, ...?',
    options: [
      '-75',
      '-90',
      '-105',
      '-120'
    ],
    correctAnswer: '-105',
    explanation: 'S₁₅ = 15/2[2×1 + (15-1)×(-1)] = 7.5[2 - 14] = 7.5×(-12) = -90',
    wrongAnswerExplanations: {
      '-75': 'This uses an incorrect value in the calculation.',
      '-90': 'This is the correct answer: 7.5×(-12) = -90.',
      '-120': 'This uses wrong values in the sum formula.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch5_t2_qe18',
    type: 'mcq',
    question: 'If the sum of first n terms of an AP is n²/2 + n/2, then the first term is:',
    options: [
      '0',
      '1',
      '2',
      '3'
    ],
    correctAnswer: '1',
    explanation: 'For n = 1, S₁ = (1)²/2 + 1/2 = 1/2 + 1/2 = 1, which is the first term.',
    wrongAnswerExplanations: {
      '0': 'This is incorrect based on the given condition.',
      '2': 'This is incorrect based on the given condition.',
      '3': 'This is incorrect based on the given condition.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch5_t2_qe19',
    type: 'mcq',
    question: 'Which of the following is NOT a valid formula for the sum of first n terms of an AP?',
    options: [
      'Sₙ = n/2[a + l]',
      'Sₙ = n/2[2a + (n-1)d]',
      'Sₙ = n[a + l]/2',
      'Sₙ = n[a × l]'
    ],
    correctAnswer: 'Sₙ = n[a × l]',
    explanation: 'Sₙ = n[a × l] is incorrect. The correct formulas use addition, not multiplication, of first and last terms.',
    wrongAnswerExplanations: {
      'Sₙ = n/2[a + l]': 'This is a correct formula where l is the last term.',
      'Sₙ = n/2[2a + (n-1)d]': 'This is the standard formula for sum of an AP.',
      'Sₙ = n[a + l]/2': 'This is equivalent to n/2[a + l], which is correct.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 45
  },
  {
    id: 'cl10_ch5_t2_qe20',
    type: 'mcq',
    question: 'The sum of first 10 terms of the AP: -12, -9, -6, -3, ... is:',
    options: [
      '-30',
      '-15',
      '0',
      '15'
    ],
    correctAnswer: '15',
    explanation: 'S₁₀ = 10/2[2×(-12) + (10-1)×3] = 5[-24 + 27] = 5×3 = 15',
    wrongAnswerExplanations: {
      '-30': 'This uses an incorrect value in the calculation.',
      '-15': 'This uses wrong values in the sum formula.',
      '0': 'This incorrectly assumes the sum to be 0.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  }
];
