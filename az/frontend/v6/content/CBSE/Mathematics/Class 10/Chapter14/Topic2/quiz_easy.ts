import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
  {
    id: 'cl10_ch14_t2_qe1',
    type: 'mcq',
    question: 'What is a cumulative frequency?',
    options: [
      'Sum of all frequencies up to a certain class',
      'Average of all frequencies',
      'Difference between highest and lowest frequency',
      'Product of all frequencies'
    ],
    correctAnswer: 'Sum of all frequencies up to a certain class',
    explanation: 'Cumulative frequency is the running total of frequencies, calculated by adding each frequency to the sum of its predecessors.',
    wrongAnswerExplanations: {
      'Average of all frequencies': 'This describes the mean, not cumulative frequency.',
      'Difference between highest and lowest frequency': 'This describes the range of frequencies, not cumulative frequency.',
      'Product of all frequencies': 'Cumulative frequency involves addition, not multiplication of frequencies.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch14_t2_qe2',
    type: 'mcq',
    question: 'A cumulative frequency graph is also known as:',
    options: [
      'Ogive',
      'Histogram',
      'Bar chart',
      'Pie chart'
    ],
    correctAnswer: 'Ogive',
    explanation: 'An ogive is the technical name for a cumulative frequency graph, typically drawn as a smooth curve.',
    wrongAnswerExplanations: {
      'Histogram': 'A histogram represents frequency distribution with adjacent rectangles.',
      'Bar chart': 'A bar chart uses bars to display categorical data, not cumulative frequencies.',
      'Pie chart': 'A pie chart shows data as sectors of a circle, not cumulative frequencies.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 45
  },
  {
    id: 'cl10_ch14_t2_qe3',
    type: 'mcq',
    question: 'In a cumulative frequency curve, what does the y-axis represent?',
    options: [
      'Cumulative frequency',
      'Class interval',
      'Class width',
      'Class mark'
    ],
    correctAnswer: 'Cumulative frequency',
    explanation: 'The y-axis of a cumulative frequency curve shows the cumulative frequency values, while the x-axis shows the upper class boundaries.',
    wrongAnswerExplanations: {
      'Class interval': 'Class intervals are typically represented on the x-axis, not y-axis.',
      'Class width': 'Class width is the difference between upper and lower limits of a class.',
      'Class mark': 'Class mark is the midpoint of a class interval.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 45
  },
  {
    id: 'cl10_ch14_t2_qe4',
    type: 'mcq',
    question: 'To find the median from a cumulative frequency curve, you need to locate:',
    options: [
      'Point corresponding to N/2 on y-axis',
      'Highest point on the curve',
      'Lowest point on the curve',
      'Midpoint of the x-axis'
    ],
    correctAnswer: 'Point corresponding to N/2 on y-axis',
    explanation: 'To find median from an ogive, locate N/2 on y-axis (where N is total frequency), draw a horizontal line to the curve, then drop to x-axis.',
    wrongAnswerExplanations: {
      'Highest point on the curve': 'Highest point represents the total frequency, not the median.',
      'Lowest point on the curve': 'Lowest point is always at the beginning of the curve, not related to median.',
      'Midpoint of the x-axis': 'The midpoint of x-axis may not correspond to the median value.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch14_t2_qe5',
    type: 'mcq',
    question: 'What is plotted on the x-axis of a cumulative frequency graph?',
    options: [
      'Upper class boundaries',
      'Lower class boundaries',
      'Class frequencies',
      'Class marks'
    ],
    correctAnswer: 'Upper class boundaries',
    explanation: 'The x-axis of a cumulative frequency graph shows the upper boundaries of each class interval.',
    wrongAnswerExplanations: {
      'Lower class boundaries': 'Lower boundaries can be used but upper boundaries are conventional.',
      'Class frequencies': 'Class frequencies are represented on the y-axis of a histogram, not an ogive.',
      'Class marks': 'Class marks are used in frequency polygons, not cumulative frequency graphs.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 45
  },
  {
    id: 'cl10_ch14_t2_qe6',
    type: 'mcq',
    question: 'The shape of a less-than type ogive is always:',
    options: [
      'Increasing',
      'Decreasing',
      'Straight line',
      'Parabolic'
    ],
    correctAnswer: 'Increasing',
    explanation: 'A less-than type ogive (cumulative frequency curve) always increases as it represents the running total of frequencies.',
    wrongAnswerExplanations: {
      'Decreasing': 'A decreasing curve would represent a more-than type ogive, not less-than type.',
      'Straight line': 'An ogive is typically curved, reflecting variable frequencies across classes.',
      'Parabolic': 'While curved, an ogive does not specifically follow a parabolic shape.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 45
  },
  {
    id: 'cl10_ch14_t2_qe7',
    type: 'mcq',
    question: 'The value of the cumulative frequency for the last class interval equals:',
    options: [
      'Total frequency of all observations',
      'Frequency of the last class',
      'Mean of all frequencies',
      'Mode of the distribution'
    ],
    correctAnswer: 'Total frequency of all observations',
    explanation: 'The cumulative frequency for the last class equals the sum of all class frequencies, which is the total number of observations.',
    wrongAnswerExplanations: {
      'Frequency of the last class': 'This would only be the individual frequency, not the cumulative one.',
      'Mean of all frequencies': 'Cumulative frequency isn\'t related to the mean of frequencies.',
      'Mode of the distribution': 'The mode is the most frequent value, unrelated to final cumulative frequency.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 45
  },
  {
    id: 'cl10_ch14_t2_qe8',
    type: 'mcq',
    question: 'A more-than type ogive starts from:',
    options: [
      'The total frequency and decreases to zero',
      'Zero and increases to the total frequency',
      'The mean value of the data',
      'The median value of the data'
    ],
    correctAnswer: 'The total frequency and decreases to zero',
    explanation: 'A more-than type ogive starts at the maximum cumulative frequency and decreases to zero as we move right on the x-axis.',
    wrongAnswerExplanations: {
      'Zero and increases to the total frequency': 'This describes a less-than type ogive.',
      'The mean value of the data': 'Ogives don\'t start from the mean value.',
      'The median value of the data': 'Ogives don\'t start from the median value.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 45
  },
  {
    id: 'cl10_ch14_t2_qe9',
    type: 'mcq',
    question: 'Which quartile divides the data into two equal parts?',
    options: [
      'Second quartile (Q₂)',
      'First quartile (Q₁)',
      'Third quartile (Q₃)',
      'Inter-quartile range'
    ],
    correctAnswer: 'Second quartile (Q₂)',
    explanation: 'The second quartile (Q₂) divides the data into two equal parts and is equivalent to the median.',
    wrongAnswerExplanations: {
      'First quartile (Q₁)': 'Q₁ marks the point where 25% of data lies below it.',
      'Third quartile (Q₃)': 'Q₃ marks the point where 75% of data lies below it.',
      'Inter-quartile range': 'This is the difference between Q₃ and Q₁, not a dividing point.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 45
  },
  {
    id: 'cl10_ch14_t2_qe10',
    type: 'mcq',
    question: 'When drawing a cumulative frequency curve, the points are plotted at:',
    options: [
      'Upper class boundaries and corresponding cumulative frequencies',
      'Lower class boundaries and class frequencies',
      'Class marks and cumulative frequencies',
      'Class marks and class frequencies'
    ],
    correctAnswer: 'Upper class boundaries and corresponding cumulative frequencies',
    explanation: 'In an ogive, points are plotted using upper class boundaries on x-axis and their corresponding cumulative frequencies on y-axis.',
    wrongAnswerExplanations: {
      'Lower class boundaries and class frequencies': 'This would not create a cumulative frequency graph.',
      'Class marks and cumulative frequencies': 'Class marks are not typically used for ogives.',
      'Class marks and class frequencies': 'This would create a frequency polygon, not an ogive.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch14_t2_qe11',
    type: 'mcq',
    question: 'To find the first quartile (Q₁) from a cumulative frequency curve, you need to locate:',
    options: [
      'Point corresponding to N/4 on the y-axis',
      'Point corresponding to N/2 on the y-axis',
      'Point corresponding to 3N/4 on the y-axis',
      'Point corresponding to N on the y-axis'
    ],
    correctAnswer: 'Point corresponding to N/4 on the y-axis',
    explanation: 'To find Q₁, locate N/4 on the y-axis (where N is total frequency), draw a horizontal line to the curve, then drop to x-axis.',
    wrongAnswerExplanations: {
      'Point corresponding to N/2 on the y-axis': 'This gives the median or second quartile (Q₂).',
      'Point corresponding to 3N/4 on the y-axis': 'This gives the third quartile (Q₃).',
      'Point corresponding to N on the y-axis': 'This gives the maximum value in the dataset.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch14_t2_qe12',
    type: 'mcq',
    question: 'The frequency polygon and the less-than ogive for the same data intersect at:',
    options: [
      'The mean of the data',
      'The median of the data',
      'The mode of the data',
      'They don\'t necessarily intersect'
    ],
    correctAnswer: 'They don\'t necessarily intersect',
    explanation: 'Frequency polygons and ogives represent different aspects of data (individual vs. cumulative frequency) and don\'t necessarily intersect.',
    wrongAnswerExplanations: {
      'The mean of the data': 'There\'s no mathematical reason for intersection at the mean.',
      'The median of the data': 'There\'s no mathematical reason for intersection at the median.',
      'The mode of the data': 'There\'s no mathematical reason for intersection at the mode.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch14_t2_qe13',
    type: 'mcq',
    question: 'If the less-than and more-than ogives are drawn on the same graph for the same data, they will intersect at:',
    options: [
      'The median',
      'The mean',
      'The mode',
      'The first quartile'
    ],
    correctAnswer: 'The median',
    explanation: 'Less-than and more-than ogives intersect at the median because at this point, 50% of data is less than and 50% is more than this value.',
    wrongAnswerExplanations: {
      'The mean': 'The intersection point represents equal division of data, which is the median\'s property.',
      'The mode': 'The mode is the most frequent value, not related to 50% division point.',
      'The first quartile': 'The first quartile represents 25%, not 50% division of data.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch14_t2_qe14',
    type: 'mcq',
    question: 'The point where a less-than ogive meets the y-axis indicates:',
    options: [
      'Frequency of the first class',
      'Zero',
      'Median of the data',
      'Total frequency'
    ],
    correctAnswer: 'Frequency of the first class',
    explanation: 'At the y-axis (where x=0), the less-than ogive shows the cumulative frequency up to that point, which is the first class frequency.',
    wrongAnswerExplanations: {
      'Zero': 'The ogive might start at zero but not necessarily if there are values in the first class.',
      'Median of the data': 'The median is typically found midway through the curve, not at the y-axis.',
      'Total frequency': 'Total frequency is shown at the far right of a less-than ogive, not at the y-axis.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 45
  },
  {
    id: 'cl10_ch14_t2_qe15',
    type: 'mcq',
    question: 'Which of these is NOT a characteristic of a cumulative frequency curve?',
    options: [
      'It has peaks and troughs',
      'It is non-decreasing',
      'It ends at the total frequency',
      'It helps find median and quartiles'
    ],
    correctAnswer: 'It has peaks and troughs',
    explanation: 'A cumulative frequency curve (ogive) is always non-decreasing as it represents a running total, so it cannot have troughs.',
    wrongAnswerExplanations: {
      'It is non-decreasing': 'This is a correct characteristic of an ogive.',
      'It ends at the total frequency': 'This is a correct characteristic of a less-than type ogive.',
      'It helps find median and quartiles': 'This is a correct application of ogives.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 45
  },
  {
    id: 'cl10_ch14_t2_qe16',
    type: 'mcq',
    question: 'The inter-quartile range (IQR) equals:',
    options: [
      'Q₃ - Q₁',
      'Q₁',
      'Q₃',
      'Q₂'
    ],
    correctAnswer: 'Q₃ - Q₁',
    explanation: 'The inter-quartile range (IQR) is the difference between the third quartile (Q₃) and the first quartile (Q₁).',
    wrongAnswerExplanations: {
      'Q₁': 'Q₁ is just the first quartile, not the range between quartiles.',
      'Q₃': 'Q₃ is just the third quartile, not the range between quartiles.',
      'Q₂': 'Q₂ is the median, not the range between quartiles.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 45
  },
  {
    id: 'cl10_ch14_t2_qe17',
    type: 'mcq',
    question: 'In a "less than" ogive, what does the y-coordinate of a point on the curve represent?',
    options: [
      'Number of observations less than or equal to the corresponding x-value',
      'Number of observations greater than the corresponding x-value',
      'Number of observations exactly equal to the corresponding x-value',
      'Average of all observations up to the corresponding x-value'
    ],
    correctAnswer: 'Number of observations less than or equal to the corresponding x-value',
    explanation: 'In a less-than ogive, the y-coordinate represents the cumulative frequency of all values less than or equal to the x-value.',
    wrongAnswerExplanations: {
      'Number of observations greater than the corresponding x-value': 'This describes a more-than ogive.',
      'Number of observations exactly equal to the corresponding x-value': 'This would be the class frequency, not cumulative frequency.',
      'Average of all observations up to the corresponding x-value': 'An ogive doesn\'t represent averages.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 45
  },
  {
    id: 'cl10_ch14_t2_qe18',
    type: 'mcq',
    question: 'If the total frequency of a distribution is 60, the value of the third quartile (Q₃) corresponds to the cumulative frequency of:',
    options: [
      '45',
      '30',
      '15',
      '20'
    ],
    correctAnswer: '45',
    explanation: 'The third quartile (Q₃) corresponds to 75% of the data, so Q₃ is at cumulative frequency 60 × 0.75 = 45.',
    wrongAnswerExplanations: {
      '30': 'This represents 50% of the data (median or Q₂).',
      '15': 'This represents 25% of the data (first quartile or Q₁).',
      '20': 'This represents approximately 33% of the data, not a standard quartile.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 45
  },
  {
    id: 'cl10_ch14_t2_qe19',
    type: 'mcq',
    question: 'The steepest part of a cumulative frequency curve indicates:',
    options: [
      'Classes with the highest frequency',
      'Classes with the lowest frequency',
      'The median class',
      'The mean of the data'
    ],
    correctAnswer: 'Classes with the highest frequency',
    explanation: 'The steepest part of an ogive indicates where frequency is highest, as cumulative frequency increases most rapidly there.',
    wrongAnswerExplanations: {
      'Classes with the lowest frequency': 'Low-frequency classes create nearly horizontal segments on the ogive.',
      'The median class': 'The median class isn\'t necessarily related to the steepness of the curve.',
      'The mean of the data': 'The mean isn\'t directly represented by the steepness of an ogive.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch14_t2_qe20',
    type: 'mcq',
    question: 'What is the shape of a cumulative frequency curve for a uniform distribution?',
    options: [
      'Approximately a straight line',
      'A parabola',
      'An exponential curve',
      'A bell-shaped curve'
    ],
    correctAnswer: 'Approximately a straight line',
    explanation: 'For a uniform distribution where each class has equal frequency, the cumulative frequency increases at a constant rate, forming a straight line.',
    wrongAnswerExplanations: {
      'A parabola': 'A parabolic shape would indicate progressively changing frequencies.',
      'An exponential curve': 'An exponential shape would indicate rapidly increasing frequencies.',
      'A bell-shaped curve': 'A bell-shaped curve describes a frequency distribution, not a cumulative frequency curve.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  }
];
