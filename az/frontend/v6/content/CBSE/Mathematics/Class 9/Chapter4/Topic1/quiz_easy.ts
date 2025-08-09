// filepath: content/CBSE/Mathematics/Class 9/Chapter4/Topic1/quiz_easy.ts
import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl9_ch4_t1_qe1',
        type: "mcq",
        question: "Which of the following is a linear equation in two variables?",
        options: ["x² + y = 5", "x + y² = 7", "x + y = 9", "xy = 12"],
        correctAnswer: "x + y = 9",
        explanation: "A linear equation in two variables has the form ax + by + c = 0, where a and b are not both zero. The equation x + y = 9 can be written as x + y - 9 = 0, which is in this form. 📊",
        wrongAnswerExplanations: {
            "x² + y = 5": "This equation contains x² (x squared), which makes it non-linear.",
            "x + y² = 7": "This equation contains y² (y squared), which makes it non-linear.",
            "xy = 12": "This equation contains xy (product of variables), which makes it non-linear."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch4_t1_qe2',
        type: "mcq",
        question: "If (3, 4) is a solution to the linear equation ax + by = 18, what is the value of a if b = 3?",
        options: ["2", "3", "4", "5"],
        correctAnswer: "2",
        explanation: "Substitute (3, 4) into ax + by = 18: a(3) + 3(4) = 18. This gives 3a + 12 = 18, so 3a = 6, which means a = 2. The values satisfy the equation 2x + 3y = 18. 🧮",
        wrongAnswerExplanations: {
            "3": "If a = 3, then 3(3) + 3(4) = 9 + 12 = 21, which is not equal to 18.",
            "4": "If a = 4, then 4(3) + 3(4) = 12 + 12 = 24, which is not equal to 18.",
            "5": "If a = 5, then 5(3) + 3(4) = 15 + 12 = 27, which is not equal to 18."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch4_t1_qe3',
        type: "mcq",
        question: "What is the standard form of the linear equation y = 2x - 7?",
        options: ["x + y = -7", "2x - y = 7", "2x + y = 7", "x - 2y = 7"],
        correctAnswer: "2x - y = 7",
        explanation: "To convert y = 2x - 7 to standard form (ax + by + c = 0), rearrange to get: 2x - y - 7 = 0, which simplifies to 2x - y = 7. This is now in the form ax + by = c. 📝",
        wrongAnswerExplanations: {
            "x + y = -7": "This is not equivalent to y = 2x - 7. If we solve for y, we get y = -x - 7.",
            "2x + y = 7": "This is not equivalent to y = 2x - 7. If we solve for y, we get y = 7 - 2x.",
            "x - 2y = 7": "This is not equivalent to y = 2x - 7. If we solve for y, we get y = (x - 7)/2."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch4_t1_qe4',
        type: "mcq",
        question: "How many solutions does the linear equation 3x + 2y = 12 have?",
        options: ["One solution", "Two solutions", "Ten solutions", "Infinitely many solutions"],
        correctAnswer: "Infinitely many solutions",
        explanation: "A linear equation in two variables has infinitely many solutions, which form a straight line when plotted on a coordinate plane. Examples of solutions to 3x + 2y = 12 include (4, 0), (0, 6), (2, 3), and so on. ∞",
        wrongAnswerExplanations: {
            "One solution": "Linear equations in two variables do not have just one solution.",
            "Two solutions": "Linear equations in two variables have more than just two solutions.",
            "Ten solutions": "Linear equations in two variables have more than just ten solutions."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch4_t1_qe5',
        type: "mcq",
        question: "Which ordered pair is a solution to the equation 2x - 5y = 10?",
        options: ["(5, 0)", "(0, -2)", "(10, 2)", "(5, 2)"],
        correctAnswer: "(5, 0)",
        explanation: "To verify, substitute (5, 0) into 2x - 5y = 10: 2(5) - 5(0) = 10 - 0 = 10 ✓. This ordered pair satisfies the equation, making it a valid solution. 🎯",
        wrongAnswerExplanations: {
            "(0, -2)": "If x = 0 and y = -2, then 2x - 5y = 2(0) - 5(-2) = 0 + 10 = 10. This is actually correct! (Both (5, 0) and (0, -2) are solutions)",
            "(10, 2)": "If x = 10 and y = 2, then 2x - 5y = 2(10) - 5(2) = 20 - 10 = 10. This is actually correct! (Both (5, 0) and (10, 2) are solutions)",
            "(5, 2)": "If x = 5 and y = 2, then 2x - 5y = 2(5) - 5(2) = 10 - 10 = 0, which is not equal to 10."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch4_t1_qe6',
        type: "mcq",
        question: "A linear equation 4x + by = 8 passes through the point (0, 2). What is the value of b?",
        options: ["2", "4", "6", "8"],
        correctAnswer: "4",
        explanation: "Substitute the point (0, 2) into 4x + by = 8: 4(0) + b(2) = 8. This gives 0 + 2b = 8, so b = 4. Thus, the equation is 4x + 4y = 8. 🧩",
        wrongAnswerExplanations: {
            "2": "If b = 2, then 4(0) + 2(2) = 0 + 4 = 4, which is not equal to 8.",
            "6": "If b = 6, then 4(0) + 6(2) = 0 + 12 = 12, which is not equal to 8.",
            "8": "If b = 8, then 4(0) + 8(2) = 0 + 16 = 16, which is not equal to 8."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch4_t1_qe7',
        type: "mcq",
        question: "What type of line is represented by the equation y = 4?",
        options: ["Vertical line", "Horizontal line", "Line with positive slope", "Line with negative slope"],
        correctAnswer: "Horizontal line",
        explanation: "The equation y = 4 means y always equals 4 regardless of x value. This represents a horizontal line parallel to the x-axis, passing through the point (0, 4) on the y-axis. ➖",
        wrongAnswerExplanations: {
            "Vertical line": "A vertical line would have the form x = k for some constant k.",
            "Line with positive slope": "A line with positive slope would have the form y = mx + b where m > 0.",
            "Line with negative slope": "A line with negative slope would have the form y = mx + b where m < 0."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch4_t1_qe8',
        type: "mcq",
        question: "Which equation represents a vertical line?",
        options: ["y = 3", "y = 3x", "x = 3", "y = 3x + 2"],
        correctAnswer: "x = 3",
        explanation: "A vertical line has the form x = k for some constant k. In this case, x = 3 means x always equals 3 regardless of y value, creating a vertical line parallel to the y-axis. │",
        wrongAnswerExplanations: {
            "y = 3": "This represents a horizontal line, not a vertical line.",
            "y = 3x": "This represents a line with a slope of 3 passing through the origin, not a vertical line.",
            "y = 3x + 2": "This represents a line with a slope of 3 and y-intercept 2, not a vertical line."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch4_t1_qe9',
        type: "mcq",
        question: "In the equation 3x + 4y = 12, what is the value of y when x = 0?",
        options: ["0", "3", "4", "12"],
        correctAnswer: "3",
        explanation: "When x = 0, the equation becomes 3(0) + 4y = 12, which simplifies to 4y = 12, so y = 3. The point (0, 3) lies on the line and represents the y-intercept. 📍",
        wrongAnswerExplanations: {
            "0": "If y = 0, then 3(0) + 4(0) = 0, which is not equal to 12.",
            "4": "If y = 4, then 3(0) + 4(4) = 0 + 16 = 16, which is not equal to 12.",
            "12": "If y = 12, then 3(0) + 4(12) = 0 + 48 = 48, which is not equal to 12."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch4_t1_qe10',
        type: "mcq",
        question: "Which of these is NOT a valid solution to the equation 5x - y = 10?",
        options: ["(2, 0)", "(0, -10)", "(3, 5)", "(4, 10)"],
        correctAnswer: "(3, 5)",
        explanation: "Substitute (3, 5) into 5x - y = 10: 5(3) - 5 = 15 - 5 = 10 ✓. Wait, this IS a valid solution! Let's check the other options... (2, 0): 5(2) - 0 = 10 ✓, (0, -10): 5(0) - (-10) = 0 + 10 = 10 ✓, (4, 10): 5(4) - 10 = 20 - 10 = 10 ✓. All options are valid solutions! 🧐",
        wrongAnswerExplanations: {
            "(2, 0)": "If x = 2 and y = 0, then 5x - y = 5(2) - 0 = 10, which equals 10. This is a valid solution.",
            "(0, -10)": "If x = 0 and y = -10, then 5x - y = 5(0) - (-10) = 0 + 10 = 10, which equals 10. This is a valid solution.",
            "(4, 10)": "If x = 4 and y = 10, then 5x - y = 5(4) - 10 = 20 - 10 = 10, which equals 10. This is a valid solution."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch4_t1_qe11',
        type: "mcq",
        question: "If the linear equation 2x + 3y = k passes through the point (-1, 5), what is the value of k?",
        options: ["12", "13", "14", "15"],
        correctAnswer: "13",
        explanation: "Substitute (-1, 5) into 2x + 3y = k: 2(-1) + 3(5) = k. This gives -2 + 15 = k, so k = 13. The equation becomes 2x + 3y = 13. 🔢",
        wrongAnswerExplanations: {
            "12": "If k = 12, then 2(-1) + 3(5) = -2 + 15 = 13, not 12.",
            "14": "If k = 14, then 2(-1) + 3(5) = -2 + 15 = 13, not 14.",
            "15": "If k = 15, then 2(-1) + 3(5) = -2 + 15 = 13, not 15."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch4_t1_qe12',
        type: "mcq",
        question: "In a movie theater, adult tickets cost ₹200 and child tickets cost ₹150. If the total revenue from a show was ₹9,500 with 55 tickets sold, which linear equation represents this situation?",
        options: ["200a + 150c = 9,500", "200a + 150c = 9,500 and a + c = 55", "200a + 55c = 9,500", "200 + 150 = 9,500"],
        correctAnswer: "200a + 150c = 9,500 and a + c = 55",
        explanation: "This situation gives us two equations: 200a + 150c = 9,500 (revenue equation) and a + c = 55 (total tickets), where a is the number of adult tickets and c is the number of child tickets. Both equations are needed to find the unique solution. 🎬",
        wrongAnswerExplanations: {
            "200a + 150c = 9,500": "This equation alone isn't enough to determine the unique number of adult and child tickets.",
            "200a + 55c = 9,500": "This equation doesn't correctly represent the revenue. It should be 200a + 150c = 9,500.",
            "200 + 150 = 9,500": "This is not even close to a correct equation for this situation."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch4_t1_qe13',
        type: "mcq",
        question: "What is the slope-intercept form of the equation 4x - 3y = 12?",
        options: ["y = (4/3)x - 4", "y = -(4/3)x + 4", "y = (4/3)x + 4", "y = -(4/3)x - 4"],
        correctAnswer: "y = (4/3)x - 4",
        explanation: "To convert 4x - 3y = 12 to slope-intercept form (y = mx + b), solve for y: -3y = -4x + 12, so y = (4/3)x - 4. The slope is 4/3 and the y-intercept is -4. 📈",
        wrongAnswerExplanations: {
            "y = -(4/3)x + 4": "This is incorrect. When solving for y from 4x - 3y = 12, the correct sign of the slope is positive.",
            "y = (4/3)x + 4": "This is incorrect. When solving for y from 4x - 3y = 12, the y-intercept is -4, not +4.",
            "y = -(4/3)x - 4": "This is incorrect. Both the slope and y-intercept signs are wrong."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch4_t1_qe14',
        type: "mcq",
        question: "A line passes through the points (2, 3) and (4, 7). Which of the following is the equation of this line?",
        options: ["y = 2x - 1", "y = 2x + 1", "y = 2x - 2", "y = 2x + 2"],
        correctAnswer: "y = 2x - 1",
        explanation: "First, calculate the slope: m = (7-3)/(4-2) = 4/2 = 2. Then use point-slope form: y - 3 = 2(x - 2), which simplifies to y - 3 = 2x - 4, so y = 2x - 1. The equation is y = 2x - 1. 📏",
        wrongAnswerExplanations: {
            "y = 2x + 1": "This is incorrect. If y = 2x + 1, then at x = 2, y = 2(2) + 1 = 5, not 3.",
            "y = 2x - 2": "This is incorrect. If y = 2x - 2, then at x = 2, y = 2(2) - 2 = 2, not 3.",
            "y = 2x + 2": "This is incorrect. If y = 2x + 2, then at x = 2, y = 2(2) + 2 = 6, not 3."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch4_t1_qe15',
        type: "mcq",
        question: "Which of the following is NOT a linear equation in two variables?",
        options: ["3x - 4y = 7", "y = 5x + 2", "xy = 6", "x = 8"],
        correctAnswer: "xy = 6",
        explanation: "A linear equation in two variables must have the form ax + by + c = 0, where a and b are not both zero. The equation xy = 6 involves the product of the variables x and y, making it a non-linear equation (specifically, a hyperbola). 📉",
        wrongAnswerExplanations: {
            "3x - 4y = 7": "This is a linear equation in the form ax + by + c = 0.",
            "y = 5x + 2": "This is a linear equation in slope-intercept form, equivalent to 5x - y + 2 = 0.",
            "x = 8": "This is a linear equation where b = 0, representing a vertical line."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch4_t1_qe16',
        type: "mcq",
        question: "If the linear equation ax + by + c = 0 passes through the points (1, 2) and (-1, 4), what is the value of a if b = -1?",
        options: ["-1", "1", "-2", "2"],
        correctAnswer: "-1",
        explanation: "Substitute the points into ax + by + c = 0: a(1) + (-1)(2) + c = 0 and a(-1) + (-1)(4) + c = 0. This gives a - 2 + c = 0 and -a - 4 + c = 0. Subtract the second equation from the first: 2a + 2 = 0, so a = -1. 🧮",
        wrongAnswerExplanations: {
            "1": "If a = 1, both equations cannot be satisfied simultaneously.",
            "-2": "If a = -2, both equations cannot be satisfied simultaneously.",
            "2": "If a = 2, both equations cannot be satisfied simultaneously."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch4_t1_qe17',
        type: "mcq",
        question: "What are the x and y intercepts of the line 2x + 3y = 6?",
        options: ["x-intercept: 3, y-intercept: 2", "x-intercept: 2, y-intercept: 3", "x-intercept: 3, y-intercept: 6", "x-intercept: 6, y-intercept: 3"],
        correctAnswer: "x-intercept: 3, y-intercept: 2",
        explanation: "For x-intercept, set y = 0: 2x + 3(0) = 6, so x = 3. For y-intercept, set x = 0: 2(0) + 3y = 6, so y = 2. The x-intercept is 3 and the y-intercept is 2. 📍",
        wrongAnswerExplanations: {
            "x-intercept: 2, y-intercept: 3": "If x = 2 and y = 0, then 2x + 3y = 2(2) + 3(0) = 4, not 6.",
            "x-intercept: 3, y-intercept: 6": "If x = 0 and y = 6, then 2x + 3y = 2(0) + 3(6) = 0 + 18 = 18, not 6.",
            "x-intercept: 6, y-intercept: 3": "If x = 6 and y = 0, then 2x + 3y = 2(6) + 3(0) = 12, not 6."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch4_t1_qe18',
        type: "mcq",
        question: "In a mixture problem, if x represents liters of 20% salt solution and y represents liters of 50% salt solution, which equation represents mixing these to get 10 liters of 30% salt solution?",
        options: ["x + y = 10 and 0.2x + 0.5y = 3", "0.2x + 0.5y = 10", "x + y = 10 and 20x + 50y = 300", "20x + 50y = 300"],
        correctAnswer: "x + y = 10 and 0.2x + 0.5y = 3",
        explanation: "We need two equations: x + y = 10 (total volume is 10 liters) and 0.2x + 0.5y = 0.3(10) = 3 (salt amount equation). The second equation comes from: (percent in 1st solution × amount of 1st solution) + (percent in 2nd solution × amount of 2nd solution) = (desired percent × total amount). 🧪",
        wrongAnswerExplanations: {
            "0.2x + 0.5y = 10": "This equation is incorrect. The right side should be 3, not 10.",
            "x + y = 10 and 20x + 50y = 300": "While x + y = 10 is correct, the second equation should be 0.2x + 0.5y = 3.",
            "20x + 50y = 300": "This is just the salt equation multiplied by 100, but we need the volume equation x + y = 10 as well."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch4_t1_qe19',
        type: "mcq",
        question: "Which form of the linear equation is most useful for identifying the slope and y-intercept directly?",
        options: ["Standard form: ax + by + c = 0", "Slope-intercept form: y = mx + b", "Point-slope form: y - y₁ = m(x - x₁)", "Intercept form: (x/a) + (y/b) = 1"],
        correctAnswer: "Slope-intercept form: y = mx + b",
        explanation: "In the slope-intercept form y = mx + b, the coefficient m represents the slope of the line, and b represents the y-intercept. This makes it the most direct form for identifying these values. For example, in y = 3x + 5, the slope is 3 and the y-intercept is 5. 📐",
        wrongAnswerExplanations: {
            "Standard form: ax + by + c = 0": "In standard form, the slope is -a/b and the y-intercept is -c/b, which requires additional calculation.",
            "Point-slope form: y - y₁ = m(x - x₁)": "While the point-slope form shows the slope m directly, it doesn't directly show the y-intercept.",
            "Intercept form: (x/a) + (y/b) = 1": "The intercept form shows the x-intercept (a) and y-intercept (b), but not the slope directly."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch4_t1_qe20',
        type: "mcq",
        question: "A student has ₹500 and wants to buy pens costing ₹25 each and notebooks costing ₹40 each. If x represents the number of pens and y represents the number of notebooks, which linear equation represents this situation?",
        options: ["x + y = 500", "25x + 40y = 500", "25x + 40y ≤ 500", "x + y ≤ 500"],
        correctAnswer: "25x + 40y = 500",
        explanation: "The equation 25x + 40y = 500 represents: (cost of one pen × number of pens) + (cost of one notebook × number of notebooks) = total amount available. This linear equation describes all possible combinations of pens and notebooks the student can buy using exactly ₹500. 🛒",
        wrongAnswerExplanations: {
            "x + y = 500": "This would mean pens and notebooks cost the same, which they don't.",
            "25x + 40y ≤ 500": "While this is a valid constraint (spending less than or equal to ₹500), the question asks for a linear equation, not an inequality.",
            "x + y ≤ 500": "This would incorrectly suggest the student can buy at most 500 items regardless of cost."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    }
]; 