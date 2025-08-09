// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 9\Chapter1\Topic4\quiz_easy.ts
import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl9_ch1_t4_qe1',
        type: "mcq",
        question: "Which property of real numbers is illustrated by the statement: a + b = b + a, for all real numbers a and b?",
        options: [
            "Associative property of addition",
            "Commutative property of addition",
            "Distributive property",
            "Closure property of addition"
        ],
        correctAnswer: "Commutative property of addition",
        explanation: "The statement a + b = b + a demonstrates the commutative property of addition, which states that changing the order of addition doesn't change the result. For example, 3 + 5 = 5 + 3. This property applies to both addition and multiplication of real numbers, but not to subtraction or division. 🔄",
        wrongAnswerExplanations: {
            "Associative property of addition": "The associative property is (a + b) + c = a + (b + c), which involves three numbers and changing grouping.",
            "Distributive property": "The distributive property is a(b + c) = ab + ac, which relates multiplication to addition.",
            "Closure property of addition": "The closure property states that the sum of any two real numbers is also a real number."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch1_t4_qe2',
        type: "mcq",
        question: "What is the additive inverse of -3/7?",
        options: [
            "-3/7",
            "7/3",
            "3/7",
            "-7/3"
        ],
        correctAnswer: "3/7",
        explanation: "The additive inverse of a number a is -a, which when added to a gives 0. For -3/7, the additive inverse is 3/7 because (-3/7) + (3/7) = 0. Every real number has a unique additive inverse, which is essential in solving equations involving addition and subtraction. ➕",
        wrongAnswerExplanations: {
            "-3/7": "This is the original number, not its additive inverse.",
            "7/3": "This is the reciprocal (multiplicative inverse) of 3/7, not the additive inverse of -3/7.",
            "-7/3": "This is neither the additive inverse nor the multiplicative inverse of -3/7."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch1_t4_qe3',
        type: "mcq",
        question: "What is the multiplicative inverse of 4/9?",
        options: [
            "-4/9",
            "9/4",
            "4/9",
            "-9/4"
        ],
        correctAnswer: "9/4",
        explanation: "The multiplicative inverse of a non-zero number a is 1/a, which when multiplied by a gives 1. For 4/9, the multiplicative inverse is 9/4 because (4/9) × (9/4) = 1. Every non-zero real number has a unique multiplicative inverse, also called the reciprocal. ✖️",
        wrongAnswerExplanations: {
            "-4/9": "This is the negative of the original number, not its multiplicative inverse.",
            "4/9": "This is the original number, not its multiplicative inverse.",
            "-9/4": "This is the negative of the multiplicative inverse, not the multiplicative inverse itself."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch1_t4_qe4',
        type: "mcq",
        question: "Simplify: (3 + 4) × 2",
        options: [
            "10",
            "14",
            "7",
            "11"
        ],
        correctAnswer: "14",
        explanation: "(3 + 4) × 2 = 7 × 2 = 14. First, we evaluate the expression inside parentheses (3 + 4 = 7), then multiply by 2. This follows the standard order of operations (PEMDAS/BODMAS), where operations inside parentheses take precedence. Basic arithmetic operations on real numbers follow consistent rules regardless of whether the numbers are rational or irrational. 🧮",
        wrongAnswerExplanations: {
            "10": "This would be the result of 3 + (4 × 2) = 3 + 8 = 11, which is incorrect because parentheses are evaluated first.",
            "7": "This is only the result of (3 + 4), without multiplying by 2.",
            "11": "This would be the result of 3 + (4 × 2) = 3 + 8 = 11, which is incorrect because parentheses are evaluated first."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 20
    },
    {
        id: 'cl9_ch1_t4_qe5',
        type: "mcq",
        question: "Which of the following illustrates the distributive property of multiplication over addition?",
        options: [
            "a + (b + c) = (a + b) + c",
            "a × b = b × a",
            "a × (b + c) = a × b + a × c",
            "a + 0 = a"
        ],
        correctAnswer: "a × (b + c) = a × b + a × c",
        explanation: "The distributive property of multiplication over addition states that a × (b + c) = a × b + a × c. This property allows us to 'distribute' the multiplication across terms in parentheses. For example, 2 × (3 + 4) = 2 × 3 + 2 × 4 = 6 + 8 = 14. This property is essential for algebraic manipulations. 📊",
        wrongAnswerExplanations: {
            "a + (b + c) = (a + b) + c": "This is the associative property of addition.",
            "a × b = b × a": "This is the commutative property of multiplication.",
            "a + 0 = a": "This is the identity property of addition."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch1_t4_qe6',
        type: "mcq",
        question: "What is 3.14 × (-2.5)?",
        options: [
            "-7.85",
            "7.85",
            "-5.64",
            "5.64"
        ],
        correctAnswer: "-7.85",
        explanation: "3.14 × (-2.5) = -7.85. When multiplying a positive number by a negative number, the result is negative. We multiply the absolute values (3.14 × 2.5 = 7.85) and assign the negative sign. This is the standard rule for multiplication of real numbers with different signs: the product is negative. ➗",
        wrongAnswerExplanations: {
            "7.85": "This would be the result if both numbers were positive or both were negative.",
            "-5.64": "This is an incorrect calculation.",
            "5.64": "This is an incorrect calculation."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch1_t4_qe7',
        type: "mcq",
        question: "What is the value of (-4) ÷ (-2)?",
        options: [
            "-2",
            "2",
            "-8",
            "8"
        ],
        correctAnswer: "2",
        explanation: "(-4) ÷ (-2) = 2. When dividing two negative numbers, the result is positive. This follows from the rule that the quotient of two numbers with the same sign is positive. We can verify this by checking that (-2) × 2 = -4, so 2 is indeed what we get when we divide -4 by -2. 🧮",
        wrongAnswerExplanations: {
            "-2": "This would be the result if only one of the numbers was negative, not both.",
            "-8": "This is incorrect. Division of two negative numbers gives a positive result.",
            "8": "This is incorrect. (-4) ÷ (-2) = 2, not 8."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 20
    },
    {
        id: 'cl9_ch1_t4_qe8',
        type: "mcq",
        question: "Simplify: 8 - 12 + 5",
        options: [
            "1",
            "-9",
            "25",
            "15"
        ],
        correctAnswer: "1",
        explanation: "8 - 12 + 5 = (8 - 12) + 5 = -4 + 5 = 1. When performing addition and subtraction, we work from left to right according to the order of operations. Addition and subtraction have the same precedence, so we simply process them in the order they appear. This rule ensures consistent results in arithmetic calculations. 📝",
        wrongAnswerExplanations: {
            "-9": "This would be the result of 8 - (12 + 5) = 8 - 17 = -9, but this is incorrect because we need to work from left to right.",
            "25": "This would be the result if all operations were addition: 8 + 12 + 5 = 25.",
            "15": "This is an incorrect calculation."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 20
    },
    {
        id: 'cl9_ch1_t4_qe9',
        type: "mcq",
        question: "Which of the following is the correct way to simplify (2 + 3) × (4 - 1)?",
        options: [
            "2 + 3 × 4 - 1 = 2 + 12 - 1 = 13",
            "(2 + 3) × (4 - 1) = 5 × 3 = 15",
            "(2 + 3) × (4 - 1) = 2 + 3 × 4 - 3 × 1 = 2 + 12 - 3 = 11",
            "(2 + 3) × (4 - 1) = 2 × 4 - 2 × 1 + 3 × 4 - 3 × 1 = 8 - 2 + 12 - 3 = 15"
        ],
        correctAnswer: "(2 + 3) × (4 - 1) = 5 × 3 = 15",
        explanation: "To simplify (2 + 3) × (4 - 1), we first evaluate expressions inside parentheses: (2 + 3) = 5 and (4 - 1) = 3. Then we multiply: 5 × 3 = 15. This follows PEMDAS/BODMAS order of operations: Parentheses, Exponents, Multiplication/Division, Addition/Subtraction. 🔍",
        wrongAnswerExplanations: {
            "2 + 3 × 4 - 1 = 2 + 12 - 1 = 13": "This is incorrect because it ignores the parentheses in the original expression.",
            "(2 + 3) × (4 - 1) = 2 + 3 × 4 - 3 × 1 = 2 + 12 - 3 = 11": "This is an incorrect application of the distributive property.",
            "(2 + 3) × (4 - 1) = 2 × 4 - 2 × 1 + 3 × 4 - 3 × 1 = 8 - 2 + 12 - 3 = 15": "While this does give the correct answer, it's an unnecessarily complex way that uses the distributive property twice."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch1_t4_qe10',
        type: "mcq",
        question: "If a = 5 and b = -2, what is the value of a² - b²?",
        options: [
            "21",
            "29",
            "3",
            "-21"
        ],
        correctAnswer: "21",
        explanation: "a² - b² = 5² - (-2)² = 25 - 4 = 21. Note that a negative number squared is positive: (-2)² = 4. We can also use the difference of squares formula: a² - b² = (a + b)(a - b) = (5 + (-2))(5 - (-2)) = 3 × 7 = 21. Both methods give the same result. 🔢",
        wrongAnswerExplanations: {
            "29": "This would be the result of 5² + (-2)² = 25 + 4 = 29, but the question asks for subtraction, not addition.",
            "3": "This is the value of a + b = 5 + (-2) = 3, not a² - b².",
            "-21": "This is incorrect. The calculation a² - b² = 25 - 4 = 21 gives a positive result."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch1_t4_qe11',
        type: "mcq",
        question: "What is the result when a rational number is multiplied by an irrational number?",
        options: [
            "Always rational",
            "Always irrational",
            "Sometimes rational, sometimes irrational",
            "Always zero"
        ],
        correctAnswer: "Always irrational",
        explanation: "When a non-zero rational number is multiplied by an irrational number, the result is always irrational. For example, 2 × √3 is irrational. This can be proven by contradiction: if r (rational, r ≠ 0) × i (irrational) = q (rational), then i = q/r would be rational (since rationals are closed under division), which contradicts i being irrational. 🧩",
        wrongAnswerExplanations: {
            "Always rational": "This is incorrect. The product of a rational and irrational number is irrational.",
            "Sometimes rational, sometimes irrational": "This is incorrect. There's one exception: if the rational number is 0, the product is 0 (rational). Otherwise, the product is always irrational.",
            "Always zero": "This is incorrect. The product would be zero only if the rational number is zero."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch1_t4_qe12',
        type: "mcq",
        question: "Simplify: (5 × 10³) × (2 × 10⁵)",
        options: [
            "10 × 10⁸",
            "7 × 10⁸",
            "10⁸",
            "10 × 10⁵"
        ],
        correctAnswer: "10 × 10⁸",
        explanation: "(5 × 10³) × (2 × 10⁵) = 5 × 2 × 10³ × 10⁵ = 10 × 10³⁺⁵ = 10 × 10⁸ = 10⁹. When multiplying numbers in scientific notation, we multiply the coefficients and add the exponents of 10. This is based on the laws of exponents: aⁿ × aᵐ = aⁿ⁺ᵐ. 📊",
        wrongAnswerExplanations: {
            "7 × 10⁸": "This would be the result if we added the coefficients (5 + 2) instead of multiplying them.",
            "10⁸": "This would be the result of 1 × 10⁸, which is not correct.",
            "10 × 10⁵": "This is incorrect because we need to add the exponents: 3 + 5 = 8."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch1_t4_qe13',
        type: "mcq",
        question: "What is the result of √8 + √2?",
        options: [
            "√10",
            "2√2",
            "3√2",
            "2√2 + √2"
        ],
        correctAnswer: "3√2",
        explanation: "√8 + √2 = √(4×2) + √2 = 2√2 + √2 = 3√2. To add these terms, we first simplify √8 by recognizing it as √(4×2) = √4 × √2 = 2√2. Then we combine like terms with √2: 2√2 + √2 = 3√2. This is an example of the distributive property: (2+1)√2 = 3√2. 🔢",
        wrongAnswerExplanations: {
            "√10": "This is incorrect. √8 + √2 ≠ √(8+2) = √10.",
            "2√2": "This is only the simplified form of √8, not including √2.",
            "2√2 + √2": "This is correct but not fully simplified. The final answer is 3√2."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch1_t4_qe14',
        type: "mcq",
        question: "What is the value of (√5)² + (√3)²?",
        options: [
            "8",
            "√8",
            "4√2",
            "2√15"
        ],
        correctAnswer: "8",
        explanation: "(√5)² + (√3)² = 5 + 3 = 8. The square of a square root is the original number: (√a)² = a. So (√5)² = 5 and (√3)² = 3. Therefore, the sum is 5 + 3 = 8. This is a direct application of the definition of the square root operation. 📐",
        wrongAnswerExplanations: {
            "√8": "This would be √((√5)² + (√3)²), not (√5)² + (√3)².",
            "4√2": "This is incorrect. The result is 8, which is a rational number, not an irrational number involving √2.",
            "2√15": "This would be 2√(5×3), which is different from (√5)² + (√3)²."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch1_t4_qe15',
        type: "mcq",
        question: "What happens when you add a rational number to an irrational number?",
        options: [
            "The result is always rational",
            "The result is always irrational",
            "The result can be either rational or irrational",
            "The result is always zero"
        ],
        correctAnswer: "The result is always irrational",
        explanation: "The sum of a rational number and an irrational number is always irrational. This can be proven by contradiction: if r (rational) + i (irrational) = q (rational), then i = q - r would be rational (since rational numbers are closed under subtraction), which contradicts i being irrational. For example, 3 + √2 is irrational. 🧠",
        wrongAnswerExplanations: {
            "The result is always rational": "This is incorrect. The sum of a rational and an irrational number cannot be rational.",
            "The result can be either rational or irrational": "This is incorrect. The sum is always irrational.",
            "The result is always zero": "This is incorrect. The sum would be zero only in the special case where the rational number is the additive inverse of the irrational number, which is impossible."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch1_t4_qe16',
        type: "mcq",
        question: "Simplify: 3 × (8 ÷ 4) + 5",
        options: [
            "11",
            "9",
            "17",
            "8"
        ],
        correctAnswer: "11",
        explanation: "3 × (8 ÷ 4) + 5 = 3 × 2 + 5 = 6 + 5 = 11. Following PEMDAS/BODMAS, we first evaluate the parentheses: 8 ÷ 4 = 2. Then we perform multiplication: 3 × 2 = 6. Finally, we add: 6 + 5 = 11. The order of operations ensures that mathematical expressions are evaluated consistently. 🧮",
        wrongAnswerExplanations: {
            "9": "This would be the result of 3 + (8 ÷ 4) + 5 = 3 + 2 + 5 = 10, which is incorrect because multiplication comes before addition.",
            "17": "This would be the result of 3 × 8 ÷ 4 + 5 = 24 ÷ 4 + 5 = 6 + 5 = 11, which gives the correct answer but uses incorrect reasoning.",
            "8": "This is an incorrect calculation."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch1_t4_qe17',
        type: "mcq",
        question: "Which property is illustrated by the equation 3 × (x + y) = 3x + 3y?",
        options: [
            "Commutative property of addition",
            "Associative property of multiplication",
            "Distributive property of multiplication over addition",
            "Closure property of multiplication"
        ],
        correctAnswer: "Distributive property of multiplication over addition",
        explanation: "The equation 3 × (x + y) = 3x + 3y illustrates the distributive property of multiplication over addition. This property allows us to 'distribute' the multiplication across the terms inside the parentheses. It states that a(b + c) = ab + ac for all real numbers a, b, and c. 📊",
        wrongAnswerExplanations: {
            "Commutative property of addition": "The commutative property of addition is a + b = b + a, which is not illustrated here.",
            "Associative property of multiplication": "The associative property of multiplication is (a × b) × c = a × (b × c), which is not illustrated here.",
            "Closure property of multiplication": "The closure property states that the product of two real numbers is also a real number, which is not specifically illustrated by this equation."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch1_t4_qe18',
        type: "mcq",
        question: "If 3x + 2 = 14, what is the value of x?",
        options: [
            "4",
            "12",
            "6",
            "16"
        ],
        correctAnswer: "4",
        explanation: "To solve 3x + 2 = 14, we isolate the variable x:\n3x + 2 = 14\n3x = 14 - 2\n3x = 12\nx = 12 ÷ 3\nx = 4\nWe can verify our answer by substituting x = 4 back into the original equation: 3(4) + 2 = 12 + 2 = 14. ✅",
        wrongAnswerExplanations: {
            "12": "This is 3x, not x.",
            "6": "This would be the result if the equation were 2x + 2 = 14.",
            "16": "This is an incorrect value. Substituting x = 16 gives 3(16) + 2 = 48 + 2 = 50, which doesn't equal 14."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch1_t4_qe19',
        type: "mcq",
        question: "Which of the following expressions equals √18 - √8?",
        options: [
            "√10",
            "√2",
            "2√2",
            "0"
        ],
        correctAnswer: "√2",
        explanation: "√18 - √8 = √(9×2) - √(4×2) = 3√2 - 2√2 = √2. To subtract these terms, we first simplify each radical by identifying perfect square factors: √18 = √(9×2) = √9 × √2 = 3√2 and √8 = √(4×2) = √4 × √2 = 2√2. Then we subtract like terms: 3√2 - 2√2 = √2. 🧮",
        wrongAnswerExplanations: {
            "√10": "This is incorrect. √18 - √8 ≠ √(18-8) = √10.",
            "2√2": "This would be the result of √18 - √2, not √18 - √8.",
            "0": "This would be the result if both terms were equal, but √18 ≠ √8."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch1_t4_qe20',
        type: "mcq",
        question: "What is the value of (√3 + 1)(√3 - 1)?",
        options: [
            "2",
            "0",
            "-2",
            "√3"
        ],
        correctAnswer: "2",
        explanation: "(√3 + 1)(√3 - 1) = (√3)² - 1² = 3 - 1 = 2. This is an application of the difference of squares formula: (a + b)(a - b) = a² - b². Here, a = √3 and b = 1. The formula allows us to find the product efficiently without multiplying out all terms. 📝",
        wrongAnswerExplanations: {
            "0": "This would be the result if we had (√3 - 1)(√3 - 1) = (√3 - 1)² instead.",
            "-2": "This is incorrect. The difference of squares formula gives a positive result here.",
            "√3": "This is incorrect. Following the difference of squares formula, we get 3 - 1 = 2."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 45
    }
];
