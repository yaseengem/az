import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
  {
    id: 'cl3_ch7_t1_qm1',
    type: 'mcq',
    question: 'If the clock shows 7:45, what is the time in words?',
    options: ['Quarter to eight', 'Quarter past seven', 'Half past seven', 'Eight o’clock'],
    correctAnswer: 'Quarter to eight',
    explanation: '7:45 is quarter to eight.',
    wrongAnswerExplanations: {
      'Quarter past seven': 'Quarter past seven is 7:15.',
      'Half past seven': 'Half past seven is 7:30.',
      'Eight o’clock': 'Eight o’clock is 8:00.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 45
  },
  {
    id: 'cl3_ch7_t1_qm2',
    type: 'mcq',
    question: 'How many days are there in February in a leap year?',
    options: ['28', '29', '30', '31'],
    correctAnswer: '29',
    explanation: 'February has 29 days in a leap year.',
    wrongAnswerExplanations: {
      '28': '28 days in a normal year, 29 in a leap year.',
      '30': 'February never has 30 days.',
      '31': 'February never has 31 days.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 45
  },
  {
    id: 'cl3_ch7_t1_qm3',
    type: 'mcq',
    question: 'If the minute hand is on 9, what is the time in words?',
    options: ['Quarter past', 'Quarter to', 'Half past', 'O’clock'],
    correctAnswer: 'Quarter to',
    explanation: 'Minute hand on 9 means quarter to the next hour.',
    wrongAnswerExplanations: {
      'Quarter past': 'Quarter past is when the minute hand is on 3.',
      'Half past': 'Half past is when the minute hand is on 6.',
      'O’clock': 'O’clock is when the minute hand is on 12.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 45
  },
  {
    id: 'cl3_ch7_t1_qm4',
    type: 'mcq',
    question: 'If today is Friday, what day will it be after 10 days?',
    options: ['Monday', 'Tuesday', 'Sunday', 'Wednesday'],
    correctAnswer: 'Monday',
    explanation: '10 days after Friday is Monday.',
    wrongAnswerExplanations: {
      'Tuesday': 'Tuesday is 11 days after Friday.',
      'Sunday': 'Sunday is 9 days after Friday.',
      'Wednesday': 'Wednesday is 5 days after Friday.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 45
  },
  {
    id: 'cl3_ch7_t1_qm5',
    type: 'mcq',
    question: 'How many seconds are there in 5 minutes?',
    options: ['300', '60', '120', '240'],
    correctAnswer: '300',
    explanation: '5 minutes × 60 seconds = 300 seconds.',
    wrongAnswerExplanations: {
      '60': '60 seconds in 1 minute.',
      '120': '120 seconds in 2 minutes.',
      '240': '240 seconds in 4 minutes.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 45
  },
  {
    id: 'cl3_ch7_t1_qm6',
    type: 'mcq',
    question: 'If the clock shows 5:15, what is the time in words?',
    options: ['Quarter past five', 'Half past five', 'Quarter to five', 'Five o’clock'],
    correctAnswer: 'Quarter past five',
    explanation: '5:15 is quarter past five.',
    wrongAnswerExplanations: {
      'Half past five': 'Half past five is 5:30.',
      'Quarter to five': 'Quarter to five is 4:45.',
      'Five o’clock': 'Five o’clock is 5:00.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 45
  },
  {
    id: 'cl3_ch7_t1_qm7',
    type: 'mcq',
    question: 'How many hours are there in 3 days?',
    options: ['24', '48', '60', '72'],
    correctAnswer: '72',
    explanation: '3 days × 24 hours = 72 hours.',
    wrongAnswerExplanations: {
      '24': '24 hours in 1 day.',
      '48': '48 hours in 2 days.',
      '60': '60 hours is not correct.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 45
  },
  {
    id: 'cl3_ch7_t1_qm8',
    type: 'mcq',
    question: 'If today is 28th February and it is not a leap year, what is the next day’s date?',
    options: ['29th February', '1st March', '2nd March', '31st March'],
    correctAnswer: '1st March',
    explanation: 'After 28th Feb (non-leap year), next day is 1st March.',
    wrongAnswerExplanations: {
      '29th February': '29th Feb comes only in a leap year.',
      '2nd March': '2nd March is after 1st March.',
      '31st March': 'March has 31 days, but not after Feb.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 45
  },
  {
    id: 'cl3_ch7_t1_qm9',
    type: 'mcq',
    question: 'How many minutes are there in a quarter of an hour?',
    options: ['10', '15', '20', '30'],
    correctAnswer: '15',
    explanation: 'A quarter of an hour is 15 minutes.',
    wrongAnswerExplanations: {
      '10': '10 minutes is not a quarter of an hour.',
      '20': '20 minutes is not a quarter of an hour.',
      '30': '30 minutes is half an hour.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 45
  },
  {
    id: 'cl3_ch7_t1_qm10',
    type: 'mcq',
    question: 'If the clock shows 11:30, what is the time in words?',
    options: ['Half past eleven', 'Quarter past eleven', 'Quarter to twelve', 'Eleven o’clock'],
    correctAnswer: 'Half past eleven',
    explanation: '11:30 is half past eleven.',
    wrongAnswerExplanations: {
      'Quarter past eleven': 'Quarter past eleven is 11:15.',
      'Quarter to twelve': 'Quarter to twelve is 11:45.',
      'Eleven o’clock': 'Eleven o’clock is 11:00.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 45
  },
  {
    id: 'cl3_ch7_t1_qm11',
    type: 'mcq',
    question: 'How many days are there in the month of September?',
    options: ['28', '29', '30', '31'],
    correctAnswer: '30',
    explanation: 'September has 30 days.',
    wrongAnswerExplanations: {
      '28': 'February has 28 or 29 days.',
      '29': 'February has 29 days in a leap year.',
      '31': 'September has 30 days.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 45
  },
  {
    id: 'cl3_ch7_t1_qm12',
    type: 'mcq',
    question: 'If the minute hand is on 12 and the hour hand is on 10, what is the time?',
    options: ['10 o’clock', '10:30', '10:15', '10:45'],
    correctAnswer: '10 o’clock',
    explanation: 'Hour hand on 10 and minute hand on 12 is 10 o’clock.',
    wrongAnswerExplanations: {
      '10:30': '10:30 is half past 10.',
      '10:15': '10:15 is quarter past 10.',
      '10:45': '10:45 is quarter to 11.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 45
  },
  {
    id: 'cl3_ch7_t1_qm13',
    type: 'mcq',
    question: 'How many months have 31 days?',
    options: ['4', '6', '7', '12'],
    correctAnswer: '7',
    explanation: 'There are 7 months with 31 days.',
    wrongAnswerExplanations: {
      '4': 'There are more than 4 months with 31 days.',
      '6': 'There are more than 6 months with 31 days.',
      '12': 'Not all months have 31 days.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 45
  },
  {
    id: 'cl3_ch7_t1_qm14',
    type: 'mcq',
    question: 'If today is Thursday, what day will it be after 21 days?',
    options: ['Thursday', 'Friday', 'Saturday', 'Sunday'],
    correctAnswer: 'Thursday',
    explanation: '21 days after Thursday is again Thursday.',
    wrongAnswerExplanations: {
      'Friday': 'Friday is 22 days after Thursday.',
      'Saturday': 'Saturday is 23 days after Thursday.',
      'Sunday': 'Sunday is 24 days after Thursday.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 45
  },
  {
    id: 'cl3_ch7_t1_qm15',
    type: 'mcq',
    question: 'How many seconds are there in 2 hours?',
    options: ['3600', '7200', '120', '1800'],
    correctAnswer: '7200',
    explanation: '2 hours × 60 minutes × 60 seconds = 7200 seconds.',
    wrongAnswerExplanations: {
      '3600': '3600 seconds in 1 hour.',
      '120': '120 seconds in 2 minutes.',
      '1800': '1800 seconds in 30 minutes.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 45
  },
  {
    id: 'cl3_ch7_t1_qm16',
    type: 'mcq',
    question: 'If the clock shows 4:45, what is the time in words?',
    options: ['Quarter to five', 'Quarter past four', 'Half past four', 'Four o’clock'],
    correctAnswer: 'Quarter to five',
    explanation: '4:45 is quarter to five.',
    wrongAnswerExplanations: {
      'Quarter past four': 'Quarter past four is 4:15.',
      'Half past four': 'Half past four is 4:30.',
      'Four o’clock': 'Four o’clock is 4:00.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 45
  },
  {
    id: 'cl3_ch7_t1_qm17',
    type: 'mcq',
    question: 'How many days are there in a leap year?',
    options: ['365', '366', '364', '360'],
    correctAnswer: '366',
    explanation: 'A leap year has 366 days.',
    wrongAnswerExplanations: {
      '365': '365 days in a normal year.',
      '364': '364 days is not correct.',
      '360': '360 days is not correct.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 45
  },
  {
    id: 'cl3_ch7_t1_qm18',
    type: 'mcq',
    question: 'If the minute hand is on 6 and the hour hand is on 8, what is the time?',
    options: ['8:30', '8:15', '8:45', '8:00'],
    correctAnswer: '8:30',
    explanation: 'Hour hand on 8 and minute hand on 6 is 8:30.',
    wrongAnswerExplanations: {
      '8:15': '8:15 is quarter past eight.',
      '8:45': '8:45 is quarter to nine.',
      '8:00': '8:00 is eight o’clock.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 45
  },
  {
    id: 'cl3_ch7_t1_qm19',
    type: 'mcq',
    question: 'How many days are there between 10th March and 20th March?',
    options: ['9', '10', '11', '12'],
    correctAnswer: '10',
    explanation: '20th March - 10th March = 10 days.',
    wrongAnswerExplanations: {
      '9': '10th to 19th is 9 days.',
      '11': '10th to 21st is 11 days.',
      '12': '10th to 22nd is 12 days.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 45
  },
  {
    id: 'cl3_ch7_t1_qm20',
    type: 'mcq',
    question: 'If today is 31st December, what is the next day’s date?',
    options: ['1st January', '2nd January', '30th December', '31st January'],
    correctAnswer: '1st January',
    explanation: 'After 31st December, next day is 1st January.',
    wrongAnswerExplanations: {
      '2nd January': '2nd January is after 1st January.',
      '30th December': '30th December is before 31st December.',
      '31st January': '31st January is a month later.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 45
  }
];
