import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl8_ch16_t2_qe1',
        type: "mcq",
        question: "What comes next in the sequence: 2, 4, 8, 16, ___?",
        options: ["24", "32", "30", "28"],
        correctAnswer: "32",
        explanation: "Each number is multiplied by 2 to get the next number in the sequence (×2 pattern). So, 16 × 2 = 32. 🔢",
        wrongAnswerExplanations: {
            "24": "The pattern is not adding 8 each time.",
            "30": "The pattern is not adding 14 each time.",
            "28": "The pattern is not adding 12 each time."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch16_t2_qe2',
        type: "mcq",
        question: "In the sequence 1, 4, 9, 16, 25, what pattern is being followed?",
        options: ["Adding 3 each time", "Square numbers", "Multiplying by 2", "Adding consecutive odd numbers"],
        correctAnswer: "Square numbers",
        explanation: "These are square numbers: 1 = 1², 4 = 2², 9 = 3², 16 = 4², 25 = 5². Each number is the square of its position in the sequence. 🔲",
        wrongAnswerExplanations: {
            "Adding 3 each time": "The differences between consecutive terms are not constant.",
            "Multiplying by 2": "The numbers are not doubling each time.",
            "Adding consecutive odd numbers": "While this is also true, the primary pattern is square numbers."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch16_t2_qe3',
        type: "mcq",
        question: "What is the next number in the pattern: 1, 1, 2, 3, 5, 8, ___?",
        options: ["11", "13", "15", "21"],
        correctAnswer: "13",
        explanation: "This is the Fibonacci sequence where each number is the sum of the previous two numbers. So, 8 + 5 = 13. 🌀",
        wrongAnswerExplanations: {
            "11": "Adding 3 is not the pattern.",
            "15": "Adding 7 is not the pattern.",
            "21": "Multiplying by any fixed number is not the pattern."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch16_t2_qe4',
        type: "mcq",
        question: "What is the pattern in: 3, 6, 12, 24, 48?",
        options: ["Add 3", "Multiply by 3", "Multiply by 2", "Add previous number"],
        correctAnswer: "Multiply by 2",
        explanation: "Each number is multiplied by 2 to get the next number: 3×2=6, 6×2=12, 12×2=24, 24×2=48. ✖️",
        wrongAnswerExplanations: {
            "Add 3": "Adding 3 would give 3, 6, 9, 12, 15.",
            "Multiply by 3": "Multiplying by 3 would give 3, 9, 27, 81.",
            "Add previous number": "Adding previous would give 3, 3, 6, 9, 15."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch16_t2_qe5',
        type: "mcq",
        question: "Which number is missing: 5, 10, ___, 20, 25?",
        options: ["12", "15", "16", "18"],
        correctAnswer: "15",
        explanation: "The pattern adds 5 each time: 5+5=10, 10+5=15, 15+5=20, 20+5=25. The common difference is 5. ➕",
        wrongAnswerExplanations: {
            "12": "Adding 2 is not the pattern.",
            "16": "Adding 6 is not the pattern.",
            "18": "Adding 8 is not the pattern."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch16_t2_qe6',
        type: "mcq",
        question: "What comes next in the pattern: 1, 3, 6, 10, 15, ___?",
        options: ["18", "21", "20", "25"],
        correctAnswer: "21",
        explanation: "These are triangular numbers. Each number is found by adding the next counting number: 1, 1+2=3, 3+3=6, 6+4=10, 10+5=15, 15+6=21. 📐",
        wrongAnswerExplanations: {
            "18": "Adding a constant number is not the pattern.",
            "20": "Multiplying by a constant is not the pattern.",
            "25": "The pattern is not square numbers."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch16_t2_qe7',
        type: "mcq",
        question: "In the sequence 2, 4, 6, 8, 10, what is the common difference?",
        options: ["1", "2", "3", "4"],
        correctAnswer: "2",
        explanation: "The difference between each consecutive term is 2. This is an arithmetic sequence with common difference 2. 🔢",
        wrongAnswerExplanations: {
            "1": "The difference between terms is not 1.",
            "3": "The difference between terms is not 3.",
            "4": "The difference between terms is not 4."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch16_t2_qe8',
        type: "mcq",
        question: "What is the next number: 1, 4, 7, 10, ___?",
        options: ["12", "13", "14", "15"],
        correctAnswer: "13",
        explanation: "The pattern adds 3 each time: 1+3=4, 4+3=7, 7+3=10, 10+3=13. This is an arithmetic sequence with common difference 3. ➕",
        wrongAnswerExplanations: {
            "12": "Adding 2 is not the pattern.",
            "14": "Adding 4 is not the pattern.",
            "15": "Adding 5 is not the pattern."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch16_t2_qe9',
        type: "mcq",
        question: "What pattern is followed in: 1, 8, 27, 64?",
        options: ["Cube numbers", "Square numbers", "Adding 7", "Multiplying by 8"],
        correctAnswer: "Cube numbers",
        explanation: "These are cube numbers: 1=1³, 8=2³, 27=3³, 64=4³. Each number is the cube of its position in the sequence. 🧊",
        wrongAnswerExplanations: {
            "Square numbers": "Square numbers would be 1, 4, 9, 16.",
            "Adding 7": "The differences are not constant.",
            "Multiplying by 8": "The numbers are not being multiplied by 8."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch16_t2_qe10',
        type: "mcq",
        question: "What comes next: 2, 6, 18, 54, ___?",
        options: ["108", "162", "72", "90"],
        correctAnswer: "162",
        explanation: "Each number is multiplied by 3 to get the next number: 2×3=6, 6×3=18, 18×3=54, 54×3=162. This is a geometric sequence with common ratio 3. ✖️",
        wrongAnswerExplanations: {
            "108": "Multiplying by 2 is not the pattern.",
            "72": "Adding 18 is not the pattern.",
            "90": "Adding 36 is not the pattern."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch16_t2_qe11',
        type: "mcq",
        question: "Which number doesn't belong in the pattern: 3, 6, 9, 11, 12, 15?",
        options: ["6", "9", "11", "15"],
        correctAnswer: "11",
        explanation: "The pattern adds 3 each time. 11 breaks this pattern as it should be 12 (9+3=12). The sequence should be 3, 6, 9, 12, 15. 🔍",
        wrongAnswerExplanations: {
            "6": "6 follows the pattern (3+3=6).",
            "9": "9 follows the pattern (6+3=9).",
            "15": "15 follows the pattern (12+3=15)."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch16_t2_qe12',
        type: "mcq",
        question: "What is the pattern in: 1, 3, 5, 7, 9?",
        options: ["Even numbers", "Odd numbers", "Prime numbers", "Multiples of 3"],
        correctAnswer: "Odd numbers",
        explanation: "These are consecutive odd numbers, starting from 1 and adding 2 each time. Each number leaves remainder 1 when divided by 2. 🔢",
        wrongAnswerExplanations: {
            "Even numbers": "Even numbers are divisible by 2 (2, 4, 6, 8).",
            "Prime numbers": "Not all these numbers are prime (9 is not prime).",
            "Multiples of 3": "Only 3, 6, 9 are multiples of 3."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch16_t2_qe13',
        type: "mcq",
        question: "What comes next: 100, 50, 25, ___?",
        options: ["0", "12.5", "15", "20"],
        correctAnswer: "12.5",
        explanation: "Each number is divided by 2 to get the next number: 100÷2=50, 50÷2=25, 25÷2=12.5. This is a geometric sequence with common ratio 1/2. ➗",
        wrongAnswerExplanations: {
            "0": "Subtracting a constant is not the pattern.",
            "15": "Subtracting 10 is not the pattern.",
            "20": "Subtracting 5 is not the pattern."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch16_t2_qe14',
        type: "mcq",
        question: "Which number is missing: 2, ___, 8, 16, 32?",
        options: ["3", "4", "6", "10"],
        correctAnswer: "4",
        explanation: "Each number is multiplied by 2 to get the next number: 2×2=4, 4×2=8, 8×2=16, 16×2=32. This is a geometric sequence with common ratio 2. ✖️",
        wrongAnswerExplanations: {
            "3": "Adding 1 is not the pattern.",
            "6": "Adding 4 is not the pattern.",
            "10": "Adding 8 is not the pattern."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch16_t2_qe15',
        type: "mcq",
        question: "What is the next term in: 5, 10, 20, 40, ___?",
        options: ["60", "80", "45", "50"],
        correctAnswer: "80",
        explanation: "Each number is multiplied by 2 to get the next number: 5×2=10, 10×2=20, 20×2=40, 40×2=80. This is a geometric sequence with common ratio 2. 🔢",
        wrongAnswerExplanations: {
            "60": "Adding 20 is not the pattern.",
            "45": "Adding 5 is not the pattern.",
            "50": "Adding 10 is not the pattern."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch16_t2_qe16',
        type: "mcq",
        question: "What pattern is followed in: 1, 4, 9, 16, 25, 36?",
        options: ["Adding 3", "Multiplying by 2", "Square numbers", "Cube numbers"],
        correctAnswer: "Square numbers",
        explanation: "These are square numbers: 1=1², 4=2², 9=3², 16=4², 25=5², 36=6². Each number is the square of its position. 🔲",
        wrongAnswerExplanations: {
            "Adding 3": "The differences between terms are not constant.",
            "Multiplying by 2": "The numbers are not doubling.",
            "Cube numbers": "Cube numbers would be 1, 8, 27, 64."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch16_t2_qe17',
        type: "mcq",
        question: "What comes next in: 2, 5, 8, 11, ___?",
        options: ["13", "14", "15", "16"],
        correctAnswer: "14",
        explanation: "The pattern adds 3 each time: 2+3=5, 5+3=8, 8+3=11, 11+3=14. This is an arithmetic sequence with common difference 3. ➕",
        wrongAnswerExplanations: {
            "13": "Adding 2 is not the pattern.",
            "15": "Adding 4 is not the pattern.",
            "16": "Adding 5 is not the pattern."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch16_t2_qe18',
        type: "mcq",
        question: "Which number doesn't follow the pattern: 3, 9, 27, 54, 81?",
        options: ["9", "27", "54", "81"],
        correctAnswer: "54",
        explanation: "Each number should be multiplied by 3 to get the next number. 54 breaks the pattern as 27×3=81. The sequence should be 3, 9, 27, 81. 🔍",
        wrongAnswerExplanations: {
            "9": "9 follows the pattern (3×3=9).",
            "27": "27 follows the pattern (9×3=27).",
            "81": "81 follows the pattern (27×3=81)."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch16_t2_qe19',
        type: "mcq",
        question: "What is the next number in: 1, 3, 6, 10, 15, 21, ___?",
        options: ["25", "26", "28", "30"],
        correctAnswer: "28",
        explanation: "These are triangular numbers. Add the next counting number each time: 21+7=28. The differences increase by 1 each time: +2, +3, +4, +5, +6, +7. 📐",
        wrongAnswerExplanations: {
            "25": "Adding a constant number is not the pattern.",
            "26": "The pattern is not arithmetic.",
            "30": "Adding 9 is not the pattern."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch16_t2_qe20',
        type: "mcq",
        question: "What comes next in: 1, 2, 4, 7, 11, ___?",
        options: ["13", "15", "16", "18"],
        correctAnswer: "16",
        explanation: "The differences increase by 1 each time: +1, +2, +3, +4, +5. So 11+5=16. This forms a pattern where each number is the sum of its position and the previous term. 🔢",
        wrongAnswerExplanations: {
            "13": "Adding 2 is not the pattern.",
            "15": "Adding 4 is not the pattern.",
            "18": "Adding 7 is not the pattern."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    }
]; 