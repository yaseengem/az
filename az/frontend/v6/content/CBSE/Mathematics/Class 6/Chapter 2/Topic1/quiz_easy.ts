import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl6_ch2_t1_qe1',
        type: "mcq",
        question: "Which of the following is NOT a whole number?",
        options: ["0", "1", "-2", "10"],
        correctAnswer: "-2",
        explanation: "Whole numbers start from 0 and include all positive integers. -2 is a negative integer, not a whole number. 🔢",
        wrongAnswerExplanations: {
            "0": "0 is the smallest whole number.",
            "1": "1 is a whole number as it's a positive integer.",
            "10": "10 is a whole number as it's a positive integer."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch2_t1_qe2',
        type: "mcq",
        question: "Which property states that 5 + 8 = 8 + 5?",
        options: ["Associative Property", "Commutative Property", "Distributive Property", "Closure Property"],
        correctAnswer: "Commutative Property",
        explanation: "The commutative property states that changing the order of numbers in addition doesn't affect the result: a + b = b + a. 🔄",
        wrongAnswerExplanations: {
            "Associative Property": "Associative property refers to grouping: (a + b) + c = a + (b + c).",
            "Distributive Property": "Distributive property relates multiplication to addition: a × (b + c) = (a × b) + (a × c).",
            "Closure Property": "Closure property states that the sum of two whole numbers is always a whole number."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch2_t1_qe3',
        type: "mcq",
        question: "Which operation is NOT closed for whole numbers?",
        options: ["Addition", "Multiplication", "Subtraction", "All of these are closed"],
        correctAnswer: "Subtraction",
        explanation: "Subtraction is not closed for whole numbers because the result might not be a whole number. For example, 3 - 7 = -4, which is not a whole number. ➖",
        wrongAnswerExplanations: {
            "Addition": "Addition is closed for whole numbers: any two whole numbers added together give another whole number.",
            "Multiplication": "Multiplication is closed for whole numbers: any two whole numbers multiplied together give another whole number.",
            "All of these are closed": "Subtraction is not closed for whole numbers."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch2_t1_qe4',
        type: "mcq",
        question: "What is the smallest whole number?",
        options: ["1", "0", "-1", "There is no smallest whole number"],
        correctAnswer: "0",
        explanation: "The smallest whole number is 0. Whole numbers include 0 and all positive integers. 0️⃣",
        wrongAnswerExplanations: {
            "1": "1 is the smallest natural number, but not the smallest whole number.",
            "-1": "-1 is a negative integer, not a whole number.",
            "There is no smallest whole number": "There is a smallest whole number, which is 0."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch2_t1_qe5',
        type: "mcq",
        question: "In the addition of whole numbers, which number acts as the identity element?",
        options: ["1", "0", "10", "-1"],
        correctAnswer: "0",
        explanation: "0 is the additive identity for whole numbers, as adding 0 to any number leaves it unchanged: a + 0 = a = 0 + a. ⭐",
        wrongAnswerExplanations: {
            "1": "1 is the multiplicative identity, not the additive identity.",
            "10": "10 is not an identity element for any standard operation on whole numbers.",
            "-1": "-1 is not a whole number and not an identity element."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch2_t1_qe6',
        type: "mcq",
        question: "What property is shown by (3 + 4) + 2 = 3 + (4 + 2)?",
        options: ["Commutative Property", "Associative Property", "Distributive Property", "Identity Property"],
        correctAnswer: "Associative Property",
        explanation: "The associative property states that the grouping of numbers in addition doesn't affect the result: (a + b) + c = a + (b + c). 🧩",
        wrongAnswerExplanations: {
            "Commutative Property": "Commutative property refers to order: a + b = b + a.",
            "Distributive Property": "Distributive property relates multiplication to addition: a × (b + c) = (a × b) + (a × c).",
            "Identity Property": "Identity property involves adding zero or multiplying by one."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch2_t1_qe7',
        type: "mcq",
        question: "What is the multiplicative identity for whole numbers?",
        options: ["0", "1", "10", "Any whole number"],
        correctAnswer: "1",
        explanation: "1 is the multiplicative identity because multiplying any number by 1 leaves it unchanged: a × 1 = a = 1 × a. 1️⃣",
        wrongAnswerExplanations: {
            "0": "0 is the additive identity, not the multiplicative identity.",
            "10": "10 is not an identity element for any standard operation.",
            "Any whole number": "Only 1 has the property that a × 1 = a for any whole number a."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch2_t1_qe8',
        type: "mcq",
        question: "What property is shown by 4 × (5 + 2) = (4 × 5) + (4 × 2)?",
        options: ["Closure Property", "Associative Property", "Distributive Property", "Commutative Property"],
        correctAnswer: "Distributive Property",
        explanation: "The distributive property states that multiplication distributes over addition: a × (b + c) = (a × b) + (a × c). 📊",
        wrongAnswerExplanations: {
            "Closure Property": "Closure property relates to whether operations keep you within a number system.",
            "Associative Property": "Associative property refers to grouping in a single operation: (a + b) + c = a + (b + c).",
            "Commutative Property": "Commutative property refers to order: a + b = b + a or a × b = b × a."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch2_t1_qe9',
        type: "mcq",
        question: "What is the result of any whole number multiplied by zero?",
        options: ["1", "The number itself", "0", "Undefined"],
        correctAnswer: "0",
        explanation: "Multiplying any number by zero always results in zero: a × 0 = 0 = 0 × a. This is called the zero property of multiplication. 0️⃣",
        wrongAnswerExplanations: {
            "1": "Multiplying by 1, not 0, gives the number itself.",
            "The number itself": "This is the result of multiplying by 1, not by 0.",
            "Undefined": "Multiplication by 0 is well-defined and always gives 0."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch2_t1_qe10',
        type: "mcq",
        question: "If 6 × 7 = 42, then 7 × 6 must equal:",
        options: ["14", "42", "13", "36"],
        correctAnswer: "42",
        explanation: "By the commutative property of multiplication, changing the order doesn't affect the result: a × b = b × a. Therefore, 7 × 6 = 6 × 7 = 42. 🔄",
        wrongAnswerExplanations: {
            "14": "This is incorrect. The commutative property ensures that 7 × 6 = 6 × 7 = 42.",
            "13": "This is incorrect. The commutative property ensures that 7 × 6 = 6 × 7 = 42.",
            "36": "This is incorrect. The commutative property ensures that 7 × 6 = 6 × 7 = 42."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch2_t1_qe11',
        type: "mcq",
        question: "Which operation with whole numbers might give a result that is not a whole number?",
        options: ["Addition", "Multiplication", "Division", "Addition followed by multiplication"],
        correctAnswer: "Division",
        explanation: "Division of whole numbers might not result in a whole number. For example, 5 ÷ 2 = 2.5, which is not a whole number. ➗",
        wrongAnswerExplanations: {
            "Addition": "Addition of whole numbers always gives a whole number (closure property).",
            "Multiplication": "Multiplication of whole numbers always gives a whole number (closure property).",
            "Addition followed by multiplication": "These operations maintain the closure property."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch2_t1_qe12',
        type: "mcq",
        question: "According to the associative property of multiplication, which of these is correct?",
        options: ["(2 × 3) × 4 = 2 × (4 × 3)", "(2 × 3) × 4 = 2 × (3 × 4)", "(2 × 3) × 4 = (3 × 4) × 2", "None of these"],
        correctAnswer: "(2 × 3) × 4 = 2 × (3 × 4)",
        explanation: "The associative property states that (a × b) × c = a × (b × c). The way numbers are grouped doesn't change the result. 📐",
        wrongAnswerExplanations: {
            "(2 × 3) × 4 = 2 × (4 × 3)": "This combines associative and commutative properties, not just associative.",
            "(2 × 3) × 4 = (3 × 4) × 2": "This combines associative and commutative properties, not just associative.",
            "None of these": "The second option correctly represents the associative property."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch2_t1_qe13',
        type: "mcq",
        question: "Roma has 3 boxes, each containing 5 pencils. How many total pencils does she have?",
        options: ["8", "15", "3", "35"],
        correctAnswer: "15",
        explanation: "Roma has 3 × 5 = 15 pencils in total. This problem demonstrates multiplication as repeated addition: 5 + 5 + 5 = 15. ✏️",
        wrongAnswerExplanations: {
            "8": "This is 3 + 5, not 3 × 5.",
            "3": "This is the number of boxes, not the total number of pencils.",
            "35": "This incorrectly places the digits side by side instead of multiplying."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch2_t1_qe14',
        type: "mcq",
        question: "What is the additive identity property?",
        options: ["a + a = 2a", "a + 0 = a", "a + 1 = a + 1", "a + b = b + a"],
        correctAnswer: "a + 0 = a",
        explanation: "The additive identity property states that adding zero to any number gives the number itself: a + 0 = a. Zero is the additive identity. ⭐",
        wrongAnswerExplanations: {
            "a + a = 2a": "This is not a named property, just a basic arithmetic fact.",
            "a + 1 = a + 1": "This is just a statement of equality, not a property.",
            "a + b = b + a": "This is the commutative property, not the identity property."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch2_t1_qe15',
        type: "mcq",
        question: "If 4 + □ = 4, what number goes in the box?",
        options: ["4", "1", "0", "-4"],
        correctAnswer: "0",
        explanation: "By the additive identity property, a + 0 = a. So 4 + 0 = 4, meaning 0 goes in the box. 🎁",
        wrongAnswerExplanations: {
            "4": "4 + 4 = 8, not 4.",
            "1": "4 + 1 = 5, not 4.",
            "-4": "4 + (-4) = 0, not 4. Also, -4 is not a whole number."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch2_t1_qe16',
        type: "mcq",
        question: "Which property is shown by 5 × 0 = 0?",
        options: ["Zero property of multiplication", "Commutative property", "Identity property", "Associative property"],
        correctAnswer: "Zero property of multiplication",
        explanation: "The zero property of multiplication states that any number multiplied by zero equals zero: a × 0 = 0 = 0 × a. 0️⃣",
        wrongAnswerExplanations: {
            "Commutative property": "Commutative property refers to order: a × b = b × a.",
            "Identity property": "Identity property involves multiplication by one, not zero.",
            "Associative property": "Associative property refers to grouping: (a × b) × c = a × (b × c)."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch2_t1_qe17',
        type: "mcq",
        question: "If □ × 9 = 9, what number goes in the box?",
        options: ["0", "1", "9", "81"],
        correctAnswer: "1",
        explanation: "By the multiplicative identity property, 1 × a = a. So 1 × 9 = 9, meaning 1 goes in the box. 1️⃣",
        wrongAnswerExplanations: {
            "0": "0 × 9 = 0, not 9.",
            "9": "9 × 9 = 81, not 9.",
            "81": "81 × 9 = 729, not 9."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch2_t1_qe18',
        type: "mcq",
        question: "Which of the following is NOT a property of whole numbers under addition?",
        options: ["Closure property", "Commutative property", "Associative property", "Division property"],
        correctAnswer: "Division property",
        explanation: "There is no 'division property' for addition of whole numbers. The main properties are closure, commutative, associative, and identity properties. ➕",
        wrongAnswerExplanations: {
            "Closure property": "Closure property is valid for addition of whole numbers.",
            "Commutative property": "Commutative property is valid for addition of whole numbers.",
            "Associative property": "Associative property is valid for addition of whole numbers."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch2_t1_qe19',
        type: "mcq",
        question: "What property does 2 × (3 × 4) = (2 × 3) × 4 show?",
        options: ["Commutative property of multiplication", "Associative property of multiplication", "Distributive property", "Identity property"],
        correctAnswer: "Associative property of multiplication",
        explanation: "This shows the associative property of multiplication: (a × b) × c = a × (b × c). The grouping doesn't affect the result. 🧮",
        wrongAnswerExplanations: {
            "Commutative property of multiplication": "Commutative property refers to order: a × b = b × a.",
            "Distributive property": "Distributive property relates multiplication to addition: a × (b + c) = (a × b) + (a × c).",
            "Identity property": "Identity property involves adding zero or multiplying by one."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch2_t1_qe20',
        type: "mcq",
        question: "Using the distributive property, what is 7 × (10 + 3)?",
        options: ["730", "70 + 21", "70 + 3", "91"],
        correctAnswer: "91",
        explanation: "Using the distributive property: 7 × (10 + 3) = (7 × 10) + (7 × 3) = 70 + 21 = 91. The answer is 91. 📝",
        wrongAnswerExplanations: {
            "730": "This incorrectly places the digits side by side instead of using the distributive property.",
            "70 + 21": "This is the partial calculation. The final answer is 91.",
            "70 + 3": "This incorrectly multiplies only the first term and adds the second term without multiplying."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    }
];
