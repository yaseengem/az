import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: "cl9_ch1_t6_qm1",
        type: "mcq",
        question: "Which of these is a non-terminating non-repeating decimal?",
        options: ["0.5", "0.333...", "\( \pi \)", "1.25"],
        correctAnswer: "\( \pi \)",
        explanation: "\( \pi \) is a non-terminating non-repeating decimal as it neither ends nor has a repeating pattern.",
        wrongAnswerExplanations: {
            "0.5": "0.5 is a terminating decimal.",
            "0.333...": "0.333... is a non-terminating repeating decimal.",
            "1.25": "1.25 is a terminating decimal."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 60
    },
    {
        id: "cl9_ch1_t6_qm2",
        type: "mcq",
        question: "What type of decimal is 2.142857...?",
        options: ["Terminating", "Non-Terminating Repeating", "Non-Terminating Non-Repeating", "Undefined"],
        correctAnswer: "Non-Terminating Repeating",
        explanation: "2.142857... is a non-terminating repeating decimal as it has a repeating pattern.",
        wrongAnswerExplanations: {
            "Terminating": "Terminating decimals come to an end.",
            "Non-Terminating Non-Repeating": "Non-Terminating Non-Repeating decimals do not have a repeating pattern.",
            "Undefined": "The decimal is defined and is non-terminating repeating."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 60
    },
    {
        id: "cl9_ch1_t6_qm3",
        type: "mcq",
        question: "Which of the following is an irrational number?",
        options: ["0.25", "\( \sqrt{4} \)", "\( \sqrt{3} \)", "0.3333..."],
        correctAnswer: "\( \sqrt{3} \)",
        explanation: "\( \sqrt{3} \) is an irrational number as it cannot be expressed as a ratio of two integers and has a non-terminating, non-repeating decimal expansion.",
        wrongAnswerExplanations: {
            "0.25": "0.25 = 1/4, which is a rational number.",
            "\( \sqrt{4} \)": "\( \sqrt{4} \) = 2, which is a rational number.",
            "0.3333...": "0.3333... = 1/3, which is a rational number."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 60
    },
    {
        id: "cl9_ch1_t6_qm4",
        type: "mcq",
        question: "Which decimal representation is correct for the fraction 2/7?",
        options: ["0.285714...", "0.333...", "0.25", "0.28"],
        correctAnswer: "0.285714...",
        explanation: "The decimal expansion of 2/7 is 0.285714... which is a non-terminating repeating decimal with the pattern 285714 repeating.",
        wrongAnswerExplanations: {
            "0.333...": "0.333... is the decimal representation of 1/3, not 2/7.",
            "0.25": "0.25 is the decimal representation of 1/4, not 2/7.",
            "0.28": "0.28 is a terminating decimal that does not represent 2/7."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 60
    },
    {
        id: "cl9_ch1_t6_qm5",
        type: "mcq",
        question: "What is the rationalizing factor for the denominator of the fraction \( \\frac{1}{\\sqrt{5}} \)?",
        options: ["\( \sqrt{5} \)", "5", "\( \sqrt{25} \)", "1"],
        correctAnswer: "\( \sqrt{5} \)",
        explanation: "To rationalize the denominator of \( \\frac{1}{\\sqrt{5}} \), we multiply both numerator and denominator by \( \sqrt{5} \), resulting in \( \\frac{\sqrt{5}}{5} \), where the denominator is now rational.",
        wrongAnswerExplanations: {
            "5": "Multiplying by 5 would give \( \\frac{5}{5\\sqrt{5}} \), which still has an irrational denominator.",
            "\( \sqrt{25} \)": "\( \sqrt{25} = 5 \), which would not rationalize the denominator.",
            "1": "Multiplying by 1 would not change the expression."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 60
    },
    {
        id: "cl9_ch1_t6_qm6",
        type: "mcq",
        question: "When is a rational number's decimal representation terminating?",
        options: ["When its denominator has only factors of 2 and/or 5", "When its denominator is a prime number", "When its numerator is greater than its denominator", "When it can be simplified further"],
        correctAnswer: "When its denominator has only factors of 2 and/or 5",
        explanation: "A rational number has a terminating decimal representation only when its denominator (in simplified form) contains only the prime factors 2 and/or 5.",
        wrongAnswerExplanations: {
            "When its denominator is a prime number": "Prime denominators other than 2 and 5 will result in non-terminating decimals.",
            "When its numerator is greater than its denominator": "The relative size of numerator and denominator doesn't determine whether the decimal terminates.",
            "When it can be simplified further": "Even fully simplified fractions can have non-terminating decimals."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 60
    },
    {
        id: "cl9_ch1_t6_qm7",
        type: "mcq",
        question: "Which of the following represents \( 0.\\overline{23} \) as a fraction?",
        options: ["\( \\frac{23}{99} \)", "\( \\frac{23}{90} \)", "\( \\frac{23}{100} \)", "\( \\frac{23}{9} \)"],
        correctAnswer: "\( \\frac{23}{99} \)",
        explanation: "To convert a repeating decimal \( 0.\\overline{23} \) to a fraction, let x = 0.232323... Then 100x = 23.2323... and 100x - x = 23.2323... - 0.2323... = 23. So 99x = 23, giving x = 23/99.",
        wrongAnswerExplanations: {
            "\( \\frac{23}{90} \)": "This does not give the repeating decimal 0.232323...",
            "\( \\frac{23}{100} \)": "This gives 0.23, which is a terminating decimal.",
            "\( \\frac{23}{9} \)": "This gives 2.55555..., which is not equal to 0.232323..."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 60
    },
    {
        id: "cl9_ch1_t6_qm8",
        type: "mcq",
        question: "Which of the following statements is true about irrational numbers?",
        options: ["Every irrational number has a non-terminating, non-repeating decimal expansion", "Irrational numbers cannot be represented on a number line", "The sum of two irrational numbers is always irrational", "The product of two irrational numbers is always irrational"],
        correctAnswer: "Every irrational number has a non-terminating, non-repeating decimal expansion",
        explanation: "By definition, an irrational number has a non-terminating, non-repeating decimal expansion. This is what distinguishes them from rational numbers.",
        wrongAnswerExplanations: {
            "Irrational numbers cannot be represented on a number line": "Irrational numbers can be represented on a number line, though not with exact precision.",
            "The sum of two irrational numbers is always irrational": "The sum of two irrational numbers can be rational, e.g., π + (-π) = 0.",
            "The product of two irrational numbers is always irrational": "The product of two irrational numbers can be rational, e.g., √2 × √2 = 2."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 60
    },
    {
        id: "cl9_ch1_t6_qm9",
        type: "mcq",
        question: "If a rational number is represented as p/q in its lowest form and q = 2³ × 5², then its decimal expansion will be:",
        options: ["Terminating with at most 5 decimal places", "Terminating with exactly 3 decimal places", "Non-terminating repeating", "Non-terminating non-repeating"],
        correctAnswer: "Terminating with at most 5 decimal places",
        explanation: "When a rational number's denominator (in lowest form) only has prime factors of 2 and 5, it will have a terminating decimal. The number of decimal places is determined by the maximum of the powers of 2 and 5. Here, that's max(3,2) = 3 for 2³ and 2 for 5², so max(3,2) = 3. Therefore, the expansion will terminate with at most 3 decimal places.",
        wrongAnswerExplanations: {
            "Terminating with exactly 3 decimal places": "It will terminate with at most 3 places, but could be fewer if some trailing zeros occur.",
            "Non-terminating repeating": "Since the denominator only has factors of 2 and 5, it will not have a repeating decimal.",
            "Non-terminating non-repeating": "Only irrational numbers have non-terminating non-repeating decimals."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 60
    },
    {
        id: "cl9_ch1_t6_qm10",
        type: "mcq",
        question: "Which of the following best describes the square root of a perfect square?",
        options: ["Always rational", "Always irrational", "Sometimes rational, sometimes irrational", "Always an integer"],
        correctAnswer: "Always rational",
        explanation: "The square root of a perfect square is always rational because a perfect square by definition can be expressed as n², where n is an integer. So √(n²) = n, which is rational.",
        wrongAnswerExplanations: {
            "Always irrational": "Square roots of perfect squares are rational, not irrational.",
            "Sometimes rational, sometimes irrational": "Square roots of perfect squares are always rational.",
            "Always an integer": "While square roots of perfect squares are often integers, they can also be rational fractions if the perfect square is a fraction."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 60
    },
    {
        id: "cl9_ch1_t6_qm11",
        type: "mcq",
        question: "What is \( 0.\\overline{37} \) equal to?",
        options: ["\( \\frac{37}{99} \)", "\( \\frac{37}{90} \)", "\( \\frac{37}{100} \)", "\( \\frac{37}{9} \)"],
        correctAnswer: "\( \\frac{37}{99} \)",
        explanation: "Let x = 0.373737... Then 100x = 37.3737... Subtracting, we get 100x - x = 37.3737... - 0.3737... = 37, so 99x = 37, or x = 37/99.",
        wrongAnswerExplanations: {
            "\( \\frac{37}{90} \)": "This fraction does not equal 0.373737...",
            "\( \\frac{37}{100} \)": "This equals 0.37, which is a terminating decimal.",
            "\( \\frac{37}{9} \)": "This equals 4.111..., not 0.373737..."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 60
    },
    {
        id: "cl9_ch1_t6_qm12",
        type: "mcq",
        question: "Which of the following represents a rational number?",
        options: ["\( \\sqrt{25} \)", "\( \\sqrt{18} \)", "\( \\pi \)", "\( e \)"],
        correctAnswer: "\( \\sqrt{25} \)",
        explanation: "\( \\sqrt{25} = 5 \), which is a rational number because it can be expressed as the ratio of two integers (5/1).",
        wrongAnswerExplanations: {
            "\( \\sqrt{18} \)": "\( \\sqrt{18} \) is irrational as it cannot be simplified to a ratio of integers.",
            "\( \\pi \)": "π is a well-known irrational number.",
            "\( e \)": "e (Euler's number) is a well-known irrational number."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 60
    },
    {
        id: "cl9_ch1_t6_qm13",
        type: "mcq",
        question: "The decimal expansion of \( \\frac{3}{11} \) is:",
        options: ["0.272727...", "0.333...", "0.3", "0.27"],
        correctAnswer: "0.272727...",
        explanation: "Dividing 3 by 11 gives 0.272727..., which is a non-terminating repeating decimal where the digits '27' repeat indefinitely.",
        wrongAnswerExplanations: {
            "0.333...": "This is the decimal expansion of 1/3, not 3/11.",
            "0.3": "This terminating decimal does not equal 3/11.",
            "0.27": "This terminating decimal does not equal 3/11."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 60
    },
    {
        id: "cl9_ch1_t6_qm14",
        type: "mcq",
        question: "If the decimal expansion of a rational number is non-terminating, then it must be:",
        options: ["Repeating", "Non-repeating", "Either repeating or non-repeating", "Cannot be determined"],
        correctAnswer: "Repeating",
        explanation: "All rational numbers have either terminating or non-terminating repeating decimal expansions. If a rational number has a non-terminating decimal, it must repeat eventually.",
        wrongAnswerExplanations: {
            "Non-repeating": "Non-terminating non-repeating decimals represent irrational numbers, not rational numbers.",
            "Either repeating or non-repeating": "Rational numbers can never have non-terminating non-repeating decimals.",
            "Cannot be determined": "It is a mathematical fact that non-terminating decimals of rational numbers always repeat."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 60
    },
    {
        id: "cl9_ch1_t6_qm15",
        type: "mcq",
        question: "Which of the following numbers has a terminating decimal representation?",
        options: ["\( \\frac{7}{20} \)", "\( \\frac{7}{15} \)", "\( \\frac{7}{11} \)", "\( \\frac{7}{6} \)"],
        correctAnswer: "\( \\frac{7}{20} \)",
        explanation: "\( \\frac{7}{20} = \\frac{7}{2^2 \\times 5} \) has only 2 and 5 as prime factors in its denominator, so it has a terminating decimal expansion.",
        wrongAnswerExplanations: {
            "\( \\frac{7}{15} \)": "\( \\frac{7}{15} = \\frac{7}{3 \\times 5} \) has 3 as a prime factor in its denominator, so it has a non-terminating repeating decimal.",
            "\( \\frac{7}{11} \)": "The denominator 11 has prime factors other than 2 and 5, so it has a non-terminating repeating decimal.",
            "\( \\frac{7}{6} \)": "\( \\frac{7}{6} = \\frac{7}{2 \\times 3} \) has 3 as a prime factor in its denominator, so it has a non-terminating repeating decimal."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 60
    },
    {
        id: "cl9_ch1_t6_qm16",
        type: "mcq",
        question: "Which of the following is a correct decimal representation of \( \\frac{19}{8} \)?",
        options: ["2.375", "2.3777...", "2.378", "2.375..."],
        correctAnswer: "2.375",
        explanation: "Dividing 19 by 8 gives 2.375, which is a terminating decimal because 8 = 2³, and the denominator only has 2 as its prime factor.",
        wrongAnswerExplanations: {
            "2.3777...": "This is not the decimal expansion of 19/8.",
            "2.378": "This is not the decimal expansion of 19/8.",
            "2.375...": "The decimal expansion terminates at 2.375, there are no more digits after 5."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 60
    },
    {
        id: "cl9_ch1_t6_qm17",
        type: "mcq",
        question: "Which of the following is true about \( \\sqrt{2} + \\sqrt{8} \)?",
        options: ["It equals \( 3\\sqrt{2} \)", "It is irrational", "It equals 5", "It equals \( 2\\sqrt{2} \)"],
        correctAnswer: "It equals \( 3\\sqrt{2} \)",
        explanation: "\( \\sqrt{8} = \\sqrt{4 \\times 2} = 2\\sqrt{2} \). So, \( \\sqrt{2} + \\sqrt{8} = \\sqrt{2} + 2\\sqrt{2} = 3\\sqrt{2} \).",
        wrongAnswerExplanations: {
            "It is irrational": "While the result \( 3\\sqrt{2} \) is indeed irrational, this is not the most specific answer.",
            "It equals 5": "This is incorrect. The value is approximately 4.24, not 5.",
            "It equals \( 2\\sqrt{2} \)": "This is incorrect. \( \\sqrt{2} + \\sqrt{8} = \\sqrt{2} + 2\\sqrt{2} = 3\\sqrt{2} \)."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 60
    },
    {
        id: "cl9_ch1_t6_qm18",
        type: "mcq",
        question: "The decimal expansion of \( \\frac{2}{9} \) is:",
        options: ["0.222...", "0.22", "0.2", "0.02"],
        correctAnswer: "0.222...",
        explanation: "Dividing 2 by 9 gives 0.222... or \( 0.\\overline{2} \), which is a non-terminating repeating decimal.",
        wrongAnswerExplanations: {
            "0.22": "This is a terminating decimal that does not equal 2/9.",
            "0.2": "This is a terminating decimal that does not equal 2/9.",
            "0.02": "This is a terminating decimal that does not equal 2/9."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 60
    },
    {
        id: "cl9_ch1_t6_qm19",
        type: "mcq",
        question: "Which of these is the correct simplified form of \( \\frac{\\sqrt{18}}{\\sqrt{8}} \)?",
        options: ["\( \\frac{3\\sqrt{2}}{2\\sqrt{2}} \)", "\( \\frac{3}{2} \)", "\( \\sqrt{\\frac{9}{4}} \)", "\( 2\\sqrt{2} \)"],
        correctAnswer: "\( \\frac{3\\sqrt{2}}{2\\sqrt{2}} \)",
        explanation: "\( \\frac{\\sqrt{18}}{\\sqrt{8}} = \\frac{\\sqrt{9 \\times 2}}{\\sqrt{4 \\times 2}} = \\frac{3\\sqrt{2}}{2\\sqrt{2}} = \\frac{3}{2} \).",
        wrongAnswerExplanations: {
            "\( \\frac{3}{2} \)": "This is actually the correct fully simplified answer, but the question asked for the correct simplification of \( \\frac{\\sqrt{18}}{\\sqrt{8}} \), which first gives \( \\frac{3\\sqrt{2}}{2\\sqrt{2}} \).",
            "\( \\sqrt{\\frac{9}{4}} \)": "This equals \( \\frac{3}{2} \), but the question asked for the correct simplification of \( \\frac{\\sqrt{18}}{\\sqrt{8}} \).",
            "\( 2\\sqrt{2} \)": "This is incorrect. The correct simplification is \( \\frac{3}{2} \)."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 60
    },
    {
        id: "cl9_ch1_t6_qm20",
        type: "mcq",
        question: "If \( \\sqrt{x} \) is rational, which of the following statements is always true?",
        options: ["x is a perfect square", "x is rational", "x is irrational", "x is a prime number"],
        correctAnswer: "x is a perfect square",
        explanation: "For \( \\sqrt{x} \) to be rational, x must be a perfect square. If x is not a perfect square, then \( \\sqrt{x} \) will be irrational.",
        wrongAnswerExplanations: {
            "x is rational": "While x can be rational (and must be for \( \\sqrt{x} \) to be rational), this alone doesn't guarantee that \( \\sqrt{x} \) is rational. For example, 2 is rational, but \( \\sqrt{2} \) is irrational.",
            "x is irrational": "If x is irrational, \( \\sqrt{x} \) would also be irrational, not rational.",
            "x is a prime number": "If x is a prime number, \( \\sqrt{x} \) would be irrational, not rational."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 60
    }
];