import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl5_ch6_t3_qm1',
        type: "mcq",
        question: "Which of these numbers is a prime number?",
        options: ["21", "23", "25", "27"],
        correctAnswer: "23",
        explanation: "23 is a prime number because it has exactly two factors: 1 and 23. 🔢",
        wrongAnswerExplanations: {
            "21": "21 is not prime because it has factors 1, 3, 7, and 21.",
            "25": "25 is not prime because it has factors 1, 5, and 25.",
            "27": "27 is not prime because it has factors 1, 3, 9, and 27."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch6_t3_qm2',
        type: "mcq",
        question: "Which number is composite?",
        options: ["17", "19", "21", "23"],
        correctAnswer: "21",
        explanation: "21 is composite because it has more than two factors: 1, 3, 7, and 21. 🔢",
        wrongAnswerExplanations: {
            "17": "17 is prime because it has only two factors: 1 and 17.",
            "19": "19 is prime because it has only two factors: 1 and 19.",
            "23": "23 is prime because it has only two factors: 1 and 23."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch6_t3_qm3',
        type: "mcq",
        question: "What is the smallest composite number?",
        options: ["1", "2", "3", "4"],
        correctAnswer: "4",
        explanation: "4 is the smallest composite number because it has more than two factors: 1, 2, and 4. 🔢",
        wrongAnswerExplanations: {
            "1": "1 is neither prime nor composite.",
            "2": "2 is prime because it has only two factors: 1 and 2.",
            "3": "3 is prime because it has only two factors: 1 and 3."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch6_t3_qm4',
        type: "mcq",
        question: "Which of these numbers is NOT prime?",
        options: ["11", "13", "15", "17"],
        correctAnswer: "15",
        explanation: "15 is not prime because it has more than two factors: 1, 3, 5, and 15. 🔢",
        wrongAnswerExplanations: {
            "11": "11 is prime because it has only two factors: 1 and 11.",
            "13": "13 is prime because it has only two factors: 1 and 13.",
            "17": "17 is prime because it has only two factors: 1 and 17."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch6_t3_qm5',
        type: "mcq",
        question: "Which number is both prime and even?",
        options: ["1", "2", "4", "6"],
        correctAnswer: "2",
        explanation: "2 is the only even prime number because it has exactly two factors: 1 and 2. 🔢",
        wrongAnswerExplanations: {
            "1": "1 is neither prime nor composite.",
            "4": "4 is composite because it has more than two factors.",
            "6": "6 is composite because it has more than two factors."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch6_t3_qm6',
        type: "mcq",
        question: "Which of these numbers has exactly three factors?",
        options: ["4", "9", "16", "25"],
        correctAnswer: "9",
        explanation: "9 has exactly three factors: 1, 3, and 9. This is because it's a square of a prime number. 🔢",
        wrongAnswerExplanations: {
            "4": "4 has three factors: 1, 2, and 4.",
            "16": "16 has five factors: 1, 2, 4, 8, and 16.",
            "25": "25 has three factors: 1, 5, and 25."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch6_t3_qm7',
        type: "mcq",
        question: "Which number is neither prime nor composite?",
        options: ["0", "1", "2", "3"],
        correctAnswer: "1",
        explanation: "1 is neither prime nor composite because it has only one factor: itself. 🔢",
        wrongAnswerExplanations: {
            "0": "0 is not considered in this classification.",
            "2": "2 is prime because it has exactly two factors.",
            "3": "3 is prime because it has exactly two factors."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch6_t3_qm8',
        type: "mcq",
        question: "What is the sum of the first three prime numbers?",
        options: ["6", "8", "10", "12"],
        correctAnswer: "10",
        explanation: "The first three prime numbers are 2, 3, and 5. Their sum is 2 + 3 + 5 = 10. 🔢",
        wrongAnswerExplanations: {
            "6": "This would be the sum of 1, 2, and 3, but 1 is not prime.",
            "8": "This would be the sum of 2, 3, and 3, but 3 is counted only once.",
            "12": "This would be the sum of 2, 3, 5, and 2, but we only need the first three primes."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch6_t3_qm9',
        type: "mcq",
        question: "Which of these numbers is a composite number?",
        options: ["29", "31", "33", "37"],
        correctAnswer: "33",
        explanation: "33 is composite because it has more than two factors: 1, 3, 11, and 33. 🔢",
        wrongAnswerExplanations: {
            "29": "29 is prime because it has only two factors.",
            "31": "31 is prime because it has only two factors.",
            "37": "37 is prime because it has only two factors."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch6_t3_qm10',
        type: "mcq",
        question: "What is the smallest prime number greater than 20?",
        options: ["21", "23", "25", "27"],
        correctAnswer: "23",
        explanation: "23 is the smallest prime number greater than 20 because it has exactly two factors: 1 and 23. 🔢",
        wrongAnswerExplanations: {
            "21": "21 is not prime because it has more than two factors.",
            "25": "25 is not prime because it has more than two factors.",
            "27": "27 is not prime because it has more than two factors."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch6_t3_qm11',
        type: "mcq",
        question: "Which of these numbers has the most factors?",
        options: ["12", "13", "14", "15"],
        correctAnswer: "12",
        explanation: "12 has six factors: 1, 2, 3, 4, 6, and 12, which is more than the other options. 🔢",
        wrongAnswerExplanations: {
            "13": "13 is prime and has only two factors.",
            "14": "14 has four factors: 1, 2, 7, and 14.",
            "15": "15 has four factors: 1, 3, 5, and 15."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch6_t3_qm12',
        type: "mcq",
        question: "Which number is a prime number?",
        options: ["39", "41", "45", "49"],
        correctAnswer: "41",
        explanation: "41 is a prime number because it has exactly two factors: 1 and 41. 🔢",
        wrongAnswerExplanations: {
            "39": "39 is not prime because it has more than two factors.",
            "45": "45 is not prime because it has more than two factors.",
            "49": "49 is not prime because it has more than two factors."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch6_t3_qm13',
        type: "mcq",
        question: "What is the largest prime number less than 30?",
        options: ["27", "28", "29", "30"],
        correctAnswer: "29",
        explanation: "29 is the largest prime number less than 30 because it has exactly two factors: 1 and 29. 🔢",
        wrongAnswerExplanations: {
            "27": "27 is not prime because it has more than two factors.",
            "28": "28 is not prime because it has more than two factors.",
            "30": "30 is not prime because it has more than two factors."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch6_t3_qm14',
        type: "mcq",
        question: "Which of these numbers is NOT composite?",
        options: ["24", "25", "26", "27"],
        correctAnswer: "None of these",
        explanation: "All these numbers are composite because they have more than two factors. 🔢",
        wrongAnswerExplanations: {
            "24": "24 is composite because it has more than two factors.",
            "25": "25 is composite because it has more than two factors.",
            "26": "26 is composite because it has more than two factors.",
            "27": "27 is composite because it has more than two factors."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch6_t3_qm15',
        type: "mcq",
        question: "What is the sum of all prime numbers between 10 and 20?",
        options: ["50", "60", "70", "80"],
        correctAnswer: "60",
        explanation: "The prime numbers between 10 and 20 are 11, 13, 17, and 19. Their sum is 11 + 13 + 17 + 19 = 60. 🔢",
        wrongAnswerExplanations: {
            "50": "This is too low for the sum of primes between 10 and 20.",
            "70": "This is too high for the sum of primes between 10 and 20.",
            "80": "This is too high for the sum of primes between 10 and 20."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch6_t3_qm16',
        type: "mcq",
        question: "Which number is a composite number?",
        options: ["43", "47", "49", "53"],
        correctAnswer: "49",
        explanation: "49 is composite because it has more than two factors: 1, 7, and 49. 🔢",
        wrongAnswerExplanations: {
            "43": "43 is prime because it has only two factors.",
            "47": "47 is prime because it has only two factors.",
            "53": "53 is prime because it has only two factors."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch6_t3_qm17',
        type: "mcq",
        question: "What is the product of the first two prime numbers?",
        options: ["4", "6", "8", "10"],
        correctAnswer: "6",
        explanation: "The first two prime numbers are 2 and 3. Their product is 2 × 3 = 6. 🔢",
        wrongAnswerExplanations: {
            "4": "This would be 2 × 2, but we need different primes.",
            "8": "This would be 2 × 4, but 4 is not prime.",
            "10": "This would be 2 × 5, but 5 is the third prime."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch6_t3_qm18',
        type: "mcq",
        question: "Which of these numbers has exactly four factors?",
        options: ["6", "8", "9", "10"],
        correctAnswer: "8",
        explanation: "8 has exactly four factors: 1, 2, 4, and 8. 🔢",
        wrongAnswerExplanations: {
            "6": "6 has four factors: 1, 2, 3, and 6.",
            "9": "9 has three factors: 1, 3, and 9.",
            "10": "10 has four factors: 1, 2, 5, and 10."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch6_t3_qm19',
        type: "mcq",
        question: "What is the difference between the largest and smallest prime numbers less than 20?",
        options: ["15", "16", "17", "18"],
        correctAnswer: "17",
        explanation: "The largest prime less than 20 is 19, and the smallest is 2. The difference is 19 - 2 = 17. 🔢",
        wrongAnswerExplanations: {
            "15": "This is not the correct difference between 19 and 2.",
            "16": "This is not the correct difference between 19 and 2.",
            "18": "This is not the correct difference between 19 and 2."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch6_t3_qm20',
        type: "mcq",
        question: "Which number is a prime number?",
        options: ["51", "53", "55", "57"],
        correctAnswer: "53",
        explanation: "53 is a prime number because it has exactly two factors: 1 and 53. 🔢",
        wrongAnswerExplanations: {
            "51": "51 is not prime because it has more than two factors.",
            "55": "55 is not prime because it has more than two factors.",
            "57": "57 is not prime because it has more than two factors."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    }
]; 