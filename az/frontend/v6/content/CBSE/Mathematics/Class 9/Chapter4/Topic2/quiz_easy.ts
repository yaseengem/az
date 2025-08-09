// filepath: content/CBSE/Mathematics/Class 9/Chapter4/Topic2/quiz_easy.ts
import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl9_ch4_t2_qe1',
        type: "mcq",
        question: "Which of the following is the slope-intercept form of a linear equation?",
        options: ["y = mx + b", "ax + by + c = 0", "y - y₁ = m(x - x₁)", "(x/a) + (y/b) = 1"],
        correctAnswer: "y = mx + b",
        explanation: "The slope-intercept form is y = mx + b, where m is the slope and b is the y-intercept. This form makes it easy to identify the slope and y-intercept directly from the equation. 📈",
        wrongAnswerExplanations: {
            "ax + by + c = 0": "This is the standard form, not the slope-intercept form.",
            "y - y₁ = m(x - x₁)": "This is the point-slope form, not the slope-intercept form.",
            "(x/a) + (y/b) = 1": "This is the intercept form, not the slope-intercept form."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch4_t2_qe2',
        type: "mcq",
        question: "In the linear equation y = 3x - 4, what is the y-intercept?",
        options: ["3", "4", "-4", "-3"],
        correctAnswer: "-4",
        explanation: "In the slope-intercept form y = mx + b, the y-intercept is the value of b. In y = 3x - 4, b = -4, which means the line crosses the y-axis at the point (0, -4). 📊",
        wrongAnswerExplanations: {
            "3": "3 is the slope (m) of the line, not the y-intercept.",
            "4": "The y-intercept is -4, not 4.",
            "-3": "The y-intercept is -4, not -3."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch4_t2_qe3',
        type: "mcq",
        question: "What is the standard form of the linear equation y = 2x + 5?",
        options: ["2x - y + 5 = 0", "2x + y + 5 = 0", "2x - y - 5 = 0", "2x + y - 5 = 0"],
        correctAnswer: "2x - y + 5 = 0",
        explanation: "To convert from slope-intercept form (y = mx + b) to standard form (ax + by + c = 0), rearrange to get all terms on one side. Starting with y = 2x + 5, we get y - 2x - 5 = 0, which can be rewritten as 2x - y + 5 = 0. 🧮",
        wrongAnswerExplanations: {
            "2x + y + 5 = 0": "This doesn't match the original equation. If we solve for y, we get y = -2x - 5, not y = 2x + 5.",
            "2x - y - 5 = 0": "This doesn't match the original equation. If we solve for y, we get y = 2x - 5, not y = 2x + 5.",
            "2x + y - 5 = 0": "This doesn't match the original equation. If we solve for y, we get y = 5 - 2x, not y = 2x + 5."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch4_t2_qe4',
        type: "mcq",
        question: "In the linear equation 3x + 4y - 12 = 0, what is the coefficient of y?",
        options: ["3", "4", "-4", "12"],
        correctAnswer: "4",
        explanation: "In the standard form ax + by + c = 0, the coefficient of y is b. In the equation 3x + 4y - 12 = 0, the coefficient of y is 4. This coefficient helps determine the slope and intercepts of the line. 🔍",
        wrongAnswerExplanations: {
            "3": "3 is the coefficient of x, not y.",
            "-4": "The coefficient of y is 4, not -4.",
            "12": "12 is the constant term (c) in the equation, not the coefficient of y."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch4_t2_qe5',
        type: "mcq",
        question: "What is the slope of the line 2x - 3y + 6 = 0?",
        options: ["2/3", "-2/3", "3/2", "-3/2"],
        correctAnswer: "2/3",
        explanation: "To find the slope from standard form ax + by + c = 0, convert to slope-intercept form y = mx + b. From 2x - 3y + 6 = 0, we get -3y = -2x - 6, so y = (2/3)x + 2. Therefore, the slope is 2/3. 📏",
        wrongAnswerExplanations: {
            "-2/3": "The slope is 2/3, not -2/3. The negative sign is incorrectly placed.",
            "3/2": "The slope is 2/3, not 3/2. The fraction is inverted.",
            "-3/2": "The slope is 2/3, not -3/2. Both the sign and fraction are incorrect."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch4_t2_qe6',
        type: "mcq",
        question: "What type of line has the equation x = 5?",
        options: ["Horizontal line", "Vertical line", "Line with positive slope", "Line with negative slope"],
        correctAnswer: "Vertical line",
        explanation: "The equation x = 5 represents a vertical line that passes through the x-axis at the point (5, 0). This line is parallel to the y-axis, and its slope is undefined. All points on this line have an x-coordinate of 5. │",
        wrongAnswerExplanations: {
            "Horizontal line": "A horizontal line would have the form y = k for some constant k.",
            "Line with positive slope": "A line with positive slope would have the form y = mx + b where m > 0.",
            "Line with negative slope": "A line with negative slope would have the form y = mx + b where m < 0."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch4_t2_qe7',
        type: "mcq",
        question: "Which of the following lines is parallel to the line 3x - 2y = 6?",
        options: ["6x - 4y = 12", "2x - 3y = 9", "2y - 3x = 5", "3x + 2y = 4"],
        correctAnswer: "6x - 4y = 12",
        explanation: "Parallel lines have the same slope. The slope of 3x - 2y = 6 is 3/2 (rewrite as y = (3/2)x - 3). Similarly, 6x - 4y = 12 can be rewritten as y = (6/4)x - 3 = (3/2)x - 3, which has the same slope of 3/2. Therefore, these lines are parallel. ∥",
        wrongAnswerExplanations: {
            "2x - 3y = 9": "This line has a slope of 2/3, not 3/2, so it's not parallel to 3x - 2y = 6.",
            "2y - 3x = 5": "This line has a slope of 3/2, which is the same as 3x - 2y = 6, but it's in a different direction, so it's not parallel.",
            "3x + 2y = 4": "This line has a slope of -3/2, not 3/2, so it's not parallel to 3x - 2y = 6."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch4_t2_qe8',
        type: "mcq",
        question: "What is the y-coordinate of the point where the line 2x - 3y = 12 intersects the y-axis?",
        options: ["-4", "4", "-6", "6"],
        correctAnswer: "-4",
        explanation: "To find where a line intersects the y-axis, substitute x = 0 into the equation. For 2x - 3y = 12: 2(0) - 3y = 12 → -3y = 12 → y = -4. Therefore, the line intersects the y-axis at the point (0, -4). 📍",
        wrongAnswerExplanations: {
            "4": "If y = 4, then 2(0) - 3(4) = 0 - 12 = -12, which doesn't equal 12.",
            "-6": "If y = -6, then 2(0) - 3(-6) = 0 + 18 = 18, which doesn't equal 12.",
            "6": "If y = 6, then 2(0) - 3(6) = 0 - 18 = -18, which doesn't equal 12."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch4_t2_qe9',
        type: "mcq",
        question: "What is the value of 'b' if the line y = 2x + b passes through the point (3, 5)?",
        options: ["-1", "1", "-2", "2"],
        correctAnswer: "-1",
        explanation: "Substitute the coordinates (3, 5) into the equation y = 2x + b: 5 = 2(3) + b → 5 = 6 + b → b = -1. Therefore, the equation of the line is y = 2x - 1. 🔢",
        wrongAnswerExplanations: {
            "1": "If b = 1, then y = 2x + 1, and at x = 3, y = 2(3) + 1 = 7, not 5.",
            "-2": "If b = -2, then y = 2x - 2, and at x = 3, y = 2(3) - 2 = 4, not 5.",
            "2": "If b = 2, then y = 2x + 2, and at x = 3, y = 2(3) + 2 = 8, not 5."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch4_t2_qe10',
        type: "mcq",
        question: "What is the slope of a line that is perpendicular to the line y = -3x + 4?",
        options: ["3", "-3", "1/3", "-1/3"],
        correctAnswer: "1/3",
        explanation: "The slope of y = -3x + 4 is -3. For perpendicular lines, if the slope of one line is m, the slope of the perpendicular line is -1/m. Therefore, the slope of a line perpendicular to y = -3x + 4 is -1/(-3) = 1/3. This is a fundamental property of perpendicular lines. ⊥",
        wrongAnswerExplanations: {
            "3": "The slope of a line perpendicular to a line with slope -3 is 1/3, not 3.",
            "-3": "A line with slope -3 would be parallel to the given line, not perpendicular.",
            "-1/3": "The slope of a line perpendicular to a line with slope -3 is 1/3, not -1/3."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch4_t2_qe11',
        type: "mcq",
        question: "What is the slope of the line passing through the points (2, 5) and (4, 9)?",
        options: ["2", "3", "4", "5"],
        correctAnswer: "2",
        explanation: "Using the slope formula: m = (y₂ - y₁)/(x₂ - x₁) = (9 - 5)/(4 - 2) = 4/2 = 2. The slope represents the rate of change in the y-coordinate relative to the x-coordinate. 📈",
        wrongAnswerExplanations: {
            "3": "If the slope were 3, the points would not lie on the same line.",
            "4": "This is the change in y (9 - 5 = 4), not the slope.",
            "5": "This is the y-coordinate of the first point, not the slope."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch4_t2_qe12',
        type: "mcq",
        question: "In the point-slope form y - y₁ = m(x - x₁), what does (x₁, y₁) represent?",
        options: ["The y-intercept", "The x-intercept", "A point on the line", "The slope of the line"],
        correctAnswer: "A point on the line",
        explanation: "In the point-slope form y - y₁ = m(x - x₁), the ordered pair (x₁, y₁) represents a point through which the line passes. This form is particularly useful when we know a point on the line and its slope. 📝",
        wrongAnswerExplanations: {
            "The y-intercept": "The y-intercept is the point where the line crosses the y-axis (0, b), not necessarily the point (x₁, y₁).",
            "The x-intercept": "The x-intercept is the point where the line crosses the x-axis (a, 0), not necessarily the point (x₁, y₁).",
            "The slope of the line": "The slope of the line is represented by m in the point-slope form, not by (x₁, y₁)."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch4_t2_qe13',
        type: "mcq",
        question: "Which of the following linear equations passes through the origin?",
        options: ["y = 2x", "y = 2x + 3", "y = 2x - 1", "y = -2x + 2"],
        correctAnswer: "y = 2x",
        explanation: "A line passes through the origin if the point (0, 0) satisfies its equation. For y = 2x: when x = 0, y = 2(0) = 0 ✓. Lines passing through the origin always have the form y = mx, where m is the slope. 🔍",
        wrongAnswerExplanations: {
            "y = 2x + 3": "When x = 0, y = 2(0) + 3 = 3, not 0, so this line doesn't pass through the origin.",
            "y = 2x - 1": "When x = 0, y = 2(0) - 1 = -1, not 0, so this line doesn't pass through the origin.",
            "y = -2x + 2": "When x = 0, y = -2(0) + 2 = 2, not 0, so this line doesn't pass through the origin."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch4_t2_qe14',
        type: "mcq",
        question: "If a line has a slope of 0, which of the following is true?",
        options: ["It is a vertical line", "It is a horizontal line", "It passes through the origin", "It has a positive y-intercept"],
        correctAnswer: "It is a horizontal line",
        explanation: "A line with a slope of 0 is horizontal, meaning it is parallel to the x-axis. Its equation has the form y = b (a constant), indicating that the y-coordinate remains constant for all points on the line. ➖",
        wrongAnswerExplanations: {
            "It is a vertical line": "A vertical line has an undefined slope, not a slope of 0.",
            "It passes through the origin": "A horizontal line passes through the origin only if its equation is y = 0.",
            "It has a positive y-intercept": "A horizontal line can have any y-intercept, positive, negative, or zero."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch4_t2_qe15',
        type: "mcq",
        question: "Which form of a linear equation is most useful for finding the x and y intercepts directly?",
        options: ["Standard form: ax + by + c = 0", "Slope-intercept form: y = mx + b", "Point-slope form: y - y₁ = m(x - x₁)", "Intercept form: (x/a) + (y/b) = 1"],
        correctAnswer: "Intercept form: (x/a) + (y/b) = 1",
        explanation: "The intercept form (x/a) + (y/b) = 1 directly shows the x-intercept (a, 0) and y-intercept (0, b). This makes it the most convenient form for identifying these key points. For example, in (x/3) + (y/2) = 1, the x-intercept is (3, 0) and the y-intercept is (0, 2). 📊",
        wrongAnswerExplanations: {
            "Standard form: ax + by + c = 0": "In standard form, the intercepts are calculated using the formulas x = -c/a and y = -c/b, which requires additional steps.",
            "Slope-intercept form: y = mx + b": "This form shows the y-intercept directly (0, b), but the x-intercept must be calculated by setting y = 0 and solving for x.",
            "Point-slope form: y - y₁ = m(x - x₁)": "This form doesn't directly show either intercept and requires additional calculations to find them."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch4_t2_qe16',
        type: "mcq",
        question: "What is the value of 'c' in the standard form equation 2x - 5y + c = 0 if the line passes through the point (3, 1)?",
        options: ["-1", "1", "-2", "2"],
        correctAnswer: "-1",
        explanation: "Substitute the point (3, 1) into the equation 2x - 5y + c = 0: 2(3) - 5(1) + c = 0 → 6 - 5 + c = 0 → 1 + c = 0 → c = -1. The standard form equation with the correct value of c is 2x - 5y - 1 = 0. 🧮",
        wrongAnswerExplanations: {
            "1": "If c = 1, then 2(3) - 5(1) + 1 = 6 - 5 + 1 = 2, which does not equal 0.",
            "-2": "If c = -2, then 2(3) - 5(1) - 2 = 6 - 5 - 2 = -1, which does not equal 0.",
            "2": "If c = 2, then 2(3) - 5(1) + 2 = 6 - 5 + 2 = 3, which does not equal 0."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch4_t2_qe17',
        type: "mcq",
        question: "In the equation y = mx + b, what does 'm' represent?",
        options: ["The y-intercept", "The x-intercept", "The slope of the line", "A point on the line"],
        correctAnswer: "The slope of the line",
        explanation: "In the slope-intercept form y = mx + b, the coefficient m represents the slope of the line. The slope indicates the steepness and direction of the line, defined as the ratio of vertical change to horizontal change. 📈",
        wrongAnswerExplanations: {
            "The y-intercept": "The y-intercept is represented by b in the slope-intercept form, not m.",
            "The x-intercept": "The x-intercept is not directly represented in the slope-intercept form.",
            "A point on the line": "m does not represent a point; it represents the rate of change of y with respect to x."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch4_t2_qe18',
        type: "mcq",
        question: "What is the standard form of the linear equation 3(x - 2) = 2(y + 3)?",
        options: ["3x - 2y = 12", "3x - 2y = 0", "3x - 2y = 6", "3x + 2y = 12"],
        correctAnswer: "3x - 2y = 12",
        explanation: "Expand the equation: 3(x - 2) = 2(y + 3) → 3x - 6 = 2y + 6 → 3x - 2y - 12 = 0 → 3x - 2y = 12. This is the standard form (ax + by + c = 0) of the given equation. 📝",
        wrongAnswerExplanations: {
            "3x - 2y = 0": "This is incorrect. When expanding 3(x - 2) = 2(y + 3), we get 3x - 2y = 12, not 0.",
            "3x - 2y = 6": "This is incorrect. When expanding 3(x - 2) = 2(y + 3), we get 3x - 2y = 12, not 6.",
            "3x + 2y = 12": "This is incorrect. The coefficient of y should be -2, not +2."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch4_t2_qe19',
        type: "mcq",
        question: "Which of the following lines is perpendicular to the line 2x + 3y = 6?",
        options: ["2x - 3y = 4", "3x - 2y = 5", "3x + 2y = 8", "3x + 2y = -7"],
        correctAnswer: "3x - 2y = 5",
        explanation: "To find a perpendicular line, first determine the slope of 2x + 3y = 6: y = (-2/3)x + 2. The slope is -2/3. For perpendicular lines, the product of slopes equals -1. So the perpendicular slope is 3/2. The line 3x - 2y = 5 can be rewritten as y = (3/2)x - 5/2, which has a slope of 3/2. Therefore, it is perpendicular to the given line. ⊥",
        wrongAnswerExplanations: {
            "2x - 3y = 4": "This line has a slope of 2/3, which is not perpendicular to -2/3.",
            "3x + 2y = 8": "This line has a slope of -3/2, which is not perpendicular to -2/3.",
            "3x + 2y = -7": "This line has a slope of -3/2, which is not perpendicular to -2/3."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch4_t2_qe20',
        type: "mcq",
        question: "What is the equation of a line with slope 4 and passing through the point (2, 3)?",
        options: ["y = 4x - 5", "y = 4x - 8", "y = 4x + 3", "y = 4x - 4"],
        correctAnswer: "y = 4x - 5",
        explanation: "Using the point-slope form: y - y₁ = m(x - x₁) → y - 3 = 4(x - 2) → y - 3 = 4x - 8 → y = 4x - 8 + 3 = 4x - 5. The slope-intercept form of the equation is y = 4x - 5. 📊",
        wrongAnswerExplanations: {
            "y = 4x - 8": "This doesn't pass through (2, 3). If x = 2, y = 4(2) - 8 = 0, not 3.",
            "y = 4x + 3": "This doesn't pass through (2, 3). If x = 2, y = 4(2) + 3 = 11, not 3.",
            "y = 4x - 4": "This doesn't pass through (2, 3). If x = 2, y = 4(2) - 4 = 4, not 3."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    }
]; 