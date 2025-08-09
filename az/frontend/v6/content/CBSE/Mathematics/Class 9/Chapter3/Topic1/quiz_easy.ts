// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 9\Chapter3\Topic1\quiz_easy.ts
import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl9_ch3_t1_qe1',
        type: "mcq",
        question: "What is the origin of the Cartesian coordinate system?",
        options: [
            "(1, 1)",
            "(0, 0)",
            "(1, 0)",
            "(0, 1)"
        ],
        correctAnswer: "(0, 0)",
        explanation: "The origin is the point where the x-axis and y-axis intersect, and its coordinates are (0, 0). ⭐",
        wrongAnswerExplanations: {
            "(1, 1)": "This point is located 1 unit right and 1 unit up from the origin.",
            "(1, 0)": "This point is located 1 unit right from the origin on the x-axis.",
            "(0, 1)": "This point is located 1 unit up from the origin on the y-axis."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch3_t1_qe2',
        type: "mcq",
        question: "Which quadrant contains points where both x and y coordinates are positive?",
        options: [
            "First quadrant",
            "Second quadrant",
            "Third quadrant",
            "Fourth quadrant"
        ],
        correctAnswer: "First quadrant",
        explanation: "The first quadrant (top-right) contains all points where both x > 0 and y > 0. ↗️",
        wrongAnswerExplanations: {
            "Second quadrant": "The second quadrant (top-left) contains points where x < 0 and y > 0.",
            "Third quadrant": "The third quadrant (bottom-left) contains points where both x < 0 and y < 0.",
            "Fourth quadrant": "The fourth quadrant (bottom-right) contains points where x > 0 and y < 0."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch3_t1_qe3',
        type: "mcq",
        question: "Which of the following points lies in the third quadrant?",
        options: [
            "(3, -4)",
            "(-5, 2)",
            "(-3, -2)",
            "(4, 5)"
        ],
        correctAnswer: "(-3, -2)",
        explanation: "The point (-3, -2) has both x and y negative, which means it lies in the third quadrant. ↙️",
        wrongAnswerExplanations: {
            "(3, -4)": "This point has x positive and y negative, so it lies in the fourth quadrant.",
            "(-5, 2)": "This point has x negative and y positive, so it lies in the second quadrant.",
            "(4, 5)": "This point has both x and y positive, so it lies in the first quadrant."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 35
    },
    {
        id: 'cl9_ch3_t1_qe4',
        type: "mcq",
        question: "What are the coordinates of a point on the y-axis?",
        options: [
            "(a, 0) where a ≠ 0",
            "(0, b) where b ≠ 0",
            "(a, a) where a ≠ 0",
            "(b, b) where b ≠ 0"
        ],
        correctAnswer: "(0, b) where b ≠ 0",
        explanation: "Points on the y-axis have an x-coordinate of 0 and any non-zero value of y, represented as (0, b) where b ≠ 0. ↕️",
        wrongAnswerExplanations: {
            "(a, 0) where a ≠ 0": "These are points on the x-axis, not the y-axis.",
            "(a, a) where a ≠ 0": "These are points on the line y = x, not specifically on the y-axis.",
            "(b, b) where b ≠ 0": "These are points on the line y = x, not specifically on the y-axis."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 40
    },
    {
        id: 'cl9_ch3_t1_qe5',
        type: "mcq",
        question: "The point (-3, 0) lies on:",
        options: [
            "x-axis",
            "y-axis",
            "First quadrant",
            "Third quadrant"
        ],
        correctAnswer: "x-axis",
        explanation: "The point (-3, 0) has y = 0, which means it lies on the x-axis. Points on the x-axis have the form (a, 0). ↔️",
        wrongAnswerExplanations: {
            "y-axis": "Points on the y-axis have the form (0, b). This point has x = -3, not 0.",
            "First quadrant": "Points in the first quadrant have both x > 0 and y > 0.",
            "Third quadrant": "Points in the third quadrant have both x < 0 and y < 0."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch3_t1_qe6',
        type: "mcq",
        question: "Which quadrant contains the point (5, -3)?",
        options: [
            "First quadrant",
            "Second quadrant",
            "Third quadrant",
            "Fourth quadrant"
        ],
        correctAnswer: "Fourth quadrant",
        explanation: "The point (5, -3) has x > 0 and y < 0, which means it lies in the fourth quadrant. ↘️",
        wrongAnswerExplanations: {
            "First quadrant": "Points in the first quadrant have both x > 0 and y > 0.",
            "Second quadrant": "Points in the second quadrant have x < 0 and y > 0.",
            "Third quadrant": "Points in the third quadrant have both x < 0 and y < 0."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch3_t1_qe7',
        type: "mcq",
        question: "The coordinates of the origin are:",
        options: [
            "(0, 0)",
            "(1, 1)",
            "(∞, ∞)",
            "No specific coordinates"
        ],
        correctAnswer: "(0, 0)",
        explanation: "The origin is the point where both x and y coordinates are zero, represented as (0, 0). It's where the x-axis and y-axis intersect. ⭐",
        wrongAnswerExplanations: {
            "(1, 1)": "This point is located 1 unit right and 1 unit up from the origin.",
            "(∞, ∞)": "Points cannot have infinity as a coordinate in the standard Cartesian system.",
            "No specific coordinates": "The origin definitely has specific coordinates: (0, 0)."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 20
    },
    {
        id: 'cl9_ch3_t1_qe8',
        type: "mcq",
        question: "Which axis divides the coordinate plane into upper and lower halves?",
        options: [
            "x-axis",
            "y-axis",
            "z-axis",
            "No axis"
        ],
        correctAnswer: "x-axis",
        explanation: "The x-axis divides the coordinate plane into upper half (where y > 0) and lower half (where y < 0). ↔️",
        wrongAnswerExplanations: {
            "y-axis": "The y-axis divides the plane into left and right halves, not upper and lower.",
            "z-axis": "The z-axis is used in 3D coordinate systems, not in the 2D Cartesian plane.",
            "No axis": "The x-axis definitely divides the plane into upper and lower halves."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch3_t1_qe9',
        type: "mcq",
        question: "If you move 3 units left and 4 units down from the origin, what are your coordinates?",
        options: [
            "(3, 4)",
            "(-3, -4)",
            "(-3, 4)",
            "(3, -4)"
        ],
        correctAnswer: "(-3, -4)",
        explanation: "Moving left means negative x, and moving down means negative y. So 3 units left is x = -3 and 4 units down is y = -4, giving coordinates (-3, -4). ↙️",
        wrongAnswerExplanations: {
            "(3, 4)": "This would be 3 units right and 4 units up.",
            "(-3, 4)": "This would be 3 units left and 4 units up.",
            "(3, -4)": "This would be 3 units right and 4 units down."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 35
    },
    {
        id: 'cl9_ch3_t1_qe10',
        type: "mcq",
        question: "Which of the following points does NOT lie on the y-axis?",
        options: [
            "(0, 5)",
            "(0, -3)",
            "(0, 0)",
            "(2, 0)"
        ],
        correctAnswer: "(2, 0)",
        explanation: "Points on the y-axis have x = 0. The point (2, 0) has x = 2, so it does not lie on the y-axis. It actually lies on the x-axis. ↔️",
        wrongAnswerExplanations: {
            "(0, 5)": "This point has x = 0, so it lies on the y-axis.",
            "(0, -3)": "This point has x = 0, so it lies on the y-axis.",
            "(0, 0)": "This is the origin, which lies on both the x-axis and y-axis."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch3_t1_qe11',
        type: "mcq",
        question: "Which quadrant contains points with coordinates (x, y) where x < 0 and y > 0?",
        options: [
            "First quadrant",
            "Second quadrant",
            "Third quadrant",
            "Fourth quadrant"
        ],
        correctAnswer: "Second quadrant",
        explanation: "The second quadrant contains all points where x < 0 and y > 0. These points are located to the left of the y-axis and above the x-axis. ↖️",
        wrongAnswerExplanations: {
            "First quadrant": "The first quadrant contains points where both x > 0 and y > 0.",
            "Third quadrant": "The third quadrant contains points where both x < 0 and y < 0.",
            "Fourth quadrant": "The fourth quadrant contains points where x > 0 and y < 0."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch3_t1_qe12',
        type: "mcq",
        question: "Which of these points is NOT in the first quadrant?",
        options: [
            "(3, 4)",
            "(0, 5)",
            "(2, 3)",
            "(1, 7)"
        ],
        correctAnswer: "(0, 5)",
        explanation: "The point (0, 5) lies on the y-axis with x = 0. Points in the first quadrant must have both x > 0 and y > 0. ↕️",
        wrongAnswerExplanations: {
            "(3, 4)": "This point has both x > 0 and y > 0, so it is in the first quadrant.",
            "(2, 3)": "This point has both x > 0 and y > 0, so it is in the first quadrant.",
            "(1, 7)": "This point has both x > 0 and y > 0, so it is in the first quadrant."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 35
    },
    {
        id: 'cl9_ch3_t1_qe13',
        type: "mcq",
        question: "What does the x-coordinate of a point represent?",
        options: [
            "The vertical distance from the x-axis",
            "The horizontal distance from the y-axis",
            "The distance from the origin",
            "The angle with the positive x-axis"
        ],
        correctAnswer: "The horizontal distance from the y-axis",
        explanation: "The x-coordinate represents the horizontal distance from the y-axis. Positive x means to the right of the y-axis, negative x means to the left. ↔️",
        wrongAnswerExplanations: {
            "The vertical distance from the x-axis": "This is what the y-coordinate represents, not the x-coordinate.",
            "The distance from the origin": "This would involve both coordinates and the Pythagorean theorem.",
            "The angle with the positive x-axis": "This would be relevant in polar coordinates, not in Cartesian coordinates."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 35
    },
    {
        id: 'cl9_ch3_t1_qe14',
        type: "mcq",
        question: "Which quadrant contains the point (-4, -7)?",
        options: [
            "First quadrant",
            "Second quadrant",
            "Third quadrant",
            "Fourth quadrant"
        ],
        correctAnswer: "Third quadrant",
        explanation: "The point (-4, -7) has both x < 0 and y < 0, which means it lies in the third quadrant. ↙️",
        wrongAnswerExplanations: {
            "First quadrant": "Points in the first quadrant have both x > 0 and y > 0.",
            "Second quadrant": "Points in the second quadrant have x < 0 and y > 0.",
            "Fourth quadrant": "Points in the fourth quadrant have x > 0 and y < 0."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch3_t1_qe15',
        type: "mcq",
        question: "If a point lies on the x-axis, what can you say about its y-coordinate?",
        options: [
            "y = 1",
            "y = 0",
            "y = x",
            "y > 0"
        ],
        correctAnswer: "y = 0",
        explanation: "All points on the x-axis have y-coordinate equal to zero. They have the form (a, 0) where a is any real number. ↔️",
        wrongAnswerExplanations: {
            "y = 1": "Points with y = 1 lie on a horizontal line 1 unit above the x-axis.",
            "y = x": "Points with y = x lie on a diagonal line through the origin.",
            "y > 0": "Points with y > 0 lie above the x-axis, not on it."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch3_t1_qe16',
        type: "mcq",
        question: "Which of the following points lies on both the x and y axes?",
        options: [
            "(1, 0)",
            "(0, 1)",
            "(0, 0)",
            "(1, 1)"
        ],
        correctAnswer: "(0, 0)",
        explanation: "The point (0, 0) is the origin, which is the intersection of the x and y axes. It's the only point that lies on both axes. ⭐",
        wrongAnswerExplanations: {
            "(1, 0)": "This point lies only on the x-axis, not on the y-axis.",
            "(0, 1)": "This point lies only on the y-axis, not on the x-axis.",
            "(1, 1)": "This point doesn't lie on either axis; it's in the first quadrant."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch3_t1_qe17',
        type: "mcq",
        question: "If you move 4 units right and 3 units up from the origin, what point do you reach?",
        options: [
            "(4, 3)",
            "(3, 4)",
            "(-4, 3)",
            "(3, -4)"
        ],
        correctAnswer: "(4, 3)",
        explanation: "Moving right means positive x, and moving up means positive y. So 4 units right is x = 4 and 3 units up is y = 3, giving coordinates (4, 3). ↗️",
        wrongAnswerExplanations: {
            "(3, 4)": "This would be 3 units right and 4 units up, not 4 right and 3 up.",
            "(-4, 3)": "This would be 4 units left and 3 units up, not right and up.",
            "(3, -4)": "This would be 3 units right and 4 units down, not right and up."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 35
    },
    {
        id: 'cl9_ch3_t1_qe18',
        type: "mcq",
        question: "What is the name of the coordinate system we commonly use in mathematics?",
        options: [
            "Fibonacci coordinate system",
            "Newton coordinate system",
            "Euler coordinate system",
            "Cartesian coordinate system"
        ],
        correctAnswer: "Cartesian coordinate system",
        explanation: "The coordinate system with x and y axes is called the Cartesian coordinate system, named after René Descartes who formalized its use in mathematics. 📊",
        wrongAnswerExplanations: {
            "Fibonacci coordinate system": "There is no standard coordinate system named after Fibonacci.",
            "Newton coordinate system": "While Newton made important contributions to mathematics, the standard coordinate system is not named after him.",
            "Euler coordinate system": "Euler contributed to many areas of mathematics, but the standard coordinate system is not named after him."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch3_t1_qe19',
        type: "mcq",
        question: "Which of the following statements is true about the point (0, -3)?",
        options: [
            "It lies in the third quadrant",
            "It lies in the fourth quadrant",
            "It lies on the x-axis",
            "It lies on the y-axis"
        ],
        correctAnswer: "It lies on the y-axis",
        explanation: "The point (0, -3) has x = 0, which means it lies on the y-axis, specifically 3 units below the origin. ↕️",
        wrongAnswerExplanations: {
            "It lies in the third quadrant": "Points in the third quadrant have both x < 0 and y < 0.",
            "It lies in the fourth quadrant": "Points in the fourth quadrant have x > 0 and y < 0.",
            "It lies on the x-axis": "Points on the x-axis have y = 0, but this point has y = -3."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 35
    },
    {
        id: 'cl9_ch3_t1_qe20',
        type: "mcq",
        question: "What divides the coordinate plane into left and right halves?",
        options: [
            "x-axis",
            "y-axis",
            "Origin",
            "Both axes"
        ],
        correctAnswer: "y-axis",
        explanation: "The y-axis divides the coordinate plane into a left half (where x < 0) and a right half (where x > 0). ↕️",
        wrongAnswerExplanations: {
            "x-axis": "The x-axis divides the plane into upper and lower halves, not left and right.",
            "Origin": "The origin is a point, not a line, so it doesn't divide the plane into halves.",
            "Both axes": "Together, both axes divide the plane into four quadrants, not halves."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    }
];
