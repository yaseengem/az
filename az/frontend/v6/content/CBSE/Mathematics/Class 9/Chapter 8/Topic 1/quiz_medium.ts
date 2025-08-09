// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 9\Chapter8\Topic1\quiz_medium.ts
import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
  {
    id: 'cl9_ch8_t1_qm1',
    type: "mcq",
    question: 'In parallelogram ABCD, the diagonals AC and BD intersect at point O. If OA = 3 cm, what is the length of OC?',
    options: [
      '1.5 cm',
      '3 cm',
      '6 cm',
      'Cannot be determined without more information'
    ],
    correctAnswer: '3 cm',
    explanation: 'In a parallelogram, diagonals bisect each other. Since O is the point of intersection, OA = OC = 3 cm. Therefore, OC = 3 cm. ✂️',
    wrongAnswerExplanations: {
      '1.5 cm': 'This would mean the diagonals do not bisect each other, which contradicts a fundamental property of parallelograms.',
      '6 cm': 'This would mean OC = 2 × OA, which is incorrect as diagonals bisect each other equally.',
      'Cannot be determined without more information': 'We have sufficient information to determine OC using the property that diagonals bisect each other in a parallelogram.'
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 60
  },
  {
    id: 'cl9_ch8_t1_qm2',
    type: "mcq",
    question: 'ABCD is a parallelogram with AB = 8 cm and BC = 6 cm. If the height of the parallelogram from side AB is 5 cm, what is its area?',
    options: [
      '30 cm²',
      '40 cm²',
      '48 cm²',
      '60 cm²'
    ],
    correctAnswer: '40 cm²',
    explanation: 'The area of a parallelogram is base × height. Here, base = AB = 8 cm and height = 5 cm, so area = 8 × 5 = 40 cm². 📊',
    wrongAnswerExplanations: {
      '30 cm²': 'This would be the area if the base was 6 cm, but we are using AB (8 cm) as the base.',
      '48 cm²': 'This would be the area if we multiplied the two sides (8 × 6), but that\'s not the formula for the area of a parallelogram.',
      '60 cm²': 'This is incorrect. The area formula requires the base and the corresponding height, which gives 8 × 5 = 40 cm².'
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 60
  },
  {
    id: 'cl9_ch8_t1_qm3',
    type: "mcq",
    question: 'If the diagonals of a parallelogram are perpendicular to each other, what special type of parallelogram is it?',
    options: [
      'Rectangle',
      'Square',
      'Rhombus',
      'None of the above'
    ],
    correctAnswer: 'Rhombus',
    explanation: 'When the diagonals of a parallelogram are perpendicular to each other, it is a rhombus. This is a defining property that distinguishes rhombuses from other parallelograms. 💎',
    wrongAnswerExplanations: {
      'Rectangle': 'A rectangle has diagonals that are equal in length, but they are not necessarily perpendicular to each other.',
      'Square': 'While a square does have perpendicular diagonals, not all parallelograms with perpendicular diagonals are squares. A rhombus has perpendicular diagonals but may not have right angles.',
      'None of the above': 'The correct answer is rhombus, which is characterized by perpendicular diagonals.'
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 60
  },
  {
    id: 'cl9_ch8_t1_qm4',
    type: "mcq",
    question: 'In a parallelogram ABCD, point P is the midpoint of side AB. If the diagonal AC passes through point P, what type of parallelogram is ABCD?',
    options: [
      'Rectangle',
      'Rhombus',
      'Square',
      'None of the above'
    ],
    correctAnswer: 'Rhombus',
    explanation: 'If a diagonal of a parallelogram passes through the midpoint of one of its sides, then that parallelogram must be a rhombus. This is a specific property of rhombuses. 📐',
    wrongAnswerExplanations: {
      'Rectangle': 'A diagonal passing through the midpoint of a side is not a property specific to rectangles.',
      'Square': 'While a square would have this property, a rhombus would also have it. The less restrictive answer is rhombus.',
      'None of the above': 'The correct answer is rhombus, as this property specifically characterizes rhombuses among parallelograms.'
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 60
  },
  {
    id: 'cl9_ch8_t1_qm5',
    type: "mcq",
    question: 'Prove that the diagonals of a parallelogram divide it into four triangles of equal area.',
    options: [
      'True, because the diagonals are equal in length',
      'True, because the diagonals bisect each other',
      'False, the triangles have different areas',
      'False, only specific parallelograms have this property'
    ],
    correctAnswer: 'True, because the diagonals bisect each other',
    explanation: 'The diagonals of a parallelogram bisect each other, creating four triangles with the same base and height, thus having equal areas. Each triangle shares the intersection point as a vertex. 🔄',
    wrongAnswerExplanations: {
      'True, because the diagonals are equal in length': 'The diagonals of a general parallelogram are not necessarily equal in length. The equal areas result from the diagonals bisecting each other.',
      'False, the triangles have different areas': 'This is incorrect. The four triangles formed by the diagonals do have equal areas.',
      'False, only specific parallelograms have this property': 'This property holds for all parallelograms, not just specific types.'
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 60
  },
  {
    id: 'cl9_ch8_t1_qm6',
    type: "mcq",
    question: 'In a parallelogram ABCD, if angle A = 110° and angle D = 70°, what is the relationship between these angles?',
    options: [
      'The question has an error, as angle A should equal angle D',
      'The figure described is not a parallelogram',
      'Angles A and D are supplementary (sum to 180°)',
      'None of the above'
    ],
    correctAnswer: 'The figure described is not a parallelogram',
    explanation: 'In a parallelogram, opposite angles are equal, so angle A should equal angle D. Since the given angles are different, the figure described cannot be a parallelogram. ❌',
    wrongAnswerExplanations: {
      'The question has an error, as angle A should equal angle D': 'While it\'s true that angle A should equal angle D in a parallelogram, the conclusion is that the described figure is not a parallelogram.',
      'Angles A and D are supplementary (sum to 180°)': 'In a parallelogram, adjacent angles (not opposite angles) are supplementary. Since A and D are opposite angles, they should be equal, not supplementary.',
      'None of the above': 'The correct answer is that the figure described is not a parallelogram, as opposite angles must be equal.'
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 60
  },
  {
    id: 'cl9_ch8_t1_qm7',
    type: "mcq",
    question: 'If one diagonal of a parallelogram bisects one of the angles of the parallelogram, what can you conclude?',
    options: [
      'The parallelogram is a rectangle',
      'The parallelogram is a rhombus',
      'The parallelogram is a square',
      'No special conclusion can be drawn'
    ],
    correctAnswer: 'The parallelogram is a rhombus',
    explanation: 'If a diagonal of a parallelogram bisects one of its angles, then the parallelogram is a rhombus. This is a property that distinguishes rhombuses from other parallelograms. 💎',
    wrongAnswerExplanations: {
      'The parallelogram is a rectangle': 'A diagonal bisecting an angle is not a characteristic property of rectangles.',
      'The parallelogram is a square': 'While this property holds for squares (which are also rhombuses), the less restrictive classification is rhombus.',
      'No special conclusion can be drawn': 'A specific conclusion can be drawn: the parallelogram is a rhombus when a diagonal bisects an angle.'
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 60
  },
  {
    id: 'cl9_ch8_t1_qm8',
    type: "mcq",
    question: 'The area of a parallelogram is 72 cm². If its base is 9 cm, what is its height?',
    options: [
      '6 cm',
      '8 cm',
      '9 cm',
      '12 cm'
    ],
    correctAnswer: '8 cm',
    explanation: 'The area of a parallelogram is base × height. Here, area = 72 cm² and base = 9 cm, so height = area ÷ base = 72 ÷ 9 = 8 cm. 📏',
    wrongAnswerExplanations: {
      '6 cm': 'If the height were 6 cm, the area would be 9 × 6 = 54 cm², not 72 cm².',
      '9 cm': 'If the height were 9 cm, the area would be 9 × 9 = 81 cm², not 72 cm².',
      '12 cm': 'If the height were 12 cm, the area would be 9 × 12 = 108 cm², not 72 cm².'
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 60
  },
  {
    id: 'cl9_ch8_t1_qm9',
    type: "mcq",
    question: 'ABCD is a parallelogram where AB = 8 cm, BC = 6 cm, and angle B = 60°. What is the area of the parallelogram?',
    options: [
      '24 cm²',
      '36 cm²',
      '41.6 cm²',
      '48 cm²'
    ],
    correctAnswer: '41.6 cm²',
    explanation: 'Area of parallelogram = base × height = AB × BC × sin(B) = 8 × 6 × sin(60°) = 8 × 6 × (√3/2) = 24√3 ≈ 41.6 cm². 📊',
    wrongAnswerExplanations: {
      '24 cm²': 'This would be the area if we used sin(30°) instead of sin(60°), or if we neglected the sine factor entirely.',
      '36 cm²': 'This would be the area if we simply multiplied the two sides (6 × 6) without accounting for the angle.',
      '48 cm²': 'This would be the product of the two sides (8 × 6), but we need to multiply by sin(60°) to get the correct area.'
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 60
  },
  {
    id: 'cl9_ch8_t1_qm10',
    type: "mcq",
    question: 'If ABCD is a parallelogram with diagonals AC and BD intersecting at O, and triangle AOB has an area of 12 cm², what is the area of the parallelogram?',
    options: [
      '12 cm²',
      '24 cm²',
      '36 cm²',
      '48 cm²'
    ],
    correctAnswer: '48 cm²',
    explanation: 'The diagonals of a parallelogram divide it into four triangles of equal area. So if one triangle has area 12 cm², the parallelogram has area 4 × 12 = 48 cm². 🔄',
    wrongAnswerExplanations: {
      '12 cm²': 'This is just the area of one of the four triangles formed by the diagonals, not the whole parallelogram.',
      '24 cm²': 'This would be the area of two triangles, but the parallelogram consists of four equal triangles.',
      '36 cm²': 'This would be the area of three triangles, but the parallelogram consists of four equal triangles.'
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 60
  },
  {
    id: 'cl9_ch8_t1_qm11',
    type: "mcq",
    question: 'Which of these is a necessary and sufficient condition for a quadrilateral to be a parallelogram?',
    options: [
      'Exactly one pair of opposite sides are parallel',
      'The diagonals of the quadrilateral are equal',
      'One pair of opposite sides are parallel and equal',
      'All sides are equal'
    ],
    correctAnswer: 'One pair of opposite sides are parallel and equal',
    explanation: 'If one pair of opposite sides of a quadrilateral are both parallel and equal in length, then the quadrilateral is a parallelogram. This is a necessary and sufficient condition. 📐',
    wrongAnswerExplanations: {
      'Exactly one pair of opposite sides are parallel': 'This describes a trapezium, not a parallelogram which requires both pairs of opposite sides to be parallel.',
      'The diagonals of the quadrilateral are equal': 'Equal diagonals are a property of rectangles, but not all parallelograms have equal diagonals.',
      'All sides are equal': 'This is a property of rhombuses, which are a special case of parallelograms, but not a necessary condition for all parallelograms.'
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 60
  },
  {
    id: 'cl9_ch8_t1_qm12',
    type: "mcq",
    question: 'In a parallelogram, which of the following is always true about the diagonals?',
    options: [
      'They are perpendicular to each other',
      'They bisect each other',
      'They bisect the angles of the parallelogram',
      'They are equal in length'
    ],
    correctAnswer: 'They bisect each other',
    explanation: 'The diagonals of a parallelogram always bisect each other. This is an invariant property of all parallelograms regardless of shape or size. ✂️',
    wrongAnswerExplanations: {
      'They are perpendicular to each other': 'This is true only for rhombuses and squares, not for all parallelograms.',
      'They bisect the angles of the parallelogram': 'This is true only for rhombuses, not for all parallelograms.',
      'They are equal in length': 'This is true only for rectangles and squares, not for all parallelograms.'
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 60
  },
  {
    id: 'cl9_ch8_t1_qm13',
    type: "mcq",
    question: 'If ABCD is a parallelogram with diagonals AC and BD, which of the following pairs of triangles are always congruent?',
    options: [
      'ABC and CDA',
      'ABD and BCD',
      'AOB and COD (where O is the intersection of diagonals)',
      'ABC and BCD'
    ],
    correctAnswer: 'ABC and CDA',
    explanation: 'In a parallelogram, a diagonal divides it into two congruent triangles. So triangle ABC ≅ triangle CDA, and triangle ABD ≅ triangle BCD. The first option correctly identifies one such pair. 🔄',
    wrongAnswerExplanations: {
      'ABD and BCD': 'These triangles share the diagonal BD but are not necessarily congruent unless certain additional conditions are met.',
      'AOB and COD (where O is the intersection of diagonals)': 'While these triangles may have certain relationships, they are not necessarily congruent in all parallelograms.',
      'ABC and BCD': 'These triangles do not generally have the same set of sides or angles, so they are not congruent in a general parallelogram.'
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 60
  },
  {
    id: 'cl9_ch8_t1_qm14',
    type: "mcq",
    question: 'A diagonal of a parallelogram divides it into two triangles of areas 24 cm² and 24 cm². What is the area of the parallelogram?',
    options: [
      '24 cm²',
      '48 cm²',
      '12 cm²',
      'Cannot be determined'
    ],
    correctAnswer: '48 cm²',
    explanation: 'A diagonal of a parallelogram divides it into two triangles of equal area. If each triangle has area 24 cm², then the area of the parallelogram is 24 + 24 = 48 cm². 📊',
    wrongAnswerExplanations: {
      '24 cm²': 'This is the area of just one of the triangles, not the entire parallelogram.',
      '12 cm²': 'This would be half the area of one triangle, which doesn\'t represent any meaningful measurement in this context.',
      'Cannot be determined': 'We have sufficient information to determine the area by adding the areas of the two triangles.'
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 60
  },
  {
    id: 'cl9_ch8_t1_qm15',
    type: "mcq",
    question: 'In parallelogram ABCD, angle A = 60°. What are the measures of the other three angles?',
    options: [
      '60°, 60°, 60°',
      '60°, 120°, 60°',
      '120°, 60°, 120°',
      '120°, 120°, 120°'
    ],
    correctAnswer: '120°, 60°, 120°',
    explanation: 'In a parallelogram, opposite angles are equal and adjacent angles are supplementary (sum to 180°). So if angle A = 60°, then angle C = 60°, angle B = 180° - 60° = 120°, and angle D = 120°. 📐',
    wrongAnswerExplanations: {
      '60°, 60°, 60°': 'This would make all angles 60°, which is impossible in a parallelogram as adjacent angles must be supplementary.',
      '60°, 120°, 60°': 'This arrangement would place angle C = 60° (correct), but would have angle B and angle D both equal to 120°, which violates the property that opposite angles are equal.',
      '120°, 120°, 120°': 'This would make all angles except A equal to 120°, which violates the property that opposite angles are equal.'
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 60
  },
  {
    id: 'cl9_ch8_t1_qm16',
    type: "mcq",
    question: 'ABCD is a parallelogram with AB = 6 cm, BC = 4 cm, and angle B = 30°. What is the length of the diagonal BD?',
    options: [
      '2 cm',
      '4 cm',
      '8 cm',
      '√52 cm'
    ],
    correctAnswer: '√52 cm',
    explanation: 'Using the law of cosines in triangle ABD: BD² = AB² + AD² - 2(AB)(AD)cos(angle BAD). Since AD = BC = 4 and the angle BAD = 180°-30° = 150°, BD² = 36 + 16 - 2(6)(4)cos(150°) = 36 + 16 + 41.57 = 52. Therefore BD = √52 cm. 📏',
    wrongAnswerExplanations: {
      '2 cm': 'This is far too small for a diagonal of a parallelogram with sides 6 cm and 4 cm.',
      '4 cm': 'This equals the length of side BC, but the diagonal must be longer than any side of the parallelogram.',
      '8 cm': 'This would be approximately correct if angle B were 60°, but with angle B = 30°, the diagonal length is different.'
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 60
  },
  {
    id: 'cl9_ch8_t1_qm17',
    type: "mcq",
    question: 'If the diagonals of a parallelogram are 10 cm and 24 cm, what is its area?',
    options: [
      '120 cm²',
      '240 cm²',
      '60 cm²',
      '30 cm²'
    ],
    correctAnswer: '120 cm²',
    explanation: 'The area of a parallelogram can be calculated using its diagonals with the formula: Area = (1/2) × product of diagonals × sine of the angle between them. If the diagonals are perpendicular, the formula simplifies to Area = (1/2) × d₁ × d₂ = (1/2) × 10 × 24 = 120 cm². 📊',
    wrongAnswerExplanations: {
      '240 cm²': 'This would be the product of the diagonals, but we need to multiply by 1/2 to get the correct area.',
      '60 cm²': 'This is half of the correct area, possibly due to an error in calculation.',
      '30 cm²': 'This is a quarter of the correct area, possibly due to multiple errors in calculation.'
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 60
  },
  {
    id: 'cl9_ch8_t1_qm18',
    type: "mcq",
    question: 'Which of the following does NOT prove that a quadrilateral is a parallelogram?',
    options: [
      'Both pairs of opposite sides are equal',
      'Both pairs of opposite angles are equal',
      'Diagonals bisect each other',
      'All sides are equal'
    ],
    correctAnswer: 'All sides are equal',
    explanation: 'All sides being equal is a property of a rhombus, which is a type of parallelogram. However, it does not prove that a quadrilateral is a parallelogram, as it could be any rhombus. The other options are sufficient conditions to prove a quadrilateral is a parallelogram. ❌',
    wrongAnswerExplanations: {
      'Both pairs of opposite sides are equal': 'This is a sufficient condition to prove a quadrilateral is a parallelogram.',
      'Both pairs of opposite angles are equal': 'This is a sufficient condition to prove a quadrilateral is a parallelogram.',
      'Diagonals bisect each other': 'This is a sufficient condition to prove a quadrilateral is a parallelogram.'
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 60
  },
  {
    id: 'cl9_ch8_t1_qm19',
    type: "mcq",
    question: 'In a parallelogram ABCD, M is the midpoint of BC and N is the midpoint of CD. What is special about the line segment AM?',
    options: [
      'AM is parallel to BD',
      'AM = BD/2',
      'AM bisects the angle BAD',
      'AM passes through the center of the parallelogram'
    ],
    correctAnswer: 'AM passes through the center of the parallelogram',
    explanation: 'M is the midpoint of BC and N is the midpoint of CD. By the properties of a parallelogram and the midpoint theorem, AM will pass through the point of intersection of the diagonals, which is the center of the parallelogram. 📍',
    wrongAnswerExplanations: {
      'AM is parallel to BD': 'There is no general property that guarantees AM is parallel to diagonal BD in all parallelograms.',
      'AM = BD/2': 'There is no general property that relates the length of AM to half the diagonal BD in all parallelograms.',
      'AM bisects the angle BAD': 'There is no general property that guarantees AM bisects angle BAD in all parallelograms.'
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 60
  },
  {
    id: 'cl9_ch8_t1_qm20',
    type: "mcq",
    question: 'If a quadrilateral has its diagonals equal and bisecting each other, what type of quadrilateral is it?',
    options: [
      'Parallelogram',
      'Rectangle',
      'Rhombus',
      'Square'
    ],
    correctAnswer: 'Rectangle',
    explanation: 'A quadrilateral with diagonals that are equal in length and bisect each other is a rectangle. This combination of properties (equal diagonals + bisecting each other) is unique to rectangles among all quadrilaterals. 📦',
    wrongAnswerExplanations: {
      'Parallelogram': 'While all rectangles are parallelograms, not all parallelograms have equal diagonals. The more specific answer is rectangle.',
      'Rhombus': 'A rhombus has diagonals that bisect each other at right angles, but they are not necessarily equal in length.',
      'Square': 'While a square does have diagonals that are equal and bisect each other, not all quadrilaterals with these properties are squares. A rectangle has these properties but may not have all sides equal.'
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 60
  }
];
