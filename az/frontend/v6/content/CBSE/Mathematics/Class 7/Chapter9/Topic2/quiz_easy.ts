// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 7\Chapter9\Topic2\quiz_easy.ts
import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: "cl7_ch9_t2_qe1",
        type: "mcq",
        question: "Which operation is NOT closed in rational numbers?",
        options: ["Addition", "Subtraction", "Multiplication", "Division by zero"],
        correctAnswer: "Division by zero",
        explanation: "Division by zero is undefined, so rational numbers aren't closed under this operation. All other operations are closed in rational numbers. 🧮",
        wrongAnswerExplanations: {
            "Addition": "Rational numbers are closed under addition. The sum of any two rational numbers is always a rational number.",
            "Subtraction": "Rational numbers are closed under subtraction. The difference of any two rational numbers is always a rational number.",
            "Multiplication": "Rational numbers are closed under multiplication. The product of any two rational numbers is always a rational number."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: "cl7_ch9_t2_qe2",
        type: "mcq",
        question: "What is the additive inverse of 3/5?",
        options: ["-3/5", "5/3", "-5/3", "0"],
        correctAnswer: "-3/5",
        explanation: "The additive inverse of a number adds with it to give 0. So the additive inverse of 3/5 is -3/5 since 3/5 + (-3/5) = 0. ➕",
        wrongAnswerExplanations: {
            "5/3": "This is the reciprocal of 3/5, not its additive inverse.",
            "-5/3": "This is the negative of the reciprocal, not the additive inverse.",
            "0": "0 is its own additive inverse, not the additive inverse of 3/5."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: "cl7_ch9_t2_qe3",
        type: "mcq",
        question: "Which of the following is a rational number?",
        options: ["√2", "π", "0.25", "√9"],
        correctAnswer: "0.25",
        explanation: "0.25 can be written as 1/4, which is in the form p/q where p and q are integers and q ≠ 0. So it's a rational number. 🔢",
        wrongAnswerExplanations: {
            "√2": "√2 is irrational as it cannot be expressed as a ratio of integers.",
            "π": "π is an irrational number as it cannot be expressed as a ratio of integers.",
            "√9": "√9 = 3, which is a rational number, but 0.25 is the correct answer among the given options."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: "cl7_ch9_t2_qe4",
        type: "mcq",
        question: "Which of these represents the rational number -4/5 on the number line?",
        options: ["0.8 units to the right of 0", "0.8 units to the left of 0", "5/4 units to the right of 0", "5/4 units to the left of 0"],
        correctAnswer: "0.8 units to the left of 0",
        explanation: "-4/5 = -0.8, which is represented as 0.8 units to the left of zero on the number line. 📏",
        wrongAnswerExplanations: {
            "0.8 units to the right of 0": "This represents 4/5, not -4/5.",
            "5/4 units to the right of 0": "This represents 5/4, not -4/5.",
            "5/4 units to the left of 0": "This represents -5/4, not -4/5."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: "cl7_ch9_t2_qe5",
        type: "mcq",
        question: "What is the multiplicative inverse of -2/7?",
        options: ["2/7", "-7/2", "7/2", "-2/7"],
        correctAnswer: "-7/2",
        explanation: "The multiplicative inverse of a number multiplies with it to give 1. For -2/7, it's -7/2 since (-2/7)×(-7/2) = 1. ✖️",
        wrongAnswerExplanations: {
            "2/7": "This is not the multiplicative inverse as (-2/7)×(2/7) = -4/49, not 1.",
            "7/2": "This is not the multiplicative inverse as (-2/7)×(7/2) = -1, not 1.",
            "-2/7": "A number is not its own multiplicative inverse unless it's 1 or -1."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: "cl7_ch9_t2_qe6",
        type: "mcq",
        question: "Which property does NOT apply to rational numbers?",
        options: ["Commutative property of addition", "Commutative property of division", "Associative property of multiplication", "Distributive property of multiplication over addition"],
        correctAnswer: "Commutative property of division",
        explanation: "Division is not commutative for rational numbers. For example, 4÷2 ≠ 2÷4, as they give 2 and 0.5 respectively. ➗",
        wrongAnswerExplanations: {
            "Commutative property of addition": "Addition is commutative for rational numbers: a + b = b + a.",
            "Associative property of multiplication": "Multiplication is associative for rational numbers: (a × b) × c = a × (b × c).",
            "Distributive property of multiplication over addition": "This property holds for rational numbers: a × (b + c) = a × b + a × c."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: "cl7_ch9_t2_qe7",
        type: "mcq",
        question: "Which is the correct representation of -3/8 as a terminating decimal?",
        options: ["-0.375", "0.375", "-0.378", "-3.8"],
        correctAnswer: "-0.375",
        explanation: "-3/8 = -(3/8) = -(0.375) = -0.375. Converting fraction to decimal: 3÷8 = 0.375, then adding negative sign. 💯",
        wrongAnswerExplanations: {
            "0.375": "This is 3/8, not -3/8.",
            "-0.378": "This is incorrect. -3/8 = -0.375, not -0.378.",
            "-3.8": "This is incorrect. -3/8 = -0.375, not -3.8."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: "cl7_ch9_t2_qe8",
        type: "mcq",
        question: "What is the result of (-5/6) × (3/10)?",
        options: ["-1/4", "-1/2", "1/4", "-1/5"],
        correctAnswer: "-1/4",
        explanation: "(-5/6) × (3/10) = (-5 × 3)/(6 × 10) = -15/60 = -1/4 after simplifying. ✖️",
        wrongAnswerExplanations: {
            "-1/2": "This is incorrect. The correct calculation is (-5/6) × (3/10) = -15/60 = -1/4.",
            "1/4": "This is incorrect. The answer should be negative because of the negative sign in -5/6.",
            "-1/5": "This is incorrect. The correct calculation is (-5/6) × (3/10) = -15/60 = -1/4."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: "cl7_ch9_t2_qe9",
        type: "mcq",
        question: "Which of the following is NOT a rational number?",
        options: ["0", "-5", "3/7", "√3"],
        correctAnswer: "√3",
        explanation: "√3 is irrational as it cannot be expressed in the form p/q where p and q are integers. All others can be written as p/q. 🔢",
        wrongAnswerExplanations: {
            "0": "0 can be written as 0/1, so it's a rational number.",
            "-5": "-5 can be written as -5/1, so it's a rational number.",
            "3/7": "3/7 is already in the form p/q, so it's a rational number."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: "cl7_ch9_t2_qe10",
        type: "mcq",
        question: "What is the result of 1/2 ÷ (-1/4)?",
        options: ["-2", "-1/2", "2", "-4"],
        correctAnswer: "-2",
        explanation: "1/2 ÷ (-1/4) = 1/2 × (-4/1) = -4/2 = -2. Division by a fraction means multiplying by its reciprocal. ➗",
        wrongAnswerExplanations: {
            "-1/2": "This is incorrect. The correct calculation is 1/2 ÷ (-1/4) = 1/2 × (-4/1) = -2.",
            "2": "This is incorrect. The result should be negative due to the negative divisor.",
            "-4": "This is incorrect. The correct calculation is 1/2 ÷ (-1/4) = 1/2 × (-4/1) = -2."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: "cl7_ch9_t2_qe11",
        type: "mcq",
        question: "What is the additive identity for rational numbers?",
        options: ["1", "0", "-1", "None of these"],
        correctAnswer: "0",
        explanation: "The additive identity is 0 because adding 0 to any rational number gives the same number: a + 0 = a. 🧮",
        wrongAnswerExplanations: {
            "1": "1 is the multiplicative identity, not the additive identity.",
            "-1": "-1 is not the additive identity.",
            "None of these": "0 is the additive identity for rational numbers."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: "cl7_ch9_t2_qe12",
        type: "mcq",
        question: "Which of these pairs of rational numbers is equal?",
        options: ["1/2 and 3/6", "2/3 and 3/5", "3/4 and 9/16", "5/6 and 10/11"],
        correctAnswer: "1/2 and 3/6",
        explanation: "1/2 = 3/6 because when we simplify 3/6, we get 1/2. Two rational numbers are equal when their simplified forms are identical. 🔍",
        wrongAnswerExplanations: {
            "2/3 and 3/5": "These are not equal. 2/3 = 0.67 and 3/5 = 0.6.",
            "3/4 and 9/16": "These are not equal. 3/4 = 0.75 and 9/16 = 0.5625.",
            "5/6 and 10/11": "These are not equal. 5/6 = 0.833... and 10/11 = 0.909..."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: "cl7_ch9_t2_qe13",
        type: "mcq",
        question: "If a = -2/3 and b = -3/4, what is the value of a + b?",
        options: ["-5/7", "-17/12", "-5/12", "17/12"],
        correctAnswer: "-17/12",
        explanation: "a + b = -2/3 + (-3/4) = -8/12 + (-9/12) = -17/12. We need to find the LCM of denominators first. 📝",
        wrongAnswerExplanations: {
            "-5/7": "This is incorrect. The correct calculation requires finding a common denominator.",
            "-5/12": "This is incorrect. The correct sum is -17/12, not -5/12.",
            "17/12": "This is incorrect. The sum should be negative, not positive."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: "cl7_ch9_t2_qe14",
        type: "mcq",
        question: "What is the standard form of the rational number -24/36?",
        options: ["-2/3", "2/3", "-3/2", "-1/2"],
        correctAnswer: "-2/3",
        explanation: "The standard form requires simplifying by dividing both numerator and denominator by their GCD. Here, -24/36 = -24÷12/36÷12 = -2/3. 🔢",
        wrongAnswerExplanations: {
            "2/3": "This is incorrect. The negative sign must be preserved in the standard form.",
            "-3/2": "This is incorrect. -24/36 simplifies to -2/3, not -3/2.",
            "-1/2": "This is incorrect. -24/36 = -2/3, not -1/2."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: "cl7_ch9_t2_qe15",
        type: "mcq",
        question: "Which of the following is a rational number between -0.5 and -0.4?",
        options: ["-0.6", "-0.45", "-0.3", "-0.55"],
        correctAnswer: "-0.45",
        explanation: "-0.5 < -0.45 < -0.4, so -0.45 lies between -0.5 and -0.4. Remember, for negative numbers, the more negative is smaller. 📊",
        wrongAnswerExplanations: {
            "-0.6": "This is less than -0.5, not between -0.5 and -0.4.",
            "-0.3": "This is greater than -0.4, not between -0.5 and -0.4.",
            "-0.55": "This is less than -0.5, not between -0.5 and -0.4."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: "cl7_ch9_t2_qe16",
        type: "mcq",
        question: "Which of the following is NOT true about rational numbers?",
        options: ["Every integer is a rational number", "Every rational number is an integer", "Zero is a rational number", "Rational numbers can be represented on a number line"],
        correctAnswer: "Every rational number is an integer",
        explanation: "Not every rational number is an integer. For example, 1/2 is a rational number but not an integer. Many rational numbers lie between integers. 🧠",
        wrongAnswerExplanations: {
            "Every integer is a rational number": "This is true. Every integer n can be written as n/1.",
            "Zero is a rational number": "This is true. Zero can be written as 0/1.",
            "Rational numbers can be represented on a number line": "This is true. Every rational number corresponds to a point on the number line."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: "cl7_ch9_t2_qe17",
        type: "mcq",
        question: "Which property is being shown: (2/3) + (5/7) = (5/7) + (2/3)?",
        options: ["Associative property of addition", "Commutative property of addition", "Distributive property", "Closure property"],
        correctAnswer: "Commutative property of addition",
        explanation: "The commutative property states that the order of addition doesn't affect the result: a + b = b + a. 🔄",
        wrongAnswerExplanations: {
            "Associative property of addition": "This is (a + b) + c = a + (b + c), not shown here.",
            "Distributive property": "This is a(b + c) = ab + ac, not shown here.",
            "Closure property": "This states that the sum of rational numbers is a rational number, not about order."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: "cl7_ch9_t2_qe18",
        type: "mcq",
        question: "What is the result of (-3/8) - (2/5)?",
        options: ["-31/40", "-1/40", "31/40", "1/40"],
        correctAnswer: "-31/40",
        explanation: "(-3/8) - (2/5) = (-3/8) + (-2/5) = (-15/40) + (-16/40) = -31/40. Convert to common denominator first. ➖",
        wrongAnswerExplanations: {
            "-1/40": "This is incorrect. The correct calculation gives -31/40.",
            "31/40": "This is incorrect. The result should be negative, not positive.",
            "1/40": "This is incorrect. The correct calculation gives -31/40."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: "cl7_ch9_t2_qe19",
        type: "mcq",
        question: "Which of the following correctly represents the rational number 0.75?",
        options: ["3/4", "7/5", "7/10", "75/10"],
        correctAnswer: "3/4",
        explanation: "0.75 = 75/100 = 3/4 when simplified. To convert a decimal to a fraction, put it over powers of 10 and simplify. 💯",
        wrongAnswerExplanations: {
            "7/5": "7/5 = 1.4, not 0.75.",
            "7/10": "7/10 = 0.7, not 0.75.",
            "75/10": "75/10 = 7.5, not 0.75."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: "cl7_ch9_t2_qe20",
        type: "mcq",
        question: "What is the multiplicative identity for rational numbers?",
        options: ["0", "1", "-1", "None of these"],
        correctAnswer: "1",
        explanation: "The multiplicative identity is 1 because multiplying any rational number by 1 gives the same number: a × 1 = a. ✖️",
        wrongAnswerExplanations: {
            "0": "0 is the additive identity, not the multiplicative identity.",
            "-1": "-1 is not the multiplicative identity as it changes the sign of the number.",
            "None of these": "1 is the multiplicative identity for rational numbers."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    }
];
