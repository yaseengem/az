// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 9\Chapter8\Topic1\quiz_easy.ts
import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
  {
    id: 'cl9_ch8_t1_qe1',
    type: "mcq",
    question: 'What is a parallelogram?',
    options: [
      'A quadrilateral with only one pair of parallel sides',
      'A quadrilateral with all four sides equal',
      'A quadrilateral with opposite sides parallel',
      'A quadrilateral with all angles equal to 90°'
    ],
    correctAnswer: 'A quadrilateral with opposite sides parallel',
    explanation: 'A parallelogram is a quadrilateral with opposite sides parallel to each other. This is the defining property of parallelograms. ⬜️',
    wrongAnswerExplanations: {
      'A quadrilateral with only one pair of parallel sides': 'This describes a trapezium, which has exactly one pair of parallel sides, not a parallelogram.',
      'A quadrilateral with all four sides equal': 'This describes a rhombus. While a rhombus is a type of parallelogram, not all parallelograms have equal sides.',
      'A quadrilateral with all angles equal to 90°': 'This describes a rectangle, which is a special type of parallelogram where all angles are 90°.'
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl9_ch8_t1_qe2',
    type: "mcq",
    question: 'Which of the following is NOT a property of a parallelogram?',
    options: [
      'Opposite sides are equal',
      'Opposite angles are equal',
      'All angles are equal',
      'Diagonals bisect each other'
    ],
    correctAnswer: 'All angles are equal',
    explanation: 'In a parallelogram, opposite sides are equal, opposite angles are equal, and diagonals bisect each other, but all angles are equal only in a special case (rectangle). 📐',
    wrongAnswerExplanations: {
      'Opposite sides are equal': 'This is a true property of all parallelograms. The opposite sides of any parallelogram are equal in length.',
      'Opposite angles are equal': 'This is a true property of all parallelograms. The opposite angles of any parallelogram are equal.',
      'Diagonals bisect each other': 'This is a true property of all parallelograms. The diagonals always intersect at a point that divides each diagonal into two equal parts.'
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl9_ch8_t1_qe3',
    type: "mcq",
    question: 'In a parallelogram ABCD, if angle A = 70°, what is the measure of angle C?',
    options: [
      '70°',
      '110°',
      '90°',
      '180°'
    ],
    correctAnswer: '70°',
    explanation: 'In a parallelogram, opposite angles are equal. So, if angle A = 70°, then angle C = 70° as well. 📏',
    wrongAnswerExplanations: {
      '110°': 'This would be the measure of angles adjacent to A (like angle B or D), not the opposite angle C.',
      '90°': 'There is no reason for angle C to be 90° when angle A is 70°. Opposite angles in a parallelogram are equal.',
      '180°': 'The sum of all four angles in a parallelogram is 360°, not 180°. No single angle can be 180°.'
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl9_ch8_t1_qe4',
    type: "mcq",
    question: 'If the adjacent angles of a parallelogram are 65° and 115°, what are the measures of all four angles?',
    options: [
      '65°, 115°, 65°, 115°',
      '65°, 65°, 115°, 115°',
      '65°, 115°, 115°, 65°',
      '115°, 65°, 115°, 65°'
    ],
    correctAnswer: '65°, 115°, 65°, 115°',
    explanation: 'In a parallelogram, adjacent angles are supplementary (sum to 180°) and opposite angles are equal. So the angles are 65°, 115°, 65°, 115° going around the parallelogram. 🔄',
    wrongAnswerExplanations: {
      '65°, 65°, 115°, 115°': 'This arrangement would place equal angles adjacent to each other, which violates the property that adjacent angles in a parallelogram are supplementary.',
      '65°, 115°, 115°, 65°': 'This arrangement would place 115° opposite to 65°, which violates the property that opposite angles in a parallelogram are equal.',
      '115°, 65°, 115°, 65°': 'While the values are correct, this represents a different ordering than what was asked, starting with a different vertex.'
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl9_ch8_t1_qe5',
    type: "mcq",
    question: 'In a parallelogram, if one angle is a right angle, then:',
    options: [
      'Only the opposite angle is also a right angle',
      'All angles are right angles',
      'No other angle can be a right angle',
      'The adjacent angles must be acute'
    ],
    correctAnswer: 'All angles are right angles',
    explanation: 'If one angle in a parallelogram is a right angle (90°), then all angles must be right angles, making it a rectangle. This is because opposite angles are equal and adjacent angles are supplementary. 📦',
    wrongAnswerExplanations: {
      'Only the opposite angle is also a right angle': 'While the opposite angle would indeed be a right angle, the adjacent angles must also be right angles due to the supplementary property.',
      'No other angle can be a right angle': 'This contradicts the properties of parallelograms where opposite angles are equal.',
      'The adjacent angles must be acute': 'If one angle is 90° and adjacent angles are supplementary (sum to 180°), then adjacent angles must also be 90°, not acute.'
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl9_ch8_t1_qe6',
    type: "mcq",
    question: 'Which of the following is true about the diagonals of a parallelogram?',
    options: [
      'They are equal in length',
      'They bisect each other',
      'They are perpendicular to each other',
      'They bisect the angles of the parallelogram'
    ],
    correctAnswer: 'They bisect each other',
    explanation: 'The diagonals of a parallelogram bisect each other (divide each other into two equal parts at their point of intersection). ✂️',
    wrongAnswerExplanations: {
      'They are equal in length': 'Diagonals of a parallelogram are not necessarily equal in length. They are equal only in specific cases like rectangles and squares.',
      'They are perpendicular to each other': 'Diagonals of a parallelogram are not necessarily perpendicular. They are perpendicular only in specific cases like rhombuses and squares.',
      'They bisect the angles of the parallelogram': 'Diagonals of a general parallelogram do not bisect the angles. This property is true only for specific parallelograms like rhombuses and squares.'
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl9_ch8_t1_qe7',
    type: "mcq",
    question: 'In a parallelogram ABCD, if AB = 7 cm, what is the length of CD?',
    options: [
      '3.5 cm',
      '14 cm',
      '7 cm',
      'Cannot be determined'
    ],
    correctAnswer: '7 cm',
    explanation: 'In a parallelogram, opposite sides are equal in length. So if AB = 7 cm, then CD = 7 cm as well. 📏',
    wrongAnswerExplanations: {
      '3.5 cm': 'This would be half of AB, but opposite sides are equal, not half of each other.',
      '14 cm': 'This would be double AB, but opposite sides are equal, not double each other.',
      'Cannot be determined': 'We can determine CD because in a parallelogram, opposite sides are equal.'
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl9_ch8_t1_qe8',
    type: "mcq",
    question: 'If the perimeter of a parallelogram is 36 cm and one of its sides is 10 cm, what is the length of the adjacent side?',
    options: [
      '8 cm',
      '10 cm',
      '18 cm',
      '26 cm'
    ],
    correctAnswer: '8 cm',
    explanation: 'The perimeter of a parallelogram is 2(a + b), where a and b are the lengths of adjacent sides. So 36 = 2(10 + b), which gives b = 8 cm. 🧮',
    wrongAnswerExplanations: {
      '10 cm': 'If both adjacent sides were 10 cm, the perimeter would be 2(10 + 10) = 40 cm, not 36 cm.',
      '18 cm': 'This is the sum of one side (10 cm) and the unknown side (8 cm), not the length of the adjacent side.',
      '26 cm': 'This would be more than half the perimeter, which is not possible for a single side of the parallelogram.'
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl9_ch8_t1_qe9',
    type: "mcq",
    question: 'Which of the following quadrilaterals is always a parallelogram?',
    options: [
      'Kite',
      'Trapezium',
      'Rhombus',
      'Cyclic quadrilateral'
    ],
    correctAnswer: 'Rhombus',
    explanation: 'A rhombus is a quadrilateral with all sides equal, and it always satisfies the properties of a parallelogram (opposite sides parallel). 💎',
    wrongAnswerExplanations: {
      'Kite': 'A kite has two pairs of adjacent equal sides, but its opposite sides are not necessarily parallel, so it is not always a parallelogram.',
      'Trapezium': 'A trapezium has only one pair of parallel sides, whereas a parallelogram must have both pairs of opposite sides parallel.',
      'Cyclic quadrilateral': 'A cyclic quadrilateral has all vertices on a circle, but its opposite sides are not necessarily parallel.'
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl9_ch8_t1_qe10',
    type: "mcq",
    question: 'What is the sum of all interior angles of a parallelogram?',
    options: [
      '180°',
      '270°',
      '360°',
      '540°'
    ],
    correctAnswer: '360°',
    explanation: 'The sum of interior angles of any quadrilateral is 360°. Since a parallelogram is a quadrilateral, the sum of its interior angles is 360°. 🔄',
    wrongAnswerExplanations: {
      '180°': 'This is the sum of angles in a triangle, not a quadrilateral like a parallelogram.',
      '270°': 'This is not the sum of angles in any standard polygon. A parallelogram has 360° as the sum of its angles.',
      '540°': 'This is the sum of angles in a pentagon (5-sided polygon), not a quadrilateral like a parallelogram.'
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl9_ch8_t1_qe11',
    type: "mcq",
    question: 'If two adjacent sides of a parallelogram are 5 cm and 8 cm, what is its perimeter?',
    options: [
      '13 cm',
      '18 cm',
      '26 cm',
      '40 cm'
    ],
    correctAnswer: '26 cm',
    explanation: 'The perimeter of a parallelogram is 2(a + b) where a and b are the lengths of adjacent sides. So, perimeter = 2(5 + 8) = 2(13) = 26 cm. 📏',
    wrongAnswerExplanations: {
      '13 cm': 'This is just the sum of the two adjacent sides (5 + 8), not the perimeter of the parallelogram.',
      '18 cm': 'This is incorrect. The perimeter should include all four sides of the parallelogram.',
      '40 cm': 'This would be the perimeter if all sides were 10 cm, but we have sides of 5 cm and 8 cm.'
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl9_ch8_t1_qe12',
    type: "mcq",
    question: 'In a parallelogram, if the diagonals are equal in length, what special type of parallelogram is it?',
    options: [
      'Square',
      'Rectangle',
      'Rhombus',
      'Trapezium'
    ],
    correctAnswer: 'Rectangle',
    explanation: 'When the diagonals of a parallelogram are equal in length, it is a rectangle. This is a special property that distinguishes rectangles from other parallelograms. 📦',
    wrongAnswerExplanations: {
      'Square': 'While a square does have equal diagonals, not all parallelograms with equal diagonals are squares. A rectangle has equal diagonals but may not have all sides equal.',
      'Rhombus': 'A rhombus has diagonals that are perpendicular to each other, but they are not necessarily equal in length.',
      'Trapezium': 'A trapezium is not a parallelogram as it has only one pair of parallel sides, not two.'
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl9_ch8_t1_qe13',
    type: "mcq",
    question: 'Which of the following is a sufficient condition for a quadrilateral to be a parallelogram?',
    options: [
      'One pair of opposite sides is equal',
      'One pair of opposite sides is parallel',
      'Both pairs of opposite sides are equal',
      'Both pairs of opposite angles are equal'
    ],
    correctAnswer: 'Both pairs of opposite sides are equal',
    explanation: 'If both pairs of opposite sides of a quadrilateral are equal, then the quadrilateral is a parallelogram. This is a sufficient condition for proving a quadrilateral is a parallelogram. ✅',
    wrongAnswerExplanations: {
      'One pair of opposite sides is equal': 'This alone is not sufficient to guarantee a parallelogram. Many non-parallelogram quadrilaterals can have one pair of opposite sides equal.',
      'One pair of opposite sides is parallel': 'This describes a trapezium, not necessarily a parallelogram which requires both pairs to be parallel.',
      'Both pairs of opposite angles are equal': 'While this is a property of parallelograms, it is also true for some other quadrilaterals like cyclic quadrilaterals, so it alone is not sufficient.'
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl9_ch8_t1_qe14',
    type: "mcq",
    question: 'If diagonals of a quadrilateral bisect each other, what can you conclude about the quadrilateral?',
    options: [
      'It is a rectangle',
      'It is a rhombus',
      'It is a square',
      'It is a parallelogram'
    ],
    correctAnswer: 'It is a parallelogram',
    explanation: 'If the diagonals of a quadrilateral bisect each other, then the quadrilateral is a parallelogram. This is one of the conditions sufficient to prove a quadrilateral is a parallelogram. ✂️',
    wrongAnswerExplanations: {
      'It is a rectangle': 'While a rectangle is a parallelogram with diagonals that bisect each other, not all quadrilaterals with diagonals that bisect each other are rectangles. Rectangles have the additional property that the diagonals are equal in length.',
      'It is a rhombus': 'While a rhombus is a parallelogram with diagonals that bisect each other, not all quadrilaterals with diagonals that bisect each other are rhombuses. Rhombuses have the additional property that the diagonals are perpendicular to each other.',
      'It is a square': 'While a square is a parallelogram with diagonals that bisect each other, not all quadrilaterals with diagonals that bisect each other are squares. Squares have additional properties like equal sides and right angles.'
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl9_ch8_t1_qe15',
    type: "mcq",
    question: 'In a parallelogram ABCD, if angle A = 40°, what is the measure of angle B?',
    options: [
      '40°',
      '140°',
      '80°',
      '180°'
    ],
    correctAnswer: '140°',
    explanation: 'In a parallelogram, adjacent angles are supplementary (sum to 180°). So if angle A = 40°, then angle B = 180° - 40° = 140°. 📐',
    wrongAnswerExplanations: {
      '40°': 'This would be the measure of the opposite angle (angle C), not the adjacent angle B.',
      '80°': 'This would be double the measure of angle A, which has no relevance to the measure of angle B.',
      '180°': 'No single angle in a simple quadrilateral can measure 180°.'
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl9_ch8_t1_qe16',
    type: "mcq",
    question: 'Which of the following statements is NOT true for a parallelogram?',
    options: [
      'Opposite sides are parallel',
      'Opposite sides are equal',
      'Diagonals bisect each other',
      'Diagonals are perpendicular to each other'
    ],
    correctAnswer: 'Diagonals are perpendicular to each other',
    explanation: 'Diagonals of a parallelogram are not necessarily perpendicular to each other. They are perpendicular only in specific types of parallelograms like rhombus and square. ❌',
    wrongAnswerExplanations: {
      'Opposite sides are parallel': 'This is true for all parallelograms by definition.',
      'Opposite sides are equal': 'This is a proven property of all parallelograms.',
      'Diagonals bisect each other': 'This is a proven property of all parallelograms.'
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl9_ch8_t1_qe17',
    type: "mcq",
    question: 'If ABCD is a parallelogram and AB = 12 cm, BC = 7 cm, what is the perimeter of the parallelogram?',
    options: [
      '19 cm',
      '24 cm',
      '38 cm',
      '48 cm'
    ],
    correctAnswer: '38 cm',
    explanation: 'In a parallelogram, opposite sides are equal. So, AB = CD = 12 cm and BC = AD = 7 cm. Therefore, the perimeter = AB + BC + CD + AD = 12 + 7 + 12 + 7 = 38 cm. 🧮',
    wrongAnswerExplanations: {
      '19 cm': 'This is just the sum of AB and BC (12 + 7), not the perimeter of the entire parallelogram.',
      '24 cm': 'This would be the perimeter of a rectangle with sides 6 cm and 6 cm, not our parallelogram.',
      '48 cm': 'This would be the perimeter if all sides were 12 cm, but we have sides of 12 cm and 7 cm.'
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl9_ch8_t1_qe18',
    type: "mcq",
    question: 'If a diagonal of a parallelogram divides it into two congruent triangles, what can we conclude?',
    options: [
      'The parallelogram must be a rectangle',
      'The parallelogram must be a rhombus',
      'The parallelogram must be a square',
      'This is true for all parallelograms'
    ],
    correctAnswer: 'This is true for all parallelograms',
    explanation: 'Any diagonal of a parallelogram divides it into two congruent triangles. This is a fundamental property of all parallelograms due to the equality of opposite sides. 🔄',
    wrongAnswerExplanations: {
      'The parallelogram must be a rectangle': 'While this is true for rectangles, it is also true for all other parallelograms, not just rectangles.',
      'The parallelogram must be a rhombus': 'While this is true for rhombuses, it is also true for all other parallelograms, not just rhombuses.',
      'The parallelogram must be a square': 'While this is true for squares, it is also true for all other parallelograms, not just squares.'
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl9_ch8_t1_qe19',
    type: "mcq",
    question: 'Which of these is a correct statement about a parallelogram?',
    options: [
      'All sides are equal',
      'All angles are equal',
      'The sum of any two adjacent angles is 180°',
      'The diagonals are equal'
    ],
    correctAnswer: 'The sum of any two adjacent angles is 180°',
    explanation: 'In a parallelogram, any two adjacent angles are supplementary, meaning their sum is 180°. This follows from the fact that when parallel lines are cut by a transversal, the interior angles on the same side are supplementary. 📐',
    wrongAnswerExplanations: {
      'All sides are equal': 'This is true for rhombuses and squares, but not for all parallelograms.',
      'All angles are equal': 'This is true for rectangles and squares, but not for all parallelograms.',
      'The diagonals are equal': 'This is true for rectangles and squares, but not for all parallelograms.'
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl9_ch8_t1_qe20',
    type: "mcq",
    question: 'What is the relationship between the diagonals of a rectangle?',
    options: [
      'They are perpendicular to each other',
      'They bisect the angles',
      'They are equal in length',
      'None of the above'
    ],
    correctAnswer: 'They are equal in length',
    explanation: 'In a rectangle, the diagonals are equal in length. This is a special property of rectangles that distinguishes them from other parallelograms. 📏',
    wrongAnswerExplanations: {
      'They are perpendicular to each other': 'This is a property of rhombuses and squares, not of all rectangles.',
      'They bisect the angles': 'This is a property of rhombuses, not of all rectangles.',
      'None of the above': 'The correct answer is that the diagonals are equal in length, which is a defining property of rectangles.'
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 30
  }
];
