import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl6_ch6_t1_qm1',
        type: "mcq",
        question: "If a submarine is at -250 meters and rises 180 meters, then dives 120 meters, what is its final position?",
        options: ["-190 meters", "-310 meters", "-70 meters", "-430 meters"],
        correctAnswer: "-190 meters",
        explanation: "-250 + 180 - 120 = -190. Rising means adding, diving means subtracting. 🌊",
        wrongAnswerExplanations: {
            "-310 meters": "This would be the result of only diving, not rising first.",
            "-70 meters": "This is too high. The submarine didn't rise above sea level.",
            "-430 meters": "This is much too deep. Check your calculations."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch6_t1_qm2',
        type: "mcq",
        question: "Which of these sequences shows integers in ascending order?",
        options: ["-5, -3, 0, 2, 4", "4, 2, 0, -3, -5", "-3, -5, 0, 4, 2", "0, -5, -3, 2, 4"],
        correctAnswer: "-5, -3, 0, 2, 4",
        explanation: "Numbers increase from left to right on the number line. This sequence moves from left to right. 📈",
        wrongAnswerExplanations: {
            "4, 2, 0, -3, -5": "This sequence is in descending order.",
            "-3, -5, 0, 4, 2": "This sequence is not in order as -3 is greater than -5.",
            "0, -5, -3, 2, 4": "This sequence is not in order as 0 is greater than negative numbers."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch6_t1_qm3',
        type: "mcq",
        question: "What is the sum of the absolute values of -7 and 3?",
        options: ["-10", "-4", "4", "10"],
        correctAnswer: "10",
        explanation: "|-7| + |3| = 7 + 3 = 10. Absolute values are always positive. 📏",
        wrongAnswerExplanations: {
            "-10": "Absolute values are positive, so their sum cannot be negative.",
            "-4": "This is the sum of the numbers themselves, not their absolute values.",
            "4": "This is the difference between the absolute values."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch6_t1_qm4',
        type: "mcq",
        question: "If the temperature changes from -8°C to 5°C, what is the total change in temperature?",
        options: ["-13°C", "-3°C", "3°C", "13°C"],
        correctAnswer: "13°C",
        explanation: "5 - (-8) = 13. The temperature rose by 13 degrees. 🌡️",
        wrongAnswerExplanations: {
            "-13°C": "This would be a drop in temperature, not a rise.",
            "-3°C": "This is incorrect. The temperature rose above zero.",
            "3°C": "This is too small. The temperature rose from below zero to above zero."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch6_t1_qm5',
        type: "mcq",
        question: "Which of these statements about integers is FALSE?",
        options: [
            "Every integer has an opposite",
            "The sum of two negative integers is always negative",
            "The product of two negative integers is always negative",
            "Zero is neither positive nor negative"
        ],
        correctAnswer: "The product of two negative integers is always negative",
        explanation: "The product of two negative integers is always positive. For example, -2 × -3 = 6. ✖️",
        wrongAnswerExplanations: {
            "Every integer has an opposite": "This is true. For any integer a, -a is its opposite.",
            "The sum of two negative integers is always negative": "This is true. For example, -2 + -3 = -5.",
            "Zero is neither positive nor negative": "This is true. Zero is neutral."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch6_t1_qm6',
        type: "mcq",
        question: "If you move 3 units left from -4, then 5 units right, then 2 units left, where do you end up?",
        options: ["-4", "-6", "-2", "0"],
        correctAnswer: "-4",
        explanation: "-4 - 3 + 5 - 2 = -4. The movements cancel each other out. 🔄",
        wrongAnswerExplanations: {
            "-6": "This would be the result of only moving left.",
            "-2": "This is not correct. Check your calculations.",
            "0": "This is not correct. The movements don't add up to zero."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch6_t1_qm7',
        type: "mcq",
        question: "What is the distance between -8 and 5 on the number line?",
        options: ["3 units", "13 units", "-13 units", "-3 units"],
        correctAnswer: "13 units",
        explanation: "The distance is the absolute difference: |5 - (-8)| = |13| = 13 units. 📏",
        wrongAnswerExplanations: {
            "3 units": "This is too small. Count all the units between -8 and 5.",
            "-13 units": "Distance is always positive.",
            "-3 units": "Distance is always positive and this is too small."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch6_t1_qm8',
        type: "mcq",
        question: "Which of these represents a bank account that was ₹500 in debt, then received ₹300, and then spent ₹200?",
        options: ["-₹400", "-₹1000", "₹0", "₹400"],
        correctAnswer: "-₹400",
        explanation: "-500 + 300 - 200 = -400. Debt is negative, deposits are positive, withdrawals are negative. 💰",
        wrongAnswerExplanations: {
            "-₹1000": "This is too much debt. Check your calculations.",
            "₹0": "The account is still in debt.",
            "₹400": "The account is in debt, so the balance should be negative."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch6_t1_qm9',
        type: "mcq",
        question: "If the temperature drops by 7°C from -2°C, then rises by 10°C, what is the final temperature?",
        options: ["-19°C", "-9°C", "1°C", "19°C"],
        correctAnswer: "1°C",
        explanation: "-2 - 7 + 10 = 1. Drops are negative, rises are positive. 🌡️",
        wrongAnswerExplanations: {
            "-19°C": "This is too cold. Check your calculations.",
            "-9°C": "This would be the result of only dropping the temperature.",
            "19°C": "This is too warm. The temperature didn't rise that much."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch6_t1_qm10',
        type: "mcq",
        question: "Which of these is NOT true about the number line?",
        options: [
            "The distance between any two numbers is always positive",
            "Every point on the line represents a unique number",
            "The line extends infinitely in both directions",
            "The distance between consecutive numbers can vary"
        ],
        correctAnswer: "The distance between consecutive numbers can vary",
        explanation: "On a number line, the distance between consecutive numbers must be equal. 📏",
        wrongAnswerExplanations: {
            "The distance between any two numbers is always positive": "This is true. Distance is always positive.",
            "Every point on the line represents a unique number": "This is true. Each point corresponds to one number.",
            "The line extends infinitely in both directions": "This is true. The number line has no end."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch6_t1_qm11',
        type: "mcq",
        question: "If you start at -5 on the number line and move a total of 8 units to the right, then 3 units to the left, where do you end up?",
        options: ["-10", "0", "-6", "6"],
        correctAnswer: "0",
        explanation: "-5 + 8 - 3 = 0. Right is positive, left is negative. ➡️⬅️",
        wrongAnswerExplanations: {
            "-10": "This would be moving only left from the starting point.",
            "-6": "This is not correct. Check your calculations.",
            "6": "This is too far to the right. The movements don't add up to 11."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch6_t1_qm12',
        type: "mcq",
        question: "What is the sum of the smallest and largest integers in the set {-4, 2, -1, 0, 3}?",
        options: ["-1", "1", "-7", "7"],
        correctAnswer: "-1",
        explanation: "Smallest is -4, largest is 3. -4 + 3 = -1. ➕",
        wrongAnswerExplanations: {
            "1": "This is the difference, not the sum.",
            "-7": "This would be the sum if both numbers were negative.",
            "7": "This would be the sum if both numbers were positive."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch6_t1_qm13',
        type: "mcq",
        question: "If a mountain's peak is at 2500 meters and its base is at -500 meters (below sea level), what is the total height of the mountain?",
        options: ["2000 meters", "2500 meters", "3000 meters", "3500 meters"],
        correctAnswer: "3000 meters",
        explanation: "2500 - (-500) = 3000. The height is the difference between peak and base. ⛰️",
        wrongAnswerExplanations: {
            "2000 meters": "This doesn't account for the part below sea level.",
            "2500 meters": "This is only the height above sea level.",
            "3500 meters": "This is too high. Check your calculations."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch6_t1_qm14',
        type: "mcq",
        question: "Which of these represents a temperature that is 15°C colder than -5°C?",
        options: ["-20°C", "10°C", "20°C", "-10°C"],
        correctAnswer: "-20°C",
        explanation: "-5 - 15 = -20. Getting colder means moving left on the number line. ❄️",
        wrongAnswerExplanations: {
            "10°C": "This would be warmer, not colder.",
            "20°C": "This is much too warm. The temperature dropped.",
            "-10°C": "This is not cold enough. The temperature dropped by 15 degrees."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch6_t1_qm15',
        type: "mcq",
        question: "If you have ₹200 in debt and receive ₹300, then spend ₹400, what is your final balance?",
        options: ["-₹300", "₹100", "-₹100", "₹300"],
        correctAnswer: "-₹300",
        explanation: "-200 + 300 - 400 = -300. Debt is negative, income is positive, spending is negative. 💰",
        wrongAnswerExplanations: {
            "₹100": "The final balance is in debt, so it should be negative.",
            "-₹100": "This is not correct. Check your calculations.",
            "₹300": "The final balance is in debt, so it should be negative."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch6_t1_qm16',
        type: "mcq",
        question: "What is the difference between the largest and smallest integers in the set {-3, 0, 4, -1, 2}?",
        options: ["1", "4", "7", "8"],
        correctAnswer: "7",
        explanation: "Largest is 4, smallest is -3. 4 - (-3) = 7. ➖",
        wrongAnswerExplanations: {
            "1": "This is too small. Find the difference between the extremes.",
            "4": "This is the largest number, not the difference.",
            "8": "This is too large. Check your calculations."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch6_t1_qm17',
        type: "mcq",
        question: "Which of these sequences shows the absolute values of integers in descending order?",
        options: ["5, 3, 1, 0, 2", "0, 1, 2, 3, 5", "5, 3, 2, 1, 0", "2, 0, 1, 3, 5"],
        correctAnswer: "5, 3, 2, 1, 0",
        explanation: "Absolute values are always positive, and this sequence decreases from left to right. 📉",
        wrongAnswerExplanations: {
            "5, 3, 1, 0, 2": "This sequence is not consistently descending.",
            "0, 1, 2, 3, 5": "This sequence is ascending, not descending.",
            "2, 0, 1, 3, 5": "This sequence is not in order."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch6_t1_qm18',
        type: "mcq",
        question: "If a submarine is at -200 meters and another submarine is at -350 meters, what is the vertical distance between them?",
        options: ["150 meters", "-150 meters", "550 meters", "-550 meters"],
        correctAnswer: "150 meters",
        explanation: "|-200 - (-350)| = |150| = 150 meters. Distance is always positive. 🌊",
        wrongAnswerExplanations: {
            "-150 meters": "Distance is always positive.",
            "550 meters": "This is the sum, not the difference.",
            "-550 meters": "Distance is always positive and this is the wrong calculation."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch6_t1_qm19',
        type: "mcq",
        question: "Which of these represents a temperature that is halfway between -10°C and 20°C?",
        options: ["-15°C", "5°C", "15°C", "10°C"],
        correctAnswer: "5°C",
        explanation: "(-10 + 20) ÷ 2 = 5. The midpoint is the average of the two temperatures. 🌡️",
        wrongAnswerExplanations: {
            "-15°C": "This is too cold. Find the average of -10 and 20.",
            "15°C": "This is too warm. The midpoint should be closer to zero.",
            "10°C": "This is not the exact midpoint. Calculate the average."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch6_t1_qm20',
        type: "mcq",
        question: "If you move 4 units right from -3, then 7 units left, then 2 units right, where do you end up?",
        options: ["-4", "-8", "0", "4"],
        correctAnswer: "-4",
        explanation: "-3 + 4 - 7 + 2 = -4. Right is positive, left is negative. ➡️⬅️",
        wrongAnswerExplanations: {
            "-8": "This would be the result of only moving left.",
            "0": "This is not correct. Check your calculations.",
            "4": "This is too far to the right. The movements don't add up to 7."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    }
]; 