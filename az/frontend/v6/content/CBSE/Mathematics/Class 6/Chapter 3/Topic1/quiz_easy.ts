// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 6\Chapter3\Topic1\quiz_easy.ts
import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl6_ch3_t1_qe1',
        type: "mcq",
        question: "Which of the following is a factor of 24?",
        options: ["5", "7", "8", "9"],
        correctAnswer: "8",
        explanation: "8 is a factor of 24 because 24 ÷ 8 = 3 (no remainder). 24 = 8 × 3. 🧮",
        wrongAnswerExplanations: {
            "5": "24 is not divisible by 5. When divided, 24 ÷ 5 = 4.8, leaving a remainder.",
            "7": "24 is not divisible by 7. When divided, 24 ÷ 7 ≈ 3.43, leaving a remainder.",
            "9": "24 is not divisible by 9. When divided, 24 ÷ 9 = 2.67, leaving a remainder."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch3_t1_qe2',
        type: "mcq",
        question: "What is the LCM of 6 and 8?",
        options: ["12", "24", "48", "2"],
        correctAnswer: "24",
        explanation: "LCM of 6 (= 2 × 3) and 8 (= 2³) is 24 (= 2³ × 3). The common multiples are 24, 48, 72... 🧩",
        wrongAnswerExplanations: {
            "12": "12 is not divisible by 8, so it cannot be the LCM of 6 and 8.",
            "48": "48 is a common multiple of 6 and 8, but not the least common multiple.",
            "2": "2 is a factor of both 6 and 8, not their LCM."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch3_t1_qe3',
        type: "mcq",
        question: "Which of the following is a multiple of 7?",
        options: ["16", "21", "25", "32"],
        correctAnswer: "21",
        explanation: "21 = 7 × 3, so 21 is a multiple of 7. Multiples of 7 are: 7, 14, 21, 28... 📊",
        wrongAnswerExplanations: {
            "16": "16 = 2⁴, which is not divisible by 7.",
            "25": "25 = 5², which is not divisible by 7.",
            "32": "32 = 2⁵, which is not divisible by 7."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch3_t1_qe4',
        type: "mcq",
        question: "What is the HCF of 12 and 18?",
        options: ["2", "3", "6", "9"],
        correctAnswer: "6",
        explanation: "12 = 2² × 3 and 18 = 2 × 3². The common factors are 1, 2, 3, and 6. The highest is 6. ⭐",
        wrongAnswerExplanations: {
            "2": "2 is a common factor, but not the highest common factor.",
            "3": "3 is a common factor, but not the highest common factor.",
            "9": "9 is not a factor of 12, so it cannot be the HCF."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch3_t1_qe5',
        type: "mcq",
        question: "How many factors does the number 16 have?",
        options: ["3", "4", "5", "6"],
        correctAnswer: "5",
        explanation: "The factors of 16 are 1, 2, 4, 8, and 16. That's a total of 5 factors. 🔢",
        wrongAnswerExplanations: {
            "3": "16 has more than 3 factors.",
            "4": "16 has more than 4 factors.",
            "6": "16 has fewer than 6 factors."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch3_t1_qe6',
        type: "mcq",
        question: "Which of the following numbers is divisible by both 2 and 3?",
        options: ["15", "22", "12", "25"],
        correctAnswer: "12",
        explanation: "12 is divisible by 2 (12 ÷ 2 = 6) and by 3 (12 ÷ 3 = 4). 12 = 2² × 3. ✅",
        wrongAnswerExplanations: {
            "15": "15 is divisible by 3 (15 ÷ 3 = 5) but not by 2 (15 ÷ 2 = 7.5).",
            "22": "22 is divisible by 2 (22 ÷ 2 = 11) but not by 3 (22 ÷ 3 ≈ 7.33).",
            "25": "25 is not divisible by either 2 or 3."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch3_t1_qe7',
        type: "mcq",
        question: "What are the factors of 10?",
        options: ["1, 2, 5, 10", "1, 5, 10", "1, 2, 10", "2, 5, 10"],
        correctAnswer: "1, 2, 5, 10",
        explanation: "The factors of 10 are the numbers that divide it exactly: 1, 2, 5, and 10. 10 = 2 × 5. 🧩",
        wrongAnswerExplanations: {
            "1, 5, 10": "This is missing 2, which is a factor of 10.",
            "1, 2, 10": "This is missing 5, which is a factor of 10.",
            "2, 5, 10": "This is missing 1, which is a factor of every number."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch3_t1_qe8',
        type: "mcq",
        question: "Which of these is a multiple of 5?",
        options: ["51", "32", "65", "78"],
        correctAnswer: "65",
        explanation: "65 = 5 × 13, so it's a multiple of 5. Multiples of 5 end in 0 or 5. 📈",
        wrongAnswerExplanations: {
            "51": "51 = 3 × 17, which is not divisible by 5.",
            "32": "32 = 2⁵, which is not divisible by 5.",
            "78": "78 = 2 × 3 × 13, which is not divisible by 5."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch3_t1_qe9',
        type: "mcq",
        question: "The LCM of 4 and 6 is:",
        options: ["10", "12", "24", "2"],
        correctAnswer: "12",
        explanation: "LCM of 4 (= 2²) and 6 (= 2 × 3) is 12 (= 2² × 3). The common multiples are 12, 24, 36... 🎯",
        wrongAnswerExplanations: {
            "10": "10 is not divisible by 4 or 6.",
            "24": "24 is a common multiple, but not the least common multiple.",
            "2": "2 is a factor of both numbers, not their LCM."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch3_t1_qe10',
        type: "mcq",
        question: "What is the HCF of 20 and 25?",
        options: ["5", "10", "15", "20"],
        correctAnswer: "5",
        explanation: "20 = 2² × 5 and 25 = 5². The only common factor (apart from 1) is 5. ⚖️",
        wrongAnswerExplanations: {
            "10": "10 is not a factor of 25.",
            "15": "15 is not a factor of either 20 or 25.",
            "20": "20 is not a factor of 25."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch3_t1_qe11',
        type: "mcq",
        question: "Which of the following is NOT a factor of 36?",
        options: ["2", "3", "5", "9"],
        correctAnswer: "5",
        explanation: "36 = 2² × 3² = 4 × 9. Its factors are 1, 2, 3, 4, 6, 9, 12, 18, 36. 5 is not a factor. 🚫",
        wrongAnswerExplanations: {
            "2": "2 is a factor of 36 (36 ÷ 2 = 18).",
            "3": "3 is a factor of 36 (36 ÷ 3 = 12).",
            "9": "9 is a factor of 36 (36 ÷ 9 = 4)."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch3_t1_qe12',
        type: "mcq",
        question: "What is the LCM of 9 and 12?",
        options: ["3", "36", "108", "144"],
        correctAnswer: "36",
        explanation: "LCM of 9 (= 3²) and 12 (= 2² × 3) is 36 (= 2² × 3²). Common multiples: 36, 72, 108... 🎲",
        wrongAnswerExplanations: {
            "3": "3 is a common factor, not the LCM.",
            "108": "108 is a common multiple but not the least common multiple.",
            "144": "144 is a common multiple but not the least common multiple."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch3_t1_qe13',
        type: "mcq",
        question: "Which of these numbers is a multiple of both 2 and 3?",
        options: ["14", "15", "18", "25"],
        correctAnswer: "18",
        explanation: "18 = 2 × 9 = 2 × 3² = 2 × 3 × 3, so it's divisible by both 2 and 3. ✓",
        wrongAnswerExplanations: {
            "14": "14 = 2 × 7, which is divisible by 2 but not by 3.",
            "15": "15 = 3 × 5, which is divisible by 3 but not by 2.",
            "25": "25 = 5², which is not divisible by either 2 or 3."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch3_t1_qe14',
        type: "mcq",
        question: "What is the HCF of 15 and 25?",
        options: ["1", "5", "10", "15"],
        correctAnswer: "5",
        explanation: "15 = 3 × 5 and 25 = 5². The common factors are 1 and 5. The highest is 5. 🔍",
        wrongAnswerExplanations: {
            "1": "While 1 is a common factor, it's not the highest common factor.",
            "10": "10 is not a factor of 15 or 25.",
            "15": "15 is not a factor of 25."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch3_t1_qe15',
        type: "mcq",
        question: "How many multiples of 4 are there between 10 and 30?",
        options: ["3", "4", "5", "6"],
        correctAnswer: "5",
        explanation: "Multiples of 4 between 10 and 30 are: 12, 16, 20, 24, 28. That's 5 multiples. 🧮",
        wrongAnswerExplanations: {
            "3": "There are more than 3 multiples of 4 in this range.",
            "4": "There are more than 4 multiples of 4 in this range.",
            "6": "There are fewer than 6 multiples of 4 in this range."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch3_t1_qe16',
        type: "mcq",
        question: "The factors of 8 are:",
        options: ["1, 2, 4, 8", "1, 2, 8", "2, 4, 8", "1, 8"],
        correctAnswer: "1, 2, 4, 8",
        explanation: "8 = 2³, and all numbers that divide 8 evenly are its factors: 1, 2, 4, and 8. ⭐",
        wrongAnswerExplanations: {
            "1, 2, 8": "This is missing 4, which is a factor of 8 (8 ÷ 4 = 2).",
            "2, 4, 8": "This is missing 1, which is a factor of every number.",
            "1, 8": "This is missing 2 and 4, which are factors of 8."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch3_t1_qe17',
        type: "mcq",
        question: "What is the LCM of 3, 4, and 6?",
        options: ["12", "24", "36", "48"],
        correctAnswer: "12",
        explanation: "LCM of 3, 4 (= 2²), and 6 (= 2 × 3) is 12 (= 2² × 3). The common multiples: 12, 24, 36... 🎯",
        wrongAnswerExplanations: {
            "24": "24 is a common multiple but not the least common multiple.",
            "36": "36 is a common multiple but not the least common multiple.",
            "48": "48 is a common multiple but not the least common multiple."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch3_t1_qe18',
        type: "mcq",
        question: "The HCF of 12 and 16 is:",
        options: ["2", "4", "8", "16"],
        correctAnswer: "4",
        explanation: "12 = 2² × 3 and 16 = 2⁴. The common factors are 1, 2, and 4. The highest is 4. 📊",
        wrongAnswerExplanations: {
            "2": "2 is a common factor, but not the highest common factor.",
            "8": "8 is not a factor of 12.",
            "16": "16 is not a factor of 12."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch3_t1_qe19',
        type: "mcq",
        question: "Which of these is NOT a multiple of 6?",
        options: ["12", "18", "21", "30"],
        correctAnswer: "21",
        explanation: "21 = 3 × 7, which is not divisible by 6. Multiples of 6 must be divisible by both 2 and 3. ❌",
        wrongAnswerExplanations: {
            "12": "12 = 6 × 2, which is a multiple of 6.",
            "18": "18 = 6 × 3, which is a multiple of 6.",
            "30": "30 = 6 × 5, which is a multiple of 6."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch3_t1_qe20',
        type: "mcq",
        question: "What is the HCF of 30 and 45?",
        options: ["3", "5", "15", "30"],
        correctAnswer: "15",
        explanation: "30 = 2 × 3 × 5 and 45 = 3² × 5. Common factors: 1, 3, 5, 15. The highest is 15. 🔢",
        wrongAnswerExplanations: {
            "3": "3 is a common factor, but not the highest common factor.",
            "5": "5 is a common factor, but not the highest common factor.",
            "30": "30 is not a factor of 45."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    }
];
