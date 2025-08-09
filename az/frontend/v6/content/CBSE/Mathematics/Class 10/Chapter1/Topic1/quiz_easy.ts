import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl10_ch1_t1_qe1',
        type: "mcq",
        question: "What does Euclid's division lemma state for any two positive integers a and b?",
        options: ["a = bq + r, where 0 ≤ r < b", "a = b + r, where 0 < r < b", "a = bq + r, where 0 < r < b", "a = bq + r, where 0 ≤ r ≤ b"],
        correctAnswer: "a = bq + r, where 0 ≤ r < b",
        explanation: "It states a = bq + r, where 0 ≤ r < b. This is the standard form of Euclid's division lemma. 📏",
        wrongAnswerExplanations: {
            "a = b + r, where 0 < r < b": "This form is incorrect; it misses the quotient q.",
            "a = bq + r, where 0 < r < b": "r can be zero, so 0 ≤ r < b is correct.",
            "a = bq + r, where 0 ≤ r ≤ b": "r must be less than b, not less than or equal to b."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl10_ch1_t1_qe2',
        type: "mcq",
        question: "If 23 is divided by 5 using Euclid's division lemma, what is the remainder?",
        options: ['2', '3', '4', '1'],
        correctAnswer: '3',
        explanation: "23 = 5 × 4 + 3, so the remainder is 3. 🧮",
        wrongAnswerExplanations: {
            '2': '5 × 4 + 2 = 22, not 23.',
            '4': '5 × 3 + 4 = 19, not 23.',
            '1': '5 × 4 + 1 = 21, not 23.'
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl10_ch1_t1_qe3',
        type: "mcq",
        question: "In the equation a = bq + r, what does 'r' represent?",
        options: ['Remainder', 'Quotient', 'Divisor', 'Dividend'],
        correctAnswer: 'Remainder',
        explanation: "'r' is the remainder left after dividing a by b. 🔢",
        wrongAnswerExplanations: {
            'Quotient': 'q is the quotient.',
            'Divisor': 'b is the divisor.',
            'Dividend': 'a is the dividend.'
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl10_ch1_t1_qe4',
        type: "mcq",
        question: "What is the value of q when 50 is divided by 7 using Euclid's division lemma?",
        options: ['7', '6', '8', '5'],
        correctAnswer: '7',
        explanation: "50 = 7 × 7 + 1, so q = 7. 🧠",
        wrongAnswerExplanations: {
            '6': '7 × 6 = 42, remainder would be 8.',
            '8': '7 × 8 = 56, which is more than 50.',
            '5': '7 × 5 = 35, remainder would be 15.'
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl10_ch1_t1_qe5',
        type: "mcq",
        question: "Which of the following is an application of Euclid's division lemma?",
        options: [
            'Finding HCF',
            'Finding LCM directly',
            'Solving quadratic equations',
            'Calculating area of a circle'
        ],
        correctAnswer: 'Finding HCF',
        explanation: "Euclid's lemma is used in the Euclidean algorithm to find HCF. 🏆",
        wrongAnswerExplanations: {
            'Finding LCM directly': 'LCM is found using HCF, not directly by the lemma.',
            'Solving quadratic equations': 'Quadratic equations are unrelated.',
            'Calculating area of a circle': 'This is unrelated to the lemma.'
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl10_ch1_t1_qe6',
        type: "mcq",
        question: "If a = 29, b = 6, what are the values of q and r in a = bq + r?",
        options: ['q = 4, r = 5', 'q = 5, r = 4', 'q = 6, r = 3', 'q = 3, r = 6'],
        correctAnswer: 'q = 4, r = 5',
        explanation: "29 = 6 × 4 + 5, so q = 4 and r = 5. 🧩",
        wrongAnswerExplanations: {
            'q = 5, r = 4': '6 × 5 + 4 = 34, not 29.',
            'q = 6, r = 3': '6 × 6 + 3 = 39, not 29.',
            'q = 3, r = 6': '6 × 3 + 6 = 24, not 29.'
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl10_ch1_t1_qe7',
        type: "mcq",
        question: "What is the remainder when 100 is divided by 9?",
        options: ['1', '2', '10', '8'],
        correctAnswer: '1',
        explanation: "100 = 9 × 11 + 1, so the remainder is 1. 🎯",
        wrongAnswerExplanations: {
            '2': '9 × 11 + 2 = 101, not 100.',
            '10': '9 × 11 + 10 = 109, not 100.',
            '8': '9 × 10 + 8 = 98, not 100.'
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl10_ch1_t1_qe8',
        type: "mcq",
        question: "Which of the following is true for the remainder r in Euclid's division lemma?",
        options: ['0 ≤ r < b', '0 < r < b', '0 ≤ r ≤ b', 'r > b'],
        correctAnswer: '0 ≤ r < b',
        explanation: "The remainder r must satisfy 0 ≤ r < b. 📐",
        wrongAnswerExplanations: {
            '0 < r < b': 'r can be zero.',
            '0 ≤ r ≤ b': 'r cannot be equal to b.',
            'r > b': 'r must be less than b.'
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl10_ch1_t1_qe9',
        type: "mcq",
        question: "What is the HCF of 36 and 24 using the Euclidean algorithm?",
        options: ['12', '6', '24', '18'],
        correctAnswer: '12',
        explanation: "36 = 24 × 1 + 12, 24 = 12 × 2 + 0, so HCF is 12. 🏅",
        wrongAnswerExplanations: {
            '6': '6 is a common factor but not the highest.',
            '24': '24 is a factor but not the highest common factor.',
            '18': '18 is not a common factor of both.'
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl10_ch1_t1_qe10',
        type: "mcq",
        question: "If a = 17, b = 4, what is the value of r?",
        options: ['1', '2', '3', '4'],
        correctAnswer: '1',
        explanation: "17 = 4 × 4 + 1, so r = 1. 🧮",
        wrongAnswerExplanations: {
            '2': '4 × 3 + 2 = 14, not 17.',
            '3': '4 × 3 + 3 = 15, not 17.',
            '4': '4 × 3 + 4 = 16, not 17.'
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl10_ch1_t1_qe11',
        type: "mcq",
        question: "Which of the following is NOT a possible value for the remainder when dividing by 7?",
        options: ['7', '0', '3', '6'],
        correctAnswer: '7',
        explanation: "Remainder must be less than 7, so 7 is not possible. 🚫",
        wrongAnswerExplanations: {
            '0': '0 is possible if the number is divisible by 7.',
            '3': '3 is possible as a remainder.',
            '6': '6 is possible as a remainder.'
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl10_ch1_t1_qe12',
        type: "mcq",
        question: "What is the quotient when 85 is divided by 9?",
        options: ['9', '8', '7', '6'],
        correctAnswer: '9',
        explanation: "85 = 9 × 9 + 4, so the quotient is 9. 🧠",
        wrongAnswerExplanations: {
            '8': '9 × 8 = 72, remainder would be 13.',
            '7': '9 × 7 = 63, remainder would be 22.',
            '6': '9 × 6 = 54, remainder would be 31.'
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl10_ch1_t1_qe13',
        type: "mcq",
        question: "Which of the following pairs (q, r) is correct for 31 = 7q + r?",
        options: ['q = 4, r = 3', 'q = 5, r = 6', 'q = 3, r = 2', 'q = 2, r = 5'],
        correctAnswer: 'q = 4, r = 3',
        explanation: "31 = 7 × 4 + 3, so q = 4 and r = 3. 🧮",
        wrongAnswerExplanations: {
            'q = 5, r = 6': '7 × 5 + 6 = 41, not 31.',
            'q = 3, r = 2': '7 × 3 + 2 = 23, not 31.',
            'q = 2, r = 5': '7 × 2 + 5 = 19, not 31.'
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl10_ch1_t1_qe14',
        type: "mcq",
        question: "What is the HCF of 60 and 48 using the Euclidean algorithm?",
        options: ['12', '6', '24', '8'],
        correctAnswer: '12',
        explanation: "60 = 48 × 1 + 12, 48 = 12 × 4 + 0, so HCF is 12. 🏅",
        wrongAnswerExplanations: {
            '6': '6 is a common factor but not the highest.',
            '24': '24 is a factor but not the highest common factor.',
            '8': '8 is a factor but not the highest common factor.'
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl10_ch1_t1_qe15',
        type: "mcq",
        question: "If a = 42, b = 8, what is the remainder r?",
        options: ['2', '4', '6', '10'],
        correctAnswer: '2',
        explanation: "42 = 8 × 5 + 2, so r = 2. 🧮",
        wrongAnswerExplanations: {
            '4': '8 × 5 + 4 = 44, not 42.',
            '6': '8 × 5 + 6 = 46, not 42.',
            '10': '8 × 4 + 10 = 42, but 10 is not less than 8.'
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl10_ch1_t1_qe16',
        type: "mcq",
        question: "Which of the following is NOT a use of Euclid's division lemma?",
        options: [
            'Finding HCF',
            'Proving the Fundamental Theorem of Arithmetic',
            'Solving Linear Diophantine Equations',
            'Finding the area of a triangle'
        ],
        correctAnswer: 'Finding the area of a triangle',
        explanation: "The lemma is not used for area calculations. 🛑",
        wrongAnswerExplanations: {
            'Finding HCF': 'It is used for HCF.',
            'Proving the Fundamental Theorem of Arithmetic': 'It is used for this proof.',
            'Solving Linear Diophantine Equations': 'It is used for this.'
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl10_ch1_t1_qe17',
        type: "mcq",
        question: "If 77 is divided by 6, what is the value of r?",
        options: ['5', '6', '3', '2'],
        correctAnswer: '5',
        explanation: "77 = 6 × 12 + 5, so r = 5. 🧮",
        wrongAnswerExplanations: {
            '6': '6 × 12 + 6 = 78, not 77.',
            '3': '6 × 12 + 3 = 75, not 77.',
            '2': '6 × 12 + 2 = 74, not 77.'
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl10_ch1_t1_qe18',
        type: "mcq",
        question: "What is the HCF of 81 and 57 using the Euclidean algorithm?",
        options: ['3', '9', '27', '24'],
        correctAnswer: '3',
        explanation: "81 = 57 × 1 + 24, 57 = 24 × 2 + 9, 24 = 9 × 2 + 6, 9 = 6 × 1 + 3, 6 = 3 × 2 + 0, so HCF is 3. 🏅",
        wrongAnswerExplanations: {
            '9': '9 is a common factor but not the highest.',
            '27': '27 is not a factor of both.',
            '24': '24 is not a factor of both.'
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl10_ch1_t1_qe19',
        type: "mcq",
        question: "If a = 35, b = 9, what is the value of q?",
        options: ['3', '4', '2', '5'],
        correctAnswer: '3',
        explanation: "35 = 9 × 3 + 8, so q = 3. 🧠",
        wrongAnswerExplanations: {
            '4': '9 × 4 = 36, which is more than 35.',
            '2': '9 × 2 = 18, remainder would be 17.',
            '5': '9 × 5 = 45, which is more than 35.'
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl10_ch1_t1_qe20',
        type: "mcq",
        question: "Which of the following is a correct form of Euclid's division lemma?",
        options: [
            'a = bq + r, 0 ≤ r < b',
            'a = bq + r, 0 < r < b',
            'a = bq + r, 0 ≤ r ≤ b',
            'a = bq + r, r > b'
        ],
        correctAnswer: 'a = bq + r, 0 ≤ r < b',
        explanation: "This is the correct form of the lemma. 📏",
        wrongAnswerExplanations: {
            '0 < r < b': 'r can be zero.',
            '0 ≤ r ≤ b': 'r cannot be equal to b.',
            'r > b': 'r must be less than b.'
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    }
];
