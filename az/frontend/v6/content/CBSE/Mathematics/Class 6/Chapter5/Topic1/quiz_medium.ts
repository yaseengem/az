// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 6\Chapter5\Topic1\quiz_medium.ts
// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 6\Chapter5\Topic1\quiz_medium.ts
import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl6_ch5_t1_qm1',
        type: "mcq",
        question: "If a triangle has angles measuring 30° and 60°, what is the measure of the third angle?",
        options: ["30°", "60°", "90°", "120°"],
        correctAnswer: "90°",
        explanation: "The sum of angles in a triangle is 180°. So, third angle = 180° - (30° + 60°) = 90°. This is a right triangle! 📐",
        wrongAnswerExplanations: {
            "30°": "If the third angle were 30°, the sum would be 30° + 60° + 30° = 120°, which is less than 180°.",
            "60°": "If the third angle were 60°, the sum would be 30° + 60° + 60° = 150°, which is less than 180°.",
            "120°": "If the third angle were 120°, the sum would be 30° + 60° + 120° = 210°, which exceeds 180°."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch5_t1_qm2',
        type: "mcq",
        question: "In a quadrilateral, if three angles measure 75°, 95°, and 110°, what is the measure of the fourth angle?",
        options: ["80°", "85°", "90°", "95°"],
        correctAnswer: "80°",
        explanation: "The sum of angles in a quadrilateral is 360°. So, fourth angle = 360° - (75° + 95° + 110°) = 80°. 🔹",
        wrongAnswerExplanations: {
            "85°": "If the fourth angle were 85°, the sum would be 75° + 95° + 110° + 85° = 365°, which exceeds 360°.",
            "90°": "If the fourth angle were 90°, the sum would be 75° + 95° + 110° + 90° = 370°, which exceeds 360°.",
            "95°": "If the fourth angle were 95°, the sum would be 75° + 95° + 110° + 95° = 375°, which exceeds 360°."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch5_t1_qm3',
        type: "mcq",
        question: "Which of these statements about a square is FALSE?",
        options: [
            "All sides are equal",
            "Diagonals bisect each other",
            "All angles are 90°",
            "Diagonals are of different lengths"
        ],
        correctAnswer: "Diagonals are of different lengths",
        explanation: "In a square, the diagonals are equal in length. They also bisect each other at right angles. ❌",
        wrongAnswerExplanations: {
            "All sides are equal": "This is true. By definition, a square has all sides equal.",
            "Diagonals bisect each other": "This is true. The diagonals of a square bisect each other.",
            "All angles are 90°": "This is true. All angles in a square are right angles (90°)."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch5_t1_qm4',
        type: "mcq",
        question: "If a triangle has sides of lengths 3 cm, 4 cm, and 5 cm, which type of triangle is it?",
        options: ["Equilateral", "Isosceles", "Scalene right", "Obtuse"],
        correctAnswer: "Scalene right",
        explanation: "It's a scalene triangle (all sides different) and a right triangle (3² + 4² = 5²). This famous 3-4-5 triangle always forms a right angle! 📏",
        wrongAnswerExplanations: {
            "Equilateral": "An equilateral triangle has all sides equal, but here all sides are different.",
            "Isosceles": "An isosceles triangle has two sides equal, but here all sides are different.",
            "Obtuse": "This is a right triangle, not obtuse, because 3² + 4² = 5²."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch5_t1_qm5',
        type: "mcq",
        question: "What is the special name for a quadrilateral with exactly one pair of parallel sides?",
        options: ["Parallelogram", "Rhombus", "Trapezium", "Kite"],
        correctAnswer: "Trapezium",
        explanation: "A trapezium (or trapezoid) has exactly one pair of parallel sides. The other pair is not parallel. 📏",
        wrongAnswerExplanations: {
            "Parallelogram": "A parallelogram has both pairs of opposite sides parallel.",
            "Rhombus": "A rhombus is a parallelogram with all sides equal.",
            "Kite": "A kite has two pairs of adjacent sides equal but not necessarily any parallel sides."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch5_t1_qm6',
        type: "mcq",
        question: "Which of these quadrilaterals is always a rhombus?",
        options: ["Rectangle", "Square", "Kite with perpendicular diagonals", "Parallelogram with equal diagonals"],
        correctAnswer: "Square",
        explanation: "A square is always a rhombus because it has all sides equal. A rhombus has all sides equal by definition. ✅",
        wrongAnswerExplanations: {
            "Rectangle": "A rectangle doesn't have all sides equal unless it's a square.",
            "Kite with perpendicular diagonals": "A kite with perpendicular diagonals may not have all sides equal.",
            "Parallelogram with equal diagonals": "A parallelogram with equal diagonals is a rectangle, not necessarily a rhombus."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch5_t1_qm7',
        type: "mcq",
        question: "If one angle of an isosceles triangle is 100°, what are the other two angles?",
        options: ["40° and 40°", "40° and 140°", "80° and 80°", "40° and 80°"],
        correctAnswer: "40° and 40°",
        explanation: "In an isosceles triangle, two angles are equal. If one angle is 100°, then 100° + x + x = 180° → 2x = 80° → x = 40°. 📐",
        wrongAnswerExplanations: {
            "40° and 140°": "The sum would be 100° + 40° + 140° = 280°, which exceeds 180°.",
            "80° and 80°": "The sum would be 100° + 80° + 80° = 260°, which exceeds 180°.",
            "40° and 80°": "The sum would be 100° + 40° + 80° = 220°, which exceeds 180°, and an isosceles triangle must have two equal angles."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch5_t1_qm8',
        type: "mcq",
        question: "Which of these is NOT a property of a rhombus?",
        options: [
            "All sides are equal",
            "Diagonals bisect each other",
            "Diagonals are equal in length",
            "Diagonals bisect the angles"
        ],
        correctAnswer: "Diagonals are equal in length",
        explanation: "In a rhombus, diagonals are not equal unless it's also a square. Diagonals bisect each other at right angles. ❌",
        wrongAnswerExplanations: {
            "All sides are equal": "This is true. By definition, a rhombus has all sides equal.",
            "Diagonals bisect each other": "This is true. The diagonals of a rhombus bisect each other.",
            "Diagonals bisect the angles": "This is true. The diagonals of a rhombus bisect the angles."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch5_t1_qm9',
        type: "mcq",
        question: "A triangle has angles in the ratio 2:3:4. What are the measures of these angles?",
        options: ["20°, 30°, 40°", "30°, 45°, 60°", "40°, 60°, 80°", "45°, 60°, 75°"],
        correctAnswer: "40°, 60°, 80°",
        explanation: "If x is the scale factor, then 2x + 3x + 4x = 180° → 9x = 180° → x = 20°. So angles are 40°, 60°, 80°. ✨",
        wrongAnswerExplanations: {
            "20°, 30°, 40°": "The sum is only 90°, not 180°.",
            "30°, 45°, 60°": "The sum is only 135°, not 180°, and the ratio is not 2:3:4.",
            "45°, 60°, 75°": "The ratio is not 2:3:4."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch5_t1_qm10',
        type: "mcq",
        question: "If the diagonals of a quadrilateral bisect each other, the quadrilateral must be a:",
        options: ["Trapezium", "Parallelogram", "Rhombus", "Kite"],
        correctAnswer: "Parallelogram",
        explanation: "When diagonals bisect each other, the quadrilateral is always a parallelogram. This is a defining property! ⬱",
        wrongAnswerExplanations: {
            "Trapezium": "In a trapezium, diagonals generally don't bisect each other.",
            "Rhombus": "A rhombus is a special case of a parallelogram. The broader answer is parallelogram.",
            "Kite": "In a kite, diagonals intersect but don't necessarily bisect each other."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch5_t1_qm11',
        type: "mcq",
        question: "Which statement about a rectangle is TRUE?",
        options: [
            "All sides are equal",
            "Diagonals bisect each other at right angles",
            "Diagonals are equal in length",
            "Adjacent sides are equal"
        ],
        correctAnswer: "Diagonals are equal in length",
        explanation: "In a rectangle, the diagonals are equal in length. This helps distinguish it from other parallelograms! ✅",
        wrongAnswerExplanations: {
            "All sides are equal": "This is true only for a square, not for all rectangles.",
            "Diagonals bisect each other at right angles": "This is true for rhombuses, not necessarily for rectangles.",
            "Adjacent sides are equal": "This is true only for squares, not for all rectangles."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch5_t1_qm12',
        type: "mcq",
        question: "If two angles of a triangle measure 65° and 55°, which type of triangle is it based on angles?",
        options: ["Acute", "Right", "Obtuse", "Equiangular"],
        correctAnswer: "Acute",
        explanation: "The third angle is 180° - (65° + 55°) = 60°. All angles are less than 90°, making it an acute triangle. 📐",
        wrongAnswerExplanations: {
            "Right": "A right triangle has one angle equal to 90°, which isn't the case here.",
            "Obtuse": "An obtuse triangle has one angle greater than 90°, which isn't the case here.",
            "Equiangular": "An equiangular triangle has all angles equal (60°), which isn't the case here."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch5_t1_qm13',
        type: "mcq",
        question: "What is the relationship between a square and a rhombus?",
        options: [
            "A square is always a rhombus",
            "A rhombus is always a square",
            "A square and a rhombus are the same",
            "A square and a rhombus have no special relationship"
        ],
        correctAnswer: "A square is always a rhombus",
        explanation: "A square is a special type of rhombus where all angles are 90°. Every square is a rhombus, but not vice versa. 🟦",
        wrongAnswerExplanations: {
            "A rhombus is always a square": "A rhombus doesn't necessarily have 90° angles, so it's not always a square.",
            "A square and a rhombus are the same": "They're not the same. A square has additional properties that a general rhombus doesn't.",
            "A square and a rhombus have no special relationship": "They do have a relationship. A square is a special case of a rhombus."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch5_t1_qm14',
        type: "mcq",
        question: "Which of these can be used to uniquely determine a triangle?",
        options: [
            "Three angles",
            "Two sides and an angle",
            "Three sides",
            "Two angles and a non-included side"
        ],
        correctAnswer: "Three sides",
        explanation: "Three sides uniquely determine a triangle. This is known as the SSS (Side-Side-Side) congruence rule. 📏",
        wrongAnswerExplanations: {
            "Three angles": "Different triangles can have the same three angles but different sizes.",
            "Two sides and an angle": "This may not uniquely determine a triangle unless it's the included angle (SAS).",
            "Two angles and a non-included side": "This may not uniquely determine a triangle."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch5_t1_qm15',
        type: "mcq",
        question: "Which quadrilateral has diagonals that bisect each other at right angles?",
        options: ["Rectangle", "Parallelogram", "Rhombus", "Trapezium"],
        correctAnswer: "Rhombus",
        explanation: "In a rhombus, the diagonals bisect each other at right angles. This includes squares, which are special rhombuses. 🔶",
        wrongAnswerExplanations: {
            "Rectangle": "In a rectangle, diagonals bisect each other but not at right angles (unless it's a square).",
            "Parallelogram": "In a parallelogram, diagonals bisect each other but not necessarily at right angles.",
            "Trapezium": "In a trapezium, diagonals don't generally bisect each other."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch5_t1_qm16',
        type: "mcq",
        question: "In which type of triangle are all the medians equal?",
        options: ["Right triangle", "Isosceles triangle", "Equilateral triangle", "Obtuse triangle"],
        correctAnswer: "Equilateral triangle",
        explanation: "In an equilateral triangle, all medians have equal length due to the symmetry of the shape. ✨",
        wrongAnswerExplanations: {
            "Right triangle": "Medians in a right triangle generally have different lengths.",
            "Isosceles triangle": "Only two medians are equal in an isosceles triangle.",
            "Obtuse triangle": "Medians in an obtuse triangle generally have different lengths."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch5_t1_qm17',
        type: "mcq",
        question: "Which of these statements about kites is TRUE?",
        options: [
            "Opposite sides are parallel",
            "All angles are equal",
            "One diagonal bisects the other",
            "Diagonals are equal in length"
        ],
        correctAnswer: "One diagonal bisects the other",
        explanation: "In a kite, one diagonal bisects the other diagonal at right angles. The diagonals are generally not equal. 🪁",
        wrongAnswerExplanations: {
            "Opposite sides are parallel": "In a kite, opposite sides are not necessarily parallel.",
            "All angles are equal": "A kite generally has two pairs of equal angles, but not all four angles are equal.",
            "Diagonals are equal in length": "The diagonals of a kite are generally not equal in length."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch5_t1_qm18',
        type: "mcq",
        question: "What is the minimum number of acute angles in a quadrilateral?",
        options: ["0", "1", "2", "3"],
        correctAnswer: "2",
        explanation: "A quadrilateral must have at least 2 acute angles. Try drawing quadrilaterals - you'll always find at least two acute angles! 📐",
        wrongAnswerExplanations: {
            "0": "It's impossible to have a quadrilateral with no acute angles.",
            "1": "It's impossible to have a quadrilateral with only one acute angle.",
            "3": "A quadrilateral can have just 2 acute angles, so 3 is not the minimum."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch5_t1_qm19',
        type: "mcq",
        question: "In a parallelogram ABCD, if angle A = 70°, what is angle C?",
        options: ["70°", "110°", "70° or 110°", "Cannot be determined"],
        correctAnswer: "70°",
        explanation: "In a parallelogram, opposite angles are equal. So angle C = angle A = 70°. ⬱",
        wrongAnswerExplanations: {
            "110°": "110° would be the measure of angles B and D (supplementary to A and C).",
            "70° or 110°": "It's definitely 70° since opposite angles are equal in a parallelogram.",
            "Cannot be determined": "It can be determined. Opposite angles in a parallelogram are equal."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch5_t1_qm20',
        type: "mcq",
        question: "If a triangle has sides of lengths 7 cm, 7 cm, and 10 cm, which type of triangle is it?",
        options: ["Equilateral", "Isosceles", "Scalene", "Right-angled"],
        correctAnswer: "Isosceles",
        explanation: "An isosceles triangle has exactly two sides of equal length. Here, two sides are 7 cm each. 🔻",
        wrongAnswerExplanations: {
            "Equilateral": "An equilateral triangle has all three sides equal, but here only two sides are equal.",
            "Scalene": "A scalene triangle has all three sides different, but here two sides are equal.",
            "Right-angled": "This triangle isn't right-angled. Using the Pythagorean theorem: 7² + 7² = 98, but 10² = 100."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    }
];
