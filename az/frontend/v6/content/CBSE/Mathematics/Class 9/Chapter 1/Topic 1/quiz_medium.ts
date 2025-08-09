// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 9\Chapter1\Topic1\quiz_medium.ts
import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl9_ch1_t1_qm1',
        type: "mcq",
        question: "If a, b, and c are three consecutive integers with a < b < c, which of the following statements must be true?",
        options: [
            "a + c = 2b",
            "a × c = b²",
            "a² + c² = 2b²",
            "a + b + c is divisible by 3"
        ],
        correctAnswer: "a + c = 2b",
        explanation: "Since b = a + 1 and c = a + 2, we get a + c = a + (a + 2) = 2a + 2 = 2(a + 1) = 2b. This reflects the average property of evenly spaced values. 🧮",
        wrongAnswerExplanations: {
            "a × c = b²": "This is incorrect. If a = 1, b = 2, c = 3, then a × c = 1 × 3 = 3, but b² = 2² = 4.",
            "a² + c² = 2b²": "This is incorrect. If a = 1, b = 2, c = 3, then a² + c² = 1 + 9 = 10, but 2b² = 2 × 4 = 8.",
            "a + b + c is divisible by 3": "This is not always true. If a = 1, b = 2, c = 3, then a + b + c = 6, which is divisible by 3. But if a = 2, b = 3, c = 4, then a + b + c = 9, which is not divisible by 3."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch1_t1_qm2',
        type: "mcq",
        question: "If p and q are integers and p/q = 0.25, which of the following pairs (p,q) is possible?",
        options: [
            "(1, 4)",
            "(2, 8)",
            "(3, 12)",
            "All of the above"
        ],
        correctAnswer: "All of the above",
        explanation: "All pairs represent equivalent fractions equal to 0.25 (1/4). A rational number can be written in infinitely many ways by multiplying numerator and denominator by the same non-zero integer. 🔢",
        wrongAnswerExplanations: {
            "(1, 4)": "This is correct, but it's not the only answer.",
            "(2, 8)": "This is correct, but it's not the only answer.",
            "(3, 12)": "This is correct, but it's not the only answer."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch1_t1_qm3',
        type: "mcq",
        question: "What is the additive inverse of -7/3?",
        options: [
            "-3/7",
            "3/7",
            "7/3",
            "-7/-3"
        ],
        correctAnswer: "7/3",
        explanation: "The additive inverse of a number gives zero when added to it. For -7/3, the additive inverse is 7/3 since (-7/3) + (7/3) = 0. All rational numbers have an additive inverse. ➕",
        wrongAnswerExplanations: {
            "-3/7": "This is not the additive inverse of -7/3. It's not even the reciprocal, which would be -3/7.",
            "3/7": "This is not related to the additive inverse of -7/3.",
            "-7/-3": "This simplifies to 7/3, which is the correct answer, but it's written in an unconventional form."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch1_t1_qm4',
        type: "mcq",
        question: "For what value of n will n, n+2, and n+4 be three consecutive even integers?",
        options: [
            "2",
            "3",
            "4",
            "Any even number"
        ],
        correctAnswer: "Any even number",
        explanation: "Adding 2 to an even number gives the next even number. So for any even n, the sequence n, n+2, n+4 forms consecutive even integers (like 2,4,6 or 4,6,8). 🧩",
        wrongAnswerExplanations: {
            "2": "While n=2 works (giving 2, 4, 6), it's not the only solution.",
            "3": "If n=3, we get 3, 5, 7, which are consecutive odd integers, not even integers.",
            "4": "While n=4 works (giving 4, 6, 8), it's not the only solution."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch1_t1_qm5',
        type: "mcq",
        question: "Which of these statements about the closure property is FALSE?",
        options: [
            "Integers are closed under addition",
            "Integers are closed under multiplication",
            "Rational numbers are closed under subtraction",
            "Natural numbers are closed under division"
        ],
        correctAnswer: "Natural numbers are closed under division",
        explanation: "Natural numbers aren't closed under division because dividing one natural number by another doesn't always yield another natural number. For example, 1 ÷ 2 = 0.5, which isn't a natural number. ➗",
        wrongAnswerExplanations: {
            "Integers are closed under addition": "This is true. The sum of any two integers is always an integer.",
            "Integers are closed under multiplication": "This is true. The product of any two integers is always an integer.",
            "Rational numbers are closed under subtraction": "This is true. The difference of any two rational numbers is always a rational number."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch1_t1_qm6',
        type: "mcq",
        question: "If x is a whole number and y is a natural number such that x < y, what can be the value of x?",
        options: [
            "0 only",
            "Either 0 or 1",
            "Any natural number less than y",
            "Any whole number less than y"
        ],
        correctAnswer: "0 only",
        explanation: "Since natural numbers are whole numbers except 0, and x must be less than y, the only possible value for x is 0 (with y being any natural number ≥ 1). 🔍",
        wrongAnswerExplanations: {
            "Either 0 or 1": "If x=1, then y would have to be greater than 1, which is possible, but x could only be 0.",
            "Any natural number less than y": "This is incorrect because x must be a whole number that is less than y. If x is a natural number less than y, it's possible that x ≥ 1, but this doesn't ensure x < y.",
            "Any whole number less than y": "This is too broad. The only whole number that ensures x < y for any natural number y is x = 0."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch1_t1_qm7',
        type: "mcq",
        question: "Given three sets: P = {1, 2, 3}, Q = {0, 1, 2, 3}, and R = {-3, -2, -1, 0, 1, 2, 3}. Which of the following statements is TRUE?",
        options: [
            "P represents natural numbers, Q represents whole numbers, and R represents integers",
            "P, Q, and R are all finite sets of integers",
            "P ⊂ Q ⊂ R (P is a proper subset of Q which is a proper subset of R)",
            "The union of P and the complement of Q equals R"
        ],
        correctAnswer: "P ⊂ Q ⊂ R (P is a proper subset of Q which is a proper subset of R)",
        explanation: "P is a proper subset of Q because all elements of P are in Q, and Q contains 0 which P doesn't. Similarly, Q is a proper subset of R because R includes all elements of Q plus negative integers. ⊂",
        wrongAnswerExplanations: {
            "P represents natural numbers, Q represents whole numbers, and R represents integers": "This is incorrect because P only contains some natural numbers (1, 2, 3), Q only contains some whole numbers (0, 1, 2, 3), and R only contains some integers from -3 to 3.",
            "P, Q, and R are all finite sets of integers": "This is true but doesn't address the relationship between the sets.",
            "The union of P and the complement of Q equals R": "This is incorrect. P ∪ Q^c would include elements in P and elements not in Q, which doesn't equal R."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch1_t1_qm8',
        type: "mcq",
        question: "Which of the following is a correct representation of the density property of rational numbers?",
        options: [
            "Between any two rational numbers, there is at least one rational number",
            "Between any two rational numbers, there are infinitely many rational numbers",
            "Between any two rational numbers, there is exactly one rational number",
            "Between any two different rational numbers, there are exactly two rational numbers"
        ],
        correctAnswer: "Between any two rational numbers, there are infinitely many rational numbers",
        explanation: "The density property states that between any two rational numbers, there are infinitely many rational numbers. For example, between 1/4 and 1/2, we can find 3/8, 5/16, and infinitely many other rational numbers. This property distinguishes rational numbers from integers, which are not dense. 🌟",
        wrongAnswerExplanations: {
            "Between any two rational numbers, there is at least one rational number": "This is true but understates the property - there are infinitely many, not just one.",
            "Between any two rational numbers, there is exactly one rational number": "This is incorrect. There are infinitely many, not just one.",
            "Between any two different rational numbers, there are exactly two rational numbers": "This is incorrect. There are infinitely many, not just two."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch1_t1_qm9',
        type: "mcq",
        question: "What is the smallest number system to which the solution of the equation 2x + 5 = 0 belongs?",
        options: [
            "Natural Numbers",
            "Whole Numbers",
            "Integers",
            "Rational Numbers"
        ],
        correctAnswer: "Rational Numbers",
        explanation: "Solving 2x + 5 = 0, we get x = -5/2 = -2.5. This is a rational number (can be written as -5/2) but not an integer (has a fractional part). Therefore, the smallest number system containing -5/2 is the rational number system. 🧪",
        wrongAnswerExplanations: {
            "Natural Numbers": "Natural numbers only include positive counting numbers. -5/2 is negative, so it's not a natural number.",
            "Whole Numbers": "Whole numbers include 0 and positive integers. -5/2 is negative and has a fractional part, so it's not a whole number.",
            "Integers": "Integers include whole numbers and their negatives. -5/2 has a fractional part, so it's not an integer."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch1_t1_qm10',
        type: "mcq",
        question: "Which of the following sets is closed under division?",
        options: [
            "Natural Numbers",
            "Integers",
            "Rational Numbers (excluding division by 0)",
            "Even Integers"
        ],
        correctAnswer: "Rational Numbers (excluding division by 0)",
        explanation: "Rational numbers (excluding division by 0) are closed under division. If p/q and r/s are rational numbers (r ≠ 0), then (p/q) ÷ (r/s) = (p/q) × (s/r) = (p×s)/(q×r), which is also a rational number. This closure property is not true for natural numbers, integers, or even integers. ➗",
        wrongAnswerExplanations: {
            "Natural Numbers": "Natural numbers are not closed under division. For example, 1 ÷ 2 = 0.5, which is not a natural number.",
            "Integers": "Integers are not closed under division. For example, 5 ÷ 2 = 2.5, which is not an integer.",
            "Even Integers": "Even integers are not closed under division. For example, 2 ÷ 4 = 0.5, which is not an even integer."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch1_t1_qm11',
        type: "mcq",
        question: "For which of the following operations is the set of whole numbers not closed?",
        options: [
            "Addition",
            "Multiplication",
            "Subtraction",
            "Both Addition and Multiplication"
        ],
        correctAnswer: "Subtraction",
        explanation: "Whole numbers are not closed under subtraction. For example, 3 - 5 = -2, which is not a whole number. However, whole numbers are closed under addition and multiplication. This is why we need to expand to integers when we need a system closed under subtraction. ➖",
        wrongAnswerExplanations: {
            "Addition": "Whole numbers are closed under addition. The sum of any two whole numbers is always a whole number.",
            "Multiplication": "Whole numbers are closed under multiplication. The product of any two whole numbers is always a whole number.",
            "Both Addition and Multiplication": "This is incorrect as whole numbers are closed under both addition and multiplication."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch1_t1_qm12',
        type: "mcq",
        question: "If a and b are non-zero rational numbers such that a + b is irrational, which of the following statements must be true?",
        options: [
            "a is irrational and b is rational",
            "a is rational and b is irrational",
            "Both a and b are irrational",
            "Either a or b (or both) must be irrational"
        ],
        correctAnswer: "Either a or b (or both) must be irrational",
        explanation: "If a and b are both rational, their sum would also be rational (since rational numbers are closed under addition). Since a + b is irrational, at least one of a or b must be irrational. However, the question states that a and b are rational, which creates a contradiction. 🧩",
        wrongAnswerExplanations: {
            "a is irrational and b is rational": "This contradicts the given condition that a is rational.",
            "a is rational and b is irrational": "This contradicts the given condition that b is rational.",
            "Both a and b are irrational": "This contradicts the given condition that both a and b are rational."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch1_t1_qm13',
        type: "mcq",
        question: "Which number system has the property that every non-zero element has both an additive inverse and a multiplicative inverse within the system?",
        options: [
            "Natural Numbers",
            "Integers",
            "Rational Numbers",
            "Whole Numbers"
        ],
        correctAnswer: "Rational Numbers",
        explanation: "In rational numbers, every non-zero element has both an additive inverse and a multiplicative inverse. For any rational number p/q ≠ 0, the additive inverse is -p/q and the multiplicative inverse is q/p. Integers have additive inverses but not always multiplicative inverses within integers. ⚖️",
        wrongAnswerExplanations: {
            "Natural Numbers": "Natural numbers don't have additive inverses within the system. For example, the additive inverse of 3 is -3, which is not a natural number.",
            "Integers": "While integers have additive inverses, they don't always have multiplicative inverses within the system. For example, the multiplicative inverse of 2 is 1/2, which is not an integer.",
            "Whole Numbers": "Whole numbers don't have additive inverses within the system. For example, the additive inverse of 3 is -3, which is not a whole number."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch1_t1_qm14',
        type: "mcq",
        question: "If x is a natural number and y is an integer such that x + y = 0, what can we say about y?",
        options: [
            "y must be a negative integer",
            "y must be a non-positive integer",
            "y must be zero",
            "y can be any integer"
        ],
        correctAnswer: "y must be a negative integer",
        explanation: "If x is a natural number (x ≥ 1) and x + y = 0, then y = -x. Since x ≥ 1, y = -x ≤ -1, which means y must be a negative integer. For example, if x = 3, then y = -3. Natural numbers are positive, so their additive inverses are negative. ➖",
        wrongAnswerExplanations: {
            "y must be a non-positive integer": "This includes 0, but y cannot be 0 because x is at least 1, making y = -x at most -1.",
            "y must be zero": "This is incorrect because if y = 0 and x is a natural number (at least 1), then x + y = x ≥ 1, not 0.",
            "y can be any integer": "This is too general. y must be negative for the equation to be satisfied."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch1_t1_qm15',
        type: "mcq",
        question: "The statement 'Between any two distinct integers, there is always another integer' is:",
        options: [
            "True for all integers",
            "True only for consecutive integers",
            "False, because between consecutive integers there is no other integer",
            "False, because between any two integers there are infinitely many integers"
        ],
        correctAnswer: "False, because between consecutive integers there is no other integer",
        explanation: "The statement is false because between consecutive integers (like 3 and 4), there is no other integer. This contrasts with rational numbers, where there are infinitely many rational numbers between any two distinct rational numbers. Integers are not dense, while rational numbers are. 📊",
        wrongAnswerExplanations: {
            "True for all integers": "This is incorrect. Consider the consecutive integers 5 and 6; there is no integer between them.",
            "True only for consecutive integers": "This is the opposite of the truth. The statement is specifically false for consecutive integers.",
            "False, because between any two integers there are infinitely many integers": "This is incorrect. Between non-consecutive integers, there are only finitely many integers."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch1_t1_qm16',
        type: "mcq",
        question: "Which of the following number systems has the smallest cardinality (size)?",
        options: [
            "Natural Numbers",
            "Integers",
            "Rational Numbers",
            "All have the same cardinality"
        ],
        correctAnswer: "All have the same cardinality",
        explanation: "Surprisingly, natural numbers, integers, and rational numbers all have the same cardinality (size), known as countable infinity (ℵ₀). This can be proven using one-to-one correspondences. Despite rational numbers seeming 'more numerous,' they can be listed in a sequence just like the natural numbers. 🔢",
        wrongAnswerExplanations: {
            "Natural Numbers": "While natural numbers may seem to have the smallest size, in the theory of infinite sets, they have the same cardinality as integers and rational numbers.",
            "Integers": "Integers include all natural numbers and their negatives, but they still have the same cardinality as natural numbers and rational numbers.",
            "Rational Numbers": "Although rational numbers include fractions, they still have the same cardinality as natural numbers and integers."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch1_t1_qm17',
        type: "mcq",
        question: "In which number system does the equation x² = 2 have a solution?",
        options: [
            "Natural Numbers",
            "Integers",
            "Rational Numbers",
            "None of the above"
        ],
        correctAnswer: "None of the above",
        explanation: "The equation x² = 2 has the solution x = √2, which is an irrational number. √2 is not a natural number, integer, or rational number. It belongs to the set of irrational numbers. This is a famous result that was known to ancient Greek mathematicians. 📐",
        wrongAnswerExplanations: {
            "Natural Numbers": "No natural number squared equals 2. √2 is approximately 1.414, which is not a natural number.",
            "Integers": "No integer squared equals 2. √2 is irrational and not an integer.",
            "Rational Numbers": "√2 cannot be expressed as a ratio of integers, making it irrational, not rational."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch1_t1_qm18',
        type: "mcq",
        question: "If a, b, c are consecutive integers in ascending order, which of the following must be divisible by 3?",
        options: [
            "a + b + c",
            "a × b × c",
            "a² + b² + c²",
            "a + b² + c²"
        ],
        correctAnswer: "a + b + c",
        explanation: "If a, b, c are consecutive integers in ascending order, then b = a + 1 and c = a + 2. So, a + b + c = a + (a + 1) + (a + 2) = 3a + 3 = 3(a + 1), which is always divisible by 3 regardless of the value of a. This is a key property of consecutive integers. 🧮",
        wrongAnswerExplanations: {
            "a × b × c": "This is not necessarily divisible by 3. If a = 1, b = 2, c = 3, then a × b × c = 6, which is not divisible by 3.",
            "a² + b² + c²": "This is not necessarily divisible by 3. If a = 1, b = 2, c = 3, then a² + b² + c² = 1 + 4 + 9 = 14, which is not divisible by 3.",
            "a + b² + c²": "This is not necessarily divisible by 3. If a = 1, b = 2, c = 3, then a + b² + c² = 1 + 4 + 9 = 14, which is not divisible by 3."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch1_t1_qm19',
        type: "mcq",
        question: "What property is demonstrated by the equation (a + b) + c = a + (b + c) for all real numbers a, b, and c?",
        options: [
            "Commutative property",
            "Associative property",
            "Distributive property",
            "Closure property"
        ],
        correctAnswer: "Associative property",
        explanation: "The equation (a + b) + c = a + (b + c) demonstrates the associative property of addition. This property states that the way numbers are grouped in addition doesn't change the result. For example, (2 + 3) + 4 = 2 + (3 + 4). This property holds for addition and multiplication in real numbers. 🔄",
        wrongAnswerExplanations: {
            "Commutative property": "The commutative property is demonstrated by a + b = b + a, which states that the order of addends doesn't matter.",
            "Distributive property": "The distributive property is demonstrated by a × (b + c) = a × b + a × c, which relates multiplication to addition.",
            "Closure property": "The closure property states that the operation on elements of a set results in an element within the same set, which isn't what the given equation demonstrates."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch1_t1_qm20',
        type: "mcq",
        question: "Which of the following statements about whole numbers and integers is FALSE?",
        options: [
            "Every whole number is an integer",
            "Every integer is a whole number",
            "The set of whole numbers is a subset of the set of integers",
            "The smallest whole number is 0"
        ],
        correctAnswer: "Every integer is a whole number",
        explanation: "Not every integer is a whole number. Integers include negative numbers (like -1, -2, etc.), which are not whole numbers. Whole numbers only include 0 and positive integers (0, 1, 2, ...). For example, -5 is an integer but not a whole number. Understanding the correct containment relationships between number systems is crucial. 🔍",
        wrongAnswerExplanations: {
            "Every whole number is an integer": "This is true. Whole numbers (0, 1, 2, ...) are all integers.",
            "The set of whole numbers is a subset of the set of integers": "This is true. Every whole number belongs to the set of integers.",
            "The smallest whole number is 0": "This is true. By definition, whole numbers start from 0 and include all natural numbers."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    }
];
