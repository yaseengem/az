import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
  {
    id: 'cl10_ch14_t1_qm1',
    type: 'mcq',
    question: 'The mean of 50 observations was 36. It was found that an observation 48 was wrongly recorded as 84. The correct mean is:',
    options: ['34.92', '35.28', '36.72', '37.08'],
    correctAnswer: '35.28',
    explanation: 'Original sum = 50×36 = 1800. Corrected sum = 1800-(84-48) = 1800-36 = 1764. New mean = 1764÷50 = 35.28.',
    wrongAnswerExplanations: {
      '34.92': 'This subtracts 84 completely instead of replacing it with 48.',
      '36.72': 'This adds 36 to the sum instead of subtracting it.',
      '37.08': 'This adds the difference to the mean instead of subtracting from the sum and recalculating.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch14_t1_qm2',
    type: 'mcq',
    question: 'For the frequency distribution: 10, 20, 15, 8, 6, 12, 9 with respective values 3, 6, 9, 12, 15, 18, 21, what is the median?',
    options: ['9', '10', '12', '15'],
    correctAnswer: '9',
    explanation: 'Total frequency = 80. Median position = 40.5. Cumulative frequencies: 10, 30, 45, 53, 59, 71, 80. Median corresponds to value 9.',
    wrongAnswerExplanations: {
      '10': 'This doesn\'t correspond to any class value.',
      '12': 'This corresponds to a cumulative frequency of 53, not the median position.',
      '15': 'This corresponds to a cumulative frequency of 59, not the median position.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch14_t1_qm3',
    type: 'mcq',
    question: 'In a moderately skewed distribution, the relationship between mean, median, and mode is best described by:',
    options: [
      'Mode = 3 Median - 2 Mean',
      'Mean - Mode = 3(Mean - Median)',
      'Median = (Mode + Mean)/2',
      'Mode = 2 Median - Mean'
    ],
    correctAnswer: 'Mode = 3 Median - 2 Mean',
    explanation: 'In an empirical relationship for moderately skewed distribution, Mode = 3 Median - 2 Mean.',
    wrongAnswerExplanations: {
      'Mean - Mode = 3(Mean - Median)': 'This is an incorrect rearrangement of the empirical relation.',
      'Median = (Mode + Mean)/2': 'This approximation isn\'t valid for all skewed distributions.',
      'Mode = 2 Median - Mean': 'This doesn\'t account for the correct relationship in skewed distributions.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch14_t1_qm4',
    type: 'mcq',
    question: 'If the mean of the data 3, 5, 7, x, y is 10, and the median is 7, what are the values of x and y?',
    options: ['11 and 24', '7 and 28', '13 and 22', '9 and 26'],
    correctAnswer: '11 and 24',
    explanation: 'Median = 7 implies it\'s the middle value. So, 3 < 5 < 7 < x < y. Sum = 5×10 = 50. So, 3+5+7+x+y = 50, giving x+y = 35. With x < y, x = 11, y = 24 works.',
    wrongAnswerExplanations: {
      '7 and 28': '7 would make two medians (7, 7), violating the constraint.',
      '13 and 22': 'Sum is correct, but 13 > 7 disrupts the order needed for median = 7.',
      '9 and 26': 'Sum is correct, but 9 > 7 disrupts the order needed for median = 7.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch14_t1_qm5',
    type: 'mcq',
    question: 'The mean of a data set is 15 and the standard deviation is 3. If each value is multiplied by 2 and then 7 is added to each product, what will be the new mean and standard deviation?',
    options: ['Mean = 37, SD = 6', 'Mean = 30, SD = 6', 'Mean = 37, SD = 3', 'Mean = 30, SD = 3'],
    correctAnswer: 'Mean = 37, SD = 6',
    explanation: 'New mean = 2×15 + 7 = 37. New SD = 2×3 = 6. When data is transformed as ax+b, mean changes to a×mean+b and SD changes to |a|×SD.',
    wrongAnswerExplanations: {
      'Mean = 30, SD = 6': 'Mean calculation is incorrect; it should be 2×15 + 7 = 37.',
      'Mean = 37, SD = 3': 'SD calculation is incorrect; it should be 2×3 = 6.',
      'Mean = 30, SD = 3': 'Both mean and SD calculations are incorrect.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch14_t1_qm6',
    type: 'mcq',
    question: 'The average weight of 25 students is 60 kg. Five more students with average weight 58 kg join the group. The average weight of all 30 students is:',
    options: ['59.67 kg', '59.83 kg', '60.33 kg', '59.5 kg'],
    correctAnswer: '59.67 kg',
    explanation: 'Original total = 25×60 = 1500 kg. New students = 5×58 = 290 kg. New total = 1790 kg. New average = 1790÷30 = 59.67 kg.',
    wrongAnswerExplanations: {
      '59.83 kg': 'This uses incorrect calculation in finding the new average.',
      '60.33 kg': 'This adds instead of calculating weighted average correctly.',
      '59.5 kg': 'This doesn\'t account for the different group sizes correctly.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch14_t1_qm7',
    type: 'mcq',
    question: 'The median of the data 13, 16, 12, x, 15, 10, 16, 15, 14 is 14. The value of x could be:',
    options: ['14', '17', '18', '11'],
    correctAnswer: '14',
    explanation: 'Arranging the given values: 10, 12, 13, 14, 15, 15, 16, 16, x. For median=14, x must be greater than 14. x=14 works.',
    wrongAnswerExplanations: {
      '17': 'This would make the median 15, not 14.',
      '18': 'This would make the median 15, not 14.',
      '11': 'This would make the median 13, not 14.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch14_t1_qm8',
    type: 'mcq',
    question: 'For the data 6, 7, 10, 12, 13, 4, 8, 12, which of the following is true?',
    options: ['Mean = 9, Median = 9', 'Mean = 9, Median = 9.5', 'Mean = 8, Median = 9', 'Mean = 9, Median = 8.5'],
    correctAnswer: 'Mean = 9, Median = 9',
    explanation: 'Mean = (6+7+10+12+13+4+8+12)÷8 = 72÷8 = 9. Arranging: 4, 6, 7, 8, 10, 12, 12, 13. Median = (8+10)÷2 = 9.',
    wrongAnswerExplanations: {
      'Mean = 9, Median = 9.5': 'The median calculation is incorrect.',
      'Mean = 8, Median = 9': 'The mean calculation is incorrect.',
      'Mean = 9, Median = 8.5': 'The median calculation is incorrect.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch14_t1_qm9',
    type: 'mcq',
    question: 'The mean of a set of 50 observations is 40. If one of the observations valued 15 is removed, what is the new mean?',
    options: ['40.51', '40.25', '39.49', '41.5'],
    correctAnswer: '40.51',
    explanation: 'Original sum = 50×40 = 2000. New sum = 2000-15 = 1985. New mean = 1985÷49 = 40.51.',
    wrongAnswerExplanations: {
      '40.25': 'This incorrectly calculates the effect of removing the value.',
      '39.49': 'This subtracts from the mean instead of recalculating properly.',
      '41.5': 'This incorrectly adds to the mean instead of recalculating.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch14_t1_qm10',
    type: 'mcq',
    question: 'A teacher calculates the mean score of 25 students as 78. Later, she discovers that a score of 85 was incorrectly recorded as 55. What is the correct mean?',
    options: ['79.2', '78.8', '77.2', '76.8'],
    correctAnswer: '79.2',
    explanation: 'Error = 55-85 = -30. Correction to sum = +30. Original sum = 25×78 = 1950. Corrected sum = 1950+30 = 1980. New mean = 1980÷25 = 79.2.',
    wrongAnswerExplanations: {
      '78.8': 'This uses an incorrect value for the error calculation.',
      '77.2': 'This subtracts from the sum instead of adding the correction.',
      '76.8': 'This uses both incorrect error value and direction.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch14_t1_qm11',
    type: 'mcq',
    question: 'The mean of first 10 natural numbers is:',
    options: ['5.5', '5', '5.05', '6'],
    correctAnswer: '5.5',
    explanation: 'Mean = (1+2+3+4+5+6+7+8+9+10)÷10 = 55÷10 = 5.5.',
    wrongAnswerExplanations: {
      '5': 'This incorrectly calculates the sum or division.',
      '5.05': 'This calculates with an error in the sum.',
      '6': 'This includes 0 or makes an arithmetic error.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch14_t1_qm12',
    type: 'mcq',
    question: 'A data set has mode 12 and mean 10. If we add 5 to each value in the data set, what will be the new mode and mean?',
    options: ['Mode = 17, Mean = 15', 'Mode = 12, Mean = 15', 'Mode = 17, Mean = 10', 'Mode = 15, Mean = 15'],
    correctAnswer: 'Mode = 17, Mean = 15',
    explanation: 'When adding a constant k to each value, both mode and mean increase by k. So, new mode = 12+5 = 17 and new mean = 10+5 = 15.',
    wrongAnswerExplanations: {
      'Mode = 12, Mean = 15': 'The mode should also increase by 5.',
      'Mode = 17, Mean = 10': 'The mean should also increase by 5.',
      'Mode = 15, Mean = 15': 'The mode increases by 5, not by a different value.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch14_t1_qm13',
    type: 'mcq',
    question: 'The median of a set of 11 distinct observations is 65. If the smallest value is 40, what is the smallest possible value for the largest observation?',
    options: ['90', '85', '65', '75'],
    correctAnswer: '90',
    explanation: 'For 11 observations, median is 6th value. Five values must be below 65 and five above. With smallest = 40, largest must be ≥ 90 to maintain median = 65.',
    wrongAnswerExplanations: {
      '85': 'This doesn\'t account for the minimum difference needed to maintain the median.',
      '65': 'This would make the median less than 65.',
      '75': 'This doesn\'t ensure the median is 65 with the given constraints.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch14_t1_qm14',
    type: 'mcq',
    question: 'The mean weight of boys in a class is 50 kg, and that of girls is 45 kg. If the mean weight of the whole class is 48 kg, what is the ratio of the number of boys to girls?',
    options: ['3:2', '2:3', '4:1', '1:4'],
    correctAnswer: '3:2',
    explanation: 'Let x be boys and y be girls. Then, 50x + 45y = 48(x+y). Solving, 2x = 3y, so x:y = 3:2.',
    wrongAnswerExplanations: {
      '2:3': 'This is the inverse of the correct ratio.',
      '4:1': 'This doesn\'t satisfy the mean weight equation.',
      '1:4': 'This would make the class mean much closer to 45 kg.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch14_t1_qm15',
    type: 'mcq',
    question: 'The mean of 100 observations was 40. If one of the observations was incorrectly recorded as 83 instead of 53, the correct mean is:',
    options: ['39.7', '40.3', '39.3', '40.7'],
    correctAnswer: '39.7',
    explanation: 'Error = 83-53 = 30. Original sum = 100×40 = 4000. Corrected sum = 4000-30 = 3970. New mean = 3970÷100 = 39.7.',
    wrongAnswerExplanations: {
      '40.3': 'This adds 30 to the sum instead of subtracting.',
      '39.3': 'This incorrectly calculates the effect of the error.',
      '40.7': 'This uses wrong arithmetic in calculating the new mean.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch14_t1_qm16',
    type: 'mcq',
    question: 'For the data 15, 16, 17, 18, 19, 20, 22, 23, 24, the modal class with class size 2 is:',
    options: ['18 - 20', '15 - 17', '22 - 24', '16 - 18'],
    correctAnswer: '18 - 20',
    explanation: 'With class size 2: classes are 15-17, 17-19, 19-21, 21-23, 23-25. Frequencies: 3, 3, 2, 1, 1. There\'s a tie for modal class, but 18-20 contains the highest concentration.',
    wrongAnswerExplanations: {
      '15 - 17': 'This class has frequency 2, not the highest.',
      '22 - 24': 'This class has frequency 2, not the highest.',
      '16 - 18': 'This class has frequency 3, but not the best representation of the mode.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch14_t1_qm17',
    type: 'mcq',
    question: 'If the median of -3, 5, 7, y, 10, 12, 15, 21, 28 is 10, the value of y is:',
    options: ['10', '9', '11', '8'],
    correctAnswer: '10',
    explanation: 'In a set of 9 values, the median is the 5th value. For median=10, y must be ≤10. y=10 works.',
    wrongAnswerExplanations: {
      '9': 'This would make the median between 9 and 10, not 10.',
      '11': 'This would make the median between 10 and 11, not 10.',
      '8': 'This would make the median between 8 and 10, not 10.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch14_t1_qm18',
    type: 'mcq',
    question: 'The distribution shown below is best described as:',
    options: ['Right-skewed', 'Left-skewed', 'Symmetric', 'Bimodal'],
    correctAnswer: 'Right-skewed',
    explanation: 'In a right-skewed distribution, mean > median > mode, with the tail extending to the right.',
    wrongAnswerExplanations: {
      'Left-skewed': 'In a left-skewed distribution, mean < median < mode.',
      'Symmetric': 'In a symmetric distribution, mean = median = mode.',
      'Bimodal': 'A bimodal distribution has two modes (two peaks).'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch14_t1_qm19',
    type: 'mcq',
    question: 'If the mean of five numbers is 30, and the mean of three of these numbers is 25, what is the mean of the remaining two numbers?',
    options: ['37.5', '35', '40', '42.5'],
    correctAnswer: '37.5',
    explanation: 'Sum of 5 numbers = 5×30 = 150. Sum of 3 numbers = 3×25 = 75. Sum of 2 remaining = 150-75 = 75. Mean = 75÷2 = 37.5.',
    wrongAnswerExplanations: {
      '35': 'This doesn\'t give the correct total sum of all 5 numbers.',
      '40': 'This uses incorrect arithmetic in calculating the remaining sum.',
      '42.5': 'This doesn\'t account for the different group sizes correctly.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch14_t1_qm20',
    type: 'mcq',
    question: 'In a right-skewed distribution, the mean is 15 and the median is 12. The approximate value of the mode is:',
    options: ['6', '9', '18', '21'],
    correctAnswer: '6',
    explanation: 'Using the empirical relation for skewed distributions: Mode ≈ 3×Median - 2×Mean = 3×12 - 2×15 = 36 - 30 = 6.',
    wrongAnswerExplanations: {
      '9': 'This uses an incorrect relationship between the measures.',
      '18': 'This adds the difference between mean and median instead of using the empirical relation.',
      '21': 'This uses the wrong formula: 3×Mean - 2×Median.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  }
];
