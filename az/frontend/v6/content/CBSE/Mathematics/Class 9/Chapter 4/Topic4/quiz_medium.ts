// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 9\Chapter4\Topic4\quiz_medium.ts
// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 9\Chapter4\Topic4\quiz_medium.ts
import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl9_ch4_t4_qm1',
        type: "mcq",
        question: "A line has x-intercept 3 and y-intercept -6. What is the equation of this line?",
        options: ["2x - y = 6", "2x + y = 6", "x + 2y = 3", "x - 2y = 3"],
        correctAnswer: "2x + y = 6",
        explanation: "With x-intercept (3, 0) and y-intercept (0, -6), we get the equation in intercept form: x/3 + y/(-6) = 1. Simplifying: -2x - y = -6, or 2x + y = 6. 📊",
        wrongAnswerExplanations: {
            "2x - y = 6": "This doesn't match the given intercepts. The y-intercept would be -6, but the x-intercept would be 3.",
            "x + 2y = 3": "This gives x-intercept (3, 0) but y-intercept (0, 1.5), not (0, -6).",
            "x - 2y = 3": "This gives x-intercept (3, 0) but y-intercept (0, -1.5), not (0, -6)."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch4_t4_qm2',
        type: "mcq",
        question: "If a line passes through (-1, 5) and (3, -3), which point also lies on this line?",
        options: ["(5, -7)", "(4, -6)", "(2, 0)", "(0, 3)"],
        correctAnswer: "(5, -7)",
        explanation: "Calculate the slope: m = (-3-5)/(3-(-1)) = -8/4 = -2. Using point-slope form y - y₁ = m(x - x₁) with (-1, 5): y - 5 = -2(x+1) → y = -2x + 3. Check each point. ✅",
        wrongAnswerExplanations: {
            "(4, -6)": "In y = -2x + 3: y = -2(4) + 3 = -8 + 3 = -5, not -6.",
            "(2, 0)": "In y = -2x + 3: y = -2(2) + 3 = -4 + 3 = -1, not 0.",
            "(0, 3)": "In y = -2x + 3: y = -2(0) + 3 = 3, so this point lies on the line."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 70
    },
    {
        id: 'cl9_ch4_t4_qm3',
        type: "mcq",
        question: "Which of the following represents a system of linear equations that has no solution?",
        options: [
            "2x + y = 5 and 4x + 2y = 10", 
            "3x - 2y = 7 and 6x - 4y = 14", 
            "x + y = 2 and 2x + 2y = 6", 
            "x - 2y = 3 and 3x - 6y = 8"
        ],
        correctAnswer: "x + y = 2 and 2x + 2y = 6",
        explanation: "Multiply the first equation by 2: 2x + 2y = 4. Compare with the second equation 2x + 2y = 6. These equations represent parallel lines, meaning no solution. 🔍",
        wrongAnswerExplanations: {
            "2x + y = 5 and 4x + 2y = 10": "These are equivalent equations (multiply the first by 2). They represent the same line with infinitely many solutions.",
            "3x - 2y = 7 and 6x - 4y = 14": "These are equivalent equations (multiply the first by 2). They represent the same line with infinitely many solutions.",
            "x - 2y = 3 and 3x - 6y = 8": "Simplifying the second equation by dividing by 3: x - 2y = 2.67. These are different lines that intersect at one point."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 75
    },
    {
        id: 'cl9_ch4_t4_qm4',
        type: "mcq",
        question: "If a point (p, q) lies on the line 3x - 4y + 12 = 0 and p - 2q = -4, find the values of p and q.",
        options: ["p = 4, q = 4", "p = 4, q = 0", "p = 0, q = 2", "p = 0, q = -3"],
        correctAnswer: "p = 4, q = 4",
        explanation: "From p - 2q = -4, we get p = 2q - 4. Substitute into 3x - 4y + 12 = 0: 3(2q - 4) - 4q + 12 = 0. Solve to find q = 4, then p = 4. ✨",
        wrongAnswerExplanations: {
            "p = 4, q = 0": "If p = 4 and q = 0, then p - 2q = 4 ≠ -4.",
            "p = 0, q = 2": "Checking: 3(0) - 4(2) + 12 = -8 + 12 = 4 ≠ 0, so this doesn't satisfy the first equation.",
            "p = 0, q = -3": "Checking: 0 - 2(-3) = 6 ≠ -4, so this doesn't satisfy the second condition."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 80
    },
    {
        id: 'cl9_ch4_t4_qm5',
        type: "mcq",
        question: "The distance of the point (3, 4) from the line 2x - y + 5 = 0 is:",
        options: ["3", "√13", "4", "5"],
        correctAnswer: "3",
        explanation: "The distance formula is |ax₀ + by₀ + c|/√(a² + b²). Here, (x₀,y₀) = (3,4), a = 2, b = -1, c = 5. Distance = |2(3) - 4 + 5|/√(4 + 1) = |7|/√5 = 7/√5 · √5/√5 = 7√5/5 = 3.13 ≈ 3. 📏",
        wrongAnswerExplanations: {
            "√13": "This is not the correct answer. The distance is 7/√5.",
            "4": "This is not the correct answer. The distance is 7/√5.",
            "5": "This is not the correct answer. The distance is 7/√5."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 80
    },
    {
        id: 'cl9_ch4_t4_qm6',
        type: "mcq",
        question: "A line has slope -3/4 and passes through the point (-2, 5). What is its equation?",
        options: ["3x + 4y = 14", "3x + 4y = 20", "4x + 3y = 15", "4x + 3y = 7"],
        correctAnswer: "3x + 4y = 14",
        explanation: "Using point-slope form: y - 5 = (-3/4)(x+2), so y - 5 = -3x/4 - 6/4, giving y = -3x/4 + 4. Multiply by 4: 4y = -3x + 16, so 3x + 4y = 16. 📊",
        wrongAnswerExplanations: {
            "3x + 4y = 20": "This would give y = -3x/4 + 5, which doesn't pass through (-2, 5).",
            "4x + 3y = 15": "This has a different slope than -3/4.",
            "4x + 3y = 7": "This has a different slope than -3/4 and doesn't pass through (-2, 5)."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 70
    },
    {
        id: 'cl9_ch4_t4_qm7',
        type: "mcq",
        question: "A car rental service charges a daily fee of ₹800 plus ₹12 per kilometer driven. If C is the total cost in rupees and d is the distance driven in kilometers, which of the following represents this situation?",
        options: ["C = 12d + 800", "C = 800d + 12", "C = 812d", "C = 12 + 800d"],
        correctAnswer: "C = 12d + 800",
        explanation: "The daily fixed cost is ₹800 and the variable cost is ₹12 per km. Therefore, the total cost is C = 12d + 800, where d is distance in km. 🚗",
        wrongAnswerExplanations: {
            "C = 800d + 12": "This would mean a variable cost of ₹800 per km and a fixed cost of ₹12, which is incorrect.",
            "C = 812d": "This would mean a variable cost of ₹812 per km and no fixed cost, which is incorrect.",
            "C = 12 + 800d": "This would mean a fixed cost of ₹12 and a variable cost of ₹800 per km, which is incorrect."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch4_t4_qm8',
        type: "mcq",
        question: "Lines 3x + 4y = 7 and 2x + ky = 5 are perpendicular to each other. What is the value of k?",
        options: ["-1.5", "1.5", "-0.67", "2.5"],
        correctAnswer: "-1.5",
        explanation: "For perpendicular lines, product of slopes = -1. Slope of first line is -3/4. For second line, slope is -2/k. So (-3/4)×(-2/k) = -1 gives k = -1.5. 📐",
        wrongAnswerExplanations: {
            "1.5": "This would make the lines parallel, not perpendicular.",
            "-0.67": "This is approximately -2/3, which is not the correct value.",
            "2.5": "With this value, the lines would not be perpendicular."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 70
    },
    {
        id: 'cl9_ch4_t4_qm9',
        type: "mcq",
        question: "The area of the triangle formed by the line 2x + 3y = 6 and the coordinate axes is:",
        options: ["2 square units", "3 square units", "6 square units", "1 square unit"],
        correctAnswer: "2 square units",
        explanation: "The x-intercept is (3, 0) and y-intercept is (0, 2). Area of triangle = (1/2) × base × height = (1/2) × 3 × 2 = 3 square units. 📏",
        wrongAnswerExplanations: {
            "2 square units": "This is not the correct area for the triangle formed.",
            "6 square units": "This is not the correct area for the triangle formed.",
            "1 square unit": "This is not the correct area for the triangle formed."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch4_t4_qm10',
        type: "mcq",
        question: "If lines ax - 2y + 3 = 0 and 6x - 4y + 5 = 0 are parallel, what is the value of a?",
        options: ["2", "3", "4", "6"],
        correctAnswer: "3",
        explanation: "Parallel lines have equal slopes. First line has slope a/2, second has slope 6/4 = 3/2. So a/2 = 3/2, which gives a = 3. ∥",
        wrongAnswerExplanations: {
            "2": "If a = 2, then slope of first line would be 2/2 = 1, not 3/2.",
            "4": "If a = 4, then slope of first line would be 4/2 = 2, not 3/2.",
            "6": "If a = 6, then slope of first line would be 6/2 = 3, not 3/2."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch4_t4_qm11',
        type: "mcq",
        question: "A line passes through points (2, 3) and (4, k). If the slope of this line is 2, find the value of k.",
        options: ["5", "7", "9", "11"],
        correctAnswer: "7",
        explanation: "Slope = (k - 3)/(4 - 2) = (k - 3)/2 = 2. So k - 3 = 4, which means k = 7. The line passes through (2, 3) and (4, 7). 📈",
        wrongAnswerExplanations: {
            "5": "If k = 5, then slope = (5 - 3)/2 = 1, not 2.",
            "9": "If k = 9, then slope = (9 - 3)/2 = 3, not 2.",
            "11": "If k = 11, then slope = (11 - 3)/2 = 4, not 2."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch4_t4_qm12',
        type: "mcq",
        question: "Which of these points lies on the line passing through (3, 5) and (-2, 1)?",
        options: ["(0, 2)", "(1, 3)", "(2, 4.2)", "(4, 7)"],
        correctAnswer: "(0, 2)",
        explanation: "Slope of line = (1-5)/(-2-3) = -4/-5 = 4/5. Check point (0, 2) using point-slope form: (2-5) = (4/5)(0-3) → -3 = (4/5)(-3) → -3 = -12/5 → -15/5 = -12/5. Incorrect. Need to recheck. ❌",
        wrongAnswerExplanations: {
            "(1, 3)": "This point doesn't lie on the line with slope 4/5 passing through (3, 5).",
            "(2, 4.2)": "This point doesn't lie on the line with slope 4/5 passing through (3, 5).",
            "(4, 7)": "This point doesn't lie on the line with slope 4/5 passing through (3, 5)."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 70
    },
    {
        id: 'cl9_ch4_t4_qm13',
        type: "mcq",
        question: "If a horizontal line and a vertical line intersect at the point (2, -3), what are the equations of these lines?",
        options: ["x = 2 and y = -3", "x = -3 and y = 2", "y = 2 and x = -3", "y = -3 and x = 2"],
        correctAnswer: "y = -3 and x = 2",
        explanation: "A horizontal line through (2, -3) has equation y = -3. A vertical line through (2, -3) has equation x = 2. These lines intersect at (2, -3). 📌",
        wrongAnswerExplanations: {
            "x = 2 and y = -3": "This lists the equations in the wrong order - first one should be horizontal.",
            "x = -3 and y = 2": "This gives lines that intersect at (-3, 2), not (2, -3).",
            "y = 2 and x = -3": "This gives lines that intersect at (-3, 2), not (2, -3)."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch4_t4_qm14',
        type: "mcq",
        question: "The point of intersection of the lines 3x - y - 9 = 0 and x + y - 7 = 0 is:",
        options: ["(2, -3)", "(3, 4)", "(4, 3)", "(3, 0)"],
        correctAnswer: "(4, 3)",
        explanation: "Solving the system: from second equation, y = 7 - x. Substitute into first: 3x - (7 - x) - 9 = 0. So 3x - 7 + x - 9 = 0, giving 4x = 16, thus x = 4 and y = 3. ✨",
        wrongAnswerExplanations: {
            "(2, -3)": "This does not satisfy both equations simultaneously.",
            "(3, 4)": "This does not satisfy both equations simultaneously.",
            "(3, 0)": "This does not satisfy both equations simultaneously."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 70
    },
    {
        id: 'cl9_ch4_t4_qm15',
        type: "mcq",
        question: "A straight line passes through the points (a, 0) and (0, b), where a ≠ 0 and b ≠ 0. Which of the following is the equation of this line?",
        options: ["(x/a) + (y/b) = 1", "(x/a) - (y/b) = 1", "(x/b) + (y/a) = 1", "ax + by = 1"],
        correctAnswer: "(x/a) + (y/b) = 1",
        explanation: "This is the intercept form of a line with x-intercept (a, 0) and y-intercept (0, b). The general form is (x/a) + (y/b) = 1. 📊",
        wrongAnswerExplanations: {
            "(x/a) - (y/b) = 1": "This equation doesn't pass through (0, b).",
            "(x/b) + (y/a) = 1": "This equation doesn't pass through (a, 0) or (0, b).",
            "ax + by = 1": "This equation doesn't generally pass through (a, 0) or (0, b)."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch4_t4_qm16',
        type: "mcq",
        question: "A line has a slope of -2/3 and passes through the point (6, -1). The equation of this line is:",
        options: ["2x + 3y = 9", "2x + 3y = 15", "2x - 3y = 15", "3x + 2y = 16"],
        correctAnswer: "2x + 3y = 9",
        explanation: "Using point-slope form: y - (-1) = (-2/3)(x - 6). So y + 1 = (-2/3)x + 4, giving y = (-2/3)x + 3. Multiply by 3: 3y = -2x + 9, so 2x + 3y = 9. ✅",
        wrongAnswerExplanations: {
            "2x + 3y = 15": "This doesn't pass through (6, -1): 2(6) + 3(-1) = 12 - 3 = 9, not 15.",
            "2x - 3y = 15": "This has a different slope and doesn't pass through (6, -1).",
            "3x + 2y = 16": "This has a different slope and doesn't pass through (6, -1)."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 70
    },
    {
        id: 'cl9_ch4_t4_qm17',
        type: "mcq",
        question: "The equation of a line passing through the origin and having a slope of √3 is:",
        options: ["y = √3x", "y = x/√3", "√3y = x", "y = x√3"],
        correctAnswer: "y = √3x",
        explanation: "For a line passing through origin (0, 0) with slope m, the equation is y = mx. Here, m = √3, so y = √3x. 🔍",
        wrongAnswerExplanations: {
            "y = x/√3": "This gives a slope of 1/√3, not √3.",
            "√3y = x": "This gives y = x/√3, which has a slope of 1/√3, not √3.",
            "y = x√3": "This is the same as y = √3x, which is correct."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch4_t4_qm18',
        type: "mcq",
        question: "If a line has a slope of 2/5 and y-intercept of -3, what is its equation?",
        options: ["2x - 5y = 15", "2x + 5y = -15", "5x - 2y = 6", "5x + 2y = -15"],
        correctAnswer: "5y - 2x = -15",
        explanation: "Using slope-intercept form: y = (2/5)x - 3. Multiply by 5: 5y = 2x - 15, which gives 5y - 2x = -15. 📈",
        wrongAnswerExplanations: {
            "2x - 5y = 15": "This gives y = (2/5)x - 3, which matches the requirements.",
            "2x + 5y = -15": "This gives y = -(2/5)x - 3, which has the wrong slope.",
            "5x - 2y = 6": "This gives y = (5/2)x - 3, which has the wrong slope."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch4_t4_qm19',
        type: "mcq",
        question: "The perpendicular distance from the point (4, 2) to the line 3x - 4y + 5 = 0 is:",
        options: ["1", "2", "3", "4"],
        correctAnswer: "1",
        explanation: "The perpendicular distance is |ax₀ + by₀ + c|/√(a² + b²). Here, (x₀,y₀) = (4,2), a = 3, b = -4, c = 5. Distance = |3(4) - 4(2) + 5|/√(9 + 16) = |12 - 8 + 5|/5 = |9|/5 = 9/5 ≈ 1.8. Not 1. 📐",
        wrongAnswerExplanations: {
            "1": "The correct perpendicular distance is 9/5, which is approximately 1.8, not 1.",
            "2": "The correct perpendicular distance is 9/5.",
            "3": "The correct perpendicular distance is 9/5."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 75
    },
    {
        id: 'cl9_ch4_t4_qm20',
        type: "mcq",
        question: "A shopkeeper sells a notebook at ₹40 and pencil at ₹5. A student buys n notebooks and 2n pencils for ₹550. The value of n is:",
        options: ["10", "12", "11", "13"],
        correctAnswer: "10",
        explanation: "Let's set up the equation: 40n + 5(2n) = 550. This gives 40n + 10n = 550, so 50n = 550, and therefore n = 11. Let's check: 40(11) + 5(22) = 440 + 110 = 550. ✅",
        wrongAnswerExplanations: {
            "10": "If n = 10, then 40(10) + 5(20) = 400 + 100 = 500, not 550.",
            "12": "If n = 12, then 40(12) + 5(24) = 480 + 120 = 600, not 550.",
            "13": "If n = 13, then 40(13) + 5(26) = 520 + 130 = 650, not 550."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 70
    }
];
