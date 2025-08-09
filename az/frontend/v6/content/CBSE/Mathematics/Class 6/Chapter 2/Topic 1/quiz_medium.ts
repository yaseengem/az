import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl6_ch2_t1_qm1',
        type: "mcq",
        question: "Which property is used in the calculation: 8 × 97 + 8 × 3 = 8 × (97 + 3)?",
        options: ["Commutative property", "Associative property", "Distributive property", "Identity property"],
        correctAnswer: "Distributive property",
        explanation: "This uses the distributive property in reverse: a × b + a × c = a × (b + c). Here, 8 is being factored out from both terms. 📊",
        wrongAnswerExplanations: {
            "Commutative property": "Commutative property refers to order: a + b = b + a or a × b = b × a.",
            "Associative property": "Associative property refers to grouping in a single operation: (a + b) + c = a + (b + c).",
            "Identity property": "Identity property involves adding zero or multiplying by one."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch2_t1_qm2',
        type: "mcq",
        question: "Using properties of whole numbers, what's an easier way to calculate 25 × 6 × 4?",
        options: [
            "25 × 24",
            "100 × 6",
            "25 × (6 × 4)",
            "25 × 10"
        ],
        correctAnswer: "25 × (6 × 4)",
        explanation: "Using the associative property: 25 × 6 × 4 = 25 × (6 × 4) = 25 × 24 = 600. Calculating 6 × 4 first makes multiplication easier. 🧮",
        wrongAnswerExplanations: {
            "25 × 24": "This is correct, but it's derived from 25 × (6 × 4) using the associative property.",
            "100 × 6": "This equals 600, which is correct, but doesn't represent using properties of whole numbers appropriately.",
            "25 × 10": "This equals 250, which is not equal to 25 × 6 × 4 = 600."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl6_ch2_t1_qm3',
        type: "mcq",
        question: "If 7 × (a + b) = 28 + 35, what are the values of a and b?",
        options: [
            "a = 4, b = 5",
            "a = 5, b = 4",
            "a = 3, b = 6",
            "Either a = 4, b = 5 or a = 5, b = 4"
        ],
        correctAnswer: "Either a = 4, b = 5 or a = 5, b = 4",
        explanation: "Using the distributive property: 7 × (a + b) = 7a + 7b = 28 + 35. So 7a = 28 and 7b = 35, giving a = 4 and b = 5. By commutative property, the order doesn't matter. 🔍",
        wrongAnswerExplanations: {
            "a = 4, b = 5": "This is one solution, but not the only one due to the commutative property.",
            "a = 5, b = 4": "This is one solution, but not the only one due to the commutative property.",
            "a = 3, b = 6": "This doesn't work because 7 × 3 = 21 ≠ 28 and 7 × 6 = 42 ≠ 35."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl6_ch2_t1_qm4',
        type: "mcq",
        question: "Which of these expressions equals 7 × 36?",
        options: [
            "7 × (30 + 6)",
            "7 × 30 + 6",
            "(7 × 3) × (7 × 6)",
            "7 × 30 + 7 × 6"
        ],
        correctAnswer: "7 × (30 + 6)",
        explanation: "7 × 36 = 7 × (30 + 6) = 7 × 30 + 7 × 6 = 210 + 42 = 252. Using the distributive property helps break down the calculation. 📝",
        wrongAnswerExplanations: {
            "7 × 30 + 6": "This equals 216, not 252, because 6 isn't being multiplied by 7.",
            "(7 × 3) × (7 × 6)": "This equals 21 × 42 = 882, not 252.",
            "7 × 30 + 7 × 6": "This equals 252, which is correct, but it's derived from 7 × (30 + 6) using the distributive property."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch2_t1_qm5',
        type: "mcq",
        question: "What's the value of 99 × 17 + 99 × 3?",
        options: [
            "99 × 20",
            "1980",
            "1683 + 297",
            "All of the above"
        ],
        correctAnswer: "All of the above",
        explanation: "99 × 17 + 99 × 3 = 99 × (17 + 3) = 99 × 20 = 1980. Also, 99 × 17 = 1683 and 99 × 3 = 297, so 1683 + 297 = 1980. All options equal 1980. 🧩",
        wrongAnswerExplanations: {
            "99 × 20": "This equals 1980, which is correct, but it's not the only correct answer.",
            "1980": "This is the correct numerical answer, but it's not the only correct option.",
            "1683 + 297": "This equals 1980, which is correct, but it's not the only correct answer."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl6_ch2_t1_qm6',
        type: "mcq",
        question: "Which property would be MOST useful for calculating 25 × 98 mentally?",
        options: [
            "Commutative property",
            "Associative property",
            "Distributive property",
            "Identity property"
        ],
        correctAnswer: "Distributive property",
        explanation: "The distributive property helps by rewriting as 25 × (100 - 2) = 25 × 100 - 25 × 2 = 2500 - 50 = 2450, making the mental calculation easier. 🧠",
        wrongAnswerExplanations: {
            "Commutative property": "Changing the order to 98 × 25 doesn't significantly simplify the calculation.",
            "Associative property": "There's no obvious way to group terms to simplify since we only have two factors.",
            "Identity property": "The identity elements 0 and 1 don't help simplify this particular calculation."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch2_t1_qm7',
        type: "mcq",
        question: "If 5 × (□ + 8) = 5 × □ + 40, what number goes in the box?",
        options: [
            "5",
            "8",
            "40",
            "Any number"
        ],
        correctAnswer: "Any number",
        explanation: "Using the distributive property: 5 × (□ + 8) = 5 × □ + 5 × 8 = 5 × □ + 40. This is true for any value in the box because of the distributive property. 🎁",
        wrongAnswerExplanations: {
            "5": "While 5 works, it's not the only possible answer.",
            "8": "While 8 works, it's not the only possible answer.",
            "40": "This doesn't work; if □ = 40, then 5 × (40 + 8) = 5 × 48 = 240, but 5 × 40 + 40 = 200 + 40 = 240, which is correct."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl6_ch2_t1_qm8',
        type: "mcq",
        question: "Which statement is NOT true about the operation 4 × (7 × 0)?",
        options: [
            "It equals 0 due to the zero property of multiplication",
            "It equals 0 × 28 using the associative property",
            "It equals 4 × 0 using the multiplicative identity",
            "It equals 0 regardless of the order of operations"
        ],
        correctAnswer: "It equals 4 × 0 using the multiplicative identity",
        explanation: "The multiplicative identity involves 1, not 0. Here, 4 × (7 × 0) = 4 × 0 = 0 uses the zero property, not the multiplicative identity. 0️⃣",
        wrongAnswerExplanations: {
            "It equals 0 due to the zero property of multiplication": "This is true: anything multiplied by 0 equals 0.",
            "It equals 0 × 28 using the associative property": "This is true: (4 × 7) × 0 = 28 × 0 = 0.",
            "It equals 0 regardless of the order of operations": "This is true: any expression with a factor of 0 will equal 0."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl6_ch2_t1_qm9',
        type: "mcq",
        question: "For which of these pairs of operations do whole numbers have the same properties?",
        options: [
            "Addition and Subtraction",
            "Multiplication and Division",
            "Addition and Multiplication",
            "Subtraction and Division"
        ],
        correctAnswer: "Addition and Multiplication",
        explanation: "Both addition and multiplication of whole numbers share these properties: closure, commutative, associative, and identity properties. The other pairs don't share all these properties. 🔄",
        wrongAnswerExplanations: {
            "Addition and Subtraction": "Unlike addition, subtraction is not closed, commutative, or associative for whole numbers.",
            "Multiplication and Division": "Unlike multiplication, division is not closed or commutative for whole numbers.",
            "Subtraction and Division": "Neither operation is closed, commutative, or associative for whole numbers."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch2_t1_qm10',
        type: "mcq",
        question: "Which calculation demonstrates both the commutative and associative properties?",
        options: [
            "(2 + 3) + 4 = 2 + (3 + 4)",
            "5 × 6 = 6 × 5",
            "(2 × 3) × 4 = 2 × (4 × 3)",
            "7 × (8 + 9) = (7 × 8) + (7 × 9)"
        ],
        correctAnswer: "(2 × 3) × 4 = 2 × (4 × 3)",
        explanation: "This shows both associative property (changing grouping) and commutative property (changing order of 3 and 4). Combined properties are used to rearrange the expression. 📐",
        wrongAnswerExplanations: {
            "(2 + 3) + 4 = 2 + (3 + 4)": "This demonstrates only the associative property, not the commutative property.",
            "5 × 6 = 6 × 5": "This demonstrates only the commutative property, not the associative property.",
            "7 × (8 + 9) = (7 × 8) + (7 × 9)": "This demonstrates the distributive property, not commutative or associative properties."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl6_ch2_t1_qm11',
        type: "mcq",
        question: "A teacher distributes 6 pencils each to 7 students, and 5 pencils each to 8 students. Using the distributive property, how many pencils were distributed in total?",
        options: [
            "13 × 15",
            "6 × 7 + 5 × 8",
            "(6 + 5) × (7 + 8)",
            "6 × 15 + 5 × 8"
        ],
        correctAnswer: "6 × 7 + 5 × 8",
        explanation: "Total pencils = 6 × 7 + 5 × 8 = 42 + 40 = 82. This isn't directly applying the distributive property, but represents the actual calculation needed. ✏️",
        wrongAnswerExplanations: {
            "13 × 15": "13 × 15 = 195, which is incorrect. This incorrectly adds the numbers before multiplying.",
            "(6 + 5) × (7 + 8)": "(6 + 5) × (7 + 8) = 11 × 15 = 165, which is incorrect.",
            "6 × 15 + 5 × 8": "6 × 15 + 5 × 8 = 90 + 40 = 130, which is incorrect."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl6_ch2_t1_qm12',
        type: "mcq",
        question: "Which expression is equivalent to 47 × 101?",
        options: [
            "47 × 100 + 47",
            "47 × (100 + 1)",
            "47 + 101",
            "Both A and B"
        ],
        correctAnswer: "Both A and B",
        explanation: "47 × 101 = 47 × (100 + 1) = 47 × 100 + 47 × 1 = 4700 + 47 = 4747. Both expressions are equivalent due to the distributive property. 🧮",
        wrongAnswerExplanations: {
            "47 × 100 + 47": "This equals 4747, which is correct, but it's not the only correct answer.",
            "47 × (100 + 1)": "This equals 4747, which is correct, but it's not the only correct answer.",
            "47 + 101": "This equals 148, which is much smaller than 47 × 101 = 4747."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch2_t1_qm13',
        type: "mcq",
        question: "Which property allows us to simplify 5 × (7 + 0) to 5 × 7?",
        options: [
            "Commutative property",
            "Additive identity property",
            "Distributive property",
            "Multiplicative identity property"
        ],
        correctAnswer: "Additive identity property",
        explanation: "The additive identity property states that a + 0 = a. So 7 + 0 = 7, making 5 × (7 + 0) = 5 × 7. ⭐",
        wrongAnswerExplanations: {
            "Commutative property": "Commutative property would change the order but not eliminate the zero.",
            "Distributive property": "Distributive property would give 5 × 7 + 5 × 0 = 35 + 0 = 35, which is correct but uses an additional step.",
            "Multiplicative identity property": "Multiplicative identity involves multiplying by 1, not adding 0."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch2_t1_qm14',
        type: "mcq",
        question: "In a classroom, there are 7 rows with 5 students in each row, and 6 rows with 4 students in each row. How many students are there in total?",
        options: [
            "13 × 9",
            "7 × 5 + 6 × 4",
            "(7 + 6) × (5 + 4)",
            "(7 × 6) × (5 × 4)"
        ],
        correctAnswer: "7 × 5 + 6 × 4",
        explanation: "Total students = 7 × 5 + 6 × 4 = 35 + 24 = 59. This calculation counts each group separately and adds the results. 👨‍🎓👩‍🎓",
        wrongAnswerExplanations: {
            "13 × 9": "This equals 117, which is incorrect. You can't just add the numbers and multiply.",
            "(7 + 6) × (5 + 4)": "This equals 13 × 9 = 117, which is incorrect.",
            "(7 × 6) × (5 × 4)": "This equals 42 × 20 = 840, which is far too large."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl6_ch2_t1_qm15',
        type: "mcq",
        question: "Which expression is NOT equivalent to the others?",
        options: [
            "4 × (10 + 3)",
            "4 × 10 + 4 × 3",
            "(4 + 10) × 3",
            "40 + 12"
        ],
        correctAnswer: "(4 + 10) × 3",
        explanation: "(4 + 10) × 3 = 14 × 3 = 42, while the others equal 4 × 13 = 52. This expression uses a different grouping that changes the mathematical meaning. 🧩",
        wrongAnswerExplanations: {
            "4 × (10 + 3)": "This equals 4 × 13 = 52, using direct multiplication.",
            "4 × 10 + 4 × 3": "This equals 40 + 12 = 52, using the distributive property.",
            "40 + 12": "This equals 52, the same as the first two expressions."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch2_t1_qm16',
        type: "mcq",
        question: "If 0 is added to a whole number, the result is:",
        options: [
            "Always 0",
            "Always the same whole number",
            "Another whole number",
            "Sometimes not a whole number"
        ],
        correctAnswer: "Always the same whole number",
        explanation: "By the additive identity property, a + 0 = a for any number a. Adding 0 to any whole number gives the same whole number. ⭐",
        wrongAnswerExplanations: {
            "Always 0": "This is only true when adding 0 to 0. For any other whole number, the result isn't 0.",
            "Another whole number": "While the result is a whole number, it's specifically the same whole number you started with.",
            "Sometimes not a whole number": "Adding 0 to a whole number always gives a whole number (the same one)."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch2_t1_qm17',
        type: "mcq",
        question: "A student says that 8 × 99 can be calculated as 8 × 100 - 8 × 1. Which property is the student using?",
        options: [
            "Commutative property",
            "Associative property",
            "Distributive property",
            "Identity property"
        ],
        correctAnswer: "Distributive property",
        explanation: "The student is using the distributive property: 8 × 99 = 8 × (100 - 1) = 8 × 100 - 8 × 1 = 800 - 8 = 792. Multiplication distributes over subtraction too. 📊",
        wrongAnswerExplanations: {
            "Commutative property": "Commutative property refers to changing the order of operations, which isn't being done here.",
            "Associative property": "Associative property refers to regrouping within the same operation, which isn't being done here.",
            "Identity property": "Identity property involves adding zero or multiplying by one, which isn't the main concept being used here."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch2_t1_qm18',
        type: "mcq",
        question: "The product of any whole number and ___ is always equal to that whole number.",
        options: [
            "0",
            "1",
            "10",
            "The number itself"
        ],
        correctAnswer: "1",
        explanation: "By the multiplicative identity property, a × 1 = a for any number a. One is the multiplicative identity for whole numbers. 1️⃣",
        wrongAnswerExplanations: {
            "0": "The product of any number and 0 is always 0, not the original number.",
            "10": "Multiplying by 10 gives 10 times the original number, not the original number itself.",
            "The number itself": "If the number is n, then n × n = n² which equals n only when n is 0 or 1."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch2_t1_qm19',
        type: "mcq",
        question: "When is a × (b - c) = a × b - a × c NOT true?",
        options: [
            "When a = 0",
            "When b = c",
            "When working with whole numbers",
            "It's always true"
        ],
        correctAnswer: "It's always true",
        explanation: "The distributive property a × (b - c) = a × b - a × c is always true for all numbers. It's a fundamental property of mathematics. 📐",
        wrongAnswerExplanations: {
            "When a = 0": "When a = 0, both sides equal 0, so it's still true.",
            "When b = c": "When b = c, both sides equal 0, so it's still true.",
            "When working with whole numbers": "The distributive property works for all number systems, including whole numbers."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch2_t1_qm20',
        type: "mcq",
        question: "A fruit seller has 15 boxes of apples 🍎 with 24 apples in each box, and 18 boxes of oranges 🍊 with 20 oranges in each box. How many fruits does the seller have in total?",
        options: [
            "15 × 24 + 18 × 20",
            "(15 + 18) × (24 + 20)",
            "15 × 18 + 24 × 20",
            "(15 × 18) × (24 × 20)"
        ],
        correctAnswer: "15 × 24 + 18 × 20",
        explanation: "Total fruits = apples + oranges = 15 × 24 + 18 × 20 = 360 + 360 = 720. This calculation counts each type separately and adds the results. 🍎🍊",
        wrongAnswerExplanations: {
            "(15 + 18) × (24 + 20)": "This equals 33 × 44 = 1452, which is incorrect. You can't add the numbers before multiplying.",
            "15 × 18 + 24 × 20": "This equals 270 + 480 = 750, which is incorrect. It multiplies the wrong pairs of numbers.",
            "(15 × 18) × (24 × 20)": "This equals 270 × 480 = 129,600, which is far too large."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    }
];
