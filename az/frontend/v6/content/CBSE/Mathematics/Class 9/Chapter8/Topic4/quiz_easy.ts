// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 9\Chapter8\Topic4\quiz_easy.ts
import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
  {
    id: 'cl9_ch8_t4_qe1',
    type: "mcq",
    question: 'What is a quadrilateral?',
    options: [
      'A three-sided polygon',
      'A four-sided polygon',
      'A five-sided polygon',
      'A six-sided polygon'
    ],
    correctAnswer: 'A four-sided polygon',
    explanation: 'A quadrilateral is a four-sided polygon. The prefix "quad" means four, referring to the four sides of this shape. 📐',
    wrongAnswerExplanations: {
      'A three-sided polygon': 'A three-sided polygon is called a triangle, not a quadrilateral. "Quad" in quadrilateral refers to four sides.',
      'A five-sided polygon': 'A five-sided polygon is called a pentagon. A quadrilateral has exactly four sides.',
      'A six-sided polygon': 'A six-sided polygon is called a hexagon. A quadrilateral has exactly four sides.'
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl9_ch8_t4_qe2',
    type: "mcq",
    question: 'Which of the following is NOT a type of quadrilateral?',
    options: [
      'Rectangle',
      'Rhombus',
      'Pentagon',
      'Trapezium'
    ],
    correctAnswer: 'Pentagon',
    explanation: 'A pentagon has five sides, not four, so it is not a type of quadrilateral. All other options are four-sided polygons. 🔷',
    wrongAnswerExplanations: {
      'Rectangle': 'A rectangle is a quadrilateral with all four angles as right angles (90°).',
      'Rhombus': 'A rhombus is a quadrilateral with all four sides equal in length.',
      'Trapezium': 'A trapezium is a quadrilateral with exactly one pair of parallel sides.'
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl9_ch8_t4_qe3',
    type: "mcq",
    question: 'In a parallelogram, opposite sides are:',
    options: [
      'Perpendicular to each other',
      'Equal and parallel to each other',
      'Equal but not parallel',
      'Parallel but not equal'
    ],
    correctAnswer: 'Equal and parallel to each other',
    explanation: 'A key property of a parallelogram is that its opposite sides are both equal in length and parallel to each other. ⏹️',
    wrongAnswerExplanations: {
      'Perpendicular to each other': 'This is incorrect. In a parallelogram, opposite sides are parallel, not perpendicular. Adjacent sides may be perpendicular in special cases like rectangles.',
      'Equal but not parallel': 'This is incorrect. In a parallelogram, opposite sides must be both equal and parallel.',
      'Parallel but not equal': 'This is incorrect. In a parallelogram, opposite sides are both parallel and equal in length.'
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl9_ch8_t4_qe4',
    type: "mcq",
    question: 'Which of the following is a property of a rectangle?',
    options: [
      'All sides are equal',
      'Diagonals bisect each other',
      'All angles are 90 degrees',
      'No sides are parallel'
    ],
    correctAnswer: 'All angles are 90 degrees',
    explanation: 'A rectangle is defined by having all four angles as right angles (90 degrees). This is one of its distinguishing properties. 📏',
    wrongAnswerExplanations: {
      'All sides are equal': 'This is a property of a rhombus or a square, not all rectangles. A rectangle has opposite sides equal.',
      'Diagonals bisect each other': 'While this is true for rectangles, it\'s also true for all parallelograms and isn\'t the defining property of a rectangle.',
      'No sides are parallel': 'This is incorrect. A rectangle has two pairs of parallel sides as it is a type of parallelogram.'
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl9_ch8_t4_qe5',
    type: "mcq",
    question: 'In a rhombus, all sides are:',
    options: [
      'Equal in length',
      'Perpendicular to each other',
      'Different in length',
      'Curved'
    ],
    correctAnswer: 'Equal in length',
    explanation: 'A rhombus is a quadrilateral with all four sides equal in length. This is one of its defining characteristics. 💎',
    wrongAnswerExplanations: {
      'Perpendicular to each other': 'This is incorrect. Adjacent sides in a rhombus are not necessarily perpendicular (unless it\'s also a square).',
      'Different in length': 'This is incorrect. By definition, a rhombus has all four sides equal in length.',
      'Curved': 'This is incorrect. A rhombus, like all polygons, has straight sides, not curved ones.'
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl9_ch8_t4_qe6',
    type: "mcq",
    question: 'According to the Mid-point Theorem, the line joining the mid-points of two sides of a triangle is:',
    options: [
      'Perpendicular to the third side',
      'Equal to the third side',
      'Parallel to the third side and half its length',
      'Double the third side'
    ],
    correctAnswer: 'Parallel to the third side and half its length',
    explanation: 'The Mid-point Theorem states that the line segment joining the midpoints of two sides of a triangle is parallel to the third side and equal to half its length. ⚡',
    wrongAnswerExplanations: {
      'Perpendicular to the third side': 'This is incorrect. The line joining midpoints is parallel to the third side, not perpendicular.',
      'Equal to the third side': 'This is incorrect. The line joining midpoints is half the length of the third side, not equal to it.',
      'Double the third side': 'This is incorrect. The line joining midpoints is half the length of the third side, not double.'
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl9_ch8_t4_qe7',
    type: "mcq",
    question: 'What is a square?',
    options: [
      'A quadrilateral with all sides equal',
      'A quadrilateral with all angles equal',
      'A quadrilateral with all sides equal and all angles equal to 90°',
      'A quadrilateral with diagonals perpendicular to each other'
    ],
    correctAnswer: 'A quadrilateral with all sides equal and all angles equal to 90°',
    explanation: 'A square is a special type of quadrilateral with all sides equal in length and all angles equal to 90 degrees. It combines properties of both rhombus and rectangle. 🟦',
    wrongAnswerExplanations: {
      'A quadrilateral with all sides equal': 'This describes a rhombus, which doesn\'t necessarily have right angles. A square is more specific.',
      'A quadrilateral with all angles equal': 'This describes a rectangle, which doesn\'t necessarily have equal sides. A square is more specific.',
      'A quadrilateral with diagonals perpendicular to each other': 'This is a property of a rhombus, but not sufficient to define a square.'
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl9_ch8_t4_qe8',
    type: "mcq",
    question: 'In a parallelogram, diagonals:',
    options: [
      'Are always equal',
      'Are always perpendicular',
      'Bisect each other',
      'Are always parallel'
    ],
    correctAnswer: 'Bisect each other',
    explanation: 'In a parallelogram, the diagonals bisect each other (they cut each other in half at the point of intersection). This is an important property of all parallelograms. ✂️',
    wrongAnswerExplanations: {
      'Are always equal': 'This is incorrect. Diagonals of a parallelogram are equal only in specific cases like rectangles and squares.',
      'Are always perpendicular': 'This is incorrect. Diagonals of a parallelogram are perpendicular only in specific cases like rhombuses and squares.',
      'Are always parallel': 'This is incorrect. Diagonals of a parallelogram always intersect; they cannot be parallel.'
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl9_ch8_t4_qe9',
    type: "mcq",
    question: 'Which quadrilateral has exactly one pair of parallel sides?',
    options: [
      'Rectangle',
      'Rhombus',
      'Trapezium',
      'Parallelogram'
    ],
    correctAnswer: 'Trapezium',
    explanation: 'A trapezium (also called trapezoid in some countries) is defined as a quadrilateral with exactly one pair of parallel sides. The non-parallel sides are called legs. 📐',
    wrongAnswerExplanations: {
      'Rectangle': 'This is incorrect. A rectangle has two pairs of parallel sides as it is a type of parallelogram.',
      'Rhombus': 'This is incorrect. A rhombus has two pairs of parallel sides as it is a type of parallelogram.',
      'Parallelogram': 'This is incorrect. By definition, a parallelogram has two pairs of parallel sides.'
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl9_ch8_t4_qe10',
    type: "mcq",
    question: 'What happens to the area of a parallelogram if its base remains the same but the height is doubled?',
    options: [
      'The area remains the same',
      'The area is doubled',
      'The area is halved',
      'The area is quadrupled'
    ],
    correctAnswer: 'The area is doubled',
    explanation: 'The area of a parallelogram is calculated as base × height. If the height is doubled while the base remains the same, the area will double. Area = b × h → Area = b × 2h = 2(b × h) 📊',
    wrongAnswerExplanations: {
      'The area remains the same': 'This is incorrect. Since area = base × height, changing the height will change the area proportionally.',
      'The area is halved': 'This is incorrect. Doubling the height will double the area, not halve it.',
      'The area is quadrupled': 'This is incorrect. The area would be quadrupled only if both base and height were doubled.'
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl9_ch8_t4_qe11',
    type: "mcq",
    question: 'If ABCD is a parallelogram, which of the following is always true?',
    options: [
      'AB = BC',
      'AB = CD',
      'AC = BD',
      'AC ⊥ BD'
    ],
    correctAnswer: 'AB = CD',
    explanation: 'In a parallelogram, opposite sides are equal. Therefore, if ABCD is a parallelogram, then AB = CD and BC = AD are always true. ⏹️',
    wrongAnswerExplanations: {
      'AB = BC': 'This is not necessarily true for all parallelograms. Adjacent sides are equal only in rhombuses and squares.',
      'AC = BD': 'This is not necessarily true for all parallelograms. Diagonals are equal only in rectangles and squares.',
      'AC ⊥ BD': 'This is not necessarily true for all parallelograms. Diagonals are perpendicular only in rhombuses and squares.'
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl9_ch8_t4_qe12',
    type: "mcq",
    question: 'In a rectangle, the diagonals are:',
    options: [
      'Perpendicular to each other',
      'Unequal in length',
      'Equal in length',
      'Parallel to each other'
    ],
    correctAnswer: 'Equal in length',
    explanation: 'In a rectangle, the diagonals are equal in length. This is a special property that distinguishes rectangles from other parallelograms. 📏',
    wrongAnswerExplanations: {
      'Perpendicular to each other': 'This is incorrect. Diagonals of a rectangle are not necessarily perpendicular unless it\'s also a square.',
      'Unequal in length': 'This is incorrect. The diagonals of a rectangle are always equal in length.',
      'Parallel to each other': 'This is incorrect. Diagonals of a quadrilateral always intersect and cannot be parallel.'
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl9_ch8_t4_qe13',
    type: "mcq",
    question: 'If the diagonals of a quadrilateral bisect each other at right angles, the quadrilateral is a:',
    options: [
      'Square',
      'Rectangle',
      'Rhombus',
      'Parallelogram'
    ],
    correctAnswer: 'Rhombus',
    explanation: 'When the diagonals of a quadrilateral bisect each other at right angles, the quadrilateral is a rhombus. This is a defining property of a rhombus. 💎',
    wrongAnswerExplanations: {
      'Square': 'A square is a special case of a rhombus where all angles are also 90°, but we don\'t have that information.',
      'Rectangle': 'This is incorrect. In a rectangle, diagonals bisect each other but are not necessarily perpendicular.',
      'Parallelogram': 'This is too general. While a rhombus is a parallelogram, the perpendicular diagonals make it specifically a rhombus.'
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl9_ch8_t4_qe14',
    type: "mcq",
    question: 'The sum of all interior angles in any quadrilateral is:',
    options: [
      '180 degrees',
      '270 degrees',
      '360 degrees',
      '540 degrees'
    ],
    correctAnswer: '360 degrees',
    explanation: 'The sum of interior angles in any quadrilateral is always 360 degrees. This can be proven by dividing the quadrilateral into two triangles, each with interior angles summing to 180 degrees. 🔢',
    wrongAnswerExplanations: {
      '180 degrees': 'This is incorrect. 180 degrees is the sum of interior angles in a triangle, not a quadrilateral.',
      '270 degrees': 'This is incorrect. The sum in a quadrilateral is 360 degrees, which is (n-2) × 180° where n = 4.',
      '540 degrees': 'This is incorrect. 540 degrees is the sum of interior angles in a pentagon, not a quadrilateral.'
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl9_ch8_t4_qe15',
    type: "mcq",
    question: 'In a kite, which sides are equal?',
    options: [
      'All four sides',
      'Opposite sides',
      'Adjacent sides',
      'No sides are equal'
    ],
    correctAnswer: 'Adjacent sides',
    explanation: 'In a kite, two pairs of adjacent sides are equal. This gives the shape its distinctive appearance similar to a flying kite. 🪁',
    wrongAnswerExplanations: {
      'All four sides': 'This is incorrect. If all four sides are equal, the shape would be a rhombus, not just a kite.',
      'Opposite sides': 'This is incorrect. Equal opposite sides define a parallelogram, not specifically a kite.',
      'No sides are equal': 'This is incorrect. A kite by definition has two pairs of adjacent equal sides.'
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl9_ch8_t4_qe16',
    type: "mcq",
    question: 'Which of the following is NOT a property of a square?',
    options: [
      'All sides are equal',
      'All angles are 90 degrees',
      'Diagonals are unequal',
      'Diagonals bisect each other'
    ],
    correctAnswer: 'Diagonals are unequal',
    explanation: 'In a square, the diagonals are equal in length. They also bisect each other at right angles. A square has all sides equal and all angles equal to 90 degrees. 🟦',
    wrongAnswerExplanations: {
      'All sides are equal': 'This is incorrect. Having all sides equal is a defining property of a square.',
      'All angles are 90 degrees': 'This is incorrect. Having all angles equal to 90° is a defining property of a square.',
      'Diagonals bisect each other': 'This is incorrect. Diagonals bisecting each other is a property of all parallelograms, including squares.'
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl9_ch8_t4_qe17',
    type: "mcq",
    question: 'What is an isosceles trapezium?',
    options: [
      'A trapezium with all sides equal',
      'A trapezium with non-parallel sides equal',
      'A trapezium with parallel sides equal',
      'A trapezium with all angles equal'
    ],
    correctAnswer: 'A trapezium with non-parallel sides equal',
    explanation: 'An isosceles trapezium is a trapezium where the non-parallel sides are equal in length. This gives it symmetry about a vertical axis. 📐',
    wrongAnswerExplanations: {
      'A trapezium with all sides equal': 'This is incorrect. If all sides were equal, it would be a rhombus, not a trapezium.',
      'A trapezium with parallel sides equal': 'This doesn\'t define an isosceles trapezium; it\'s the non-parallel sides that must be equal.',
      'A trapezium with all angles equal': 'This is incorrect. In a trapezium, not all angles can be equal due to its shape with only one pair of parallel sides.'
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl9_ch8_t4_qe18',
    type: "mcq",
    question: 'According to the Mid-point Theorem, if D and E are the midpoints of sides AB and AC of a triangle ABC, then:',
    options: [
      'DE = BC',
      'DE = ½BC',
      'DE ⊥ BC',
      'DE is not related to BC'
    ],
    correctAnswer: 'DE = ½BC',
    explanation: 'By the Mid-point Theorem, if D and E are midpoints of sides AB and AC respectively of a triangle ABC, then DE is parallel to BC and DE = ½BC. ⚡',
    wrongAnswerExplanations: {
      'DE = BC': 'This is incorrect. The Mid-point Theorem states that DE is half the length of BC, not equal to it.',
      'DE ⊥ BC': 'This is incorrect. DE is parallel to BC, not perpendicular to it.',
      'DE is not related to BC': 'This is incorrect. There is a clear relationship defined by the Mid-point Theorem: DE is parallel to BC and half its length.'
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl9_ch8_t4_qe19',
    type: "mcq",
    question: 'Which shape is both a parallelogram and a rhombus?',
    options: [
      'Rectangle',
      'Square',
      'Kite',
      'Trapezium'
    ],
    correctAnswer: 'Square',
    explanation: 'A square is both a parallelogram (opposite sides parallel) and a rhombus (all sides equal). It combines the properties of both shapes while adding right angles. 🟦',
    wrongAnswerExplanations: {
      'Rectangle': 'A rectangle is a parallelogram but not a rhombus because its adjacent sides are not equal.',
      'Kite': 'A kite is not a parallelogram because its opposite sides are not parallel.',
      'Trapezium': 'A trapezium has only one pair of parallel sides, so it\'s not a parallelogram.'
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl9_ch8_t4_qe20',
    type: "mcq",
    question: 'If a quadrilateral has all sides equal but not all angles equal, it is a:',
    options: [
      'Square',
      'Rectangle',
      'Rhombus',
      'Parallelogram'
    ],
    correctAnswer: 'Rhombus',
    explanation: 'A rhombus is defined as a quadrilateral with all sides equal. If the angles are not all equal (i.e., not all 90°), then it cannot be a square, so it is simply a rhombus. 💎',
    wrongAnswerExplanations: {
      'Square': 'This is incorrect. A square must have all angles equal to 90°, but the question specifies not all angles are equal.',
      'Rectangle': 'This is incorrect. A rectangle must have all angles equal to 90° and only opposite sides equal (not all sides equal).',
      'Parallelogram': 'While a rhombus is a type of parallelogram, this answer is too general. The specific shape with all sides equal is a rhombus.'
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 30
  }
];
