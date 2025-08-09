import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
  {
    id: 'cl10_ch5_t1_qe1',
    type: 'mcq',
    question: 'What is an arithmetic progression?',
    options: [
      'A sequence where each term increases by a constant factor',
      'A sequence where each term is a constant multiple of the previous term',
      'A sequence where each term differs from the preceding term by a constant value',
      'A sequence where the sum of any two consecutive terms is constant'
    ],
    correctAnswer: 'A sequence where each term differs from the preceding term by a constant value',
    explanation: 'In an AP, the difference between consecutive terms (common difference) is constant.',
    wrongAnswerExplanations: {
      'A sequence where each term increases by a constant factor': 'This describes a geometric progression, not an arithmetic progression.',
      'A sequence where each term is a constant multiple of the previous term': 'This describes a geometric progression, not an arithmetic progression.',
      'A sequence where the sum of any two consecutive terms is constant': 'This is not the definition of an arithmetic progression.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl10_ch5_t1_qe2',
    type: 'mcq',
    question: 'In an arithmetic progression, the common difference is denoted by:',
    options: [
      'd',
      'r',
      'a',
      'n'
    ],
    correctAnswer: 'd',
    explanation: 'The common difference in an AP is denoted by d, where d = a₂ - a₁ = a₃ - a₂, etc.',
    wrongAnswerExplanations: {
      'r': 'r typically represents the common ratio in a geometric progression.',
      'a': 'a typically represents the first term of the sequence.',
      'n': 'n typically represents the number of terms in the sequence.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl10_ch5_t1_qe3',
    type: 'mcq',
    question: 'The general term (nth term) of an arithmetic progression is given by the formula:',
    options: [
      'aₙ = a + (n-1)d',
      'aₙ = a × dⁿ⁻¹',
      'aₙ = a + nd',
      'aₙ = a × n'
    ],
    correctAnswer: 'aₙ = a + (n-1)d',
    explanation: 'The formula aₙ = a + (n-1)d gives the nth term, where a is first term and d is common difference.',
    wrongAnswerExplanations: {
      'aₙ = a × dⁿ⁻¹': 'This is the formula for the nth term of a geometric progression.',
      'aₙ = a + nd': 'This formula is incorrect; it would give a₁ = a + d, which doesn\'t match the first term.',
      'aₙ = a × n': 'This is not the formula for an arithmetic progression.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl10_ch5_t1_qe4',
    type: 'mcq',
    question: 'In the arithmetic progression 3, 7, 11, 15, ..., the common difference is:',
    options: [
      '4',
      '3',
      '8',
      '2'
    ],
    correctAnswer: '4',
    explanation: 'Common difference d = 7 - 3 = 11 - 7 = 15 - 11 = 4.',
    wrongAnswerExplanations: {
      '3': 'This is the first term, not the common difference.',
      '8': 'This value doesn\'t represent any significant element in the given AP.',
      '2': 'The common difference is 4, not 2.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl10_ch5_t1_qe5',
    type: 'mcq',
    question: 'The first term of an AP is 5 and the common difference is 3. What is the 10th term?',
    options: [
      '32',
      '30',
      '35',
      '27'
    ],
    correctAnswer: '32',
    explanation: 'a₁₀ = 5 + (10-1)×3 = 5 + 9×3 = 5 + 27 = 32.',
    wrongAnswerExplanations: {
      '30': 'Calculation error in finding the 10th term.',
      '35': 'Calculation error in finding the 10th term.',
      '27': 'This is (10-1)×3, not the 10th term.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 45
  },
  {
    id: 'cl10_ch5_t1_qe6',
    type: 'mcq',
    question: 'Which of the following sequences is an arithmetic progression?',
    options: [
      '2, 4, 8, 16, ...',
      '1, 4, 9, 16, ...',
      '3, 8, 13, 18, ...',
      '1, 3, 6, 10, ...'
    ],
    correctAnswer: '3, 8, 13, 18, ...',
    explanation: 'In 3, 8, 13, 18, the common difference is 5 throughout the sequence.',
    wrongAnswerExplanations: {
      '2, 4, 8, 16, ...': 'This is a geometric progression with common ratio 2.',
      '1, 4, 9, 16, ...': 'This is a sequence of perfect squares, not an AP.',
      '1, 3, 6, 10, ...': 'This is a sequence of triangular numbers, not an AP.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 45
  },
  {
    id: 'cl10_ch5_t1_qe7',
    type: 'mcq',
    question: 'If the 3rd term of an AP is 10 and the 7th term is 26, what is the first term?',
    options: [
      '2',
      '4',
      '6',
      '8'
    ],
    correctAnswer: '2',
    explanation: 'Using a₃ = 10 and a₇ = 26, we get d = 4 and a₁ = 10 - 2d = 10 - 8 = 2.',
    wrongAnswerExplanations: {
      '4': 'This would make the third term 12, not 10.',
      '6': 'This would make the third term 14, not 10.',
      '8': 'This would make the third term 16, not 10.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch5_t1_qe8',
    type: 'mcq',
    question: 'In an AP, if a = 3 and d = 4, what is the value of a₁₅?',
    options: [
      '59',
      '57',
      '61',
      '63'
    ],
    correctAnswer: '59',
    explanation: 'a₁₅ = 3 + (15-1)×4 = 3 + 14×4 = 3 + 56 = 59.',
    wrongAnswerExplanations: {
      '57': 'Calculation error in finding the 15th term.',
      '61': 'Calculation error in finding the 15th term.',
      '63': 'Calculation error in finding the 15th term.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 45
  },
  {
    id: 'cl10_ch5_t1_qe9',
    type: 'mcq',
    question: 'Which term of the AP 3, 8, 13, 18, ... is 78?',
    options: [
      '16th',
      '15th',
      '17th',
      '18th'
    ],
    correctAnswer: '16th',
    explanation: 'a₁ = 3, d = 5, and aₙ = 78. Using aₙ = a₁ + (n-1)d: 78 = 3 + (n-1)5, solving gives n = 16.',
    wrongAnswerExplanations: {
      '15th': 'The 15th term would be 3 + 14×5 = 73.',
      '17th': 'The 17th term would be 3 + 16×5 = 83.',
      '18th': 'The 18th term would be 3 + 17×5 = 88.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch5_t1_qe10',
    type: 'mcq',
    question: 'The common difference of the AP √2, √8, √18, √32, ... is:',
    options: [
      '√2',
      '2',
      '√6',
      '6'
    ],
    correctAnswer: '2',
    explanation: '√8 - √2 = 2√2 - √2 = √2 and √18 - √8 = 3√2 - 2√2 = √2, so common difference is 2.',
    wrongAnswerExplanations: {
      '√2': 'The terms simplified are √2, 2√2, 3√2, 4√2, which differ by √2, not 2.',
      '√6': 'Not the correct difference between consecutive terms.',
      '6': 'Not the correct difference between consecutive terms.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch5_t1_qe11',
    type: 'mcq',
    question: 'If the 8th term of an AP is 37 and the 15th term is 65, what is the common difference?',
    options: [
      '4',
      '3',
      '5',
      '6'
    ],
    correctAnswer: '4',
    explanation: 'a₁₅ - a₈ = (a + 14d) - (a + 7d) = 7d = 65 - 37 = 28, so d = 4.',
    wrongAnswerExplanations: {
      '3': 'This would give a difference of 21 between the 15th and 8th terms, not 28.',
      '5': 'This would give a difference of 35 between the 15th and 8th terms, not 28.',
      '6': 'This would give a difference of 42 between the 15th and 8th terms, not 28.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch5_t1_qe12',
    type: 'mcq',
    question: 'In an AP, if a₁ = 7 and a₁₀ = 43, what is the common difference?',
    options: [
      '4',
      '5',
      '3',
      '2'
    ],
    correctAnswer: '4',
    explanation: 'a₁₀ = a₁ + 9d, so 43 = 7 + 9d, giving d = 4.',
    wrongAnswerExplanations: {
      '5': 'This would give a₁₀ = 7 + 9×5 = 52, not 43.',
      '3': 'This would give a₁₀ = 7 + 9×3 = 34, not 43.',
      '2': 'This would give a₁₀ = 7 + 9×2 = 25, not 43.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 45
  },
  {
    id: 'cl10_ch5_t1_qe13',
    type: 'mcq',
    question: 'How many terms are there in the AP 7, 10, 13, ..., 70?',
    options: [
      '22',
      '21',
      '23',
      '20'
    ],
    correctAnswer: '22',
    explanation: 'a₁ = 7, d = 3, aₙ = 70. Using aₙ = a₁ + (n-1)d: 70 = 7 + (n-1)3, so n = 22.',
    wrongAnswerExplanations: {
      '21': 'This would give last term 7 + 20×3 = 67, not 70.',
      '23': 'This would give last term 7 + 22×3 = 73, not 70.',
      '20': 'This would give last term 7 + 19×3 = 64, not 70.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch5_t1_qe14',
    type: 'mcq',
    question: 'Which of the following is an arithmetic progression?',
    options: [
      '5, 9, 13, 17, ...',
      '5, 10, 20, 40, ...',
      '5, 8, 12, 17, ...',
      '5, 10, 15, 25, ...'
    ],
    correctAnswer: '5, 9, 13, 17, ...',
    explanation: '9 - 5 = 13 - 9 = 17 - 13 = 4, showing a constant difference of 4.',
    wrongAnswerExplanations: {
      '5, 10, 20, 40, ...': 'This is a geometric progression with ratio 2.',
      '5, 8, 12, 17, ...': 'The differences (3, 4, 5) are not constant.',
      '5, 10, 15, 25, ...': 'The differences (5, 5, 10) are not constant.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 45
  },
  {
    id: 'cl10_ch5_t1_qe15',
    type: 'mcq',
    question: 'If an AP has first term 10 and common difference -3, what is the 8th term?',
    options: [
      '-11',
      '-8',
      '-5',
      '-10'
    ],
    correctAnswer: '-11',
    explanation: 'a₈ = 10 + (8-1)×(-3) = 10 - 21 = -11.',
    wrongAnswerExplanations: {
      '-8': 'Calculation error in finding the 8th term.',
      '-5': 'Calculation error in finding the 8th term.',
      '-10': 'Calculation error in finding the 8th term.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 45
  },
  {
    id: 'cl10_ch5_t1_qe16',
    type: 'mcq',
    question: 'Which term of the AP 5, 9, 13, 17, ... is 101?',
    options: [
      '25th',
      '24th',
      '26th',
      '27th'
    ],
    correctAnswer: '25th',
    explanation: 'a₁ = 5, d = 4, aₙ = 101. Using aₙ = a₁ + (n-1)d: 101 = 5 + (n-1)4, so n = 25.',
    wrongAnswerExplanations: {
      '24th': 'The 24th term would be 5 + 23×4 = 97.',
      '26th': 'The 26th term would be 5 + 25×4 = 105.',
      '27th': 'The 27th term would be 5 + 26×4 = 109.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch5_t1_qe17',
    type: 'mcq',
    question: 'In an AP, if the first term is -5 and the common difference is 2, what is the 20th term?',
    options: [
      '33',
      '35',
      '31',
      '37'
    ],
    correctAnswer: '33',
    explanation: 'a₂₀ = -5 + (20-1)×2 = -5 + 19×2 = -5 + 38 = 33.',
    wrongAnswerExplanations: {
      '35': 'Calculation error in finding the 20th term.',
      '31': 'Calculation error in finding the 20th term.',
      '37': 'Calculation error in finding the 20th term.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 45
  },
  {
    id: 'cl10_ch5_t1_qe18',
    type: 'mcq',
    question: 'What is the first term of an AP whose 5th term is 19 and 11th term is 37?',
    options: [
      '7',
      '9',
      '11',
      '13'
    ],
    correctAnswer: '7',
    explanation: 'Using a₅ = 19 and a₁₁ = 37, we get d = 3 and a₁ = 19 - 4d = 19 - 12 = 7.',
    wrongAnswerExplanations: {
      '9': 'This would make the 5th term 21, not 19.',
      '11': 'This would make the 5th term 23, not 19.',
      '13': 'This would make the 5th term 25, not 19.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch5_t1_qe19',
    type: 'mcq',
    question: 'If the 5th term of an AP is 16 and the 8th term is 25, what is the 12th term?',
    options: [
      '37',
      '35',
      '39',
      '41'
    ],
    correctAnswer: '37',
    explanation: 'From the given terms, d = (25-16)/3 = 3, so a₁ = 16 - 4d = 4, and a₁₂ = 4 + 11×3 = 37.',
    wrongAnswerExplanations: {
      '35': 'Calculation error in finding the 12th term.',
      '39': 'Calculation error in finding the 12th term.',
      '41': 'Calculation error in finding the 12th term.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch5_t1_qe20',
    type: 'mcq',
    question: 'In an AP, which term equals four times the first term?',
    options: [
      'Depends on the common difference',
      '4th term',
      '5th term',
      '3rd term'
    ],
    correctAnswer: 'Depends on the common difference',
    explanation: 'For aₙ = 4a₁, we need a₁ + (n-1)d = 4a₁, so (n-1)d = 3a₁. The term depends on a₁ and d.',
    wrongAnswerExplanations: {
      '4th term': 'The 4th term is a₁ + 3d, which equals 4a₁ only if 3d = 3a₁.',
      '5th term': 'The 5th term is a₁ + 4d, which equals 4a₁ only if 4d = 3a₁.',
      '3rd term': 'The 3rd term is a₁ + 2d, which equals 4a₁ only if 2d = 3a₁.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  }
];
