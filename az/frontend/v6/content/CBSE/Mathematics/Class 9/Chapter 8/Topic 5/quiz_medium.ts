// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 9\Chapter8\Topic5\quiz_medium.ts
import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
  {
    id: 'cl9_ch8_t5_qm1',
    type: "mcq",
    question: 'In a quadrilateral ABCD, if AB ∥ CD, AB = CD, and AC bisects both angles A and C, then ABCD is a:',
    options: [
      'Rectangle',
      'Rhombus',
      'Square',
      'Trapezium'
    ],
    correctAnswer: 'Rhombus',
    explanation: 'When opposite sides are parallel and equal (AB ∥ CD and AB = CD), the quadrilateral is a parallelogram. The additional condition that AC bisects angles A and C means the diagonal is an angle bisector, which is a special property of rhombuses. 💎',
    wrongAnswerExplanations: {
      'Rectangle': 'A rectangle has equal diagonals, but diagonals don\'t necessarily bisect the angles. The given information about angle bisection indicates a rhombus.',
      'Square': 'While a square would satisfy these conditions, we don\'t have information about right angles or all sides being equal, so we can only conclude it\'s a rhombus.',
      'Trapezium': 'A trapezium has only one pair of parallel sides, but here we have both pairs of opposite sides parallel and equal, making it a parallelogram, specifically a rhombus.'
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 45
  },
  {
    id: 'cl9_ch8_t5_qm2',
    type: "mcq",
    question: 'In a quadrilateral ABCD, diagonals AC and BD intersect at O. If OA = OC and OB = OD, then ABCD must be a:',
    options: [
      'Kite',
      'Trapezium',
      'Parallelogram',
      'Square'
    ],
    correctAnswer: 'Parallelogram',
    explanation: 'When diagonals of a quadrilateral bisect each other (OA = OC and OB = OD), the quadrilateral is a parallelogram. This is one of the criteria to prove that a quadrilateral is a parallelogram. Without additional information, we cannot conclude it\'s a more specific type. ⏹️',
    wrongAnswerExplanations: {
      'Kite': 'In a kite, one diagonal bisects the other, but both diagonals don\'t necessarily bisect each other. The given condition that both diagonals bisect each other indicates a parallelogram.',
      'Trapezium': 'A trapezium doesn\'t have diagonals that bisect each other. This property is specific to parallelograms and their special cases.',
      'Square': 'While a square would satisfy these conditions, we don\'t have enough information about equal sides or right angles to conclude it\'s a square.'
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 45
  },
  {
    id: 'cl9_ch8_t5_qm3',
    type: "mcq",
    question: 'If the diagonals of a quadrilateral are equal and bisect each other, then it is a:',
    options: [
      'Parallelogram',
      'Rhombus',
      'Rectangle',
      'Square'
    ],
    correctAnswer: 'Rectangle',
    explanation: 'When diagonals bisect each other, the quadrilateral is a parallelogram. The additional condition that the diagonals are equal in length makes it a rectangle. A rectangle has perpendicular sides and equal diagonals that bisect each other. 📏',
    wrongAnswerExplanations: {
      'Parallelogram': 'While it is a parallelogram (since diagonals bisect each other), the additional condition that diagonals are equal further specifies it as a rectangle.',
      'Rhombus': 'A rhombus has diagonals that bisect each other at right angles, but they aren\'t necessarily equal in length. Equal diagonals indicate a rectangle.',
      'Square': 'While a square would satisfy these conditions, we don\'t have enough information about all sides being equal to conclude it\'s a square.'
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 45
  },
  {
    id: 'cl9_ch8_t5_qm4',
    type: "mcq",
    question: 'In a parallelogram ABCD, if all angles are equal, what type of parallelogram is it?',
    options: [
      'Rhombus',
      'Rectangle',
      'Square',
      'Kite'
    ],
    correctAnswer: 'Rectangle',
    explanation: 'In a parallelogram, if all angles are equal, then each angle must be 90° (as the sum of angles in a quadrilateral is 360°). A parallelogram with all 90° angles is a rectangle. This property defines rectangles among parallelograms. 📐',
    wrongAnswerExplanations: {
      'Rhombus': 'A rhombus has all sides equal but doesn\'t necessarily have equal angles. The given condition of equal angles specifies a rectangle.',
      'Square': 'While a square has all equal angles, we don\'t have information about all sides being equal, so we can only conclude it\'s a rectangle.',
      'Kite': 'A kite has two pairs of adjacent equal sides and doesn\'t have all angles equal. The given condition indicates a rectangle.'
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 45
  },
  {
    id: 'cl9_ch8_t5_qm5',
    type: "mcq",
    question: 'In a rhombus, what is the relationship between the diagonals?',
    options: [
      'They are equal in length',
      'They are parallel to each other',
      'They bisect each other at right angles',
      'They form 45° angles with all sides'
    ],
    correctAnswer: 'They bisect each other at right angles',
    explanation: 'In a rhombus, the diagonals bisect each other at right angles (they are perpendicular to each other). This property distinguishes rhombuses from other parallelograms. The diagonals also bisect the angles at the vertices of the rhombus. ⚡',
    wrongAnswerExplanations: {
      'They are equal in length': 'Diagonals of a rhombus are not necessarily equal. Equal diagonals would indicate a square, which is a special case of a rhombus.',
      'They are parallel to each other': 'Diagonals of a quadrilateral can never be parallel to each other as they connect opposite vertices.',
      'They form 45° angles with all sides': 'The diagonals of a rhombus don\'t necessarily form 45° angles with all sides. This would be true only in certain special cases.'
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 45
  },
  {
    id: 'cl9_ch8_t5_qm6',
    type: "mcq",
    question: 'Using the Mid-point Theorem, if D and E are the midpoints of sides AB and BC of triangle ABC, what is the relationship between DE and AC?',
    options: [
      'DE ∥ AC and DE = AC',
      'DE ∥ AC and DE = ½ AC',
      'DE ⊥ AC and DE = ½ AC',
      'DE and AC have no specific relationship'
    ],
    correctAnswer: 'DE ∥ AC and DE = ½ AC',
    explanation: 'According to the Mid-point Theorem, the line joining the midpoints of two sides of a triangle is parallel to the third side and equal to half its length. So if D and E are midpoints of AB and BC, then DE ∥ AC and DE = ½ AC. 📊',
    wrongAnswerExplanations: {
      'DE ∥ AC and DE = AC': 'While DE is parallel to AC, the length of DE is half of AC, not equal to AC, according to the Mid-point Theorem.',
      'DE ⊥ AC and DE = ½ AC': 'The Mid-point Theorem states that DE is parallel to AC, not perpendicular to it.',
      'DE and AC have no specific relationship': 'The Mid-point Theorem establishes a very specific relationship between DE and AC, both in terms of direction and length.'
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 45
  },
  {
    id: 'cl9_ch8_t5_qm7',
    type: "mcq",
    question: 'In a parallelogram ABCD, if diagonal AC bisects angle A, what type of parallelogram is ABCD?',
    options: [
      'Rectangle',
      'Rhombus',
      'Square',
      'Cannot be determined'
    ],
    correctAnswer: 'Rhombus',
    explanation: 'If a diagonal of a parallelogram bisects any of its angles, then the parallelogram must be a rhombus. This is because in a rhombus, the diagonals bisect the angles they connect, which happens because all sides are equal in length. 💎',
    wrongAnswerExplanations: {
      'Rectangle': 'In a rectangle, the diagonals are equal but do not necessarily bisect the angles.',
      'Square': 'While a square would satisfy this condition, we don\'t have enough information about right angles to conclude it\'s a square.',
      'Cannot be determined': 'The property that a diagonal bisects an angle is sufficient to determine that the parallelogram is a rhombus.'
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 45
  },
  {
    id: 'cl9_ch8_t5_qm8',
    type: "mcq",
    question: 'If the diagonals of a parallelogram are perpendicular to each other, what type of parallelogram is it?',
    options: [
      'Rectangle',
      'Rhombus',
      'Square',
      'Cannot be determined'
    ],
    correctAnswer: 'Rhombus',
    explanation: 'When the diagonals of a parallelogram are perpendicular to each other, the parallelogram must be a rhombus. This is a defining property that distinguishes rhombuses from other parallelograms and arises because all sides of a rhombus are equal. ⏹️',
    wrongAnswerExplanations: {
      'Rectangle': 'In a rectangle, the diagonals are equal in length but not necessarily perpendicular to each other.',
      'Square': 'While a square has perpendicular diagonals, we don\'t have enough information about angles to conclude it\'s a square.',
      'Cannot be determined': 'The property of perpendicular diagonals is sufficient to determine that the parallelogram is a rhombus.'
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 45
  },
  {
    id: 'cl9_ch8_t5_qm9',
    type: "mcq",
    question: 'In a parallelogram ABCD, if diagonals AC and BD are equal, what type of parallelogram is ABCD?',
    options: [
      'Rhombus',
      'Rectangle',
      'Square',
      'Cannot be determined'
    ],
    correctAnswer: 'Rectangle',
    explanation: 'When the diagonals of a parallelogram are equal in length, the parallelogram must be a rectangle. This is a defining property of rectangles among parallelograms and results from all angles being 90°. 📏',
    wrongAnswerExplanations: {
      'Rhombus': 'In a rhombus, the diagonals are perpendicular but not necessarily equal in length.',
      'Square': 'While a square has equal diagonals, we don\'t have information about all sides being equal, so we can only conclude it\'s a rectangle.',
      'Cannot be determined': 'The property of equal diagonals is sufficient to determine that the parallelogram is a rectangle.'
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 45
  },
  {
    id: 'cl9_ch8_t5_qm10',
    type: "mcq",
    question: 'If the diagonals of a quadrilateral bisect each other at right angles and are equal in length, what type of quadrilateral is it?',
    options: [
      'Rhombus',
      'Rectangle',
      'Square',
      'Parallelogram'
    ],
    correctAnswer: 'Square',
    explanation: 'When diagonals bisect each other, the quadrilateral is a parallelogram. If they are perpendicular (at right angles), it\'s a rhombus. If they are equal in length, it\'s a rectangle. When both conditions are true, it must be a square - the only quadrilateral with diagonals that are both perpendicular and equal. 🟦',
    wrongAnswerExplanations: {
      'Rhombus': 'While a rhombus has diagonals that bisect each other at right angles, its diagonals are not necessarily equal in length.',
      'Rectangle': 'While a rectangle has equal diagonals that bisect each other, its diagonals are not necessarily perpendicular.',
      'Parallelogram': 'A general parallelogram has diagonals that bisect each other, but they are neither necessarily perpendicular nor equal in length.'
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 45
  },
  {
    id: 'cl9_ch8_t5_qm11',
    type: "mcq",
    question: 'In triangle ABC, D, E, and F are the midpoints of sides BC, CA, and AB respectively. What is the perimeter of triangle DEF compared to triangle ABC?',
    options: [
      'The same',
      'Half as much',
      'One-third as much',
      'One-fourth as much'
    ],
    correctAnswer: 'Half as much',
    explanation: 'By the Mid-point Theorem, each side of triangle DEF is parallel to and half the length of the corresponding side of triangle ABC. Therefore, the perimeter of DEF is half the perimeter of ABC. This creates what\'s known as the medial triangle. 📊',
    wrongAnswerExplanations: {
      'The same': 'The sides of triangle DEF are half the length of the corresponding sides of triangle ABC, so the perimeter can\'t be the same.',
      'One-third as much': 'By the Mid-point Theorem, each side is reduced by a factor of 2, not 3, so the perimeter is half, not one-third.',
      'One-fourth as much': 'While the area of triangle DEF is one-fourth the area of triangle ABC, the perimeter is half, not one-fourth.'
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 45
  },
  {
    id: 'cl9_ch8_t5_qm12',
    type: "mcq",
    question: 'If diagonals of a parallelogram divide it into four triangles of equal area, what type of parallelogram is it?',
    options: [
      'Rectangle',
      'Rhombus',
      'Square',
      'Any parallelogram'
    ],
    correctAnswer: 'Any parallelogram',
    explanation: 'In any parallelogram, the diagonals divide it into four triangles of equal area. This is a general property of all parallelograms, not just specific types. This occurs because the diagonals bisect each other, creating triangles with the same base and between the same parallels. ⏹️',
    wrongAnswerExplanations: {
      'Rectangle': 'While this property is true for rectangles, it\'s not unique to them. It applies to all parallelograms.',
      'Rhombus': 'While this property is true for rhombuses, it\'s not unique to them. It applies to all parallelograms.',
      'Square': 'While this property is true for squares, it\'s not unique to them. It applies to all parallelograms.'
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 45
  },
  {
    id: 'cl9_ch8_t5_qm13',
    type: "mcq",
    question: 'Using the Mid-point Theorem, if P is the midpoint of side AB and Q is the midpoint of side AC of triangle ABC, what can be concluded about PQ and BC?',
    options: [
      'PQ and BC are perpendicular',
      'PQ = BC',
      'PQ ∥ BC and PQ = ½BC',
      'PQ ∥ BC and PQ = 2BC'
    ],
    correctAnswer: 'PQ ∥ BC and PQ = ½BC',
    explanation: 'According to the Mid-point Theorem, if P and Q are the midpoints of sides AB and AC respectively of triangle ABC, then PQ is parallel to BC and equal to half its length. Therefore, PQ ∥ BC and PQ = ½BC. ⚡',
    wrongAnswerExplanations: {
      'PQ and BC are perpendicular': 'The Mid-point Theorem states that PQ is parallel to BC, not perpendicular to it.',
      'PQ = BC': 'According to the Mid-point Theorem, the length of PQ is half the length of BC, not equal to it.',
      'PQ ∥ BC and PQ = 2BC': 'The Mid-point Theorem states that PQ = ½BC, not 2BC. The line joining midpoints is smaller, not larger than the third side.'
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 45
  },
  {
    id: 'cl9_ch8_t5_qm14',
    type: "mcq",
    question: 'In a quadrilateral ABCD, if both pairs of opposite sides are equal but not parallel, what type of quadrilateral is it?',
    options: [
      'Parallelogram',
      'Kite',
      'Rhombus',
      'Cannot form a quadrilateral'
    ],
    correctAnswer: 'Parallelogram',
    explanation: 'If both pairs of opposite sides of a quadrilateral are equal in length, then the quadrilateral must be a parallelogram. While we typically define a parallelogram by having parallel sides, having equal opposite sides is an equivalent definition and implies the sides must also be parallel. ⏹️',
    wrongAnswerExplanations: {
      'Kite': 'A kite has two pairs of adjacent equal sides, not opposite equal sides.',
      'Rhombus': 'A rhombus is a parallelogram with all sides equal. We only know that opposite sides are equal, not all four sides.',
      'Cannot form a quadrilateral': 'It\'s incorrect to say it cannot form a quadrilateral. In fact, if opposite sides are equal, they must also be parallel, forming a parallelogram.'
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 45
  },
  {
    id: 'cl9_ch8_t5_qm15',
    type: "mcq",
    question: 'In a quadrilateral ABCD, if AB = CD and AD = BC, what must be true about the quadrilateral?',
    options: [
      'It is a rectangle',
      'It is a rhombus',
      'It is a parallelogram',
      'It is a square'
    ],
    correctAnswer: 'It is a parallelogram',
    explanation: 'If both pairs of opposite sides of a quadrilateral are equal (AB = CD and AD = BC), then the quadrilateral is a parallelogram. This is one of the criteria to prove that a quadrilateral is a parallelogram. Without additional information, we cannot determine if it\'s a more specific type. 📏',
    wrongAnswerExplanations: {
      'It is a rectangle': 'While a rectangle does have opposite sides equal, we don\'t have information about the angles being 90° to conclude it\'s a rectangle.',
      'It is a rhombus': 'A rhombus requires all sides to be equal, not just opposite sides. From the given information, we only know opposite sides are equal.',
      'It is a square': 'A square requires all sides equal and all angles 90°. We only know that opposite sides are equal, which only guarantees it\'s a parallelogram.'
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 45
  },
  {
    id: 'cl9_ch8_t5_qm16',
    type: "mcq",
    question: 'In the converse of the Mid-point Theorem, if a line passes through the midpoint of one side of a triangle and is parallel to another side, what does it do to the third side?',
    options: [
      'It is perpendicular to the third side',
      'It bisects the third side',
      'It forms a 45° angle with the third side',
      'It has no specific relationship with the third side'
    ],
    correctAnswer: 'It bisects the third side',
    explanation: 'According to the converse of the Mid-point Theorem, if a line passes through the midpoint of one side of a triangle and is parallel to another side, then it bisects the third side. This powerful property allows us to identify midpoints in geometric figures. 📊',
    wrongAnswerExplanations: {
      'It is perpendicular to the third side': 'The converse of the Mid-point Theorem doesn\'t establish perpendicularity with the third side.',
      'It forms a 45° angle with the third side': 'The theorem doesn\'t specify any particular angle formed with the third side.',
      'It has no specific relationship with the third side': 'There is a very specific relationship: the line bisects the third side.'
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 45
  },
  {
    id: 'cl9_ch8_t5_qm17',
    type: "mcq",
    question: 'In triangle PQR, if S is the midpoint of PQ and T is the midpoint of PR, what is the ratio of the area of triangle PST to the area of triangle PQR?',
    options: [
      '1:2',
      '1:3',
      '1:4',
      '1:6'
    ],
    correctAnswer: '1:4',
    explanation: 'By the Mid-point Theorem, ST ∥ QR and ST = ½QR. This means triangle PST has both its base (ST) and height (perpendicular from P to ST) as half of triangle PQR. Since area depends on both dimensions, the ratio of areas is 1:4 (½ × ½ = ¼). 📊',
    wrongAnswerExplanations: {
      '1:2': 'This would be the ratio if only one dimension (either base or height) were halved, but both are halved.',
      '1:3': 'There\'s no mathematical basis for a 1:3 ratio in this scenario.',
      '1:6': 'The ratio 1:6 doesn\'t reflect the relationship between the areas when both dimensions are halved.'
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 45
  },
  {
    id: 'cl9_ch8_t5_qm18',
    type: "mcq",
    question: 'If ABCD is a parallelogram and P is any point on diagonal BD, then what is the relationship between the areas of triangles APB and CPD?',
    options: [
      'Area of APB > Area of CPD',
      'Area of APB < Area of CPD',
      'Area of APB = Area of CPD',
      'Cannot be determined without specific measurements'
    ],
    correctAnswer: 'Area of APB = Area of CPD',
    explanation: 'In a parallelogram ABCD, if P is any point on diagonal BD, the areas of triangles APB and CPD are equal. This is because triangles with the same base (or equal bases) and between the same parallels have equal areas. In this case, they share parts of the diagonal BD. ⏹️',
    wrongAnswerExplanations: {
      'Area of APB > Area of CPD': 'There\'s no reason for triangle APB to have a greater area than CPD; they\'re equal by the principle of triangles between the same parallels.',
      'Area of APB < Area of CPD': 'There\'s no reason for triangle APB to have a lesser area than CPD; they\'re equal by the principle of triangles between the same parallels.',
      'Cannot be determined without specific measurements': 'We can determine the relationship without specific measurements using principles of geometry.'
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 45
  },
  {
    id: 'cl9_ch8_t5_qm19',
    type: "mcq",
    question: 'In a kite ABCD with AB = AD and CB = CD, which of the following is true about the diagonals?',
    options: [
      'They are equal in length',
      'They bisect each other',
      'One diagonal bisects the other at right angles',
      'Both diagonals are angle bisectors'
    ],
    correctAnswer: 'One diagonal bisects the other at right angles',
    explanation: 'In a kite ABCD with AB = AD and CB = CD, one diagonal (AC) acts as an axis of symmetry and bisects the other diagonal (BD) at right angles. The diagonal BD does not bisect AC. Also, the diagonal AC bisects the angles at A and C, while BD bisects angles at B and D. 🔷',
    wrongAnswerExplanations: {
      'They are equal in length': 'The diagonals of a kite are not necessarily equal in length unless it\'s also a rhombus.',
      'They bisect each other': 'In a kite, one diagonal bisects the other, but they don\'t necessarily bisect each other (which would mean both diagonals are bisected).',
      'Both diagonals are angle bisectors': 'While both diagonals do bisect angles, each bisects different angles. AC bisects angles at A and C, BD bisects angles at B and D.'
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 45
  },
  {
    id: 'cl9_ch8_t5_qm20',
    type: "mcq",
    question: 'In triangle ABC, D is the midpoint of AB and E is the midpoint of AC. If BC = 8 cm and angle ABC = 60°, what is the length of DE?',
    options: [
      '2 cm',
      '4 cm',
      '6 cm',
      '8 cm'
    ],
    correctAnswer: '4 cm',
    explanation: 'According to the Mid-point Theorem, if D and E are midpoints of sides AB and AC respectively of a triangle ABC, then DE ∥ BC and DE = ½BC. Given BC = 8 cm, we can calculate DE = ½ × 8 = 4 cm. The angle ABC does not affect this relationship. ⚡',
    wrongAnswerExplanations: {
      '2 cm': 'This would be the case if DE = ¼BC, but the Mid-point Theorem states that DE = ½BC.',
      '6 cm': 'This would be the case if DE = ¾BC, but the Mid-point Theorem states that DE = ½BC.',
      '8 cm': 'This would be the case if DE = BC, but the Mid-point Theorem states that DE = ½BC.'
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 45
  }
];
