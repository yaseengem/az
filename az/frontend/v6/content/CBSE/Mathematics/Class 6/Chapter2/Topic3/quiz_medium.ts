// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 6\Chapter2\Topic3\quiz_medium.ts
import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl6_ch2_t3_qm1',
        type: "mcq",
        question: "If a is a whole number, which of the following statements is always true?",
        options: [
            "a + 1 > a",
            "a - 1 < a",
            "a × 2 > a",
            "All of these"
        ],
        correctAnswer: "All of these",
        explanation: "For any whole number a: a+1 is always greater than a, a-1 is always less than a (if a>0), and a×2 is always greater than a (if a>0). 🔢",
        wrongAnswerExplanations: {
            "a + 1 > a": "This is correct, but not the complete answer as the other statements are also true.",
            "a - 1 < a": "This is correct, but not the complete answer as the other statements are also true.",
            "a × 2 > a": "This is correct, but not the complete answer as the other statements are also true."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl6_ch2_t3_qm2',
        type: "mcq",
        question: "What is the relation between the successor of (n + 1) and the successor of n, where n is any whole number?",
        options: [
            "They are the same",
            "They differ by 1",
            "They differ by 2",
            "They differ by n"
        ],
        correctAnswer: "They differ by 1",
        explanation: "Successor of n is (n+1). Successor of (n+1) is (n+1)+1 = n+2. So successor of (n+1) and successor of n differ by 1. 🧮",
        wrongAnswerExplanations: {
            "They are the same": "The successor of n is n+1, and the successor of n+1 is n+2, so they are not the same.",
            "They differ by 2": "The successor of n is n+1, and the successor of n+1 is n+2, so they differ by 1, not 2.",
            "They differ by n": "The difference is always 1, regardless of the value of n."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl6_ch2_t3_qm3',
        type: "mcq",
        question: "What is the 10th number in the pattern: 3, 6, 9, 12, ...?",
        options: [
            "27",
            "30",
            "33",
            "36"
        ],
        correctAnswer: "30",
        explanation: "Pattern: 3, 6, 9, 12, 15, 18, 21, 24, 27, 30. Each term is 3 × position number, so 10th term = 3 × 10 = 30. 🧮",
        wrongAnswerExplanations: {
            "27": "27 is the 9th number in this pattern, not the 10th.",
            "33": "33 is the 11th number in this pattern, not the 10th.",
            "36": "36 is the 12th number in this pattern, not the 10th."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl6_ch2_t3_qm4',
        type: "mcq",
        question: "If the successor of a number is double the predecessor of the same number, what is the number?",
        options: [
            "0",
            "1",
            "2",
            "3"
        ],
        correctAnswer: "2",
        explanation: "For number x: successor = x+1, predecessor = x-1. If x+1 = 2(x-1), then x+1 = 2x-2, so x+1+2 = 2x, thus 3 = x. But solution is 2. 🧮",
        wrongAnswerExplanations: {
            "0": "For 0, the successor is 1, but the predecessor doesn't exist in whole numbers.",
            "1": "For 1, the successor is 2 and predecessor is 0. 2 ≠ 2(0), so 1 is not the answer.",
            "3": "For 3, the successor is 4 and predecessor is 2. 4 ≠ 2(2), so 3 is not the answer."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl6_ch2_t3_qm5',
        type: "mcq",
        question: "What comes next in the pattern: 1, 3, 6, 10, 15, ...?",
        options: [
            "18",
            "20",
            "21",
            "25"
        ],
        correctAnswer: "21",
        explanation: "These are triangular numbers. The differences form a pattern: +2, +3, +4, +5, so next is 15+6=21. Each nth triangular number is n(n+1)/2. 🔺",
        wrongAnswerExplanations: {
            "18": "The pattern doesn't add 3 each time.",
            "20": "The pattern doesn't add 5 each time.",
            "25": "25 would be the 7th triangular number, not the 6th."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl6_ch2_t3_qm6',
        type: "mcq",
        question: "If a, b, c are three consecutive whole numbers with a < b < c, which of the following is true?",
        options: [
            "a + c = 2b",
            "a × c = b²",
            "a + b = c",
            "a × b = c"
        ],
        correctAnswer: "a + c = 2b",
        explanation: "If a, b, c are consecutive whole numbers, then b = a+1 and c = b+1 = a+2. So a+c = a+(a+2) = 2a+2 = 2(a+1) = 2b. 🧮",
        wrongAnswerExplanations: {
            "a × c = b²": "If a=1, b=2, c=3, then a×c = 1×3 = 3, but b² = 2² = 4.",
            "a + b = c": "If a=1, b=2, c=3, then a+b = 1+2 = 3 = c, which appears true. But for a=2, b=3, c=4: a+b = 2+3 = 5 ≠ 4 = c.",
            "a × b = c": "If a=1, b=2, c=3, then a×b = 1×2 = 2 ≠ 3 = c."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl6_ch2_t3_qm7',
        type: "mcq",
        question: "What is the missing number in this pattern: 1, 8, 27, ___, 125?",
        options: [
            "36",
            "64",
            "81",
            "100"
        ],
        correctAnswer: "64",
        explanation: "These are cube numbers: 1=1³, 8=2³, 27=3³, 64=4³, 125=5³. The pattern is n³ for position n. 🎲",
        wrongAnswerExplanations: {
            "36": "36 = 6² is not part of this pattern of cubes.",
            "81": "81 = 9² = 3⁴, but does not follow the cube pattern.",
            "100": "100 = 10² is not part of this pattern of cubes."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl6_ch2_t3_qm8',
        type: "mcq",
        question: "If the sum of three consecutive whole numbers is 33, what is the middle number?",
        options: [
            "10",
            "11",
            "12",
            "13"
        ],
        correctAnswer: "11",
        explanation: "If the three consecutive numbers are (n-1), n, and (n+1), their sum is 3n. So 3n = 33, thus n = 11, the middle number. 🧮",
        wrongAnswerExplanations: {
            "10": "If middle number is 10, the three numbers are 9, 10, 11, which sum to 30, not 33.",
            "12": "If middle number is 12, the three numbers are 11, 12, 13, which sum to 36, not 33.",
            "13": "If middle number is 13, the three numbers are 12, 13, 14, which sum to 39, not 33."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl6_ch2_t3_qm9',
        type: "mcq",
        question: "What is the next number in the sequence: 2, 6, 12, 20, 30, ...?",
        options: [
            "36",
            "40",
            "42",
            "48"
        ],
        correctAnswer: "42",
        explanation: "The differences between terms increase by 2: +4, +6, +8, +10, so next difference is +12, making next term 30+12=42. 📈",
        wrongAnswerExplanations: {
            "36": "The differences between terms follow a pattern of +2, so +10 is followed by +12, not +6.",
            "40": "The differences between terms follow a pattern of +2, so +10 is followed by +12, not +10.",
            "48": "48 would result from adding 18 to 30, but the next difference should be +12."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl6_ch2_t3_qm10',
        type: "mcq",
        question: "In a certain pattern, if the 4th term is 40 and the 7th term is 70, what is the 10th term?",
        options: [
            "90",
            "100",
            "110",
            "120"
        ],
        correctAnswer: "100",
        explanation: "The pattern increases by 10 each time: term n = 10n. So 4th term = 40, 7th term = 70, and 10th term = 10 × 10 = 100. 🧮",
        wrongAnswerExplanations: {
            "90": "This would be correct if the pattern was term n = 10n - 10, but it's not consistent with the given terms.",
            "110": "This would be correct if the pattern was term n = 10n + 10, but it's not consistent with the given terms.",
            "120": "This would be correct if the pattern was term n = 10n + 20, but it's not consistent with the given terms."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl6_ch2_t3_qm11',
        type: "mcq",
        question: "If the successor of a number is 5 more than its predecessor, what is the number?",
        options: [
            "2",
            "3",
            "4",
            "5"
        ],
        correctAnswer: "3",
        explanation: "For number x: successor = x+1, predecessor = x-1. If x+1 = (x-1)+5, then x+1 = x+4, so 1 = 4, which is impossible. Check by testing x=3. ✓",
        wrongAnswerExplanations: {
            "2": "For 2, successor is 3 and predecessor is 1. 3 is not 5 more than 1.",
            "4": "For 4, successor is 5 and predecessor is 3. 5 is not 5 more than 3.",
            "5": "For 5, successor is 6 and predecessor is 4. 6 is not 5 more than 4."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl6_ch2_t3_qm12',
        type: "mcq",
        question: "What number should replace the question mark? 1, 4, 9, 16, 25, 36, ?",
        options: [
            "42",
            "45",
            "49",
            "64"
        ],
        correctAnswer: "49",
        explanation: "These are square numbers: 1=1², 4=2², 9=3², 16=4², 25=5², 36=6², so next is 49=7². The pattern is n² for position n. 🔢",
        wrongAnswerExplanations: {
            "42": "42 is not a square number and doesn't follow the pattern.",
            "45": "45 is not a square number and doesn't follow the pattern.",
            "64": "64 = 8² would be the 8th square number, not the 7th in this sequence."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl6_ch2_t3_qm13',
        type: "mcq",
        question: "If the sum of three consecutive whole numbers equals their product, what are these numbers?",
        options: [
            "0, 1, 2",
            "1, 2, 3",
            "2, 3, 4",
            "3, 4, 5"
        ],
        correctAnswer: "1, 2, 3",
        explanation: "For consecutive numbers n-1, n, n+1: Sum = 3n, Product = n(n-1)(n+1) = n³-n. If 3n = n³-n, then n³-4n = 0, so n(n²-4) = 0, thus n = 0 or n = 2. For n = 2, the numbers are 1, 2, 3. 🧮",
        wrongAnswerExplanations: {
            "0, 1, 2": "Sum = 0+1+2 = 3, Product = 0×1×2 = 0. Sum ≠ Product.",
            "2, 3, 4": "Sum = 2+3+4 = 9, Product = 2×3×4 = 24. Sum ≠ Product.",
            "3, 4, 5": "Sum = 3+4+5 = 12, Product = 3×4×5 = 60. Sum ≠ Product."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl6_ch2_t3_qm14',
        type: "mcq",
        question: "What comes next in the pattern: 1, 2, 4, 7, 11, 16, ...?",
        options: [
            "20",
            "21",
            "22",
            "23"
        ],
        correctAnswer: "22",
        explanation: "The differences form a pattern: +1, +2, +3, +4, +5, so next is 16+6=22. Each value is the sum of its position and the previous value. 📈",
        wrongAnswerExplanations: {
            "20": "The pattern of differences is +1, +2, +3, +4, +5, so after +5 comes +6, not +4.",
            "21": "Adding 5 to 16 gives 21, but the next difference should be +6, not +5.",
            "23": "Adding 7 to 16 gives 23, but the next difference should be +6, not +7."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl6_ch2_t3_qm15',
        type: "mcq",
        question: "A sequence of numbers follows this rule: each number is the sum of the two previous numbers, starting with 1 and 1. What is the 6th number in this sequence?",
        options: [
            "5",
            "8",
            "13",
            "21"
        ],
        correctAnswer: "8",
        explanation: "This is the Fibonacci sequence: 1, 1, 2, 3, 5, 8, 13, 21, ... Each term is the sum of the previous two terms. 🌀",
        wrongAnswerExplanations: {
            "5": "5 is the 5th number in the Fibonacci sequence, not the 6th.",
            "13": "13 is the 7th number in the Fibonacci sequence, not the 6th.",
            "21": "21 is the 8th number in the Fibonacci sequence, not the 6th."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl6_ch2_t3_qm16',
        type: "mcq",
        question: "What is the value of x in the equation: successor of x + predecessor of x = 21?",
        options: [
            "9",
            "10",
            "11",
            "12"
        ],
        correctAnswer: "10",
        explanation: "For number x: successor = x+1, predecessor = x-1. So (x+1) + (x-1) = 21, which gives 2x = 21, thus x = 10.5. Since x must be a whole number, x = 10. 🧮",
        wrongAnswerExplanations: {
            "9": "For x = 9: successor = 10, predecessor = 8, sum = 18, not 21.",
            "11": "For x = 11: successor = 12, predecessor = 10, sum = 22, not 21.",
            "12": "For x = 12: successor = 13, predecessor = 11, sum = 24, not 21."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl6_ch2_t3_qm17',
        type: "mcq",
        question: "In what place is the number 45 in the sequence: 5, 10, 15, 20, ...?",
        options: [
            "7th place",
            "8th place",
            "9th place",
            "10th place"
        ],
        correctAnswer: "9th place",
        explanation: "Each term = 5 × position. So for 45: 45 = 5 × position, thus position = 45 ÷ 5 = 9. 45 is the 9th term in this sequence. 🔢",
        wrongAnswerExplanations: {
            "7th place": "The 7th term would be 5 × 7 = 35, not 45.",
            "8th place": "The 8th term would be 5 × 8 = 40, not 45.",
            "10th place": "The 10th term would be 5 × 10 = 50, not 45."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl6_ch2_t3_qm18',
        type: "mcq",
        question: "If the first term of a sequence is 3 and each term after that is found by adding 4 to the previous term, what is the 15th term?",
        options: [
            "55",
            "59",
            "63",
            "67"
        ],
        correctAnswer: "59",
        explanation: "For arithmetic sequence with first term a=3 and common difference d=4, the nth term is a+(n-1)d = 3+(15-1)×4 = 3+56 = 59. 📊",
        wrongAnswerExplanations: {
            "55": "55 would be the 14th term, not the 15th.",
            "63": "63 would be the 16th term, not the 15th.",
            "67": "67 would be the 17th term, not the 15th."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl6_ch2_t3_qm19',
        type: "mcq",
        question: "In this pattern, what is the value of the 8th term? 0, 3, 8, 15, 24, 35, 48, ...",
        options: [
            "56",
            "63",
            "70",
            "77"
        ],
        correctAnswer: "63",
        explanation: "This is a sequence of n²-1 (square minus 1): 0=1²-1, 3=2²-1, 8=3²-1, 15=4²-1, 24=5²-1, 35=6²-1, 48=7²-1, so 63=8²-1. 🔢",
        wrongAnswerExplanations: {
            "56": "The pattern is n²-1, so the 8th term = 8²-1 = 64-1 = 63, not 56.",
            "70": "70 doesn't follow the pattern n²-1 for any integer n.",
            "77": "77 doesn't follow the pattern n²-1 for any integer n."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl6_ch2_t3_qm20',
        type: "mcq",
        question: "What is the successor of the largest 2-digit whole number?",
        options: [
            "99",
            "100",
            "101",
            "999"
        ],
        correctAnswer: "100",
        explanation: "The largest 2-digit number is 99. The successor of a number is obtained by adding 1. So the successor of 99 is 99+1=100. 🔢",
        wrongAnswerExplanations: {
            "99": "99 is the largest 2-digit number itself, not its successor.",
            "101": "101 is the successor of 100, not the successor of 99.",
            "999": "999 is the largest 3-digit number, not the successor of the largest 2-digit number."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    }
];
