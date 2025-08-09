import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl8_ch3_t2_qm1',
        type: 'mcq',
        question: 'If the diagonals of a rectangle are 10 cm each, what is the length of the rectangle if the width is 6 cm?',
        options: ['8 cm', '6 cm', '10 cm', '12 cm'],
        correctAnswer: '8 cm',
        explanation: 'By Pythagoras: length = √(10² - 6²) = √64 = 8 cm. 📏',
        wrongAnswerExplanations: {
            '6 cm': '6 cm is the width, not the length.',
            '10 cm': '10 cm is the diagonal, not the length.',
            '12 cm': 'Incorrect calculation.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch3_t2_qm2',
        type: 'mcq',
        question: 'Which statement is true for all parallelograms but not all rectangles?',
        options: ['Opposite sides are equal', 'All angles are 90°', 'Diagonals are equal', 'Diagonals bisect each other at right angles'],
        correctAnswer: 'Opposite sides are equal',
        explanation: 'All parallelograms have equal opposite sides. 🟫',
        wrongAnswerExplanations: {
            'All angles are 90°': 'Only rectangles and squares have all angles 90°.',
            'Diagonals are equal': 'Only rectangles and squares have equal diagonals.',
            'Diagonals bisect each other at right angles': 'Only rhombuses and squares have this property.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch3_t2_qm3',
        type: 'mcq',
        question: 'A rhombus has diagonals of 18 cm and 24 cm. What is the length of each side?',
        options: ['15 cm', '21 cm', '12 cm', '20 cm'],
        correctAnswer: '15 cm',
        explanation: 'Each side = ½√(18² + 24²) = 15 cm. 🔷',
        wrongAnswerExplanations: {
            '21 cm': 'Incorrect calculation.',
            '12 cm': 'Incorrect calculation.',
            '20 cm': 'Incorrect calculation.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl8_ch3_t2_qm4',
        type: 'mcq',
        question: 'Which quadrilateral has diagonals that are both equal and perpendicular?',
        options: ['Square', 'Rectangle', 'Rhombus', 'Parallelogram'],
        correctAnswer: 'Square',
        explanation: 'Square diagonals are equal and meet at 90°. ⬜',
        wrongAnswerExplanations: {
            'Rectangle': 'Rectangle diagonals are equal but not perpendicular.',
            'Rhombus': 'Rhombus diagonals are perpendicular but not equal.',
            'Parallelogram': 'Parallelogram diagonals are not always equal or perpendicular.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch3_t2_qm5',
        type: 'mcq',
        question: 'If a parallelogram has sides 8 cm and 5 cm, what is the perimeter?',
        options: ['26 cm', '20 cm', '16 cm', '18 cm'],
        correctAnswer: '26 cm',
        explanation: 'Perimeter = 2 × (8 + 5) = 26 cm. 🟫',
        wrongAnswerExplanations: {
            '20 cm': 'Incorrect calculation.',
            '16 cm': 'Incorrect calculation.',
            '18 cm': 'Incorrect calculation.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch3_t2_qm6',
        type: 'mcq',
        question: 'Which property distinguishes a rectangle from a parallelogram?',
        options: ['All angles are 90°', 'Opposite sides are equal', 'Diagonals bisect each other', 'Opposite angles are equal'],
        correctAnswer: 'All angles are 90°',
        explanation: 'Rectangles have all angles 90°, parallelograms do not. ⬛',
        wrongAnswerExplanations: {
            'Opposite sides are equal': 'Both rectangles and parallelograms have this property.',
            'Diagonals bisect each other': 'Both have this property.',
            'Opposite angles are equal': 'Both have this property.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch3_t2_qm7',
        type: 'mcq',
        question: 'A square has a perimeter of 36 cm. What is the length of its diagonal?',
        options: ['9 cm', '12.73 cm', '18 cm', '10.61 cm'],
        correctAnswer: '12.73 cm',
        explanation: 'Side = 36/4 = 9 cm; diagonal = 9 × 1.414 ≈ 12.73 cm. ⬜',
        wrongAnswerExplanations: {
            '9 cm': 'That is the side, not the diagonal.',
            '18 cm': 'Incorrect calculation.',
            '10.61 cm': 'Incorrect calculation.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl8_ch3_t2_qm8',
        type: 'mcq',
        question: 'Which quadrilateral has diagonals that are not equal but bisect each other at right angles?',
        options: ['Rhombus', 'Rectangle', 'Square', 'Trapezium'],
        correctAnswer: 'Rhombus',
        explanation: 'Rhombus diagonals are not equal but are perpendicular. 🔷',
        wrongAnswerExplanations: {
            'Rectangle': 'Rectangle diagonals are equal but not perpendicular.',
            'Square': 'Square diagonals are equal and perpendicular.',
            'Trapezium': 'Trapezium diagonals do not bisect at right angles.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch3_t2_qm9',
        type: 'mcq',
        question: 'If a parallelogram has adjacent angles of 70° and 110°, what is the measure of the other two angles?',
        options: ['70° and 110°', '90° and 90°', '120° and 60°', '80° and 100°'],
        correctAnswer: '70° and 110°',
        explanation: 'Opposite angles in a parallelogram are equal. 🟫',
        wrongAnswerExplanations: {
            '90° and 90°': 'Only rectangles and squares have all angles 90°.',
            '120° and 60°': 'Angles must be equal to their opposite.',
            '80° and 100°': 'Angles must be equal to their opposite.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch3_t2_qm10',
        type: 'mcq',
        question: 'Which property is shared by all parallelograms, rectangles, rhombuses, and squares?',
        options: ['Opposite sides are equal', 'All angles are 90°', 'Diagonals are equal', 'Only one pair of sides is parallel'],
        correctAnswer: 'Opposite sides are equal',
        explanation: 'All these quadrilaterals have equal opposite sides. 🔷',
        wrongAnswerExplanations: {
            'All angles are 90°': 'Only rectangles and squares have all angles 90°.',
            'Diagonals are equal': 'Only rectangles and squares have equal diagonals.',
            'Only one pair of sides is parallel': 'All have two pairs of parallel sides.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch3_t2_qm11',
        type: 'mcq',
        question: 'A rectangle has a length of 15 cm and a diagonal of 17 cm. What is its width?',
        options: ['8 cm', '10 cm', '12 cm', '9 cm'],
        correctAnswer: '8 cm',
        explanation: 'Width = √(17² - 15²) = √64 = 8 cm. ⬛',
        wrongAnswerExplanations: {
            '10 cm': 'Incorrect calculation.',
            '12 cm': 'Incorrect calculation.',
            '9 cm': 'Incorrect calculation.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl8_ch3_t2_qm12',
        type: 'mcq',
        question: 'Which quadrilateral has all sides equal and diagonals that are not equal?',
        options: ['Rhombus', 'Square', 'Rectangle', 'Parallelogram'],
        correctAnswer: 'Rhombus',
        explanation: 'Rhombus has all sides equal but diagonals are not equal. 🔷',
        wrongAnswerExplanations: {
            'Square': 'Square diagonals are equal.',
            'Rectangle': 'Rectangle diagonals are equal but not all sides are equal.',
            'Parallelogram': 'Not all sides or diagonals are equal.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch3_t2_qm13',
        type: 'mcq',
        question: 'If the area of a square is 81 cm², what is the length of its diagonal?',
        options: ['9 cm', '12.73 cm', '18 cm', '10.61 cm'],
        correctAnswer: '12.73 cm',
        explanation: 'Side = √81 = 9 cm; diagonal = 9 × 1.414 ≈ 12.73 cm. ⬜',
        wrongAnswerExplanations: {
            '9 cm': 'That is the side, not the diagonal.',
            '18 cm': 'Incorrect calculation.',
            '10.61 cm': 'Incorrect calculation.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl8_ch3_t2_qm14',
        type: 'mcq',
        question: 'Which property is NOT true for a rectangle?',
        options: ['Diagonals are perpendicular', 'Opposite sides are equal', 'All angles are 90°', 'Diagonals are equal'],
        correctAnswer: 'Diagonals are perpendicular',
        explanation: 'Rectangle diagonals are equal but not perpendicular. ⬛',
        wrongAnswerExplanations: {
            'Opposite sides are equal': 'This is true for rectangles.',
            'All angles are 90°': 'This is true for rectangles.',
            'Diagonals are equal': 'This is true for rectangles.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch3_t2_qm15',
        type: 'mcq',
        question: 'A parallelogram has adjacent sides 10 cm and 6 cm, and one angle is 60°. What is the area?',
        options: ['60√3 cm²', '30 cm²', '16 cm²', '60 cm²'],
        correctAnswer: '60√3 cm²',
        explanation: 'Area = ab sinθ = 10 × 6 × sin60° = 60 × 0.866 = 51.96 ≈ 60√3 cm². 🟫',
        wrongAnswerExplanations: {
            '30 cm²': 'Incorrect calculation.',
            '16 cm²': 'Incorrect calculation.',
            '60 cm²': 'Incorrect calculation.'
        },
        difficulty: 'medium',
        marks: 3,
        recommendedTime: 60
    },
    {
        id: 'cl8_ch3_t2_qm16',
        type: 'mcq',
        question: 'Which quadrilateral has all sides equal, all angles 90°, and diagonals that are equal and perpendicular?',
        options: ['Square', 'Rectangle', 'Rhombus', 'Parallelogram'],
        correctAnswer: 'Square',
        explanation: 'A square has all these properties. ⬜',
        wrongAnswerExplanations: {
            'Rectangle': 'Rectangles do not have all sides equal.',
            'Rhombus': 'Rhombuses do not have all angles 90° or equal diagonals.',
            'Parallelogram': 'Parallelograms do not have all sides or angles equal.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch3_t2_qm17',
        type: 'mcq',
        question: 'If the diagonals of a rectangle are 13 cm and the width is 5 cm, what is the length?',
        options: ['12 cm', '10 cm', '8 cm', '9 cm'],
        correctAnswer: '12 cm',
        explanation: 'Length = √(13² - 5²) = √144 = 12 cm. ⬛',
        wrongAnswerExplanations: {
            '10 cm': 'Incorrect calculation.',
            '8 cm': 'Incorrect calculation.',
            '9 cm': 'Incorrect calculation.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl8_ch3_t2_qm18',
        type: 'mcq',
        question: 'Which property is NOT shared by all parallelograms?',
        options: ['All angles are 90°', 'Opposite sides are equal', 'Diagonals bisect each other', 'Opposite angles are equal'],
        correctAnswer: 'All angles are 90°',
        explanation: 'Only rectangles and squares have all angles 90°. 🟫',
        wrongAnswerExplanations: {
            'Opposite sides are equal': 'All parallelograms have this property.',
            'Diagonals bisect each other': 'All parallelograms have this property.',
            'Opposite angles are equal': 'All parallelograms have this property.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch3_t2_qm19',
        type: 'mcq',
        question: 'A rhombus has diagonals of 14 cm and 48 cm. What is its area?',
        options: ['336 cm²', '672 cm²', '420 cm²', '240 cm²'],
        correctAnswer: '336 cm²',
        explanation: 'Area = (d1 × d2) / 2 = (14 × 48) / 2 = 336 cm². 🔷',
        wrongAnswerExplanations: {
            '672 cm²': 'That is the product, not half the product.',
            '420 cm²': 'Incorrect calculation.',
            '240 cm²': 'Incorrect calculation.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl8_ch3_t2_qm20',
        type: 'mcq',
        question: 'Which quadrilateral has all sides equal but does NOT have all angles equal?',
        options: ['Rhombus', 'Square', 'Rectangle', 'Parallelogram'],
        correctAnswer: 'Rhombus',
        explanation: 'A rhombus has all sides equal but not all angles 90°. 🔷',
        wrongAnswerExplanations: {
            'Square': 'A square has all sides and all angles equal.',
            'Rectangle': 'A rectangle has equal angles but not all sides equal.',
            'Parallelogram': 'A parallelogram does not have all sides or angles equal.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    }
]; 