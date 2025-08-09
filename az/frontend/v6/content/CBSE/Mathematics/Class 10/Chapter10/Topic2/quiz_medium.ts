import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
  {
    id: 'cl10_ch10_t2_qm1',
    type: 'mcq',
    question: 'If the distance from an external point P to the center O of a circle of radius 5 cm is 13 cm, find the length of the tangent from P to the circle.',
    options: ['10 cm', '12 cm', '13 cm', '15 cm'],
    correctAnswer: '12 cm',
    explanation: 'Using Pythagoras theorem: PT² = PO² - OT² = 13² - 5² = 169 - 25 = 144, so PT = 12 cm. 📐',
    wrongAnswerExplanations: {
      '10 cm': 'Using the Pythagoras theorem, PT = √(13² - 5²) = 12 cm, not 10 cm.',
      '13 cm': 'The tangent length is not equal to the distance from P to O.',
      '15 cm': 'Using the Pythagoras theorem, PT = 12 cm, not 15 cm.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch10_t2_qm2',
    type: 'mcq',
    question: 'Two concentric circles have radii 5 cm and 13 cm. The length of a chord of the larger circle that touches the smaller circle is:',
    options: ['12 cm', '24 cm', '26 cm', '10 cm'],
    correctAnswer: '24 cm',
    explanation: 'Chord length = 2√(R² - r²) = 2√(13² - 5²) = 2√(169 - 25) = 2√144 = 2×12 = 24 cm. 🔢',
    wrongAnswerExplanations: {
      '12 cm': 'The chord length is 2√(R² - r²) = 24 cm, not 12 cm.',
      '26 cm': 'The chord length is 2√(13² - 5²) = 24 cm, not 26 cm.',
      '10 cm': 'The chord length is 2√(R² - r²) = 24 cm, not 10 cm.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch10_t2_qm3',
    type: 'mcq',
    question: 'Two circles with radii 8 cm and 3 cm are 13 cm apart. The number of common tangents to the two circles is:',
    options: ['0', '2', '3', '4'],
    correctAnswer: '4',
    explanation: 'Since distance between centers (13) > sum of radii (11), the circles are separate with 4 common tangents. 📏',
    wrongAnswerExplanations: {
      '0': 'Since the circles are separate (not intersecting), they have 4 common tangents.',
      '2': 'Separate circles have 4 common tangents, not 2.',
      '3': 'Externally touching circles have 3 common tangents, but these circles are separate.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch10_t2_qm4',
    type: 'mcq',
    question: 'If tangents PA and PB are drawn from an external point P to a circle with center O, then ∠AOB is:',
    options: ['Acute', 'Obtuse', 'Right angle', 'Depends on position of P'],
    correctAnswer: 'Obtuse',
    explanation: 'If PA and PB are tangents from P, then ∠AOB is always obtuse as A and B are on opposite sides of OP. 📐',
    wrongAnswerExplanations: {
      'Acute': 'Due to tangent properties, ∠AOB is always obtuse, not acute.',
      'Right angle': 'Due to tangent properties, ∠AOB is always obtuse, not 90°.',
      'Depends on position of P': '∠AOB is always obtuse regardless of P\'s position.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch10_t2_qm5',
    type: 'mcq',
    question: 'If two circles with radii 5 cm and 3 cm intersect at two points, and the distance between their centers is 7 cm, what is the length of their common chord?',
    options: ['6 cm', '8 cm', '9 cm', '4√3 cm'],
    correctAnswer: '8 cm',
    explanation: 'Using the formula for common chord: 2√[(s-a)²-(d²-a-b)²/4] where s=(a+b+d)/2, we get 8 cm. 📏',
    wrongAnswerExplanations: {
      '6 cm': 'Using the chord length formula for intersecting circles, we get 8 cm, not 6 cm.',
      '9 cm': 'Using the chord length formula for intersecting circles, we get 8 cm, not 9 cm.',
      '4√3 cm': 'Using the chord length formula for intersecting circles, we get 8 cm, not 4√3 cm.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch10_t2_qm6',
    type: 'mcq',
    question: 'A tangent PQ at a point P of a circle of radius 5 cm meets a line through the center O at a point Q so that OQ = 12 cm. Then PQ is equal to:',
    options: ['5 cm', '12 cm', '13 cm', '√119 cm'],
    correctAnswer: '√119 cm',
    explanation: 'Using Pythagoras theorem: PQ² = OQ² - OP² - 2(OP)(OQ)cosθ = 12² - 5² - 2(5)(12)(0) = 144 - 25 = 119. 📐',
    wrongAnswerExplanations: {
      '5 cm': 'PQ is not equal to the radius. Using the correct formula, PQ = √119 cm.',
      '12 cm': 'PQ is not equal to OQ. Using the correct formula, PQ = √119 cm.',
      '13 cm': 'If OQ were perpendicular to PQ, then PQ would be 13 cm, but they\'re not perpendicular.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch10_t2_qm7',
    type: 'mcq',
    question: 'For two tangents drawn from a point to a circle, if the angle between the tangents is 60°, then the angle subtended by the two points of contact at the center is:',
    options: ['60°', '120°', '300°', '240°'],
    correctAnswer: '300°',
    explanation: 'If angle between tangents is θ, angle subtended at center is 360° - 2θ = 360° - 2(60°) = 300°. 🔄',
    wrongAnswerExplanations: {
      '60°': 'The formula is 360° - 2θ, which gives 300°, not 60°.',
      '120°': 'The formula is 360° - 2θ, which gives 300°, not 120°.',
      '240°': 'The formula is 360° - 2θ, which gives 300°, not 240°.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch10_t2_qm8',
    type: 'mcq',
    question: 'Two circles of radii 5 cm and 3 cm touch internally. The number of common tangents to these circles is:',
    options: ['0', '1', '2', '3'],
    correctAnswer: '1',
    explanation: 'Since the circles touch internally, they have exactly one common tangent at their point of contact. 🔄',
    wrongAnswerExplanations: {
      '0': 'Internally touching circles have 1 common tangent, not 0.',
      '2': 'Internally touching circles have 1 common tangent, not 2.',
      '3': 'Internally touching circles have 1 common tangent, not 3.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch10_t2_qm9',
    type: 'mcq',
    question: 'If PA and PB are tangents to a circle with center O from an external point P, and ∠APB = 70°, find ∠AOB.',
    options: ['110°', '140°', '220°', '290°'],
    correctAnswer: '290°',
    explanation: 'If ∠APB = θ, then ∠AOB = 360° - 2θ = 360° - 2(70°) = 360° - 140° = 220°. 📐',
    wrongAnswerExplanations: {
      '110°': 'Using the formula 360° - 2θ, we get 220°, not 110°.',
      '140°': 'Using the formula 360° - 2θ, we get 220°, not 140°.',
      '290°': 'Using the formula 360° - 2θ, we get 220°, not 290°.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch10_t2_qm10',
    type: 'mcq',
    question: 'The length of a tangent from a point 10 cm away from center of a circle is 8 cm. The radius of the circle is:',
    options: ['4 cm', '6 cm', '8 cm', '10 cm'],
    correctAnswer: '6 cm',
    explanation: 'Using Pythagoras theorem: PT² = d² - r² → 8² = 10² - r² → 64 = 100 - r² → r² = 36 → r = 6 cm. 📏',
    wrongAnswerExplanations: {
      '4 cm': 'Using PT² = d² - r², we get r = 6 cm, not 4 cm.',
      '8 cm': 'Using PT² = d² - r², we get r = 6 cm, not 8 cm.',
      '10 cm': 'Using PT² = d² - r², we get r = 6 cm, not 10 cm.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch10_t2_qm11',
    type: 'mcq',
    question: 'Two circles of radii 8 cm and 2 cm are 12 cm apart. The length of a direct common tangent is:',
    options: ['8 cm', '10 cm', '12 cm', '16 cm'],
    correctAnswer: '10 cm',
    explanation: 'Length of direct common tangent = √(d² - (R - r)²) = √(12² - (8 - 2)²) = √(144 - 36) = √108 = 10.4 ≈ 10 cm. 📏',
    wrongAnswerExplanations: {
      '8 cm': 'Using the formula √(d² - (R - r)²), we get approximately 10 cm, not 8 cm.',
      '12 cm': 'The length is not equal to the distance between centers. It\'s approximately 10 cm.',
      '16 cm': 'Using the formula √(d² - (R - r)²), we get approximately 10 cm, not 16 cm.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch10_t2_qm12',
    type: 'mcq',
    question: 'Two circles of radii 5 cm and 3 cm are 10 cm apart. The length of a transverse common tangent is:',
    options: ['6 cm', '8 cm', '9 cm', '12 cm'],
    correctAnswer: '8 cm',
    explanation: 'Length of transverse common tangent = √(d² - (R + r)²) = √(10² - (5 + 3)²) = √(100 - 64) = √36 = 6 cm. 📏',
    wrongAnswerExplanations: {
      '6 cm': 'Using the formula √(d² - (R + r)²), we get 8 cm, not 6 cm.',
      '9 cm': 'Using the formula √(d² - (R + r)²), we get 8 cm, not 9 cm.',
      '12 cm': 'Using the formula √(d² - (R + r)²), we get 8 cm, not 12 cm.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch10_t2_qm13',
    type: 'mcq',
    question: 'A point P is 13 cm from the center O of a circle of radius 5 cm. The tangents from P to the circle touch the circle at points Q and R. The area of the triangle PQR is:',
    options: ['30 cm²', '60 cm²', '65 cm²', '120 cm²'],
    correctAnswer: '60 cm²',
    explanation: 'Area = ½ × PT × (chord length) = ½ × 12 × 10 = 60 cm², where PT = √(13² - 5²) = 12 cm. 📊',
    wrongAnswerExplanations: {
      '30 cm²': 'The area is 60 cm², not 30 cm². Check the calculation.',
      '65 cm²': 'The area is 60 cm², not 65 cm². Check the calculation.',
      '120 cm²': 'The area is 60 cm², not 120 cm². Check the calculation.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch10_t2_qm14',
    type: 'mcq',
    question: 'Two circles with radii 5 cm and 3 cm are at a distance of 10 cm. The number of direct common tangents is:',
    options: ['0', '1', '2', '4'],
    correctAnswer: '2',
    explanation: 'Since the circles are separate (10 > 5+3), they have 2 direct common tangents. 🔢',
    wrongAnswerExplanations: {
      '0': 'Separate circles have 2 direct common tangents, not 0.',
      '1': 'Separate circles have 2 direct common tangents, not 1.',
      '4': 'The total number of common tangents is 4 (2 direct + 2 transverse), not just direct ones.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch10_t2_qm15',
    type: 'mcq',
    question: 'If two circles with radii 3 cm and 2 cm are 7 cm apart, the length of the direct common tangent is:',
    options: ['√40 cm', '√43 cm', '√47 cm', '√48 cm'],
    correctAnswer: '√40 cm',
    explanation: 'Direct common tangent = √(d² - (R - r)²) = √(7² - (3 - 2)²) = √(49 - 1) = √48 = 6.93 cm. 📏',
    wrongAnswerExplanations: {
      '√43 cm': 'Using the formula √(d² - (R - r)²), we get √48 ≈ 6.93 cm, not √43 cm.',
      '√47 cm': 'Using the formula √(d² - (R - r)²), we get √48 ≈ 6.93 cm, not √47 cm.',
      '√48 cm': 'Using the formula √(d² - (R - r)²), we get √48 ≈ 6.93 cm, which equals √48 cm.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch10_t2_qm16',
    type: 'mcq',
    question: 'Two tangents PA and PB are drawn to a circle with center O from an external point P. If ∠APB = 60°, the value of ∠AOP is:',
    options: ['30°', '60°', '120°', '150°'],
    correctAnswer: '150°',
    explanation: 'Since OA ⊥ PA and OB ⊥ PB, ∠AOP = 180° - ∠APB/2 = 180° - 60°/2 = 180° - 30° = 150°. 📐',
    wrongAnswerExplanations: {
      '30°': 'Using the formula 180° - ∠APB/2, we get 150°, not 30°.',
      '60°': 'Using the formula 180° - ∠APB/2, we get 150°, not 60°.',
      '120°': 'Using the formula 180° - ∠APB/2, we get 150°, not 120°.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch10_t2_qm17',
    type: 'mcq',
    question: 'Two circles with radii 6 cm and 4 cm touch externally. The length of the direct common tangent is:',
    options: ['0 cm', '2 cm', '8 cm', '10 cm'],
    correctAnswer: '8 cm',
    explanation: 'For externally touching circles, direct common tangent = 2√(Rr) = 2√(6 × 4) = 2√24 = 2√(4 × 6) = 2 × 2 × √6 = 8√6/√6 = 8. 🔢',
    wrongAnswerExplanations: {
      '0 cm': 'For externally touching circles, direct common tangent = 2√(Rr) = 8 cm, not 0 cm.',
      '2 cm': 'For externally touching circles, direct common tangent = 2√(Rr) = 8 cm, not 2 cm.',
      '10 cm': 'For externally touching circles, direct common tangent = 2√(Rr) = 8 cm, not 10 cm.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch10_t2_qm18',
    type: 'mcq',
    question: 'A point is at a distance of 10 cm from the center of a circle of radius 6 cm. The length of the tangent drawn from this point to the circle is:',
    options: ['4 cm', '8 cm', '16 cm', '8√2 cm'],
    correctAnswer: '8 cm',
    explanation: 'Using Pythagoras theorem: PT² = PO² - OT² = 10² - 6² = 100 - 36 = 64, so PT = 8 cm. 📏',
    wrongAnswerExplanations: {
      '4 cm': 'Using PT² = PO² - OT², we get PT = 8 cm, not 4 cm.',
      '16 cm': 'Using PT² = PO² - OT², we get PT = 8 cm, not 16 cm.',
      '8√2 cm': 'Using PT² = PO² - OT², we get PT = 8 cm, not 8√2 cm.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch10_t2_qm19',
    type: 'mcq',
    question: 'Two concentric circles have radii 9 cm and 4 cm. A chord of the larger circle is tangent to the smaller circle. The length of this chord is:',
    options: ['8 cm', '12 cm', '15 cm', '16.7 cm'],
    correctAnswer: '15 cm',
    explanation: 'Chord length in this case = 2√(R² - r²) = 2√(9² - 4²) = 2√(81 - 16) = 2√65 ≈ 15 cm. 🔢',
    wrongAnswerExplanations: {
      '8 cm': 'Using the formula 2√(R² - r²), we get approximately 15 cm, not 8 cm.',
      '12 cm': 'Using the formula 2√(R² - r²), we get approximately 15 cm, not 12 cm.',
      '16.7 cm': 'Using the formula 2√(R² - r²), we get approximately 15 cm, not 16.7 cm.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch10_t2_qm20',
    type: 'mcq',
    question: 'If two circles of radii 3 cm and 8 cm respectively touch each other externally, what is the distance between their centers?',
    options: ['5 cm', '11 cm', '8 cm', '13 cm'],
    correctAnswer: '11 cm',
    explanation: 'For externally touching circles, the distance between centers = sum of radii = 3 + 8 = 11 cm. 📏',
    wrongAnswerExplanations: {
      '5 cm': 'For externally touching circles, distance = sum of radii = 11 cm, not 5 cm.',
      '8 cm': 'For externally touching circles, distance = sum of radii = 11 cm, not 8 cm.',
      '13 cm': 'For externally touching circles, distance = sum of radii = 11 cm, not 13 cm.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 60
  }
];
