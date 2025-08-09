import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
  {
    id: 'cl5_ch15_t3_qe1',
    type: 'mcq',
    question: 'You have ₹200. You buy a pen for ₹50 and a notebook for ₹80. How much money is left?',
    options: ['₹70', '₹80', '₹90', '₹100'],
    correctAnswer: '₹70',
    explanation: '₹200 - ₹50 - ₹80 = ₹70.',
    wrongAnswerExplanations: {
      '₹80': '₹200 - ₹50 - ₹80 = ₹70, not ₹80.',
      '₹90': '₹200 - ₹50 - ₹80 = ₹70, not ₹90.',
      '₹100': '₹200 - ₹50 - ₹80 = ₹70, not ₹100.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl5_ch15_t3_qe2',
    type: 'mcq',
    question: 'A bus leaves at 9:00 AM and reaches at 11:30 AM. How long is the journey?',
    options: ['2 hours', '2 hours 30 minutes', '3 hours', '1 hour 30 minutes'],
    correctAnswer: '2 hours 30 minutes',
    explanation: '11:30 - 9:00 = 2 hours 30 minutes.',
    wrongAnswerExplanations: {
      '2 hours': 'It is 2 hours 30 minutes, not 2 hours.',
      '3 hours': 'It is 2 hours 30 minutes, not 3 hours.',
      '1 hour 30 minutes': 'It is 2 hours 30 minutes, not 1 hour 30 minutes.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl5_ch15_t3_qe3',
    type: 'mcq',
    question: 'You cut a 10-meter rope into 5 equal pieces. How long is each piece?',
    options: ['2 meters', '5 meters', '10 meters', '1 meter'],
    correctAnswer: '2 meters',
    explanation: '10 ÷ 5 = 2 meters.',
    wrongAnswerExplanations: {
      '5 meters': '10 ÷ 5 = 2 meters, not 5 meters.',
      '10 meters': '10 ÷ 5 = 2 meters, not 10 meters.',
      '1 meter': '10 ÷ 5 = 2 meters, not 1 meter.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl5_ch15_t3_qe4',
    type: 'mcq',
    question: 'A movie starts at 4:15 PM and ends at 6:00 PM. How long is the movie?',
    options: ['1 hour', '1 hour 45 minutes', '2 hours', '2 hours 15 minutes'],
    correctAnswer: '1 hour 45 minutes',
    explanation: '6:00 - 4:15 = 1 hour 45 minutes.',
    wrongAnswerExplanations: {
      '1 hour': 'It is 1 hour 45 minutes, not 1 hour.',
      '2 hours': 'It is 1 hour 45 minutes, not 2 hours.',
      '2 hours 15 minutes': 'It is 1 hour 45 minutes, not 2 hours 15 minutes.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl5_ch15_t3_qe5',
    type: 'mcq',
    question: 'You have 3 boxes with 12 apples each. How many apples in total?',
    options: ['36', '24', '15', '30'],
    correctAnswer: '36',
    explanation: '3 × 12 = 36 apples.',
    wrongAnswerExplanations: {
      '24': '3 × 12 = 36, not 24.',
      '15': '3 × 12 = 36, not 15.',
      '30': '3 × 12 = 36, not 30.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl5_ch15_t3_qe6',
    type: 'mcq',
    question: 'A recipe needs 2 cups of flour for 1 cake. How much for 3 cakes?',
    options: ['6 cups', '3 cups', '4 cups', '5 cups'],
    correctAnswer: '6 cups',
    explanation: '2 × 3 = 6 cups.',
    wrongAnswerExplanations: {
      '3 cups': '2 × 3 = 6, not 3.',
      '4 cups': '2 × 3 = 6, not 4.',
      '5 cups': '2 × 3 = 6, not 5.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl5_ch15_t3_qe7',
    type: 'mcq',
    question: 'You have ₹500. You buy a toy for ₹275. How much is left?',
    options: ['₹225', '₹250', '₹275', '₹200'],
    correctAnswer: '₹225',
    explanation: '₹500 - ₹275 = ₹225.',
    wrongAnswerExplanations: {
      '₹250': '₹500 - ₹275 = ₹225, not ₹250.',
      '₹275': '₹500 - ₹275 = ₹225, not ₹275.',
      '₹200': '₹500 - ₹275 = ₹225, not ₹200.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl5_ch15_t3_qe8',
    type: 'mcq',
    question: 'A train leaves at 7:45 AM and arrives at 10:00 AM. How long is the journey?',
    options: ['2 hours 15 minutes', '2 hours', '1 hour 45 minutes', '3 hours'],
    correctAnswer: '2 hours 15 minutes',
    explanation: '10:00 - 7:45 = 2 hours 15 minutes.',
    wrongAnswerExplanations: {
      '2 hours': 'It is 2 hours 15 minutes, not 2 hours.',
      '1 hour 45 minutes': 'It is 2 hours 15 minutes, not 1 hour 45 minutes.',
      '3 hours': 'It is 2 hours 15 minutes, not 3 hours.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl5_ch15_t3_qe9',
    type: 'mcq',
    question: 'You have 24 candies to share among 6 friends. How many does each get?',
    options: ['4', '5', '6', '3'],
    correctAnswer: '4',
    explanation: '24 ÷ 6 = 4.',
    wrongAnswerExplanations: {
      '5': '24 ÷ 6 = 4, not 5.',
      '6': '24 ÷ 6 = 4, not 6.',
      '3': '24 ÷ 6 = 4, not 3.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl5_ch15_t3_qe10',
    type: 'mcq',
    question: 'A pizza is cut into 8 slices. You eat 3. How many slices are left?',
    options: ['5', '4', '6', '3'],
    correctAnswer: '5',
    explanation: '8 - 3 = 5 slices left.',
    wrongAnswerExplanations: {
      '4': '8 - 3 = 5, not 4.',
      '6': '8 - 3 = 5, not 6.',
      '3': '8 - 3 = 5, not 3.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  // ...10 more questions to reach 20...
  {
    id: 'cl5_ch15_t3_qe11',
    type: 'mcq',
    question: 'You have ₹1000. You spend ₹350 on books and ₹275 on stationery. How much is left?',
    options: ['₹375', '₹400', '₹425', '₹325'],
    correctAnswer: '₹375',
    explanation: '₹1000 - ₹350 - ₹275 = ₹375.',
    wrongAnswerExplanations: {
      '₹400': '₹1000 - ₹350 - ₹275 = ₹375, not ₹400.',
      '₹425': '₹1000 - ₹350 - ₹275 = ₹375, not ₹425.',
      '₹325': '₹1000 - ₹350 - ₹275 = ₹375, not ₹325.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl5_ch15_t3_qe12',
    type: 'mcq',
    question: 'A movie is 2 hours and 15 minutes long. If it starts at 3:30 PM, when will it end?',
    options: ['5:45 PM', '5:30 PM', '6:00 PM', '4:45 PM'],
    correctAnswer: '5:45 PM',
    explanation: '3:30 PM + 2:15 = 5:45 PM.',
    wrongAnswerExplanations: {
      '5:30 PM': '3:30 + 2:15 = 5:45 PM, not 5:30 PM.',
      '6:00 PM': '3:30 + 2:15 = 5:45 PM, not 6:00 PM.',
      '4:45 PM': '3:30 + 2:15 = 5:45 PM, not 4:45 PM.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl5_ch15_t3_qe13',
    type: 'mcq',
    question: 'You need to cut a 12-meter rope into 4 equal pieces. How long is each piece?',
    options: ['3 meters', '4 meters', '2 meters', '6 meters'],
    correctAnswer: '3 meters',
    explanation: '12 ÷ 4 = 3 meters.',
    wrongAnswerExplanations: {
      '4 meters': '12 ÷ 4 = 3 meters, not 4 meters.',
      '2 meters': '12 ÷ 4 = 3 meters, not 2 meters.',
      '6 meters': '12 ÷ 4 = 3 meters, not 6 meters.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl5_ch15_t3_qe14',
    type: 'mcq',
    question: 'A shopkeeper has 5 boxes with 8 pencils each. How many pencils in total?',
    options: ['40', '35', '45', '30'],
    correctAnswer: '40',
    explanation: '5 × 8 = 40 pencils.',
    wrongAnswerExplanations: {
      '35': '5 × 8 = 40, not 35.',
      '45': '5 × 8 = 40, not 45.',
      '30': '5 × 8 = 40, not 30.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl5_ch15_t3_qe15',
    type: 'mcq',
    question: 'You have 18 chocolates. You give 6 to your friend. How many do you have left?',
    options: ['12', '10', '8', '14'],
    correctAnswer: '12',
    explanation: '18 - 6 = 12.',
    wrongAnswerExplanations: {
      '10': '18 - 6 = 12, not 10.',
      '8': '18 - 6 = 12, not 8.',
      '14': '18 - 6 = 12, not 14.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl5_ch15_t3_qe16',
    type: 'mcq',
    question: 'A cake recipe needs 3 eggs for 1 cake. How many eggs for 4 cakes?',
    options: ['12', '7', '9', '6'],
    correctAnswer: '12',
    explanation: '3 × 4 = 12 eggs.',
    wrongAnswerExplanations: {
      '7': '3 × 4 = 12, not 7.',
      '9': '3 × 4 = 12, not 9.',
      '6': '3 × 4 = 12, not 6.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl5_ch15_t3_qe17',
    type: 'mcq',
    question: 'You have ₹600. You buy a bag for ₹450. How much is left?',
    options: ['₹150', '₹200', '₹100', '₹250'],
    correctAnswer: '₹150',
    explanation: '₹600 - ₹450 = ₹150.',
    wrongAnswerExplanations: {
      '₹200': '₹600 - ₹450 = ₹150, not ₹200.',
      '₹100': '₹600 - ₹450 = ₹150, not ₹100.',
      '₹250': '₹600 - ₹450 = ₹150, not ₹250.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl5_ch15_t3_qe18',
    type: 'mcq',
    question: 'A bus travels 120 km in 3 hours. What is the speed?',
    options: ['40 km/h', '30 km/h', '50 km/h', '60 km/h'],
    correctAnswer: '40 km/h',
    explanation: '120 ÷ 3 = 40 km/h.',
    wrongAnswerExplanations: {
      '30 km/h': '120 ÷ 3 = 40 km/h, not 30 km/h.',
      '50 km/h': '120 ÷ 3 = 40 km/h, not 50 km/h.',
      '60 km/h': '120 ÷ 3 = 40 km/h, not 60 km/h.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl5_ch15_t3_qe19',
    type: 'mcq',
    question: 'You have 5 friends and 25 candies. How many candies for each?',
    options: ['5', '4', '6', '7'],
    correctAnswer: '5',
    explanation: '25 ÷ 5 = 5.',
    wrongAnswerExplanations: {
      '4': '25 ÷ 5 = 5, not 4.',
      '6': '25 ÷ 5 = 5, not 6.',
      '7': '25 ÷ 5 = 5, not 7.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl5_ch15_t3_qe20',
    type: 'mcq',
    question: 'A train covers 300 km in 5 hours. What is the speed?',
    options: ['60 km/h', '50 km/h', '70 km/h', '55 km/h'],
    correctAnswer: '60 km/h',
    explanation: '300 ÷ 5 = 60 km/h.',
    wrongAnswerExplanations: {
      '50 km/h': '300 ÷ 5 = 60 km/h, not 50 km/h.',
      '70 km/h': '300 ÷ 5 = 60 km/h, not 70 km/h.',
      '55 km/h': '300 ÷ 5 = 60 km/h, not 55 km/h.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  }
];
