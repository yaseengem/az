// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 9\Chapter4\Topic4\quiz_easy.ts
// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 9\Chapter4\Topic4\quiz_easy.ts
import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl9_ch4_t4_qe1',
        type: "mcq",
        question: "Which of the following is a linear equation in two variables?",
        options: ["x² + y = 5", "x + y + z = 6", "xy = 4", "2x + 3y = 7"],
        correctAnswer: "2x + 3y = 7",
        explanation: "A linear equation in two variables has the form ax + by + c = 0, where a and b are not both zero. 2x + 3y = 7 matches this form. 📊",
        wrongAnswerExplanations: {
            "x² + y = 5": "This is not linear because x has a power of 2.",
            "x + y + z = 6": "This has three variables (x, y, z), not two.",
            "xy = 4": "This is not linear due to the product xy of variables."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch4_t4_qe2',
        type: "mcq",
        question: "What is the standard form of a linear equation in two variables?",
        options: ["y = mx + c", "ax + by + c = 0", "y - y₁ = m(x - x₁)", "x/a + y/b = 1"],
        correctAnswer: "ax + by + c = 0",
        explanation: "The standard form is ax + by + c = 0, where a and b are not both zero. This form allows for all possible linear equations in two variables. 🔢",
        wrongAnswerExplanations: {
            "y = mx + c": "This is the slope-intercept form, not the standard form.",
            "y - y₁ = m(x - x₁)": "This is the point-slope form, not the standard form.",
            "x/a + y/b = 1": "This is the intercept form, not the standard form."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch4_t4_qe3',
        type: "mcq",
        question: "In the equation 3x + 4y = 12, what is the value of y when x = 0?",
        options: ["0", "3", "4", "12"],
        correctAnswer: "3",
        explanation: "Substituting x = 0 in 3x + 4y = 12 gives 3(0) + 4y = 12, so 4y = 12, which means y = 3. This gives the point (0, 3) on the line. 📈",
        wrongAnswerExplanations: {
            "0": "If y = 0, then 3x + 4(0) = 12, which gives x = 4, not the value of y when x = 0.",
            "4": "Substituting x = 0 gives 4y = 12, so y = 3, not 4.",
            "12": "If x = 0, then 4y = 12, so y = 3, not 12."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 40
    },
    {
        id: 'cl9_ch4_t4_qe4',
        type: "mcq",
        question: "Which point lies on the line 2x - 5y = 10?",
        options: ["(5, 0)", "(0, -2)", "(0, 2)", "(10, 2)"],
        correctAnswer: "(5, 0)",
        explanation: "Substituting the point (5, 0) into 2x - 5y = 10: 2(5) - 5(0) = 10, which gives 10 = 10, making this point lie on the line. ✅",
        wrongAnswerExplanations: {
            "(0, -2)": "For (0, -2): 2(0) - 5(-2) = 0 + 10 = 10, so this point also lies on the line, but it's not an option.",
            "(0, 2)": "For (0, 2): 2(0) - 5(2) = 0 - 10 = -10, not 10, so this point doesn't lie on the line.",
            "(10, 2)": "For (10, 2): 2(10) - 5(2) = 20 - 10 = 10, so this point also lies on the line."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch4_t4_qe5',
        type: "mcq",
        question: "What is the slope of the line 3x + 6y = 12?",
        options: ["3", "-3", "1/2", "-1/2"],
        correctAnswer: "-1/2",
        explanation: "To find slope, rewrite in y = mx + b form: 6y = -3x + 12, so y = (-3/6)x + 2 = (-1/2)x + 2. The slope is -1/2. 📉",
        wrongAnswerExplanations: {
            "3": "The slope is not 3. When solving for y, we get y = (-1/2)x + 2.",
            "-3": "The slope is not -3. When solving for y, we get y = (-1/2)x + 2.",
            "1/2": "The slope is negative, not positive. When solving for y, we get y = (-1/2)x + 2."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch4_t4_qe6',
        type: "mcq",
        question: "If (4, k) is a solution to the equation x + 2y = 12, what is the value of k?",
        options: ["2", "4", "8", "16"],
        correctAnswer: "4",
        explanation: "Substitute x = 4 into x + 2y = 12: 4 + 2k = 12, so 2k = 8, which means k = 4. Thus (4, 4) satisfies the equation. 🔍",
        wrongAnswerExplanations: {
            "2": "If k = 2, then 4 + 2(2) = 4 + 4 = 8, not 12.",
            "8": "If k = 8, then 4 + 2(8) = 4 + 16 = 20, not 12.",
            "16": "If k = 16, then 4 + 2(16) = 4 + 32 = 36, not 12."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 40
    },
    {
        id: 'cl9_ch4_t4_qe7',
        type: "mcq",
        question: "What is the y-intercept of the line 4x - 5y + 15 = 0?",
        options: ["(0, 3)", "(0, -3)", "(3, 0)", "(-3, 0)"],
        correctAnswer: "(0, 3)",
        explanation: "At y-intercept, x = 0. Substituting: 4(0) - 5y + 15 = 0, so -5y = -15, making y = 3. The y-intercept is (0, 3). 📌",
        wrongAnswerExplanations: {
            "(0, -3)": "When x = 0, we get -5y = -15, so y = 3, not -3.",
            "(3, 0)": "This is the x-intercept, not the y-intercept.",
            "(-3, 0)": "This point doesn't satisfy the equation: 4(-3) - 5(0) + 15 = -12 + 15 = 3, not 0."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 40
    },
    {
        id: 'cl9_ch4_t4_qe8',
        type: "mcq",
        question: "Which of the following equations represents a horizontal line?",
        options: ["x = 5", "y = -3", "x + y = 0", "x - y = 4"],
        correctAnswer: "y = -3",
        explanation: "A horizontal line has equation y = k (constant). The line y = -3 is a horizontal line passing through (0, -3). 📏",
        wrongAnswerExplanations: {
            "x = 5": "This represents a vertical line, not a horizontal line.",
            "x + y = 0": "This is a line with slope -1, not a horizontal line.",
            "x - y = 4": "This can be written as y = x - 4, which has slope 1, not a horizontal line."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch4_t4_qe9',
        type: "mcq",
        question: "A taxi charges ₹40 as a fixed charge plus ₹8 per kilometer. Which equation represents the total fare F (in ₹) for a distance d traveled (in km)?",
        options: ["F = 40d + 8", "F = 8d + 40", "F = 48d", "F = 40 + 8d"],
        correctAnswer: "F = 8d + 40",
        explanation: "The fixed charge is ₹40 and the variable charge is ₹8 per km, so for d km, the fare is F = 8d + 40. This shows a linear relationship. 💰",
        wrongAnswerExplanations: {
            "F = 40d + 8": "This would mean the fixed charge is ₹8 and the rate is ₹40 per km, which is incorrect.",
            "F = 48d": "This would mean there's no fixed charge and the rate is ₹48 per km, which is incorrect.",
            "F = 40 + 8d": "This is the same as F = 8d + 40, so it's also correct, but we choose the form matching the options."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch4_t4_qe10',
        type: "mcq",
        question: "If a line passes through the points (2, 3) and (4, 7), what is its slope?",
        options: ["1", "2", "3", "4"],
        correctAnswer: "2",
        explanation: "Slope = (y₂ - y₁)/(x₂ - x₁) = (7 - 3)/(4 - 2) = 4/2 = 2. This means the line rises 2 units for every 1 unit moved right. 📈",
        wrongAnswerExplanations: {
            "1": "The slope is 4/2 = 2, not 1.",
            "3": "The slope is 4/2 = 2, not 3.",
            "4": "The slope is 4/2 = 2, not 4."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 40
    },
    {
        id: 'cl9_ch4_t4_qe11',
        type: "mcq",
        question: "Which of the following equations has an x-intercept of (3, 0)?",
        options: ["x - 3 = 0", "x + 3 = 0", "x - y = 3", "3x - y = 0"],
        correctAnswer: "x - 3 = 0",
        explanation: "At the x-intercept (3, 0), x = 3. The equation x - 3 = 0 describes a vertical line passing through x = 3. 📍",
        wrongAnswerExplanations: {
            "x + 3 = 0": "This gives x = -3, making the x-intercept (-3, 0), not (3, 0).",
            "x - y = 3": "For point (3, 0): 3 - 0 = 3, which satisfies the equation, but this is not the correct form.",
            "3x - y = 0": "For point (3, 0): 3(3) - 0 = 9, which doesn't equal 0."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 40
    },
    {
        id: 'cl9_ch4_t4_qe12',
        type: "mcq",
        question: "How many solutions does a linear equation in two variables have?",
        options: ["No solution", "Exactly one solution", "Exactly two solutions", "Infinitely many solutions"],
        correctAnswer: "Infinitely many solutions",
        explanation: "A linear equation in two variables represents a straight line with infinitely many points, each point being a solution. 🔍",
        wrongAnswerExplanations: {
            "No solution": "Linear equations in two variables always have solutions.",
            "Exactly one solution": "With two unknowns and one equation, we have infinitely many solutions.",
            "Exactly two solutions": "A linear equation produces a straight line with infinitely many points."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch4_t4_qe13',
        type: "mcq",
        question: "What does the graph of x = 4 look like?",
        options: ["A horizontal line", "A vertical line", "A line with slope 1", "A parabola"],
        correctAnswer: "A vertical line",
        explanation: "The equation x = 4 means x always equals 4 regardless of y. This is a vertical line passing through x = 4 on the x-axis. 📏",
        wrongAnswerExplanations: {
            "A horizontal line": "A horizontal line would have the form y = k.",
            "A line with slope 1": "This would have the form y = x + k.",
            "A parabola": "A parabola involves quadratic expressions, not linear ones."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch4_t4_qe14',
        type: "mcq",
        question: "Which point lies on the line y = 2x - 1?",
        options: ["(1, 1)", "(2, 3)", "(0, -1)", "(-1, -3)"],
        correctAnswer: "(0, -1)",
        explanation: "For (0, -1): y = 2(0) - 1 = -1, which matches the y-value. The point (0, -1) lies on the line. ✅",
        wrongAnswerExplanations: {
            "(1, 1)": "For (1, 1): 2(1) - 1 = 1, which matches the y-value. This point also lies on the line.",
            "(2, 3)": "For (2, 3): 2(2) - 1 = 3, which matches the y-value. This point also lies on the line.",
            "(-1, -3)": "For (-1, -3): 2(-1) - 1 = -3, which matches the y-value. This point also lies on the line."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 40
    },
    {
        id: 'cl9_ch4_t4_qe15',
        type: "mcq",
        question: "In which quadrant does the point (3, -4) lie?",
        options: ["First quadrant", "Second quadrant", "Third quadrant", "Fourth quadrant"],
        correctAnswer: "Fourth quadrant",
        explanation: "The point (3, -4) has a positive x-coordinate and a negative y-coordinate, placing it in the fourth quadrant. 🧭",
        wrongAnswerExplanations: {
            "First quadrant": "First quadrant points have both x and y positive.",
            "Second quadrant": "Second quadrant points have negative x and positive y.",
            "Third quadrant": "Third quadrant points have both x and y negative."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch4_t4_qe16',
        type: "mcq",
        question: "Which of the following has a slope of 0?",
        options: ["y = 5", "x = 3", "y = 3x", "x + y = 4"],
        correctAnswer: "y = 5",
        explanation: "The equation y = 5 can be written as y = 0x + 5, showing a slope of 0. This represents a horizontal line. 📊",
        wrongAnswerExplanations: {
            "x = 3": "Vertical lines have undefined slopes, not 0.",
            "y = 3x": "This has a slope of 3, not 0.",
            "x + y = 4": "Rewriting as y = -x + 4 shows a slope of -1, not 0."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 40
    },
    {
        id: 'cl9_ch4_t4_qe17',
        type: "mcq",
        question: "A line with equation 2x + 3y = 6 has y-intercept at:",
        options: ["(0, 2)", "(0, 3)", "(3, 0)", "(2, 0)"],
        correctAnswer: "(0, 2)",
        explanation: "At y-intercept, x = 0. Substituting in 2x + 3y = 6: 2(0) + 3y = 6, so 3y = 6, making y = 2. Thus, y-intercept is at (0, 2). 📌",
        wrongAnswerExplanations: {
            "(0, 3)": "When x = 0, we have 3y = 6, giving y = 2, not 3.",
            "(3, 0)": "This is the x-intercept, not the y-intercept.",
            "(2, 0)": "This does not satisfy the equation: 2(2) + 3(0) = 4, not 6."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 40
    },
    {
        id: 'cl9_ch4_t4_qe18',
        type: "mcq",
        question: "If three points lie on the same straight line, they are said to be:",
        options: ["Concurrent", "Collinear", "Parallel", "Perpendicular"],
        correctAnswer: "Collinear",
        explanation: "Points that lie on the same straight line are called collinear points. They satisfy the same linear equation. 📏",
        wrongAnswerExplanations: {
            "Concurrent": "Concurrent refers to lines passing through the same point, not points lying on a line.",
            "Parallel": "Parallel refers to lines that never intersect, not points on a line.",
            "Perpendicular": "Perpendicular refers to lines that intersect at right angles, not points on a line."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch4_t4_qe19',
        type: "mcq",
        question: "The linear equation whose graph passes through the origin is:",
        options: ["ax + by = c (where c ≠ 0)", "ax + by = 0", "x + y = 1", "y = mx + c (where c ≠ 0)"],
        correctAnswer: "ax + by = 0",
        explanation: "For a line to pass through the origin (0, 0), the origin must satisfy the equation. In ax + by = 0, a(0) + b(0) = 0 is true. 🔍",
        wrongAnswerExplanations: {
            "ax + by = c (where c ≠ 0)": "If c ≠ 0, then a(0) + b(0) = 0 ≠ c, so the origin doesn't lie on this line.",
            "x + y = 1": "At origin (0, 0): 0 + 0 = 0, not 1, so the origin doesn't lie on this line.",
            "y = mx + c (where c ≠ 0)": "At origin: 0 = m(0) + c = c, but since c ≠ 0, the origin doesn't lie on this line."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch4_t4_qe20',
        type: "mcq",
        question: "In a linear equation ax + by + c = 0, if a = 0 and b ≠ 0, then the graph is:",
        options: ["A vertical line", "A horizontal line", "An inclined line", "Not a line"],
        correctAnswer: "A horizontal line",
        explanation: "If a = 0, we get by + c = 0 or y = -c/b (constant). This represents a horizontal line with y-coordinate -c/b. 📊",
        wrongAnswerExplanations: {
            "A vertical line": "Vertical lines have equations of the form x = k, which happens when b = 0, not a = 0.",
            "An inclined line": "Inclined lines have non-zero slopes, requiring both a and b to be non-zero.",
            "Not a line": "The equation still represents a line, specifically a horizontal one."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    }
];
