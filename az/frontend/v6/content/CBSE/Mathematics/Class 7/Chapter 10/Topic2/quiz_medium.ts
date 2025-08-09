// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 7\Chapter10\Topic2\quiz_medium.ts
import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: "cl7_ch10_t2_qm1",
        type: "mcq",
        question: "When constructing a line parallel to a given line through a point P, which of these angles must be equal?",
        options: ["Corresponding angles", "Complementary angles", "Obtuse angles", "Reflex angles"],
        correctAnswer: "Corresponding angles",
        explanation: "Corresponding angles must be equal to ensure the constructed line is parallel to the given line. ≡",
        wrongAnswerExplanations: {
            "Complementary angles": "These sum to 90° but aren't necessary for parallel lines.",
            "Obtuse angles": "The type of angle doesn't matter; what matters is corresponding angles are equal.",
            "Reflex angles": "These are angles greater than 180° and aren't relevant to parallel construction."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: "cl7_ch10_t2_qm2",
        type: "mcq",
        question: "In a geometric construction, why do we use a compass instead of measuring angles with a protractor?",
        options: ["For greater precision", "Because it's faster", "Because protractors weren't invented yet", "To avoid marking the paper"],
        correctAnswer: "For greater precision",
        explanation: "Compass constructions are more precise than protractor measurements for geometric constructions. 📏",
        wrongAnswerExplanations: {
            "Because it's faster": "Precision, not speed, is the primary concern in geometric construction.",
            "Because protractors weren't invented yet": "Both tools have existed for centuries.",
            "To avoid marking the paper": "Both methods mark the paper equally."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: "cl7_ch10_t2_qm3",
        type: "mcq",
        question: "Which of these is a valid method to construct a line parallel to line l through point P?",
        options: ["Creating equal corresponding angles", "Making the lines the same length", "Ensuring both lines have the same y-intercept", "Drawing both lines with the same color"],
        correctAnswer: "Creating equal corresponding angles",
        explanation: "Equal corresponding angles ensure the lines are parallel according to parallel line properties. 📐",
        wrongAnswerExplanations: {
            "Making the lines the same length": "Line length doesn't determine if lines are parallel.",
            "Ensuring both lines have the same y-intercept": "Lines with same y-intercept aren't necessarily parallel.",
            "Drawing both lines with the same color": "Line color has no mathematical significance."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: "cl7_ch10_t2_qm4",
        type: "mcq",
        question: "If you're constructing a line parallel to line AB through point P, what is the minimum number of compass arc markings required?",
        options: ["2", "3", "4", "5"],
        correctAnswer: "2",
        explanation: "You need just 2 arc markings: one to establish the angle on the original line and one to copy it. 🔄",
        wrongAnswerExplanations: {
            "3": "Only 2 arcs are essential - others might be used for verification.",
            "4": "The standard construction requires only 2 essential arc markings.",
            "5": "This would be excessive for a standard parallel line construction."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: "cl7_ch10_t2_qm5",
        type: "mcq",
        question: "What theorem is the geometric construction of parallel lines based on?",
        options: ["If corresponding angles are equal, lines are parallel", "If lines have equal length, they are parallel", "If lines have the same slope, they are parallel", "If lines have equal endpoints, they are parallel"],
        correctAnswer: "If corresponding angles are equal, lines are parallel",
        explanation: "The construction utilizes the theorem that lines with equal corresponding angles are parallel. ∥",
        wrongAnswerExplanations: {
            "If lines have equal length, they are parallel": "Equal length doesn't determine parallelism.",
            "If lines have the same slope, they are parallel": "True but not applicable in compass-ruler constructions.",
            "If lines have equal endpoints, they are parallel": "Lines with equal endpoints would be the same line."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: "cl7_ch10_t2_qm6",
        type: "mcq",
        question: "In which step of constructing a parallel line would you place the compass point on the original line?",
        options: ["When creating the initial angle", "When measuring the distance between lines", "When drawing the final parallel line", "When marking point P"],
        correctAnswer: "When creating the initial angle",
        explanation: "The compass point is placed on the original line to create the angle to be copied. 📌",
        wrongAnswerExplanations: {
            "When measuring the distance between lines": "Distance isn't measured directly in this construction.",
            "When drawing the final parallel line": "The compass isn't used to draw lines directly.",
            "When marking point P": "Point P is typically given/marked with a pencil, not compass."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: "cl7_ch10_t2_qm7",
        type: "mcq",
        question: "What would happen if you changed the compass width between marking arcs when constructing parallel lines?",
        options: ["The constructed line wouldn't be parallel", "The lines would be parallel but unequal in length", "The parallel line would be thicker", "Nothing would change"],
        correctAnswer: "The constructed line wouldn't be parallel",
        explanation: "Changing compass width would create different angles, resulting in non-parallel lines. ⚠️",
        wrongAnswerExplanations: {
            "The lines would be parallel but unequal in length": "The parallelism itself would be affected.",
            "The parallel line would be thicker": "Compass width doesn't affect line thickness.",
            "Nothing would change": "Precision in construction requires consistent compass width."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: "cl7_ch10_t2_qm8",
        type: "mcq",
        question: "If point P is 5 cm from line l, what will be the distance of the constructed parallel line from line l?",
        options: ["5 cm", "Depends on the angle of construction", "Less than 5 cm", "More than 5 cm"],
        correctAnswer: "5 cm",
        explanation: "The parallel line will pass through P, maintaining the 5 cm distance from the original line. ↕️",
        wrongAnswerExplanations: {
            "Depends on the angle of construction": "Distance is determined by point P, not the construction angle.",
            "Less than 5 cm": "The parallel line passes through P, so distance remains 5 cm.",
            "More than 5 cm": "The parallel line passes through P, so distance remains 5 cm."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: "cl7_ch10_t2_qm9",
        type: "mcq",
        question: "Which angle relationship must be maintained for the construction of parallel lines?",
        options: ["Corresponding angles are equal", "Alternate angles are supplementary", "Vertical angles are different", "Adjacent angles are complementary"],
        correctAnswer: "Corresponding angles are equal",
        explanation: "Equal corresponding angles ensure that two lines cut by a transversal are parallel. ≡",
        wrongAnswerExplanations: {
            "Alternate angles are supplementary": "Alternate angles are equal, not supplementary, for parallel lines.",
            "Vertical angles are different": "Vertical angles are always equal regardless of parallelism.",
            "Adjacent angles are complementary": "Adjacent angles are supplementary, not complementary."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: "cl7_ch10_t2_qm10",
        type: "mcq",
        question: "What is the purpose of drawing a transversal in the construction of parallel lines?",
        options: ["To create corresponding angles", "To make the lines equal in length", "To ensure the lines are straight", "To mark equidistant points"],
        correctAnswer: "To create corresponding angles",
        explanation: "The transversal creates angles that must be made equal to ensure parallelism. 📏",
        wrongAnswerExplanations: {
            "To make the lines equal in length": "Transversals don't affect line length.",
            "To ensure the lines are straight": "Straightness comes from using a ruler.",
            "To mark equidistant points": "Transversals don't necessarily create equidistant points."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: "cl7_ch10_t2_qm11",
        type: "mcq",
        question: "If you need to construct multiple lines parallel to line l, what's the most efficient approach?",
        options: ["Construct each line parallel to the original line l", "Construct each line parallel to the previous parallel line", "Draw all lines simultaneously", "Use a protractor instead of compass"],
        correctAnswer: "Construct each line parallel to the original line l",
        explanation: "This avoids accumulating small errors that could occur when using subsequent lines as reference. 📊",
        wrongAnswerExplanations: {
            "Construct each line parallel to the previous parallel line": "This can accumulate small errors.",
            "Draw all lines simultaneously": "This isn't physically possible with compass and ruler.",
            "Use a protractor instead of compass": "This would be less precise than compass construction."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: "cl7_ch10_t2_qm12",
        type: "mcq",
        question: "In geometric constructions, why don't we simply draw two lines that look parallel?",
        options: ["Visual estimation is imprecise", "It wouldn't follow mathematical principles", "It takes more time", "It requires special tools"],
        correctAnswer: "Visual estimation is imprecise",
        explanation: "Geometric constructions require mathematical precision that visual estimation can't provide. 🔍",
        wrongAnswerExplanations: {
            "It wouldn't follow mathematical principles": "This is true but not the primary practical reason.",
            "It takes more time": "Precision is more important than speed in constructions.",
            "It requires special tools": "Proper construction uses standard compass and ruler."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: "cl7_ch10_t2_qm13",
        type: "mcq",
        question: "Which property can be used to verify if your constructed line is truly parallel to the original?",
        options: ["Corresponding angles are equal", "Both lines have equal length", "Both lines are the same color", "Both lines use the same thickness"],
        correctAnswer: "Corresponding angles are equal",
        explanation: "Equal corresponding angles indicate the lines are truly parallel, as per parallel line properties. ≡",
        wrongAnswerExplanations: {
            "Both lines have equal length": "Line length doesn't determine parallelism.",
            "Both lines are the same color": "Color has no mathematical significance.",
            "Both lines use the same thickness": "Line thickness doesn't affect geometric properties."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: "cl7_ch10_t2_qm14",
        type: "mcq",
        question: "What happens if you use a different point on the transversal for your compass center when constructing parallel lines?",
        options: ["The construction would still work correctly", "The lines wouldn't be parallel", "The parallel line would be shorter", "The parallel line would be longer"],
        correctAnswer: "The construction would still work correctly",
        explanation: "Any point on the transversal will work as long as you maintain equal corresponding angles. ✓",
        wrongAnswerExplanations: {
            "The lines wouldn't be parallel": "The construction works regardless of which point you choose.",
            "The parallel line would be shorter": "The length isn't affected by the choice of point.",
            "The parallel line would be longer": "The length isn't affected by the choice of point."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: "cl7_ch10_t2_qm15",
        type: "mcq",
        question: "When a transversal intersects two parallel lines, which of these angle pairs must be supplementary?",
        options: ["Adjacent angles", "Corresponding angles", "Alternate interior angles", "Vertical angles"],
        correctAnswer: "Adjacent angles",
        explanation: "Adjacent angles form a straight line (180°), making them supplementary. 🔄",
        wrongAnswerExplanations: {
            "Corresponding angles": "These are equal, not supplementary.",
            "Alternate interior angles": "These are equal, not supplementary.",
            "Vertical angles": "These are equal, not supplementary."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: "cl7_ch10_t2_qm16",
        type: "mcq",
        question: "If you draw a transversal across two lines and find that corresponding angles measure 75° and 75°, what can you conclude?",
        options: ["The lines are parallel", "The lines are perpendicular", "The lines will eventually intersect", "Nothing can be concluded"],
        correctAnswer: "The lines are parallel",
        explanation: "Equal corresponding angles (both 75°) indicate the lines are parallel. ∥",
        wrongAnswerExplanations: {
            "The lines are perpendicular": "Perpendicular lines form 90° angles, not 75°.",
            "The lines will eventually intersect": "Equal corresponding angles mean the lines are parallel.",
            "Nothing can be concluded": "Equal corresponding angles definitely indicate parallelism."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: "cl7_ch10_t2_qm17",
        type: "mcq",
        question: "Which property is NOT preserved when constructing a line parallel to another line?",
        options: ["The length of the line", "The direction of the line", "The slope of the line", "The distance from the origin"],
        correctAnswer: "The length of the line",
        explanation: "Parallel lines have the same direction and slope, but length can differ. 📏",
        wrongAnswerExplanations: {
            "The direction of the line": "Parallel lines have the same direction by definition.",
            "The slope of the line": "Parallel lines have equal slopes.",
            "The distance from the origin": "This isn't necessarily preserved, but it's not a defining property."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: "cl7_ch10_t2_qm18",
        type: "mcq",
        question: "In a geometric construction of parallel lines, which of these is NOT a necessary tool?",
        options: ["Protractor", "Compass", "Ruler", "Pencil"],
        correctAnswer: "Protractor",
        explanation: "Parallel lines can be constructed with just compass and ruler without a protractor. 📐",
        wrongAnswerExplanations: {
            "Compass": "A compass is essential for creating and copying angles.",
            "Ruler": "A ruler is essential for drawing straight lines.",
            "Pencil": "A pencil or similar marking tool is necessary for any construction."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: "cl7_ch10_t2_qm19",
        type: "mcq",
        question: "If line l has a direction of Northeast and you construct a line parallel to it, what will be the direction of the parallel line?",
        options: ["Northeast", "Northwest", "Southeast", "Southwest"],
        correctAnswer: "Northeast",
        explanation: "Parallel lines must have the same direction, so it will also be Northeast. 🧭",
        wrongAnswerExplanations: {
            "Northwest": "This would be perpendicular, not parallel to Northeast.",
            "Southeast": "This would be parallel but in the opposite direction.",
            "Southwest": "This would be perpendicular, not parallel to Northeast."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: "cl7_ch10_t2_qm20",
        type: "mcq",
        question: "What would happen if the transversal is perpendicular to one of the lines in a parallel line construction?",
        options: ["It would be perpendicular to the other line as well", "It would form a 45° angle with the other line", "It would form an acute angle with the other line", "It would form an obtuse angle with the other line"],
        correctAnswer: "It would be perpendicular to the other line as well",
        explanation: "If a transversal is perpendicular to one parallel line, it's perpendicular to all parallel lines. ⊥",
        wrongAnswerExplanations: {
            "It would form a 45° angle with the other line": "This would make the lines non-parallel.",
            "It would form an acute angle with the other line": "This would make the lines non-parallel.",
            "It would form an obtuse angle with the other line": "This would make the lines non-parallel."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    }
];
