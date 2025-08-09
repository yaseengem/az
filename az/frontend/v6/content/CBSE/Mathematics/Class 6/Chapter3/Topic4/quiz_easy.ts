// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 6\Chapter3\Topic4\quiz_easy.ts
import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl6_ch3_t4_qe1',
        type: "mcq",
        question: "What is the prime factorization of 12?",
        options: ["2 × 6", "3 × 4", "2² × 3", "2 × 2 × 3"],
        correctAnswer: "2² × 3",
        explanation: "12 = 2 × 6 = 2 × 2 × 3 = 2² × 3. Both 2 and 3 are prime numbers, so 2² × 3 is the prime factorization. ⭐",
        wrongAnswerExplanations: {
            "2 × 6": "6 is not prime (6 = 2 × 3), so this is not a prime factorization.",
            "3 × 4": "4 is not prime (4 = 2²), so this is not a prime factorization.",
            "2 × 2 × 3": "This is correct, but conventionally written as 2² × 3 with exponents."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch3_t4_qe2',
        type: "mcq",
        question: "Which of these is a prime number?",
        options: ["4", "7", "9", "15"],
        correctAnswer: "7",
        explanation: "7 is a prime number because it has exactly two factors: 1 and itself. The other numbers have more than two factors. 🎯",
        wrongAnswerExplanations: {
            "4": "4 has three factors: 1, 2, and 4, so it's not prime.",
            "9": "9 has three factors: 1, 3, and 9, so it's not prime.",
            "15": "15 has four factors: 1, 3, 5, and 15, so it's not prime."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch3_t4_qe3',
        type: "mcq",
        question: "What is the prime factorization of 36?",
        options: ["2² × 3²", "6²", "4 × 9", "2 × 18"],
        correctAnswer: "2² × 3²",
        explanation: "36 = 4 × 9 = 2² × 3². Both 2 and 3 are prime numbers. 🔢",
        wrongAnswerExplanations: {
            "6²": "6 is not a prime number as 6 = 2 × 3.",
            "4 × 9": "Neither 4 nor 9 is prime (4 = 2², 9 = 3²).",
            "2 × 18": "18 is not prime (18 = 2 × 3²)."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch3_t4_qe4',
        type: "mcq",
        question: "Which number is a prime number?",
        options: ["1", "17", "21", "39"],
        correctAnswer: "17",
        explanation: "17 has exactly two factors: 1 and 17, making it prime. ✨",
        wrongAnswerExplanations: {
            "1": "1 has only one factor (itself), so it's not considered prime.",
            "21": "21 = 3 × 7, so it has factors other than 1 and itself.",
            "39": "39 = 3 × 13, so it has factors other than 1 and itself."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch3_t4_qe5',
        type: "mcq",
        question: "What is the prime factorization of 45?",
        options: ["3² × 5", "5 × 9", "3 × 15", "5 × 3²"],
        correctAnswer: "3² × 5",
        explanation: "45 = 9 × 5 = 3² × 5. Both 3 and 5 are prime numbers. 🧩",
        wrongAnswerExplanations: {
            "5 × 9": "This is correct mathematically but not written as prime factorization.",
            "3 × 15": "15 is not prime (15 = 3 × 5).",
            "5 × 3²": "This is the same as 3² × 5, just written in a different order."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch3_t4_qe6',
        type: "mcq",
        question: "Which of these is a composite number?",
        options: ["7", "13", "29", "15"],
        correctAnswer: "15",
        explanation: "15 = 3 × 5, so it has factors other than 1 and itself. 📌",
        wrongAnswerExplanations: {
            "7": "7 is prime because its only factors are 1 and 7.",
            "13": "13 is prime because its only factors are 1 and 13.",
            "29": "29 is prime because its only factors are 1 and 29."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch3_t4_qe7',
        type: "mcq",
        question: "The prime factorization of 20 is:",
        options: ["2² × 5", "2 × 10", "4 × 5", "2 × 2 × 5"],
        correctAnswer: "2² × 5",
        explanation: "20 = 4 × 5 = 2² × 5. Both 2 and 5 are prime numbers. 🔢",
        wrongAnswerExplanations: {
            "2 × 10": "10 is not prime (10 = 2 × 5).",
            "4 × 5": "4 is not prime (4 = 2²).",
            "2 × 2 × 5": "This is correct but conventionally written as 2² × 5."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch3_t4_qe8',
        type: "mcq",
        question: "Which of the following is already in its prime factorized form?",
        options: ["12", "23", "35", "4"],
        correctAnswer: "23",
        explanation: "23 is already a prime number, so its prime factorization is just 23. 💫",
        wrongAnswerExplanations: {
            "12": "12 = 2² × 3 is its prime factorization.",
            "35": "35 = 5 × 7 is its prime factorization.",
            "4": "4 = 2² is its prime factorization."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch3_t4_qe9',
        type: "mcq",
        question: "What is the prime factorization of 100?",
        options: ["2² × 5²", "10²", "4 × 25", "10 × 10"],
        correctAnswer: "2² × 5²",
        explanation: "100 = 10² = (2 × 5)² = 2² × 5². Both 2 and 5 are prime numbers. 🎯",
        wrongAnswerExplanations: {
            "10²": "10 is not prime (10 = 2 × 5).",
            "4 × 25": "Neither 4 nor 25 is prime (4 = 2², 25 = 5²).",
            "10 × 10": "10 is not prime (10 = 2 × 5)."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch3_t4_qe10',
        type: "mcq",
        question: "In which of these numbers is 3 a prime factor?",
        options: ["14", "18", "22", "25"],
        correctAnswer: "18",
        explanation: "18 = 2 × 3². The prime factorization includes 3. ✅",
        wrongAnswerExplanations: {
            "14": "14 = 2 × 7, so 3 is not a factor.",
            "22": "22 = 2 × 11, so 3 is not a factor.",
            "25": "25 = 5², so 3 is not a factor."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch3_t4_qe11',
        type: "mcq",
        question: "Which of these is NOT a prime number?",
        options: ["19", "23", "29", "21"],
        correctAnswer: "21",
        explanation: "21 = 3 × 7, so it has factors other than 1 and itself. ❌",
        wrongAnswerExplanations: {
            "19": "19 is prime because its only factors are 1 and 19.",
            "23": "23 is prime because its only factors are 1 and 23.",
            "29": "29 is prime because its only factors are 1 and 29."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch3_t4_qe12',
        type: "mcq",
        question: "The smallest prime number is:",
        options: ["0", "1", "2", "3"],
        correctAnswer: "2",
        explanation: "2 is the smallest number with exactly two factors (1 and itself). 🔍",
        wrongAnswerExplanations: {
            "0": "0 is not prime as it has infinite factors.",
            "1": "1 has only one factor (itself), so it's not considered prime.",
            "3": "3 is prime, but 2 is smaller."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch3_t4_qe13',
        type: "mcq",
        question: "What is the prime factorization of 50?",
        options: ["2 × 5²", "2 × 25", "5 × 10", "2 × 5 × 5"],
        correctAnswer: "2 × 5²",
        explanation: "50 = 2 × 25 = 2 × 5². Both 2 and 5 are prime numbers. 📊",
        wrongAnswerExplanations: {
            "2 × 25": "25 is not prime (25 = 5²).",
            "5 × 10": "10 is not prime (10 = 2 × 5).",
            "2 × 5 × 5": "This is correct but conventionally written as 2 × 5²."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch3_t4_qe14',
        type: "mcq",
        question: "Which number has exactly two prime factors?",
        options: ["6", "8", "9", "13"],
        correctAnswer: "6",
        explanation: "6 = 2 × 3. It has exactly two prime factors: 2 and 3. 🧩",
        wrongAnswerExplanations: {
            "8": "8 = 2³, so it has only one prime factor (2) with exponent 3.",
            "9": "9 = 3², so it has only one prime factor (3) with exponent 2.",
            "13": "13 is already prime, so its prime factorization is just 13."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch3_t4_qe15',
        type: "mcq",
        question: "The prime factorization of 40 is:",
        options: ["2³ × 5", "2 × 2 × 2 × 5", "8 × 5", "2³ × 5²"],
        correctAnswer: "2³ × 5",
        explanation: "40 = 8 × 5 = 2³ × 5. Both 2 and 5 are prime numbers. 🔢",
        wrongAnswerExplanations: {
            "2 × 2 × 2 × 5": "This is the same as 2³ × 5, just written differently.",
            "8 × 5": "8 is not prime (8 = 2³).",
            "2³ × 5²": "This would equal 200, not 40."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch3_t4_qe16',
        type: "mcq",
        question: "Which of these numbers is divisible by 2?",
        options: ["21", "33", "54", "87"],
        correctAnswer: "54",
        explanation: "54 is even, so it's divisible by 2. Its prime factorization is 2 × 3³. ✅",
        wrongAnswerExplanations: {
            "21": "21 is odd, so it's not divisible by 2.",
            "33": "33 is odd, so it's not divisible by 2.",
            "87": "87 is odd, so it's not divisible by 2."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch3_t4_qe17',
        type: "mcq",
        question: "In 2² × 3 × 5, which prime factor has the highest exponent?",
        options: ["2", "3", "5", "None, all have the same exponent"],
        correctAnswer: "2",
        explanation: "2 has exponent 2, while 3 and 5 each have exponent 1. 🎯",
        wrongAnswerExplanations: {
            "3": "3 has exponent 1, which is less than 2's exponent 2.",
            "5": "5 has exponent 1, which is less than 2's exponent 2.",
            "None, all have the same exponent": "The exponents are not all the same."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch3_t4_qe18',
        type: "mcq",
        question: "What is the prime factorization of 75?",
        options: ["3 × 5²", "3 × 25", "15 × 5", "3² × 5²"],
        correctAnswer: "3 × 5²",
        explanation: "75 = 15 × 5 = 3 × 5 × 5 = 3 × 5². Both 3 and 5 are prime numbers. 💯",
        wrongAnswerExplanations: {
            "3 × 25": "25 is not prime (25 = 5²).",
            "15 × 5": "15 is not prime (15 = 3 × 5).",
            "3² × 5²": "This would equal 225, not 75."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch3_t4_qe19',
        type: "mcq",
        question: "How many prime numbers are there between 10 and 20?",
        options: ["2", "4", "5", "6"],
        correctAnswer: "4",
        explanation: "The prime numbers between 10 and 20 are 11, 13, 17, and 19. 🔍",
        wrongAnswerExplanations: {
            "2": "There are more than 2 prime numbers in this range.",
            "5": "There are only 4 prime numbers in this range.",
            "6": "There are only 4 prime numbers in this range."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch3_t4_qe20',
        type: "mcq",
        question: "The prime factorization of 28 is:",
        options: ["2² × 7", "4 × 7", "2 × 14", "2 × 2 × 7"],
        correctAnswer: "2² × 7",
        explanation: "28 = 4 × 7 = 2² × 7. Both 2 and 7 are prime numbers. 📈",
        wrongAnswerExplanations: {
            "4 × 7": "4 is not prime (4 = 2²).",
            "2 × 14": "14 is not prime (14 = 2 × 7).",
            "2 × 2 × 7": "This is the same as 2² × 7, just written differently."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    }
];
