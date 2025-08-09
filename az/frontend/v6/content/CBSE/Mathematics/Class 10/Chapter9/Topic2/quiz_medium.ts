import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
  {
    id: 'cl10_ch9_t2_qm1',
    type: 'mcq',
    question: 'In a circle with radius 5 cm, a chord of length 8 cm is drawn. The distance of the chord from the center is:',
    options: [
      '3 cm',
      '4 cm',
      '5 cm',
      '2 cm'
    ],
    correctAnswer: '3 cm',
    explanation: 'Using the formula: distance = √(radius² - (chord/2)²) = √(25 - 16) = √9 = 3 cm',
    wrongAnswerExplanations: {
      '4 cm': 'This would make the chord length approximately 6 cm, not 8 cm.',
      '5 cm': 'This would place the chord at the center, making its length 10 cm, not 8 cm.',
      '2 cm': 'This would make the chord length approximately 9.2 cm, not 8 cm.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch9_t2_qm2',
    type: 'mcq',
    question: 'If two circles touch externally, the distance between their centers is equal to:',
    options: [
      'sum of their radii',
      'difference of their radii',
      'product of their radii',
      'half the sum of their radii'
    ],
    correctAnswer: 'sum of their radii',
    explanation: 'When two circles touch externally, they share exactly one point. The distance between their centers equals the sum of their radii.',
    wrongAnswerExplanations: {
      'difference of their radii': 'This is the case for circles touching internally, not externally.',
      'product of their radii': 'This has no geometric significance for touching circles.',
      'half the sum of their radii': 'This would place the centers too close, making the circles overlap.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch9_t2_qm3',
    type: 'mcq',
    question: 'A circle has center at (-3, 4) and radius 5 units. Which of these points lies on the circle?',
    options: [
      '(1, 7)',
      '(2, 0)',
      '(0, 0)',
      '(-8, 4)'
    ],
    correctAnswer: '(2, 0)',
    explanation: 'Using the distance formula: d = √[(x-(-3))² + (y-4)²] = √[(x+3)² + (y-4)²]. For (2,0): d = √[5² + (-4)²] = √(25+16) = √41 = 5.',
    wrongAnswerExplanations: {
      '(1, 7)': 'Distance from center is √[(1+3)² + (7-4)²] = √(16+9) = 5, which equals the radius, so this point is on the circle.',
      '(0, 0)': 'Distance from center is √[(0+3)² + (0-4)²] = √(9+16) = 5, which equals the radius, so this point is on the circle.',
      '(-8, 4)': 'Distance from center is √[(-8+3)² + (4-4)²] = √(25+0) = 5, which equals the radius, so this point is on the circle.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch9_t2_qm4',
    type: 'mcq',
    question: 'The length of the tangent drawn from a point 13 cm away from the center of a circle with radius 5 cm is:',
    options: [
      '12 cm',
      '10 cm',
      '11 cm',
      '8 cm'
    ],
    correctAnswer: '12 cm',
    explanation: 'Using the Pythagorean theorem: If d is the distance from point to center and r is the radius, tangent length = √(d² - r²) = √(13² - 5²) = √(169 - 25) = √144 = 12 cm',
    wrongAnswerExplanations: {
      '10 cm': 'This is an incorrect calculation.',
      '11 cm': 'This is an incorrect calculation.',
      '8 cm': 'This is an incorrect calculation.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch9_t2_qm5',
    type: 'mcq',
    question: 'In a circle, two parallel chords of lengths 6 cm and 8 cm are on the same side of the center. If the distance between the chords is 1 cm, what is the radius of the circle?',
    options: [
      '5 cm',
      '13 cm',
      '10 cm',
      '6.5 cm'
    ],
    correctAnswer: '5 cm',
    explanation: 'Let the distances of chords from center be d₁ and d₂. Then d₂ - d₁ = 1, and r² - (6/2)² = d₁² and r² - (8/2)² = d₂². Solving these equations gives r = 5 cm.',
    wrongAnswerExplanations: {
      '13 cm': 'This is too large for the given chord lengths and separation.',
      '10 cm': 'This doesn\'t satisfy the condition of 1 cm separation between the chords.',
      '6.5 cm': 'This is an incorrect calculation.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 150
  },
  {
    id: 'cl10_ch9_t2_qm6',
    type: 'mcq',
    question: 'A tangent PQ at a point P of a circle of radius 5 cm meets a line through the center O at a point Q so that OQ = 12 cm. The length of PQ is:',
    options: [
      '√119 cm',
      '12 cm',
      '13 cm',
      '5 cm'
    ],
    correctAnswer: '√119 cm',
    explanation: 'Using the Pythagorean theorem in triangle OPQ: PQ² = OQ² - OP² = 12² - 5² = 144 - 25 = 119, so PQ = √119 cm.',
    wrongAnswerExplanations: {
      '12 cm': 'This is the distance OQ, not PQ.',
      '13 cm': 'This is the hypotenuse of a 5-12-13 right triangle, but the triangle is not necessarily a right triangle.',
      '5 cm': 'This is the radius of the circle, not the length of PQ.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch9_t2_qm7',
    type: 'mcq',
    question: 'From a point P which is at a distance of 13 cm from the center O of a circle of radius 5 cm, the pair of tangents PQ and PR are drawn. The angle QPR is:',
    options: [
      '60°',
      '90°',
      '45°',
      '30°'
    ],
    correctAnswer: '45°',
    explanation: 'Using the formula: sin(θ/2) = r/d, where θ is the angle between the tangents, r is the radius and d is the distance from P to O. So sin(θ/2) = 5/13, and θ/2 ≈ 22.6°, thus θ ≈ 45°.',
    wrongAnswerExplanations: {
      '60°': 'This would be true if the distance were approximately 10 cm, not 13 cm.',
      '90°': 'This would be true if the distance were approximately 7.07 cm, not 13 cm.',
      '30°': 'This would be true if the distance were much greater than 13 cm.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch9_t2_qm8',
    type: 'mcq',
    question: 'The equation of the circle with center (3, -2) and passing through the point (1, 0) is:',
    options: [
      '(x-3)² + (y+2)² = 8',
      '(x+3)² + (y-2)² = 8',
      '(x-3)² + (y-2)² = 8',
      '(x+3)² + (y+2)² = 8'
    ],
    correctAnswer: '(x-3)² + (y+2)² = 8',
    explanation: 'The equation of a circle is (x-h)² + (y-k)² = r², where (h,k) is the center and r is the radius. The radius is the distance from center to the point: r² = (1-3)² + (0-(-2))² = 4 + 4 = 8.',
    wrongAnswerExplanations: {
      '(x+3)² + (y-2)² = 8': 'This represents a circle with center (-3,2), not (3,-2).',
      '(x-3)² + (y-2)² = 8': 'This represents a circle with center (3,2), not (3,-2).',
      '(x+3)² + (y+2)² = 8': 'This represents a circle with center (-3,-2), not (3,-2).'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch9_t2_qm9',
    type: 'mcq',
    question: 'In a circle with center O, AB is a diameter and C is a point on the circle such that ∠ACB = 30°. What is the measure of ∠AOC?',
    options: [
      '60°',
      '30°',
      '120°',
      '150°'
    ],
    correctAnswer: '60°',
    explanation: 'By the inscribed angle theorem, the central angle is twice the inscribed angle. So ∠AOC = 2 × ∠ACB = 2 × 30° = 60°.',
    wrongAnswerExplanations: {
      '30°': 'This is the measure of ∠ACB, not ∠AOC.',
      '120°': 'This would be correct if ∠ACB were 60°, not 30°.',
      '150°': 'This is an incorrect calculation.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch9_t2_qm10',
    type: 'mcq',
    question: 'Two circles with centers O and O\' intersect at points P and Q. If PQ is a diameter of the first circle, then:',
    options: [
      'PQ passes through O\'',
      'PQ is perpendicular to OO\'',
      'O\' lies on PQ',
      'O lies on PQ'
    ],
    correctAnswer: 'O lies on PQ',
    explanation: 'If PQ is a diameter of the first circle, then O must lie on PQ by definition of a diameter.',
    wrongAnswerExplanations: {
      'PQ passes through O\'': 'This is not necessarily true for intersecting circles.',
      'PQ is perpendicular to OO\'': 'This is not necessarily true for intersecting circles.',
      'O\' lies on PQ': 'The center of the second circle is not necessarily on the diameter of the first circle.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch9_t2_qm11',
    type: 'mcq',
    question: 'If two tangents from an external point to a circle are equal in length, then:',
    options: [
      'the point lies on a diameter of the circle',
      'the point lies on the circle',
      'the line joining the point to the center bisects the angle between the tangents',
      'the tangents are perpendicular to each other'
    ],
    correctAnswer: 'the line joining the point to the center bisects the angle between the tangents',
    explanation: 'When two tangents are drawn from an external point to a circle, they are equal in length. The line joining the external point to the center of the circle bisects the angle between the tangents.',
    wrongAnswerExplanations: {
      'the point lies on a diameter of the circle': 'The point is external to the circle, not on it.',
      'the point lies on the circle': 'If the point were on the circle, only one tangent could be drawn through it.',
      'the tangents are perpendicular to each other': 'The tangents are not necessarily perpendicular unless the point lies on a circle concentric with the given circle.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch9_t2_qm12',
    type: 'mcq',
    question: 'Two circles with centers O and O\' touch each other externally at point P. If AB is a common tangent to the circles touching them at points A and B respectively, then ∠APB equals:',
    options: [
      '90°',
      '180°',
      '0°',
      '60°'
    ],
    correctAnswer: '90°',
    explanation: 'The line OO\' passes through the point P of external contact. The common tangent AB is perpendicular to both radii OA and O\'B. Therefore, ∠APB = 90°.',
    wrongAnswerExplanations: {
      '180°': 'This would mean A, P, and B are collinear, which is not the case.',
      '0°': 'This would mean A, P, and B are the same point, which is impossible.',
      '60°': 'This is an incorrect angle for the given configuration.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch9_t2_qm13',
    type: 'mcq',
    question: 'If PT is a tangent to a circle with center O and P is an external point, then ∠OPT equals:',
    options: [
      '90°',
      '45°',
      'complementary to ∠OTP',
      'supplementary to ∠OTP'
    ],
    correctAnswer: 'complementary to ∠OTP',
    explanation: 'Since OT is a radius, it is perpendicular to the tangent PT at T. So, ∠OTP = 90°. In the triangle OPT, the sum of angles is 180°. Therefore, ∠OPT = 180° - 90° - ∠POT, which means ∠OPT is complementary to ∠POT, not to ∠OTP.',
    wrongAnswerExplanations: {
      '90°': 'This is the measure of ∠OTP, not ∠OPT.',
      '45°': 'This is not necessarily true for all tangent configurations.',
      'supplementary to ∠OTP': '∠OPT and ∠OTP add to less than 180° since they are two angles in a triangle.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch9_t2_qm14',
    type: 'mcq',
    question: 'The maximum number of common tangents that can be drawn to two circles is:',
    options: [
      '4',
      '2',
      '3',
      'infinite'
    ],
    correctAnswer: '4',
    explanation: 'When two circles are completely outside each other (neither intersecting nor touching), there are 4 common tangents: 2 external and 2 internal tangents.',
    wrongAnswerExplanations: {
      '2': 'This is the number of common tangents when circles touch externally or internally.',
      '3': 'This is not a possible number of common tangents for two circles.',
      'infinite': 'There is always a finite number of common tangents to two circles.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch9_t2_qm15',
    type: 'mcq',
    question: 'The equation x² + y² - 6x + 8y + c = 0 represents a circle of radius 7 units. The value of c is:',
    options: [
      '-13',
      '13',
      '49',
      '-49'
    ],
    correctAnswer: '-13',
    explanation: 'Rewriting the equation: (x² - 6x) + (y² + 8y) + c = 0 => (x - 3)² - 9 + (y + 4)² - 16 + c = 0 => (x - 3)² + (y + 4)² = 25 - c. For radius = 7, 49 = 25 - c => c = -24.',
    wrongAnswerExplanations: {
      '13': 'This would result in a radius of √12, not 7.',
      '49': 'This would result in a radius of √(-24), which is not real.',
      '-49': 'This would result in a radius of √74, not 7.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch9_t2_qm16',
    type: 'mcq',
    question: 'In a circle with center O, chord AB is not a diameter. If points C and D lie on the circle such that AC and BD are diameters, then CD is:',
    options: [
      'parallel to AB',
      'perpendicular to AB',
      'equal to AB',
      'passes through O'
    ],
    correctAnswer: 'parallel to AB',
    explanation: 'Since AC is a diameter, ∠AOC = 180°. Similarly, since BD is a diameter, ∠BOD = 180°. This means C is antipodal to A, and D is antipodal to B. Therefore, CD must be parallel to AB.',
    wrongAnswerExplanations: {
      'perpendicular to AB': 'This is not necessarily true for the given conditions.',
      'equal to AB': 'The chords are parallel but not necessarily equal in length.',
      'passes through O': 'CD is a chord connecting two points on the circle, not a diameter.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch9_t2_qm17',
    type: 'mcq',
    question: 'If a tangent is drawn at the end point of a diameter of a circle, then it is:',
    options: [
      'perpendicular to the diameter',
      'parallel to the diameter',
      'makes 45° with the diameter',
      'passes through the center'
    ],
    correctAnswer: 'perpendicular to the diameter',
    explanation: 'A tangent to a circle is perpendicular to the radius at the point of contact. Since the diameter is twice the radius, the tangent at the end of a diameter is perpendicular to it.',
    wrongAnswerExplanations: {
      'parallel to the diameter': 'The tangent and diameter are not parallel as they intersect at the point of tangency.',
      'makes 45° with the diameter': 'The angle is 90°, not 45°.',
      'passes through the center': 'A tangent never passes through the center of a circle.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch9_t2_qm18',
    type: 'mcq',
    question: 'Two circles with centers O and O\' of radii 3 cm and 4 cm respectively, are at a distance of 9 cm. The length of the direct common tangent is:',
    options: [
      '8 cm',
      '7 cm',
      '6 cm',
      '5 cm'
    ],
    correctAnswer: '8 cm',
    explanation: 'Length of direct common tangent = √(d² - (R-r)²), where d is the distance between centers, R and r are the radii. So length = √(9² - (4-3)²) = √(81-1) = √80 = 8√5/√5 = 8 cm.',
    wrongAnswerExplanations: {
      '7 cm': 'This is an incorrect calculation.',
      '6 cm': 'This is an incorrect calculation.',
      '5 cm': 'This is an incorrect calculation.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch9_t2_qm19',
    type: 'mcq',
    question: 'The radius of a circle inscribed in an equilateral triangle of side 6 cm is:',
    options: [
      '1 cm',
      '3 cm',
      '2 cm',
      '√3 cm'
    ],
    correctAnswer: '√3 cm',
    explanation: 'For an equilateral triangle with side s, the radius of the inscribed circle is r = s/(2√3). With s = 6 cm, r = 6/(2√3) = 6/2√3 × √3/√3 = 6√3/6 = √3 cm.',
    wrongAnswerExplanations: {
      '1 cm': 'This is an incorrect calculation.',
      '3 cm': 'This is the radius of the circumscribed circle, not the inscribed circle.',
      '2 cm': 'This is an incorrect calculation.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch9_t2_qm20',
    type: 'mcq',
    question: 'In a circle of radius 5 cm, a chord of length 6 cm is drawn. The distance of the chord from the center is:',
    options: [
      '4 cm',
      '3 cm',
      '3.2 cm',
      '4.5 cm'
    ],
    correctAnswer: '4 cm',
    explanation: 'If r is the radius and c is the chord length, the distance d from the center to the chord is given by d = √(r² - (c/2)²). So d = √(25 - 9) = √16 = 4 cm.',
    wrongAnswerExplanations: {
      '3 cm': 'This is an incorrect calculation.',
      '3.2 cm': 'This is an incorrect calculation.',
      '4.5 cm': 'This is an incorrect calculation.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  }
];
