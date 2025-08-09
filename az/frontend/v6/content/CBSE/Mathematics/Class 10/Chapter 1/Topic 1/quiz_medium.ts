import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl10_ch1_t1_qm1',
        type: "mcq",
        question: "If 119 and 544 are divided using the Euclidean algorithm, what is the HCF?",
        options: ["17", "1", "119", "7"],
        correctAnswer: "17",
        explanation: "544 = 119 × 4 + 68, 119 = 68 × 1 + 51, 68 = 51 × 1 + 17, 51 = 17 × 3 + 0, so HCF is 17. 🏅",
        wrongAnswerExplanations: {
            "1": "1 is a common factor but not the highest.",
            "119": "119 is a factor but not the highest common factor.",
            "7": "7 is a factor but not the highest common factor."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl10_ch1_t1_qm2',
        type: "mcq",
        question: "If a = 123, b = 17, what is the value of r in a = bq + r?",
        options: ["4", "5", "6", "7"],
        correctAnswer: "4",
        explanation: "123 = 17 × 7 + 4, so r = 4. 🧮",
        wrongAnswerExplanations: {
            "5": "17 × 7 + 5 = 124, not 123.",
            "6": "17 × 6 + 6 = 108, not 123.",
            "7": "17 × 6 + 7 = 109, not 123."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl10_ch1_t1_qm3',
        type: "mcq",
        question: "What is the quotient q when 250 is divided by 13?",
        options: ["19", "18", "20", "17"],
        correctAnswer: "19",
        explanation: "250 = 13 × 19 + 3, so q = 19. 🧠",
        wrongAnswerExplanations: {
            "18": "13 × 18 = 234, remainder would be 16.",
            "20": "13 × 20 = 260, which is more than 250.",
            "17": "13 × 17 = 221, remainder would be 29."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl10_ch1_t1_qm4',
        type: "mcq",
        question: "Which of the following is NOT a valid application of Euclid's division lemma?",
        options: ["Finding HCF", "Proving the Fundamental Theorem of Arithmetic", "Solving Linear Diophantine Equations", "Finding cube roots"],
        correctAnswer: "Finding cube roots",
        explanation: "The lemma is not used for cube roots. 🛑",
        wrongAnswerExplanations: {
            "Finding HCF": "It is used for HCF.",
            "Proving the Fundamental Theorem of Arithmetic": "It is used for this proof.",
            "Solving Linear Diophantine Equations": "It is used for this."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl10_ch1_t1_qm5',
        type: "mcq",
        question: "If a = 100, b = 21, what is the value of r?",
        options: ["16", "17", "15", "13"],
        correctAnswer: "16",
        explanation: "100 = 21 × 4 + 16, so r = 16. 🧮",
        wrongAnswerExplanations: {
            "17": "21 × 3 + 17 = 80, not 100.",
            "15": "21 × 4 + 15 = 99, not 100.",
            "13": "21 × 4 + 13 = 97, not 100."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl10_ch1_t1_qm6',
        type: "mcq",
        question: "What is the HCF of 84 and 30 using the Euclidean algorithm?",
        options: ["6", "12", "14", "24"],
        correctAnswer: "6",
        explanation: "84 = 30 × 2 + 24, 30 = 24 × 1 + 6, 24 = 6 × 4 + 0, so HCF is 6. 🏅",
        wrongAnswerExplanations: {
            "12": "12 is a factor but not the highest common factor.",
            "14": "14 is not a factor of both.",
            "24": "24 is not a factor of both."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl10_ch1_t1_qm7',
        type: "mcq",
        question: "If a = 77, b = 8, what is the value of q?",
        options: ["9", "8", "10", "7"],
        correctAnswer: "9",
        explanation: "77 = 8 × 9 + 5, so q = 9. 🧠",
        wrongAnswerExplanations: {
            "8": "8 × 8 = 64, remainder would be 13.",
            "10": "8 × 10 = 80, which is more than 77.",
            "7": "8 × 7 = 56, remainder would be 21."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl10_ch1_t1_qm8',
        type: "mcq",
        question: "Which of the following statements is true about the remainder in Euclid's division lemma?",
        options: ["It is always less than the divisor", "It can be equal to the divisor", "It is always greater than the divisor", "It can be negative"],
        correctAnswer: "It is always less than the divisor",
        explanation: "The remainder r must satisfy 0 ≤ r < b. 📐",
        wrongAnswerExplanations: {
            "It can be equal to the divisor": "r cannot be equal to b.",
            "It is always greater than the divisor": "r must be less than b.",
            "It can be negative": "r cannot be negative."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl10_ch1_t1_qm9',
        type: "mcq",
        question: "What is the HCF of 65 and 40 using the Euclidean algorithm?",
        options: ["5", "10", "15", "20"],
        correctAnswer: "5",
        explanation: "65 = 40 × 1 + 25, 40 = 25 × 1 + 15, 25 = 15 × 1 + 10, 15 = 10 × 1 + 5, 10 = 5 × 2 + 0, so HCF is 5. 🏅",
        wrongAnswerExplanations: {
            "10": "10 is a factor but not the highest common factor.",
            "15": "15 is a factor but not the highest common factor.",
            "20": "20 is not a factor of both."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl10_ch1_t1_qm10',
        type: "mcq",
        question: "If a = 98, b = 11, what is the value of r?",
        options: ["10", "9", "8", "7"],
        correctAnswer: "10",
        explanation: "98 = 11 × 8 + 10, so r = 10. 🧮",
        wrongAnswerExplanations: {
            "9": "11 × 8 + 9 = 97, not 98.",
            "8": "11 × 8 + 8 = 96, not 98.",
            "7": "11 × 8 + 7 = 95, not 98."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl10_ch1_t1_qm11',
        type: "mcq",
        question: "Which of the following is NOT a correct form of Euclid's division lemma?",
        options: ["a = bq + r, 0 ≤ r < b", "a = bq + r, 0 < r < b", "a = bq + r, 0 ≤ r ≤ b", "a = bq + r, r > b"],
        correctAnswer: "a = bq + r, 0 ≤ r ≤ b",
        explanation: "r cannot be equal to b. 🚫",
        wrongAnswerExplanations: {
            "a = bq + r, 0 ≤ r < b": "This is the correct form.",
            "a = bq + r, 0 < r < b": "r can be zero.",
            "a = bq + r, r > b": "r must be less than b."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl10_ch1_t1_qm12',
        type: "mcq",
        question: "If a = 143, b = 13, what is the value of q?",
        options: ["11", "10", "12", "9"],
        correctAnswer: "11",
        explanation: "143 = 13 × 11 + 0, so q = 11. 🧠",
        wrongAnswerExplanations: {
            "10": "13 × 10 = 130, remainder would be 13.",
            "12": "13 × 12 = 156, which is more than 143.",
            "9": "13 × 9 = 117, remainder would be 26."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl10_ch1_t1_qm13',
        type: "mcq",
        question: "What is the HCF of 105 and 91 using the Euclidean algorithm?",
        options: ["7", "14", "21", "35"],
        correctAnswer: "7",
        explanation: "105 = 91 × 1 + 14, 91 = 14 × 6 + 7, 14 = 7 × 2 + 0, so HCF is 7. 🏅",
        wrongAnswerExplanations: {
            "14": "14 is a factor but not the highest common factor.",
            "21": "21 is not a factor of both.",
            "35": "35 is not a factor of both."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl10_ch1_t1_qm14',
        type: "mcq",
        question: "If a = 200, b = 33, what is the value of r?",
        options: ["2", "3", "4", "5"],
        correctAnswer: "2",
        explanation: "200 = 33 × 6 + 2, so r = 2. 🧮",
        wrongAnswerExplanations: {
            "3": "33 × 6 + 3 = 201, not 200.",
            "4": "33 × 6 + 4 = 202, not 200.",
            "5": "33 × 5 + 5 = 170, not 200."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl10_ch1_t1_qm15',
        type: "mcq",
        question: "Which of the following is a correct use of the Euclidean algorithm?",
        options: ["Finding the HCF of two numbers", "Finding the LCM directly", "Solving quadratic equations", "Calculating square roots"],
        correctAnswer: "Finding the HCF of two numbers",
        explanation: "The Euclidean algorithm is used to find the HCF. 🏆",
        wrongAnswerExplanations: {
            "Finding the LCM directly": "LCM is found using HCF, not directly by the algorithm.",
            "Solving quadratic equations": "Quadratic equations are unrelated.",
            "Calculating square roots": "This is unrelated to the algorithm."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl10_ch1_t1_qm16',
        type: "mcq",
        question: "If a = 99, b = 8, what is the value of q?",
        options: ["12", "11", "13", "10"],
        correctAnswer: "12",
        explanation: "99 = 8 × 12 + 3, so q = 12. 🧠",
        wrongAnswerExplanations: {
            "11": "8 × 11 = 88, remainder would be 11.",
            "13": "8 × 13 = 104, which is more than 99.",
            "10": "8 × 10 = 80, remainder would be 19."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl10_ch1_t1_qm17',
        type: "mcq",
        question: "What is the HCF of 144 and 60 using the Euclidean algorithm?",
        options: ["12", "6", "24", "18"],
        correctAnswer: "12",
        explanation: "144 = 60 × 2 + 24, 60 = 24 × 2 + 12, 24 = 12 × 2 + 0, so HCF is 12. 🏅",
        wrongAnswerExplanations: {
            "6": "6 is a factor but not the highest common factor.",
            "24": "24 is a factor but not the highest common factor.",
            "18": "18 is not a factor of both."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl10_ch1_t1_qm18',
        type: "mcq",
        question: "If a = 56, b = 9, what is the value of r?",
        options: ["2", "1", "3", "4"],
        correctAnswer: "2",
        explanation: "56 = 9 × 6 + 2, so r = 2. 🧮",
        wrongAnswerExplanations: {
            "1": "9 × 6 + 1 = 55, not 56.",
            "3": "9 × 5 + 3 = 48, not 56.",
            "4": "9 × 5 + 4 = 49, not 56."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl10_ch1_t1_qm19',
        type: "mcq",
        question: "Which of the following is NOT a property of the remainder in Euclid's division lemma?",
        options: ["It is always non-negative", "It is always less than the divisor", "It can be equal to the divisor", "It can be zero"],
        correctAnswer: "It can be equal to the divisor",
        explanation: "r cannot be equal to b. 🚫",
        wrongAnswerExplanations: {
            "It is always non-negative": "r can be zero or positive.",
            "It is always less than the divisor": "This is true.",
            "It can be zero": "r can be zero."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl10_ch1_t1_qm20',
        type: "mcq",
        question: "If a = 73, b = 12, what is the value of q and r?",
        options: ["q = 6, r = 1", "q = 5, r = 13", "q = 7, r = 2", "q = 6, r = 5"],
        correctAnswer: "q = 6, r = 1",
        explanation: "73 = 12 × 6 + 1, so q = 6 and r = 1. 🧮",
        wrongAnswerExplanations: {
            "q = 5, r = 13": "12 × 5 + 13 = 73, but r must be less than 12.",
            "q = 7, r = 2": "12 × 7 + 2 = 86, not 73.",
            "q = 6, r = 5": "12 × 6 + 5 = 77, not 73."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    }
];
