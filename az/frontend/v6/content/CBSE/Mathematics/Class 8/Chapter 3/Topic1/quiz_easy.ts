import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl8_ch3_t1_qe1',
        type: 'mcq',
        question: 'Which of the following is always a quadrilateral?',
        options: ['Triangle', 'Pentagon', 'Rectangle', 'Circle'],
        correctAnswer: 'Rectangle',
        explanation: 'A rectangle always has four sides, making it a quadrilateral. 🟦',
        wrongAnswerExplanations: {
            'Triangle': 'A triangle has three sides.',
            'Pentagon': 'A pentagon has five sides.',
            'Circle': 'A circle has no straight sides.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch3_t1_qe2',
        type: 'mcq',
        question: 'How many sides does a quadrilateral have?',
        options: ['3', '4', '5', '6'],
        correctAnswer: '4',
        explanation: 'A quadrilateral has four sides. 4️⃣',
        wrongAnswerExplanations: {
            '3': 'A triangle has three sides.',
            '5': 'A pentagon has five sides.',
            '6': 'A hexagon has six sides.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch3_t1_qe3',
        type: 'mcq',
        question: 'Which of these is NOT a quadrilateral?',
        options: ['Square', 'Rhombus', 'Hexagon', 'Trapezium'],
        correctAnswer: 'Hexagon',
        explanation: 'A hexagon has six sides, not four. 🛑',
        wrongAnswerExplanations: {
            'Square': 'A square has four sides.',
            'Rhombus': 'A rhombus has four sides.',
            'Trapezium': 'A trapezium has four sides.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch3_t1_qe4',
        type: 'mcq',
        question: 'Which quadrilateral has all sides equal and all angles right angles?',
        options: ['Rectangle', 'Rhombus', 'Square', 'Trapezium'],
        correctAnswer: 'Square',
        explanation: 'A square has all sides equal and all angles 90°. ⬜',
        wrongAnswerExplanations: {
            'Rectangle': 'A rectangle has equal angles but not all sides equal.',
            'Rhombus': 'A rhombus has equal sides but not all angles 90°.',
            'Trapezium': 'A trapezium does not have all sides or angles equal.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch3_t1_qe5',
        type: 'mcq',
        question: 'Which quadrilateral has only one pair of parallel sides?',
        options: ['Parallelogram', 'Rectangle', 'Trapezium', 'Square'],
        correctAnswer: 'Trapezium',
        explanation: 'A trapezium has only one pair of parallel sides. ➖',
        wrongAnswerExplanations: {
            'Parallelogram': 'A parallelogram has two pairs of parallel sides.',
            'Rectangle': 'A rectangle has two pairs of parallel sides.',
            'Square': 'A square has two pairs of parallel sides.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch3_t1_qe6',
        type: 'mcq',
        question: 'Which of the following is a property of a parallelogram?',
        options: ['All angles are right angles', 'Opposite sides are equal', 'All sides are equal', 'Only one pair of sides is parallel'],
        correctAnswer: 'Opposite sides are equal',
        explanation: 'In a parallelogram, opposite sides are always equal. 🟫',
        wrongAnswerExplanations: {
            'All angles are right angles': 'Only rectangles and squares have all right angles.',
            'All sides are equal': 'Only rhombus and square have all sides equal.',
            'Only one pair of sides is parallel': 'A parallelogram has two pairs of parallel sides.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch3_t1_qe7',
        type: 'mcq',
        question: 'Which quadrilateral has diagonals that bisect each other at right angles?',
        options: ['Rectangle', 'Rhombus', 'Trapezium', 'Kite'],
        correctAnswer: 'Rhombus',
        explanation: 'Diagonals of a rhombus bisect at right angles. ✖️',
        wrongAnswerExplanations: {
            'Rectangle': 'Rectangle diagonals bisect but not at right angles.',
            'Trapezium': 'Trapezium diagonals do not bisect at right angles.',
            'Kite': 'Kite diagonals bisect at right angles, but only one diagonal is bisected.'
        },
        difficulty: 'easy',
        marks: 2,
        recommendedTime: 40
    },
    {
        id: 'cl8_ch3_t1_qe8',
        type: 'mcq',
        question: 'Which quadrilateral has both pairs of opposite sides parallel and equal?',
        options: ['Trapezium', 'Parallelogram', 'Kite', 'Pentagon'],
        correctAnswer: 'Parallelogram',
        explanation: 'A parallelogram has both pairs of opposite sides parallel and equal. 🟫',
        wrongAnswerExplanations: {
            'Trapezium': 'Trapezium has only one pair of parallel sides.',
            'Kite': 'Kite does not have parallel sides.',
            'Pentagon': 'Pentagon is not a quadrilateral.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch3_t1_qe9',
        type: 'mcq',
        question: 'Which of these quadrilaterals always has equal diagonals?',
        options: ['Rhombus', 'Rectangle', 'Parallelogram', 'Kite'],
        correctAnswer: 'Rectangle',
        explanation: 'A rectangle always has equal diagonals. 📏',
        wrongAnswerExplanations: {
            'Rhombus': 'Rhombus diagonals are not equal.',
            'Parallelogram': 'Parallelogram diagonals are not always equal.',
            'Kite': 'Kite diagonals are not equal.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch3_t1_qe10',
        type: 'mcq',
        question: 'Which quadrilateral has exactly two pairs of adjacent sides equal?',
        options: ['Kite', 'Square', 'Rectangle', 'Rhombus'],
        correctAnswer: 'Kite',
        explanation: 'A kite has two pairs of adjacent sides equal. 🪁',
        wrongAnswerExplanations: {
            'Square': 'All sides of a square are equal.',
            'Rectangle': 'Rectangle has opposite sides equal.',
            'Rhombus': 'All sides of a rhombus are equal.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch3_t1_qe11',
        type: 'mcq',
        question: 'Which of the following is NOT a property of a square?',
        options: ['All sides are equal', 'All angles are right angles', 'Diagonals are equal', 'Only one pair of sides is parallel'],
        correctAnswer: 'Only one pair of sides is parallel',
        explanation: 'A square has two pairs of parallel sides. ⬜',
        wrongAnswerExplanations: {
            'All sides are equal': 'All sides of a square are equal.',
            'All angles are right angles': 'All angles are 90° in a square.',
            'Diagonals are equal': 'Diagonals of a square are equal.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch3_t1_qe12',
        type: 'mcq',
        question: 'Which quadrilateral has only one pair of equal angles?',
        options: ['Kite', 'Rectangle', 'Rhombus', 'Square'],
        correctAnswer: 'Kite',
        explanation: 'A kite has one pair of equal angles. 🪁',
        wrongAnswerExplanations: {
            'Rectangle': 'Rectangle has all angles equal.',
            'Rhombus': 'Rhombus has opposite angles equal.',
            'Square': 'Square has all angles equal.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch3_t1_qe13',
        type: 'mcq',
        question: 'Which of these is a regular quadrilateral?',
        options: ['Rectangle', 'Rhombus', 'Square', 'Trapezium'],
        correctAnswer: 'Square',
        explanation: 'A square is a regular quadrilateral. ⬜',
        wrongAnswerExplanations: {
            'Rectangle': 'Rectangle is not regular as all sides are not equal.',
            'Rhombus': 'Rhombus is not regular as all angles are not equal.',
            'Trapezium': 'Trapezium is not regular.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch3_t1_qe14',
        type: 'mcq',
        question: 'Which quadrilateral has all sides equal but angles not all equal?',
        options: ['Square', 'Rhombus', 'Rectangle', 'Trapezium'],
        correctAnswer: 'Rhombus',
        explanation: 'A rhombus has all sides equal but not all angles equal. 🔷',
        wrongAnswerExplanations: {
            'Square': 'Square has all sides and angles equal.',
            'Rectangle': 'Rectangle has equal angles but not all sides equal.',
            'Trapezium': 'Trapezium does not have all sides equal.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch3_t1_qe15',
        type: 'mcq',
        question: 'Which of these quadrilaterals can have no right angles?',
        options: ['Rectangle', 'Square', 'Rhombus', 'Kite'],
        correctAnswer: 'Rhombus',
        explanation: 'A rhombus can have no right angles. 🔷',
        wrongAnswerExplanations: {
            'Rectangle': 'All angles in a rectangle are right angles.',
            'Square': 'All angles in a square are right angles.',
            'Kite': 'A kite can have one right angle, but not always.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch3_t1_qe16',
        type: 'mcq',
        question: 'Which quadrilateral has two pairs of equal adjacent sides but no parallel sides?',
        options: ['Kite', 'Rectangle', 'Rhombus', 'Parallelogram'],
        correctAnswer: 'Kite',
        explanation: 'A kite has two pairs of equal adjacent sides and no parallel sides. 🪁',
        wrongAnswerExplanations: {
            'Rectangle': 'Rectangle has opposite sides equal and parallel.',
            'Rhombus': 'Rhombus has all sides equal and parallel.',
            'Parallelogram': 'Parallelogram has opposite sides equal and parallel.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch3_t1_qe17',
        type: 'mcq',
        question: 'Which of these quadrilaterals always has opposite angles equal?',
        options: ['Trapezium', 'Kite', 'Parallelogram', 'Pentagon'],
        correctAnswer: 'Parallelogram',
        explanation: 'A parallelogram always has opposite angles equal. 🟫',
        wrongAnswerExplanations: {
            'Trapezium': 'Trapezium does not always have opposite angles equal.',
            'Kite': 'Kite has only one pair of equal angles.',
            'Pentagon': 'Pentagon is not a quadrilateral.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch3_t1_qe18',
        type: 'mcq',
        question: 'Which quadrilateral has diagonals that are not equal and do not bisect at right angles?',
        options: ['Rectangle', 'Rhombus', 'Trapezium', 'Square'],
        correctAnswer: 'Trapezium',
        explanation: 'A trapezium’s diagonals are not equal and do not bisect at right angles. ➖',
        wrongAnswerExplanations: {
            'Rectangle': 'Rectangle diagonals are equal.',
            'Rhombus': 'Rhombus diagonals bisect at right angles.',
            'Square': 'Square diagonals are equal and bisect at right angles.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch3_t1_qe19',
        type: 'mcq',
        question: 'Which of these is a property of all quadrilaterals?',
        options: ['Sum of angles is 180°', 'Sum of angles is 360°', 'All sides are equal', 'All angles are right angles'],
        correctAnswer: 'Sum of angles is 360°',
        explanation: 'The sum of interior angles in any quadrilateral is 360°. 🔄',
        wrongAnswerExplanations: {
            'Sum of angles is 180°': 'Triangles have 180°, not quadrilaterals.',
            'All sides are equal': 'Not all quadrilaterals have equal sides.',
            'All angles are right angles': 'Not all quadrilaterals have right angles.'
        },
        difficulty: 'easy',
        marks: 2,
        recommendedTime: 40
    },
    {
        id: 'cl8_ch3_t1_qe20',
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
        difficulty: 'easy',
        marks: 2,
        recommendedTime: 40
    }
]; 