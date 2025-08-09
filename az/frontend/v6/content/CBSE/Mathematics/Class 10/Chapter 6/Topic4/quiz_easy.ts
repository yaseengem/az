import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
  {
    id: 'cl10_ch6_t4_qe1',
    type: 'mcq',
    question: 'In a right-angled triangle, the square of the hypotenuse is equal to:',
    options: [
      'Sum of the squares of the other two sides',
      'Difference of the squares of the other two sides',
      'Product of the other two sides',
      'Twice the product of the other two sides'
    ],
    correctAnswer: 'Sum of the squares of the other two sides',
    explanation: 'According to the Pythagoras theorem, in a right-angled triangle, the square of the hypotenuse equals the sum of squares of the other two sides.',
    wrongAnswerExplanations: {
      'Difference of the squares of the other two sides': 'This is incorrect. Pythagoras theorem states that the sum (not difference) of squares of perpendicular sides equals the square of hypotenuse.',
      'Product of the other two sides': 'This is incorrect. The relationship involves squares and addition, not multiplication of the sides.',
      'Twice the product of the other two sides': 'This is incorrect. The Pythagoras theorem involves squares of sides, not their products.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch6_t4_qe2',
    type: 'mcq',
    question: 'If a triangle has sides of length 3 cm, 4 cm, and 5 cm, it is:',
    options: [
      'A right-angled triangle',
      'An acute-angled triangle',
      'An obtuse-angled triangle',
      'An equilateral triangle'
    ],
    correctAnswer: 'A right-angled triangle',
    explanation: '3² + 4² = 9 + 16 = 25 = 5². Since the Pythagorean relationship holds, this is a right-angled triangle.',
    wrongAnswerExplanations: {
      'An acute-angled triangle': 'Incorrect. The triangle satisfies the Pythagoras theorem, which means it has one right angle.',
      'An obtuse-angled triangle': 'Incorrect. The triangle satisfies a² + b² = c², so it is right-angled, not obtuse-angled.',
      'An equilateral triangle': 'Incorrect. In an equilateral triangle, all sides are equal, but this triangle has sides of different lengths.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 45
  },
  {
    id: 'cl10_ch6_t4_qe3',
    type: 'mcq',
    question: 'Which of these triplets represents the sides of a right-angled triangle?',
    options: [
      '6, 8, 10',
      '5, 7, 9',
      '4, 5, 6',
      '7, 8, 9'
    ],
    correctAnswer: '6, 8, 10',
    explanation: '6² + 8² = 36 + 64 = 100 = 10². This triplet satisfies the Pythagoras theorem, forming a right-angled triangle.',
    wrongAnswerExplanations: {
      '5, 7, 9': 'Incorrect. 5² + 7² = 25 + 49 = 74, which is not equal to 9² = 81.',
      '4, 5, 6': 'Incorrect. 4² + 5² = 16 + 25 = 41, which is not equal to 6² = 36.',
      '7, 8, 9': 'Incorrect. 7² + 8² = 49 + 64 = 113, which is not equal to 9² = 81.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 45
  },
  {
    id: 'cl10_ch6_t4_qe4',
    type: 'mcq',
    question: 'The converse of the Pythagoras theorem states that:',
    options: [
      'If the square of one side equals the sum of squares of other sides, then the triangle is right-angled',
      'If a triangle is right-angled, then the sum of its angles is 180°',
      'If a triangle has three sides, then it must have three angles',
      'If a triangle is right-angled, then one of its angles is 90°'
    ],
    correctAnswer: 'If the square of one side equals the sum of squares of other sides, then the triangle is right-angled',
    explanation: 'The converse states that if a² + b² = c² in a triangle, then the triangle must have a right angle opposite to side c.',
    wrongAnswerExplanations: {
      'If a triangle is right-angled, then the sum of its angles is 180°': 'Incorrect. This is true for all triangles, not specifically the converse of Pythagoras theorem.',
      'If a triangle has three sides, then it must have three angles': 'Incorrect. This is a basic property of triangles, not the converse of Pythagoras theorem.',
      'If a triangle is right-angled, then one of its angles is 90°': 'Incorrect. This is the definition of a right-angled triangle, not the converse of Pythagoras theorem.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch6_t4_qe5',
    type: 'mcq',
    question: 'In a right-angled triangle, if the hypotenuse is 13 cm and one of the sides is 5 cm, the length of the other side is:',
    options: [
      '12 cm',
      '11 cm',
      '10 cm',
      '9 cm'
    ],
    correctAnswer: '12 cm',
    explanation: 'Using Pythagoras theorem: 5² + x² = 13², so x² = 13² - 5² = 169 - 25 = 144, thus x = 12 cm.',
    wrongAnswerExplanations: {
      '11 cm': 'Incorrect. Using Pythagoras theorem: 5² + 11² = 25 + 121 = 146, which is not equal to 13² = 169.',
      '10 cm': 'Incorrect. Using Pythagoras theorem: 5² + 10² = 25 + 100 = 125, which is not equal to 13² = 169.',
      '9 cm': 'Incorrect. Using Pythagoras theorem: 5² + 9² = 25 + 81 = 106, which is not equal to 13² = 169.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 45
  },
  {
    id: 'cl10_ch6_t4_qe6',
    type: 'mcq',
    question: 'Who is credited with discovering the Pythagoras theorem?',
    options: [
      'Pythagoras',
      'Euclid',
      'Archimedes',
      'Thales'
    ],
    correctAnswer: 'Pythagoras',
    explanation: 'The theorem is named after the Greek mathematician Pythagoras, who is traditionally credited with its discovery and proof.',
    wrongAnswerExplanations: {
      'Euclid': 'Incorrect. Euclid documented the theorem in his Elements, but the discovery is attributed to Pythagoras.',
      'Archimedes': 'Incorrect. Archimedes made many mathematical discoveries, but the Pythagoras theorem is not among them.',
      'Thales': 'Incorrect. Thales was an early Greek mathematician, but the Pythagoras theorem is attributed to Pythagoras.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl10_ch6_t4_qe7',
    type: 'mcq',
    question: 'A ladder 10 m long reaches a window 8 m above the ground. How far is the foot of the ladder from the base of the wall?',
    options: [
      '6 m',
      '8 m',
      '4 m',
      '5 m'
    ],
    correctAnswer: '6 m',
    explanation: 'Using Pythagoras theorem: 10² = 8² + x², so x² = 10² - 8² = 100 - 64 = 36, thus x = 6 m.',
    wrongAnswerExplanations: {
      '8 m': 'Incorrect. If the distance was 8 m, then using Pythagoras theorem: 8² + 8² = 128, which is not equal to 10² = 100.',
      '4 m': 'Incorrect. If the distance was 4 m, then using Pythagoras theorem: 4² + 8² = 16 + 64 = 80, which is not equal to 10² = 100.',
      '5 m': 'Incorrect. If the distance was 5 m, then using Pythagoras theorem: 5² + 8² = 25 + 64 = 89, which is not equal to 10² = 100.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch6_t4_qe8',
    type: 'mcq',
    question: 'Which of these is a Pythagorean triplet?',
    options: [
      '5, 12, 13',
      '4, 7, 8',
      '2, 3, 6',
      '7, 9, 12'
    ],
    correctAnswer: '5, 12, 13',
    explanation: '5² + 12² = 25 + 144 = 169 = 13². Thus, 5, 12, 13 form a Pythagorean triplet.',
    wrongAnswerExplanations: {
      '4, 7, 8': 'Incorrect. 4² + 7² = 16 + 49 = 65, which is not equal to 8² = 64.',
      '2, 3, 6': 'Incorrect. 2² + 3² = 4 + 9 = 13, which is not equal to 6² = 36.',
      '7, 9, 12': 'Incorrect. 7² + 9² = 49 + 81 = 130, which is not equal to 12² = 144.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 45
  },
  {
    id: 'cl10_ch6_t4_qe9',
    type: 'mcq',
    question: 'If a² + b² < c², then the triangle with sides a, b, and c is:',
    options: [
      'An obtuse-angled triangle',
      'A right-angled triangle',
      'An acute-angled triangle',
      'Not a valid triangle'
    ],
    correctAnswer: 'An obtuse-angled triangle',
    explanation: 'When a² + b² < c², the triangle has an obtuse angle opposite to side c, making it an obtuse-angled triangle.',
    wrongAnswerExplanations: {
      'A right-angled triangle': 'Incorrect. In a right-angled triangle, a² + b² = c².',
      'An acute-angled triangle': 'Incorrect. In an acute-angled triangle, a² + b² > c² for all sides.',
      'Not a valid triangle': 'Incorrect. This relationship can still form a valid triangle provided the triangle inequality is satisfied.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 45
  },
  {
    id: 'cl10_ch6_t4_qe10',
    type: 'mcq',
    question: 'In a right-angled triangle, the perpendicular sides are 7 cm and 24 cm. The hypotenuse is:',
    options: [
      '25 cm',
      '23 cm',
      '26 cm',
      '31 cm'
    ],
    correctAnswer: '25 cm',
    explanation: 'Using Pythagoras theorem: c² = 7² + 24² = 49 + 576 = 625, thus c = 25 cm.',
    wrongAnswerExplanations: {
      '23 cm': 'Incorrect. If c = 23 cm, then c² = 529, which is not equal to 7² + 24² = 625.',
      '26 cm': 'Incorrect. If c = 26 cm, then c² = 676, which is not equal to 7² + 24² = 625.',
      '31 cm': 'Incorrect. If c = 31 cm, then c² = 961, which is not equal to 7² + 24² = 625.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 45
  },
  {
    id: 'cl10_ch6_t4_qe11',
    type: 'mcq',
    question: 'If a² + b² > c², then the triangle with sides a, b, and c is:',
    options: [
      'An acute-angled triangle',
      'A right-angled triangle',
      'An obtuse-angled triangle',
      'An equilateral triangle'
    ],
    correctAnswer: 'An acute-angled triangle',
    explanation: 'When a² + b² > c², the triangle has an acute angle opposite to side c, making it an acute-angled triangle.',
    wrongAnswerExplanations: {
      'A right-angled triangle': 'Incorrect. In a right-angled triangle, a² + b² = c².',
      'An obtuse-angled triangle': 'Incorrect. In an obtuse-angled triangle, a² + b² < c² for at least one set of sides.',
      'An equilateral triangle': 'Incorrect. This relationship applies to any acute-angled triangle, not just equilateral ones.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 45
  },
  {
    id: 'cl10_ch6_t4_qe12',
    type: 'mcq',
    question: 'A man walks 4 km east and then 3 km north. How far is he from the starting point?',
    options: [
      '5 km',
      '7 km',
      '1 km',
      '9 km'
    ],
    correctAnswer: '5 km',
    explanation: 'Using Pythagoras theorem: distance² = 4² + 3² = 16 + 9 = 25, thus distance = 5 km.',
    wrongAnswerExplanations: {
      '7 km': 'Incorrect. This is the total distance walked (4 + 3), not the direct distance from start to finish.',
      '1 km': 'Incorrect. This underestimates the direct distance. Using Pythagoras theorem gives 5 km.',
      '9 km': 'Incorrect. This would be much larger than both the direct distance and total distance walked.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch6_t4_qe13',
    type: 'mcq',
    question: 'In which civilizations was the Pythagoras theorem known before the Greeks?',
    options: [
      'Both Babylonian and Egyptian',
      'Only Babylonian',
      'Only Egyptian',
      'Neither Babylonian nor Egyptian'
    ],
    correctAnswer: 'Both Babylonian and Egyptian',
    explanation: 'Archaeological evidence shows both Babylonians and Egyptians knew and used the relationship in the Pythagoras theorem centuries before Greeks.',
    wrongAnswerExplanations: {
      'Only Babylonian': 'Incomplete. Evidence suggests both Babylonians and Egyptians knew the theorem.',
      'Only Egyptian': 'Incomplete. Evidence suggests both Babylonians and Egyptians knew the theorem.',
      'Neither Babylonian nor Egyptian': 'Incorrect. Archaeological evidence shows both civilizations had knowledge of the theorem.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl10_ch6_t4_qe14',
    type: 'mcq',
    question: 'What is the distance between the points (3, 4) and (0, 0) on a coordinate plane?',
    options: [
      '5 units',
      '7 units',
      '3 units',
      '4 units'
    ],
    correctAnswer: '5 units',
    explanation: 'Using distance formula (derived from Pythagoras theorem): √[(3-0)² + (4-0)²] = √[9 + 16] = √25 = 5 units.',
    wrongAnswerExplanations: {
      '7 units': 'Incorrect. This is the sum of coordinates, not the distance calculated using the distance formula.',
      '3 units': 'Incorrect. This is the x-coordinate only. The distance must account for both x and y coordinates.',
      '4 units': 'Incorrect. This is the y-coordinate only. The distance must account for both x and y coordinates.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 45
  },
  {
    id: 'cl10_ch6_t4_qe15',
    type: 'mcq',
    question: 'If a triangle has sides of lengths 5 cm, 12 cm, and 13 cm, what type of triangle is it?',
    options: [
      'Right-angled',
      'Equilateral',
      'Isosceles',
      'Scalene obtuse-angled'
    ],
    correctAnswer: 'Right-angled',
    explanation: '5² + 12² = 25 + 144 = 169 = 13². Since the Pythagorean relationship holds, this is a right-angled triangle.',
    wrongAnswerExplanations: {
      'Equilateral': 'Incorrect. An equilateral triangle has all sides equal, but this triangle has sides of different lengths.',
      'Isosceles': 'Incorrect. An isosceles triangle has at least two equal sides, which is not the case here.',
      'Scalene obtuse-angled': 'Incorrect. This triangle satisfies the Pythagoras theorem, making it right-angled, not obtuse-angled.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 45
  },
  {
    id: 'cl10_ch6_t4_qe16',
    type: 'mcq',
    question: 'In a right triangle, the lengths of the sides are (x - 2), x, and (x + 1). What is the value of x?',
    options: [
      '6',
      '7',
      '8',
      '5'
    ],
    correctAnswer: '6',
    explanation: 'Using Pythagoras theorem: (x-2)² + x² = (x+1)², solving gives x = 6.',
    wrongAnswerExplanations: {
      '7': 'Incorrect. If x = 7, then (7-2)² + 7² = 5² + 7² = 25 + 49 = 74, which is not equal to (7+1)² = 8² = 64.',
      '8': 'Incorrect. If x = 8, then (8-2)² + 8² = 6² + 8² = 36 + 64 = 100, which is not equal to (8+1)² = 9² = 81.',
      '5': 'Incorrect. If x = 5, then (5-2)² + 5² = 3² + 5² = 9 + 25 = 34, which is not equal to (5+1)² = 6² = 36.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch6_t4_qe17',
    type: 'mcq',
    question: 'The formula a² + b² = c² applies to what type of triangles only?',
    options: [
      'Right-angled triangles',
      'All triangles',
      'Acute-angled triangles',
      'Obtuse-angled triangles'
    ],
    correctAnswer: 'Right-angled triangles',
    explanation: 'The Pythagorean theorem (a² + b² = c²) applies only to right-angled triangles, where c is the hypotenuse.',
    wrongAnswerExplanations: {
      'All triangles': 'Incorrect. The Pythagorean theorem specifically applies to right-angled triangles only.',
      'Acute-angled triangles': 'Incorrect. In acute-angled triangles, a² + b² > c² for all sides.',
      'Obtuse-angled triangles': 'Incorrect. In obtuse-angled triangles, a² + b² < c² for at least one set of sides.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl10_ch6_t4_qe18',
    type: 'mcq',
    question: 'If the hypotenuse of a right-angled triangle is 17 cm and one of its sides is 8 cm, the other side is:',
    options: [
      '15 cm',
      '16 cm',
      '14 cm',
      '13 cm'
    ],
    correctAnswer: '15 cm',
    explanation: 'Using Pythagoras theorem: 8² + b² = 17², so b² = 17² - 8² = 289 - 64 = 225, thus b = 15 cm.',
    wrongAnswerExplanations: {
      '16 cm': 'Incorrect. If b = 16 cm, then 8² + 16² = 64 + 256 = 320, which is not equal to 17² = 289.',
      '14 cm': 'Incorrect. If b = 14 cm, then 8² + 14² = 64 + 196 = 260, which is not equal to 17² = 289.',
      '13 cm': 'Incorrect. If b = 13 cm, then 8² + 13² = 64 + 169 = 233, which is not equal to 17² = 289.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 45
  },
  {
    id: 'cl10_ch6_t4_qe19',
    type: 'mcq',
    question: 'A rectangle has length 12 cm and width 5 cm. What is the length of its diagonal?',
    options: [
      '13 cm',
      '17 cm',
      '11 cm',
      '15 cm'
    ],
    correctAnswer: '13 cm',
    explanation: 'Using Pythagoras theorem: diagonal² = length² + width² = 12² + 5² = 144 + 25 = 169, thus diagonal = 13 cm.',
    wrongAnswerExplanations: {
      '17 cm': 'Incorrect. This is the sum of length and width (12 + 5), not the diagonal calculated using Pythagoras theorem.',
      '11 cm': 'Incorrect. This underestimates the diagonal. Using Pythagoras theorem yields 13 cm.',
      '15 cm': 'Incorrect. This overestimates the diagonal. Using Pythagoras theorem yields 13 cm.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 45
  },
  {
    id: 'cl10_ch6_t4_qe20',
    type: 'mcq',
    question: 'Which of these is NOT a corollary to the Pythagoras theorem?',
    options: [
      'The diagonals of a rhombus are always equal',
      'In a right-angled triangle, the square on the hypotenuse equals the sum of squares on the other two sides',
      'The diagonals of a rectangle are equal',
      'The diagonals of a square are equal'
    ],
    correctAnswer: 'The diagonals of a rhombus are always equal',
    explanation: 'This is incorrect. In a rhombus, the diagonals are generally not equal (except in a square, which is a special rhombus).',
    wrongAnswerExplanations: {
      'In a right-angled triangle, the square on the hypotenuse equals the sum of squares on the other two sides': 'This is the Pythagoras theorem itself, not a corollary.',
      'The diagonals of a rectangle are equal': 'This is a corollary to the Pythagoras theorem, as it can be proven using the theorem.',
      'The diagonals of a square are equal': 'This is a corollary to the Pythagoras theorem, as it can be proven using the theorem.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 45
  }
];
