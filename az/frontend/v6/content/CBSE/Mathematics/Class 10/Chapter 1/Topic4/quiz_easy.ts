import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
  {
    id: 'cl10_ch1_t4_qe1',
    type: 'mcq',
    question: 'Which of the following is the decimal expansion of the rational number 7/8?',
    options: ['0.875', '0.857', '0.785', '0.75'],
    correctAnswer: '0.875',
    explanation: '7 ÷ 8 = 0.875, which is a terminating decimal.',
    wrongAnswerExplanations: {
      '0.857': 'This is not the correct decimal representation of 7/8.',
      '0.785': 'This is not the correct decimal representation of 7/8.',
      '0.75': 'This is the decimal representation of 3/4, not 7/8.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch1_t4_qe2',
    type: 'mcq',
    question: 'The decimal expansion of 3/4 is:',
    options: ['0.75', '0.25', '0.3', '0.375'],
    correctAnswer: '0.75',
    explanation: '3 ÷ 4 = 0.75, a terminating decimal.',
    wrongAnswerExplanations: {
      '0.25': 'This is the decimal representation of 1/4, not 3/4.',
      '0.3': 'This is the decimal representation of 3/10, not 3/4.',
      '0.375': 'This is the decimal representation of 3/8, not 3/4.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch1_t4_qe3',
    type: 'mcq',
    question: 'Which type of decimal expansion does the rational number 1/3 have?',
    options: [
      'Purely repeating decimal',
      'Terminating decimal',
      'Mixed repeating decimal',
      'Non-terminating non-repeating decimal'
    ],
    correctAnswer: 'Purely repeating decimal',
    explanation: '1/3 = 0.333... has a repeating pattern from the first decimal place.',
    wrongAnswerExplanations: {
      'Terminating decimal': '1/3 = 0.333... does not terminate.',
      'Mixed repeating decimal': '1/3 = 0.333... has no non-repeating part before the repeating pattern.',
      'Non-terminating non-repeating decimal': '1/3 = 0.333... is repeating, not non-repeating.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch1_t4_qe4',
    type: 'mcq',
    question: 'The decimal expansion of 13/20 is:',
    options: ['0.65', '0.65555...', '0.6543', '0.6543...'],
    correctAnswer: '0.65',
    explanation: '13 ÷ 20 = 0.65, which terminates after two decimal places.',
    wrongAnswerExplanations: {
      '0.65555...': 'This is not the decimal representation of 13/20.',
      '0.6543': 'This is not the decimal representation of 13/20.',
      '0.6543...': 'This is not the decimal representation of 13/20.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch1_t4_qe5',
    type: 'mcq',
    question: 'For which of these rational numbers will the decimal expansion terminate?',
    options: ['7/8', '2/3', '5/6', '7/11'],
    correctAnswer: '7/8',
    explanation: '7/8 = 0.875 terminates as 8 = 2³, with prime factors only 2.',
    wrongAnswerExplanations: {
      '2/3': '2/3 = 0.666... has a repeating decimal as 3 contains prime factor 3.',
      '5/6': '5/6 = 0.833... has a repeating decimal as 6 contains prime factor 3.',
      '7/11': '7/11 = 0.636363... has a repeating decimal as 11 is a prime other than 2 or 5.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch1_t4_qe6',
    type: 'mcq',
    question: 'The decimal expansion of 3/25 is:',
    options: ['0.12', '0.012', '0.125', '0.0125'],
    correctAnswer: '0.12',
    explanation: '3 ÷ 25 = 0.12, a terminating decimal.',
    wrongAnswerExplanations: {
      '0.012': 'This is not the correct decimal expansion of 3/25.',
      '0.125': 'This is not the correct decimal expansion of 3/25.',
      '0.0125': 'This is not the correct decimal expansion of 3/25.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch1_t4_qe7',
    type: 'mcq',
    question: 'Which of the following rational numbers has a decimal expansion that terminates?',
    options: ['17/125', '17/15', '17/27', '17/18'],
    correctAnswer: '17/125',
    explanation: '17/125 terminates as 125 = 5³, containing only prime factor 5.',
    wrongAnswerExplanations: {
      '17/15': '17/15 has a repeating decimal as 15 = 3 × 5 contains prime factor 3.',
      '17/27': '17/27 has a repeating decimal as 27 = 3³ contains only prime factor 3.',
      '17/18': '17/18 has a repeating decimal as 18 = 2 × 3² contains prime factor 3.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch1_t4_qe8',
    type: 'mcq',
    question: 'If a rational number has a terminating decimal expansion, which prime factors can be present in the denominator?',
    options: ['Only 2 and 5', 'Only 2 and 3', 'Only 3 and 5', 'Any prime factors'],
    correctAnswer: 'Only 2 and 5',
    explanation: 'Terminating decimals have denominators with prime factors 2 and/or 5 only.',
    wrongAnswerExplanations: {
      'Only 2 and 3': 'Denominators with factor 3 lead to repeating, not terminating decimals.',
      'Only 3 and 5': 'Denominators with factor 3 lead to repeating, not terminating decimals.',
      'Any prime factors': 'Prime factors other than 2 and 5 lead to repeating decimals.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch1_t4_qe9',
    type: 'mcq',
    question: 'Which of the following represents 0.27 as a rational number in the form p/q?',
    options: ['27/100', '27/10', '270/100', '2.7/10'],
    correctAnswer: '27/100',
    explanation: '0.27 = 27/100 in simplified form.',
    wrongAnswerExplanations: {
      '27/10': '27/10 = 2.7, not 0.27.',
      '270/100': '270/100 = 2.7, not 0.27.',
      '2.7/10': '2.7/10 = 0.27, but the numerator should be an integer.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch1_t4_qe10',
    type: 'mcq',
    question: 'The decimal expansion of 7/11 is:',
    options: [
      '0.636363... (repeating)',
      '0.7 (terminating)',
      '0.07 (terminating)',
      '0.6363 (terminating)'
    ],
    correctAnswer: '0.636363... (repeating)',
    explanation: '7/11 = 0.636363..., a purely repeating decimal.',
    wrongAnswerExplanations: {
      '0.7 (terminating)': '7/11 is not equal to 0.7.',
      '0.07 (terminating)': '7/11 is not equal to 0.07.',
      '0.6363 (terminating)': '7/11 = 0.636363... does not terminate.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch1_t4_qe11',
    type: 'mcq',
    question: 'Which rational number has the decimal expansion 0.8?',
    options: ['4/5', '8/10', '8/9', '8/1'],
    correctAnswer: '4/5',
    explanation: '0.8 = 8/10 = 4/5 in lowest terms.',
    wrongAnswerExplanations: {
      '8/10': '8/10 = 0.8, but it`s not in the simplified form.',
      '8/9': '8/9 ≈ 0.889, not 0.8.',
      '8/1': '8/1 = 8, not 0.8.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch1_t4_qe12',
    type: 'mcq',
    question: 'Which of the following is a purely repeating decimal?',
    options: ['0.333...', '0.25', '3.707070...', '0.1256256...'],
    correctAnswer: '0.333...',
    explanation: '0.333... repeats from the first decimal place (purely repeating).',
    wrongAnswerExplanations: {
      '0.25': '0.25 is terminating, not repeating.',
      '3.707070...': '3.707070... has a non-repeating part (3), so it`s a mixed repeating decimal.',
      '0.1256256...': '0.1256256... has a non-repeating part (0.12), so it`s a mixed repeating decimal.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch1_t4_qe13',
    type: 'mcq',
    question: 'Express 0.125 as a rational number in the simplest form.',
    options: ['1/8', '125/1000', '1/80', '5/4'],
    correctAnswer: '1/8',
    explanation: '0.125 = 125/1000 = 1/8 in simplified form.',
    wrongAnswerExplanations: {
      '125/1000': '125/1000 equals 0.125, but is not in the simplest form.',
      '1/80': '1/80 = 0.0125, not 0.125.',
      '5/4': '5/4 = 1.25, not 0.125.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch1_t4_qe14',
    type: 'mcq',
    question: 'Which of the following rational numbers has a repeating decimal expansion?',
    options: ['2/9', '1/5', '3/20', '7/8'],
    correctAnswer: '2/9',
    explanation: '2/9 = 0.222... has a repeating decimal expansion.',
    wrongAnswerExplanations: {
      '1/5': '1/5 = 0.2, which terminates.',
      '3/20': '3/20 = 0.15, which terminates.',
      '7/8': '7/8 = 0.875, which terminates.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch1_t4_qe15',
    type: 'mcq',
    question: 'The decimal expansion of 29/40 is:',
    options: ['0.725', '0.72555...', '0.7255', '0.7225'],
    correctAnswer: '0.725',
    explanation: '29/40 = 0.725, which terminates as 40 = 2³ × 5.',
    wrongAnswerExplanations: {
      '0.72555...': '29/40 does not have a repeating decimal.',
      '0.7255': 'This is not the correct decimal expansion of 29/40.',
      '0.7225': 'This is not the correct decimal expansion of 29/40.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch1_t4_qe16',
    type: 'mcq',
    question: 'Which expression can be used to convert the repeating decimal 0.999... to a fraction?',
    options: [
      'Let x = 0.999..., then 10x - x = 9, so x = 1',
      'Let x = 0.999..., then 10x - x = 0.9, so x = 0.1',
      'Let x = 0.999..., then 100x - x = 99, so x = 99/100',
      'Let x = 0.999..., then 10x - x = 8.999, so x = 8.999/9'
    ],
    correctAnswer: 'Let x = 0.999..., then 10x - x = 9, so x = 1',
    explanation: 'For 0.999..., if x = 0.999... then 10x = 9.999... and 10x - x = 9, so x = 1.',
    wrongAnswerExplanations: {
      'Let x = 0.999..., then 10x - x = 0.9, so x = 0.1': 'The calculation is incorrect for 0.999...',
      'Let x = 0.999..., then 100x - x = 99, so x = 99/100': '0.999... equals 1, not 99/100.',
      'Let x = 0.999..., then 10x - x = 8.999, so x = 8.999/9': '10x - x = 9, not 8.999.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch1_t4_qe17',
    type: 'mcq',
    question: 'The rational number 1/4 is equal to:',
    options: ['0.25', '0.255...', '0.2555...', '0.5'],
    correctAnswer: '0.25',
    explanation: '1/4 = 0.25, a terminating decimal.',
    wrongAnswerExplanations: {
      '0.255...': 'This is not equal to 1/4.',
      '0.2555...': 'This is not equal to 1/4.',
      '0.5': 'This equals 1/2, not 1/4.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch1_t4_qe18',
    type: 'mcq',
    question: 'A number whose decimal expansion terminates will have its denominator in the form:',
    options: ['2ᵐ × 5ⁿ', '2ᵐ × 3ⁿ', '3ᵐ × 5ⁿ', '2ᵐ × 3ⁿ × 5ᵏ'],
    correctAnswer: '2ᵐ × 5ⁿ',
    explanation: 'Terminating decimals have denominators in the form 2ᵐ × 5ⁿ where m,n ≥ 0.',
    wrongAnswerExplanations: {
      '2ᵐ × 3ⁿ': 'Denominators with prime factor 3 lead to repeating decimals.',
      '3ᵐ × 5ⁿ': 'Denominators with prime factor 3 lead to repeating decimals.',
      '2ᵐ × 3ⁿ × 5ᵏ': 'Denominators with prime factor 3 lead to repeating decimals.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch1_t4_qe19',
    type: 'mcq',
    question: 'Which of the following is the correct decimal expansion of 17/8?',
    options: ['2.125', '2.1', '1.725', '1.875'],
    correctAnswer: '2.125',
    explanation: '17/8 = 2.125, which terminates.',
    wrongAnswerExplanations: {
      '2.1': 'This equals 21/10, not 17/8.',
      '1.725': 'This is not equal to 17/8.',
      '1.875': 'This equals 15/8, not 17/8.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch1_t4_qe20',
    type: 'mcq',
    question: 'What is the rational form of the repeating decimal 0.272727...?',
    options: ['3/11', '27/99', '27/100', '272/999'],
    correctAnswer: '3/11',
    explanation: '0.272727... = 27/99 = 3/11 in simplest form.',
    wrongAnswerExplanations: {
      '27/99': 'This equals 0.272727..., but is not in the simplest form.',
      '27/100': 'This equals 0.27, a terminating decimal.',
      '272/999': 'This is not equal to 0.272727...'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  }
];
