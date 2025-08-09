import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl8_ch13_t2_qm1',
        type: "mcq",
        question: "What are the coordinates of the point where the x-axis and y-axis intersect?",
        options: [
            "(0, 0)",
            "(1, 1)",
            "(0, 1)",
            "(1, 0)"
        ],
        correctAnswer: "(0, 0)",
        explanation: "The x and y axes intersect at the origin, which has coordinates (0, 0). This point is the reference for all other points. 📍",
        wrongAnswerExplanations: {
            "(1, 1)": "This point is one unit right and one unit up from the origin.",
            "(0, 1)": "This point lies one unit up on the y-axis.",
            "(1, 0)": "This point lies one unit right on the x-axis."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch13_t2_qm2',
        type: "mcq",
        question: "Which quadrant contains points with both negative x and y coordinates?",
        options: [
            "First quadrant",
            "Second quadrant",
            "Third quadrant",
            "Fourth quadrant"
        ],
        correctAnswer: "Third quadrant",
        explanation: "The third quadrant (lower left) contains points where both x and y coordinates are negative (-x, -y). 📉",
        wrongAnswerExplanations: {
            "First quadrant": "First quadrant has (+x, +y) coordinates.",
            "Second quadrant": "Second quadrant has (-x, +y) coordinates.",
            "Fourth quadrant": "Fourth quadrant has (+x, -y) coordinates."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch13_t2_qm3',
        type: "mcq",
        question: "If a point moves 3 units right and 4 units up from (-2, -1), what are its new coordinates?",
        options: [
            "(1, 3)",
            "(1, -5)",
            "(-5, 3)",
            "(5, -3)"
        ],
        correctAnswer: "(1, 3)",
        explanation: "From (-2, -1), moving right 3 units: -2 + 3 = 1, moving up 4 units: -1 + 4 = 3, giving (1, 3). 🔄",
        wrongAnswerExplanations: {
            "(1, -5)": "Moving up adds to y, not subtracts.",
            "(-5, 3)": "Moving right adds to x, not subtracts.",
            "(5, -3)": "Both calculations are incorrect."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl8_ch13_t2_qm4',
        type: "mcq",
        question: "Which point lies on the y-axis?",
        options: [
            "(0, 5)",
            "(5, 0)",
            "(5, 5)",
            "(-5, 5)"
        ],
        correctAnswer: "(0, 5)",
        explanation: "Points on the y-axis always have x-coordinate = 0, so (0, 5) lies on the y-axis. 📊",
        wrongAnswerExplanations: {
            "(5, 0)": "This point lies on the x-axis.",
            "(5, 5)": "This point is in the first quadrant.",
            "(-5, 5)": "This point is in the second quadrant."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch13_t2_qm5',
        type: "mcq",
        question: "What is the distance of point (3, 4) from the origin?",
        options: [
            "5 units",
            "7 units",
            "1 unit",
            "25 units"
        ],
        correctAnswer: "5 units",
        explanation: "Using distance formula √(3² + 4²) = √(9 + 16) = √25 = 5 units. 📏",
        wrongAnswerExplanations: {
            "7 units": "This is just adding x and y coordinates.",
            "1 unit": "This is too small for the given point.",
            "25 units": "This is the square of the distance."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl8_ch13_t2_qm6',
        type: "mcq",
        question: "Which point is equidistant from both axes?",
        options: [
            "(4, 4)",
            "(4, 0)",
            "(0, 4)",
            "(4, -4)"
        ],
        correctAnswer: "(4, 4)",
        explanation: "Point (4, 4) is 4 units from both axes, making it equidistant. Equal x and y coordinates mean equal distances. 📐",
        wrongAnswerExplanations: {
            "(4, 0)": "This point is on x-axis, 4 units from y-axis only.",
            "(0, 4)": "This point is on y-axis, 4 units from x-axis only.",
            "(4, -4)": "While absolute values are equal, signs differ."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch13_t2_qm7',
        type: "mcq",
        question: "If point A(2, 3) is reflected across the y-axis, what are its new coordinates?",
        options: [
            "(-2, 3)",
            "(2, -3)",
            "(-2, -3)",
            "(3, 2)"
        ],
        correctAnswer: "(-2, 3)",
        explanation: "Reflection across y-axis changes x to -x while y remains same, so (2, 3) becomes (-2, 3). 🪞",
        wrongAnswerExplanations: {
            "(2, -3)": "This is reflection across x-axis.",
            "(-2, -3)": "This changes both coordinates incorrectly.",
            "(3, 2)": "This swaps x and y coordinates."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch13_t2_qm8',
        type: "mcq",
        question: "Which quadrant contains the point (-3, 2)?",
        options: [
            "First quadrant",
            "Second quadrant",
            "Third quadrant",
            "Fourth quadrant"
        ],
        correctAnswer: "Second quadrant",
        explanation: "Point (-3, 2) has negative x and positive y coordinates, placing it in the second quadrant. 📍",
        wrongAnswerExplanations: {
            "First quadrant": "First quadrant has both coordinates positive.",
            "Third quadrant": "Third quadrant has both coordinates negative.",
            "Fourth quadrant": "Fourth quadrant has positive x, negative y."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch13_t2_qm9',
        type: "mcq",
        question: "What happens to point (4, -5) when reflected across both axes?",
        options: [
            "(-4, 5)",
            "(4, 5)",
            "(-4, -5)",
            "(5, -4)"
        ],
        correctAnswer: "(-4, 5)",
        explanation: "Reflecting across both axes changes both signs: x becomes -x and y becomes -y, so (4, -5) → (-4, 5). 🔄",
        wrongAnswerExplanations: {
            "(4, 5)": "This only changes y's sign.",
            "(-4, -5)": "This only changes x's sign.",
            "(5, -4)": "This swaps and changes signs incorrectly."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl8_ch13_t2_qm10',
        type: "mcq",
        question: "Which point lies exactly 3 units below the x-axis?",
        options: [
            "(2, -3)",
            "(3, -2)",
            "(-3, -3)",
            "(0, 3)"
        ],
        correctAnswer: "(2, -3)",
        explanation: "Any point with y = -3 lies 3 units below x-axis, regardless of x-coordinate. (2, -3) satisfies this. 📉",
        wrongAnswerExplanations: {
            "(3, -2)": "This is only 2 units below x-axis.",
            "(-3, -3)": "While y is correct, negative x isn't required.",
            "(0, 3)": "This is 3 units above x-axis."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch13_t2_qm11',
        type: "mcq",
        question: "What are the coordinates of a point that is twice as far from the x-axis as from the y-axis?",
        options: [
            "(2, 4)",
            "(4, 2)",
            "(2, 2)",
            "(4, 4)"
        ],
        correctAnswer: "(2, 4)",
        explanation: "Distance from y-axis is |x| = 2, distance from x-axis is |y| = 4, making y twice x. 📏",
        wrongAnswerExplanations: {
            "(4, 2)": "This point is twice as far from y-axis as x-axis.",
            "(2, 2)": "This point is equally distant from both axes.",
            "(4, 4)": "This point is equally distant from both axes."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl8_ch13_t2_qm12',
        type: "mcq",
        question: "If you move a point 2 units left and 3 units down from (5, 1), what are its new coordinates?",
        options: [
            "(3, -2)",
            "(7, 4)",
            "(3, 4)",
            "(7, -2)"
        ],
        correctAnswer: "(3, -2)",
        explanation: "Moving left subtracts from x: 5 - 2 = 3, moving down subtracts from y: 1 - 3 = -2. 🔄",
        wrongAnswerExplanations: {
            "(7, 4)": "This adds instead of subtracting.",
            "(3, 4)": "Moving down should subtract from y.",
            "(7, -2)": "Moving left should subtract from x."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch13_t2_qm13',
        type: "mcq",
        question: "Which point forms a square with (0, 0), (3, 0), and (0, 3)?",
        options: [
            "(3, 3)",
            "(3, -3)",
            "(-3, 3)",
            "(-3, -3)"
        ],
        correctAnswer: "(3, 3)",
        explanation: "A square needs equal sides and right angles. (3, 3) completes the square with given points. 🟥",
        wrongAnswerExplanations: {
            "(3, -3)": "This point would form a rectangle, not a square.",
            "(-3, 3)": "This point is in wrong quadrant.",
            "(-3, -3)": "This point is too far from given points."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl8_ch13_t2_qm14',
        type: "mcq",
        question: "What type of line is formed by points with equal x and y coordinates?",
        options: [
            "A line passing through origin at 45°",
            "A horizontal line",
            "A vertical line",
            "A curved line"
        ],
        correctAnswer: "A line passing through origin at 45°",
        explanation: "Points where x = y form a straight line passing through origin at 45° angle. 📐",
        wrongAnswerExplanations: {
            "A horizontal line": "Horizontal lines have constant y-coordinates.",
            "A vertical line": "Vertical lines have constant x-coordinates.",
            "A curved line": "Equal coordinates form a straight line."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch13_t2_qm15',
        type: "mcq",
        question: "Which point is closest to the origin among these options?",
        options: [
            "(1, 1)",
            "(2, 0)",
            "(-1, -2)",
            "(2, 1)"
        ],
        correctAnswer: "(1, 1)",
        explanation: "Distance = √(x² + y²). For (1, 1), it's √2 ≈ 1.4 units, which is smallest among given options. 📏",
        wrongAnswerExplanations: {
            "(2, 0)": "Distance is 2 units.",
            "(-1, -2)": "Distance is √5 ≈ 2.2 units.",
            "(2, 1)": "Distance is √5 ≈ 2.2 units."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl8_ch13_t2_qm16',
        type: "mcq",
        question: "What happens to the coordinates when a point is rotated 90° clockwise around the origin?",
        options: [
            "(x, y) becomes (y, -x)",
            "(x, y) becomes (-y, x)",
            "(x, y) becomes (-x, -y)",
            "(x, y) becomes (y, x)"
        ],
        correctAnswer: "(x, y) becomes (y, -x)",
        explanation: "90° clockwise rotation transforms (x, y) to (y, -x). Example: (2, 3) becomes (3, -2). 🔄",
        wrongAnswerExplanations: {
            "(x, y) becomes (-y, x)": "This is counterclockwise rotation.",
            "(x, y) becomes (-x, -y)": "This is 180° rotation.",
            "(x, y) becomes (y, x)": "This just swaps coordinates."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl8_ch13_t2_qm17',
        type: "mcq",
        question: "Which point lies on the perpendicular bisector of the line segment joining (0, 0) and (6, 0)?",
        options: [
            "(3, 3)",
            "(3, 0)",
            "(0, 3)",
            "(6, 3)"
        ],
        correctAnswer: "(3, 3)",
        explanation: "Perpendicular bisector passes through midpoint (3, 0) and is perpendicular to x-axis. (3, 3) lies on it. 📐",
        wrongAnswerExplanations: {
            "(3, 0)": "This is the midpoint but not on perpendicular.",
            "(0, 3)": "This point isn't on the perpendicular bisector.",
            "(6, 3)": "This point isn't on the perpendicular bisector."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl8_ch13_t2_qm18',
        type: "mcq",
        question: "If point P(a, b) is equidistant from both axes and lies in the first quadrant, what can you conclude?",
        options: [
            "a = b and both are positive",
            "a = -b",
            "a = b and both are negative",
            "a ≠ b and both are positive"
        ],
        correctAnswer: "a = b and both are positive",
        explanation: "First quadrant means positive coordinates, equidistant means equal coordinates, so a = b > 0. 📍",
        wrongAnswerExplanations: {
            "a = -b": "This would place point in 2nd or 4th quadrant.",
            "a = b and both are negative": "This would place point in 3rd quadrant.",
            "a ≠ b and both are positive": "Unequal coordinates mean unequal distances."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch13_t2_qm19',
        type: "mcq",
        question: "Which point represents the midpoint of the line segment joining (-2, 4) and (6, -2)?",
        options: [
            "(2, 1)",
            "(4, 2)",
            "(-4, 1)",
            "(2, -1)"
        ],
        correctAnswer: "(2, 1)",
        explanation: "Midpoint coordinates: x = (-2 + 6)/2 = 2, y = (4 + -2)/2 = 1, giving (2, 1). 📏",
        wrongAnswerExplanations: {
            "(4, 2)": "This point is too far right.",
            "(-4, 1)": "This point is too far left.",
            "(2, -1)": "The y-coordinate is incorrect."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl8_ch13_t2_qm20',
        type: "mcq",
        question: "What are the coordinates of a point that is twice as far from the origin as point (2, 2)?",
        options: [
            "(4, 4)",
            "(2, 4)",
            "(4, 2)",
            "(0, 4)"
        ],
        correctAnswer: "(4, 4)",
        explanation: "Distance from origin doubles when coordinates double. (2, 2) → (4, 4) doubles distance. 📏",
        wrongAnswerExplanations: {
            "(2, 4)": "Only doubling one coordinate doesn't double distance.",
            "(4, 2)": "Only doubling one coordinate doesn't double distance.",
            "(0, 4)": "This point isn't twice as far from origin."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    }
]; 