import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl6_ch14_t3_qm1',
        type: "mcq",
        question: "What is the minimum number of perpendicular bisectors needed to find the center of a triangle?",
        options: ["1", "2", "3", "4"],
        correctAnswer: "2",
        explanation: "You need at least two perpendicular bisectors of the triangle's sides to find its circumcenter. 📐",
        wrongAnswerExplanations: {
            "1": "One bisector is not enough to find the center.",
            "3": "While three bisectors will work, only two are necessary.",
            "4": "Four bisectors are more than needed."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch14_t3_qm2',
        type: "mcq",
        question: "When constructing a perpendicular bisector, why must the compass width be more than half the segment length?",
        options: ["To make the arcs visible", "To ensure the arcs intersect", "To make the construction faster", "To use more paper"],
        correctAnswer: "To ensure the arcs intersect",
        explanation: "The arcs must intersect to create the points needed for the bisector. If the width is too small, they won't meet. 📏",
        wrongAnswerExplanations: {
            "To make the arcs visible": "Visibility is not the main reason.",
            "To make the construction faster": "Speed is not the main concern.",
            "To use more paper": "Paper usage is not relevant to the construction."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch14_t3_qm3',
        type: "mcq",
        question: "What is the relationship between a perpendicular bisector and the locus of points equidistant from two points?",
        options: ["They are parallel", "They are the same", "They are perpendicular", "They never meet"],
        correctAnswer: "They are the same",
        explanation: "The perpendicular bisector is exactly the set of all points equidistant from the two endpoints. 📐",
        wrongAnswerExplanations: {
            "They are parallel": "They cannot be parallel as they would never meet.",
            "They are perpendicular": "A line cannot be perpendicular to itself.",
            "They never meet": "They are the same line, so they meet everywhere."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch14_t3_qm4',
        type: "mcq",
        question: "How can you use perpendicular bisectors to construct a regular hexagon?",
        options: ["By drawing six bisectors", "By using the intersection points", "By creating six equal segments", "All of these"],
        correctAnswer: "By creating six equal segments",
        explanation: "Perpendicular bisectors help divide the circle into six equal parts for a regular hexagon. 🔷",
        wrongAnswerExplanations: {
            "By drawing six bisectors": "This is not the most efficient method.",
            "By using the intersection points": "This is only part of the process.",
            "All of these": "Not all these methods are correct or efficient."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch14_t3_qm5',
        type: "mcq",
        question: "What is the significance of the point where two perpendicular bisectors of a triangle meet?",
        options: ["It's the centroid", "It's the circumcenter", "It's the orthocenter", "It's the incenter"],
        correctAnswer: "It's the circumcenter",
        explanation: "The point where perpendicular bisectors meet is the circumcenter, equidistant from all vertices. 📍",
        wrongAnswerExplanations: {
            "It's the centroid": "The centroid is where medians meet.",
            "It's the orthocenter": "The orthocenter is where altitudes meet.",
            "It's the incenter": "The incenter is where angle bisectors meet."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch14_t3_qm6',
        type: "mcq",
        question: "When constructing a perpendicular bisector, what happens if you use exactly half the segment length for the compass width?",
        options: ["The arcs touch at one point", "The arcs don't intersect", "The construction is perfect", "The arcs overlap completely"],
        correctAnswer: "The arcs touch at one point",
        explanation: "Using exactly half the length makes the arcs touch at just one point, which is insufficient for the construction. ⚠️",
        wrongAnswerExplanations: {
            "The arcs don't intersect": "They do intersect, but only at one point.",
            "The construction is perfect": "One point of intersection is not enough.",
            "The arcs overlap completely": "They only touch at one point, not overlap."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch14_t3_qm7',
        type: "mcq",
        question: "What is the best way to verify that a perpendicular bisector is correct?",
        options: ["Measure the angles", "Check the distances", "Use a protractor", "All of these"],
        correctAnswer: "All of these",
        explanation: "Multiple verification methods ensure accuracy: checking angles, distances, and using tools. ✅",
        wrongAnswerExplanations: {
            "Measure the angles": "This is important but not the only check.",
            "Check the distances": "This is important but not the only check.",
            "Use a protractor": "This is important but not the only check."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch14_t3_qm8',
        type: "mcq",
        question: "How can perpendicular bisectors help in finding the center of a circle?",
        options: ["By drawing one bisector", "By using two chords", "By measuring the radius", "By guessing the center"],
        correctAnswer: "By using two chords",
        explanation: "The perpendicular bisectors of two different chords of a circle will intersect at its center. ⭕",
        wrongAnswerExplanations: {
            "By drawing one bisector": "One bisector is not enough to find the center.",
            "By measuring the radius": "You need the center to measure the radius.",
            "By guessing the center": "Guessing is not a mathematical method."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch14_t3_qm9',
        type: "mcq",
        question: "What is the relationship between perpendicular bisectors and symmetry?",
        options: ["They create rotational symmetry", "They are lines of reflection", "They destroy symmetry", "They have no relation"],
        correctAnswer: "They are lines of reflection",
        explanation: "Perpendicular bisectors create lines of reflection symmetry for the line segment. 🔄",
        wrongAnswerExplanations: {
            "They create rotational symmetry": "They create reflection symmetry, not rotational.",
            "They destroy symmetry": "They actually create symmetry.",
            "They have no relation": "They are directly related to symmetry."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch14_t3_qm10',
        type: "mcq",
        question: "When constructing multiple perpendicular bisectors, what should you do to ensure accuracy?",
        options: ["Use different compasses", "Change the paper", "Keep the same compass width", "Draw freehand"],
        correctAnswer: "Keep the same compass width",
        explanation: "Maintaining consistent compass width ensures all constructions are proportional. 📏",
        wrongAnswerExplanations: {
            "Use different compasses": "This can lead to inconsistencies.",
            "Change the paper": "This is unnecessary and can cause errors.",
            "Draw freehand": "Freehand drawing won't ensure accuracy."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch14_t3_qm11',
        type: "mcq",
        question: "What is the minimum number of perpendicular bisectors needed to construct a square?",
        options: ["1", "2", "3", "4"],
        correctAnswer: "2",
        explanation: "Two perpendicular bisectors (one horizontal, one vertical) are sufficient to construct a square. ⬜",
        wrongAnswerExplanations: {
            "1": "One bisector is not enough for a square.",
            "3": "Three bisectors are more than needed.",
            "4": "Four bisectors are more than needed."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch14_t3_qm12',
        type: "mcq",
        question: "How can perpendicular bisectors help in dividing a line segment into equal parts?",
        options: ["By creating similar triangles", "By using the midpoint property", "By measuring angles", "By guessing the divisions"],
        correctAnswer: "By using the midpoint property",
        explanation: "The midpoint property of perpendicular bisectors allows for precise division of segments. 📏",
        wrongAnswerExplanations: {
            "By creating similar triangles": "This is not the most direct method.",
            "By measuring angles": "Angles are not directly related to equal divisions.",
            "By guessing the divisions": "Guessing is not a mathematical method."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch14_t3_qm13',
        type: "mcq",
        question: "What is the relationship between perpendicular bisectors and the construction of regular polygons?",
        options: ["They define the sides", "They find the center", "They measure angles", "They have no relation"],
        correctAnswer: "They find the center",
        explanation: "Perpendicular bisectors help locate the center point for constructing regular polygons. 🔷",
        wrongAnswerExplanations: {
            "They define the sides": "They don't directly define the sides.",
            "They measure angles": "They don't measure angles directly.",
            "They have no relation": "They are essential for finding the center."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch14_t3_qm14',
        type: "mcq",
        question: "When constructing a perpendicular bisector, what happens if the compass width is too large?",
        options: ["The construction fails", "The arcs become circles", "The paper tears", "The construction works fine"],
        correctAnswer: "The construction works fine",
        explanation: "A larger compass width still creates intersecting arcs, as long as it's more than half the segment length. ✅",
        wrongAnswerExplanations: {
            "The construction fails": "The construction still works with larger width.",
            "The arcs become circles": "The arcs remain arcs, not full circles.",
            "The paper tears": "Paper tearing is not related to compass width."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch14_t3_qm15',
        type: "mcq",
        question: "What is the best way to construct a perpendicular bisector of a very long line segment?",
        options: ["Use a larger compass", "Draw in sections", "Use a string compass", "Draw freehand"],
        correctAnswer: "Use a string compass",
        explanation: "A string compass (two pencils tied with string) is best for large segments as it maintains constant radius. 📏",
        wrongAnswerExplanations: {
            "Use a larger compass": "Regular compasses have limited reach.",
            "Draw in sections": "Drawing in sections can create inaccuracies.",
            "Draw freehand": "Freehand drawing won't ensure accuracy."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch14_t3_qm16',
        type: "mcq",
        question: "How can perpendicular bisectors help in constructing an equilateral triangle?",
        options: ["By finding the center", "By creating equal angles", "By dividing the base", "All of these"],
        correctAnswer: "By dividing the base",
        explanation: "The perpendicular bisector helps divide the base into equal parts for an equilateral triangle. 🔺",
        wrongAnswerExplanations: {
            "By finding the center": "The center is not needed for an equilateral triangle.",
            "By creating equal angles": "The bisector doesn't directly create the angles.",
            "All of these": "Not all these methods are correct or necessary."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch14_t3_qm17',
        type: "mcq",
        question: "What is the relationship between perpendicular bisectors and the construction of a rhombus?",
        options: ["They define the sides", "They find the diagonals", "They measure angles", "They have no relation"],
        correctAnswer: "They find the diagonals",
        explanation: "The perpendicular bisectors of a rhombus's sides help locate its diagonals. 🔷",
        wrongAnswerExplanations: {
            "They define the sides": "They don't directly define the sides.",
            "They measure angles": "They don't measure angles directly.",
            "They have no relation": "They are essential for finding the diagonals."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch14_t3_qm18',
        type: "mcq",
        question: "When constructing multiple perpendicular bisectors, what should you do to ensure they are all perpendicular to each other?",
        options: ["Use a protractor", "Check the angles", "Use a set square", "All of these"],
        correctAnswer: "All of these",
        explanation: "Multiple verification methods ensure the bisectors are truly perpendicular to each other. 📐",
        wrongAnswerExplanations: {
            "Use a protractor": "This is important but not the only check.",
            "Check the angles": "This is important but not the only check.",
            "Use a set square": "This is important but not the only check."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch14_t3_qm19',
        type: "mcq",
        question: "What is the significance of the perpendicular bisector in the construction of a kite?",
        options: ["It defines the shape", "It finds the axis of symmetry", "It measures the angles", "It has no significance"],
        correctAnswer: "It finds the axis of symmetry",
        explanation: "The perpendicular bisector of the kite's main diagonal serves as its axis of symmetry. 🪁",
        wrongAnswerExplanations: {
            "It defines the shape": "It doesn't directly define the shape.",
            "It measures the angles": "It doesn't measure angles directly.",
            "It has no significance": "It is crucial for finding the axis of symmetry."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch14_t3_qm20',
        type: "mcq",
        question: "How can perpendicular bisectors help in constructing a regular pentagon?",
        options: ["By finding the center", "By dividing the circle", "By measuring angles", "All of these"],
        correctAnswer: "By finding the center",
        explanation: "Perpendicular bisectors help locate the center point for constructing a regular pentagon. ⬠",
        wrongAnswerExplanations: {
            "By dividing the circle": "This is not the primary use of bisectors.",
            "By measuring angles": "This is not the primary use of bisectors.",
            "All of these": "Not all these methods are correct or necessary."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    }
]; 