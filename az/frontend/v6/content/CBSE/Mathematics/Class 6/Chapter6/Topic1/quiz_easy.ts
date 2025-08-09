import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl6_ch6_t1_qe1',
        type: "mcq",
        question: "Which of these numbers is an integer?",
        options: ["-5", "2.5", "1/2", "√2"],
        correctAnswer: "-5",
        explanation: "-5 is an integer because it's a negative whole number. Integers include all positive and negative whole numbers and zero. 🔢",
        wrongAnswerExplanations: {
            "2.5": "2.5 is a decimal, not an integer. Integers are whole numbers.",
            "1/2": "1/2 is a fraction, not an integer. Integers are whole numbers.",
            "√2": "√2 is an irrational number, not an integer."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch6_t1_qe2',
        type: "mcq",
        question: "On a number line, which direction do positive numbers go?",
        options: ["Left", "Right", "Up", "Down"],
        correctAnswer: "Right",
        explanation: "On a number line, positive numbers increase as we move to the right from zero. 📈",
        wrongAnswerExplanations: {
            "Left": "Left is the direction for negative numbers.",
            "Up": "Number lines are horizontal, not vertical.",
            "Down": "Number lines are horizontal, not vertical."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch6_t1_qe3',
        type: "mcq",
        question: "What is the opposite of 7 on the number line?",
        options: ["7", "-7", "0", "1/7"],
        correctAnswer: "-7",
        explanation: "The opposite of a number is its negative counterpart, equidistant from zero on the number line. 🔄",
        wrongAnswerExplanations: {
            "7": "7 is the same number, not its opposite.",
            "0": "0 is its own opposite, not the opposite of 7.",
            "1/7": "1/7 is the reciprocal, not the opposite."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch6_t1_qe4',
        type: "mcq",
        question: "Which number is greater: -3 or -1?",
        options: ["-3", "-1", "They are equal", "Cannot be compared"],
        correctAnswer: "-1",
        explanation: "On the number line, -1 is to the right of -3, making it greater. Numbers increase as we move right. 📊",
        wrongAnswerExplanations: {
            "-3": "-3 is to the left of -1 on the number line, making it smaller.",
            "They are equal": "The numbers are different and can be compared on the number line.",
            "Cannot be compared": "All integers can be compared on the number line."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch6_t1_qe5',
        type: "mcq",
        question: "If the temperature is -5°C and it rises by 3°C, what is the new temperature?",
        options: ["-8°C", "-2°C", "2°C", "8°C"],
        correctAnswer: "-2°C",
        explanation: "-5 + 3 = -2. The temperature rises by moving right on the number line. 🌡️",
        wrongAnswerExplanations: {
            "-8°C": "This would be the result of a drop in temperature, not a rise.",
            "2°C": "This is too high. The temperature hasn't risen above zero yet.",
            "8°C": "This is much too high. The temperature only rose by 3 degrees."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch6_t1_qe6',
        type: "mcq",
        question: "Which of these is a real-life example of negative integers?",
        options: ["Height of a mountain", "Number of apples in a basket", "Temperature below zero", "Age of a person"],
        correctAnswer: "Temperature below zero",
        explanation: "Temperatures below zero are represented by negative integers. Other examples include debt and below sea level measurements. ❄️",
        wrongAnswerExplanations: {
            "Height of a mountain": "Height is always positive.",
            "Number of apples in a basket": "You can't have negative apples.",
            "Age of a person": "Age is always positive."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch6_t1_qe7',
        type: "mcq",
        question: "What is the absolute value of -4?",
        options: ["-4", "4", "0", "1/4"],
        correctAnswer: "4",
        explanation: "Absolute value is the distance from zero on the number line, which is always positive. |-4| = 4. 📏",
        wrongAnswerExplanations: {
            "-4": "Absolute value is always positive.",
            "0": "0 is not the distance from -4 to 0.",
            "1/4": "This is the reciprocal, not the absolute value."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch6_t1_qe8',
        type: "mcq",
        question: "Which number is the smallest: -2, 0, 2, -5?",
        options: ["-2", "0", "2", "-5"],
        correctAnswer: "-5",
        explanation: "-5 is the farthest to the left on the number line, making it the smallest. Numbers decrease as we move left. 📉",
        wrongAnswerExplanations: {
            "-2": "-2 is greater than -5 as it's to the right on the number line.",
            "0": "0 is greater than negative numbers.",
            "2": "2 is the largest number in this set."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch6_t1_qe9',
        type: "mcq",
        question: "If a submarine is at -100 meters and dives 50 meters deeper, what is its new position?",
        options: ["-150 meters", "-50 meters", "50 meters", "150 meters"],
        correctAnswer: "-150 meters",
        explanation: "-100 - 50 = -150. Going deeper means moving left on the number line. 🌊",
        wrongAnswerExplanations: {
            "-50 meters": "This would be rising, not diving deeper.",
            "50 meters": "This is above sea level, not below.",
            "150 meters": "This is much too high and in the wrong direction."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch6_t1_qe10',
        type: "mcq",
        question: "Which of these numbers is NOT an integer?",
        options: ["0", "-3", "5", "2.5"],
        correctAnswer: "2.5",
        explanation: "2.5 is a decimal, not an integer. Integers are whole numbers (positive, negative, or zero). 🔢",
        wrongAnswerExplanations: {
            "0": "0 is an integer.",
            "-3": "-3 is an integer.",
            "5": "5 is an integer."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch6_t1_qe11',
        type: "mcq",
        question: "What is the distance between -3 and 3 on the number line?",
        options: ["0 units", "3 units", "6 units", "9 units"],
        correctAnswer: "6 units",
        explanation: "The distance is the number of units between -3 and 3, which is 6 units. 📏",
        wrongAnswerExplanations: {
            "0 units": "The numbers are different, so the distance cannot be zero.",
            "3 units": "This is only half the distance.",
            "9 units": "This is too large. Count the units carefully."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch6_t1_qe12',
        type: "mcq",
        question: "Which of these represents a bank account with a debt of ₹500?",
        options: ["₹500", "-₹500", "0", "₹-500"],
        correctAnswer: "-₹500",
        explanation: "Debt is represented by negative numbers. -₹500 means owing ₹500. 💰",
        wrongAnswerExplanations: {
            "₹500": "This represents having ₹500, not owing it.",
            "0": "This represents no money, not debt.",
            "₹-500": "This notation is incorrect. The minus sign should come before the ₹ symbol."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch6_t1_qe13',
        type: "mcq",
        question: "What is the opposite of -8?",
        options: ["-8", "8", "0", "1/8"],
        correctAnswer: "8",
        explanation: "The opposite of a negative number is its positive counterpart. 🔄",
        wrongAnswerExplanations: {
            "-8": "This is the same number, not its opposite.",
            "0": "0 is its own opposite, not the opposite of -8.",
            "1/8": "This is the reciprocal, not the opposite."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch6_t1_qe14',
        type: "mcq",
        question: "Which floor is represented by -1 in an elevator?",
        options: ["First floor", "Ground floor", "Basement", "Top floor"],
        correctAnswer: "Basement",
        explanation: "Negative numbers in elevators typically represent basement floors. 🏢",
        wrongAnswerExplanations: {
            "First floor": "First floor is usually represented by 1.",
            "Ground floor": "Ground floor is usually represented by 0.",
            "Top floor": "Top floor would be the highest positive number."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch6_t1_qe15',
        type: "mcq",
        question: "If you move 4 units to the left from -2 on the number line, where do you end up?",
        options: ["2", "-6", "6", "-2"],
        correctAnswer: "-6",
        explanation: "Moving left means subtracting: -2 - 4 = -6. 📉",
        wrongAnswerExplanations: {
            "2": "This would be moving right, not left.",
            "6": "This is in the wrong direction and too far.",
            "-2": "This is the starting point, not the destination."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch6_t1_qe16',
        type: "mcq",
        question: "Which of these temperatures is the coldest?",
        options: ["-10°C", "-5°C", "0°C", "5°C"],
        correctAnswer: "-10°C",
        explanation: "-10°C is the farthest to the left on the number line, making it the coldest. ❄️",
        wrongAnswerExplanations: {
            "-5°C": "This is warmer than -10°C.",
            "0°C": "This is warmer than negative temperatures.",
            "5°C": "This is the warmest option."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch6_t1_qe17',
        type: "mcq",
        question: "What is the sum of a number and its opposite?",
        options: ["The number itself", "1", "0", "The opposite"],
        correctAnswer: "0",
        explanation: "When you add a number and its opposite, they cancel each other out to make zero. ➕",
        wrongAnswerExplanations: {
            "The number itself": "Adding opposites doesn't give the original number.",
            "1": "Adding opposites never gives 1.",
            "The opposite": "Adding opposites doesn't give the opposite number."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch6_t1_qe18',
        type: "mcq",
        question: "Which of these is NOT a property of the number line?",
        options: ["Numbers increase to the right", "Zero is in the middle", "Numbers can be fractions", "Equal spacing between numbers"],
        correctAnswer: "Numbers can be fractions",
        explanation: "The number line for integers only shows whole numbers, not fractions. 🔢",
        wrongAnswerExplanations: {
            "Numbers increase to the right": "This is a property of the number line.",
            "Zero is in the middle": "This is a property of the number line.",
            "Equal spacing between numbers": "This is a property of the number line."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch6_t1_qe19',
        type: "mcq",
        question: "If you are at -3 on the number line and move 5 units to the right, where do you end up?",
        options: ["-8", "-2", "2", "8"],
        correctAnswer: "2",
        explanation: "-3 + 5 = 2. Moving right means adding. ➡️",
        wrongAnswerExplanations: {
            "-8": "This would be moving left, not right.",
            "-2": "This is not far enough to the right.",
            "8": "This is too far to the right."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch6_t1_qe20',
        type: "mcq",
        question: "Which of these represents a profit of ₹200?",
        options: ["-₹200", "₹200", "0", "₹-200"],
        correctAnswer: "₹200",
        explanation: "Profit is represented by positive numbers. ₹200 means earning ₹200. 💰",
        wrongAnswerExplanations: {
            "-₹200": "This represents a loss, not a profit.",
            "0": "This represents no profit or loss.",
            "₹-200": "This notation is incorrect. The minus sign should come before the ₹ symbol."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    }
]; 