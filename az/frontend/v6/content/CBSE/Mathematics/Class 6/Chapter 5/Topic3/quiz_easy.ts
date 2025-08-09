import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl6_ch5_t3_qe1',
        type: "mcq",
        question: "How many sides does a triangle have?",
        options: ["2", "3", "4", "5"],
        correctAnswer: "3",
        explanation: "A triangle has 3 sides and 3 angles. 🔺",
        wrongAnswerExplanations: {
            "2": "A shape with 2 sides would be a line segment.",
            "4": "A shape with 4 sides is a quadrilateral.",
            "5": "A shape with 5 sides is a pentagon."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch5_t3_qe2',
        type: "mcq",
        question: "What is the sum of angles in a triangle?",
        options: ["90°", "180°", "270°", "360°"],
        correctAnswer: "180°",
        explanation: "The sum of all three angles in any triangle is always 180°. 🔺",
        wrongAnswerExplanations: {
            "90°": "This is a right angle, not the sum of triangle angles.",
            "270°": "This is more than the sum of triangle angles.",
            "360°": "This is the sum of angles in a quadrilateral."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch5_t3_qe3',
        type: "mcq",
        question: "Which shape has all sides equal and all angles 90°?",
        options: ["Rectangle", "Rhombus", "Square", "Trapezium"],
        correctAnswer: "Square",
        explanation: "A square has 4 equal sides and 4 right angles. ⬜",
        wrongAnswerExplanations: {
            "Rectangle": "A rectangle has equal opposite sides but not all sides equal.",
            "Rhombus": "A rhombus has all sides equal but not all angles 90°.",
            "Trapezium": "A trapezium has only one pair of parallel sides."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch5_t3_qe4',
        type: "mcq",
        question: "What type of angle is 45°?",
        options: ["Right", "Acute", "Obtuse", "Straight"],
        correctAnswer: "Acute",
        explanation: "An acute angle is any angle less than 90°. 📐",
        wrongAnswerExplanations: {
            "Right": "A right angle is exactly 90°.",
            "Obtuse": "An obtuse angle is more than 90° but less than 180°.",
            "Straight": "A straight angle is exactly 180°."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch5_t3_qe5',
        type: "mcq",
        question: "How many sides does a quadrilateral have?",
        options: ["2", "3", "4", "5"],
        correctAnswer: "4",
        explanation: "A quadrilateral has 4 sides and 4 angles. 📦",
        wrongAnswerExplanations: {
            "2": "A shape with 2 sides would be a line segment.",
            "3": "A shape with 3 sides is a triangle.",
            "5": "A shape with 5 sides is a pentagon."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch5_t3_qe6',
        type: "mcq",
        question: "What is the name of a triangle with all sides equal?",
        options: ["Isosceles", "Scalene", "Equilateral", "Right"],
        correctAnswer: "Equilateral",
        explanation: "An equilateral triangle has all three sides equal and all angles 60°. 🔺",
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
        id: 'cl6_ch5_t3_qe7',
        type: "mcq",
        question: "What is the diameter of a circle with radius 5 cm?",
        options: ["5 cm", "10 cm", "15 cm", "20 cm"],
        correctAnswer: "10 cm",
        explanation: "Diameter = 2 × radius = 2 × 5 cm = 10 cm. ⭕",
        wrongAnswerExplanations: {
            "5 cm": "This is the radius, not the diameter.",
            "15 cm": "This is 3 times the radius, not the diameter.",
            "20 cm": "This is 4 times the radius, not the diameter."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch5_t3_qe8',
        type: "mcq",
        question: "Which shape has no sides and no angles?",
        options: ["Square", "Triangle", "Circle", "Rectangle"],
        correctAnswer: "Circle",
        explanation: "A circle is a round shape with no sides or angles. ⭕",
        wrongAnswerExplanations: {
            "Square": "A square has 4 sides and 4 angles.",
            "Triangle": "A triangle has 3 sides and 3 angles.",
            "Rectangle": "A rectangle has 4 sides and 4 angles."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch5_t3_qe9',
        type: "mcq",
        question: "What type of angle is 90°?",
        options: ["Acute", "Right", "Obtuse", "Straight"],
        correctAnswer: "Right",
        explanation: "A right angle is exactly 90°. 📐",
        wrongAnswerExplanations: {
            "Acute": "An acute angle is less than 90°.",
            "Obtuse": "An obtuse angle is more than 90° but less than 180°.",
            "Straight": "A straight angle is exactly 180°."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch5_t3_qe10',
        type: "mcq",
        question: "How many vertices does a triangle have?",
        options: ["2", "3", "4", "5"],
        correctAnswer: "3",
        explanation: "A triangle has 3 vertices (corners). 🔺",
        wrongAnswerExplanations: {
            "2": "A shape with 2 vertices would be a line segment.",
            "4": "A shape with 4 vertices is a quadrilateral.",
            "5": "A shape with 5 vertices is a pentagon."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch5_t3_qe11',
        type: "mcq",
        question: "What is the name of a quadrilateral with one pair of parallel sides?",
        options: ["Square", "Rectangle", "Trapezium", "Rhombus"],
        correctAnswer: "Trapezium",
        explanation: "A trapezium has exactly one pair of parallel sides. 📦",
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
        id: 'cl6_ch5_t3_qe12',
        type: "mcq",
        question: "What type of angle is 120°?",
        options: ["Acute", "Right", "Obtuse", "Straight"],
        correctAnswer: "Obtuse",
        explanation: "An obtuse angle is more than 90° but less than 180°. 📐",
        wrongAnswerExplanations: {
            "Acute": "An acute angle is less than 90°.",
            "Right": "A right angle is exactly 90°.",
            "Straight": "A straight angle is exactly 180°."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch5_t3_qe13',
        type: "mcq",
        question: "How many sides does a pentagon have?",
        options: ["3", "4", "5", "6"],
        correctAnswer: "5",
        explanation: "A pentagon has 5 sides and 5 angles. ⬟",
        wrongAnswerExplanations: {
            "3": "A shape with 3 sides is a triangle.",
            "4": "A shape with 4 sides is a quadrilateral.",
            "6": "A shape with 6 sides is a hexagon."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch5_t3_qe14',
        type: "mcq",
        question: "What is the name of a triangle with two sides equal?",
        options: ["Equilateral", "Isosceles", "Scalene", "Right"],
        correctAnswer: "Isosceles",
        explanation: "An isosceles triangle has exactly two sides equal. 🔺",
        wrongAnswerExplanations: {
            "Equilateral": "An equilateral triangle has all three sides equal.",
            "Scalene": "A scalene triangle has all sides different.",
            "Right": "A right triangle has one 90° angle."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch5_t3_qe15',
        type: "mcq",
        question: "What is the sum of angles in a quadrilateral?",
        options: ["180°", "270°", "360°", "450°"],
        correctAnswer: "360°",
        explanation: "The sum of all four angles in any quadrilateral is always 360°. 📦",
        wrongAnswerExplanations: {
            "180°": "This is the sum of angles in a triangle.",
            "270°": "This is less than the sum of quadrilateral angles.",
            "450°": "This is more than the sum of quadrilateral angles."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch5_t3_qe16',
        type: "mcq",
        question: "What type of angle is 180°?",
        options: ["Acute", "Right", "Obtuse", "Straight"],
        correctAnswer: "Straight",
        explanation: "A straight angle is exactly 180°. 📐",
        wrongAnswerExplanations: {
            "Acute": "An acute angle is less than 90°.",
            "Right": "A right angle is exactly 90°.",
            "Obtuse": "An obtuse angle is more than 90° but less than 180°."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch5_t3_qe17',
        type: "mcq",
        question: "How many vertices does a quadrilateral have?",
        options: ["2", "3", "4", "5"],
        correctAnswer: "4",
        explanation: "A quadrilateral has 4 vertices (corners). 📦",
        wrongAnswerExplanations: {
            "2": "A shape with 2 vertices would be a line segment.",
            "3": "A shape with 3 vertices is a triangle.",
            "5": "A shape with 5 vertices is a pentagon."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch5_t3_qe18',
        type: "mcq",
        question: "What is the name of a quadrilateral with all sides equal?",
        options: ["Rectangle", "Square", "Rhombus", "Trapezium"],
        correctAnswer: "Rhombus",
        explanation: "A rhombus has all four sides equal. 📦",
        wrongAnswerExplanations: {
            "Rectangle": "A rectangle has equal opposite sides but not all sides equal.",
            "Square": "A square has all sides equal and all angles 90°.",
            "Trapezium": "A trapezium has only one pair of parallel sides."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch5_t3_qe19',
        type: "mcq",
        question: "What is the name of a triangle with all sides different?",
        options: ["Equilateral", "Isosceles", "Scalene", "Right"],
        correctAnswer: "Scalene",
        explanation: "A scalene triangle has all three sides of different lengths. 🔺",
        wrongAnswerExplanations: {
            "Equilateral": "An equilateral triangle has all sides equal.",
            "Isosceles": "An isosceles triangle has two sides equal.",
            "Right": "A right triangle has one 90° angle."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch5_t3_qe20',
        type: "mcq",
        question: "What is the name of a quadrilateral with opposite sides equal and parallel?",
        options: ["Square", "Rectangle", "Parallelogram", "Trapezium"],
        correctAnswer: "Parallelogram",
        explanation: "A parallelogram has opposite sides equal and parallel. 📦",
        wrongAnswerExplanations: {
            "Square": "A square has all sides equal and all angles 90°.",
            "Rectangle": "A rectangle has opposite sides equal and all angles 90°.",
            "Trapezium": "A trapezium has only one pair of parallel sides."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    }
]; 