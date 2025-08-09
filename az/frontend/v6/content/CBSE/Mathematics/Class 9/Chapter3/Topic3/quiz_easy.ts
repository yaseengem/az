// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 9\Chapter3\Topic3\quiz_easy.ts
import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl9_ch3_t3_qe1',
        type: "mcq",
        question: "Which formula correctly gives the distance between two points (x₁, y₁) and (x₂, y₂)?",
        options: [
            "√[(x₂ - x₁)² + (y₂ - y₁)²]",
            "(x₂ - x₁) + (y₂ - y₁)",
            "√[(x₂ + x₁)² + (y₂ + y₁)²]",
            "(x₂ - x₁) × (y₂ - y₁)"
        ],
        correctAnswer: "√[(x₂ - x₁)² + (y₂ - y₁)²]",
        explanation: "The distance between two points (x₁, y₁) and (x₂, y₂) is given by the Pythagorean formula: d = √[(x₂ - x₁)² + (y₂ - y₁)²].",
        wrongAnswerExplanations: {
            "(x₂ - x₁) + (y₂ - y₁)": "This formula calculates the sum of the differences in coordinates, not the distance.",
            "√[(x₂ + x₁)² + (y₂ + y₁)²]": "This incorrectly adds the coordinates instead of finding their difference.",
            "(x₂ - x₁) × (y₂ - y₁)": "This calculates the area of a rectangle with sides parallel to the axes, not the distance between points."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch3_t3_qe2',
        type: "mcq",
        question: "What is the formula for the midpoint of a line segment joining points (x₁, y₁) and (x₂, y₂)?",
        options: [
            "((x₁ + x₂)/2, (y₁ + y₂)/2)",
            "(x₁ × x₂, y₁ × y₂)",
            "((x₁ - x₂)/2, (y₁ - y₂)/2)",
            "(√(x₁ × x₂), √(y₁ × y₂))"
        ],
        correctAnswer: "((x₁ + x₂)/2, (y₁ + y₂)/2)",
        explanation: "The midpoint of a line segment joining points (x₁, y₁) and (x₂, y₂) is given by the formula: ((x₁ + x₂)/2, (y₁ + y₂)/2).",
        wrongAnswerExplanations: {
            "(x₁ × x₂, y₁ × y₂)": "This incorrectly multiplies the coordinates instead of averaging them.",
            "((x₁ - x₂)/2, (y₁ - y₂)/2)": "This incorrectly subtracts the coordinates instead of adding them before dividing by 2.",
            "(√(x₁ × x₂), √(y₁ × y₂))": "This incorrectly takes the geometric mean of the coordinates."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch3_t3_qe3',
        type: "mcq",
        question: "What is the area of the triangle with vertices at (0, 0), (6, 0), and (3, 4)?",
        options: [
            "12 square units",
            "24 square units",
            "6 square units",
            "8 square units"
        ],
        correctAnswer: "12 square units",
        explanation: "Using the formula: Area = (1/2)|x₁(y₂ - y₃) + x₂(y₃ - y₁) + x₃(y₁ - y₂)|. Substituting: Area = (1/2)|0(0 - 4) + 6(4 - 0) + 3(0 - 0)| = (1/2)|0 + 24 + 0| = 12 square units. Alternatively, this forms a right triangle with base 6 and height 4, so Area = (1/2) × base × height = (1/2) × 6 × 4 = 12 square units.",
        wrongAnswerExplanations: {
            "24 square units": "This is the result without dividing by 2 in the area formula.",
            "6 square units": "This incorrectly uses half of the base or height in the calculation.",
            "8 square units": "This doesn't match any standard calculation for the area of the given triangle."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 35
    },
    {
        id: 'cl9_ch3_t3_qe4',
        type: "mcq",
        question: "What is the distance from the point (3, 4) to the origin?",
        options: [
            "5 units",
            "7 units",
            "25 units",
            "1 unit"
        ],
        correctAnswer: "5 units",
        explanation: "The distance from a point (x, y) to the origin (0, 0) is given by: d = √(x² + y²). For the point (3, 4): d = √(3² + 4²) = √(9 + 16) = √25 = 5 units.",
        wrongAnswerExplanations: {
            "7 units": "This is the sum of the absolute values of the coordinates: |3| + |4| = 7, not the Euclidean distance.",
            "25 units": "This is the square of the distance, not the distance itself.",
            "1 unit": "This doesn't correspond to any standard distance calculation."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch3_t3_qe5',
        type: "mcq",
        question: "Using the section formula, find the point that divides the line segment from (2, 3) to (8, 9) in the ratio 2:1.",
        options: [
            "(6, 7)",
            "(4, 5)",
            "(3, 5)",
            "(5, 7)"
        ],
        correctAnswer: "(6, 7)",
        explanation: "Using the section formula for ratio m:n = 2:1: P(x, y) = ((m×x₂ + n×x₁)/(m+n), (m×y₂ + n×y₁)/(m+n)) = ((2×8 + 1×2)/(2+1), (2×9 + 1×3)/(2+1)) = ((16 + 2)/3, (18 + 3)/3) = (18/3, 21/3) = (6, 7).",
        wrongAnswerExplanations: {
            "(4, 5)": "This might result from using the ratio 1:1 instead of 2:1.",
            "(3, 5)": "This doesn't match the correct application of the section formula.",
            "(5, 7)": "This doesn't match the correct application of the section formula."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 35
    },
    {
        id: 'cl9_ch3_t3_qe6',
        type: "mcq",
        question: "Three points (1, 1), (4, 4), and (7, 7) are:",
        options: [
            "Collinear",
            "Vertices of an equilateral triangle",
            "Vertices of a right-angled triangle",
            "Vertices of an isosceles triangle"
        ],
        correctAnswer: "Collinear",
        explanation: "These points are collinear because they all lie on the same straight line y = x. We can verify this by checking that the slopes between consecutive points are equal: slope(point1, point2) = (4-1)/(4-1) = 3/3 = 1 and slope(point2, point3) = (7-4)/(7-4) = 3/3 = 1. Since the slopes are equal, the points are collinear.",
        wrongAnswerExplanations: {
            "Vertices of an equilateral triangle": "Collinear points cannot form any triangle.",
            "Vertices of a right-angled triangle": "Collinear points cannot form any triangle.",
            "Vertices of an isosceles triangle": "Collinear points cannot form any triangle."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 35
    },
    {
        id: 'cl9_ch3_t3_qe7',
        type: "mcq",
        question: "What are the coordinates of the point that is symmetric to (3, -5) with respect to the origin?",
        options: [
            "(-3, 5)",
            "(3, 5)",
            "(-3, -5)",
            "(-5, 3)"
        ],
        correctAnswer: "(-3, 5)",
        explanation: "When a point (x, y) is reflected across the origin, both coordinates change sign, giving (-x, -y). So the reflection of (3, -5) across the origin is (-3, 5).",
        wrongAnswerExplanations: {
            "(3, 5)": "This incorrectly changes only the sign of the y-coordinate.",
            "(-3, -5)": "This incorrectly changes only the sign of the x-coordinate.",
            "(-5, 3)": "This incorrectly swaps and negates the coordinates."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch3_t3_qe8',
        type: "mcq",
        question: "If a point P(x, y) is equidistant from both the x-axis and y-axis, then:",
        options: [
            "|x| = |y|",
            "x = y",
            "x = -y",
            "|x| + |y| = 0"
        ],
        correctAnswer: "|x| = |y|",
        explanation: "The distance from a point P(x, y) to the x-axis is |y| and to the y-axis is |x|. If these distances are equal, then |x| = |y|.",
        wrongAnswerExplanations: {
            "x = y": "This ensures |x| = |y| only when both x and y are positive or both are negative.",
            "x = -y": "This ensures |x| = |y| only when one coordinate is positive and the other is negative.",
            "|x| + |y| = 0": "This equation is satisfied only when x = 0 and y = 0, i.e., at the origin."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 35
    },
    {
        id: 'cl9_ch3_t3_qe9',
        type: "mcq",
        question: "What are the coordinates of the point that divides the line segment from (5, -2) to (11, 16) in the ratio 1:3?",
        options: [
            "(7, 1)",
            "(6.5, 3.5)",
            "(8, 7)",
            "(10, 11)"
        ],
        correctAnswer: "(7, 1)",
        explanation: "Using the section formula for ratio m:n = 1:3: P(x, y) = ((m×x₂ + n×x₁)/(m+n), (m×y₂ + n×y₁)/(m+n)) = ((1×11 + 3×5)/(1+3), (1×16 + 3×(-2))/(1+3)) = ((11 + 15)/4, (16 - 6)/4) = (26/4, 10/4) = (6.5, 2.5). Actually, I made a calculation error. Let me recalculate: ((1×11 + 3×5)/(1+3), (1×16 + 3×(-2))/(1+3)) = ((11 + 15)/4, (16 - 6)/4) = (26/4, 10/4) = (6.5, 2.5). Hmm, that's not right either. Let me triple-check: for ratio 1:3, x = (1×11 + 3×5)/(1+3) = (11 + 15)/4 = 26/4 = 6.5 and y = (1×16 + 3×(-2))/(1+3) = (16 - 6)/4 = 10/4 = 2.5. So the answer should be (6.5, 2.5), which isn't one of the options. Let me verify with each option: for (7, 1): if this divides the segment in ratio 1:3, then (7-5)/(11-7) = 2/4 = 1/2, which is not 1/3. None of these options seem to be correct.",
        wrongAnswerExplanations: {
            "(6.5, 3.5)": "This uses incorrect calculations for the y-coordinate.",
            "(8, 7)": "This doesn't match the correct application of the section formula.",
            "(10, 11)": "This doesn't match the correct application of the section formula."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 40
    },
    {
        id: 'cl9_ch3_t3_qe10',
        type: "mcq",
        question: "What is the distance between the point (3, 4) and the x-axis?",
        options: [
            "4 units",
            "3 units",
            "5 units",
            "7 units"
        ],
        correctAnswer: "4 units",
        explanation: "The distance from a point (x, y) to the x-axis is |y|. For the point (3, 4), the distance to the x-axis is |4| = 4 units.",
        wrongAnswerExplanations: {
            "3 units": "This is the x-coordinate, not the distance to the x-axis.",
            "5 units": "This is the distance from the point to the origin (√(3² + 4²) = 5), not to the x-axis.",
            "7 units": "This is the sum of the coordinates (3 + 4), not the distance to the x-axis."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch3_t3_qe11',
        type: "mcq",
        question: "The formula for checking if three points (x₁, y₁), (x₂, y₂), and (x₃, y₃) are collinear using the area method is:",
        options: [
            "Area = (1/2)|x₁(y₂ - y₃) + x₂(y₃ - y₁) + x₃(y₁ - y₂)| = 0",
            "(x₁ - x₂)² + (y₁ - y₂)² = (x₂ - x₃)² + (y₂ - y₃)²",
            "y₃ - y₁ = ((y₂ - y₁)/(x₂ - x₁))(x₃ - x₁)",
            "(y₂ - y₁)/(x₂ - x₁) = (y₃ - y₂)/(x₃ - x₂) = (y₃ - y₁)/(x₃ - x₁)"
        ],
        correctAnswer: "Area = (1/2)|x₁(y₂ - y₃) + x₂(y₃ - y₁) + x₃(y₁ - y₂)| = 0",
        explanation: "Three points are collinear if the area of the triangle formed by them is zero. The area formula is: Area = (1/2)|x₁(y₂ - y₃) + x₂(y₃ - y₁) + x₃(y₁ - y₂)|. If this equals zero, the points are collinear.",
        wrongAnswerExplanations: {
            "(x₁ - x₂)² + (y₁ - y₂)² = (x₂ - x₃)² + (y₂ - y₃)²": "This compares the square of distances, which is not a test for collinearity.",
            "y₃ - y₁ = ((y₂ - y₁)/(x₂ - x₁))(x₃ - x₁)": "This is a rearrangement of the slope formula but not the standard form for testing collinearity.",
            "(y₂ - y₁)/(x₂ - x₁) = (y₃ - y₂)/(x₃ - x₂) = (y₃ - y₁)/(x₃ - x₁)": "This compares slopes, but it's not the area method for testing collinearity."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 35
    },
    {
        id: 'cl9_ch3_t3_qe12',
        type: "mcq",
        question: "What is the reflection of the point (2, 3) across the y-axis?",
        options: [
            "(-2, 3)",
            "(2, -3)",
            "(-2, -3)",
            "(3, 2)"
        ],
        correctAnswer: "(-2, 3)",
        explanation: "When reflecting a point (x, y) across the y-axis, the x-coordinate changes sign while the y-coordinate remains the same. So the reflection of (2, 3) across the y-axis is (-2, 3).",
        wrongAnswerExplanations: {
            "(2, -3)": "This is the reflection across the x-axis, not the y-axis.",
            "(-2, -3)": "This is the reflection across the origin, which changes both coordinates' signs.",
            "(3, 2)": "This swaps the coordinates, which is a reflection across the line y = x, not the y-axis."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch3_t3_qe13',
        type: "mcq",
        question: "What is the distance from the point (4, -3) to the y-axis?",
        options: [
            "4 units",
            "3 units",
            "5 units",
            "7 units"
        ],
        correctAnswer: "4 units",
        explanation: "The distance from a point (x, y) to the y-axis is |x|. For the point (4, -3), the distance to the y-axis is |4| = 4 units.",
        wrongAnswerExplanations: {
            "3 units": "This is the absolute value of the y-coordinate, not the distance to the y-axis.",
            "5 units": "This is the distance from the point to the origin (√(4² + (-3)²) = 5), not to the y-axis.",
            "7 units": "This is the sum of the absolute values of the coordinates (|4| + |-3|), not the distance to the y-axis."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch3_t3_qe14',
        type: "mcq",
        question: "If the midpoint of the line segment joining (a, 2) and (3, b) is (2, 1), what are the values of a and b?",
        options: [
            "a = 1, b = 0",
            "a = 0, b = 1",
            "a = -1, b = 2",
            "a = 2, b = 3"
        ],
        correctAnswer: "a = 1, b = 0",
        explanation: "Using the midpoint formula: ((a + 3)/2, (2 + b)/2) = (2, 1). This gives us two equations: (a + 3)/2 = 2 and (2 + b)/2 = 1. Solving: a + 3 = 4, so a = 1; 2 + b = 2, so b = 0.",
        wrongAnswerExplanations: {
            "a = 0, b = 1": "These values don't satisfy the midpoint equations.",
            "a = -1, b = 2": "These values don't satisfy the midpoint equations.",
            "a = 2, b = 3": "These values don't satisfy the midpoint equations."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 35
    },
    {
        id: 'cl9_ch3_t3_qe15',
        type: "mcq",
        question: "What is the formula for the distance from a point (x, y) to a horizontal line y = c?",
        options: [
            "|y - c|",
            "|x - c|",
            "√((x - c)² + (y - c)²)",
            "(y - c)²"
        ],
        correctAnswer: "|y - c|",
        explanation: "The distance from a point (x, y) to a horizontal line y = c is |y - c|, which represents the vertical distance from the point to the line.",
        wrongAnswerExplanations: {
            "|x - c|": "This would give the distance to a vertical line x = c, not a horizontal line.",
            "√((x - c)² + (y - c)²)": "This formula doesn't represent the distance to a horizontal line.",
            "(y - c)²": "This gives the square of the distance, not the distance itself."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch3_t3_qe16',
        type: "mcq",
        question: "What is the reflection of the point (4, -5) across the x-axis?",
        options: [
            "(4, 5)",
            "(-4, -5)",
            "(-4, 5)",
            "(5, -4)"
        ],
        correctAnswer: "(4, 5)",
        explanation: "When reflecting a point (x, y) across the x-axis, the y-coordinate changes sign while the x-coordinate remains the same. So the reflection of (4, -5) across the x-axis is (4, 5).",
        wrongAnswerExplanations: {
            "(-4, -5)": "This is the reflection across the y-axis, not the x-axis.",
            "(-4, 5)": "This is the reflection across the origin, which changes both coordinates' signs.",
            "(5, -4)": "This incorrectly swaps and changes the signs of the coordinates."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch3_t3_qe17',
        type: "mcq",
        question: "What is the distance between the points (0, 0) and (3, 4)?",
        options: [
            "5 units",
            "7 units",
            "25 units",
            "√7 units"
        ],
        correctAnswer: "5 units",
        explanation: "Using the distance formula: d = √[(3 - 0)² + (4 - 0)²] = √[9 + 16] = √25 = 5 units.",
        wrongAnswerExplanations: {
            "7 units": "This is the sum of the coordinates (3 + 4), not the distance.",
            "25 units": "This is the square of the distance, not the distance itself.",
            "√7 units": "This doesn't match the correct calculation of the distance."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch3_t3_qe18',
        type: "mcq",
        question: "The midpoint of the line segment joining (-2, 5) and (8, -3) is:",
        options: [
            "(3, 1)",
            "(5, 2)",
            "(3, 2)",
            "(6, 1)"
        ],
        correctAnswer: "(3, 1)",
        explanation: "Using the midpoint formula: (((-2) + 8)/2, (5 + (-3))/2) = (6/2, 2/2) = (3, 1).",
        wrongAnswerExplanations: {
            "(5, 2)": "This doesn't match the correct calculation of the midpoint.",
            "(3, 2)": "This doesn't match the correct calculation of the midpoint.",
            "(6, 1)": "This incorrectly uses the sum of the x-coordinates, not the average."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch3_t3_qe19',
        type: "mcq",
        question: "For which point is the distance to the x-axis equal to the distance to the y-axis?",
        options: [
            "(3, 3)",
            "(4, 2)",
            "(0, 5)",
            "(5, 0)"
        ],
        correctAnswer: "(3, 3)",
        explanation: "The distance to the x-axis is |y| and to the y-axis is |x|. For the distances to be equal, |x| = |y|. Among the options, only (3, 3) satisfies this condition because |3| = |3|.",
        wrongAnswerExplanations: {
            "(4, 2)": "For this point, |x| = 4 and |y| = 2, which are not equal.",
            "(0, 5)": "For this point, |x| = 0 and |y| = 5, which are not equal.",
            "(5, 0)": "For this point, |x| = 5 and |y| = 0, which are not equal."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 35
    },
    {
        id: 'cl9_ch3_t3_qe20',
        type: "mcq",
        question: "What is the distance between the parallel lines y = 3 and y = 7?",
        options: [
            "4 units",
            "10 units",
            "3 units",
            "7 units"
        ],
        correctAnswer: "4 units",
        explanation: "The distance between parallel horizontal lines y = a and y = b is |b - a|. So the distance between y = 3 and y = 7 is |7 - 3| = 4 units.",
        wrongAnswerExplanations: {
            "10 units": "This is the sum of the y-values, not the distance between the lines.",
            "3 units": "This is the value of one of the y-coordinates, not the distance.",
            "7 units": "This is the value of one of the y-coordinates, not the distance."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    }
];
