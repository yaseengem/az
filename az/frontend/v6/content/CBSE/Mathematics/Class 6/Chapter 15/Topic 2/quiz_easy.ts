import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl6_ch15_t2_e1',
        type: 'mcq',
        question: 'How many lines of symmetry does a square have?',
        options: ['2', '4', '6', '8'],
        correctAnswer: '4',
        explanation: 'A square has 4 lines of symmetry: two diagonals and two lines through the midpoints of opposite sides.',
        wrongAnswerExplanations: {
            '2': 'A square has more than 2 lines of symmetry.',
            '6': 'A square does not have 6 lines of symmetry.',
            '8': 'A square does not have 8 lines of symmetry.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch15_t2_e2',
        type: 'mcq',
        question: 'What is the order of rotational symmetry for a regular pentagon?',
        options: ['3', '4', '5', '6'],
        correctAnswer: '5',
        explanation: 'A regular pentagon has rotational symmetry of order 5, meaning it looks the same after rotations of 72°, 144°, 216°, and 288°.',
        wrongAnswerExplanations: {
            '3': 'A regular pentagon has more than 3-fold rotational symmetry.',
            '4': 'A regular pentagon has more than 4-fold rotational symmetry.',
            '6': 'A regular pentagon has less than 6-fold rotational symmetry.'
        },
        difficulty: 'easy',
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch15_t2_qe3',
        type: "mcq",
        question: "Which shape has rotational symmetry of order 3?",
        options: ["Equilateral triangle", "Square", "Rectangle", "Circle"],
        correctAnswer: "Equilateral triangle",
        explanation: "An equilateral triangle looks the same after 120° turns (360° ÷ 3 = 120°). 🔄",
        wrongAnswerExplanations: {
            "Square": "A square has rotational symmetry of order 4.",
            "Rectangle": "A rectangle has rotational symmetry of order 2.",
            "Circle": "A circle has infinite rotational symmetry."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch15_t2_qe4',
        type: "mcq",
        question: "What is the next shape in this growing pattern?\n△\n△△\n△△△\n?",
        options: ["△△△△", "△△△△△", "△△△△△△", "△△△△△△△"],
        correctAnswer: "△△△△",
        explanation: "The pattern adds one triangle to each row. The next row should have 4 triangles. 📈",
        wrongAnswerExplanations: {
            "△△△△△": "This would add 2 triangles instead of 1.",
            "△△△△△△": "This would add 3 triangles instead of 1.",
            "△△△△△△△": "This would add 4 triangles instead of 1."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch15_t2_qe5',
        type: "mcq",
        question: "If you fold a shape along its line of symmetry, what happens?",
        options: [
            "The two halves match exactly",
            "The shape becomes smaller",
            "The shape becomes larger",
            "The shape changes color"
        ],
        correctAnswer: "The two halves match exactly",
        explanation: "A line of symmetry means the shape can be folded so that both halves match perfectly. ✨",
        wrongAnswerExplanations: {
            "The shape becomes smaller": "Folding doesn't change the size of the shape.",
            "The shape becomes larger": "Folding doesn't change the size of the shape.",
            "The shape changes color": "Folding doesn't change the color of the shape."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch15_t2_qe6',
        type: "mcq",
        question: "What is the next shape in this pattern: ○, ○○, ○○○, ?",
        options: ["○○○○", "○○○○○", "○○○○○○", "○○○○○○○"],
        correctAnswer: "○○○○",
        explanation: "The pattern adds one circle to each step. The next step should have 4 circles. 🔄",
        wrongAnswerExplanations: {
            "○○○○○": "This would add 2 circles instead of 1.",
            "○○○○○○": "This would add 3 circles instead of 1.",
            "○○○○○○○": "This would add 4 circles instead of 1."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch15_t2_qe7',
        type: "mcq",
        question: "How many lines of symmetry does a regular pentagon have?",
        options: ["3", "4", "5", "6"],
        correctAnswer: "5",
        explanation: "A regular pentagon has 5 lines of symmetry, one from each vertex to the midpoint of the opposite side. ✨",
        wrongAnswerExplanations: {
            "3": "A regular pentagon has more than 3 lines of symmetry.",
            "4": "A regular pentagon has an odd number of lines of symmetry.",
            "6": "A regular pentagon has exactly 5 lines of symmetry."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch15_t2_qe8',
        type: "mcq",
        question: "What comes next in this pattern: □, □□, □□□, ?",
        options: ["□□□□", "□□□□□", "□□□□□□", "□□□□□□□"],
        correctAnswer: "□□□□",
        explanation: "The pattern adds one square to each step. The next step should have 4 squares. 🔄",
        wrongAnswerExplanations: {
            "□□□□□": "This would add 2 squares instead of 1.",
            "□□□□□□": "This would add 3 squares instead of 1.",
            "□□□□□□□": "This would add 4 squares instead of 1."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch15_t2_qe9',
        type: "mcq",
        question: "If you rotate a square 90° clockwise, what happens?",
        options: [
            "It looks the same",
            "It becomes a rectangle",
            "It becomes a triangle",
            "It disappears"
        ],
        correctAnswer: "It looks the same",
        explanation: "A square has rotational symmetry of order 4, so it looks the same after 90° turns. 🔄",
        wrongAnswerExplanations: {
            "It becomes a rectangle": "Rotation doesn't change the shape of a square.",
            "It becomes a triangle": "Rotation doesn't change the shape of a square.",
            "It disappears": "Rotation doesn't make shapes disappear."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch15_t2_qe10',
        type: "mcq",
        question: "What is the next shape in this pattern: △, △△, △△△, ?",
        options: ["△△△△", "△△△△△", "△△△△△△", "△△△△△△△"],
        correctAnswer: "△△△△",
        explanation: "The pattern adds one triangle to each step. The next step should have 4 triangles. 🔄",
        wrongAnswerExplanations: {
            "△△△△△": "This would add 2 triangles instead of 1.",
            "△△△△△△": "This would add 3 triangles instead of 1.",
            "△△△△△△△": "This would add 4 triangles instead of 1."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch15_t2_qe11',
        type: "mcq",
        question: "How many lines of symmetry does a rectangle have?",
        options: ["1", "2", "3", "4"],
        correctAnswer: "2",
        explanation: "A rectangle has 2 lines of symmetry: one horizontal and one vertical through the center. ✨",
        wrongAnswerExplanations: {
            "1": "A rectangle has more than 1 line of symmetry.",
            "3": "A rectangle has exactly 2 lines of symmetry.",
            "4": "A rectangle has fewer than 4 lines of symmetry."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch15_t2_qe12',
        type: "mcq",
        question: "What comes next in this pattern: ○, △, □, ○, △, ?",
        options: ["○", "△", "□", "◇"],
        correctAnswer: "□",
        explanation: "The pattern repeats: circle, triangle, square. The next shape is □. 🔄",
        wrongAnswerExplanations: {
            "○": "This would break the repeating pattern.",
            "△": "This would break the repeating pattern.",
            "◇": "This shape is not part of the pattern."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch15_t2_qe13',
        type: "mcq",
        question: "Which shape has the most lines of symmetry?",
        options: ["Circle", "Square", "Triangle", "Rectangle"],
        correctAnswer: "Circle",
        explanation: "A circle has infinite lines of symmetry, as it looks the same from any angle. ✨",
        wrongAnswerExplanations: {
            "Square": "A square has 4 lines of symmetry, fewer than a circle.",
            "Triangle": "A triangle has 3 lines of symmetry, fewer than a circle.",
            "Rectangle": "A rectangle has 2 lines of symmetry, fewer than a circle."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch15_t2_qe14',
        type: "mcq",
        question: "What is the next shape in this pattern: □, □□, □□□, ?",
        options: ["□□□□", "□□□□□", "□□□□□□", "□□□□□□□"],
        correctAnswer: "□□□□",
        explanation: "The pattern adds one square to each step. The next step should have 4 squares. 🔄",
        wrongAnswerExplanations: {
            "□□□□□": "This would add 2 squares instead of 1.",
            "□□□□□□": "This would add 3 squares instead of 1.",
            "□□□□□□□": "This would add 4 squares instead of 1."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch15_t2_qe15',
        type: "mcq",
        question: "If you fold a shape and the two halves don't match, what does this mean?",
        options: [
            "The fold is not a line of symmetry",
            "The shape is not real",
            "The shape is too small",
            "The shape is too large"
        ],
        correctAnswer: "The fold is not a line of symmetry",
        explanation: "If the halves don't match when folded, the line is not a line of symmetry. ✨",
        wrongAnswerExplanations: {
            "The shape is not real": "The shape is real, it just doesn't have symmetry along that line.",
            "The shape is too small": "Size doesn't affect symmetry.",
            "The shape is too large": "Size doesn't affect symmetry."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch15_t2_qe16',
        type: "mcq",
        question: "What comes next in this pattern: △, △△, △△△, ?",
        options: ["△△△△", "△△△△△", "△△△△△△", "△△△△△△△"],
        correctAnswer: "△△△△",
        explanation: "The pattern adds one triangle to each step. The next step should have 4 triangles. 🔄",
        wrongAnswerExplanations: {
            "△△△△△": "This would add 2 triangles instead of 1.",
            "△△△△△△": "This would add 3 triangles instead of 1.",
            "△△△△△△△": "This would add 4 triangles instead of 1."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch15_t2_qe17',
        type: "mcq",
        question: "How many lines of symmetry does an equilateral triangle have?",
        options: ["1", "2", "3", "4"],
        correctAnswer: "3",
        explanation: "An equilateral triangle has 3 lines of symmetry, one from each vertex to the midpoint of the opposite side. ✨",
        wrongAnswerExplanations: {
            "1": "An equilateral triangle has more than 1 line of symmetry.",
            "2": "An equilateral triangle has an odd number of lines of symmetry.",
            "4": "An equilateral triangle has exactly 3 lines of symmetry."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch15_t2_qe18',
        type: "mcq",
        question: "What is the next shape in this pattern: ○, ○○, ○○○, ?",
        options: ["○○○○", "○○○○○", "○○○○○○", "○○○○○○○"],
        correctAnswer: "○○○○",
        explanation: "The pattern adds one circle to each step. The next step should have 4 circles. 🔄",
        wrongAnswerExplanations: {
            "○○○○○": "This would add 2 circles instead of 1.",
            "○○○○○○": "This would add 3 circles instead of 1.",
            "○○○○○○○": "This would add 4 circles instead of 1."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch15_t2_qe19',
        type: "mcq",
        question: "If you rotate a shape 360°, what happens?",
        options: [
            "It looks exactly the same",
            "It becomes a different shape",
            "It disappears",
            "It changes color"
        ],
        correctAnswer: "It looks exactly the same",
        explanation: "A 360° rotation brings any shape back to its original position. 🔄",
        wrongAnswerExplanations: {
            "It becomes a different shape": "Rotation doesn't change the shape.",
            "It disappears": "Rotation doesn't make shapes disappear.",
            "It changes color": "Rotation doesn't change the color of shapes."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch15_t2_qe20',
        type: "mcq",
        question: "What comes next in this pattern: □, □□, □□□, ?",
        options: ["□□□□", "□□□□□", "□□□□□□", "□□□□□□□"],
        correctAnswer: "□□□□",
        explanation: "The pattern adds one square to each step. The next step should have 4 squares. 🔄",
        wrongAnswerExplanations: {
            "□□□□□": "This would add 2 squares instead of 1.",
            "□□□□□□": "This would add 3 squares instead of 1.",
            "□□□□□□□": "This would add 4 squares instead of 1."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    }
]; 