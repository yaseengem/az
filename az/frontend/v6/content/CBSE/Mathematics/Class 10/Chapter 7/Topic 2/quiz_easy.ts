import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
  {
    id: 'cl10_ch7_t2_qe1',
    type: 'mcq',
    question: 'The section formula for finding the coordinates of a point P that divides the line segment joining points A(x₁, y₁) and B(x₂, y₂) in the ratio m:n internally is:',
    options: [
      '((mx₂ + nx₁)/(m + n), (my₂ + ny₁)/(m + n))',
      '((mx₁ + nx₂)/(m + n), (my₁ + ny₂)/(m + n))',
      '((x₁ + x₂)/2, (y₁ + y₂)/2)',
      '(x₁ - x₂, y₁ - y₂)'
    ],
    correctAnswer: '((mx₂ + nx₁)/(m + n), (my₂ + ny₁)/(m + n))',
    explanation: 'Section formula for internal division in ratio m:n is P((mx₂ + nx₁)/(m + n), (my₂ + ny₁)/(m + n)).',
    wrongAnswerExplanations: {
      '((mx₁ + nx₂)/(m + n), (my₁ + ny₂)/(m + n))': 'This swaps x₁ with x₂ and y₁ with y₂ in the formula.',
      '((x₁ + x₂)/2, (y₁ + y₂)/2)': 'This is the midpoint formula, a special case when m = n = 1.',
      '(x₁ - x₂, y₁ - y₂)': 'This calculates the displacement vector, not the section point.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch7_t2_qe2',
    type: 'mcq',
    question: 'Find the coordinates of the point that divides the line segment joining A(4, -3) and B(-2, 7) in the ratio 3:2 internally.',
    options: [
      '(0, 3)',
      '(1, 1)',
      '(2, 1)',
      '(-3, 2)'
    ],
    correctAnswer: '(1, 1)',
    explanation: 'Using section formula with m=3, n=2: ((3×(-2) + 2×4)/(3+2), (3×7 + 2×(-3))/(3+2)) = ((-6+8)/5, (21-6)/5) = (1, 3)',
    wrongAnswerExplanations: {
      '(0, 3)': 'This is calculated with incorrect application of the section formula.',
      '(2, 1)': 'This switches the ratio to 2:3 instead of 3:2.',
      '(-3, 2)': 'This is calculated by mixing up the x and y coordinates.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch7_t2_qe3',
    type: 'mcq',
    question: 'The midpoint of the line segment joining points P(3, 5) and Q(7, 9) is:',
    options: [
      '(5, 7)',
      '(4, 7)',
      '(5, 14)',
      '(10, 14)'
    ],
    correctAnswer: '(5, 7)',
    explanation: 'Midpoint coordinates are ((3+7)/2, (5+9)/2) = (5, 7). This is a special case of section formula with ratio 1:1.',
    wrongAnswerExplanations: {
      '(4, 7)': 'This incorrectly calculates the x-coordinate.',
      '(5, 14)': 'This adds rather than averages the y-coordinates.',
      '(10, 14)': 'This incorrectly adds both coordinates instead of finding their averages.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 45
  },
  {
    id: 'cl10_ch7_t2_qe4',
    type: 'mcq',
    question: 'The section formula for a point dividing a line segment externally in the ratio m:n is:',
    options: [
      '((mx₂ - nx₁)/(m - n), (my₂ - ny₁)/(m - n))',
      '((mx₁ - nx₂)/(m - n), (my₁ - ny₂)/(m - n))',
      '((mx₂ + nx₁)/(m + n), (my₂ + ny₁)/(m + n))',
      '((x₁ - x₂), (y₁ - y₂))'
    ],
    correctAnswer: '((mx₂ - nx₁)/(m - n), (my₂ - ny₁)/(m - n))',
    explanation: 'For external division in ratio m:n, the section formula is P((mx₂ - nx₁)/(m - n), (my₂ - ny₁)/(m - n)).',
    wrongAnswerExplanations: {
      '((mx₁ - nx₂)/(m - n), (my₁ - ny₂)/(m - n))': 'This swaps x₁ with x₂ and y₁ with y₂ in the formula.',
      '((mx₂ + nx₁)/(m + n), (my₂ + ny₁)/(m + n))': 'This is the formula for internal division, not external division.',
      '((x₁ - x₂), (y₁ - y₂))': 'This calculates the displacement vector, not the section point.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch7_t2_qe5',
    type: 'mcq',
    question: 'Find the point that divides the line segment joining A(6, 3) and B(2, 5) in the ratio 2:1 internally.',
    options: [
      '(3, 4)',
      '(4, 4)',
      '(4, 3.67)',
      '(5, 3.5)'
    ],
    correctAnswer: '(4, 4)',
    explanation: 'Using the section formula with m=2, n=1: ((2×2 + 1×6)/(2+1), (2×5 + 1×3)/(2+1)) = ((4+6)/3, (10+3)/3) = (4, 4)',
    wrongAnswerExplanations: {
      '(3, 4)': 'This uses the incorrect ratio 1:2 instead of 2:1.',
      '(4, 3.67)': 'This contains a calculation error in the y-coordinate.',
      '(5, 3.5)': 'This uses an incorrect application of the section formula.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch7_t2_qe6',
    type: 'mcq',
    question: 'If point P divides the line segment joining A(-2, 5) and B(3, -4) in the ratio 2:3 internally, the coordinates of P are:',
    options: [
      '(0, 1)',
      '(-2/5, 1/5)',
      '(1, 0)',
      '(-3, 2)'
    ],
    correctAnswer: '(0, 1)',
    explanation: 'Using section formula: ((2×3 + 3×(-2))/(2+3), (2×(-4) + 3×5)/(2+3)) = ((6-6)/5, (-8+15)/5) = (0, 1)',
    wrongAnswerExplanations: {
      '(-2/5, 1/5)': 'This incorrectly uses the external division formula.',
      '(1, 0)': 'This switches the x and y in the calculation.',
      '(-3, 2)': 'This uses incorrect arithmetic in applying the section formula.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch7_t2_qe7',
    type: 'mcq',
    question: 'The point P(1, 2) divides the line segment joining points A and B in the ratio 1:2. If A is (4, 3), find the coordinates of B.',
    options: [
      '(-1, 1.5)',
      '(-2, 1)',
      '(2.5, 1)',
      '(0, 0)'
    ],
    correctAnswer: '(-2, 1)',
    explanation: 'Using section formula: P(x,y) = ((mx₂ + nx₁)/(m+n), (my₂ + ny₁)/(m+n)). Solve for (x₂,y₂) with P(1,2), A(4,3), m=1, n=2.',
    wrongAnswerExplanations: {
      '(-1, 1.5)': 'This uses an incorrect rearrangement of the section formula.',
      '(2.5, 1)': 'This incorrectly solves for B, possibly swapping the ratio.',
      '(0, 0)': 'This is an arbitrary point not related to the solution.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 75
  },
  {
    id: 'cl10_ch7_t2_qe8',
    type: 'mcq',
    question: 'A point divides the line segment joining A(3, -5) and B(9, 7) in the ratio 1:1. The coordinates of this point are:',
    options: [
      '(6, 1)',
      '(6, 0)',
      '(3, 1)',
      '(9, 7)'
    ],
    correctAnswer: '(6, 1)',
    explanation: 'The point dividing in ratio 1:1 is the midpoint: ((3+9)/2, (-5+7)/2) = (6, 1).',
    wrongAnswerExplanations: {
      '(6, 0)': 'This incorrectly calculates the y-coordinate.',
      '(3, 1)': 'This is not the midpoint; the x-coordinate is incorrect.',
      '(9, 7)': 'This is point B, not the midpoint.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 45
  },
  {
    id: 'cl10_ch7_t2_qe9',
    type: 'mcq',
    question: 'If a point divides the line segment joining (2, -3) and (8, 5) in the ratio 3:2, its coordinates are:',
    options: [
      '(4.4, 0.2)',
      '(6, 2)',
      '(4, 0)',
      '(5, 1)'
    ],
    correctAnswer: '(4.4, 0.2)',
    explanation: 'Using section formula: ((3×8 + 2×2)/(3+2), (3×5 + 2×(-3))/(3+2)) = ((24+4)/5, (15-6)/5) = (4.4, 1.8)',
    wrongAnswerExplanations: {
      '(6, 2)': 'This is calculated with incorrect arithmetic.',
      '(4, 0)': 'This uses an incorrect application of the section formula.',
      '(5, 1)': 'This uses approximation instead of exact calculation.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch7_t2_qe10',
    type: 'mcq',
    question: 'Find the coordinates of the point that divides the line segment joining (5, -6) and (-7, 4) externally in the ratio 2:3.',
    options: [
      '(23, -21)',
      '(-23, 21)',
      '(1, -2)',
      '(-1, 2)'
    ],
    correctAnswer: '(23, -21)',
    explanation: 'Using external division formula: ((2×(-7) - 3×5)/(2-3), (2×4 - 3×(-6))/(2-3)) = ((-14-15)/(-1), (8+18)/(-1)) = (23, -21)',
    wrongAnswerExplanations: {
      '(-23, 21)': 'This incorrectly flips the sign in the calculation.',
      '(1, -2)': 'This uses the internal division formula instead of external.',
      '(-1, 2)': 'This uses incorrect formula and calculation.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch7_t2_qe11',
    type: 'mcq',
    question: 'The midpoint formula is a special case of the section formula when the division ratio is:',
    options: [
      '1:1',
      '1:2',
      '2:1',
      '0:1'
    ],
    correctAnswer: '1:1',
    explanation: 'The midpoint divides a line segment into two equal parts, so the ratio is 1:1.',
    wrongAnswerExplanations: {
      '1:2': 'This divides the line segment into parts with ratio 1:2, not equal parts.',
      '2:1': 'This divides the line segment into parts with ratio 2:1, not equal parts.',
      '0:1': 'This ratio doesn\'t represent a point on the line segment.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 45
  },
  {
    id: 'cl10_ch7_t2_qe12',
    type: 'mcq',
    question: 'If P divides AB in the ratio 2:3 internally, then what is AP:PB?',
    options: [
      '2:3',
      '3:2',
      '3:5',
      '2:5'
    ],
    correctAnswer: '2:3',
    explanation: 'When P divides AB in ratio 2:3 internally, the ratio AP:PB is also 2:3.',
    wrongAnswerExplanations: {
      '3:2': 'This is the inverse of the correct ratio.',
      '3:5': 'This represents AP:AB, not AP:PB.',
      '2:5': 'This represents AP:AB, not AP:PB.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 45
  },
  {
    id: 'cl10_ch7_t2_qe13',
    type: 'mcq',
    question: 'If P divides AB externally in the ratio 3:2, then what is AP:PB?',
    options: [
      '-3:2',
      '3:-2',
      '3:2',
      '2:3'
    ],
    correctAnswer: '-3:2',
    explanation: 'When P divides AB externally in ratio 3:2, the ratio AP:PB = -3:2 (negative sign indicates external division).',
    wrongAnswerExplanations: {
      '3:-2': 'The negative sign should be with the first term for external division.',
      '3:2': 'This represents internal division, not external division.',
      '2:3': 'This is the inverse ratio and represents internal division.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 45
  },
  {
    id: 'cl10_ch7_t2_qe14',
    type: 'mcq',
    question: 'Find the coordinates of the point which divides the line segment joining (-4, 0) and (0, 6) in the ratio 1:2.',
    options: [
      '(-8/3, 4)',
      '(-2, 2)',
      '(-1, 3)',
      '(-3, 2)'
    ],
    correctAnswer: '(-8/3, 4)',
    explanation: 'Using section formula: ((1×0 + 2×(-4))/(1+2), (1×6 + 2×0)/(1+2)) = ((-8)/3, 6/3) = (-8/3, 2)',
    wrongAnswerExplanations: {
      '(-2, 2)': 'This incorrectly calculates both coordinates.',
      '(-1, 3)': 'This uses the incorrect ratio 2:1 instead of 1:2.',
      '(-3, 2)': 'This contains a calculation error in the x-coordinate.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch7_t2_qe15',
    type: 'mcq',
    question: 'The trisection points of the line segment joining A(2, -3) and B(5, 6) are:',
    options: [
      '(3, 0) and (4, 3)',
      '(3, 0) and (4, -3)',
      '(3, -1) and (4, 3)',
      '(3, 3) and (4, 0)'
    ],
    correctAnswer: '(3, 0) and (4, 3)',
    explanation: 'Trisection points divide in ratios 1:2 and 2:1. Using section formula: P₁(3, 0) and P₂(4, 3).',
    wrongAnswerExplanations: {
      '(3, 0) and (4, -3)': 'The second point\'s y-coordinate is incorrect.',
      '(3, -1) and (4, 3)': 'The first point\'s y-coordinate is incorrect.',
      '(3, 3) and (4, 0)': 'Both points\' y-coordinates are switched.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch7_t2_qe16',
    type: 'mcq',
    question: 'If P is a point on the line segment joining A(3, 4) and B(-2, 1) such that AP = ⅔AB, then the coordinates of P are:',
    options: [
      '(0, 2)',
      '(-1, 2)',
      '(-0.5, 2.5)',
      '(1, 3)'
    ],
    correctAnswer: '(-0.5, 2.5)',
    explanation: 'AP = ⅔AB means P divides AB in ratio 2:1. Using section formula: ((2×(-2) + 1×3)/(2+1), (2×1 + 1×4)/(2+1)) = (-0.5, 2.5)',
    wrongAnswerExplanations: {
      '(0, 2)': 'This incorrectly calculates the coordinates.',
      '(-1, 2)': 'This uses an incorrect interpretation of the division ratio.',
      '(1, 3)': 'This point is closer to A than specified by the condition.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch7_t2_qe17',
    type: 'mcq',
    question: 'The center of mass of a triangle is located at the:',
    options: [
      'Centroid (where all medians intersect)',
      'Incenter (where all angle bisectors intersect)',
      'Circumcenter (where all perpendicular bisectors intersect)',
      'Orthocenter (where all altitudes intersect)'
    ],
    correctAnswer: 'Centroid (where all medians intersect)',
    explanation: 'The center of mass of a triangle is at its centroid, which divides each median in ratio 2:1 from the vertex.',
    wrongAnswerExplanations: {
      'Incenter (where all angle bisectors intersect)': 'This is where the inscribed circle touches the triangle.',
      'Circumcenter (where all perpendicular bisectors intersect)': 'This is the center of the circumscribed circle.',
      'Orthocenter (where all altitudes intersect)': 'This is where the three altitudes intersect.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 45
  },
  {
    id: 'cl10_ch7_t2_qe18',
    type: 'mcq',
    question: 'If the coordinates of the midpoint of a line segment are (3, -2) and one endpoint is (5, 1), what are the coordinates of the other endpoint?',
    options: [
      '(1, -5)',
      '(8, -1)',
      '(-1, 3)',
      '(2, -3)'
    ],
    correctAnswer: '(1, -5)',
    explanation: 'If M(3, -2) is the midpoint of AB and A(5, 1) is one endpoint, then B(x, y) satisfies (3, -2) = ((5+x)/2, (1+y)/2). Solving: B(1, -5).',
    wrongAnswerExplanations: {
      '(8, -1)': 'This adds the midpoint coordinates to endpoint A instead of solving the equation.',
      '(-1, 3)': 'This incorrectly uses subtraction instead of the midpoint formula.',
      '(2, -3)': 'This contains calculation errors in solving for the endpoint.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch7_t2_qe19',
    type: 'mcq',
    question: 'The point P(2, 3) divides the line segment joining A(k, 5) and B(4, 7) in the ratio 1:2. The value of k is:',
    options: [
      '0',
      '1',
      '-2',
      '2'
    ],
    correctAnswer: '0',
    explanation: 'Using section formula: P(2, 3) = ((1×4 + 2×k)/(1+2), (1×7 + 2×5)/(1+2)). Equating coordinates: 2 = (4+2k)/3, 3 = (7+10)/3. Solving: k = 0.',
    wrongAnswerExplanations: {
      '1': 'This is an incorrect value resulting from algebraic error.',
      '-2': 'This value doesn\'t satisfy the section formula equation.',
      '2': 'This incorrectly assumes P is the midpoint.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch7_t2_qe20',
    type: 'mcq',
    question: 'If the centroid of a triangle with vertices A(1, 1), B(2, 3) and C(x, 4) is at (2, 2), then the value of x is:',
    options: [
      '3',
      '2',
      '4',
      '1'
    ],
    correctAnswer: '3',
    explanation: 'The centroid G(2, 2) = ((1+2+x)/3, (1+3+4)/3). Solving: 2 = (3+x)/3, 2 = 8/3. From first equation: x = 3.',
    wrongAnswerExplanations: {
      '2': 'This doesn\'t satisfy the centroid formula.',
      '4': 'This value is too large and doesn\'t satisfy the centroid formula.',
      '1': 'This value is too small and doesn\'t satisfy the centroid formula.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  }
];
