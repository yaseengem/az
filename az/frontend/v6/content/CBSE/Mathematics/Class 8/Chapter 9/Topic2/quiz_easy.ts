import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl8_ch9_t2_qe1',
        type: 'mcq',
        question: 'What is the formula for the area of a trapezium?',
        options: [
            '½ × (sum of parallel sides) × height',
            'base × height',
            '½ × base × height',
            'side × side'
        ],
        correctAnswer: '½ × (sum of parallel sides) × height',
        explanation: 'Area of a trapezium is ½ × (a + b) × h. 🟪',
        wrongAnswerExplanations: {
            'base × height': 'This is the formula for a parallelogram.',
            '½ × base × height': 'This is the formula for a triangle.',
            'side × side': 'This is the formula for a square.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch9_t2_qe2',
        type: 'mcq',
        question: 'A trapezium has parallel sides of 10 cm and 6 cm, and height 5 cm. What is its area?',
        options: [
            '40 cm²',
            '50 cm²',
            '30 cm²',
            '20 cm²'
        ],
        correctAnswer: '40 cm²',
        explanation: 'Area = ½ × (10 + 6) × 5 = 40 cm².',
        wrongAnswerExplanations: {
            '50 cm²': 'Check the formula and calculation.',
            '30 cm²': 'Check the sum of the parallel sides.',
            '20 cm²': 'Check the multiplication step.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch9_t2_qe3',
        type: 'mcq',
        question: 'Which shape has both pairs of opposite sides parallel?',
        options: [
            'Parallelogram',
            'Trapezium',
            'Triangle',
            'Pentagon'
        ],
        correctAnswer: 'Parallelogram',
        explanation: 'A parallelogram has both pairs of opposite sides parallel. 🔷',
        wrongAnswerExplanations: {
            'Trapezium': 'A trapezium has only one pair of parallel sides.',
            'Triangle': 'A triangle has no parallel sides.',
            'Pentagon': 'A regular pentagon has no parallel sides.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch9_t2_qe4',
        type: 'mcq',
        question: 'What is the area of a parallelogram with base 8 cm and height 3 cm?',
        options: [
            '24 cm²',
            '11 cm²',
            '16 cm²',
            '32 cm²'
        ],
        correctAnswer: '24 cm²',
        explanation: 'Area = base × height = 8 × 3 = 24 cm².',
        wrongAnswerExplanations: {
            '11 cm²': 'Multiply base and height.',
            '16 cm²': 'Check the multiplication.',
            '32 cm²': 'Check the multiplication.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch9_t2_qe5',
        type: 'mcq',
        question: 'A rhombus has diagonals of 12 cm and 9 cm. What is its area?',
        options: [
            '54 cm²',
            '108 cm²',
            '21 cm²',
            '36 cm²'
        ],
        correctAnswer: '54 cm²',
        explanation: 'Area = ½ × 12 × 9 = 54 cm². 💎',
        wrongAnswerExplanations: {
            '108 cm²': 'Remember to multiply by ½.',
            '21 cm²': 'Check the formula and calculation.',
            '36 cm²': 'Check the multiplication.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch9_t2_qe6',
        type: 'mcq',
        question: 'Which of the following is a regular polygon?',
        options: [
            'Equilateral triangle',
            'Rectangle',
            'Trapezium',
            'Scalene triangle'
        ],
        correctAnswer: 'Equilateral triangle',
        explanation: 'All sides and angles are equal in an equilateral triangle. 🔺',
        wrongAnswerExplanations: {
            'Rectangle': 'A rectangle has equal angles but not all sides equal.',
            'Trapezium': 'A trapezium does not have all sides equal.',
            'Scalene triangle': 'All sides and angles are different.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch9_t2_qe7',
        type: 'mcq',
        question: 'What is the area of a regular hexagon with perimeter 18 cm and apothem 2 cm?',
        options: [
            '18 cm²',
            '36 cm²',
            '20 cm²',
            '12 cm²'
        ],
        correctAnswer: '18 cm²',
        explanation: 'Area = (Perimeter × Apothem) ÷ 2 = (18 × 2) ÷ 2 = 18 cm².',
        wrongAnswerExplanations: {
            '36 cm²': 'Check the division by 2.',
            '20 cm²': 'Check the multiplication and division.',
            '12 cm²': 'Check the multiplication.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch9_t2_qe8',
        type: 'mcq',
        question: 'Which unit is used to measure area?',
        options: [
            'cm²',
            'cm',
            'cm³',
            'kg'
        ],
        correctAnswer: 'cm²',
        explanation: 'Area is measured in square units like cm². 📏',
        wrongAnswerExplanations: {
            'cm': 'cm is a unit of length.',
            'cm³': 'cm³ is a unit of volume.',
            'kg': 'kg is a unit of mass.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch9_t2_qe9',
        type: 'mcq',
        question: 'A parallelogram has a base of 7 cm and height 5 cm. What is its area?',
        options: [
            '35 cm²',
            '12 cm²',
            '25 cm²',
            '30 cm²'
        ],
        correctAnswer: '35 cm²',
        explanation: 'Area = base × height = 7 × 5 = 35 cm².',
        wrongAnswerExplanations: {
            '12 cm²': 'Multiply base and height.',
            '25 cm²': 'Check the multiplication.',
            '30 cm²': 'Check the multiplication.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch9_t2_qe10',
        type: 'mcq',
        question: 'Which of the following is NOT a polygon?',
        options: [
            'Circle',
            'Pentagon',
            'Hexagon',
            'Trapezium'
        ],
        correctAnswer: 'Circle',
        explanation: 'A circle is not a polygon as it has no straight sides.',
        wrongAnswerExplanations: {
            'Pentagon': 'A pentagon is a polygon with 5 sides.',
            'Hexagon': 'A hexagon is a polygon with 6 sides.',
            'Trapezium': 'A trapezium is a polygon with 4 sides.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch9_t2_qe11',
        type: 'mcq',
        question: 'If a trapezium has parallel sides 15 m and 9 m, and height 6 m, what is its area?',
        options: [
            '72 m²',
            '54 m²',
            '60 m²',
            '96 m²'
        ],
        correctAnswer: '72 m²',
        explanation: 'Area = ½ × (15 + 9) × 6 = 72 m².',
        wrongAnswerExplanations: {
            '54 m²': 'Check the sum and multiplication.',
            '60 m²': 'Check the calculation.',
            '96 m²': 'Check the calculation.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch9_t2_qe12',
        type: 'mcq',
        question: 'What is the sum of the interior angles of a pentagon?',
        options: [
            '540°',
            '360°',
            '720°',
            '180°'
        ],
        correctAnswer: '540°',
        explanation: 'Sum = (n-2) × 180° for n=5: (5-2)×180°=540°.',
        wrongAnswerExplanations: {
            '360°': '360° is for a quadrilateral.',
            '720°': '720° is for a hexagon.',
            '180°': '180° is for a triangle.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch9_t2_qe13',
        type: 'mcq',
        question: 'Which property is true for all regular polygons?',
        options: [
            'All sides and angles are equal',
            'Only sides are equal',
            'Only angles are equal',
            'No sides are equal'
        ],
        correctAnswer: 'All sides and angles are equal',
        explanation: 'Regular polygons have all sides and angles equal. 🔵',
        wrongAnswerExplanations: {
            'Only sides are equal': 'Angles must also be equal.',
            'Only angles are equal': 'Sides must also be equal.',
            'No sides are equal': 'This is not true for regular polygons.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch9_t2_qe14',
        type: 'mcq',
        question: 'A garden is shaped like a rectangle with a semicircular end. How do you find its area?',
        options: [
            'Add the area of rectangle and semicircle',
            'Multiply the areas',
            'Subtract the semicircle from rectangle',
            'Divide the area of rectangle by 2'
        ],
        correctAnswer: 'Add the area of rectangle and semicircle',
        explanation: 'Add the areas of both shapes for total area. 🧩',
        wrongAnswerExplanations: {
            'Multiply the areas': 'Areas are not multiplied.',
            'Subtract the semicircle from rectangle': 'This gives the leftover area, not total.',
            'Divide the area of rectangle by 2': 'This is not correct for composite shapes.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch9_t2_qe15',
        type: 'mcq',
        question: 'What is the area of a rhombus with diagonals 14 cm and 8 cm?',
        options: [
            '56 cm²',
            '112 cm²',
            '22 cm²',
            '44 cm²'
        ],
        correctAnswer: '56 cm²',
        explanation: 'Area = ½ × 14 × 8 = 56 cm².',
        wrongAnswerExplanations: {
            '112 cm²': 'Remember to multiply by ½.',
            '22 cm²': 'Check the formula and calculation.',
            '44 cm²': 'Check the multiplication.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch9_t2_qe16',
        type: 'mcq',
        question: 'Which of the following is a quadrilateral?',
        options: [
            'Trapezium',
            'Triangle',
            'Pentagon',
            'Circle'
        ],
        correctAnswer: 'Trapezium',
        explanation: 'A trapezium has 4 sides, so it is a quadrilateral.',
        wrongAnswerExplanations: {
            'Triangle': 'A triangle has 3 sides.',
            'Pentagon': 'A pentagon has 5 sides.',
            'Circle': 'A circle has no sides.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch9_t2_qe17',
        type: 'mcq',
        question: 'A regular polygon has 6 sides. What is it called?',
        options: [
            'Hexagon',
            'Pentagon',
            'Octagon',
            'Quadrilateral'
        ],
        correctAnswer: 'Hexagon',
        explanation: 'A polygon with 6 sides is called a hexagon.',
        wrongAnswerExplanations: {
            'Pentagon': 'A pentagon has 5 sides.',
            'Octagon': 'An octagon has 8 sides.',
            'Quadrilateral': 'A quadrilateral has 4 sides.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch9_t2_qe18',
        type: 'mcq',
        question: 'What is the area of a parallelogram with base 12 cm and height 7 cm?',
        options: [
            '84 cm²',
            '19 cm²',
            '42 cm²',
            '24 cm²'
        ],
        correctAnswer: '84 cm²',
        explanation: 'Area = base × height = 12 × 7 = 84 cm².',
        wrongAnswerExplanations: {
            '19 cm²': 'Multiply base and height.',
            '42 cm²': 'Check the multiplication.',
            '24 cm²': 'Check the multiplication.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch9_t2_qe19',
        type: 'mcq',
        question: 'Which of the following is a composite figure?',
        options: [
            'A rectangle with a semicircular end',
            'A square',
            'A triangle',
            'A regular pentagon'
        ],
        correctAnswer: 'A rectangle with a semicircular end',
        explanation: 'Composite figures are made by combining basic shapes. 🧩',
        wrongAnswerExplanations: {
            'A square': 'A square is a basic shape.',
            'A triangle': 'A triangle is a basic shape.',
            'A regular pentagon': 'A regular pentagon is a basic shape.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch9_t2_qe20',
        type: 'mcq',
        question: 'What is the area of a trapezium with parallel sides 18 cm and 10 cm, and height 6 cm?',
        options: [
            '84 cm²',
            '56 cm²',
            '48 cm²',
            '72 cm²'
        ],
        correctAnswer: '84 cm²',
        explanation: 'Area = ½ × (18 + 10) × 6 = 84 cm².',
        wrongAnswerExplanations: {
            '56 cm²': 'Check the sum and multiplication.',
            '48 cm²': 'Check the calculation.',
            '72 cm²': 'Check the calculation.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    }
]; 