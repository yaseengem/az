import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl8_ch14_t3_qm1',
        type: "mcq",
        question: "Which property is being used in the following steps?\n2 × (15 + 8) = 2 × 15 + 2 × 8\n2 × 23 = 30 + 16\n2 × 23 = 46",
        options: ["Distributive property", "Associative property", "Commutative property", "Identity property"],
        correctAnswer: "Distributive property",
        explanation: "The distributive property is used to distribute multiplication over addition: a × (b + c) = (a × b) + (a × c). Here, 2 is distributed over (15 + 8). 📝",
        wrongAnswerExplanations: {
            "Associative property": "Associative property deals with grouping of three numbers in the same operation.",
            "Commutative property": "Commutative property deals with changing order of numbers.",
            "Identity property": "Identity property deals with operations involving 0 or 1."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch14_t3_qm2',
        type: "mcq",
        question: "If a = 3 and b = -2, which expression represents the additive inverse of (a + b)?",
        options: ["-(3 + (-2))", "(-3) + 2", "-3 - 2", "(-3) + (-2)"],
        correctAnswer: "-(3 + (-2))",
        explanation: "The additive inverse of (a + b) is -(a + b). Here, -(3 + (-2)) = -1 is the additive inverse of (3 + (-2)) = 1. 🎯",
        wrongAnswerExplanations: {
            "(-3) + 2": "This equals -1 but is not the additive inverse of (3 + (-2)).",
            "-3 - 2": "This equals -5, which is not the additive inverse of (3 + (-2)).",
            "(-3) + (-2)": "This equals -5, which is not the additive inverse of (3 + (-2))."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch14_t3_qm3',
        type: "mcq",
        question: "Which property is demonstrated by the equation: (x + y)² = x² + 2xy + y²?",
        options: ["Distributive property", "Commutative property", "Associative property", "Identity property"],
        correctAnswer: "Distributive property",
        explanation: "The distributive property is used multiple times to expand (x + y)² = (x + y)(x + y) = x² + xy + yx + y² = x² + 2xy + y². 🔢",
        wrongAnswerExplanations: {
            "Commutative property": "While commutativity is used (xy = yx), the main property being demonstrated is distribution.",
            "Associative property": "Associative property deals with grouping of three numbers.",
            "Identity property": "Identity property deals with operations involving 0 or 1."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch14_t3_qm4',
        type: "mcq",
        question: "Which expression shows both commutative and associative properties of multiplication?",
        options: ["(2 × 3) × 4 = 2 × (4 × 3)", "2 × (3 + 4) = (3 + 4) × 2", "(2 + 3) × 4 = 2 × 4 + 3 × 4", "2 × (3 × 4) = (2 × 3) × 4"],
        correctAnswer: "(2 × 3) × 4 = 2 × (4 × 3)",
        explanation: "This shows both commutative (3 × 4 = 4 × 3) and associative ((2 × 3) × 4 = 2 × (3 × 4)) properties. 🔄",
        wrongAnswerExplanations: {
            "2 × (3 + 4) = (3 + 4) × 2": "This shows only commutative property.",
            "(2 + 3) × 4 = 2 × 4 + 3 × 4": "This shows distributive property.",
            "2 × (3 × 4) = (2 × 3) × 4": "This shows only associative property."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch14_t3_qm5',
        type: "mcq",
        question: "If a ÷ b = c, which property is used to write b × c = a?",
        options: ["Multiplicative inverse property", "Commutative property", "Distributive property", "Identity property"],
        correctAnswer: "Multiplicative inverse property",
        explanation: "The multiplicative inverse property allows us to convert division to multiplication: if a ÷ b = c, then b × c = a. ✖️",
        wrongAnswerExplanations: {
            "Commutative property": "Commutative property deals with order of operations, not converting division to multiplication.",
            "Distributive property": "Distributive property deals with distributing multiplication over addition.",
            "Identity property": "Identity property deals with operations involving 0 or 1."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch14_t3_qm6',
        type: "mcq",
        question: "Which property explains why (-3) × (-2) × (-4) = -24?",
        options: [
            "Product of three negative numbers is negative",
            "Product of odd number of negative numbers is negative",
            "Product of even number of negative numbers is positive",
            "Product of any number of negative numbers is negative"
        ],
        correctAnswer: "Product of odd number of negative numbers is negative",
        explanation: "When multiplying an odd number of negative numbers, the result is negative. Here, three negative numbers multiply to give a negative result. ➕",
        wrongAnswerExplanations: {
            "Product of three negative numbers is negative": "This is true but doesn't explain the general rule.",
            "Product of even number of negative numbers is positive": "This is true but doesn't apply to this case.",
            "Product of any number of negative numbers is negative": "This is incorrect as even number of negative numbers give positive result."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch14_t3_qm7',
        type: "mcq",
        question: "Which property is used to solve: 3x + 2x = 5x?",
        options: [
            "Distributive property",
            "Like terms property",
            "Commutative property",
            "Associative property"
        ],
        correctAnswer: "Like terms property",
        explanation: "The like terms property (based on distributive property) allows us to combine terms with same variables: (3 + 2)x = 5x. 📊",
        wrongAnswerExplanations: {
            "Distributive property": "While this is related, the specific property being used is the combining of like terms.",
            "Commutative property": "Commutative property deals with order of operations.",
            "Associative property": "Associative property deals with grouping of three or more numbers."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch14_t3_qm8',
        type: "mcq",
        question: "Which property is being used when we write: 5 × (1/5) = 1?",
        options: [
            "Multiplicative inverse property",
            "Multiplicative identity property",
            "Reciprocal property",
            "Commutative property"
        ],
        correctAnswer: "Multiplicative inverse property",
        explanation: "The multiplicative inverse property states that a number multiplied by its reciprocal equals 1. Here, 1/5 is the multiplicative inverse of 5. ✖️",
        wrongAnswerExplanations: {
            "Multiplicative identity property": "This property involves multiplication by 1, not finding what multiplies to give 1.",
            "Reciprocal property": "While 1/5 is the reciprocal of 5, the property being used is multiplicative inverse.",
            "Commutative property": "Commutative property deals with order of operations."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch14_t3_qm9',
        type: "mcq",
        question: "Which property explains why we can write: (a - b) + (b - c) = (a - c)?",
        options: [
            "Cancellation property",
            "Commutative property",
            "Associative property",
            "Distributive property"
        ],
        correctAnswer: "Cancellation property",
        explanation: "The cancellation property allows us to cancel out +b and -b when adding expressions, leaving us with a - c. 🔢",
        wrongAnswerExplanations: {
            "Commutative property": "While order matters, the key property is cancellation of like terms with opposite signs.",
            "Associative property": "Associative property deals with grouping of three numbers.",
            "Distributive property": "Distributive property deals with distributing multiplication over addition."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch14_t3_qm10',
        type: "mcq",
        question: "Which property is used to solve: (2 × 5) × (3 × 4) = 2 × (5 × 3) × 4?",
        options: [
            "Both commutative and associative properties",
            "Only commutative property",
            "Only associative property",
            "Distributive property"
        ],
        correctAnswer: "Both commutative and associative properties",
        explanation: "We use associative property to regroup numbers and commutative property to change their order: (2×5)×(3×4) = 2×(5×3)×4. 🔄",
        wrongAnswerExplanations: {
            "Only commutative property": "We need both properties - commutative to change order and associative to regroup.",
            "Only associative property": "We need both properties - not just regrouping.",
            "Distributive property": "This property involves distributing multiplication over addition."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch14_t3_qm11',
        type: "mcq",
        question: "Which property is demonstrated by: (x + y)(x - y) = x² - y²?",
        options: [
            "Difference of squares property",
            "Distributive property",
            "Commutative property",
            "Associative property"
        ],
        correctAnswer: "Difference of squares property",
        explanation: "The difference of squares property states that (a + b)(a - b) = a² - b². Here, it's applied with x and y. 📝",
        wrongAnswerExplanations: {
            "Distributive property": "While distribution is used in the process, the overall pattern is the difference of squares.",
            "Commutative property": "Commutative property deals with order of operations.",
            "Associative property": "Associative property deals with grouping of three numbers."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch14_t3_qm12',
        type: "mcq",
        question: "Which property allows us to write: 2(x + 3) - 3(x + 3) = -1(x + 3)?",
        options: [
            "Distributive property with like terms",
            "Only distributive property",
            "Only like terms property",
            "Commutative property"
        ],
        correctAnswer: "Distributive property with like terms",
        explanation: "First we use distributive property to factor out (x + 3), then combine coefficients: (2 - 3)(x + 3) = -1(x + 3). 🎯",
        wrongAnswerExplanations: {
            "Only distributive property": "We need both distribution and combining like terms.",
            "Only like terms property": "We need both distribution and combining like terms.",
            "Commutative property": "Commutative property deals with order of operations."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch14_t3_qm13',
        type: "mcq",
        question: "Which property explains why (a + b + c) + (-c) = a + b?",
        options: [
            "Additive inverse with associative property",
            "Only additive inverse property",
            "Only associative property",
            "Commutative property"
        ],
        correctAnswer: "Additive inverse with associative property",
        explanation: "We use associative property to group c and -c together, then additive inverse property as c + (-c) = 0. 🔢",
        wrongAnswerExplanations: {
            "Only additive inverse property": "We need both properties - associative to group terms and additive inverse.",
            "Only associative property": "We need both associative and additive inverse properties.",
            "Commutative property": "While order matters, the key properties are associative and additive inverse."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch14_t3_qm14',
        type: "mcq",
        question: "Which property is used to solve: 3(x + 2) = 3x + 6?",
        options: [
            "Distributive property",
            "Associative property",
            "Commutative property",
            "Identity property"
        ],
        correctAnswer: "Distributive property",
        explanation: "The distributive property allows us to distribute 3 over (x + 2): 3(x + 2) = 3x + 3(2) = 3x + 6. 📊",
        wrongAnswerExplanations: {
            "Associative property": "Associative property deals with grouping of three numbers in the same operation.",
            "Commutative property": "Commutative property deals with order of operations.",
            "Identity property": "Identity property deals with operations involving 0 or 1."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch14_t3_qm15',
        type: "mcq",
        question: "Which property is being used when we write: (-2)(-3)(-4) = (-2)(-12)?",
        options: [
            "Associative property of multiplication",
            "Commutative property",
            "Distributive property",
            "Identity property"
        ],
        correctAnswer: "Associative property of multiplication",
        explanation: "The associative property allows us to multiply (-3) and (-4) first: (-2)((-3)(-4)) = (-2)(-12). 🔢",
        wrongAnswerExplanations: {
            "Commutative property": "While order could be changed, the key property is associative for grouping.",
            "Distributive property": "Distributive property deals with distributing multiplication over addition.",
            "Identity property": "Identity property deals with operations involving 0 or 1."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch14_t3_qm16',
        type: "mcq",
        question: "Which property explains why 5 × (1/2) × 2 = 5 × 1 = 5?",
        options: [
            "Multiplicative inverse with associative property",
            "Only multiplicative inverse property",
            "Only associative property",
            "Identity property"
        ],
        correctAnswer: "Multiplicative inverse with associative property",
        explanation: "We use associative property to group 1/2 and 2 together, then multiplicative inverse as (1/2 × 2 = 1). ✖️",
        wrongAnswerExplanations: {
            "Only multiplicative inverse property": "We need both properties - associative to group terms and multiplicative inverse.",
            "Only associative property": "We need both associative and multiplicative inverse properties.",
            "Identity property": "While we get to the identity 1, the key properties are associative and multiplicative inverse."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch14_t3_qm17',
        type: "mcq",
        question: "Which property is demonstrated by: (a + b)(a + b) = a² + 2ab + b²?",
        options: [
            "Perfect square property",
            "Distributive property",
            "Commutative property",
            "Associative property"
        ],
        correctAnswer: "Perfect square property",
        explanation: "The perfect square property states that (a + b)² = a² + 2ab + b². This is a special case of distribution. 🎯",
        wrongAnswerExplanations: {
            "Distributive property": "While distribution is used in the process, the overall pattern is the perfect square.",
            "Commutative property": "Commutative property deals with order of operations.",
            "Associative property": "Associative property deals with grouping of three numbers."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch14_t3_qm18',
        type: "mcq",
        question: "Which property allows us to write: 2x + 3y + 5x + 2y = 7x + 5y?",
        options: [
            "Like terms property",
            "Distributive property",
            "Commutative property",
            "Associative property"
        ],
        correctAnswer: "Like terms property",
        explanation: "The like terms property allows us to combine terms with the same variables: (2 + 5)x + (3 + 2)y = 7x + 5y. 📝",
        wrongAnswerExplanations: {
            "Distributive property": "Distributive property deals with distributing multiplication over addition.",
            "Commutative property": "While terms are rearranged, the key property is combining like terms.",
            "Associative property": "Associative property deals with grouping of three numbers."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch14_t3_qm19',
        type: "mcq",
        question: "Which property is used to solve: (x + 2)(x + 3) = x² + 5x + 6?",
        options: [
            "Distributive property with like terms",
            "Only distributive property",
            "Only like terms property",
            "Commutative property"
        ],
        correctAnswer: "Distributive property with like terms",
        explanation: "First distribute: x(x+3) + 2(x+3), then distribute again and combine like terms to get x² + 5x + 6. 🔢",
        wrongAnswerExplanations: {
            "Only distributive property": "We need both distribution and combining like terms.",
            "Only like terms property": "We need both distribution and combining like terms.",
            "Commutative property": "Commutative property deals with order of operations."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch14_t3_qm20',
        type: "mcq",
        question: "Which property explains why we can write: 2(3x) = (2 × 3)x = 6x?",
        options: [
            "Associative property of multiplication",
            "Commutative property",
            "Distributive property",
            "Identity property"
        ],
        correctAnswer: "Associative property of multiplication",
        explanation: "The associative property allows us to regroup the numbers: 2(3x) = (2 × 3)x = 6x. 📊",
        wrongAnswerExplanations: {
            "Commutative property": "While order could be changed, the key property is associative for regrouping.",
            "Distributive property": "Distributive property deals with distributing multiplication over addition.",
            "Identity property": "Identity property deals with operations involving 0 or 1."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    }
]; 