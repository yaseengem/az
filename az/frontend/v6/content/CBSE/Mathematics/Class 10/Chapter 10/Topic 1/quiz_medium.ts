import { QuizQuestion } from '../../../../../types';

export const questions: QuizQuestion[] = [
  {
    id: 'cl10_ch10_t1_qm1',
    type: 'mcq',
    question: 'From a point P which is at a distance of 13 cm from the center O of a circle of radius 5 cm, two tangents PQ and PR are drawn to the circle. The area of the quadrilateral PQOR is:',
    options: [
      '30 cm²',
      '60 cm²',
      '65 cm²',
      '85 cm²'
    ],
    correctAnswer: '60 cm²',
    explanation: 'Using tangent properties and right triangles, area = (PQ × OQ)/2 + (PR × OR)/2 = (12 × 5 × 2)/2 = 60 cm².',
    wrongAnswerExplanations: {
      '30 cm²': 'This calculation is incomplete; it considers only half of the quadrilateral.',
      '65 cm²': 'This calculation is incorrect.',
      '85 cm²': 'This calculation is incorrect.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch10_t1_qm2',
    type: 'mcq',
    question: 'In the figure, O is the center of the circle, PT is a tangent at P, and ∠TPO = 30°. If OP = 8 cm, what is the length of PT?',
    options: [
      '4 cm',
      '8 cm',
      '4√3 cm',
      '8√3 cm'
    ],
    correctAnswer: '8√3 cm',
    explanation: 'In right triangle POT, PT = OP × tan(30°) = 8 × tan(30°) = 8 × (1/√3) = 8/√3 × √3/√3 = 8√3/3 cm.',
    wrongAnswerExplanations: {
      '4 cm': 'This calculation is incorrect.',
      '8 cm': 'This is the length of OP, not PT.',
      '4√3 cm': 'This calculation is incorrect.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch10_t1_qm3',
    type: 'mcq',
    question: 'Two circles touch internally at point P. If AB is a chord of the larger circle passing through P and touching the smaller circle at point C, then:',
    options: [
      'AC = BC',
      'AC × BC = AB²',
      'AC × BC = AP × BP',
      'AP = BP'
    ],
    correctAnswer: 'AC × BC = AP × BP',
    explanation: 'By power of point theorem, for any chord through P, the product of segments equals AP×BP.',
    wrongAnswerExplanations: {
      'AC = BC': 'Not generally true; the chord doesn`t need to be bisected at C.',
      'AC × BC = AB²': 'This is incorrect; the relationship is with AP×BP, not AB².',
      'AP = BP': 'Not generally true; P is not necessarily the midpoint of AB.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 150
  },
  {
    id: 'cl10_ch10_t1_qm4',
    type: 'mcq',
    question: 'A circle has center O and radius r. From a point P outside the circle at a distance 2r from O, tangent PT is drawn to the circle. Find the ratio PT:PO.',
    options: [
      '1:2',
      '√3:2',
      '2:1',
      '3:2'
    ],
    correctAnswer: '√3:2',
    explanation: 'PT = √(PO² - r²) = √(4r² - r²) = √3r. So PT:PO = √3r:2r = √3:2.',
    wrongAnswerExplanations: {
      '1:2': 'This calculation is incorrect.',
      '2:1': 'This calculation is incorrect.',
      '3:2': 'This calculation is incorrect.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch10_t1_qm5',
    type: 'mcq',
    question: 'In the figure, two circles with centers O and O\' touch externally at T. If PQ is a direct common tangent to the circles touching them at P and Q respectively, then ∠PTO\' equals:',
    options: [
      '45°',
      '60°',
      '90°',
      '120°'
    ],
    correctAnswer: '90°',
    explanation: 'For circles touching externally, the common tangent at the point of contact is perpendicular to the line joining centers, so ∠PTO\' = 90°.',
    wrongAnswerExplanations: {
      '45°': 'This is incorrect; the angle is specifically 90°.',
      '60°': 'This is incorrect; the angle is specifically 90°.',
      '120°': 'This is incorrect; the angle is specifically 90°.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch10_t1_qm6',
    type: 'mcq',
    question: 'If PT is a tangent to a circle with center O at point P, and OT ⊥ PT, then:',
    options: [
      'PT = OT',
      'PT < OT',
      'PT > OT',
      'OT bisects ∠POT'
    ],
    correctAnswer: 'PT = OT',
    explanation: 'When OT ⊥ PT and PT is a tangent, OT is the perpendicular from O to PT, making T the foot of perpendicular and PT = OT.',
    wrongAnswerExplanations: {
      'PT < OT': 'This is incorrect; they are equal.',
      'PT > OT': 'This is incorrect; they are equal.',
      'OT bisects ∠POT': 'OT isn`t inside the angle POT; it`s outside the circle.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch10_t1_qm7',
    type: 'mcq',
    question: 'Two tangents PA and PB are drawn to a circle with center O from an external point P. If ∠APB = 70°, what is the measure of ∠AOP?',
    options: [
      '35°',
      '70°',
      '110°',
      '140°'
    ],
    correctAnswer: '110°',
    explanation: 'Since ∠APB + ∠AOP = 180° (supplementary), if ∠APB = 70°, then ∠AOP = 180° - 70° = 110°.',
    wrongAnswerExplanations: {
      '35°': 'This is half of ∠APB, not the value of ∠AOP.',
      '70°': 'This is ∠APB, not ∠AOP.',
      '140°': 'This calculation is incorrect.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch10_t1_qm8',
    type: 'mcq',
    question: 'A line touches a circle at point P. Through P, a chord PQ is drawn making an angle of 45° with the tangent. What is the measure of ∠OPQ, where O is the center of the circle?',
    options: [
      '45°',
      '90°',
      '135°',
      '180°'
    ],
    correctAnswer: '45°',
    explanation: 'Since the tangent is perpendicular to the radius (∠OPT = 90°) and the chord makes 45° with tangent, ∠OPQ = 90° - 45° = 45°.',
    wrongAnswerExplanations: {
      '90°': 'This is the angle between the tangent and radius, not between radius and chord.',
      '135°': 'This calculation is incorrect.',
      '180°': 'This is impossible; it would mean the chord lies along the diameter.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch10_t1_qm9',
    type: 'mcq',
    question: 'From a point P, two tangents PA and PB are drawn to a circle with center O and radius r. If PA = 12 cm and OP = 13 cm, the value of r is:',
    options: [
      '5 cm',
      '12 cm',
      '13 cm',
      '7 cm'
    ],
    correctAnswer: '5 cm',
    explanation: 'Using Pythagorean theorem in right triangle OPA: OP² = PA² + OA², so r = √(OP² - PA²) = √(13² - 12²) = 5 cm.',
    wrongAnswerExplanations: {
      '12 cm': 'This is the length of the tangent PA, not the radius.',
      '13 cm': 'This is the distance from P to center O, not the radius.',
      '7 cm': 'This calculation is incorrect.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch10_t1_qm10',
    type: 'mcq',
    question: 'A tangent PQ at a point P of a circle of radius 5 cm meets a line through the center O at a point Q such that OQ = 13 cm. The length of PQ is:',
    options: [
      '12 cm',
      '5 cm',
      '13 cm',
      '8 cm'
    ],
    correctAnswer: '12 cm',
    explanation: 'In right triangle OPQ, OP = 5 cm, OQ = 13 cm, ∠OPQ = 90°. Using Pythagorean theorem: PQ = √(OQ² - OP²) = √(169 - 25) = 12 cm.',
    wrongAnswerExplanations: {
      '5 cm': 'This is the radius of the circle, not PQ.',
      '13 cm': 'This is OQ, not PQ.',
      '8 cm': 'This is the difference between OQ and OP, not PQ.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch10_t1_qm11',
    type: 'mcq',
    question: 'Two circles of radii 5 cm and 3 cm are concentric. The length of a chord of the larger circle which touches the smaller circle is:',
    options: [
      '6 cm',
      '8 cm',
      '10 cm',
      '4 cm'
    ],
    correctAnswer: '8 cm',
    explanation: 'For concentric circles with radii R and r, the length of the chord of the larger circle that touches the smaller circle is 2√(R² - r²) = 2√(25 - 9) = 2√16 = 8 cm.',
    wrongAnswerExplanations: {
      '6 cm': 'This calculation is incorrect.',
      '10 cm': 'This is the diameter of the larger circle, not the chord length.',
      '4 cm': 'This is the difference between the radii, not the chord length.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch10_t1_qm12',
    type: 'mcq',
    question: 'In a circle with center O, AB is a chord and C is a point on the major arc AB. If ∠ACB = 30°, then ∠AOB equals:',
    options: [
      '30°',
      '60°',
      '90°',
      '120°'
    ],
    correctAnswer: '60°',
    explanation: 'By the inscribed angle theorem, the central angle is twice the inscribed angle, so ∠AOB = 2 × ∠ACB = 2 × 30° = 60°.',
    wrongAnswerExplanations: {
      '30°': 'This is the inscribed angle ∠ACB, not the central angle.',
      '90°': 'This calculation is incorrect.',
      '120°': 'This calculation is incorrect.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch10_t1_qm13',
    type: 'mcq',
    question: 'Two circles of radii 8 cm and 6 cm intersect, and the distance between their centers is 10 cm. The length of the common chord is:',
    options: [
      '12 cm',
      '10 cm',
      '8 cm',
      '6 cm'
    ],
    correctAnswer: '12 cm',
    explanation: 'Using the formula for common chord length: 2√[(s-a)(s-b)(s-c)(s-d)]/d where s=(a+b+c+d)/2 and a,b,c,d are radii and center distance combinations.',
    wrongAnswerExplanations: {
      '10 cm': 'This is the distance between centers, not the common chord length.',
      '8 cm': 'This is the radius of the larger circle, not the common chord length.',
      '6 cm': 'This is the radius of the smaller circle, not the common chord length.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 150
  },
  {
    id: 'cl10_ch10_t1_qm14',
    type: 'mcq',
    question: 'A circle touches the y-axis at the origin and passes through the point (2, 3). The coordinates of the center of the circle are:',
    options: [
      '(1, 0)',
      '(2, 0)',
      '(1, 1)',
      '(2, 1)'
    ],
    correctAnswer: '(1, 1)',
    explanation: 'Since the circle touches y-axis at origin, its center is at (r,0). Using the condition that (2,3) lies on the circle, we get center (1,1).',
    wrongAnswerExplanations: {
      '(1, 0)': 'This doesn`t satisfy the condition that (2,3) lies on the circle.',
      '(2, 0)': 'This doesn`t satisfy the condition that the circle touches the y-axis at origin.',
      '(2, 1)': 'This doesn`t satisfy either condition correctly.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 150
  },
  {
    id: 'cl10_ch10_t1_qm15',
    type: 'mcq',
    question: 'Two circles with centers O and O\' touch externally. A common tangent touches the circles at points P and Q respectively. If the radii of the circles are 4 cm and 6 cm, the length of PQ is:',
    options: [
      '√48 cm',
      '10 cm',
      '2 cm',
      '√24 cm'
    ],
    correctAnswer: '√48 cm',
    explanation: 'For externally touching circles with radii r and R, the length of common tangent segment is √(4rR) = √(4 × 4 × 6) = √96 = √48 × 2 = 4√3 cm.',
    wrongAnswerExplanations: {
      '10 cm': 'This is the sum of radii, not the common tangent length.',
      '2 cm': 'This is the difference of radii, not the common tangent length.',
      '√24 cm': 'This calculation is incorrect.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 150
  },
  {
    id: 'cl10_ch10_t1_qm16',
    type: 'mcq',
    question: 'The tangent drawn at a point P on a circle with center O makes an angle of 60° with a diameter through P. The measure of ∠POQ, where Q is the other end of the diameter, is:',
    options: [
      '30°',
      '60°',
      '120°',
      '180°'
    ],
    correctAnswer: '180°',
    explanation: 'Q is at the other end of diameter from P, so ∠POQ = 180° by definition, regardless of tangent angle.',
    wrongAnswerExplanations: {
      '30°': 'This is incorrect; points on a diameter always form a straight angle at the center.',
      '60°': 'This is the angle the tangent makes with the diameter, not ∠POQ.',
      '120°': 'This is incorrect; points on a diameter always form a straight angle at the center.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch10_t1_qm17',
    type: 'mcq',
    question: 'Two tangents are drawn to a circle with center O from an external point P. If the angle between the tangents is 60°, the measure of ∠POQ, where Q is the point of contact of one tangent, is:',
    options: [
      '30°',
      '60°',
      '120°',
      '150°'
    ],
    correctAnswer: '30°',
    explanation: 'Since triangle POQ is right-angled at Q (tangent ⊥ radius), and given the angle between tangents is 60°, ∠POQ = 30° using trigonometric properties.',
    wrongAnswerExplanations: {
      '60°': 'This is the angle between the tangents, not ∠POQ.',
      '120°': 'This calculation is incorrect.',
      '150°': 'This calculation is incorrect.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch10_t1_qm18',
    type: 'mcq',
    question: 'A chord of length 10 cm is drawn at a distance of 12 cm from the center of a circle. The radius of the circle is:',
    options: [
      '13 cm',
      '√244 cm',
      '17 cm',
      '√44 cm'
    ],
    correctAnswer: '13 cm',
    explanation: 'Using the formula r² = d² + (l/2)², where d is distance from center to chord and l is chord length, r = √(12² + 5²) = 13 cm.',
    wrongAnswerExplanations: {
      '√244 cm': 'This calculation is incorrect.',
      '17 cm': 'This calculation is incorrect.',
      '√44 cm': 'This calculation is incorrect.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch10_t1_qm19',
    type: 'mcq',
    question: 'If two circles intersect and the length of the common chord is 24 cm, and the distance between their centers is 25 cm, what are the radii of the circles if one radius is twice the other?',
    options: [
      '10 cm and 20 cm',
      '15 cm and 30 cm',
      '20 cm and 40 cm',
      '25 cm and 50 cm'
    ],
    correctAnswer: '20 cm and 40 cm',
    explanation: 'Using the formula for common chord and solving the equations with r₂ = 2r₁ and center distance = 25 cm, we get r₁ = 20 cm and r₂ = 40 cm.',
    wrongAnswerExplanations: {
      '10 cm and 20 cm': 'These radii don`t satisfy the given conditions.',
      '15 cm and 30 cm': 'These radii don`t satisfy the given conditions.',
      '25 cm and 50 cm': 'These radii don`t satisfy the given conditions.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 180
  },
  {
    id: 'cl10_ch10_t1_qm20',
    type: 'mcq',
    question: 'The number of tangents that can be drawn from a point to a circle is:',
    options: [
      'Zero, if the point is inside the circle',
      'One, if the point is on the circle',
      'Two, if the point is outside the circle',
      'All of the above'
    ],
    correctAnswer: 'All of the above',
    explanation: 'Zero tangents if point is inside, one tangent if point is on the circle (the tangent at that point), and two tangents if point is outside.',
    wrongAnswerExplanations: {
      'Zero, if the point is inside the circle': 'This is true, but incomplete.',
      'One, if the point is on the circle': 'This is true, but incomplete.',
      'Two, if the point is outside the circle': 'This is true, but incomplete.'
    },
    difficulty: 'medium',
    marks: 2,
    recommendedTime: 90
  }
];
