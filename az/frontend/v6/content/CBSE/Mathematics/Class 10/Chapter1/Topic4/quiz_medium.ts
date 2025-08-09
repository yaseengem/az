import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
  {
    id: 'cl10_ch1_t4_qm1',
    type: 'mcq',
    question: 'Express 0.232323... as a rational number in simplest form.',
    options: ['23/99', '23/100', '232/999', '23/990'],
    correctAnswer: '23/99',
    explanation: 'Let x = 0.232323..., 100x = 23.2323... Then 100x - x = 99x = 23, so x = 23/99.',
    wrongAnswerExplanations: {
      '23/100': 'This equals 0.23, not 0.232323...',
      '232/999': 'This is not the correct simplified form for 0.232323...',
      '23/990': 'This is not equal to 0.232323...'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch1_t4_qm2',
    type: 'mcq',
    question: 'Which of the following rational numbers has a purely repeating decimal expansion?',
    options: ['1/7', '1/20', '1/6', '1/25'],
    correctAnswer: '1/7',
    explanation: '1/7 = 0.142857142857... repeats from the first decimal place.',
    wrongAnswerExplanations: {
      '1/20': '1/20 = 0.05 is a terminating decimal.',
      '1/6': '1/6 = 0.166666... is a mixed repeating decimal.',
      '1/25': '1/25 = 0.04 is a terminating decimal.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch1_t4_qm3',
    type: 'mcq',
    question: 'For what value of n will the rational number 7/2ⁿ have exactly 3 decimal places in its decimal expansion?',
    options: ['3', '10', '1000', '2'],
    correctAnswer: '3',
    explanation: 'For 3 decimal places, we need 10³ = 1000 = 2³ × 5³. Since denominator is 2ⁿ, n = 3.',
    wrongAnswerExplanations: {
      '10': 'This would give more than 3 decimal places.',
      '1000': 'This is not a power of 2.',
      '2': 'This would give fewer than 3 decimal places.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch1_t4_qm4',
    type: 'mcq',
    question: 'Express the decimal 0.142857142857... as a fraction in its simplest form.',
    options: ['1/7', '142857/999999', '143/999', '142/999'],
    correctAnswer: '1/7',
    explanation: '0.142857142857... = 1/7, as the repeating pattern corresponds to this fraction.',
    wrongAnswerExplanations: {
      '142857/999999': 'This equals 1/7 but is not in the simplest form.',
      '143/999': 'This does not equal 0.142857142857...',
      '142/999': 'This does not equal 0.142857142857...'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch1_t4_qm5',
    type: 'mcq',
    question: 'If a rational number has a decimal expansion that terminates after n decimal places, what can you conclude about its denominator?',
    options: [
      'The prime factorization of the denominator contains only 2s and 5s',
      'The denominator must be a power of 10',
      'The denominator must be less than 10ⁿ',
      'The denominator must be co-prime with 10'
    ],
    correctAnswer: 'The prime factorization of the denominator contains only 2s and 5s',
    explanation: 'A terminating decimal has a denominator of the form 2ᵐ × 5ⁿ.',
    wrongAnswerExplanations: {
      'The denominator must be a power of 10': 'Denominators like 4, 5, 8, 20 lead to terminating decimals but aren\'t powers of 10.',
      'The denominator must be less than 10ⁿ': 'The denominator may be greater than 10ⁿ and still give a terminating decimal.',
      'The denominator must be co-prime with 10': 'Denominators that terminate often share factors with 10.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch1_t4_qm6',
    type: 'mcq',
    question: 'What is the period of the recurring decimal expansion of 13/27?',
    options: ['3', '9', '27', '1'],
    correctAnswer: '3',
    explanation: '13/27 = 0.481481... has a repeating pattern of 481, so period is 3.',
    wrongAnswerExplanations: {
      '9': 'The period of 13/27 is not 9.',
      '27': 'The period of 13/27 is not 27.',
      '1': 'The period of 13/27 is not 1.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch1_t4_qm7',
    type: 'mcq',
    question: 'Which of the following rational numbers will have a terminating decimal expansion?',
    options: [
      '21/875',
      '15/27',
      '35/66',
      '17/24'
    ],
    correctAnswer: '21/875',
    explanation: '21/875 terminates as 875 = 5³ × 7, but after simplification it\'s 21/875 = 3/125 = 3/5³.',
    wrongAnswerExplanations: {
      '15/27': '15/27 = 5/9 has denominator 9 = 3², which will give a repeating decimal.',
      '35/66': '35/66 has denominator with prime factor 3, which gives a repeating decimal.',
      '17/24': '17/24 has a repeating decimal as it simplifies to a form with denominator having 3.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch1_t4_qm8',
    type: 'mcq',
    question: 'Express the rational number 17/6 in decimal form.',
    options: ['2.833333...', '2.8333', '2.83', '2.8'],
    correctAnswer: '2.833333...',
    explanation: '17/6 = 2 + 5/6 = 2.833333... as 5/6 = 0.833333....',
    wrongAnswerExplanations: {
      '2.8333': '17/6 does not terminate at 4 decimal places.',
      '2.83': '17/6 does not terminate at 2 decimal places.',
      '2.8': '17/6 does not terminate at 1 decimal place.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch1_t4_qm9',
    type: 'mcq',
    question: 'Express the recurring decimal 0.153153153... as a fraction in its lowest form.',
    options: ['153/999', '17/111', '51/333', '153/990'],
    correctAnswer: '17/111',
    explanation: '0.153153... = 153/999 = 17/111 in lowest form.',
    wrongAnswerExplanations: {
      '153/999': '153/999 equals 0.153153..., but is not in lowest form.',
      '51/333': '51/333 = 0.153153... but is not in lowest form.',
      '153/990': 'This does not equal 0.153153...'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch1_t4_qm10',
    type: 'mcq',
    question: 'If 13/a = 0.025, where a is a positive integer, what is the value of a?',
    options: ['520', '52', '104', '26'],
    correctAnswer: '520',
    explanation: '0.025 = 25/1000. So 13/a = 25/1000, giving a = (13 × 1000)/25 = 520.',
    wrongAnswerExplanations: {
      '52': 'If a = 52, then 13/52 = 1/4 = 0.25, not 0.025.',
      '104': 'If a = 104, then 13/104 = 0.125, not 0.025.',
      '26': 'If a = 26, then 13/26 = 1/2 = 0.5, not 0.025.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch1_t4_qm11',
    type: 'mcq',
    question: 'What is the rational number representation of the repeating decimal 0.12121212...?',
    options: ['4/33', '12/99', '121/990', '4/30'],
    correctAnswer: '4/33',
    explanation: '0.12121212... = 12/99 = 4/33 in lowest form.',
    wrongAnswerExplanations: {
      '12/99': '12/99 equals 0.12121212... but is not in lowest form.',
      '121/990': 'This does not equal 0.12121212...',
      '4/30': 'This does not equal 0.12121212...'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch1_t4_qm12',
    type: 'mcq',
    question: 'Which of the following rational numbers has a decimal expansion that terminates after exactly 2 decimal places?',
    options: ['7/25', '7/4', '7/40', '7/9'],
    correctAnswer: '7/25',
    explanation: '7/25 = 0.28 terminates after 2 decimal places as 25 = 5².',
    wrongAnswerExplanations: {
      '7/4': '7/4 = 1.75 terminates after 2 places, but we need exactly 2 places.',
      '7/40': '7/40 = 0.175 terminates after 3 decimal places.',
      '7/9': '7/9 = 0.777777... does not terminate.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch1_t4_qm13',
    type: 'mcq',
    question: 'How many decimal places will the rational number 3/2⁶ have in its decimal representation?',
    options: ['6', '3', '2', '5'],
    correctAnswer: '6',
    explanation: '3/2⁶ = 3/64. For a denominator 2ⁿ, the decimal will have n places.',
    wrongAnswerExplanations: {
      '3': 'The number of decimal places is determined by the power of 2 in the denominator.',
      '2': 'The decimal expansion of 3/64 doesn\'t terminate after 2 places.',
      '5': 'The decimal expansion of 3/64 doesn\'t terminate after 5 places.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch1_t4_qm14',
    type: 'mcq',
    question: 'Which statement is true for the decimal expansion of 19/225?',
    options: [
      'It terminates after 2 decimal places',
      'It has a repeating pattern of length 4',
      'It terminates after 3 decimal places',
      'It has a repeating pattern of length 2'
    ],
    correctAnswer: 'It terminates after 2 decimal places',
    explanation: '19/225 = 19/(9×25) = 19/(9×5²), which gives 0.08̅4̅, terminating after 2 places.',
    wrongAnswerExplanations: {
      'It has a repeating pattern of length 4': '19/225 does not have a repeating pattern of length 4.',
      'It terminates after 3 decimal places': '19/225 terminates after 2 decimal places, not 3.',
      'It has a repeating pattern of length 2': '19/225 terminates and doesn\'t have a repeating pattern.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch1_t4_qm15',
    type: 'mcq',
    question: 'Convert the rational number 5/12 to a decimal.',
    options: ['0.416666...', '0.41', '0.4166', '0.5'],
    correctAnswer: '0.416666...',
    explanation: '5/12 = 5/(3×4) = 0.416666... with 6 repeating.',
    wrongAnswerExplanations: {
      '0.41': '5/12 is not equal to 0.41.',
      '0.4166': '5/12 does not terminate at 0.4166.',
      '0.5': '5/12 is not equal to 0.5, which is 1/2.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch1_t4_qm16',
    type: 'mcq',
    question: 'The decimal expansion of 29/6 is:',
    options: ['4.833333...', '4.3333...', '4.8', '4.83'],
    correctAnswer: '4.833333...',
    explanation: '29/6 = 4 + 5/6 = 4.833333... as 5/6 = 0.833333...',
    wrongAnswerExplanations: {
      '4.3333...': 'This is not equal to 29/6.',
      '4.8': '29/6 does not terminate at 4.8.',
      '4.83': '29/6 does not terminate at 4.83.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch1_t4_qm17',
    type: 'mcq',
    question: 'What type of decimal expansion does 22/7 have?',
    options: [
      'Purely repeating with period 6',
      'Terminating',
      'Mixed repeating with 1 non-repeating digit',
      'Mixed repeating with 2 non-repeating digits'
    ],
    correctAnswer: 'Purely repeating with period 6',
    explanation: '22/7 = 3.142857142857... has a purely repeating pattern of 6 digits (142857).',
    wrongAnswerExplanations: {
      'Terminating': '22/7 does not terminate.',
      'Mixed repeating with 1 non-repeating digit': '22/7 is a purely repeating decimal.',
      'Mixed repeating with 2 non-repeating digits': '22/7 is a purely repeating decimal.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch1_t4_qm18',
    type: 'mcq',
    question: 'If the decimal expansion of a rational number p/q (in its lowest form) is terminating, then which of the following is true about q?',
    options: [
      'q is of the form 2ᵐ × 5ⁿ where m, n ≥ 0',
      'q is a prime number',
      'q is a perfect square',
      'q is of the form 2ᵐ × 3ⁿ where m, n ≥ 0'
    ],
    correctAnswer: 'q is of the form 2ᵐ × 5ⁿ where m, n ≥ 0',
    explanation: 'For terminating decimals, the denominator q can have only 2 and 5 as prime factors.',
    wrongAnswerExplanations: {
      'q is a prime number': 'Denominators like 4, 8, 10, 20 lead to terminating decimals but aren\'t prime.',
      'q is a perfect square': 'Not all denominators leading to terminating decimals are perfect squares.',
      'q is of the form 2ᵐ × 3ⁿ where m, n ≥ 0': 'Denominators with prime factor 3 lead to repeating decimals.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch1_t4_qm19',
    type: 'mcq',
    question: 'Express 0.123456789123456789... as a rational number in its simplest form.',
    options: [
      '123456789/999999999',
      '1/81',
      '1/9',
      'It is an irrational number'
    ],
    correctAnswer: '123456789/999999999',
    explanation: '0.123456789... has a repeat length of 9, so equals 123456789/999999999.',
    wrongAnswerExplanations: {
      '1/81': '1/81 = 0.012345679... (repeating) which is not our number.',
      '1/9': '1/9 = 0.111111... which is not our number.',
      'It is an irrational number': 'It has a repeating decimal pattern, so it\'s rational.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch1_t4_qm20',
    type: 'mcq',
    question: 'Which of the following rational numbers has the longest period in its decimal expansion?',
    options: ['1/7', '1/11', '1/13', '1/6'],
    correctAnswer: '1/7',
    explanation: '1/7 = 0.142857142857... has a period of 6, which is the longest among the options.',
    wrongAnswerExplanations: {
      '1/11': '1/11 = 0.09090909... has a period of 2.',
      '1/13': '1/13 = 0.076923076923... has a period of 6, not longer than 1/7.',
      '1/6': '1/6 = 0.166666... has a period of 1.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  }
];
