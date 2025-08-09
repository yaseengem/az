// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 9\Chapter1\Topic2\quiz_easy.ts
import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl9_ch1_t2_qe1',
        type: "mcq",
        question: "Which of the following numbers is irrational?",
        options: ["0.75", "0.333...", "0.101001000...", "2.125"],
        correctAnswer: "0.101001000...",
        explanation: "0.101001000... is irrational because its decimal expansion is non-terminating and non-repeating. The pattern keeps changing (increasing zeros between 1s), so it can't be represented as a fraction of integers. Irrational numbers have decimal expansions that never terminate or repeat. 🧮",
        wrongAnswerExplanations: {
            "0.75": "0.75 = 3/4, which is a rational number with a terminating decimal expansion.",
            "0.333...": "0.333... = 1/3, which is a rational number with a repeating decimal expansion.",
            "2.125": "2.125 = 17/8, which is a rational number with a terminating decimal expansion."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch1_t2_qe2',
        type: "mcq",
        question: "Which of the following is a characteristic of irrational numbers?",
        options: [
            "Can be expressed as a ratio of two integers",
            "Have terminating decimal expansions",
            "Have decimal expansions that repeat after a certain point",
            "Have decimal expansions that never terminate or repeat"
        ],
        correctAnswer: "Have decimal expansions that never terminate or repeat",
        explanation: "The defining characteristic of irrational numbers is that their decimal expansions never terminate (go on forever) and never repeat in a pattern. This is why they cannot be expressed as fractions of integers. Examples include π (3.14159...) and √2 (1.41421...). 🔢",
        wrongAnswerExplanations: {
            "Can be expressed as a ratio of two integers": "This defines rational numbers, not irrational numbers.",
            "Have terminating decimal expansions": "Terminating decimals are always rational numbers, not irrational.",
            "Have decimal expansions that repeat after a certain point": "Repeating decimals are always rational numbers, not irrational."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch1_t2_qe3',
        type: "mcq",
        question: "Which of the following is an irrational number?",
        options: ["√9", "√4", "√2", "√36"],
        correctAnswer: "√2",
        explanation: "√2 ≈ 1.41421... is irrational because it cannot be expressed as a fraction of integers. This was proven by the ancient Greeks. The other options simplify to rational numbers: √9 = 3, √4 = 2, and √36 = 6, all of which are integers and therefore rational. 📐",
        wrongAnswerExplanations: {
            "√9": "√9 = 3, which is a rational number.",
            "√4": "√4 = 2, which is a rational number.",
            "√36": "√36 = 6, which is a rational number."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch1_t2_qe4',
        type: "mcq",
        question: "Which famous irrational number represents the ratio of a circle's circumference to its diameter?",
        options: ["e", "φ", "√2", "π"],
        correctAnswer: "π",
        explanation: "π (pi) represents the ratio of a circle's circumference to its diameter. It's approximately 3.14159... and has been proven to be irrational. This constant appears in many formulas related to circles, such as area (πr²) and circumference (2πr). 🔄",
        wrongAnswerExplanations: {
            "e": "e (Euler's number) is approximately 2.71828... and is used in growth and decay calculations.",
            "φ": "φ (phi) is the Golden Ratio, approximately 1.61803..., found in nature and art.",
            "√2": "√2 is approximately 1.41421... and represents the diagonal of a unit square."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch1_t2_qe5',
        type: "mcq",
        question: "The decimal expansion of an irrational number is:",
        options: [
            "Always terminating",
            "Always repeating",
            "Either terminating or repeating",
            "Neither terminating nor repeating"
        ],
        correctAnswer: "Neither terminating nor repeating",
        explanation: "The decimal expansion of an irrational number is always non-terminating and non-repeating. This is the key characteristic that distinguishes irrational numbers from rational numbers, which have either terminating or repeating decimal expansions. This is why irrational numbers cannot be expressed as fractions. 🔍",
        wrongAnswerExplanations: {
            "Always terminating": "A terminating decimal expansion always represents a rational number, not an irrational number.",
            "Always repeating": "A repeating decimal expansion always represents a rational number, not an irrational number.",
            "Either terminating or repeating": "Both terminating and repeating decimal expansions represent rational numbers, not irrational numbers."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch1_t2_qe6',
        type: "mcq",
        question: "Which of these is NOT an irrational number?",
        options: ["π", "√3", "√25", "e"],
        correctAnswer: "√25",
        explanation: "√25 = 5, which is a rational number (specifically, an integer). An irrational number cannot be expressed as a ratio of integers. The other options (π, √3, and e) are all irrational numbers with non-terminating, non-repeating decimal expansions. 🧩",
        wrongAnswerExplanations: {
            "π": "π ≈ 3.14159... is an irrational number, as proven by Lambert in 1761.",
            "√3": "√3 ≈ 1.73205... is an irrational number, as it cannot be expressed as a fraction of integers.",
            "e": "e ≈ 2.71828... (Euler's number) is an irrational number used in calculus and exponential growth."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch1_t2_qe7',
        type: "mcq",
        question: "Which of the following best describes the relationship between rational and irrational numbers?",
        options: [
            "All rational numbers are irrational",
            "All irrational numbers are rational",
            "No number can be both rational and irrational",
            "Some numbers are both rational and irrational"
        ],
        correctAnswer: "No number can be both rational and irrational",
        explanation: "No number can be both rational and irrational - these categories are mutually exclusive. A number is either expressible as a ratio of integers (rational) or not (irrational). Together, rational and irrational numbers form the complete set of real numbers with no overlap between the two sets. 📊",
        wrongAnswerExplanations: {
            "All rational numbers are irrational": "This is false. Rational numbers and irrational numbers are disjoint sets.",
            "All irrational numbers are rational": "This is false. By definition, irrational numbers cannot be expressed as ratios of integers.",
            "Some numbers are both rational and irrational": "This is impossible because the definitions of rational and irrational numbers are mutually exclusive."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch1_t2_qe8',
        type: "mcq",
        question: "The square root of which number is irrational?",
        options: ["4", "9", "16", "12"],
        correctAnswer: "12",
        explanation: "√12 is irrational because 12 is not a perfect square. While √12 can be simplified to 2√3, it still contains the irrational number √3. A square root is rational only when the number under the radical is a perfect square, which 12 is not. 🔢",
        wrongAnswerExplanations: {
            "4": "√4 = 2, which is rational.",
            "9": "√9 = 3, which is rational.",
            "16": "√16 = 4, which is rational."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch1_t2_qe9',
        type: "mcq",
        question: "What happens when we add an irrational number to its negative?",
        options: [
            "The result is always 1",
            "The result is always 0",
            "The result is always irrational",
            "The result cannot be determined without knowing the specific number"
        ],
        correctAnswer: "The result is always 0",
        explanation: "When we add any number to its negative (additive inverse), the result is always 0. This is true for all real numbers, including irrational numbers. For example, π + (-π) = 0 and √2 + (-√2) = 0. This demonstrates the additive inverse property of real numbers. ➖",
        wrongAnswerExplanations: {
            "The result is always 1": "This is incorrect. Adding a number to its negative always gives 0, not 1.",
            "The result is always irrational": "This is incorrect. The result is 0, which is a rational number.",
            "The result cannot be determined without knowing the specific number": "This is incorrect. Regardless of the specific irrational number, adding it to its negative always gives 0."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch1_t2_qe10',
        type: "mcq",
        question: "Which of these famous mathematical constants is NOT irrational?",
        options: ["π", "e", "φ (Golden Ratio)", "1/7"],
        correctAnswer: "1/7",
        explanation: "1/7 = 0.142857... is rational because it can be expressed as a ratio of integers (1 divided by 7). It has a repeating decimal expansion (0.142857). The other options (π, e, and φ) are all famous irrational mathematical constants with non-terminating, non-repeating decimal expansions. 🔄",
        wrongAnswerExplanations: {
            "π": "π ≈ 3.14159... is an irrational number representing the ratio of a circle's circumference to its diameter.",
            "e": "e ≈ 2.71828... is an irrational number used as the base of natural logarithms.",
            "φ (Golden Ratio)": "φ ≈ 1.61803... is an irrational number found in art, architecture, and nature."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch1_t2_qe11',
        type: "mcq",
        question: "In which of these cases would the result definitely be an irrational number?",
        options: [
            "Adding two rational numbers",
            "Adding a rational number to an irrational number",
            "Multiplying two irrational numbers",
            "Dividing an irrational number by itself"
        ],
        correctAnswer: "Adding a rational number to an irrational number",
        explanation: "Adding a rational number to an irrational number always yields an irrational number. If r is rational and i is irrational, then r + i must be irrational. This can be proven by contradiction: if r + i were rational, then (r + i) - r = i would be rational, which contradicts the assumption that i is irrational. ➕",
        wrongAnswerExplanations: {
            "Adding two rational numbers": "The sum of two rational numbers is always rational, not irrational.",
            "Multiplying two irrational numbers": "The product of two irrational numbers can sometimes be rational. For example, √2 × √2 = 2.",
            "Dividing an irrational number by itself": "This equals 1, which is rational, not irrational (assuming the irrational number is non-zero)."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch1_t2_qe12',
        type: "mcq",
        question: "Which of the following describes a key step in proving that √2 is irrational?",
        options: [
            "Showing that √2 has a terminating decimal",
            "Using the Pythagorean theorem",
            "Using proof by contradiction assuming √2 = a/b where a and b have no common factors",
            "Showing that √2 = 1.414"
        ],
        correctAnswer: "Using proof by contradiction assuming √2 = a/b where a and b have no common factors",
        explanation: "The proof that √2 is irrational uses contradiction by assuming √2 = a/b (in lowest terms) and showing this leads to both a and b being even, contradicting the assumption that a/b is in lowest terms. This classic proof, attributed to ancient Greek mathematicians, demonstrates that √2 cannot be expressed as a fraction. 🧠",
        wrongAnswerExplanations: {
            "Showing that √2 has a terminating decimal": "This would prove √2 is rational, not irrational, and it's not true.",
            "Using the Pythagorean theorem": "While √2 relates to the Pythagorean theorem (as the diagonal of a unit square), the theorem itself doesn't prove irrationality.",
            "Showing that √2 = 1.414": "This is just an approximation; it doesn't prove irrationality."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch1_t2_qe13',
        type: "mcq",
        question: "On the number line, irrational numbers:",
        options: [
            "Can be represented by exact points",
            "Cannot be represented at all",
            "Can only be approximately located",
            "Can only be represented if they are algebraic"
        ],
        correctAnswer: "Can be represented by exact points",
        explanation: "Irrational numbers can be represented by exact points on the number line, even though we cannot express their decimal expansions exactly. For example, √2 corresponds to the exact distance of a unit square's diagonal. Every real number, rational or irrational, corresponds to a unique point on the number line. 📏",
        wrongAnswerExplanations: {
            "Cannot be represented at all": "This is false. Every real number, including irrationals, has a unique position on the number line.",
            "Can only be approximately located": "While calculations might involve approximations, the theoretical position is exact.",
            "Can only be represented if they are algebraic": "Both algebraic irrationals (like √2) and transcendental irrationals (like π) have exact positions on the number line."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch1_t2_qe14',
        type: "mcq",
        question: "Between any two distinct real numbers, how many irrational numbers exist?",
        options: [
            "None",
            "Exactly one",
            "A finite number",
            "Infinitely many"
        ],
        correctAnswer: "Infinitely many",
        explanation: "Between any two distinct real numbers, there are infinitely many irrational numbers. This demonstrates the density property of irrational numbers on the real number line. For example, between 0 and 1, there are infinitely many irrational numbers like √2/2, π/4, and many others. 🌟",
        wrongAnswerExplanations: {
            "None": "This is incorrect. Irrational numbers exist everywhere on the number line, including between any two real numbers.",
            "Exactly one": "This is incorrect. There are infinitely many, not just one.",
            "A finite number": "This is incorrect. The number of irrational numbers between any two distinct real numbers is infinite, not finite."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch1_t2_qe15',
        type: "mcq",
        question: "Which of the following correctly describes the Golden Ratio (φ)?",
        options: [
            "A rational number equal to 5/3",
            "An irrational number approximately equal to 1.618",
            "The ratio of a circle's area to its radius squared",
            "The ratio of a square's perimeter to its side length"
        ],
        correctAnswer: "An irrational number approximately equal to 1.618",
        explanation: "The Golden Ratio (φ) is an irrational number approximately equal to 1.618. It's found in nature, art, and architecture and has the unique property that φ = 1 + 1/φ. It's often associated with aesthetically pleasing proportions and appears in the Fibonacci sequence as the limit of the ratio of consecutive terms. ✨",
        wrongAnswerExplanations: {
            "A rational number equal to 5/3": "5/3 = 1.667 is close to but not equal to the Golden Ratio, which is irrational.",
            "The ratio of a circle's area to its radius squared": "This ratio equals π, not the Golden Ratio.",
            "The ratio of a square's perimeter to its side length": "This ratio equals 4, not the Golden Ratio."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch1_t2_qe16',
        type: "mcq",
        question: "√5 + √5 equals:",
        options: [
            "√10",
            "2√5",
            "5",
            "10"
        ],
        correctAnswer: "2√5",
        explanation: "√5 + √5 = 2√5, using the distributive property where we factor out the common term √5. This is similar to how x + x = 2x. The result 2√5 is still an irrational number because multiplying a rational number (2) by an irrational number (√5) always produces an irrational number. 🧮",
        wrongAnswerExplanations: {
            "√10": "This would be the result of √5 × √2, not √5 + √5.",
            "5": "This would be the result of √5 × √5, not √5 + √5.",
            "10": "This is not the correct result of √5 + √5."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch1_t2_qe17',
        type: "mcq",
        question: "Which of these equations has an irrational solution?",
        options: [
            "x + 3 = 8",
            "2x - 5 = 7",
            "x² = 3",
            "3x + 6 = 24"
        ],
        correctAnswer: "x² = 3",
        explanation: "The equation x² = 3 has the solution x = ±√3, which is irrational. √3 cannot be expressed as a ratio of integers and has a non-terminating, non-repeating decimal expansion. The other equations all have rational solutions. 📝",
        wrongAnswerExplanations: {
            "x + 3 = 8": "The solution is x = 5, which is rational.",
            "2x - 5 = 7": "The solution is x = 6, which is rational.",
            "3x + 6 = 24": "The solution is x = 6, which is rational."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch1_t2_qe18',
        type: "mcq",
        question: "If we multiply an irrational number by a non-zero rational number, the result is:",
        options: [
            "Always rational",
            "Always irrational",
            "Sometimes rational, sometimes irrational",
            "Always zero"
        ],
        correctAnswer: "Always irrational",
        explanation: "The product of an irrational number and a non-zero rational number is always irrational. If r is rational (≠0) and i is irrational, then r × i must be irrational. If r × i were rational, then (r × i) ÷ r = i would be rational, contradicting the assumption that i is irrational. ✖️",
        wrongAnswerExplanations: {
            "Always rational": "This is incorrect. The product cannot be rational when one factor is irrational and the other is non-zero rational.",
            "Sometimes rational, sometimes irrational": "This is incorrect. The product is always irrational under the given conditions.",
            "Always zero": "This is incorrect. The product will be zero only if one of the factors is zero, which contradicts our assumption of a non-zero rational number."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch1_t2_qe19',
        type: "mcq",
        question: "Which of these sets has the largest cardinality (size)?",
        options: [
            "The set of natural numbers",
            "The set of rational numbers",
            "The set of irrational numbers",
            "All have the same cardinality"
        ],
        correctAnswer: "The set of irrational numbers",
        explanation: "The set of irrational numbers has a larger cardinality than the sets of natural numbers and rational numbers. While natural and rational numbers are both countably infinite (ℵ₀), irrational numbers are uncountably infinite (have the cardinality of the continuum, 2^ℵ₀). This was proven by Cantor's diagonal argument. 🔢",
        wrongAnswerExplanations: {
            "The set of natural numbers": "Natural numbers are countably infinite, which is a smaller infinity than that of irrational numbers.",
            "The set of rational numbers": "Rational numbers are countably infinite, which is a smaller infinity than that of irrational numbers.",
            "All have the same cardinality": "This is incorrect. Irrational numbers have a strictly larger cardinality than natural or rational numbers."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch1_t2_qe20',
        type: "mcq",
        question: "Approximating irrational numbers like π to a fixed number of decimal places makes them:",
        options: [
            "Exact",
            "Rational",
            "Still irrational",
            "Integers"
        ],
        correctAnswer: "Rational",
        explanation: "Approximating an irrational number to a fixed number of decimal places creates a rational number. For example, approximating π as 3.14 creates the rational number 314/100. Any terminated decimal is rational. This is why we can never represent irrational numbers exactly in decimal form - we can only approximate them. 🔍",
        wrongAnswerExplanations: {
            "Exact": "This is incorrect. An approximation is never exact by definition.",
            "Still irrational": "This is incorrect. A terminated decimal is always rational, not irrational.",
            "Integers": "This is incorrect. Approximations with decimal places are not integers."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    }
];
