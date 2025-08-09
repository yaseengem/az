import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl6_ch14_t3_qe1',
        type: "mcq",
        question: "What is the first step in constructing a perpendicular bisector?",
        options: ["Draw arcs", "Draw the line segment", "Open the compass", "Mark points"],
        correctAnswer: "Draw the line segment",
        explanation: "The first step is to draw a clear line segment that you want to bisect. 📏",
        wrongAnswerExplanations: {
            "Draw arcs": "Drawing arcs comes after setting up the line segment.",
            "Open the compass": "Opening the compass comes after drawing the line segment.",
            "Mark points": "Points are marked while drawing the line segment."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch14_t3_qe2',
        type: "mcq",
        question: "What angle does a perpendicular bisector make with the line segment?",
        options: ["45°", "60°", "90°", "180°"],
        correctAnswer: "90°",
        explanation: "A perpendicular bisector always makes a right angle (90°) with the line segment. 📐",
        wrongAnswerExplanations: {
            "45°": "45° is half of a right angle, not the correct angle.",
            "60°": "60° is the angle in an equilateral triangle, not the correct angle.",
            "180°": "180° is a straight line, not the correct angle."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch14_t3_qe3',
        type: "mcq",
        question: "What tool do you use to draw the line segment?",
        options: ["Compass", "Protractor", "Ruler", "Set square"],
        correctAnswer: "Ruler",
        explanation: "A ruler is used to draw a straight line segment of the desired length. 📏",
        wrongAnswerExplanations: {
            "Compass": "The compass is used for drawing arcs, not the initial line segment.",
            "Protractor": "A protractor measures angles, not draws lines.",
            "Set square": "A set square is used for drawing angles, not the initial line segment."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch14_t3_qe4',
        type: "mcq",
        question: "How many points of intersection do you need to draw the perpendicular bisector?",
        options: ["1", "2", "3", "4"],
        correctAnswer: "2",
        explanation: "You need two points of intersection from the arcs to draw the perpendicular bisector. ✖️",
        wrongAnswerExplanations: {
            "1": "One point is not enough to draw a line.",
            "3": "Three points are more than needed.",
            "4": "Four points are more than needed."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch14_t3_qe5',
        type: "mcq",
        question: "What must be true about the compass width when drawing arcs?",
        options: ["Less than half the length", "Exactly half the length", "More than half the length", "Equal to the length"],
        correctAnswer: "More than half the length",
        explanation: "The compass must be opened more than half the length to ensure the arcs intersect. 📏",
        wrongAnswerExplanations: {
            "Less than half the length": "Arcs won't intersect if the compass is too small.",
            "Exactly half the length": "Arcs might not intersect if exactly half.",
            "Equal to the length": "This would make the arcs too large and unnecessary."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch14_t3_qe6',
        type: "mcq",
        question: "What does a perpendicular bisector do to a line segment?",
        options: ["Doubles it", "Divides it equally", "Makes it longer", "Changes its direction"],
        correctAnswer: "Divides it equally",
        explanation: "A perpendicular bisector divides the line segment into two equal parts. 📏",
        wrongAnswerExplanations: {
            "Doubles it": "A bisector doesn't change the length of the segment.",
            "Makes it longer": "A bisector doesn't change the length of the segment.",
            "Changes its direction": "A bisector is perpendicular but doesn't change the original segment's direction."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch14_t3_qe7',
        type: "mcq",
        question: "Where does the perpendicular bisector pass through?",
        options: ["One endpoint", "The midpoint", "Any random point", "Outside the segment"],
        correctAnswer: "The midpoint",
        explanation: "The perpendicular bisector always passes through the midpoint of the segment. 📍",
        wrongAnswerExplanations: {
            "One endpoint": "It passes through the midpoint, not an endpoint.",
            "Any random point": "It must pass through the midpoint specifically.",
            "Outside the segment": "It must intersect the segment at its midpoint."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch14_t3_qe8',
        type: "mcq",
        question: "What should you do after drawing the arcs from both endpoints?",
        options: ["Erase the arcs", "Draw more arcs", "Join the intersection points", "Measure the angles"],
        correctAnswer: "Join the intersection points",
        explanation: "After drawing the arcs, you join their intersection points to create the perpendicular bisector. 📐",
        wrongAnswerExplanations: {
            "Erase the arcs": "The arcs should remain as construction lines.",
            "Draw more arcs": "No more arcs are needed after the initial ones.",
            "Measure the angles": "Angles are verified after drawing the bisector."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch14_t3_qe9',
        type: "mcq",
        question: "What is the purpose of the perpendicular bisector in geometry?",
        options: ["To make lines longer", "To create angles", "To find midpoints", "To erase lines"],
        correctAnswer: "To find midpoints",
        explanation: "One of the main purposes of a perpendicular bisector is to find the exact midpoint of a line segment. 📍",
        wrongAnswerExplanations: {
            "To make lines longer": "A bisector doesn't change line lengths.",
            "To create angles": "While it creates a right angle, that's not its main purpose.",
            "To erase lines": "A bisector doesn't erase anything."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch14_t3_qe10',
        type: "mcq",
        question: "What should you do if the arcs don't intersect?",
        options: ["Draw them again", "Make the compass wider", "Use a different tool", "Start over"],
        correctAnswer: "Make the compass wider",
        explanation: "If arcs don't intersect, the compass width should be increased to more than half the segment length. 📏",
        wrongAnswerExplanations: {
            "Draw them again": "Drawing again with the same width won't help.",
            "Use a different tool": "The compass is the correct tool, just needs adjustment.",
            "Start over": "Just adjusting the compass width is sufficient."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch14_t3_qe11',
        type: "mcq",
        question: "What property do all points on the perpendicular bisector share?",
        options: ["Same color", "Same distance from endpoints", "Same size", "Same shape"],
        correctAnswer: "Same distance from endpoints",
        explanation: "Every point on the perpendicular bisector is equidistant from both endpoints of the segment. 📏",
        wrongAnswerExplanations: {
            "Same color": "Color is not a geometric property.",
            "Same size": "Points don't have size in geometry.",
            "Same shape": "Points don't have shape in geometry."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch14_t3_qe12',
        type: "mcq",
        question: "How can you verify your perpendicular bisector is correct?",
        options: ["Measure the angles", "Count the points", "Check the color", "Feel the paper"],
        correctAnswer: "Measure the angles",
        explanation: "You can verify the construction by measuring the angles to ensure they are 90°. 📐",
        wrongAnswerExplanations: {
            "Count the points": "Counting points doesn't verify correctness.",
            "Check the color": "Color is not relevant to geometric construction.",
            "Feel the paper": "Physical feel doesn't verify geometric properties."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch14_t3_qe13',
        type: "mcq",
        question: "What should you do before starting the construction?",
        options: ["Sharpen your pencil", "Clean the paper", "Wash your hands", "All of these"],
        correctAnswer: "All of these",
        explanation: "Good preparation includes sharpening the pencil, cleaning the paper, and ensuring clean hands for accurate work. ✏️",
        wrongAnswerExplanations: {
            "Sharpen your pencil": "This is important but not the only preparation needed.",
            "Clean the paper": "This is important but not the only preparation needed.",
            "Wash your hands": "This is important but not the only preparation needed."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch14_t3_qe14',
        type: "mcq",
        question: "What is the minimum number of tools needed for this construction?",
        options: ["1", "2", "3", "4"],
        correctAnswer: "2",
        explanation: "You need at least a compass and a ruler for this construction. 🛠️",
        wrongAnswerExplanations: {
            "1": "One tool is not enough for this construction.",
            "3": "While helpful, only two tools are essential.",
            "4": "While helpful, only two tools are essential."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch14_t3_qe15',
        type: "mcq",
        question: "What should you do if the compass slips while drawing arcs?",
        options: ["Continue drawing", "Start over", "Press harder", "Use tape"],
        correctAnswer: "Start over",
        explanation: "If the compass slips, it's best to start over to ensure accuracy. ⚠️",
        wrongAnswerExplanations: {
            "Continue drawing": "Continuing with a slipped compass will result in incorrect construction.",
            "Press harder": "Pressing harder can damage the paper.",
            "Use tape": "Tape is not a proper solution for a slipping compass."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch14_t3_qe16',
        type: "mcq",
        question: "What shape do the intersecting arcs create?",
        options: ["Triangle", "Square", "Diamond", "None of these"],
        correctAnswer: "None of these",
        explanation: "The intersecting arcs create points of intersection, not a specific shape. ✖️",
        wrongAnswerExplanations: {
            "Triangle": "The arcs don't form a triangle.",
            "Square": "The arcs don't form a square.",
            "Diamond": "The arcs don't form a diamond."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch14_t3_qe17',
        type: "mcq",
        question: "What should you do after completing the construction?",
        options: ["Erase everything", "Verify the measurements", "Color it in", "Fold the paper"],
        correctAnswer: "Verify the measurements",
        explanation: "Always verify the measurements to ensure the construction is correct. ✅",
        wrongAnswerExplanations: {
            "Erase everything": "Construction lines should be kept for reference.",
            "Color it in": "Coloring is not necessary for geometric construction.",
            "Fold the paper": "Folding is not part of the verification process."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch14_t3_qe18',
        type: "mcq",
        question: "What is the relationship between the perpendicular bisector and the original segment?",
        options: ["Parallel", "Perpendicular", "Oblique", "Coinciding"],
        correctAnswer: "Perpendicular",
        explanation: "The bisector is perpendicular to the original segment, meaning they meet at 90°. 📐",
        wrongAnswerExplanations: {
            "Parallel": "Parallel lines never meet, but the bisector intersects the segment.",
            "Oblique": "Oblique lines meet at angles other than 90°.",
            "Coinciding": "The bisector is a separate line, not the same as the segment."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch14_t3_qe19',
        type: "mcq",
        question: "What should you do if the perpendicular bisector doesn't look straight?",
        options: ["Ignore it", "Draw it freehand", "Use a ruler", "Make it wavy"],
        correctAnswer: "Use a ruler",
        explanation: "Always use a ruler to ensure the perpendicular bisector is perfectly straight. 📏",
        wrongAnswerExplanations: {
            "Ignore it": "Accuracy is important in geometric construction.",
            "Draw it freehand": "Freehand drawing won't ensure straightness.",
            "Make it wavy": "A perpendicular bisector must be straight."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch14_t3_qe20',
        type: "mcq",
        question: "What is the final step in constructing a perpendicular bisector?",
        options: ["Draw the line", "Measure the angles", "Erase the arcs", "All of these"],
        correctAnswer: "All of these",
        explanation: "The final steps include drawing the line, verifying the angles, and cleaning up the construction. ✅",
        wrongAnswerExplanations: {
            "Draw the line": "This is important but not the only final step.",
            "Measure the angles": "This is important but not the only final step.",
            "Erase the arcs": "This is important but not the only final step."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    }
]; 