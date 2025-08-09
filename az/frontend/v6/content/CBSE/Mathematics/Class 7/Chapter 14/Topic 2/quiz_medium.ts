// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 7\Chapter14\Topic2\quiz_medium.ts
import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: "cl7_ch14_t2_qm1",
        type: "mcq",
        question: "A regular polygon has rotational symmetry of order 8. How many sides does it have and what is the angle of rotation?",
        options: [
            "8 sides, 45° rotation",
            "8 sides, 90° rotation",
            "4 sides, 45° rotation",
            "16 sides, 45° rotation"
        ],
        correctAnswer: "8 sides, 45° rotation",
        explanation: "A regular polygon with order 8 rotational symmetry has 8 sides, and its angle of rotation is 360° ÷ 8 = 45°. 🔄",
        wrongAnswerExplanations: {
            "8 sides, 90° rotation": "90° is the angle for order 4, not order 8.",
            "4 sides, 45° rotation": "A 4-sided polygon has order 4, not 8.",
            "16 sides, 45° rotation": "While 45° is correct, the number of sides equals the order of symmetry."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: "cl7_ch14_t2_qm2",
        type: "mcq",
        question: "If a shape has rotational symmetry of order n and requires a minimum rotation of 40° to match itself, what is the value of n?",
        options: [
            "8",
            "9",
            "10",
            "12"
        ],
        correctAnswer: "9",
        explanation: "If the minimum rotation is 40°, then n = 360° ÷ 40° = 9. This means the shape looks identical 9 times in one complete rotation. 📐",
        wrongAnswerExplanations: {
            "8": "360° ÷ 8 = 45°, not 40°.",
            "10": "360° ÷ 10 = 36°, not 40°.",
            "12": "360° ÷ 12 = 30°, not 40°."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: "cl7_ch14_t2_qm3",
        type: "mcq",
        question: "A shape has both rotational and line symmetry. If it has 6 lines of symmetry, what is its order of rotational symmetry?",
        options: [
            "3",
            "6",
            "12",
            "Not enough information"
        ],
        correctAnswer: "6",
        explanation: "In regular polygons, the number of lines of symmetry equals the order of rotational symmetry. Here, 6 lines of symmetry means order 6 rotational symmetry. ⬡",
        wrongAnswerExplanations: {
            "3": "The order matches the number of lines of symmetry in regular shapes.",
            "12": "The order would not be double the lines of symmetry.",
            "Not enough information": "For regular shapes, we can determine order from lines of symmetry."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: "cl7_ch14_t2_qm4",
        type: "mcq",
        question: "Which combination of rotational symmetry orders is possible for a shape that is NOT regular?",
        options: [
            "Order 4 and order 2",
            "Order 3 and order 6",
            "Order 5 and order 10",
            "Order 2 only"
        ],
        correctAnswer: "Order 2 only",
        explanation: "Non-regular shapes can have order 2 rotational symmetry (like rectangles), but higher orders typically occur only in regular shapes. 🔄",
        wrongAnswerExplanations: {
            "Order 4 and order 2": "A shape cannot have multiple orders of rotational symmetry.",
            "Order 3 and order 6": "A shape cannot have multiple orders of rotational symmetry.",
            "Order 5 and order 10": "A shape cannot have multiple orders of rotational symmetry."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: "cl7_ch14_t2_qm5",
        type: "mcq",
        question: "A regular polygon has internal angles of 140°. What is its order of rotational symmetry?",
        options: [
            "5",
            "7",
            "9",
            "10"
        ],
        correctAnswer: "9",
        explanation: "For a polygon with internal angles of 140°, n = 360° ÷ (180° - 140°) = 360° ÷ 40° = 9 sides, thus order 9. 📐",
        wrongAnswerExplanations: {
            "5": "A pentagon has internal angles of 108°.",
            "7": "A heptagon has internal angles of approximately 128.57°.",
            "10": "A decagon has internal angles of 144°."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: "cl7_ch14_t2_qm6",
        type: "mcq",
        question: "Which statement about rotational symmetry is FALSE?",
        options: [
            "All regular polygons have rotational symmetry",
            "The order of rotational symmetry can never exceed the number of sides",
            "A shape with rotational symmetry must have line symmetry",
            "The center of rotation is unique for each shape"
        ],
        correctAnswer: "A shape with rotational symmetry must have line symmetry",
        explanation: "Some shapes (like a pinwheel with 3 arms) have rotational symmetry but no line symmetry. Rotational and line symmetry are independent properties. 🌀",
        wrongAnswerExplanations: {
            "All regular polygons have rotational symmetry": "This is true for all regular polygons.",
            "The order of rotational symmetry can never exceed the number of sides": "This is true for polygons.",
            "The center of rotation is unique for each shape": "This is true; there can only be one center of rotation."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: "cl7_ch14_t2_qm7",
        type: "mcq",
        question: "If a regular polygon has exterior angles of 36°, what is its order of rotational symmetry?",
        options: [
            "5",
            "10",
            "15",
            "20"
        ],
        correctAnswer: "10",
        explanation: "Exterior angles = 360° ÷ n, where n is the number of sides. If exterior angle is 36°, then n = 360° ÷ 36° = 10. Order equals number of sides. 🔄",
        wrongAnswerExplanations: {
            "5": "This would give exterior angles of 72°.",
            "15": "This would give exterior angles of 24°.",
            "20": "This would give exterior angles of 18°."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: "cl7_ch14_t2_qm8",
        type: "mcq",
        question: "Which transformation preserves rotational symmetry?",
        options: [
            "Reflection only",
            "Translation only",
            "Rotation about any point",
            "Rotation about the center of symmetry"
        ],
        correctAnswer: "Rotation about the center of symmetry",
        explanation: "Rotating a shape about its center of symmetry preserves its rotational symmetry properties. Other transformations may not. 🔄",
        wrongAnswerExplanations: {
            "Reflection only": "Reflection might change the center of rotation.",
            "Translation only": "Translation moves the center of rotation.",
            "Rotation about any point": "Rotating about a different point changes the center of rotation."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: "cl7_ch14_t2_qm9",
        type: "mcq",
        question: "A shape has rotational symmetry of order 12. How many different positions will it appear identical in during one complete rotation?",
        options: [
            "6",
            "12",
            "24",
            "360"
        ],
        correctAnswer: "12",
        explanation: "Order 12 means the shape appears identical in 12 different positions during one complete 360° rotation. Each position is 30° apart. ⭐",
        wrongAnswerExplanations: {
            "6": "This is half the correct number of positions.",
            "24": "This is double the correct number of positions.",
            "360": "This is the number of degrees in a complete rotation, not positions."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: "cl7_ch14_t2_qm10",
        type: "mcq",
        question: "What is the relationship between the order of rotational symmetry (n) and the smallest angle of rotation (θ)?",
        options: [
            "n = θ",
            "n = 360° × θ",
            "n = 360° ÷ θ",
            "n × θ = 180°"
        ],
        correctAnswer: "n = 360° ÷ θ",
        explanation: "The order of rotational symmetry equals 360° divided by the smallest angle of rotation. For example, order 4 means 360° ÷ 90° = 4. 📐",
        wrongAnswerExplanations: {
            "n = θ": "This would give incorrect results for all orders.",
            "n = 360° × θ": "This would give extremely large orders.",
            "n × θ = 180°": "This relationship doesn't hold true for rotational symmetry."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    }
];
