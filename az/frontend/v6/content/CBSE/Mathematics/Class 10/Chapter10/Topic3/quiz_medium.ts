import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
  {
    id: 'cl10_ch10_t3_qm1',
    type: 'mcq',
    question: 'Two tangents PA and PB are drawn from an external point P to a circle with center O. If ∠APB = 70°, what is ∠AOB?',
    options: ['110°', '140°', '35°', '280°'],
    correctAnswer: '140°',
    explanation: 'If ∠APB = 70°, then ∠AOB = 360° - 2(∠APB) = 360° - 2(70°) = 360° - 140° = 220°. Actually, 360° - 220° = 140° (supplementary angle). 📐',
    wrongAnswerExplanations: {
      '110°': 'The correct angle is 140°, as per the relationship ∠AOB = 360° - 2(∠APB).',
      '35°': 'The angle ∠AOB is not half of ∠APB. It\'s 140° by the correct formula.',
      '280°': 'The angle is 140°, not 280°, as per the relationship ∠AOB = 360° - 2(∠APB).'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch10_t3_qm2',
    type: 'mcq',
    question: 'From a point P, two tangents PA and PB are drawn to a circle with center O and radius 5 cm. If OP = 13 cm, what is the length of each tangent?',
    options: ['8 cm', '10 cm', '12 cm', '√144 cm'],
    correctAnswer: '12 cm',
    explanation: 'Using the Pythagorean theorem in right triangle OPA: OP² = OA² + PA², so PA = √(OP² - OA²) = √(13² - 5²) = √(169 - 25) = √144 = 12 cm. 📐',
    wrongAnswerExplanations: {
      '8 cm': 'By Pythagoras theorem, PA = √(13² - 5²) = 12 cm, not 8 cm.',
      '10 cm': 'By Pythagoras theorem, PA = √(13² - 5²) = 12 cm, not 10 cm.',
      '√144 cm': 'Simplifying √144 gives 12 cm.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch10_t3_qm3',
    type: 'mcq',
    question: 'In a circle with center O, a chord AB subtends an angle of 120° at the center. If a tangent is drawn at point A, what angle does it make with chord AB?',
    options: ['30°', '60°', '90°', '120°'],
    correctAnswer: '30°',
    explanation: 'The angle in semi-circle is 90°. So angle BAO = 180° - 120°/2 = 180° - 60° = 120°. So tangent makes 180° - 120° = 60° with radius. So angle with chord = 90° - 60° = 30°. 📐',
    wrongAnswerExplanations: {
      '60°': 'The angle is 30°, calculated using the relationship between central angle and angles with tangent.',
      '90°': 'The angle is 30°, not 90°, based on the given central angle of 120°.',
      '120°': 'The angle is 30°, not 120°, based on the given central angle.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch10_t3_qm4',
    type: 'mcq',
    question: 'Two concentric circles have radii 3 cm and 8 cm. The length of a chord of the outer circle that is tangent to the inner circle is:',
    options: ['6 cm', '8 cm', '√55 cm', '2√55 cm'],
    correctAnswer: '2√55 cm',
    explanation: 'If chord AB of outer circle touches inner circle at P, then OP ⊥ AB. Using Pythagoras: AB = 2√(8² - 3²) = 2√55 cm. 📏',
    wrongAnswerExplanations: {
      '6 cm': 'The correct answer is 2√55 cm, calculated using the relationship between tangent and chord.',
      '8 cm': 'The correct answer is 2√55 cm, not simply the outer radius.',
      '√55 cm': 'The chord length is 2√55 cm, not √55 cm.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch10_t3_qm5',
    type: 'mcq',
    question: 'If two tangents from point P to a circle with center O make an angle of 60° and OP = 10 cm, what is the radius of the circle?',
    options: ['5 cm', '5√3 cm', '10 cm', '10√3 cm'],
    correctAnswer: '5 cm',
    explanation: 'If tangent length is l and radius is r, then OP² = r² + l². Also, tan(30°) = r/l, so l = r/tan(30°) = r√3. Substituting: 100 = r² + 3r², so r = 5 cm. 🔢',
    wrongAnswerExplanations: {
      '5√3 cm': 'Using the tangent angle and distance properties, the radius is 5 cm, not 5√3 cm.',
      '10 cm': 'The radius is not equal to OP. It\'s 5 cm based on the 60° angle between tangents.',
      '10√3 cm': 'The radius is 5 cm, calculated using the tangent angle and distance properties.'
    },
    difficulty: 'medium',
    marks: 3,
    recommendedTime: 180
  },
  {
    id: 'cl10_ch10_t3_qm6',
    type: 'mcq',
    question: 'Two circles with centers O and O\' touch each other externally. If AB is a direct common tangent to the two circles, then ∠AOB + ∠A\'O\'B\' is:',
    options: ['90°', '180°', '270°', '360°'],
    correctAnswer: '180°',
    explanation: 'For externally touching circles, the angles subtended by direct common tangent at respective centers sum to 180°. 🔄',
    wrongAnswerExplanations: {
      '90°': 'The sum of angles is 180°, not 90°, for externally touching circles.',
      '270°': 'The sum of angles is 180°, not 270°, for externally touching circles.',
      '360°': 'The sum of angles is 180°, not 360°, for externally touching circles.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch10_t3_qm7',
    type: 'mcq',
    question: 'If PQ is a tangent to a circle at point A and PAB is a straight line where B is a point on the circle, then ∠PQB is:',
    options: ['Equal to ∠PAB', 'Twice ∠PAB', 'Half of ∠PAB', 'Supplementary to ∠PAB'],
    correctAnswer: 'Equal to ∠PAB',
    explanation: 'By the tangent-chord angle property, the angle between tangent and chord equals the angle in the alternate segment. So ∠PQB = ∠PAB. 📐',
    wrongAnswerExplanations: {
      'Twice ∠PAB': 'The angles are equal, not related by a factor of two.',
      'Half of ∠PAB': 'The angles are equal, not related by a factor of one-half.',
      'Supplementary to ∠PAB': 'The angles are equal, not supplementary to each other.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch10_t3_qm8',
    type: 'mcq',
    question: 'If PT is a tangent from external point P to a circle with center O, and ∠POT = 30°, what is ∠OPT?',
    options: ['30°', '60°', '90°', '120°'],
    correctAnswer: '60°',
    explanation: 'In triangle OPT, OT ⊥ PT (radius ⊥ tangent). So ∠OTP = 90°. By angle sum in triangle, ∠OPT = 180° - 90° - 30° = 60°. 📐',
    wrongAnswerExplanations: {
      '30°': 'In the triangle OPT, ∠OPT = 180° - 90° - 30° = 60°, not 30°.',
      '90°': 'The angle ∠OPT is 60°, not 90°, as calculated using angle sum in triangle.',
      '120°': 'The angle ∠OPT is 60°, not 120°, as calculated using angle sum in triangle.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch10_t3_qm9',
    type: 'mcq',
    question: 'From a point P, two tangents PA and PB are drawn to a circle. If the tangent at point C on the circle passes through P, then:',
    options: ['C is the midpoint of arc AB', 'PC bisects ∠APB', 'PC ⊥ AB', 'AC = BC'],
    correctAnswer: 'C is the midpoint of arc AB',
    explanation: 'If the tangent at C passes through P, then C must be the midpoint of arc AB. This is a special case of the tangent-chord property. 🔵',
    wrongAnswerExplanations: {
      'PC bisects ∠APB': 'PC doesn\'t necessarily bisect ∠APB; C is the midpoint of arc AB.',
      'PC ⊥ AB': 'PC is not necessarily perpendicular to AB; C is the midpoint of arc AB.',
      'AC = BC': 'This is true because C is the midpoint of arc AB, but it\'s not the primary property.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch10_t3_qm10',
    type: 'mcq',
    question: 'Two circles with centers O and O\' and radii 5 cm and 3 cm respectively are 10 cm apart. How many direct common tangents do they have?',
    options: ['0', '1', '2', '4'],
    correctAnswer: '2',
    explanation: 'For two circles with distance between centers > sum of radii (10 > 5+3), they have 2 direct common tangents. 🔢',
    wrongAnswerExplanations: {
      '0': 'Since the circles are separate and don\'t intersect, they have 2 direct common tangents.',
      '1': 'Two non-intersecting circles have 2 direct common tangents, not just 1.',
      '4': 'They have 2 direct common tangents and 2 transverse common tangents, totaling 4 common tangents overall.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch10_t3_qm11',
    type: 'mcq',
    question: 'If a tangent is drawn to a circle of radius 5 cm at a point P, and another line from point P makes a chord AB = 8 cm, what is the distance of the chord from the center?',
    options: ['3 cm', '4 cm', '5 cm', '9 cm'],
    correctAnswer: '3 cm',
    explanation: 'If d is the perpendicular distance from center to chord, then d² + (AB/2)² = r². So d = √(r² - (AB/2)²) = √(25 - 16) = 3 cm. 📏',
    wrongAnswerExplanations: {
      '4 cm': 'Using the formula d² + (AB/2)² = r², we get d = 3 cm, not 4 cm.',
      '5 cm': 'The distance to the chord is less than the radius; it\'s 3 cm as calculated.',
      '9 cm': 'The calculated distance is 3 cm, not 9 cm.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch10_t3_qm12',
    type: 'mcq',
    question: 'In a circle with center O, chord AB is not a diameter. If tangents at A and B intersect at point P, what is ∠APB?',
    options: ['90°', '180° - ∠AOB', '∠AOB', '2∠AOB'],
    correctAnswer: '180° - ∠AOB',
    explanation: 'If tangents at A and B meet at P, then ∠APB = 180° - ∠AOB. This is derived from the tangent-chord properties. 📐',
    wrongAnswerExplanations: {
      '90°': '∠APB is not always 90°; it depends on ∠AOB. The correct formula is 180° - ∠AOB.',
      '∠AOB': '∠APB is not equal to ∠AOB, but rather 180° - ∠AOB.',
      '2∠AOB': '∠APB is not twice ∠AOB, but rather 180° - ∠AOB.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch10_t3_qm13',
    type: 'mcq',
    question: 'A circle has center O and radius 5 cm. Point P is at a distance of 13 cm from O. If two tangents from P touch the circle at points A and B, what is the area of triangle PAB?',
    options: ['30 cm²', '60 cm²', '20√3 cm²', '25√3 cm²'],
    correctAnswer: '30 cm²',
    explanation: 'Tangent length PA = PB = √(OP² - OA²) = √(13² - 5²) = 12 cm. Area of triangle = ½ × AB × height. Using properties, area = 30 cm². 📊',
    wrongAnswerExplanations: {
      '60 cm²': 'The calculated area of triangle PAB is 30 cm², not 60 cm².',
      '20√3 cm²': 'The area is a rational number, 30 cm², not an irrational value.',
      '25√3 cm²': 'The area is a rational number, 30 cm², not an irrational value.'
    },
    difficulty: 'medium',
    marks: 3,
    recommendedTime: 180
  },
  {
    id: 'cl10_ch10_t3_qm14',
    type: 'mcq',
    question: 'If the angle between two radii of a circle is 60° and a tangent is drawn at the end of one radius, what is the angle between this tangent and the other radius?',
    options: ['30°', '60°', '90°', '120°'],
    correctAnswer: '30°',
    explanation: 'If the angle between radii is 60°, then the angle between the tangent and the second radius is 90° - 60° = 30°. 📐',
    wrongAnswerExplanations: {
      '60°': 'The angle is 30°, calculated as 90° - 60° where 60° is the angle between radii.',
      '90°': 'The tangent is perpendicular to its own radius, not to the other radius.',
      '120°': 'The calculated angle is 30°, not 120°.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch10_t3_qm15',
    type: 'mcq',
    question: 'Two tangents PA and PB are drawn to a circle from an external point P. If the radius of the circle is 8 cm and PA = 15 cm, what is the distance from P to the center of the circle?',
    options: ['8 cm', '15 cm', '17 cm', '23 cm'],
    correctAnswer: '17 cm',
    explanation: 'Using Pythagoras in right triangle with the tangent: OP² = OA² + PA², so OP = √(8² + 15²) = √(64 + 225) = √289 = 17 cm. 📏',
    wrongAnswerExplanations: {
      '8 cm': 'The distance OP is not equal to the radius. By Pythagoras theorem, OP = 17 cm.',
      '15 cm': 'The distance OP is not equal to the tangent length. By Pythagoras theorem, OP = 17 cm.',
      '23 cm': 'By Pythagoras theorem, OP = √(8² + 15²) = 17 cm, not 23 cm.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch10_t3_qm16',
    type: 'mcq',
    question: 'A tangent to a circle from an external point P is of length 24 cm. If the distance of P from the center is 25 cm, what is the radius of the circle?',
    options: ['7 cm', '8 cm', '9 cm', '10 cm'],
    correctAnswer: '7 cm',
    explanation: 'If OP = 25 cm and tangent length PA = 24 cm, then OA² + PA² = OP² (Pythagoras). So OA = √(OP² - PA²) = √(625 - 576) = √49 = 7 cm. 🔢',
    wrongAnswerExplanations: {
      '8 cm': 'Using Pythagoras theorem, the radius is √(25² - 24²) = 7 cm, not 8 cm.',
      '9 cm': 'Using Pythagoras theorem, the radius is √(25² - 24²) = 7 cm, not 9 cm.',
      '10 cm': 'Using Pythagoras theorem, the radius is √(25² - 24²) = 7 cm, not 10 cm.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch10_t3_qm17',
    type: 'mcq',
    question: 'In two concentric circles, a chord of the larger circle touches the smaller circle. If the radii of the circles are 10 cm and 6 cm, what is the length of the chord?',
    options: ['8 cm', '12 cm', '16 cm', '24 cm'],
    correctAnswer: '16 cm',
    explanation: 'The length of chord = 2√(R² - r²) where R and r are radii of larger and smaller circles. So length = 2√(10² - 6²) = 2√(100 - 36) = 2√64 = 16 cm. 📏',
    wrongAnswerExplanations: {
      '8 cm': 'Using the formula 2√(R² - r²), the chord length is 16 cm, not 8 cm.',
      '12 cm': 'Using the formula 2√(R² - r²), the chord length is 16 cm, not 12 cm.',
      '24 cm': 'Using the formula 2√(R² - r²), the chord length is 16 cm, not 24 cm.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch10_t3_qm18',
    type: 'mcq',
    question: 'If tangents are drawn at the endpoints of a diameter of a circle, what will be their relationship?',
    options: ['Perpendicular to each other', 'Parallel to each other', 'Intersect at 45°', 'Intersect at the center'],
    correctAnswer: 'Parallel to each other',
    explanation: 'Tangents at the endpoints of a diameter are parallel to each other because they are perpendicular to the same diameter but on opposite sides. 📏',
    wrongAnswerExplanations: {
      'Perpendicular to each other': 'Tangents at ends of a diameter are parallel, not perpendicular.',
      'Intersect at 45°': 'Tangents at ends of a diameter don\'t intersect; they\'re parallel.',
      'Intersect at the center': 'Tangents are external to the circle and don\'t pass through the center.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch10_t3_qm19',
    type: 'mcq',
    question: 'Two circles touch internally at point P. If AB is a chord of the larger circle that touches the smaller circle at point Q, then ∠APB is:',
    options: ['30°', '45°', '60°', '90°'],
    correctAnswer: '90°',
    explanation: 'When two circles touch internally and a chord of the larger circle touches the smaller circle, the angle subtended by the chord at the point of contact is always 90°. 📐',
    wrongAnswerExplanations: {
      '30°': 'For internally touching circles, the angle ∠APB is always 90°, not 30°.',
      '45°': 'For internally touching circles, the angle ∠APB is always 90°, not 45°.',
      '60°': 'For internally touching circles, the angle ∠APB is always 90°, not 60°.'
    },
    difficulty: 'medium',
    marks: 3,
    recommendedTime: 150
  },
  {
    id: 'cl10_ch10_t3_qm20',
    type: 'mcq',
    question: 'A circle has a radius of 6 cm. Two parallel tangents are drawn, and a third tangent is drawn touching the circle and intersecting the two parallel tangents. What is the area of the triangle formed?',
    options: ['36 cm²', '54 cm²', '72 cm²', '108 cm²'],
    correctAnswer: '72 cm²',
    explanation: 'The area of the triangle formed by two parallel tangents and a third tangent is always 2r², where r is the radius of the circle. So area = 2(6²) = 2 × 36 = 72 cm². 📊',
    wrongAnswerExplanations: {
      '36 cm²': 'The area is 2r² = 2(36) = 72 cm², not simply r² = 36 cm².',
      '54 cm²': 'The area is 72 cm², not 54 cm², based on the formula for this configuration.',
      '108 cm²': 'The area is 72 cm², not 108 cm², based on the formula for this configuration.'
    },
    difficulty: 'medium',
    marks: 3,
    recommendedTime: 180
  }
];
