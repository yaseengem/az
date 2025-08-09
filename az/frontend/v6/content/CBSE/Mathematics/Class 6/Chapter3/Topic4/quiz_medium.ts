// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 6\Chapter3\Topic4\quiz_medium.ts
import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl6_ch3_t4_qm1',
        type: "mcq",
        question: "What is the prime factorization of 120?",
        options: ["2³ × 3 × 5", "2² × 3 × 5", "2 × 3 × 5", "2⁴ × 3 × 5"],
        correctAnswer: "2³ × 3 × 5",
        explanation: "120 = 2 × 60 = 2 × 2 × 30 = 2 × 2 × 2 × 15 = 2 × 2 × 2 × 3 × 5 = 2³ × 3 × 5. All factors are prime numbers. 🧮",
        wrongAnswerExplanations: {
            "2² × 3 × 5": "This would equal 4 × 3 × 5 = 60, not 120.",
            "2 × 3 × 5": "This would equal 30, not 120.",
            "2⁴ × 3 × 5": "This would equal 16 × 3 × 5 = 240, not 120."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch3_t4_qm2',
        type: "mcq",
        question: "Which number has the prime factorization 2² × 3 × 5²?",
        options: ["150", "200", "300", "450"],
        correctAnswer: "300",
        explanation: "2² × 3 × 5² = 4 × 3 × 25 = 12 × 25 = 300. This is the unique prime factorization of 300. 📊",
        wrongAnswerExplanations: {
            "150": "150 = 2 × 3 × 5², which is not equal to 2² × 3 × 5².",
            "200": "200 = 2³ × 5², which is not equal to 2² × 3 × 5².",
            "450": "450 = 2 × 3² × 5², which is not equal to 2² × 3 × 5²."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch3_t4_qm3',
        type: "mcq",
        question: "What is the HCF of 36 and 48 using prime factorization?",
        options: ["6", "12", "24", "144"],
        correctAnswer: "12",
        explanation: "36 = 2² × 3² and 48 = 2⁴ × 3. Taking the minimum powers: 2² × 3 = 4 × 3 = 12. So HCF = 12. ⚖️",
        wrongAnswerExplanations: {
            "6": "This is not the correct HCF based on the prime factorizations.",
            "24": "This is not the correct HCF based on the prime factorizations.",
            "144": "This is not the HCF but the product of 36 and 48 divided by their HCF (their LCM)."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch3_t4_qm4',
        type: "mcq",
        question: "What is the LCM of 24 and 40 using prime factorization?",
        options: ["60", "80", "120", "240"],
        correctAnswer: "120",
        explanation: "24 = 2³ × 3 and 40 = 2³ × 5. Taking maximum powers: 2³ × 3 × 5 = 8 × 3 × 5 = 120. So LCM = 120. ✓",
        wrongAnswerExplanations: {
            "60": "This is not the correct LCM based on the prime factorizations.",
            "80": "This is not the correct LCM based on the prime factorizations.",
            "240": "This is not the correct LCM based on the prime factorizations."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch3_t4_qm5',
        type: "mcq",
        question: "If the prime factorization of a number is 2² × 3 × 5², what is the square root of this number?",
        options: ["2 × 3 × 5", "2 × 5", "2 × 3¹/² × 5", "2 × 3 × 5¹/²"],
        correctAnswer: "2 × 3¹/² × 5",
        explanation: "Square root of 2² × 3 × 5² = 2¹ × 3^(1/2) × 5¹ = 2 × 3¹/² × 5. For a^n, the square root is a^(n/2). 🧩",
        wrongAnswerExplanations: {
            "2 × 3 × 5": "This is not the correct square root based on the prime factorization.",
            "2 × 5": "This is not the correct square root based on the prime factorization.",
            "2 × 3 × 5¹/²": "This is not the correct square root based on the prime factorization."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch3_t4_qm6',
        type: "mcq",
        question: "What is the smallest number that has a prime factorization containing 2², 3, and 5?",
        options: ["30", "60", "120", "600"],
        correctAnswer: "60",
        explanation: "The smallest number with prime factorization containing 2², 3, and 5 is 2² × 3 × 5 = 4 × 3 × 5 = 60. 🔍",
        wrongAnswerExplanations: {
            "30": "30 = 2 × 3 × 5, which doesn't contain 2².",
            "120": "120 = 2³ × 3 × 5, which has 2³ instead of 2².",
            "600": "600 = 2³ × 3 × 5², which has 2³ and 5² instead of 2² and 5."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch3_t4_qm7',
        type: "mcq",
        question: "What is the prime factorization of the LCM of 36 and 45?",
        options: ["2² × 3² × 5", "2² × 3³ × 5", "2³ × 3² × 5", "2³ × 3³ × 5"],
        correctAnswer: "2² × 3² × 5",
        explanation: "36 = 2² × 3² and 45 = 3² × 5. Taking maximum powers: 2² × 3² × 5 = 4 × 9 × 5 = 180. So LCM = 180. 🎯",
        wrongAnswerExplanations: {
            "2² × 3³ × 5": "This would give 4 × 27 × 5 = 540, which is not the LCM of 36 and 45.",
            "2³ × 3² × 5": "This would give 8 × 9 × 5 = 360, which is not the LCM of 36 and 45.",
            "2³ × 3³ × 5": "This would give 8 × 27 × 5 = 1080, which is not the LCM of 36 and 45."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch3_t4_qm8',
        type: "mcq",
        question: "Which of the following statements is true about prime factorization?",
        options: [
            "Every composite number has exactly one prime factorization",
            "Some composite numbers have more than one prime factorization",
            "Prime factorization always includes the number 2",
            "Prime factorization always includes at least three prime numbers"
        ],
        correctAnswer: "Every composite number has exactly one prime factorization",
        explanation: "The Fundamental Theorem of Arithmetic states that every composite number can be expressed as a unique product of prime numbers. 📚",
        wrongAnswerExplanations: {
            "Some composite numbers have more than one prime factorization": "This contradicts the Fundamental Theorem of Arithmetic.",
            "Prime factorization always includes the number 2": "Not all composite numbers include 2 in their prime factorization (e.g., 9 = 3²).",
            "Prime factorization always includes at least three prime numbers": "Some composite numbers have fewer than three prime factors (e.g., 4 = 2²)."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch3_t4_qm9',
        type: "mcq",
        question: "If n = 2³ × 3² × 5, which of the following is a factor of n?",
        options: ["2² × 3³ × 5", "2⁴ × 3 × 5", "2³ × 3 × 5²", "2² × 3 × 5"],
        correctAnswer: "2² × 3 × 5",
        explanation: "For a number to be a factor, its prime factorization must have powers ≤ those in n. 2² × 3 × 5 has 2², 3, and 5, all ≤ powers in n. ⭐",
        wrongAnswerExplanations: {
            "2² × 3³ × 5": "This has 3³, which exceeds the power of 3 (3²) in n, so it's not a factor.",
            "2⁴ × 3 × 5": "This has 2⁴, which exceeds the power of 2 (2³) in n, so it's not a factor.",
            "2³ × 3 × 5²": "This has 5², which exceeds the power of 5 (5¹) in n, so it's not a factor."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch3_t4_qm10',
        type: "mcq",
        question: "What is the prime factorization of 630?",
        options: ["2 × 3² × 5 × 7", "2 × 3 × 5 × 7²", "2 × 3 × 5² × 7", "2 × 3² × 5² × 7"],
        correctAnswer: "2 × 3² × 5 × 7",
        explanation: "630 = 2 × 315 = 2 × 3² × 5 × 7 = 2 × 9 × 5 × 7. All factors 2, 3, 5, and 7 are prime numbers. 🔢",
        wrongAnswerExplanations: {
            "2 × 3 × 5 × 7²": "This equals 2 × 3 × 5 × 49 = 30 × 49 = 1470, not 630.",
            "2 × 3 × 5² × 7": "This equals 2 × 3 × 25 × 7 = 6 × 25 × 7 = 1050, not 630.",
            "2 × 3² × 5² × 7": "This equals 2 × 9 × 25 × 7 = 18 × 25 × 7 = 3150, not 630."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch3_t4_qm11',
        type: "mcq",
        question: "What is the smallest number that has 2³, 3², and 5 in its prime factorization?",
        options: ["120", "360", "600", "1080"],
        correctAnswer: "360",
        explanation: "The smallest such number is exactly 2³ × 3² × 5 = 8 × 9 × 5 = 72 × 5 = 360. 🎲",
        wrongAnswerExplanations: {
            "120": "120 = 2³ × 3 × 5, which doesn't have 3² in its factorization.",
            "600": "600 = 2³ × 3 × 5², which doesn't have 3² in its factorization.",
            "1080": "1080 = 2³ × 3³ × 5, which has 3³ instead of 3²."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch3_t4_qm12',
        type: "mcq",
        question: "Which of the following is a perfect square based on its prime factorization?",
        options: ["12 = 2² × 3", "18 = 2 × 3²", "36 = 2² × 3²", "80 = 2⁴ × 5"],
        correctAnswer: "36 = 2² × 3²",
        explanation: "A number is a perfect square if all exponents in its prime factorization are even. In 2² × 3², both exponents are even (2). √36 = 6. ²",
        wrongAnswerExplanations: {
            "12 = 2² × 3": "The exponent of 3 is 1, which is not even, so 12 is not a perfect square.",
            "18 = 2 × 3²": "The exponent of 2 is 1, which is not even, so 18 is not a perfect square.",
            "80 = 2⁴ × 5": "The exponent of 5 is 1, which is not even, so 80 is not a perfect square."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch3_t4_qm13',
        type: "mcq",
        question: "Which number has a prime factorization with exactly five prime factors (counting repeated factors)?",
        options: ["24", "30", "32", "36"],
        correctAnswer: "32",
        explanation: "32 = 2⁵ = 2 × 2 × 2 × 2 × 2. This has five prime factors (all 2's). The others have fewer than five prime factors. 🧩",
        wrongAnswerExplanations: {
            "24": "24 = 2³ × 3 = 2 × 2 × 2 × 3, which has four prime factors.",
            "30": "30 = 2 × 3 × 5, which has three prime factors.",
            "36": "36 = 2² × 3² = 2 × 2 × 3 × 3, which has four prime factors."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch3_t4_qm14',
        type: "mcq",
        question: "If a number has the prime factorization 2³ × 3² × 5, how many different factors does it have?",
        options: ["18", "24", "30", "36"],
        correctAnswer: "24",
        explanation: "Number of factors = (3+1) × (2+1) × (1+1) = 4 × 3 × 2 = 24. For prime factorization p^a × q^b × r^c, it's (a+1)(b+1)(c+1). 📈",
        wrongAnswerExplanations: {
            "18": "This is not the correct application of the formula for calculating the number of factors.",
            "30": "This is not the correct application of the formula for calculating the number of factors.",
            "36": "This is not the correct application of the formula for calculating the number of factors."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch3_t4_qm15',
        type: "mcq",
        question: "The prime factorization of the LCM of 28 and 45 is:",
        options: ["2² × 3² × 5 × 7", "2³ × 3 × 5 × 7", "2² × 3² × 5", "2 × 3 × 5 × 7"],
        correctAnswer: "2² × 3² × 5 × 7",
        explanation: "28 = 2² × 7 and 45 = 3² × 5. Taking maximum powers: 2² × 3² × 5 × 7 = 4 × 9 × 5 × 7 = 1260. LCM = 1260. 🔍",
        wrongAnswerExplanations: {
            "2³ × 3 × 5 × 7": "This doesn't have the correct powers from the prime factorizations of 28 and 45.",
            "2² × 3² × 5": "This is missing the prime factor 7 from 28.",
            "2 × 3 × 5 × 7": "This doesn't have the correct powers from the prime factorizations of 28 and 45."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch3_t4_qm16',
        type: "mcq",
        question: "Which of these pairs of numbers is relatively prime (co-prime)?",
        options: ["15 and 28", "18 and 25", "20 and 42", "35 and 48"],
        correctAnswer: "18 and 25",
        explanation: "18 = 2 × 3² and 25 = 5². They share no common prime factors, making their HCF = 1. Thus, they are co-prime. ✓",
        wrongAnswerExplanations: {
            "15 and 28": "15 = 3 × 5 and 28 = 2² × 7. They share no common factors, so they are co-prime.",
            "20 and 42": "20 = 2² × 5 and 42 = 2 × 3 × 7. They share the factor 2, so they are not co-prime.",
            "35 and 48": "35 = 5 × 7 and 48 = 2⁴ × 3. They share no common factors, so they are co-prime."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch3_t4_qm17',
        type: "mcq",
        question: "What is the prime factorization of 441?",
        options: ["3² × 7²", "3 × 7³", "3⁴ × 7", "3² × 7³"],
        correctAnswer: "3² × 7²",
        explanation: "441 = 21² = (3 × 7)² = 3² × 7² = 9 × 49 = 441. Both 3 and 7 are prime numbers, so 3² × 7² is the prime factorization. 🎯",
        wrongAnswerExplanations: {
            "3 × 7³": "This equals 3 × 343 = 1029, which is not equal to 441.",
            "3⁴ × 7": "This equals 81 × 7 = 567, which is not equal to 441.",
            "3² × 7³": "This equals 9 × 343 = 3087, which is not equal to 441."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch3_t4_qm18',
        type: "mcq",
        question: "If the HCF of two numbers is 2² × 3 and their LCM is 2³ × 3² × 5, what could be the two numbers?",
        options: [
            "2² × 3 and 2³ × 3² × 5",
            "2² × 3 × 5 and 2³ × 3²",
            "2³ × 3 and 2² × 3² × 5",
            "2² × 3² and 2³ × 3 × 5"
        ],
        correctAnswer: "2³ × 3 and 2² × 3² × 5",
        explanation: "If HCF × LCM = a × b, then 2² × 3 × 2³ × 3² × 5 = a × b. Testing each option, only this satisfies the equation. 📊",
        wrongAnswerExplanations: {
            "2² × 3 and 2³ × 3² × 5": "These numbers don't satisfy the relationship with the given HCF and LCM.",
            "2² × 3 × 5 and 2³ × 3²": "These numbers don't satisfy the relationship with the given HCF and LCM.",
            "2² × 3² and 2³ × 3 × 5": "These numbers don't satisfy the relationship with the given HCF and LCM."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch3_t4_qm19',
        type: "mcq",
        question: "What is the largest number that divides 72 and 108 leaving remainders 4 and 4 respectively?",
        options: ["13", "17", "34", "68"],
        correctAnswer: "34",
        explanation: "Find HCF of (72-4, 108-4) = HCF(68, 104) = 4 × HCF(17, 26) = 4 × 1 = 4. Largest such number = HCF - 1 + remainder = 4 - 1 + 31 = 34. 🧮",
        wrongAnswerExplanations: {
            "13": "This is not the correct answer based on the HCF calculation.",
            "17": "This is not the correct answer based on the HCF calculation.",
            "68": "This is greater than both 72 and 108 minus their remainders, so it can't be the answer."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch3_t4_qm20',
        type: "mcq",
        question: "Which of the following cannot be expressed as a product of prime numbers?",
        options: ["0", "1", "37", "91"],
        correctAnswer: "1",
        explanation: "1 is neither prime nor composite and doesn't have a prime factorization. All other numbers > 1 can be expressed as products of prime numbers. 🔢",
        wrongAnswerExplanations: {
            "0": "0 is not expressible as a product of primes, as 0 is neither prime nor composite.",
            "37": "37 is itself a prime number, so its prime factorization is simply 37.",
            "91": "91 = 7 × 13, which is a product of prime numbers."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    }
];
