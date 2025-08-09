// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 6\Chapter4\Topic1\quiz_medium.ts
// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 6\Chapter4\Topic1\quiz_medium.ts
import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl6_ch4_t1_qm1',
        type: "mcq",
        question: "If three points A, B, and C are collinear with B between A and C, which of these statements must be true?",
        options: ["AB + BC = AC", "AB - BC = AC", "AB × BC = AC", "AB ÷ BC = AC"],
        correctAnswer: "AB + BC = AC",
        explanation: "When B lies between A and C on a line, the distance from A to C equals the sum of distances AB and BC. 📏",
        wrongAnswerExplanations: {
            "AB - BC = AC": "This equation doesn't represent the relationship between the distances when B is between A and C.",
            "AB × BC = AC": "The relationship between the distances is additive, not multiplicative.",
            "AB ÷ BC = AC": "The relationship between the distances is additive, not divisive."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch4_t1_qm2',
        type: "mcq",
        question: "If P is a point not on line ℓ, how many lines can be drawn through P parallel to ℓ?",
        options: ["0", "1", "2", "Infinitely many"],
        correctAnswer: "1",
        explanation: "Through a point not on a line, exactly one parallel line can be drawn to the given line. ∥",
        wrongAnswerExplanations: {
            "0": "It's always possible to draw a line through a point parallel to another line.",
            "2": "Only one line can be drawn through a point parallel to another line.",
            "Infinitely many": "Only one line can be drawn through a point parallel to another line."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch4_t1_qm3',
        type: "mcq",
        question: "Which of the following statements is FALSE about line segments?",
        options: [
            "A line segment has two endpoints",
            "A line segment has a definite length",
            "A line segment extends infinitely in one direction",
            "A line segment is a part of a line"
        ],
        correctAnswer: "A line segment extends infinitely in one direction",
        explanation: "Line segments have two endpoints and a definite length; they don't extend infinitely in any direction. ❌",
        wrongAnswerExplanations: {
            "A line segment has two endpoints": "This statement is true - line segments have exactly two endpoints.",
            "A line segment has a definite length": "This statement is true - line segments have a measurable length.",
            "A line segment is a part of a line": "This statement is true - a line segment is a finite portion of a line."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch4_t1_qm4',
        type: "mcq",
        question: "When two lines intersect, what is formed at their point of intersection?",
        options: ["A ray", "A line segment", "Vertically opposite angles", "A triangle"],
        correctAnswer: "Vertically opposite angles",
        explanation: "When two lines intersect, they form four angles, with opposite angles being equal (vertically opposite angles). ∠",
        wrongAnswerExplanations: {
            "A ray": "The intersection forms a point, not a ray.",
            "A line segment": "The intersection forms a point, not a line segment.",
            "A triangle": "Two intersecting lines cannot form a triangle; a triangle needs three lines."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch4_t1_qm5',
        type: "mcq",
        question: "If points A, B, C, and D are collinear in that order, which of these could be true?",
        options: [
            "AC > AB + BD",
            "AB + BC = AC",
            "AD < AB + BD",
            "AB + BC > AC"
        ],
        correctAnswer: "AB + BC = AC",
        explanation: "When points are collinear in order A,B,C,D, the distance AC equals the sum of distances AB and BC. 📐",
        wrongAnswerExplanations: {
            "AC > AB + BD": "This violates the properties of distance on a line.",
            "AD < AB + BD": "For collinear points, AD = AB + BD.",
            "AB + BC > AC": "For collinear points, AB + BC = AC exactly."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch4_t1_qm6',
        type: "mcq",
        question: "How many rays can be drawn from a single point?",
        options: ["1", "2", "10", "Infinitely many"],
        correctAnswer: "Infinitely many",
        explanation: "A point can be the endpoint for infinitely many rays extending in different directions. 🌟",
        wrongAnswerExplanations: {
            "1": "A point can be the endpoint for rays in any direction, not just one.",
            "2": "A point can be the endpoint for rays in any direction, not just two.",
            "10": "A point can be the endpoint for infinitely many rays, not just 10."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch4_t1_qm7',
        type: "mcq",
        question: "In how many points can three distinct lines intersect?",
        options: ["0, 1, 2, or 3", "0, 1, or 3", "Only 3", "Only 1 or 3"],
        correctAnswer: "0, 1, or 3",
        explanation: "Three lines can form 0 (all parallel), 1 (all through one point), or 3 (forming a triangle) intersections. 🔺",
        wrongAnswerExplanations: {
            "0, 1, 2, or 3": "Three distinct lines cannot form exactly 2 intersection points.",
            "Only 3": "Three lines can also have 0 or 1 intersection points.",
            "Only 1 or 3": "Three lines can also have 0 intersection points if they're all parallel."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch4_t1_qm8',
        type: "mcq",
        question: "If A, B, C, and D are four distinct points such that A, B, and C are collinear, and B, C, and D are collinear, what can we conclude about all four points?",
        options: [
            "They form a square",
            "They form a rectangle",
            "They are all collinear",
            "They form a triangle"
        ],
        correctAnswer: "They are all collinear",
        explanation: "If A,B,C are collinear and B,C,D are collinear, the points A,B,C,D must all lie on the same line. 📊",
        wrongAnswerExplanations: {
            "They form a square": "Collinear points cannot form a square.",
            "They form a rectangle": "Collinear points cannot form a rectangle.",
            "They form a triangle": "Four distinct collinear points cannot form a triangle."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch4_t1_qm9',
        type: "mcq",
        question: "What is the maximum number of points that two distinct rays with the same endpoint can have in common?",
        options: ["0", "1", "2", "Infinitely many"],
        correctAnswer: "Infinitely many",
        explanation: "Two rays with the same endpoint can overlap along a common ray, having infinitely many common points. 🌠",
        wrongAnswerExplanations: {
            "0": "Two rays with the same endpoint must have at least their endpoint in common.",
            "1": "Two rays with the same endpoint can have infinitely many points in common if they overlap.",
            "2": "Two rays with the same endpoint can have infinitely many points in common if they overlap."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch4_t1_qm10',
        type: "mcq",
        question: "If three points are chosen randomly in a plane, what is the probability that they are collinear?",
        options: ["0", "1/3", "1/2", "1"],
        correctAnswer: "0",
        explanation: "The probability of randomly picking three collinear points in a plane is 0 (theoretically impossible). 🎲",
        wrongAnswerExplanations: {
            "1/3": "The probability is actually 0, as the set of collinear triples has measure zero in the plane.",
            "1/2": "The probability is actually 0, as the set of collinear triples has measure zero in the plane.",
            "1": "It's not certain that three random points would be collinear; in fact, it's theoretically impossible."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch4_t1_qm11',
        type: "mcq",
        question: "What happens when you extend a line segment from both ends without limit?",
        options: ["You get a ray", "You get two rays", "You get a line", "You get two lines"],
        correctAnswer: "You get a line",
        explanation: "Extending a line segment infinitely in both directions results in a line. 📏",
        wrongAnswerExplanations: {
            "You get a ray": "A ray extends infinitely in only one direction.",
            "You get two rays": "The result is a single line, not two separate rays.",
            "You get two lines": "The extension forms a single continuous line."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch4_t1_qm12',
        type: "mcq",
        question: "If a ray has endpoint P and passes through point Q, how is this ray represented in notation?",
        options: ["PQ̅", "PQ", "PQ⃗", "PQ̅̅̅̅"],
        correctAnswer: "PQ⃗",
        explanation: "A ray with endpoint P passing through Q is written as ray PQ or PQ⃗. 📝",
        wrongAnswerExplanations: {
            "PQ̅": "This represents a line segment from P to Q.",
            "PQ": "This represents just the points P and Q.",
            "PQ̅̅̅̅": "This represents a line through points P and Q."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch4_t1_qm13',
        type: "mcq",
        question: "Which statement about a ray is TRUE?",
        options: [
            "A ray has no length",
            "A ray can be measured with a ruler",
            "A ray has exactly one endpoint",
            "A ray can be extended in both directions"
        ],
        correctAnswer: "A ray has exactly one endpoint",
        explanation: "A ray has exactly one endpoint and extends infinitely in one direction. 🔆",
        wrongAnswerExplanations: {
            "A ray has no length": "A ray has infinite length, not zero length.",
            "A ray can be measured with a ruler": "A ray has infinite length and cannot be measured with a finite ruler.",
            "A ray can be extended in both directions": "A ray extends infinitely in only one direction."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch4_t1_qm14',
        type: "mcq",
        question: "If points P, Q, R are collinear with Q between P and R, and PQ = 3 cm, QR = 5 cm, what is PR?",
        options: ["2 cm", "8 cm", "15 cm", "Not enough information"],
        correctAnswer: "8 cm",
        explanation: "When Q is between P and R, PR = PQ + QR = 3 + 5 = 8 cm. 📐",
        wrongAnswerExplanations: {
            "2 cm": "This would be PR = PQ - QR, which is incorrect when Q is between P and R.",
            "15 cm": "This would be PR = PQ × QR, which is incorrect.",
            "Not enough information": "The given information is sufficient to calculate PR."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch4_t1_qm15',
        type: "mcq",
        question: "Which of these best describes the relationship between lines and planes?",
        options: [
            "A line is a part of a plane",
            "A plane is a part of a line",
            "A line and a plane never intersect",
            "A line must pass through at least two planes"
        ],
        correctAnswer: "A line is a part of a plane",
        explanation: "A line can lie entirely within a plane, making it a subset of the plane. 📋",
        wrongAnswerExplanations: {
            "A plane is a part of a line": "A plane is 2D while a line is 1D; a plane cannot be part of a line.",
            "A line and a plane never intersect": "A line can intersect a plane at one point or lie entirely within it.",
            "A line must pass through at least two planes": "A line can lie entirely within a single plane."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch4_t1_qm16',
        type: "mcq",
        question: "If A, B, C are three collinear points, which of these is impossible?",
        options: [
            "A is between B and C",
            "B is between A and C",
            "C is between A and B",
            "A, B, and C form a triangle"
        ],
        correctAnswer: "A, B, and C form a triangle",
        explanation: "Collinear points lie on a straight line, so they cannot form a triangle. ❌",
        wrongAnswerExplanations: {
            "A is between B and C": "This arrangement is possible for collinear points.",
            "B is between A and C": "This arrangement is possible for collinear points.",
            "C is between A and B": "This arrangement is possible for collinear points."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch4_t1_qm17',
        type: "mcq",
        question: "When do two rays form a line?",
        options: [
            "When they have the same endpoint and opposite directions",
            "When they have different endpoints but same direction",
            "When they have the same endpoint and same direction",
            "When they have no common points"
        ],
        correctAnswer: "When they have the same endpoint and opposite directions",
        explanation: "Two rays with the same endpoint pointing in opposite directions form a complete line. 📏",
        wrongAnswerExplanations: {
            "When they have different endpoints but same direction": "These would be parallel rays, not forming a line.",
            "When they have the same endpoint and same direction": "These would be the same ray, not a line.",
            "When they have no common points": "Two rays that form a line must share their endpoint."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch4_t1_qm18',
        type: "mcq",
        question: "If three points P, Q, and R lie on a circle, can they be collinear?",
        options: [
            "Always",
            "Never",
            "Only if the circle has infinite radius",
            "Only if two of the points are the same"
        ],
        correctAnswer: "Never",
        explanation: "Three distinct points on a circle cannot be collinear; they form a triangle inscribed in the circle. ⭕",
        wrongAnswerExplanations: {
            "Always": "Three distinct points on a circle are always non-collinear.",
            "Only if the circle has infinite radius": "A circle by definition has a finite radius.",
            "Only if two of the points are the same": "If points are the same, we don't have three distinct points."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch4_t1_qm19',
        type: "mcq",
        question: "If AB̅ is a line segment and C is a point on AB̅ such that AC = CB, what is C called?",
        options: ["Endpoint", "Midpoint", "Centerpoint", "Intersection point"],
        correctAnswer: "Midpoint",
        explanation: "If C divides AB such that AC = CB, then C is the midpoint of segment AB. 📊",
        wrongAnswerExplanations: {
            "Endpoint": "Endpoints are the terminal points of a line segment, not a point on it.",
            "Centerpoint": "This is not a standard term in geometry for this concept.",
            "Intersection point": "This term is used when two or more lines meet."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch4_t1_qm20',
        type: "mcq",
        question: "What is the minimum number of points needed to determine a unique plane in space?",
        options: ["2", "3", "4", "Infinitely many"],
        correctAnswer: "3",
        explanation: "Three non-collinear points uniquely determine a plane in space. 📋",
        wrongAnswerExplanations: {
            "2": "Two points determine a line, not a unique plane.",
            "4": "Only three non-collinear points are needed to determine a plane.",
            "Infinitely many": "Just three non-collinear points are sufficient."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    }
];
