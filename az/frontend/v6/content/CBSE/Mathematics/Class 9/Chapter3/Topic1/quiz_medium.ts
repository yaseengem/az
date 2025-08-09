// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 9\Chapter3\Topic1\quiz_medium.ts
import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl9_ch3_t1_qm1',
        type: "mcq",
        question: "Which of the following represents the shortest path from the origin to the point (-3, 4)?",
        options: [
            "7 units",
            "5 units",
            "1 unit",
            "√25 units"
        ],
        correctAnswer: "5 units",
        explanation: "The shortest path is the straight-line distance, which can be calculated using the Pythagorean theorem: d = √((-3)² + 4²) = √(9 + 16) = √25 = 5 units.",
        wrongAnswerExplanations: {
            "7 units": "This is the sum of the absolute coordinates |x| + |y| = |-3| + |4| = 3 + 4 = 7, which represents the 'city block' distance, not the shortest path.",
            "1 unit": "This is incorrectly calculated and has no relation to the distance.",
            "√25 units": "This is actually equal to 5 units since √25 = 5."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch3_t1_qm2',
        type: "mcq",
        question: "If a point lies in the second quadrant, which of the following must be true?",
        options: [
            "x > 0 and y > 0",
            "x < 0 and y > 0",
            "x < 0 and y < 0",
            "x > 0 and y < 0"
        ],
        correctAnswer: "x < 0 and y > 0",
        explanation: "The second quadrant (top-left) contains all points where x < 0 (left of y-axis) and y > 0 (above x-axis). ↖️ This combination uniquely identifies the second quadrant.",
        wrongAnswerExplanations: {
            "x > 0 and y > 0": "This describes points in the first quadrant (top-right).",
            "x < 0 and y < 0": "This describes points in the third quadrant (bottom-left).",
            "x > 0 and y < 0": "This describes points in the fourth quadrant (bottom-right)."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 40
    },
    {
        id: 'cl9_ch3_t1_qm3',
        type: "mcq",
        question: "The point P is located at (4, -3) and point Q is located at (-2, 1). In which quadrants do these points lie?",
        options: [
            "P in quadrant I, Q in quadrant II",
            "P in quadrant IV, Q in quadrant II",
            "P in quadrant IV, Q in quadrant III",
            "P in quadrant I, Q in quadrant III"
        ],
        correctAnswer: "P in quadrant IV, Q in quadrant II",
        explanation: "Point P(4, -3) has x > 0 and y < 0, placing it in quadrant IV (bottom-right). Point Q(-2, 1) has x < 0 and y > 0, placing it in quadrant II (top-left). ↘️↖️",
        wrongAnswerExplanations: {
            "P in quadrant I, Q in quadrant II": "P cannot be in quadrant I since its y-coordinate is negative.",
            "P in quadrant IV, Q in quadrant III": "Q cannot be in quadrant III since its y-coordinate is positive.",
            "P in quadrant I, Q in quadrant III": "Both placements are incorrect."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch3_t1_qm4',
        type: "mcq",
        question: "Which set of points forms a rectangle when plotted and connected in order on the coordinate plane?",
        options: [
            "(1, 1), (4, 1), (4, 3), (1, 3)",
            "(0, 0), (3, 0), (0, 4), (3, 4)",
            "(1, 1), (3, 4), (6, 2), (4, -1)",
            "(2, 2), (2, 5), (5, 5), (5, 8)"
        ],
        correctAnswer: "(1, 1), (4, 1), (4, 3), (1, 3)",
        explanation: "For a rectangle, the sides must be horizontal and vertical (parallel to the axes). The points (1, 1), (4, 1), (4, 3), and (1, 3) form a rectangle with width 3 units and height 2 units when connected in order. 📏",
        wrongAnswerExplanations: {
            "(0, 0), (3, 0), (0, 4), (3, 4)": "These points do form a rectangle, but they aren't in the correct order to connect and form a rectangle. The correct order would be (0, 0), (3, 0), (3, 4), (0, 4).",
            "(1, 1), (3, 4), (6, 2), (4, -1)": "These points form an irregular quadrilateral, not a rectangle.",
            "(2, 2), (2, 5), (5, 5), (5, 8)": "These points form a parallelogram but not a rectangle, as they're not at right angles."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 50
    },
    {
        id: 'cl9_ch3_t1_qm5',
        type: "mcq",
        question: "If you reflect the point (3, -4) across the y-axis, what are the coordinates of the resulting point?",
        options: [
            "(-3, -4)",
            "(3, 4)",
            "(-3, 4)",
            "(-4, 3)"
        ],
        correctAnswer: "(-3, -4)",
        explanation: "When reflecting a point (x, y) across the y-axis, the x-coordinate changes sign while the y-coordinate remains the same. So (3, -4) becomes (-3, -4). Think of the y-axis as a mirror. 🪞",
        wrongAnswerExplanations: {
            "(3, 4)": "This would be a reflection across the x-axis, not the y-axis.",
            "(-3, 4)": "This would be a reflection across both axes, or a 180° rotation around the origin.",
            "(-4, 3)": "This incorrectly swaps and negates the coordinates."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch3_t1_qm6',
        type: "mcq",
        question: "If you reflect the point (-2, 5) across the x-axis, what are the coordinates of the resulting point?",
        options: [
            "(2, 5)",
            "(-2, -5)",
            "(2, -5)",
            "(5, -2)"
        ],
        correctAnswer: "(-2, -5)",
        explanation: "When reflecting a point (x, y) across the x-axis, the y-coordinate changes sign while the x-coordinate remains the same. So (-2, 5) becomes (-2, -5). Think of the x-axis as a mirror. 🪞",
        wrongAnswerExplanations: {
            "(2, 5)": "This would be a reflection across the y-axis, not the x-axis.",
            "(2, -5)": "This would be a reflection across both axes, or a 180° rotation around the origin.",
            "(5, -2)": "This incorrectly swaps and negates the coordinates."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch3_t1_qm7',
        type: "mcq",
        question: "Which of the following points is closest to the origin?",
        options: [
            "(2, 2)",
            "(3, 1)",
            "(0, 3)",
            "(1, 2)"
        ],
        correctAnswer: "(0, 3)",
        explanation: "The distance from any point (x, y) to the origin (0, 0) is √(x² + y²). For (0, 3): d = √(0² + 3²) = 3. For (1, 2): d = √(1² + 2²) = √5 ≈ 2.24. For (2, 2): d = √(2² + 2²) = √8 ≈ 2.83. For (3, 1): d = √(3² + 1²) = √10 ≈ 3.16. So, (1, 2) is closest. 📏",
        wrongAnswerExplanations: {
            "(2, 2)": "The distance from (2, 2) to the origin is √(2² + 2²) = √8 ≈ 2.83 units.",
            "(3, 1)": "The distance from (3, 1) to the origin is √(3² + 1²) = √10 ≈ 3.16 units.",
            "(0, 3)": "The distance from (0, 3) to the origin is √(0² + 3²) = 3 units.",
            "(1, 2)": "The distance from (1, 2) to the origin is √(1² + 2²) = √5 ≈ 2.24 units."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch3_t1_qm8',
        type: "mcq",
        question: "If you rotate the point (3, 4) by 180° around the origin, what are the coordinates of the resulting point?",
        options: [
            "(-3, -4)",
            "(3, -4)",
            "(-3, 4)",
            "(4, -3)"
        ],
        correctAnswer: "(-3, -4)",
        explanation: "When rotating a point (x, y) by 180° around the origin, both x and y coordinates change signs: (x, y) → (-x, -y). So (3, 4) becomes (-3, -4). This is equivalent to reflecting across both axes. 🔄",
        wrongAnswerExplanations: {
            "(3, -4)": "This would be a reflection across the x-axis only, not a 180° rotation.",
            "(-3, 4)": "This would be a reflection across the y-axis only, not a 180° rotation.",
            "(4, -3)": "This incorrectly swaps and negates the coordinates."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch3_t1_qm9',
        type: "mcq",
        question: "Four points are plotted: A(3, 2), B(-1, 2), C(-1, -3), and D(3, -3). What shape is formed when these points are connected in order?",
        options: [
            "Square",
            "Rectangle",
            "Rhombus",
            "Trapezoid"
        ],
        correctAnswer: "Rectangle",
        explanation: "The points form a rectangle because the opposite sides are equal in length and all angles are 90°. The width is 4 units (from x = -1 to x = 3) and the height is 5 units (from y = -3 to y = 2). 📏",
        wrongAnswerExplanations: {
            "Square": "A square requires all sides to be equal, but the shape has width 4 and height 5, so it's not a square.",
            "Rhombus": "A rhombus requires all sides to be equal, which is not the case here.",
            "Trapezoid": "The shape has two pairs of parallel sides, making it a parallelogram (specifically a rectangle), not just a trapezoid."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 50
    },
    {
        id: 'cl9_ch3_t1_qm10',
        type: "mcq",
        question: "What are the coordinates of the point that is symmetric to (2, -5) with respect to the origin?",
        options: [
            "(-2, 5)",
            "(2, 5)",
            "(-2, -5)",
            "(5, -2)"
        ],
        correctAnswer: "(-2, 5)",
        explanation: "When finding the point symmetric to (x, y) with respect to the origin, both coordinates change sign: (x, y) → (-x, -y). So (2, -5) becomes (-2, 5). This is equivalent to a 180° rotation around the origin. 🔄",
        wrongAnswerExplanations: {
            "(2, 5)": "This would be a reflection across the x-axis only, not symmetry with respect to the origin.",
            "(-2, -5)": "This is a reflection across the y-axis only, not symmetry with respect to the origin.",
            "(5, -2)": "This incorrectly swaps the coordinates."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch3_t1_qm11',
        type: "mcq",
        question: "Which quadrant contains points with both coordinates negative?",
        options: [
            "First quadrant",
            "Second quadrant",
            "Third quadrant",
            "Fourth quadrant"
        ],
        correctAnswer: "Third quadrant",
        explanation: "The third quadrant (bottom-left) contains all points with both x < 0 and y < 0. These points are to the left of the y-axis and below the x-axis. ↙️",
        wrongAnswerExplanations: {
            "First quadrant": "The first quadrant contains points where both x > 0 and y > 0.",
            "Second quadrant": "The second quadrant contains points where x < 0 and y > 0.",
            "Fourth quadrant": "The fourth quadrant contains points where x > 0 and y < 0."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 40
    },
    {
        id: 'cl9_ch3_t1_qm12',
        type: "mcq",
        question: "If a point has coordinates (a, b) where a < 0 and b > 0, in which quadrant does it lie?",
        options: [
            "First quadrant",
            "Second quadrant",
            "Third quadrant",
            "Fourth quadrant"
        ],
        correctAnswer: "Second quadrant",
        explanation: "When a < 0 and b > 0, the point is to the left of the y-axis and above the x-axis, placing it in the second quadrant (top-left). ↖️",
        wrongAnswerExplanations: {
            "First quadrant": "The first quadrant requires both coordinates to be positive (a > 0 and b > 0).",
            "Third quadrant": "The third quadrant requires both coordinates to be negative (a < 0 and b < 0).",
            "Fourth quadrant": "The fourth quadrant requires a > 0 and b < 0."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 40
    },
    {
        id: 'cl9_ch3_t1_qm13',
        type: "mcq",
        question: "What shape is formed by connecting the points (0, 0), (4, 0), and (0, 3) in order?",
        options: [
            "Equilateral triangle",
            "Right-angled triangle",
            "Isosceles triangle",
            "Scalene triangle"
        ],
        correctAnswer: "Right-angled triangle",
        explanation: "The points (0, 0), (4, 0), and (0, 3) form a right-angled triangle. The angle at (0, 0) is 90° because the sides from (0, 0) to (4, 0) and from (0, 0) to (0, 3) lie along the x and y axes, which are perpendicular. 📐",
        wrongAnswerExplanations: {
            "Equilateral triangle": "An equilateral triangle has all sides equal, which is not the case here.",
            "Isosceles triangle": "An isosceles triangle has at least two sides equal, which is not the case here.",
            "Scalene triangle": "A scalene triangle has no equal sides. While this triangle has unequal sides, it's more specifically a right-angled triangle due to the 90° angle."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch3_t1_qm14',
        type: "mcq",
        question: "Which of the following statements is true about the axes in a Cartesian plane?",
        options: [
            "The x-axis and y-axis are always at a 45° angle to each other",
            "The x-axis is horizontal and the y-axis is vertical",
            "The x-axis is vertical and the y-axis is horizontal",
            "The x-axis and y-axis can be at any angle to each other"
        ],
        correctAnswer: "The x-axis is horizontal and the y-axis is vertical",
        explanation: "In the standard Cartesian coordinate system, the x-axis runs horizontally (left-right) and the y-axis runs vertically (up-down). The two axes are perpendicular (90°) to each other. 📊",
        wrongAnswerExplanations: {
            "The x-axis and y-axis are always at a 45° angle to each other": "The axes are at a 90° angle (perpendicular), not 45°.",
            "The x-axis is vertical and the y-axis is horizontal": "This is the reverse of the correct orientation.",
            "The x-axis and y-axis can be at any angle to each other": "In the standard Cartesian system, the axes must be perpendicular (90°)."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 40
    },
    {
        id: 'cl9_ch3_t1_qm15',
        type: "mcq",
        question: "Which points lie on the line y = x?",
        options: [
            "(3, 3) and (4, 4)",
            "(2, 3) and (4, 6)",
            "(1, 2) and (3, 6)",
            "(0, 1) and (1, 0)"
        ],
        correctAnswer: "(3, 3) and (4, 4)",
        explanation: "On the line y = x, the x and y coordinates are always equal. Both (3, 3) and (4, 4) satisfy this condition since 3 = 3 and 4 = 4. This line passes through the origin and makes a 45° angle with both axes. 📈",
        wrongAnswerExplanations: {
            "(2, 3) and (4, 6)": "These points don't have equal x and y coordinates, so they don't lie on y = x.",
            "(1, 2) and (3, 6)": "These points don't have equal x and y coordinates, so they don't lie on y = x.",
            "(0, 1) and (1, 0)": "These points don't have equal x and y coordinates, so they don't lie on y = x."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch3_t1_qm16',
        type: "mcq",
        question: "If you draw a circle centered at the origin with radius 5 units, which of the following points lies on this circle?",
        options: [
            "(3, 4)",
            "(4, 4)",
            "(0, 5)",
            "(6, 2)"
        ],
        correctAnswer: "(0, 5)",
        explanation: "A point (x, y) lies on a circle centered at the origin with radius r if x² + y² = r². For (0, 5): 0² + 5² = 25 = 5², so it lies exactly 5 units from the origin, on the circle. ⭕",
        wrongAnswerExplanations: {
            "(3, 4)": "For (3, 4): 3² + 4² = 9 + 16 = 25 = 5², so this point also lies on the circle.",
            "(4, 4)": "For (4, 4): 4² + 4² = 16 + 16 = 32, which is not equal to 5² = 25, so this point is not on the circle.",
            "(6, 2)": "For (6, 2): 6² + 2² = 36 + 4 = 40, which is not equal to 5² = 25, so this point is not on the circle."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 50
    },
    {
        id: 'cl9_ch3_t1_qm17',
        type: "mcq",
        question: "The sign of the coordinates of a point P(a, b) are opposite (one positive, one negative). In which quadrants could P lie?",
        options: [
            "First or Third",
            "Second or Fourth",
            "First or Second",
            "Third or Fourth"
        ],
        correctAnswer: "Second or Fourth",
        explanation: "When the coordinates have opposite signs (one positive, one negative), the point lies in either the second quadrant (x < 0, y > 0) or the fourth quadrant (x > 0, y < 0). ↖️↘️",
        wrongAnswerExplanations: {
            "First or Third": "In the first quadrant, both coordinates are positive. In the third quadrant, both are negative.",
            "First or Second": "In the first quadrant, both coordinates are positive. In the second quadrant, x is negative and y is positive.",
            "Third or Fourth": "In the third quadrant, both coordinates are negative. In the fourth quadrant, x is positive and y is negative."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch3_t1_qm18',
        type: "mcq",
        question: "Which point is equidistant from both the x-axis and y-axis?",
        options: [
            "(3, 3)",
            "(4, 2)",
            "(5, 0)",
            "(0, 7)"
        ],
        correctAnswer: "(3, 3)",
        explanation: "A point (x, y) is equidistant from the axes if |x| = |y|. For (3, 3): |3| = |3| = 3, so it's 3 units from each axis. For the others: (4, 2): |4| ≠ |2|, (5, 0): |5| ≠ |0|, (0, 7): |0| ≠ |7|. 📏",
        wrongAnswerExplanations: {
            "(4, 2)": "The distance to the y-axis is |4| = 4, and to the x-axis is |2| = 2, which are not equal.",
            "(5, 0)": "The distance to the y-axis is |5| = 5, and to the x-axis is |0| = 0, which are not equal.",
            "(0, 7)": "The distance to the y-axis is |0| = 0, and to the x-axis is |7| = 7, which are not equal."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch3_t1_qm19',
        type: "mcq",
        question: "What happens to the position of a point if its x and y coordinates are interchanged?",
        options: [
            "The point reflects across the y-axis",
            "The point reflects across the x-axis",
            "The point reflects across the line y = x",
            "The point rotates 180° around the origin"
        ],
        correctAnswer: "The point reflects across the line y = x",
        explanation: "When you interchange the x and y coordinates of a point (x, y) → (y, x), it reflects across the line y = x. This line runs from the origin at a 45° angle through the first and third quadrants. 🪞",
        wrongAnswerExplanations: {
            "The point reflects across the y-axis": "Reflection across the y-axis would change (x, y) to (-x, y).",
            "The point reflects across the x-axis": "Reflection across the x-axis would change (x, y) to (x, -y).",
            "The point rotates 180° around the origin": "A 180° rotation around the origin would change (x, y) to (-x, -y)."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch3_t1_qm20',
        type: "mcq",
        question: "If the coordinates of point P are (a, b) and the coordinates of point Q are (-a, -b), what is the relationship between P and Q?",
        options: [
            "P and Q lie in the same quadrant",
            "P and Q are symmetric with respect to the y-axis",
            "P and Q are symmetric with respect to the x-axis",
            "P and Q are symmetric with respect to the origin"
        ],
        correctAnswer: "P and Q are symmetric with respect to the origin",
        explanation: "When both coordinates change sign from (a, b) to (-a, -b), the points are symmetric with respect to the origin. This is equivalent to a 180° rotation around the origin. If P is at a certain distance and direction from the origin, Q is at the same distance but in the opposite direction. 🔄",
        wrongAnswerExplanations: {
            "P and Q lie in the same quadrant": "If P is not at the origin, P and Q will be in opposite quadrants, not the same one.",
            "P and Q are symmetric with respect to the y-axis": "Symmetry with respect to the y-axis would give (-a, b), not (-a, -b).",
            "P and Q are symmetric with respect to the x-axis": "Symmetry with respect to the x-axis would give (a, -b), not (-a, -b)."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    }
];
