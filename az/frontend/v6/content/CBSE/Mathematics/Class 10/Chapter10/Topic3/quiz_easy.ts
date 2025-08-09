import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
  {
    id: 'cl10_ch10_t3_qe1',
    type: 'mcq',
    question: 'What is the angle between a tangent and the radius drawn to the point of contact?',
    options: ['30°', '45°', '60°', '90°'],
    correctAnswer: '90°',
    explanation: 'The tangent at any point on a circle is perpendicular to the radius through the point of contact. ⊥',
    wrongAnswerExplanations: {
      '30°': 'The angle is always 90° (perpendicular), not 30°.',
      '45°': 'The angle is always 90° (perpendicular), not 45°.',
      '60°': 'The angle is always 90° (perpendicular), not 60°.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch10_t3_qe2',
    type: 'mcq',
    question: 'How many tangents can be drawn to a circle from a point on the circle?',
    options: ['0', '1', '2', 'Infinite'],
    correctAnswer: '1',
    explanation: 'Only one tangent can be drawn at a point on the circle, perpendicular to the radius at that point. 🔵',
    wrongAnswerExplanations: {
      '0': 'There is always exactly one tangent at any point on the circle.',
      '2': 'Only one tangent can be drawn at a point on the circle.',
      'Infinite': 'Only one tangent can be drawn at a point on the circle.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 45
  },
  {
    id: 'cl10_ch10_t3_qe3',
    type: 'mcq',
    question: 'What is the maximum number of tangents that can be drawn to a circle from an external point?',
    options: ['1', '2', '3', '4'],
    correctAnswer: '2',
    explanation: 'From any external point, exactly two tangents can be drawn to a circle. 🔢',
    wrongAnswerExplanations: {
      '1': 'From an external point, two tangents can be drawn, not one.',
      '3': 'Only two tangents can be drawn from an external point, not three.',
      '4': 'Only two tangents can be drawn from an external point, not four.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 45
  },
  {
    id: 'cl10_ch10_t3_qe4',
    type: 'mcq',
    question: 'If two tangents are drawn from an external point to a circle, what will be the relationship between their lengths?',
    options: ['Unequal', 'Equal', 'One is twice the other', 'No relationship'],
    correctAnswer: 'Equal',
    explanation: 'The lengths of two tangents drawn from an external point to a circle are always equal. ⚖️',
    wrongAnswerExplanations: {
      'Unequal': 'The lengths are always equal due to properties of tangents.',
      'One is twice the other': 'The lengths are always equal, not in any ratio.',
      'No relationship': 'There is a definite relationship: they are equal in length.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch10_t3_qe5',
    type: 'mcq',
    question: 'The line joining the center of a circle to the external point from which tangents are drawn is called:',
    options: ['Radius', 'Diameter', 'Chord', 'Secant'],
    correctAnswer: 'Secant',
    explanation: 'The line joining the center to an external point is a secant, not passing through the circle. 📏',
    wrongAnswerExplanations: {
      'Radius': 'A radius connects the center to a point on the circle, not an external point.',
      'Diameter': 'A diameter is a chord passing through the center, not connecting to external points.',
      'Chord': 'A chord connects two points on the circle, not extending to external points.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 45
  },
  {
    id: 'cl10_ch10_t3_qe6',
    type: 'mcq',
    question: 'How many tangents can be drawn to a circle from a point inside the circle?',
    options: ['0', '1', '2', 'Infinite'],
    correctAnswer: '0',
    explanation: 'No tangents can be drawn to a circle from any point inside the circle. 🚫',
    wrongAnswerExplanations: {
      '1': 'From an interior point, no tangent can be drawn to the circle.',
      '2': 'From an interior point, no tangent can be drawn to the circle.',
      'Infinite': 'From an interior point, no tangent can be drawn to the circle.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 45
  },
  {
    id: 'cl10_ch10_t3_qe7',
    type: 'mcq',
    question: 'If PA and PB are two tangents to a circle with center O from an external point P, then ∠APB is:',
    options: ['Acute angle', 'Right angle', 'Obtuse angle', 'Depends on the position of P'],
    correctAnswer: 'Obtuse angle',
    explanation: 'If PA and PB are tangents from P, then ∠APB is obtuse because tangent points A and B lie on opposite sides of OP. 📐',
    wrongAnswerExplanations: {
      'Acute angle': 'The angle APB is always obtuse because of the tangent property.',
      'Right angle': 'The angle APB is always obtuse, not right.',
      'Depends on the position of P': 'The angle is always obtuse regardless of P\'s position.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch10_t3_qe8',
    type: 'mcq',
    question: 'If PT is a tangent to a circle with center O and radius 5 cm, and if OP = 13 cm, what is the length of PT?',
    options: ['8 cm', '12 cm', '13 cm', '5 cm'],
    correctAnswer: '12 cm',
    explanation: 'Using the Pythagorean theorem in right triangle OPT: OP² = OT² + PT², so PT = √(13² - 5²) = 12 cm. 📐',
    wrongAnswerExplanations: {
      '8 cm': 'Using Pythagoras theorem, PT = √(13² - 5²) = 12 cm, not 8 cm.',
      '13 cm': 'PT is not equal to OP. Using Pythagoras theorem, PT = 12 cm.',
      '5 cm': 'PT is not equal to the radius. Using Pythagoras theorem, PT = 12 cm.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch10_t3_qe9',
    type: 'mcq',
    question: 'The tangent at a point on a circle is:',
    options: ['Always parallel to the radius', 'Always perpendicular to the radius', 'Forms a 45° angle with the radius', 'Always passes through the center'],
    correctAnswer: 'Always perpendicular to the radius',
    explanation: 'The tangent at any point on a circle is perpendicular to the radius drawn to that point. ⊥',
    wrongAnswerExplanations: {
      'Always parallel to the radius': 'The tangent is perpendicular to the radius, not parallel.',
      'Forms a 45° angle with the radius': 'The tangent forms a 90° angle with the radius, not 45°.',
      'Always passes through the center': 'The tangent never passes through the center of the circle.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 45
  },
  {
    id: 'cl10_ch10_t3_qe10',
    type: 'mcq',
    question: 'Which of the following is NOT a property of tangents to a circle?',
    options: ['Perpendicular to radius at point of contact', 'Two tangents from external point are equal in length', 'Passes through center of circle', 'Forms right angle with radius'],
    correctAnswer: 'Passes through center of circle',
    explanation: 'A tangent never passes through the center of a circle; it just touches the circle at exactly one point. 🚫',
    wrongAnswerExplanations: {
      'Perpendicular to radius at point of contact': 'This is a true property of tangents.',
      'Two tangents from external point are equal in length': 'This is a true property of tangents.',
      'Forms right angle with radius': 'This is a true property of tangents (same as first option).'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch10_t3_qe11',
    type: 'mcq',
    question: 'The distance from the center of a circle to a tangent line is:',
    options: ['Equal to the radius', 'Less than the radius', 'Greater than the radius', 'Twice the radius'],
    correctAnswer: 'Equal to the radius',
    explanation: 'The perpendicular distance from the center to any tangent equals the radius of the circle. 📏',
    wrongAnswerExplanations: {
      'Less than the radius': 'The distance is exactly equal to the radius, not less.',
      'Greater than the radius': 'The distance is exactly equal to the radius, not greater.',
      'Twice the radius': 'The distance is exactly equal to the radius, not twice of it.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 45
  },
  {
    id: 'cl10_ch10_t3_qe12',
    type: 'mcq',
    question: 'If two circles touch each other, how many common tangents do they have?',
    options: ['1', '2', '3', '4'],
    correctAnswer: '3',
    explanation: 'Two circles that touch each other (either internally or externally) have exactly 3 common tangents. 🔄',
    wrongAnswerExplanations: {
      '1': 'There are 3 common tangents for touching circles, not just 1.',
      '2': 'There are 3 common tangents for touching circles, not just 2.',
      '4': 'There are 3 common tangents for touching circles, not 4.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch10_t3_qe13',
    type: 'mcq',
    question: 'In a right triangle, if the hypotenuse is a diameter of a circle, where will the vertex of the right angle be located?',
    options: ['Inside the circle', 'Outside the circle', 'On the circle', 'Cannot be determined'],
    correctAnswer: 'On the circle',
    explanation: 'If the hypotenuse of a right triangle is a diameter of a circle, the vertex of the right angle always lies on the circle. 🔵',
    wrongAnswerExplanations: {
      'Inside the circle': 'The converse of Thales\' theorem states the vertex must be on the circle.',
      'Outside the circle': 'The converse of Thales\' theorem states the vertex must be on the circle.',
      'Cannot be determined': 'It can be determined; the vertex is always on the circle.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch10_t3_qe14',
    type: 'mcq',
    question: 'If a tangent PQ at a point P of a circle of radius 5 cm meets a line through the center O at a point Q so that OQ = 12 cm, then PQ is:',
    options: ['5 cm', '7 cm', '12 cm', '13 cm'],
    correctAnswer: '13 cm',
    explanation: 'Since OP ⊥ PQ and OP = 5 cm, OQ² = OP² + PQ², so PQ = √(OQ² - OP²) = √(144 - 25) = 13 cm. 📏',
    wrongAnswerExplanations: {
      '5 cm': 'PQ is not equal to the radius. By Pythagoras theorem, PQ = 13 cm.',
      '7 cm': 'Using Pythagoras theorem, PQ = √(144 - 25) = 13 cm, not 7 cm.',
      '12 cm': 'PQ is not equal to OQ. By Pythagoras theorem, PQ = 13 cm.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch10_t3_qe15',
    type: 'mcq',
    question: 'Two concentric circles have radii 3 cm and 5 cm. The length of a tangent to the inner circle from a point on the outer circle is:',
    options: ['3 cm', '4 cm', '5 cm', '8 cm'],
    correctAnswer: '4 cm',
    explanation: 'Using Pythagoras theorem, the length of tangent = √(5² - 3²) = 4 cm. 🔢',
    wrongAnswerExplanations: {
      '3 cm': 'The tangent length is not equal to the inner radius. It\'s 4 cm by Pythagoras theorem.',
      '5 cm': 'The tangent length is not equal to the outer radius. It\'s 4 cm by Pythagoras theorem.',
      '8 cm': 'The tangent length is 4 cm by Pythagoras theorem, not 8 cm.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch10_t3_qe16',
    type: 'mcq',
    question: 'What is the angle between two tangents drawn from an external point to a circle?',
    options: ['Always 90°', 'Less than 180°', 'Greater than 180°', 'Depends on the position of the point'],
    correctAnswer: 'Less than 180°',
    explanation: 'The angle between two tangents drawn from an external point is always less than 180°. 📐',
    wrongAnswerExplanations: {
      'Always 90°': 'The angle isn\'t always 90°; it varies based on the distance from the center.',
      'Greater than 180°': 'The angle is always less than 180°, not greater.',
      'Depends on the position of the point': 'While the exact angle varies, it\'s always less than 180°.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch10_t3_qe17',
    type: 'mcq',
    question: 'If a circle has radius 6 cm, and a tangent is drawn at a point on the circle, what is the distance from the center to this tangent?',
    options: ['3 cm', '6 cm', '12 cm', 'Cannot be determined'],
    correctAnswer: '6 cm',
    explanation: 'The distance from the center to a tangent equals the radius of the circle, which is 6 cm. 📏',
    wrongAnswerExplanations: {
      '3 cm': 'The distance equals the radius (6 cm), not half of it.',
      '12 cm': 'The distance equals the radius (6 cm), not twice of it.',
      'Cannot be determined': 'It can be determined; the distance equals the radius (6 cm).'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 45
  },
  {
    id: 'cl10_ch10_t3_qe18',
    type: 'mcq',
    question: 'Which of the following statements is true about tangents to a circle?',
    options: ['A tangent intersects a circle at exactly two points', 'A tangent is always parallel to a radius', 'The tangent at a point makes equal angles with all radii', 'A tangent touches the circle at exactly one point'],
    correctAnswer: 'A tangent touches the circle at exactly one point',
    explanation: 'By definition, a tangent to a circle touches the circle at exactly one point. 🔵',
    wrongAnswerExplanations: {
      'A tangent intersects a circle at exactly two points': 'A tangent touches at exactly one point; a secant intersects at two points.',
      'A tangent is always parallel to a radius': 'A tangent is perpendicular to the radius at the point of contact, not parallel.',
      'The tangent at a point makes equal angles with all radii': 'A tangent is perpendicular only to the radius at the point of contact.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch10_t3_qe19',
    type: 'mcq',
    question: 'The tangent at point P on a circle and a diameter AB are perpendicular to each other. If P is not at A or B, then ∠APB is:',
    options: ['30°', '45°', '60°', '90°'],
    correctAnswer: '90°',
    explanation: 'If the tangent at P is perpendicular to diameter AB, then P must be at the endpoint of a diameter perpendicular to AB, making ∠APB = 90°. 📐',
    wrongAnswerExplanations: {
      '30°': 'Due to the perpendicularity condition, ∠APB must be 90°, not 30°.',
      '45°': 'Due to the perpendicularity condition, ∠APB must be 90°, not 45°.',
      '60°': 'Due to the perpendicularity condition, ∠APB must be 90°, not 60°.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch10_t3_qe20',
    type: 'mcq',
    question: 'If PA and PB are tangents to a circle from external point P, and O is the center of the circle, then quadrilateral OAPB is a:',
    options: ['Square', 'Rectangle', 'Kite', 'Rhombus'],
    correctAnswer: 'Kite',
    explanation: 'OAPB is a kite because OA = OB (both are radii) and PA = PB (tangents from the same external point). 🪁',
    wrongAnswerExplanations: {
      'Square': 'It\'s not a square as all sides are not equal and not all angles are 90°.',
      'Rectangle': 'It\'s not a rectangle as all angles are not 90°.',
      'Rhombus': 'It\'s not a rhombus as all four sides are not equal.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  }
];
