import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl5_ch2_t1_qe1',
        type: "mcq",
        question: "How many sides does a triangle have?",
        options: ["2", "3", "4", "5"],
        correctAnswer: "3",
        explanation: "A triangle has 3 sides and 3 angles. 🔺",
        wrongAnswerExplanations: {
            "2": "A shape with 2 sides is not a closed figure.",
            "4": "A shape with 4 sides is a quadrilateral.",
            "5": "A shape with 5 sides is a pentagon."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch2_t1_qe2',
        type: "mcq",
        question: "Which shape has all sides equal and all angles equal to 90°?",
        options: ["Rectangle", "Square", "Rhombus", "Trapezium"],
        correctAnswer: "Square",
        explanation: "A square has 4 equal sides and 4 right angles. ⬜",
        wrongAnswerExplanations: {
            "Rectangle": "A rectangle has equal opposite sides but not all sides equal.",
            "Rhombus": "A rhombus has equal sides but angles are not 90°.",
            "Trapezium": "A trapezium has only one pair of parallel sides."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch2_t1_qe3',
        type: "mcq",
        question: "What is the name of a triangle with all sides equal?",
        options: ["Isosceles", "Scalene", "Equilateral", "Right"],
        correctAnswer: "Equilateral",
        explanation: "An equilateral triangle has all sides and angles equal. 🔺",
        wrongAnswerExplanations: {
            "Isosceles": "An isosceles triangle has only two sides equal.",
            "Scalene": "A scalene triangle has all sides different.",
            "Right": "A right triangle has one 90° angle."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch2_t1_qe4',
        type: "mcq",
        question: "How many vertices does a quadrilateral have?",
        options: ["2", "3", "4", "5"],
        correctAnswer: "4",
        explanation: "A quadrilateral has 4 vertices (corners). ⬜",
        wrongAnswerExplanations: {
            "2": "A shape with 2 vertices is not a closed figure.",
            "3": "A shape with 3 vertices is a triangle.",
            "5": "A shape with 5 vertices is a pentagon."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch2_t1_qe5',
        type: "mcq",
        question: "Which shape has only one pair of parallel sides?",
        options: ["Square", "Rectangle", "Rhombus", "Trapezium"],
        correctAnswer: "Trapezium",
        explanation: "A trapezium has exactly one pair of parallel sides. 📐",
        wrongAnswerExplanations: {
            "Square": "A square has two pairs of parallel sides.",
            "Rectangle": "A rectangle has two pairs of parallel sides.",
            "Rhombus": "A rhombus has two pairs of parallel sides."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch2_t1_qe6',
        type: "mcq",
        question: "What is the name of a triangle with one angle equal to 90°?",
        options: ["Acute", "Obtuse", "Right", "Equilateral"],
        correctAnswer: "Right",
        explanation: "A right triangle has one angle exactly 90°. 📐",
        wrongAnswerExplanations: {
            "Acute": "An acute triangle has all angles less than 90°.",
            "Obtuse": "An obtuse triangle has one angle more than 90°.",
            "Equilateral": "An equilateral triangle has all angles equal to 60°."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch2_t1_qe7',
        type: "mcq",
        question: "Which shape has opposite sides equal and all angles 90°?",
        options: ["Square", "Rectangle", "Rhombus", "Trapezium"],
        correctAnswer: "Rectangle",
        explanation: "A rectangle has equal opposite sides and four right angles. 📏",
        wrongAnswerExplanations: {
            "Square": "A square has all sides equal, not just opposite sides.",
            "Rhombus": "A rhombus has equal sides but angles are not 90°.",
            "Trapezium": "A trapezium has only one pair of parallel sides."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch2_t1_qe8',
        type: "mcq",
        question: "How many pairs of parallel sides does a rectangle have?",
        options: ["0", "1", "2", "3"],
        correctAnswer: "2",
        explanation: "A rectangle has two pairs of parallel sides. 📏",
        wrongAnswerExplanations: {
            "0": "A rectangle must have parallel sides.",
            "1": "A rectangle has two pairs, not one.",
            "3": "A rectangle has only two pairs of parallel sides."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch2_t1_qe9',
        type: "mcq",
        question: "What is the name of a triangle with all angles less than 90°?",
        options: ["Acute", "Obtuse", "Right", "Equilateral"],
        correctAnswer: "Acute",
        explanation: "An acute triangle has all angles less than 90°. 🔺",
        wrongAnswerExplanations: {
            "Obtuse": "An obtuse triangle has one angle more than 90°.",
            "Right": "A right triangle has one angle equal to 90°.",
            "Equilateral": "An equilateral triangle is a type of acute triangle."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch2_t1_qe10',
        type: "mcq",
        question: "Which shape has all sides equal but angles not equal to 90°?",
        options: ["Square", "Rectangle", "Rhombus", "Trapezium"],
        correctAnswer: "Rhombus",
        explanation: "A rhombus has equal sides but angles are not 90°. ⬢",
        wrongAnswerExplanations: {
            "Square": "A square has both equal sides and 90° angles.",
            "Rectangle": "A rectangle has equal opposite sides and 90° angles.",
            "Trapezium": "A trapezium has only one pair of parallel sides."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch2_t1_qe11',
        type: "mcq",
        question: "What is the name of a triangle with all sides different?",
        options: ["Isosceles", "Scalene", "Equilateral", "Right"],
        correctAnswer: "Scalene",
        explanation: "A scalene triangle has all sides and angles different. 🔺",
        wrongAnswerExplanations: {
            "Isosceles": "An isosceles triangle has two sides equal.",
            "Equilateral": "An equilateral triangle has all sides equal.",
            "Right": "A right triangle has one 90° angle."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch2_t1_qe12',
        type: "mcq",
        question: "How many right angles does a square have?",
        options: ["1", "2", "3", "4"],
        correctAnswer: "4",
        explanation: "A square has four right angles (90° each). ⬜",
        wrongAnswerExplanations: {
            "1": "A square has more than one right angle.",
            "2": "A square has more than two right angles.",
            "3": "A square has four right angles, not three."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch2_t1_qe13',
        type: "mcq",
        question: "Which shape has two pairs of equal opposite sides and angles?",
        options: ["Square", "Rectangle", "Parallelogram", "Trapezium"],
        correctAnswer: "Parallelogram",
        explanation: "A parallelogram has equal opposite sides and angles. ⬜",
        wrongAnswerExplanations: {
            "Square": "A square has all sides and angles equal.",
            "Rectangle": "A rectangle has equal opposite sides and all angles 90°.",
            "Trapezium": "A trapezium has only one pair of parallel sides."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch2_t1_qe14',
        type: "mcq",
        question: "What is the name of a triangle with two sides equal?",
        options: ["Isosceles", "Scalene", "Equilateral", "Right"],
        correctAnswer: "Isosceles",
        explanation: "An isosceles triangle has two equal sides and angles. 🔺",
        wrongAnswerExplanations: {
            "Scalene": "A scalene triangle has all sides different.",
            "Equilateral": "An equilateral triangle has all sides equal.",
            "Right": "A right triangle has one 90° angle."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch2_t1_qe15',
        type: "mcq",
        question: "How many pairs of equal sides does a rectangle have?",
        options: ["1", "2", "3", "4"],
        correctAnswer: "2",
        explanation: "A rectangle has two pairs of equal opposite sides. 📏",
        wrongAnswerExplanations: {
            "1": "A rectangle has two pairs of equal sides.",
            "3": "A rectangle has only two pairs of equal sides.",
            "4": "A rectangle has opposite sides equal, not all sides."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch2_t1_qe16',
        type: "mcq",
        question: "Which shape has all angles equal to 90° but sides not all equal?",
        options: ["Square", "Rectangle", "Rhombus", "Trapezium"],
        correctAnswer: "Rectangle",
        explanation: "A rectangle has four right angles but only opposite sides equal. 📏",
        wrongAnswerExplanations: {
            "Square": "A square has both equal sides and 90° angles.",
            "Rhombus": "A rhombus has equal sides but angles are not 90°.",
            "Trapezium": "A trapezium has only one pair of parallel sides."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch2_t1_qe17',
        type: "mcq",
        question: "What is the name of a triangle with one angle more than 90°?",
        options: ["Acute", "Obtuse", "Right", "Equilateral"],
        correctAnswer: "Obtuse",
        explanation: "An obtuse triangle has one angle greater than 90°. 🔺",
        wrongAnswerExplanations: {
            "Acute": "An acute triangle has all angles less than 90°.",
            "Right": "A right triangle has one angle equal to 90°.",
            "Equilateral": "An equilateral triangle has all angles equal to 60°."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch2_t1_qe18',
        type: "mcq",
        question: "How many sides are equal in an isosceles triangle?",
        options: ["0", "1", "2", "3"],
        correctAnswer: "2",
        explanation: "An isosceles triangle has two equal sides. 🔺",
        wrongAnswerExplanations: {
            "0": "An isosceles triangle must have equal sides.",
            "1": "An isosceles triangle has two equal sides.",
            "3": "An equilateral triangle has three equal sides."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch2_t1_qe19',
        type: "mcq",
        question: "Which shape has all sides equal and opposite angles equal?",
        options: ["Square", "Rectangle", "Rhombus", "Trapezium"],
        correctAnswer: "Rhombus",
        explanation: "A rhombus has equal sides and equal opposite angles. ⬢",
        wrongAnswerExplanations: {
            "Square": "A square has all sides and angles equal.",
            "Rectangle": "A rectangle has equal opposite sides and all angles 90°.",
            "Trapezium": "A trapezium has only one pair of parallel sides."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch2_t1_qe20',
        type: "mcq",
        question: "How many pairs of parallel sides does a parallelogram have?",
        options: ["0", "1", "2", "3"],
        correctAnswer: "2",
        explanation: "A parallelogram has two pairs of parallel sides. ⬜",
        wrongAnswerExplanations: {
            "0": "A parallelogram must have parallel sides.",
            "1": "A parallelogram has two pairs of parallel sides.",
            "3": "A parallelogram has only two pairs of parallel sides."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    }
]; 