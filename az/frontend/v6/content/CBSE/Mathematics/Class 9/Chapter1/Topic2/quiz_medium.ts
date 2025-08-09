// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 9\Chapter1\Topic2\quiz_medium.ts
import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl9_ch1_t2_qm1',
        type: "mcq",
        question: "Which of the following correctly shows the first few steps in proving that √2 is irrational?",
        options: [
            "Assume √2 is rational, so √2 = a/b where a and b are integers with no common factors; then 2 = a²/b²",
            "Assume √2 is rational, so √2 = p/q where p and q are real numbers",
            "Assume √2 is rational, so √2 = m/n where m and n are integers; then √2 × n = m",
            "Assume √2 is rational, so √2 = x/y where x and y are integers with no common factors; then x = 2y"
        ],
        correctAnswer: "Assume √2 is rational, so √2 = a/b where a and b are integers with no common factors; then 2 = a²/b²",
        explanation: "The proof begins by assuming √2 = a/b in lowest terms (no common factors). Squaring both sides: 2 = a²/b². Multiplying by b²: 2b² = a². This means a² is even, so a must be even. If a = 2k, then 2b² = 4k² or b² = 2k², making b even too—contradicting our assumption of no common factors. 🧠",
        wrongAnswerExplanations: {
            "Assume √2 is rational, so √2 = p/q where p and q are real numbers": "This is incorrect because rational numbers are defined as fractions of integers, not just any real numbers.",
            "Assume √2 is rational, so √2 = m/n where m and n are integers; then √2 × n = m": "This step is correct but insufficient for the proof, as it doesn't lead to the key contradiction.",
            "Assume √2 is rational, so √2 = x/y where x and y are integers with no common factors; then x = 2y": "This is incorrect. The relation would be x² = 2y², not x = 2y."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch1_t2_qm2',
        type: "mcq",
        question: "If a and b are rational numbers, and √a and √b are both irrational, which of the following must be irrational?",
        options: [
            "√(a + b)",
            "√(a × b)",
            "√a + √b",
            "√a × √b"
        ],
        correctAnswer: "√a + √b",
        explanation: "√a + √b must be irrational. If √a and √b are both irrational, their sum must be irrational (unless they're negatives of each other, which isn't the case since a and b are rational and their square roots are irrational). This follows from the property that if x is rational and y is irrational, then x + y must be irrational. 🧮",
        wrongAnswerExplanations: {
            "√(a + b)": "This could be rational. For example, if a = 1 and b = 3, then √(a + b) = √4 = 2, which is rational.",
            "√(a × b)": "This could be rational. For example, if a = 2 and b = 8, then √(a × b) = √16 = 4, which is rational.",
            "√a × √b": "This could be rational. For example, if a = 2 and b = 2, then √a × √b = √2 × √2 = 2, which is rational."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch1_t2_qm3',
        type: "mcq",
        question: "Which of the following expressions is guaranteed to be irrational if x is irrational and y is rational (y ≠ 0)?",
        options: [
            "x + y",
            "x - y",
            "x × y",
            "x ÷ y"
        ],
        correctAnswer: "x + y",
        explanation: "If x is irrational and y is rational (y ≠ 0), then x + y must be irrational. This can be proven by contradiction: if x + y were rational, then (x + y) - y = x would be rational, contradicting the given fact that x is irrational. The same argument applies to x - y, x × y, and x ÷ y. 🔍",
        wrongAnswerExplanations: {
            "x - y": "This is also guaranteed to be irrational under the given conditions, but only x + y was asked for.",
            "x × y": "This is also guaranteed to be irrational under the given conditions, but only x + y was asked for.",
            "x ÷ y": "This is also guaranteed to be irrational under the given conditions, but only x + y was asked for."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch1_t2_qm4',
        type: "mcq",
        question: "If x and y are both irrational numbers, which of the following could be rational?",
        options: [
            "x + y",
            "x - y",
            "x × y",
            "All of the above"
        ],
        correctAnswer: "All of the above",
        explanation: "When both x and y are irrational, any of their basic operations (addition, subtraction, multiplication) could potentially result in a rational number. For example, if x = π and y = -π, then x + y = 0 (rational). If x = √2 and y = √2, then x × y = 2 (rational). Operations on irrational numbers don't always yield irrational results. 🧩",
        wrongAnswerExplanations: {
            "x + y": "While this can be rational (e.g., π + (-π) = 0), it's not the only possibility.",
            "x - y": "While this can be rational (e.g., √2 - √2 = 0), it's not the only possibility.",
            "x × y": "While this can be rational (e.g., √2 × √2 = 2), it's not the only possibility."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch1_t2_qm5',
        type: "mcq",
        question: "Which of these irrational numbers can be constructed with just a compass and straightedge?",
        options: [
            "π",
            "e",
            "√3",
            "π/e"
        ],
        correctAnswer: "√3",
        explanation: "√3 can be constructed using compass and straightedge. One method is to construct a right triangle with base 1 and height √3 (using an equilateral triangle with side 2). The numbers π and e are transcendental and cannot be constructed using only compass and straightedge. This distinguishes algebraic irrationals from transcendental ones. 📐",
        wrongAnswerExplanations: {
            "π": "π is a transcendental number and cannot be constructed using only compass and straightedge.",
            "e": "e is a transcendental number and cannot be constructed using only compass and straightedge.",
            "π/e": "Since both π and e are transcendental, their quotient cannot be constructed using only compass and straightedge."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch1_t2_qm6',
        type: "mcq",
        question: "What is the value of (√5 - √2)(√5 + √2)?",
        options: [
            "3",
            "√10",
            "√3",
            "√7"
        ],
        correctAnswer: "3",
        explanation: "(√5 - √2)(√5 + √2) = (√5)² - (√2)² = 5 - 2 = 3. This is an application of the difference of squares formula: (a - b)(a + b) = a² - b². The irrational terms cancel out, resulting in a rational number. This shows how operations with irrational numbers can sometimes yield rational results. 🔢",
        wrongAnswerExplanations: {
            "√10": "This would be √5 × √2, which is not the correct application of the formula.",
            "√3": "This is incorrect. The answer is 3, not √3.",
            "√7": "This would be √5 + √2, which is not the correct application of the formula."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch1_t2_qm7',
        type: "mcq",
        question: "Which statement about the square root of a prime number is TRUE?",
        options: [
            "It is always a rational number",
            "It is always an irrational number",
            "It is sometimes rational and sometimes irrational",
            "It is neither rational nor irrational"
        ],
        correctAnswer: "It is always an irrational number",
        explanation: "The square root of any prime number is always irrational. A prime number, by definition, cannot be expressed as a product of smaller integers, so its square root cannot be simplified to a ratio of integers. Examples include √2, √3, √5, √7, etc. This is a fundamental result in number theory. 🔍",
        wrongAnswerExplanations: {
            "It is always a rational number": "This is false. The square root of a prime number is always irrational, not rational.",
            "It is sometimes rational and sometimes irrational": "This is false. The square root of a prime number is consistently irrational.",
            "It is neither rational nor irrational": "This is false. Every real number must be either rational or irrational, and the square root of a prime number is specifically irrational."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch1_t2_qm8',
        type: "mcq",
        question: "Which of these statements about the Golden Ratio (φ ≈ 1.618...) is TRUE?",
        options: [
            "It is the solution to the equation x² = x + 1",
            "It equals (1 + √5)/2",
            "It is the limit of the ratio of consecutive Fibonacci numbers",
            "All of the above"
        ],
        correctAnswer: "All of the above",
        explanation: "All statements about the Golden Ratio are true. It solves x² = x + 1 (multiplying both sides by x). It equals (1 + √5)/2, as derived from the quadratic formula. And it's the limit of the ratio of consecutive Fibonacci numbers (Fn+1/Fn → φ as n → ∞). These multiple characterizations show the fascinating connections in mathematics. ✨",
        wrongAnswerExplanations: {
            "It is the solution to the equation x² = x + 1": "This is true, but it's not the only correct statement.",
            "It equals (1 + √5)/2": "This is true, but it's not the only correct statement.",
            "It is the limit of the ratio of consecutive Fibonacci numbers": "This is true, but it's not the only correct statement."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch1_t2_qm9',
        type: "mcq",
        question: "Simplify: √18 - √8",
        options: [
            "√10",
            "√2",
            "2√2",
            "3√2 - 2√2 = √2"
        ],
        correctAnswer: "3√2 - 2√2 = √2",
        explanation: "√18 - √8 = √(9 × 2) - √(4 × 2) = 3√2 - 2√2 = √2. We factorize each radical into perfect squares and common factors, then simplify. This process helps in manipulating expressions with irrational numbers, especially square roots. The result √2 is still irrational. 🧮",
        wrongAnswerExplanations: {
            "√10": "This is incorrect. √18 - √8 doesn't equal √10.",
            "√2": "This is the correct numerical value, but the full working 3√2 - 2√2 = √2 shows the process.",
            "2√2": "This is incorrect. 3√2 - 2√2 = √2, not 2√2."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch1_t2_qm10',
        type: "mcq",
        question: "Which of these expressions equals √12 + √27?",
        options: [
            "√39",
            "3√3 + 2√3",
            "5√3",
            "3√4 + 3√3"
        ],
        correctAnswer: "5√3",
        explanation: "√12 + √27 = √(4 × 3) + √(9 × 3) = 2√3 + 3√3 = 5√3. We simplify by factoring out perfect squares (4 and 9) from the radicals, then use the property √(a × b) = √a × √b. Finally, we combine like terms by adding the coefficients of √3. The result remains irrational. 🔢",
        wrongAnswerExplanations: {
            "√39": "This is incorrect. Adding radicals doesn't work like √12 + √27 = √(12+27) = √39.",
            "3√3 + 2√3": "This is correct but not simplified. The final answer is 5√3.",
            "3√4 + 3√3": "This is incorrect. √12 = 2√3, not 3√4."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch1_t2_qm11',
        type: "mcq",
        question: "Which of the following is equivalent to 1/(√5 - 2)?",
        options: [
            "(√5 + 2)/1",
            "(√5 + 2)/(√5 - 4)",
            "(√5 + 2)/1",
            "(√5 + 2)/(√5² - 4)"
        ],
        correctAnswer: "(√5 + 2)/1",
        explanation: "To rationalize 1/(√5 - 2), multiply both numerator and denominator by (√5 + 2):\n1/(√5 - 2) = [(√5 + 2)/(√5 - 2)] × [(√5 + 2)/(√5 + 2)] = (√5 + 2)/[(√5)² - 2²] = (√5 + 2)/(5 - 4) = (√5 + 2)/1. Rationalizing eliminates irrational expressions from the denominator. 📝",
        wrongAnswerExplanations: {
            "(√5 + 2)/(√5 - 4)": "This is incorrect. When rationalizing, the denominator should be (√5)² - 2² = 5 - 4 = 1.",
            "(√5 + 2)/1": "This is the correct answer.",
            "(√5 + 2)/(√5² - 4)": "This notation is incorrect. The proper expression would be (√5)² - 4 = 5 - 4 = 1."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch1_t2_qm12',
        type: "mcq",
        question: "Which of the following most accurately describes π?",
        options: [
            "A rational approximation of 22/7",
            "An algebraic irrational number that satisfies a polynomial equation",
            "A transcendental irrational number that cannot be expressed as the root of any polynomial equation with integer coefficients",
            "The diagonal of a square with side length 1"
        ],
        correctAnswer: "A transcendental irrational number that cannot be expressed as the root of any polynomial equation with integer coefficients",
        explanation: "π is a transcendental irrational number, meaning it cannot be expressed as the root of any polynomial equation with integer coefficients. This was proven by Ferdinand von Lindemann in 1882. This property makes π fundamentally different from algebraic irrational numbers like √2, which do satisfy polynomial equations. 🥧",
        wrongAnswerExplanations: {
            "A rational approximation of 22/7": "22/7 ≈ 3.1429 is merely an approximation of π ≈ 3.1416, not the definition of π.",
            "An algebraic irrational number that satisfies a polynomial equation": "π is transcendental, not algebraic, so it does not satisfy any polynomial equation with integer coefficients.",
            "The diagonal of a square with side length 1": "The diagonal of a unit square is √2, not π."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch1_t2_qm13',
        type: "mcq",
        question: "For which value of n is √n rational?",
        options: [
            "n = 7",
            "n = 16",
            "n = 12",
            "n = 20"
        ],
        correctAnswer: "n = 16",
        explanation: "√16 = 4, which is rational. A square root is rational only when the number under the radical is a perfect square. Here, 16 = 4² is a perfect square, so its square root is the integer 4. The other options are not perfect squares, so their square roots are irrational. 📐",
        wrongAnswerExplanations: {
            "n = 7": "√7 is irrational because 7 is not a perfect square.",
            "n = 12": "√12 = 2√3 is irrational because 12 is not a perfect square.",
            "n = 20": "√20 = 2√5 is irrational because 20 is not a perfect square."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch1_t2_qm14',
        type: "mcq",
        question: "If √m and √n are both irrational, which of the following must also be irrational?",
        options: [
            "√(m × n)",
            "√m + √n",
            "√m - √n",
            "None of the above"
        ],
        correctAnswer: "None of the above",
        explanation: "None of these expressions must be irrational. For √(m×n), if m = 2 and n = 8, then √(m×n) = √16 = 4 (rational). For √m + √n, if m = 2 and n = 8, then √m + √n = √2 + 2√2 = 3√2 (irrational), but if m = 2 and n = 2, then √m + √n = 2√2 (irrational). Irrational inputs don't guarantee irrational outputs. 🧩",
        wrongAnswerExplanations: {
            "√(m × n)": "This can be rational. For example, if m = 2 and n = 8, then √(m×n) = √16 = 4.",
            "√m + √n": "This can be rational if √m = -√n, as the sum would be 0.",
            "√m - √n": "This can be rational if √m = √n, as the difference would be 0."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch1_t2_qm15',
        type: "mcq",
        question: "Which of these is an example of a constructible number (can be constructed with compass and straightedge)?",
        options: [
            "π",
            "∛2 (cube root of 2)",
            "√2 + √3",
            "π/4"
        ],
        correctAnswer: "√2 + √3",
        explanation: "√2 + √3 is constructible with compass and straightedge. Both √2 and √3 can be constructed individually, and their sum can also be constructed using basic geometric techniques. Constructible numbers include all numbers that can be created using the four basic operations and square roots. π and π/4 are transcendental and ∛2 requires cube roots. 📏",
        wrongAnswerExplanations: {
            "π": "π is transcendental and cannot be constructed with compass and straightedge.",
            "∛2 (cube root of 2)": "It was proven that ∛2 cannot be constructed with compass and straightedge (this relates to the famous problem of doubling a cube).",
            "π/4": "Since π cannot be constructed, neither can π/4."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch1_t2_qm16',
        type: "mcq",
        question: "Which property of irrational numbers was used to prove that the sum of a rational number and an irrational number must be irrational?",
        options: [
            "Closure property",
            "Density property",
            "Proof by contradiction",
            "Associative property"
        ],
        correctAnswer: "Proof by contradiction",
        explanation: "The proof uses contradiction: If r (rational) + i (irrational) = q (rational), then i = q - r. Since q and r are rational, and rational numbers are closed under subtraction, q - r would be rational. This contradicts our assumption that i is irrational. Therefore, r + i cannot be rational and must be irrational. This logic demonstrates how certain properties are proven. 🧠",
        wrongAnswerExplanations: {
            "Closure property": "This refers to when operations on elements of a set yield results within the same set. Irrational numbers aren't closed under addition or multiplication.",
            "Density property": "This refers to the fact that between any two irrational numbers, there are infinitely many more irrational numbers.",
            "Associative property": "This refers to (a + b) + c = a + (b + c), which isn't relevant to this proof."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch1_t2_qm17',
        type: "mcq",
        question: "Which of these is equivalent to √8 + √18?",
        options: [
            "√26",
            "2√2 + 3√2",
            "5√2",
            "√2 + 3√2"
        ],
        correctAnswer: "5√2",
        explanation: "√8 + √18 = √(4×2) + √(9×2) = 2√2 + 3√2 = 5√2. We factor out perfect squares from each radical, then simplify using the property √(a×b) = √a × √b. This example shows how to simplify expressions containing irrational numbers by identifying common factors and combining like terms. 🔢",
        wrongAnswerExplanations: {
            "√26": "This is incorrect. Adding radicals doesn't work like √8 + √18 = √(8+18) = √26.",
            "2√2 + 3√2": "This is correct but not fully simplified. The final answer is 5√2.",
            "√2 + 3√2": "This is incorrect, as √8 = 2√2, not √2."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch1_t2_qm18',
        type: "mcq",
        question: "What is the exact value of (√3 + 1)(√3 - 1)?",
        options: [
            "0",
            "2",
            "2√3",
            "√3 - 1"
        ],
        correctAnswer: "2",
        explanation: "(√3 + 1)(√3 - 1) = (√3)² - 1² = 3 - 1 = 2. This is an application of the difference of squares formula: (a + b)(a - b) = a² - b². Despite starting with irrational numbers (√3 + 1 and √3 - 1), the product is rational (2). This showcases how operations with irrational numbers can yield rational results. 🧮",
        wrongAnswerExplanations: {
            "0": "This would be the result if the expression were (√3 - 1)(√3 - 1), which it's not.",
            "2√3": "This would involve a term with √3, but the correct expansion eliminates the irrational terms.",
            "√3 - 1": "This is one of the factors, not the product of the two factors."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch1_t2_qm19',
        type: "mcq",
        question: "Which of these is the result of rationalizing the denominator of 3/(√5 - √2)?",
        options: [
            "(3√5 + 3√2)/3",
            "(3√5 + 3√2)/(5 - 2)",
            "(3√5 + 3√2)/(√5 + √2)",
            "(3√5 + 3√2)/(5 - 2√10 + 2)"
        ],
        correctAnswer: "(3√5 + 3√2)/(5 - 2)",
        explanation: "To rationalize 3/(√5 - √2), multiply both numerator and denominator by (√5 + √2):\n3/(√5 - √2) = 3(√5 + √2)/[(√5 - √2)(√5 + √2)] = 3(√5 + √2)/[(√5)² - (√2)²] = 3(√5 + √2)/(5 - 2) = (3√5 + 3√2)/3 = √5 + √2. Rationalizing removes irrational terms from the denominator. 📝",
        wrongAnswerExplanations: {
            "(3√5 + 3√2)/3": "This is the correct simplified form after rationalizing, but the question asks for the direct result of rationalizing.",
            "(3√5 + 3√2)/(√5 + √2)": "This is incorrect. The denominator after multiplying by (√5 + √2) should be (√5)² - (√2)² = 5 - 2 = 3.",
            "(3√5 + 3√2)/(5 - 2√10 + 2)": "This is incorrect. (√5 - √2)(√5 + √2) = (√5)² - (√2)² = 5 - 2, not 5 - 2√10 + 2."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch1_t2_qm20',
        type: "mcq",
        question: "If x is irrational and y is rational, for which of the following operations could the result be rational?",
        options: [
            "x + y",
            "x - y",
            "x × y (where y ≠ 0)",
            "x/x (where x ≠ 0)"
        ],
        correctAnswer: "x/x (where x ≠ 0)",
        explanation: "x/x = 1 (rational) when x ≠ 0, regardless of whether x is rational or irrational. For any non-zero number divided by itself, the result is always 1. The other operations (x + y, x - y, x × y) always produce irrational results when one operand is irrational and the other is rational (y ≠ 0). This highlights an important exception to the rule. ➗",
        wrongAnswerExplanations: {
            "x + y": "If x is irrational and y is rational, x + y must be irrational.",
            "x - y": "If x is irrational and y is rational, x - y must be irrational.",
            "x × y (where y ≠ 0)": "If x is irrational and y is rational (≠ 0), x × y must be irrational."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    }
];
