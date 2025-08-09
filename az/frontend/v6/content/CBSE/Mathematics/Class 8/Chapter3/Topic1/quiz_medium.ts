import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl8_ch3_t1_qm1',
        type: 'mcq',
        question: 'Which property is true for all parallelograms but not for all quadrilaterals?',
        options: ['Opposite sides are equal', 'All angles are right angles', 'All sides are equal', 'Diagonals are equal'],
        correctAnswer: 'Opposite sides are equal',
        explanation: 'In parallelograms, opposite sides are always equal. 🟫',
        wrongAnswerExplanations: {
            'All angles are right angles': 'Only rectangles and squares have all right angles.',
            'All sides are equal': 'Only rhombus and square have all sides equal.',
            'Diagonals are equal': 'Only rectangles and squares have equal diagonals.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch3_t1_qm2',
        type: 'mcq',
        question: 'Which quadrilateral has diagonals that are perpendicular but not equal?',
        options: ['Rectangle', 'Rhombus', 'Square', 'Trapezium'],
        correctAnswer: 'Rhombus',
        explanation: 'A rhombus has perpendicular but unequal diagonals. ✖️',
        wrongAnswerExplanations: {
            'Rectangle': 'Rectangle diagonals are equal but not perpendicular.',
            'Square': 'Square diagonals are equal and perpendicular.',
            'Trapezium': 'Trapezium diagonals are not perpendicular.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch3_t1_qm3',
        type: 'mcq',
        question: 'If a quadrilateral has only one pair of parallel sides, what is it called?',
        options: ['Parallelogram', 'Kite', 'Trapezium', 'Rhombus'],
        correctAnswer: 'Trapezium',
        explanation: 'A trapezium has only one pair of parallel sides. ➖',
        wrongAnswerExplanations: {
            'Parallelogram': 'Parallelogram has two pairs of parallel sides.',
            'Kite': 'Kite has no parallel sides.',
            'Rhombus': 'Rhombus has two pairs of parallel sides.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch3_t1_qm4',
        type: 'mcq',
        question: 'Which quadrilateral has both pairs of opposite angles equal?',
        options: ['Kite', 'Parallelogram', 'Trapezium', 'Pentagon'],
        correctAnswer: 'Parallelogram',
        explanation: 'A parallelogram has both pairs of opposite angles equal. 🟫',
        wrongAnswerExplanations: {
            'Kite': 'Kite has only one pair of equal angles.',
            'Trapezium': 'Trapezium does not always have opposite angles equal.',
            'Pentagon': 'Pentagon is not a quadrilateral.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch3_t1_qm5',
        type: 'mcq',
        question: 'Which of these quadrilaterals can have all sides equal but not all angles equal?',
        options: ['Square', 'Rhombus', 'Rectangle', 'Trapezium'],
        correctAnswer: 'Rhombus',
        explanation: 'A rhombus has all sides equal but not all angles equal. 🔷',
        wrongAnswerExplanations: {
            'Square': 'Square has all sides and all angles equal.',
            'Rectangle': 'Rectangle has equal angles but not all sides equal.',
            'Trapezium': 'Trapezium does not have all sides equal.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch3_t1_qm6',
        type: 'mcq',
        question: 'Which quadrilateral has diagonals that bisect each other but are not equal?',
        options: ['Rectangle', 'Rhombus', 'Parallelogram', 'Kite'],
        correctAnswer: 'Parallelogram',
        explanation: 'Parallelogram diagonals bisect each other but are not always equal. 🟫',
        wrongAnswerExplanations: {
            'Rectangle': 'Rectangle diagonals are equal and bisect each other.',
            'Rhombus': 'Rhombus diagonals are perpendicular and bisect each other.',
            'Kite': 'Kite diagonals do not both bisect each other.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch3_t1_qm7',
        type: 'mcq',
        question: 'Which of these quadrilaterals always has four right angles?',
        options: ['Rectangle', 'Rhombus', 'Kite', 'Trapezium'],
        correctAnswer: 'Rectangle',
        explanation: 'A rectangle always has four right angles. 🟦',
        wrongAnswerExplanations: {
            'Rhombus': 'Rhombus does not always have right angles.',
            'Kite': 'Kite does not have all right angles.',
            'Trapezium': 'Trapezium does not have all right angles.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch3_t1_qm8',
        type: 'mcq',
        question: 'Which quadrilateral has diagonals that are equal and bisect each other at right angles?',
        options: ['Rectangle', 'Rhombus', 'Square', 'Kite'],
        correctAnswer: 'Square',
        explanation: 'A square has equal diagonals that bisect at right angles. ⬜',
        wrongAnswerExplanations: {
            'Rectangle': 'Rectangle diagonals are equal but do not bisect at right angles.',
            'Rhombus': 'Rhombus diagonals bisect at right angles but are not equal.',
            'Kite': 'Kite diagonals are not equal.'
        },
        difficulty: 'medium',
        marks: 3,
        recommendedTime: 60
    },
    {
        id: 'cl8_ch3_t1_qm9',
        type: 'mcq',
        question: 'Which of these quadrilaterals can have only one pair of equal angles?',
        options: ['Kite', 'Rectangle', 'Rhombus', 'Square'],
        correctAnswer: 'Kite',
        explanation: 'A kite can have only one pair of equal angles. 🪁',
        wrongAnswerExplanations: {
            'Rectangle': 'Rectangle has all angles equal.',
            'Rhombus': 'Rhombus has opposite angles equal.',
            'Square': 'Square has all angles equal.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch3_t1_qm10',
        type: 'mcq',
        question: 'Which property is unique to rectangles among all quadrilaterals?',
        options: ['All angles are right angles', 'All sides are equal', 'Diagonals are perpendicular', 'Only one pair of sides is parallel'],
        correctAnswer: 'All angles are right angles',
        explanation: 'Rectangles have all angles as right angles. 🟦',
        wrongAnswerExplanations: {
            'All sides are equal': 'Only squares and rhombuses have all sides equal.',
            'Diagonals are perpendicular': 'Only squares and rhombuses have perpendicular diagonals.',
            'Only one pair of sides is parallel': 'Trapezium has only one pair of parallel sides.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch3_t1_qm11',
        type: 'mcq',
        question: 'Which quadrilateral has two pairs of adjacent sides equal and no parallel sides?',
        options: ['Kite', 'Rectangle', 'Rhombus', 'Parallelogram'],
        correctAnswer: 'Kite',
        explanation: 'A kite has two pairs of adjacent sides equal and no parallel sides. 🪁',
        wrongAnswerExplanations: {
            'Rectangle': 'Rectangle has opposite sides equal and parallel.',
            'Rhombus': 'Rhombus has all sides equal and parallel.',
            'Parallelogram': 'Parallelogram has opposite sides equal and parallel.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch3_t1_qm12',
        type: 'mcq',
        question: 'Which of these quadrilaterals always has diagonals that are not equal?',
        options: ['Rectangle', 'Rhombus', 'Trapezium', 'Square'],
        correctAnswer: 'Trapezium',
        explanation: 'A trapezium’s diagonals are not equal. ➖',
        wrongAnswerExplanations: {
            'Rectangle': 'Rectangle diagonals are equal.',
            'Rhombus': 'Rhombus diagonals are not equal but bisect at right angles.',
            'Square': 'Square diagonals are equal.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch3_t1_qm13',
        type: 'mcq',
        question: 'Which quadrilateral has all sides equal and all angles right angles?',
        options: ['Rectangle', 'Rhombus', 'Square', 'Trapezium'],
        correctAnswer: 'Square',
        explanation: 'A square has all sides and all angles equal. ⬜',
        wrongAnswerExplanations: {
            'Rectangle': 'Rectangle has equal angles but not all sides equal.',
            'Rhombus': 'Rhombus has equal sides but not all angles 90°.',
            'Trapezium': 'Trapezium does not have all sides or angles equal.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch3_t1_qm14',
        type: 'mcq',
        question: 'Which of these quadrilaterals always has two pairs of parallel sides?',
        options: ['Trapezium', 'Parallelogram', 'Kite', 'Pentagon'],
        correctAnswer: 'Parallelogram',
        explanation: 'A parallelogram always has two pairs of parallel sides. 🟫',
        wrongAnswerExplanations: {
            'Trapezium': 'Trapezium has only one pair of parallel sides.',
            'Kite': 'Kite has no parallel sides.',
            'Pentagon': 'Pentagon is not a quadrilateral.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch3_t1_qm15',
        type: 'mcq',
        question: 'Which property is true for all rectangles but not all parallelograms?',
        options: ['All angles are right angles', 'Opposite sides are equal', 'Diagonals bisect at right angles', 'All sides are equal'],
        correctAnswer: 'All angles are right angles',
        explanation: 'Rectangles have all right angles, unlike all parallelograms. 🟦',
        wrongAnswerExplanations: {
            'Opposite sides are equal': 'All parallelograms have opposite sides equal.',
            'Diagonals bisect at right angles': 'Only squares and rhombuses have this property.',
            'All sides are equal': 'Only squares and rhombuses have all sides equal.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch3_t1_qm16',
        type: 'mcq',
        question: 'Which quadrilateral has diagonals that are perpendicular and one diagonal bisects the other?',
        options: ['Kite', 'Rectangle', 'Rhombus', 'Trapezium'],
        correctAnswer: 'Kite',
        explanation: 'A kite has perpendicular diagonals, one bisects the other. 🪁',
        wrongAnswerExplanations: {
            'Rectangle': 'Rectangle diagonals are equal but not perpendicular.',
            'Rhombus': 'Rhombus diagonals are perpendicular and bisect each other.',
            'Trapezium': 'Trapezium diagonals are not perpendicular.'
        },
        difficulty: 'medium',
        marks: 3,
        recommendedTime: 60
    },
    {
        id: 'cl8_ch3_t1_qm17',
        type: 'mcq',
        question: 'Which of these quadrilaterals can have no equal sides or angles?',
        options: ['Trapezium', 'Rectangle', 'Rhombus', 'Square'],
        correctAnswer: 'Trapezium',
        explanation: 'A trapezium can have no equal sides or angles. ➖',
        wrongAnswerExplanations: {
            'Rectangle': 'Rectangle has equal opposite sides and all angles equal.',
            'Rhombus': 'Rhombus has all sides equal.',
            'Square': 'Square has all sides and angles equal.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch3_t1_qm18',
        type: 'mcq',
        question: 'Which property is true for all squares but not all rectangles?',
        options: ['All sides are equal', 'All angles are right angles', 'Diagonals are equal', 'Opposite sides are equal'],
        correctAnswer: 'All sides are equal',
        explanation: 'All sides are equal in a square, not in all rectangles. ⬜',
        wrongAnswerExplanations: {
            'All angles are right angles': 'All rectangles have right angles.',
            'Diagonals are equal': 'Both squares and rectangles have equal diagonals.',
            'Opposite sides are equal': 'All rectangles have opposite sides equal.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch3_t1_qm19',
        type: 'mcq',
        question: 'Which quadrilateral has only one pair of parallel sides and non-parallel sides of different lengths?',
        options: ['Trapezium', 'Rectangle', 'Square', 'Rhombus'],
        correctAnswer: 'Trapezium',
        explanation: 'A trapezium has one pair of parallel sides and non-parallel sides of different lengths. ➖',
        wrongAnswerExplanations: {
            'Rectangle': 'Rectangle has two pairs of parallel sides.',
            'Square': 'Square has two pairs of parallel sides.',
            'Rhombus': 'Rhombus has two pairs of parallel sides.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch3_t1_qm20',
        type: 'mcq',
        question: 'Which of these quadrilaterals always has the sum of its interior angles equal to 360°?',
        options: ['Square', 'Rectangle', 'Rhombus', 'All quadrilaterals'],
        correctAnswer: 'All quadrilaterals',
        explanation: 'All quadrilaterals have interior angles summing to 360°. 🔄',
        wrongAnswerExplanations: {
            'Square': 'Square is a type of quadrilateral.',
            'Rectangle': 'Rectangle is a type of quadrilateral.',
            'Rhombus': 'Rhombus is a type of quadrilateral.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    }
]; 