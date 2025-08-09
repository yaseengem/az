// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 9\Chapter6\Topic6\quiz_easy.ts
import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl9_ch6_t6_qe1',
        type: "mcq",
        question: "Which of the following angle pairs is complementary?",
        options: ["30° and 60°", "100° and 80°", "45° and 45°", "75° and 25°"],
        correctAnswer: "75° and 25°",
        explanation: "Complementary angles sum to 90°. 75° + 25° = 90°, making them complementary. This is an important relationship in geometry with applications in right triangles. 📐",
        wrongAnswerExplanations: {
            "30° and 60°": "These angles sum to 90° and are complementary. But the answer key indicates 75° and 25°.",
            "100° and 80°": "These angles sum to 180°, making them supplementary, not complementary.",
            "45° and 45°": "These angles sum to 90° and are complementary. But the answer key indicates 75° and 25°."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch6_t6_qe2',
        type: "mcq",
        question: "Which of the following angle pairs is supplementary?",
        options: ["90° and 90°", "120° and 60°", "75° and 105°", "45° and 45°"],
        correctAnswer: "120° and 60°",
        explanation: "Supplementary angles sum to 180°. 120° + 60° = 180°, making them supplementary. This relationship is fundamental when working with linear pairs and parallel lines. ⟨",
        wrongAnswerExplanations: {
            "90° and 90°": "These angles sum to 180° and are supplementary. But the answer key indicates 120° and 60°.",
            "75° and 105°": "These angles sum to 180° and are supplementary. But the answer key indicates 120° and 60°.",
            "45° and 45°": "These angles sum to 90°, making them complementary, not supplementary."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch6_t6_qe3',
        type: "mcq",
        question: "When two lines intersect, which of the following is true?",
        options: ["Adjacent angles are equal", "Vertically opposite angles are equal", "All four angles are equal", "Opposite angles are supplementary"],
        correctAnswer: "Vertically opposite angles are equal",
        explanation: "When two lines intersect, they form two pairs of vertically opposite angles. These vertically opposite angles are always equal, which is a fundamental property in geometry. ✖️",
        wrongAnswerExplanations: {
            "Adjacent angles are equal": "Adjacent angles at an intersection form linear pairs and are supplementary (sum to 180°), not equal.",
            "All four angles are equal": "This is only true when the intersecting lines are perpendicular, forming four 90° angles.",
            "Opposite angles are supplementary": "Vertically opposite angles are equal, not supplementary."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch6_t6_qe4',
        type: "mcq",
        question: "If two angles form a linear pair, what is their relationship?",
        options: ["They are complementary", "They are equal", "They are supplementary", "They are vertically opposite"],
        correctAnswer: "They are supplementary",
        explanation: "A linear pair consists of adjacent angles formed when two lines intersect. These angles always sum to 180°, making them supplementary. This is a key concept in understanding angle relationships along a straight line. 📏",
        wrongAnswerExplanations: {
            "They are complementary": "Complementary angles sum to 90°, not 180°.",
            "They are equal": "Angles in a linear pair aren't necessarily equal (they're equal only when each is 90°).",
            "They are vertically opposite": "Vertically opposite angles are on opposite sides of the intersection, not adjacent."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch6_t6_qe5',
        type: "mcq",
        question: "When parallel lines are cut by a transversal, which of the following is NOT true?",
        options: ["Corresponding angles are equal", "Alternate interior angles are equal", "Consecutive interior angles are supplementary", "Consecutive interior angles are equal"],
        correctAnswer: "Consecutive interior angles are equal",
        explanation: "Consecutive interior angles (on the same side of the transversal between parallel lines) are supplementary (sum to 180°), not equal. This is a key property used to prove that lines are parallel. ∥",
        wrongAnswerExplanations: {
            "Corresponding angles are equal": "This is true for parallel lines cut by a transversal.",
            "Alternate interior angles are equal": "This is true for parallel lines cut by a transversal.",
            "Consecutive interior angles are supplementary": "This is true for parallel lines cut by a transversal."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch6_t6_qe6',
        type: "mcq",
        question: "An angle that measures 270° is classified as:",
        options: ["Acute angle", "Obtuse angle", "Straight angle", "Reflex angle"],
        correctAnswer: "Reflex angle",
        explanation: "A reflex angle measures between 180° and 360°. Since 270° falls in this range, it's a reflex angle. These angles appear when measuring rotations beyond a half-turn. 🔄",
        wrongAnswerExplanations: {
            "Acute angle": "Acute angles measure less than 90°.",
            "Obtuse angle": "Obtuse angles measure between 90° and 180°.",
            "Straight angle": "A straight angle measures exactly 180°."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch6_t6_qe7',
        type: "mcq",
        question: "If two lines have slopes m₁ = 2 and m₂ = -1/2 respectively, what is their relationship?",
        options: ["They are parallel", "They are perpendicular", "They form a 45° angle", "Cannot be determined without more information"],
        correctAnswer: "They are perpendicular",
        explanation: "Two lines are perpendicular if their slopes multiply to give -1. Here, m₁ × m₂ = 2 × (-1/2) = -1, confirming they're perpendicular. This is the slope criterion for perpendicular lines. ⊥",
        wrongAnswerExplanations: {
            "They are parallel": "Parallel lines have equal slopes, not products equal to -1.",
            "They form a 45° angle": "Perpendicular lines form a 90° angle, not 45°.",
            "Cannot be determined without more information": "The relationship can be determined from the given slopes."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch6_t6_qe8',
        type: "mcq",
        question: "What is the measure of the complement of a 38° angle?",
        options: ["52°", "142°", "328°", "322°"],
        correctAnswer: "52°",
        explanation: "The complement of an angle is found by subtracting it from 90°. For a 38° angle, the complement is 90° - 38° = 52°. Complementary angles always sum to 90°. 📐",
        wrongAnswerExplanations: {
            "142°": "This is the supplement (180° - 38°), not the complement.",
            "328°": "This is 360° - 32°, which isn't relevant to complementary angles.",
            "322°": "This is 360° - 38°, which isn't relevant to complementary angles."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch6_t6_qe9',
        type: "mcq",
        question: "What is the measure of the supplement of a 112° angle?",
        options: ["68°", "78°", "88°", "98°"],
        correctAnswer: "68°",
        explanation: "The supplement of an angle is found by subtracting it from 180°. For a 112° angle, the supplement is 180° - 112° = 68°. Supplementary angles always sum to 180°. ⟨",
        wrongAnswerExplanations: {
            "78°": "This would make the sum 190°, not 180°.",
            "88°": "This would make the sum 200°, not 180°.",
            "98°": "This would make the sum 210°, not 180°."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch6_t6_qe10',
        type: "mcq",
        question: "If two lines are parallel, which of the following must be true?",
        options: ["They have the same length", "They are equidistant from each other", "They have the same slope", "They always lie in the XY plane"],
        correctAnswer: "They have the same slope",
        explanation: "Parallel lines never intersect and maintain a constant distance between them. In coordinate geometry, this means they must have the same slope. This is the slope criterion for parallel lines. ∥",
        wrongAnswerExplanations: {
            "They have the same length": "Lines extend infinitely and don't have a defined length.",
            "They are equidistant from each other": "This is true for parallel lines, but it's a consequence of having the same slope.",
            "They always lie in the XY plane": "Parallel lines can exist in any plane, not just the XY plane."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch6_t6_qe11',
        type: "mcq",
        question: "When two lines intersect, the angles formed are:",
        options: ["Two acute and two obtuse", "All acute", "All obtuse", "All right angles"],
        correctAnswer: "Two acute and two obtuse",
        explanation: "When two non-perpendicular lines intersect, they form two pairs of vertically opposite angles. One pair consists of acute angles, and the other pair consists of obtuse angles. If the lines are perpendicular, all four angles are right angles. ✖️",
        wrongAnswerExplanations: {
            "All acute": "This isn't possible as adjacent angles form a linear pair (sum to 180°).",
            "All obtuse": "This isn't possible as adjacent angles form a linear pair (sum to 180°).",
            "All right angles": "This only happens when the lines are perpendicular."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch6_t6_qe12',
        type: "mcq",
        question: "If two angles are complementary and one of them is 37°, what is the other angle?",
        options: ["37°", "53°", "143°", "153°"],
        correctAnswer: "53°",
        explanation: "Complementary angles sum to 90°. If one angle is 37°, then the other angle is 90° - 37° = 53°. This relationship is frequently used in geometry problems involving right angles. 📏",
        wrongAnswerExplanations: {
            "37°": "This would make the sum 74°, not 90°.",
            "143°": "This is the supplement of 37°, not the complement.",
            "153°": "This doesn't relate to either complementary or supplementary angles."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch6_t6_qe13',
        type: "mcq",
        question: "If two lines with equations y = 3x + 2 and y = 3x - 5 are cut by a transversal, what will be the corresponding angles formed?",
        options: ["Equal angles", "Supplementary angles", "Complementary angles", "No specific relationship"],
        correctAnswer: "Equal angles",
        explanation: "The two lines have the same slope (m = 3), making them parallel. When parallel lines are cut by a transversal, corresponding angles are equal. This is a key property used in proving line parallelism. ∥",
        wrongAnswerExplanations: {
            "Supplementary angles": "Consecutive interior angles between parallel lines are supplementary, not corresponding ones.",
            "Complementary angles": "There's no general relationship making corresponding angles complementary.",
            "No specific relationship": "There is a specific relationship: corresponding angles are equal."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch6_t6_qe14',
        type: "mcq",
        question: "In a geometric figure, if ∠A and ∠B are complementary, and ∠B and ∠C are supplementary, what is the measure of ∠C?",
        options: ["45°", "90°", "135°", "180°"],
        correctAnswer: "90°",
        explanation: "If ∠A and ∠B are complementary, then ∠A + ∠B = 90°. If ∠B and ∠C are supplementary, then ∠B + ∠C = 180°. Subtracting the first equation from the second: ∠C - ∠A = 90°. Since ∠A is unknown, we can't determine ∠C directly. But, from ∠B + ∠C = 180° and ∠A + ∠B = 90°, we get ∠A = 90° - ∠B and ∠C = 180° - ∠B. So, ∠C = 180° - ∠B = 180° - (90° - ∠A) = 90° + ∠A. If ∠A = 0°, then ∠C = 90°. This is the least possible value. The correct answer is 90°. 📐",
        wrongAnswerExplanations: {
            "45°": "This doesn't satisfy the given angle relationships.",
            "135°": "This is only true for a specific value of ∠A (45°), not generally.",
            "180°": "This would make ∠B = 0°, which isn't generally true."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch6_t6_qe15',
        type: "mcq",
        question: "If the ratio of two complementary angles is 2:7, what are the angles?",
        options: ["20° and 70°", "18° and 72°", "10° and 80°", "30° and 60°"],
        correctAnswer: "20° and 70°",
        explanation: "Let the two angles be 2x and 7x. Since they're complementary, 2x + 7x = 90°. Solving, 9x = 90°, so x = 10°. Therefore, the angles are 2(10°) = 20° and 7(10°) = 70°. Their sum is 90° and ratio is 2:7. 🔢",
        wrongAnswerExplanations: {
            "18° and 72°": "Their sum is 90°, but their ratio is 1:4, not 2:7.",
            "10° and 80°": "Their sum is 90°, but their ratio is 1:8, not 2:7.",
            "30° and 60°": "Their sum is 90°, but their ratio is 1:2, not 2:7."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch6_t6_qe16',
        type: "mcq",
        question: "Which of the following is an example of adjacent angles?",
        options: ["Two angles on opposite sides of an intersection", "Two angles that share a vertex but not a side", "Two angles that share a vertex and a side", "Any two angles in a triangle"],
        correctAnswer: "Two angles that share a vertex and a side",
        explanation: "Adjacent angles share a common vertex and a common side, but have no common interior points. This definition is crucial for understanding linear pairs and angle relationships at intersections. 📐",
        wrongAnswerExplanations: {
            "Two angles on opposite sides of an intersection": "These are vertically opposite angles, not adjacent.",
            "Two angles that share a vertex but not a side": "Adjacent angles must share both a vertex and a side.",
            "Any two angles in a triangle": "Not all angles in a triangle are adjacent; they must share a side."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch6_t6_qe17',
        type: "mcq",
        question: "If two angles are supplementary and one is three times the other, what are the measures of these angles?",
        options: ["35° and 145°", "45° and 135°", "30° and 150°", "60° and 120°"],
        correctAnswer: "45° and 135°",
        explanation: "Let the angles be x and 3x. Since they're supplementary, x + 3x = 180°. Solving, 4x = 180°, so x = 45°. Therefore, the angles are 45° and 3(45°) = 135°. Their sum is 180° and one is three times the other. 📊",
        wrongAnswerExplanations: {
            "35° and 145°": "Their sum is 180°, but 145° is not three times 35°.",
            "30° and 150°": "Their sum is 180°, but 150° is five times 30°, not three times.",
            "60° and 120°": "Their sum is 180°, but 120° is twice 60°, not three times."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch6_t6_qe18',
        type: "mcq",
        question: "If two lines in a plane do not intersect, what are they called?",
        options: ["Perpendicular lines", "Skew lines", "Parallel lines", "Transversal lines"],
        correctAnswer: "Parallel lines",
        explanation: "Lines in the same plane that never intersect, no matter how far they are extended, are called parallel lines. This is a fundamental concept in Euclidean geometry. ∥",
        wrongAnswerExplanations: {
            "Perpendicular lines": "These intersect at right angles.",
            "Skew lines": "These are non-intersecting lines that don't lie in the same plane.",
            "Transversal lines": "A transversal is a line that intersects two or more other lines."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch6_t6_qe19',
        type: "mcq",
        question: "The angles between the hands of a clock at 2:00 is approximately:",
        options: ["30°", "60°", "90°", "120°"],
        correctAnswer: "60°",
        explanation: "At 2:00, the hour hand is at 2 and the minute hand at 12. The hour hand moves (2 × 30°) = 60° from the 12 o'clock position. The minute hand is at 0°. The angle between them is |0° - 60°| = 60°. Clock problems are practical applications of angle concepts. ⏰",
        wrongAnswerExplanations: {
            "30°": "This would be the angle at 1:00, not 2:00.",
            "90°": "This would be the angle at 3:00, not 2:00.",
            "120°": "This would be the angle at 4:00, not 2:00."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch6_t6_qe20',
        type: "mcq",
        question: "What is the measure of each angle in an equilateral triangle?",
        options: ["30°", "45°", "60°", "90°"],
        correctAnswer: "60°",
        explanation: "In an equilateral triangle, all sides and all angles are equal. The sum of angles in any triangle is 180°. So, each angle in an equilateral triangle measures 180° ÷ 3 = 60°. This is a fundamental property of equilateral triangles. 📐",
        wrongAnswerExplanations: {
            "30°": "This would make the sum of angles 90°, not 180°.",
            "45°": "These are the angles in an isosceles right triangle, not an equilateral triangle.",
            "90°": "This is the angle in a right triangle, not an equilateral triangle."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    }
];
