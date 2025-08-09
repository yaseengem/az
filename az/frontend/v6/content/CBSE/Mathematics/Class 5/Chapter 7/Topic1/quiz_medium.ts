import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl5_ch7_t1_qm1',
        type: "mcq",
        question: "What is the next number in this pattern? 1, 4, 9, 16, ___",
        options: ["20", "24", "25", "30"],
        correctAnswer: "25",
        explanation: "The pattern shows square numbers. 1²=1, 2²=4, 3²=9, 4²=16, so next is 5²=25. 🔢",
        wrongAnswerExplanations: {
            "20": "This would be adding 4, but the pattern is square numbers.",
            "24": "This would be adding 8, but the pattern is square numbers.",
            "30": "This would be adding 14, but the pattern is square numbers."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch7_t1_qm2',
        type: "mcq",
        question: "What is the next number in this pattern? 2, 4, 8, 16, ___",
        options: ["24", "28", "32", "36"],
        correctAnswer: "32",
        explanation: "The pattern doubles each number. 16 × 2 = 32. 🔢",
        wrongAnswerExplanations: {
            "24": "This would be adding 8, but the pattern doubles each number.",
            "28": "This would be adding 12, but the pattern doubles each number.",
            "36": "This would be adding 20, but the pattern doubles each number."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch7_t1_qm3',
        type: "mcq",
        question: "What is the next number in this pattern? 1, 3, 6, 10, ___",
        options: ["13", "15", "16", "18"],
        correctAnswer: "15",
        explanation: "The pattern adds increasing numbers: +2, +3, +4, so next is +5. 10 + 5 = 15. 🔢",
        wrongAnswerExplanations: {
            "13": "This would be adding 3, but the pattern increases by 1 each time.",
            "16": "This would be adding 6, but the pattern increases by 1 each time.",
            "18": "This would be adding 8, but the pattern increases by 1 each time."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch7_t1_qm4',
        type: "mcq",
        question: "What is the next number in this pattern? 1, 2, 4, 7, ___",
        options: ["10", "11", "12", "13"],
        correctAnswer: "11",
        explanation: "The pattern adds increasing numbers: +1, +2, +3, so next is +4. 7 + 4 = 11. 🔢",
        wrongAnswerExplanations: {
            "10": "This would be adding 3, but the pattern increases by 1 each time.",
            "12": "This would be adding 5, but the pattern increases by 1 each time.",
            "13": "This would be adding 6, but the pattern increases by 1 each time."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch7_t1_qm5',
        type: "mcq",
        question: "What is the next number in this pattern? 3, 6, 12, 24, ___",
        options: ["36", "42", "48", "54"],
        correctAnswer: "48",
        explanation: "The pattern doubles each number. 24 × 2 = 48. 🔢",
        wrongAnswerExplanations: {
            "36": "This would be adding 12, but the pattern doubles each number.",
            "42": "This would be adding 18, but the pattern doubles each number.",
            "54": "This would be adding 30, but the pattern doubles each number."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch7_t1_qm6',
        type: "mcq",
        question: "What is the next number in this pattern? 5, 10, 20, 40, ___",
        options: ["60", "70", "80", "90"],
        correctAnswer: "80",
        explanation: "The pattern doubles each number. 40 × 2 = 80. 🔢",
        wrongAnswerExplanations: {
            "60": "This would be adding 20, but the pattern doubles each number.",
            "70": "This would be adding 30, but the pattern doubles each number.",
            "90": "This would be adding 50, but the pattern doubles each number."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch7_t1_qm7',
        type: "mcq",
        question: "What is the next number in this pattern? 2, 5, 10, 17, ___",
        options: ["24", "26", "28", "30"],
        correctAnswer: "26",
        explanation: "The pattern adds increasing odd numbers: +3, +5, +7, so next is +9. 17 + 9 = 26. 🔢",
        wrongAnswerExplanations: {
            "24": "This would be adding 7, but the pattern increases by 2 each time.",
            "28": "This would be adding 11, but the pattern increases by 2 each time.",
            "30": "This would be adding 13, but the pattern increases by 2 each time."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch7_t1_qm8',
        type: "mcq",
        question: "What is the next number in this pattern? 1, 4, 9, 16, 25, ___",
        options: ["30", "35", "36", "40"],
        correctAnswer: "36",
        explanation: "The pattern shows square numbers. 1²=1, 2²=4, 3²=9, 4²=16, 5²=25, so next is 6²=36. 🔢",
        wrongAnswerExplanations: {
            "30": "This would be adding 5, but the pattern is square numbers.",
            "35": "This would be adding 10, but the pattern is square numbers.",
            "40": "This would be adding 15, but the pattern is square numbers."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch7_t1_qm9',
        type: "mcq",
        question: "What is the next number in this pattern? 1, 8, 27, 64, ___",
        options: ["100", "120", "125", "150"],
        correctAnswer: "125",
        explanation: "The pattern shows cube numbers. 1³=1, 2³=8, 3³=27, 4³=64, so next is 5³=125. 🔢",
        wrongAnswerExplanations: {
            "100": "This would be adding 36, but the pattern is cube numbers.",
            "120": "This would be adding 56, but the pattern is cube numbers.",
            "150": "This would be adding 86, but the pattern is cube numbers."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch7_t1_qm10',
        type: "mcq",
        question: "What is the next number in this pattern? 1, 1, 2, 3, 5, ___",
        options: ["6", "7", "8", "9"],
        correctAnswer: "8",
        explanation: "This is the Fibonacci sequence where each number is the sum of the two before it. 3 + 5 = 8. 🔢",
        wrongAnswerExplanations: {
            "6": "This would be adding 1, but the pattern adds the two previous numbers.",
            "7": "This would be adding 2, but the pattern adds the two previous numbers.",
            "9": "This would be adding 4, but the pattern adds the two previous numbers."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch7_t1_qm11',
        type: "mcq",
        question: "What is the next number in this pattern? 2, 3, 5, 8, 12, ___",
        options: ["16", "17", "18", "19"],
        correctAnswer: "17",
        explanation: "The pattern adds increasing numbers: +1, +2, +3, +4, so next is +5. 12 + 5 = 17. 🔢",
        wrongAnswerExplanations: {
            "16": "This would be adding 4, but the pattern increases by 1 each time.",
            "18": "This would be adding 6, but the pattern increases by 1 each time.",
            "19": "This would be adding 7, but the pattern increases by 1 each time."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch7_t1_qm12',
        type: "mcq",
        question: "What is the next number in this pattern? 1, 2, 4, 8, 16, ___",
        options: ["24", "28", "32", "36"],
        correctAnswer: "32",
        explanation: "The pattern doubles each number. 16 × 2 = 32. 🔢",
        wrongAnswerExplanations: {
            "24": "This would be adding 8, but the pattern doubles each number.",
            "28": "This would be adding 12, but the pattern doubles each number.",
            "36": "This would be adding 20, but the pattern doubles each number."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch7_t1_qm13',
        type: "mcq",
        question: "What is the next number in this pattern? 3, 9, 27, 81, ___",
        options: ["162", "243", "324", "405"],
        correctAnswer: "243",
        explanation: "The pattern triples each number. 81 × 3 = 243. 🔢",
        wrongAnswerExplanations: {
            "162": "This would be doubling, but the pattern triples each number.",
            "324": "This would be quadrupling, but the pattern triples each number.",
            "405": "This would be multiplying by 5, but the pattern triples each number."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch7_t1_qm14',
        type: "mcq",
        question: "What is the next number in this pattern? 1, 3, 7, 15, ___",
        options: ["23", "28", "31", "35"],
        correctAnswer: "31",
        explanation: "The pattern doubles and adds 1: (1×2)+1=3, (3×2)+1=7, (7×2)+1=15, so next is (15×2)+1=31. 🔢",
        wrongAnswerExplanations: {
            "23": "This would be adding 8, but the pattern doubles and adds 1.",
            "28": "This would be adding 13, but the pattern doubles and adds 1.",
            "35": "This would be adding 20, but the pattern doubles and adds 1."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch7_t1_qm15',
        type: "mcq",
        question: "What is the next number in this pattern? 2, 6, 18, 54, ___",
        options: ["108", "162", "216", "270"],
        correctAnswer: "162",
        explanation: "The pattern triples each number. 54 × 3 = 162. 🔢",
        wrongAnswerExplanations: {
            "108": "This would be doubling, but the pattern triples each number.",
            "216": "This would be quadrupling, but the pattern triples each number.",
            "270": "This would be multiplying by 5, but the pattern triples each number."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch7_t1_qm16',
        type: "mcq",
        question: "What is the next number in this pattern? 1, 4, 7, 10, ___",
        options: ["12", "13", "14", "15"],
        correctAnswer: "13",
        explanation: "The pattern adds 3 each time. 10 + 3 = 13. 🔢",
        wrongAnswerExplanations: {
            "12": "This would be adding 2, but the pattern adds 3 each time.",
            "14": "This would be adding 4, but the pattern adds 3 each time.",
            "15": "This would be adding 5, but the pattern adds 3 each time."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch7_t1_qm17',
        type: "mcq",
        question: "What is the next number in this pattern? 5, 10, 20, 40, ___",
        options: ["60", "70", "80", "90"],
        correctAnswer: "80",
        explanation: "The pattern doubles each number. 40 × 2 = 80. 🔢",
        wrongAnswerExplanations: {
            "60": "This would be adding 20, but the pattern doubles each number.",
            "70": "This would be adding 30, but the pattern doubles each number.",
            "90": "This would be adding 50, but the pattern doubles each number."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch7_t1_qm18',
        type: "mcq",
        question: "What is the next number in this pattern? 1, 5, 13, 29, ___",
        options: ["45", "53", "61", "69"],
        correctAnswer: "61",
        explanation: "The pattern doubles and adds 3: (1×2)+3=5, (5×2)+3=13, (13×2)+3=29, so next is (29×2)+3=61. 🔢",
        wrongAnswerExplanations: {
            "45": "This would be adding 16, but the pattern doubles and adds 3.",
            "53": "This would be adding 24, but the pattern doubles and adds 3.",
            "69": "This would be adding 40, but the pattern doubles and adds 3."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch7_t1_qm19',
        type: "mcq",
        question: "What is the next number in this pattern? 2, 4, 8, 16, 32, ___",
        options: ["48", "56", "64", "72"],
        correctAnswer: "64",
        explanation: "The pattern doubles each number. 32 × 2 = 64. 🔢",
        wrongAnswerExplanations: {
            "48": "This would be adding 16, but the pattern doubles each number.",
            "56": "This would be adding 24, but the pattern doubles each number.",
            "72": "This would be adding 40, but the pattern doubles each number."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch7_t1_qm20',
        type: "mcq",
        question: "What is the next number in this pattern? 1, 2, 4, 7, 11, ___",
        options: ["14", "15", "16", "17"],
        correctAnswer: "16",
        explanation: "The pattern adds increasing numbers: +1, +2, +3, +4, so next is +5. 11 + 5 = 16. 🔢",
        wrongAnswerExplanations: {
            "14": "This would be adding 3, but the pattern increases by 1 each time.",
            "15": "This would be adding 4, but the pattern increases by 1 each time.",
            "17": "This would be adding 6, but the pattern increases by 1 each time."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    }
]; 