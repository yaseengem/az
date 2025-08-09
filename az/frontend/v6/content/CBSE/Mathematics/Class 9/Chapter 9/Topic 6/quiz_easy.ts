// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 9\Chapter9\Topic6\quiz_easy.ts
import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
  {
    id: 'cl9_ch9_t6_qe1',
    type: "mcq",
    question: 'What is a circle?',
    options: [
      'A collection of points equidistant from a fixed point',
      'A four-sided polygon with equal sides',
      'A three-sided polygon with equal angles',
      'A collection of points with varying distances from a fixed point'
    ],
    correctAnswer: 'A collection of points equidistant from a fixed point',
    explanation: 'A circle is defined as the collection of all points in a plane that are at a fixed distance (radius) from a fixed point (center). 📏⭕',
    wrongAnswerExplanations: {
      'A four-sided polygon with equal sides': 'This describes a rhombus, not a circle. A circle is not a polygon but a curved shape with all points equidistant from the center.',
      'A three-sided polygon with equal angles': 'This describes an equilateral triangle, not a circle. A circle has no straight sides or vertices.',
      'A collection of points with varying distances from a fixed point': 'By definition, all points on a circle must be at the same distance (the radius) from the center point.'
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl9_ch9_t6_qe2',
    type: "mcq",
    question: 'The perpendicular from the center of a circle to a chord:',
    options: [
      'Is equal to the radius',
      'Bisects the chord',
      'Is equal to the diameter',
      'Is always longer than the chord'
    ],
    correctAnswer: 'Bisects the chord',
    explanation: 'The perpendicular from the center of a circle to a chord bisects the chord. This is a fundamental property of circles. ✂️',
    wrongAnswerExplanations: {
      'Is equal to the radius': 'The perpendicular from center to chord is only equal to the radius if the chord is a diameter.',
      'Is equal to the diameter': 'The perpendicular from center to chord is always shorter than or equal to the radius, never equal to the diameter.',
      'Is always longer than the chord': 'The perpendicular from center to chord is typically shorter than the chord, except for special cases.'
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl9_ch9_t6_qe3',
    type: "mcq",
    question: 'What is the angle in a semicircle?',
    options: [
      '45°',
      '60°',
      '90°',
      '180°'
    ],
    correctAnswer: '90°',
    explanation: 'The angle in a semicircle is always 90° (a right angle). This is a special case of the inscribed angle theorem. 📐',
    wrongAnswerExplanations: {
      '45°': 'The angle in a semicircle is not 45°. This is a common misconception.',
      '60°': 'The angle in a semicircle is not 60°. This angle appears in equilateral triangles, not semicircles.',
      '180°': 'The angle in a semicircle is not 180°. A 180° angle would be a straight line, not an inscribed angle.'
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl9_ch9_t6_qe4',
    type: "mcq",
    question: 'In a cyclic quadrilateral, the sum of opposite angles is:',
    options: [
      '90°',
      '180°',
      '270°',
      '360°'
    ],
    correctAnswer: '180°',
    explanation: 'In a cyclic quadrilateral, the sum of opposite angles is 180° (supplementary). This is a key property of cyclic quadrilaterals. 🔄',
    wrongAnswerExplanations: {
      '90°': 'The sum of opposite angles in a cyclic quadrilateral is not 90°. That would make them complementary, not supplementary.',
      '270°': 'The sum of opposite angles in a cyclic quadrilateral is not 270°. This exceeds the supplementary angle measure.',
      '360°': 'The sum of opposite angles in a cyclic quadrilateral is not 360°. That is the sum of all four angles in any quadrilateral.'
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl9_ch9_t6_qe5',
    type: "mcq",
    question: 'If two tangents are drawn to a circle from an external point, then:',
    options: [
      'They are perpendicular to each other',
      'They are equal in length',
      'One is always longer than the other',
      'Their sum equals the diameter'
    ],
    correctAnswer: 'They are equal in length',
    explanation: 'Tangents drawn from an external point to a circle are equal in length. This is known as the equal tangents theorem. 📏',
    wrongAnswerExplanations: {
      'They are perpendicular to each other': 'Tangents from an external point are not necessarily perpendicular to each other. They form equal angles with the line joining the external point to the center.',
      'One is always longer than the other': 'Both tangents from an external point to a circle are equal in length, not of different lengths.',
      'Their sum equals the diameter': 'The sum of the two tangent lengths is not related to the diameter in this simple way.'
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl9_ch9_t6_qe6',
    type: "mcq",
    question: 'The angle subtended by an arc at the center of a circle is:',
    options: [
      'Equal to the angle subtended by the same arc at any point on the circle',
      'Half the angle subtended by the same arc at any point on the circle',
      'Twice the angle subtended by the same arc at any point on the circle',
      'Independent of the angle subtended by the same arc at any point on the circle'
    ],
    correctAnswer: 'Twice the angle subtended by the same arc at any point on the circle',
    explanation: 'The angle subtended by an arc at the center of a circle is twice the angle subtended by the same arc at any point on the remaining part of the circle. ×2️⃣',
    wrongAnswerExplanations: {
      'Equal to the angle subtended by the same arc at any point on the circle': 'The central angle is not equal to the inscribed angle, but twice its measure.',
      'Half the angle subtended by the same arc at any point on the circle': 'The central angle is twice, not half, the inscribed angle.',
      'Independent of the angle subtended by the same arc at any point on the circle': 'There is a clear relationship between central and inscribed angles, they are not independent.'
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 45
  },
  {
    id: 'cl9_ch9_t6_qe7',
    type: "mcq",
    question: 'Equal chords of a circle are:',
    options: [
      'Always on opposite sides of the center',
      'Always equidistant from the center',
      'Always parallel to each other',
      'Always perpendicular to the diameter'
    ],
    correctAnswer: 'Always equidistant from the center',
    explanation: 'Equal chords of a circle are equidistant from the center. This property follows from the perpendicular bisector property. 📏',
    wrongAnswerExplanations: {
      'Always on opposite sides of the center': 'Equal chords can be on any part of the circle, not necessarily on opposite sides of the center.',
      'Always parallel to each other': 'Equal chords are not necessarily parallel to each other. They can be at any orientation.',
      'Always perpendicular to the diameter': 'Equal chords are not necessarily perpendicular to any specific diameter.'
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl9_ch9_t6_qe8',
    type: "mcq",
    question: 'A tangent to a circle is:',
    options: [
      'Perpendicular to the radius at the point of contact',
      'Parallel to the radius at the point of contact',
      'Forms a 45° angle with the radius at the point of contact',
      'Always passes through the center'
    ],
    correctAnswer: 'Perpendicular to the radius at the point of contact',
    explanation: 'A tangent to a circle is perpendicular to the radius drawn to the point of contact. This is a fundamental property of tangents. 📐',
    wrongAnswerExplanations: {
      'Parallel to the radius at the point of contact': 'A tangent cannot be parallel to the radius at the point of contact; it must be perpendicular.',
      'Forms a 45° angle with the radius at the point of contact': 'A tangent always forms a 90° angle (perpendicular), not 45°, with the radius at the point of contact.',
      'Always passes through the center': 'A tangent never passes through the center of a circle; it touches the circle at exactly one point on the circumference.'
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl9_ch9_t6_qe9',
    type: "mcq",
    question: 'Which line segment in a circle is the longest?',
    options: [
      'Any chord',
      'The radius',
      'The diameter',
      'The tangent'
    ],
    correctAnswer: 'The diameter',
    explanation: 'The diameter is the longest line segment in a circle. It passes through the center and is twice the radius. 📏',
    wrongAnswerExplanations: {
      'Any chord': 'Not all chords are equal in length. The longest chord is the diameter.',
      'The radius': 'The radius is half the length of the diameter, so it cannot be the longest line segment.',
      'The tangent': 'A tangent is not a line segment within a circle; it only touches the circle at one point.'
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl9_ch9_t6_qe10',
    type: "mcq",
    question: 'Angles in the same segment of a circle are:',
    options: [
      'Always acute',
      'Always obtuse',
      'Equal',
      'Complementary'
    ],
    correctAnswer: 'Equal',
    explanation: 'Angles in the same segment of a circle are equal. This follows from the inscribed angle theorem. 🔄',
    wrongAnswerExplanations: {
      'Always acute': 'Angles in the same segment are not always acute; they can be obtuse in a minor segment.',
      'Always obtuse': 'Angles in the same segment are not always obtuse; they can be acute in a major segment.',
      'Complementary': 'Angles in the same segment are equal to each other, not necessarily complementary (adding to 90°).'
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl9_ch9_t6_qe11',
    type: "mcq",
    question: 'If a quadrilateral is cyclic, then:',
    options: [
      'All sides are equal',
      'All angles are equal',
      'Opposite angles are supplementary',
      'Diagonals are perpendicular'
    ],
    correctAnswer: 'Opposite angles are supplementary',
    explanation: 'If a quadrilateral is cyclic (can be inscribed in a circle), then its opposite angles are supplementary (sum to 180°). 📐',
    wrongAnswerExplanations: {
      'All sides are equal': 'A cyclic quadrilateral does not necessarily have equal sides. That would make it a rhombus or square, which are special cases.',
      'All angles are equal': 'A cyclic quadrilateral does not necessarily have equal angles. That would make it a rectangle or square, which are special cases.',
      'Diagonals are perpendicular': 'A cyclic quadrilateral does not necessarily have perpendicular diagonals. That would make it a kite or rhombus, which are special cases.'
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl9_ch9_t6_qe12',
    type: "mcq",
    question: 'What is the relationship between the angle formed by a tangent and a chord drawn from the point of contact?',
    options: [
      'It equals twice the angle in the alternate segment',
      'It equals the angle in the alternate segment',
      'It is complementary to the angle in the alternate segment',
      'It is supplementary to the angle in the alternate segment'
    ],
    correctAnswer: 'It equals the angle in the alternate segment',
    explanation: 'The angle between a tangent and a chord drawn from the point of contact equals the angle in the alternate segment. 🔄',
    wrongAnswerExplanations: {
      'It equals twice the angle in the alternate segment': 'The angle equals, not doubles, the angle in the alternate segment.',
      'It is complementary to the angle in the alternate segment': 'The angle equals, not complements, the angle in the alternate segment.',
      'It is supplementary to the angle in the alternate segment': 'The angle equals, not supplements, the angle in the alternate segment.'
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 45
  },
  {
    id: 'cl9_ch9_t6_qe13',
    type: "mcq",
    question: 'The chord length formula c = 2√(r² - d²) relates:',
    options: [
      'Chord length, radius, and angle',
      'Chord length, radius, and circumference',
      'Chord length, radius, and distance from center to chord',
      'Chord length, radius, and area'
    ],
    correctAnswer: 'Chord length, radius, and distance from center to chord',
    explanation: 'The formula c = 2√(r² - d²) relates chord length (c), radius (r), and the distance from the center to the chord (d). 📊',
    wrongAnswerExplanations: {
      'Chord length, radius, and angle': 'The formula does not directly involve angles, but distances.',
      'Chord length, radius, and circumference': 'The formula does not involve the circumference of the circle.',
      'Chord length, radius, and area': 'The formula does not involve the area of the circle.'
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl9_ch9_t6_qe14',
    type: "mcq",
    question: 'If AB is a diameter of a circle and C is any point on the circle, then angle ACB is:',
    options: [
      '45°',
      '60°',
      '90°',
      '180°'
    ],
    correctAnswer: '90°',
    explanation: 'If AB is a diameter of a circle and C is any point on the circle, then angle ACB is 90° (a right angle). This is the angle in a semicircle. 📐',
    wrongAnswerExplanations: {
      '45°': 'The angle in a semicircle is 90°, not 45°.',
      '60°': 'The angle in a semicircle is 90°, not 60°.',
      '180°': 'The angle in a semicircle is 90°, not 180°. A 180° angle would be a straight line.'
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl9_ch9_t6_qe15',
    type: "mcq",
    question: 'In a circle with center O, if chord AB is at a distance d from the center, and the radius is r, then the length of the chord is:',
    options: [
      '2d',
      '2r',
      '2√(r² + d²)',
      '2√(r² - d²)'
    ],
    correctAnswer: '2√(r² - d²)',
    explanation: 'The length of a chord at distance d from the center of a circle with radius r is given by c = 2√(r² - d²). 📏',
    wrongAnswerExplanations: {
      '2d': 'The chord length is not directly proportional to the distance from center.',
      '2r': 'The chord length equals 2r only when the chord is a diameter (d = 0).',
      '2√(r² + d²)': 'The formula uses subtraction (r² - d²), not addition (r² + d²).'
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 45
  },
  {
    id: 'cl9_ch9_t6_qe16',
    type: "mcq",
    question: 'What is a cyclic quadrilateral?',
    options: [
      'A quadrilateral with equal sides',
      'A quadrilateral with equal angles',
      'A quadrilateral whose vertices all lie on a circle',
      'A quadrilateral with perpendicular diagonals'
    ],
    correctAnswer: 'A quadrilateral whose vertices all lie on a circle',
    explanation: 'A cyclic quadrilateral is a four-sided polygon whose vertices all lie on a single circle. ⭕',
    wrongAnswerExplanations: {
      'A quadrilateral with equal sides': 'This describes a rhombus, not necessarily a cyclic quadrilateral.',
      'A quadrilateral with equal angles': 'This describes a rectangle, not necessarily a cyclic quadrilateral.',
      'A quadrilateral with perpendicular diagonals': 'This describes a kite, not necessarily a cyclic quadrilateral.'
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl9_ch9_t6_qe17',
    type: "mcq",
    question: 'The external angle of a cyclic quadrilateral is equal to:',
    options: [
      'The adjacent internal angle',
      'The internal opposite angle',
      'The sum of two internal angles',
      'The difference of two internal angles'
    ],
    correctAnswer: 'The internal opposite angle',
    explanation: 'The external angle of a cyclic quadrilateral is equal to the internal opposite angle. This is a property of cyclic quadrilaterals. 🔄',
    wrongAnswerExplanations: {
      'The adjacent internal angle': 'The external angle is not equal to its adjacent internal angle.',
      'The sum of two internal angles': 'The external angle is not equal to the sum of two internal angles.',
      'The difference of two internal angles': 'The external angle is not equal to the difference of two internal angles.'
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 45
  },
  {
    id: 'cl9_ch9_t6_qe18',
    type: "mcq",
    question: 'If two circles intersect, what is the relationship of the line joining their centers to the common chord?',
    options: [
      'It is parallel to the common chord',
      'It bisects the common chord',
      'It is perpendicular to and bisects the common chord',
      'It forms a 45° angle with the common chord'
    ],
    correctAnswer: 'It is perpendicular to and bisects the common chord',
    explanation: 'If two circles intersect, the line joining their centers is perpendicular to and bisects the common chord. ✂️',
    wrongAnswerExplanations: {
      'It is parallel to the common chord': 'The line joining centers is not parallel to the common chord but perpendicular to it.',
      'It bisects the common chord': 'This is partially correct, but it also needs to be perpendicular to the common chord.',
      'It forms a 45° angle with the common chord': 'The line joining centers forms a 90° angle (perpendicular), not 45°, with the common chord.'
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl9_ch9_t6_qe19',
    type: "mcq",
    question: 'If two chords AB and CD of a circle are equal, then:',
    options: [
      'They are equidistant from the center',
      'They are perpendicular to each other',
      'They are parallel to each other',
      'They bisect each other'
    ],
    correctAnswer: 'They are equidistant from the center',
    explanation: 'If two chords AB and CD of a circle are equal, then they are equidistant from the center of the circle. 📏',
    wrongAnswerExplanations: {
      'They are perpendicular to each other': 'Equal chords are not necessarily perpendicular to each other.',
      'They are parallel to each other': 'Equal chords are not necessarily parallel to each other.',
      'They bisect each other': 'Equal chords do not necessarily bisect each other.'
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl9_ch9_t6_qe20',
    type: "mcq",
    question: 'If a line is tangent to a circle at point P, and O is the center of the circle, then:',
    options: [
      'OP is perpendicular to the tangent',
      'OP is parallel to the tangent',
      'OP bisects the tangent',
      'OP makes a 45° angle with the tangent'
    ],
    correctAnswer: 'OP is perpendicular to the tangent',
    explanation: 'If a line is tangent to a circle at point P, and O is the center of the circle, then OP (the radius to the point of contact) is perpendicular to the tangent. 📐',
    wrongAnswerExplanations: {
      'OP is parallel to the tangent': 'The radius can never be parallel to the tangent at the point of contact.',
      'OP bisects the tangent': 'The radius does not bisect the tangent; the tangent is an infinite line with no midpoint.',
      'OP makes a 45° angle with the tangent': 'The radius always makes a 90° angle (perpendicular), not 45°, with the tangent.'
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 30
  }
];
