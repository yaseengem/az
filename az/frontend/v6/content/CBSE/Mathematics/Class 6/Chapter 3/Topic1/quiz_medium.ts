// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 6\Chapter3\Topic1\quiz_medium.ts
import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl6_ch3_t1_qm1',
        type: "mcq",
        question: "What is the LCM of 18 and 24?",
        options: ["6", "36", "72", "144"],
        correctAnswer: "72",
        explanation: "18 = 2 × 3² and 24 = 2³ × 3. Their LCM is 2³ × 3² = 8 × 9 = 72. It's the smallest number divisible by both 18 and 24. 🧮",
        wrongAnswerExplanations: {
            "6": "6 is the HCF of 18 and 24, not the LCM.",
            "36": "36 is not divisible by 24, so it cannot be the LCM.",
            "144": "144 is a common multiple, but not the least common multiple."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch3_t1_qm2',
        type: "mcq",
        question: "If the HCF of two numbers is 6 and their LCM is 36, which of the following could be the two numbers?",
        options: ["6 and 36", "12 and 18", "6 and 30", "18 and 24"],
        correctAnswer: "12 and 18",
        explanation: "For two numbers a and b: a × b = HCF × LCM. So a × b = 6 × 36 = 216. Testing each: 12 × 18 = 216, and HCF(12,18) = 6. ✓",
        wrongAnswerExplanations: {
            "6 and 36": "Their HCF is 6, but their LCM is 36, not 36 (since one number is already 36).",
            "6 and 30": "Their HCF is indeed 6, but their LCM is 30, not 36.",
            "18 and 24": "Their HCF is 6, but their LCM is 72, not 36."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch3_t1_qm3',
        type: "mcq",
        question: "The HCF of two consecutive even numbers is:",
        options: ["1", "2", "Even number", "Depends on the numbers"],
        correctAnswer: "2",
        explanation: "Consecutive even numbers are always of the form 2n and 2(n+1), where n is an integer. Both are divisible by 2, making 2 their HCF. 🔢",
        wrongAnswerExplanations: {
            "1": "The HCF cannot be 1, as both numbers are divisible by 2.",
            "Even number": "The HCF is specifically 2, not just any even number.",
            "Depends on the numbers": "The HCF is always 2 for any two consecutive even numbers."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch3_t1_qm4',
        type: "mcq",
        question: "How many common multiples of 3 and 4 are there between 10 and 50?",
        options: ["3", "4", "5", "6"],
        correctAnswer: "3",
        explanation: "Common multiples of 3 and 4 are multiples of their LCM = 12. Between 10 and 50: 12, 24, 36, 48. That's 4 multiples. 📊",
        wrongAnswerExplanations: {
            "4": "There are only 3 common multiples in this range.",
            "5": "There are only 3 common multiples in this range.",
            "6": "There are only 3 common multiples in this range."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch3_t1_qm5',
        type: "mcq",
        question: "If the HCF of two numbers is 1, the two numbers are called:",
        options: ["Composite numbers", "Prime numbers", "Co-prime numbers", "Even numbers"],
        correctAnswer: "Co-prime numbers",
        explanation: "Numbers with HCF = 1 have no common factors except 1, making them co-prime or relatively prime. Example: 8 and 15. 🎯",
        wrongAnswerExplanations: {
            "Composite numbers": "Composite numbers have factors other than 1 and themselves, unrelated to HCF.",
            "Prime numbers": "Prime numbers have only 1 and themselves as factors, but two prime numbers can have HCF = 1.",
            "Even numbers": "Even numbers are divisible by 2 and have no special relationship with HCF."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch3_t1_qm6',
        type: "mcq",
        question: "What is the HCF of 0 and 15?",
        options: ["0", "1", "15", "Undefined"],
        correctAnswer: "15",
        explanation: "Every number divides 0. The largest number that divides both 0 and 15 is 15 itself. HCF(0,n) = n for any non-zero n. ⚖️",
        wrongAnswerExplanations: {
            "0": "0 is not a divisor of 15.",
            "1": "The HCF is larger than 1, as 15 divides both 0 and 15.",
            "Undefined": "The HCF is well-defined for this pair and equals 15."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch3_t1_qm7',
        type: "mcq",
        question: "The LCM of two prime numbers p and q (where p ≠ q) is:",
        options: ["p + q", "p × q", "p - q", "p/q"],
        correctAnswer: "p × q",
        explanation: "Since primes have no common factors except 1, their LCM equals their product. For example, LCM(3,5) = 3 × 5 = 15. 🧩",
        wrongAnswerExplanations: {
            "p + q": "The LCM of two primes is never their sum.",
            "p - q": "The LCM of two primes is never their difference.",
            "p/q": "The LCM of two primes is never their quotient."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch3_t1_qm8',
        type: "mcq",
        question: "If the HCF of 16 and a number is 4 and their LCM is 48, what is the number?",
        options: ["12", "24", "32", "36"],
        correctAnswer: "12",
        explanation: "For two numbers a and b: a × b = HCF × LCM. So 16 × number = 4 × 48 = 192. Number = 192 ÷ 16 = 12. ✓",
        wrongAnswerExplanations: {
            "24": "If the number is 24, the HCF with 16 is 8, not 4.",
            "32": "If the number is 32, the HCF with 16 is 16, not 4.",
            "36": "If the number is 36, the HCF with 16 is 4, but the LCM would be 144, not 48."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch3_t1_qm9',
        type: "mcq",
        question: "What is the smallest number that is exactly divisible by all numbers from 1 to 5?",
        options: ["15", "20", "30", "60"],
        correctAnswer: "60",
        explanation: "We need the LCM of 1, 2, 3, 4, and 5. LCM of all these is 60. 1 and any number's LCM is that number. 🎲",
        wrongAnswerExplanations: {
            "15": "15 is divisible by 1, 3, and 5, but not by 2 or 4.",
            "20": "20 is divisible by 1, 2, 4, and 5, but not by 3.",
            "30": "30 is divisible by 1, 2, 3, and 5, but not by 4."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch3_t1_qm10',
        type: "mcq",
        question: "If the LCM of two numbers is 84 and their HCF is 6, which of these could NOT be one of the numbers?",
        options: ["12", "42", "28", "36"],
        correctAnswer: "36",
        explanation: "For two numbers a and b: a × b = HCF × LCM = 6 × 84 = 504. If one number is 36, 504 ÷ 36 = 14, which isn't an integer. ❌",
        wrongAnswerExplanations: {
            "12": "If one number is 12, the other is 504 ÷ 12 = 42, and HCF(12,42) = 6 with LCM 84.",
            "42": "If one number is 42, the other is 504 ÷ 42 = 12, and HCF(12,42) = 6 with LCM 84.",
            "28": "If one number is 28, the other is 504 ÷ 28 = 18, and HCF(18,28) = 2, not 6."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch3_t1_qm11',
        type: "mcq",
        question: "What is the sum of all factors of 36?",
        options: ["55", "75", "91", "100"],
        correctAnswer: "91",
        explanation: "Factors of 36 are 1, 2, 3, 4, 6, 9, 12, 18, and 36. Their sum is 1+2+3+4+6+9+12+18+36 = 91. 🧮",
        wrongAnswerExplanations: {
            "55": "This is not the correct sum of all factors of 36.",
            "75": "This is not the correct sum of all factors of 36.",
            "100": "This is not the correct sum of all factors of 36."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch3_t1_qm12',
        type: "mcq",
        question: "The LCM of three numbers is 120. Which of the following cannot be the three numbers?",
        options: ["8, 10, 15", "5, 8, 30", "6, 10, 40", "8, 20, 30"],
        correctAnswer: "8, 20, 30",
        explanation: "LCM of 8, 20, and 30 is 120. But LCM(8, 20) = 40, and LCM(40, 30) = 120. So the answer is incorrect. ❌",
        wrongAnswerExplanations: {
            "8, 10, 15": "LCM of 8, 10, and 15 is indeed 120.",
            "5, 8, 30": "LCM of 5, 8, and 30 is indeed 120.",
            "6, 10, 40": "LCM of 6, 10, and 40 is indeed 120."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch3_t1_qm13',
        type: "mcq",
        question: "Which of the following statements is true?",
        options: [
            "LCM of two numbers is always greater than or equal to their HCF",
            "HCF of two numbers is always greater than or equal to their LCM",
            "HCF of two numbers is always equal to their LCM",
            "LCM of two numbers can never equal their HCF"
        ],
        correctAnswer: "LCM of two numbers is always greater than or equal to their HCF",
        explanation: "LCM ≥ HCF always, and they're equal only when the numbers are equal. For 6 and 8, HCF = 2 and LCM = 24. ✓",
        wrongAnswerExplanations: {
            "HCF of two numbers is always greater than or equal to their LCM": "This is incorrect. Usually, LCM ≥ HCF.",
            "HCF of two numbers is always equal to their LCM": "This is only true when the two numbers are equal.",
            "LCM of two numbers can never equal their HCF": "LCM equals HCF when the two numbers are equal."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch3_t1_qm14',
        type: "mcq",
        question: "Which of the following is NOT a factor of 72?",
        options: ["8", "9", "16", "18"],
        correctAnswer: "16",
        explanation: "72 = 2³ × 3² = 8 × 9. Factors include 1,2,3,4,6,8,9,12,18,24,36,72. But 16 = 2⁴ doesn't divide 72. ❌",
        wrongAnswerExplanations: {
            "8": "8 is a factor of 72 (72 ÷ 8 = 9).",
            "9": "9 is a factor of 72 (72 ÷ 9 = 8).",
            "18": "18 is a factor of 72 (72 ÷ 18 = 4)."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch3_t1_qm15',
        type: "mcq",
        question: "The HCF of 45, 60 and 75 is:",
        options: ["5", "15", "30", "45"],
        correctAnswer: "15",
        explanation: "45 = 3² × 5, 60 = 2² × 3 × 5, and 75 = 3 × 5². Common factors: 1, 3, 5, 15. The highest is 15. ⭐",
        wrongAnswerExplanations: {
            "5": "5 is a common factor, but not the highest common factor.",
            "30": "30 is not a factor of 45 or 75.",
            "45": "45 is not a factor of 60 or 75."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch3_t1_qm16',
        type: "mcq",
        question: "Which of these is true about LCM and HCF?",
        options: [
            "LCM × HCF = Sum of the two numbers",
            "LCM × HCF = Product of the two numbers",
            "LCM + HCF = Product of the two numbers",
            "LCM - HCF = Sum of the two numbers"
        ],
        correctAnswer: "LCM × HCF = Product of the two numbers",
        explanation: "For two numbers a and b: a × b = HCF(a,b) × LCM(a,b). Example: For 6 and 8, 6 × 8 = 48 and HCF = 2, LCM = 24. 2 × 24 = 48. ✅",
        wrongAnswerExplanations: {
            "LCM × HCF = Sum of the two numbers": "This relationship is incorrect. For 6 and 8, LCM × HCF = 24 × 2 = 48, not 14.",
            "LCM + HCF = Product of the two numbers": "This relationship is incorrect. For 6 and 8, LCM + HCF = 24 + 2 = 26, not 48.",
            "LCM - HCF = Sum of the two numbers": "This relationship is incorrect. For 6 and 8, LCM - HCF = 24 - 2 = 22, not 14."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch3_t1_qm17',
        type: "mcq",
        question: "The greatest common factor of all even numbers is:",
        options: ["1", "2", "0", "No common factor"],
        correctAnswer: "2",
        explanation: "All even numbers are divisible by 2. Therefore, 2 is a common factor of all even numbers. ✓",
        wrongAnswerExplanations: {
            "1": "While 1 is a common factor of all numbers, it's not the greatest common factor of even numbers.",
            "0": "0 is not a factor of any non-zero number.",
            "No common factor": "All even numbers share 2 as a common factor."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch3_t1_qm18',
        type: "mcq",
        question: "If LCM(a,b) = a × b, then what is HCF(a,b)?",
        options: ["0", "1", "a + b", "a - b"],
        correctAnswer: "1",
        explanation: "If LCM(a,b) = a × b, then a and b are co-prime, meaning their HCF = 1. Example: LCM(3,4) = 12 = 3 × 4. 🎯",
        wrongAnswerExplanations: {
            "0": "HCF is never 0 for non-zero numbers.",
            "a + b": "There is no relationship between HCF and the sum of numbers.",
            "a - b": "There is no relationship between HCF and the difference of numbers."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch3_t1_qm19',
        type: "mcq",
        question: "Three bells ring at intervals of 12, 15, and 18 seconds. If they start ringing together, after how many seconds will they next ring together?",
        options: ["30", "60", "90", "180"],
        correctAnswer: "180",
        explanation: "We need the LCM of 12, 15, and 18. LCM = 2² × 3² × 5 = 180 seconds. They'll next ring together after 180 seconds. ⏰",
        wrongAnswerExplanations: {
            "30": "30 is not divisible by 18, so they won't all ring at 30 seconds.",
            "60": "60 is not divisible by 15, so they won't all ring at 60 seconds.",
            "90": "90 is not divisible by 12, so they won't all ring at 90 seconds."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch3_t1_qm20',
        type: "mcq",
        question: "What is the smallest number that leaves remainder 3 when divided by 5, 7, and 9?",
        options: ["3", "318", "108", "228"],
        correctAnswer: "318",
        explanation: "We need a number of form LCM(5,7,9) × k + 3. LCM(5,7,9) = 315. The smallest such number is 315 + 3 = 318. 🔍",
        wrongAnswerExplanations: {
            "3": "3 leaves remainder 3 when divided by 5, but 3 when divided by 7 and 3 when divided by 9.",
            "108": "108 ÷ 5 = 21 remainder 3, 108 ÷ 7 = 15 remainder 3, but 108 ÷ 9 = 12 remainder 0.",
            "228": "228 ÷ 5 = 45 remainder 3, 228 ÷ 7 = 32 remainder 4, 228 ÷ 9 = 25 remainder 3."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    }
];
