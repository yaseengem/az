// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 7\Chapter10\Topic2\quiz_easy.ts
import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: "cl7_ch10_t2_qe1",
        type: "mcq",
        question: "Which instrument is essential for constructing parallel lines?",
        options: ["Ruler", "Compass", "Set square", "Protractor"],
        correctAnswer: "Ruler",
        explanation: "A ruler is essential for drawing straight lines needed in parallel line construction. 📏",
        wrongAnswerExplanations: {
            "Compass": "A compass is used for drawing arcs, not as the primary tool for parallel lines.",
            "Set square": "While helpful, a ruler is more essential for the basic construction.",
            "Protractor": "Protractors measure angles but aren't essential for basic parallel lines."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: "cl7_ch10_t2_qe2",
        type: "mcq",
        question: "What is the definition of parallel lines?",
        options: ["Lines that never meet", "Lines that meet at 90°", "Lines that meet at one point", "Lines that form a triangle"],
        correctAnswer: "Lines that never meet",
        explanation: "Parallel lines maintain the same distance between them and never intersect. ∥",
        wrongAnswerExplanations: {
            "Lines that meet at 90°": "These are perpendicular lines, not parallel lines.",
            "Lines that meet at one point": "These are intersecting lines, not parallel lines.",
            "Lines that form a triangle": "Lines forming a triangle must intersect, so they can't be parallel."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: "cl7_ch10_t2_qe3",
        type: "mcq",
        question: "When constructing a line parallel to line l through point P, what is the first step?",
        options: ["Draw line l", "Mark point P", "Draw an arc from P", "Measure a 60° angle"],
        correctAnswer: "Mark point P",
        explanation: "First mark point P through which the parallel line will pass. 📌",
        wrongAnswerExplanations: {
            "Draw line l": "Line l is already given in the problem.",
            "Draw an arc from P": "This comes after identifying point P and line l.",
            "Measure a 60° angle": "This is not required for constructing a parallel line."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: "cl7_ch10_t2_qe4",
        type: "mcq",
        question: "If two lines are parallel, what is the measure of corresponding angles?",
        options: ["Always equal", "Always 90°", "Always supplementary", "Always complementary"],
        correctAnswer: "Always equal",
        explanation: "Corresponding angles formed by parallel lines and a transversal are always equal. ≡",
        wrongAnswerExplanations: {
            "Always 90°": "Corresponding angles can be any measure, not necessarily 90°.",
            "Always supplementary": "Supplementary angles sum to 180°, but corresponding angles are equal.",
            "Always complementary": "Complementary angles sum to 90°, but corresponding angles are equal."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: "cl7_ch10_t2_qe5",
        type: "mcq",
        question: "In which of these real-world examples would you find parallel lines?",
        options: ["Railway tracks", "Spokes of a bicycle wheel", "Roads meeting at a roundabout", "Rays of light from a flashlight"],
        correctAnswer: "Railway tracks",
        explanation: "Railway tracks are designed to be parallel to ensure trains move in a straight path. 🚂",
        wrongAnswerExplanations: {
            "Spokes of a bicycle wheel": "Spokes meet at the hub, so they aren't parallel.",
            "Roads meeting at a roundabout": "Roads intersect at a roundabout, not parallel.",
            "Rays of light from a flashlight": "Light rays spread out from a source, not parallel."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: "cl7_ch10_t2_qe6",
        type: "mcq",
        question: "What is true about the distance between two parallel lines?",
        options: ["It remains constant", "It gradually increases", "It gradually decreases", "It varies randomly"],
        correctAnswer: "It remains constant",
        explanation: "The perpendicular distance between parallel lines remains constant at all points. ↔️",
        wrongAnswerExplanations: {
            "It gradually increases": "This would mean the lines are not parallel but diverging.",
            "It gradually decreases": "This would mean the lines are not parallel but converging.",
            "It varies randomly": "Parallel lines maintain consistent distance by definition."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: "cl7_ch10_t2_qe7",
        type: "mcq",
        question: "Which geometric construction method is used to create parallel lines?",
        options: ["Copying angles", "Bisecting angles", "Trisecting angles", "Doubling angles"],
        correctAnswer: "Copying angles",
        explanation: "We create a parallel line by copying the angle that makes a line with the transversal. 📐",
        wrongAnswerExplanations: {
            "Bisecting angles": "This divides an angle into two equal parts, not used for parallel lines.",
            "Trisecting angles": "This divides an angle into three equal parts, not for parallel lines.",
            "Doubling angles": "This is not a standard geometric construction technique."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: "cl7_ch10_t2_qe8",
        type: "mcq",
        question: "Which angle is equal to the corresponding angle when a transversal crosses two parallel lines?",
        options: ["Alternate interior angle", "Vertical angle", "Adjacent angle", "Reflex angle"],
        correctAnswer: "Alternate interior angle",
        explanation: "Both corresponding angles and alternate interior angles are equal when lines are parallel. 🔄",
        wrongAnswerExplanations: {
            "Vertical angle": "Vertical angles are always equal regardless of parallel lines.",
            "Adjacent angle": "Adjacent angles are supplementary, not equal to corresponding angles.",
            "Reflex angle": "Reflex angles are greater than 180°, not related to corresponding angles."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: "cl7_ch10_t2_qe9",
        type: "mcq",
        question: "What is the symbol used to represent parallel lines?",
        options: ["∥", "⊥", "≅", "≠"],
        correctAnswer: "∥",
        explanation: "The symbol ∥ is used to indicate that two lines are parallel. ∥",
        wrongAnswerExplanations: {
            "⊥": "This symbol represents perpendicular lines.",
            "≅": "This symbol represents congruence.",
            "≠": "This symbol represents inequality."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: "cl7_ch10_t2_qe10",
        type: "mcq",
        question: "When a transversal crosses two parallel lines, what is the relationship between alternate interior angles?",
        options: ["Equal", "Supplementary", "Complementary", "No specific relationship"],
        correctAnswer: "Equal",
        explanation: "Alternate interior angles are equal when two parallel lines are cut by a transversal. ≡",
        wrongAnswerExplanations: {
            "Supplementary": "Adjacent angles are supplementary, not alternate interior angles.",
            "Complementary": "Alternate interior angles sum to any value, not necessarily 90°.",
            "No specific relationship": "There is a definite relationship: they are equal."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: "cl7_ch10_t2_qe11",
        type: "mcq",
        question: "To construct a line parallel to line l through point P, which angle do we need to copy?",
        options: ["The angle formed by the transversal and line l", "Any angle", "A right angle", "A 45° angle"],
        correctAnswer: "The angle formed by the transversal and line l",
        explanation: "We copy the angle between the transversal and line l to ensure parallel construction. 📐",
        wrongAnswerExplanations: {
            "Any angle": "We need a specific angle to ensure parallelism.",
            "A right angle": "Parallel lines don't need to form right angles with a transversal.",
            "A 45° angle": "The angle doesn't need to be 45° specifically."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: "cl7_ch10_t2_qe12",
        type: "mcq",
        question: "If line m is parallel to line n, and line n is parallel to line p, what can we say about lines m and p?",
        options: ["m is parallel to p", "m is perpendicular to p", "m intersects p", "We cannot determine"],
        correctAnswer: "m is parallel to p",
        explanation: "Parallel lines follow the transitive property: if m∥n and n∥p, then m∥p. ∥",
        wrongAnswerExplanations: {
            "m is perpendicular to p": "Parallel relationships don't create perpendicular ones.",
            "m intersects p": "If both are parallel to n, they must be parallel to each other.",
            "We cannot determine": "We can determine they're parallel using the transitive property."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: "cl7_ch10_t2_qe13",
        type: "mcq",
        question: "What happens to the distance between two lines if they are not parallel?",
        options: ["It changes", "It remains constant", "It becomes negative", "It becomes zero at some point"],
        correctAnswer: "It changes",
        explanation: "Non-parallel lines have varying distance as they either converge or diverge. 📏",
        wrongAnswerExplanations: {
            "It remains constant": "Only parallel lines maintain constant distance.",
            "It becomes negative": "Distance is always positive, never negative.",
            "It becomes zero at some point": "This is true but 'it changes' is more accurate."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: "cl7_ch10_t2_qe14",
        type: "mcq",
        question: "Which property is NOT used in the construction of parallel lines?",
        options: ["Circle properties", "Angle properties", "Distance properties", "Area properties"],
        correctAnswer: "Area properties",
        explanation: "Area properties aren't relevant to parallel line construction, which uses angles. 📊",
        wrongAnswerExplanations: {
            "Circle properties": "Arcs from compass are used in construction.",
            "Angle properties": "Equal angles ensure parallel lines.",
            "Distance properties": "Equal distances can be used in some construction methods."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: "cl7_ch10_t2_qe15",
        type: "mcq",
        question: "How many lines can be drawn parallel to a given line through a point not on the line?",
        options: ["Exactly one", "Two", "Infinite", "None"],
        correctAnswer: "Exactly one",
        explanation: "Through a point not on a line, exactly one parallel line can be drawn to that line. ➡️",
        wrongAnswerExplanations: {
            "Two": "Only one line can be parallel to a given line through a specific point.",
            "Infinite": "Multiple parallel lines would need to occupy the same space.",
            "None": "It's always possible to construct a parallel line through any point."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: "cl7_ch10_t2_qe16",
        type: "mcq",
        question: "In the construction of a parallel line, what is the purpose of drawing arcs?",
        options: ["To copy angles accurately", "To measure distances", "To create perpendicular lines", "To bisect lines"],
        correctAnswer: "To copy angles accurately",
        explanation: "Arcs help copy angles precisely to ensure the constructed line is truly parallel. 🔄",
        wrongAnswerExplanations: {
            "To measure distances": "While arcs set distances, in parallel lines they're for angle copying.",
            "To create perpendicular lines": "Different construction is used for perpendicular lines.",
            "To bisect lines": "Bisection is a different geometric construction."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: "cl7_ch10_t2_qe17",
        type: "mcq",
        question: "Parallel lines constructed using a compass and ruler are based on which geometric principle?",
        options: ["Corresponding angles", "Complementary angles", "Supplementary angles", "Vertical angles"],
        correctAnswer: "Corresponding angles",
        explanation: "Construction replicates corresponding angles which are equal for parallel lines. ≡",
        wrongAnswerExplanations: {
            "Complementary angles": "These sum to 90° but aren't the basis for parallel construction.",
            "Supplementary angles": "These sum to 180° but aren't the basis for parallel construction.",
            "Vertical angles": "These are always equal and not specific to parallel lines."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: "cl7_ch10_t2_qe18",
        type: "mcq",
        question: "Which of these is NOT a step in constructing a line parallel to line l through point P?",
        options: ["Measuring the length of line l", "Drawing a transversal through P", "Using a compass to copy an angle", "Drawing arcs to transfer measurements"],
        correctAnswer: "Measuring the length of line l",
        explanation: "The length of the original line is irrelevant to constructing a parallel line. 📏",
        wrongAnswerExplanations: {
            "Drawing a transversal through P": "This is a necessary step in the construction.",
            "Using a compass to copy an angle": "This is essential for accurate angle copying.",
            "Drawing arcs to transfer measurements": "Arcs help transfer angle measurements accurately."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: "cl7_ch10_t2_qe19",
        type: "mcq",
        question: "What is a transversal in the context of parallel lines?",
        options: ["A line that intersects two or more lines", "A line parallel to other lines", "The distance between parallel lines", "A point where lines meet"],
        correctAnswer: "A line that intersects two or more lines",
        explanation: "A transversal is any line that cuts across (intersects) two or more lines. ↗️",
        wrongAnswerExplanations: {
            "A line parallel to other lines": "A transversal must intersect the lines, not be parallel.",
            "The distance between parallel lines": "This is a measurement, not a line.",
            "A point where lines meet": "This is an intersection point, not a transversal line."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: "cl7_ch10_t2_qe20",
        type: "mcq",
        question: "Why is it important to maintain the same compass width when constructing parallel lines?",
        options: ["To ensure equal angles", "To make lines straight", "To save time", "To use less pencil lead"],
        correctAnswer: "To ensure equal angles",
        explanation: "Consistent compass width ensures angles are copied accurately for true parallel lines. 📐",
        wrongAnswerExplanations: {
            "To make lines straight": "Straightness comes from using a ruler, not compass width.",
            "To save time": "Accuracy is more important than time in geometric constructions.",
            "To use less pencil lead": "Geometric precision is the goal, not conservation of materials."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    }
];
