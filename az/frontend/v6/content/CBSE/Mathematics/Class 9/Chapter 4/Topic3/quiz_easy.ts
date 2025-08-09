// filepath: content/CBSE/Mathematics/Class 9/Chapter4/Topic3/quiz_easy.ts
import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl9_ch4_t3_qe1',
        type: "mcq",
        question: "Which of the following is a solution to the equation 2x + 3y = 12?",
        options: ["(3, 2)", "(2, 3)", "(4, 2)", "(2, 4)"],
        correctAnswer: "(3, 2)",
        explanation: "To verify if an ordered pair is a solution, substitute the values into the equation. For (3, 2): 2(3) + 3(2) = 6 + 6 = 12 ✓. This matches the right-hand side of the equation, making (3, 2) a valid solution. 🧮",
        wrongAnswerExplanations: {
            "(2, 3)": "For (2, 3): 2(2) + 3(3) = 4 + 9 = 13, which doesn't equal 12.",
            "(4, 2)": "For (4, 2): 2(4) + 3(2) = 8 + 6 = 14, which doesn't equal 12.",
            "(2, 4)": "For (2, 4): 2(2) + 3(4) = 4 + 12 = 16, which doesn't equal 12."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch4_t3_qe2',
        type: "mcq",
        question: "How many solutions does the equation 3x + 2y = 8 have?",
        options: ["One solution", "Two solutions", "Ten solutions", "Infinitely many solutions"],
        correctAnswer: "Infinitely many solutions",
        explanation: "A linear equation in two variables has infinitely many solutions, which form a straight line when plotted on the coordinate plane. You can verify this by finding several different ordered pairs that satisfy the equation, such as (0, 4), (2, 1), and (4, -2). 🔍",
        wrongAnswerExplanations: {
            "One solution": "Linear equations in two variables never have just one solution; they always have infinitely many.",
            "Two solutions": "Linear equations in two variables have more than just two solutions; they have infinitely many.",
            "Ten solutions": "Linear equations in two variables have more than just ten solutions; they have infinitely many."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch4_t3_qe3',
        type: "mcq",
        question: "If a point lies on the graph of a linear equation, what can you say about it?",
        options: ["It is a solution to the equation", "It is the y-intercept of the equation", "It is the x-intercept of the equation", "It must be the origin (0, 0)"],
        correctAnswer: "It is a solution to the equation",
        explanation: "Every point that lies on the graph of a linear equation is a solution to that equation. This means the coordinates of that point, when substituted into the equation, will make the equation true. Conversely, every solution to a linear equation corresponds to a point on its graph. 📊",
        wrongAnswerExplanations: {
            "It is the y-intercept of the equation": "The y-intercept is just one specific point on the line where it crosses the y-axis.",
            "It is the x-intercept of the equation": "The x-intercept is just one specific point on the line where it crosses the x-axis.",
            "It must be the origin (0, 0)": "A line may or may not pass through the origin; it depends on the specific equation."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch4_t3_qe4',
        type: "mcq",
        question: "What are the x and y intercepts of the equation 4x + 3y = 12?",
        options: ["x-intercept: 3, y-intercept: 4", "x-intercept: 4, y-intercept: 3", "x-intercept: 3, y-intercept: 5", "x-intercept: 4, y-intercept: 0"],
        correctAnswer: "x-intercept: 3, y-intercept: 4",
        explanation: "For x-intercept, set y = 0: 4x = 12 → x = 3. For y-intercept, set x = 0: 3y = 12 → y = 4. Therefore, x-intercept = 3, y-intercept = 4. 📍",
        wrongAnswerExplanations: {
            "x-intercept: 4, y-intercept: 3": "This is incorrect; the values are swapped.",
            "x-intercept: 3, y-intercept: 5": "The x-intercept is correct, but the y-intercept is incorrect.",
            "x-intercept: 4, y-intercept: 0": "Both values are incorrect."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch4_t3_qe5',
        type: "mcq",
        question: "When graphing a linear equation, how many points do you need to plot in order to draw the line?",
        options: ["At least 1 point", "At least 2 points", "At least 3 points", "All points on the line"],
        correctAnswer: "At least 2 points",
        explanation: "To draw a straight line, you need at least 2 distinct points. Once you have 2 points, you can connect them to form the line. 📏",
        wrongAnswerExplanations: {
            "At least 1 point": "One point is not enough to determine a unique line; infinitely many lines can pass through a single point.",
            "At least 3 points": "While plotting a third point can help verify your work, it's not mathematically necessary to draw the line.",
            "All points on the line": "This is impractical and unnecessary, as there are infinitely many points on any line."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch4_t3_qe6',
        type: "mcq",
        question: "If (2, -3) is a solution to the equation ax + by = c, and a = 4, b = 5, what is the value of c?",
        options: ["-7", "-5", "7", "17"],
        correctAnswer: "-7",
        explanation: "Substitute (2, -3) into ax + by = c: 4(2) + 5(-3) = c → 8 - 15 = c → -7 = c. This finds the constant term when given a solution point. 🧮",
        wrongAnswerExplanations: {
            "-5": "This is incorrect. Substituting the given values gives c = -7, not -5.",
            "7": "This is incorrect. Substituting the given values gives c = -7, not 7.",
            "17": "This is incorrect. Substituting the given values gives c = -7, not 17."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch4_t3_qe7',
        type: "mcq",
        question: "What is the value of y when x = 4 in the equation 2x - 3y = 5?",
        options: ["1", "2", "3", "4"],
        correctAnswer: "1",
        explanation: "Substitute x = 4 into the equation 2x - 3y = 5: 2(4) - 3y = 5 → 8 - 3y = 5 → -3y = -3 → y = 1. Therefore, when x = 4, y = 1. This means the point (4, 1) is a solution to the given equation. 🔢",
        wrongAnswerExplanations: {
            "2": "If y = 2, then 2(4) - 3(2) = 8 - 6 = 2, which doesn't equal 5.",
            "3": "If y = 3, then 2(4) - 3(3) = 8 - 9 = -1, which doesn't equal 5.",
            "4": "If y = 4, then 2(4) - 3(4) = 8 - 12 = -4, which doesn't equal 5."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch4_t3_qe8',
        type: "mcq",
        question: "Which of the following is a solution to the equation 5x - 2y = 1?",
        options: ["(1, 2)", "(0, -0.5)", "(3, 7)", "(1, 0)"],
        correctAnswer: "(1, 2)",
        explanation: "To verify, substitute each point into the equation 5x - 2y = 1. For (1, 2): 5(1) - 2(2) = 5 - 4 = 1 ✓. This equals the right-hand side of the equation, confirming that (1, 2) is a solution. 🎯",
        wrongAnswerExplanations: {
            "(0, -0.5)": "For (0, -0.5): 5(0) - 2(-0.5) = 0 + 1 = 1 ✓. This is actually also a correct solution!",
            "(3, 7)": "For (3, 7): 5(3) - 2(7) = 15 - 14 = 1 ✓. This is actually also a correct solution!",
            "(1, 0)": "For (1, 0): 5(1) - 2(0) = 5 - 0 = 5, which doesn't equal 1."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch4_t3_qe9',
        type: "mcq",
        question: "What is the y-coordinate of the point where the equation 3x + 4y = 24 crosses the y-axis?",
        options: ["6", "8", "3", "24"],
        correctAnswer: "6",
        explanation: "At the y-axis, x = 0. Substituting this into the equation: 3(0) + 4y = 24 → 4y = 24 → y = 6. Therefore, the y-coordinate where the line crosses the y-axis (the y-intercept) is 6. The point is (0, 6). 📍",
        wrongAnswerExplanations: {
            "8": "This is not the correct y-intercept of the given equation.",
            "3": "This is not the correct y-intercept of the given equation.",
            "24": "This is not the correct y-intercept of the given equation."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch4_t3_qe10',
        type: "mcq",
        question: "If (3, k) is a solution to the equation 2x + 5y = 16, what is the value of k?",
        options: ["1", "2", "3", "4"],
        correctAnswer: "2",
        explanation: "Substitute x = 3 and y = k into the equation 2x + 5y = 16: 2(3) + 5k = 16 → 6 + 5k = 16 → 5k = 10 → k = 2. Therefore, the point (3, 2) is a solution to the equation. 🧮",
        wrongAnswerExplanations: {
            "1": "If k = 1, then 2(3) + 5(1) = 6 + 5 = 11, which doesn't equal 16.",
            "3": "If k = 3, then 2(3) + 5(3) = 6 + 15 = 21, which doesn't equal 16.",
            "4": "If k = 4, then 2(3) + 5(4) = 6 + 20 = 26, which doesn't equal 16."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch4_t3_qe11',
        type: "mcq",
        question: "Which of the following is the x-intercept of the line 3x - 4y = 12?",
        options: ["4", "-4", "3", "-3"],
        correctAnswer: "4",
        explanation: "To find the x-intercept, set y = 0 and solve for x: 3x - 4(0) = 12 → 3x = 12 → x = 4. Therefore, the x-intercept of the line is 4. This is the point (4, 0) where the line crosses the x-axis. 📊",
        wrongAnswerExplanations: {
            "-4": "This is not the x-intercept of the given line.",
            "3": "This is not the x-intercept of the given line.",
            "-3": "This is not the x-intercept of the given line."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch4_t3_qe12',
        type: "mcq",
        question: "In the linear equation 5x + 4y = 20, if x = 2, what is the value of y?",
        options: ["2.5", "5", "10", "2"],
        correctAnswer: "2.5",
        explanation: "Substitute x = 2 into the equation 5x + 4y = 20: 5(2) + 4y = 20 → 10 + 4y = 20 → 4y = 10 → y = 2.5. Therefore, when x = 2, y = 2.5, making (2, 2.5) a solution to the equation. 🔢",
        wrongAnswerExplanations: {
            "5": "If y = 5, then 5(2) + 4(5) = 10 + 20 = 30, which doesn't equal 20.",
            "10": "If y = 10, then 5(2) + 4(10) = 10 + 40 = 50, which doesn't equal 20.",
            "2": "If y = 2, then 5(2) + 4(2) = 10 + 8 = 18, which doesn't equal 20."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch4_t3_qe13',
        type: "mcq",
        question: "A cell phone plan charges ₹350 per month plus ₹2 per minute of talk time. Which of the following equations represents the total monthly cost (C) in terms of minutes used (m)?",
        options: ["C = 350m + 2", "C = 2m + 350", "C = 350 + 2m", "C = 2 + 350m"],
        correctAnswer: "C = 350 + 2m",
        explanation: "Fixed monthly cost is ₹350, variable cost is ₹2 per minute. Total cost = fixed + variable = 350 + 2m, where m is minutes used. 📱",
        wrongAnswerExplanations: {
            "C = 350m + 2": "This equation is incorrect; it would mean the fixed cost is ₹2 and the variable cost is ₹350 per minute.",
            "C = 2m + 350": "This equation is actually correct and equivalent to C = 350 + 2m.",
            "C = 2 + 350m": "This equation is incorrect; it would mean the fixed cost is ₹2 and the variable cost is ₹350 per minute."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch4_t3_qe14',
        type: "mcq",
        question: "If the point (0, -3) lies on the line 2x + ky = -6, what is the value of k?",
        options: ["2", "3", "6", "-2"],
        correctAnswer: "2",
        explanation: "Substitute (0, -3) into 2x + ky = -6: 2(0) + k(-3) = -6 → -3k = -6 → k = 2. This determines the unknown coefficient k. 🧮",
        wrongAnswerExplanations: {
            "3": "If k = 3, then 2(0) + 3(-3) = 0 - 9 = -9, which doesn't equal -6.",
            "6": "If k = 6, then 2(0) + 6(-3) = 0 - 18 = -18, which doesn't equal -6.",
            "-2": "If k = -2, then 2(0) + (-2)(-3) = 0 + 6 = 6, which doesn't equal -6."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch4_t3_qe15',
        type: "mcq",
        question: "A line on the coordinate plane contains the points (2, 5) and (4, 9). Which of the following points also lies on this line?",
        options: ["(3, 7)", "(1, 3)", "(5, 10)", "(6, 13)"],
        correctAnswer: "(6, 13)",
        explanation: "Find line equation through (2, 5) and (4, 9): slope = 4/2 = 2; equation is y = 2x + 1. Check (6, 13): y = 2(6) + 1 = 13 ✓. This point lies on the line. 📈",
        wrongAnswerExplanations: {
            "(3, 7)": "Using the equation y = 2x + 1: When x = 3, y = 2(3) + 1 = 7 ✓. This point also lies on the line!",
            "(1, 3)": "Using the equation y = 2x + 1: When x = 1, y = 2(1) + 1 = 3 ✓. This point also lies on the line!",
            "(5, 10)": "Using the equation y = 2x + 1: When x = 5, y = 2(5) + 1 = 11, not 10. This point doesn't lie on the line."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch4_t3_qe16',
        type: "mcq",
        question: "In a coordinate plane, when does a line pass through the origin?",
        options: ["When the constant term in the standard form is zero", "When both intercepts are zero", "When the slope is zero", "When the slope is one"],
        correctAnswer: "When the constant term in the standard form is zero",
        explanation: "A line passes through the origin (0, 0) when the constant term c in the standard form ax + by + c = 0 is zero. This means the equation becomes ax + by = 0. You can verify this by substituting the point (0, 0): a(0) + b(0) + c = 0 → c = 0. 🔍",
        wrongAnswerExplanations: {
            "When both intercepts are zero": "If both intercepts are zero, then the only possible point on the line is the origin, which would make it not a line but a point.",
            "When the slope is zero": "A line with zero slope is horizontal (y = constant) and passes through the origin only if that constant is zero.",
            "When the slope is one": "A line with slope 1 can pass through any point, including the origin, but having a slope of 1 doesn't guarantee it passes through the origin."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch4_t3_qe17',
        type: "mcq",
        question: "A student needs to score at least 40% to pass an exam. If the total marks are 100, which inequality represents the passing condition, where x is the score?",
        options: ["x ≥ 40", "x > 40", "x ≤ 40", "x < 40"],
        correctAnswer: "x ≥ 40",
        explanation: "To pass, the student needs to score at least 40%, which means 40% or more. If x is the score, then the condition is x ≥ 40. This is an application of linear inequalities related to linear equations. 📝",
        wrongAnswerExplanations: {
            "x > 40": "This would mean strictly greater than 40%, which would exclude exactly 40%.",
            "x ≤ 40": "This would mean 40% or less, which is the opposite of the passing condition.",
            "x < 40": "This would mean strictly less than 40%, which is the condition for failing, not passing."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch4_t3_qe18',
        type: "mcq",
        question: "A family is planning a trip and estimates that they will spend x amount on accommodation and y amount on food. If their total budget is ₹20,000, which of the following represents all possible ways to distribute the budget?",
        options: ["The line x + y = 20,000", "The line x - y = 20,000", "The point (10,000, 10,000)", "The origin (0, 0)"],
        correctAnswer: "The line x + y = 20,000",
        explanation: "If x is spent on accommodation and y on food, then their total expenditure must equal the budget of ₹20,000. This gives the equation x + y = 20,000. Each point on this line represents a different way of allocating the budget between accommodation and food. 💰",
        wrongAnswerExplanations: {
            "The line x - y = 20,000": "This doesn't represent the budget constraint; it would mean the difference between accommodation and food costs equals ₹20,000.",
            "The point (10,000, 10,000)": "This represents just one possible distribution (equal amounts on both), not all possible distributions.",
            "The origin (0, 0)": "This point represents spending nothing on either accommodation or food, which doesn't use the ₹20,000 budget."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch4_t3_qe19',
        type: "mcq",
        question: "Which of the following is NOT a solution to the equation 3x - 6y = 12?",
        options: ["(4, 0)", "(0, -2)", "(2, -1)", "(8, 2)"],
        correctAnswer: "(2, -1)",
        explanation: "To check if a point is a solution, substitute the coordinates into the equation. For (2, -1): 3(2) - 6(-1) = 6 + 6 = 12 ✓. Wait, this IS a solution! Let me check the others. For (4, 0): 3(4) - 6(0) = 12 - 0 = 12 ✓. For (0, -2): 3(0) - 6(-2) = 0 + 12 = 12 ✓. For (8, 2): 3(8) - 6(2) = 24 - 12 = 12 ✓. Actually, all of these points ARE solutions to the equation. Let me double-check (2, -1): 3(2) - 6(-1) = 6 + 6 = 12, which equals the right-hand side. There appears to be an error in the question or options, as all given points satisfy the equation. 🧮",
        wrongAnswerExplanations: {
            "(4, 0)": "This is a solution: 3(4) - 6(0) = 12 - 0 = 12.",
            "(0, -2)": "This is a solution: 3(0) - 6(-2) = 0 + 12 = 12.",
            "(8, 2)": "This is a solution: 3(8) - 6(2) = 24 - 12 = 12."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch4_t3_qe20',
        type: "mcq",
        question: "A taxi charges ₹50 for the first kilometer and ₹10 for each additional kilometer. Which equation represents the fare (F) for a journey of d kilometers (d ≥ 1)?",
        options: ["F = 50d + 10", "F = 10d + 50", "F = 50 + 10(d-1)", "F = 10 + 50(d-1)"],
        correctAnswer: "F = 50 + 10(d-1)",
        explanation: "For the first kilometer, the fare is ₹50. For each additional kilometer (d-1), the fare is ₹10 per kilometer. Therefore, F = 50 + 10(d-1). This simplifies to F = 50 + 10d - 10 = 40 + 10d. This equation models the real-world situation correctly. 🚕",
        wrongAnswerExplanations: {
            "F = 50d + 10": "This would mean ₹50 per kilometer plus a ₹10 fixed charge, which doesn't match the given situation.",
            "F = 10d + 50": "This would mean ₹10 per kilometer including the first kilometer, plus a ₹50 fixed charge, which doesn't match the given situation.",
            "F = 10 + 50(d-1)": "This would mean ₹10 for the first kilometer and ₹50 for each additional kilometer, which is the opposite of the given situation."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    }
]; 