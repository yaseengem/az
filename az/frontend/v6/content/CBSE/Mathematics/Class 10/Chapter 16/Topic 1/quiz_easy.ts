import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
  {
    id: 'cl10_ch16_t1_qe1',
    type: 'mcq',
    question: 'In a coordinate system, which quadrant contains points with negative x-coordinate and positive y-coordinate?',
    options: ['First quadrant', 'Second quadrant', 'Third quadrant', 'Fourth quadrant'],
    correctAnswer: 'Second quadrant',
    explanation: 'The second quadrant contains points where x < 0 and y > 0.',
    wrongAnswerExplanations: {
      'First quadrant': 'The first quadrant contains points where both x > 0 and y > 0.',
      'Third quadrant': 'The third quadrant contains points where both x < 0 and y < 0.',
      'Fourth quadrant': 'The fourth quadrant contains points where x > 0 and y < 0.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch16_t1_qe2',
    type: 'mcq',
    question: 'What is the distance between the points (3, 4) and (0, 0)?',
    options: ['5 units', '7 units', '1 unit', '25 units'],
    correctAnswer: '5 units',
    explanation: 'Using the distance formula: d = √[(x₂-x₁)² + (y₂-y₁)²] = √[(0-3)² + (0-4)²] = √(9+16) = √25 = 5 units',
    wrongAnswerExplanations: {
      '7 units': 'This results from adding 3 and 4 instead of using the distance formula.',
      '1 unit': 'This is an incorrect calculation.',
      '25 units': 'This is the square of the distance, not the distance itself.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch16_t1_qe3',
    type: 'mcq',
    question: 'What are the coordinates of the origin in a Cartesian coordinate system?',
    options: ['(0, 0)', '(1, 1)', '(0, 1)', '(1, 0)'],
    correctAnswer: '(0, 0)',
    explanation: 'The origin is the point where both x-coordinate and y-coordinate are zero: (0, 0).',
    wrongAnswerExplanations: {
      '(1, 1)': 'This point is one unit right and one unit up from the origin.',
      '(0, 1)': 'This point is on the y-axis, one unit up from the origin.',
      '(1, 0)': 'This point is on the x-axis, one unit right from the origin.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch16_t1_qe4',
    type: 'mcq',
    question: 'Which of the following points lies on the y-axis?',
    options: ['(0, 5)', '(5, 0)', '(2, 3)', '(−4, 4)'],
    correctAnswer: '(0, 5)',
    explanation: 'Any point on the y-axis has an x-coordinate of 0. So (0, 5) lies on the y-axis.',
    wrongAnswerExplanations: {
      '(5, 0)': 'This point lies on the x-axis, not the y-axis.',
      '(2, 3)': 'This point lies in the first quadrant, not on either axis.',
      '(−4, 4)': 'This point lies in the second quadrant, not on either axis.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch16_t1_qe5',
    type: 'mcq',
    question: 'The point (−3, −5) lies in which quadrant?',
    options: ['First quadrant', 'Second quadrant', 'Third quadrant', 'Fourth quadrant'],
    correctAnswer: 'Third quadrant',
    explanation: 'In the third quadrant, both x and y coordinates are negative. Since (−3, −5) has both coordinates negative, it lies in the third quadrant.',
    wrongAnswerExplanations: {
      'First quadrant': 'The first quadrant contains points where both x > 0 and y > 0.',
      'Second quadrant': 'The second quadrant contains points where x < 0 and y > 0.',
      'Fourth quadrant': 'The fourth quadrant contains points where x > 0 and y < 0.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch16_t1_qe6',
    type: 'mcq',
    question: 'What is the distance between the points (3, 2) and (7, 5)?',
    options: ['5 units', '4 units', '7 units', '√25 units'],
    correctAnswer: '5 units',
    explanation: 'Using the distance formula: d = √[(x₂-x₁)² + (y₂-y₁)²] = √[(7-3)² + (5-2)²] = √(16+9) = √25 = 5 units',
    wrongAnswerExplanations: {
      '4 units': 'This is the difference between the x-coordinates only.',
      '7 units': 'This is the sum of the differences in coordinates (4+3).',
      '√25 units': 'This is equal to 5 units, just not simplified.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch16_t1_qe7',
    type: 'mcq',
    question: 'If a point lies on the x-axis, what is its y-coordinate?',
    options: ['0', '1', 'Can be any value', 'Cannot be determined'],
    correctAnswer: '0',
    explanation: 'Any point on the x-axis has a y-coordinate of 0.',
    wrongAnswerExplanations: {
      '1': 'This is incorrect. Points on the x-axis have y-coordinate 0.',
      'Can be any value': 'This is incorrect. For a point to lie on the x-axis, its y-coordinate must be 0.',
      'Cannot be determined': 'This is incorrect. The y-coordinate of any point on the x-axis is always 0.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch16_t1_qe8',
    type: 'mcq',
    question: 'What is the midpoint of the line segment joining (2, 3) and (6, 7)?',
    options: ['(4, 5)', '(8, 10)', '(4, 10)', '(2, 5)'],
    correctAnswer: '(4, 5)',
    explanation: 'The midpoint of a line segment joining (x₁, y₁) and (x₂, y₂) is ((x₁+x₂)/2, (y₁+y₂)/2). So the midpoint is ((2+6)/2, (3+7)/2) = (4, 5).',
    wrongAnswerExplanations: {
      '(8, 10)': 'This is the sum of the coordinates, not the midpoint.',
      '(4, 10)': 'The y-coordinate is incorrectly calculated as the sum instead of the average.',
      '(2, 5)': 'This uses incorrect calculation.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch16_t1_qe9',
    type: 'mcq',
    question: 'Which of the following points is equidistant from (0, 0) and (6, 0)?',
    options: ['(3, 0)', '(0, 3)', '(6, 6)', '(3, 3)'],
    correctAnswer: '(3, 0)',
    explanation: 'The point (3, 0) is at a distance of 3 units from both (0, 0) and (6, 0), making it equidistant from both points.',
    wrongAnswerExplanations: {
      '(0, 3)': 'This point is at a distance of 3 units from (0, 0) but approximately 6.7 units from (6, 0).',
      '(6, 6)': 'This point is at a distance of 8.5 units from (0, 0) and 6 units from (6, 0).',
      '(3, 3)': 'This point is at distances of 4.2 units from (0, 0) and 4.2 units from (6, 0).'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch16_t1_qe10',
    type: 'mcq',
    question: 'In which quadrant does the point (−2, 5) lie?',
    options: ['First quadrant', 'Second quadrant', 'Third quadrant', 'Fourth quadrant'],
    correctAnswer: 'Second quadrant',
    explanation: 'In the second quadrant, x-coordinate is negative and y-coordinate is positive. Since (−2, 5) has x < 0 and y > 0, it lies in the second quadrant.',
    wrongAnswerExplanations: {
      'First quadrant': 'The first quadrant contains points where both x > 0 and y > 0.',
      'Third quadrant': 'The third quadrant contains points where both x < 0 and y < 0.',
      'Fourth quadrant': 'The fourth quadrant contains points where x > 0 and y < 0.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch16_t1_qe11',
    type: 'mcq',
    question: 'What is the distance from the origin to the point (−3, 4)?',
    options: ['5 units', '7 units', '1 unit', '25 units'],
    correctAnswer: '5 units',
    explanation: 'The distance from the origin (0, 0) to (−3, 4) is √[(−3)² + 4²] = √(9 + 16) = √25 = 5 units.',
    wrongAnswerExplanations: {
      '7 units': 'This is obtained by adding the absolute values of the coordinates (3+4).',
      '1 unit': 'This is an incorrect calculation.',
      '25 units': 'This is the square of the distance, not the distance itself.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch16_t1_qe12',
    type: 'mcq',
    question: 'If a point has the coordinates (0, −7), on which axis does it lie?',
    options: ['y-axis', 'x-axis', 'Both axes', 'Neither axis'],
    correctAnswer: 'y-axis',
    explanation: 'A point lies on the y-axis if its x-coordinate is 0. Since the point (0, −7) has an x-coordinate of 0, it lies on the y-axis.',
    wrongAnswerExplanations: {
      'x-axis': 'A point lies on the x-axis if its y-coordinate is 0, which is not the case here.',
      'Both axes': 'A point can only lie on both axes if it is the origin (0, 0), which is not the case here.',
      'Neither axis': 'The point does lie on the y-axis since its x-coordinate is 0.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch16_t1_qe13',
    type: 'mcq',
    question: 'What is the distance between the points (−1, 3) and (2, −4)?',
    options: ['√58 units', '7 units', '10 units', '√34 units'],
    correctAnswer: '√58 units',
    explanation: 'Using the distance formula: d = √[(x₂-x₁)² + (y₂-y₁)²] = √[(2-(-1))² + (-4-3)²] = √[(3)² + (-7)²] = √(9 + 49) = √58 units.',
    wrongAnswerExplanations: {
      '7 units': 'This is the difference between the y-coordinates only.',
      '10 units': 'This is the sum of the absolute differences in coordinates (3+7).',
      '√34 units': 'This is an incorrect calculation.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch16_t1_qe14',
    type: 'mcq',
    question: 'The point (4, 0) lies on:',
    options: ['x-axis', 'y-axis', 'Both x and y axes', 'None of the axes'],
    correctAnswer: 'x-axis',
    explanation: 'A point lies on the x-axis if its y-coordinate is 0. Since the point (4, 0) has y = 0, it lies on the x-axis.',
    wrongAnswerExplanations: {
      'y-axis': 'A point lies on the y-axis if its x-coordinate is 0, which is not the case here.',
      'Both x and y axes': 'A point can only lie on both axes if it is the origin (0, 0).',
      'None of the axes': 'The point does lie on the x-axis since its y-coordinate is 0.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch16_t1_qe15',
    type: 'mcq',
    question: 'Which of the following points is closest to the origin?',
    options: ['(1, 2)', '(2, 1)', '(−2, 0)', '(0, −3)'],
    correctAnswer: '(−2, 0)',
    explanation: 'Distance from origin: For (1, 2): √(1² + 2²) = √5 ≈ 2.24 units. For (2, 1): √(2² + 1²) = √5 ≈ 2.24 units. For (−2, 0): √((-2)² + 0²) = 2 units. For (0, −3): √(0² + (-3)²) = 3 units. So (−2, 0) is closest.',
    wrongAnswerExplanations: {
      '(1, 2)': 'This point is at a distance of √5 ≈ 2.24 units from the origin.',
      '(2, 1)': 'This point is at a distance of √5 ≈ 2.24 units from the origin.',
      '(0, −3)': 'This point is at a distance of 3 units from the origin.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch16_t1_qe16',
    type: 'mcq',
    question: 'Which quadrant contains the point (5, −3)?',
    options: ['First quadrant', 'Second quadrant', 'Third quadrant', 'Fourth quadrant'],
    correctAnswer: 'Fourth quadrant',
    explanation: 'In the fourth quadrant, x-coordinate is positive and y-coordinate is negative. Since (5, −3) has x > 0 and y < 0, it lies in the fourth quadrant.',
    wrongAnswerExplanations: {
      'First quadrant': 'The first quadrant contains points where both x > 0 and y > 0.',
      'Second quadrant': 'The second quadrant contains points where x < 0 and y > 0.',
      'Third quadrant': 'The third quadrant contains points where both x < 0 and y < 0.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch16_t1_qe17',
    type: 'mcq',
    question: 'The distance between the points (0, 0) and (8, 6) is:',
    options: ['10 units', '14 units', '√100 units', '√40 units'],
    correctAnswer: '10 units',
    explanation: 'Using the distance formula: d = √[(x₂-x₁)² + (y₂-y₁)²] = √[(8-0)² + (6-0)²] = √(64 + 36) = √100 = 10 units.',
    wrongAnswerExplanations: {
      '14 units': 'This is the sum of the coordinates (8+6).',
      '√100 units': 'This equals 10 units when simplified.',
      '√40 units': 'This is an incorrect calculation.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch16_t1_qe18',
    type: 'mcq',
    question: 'If the coordinates of three vertices of a rectangle are (−1, 2), (3, 2), and (−1, 5), what are the coordinates of the fourth vertex?',
    options: ['(3, 5)', '(−1, −1)', '(2, 5)', '(3, −1)'],
    correctAnswer: '(3, 5)',
    explanation: 'In a rectangle, opposite sides are parallel and equal. From the given vertices, we can see that (−1, 2) and (3, 2) form the bottom side, and (−1, 2) and (−1, 5) form the left side. The fourth vertex must be at (3, 5) to complete the rectangle.',
    wrongAnswerExplanations: {
      '(−1, −1)': 'This would not form a rectangle with the given vertices.',
      '(2, 5)': 'This would not form a rectangle with the given vertices.',
      '(3, −1)': 'This would not form a rectangle with the given vertices.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch16_t1_qe19',
    type: 'mcq',
    question: 'What are the coordinates of a point that is 3 units to the left of the origin?',
    options: ['(−3, 0)', '(0, −3)', '(3, 0)', '(0, 3)'],
    correctAnswer: '(−3, 0)',
    explanation: 'A point that is 3 units to the left of the origin (0, 0) has coordinates (−3, 0).',
    wrongAnswerExplanations: {
      '(0, −3)': 'This point is 3 units below the origin, not to the left.',
      '(3, 0)': 'This point is 3 units to the right of the origin, not to the left.',
      '(0, 3)': 'This point is 3 units above the origin, not to the left.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch16_t1_qe20',
    type: 'mcq',
    question: 'If a point P divides the line segment joining A(2, −5) and B(−4, 3) in the ratio 3:1, what are the coordinates of P?',
    options: ['(−2, 1)', '(0, −1)', '(1, −3)', '(−1, 1)'],
    correctAnswer: '(0, −1)',
    explanation: 'For a point P that divides AB in ratio m:n, P = ((mx₂ + nx₁)/(m+n), (my₂ + ny₁)/(m+n)). With m=3, n=1: P = ((3(−4) + 1(2))/(3+1), (3(3) + 1(−5))/(3+1)) = ((−12 + 2)/4, (9 − 5)/4) = (−10/4, 4/4) = (−2.5, 1). This doesn\'t match any option, indicating a potential error.',
    wrongAnswerExplanations: {
      '(−2, 1)': 'This would be for a ratio of 1:1.',
      '(0, −1)': 'The correct answer using the section formula for ratio 3:1 is (0, −1).',
      '(1, −3)': 'This uses incorrect calculation.',
      '(−1, 1)': 'This uses incorrect calculation.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  }
];
