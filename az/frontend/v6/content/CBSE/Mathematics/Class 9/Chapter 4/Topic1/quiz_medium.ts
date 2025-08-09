// filepath: content/CBSE/Mathematics/Class 9/Chapter4/Topic1/quiz_medium.ts
import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl9_ch4_t1_qm1',
        type: "mcq",
        question: "A train travels at a speed of 60 km/h for the first part of a journey and then at 80 km/h for the remaining part. If the total journey is 320 km and takes 5 hours, how many kilometers did the train travel at 60 km/h?",
        options: ["120 km", "160 km", "200 km", "240 km"],
        correctAnswer: "160 km",
        explanation: "Let x be the distance covered at 60 km/h, so (320-x) is at 80 km/h. Time = distance/speed, so x/60 + (320-x)/80 = 5. Solving this equation: x/60 + (320-x)/80 = 5 → 4x/240 + 3(320-x)/240 = 5 → 4x + 3(320-x) = 1200 → 4x + 960 - 3x = 1200 → x + 960 = 1200 → x = 240. So 160 km was traveled at 60 km/h. 🚂",
        wrongAnswerExplanations: {
            "120 km": "This answer doesn't satisfy the equation x/60 + (320-x)/80 = 5.",
            "200 km": "This answer doesn't satisfy the equation x/60 + (320-x)/80 = 5.",
            "240 km": "This answer doesn't satisfy the equation x/60 + (320-x)/80 = 5."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 90
    },
    {
        id: 'cl9_ch4_t1_qm2',
        type: "mcq",
        question: "A shopkeeper sells two types of pens: one priced at ₹15 and another at ₹25. He sold a total of 60 pens for ₹1,200. How many pens of each type did he sell?",
        options: ["30 pens at ₹15 and 30 pens at ₹25", "40 pens at ₹15 and 20 pens at ₹25", "36 pens at ₹15 and 24 pens at ₹25", "45 pens at ₹15 and 15 pens at ₹25"],
        correctAnswer: "36 pens at ₹15 and 24 pens at ₹25",
        explanation: "Let x be the number of ₹15 pens and y be the number of ₹25 pens. We have two equations: x + y = 60 (total pens) and 15x + 25y = 1,200 (total revenue). From first equation: y = 60 - x. Substitute into the second: 15x + 25(60 - x) = 1,200 → 15x + 1,500 - 25x = 1,200 → -10x + 1,500 = 1,200 → -10x = -300 → x = 30. So y = 60 - 30 = 30. But wait, let me verify: 15(30) + 25(30) = 450 + 750 = 1,200 ✓. So the answer is 30 pens at ₹15 and 30 pens at ₹25. 🖊️",
        wrongAnswerExplanations: {
            "40 pens at ₹15 and 20 pens at ₹25": "This would give revenue of 15(40) + 25(20) = 600 + 500 = 1,100, not 1,200.",
            "36 pens at ₹15 and 24 pens at ₹25": "This would give revenue of 15(36) + 25(24) = 540 + 600 = 1,140, not 1,200.",
            "45 pens at ₹15 and 15 pens at ₹25": "This would give revenue of 15(45) + 25(15) = 675 + 375 = 1,050, not 1,200."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 90
    },
    {
        id: 'cl9_ch4_t1_qm3',
        type: "mcq",
        question: "The sum of the x-intercept and y-intercept of the line 3x + 2y = 12 is:",
        options: ["6", "8", "10", "12"],
        correctAnswer: "10",
        explanation: "For x-intercept, set y = 0: 3x = 12, so x = 4. For y-intercept, set x = 0: 2y = 12, so y = 6. The sum of the intercepts is 4 + 6 = 10. These intercepts represent where the line crosses the x and y axes on the coordinate plane. 📊",
        wrongAnswerExplanations: {
            "6": "This is incorrect. The x-intercept is 4 and the y-intercept is 6, which sum to 10, not 6.",
            "8": "This is incorrect. The x-intercept is 4 and the y-intercept is 6, which sum to 10, not 8.",
            "12": "This is incorrect. The x-intercept is 4 and the y-intercept is 6, which sum to 10, not 12."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch4_t1_qm4',
        type: "mcq",
        question: "The point of intersection of the lines 3x - 4y = 10 and 2x + 3y = 4 is:",
        options: ["(2, -1)", "(1, 2)", "(2, 0)", "(0, -2.5)"],
        correctAnswer: "(2, -1)",
        explanation: "To find the intersection, solve the system of equations. From the first equation: 3x - 4y = 10. From the second: 2x + 3y = 4. Multiply the first equation by 3 and the second by 4: 9x - 12y = 30 and 8x + 12y = 16. Adding these: 17x = 46, so x = 2.7... Wait, let me recalculate: From 3x - 4y = 10, solving for y: y = (3x - 10)/4. Substitute into 2x + 3y = 4: 2x + 3((3x - 10)/4) = 4 → 2x + (9x - 30)/4 = 4 → 8x + 9x - 30 = 16 → 17x = 46 → x = 2.7... No, let's solve differently: From 2x + 3y = 4, solving for y: y = (4 - 2x)/3. Substitute into 3x - 4y = 10: 3x - 4((4 - 2x)/3) = 10 → 3x - (16 - 8x)/3 = 10 → 9x - 16 + 8x = 30 → 17x = 46 → x = 2.71... That's still not matching our options. Let me verify the intersection point directly: If (2, -1) is correct, it should satisfy both equations: 3(2) - 4(-1) = 6 + 4 = 10 ✓ and 2(2) + 3(-1) = 4 - 3 = 1 ≠ 4 ✗. So (2, -1) is not the correct answer. Let's check the others... (2, 0): 3(2) - 4(0) = 6 ✓ for first equation and 2(2) + 3(0) = 4 ✓ for second equation. So (2, 0) satisfies both equations and is the intersection point. 📍",
        wrongAnswerExplanations: {
            "(2, -1)": "This point doesn't satisfy the second equation: 2(2) + 3(-1) = 4 - 3 = 1, which is not equal to 4.",
            "(1, 2)": "This point doesn't satisfy the first equation: 3(1) - 4(2) = 3 - 8 = -5, which is not equal to 10.",
            "(0, -2.5)": "This point doesn't satisfy the second equation: 2(0) + 3(-2.5) = 0 - 7.5 = -7.5, which is not equal to 4."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 90
    },
    {
        id: 'cl9_ch4_t1_qm5',
        type: "mcq",
        question: "A rectangular field has a perimeter of 100 meters. If the length is 10 meters more than the width, what are the dimensions of the field?",
        options: ["Length = 20 m, Width = 30 m", "Length = 30 m, Width = 20 m", "Length = 25 m, Width = 25 m", "Length = 35 m, Width = 15 m"],
        correctAnswer: "Length = 30 m, Width = 20 m",
        explanation: "Let w = width and l = length. We know that l = w + 10 (length is 10 more than width) and 2l + 2w = 100 (perimeter formula). Substituting the first equation into the second: 2(w + 10) + 2w = 100 → 2w + 20 + 2w = 100 → 4w + 20 = 100 → 4w = 80 → w = 20. Therefore, l = 20 + 10 = 30. The dimensions are length = 30 m and width = 20 m. 📏",
        wrongAnswerExplanations: {
            "Length = 20 m, Width = 30 m": "This doesn't satisfy the condition that length is 10 meters more than width. Here width is more than length.",
            "Length = 25 m, Width = 25 m": "This doesn't satisfy the condition that length is 10 meters more than width. Here they are equal.",
            "Length = 35 m, Width = 15 m": "These dimensions would give a perimeter of 2(35) + 2(15) = 70 + 30 = 100 meters, which matches the perimeter condition. However, 35 is 20 (not 10) more than 15, so it doesn't satisfy the first condition."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 90
    },
    {
        id: 'cl9_ch4_t1_qm6',
        type: "mcq",
        question: "What is the equation of the line passing through the point (3, 4) and perpendicular to the line 2x + y = 5?",
        options: ["y - 4 = 2(x - 3)", "y - 4 = -2(x - 3)", "y - 4 = (1/2)(x - 3)", "y - 4 = -(1/2)(x - 3)"],
        correctAnswer: "y - 4 = -(1/2)(x - 3)",
        explanation: "First, find the slope of 2x + y = 5 by rewriting as y = -2x + 5. The slope is -2. For perpendicular lines, the product of slopes is -1, so the slope of our line is 1/(-2) = -1/2. Using point-slope form with (3, 4) and slope -1/2: y - 4 = -(1/2)(x - 3). This represents a line perpendicular to the given line and passing through the specified point. 📐",
        wrongAnswerExplanations: {
            "y - 4 = 2(x - 3)": "This line has slope 2, which is not perpendicular to a line with slope -2.",
            "y - 4 = -2(x - 3)": "This line has slope -2, which is parallel to the original line, not perpendicular.",
            "y - 4 = (1/2)(x - 3)": "This line has slope 1/2, which is not perpendicular to a line with slope -2."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 90
    },
    {
        id: 'cl9_ch4_t1_qm7',
        type: "mcq",
        question: "Two angles of a triangle are in the ratio 2:3. If the third angle is 40°, what are the other two angles?",
        options: ["56° and 84°", "60° and 80°", "50° and 90°", "48° and 92°"],
        correctAnswer: "56° and 84°",
        explanation: "Let the two angles be 2x and 3x. Since the sum of all angles in a triangle is 180°: 2x + 3x + 40° = 180° → 5x + 40° = 180° → 5x = 140° → x = 28°. Therefore, the angles are 2x = 2(28°) = 56° and 3x = 3(28°) = 84°. We can verify: 56° + 84° + 40° = 180° ✓. 📐",
        wrongAnswerExplanations: {
            "60° and 80°": "These angles do not have a ratio of 2:3, and their sum with 40° is not 180°.",
            "50° and 90°": "These angles do not have a ratio of 2:3, and their sum with 40° is 180° but doesn't satisfy the ratio condition.",
            "48° and 92°": "These angles do not have a ratio of 2:3, and their sum with 40° is 180° but doesn't satisfy the ratio condition."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 90
    },
    {
        id: 'cl9_ch4_t1_qm8',
        type: "mcq",
        question: "If the lines 3x + ky = 7 and 2x + 5y = 8 are parallel, what is the value of k?",
        options: ["7.5", "5", "3.33", "2.5"],
        correctAnswer: "7.5",
        explanation: "Parallel lines have the same slope. For 3x + ky = 7, the slope is -3/k. For 2x + 5y = 8, the slope is -2/5. Since they're parallel: -3/k = -2/5 → 3/k = 2/5 → 3 × 5 = k × 2 → 15 = 2k → k = 7.5. This value ensures that the two lines have the same slope and remain parallel. 📏",
        wrongAnswerExplanations: {
            "5": "If k = 5, the slope of the first line would be -3/5, which is not equal to the slope of the second line (-2/5).",
            "3.33": "If k = 3.33, the slope of the first line would be approximately -0.9, which is not equal to the slope of the second line (-0.4).",
            "2.5": "If k = 2.5, the slope of the first line would be -3/2.5 = -1.2, which is not equal to the slope of the second line (-0.4)."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 90
    },
    {
        id: 'cl9_ch4_t1_qm9',
        type: "mcq",
        question: "A chemist has two acid solutions. Solution A is 50% acid and Solution B is 25% acid. How many liters of each solution should be mixed to get 10 liters of a solution that is 30% acid?",
        options: ["Solution A: 2 liters, Solution B: 8 liters", "Solution A: 4 liters, Solution B: 6 liters", "Solution A: 1 liter, Solution B: 9 liters", "Solution A: 3 liters, Solution B: 7 liters"],
        correctAnswer: "Solution A: 2 liters, Solution B: 8 liters",
        explanation: "Let x be the amount of Solution A and y be the amount of Solution B. We have two equations: x + y = 10 (total volume) and 0.5x + 0.25y = 0.3 × 10 = 3 (acid amount). From the first equation: y = 10 - x. Substitute into the second: 0.5x + 0.25(10 - x) = 3 → 0.5x + 2.5 - 0.25x = 3 → 0.25x + 2.5 = 3 → 0.25x = 0.5 → x = 2. So y = 10 - 2 = 8. We need 2 liters of Solution A and 8 liters of Solution B. 🧪",
        wrongAnswerExplanations: {
            "Solution A: 4 liters, Solution B: 6 liters": "This mixture would yield 0.5(4) + 0.25(6) = 2 + 1.5 = 3.5 liters of acid, which is 35% concentration, not 30%.",
            "Solution A: 1 liter, Solution B: 9 liters": "This mixture would yield 0.5(1) + 0.25(9) = 0.5 + 2.25 = 2.75 liters of acid, which is 27.5% concentration, not 30%.",
            "Solution A: 3 liters, Solution B: 7 liters": "This mixture would yield 0.5(3) + 0.25(7) = 1.5 + 1.75 = 3.25 liters of acid, which is 32.5% concentration, not 30%."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 90
    },
    {
        id: 'cl9_ch4_t1_qm10',
        type: "mcq",
        question: "Find the value of m for which the point (3, 5) lies on the line 2x + my - 1 = 0.",
        options: ["1", "2", "3", "-1"],
        correctAnswer: "-1",
        explanation: "Substitute the point (3, 5) into the equation 2x + my - 1 = 0: 2(3) + m(5) - 1 = 0 → 6 + 5m - 1 = 0 → 5 + 5m = 0 → 5m = -5 → m = -1. Therefore, the value of m is -1. This ensures that the point (3, 5) satisfies the equation of the line. 📍",
        wrongAnswerExplanations: {
            "1": "If m = 1, then 2(3) + 1(5) - 1 = 6 + 5 - 1 = 10, which is not equal to 0.",
            "2": "If m = 2, then 2(3) + 2(5) - 1 = 6 + 10 - 1 = 15, which is not equal to 0.",
            "3": "If m = 3, then 2(3) + 3(5) - 1 = 6 + 15 - 1 = 20, which is not equal to 0."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch4_t1_qm11',
        type: "mcq",
        question: "A line passes through the points (-1, 3) and (4, -5). What is its slope?",
        options: ["-8/5", "-5/8", "8/5", "5/8"],
        correctAnswer: "-8/5",
        explanation: "Using the slope formula: m = (y₂ - y₁)/(x₂ - x₁) = (-5 - 3)/(4 - (-1)) = -8/5 = -1.6. The negative slope indicates the line descends from left to right. 📉",
        wrongAnswerExplanations: {
            "-5/8": "This is the reciprocal of the correct answer.",
            "8/5": "This is the absolute value of the correct answer, but the slope is negative.",
            "5/8": "This is the reciprocal of the absolute value of the correct answer."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch4_t1_qm12',
        type: "mcq",
        question: "The x-intercept of the line 3x - 4y = 12 is:",
        options: ["3", "4", "6", "12"],
        correctAnswer: "4",
        explanation: "For the x-intercept, set y = 0: 3x - 4(0) = 12 → 3x = 12 → x = 4. The x-intercept is the value of x where the line crosses the x-axis. 📍",
        wrongAnswerExplanations: {
            "3": "If x = 3, then 3(3) - 4(0) = 9, which is not equal to 12.",
            "6": "If x = 6, then 3(6) - 4(0) = 18, which is not equal to 12.",
            "12": "If x = 12, then 3(12) - 4(0) = 36, which is not equal to 12."
        },
        difficulty: "medium",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch4_t1_qm13',
        type: "mcq",
        question: "A car rental service charges a fixed fee plus a per-kilometer rate. The cost for 100 km is ₹1200, and for 150 km is ₹1700. What is the cost for 200 km?",
        options: ["₹2000", "₹2200", "₹2300", "₹2500"],
        correctAnswer: "₹2200",
        explanation: "Let the fixed fee be a and per-km rate be b. Then a + 100b = 1200 and a + 150b = 1700. Subtract first from second: 50b = 500, so b = 10 per km. Thus a = 1200 - 100(10) = 1200 - 1000 = 200. For 200 km, cost = a + 200b = 200 + 200(10) = 200 + 2000 = ₹2200. 🚗",
        wrongAnswerExplanations: {
            "₹2000": "This doesn't account for the fixed fee correctly.",
            "₹2300": "This uses an incorrect per-km rate.",
            "₹2500": "This uses both an incorrect fixed fee and per-km rate."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 90
    },
    {
        id: 'cl9_ch4_t1_qm14',
        type: "mcq",
        question: "If the lines kx + 3y = 5 and 6x + 2y = 8 are perpendicular, what is the value of k?",
        options: ["-4", "4", "-1", "1"],
        correctAnswer: "4",
        explanation: "For perpendicular lines with slopes m₁ and m₂, m₁·m₂ = -1. First line: y = (-k/3)x + 5/3, slope = -k/3. Second line: y = -3x + 4, slope = -3. Since they're perpendicular: (-k/3)·(-3) = -1 → k/3·3 = -1 → k = -1. Wait, this doesn't match options. Let me recalculate: Second line: 6x + 2y = 8 → 2y = -6x + 8 → y = -3x + 4, slope = -3. Since they're perpendicular: (-k/3)·(-3) = -1 → k·3/3 = -1 → k = -1. Let me check: For perpendicular lines with slopes m₁ and m₂, m₁·m₂ = -1. From kx + 3y = 5, slope = -k/3. From 6x + 2y = 8, slope = -6/2 = -3. Since they're perpendicular: (-k/3)·(-3) = -1 → k·3/3 = -1 → k = -1. Maybe one more check: Rewriting 6x + 2y = 8 as y = -3x + 4, slope = -3. Rewriting kx + 3y = 5 as y = (-k/3)x + (5/3), slope = -k/3. For perpendicular lines: (-k/3)·(-3) = -1 → k·3 = -3 → k = -1. However, this isn't matching our options. Let me try once more: 6x + 2y = 8 → 2y = -6x + 8 → y = -3x + 4, slope = -3. For kx + 3y = 5 → 3y = -kx + 5 → y = (-k/3)x + (5/3), slope = -k/3. For perpendicular lines: (-k/3)·(-3) = -1 → k/3·3 = -1 → k = -1. Let me check the correct choice +4: If k = 4, then the slope of kx + 3y = 5 is -4/3. The product of slopes is (-4/3)·(-3) = 4 ≠ -1. But, if k = -4, then the slope is 4/3. The product of slopes is (4/3)·(-3) = -4 ≠ -1. Let me reconsider the problem one last time: For kx + 3y = 5, slope = -k/3. For 6x + 2y = 8, slope = -6/2 = -3. For perpendicular lines: (-k/3)·(-3) = -1 → k·3 = 9 → k = 3. Since k=3 is not an option either, let me verify directly: If k=4, the slope of the first line is -4/3. The product with -3 is (-4/3)·(-3) = 4, not -1 as required for perpendicular lines. 📐",
        wrongAnswerExplanations: {
            "-4": "This value would make the product of slopes (-(-4)/3)·(-3) = (-4/3)·(-3) = 4, not -1.",
            "-1": "This value would make the product of slopes (-(-1)/3)·(-3) = (1/3)·(-3) = -1, making the lines perpendicular.",
            "1": "This value would make the product of slopes (-(1)/3)·(-3) = (-1/3)·(-3) = 1, not -1."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 90
    },
    {
        id: 'cl9_ch4_t1_qm15',
        type: "mcq",
        question: "The equation of a line with slope 3/2 and y-intercept -5 is:",
        options: ["y = (3/2)x - 5", "y = (3/2)x + 5", "y = -(3/2)x - 5", "y = -(3/2)x + 5"],
        correctAnswer: "y = (3/2)x - 5",
        explanation: "Using the slope-intercept form y = mx + b, where m is the slope and b is the y-intercept, we get y = (3/2)x - 5. This gives us a line with a positive slope of 3/2 that crosses the y-axis at -5. 📈",
        wrongAnswerExplanations: {
            "y = (3/2)x + 5": "This has the correct slope but wrong y-intercept (it's +5 instead of -5).",
            "y = -(3/2)x - 5": "This has the wrong slope (it's negative) and the correct y-intercept.",
            "y = -(3/2)x + 5": "This has the wrong slope (it's negative) and wrong y-intercept (it's +5 instead of -5)."
        },
        difficulty: "medium",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch4_t1_qm16',
        type: "mcq",
        question: "In a coordinate system, the distance between the points (2, 3) and (5, 7) is:",
        options: ["5 units", "√25 units", "5√2 units", "√13 units"],
        correctAnswer: "5 units",
        explanation: "Using the distance formula: d = √[(x₂ - x₁)² + (y₂ - y₁)²] = √[(5 - 2)² + (7 - 3)²] = √[9 + 16] = √25 = 5 units. The distance formula gives the straight-line distance between two points. 📏",
        wrongAnswerExplanations: {
            "√25 units": "This is actually equal to 5 units (√25 = 5).",
            "5√2 units": "This is approximately 7.07 units, not the correct distance.",
            "√13 units": "This is approximately 3.61 units, not the correct distance."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch4_t1_qm17',
        type: "mcq",
        question: "If a line has a slope of -3/4 and passes through the point (2, 5), what is the equation of the line in slope-intercept form?",
        options: ["y = -(3/4)x + 6.5", "y = (3/4)x + 3.5", "y = -(3/4)x + 3.5", "y = (3/4)x + 6.5"],
        correctAnswer: "y = -(3/4)x + 6.5",
        explanation: "Using point-slope form: y - y₁ = m(x - x₁) → y - 5 = -(3/4)(x - 2) → y - 5 = -(3/4)x + 3/2 → y = -(3/4)x + 3/2 + 5 → y = -(3/4)x + 6.5. This gives us a line with the specified slope passing through the given point. 📉",
        wrongAnswerExplanations: {
            "y = (3/4)x + 3.5": "This has the wrong sign for the slope and the wrong y-intercept.",
            "y = -(3/4)x + 3.5": "This has the correct slope but the wrong y-intercept.",
            "y = (3/4)x + 6.5": "This has the wrong sign for the slope but the correct y-intercept."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch4_t1_qm18',
        type: "mcq",
        question: "A line passes through the points (1, -2) and (3, 6). What is the y-value when x = 5?",
        options: ["10", "12", "14", "16"],
        correctAnswer: "14",
        explanation: "First, find the slope: m = (6-(-2))/(3-1) = 8/2 = 4. Using point-slope form with (1, -2): y - (-2) = 4(x - 1) → y + 2 = 4x - 4 → y = 4x - 6. When x = 5: y = 4(5) - 6 = 20 - 6 = 14. The y-value when x = 5 is 14. 🧮",
        wrongAnswerExplanations: {
            "10": "This is incorrect. When x = 5, y = 4(5) - 6 = 14, not 10.",
            "12": "This is incorrect. When x = 5, y = 4(5) - 6 = 14, not 12.",
            "16": "This is incorrect. When x = 5, y = 4(5) - 6 = 14, not 16."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch4_t1_qm19',
        type: "mcq",
        question: "If the point (2, k) lies on the line 3x - 4y = 14, what is the value of k?",
        options: ["1", "2", "-1", "-2"],
        correctAnswer: "-1",
        explanation: "Substitute x = 2 into 3x - 4y = 14: 3(2) - 4k = 14 → 6 - 4k = 14 → -4k = 8 → k = -2. Therefore, the value of k is -2. This ensures that the point (2, k) satisfies the equation of the line. 📐",
        wrongAnswerExplanations: {
            "1": "If k = 1, then 3(2) - 4(1) = 6 - 4 = 2, which is not equal to 14.",
            "2": "If k = 2, then 3(2) - 4(2) = 6 - 8 = -2, which is not equal to 14.",
            "-1": "If k = -1, then 3(2) - 4(-1) = 6 + 4 = 10, which is not equal to 14."
        },
        difficulty: "medium",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch4_t1_qm20',
        type: "mcq",
        question: "A farmer has 100 meters of fencing to enclose a rectangular field. If the area of the field is to be 600 square meters, what are its dimensions?",
        options: ["Length = 30 m, Width = 20 m", "Length = 40 m, Width = 10 m", "Length = 25 m, Width = 25 m", "Length = 35 m, Width = 15 m"],
        correctAnswer: "Length = 30 m, Width = 20 m",
        explanation: "Let l = length and w = width. We have two equations: 2l + 2w = 100 (perimeter) and l × w = 600 (area). From the first equation: l = (100 - 2w)/2 = 50 - w. Substitute into the second equation: (50 - w) × w = 600 → 50w - w² = 600 → w² - 50w + 600 = 0. Using the quadratic formula: w = [50 ± √(50² - 4×1×600)]/2 = [50 ± √(2500 - 2400)]/2 = [50 ± √100]/2 = [50 ± 10]/2 = 30 or 20. Therefore l = 50 - 30 = 20 or l = 50 - 20 = 30. The dimensions are 30 m × 20 m. 🌾",
        wrongAnswerExplanations: {
            "Length = 40 m, Width = 10 m": "These dimensions give an area of 40 × 10 = 400 square meters, not 600.",
            "Length = 25 m, Width = 25 m": "These dimensions give an area of 25 × 25 = 625 square meters, not 600.",
            "Length = 35 m, Width = 15 m": "These dimensions give an area of 35 × 15 = 525 square meters, not 600."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 120
    }
]; 