import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl6_ch14_t2_qm1',
        type: "mcq",
        question: "When drawing concentric circles, what must remain constant?",
        options: ["The radius", "The center point", "The pencil pressure", "The rotation speed"],
        correctAnswer: "The center point",
        explanation: "The center point must remain exactly the same for all concentric circles, only the radius changes. ⭕",
        wrongAnswerExplanations: {
            "The radius": "The radius changes for each circle in a set of concentric circles.",
            "The pencil pressure": "Pencil pressure should be consistent but isn't the defining feature of concentric circles.",
            "The rotation speed": "Rotation speed should be consistent but isn't the defining feature of concentric circles."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch14_t2_qm2',
        type: "mcq",
        question: "What is the minimum number of circles needed to create a Venn diagram with two intersecting sets?",
        options: ["1", "2", "3", "4"],
        correctAnswer: "2",
        explanation: "A basic Venn diagram with two intersecting sets requires exactly two circles that overlap. ✖️",
        wrongAnswerExplanations: {
            "1": "One circle cannot show intersection between two sets.",
            "3": "Three circles are needed for three sets, not two.",
            "4": "Four circles are more than needed for two sets."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch14_t2_qm3',
        type: "mcq",
        question: "When drawing tangent circles, what is the relationship between their centers?",
        options: ["They coincide", "They are perpendicular", "The distance equals the sum of radii", "They are parallel"],
        correctAnswer: "The distance equals the sum of radii",
        explanation: "For tangent circles, the distance between centers equals the sum of their radii. 🔄",
        wrongAnswerExplanations: {
            "They coincide": "Coinciding centers would create concentric circles, not tangent ones.",
            "They are perpendicular": "Perpendicularity isn't relevant to tangent circles.",
            "They are parallel": "Parallel isn't a meaningful concept for circle centers."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch14_t2_qm4',
        type: "mcq",
        question: "What is the most efficient way to draw a circle with a very large radius?",
        options: ["Use a larger compass", "Draw in sections", "Use a string compass", "Draw freehand"],
        correctAnswer: "Use a string compass",
        explanation: "A string compass (two pencils tied with string) is best for large circles as it maintains constant radius. 📏",
        wrongAnswerExplanations: {
            "Use a larger compass": "Regular compasses have limited reach.",
            "Draw in sections": "Drawing in sections can create uneven circles.",
            "Draw freehand": "Freehand drawing won't maintain constant radius."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch14_t2_qm5',
        type: "mcq",
        question: "When drawing intersecting circles, what determines the number of intersection points?",
        options: ["Radius ratio", "Center distance", "Pencil sharpness", "Paper size"],
        correctAnswer: "Center distance",
        explanation: "The distance between centers relative to the radii determines if circles intersect at 0, 1, or 2 points. ✖️",
        wrongAnswerExplanations: {
            "Radius ratio": "The ratio affects the intersection but not the number of points.",
            "Pencil sharpness": "Pencil sharpness affects quality but not intersection points.",
            "Paper size": "Paper size doesn't affect the number of intersection points."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch14_t2_qm6',
        type: "mcq",
        question: "What is the best way to draw a circle through three given points?",
        options: ["Guess and check", "Use a protractor", "Construct perpendicular bisectors", "Draw freehand"],
        correctAnswer: "Construct perpendicular bisectors",
        explanation: "Constructing perpendicular bisectors of chords between points finds the center accurately. 📐",
        wrongAnswerExplanations: {
            "Guess and check": "Guessing won't ensure the circle passes through all points.",
            "Use a protractor": "A protractor can't help find the center through three points.",
            "Draw freehand": "Freehand won't ensure accuracy through all points."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch14_t2_qm7',
        type: "mcq",
        question: "When drawing a circle tangent to a line, what must be true about the radius?",
        options: ["It equals the line length", "It's perpendicular to the line", "It's parallel to the line", "It's half the line length"],
        correctAnswer: "It's perpendicular to the line",
        explanation: "The radius at the point of tangency must be perpendicular to the line. 📐",
        wrongAnswerExplanations: {
            "It equals the line length": "The radius doesn't need to equal the line length.",
            "It's parallel to the line": "The radius cannot be parallel to the line at the point of tangency.",
            "It's half the line length": "The radius doesn't need to relate to the line length."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch14_t2_qm8',
        type: "mcq",
        question: "What is the minimum number of circles needed to create a complete flower petal pattern?",
        options: ["2", "4", "6", "8"],
        correctAnswer: "6",
        explanation: "A complete flower petal pattern typically requires 6 circles arranged symmetrically around a center. 🌸",
        wrongAnswerExplanations: {
            "2": "Two circles create a basic intersection, not a flower pattern.",
            "4": "Four circles create a simpler pattern than a complete flower.",
            "8": "Eight circles create a more complex pattern than needed for a basic flower."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch14_t2_qm9',
        type: "mcq",
        question: "When drawing circles in a pattern, what is the best way to ensure equal spacing?",
        options: ["Measure each gap", "Use a template", "Divide the space evenly", "Guess the distances"],
        correctAnswer: "Divide the space evenly",
        explanation: "Dividing the total space by the number of circles ensures equal spacing between centers. 📏",
        wrongAnswerExplanations: {
            "Measure each gap": "Measuring each gap individually is time-consuming and less accurate.",
            "Use a template": "A template might not fit the specific space needed.",
            "Guess the distances": "Guessing won't ensure equal spacing."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch14_t2_qm10',
        type: "mcq",
        question: "What is the best way to draw a circle that passes through two given points?",
        options: ["Use a protractor", "Construct the perpendicular bisector", "Draw freehand", "Use a template"],
        correctAnswer: "Construct the perpendicular bisector",
        explanation: "The perpendicular bisector of the line segment joining the points contains all possible centers. 📐",
        wrongAnswerExplanations: {
            "Use a protractor": "A protractor can't help find the center through two points.",
            "Draw freehand": "Freehand won't ensure the circle passes through both points.",
            "Use a template": "A template won't ensure the circle passes through specific points."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch14_t2_qm11',
        type: "mcq",
        question: "When drawing a circle inside a square, what must be true about the radius?",
        options: ["It equals the side length", "It's half the side length", "It's a quarter of the side length", "It's twice the side length"],
        correctAnswer: "It's half the side length",
        explanation: "The radius of the inscribed circle must be half the side length to touch all four sides. ⬜",
        wrongAnswerExplanations: {
            "It equals the side length": "This would make the circle larger than the square.",
            "It's a quarter of the side length": "This would make the circle too small.",
            "It's twice the side length": "This would make the circle much larger than the square."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch14_t2_qm12',
        type: "mcq",
        question: "What is the best way to draw a circle that is tangent to three given lines?",
        options: ["Guess and check", "Use a protractor", "Construct angle bisectors", "Draw freehand"],
        correctAnswer: "Construct angle bisectors",
        explanation: "The center lies at the intersection of angle bisectors, and the radius is the perpendicular distance to any side. 📐",
        wrongAnswerExplanations: {
            "Guess and check": "Guessing won't ensure tangency to all three lines.",
            "Use a protractor": "A protractor can't help find the correct center.",
            "Draw freehand": "Freehand won't ensure tangency to all lines."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch14_t2_qm13',
        type: "mcq",
        question: "When drawing circles in a spiral pattern, what changes with each circle?",
        options: ["The center", "The radius", "The pencil pressure", "The rotation direction"],
        correctAnswer: "The radius",
        explanation: "In a spiral pattern, the radius increases (or decreases) with each successive circle. 🔄",
        wrongAnswerExplanations: {
            "The center": "The center remains fixed in a spiral pattern.",
            "The pencil pressure": "Pencil pressure should remain consistent.",
            "The rotation direction": "The rotation direction remains the same in a spiral."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch14_t2_qm14',
        type: "mcq",
        question: "What is the minimum number of circles needed to create a complete Olympic rings pattern?",
        options: ["3", "4", "5", "6"],
        correctAnswer: "5",
        explanation: "The Olympic rings symbol consists of five interlocking circles. 🏅",
        wrongAnswerExplanations: {
            "3": "Three circles are insufficient for the Olympic rings pattern.",
            "4": "Four circles are insufficient for the Olympic rings pattern.",
            "6": "Six circles are more than needed for the Olympic rings pattern."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch14_t2_qm15',
        type: "mcq",
        question: "When drawing a circle that is tangent to two given circles, what determines the possible centers?",
        options: ["The sum of radii", "The difference of radii", "Both sum and difference", "The product of radii"],
        correctAnswer: "Both sum and difference",
        explanation: "The possible centers lie on curves determined by both the sum and difference of radii. 🔄",
        wrongAnswerExplanations: {
            "The sum of radii": "This is only part of the solution.",
            "The difference of radii": "This is only part of the solution.",
            "The product of radii": "The product isn't relevant to finding tangent circles."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch14_t2_qm16',
        type: "mcq",
        question: "What is the best way to draw a circle that passes through a given point and is tangent to a given line?",
        options: ["Guess and check", "Use a protractor", "Construct perpendiculars", "Draw freehand"],
        correctAnswer: "Construct perpendiculars",
        explanation: "The center lies on the perpendicular to the line through the point of tangency. 📐",
        wrongAnswerExplanations: {
            "Guess and check": "Guessing won't ensure both conditions are met.",
            "Use a protractor": "A protractor can't help find the correct center.",
            "Draw freehand": "Freehand won't ensure both conditions are met."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch14_t2_qm17',
        type: "mcq",
        question: "When drawing circles in a chain pattern, what must be true about consecutive circles?",
        options: ["They are concentric", "They are tangent", "They are parallel", "They are perpendicular"],
        correctAnswer: "They are tangent",
        explanation: "In a chain pattern, each circle is tangent to its neighbors. ⛓️",
        wrongAnswerExplanations: {
            "They are concentric": "Concentric circles share the same center.",
            "They are parallel": "Parallel isn't a meaningful concept for circles.",
            "They are perpendicular": "Perpendicular isn't a meaningful concept for circles."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch14_t2_qm18',
        type: "mcq",
        question: "What is the minimum number of circles needed to create a complete yin-yang symbol?",
        options: ["2", "3", "4", "5"],
        correctAnswer: "3",
        explanation: "The yin-yang symbol requires one large circle and two smaller circles for the dots. ☯️",
        wrongAnswerExplanations: {
            "2": "Two circles are insufficient for the complete yin-yang symbol.",
            "4": "Four circles are more than needed for the yin-yang symbol.",
            "5": "Five circles are more than needed for the yin-yang symbol."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch14_t2_qm19',
        type: "mcq",
        question: "When drawing a circle that is tangent to two given lines, what determines the possible centers?",
        options: ["The angle between lines", "The line lengths", "The paper size", "The pencil sharpness"],
        correctAnswer: "The angle between lines",
        explanation: "The possible centers lie on the angle bisector of the two lines. 📐",
        wrongAnswerExplanations: {
            "The line lengths": "The line lengths don't affect the possible centers.",
            "The paper size": "The paper size doesn't affect the possible centers.",
            "The pencil sharpness": "The pencil sharpness doesn't affect the possible centers."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch14_t2_qm20',
        type: "mcq",
        question: "What is the best way to draw a circle that is tangent to three given circles?",
        options: ["Guess and check", "Use a protractor", "Construct radical axes", "Draw freehand"],
        correctAnswer: "Construct radical axes",
        explanation: "The radical axes of pairs of circles intersect at points that can be centers of tangent circles. 📐",
        wrongAnswerExplanations: {
            "Guess and check": "Guessing won't ensure tangency to all three circles.",
            "Use a protractor": "A protractor can't help find the correct center.",
            "Draw freehand": "Freehand won't ensure tangency to all circles."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    }
]; 