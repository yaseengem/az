// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 9\Chapter9\Topic5\quiz_medium.ts
import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
  {
    id: 'cl9_ch9_t5_qm1',
    type: "mcq",
    question: "In a cyclic quadrilateral ABCD, angle A = 80° and angle C = 120°. What is the measure of angle D?",
    options: [
      "60°",
      "80°",
      "100°",
      "120°"
    ],
    correctAnswer: "100°",
    explanation: "Opposite angles are supplementary. Since B + D = 360° - (A + C) = 160°, and B = 60°, D = 100°. 🧮",
    wrongAnswerExplanations: {
      "60°": "This would be the measure of angle B, not angle D.",
      "80°": "This is the measure of angle A, not angle D.",
      "120°": "This is the measure of angle C, not angle D."
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 45
  },
  {
    id: 'cl9_ch9_t5_qm2',
    type: "mcq",
    question: "In a cyclic quadrilateral ABCD, diagonal AC bisects angle BAD. If angle ABC = 70°, what is the measure of angle DCB?",
    options: [
      "35°",
      "55°",
      "70°",
      "110°"
    ],
    correctAnswer: "35°",
    explanation: "Angle DCB equals half of angle ABC when diagonal AC bisects angle BAD. 📐",
    wrongAnswerExplanations: {
      "55°": "This doesn't correspond to any calculation based on the given angle and the properties of cyclic quadrilaterals.",
      "70°": "This is the measure of angle ABC, not angle DCB.",
      "110°": "This exceeds the expected value for angle DCB based on the properties of cyclic quadrilaterals."
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 45
  },
  {
    id: 'cl9_ch9_t5_qm3',
    type: "mcq",
    question: "A cyclic quadrilateral ABCD has sides AB = 7 cm, BC = 24 cm, CD = 15 cm, and DA = 20 cm. What is the length of diagonal AC?",
    options: [
      "16 cm",
      "25 cm",
      "28 cm",
      "30 cm"
    ],
    correctAnswer: "25 cm",
    explanation: "Using Ptolemy's theorem: AC × BD = AB × CD + BC × DA = 585, giving AC = 25 cm. 🧮",
    wrongAnswerExplanations: {
      "16 cm": "This value doesn't satisfy Ptolemy's theorem for the given side lengths.",
      "28 cm": "This value doesn't satisfy Ptolemy's theorem for the given side lengths.",
      "30 cm": "This value doesn't satisfy Ptolemy's theorem for the given side lengths."
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 45
  },
  {
    id: 'cl9_ch9_t5_qm4',
    type: "mcq",
    question: "In a cyclic quadrilateral ABCD, diagonals AC and BD intersect at point P. If angle APB = 60° and angle CPD = 40°, what is the measure of angle ADC?",
    options: [
      "40°",
      "60°",
      "80°",
      "100°"
    ],
    correctAnswer: "40°",
    explanation: "Angle ADC equals angle CPD = 40° when diagonals intersect in a cyclic quadrilateral. 📐",
    wrongAnswerExplanations: {
      "60°": "This is the measure of angle APB, not angle ADC.",
      "80°": "This doesn't correspond to any calculation based on the given angles and the properties of cyclic quadrilaterals.",
      "100°": "This doesn't correspond to any calculation based on the given angles and the properties of cyclic quadrilaterals."
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 45
  },
  {
    id: 'cl9_ch9_t5_qm5',
    type: "mcq",
    question: "In a cyclic quadrilateral ABCD, angle A = 70° and angle B = 80°. The diagonals AC and BD intersect at point P. What is the measure of angle APD?",
    options: [
      "30°",
      "50°",
      "70°",
      "110°"
    ],
    correctAnswer: "30°",
    explanation: "Angle APD = 180° - (A + B) = 180° - 150° = 30° in a cyclic quadrilateral. 📊",
    wrongAnswerExplanations: {
      "50°": "This doesn't correspond to any calculation based on the given angles and the properties of cyclic quadrilaterals.",
      "70°": "This is the measure of angle A, not angle APD.",
      "110°": "This doesn't correspond to any calculation based on the given angles and the properties of cyclic quadrilaterals."
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 45
  },
  {
    id: 'cl9_ch9_t5_qm6',
    type: "mcq",
    question: "The measure of an exterior angle of a cyclic quadrilateral at vertex A is 130°. If angle C is the interior angle at the vertex opposite to A, what is the measure of angle C?",
    options: [
      "50°",
      "70°",
      "130°",
      "230°"
    ],
    correctAnswer: "130°",
    explanation: "An exterior angle at a vertex equals the interior angle at the opposite vertex. 🔄",
    wrongAnswerExplanations: {
      "50°": "This would be 180° - 130°, which relates to the interior angle at A, not the angle at C.",
      "70°": "This doesn't correspond to any calculation based on the given angle and the properties of cyclic quadrilaterals.",
      "230°": "This exceeds the maximum possible angle in a quadrilateral, which must be less than 180°."
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 45
  },
  {
    id: 'cl9_ch9_t5_qm7',
    type: "mcq",
    question: "In a cyclic quadrilateral ABCD, diagonal BD bisects angle ABC. If angle BAD = 40°, what is the measure of angle DCB?",
    options: [
      "20°",
      "40°",
      "80°",
      "100°"
    ],
    correctAnswer: "20°",
    explanation: "Angle DCB = BAD/2 = 20° when diagonal BD bisects angle ABC. 📏",
    wrongAnswerExplanations: {
      "40°": "This is the measure of angle BAD, not angle DCB.",
      "80°": "This doesn't correspond to any calculation based on the given angle and the properties of cyclic quadrilaterals.",
      "100°": "This doesn't correspond to any calculation based on the given angle and the properties of cyclic quadrilaterals."
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 45
  },
  {
    id: 'cl9_ch9_t5_qm8',
    type: "mcq",
    question: "In a cyclic quadrilateral ABCD, AB is a diameter of the circle. If angle ABC = 30° and angle ADC = 45°, what is the measure of angle BDC?",
    options: [
      "15°",
      "30°",
      "45°",
      "75°"
    ],
    correctAnswer: "15°",
    explanation: "Angle BDC = |ABC - ADC| = |30° - 45°| = 15° when AB is a diameter. 🔍",
    wrongAnswerExplanations: {
      "30°": "This is the measure of angle ABC, not angle BDC.",
      "45°": "This is the measure of angle ADC, not angle BDC.",
      "75°": "This would be the sum of angle ABC and angle BDC, not just angle BDC."
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 45
  },
  {
    id: 'cl9_ch9_t5_qm9',
    type: "mcq",
    question: "In a cyclic quadrilateral ABCD, angle A = 65° and angle B = 75°. The diagonals AC and BD intersect at point P. What is the measure of angle APB?",
    options: [
      "40°",
      "65°",
      "75°",
      "140°"
    ],
    correctAnswer: "40°",
    explanation: "Angle APB = 180° - (A + B) = 180° - 140° = 40° in a cyclic quadrilateral. 🧮",
    wrongAnswerExplanations: {
      "65°": "This is the measure of angle A, not angle APB.",
      "75°": "This is the measure of angle B, not angle APB.",
      "140°": "This is the sum of angle A and angle B, not angle APB."
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 45
  },
  {
    id: 'cl9_ch9_t5_qm10',
    type: "mcq",
    question: "The sides of a cyclic quadrilateral are 9 cm, 40 cm, 28 cm, and 15 cm (in order). What is the length of the longer diagonal?",
    options: [
      "35 cm",
      "39 cm",
      "41 cm",
      "45 cm"
    ],
    correctAnswer: "41 cm",
    explanation: "Using Ptolemy's theorem, the diagonals are 41 cm and 20.8 cm, so 41 cm is longer. 📏",
    wrongAnswerExplanations: {
      "35 cm": "This value doesn't satisfy Ptolemy's theorem for the given side lengths.",
      "39 cm": "This value doesn't satisfy Ptolemy's theorem for the given side lengths.",
      "45 cm": "This value doesn't satisfy Ptolemy's theorem for the given side lengths."
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 45
  },
  {
    id: 'cl9_ch9_t5_qm11',
    type: "mcq",
    question: "In a cyclic quadrilateral ABCD, angle A = 110° and angle D = 70°. What is the measure of angle C?",
    options: [
      "70°",
      "90°",
      "110°",
      "180°"
    ],
    correctAnswer: "70°",
    explanation: "Opposite angles are supplementary, so C = 180° - A = 180° - 110° = 70°. 📐",
    wrongAnswerExplanations: {
      "90°": "This doesn't satisfy the property that opposite angles in a cyclic quadrilateral are supplementary (sum to 180°).",
      "110°": "This is the measure of angle A, not angle C.",
      "180°": "This exceeds the maximum possible angle in a quadrilateral, which must be less than 180°."
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 45
  },
  {
    id: 'cl9_ch9_t5_qm12',
    type: "mcq",
    question: "The angles of a cyclic quadrilateral are in the ratio 2:3:5:8. What is the smallest angle of this quadrilateral?",
    options: [
      "20°",
      "30°",
      "40°",
      "50°"
    ],
    correctAnswer: "40°",
    explanation: "Solving 2x + 3x + 5x + 8x = 360° gives x = 20°, so smallest angle = 2x = 40°. 🧮",
    wrongAnswerExplanations: {
      "20°": "This would be the value of x, not the smallest angle which is 2x.",
      "30°": "This doesn't correspond to any calculation based on the given ratio and the properties of cyclic quadrilaterals.",
      "50°": "This doesn't correspond to any calculation based on the given ratio and the properties of cyclic quadrilaterals."
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 45
  },
  {
    id: 'cl9_ch9_t5_qm13',
    type: "mcq",
    question: "In a cyclic quadrilateral ABCD, if diagonals AC and BD are perpendicular to each other, what is the relationship between the side lengths?",
    options: [
      "AB × BC = CD × DA",
      "AB + BC = CD + DA",
      "AB × CD = BC × DA",
      "AB + CD = BC + DA"
    ],
    correctAnswer: "AB × CD = BC × DA",
    explanation: "When diagonals are perpendicular, AB × CD = BC × DA (Brahmagupta's formula). 🔄",
    wrongAnswerExplanations: {
      "AB × BC = CD × DA": "This doesn't follow from the properties of cyclic quadrilaterals with perpendicular diagonals.",
      "AB + BC = CD + DA": "This is not a general property of cyclic quadrilaterals, even with perpendicular diagonals.",
      "AB + CD = BC + DA": "This is not a general property of cyclic quadrilaterals, even with perpendicular diagonals."
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 45
  },
  {
    id: 'cl9_ch9_t5_qm14',
    type: "mcq",
    question: "In a cyclic quadrilateral ABCD, diagonal AC bisects both angle A and angle C. What type of quadrilateral is ABCD?",
    options: [
      "Square",
      "Rhombus",
      "Rectangle",
      "Kite"
    ],
    correctAnswer: "Kite",
    explanation: "If AC bisects angles A and C, then AB = BC and AD = DC, forming a kite. 📏",
    wrongAnswerExplanations: {
      "Square": "A square has all sides equal and all angles equal to 90°, which is more restrictive than what's given.",
      "Rhombus": "A rhombus has all sides equal, which is more restrictive than what's given. Not all rhombuses are cyclic.",
      "Rectangle": "A rectangle has all angles equal to 90°, which is not implied by the diagonal bisecting the angles."
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 45
  },
  {
    id: 'cl9_ch9_t5_qm15',
    type: "mcq",
    question: "The sides AB, BC, CD, and DA of a cyclic quadrilateral ABCD are in the ratio 3:4:5:6. If the perimeter of the quadrilateral is 108 cm, what is the length of side CD?",
    options: [
      "15 cm",
      "27 cm",
      "30 cm",
      "36 cm"
    ],
    correctAnswer: "30 cm",
    explanation: "Using ratio 3:4:5:6 with perimeter 108 cm gives CD = 5 × (108 ÷ 18) = 30 cm. 📏",
    wrongAnswerExplanations: {
      "15 cm": "This would correspond to a ratio of 2.5 for CD, not 5 as given.",
      "27 cm": "This doesn't correspond to any calculation based on the given ratio and perimeter.",
      "36 cm": "This is the length of side DA, not CD."
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 45
  },
  {
    id: 'cl9_ch9_t5_qm16',
    type: "mcq",
    question: "In a cyclic quadrilateral ABCD, diagonals AC and BD intersect at point P. If angle APB = 55° and angle CPD = 75°, what is the measure of angle ABC?",
    options: [
      "50°",
      "55°",
      "75°",
      "130°"
    ],
    correctAnswer: "130°",
    explanation: "Using properties of intersecting diagonals, angle ABC = 130° satisfies the cyclic quadrilateral conditions. 📊",
    wrongAnswerExplanations: {
      "50°": "This doesn't satisfy the properties of angles in a cyclic quadrilateral with the given diagonal angles.",
      "55°": "This is the measure of angle APB, not angle ABC.",
      "75°": "This is the measure of angle CPD, not angle ABC."
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 45
  },
  {
    id: 'cl9_ch9_t5_qm17',
    type: "mcq",
    question: "In a cyclic quadrilateral ABCD, the angle bisector of angle A intersects side BC at point P. If angle BAD = 60° and angle ADC = 75°, what is the measure of angle APD?",
    options: [
      "45°",
      "60°",
      "75°",
      "105°"
    ],
    correctAnswer: "105°",
    explanation: "Using cyclic quadrilateral properties, angle APD = angle ABC = 180° - ADC = 105°. 🔍",
    wrongAnswerExplanations: {
      "45°": "This doesn't correspond to any calculation based on the given angles and the properties of cyclic quadrilaterals.",
      "60°": "This is the measure of angle BAD, not angle APD.",
      "75°": "This is the measure of angle ADC, not angle APD."
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 45
  },
  {
    id: 'cl9_ch9_t5_qm18',
    type: "mcq",
    question: "The diagonals of a cyclic quadrilateral have lengths 24 cm and 10 cm. If three sides of the quadrilateral have lengths 13 cm, 15 cm, and 14 cm, what is the length of the fourth side?",
    options: [
      "8 cm",
      "12 cm",
      "16 cm",
      "20 cm"
    ],
    correctAnswer: "12 cm",
    explanation: "Using Ptolemy's theorem with appropriate arrangement of sides, 12 cm is the best fit. 📏",
    wrongAnswerExplanations: {
      "8 cm": "This value doesn't satisfy Ptolemy's theorem for the given diagonal and side lengths.",
      "16 cm": "This value doesn't satisfy Ptolemy's theorem for the given diagonal and side lengths.",
      "20 cm": "This value doesn't satisfy Ptolemy's theorem for the given diagonal and side lengths."
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 45
  },
  {
    id: 'cl9_ch9_t5_qm19',
    type: "mcq",
    question: "In a cyclic quadrilateral ABCD, sides AB and DC are parallel. If angle B = 65°, what is the measure of angle C?",
    options: [
      "65°",
      "115°",
      "125°",
      "245°"
    ],
    correctAnswer: "115°",
    explanation: "In a cyclic trapezoid, angle C = angle A = 180° - B = 115°. 🔄",
    wrongAnswerExplanations: {
      "65°": "This is the measure of angle B, but angle C = angle A in a cyclic trapezoid, not angle B.",
      "125°": "This doesn't correspond to any calculation based on the given angle and the properties of cyclic trapezoids.",
      "245°": "This exceeds the maximum possible angle in a quadrilateral, which must be less than 180°."
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 45
  },
  {
    id: 'cl9_ch9_t5_qm20',
    type: "mcq",
    question: "A rhombus is inscribed in a circle. What is the measure of all angles of the rhombus?",
    options: [
      "All angles are 60°",
      "All angles are 90°",
      "Two angles are 60° and two are 120°",
      "Two angles are 45° and two are 135°"
    ],
    correctAnswer: "All angles are 90°",
    explanation: "A cyclic rhombus must be a square with all angles equal to 90°. 📏",
    wrongAnswerExplanations: {
      "All angles are 60°": "This would make it an equilateral triangle, not a rhombus.",
      "Two angles are 60° and two are 120°": "This is typical for a rhombus that is not cyclic. A cyclic rhombus must be a square.",
      "Two angles are 45° and two are 135°": "This doesn't satisfy the property that opposite angles are both equal and supplementary."
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 45
  }
];
