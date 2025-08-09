// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 7\Chapter9\Topic3\quiz_easy.ts
import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: "cl7_ch9_t3_qe1",
        type: "mcq",
        question: "Which rational number is represented by point A on the number line?",
        options: ["1/3", "2/3", "1/2", "3/4"],
        correctAnswer: "2/3",
        explanation: "The point A is located 2/3 of the way between 0 and 1 on the number line. 📏",
        wrongAnswerExplanations: {
            "1/3": "1/3 would be closer to 0 than the given point A.",
            "1/2": "1/2 would be exactly halfway between 0 and 1.",
            "3/4": "3/4 would be farther to the right than the given point A."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: "cl7_ch9_t3_qe2",
        type: "mcq",
        question: "Which point on the number line represents -3/4?",
        options: ["A", "B", "C", "D"],
        correctAnswer: "B",
        explanation: "Point B is located 3/4 unit to the left of 0 on the number line, which represents -3/4. 📉",
        wrongAnswerExplanations: {
            "A": "Point A is likely representing -1 or another negative number.",
            "C": "Point C is likely representing a positive number.",
            "D": "Point D is likely representing a positive number greater than point C."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: "cl7_ch9_t3_qe3",
        type: "mcq",
        question: "What is the distance between the points representing -2/5 and 3/5 on the number line?",
        options: ["1/5", "5/5", "1", "7/5"],
        correctAnswer: "1",
        explanation: "The distance is |3/5 - (-2/5)| = |3/5 + 2/5| = |5/5| = 1. Distance is always positive! 📊",
        wrongAnswerExplanations: {
            "1/5": "This is too small. We need to add the absolute values.",
            "5/5": "This equals 1, which is correct, but you may have made an error in calculation.",
            "7/5": "You might have added the values directly without finding the distance."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: "cl7_ch9_t3_qe4",
        type: "mcq",
        question: "Which rational number is exactly midway between -1 and 1 on the number line?",
        options: ["-1/2", "0", "1/2", "2"],
        correctAnswer: "0",
        explanation: "The midpoint between -1 and 1 is (-1 + 1)/2 = 0/2 = 0, which is at the origin of the number line. ⚖️",
        wrongAnswerExplanations: {
            "-1/2": "This is between -1 and 0, not midway between -1 and 1.",
            "1/2": "This is between 0 and 1, not midway between -1 and 1.",
            "2": "This is beyond 1, not between -1 and 1."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: "cl7_ch9_t3_qe5",
        type: "mcq",
        question: "On a number line, which of these is located farthest to the left?",
        options: ["-3/2", "-1", "-5/4", "-7/5"],
        correctAnswer: "-3/2",
        explanation: "Converting to decimals: -3/2 = -1.5, -1 = -1.0, -5/4 = -1.25, -7/5 = -1.4. The smallest is -1.5, which is -3/2. ⬅️",
        wrongAnswerExplanations: {
            "-1": "This is -1.0, which is greater than -3/2 (-1.5).",
            "-5/4": "This is -1.25, which is greater than -3/2 (-1.5).",
            "-7/5": "This is -1.4, which is greater than -3/2 (-1.5)."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: "cl7_ch9_t3_qe6",
        type: "mcq",
        question: "Which fraction is represented by a point exactly 1/2 unit to the right of -2 on the number line?",
        options: ["-1", "-3/2", "-3/4", "-3/2"],
        correctAnswer: "-3/2",
        explanation: "-2 + 1/2 = -2 + 0.5 = -1.5 = -3/2. Moving right means adding a positive value. 🔢",
        wrongAnswerExplanations: {
            "-1": "This would be 1 unit to the right of -2.",
            "-3/4": "This would be more than 1/2 unit to the right of -2.",
            "-3/2": "This is the correct answer as it equals -1.5."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: "cl7_ch9_t3_qe7",
        type: "mcq",
        question: "If point P represents 3/4 on a number line, which other point Q would make the midpoint of PQ equal to 1?",
        options: ["5/4", "6/4", "5/2", "3/2"],
        correctAnswer: "5/4",
        explanation: "If the midpoint is 1, then (3/4 + Q)/2 = 1. So, Q = 2 - 3/4 = 8/4 - 3/4 = 5/4. 📍",
        wrongAnswerExplanations: {
            "6/4": "With this value, the midpoint would be (3/4 + 6/4)/2 = 9/8, not 1.",
            "5/2": "With this value, the midpoint would be (3/4 + 5/2)/2 = (3 + 10)/8 = 13/8, not 1.",
            "3/2": "With this value, the midpoint would be (3/4 + 3/2)/2 = (3 + 6)/8 = 9/8, not 1."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: "cl7_ch9_t3_qe8",
        type: "mcq",
        question: "Which of the following best describes the location of -1/3 on the number line?",
        options: ["1/3 unit to the left of 0", "1/3 unit to the right of 0", "1/3 unit to the left of -1", "1/3 unit to the right of -1"],
        correctAnswer: "1/3 unit to the left of 0",
        explanation: "-1/3 is located 1/3 unit to the left of the origin (0) on the number line. Negative values are left of zero. 📉",
        wrongAnswerExplanations: {
            "1/3 unit to the right of 0": "This would be +1/3, not -1/3.",
            "1/3 unit to the left of -1": "This would be -1-1/3 = -4/3, not -1/3.",
            "1/3 unit to the right of -1": "This would be -1+1/3 = -2/3, not -1/3."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: "cl7_ch9_t3_qe9",
        type: "mcq",
        question: "What is the rational number represented by a point exactly halfway between 1/4 and 3/4?",
        options: ["1/2", "2/4", "1/8", "4/8"],
        correctAnswer: "1/2",
        explanation: "The midpoint is (1/4 + 3/4)/2 = 4/8 = 1/2. Midpoints are calculated as the average of the two values. 🎯",
        wrongAnswerExplanations: {
            "2/4": "This simplifies to 1/2, which is correct.",
            "1/8": "This is incorrect. The halfway point between 1/4 and 3/4 is 1/2.",
            "4/8": "This simplifies to 1/2, which is correct."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: "cl7_ch9_t3_qe10",
        type: "mcq",
        question: "Which rational number corresponds to point A that is 2/3 of the way from 0 to -1 on the number line?",
        options: ["-1/3", "-2/3", "1/3", "2/3"],
        correctAnswer: "-2/3",
        explanation: "Being 2/3 of the way from 0 to -1 means the point is at 0 + 2/3 × (-1 - 0) = -2/3. 📍",
        wrongAnswerExplanations: {
            "-1/3": "This is 1/3 of the way from 0 to -1, not 2/3.",
            "1/3": "This is positive, but the point should be negative.",
            "2/3": "This is positive, but the point should be negative."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: "cl7_ch9_t3_qe11",
        type: "mcq",
        question: "If point P is at -1/2 on the number line and point Q is at 3/2, what is the distance between them?",
        options: ["1", "2", "3/2", "4/2"],
        correctAnswer: "2",
        explanation: "The distance is |3/2 - (-1/2)| = |3/2 + 1/2| = |4/2| = |2| = 2. Distance is measured as absolute difference. 📏",
        wrongAnswerExplanations: {
            "1": "This is incorrect. The actual distance is 2.",
            "3/2": "This is incorrect. The actual distance is 2.",
            "4/2": "This equals 2, which is the correct answer."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: "cl7_ch9_t3_qe12",
        type: "mcq",
        question: "Which rational number is NOT correctly placed on the number line?",
        options: ["1/4 between 0 and 1", "5/4 between 1 and 2", "7/4 between 1 and 2", "9/4 between 1 and 2"],
        correctAnswer: "9/4 between 1 and 2",
        explanation: "9/4 = 2.25, which is greater than 2, so it should be placed between 2 and 3, not between 1 and 2. 🧮",
        wrongAnswerExplanations: {
            "1/4 between 0 and 1": "This is correct as 1/4 = 0.25, which is between 0 and 1.",
            "5/4 between 1 and 2": "This is correct as 5/4 = 1.25, which is between 1 and 2.",
            "7/4 between 1 and 2": "This is correct as 7/4 = 1.75, which is between 1 and 2."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: "cl7_ch9_t3_qe13",
        type: "mcq",
        question: "On the number line, which of the following is closest to 0?",
        options: ["1/5", "-1/5", "1/10", "-1/10"],
        correctAnswer: "-1/10",
        explanation: "Comparing absolute values: |1/5| = 0.2, |-1/5| = 0.2, |1/10| = 0.1, |-1/10| = 0.1. The smallest absolute value is closest to 0. 📊",
        wrongAnswerExplanations: {
            "1/5": "This has an absolute value of 0.2, which is greater than 0.1.",
            "-1/5": "This has an absolute value of 0.2, which is greater than 0.1.",
            "1/10": "This has an absolute value of 0.1, same as -1/10, but both are equidistant from 0."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: "cl7_ch9_t3_qe14",
        type: "mcq",
        question: "What rational number is represented by a point that is 3/4 of the way from -2 to 2 on the number line?",
        options: ["0", "1", "-1", "3"],
        correctAnswer: "1",
        explanation: "The point is at -2 + 3/4 × (2 - (-2)) = -2 + 3/4 × 4 = -2 + 3 = 1. Linear interpolation helps us find the point. 🎯",
        wrongAnswerExplanations: {
            "0": "This is halfway between -2 and 2, not 3/4 of the way.",
            "-1": "This is 1/4 of the way from -2 to 2, not 3/4.",
            "3": "This is beyond the endpoint 2, not 3/4 of the way from -2 to 2."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: "cl7_ch9_t3_qe15",
        type: "mcq",
        question: "A point is marked at 1.5 on the number line. Which rational number does it represent?",
        options: ["3/2", "15/10", "30/20", "6/4"],
        correctAnswer: "3/2",
        explanation: "1.5 = 15/10 = 3/2 in simplest form. Always simplify fractions by dividing both numerator and denominator by their GCD. 🔢",
        wrongAnswerExplanations: {
            "15/10": "This equals 1.5, but is not in simplest form.",
            "30/20": "This equals 1.5, but is not in simplest form.",
            "6/4": "This equals 1.5, but is not in simplest form."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: "cl7_ch9_t3_qe16",
        type: "mcq",
        question: "Which points would you need to divide the number line segment between 0 and 1 into four equal parts?",
        options: ["1/4, 1/2, 3/4", "1/3, 1/2, 2/3", "1/4, 2/4, 3/4", "1/4, 1/3, 1/2"],
        correctAnswer: "1/4, 1/2, 3/4",
        explanation: "To divide into 4 equal parts, we need points at 1/4, 2/4 (which is 1/2), and 3/4. These create segments of equal length 1/4. 📏",
        wrongAnswerExplanations: {
            "1/3, 1/2, 2/3": "These points don't divide the segment into 4 equal parts.",
            "1/4, 2/4, 3/4": "This is correct, but 2/4 simplifies to 1/2.",
            "1/4, 1/3, 1/2": "These points don't divide the segment into 4 equal parts."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: "cl7_ch9_t3_qe17",
        type: "mcq",
        question: "Which of these rational numbers would be located at the same point on a number line?",
        options: ["1/2 and 2/4", "2/3 and 3/4", "3/6 and 6/12", "1/3 and 2/5"],
        correctAnswer: "1/2 and 2/4",
        explanation: "1/2 = 2/4 = 0.5. Equivalent fractions represent the same point on the number line. 📊",
        wrongAnswerExplanations: {
            "2/3 and 3/4": "2/3 ≈ 0.67 and 3/4 = 0.75, so they are different points.",
            "3/6 and 6/12": "Both simplify to 1/2, so they are at the same point.",
            "1/3 and 2/5": "1/3 ≈ 0.33 and 2/5 = 0.4, so they are different points."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: "cl7_ch9_t3_qe18",
        type: "mcq",
        question: "If a number line has points marked at -2, -1, 0, 1, and 2, which point represents -3/4?",
        options: ["Between -2 and -1", "Between -1 and 0", "Between 0 and 1", "Between 1 and 2"],
        correctAnswer: "Between -1 and 0",
        explanation: "-3/4 = -0.75, which is between -1 and 0. Negative fractions lie to the left of 0 but right of -1 if greater than -1. 📉",
        wrongAnswerExplanations: {
            "Between -2 and -1": "This would be for values less than -1, but -3/4 > -1.",
            "Between 0 and 1": "This would be for positive values, but -3/4 is negative.",
            "Between 1 and 2": "This would be for values greater than 1, but -3/4 is negative."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: "cl7_ch9_t3_qe19",
        type: "mcq",
        question: "What is the rational number that corresponds to the point exactly midway between -1/2 and -5/2?",
        options: ["-1", "-1.5", "-3/2", "-3"],
        correctAnswer: "-3/2",
        explanation: "The midpoint is (-1/2 + (-5/2))/2 = (-6/2)/2 = -3/2. Midpoint is the average of the two values. ⚖️",
        wrongAnswerExplanations: {
            "-1": "This is incorrect. The midpoint calculation gives -3/2.",
            "-1.5": "This equals -3/2, which is the correct answer.",
            "-3": "This is incorrect. The midpoint calculation gives -3/2."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: "cl7_ch9_t3_qe20",
        type: "mcq",
        question: "On a number line, which rational numbers would lie between -1/3 and 1/3?",
        options: ["0 only", "-1/4 and 1/4 only", "0, -1/4, and 1/4", "-1/2 and 1/2"],
        correctAnswer: "0, -1/4, and 1/4",
        explanation: "Between -1/3 and 1/3 lie all numbers with absolute value less than 1/3, including 0, -1/4, and 1/4. 📏",
        wrongAnswerExplanations: {
            "0 only": "This is incomplete. Other numbers like -1/4 and 1/4 also lie between -1/3 and 1/3.",
            "-1/4 and 1/4 only": "This is incomplete. The number 0 also lies between -1/3 and 1/3.",
            "-1/2 and 1/2": "These numbers are outside the range. |-1/2| > 1/3 and |1/2| > 1/3."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    }
];
