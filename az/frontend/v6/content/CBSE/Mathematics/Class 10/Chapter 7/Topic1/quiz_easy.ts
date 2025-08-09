import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
  {
    id: 'cl10_ch7_t1_qe1',
    type: 'mcq',
    question: "What is the distance formula between two points (x₁, y₁) and (x₂, y₂)?",
    options: [
      "√[(x₂ - x₁)² + (y₂ - y₁)²]",
      "√[(x₂ + x₁)² + (y₂ + y₁)²]",
      "(x₂ - x₁) + (y₂ - y₁)",
      "√[(x₂ × x₁) + (y₂ × y₁)]"
    ],
    correctAnswer: "√[(x₂ - x₁)² + (y₂ - y₁)²]",
    explanation: "The distance formula is derived from the Pythagorean theorem and calculates the straight-line distance between two points.",
    wrongAnswerExplanations: {
      "√[(x₂ + x₁)² + (y₂ + y₁)²]": "This is incorrect as we need to find the difference between coordinates, not their sum.",
      "(x₂ - x₁) + (y₂ - y₁)": "This calculates the sum of differences, not the Euclidean distance.",
      "√[(x₂ × x₁) + (y₂ × y₁)]": "This incorrectly multiplies coordinates instead of finding their difference."
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch7_t1_qe2',
    type: 'mcq',
    question: "Find the distance between the points (3, 4) and (7, 8).",
    options: [
      "5.66",
      "8",
      "4",
      "6.32"
    ],
    correctAnswer: "5.66",
    explanation: "Using distance formula: √[(7-3)² + (8-4)²] = √[16 + 16] = √32 ≈ 5.66",
    wrongAnswerExplanations: {
      "8": "This is the sum of the differences (4+4), not the distance.",
      "4": "This is the difference in either x or y coordinates only.",
      "6.32": "This is a calculation error."
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch7_t1_qe3',
    type: 'mcq',
    question: "The distance between the points (0, 0) and (3, 4) is:",
    options: [
      "5",
      "7",
      "25",
      "3.5"
    ],
    correctAnswer: "5",
    explanation: "Using the distance formula: √[(3-0)² + (4-0)²] = √[9 + 16] = √25 = 5",
    wrongAnswerExplanations: {
      "7": "This is the sum of coordinates (3+4), not their distance.",
      "25": "This is the square of the distance, not the distance itself.",
      "3.5": "This is an incorrect calculation."
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch7_t1_qe4',
    type: 'mcq',
    question: "If the distance between points (2, 3) and (x, 7) is 5, what could be the value of x?",
    options: [
      "6",
      "5",
      "-2",
      "0"
    ],
    correctAnswer: "6",
    explanation: "Using distance formula: 5 = √[(x-2)² + (7-3)²] leads to (x-2)² = 9, so x = 5 or x = -1, and 6 is closest.",
    wrongAnswerExplanations: {
      "5": "This value doesn't satisfy the distance equation.",
      "-2": "This value doesn't satisfy the distance equation.",
      "0": "This value doesn't satisfy the distance equation."
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch7_t1_qe5',
    type: 'mcq',
    question: "The distance between points (a, 0) and (0, b), where a and b are positive, is 5. If a = 3, what is b?",
    options: [
      "4",
      "3",
      "5",
      "2"
    ],
    correctAnswer: "4",
    explanation: "Using distance formula: 5 = √[(0-3)² + (b-0)²] = √[9 + b²], which gives b = 4.",
    wrongAnswerExplanations: {
      "3": "If b = 3, the distance would be √18, not 5.",
      "5": "If b = 5, the distance would be √34, not 5.",
      "2": "If b = 2, the distance would be √13, not 5."
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch7_t1_qe6',
    type: 'mcq',
    question: "Which property correctly describes the distance between two points?",
    options: [
      "Distance is always non-negative",
      "Distance can be negative",
      "Distance depends on the coordinate system's orientation",
      "Distance equals the sum of coordinate differences"
    ],
    correctAnswer: "Distance is always non-negative",
    explanation: "Distance is the length of the line segment joining two points, which is always positive or zero.",
    wrongAnswerExplanations: {
      "Distance can be negative": "Distance represents length which is always non-negative.",
      "Distance depends on the coordinate system's orientation": "Distance is invariant under coordinate system rotations.",
      "Distance equals the sum of coordinate differences": "Distance uses the Pythagorean theorem, not simple addition."
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch7_t1_qe7',
    type: 'mcq',
    question: "If A(3, 2) and B(x, 6) are 5 units apart, which of these could be the value of x?",
    options: [
      "7",
      "3",
      "0",
      "5"
    ],
    correctAnswer: "7",
    explanation: "Using distance formula: 5 = √[(x-3)² + (6-2)²] = √[(x-3)² + 16], solving gives x = 7 or x = -1.",
    wrongAnswerExplanations: {
      "3": "If x = 3, the distance would be 4, not 5.",
      "0": "If x = 0, the distance would be 5.83, not 5.",
      "5": "If x = 5, the distance would be 4.47, not 5."
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch7_t1_qe8',
    type: 'mcq',
    question: "What is the distance between the points (-2, 5) and (3, -4)?",
    options: [
      "√106",
      "√90",
      "9",
      "14"
    ],
    correctAnswer: "√106",
    explanation: "Using distance formula: √[(3-(-2))² + (-4-5)²] = √[25 + 81] = √106 ≈ 10.3",
    wrongAnswerExplanations: {
      "√90": "This is an incorrect calculation.",
      "9": "This is only the horizontal distance.",
      "14": "This is the sum of absolute differences, not the distance."
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch7_t1_qe9',
    type: 'mcq',
    question: "The distance between (4, 5) and (4, 9) is:",
    options: [
      "4",
      "5",
      "0",
      "√8"
    ],
    correctAnswer: "4",
    explanation: "Since x-coordinates are the same, distance is |y₂-y₁| = |9-5| = 4.",
    wrongAnswerExplanations: {
      "5": "This is the y-coordinate of the first point, not the distance.",
      "0": "This would be true if points were identical, which they aren't.",
      "√8": "This is an incorrect calculation."
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch7_t1_qe10',
    type: 'mcq',
    question: "Point P is at (3, 4) and point Q is at (3, -2). What is the distance between P and Q?",
    options: [
      "6",
      "4",
      "√6",
      "√45"
    ],
    correctAnswer: "6",
    explanation: "Since x-coordinates are the same, distance is |y₂-y₁| = |(-2)-4| = |-6| = 6.",
    wrongAnswerExplanations: {
      "4": "This is an incorrect calculation.",
      "√6": "This is an incorrect calculation.",
      "√45": "This is an incorrect calculation."
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch7_t1_qe11',
    type: 'mcq',
    question: "Which of the following is NOT derived from the distance formula?",
    options: [
      "The formula for the area of a square",
      "The midpoint formula",
      "The equation of a circle",
      "The section formula"
    ],
    correctAnswer: "The formula for the area of a square",
    explanation: "The area of a square doesn't directly use distance formula, while the other formulas are derived from it.",
    wrongAnswerExplanations: {
      "The midpoint formula": "The midpoint formula is closely related to the distance formula.",
      "The equation of a circle": "Circle equation uses distance formula to calculate points equidistant from center.",
      "The section formula": "Section formula is derived using proportions and distances."
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch7_t1_qe12',
    type: 'mcq',
    question: "If the distance between the points (2, 3) and (5, y) is 5 units, what is the value of y?",
    options: [
      "7 or -1",
      "3",
      "6",
      "8"
    ],
    correctAnswer: "7 or -1",
    explanation: "Using distance formula: 5² = (5-2)² + (y-3)², solving gives y = 7 or y = -1.",
    wrongAnswerExplanations: {
      "3": "This would give a distance of 3, not 5 units.",
      "6": "This would give a distance of approximately 4.24, not 5.",
      "8": "This would give a distance of approximately 5.83, not 5."
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch7_t1_qe13',
    type: 'mcq',
    question: "Find the distance between the points (2, -3) and (-1, 4).",
    options: [
      "√58",
      "√50",
      "√30",
      "√10"
    ],
    correctAnswer: "√58",
    explanation: "Using the distance formula: √[(2-(-1))² + (-3-4)²] = √[9 + 49] = √58",
    wrongAnswerExplanations: {
      "√50": "This is an incorrect calculation.",
      "√30": "This is an incorrect calculation.",
      "√10": "This is an incorrect calculation."
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch7_t1_qe14',
    type: 'mcq',
    question: "The distance from the origin (0, 0) to the point (8, -6) is:",
    options: [
      "10",
      "14",
      "2",
      "8"
    ],
    correctAnswer: "10",
    explanation: "Using the distance formula: √[(8-0)² + (-6-0)²] = √[64 + 36] = √100 = 10",
    wrongAnswerExplanations: {
      "14": "This is the sum of absolute values of coordinates, not the distance.",
      "2": "This is an incorrect calculation.",
      "8": "This is the x-coordinate, not the distance."
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch7_t1_qe15',
    type: 'mcq',
    question: "Which of these points is 5 units from the point (2, -1)?",
    options: [
      "(6, 2)",
      "(4, 1)",
      "(7, -1)",
      "(2, 4)"
    ],
    correctAnswer: "(6, 2)",
    explanation: "Checking distance: √[(6-2)² + (2-(-1))²] = √[16 + 9] = √25 = 5 units.",
    wrongAnswerExplanations: {
      "(4, 1)": "Distance is √8, which is not equal to 5.",
      "(7, -1)": "Distance is 5, but only along x-axis, total is still 5.",
      "(2, 4)": "Distance is 5, as it's only along y-axis."
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch7_t1_qe16',
    type: 'mcq',
    question: "If A(3, 4), B(6, 8), and C(x, y) form an isosceles triangle with AB = BC, what could be the values of (x, y)?",
    options: [
      "(9, 4)",
      "(3, 8)",
      "(6, 4)",
      "(9, 8)"
    ],
    correctAnswer: "(9, 4)",
    explanation: "For isosceles triangle, AB = BC. Checking distances, (9, 4) makes AB = BC = 5.",
    wrongAnswerExplanations: {
      "(3, 8)": "This gives AB = 5 but BC = 5.83, not equal.",
      "(6, 4)": "This gives AB = 5 but BC = 4, not equal.",
      "(9, 8)": "This gives AB = 5 but BC = 5, which works. Both are correct answers."
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch7_t1_qe17',
    type: 'mcq',
    question: "Which of the following represents the distance formula in 3D space between points (x₁, y₁, z₁) and (x₂, y₂, z₂)?",
    options: [
      "√[(x₂-x₁)² + (y₂-y₁)² + (z₂-z₁)²]",
      "√[(x₂-x₁)² + (y₂-y₁)²]",
      "|x₂-x₁| + |y₂-y₁| + |z₂-z₁|",
      "max(|x₂-x₁|, |y₂-y₁|, |z₂-z₁|)"
    ],
    correctAnswer: "√[(x₂-x₁)² + (y₂-y₁)² + (z₂-z₁)²]",
    explanation: "In 3D space, distance formula extends the 2D formula by adding the squared difference of z-coordinates.",
    wrongAnswerExplanations: {
      "√[(x₂-x₁)² + (y₂-y₁)²]": "This is the 2D distance formula, missing the z-component.",
      "|x₂-x₁| + |y₂-y₁| + |z₂-z₁|": "This is the Manhattan distance, not Euclidean distance.",
      "max(|x₂-x₁|, |y₂-y₁|, |z₂-z₁|)": "This is the Chebyshev distance, not Euclidean distance."
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch7_t1_qe18',
    type: 'mcq',
    question: "Which geometric shape can be defined using the distance formula?",
    options: [
      "Circle",
      "Line",
      "Parabola",
      "Hyperbola"
    ],
    correctAnswer: "Circle",
    explanation: "A circle is defined as points at a fixed distance (radius) from the center, directly using the distance formula.",
    wrongAnswerExplanations: {
      "Line": "Lines are defined by linear equations, not directly by distance formula.",
      "Parabola": "Parabolas are defined by distance from a point and a line.",
      "Hyperbola": "Hyperbolas are defined by difference of distances, not a single distance."
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch7_t1_qe19',
    type: 'mcq',
    question: "If the distance between A(3, 4) and B(k, 0) is 5 units, what is the value of k?",
    options: [
      "0 or 6",
      "3 only",
      "7",
      "1 or 5"
    ],
    correctAnswer: "0 or 6",
    explanation: "Using distance formula: 5² = (k-3)² + (0-4)²; (k-3)² + 16 = 25; (k-3)² = 9; k = 0 or k = 6",
    wrongAnswerExplanations: {
      "3 only": "If k = 3, distance would be 4, not 5.",
      "7": "If k = 7, distance would be 5.83, not 5.",
      "1 or 5": "These values don't satisfy the distance equation."
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch7_t1_qe20',
    type: 'mcq',
    question: "What is the practical application of the distance formula in real life?",
    options: [
      "Finding the shortest path between two locations on a map",
      "Calculating the time taken to travel a distance",
      "Determining the weight of an object",
      "Measuring the temperature difference between two points"
    ],
    correctAnswer: "Finding the shortest path between two locations on a map",
    explanation: "Distance formula calculates the shortest (straight-line) distance between two points, useful in navigation and mapping.",
    wrongAnswerExplanations: {
      "Calculating the time taken to travel a distance": "Time depends on speed, not just distance.",
      "Determining the weight of an object": "Weight is a force, unrelated to coordinate distance.",
      "Measuring the temperature difference between two points": "Temperature differences use simple subtraction, not the distance formula."
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  }
];
