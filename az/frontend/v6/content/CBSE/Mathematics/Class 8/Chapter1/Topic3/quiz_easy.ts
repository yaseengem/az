import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl8_ch1_t3_qe1',
        type: "mcq",
        question: "On a number line, what does the point halfway between 2 and 3 represent?",
        options: ["2.25", "2.75", "2.5", "3.5"],
        correctAnswer: "2.5",
        explanation: "The point halfway between 2 and 3 represents 2.5 or 5/2, as it divides the unit interval into two equal parts. 📏",
        wrongAnswerExplanations: {
            "2.25": "2.25 is a quarter way from 2 to 3, not halfway.",
            "2.75": "2.75 is three-quarters way from 2 to 3, not halfway.",
            "3.5": "3.5 is halfway between 3 and 4, not between 2 and 3."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch1_t3_qe2',
        type: "mcq",
        question: "Which number is located to the left of -2 on a number line?",
        options: ["-3", "-1", "2", "3"],
        correctAnswer: "-3",
        explanation: "On a number line, numbers increase from left to right. Therefore, -3 is located to the left of -2 as it's less than -2. ⬅️",
        wrongAnswerExplanations: {
            "-1": "-1 is to the right of -2 as it's greater than -2.",
            "2": "2 is to the right of -2 as it's greater than -2.",
            "3": "3 is to the right of -2 as it's greater than -2."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch1_t3_qe3',
        type: "mcq",
        question: "What fraction is represented by the point that divides the interval between 0 and 1 into four equal parts?",
        options: ["1/3", "1/2", "1/4", "3/4"],
        correctAnswer: "1/4",
        explanation: "When the interval between 0 and 1 is divided into 4 equal parts, each part represents 1/4. The first division point from 0 represents 1/4. 📊",
        wrongAnswerExplanations: {
            "1/3": "1/3 would be the point when the interval is divided into 3 equal parts.",
            "1/2": "1/2 would be the point when the interval is divided into 2 equal parts.",
            "3/4": "3/4 would be the third division point, not the first one."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch1_t3_qe4',
        type: "mcq",
        question: "Which rational number is represented by point A on the number line below? |-2|-1|A|1|2|",
        options: ["0", "-1", "1", "2"],
        correctAnswer: "0",
        explanation: "On a number line with unit intervals marked, the point between -1 and 1 represents 0, which is the origin point. 🎯",
        wrongAnswerExplanations: {
            "-1": "-1 is one unit to the left of 0.",
            "1": "1 is one unit to the right of 0.",
            "2": "2 is two units to the right of 0."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch1_t3_qe5',
        type: "mcq",
        question: "What is the distance between points representing -3 and 2 on a number line?",
        options: ["1", "5", "-5", "6"],
        correctAnswer: "5",
        explanation: "The distance between -3 and 2 is |2 - (-3)| = |2 + 3| = |5| = 5 units. Distance is always positive. 📏",
        wrongAnswerExplanations: {
            "1": "1 is too small to be the distance between -3 and 2.",
            "-5": "Distance cannot be negative.",
            "6": "6 is more than the actual distance between -3 and 2."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch1_t3_qe6',
        type: "mcq",
        question: "Which point on the number line represents -1.5?",
        options: ["Halfway between -1 and -2", "Halfway between -1 and 0", "Halfway between 1 and 2", "Halfway between 0 and 1"],
        correctAnswer: "Halfway between -1 and -2",
        explanation: "-1.5 is halfway between -1 and -2 as it equals -1 - 0.5 or -2 + 0.5. It can also be written as -3/2. 🔍",
        wrongAnswerExplanations: {
            "Halfway between -1 and 0": "This point represents -0.5.",
            "Halfway between 1 and 2": "This point represents 1.5.",
            "Halfway between 0 and 1": "This point represents 0.5."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch1_t3_qe7',
        type: "mcq",
        question: "If point P is 3 units to the right of -5 on a number line, what number does P represent?",
        options: ["-8", "-2", "2", "8"],
        correctAnswer: "-2",
        explanation: "Starting from -5 and moving 3 units right means adding 3: -5 + 3 = -2. Moving right means adding, moving left means subtracting. ➡️",
        wrongAnswerExplanations: {
            "-8": "-8 is 3 units to the left of -5, not right.",
            "2": "2 is 7 units to the right of -5.",
            "8": "8 is 13 units to the right of -5."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch1_t3_qe8',
        type: "mcq",
        question: "Which rational number lies exactly between -4 and 0 on a number line?",
        options: ["-1", "-2", "-3", "-4"],
        correctAnswer: "-2",
        explanation: "The number halfway between -4 and 0 is their average: (-4 + 0) ÷ 2 = -4/2 = -2. This point divides the interval into two equal parts. 📊",
        wrongAnswerExplanations: {
            "-1": "-1 is closer to 0 than to -4.",
            "-3": "-3 is closer to -4 than to 0.",
            "-4": "-4 is one of the endpoints, not between them."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch1_t3_qe9',
        type: "mcq",
        question: "On a number line, which of these is closest to 0?",
        options: ["-3/4", "2/3", "-1/2", "5/6"],
        correctAnswer: "-1/2",
        explanation: "Converting to decimals: -3/4 = -0.75, 2/3 ≈ 0.67, -1/2 = -0.5, 5/6 ≈ 0.83. The number with the smallest absolute value (-0.5) is closest to 0. 🎯",
        wrongAnswerExplanations: {
            "-3/4": "-0.75 is further from 0 than -0.5.",
            "2/3": "0.67 is further from 0 than -0.5.",
            "5/6": "0.83 is further from 0 than -0.5."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch1_t3_qe10',
        type: "mcq",
        question: "What is the coordinate of point B if it is located 2.5 units to the left of 1 on a number line?",
        options: ["-1.5", "-3.5", "3.5", "-2.5"],
        correctAnswer: "-1.5",
        explanation: "Starting from 1 and moving 2.5 units left means subtracting 2.5: 1 - 2.5 = -1.5. Moving left means subtracting. ⬅️",
        wrongAnswerExplanations: {
            "-3.5": "-3.5 is 4.5 units to the left of 1.",
            "3.5": "3.5 is 2.5 units to the right of 1.",
            "-2.5": "-2.5 is 3.5 units to the left of 1."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch1_t3_qe11',
        type: "mcq",
        question: "Which point represents 3/4 on a number line divided into fourths?",
        options: ["First mark after 0", "Second mark after 0", "Third mark after 0", "Fourth mark after 0"],
        correctAnswer: "Third mark after 0",
        explanation: "When a unit is divided into 4 equal parts, 3/4 is at the third mark as it represents three one-fourth parts from 0. 📏",
        wrongAnswerExplanations: {
            "First mark after 0": "The first mark represents 1/4.",
            "Second mark after 0": "The second mark represents 2/4 or 1/2.",
            "Fourth mark after 0": "The fourth mark represents 4/4 or 1."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch1_t3_qe12',
        type: "mcq",
        question: "If point A is at -2 and point B is at 4 on a number line, what point divides AB in the ratio 2:1?",
        options: ["0", "2", "-1", "1"],
        correctAnswer: "0",
        explanation: "The point dividing AB in ratio 2:1 is: (-2 × 1 + 4 × 2) ÷ (2 + 1) = (-2 + 8) ÷ 3 = 6 ÷ 3 = 0. This is called the section formula. 🔢",
        wrongAnswerExplanations: {
            "2": "2 divides the segment in a different ratio.",
            "-1": "-1 is not the correct division point.",
            "1": "1 divides the segment in a different ratio."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch1_t3_qe13',
        type: "mcq",
        question: "Which of these numbers would be represented furthest to the right on a number line?",
        options: ["2.5", "2.05", "2.15", "2.51"],
        correctAnswer: "2.51",
        explanation: "Comparing the decimals: 2.05 < 2.15 < 2.5 < 2.51. The largest number (2.51) is represented furthest to the right on the number line. ➡️",
        wrongAnswerExplanations: {
            "2.5": "2.5 is less than 2.51.",
            "2.05": "2.05 is the smallest of all options.",
            "2.15": "2.15 is greater than 2.05 but less than 2.5 and 2.51."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch1_t3_qe14',
        type: "mcq",
        question: "What is the distance between the points representing -1/2 and 3/2 on a number line?",
        options: ["1", "2", "3", "4"],
        correctAnswer: "2",
        explanation: "The distance is |3/2 - (-1/2)| = |3/2 + 1/2| = |4/2| = 2. Remember, distance is always positive. 📏",
        wrongAnswerExplanations: {
            "1": "1 is half of the actual distance.",
            "3": "3 is more than the actual distance.",
            "4": "4 is twice the actual distance."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch1_t3_qe15',
        type: "mcq",
        question: "Which point on a number line is equidistant from -3 and 3?",
        options: ["1", "-1", "0", "2"],
        correctAnswer: "0",
        explanation: "The point equidistant from -3 and 3 is their average: (-3 + 3) ÷ 2 = 0. Zero is the midpoint between any number and its opposite. 🎯",
        wrongAnswerExplanations: {
            "1": "1 is closer to 3 than to -3.",
            "-1": "-1 is closer to -3 than to 3.",
            "2": "2 is closer to 3 than to -3."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch1_t3_qe16',
        type: "mcq",
        question: "If you move 2.5 units right from -1.5 on a number line, where do you land?",
        options: ["0", "1", "-4", "1.5"],
        correctAnswer: "1",
        explanation: "Starting from -1.5 and moving 2.5 units right means adding 2.5: -1.5 + 2.5 = 1. Moving right means adding. ➡️",
        wrongAnswerExplanations: {
            "0": "Moving 1.5 units right from -1.5 would land at 0.",
            "-4": "Moving 2.5 units left from -1.5 would land at -4.",
            "1.5": "Moving 3 units right from -1.5 would land at 1.5."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch1_t3_qe17',
        type: "mcq",
        question: "Which of these fractions would be represented between 0 and 1 on a number line?",
        options: ["3/2", "5/4", "3/4", "4/3"],
        correctAnswer: "3/4",
        explanation: "Converting to decimals: 3/2 = 1.5, 5/4 = 1.25, 3/4 = 0.75, 4/3 ≈ 1.33. Only 3/4 (0.75) is between 0 and 1. 📊",
        wrongAnswerExplanations: {
            "3/2": "3/2 = 1.5 is greater than 1.",
            "5/4": "5/4 = 1.25 is greater than 1.",
            "4/3": "4/3 ≈ 1.33 is greater than 1."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch1_t3_qe18',
        type: "mcq",
        question: "What type of numbers are represented by ALL points on a number line?",
        options: ["Natural numbers", "Integers", "Rational numbers", "Real numbers"],
        correctAnswer: "Real numbers",
        explanation: "Every point on a number line represents a real number, which includes both rational and irrational numbers. Not every point represents a natural number or integer. 🔢",
        wrongAnswerExplanations: {
            "Natural numbers": "Natural numbers are only at certain positive whole number points.",
            "Integers": "Integers are only at whole number points.",
            "Rational numbers": "Some points represent irrational numbers, which are not rational."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch1_t3_qe19',
        type: "mcq",
        question: "On a number line, which of these best describes the location of -2.25?",
        options: ["Halfway between -2 and -3", "Quarter way from -2 to -3", "Quarter way from -3 to -2", "Three quarters way from -2 to -3"],
        correctAnswer: "Quarter way from -2 to -3",
        explanation: "-2.25 is 0.25 units below -2, which is one-quarter of the way from -2 to -3. Think of it as -2 - ¼. 📏",
        wrongAnswerExplanations: {
            "Halfway between -2 and -3": "This would be -2.5.",
            "Quarter way from -3 to -2": "This would be -2.75.",
            "Three quarters way from -2 to -3": "This would be -2.75."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch1_t3_qe20',
        type: "mcq",
        question: "If point P is at -1 and point Q is at 5 on a number line, what is the coordinate of their midpoint?",
        options: ["1", "2", "3", "4"],
        correctAnswer: "2",
        explanation: "The midpoint of two points is their average: (-1 + 5) ÷ 2 = 4 ÷ 2 = 2. This point divides PQ into two equal parts. 🎯",
        wrongAnswerExplanations: {
            "1": "1 is not halfway between -1 and 5.",
            "3": "3 is closer to 5 than to -1.",
            "4": "4 is much closer to 5 than to -1."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    }
]; 