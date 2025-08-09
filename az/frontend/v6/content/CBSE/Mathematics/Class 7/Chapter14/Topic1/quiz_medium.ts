// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 7\Chapter14\Topic1\quiz_medium.ts
import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: "cl7_ch14_t1_qm1",
        type: "mcq",
        question: "If a quadrilateral has exactly two lines of symmetry, which shape must it be?",
        options: ["Parallelogram", "Rhombus", "Rectangle (non-square)", "Square"],
        correctAnswer: "Rectangle (non-square)",
        explanation: "A non-square rectangle has exactly two lines of symmetry: one vertical and one horizontal through the middle. ▭",
        wrongAnswerExplanations: {
            "Parallelogram": "A parallelogram (non-rectangle) has no lines of symmetry.",
            "Rhombus": "A rhombus has four lines of symmetry.",
            "Square": "A square has four lines of symmetry."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: "cl7_ch14_t1_qm2",
        type: "mcq",
        question: "What is the relationship between the number of sides of a regular polygon and its lines of symmetry?",
        options: ["Equal", "Double", "Half", "No direct relationship"],
        correctAnswer: "Equal",
        explanation: "A regular polygon with n sides has exactly n lines of symmetry. For example, a regular pentagon has 5 sides and 5 lines of symmetry. 🔷",
        wrongAnswerExplanations: {
            "Double": "The number of lines of symmetry is not double the number of sides.",
            "Half": "The number of lines of symmetry is not half the number of sides.",
            "No direct relationship": "There is a direct relationship - they are equal."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: "cl7_ch14_t1_qm3",
        type: "mcq",
        question: "Which of these quadrilaterals has exactly one line of symmetry?",
        options: ["Rectangle", "Parallelogram", "Kite", "Rhombus"],
        correctAnswer: "Kite",
        explanation: "A kite has exactly one line of symmetry along its vertical diagonal. 🪁",
        wrongAnswerExplanations: {
            "Rectangle": "A rectangle has two lines of symmetry.",
            "Parallelogram": "A parallelogram has no lines of symmetry unless it's a rectangle or rhombus.",
            "Rhombus": "A rhombus has four lines of symmetry."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: "cl7_ch14_t1_qm4",
        type: "mcq",
        question: "If you draw all possible lines of symmetry in a regular pentagon, how many times do they intersect?",
        options: ["5", "10", "1", "25"],
        correctAnswer: "1",
        explanation: "All lines of symmetry in a regular polygon intersect at exactly one point - the center. 🎯",
        wrongAnswerExplanations: {
            "5": "While a pentagon has 5 lines of symmetry, they all intersect at one point.",
            "10": "The number of intersections is not related to the number of sides.",
            "25": "The lines don't create this many intersections."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: "cl7_ch14_t1_qm5",
        type: "mcq",
        question: "A quadrilateral has diagonals that bisect each other at right angles. It definitely has:",
        options: ["No lines of symmetry", "Exactly 1 line of symmetry", "At least 2 lines of symmetry", "4 lines of symmetry"],
        correctAnswer: "At least 2 lines of symmetry",
        explanation: "This describes a rhombus, which has at least 2 lines of symmetry along its diagonals. If it's a square, it has 4 lines. ◇",
        wrongAnswerExplanations: {
            "No lines of symmetry": "Perpendicular bisecting diagonals indicate symmetry.",
            "Exactly 1 line of symmetry": "Such a quadrilateral must have at least 2 lines.",
            "4 lines of symmetry": "Not all such quadrilaterals have 4 lines (rhombus vs square)."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: "cl7_ch14_t1_qm6",
        type: "mcq",
        question: "What shape is created when two identical equilateral triangles share one side?",
        options: ["Square", "Rhombus", "Kite", "Regular hexagon"],
        correctAnswer: "Rhombus",
        explanation: "Two equilateral triangles sharing a side form a rhombus with 60° and 120° angles and 4 equal sides. ◇",
        wrongAnswerExplanations: {
            "Square": "A square has all 90° angles.",
            "Kite": "A kite doesn't have all sides equal.",
            "Regular hexagon": "A hexagon has 6 sides, not 4."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: "cl7_ch14_t1_qm7",
        type: "mcq",
        question: "If a parallelogram has a line of symmetry, it must be a:",
        options: ["Rectangle", "Rhombus", "Square", "Either a rhombus or a rectangle"],
        correctAnswer: "Either a rhombus or a rectangle",
        explanation: "A parallelogram with line symmetry must be either a rectangle (2 lines) or a rhombus (4 lines). ▭",
        wrongAnswerExplanations: {
            "Rectangle": "A rhombus also has line symmetry.",
            "Rhombus": "A rectangle also has line symmetry.",
            "Square": "While true for squares, other rectangles and rhombuses also have symmetry."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: "cl7_ch14_t1_qm8",
        type: "mcq",
        question: "What is the maximum number of lines of symmetry that a trapezoid can have?",
        options: ["0", "1", "2", "4"],
        correctAnswer: "1",
        explanation: "An isosceles trapezoid has exactly one line of symmetry. No trapezoid can have more than one line of symmetry. ⏢",
        wrongAnswerExplanations: {
            "0": "An isosceles trapezoid has one line of symmetry.",
            "2": "A trapezoid cannot have two lines of symmetry.",
            "4": "Only squares and rhombuses can have four lines of symmetry."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: "cl7_ch14_t1_qm9",
        type: "mcq",
        question: "Which of these symbols has rotational symmetry but no line symmetry?",
        options: ["$", "S", "N", "Z"],
        correctAnswer: "Z",
        explanation: "The letter Z has rotational symmetry of order 2 but no line symmetry. It looks the same after a 180° rotation. ↻",
        wrongAnswerExplanations: {
            "$": "The dollar sign has vertical line symmetry.",
            "S": "S has no rotational or line symmetry.",
            "N": "N has no rotational or line symmetry."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: "cl7_ch14_t1_qm10",
        type: "mcq",
        question: "A pentagon has exactly one line of symmetry. It must be:",
        options: ["Regular pentagon", "Irregular pentagon", "Either regular or irregular", "None of the above"],
        correctAnswer: "Irregular pentagon",
        explanation: "A regular pentagon has 5 lines of symmetry. Only an irregular pentagon can have exactly one line. 🔷",
        wrongAnswerExplanations: {
            "Regular pentagon": "A regular pentagon always has 5 lines of symmetry.",
            "Either regular or irregular": "A regular pentagon cannot have just one line.",
            "None of the above": "An irregular pentagon can have exactly one line."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: "cl7_ch14_t1_qm11",
        type: "mcq",
        question: "When a regular hexagon is divided by all its lines of symmetry, how many equal parts are created?",
        options: ["6", "12", "24", "36"],
        correctAnswer: "12",
        explanation: "A regular hexagon has 6 lines of symmetry that divide it into 12 equal parts. Each line creates 2 parts. ⬡",
        wrongAnswerExplanations: {
            "6": "This is the number of sides and lines of symmetry.",
            "24": "The lines don't create this many regions.",
            "36": "The lines don't create this many regions."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: "cl7_ch14_t1_qm12",
        type: "mcq",
        question: "If a shape has rotational symmetry of order 3, what is the minimum number of lines of symmetry it can have?",
        options: ["0", "1", "2", "3"],
        correctAnswer: "0",
        explanation: "A shape can have rotational symmetry without having any lines of symmetry, like a triskelion symbol. ↻",
        wrongAnswerExplanations: {
            "1": "Lines of symmetry aren't required for rotational symmetry.",
            "2": "A shape with order 3 rotation doesn't need 2 lines.",
            "3": "While possible, it's not the minimum number."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: "cl7_ch14_t1_qm13",
        type: "mcq",
        question: "What happens to the number of lines of symmetry when a regular octagon becomes a regular nonagon?",
        options: ["Increases by 1", "Decreases by 1", "Stays the same", "Increases by 2"],
        correctAnswer: "Increases by 1",
        explanation: "A regular octagon has 8 lines of symmetry, and a regular nonagon has 9. The number increases by 1. 🔷",
        wrongAnswerExplanations: {
            "Decreases by 1": "The number increases with more sides.",
            "Stays the same": "Regular polygons have lines equal to sides.",
            "Increases by 2": "It only increases by 1 (8 → 9)."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: "cl7_ch14_t1_qm14",
        type: "mcq",
        question: "In a regular polygon, if each line of symmetry creates regions of 30°, how many sides does the polygon have?",
        options: ["6", "12", "15", "18"],
        correctAnswer: "12",
        explanation: "If each region is 30°, there are 12 regions (360° ÷ 30° = 12). A regular polygon with 12 regions has 6 lines of symmetry and 6 sides. ⬡",
        wrongAnswerExplanations: {
            "6": "This would create 60° regions.",
            "15": "This would create 24° regions.",
            "18": "This would create 20° regions."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: "cl7_ch14_t1_qm15",
        type: "mcq",
        question: "What is the relationship between the lines of symmetry of a regular polygon and its angle bisectors?",
        options: ["They are different", "They are the same", "Some overlap", "No relationship"],
        correctAnswer: "They are the same",
        explanation: "In a regular polygon, every line of symmetry is also an angle bisector, and every angle bisector is a line of symmetry. 📐",
        wrongAnswerExplanations: {
            "They are different": "They coincide in regular polygons.",
            "Some overlap": "All of them overlap, not just some.",
            "No relationship": "There is a direct relationship."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: "cl7_ch14_t1_qm16",
        type: "mcq",
        question: "If a quadrilateral has exactly one line of symmetry and two pairs of equal sides, what must it be?",
        options: ["Rectangle", "Rhombus", "Kite", "Square"],
        correctAnswer: "Kite",
        explanation: "A kite has two pairs of equal adjacent sides and one line of symmetry through its vertices. 🪁",
        wrongAnswerExplanations: {
            "Rectangle": "A rectangle has two lines of symmetry.",
            "Rhombus": "A rhombus has four lines of symmetry.",
            "Square": "A square has four lines of symmetry."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: "cl7_ch14_t1_qm17",
        type: "mcq",
        question: "What happens to the lines of symmetry when a square is inscribed in a circle?",
        options: [
            "The square gains more lines",
            "The circle loses some lines",
            "Both shapes keep their original lines",
            "The lines must align"
        ],
        correctAnswer: "Both shapes keep their original lines",
        explanation: "The square maintains its 4 lines and the circle keeps its infinite lines. Inscribing doesn't affect symmetry. ⭕",
        wrongAnswerExplanations: {
            "The square gains more lines": "Inscribing doesn't add lines of symmetry.",
            "The circle loses some lines": "The circle maintains all its lines.",
            "The lines must align": "While some align, both keep all their lines."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: "cl7_ch14_t1_qm18",
        type: "mcq",
        question: "If a triangle has exactly two equal sides and one line of symmetry, what type of triangle must it be?",
        options: ["Equilateral", "Right-angled isosceles", "Scalene", "Any isosceles"],
        correctAnswer: "Any isosceles",
        explanation: "An isosceles triangle has exactly one line of symmetry through its vertex and the midpoint of its base. 📐",
        wrongAnswerExplanations: {
            "Equilateral": "An equilateral triangle has three lines of symmetry.",
            "Right-angled isosceles": "This is just one type of isosceles triangle.",
            "Scalene": "A scalene triangle has no lines of symmetry."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: "cl7_ch14_t1_qm19",
        type: "mcq",
        question: "What is the total number of lines of symmetry in a figure made by overlapping two squares at 45°?",
        options: ["4", "8", "6", "12"],
        correctAnswer: "8",
        explanation: "Each square contributes 4 lines, and when rotated 45°, they create 8 unique lines of symmetry. ✳️",
        wrongAnswerExplanations: {
            "4": "This is just the lines for one square.",
            "6": "The overlapping creates more than 6 lines.",
            "12": "Some lines overlap, so there aren't 12 unique lines."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: "cl7_ch14_t1_qm20",
        type: "mcq",
        question: "In a regular hexagon, if you connect alternate vertices, what shape is formed and how many lines of symmetry does it have?",
        options: [
            "Triangle with 3 lines",
            "Hexagon with 6 lines",
            "Triangle with 6 lines",
            "Hexagon with 3 lines"
        ],
        correctAnswer: "Triangle with 3 lines",
        explanation: "Connecting alternate vertices of a regular hexagon forms an equilateral triangle, which has 3 lines of symmetry. ⬡→△",
        wrongAnswerExplanations: {
            "Hexagon with 6 lines": "The resulting shape is a triangle, not a hexagon.",
            "Triangle with 6 lines": "An equilateral triangle has 3 lines of symmetry.",
            "Hexagon with 3 lines": "The shape is a triangle, not a hexagon."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    }
];
