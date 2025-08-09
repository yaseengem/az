import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
  {
    id: 'cl3_ch7_t1_qe1',
    type: 'mcq',
    question: 'What does the short hand on an analog clock show?',
    options: ['Minutes', 'Seconds', 'Hours', 'Days'],
    correctAnswer: 'Hours',
    explanation: 'The short hand shows the hour on an analog clock.',
    wrongAnswerExplanations: {
      'Minutes': 'The long hand shows minutes.',
      'Seconds': 'The thin hand shows seconds.',
      'Days': 'Clocks do not show days.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl3_ch7_t1_qe2',
    type: 'mcq',
    question: 'How many minutes are there in one hour?',
    options: ['24', '60', '100', '12'],
    correctAnswer: '60',
    explanation: 'There are 60 minutes in one hour.',
    wrongAnswerExplanations: {
      '24': '24 hours make a day, not minutes in an hour.',
      '100': '100 minutes do not make an hour.',
      '12': '12 hours make half a day.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl3_ch7_t1_qe3',
    type: 'mcq',
    question: 'If the minute hand is on 6, what time is it?',
    options: ['Half past', 'Quarter past', 'O’clock', 'Quarter to'],
    correctAnswer: 'Half past',
    explanation: 'Minute hand on 6 means half past the hour.',
    wrongAnswerExplanations: {
      'Quarter past': 'Quarter past is when the minute hand is on 3.',
      'O’clock': 'O’clock is when the minute hand is on 12.',
      'Quarter to': 'Quarter to is when the minute hand is on 9.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl3_ch7_t1_qe4',
    type: 'mcq',
    question: 'How many days are there in a week?',
    options: ['5', '6', '7', '8'],
    correctAnswer: '7',
    explanation: 'There are 7 days in a week.',
    wrongAnswerExplanations: {
      '5': 'A week has 7 days, not 5.',
      '6': 'A week has 7 days, not 6.',
      '8': 'A week has 7 days, not 8.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl3_ch7_t1_qe5',
    type: 'mcq',
    question: 'Which month has 28 or 29 days?',
    options: ['January', 'February', 'March', 'April'],
    correctAnswer: 'February',
    explanation: 'February has 28 days, 29 in a leap year.',
    wrongAnswerExplanations: {
      'January': 'January has 31 days.',
      'March': 'March has 31 days.',
      'April': 'April has 30 days.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl3_ch7_t1_qe6',
    type: 'mcq',
    question: 'What time is shown if the hour hand is on 3 and the minute hand is on 12?',
    options: ['3 o’clock', '3:30', '3:15', '3:45'],
    correctAnswer: '3 o’clock',
    explanation: 'Hour hand on 3 and minute hand on 12 is 3 o’clock.',
    wrongAnswerExplanations: {
      '3:30': '3:30 is half past 3.',
      '3:15': '3:15 is quarter past 3.',
      '3:45': '3:45 is quarter to 4.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl3_ch7_t1_qe7',
    type: 'mcq',
    question: 'How many hours are there in a day?',
    options: ['12', '24', '60', '7'],
    correctAnswer: '24',
    explanation: 'There are 24 hours in a day.',
    wrongAnswerExplanations: {
      '12': '12 hours make half a day.',
      '60': '60 minutes make an hour.',
      '7': '7 days make a week.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl3_ch7_t1_qe8',
    type: 'mcq',
    question: 'Which hand moves the fastest on an analog clock?',
    options: ['Hour hand', 'Minute hand', 'Second hand', 'Day hand'],
    correctAnswer: 'Second hand',
    explanation: 'The second hand moves the fastest.',
    wrongAnswerExplanations: {
      'Hour hand': 'Hour hand moves the slowest.',
      'Minute hand': 'Minute hand is slower than the second hand.',
      'Day hand': 'There is no day hand on a clock.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl3_ch7_t1_qe9',
    type: 'mcq',
    question: 'If today is Monday, what day will it be after 3 days?',
    options: ['Thursday', 'Friday', 'Saturday', 'Sunday'],
    correctAnswer: 'Thursday',
    explanation: 'Monday + 3 days = Thursday.',
    wrongAnswerExplanations: {
      'Friday': 'Monday + 4 days = Friday.',
      'Saturday': 'Monday + 5 days = Saturday.',
      'Sunday': 'Monday + 6 days = Sunday.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl3_ch7_t1_qe10',
    type: 'mcq',
    question: 'How many months are there in a year?',
    options: ['10', '11', '12', '13'],
    correctAnswer: '12',
    explanation: 'There are 12 months in a year.',
    wrongAnswerExplanations: {
      '10': 'A year has 12 months.',
      '11': 'A year has 12 months.',
      '13': 'A year has 12 months.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl3_ch7_t1_qe11',
    type: 'mcq',
    question: 'If the clock shows 2:30, what is the time in words?',
    options: ['Half past two', 'Quarter past two', 'Two o’clock', 'Quarter to three'],
    correctAnswer: 'Half past two',
    explanation: '2:30 is half past two.',
    wrongAnswerExplanations: {
      'Quarter past two': 'Quarter past two is 2:15.',
      'Two o’clock': 'Two o’clock is 2:00.',
      'Quarter to three': 'Quarter to three is 2:45.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl3_ch7_t1_qe12',
    type: 'mcq',
    question: 'How many weeks are there in a year (approximately)?',
    options: ['48', '50', '52', '54'],
    correctAnswer: '52',
    explanation: 'There are about 52 weeks in a year.',
    wrongAnswerExplanations: {
      '48': 'A year has about 52 weeks.',
      '50': 'A year has about 52 weeks.',
      '54': 'A year has about 52 weeks.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl3_ch7_t1_qe13',
    type: 'mcq',
    question: 'If today is Sunday, what day will it be after 14 days?',
    options: ['Monday', 'Sunday', 'Saturday', 'Friday'],
    correctAnswer: 'Sunday',
    explanation: '14 days after Sunday is again Sunday.',
    wrongAnswerExplanations: {
      'Monday': 'Monday is 1 day after Sunday.',
      'Saturday': 'Saturday is 6 days after Sunday.',
      'Friday': 'Friday is 5 days after Sunday.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl3_ch7_t1_qe14',
    type: 'mcq',
    question: 'Which of these is NOT a day of the week?',
    options: ['Monday', 'Funday', 'Friday', 'Wednesday'],
    correctAnswer: 'Funday',
    explanation: 'Funday is not a real day of the week.',
    wrongAnswerExplanations: {
      'Monday': 'Monday is a real day of the week.',
      'Friday': 'Friday is a real day of the week.',
      'Wednesday': 'Wednesday is a real day of the week.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl3_ch7_t1_qe15',
    type: 'mcq',
    question: 'How many days are there in the month of June?',
    options: ['28', '29', '30', '31'],
    correctAnswer: '30',
    explanation: 'June has 30 days.',
    wrongAnswerExplanations: {
      '28': 'February has 28 or 29 days.',
      '29': 'February has 29 days in a leap year.',
      '31': 'June has 30 days.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl3_ch7_t1_qe16',
    type: 'mcq',
    question: 'If the minute hand is on 3, what is the time in words?',
    options: ['Quarter past', 'Quarter to', 'Half past', 'O’clock'],
    correctAnswer: 'Quarter past',
    explanation: 'Minute hand on 3 means quarter past the hour.',
    wrongAnswerExplanations: {
      'Quarter to': 'Quarter to is when the minute hand is on 9.',
      'Half past': 'Half past is when the minute hand is on 6.',
      'O’clock': 'O’clock is when the minute hand is on 12.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl3_ch7_t1_qe17',
    type: 'mcq',
    question: 'How many minutes are there in half an hour?',
    options: ['15', '20', '30', '60'],
    correctAnswer: '30',
    explanation: 'Half an hour is 30 minutes.',
    wrongAnswerExplanations: {
      '15': '15 minutes is a quarter of an hour.',
      '20': '20 minutes is not half an hour.',
      '60': '60 minutes is a full hour.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl3_ch7_t1_qe18',
    type: 'mcq',
    question: 'Which of these is the first month of the year?',
    options: ['March', 'January', 'June', 'December'],
    correctAnswer: 'January',
    explanation: 'January is the first month of the year.',
    wrongAnswerExplanations: {
      'March': 'March is the third month.',
      'June': 'June is the sixth month.',
      'December': 'December is the twelfth month.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl3_ch7_t1_qe19',
    type: 'mcq',
    question: 'If the clock shows 12:00, what is the time in words?',
    options: ['Midnight or Noon', 'Half past twelve', 'Quarter past twelve', 'Quarter to one'],
    correctAnswer: 'Midnight or Noon',
    explanation: '12:00 is either midnight or noon.',
    wrongAnswerExplanations: {
      'Half past twelve': 'Half past twelve is 12:30.',
      'Quarter past twelve': 'Quarter past twelve is 12:15.',
      'Quarter to one': 'Quarter to one is 12:45.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl3_ch7_t1_qe20',
    type: 'mcq',
    question: 'How many hours are there between 6 a.m. and 6 p.m.?',
    options: ['6', '10', '12', '24'],
    correctAnswer: '12',
    explanation: 'There are 12 hours between 6 a.m. and 6 p.m.',
    wrongAnswerExplanations: {
      '6': '6 a.m. to 12 p.m. is 6 hours.',
      '10': '10 hours is not correct.',
      '24': '24 hours is a full day.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  }
];
