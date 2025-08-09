import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
  {
    id: 'cl10_ch10_t2_qe1',
    type: 'mcq',
    question: 'How many tangents can be drawn to a circle from an external point?',
    options: ['1', '2', '3', 'Infinite'],
    correctAnswer: '2',
    explanation: 'Exactly two tangents can be drawn to a circle from any external point. 🔢',
    wrongAnswerExplanations: {
      '1': 'We can always draw exactly 2 tangents, not 1.',
      '3': 'Only 2 tangents are possible from an external point, not 3.',
      'Infinite': 'Only 2 tangents are possible, not infinite.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 45
  },
  {
    id: 'cl10_ch10_t2_qe2',
    type: 'mcq',
    question: 'How many tangents can be drawn to a circle from a point on the circle?',
    options: ['0', '1', '2', 'Infinite'],
    correctAnswer: '1',
    explanation: 'Only one tangent can be drawn at any point on the circumference of a circle. 🔵',
    wrongAnswerExplanations: {
      '0': 'There is always exactly one tangent at any point on the circle.',
      '2': 'Only one tangent is possible at a point on the circle.',
      'Infinite': 'Only one tangent is possible at a point on the circle.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 45
  },
  {
    id: 'cl10_ch10_t2_qe3',
    type: 'mcq',
    question: 'From a point outside a circle, how many tangents can be drawn to the circle?',
    options: ['0', '1', '2', '3'],
    correctAnswer: '2',
    explanation: 'From any external point, exactly two tangents can be drawn to a circle. 📏',
    wrongAnswerExplanations: {
      '0': 'From an external point, 2 tangents can be drawn, not 0.',
      '1': 'From an external point, 2 tangents can be drawn, not 1.',
      '3': 'From an external point, 2 tangents can be drawn, not 3.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 45
  },
  {
    id: 'cl10_ch10_t2_qe4',
    type: 'mcq',
    question: 'How many tangents can be drawn to a circle from a point inside the circle?',
    options: ['0', '1', '2', 'Infinite'],
    correctAnswer: '0',
    explanation: 'No tangent can be drawn to a circle from any point inside the circle. 🚫',
    wrongAnswerExplanations: {
      '1': 'It\'s impossible to draw any tangent from a point inside a circle.',
      '2': 'It\'s impossible to draw any tangent from a point inside a circle.',
      'Infinite': 'It\'s impossible to draw any tangent from a point inside a circle.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 45
  },
  {
    id: 'cl10_ch10_t2_qe5',
    type: 'mcq',
    question: 'If two tangents are drawn from an external point to a circle, what is the relationship between their lengths?',
    options: ['They are equal', 'One is twice the other', 'They are unequal', 'Cannot be determined'],
    correctAnswer: 'They are equal',
    explanation: 'The lengths of two tangents drawn from an external point to a circle are always equal. ⚖️',
    wrongAnswerExplanations: {
      'One is twice the other': 'The lengths are always equal, not in any ratio.',
      'They are unequal': 'The lengths are always equal, not unequal.',
      'Cannot be determined': 'The lengths are always equal, so it can be determined.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch10_t2_qe6',
    type: 'mcq',
    question: 'If PA and PB are two tangents to a circle from an external point P, and O is the center, what special property does quadrilateral OAPB have?',
    options: ['It is a rectangle', 'It is a kite', 'It is a rhombus', 'It is a square'],
    correctAnswer: 'It is a kite',
    explanation: 'OAPB forms a kite because OA = OB (radii) and PA = PB (tangents from same point). 🪁',
    wrongAnswerExplanations: {
      'It is a rectangle': 'It\'s a kite because it has two pairs of adjacent equal sides.',
      'It is a rhombus': 'It\'s a kite, not a rhombus as all four sides aren\'t equal.',
      'It is a square': 'It\'s a kite, not a square as all angles aren\'t 90°.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch10_t2_qe7',
    type: 'mcq',
    question: 'If a circle has a radius of 5 cm and the distance from the external point to the center is 13 cm, what is the length of each tangent?',
    options: ['8 cm', '12 cm', '13 cm', '5 cm'],
    correctAnswer: '12 cm',
    explanation: 'Using Pythagoras theorem: PT² = OP² - OT² = 13² - 5² = 169 - 25 = 144, so PT = 12 cm. 📐',
    wrongAnswerExplanations: {
      '8 cm': 'Using Pythagoras theorem, PT = √(13² - 5²) = 12 cm, not 8 cm.',
      '13 cm': 'The tangent length is not equal to the distance to center. It\'s 12 cm.',
      '5 cm': 'The tangent length is not equal to the radius. It\'s 12 cm.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch10_t2_qe8',
    type: 'mcq',
    question: 'The direct common tangent to two circles:',
    options: ['Passes through both centers', 'Is perpendicular to the line of centers', 'Does not intersect the line of centers', 'Does not exist'],
    correctAnswer: 'Does not intersect the line of centers',
    explanation: 'Direct common tangents do not intersect the line joining the centers of the two circles. 📊',
    wrongAnswerExplanations: {
      'Passes through both centers': 'Tangents never pass through the center of a circle.',
      'Is perpendicular to the line of centers': 'Direct tangents are not perpendicular to the line of centers.',
      'Does not exist': 'Direct common tangents do exist for non-intersecting circles.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch10_t2_qe9',
    type: 'mcq',
    question: 'How many common tangents can be drawn to two circles if they intersect at two points?',
    options: ['0', '1', '2', '4'],
    correctAnswer: '2',
    explanation: 'Two intersecting circles have exactly two common tangents. 🔄',
    wrongAnswerExplanations: {
      '0': 'Intersecting circles have 2 common tangents, not 0.',
      '1': 'Intersecting circles have 2 common tangents, not 1.',
      '4': 'Intersecting circles have 2 common tangents, not 4.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch10_t2_qe10',
    type: 'mcq',
    question: 'How many common tangents can be drawn to two externally touching circles?',
    options: ['1', '2', '3', '4'],
    correctAnswer: '3',
    explanation: 'Two externally touching circles have three common tangents: one direct and two transverse. 🔢',
    wrongAnswerExplanations: {
      '1': 'Externally touching circles have 3 common tangents, not 1.',
      '2': 'Externally touching circles have 3 common tangents, not 2.',
      '4': 'Externally touching circles have 3 common tangents, not 4.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch10_t2_qe11',
    type: 'mcq',
    question: 'How many common tangents can be drawn to two separate circles (not touching)?',
    options: ['2', '3', '4', '6'],
    correctAnswer: '4',
    explanation: 'Two separate, non-touching circles have four common tangents: two direct and two transverse. 📏',
    wrongAnswerExplanations: {
      '2': 'Two separate circles have 4 common tangents, not 2.',
      '3': 'Two separate circles have 4 common tangents, not 3.',
      '6': 'Two separate circles have 4 common tangents, not 6.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch10_t2_qe12',
    type: 'mcq',
    question: 'How many common tangents can be drawn to two internally touching circles?',
    options: ['1', '2', '3', '4'],
    correctAnswer: '1',
    explanation: 'Two internally touching circles have exactly one common tangent at their point of contact. 🔄',
    wrongAnswerExplanations: {
      '2': 'Internally touching circles have only 1 common tangent, not 2.',
      '3': 'Internally touching circles have only 1 common tangent, not 3.',
      '4': 'Internally touching circles have only 1 common tangent, not 4.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch10_t2_qe13',
    type: 'mcq',
    question: 'How many common tangents can be drawn if one circle is inside another (not touching)?',
    options: ['0', '1', '2', '4'],
    correctAnswer: '0',
    explanation: 'When one circle is completely inside the other (without touching), they have no common tangents. 🚫',
    wrongAnswerExplanations: {
      '1': 'When one circle is inside another, there are no common tangents.',
      '2': 'When one circle is inside another, there are no common tangents.',
      '4': 'When one circle is inside another, there are no common tangents.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch10_t2_qe14',
    type: 'mcq',
    question: 'If tangents PA and PB from an external point P to a circle with center O are drawn, then ∠APB is:',
    options: ['Acute', 'Right angle', 'Obtuse', 'Straight angle'],
    correctAnswer: 'Obtuse',
    explanation: 'The angle APB formed by tangents PA and PB from external point P is always obtuse. 📐',
    wrongAnswerExplanations: {
      'Acute': 'The angle APB is always obtuse, not acute.',
      'Right angle': 'The angle APB is always obtuse, not a right angle.',
      'Straight angle': 'The angle APB is always obtuse, not a straight angle.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch10_t2_qe15',
    type: 'mcq',
    question: 'For two tangents from an external point P to a circle with center O, the angle ∠POA is:',
    options: ['Acute', 'Right angle', 'Obtuse', 'Straight angle'],
    correctAnswer: 'Right angle',
    explanation: 'If PA is tangent from P, then OA ⊥ PA (radius ⊥ tangent), so ∠POA is 90° (right angle). ⊥',
    wrongAnswerExplanations: {
      'Acute': 'The angle POA is always 90°, not acute.',
      'Obtuse': 'The angle POA is always 90°, not obtuse.',
      'Straight angle': 'The angle POA is always 90°, not a straight angle.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch10_t2_qe16',
    type: 'mcq',
    question: 'The number of tangents from a point at a distance of 5 cm from the center of a circle of radius 3 cm is:',
    options: ['0', '1', '2', 'Infinite'],
    correctAnswer: '2',
    explanation: 'Since the point is at a distance > radius (5 > 3), it\'s outside, so 2 tangents are possible. 🔢',
    wrongAnswerExplanations: {
      '0': 'As the point is outside the circle, 2 tangents can be drawn, not 0.',
      '1': 'As the point is outside the circle, 2 tangents can be drawn, not 1.',
      'Infinite': 'Only 2 tangents can be drawn from an external point, not infinite.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch10_t2_qe17',
    type: 'mcq',
    question: 'If two circles touch externally, the number of common tangents is:',
    options: ['1', '2', '3', '4'],
    correctAnswer: '3',
    explanation: 'Two externally touching circles have 3 common tangents: 1 direct (at point of contact) and 2 transverse. 🔄',
    wrongAnswerExplanations: {
      '1': 'Externally touching circles have 3 common tangents, not 1.',
      '2': 'Externally touching circles have 3 common tangents, not 2.',
      '4': 'Externally touching circles have 3 common tangents, not 4.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch10_t2_qe18',
    type: 'mcq',
    question: 'If two circles have radii 5 cm and 3 cm, and their centers are 10 cm apart, the number of common tangents is:',
    options: ['0', '2', '3', '4'],
    correctAnswer: '4',
    explanation: 'Since distance between centers (10) > sum of radii (8), the circles are separate with 4 common tangents. 📏',
    wrongAnswerExplanations: {
      '0': 'Separate circles have 4 common tangents, not 0.',
      '2': 'Separate circles have 4 common tangents, not 2.',
      '3': 'Separate circles have 4 common tangents, not 3.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch10_t2_qe19',
    type: 'mcq',
    question: 'If two circles have radii 5 cm and 3 cm, and their centers are 8 cm apart, the number of common tangents is:',
    options: ['1', '2', '3', '4'],
    correctAnswer: '3',
    explanation: 'Since distance between centers equals sum of radii (8 = 5 + 3), the circles touch externally with 3 tangents. 🔄',
    wrongAnswerExplanations: {
      '1': 'Externally touching circles have 3 common tangents, not 1.',
      '2': 'Externally touching circles have 3 common tangents, not 2.',
      '4': 'Externally touching circles have 3 common tangents, not 4.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch10_t2_qe20',
    type: 'mcq',
    question: 'If two circles have radii 8 cm and 3 cm, and their centers are 5 cm apart, the number of common tangents is:',
    options: ['0', '1', '2', '3'],
    correctAnswer: '1',
    explanation: 'Since distance between centers (5) = |8-3|, the circles touch internally with 1 common tangent. 🔄',
    wrongAnswerExplanations: {
      '0': 'Internally touching circles have 1 common tangent, not 0.',
      '2': 'Internally touching circles have 1 common tangent, not 2.',
      '3': 'Internally touching circles have 1 common tangent, not 3.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  }
];
