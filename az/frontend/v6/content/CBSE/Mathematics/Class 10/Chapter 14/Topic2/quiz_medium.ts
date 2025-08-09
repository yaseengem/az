import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
  {
    id: 'cl10_ch14_t2_qm1',
    type: 'mcq',
    question: 'The marks of 100 students in a test are given in the following table:\n\nMarks | 0-10 | 10-20 | 20-30 | 30-40 | 40-50\nNo. of students | 12 | 18 | 27 | 25 | 18\n\nWhat is the median mark?',
    options: [
      '25.6',
      '27.4',
      '24.1',
      '26.3'
    ],
    correctAnswer: '25.6',
    explanation: 'For median, we need N/2 = 50th value. This falls in 20-30 class. Median = 20 + [(50-30)/27]×10 = 20 + 7.4 = 25.6',
    wrongAnswerExplanations: {
      '27.4': 'This calculation incorrectly uses the lower cumulative frequency.',
      '24.1': 'This calculation uses an incorrect interpolation formula.',
      '26.3': 'This uses incorrect class boundaries in the calculation.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch14_t2_qm2',
    type: 'mcq',
    question: 'Consider the following cumulative frequency table:\n\nMarks | Less than 10 | Less than 20 | Less than 30 | Less than 40 | Less than 50\nNo. of students | 15 | 38 | 65 | 84 | 100\n\nWhat is the first quartile (Q₁)?',
    options: [
      '15.8',
      '18.2',
      '14.6',
      '17.1'
    ],
    correctAnswer: '15.8',
    explanation: 'For Q₁, we need N/4 = 25th value. This falls in 10-20 class. Q₁ = 10 + [(25-15)/23]×10 = 10 + 4.3 ≈ 15.8',
    wrongAnswerExplanations: {
      '18.2': 'This calculation incorrectly uses the wrong starting point for the class interval.',
      '14.6': 'This uses an incorrect formula for interpolation.',
      '17.1': 'This is based on incorrect cumulative frequency values.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch14_t2_qm3',
    type: 'mcq',
    question: 'The following table shows the daily wages of 60 workers in a factory:\n\nDaily wages (₹) | 100-120 | 120-140 | 140-160 | 160-180 | 180-200\nNo. of workers | 12 | 14 | 16 | 10 | 8\n\nFind the third quartile of the daily wages.',
    options: [
      '165',
      '170',
      '160',
      '155'
    ],
    correctAnswer: '165',
    explanation: 'For Q₃, we need 3N/4 = 45th value. This falls in 160-180 class. Q₃ = 160 + [(45-42)/10]×20 = 160 + 6 = 166 ≈ 165',
    wrongAnswerExplanations: {
      '170': 'This calculation uses incorrect class width.',
      '160': 'This is simply the lower boundary of the class containing Q₃.',
      '155': 'This calculation uses incorrect cumulative frequency.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch14_t2_qm4',
    type: 'mcq',
    question: 'In a frequency distribution, if the median is 32.5 and the total frequency is 80, what is the cumulative frequency up to the median class?',
    options: [
      '40',
      '30',
      '20',
      '50'
    ],
    correctAnswer: '40',
    explanation: 'The median corresponds to N/2 = 80/2 = 40 observations, so the cumulative frequency up to the median class is 40.',
    wrongAnswerExplanations: {
      '30': 'This would make the median fall at the 30/80 position, which is incorrect.',
      '20': 'This would make the median fall at the 20/80 position, which is incorrect.',
      '50': 'This would make the median fall at the 50/80 position, which is incorrect.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch14_t2_qm5',
    type: 'mcq',
    question: 'Given the following data:\n\nClass interval | 0-10 | 10-20 | 20-30 | 30-40 | 40-50\nFrequency | 5 | 8 | 12 | 20 | 5\n\nThe value of mode from the ogive curves is closest to:',
    options: [
      '33',
      '30',
      '35',
      '28'
    ],
    correctAnswer: '33',
    explanation: 'From less-than and more-than ogives, mode is where the vertical distance between them is greatest, which occurs in the 30-40 class at about 33.',
    wrongAnswerExplanations: {
      '30': 'This is at the lower boundary of the modal class, not the mode itself.',
      '35': 'This is the class mark of the modal class, not necessarily the mode.',
      '28': 'This value is before the modal class.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch14_t2_qm6',
    type: 'mcq',
    question: 'If the less-than ogive and more-than ogive for a data set intersect at the point (25, 50), what is the total frequency?',
    options: [
      '100',
      '50',
      '75',
      '125'
    ],
    correctAnswer: '100',
    explanation: 'The intersection point (25, 50) means 50 values are less than 25 and 50 are more than 25. Total frequency = 50 + 50 = 100.',
    wrongAnswerExplanations: {
      '50': 'This is just the number of values less than (or more than) the median.',
      '75': 'This calculation incorrectly adds the coordinates of the intersection point.',
      '125': 'This calculation incorrectly assumes there are more than 100 values.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch14_t2_qm7',
    type: 'mcq',
    question: 'From a cumulative frequency curve, it is found that the lower and upper quartiles are 24 and 42 respectively. What is the inter-quartile range?',
    options: [
      '18',
      '33',
      '24',
      '66'
    ],
    correctAnswer: '18',
    explanation: 'Inter-quartile range = Q₃ - Q₁ = 42 - 24 = 18',
    wrongAnswerExplanations: {
      '33': 'This is the average of Q₁ and Q₃, not their difference.',
      '24': 'This is the value of Q₁, not the inter-quartile range.',
      '66': 'This is the sum of Q₁ and Q₃, not their difference.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch14_t2_qm8',
    type: 'mcq',
    question: 'The following table gives the distribution of heights (in cm) of 60 students:\n\nHeight (cm) | 150-155 | 155-160 | 160-165 | 165-170 | 170-175\nNo. of students | 8 | 12 | 24 | 10 | 6\n\nWhat percentage of students have heights less than 165 cm?',
    options: [
      '73.3%',
      '65%',
      '40%',
      '33.3%'
    ],
    correctAnswer: '73.3%',
    explanation: 'Students with height < 165 cm = 8 + 12 + 24 = 44. Percentage = (44/60) × 100 = 73.3%',
    wrongAnswerExplanations: {
      '65%': 'This uses incorrect addition of frequencies.',
      '40%': 'This only accounts for students in the 160-165 class.',
      '33.3%': 'This represents students with height ≥ 165 cm.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch14_t2_qm9',
    type: 'mcq',
    question: 'In a cumulative frequency distribution of 80 observations, if Q₁ = 25 and Q₃ = 45, the number of observations between Q₁ and Q₃ is:',
    options: [
      '40',
      '20',
      '60',
      '30'
    ],
    correctAnswer: '40',
    explanation: 'Between Q₁ and Q₃ lie 50% of the total observations. So the number is 50% of 80 = 40 observations.',
    wrongAnswerExplanations: {
      '20': 'This is 25% of the total observations, not the number between quartiles.',
      '60': 'This is 75% of the total observations, not the number between quartiles.',
      '30': 'This is an incorrect calculation, as it should be 50% of total observations.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch14_t2_qm10',
    type: 'mcq',
    question: 'The median of the following data is 36. Find the value of p:\n\nClass interval | 0-10 | 10-20 | 20-30 | 30-40 | 40-50\nFrequency | 5 | 10 | 15 | p | 12\nCumulative frequency | 5 | 15 | 30 | ? | 60',
    options: [
      '18',
      '15',
      '20',
      '12'
    ],
    correctAnswer: '18',
    explanation: 'The median class is 30-40 as 36 falls here. For median=36, we need 30 + (p-15)/p × 10 = 36, which gives p = 18.',
    wrongAnswerExplanations: {
      '15': 'With p=15, the median would be higher than 36.',
      '20': 'With p=20, the median would be less than 36.',
      '12': 'With p=12, the median would not equal 36.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch14_t2_qm11',
    type: 'mcq',
    question: 'The following table gives the cumulative frequency distribution of 100 students:\n\nMarks | Less than 10 | Less than 20 | Less than 30 | Less than 40 | Less than 50\nCum. Freq. | 5 | 20 | 50 | 75 | 100\n\nThe median lies in the class:',
    options: [
      '20-30',
      '30-40',
      '10-20',
      '40-50'
    ],
    correctAnswer: '20-30',
    explanation: 'Median corresponds to 50th observation. From the table, 50th observation falls in the "less than 30" group but not in "less than 20", so it\'s in class 20-30.',
    wrongAnswerExplanations: {
      '30-40': 'This class contains the 51st to 75th observations, not the 50th.',
      '10-20': 'This class contains the 6th to 20th observations, not the 50th.',
      '40-50': 'This class contains the 76th to 100th observations, not the 50th.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch14_t2_qm12',
    type: 'mcq',
    question: 'For a grouped data with 80 observations, the value of the 60th observation (D₇.₅) from a cumulative frequency curve is 45. This value represents:',
    options: [
      'The 75th percentile',
      'The third quartile',
      'The second quartile',
      'The 60th percentile'
    ],
    correctAnswer: 'The 75th percentile',
    explanation: 'The 60th observation out of 80 is at position 60/80 = 0.75 or 75%, which defines the 75th percentile or third quartile.',
    wrongAnswerExplanations: {
      'The third quartile': 'This is correct but identical to the 75th percentile.',
      'The second quartile': 'The second quartile is at 50% position, not 75%.',
      'The 60th percentile': 'The position is 75%, not 60%.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch14_t2_qm13',
    type: 'mcq',
    question: 'Given the following data:\n\nClass interval | 10-30 | 30-50 | 50-70 | 70-90 | 90-110\nFrequency | 5 | 15 | 20 | 10 | 10\n\nWhat is the lower limit of the class containing the median?',
    options: [
      '50',
      '30',
      '70',
      '10'
    ],
    correctAnswer: '50',
    explanation: 'Total frequency = 60, so median is at 30th position. Cumulative frequencies are 5, 20, 40, 50, 60, so median lies in the 50-70 class.',
    wrongAnswerExplanations: {
      '30': 'This is the lower limit of the class before the median class.',
      '70': 'This is the upper limit of the median class, not the lower limit.',
      '10': 'This is the lower limit of the first class, far from the median class.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch14_t2_qm14',
    type: 'mcq',
    question: 'Given two ogives (less-than and more-than) intersecting at the point (25, 40), what is the median of the data?',
    options: [
      '25',
      '40',
      '65',
      '32.5'
    ],
    correctAnswer: '25',
    explanation: 'When less-than and more-than ogives intersect, the x-coordinate of the intersection point gives the median value, which is 25.',
    wrongAnswerExplanations: {
      '40': 'This is the y-coordinate of the intersection, representing the cumulative frequency at median.',
      '65': 'This is the sum of coordinates, which has no statistical meaning.',
      '32.5': 'This assumes the median is the average of 25 and 40, which is incorrect.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch14_t2_qm15',
    type: 'mcq',
    question: 'The following is a cumulative frequency distribution:\n\nMarks | Less than 10 | Less than 20 | Less than 30 | Less than 40 | Less than 50\nCum. Freq. | 8 | 20 | 44 | 70 | 100\n\nThe number of students who scored 30 or more marks is:',
    options: [
      '56',
      '44',
      '36',
      '70'
    ],
    correctAnswer: '56',
    explanation: 'Students with marks < 30 = 44. Total students = 100. Students with marks ≥ 30 = 100 - 44 = 56.',
    wrongAnswerExplanations: {
      '44': 'This is the number of students with marks < 30, not ≥ 30.',
      '36': 'This is an incorrect calculation.',
      '70': 'This is the number of students with marks < 40, not ≥ 30.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch14_t2_qm16',
    type: 'mcq',
    question: 'In a cumulative frequency curve, what does a nearly horizontal section of the curve indicate about the frequency distribution?',
    options: [
      'Very few or no observations in that range',
      'Maximum frequency in that range',
      'Uniform frequency in that range',
      'Median lies in that range'
    ],
    correctAnswer: 'Very few or no observations in that range',
    explanation: 'A horizontal section means cumulative frequency isn\'t increasing, indicating few or no observations in that range of values.',
    wrongAnswerExplanations: {
      'Maximum frequency in that range': 'Maximum frequency would create a steep rise, not a horizontal section.',
      'Uniform frequency in that range': 'Uniform frequency would create a straight line with positive slope.',
      'Median lies in that range': 'The median\'s location isn\'t related to the curve\'s horizontal sections.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch14_t2_qm17',
    type: 'mcq',
    question: 'The cumulative frequencies up to upper boundaries 10, 20, 30, 40, and 50 are 15, 32, 43, 48, and 50 respectively. The frequency of the class 30-40 is:',
    options: [
      '5',
      '11',
      '15',
      '7'
    ],
    correctAnswer: '5',
    explanation: 'Frequency of class 30-40 = Cumulative frequency up to 40 - Cumulative frequency up to 30 = 48 - 43 = 5',
    wrongAnswerExplanations: {
      '11': 'This is the frequency of the class 20-30, not 30-40.',
      '15': 'This is the frequency of the class 0-10, not 30-40.',
      '7': 'This is an incorrect calculation.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch14_t2_qm18',
    type: 'mcq',
    question: 'If the median of a distribution is 28 and the interquartile range is 15, what is the sum of the quartiles Q₁ and Q₃?',
    options: [
      '56',
      '43',
      '28',
      '13'
    ],
    correctAnswer: '56',
    explanation: 'Q₂ (median) = 28. Interquartile range = Q₃ - Q₁ = 15. Since Q₂ is midpoint, Q₃ - Q₂ = Q₂ - Q₁ = 7.5. So Q₁ = 20.5, Q₃ = 35.5, and Q₁ + Q₃ = 56.',
    wrongAnswerExplanations: {
      '43': 'This assumes Q₁ = 15 and Q₃ = 28, which is incorrect.',
      '28': 'This is just the median value, not the sum of quartiles.',
      '13': 'This assumes incorrect values for quartiles.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch14_t2_qm19',
    type: 'mcq',
    question: 'From a cumulative frequency curve of 120 observations, it was found that 70% of observations are less than 42. The number of observations less than 42 is:',
    options: [
      '84',
      '70',
      '36',
      '42'
    ],
    correctAnswer: '84',
    explanation: 'Number of observations less than 42 = 70% of 120 = 0.7 × 120 = 84 observations',
    wrongAnswerExplanations: {
      '70': 'This uses the percentage value directly, ignoring the total number.',
      '36': 'This is 30% of 120, not 70%.',
      '42': 'This confuses the value 42 with the number of observations.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch14_t2_qm20',
    type: 'mcq',
    question: 'The following is a cumulative frequency distribution of 50 observations:\n\nValue | Less than 10 | Less than 20 | Less than 30 | Less than 40 | Less than 50\nCum. Freq. | 5 | 15 | 30 | 40 | 50\n\nIn which class interval does the 35th observation lie?',
    options: [
      '30-40',
      '20-30',
      '40-50',
      '10-20'
    ],
    correctAnswer: '30-40',
    explanation: 'The 35th observation lies in the class where its cumulative frequency falls. Since 30 < 35 ≤ 40, it lies in the 30-40 class interval.',
    wrongAnswerExplanations: {
      '20-30': 'This class contains observations 16-30, not the 35th.',
      '40-50': 'This class contains observations 41-50, not the 35th.',
      '10-20': 'This class contains observations 6-15, not the 35th.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  }
];
