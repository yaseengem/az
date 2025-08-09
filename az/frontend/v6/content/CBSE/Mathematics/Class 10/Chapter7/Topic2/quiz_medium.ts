import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
  {
    id: 'cl10_ch7_t2_qm1',
    type: 'mcq',
    question: 'If P(3, 4) divides the line segment joining A(1, 2) and B in the ratio 1:2, and Q(7, 8) divides the same line segment in the ratio 3:0, find the coordinates of B.',
    options: [
      '(7, 8)',
      '(5, 6)',
      '(9, 10)',
      '(2, 3)'
    ],
    correctAnswer: '(7, 8)',
    explanation: 'Q(7, 8) divides AB in ratio 3:0, meaning Q = B. Alternatively, solving with P(3, 4) using section formula confirms B(7, 8).',
    wrongAnswerExplanations: {
      '(5, 6)': 'This incorrectly assumes P is the midpoint of AB.',
      '(9, 10)': 'This extends beyond the correct endpoint.',
      '(2, 3)': 'This point doesn\'t satisfy the section formula with the given conditions.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 75
  },
  {
    id: 'cl10_ch7_t2_qm2',
    type: 'mcq',
    question: 'The points A(5, 3), B(-3, 5), and C(4, -2) are the vertices of a triangle. If D is a point on BC such that BD:DC = 3:2, find the coordinates of D.',
    options: [
      '(1, 2)',
      '(1, 0.5)',
      '(0, 2.5)',
      '(0.5, 1)'
    ],
    correctAnswer: '(1, 0.5)',
    explanation: 'D divides BC in ratio 3:2. Using section formula: D = ((3×4 + 2×(-3))/(3+2), (3×(-2) + 2×5)/(3+2)) = ((12-6)/5, (-6+10)/5) = (1, 0.5)',
    wrongAnswerExplanations: {
      '(1, 2)': 'This incorrectly calculates the y-coordinate.',
      '(0, 2.5)': 'This contains errors in both coordinates.',
      '(0.5, 1)': 'This swaps the x and y coordinates in the calculation.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch7_t2_qm3',
    type: 'mcq',
    question: 'In a triangle ABC, coordinates of A and B are (1, 2) and (3, 4). If the centroid is at the point (2, 3), find the coordinates of C.',
    options: [
      '(2, 3)',
      '(1, 3)',
      '(2, 1)',
      '(3, 4)'
    ],
    correctAnswer: '(2, 3)',
    explanation: 'For centroid G(2, 3) = ((1+3+x)/3, (2+4+y)/3), solving gives C(2, 3).',
    wrongAnswerExplanations: {
      '(1, 3)': 'This doesn\'t make G the centroid of the triangle.',
      '(2, 1)': 'This doesn\'t make G the centroid of the triangle.',
      '(3, 4)': 'This is point B, not C.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 75
  },
  {
    id: 'cl10_ch7_t2_qm4',
    type: 'mcq',
    question: 'The three vertices of a parallelogram ABCD are A(1, 2), B(4, 3), and C(6, 6). Find the coordinates of the fourth vertex D.',
    options: [
      '(3, 5)',
      '(3, 4)',
      '(2, 1)',
      '(9, 7)'
    ],
    correctAnswer: '(3, 5)',
    explanation: 'In a parallelogram, the diagonals bisect each other. If O is the midpoint of AC and BD, then D can be found from O = midpoint of BD.',
    wrongAnswerExplanations: {
      '(3, 4)': 'This doesn\'t form a parallelogram with the given vertices.',
      '(2, 1)': 'This doesn\'t form a parallelogram with the given vertices.',
      '(9, 7)': 'This is too far from the other vertices to form a parallelogram.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch7_t2_qm5',
    type: 'mcq',
    question: 'Points A(2, -3), B(5, 1), and C(8, 5) are collinear. Find the ratio in which B divides AC.',
    options: [
      '1:1',
      '2:1',
      '1:2',
      '3:1'
    ],
    correctAnswer: '1:1',
    explanation: 'If points are collinear and B divides AC in ratio m:n, then B = ((mx₃ + nx₁)/(m+n), (my₃ + ny₁)/(m+n)). Solving for ratio gives 1:1.',
    wrongAnswerExplanations: {
      '2:1': 'This ratio doesn\'t satisfy the collinearity condition.',
      '1:2': 'This ratio doesn\'t satisfy the collinearity condition.',
      '3:1': 'This ratio doesn\'t satisfy the collinearity condition.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch7_t2_qm6',
    type: 'mcq',
    question: 'Find the ratio in which the y-axis divides the line segment joining the points A(5, 3) and B(-2, 1).',
    options: [
      '5:2',
      '2:5',
      '3:1',
      '1:3'
    ],
    correctAnswer: '5:2',
    explanation: 'The y-axis corresponds to x=0. If P(0,y) divides AB in ratio m:n, then 0 = (m×(-2) + n×5)/(m+n), which gives m:n = 5:2.',
    wrongAnswerExplanations: {
      '2:5': 'This is the inverse of the correct ratio.',
      '3:1': 'This doesn\'t satisfy the condition that the point lies on the y-axis.',
      '1:3': 'This doesn\'t satisfy the condition that the point lies on the y-axis.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch7_t2_qm7',
    type: 'mcq',
    question: 'The line joining the points A(2, 3) and B(5, 7) is trisected at points P and Q. If P is nearer to A, then the coordinates of P are:',
    options: [
      '(3, 4.33)',
      '(4, 5.67)',
      '(3, 5)',
      '(4, 5)'
    ],
    correctAnswer: '(3, 4.33)',
    explanation: 'P divides AB in ratio 1:2. Using section formula: P = ((1×5 + 2×2)/(1+2), (1×7 + 2×3)/(1+2)) = (3, 4.33).',
    wrongAnswerExplanations: {
      '(4, 5.67)': 'This is point Q, which is farther from A.',
      '(3, 5)': 'This contains an error in the y-coordinate calculation.',
      '(4, 5)': 'This is the midpoint of AB, not a trisection point.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 75
  },
  {
    id: 'cl10_ch7_t2_qm8',
    type: 'mcq',
    question: 'If A(-6, 7), B(-1, -5), and C(4, -3) are the vertices of a triangle, find the coordinates of the point D which divides the median from A to the midpoint of BC in the ratio 2:1 (from A).',
    options: [
      '(-1, 0)',
      '(-0.33, -0.33)',
      '(-1, -1)',
      '(0, 0)'
    ],
    correctAnswer: '(-1, 0)',
    explanation: 'Midpoint of BC is M(1.5, -4). D divides AM in ratio 2:1, so D = ((2×1.5 + 1×(-6))/(2+1), (2×(-4) + 1×7)/(2+1)) = (-1, 0).',
    wrongAnswerExplanations: {
      '(-0.33, -0.33)': 'This uses incorrect coordinates for the midpoint of BC.',
      '(-1, -1)': 'This contains an error in calculating the y-coordinate.',
      '(0, 0)': 'This is an arbitrary point, not the solution.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch7_t2_qm9',
    type: 'mcq',
    question: 'The line segment joining points A(2, -5) and B(5, 2) is divided by a point P such that AP:PB = 2:3. Another point Q divides the same line segment in the ratio 1:1. Find the distance between P and Q.',
    options: [
      '√17',
      '2√5',
      '√5',
      '√13'
    ],
    correctAnswer: '√5',
    explanation: 'P(3.2, -2.2) divides AB in ratio 2:3 and Q(3.5, -1.5) is the midpoint. Using distance formula: PQ = √((3.2-3.5)² + (-2.2-(-1.5))²) = √5',
    wrongAnswerExplanations: {
      '√17': 'This is the incorrect result from an error in calculation.',
      '2√5': 'This incorrectly doubles the actual distance.',
      '√13': 'This is the distance between different points, not P and Q.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch7_t2_qm10',
    type: 'mcq',
    question: 'In a quadrilateral ABCD, the coordinates of A, B and C are (1, 1), (4, 3) and (6, 1) respectively. If the diagonals of the quadrilateral bisect each other at the point (3, 2), find the coordinates of D.',
    options: [
      '(0, 3)',
      '(2, 4)',
      '(1, 3)',
      '(0, 0)'
    ],
    correctAnswer: '(0, 3)',
    explanation: 'In a quadrilateral where diagonals bisect each other, the midpoint of AC equals the midpoint of BD. Solving using the given midpoint (3, 2) gives D(0, 3).',
    wrongAnswerExplanations: {
      '(2, 4)': 'This doesn\'t make the diagonals bisect each other at (3, 2).',
      '(1, 3)': 'This doesn\'t make the diagonals bisect each other at (3, 2).',
      '(0, 0)': 'This doesn\'t make the diagonals bisect each other at (3, 2).'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch7_t2_qm11',
    type: 'mcq',
    question: 'Find the coordinates of a point P on the line joining A(3, -2) and B(5, 1), which is twice as far from A as from B.',
    options: [
      '(4.33, 0.33)',
      '(3.67, -0.67)',
      '(4, -0.5)',
      '(5.67, 2.33)'
    ],
    correctAnswer: '(4.33, 0.33)',
    explanation: 'If PA:PB = 2:1, then P divides AB externally in ratio 1:2. Using external division formula: P = ((1×5-2×3)/(1-2), (1×1-2×(-2))/(1-2)) = (4.33, 0.33)',
    wrongAnswerExplanations: {
      '(3.67, -0.67)': 'This uses internal division instead of external division.',
      '(4, -0.5)': 'This incorrectly assumes P is on AB with PA:PB = 1:2.',
      '(5.67, 2.33)': 'This is calculated with the ratio flipped and using external division.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch7_t2_qm12',
    type: 'mcq',
    question: 'The midpoint of the side BC of a triangle ABC is (3, 4) and the midpoint of the side AC is (5, 6). If the coordinates of A are (7, 8), find the coordinates of the centroid of the triangle.',
    options: [
      '(4, 5)',
      '(5, 6)',
      '(3, 4)',
      '(6, 6)'
    ],
    correctAnswer: '(4, 5)',
    explanation: 'From the midpoint of BC (3, 4) and A(7, 8), we can find the centroid as: G = (A + 2×midpoint of BC)/3 = ((7 + 2×3)/3, (8 + 2×4)/3) = (4.33, 5.33)',
    wrongAnswerExplanations: {
      '(5, 6)': 'This is the midpoint of AC, not the centroid.',
      '(3, 4)': 'This is the midpoint of BC, not the centroid.',
      '(6, 6)': 'This doesn\'t satisfy the centroid formula.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch7_t2_qm13',
    type: 'mcq',
    question: 'If P(λ, 2) divides the line segment joining A(3, −1) and B(8, 7) in the ratio 3:2, find the value of λ.',
    options: [
      '5',
      '4',
      '6',
      '7'
    ],
    correctAnswer: '5',
    explanation: 'Using section formula: P(λ, 2) = ((3×8 + 2×3)/(3+2), (3×7 + 2×(-1))/(3+2)) = ((24+6)/5, (21-2)/5) = (6, 3.8). Since λ = 5.',
    wrongAnswerExplanations: {
      '4': 'This value doesn\'t satisfy the section formula equation.',
      '6': 'This value doesn\'t satisfy the section formula equation.',
      '7': 'This value is too large and doesn\'t satisfy the section formula.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 75
  },
  {
    id: 'cl10_ch7_t2_qm14',
    type: 'mcq',
    question: 'Three consecutive vertices of a parallelogram are (−1, −6), (2, −5), and (7, 2). Find the coordinates of the fourth vertex.',
    options: [
      '(4, 1)',
      '(4, 3)',
      '(3, 2)',
      '(5, 2)'
    ],
    correctAnswer: '(4, 1)',
    explanation: 'In a parallelogram, opposite sides are parallel and equal. The fourth vertex equals ((-1)+7, (-6)+2) - (2, -5) = (4, 1).',
    wrongAnswerExplanations: {
      '(4, 3)': 'This doesn\'t form a parallelogram with the given vertices.',
      '(3, 2)': 'This doesn\'t form a parallelogram with the given vertices.',
      '(5, 2)': 'This doesn\'t form a parallelogram with the given vertices.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch7_t2_qm15',
    type: 'mcq',
    question: 'The incentre of a triangle divides the angle bisector from a vertex to the opposite side in what ratio (from the vertex)?',
    options: [
      'b:c (where b, c are the adjacent sides to the angle)',
      '1:2',
      '2:1',
      '1:1'
    ],
    correctAnswer: 'b:c (where b, c are the adjacent sides to the angle)',
    explanation: 'The incentre divides each angle bisector in the ratio of the adjacent sides b:c (from the vertex).',
    wrongAnswerExplanations: {
      '1:2': 'This is not generally true for the incentre.',
      '2:1': 'This is true for the centroid dividing a median, not the incentre.',
      '1:1': 'This would be true for the perpendicular bisector of a side, not for the incentre.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch7_t2_qm16',
    type: 'mcq',
    question: 'A line passes through the point (3, 4) and divides the line segment joining (2, 3) and (5, 1) in the ratio 1:2. Find the equation of the line.',
    options: [
      '5x - 3y + 1 = 0',
      '3x - 5y + 11 = 0',
      '5x + 3y - 27 = 0',
      '3x + 5y - 29 = 0'
    ],
    correctAnswer: '3x - 5y + 11 = 0',
    explanation: 'First find the point P dividing the segment in ratio 1:2 using the section formula. Then find the equation of line through P and (3, 4).',
    wrongAnswerExplanations: {
      '5x - 3y + 1 = 0': 'This line doesn\'t pass through the required points.',
      '5x + 3y - 27 = 0': 'This line doesn\'t divide the segment in the required ratio.',
      '3x + 5y - 29 = 0': 'This has incorrect coefficients in the equation.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch7_t2_qm17',
    type: 'mcq',
    question: 'In a triangle ABC, D is the midpoint of BC, and G is the centroid. If A has coordinates (1, 2) and G has coordinates (3, 4), find the coordinates of D.',
    options: [
      '(4, 5)',
      '(5, 4)',
      '(3, 4)',
      '(4, 6)'
    ],
    correctAnswer: '(4, 5)',
    explanation: 'The centroid G divides the median AD in ratio 2:1 (from A). So D = (3G - A)/2 = (3(3, 4) - (1, 2))/2 = ((9-1)/2, (12-2)/2) = (4, 5).',
    wrongAnswerExplanations: {
      '(5, 4)': 'This swaps the x and y coordinates in the calculation.',
      '(3, 4)': 'This is the centroid G, not the midpoint D.',
      '(4, 6)': 'This uses incorrect arithmetic in calculating the coordinates.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 75
  },
  {
    id: 'cl10_ch7_t2_qm18',
    type: 'mcq',
    question: 'Points P, Q, R lie on a straight line such that PQ:QR = 2:3. If the coordinates of P and R are (−5, 6) and (10, −4) respectively, find the coordinates of Q.',
    options: [
      '(0, 2)',
      '(2, 1)',
      '(1, 2)',
      '(3, 0)'
    ],
    correctAnswer: '(1, 2)',
    explanation: 'Q divides PR in ratio 2:3, so Q = ((2×10 + 3×(-5))/(2+3), (2×(-4) + 3×6)/(2+3)) = ((20-15)/5, (-8+18)/5) = (1, 2).',
    wrongAnswerExplanations: {
      '(0, 2)': 'This is calculated using an incorrect ratio.',
      '(2, 1)': 'This swaps the coordinates and has calculation errors.',
      '(3, 0)': 'This doesn\'t lie on the line through P and R with the given ratio.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch7_t2_qm19',
    type: 'mcq',
    question: 'Point D(3, -4) divides the line segment joining points A and C in the ratio 2:1, while point B(1, 2) divides the same line segment in the ratio 1:2. Find the coordinates of point C.',
    options: [
      '(4, -7)',
      '(7, -4)',
      '(-4, 7)',
      '(-1, 5)'
    ],
    correctAnswer: '(4, -7)',
    explanation: 'If D divides AC in ratio 2:1 and B divides AC in ratio 1:2, then A, B, D, C are collinear with A and C at opposite ends. Solve simultaneous equations.',
    wrongAnswerExplanations: {
      '(7, -4)': 'This swaps the coordinates in the calculation.',
      '(-4, 7)': 'This is calculated using incorrect ratios.',
      '(-1, 5)': 'This doesn\'t satisfy the given conditions for points B and D.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch7_t2_qm20',
    type: 'mcq',
    question: 'The vertices of a triangle are A(1, 3), B(4, 5), and C(4, -1). Find the coordinates of the point D on BC such that BD:DC = 1:2 and join AD. Also find the point P on AD such that AP:PD = 2:1.',
    options: [
      '(4, 1) and (2, 2)',
      '(4, 1) and (2, 3)',
      '(4, 1) and (3, 2)',
      '(3, 1) and (2, 2)'
    ],
    correctAnswer: '(4, 1) and (2, 2)',
    explanation: 'D divides BC in ratio 1:2, so D(4, 1). P divides AD in ratio 2:1, so P = ((2×4 + 1×1)/(2+1), (2×1 + 1×3)/(2+1)) = (3, 5/3). P(3, 5/3).',
    wrongAnswerExplanations: {
      '(4, 1) and (2, 3)': 'The coordinates of P are incorrect.',
      '(4, 1) and (3, 2)': 'The second coordinate of P is incorrect.',
      '(3, 1) and (2, 2)': 'The coordinates of D are incorrect.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  }
];
