// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 7\Chapter14\Topic2\quiz_easy.ts
import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: "cl7_ch14_t2_qe1",
        type: "mcq",
        question: "What is rotational symmetry?",
        options: [
            "When a shape looks the same after being turned around its center",
            "When a shape can be folded in half",
            "When a shape has equal sides",
            "When a shape has parallel lines"
        ],
        correctAnswer: "When a shape looks the same after being turned around its center",
        explanation: "Rotational symmetry means a shape looks identical multiple times as it completes one full turn around its center. 🔄",
        wrongAnswerExplanations: {
            "When a shape can be folded in half": "This describes line symmetry, not rotational symmetry.",
            "When a shape has equal sides": "Equal sides don't necessarily mean rotational symmetry.",
            "When a shape has parallel lines": "Parallel lines don't determine rotational symmetry."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: "cl7_ch14_t2_qe2",
        type: "mcq",
        question: "What is the order of rotational symmetry of a square?",
        options: ["2", "3", "4", "5"],
        correctAnswer: "4",
        explanation: "A square looks identical 4 times in one complete rotation, so its order of rotational symmetry is 4. ⬛",
        wrongAnswerExplanations: {
            "2": "A rectangle has order 2 rotational symmetry.",
            "3": "An equilateral triangle has order 3 rotational symmetry.",
            "5": "A regular pentagon has order 5 rotational symmetry."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: "cl7_ch14_t2_qe3",
        type: "mcq",
        question: "Through what angle must a shape be rotated to check for rotational symmetry?",
        options: ["90°", "180°", "270°", "360°"],
        correctAnswer: "360°",
        explanation: "To check rotational symmetry, rotate the shape through a complete turn (360°) and count identical appearances. 🔄",
        wrongAnswerExplanations: {
            "90°": "This is just one quarter turn.",
            "180°": "This is only half a turn.",
            "270°": "This is three-quarters of a turn."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: "cl7_ch14_t2_qe4",
        type: "mcq",
        question: "Which of these shapes has rotational symmetry of order 1?",
        options: ["Scalene triangle", "Isosceles triangle", "Equilateral triangle", "Rectangle"],
        correctAnswer: "Scalene triangle",
        explanation: "A scalene triangle only looks the same after a full 360° rotation. 📐",
        wrongAnswerExplanations: {
            "Isosceles triangle": "An isosceles triangle has higher order of rotational symmetry.",
            "Equilateral triangle": "An equilateral triangle has order 3 rotational symmetry.",
            "Rectangle": "A rectangle has order 2 rotational symmetry."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: "cl7_ch14_t2_qe5",
        type: "mcq",
        question: "What is the order of rotational symmetry for an equilateral triangle?",
        options: ["1", "2", "3", "4"],
        correctAnswer: "3",
        explanation: "An equilateral triangle has 3 positions in which it looks identical after rotations of 120°, 240°, and 360°. △",
        wrongAnswerExplanations: {
            "1": "Order 1 means no rotational symmetry except 360°.",
            "2": "An equilateral triangle has more than 2 positions of symmetry.",
            "4": "Only squares and similar shapes have order 4."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: "cl7_ch14_t2_qe6",
        type: "mcq",
        question: "How many degrees does a shape with rotational symmetry of order 5 need to be rotated to match itself?",
        options: ["36°", "45°", "60°", "72°"],
        correctAnswer: "72°",
        explanation: "For order 5: 360° ÷ 5 = 72° rotation is needed. 🔄",
        wrongAnswerExplanations: {
            "36°": "This angle is too small for order 5 rotational symmetry.",
            "45°": "This is the angle for order 8 rotational symmetry.",
            "60°": "This is the angle for order 6 rotational symmetry."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: "cl7_ch14_t2_qe7",
        type: "mcq",
        question: "What is the order of rotational symmetry for a regular pentagon?",
        options: ["3", "4", "5", "6"],
        correctAnswer: "5",
        explanation: "A regular pentagon has 5 positions where it looks identical after rotations of 72°, 144°, 216°, 288°, and 360°. ⭐",
        wrongAnswerExplanations: {
            "3": "This is the order for an equilateral triangle.",
            "4": "This is the order for a square.",
            "6": "This is the order for a regular hexagon."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: "cl7_ch14_t2_qe8",
        type: "mcq",
        question: "What is the center of rotational symmetry for a regular polygon?",
        options: ["Any vertex", "The midpoint of any side", "The center of the polygon", "Any point inside the polygon"],
        correctAnswer: "The center of the polygon",
        explanation: "The center of rotational symmetry is the point around which a figure is rotated. ⚪",
        wrongAnswerExplanations: {
            "Any vertex": "Vertices are points on the perimeter, not the center of rotation.",
            "The midpoint of any side": "Side midpoints are not centers of rotation.",
            "Any point inside the polygon": "Only the center point works for rotational symmetry."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: "cl7_ch14_t2_qe9",
        type: "mcq",
        question: "What is the order of rotational symmetry for a regular hexagon?",
        options: ["4", "5", "6", "8"],
        correctAnswer: "6",
        explanation: "A regular hexagon has 6 positions in which it looks identical after rotations of 60°, 120°, etc. ⬡",
        wrongAnswerExplanations: {
            "4": "This is the order for a square.",
            "5": "This is the order for a regular pentagon.",
            "8": "This is the order for a regular octagon."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: "cl7_ch14_t2_qe10",
        type: "mcq",
        question: "A shape has rotational symmetry of order 4. Through what angle must it be rotated to coincide with itself?",
        options: ["45°", "60°", "90°", "120°"],
        correctAnswer: "90°",
        explanation: "For order 4: 360° ÷ 4 = 90° rotation is needed. 🔄",
        wrongAnswerExplanations: {
            "45°": "This is half of the correct angle.",
            "60°": "This is for order 6 rotational symmetry.",
            "120°": "This is for order 3 rotational symmetry."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: "cl7_ch14_t2_qe11",
        type: "mcq",
        question: "What is the order of rotational symmetry of a circle?",
        options: ["1", "2", "∞ (infinity)", "0"],
        correctAnswer: "∞ (infinity)",
        explanation: "A circle looks identical after rotation by any angle, giving it infinite order of rotational symmetry. ⭕",
        wrongAnswerExplanations: {
            "1": "A circle has more than just one position of symmetry.",
            "2": "A circle has more than two positions of symmetry.",
            "0": "A circle definitely has rotational symmetry."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: "cl7_ch14_t2_qe12",
        type: "mcq",
        question: "Which of these has rotational symmetry but no line symmetry?",
        options: ["Rectangle", "Rhombus", "Circle", "A propeller shape with 3 identical blades"],
        correctAnswer: "A propeller shape with 3 identical blades",
        explanation: "A 3-blade propeller has rotational symmetry of order 3 but no lines of symmetry. 🌀",
        wrongAnswerExplanations: {
            "Rectangle": "A rectangle has both rotational and line symmetry.",
            "Rhombus": "A rhombus has both rotational and line symmetry.",
            "Circle": "A circle has infinite line and rotational symmetry."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: "cl7_ch14_t2_qe13",
        type: "mcq",
        question: "What is the order of rotational symmetry for a regular octagon?",
        options: ["4", "6", "8", "10"],
        correctAnswer: "8",
        explanation: "A regular octagon has 8 positions in which it looks identical after rotations of 45°, 90°, etc. 🔷",
        wrongAnswerExplanations: {
            "4": "This is the order for a square.",
            "6": "This is the order for a regular hexagon.",
            "10": "This is the order for a regular decagon."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: "cl7_ch14_t2_qe14",
        type: "mcq",
        question: "If a shape has rotational symmetry of order 6, how many times will it look identical in one complete rotation?",
        options: ["3", "6", "12", "360"],
        correctAnswer: "6",
        explanation: "With order 6, the shape will coincide with itself 6 times in a 360° rotation. ⬡",
        wrongAnswerExplanations: {
            "3": "This would be for order 3 rotational symmetry.",
            "12": "This is twice the actual number of positions.",
            "360": "This is the total degrees in a rotation, not positions."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: "cl7_ch14_t2_qe15",
        type: "mcq",
        question: "What is the order of rotational symmetry for a rectangle that is not a square?",
        options: ["1", "2", "4", "Infinite"],
        correctAnswer: "2",
        explanation: "A rectangle coincides with itself after rotations of 180° and 360°, giving order 2. ▭",
        wrongAnswerExplanations: {
            "1": "A rectangle has more than one position of symmetry.",
            "4": "Only a square has order 4 rotational symmetry.",
            "Infinite": "Only a circle has infinite rotational symmetry."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: "cl7_ch14_t2_qe16",
        type: "mcq",
        question: "Which has rotational symmetry of order 2?",
        options: ["Equilateral triangle", "Isosceles triangle", "Letter S", "Letter Z"],
        correctAnswer: "Letter S",
        explanation: "The letter S looks the same after a 180° rotation, giving it order 2 rotational symmetry. 🔄",
        wrongAnswerExplanations: {
            "Equilateral triangle": "An equilateral triangle has order 3 rotational symmetry.",
            "Isosceles triangle": "An isosceles triangle typically has order 1.",
            "Letter Z": "The letter Z does not have rotational symmetry."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: "cl7_ch14_t2_qe17",
        type: "mcq",
        question: "The angle of rotation for a shape with rotational symmetry of order 3 is:",
        options: ["90°", "120°", "180°", "360°"],
        correctAnswer: "120°",
        explanation: "For order 3: 360° ÷ 3 = 120° rotation is needed. 📐",
        wrongAnswerExplanations: {
            "90°": "This is the angle for order 4 rotational symmetry.",
            "180°": "This is the angle for order 2 rotational symmetry.",
            "360°": "This is a complete rotation, not the minimum angle needed."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: "cl7_ch14_t2_qe18",
        type: "mcq",
        question: "Which number has rotational symmetry of order 2?",
        options: ["3", "6", "8", "9"],
        correctAnswer: "8",
        explanation: "The number 8 looks the same after a 180° rotation, giving it order 2. 8️⃣",
        wrongAnswerExplanations: {
            "3": "3 has no rotational symmetry.",
            "6": "6 has no rotational symmetry.",
            "9": "9 has no rotational symmetry."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: "cl7_ch14_t2_qe19",
        type: "mcq",
        question: "What is the relationship between the number of sides (n) of a regular polygon and its order of rotational symmetry?",
        options: ["n-1", "n", "n+1", "2n"],
        correctAnswer: "n",
        explanation: "A regular polygon with n sides has rotational symmetry of order n. 🔷",
        wrongAnswerExplanations: {
            "n-1": "The order equals the number of sides, not one less.",
            "n+1": "The order equals the number of sides, not one more.",
            "2n": "The order equals the number of sides, not double."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: "cl7_ch14_t2_qe20",
        type: "mcq",
        question: "Which of these letters has rotational symmetry?",
        options: ["F", "N", "H", "S"],
        correctAnswer: "S",
        explanation: "The letter S has rotational symmetry of order 2 (looks the same after 180° rotation). ✍️",
        wrongAnswerExplanations: {
            "F": "F has no rotational symmetry.",
            "N": "N has no rotational symmetry.",
            "H": "H has no rotational symmetry."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: "cl7_ch14_t2_qe21",
        type: "mcq",
        question: "What is the order of rotational symmetry of a semicircle?",
        options: ["1", "2", "3", "Infinite"],
        correctAnswer: "1",
        explanation: "A semicircle only coincides with itself after a complete 360° rotation. 🌓",
        wrongAnswerExplanations: {
            "2": "A semicircle does not have order 2 as it doesn't match at 180°.",
            "3": "A semicircle does not match at 120° intervals.",
            "Infinite": "Only a full circle has infinite rotational symmetry."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: "cl7_ch14_t2_qe22",
        type: "mcq",
        question: "If a shape has rotational symmetry of order n, by what angle must it be rotated to coincide with itself?",
        options: ["n°", "180°/n", "360°/n", "n × 360°"],
        correctAnswer: "360°/n",
        explanation: "The angle of rotation is 360° divided by the order of rotational symmetry. 📐",
        wrongAnswerExplanations: {
            "n°": "This would give incorrect angles for all orders.",
            "180°/n": "This would give half the correct angle.",
            "n × 360°": "This would give angles much larger than a complete rotation."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    }
];
