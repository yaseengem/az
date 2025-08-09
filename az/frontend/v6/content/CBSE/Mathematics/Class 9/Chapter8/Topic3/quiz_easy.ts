// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 9\Chapter8\Topic3\quiz_easy.ts
import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl9_ch8_t3_qe1',
        type: "mcq",
        question: "What is the sum of all interior angles in any quadrilateral?",
        options: ["180°", "270°", "360°", "540°"],
        correctAnswer: "360°",
        explanation: "The sum of interior angles in any quadrilateral is always 360°. This can be proven by dividing the quadrilateral into two triangles, each with angle sum of 180°. 📐",
        wrongAnswerExplanations: {
            "180°": "180° is the sum of angles in a triangle, not a quadrilateral.",
            "270°": "270° is not the sum of angles in any regular polygon.",
            "540°": "540° is the sum of angles in a hexagon, not a quadrilateral."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch8_t3_qe2',
        type: "mcq",
        question: "Which of the following is NOT a property of a parallelogram?",
        options: ["Opposite sides are parallel", "Diagonals bisect each other", "All angles are equal", "Opposite sides are equal"],
        correctAnswer: "All angles are equal",
        explanation: "In a parallelogram, opposite angles are equal, but all four angles are not necessarily equal. Only in a rectangle and square do all angles equal 90° each. ⬜",
        wrongAnswerExplanations: {
            "Opposite sides are parallel": "This is a defining property of a parallelogram.",
            "Diagonals bisect each other": "This is a true property of all parallelograms.",
            "Opposite sides are equal": "In a parallelogram, opposite sides are indeed equal in length."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch8_t3_qe3',
        type: "mcq",
        question: "In a parallelogram ABCD, if angle A = 70°, what is the measure of angle C?",
        options: ["70°", "110°", "180°", "290°"],
        correctAnswer: "70°",
        explanation: "In a parallelogram, opposite angles are equal. Since angle A = 70°, the opposite angle C must also equal 70°. 📏",
        wrongAnswerExplanations: {
            "110°": "110° would be the measure of the adjacent angles B or D, not the opposite angle C.",
            "180°": "180° is the sum of any two adjacent angles, not a single angle in a parallelogram.",
            "290°": "No angle in a quadrilateral can measure 290° as it exceeds 180°."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch8_t3_qe4',
        type: "mcq",
        question: "Which quadrilateral has all sides equal and all angles equal to 90°?",
        options: ["Rectangle", "Rhombus", "Square", "Kite"],
        correctAnswer: "Square",
        explanation: "A square is defined as a quadrilateral with all four sides equal (like a rhombus) and all four angles equal to 90° (like a rectangle). It combines properties of both shapes. 🟦",
        wrongAnswerExplanations: {
            "Rectangle": "A rectangle has all angles equal to 90°, but opposite sides (not all sides) are equal.",
            "Rhombus": "A rhombus has all sides equal, but its angles are not necessarily 90°.",
            "Kite": "A kite has two pairs of adjacent sides equal, but not all sides equal, and angles aren't all 90°."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch8_t3_qe5',
        type: "mcq",
        question: "What is the Mid-point Theorem related to?",
        options: ["Quadrilaterals", "Triangles", "Circles", "Prisms"],
        correctAnswer: "Triangles",
        explanation: "The Mid-point Theorem states that in a triangle, the line joining the midpoints of two sides is parallel to the third side and half its length. It specifically applies to triangles. 🔺",
        wrongAnswerExplanations: {
            "Quadrilaterals": "While the theorem has applications in quadrilaterals, it's fundamentally about triangles.",
            "Circles": "The Mid-point Theorem doesn't directly relate to circles but to triangles.",
            "Prisms": "The Mid-point Theorem is a 2D concept related to triangles, not 3D shapes like prisms."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch8_t3_qe6',
        type: "mcq",
        question: "What special type of parallelogram has diagonals that are equal in length?",
        options: ["Rhombus", "Square", "Rectangle", "Kite"],
        correctAnswer: "Rectangle",
        explanation: "In a rectangle, the diagonals are equal in length. This is one of the defining properties that distinguishes rectangles from other parallelograms. ⬜",
        wrongAnswerExplanations: {
            "Rhombus": "A rhombus has diagonals that bisect each other at right angles, but they are not necessarily equal in length.",
            "Square": "While a square does have equal diagonals, it is a special case of a rectangle, so 'Rectangle' is the more general answer.",
            "Kite": "In a kite, the diagonals are perpendicular but not necessarily equal in length."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch8_t3_qe7',
        type: "mcq",
        question: "In a rhombus, what is special about the diagonals?",
        options: ["They are equal in length", "They bisect each other", "They bisect each other at right angles", "They are parallel to the sides"],
        correctAnswer: "They bisect each other at right angles",
        explanation: "In a rhombus, the diagonals bisect each other at right angles (90°). This is a defining property that distinguishes rhombuses from other parallelograms. ◊",
        wrongAnswerExplanations: {
            "They are equal in length": "Diagonals of a rhombus are not necessarily equal; that's a property of rectangles.",
            "They bisect each other": "While true, this is a property of all parallelograms, not unique to rhombuses.",
            "They are parallel to the sides": "Diagonals cannot be parallel to sides in any quadrilateral."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch8_t3_qe8',
        type: "mcq",
        question: "What is a trapezium (also called a trapezoid)?",
        options: ["A quadrilateral with all sides equal", "A quadrilateral with one pair of parallel sides", "A quadrilateral with all angles equal", "A quadrilateral with no parallel sides"],
        correctAnswer: "A quadrilateral with one pair of parallel sides",
        explanation: "A trapezium (or trapezoid) is defined as a quadrilateral with exactly one pair of opposite sides parallel. The non-parallel sides can be of any length. 📏",
        wrongAnswerExplanations: {
            "A quadrilateral with all sides equal": "This describes a rhombus, not a trapezium.",
            "A quadrilateral with all angles equal": "This describes a rectangle, not a trapezium.",
            "A quadrilateral with no parallel sides": "This describes an irregular quadrilateral, not a trapezium."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch8_t3_qe9',
        type: "mcq",
        question: "What can we say about a quadrilateral if its diagonals bisect each other?",
        options: ["It is a rectangle", "It is a rhombus", "It is a parallelogram", "It is a square"],
        correctAnswer: "It is a parallelogram",
        explanation: "If the diagonals of a quadrilateral bisect each other, it is definitely a parallelogram. This is a key test to verify if a given quadrilateral is a parallelogram. ⬜",
        wrongAnswerExplanations: {
            "It is a rectangle": "While a rectangle's diagonals bisect each other, we need additional information (equal diagonals) to confirm it's a rectangle.",
            "It is a rhombus": "While a rhombus's diagonals bisect each other, we need additional information (perpendicular diagonals) to confirm it's a rhombus.",
            "It is a square": "We need much more information (equal sides, right angles) to confirm a quadrilateral is a square."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch8_t3_qe10',
        type: "mcq",
        question: "In a parallelogram ABCD, if angle A = 60°, what is angle B?",
        options: ["60°", "120°", "180°", "30°"],
        correctAnswer: "120°",
        explanation: "In a parallelogram, adjacent angles are supplementary (sum to 180°). Since angle A = 60°, the adjacent angle B must be 180° - 60° = 120°. 📐",
        wrongAnswerExplanations: {
            "60°": "Opposite angles are equal in a parallelogram, so angle C = 60°, not angle B.",
            "180°": "No single angle in a simple quadrilateral can be 180°.",
            "30°": "This value doesn't relate to the given information and doesn't fit parallelogram properties."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch8_t3_qe11',
        type: "mcq",
        question: "According to the Mid-point Theorem, if D is the midpoint of side AB and E is the midpoint of side AC in triangle ABC, what can we say about line DE?",
        options: ["DE ⊥ BC", "DE ∥ BC and DE = BC", "DE ∥ BC and DE = ½BC", "DE ∥ AC"],
        correctAnswer: "DE ∥ BC and DE = ½BC",
        explanation: "The Mid-point Theorem states that the line joining the midpoints of two sides of a triangle is parallel to the third side and equal to half its length. So DE ∥ BC and DE = ½BC. 🔍",
        wrongAnswerExplanations: {
            "DE ⊥ BC": "The Mid-point Theorem states DE is parallel to BC, not perpendicular.",
            "DE ∥ BC and DE = BC": "According to the Mid-point Theorem, DE equals half of BC, not the full length.",
            "DE ∥ AC": "DE connects points on AB and AC, so it cannot be parallel to AC."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch8_t3_qe12',
        type: "mcq",
        question: "Which quadrilateral has exactly one line of symmetry?",
        options: ["Square", "Rhombus", "Rectangle", "Kite"],
        correctAnswer: "Kite",
        explanation: "A kite has exactly one line of symmetry, which runs through its unequal angles. Squares and rectangles have multiple lines of symmetry, while a general parallelogram has none. 📏",
        wrongAnswerExplanations: {
            "Square": "A square has four lines of symmetry (two diagonals and two perpendicular bisectors of opposite sides).",
            "Rhombus": "A rhombus has two lines of symmetry (its diagonals).",
            "Rectangle": "A rectangle has two lines of symmetry (perpendicular bisectors of opposite sides)."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch8_t3_qe13',
        type: "mcq",
        question: "Which statement is NOT true about a square?",
        options: ["A square is a rhombus", "A square is a rectangle", "All squares are parallelograms", "All rectangles are squares"],
        correctAnswer: "All rectangles are squares",
        explanation: "Not all rectangles are squares. A rectangle needs to have all sides equal to be a square. Every square is a rectangle, but the converse isn't true. ⬜",
        wrongAnswerExplanations: {
            "A square is a rhombus": "This is true because a square has all sides equal, which is the definition of a rhombus.",
            "A square is a rectangle": "This is true because a square has all angles equal to 90°, which is the definition of a rectangle.",
            "All squares are parallelograms": "This is true because squares have opposite sides parallel, which defines parallelograms."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch8_t3_qe14',
        type: "mcq",
        question: "If ABCD is a square and E is the midpoint of side BC, what is the ratio of the area of triangle AED to the area of the square ABCD?",
        options: ["1:4", "1:8", "1:2", "1:6"],
        correctAnswer: "1:8",
        explanation: "In square ABCD, triangle AED has base BE = ½BC and height = AD = AB. Area of triangle AED = ½ × BE × AD = ½ × (½BC) × AB = ¼ × (½ × BC × AB) = ⅛ of the square's area. 📊",
        wrongAnswerExplanations: {
            "1:4": "This would be the ratio if E were not a midpoint but at location B or C.",
            "1:2": "This ratio is too large; the triangle takes up much less than half the square.",
            "1:6": "This is not the correct mathematical ratio based on the midpoint property."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch8_t3_qe15',
        type: "mcq",
        question: "Which quadrilateral has all sides of equal length but no right angles?",
        options: ["Rectangle", "Square", "Rhombus that is not a square", "Trapezium"],
        correctAnswer: "Rhombus that is not a square",
        explanation: "A rhombus is defined by having all sides equal. If it's not a square, then it doesn't have right angles. A square is a special case of a rhombus that has right angles. ◊",
        wrongAnswerExplanations: {
            "Rectangle": "A rectangle has right angles but only opposite sides are equal, not all sides.",
            "Square": "A square has all sides equal but also has four right angles.",
            "Trapezium": "A trapezium has only one pair of parallel sides and typically has sides of different lengths."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch8_t3_qe16',
        type: "mcq",
        question: "In parallelogram PQRS, if diagonal PR = 10 cm and diagonal QS = 8 cm, what shape is PQRS?",
        options: ["Definitely a rectangle", "Definitely a rhombus", "Definitely a square", "Just a parallelogram, not enough information for specifics"],
        correctAnswer: "Just a parallelogram, not enough information for specifics",
        explanation: "Only knowing the diagonal lengths doesn't tell us if it's a specific type of parallelogram. For a rectangle, diagonals must be equal. For a rhombus, they must be perpendicular. Neither is confirmed here. 📏",
        wrongAnswerExplanations: {
            "Definitely a rectangle": "In a rectangle, diagonals must be equal in length, but here PR ≠ QS.",
            "Definitely a rhombus": "We need to know if the diagonals are perpendicular, which isn't given.",
            "Definitely a square": "A square requires equal and perpendicular diagonals, neither of which is confirmed."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch8_t3_qe17',
        type: "mcq",
        question: "Which property must be true for any parallelogram?",
        options: ["Diagonals are equal", "All angles are 90°", "All sides are equal", "Opposite sides are parallel"],
        correctAnswer: "Opposite sides are parallel",
        explanation: "By definition, a parallelogram is a quadrilateral with opposite sides parallel. This is the fundamental defining property of all parallelograms. ⬜",
        wrongAnswerExplanations: {
            "Diagonals are equal": "This is a property of rectangles, not all parallelograms.",
            "All angles are 90°": "This is a property of rectangles, not all parallelograms.",
            "All sides are equal": "This is a property of rhombuses, not all parallelograms."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch8_t3_qe18',
        type: "mcq",
        question: "Which type of quadrilateral is a square also classified as?",
        options: ["Only a rhombus", "Only a rectangle", "Both rhombus and rectangle", "Neither rhombus nor rectangle"],
        correctAnswer: "Both rhombus and rectangle",
        explanation: "A square is both a rhombus (all sides equal) and a rectangle (all angles 90°). It inherits properties from both special quadrilaterals, making it the most specialized parallelogram. 🟦",
        wrongAnswerExplanations: {
            "Only a rhombus": "While a square is a rhombus, it is also a rectangle.",
            "Only a rectangle": "While a square is a rectangle, it is also a rhombus.",
            "Neither rhombus nor rectangle": "This is incorrect as a square satisfies the definitions of both shapes."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch8_t3_qe19',
        type: "mcq",
        question: "What is the converse of the Mid-point Theorem?",
        options: [
            "If a line joins the midpoints of two sides of a triangle, it is parallel to the third side",
            "If a line passes through the midpoint of one side of a triangle and is parallel to another side, then it bisects the third side",
            "The median of a triangle divides it into two equal areas",
            "The diagonals of a parallelogram bisect each other"
        ],
        correctAnswer: "If a line passes through the midpoint of one side of a triangle and is parallel to another side, then it bisects the third side",
        explanation: "The converse of the Mid-point Theorem states that if a line passes through the midpoint of one side of a triangle and is parallel to another side, then it bisects the third side. 🔍",
        wrongAnswerExplanations: {
            "If a line joins the midpoints of two sides of a triangle, it is parallel to the third side": "This is part of the original Mid-point Theorem, not its converse.",
            "The median of a triangle divides it into two equal areas": "This is a true statement about medians but not related to the Mid-point Theorem.",
            "The diagonals of a parallelogram bisect each other": "This is a property of parallelograms, not related to the Mid-point Theorem's converse."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch8_t3_qe20',
        type: "mcq",
        question: "In a quadrilateral, if all sides are equal and all angles are equal, what is the quadrilateral?",
        options: ["Rectangle", "Rhombus", "Square", "Kite"],
        correctAnswer: "Square",
        explanation: "A quadrilateral with all sides equal and all angles equal must be a square. The equal angles must be 90° each (totaling to 360°), and the equal sides define a regular quadrilateral. 🟦",
        wrongAnswerExplanations: {
            "Rectangle": "A rectangle has all angles equal but only opposite sides equal, not all sides.",
            "Rhombus": "A rhombus has all sides equal but only opposite angles equal, not all angles.",
            "Kite": "A kite has two pairs of adjacent sides equal but not all sides equal, and not all angles equal."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    }
];
