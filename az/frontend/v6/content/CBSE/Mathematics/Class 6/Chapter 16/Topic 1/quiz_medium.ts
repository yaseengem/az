import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl6_ch16_t1_qm1',
        type: "mcq",
        question: "What is the smallest four-digit palindromic number?",
        options: ["1001", "1111", "1221", "1331"],
        correctAnswer: "1001",
        explanation: "1001 is the smallest four-digit palindrome as it reads the same forwards and backwards. 🔍",
        wrongAnswerExplanations: {
            "1111": "1111 is a palindrome but not the smallest four-digit one.",
            "1221": "1221 is a palindrome but not the smallest four-digit one.",
            "1331": "1331 is a palindrome but not the smallest four-digit one."
        },
        difficulty: "medium",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch16_t1_qm2',
        type: "mcq",
        question: "How many steps does it take to create a palindrome from 89 using the mirror method?",
        options: ["24", "25", "26", "27"],
        correctAnswer: "24",
        explanation: "It takes 24 steps to reach the palindrome 8813200023188 from 89 using the mirror method. 🔄",
        wrongAnswerExplanations: {
            "25": "It takes fewer than 25 steps.",
            "26": "It takes fewer than 26 steps.",
            "27": "It takes fewer than 27 steps."
        },
        difficulty: "medium",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch16_t1_qm3',
        type: "mcq",
        question: "Which of these numbers is both a palindrome and a perfect cube?",
        options: ["1331", "1441", "1551", "1661"],
        correctAnswer: "1331",
        explanation: "1331 is both a palindrome and a perfect cube (11³ = 1331). ✨",
        wrongAnswerExplanations: {
            "1441": "1441 is a palindrome but not a perfect cube.",
            "1551": "1551 is a palindrome but not a perfect cube.",
            "1661": "1661 is a palindrome but not a perfect cube."
        },
        difficulty: "medium",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch16_t1_qm4',
        type: "mcq",
        question: "What is the sum of all three-digit palindromic numbers?",
        options: ["4950", "5000", "5050", "5100"],
        correctAnswer: "4950",
        explanation: "Sum of all three-digit palindromes (101+111+...+999) = 4950. 🔢",
        wrongAnswerExplanations: {
            "5000": "The sum is less than 5000.",
            "5050": "The sum is less than 5050.",
            "5100": "The sum is less than 5100."
        },
        difficulty: "medium",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch16_t1_qm5',
        type: "mcq",
        question: "Which of these is a palindromic number that is also a multiple of 7?",
        options: ["161", "171", "181", "191"],
        correctAnswer: "161",
        explanation: "161 is both a palindrome and a multiple of 7 (7 × 23 = 161). ✨",
        wrongAnswerExplanations: {
            "171": "171 is a palindrome but not a multiple of 7.",
            "181": "181 is a palindrome but not a multiple of 7.",
            "191": "191 is a palindrome but not a multiple of 7."
        },
        difficulty: "medium",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch16_t1_qm6',
        type: "mcq",
        question: "What is the product of the smallest and largest two-digit palindromic numbers?",
        options: ["1089", "1099", "1109", "1119"],
        correctAnswer: "1089",
        explanation: "11 × 99 = 1089, where 11 is the smallest and 99 is the largest two-digit palindrome. 🔢",
        wrongAnswerExplanations: {
            "1099": "The product is less than 1099.",
            "1109": "The product is less than 1109.",
            "1119": "The product is less than 1119."
        },
        difficulty: "medium",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch16_t1_qm7',
        type: "mcq",
        question: "How many four-digit palindromic numbers are there?",
        options: ["90", "91", "92", "93"],
        correctAnswer: "90",
        explanation: "There are 90 four-digit palindromes (9 choices for first/last digit × 10 choices for middle two digits). 🔢",
        wrongAnswerExplanations: {
            "91": "There are fewer than 91 four-digit palindromes.",
            "92": "There are fewer than 92 four-digit palindromes.",
            "93": "There are fewer than 93 four-digit palindromes."
        },
        difficulty: "medium",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch16_t1_qm8',
        type: "mcq",
        question: "Which of these is a palindromic number that is also a multiple of 13?",
        options: ["131", "141", "151", "161"],
        correctAnswer: "161",
        explanation: "161 is both a palindrome and a multiple of 13 (13 × 12.38 ≈ 161). ✨",
        wrongAnswerExplanations: {
            "131": "131 is a palindrome but not a multiple of 13.",
            "141": "141 is a palindrome but not a multiple of 13.",
            "151": "151 is a palindrome but not a multiple of 13."
        },
        difficulty: "medium",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch16_t1_qm9',
        type: "mcq",
        question: "What is the average of all three-digit palindromic numbers?",
        options: ["550", "555", "560", "565"],
        correctAnswer: "550",
        explanation: "Average = Sum of all three-digit palindromes ÷ Number of palindromes = 4950 ÷ 9 = 550. 📊",
        wrongAnswerExplanations: {
            "555": "The average is less than 555.",
            "560": "The average is less than 560.",
            "565": "The average is less than 565."
        },
        difficulty: "medium",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch16_t1_qm10',
        type: "mcq",
        question: "Which of these is a palindromic number that is also a multiple of 17?",
        options: ["171", "181", "191", "202"],
        correctAnswer: "171",
        explanation: "171 is both a palindrome and a multiple of 17 (17 × 10.06 ≈ 171). ✨",
        wrongAnswerExplanations: {
            "181": "181 is a palindrome but not a multiple of 17.",
            "191": "191 is a palindrome but not a multiple of 17.",
            "202": "202 is a palindrome but not a multiple of 17."
        },
        difficulty: "medium",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch16_t1_qm11',
        type: "mcq",
        question: "What is the difference between the largest and smallest three-digit palindromic numbers?",
        options: ["898", "899", "900", "901"],
        correctAnswer: "898",
        explanation: "999 - 101 = 898, where 999 is the largest and 101 is the smallest three-digit palindrome. 🔢",
        wrongAnswerExplanations: {
            "899": "The difference is less than 899.",
            "900": "The difference is less than 900.",
            "901": "The difference is less than 901."
        },
        difficulty: "medium",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch16_t1_qm12',
        type: "mcq",
        question: "How many five-digit palindromic numbers start with 1?",
        options: ["100", "101", "102", "103"],
        correctAnswer: "100",
        explanation: "There are 100 five-digit palindromes starting with 1 (10 choices for second digit × 10 choices for third digit). 🔢",
        wrongAnswerExplanations: {
            "101": "There are fewer than 101 five-digit palindromes starting with 1.",
            "102": "There are fewer than 102 five-digit palindromes starting with 1.",
            "103": "There are fewer than 103 five-digit palindromes starting with 1."
        },
        difficulty: "medium",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch16_t1_qm13',
        type: "mcq",
        question: "Which of these is a palindromic number that is also a multiple of 19?",
        options: ["171", "181", "191", "202"],
        correctAnswer: "171",
        explanation: "171 is both a palindrome and a multiple of 19 (19 × 9 = 171). ✨",
        wrongAnswerExplanations: {
            "181": "181 is a palindrome but not a multiple of 19.",
            "191": "191 is a palindrome but not a multiple of 19.",
            "202": "202 is a palindrome but not a multiple of 19."
        },
        difficulty: "medium",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch16_t1_qm14',
        type: "mcq",
        question: "What is the sum of all four-digit palindromic numbers?",
        options: ["49500", "50000", "50500", "51000"],
        correctAnswer: "49500",
        explanation: "Sum of all four-digit palindromes (1001+1111+...+9999) = 49500. 🔢",
        wrongAnswerExplanations: {
            "50000": "The sum is less than 50000.",
            "50500": "The sum is less than 50500.",
            "51000": "The sum is less than 51000."
        },
        difficulty: "medium",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch16_t1_qm15',
        type: "mcq",
        question: "Which of these is a palindromic number that is also a multiple of 23?",
        options: ["161", "171", "181", "191"],
        correctAnswer: "161",
        explanation: "161 is both a palindrome and a multiple of 23 (23 × 7 = 161). ✨",
        wrongAnswerExplanations: {
            "171": "171 is a palindrome but not a multiple of 23.",
            "181": "181 is a palindrome but not a multiple of 23.",
            "191": "191 is a palindrome but not a multiple of 23."
        },
        difficulty: "medium",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch16_t1_qm16',
        type: "mcq",
        question: "What is the product of the smallest and largest three-digit palindromic numbers?",
        options: ["100899", "100999", "101099", "101199"],
        correctAnswer: "100899",
        explanation: "101 × 999 = 100899, where 101 is the smallest and 999 is the largest three-digit palindrome. 🔢",
        wrongAnswerExplanations: {
            "100999": "The product is less than 100999.",
            "101099": "The product is less than 101099.",
            "101199": "The product is less than 101199."
        },
        difficulty: "medium",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch16_t1_qm17',
        type: "mcq",
        question: "How many six-digit palindromic numbers are there?",
        options: ["900", "901", "902", "903"],
        correctAnswer: "900",
        explanation: "There are 900 six-digit palindromes (9 choices for first/last digit × 10 choices for second/fifth digit × 10 choices for third/fourth digit). 🔢",
        wrongAnswerExplanations: {
            "901": "There are fewer than 901 six-digit palindromes.",
            "902": "There are fewer than 902 six-digit palindromes.",
            "903": "There are fewer than 903 six-digit palindromes."
        },
        difficulty: "medium",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch16_t1_qm18',
        type: "mcq",
        question: "Which of these is a palindromic number that is also a multiple of 29?",
        options: ["171", "181", "191", "202"],
        correctAnswer: "171",
        explanation: "171 is both a palindrome and a multiple of 29 (29 × 5.9 ≈ 171). ✨",
        wrongAnswerExplanations: {
            "181": "181 is a palindrome but not a multiple of 29.",
            "191": "191 is a palindrome but not a multiple of 29.",
            "202": "202 is a palindrome but not a multiple of 29."
        },
        difficulty: "medium",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch16_t1_qm19',
        type: "mcq",
        question: "What is the average of all four-digit palindromic numbers?",
        options: ["5500", "5550", "5600", "5650"],
        correctAnswer: "5500",
        explanation: "Average = Sum of all four-digit palindromes ÷ Number of palindromes = 49500 ÷ 9 = 5500. 📊",
        wrongAnswerExplanations: {
            "5550": "The average is less than 5550.",
            "5600": "The average is less than 5600.",
            "5650": "The average is less than 5650."
        },
        difficulty: "medium",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch16_t1_qm20',
        type: "mcq",
        question: "Which of these is a palindromic number that is also a multiple of 31?",
        options: ["161", "171", "181", "191"],
        correctAnswer: "161",
        explanation: "161 is both a palindrome and a multiple of 31 (31 × 5.19 ≈ 161). ✨",
        wrongAnswerExplanations: {
            "171": "171 is a palindrome but not a multiple of 31.",
            "181": "181 is a palindrome but not a multiple of 31.",
            "191": "191 is a palindrome but not a multiple of 31."
        },
        difficulty: "medium",
        marks: 1,
        recommendedTime: 30
    }
]; 