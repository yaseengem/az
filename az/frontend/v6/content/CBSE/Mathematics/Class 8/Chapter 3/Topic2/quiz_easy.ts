import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl8_ch3_t2_qe1',
        type: 'mcq',
        question: 'Which quadrilateral has both pairs of opposite sides parallel?',
        options: ['Parallelogram', 'Trapezium', 'Kite', 'Triangle'],
        correctAnswer: 'Parallelogram',
        explanation: 'A parallelogram has both pairs of opposite sides parallel. 🟫',
        wrongAnswerExplanations: {
            'Trapezium': 'A trapezium has only one pair of parallel sides.',
            'Kite': 'A kite has no parallel sides.',
            'Triangle': 'A triangle has only three sides.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch3_t2_qe2',
        type: 'mcq',
        question: 'What is the sum of the interior angles of any quadrilateral?',
        options: ['180°', '270°', '360°', '540°'],
        correctAnswer: '360°',
        explanation: 'The sum of the interior angles of any quadrilateral is always 360°. 🔄',
        wrongAnswerExplanations: {
            '180°': '180° is the sum for a triangle.',
            '270°': '270° is not the sum for any quadrilateral.',
            '540°': '540° is the sum for a pentagon.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch3_t2_qe3',
        type: 'mcq',
        question: 'Which property is true for all rectangles?',
        options: ['All angles are 90°', 'All sides are equal', 'Diagonals are perpendicular', 'Only one pair of sides is parallel'],
        correctAnswer: 'All angles are 90°',
        explanation: 'A rectangle has four right angles. ⬛',
        wrongAnswerExplanations: {
            'All sides are equal': 'Only squares have all sides equal and all angles 90°.',
            'Diagonals are perpendicular': 'This is true for squares and rhombuses, not all rectangles.',
            'Only one pair of sides is parallel': 'Rectangles have two pairs of parallel sides.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch3_t2_qe4',
        type: 'mcq',
        question: 'Which quadrilateral has all sides equal and all angles right angles?',
        options: ['Square', 'Rectangle', 'Rhombus', 'Parallelogram'],
        correctAnswer: 'Square',
        explanation: 'A square has all sides equal and all angles 90°. ⬜',
        wrongAnswerExplanations: {
            'Rectangle': 'Rectangles have equal angles but not all sides equal.',
            'Rhombus': 'Rhombuses have equal sides but not all angles are 90°.',
            'Parallelogram': 'Parallelograms do not have all sides or angles equal.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch3_t2_qe5',
        type: 'mcq',
        question: 'In a parallelogram, what is true about the diagonals?',
        options: ['They bisect each other', 'They are always equal', 'They are perpendicular', 'They do not intersect'],
        correctAnswer: 'They bisect each other',
        explanation: 'Diagonals of a parallelogram bisect each other. ✂️',
        wrongAnswerExplanations: {
            'They are always equal': 'Only in rectangles and squares are diagonals equal.',
            'They are perpendicular': 'This is true for rhombuses and squares.',
            'They do not intersect': 'Diagonals always intersect in a parallelogram.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch3_t2_qe6',
        type: 'mcq',
        question: 'Which quadrilateral has diagonals that are equal and bisect each other?',
        options: ['Rectangle', 'Rhombus', 'Kite', 'Trapezium'],
        correctAnswer: 'Rectangle',
        explanation: 'Rectangles have equal diagonals that bisect each other. 📏',
        wrongAnswerExplanations: {
            'Rhombus': 'Rhombus diagonals are not equal but are perpendicular.',
            'Kite': 'Kite diagonals are not equal and only one is bisected.',
            'Trapezium': 'Trapezium diagonals are not equal and do not bisect each other.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch3_t2_qe7',
        type: 'mcq',
        question: 'What is the perimeter of a square with side 5 cm?',
        options: ['10 cm', '15 cm', '20 cm', '25 cm'],
        correctAnswer: '20 cm',
        explanation: 'Perimeter = 4 × side = 4 × 5 = 20 cm. ⬜',
        wrongAnswerExplanations: {
            '10 cm': 'That is double the side, not four times.',
            '15 cm': 'Incorrect calculation.',
            '25 cm': 'Incorrect calculation.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch3_t2_qe8',
        type: 'mcq',
        question: 'Which property is unique to a rhombus among parallelograms?',
        options: ['All sides are equal', 'All angles are 90°', 'Diagonals are equal', 'Only one pair of sides is parallel'],
        correctAnswer: 'All sides are equal',
        explanation: 'A rhombus has all sides equal. 🔷',
        wrongAnswerExplanations: {
            'All angles are 90°': 'Only squares have all angles 90°.',
            'Diagonals are equal': 'Rectangles and squares have equal diagonals.',
            'Only one pair of sides is parallel': 'All parallelograms have two pairs of parallel sides.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch3_t2_qe9',
        type: 'mcq',
        question: 'If one angle of a rectangle is 90°, what are the measures of the other angles?',
        options: ['All are 90°', 'Two are 90°, two are 60°', 'All are 60°', 'All are 120°'],
        correctAnswer: 'All are 90°',
        explanation: 'All angles in a rectangle are right angles. ⬛',
        wrongAnswerExplanations: {
            'Two are 90°, two are 60°': 'All four angles are 90° in a rectangle.',
            'All are 60°': 'This is true for an equilateral triangle, not a rectangle.',
            'All are 120°': 'No quadrilateral has all angles 120°.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch3_t2_qe10',
        type: 'mcq',
        question: 'Which quadrilateral has diagonals that bisect each other at right angles but are not equal?',
        options: ['Rhombus', 'Rectangle', 'Square', 'Trapezium'],
        correctAnswer: 'Rhombus',
        explanation: 'Rhombus diagonals bisect at 90° but are not equal. 🔷',
        wrongAnswerExplanations: {
            'Rectangle': 'Rectangle diagonals are equal but not perpendicular.',
            'Square': 'Square diagonals are equal and perpendicular.',
            'Trapezium': 'Trapezium diagonals do not bisect at right angles.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch3_t2_qe11',
        type: 'mcq',
        question: 'What is the area of a rectangle with length 7 cm and width 3 cm?',
        options: ['10 cm²', '14 cm²', '21 cm²', '24 cm²'],
        correctAnswer: '21 cm²',
        explanation: 'Area = length × width = 7 × 3 = 21 cm². ⬛',
        wrongAnswerExplanations: {
            '10 cm²': 'Incorrect multiplication.',
            '14 cm²': 'Incorrect multiplication.',
            '24 cm²': 'Incorrect multiplication.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch3_t2_qe12',
        type: 'mcq',
        question: 'Which quadrilateral has all sides equal but does NOT have all angles equal?',
        options: ['Rhombus', 'Square', 'Rectangle', 'Parallelogram'],
        correctAnswer: 'Rhombus',
        explanation: 'A rhombus has all sides equal but angles are not all 90°. 🔷',
        wrongAnswerExplanations: {
            'Square': 'A square has all sides and all angles equal.',
            'Rectangle': 'A rectangle has equal angles but not all sides equal.',
            'Parallelogram': 'A parallelogram does not have all sides or angles equal.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch3_t2_qe13',
        type: 'mcq',
        question: 'In a square, what is the relationship between the diagonals?',
        options: ['Equal and perpendicular', 'Equal but not perpendicular', 'Unequal and perpendicular', 'Unequal and not perpendicular'],
        correctAnswer: 'Equal and perpendicular',
        explanation: 'Square diagonals are equal and meet at 90°. ⬜',
        wrongAnswerExplanations: {
            'Equal but not perpendicular': 'They are also perpendicular in a square.',
            'Unequal and perpendicular': 'They are equal in a square.',
            'Unequal and not perpendicular': 'Neither is true for a square.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch3_t2_qe14',
        type: 'mcq',
        question: 'Which of these is NOT a property of a parallelogram?',
        options: ['All angles are 90°', 'Opposite sides are equal', 'Diagonals bisect each other', 'Opposite angles are equal'],
        correctAnswer: 'All angles are 90°',
        explanation: 'Not all parallelograms have right angles. 🟫',
        wrongAnswerExplanations: {
            'Opposite sides are equal': 'This is a property of parallelograms.',
            'Diagonals bisect each other': 'This is a property of parallelograms.',
            'Opposite angles are equal': 'This is a property of parallelograms.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch3_t2_qe15',
        type: 'mcq',
        question: 'If the diagonals of a rhombus are 12 cm and 16 cm, what is its area?',
        options: ['96 cm²', '192 cm²', '144 cm²', '28 cm²'],
        correctAnswer: '96 cm²',
        explanation: 'Area = (d1 × d2) / 2 = (12 × 16) / 2 = 96 cm². 🔷',
        wrongAnswerExplanations: {
            '192 cm²': 'That is the product, not half the product.',
            '144 cm²': 'Incorrect calculation.',
            '28 cm²': 'Incorrect calculation.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch3_t2_qe16',
        type: 'mcq',
        question: 'Which quadrilateral can be both a rectangle and a rhombus?',
        options: ['Square', 'Parallelogram', 'Trapezium', 'Kite'],
        correctAnswer: 'Square',
        explanation: 'A square is both a rectangle (all angles 90°) and a rhombus (all sides equal). ⬜',
        wrongAnswerExplanations: {
            'Parallelogram': 'Not all parallelograms have equal sides and angles.',
            'Trapezium': 'A trapezium does not have all sides or angles equal.',
            'Kite': 'A kite does not have all sides or angles equal.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch3_t2_qe17',
        type: 'mcq',
        question: 'What is the length of the diagonal of a square with side 6 cm?',
        options: ['6 cm', '8.49 cm', '12 cm', '7.07 cm'],
        correctAnswer: '8.49 cm',
        explanation: 'Diagonal = side × √2 = 6 × 1.414 ≈ 8.49 cm. ⬜',
        wrongAnswerExplanations: {
            '6 cm': 'That is the side, not the diagonal.',
            '12 cm': 'Incorrect calculation.',
            '7.07 cm': 'That is the diagonal for a 5 cm square.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch3_t2_qe18',
        type: 'mcq',
        question: 'Which quadrilateral has only one pair of parallel sides?',
        options: ['Trapezium', 'Parallelogram', 'Rectangle', 'Rhombus'],
        correctAnswer: 'Trapezium',
        explanation: 'A trapezium has only one pair of parallel sides. ➖',
        wrongAnswerExplanations: {
            'Parallelogram': 'Parallelograms have two pairs of parallel sides.',
            'Rectangle': 'Rectangles have two pairs of parallel sides.',
            'Rhombus': 'Rhombuses have two pairs of parallel sides.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch3_t2_qe19',
        type: 'mcq',
        question: 'If a parallelogram has one angle of 120°, what is the measure of its adjacent angle?',
        options: ['60°', '120°', '90°', '180°'],
        correctAnswer: '60°',
        explanation: 'Adjacent angles in a parallelogram are supplementary: 120° + 60° = 180°. 🟫',
        wrongAnswerExplanations: {
            '120°': 'That is the same angle, not the adjacent one.',
            '90°': 'Rectangles have 90° angles.',
            '180°': 'Sum of adjacent angles, not the measure of one.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch3_t2_qe20',
        type: 'mcq',
        question: 'Which of the following is NOT a property of a square?',
        options: ['Diagonals are unequal', 'All sides are equal', 'All angles are 90°', 'Diagonals bisect each other at right angles'],
        correctAnswer: 'Diagonals are unequal',
        explanation: 'Square diagonals are equal and bisect at 90°. ⬜',
        wrongAnswerExplanations: {
            'All sides are equal': 'This is a property of a square.',
            'All angles are 90°': 'This is a property of a square.',
            'Diagonals bisect each other at right angles': 'This is a property of a square.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    }
]; 