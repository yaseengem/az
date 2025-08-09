import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl6_ch15_t2_m1',
        type: 'mcq',
        question: 'What is the next shape in this pattern: triangle, square, pentagon, hexagon, ?',
        options: ['Heptagon', 'Octagon', 'Nonagon', 'Decagon'],
        correctAnswer: 'Heptagon',
        explanation: 'The pattern increases the number of sides by 1 each time. After hexagon (6 sides), the next shape is heptagon (7 sides).',
        wrongAnswerExplanations: {
            'Octagon': 'This would be 8 sides, skipping 7 sides.',
            'Nonagon': 'This would be 9 sides, skipping 7 and 8 sides.',
            'Decagon': 'This would be 10 sides, skipping several numbers.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch15_t2_m2',
        type: 'mcq',
        question: 'If a shape has rotational symmetry of order 4, what is the smallest angle of rotation that maps the shape onto itself?',
        options: ['45°', '60°', '90°', '120°'],
        correctAnswer: '90°',
        explanation: 'For order 4 rotational symmetry, the shape looks the same after rotations of 90°, 180°, and 270°. The smallest angle is 90°.',
        wrongAnswerExplanations: {
            '45°': 'This would give order 8 rotational symmetry.',
            '60°': 'This would give order 6 rotational symmetry.',
            '120°': 'This would give order 3 rotational symmetry.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch15_t2_qm3',
        type: "mcq",
        question: "What is the next shape in this pattern?\n○\n○△○\n○△○△○\n○△○△○△○\n?",
        options: ["○△○△○△○△○", "○△○△○△○△○△○", "○△○△○△○△○△○△○", "○△○△○△○△○△○△○△○"],
        correctAnswer: "○△○△○△○△○",
        explanation: "The pattern adds one circle and one triangle to each row. The next row should have 9 shapes. 🔄",
        wrongAnswerExplanations: {
            "○△○△○△○△○△○": "This would add 2 extra shapes instead of 1.",
            "○△○△○△○△○△○△○": "This would add 4 extra shapes instead of 1.",
            "○△○△○△○△○△○△○△○": "This would add 6 extra shapes instead of 1."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch15_t2_qm4',
        type: "mcq",
        question: "If you rotate a regular hexagon 60° clockwise, what happens?",
        options: [
            "It looks exactly the same",
            "It becomes a different shape",
            "It becomes a pentagon",
            "It disappears"
        ],
        correctAnswer: "It looks exactly the same",
        explanation: "A regular hexagon has rotational symmetry of order 6, so it looks the same after 60° turns. 🔄",
        wrongAnswerExplanations: {
            "It becomes a different shape": "Rotation doesn't change the shape of a regular hexagon.",
            "It becomes a pentagon": "Rotation doesn't change the number of sides.",
            "It disappears": "Rotation doesn't make shapes disappear."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch15_t2_qm5',
        type: "mcq",
        question: "What is the next shape in this pattern?\n□\n□△□\n□△□△□\n□△□△□△□\n?",
        options: ["□△□△□△□△□", "□△□△□△□△□△□", "□△□△□△□△□△□△□△", "□△□△□△□△□△□△□△□"],
        correctAnswer: "□△□△□△□△□",
        explanation: "The pattern adds one square and one triangle to each row. The next row should have 9 shapes. 🔄",
        wrongAnswerExplanations: {
            "□△□△□△□△□△□": "This would add 2 extra shapes instead of 1.",
            "□△□△□△□△□△□△□": "This would add 4 extra shapes instead of 1.",
            "□△□△□△□△□△□△□△□": "This would add 6 extra shapes instead of 1."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch15_t2_qm6',
        type: "mcq",
        question: "Which shape has the most lines of symmetry among these options?",
        options: ["Regular octagon", "Regular pentagon", "Regular hexagon", "Regular heptagon"],
        correctAnswer: "Regular octagon",
        explanation: "A regular octagon has 8 lines of symmetry, more than the other options. ✨",
        wrongAnswerExplanations: {
            "Regular pentagon": "A regular pentagon has 5 lines of symmetry, fewer than an octagon.",
            "Regular hexagon": "A regular hexagon has 6 lines of symmetry, fewer than an octagon.",
            "Regular heptagon": "A regular heptagon has 7 lines of symmetry, fewer than an octagon."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch15_t2_qm7',
        type: "mcq",
        question: "What is the next shape in this pattern?\n△\n△□△\n△□△□△\n△□△□△□△\n?",
        options: ["△□△□△□△□△", "△□△□△□△□△□△", "△□△□△□△□△□△□△", "△□△□△□△□△□△□△□△"],
        correctAnswer: "△□△□△□△□△",
        explanation: "The pattern adds one triangle and one square to each row. The next row should have 9 shapes. 🔄",
        wrongAnswerExplanations: {
            "△□△□△□△□△□△": "This would add 2 extra shapes instead of 1.",
            "△□△□△□△□△□△□△": "This would add 4 extra shapes instead of 1.",
            "△□△□△□△□△□△□△□△": "This would add 6 extra shapes instead of 1."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch15_t2_qm8',
        type: "mcq",
        question: "If you rotate a regular pentagon 72° clockwise, what happens?",
        options: [
            "It looks exactly the same",
            "It becomes a different shape",
            "It becomes a hexagon",
            "It disappears"
        ],
        correctAnswer: "It looks exactly the same",
        explanation: "A regular pentagon has rotational symmetry of order 5, so it looks the same after 72° turns. 🔄",
        wrongAnswerExplanations: {
            "It becomes a different shape": "Rotation doesn't change the shape of a regular pentagon.",
            "It becomes a hexagon": "Rotation doesn't change the number of sides.",
            "It disappears": "Rotation doesn't make shapes disappear."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch15_t2_qm9',
        type: "mcq",
        question: "What is the next shape in this pattern?\n○\n○□○\n○□○□○\n○□○□○□○\n?",
        options: ["○□○□○□○□○", "○□○□○□○□○□○", "○□○□○□○□○□○□○", "○□○□○□○□○□○□○□○"],
        correctAnswer: "○□○□○□○□○",
        explanation: "The pattern adds one circle and one square to each row. The next row should have 9 shapes. 🔄",
        wrongAnswerExplanations: {
            "○□○□○□○□○□○": "This would add 2 extra shapes instead of 1.",
            "○□○□○□○□○□○□○": "This would add 4 extra shapes instead of 1.",
            "○□○□○□○□○□○□○□○": "This would add 6 extra shapes instead of 1."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch15_t2_qm10',
        type: "mcq",
        question: "Which shape has both line symmetry and rotational symmetry of order 3?",
        options: ["Equilateral triangle", "Isosceles triangle", "Scalene triangle", "Right triangle"],
        correctAnswer: "Equilateral triangle",
        explanation: "An equilateral triangle has 3 lines of symmetry and looks the same after 120° turns. ✨",
        wrongAnswerExplanations: {
            "Isosceles triangle": "An isosceles triangle has only 1 line of symmetry.",
            "Scalene triangle": "A scalene triangle has no lines of symmetry.",
            "Right triangle": "A right triangle has no rotational symmetry."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch15_t2_qm11',
        type: "mcq",
        question: "What is the next shape in this pattern?\n△\n△○△\n△○△○△\n△○△○△○△\n?",
        options: ["△○△○△○△○△", "△○△○△○△○△○△", "△○△○△○△○△○△○△", "△○△○△○△○△○△○△○△"],
        correctAnswer: "△○△○△○△○△",
        explanation: "The pattern adds one triangle and one circle to each row. The next row should have 9 shapes. 🔄",
        wrongAnswerExplanations: {
            "△○△○△○△○△○△": "This would add 2 extra shapes instead of 1.",
            "△○△○△○△○△○△○△": "This would add 4 extra shapes instead of 1.",
            "△○△○△○△○△○△○△○△": "This would add 6 extra shapes instead of 1."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch15_t2_qm12',
        type: "mcq",
        question: "If you rotate a regular hexagon 120° clockwise, what happens?",
        options: [
            "It looks exactly the same",
            "It becomes a different shape",
            "It becomes a pentagon",
            "It disappears"
        ],
        correctAnswer: "It looks exactly the same",
        explanation: "A regular hexagon has rotational symmetry of order 6, so it looks the same after 120° turns. 🔄",
        wrongAnswerExplanations: {
            "It becomes a different shape": "Rotation doesn't change the shape of a regular hexagon.",
            "It becomes a pentagon": "Rotation doesn't change the number of sides.",
            "It disappears": "Rotation doesn't make shapes disappear."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch15_t2_qm13',
        type: "mcq",
        question: "What is the next shape in this pattern?\n□\n□○□\n□○□○□\n□○□○□○□\n?",
        options: ["□○□○□○□○□", "□○□○□○□○□○□", "□○□○□○□○□○□○□", "□○□○□○□○□○□○□○□"],
        correctAnswer: "□○□○□○□○□",
        explanation: "The pattern adds one square and one circle to each row. The next row should have 9 shapes. 🔄",
        wrongAnswerExplanations: {
            "□○□○□○□○□○□": "This would add 2 extra shapes instead of 1.",
            "□○□○□○□○□○□○□": "This would add 4 extra shapes instead of 1.",
            "□○□○□○□○□○□○□○□": "This would add 6 extra shapes instead of 1."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch15_t2_qm14',
        type: "mcq",
        question: "Which shape has both line symmetry and rotational symmetry of order 2?",
        options: ["Rectangle", "Square", "Rhombus", "Parallelogram"],
        correctAnswer: "Rectangle",
        explanation: "A rectangle has 2 lines of symmetry and looks the same after 180° turns. ✨",
        wrongAnswerExplanations: {
            "Square": "A square has rotational symmetry of order 4.",
            "Rhombus": "A rhombus has rotational symmetry of order 2 but more than 2 lines of symmetry.",
            "Parallelogram": "A parallelogram has no lines of symmetry."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch15_t2_qm15',
        type: "mcq",
        question: "What is the next shape in this pattern?\n○\n○△○\n○△○△○\n○△○△○△○\n?",
        options: ["○△○△○△○△○", "○△○△○△○△○△○", "○△○△○△○△○△○△○", "○△○△○△○△○△○△○△○"],
        correctAnswer: "○△○△○△○△○",
        explanation: "The pattern adds one circle and one triangle to each row. The next row should have 9 shapes. 🔄",
        wrongAnswerExplanations: {
            "○△○△○△○△○△○": "This would add 2 extra shapes instead of 1.",
            "○△○△○△○△○△○△○": "This would add 4 extra shapes instead of 1.",
            "○△○△○△○△○△○△○△○": "This would add 6 extra shapes instead of 1."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch15_t2_qm16',
        type: "mcq",
        question: "If you rotate a regular pentagon 144° clockwise, what happens?",
        options: [
            "It looks exactly the same",
            "It becomes a different shape",
            "It becomes a hexagon",
            "It disappears"
        ],
        correctAnswer: "It looks exactly the same",
        explanation: "A regular pentagon has rotational symmetry of order 5, so it looks the same after 144° turns. 🔄",
        wrongAnswerExplanations: {
            "It becomes a different shape": "Rotation doesn't change the shape of a regular pentagon.",
            "It becomes a hexagon": "Rotation doesn't change the number of sides.",
            "It disappears": "Rotation doesn't make shapes disappear."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch15_t2_qm17',
        type: "mcq",
        question: "What is the next shape in this pattern?\n△\n△□△\n△□△□△\n△□△□△□△\n?",
        options: ["△□△□△□△□△", "△□△□△□△□△□△", "△□△□△□△□△□△□△", "△□△□△□△□△□△□△□△"],
        correctAnswer: "△□△□△□△□△",
        explanation: "The pattern adds one triangle and one square to each row. The next row should have 9 shapes. 🔄",
        wrongAnswerExplanations: {
            "△□△□△□△□△□△": "This would add 2 extra shapes instead of 1.",
            "△□△□△□△□△□△□△": "This would add 4 extra shapes instead of 1.",
            "△□△□△□△□△□△□△□△": "This would add 6 extra shapes instead of 1."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch15_t2_qm18',
        type: "mcq",
        question: "Which shape has both line symmetry and rotational symmetry of order 6?",
        options: ["Regular hexagon", "Regular pentagon", "Regular octagon", "Regular heptagon"],
        correctAnswer: "Regular hexagon",
        explanation: "A regular hexagon has 6 lines of symmetry and looks the same after 60° turns. ✨",
        wrongAnswerExplanations: {
            "Regular pentagon": "A regular pentagon has rotational symmetry of order 5.",
            "Regular octagon": "A regular octagon has rotational symmetry of order 8.",
            "Regular heptagon": "A regular heptagon has rotational symmetry of order 7."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch15_t2_qm19',
        type: "mcq",
        question: "What is the next shape in this pattern?\n○\n○□○\n○□○□○\n○□○□○□○\n?",
        options: ["○□○□○□○□○", "○□○□○□○□○□○", "○□○□○□○□○□○□○", "○□○□○□○□○□○□○□○"],
        correctAnswer: "○□○□○□○□○",
        explanation: "The pattern adds one circle and one square to each row. The next row should have 9 shapes. 🔄",
        wrongAnswerExplanations: {
            "○□○□○□○□○□○": "This would add 2 extra shapes instead of 1.",
            "○□○□○□○□○□○□○": "This would add 4 extra shapes instead of 1.",
            "○□○□○□○□○□○□○□○": "This would add 6 extra shapes instead of 1."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch15_t2_qm20',
        type: "mcq",
        question: "If you rotate a regular octagon 45° clockwise, what happens?",
        options: [
            "It looks exactly the same",
            "It becomes a different shape",
            "It becomes a heptagon",
            "It disappears"
        ],
        correctAnswer: "It looks exactly the same",
        explanation: "A regular octagon has rotational symmetry of order 8, so it looks the same after 45° turns. 🔄",
        wrongAnswerExplanations: {
            "It becomes a different shape": "Rotation doesn't change the shape of a regular octagon.",
            "It becomes a heptagon": "Rotation doesn't change the number of sides.",
            "It disappears": "Rotation doesn't make shapes disappear."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    }
]; 