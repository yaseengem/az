// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 6\Chapter2\Topic3\quiz_easy.ts
import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl6_ch2_t3_qe1',
        type: "mcq",
        question: "What is the successor of 49?",
        options: ["48", "49", "50", "51"],
        correctAnswer: "50",
        explanation: "The successor of a number is obtained by adding 1 to it. So the successor of 49 is 49 + 1 = 50. 🔢",
        wrongAnswerExplanations: {
            "48": "48 is the predecessor of 49, not the successor.",
            "49": "A number cannot be its own successor.",
            "51": "51 is two more than 49, not the immediate successor."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch2_t3_qe2',
        type: "mcq",
        question: "What is the predecessor of 100?",
        options: ["99", "101", "1000", "10"],
        correctAnswer: "99",
        explanation: "The predecessor of a number is obtained by subtracting 1 from it. So the predecessor of 100 is 100 - 1 = 99. 🔢",
        wrongAnswerExplanations: {
            "101": "101 is the successor of 100, not the predecessor.",
            "1000": "1000 is not related to the predecessor of 100.",
            "10": "10 is not the predecessor of 100."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch2_t3_qe3',
        type: "mcq",
        question: "What is the smallest whole number?",
        options: ["0", "1", "-1", "10"],
        correctAnswer: "0",
        explanation: "The smallest whole number is 0. Whole numbers start from 0 and include all natural numbers. ⭕",
        wrongAnswerExplanations: {
            "1": "1 is the smallest natural number, not the smallest whole number.",
            "-1": "-1 is a negative integer, not a whole number.",
            "10": "10 is much larger than the smallest whole number."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch2_t3_qe4',
        type: "mcq",
        question: "Which whole number has no predecessor in the set of whole numbers?",
        options: ["0", "1", "10", "100"],
        correctAnswer: "0",
        explanation: "0 is the smallest whole number and has no predecessor in the set of whole numbers. ⭕",
        wrongAnswerExplanations: {
            "1": "The predecessor of 1 is 0, which is a whole number.",
            "10": "The predecessor of 10 is 9, which is a whole number.",
            "100": "The predecessor of 100 is 99, which is a whole number."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch2_t3_qe5',
        type: "mcq",
        question: "What is the successor of 999?",
        options: ["998", "9999", "1000", "990"],
        correctAnswer: "1000",
        explanation: "The successor of 999 is 999 + 1 = 1000. Adding 1 to any number gives its successor. 🔢",
        wrongAnswerExplanations: {
            "998": "998 is the predecessor of 999, not the successor.",
            "9999": "9999 is much larger than the successor of 999.",
            "990": "990 is less than 999, so it cannot be its successor."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch2_t3_qe6',
        type: "mcq",
        question: "Which of the following is the predecessor of 1001?",
        options: ["1000", "1002", "900", "1100"],
        correctAnswer: "1000",
        explanation: "The predecessor of 1001 is 1001 - 1 = 1000. Subtracting 1 from any number gives its predecessor. 🔢",
        wrongAnswerExplanations: {
            "1002": "1002 is the successor of 1001, not the predecessor.",
            "900": "900 is much less than the predecessor of 1001.",
            "1100": "1100 is greater than 1001, so it cannot be its predecessor."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch2_t3_qe7',
        type: "mcq",
        question: "What is the difference between a number and its successor?",
        options: ["1", "2", "0", "10"],
        correctAnswer: "1",
        explanation: "The difference between any number and its successor is always 1, since successor = number + 1. ➕",
        wrongAnswerExplanations: {
            "2": "The difference between a number and its successor is always 1, not 2.",
            "0": "If the difference was 0, the number would be the same as its successor.",
            "10": "The difference between a number and its successor is always 1, not 10."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch2_t3_qe8',
        type: "mcq",
        question: "What comes next in the pattern: 5, 10, 15, 20, ___?",
        options: ["21", "25", "30", "22"],
        correctAnswer: "25",
        explanation: "The pattern adds 5 each time: 5+5=10, 10+5=15, 15+5=20, so 20+5=25. This is an arithmetic pattern. 🧮",
        wrongAnswerExplanations: {
            "21": "The pattern adds 5 each time, not 1.",
            "30": "30 would be the next number after 25 in this pattern.",
            "22": "The pattern adds 5 each time, not 2."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch2_t3_qe9',
        type: "mcq",
        question: "If the predecessor of a number is 17, what is the number?",
        options: ["16", "17", "18", "19"],
        correctAnswer: "18",
        explanation: "If the predecessor is 17, the number is 17 + 1 = 18. The predecessor is always 1 less than the number. 🔢",
        wrongAnswerExplanations: {
            "16": "16 is the predecessor of 17, not the number itself.",
            "17": "17 cannot be both the number and its predecessor.",
            "19": "19 is the successor of 18, not the number itself."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch2_t3_qe10',
        type: "mcq",
        question: "If the successor of a number is 26, what is the number?",
        options: ["25", "26", "27", "24"],
        correctAnswer: "25",
        explanation: "If the successor is 26, the number is 26 - 1 = 25. The successor is always 1 more than the number. 🔢",
        wrongAnswerExplanations: {
            "26": "26 cannot be both the number and its successor.",
            "27": "If the number was 27, its successor would be 28, not 26.",
            "24": "If the number was 24, its successor would be 25, not 26."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch2_t3_qe11',
        type: "mcq",
        question: "What comes next in the pattern: 2, 4, 8, 16, ___?",
        options: ["18", "20", "24", "32"],
        correctAnswer: "32",
        explanation: "Each number is multiplied by 2 to get the next number: 2×2=4, 4×2=8, 8×2=16, 16×2=32. This is a geometric pattern. 📈",
        wrongAnswerExplanations: {
            "18": "The pattern is not adding 2 each time.",
            "20": "The pattern is not adding 4 each time.",
            "24": "The pattern is not adding 8 each time."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch2_t3_qe12',
        type: "mcq",
        question: "What is the predecessor of the successor of 45?",
        options: ["44", "45", "46", "47"],
        correctAnswer: "45",
        explanation: "The successor of 45 is 46. The predecessor of 46 is 45. So the predecessor of the successor of 45 is 45 itself. 🔄",
        wrongAnswerExplanations: {
            "44": "44 is the predecessor of 45, not the predecessor of its successor.",
            "46": "46 is the successor of 45, not the predecessor of the successor.",
            "47": "47 is the successor of 46, not the predecessor of the successor of 45."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch2_t3_qe13',
        type: "mcq",
        question: "What is the successor of the predecessor of 78?",
        options: ["77", "78", "79", "76"],
        correctAnswer: "78",
        explanation: "The predecessor of 78 is 77. The successor of 77 is 78. So the successor of the predecessor of 78 is 78 itself. 🔄",
        wrongAnswerExplanations: {
            "77": "77 is the predecessor of 78, not the successor of the predecessor.",
            "79": "79 is the successor of 78, not the successor of the predecessor of 78.",
            "76": "76 is the predecessor of 77, not the successor of the predecessor of 78."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch2_t3_qe14',
        type: "mcq",
        question: "What comes next in the pattern: 1, 4, 9, 16, 25, ___?",
        options: ["30", "36", "49", "64"],
        correctAnswer: "36",
        explanation: "These are square numbers: 1=1², 4=2², 9=3², 16=4², 25=5², so next is 36=6². The pattern is n² for each position n. 🔲",
        wrongAnswerExplanations: {
            "30": "30 is not the next square number after 25.",
            "49": "49 = 7² would be the square number after 36, not immediately after 25.",
            "64": "64 = 8² would come after 49, so it's not the next number in this pattern."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch2_t3_qe15',
        type: "mcq",
        question: "What comes next in the pattern: 3, 6, 9, 12, ___?",
        options: ["13", "15", "16", "18"],
        correctAnswer: "15",
        explanation: "The pattern adds 3 each time: 3+3=6, 6+3=9, 9+3=12, so 12+3=15. These are multiples of 3. ➕",
        wrongAnswerExplanations: {
            "13": "The pattern adds 3 each time, not 1.",
            "16": "The pattern adds 3 each time, not 4.",
            "18": "18 would be the next number after 15 in this pattern, not immediately after 12."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch2_t3_qe16',
        type: "mcq",
        question: "Which of these is not a whole number?",
        options: ["0", "1", "10", "-1"],
        correctAnswer: "-1",
        explanation: "Whole numbers start from 0 and include all positive integers. -1 is a negative integer, not a whole number. 🔢",
        wrongAnswerExplanations: {
            "0": "0 is the smallest whole number.",
            "1": "1 is a whole number.",
            "10": "10 is a whole number."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch2_t3_qe17',
        type: "mcq",
        question: "Find the missing number in the pattern: 2, 4, 6, ___, 10",
        options: ["7", "8", "9", "12"],
        correctAnswer: "8",
        explanation: "The pattern adds 2 each time: 2+2=4, 4+2=6, so 6+2=8, then 8+2=10. These are even numbers. ➕",
        wrongAnswerExplanations: {
            "7": "Adding 2 to 6 gives 8, not 7.",
            "9": "Adding 2 to 6 gives 8, not 9.",
            "12": "12 would come after 10 in this pattern, not between 6 and 10."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch2_t3_qe18',
        type: "mcq",
        question: "What is the next number in the sequence: 100, 90, 80, 70, ___?",
        options: ["65", "60", "55", "50"],
        correctAnswer: "60",
        explanation: "The pattern subtracts 10 each time: 100-10=90, 90-10=80, 80-10=70, so 70-10=60. This is a decreasing pattern. ➖",
        wrongAnswerExplanations: {
            "65": "The pattern subtracts 10 each time, not 5.",
            "55": "The pattern subtracts 10 each time, not 15.",
            "50": "50 would be the number after 60 in this pattern, not immediately after 70."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch2_t3_qe19',
        type: "mcq",
        question: "What is the missing number in this pattern: ___, 2, 5, 10, 17?",
        options: ["0", "1", "-1", "4"],
        correctAnswer: "1",
        explanation: "The differences increase by 2: 1→2 (diff=1), 2→5 (diff=3), 5→10 (diff=5), 10→17 (diff=7). So the first number is 1. 🧩",
        wrongAnswerExplanations: {
            "0": "If the first number was 0, the pattern of increasing differences wouldn't work.",
            "-1": "If the first number was -1, the pattern of increasing differences wouldn't work.",
            "4": "If the first number was 4, the pattern of increasing differences wouldn't work."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch2_t3_qe20',
        type: "mcq",
        question: "What is the next shape in this pattern: △, □, ○, △, □, ___?",
        options: ["△", "□", "○", "☆"],
        correctAnswer: "○",
        explanation: "The pattern repeats: triangle, square, circle, triangle, square, circle. So the next shape is circle (○). 🔄",
        wrongAnswerExplanations: {
            "△": "The pattern is triangle, square, circle, so after square comes circle, not triangle.",
            "□": "The pattern is triangle, square, circle, so after square comes circle, not another square.",
            "☆": "The star is not part of the pattern triangle, square, circle."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    }
];
