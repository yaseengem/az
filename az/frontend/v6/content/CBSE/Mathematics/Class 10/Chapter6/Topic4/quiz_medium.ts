import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
  {
    id: 'cl10_ch6_t4_qm1',
    type: 'mcq',
    question: 'In a triangle, if a² + b² = c² + d², where a, b, c are the sides and d is the altitude to side c, then the triangle is:',
    options: [
      'Right-angled with the right angle opposite to side c',
      'Equilateral',
      'Isosceles',
      'Obtuse-angled'
    ],
    correctAnswer: 'Right-angled with the right angle opposite to side c',
    explanation: 'This equation is a rearrangement of the Pythagoras theorem, indicating a right angle opposite to side c.',
    wrongAnswerExplanations: {
      'Equilateral': 'Incorrect. The equation does not imply all sides are equal, which is required for an equilateral triangle.',
      'Isosceles': 'Incorrect. The equation does not necessarily imply two sides are equal, which is required for an isosceles triangle.',
      'Obtuse-angled': 'Incorrect. The equation is a form of the Pythagoras theorem, which indicates a right-angled triangle.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 75
  },
  {
    id: 'cl10_ch6_t4_qm2',
    type: 'mcq',
    question: 'A ladder 13 m long is leaning against a vertical wall. If the foot of the ladder is 5 m from the wall and is sliding away at a rate of 2 m/min, at what rate is the top of the ladder sliding down when the foot is 5 m from the wall?',
    options: [
      '2.4 m/min',
      '1.2 m/min',
      '3.6 m/min',
      '0.8 m/min'
    ],
    correctAnswer: '1.2 m/min',
    explanation: 'Using derivatives of the Pythagorean relationship and substituting values, the rate is 1.2 m/min when the foot is 5 m from the wall.',
    wrongAnswerExplanations: {
      '2.4 m/min': 'Incorrect. This is double the correct rate obtained from differentiating the Pythagorean equation.',
      '3.6 m/min': 'Incorrect. This is triple the correct rate obtained from differentiating the Pythagorean equation.',
      '0.8 m/min': 'Incorrect. This underestimates the rate obtained from differentiating the Pythagorean equation.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch6_t4_qm3',
    type: 'mcq',
    question: 'If in a triangle, a² + b² < c², then the measure of the angle opposite to side c is:',
    options: [
      'Greater than 90°',
      'Equal to 90°',
      'Less than 90°',
      'Cannot be determined'
    ],
    correctAnswer: 'Greater than 90°',
    explanation: 'When a² + b² < c², the angle opposite side c is obtuse (greater than 90°), by the converse of the Pythagorean theorem.',
    wrongAnswerExplanations: {
      'Equal to 90°': 'Incorrect. If the angle were 90°, then a² + b² = c² by the Pythagorean theorem.',
      'Less than 90°': 'Incorrect. If the angle were less than 90°, then a² + b² > c².',
      'Cannot be determined': 'Incorrect. The relationship between sides and angles in triangles is well-established by trigonometric principles.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch6_t4_qm4',
    type: 'mcq',
    question: 'The diagonals of a rhombus are 8 cm and 6 cm. The length of the side of the rhombus is:',
    options: [
      '5 cm',
      '4 cm',
      '7 cm',
      '10 cm'
    ],
    correctAnswer: '5 cm',
    explanation: 'Using the Pythagorean theorem on half the diagonals: side² = (4)² + (3)² = 16 + 9 = 25, thus side = 5 cm.',
    wrongAnswerExplanations: {
      '4 cm': 'Incorrect. This is half of one diagonal, not the side length of the rhombus.',
      '7 cm': 'Incorrect. This is an arbitrary value not related to the correct calculation using the Pythagorean theorem.',
      '10 cm': 'Incorrect. This is double the correct value and does not satisfy the Pythagorean relationship with the diagonals.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 75
  },
  {
    id: 'cl10_ch6_t4_qm5',
    type: 'mcq',
    question: 'If the sides of a triangle are in the ratio 3:4:5, then the triangle is:',
    options: [
      'Right-angled',
      'Equilateral',
      'Isosceles',
      'Obtuse-angled'
    ],
    correctAnswer: 'Right-angled',
    explanation: '3² + 4² = 9 + 16 = 25 = 5². Since these numbers satisfy the Pythagorean theorem, the triangle is right-angled.',
    wrongAnswerExplanations: {
      'Equilateral': 'Incorrect. In an equilateral triangle, all sides are equal, but these sides are in the ratio 3:4:5.',
      'Isosceles': 'Incorrect. In an isosceles triangle, at least two sides are equal, which isn\'t the case for a 3:4:5 triangle.',
      'Obtuse-angled': 'Incorrect. Since the sides satisfy the Pythagorean theorem perfectly, the triangle is right-angled, not obtuse.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch6_t4_qm6',
    type: 'mcq',
    question: 'A ship sailing east at 15 km/h spots a submarine 45° north-east from its position. After 1 hour, the submarine is due north. How fast is the submarine traveling westward?',
    options: [
      '15 km/h',
      '10.6 km/h',
      '21.2 km/h',
      '7.5 km/h'
    ],
    correctAnswer: '15 km/h',
    explanation: 'Using vector analysis with the Pythagorean theorem, the submarine\'s westward velocity component must be 15 km/h.',
    wrongAnswerExplanations: {
      '10.6 km/h': 'Incorrect. This would not allow the submarine to move from 45° northeast to due north in one hour.',
      '21.2 km/h': 'Incorrect. This would create a faster movement than necessary to achieve the position change in one hour.',
      '7.5 km/h': 'Incorrect. This would be half the ship\'s eastward speed and insufficient for the submarine\'s position change.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch6_t4_qm7',
    type: 'mcq',
    question: 'In a triangle ABC, if AC² = AB² + BC² - 2AB × BC × cos(A), then angle A is:',
    options: [
      '90°',
      '60°',
      '120°',
      '45°'
    ],
    correctAnswer: '90°',
    explanation: 'When A = 90°, cos(A) = 0, so the equation reduces to AC² = AB² + BC², which is the Pythagorean theorem.',
    wrongAnswerExplanations: {
      '60°': 'Incorrect. If A = 60°, cos(A) = 0.5, which doesn\'t reduce the equation to the Pythagorean form.',
      '120°': 'Incorrect. If A = 120°, cos(A) = -0.5, which doesn\'t reduce the equation to the Pythagorean form.',
      '45°': 'Incorrect. If A = 45°, cos(A) = 1/√2, which doesn\'t reduce the equation to the Pythagorean form.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 75
  },
  {
    id: 'cl10_ch6_t4_qm8',
    type: 'mcq',
    question: 'The perimeter of a right-angled triangle is 60 cm and its hypotenuse is 25 cm. The area of the triangle is:',
    options: [
      '150 cm²',
      '120 cm²',
      '240 cm²',
      '180 cm²'
    ],
    correctAnswer: '150 cm²',
    explanation: 'Using perimeter and Pythagoras theorem to find sides 20 cm and 15 cm, the area is ½ × 20 × 15 = 150 cm².',
    wrongAnswerExplanations: {
      '120 cm²': 'Incorrect. This underestimates the area calculated from the correct sides of the triangle.',
      '240 cm²': 'Incorrect. This overestimates the area calculated from the correct sides of the triangle.',
      '180 cm²': 'Incorrect. This does not match the area calculated using the correctly determined sides.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch6_t4_qm9',
    type: 'mcq',
    question: 'A point P is 13 cm from the center of a circle. The length of the tangent drawn from P to the circle is 12 cm. The radius of the circle is:',
    options: [
      '5 cm',
      '7 cm',
      '6 cm',
      '8 cm'
    ],
    correctAnswer: '5 cm',
    explanation: 'Using the Pythagorean theorem for tangent-radius relationship: r² + 12² = 13², thus r² = 169 - 144 = 25, so r = 5 cm.',
    wrongAnswerExplanations: {
      '7 cm': 'Incorrect. If r = 7 cm, then r² + 12² = 49 + 144 = 193, which is not equal to 13² = 169.',
      '6 cm': 'Incorrect. If r = 6 cm, then r² + 12² = 36 + 144 = 180, which is not equal to 13² = 169.',
      '8 cm': 'Incorrect. If r = 8 cm, then r² + 12² = 64 + 144 = 208, which is not equal to 13² = 169.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 75
  },
  {
    id: 'cl10_ch6_t4_qm10',
    type: 'mcq',
    question: 'In triangle ABC, if a² = b² + c² - bc, then the measure of angle A is:',
    options: [
      '60°',
      '90°',
      '120°',
      '45°'
    ],
    correctAnswer: '60°',
    explanation: 'Comparing with cosine law: a² = b² + c² - 2bc·cos(A), we get cos(A) = 1/2, which means A = 60°.',
    wrongAnswerExplanations: {
      '90°': 'Incorrect. If A = 90°, the cosine law would give a² = b² + c², not a² = b² + c² - bc.',
      '120°': 'Incorrect. If A = 120°, cos(A) = -1/2, which would give a² = b² + c² + bc, not a² = b² + c² - bc.',
      '45°': 'Incorrect. If A = 45°, cos(A) = 1/√2, which doesn\'t match the given equation.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 75
  },
  {
    id: 'cl10_ch6_t4_qm11',
    type: 'mcq',
    question: 'If the sides of a triangle are 8 cm, 15 cm, and 17 cm, what is the length of the altitude to the longest side?',
    options: [
      '7.5 cm',
      '6 cm',
      '8 cm',
      '9 cm'
    ],
    correctAnswer: '7.5 cm',
    explanation: 'Using the area formula and Pythagoras theorem: Area = ½ × base × height = ½ × 17 × h = 60 cm², so h = 7.5 cm.',
    wrongAnswerExplanations: {
      '6 cm': 'Incorrect. This would give an area of 51 cm², which doesn\'t match the triangle\'s actual area.',
      '8 cm': 'Incorrect. This would give an area of 68 cm², which doesn\'t match the triangle\'s actual area.',
      '9 cm': 'Incorrect. This would give an area of 76.5 cm², which doesn\'t match the triangle\'s actual area.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch6_t4_qm12',
    type: 'mcq',
    question: 'In a right-angled triangle, the hypotenuse is 10 cm and the perimeter is 22 cm. The area of the triangle is:',
    options: [
      '20 cm²',
      '24 cm²',
      '18 cm²',
      '16 cm²'
    ],
    correctAnswer: '24 cm²',
    explanation: 'Using perimeter and Pythagorean equations to find legs 6 cm and 8 cm, the area is ½ × 6 × 8 = 24 cm².',
    wrongAnswerExplanations: {
      '20 cm²': 'Incorrect. This area does not correspond to the legs calculated from the given information.',
      '18 cm²': 'Incorrect. This area does not correspond to the legs calculated from the given information.',
      '16 cm²': 'Incorrect. This area does not correspond to the legs calculated from the given information.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch6_t4_qm13',
    type: 'mcq',
    question: 'A square and an equilateral triangle have the same perimeter. If the side of the square is 12 cm, what is the area of the equilateral triangle?',
    options: [
      '48√3 cm²',
      '36√3 cm²',
      '24√3 cm²',
      '60√3 cm²'
    ],
    correctAnswer: '48√3 cm²',
    explanation: 'Perimeter of square = 48 cm, so side of triangle = 48/3 = 16 cm. Area = ¼ × 16² × √3 = 64 × √3/4 = 48√3 cm².',
    wrongAnswerExplanations: {
      '36√3 cm²': 'Incorrect. This area corresponds to an equilateral triangle with side length 12 cm, not 16 cm.',
      '24√3 cm²': 'Incorrect. This area is half the correct area, likely due to calculation error.',
      '60√3 cm²': 'Incorrect. This overestimates the area of the triangle with the correct side length.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch6_t4_qm14',
    type: 'mcq',
    question: 'If a² + b² + c² = 3abc, where a, b, and c are the sides of a triangle, then the triangle is:',
    options: [
      'Equilateral',
      'Right-angled',
      'Isosceles',
      'Obtuse-angled'
    ],
    correctAnswer: 'Equilateral',
    explanation: 'This equation is satisfied only when a = b = c, making the triangle equilateral.',
    wrongAnswerExplanations: {
      'Right-angled': 'Incorrect. A right-angled triangle would satisfy the Pythagorean theorem, not this equation.',
      'Isosceles': 'Incorrect. This equation requires all three sides to be equal, not just two.',
      'Obtuse-angled': 'Incorrect. This equation specifically characterizes an equilateral triangle, not an obtuse-angled one.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 75
  },
  {
    id: 'cl10_ch6_t4_qm15',
    type: 'mcq',
    question: 'The endpoints of a diameter of a circle are (2, 3) and (8, 9). The length of the diameter is:',
    options: [
      '10 units',
      '8√2 units',
      '6√2 units',
      '12 units'
    ],
    correctAnswer: '6√2 units',
    explanation: 'Using distance formula: √[(8-2)² + (9-3)²] = √[36 + 36] = √72 = 6√2 units. This is the diameter\'s length.',
    wrongAnswerExplanations: {
      '10 units': 'Incorrect. This does not match the result from the distance formula.',
      '8√2 units': 'Incorrect. This overestimates the correct distance calculated using the distance formula.',
      '12 units': 'Incorrect. This overestimates the correct distance calculated using the distance formula.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 75
  },
  {
    id: 'cl10_ch6_t4_qm16',
    type: 'mcq',
    question: 'A kite has diagonals of lengths 8 cm and 6 cm. The length of each of the longer sides of the kite is:',
    options: [
      '5 cm',
      '7 cm',
      '4 cm',
      '6 cm'
    ],
    correctAnswer: '5 cm',
    explanation: 'Using the Pythagorean theorem and properties of a kite: side² = (4)² + (3)² = 16 + 9 = 25, so side = 5 cm.',
    wrongAnswerExplanations: {
      '7 cm': 'Incorrect. This does not satisfy the Pythagorean relationship with half the diagonals.',
      '4 cm': 'Incorrect. This is half of one diagonal, not the side length of the kite.',
      '6 cm': 'Incorrect. This is the length of the shorter diagonal, not a side of the kite.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 75
  },
  {
    id: 'cl10_ch6_t4_qm17',
    type: 'mcq',
    question: 'A pole of height 6 m casts a shadow of length 8 m. At the same time, a tower casts a shadow of length 40 m. What is the height of the tower?',
    options: [
      '30 m',
      '24 m',
      '36 m',
      '48 m'
    ],
    correctAnswer: '30 m',
    explanation: 'Using similar triangles: height/shadow = 6/8 = h/40, giving h = 6 × 40 ÷ 8 = 30 m.',
    wrongAnswerExplanations: {
      '24 m': 'Incorrect. This underestimates the height calculated using the correct proportion.',
      '36 m': 'Incorrect. This overestimates the height calculated using the correct proportion.',
      '48 m': 'Incorrect. This significantly overestimates the height calculated using the correct proportion.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 75
  },
  {
    id: 'cl10_ch6_t4_qm18',
    type: 'mcq',
    question: 'A man walks 24 km on a bearing of 45° and then 10 km on a bearing of 135°. How far is he from the starting point?',
    options: [
      '26 km',
      '20 km',
      '34 km',
      '24 km'
    ],
    correctAnswer: '20 km',
    explanation: 'Resolving displacements: First leg gives (24/√2, 24/√2) = (17, 17) km. Second leg gives (-10/√2, 10/√2) = (-7, 7) km. Total: (10, 24) km. Distance = √(10² + 24²) = √(100 + 576) = √676 = 26 km.',
    wrongAnswerExplanations: {
      '26 km': 'Incorrect. The correct calculation using vector components yields 20 km.',
      '34 km': 'Incorrect. This is the total distance walked (24 + 10), not the direct distance from start to finish.',
      '24 km': 'Incorrect. This equals just the first leg of the journey, not the total displacement.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch6_t4_qm19',
    type: 'mcq',
    question: 'In a right-angled triangle, the perpendicular sides are (x + 3) and (x - 3), and the hypotenuse is x√2. The value of x is:',
    options: [
      '6',
      '9',
      '3',
      '12'
    ],
    correctAnswer: '6',
    explanation: 'Using Pythagoras theorem: (x+3)² + (x-3)² = (x√2)², which simplifies to 2x² + 18 = 2x², so x = 6.',
    wrongAnswerExplanations: {
      '9': 'Incorrect. Substituting x = 9 does not satisfy the equation derived from the Pythagorean theorem.',
      '3': 'Incorrect. Substituting x = 3 gives a zero length for one side, which is not possible for a triangle.',
      '12': 'Incorrect. Substituting x = 12 does not satisfy the equation derived from the Pythagorean theorem.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch6_t4_qm20',
    type: 'mcq',
    question: 'If the diagonals of a rhombus are in the ratio 3:4, then the ratio of the side of the rhombus to its longer diagonal is:',
    options: [
      '5:8',
      '3:5',
      '5:6',
      '2:3'
    ],
    correctAnswer: '5:8',
    explanation: 'If diagonals are 3k and 4k, then using Pythagoras theorem: side² = (1.5k)² + (2k)² = 2.25k² + 4k² = 6.25k², so side:longer diagonal = 2.5k:4k = 5:8.',
    wrongAnswerExplanations: {
      '3:5': 'Incorrect. This does not account for the correct relationship between diagonals and sides in a rhombus.',
      '5:6': 'Incorrect. This ratio does not result from the correct application of the Pythagorean theorem.',
      '2:3': 'Incorrect. This ratio does not result from the correct application of the Pythagorean theorem.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  }
];
