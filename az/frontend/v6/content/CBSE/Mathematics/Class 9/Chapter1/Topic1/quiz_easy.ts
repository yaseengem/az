// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 9\Chapter1\Topic1\quiz_easy.ts
import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl9_ch1_t1_qe1',
        type: "mcq",
        question: "Which of the following numbers is a natural number?",
        options: ["0", "-5", "3.14", "7"],
        correctAnswer: "7",
        explanation: "Natural numbers (ℕ) are the counting numbers starting from 1. Therefore, 7 is a natural number, while 0 is a whole number but not a natural number, -5 is an integer but not natural, and 3.14 is a decimal. 🔢",
        wrongAnswerExplanations: {
            "0": "0 is a whole number, but natural numbers start from 1.",
            "-5": "Negative numbers like -5 are integers but not natural numbers.",
            "3.14": "3.14 is a rational number with a decimal, but not a natural number."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch1_t1_qe2',
        type: "mcq",
        question: "Which of the following is NOT closed under addition?",
        options: ["Natural Numbers", "Whole Numbers", "Integers", "Rational Numbers"],
        correctAnswer: "Natural Numbers",
        explanation: "Natural numbers are not closed under addition because the sum of two natural numbers is always a natural number. For example, 3 + 5 = 8, which is a natural number. The correct answer would be a set where addition can produce results outside that set. 🧩",
        wrongAnswerExplanations: {
            "Whole Numbers": "Whole numbers are closed under addition. The sum of any two whole numbers is always a whole number.",
            "Integers": "Integers are closed under addition. The sum of any two integers is always an integer.",
            "Rational Numbers": "Rational numbers are closed under addition. The sum of any two rational numbers is always a rational number."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch1_t1_qe3',
        type: "mcq",
        question: "If you have 8 apples 🍏 and give away 12 apples, your final count of apples is -4. This number belongs to which number system?",
        options: ["Natural Numbers", "Whole Numbers", "Integers", "Rational Numbers"],
        correctAnswer: "Integers",
        explanation: "The number -4 is a negative integer. It's not a natural number or whole number since both of those include only non-negative numbers. Every integer is also a rational number (as it can be written as -4/1), but the most specific system is integers. 💰",
        wrongAnswerExplanations: {
            "Natural Numbers": "Natural numbers are positive counting numbers starting from 1. -4 is negative, so it's not a natural number.",
            "Whole Numbers": "Whole numbers include 0 and positive integers. -4 is negative, so it's not a whole number.",
            "Rational Numbers": "While -4 is indeed a rational number (it can be written as -4/1), integers is the more specific number system for this value."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch1_t1_qe4',
        type: "mcq",
        question: "Which number system does 0 belong to?",
        options: ["Only Natural Numbers", "Only Whole Numbers", "Both Whole Numbers and Integers", "None of the above"],
        correctAnswer: "Both Whole Numbers and Integers",
        explanation: "0 belongs to whole numbers (𝕎 = {0, 1, 2, 3, ...}) and integers (ℤ = {..., -2, -1, 0, 1, 2, ...}). It's not a natural number since natural numbers start from 1. Zero is also a rational number (0/1). 🔍",
        wrongAnswerExplanations: {
            "Only Natural Numbers": "Natural numbers start from 1, so 0 is not a natural number.",
            "Only Whole Numbers": "0 is indeed a whole number, but it's also an integer, so this answer is incomplete.",
            "None of the above": "0 definitely belongs to both whole numbers and integers."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch1_t1_qe5',
        type: "mcq",
        question: "Which of these operations might give a result outside the set of natural numbers when performed on two natural numbers?",
        options: ["Addition", "Multiplication", "Subtraction", "All of the above"],
        correctAnswer: "Subtraction",
        explanation: "Natural numbers are not closed under subtraction. For example, 3 - 5 = -2, which is not a natural number. Addition and multiplication of natural numbers always yield natural numbers, making natural numbers closed under these operations. ➖",
        wrongAnswerExplanations: {
            "Addition": "Natural numbers are closed under addition. The sum of any two natural numbers is always a natural number.",
            "Multiplication": "Natural numbers are closed under multiplication. The product of any two natural numbers is always a natural number.",
            "All of the above": "Only subtraction can give a result outside the set of natural numbers."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 40
    },
    {
        id: 'cl9_ch1_t1_qe6',
        type: "mcq",
        question: "If the temperature drops from 5°C to -3°C, what is the temperature change, and to which number system does it belong?",
        options: ["8°C, Natural Numbers", "-8°C, Integers", "8°C, Whole Numbers", "-8°C, Natural Numbers"],
        correctAnswer: "-8°C, Integers",
        explanation: "The temperature change is 5 - (-3) = -8°C. This is a negative number, so it belongs to integers. It cannot be a natural or whole number because those systems don't include negative numbers. Temperature changes are often represented as integers. ❄️",
        wrongAnswerExplanations: {
            "8°C, Natural Numbers": "The temperature change is -8°C, not 8°C, and negative numbers are not natural numbers.",
            "8°C, Whole Numbers": "The temperature change is -8°C, not 8°C, and negative numbers are not whole numbers.",
            "-8°C, Natural Numbers": "While the temperature change is -8°C, negative numbers are not natural numbers."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch1_t1_qe7',
        type: "mcq",
        question: "Which of these fractions is equivalent to the whole number 5?",
        options: ["5/0", "5/2", "10/2", "0/5"],
        correctAnswer: "10/2",
        explanation: "10/2 = 5, making it equivalent to the whole number 5. Any integer can be expressed as a rational number by placing it over 1 or finding an equivalent fraction. In this case, 10/2 is a rational number equal to 5. 🧮",
        wrongAnswerExplanations: {
            "5/0": "Division by zero is undefined, so 5/0 is not a valid number.",
            "5/2": "5/2 = 2.5, which is not equal to 5.",
            "0/5": "0/5 = 0, which is not equal to 5."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch1_t1_qe8',
        type: "mcq",
        question: "What property of whole numbers is demonstrated by the equation 5 + 0 = 5?",
        options: ["Closure property", "Additive identity property", "Commutative property", "Associative property"],
        correctAnswer: "Additive identity property",
        explanation: "The equation 5 + 0 = 5 demonstrates the additive identity property, which states that adding 0 to any number gives the same number. Zero is the additive identity element in the number system, as a + 0 = a for any number a. 🔑",
        wrongAnswerExplanations: {
            "Closure property": "Closure property states that the sum of two whole numbers is always a whole number, which isn't specifically demonstrated here.",
            "Commutative property": "Commutative property states that a + b = b + a, which would be demonstrated by 5 + 3 = 3 + 5.",
            "Associative property": "Associative property states that (a + b) + c = a + (b + c), which requires three numbers."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch1_t1_qe9',
        type: "mcq",
        question: "Which of these is NOT a characteristic of integers?",
        options: ["They include all positive and negative whole numbers", "They are closed under division", "They have additive inverses", "They can be represented on a number line"],
        correctAnswer: "They are closed under division",
        explanation: "Integers are not closed under division because dividing one integer by another may result in a non-integer. For example, 5 ÷ 2 = 2.5, which is not an integer. This makes division an operation that can take us outside the set of integers. ➗",
        wrongAnswerExplanations: {
            "They include all positive and negative whole numbers": "This is true. Integers include all positive and negative whole numbers and zero.",
            "They have additive inverses": "This is true. For every integer a, there exists -a such that a + (-a) = 0.",
            "They can be represented on a number line": "This is true. Every integer corresponds to a point on the number line."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch1_t1_qe10',
        type: "mcq",
        question: "If you divide a pizza 🍕 into 4 equal parts and take 3 parts, what fraction of the pizza do you have, and to which number system does this fraction belong?",
        options: ["3/4, Natural Numbers", "3/4, Whole Numbers", "3/4, Integers", "3/4, Rational Numbers"],
        correctAnswer: "3/4, Rational Numbers",
        explanation: "You have 3/4 of the pizza, which is a fraction. Fractions like 3/4 belong to rational numbers, which are numbers that can be expressed as p/q where p and q are integers and q ≠ 0. Since 3/4 can't be simplified to a whole number, it's not a natural number, whole number, or integer. 🧩",
        wrongAnswerExplanations: {
            "3/4, Natural Numbers": "3/4 is not a natural number as natural numbers are whole counting numbers like 1, 2, 3, etc.",
            "3/4, Whole Numbers": "3/4 is not a whole number as whole numbers are 0, 1, 2, 3, etc.",
            "3/4, Integers": "3/4 is not an integer as integers are ..., -2, -1, 0, 1, 2, ..."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch1_t1_qe11',
        type: "mcq",
        question: "Which of the following statements about natural numbers is TRUE?",
        options: [
            "Every natural number has a predecessor",
            "The sum of two natural numbers is always greater than either of the original numbers",
            "Natural numbers are closed under subtraction",
            "The smallest natural number is 0"
        ],
        correctAnswer: "The sum of two natural numbers is always greater than either of the original numbers",
        explanation: "If a and b are natural numbers, then a + b > a and a + b > b. This is because natural numbers are positive, so adding them increases the value. For example, 3 + 5 = 8, and 8 is greater than both 3 and 5. 📈",
        wrongAnswerExplanations: {
            "Every natural number has a predecessor": "The smallest natural number is 1, which doesn't have a predecessor within the set of natural numbers.",
            "Natural numbers are closed under subtraction": "This is false. For example, 3 - 5 = -2, which is not a natural number.",
            "The smallest natural number is 0": "The smallest natural number is 1. Zero is a whole number but not a natural number."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch1_t1_qe12',
        type: "mcq",
        question: "In a bank account, if you deposit ₹500 and then withdraw ₹700, your balance is -₹200. This number belongs to which number system?",
        options: ["Natural Numbers", "Whole Numbers", "Integers", "Rational Numbers"],
        correctAnswer: "Integers",
        explanation: "The balance of -₹200 is a negative number, so it belongs to integers. Though it can also be written as a rational number (-200/1), the most specific system for this value is integers, as it's a negative whole number. Negative amounts are commonly represented as integers. 💰",
        wrongAnswerExplanations: {
            "Natural Numbers": "Natural numbers only include positive counting numbers, starting from 1. -₹200 is negative, so it's not a natural number.",
            "Whole Numbers": "Whole numbers include 0 and positive integers. -₹200 is negative, so it's not a whole number.",
            "Rational Numbers": "While -₹200 can be written as -200/1, making it a rational number, the more specific classification is integers."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch1_t1_qe13',
        type: "mcq",
        question: "Which of the following represents the additive inverse of -8?",
        options: ["1/8", "-1/8", "8", "0"],
        correctAnswer: "8",
        explanation: "The additive inverse of a number a is -a, which when added to a gives 0. For -8, the additive inverse is 8 because -8 + 8 = 0. Every integer has an additive inverse, which is why integers are closed under addition. ➕",
        wrongAnswerExplanations: {
            "1/8": "This is the multiplicative inverse (reciprocal) of 8, not the additive inverse of -8.",
            "-1/8": "This is not related to the additive inverse of -8.",
            "0": "0 is its own additive inverse, but not the additive inverse of -8."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch1_t1_qe14',
        type: "mcq",
        question: "Which of these statements about rational numbers is FALSE?",
        options: [
            "Every integer is a rational number",
            "Rational numbers can be represented as fractions",
            "Between any two rational numbers, there is always exactly one rational number",
            "Rational numbers are closed under multiplication"
        ],
        correctAnswer: "Between any two rational numbers, there is always exactly one rational number",
        explanation: "Between any two rational numbers, there are infinitely many rational numbers, not just one. For example, between 1/2 and 3/4, there are infinitely many rational numbers like 5/8, 11/16, etc. This property is called density of rational numbers. 🌟",
        wrongAnswerExplanations: {
            "Every integer is a rational number": "This is true. Any integer n can be written as n/1, making it a rational number.",
            "Rational numbers can be represented as fractions": "This is true by definition. Rational numbers are numbers that can be expressed as p/q where p, q are integers and q ≠ 0.",
            "Rational numbers are closed under multiplication": "This is true. The product of any two rational numbers is always a rational number."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch1_t1_qe15',
        type: "mcq",
        question: "Which number system contains 1.25?",
        options: [
            "Natural Numbers only",
            "Integers only",
            "Rational Numbers but not Integers",
            "All number systems"
        ],
        correctAnswer: "Rational Numbers but not Integers",
        explanation: "1.25 = 5/4 is a rational number, but it's not an integer because it has a decimal part. It can be expressed as the ratio of two integers (5/4), which is the definition of a rational number. Since it's not an integer, it also cannot be a natural or whole number. 🔢",
        wrongAnswerExplanations: {
            "Natural Numbers only": "1.25 is not a natural number, as natural numbers are whole counting numbers without decimal parts.",
            "Integers only": "1.25 is not an integer, as integers are whole numbers without decimal parts.",
            "All number systems": "1.25 is not in all number systems - it's specifically a rational number but not a natural number, whole number, or integer."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch1_t1_qe16',
        type: "mcq",
        question: "When we say that integers are 'ordered,' what does this mean?",
        options: [
            "They can be arranged in ascending order",
            "For any two integers, one is always greater than the other",
            "For any two integers, one is always greater than, equal to, or less than the other",
            "They follow a specific pattern"
        ],
        correctAnswer: "For any two integers, one is always greater than, equal to, or less than the other",
        explanation: "The ordering property of integers means that for any two integers a and b, exactly one of these is true: a < b, a = b, or a > b. This allows integers to be arranged in a definite order on the number line, with each integer having a specific position relative to all others. 📊",
        wrongAnswerExplanations: {
            "They can be arranged in ascending order": "While true, this doesn't fully capture what 'ordered' means in the context of integers.",
            "For any two integers, one is always greater than the other": "This is incomplete because two integers can be equal.",
            "They follow a specific pattern": "This is too vague and doesn't correctly describe the ordering property."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch1_t1_qe17',
        type: "mcq",
        question: "Which number system has the property of being 'dense'?",
        options: [
            "Natural Numbers",
            "Whole Numbers",
            "Integers",
            "Rational Numbers"
        ],
        correctAnswer: "Rational Numbers",
        explanation: "Rational numbers have the density property, meaning between any two rational numbers, there are infinitely many more rational numbers. This is not true for natural numbers, whole numbers, or integers, where you can find consecutive elements with nothing between them. 🧩",
        wrongAnswerExplanations: {
            "Natural Numbers": "Natural numbers are not dense. For example, between 1 and 2, there are no other natural numbers.",
            "Whole Numbers": "Whole numbers are not dense. For example, between 0 and 1, there are no other whole numbers.",
            "Integers": "Integers are not dense. For example, between -1 and 0, there are no other integers."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch1_t1_qe18',
        type: "mcq",
        question: "A student says: 'If we add a rational number to an irrational number, the result is always irrational.' Is this statement correct?",
        options: [
            "Yes, because rational + irrational is always irrational",
            "No, because rational + irrational is always rational",
            "It depends on which specific numbers are being added",
            "No, because rational + irrational = rational + rational"
        ],
        correctAnswer: "Yes, because rational + irrational is always irrational",
        explanation: "The sum of a rational number and an irrational number is always irrational. If r is rational and i is irrational, and if r + i = q (where q is rational), then i = q - r. Since the difference of two rational numbers is rational, this would make i rational, contradicting our assumption. 🧮",
        wrongAnswerExplanations: {
            "No, because rational + irrational is always rational": "This is incorrect. The sum of a rational and an irrational number cannot be rational.",
            "It depends on which specific numbers are being added": "This is incorrect. The sum will always be irrational regardless of which specific rational and irrational numbers are added.",
            "No, because rational + irrational = rational + rational": "This is incorrect. An irrational number is not equal to a rational number."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch1_t1_qe19',
        type: "mcq",
        question: "When identifying which number system a value belongs to, what is the correct approach?",
        options: [
            "Always choose the largest system (e.g., Real Numbers)",
            "Choose the smallest system that contains the number",
            "Only consider the Rational and Irrational systems",
            "Choose based on the decimal representation only"
        ],
        correctAnswer: "Choose the smallest system that contains the number",
        explanation: "When classifying numbers, we should identify the most specific or smallest number system that contains the number. For example, 5 can be a real number, rational number, integer, whole number, or natural number, but the most specific classification is natural number. 🔍",
        wrongAnswerExplanations: {
            "Always choose the largest system (e.g., Real Numbers)": "This would be too general and not provide the most specific classification.",
            "Only consider the Rational and Irrational systems": "This ignores more specific classifications like natural numbers, whole numbers, or integers.",
            "Choose based on the decimal representation only": "The decimal representation is just one aspect; the number's properties determine which system it belongs to."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch1_t1_qe20',
        type: "mcq",
        question: "Which of these is NOT a proper subset of the real numbers?",
        options: [
            "Natural Numbers",
            "Integers",
            "Rational Numbers",
            "Real Numbers"
        ],
        correctAnswer: "Real Numbers",
        explanation: "Real numbers are not a proper subset of themselves. A proper subset must be strictly contained within the set, meaning there must be at least one element in the larger set that is not in the subset. Natural numbers, integers, and rational numbers are all proper subsets of the real numbers. 📏",
        wrongAnswerExplanations: {
            "Natural Numbers": "Natural numbers are a proper subset of real numbers, as there are many real numbers (like -1, 0.5, π) that are not natural numbers.",
            "Integers": "Integers are a proper subset of real numbers, as there are many real numbers (like 0.5, π) that are not integers.",
            "Rational Numbers": "Rational numbers are a proper subset of real numbers, as there are irrational numbers like π and √2 that are not rational."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 45
    }
];
