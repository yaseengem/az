import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
  {
    id: 'cl5_ch16_t3_qe1',
    type: 'mcq',
    question: 'What is the result of 25 × 4 using mental math?',
    options: ['100', '90', '120', '80'],
    correctAnswer: '100',
    explanation: '25 × 4 = 100. Double 25 to get 50, then double again.',
    wrongAnswerExplanations: {
      '90': '25 × 4 = 100, not 90.',
      '120': '25 × 4 = 100, not 120.',
      '80': '25 × 4 = 100, not 80.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl5_ch16_t3_qe2',
    type: 'mcq',
    question: 'What is 67 - 29 using mental math tricks?',
    options: ['38', '36', '40', '28'],
    correctAnswer: '38',
    explanation: '67 - 30 = 37, then add 1 to get 38.',
    wrongAnswerExplanations: {
      '36': '67 - 29 = 38, not 36.',
      '40': '67 - 29 = 38, not 40.',
      '28': '67 - 29 = 38, not 28.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl5_ch16_t3_qe3',
    type: 'mcq',
    question: 'What is 8 × 7 using the doubles method?',
    options: ['56', '49', '63', '54'],
    correctAnswer: '56',
    explanation: '7 × 7 = 49, 49 + 7 = 56.',
    wrongAnswerExplanations: {
      '49': 'That is 7 × 7, not 8 × 7.',
      '63': 'That is 9 × 7, not 8 × 7.',
      '54': 'That is 9 × 6, not 8 × 7.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl5_ch16_t3_qe4',
    type: 'mcq',
    question: 'What is 45 + 38 mentally?',
    options: ['83', '73', '93', '81'],
    correctAnswer: '83',
    explanation: '45 + 40 = 85, 85 - 2 = 83.',
    wrongAnswerExplanations: {
      '73': '45 + 38 = 83, not 73.',
      '93': '45 + 38 = 83, not 93.',
      '81': '45 + 38 = 83, not 81.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl5_ch16_t3_qe5',
    type: 'mcq',
    question: 'What is 12 × 11 using the 11-trick?',
    options: ['132', '121', '144', '112'],
    correctAnswer: '132',
    explanation: '12 × 11 = 132. Add digits (1+2=3), answer is 1 3 2.',
    wrongAnswerExplanations: {
      '121': '11 × 11 = 121, not 12 × 11.',
      '144': '12 × 12 = 144, not 12 × 11.',
      '112': '12 × 11 = 132, not 112.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl5_ch16_t3_qe6',
    type: 'mcq',
    question: 'What is 96 ÷ 8 using mental math?',
    options: ['12', '11', '10', '14'],
    correctAnswer: '12',
    explanation: '80 ÷ 8 = 10, 16 ÷ 8 = 2, 10 + 2 = 12.',
    wrongAnswerExplanations: {
      '11': '96 ÷ 8 = 12, not 11.',
      '10': '96 ÷ 8 = 12, not 10.',
      '14': '96 ÷ 8 = 12, not 14.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl5_ch16_t3_qe7',
    type: 'mcq',
    question: 'What is the sum of 9 + 8 using the making tens trick?',
    options: ['17', '18', '16', '19'],
    correctAnswer: '17',
    explanation: '9 + 1 = 10, 10 + 7 = 17.',
    wrongAnswerExplanations: {
      '18': '9 + 8 = 17, not 18.',
      '16': '9 + 8 = 17, not 16.',
      '19': '9 + 8 = 17, not 19.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl5_ch16_t3_qe8',
    type: 'mcq',
    question: 'What is 84 ÷ 4 using mental math?',
    options: ['21', '20', '22', '24'],
    correctAnswer: '21',
    explanation: '80 ÷ 4 = 20, 4 ÷ 4 = 1, 20 + 1 = 21.',
    wrongAnswerExplanations: {
      '20': '84 ÷ 4 = 21, not 20.',
      '22': '84 ÷ 4 = 21, not 22.',
      '24': '84 ÷ 4 = 21, not 24.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl5_ch16_t3_qe9',
    type: 'mcq',
    question: 'What is 15 × 12 using mental math?',
    options: ['180', '150', '160', '200'],
    correctAnswer: '180',
    explanation: '15 × 10 = 150, 15 × 2 = 30, 150 + 30 = 180.',
    wrongAnswerExplanations: {
      '150': '15 × 12 = 180, not 150.',
      '160': '15 × 12 = 180, not 160.',
      '200': '15 × 12 = 180, not 200.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl5_ch16_t3_qe10',
    type: 'mcq',
    question: 'What is 37 + 48 using mental math?',
    options: ['85', '75', '95', '80'],
    correctAnswer: '85',
    explanation: '37 + 50 = 87, 87 - 2 = 85.',
    wrongAnswerExplanations: {
      '75': '37 + 48 = 85, not 75.',
      '95': '37 + 48 = 85, not 95.',
      '80': '37 + 48 = 85, not 80.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  // ...10 more questions to reach 20...
  {
    id: 'cl5_ch16_t3_qe11',
    type: 'mcq',
    question: 'What is 24 × 5 using the divide and multiply trick?',
    options: ['120', '100', '110', '130'],
    correctAnswer: '120',
    explanation: '24 ÷ 2 = 12, 12 × 10 = 120.',
    wrongAnswerExplanations: {
      '100': '24 × 5 = 120, not 100.',
      '110': '24 × 5 = 120, not 110.',
      '130': '24 × 5 = 120, not 130.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl5_ch16_t3_qe12',
    type: 'mcq',
    question: 'What is 45 ÷ 5 using the multiply and divide trick?',
    options: ['9', '8', '7', '10'],
    correctAnswer: '9',
    explanation: '45 × 2 = 90, 90 ÷ 10 = 9.',
    wrongAnswerExplanations: {
      '8': '45 ÷ 5 = 9, not 8.',
      '7': '45 ÷ 5 = 9, not 7.',
      '10': '45 ÷ 5 = 9, not 10.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl5_ch16_t3_qe13',
    type: 'mcq',
    question: 'What is 7 × 9 using the 10-times trick?',
    options: ['63', '72', '56', '81'],
    correctAnswer: '63',
    explanation: '7 × 10 = 70, 70 - 7 = 63.',
    wrongAnswerExplanations: {
      '72': '7 × 9 = 63, not 72.',
      '56': '7 × 8 = 56, not 7 × 9.',
      '81': '9 × 9 = 81, not 7 × 9.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl5_ch16_t3_qe14',
    type: 'mcq',
    question: 'What is 63 ÷ 9 using the digit sum trick?',
    options: ['7', '6', '8', '9'],
    correctAnswer: '7',
    explanation: '6 + 3 = 9, so 63 ÷ 9 = 7.',
    wrongAnswerExplanations: {
      '6': '63 ÷ 9 = 7, not 6.',
      '8': '63 ÷ 9 = 7, not 8.',
      '9': '63 ÷ 9 = 7, not 9.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl5_ch16_t3_qe15',
    type: 'mcq',
    question: 'What is 5 × 8?',
    options: ['40', '35', '45', '50'],
    correctAnswer: '40',
    explanation: '5 × 8 = 40. 5 times table ends with 0 or 5.',
    wrongAnswerExplanations: {
      '35': '5 × 7 = 35, not 5 × 8.',
      '45': '5 × 9 = 45, not 5 × 8.',
      '50': '5 × 10 = 50, not 5 × 8.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl5_ch16_t3_qe16',
    type: 'mcq',
    question: 'What is 9 × 6?',
    options: ['54', '56', '64', '49'],
    correctAnswer: '54',
    explanation: '9 × 6 = 54. Digits add to 9 (5+4=9).',
    wrongAnswerExplanations: {
      '56': '9 × 6 = 54, not 56.',
      '64': '8 × 8 = 64, not 9 × 6.',
      '49': '7 × 7 = 49, not 9 × 6.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl5_ch16_t3_qe17',
    type: 'mcq',
    question: 'What is 11 × 13 using the 11-trick?',
    options: ['143', '121', '131', '123'],
    correctAnswer: '143',
    explanation: '1 + 3 = 4, so 1 4 3.',
    wrongAnswerExplanations: {
      '121': '11 × 11 = 121, not 11 × 13.',
      '131': '11 × 12 = 132, not 11 × 13.',
      '123': '11 × 11 = 121, not 11 × 13.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl5_ch16_t3_qe18',
    type: 'mcq',
    question: 'What is 18 + 27 using breaking apart?',
    options: ['45', '40', '50', '55'],
    correctAnswer: '45',
    explanation: '18 + 20 = 38, 38 + 7 = 45.',
    wrongAnswerExplanations: {
      '40': '18 + 27 = 45, not 40.',
      '50': '18 + 27 = 45, not 50.',
      '55': '18 + 27 = 45, not 55.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl5_ch16_t3_qe19',
    type: 'mcq',
    question: 'What is 36 ÷ 6?',
    options: ['6', '5', '7', '8'],
    correctAnswer: '6',
    explanation: '36 ÷ 6 = 6.',
    wrongAnswerExplanations: {
      '5': '36 ÷ 6 = 6, not 5.',
      '7': '36 ÷ 6 = 6, not 7.',
      '8': '36 ÷ 6 = 6, not 8.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl5_ch16_t3_qe20',
    type: 'mcq',
    question: 'What is 14 × 5?',
    options: ['70', '60', '80', '75'],
    correctAnswer: '70',
    explanation: '14 × 5 = 70.',
    wrongAnswerExplanations: {
      '60': '14 × 5 = 70, not 60.',
      '80': '14 × 5 = 70, not 80.',
      '75': '14 × 5 = 70, not 75.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  }
];
