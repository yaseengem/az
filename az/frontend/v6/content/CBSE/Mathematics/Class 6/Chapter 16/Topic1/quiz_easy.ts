import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl6_ch16_t1_qe1',
        type: "mcq",
        question: "Which of these numbers is a palindromic number?",
        options: ["123", "121", "132", "143"],
        correctAnswer: "121",
        explanation: "121 reads the same forwards and backwards, making it a palindromic number. 🔄",
        wrongAnswerExplanations: {
            "123": "123 reads differently forwards and backwards.",
            "132": "132 reads differently forwards and backwards.",
            "143": "143 reads differently forwards and backwards."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch16_t1_qe2',
        type: "mcq",
        question: "How many two-digit palindromic numbers are there?",
        options: ["8", "9", "10", "11"],
        correctAnswer: "9",
        explanation: "There are 9 two-digit palindromes: 11, 22, 33, 44, 55, 66, 77, 88, 99. 🔢",
        wrongAnswerExplanations: {
            "8": "There are more than 8 two-digit palindromes.",
            "10": "There are fewer than 10 two-digit palindromes.",
            "11": "There are fewer than 11 two-digit palindromes."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch16_t1_qe3',
        type: "mcq",
        question: "Which of these is NOT a palindromic number?",
        options: ["131", "141", "151", "161"],
        correctAnswer: "161",
        explanation: "161 is not a palindrome as it reads differently forwards and backwards. ❌",
        wrongAnswerExplanations: {
            "131": "131 is a palindrome as it reads the same forwards and backwards.",
            "141": "141 is a palindrome as it reads the same forwards and backwards.",
            "151": "151 is a palindrome as it reads the same forwards and backwards."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch16_t1_qe4',
        type: "mcq",
        question: "What is the smallest three-digit palindromic number?",
        options: ["100", "101", "111", "121"],
        correctAnswer: "101",
        explanation: "101 is the smallest three-digit palindrome as it reads the same forwards and backwards. 🔍",
        wrongAnswerExplanations: {
            "100": "100 is not a palindrome as it reads differently forwards and backwards.",
            "111": "111 is a palindrome but not the smallest three-digit one.",
            "121": "121 is a palindrome but not the smallest three-digit one."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch16_t1_qe5',
        type: "mcq",
        question: "If you reverse the digits of 89 and add it to the original number, what do you get?",
        options: ["176", "177", "178", "179"],
        correctAnswer: "178",
        explanation: "89 + 98 = 178. This is the first step in creating a palindrome using the mirror method. 🔄",
        wrongAnswerExplanations: {
            "176": "89 + 98 is not 176.",
            "177": "89 + 98 is not 177.",
            "179": "89 + 98 is not 179."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch16_t1_qe6',
        type: "mcq",
        question: "Which of these numbers is both a palindrome and a perfect square?",
        options: ["121", "123", "124", "125"],
        correctAnswer: "121",
        explanation: "121 is both a palindrome and a perfect square (11² = 121). ✨",
        wrongAnswerExplanations: {
            "123": "123 is neither a palindrome nor a perfect square.",
            "124": "124 is neither a palindrome nor a perfect square.",
            "125": "125 is not a palindrome and not a perfect square."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch16_t1_qe7',
        type: "mcq",
        question: "How many single-digit palindromic numbers are there?",
        options: ["8", "9", "10", "11"],
        correctAnswer: "10",
        explanation: "All single-digit numbers (0-9) are palindromic, giving us 10 palindromic numbers. 🔢",
        wrongAnswerExplanations: {
            "8": "There are more than 8 single-digit palindromes.",
            "9": "There are more than 9 single-digit palindromes.",
            "11": "There are fewer than 11 single-digit palindromes."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch16_t1_qe8',
        type: "mcq",
        question: "Which of these is a palindromic prime number?",
        options: ["11", "12", "14", "15"],
        correctAnswer: "11",
        explanation: "11 is both a palindrome and a prime number. 🔢",
        wrongAnswerExplanations: {
            "12": "12 is not a prime number.",
            "14": "14 is not a prime number.",
            "15": "15 is not a prime number."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch16_t1_qe9',
        type: "mcq",
        question: "What is the next palindromic number after 99?",
        options: ["100", "101", "111", "121"],
        correctAnswer: "101",
        explanation: "101 is the next palindrome after 99 as it reads the same forwards and backwards. 🔄",
        wrongAnswerExplanations: {
            "100": "100 is not a palindrome.",
            "111": "111 is a palindrome but comes after 101.",
            "121": "121 is a palindrome but comes after 101."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch16_t1_qe10',
        type: "mcq",
        question: "Which of these times on a digital clock is a palindrome?",
        options: ["12:21", "12:22", "12:23", "12:24"],
        correctAnswer: "12:21",
        explanation: "12:21 reads the same forwards and backwards, making it a palindromic time. ⏰",
        wrongAnswerExplanations: {
            "12:22": "12:22 is not a palindrome.",
            "12:23": "12:23 is not a palindrome.",
            "12:24": "12:24 is not a palindrome."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch16_t1_qe11',
        type: "mcq",
        question: "If you add a number to its reverse and get 363, what was the original number?",
        options: ["57", "58", "59", "60"],
        correctAnswer: "57",
        explanation: "57 + 75 = 132, then 132 + 231 = 363, which is a palindrome. 🔄",
        wrongAnswerExplanations: {
            "58": "58 + 85 = 143, not 363.",
            "59": "59 + 95 = 154, not 363.",
            "60": "60 + 06 = 66, not 363."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch16_t1_qe12',
        type: "mcq",
        question: "Which of these dates is a palindrome?",
        options: ["02/02/2020", "03/03/2020", "04/04/2020", "05/05/2020"],
        correctAnswer: "02/02/2020",
        explanation: "02/02/2020 reads the same forwards and backwards, making it a palindromic date. 📅",
        wrongAnswerExplanations: {
            "03/03/2020": "03/03/2020 is not a palindrome.",
            "04/04/2020": "04/04/2020 is not a palindrome.",
            "05/05/2020": "05/05/2020 is not a palindrome."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch16_t1_qe13',
        type: "mcq",
        question: "What is the largest two-digit palindromic number?",
        options: ["88", "99", "100", "101"],
        correctAnswer: "99",
        explanation: "99 is the largest two-digit palindrome as it reads the same forwards and backwards. 🔢",
        wrongAnswerExplanations: {
            "88": "88 is a palindrome but not the largest two-digit one.",
            "100": "100 is not a two-digit number.",
            "101": "101 is not a two-digit number."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch16_t1_qe14',
        type: "mcq",
        question: "Which of these numbers becomes a palindrome when reversed?",
        options: ["123", "321", "456", "654"],
        correctAnswer: "321",
        explanation: "321 reversed is 123, which is different from the original number. 🔄",
        wrongAnswerExplanations: {
            "123": "123 reversed is 321, which is different.",
            "456": "456 reversed is 654, which is different.",
            "654": "654 reversed is 456, which is different."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch16_t1_qe15',
        type: "mcq",
        question: "How many three-digit palindromic numbers start with 1?",
        options: ["8", "9", "10", "11"],
        correctAnswer: "10",
        explanation: "There are 10 three-digit palindromes starting with 1: 101, 111, 121, 131, 141, 151, 161, 171, 181, 191. 🔢",
        wrongAnswerExplanations: {
            "8": "There are more than 8 three-digit palindromes starting with 1.",
            "9": "There are more than 9 three-digit palindromes starting with 1.",
            "11": "There are fewer than 11 three-digit palindromes starting with 1."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch16_t1_qe16',
        type: "mcq",
        question: "Which of these is a palindromic number that is also a multiple of 11?",
        options: ["121", "123", "124", "125"],
        correctAnswer: "121",
        explanation: "121 is both a palindrome and a multiple of 11 (11 × 11 = 121). ✨",
        wrongAnswerExplanations: {
            "123": "123 is not a multiple of 11.",
            "124": "124 is not a multiple of 11.",
            "125": "125 is not a multiple of 11."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch16_t1_qe17',
        type: "mcq",
        question: "What is the sum of all two-digit palindromic numbers?",
        options: ["440", "450", "460", "470"],
        correctAnswer: "450",
        explanation: "Sum of 11+22+33+44+55+66+77+88+99 = 450. 🔢",
        wrongAnswerExplanations: {
            "440": "The sum is more than 440.",
            "460": "The sum is less than 460.",
            "470": "The sum is less than 470."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch16_t1_qe18',
        type: "mcq",
        question: "Which of these numbers is NOT a palindrome?",
        options: ["1221", "1331", "1441", "1552"],
        correctAnswer: "1552",
        explanation: "1552 reads differently forwards and backwards, so it's not a palindrome. ❌",
        wrongAnswerExplanations: {
            "1221": "1221 is a palindrome as it reads the same forwards and backwards.",
            "1331": "1331 is a palindrome as it reads the same forwards and backwards.",
            "1441": "1441 is a palindrome as it reads the same forwards and backwards."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch16_t1_qe19',
        type: "mcq",
        question: "What is the average of all two-digit palindromic numbers?",
        options: ["45", "50", "55", "60"],
        correctAnswer: "50",
        explanation: "Average = Sum of all two-digit palindromes ÷ Number of palindromes = 450 ÷ 9 = 50. 📊",
        wrongAnswerExplanations: {
            "45": "The average is more than 45.",
            "55": "The average is less than 55.",
            "60": "The average is less than 60."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch16_t1_qe20',
        type: "mcq",
        question: "Which of these is a palindromic number that is also a multiple of 3?",
        options: ["111", "112", "113", "114"],
        correctAnswer: "111",
        explanation: "111 is both a palindrome and a multiple of 3 (1+1+1=3, which is divisible by 3). ✨",
        wrongAnswerExplanations: {
            "112": "112 is not a multiple of 3.",
            "113": "113 is not a multiple of 3.",
            "114": "114 is not a palindrome."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    }
]; 