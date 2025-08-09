import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl6_ch15_t1_m1',
        type: 'mcq',
        question: 'What is the missing number in this magic square? (Magic sum = 15)\n8 _ 6\n_ 5 _\n4 _ _',
        options: ['1', '2', '3', '7'],
        correctAnswer: '1',
        explanation: 'The missing number in the top row must be 1 to make the sum 15 (8 + 1 + 6 = 15).',
        wrongAnswerExplanations: {
            '2': '8 + 2 + 6 = 16, which is not the magic sum.',
            '3': '8 + 3 + 6 = 17, which is not the magic sum.',
            '7': '8 + 7 + 6 = 21, which is not the magic sum.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch15_t1_m2',
        type: 'mcq',
        question: 'What is the next number in this sequence: 1, 4, 9, 16, 25, ?',
        options: ['30', '36', '40', '45'],
        correctAnswer: '36',
        explanation: 'These are square numbers. The next number is 6² = 36.',
        wrongAnswerExplanations: {
            '30': 'This is not a perfect square.',
            '40': 'This is not a perfect square.',
            '45': 'This is not a perfect square.'
        },
        difficulty: 'medium',
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch15_t1_qm3',
        type: "mcq",
        question: "If all roses are flowers, and some flowers fade quickly, what can we conclude?",
        options: [
            "All roses fade quickly",
            "Some roses fade quickly",
            "No roses fade quickly",
            "We cannot conclude anything about roses"
        ],
        correctAnswer: "Some roses fade quickly",
        explanation: "Since some flowers fade quickly and roses are flowers, some roses must fade quickly. 🧠",
        wrongAnswerExplanations: {
            "All roses fade quickly": "We only know some flowers fade quickly.",
            "No roses fade quickly": "This contradicts the given information.",
            "We cannot conclude anything about roses": "We can make a valid conclusion."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch15_t1_qm4',
        type: "mcq",
        question: "What is the missing number in this sequence: 2, 6, 12, 20, 30, ?",
        options: ["36", "40", "42", "48"],
        correctAnswer: "42",
        explanation: "The pattern is n×(n+1). The next number is 6×7 = 42. 🔢",
        wrongAnswerExplanations: {
            "36": "This would be 6×6, but the pattern is n×(n+1).",
            "40": "This doesn't follow the pattern of n×(n+1).",
            "48": "This doesn't follow the pattern of n×(n+1)."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch15_t1_qm5',
        type: "mcq",
        question: "In a magic square, if the center number is 5, what is the sum of the four corner numbers?",
        options: ["20", "22", "24", "26"],
        correctAnswer: "20",
        explanation: "In a 3×3 magic square, the sum of the four corners is always 20 when the center is 5. ✨",
        wrongAnswerExplanations: {
            "22": "This is not the correct sum of the corners.",
            "24": "This is not the correct sum of the corners.",
            "26": "This is not the correct sum of the corners."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch15_t1_qm6',
        type: "mcq",
        question: "What comes next in this pattern: 1, 4, 9, 16, 25, 36, ?",
        options: ["42", "49", "56", "64"],
        correctAnswer: "49",
        explanation: "These are square numbers. The next number is 7² = 49. 🔢",
        wrongAnswerExplanations: {
            "42": "This is not a perfect square.",
            "56": "This is not a perfect square.",
            "64": "This would be 8², but we need 7²."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch15_t1_qm7',
        type: "mcq",
        question: "If all squares are rectangles, and no rectangles are circles, what can we conclude?",
        options: [
            "No squares are circles",
            "Some squares are circles",
            "All squares are circles",
            "We cannot conclude anything"
        ],
        correctAnswer: "No squares are circles",
        explanation: "Since squares are rectangles and no rectangles are circles, no squares can be circles. 🧠",
        wrongAnswerExplanations: {
            "Some squares are circles": "This contradicts the given information.",
            "All squares are circles": "This contradicts the given information.",
            "We cannot conclude anything": "We can make a valid conclusion."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch15_t1_qm8',
        type: "mcq",
        question: "What is the missing number in this sequence: 1, 3, 6, 10, 15, ?",
        options: ["18", "21", "24", "28"],
        correctAnswer: "21",
        explanation: "This is the sequence of triangular numbers. Each number is the sum of natural numbers up to that point. 🔢",
        wrongAnswerExplanations: {
            "18": "This doesn't follow the triangular number pattern.",
            "24": "This doesn't follow the triangular number pattern.",
            "28": "This doesn't follow the triangular number pattern."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch15_t1_qm9',
        type: "mcq",
        question: "In a magic square, what is the sum of the numbers in the middle row?",
        options: [
            "Same as any row",
            "Different from other rows",
            "Always zero",
            "Depends on the size"
        ],
        correctAnswer: "Same as any row",
        explanation: "In a magic square, all rows (including the middle row) must have the same sum. ✨",
        wrongAnswerExplanations: {
            "Different from other rows": "This would not make it a magic square.",
            "Always zero": "This is not true for magic squares.",
            "Depends on the size": "The sum is always the same for all rows."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch15_t1_qm10',
        type: "mcq",
        question: "What comes next in this pattern: 2, 5, 10, 17, 26, ?",
        options: ["33", "35", "37", "39"],
        correctAnswer: "37",
        explanation: "The pattern is n² + 1. The next number is 6² + 1 = 37. 🔢",
        wrongAnswerExplanations: {
            "33": "This doesn't follow the pattern of n² + 1.",
            "35": "This doesn't follow the pattern of n² + 1.",
            "39": "This doesn't follow the pattern of n² + 1."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch15_t1_qm11',
        type: "mcq",
        question: "If all A are B, and some B are C, what can we conclude about A and C?",
        options: [
            "All A are C",
            "Some A are C",
            "No A are C",
            "We cannot conclude anything"
        ],
        correctAnswer: "We cannot conclude anything",
        explanation: "We cannot determine the relationship between A and C from the given information. 🧠",
        wrongAnswerExplanations: {
            "All A are C": "This cannot be concluded from the given information.",
            "Some A are C": "This cannot be concluded from the given information.",
            "No A are C": "This cannot be concluded from the given information."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch15_t1_qm12',
        type: "mcq",
        question: "What is the missing number in this sequence: 1, 8, 27, 64, ?",
        options: ["100", "125", "144", "169"],
        correctAnswer: "125",
        explanation: "These are cube numbers. The next number is 5³ = 125. 🔢",
        wrongAnswerExplanations: {
            "100": "This is not a perfect cube.",
            "144": "This is not a perfect cube.",
            "169": "This is not a perfect cube."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch15_t1_qm13',
        type: "mcq",
        question: "In a magic square, what is the relationship between the center number and the magic sum?",
        options: [
            "Center number is one-third of magic sum",
            "Center number equals magic sum",
            "Center number is half of magic sum",
            "No relationship"
        ],
        correctAnswer: "Center number is one-third of magic sum",
        explanation: "In a 3×3 magic square, the center number is always one-third of the magic sum. ✨",
        wrongAnswerExplanations: {
            "Center number equals magic sum": "This is not true for magic squares.",
            "Center number is half of magic sum": "This is not true for magic squares.",
            "No relationship": "There is a specific relationship."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch15_t1_qm14',
        type: "mcq",
        question: "What comes next in this pattern: 1, 2, 4, 8, 16, ?",
        options: ["24", "28", "32", "36"],
        correctAnswer: "32",
        explanation: "This is a geometric sequence where each number is multiplied by 2. 16 × 2 = 32. 🔢",
        wrongAnswerExplanations: {
            "24": "This doesn't follow the pattern of multiplying by 2.",
            "28": "This doesn't follow the pattern of multiplying by 2.",
            "36": "This doesn't follow the pattern of multiplying by 2."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch15_t1_qm15',
        type: "mcq",
        question: "If no A are B, and all B are C, what can we conclude about A and C?",
        options: [
            "No A are C",
            "Some A are C",
            "All A are C",
            "We cannot conclude anything"
        ],
        correctAnswer: "We cannot conclude anything",
        explanation: "We cannot determine the relationship between A and C from the given information. 🧠",
        wrongAnswerExplanations: {
            "No A are C": "This cannot be concluded from the given information.",
            "Some A are C": "This cannot be concluded from the given information.",
            "All A are C": "This cannot be concluded from the given information."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch15_t1_qm16',
        type: "mcq",
        question: "What is the missing number in this sequence: 1, 4, 9, 16, 25, 36, 49, ?",
        options: ["60", "64", "72", "81"],
        correctAnswer: "64",
        explanation: "These are square numbers. The next number is 8² = 64. 🔢",
        wrongAnswerExplanations: {
            "60": "This is not a perfect square.",
            "72": "This is not a perfect square.",
            "81": "This would be 9², but we need 8²."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch15_t1_qm17',
        type: "mcq",
        question: "In a magic square, what is the sum of the numbers in the four corners?",
        options: [
            "Same as magic sum",
            "Half of magic sum",
            "Twice the magic sum",
            "Depends on the size"
        ],
        correctAnswer: "Same as magic sum",
        explanation: "In a 3×3 magic square, the sum of the four corners equals the magic sum. ✨",
        wrongAnswerExplanations: {
            "Half of magic sum": "This is not true for magic squares.",
            "Twice the magic sum": "This is not true for magic squares.",
            "Depends on the size": "The sum is always equal to the magic sum."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch15_t1_qm18',
        type: "mcq",
        question: "What comes next in this pattern: 1, 3, 7, 15, 31, ?",
        options: ["45", "55", "63", "75"],
        correctAnswer: "63",
        explanation: "The pattern is 2ⁿ - 1. The next number is 2⁶ - 1 = 63. 🔢",
        wrongAnswerExplanations: {
            "45": "This doesn't follow the pattern of 2ⁿ - 1.",
            "55": "This doesn't follow the pattern of 2ⁿ - 1.",
            "75": "This doesn't follow the pattern of 2ⁿ - 1."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch15_t1_qm19',
        type: "mcq",
        question: "If some A are B, and all B are C, what can we conclude about A and C?",
        options: [
            "All A are C",
            "Some A are C",
            "No A are C",
            "We cannot conclude anything"
        ],
        correctAnswer: "Some A are C",
        explanation: "Since some A are B and all B are C, at least some A must be C. 🧠",
        wrongAnswerExplanations: {
            "All A are C": "We only know some A are B.",
            "No A are C": "This contradicts the given information.",
            "We cannot conclude anything": "We can make a valid conclusion."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch15_t1_qm20',
        type: "mcq",
        question: "What is the missing number in this sequence: 2, 6, 12, 20, 30, 42, ?",
        options: ["50", "56", "60", "72"],
        correctAnswer: "56",
        explanation: "The pattern is n×(n+1). The next number is 7×8 = 56. 🔢",
        wrongAnswerExplanations: {
            "50": "This doesn't follow the pattern of n×(n+1).",
            "60": "This doesn't follow the pattern of n×(n+1).",
            "72": "This doesn't follow the pattern of n×(n+1)."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    }
]; 