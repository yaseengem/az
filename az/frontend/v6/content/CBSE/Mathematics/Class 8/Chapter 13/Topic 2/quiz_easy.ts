import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl8_ch13_t2_qe1',
        type: "mcq",
        question: "What is the name of the horizontal axis in a coordinate plane?",
        options: [
            "x-axis",
            "y-axis",
            "z-axis",
            "Origin axis"
        ],
        correctAnswer: "x-axis",
        explanation: "The horizontal line in a coordinate plane is called the x-axis. It runs left to right. 📏",
        wrongAnswerExplanations: {
            "y-axis": "The y-axis is the vertical line.",
            "z-axis": "The z-axis is used in 3D coordinates.",
            "Origin axis": "There is no axis called origin axis."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch13_t2_qe2',
        type: "mcq",
        question: "What is the name of the vertical axis in a coordinate plane?",
        options: [
            "y-axis",
            "x-axis",
            "z-axis",
            "Center axis"
        ],
        correctAnswer: "y-axis",
        explanation: "The vertical line in a coordinate plane is called the y-axis. It runs bottom to top. 📏",
        wrongAnswerExplanations: {
            "x-axis": "The x-axis is the horizontal line.",
            "z-axis": "The z-axis is used in 3D coordinates.",
            "Center axis": "There is no axis called center axis."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch13_t2_qe3',
        type: "mcq",
        question: "What do we call the point where the x-axis and y-axis meet?",
        options: [
            "Origin",
            "Center point",
            "Meeting point",
            "Zero point"
        ],
        correctAnswer: "Origin",
        explanation: "The point where x and y axes intersect is called the origin. It has coordinates (0, 0). 📍",
        wrongAnswerExplanations: {
            "Center point": "While it's at the center, it's called the origin.",
            "Meeting point": "The correct term is origin.",
            "Zero point": "While coordinates are (0,0), it's called origin."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch13_t2_qe4',
        type: "mcq",
        question: "In the coordinate (3, 4), which number represents the x-coordinate?",
        options: [
            "3",
            "4",
            "Both 3 and 4",
            "Neither 3 nor 4"
        ],
        correctAnswer: "3",
        explanation: "In an ordered pair (x, y), the first number is the x-coordinate. Here, 3 is the x-coordinate. 📊",
        wrongAnswerExplanations: {
            "4": "4 is the y-coordinate (second number).",
            "Both 3 and 4": "Only 3 is the x-coordinate.",
            "Neither 3 nor 4": "3 is definitely the x-coordinate."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch13_t2_qe5',
        type: "mcq",
        question: "Which direction do the numbers increase on the x-axis?",
        options: [
            "Left to right",
            "Right to left",
            "Top to bottom",
            "Bottom to top"
        ],
        correctAnswer: "Left to right",
        explanation: "On the x-axis, numbers increase as you move from left to right. Negative numbers are on the left. ➡️",
        wrongAnswerExplanations: {
            "Right to left": "Numbers decrease from right to left.",
            "Top to bottom": "This relates to y-axis, not x-axis.",
            "Bottom to top": "This relates to y-axis, not x-axis."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch13_t2_qe6',
        type: "mcq",
        question: "Which direction do the numbers increase on the y-axis?",
        options: [
            "Bottom to top",
            "Top to bottom",
            "Left to right",
            "Right to left"
        ],
        correctAnswer: "Bottom to top",
        explanation: "On the y-axis, numbers increase as you move from bottom to top. Negative numbers are below origin. ⬆️",
        wrongAnswerExplanations: {
            "Top to bottom": "Numbers decrease from top to bottom.",
            "Left to right": "This relates to x-axis, not y-axis.",
            "Right to left": "This relates to x-axis, not y-axis."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch13_t2_qe7',
        type: "mcq",
        question: "What are the coordinates of a point located 3 units right of the origin?",
        options: [
            "(3, 0)",
            "(0, 3)",
            "(-3, 0)",
            "(3, 3)"
        ],
        correctAnswer: "(3, 0)",
        explanation: "Moving 3 units right means +3 on x-axis, no change in y. So coordinates are (3, 0). 📏",
        wrongAnswerExplanations: {
            "(0, 3)": "This point is 3 units up.",
            "(-3, 0)": "This point is 3 units left.",
            "(3, 3)": "This point is 3 units right and up."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch13_t2_qe8',
        type: "mcq",
        question: "What are the coordinates of a point located 2 units above the origin?",
        options: [
            "(0, 2)",
            "(2, 0)",
            "(0, -2)",
            "(2, 2)"
        ],
        correctAnswer: "(0, 2)",
        explanation: "Moving 2 units up means +2 on y-axis, no change in x. So coordinates are (0, 2). 📏",
        wrongAnswerExplanations: {
            "(2, 0)": "This point is 2 units right.",
            "(0, -2)": "This point is 2 units down.",
            "(2, 2)": "This point is 2 units right and up."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch13_t2_qe9',
        type: "mcq",
        question: "Which quadrant contains points where both x and y coordinates are positive?",
        options: [
            "First quadrant",
            "Second quadrant",
            "Third quadrant",
            "Fourth quadrant"
        ],
        correctAnswer: "First quadrant",
        explanation: "The first quadrant (upper right) contains points where both x and y are positive. 📍",
        wrongAnswerExplanations: {
            "Second quadrant": "Has negative x, positive y.",
            "Third quadrant": "Has negative x, negative y.",
            "Fourth quadrant": "Has positive x, negative y."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch13_t2_qe10',
        type: "mcq",
        question: "What are the coordinates of a point 2 units left of the origin?",
        options: [
            "(-2, 0)",
            "(2, 0)",
            "(0, -2)",
            "(0, 2)"
        ],
        correctAnswer: "(-2, 0)",
        explanation: "Moving 2 units left means -2 on x-axis, no change in y. So coordinates are (-2, 0). 📏",
        wrongAnswerExplanations: {
            "(2, 0)": "This point is 2 units right.",
            "(0, -2)": "This point is 2 units down.",
            "(0, 2)": "This point is 2 units up."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch13_t2_qe11',
        type: "mcq",
        question: "All points on the x-axis have what y-coordinate?",
        options: [
            "0",
            "1",
            "-1",
            "Any number"
        ],
        correctAnswer: "0",
        explanation: "All points on the x-axis have y-coordinate = 0. They are of the form (x, 0). 📊",
        wrongAnswerExplanations: {
            "1": "Points with y = 1 are one unit above x-axis.",
            "-1": "Points with y = -1 are one unit below x-axis.",
            "Any number": "Y-coordinate must be 0 for x-axis points."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch13_t2_qe12',
        type: "mcq",
        question: "All points on the y-axis have what x-coordinate?",
        options: [
            "0",
            "1",
            "-1",
            "Any number"
        ],
        correctAnswer: "0",
        explanation: "All points on the y-axis have x-coordinate = 0. They are of the form (0, y). 📊",
        wrongAnswerExplanations: {
            "1": "Points with x = 1 are one unit right of y-axis.",
            "-1": "Points with x = -1 are one unit left of y-axis.",
            "Any number": "X-coordinate must be 0 for y-axis points."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch13_t2_qe13',
        type: "mcq",
        question: "What are the coordinates of a point 3 units below the origin?",
        options: [
            "(0, -3)",
            "(0, 3)",
            "(-3, 0)",
            "(3, 0)"
        ],
        correctAnswer: "(0, -3)",
        explanation: "Moving 3 units down means -3 on y-axis, no change in x. So coordinates are (0, -3). 📏",
        wrongAnswerExplanations: {
            "(0, 3)": "This point is 3 units up.",
            "(-3, 0)": "This point is 3 units left.",
            "(3, 0)": "This point is 3 units right."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch13_t2_qe14',
        type: "mcq",
        question: "In which quadrant would you find the point (-3, 4)?",
        options: [
            "Second quadrant",
            "First quadrant",
            "Third quadrant",
            "Fourth quadrant"
        ],
        correctAnswer: "Second quadrant",
        explanation: "Point (-3, 4) has negative x and positive y, placing it in the second quadrant (upper left). 📍",
        wrongAnswerExplanations: {
            "First quadrant": "First quadrant has both coordinates positive.",
            "Third quadrant": "Third quadrant has both coordinates negative.",
            "Fourth quadrant": "Fourth quadrant has positive x, negative y."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch13_t2_qe15',
        type: "mcq",
        question: "How many units right and up is the point (2, 3) from the origin?",
        options: [
            "2 right and 3 up",
            "3 right and 2 up",
            "2 left and 3 up",
            "3 right and 2 down"
        ],
        correctAnswer: "2 right and 3 up",
        explanation: "Point (2, 3) is 2 units right (x = 2) and 3 units up (y = 3) from origin. 📏",
        wrongAnswerExplanations: {
            "3 right and 2 up": "This would be point (3, 2).",
            "2 left and 3 up": "This would be point (-2, 3).",
            "3 right and 2 down": "This would be point (3, -2)."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch13_t2_qe16',
        type: "mcq",
        question: "What do we call the pair of numbers used to locate a point on a coordinate plane?",
        options: [
            "Coordinates",
            "Points",
            "Numbers",
            "Locations"
        ],
        correctAnswer: "Coordinates",
        explanation: "The pair of numbers (x, y) used to locate a point are called coordinates. 📍",
        wrongAnswerExplanations: {
            "Points": "Points are located using coordinates.",
            "Numbers": "While coordinates are numbers, this isn't the correct term.",
            "Locations": "Locations are found using coordinates."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch13_t2_qe17',
        type: "mcq",
        question: "Which of these is a valid way to write coordinates?",
        options: [
            "(x, y)",
            "x, y",
            "{x, y}",
            "[x, y]"
        ],
        correctAnswer: "(x, y)",
        explanation: "Coordinates are written as ordered pairs in parentheses (x, y), with x first, y second. 📝",
        wrongAnswerExplanations: {
            "x, y": "Coordinates must be in parentheses.",
            "{x, y}": "Curly braces aren't used for coordinates.",
            "[x, y]": "Square brackets aren't used for coordinates."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch13_t2_qe18',
        type: "mcq",
        question: "What does the x-coordinate tell you?",
        options: [
            "Distance left or right from y-axis",
            "Distance up or down from x-axis",
            "Distance from origin",
            "Distance between two points"
        ],
        correctAnswer: "Distance left or right from y-axis",
        explanation: "X-coordinate tells how far left (-) or right (+) a point is from the y-axis. 📏",
        wrongAnswerExplanations: {
            "Distance up or down from x-axis": "This is what y-coordinate tells.",
            "Distance from origin": "This needs both coordinates.",
            "Distance between two points": "This needs two pairs of coordinates."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch13_t2_qe19',
        type: "mcq",
        question: "What does the y-coordinate tell you?",
        options: [
            "Distance up or down from x-axis",
            "Distance left or right from y-axis",
            "Distance from origin",
            "Distance along a line"
        ],
        correctAnswer: "Distance up or down from x-axis",
        explanation: "Y-coordinate tells how far up (+) or down (-) a point is from the x-axis. 📏",
        wrongAnswerExplanations: {
            "Distance left or right from y-axis": "This is what x-coordinate tells.",
            "Distance from origin": "This needs both coordinates.",
            "Distance along a line": "This needs two pairs of coordinates."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch13_t2_qe20',
        type: "mcq",
        question: "How many quadrants are there in a coordinate plane?",
        options: [
            "4",
            "2",
            "3",
            "6"
        ],
        correctAnswer: "4",
        explanation: "A coordinate plane is divided into 4 quadrants by the x and y axes. 📊",
        wrongAnswerExplanations: {
            "2": "The axes divide the plane into 4, not 2 parts.",
            "3": "The axes divide the plane into 4, not 3 parts.",
            "6": "The axes divide the plane into 4, not 6 parts."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    }
]; 