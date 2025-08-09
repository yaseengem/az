import { QuizQuestion } from '../../../../../types';

export const questions: QuizQuestion[] = [
  {
    id: 'cl10_ch10_t1_qe1',
    type: 'mcq',
    question: 'A tangent to a circle intersects it in:',
    options: [
      'Exactly one point',
      'Exactly two points',
      'No point',
      'Infinite points'
    ],
    correctAnswer: 'Exactly one point',
    explanation: 'By definition, a tangent to a circle touches the circle at exactly one point called the point of tangency.',
    wrongAnswerExplanations: {
      'Exactly two points': 'A line that intersects a circle at two points is called a secant, not a tangent.',
      'No point': 'If a line doesn`t intersect a circle at all, it`s called a non-intersecting line, not a tangent.',
      'Infinite points': 'A circle has a finite number of points, so no line can intersect it at infinite points.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch10_t1_qe2',
    type: 'mcq',
    question: 'The tangent at any point of a circle is:',
    options: [
      'Perpendicular to the radius at the point of contact',
      'Parallel to the radius at the point of contact',
      'Makes a 45° angle with the radius at the point of contact',
      'Makes a 60° angle with the radius at the point of contact'
    ],
    correctAnswer: 'Perpendicular to the radius at the point of contact',
    explanation: 'A fundamental property of tangents is that they are perpendicular to the radius drawn to the point of tangency.',
    wrongAnswerExplanations: {
      'Parallel to the radius at the point of contact': 'If it were parallel, it would never intersect the circle.',
      'Makes a 45° angle with the radius at the point of contact': 'The angle is always 90° (perpendicular), not 45°.',
      'Makes a 60° angle with the radius at the point of contact': 'The angle is always 90° (perpendicular), not 60°.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch10_t1_qe3',
    type: 'mcq',
    question: 'If a tangent PQ at a point P of a circle of radius 5 cm meets a line through the center O at a point Q such that OQ = 12 cm, then the length of PQ is:',
    options: [
      '12 cm',
      '13 cm',
      '√119 cm',
      '5 cm'
    ],
    correctAnswer: '√119 cm',
    explanation: 'Using Pythagorean theorem in triangle OPQ where OP = 5 cm, OQ = 12 cm, and ∠OPQ = 90°, PQ = √(OQ² - OP²).',
    wrongAnswerExplanations: {
      '12 cm': 'This is the length of OQ, not PQ.',
      '13 cm': 'This would be true if OP and OQ were perpendicular, which they are not.',
      '5 cm': 'This is the radius of the circle, not the length of PQ.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch10_t1_qe4',
    type: 'mcq',
    question: 'The length of the tangent from a point at a distance of 17 cm from the center of a circle of radius 8 cm is:',
    options: [
      '15 cm',
      '9 cm',
      '√225 cm',
      '16 cm'
    ],
    correctAnswer: '15 cm',
    explanation: 'If d is the distance from the point to the center and r is the radius, the tangent length is √(d² - r²) = √(17² - 8²) = 15.',
    wrongAnswerExplanations: {
      '9 cm': 'This is the difference between 17 and 8, not the tangent length.',
      '√225 cm': 'This simplifies to 15 cm, which is correct in simplified form.',
      '16 cm': 'This calculation is incorrect.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch10_t1_qe5',
    type: 'mcq',
    question: 'Two tangents can be drawn from an external point to a circle. What is the angle between these tangents if the distance from the point to the center is twice the radius?',
    options: [
      '60°',
      '90°',
      '120°',
      '30°'
    ],
    correctAnswer: '60°',
    explanation: 'If d = 2r, the angle between tangents is 2sin⁻¹(r/d) = 2sin⁻¹(1/2) = 2 × 30° = 60°.',
    wrongAnswerExplanations: {
      '90°': 'This would be true if the distance from the point to the center were √2 times the radius.',
      '120°': 'The calculation is incorrect.',
      '30°': 'This is half of the correct angle.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 120
  },
  {
    id: 'cl10_ch10_t1_qe6',
    type: 'mcq',
    question: 'If AB is a diameter of a circle with center O, and C is a point on the circle, then ∠ACB is:',
    options: [
      'Acute angle',
      'Right angle',
      'Obtuse angle',
      'Straight angle'
    ],
    correctAnswer: 'Right angle',
    explanation: 'The angle in a semicircle is always 90° (right angle), as per the inscribed angle theorem.',
    wrongAnswerExplanations: {
      'Acute angle': 'The angle in a semicircle is exactly 90°, not less than 90°.',
      'Obtuse angle': 'The angle in a semicircle is exactly 90°, not greater than 90°.',
      'Straight angle': 'A straight angle is 180°, but the angle in a semicircle is 90°.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch10_t1_qe7',
    type: 'mcq',
    question: 'The tangent at a point on a circle is a:',
    options: [
      'Secant line',
      'Chord',
      'Straight line that touches the circle at exactly one point',
      'Diameter of the circle'
    ],
    correctAnswer: 'Straight line that touches the circle at exactly one point',
    explanation: 'By definition, a tangent is a straight line that touches the circle at exactly one point.',
    wrongAnswerExplanations: {
      'Secant line': 'A secant intersects the circle at two points, not one.',
      'Chord': 'A chord is a line segment whose endpoints lie on the circle.',
      'Diameter of the circle': 'A diameter passes through the center and has two points on the circle.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch10_t1_qe8',
    type: 'mcq',
    question: 'If TP and TQ are two tangents to a circle with center O from an external point T, then:',
    options: [
      'TP = TQ',
      'OP = OQ',
      'TP > TQ',
      'TP < TQ'
    ],
    correctAnswer: 'TP = TQ',
    explanation: 'Tangents from an external point to a circle are always equal in length. This is a proven theorem.',
    wrongAnswerExplanations: {
      'OP = OQ': 'These are radii of the circle, so they are equal, but not the answer to the question.',
      'TP > TQ': 'Tangents from an external point to a circle are equal, not unequal.',
      'TP < TQ': 'Tangents from an external point to a circle are equal, not unequal.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch10_t1_qe9',
    type: 'mcq',
    question: 'If PA and PB are two tangents drawn from a point P to a circle with center O, then ∠APB is:',
    options: [
      'Supplementary to ∠AOP',
      'Complementary to ∠AOP',
      'Equal to ∠AOP',
      'Twice of ∠AOP'
    ],
    correctAnswer: 'Supplementary to ∠AOP',
    explanation: '∠APB + ∠AOP = 180°, making them supplementary angles as per tangent properties.',
    wrongAnswerExplanations: {
      'Complementary to ∠AOP': 'Complementary angles sum to 90°, but these sum to 180°.',
      'Equal to ∠AOP': 'These angles are not equal; they`re supplementary.',
      'Twice of ∠AOP': 'The relationship is not a simple multiple; they`re supplementary.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch10_t1_qe10',
    type: 'mcq',
    question: 'A circle has radius 5 cm. The length of the tangent to this circle from a point 13 cm away from the center is:',
    options: [
      '12 cm',
      '13 cm',
      '5 cm',
      '8 cm'
    ],
    correctAnswer: '12 cm',
    explanation: 'For a point at distance d from center and circle of radius r, tangent length = √(d² - r²) = √(13² - 5²) = 12 cm.',
    wrongAnswerExplanations: {
      '13 cm': 'This is the distance from the point to the center, not the tangent length.',
      '5 cm': 'This is the radius of the circle, not the tangent length.',
      '8 cm': 'This is the difference between 13 and 5, not the tangent length.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch10_t1_qe11',
    type: 'mcq',
    question: 'If a line is tangent to a circle, which of the following statements is true?',
    options: [
      'The line contains a diameter of the circle',
      'The line is perpendicular to the radius at the point of contact',
      'The line passes through the center of the circle',
      'The line makes a 45° angle with the radius'
    ],
    correctAnswer: 'The line is perpendicular to the radius at the point of contact',
    explanation: 'A fundamental property of tangents: they are perpendicular to the radius at the point of tangency.',
    wrongAnswerExplanations: {
      'The line contains a diameter of the circle': 'A tangent doesn`t pass through the circle except at one point.',
      'The line passes through the center of the circle': 'A tangent never passes through the center of the circle.',
      'The line makes a 45° angle with the radius': 'The angle is always 90°, not 45°.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch10_t1_qe12',
    type: 'mcq',
    question: 'In a circle with center O, a chord AB and a diameter CD are perpendicular to each other. If the chord AB passes through the center, then:',
    options: [
      'AB is also a diameter',
      'AB < CD',
      'AB > CD',
      'AB and CD are equal'
    ],
    correctAnswer: 'AB is also a diameter',
    explanation: 'If a chord passes through the center of a circle, it is a diameter by definition.',
    wrongAnswerExplanations: {
      'AB < CD': 'Both are diameters, so they are equal, not unequal.',
      'AB > CD': 'Both are diameters, so they are equal, not unequal.',
      'AB and CD are equal': 'This is true, but the more specific answer is that AB is a diameter.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch10_t1_qe13',
    type: 'mcq',
    question: 'From a point P outside a circle with center O, two tangents PA and PB are drawn. If ∠APB = 60°, then ∠AOP is:',
    options: [
      '30°',
      '60°',
      '90°',
      '120°'
    ],
    correctAnswer: '120°',
    explanation: 'Since ∠APB + ∠AOP = 180° (supplementary), if ∠APB = 60°, then ∠AOP = 180° - 60° = 120°.',
    wrongAnswerExplanations: {
      '30°': 'This is incorrect. The angles ∠APB and ∠AOP are supplementary.',
      '60°': 'This is the value of ∠APB, not ∠AOP.',
      '90°': 'This is incorrect. The sum ∠APB + ∠AOP = 180°, so ∠AOP = 120°.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch10_t1_qe14',
    type: 'mcq',
    question: 'A tangent to a circle of radius 4 cm makes an angle of 30° with a line. The distance from the center of the circle to the line is:',
    options: [
      '4 cm',
      '2 cm',
      '8 cm',
      '4√3 cm'
    ],
    correctAnswer: '4√3 cm',
    explanation: 'If the tangent makes angle θ with a line, the distance from center to line is r/sin(θ) = 4/sin(30°) = 4/0.5 = 4√3 cm.',
    wrongAnswerExplanations: {
      '4 cm': 'This is the radius of the circle, not the distance from center to the line.',
      '2 cm': 'This calculation is incorrect.',
      '8 cm': 'This calculation is incorrect.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch10_t1_qe15',
    type: 'mcq',
    question: 'If PT is a tangent to a circle with center O and radius r, and P is at a distance d from O, the length of the tangent PT is:',
    options: [
      'd + r',
      'd - r',
      '√(d² + r²)',
      '√(d² - r²)'
    ],
    correctAnswer: '√(d² - r²)',
    explanation: 'By the Pythagorean theorem in the right-angled triangle OPT, PT = √(OP² - OT²) = √(d² - r²).',
    wrongAnswerExplanations: {
      'd + r': 'This is not the formula for tangent length.',
      'd - r': 'This is not the formula for tangent length.',
      '√(d² + r²)': 'This would give the hypotenuse of a right triangle with sides d and r, not the tangent length.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch10_t1_qe16',
    type: 'mcq',
    question: 'In a circle with center O, if a tangent at point P meets a line through O at point Q, then:',
    options: [
      'PQ is perpendicular to OQ',
      'PQ is perpendicular to OP',
      'OQ is perpendicular to OP',
      'PQ is parallel to OP'
    ],
    correctAnswer: 'PQ is perpendicular to OP',
    explanation: 'A tangent is always perpendicular to the radius at the point of contact, so PQ ⊥ OP.',
    wrongAnswerExplanations: {
      'PQ is perpendicular to OQ': 'This is not generally true.',
      'OQ is perpendicular to OP': 'This is not generally true.',
      'PQ is parallel to OP': 'A tangent can never be parallel to the radius at the point of tangency.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch10_t1_qe17',
    type: 'mcq',
    question: 'If two circles touch each other externally, how many common tangents do they have?',
    options: [
      '1',
      '2',
      '3',
      '4'
    ],
    correctAnswer: '3',
    explanation: 'Two circles touching externally have 3 common tangents: 1 direct common tangent and 2 transverse common tangents.',
    wrongAnswerExplanations: {
      '1': 'This is incorrect. There is more than one common tangent.',
      '2': 'This is insufficient. There are 3 common tangents.',
      '4': 'Two circles touching externally have only 3 common tangents, not 4.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch10_t1_qe18',
    type: 'mcq',
    question: 'In a circle of radius 5 cm, a chord is at a distance of 4 cm from the center. The length of the chord is:',
    options: [
      '3 cm',
      '6 cm',
      '8 cm',
      '10 cm'
    ],
    correctAnswer: '6 cm',
    explanation: 'If a chord is at distance d from center and radius is r, chord length = 2√(r² - d²) = 2√(25 - 16) = 2√9 = 6 cm.',
    wrongAnswerExplanations: {
      '3 cm': 'This would be half the correct answer.',
      '8 cm': 'This calculation is incorrect.',
      '10 cm': 'This would be the diameter of the circle, not the chord length.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 90
  },
  {
    id: 'cl10_ch10_t1_qe19',
    type: 'mcq',
    question: 'If two circles intersect, the number of common tangents they can have is:',
    options: [
      '1',
      '2',
      '3',
      '4'
    ],
    correctAnswer: '2',
    explanation: 'When two circles intersect, they have exactly 2 common tangents (both transverse).',
    wrongAnswerExplanations: {
      '1': 'This is incorrect. Intersecting circles have 2 common tangents.',
      '3': 'Circles that touch externally have 3 common tangents, not intersecting circles.',
      '4': 'Two circles that do not intersect or contain one another have 4 common tangents.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl10_ch10_t1_qe20',
    type: 'mcq',
    question: 'If two tangents are drawn to a circle from an external point, which of the following is true?',
    options: [
      'The tangents are equal in length',
      'The tangents are perpendicular to each other',
      'The tangents form an isosceles triangle with the center',
      'The tangents form a right-angled triangle with the diameter'
    ],
    correctAnswer: 'The tangents are equal in length',
    explanation: 'Tangents drawn to a circle from an external point are always equal in length - a fundamental theorem.',
    wrongAnswerExplanations: {
      'The tangents are perpendicular to each other': 'This is not generally true; it depends on the position of the external point.',
      'The tangents form an isosceles triangle with the center': 'The triangle formed with the center is isosceles, but this isn`t about the tangents specifically.',
      'The tangents form a right-angled triangle with the diameter': 'This is not generally true.'
    },
    difficulty: 'easy',
    marks: 1,
    recommendedTime: 60
  }
];
