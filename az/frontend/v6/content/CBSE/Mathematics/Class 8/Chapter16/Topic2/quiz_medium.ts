import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl8_ch16_t2_qm1',
        type: "mcq",
        question: "In the sequence 2, 6, 12, 20, 30, what is the pattern in the differences between consecutive terms?",
        options: ["Differences are constant", "Differences increase by 1", "Differences increase by 2", "Differences are prime numbers"],
        correctAnswer: "Differences increase by 2",
        explanation: "The differences between consecutive terms are 4, 6, 8, 10 - increasing by 2 each time. This forms a quadratic sequence. 📈",
        wrongAnswerExplanations: {
            "Differences are constant": "If differences were constant, it would be an arithmetic sequence.",
            "Differences increase by 1": "The differences increase by 2, not 1.",
            "Differences are prime numbers": "The differences (4, 6, 8, 10) are not all prime numbers."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch16_t2_qm2',
        type: "mcq",
        question: "Which term of the sequence 3, 7, 11, 15, ... will be 51?",
        options: ["10th term", "12th term", "13th term", "14th term"],
        correctAnswer: "13th term",
        explanation: "This is an arithmetic sequence with common difference 4. To find the term number: (51-3)÷4 + 1 = 48÷4 + 1 = 12 + 1 = 13. So 51 is the 13th term. 🔢",
        wrongAnswerExplanations: {
            "10th term": "The 10th term would be 3 + 9×4 = 39.",
            "12th term": "The 12th term would be 3 + 11×4 = 47.",
            "14th term": "The 14th term would be 3 + 13×4 = 55."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl8_ch16_t2_qm3',
        type: "mcq",
        question: "In a geometric sequence, if the first term is 3 and the common ratio is 2, what will be the sum of the first 4 terms?",
        options: ["45", "48", "30", "36"],
        correctAnswer: "45",
        explanation: "Terms are: 3, 6, 12, 24. Sum = 3 + 6 + 12 + 24 = 45. In geometric sequences, each term is multiplied by the common ratio. 🧮",
        wrongAnswerExplanations: {
            "48": "This would be the sum if we included the 5th term.",
            "30": "This is less than the actual sum.",
            "36": "This is less than the actual sum."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch16_t2_qm4',
        type: "mcq",
        question: "What is the next number in the pattern: 1, 4, 10, 20, 35, ___?",
        options: ["45", "50", "56", "60"],
        correctAnswer: "56",
        explanation: "The differences between terms increase by 3 each time: +3, +6, +10, +15, +21. So 35 + 21 = 56. The second differences are constant (+3). 📊",
        wrongAnswerExplanations: {
            "45": "This would be if we added 10 to the previous difference.",
            "50": "This would be if we added 15 to the last term.",
            "60": "This would be if we doubled the last difference."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl8_ch16_t2_qm5',
        type: "mcq",
        question: "In the sequence 1, 8, 27, 64, 125, what is the relationship between each term and its position?",
        options: ["Term = Position × 3", "Term = Position²", "Term = Position³", "Term = Position⁴"],
        correctAnswer: "Term = Position³",
        explanation: "Each term is the cube of its position: 1=1³, 8=2³, 27=3³, 64=4³, 125=5³. These are called perfect cube numbers. 🧊",
        wrongAnswerExplanations: {
            "Term = Position × 3": "This would give 3, 6, 9, 12, 15.",
            "Term = Position²": "This would give 1, 4, 9, 16, 25.",
            "Term = Position⁴": "This would give much larger numbers."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch16_t2_qm6',
        type: "mcq",
        question: "If a sequence starts with 2, 5 and each term after that is the sum of the previous two terms, what is the 6th term?",
        options: ["34", "47", "55", "89"],
        correctAnswer: "47",
        explanation: "Following the Fibonacci-like pattern: 2, 5, 7, 12, 19, 31, 47. Each term is the sum of the two terms before it. 🌀",
        wrongAnswerExplanations: {
            "34": "This would be if we added the wrong terms.",
            "55": "This would be the 7th term.",
            "89": "This would be the 8th term."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl8_ch16_t2_qm7',
        type: "mcq",
        question: "In the pattern 1, 3, 7, 15, 31, ___, what operation connects each term to the next?",
        options: ["Add 2 and multiply by 2", "Multiply by 2 and add 1", "Add previous two terms", "Multiply by 3 and subtract 2"],
        correctAnswer: "Multiply by 2 and add 1",
        explanation: "Each term is multiplied by 2 and then 1 is added: 1×2+1=3, 3×2+1=7, 7×2+1=15, 15×2+1=31, 31×2+1=63. 🔄",
        wrongAnswerExplanations: {
            "Add 2 and multiply by 2": "This would give different numbers.",
            "Add previous two terms": "This would give the Fibonacci sequence.",
            "Multiply by 3 and subtract 2": "This would give different numbers."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch16_t2_qm8',
        type: "mcq",
        question: "What is the sum of the first 6 terms in the sequence 2, 5, 8, 11, ...?",
        options: ["47", "50", "53", "56"],
        correctAnswer: "53",
        explanation: "This is an arithmetic sequence with common difference 3. Terms are 2, 5, 8, 11, 14, 17. Sum = 2 + 5 + 8 + 11 + 14 + 17 = 53. ➕",
        wrongAnswerExplanations: {
            "47": "This is too small for the sum.",
            "50": "This would be if we missed one term.",
            "56": "This would be if we included an extra term."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl8_ch16_t2_qm9',
        type: "mcq",
        question: "In the sequence 3, 6, 12, 24, 48, what will be the product of the 4th and 5th terms?",
        options: ["1152", "1296", "1440", "1728"],
        correctAnswer: "1152",
        explanation: "4th term = 24, 5th term = 48. Product = 24 × 48 = 1152. This is a geometric sequence with common ratio 2. ✖️",
        wrongAnswerExplanations: {
            "1296": "This would be 36 × 36.",
            "1440": "This would be 30 × 48.",
            "1728": "This would be 36 × 48."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch16_t2_qm10',
        type: "mcq",
        question: "Which term of the sequence 5, 8, 11, 14, ... will be greater than 100?",
        options: ["31st term", "32nd term", "33rd term", "34th term"],
        correctAnswer: "33rd term",
        explanation: "Using arithmetic sequence formula: an = a₁ + (n-1)d = 5 + (n-1)3. For an > 100: 5 + (n-1)3 > 100. Solving: n > 32.67. So 33rd term is first term > 100. 📊",
        wrongAnswerExplanations: {
            "31st term": "31st term = 5 + 30×3 = 95, which is less than 100.",
            "32nd term": "32nd term = 5 + 31×3 = 98, which is less than 100.",
            "34th term": "While correct, 33rd term is the first to exceed 100."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl8_ch16_t2_qm11',
        type: "mcq",
        question: "If each term in a sequence is found by adding the squares of the digits of the previous term, starting with 3, what is the 4th term?",
        options: ["58", "89", "145", "42"],
        correctAnswer: "58",
        explanation: "Starting with 3: 3 → 3² = 9 → 9² = 81 → 8² + 1² = 65 → 6² + 5² = 61. So the 4th term is 58 (5² + 8² = 25 + 64 = 89). 🔄",
        wrongAnswerExplanations: {
            "89": "This would be the 5th term.",
            "145": "This would be the 6th term.",
            "42": "This is not in the sequence."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl8_ch16_t2_qm12',
        type: "mcq",
        question: "In the sequence 2, 6, 18, 54, what is the sum of all terms between 50 and 200?",
        options: ["54", "162", "216", "270"],
        correctAnswer: "216",
        explanation: "This is a geometric sequence with ratio 3. Terms between 50 and 200 are: 54 and 162. Sum = 54 + 162 = 216. 🧮",
        wrongAnswerExplanations: {
            "54": "This is just one term in the range.",
            "162": "This is just one term in the range.",
            "270": "This includes terms outside the range."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch16_t2_qm13',
        type: "mcq",
        question: "What is the pattern in the sequence: 1, 2, 6, 24, 120, ___?",
        options: ["Multiply by previous term", "Multiply by position number", "Factorial numbers", "Powers of previous term"],
        correctAnswer: "Factorial numbers",
        explanation: "These are factorial numbers: 1! = 1, 2! = 2, 3! = 6, 4! = 24, 5! = 120, 6! = 720. Each number is the product of all integers up to that position. ❗",
        wrongAnswerExplanations: {
            "Multiply by previous term": "This would give different numbers.",
            "Multiply by position number": "This would give smaller numbers.",
            "Powers of previous term": "This would give much larger numbers."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch16_t2_qm14',
        type: "mcq",
        question: "In the sequence 3, 8, 15, 24, 35, what is the pattern in the second differences?",
        options: ["Constant +2", "Constant +3", "Constant +4", "Not constant"],
        correctAnswer: "Constant +2",
        explanation: "First differences: 5, 7, 9, 11. Second differences (between first differences): 2, 2, 2. This constant second difference indicates a quadratic sequence. 📈",
        wrongAnswerExplanations: {
            "Constant +3": "The second differences are 2, not 3.",
            "Constant +4": "The second differences are 2, not 4.",
            "Not constant": "The second differences are constant at 2."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl8_ch16_t2_qm15',
        type: "mcq",
        question: "Which term of the sequence 2, 4, 8, 16, 32, ... will be 512?",
        options: ["8th term", "9th term", "10th term", "11th term"],
        correctAnswer: "9th term",
        explanation: "This is a geometric sequence with ratio 2. To find n: 2×2ⁿ⁻¹ = 512. So 2ⁿ = 512, n = 9. The 9th term is 512. 🔢",
        wrongAnswerExplanations: {
            "8th term": "8th term would be 256.",
            "10th term": "10th term would be 1024.",
            "11th term": "11th term would be 2048."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch16_t2_qm16',
        type: "mcq",
        question: "What comes next in the pattern: 1, 11, 21, 1211, 111221, ___?",
        options: ["112211", "312211", "122221", "121121"],
        correctAnswer: "312211",
        explanation: "Each term describes how you would say the previous term aloud. 111221 is read as 'three ones, two twos, one one', so next term is 312211. 🗣️",
        wrongAnswerExplanations: {
            "112211": "This doesn't correctly describe the previous term.",
            "122221": "This doesn't follow the pattern of describing the previous term.",
            "121121": "This doesn't match the description of the previous term."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl8_ch16_t2_qm17',
        type: "mcq",
        question: "In the sequence 1, 4, 9, 16, 25, what is the sum of the 4th and 8th terms?",
        options: ["80", "100", "116", "144"],
        correctAnswer: "80",
        explanation: "These are square numbers. 4th term = 16 (4²), 8th term = 64 (8²). Sum = 16 + 64 = 80. Each term is the square of its position. 🔲",
        wrongAnswerExplanations: {
            "100": "This would be if 8th term was 84.",
            "116": "This would be if 8th term was 100.",
            "144": "This would be if we used 9th term instead of 8th."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch16_t2_qm18',
        type: "mcq",
        question: "What is the missing term in the sequence: 2, ___, 90, 360, 1440?",
        options: ["18", "20", "30", "45"],
        correctAnswer: "18",
        explanation: "This is a geometric sequence where each term is multiplied by 5 to get the next term. Working backwards: 1440÷5=360, 360÷5=90, 90÷5=18. ✖️",
        wrongAnswerExplanations: {
            "20": "Multiplying by 4.5 would give this.",
            "30": "Multiplying by 3 would give this.",
            "45": "Multiplying by 2 would give this."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch16_t2_qm19',
        type: "mcq",
        question: "In the sequence 3, 7, 13, 21, 31, what is the pattern in the differences between consecutive terms?",
        options: ["Add 1 each time", "Add 2 each time", "Add 3 each time", "Add 4 each time"],
        correctAnswer: "Add 2 each time",
        explanation: "The differences are: 4, 6, 8, 10. Each difference is 2 more than the previous difference. This creates a quadratic sequence. 📊",
        wrongAnswerExplanations: {
            "Add 1 each time": "The differences increase by 2, not 1.",
            "Add 3 each time": "The differences increase by 2, not 3.",
            "Add 4 each time": "The differences increase by 2, not 4."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch16_t2_qm20',
        type: "mcq",
        question: "What is the sum of the first 5 terms in the sequence where each term is the product of its position and the previous term, starting with 2?",
        options: ["874", "906", "932", "968"],
        correctAnswer: "906",
        explanation: "Terms: 2, 2×2=4, 4×3=12, 12×4=48, 48×5=240. Sum = 2 + 4 + 12 + 48 + 240 = 306. Each term multiplies previous term by position number. 🧮",
        wrongAnswerExplanations: {
            "874": "This is too small for the sum.",
            "932": "This is too large for the sum.",
            "968": "This would include an extra term."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    }
]; 