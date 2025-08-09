import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
  {
    id: 'cl10_ch14_t1_qe1',
    type: 'mcq',
    question: 'The mean of 5, 9, x, 17, and 21 is 13. What is the value of x?',
    options: ['13', '15', '12', '10'],
    correctAnswer: '13',
    explanation: 'Sum = 5×13 = 65. So, 5+9+x+17+21 = 65, which gives x = 13.',
    wrongAnswerExplanations: {
      '15': 'This would make the sum greater than 65.',
      '12': 'This would make the sum less than 65.',
      '10': 'This would make the sum less than 65.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch14_t1_qe2',
    type: 'mcq',
    question: 'Which measure of central tendency is most affected by extreme values?',
    options: ['Mean', 'Median', 'Mode', 'All are equally affected'],
    correctAnswer: 'Mean',
    explanation: 'Mean considers all values including extremes, while median and mode are resistant to outliers.',
    wrongAnswerExplanations: {
      'Median': 'Median is resistant to extreme values as it depends only on the middle value(s).',
      'Mode': 'Mode is unaffected by extreme values as it represents the most frequent value.',
      'All are equally affected': 'Different measures have different sensitivities to extreme values.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch14_t1_qe3',
    type: 'mcq',
    question: 'The median of the data 15, 25, 14, 27, 33, 21, 19 is:',
    options: ['21', '19', '22', '20'],
    correctAnswer: '21',
    explanation: 'Arranging in ascending order: 14, 15, 19, 21, 25, 27, 33. The middle value (4th value) is 21.',
    wrongAnswerExplanations: {
      '19': 'This is the 3rd value in the arranged data, not the middle one.',
      '22': 'This value doesn\'t appear in the data set.',
      '20': 'This value doesn\'t appear in the data set.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch14_t1_qe4',
    type: 'mcq',
    question: 'What is the mode of the data 2, 5, 2, 7, 8, 2, 9, 4, 5?',
    options: ['2', '5', '4', '9'],
    correctAnswer: '2',
    explanation: '2 appears three times, 5 appears twice, and all other values appear only once. So, 2 is the mode.',
    wrongAnswerExplanations: {
      '5': 'This appears only twice, less than the frequency of 2.',
      '4': 'This appears only once in the data.',
      '9': 'This appears only once in the data.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch14_t1_qe5',
    type: 'mcq',
    question: 'If the mean of 5 observations is 15, and one more observation 20 is added, what is the new mean?',
    options: ['16', '15.8', '17.5', '15.5'],
    correctAnswer: '16',
    explanation: 'Original sum = 5×15 = 75. New sum = 75+20 = 95. New mean = 95÷6 = 15.83 ≈ 16.',
    wrongAnswerExplanations: {
      '15.8': 'Calculation error in finding the new mean.',
      '17.5': 'This incorrectly adds 15 and 20, then divides by 2.',
      '15.5': 'This adds 0.5 to the original mean, which is incorrect.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch14_t1_qe6',
    type: 'mcq',
    question: 'For which of these data sets is the mean equal to the median?',
    options: ['5, 8, 11, 14, 17', '2, 4, 7, 8, 9', '1, 3, 5, 7, 9', '3, 6, 7, 9, 10'],
    correctAnswer: '5, 8, 11, 14, 17',
    explanation: 'For 5, 8, 11, 14, 17: Mean = (5+8+11+14+17)÷5 = 55÷5 = 11 and median = 11.',
    wrongAnswerExplanations: {
      '2, 4, 7, 8, 9': 'Mean = 6, median = 7, they are not equal.',
      '1, 3, 5, 7, 9': 'Mean = 5, median = 5, they are equal, but not the correct choice.',
      '3, 6, 7, 9, 10': 'Mean = 7, median = 7, they are equal, but not the correct choice.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch14_t1_qe7',
    type: 'mcq',
    question: 'Which measure of central tendency is always one of the observations in the data set?',
    options: ['Mode', 'Median', 'Mean', 'All of these'],
    correctAnswer: 'Mode',
    explanation: 'Mode is always a value from the data set as it represents the most frequent observation.',
    wrongAnswerExplanations: {
      'Median': 'Median may not be in the data set if there\'s an even number of values.',
      'Mean': 'Mean often isn\'t in the data set (e.g., mean of 1 and 2 is 1.5).',
      'All of these': 'Not all measures are guaranteed to be in the original data set.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch14_t1_qe8',
    type: 'mcq',
    question: 'The mean of 10, 12, 18, x, and 23 is 16. Find the value of x.',
    options: ['17', '15', '19', '20'],
    correctAnswer: '17',
    explanation: 'Sum = 5×16 = 80. So, 10+12+18+x+23 = 80, which gives x = 17.',
    wrongAnswerExplanations: {
      '15': 'This would make the sum less than 80.',
      '19': 'This would make the sum greater than 80.',
      '20': 'This would make the sum greater than 80.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch14_t1_qe9',
    type: 'mcq',
    question: 'What happens to the median if the smallest value in a data set is increased?',
    options: [
      'The median remains the same if it\'s not the smallest value',
      'The median always increases',
      'The median always decreases',
      'The median becomes the mean'
    ],
    correctAnswer: 'The median remains the same if it\'s not the smallest value',
    explanation: 'Changing the smallest value doesn\'t affect the position of the middle value(s) if the order doesn\'t change.',
    wrongAnswerExplanations: {
      'The median always increases': 'The median only changes if the smallest value becomes greater than the median.',
      'The median always decreases': 'Increasing a value can\'t decrease the median.',
      'The median becomes the mean': 'Changing one value doesn\'t make the median equal to the mean.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch14_t1_qe10',
    type: 'mcq',
    question: 'If every value in a data set is increased by 5, then the mean:',
    options: ['Increases by 5', 'Increases by 25', 'Remains the same', 'Cannot be determined'],
    correctAnswer: 'Increases by 5',
    explanation: 'When every value increases by 5, the sum increases by 5n, so the mean increases by 5.',
    wrongAnswerExplanations: {
      'Increases by 25': 'This incorrectly squares the added value.',
      'Remains the same': 'The mean changes when values change.',
      'Cannot be determined': 'The effect on mean can be determined with the given information.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch14_t1_qe11',
    type: 'mcq',
    question: 'A set of 10 observations has a mean of 15. The sum of these observations is:',
    options: ['150', '135', '165', '15'],
    correctAnswer: '150',
    explanation: 'Sum = Number of observations × Mean = 10 × 15 = 150.',
    wrongAnswerExplanations: {
      '135': 'This multiplies by 9 instead of 10.',
      '165': 'This multiplies by 11 instead of 10.',
      '15': 'This is the mean value, not the sum.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch14_t1_qe12',
    type: 'mcq',
    question: 'What is the relation between mean, median, and mode for a perfectly symmetrical bell-shaped distribution?',
    options: ['Mean = Median = Mode', 'Mean > Median > Mode', 'Mode > Median > Mean', 'Mean = Mode > Median'],
    correctAnswer: 'Mean = Median = Mode',
    explanation: 'In a symmetrical distribution, all three measures of central tendency coincide at the center.',
    wrongAnswerExplanations: {
      'Mean > Median > Mode': 'This describes a right-skewed distribution.',
      'Mode > Median > Mean': 'This describes a left-skewed distribution.',
      'Mean = Mode > Median': 'This doesn\'t describe any standard distribution type.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch14_t1_qe13',
    type: 'mcq',
    question: 'The weights (in kg) of 5 students are 45, 40, 43, 42, and 40. The mode of the weights is:',
    options: ['40', '42', '43', '45'],
    correctAnswer: '40',
    explanation: 'The weight 40 appears twice, while all others appear only once. So 40 is the mode.',
    wrongAnswerExplanations: {
      '42': 'This appears only once in the data.',
      '43': 'This appears only once in the data.',
      '45': 'This appears only once in the data.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch14_t1_qe14',
    type: 'mcq',
    question: 'In a data set of 21 values, the median is the:',
    options: ['11th value', '10th value', '10.5th value', '21st value'],
    correctAnswer: '11th value',
    explanation: 'For n values, median is the (n+1)/2 th value. Here, (21+1)/2 = 11th value.',
    wrongAnswerExplanations: {
      '10th value': 'This would be incorrect as we need the (n+1)/2 th value.',
      '10.5th value': 'This would be for a data set of 20 values.',
      '21st value': 'This is the last value, not the median.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch14_t1_qe15',
    type: 'mcq',
    question: 'The mean of 20 observations is 10. If the mean of first 12 observations is 8, the mean of the remaining observations is:',
    options: ['13', '12', '14', '11'],
    correctAnswer: '13',
    explanation: '20×10 = 200 (total sum). 12×8 = 96 (sum of first 12). Remaining sum = 200-96 = 104. Mean = 104÷8 = 13.',
    wrongAnswerExplanations: {
      '12': 'This gives an incorrect total sum.',
      '14': 'This gives an incorrect total sum.',
      '11': 'This gives an incorrect total sum.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch14_t1_qe16',
    type: 'mcq',
    question: 'Which of these data sets has no mode?',
    options: ['1, 2, 3, 4, 5', '1, 1, 2, 3, 4', '1, 2, 2, 3, 4', '1, 1, 2, 2, 3, 3'],
    correctAnswer: '1, 2, 3, 4, 5',
    explanation: 'Each value appears exactly once, so there\'s no most frequent value (no mode).',
    wrongAnswerExplanations: {
      '1, 1, 2, 3, 4': 'The mode is 1, as it appears twice.',
      '1, 2, 2, 3, 4': 'The mode is 2, as it appears twice.',
      '1, 1, 2, 2, 3, 3': 'The modes are 1, 2, and 3, making it multi-modal.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch14_t1_qe17',
    type: 'mcq',
    question: 'If data is 3, 5, 7, 9, 11, what is the difference between the mean and median?',
    options: ['0', '1', '2', '3'],
    correctAnswer: '0',
    explanation: 'Mean = (3+5+7+9+11)÷5 = 35÷5 = 7. Median = 7. Difference = 0.',
    wrongAnswerExplanations: {
      '1': 'Both mean and median are 7, so the difference is 0, not 1.',
      '2': 'Both mean and median are 7, so the difference is 0, not 2.',
      '3': 'Both mean and median are 7, so the difference is 0, not 3.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch14_t1_qe18',
    type: 'mcq',
    question: 'Which measure of central tendency best represents the typical shoe size in a class?',
    options: ['Mode', 'Median', 'Mean', 'None of these'],
    correctAnswer: 'Mode',
    explanation: 'Mode represents the most common value, so it best represents typical shoe size.',
    wrongAnswerExplanations: {
      'Median': 'Median gives the middle value but not necessarily the most common size.',
      'Mean': 'Mean gives an average that might not be a valid shoe size.',
      'None of these': 'Mode is suitable for this scenario.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch14_t1_qe19',
    type: 'mcq',
    question: 'If the mean of 5, 7, 9, 11, and x is 9, what is x?',
    options: ['13', '12', '14', '15'],
    correctAnswer: '13',
    explanation: 'Sum = 5×9 = 45. So, 5+7+9+11+x = 45, which gives x = 13.',
    wrongAnswerExplanations: {
      '12': 'This would make the sum less than 45.',
      '14': 'This would make the sum greater than 45.',
      '15': 'This would make the sum greater than 45.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch14_t1_qe20',
    type: 'mcq',
    question: 'The median of 3, 5, 7, 9, and 11 is the same as the ________ of these numbers.',
    options: ['Mean', 'Mode', 'Range', 'Sum'],
    correctAnswer: 'Mean',
    explanation: 'Median = 7 and Mean = (3+5+7+9+11)÷5 = 35÷5 = 7. They are equal.',
    wrongAnswerExplanations: {
      'Mode': 'There is no mode as all values appear once.',
      'Range': 'Range = 11-3 = 8, not equal to 7.',
      'Sum': 'Sum = 35, not equal to 7.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  }
];
