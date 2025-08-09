import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl8_ch15_t2_qm1',
        type: "mcq",
        question: "In the sequence 3, 7, 13, 21, 31, what is the pattern in the differences between consecutive terms?",
        options: [
            "Each difference increases by 1",
            "Each difference increases by 2",
            "Each difference is a prime number",
            "Each difference is doubled"
        ],
        correctAnswer: "Each difference increases by 2",
        explanation: "The differences are 4, 6, 8, 10, showing an increase of 2 each time. This forms an arithmetic sequence of differences. 📊",
        wrongAnswerExplanations: {
            "Each difference increases by 1": "The differences increase by 2, not 1: 4, 6, 8, 10.",
            "Each difference is a prime number": "The differences 4, 6, 8, 10 are not all prime numbers.",
            "Each difference is doubled": "The differences don't double; they increase by 2 each time."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl8_ch15_t2_qm2',
        type: "mcq",
        question: "What is the relationship between consecutive terms in the sequence: 2, 6, 12, 20, 30, 42?",
        options: [
            "Add the position number",
            "Add the previous term",
            "Add consecutive even numbers",
            "Add consecutive multiples of 2"
        ],
        correctAnswer: "Add consecutive even numbers",
        explanation: "Each term is obtained by adding consecutive even numbers: +4, +6, +8, +10, +12. The pattern follows even numbers in sequence. 🔢",
        wrongAnswerExplanations: {
            "Add the position number": "Adding position numbers would give a different sequence.",
            "Add the previous term": "This would create a different pattern with much larger numbers.",
            "Add consecutive multiples of 2": "While related, this doesn't precisely describe the pattern of differences."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl8_ch15_t2_qm3',
        type: "mcq",
        question: "In the pattern 1, 3, 7, 15, 31, __, what operation connects each consecutive term?",
        options: [
            "Multiply by 2 and add 1",
            "Add previous two terms",
            "Multiply by 3 and subtract 2",
            "Double and subtract 1"
        ],
        correctAnswer: "Multiply by 2 and add 1",
        explanation: "Each term is obtained by multiplying the previous term by 2 and adding 1: 1×2+1=3, 3×2+1=7, 7×2+1=15, 15×2+1=31. 🎯",
        wrongAnswerExplanations: {
            "Add previous two terms": "This would give different numbers than the sequence shown.",
            "Multiply by 3 and subtract 2": "This would produce much larger numbers.",
            "Double and subtract 1": "This would give smaller numbers than the sequence shown."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch15_t2_qm4',
        type: "mcq",
        question: "What is the next pair in the pattern: (1,1), (2,4), (3,9), (4,16), __?",
        options: [
            "(5,25)",
            "(5,20)",
            "(6,25)",
            "(5,24)"
        ],
        correctAnswer: "(5,25)",
        explanation: "Each pair follows (n, n²) where n is the position. The next pair has n=5, so it's (5, 5²=25). This forms ordered pairs of numbers and their squares. 📈",
        wrongAnswerExplanations: {
            "(5,20)": "This doesn't follow the square pattern as 5² ≠ 20.",
            "(6,25)": "This skips position 5 and uses incorrect square.",
            "(5,24)": "This doesn't follow the square pattern as 5² ≠ 24."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch15_t2_qm5',
        type: "mcq",
        question: "What number should replace the question mark: 2, 6, 12, ?, 30, 42 if the pattern involves triangular numbers?",
        options: [
            "18",
            "20",
            "22",
            "24"
        ],
        correctAnswer: "20",
        explanation: "The sequence adds triangular numbers: +4 (T2), +6 (T3), +8 (T4), +10 (T5), +12 (T6). So 12 + 8 = 20. 🔺",
        wrongAnswerExplanations: {
            "18": "This doesn't follow the pattern of adding triangular numbers.",
            "22": "This makes the increase too large.",
            "24": "This breaks the pattern of triangular number differences."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl8_ch15_t2_qm6',
        type: "mcq",
        question: "What comes next in the pattern: 1/2, 2/3, 3/5, 5/8, 8/13, __?",
        options: [
            "13/21",
            "13/20",
            "14/21",
            "12/20"
        ],
        correctAnswer: "13/21",
        explanation: "Both numerator and denominator follow the Fibonacci sequence. The next Fibonacci number after 13 is 21, so the next fraction is 13/21. 🌀",
        wrongAnswerExplanations: {
            "13/20": "The denominator should follow Fibonacci sequence (next is 21, not 20).",
            "14/21": "The numerator should be 13, following the Fibonacci pattern.",
            "12/20": "Neither number follows the Fibonacci sequence pattern."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl8_ch15_t2_qm7',
        type: "mcq",
        question: "In the sequence 3, 8, 15, 24, 35, what is the relationship between each term and its position number?",
        options: [
            "Position number squared plus 2",
            "Position number squared minus 1",
            "Position number squared plus position number",
            "Double the position number squared"
        ],
        correctAnswer: "Position number squared plus position number",
        explanation: "Each term is n² + n where n is the position: 1² + 1 = 2, 2² + 2 = 6, 3² + 3 = 12, etc. This combines squares with linear terms. 🎯",
        wrongAnswerExplanations: {
            "Position number squared plus 2": "This would give different numbers: 3, 6, 11, 18, 27.",
            "Position number squared minus 1": "This would give smaller numbers than the sequence.",
            "Double the position number squared": "This would give larger numbers: 2, 8, 18, 32, 50."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl8_ch15_t2_qm8',
        type: "mcq",
        question: "What is the next term in: 1, 4, 10, 20, 35, __?",
        options: [
            "56",
            "52",
            "54",
            "50"
        ],
        correctAnswer: "56",
        explanation: "Each term adds the next triangular number: +3 (T2), +6 (T3), +10 (T4), +15 (T5), +21 (T6). So 35 + 21 = 56. 🔺",
        wrongAnswerExplanations: {
            "52": "This doesn't follow the pattern of adding triangular numbers.",
            "54": "This increase is not the next triangular number.",
            "50": "This is too small for the pattern of triangular number increases."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch15_t2_qm9',
        type: "mcq",
        question: "What number completes the pattern: 1, 8, 27, 64, 125, __, 343 if it involves perfect cubes?",
        options: [
            "216",
            "256",
            "196",
            "225"
        ],
        correctAnswer: "216",
        explanation: "These are perfect cubes: 1³, 2³, 3³, 4³, 5³, 6³, 7³. The missing number is 6³ = 216. 🎲",
        wrongAnswerExplanations: {
            "256": "This is 16², not 6³.",
            "196": "This is 14², not 6³.",
            "225": "This is 15², not 6³."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch15_t2_qm10',
        type: "mcq",
        question: "What is the pattern in: 2, 6, 14, 30, 62, __?",
        options: [
            "Multiply by 2 and add 2",
            "Multiply by 2 and add 4",
            "Multiply by 2 and subtract 2",
            "Multiply by 2 and add 1"
        ],
        correctAnswer: "Multiply by 2 and add 2",
        explanation: "Each term is obtained by multiplying the previous term by 2 and adding 2: 2×2+2=6, 6×2+2=14, 14×2+2=30, 30×2+2=62. 📊",
        wrongAnswerExplanations: {
            "Multiply by 2 and add 4": "This would give larger numbers than the sequence.",
            "Multiply by 2 and subtract 2": "This would give smaller numbers than the sequence.",
            "Multiply by 2 and add 1": "This would give different numbers than the sequence."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch15_t2_qm11',
        type: "mcq",
        question: "What comes next in the pattern: 1, 2, 6, 24, 120, __?",
        options: [
            "620",
            "720",
            "600",
            "520"
        ],
        correctAnswer: "720",
        explanation: "Each term is multiplied by the next counting number: 1×2=2, 2×3=6, 6×4=24, 24×5=120, 120×6=720. This forms the factorial sequence. 🔢",
        wrongAnswerExplanations: {
            "620": "This doesn't follow the factorial pattern.",
            "600": "This is too small for the factorial pattern.",
            "520": "This breaks the factorial sequence pattern."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl8_ch15_t2_qm12',
        type: "mcq",
        question: "In the sequence 3, 6, 18, 72, 360, what operation connects each consecutive term?",
        options: [
            "Multiply by 2",
            "Multiply by 3",
            "Multiply by previous term",
            "Multiply by position number"
        ],
        correctAnswer: "Multiply by position number",
        explanation: "Each term is multiplied by its position: 3×2=6, 6×3=18, 18×4=72, 72×5=360. The multiplier increases by 1 each time. 📈",
        wrongAnswerExplanations: {
            "Multiply by 2": "This would give smaller numbers than the sequence.",
            "Multiply by 3": "This would give different numbers than the sequence.",
            "Multiply by previous term": "This would give much larger numbers."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl8_ch15_t2_qm13',
        type: "mcq",
        question: "What is the next pair in: (1,2), (2,6), (3,12), (4,20), __?",
        options: [
            "(5,30)",
            "(5,25)",
            "(6,30)",
            "(5,28)"
        ],
        correctAnswer: "(5,30)",
        explanation: "In each pair (n,x), x = n × (n+1). For n=5: 5×(5+1) = 5×6 = 30. This combines position number with its successor. 🎯",
        wrongAnswerExplanations: {
            "(5,25)": "This uses n² instead of n(n+1).",
            "(6,30)": "This skips position 5.",
            "(5,28)": "This doesn't follow the n(n+1) pattern."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl8_ch15_t2_qm14',
        type: "mcq",
        question: "What number completes: 1, 4, 9, 16, 25, __, 49 if the pattern involves perfect squares and triangular numbers?",
        options: [
            "36",
            "32",
            "40",
            "42"
        ],
        correctAnswer: "36",
        explanation: "These are perfect squares: 1², 2², 3², 4², 5², 6², 7². The missing number is 6² = 36. Each number is also the sum of consecutive numbers. 🔺",
        wrongAnswerExplanations: {
            "32": "This is not a perfect square.",
            "40": "This is not a perfect square.",
            "42": "This is not a perfect square."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch15_t2_qm15',
        type: "mcq",
        question: "What comes next in: 2, 5, 11, 23, 47, __?",
        options: [
            "95",
            "94",
            "93",
            "96"
        ],
        correctAnswer: "95",
        explanation: "Each term is multiplied by 2 and increased by 1: 2×2+1=5, 5×2+1=11, 11×2+1=23, 23×2+1=47, 47×2+1=95. 🔢",
        wrongAnswerExplanations: {
            "94": "This doesn't follow the multiply by 2 and add 1 pattern.",
            "93": "This is too small for the pattern.",
            "96": "This doesn't maintain the pattern of ×2+1."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch15_t2_qm16',
        type: "mcq",
        question: "What is the missing term in: 1, 3, 8, 19, __, 83 if each term has a special relationship with previous terms?",
        options: [
            "42",
            "44",
            "40",
            "46"
        ],
        correctAnswer: "42",
        explanation: "Each term is double the previous term plus the term before that: 3×2+1=7, 8×2+3=19, 19×2+4=42, 42×2+8=83. 📊",
        wrongAnswerExplanations: {
            "44": "This doesn't follow the pattern of doubling previous and adding term before.",
            "40": "This is too small for the pattern.",
            "46": "This is too large for the pattern."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl8_ch15_t2_qm17',
        type: "mcq",
        question: "In the sequence 4, 16, 36, 64, 100, what is the relationship between each term and its position?",
        options: [
            "Position number squared times 2",
            "Position number squared times 4",
            "Position number to the power of 3",
            "Position number times 4"
        ],
        correctAnswer: "Position number squared times 4",
        explanation: "Each term is 4n² where n is the position: 4(1²)=4, 4(2²)=16, 4(3²)=36, 4(4²)=64, 4(5²)=100. 🎯",
        wrongAnswerExplanations: {
            "Position number squared times 2": "This would give smaller numbers than the sequence.",
            "Position number to the power of 3": "This would give different numbers than the sequence.",
            "Position number times 4": "This would give much smaller numbers."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl8_ch15_t2_qm18',
        type: "mcq",
        question: "What number completes the pattern: 1, 8, 27, 64, __, 216 if it follows a cubic relationship?",
        options: [
            "125",
            "128",
            "120",
            "130"
        ],
        correctAnswer: "125",
        explanation: "These are perfect cubes: 1³, 2³, 3³, 4³, 5³, 6³. The missing number is 5³ = 125. Each number is a counting number cubed. 🎲",
        wrongAnswerExplanations: {
            "128": "This is 2⁷, not 5³.",
            "120": "This is not a perfect cube.",
            "130": "This is not a perfect cube."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch15_t2_qm19',
        type: "mcq",
        question: "What comes next in: 3, 8, 15, 24, 35, 48, __?",
        options: [
            "63",
            "60",
            "65",
            "58"
        ],
        correctAnswer: "63",
        explanation: "Each term is n² + 2n where n is the position: 1² + 2(1) = 3, 2² + 2(2) = 8, ..., 7² + 2(7) = 63. 📈",
        wrongAnswerExplanations: {
            "60": "This doesn't follow the n² + 2n pattern.",
            "65": "This is too large for the pattern.",
            "58": "This is too small for the pattern."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl8_ch15_t2_qm20',
        type: "mcq",
        question: "What is the next term in: 2, 7, 16, 29, 46, __?",
        options: [
            "67",
            "65",
            "69",
            "63"
        ],
        correctAnswer: "67",
        explanation: "The differences increase by 4: +5, +9, +13, +17, +21. Adding 21 to 46 gives 67. The pattern shows differences increasing by a constant amount. 🔢",
        wrongAnswerExplanations: {
            "65": "This doesn't follow the pattern of differences increasing by 4.",
            "69": "This increase is too large for the pattern.",
            "63": "This is too small for the pattern."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    }
]; 