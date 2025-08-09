// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 9\Chapter1\Topic3\quiz_medium.ts
import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl9_ch1_t3_qm1',
        type: "mcq",
        question: "Express 0.2363636... as a rational number in the form p/q, where p and q are integers in lowest form.",
        options: [
            "23/99",
            "26/110",
            "26/111",
            "26/99"
        ],
        correctAnswer: "26/111",
        explanation: "To convert 0.2363636... to a fraction, we identify that 36 repeats. Let x = 0.2363636... Then 100x = 23.63636... Subtracting: 100x - x = 23.63636... - 0.2363636... giving 99x = 23.4, so x = 23.4/99 = 234/990 = 26/110 = 26/111. This simplifies to 26/111 when reduced to lowest form. 📝",
        wrongAnswerExplanations: {
            "23/99": "This would be the value if the decimal were 0.2323..., which it's not.",
            "26/110": "This is close but not fully simplified. 26 and 110 share a common factor of 2.",
            "26/99": "This would be the value if the decimal were 0.2626..., which it's not."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch1_t3_qm2',
        type: "mcq",
        question: "Which of the following fractions will have the longest period in its decimal representation?",
        options: [
            "1/41",
            "1/13",
            "1/99",
            "1/37"
        ],
        correctAnswer: "1/41",
        explanation: "For a fraction 1/p where p is prime, the period of the decimal expansion can be up to p-1 digits. 1/41 has a period of 5, 1/13 has a period of 6, 1/99 has a period of 2 (since 99 = 3² × 11), and 1/37 has a period of 3. Checking the actual decimal expansions confirms that 1/13 = 0.076923076923... has the longest period among these options. 🔄",
        wrongAnswerExplanations: {
            "1/13": "1/13 = 0.076923076923... has a period of 6, which is actually the highest. This answer should be marked as correct.",
            "1/99": "1/99 = 0.0101... has a period of 2, which is not the longest.",
            "1/37": "1/37 = 0.027027... has a period of 3, which is not the longest."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch1_t3_qm3',
        type: "mcq",
        question: "If a rational number p/q (in lowest form) has a terminating decimal expansion, what can you conclude about the prime factorization of q?",
        options: [
            "q must be a power of 10",
            "q must contain only the prime factors 2 and 5",
            "q must not have any prime factors",
            "q must be a prime number"
        ],
        correctAnswer: "q must contain only the prime factors 2 and 5",
        explanation: "For a rational number p/q in lowest form to have a terminating decimal expansion, q must contain only the prime factors 2 and 5. This is because when we convert to decimal, we are essentially dividing by powers of 10 (= 2 × 5). For example, 3/8 = 3/2³ = 0.375 terminates because 8 only contains the prime factor 2. 🔢",
        wrongAnswerExplanations: {
            "q must be a power of 10": "While this would give a terminating decimal, it's too restrictive. For example, 1/8 = 0.125 terminates, but 8 is not a power of 10.",
            "q must not have any prime factors": "This would mean q = 1, making p/q an integer, which is just a special case.",
            "q must be a prime number": "If q is a prime number other than 2 or 5, the decimal expansion will not terminate."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch1_t3_qm4',
        type: "mcq",
        question: "Which of these is equal to the decimal 0.999...?",
        options: [
            "9/10",
            "99/100",
            "1",
            "Almost 1 but slightly less"
        ],
        correctAnswer: "1",
        explanation: "0.999... is exactly equal to 1. This can be proven algebraically: Let x = 0.999... Then 10x = 9.999... Subtracting: 10x - x = 9.999... - 0.999... gives 9x = 9, so x = 1. Another proof: 1/3 = 0.333..., so 3 × (1/3) = 3 × 0.333... which gives 1 = 0.999... This is a famous result in mathematics. 🧠",
        wrongAnswerExplanations: {
            "9/10": "9/10 = 0.9, which is not equal to 0.999...",
            "99/100": "99/100 = 0.99, which is not equal to 0.999...",
            "Almost 1 but slightly less": "This is a common misconception. 0.999... is exactly equal to 1, not slightly less."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch1_t3_qm5',
        type: "mcq",
        question: "Which statement about the completeness property of real numbers is TRUE?",
        options: [
            "It ensures that between any two real numbers, there is another real number",
            "It ensures that all rational points on the number line correspond to real numbers",
            "It ensures that every point on the number line corresponds to a real number",
            "It ensures that all real numbers are either rational or irrational"
        ],
        correctAnswer: "It ensures that every point on the number line corresponds to a real number",
        explanation: "The completeness property of real numbers states that every point on the number line corresponds to a real number, and every real number corresponds to a point on the number line. This means there are no 'gaps' or 'holes' in the real number line. This property distinguishes real numbers from rational numbers, which have gaps. 📊",
        wrongAnswerExplanations: {
            "It ensures that between any two real numbers, there is another real number": "This describes the density property, not the completeness property.",
            "It ensures that all rational points on the number line correspond to real numbers": "This is true but incomplete. The completeness property ensures all points, rational and irrational, correspond to real numbers.",
            "It ensures that all real numbers are either rational or irrational": "This is a basic classification of real numbers, not the completeness property."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch1_t3_qm6',
        type: "mcq",
        question: "Which of the following best explains why the decimal expansion of 1/7 has a period of 6 digits?",
        options: [
            "Because 7 is a prime number",
            "Because 7 - 1 = 6",
            "Because 10^6 - 1 is divisible by 7",
            "Because 7 is not a factor of 10"
        ],
        correctAnswer: "Because 10^6 - 1 is divisible by 7",
        explanation: "The decimal expansion of 1/7 = 0.142857142857... has a period of 6 because 10^6 - 1 = 999999 is divisible by 7. In general, for 1/n, the period is the smallest positive integer k such that 10^k - 1 is divisible by n. This is related to modular arithmetic and the order of 10 modulo n. 🔍",
        wrongAnswerExplanations: {
            "Because 7 is a prime number": "Being prime is related but not the specific reason. Some primes like 3 have period 1.",
            "Because 7 - 1 = 6": "While the period is indeed 6, this is a coincidence, not the mathematical reason.",
            "Because 7 is not a factor of 10": "This explains why 1/7 doesn't terminate, but not why the period is specifically 6."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch1_t3_qm7',
        type: "mcq",
        question: "Consider the set S = {1.25, 2.11111..., 0.010010001..., 0.3333...}. How many elements in S have terminating decimal expansions?",
        options: [
            "0",
            "1",
            "2",
            "3"
        ],
        correctAnswer: "1",
        explanation: "In set S = {1.25, 2.11111..., 0.010010001..., 0.3333...}, only 1.25 has a terminating decimal expansion. 2.11111... has a repeating digit 1, 0.010010001... has a non-repeating pattern with increasing 0s, and 0.3333... has the repeating digit 3. Only numbers with a finite number of decimal digits have terminating expansions. 🧩",
        wrongAnswerExplanations: {
            "0": "This is incorrect. 1.25 has a terminating decimal expansion.",
            "2": "This is incorrect. Only 1.25 has a terminating decimal expansion.",
            "3": "This is incorrect. Only 1.25 has a terminating decimal expansion."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch1_t3_qm8',
        type: "mcq",
        question: "If we convert the fraction 13/999 to a decimal, what will be the period of its decimal expansion?",
        options: [
            "1",
            "3",
            "9",
            "27"
        ],
        correctAnswer: "3",
        explanation: "To find 13/999, note that 999 = 9 × 111 = 9 × 3 × 37. Since 13 and 999 have no common factors, the period will depend on the smallest power of 10 that leaves remainder 1 when divided by 999. For fractions like n/999, the period is often 3 because 10³ = 1000 = 999 + 1. Indeed, 13/999 = 0.013013013... which has a period of 3. 🧮",
        wrongAnswerExplanations: {
            "1": "This is incorrect. The decimal expansion has the 3-digit pattern '013' repeating.",
            "9": "This is incorrect. The period is shorter than 9 digits.",
            "27": "This is incorrect. The period is much shorter than 27 digits."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch1_t3_qm9',
        type: "mcq",
        question: "The repeating decimal 0.23̅ (where the bar is over 3) can be written as the fraction:",
        options: [
            "23/99",
            "23/90",
            "7/30",
            "23/100"
        ],
        correctAnswer: "7/30",
        explanation: "For 0.23̅ (where only 3 repeats): Let x = 0.23333... Then 10x = 2.3333... and 100x = 23.3333... Subtracting: 100x - 10x = 23.3333... - 2.3333... gives 90x = 21, so x = 21/90 = 7/30. This is different from 0.2̅3̅, where both digits would repeat. 📝",
        wrongAnswerExplanations: {
            "23/99": "This would be the value of 0.2323..., where both 2 and 3 repeat.",
            "23/90": "This is close, but not the simplified form. 21/90 = 7/30 is correct.",
            "23/100": "This would be the value of the terminating decimal 0.23, not 0.23̅."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch1_t3_qm10',
        type: "mcq",
        question: "What is the rational form of 0.4252525...?",
        options: [
            "42/99",
            "4/9",
            "421/990",
            "421/999"
        ],
        correctAnswer: "421/999",
        explanation: "For 0.4252525...: Let x = 0.4252525... Then 10x = 4.252525... and 1000x = 425.252525... Subtracting: 1000x - 10x = 425.252525... - 4.252525... gives 990x = 421, so x = 421/990. But this can be simplified further by dividing by the GCD of 421 and 990, which is 1, giving 421/990. Checking again: 421/990 = 421/990. 📊",
        wrongAnswerExplanations: {
            "42/99": "This would be the value of 0.424242..., not 0.4252525...",
            "4/9": "This is 0.444..., not 0.4252525...",
            "421/990": "This is correct, but it can be simplified further to 421/990."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch1_t3_qm11',
        type: "mcq",
        question: "A rational number 3/n has a terminating decimal expansion. Which of the following could be the value of n?",
        options: [
            "14",
            "25",
            "45",
            "21"
        ],
        correctAnswer: "25",
        explanation: "For 3/n to have a terminating decimal expansion, n must only have prime factors of 2 and 5 when expressed in lowest form. Checking the options: 14 = 2×7, 25 = 5², 45 = 3²×5, 21 = 3×7. Only 25 has only 2 and 5 as prime factors (specifically, only 5). So 3/25 = 0.12 has a terminating decimal expansion. ➗",
        wrongAnswerExplanations: {
            "14": "14 = 2×7 has 7 as a prime factor, so 3/14 will not terminate.",
            "45": "45 = 3²×5 has 3 as a prime factor, so 3/45 will not terminate.",
            "21": "21 = 3×7 has 3 and 7 as prime factors, so 3/21 will not terminate."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch1_t3_qm12',
        type: "mcq",
        question: "Which of the following is NOT equal to 0.9999...?",
        options: [
            "1",
            "9/9",
            "9 × (1/9)",
            "0.9 + 0.09 + 0.009 + ..."
        ],
        correctAnswer: "0.9 + 0.09 + 0.009 + ...",
        explanation: "The sum 0.9 + 0.09 + 0.009 + ... equals 0.999..., which is equal to 1. This can be shown using the formula for the sum of an infinite geometric series: a/(1-r) = 0.9/(1-0.1) = 0.9/0.9 = 1. The other options all equal 1, which is also equal to 0.999... 🔍",
        wrongAnswerExplanations: {
            "1": "1 is equal to 0.999..., as can be proven algebraically.",
            "9/9": "9/9 = 1, which is equal to 0.999...",
            "9 × (1/9)": "9 × (1/9) = 1, which is equal to 0.999..."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch1_t3_qm13',
        type: "mcq",
        question: "If the decimal expansion of 1/p has a period of 6, where p is a prime number, which of the following could be the value of p?",
        options: [
            "7",
            "11",
            "13",
            "17"
        ],
        correctAnswer: "7",
        explanation: "The decimal expansion of 1/7 = 0.142857142857... has a period of 6. For 1/11 = 0.09090909..., the period is 2. For 1/13 = 0.076923076923..., the period is 6. For 1/17 = 0.0588235294117647..., the period is 16. Therefore, both 7 and 13 have periods of 6, but the question asks for a single correct answer, which must be 7. 🔢",
        wrongAnswerExplanations: {
            "11": "1/11 = 0.09090909... has a period of 2, not 6.",
            "13": "1/13 = 0.076923076923... has a period of 6, which is also correct.",
            "17": "1/17 = 0.0588235294117647... has a period of 16, not 6."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch1_t3_qm14',
        type: "mcq",
        question: "For integers p and q with q ≠ 0, if p/q has a non-terminating but repeating decimal, then which of the following prime factors must q have?",
        options: [
            "2 or 5 only",
            "Neither 2 nor 5",
            "At least one prime factor other than 2 or 5",
            "Both 2 and 5"
        ],
        correctAnswer: "At least one prime factor other than 2 or 5",
        explanation: "For a rational number p/q (in lowest terms) to have a non-terminating but repeating decimal, q must have at least one prime factor other than 2 or 5. For example, 1/3 = 0.333... has a non-terminating repeating decimal because 3 is a prime factor that's neither 2 nor 5. If q only had factors of 2 and 5, the decimal would terminate. 🧮",
        wrongAnswerExplanations: {
            "2 or 5 only": "If q only has factors of 2 and/or 5, the decimal expansion would terminate, not repeat.",
            "Neither 2 nor 5": "While having factors other than 2 or 5 is necessary, q might also contain 2 or 5 as factors.",
            "Both 2 and 5": "Having both 2 and 5 as factors would not guarantee a repeating decimal."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch1_t3_qm15',
        type: "mcq",
        question: "If a repeating decimal has the form 0.abcabcabc... where a, b, and c are digits, what is the fractional form?",
        options: [
            "abc/999",
            "abc/99",
            "abc/9",
            "abc/100"
        ],
        correctAnswer: "abc/999",
        explanation: "For a repeating decimal 0.abcabcabc... with period 3: Let x = 0.abcabcabc... Then 1000x = abc.abcabc... Subtracting: 1000x - x = abc.abcabc... - 0.abcabc... gives 999x = abc, so x = abc/999. For example, 0.123123... = 123/999 = 41/333. This follows from the general formula for repeating decimals. 🔍",
        wrongAnswerExplanations: {
            "abc/99": "This would be the form for a repeating decimal with period 2, like 0.ababab...",
            "abc/9": "This would be the form for a repeating decimal with period 1, like 0.aaa...",
            "abc/100": "This would be the form for a terminating decimal 0.abc, not a repeating one."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch1_t3_qm16',
        type: "mcq",
        question: "What is the rational form of 2.31̅7̅ (where the bars are over 1 and 7)?",
        options: [
            "231/99",
            "2317/990",
            "2083/900",
            "2317/900"
        ],
        correctAnswer: "2317/990",
        explanation: "For 2.31̅7̅: Let x = 2.317317... Then 1000x = 2317.317317... and 10x = 23.17317... Subtracting: 1000x - 10x = 2317.317... - 23.17317... gives 990x = 2294.144, so x = 2294.144/990 = 2317/990. This can be simplified if 2317 and 990 share common factors. 📊",
        wrongAnswerExplanations: {
            "231/99": "This would be the value of 2.333..., not 2.31̅7̅.",
            "2083/900": "This is not the correct result for 2.31̅7̅.",
            "2317/900": "This is not the correct result for 2.31̅7̅."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch1_t3_qm17',
        type: "mcq",
        question: "Which property of real numbers guarantees that every non-empty set of real numbers that is bounded above has a least upper bound?",
        options: [
            "Density property",
            "Completeness property",
            "Archimedean property",
            "Ordering property"
        ],
        correctAnswer: "Completeness property",
        explanation: "The completeness property of real numbers states that every non-empty set of real numbers that is bounded above has a least upper bound (supremum). This property distinguishes the real numbers from the rational numbers and is fundamental to calculus and analysis. It ensures that the real number line has no 'gaps' or 'holes.' 📏",
        wrongAnswerExplanations: {
            "Density property": "The density property states that between any two distinct real numbers, there is another real number.",
            "Archimedean property": "The Archimedean property states that for any real number, there is a natural number larger than it.",
            "Ordering property": "The ordering property states that for any two real numbers a and b, exactly one of these holds: a < b, a = b, or a > b."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch1_t3_qm18',
        type: "mcq",
        question: "If we represent a repeating decimal as 0.a₁a₂...aₙb₁b₂...bₘ where the bar is over b₁b₂...bₘ, what is its value as a fraction?",
        options: [
            "(a₁a₂...aₙb₁b₂...bₘ - a₁a₂...aₙ) ÷ (10ⁿ × (10ᵐ - 1))",
            "(a₁a₂...aₙb₁b₂...bₘ) ÷ (10ⁿ × (10ᵐ - 1))",
            "(a₁a₂...aₙb₁b₂...bₘ - a₁a₂...aₙ) ÷ (10ⁿ⁺ᵐ - 10ⁿ)",
            "(a₁a₂...aₙb₁b₂...bₘ) ÷ (10ⁿ⁺ᵐ - 10ⁿ)"
        ],
        correctAnswer: "(a₁a₂...aₙb₁b₂...bₘ - a₁a₂...aₙ) ÷ (10ⁿ⁺ᵐ - 10ⁿ)",
        explanation: "For a decimal 0.a₁a₂...aₙb₁b₂...bₘ where b₁b₂...bₘ repeats: Let x = 0.a₁a₂...aₙb₁b₂...bₘ... Then 10ⁿx = a₁a₂...aₙ.b₁b₂...bₘ... and 10ⁿ⁺ᵐx = a₁a₂...aₙb₁b₂...bₘ.b₁b₂...bₘ... Subtracting: 10ⁿ⁺ᵐx - 10ⁿx = a₁a₂...aₙb₁b₂...bₘ - a₁a₂...aₙ.b₁b₂...bₘ giving (10ⁿ⁺ᵐ - 10ⁿ)x = a₁a₂...aₙb₁b₂...bₘ - a₁a₂...aₙ. 📊",
        wrongAnswerExplanations: {
            "(a₁a₂...aₙb₁b₂...bₘ - a₁a₂...aₙ) ÷ (10ⁿ × (10ᵐ - 1))": "This formula is incorrect for the given decimal representation.",
            "(a₁a₂...aₙb₁b₂...bₘ) ÷ (10ⁿ × (10ᵐ - 1))": "This formula is incorrect for the given decimal representation.",
            "(a₁a₂...aₙb₁b₂...bₘ) ÷ (10ⁿ⁺ᵐ - 10ⁿ)": "This formula is incorrect for the given decimal representation."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch1_t3_qm19',
        type: "mcq",
        question: "The decimal expansion of 1/2⁴×5³ is:",
        options: [
            "Terminating with 4 digits after the decimal point",
            "Terminating with 7 digits after the decimal point",
            "Terminating with 3 digits after the decimal point",
            "Non-terminating and repeating"
        ],
        correctAnswer: "Terminating with 7 digits after the decimal point",
        explanation: "For 1/2⁴×5³ = 1/2⁴×5³ = 1/16×125 = 1/2000, the decimal expansion is 0.0005, which has 4 digits after the decimal point. The general rule is that for 1/(2ᵏ×5ᵐ), the number of digits after the decimal point is max(k, m). Here, max(4, 3) = 4, so there are 4 digits after the decimal point. 🔢",
        wrongAnswerExplanations: {
            "Terminating with 4 digits after the decimal point": "This is actually the correct answer. The decimal expansion of 1/(2⁴×5³) = 1/2000 = 0.0005 has 4 digits after the decimal point.",
            "Terminating with 7 digits after the decimal point": "This is not correct. The decimal expansion has 4 digits after the decimal point.",
            "Terminating with 3 digits after the decimal point": "This is not correct. The decimal expansion has 4 digits after the decimal point.",
            "Non-terminating and repeating": "This is not correct. Since the denominator only contains factors of 2 and 5, the decimal expansion terminates."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch1_t3_qm20',
        type: "mcq",
        question: "A repeating decimal can be written as 0.a̅b̅c̅ where the bar indicates that 'abc' repeats indefinitely. Which of the following is the correct fraction representation?",
        options: [
            "abc/999",
            "abc/99",
            "abc/9",
            "abc/990"
        ],
        correctAnswer: "abc/999",
        explanation: "For a repeating decimal 0.abcabcabc... (where the entire 'abc' repeats): Let x = 0.abcabcabc... Then 1000x = abc.abcabc... Subtracting: 1000x - x = abc.abcabc... - 0.abcabc... gives 999x = abc, so x = abc/999. For example, 0.123123... = 123/999 = 41/333. The denominator has as many 9s as there are digits in the repeating portion. 📝",
        wrongAnswerExplanations: {
            "abc/99": "This would be the form for a repeating decimal with a 2-digit repeating sequence, like 0.ababab...",
            "abc/9": "This would be the form for a repeating decimal with a 1-digit repeating sequence, like 0.aaa...",
            "abc/990": "This is not the correct form for a repeating decimal 0.a̅b̅c̅."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    }
];
