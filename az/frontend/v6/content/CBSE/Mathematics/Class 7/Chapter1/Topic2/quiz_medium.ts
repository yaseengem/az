import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl7_ch1_t2_qm1',
        type: "mcq",
        question: "If a = -5, b = 3, and c = -2, what is the value of (a × b) × c using the associative property?",
        options: ["-30", "30", "-10", "10"],
        correctAnswer: "30",
        explanation: "Using associative property: (-5 × 3) × -2 = -5 × (3 × -2) = 30. The grouping doesn't matter in multiplication. ✖️",
        wrongAnswerExplanations: {
            "-30": "This would be the result of -5 × 3 × 2, not considering the negative sign of c.",
            "-10": "This would be the result of -5 + 3 + -2, not multiplication.",
            "10": "This would be the result of 5 × 2, not considering all numbers."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch1_t2_qm2',
        type: "mcq",
        question: "Which of these expressions demonstrates the distributive property correctly?",
        options: [
            "4 × (3 + 5) = 4 × 3 + 5",
            "4 × (3 + 5) = 4 + 3 × 5",
            "4 × (3 + 5) = 4 × 3 + 4 × 5",
            "4 × (3 + 5) = 4 × 3 × 5"
        ],
        correctAnswer: "4 × (3 + 5) = 4 × 3 + 4 × 5",
        explanation: "The distributive property states that a × (b + c) = a × b + a × c. Here, 4 × (3 + 5) = 4 × 3 + 4 × 5 = 32. 📦",
        wrongAnswerExplanations: {
            "4 × (3 + 5) = 4 × 3 + 5": "This would be 12 + 5 = 17, not 32.",
            "4 × (3 + 5) = 4 + 3 × 5": "This would be 4 + 15 = 19, not 32.",
            "4 × (3 + 5) = 4 × 3 × 5": "This would be 60, not 32."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch1_t2_qm3',
        type: "mcq",
        question: "If a = -4, b = 2, and c = -3, what is the value of a × (b + c) using the distributive property?",
        options: ["4", "-4", "20", "-20"],
        correctAnswer: "4",
        explanation: "Using distributive property: -4 × (2 + (-3)) = -4 × (-1) = 4. ✖️➕",
        wrongAnswerExplanations: {
            "-4": "This would be the result of -4 × 1, not considering the correct sum.",
            "20": "This would be the result of 4 × 5, not considering the signs.",
            "-20": "This would be the result of -4 × 5, not considering the correct sum."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch1_t2_qm4',
        type: "mcq",
        question: "Which of these statements about integer properties is FALSE?",
        options: [
            "Subtraction is commutative",
            "Division is not closed",
            "Addition is associative",
            "Multiplication is distributive over addition"
        ],
        correctAnswer: "Subtraction is commutative",
        explanation: "Subtraction is NOT commutative. For example, 5 - 3 ≠ 3 - 5. ❌",
        wrongAnswerExplanations: {
            "Division is not closed": "This is true. Division of integers may result in non-integers.",
            "Addition is associative": "This is true. The grouping doesn't matter in addition.",
            "Multiplication is distributive over addition": "This is true. a × (b + c) = a × b + a × c."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch1_t2_qm5',
        type: "mcq",
        question: "What is the value of (-3) × (4 - 2) using the distributive property?",
        options: ["-6", "6", "-18", "18"],
        correctAnswer: "-6",
        explanation: "Using distributive property: -3 × (4 - 2) = -3 × 4 - -3 × 2 = -12 + 6 = -6. ✖️➖",
        wrongAnswerExplanations: {
            "6": "This would be the result of 3 × (4 - 2).",
            "-18": "This would be the result of -3 × 6.",
            "18": "This would be the result of 3 × 6."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch1_t2_qm6',
        type: "mcq",
        question: "If a = 5, b = -3, and c = 2, what is the value of (a + b) + c using the associative property?",
        options: ["4", "0", "6", "10"],
        correctAnswer: "4",
        explanation: "Using associative property: (5 + (-3)) + 2 = 5 + (-3 + 2) = 4. The grouping doesn't matter in addition. ➕",
        wrongAnswerExplanations: {
            "0": "This would be the result of 5 + (-3) + (-2).",
            "6": "This would be the result of 5 + 3 + (-2).",
            "10": "This would be the result of 5 + 3 + 2."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch1_t2_qm7',
        type: "mcq",
        question: "Which of these expressions demonstrates the commutative property of multiplication?",
        options: [
            "4 × (3 + 5) = 4 × 3 + 4 × 5",
            "4 × 3 = 3 × 4",
            "(4 × 3) × 5 = 4 × (3 × 5)",
            "4 × (3 - 5) = 4 × 3 - 4 × 5"
        ],
        correctAnswer: "4 × 3 = 3 × 4",
        explanation: "The commutative property of multiplication states that a × b = b × a. Here, 4 × 3 = 3 × 4 = 12. 🔄",
        wrongAnswerExplanations: {
            "4 × (3 + 5) = 4 × 3 + 4 × 5": "This demonstrates the distributive property.",
            "(4 × 3) × 5 = 4 × (3 × 5)": "This demonstrates the associative property.",
            "4 × (3 - 5) = 4 × 3 - 4 × 5": "This demonstrates the distributive property."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch1_t2_qm8',
        type: "mcq",
        question: "What is the value of (-2) × (3 + (-5)) using the distributive property?",
        options: ["4", "-4", "16", "-16"],
        correctAnswer: "4",
        explanation: "Using distributive property: -2 × (3 + (-5)) = -2 × (-2) = 4. ✖️➕",
        wrongAnswerExplanations: {
            "-4": "This would be the result of 2 × (-2).",
            "16": "This would be the result of -2 × (-8).",
            "-16": "This would be the result of 2 × (-8)."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch1_t2_qm9',
        type: "mcq",
        question: "Which of these operations is NOT closed under integers?",
        options: ["Addition", "Subtraction", "Multiplication", "Division"],
        correctAnswer: "Division",
        explanation: "Division is not closed under integers because sometimes the result is not an integer (e.g., 5 ÷ 2 = 2.5). ➗",
        wrongAnswerExplanations: {
            "Addition": "Addition is closed under integers. The sum of any two integers is always an integer.",
            "Subtraction": "Subtraction is closed under integers. The difference of any two integers is always an integer.",
            "Multiplication": "Multiplication is closed under integers. The product of any two integers is always an integer."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch1_t2_qm10',
        type: "mcq",
        question: "If a = -3, b = 4, and c = -2, what is the value of a × (b × c) using the associative property?",
        options: ["-24", "24", "-10", "10"],
        correctAnswer: "24",
        explanation: "Using associative property: -3 × (4 × -2) = (-3 × 4) × -2 = 24. The grouping doesn't matter in multiplication. ✖️",
        wrongAnswerExplanations: {
            "-24": "This would be the result of -3 × 4 × 2, not considering the negative sign of c.",
            "-10": "This would be the result of -3 + 4 + -2, not multiplication.",
            "10": "This would be the result of 3 × 4 - 2, not considering the correct operation."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch1_t2_qm11',
        type: "mcq",
        question: "Which of these expressions demonstrates the associative property of addition?",
        options: [
            "2 + 3 = 3 + 2",
            "(2 + 3) + 4 = 2 + (3 + 4)",
            "2 × (3 + 4) = 2 × 3 + 2 × 4",
            "2 + 0 = 2"
        ],
        correctAnswer: "(2 + 3) + 4 = 2 + (3 + 4)",
        explanation: "The associative property of addition states that (a + b) + c = a + (b + c). Here, (2 + 3) + 4 = 2 + (3 + 4) = 9. 🔗",
        wrongAnswerExplanations: {
            "2 + 3 = 3 + 2": "This demonstrates the commutative property.",
            "2 × (3 + 4) = 2 × 3 + 2 × 4": "This demonstrates the distributive property.",
            "2 + 0 = 2": "This demonstrates the additive identity property."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch1_t2_qm12',
        type: "mcq",
        question: "What is the value of (-4) × (5 - 3) using the distributive property?",
        options: ["-8", "8", "-32", "32"],
        correctAnswer: "-8",
        explanation: "Using distributive property: -4 × (5 - 3) = -4 × 5 - -4 × 3 = -20 + 12 = -8. ✖️➖",
        wrongAnswerExplanations: {
            "8": "This would be the result of 4 × (5 - 3).",
            "-32": "This would be the result of -4 × 8.",
            "32": "This would be the result of 4 × 8."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch1_t2_qm13',
        type: "mcq",
        question: "Which of these statements about integer properties is TRUE?",
        options: [
            "Subtraction is associative",
            "Division is closed",
            "Addition is commutative",
            "Multiplication is not distributive over addition"
        ],
        correctAnswer: "Addition is commutative",
        explanation: "Addition is commutative for integers. The order of numbers doesn't matter in addition. ➕",
        wrongAnswerExplanations: {
            "Subtraction is associative": "Subtraction is not associative. The grouping matters.",
            "Division is closed": "Division is not closed under integers.",
            "Multiplication is not distributive over addition": "Multiplication is distributive over addition."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch1_t2_qm14',
        type: "mcq",
        question: "If a = 6, b = -2, and c = 3, what is the value of (a × b) × c using the associative property?",
        options: ["-36", "36", "-12", "12"],
        correctAnswer: "-36",
        explanation: "Using associative property: (6 × -2) × 3 = 6 × (-2 × 3) = -36. The grouping doesn't matter in multiplication. ✖️",
        wrongAnswerExplanations: {
            "36": "This would be the result of 6 × 2 × 3, not considering the negative sign.",
            "-12": "This would be the result of 6 + (-2) + 3, not multiplication.",
            "12": "This would be the result of 6 × 2, not considering all numbers."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch1_t2_qm15',
        type: "mcq",
        question: "Which of these expressions demonstrates the distributive property correctly?",
        options: [
            "3 × (4 - 2) = 3 × 4 - 2",
            "3 × (4 - 2) = 3 + 4 × 2",
            "3 × (4 - 2) = 3 × 4 - 3 × 2",
            "3 × (4 - 2) = 3 × 4 × 2"
        ],
        correctAnswer: "3 × (4 - 2) = 3 × 4 - 3 × 2",
        explanation: "The distributive property states that a × (b - c) = a × b - a × c. Here, 3 × (4 - 2) = 3 × 4 - 3 × 2 = 6. 📦",
        wrongAnswerExplanations: {
            "3 × (4 - 2) = 3 × 4 - 2": "This would be 12 - 2 = 10, not 6.",
            "3 × (4 - 2) = 3 + 4 × 2": "This would be 3 + 8 = 11, not 6.",
            "3 × (4 - 2) = 3 × 4 × 2": "This would be 24, not 6."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch1_t2_qm16',
        type: "mcq",
        question: "What is the value of (-5) × (2 + (-3)) using the distributive property?",
        options: ["5", "-5", "25", "-25"],
        correctAnswer: "5",
        explanation: "Using distributive property: -5 × (2 + (-3)) = -5 × (-1) = 5. ✖️➕",
        wrongAnswerExplanations: {
            "-5": "This would be the result of 5 × (-1).",
            "25": "This would be the result of -5 × (-5).",
            "-25": "This would be the result of 5 × (-5)."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch1_t2_qm17',
        type: "mcq",
        question: "Which of these operations is NOT associative?",
        options: ["Addition", "Subtraction", "Multiplication", "All of the above"],
        correctAnswer: "Subtraction",
        explanation: "Subtraction is not associative. For example, (8 - 4) - 2 ≠ 8 - (4 - 2). ❌",
        wrongAnswerExplanations: {
            "Addition": "Addition is associative. The grouping doesn't matter.",
            "Multiplication": "Multiplication is associative. The grouping doesn't matter.",
            "All of the above": "Only subtraction is not associative among these operations."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch1_t2_qm18',
        type: "mcq",
        question: "If a = -2, b = 5, and c = -3, what is the value of a × (b + c) using the distributive property?",
        options: ["-4", "4", "-16", "16"],
        correctAnswer: "-4",
        explanation: "Using distributive property: -2 × (5 + (-3)) = -2 × 2 = -4. ✖️➕",
        wrongAnswerExplanations: {
            "4": "This would be the result of 2 × 2.",
            "-16": "This would be the result of -2 × 8.",
            "16": "This would be the result of 2 × 8."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch1_t2_qm19',
        type: "mcq",
        question: "Which of these expressions demonstrates the commutative property of addition?",
        options: [
            "2 + (3 + 4) = (2 + 3) + 4",
            "2 + 3 = 3 + 2",
            "2 × (3 + 4) = 2 × 3 + 2 × 4",
            "2 + 0 = 2"
        ],
        correctAnswer: "2 + 3 = 3 + 2",
        explanation: "The commutative property of addition states that a + b = b + a. Here, 2 + 3 = 3 + 2 = 5. 🔄",
        wrongAnswerExplanations: {
            "2 + (3 + 4) = (2 + 3) + 4": "This demonstrates the associative property.",
            "2 × (3 + 4) = 2 × 3 + 2 × 4": "This demonstrates the distributive property.",
            "2 + 0 = 2": "This demonstrates the additive identity property."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch1_t2_qm20',
        type: "mcq",
        question: "What is the value of (-3) × (4 - 5) using the distributive property?",
        options: ["3", "-3", "27", "-27"],
        correctAnswer: "3",
        explanation: "Using distributive property: -3 × (4 - 5) = -3 × 4 - -3 × 5 = -12 + 15 = 3. ✖️➖",
        wrongAnswerExplanations: {
            "-3": "This would be the result of 3 × (-1).",
            "27": "This would be the result of -3 × (-9).",
            "-27": "This would be the result of 3 × (-9)."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    }
]; 