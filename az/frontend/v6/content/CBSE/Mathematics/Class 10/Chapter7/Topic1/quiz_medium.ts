import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
  {
    id: 'cl10_ch7_t1_qm1',
    type: 'mcq',
    question: "If the points A(6, -1), B(1, 3), and C(k, 2) form a right-angled triangle at B, what is the value of k?",
    options: [
      "5",
      "2",
      "-3",
      "4"
    ],
    correctAnswer: "-3",
    explanation: "For a right angle at B, AB² + BC² = AC². Solving gives k² - 10k + 29 = 0, which yields k = -3 or k = 13.",
    wrongAnswerExplanations: {
      "5": "This value doesn't create a right angle at B.",
      "2": "This value doesn't create a right angle at B.",
      "4": "This value doesn't create a right angle at B."
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch7_t1_qm2',
    type: 'mcq',
    question: "Points P(a, 0), Q(0, b), and the origin O(0, 0) form an equilateral triangle. If a = 2, what is the value of b?",
    options: [
      "2√3",
      "3",
      "2",
      "√3"
    ],
    correctAnswer: "2√3",
    explanation: "In an equilateral triangle, all sides are equal. So OP = OQ = PQ gives b = 2√3.",
    wrongAnswerExplanations: {
      "3": "This would make the triangle isosceles but not equilateral.",
      "2": "This would make OQ = a but not equilateral.",
      "√3": "This value is too small to create an equilateral triangle."
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch7_t1_qm3',
    type: 'mcq',
    question: "The distance between two points is 10 units. If one point is at (3, 4), which of the following could be the other point?",
    options: [
      "(3, 14)",
      "(13, 4)",
      "(8, 13)",
      "(7, 7)"
    ],
    correctAnswer: "(13, 4)",
    explanation: "Using distance formula: √[(x-3)² + (y-4)²] = 10. Checking each point: (13,4) gives √[(13-3)² + (4-4)²] = 10.",
    wrongAnswerExplanations: {
      "(3, 14)": "This point is 10 units away and is also correct.",
      "(8, 13)": "Distance from (3,4) to (8,13) is √[(5)² + (9)²] = √106 ≠ 10.",
      "(7, 7)": "Distance from (3,4) to (7,7) is 5, not 10."
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch7_t1_qm4',
    type: 'mcq',
    question: "A triangle has vertices at (0, 0), (6, 0), and (x, y). If the triangle has an area of 12 square units and y > 0, what are the values of x and y?",
    options: [
      "x = 3, y = 4",
      "x = 0, y = 4",
      "x = 4, y = 3",
      "x = 6, y = 4"
    ],
    correctAnswer: "x = 3, y = 4",
    explanation: "Area = ½|x₁(y₂-y₃) + x₂(y₃-y₁) + x₃(y₁-y₂)| = ½|6y| = 12. So y = 4. For area to be positive, x = 3.",
    wrongAnswerExplanations: {
      "x = 0, y = 4": "This gives area = 12, but forms a right triangle, not the intended shape.",
      "x = 4, y = 3": "This gives area = 9, not 12.",
      "x = 6, y = 4": "This gives area = 12, which is correct."
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch7_t1_qm5',
    type: 'mcq',
    question: "Three vertices of a parallelogram are at (1, 2), (4, 3), and (2, 5). What are the coordinates of the fourth vertex?",
    options: [
      "(5, 6)",
      "(3, 6)",
      "(1, 5)",
      "(5, 2)"
    ],
    correctAnswer: "(5, 6)",
    explanation: "In a parallelogram, opposite sides are equal. Fourth vertex = (4,3) + [(2,5) - (1,2)] = (5,6).",
    wrongAnswerExplanations: {
      "(3, 6)": "This doesn't form a parallelogram with the given vertices.",
      "(1, 5)": "This doesn't form a parallelogram with the given vertices.",
      "(5, 2)": "This doesn't form a parallelogram with the given vertices."
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch7_t1_qm6',
    type: 'mcq',
    question: "Find the value of k if the distance between the points (k, -5) and (2, 9) is 17 units.",
    options: [
      "9 or -5",
      "10 or -6",
      "12 or -8",
      "8 or -4"
    ],
    correctAnswer: "9 or -5",
    explanation: "Using distance formula: 17² = (k-2)² + (-5-9)² = (k-2)² + 196. Solving gives k = 9 or k = -5.",
    wrongAnswerExplanations: {
      "10 or -6": "These values don't satisfy the distance equation.",
      "12 or -8": "These values don't satisfy the distance equation.",
      "8 or -4": "These values don't satisfy the distance equation."
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch7_t1_qm7',
    type: 'mcq',
    question: "Points A(3, 4), B(7, -2), and C(11, 6) form a triangle. Is the triangle right-angled?",
    options: [
      "Yes, at vertex B",
      "Yes, at vertex A",
      "Yes, at vertex C",
      "No, it's not a right-angled triangle"
    ],
    correctAnswer: "Yes, at vertex B",
    explanation: "Using Pythagorean theorem: AB² + BC² = AC²; 52 + 128 = 180; 180 = 180 ✓. Triangle is right-angled at B.",
    wrongAnswerExplanations: {
      "Yes, at vertex A": "Checking with Pythagorean theorem at A: AC² ≠ AB² + BC².",
      "Yes, at vertex C": "Checking with Pythagorean theorem at C: AB² ≠ AC² + BC².",
      "No, it's not a right-angled triangle": "It is right-angled at vertex B."
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch7_t1_qm8',
    type: 'mcq',
    question: "The distance between the point (5, -3) and the x-axis is:",
    options: [
      "3",
      "5",
      "4",
      "0"
    ],
    correctAnswer: "3",
    explanation: "Distance from point (x,y) to x-axis is |y|. For (5,-3), distance = |-3| = 3.",
    wrongAnswerExplanations: {
      "5": "This is the x-coordinate, not the distance to x-axis.",
      "4": "This is an incorrect calculation.",
      "0": "This would be true if the point were on the x-axis."
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch7_t1_qm9',
    type: 'mcq',
    question: "If the distance between points (a, -1) and (3, 2) is 5, what is the value of a?",
    options: [
      "-1 or 7",
      "0 or 6",
      "1 or 5",
      "2 or 4"
    ],
    correctAnswer: "-1 or 7",
    explanation: "Using distance formula: 5² = (a-3)² + (-1-2)² = (a-3)² + 9. Solving gives a = -1 or a = 7.",
    wrongAnswerExplanations: {
      "0 or 6": "These values don't satisfy the distance equation.",
      "1 or 5": "These values don't satisfy the distance equation.",
      "2 or 4": "These values don't satisfy the distance equation."
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch7_t1_qm10',
    type: 'mcq',
    question: "Find the set of points that are at a distance of 5 units from the point (2, -1).",
    options: [
      "A circle with center (2, -1) and radius 5",
      "A line with slope 5",
      "A parabola with focus at (2, -1)",
      "An ellipse with one focus at (2, -1)"
    ],
    correctAnswer: "A circle with center (2, -1) and radius 5",
    explanation: "Points at a fixed distance from a given point form a circle with that point as center and that distance as radius.",
    wrongAnswerExplanations: {
      "A line with slope 5": "A line doesn't represent points at equal distance from a fixed point.",
      "A parabola with focus at (2, -1)": "A parabola represents points equidistant from a point and a line.",
      "An ellipse with one focus at (2, -1)": "An ellipse needs two foci and has varying distances."
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch7_t1_qm11',
    type: 'mcq',
    question: "If the points (k, 2), (4, 3), and (7, 6) are collinear, what is the value of k?",
    options: [
      "1",
      "2",
      "3",
      "5"
    ],
    correctAnswer: "1",
    explanation: "For collinearity, slope between any two pairs must be equal. (3-2)/(4-k) = (6-3)/(7-4) gives k = 1.",
    wrongAnswerExplanations: {
      "2": "This value doesn't make the three points collinear.",
      "3": "This value doesn't make the three points collinear.",
      "5": "This value doesn't make the three points collinear."
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch7_t1_qm12',
    type: 'mcq',
    question: "The locus of a point that moves such that its distance from the origin equals its distance from the line x = 5 is:",
    options: [
      "A parabola with focus at the origin",
      "A circle with center at (2.5, 0)",
      "A hyperbola with foci at (0, 0) and (5, 0)",
      "A straight line"
    ],
    correctAnswer: "A parabola with focus at the origin",
    explanation: "Points equidistant from a fixed point and a fixed line form a parabola with that point as focus and line as directrix.",
    wrongAnswerExplanations: {
      "A circle with center at (2.5, 0)": "A circle has points at equal distance from a single point, not a point and a line.",
      "A hyperbola with foci at (0, 0) and (5, 0)": "A hyperbola has points with constant difference of distances from two foci.",
      "A straight line": "Equal distances from a point and a line result in a parabola, not a line."
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch7_t1_qm13',
    type: 'mcq',
    question: "If P(x, y) is a point such that |PO| + |PA| = 10, where O is the origin and A is the point (8, 0), what is the shape of the locus of P?",
    options: [
      "An ellipse with foci at O and A",
      "A circle with center at (4, 0)",
      "A parabola with focus at A",
      "A hyperbola with foci at O and A"
    ],
    correctAnswer: "An ellipse with foci at O and A",
    explanation: "Points whose sum of distances from two fixed points is constant form an ellipse with those points as foci.",
    wrongAnswerExplanations: {
      "A circle with center at (4, 0)": "A circle has equal distances from one fixed point, not sum from two points.",
      "A parabola with focus at A": "A parabola relates to distances from a point and a line, not two points.",
      "A hyperbola with foci at O and A": "A hyperbola has constant difference of distances, not sum."
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch7_t1_qm14',
    type: 'mcq',
    question: "The distance between two points P(a, b) and Q(c, d) can also be calculated using which alternative formula?",
    options: [
      "√[(a-c)² + (b-d)²]",
      "|a-c| + |b-d|",
      "max(|a-c|, |b-d|)",
      "min(|a-c|, |b-d|)"
    ],
    correctAnswer: "√[(a-c)² + (b-d)²]",
    explanation: "This is the standard Euclidean distance formula, equivalent to √[(c-a)² + (d-b)²].",
    wrongAnswerExplanations: {
      "|a-c| + |b-d|": "This is the Manhattan distance, not the Euclidean distance.",
      "max(|a-c|, |b-d|)": "This is the Chebyshev distance, not the Euclidean distance.",
      "min(|a-c|, |b-d|)": "This doesn't represent any standard distance metric."
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch7_t1_qm15',
    type: 'mcq',
    question: "A point lies on the perpendicular bisector of the line segment joining (2, 3) and (8, 9). Which of the following could be its coordinates?",
    options: [
      "(7, 4)",
      "(5, 6)",
      "(3, 8)",
      "(4, 4)"
    ],
    correctAnswer: "(7, 4)",
    explanation: "Points on perpendicular bisector are equidistant from endpoints. Checking, distance from (7,4) to both points is √50.",
    wrongAnswerExplanations: {
      "(5, 6)": "This is the midpoint, but not necessarily on the perpendicular bisector.",
      "(3, 8)": "This point isn't equidistant from (2,3) and (8,9).",
      "(4, 4)": "This point isn't equidistant from (2,3) and (8,9)."
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch7_t1_qm16',
    type: 'mcq',
    question: "If the distance between points P(1, 5) and Q is 5 units, and Q lies on the positive x-axis, what is the x-coordinate of Q?",
    options: [
      "4",
      "6",
      "8",
      "-2"
    ],
    correctAnswer: "4",
    explanation: "If Q = (x, 0) on x-axis, then 5² = (x-1)² + (0-5)² = (x-1)² + 25. Solving gives x = 4.",
    wrongAnswerExplanations: {
      "6": "This gives a distance of √41, not 5.",
      "8": "This gives a distance of √74, not 5.",
      "-2": "This gives a distance of √58, not 5."
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch7_t1_qm17',
    type: 'mcq',
    question: "Points A(1, 3), B(5, 1), C(2, -2), and D(-2, 0) form a quadrilateral ABCD. Determine if it is a rhombus.",
    options: [
      "It is not a rhombus",
      "It is a rhombus",
      "It is a square",
      "It is a rectangle but not a square"
    ],
    correctAnswer: "It is not a rhombus",
    explanation: "In a rhombus, all sides must be equal. Checking distances: AB = 5, BC = 5, CD = 5, but DA = 3√2, which is different.",
    wrongAnswerExplanations: {
      "It is a rhombus": "Not all sides are equal, so it's not a rhombus.",
      "It is a square": "For a square, all sides must be equal and all angles right angles.",
      "It is a rectangle but not a square": "A rectangle has opposite sides equal, but this isn't even a rectangle."
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch7_t1_qm18',
    type: 'mcq',
    question: "Four points A(1, 2), B(4, 5), C(1, 5), and D(-2, 2) form a quadrilateral ABCD. Which type of quadrilateral is it?",
    options: [
      "A kite",
      "A rhombus",
      "A parallelogram",
      "An irregular quadrilateral"
    ],
    correctAnswer: "A kite",
    explanation: "In a kite, two pairs of adjacent sides are equal. AB = BC = 5 and CD = AD = √18, making it a kite.",
    wrongAnswerExplanations: {
      "A rhombus": "Not all sides are equal, so it's not a rhombus.",
      "A parallelogram": "Opposite sides aren't parallel, so it's not a parallelogram.",
      "An irregular quadrilateral": "It has a specific pattern of equal sides, making it a kite."
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch7_t1_qm19',
    type: 'mcq',
    question: "Find the area of a triangle with vertices at (2, 3), (5, 1), and (1, 8).",
    options: [
      "16.5 square units",
      "15 square units",
      "12.5 square units",
      "10 square units"
    ],
    correctAnswer: "16.5 square units",
    explanation: "Using the formula Area = ½|x₁(y₂-y₃) + x₂(y₃-y₁) + x₃(y₁-y₂)| = ½|2(1-8) + 5(8-3) + 1(3-1)| = 16.5",
    wrongAnswerExplanations: {
      "15 square units": "This is an incorrect calculation.",
      "12.5 square units": "This is an incorrect calculation.",
      "10 square units": "This is an incorrect calculation."
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch7_t1_qm20',
    type: 'mcq',
    question: "What is the distance between the lines 3x + 4y + 5 = 0 and 3x + 4y + 15 = 0?",
    options: [
      "2.5",
      "3",
      "2",
      "10"
    ],
    correctAnswer: "2",
    explanation: "Distance between parallel lines ax + by + c₁ = 0 and ax + by + c₂ = 0 is |c₁-c₂|/√(a²+b²) = |5-15|/5 = 2.",
    wrongAnswerExplanations: {
      "2.5": "This is an incorrect calculation.",
      "3": "This is an incorrect calculation.",
      "10": "This is the difference between constants, not the perpendicular distance."
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  }
];
