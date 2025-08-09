import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl8_ch14_t1_qm1',
        type: "mcq",
        question: "In a sequence, each term after the first two is the sum of all previous terms. If the first two terms are 2 and 3, what is the sixth term?",
        options: ["52", "63", "76", "89"],
        correctAnswer: "76",
        explanation: "The sequence is: 2, 3, 5, 10, 20, 76. Each term after first two is sum of all previous terms (2+3=5, 2+3+5=10, 2+3+5+10=20, 2+3+5+10+20=76). 🔢",
        wrongAnswerExplanations: {
            "52": "This would be if we only added the previous two terms each time.",
            "63": "This doesn't follow the pattern of summing all previous terms.",
            "89": "This exceeds the sum of all previous terms."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl8_ch14_t1_qm2',
        type: "mcq",
        question: "In a 3×3 magic square where middle number is 5, and all rows, columns, and diagonals sum to 15, what must be the number in the top-right corner?",
        options: ["2", "3", "6", "7"],
        correctAnswer: "2",
        explanation: "In a 3×3 magic square with sum 15 and center 5, the corners must sum to 15. Top-right must be 2 to complete the pattern. 🎯",
        wrongAnswerExplanations: {
            "3": "This would make the diagonal sum too small.",
            "6": "This would make the row sum too large.",
            "7": "This would make both diagonal and row sums too large."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 90
    },
    {
        id: 'cl8_ch14_t1_qm3',
        type: "mcq",
        question: "What is the missing number in the pattern: 1, 4, 9, 16, 25, 36, ?, 64, 81 if the pattern follows two rules simultaneously?",
        options: ["45", "47", "49", "51"],
        correctAnswer: "49",
        explanation: "These are perfect squares (1², 2², 3², ..., 9²) and the difference between consecutive terms increases by 2. 7² = 49. 📐",
        wrongAnswerExplanations: {
            "45": "This doesn't follow either the square pattern or the increasing difference pattern.",
            "47": "This follows neither the square pattern nor the increasing difference pattern.",
            "51": "This is not a perfect square and doesn't follow the pattern."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl8_ch14_t1_qm4',
        type: "mcq",
        question: "If SEND + MORE = MONEY in a cryptarithmetic puzzle, and D = 7, what is E?",
        options: ["5", "4", "3", "2"],
        correctAnswer: "5",
        explanation: "Since D = 7, and E appears in both SEND and MONEY, E must be 5 to make the addition work correctly. 🧩",
        wrongAnswerExplanations: {
            "4": "This value would make the sum incorrect in the ones place.",
            "3": "This would make the carry over incorrect.",
            "2": "This would make both the sum and carry over incorrect."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 120
    },
    {
        id: 'cl8_ch14_t1_qm5',
        type: "mcq",
        question: "In a sequence where each term is formed by multiplying the previous term by 2 and subtracting 3, if the first term is 5, what is the fourth term?",
        options: ["29", "31", "33", "35"],
        correctAnswer: "31",
        explanation: "5 → (5×2)-3=7 → (7×2)-3=11 → (11×2)-3=19 → (19×2)-3=35. The fourth term is 35. 🔄",
        wrongAnswerExplanations: {
            "29": "This would be if we subtracted 5 instead of 3.",
            "31": "This would be if we only multiplied by 2 without subtracting 3.",
            "33": "This doesn't follow the correct pattern of operations."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl8_ch14_t1_qm6',
        type: "mcq",
        question: "What comes next in the pattern: 2, 6, 14, 30, 62, ?",
        options: ["94", "116", "126", "128"],
        correctAnswer: "126",
        explanation: "Each term is doubled and 2 is added: 2×2+2=6, 6×2+2=14, 14×2+2=30, 30×2+2=62, 62×2+2=126. 📈",
        wrongAnswerExplanations: {
            "94": "This would be if we only added the previous increase.",
            "116": "This would be if we doubled without adding 2.",
            "128": "This would be if we doubled and added 4 instead of 2."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl8_ch14_t1_qm7',
        type: "mcq",
        question: "In a 4-digit number ABCD, if A + B = C + D and A × B = C × D, what is the smallest possible value of ABCD?",
        options: ["1122", "2211", "3322", "4433"],
        correctAnswer: "1122",
        explanation: "The smallest digits that satisfy both sum and product conditions are 1,1,2,2. So ABCD = 1122. 🔢",
        wrongAnswerExplanations: {
            "2211": "This satisfies the conditions but isn't the smallest possible number.",
            "3322": "This satisfies the conditions but is larger than 1122.",
            "4433": "This satisfies the conditions but is much larger than 1122."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 90
    },
    {
        id: 'cl8_ch14_t1_qm8',
        type: "mcq",
        question: "What is the next term in the pattern: 3, 8, 15, 24, 35, 48, ?",
        options: ["63", "65", "67", "69"],
        correctAnswer: "63",
        explanation: "The differences between terms form an arithmetic sequence: +5, +7, +9, +11, +13, +15. So 48 + 15 = 63. 📊",
        wrongAnswerExplanations: {
            "65": "This would mean the difference increased by 17 instead of 15.",
            "67": "This doesn't follow the pattern of differences increasing by 2.",
            "69": "This would mean the difference increased by 21 instead of 15."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl8_ch14_t1_qm9',
        type: "mcq",
        question: "If a palindrome number reads the same forwards and backwards, what is the smallest 4-digit palindrome number divisible by 11?",
        options: ["1001", "1111", "1221", "1331"],
        correctAnswer: "1001",
        explanation: "1001 is the smallest 4-digit palindrome and is divisible by 11 (1001 ÷ 11 = 91). 🔄",
        wrongAnswerExplanations: {
            "1111": "While this is a palindrome, it's not divisible by 11.",
            "1221": "This is a palindrome but not divisible by 11.",
            "1331": "This is larger than 1001, which is already a valid answer."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 90
    },
    {
        id: 'cl8_ch14_t1_qm10',
        type: "mcq",
        question: "In a sequence where each term is the sum of the squares of the digits of the previous term, starting with 3, what is the fourth term?",
        options: ["58", "89", "145", "42"],
        correctAnswer: "89",
        explanation: "3 → 3² = 9 → 9² = 81 → 8² + 1² = 65 → 6² + 5² = 61. The fourth term is 89. 🧮",
        wrongAnswerExplanations: {
            "58": "This would be if we added the digits instead of squaring them.",
            "145": "This is beyond the fourth term in the sequence.",
            "42": "This doesn't follow the pattern of squaring digits."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 90
    },
    {
        id: 'cl8_ch14_t1_qm11',
        type: "mcq",
        question: "In a sequence where each term is formed by adding the squares of the two previous terms, if the first two terms are 2 and 3, what is the fourth term?",
        options: ["58", "85", "94", "113"],
        correctAnswer: "113",
        explanation: "2, 3, (2²+3²)=13, (3²+13²)=178. The sequence is 2, 3, 13, 113. 🧮",
        wrongAnswerExplanations: {
            "58": "This would be if we added the numbers instead of their squares.",
            "85": "This would be if we only squared the last number.",
            "94": "This would be if we multiplied the numbers instead of squaring."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl8_ch14_t1_qm12',
        type: "mcq",
        question: "In a 3×3 magic square, if the sum of each row is 18 and the center number is 6, what must be the sum of all corner numbers?",
        options: ["24", "30", "32", "36"],
        correctAnswer: "32",
        explanation: "In a magic square with sum 18 and center 6, corners must sum to 32 to maintain equal row, column, and diagonal sums. 🎯",
        wrongAnswerExplanations: {
            "24": "This would make the diagonal sums too small.",
            "30": "This would make the row and column sums unequal.",
            "36": "This would make the diagonal sums too large."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 90
    },
    {
        id: 'cl8_ch14_t1_qm13',
        type: "mcq",
        question: "If ABCD × 4 = DCBA (where ABCD is a 4-digit number), what is the value of A?",
        options: ["1", "2", "3", "4"],
        correctAnswer: "2",
        explanation: "The only 4-digit number that when multiplied by 4 gives its reverse is 2178 (2178 × 4 = 8712). So A = 2. 🔄",
        wrongAnswerExplanations: {
            "1": "Numbers starting with 1 don't give their reverse when multiplied by 4.",
            "3": "Numbers starting with 3 don't give their reverse when multiplied by 4.",
            "4": "Numbers starting with 4 don't give their reverse when multiplied by 4."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 120
    },
    {
        id: 'cl8_ch14_t1_qm14',
        type: "mcq",
        question: "What is the next pair in the pattern: (1,1), (2,4), (3,9), (4,16), (5,25), ?",
        options: ["(6,30)", "(6,36)", "(6,42)", "(7,36)"],
        correctAnswer: "(6,36)",
        explanation: "Each pair is (n, n²). For n=6, the pair is (6, 6²)=(6,36). 📊",
        wrongAnswerExplanations: {
            "(6,30)": "This would be (n, n×5) instead of (n, n²).",
            "(6,42)": "This would be (n, n×7) instead of (n, n²).",
            "(7,36)": "This uses the wrong first number and doesn't follow n²."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl8_ch14_t1_qm15',
        type: "mcq",
        question: "If a number pattern starts with 3 and each new term is found by multiplying the previous term by 2 and subtracting the term before that, what is the fifth term?",
        options: ["27", "33", "39", "45"],
        correctAnswer: "39",
        explanation: "3, 6, 9, 18, 39. Each term is 2 times previous minus term before that: 3, 6, (6×2)-3=9, (9×2)-6=18, (18×2)-9=39. 🔢",
        wrongAnswerExplanations: {
            "27": "This would be if we only multiplied by 3 each time.",
            "33": "This would be if we subtracted the wrong term.",
            "45": "This would be if we added instead of subtracted."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 90
    },
    {
        id: 'cl8_ch14_t1_qm16',
        type: "mcq",
        question: "In the pattern 1, 3, 4, 7, 11, 18, 29, what operation connects each consecutive pair of numbers?",
        options: ["Add previous number", "Add two previous numbers", "Multiply by 1.5", "Add alternating numbers"],
        correctAnswer: "Add previous number",
        explanation: "Each number is the sum of the previous two: 3+4=7, 4+7=11, 7+11=18, 11+18=29. 📈",
        wrongAnswerExplanations: {
            "Add two previous numbers": "This would give different numbers in the sequence.",
            "Multiply by 1.5": "This would give a different growth pattern.",
            "Add alternating numbers": "This doesn't match the pattern of growth."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl8_ch14_t1_qm17',
        type: "mcq",
        question: "If the sum of three consecutive terms in an arithmetic sequence is 33, and the middle term is twice the first term, what is the first term?",
        options: ["7", "8", "9", "10"],
        correctAnswer: "9",
        explanation: "Let first term be x. Then sequence is x, 2x, 3x-d where d is common difference. Sum is 33, so x+2x+(3x-d)=33. x=9. 🧮",
        wrongAnswerExplanations: {
            "7": "This value doesn't satisfy both conditions.",
            "8": "This makes the sum less than 33.",
            "10": "This makes the sum greater than 33."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 90
    },
    {
        id: 'cl8_ch14_t1_qm18',
        type: "mcq",
        question: "In a cryptarithmetic puzzle, if AB + BC = CA and A ≠ B ≠ C, what is the smallest possible value of A?",
        options: ["1", "2", "3", "4"],
        correctAnswer: "2",
        explanation: "The smallest solution is 25 + 56 = 81, making A=2. Any smaller value for A doesn't work. 🧩",
        wrongAnswerExplanations: {
            "1": "No solution exists with A=1 that satisfies all conditions.",
            "3": "While possible, 2 is the smallest working value.",
            "4": "While possible, 2 is the smallest working value."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 120
    },
    {
        id: 'cl8_ch14_t1_qm19',
        type: "mcq",
        question: "What is the missing term in the sequence: 2, 6, 12, 20, ?, 42 if the differences between consecutive terms form an arithmetic sequence?",
        options: ["28", "30", "32", "34"],
        correctAnswer: "30",
        explanation: "Differences form arithmetic sequence: 4, 6, 8, 10, 12. So 20 + 10 = 30. 📊",
        wrongAnswerExplanations: {
            "28": "This would mean the difference pattern is wrong.",
            "32": "This would make the next difference too large.",
            "34": "This breaks the pattern of differences."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl8_ch14_t1_qm20',
        type: "mcq",
        question: "If □△○ represents a three-digit number where □+△=○ and □×△=○, what is the value of □+△+○?",
        options: ["11", "12", "13", "14"],
        correctAnswer: "12",
        explanation: "The only solution is □=3, △=3, ○=6 (3+3=6 and 3×3=9). Sum is 3+3+6=12. 🎯",
        wrongAnswerExplanations: {
            "11": "No combination of digits satisfies both conditions with this sum.",
            "13": "This sum would require digits that don't satisfy the conditions.",
            "14": "This sum is too large for any valid combination."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 90
    }
]; 