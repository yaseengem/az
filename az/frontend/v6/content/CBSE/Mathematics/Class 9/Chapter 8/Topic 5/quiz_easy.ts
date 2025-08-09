// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 9\Chapter8\Topic5\quiz_easy.ts
import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
  {
    id: 'cl9_ch8_t5_qe1',
    type: "mcq",
    question: 'What is the sum of all interior angles of a quadrilateral?',
    options: [
      '180°',
      '270°',
      '360°',
      '540°'
    ],
    correctAnswer: '360°',
    explanation: 'The sum of all interior angles of a quadrilateral is always 360°. This is a fundamental property of all quadrilaterals regardless of their specific type. 📐',
    wrongAnswerExplanations: {
      '180°': 'The sum of interior angles of a triangle is 180°, not a quadrilateral. A quadrilateral has four angles, not three.',
      '270°': 'This is not the correct sum. The sum of interior angles of a quadrilateral is calculated using the formula (n-2) × 180° where n is the number of sides. For a quadrilateral, n=4, so (4-2) × 180° = 360°.',
      '540°': 'This is the sum of interior angles of a pentagon (5-sided polygon), not a quadrilateral. A quadrilateral has 4 sides, so the sum is 360°.'
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl9_ch8_t5_qe2',
    type: "mcq",
    question: 'Which of the following is NOT a quadrilateral?',
    options: [
      'Square',
      'Rectangle',
      'Triangle',
      'Rhombus'
    ],
    correctAnswer: 'Triangle',
    explanation: 'A triangle has three sides, while all other options (square, rectangle, and rhombus) are quadrilaterals with four sides. By definition, quadrilaterals must have exactly four sides. 🔺',
    wrongAnswerExplanations: {
      'Square': 'A square is a quadrilateral with four equal sides and four equal angles (90°).',
      'Rectangle': 'A rectangle is a quadrilateral with opposite sides equal and all angles equal to 90°.',
      'Rhombus': 'A rhombus is a quadrilateral with all sides equal in length.'
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl9_ch8_t5_qe3',
    type: "mcq",
    question: 'What is a parallelogram?',
    options: [
      'A quadrilateral with all sides equal',
      'A quadrilateral with all angles equal',
      'A quadrilateral with opposite sides parallel',
      'A quadrilateral with opposite sides perpendicular'
    ],
    correctAnswer: 'A quadrilateral with opposite sides parallel',
    explanation: 'A parallelogram is a quadrilateral with opposite sides parallel to each other. This defining property gives parallelograms their name and distinguishes them from other quadrilaterals. ⏹️',
    wrongAnswerExplanations: {
      'A quadrilateral with all sides equal': 'This defines a rhombus, which is a special type of parallelogram, but not all parallelograms have equal sides.',
      'A quadrilateral with all angles equal': 'This defines a rectangle, which is a special type of parallelogram, but not all parallelograms have equal angles.',
      'A quadrilateral with opposite sides perpendicular': 'Opposite sides in a quadrilateral cannot be perpendicular to each other. Perpendicular sides would meet at 90° angles and could not form a closed figure with just four sides.'
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl9_ch8_t5_qe4',
    type: "mcq",
    question: 'Which property is true for all parallelograms?',
    options: [
      'All angles are equal',
      'All sides are equal',
      'Opposite angles are equal',
      'Diagonals are perpendicular'
    ],
    correctAnswer: 'Opposite angles are equal',
    explanation: 'In all parallelograms, opposite angles are equal. Other properties like having all angles equal, all sides equal, or perpendicular diagonals are specific to certain types of parallelograms like rectangles, rhombuses, or squares. 📏',
    wrongAnswerExplanations: {
      'All angles are equal': 'This is true only for rectangles and squares, not for all parallelograms.',
      'All sides are equal': 'This is true only for rhombuses and squares, not for all parallelograms.',
      'Diagonals are perpendicular': 'This is true only for rhombuses and squares, not for all parallelograms.'
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl9_ch8_t5_qe5',
    type: "mcq",
    question: 'What is a rectangle?',
    options: [
      'A quadrilateral with all sides equal',
      'A parallelogram with all angles equal to 90°',
      'A quadrilateral with diagonals that bisect each other',
      'A parallelogram with perpendicular diagonals'
    ],
    correctAnswer: 'A parallelogram with all angles equal to 90°',
    explanation: 'A rectangle is a parallelogram with all angles equal to 90°. This property makes all angles right angles, which is the defining characteristic of rectangles. 📐',
    wrongAnswerExplanations: {
      'A quadrilateral with all sides equal': 'This defines a rhombus, not a rectangle. A rectangle has opposite sides equal but not necessarily all sides equal.',
      'A quadrilateral with diagonals that bisect each other': 'This is a property of all parallelograms, not just rectangles.',
      'A parallelogram with perpendicular diagonals': 'This defines a rhombus, not a rectangle. In a rectangle, diagonals are equal in length but not necessarily perpendicular.'
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl9_ch8_t5_qe6',
    type: "mcq",
    question: 'What is a rhombus?',
    options: [
      'A quadrilateral with all sides equal',
      'A parallelogram with all angles equal',
      'A rectangle with equal diagonals',
      'A quadrilateral with perpendicular diagonals'
    ],
    correctAnswer: 'A quadrilateral with all sides equal',
    explanation: 'A rhombus is a quadrilateral with all sides equal in length. It is also a special type of parallelogram, inheriting all parallelogram properties while having the additional property of equal sides. 💎',
    wrongAnswerExplanations: {
      'A parallelogram with all angles equal': 'This defines a rectangle, not a rhombus.',
      'A rectangle with equal diagonals': 'All rectangles already have equal diagonals, so this would just be a rectangle, not a rhombus.',
      'A quadrilateral with perpendicular diagonals': 'While rhombuses do have perpendicular diagonals, this alone doesn\'t define a rhombus. Kites can also have perpendicular diagonals but aren\'t rhombuses.'
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl9_ch8_t5_qe7',
    type: "mcq",
    question: 'What is a square?',
    options: [
      'A rhombus with all angles equal',
      'A rectangle with all sides equal',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B',
    explanation: 'A square is both a rhombus with all angles equal (90°) and a rectangle with all sides equal. It combines the properties of both shapes, making it the most specific type of parallelogram. 🟦',
    wrongAnswerExplanations: {
      'A rhombus with all angles equal': 'While this is correct, it\'s not the complete definition. The best answer includes both definitions.',
      'A rectangle with all sides equal': 'While this is correct, it\'s not the complete definition. The best answer includes both definitions.',
      'None of the above': 'This is incorrect because both A and B are valid definitions of a square.'
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl9_ch8_t5_qe8',
    type: "mcq",
    question: 'What is a trapezium (or trapezoid)?',
    options: [
      'A quadrilateral with all sides equal',
      'A quadrilateral with exactly one pair of parallel sides',
      'A quadrilateral with diagonals that bisect each other',
      'A quadrilateral with all angles equal'
    ],
    correctAnswer: 'A quadrilateral with exactly one pair of parallel sides',
    explanation: 'A trapezium (or trapezoid) is a quadrilateral with exactly one pair of parallel sides. The parallel sides are often called bases, while the non-parallel sides are called legs. 📏',
    wrongAnswerExplanations: {
      'A quadrilateral with all sides equal': 'This defines a rhombus, not a trapezium.',
      'A quadrilateral with diagonals that bisect each other': 'This defines a parallelogram, not a trapezium.',
      'A quadrilateral with all angles equal': 'This defines a rectangle, not a trapezium.'
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl9_ch8_t5_qe9',
    type: "mcq",
    question: 'In a parallelogram, what is the relationship between opposite sides?',
    options: [
      'They are perpendicular',
      'They are equal in length',
      'They form supplementary angles',
      'They bisect each other'
    ],
    correctAnswer: 'They are equal in length',
    explanation: 'In a parallelogram, opposite sides are equal in length. This is one of the fundamental properties of all parallelograms, along with opposite sides being parallel. ⏹️',
    wrongAnswerExplanations: {
      'They are perpendicular': 'Opposite sides of a parallelogram are parallel, not perpendicular.',
      'They form supplementary angles': 'Adjacent angles, not opposite sides, form supplementary angles in a parallelogram.',
      'They bisect each other': 'Sides don\'t bisect each other; it\'s the diagonals that bisect each other in a parallelogram.'
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl9_ch8_t5_qe10',
    type: "mcq",
    question: 'In a parallelogram, what is the relationship between opposite angles?',
    options: [
      'They are equal',
      'They are supplementary',
      'They are complementary',
      'They are always 90°'
    ],
    correctAnswer: 'They are equal',
    explanation: 'In a parallelogram, opposite angles are equal. This is a direct consequence of the parallel sides and is true for all parallelograms regardless of their specific shape. 📐',
    wrongAnswerExplanations: {
      'They are supplementary': 'Adjacent angles, not opposite angles, are supplementary in a parallelogram.',
      'They are complementary': 'Complementary angles sum to 90°, which is not a relationship found between angles in a parallelogram.',
      'They are always 90°': 'Only in rectangles and squares are all angles 90°. In general parallelograms, angles are not necessarily 90°.'
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl9_ch8_t5_qe11',
    type: "mcq",
    question: 'What is the Mid-point Theorem about?',
    options: [
      'The midpoint of a quadrilateral',
      'The midpoint of a circle',
      'The line joining midpoints of two sides of a triangle',
      'The center point of any polygon'
    ],
    correctAnswer: 'The line joining midpoints of two sides of a triangle',
    explanation: 'The Mid-point Theorem states that the line joining the midpoints of two sides of a triangle is parallel to the third side and equal to half its length. This theorem reveals important geometric relationships in triangles. ⚡',
    wrongAnswerExplanations: {
      'The midpoint of a quadrilateral': 'The Mid-point Theorem doesn\'t deal with the midpoint of a quadrilateral.',
      'The midpoint of a circle': 'The Mid-point Theorem is about triangles, not circles.',
      'The center point of any polygon': 'The Mid-point Theorem specifically deals with the line joining midpoints of sides of a triangle, not the center point of polygons.'
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl9_ch8_t5_qe12',
    type: "mcq",
    question: 'What is the relationship between adjacent angles in a parallelogram?',
    options: [
      'They are equal',
      'They are supplementary (sum to 180°)',
      'They are complementary (sum to 90°)',
      'They are always 90°'
    ],
    correctAnswer: 'They are supplementary (sum to 180°)',
    explanation: 'In a parallelogram, adjacent angles are supplementary, meaning they sum to 180°. This property follows from the parallel sides and applies to all parallelograms. 📏',
    wrongAnswerExplanations: {
      'They are equal': 'Adjacent angles in a parallelogram are not equal; it\'s the opposite angles that are equal.',
      'They are complementary (sum to 90°)': 'Adjacent angles in a parallelogram sum to 180°, not 90°.',
      'They are always 90°': 'Only in rectangles and squares are all angles 90°. In general parallelograms, angles are not necessarily 90°.'
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl9_ch8_t5_qe13',
    type: "mcq",
    question: 'Which quadrilateral has all angles equal to 90° and all sides equal?',
    options: [
      'Rectangle',
      'Rhombus',
      'Square',
      'Trapezium'
    ],
    correctAnswer: 'Square',
    explanation: 'A square is the only quadrilateral with all angles equal to 90° and all sides equal in length. It combines the properties of both rectangles (all angles 90°) and rhombuses (all sides equal). 🟦',
    wrongAnswerExplanations: {
      'Rectangle': 'A rectangle has all angles equal to 90°, but opposite sides equal (not necessarily all sides equal).',
      'Rhombus': 'A rhombus has all sides equal, but not necessarily all angles equal to 90°.',
      'Trapezium': 'A trapezium has exactly one pair of parallel sides and doesn\'t have all angles equal to 90° or all sides equal.'
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl9_ch8_t5_qe14',
    type: "mcq",
    question: 'In a rectangle, what special property do the diagonals have?',
    options: [
      'They are perpendicular to each other',
      'They bisect the angles at vertices',
      'They are equal in length',
      'They divide the rectangle into four equal parts'
    ],
    correctAnswer: 'They are equal in length',
    explanation: 'In a rectangle, the diagonals are equal in length. This is a defining property that distinguishes rectangles from other parallelograms. The diagonals still bisect each other, as in all parallelograms. 📏',
    wrongAnswerExplanations: {
      'They are perpendicular to each other': 'Diagonals in a rectangle are not necessarily perpendicular; that\'s a property of rhombuses and squares.',
      'They bisect the angles at vertices': 'Diagonals in a rectangle don\'t necessarily bisect angles; that\'s a property of rhombuses and squares.',
      'They divide the rectangle into four equal parts': 'While diagonals divide a parallelogram into triangles of equal area, this isn\'t a special property of rectangles.'
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl9_ch8_t5_qe15',
    type: "mcq",
    question: 'In a rhombus, what special property do the diagonals have?',
    options: [
      'They are equal in length',
      'They are perpendicular to each other',
      'They form 45° angles with the sides',
      'They are parallel to the sides'
    ],
    correctAnswer: 'They are perpendicular to each other',
    explanation: 'In a rhombus, the diagonals are perpendicular to each other (they intersect at right angles). This property, along with diagonals bisecting each other, is characteristic of rhombuses. ⚡',
    wrongAnswerExplanations: {
      'They are equal in length': 'Diagonals in a rhombus are not necessarily equal; that\'s a property of rectangles and squares.',
      'They form 45° angles with the sides': 'Diagonals don\'t necessarily form 45° angles with the sides in all rhombuses.',
      'They are parallel to the sides': 'Diagonals cannot be parallel to the sides in a quadrilateral.'
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl9_ch8_t5_qe16',
    type: "mcq",
    question: 'Which of these is NOT a property of a square?',
    options: [
      'All sides are equal',
      'All angles are 90°',
      'Diagonals bisect each other',
      'Diagonals are unequal in length'
    ],
    correctAnswer: 'Diagonals are unequal in length',
    explanation: 'In a square, the diagonals are equal in length. All the other options are true properties of a square. Squares have equal sides, 90° angles, and diagonals that bisect each other at right angles. 🟦',
    wrongAnswerExplanations: {
      'All sides are equal': 'This is a true property of squares.',
      'All angles are 90°': 'This is a true property of squares.',
      'Diagonals bisect each other': 'This is a true property of squares, as it is for all parallelograms.'
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl9_ch8_t5_qe17',
    type: "mcq",
    question: 'According to the Mid-point Theorem, if D and E are midpoints of sides AB and AC of a triangle ABC, what is the relationship between DE and BC?',
    options: [
      'DE = BC',
      'DE = 2 × BC',
      'DE = ½ × BC',
      'DE ⊥ BC'
    ],
    correctAnswer: 'DE = ½ × BC',
    explanation: 'According to the Mid-point Theorem, if D and E are midpoints of sides AB and AC of a triangle ABC, then DE is parallel to BC and DE = ½ × BC. The line segment is half the length of the third side. ⚡',
    wrongAnswerExplanations: {
      'DE = BC': 'The Mid-point Theorem states that DE is half the length of BC, not equal to BC.',
      'DE = 2 × BC': 'The Mid-point Theorem states that DE is half the length of BC, not twice BC.',
      'DE ⊥ BC': 'The Mid-point Theorem states that DE is parallel to BC, not perpendicular to it.'
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl9_ch8_t5_qe18',
    type: "mcq",
    question: 'What is the area formula for a rectangle?',
    options: [
      'Area = ½ × base × height',
      'Area = side²',
      'Area = length × width',
      'Area = ½ × diagonal₁ × diagonal₂'
    ],
    correctAnswer: 'Area = length × width',
    explanation: 'The area of a rectangle is calculated as length × width. This is the product of any two adjacent sides and is one of the most basic area formulas in geometry. 📏',
    wrongAnswerExplanations: {
      'Area = ½ × base × height': 'This is the formula for the area of a triangle, not a rectangle.',
      'Area = side²': 'This is the formula for the area of a square, not a general rectangle.',
      'Area = ½ × diagonal₁ × diagonal₂': 'This is the formula for the area of a rhombus using its diagonals, not a rectangle.'
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl9_ch8_t5_qe19',
    type: "mcq",
    question: 'What is the area formula for a square?',
    options: [
      'Area = side × side',
      'Area = 2 × side',
      'Area = ½ × diagonal²',
      'Area = 4 × side'
    ],
    correctAnswer: 'Area = side × side',
    explanation: 'The area of a square is side × side, or side². Since all sides are equal, we only need to know the length of one side to calculate the area of a square. 🟦',
    wrongAnswerExplanations: {
      'Area = 2 × side': 'This calculates the area incorrectly. The correct formula is side².',
      'Area = ½ × diagonal²': 'While related to the area of a square (Area = ½ × d² where d is the diagonal), it\'s not the standard formula.',
      'Area = 4 × side': 'This calculates the perimeter of a square, not the area.'
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl9_ch8_t5_qe20',
    type: "mcq",
    question: 'What is the area formula for a parallelogram?',
    options: [
      'Area = side × side',
      'Area = base × height',
      'Area = ½ × base × height',
      'Area = diagonal₁ × diagonal₂'
    ],
    correctAnswer: 'Area = base × height',
    explanation: 'The area of a parallelogram is base × height, where height is the perpendicular distance between parallel sides. This formula works for all parallelograms, including rectangles, rhombuses, and squares. 📐',
    wrongAnswerExplanations: {
      'Area = side × side': 'This is the formula for the area of a square, not a general parallelogram.',
      'Area = ½ × base × height': 'This is the formula for the area of a triangle, not a parallelogram.',
      'Area = diagonal₁ × diagonal₂': 'This is not the correct formula for the area of a parallelogram.'
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 30
  }
];
