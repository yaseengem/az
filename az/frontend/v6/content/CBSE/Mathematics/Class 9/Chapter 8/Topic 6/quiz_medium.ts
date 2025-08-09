// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 9\Chapter8\Topic6\quiz_medium.ts
// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 9\Chapter8\Topic6\quiz_medium.ts
import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
  {
    id: 'cl9_ch8_t6_qm1',
    type: "mcq",
    question: 'In a parallelogram ABCD, if diagonals AC and BD intersect at point O, which of the following relationships is true?',
    options: [
      'AO = CO and BO = DO',
      'AO = BO and CO = DO',
      'AO = DO and BO = CO',
      'AB = BC and CD = DA'
    ],
    correctAnswer: 'AO = CO and BO = DO',
    explanation: 'In a parallelogram, the diagonals bisect each other. This means that if diagonals AC and BD intersect at point O, then AO = CO and BO = DO. The point O divides each diagonal into two equal parts. This is a fundamental property of all parallelograms. ⏹️',
    wrongAnswerExplanations: {
      'AO = BO and CO = DO': 'This is incorrect as diagonals bisect each other, so corresponding segments are equal.',
      'AO = DO and BO = CO': 'This is incorrect as diagonals bisect each other along themselves, not across diagonals.',
      'AB = BC and CD = DA': 'This describes opposite sides being equal, not the diagonal properties.'
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 45
  },
  {
    id: 'cl9_ch8_t6_qm2',
    type: "mcq",
    question: 'If the diagonals of a rhombus are 10 cm and 24 cm, what is the area of the rhombus?',
    options: [
      '120 cm²',
      '240 cm²',
      '60 cm²',
      '480 cm²'
    ],
    correctAnswer: '120 cm²',
    explanation: 'The area of a rhombus can be calculated using the formula: Area = (½) × product of diagonals. With diagonals of 10 cm and 24 cm, the area is (½) × 10 × 24 = 120 cm². This formula works because the diagonals of a rhombus bisect each other at right angles. 💎',
    wrongAnswerExplanations: {
      '240 cm²': 'This is the product of the diagonals without taking half.',
      '60 cm²': 'This is half of the correct answer, suggesting a calculation error.',
      '480 cm²': 'This is the product of the diagonals multiplied by 2 instead of divided by 2.'
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 45
  },
  {
    id: 'cl9_ch8_t6_qm3',
    type: "mcq",
    question: 'According to the Mid-point Theorem, in triangle ABC, if D is the midpoint of AB and E is the midpoint of AC, what is the relationship between DE and BC?',
    options: [
      'DE is perpendicular to BC',
      'DE = BC',
      'DE = 2BC',
      'DE ∥ BC and DE = ½BC'
    ],
    correctAnswer: 'DE ∥ BC and DE = ½BC',
    explanation: 'The Mid-point Theorem states that in a triangle, the line segment joining the midpoints of two sides is parallel to the third side and half its length. Therefore, if D is the midpoint of AB and E is the midpoint of AC, then DE ∥ BC and DE = ½BC. This theorem is useful for solving many geometric problems. ↔️',
    wrongAnswerExplanations: {
      'DE is perpendicular to BC': 'The Mid-point Theorem states that DE is parallel to BC, not perpendicular.',
      'DE = BC': 'According to the Mid-point Theorem, DE equals half of BC, not the full length.',
      'DE = 2BC': 'The relationship is actually the opposite; DE equals half of BC, not twice its length.'
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 45
  },
  {
    id: 'cl9_ch8_t6_qm4',
    type: "mcq",
    question: 'In parallelogram ABCD, diagonal BD bisects angle ABC. What can you conclude about the parallelogram?',
    options: [
      'It is a rectangle',
      'It is a square',
      'It is a rhombus',
      'It could be any parallelogram'
    ],
    correctAnswer: 'It is a rhombus',
    explanation: 'If a diagonal of a parallelogram bisects any angle, then the parallelogram must be a rhombus. This property is specific to rhombuses due to their equal sides. In a general parallelogram, the diagonals don\'t necessarily bisect the angles, but in a rhombus, they do. 💎',
    wrongAnswerExplanations: {
      'It is a rectangle': 'In a rectangle, diagonals don\'t necessarily bisect angles unless it\'s also a square.',
      'It is a square': 'While a square has this property, the more general shape with this property is a rhombus.',
      'It could be any parallelogram': 'This property is specific to rhombuses, not general parallelograms.'
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 45
  },
  {
    id: 'cl9_ch8_t6_qm5',
    type: "mcq",
    question: 'If ABCD is a parallelogram with AB = 12 cm and BC = 5 cm, find the perimeter of ABCD.',
    options: [
      '17 cm',
      '22 cm',
      '34 cm',
      '24 cm'
    ],
    correctAnswer: '34 cm',
    explanation: 'In a parallelogram, opposite sides are equal. Since AB = 12 cm, we know that CD = 12 cm as well. Similarly, BC = 5 cm means DA = 5 cm. Therefore, the perimeter is AB + BC + CD + DA = 12 + 5 + 12 + 5 = 34 cm. The perimeter is the sum of all four sides. ⏹️',
    wrongAnswerExplanations: {
      '17 cm': 'This is just the sum of AB and BC, not the full perimeter.',
      '22 cm': 'This incorrectly counts only one side from each equal pair.',
      '24 cm': 'This would be the perimeter if all sides were 6 cm, which isn\'t the case.'
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 45
  },
  {
    id: 'cl9_ch8_t6_qm6',
    type: "mcq",
    question: 'Which of the following sets of properties uniquely defines a square?',
    options: [
      'Four equal sides',
      'Four right angles',
      'Diagonals bisect each other',
      'Four equal sides and four right angles'
    ],
    correctAnswer: 'Four equal sides and four right angles',
    explanation: 'A square is uniquely defined as a quadrilateral with four equal sides and four right angles. Having just four equal sides would define a rhombus, and having just four right angles would define a rectangle. The combination of both properties is necessary to ensure we have a square. 🟦',
    wrongAnswerExplanations: {
      'Four equal sides': 'This defines a rhombus, which doesn\'t necessarily have right angles.',
      'Four right angles': 'This defines a rectangle, which doesn\'t necessarily have equal sides.',
      'Diagonals bisect each other': 'This is a property of all parallelograms, not just squares.'
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 45
  },
  {
    id: 'cl9_ch8_t6_qm7',
    type: "mcq",
    question: 'In a parallelogram ABCD, if ∠A = 65°, what is ∠C?',
    options: [
      '25°',
      '65°',
      '115°',
      '125°'
    ],
    correctAnswer: '65°',
    explanation: 'In a parallelogram, opposite angles are equal. Since ∠A = 65°, we know that ∠C = 65° as well. This is a fundamental property of parallelograms that comes from the parallel nature of opposite sides and the properties of transversals. ⏹️',
    wrongAnswerExplanations: {
      '25°': 'This is not related to the given angle in any meaningful way.',
      '115°': 'This would be the adjacent angle (∠B or ∠D), not the opposite angle.',
      '125°': 'This is incorrectly calculated and doesn\'t relate to the properties of parallelograms.'
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 45
  },
  {
    id: 'cl9_ch8_t6_qm8',
    type: "mcq",
    question: 'If the area of a rhombus is 60 cm² and one of its diagonals is 12 cm, find the length of the other diagonal.',
    options: [
      '5 cm',
      '10 cm',
      '15 cm',
      '20 cm'
    ],
    correctAnswer: '10 cm',
    explanation: 'The area of a rhombus is half the product of its diagonals: Area = (½) × d₁ × d₂. If the area is 60 cm² and one diagonal (d₁) is 12 cm, then: 60 = (½) × 12 × d₂. Solving for d₂: d₂ = 60 × 2 ÷ 12 = 10 cm. This formula works because the diagonals of a rhombus bisect each other at right angles. 💎',
    wrongAnswerExplanations: {
      '5 cm': 'This is half the correct answer, suggesting a calculation error.',
      '15 cm': 'This would give an area of 90 cm², not 60 cm².',
      '20 cm': 'This would give an area of 120 cm², not 60 cm².'
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 45
  },
  {
    id: 'cl9_ch8_t6_qm9',
    type: "mcq",
    question: 'In quadrilateral ABCD, if AB ∥ DC, which additional condition would make ABCD a parallelogram?',
    options: [
      'AB = DC',
      'AD ∥ BC',
      'AC = BD',
      'AD = BC'
    ],
    correctAnswer: 'AD ∥ BC',
    explanation: 'For a quadrilateral to be a parallelogram, both pairs of opposite sides must be parallel. If we already know that AB ∥ DC (one pair is parallel), then the additional condition needed is AD ∥ BC (the other pair must be parallel as well). This is the definition of a parallelogram. ⏹️',
    wrongAnswerExplanations: {
      'AB = DC': 'Equal opposite sides alone don\'t guarantee a parallelogram without parallel sides.',
      'AC = BD': 'Equal diagonals make a parallelogram a rectangle, but we need to establish it\'s a parallelogram first.',
      'AD = BC': 'Equal opposite sides alone don\'t guarantee a parallelogram without parallel sides.'
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 45
  },
  {
    id: 'cl9_ch8_t6_qm10',
    type: "mcq",
    question: 'The diagonals of quadrilateral ABCD bisect each other at point O. If ∠AOB = 65°, what is ∠COD?',
    options: [
      '65°',
      '115°',
      '125°',
      '180°'
    ],
    correctAnswer: '65°',
    explanation: 'If the diagonals of a quadrilateral bisect each other, the quadrilateral is a parallelogram. In a parallelogram, the angles formed at the intersection of the diagonals that are vertically opposite are equal. Therefore, if ∠AOB = 65°, then ∠COD = 65° as well, since they are vertically opposite angles. ⏹️',
    wrongAnswerExplanations: {
      '115°': 'This would be 180° - 65°, which isn\'t relevant here as we\'re dealing with vertically opposite angles.',
      '125°': 'This is not related to the given angle in any meaningful way.',
      '180°': 'This would be the sum of adjacent angles, not vertically opposite angles.'
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 45
  },
  {
    id: 'cl9_ch8_t6_qm11',
    type: "mcq",
    question: 'In triangle ABC, points D, E, and F are the midpoints of sides BC, CA, and AB respectively. What is the ratio of the area of triangle DEF to the area of triangle ABC?',
    options: [
      '1:2',
      '1:3',
      '1:4',
      '2:3'
    ],
    correctAnswer: '1:4',
    explanation: 'When D, E, and F are the midpoints of the sides of triangle ABC, triangle DEF is called the medial triangle. By the Mid-point Theorem, each side of DEF is parallel to and half the length of the corresponding side of ABC. Since both dimensions are halved, the area is reduced to ¼ (= ½ × ½) of the original triangle\'s area. Therefore, the ratio is 1:4. 📊',
    wrongAnswerExplanations: {
      '1:2': 'This would be the ratio of the sides, not the areas.',
      '1:3': 'This is not correct; the correct ratio is 1:4.',
      '2:3': 'This is not mathematically related to the medial triangle properties.'
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 45
  },
  {
    id: 'cl9_ch8_t6_qm12',
    type: "mcq",
    question: 'A quadrilateral has diagonals that bisect each other at right angles but are not equal. This quadrilateral must be a:',
    options: [
      'Rectangle',
      'Square',
      'Rhombus',
      'Kite'
    ],
    correctAnswer: 'Rhombus',
    explanation: 'When the diagonals of a quadrilateral bisect each other at right angles but are not equal in length, the quadrilateral must be a rhombus. In a rhombus, the diagonals bisect each other perpendicularly due to the equal sides. A square would have equal diagonals in addition to the perpendicular bisection. 💎',
    wrongAnswerExplanations: {
      'Rectangle': 'In a rectangle, diagonals are equal but don\'t intersect at right angles (unless it\'s a square).',
      'Square': 'A square has diagonals that are both perpendicular and equal in length.',
      'Kite': 'In a kite, one diagonal bisects the other at right angles, but they don\'t bisect each other.'
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 45
  },
  {
    id: 'cl9_ch8_t6_qm13',
    type: "mcq",
    question: 'In parallelogram ABCD, point E is the midpoint of side BC. If diagonal AC intersects BE at point F, what is the ratio AF:FC?',
    options: [
      '1:1',
      '1:2',
      '1:3',
      '2:1'
    ],
    correctAnswer: '1:2',
    explanation: 'Since E is the midpoint of BC, BE is half of BC. In parallelogram ABCD, diagonal AC divides the parallelogram into two congruent triangles, ABC and CDA. If BE is drawn from B to the midpoint of BC, and F is where BE intersects AC, then by similar triangles, AF:FC = 1:2. This follows from the properties of midpoints and triangles within the parallelogram. ⏹️',
    wrongAnswerExplanations: {
      '1:1': 'This would imply F is the midpoint of AC, which isn\'t true given the problem setup.',
      '1:3': 'This is not the correct ratio given the geometric configuration.',
      '2:1': 'This is the inverse of the correct ratio.'
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 45
  },
  {
    id: 'cl9_ch8_t6_qm14',
    type: "mcq",
    question: 'If a quadrilateral has all sides equal but its diagonals are not equal, which type of quadrilateral is it?',
    options: [
      'Rectangle',
      'Rhombus',
      'Square',
      'Kite'
    ],
    correctAnswer: 'Rhombus',
    explanation: 'A quadrilateral with all sides equal is a rhombus. If the diagonals are not equal, then it cannot be a square (which requires both equal sides and equal diagonals). Therefore, it must be a rhombus that is not a square. A rhombus has perpendicular diagonals, but they don\'t need to be equal in length. 💎',
    wrongAnswerExplanations: {
      'Rectangle': 'A rectangle has equal diagonals but not necessarily equal sides.',
      'Square': 'A square has both equal sides and equal diagonals.',
      'Kite': 'A kite has two pairs of adjacent equal sides, not all sides equal.'
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 45
  },
  {
    id: 'cl9_ch8_t6_qm15',
    type: "mcq",
    question: 'In a parallelogram ABCD, if AB = 8 cm, AD = 6 cm and angle A = 60°, what is the area of the parallelogram?',
    options: [
      '24 cm²',
      '48 cm²',
      '24√3 cm²',
      '48√3 cm²'
    ],
    correctAnswer: '24√3 cm²',
    explanation: 'The area of a parallelogram can be calculated using the formula: Area = base × height. With AB = 8 cm as the base, we need to find the height. Using trigonometry, the height is AD × sin(∠A) = 6 × sin(60°) = 6 × √3/2 = 3√3. Therefore, the area is 8 × 3√3 = 24√3 cm². This calculation uses the sine formula to find the perpendicular height. ⏹️',
    wrongAnswerExplanations: {
      '24 cm²': 'This ignores the trigonometric factor from the angle.',
      '48 cm²': 'This incorrectly calculates the area as simply AB × AD.',
      '48√3 cm²': 'This is twice the correct answer, suggesting a calculation error.'
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 45
  },
  {
    id: 'cl9_ch8_t6_qm16',
    type: "mcq",
    question: 'In triangle ABC, D is the midpoint of AB and E is the midpoint of AC. If BC = 15 cm and DE = 8 cm, what can you conclude?',
    options: [
      'The Mid-point Theorem is not applicable',
      'Triangle ABC is equilateral',
      'DE is not parallel to BC',
      'There is an error in the measurements'
    ],
    correctAnswer: 'There is an error in the measurements',
    explanation: 'According to the Mid-point Theorem, if D is the midpoint of AB and E is the midpoint of AC, then DE ∥ BC and DE = ½BC. If BC = 15 cm, then DE should equal 7.5 cm. Since we\'re given that DE = 8 cm, there must be an error in the measurements. The Mid-point Theorem is a proven result that cannot be violated if the points are truly midpoints. ↔️',
    wrongAnswerExplanations: {
      'The Mid-point Theorem is not applicable': 'The theorem is applicable whenever we have midpoints of two sides of a triangle.',
      'Triangle ABC is equilateral': 'Even in an equilateral triangle, the Mid-point Theorem would require DE = 7.5 cm.',
      'DE is not parallel to BC': 'The Mid-point Theorem guarantees that DE is parallel to BC if D and E are midpoints.'
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 45
  },
  {
    id: 'cl9_ch8_t6_qm17',
    type: "mcq",
    question: 'In a rhombus, if one diagonal is twice the length of the other diagonal, what is the acute angle of the rhombus?',
    options: [
      '30°',
      '45°',
      '60°',
      '75°'
    ],
    correctAnswer: '45°',
    explanation: 'In a rhombus, the diagonals bisect each other at right angles. If one diagonal is twice the length of the other, we can use trigonometry to find the angles. Let the diagonals be 2d and d. Using the formula tan(θ/2) = (shorter diagonal)/(longer diagonal), we get tan(θ/2) = d/(2d) = 1/2, so θ/2 = 26.57°. Therefore, θ ≈ 53.13° and the acute angle is 180° - 53.13° = 45° (approximately). 💎',
    wrongAnswerExplanations: {
      '30°': 'This would require a different ratio of diagonals.',
      '60°': 'This would require a different ratio of diagonals.',
      '75°': 'This would require a different ratio of diagonals.'
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 45
  },
  {
    id: 'cl9_ch8_t6_qm18',
    type: "mcq",
    question: 'A quadrilateral has one pair of parallel sides and the non-parallel sides are equal. This quadrilateral is:',
    options: [
      'A parallelogram',
      'An isosceles trapezium',
      'A rhombus',
      'A kite'
    ],
    correctAnswer: 'An isosceles trapezium',
    explanation: 'A quadrilateral with exactly one pair of parallel sides is a trapezium. If the non-parallel sides are equal in length, it is specifically called an isosceles trapezium. This creates a trapezium with symmetry along the perpendicular bisector of the parallel sides. It cannot be a parallelogram because only one pair of sides is parallel. 📏',
    wrongAnswerExplanations: {
      'A parallelogram': 'A parallelogram has two pairs of parallel sides, not just one.',
      'A rhombus': 'A rhombus has all four sides equal and opposite sides parallel.',
      'A kite': 'A kite has two pairs of adjacent equal sides, but doesn\'t necessarily have parallel sides.'
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 45
  },
  {
    id: 'cl9_ch8_t6_qm19',
    type: "mcq",
    question: 'In a parallelogram ABCD, the diagonals AC and BD intersect at point O. If triangle AOB has an area of 12 cm², what is the area of the parallelogram ABCD?',
    options: [
      '24 cm²',
      '36 cm²',
      '48 cm²',
      '72 cm²'
    ],
    correctAnswer: '48 cm²',
    explanation: 'In a parallelogram, the diagonals divide it into four triangles of equal area. If triangle AOB has an area of 12 cm², then triangles BOC, COD, and DOA also have areas of 12 cm² each. Therefore, the total area of the parallelogram is 4 × 12 = 48 cm². This property follows from the fact that diagonals bisect each other in a parallelogram. ⏹️',
    wrongAnswerExplanations: {
      '24 cm²': 'This accounts for only two of the four triangles formed by the diagonals.',
      '36 cm²': 'This accounts for only three of the four triangles formed by the diagonals.',
      '72 cm²': 'This is 1.5 times the correct answer, suggesting a calculation error.'
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 45
  },
  {
    id: 'cl9_ch8_t6_qm20',
    type: "mcq",
    question: 'If the diagonals of a quadrilateral are perpendicular to each other but do not bisect each other, the quadrilateral is:',
    options: [
      'A rhombus',
      'A rectangle',
      'A kite',
      'A parallelogram'
    ],
    correctAnswer: 'A kite',
    explanation: 'When the diagonals of a quadrilateral are perpendicular to each other but do not bisect each other, the quadrilateral is a kite. This is a defining property of kites—they have perpendicular diagonals, with one diagonal bisecting the other. In contrast, rhombuses have diagonals that both bisect each other and are perpendicular. 🪁',
    wrongAnswerExplanations: {
      'A rhombus': 'In a rhombus, diagonals are perpendicular AND bisect each other.',
      'A rectangle': 'In a rectangle, diagonals bisect each other but are not perpendicular.',
      'A parallelogram': 'In a parallelogram, diagonals bisect each other but are not necessarily perpendicular.'
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 45
  }
];
