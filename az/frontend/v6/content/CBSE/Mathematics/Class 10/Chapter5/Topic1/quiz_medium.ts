import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
  {
    id: 'cl10_ch5_t1_qm1',
    type: 'mcq',
    question: 'If the 7th term of an AP is 4 times the 3rd term, and the 10th term is 37, what is the first term?',
    options: [
      '1',
      '2',
      '3',
      '4'
    ],
    correctAnswer: '1',
    explanation: 'From a₇ = 4a₃, we get a + 6d = 4(a + 2d), solving with a₁₀ = 37 gives a = 1 and d = 4.',
    wrongAnswerExplanations: {
      '2': 'This doesn\'t satisfy the condition that a₇ = 4a₃.',
      '3': 'This doesn\'t satisfy the condition a₁₀ = 37.',
      '4': 'This doesn\'t satisfy the equations derived from the given conditions.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch5_t1_qm2',
    type: 'mcq',
    question: 'In an AP, the sum of the 4th and 8th terms is 24, and the sum of the 6th and 10th terms is 36. What is the first term?',
    options: [
      '1',
      '2',
      '3',
      '4'
    ],
    correctAnswer: '1',
    explanation: 'From a₄ + a₈ = 24 and a₆ + a₁₀ = 36, we get 2a + 10d = 24 and 2a + 14d = 36, so d = 3 and a = 1.',
    wrongAnswerExplanations: {
      '2': 'This doesn\'t satisfy the system of equations derived from the given conditions.',
      '3': 'This doesn\'t satisfy the system of equations derived from the given conditions.',
      '4': 'This doesn\'t satisfy the system of equations derived from the given conditions.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch5_t1_qm3',
    type: 'mcq',
    question: 'If 7 times the 7th term of an AP equals 11 times its 11th term, then the 18th term equals:',
    options: [
      '0',
      '1',
      '7',
      '11'
    ],
    correctAnswer: '0',
    explanation: '7a₇ = 11a₁₁ gives 7(a+6d) = 11(a+10d), so a = -18d. Thus a₁₈ = a+17d = -18d+17d = -d.',
    wrongAnswerExplanations: {
      '1': 'Incorrect calculation based on the given condition.',
      '7': 'Incorrect calculation based on the given condition.',
      '11': 'Incorrect calculation based on the given condition.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch5_t1_qm4',
    type: 'mcq',
    question: 'If the 9th term of an AP is zero, the 4th term is 10, and the last term is -50, how many terms are there?',
    options: [
      '19',
      '18',
      '17',
      '16'
    ],
    correctAnswer: '19',
    explanation: 'Using a₉ = 0 and a₄ = 10, we get d = -2 and a = 18. For aₙ = -50, 18+(n-1)(-2) = -50 gives n = 19.',
    wrongAnswerExplanations: {
      '18': 'This would make the last term -48, not -50.',
      '17': 'This would make the last term -46, not -50.',
      '16': 'This would make the last term -44, not -50.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch5_t1_qm5',
    type: 'mcq',
    question: 'The arithmetic mean of two numbers is 15 and their geometric mean is 12. The numbers are:',
    options: [
      '9 and 21',
      '10 and 20',
      '8 and 22',
      '12 and 18'
    ],
    correctAnswer: '9 and 21',
    explanation: 'If x and y are the numbers, (x+y)/2 = 15 and √xy = 12. Thus x+y = 30 and xy = 144, giving x = 9, y = 21.',
    wrongAnswerExplanations: {
      '10 and 20': 'These sum to 30 but their product is 200, not 144.',
      '8 and 22': 'These sum to 30 but their product is 176, not 144.',
      '12 and 18': 'These sum to 30 but their product is 216, not 144.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch5_t1_qm6',
    type: 'mcq',
    question: 'In an AP, if a₁₃ - a₃ = 30 and a₁₅ - a₅ = 30, then the common difference is:',
    options: [
      '3',
      '3.5',
      '2.5',
      '4'
    ],
    correctAnswer: '3',
    explanation: 'a₁₃ - a₃ = (a+12d) - (a+2d) = 10d = 30, so d = 3. We can verify: a₁₅-a₅ = 10d = 30.',
    wrongAnswerExplanations: {
      '3.5': 'This doesn\'t satisfy a₁₃ - a₃ = 30.',
      '2.5': 'This doesn\'t satisfy a₁₃ - a₃ = 30.',
      '4': 'This would make a₁₃ - a₃ = 40, not 30.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch5_t1_qm7',
    type: 'mcq',
    question: 'In an AP with first term a and common difference d, the mth term is n and the nth term is m. The value of a + (m+n-1)d is:',
    options: [
      'm + n',
      'm - n',
      'n - m',
      '0'
    ],
    correctAnswer: 'm + n',
    explanation: 'a+(m-1)d = n and a+(n-1)d = m, adding: 2a+(m+n-2)d = m+n, so a+(m+n-1)d = m+n.',
    wrongAnswerExplanations: {
      'm - n': 'Incorrect manipulation of the given equations.',
      'n - m': 'Incorrect manipulation of the given equations.',
      '0': 'Incorrect manipulation of the given equations.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch5_t1_qm8',
    type: 'mcq',
    question: 'Find the 31st term of an AP whose 11th term is 38 and 16th term is 73.',
    options: [
      '178',
      '183',
      '188',
      '193'
    ],
    correctAnswer: '178',
    explanation: 'From a₁₁ = 38 and a₁₆ = 73, we get d = 7 and a = -39. Thus a₃₁ = -39 + 30×7 = -39 + 210 = 171.',
    wrongAnswerExplanations: {
      '183': 'Calculation error in finding the 31st term.',
      '188': 'Calculation error in finding the 31st term.',
      '193': 'Calculation error in finding the 31st term.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch5_t1_qm9',
    type: 'mcq',
    question: 'The common difference of an AP is 5. If the sum of its 5th and 9th terms is 52, what is its first term?',
    options: [
      '4',
      '6',
      '2',
      '8'
    ],
    correctAnswer: '4',
    explanation: 'a₅ + a₉ = (a+4d) + (a+8d) = 2a+12d = 52. With d = 5, we get 2a+60 = 52, so a = -4.',
    wrongAnswerExplanations: {
      '6': 'This gives a₅ + a₉ = 12 + 20(5) + 12 = 124, not 52.',
      '2': 'This gives a₅ + a₉ = 4 + 12(5) = 64, not 52.',
      '8': 'This gives a₅ + a₉ = 16 + 12(5) = 76, not 52.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch5_t1_qm10',
    type: 'mcq',
    question: 'If a₄ + a₁₂ = 10 and a₆ + a₁₀ = 10 in an AP, find a₂₀ - a₄.',
    options: [
      '0',
      '8',
      '10',
      '12'
    ],
    correctAnswer: '0',
    explanation: 'a₄ + a₁₂ = (a+3d) + (a+11d) = 2a+14d = 10, and a₆ + a₁₀ = 2a+14d = 10. So a₂₀ = a₄ from pattern.',
    wrongAnswerExplanations: {
      '8': 'Incorrect calculation based on the given conditions.',
      '10': 'Incorrect calculation based on the given conditions.',
      '12': 'Incorrect calculation based on the given conditions.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch5_t1_qm11',
    type: 'mcq',
    question: 'Insert three arithmetic means between 4 and 24.',
    options: [
      '9, 14, 19',
      '8, 14, 20',
      '8, 12, 16',
      '10, 16, 22'
    ],
    correctAnswer: '9, 14, 19',
    explanation: 'With 5 terms from 4 to 24, d = (24-4)/4 = 5. The 3 arithmetic means are 4+5=9, 9+5=14, 14+5=19.',
    wrongAnswerExplanations: {
      '8, 14, 20': 'These are not evenly spaced between 4 and 24.',
      '8, 12, 16': 'These don\'t reach 24 as the final term.',
      '10, 16, 22': 'These don\'t start from 4 as the first term.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch5_t1_qm12',
    type: 'mcq',
    question: 'Find the 20th term from the end of the AP 3, 7, 11, ..., 407.',
    options: [
      '327',
      '347',
      '367',
      '387'
    ],
    correctAnswer: '327',
    explanation: 'Last term = 407, d = 4, total terms n = (407-3)/4+1 = 102. 20th from end is (102-20+1)th = 83rd term = 3+82(4) = 331.',
    wrongAnswerExplanations: {
      '347': 'Calculation error in finding the term.',
      '367': 'Calculation error in finding the term.',
      '387': 'Calculation error in finding the term.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch5_t1_qm13',
    type: 'mcq',
    question: 'For what value of k are k+2, 4k-6, 3k-2 consecutive terms of an AP?',
    options: [
      'k = 5',
      'k = 6',
      'k = 7',
      'k = 8'
    ],
    correctAnswer: 'k = 5',
    explanation: 'For consecutive AP terms: (4k-6)-(k+2) = (3k-2)-(4k-6), solving gives k = 5.',
    wrongAnswerExplanations: {
      'k = 6': 'With k = 6, the terms would be 8, 18, 16, which are not in AP.',
      'k = 7': 'With k = 7, the terms would be 9, 22, 19, which are not in AP.',
      'k = 8': 'With k = 8, the terms would be 10, 26, 22, which are not in AP.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch5_t1_qm14',
    type: 'mcq',
    question: 'The number of multiples of 4 between 10 and 250 is:',
    options: [
      '60',
      '59',
      '61',
      '58'
    ],
    correctAnswer: '60',
    explanation: 'First multiple of 4 after 10 is 12, last before 250 is 248. Terms = (248-12)/4+1 = 60.',
    wrongAnswerExplanations: {
      '59': 'Incorrect count of multiples in the given range.',
      '61': 'Incorrect count of multiples in the given range.',
      '58': 'Incorrect count of multiples in the given range.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch5_t1_qm15',
    type: 'mcq',
    question: 'If three numbers in AP have a product of 80 and a sum of 12, what is the middle number?',
    options: [
      '4',
      '3',
      '6',
      '5'
    ],
    correctAnswer: '4',
    explanation: 'If numbers are a-d, a, a+d, then (a-d)(a)(a+d) = 80 and 3a = 12, so a = 4. Solving: (a²-d²)a = 80.',
    wrongAnswerExplanations: {
      '3': 'With middle term 3, the others can\'t form an AP with the given constraints.',
      '6': 'With middle term 6, the others can\'t form an AP with the given constraints.',
      '5': 'With middle term 5, the others can\'t form an AP with the given constraints.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch5_t1_qm16',
    type: 'mcq',
    question: 'If the nth term of an AP is (2n+1), what is the common difference?',
    options: [
      '2',
      '3',
      '1',
      '4'
    ],
    correctAnswer: '2',
    explanation: 'aₙ = 2n + 1, so a₁ = 3, a₂ = 5, a₃ = 7, etc. The common difference is 2.',
    wrongAnswerExplanations: {
      '3': 'This would make successive terms have a difference of 3, not 2.',
      '1': 'This would make successive terms have a difference of 1, not 2.',
      '4': 'This would make successive terms have a difference of 4, not 2.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch5_t1_qm17',
    type: 'mcq',
    question: 'In an AP, if a₅ = 16 and a₁₁ = 40, what is a₂₃?',
    options: [
      '88',
      '84',
      '92',
      '86'
    ],
    correctAnswer: '88',
    explanation: 'a₁₁ - a₅ = 40 - 16 = 24 = (11-5)d, so d = 4. a₁ = 16 - 4(4) = 0. Thus a₂₃ = 0 + 22(4) = 88.',
    wrongAnswerExplanations: {
      '84': 'Calculation error in finding a₂₃.',
      '92': 'Calculation error in finding a₂₃.',
      '86': 'Calculation error in finding a₂₃.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch5_t1_qm18',
    type: 'mcq',
    question: 'In an AP with a = 3 and d = 4, how many terms must be taken so that their sum is 280?',
    options: [
      '10',
      '12',
      '8',
      '14'
    ],
    correctAnswer: '10',
    explanation: 'Sₙ = n/2[2a+(n-1)d] = n/2[6+(n-1)4]. For Sₙ = 280, solving gives n = 10.',
    wrongAnswerExplanations: {
      '12': 'This gives a sum of 396, not 280.',
      '8': 'This gives a sum of 172, not 280.',
      '14': 'This gives a sum of 574, not 280.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch5_t1_qm19',
    type: 'mcq',
    question: 'If the sum of three numbers in AP is 15 and their product is 80, what are the numbers?',
    options: [
      '3, 5, 7',
      '2, 5, 8',
      '1, 5, 9',
      '4, 5, 6'
    ],
    correctAnswer: '3, 5, 7',
    explanation: 'If numbers are a-d, a, a+d, their sum is 3a = 15, so a = 5. From product = 80, (25-d²)5 = 80, so d = 2.',
    wrongAnswerExplanations: {
      '2, 5, 8': 'These sum to 15 but product is 80, not 80.',
      '1, 5, 9': 'These sum to 15 but product is 45, not 80.',
      '4, 5, 6': 'These sum to 15 but product is 120, not 80.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch5_t1_qm20',
    type: 'mcq',
    question: 'Find the 10th term from the end of the AP 3, 8, 13, ..., 253.',
    options: [
      '203',
      '208',
      '213',
      '218'
    ],
    correctAnswer: '208',
    explanation: 'Last term = 253, d = 5, total terms n = (253-3)/5+1 = 51. 10th from end is (51-10+1)th = 42nd term = 3+41(5) = 208.',
    wrongAnswerExplanations: {
      '203': 'Calculation error in finding the term.',
      '213': 'Calculation error in finding the term.',
      '218': 'Calculation error in finding the term.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  }
];
