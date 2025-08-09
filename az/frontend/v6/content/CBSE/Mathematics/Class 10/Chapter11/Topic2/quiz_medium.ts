import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
  {
    id: 'cl10_ch11_t2_qm1',
    type: 'mcq',
    question: 'If from an external point P, two tangents PA and PB are drawn to a circle with center O, and ∠APB = 60°, what is ∠AOB?',
    options: [
      '60°',
      '120°',
      '240°',
      '300°'
    ],
    correctAnswer: '120°',
    explanation: 'When tangents PA and PB are drawn, ∠AOB = 360° - 2(∠APB) = 360° - 2(60°) = 240°.',
    wrongAnswerExplanations: {
      '60°': 'This is incorrect. The angle AOB is 240°, not 60°.',
      '120°': 'This is incorrect. The angle AOB is 240°, not 120°.',
      '300°': 'This is incorrect. The angle AOB is 240°, not 300°.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch11_t2_qm2',
    type: 'mcq',
    question: 'Two circles of radii 5 cm and 3 cm are placed such that the distance between their centers is 10 cm. How many direct common tangents can be drawn to these circles?',
    options: [
      '1',
      '2',
      '3',
      '4'
    ],
    correctAnswer: '4',
    explanation: 'For external tangents, distance > sum of radii, and for internal tangents, distance > difference of radii. Both conditions met, so 4 tangents.',
    wrongAnswerExplanations: {
      '1': 'This is incorrect. There are 4 common tangents possible.',
      '2': 'This is incorrect. There are 4 common tangents possible.',
      '3': 'This is incorrect. There are 4 common tangents possible.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch11_t2_qm3',
    type: 'mcq',
    question: 'If PA and PB are tangents from an external point P to a circle with center O and radius r, and if OP = 2r, then what is ∠APB?',
    options: [
      '30°',
      '60°',
      '90°',
      '120°'
    ],
    correctAnswer: '60°',
    explanation: 'From right triangles: cos(∠APO) = r/OP = r/2r = 1/2, so ∠APO = 60°. Due to symmetry, ∠APB = 2(60°) = 120°.',
    wrongAnswerExplanations: {
      '30°': 'This is incorrect. The angle is 120°, not 30°.',
      '60°': 'This is incorrect. The full angle APB is 120°, not 60°.',
      '90°': 'This is incorrect. The angle is 120°, not 90°.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch11_t2_qm4',
    type: 'mcq',
    question: 'In a circle with center O, if tangent PA makes an angle of 40° with diameter PQ through external point P, what is ∠POQ?',
    options: [
      '40°',
      '50°',
      '80°',
      '100°'
    ],
    correctAnswer: '100°',
    explanation: 'If tangent PA makes 40° with diameter PQ, then ∠OPQ = 90° - 40° = 50°. So ∠POQ = 180° - 50° - 30° = 100°.',
    wrongAnswerExplanations: {
      '40°': 'This is incorrect. The angle POQ is 100°, not 40°.',
      '50°': 'This is incorrect. The angle POQ is 100°, not 50°.',
      '80°': 'This is incorrect. The angle POQ is 100°, not 80°.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch11_t2_qm5',
    type: 'mcq',
    question: 'If two tangents PA and PB are drawn to a circle from an external point P, and O is the center of the circle, what is the relationship between OP and the tangent length PA?',
    options: [
      'OP = PA',
      'OP < PA',
      'OP > PA',
      'No fixed relationship'
    ],
    correctAnswer: 'OP > PA',
    explanation: 'OP is the hypotenuse of right triangle OAP (OA⊥PA). By the Pythagorean inequality for right triangles, OP > PA.',
    wrongAnswerExplanations: {
      'OP = PA': 'This is incorrect. OP is always greater than PA.',
      'OP < PA': 'This is incorrect. OP is always greater than PA.',
      'No fixed relationship': 'This is incorrect. OP is always greater than PA.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch11_t2_qm6',
    type: 'mcq',
    question: 'Two circles with centers O and O\' have radii 3 cm and 4 cm respectively. If the distance OO\' is 9 cm, how many direct common tangents can be drawn?',
    options: [
      '0',
      '1',
      '2',
      '4'
    ],
    correctAnswer: '2',
    explanation: 'For external tangents: 9 > 3 + 4 ✓, but for internal tangents: 9 < |3 - 4| + 10 ✗. So only 2 external tangents exist.',
    wrongAnswerExplanations: {
      '0': 'This is incorrect. There are 2 common tangents (external ones).',
      '1': 'This is incorrect. There are 2 common tangents (external ones).',
      '4': 'This is incorrect. Only 2 external tangents exist; internal tangents don\'t exist here.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch11_t2_qm7',
    type: 'mcq',
    question: 'If from an external point, two tangents are drawn to a circle and they are perpendicular to each other, where must the external point be located?',
    options: [
      'At a distance equal to the radius from the center',
      'At a distance equal to the diameter from the center',
      'At a distance equal to √2 times the radius from the center',
      'At any arbitrary distance from the center'
    ],
    correctAnswer: 'At a distance equal to √2 times the radius from the center',
    explanation: 'For perpendicular tangents from point P, distance OP must be √2r where r is the radius.',
    wrongAnswerExplanations: {
      'At a distance equal to the radius from the center': 'This is incorrect. The distance must be √2r, not r.',
      'At a distance equal to the diameter from the center': 'This is incorrect. The distance must be √2r, not 2r.',
      'At any arbitrary distance from the center': 'This is incorrect. The distance must specifically be √2r.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch11_t2_qm8',
    type: 'mcq',
    question: 'In the construction of tangents to a circle from an external point P, how many auxiliary circles are needed?',
    options: [
      'None',
      'One',
      'Two',
      'It depends on the location of P'
    ],
    correctAnswer: 'One',
    explanation: 'One auxiliary circle with OP as diameter is sufficient to construct both tangents from point P.',
    wrongAnswerExplanations: {
      'None': 'This is incorrect. At least one auxiliary circle is needed for the construction.',
      'Two': 'This is incorrect. Only one auxiliary circle is needed.',
      'It depends on the location of P': 'This is incorrect. Regardless of P\'s location, one auxiliary circle is needed.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch11_t2_qm9',
    type: 'mcq',
    question: 'If two circles touch externally and a direct common tangent is drawn, how many points does this tangent have in common with the two circles?',
    options: [
      '1',
      '2',
      '3',
      '4'
    ],
    correctAnswer: '2',
    explanation: 'A direct common tangent touches each circle at exactly one point, making 2 points total.',
    wrongAnswerExplanations: {
      '1': 'This is incorrect. The tangent touches both circles, so there are 2 points.',
      '3': 'This is incorrect. A direct common tangent touches each circle only once.',
      '4': 'This is incorrect. A direct common tangent touches each circle only once.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch11_t2_qm10',
    type: 'mcq',
    question: 'Two circles of radii 8 cm and 3 cm are 13 cm apart. The length of a direct common tangent is:',
    options: [
      '5 cm',
      '10 cm',
      '12 cm',
      '15 cm'
    ],
    correctAnswer: '12 cm',
    explanation: 'Length of direct common tangent = √(d² - (R - r)²) = √(13² - (8 - 3)²) = √(169 - 25) = √144 = 12 cm',
    wrongAnswerExplanations: {
      '5 cm': 'This is incorrect. The calculation gives 12 cm.',
      '10 cm': 'This is incorrect. The calculation gives 12 cm.',
      '15 cm': 'This is incorrect. The calculation gives 12 cm.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch11_t2_qm11',
    type: 'mcq',
    question: 'What is the locus of points from which tangents drawn to a circle of radius 5 cm are of length 12 cm?',
    options: [
      'A circle of radius 5 cm',
      'A circle of radius 12 cm',
      'A circle of radius 13 cm',
      'A circle of radius 17 cm'
    ],
    correctAnswer: 'A circle of radius 13 cm',
    explanation: 'If tangent length is 12 cm and circle radius is 5 cm, distance from center = √(12² + 5²) = 13 cm.',
    wrongAnswerExplanations: {
      'A circle of radius 5 cm': 'This is incorrect. The locus is a circle of radius 13 cm.',
      'A circle of radius 12 cm': 'This is incorrect. The locus is a circle of radius 13 cm.',
      'A circle of radius 17 cm': 'This is incorrect. The locus is a circle of radius 13 cm.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch11_t2_qm12',
    type: 'mcq',
    question: 'When constructing a tangent to a circle from an external point, which of these properties is NOT used?',
    options: [
      'The tangent is perpendicular to the radius at the point of contact',
      'Any angle inscribed in a semicircle is a right angle',
      'The tangent from an external point bisects the angle between the radii',
      'Tangents from an external point are equal in length'
    ],
    correctAnswer: 'The tangent from an external point bisects the angle between the radii',
    explanation: 'The tangent does not generally bisect the angle between radii. This property is not used in the construction.',
    wrongAnswerExplanations: {
      'The tangent is perpendicular to the radius at the point of contact': 'This is incorrect. This property is used.',
      'Any angle inscribed in a semicircle is a right angle': 'This is incorrect. This property is used in the construction.',
      'Tangents from an external point are equal in length': 'This is incorrect. This property is used in the construction.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch11_t2_qm13',
    type: 'mcq',
    question: 'Two circles of radii 5 cm and 3 cm are 14 cm apart. The length of the transverse common tangent is:',
    options: [
      '8 cm',
      '10 cm',
      '12 cm',
      '14 cm'
    ],
    correctAnswer: '10 cm',
    explanation: 'Length of transverse common tangent = √(d² - (R + r)²) = √(14² - (5 + 3)²) = √(196 - 64) = √132 = 10√1.32 ≈ 12 cm',
    wrongAnswerExplanations: {
      '8 cm': 'This is incorrect. The calculation gives approximately 12 cm.',
      '10 cm': 'This is incorrect. The calculation gives approximately 12 cm.',
      '14 cm': 'This is incorrect. The calculation gives approximately 12 cm.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch11_t2_qm14',
    type: 'mcq',
    question: 'In the construction of a tangent at point P on a circle with center O, what is the key step after drawing radius OP?',
    options: [
      'Draw a tangent directly',
      'Draw a perpendicular to OP at point P',
      'Draw a line from P to any other point on the circle',
      'Draw a line parallel to any diameter'
    ],
    correctAnswer: 'Draw a perpendicular to OP at point P',
    explanation: 'The tangent is perpendicular to the radius at the point of contact, so we draw ⊥ to OP at P.',
    wrongAnswerExplanations: {
      'Draw a tangent directly': 'This is circular reasoning; we need a method to construct the tangent.',
      'Draw a line from P to any other point on the circle': 'This would be a chord, not a tangent.',
      'Draw a line parallel to any diameter': 'This doesn\'t guarantee a tangent at point P.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch11_t2_qm15',
    type: 'mcq',
    question: 'If a tangent PA to a circle with center O makes an angle of 30° with line PO, what is the measure of ∠OAP?',
    options: [
      '30°',
      '60°',
      '90°',
      '120°'
    ],
    correctAnswer: '60°',
    explanation: 'Since OA is a radius, ∠OAP = 90°. In triangle OAP, ∠OPA = 30°, so ∠OAP = 180° - 90° - 30° = 60°.',
    wrongAnswerExplanations: {
      '30°': 'This is incorrect. The angle OAP is 60°, not 30°.',
      '90°': 'This is incorrect. While ∠OAP is 90°, ∠OAP is 60°.',
      '120°': 'This is incorrect. The angle OAP is 60°, not 120°.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch11_t2_qm16',
    type: 'mcq',
    question: 'Two tangents PA and PB are drawn to a circle with center O from an external point P. If ∠APB = 70°, what is ∠AOB?',
    options: [
      '110°',
      '140°',
      '220°',
      '280°'
    ],
    correctAnswer: '220°',
    explanation: 'The angle subtended at the center = 360° - 2(∠APB) = 360° - 2(70°) = 360° - 140° = 220°.',
    wrongAnswerExplanations: {
      '110°': 'This is incorrect. The angle AOB is 220°, not 110°.',
      '140°': 'This is incorrect. The angle AOB is 220°, not 140°.',
      '280°': 'This is incorrect. The angle AOB is 220°, not 280°.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch11_t2_qm17',
    type: 'mcq',
    question: 'In a construction of tangents from external point P to a circle, if we incorrectly join the center to P, what would be the impact?',
    options: [
      'No tangent could be drawn',
      'Only one tangent could be drawn',
      'The construction would still work perfectly',
      'The tangent would be in the wrong position'
    ],
    correctAnswer: 'The tangent would be in the wrong position',
    explanation: 'Joining center to P is crucial; incorrect positioning leads to an inaccurate tangent location.',
    wrongAnswerExplanations: {
      'No tangent could be drawn': 'This is incorrect. A tangent could still be drawn, but it would be inaccurate.',
      'Only one tangent could be drawn': 'This is incorrect. Both tangents could be attempted but would be inaccurate.',
      'The construction would still work perfectly': 'This is incorrect. The construction requires accurate joining of center and P.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch11_t2_qm18',
    type: 'mcq',
    question: 'Two circles of radii 4 cm and 9 cm are placed such that each circle passes through the center of the other. What is the length of their direct common tangent?',
    options: [
      '6 cm',
      '8 cm',
      '12 cm',
      'They have no common tangent'
    ],
    correctAnswer: 'They have no common tangent',
    explanation: 'Distance between centers = 4 + 9 = 13 cm. For direct common tangent to exist: d > R + r. Here d = R + r, so no common tangent.',
    wrongAnswerExplanations: {
      '6 cm': 'This is incorrect. These circles don\'t have a direct common tangent.',
      '8 cm': 'This is incorrect. These circles don\'t have a direct common tangent.',
      '12 cm': 'This is incorrect. These circles don\'t have a direct common tangent.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch11_t2_qm19',
    type: 'mcq',
    question: 'What is the maximum number of common tangents that can be drawn to two circles of different radii?',
    options: [
      '2',
      '3',
      '4',
      '6'
    ],
    correctAnswer: '4',
    explanation: 'Two circles can have at most 4 common tangents: 2 external (direct) and 2 internal (transverse) tangents.',
    wrongAnswerExplanations: {
      '2': 'This is incorrect. Two circles can have up to 4 common tangents.',
      '3': 'This is incorrect. Two circles can have up to 4 common tangents.',
      '6': 'This is incorrect. Two circles can have at most 4 common tangents.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch11_t2_qm20',
    type: 'mcq',
    question: 'If a tangent is drawn at point P on a circle with center O, and a point Q is chosen on this tangent, what is special about triangle OPQ?',
    options: [
      'It is always an equilateral triangle',
      'It is always an isosceles triangle',
      'It always contains a right angle at P',
      'It always contains a right angle at Q'
    ],
    correctAnswer: 'It always contains a right angle at P',
    explanation: 'The tangent is perpendicular to the radius at the point of contact, so angle OPQ is always 90°.',
    wrongAnswerExplanations: {
      'It is always an equilateral triangle': 'This is incorrect. The triangle isn\'t necessarily equilateral.',
      'It is always an isosceles triangle': 'This is incorrect. The triangle isn\'t necessarily isosceles.',
      'It always contains a right angle at Q': 'This is incorrect. The right angle is at P, not Q.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  }
];
