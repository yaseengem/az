import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
  {
    id: 'cl10_ch7_t3_qm1',
    type: 'mcq',
    question: 'Find the value of k for which the area of the triangle with vertices (k, 0), (4, 0), and (0, 2) is 6 square units.',
    options: [
      'k = −2',
      'k = 2',
      'k = −6',
      'k = 6'
    ],
    correctAnswer: 'k = −2',
    explanation: 'Using area formula: ½|k(0−2) + 4(2−0) + 0(0−0)| = 6. This gives |−2k + 8| = 12. For k = −2, |−2(−2) + 8| = 12, so k = −2.',
    wrongAnswerExplanations: {
      'k = 2': 'For k = 2, the area is 4, not 6.',
      'k = −6': 'For k = −6, the area is 20, not 6.',
      'k = 6': 'For k = 6, the area is 4, not 6.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch7_t3_qm2',
    type: 'mcq',
    question: 'If the vertices of a triangle are (−2, −3), (3, 4), and (5, −1), which of these is closest to its area?',
    options: [
      '27.5 square units',
      '13.75 square units',
      '55 square units',
      '20 square units'
    ],
    correctAnswer: '27.5 square units',
    explanation: 'Using the formula: ½|−2(4−(−1)) + 3(−1−(−3)) + 5(−3−4)| = ½|−2(5) + 3(2) + 5(−7)| = ½|−10 + 6 − 35| = 27.5',
    wrongAnswerExplanations: {
      '13.75 square units': 'This is half of the correct answer.',
      '55 square units': 'This is the result before dividing by 2.',
      '20 square units': 'This is an incorrect calculation.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch7_t3_qm3',
    type: 'mcq',
    question: 'The area of a triangle with vertices (p, q), (q, p), and (p + q, p + q) is:',
    options: [
      '0 square units',
      '½(p² - q²) square units',
      'pq square units',
      '(p-q)² square units'
    ],
    correctAnswer: '0 square units',
    explanation: 'Using the formula: ½|p(p−(p+q)) + q((p+q)−q) + (p+q)(q−p)| = ½|p(−q) + q(p) + (p+q)(q−p)| = 0',
    wrongAnswerExplanations: {
      '½(p² - q²) square units': 'This is an incorrect calculation.',
      'pq square units': 'This is an incorrect calculation.',
      '(p-q)² square units': 'This is an incorrect calculation.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch7_t3_qm4',
    type: 'mcq',
    question: 'For what value of y will the area of the triangle with vertices (1, 4), (−3, 2), and (2, y) be 15 square units?',
    options: [
      'y = −4 or y = 8',
      'y = −2 or y = 6',
      'y = 0 or y = 10',
      'y = −6 or y = 10'
    ],
    correctAnswer: 'y = −4 or y = 8',
    explanation: 'Using the area formula and substituting the vertices, we get |−5y + 10| = 30, so y = −4 or y = 8.',
    wrongAnswerExplanations: {
      'y = −2 or y = 6': 'These values yield an area of 10, not 15.',
      'y = 0 or y = 10': 'These values yield areas of 5 and 20 respectively.',
      'y = −6 or y = 10': 'These values yield areas of 20 and 10 respectively.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch7_t3_qm5',
    type: 'mcq',
    question: 'A point P(x, y) moves such that the area of triangle formed by P with the points (3, 2) and (−1, 0) is constant and equal to 5 square units. The locus of P is:',
    options: [
      'A pair of parallel lines',
      'A circle',
      'An ellipse',
      'A hyperbola'
    ],
    correctAnswer: 'A pair of parallel lines',
    explanation: 'For constant area 5: |x(2−0) + 3(0−y) + (−1)(y−2)| = 10, which simplifies to |2x−3y+2| = 10, representing parallel lines.',
    wrongAnswerExplanations: {
      'A circle': 'The equation doesn\'t represent a circle.',
      'An ellipse': 'The equation doesn\'t represent an ellipse.',
      'A hyperbola': 'The equation doesn\'t represent a hyperbola.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch7_t3_qm6',
    type: 'mcq',
    question: 'Find the point on the x-axis which is equidistant from (2, −5) and (−2, 3).',
    options: [
      '(0, 0)',
      '(5, 0)',
      '(−1, 0)',
      '(1, 0)'
    ],
    correctAnswer: '(−1, 0)',
    explanation: 'If point is (x,0), then distance to (2,-5) equals distance to (-2,3): √((x-2)²+25) = √((x+2)²+9). Solving gives x = -1.',
    wrongAnswerExplanations: {
      '(0, 0)': 'The distances from (0,0) to the two points are not equal.',
      '(5, 0)': 'The distances from (5,0) to the two points are not equal.',
      '(1, 0)': 'The distances from (1,0) to the two points are not equal.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch7_t3_qm7',
    type: 'mcq',
    question: 'The coordinates of the vertices of ΔABC are A(3, 5), B(−2, 3) and C(1, −6). What is the length of the median from vertex A to side BC?',
    options: [
      '7.5 units',
      '5 units',
      '8.5 units',
      '6 units'
    ],
    correctAnswer: '7.5 units',
    explanation: 'Mid-point of BC is ((-2+1)/2, (3+(-6))/2) = (-0.5, -1.5). Distance from A to mid-point is √((3+0.5)²+(5+1.5)²) = 7.5',
    wrongAnswerExplanations: {
      '5 units': 'This is an incorrect calculation.',
      '8.5 units': 'This is an incorrect calculation.',
      '6 units': 'This is an incorrect calculation.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch7_t3_qm8',
    type: 'mcq',
    question: 'If the area of the triangle with vertices (k, 0), (0, 2k), and (0, 0) is 5 square units, what is the value of k?',
    options: [
      'k = ±√5',
      'k = ±5',
      'k = 5/2',
      'k = 5'
    ],
    correctAnswer: 'k = ±√5',
    explanation: 'Using area formula: ½|k(2k−0) + 0(0−0) + 0(0−2k)| = 5. This gives |k²| = 5, so k = ±√5.',
    wrongAnswerExplanations: {
      'k = ±5': 'This would give an area of 25, not 5.',
      'k = 5/2': 'This would give an area of 6.25, not 5.',
      'k = 5': 'This would give an area of 25, not 5.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch7_t3_qm9',
    type: 'mcq',
    question: 'What is the area of the quadrilateral with vertices (−3, −2), (−5, −4), (−4, 3), and (−2, 2)?',
    options: [
      '12 square units',
      '24 square units',
      '6 square units',
      '18 square units'
    ],
    correctAnswer: '12 square units',
    explanation: 'Divide into two triangles: ΔABD and ΔBCD. Calculate areas using the formula and sum them: 5 + 7 = 12 square units.',
    wrongAnswerExplanations: {
      '24 square units': 'This is an incorrect calculation.',
      '6 square units': 'This is half of the correct answer.',
      '18 square units': 'This is an incorrect calculation.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch7_t3_qm10',
    type: 'mcq',
    question: 'Find the area of the triangle formed by the lines y = 2x + 1, y = 3x + 1, and x = 4.',
    options: [
      '2 square units',
      '4 square units',
      '1 square unit',
      '3 square units'
    ],
    correctAnswer: '2 square units',
    explanation: 'Find the three intersection points: (0,1), (0,1), and (4,9) and (4,13). Then calculate the area using coordinates: 2 sq units.',
    wrongAnswerExplanations: {
      '4 square units': 'This is double the correct answer.',
      '1 square unit': 'This is half of the correct answer.',
      '3 square units': 'This is an incorrect calculation.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch7_t3_qm11',
    type: 'mcq',
    question: 'The area of the triangle formed by the lines 2x + y = 4, x - y + 1 = 0, and x = 0 is:',
    options: [
      '7/4 square units',
      '7/2 square units',
      '3/2 square units',
      '3 square units'
    ],
    correctAnswer: '7/4 square units',
    explanation: 'Find intersection points: (0,4), (0,-1), and (3/2,1). Calculate area using coordinates: 7/4 square units.',
    wrongAnswerExplanations: {
      '7/2 square units': 'This is double the correct answer.',
      '3/2 square units': 'This is an incorrect calculation.',
      '3 square units': 'This is an incorrect calculation.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch7_t3_qm12',
    type: 'mcq',
    question: 'If P(x, y) is a point such that the area of the triangle formed by P with A(3, 4) and B(−1, 2) is 10 square units, then:',
    options: [
      '|−2x + 4y − 16| = 20',
      '|2x − 4y + 16| = 20',
      '|−2x + 4y + 16| = 20',
      '|2x − 4y − 16| = 20'
    ],
    correctAnswer: '|−2x + 4y − 16| = 20',
    explanation: 'Using the area formula and substituting: |x(4-2) + 3(2-y) + (-1)(y-4)| = 20. Simplifying: |-2x + 4y - 16| = 20.',
    wrongAnswerExplanations: {
      '|2x − 4y + 16| = 20': 'The signs are incorrect.',
      '|−2x + 4y + 16| = 20': 'The constant term is incorrect.',
      '|2x − 4y − 16| = 20': 'Both the signs and constant term are incorrect.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch7_t3_qm13',
    type: 'mcq',
    question: 'For what value of k do the points (k, 3), (6, −2), and (−3, 4) form a right-angled triangle?',
    options: [
      'k = −6 or k = 4',
      'k = −4 or k = 6',
      'k = 0 or k = 12',
      'k = 2 or k = 8'
    ],
    correctAnswer: 'k = −6 or k = 4',
    explanation: 'Using distance formula, check when one angle is 90° using the Pythagorean theorem. This gives k = -6 or k = 4.',
    wrongAnswerExplanations: {
      'k = −4 or k = 6': 'These values don\'t create a right-angled triangle.',
      'k = 0 or k = 12': 'These values don\'t create a right-angled triangle.',
      'k = 2 or k = 8': 'These values don\'t create a right-angled triangle.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 150
  },
  {
    id: 'cl10_ch7_t3_qm14',
    type: 'mcq',
    question: 'If the vertices of a triangle are at (0, 0), (5, 0), and (3, h), for what value of h is the triangle equilateral?',
    options: [
      'h = 5√3/2',
      'h = 3√3',
      'h = 5√3',
      'h = 2√3'
    ],
    correctAnswer: 'h = 5√3/2',
    explanation: 'For an equilateral triangle, all sides must be equal. Distance between (0,0) and (5,0) is 5. For equidistance, h = 5√3/2.',
    wrongAnswerExplanations: {
      'h = 3√3': 'This value would not create an equilateral triangle.',
      'h = 5√3': 'This is double the correct value.',
      'h = 2√3': 'This value would not create an equilateral triangle.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch7_t3_qm15',
    type: 'mcq',
    question: 'The area of the triangle formed by the line 3x - 4y + 12 = 0 with the coordinate axes is:',
    options: [
      '6 square units',
      '3 square units',
      '12 square units',
      '9 square units'
    ],
    correctAnswer: '6 square units',
    explanation: 'Line intersects x-axis at (4,0) and y-axis at (0,-3). Area of triangle with vertices (0,0), (4,0), (0,-3) is 6 square units.',
    wrongAnswerExplanations: {
      '3 square units': 'This is half of the correct answer.',
      '12 square units': 'This is double the correct answer.',
      '9 square units': 'This is an incorrect calculation.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch7_t3_qm16',
    type: 'mcq',
    question: 'In a triangle with vertices (−2, 0), (0, 3), and (2, p), what is the value of p for which the centroid of the triangle lies on the x-axis?',
    options: [
      'p = −3',
      'p = 3',
      'p = 0',
      'p = −6'
    ],
    correctAnswer: 'p = −3',
    explanation: 'Centroid coordinates are ((−2+0+2)/3, (0+3+p)/3) = (0, (3+p)/3). For y-coordinate = 0, p = -3.',
    wrongAnswerExplanations: {
      'p = 3': 'This would place the centroid at (0, 2), not on the x-axis.',
      'p = 0': 'This would place the centroid at (0, 1), not on the x-axis.',
      'p = −6': 'This would place the centroid at (0, -1), not on the x-axis.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch7_t3_qm17',
    type: 'mcq',
    question: 'What is the area of the triangle formed by the points (−3, 5), (4, 5), and (a, b) if a + b = 7 and a - b = 1?',
    options: [
      '21 square units',
      '10.5 square units',
      '42 square units',
      '24 square units'
    ],
    correctAnswer: '21 square units',
    explanation: 'Solving the equations: a = 4, b = 3. Using the area formula: ½|−3(5−3) + 4(3−5) + 4(5−5)| = ½|−3(2) + 4(−2)| = 21.',
    wrongAnswerExplanations: {
      '10.5 square units': 'This is half of the correct answer.',
      '42 square units': 'This is double the correct answer.',
      '24 square units': 'This is an incorrect calculation.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch7_t3_qm18',
    type: 'mcq',
    question: 'If the area of triangle with vertices (0, 0), (2, 0), and (0, p) is equal to the area of triangle with vertices (0, 0), (0, 2), and (q, 0), what is the value of pq?',
    options: [
      'pq = 4',
      'pq = 2',
      'pq = 8',
      'pq = 1'
    ],
    correctAnswer: 'pq = 4',
    explanation: 'Area of first triangle = ½ × 2 × p = p. Area of second triangle = ½ × 2 × q = q. If p = q, then pq = p² = 4.',
    wrongAnswerExplanations: {
      'pq = 2': 'This is an incorrect calculation.',
      'pq = 8': 'This is double the correct answer.',
      'pq = 1': 'This is an incorrect calculation.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch7_t3_qm19',
    type: 'mcq',
    question: 'The incentre of the triangle with vertices (−4, 6), (0, 6), and (−2, 2) is:',
    options: [
      '(−2, 5)',
      '(−2, 4)',
      '(−2, 4.5)',
      '(−2, 3)'
    ],
    correctAnswer: '(−2, 4.5)',
    explanation: 'The incentre divides the triangle in the ratio of the sides. With equal sides from (0,6) and (-4,6), incentre is at (-2,4.5).',
    wrongAnswerExplanations: {
      '(−2, 5)': 'This is not the correct incentre coordinate.',
      '(−2, 4)': 'This is not the correct incentre coordinate.',
      '(−2, 3)': 'This is not the correct incentre coordinate.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 150
  },
  {
    id: 'cl10_ch7_t3_qm20',
    type: 'mcq',
    question: 'What is the maximum possible area of a triangle with two vertices fixed at (0, 0) and (6, 0), and the third vertex restricted to the line x + y = 8?',
    options: [
      '18 square units',
      '12 square units',
      '24 square units',
      '9 square units'
    ],
    correctAnswer: '18 square units',
    explanation: 'The area is maximized when the third point is at (0,8), creating height of 8 and base of 6: ½ × 6 × 6 = 18.',
    wrongAnswerExplanations: {
      '12 square units': 'This is not the maximum area possible.',
      '24 square units': 'This is greater than the maximum possible area.',
      '9 square units': 'This is half of the maximum possible area.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  }
];
