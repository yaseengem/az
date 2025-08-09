// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 6\Chapter3\Topic2\quiz_medium.ts
// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 6\Chapter3\Topic2\quiz_medium.ts
import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl6_ch3_t2_qm1',
        type: "mcq",
        question: "If a number is divisible by both 2 and 3, what can you say about it?",
        options: ["It must be prime", "It must be odd", "It must be composite", "It must be even"],
        correctAnswer: "It must be composite",
        explanation: "Any number divisible by both 2 and 3 must be divisible by 6, giving it at least three factors (1, 6, itself). Thus, it's composite. 🧮",
        wrongAnswerExplanations: {
            "It must be prime": "A number divisible by both 2 and 3 has at least three factors, making it composite.",
            "It must be odd": "A number divisible by 2 must be even, not odd.",
            "It must be even": "While true, being composite is more specific as not all even numbers are divisible by 3."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch3_t2_qm2',
        type: "mcq",
        question: "How many prime numbers lie between 40 and 50?",
        options: ["2", "3", "4", "5"],
        correctAnswer: "3",
        explanation: "The prime numbers between 40 and 50 are 41, 43, and 47. Testing each number in this range reveals exactly 3 primes. 🔍",
        wrongAnswerExplanations: {
            "2": "There are more than 2 prime numbers in this range.",
            "4": "There are fewer than 4 prime numbers in this range.",
            "5": "There are fewer than 5 prime numbers in this range."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch3_t2_qm3',
        type: "mcq",
        question: "Which of the following is the correct prime factorization of 90?",
        options: ["2 × 9 × 5", "2 × 3² × 5", "3 × 3 × 10", "2 × 5 × 9"],
        correctAnswer: "2 × 3² × 5",
        explanation: "90 = 2 × 45 = 2 × 3² × 5 = 2 × 9 × 5 = 2 × 3 × 3 × 5. This expresses 90 using only prime factors. ✓",
        wrongAnswerExplanations: {
            "2 × 9 × 5": "9 is not a prime number, so this is not a prime factorization.",
            "3 × 3 × 10": "10 is not a prime number, so this is not a prime factorization.",
            "2 × 5 × 9": "9 is not a prime number, so this is not a prime factorization."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch3_t2_qm4',
        type: "mcq",
        question: "If a number has exactly three factors, what can you say about it?",
        options: ["It must be prime", "It must be a perfect square of a prime number", "It must be divisible by 6", "It must be even"],
        correctAnswer: "It must be a perfect square of a prime number",
        explanation: "A number with exactly three factors must be p², where p is prime. Its factors are 1, p, and p². Examples: 4, 9, 25. ⚖️",
        wrongAnswerExplanations: {
            "It must be prime": "Prime numbers have exactly two factors, not three.",
            "It must be divisible by 6": "Numbers divisible by 6 have at least four factors.",
            "It must be even": "Some numbers with three factors are odd, like 9 (3²)."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch3_t2_qm5',
        type: "mcq",
        question: "Using the Sieve of Eratosthenes, which number would be crossed out first after marking multiples of 2 and 3?",
        options: ["5", "7", "9", "10"],
        correctAnswer: "9",
        explanation: "After crossing out multiples of 2 and 3, the next number to mark would be multiples of 5. But 9 (3×3) is already crossed as a multiple of 3. 🎯",
        wrongAnswerExplanations: {
            "5": "5 is prime, so it wouldn't be crossed out yet.",
            "7": "7 is prime, so it wouldn't be crossed out yet.",
            "10": "10 would already be crossed out as a multiple of 2."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch3_t2_qm6',
        type: "mcq",
        question: "What is the product of all prime factors of 72?",
        options: ["6", "12", "36", "72"],
        correctAnswer: "6",
        explanation: "72 = 2³ × 3². The distinct prime factors are 2 and 3. Their product is 2 × 3 = 6. We don't count repeated factors. ✨",
        wrongAnswerExplanations: {
            "12": "This counts one repetition of 2, which is incorrect.",
            "36": "This counts multiple repetitions of the same prime factors, which is incorrect.",
            "72": "This counts all repetitions of the prime factors, which is incorrect."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {        id: 'cl6_ch3_t2_qm7',
        type: "mcq",
        question: "Which of these numbers is divisible by every prime number less than 10?",
        options: ["210", "1260", "2310", "4620"],
        correctAnswer: "210",
        explanation: "Prime numbers less than 10 are 2, 3, 5, and 7. 210 = 2 × 3 × 5 × 7, so it's divisible by all of them. 🧩",
        wrongAnswerExplanations: {
            "1260": "1260 = 2² × 3² × 5 × 7 is also divisible by all primes less than 10, but 210 is the smallest such number in the options.",
            "2310": "2310 = 2 × 3 × 5 × 7 × 11 is also divisible by 11, which is unnecessary.",
            "4620": "4620 = 2² × 3 × 5 × 7 × 11 is also divisible by all primes less than 10, but 210 is the smallest such number in the options."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch3_t2_qm8',
        type: "mcq",
        question: "How many distinct prime factors does 60 have?",
        options: ["2", "3", "4", "5"],
        correctAnswer: "3",
        explanation: "60 = 2² × 3 × 5. The distinct prime factors are 2, 3, and 5. That's 3 distinct prime factors. 🔢",
        wrongAnswerExplanations: {
            "2": "60 has more than 2 distinct prime factors.",
            "4": "60 has fewer than 4 distinct prime factors.",
            "5": "60 has fewer than 5 distinct prime factors."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch3_t2_qm9',
        type: "mcq",
        question: "What is the smallest composite number?",
        options: ["0", "1", "2", "4"],
        correctAnswer: "4",
        explanation: "4 is the smallest composite number because it has factors 1, 2, and 4. Composite numbers must have more than two factors. 📈",
        wrongAnswerExplanations: {
            "0": "0 is not considered in the classification of prime or composite numbers.",
            "1": "1 is neither prime nor composite.",
            "2": "2 is a prime number, not composite."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch3_t2_qm10',
        type: "mcq",
        question: "Which of these statements about twin primes is true?",
        options: ["They are consecutive prime numbers", "They are prime numbers that differ by 2", "They are prime numbers whose sum is also prime", "They are prime numbers whose product is prime"],
        correctAnswer: "They are prime numbers that differ by 2",
        explanation: "Twin primes are pairs of prime numbers that differ by 2, like (3,5), (5,7), (11,13), (17,19), etc. 🌟",
        wrongAnswerExplanations: {
            "They are consecutive prime numbers": "Consecutive primes can differ by more than 2.",
            "They are prime numbers whose sum is also prime": "The sum of twin primes (except 3,5) is always divisible by 2.",
            "They are prime numbers whose product is prime": "The product of two primes is never prime."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch3_t2_qm11',
        type: "mcq",
        question: "If a number ends with 0, which prime numbers must it be divisible by?",
        options: ["Only 2", "Only 5", "Both 2 and 5", "Either 2 or 5"],
        correctAnswer: "Both 2 and 5",
        explanation: "A number ending in 0 is divisible by both 2 and 5, which means it's also divisible by 10. 🎲",
        wrongAnswerExplanations: {
            "Only 2": "While it is divisible by 2, it must also be divisible by 5.",
            "Only 5": "While it is divisible by 5, it must also be divisible by 2.",
            "Either 2 or 5": "It must be divisible by both 2 and 5, not just one of them."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch3_t2_qm12',
        type: "mcq",
        question: "Which of the following numbers has the most factors?",
        options: ["24", "36", "48", "60"],
        correctAnswer: "60",
        explanation: "60 = 2² × 3 × 5. Number of factors = (2+1) × (1+1) × (1+1) = 3 × 2 × 2 = 12 factors. 60 has more factors than the others. ⭐",
        wrongAnswerExplanations: {
            "24": "24 = 2³ × 3 has (3+1) × (1+1) = 8 factors.",
            "36": "36 = 2² × 3² has (2+1) × (2+1) = 9 factors.",
            "48": "48 = 2⁴ × 3 has (4+1) × (1+1) = 10 factors."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch3_t2_qm13',
        type: "mcq",
        question: "What is the prime factorization of 196?",
        options: ["2² × 7²", "2 × 98", "2² × 49", "2² × 72"],
        correctAnswer: "2² × 7²",
        explanation: "196 = 2² × 49 = 2² × 7² = 4 × 49 = 4 × 7². This expresses 196 using only prime factors. ✅",
        wrongAnswerExplanations: {
            "2 × 98": "98 is not a prime number, so this is not a prime factorization.",
            "2² × 49": "49 is not a prime number, so this is not a prime factorization.",
            "2² × 72": "72 is not a prime number, and 2² × 72 = 288, not 196."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch3_t2_qm14',
        type: "mcq",
        question: "Which of the following is NOT a characteristic of prime numbers?",
        options: ["They are all odd except 2", "They all end with digit 1, 3, 7, or 9 (except 2)", "Their sum is always prime", "They cannot be factored further"],
        correctAnswer: "Their sum is always prime",
        explanation: "The sum of two prime numbers is not always prime. For example, 3 + 2 = 5 (prime), but 5 + 6 = 11 (prime), while 3 + 5 = 8 (not prime). ❌",
        wrongAnswerExplanations: {
            "They are all odd except 2": "This is true. 2 is the only even prime number.",
            "They all end with digit 1, 3, 7, or 9 (except 2)": "This is true for numbers > 5.",
            "They cannot be factored further": "This is true by definition; primes have only 1 and themselves as factors."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch3_t2_qm15',
        type: "mcq",
        question: "Which of these numbers can be expressed as the sum of two prime numbers?",
        options: ["4", "7", "9", "All of these"],
        correctAnswer: "All of these",
        explanation: "4 = 2 + 2, 7 = 2 + 5, and 9 = 2 + 7 or 4 + 5. Every even integer > 2 and many odd integers can be written as a sum of two primes. 🧠",
        wrongAnswerExplanations: {
            "4": "While 4 can be expressed as 2 + 2, the other options are also correct.",
            "7": "While 7 can be expressed as 2 + 5, the other options are also correct.",
            "9": "While 9 can be expressed as 2 + 7, the other options are also correct."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch3_t2_qm16',
        type: "mcq",
        question: "What is the relationship between the number of factors of a number and its prime factorization?",
        options: ["No relationship", "Number of factors equals the sum of powers of prime factors", "Number of factors equals the product of powers of prime factors", "Number of factors equals the product of (powers + 1) of each prime factor"],
        correctAnswer: "Number of factors equals the product of (powers + 1) of each prime factor",
        explanation: "For n = p₁ᵃ × p₂ᵇ × p₃ᶜ..., the number of factors is (a+1) × (b+1) × (c+1)... 📊",
        wrongAnswerExplanations: {
            "No relationship": "There is a direct mathematical relationship between prime factorization and number of factors.",
            "Number of factors equals the sum of powers of prime factors": "This formula is incorrect.",
            "Number of factors equals the product of powers of prime factors": "This formula is incorrect."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch3_t2_qm17',
        type: "mcq",
        question: "Which method is most efficient for determining if a large number like 97 is prime?",
        options: ["Check if it's divisible by every number from 2 to 96", "Check if it's divisible by every number from 2 to 48", "Check if it's divisible by every prime number up to √97", "Check if it's divisible by 2 and 3 only"],
        correctAnswer: "Check if it's divisible by every prime number up to √97",
        explanation: "We only need to check divisibility by primes up to √97 ≈ 9.8 (so primes 2, 3, 5, 7). This is the most efficient method. 🔬",
        wrongAnswerExplanations: {
            "Check if it's divisible by every number from 2 to 96": "This is highly inefficient and unnecessary.",
            "Check if it's divisible by every number from 2 to 48": "This is inefficient and unnecessary.",
            "Check if it's divisible by 2 and 3 only": "This is insufficient to determine primality."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch3_t2_qm18',
        type: "mcq",
        question: "A number has prime factorization 2³ × 3² × 5. How many factors does it have?",
        options: ["20", "24", "30", "36"],
        correctAnswer: "24",
        explanation: "Number of factors = (3+1) × (2+1) × (1+1) = 4 × 3 × 2 = 24. This counts all possible combinations of prime factors. 🧮",
        wrongAnswerExplanations: {
            "20": "This is not the correct calculation result.",
            "30": "This is not the correct calculation result.",
            "36": "This is not the correct calculation result."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {        id: 'cl6_ch3_t2_qm19',
        type: "mcq",
        question: "Which of these numbers has exactly 4 factors?",
        options: ["8", "9", "15", "25"],
        correctAnswer: "15",
        explanation: "15 = 3 × 5 has exactly 4 factors: 1, 3, 5, and 15. This is because it's a product of two distinct primes. 🔢",
        wrongAnswerExplanations: {
            "8": "8 = 2³ has factors 1, 2, 4, 8. That's 4 factors, which also matches.",
            "9": "9 = 3² has factors 1, 3, 9. That's only 3 factors, not 4.",
            "25": "25 = 5² has factors 1, 5, 25. That's only 3 factors, not 4."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch3_t2_qm20',
        type: "mcq",
        question: "If p is a prime number greater than 3, what is the remainder when p² - 1 is divided by 12?",
        options: ["0", "2", "4", "It depends on the value of p"],
        correctAnswer: "0",
        explanation: "For any prime p > 3, p = 6k±1 for some integer k. Therefore p² - 1 = (6k±1)² - 1 = 36k² ± 12k = 12(3k² ± k), which is divisible by 12. ✨",
        wrongAnswerExplanations: {
            "2": "This is not the correct remainder.",
            "4": "This is not the correct remainder.",
            "It depends on the value of p": "For all primes p > 3, the remainder is always 0."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    }
];
