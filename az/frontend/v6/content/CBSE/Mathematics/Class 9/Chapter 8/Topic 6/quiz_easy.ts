// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 9\Chapter8\Topic6\quiz_easy.ts
// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 9\Chapter8\Topic6\quiz_easy.ts
import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
  {
    id: 'cl9_ch8_t6_qe1',
    type: "mcq",
    question: 'What is the sum of all interior angles of a quadrilateral?',
    options: [
      '180°',
      '270°',
      '360°',
      '540°'
    ],
    correctAnswer: '360°',
    explanation: 'The sum of all interior angles of a quadrilateral is always 360°. This is a fundamental property that applies to all quadrilaterals regardless of their specific type or shape. 📐',
    wrongAnswerExplanations: {
      '180°': 'The sum of interior angles in a triangle is 180°, not a quadrilateral.',
      '270°': 'This is not the correct sum for any polygon; quadrilaterals have 360° total.',
      '540°': 'This is the sum of interior angles in a pentagon, not a quadrilateral.'
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl9_ch8_t6_qe2',
    type: "mcq",
    question: 'Which of the following is NOT a type of quadrilateral?',
    options: [
      'Rectangle',
      'Rhombus',
      'Pentagon',
      'Trapezium'
    ],
    correctAnswer: 'Pentagon',
    explanation: 'A pentagon is a five-sided polygon, while all others listed are four-sided polygons (quadrilaterals). Rectangles, rhombuses, and trapeziums are all specific types of quadrilaterals. 🔷',
    wrongAnswerExplanations: {
      'Rectangle': 'A rectangle is a quadrilateral with four right angles.',
      'Rhombus': 'A rhombus is a quadrilateral with all sides equal.',
      'Trapezium': 'A trapezium is a quadrilateral with exactly one pair of parallel sides.'
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl9_ch8_t6_qe3',
    type: "mcq",
    question: 'Which property is true for all parallelograms?',
    options: [
      'All sides are equal',
      'All angles are equal',
      'Diagonals bisect each other',
      'Diagonals are perpendicular to each other'
    ],
    correctAnswer: 'Diagonals bisect each other',
    explanation: 'In all parallelograms, the diagonals bisect each other. This means if the diagonals intersect at point O, then AO = OC and BO = OD. This property uniquely identifies parallelograms. ⏹️',
    wrongAnswerExplanations: {
      'All sides are equal': 'This is a property of rhombuses, not all parallelograms.',
      'All angles are equal': 'This is a property of rectangles, not all parallelograms.',
      'Diagonals are perpendicular to each other': 'This is a property of rhombuses, not all parallelograms.'
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl9_ch8_t6_qe4',
    type: "mcq",
    question: 'In a rectangle, what special property do the diagonals have?',
    options: [
      'They are perpendicular',
      'They are equal in length',
      'They trisect each other',
      'They bisect the angles'
    ],
    correctAnswer: 'They are equal in length',
    explanation: 'In a rectangle, the diagonals are equal in length. This is a distinguishing property of rectangles among parallelograms. The diagonals still bisect each other but are not necessarily perpendicular. 🔲',
    wrongAnswerExplanations: {
      'They are perpendicular': 'Perpendicular diagonals are a property of rhombuses, not rectangles.',
      'They trisect each other': 'Diagonals in rectangles bisect each other, not trisect.',
      'They bisect the angles': 'Diagonals bisecting angles is a property of rhombuses, not rectangles.'
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl9_ch8_t6_qe5',
    type: "mcq",
    question: 'A quadrilateral with exactly one pair of parallel sides is called a:',
    options: [
      'Parallelogram',
      'Rectangle',
      'Trapezium',
      'Rhombus'
    ],
    correctAnswer: 'Trapezium',
    explanation: 'A trapezium (also called trapezoid in some regions) is defined as a quadrilateral with exactly one pair of parallel sides. This distinguishes it from a parallelogram which has two pairs of parallel sides. 📏',
    wrongAnswerExplanations: {
      'Parallelogram': 'A parallelogram has two pairs of parallel sides, not just one.',
      'Rectangle': 'A rectangle is a type of parallelogram with four right angles.',
      'Rhombus': 'A rhombus is a parallelogram with all sides equal.'
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl9_ch8_t6_qe6',
    type: "mcq",
    question: 'What is the special name for a parallelogram with all sides equal?',
    options: [
      'Rectangle',
      'Square',
      'Rhombus',
      'Kite'
    ],
    correctAnswer: 'Rhombus',
    explanation: 'A rhombus is a parallelogram with all four sides equal in length. It retains all properties of a parallelogram with the additional condition of equal sides. 💎',
    wrongAnswerExplanations: {
      'Rectangle': 'A rectangle has all angles equal to 90°, but sides are not necessarily equal.',
      'Square': 'A square is both a rhombus and a rectangle, with all sides equal and all angles 90°.',
      'Kite': 'A kite has two pairs of adjacent sides equal, but is not necessarily a parallelogram.'
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl9_ch8_t6_qe7',
    type: "mcq",
    question: 'According to the Mid-point Theorem, if D and E are midpoints of sides AB and AC of triangle ABC, then DE is:',
    options: [
      'Parallel to BC and equal to BC',
      'Parallel to BC and equal to half of BC',
      'Perpendicular to BC',
      'Equal to twice BC'
    ],
    correctAnswer: 'Parallel to BC and equal to half of BC',
    explanation: 'The Mid-point Theorem states that the line joining the midpoints of two sides of a triangle is parallel to the third side and equal to half its length. So DE ∥ BC and DE = ½BC. ↔️',
    wrongAnswerExplanations: {
      'Parallel to BC and equal to BC': 'The line is parallel to BC but half its length, not equal.',
      'Perpendicular to BC': 'The line is parallel to BC, not perpendicular to it.',
      'Equal to twice BC': 'The line is half the length of BC, not twice its length.'
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl9_ch8_t6_qe8',
    type: "mcq",
    question: 'A square is a:',
    options: [
      'Rhombus with equal diagonals',
      'Rectangle with equal sides',
      'Both A and B',
      'Neither A nor B'
    ],
    correctAnswer: 'Both A and B',
    explanation: 'A square can be defined as a rhombus with equal diagonals or as a rectangle with equal sides. Both definitions are correct as a square combines the properties of both shapes. 🟦',
    wrongAnswerExplanations: {
      'Rhombus with equal diagonals': 'This is correct, but not the complete answer.',
      'Rectangle with equal sides': 'This is correct, but not the complete answer.',
      'Neither A nor B': 'Both statements are true, not false.'
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl9_ch8_t6_qe9',
    type: "mcq",
    question: 'In a parallelogram, adjacent angles are:',
    options: [
      'Equal',
      'Complementary',
      'Supplementary',
      'None of the above'
    ],
    correctAnswer: 'Supplementary',
    explanation: 'In a parallelogram, adjacent angles are supplementary, meaning they sum to 180°. If one angle is x°, the adjacent angle will be (180-x)°. This is a key property of parallelograms. ⏹️',
    wrongAnswerExplanations: {
      'Equal': 'Opposite angles, not adjacent angles, are equal in a parallelogram.',
      'Complementary': 'Complementary angles sum to 90°, not 180°.',
      'None of the above': 'Adjacent angles being supplementary is a fundamental property of parallelograms.'
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl9_ch8_t6_qe10',
    type: "mcq",
    question: 'The diagonals of which quadrilateral always bisect each other at right angles?',
    options: [
      'Rectangle',
      'Rhombus',
      'Parallelogram',
      'Trapezium'
    ],
    correctAnswer: 'Rhombus',
    explanation: 'In a rhombus, the diagonals always bisect each other at right angles (perpendicular to each other). This is a special property of rhombuses that is not true for all parallelograms. 💎',
    wrongAnswerExplanations: {
      'Rectangle': 'In a rectangle, diagonals bisect each other but are not necessarily perpendicular.',
      'Parallelogram': 'In a parallelogram, diagonals bisect each other but are not necessarily perpendicular.',
      'Trapezium': 'In a trapezium, diagonals don\'t even bisect each other.'
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl9_ch8_t6_qe11',
    type: "mcq",
    question: 'Which of the following is true for a rectangle?',
    options: [
      'All sides are equal',
      'All angles are equal to 90°',
      'Diagonals are perpendicular',
      'None of the above'
    ],
    correctAnswer: 'All angles are equal to 90°',
    explanation: 'A rectangle is defined as a parallelogram with all angles equal to 90°. While it has opposite sides equal, not all sides are necessarily equal, and its diagonals are equal but not necessarily perpendicular. 🔲',
    wrongAnswerExplanations: {
      'All sides are equal': 'This is a property of a rhombus, not necessarily of a rectangle.',
      'Diagonals are perpendicular': 'This is a property of a rhombus, not necessarily of a rectangle.',
      'None of the above': 'The statement about all angles being 90° is true for rectangles.'
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl9_ch8_t6_qe12',
    type: "mcq",
    question: 'If a quadrilateral has all sides equal and all angles equal, it is a:',
    options: [
      'Rectangle',
      'Rhombus',
      'Square',
      'Kite'
    ],
    correctAnswer: 'Square',
    explanation: 'A quadrilateral with all sides equal and all angles equal must be a square. Since all angles are equal in a quadrilateral, each must be 90°, making it both a rectangle and a rhombus—thus a square. 🟦',
    wrongAnswerExplanations: {
      'Rectangle': 'A rectangle has all angles equal but not necessarily all sides equal.',
      'Rhombus': 'A rhombus has all sides equal but not necessarily all angles equal.',
      'Kite': 'A kite has two pairs of adjacent equal sides, but not all sides or angles are equal.'
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl9_ch8_t6_qe13',
    type: "mcq",
    question: 'The formula for the area of a parallelogram is:',
    options: [
      'Length × Width',
      'Base × Height',
      '½ × Base × Height',
      '½ × Diagonal₁ × Diagonal₂'
    ],
    correctAnswer: 'Base × Height',
    explanation: 'The area of a parallelogram is calculated as Base × Height, where the height is the perpendicular distance between parallel sides. This is similar to the rectangle formula but with height measured perpendicular to the base. 📏',
    wrongAnswerExplanations: {
      'Length × Width': 'This is the formula for a rectangle, not precisely for a parallelogram.',
      '½ × Base × Height': 'This is the formula for a triangle, not a parallelogram.',
      '½ × Diagonal₁ × Diagonal₂': 'This is the formula for the area of a rhombus, not any parallelogram.'
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl9_ch8_t6_qe14',
    type: "mcq",
    question: 'In the Mid-point Theorem, if D is the midpoint of AB and E is the midpoint of AC in triangle ABC, what is the ratio of DE to BC?',
    options: [
      '1:1',
      '1:2',
      '2:1',
      '1:4'
    ],
    correctAnswer: '1:2',
    explanation: 'According to the Mid-point Theorem, the line segment joining the midpoints of two sides of a triangle is parallel to the third side and half its length. Therefore, the ratio of DE to BC is 1:2. ↔️',
    wrongAnswerExplanations: {
      '1:1': 'This would mean DE equals BC, but the Mid-point Theorem states DE is half of BC.',
      '2:1': 'This would mean DE is twice BC, which contradicts the Mid-point Theorem.',
      '1:4': 'This would mean DE is one-fourth of BC, which is incorrect.'
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl9_ch8_t6_qe15',
    type: "mcq",
    question: 'A kite is a quadrilateral with:',
    options: [
      'All sides equal',
      'Two pairs of adjacent sides equal',
      'Two pairs of opposite sides equal',
      'All angles equal'
    ],
    correctAnswer: 'Two pairs of adjacent sides equal',
    explanation: 'A kite is defined as a quadrilateral with two pairs of adjacent sides equal. It has an axis of symmetry along one of its diagonals, giving it its distinctive kite shape. 🪁',
    wrongAnswerExplanations: {
      'All sides equal': 'This describes a rhombus, not a kite.',
      'Two pairs of opposite sides equal': 'This describes a parallelogram, not a kite.',
      'All angles equal': 'This is a property of a rectangle, not a kite.'
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl9_ch8_t6_qe16',
    type: "mcq",
    question: 'If a diagonal of a parallelogram bisects both the angles through which it passes, the parallelogram must be a:',
    options: [
      'Rectangle',
      'Rhombus',
      'Square',
      'Trapezium'
    ],
    correctAnswer: 'Rhombus',
    explanation: 'When a diagonal of a parallelogram bisects both the angles through which it passes, the parallelogram is a rhombus. This is a special property of rhombuses due to their equal sides. 💎',
    wrongAnswerExplanations: {
      'Rectangle': 'In a rectangle, diagonals do not necessarily bisect angles.',
      'Square': 'A square has this property because it\'s a rhombus, but the general case is a rhombus.',
      'Trapezium': 'A trapezium does not have the property of diagonals bisecting angles.'
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl9_ch8_t6_qe17',
    type: "mcq",
    question: 'Which of the following can never be a parallelogram?',
    options: [
      'Rectangle',
      'Rhombus',
      'Square',
      'Trapezium'
    ],
    correctAnswer: 'Trapezium',
    explanation: 'A trapezium has exactly one pair of parallel sides, whereas a parallelogram by definition has both pairs of opposite sides parallel. Therefore, a trapezium can never be a parallelogram. 📏',
    wrongAnswerExplanations: {
      'Rectangle': 'A rectangle is a special type of parallelogram with all angles equal to 90°.',
      'Rhombus': 'A rhombus is a special type of parallelogram with all sides equal.',
      'Square': 'A square is a special type of parallelogram that is both a rectangle and a rhombus.'
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl9_ch8_t6_qe18',
    type: "mcq",
    question: 'The diagonals of a square:',
    options: [
      'Are equal and bisect each other',
      'Are perpendicular and bisect each other',
      'Are equal, perpendicular, and bisect each other',
      'None of the above'
    ],
    correctAnswer: 'Are equal, perpendicular, and bisect each other',
    explanation: 'The diagonals of a square have three key properties: they are equal in length, they are perpendicular to each other, and they bisect each other. These properties come from combining the diagonal properties of both rectangles and rhombuses. 🟦',
    wrongAnswerExplanations: {
      'Are equal and bisect each other': 'This is true but incomplete; square diagonals are also perpendicular.',
      'Are perpendicular and bisect each other': 'This is true but incomplete; square diagonals are also equal in length.',
      'None of the above': 'The third option correctly lists all properties of square diagonals.'
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl9_ch8_t6_qe19',
    type: "mcq",
    question: 'If the diagonals of a quadrilateral bisect each other, the quadrilateral must be a:',
    options: [
      'Trapezium',
      'Kite',
      'Parallelogram',
      'Rectangle'
    ],
    correctAnswer: 'Parallelogram',
    explanation: 'When the diagonals of a quadrilateral bisect each other, the quadrilateral must be a parallelogram. This is one of the defining criteria for identifying parallelograms. ⏹️',
    wrongAnswerExplanations: {
      'Trapezium': 'In a trapezium, the diagonals do not bisect each other.',
      'Kite': 'In a kite, one diagonal bisects the other but not vice versa.',
      'Rectangle': 'A rectangle is a specific type of parallelogram, but the property applies to all parallelograms.'
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl9_ch8_t6_qe20',
    type: "mcq",
    question: 'What is the area of a rhombus with diagonals of lengths 6 cm and 8 cm?',
    options: [
      '24 cm²',
      '48 cm²',
      '24 cm',
      '12 cm²'
    ],
    correctAnswer: '24 cm²',
    explanation: 'The area of a rhombus can be calculated as half the product of its diagonals: Area = (½) × d₁ × d₂. With diagonals of 6 cm and 8 cm, the area is (½) × 6 × 8 = 24 cm². 💎',
    wrongAnswerExplanations: {
      '48 cm²': 'This would be the product of the diagonals without taking half.',
      '24 cm': 'Area is measured in square units, not linear units.',
      '12 cm²': 'This is half of the correct answer, suggesting a calculation error.'
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 30
  }
];
