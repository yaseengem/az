import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl5_ch7_t2_qm1',
        type: "mcq",
        question: "What shape comes next in this growing pattern? △ △△ △△△ △△△△ __",
        options: ["△△△△△", "△△△△", "△△△", "△△"],
        correctAnswer: "△△△△△",
        explanation: "The pattern grows by adding one triangle each time. After 4 triangles, the next should have 5 triangles. 📈",
        wrongAnswerExplanations: {
            "△△△△": "This would repeat the previous pattern, but the pattern is growing.",
            "△△△": "This would go backwards in the pattern.",
            "△△": "This would go back too far in the pattern."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch7_t2_qm2',
        type: "mcq",
        question: "What shape comes next in this pattern? □ △ □ △△ □ △△△ __",
        options: ["□", "△", "△△△△", "△△"],
        correctAnswer: "△△△△",
        explanation: "The pattern alternates between square and growing triangles. After □ comes △△△△. 🔄",
        wrongAnswerExplanations: {
            "□": "This would be the next square, but we need the next triangle pattern.",
            "△": "This would be too small for the growing triangle pattern.",
            "△△": "This would be smaller than the previous triangle pattern."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch7_t2_qm3',
        type: "mcq",
        question: "What shape comes next in this pattern? ○ □ ○ □□ ○ □□□ __",
        options: ["○", "□", "□□□□", "□□□"],
        correctAnswer: "□□□□",
        explanation: "The pattern alternates between circle and growing squares. After ○ comes □□□□. 🔄",
        wrongAnswerExplanations: {
            "○": "This would be the next circle, but we need the next square pattern.",
            "□": "This would be too small for the growing square pattern.",
            "□□□": "This would be the same as the previous square pattern."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch7_t2_qm4',
        type: "mcq",
        question: "What shape comes next in this pattern? △ □ △△ □□ △△△ __",
        options: ["△△△△", "□□□", "△", "□"],
        correctAnswer: "□□□",
        explanation: "The pattern alternates between growing triangles and growing squares. After △△△ comes □□□. 🔄",
        wrongAnswerExplanations: {
            "△△△△": "This would continue the triangle pattern, but we need the next square pattern.",
            "△": "This would be too small for the growing pattern.",
            "□": "This would be too small for the growing square pattern."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch7_t2_qm5',
        type: "mcq",
        question: "What shape comes next in this pattern? ○ △ ○○ △△ ○○○ __",
        options: ["△△△", "○○○○", "○", "△"],
        correctAnswer: "△△△",
        explanation: "The pattern alternates between growing circles and growing triangles. After ○○○ comes △△△. 🔄",
        wrongAnswerExplanations: {
            "○○○○": "This would continue the circle pattern, but we need the next triangle pattern.",
            "○": "This would be too small for the growing pattern.",
            "△": "This would be too small for the growing triangle pattern."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch7_t2_qm6',
        type: "mcq",
        question: "What shape comes next in this pattern? □ △ □□ △△ □□□ __",
        options: ["△△△", "□□□□", "□", "△"],
        correctAnswer: "△△△",
        explanation: "The pattern alternates between growing squares and growing triangles. After □□□ comes △△△. 🔄",
        wrongAnswerExplanations: {
            "□□□□": "This would continue the square pattern, but we need the next triangle pattern.",
            "□": "This would be too small for the growing pattern.",
            "△": "This would be too small for the growing triangle pattern."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch7_t2_qm7',
        type: "mcq",
        question: "What shape comes next in this pattern? △ □ △△ □□ △△△ __",
        options: ["□□□", "△△△△", "△", "□"],
        correctAnswer: "□□□",
        explanation: "The pattern alternates between growing triangles and growing squares. After △△△ comes □□□. 🔄",
        wrongAnswerExplanations: {
            "△△△△": "This would continue the triangle pattern, but we need the next square pattern.",
            "△": "This would be too small for the growing pattern.",
            "□": "This would be too small for the growing square pattern."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch7_t2_qm8',
        type: "mcq",
        question: "What shape comes next in this pattern? ○ □ ○○ □□ ○○○ __",
        options: ["□□□", "○○○○", "○", "□"],
        correctAnswer: "□□□",
        explanation: "The pattern alternates between growing circles and growing squares. After ○○○ comes □□□. 🔄",
        wrongAnswerExplanations: {
            "○○○○": "This would continue the circle pattern, but we need the next square pattern.",
            "○": "This would be too small for the growing pattern.",
            "□": "This would be too small for the growing square pattern."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch7_t2_qm9',
        type: "mcq",
        question: "What shape comes next in this pattern? △ ○ △△ ○○ △△△ __",
        options: ["○○○", "△△△△", "△", "○"],
        correctAnswer: "○○○",
        explanation: "The pattern alternates between growing triangles and growing circles. After △△△ comes ○○○. 🔄",
        wrongAnswerExplanations: {
            "△△△△": "This would continue the triangle pattern, but we need the next circle pattern.",
            "△": "This would be too small for the growing pattern.",
            "○": "This would be too small for the growing circle pattern."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch7_t2_qm10',
        type: "mcq",
        question: "What shape comes next in this pattern? □ ○ □□ ○○ □□□ __",
        options: ["○○○", "□□□□", "□", "○"],
        correctAnswer: "○○○",
        explanation: "The pattern alternates between growing squares and growing circles. After □□□ comes ○○○. 🔄",
        wrongAnswerExplanations: {
            "□□□□": "This would continue the square pattern, but we need the next circle pattern.",
            "□": "This would be too small for the growing pattern.",
            "○": "This would be too small for the growing circle pattern."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch7_t2_qm11',
        type: "mcq",
        question: "What shape comes next in this pattern? △ □ △△ □□ △△△ __",
        options: ["□□□", "△△△△", "△", "□"],
        correctAnswer: "□□□",
        explanation: "The pattern alternates between growing triangles and growing squares. After △△△ comes □□□. 🔄",
        wrongAnswerExplanations: {
            "△△△△": "This would continue the triangle pattern, but we need the next square pattern.",
            "△": "This would be too small for the growing pattern.",
            "□": "This would be too small for the growing square pattern."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch7_t2_qm12',
        type: "mcq",
        question: "What shape comes next in this pattern? ○ △ ○○ △△ ○○○ __",
        options: ["△△△", "○○○○", "○", "△"],
        correctAnswer: "△△△",
        explanation: "The pattern alternates between growing circles and growing triangles. After ○○○ comes △△△. 🔄",
        wrongAnswerExplanations: {
            "○○○○": "This would continue the circle pattern, but we need the next triangle pattern.",
            "○": "This would be too small for the growing pattern.",
            "△": "This would be too small for the growing triangle pattern."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch7_t2_qm13',
        type: "mcq",
        question: "What shape comes next in this pattern? □ △ □□ △△ □□□ __",
        options: ["△△△", "□□□□", "□", "△"],
        correctAnswer: "△△△",
        explanation: "The pattern alternates between growing squares and growing triangles. After □□□ comes △△△. 🔄",
        wrongAnswerExplanations: {
            "□□□□": "This would continue the square pattern, but we need the next triangle pattern.",
            "□": "This would be too small for the growing pattern.",
            "△": "This would be too small for the growing triangle pattern."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch7_t2_qm14',
        type: "mcq",
        question: "What shape comes next in this pattern? △ □ △△ □□ △△△ __",
        options: ["□□□", "△△△△", "△", "□"],
        correctAnswer: "□□□",
        explanation: "The pattern alternates between growing triangles and growing squares. After △△△ comes □□□. 🔄",
        wrongAnswerExplanations: {
            "△△△△": "This would continue the triangle pattern, but we need the next square pattern.",
            "△": "This would be too small for the growing pattern.",
            "□": "This would be too small for the growing square pattern."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch7_t2_qm15',
        type: "mcq",
        question: "What shape comes next in this pattern? ○ □ ○○ □□ ○○○ __",
        options: ["□□□", "○○○○", "○", "□"],
        correctAnswer: "□□□",
        explanation: "The pattern alternates between growing circles and growing squares. After ○○○ comes □□□. 🔄",
        wrongAnswerExplanations: {
            "○○○○": "This would continue the circle pattern, but we need the next square pattern.",
            "○": "This would be too small for the growing pattern.",
            "□": "This would be too small for the growing square pattern."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch7_t2_qm16',
        type: "mcq",
        question: "What shape comes next in this pattern? △ ○ △△ ○○ △△△ __",
        options: ["○○○", "△△△△", "△", "○"],
        correctAnswer: "○○○",
        explanation: "The pattern alternates between growing triangles and growing circles. After △△△ comes ○○○. 🔄",
        wrongAnswerExplanations: {
            "△△△△": "This would continue the triangle pattern, but we need the next circle pattern.",
            "△": "This would be too small for the growing pattern.",
            "○": "This would be too small for the growing circle pattern."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch7_t2_qm17',
        type: "mcq",
        question: "What shape comes next in this pattern? □ ○ □□ ○○ □□□ __",
        options: ["○○○", "□□□□", "□", "○"],
        correctAnswer: "○○○",
        explanation: "The pattern alternates between growing squares and growing circles. After □□□ comes ○○○. 🔄",
        wrongAnswerExplanations: {
            "□□□□": "This would continue the square pattern, but we need the next circle pattern.",
            "□": "This would be too small for the growing pattern.",
            "○": "This would be too small for the growing circle pattern."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch7_t2_qm18',
        type: "mcq",
        question: "What shape comes next in this pattern? △ □ △△ □□ △△△ __",
        options: ["□□□", "△△△△", "△", "□"],
        correctAnswer: "□□□",
        explanation: "The pattern alternates between growing triangles and growing squares. After △△△ comes □□□. 🔄",
        wrongAnswerExplanations: {
            "△△△△": "This would continue the triangle pattern, but we need the next square pattern.",
            "△": "This would be too small for the growing pattern.",
            "□": "This would be too small for the growing square pattern."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch7_t2_qm19',
        type: "mcq",
        question: "What shape comes next in this pattern? ○ △ ○○ △△ ○○○ __",
        options: ["△△△", "○○○○", "○", "△"],
        correctAnswer: "△△△",
        explanation: "The pattern alternates between growing circles and growing triangles. After ○○○ comes △△△. 🔄",
        wrongAnswerExplanations: {
            "○○○○": "This would continue the circle pattern, but we need the next triangle pattern.",
            "○": "This would be too small for the growing pattern.",
            "△": "This would be too small for the growing triangle pattern."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch7_t2_qm20',
        type: "mcq",
        question: "What shape comes next in this pattern? □ △ □□ △△ □□□ __",
        options: ["△△△", "□□□□", "□", "△"],
        correctAnswer: "△△△",
        explanation: "The pattern alternates between growing squares and growing triangles. After □□□ comes △△△. 🔄",
        wrongAnswerExplanations: {
            "□□□□": "This would continue the square pattern, but we need the next triangle pattern.",
            "□": "This would be too small for the growing pattern.",
            "△": "This would be too small for the growing triangle pattern."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    }
]; 