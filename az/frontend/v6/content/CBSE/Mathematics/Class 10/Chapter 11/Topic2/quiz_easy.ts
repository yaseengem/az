import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
  {
    id: 'cl10_ch11_t2_qe1',
    type: 'mcq',
    question: 'From a point outside a circle, how many tangents can be drawn to the circle?',
    options: [
      'Only one',
      'Two',
      'Three',
      'Infinite'
    ],
    correctAnswer: 'Two',
    explanation: 'From any external point, exactly two tangents can be drawn to a circle.',
    wrongAnswerExplanations: {
      'Only one': 'This is incorrect. From an external point, we can always draw two tangents.',
      'Three': 'This is incorrect. Only two tangents can be drawn from an external point.',
      'Infinite': 'This is incorrect. The number of tangents from an external point is limited to two.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch11_t2_qe2',
    type: 'mcq',
    question: 'The tangent to a circle at a point is ________ to the radius at that point.',
    options: [
      'Parallel',
      'Perpendicular',
      'Equal',
      'At 45°'
    ],
    correctAnswer: 'Perpendicular',
    explanation: 'The tangent at any point on a circle is perpendicular to the radius at that point.',
    wrongAnswerExplanations: {
      'Parallel': 'This is incorrect. The tangent is perpendicular, not parallel to the radius.',
      'Equal': 'This is incorrect. "Equal" doesn\'t describe the relationship between lines.',
      'At 45°': 'This is incorrect. The angle is 90°, not 45°.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 45
  },
  {
    id: 'cl10_ch11_t2_qe3',
    type: 'mcq',
    question: 'If PQ and PR are two tangents to a circle from an external point P, then:',
    options: [
      'PQ > PR',
      'PQ < PR',
      'PQ = PR',
      'The relationship depends on the radius'
    ],
    correctAnswer: 'PQ = PR',
    explanation: 'Tangents drawn from an external point to a circle are equal in length.',
    wrongAnswerExplanations: {
      'PQ > PR': 'This is incorrect. The tangent lengths are equal.',
      'PQ < PR': 'This is incorrect. The tangent lengths are equal.',
      'The relationship depends on the radius': 'This is incorrect. Tangent lengths are always equal regardless of radius.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch11_t2_qe4',
    type: 'mcq',
    question: 'What is the number of tangents that can be drawn from a point on the circle?',
    options: [
      'Zero',
      'One',
      'Two',
      'Infinite'
    ],
    correctAnswer: 'One',
    explanation: 'From a point on the circle, only one tangent can be drawn (at that point itself).',
    wrongAnswerExplanations: {
      'Zero': 'This is incorrect. One tangent can be drawn at any point on the circle.',
      'Two': 'This is incorrect. Only one tangent is possible from a point on the circle.',
      'Infinite': 'This is incorrect. Only one tangent is possible from a point on the circle.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 45
  },
  {
    id: 'cl10_ch11_t2_qe5',
    type: 'mcq',
    question: 'In the construction of a tangent to a circle from an external point, what is the key step?',
    options: [
      'Drawing a perpendicular bisector',
      'Drawing a line joining the center to the external point',
      'Constructing an angle bisector',
      'Drawing parallel lines'
    ],
    correctAnswer: 'Drawing a line joining the center to the external point',
    explanation: 'First we join the center to the external point, then construct tangents using right triangles.',
    wrongAnswerExplanations: {
      'Drawing a perpendicular bisector': 'While used in the process, this isn\'t the initial key step.',
      'Constructing an angle bisector': 'Angle bisector isn\'t the key step in tangent construction.',
      'Drawing parallel lines': 'Parallel lines aren\'t directly used in tangent construction.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch11_t2_qe6',
    type: 'mcq',
    question: 'If a circle has a radius of 5 cm, and a tangent is drawn from a point 13 cm away from the center, what is the length of the tangent?',
    options: [
      '8 cm',
      '12 cm',
      '13 cm',
      '15 cm'
    ],
    correctAnswer: '12 cm',
    explanation: 'Using the Pythagorean theorem: √(13² - 5²) = √(169 - 25) = √144 = 12 cm',
    wrongAnswerExplanations: {
      '8 cm': 'This is incorrect. The correct calculation gives 12 cm.',
      '13 cm': 'This is the distance from center to the external point, not the tangent length.',
      '15 cm': 'This is incorrect. The correct calculation gives 12 cm.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch11_t2_qe7',
    type: 'mcq',
    question: 'The tangent at any point on a circle is unique. This statement is:',
    options: [
      'True',
      'False',
      'True only for certain circles',
      'True only at particular points'
    ],
    correctAnswer: 'True',
    explanation: 'At any point on a circle, exactly one tangent can be drawn, making it unique.',
    wrongAnswerExplanations: {
      'False': 'This is incorrect. The tangent is indeed unique at any point on a circle.',
      'True only for certain circles': 'This is incorrect. It applies to all circles.',
      'True only at particular points': 'This is incorrect. It applies to all points on any circle.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 45
  },
  {
    id: 'cl10_ch11_t2_qe8',
    type: 'mcq',
    question: 'What is the maximum number of tangents that can be drawn from a point inside a circle?',
    options: [
      'Zero',
      'One',
      'Two',
      'Infinite'
    ],
    correctAnswer: 'Zero',
    explanation: 'No tangent can be drawn to a circle from a point inside the circle.',
    wrongAnswerExplanations: {
      'One': 'This is incorrect. No tangent can be drawn from an internal point.',
      'Two': 'This is incorrect. No tangent can be drawn from an internal point.',
      'Infinite': 'This is incorrect. No tangent can be drawn from an internal point.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 45
  },
  {
    id: 'cl10_ch11_t2_qe9',
    type: 'mcq',
    question: 'If O is the center of a circle and PT is a tangent from an external point P, where T is the point of contact, then ∠OTP is:',
    options: [
      '45°',
      '60°',
      '90°',
      '180°'
    ],
    correctAnswer: '90°',
    explanation: 'The radius OT is perpendicular to the tangent PT, making ∠OTP = 90°.',
    wrongAnswerExplanations: {
      '45°': 'This is incorrect. The angle is 90° because radius and tangent are perpendicular.',
      '60°': 'This is incorrect. The angle is 90° because radius and tangent are perpendicular.',
      '180°': 'This is incorrect. This would mean the three points are collinear, which isn\'t true.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch11_t2_qe10',
    type: 'mcq',
    question: 'In the construction of a tangent to a circle from an external point P, if we join the center O and P, which important circle do we draw?',
    options: [
      'Circle with OP as diameter',
      'Circle with radius equal to OP',
      'Circle with center at P',
      'Circle with radius OP/2'
    ],
    correctAnswer: 'Circle with OP as diameter',
    explanation: 'We draw a circle with OP as diameter to find points where tangents touch the original circle.',
    wrongAnswerExplanations: {
      'Circle with radius equal to OP': 'This is incorrect. The circle has OP as diameter, not radius.',
      'Circle with center at P': 'This is incorrect. The auxiliary circle has center at the midpoint of OP.',
      'Circle with radius OP/2': 'While the radius is OP/2, the key feature is that OP is the diameter.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch11_t2_qe11',
    type: 'mcq',
    question: 'A tangent to a circle intersects the circle at:',
    options: [
      'Two points',
      'Exactly one point',
      'No point',
      'Infinite points'
    ],
    correctAnswer: 'Exactly one point',
    explanation: 'By definition, a tangent touches the circle at exactly one point.',
    wrongAnswerExplanations: {
      'Two points': 'This would be a secant line, not a tangent.',
      'No point': 'This would be a line completely outside the circle.',
      'Infinite points': 'This would mean the line coincides with the circle, which is impossible.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 45
  },
  {
    id: 'cl10_ch11_t2_qe12',
    type: 'mcq',
    question: 'If two tangents are drawn from an external point to a circle, the angle between the tangents is:',
    options: [
      'Always acute',
      'Always obtuse',
      'Always a right angle',
      'Can be acute or obtuse'
    ],
    correctAnswer: 'Can be acute or obtuse',
    explanation: 'The angle depends on the position of the external point relative to the circle.',
    wrongAnswerExplanations: {
      'Always acute': 'This is incorrect. The angle can be obtuse depending on the point\'s position.',
      'Always obtuse': 'This is incorrect. The angle can be acute depending on the point\'s position.',
      'Always a right angle': 'This is incorrect. The angle varies with the position of the external point.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch11_t2_qe13',
    type: 'mcq',
    question: 'What is the first step in constructing a tangent to a circle from an external point?',
    options: [
      'Draw any radius',
      'Join the external point to the center',
      'Draw a perpendicular to the radius',
      'Draw a parallel to any diameter'
    ],
    correctAnswer: 'Join the external point to the center',
    explanation: 'First join the external point to the center to establish the line of reference.',
    wrongAnswerExplanations: {
      'Draw any radius': 'This is not the first step in constructing a tangent from an external point.',
      'Draw a perpendicular to the radius': 'This comes later in the construction process.',
      'Draw a parallel to any diameter': 'This is not part of the standard construction process.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 45
  },
  {
    id: 'cl10_ch11_t2_qe14',
    type: 'mcq',
    question: 'If PA and PB are tangents to a circle from external point P, and O is the center, then quadrilateral PAOB is:',
    options: [
      'Always a square',
      'Always a rhombus',
      'Always a rectangle',
      'Always a cyclic quadrilateral'
    ],
    correctAnswer: 'Always a cyclic quadrilateral',
    explanation: 'The opposite angles are supplementary as ∠PAO and ∠PBO are right angles, making it cyclic.',
    wrongAnswerExplanations: {
      'Always a square': 'This is incorrect. It\'s not always a square as sides may not be equal.',
      'Always a rhombus': 'This is incorrect. The sides are not always equal.',
      'Always a rectangle': 'This is incorrect. All angles are not always 90°.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch11_t2_qe15',
    type: 'mcq',
    question: 'The distance of a tangent from the center of a circle is:',
    options: [
      'Equal to the radius',
      'Less than the radius',
      'Greater than the radius',
      'Equal to the diameter'
    ],
    correctAnswer: 'Equal to the radius',
    explanation: 'The perpendicular distance from the center to a tangent equals the radius.',
    wrongAnswerExplanations: {
      'Less than the radius': 'This is incorrect. The distance equals the radius.',
      'Greater than the radius': 'This is incorrect. The distance equals the radius.',
      'Equal to the diameter': 'This is incorrect. The distance equals the radius, not the diameter.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 45
  },
  {
    id: 'cl10_ch11_t2_qe16',
    type: 'mcq',
    question: 'In the construction of tangents from an external point P, if we draw a circle with OP as diameter (where O is the center), where will the tangent points lie?',
    options: [
      'On the circumference of the original circle',
      'On the circumference of the new circle',
      'At the intersection of both circles',
      'At the midpoint of OP'
    ],
    correctAnswer: 'At the intersection of both circles',
    explanation: 'The tangent points are where the two circles intersect.',
    wrongAnswerExplanations: {
      'On the circumference of the original circle': 'This is incomplete. They lie on both circles.',
      'On the circumference of the new circle': 'This is incomplete. They lie on both circles.',
      'At the midpoint of OP': 'This is incorrect. The midpoint is the center of the new circle.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch11_t2_qe17',
    type: 'mcq',
    question: 'If the center of a circle is at (0, 0) and its radius is 5 units, which of these points lies on a tangent to the circle at (3, 4)?',
    options: [
      '(4, 3)',
      '(4, -3)',
      '(-3, -4)',
      '(-4, 3)'
    ],
    correctAnswer: '(4, -3)',
    explanation: 'The tangent is perpendicular to the radius. Point (4, -3) lies on this perpendicular line.',
    wrongAnswerExplanations: {
      '(4, 3)': 'This is incorrect. This point doesn\'t lie on the tangent.',
      '(-3, -4)': 'This is incorrect. This point doesn\'t lie on the tangent.',
      '(-4, 3)': 'This is incorrect. This point doesn\'t lie on the tangent.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch11_t2_qe18',
    type: 'mcq',
    question: 'Which tool is essential for constructing a tangent to a circle at a given point on the circle?',
    options: [
      'Only a compass',
      'Only a ruler',
      'Both compass and ruler',
      'Protractor'
    ],
    correctAnswer: 'Both compass and ruler',
    explanation: 'Both compass (to mark distances and draw arcs) and ruler (to draw lines) are essential.',
    wrongAnswerExplanations: {
      'Only a compass': 'This is incorrect. A ruler is also needed to draw straight lines.',
      'Only a ruler': 'This is incorrect. A compass is also needed to draw arcs and mark distances.',
      'Protractor': 'This is incorrect. While useful for measuring angles, it\'s not essential for this construction.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 45
  },
  {
    id: 'cl10_ch11_t2_qe19',
    type: 'mcq',
    question: 'A tangent to a circle from point P touches the circle at point T. If the distance from P to the center is 17 cm and the radius is 8 cm, what is PT?',
    options: [
      '9 cm',
      '15 cm',
      '15.5 cm',
      '16 cm'
    ],
    correctAnswer: '15 cm',
    explanation: 'Using Pythagoras theorem: PT² = OP² - OT² = 17² - 8² = 289 - 64 = 225, so PT = 15 cm',
    wrongAnswerExplanations: {
      '9 cm': 'This is incorrect. The calculation gives 15 cm.',
      '15.5 cm': 'This is incorrect. The calculation gives 15 cm.',
      '16 cm': 'This is incorrect. The calculation gives 15 cm.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch11_t2_qe20',
    type: 'mcq',
    question: 'In a construction, after drawing a tangent to a circle, how can you verify it\'s truly a tangent?',
    options: [
      'Measure its length',
      'Check if it passes through the center',
      'Verify it\'s perpendicular to the radius at the point of contact',
      'Count how many points it has in common with the circle'
    ],
    correctAnswer: 'Verify it\'s perpendicular to the radius at the point of contact',
    explanation: 'A true tangent is always perpendicular to the radius at the point of contact.',
    wrongAnswerExplanations: {
      'Measure its length': 'This is incorrect. Length doesn\'t determine if a line is a tangent.',
      'Check if it passes through the center': 'This is incorrect. A tangent never passes through the center.',
      'Count how many points it has in common with the circle': 'While a tangent has one point, this is verification by definition.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  }
];
