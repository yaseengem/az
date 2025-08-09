import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl8_ch9_t2_qm1',
        type: 'mcq',
        question: 'A trapezium has parallel sides of 14 cm and 8 cm, and height 9 cm. What is its area?',
        options: [
            '99 cm²',
            '110 cm²',
            '72 cm²',
            '45 cm²'
        ],
        correctAnswer: '99 cm²',
        explanation: 'Area = ½ × (14 + 8) × 9 = 99 cm².',
        wrongAnswerExplanations: {
            '110 cm²': 'Check the multiplication and division by 2.',
            '72 cm²': 'Check the sum of the parallel sides.',
            '45 cm²': 'Check the calculation.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch9_t2_qm2',
        type: 'mcq',
        question: 'The diagonals of a rhombus are 18 cm and 24 cm. Find its area.',
        options: [
            '216 cm²',
            '432 cm²',
            '108 cm²',
            '72 cm²'
        ],
        correctAnswer: '216 cm²',
        explanation: 'Area = ½ × 18 × 24 = 216 cm². 💎',
        wrongAnswerExplanations: {
            '432 cm²': 'Remember to multiply by ½.',
            '108 cm²': 'Check the multiplication.',
            '72 cm²': 'Check the multiplication.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch9_t2_qm3',
        type: 'mcq',
        question: 'A regular pentagon has a perimeter of 40 cm and apothem 5 cm. What is its area?',
        options: [
            '100 cm²',
            '200 cm²',
            '80 cm²',
            '50 cm²'
        ],
        correctAnswer: '100 cm²',
        explanation: 'Area = (Perimeter × Apothem) ÷ 2 = (40 × 5) ÷ 2 = 100 cm².',
        wrongAnswerExplanations: {
            '200 cm²': 'Check the division by 2.',
            '80 cm²': 'Check the multiplication.',
            '50 cm²': 'Check the multiplication and division.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch9_t2_qm4',
        type: 'mcq',
        question: 'A parallelogram has a base of 15 cm and height 8 cm. What is its area?',
        options: [
            '120 cm²',
            '60 cm²',
            '23 cm²',
            '100 cm²'
        ],
        correctAnswer: '120 cm²',
        explanation: 'Area = base × height = 15 × 8 = 120 cm².',
        wrongAnswerExplanations: {
            '60 cm²': 'Multiply base and height.',
            '23 cm²': 'Check the multiplication.',
            '100 cm²': 'Check the multiplication.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch9_t2_qm5',
        type: 'mcq',
        question: 'A regular hexagon has a perimeter of 36 cm and apothem 5 cm. What is its area?',
        options: [
            '90 cm²',
            '180 cm²',
            '60 cm²',
            '30 cm²'
        ],
        correctAnswer: '90 cm²',
        explanation: 'Area = (36 × 5) ÷ 2 = 90 cm².',
        wrongAnswerExplanations: {
            '180 cm²': 'Check the division by 2.',
            '60 cm²': 'Check the multiplication.',
            '30 cm²': 'Check the multiplication.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch9_t2_qm6',
        type: 'mcq',
        question: 'A trapezium has parallel sides 20 m and 12 m, and height 7 m. Find its area.',
        options: [
            '112 m²',
            '224 m²',
            '84 m²',
            '56 m²'
        ],
        correctAnswer: '112 m²',
        explanation: 'Area = ½ × (20 + 12) × 7 = 112 m².',
        wrongAnswerExplanations: {
            '224 m²': 'Remember to multiply by ½.',
            '84 m²': 'Check the sum and multiplication.',
            '56 m²': 'Check the calculation.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch9_t2_qm7',
        type: 'mcq',
        question: 'Which of the following is true for a parallelogram?',
        options: [
            'Opposite sides are equal and parallel',
            'All sides are equal',
            'Only one pair of sides is parallel',
            'No sides are parallel'
        ],
        correctAnswer: 'Opposite sides are equal and parallel',
        explanation: 'A parallelogram has both pairs of opposite sides equal and parallel. 🔷',
        wrongAnswerExplanations: {
            'All sides are equal': 'This is true for a rhombus.',
            'Only one pair of sides is parallel': 'This is true for a trapezium.',
            'No sides are parallel': 'This is not true for parallelograms.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch9_t2_qm8',
        type: 'mcq',
        question: 'A composite figure is made of a rectangle (10 cm × 4 cm) and a semicircle of radius 2 cm. What is the total area? (Use π ≈ 3.14)',
        options: [
            '48.28 cm²',
            '40 cm²',
            '56.56 cm²',
            '44.28 cm²'
        ],
        correctAnswer: '48.28 cm²',
        explanation: 'Area = 40 + (½ × 3.14 × 2²) = 40 + 6.28 = 48.28 cm².',
        wrongAnswerExplanations: {
            '40 cm²': 'Add the area of the semicircle.',
            '56.56 cm²': 'Check the calculation for the semicircle.',
            '44.28 cm²': 'Check the calculation.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl8_ch9_t2_qm9',
        type: 'mcq',
        question: 'A regular octagon has a perimeter of 64 cm and apothem 7 cm. What is its area?',
        options: [
            '224 cm²',
            '448 cm²',
            '128 cm²',
            '32 cm²'
        ],
        correctAnswer: '224 cm²',
        explanation: 'Area = (64 × 7) ÷ 2 = 224 cm².',
        wrongAnswerExplanations: {
            '448 cm²': 'Remember to divide by 2.',
            '128 cm²': 'Check the multiplication.',
            '32 cm²': 'Check the multiplication.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch9_t2_qm10',
        type: 'mcq',
        question: 'A parallelogram has a base of 18 cm and height 11 cm. What is its area?',
        options: [
            '198 cm²',
            '99 cm²',
            '88 cm²',
            '144 cm²'
        ],
        correctAnswer: '198 cm²',
        explanation: 'Area = base × height = 18 × 11 = 198 cm².',
        wrongAnswerExplanations: {
            '99 cm²': 'Multiply base and height.',
            '88 cm²': 'Check the multiplication.',
            '144 cm²': 'Check the multiplication.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch9_t2_qm11',
        type: 'mcq',
        question: 'A trapezium has parallel sides 25 m and 15 m, and height 10 m. Find its area.',
        options: [
            '200 m²',
            '250 m²',
            '150 m²',
            '100 m²'
        ],
        correctAnswer: '200 m²',
        explanation: 'Area = ½ × (25 + 15) × 10 = 200 m².',
        wrongAnswerExplanations: {
            '250 m²': 'Check the sum and multiplication.',
            '150 m²': 'Check the calculation.',
            '100 m²': 'Check the calculation.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch9_t2_qm12',
        type: 'mcq',
        question: 'A rhombus has diagonals 20 cm and 15 cm. What is its area?',
        options: [
            '150 cm²',
            '300 cm²',
            '100 cm²',
            '75 cm²'
        ],
        correctAnswer: '150 cm²',
        explanation: 'Area = ½ × 20 × 15 = 150 cm².',
        wrongAnswerExplanations: {
            '300 cm²': 'Remember to multiply by ½.',
            '100 cm²': 'Check the multiplication.',
            '75 cm²': 'Check the multiplication.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch9_t2_qm13',
        type: 'mcq',
        question: 'A regular polygon has a perimeter of 48 cm and apothem 6 cm. What is its area?',
        options: [
            '144 cm²',
            '288 cm²',
            '96 cm²',
            '24 cm²'
        ],
        correctAnswer: '144 cm²',
        explanation: 'Area = (48 × 6) ÷ 2 = 144 cm².',
        wrongAnswerExplanations: {
            '288 cm²': 'Remember to divide by 2.',
            '96 cm²': 'Check the multiplication.',
            '24 cm²': 'Check the multiplication.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch9_t2_qm14',
        type: 'mcq',
        question: 'A parallelogram has a base of 22 cm and height 9 cm. What is its area?',
        options: [
            '198 cm²',
            '99 cm²',
            '88 cm²',
            '144 cm²'
        ],
        correctAnswer: '198 cm²',
        explanation: 'Area = base × height = 22 × 9 = 198 cm².',
        wrongAnswerExplanations: {
            '99 cm²': 'Multiply base and height.',
            '88 cm²': 'Check the multiplication.',
            '144 cm²': 'Check the multiplication.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch9_t2_qm15',
        type: 'mcq',
        question: 'A composite figure is made of a square (side 6 cm) and a triangle (base 6 cm, height 4 cm). What is the total area?',
        options: [
            '42 cm²',
            '36 cm²',
            '24 cm²',
            '18 cm²'
        ],
        correctAnswer: '42 cm²',
        explanation: 'Area = 36 + (½ × 6 × 4) = 36 + 12 = 42 cm².',
        wrongAnswerExplanations: {
            '36 cm²': 'Add the area of the triangle.',
            '24 cm²': 'Check the calculation.',
            '18 cm²': 'Check the calculation.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl8_ch9_t2_qm16',
        type: 'mcq',
        question: 'A regular polygon has 12 sides, perimeter 60 cm, and apothem 8 cm. What is its area?',
        options: [
            '240 cm²',
            '480 cm²',
            '120 cm²',
            '60 cm²'
        ],
        correctAnswer: '240 cm²',
        explanation: 'Area = (60 × 8) ÷ 2 = 240 cm².',
        wrongAnswerExplanations: {
            '480 cm²': 'Remember to divide by 2.',
            '120 cm²': 'Check the multiplication.',
            '60 cm²': 'Check the multiplication.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch9_t2_qm17',
        type: 'mcq',
        question: 'A parallelogram has a base of 25 cm and height 12 cm. What is its area?',
        options: [
            '300 cm²',
            '150 cm²',
            '200 cm²',
            '100 cm²'
        ],
        correctAnswer: '300 cm²',
        explanation: 'Area = base × height = 25 × 12 = 300 cm².',
        wrongAnswerExplanations: {
            '150 cm²': 'Multiply base and height.',
            '200 cm²': 'Check the multiplication.',
            '100 cm²': 'Check the multiplication.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch9_t2_qm18',
        type: 'mcq',
        question: 'A trapezium has parallel sides 30 cm and 18 cm, and height 10 cm. Find its area.',
        options: [
            '240 cm²',
            '480 cm²',
            '120 cm²',
            '60 cm²'
        ],
        correctAnswer: '240 cm²',
        explanation: 'Area = ½ × (30 + 18) × 10 = 240 cm².',
        wrongAnswerExplanations: {
            '480 cm²': 'Remember to multiply by ½.',
            '120 cm²': 'Check the sum and multiplication.',
            '60 cm²': 'Check the calculation.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch9_t2_qm19',
        type: 'mcq',
        question: 'A regular polygon has a perimeter of 72 cm and apothem 9 cm. What is its area?',
        options: [
            '324 cm²',
            '648 cm²',
            '162 cm²',
            '81 cm²'
        ],
        correctAnswer: '324 cm²',
        explanation: 'Area = (72 × 9) ÷ 2 = 324 cm².',
        wrongAnswerExplanations: {
            '648 cm²': 'Remember to divide by 2.',
            '162 cm²': 'Check the multiplication.',
            '81 cm²': 'Check the multiplication.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch9_t2_qm20',
        type: 'mcq',
        question: 'A rhombus has diagonals 28 cm and 16 cm. What is its area?',
        options: [
            '224 cm²',
            '448 cm²',
            '112 cm²',
            '56 cm²'
        ],
        correctAnswer: '224 cm²',
        explanation: 'Area = ½ × 28 × 16 = 224 cm².',
        wrongAnswerExplanations: {
            '448 cm²': 'Remember to multiply by ½.',
            '112 cm²': 'Check the multiplication.',
            '56 cm²': 'Check the multiplication.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    }
]; 