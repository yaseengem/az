import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl7_ch1_t2_qe1',
        type: "mcq",
        question: "Which property of integers is demonstrated by the equation 5 + (-3) = (-3) + 5?",
        options: ["Closure Property", "Commutative Property", "Associative Property", "Distributive Property"],
        correctAnswer: "Commutative Property",
        explanation: "The commutative property states that the order of numbers doesn't matter in addition. Here, 5 + (-3) = (-3) + 5 = 2. 🔄",
        wrongAnswerExplanations: {
            "Closure Property": "Closure property tells us if the result is an integer, not about the order of numbers.",
            "Associative Property": "Associative property is about grouping numbers, not their order.",
            "Distributive Property": "Distributive property connects multiplication with addition/subtraction."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch1_t2_qe2',
        type: "mcq",
        question: "Which operation is NOT closed under integers?",
        options: ["Addition", "Subtraction", "Multiplication", "Division"],
        correctAnswer: "Division",
        explanation: "Division is not closed under integers because sometimes the result is not an integer (e.g., 5 ÷ 2 = 2.5). ➗",
        wrongAnswerExplanations: {
            "Addition": "Addition is closed under integers. The sum of any two integers is always an integer.",
            "Subtraction": "Subtraction is closed under integers. The difference of any two integers is always an integer.",
            "Multiplication": "Multiplication is closed under integers. The product of any two integers is always an integer."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch1_t2_qe3',
        type: "mcq",
        question: "Which property is shown by the equation (2 + 3) + 4 = 2 + (3 + 4)?",
        options: ["Closure Property", "Commutative Property", "Associative Property", "Distributive Property"],
        correctAnswer: "Associative Property",
        explanation: "The associative property states that the grouping of numbers doesn't matter in addition. Here, (2 + 3) + 4 = 2 + (3 + 4) = 9. 🔗",
        wrongAnswerExplanations: {
            "Closure Property": "Closure property tells us if the result is an integer.",
            "Commutative Property": "Commutative property is about the order of numbers.",
            "Distributive Property": "Distributive property connects multiplication with addition/subtraction."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch1_t2_qe4',
        type: "mcq",
        question: "Which of these operations is commutative?",
        options: ["Addition", "Subtraction", "Division", "All of the above"],
        correctAnswer: "Addition",
        explanation: "Addition is commutative because a + b = b + a for any integers a and b. For example, 5 + 3 = 3 + 5. ➕",
        wrongAnswerExplanations: {
            "Subtraction": "Subtraction is not commutative. For example, 5 - 3 ≠ 3 - 5.",
            "Division": "Division is not commutative. For example, 6 ÷ 2 ≠ 2 ÷ 6.",
            "All of the above": "Only addition is commutative among these operations."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch1_t2_qe5',
        type: "mcq",
        question: "What is the result of 3 × (4 + 5) using the distributive property?",
        options: ["12 + 15", "3 × 4 + 5", "3 + 4 × 5", "3 × 4 × 5"],
        correctAnswer: "12 + 15",
        explanation: "Using distributive property: 3 × (4 + 5) = 3 × 4 + 3 × 5 = 12 + 15 = 27. 📦",
        wrongAnswerExplanations: {
            "3 × 4 + 5": "This would be 12 + 5 = 17, which is incorrect.",
            "3 + 4 × 5": "This would be 3 + 20 = 23, which is incorrect.",
            "3 × 4 × 5": "This would be 60, which is incorrect."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch1_t2_qe6',
        type: "mcq",
        question: "Which property is demonstrated by the equation 4 × (5 - 3) = 4 × 5 - 4 × 3?",
        options: ["Closure Property", "Commutative Property", "Associative Property", "Distributive Property"],
        correctAnswer: "Distributive Property",
        explanation: "The distributive property shows that multiplication can be distributed over subtraction. Here, 4 × (5 - 3) = 4 × 5 - 4 × 3 = 8. ✖️➖",
        wrongAnswerExplanations: {
            "Closure Property": "Closure property tells us if the result is an integer, not about distribution.",
            "Commutative Property": "Commutative property is about the order of numbers.",
            "Associative Property": "Associative property is about grouping numbers."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch1_t2_qe7',
        type: "mcq",
        question: "If a = 5, b = -3, and c = 2, what is (a + b) + c?",
        options: ["4", "0", "6", "10"],
        correctAnswer: "4",
        explanation: "Using associative property: (5 + (-3)) + 2 = 2 + 2 = 4. The grouping doesn't matter in addition. ➕",
        wrongAnswerExplanations: {
            "0": "This would be the result of a different grouping.",
            "6": "This would be the result of adding all numbers without grouping.",
            "10": "This would be the result of multiplying instead of adding."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch1_t2_qe8',
        type: "mcq",
        question: "Which of these statements about integers is FALSE?",
        options: [
            "Addition is commutative",
            "Subtraction is associative",
            "Multiplication is commutative",
            "Division is not closed"
        ],
        correctAnswer: "Subtraction is associative",
        explanation: "Subtraction is NOT associative. For example, (8 - 4) - 2 ≠ 8 - (4 - 2). ❌",
        wrongAnswerExplanations: {
            "Addition is commutative": "This is true. Addition is commutative for integers.",
            "Multiplication is commutative": "This is true. Multiplication is commutative for integers.",
            "Division is not closed": "This is true. Division is not closed under integers."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch1_t2_qe9',
        type: "mcq",
        question: "What property allows us to write 2 × (3 + 4) as 2 × 3 + 2 × 4?",
        options: ["Closure Property", "Commutative Property", "Associative Property", "Distributive Property"],
        correctAnswer: "Distributive Property",
        explanation: "The distributive property allows us to distribute multiplication over addition. Here, 2 × (3 + 4) = 2 × 3 + 2 × 4 = 14. 📦",
        wrongAnswerExplanations: {
            "Closure Property": "Closure property tells us if the result is an integer.",
            "Commutative Property": "Commutative property is about the order of numbers.",
            "Associative Property": "Associative property is about grouping numbers."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch1_t2_qe10',
        type: "mcq",
        question: "Which operation is NOT associative?",
        options: ["Addition", "Subtraction", "Multiplication", "All of the above"],
        correctAnswer: "Subtraction",
        explanation: "Subtraction is not associative. For example, (8 - 4) - 2 = 2, but 8 - (4 - 2) = 6. ❌",
        wrongAnswerExplanations: {
            "Addition": "Addition is associative. The grouping doesn't matter.",
            "Multiplication": "Multiplication is associative. The grouping doesn't matter.",
            "All of the above": "Only subtraction is not associative among these operations."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch1_t2_qe11',
        type: "mcq",
        question: "If a = -2, b = 3, and c = -1, what is a × (b + c)?",
        options: ["-4", "4", "-8", "8"],
        correctAnswer: "-4",
        explanation: "Using distributive property: -2 × (3 + (-1)) = -2 × 2 = -4. ✖️➕",
        wrongAnswerExplanations: {
            "4": "This would be the result of -2 × (3 - (-1)).",
            "-8": "This would be the result of -2 × 3 + -2 × (-1).",
            "8": "This would be the result of 2 × (3 + 1)."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch1_t2_qe12',
        type: "mcq",
        question: "Which property is shown by the equation 4 × (-3) = (-3) × 4?",
        options: ["Closure Property", "Commutative Property", "Associative Property", "Distributive Property"],
        correctAnswer: "Commutative Property",
        explanation: "The commutative property states that the order of numbers doesn't matter in multiplication. Here, 4 × (-3) = (-3) × 4 = -12. 🔄",
        wrongAnswerExplanations: {
            "Closure Property": "Closure property tells us if the result is an integer, not about order.",
            "Associative Property": "Associative property is about grouping numbers, not their order.",
            "Distributive Property": "Distributive property connects multiplication with addition/subtraction."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch1_t2_qe13',
        type: "mcq",
        question: "What is the result of (2 × 3) × 4 using the associative property?",
        options: ["2 × (3 × 4)", "2 × 3 + 2 × 4", "3 × 2 × 4", "2 + 3 × 4"],
        correctAnswer: "2 × (3 × 4)",
        explanation: "Using associative property: (2 × 3) × 4 = 2 × (3 × 4) = 24. The grouping doesn't matter in multiplication. ✖️",
        wrongAnswerExplanations: {
            "2 × 3 + 2 × 4": "This would be using distributive property, not associative.",
            "3 × 2 × 4": "This would be using commutative property, not associative.",
            "2 + 3 × 4": "This would be a different operation entirely."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch1_t2_qe14',
        type: "mcq",
        question: "Which of these operations is closed under integers?",
        options: ["Addition", "Subtraction", "Multiplication", "All of the above"],
        correctAnswer: "All of the above",
        explanation: "Addition, subtraction, and multiplication are all closed under integers. The result of these operations on integers is always an integer. 🔒",
        wrongAnswerExplanations: {
            "Addition": "Addition is closed, but so are subtraction and multiplication.",
            "Subtraction": "Subtraction is closed, but so are addition and multiplication.",
            "Multiplication": "Multiplication is closed, but so are addition and subtraction."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch1_t2_qe15',
        type: "mcq",
        question: "What property allows us to write 5 + (-3) + 2 as 5 + 2 + (-3)?",
        options: ["Closure Property", "Commutative Property", "Associative Property", "Distributive Property"],
        correctAnswer: "Commutative Property",
        explanation: "The commutative property allows us to change the order of numbers in addition. Here, 5 + (-3) + 2 = 5 + 2 + (-3) = 4. 🔄",
        wrongAnswerExplanations: {
            "Closure Property": "Closure property tells us if the result is an integer.",
            "Associative Property": "Associative property is about grouping numbers.",
            "Distributive Property": "Distributive property connects multiplication with addition/subtraction."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch1_t2_qe16',
        type: "mcq",
        question: "Which operation is NOT commutative?",
        options: ["Addition", "Subtraction", "Multiplication", "All of the above"],
        correctAnswer: "Subtraction",
        explanation: "Subtraction is not commutative. For example, 5 - 3 ≠ 3 - 5. ❌",
        wrongAnswerExplanations: {
            "Addition": "Addition is commutative. The order doesn't matter.",
            "Multiplication": "Multiplication is commutative. The order doesn't matter.",
            "All of the above": "Only subtraction is not commutative among these operations."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch1_t2_qe17',
        type: "mcq",
        question: "What is the result of -3 × (2 - 4) using the distributive property?",
        options: ["-6 + 12", "-6 - 12", "6 - 12", "6 + 12"],
        correctAnswer: "-6 + 12",
        explanation: "Using distributive property: -3 × (2 - 4) = -3 × 2 - -3 × 4 = -6 + 12 = 6. ✖️➖",
        wrongAnswerExplanations: {
            "-6 - 12": "This would be -3 × (2 + 4).",
            "6 - 12": "This would be 3 × (2 - 4).",
            "6 + 12": "This would be 3 × (2 + 4)."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch1_t2_qe18',
        type: "mcq",
        question: "Which property is shown by the equation (2 + 3) + 4 = 2 + (3 + 4)?",
        options: ["Closure Property", "Commutative Property", "Associative Property", "Distributive Property"],
        correctAnswer: "Associative Property",
        explanation: "The associative property states that the grouping of numbers doesn't matter in addition. Here, (2 + 3) + 4 = 2 + (3 + 4) = 9. 🔗",
        wrongAnswerExplanations: {
            "Closure Property": "Closure property tells us if the result is an integer.",
            "Commutative Property": "Commutative property is about the order of numbers.",
            "Distributive Property": "Distributive property connects multiplication with addition/subtraction."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch1_t2_qe19',
        type: "mcq",
        question: "What is the result of 4 × (5 + 3) using the distributive property?",
        options: ["20 + 12", "4 × 5 + 3", "4 + 5 × 3", "4 × 5 × 3"],
        correctAnswer: "20 + 12",
        explanation: "Using distributive property: 4 × (5 + 3) = 4 × 5 + 4 × 3 = 20 + 12 = 32. 📦",
        wrongAnswerExplanations: {
            "4 × 5 + 3": "This would be 20 + 3 = 23, which is incorrect.",
            "4 + 5 × 3": "This would be 4 + 15 = 19, which is incorrect.",
            "4 × 5 × 3": "This would be 60, which is incorrect."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch1_t2_qe20',
        type: "mcq",
        question: "Which of these statements about integers is TRUE?",
        options: [
            "Subtraction is commutative",
            "Division is closed",
            "Addition is associative",
            "Multiplication is not commutative"
        ],
        correctAnswer: "Addition is associative",
        explanation: "Addition is associative for integers. The grouping of numbers doesn't matter in addition. ➕",
        wrongAnswerExplanations: {
            "Subtraction is commutative": "Subtraction is not commutative. The order matters.",
            "Division is closed": "Division is not closed under integers.",
            "Multiplication is not commutative": "Multiplication is commutative for integers."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    }
]; 