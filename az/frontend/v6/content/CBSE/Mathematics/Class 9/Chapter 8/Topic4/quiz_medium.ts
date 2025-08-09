// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 9\Chapter8\Topic4\quiz_medium.ts
import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
  {
    id: 'cl9_ch8_t4_qm1',
    type: "mcq",
    question: 'If the diagonals of a quadrilateral bisect each other, what can we conclude about the quadrilateral?',
    options: [
      'It is a rectangle',
      'It is a rhombus',
      'It is a square',
      'It is a parallelogram'
    ],
    correctAnswer: 'It is a parallelogram',
    explanation: 'When the diagonals of a quadrilateral bisect each other, the quadrilateral must be a parallelogram. This is actually one of the criteria to prove that a quadrilateral is a parallelogram. Other specific types like rectangles, rhombuses, and squares also have this property since they are special types of parallelograms. ⏹️',
    wrongAnswerExplanations: {
      'It is a rectangle': 'While a rectangle is a special type of parallelogram where diagonals bisect each other, we cannot conclude it\'s a rectangle without additional information about the angles being 90°.',
      'It is a rhombus': 'A rhombus is a special type of parallelogram where diagonals bisect each other at right angles, but we don\'t have information about perpendicularity of diagonals.',
      'It is a square': 'A square is a special type of parallelogram with additional properties, but we only know the diagonals bisect each other, which is true for all parallelograms.'
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 60
  },
  {
    id: 'cl9_ch8_t4_qm2',
    type: "mcq",
    question: 'In a quadrilateral ABCD, if AB ∥ DC, AD ∥ BC, and AB = DC, then the quadrilateral is:',
    options: [
      'A trapezium',
      'A kite',
      'A rhombus',
      'A parallelogram'
    ],
    correctAnswer: 'A parallelogram',
    explanation: 'If opposite sides are parallel (AB ∥ DC and AD ∥ BC), the quadrilateral is a parallelogram. The additional information that AB = DC is redundant because in a parallelogram, opposite sides are already equal. However, we cannot conclude it\'s a rhombus without knowing that all sides are equal. 📏',
    wrongAnswerExplanations: {
      'A trapezium': 'A trapezium has only one pair of parallel sides, but here both pairs of opposite sides are parallel, making it a parallelogram.',
      'A kite': 'A kite has two pairs of adjacent equal sides, but here we know that opposite sides are equal, which is a property of a parallelogram.',
      'A rhombus': 'While a rhombus is a special type of parallelogram, we cannot conclude it\'s a rhombus without knowing that all four sides are equal.'
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 60
  },
  {
    id: 'cl9_ch8_t4_qm3',
    type: "mcq",
    question: 'ABCD is a parallelogram. If diagonal BD bisects angle ABC, then:',
    options: [
      'ABCD is a square',
      'ABCD is a rectangle',
      'ABCD is a rhombus',
      'ABCD is a trapezium'
    ],
    correctAnswer: 'ABCD is a rhombus',
    explanation: 'If a diagonal of a parallelogram bisects any angle, the parallelogram must be a rhombus. This is a special property of rhombuses where the diagonals bisect the angles. This occurs because all sides of a rhombus are equal in length. 💎',
    wrongAnswerExplanations: {
      'ABCD is a square': 'While a square is a special type of rhombus, we don\'t have information about right angles to conclude it\'s a square.',
      'ABCD is a rectangle': 'In a rectangle, the diagonals are equal but don\'t necessarily bisect the angles.',
      'ABCD is a trapezium': 'A trapezium has only one pair of parallel sides, but we already know ABCD is a parallelogram with both pairs parallel.'
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 60
  },
  {
    id: 'cl9_ch8_t4_qm4',
    type: "mcq",
    question: 'In parallelogram ABCD, if diagonal AC bisects angles A and C, then:',
    options: [
      'ABCD is a rhombus',
      'ABCD is a rectangle',
      'ABCD is a square',
      'ABCD is a kite'
    ],
    correctAnswer: 'ABCD is a rhombus',
    explanation: 'When a diagonal of a parallelogram bisects the angles it connects (in this case, angles A and C), the parallelogram is a rhombus. This follows from the property that in a rhombus, the diagonals are the angle bisectors of the angles they connect. This is because all sides are equal in a rhombus. 💎',
    wrongAnswerExplanations: {
      'ABCD is a rectangle': 'In a rectangle, the diagonals are equal in length but don\'t necessarily bisect the angles.',
      'ABCD is a square': 'While a square is a special type of rhombus, we don\'t have information about right angles to conclude it\'s a square.',
      'ABCD is a kite': 'A kite has two pairs of adjacent equal sides, but here we know it\'s a parallelogram with a property that makes it specifically a rhombus.'
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 60
  },
  {
    id: 'cl9_ch8_t4_qm5',
    type: "mcq",
    question: 'Using the Mid-point Theorem, if D and E are the midpoints of sides AB and BC of a triangle ABC, what is the relationship between DE and AC?',
    options: [
      'DE = AC',
      'DE = ½AC',
      'DE ∥ AC and DE = ½AC',
      'DE ⊥ AC'
    ],
    correctAnswer: 'DE ∥ AC and DE = ½AC',
    explanation: 'By the Mid-point Theorem, when D and E are midpoints of sides AB and BC respectively, DE is parallel to the third side AC and equal to half its length. Thus, DE ∥ AC and DE = ½AC. This theorem provides a powerful relationship between sides and midpoints in triangles. ⚡',
    wrongAnswerExplanations: {
      'DE = AC': 'DE is half the length of AC, not equal to it. The Mid-point Theorem states that the line joining midpoints is parallel to the third side and half its length.',
      'DE = ½AC': 'While DE is half the length of AC, this answer is incomplete because it doesn\'t mention that DE is also parallel to AC.',
      'DE ⊥ AC': 'DE is parallel to AC, not perpendicular to it. The Mid-point Theorem doesn\'t establish a perpendicular relationship.'
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 60
  },
  {
    id: 'cl9_ch8_t4_qm6',
    type: "mcq",
    question: 'In a parallelogram ABCD, if the diagonals AC and BD are equal, then the parallelogram is:',
    options: [
      'A rhombus',
      'A square',
      'A rectangle',
      'A trapezium'
    ],
    correctAnswer: 'A rectangle',
    explanation: 'When the diagonals of a parallelogram are equal in length, the parallelogram must be a rectangle. This is a defining property of rectangles among parallelograms. In a rectangle, all angles are 90° and the diagonals are equal, although they don\'t necessarily intersect at right angles. 📏',
    wrongAnswerExplanations: {
      'A rhombus': 'In a rhombus, the diagonals are perpendicular to each other but not necessarily equal in length.',
      'A square': 'While a square has equal diagonals, we don\'t have enough information to conclude that all sides are equal.',
      'A trapezium': 'A trapezium has only one pair of parallel sides, while we know this is a parallelogram with both pairs parallel.'
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 60
  },
  {
    id: 'cl9_ch8_t4_qm7',
    type: "mcq",
    question: 'A quadrilateral has diagonals that bisect each other at right angles. What can you conclude about this quadrilateral?',
    options: [
      'It is definitely a square',
      'It is definitely a rhombus',
      'It could be either a rhombus or a square',
      'It is definitely a kite'
    ],
    correctAnswer: 'It could be either a rhombus or a square',
    explanation: 'When the diagonals of a quadrilateral bisect each other at right angles, the quadrilateral is a rhombus. If all angles are also 90°, then it is a square. Since we don\'t know about the angles, it could be either a rhombus or a square (which is a special type of rhombus with all angles equal to 90°). 🔍',
    wrongAnswerExplanations: {
      'It is definitely a square': 'We cannot conclude it\'s definitely a square without knowing that the angles are 90°. Diagonals bisecting at right angles only confirms it\'s a rhombus.',
      'It is definitely a rhombus': 'This is incomplete because a square also has diagonals that bisect at right angles, so it could be either.',
      'It is definitely a kite': 'A kite\'s diagonals are perpendicular but don\'t necessarily bisect each other. The property of diagonals bisecting each other makes it a parallelogram.'
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 60
  },
  {
    id: 'cl9_ch8_t4_qm8',
    type: "mcq",
    question: 'In a parallelogram ABCD, if ∠A = 60°, what is ∠C?',
    options: [
      '30°',
      '60°',
      '120°',
      '240°'
    ],
    correctAnswer: '60°',
    explanation: 'In a parallelogram, opposite angles are equal. Since ∠A = 60°, the opposite angle ∠C = 60° also. (Note that the answer shown was incorrectly set as 120° before, but the correct answer is 60°). 📐',
    wrongAnswerExplanations: {
      '30°': 'This is incorrect. In a parallelogram, opposite angles are equal, so angle C must be 60° like angle A.',
      '120°': 'This is incorrect. While adjacent angles in a parallelogram sum to 180° (so angles B and D would be 120°), opposite angles are equal, making angle C equal to 60°.',
      '240°': 'This is incorrect. The interior angles of a quadrilateral sum to 360°, so no single angle can be 240° as it would be too large.'
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 60
  },
  {
    id: 'cl9_ch8_t4_qm9',
    type: "mcq",
    question: 'If the diagonals of a quadrilateral divide each other into equal parts but are not perpendicular to each other, then the quadrilateral is:',
    options: [
      'A rectangle',
      'A rhombus',
      'A parallelogram only',
      'A square'
    ],
    correctAnswer: 'A parallelogram only',
    explanation: 'When the diagonals of a quadrilateral bisect each other (divide each other into equal parts), the quadrilateral is a parallelogram. If the diagonals are not perpendicular, then it\'s not a rhombus or square. If the diagonals are equal in length, it would be a rectangle, but since this information isn\'t given, we can only conclude it\'s a parallelogram. ⏹️',
    wrongAnswerExplanations: {
      'A rectangle': 'For a parallelogram to be a rectangle, the diagonals must be equal in length, but this information isn\'t given.',
      'A rhombus': 'For a parallelogram to be a rhombus, the diagonals must be perpendicular to each other, but they\'re explicitly stated not to be perpendicular.',
      'A square': 'A square has diagonals that are both equal in length and perpendicular to each other, neither of which is confirmed here.'
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 60
  },
  {
    id: 'cl9_ch8_t4_qm10',
    type: "mcq",
    question: 'In a triangle ABC, points D, E, and F are the midpoints of sides BC, CA, and AB respectively. What is the relationship between the area of triangle DEF and the area of triangle ABC?',
    options: [
      'Area of DEF = Area of ABC',
      'Area of DEF = ½ Area of ABC',
      'Area of DEF = ¼ Area of ABC',
      'Area of DEF = ⅓ Area of ABC'
    ],
    correctAnswer: 'Area of DEF = ¼ Area of ABC',
    explanation: 'When D, E, and F are midpoints of the sides of triangle ABC, triangle DEF is called the medial triangle. By the Mid-point Theorem, each side of DEF is parallel to and half the length of the corresponding side of ABC. Since both dimensions are halved, the area is reduced to ¼ of the original triangle (½ × ½ = ¼). 📊',
    wrongAnswerExplanations: {
      'Area of DEF = Area of ABC': 'This is incorrect because the medial triangle is significantly smaller than the original triangle.',
      'Area of DEF = ½ Area of ABC': 'This is incorrect. While each side is half the length, the area is ¼, not ½, because area scales with the square of linear dimensions.',
      'Area of DEF = ⅓ Area of ABC': 'This is incorrect. The area ratio is determined by squaring the side length ratio, which is (½)² = ¼.'
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 60
  },
  {
    id: 'cl9_ch8_t4_qm11',
    type: "mcq",
    question: 'If ABCD is a parallelogram and P is any point on diagonal BD, then what is the relationship between the areas of triangles APB and CPD?',
    options: [
      'Area of APB > Area of CPD',
      'Area of APB < Area of CPD',
      'Area of APB = Area of CPD',
      'Cannot be determined'
    ],
    correctAnswer: 'Area of APB = Area of CPD',
    explanation: 'In a parallelogram ABCD, if P is any point on diagonal BD, then the areas of triangles APB and CPD are equal. This is because triangles on the same base (or equal bases) and between the same parallels have equal areas. Here, AB ∥ DC, and P lies on BD, making the areas equal. 📐',
    wrongAnswerExplanations: {
      'Area of APB > Area of CPD': 'This is incorrect. The triangles APB and CPD have the same area due to the properties of parallelograms and triangles between the same parallels.',
      'Area of APB < Area of CPD': 'This is incorrect. The areas are equal, not unequal in either direction.',
      'Cannot be determined': 'This is incorrect. The equality of areas can be determined using the property that triangles on the same base and between the same parallels have equal areas.'
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 60
  },
  {
    id: 'cl9_ch8_t4_qm12',
    type: "mcq",
    question: 'In a quadrilateral ABCD, if AB = CD, AD = BC, and AC = BD, then the quadrilateral is:',
    options: [
      'A rectangle',
      'A parallelogram',
      'A rhombus',
      'A square'
    ],
    correctAnswer: 'A square',
    explanation: 'For a quadrilateral with AB = CD and AD = BC, it is a parallelogram. The additional condition that AC = BD (equal diagonals) means it must be a rectangle. But since we also know that opposite sides are equal AND that adjacent sides are equal (AB = BC = CD = DA), all sides must be equal, making it a square. 🟦',
    wrongAnswerExplanations: {
      'A rectangle': 'This is incomplete. While equal diagonals indicate a rectangle, the fact that all sides are equal (from AB = CD and AD = BC combined) means it\'s more specifically a square.',
      'A parallelogram': 'This is too general. While it is a parallelogram, the additional properties given make it specifically a square.',
      'A rhombus': 'This is incomplete. While equal sides indicate a rhombus, the equal diagonals add the property that makes it specifically a square.'
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 60
  },
  {
    id: 'cl9_ch8_t4_qm13',
    type: "mcq",
    question: 'If the diagonals of a parallelogram are equal and perpendicular to each other, then the parallelogram is:',
    options: [
      'A rectangle',
      'A rhombus',
      'A square',
      'None of these'
    ],
    correctAnswer: 'A square',
    explanation: 'When diagonals of a parallelogram bisect each other at right angles, the parallelogram is a rhombus. When the diagonals are equal, the parallelogram is a rectangle. When BOTH conditions are met (equal diagonals AND perpendicular diagonals), the parallelogram must be a square. A square is the only quadrilateral with both these properties. 🟦',
    wrongAnswerExplanations: {
      'A rectangle': 'This is incomplete. A rectangle has equal diagonals, but they aren\'t necessarily perpendicular to each other.',
      'A rhombus': 'This is incomplete. A rhombus has diagonals perpendicular to each other, but they aren\'t necessarily equal in length.',
      'None of these': 'This is incorrect. A square is a parallelogram with both equal and perpendicular diagonals.'
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 60
  },
  {
    id: 'cl9_ch8_t4_qm14',
    type: "mcq",
    question: 'In a parallelogram ABCD, if ∠A = 70°, what is ∠B?',
    options: [
      '70°',
      '110°',
      '140°',
      '290°'
    ],
    correctAnswer: '110°',
    explanation: 'In a parallelogram, adjacent angles are supplementary (sum to 180°). Since ∠A = 70°, the adjacent angle ∠B = 180° - 70° = 110°. Additionally, opposite angles are equal, so ∠C = ∠A = 70° and ∠D = ∠B = 110°. These angle relationships are fundamental properties of parallelograms. 📐',
    wrongAnswerExplanations: {
      '70°': 'This is incorrect. Adjacent angles in a parallelogram are supplementary, not equal. ∠B should be 180° - 70° = 110°.',
      '140°': 'This is incorrect. The correct value is 110° since adjacent angles in a parallelogram sum to 180°.',
      '290°': 'This is incorrect. No interior angle in a quadrilateral can exceed 180°.'
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 60
  },
  {
    id: 'cl9_ch8_t4_qm15',
    type: "mcq",
    question: 'In a quadrilateral ABCD, if AB ∥ CD and AB = CD, then:',
    options: [
      'ABCD is definitely a parallelogram',
      'ABCD is definitely a rectangle',
      'ABCD is definitely a rhombus',
      'ABCD could be a trapezium or a parallelogram'
    ],
    correctAnswer: 'ABCD is definitely a parallelogram',
    explanation: 'If one pair of opposite sides of a quadrilateral are both parallel and equal (AB ∥ CD and AB = CD), then the quadrilateral is a parallelogram. This is one of the criteria for proving that a quadrilateral is a parallelogram. Note that without knowing about the other pair of sides, we cannot determine if it\'s a rectangle, rhombus, or square. ⏹️',
    wrongAnswerExplanations: {
      'ABCD is definitely a rectangle': 'This is incorrect. For a parallelogram to be a rectangle, all angles must be 90°, which we don\'t know.',
      'ABCD is definitely a rhombus': 'This is incorrect. For a parallelogram to be a rhombus, all sides must be equal, but we only know that one pair of opposite sides is equal.',
      'ABCD could be a trapezium or a parallelogram': 'This is incorrect. If opposite sides are both parallel and equal, it must be a parallelogram, not a trapezium.'
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 60
  },
  {
    id: 'cl9_ch8_t4_qm16',
    type: "mcq",
    question: 'Using the Mid-point Theorem, if P, Q, and R are the midpoints of sides AB, BC, and CA of triangle ABC respectively, what can be said about triangle PQR?',
    options: [
      'PQR is similar to ABC with ratio 1:2',
      'PQR is congruent to ABC',
      'Area of PQR = ¼ Area of ABC',
      'Perimeter of PQR = ½ Perimeter of ABC'
    ],
    correctAnswer: 'Area of PQR = ¼ Area of ABC',
    explanation: 'By the Mid-point Theorem, when P, Q, and R are midpoints of sides of triangle ABC, each side of triangle PQR is parallel to and half the length of the corresponding side of ABC. This forms the medial triangle. Since both dimensions are halved, the area is ¼ of the original triangle. Also, the perimeter is half that of the original triangle. 📊',
    wrongAnswerExplanations: {
      'PQR is similar to ABC with ratio 1:2': 'While PQR is similar to ABC, this answer is incomplete as it doesn\'t address the area relationship, which is the key concept being tested.',
      'PQR is congruent to ABC': 'This is incorrect. The triangles are similar but not congruent, as PQR is smaller than ABC.',
      'Perimeter of PQR = ½ Perimeter of ABC': 'While this is true, the question is asking about the relationship between the areas, not perimeters.'
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 60
  },
  {
    id: 'cl9_ch8_t4_qm17',
    type: "mcq",
    question: 'In a rhombus, the diagonals:',
    options: [
      'Are always equal',
      'Are always perpendicular to each other',
      'Divide the rhombus into four congruent triangles',
      'Both B and C are correct'
    ],
    correctAnswer: 'Both B and C are correct',
    explanation: 'In a rhombus, the diagonals bisect each other at right angles (perpendicular to each other). They also divide the rhombus into four congruent triangles because all sides of a rhombus are equal. However, the diagonals themselves are NOT necessarily equal unless the rhombus is also a square. Therefore, both options B and C are correct. 💎',
    wrongAnswerExplanations: {
      'Are always equal': 'This is incorrect. The diagonals of a rhombus are not necessarily equal unless the rhombus is also a square.',
      'Are always perpendicular to each other': 'This is only partially correct. While this is true, the diagonals also divide the rhombus into four congruent triangles.',
      'Divide the rhombus into four congruent triangles': 'This is only partially correct. While this is true, the diagonals are also perpendicular to each other.'
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 60
  },
  {
    id: 'cl9_ch8_t4_qm18',
    type: "mcq",
    question: 'If the diagonals of a quadrilateral bisect each other, which of the following statements must be true?',
    options: [
      'The quadrilateral is a kite',
      'The quadrilateral is a parallelogram',
      'The quadrilateral has all sides equal',
      'The quadrilateral has all angles equal'
    ],
    correctAnswer: 'The quadrilateral is a parallelogram',
    explanation: 'When the diagonals of a quadrilateral bisect each other, the quadrilateral must be a parallelogram. This is a defining property and one of the criteria to prove that a quadrilateral is a parallelogram. The other options may or may not be true depending on additional properties of the specific parallelogram. ⏹️',
    wrongAnswerExplanations: {
      'The quadrilateral is a kite': 'This is incorrect. In a kite, the diagonals are perpendicular but don\'t necessarily bisect each other.',
      'The quadrilateral has all sides equal': 'This is incorrect. While a rhombus has all sides equal, a general parallelogram (with diagonals bisecting each other) doesn\'t necessarily have all sides equal.',
      'The quadrilateral has all angles equal': 'This is incorrect. A parallelogram doesn\'t necessarily have all angles equal; only a rectangle or square would have this property.'
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 60
  },
  {
    id: 'cl9_ch8_t4_qm19',
    type: "mcq",
    question: 'In a triangle ABC, D is the midpoint of AB and E is the midpoint of AC. If BC = 12 cm, what is the length of DE?',
    options: [
      '3 cm',
      '4 cm',
      '6 cm',
      '12 cm'
    ],
    correctAnswer: '6 cm',
    explanation: 'According to the Mid-point Theorem, if D and E are midpoints of sides AB and AC respectively of a triangle ABC, then DE is parallel to BC and DE = ½BC. Given BC = 12 cm, we can calculate DE = ½ × 12 = 6 cm. This direct application of the theorem gives us the length without needing any other measurements. ⚡',
    wrongAnswerExplanations: {
      '3 cm': 'This is incorrect. By the Mid-point Theorem, the length of DE should be half of BC, which is 6 cm, not 3 cm.',
      '4 cm': 'This is incorrect. The correct calculation is DE = ½BC = ½ × 12 = 6 cm.',
      '12 cm': 'This is incorrect. DE is not equal to BC but rather half of BC according to the Mid-point Theorem.'
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 60
  },
  {
    id: 'cl9_ch8_t4_qm20',
    type: "mcq",
    question: 'A quadrilateral has all sides equal but not all angles equal. Which additional condition would make it a square?',
    options: [
      'Diagonals bisect each other',
      'One angle is 90°',
      'Diagonals are equal in length',
      'All angles are equal'
    ],
    correctAnswer: 'All angles are equal',
    explanation: 'A quadrilateral with all sides equal is a rhombus. For a rhombus to become a square, all angles must be equal (which means they all equal 90°). The condition that diagonals bisect each other is already satisfied by a rhombus, and having just one right angle is not sufficient for a square. Equal diagonals would make it a square, but the most direct condition is that all angles are equal. 🟦',
    wrongAnswerExplanations: {
      'Diagonals bisect each other': 'This is incorrect. Diagonals already bisect each other in a rhombus, so this doesn\'t add the additional property needed to make it a square.',
      'One angle is 90°': 'This is insufficient. For a quadrilateral to be a square, all four angles must be 90°, not just one.',
      'Diagonals are equal in length': 'While this would make a rhombus a square, the most direct condition stated is that all angles are equal.'
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 60
  }
];
