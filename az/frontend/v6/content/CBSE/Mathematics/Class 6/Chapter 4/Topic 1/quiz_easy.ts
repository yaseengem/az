// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 6\Chapter4\Topic1\quiz_easy.ts
// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 6\Chapter4\Topic1\quiz_easy.ts
import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl6_ch4_t1_qe1',
        type: "mcq",
        question: "What is a point in geometry?",
        options: ["A line that extends in one direction", "A location in space with no size", "A part of a line with two endpoints", "A figure with three sides"],
        correctAnswer: "A location in space with no size",
        explanation: "A point represents a location in space with no dimensions - no length, width, or thickness. ⚫",
        wrongAnswerExplanations: {
            "A line that extends in one direction": "That describes a ray, not a point.",
            "A part of a line with two endpoints": "That describes a line segment, not a point.",
            "A figure with three sides": "That describes a triangle, not a point."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch4_t1_qe2',
        type: "mcq",
        question: "Which of the following has two endpoints?",
        options: ["Point", "Line", "Ray", "Line segment"],
        correctAnswer: "Line segment",
        explanation: "A line segment is defined by its two endpoints and has a definite length. 📏",
        wrongAnswerExplanations: {
            "Point": "A point has no endpoints; it is just a location.",
            "Line": "A line extends infinitely in both directions and has no endpoints.",
            "Ray": "A ray has exactly one endpoint and extends infinitely in one direction."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch4_t1_qe3',
        type: "mcq",
        question: "How many lines can pass through two distinct points?",
        options: ["0", "1", "2", "Infinitely many"],
        correctAnswer: "1",
        explanation: "Exactly one unique line can pass through any two distinct points. 🧮",
        wrongAnswerExplanations: {
            "0": "It's always possible to draw a line through any two distinct points.",
            "2": "Only one unique line can pass through two distinct points.",
            "Infinitely many": "Only one unique line can pass through two distinct points."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch4_t1_qe4',
        type: "mcq",
        question: "Which of these best represents a ray?",
        options: ["A straight path with two arrows", "A straight path with one arrow", "A straight path with no arrows", "A curved path"],
        correctAnswer: "A straight path with one arrow",
        explanation: "A ray is represented as a straight path with one arrow, showing it extends infinitely in one direction. 🔆",
        wrongAnswerExplanations: {
            "A straight path with two arrows": "This represents a line, which extends infinitely in both directions.",
            "A straight path with no arrows": "This represents a line segment, which has two endpoints.",
            "A curved path": "Rays are straight, not curved."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch4_t1_qe5',
        type: "mcq",
        question: "Which geometric figure has a measurable length?",
        options: ["Point", "Line", "Ray", "Line segment"],
        correctAnswer: "Line segment",
        explanation: "A line segment has a definite, measurable length because it has two endpoints. 📐",
        wrongAnswerExplanations: {
            "Point": "A point has no length; it has zero dimensions.",
            "Line": "A line extends infinitely and has infinite length, not a measurable finite length.",
            "Ray": "A ray extends infinitely in one direction, so it has infinite length."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch4_t1_qe6',
        type: "mcq",
        question: "What are parallel lines?",
        options: ["Lines that meet at a point", "Lines that never meet", "Lines that form a 90° angle", "Lines that have the same length"],
        correctAnswer: "Lines that never meet",
        explanation: "Parallel lines are lines that never intersect and always maintain the same distance between them. ∥",
        wrongAnswerExplanations: {
            "Lines that meet at a point": "These are intersecting lines, not parallel lines.",
            "Lines that form a 90° angle": "These are perpendicular lines, not parallel lines.",
            "Lines that have the same length": "Lines have infinite length; this doesn't define parallel lines."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch4_t1_qe7',
        type: "mcq",
        question: "Which symbol is used to represent a line?",
        options: ["AB", "AB̅", "AB⃗", "AB̅̅̅̅"],
        correctAnswer: "AB̅̅̅̅",
        explanation: "A line is represented by two letters with a double-headed arrow or line above them (AB̅̅̅̅). 📝",
        wrongAnswerExplanations: {
            "AB": "This represents just two points A and B, not a line.",
            "AB̅": "This represents a line segment from A to B.",
            "AB⃗": "This represents a ray starting at A and passing through B."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch4_t1_qe8',
        type: "mcq",
        question: "Three points that do not lie on a straight line are called:",
        options: ["Collinear points", "Non-collinear points", "Parallel points", "Perpendicular points"],
        correctAnswer: "Non-collinear points",
        explanation: "Points that do not lie on the same straight line are called non-collinear points. 📐",
        wrongAnswerExplanations: {
            "Collinear points": "Collinear points lie on the same straight line.",
            "Parallel points": "This is not a standard geometric term.",
            "Perpendicular points": "This is not a standard geometric term."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch4_t1_qe9',
        type: "mcq",
        question: "What geometric figure has an endpoint?",
        options: ["Point", "Line", "Ray", "Triangle"],
        correctAnswer: "Ray",
        explanation: "A ray has exactly one endpoint and extends infinitely in one direction. 🔆",
        wrongAnswerExplanations: {
            "Point": "A point is itself a position and doesn't have endpoints.",
            "Line": "A line extends infinitely in both directions and has no endpoints.",
            "Triangle": "A triangle has vertices (points) and sides (line segments), not endpoints."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch4_t1_qe10',
        type: "mcq",
        question: "Which of these is an example of a line in real life?",
        options: ["The corner of a room", "The edge where two walls meet", "The top of a table", "A ball"],
        correctAnswer: "The edge where two walls meet",
        explanation: "The edge where two walls meet conceptually represents a line - extending in both directions. 📏",
        wrongAnswerExplanations: {
            "The corner of a room": "A corner represents a point, not a line.",
            "The top of a table": "The top of a table represents a plane (2D surface), not a line.",
            "A ball": "A ball represents a sphere (3D object), not a line."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch4_t1_qe11',
        type: "mcq",
        question: "What is the dimension of a point?",
        options: ["0-dimensional", "1-dimensional", "2-dimensional", "3-dimensional"],
        correctAnswer: "0-dimensional",
        explanation: "A point has no length, width, or height - it's 0-dimensional, just marking a position. ⚫",
        wrongAnswerExplanations: {
            "1-dimensional": "Lines, rays, and line segments are 1-dimensional, not points.",
            "2-dimensional": "Planes and surfaces are 2-dimensional, not points.",
            "3-dimensional": "Solids are 3-dimensional, not points."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch4_t1_qe12',
        type: "mcq",
        question: "How many points are needed to define a unique line?",
        options: ["1 point", "2 points", "3 points", "4 points"],
        correctAnswer: "2 points",
        explanation: "Exactly 2 distinct points are needed to define a unique straight line. 🧮",
        wrongAnswerExplanations: {
            "1 point": "With only 1 point, infinitely many lines can pass through it.",
            "3 points": "Only 2 points are needed; a third point may not lie on the same line.",
            "4 points": "Only 2 points are needed to define a unique line."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch4_t1_qe13',
        type: "mcq",
        question: "What do we call the point where two lines meet?",
        options: ["Endpoint", "Point of intersection", "Midpoint", "Vertex"],
        correctAnswer: "Point of intersection",
        explanation: "The point where two lines meet or cross each other is called the point of intersection. ✖️",
        wrongAnswerExplanations: {
            "Endpoint": "Endpoints are the terminating points of a line segment or the starting point of a ray.",
            "Midpoint": "A midpoint is a point exactly halfway between two points.",
            "Vertex": "A vertex is a corner point where two sides meet in a polygon."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch4_t1_qe14',
        type: "mcq",
        question: "If A, B, and C are three points such that AB = BC and all three lie on a straight line, then B is the:",
        options: ["Endpoint", "Midpoint", "Point of intersection", "Starting point"],
        correctAnswer: "Midpoint",
        explanation: "If B is equidistant from A and C on a line, then B is the midpoint between A and C. 📊",
        wrongAnswerExplanations: {
            "Endpoint": "B is between A and C on the line, so it's not an endpoint.",
            "Point of intersection": "The points all lie on one line, so there's no intersection involved.",
            "Starting point": "This doesn't accurately describe B's position between A and C."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch4_t1_qe15',
        type: "mcq",
        question: "Which of these examples best represents a ray in real life?",
        options: ["The edge of a ruler", "A beam of light from a flashlight", "The boundary of a field", "A piece of string"],
        correctAnswer: "A beam of light from a flashlight",
        explanation: "A beam of light starts at the flashlight (the endpoint) and extends in one direction. 🔦",
        wrongAnswerExplanations: {
            "The edge of a ruler": "This represents a line segment with two endpoints.",
            "The boundary of a field": "This represents a closed shape made up of line segments.",
            "A piece of string": "This represents a line segment with two endpoints."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch4_t1_qe16',
        type: "mcq",
        question: "Points A, B, and C lie on the same straight line. What can we say about these points?",
        options: ["They form a triangle", "They are collinear", "They are non-collinear", "They form a ray"],
        correctAnswer: "They are collinear",
        explanation: "Points that lie on the same straight line are called collinear points. 📏",
        wrongAnswerExplanations: {
            "They form a triangle": "Collinear points cannot form a triangle.",
            "They are non-collinear": "Points on the same line are collinear, not non-collinear.",
            "They form a ray": "Three points on a line don't necessarily form a ray."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch4_t1_qe17',
        type: "mcq",
        question: "Which of the following has infinite length?",
        options: ["Point", "Line segment", "Ray", "Triangle"],
        correctAnswer: "Ray",
        explanation: "A ray extends infinitely in one direction, so it has infinite length. 🔆",
        wrongAnswerExplanations: {
            "Point": "A point has no length.",
            "Line segment": "A line segment has a definite, measurable length.",
            "Triangle": "A triangle has a measurable perimeter."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch4_t1_qe18',
        type: "mcq",
        question: "Two distinct lines can intersect at most at how many points?",
        options: ["0", "1", "2", "Infinitely many"],
        correctAnswer: "1",
        explanation: "Two distinct lines can either be parallel (no intersection) or intersect at exactly one point. ✖️",
        wrongAnswerExplanations: {
            "0": "Lines can be parallel (0 intersections), but this isn't always true.",
            "2": "Two distinct straight lines cannot intersect at more than one point.",
            "Infinitely many": "Two distinct straight lines cannot intersect at more than one point."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch4_t1_qe19',
        type: "mcq",
        question: "How many endpoints does a ray have?",
        options: ["0", "1", "2", "Infinitely many"],
        correctAnswer: "1",
        explanation: "A ray has exactly one endpoint and extends infinitely in one direction. 🚩",
        wrongAnswerExplanations: {
            "0": "A ray has one endpoint; a line has no endpoints.",
            "2": "A line segment has two endpoints; a ray has one.",
            "Infinitely many": "A ray has exactly one endpoint."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch4_t1_qe20',
        type: "mcq",
        question: "If two lines are parallel, how many common points do they have?",
        options: ["0", "1", "2", "Infinitely many"],
        correctAnswer: "0",
        explanation: "Parallel lines never meet, so they have zero common points. ∥",
        wrongAnswerExplanations: {
            "1": "If lines have one common point, they intersect and are not parallel.",
            "2": "Two distinct lines cannot have exactly two common points.",
            "Infinitely many": "Parallel lines have no common points, not infinitely many."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    }
];
