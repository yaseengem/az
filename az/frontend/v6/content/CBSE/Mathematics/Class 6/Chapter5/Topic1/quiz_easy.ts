// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 6\Chapter5\Topic1\quiz_easy.ts
// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 6\Chapter5\Topic1\quiz_easy.ts
import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl6_ch5_t1_qe1',
        type: "mcq",
        question: "How many sides does a triangle have?",
        options: ["3", "4", "5", "6"],
        correctAnswer: "3",
        explanation: "A triangle has exactly 3 sides. That's why it's called a tri-angle! 🔺",
        wrongAnswerExplanations: {
            "4": "A shape with 4 sides is called a quadrilateral, not a triangle.",
            "5": "A shape with 5 sides is called a pentagon, not a triangle.",
            "6": "A shape with 6 sides is called a hexagon, not a triangle."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch5_t1_qe2',
        type: "mcq",
        question: "What is the sum of all interior angles in a triangle?",
        options: ["90°", "180°", "270°", "360°"],
        correctAnswer: "180°",
        explanation: "The sum of all interior angles in any triangle is always 180°. This is a fundamental property! 📐",
        wrongAnswerExplanations: {
            "90°": "90° is the measure of a right angle, not the sum of angles in a triangle.",
            "270°": "270° is not the sum of angles in a triangle.",
            "360°": "360° is the sum of angles in a quadrilateral, not a triangle."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch5_t1_qe3',
        type: "mcq",
        question: "Which of these is NOT a type of triangle based on sides?",
        options: ["Equilateral", "Isosceles", "Scalene", "Right-angled"],
        correctAnswer: "Right-angled",
        explanation: "Right-angled is a classification based on angles (90°), not sides. The side-based types are equilateral, isosceles, and scalene. 📏",
        wrongAnswerExplanations: {
            "Equilateral": "Equilateral is a type of triangle where all three sides are equal.",
            "Isosceles": "Isosceles is a type of triangle where two sides are equal.",
            "Scalene": "Scalene is a type of triangle where all three sides have different lengths."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch5_t1_qe4',
        type: "mcq",
        question: "What type of triangle has all sides of equal length?",
        options: ["Equilateral", "Isosceles", "Scalene", "Right-angled"],
        correctAnswer: "Equilateral",
        explanation: "An equilateral triangle has all three sides of equal length. The word 'equi' means equal! ✨",
        wrongAnswerExplanations: {
            "Isosceles": "An isosceles triangle has only two sides of equal length.",
            "Scalene": "A scalene triangle has all sides of different lengths.",
            "Right-angled": "A right-angled triangle has one angle of 90°, but its sides can have any length."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch5_t1_qe5',
        type: "mcq",
        question: "How many sides does a quadrilateral have?",
        options: ["3", "4", "5", "6"],
        correctAnswer: "4",
        explanation: "A quadrilateral has exactly 4 sides. 'Quad' means four! 🔹",
        wrongAnswerExplanations: {
            "3": "A shape with 3 sides is a triangle, not a quadrilateral.",
            "5": "A shape with 5 sides is a pentagon, not a quadrilateral.",
            "6": "A shape with 6 sides is a hexagon, not a quadrilateral."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch5_t1_qe6',
        type: "mcq",
        question: "What is the sum of all interior angles in a quadrilateral?",
        options: ["180°", "270°", "360°", "540°"],
        correctAnswer: "360°",
        explanation: "The sum of all interior angles in any quadrilateral is always 360°. That's a complete rotation! 🔄",
        wrongAnswerExplanations: {
            "180°": "180° is the sum of angles in a triangle, not a quadrilateral.",
            "270°": "270° is not the sum of angles in a quadrilateral.",
            "540°": "540° is not the sum of angles in a quadrilateral."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch5_t1_qe7',
        type: "mcq",
        question: "Which quadrilateral has all sides equal and all angles equal to 90°?",
        options: ["Rectangle", "Rhombus", "Square", "Parallelogram"],
        correctAnswer: "Square",
        explanation: "A square has all sides equal and all angles equal to 90°. It's the most symmetric quadrilateral! 🟦",
        wrongAnswerExplanations: {
            "Rectangle": "A rectangle has all angles equal to 90°, but opposite sides (not all sides) are equal.",
            "Rhombus": "A rhombus has all sides equal, but not all angles are 90°.",
            "Parallelogram": "A parallelogram has opposite sides equal, but not all sides are equal and not all angles are 90°."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch5_t1_qe8',
        type: "mcq",
        question: "Which quadrilateral has all angles equal to 90° but not all sides equal?",
        options: ["Square", "Rectangle", "Rhombus", "Kite"],
        correctAnswer: "Rectangle",
        explanation: "A rectangle has all angles equal to 90°, but only opposite sides are equal. 📱",
        wrongAnswerExplanations: {
            "Square": "A square has all angles equal to 90° AND all sides equal.",
            "Rhombus": "A rhombus has all sides equal but not all angles are 90°.",
            "Kite": "A kite has two pairs of adjacent sides equal and generally doesn't have 90° angles."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch5_t1_qe9',
        type: "mcq",
        question: "A triangle with one angle measuring 90° is called:",
        options: ["Acute triangle", "Obtuse triangle", "Right triangle", "Equilateral triangle"],
        correctAnswer: "Right triangle",
        explanation: "A triangle with one angle of 90° (right angle) is called a right triangle. 📐",
        wrongAnswerExplanations: {
            "Acute triangle": "An acute triangle has all angles less than 90°.",
            "Obtuse triangle": "An obtuse triangle has one angle more than 90°.",
            "Equilateral triangle": "An equilateral triangle has all sides equal and all angles equal to 60°."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch5_t1_qe10',
        type: "mcq",
        question: "Which of these shapes is NOT a quadrilateral?",
        options: ["Square", "Rectangle", "Rhombus", "Pentagon"],
        correctAnswer: "Pentagon",
        explanation: "A pentagon has 5 sides, while a quadrilateral must have exactly 4 sides. ⭐",
        wrongAnswerExplanations: {
            "Square": "A square is a quadrilateral with 4 equal sides and 4 equal angles.",
            "Rectangle": "A rectangle is a quadrilateral with opposite sides equal and all angles equal to 90°.",
            "Rhombus": "A rhombus is a quadrilateral with all sides equal."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch5_t1_qe11',
        type: "mcq",
        question: "A triangle with all three angles less than 90° is called:",
        options: ["Right triangle", "Obtuse triangle", "Acute triangle", "Scalene triangle"],
        correctAnswer: "Acute triangle",
        explanation: "An acute triangle has all three angles less than 90°. 'Acute' means sharp or pointed! 📌",
        wrongAnswerExplanations: {
            "Right triangle": "A right triangle has exactly one angle equal to 90°.",
            "Obtuse triangle": "An obtuse triangle has one angle greater than 90°.",
            "Scalene triangle": "Scalene refers to side lengths, not angles."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch5_t1_qe12',
        type: "mcq",
        question: "Which quadrilateral has opposite sides parallel but not all sides equal?",
        options: ["Square", "Rhombus", "Parallelogram", "Kite"],
        correctAnswer: "Parallelogram",
        explanation: "A parallelogram has opposite sides parallel and equal, but all sides need not be equal. ⬱",
        wrongAnswerExplanations: {
            "Square": "A square has all sides equal and all angles 90°.",
            "Rhombus": "A rhombus has all sides equal with opposite sides parallel.",
            "Kite": "A kite has two pairs of adjacent sides equal but not necessarily parallel."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch5_t1_qe13',
        type: "mcq",
        question: "A triangle with two sides of equal length is called:",
        options: ["Equilateral", "Isosceles", "Scalene", "Right-angled"],
        correctAnswer: "Isosceles",
        explanation: "An isosceles triangle has exactly two sides of equal length. 'Iso' means equal! 🔻",
        wrongAnswerExplanations: {
            "Equilateral": "An equilateral triangle has all three sides of equal length.",
            "Scalene": "A scalene triangle has all three sides of different lengths.",
            "Right-angled": "Right-angled refers to an angle of 90°, not the side lengths."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch5_t1_qe14',
        type: "mcq",
        question: "Which quadrilateral has all sides equal but not all angles equal to 90°?",
        options: ["Square", "Rectangle", "Rhombus", "Trapezium"],
        correctAnswer: "Rhombus",
        explanation: "A rhombus has all sides equal, but its angles are not all 90°. It looks like a tilted square! 🔶",
        wrongAnswerExplanations: {
            "Square": "A square has all sides equal AND all angles equal to 90°.",
            "Rectangle": "A rectangle has all angles equal to 90°, but only opposite sides are equal.",
            "Trapezium": "A trapezium has only one pair of opposite sides parallel and generally has unequal sides."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch5_t1_qe15',
        type: "mcq",
        question: "What type of quadrilateral has only one pair of opposite sides parallel?",
        options: ["Square", "Rectangle", "Parallelogram", "Trapezium"],
        correctAnswer: "Trapezium",
        explanation: "A trapezium has only one pair of opposite sides parallel. Think of a table with tapered legs! 📏",
        wrongAnswerExplanations: {
            "Square": "A square has both pairs of opposite sides parallel.",
            "Rectangle": "A rectangle has both pairs of opposite sides parallel.",
            "Parallelogram": "A parallelogram has both pairs of opposite sides parallel."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch5_t1_qe16',
        type: "mcq",
        question: "What is the name for the side opposite to the right angle in a right triangle?",
        options: ["Base", "Height", "Hypotenuse", "Leg"],
        correctAnswer: "Hypotenuse",
        explanation: "The side opposite to the right angle is called the hypotenuse. It's always the longest side! 📐",
        wrongAnswerExplanations: {
            "Base": "Base usually refers to the bottom side of a triangle, not specifically the side opposite to the right angle.",
            "Height": "Height is the perpendicular distance from a vertex to the opposite side.",
            "Leg": "The other two sides of a right triangle are called legs."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch5_t1_qe17',
        type: "mcq",
        question: "What are the measures of the three angles in an equilateral triangle?",
        options: ["30°, 60°, 90°", "45°, 45°, 90°", "60°, 60°, 60°", "30°, 30°, 120°"],
        correctAnswer: "60°, 60°, 60°",
        explanation: "In an equilateral triangle, all three angles are equal to 60° (180° ÷ 3 = 60°). ✨",
        wrongAnswerExplanations: {
            "30°, 60°, 90°": "These angles form a special right triangle, not an equilateral one.",
            "45°, 45°, 90°": "These angles form an isosceles right triangle, not an equilateral one.",
            "30°, 30°, 120°": "These angles form an isosceles triangle, not an equilateral one."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch5_t1_qe18',
        type: "mcq",
        question: "A quadrilateral with two pairs of adjacent sides equal is called:",
        options: ["Rectangle", "Rhombus", "Kite", "Parallelogram"],
        correctAnswer: "Kite",
        explanation: "A kite has two pairs of adjacent sides equal. It looks like a flying kite! 🪁",
        wrongAnswerExplanations: {
            "Rectangle": "A rectangle has opposite sides equal, not adjacent sides.",
            "Rhombus": "A rhombus has all four sides equal.",
            "Parallelogram": "A parallelogram has opposite sides equal and parallel."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch5_t1_qe19',
        type: "mcq",
        question: "How many diagonals does a quadrilateral have?",
        options: ["1", "2", "3", "4"],
        correctAnswer: "2",
        explanation: "A quadrilateral has exactly 2 diagonals, connecting opposite vertices. ✖️",
        wrongAnswerExplanations: {
            "1": "A quadrilateral has 2 diagonals, not 1.",
            "3": "A pentagon has 5 diagonals, a quadrilateral has only 2.",
            "4": "A quadrilateral has 2 diagonals, not 4."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch5_t1_qe20',
        type: "mcq",
        question: "Which of these is a real-life example of a triangle?",
        options: ["Door", "Book", "Warning road sign", "Television"],
        correctAnswer: "Warning road sign",
        explanation: "Warning road signs are typically triangular in shape! ⚠️",
        wrongAnswerExplanations: {
            "Door": "Doors are typically rectangular in shape.",
            "Book": "Books are typically rectangular in shape.",
            "Television": "Television screens are typically rectangular in shape."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    }
];
