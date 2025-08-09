import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl5_ch16_t2_qe1',
        type: "mcq",
        question: "What is a cross-number puzzle?",
        options: [
            "A puzzle with words and numbers",
            "A puzzle like a crossword but with numbers",
            "A puzzle with only multiplication problems",
            "A puzzle with only addition problems"
        ],
        correctAnswer: "A puzzle like a crossword but with numbers",
        explanation: "A cross-number puzzle is similar to a crossword puzzle but uses numbers instead of words. 🧩",
        wrongAnswerExplanations: {
            "A puzzle with words and numbers": "Cross-number puzzles use only numbers, not words.",
            "A puzzle with only multiplication problems": "Cross-number puzzles can include various types of math problems.",
            "A puzzle with only addition problems": "Cross-number puzzles can include different operations, not just addition."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch16_t2_qe2',
        type: "mcq",
        question: "In a cross-number puzzle, what do the numbers in the grid represent?",
        options: [
            "The answers to the clues",
            "The question numbers",
            "The difficulty level",
            "The time to solve"
        ],
        correctAnswer: "The answers to the clues",
        explanation: "The numbers in the grid are the answers to the across and down clues. 🔢",
        wrongAnswerExplanations: {
            "The question numbers": "The question numbers are separate from the grid numbers.",
            "The difficulty level": "Difficulty is not shown in the grid numbers.",
            "The time to solve": "Time is not represented in the grid numbers."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch16_t2_qe3',
        type: "mcq",
        question: "What is the first step in solving a cross-number puzzle?",
        options: [
            "Start with the hardest clue",
            "Read all the clues first",
            "Fill in random numbers",
            "Skip the across clues"
        ],
        correctAnswer: "Read all the clues first",
        explanation: "Reading all clues helps identify the easiest ones to start with. 📝",
        wrongAnswerExplanations: {
            "Start with the hardest clue": "It's better to start with easier clues first.",
            "Fill in random numbers": "Random numbers won't help solve the puzzle correctly.",
            "Skip the across clues": "Both across and down clues are important."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch16_t2_qe4',
        type: "mcq",
        question: "If a clue says 'A prime number', which of these could be the answer?",
        options: ["4", "6", "7", "8"],
        correctAnswer: "7",
        explanation: "7 is a prime number because it has only two factors: 1 and itself. 🔢",
        wrongAnswerExplanations: {
            "4": "4 is not prime (factors: 1, 2, 4).",
            "6": "6 is not prime (factors: 1, 2, 3, 6).",
            "8": "8 is not prime (factors: 1, 2, 4, 8)."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch16_t2_qe5',
        type: "mcq",
        question: "What does 'sum of digits is 9' mean in a cross-number puzzle?",
        options: [
            "The number is divisible by 9",
            "Adding the digits gives 9",
            "The number is 9",
            "The number is a multiple of 9"
        ],
        correctAnswer: "Adding the digits gives 9",
        explanation: "For example, 36 has digits 3+6=9. ➕",
        wrongAnswerExplanations: {
            "The number is divisible by 9": "This is a different property.",
            "The number is 9": "The number could be any number whose digits add to 9.",
            "The number is a multiple of 9": "This is a different property."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch16_t2_qe6',
        type: "mcq",
        question: "Which of these is an even number?",
        options: ["3", "5", "8", "9"],
        correctAnswer: "8",
        explanation: "8 is even because it's divisible by 2. 🔢",
        wrongAnswerExplanations: {
            "3": "3 is odd.",
            "5": "5 is odd.",
            "9": "9 is odd."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch16_t2_qe7',
        type: "mcq",
        question: "What is a square number?",
        options: [
            "A number that looks like a square",
            "A number multiplied by itself",
            "A number with four sides",
            "A number that is even"
        ],
        correctAnswer: "A number multiplied by itself",
        explanation: "For example, 4 is a square number because 2×2=4. ✖️",
        wrongAnswerExplanations: {
            "A number that looks like a square": "Square numbers are not about appearance.",
            "A number with four sides": "This is not related to square numbers.",
            "A number that is even": "Square numbers can be odd or even."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch16_t2_qe8',
        type: "mcq",
        question: "If a clue says 'multiple of 3', which number could be the answer?",
        options: ["4", "6", "7", "8"],
        correctAnswer: "6",
        explanation: "6 is a multiple of 3 because 3×2=6. ✖️",
        wrongAnswerExplanations: {
            "4": "4 is not a multiple of 3.",
            "7": "7 is not a multiple of 3.",
            "8": "8 is not a multiple of 3."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch16_t2_qe9',
        type: "mcq",
        question: "What is a palindromic number?",
        options: [
            "A number that reads the same backward",
            "A number that is prime",
            "A number that is even",
            "A number that is square"
        ],
        correctAnswer: "A number that reads the same backward",
        explanation: "For example, 121 reads the same backward. 🔄",
        wrongAnswerExplanations: {
            "A number that is prime": "This is a different property.",
            "A number that is even": "This is a different property.",
            "A number that is square": "This is a different property."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch16_t2_qe10',
        type: "mcq",
        question: "Which of these is a palindromic number?",
        options: ["12", "21", "22", "23"],
        correctAnswer: "22",
        explanation: "22 reads the same backward. 🔄",
        wrongAnswerExplanations: {
            "12": "12 reads as 21 backward.",
            "21": "21 reads as 12 backward.",
            "23": "23 reads as 32 backward."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch16_t2_qe11',
        type: "mcq",
        question: "What is the sum of the digits of 45?",
        options: ["4", "5", "9", "45"],
        correctAnswer: "9",
        explanation: "4 + 5 = 9. ➕",
        wrongAnswerExplanations: {
            "4": "This is just the tens digit.",
            "5": "This is just the units digit.",
            "45": "This is the number itself, not the sum of digits."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch16_t2_qe12',
        type: "mcq",
        question: "Which number is one more than a multiple of 5?",
        options: ["4", "5", "6", "10"],
        correctAnswer: "6",
        explanation: "5 + 1 = 6. ➕",
        wrongAnswerExplanations: {
            "4": "4 is one less than 5.",
            "5": "5 is a multiple of 5.",
            "10": "10 is a multiple of 5."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch16_t2_qe13',
        type: "mcq",
        question: "What is the product of the digits of 24?",
        options: ["2", "4", "6", "8"],
        correctAnswer: "8",
        explanation: "2 × 4 = 8. ✖️",
        wrongAnswerExplanations: {
            "2": "This is just the tens digit.",
            "4": "This is just the units digit.",
            "6": "This is the sum of digits, not the product."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch16_t2_qe14',
        type: "mcq",
        question: "Which of these is a square number?",
        options: ["5", "9", "10", "12"],
        correctAnswer: "9",
        explanation: "3 × 3 = 9. ✖️",
        wrongAnswerExplanations: {
            "5": "5 is not a square number.",
            "10": "10 is not a square number.",
            "12": "12 is not a square number."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch16_t2_qe15',
        type: "mcq",
        question: "What is the difference between the digits of 73?",
        options: ["4", "5", "6", "7"],
        correctAnswer: "4",
        explanation: "7 - 3 = 4. ➖",
        wrongAnswerExplanations: {
            "5": "This is not the difference between the digits.",
            "6": "This is not the difference between the digits.",
            "7": "This is just the tens digit."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch16_t2_qe16',
        type: "mcq",
        question: "Which number has all different digits?",
        options: ["11", "22", "33", "12"],
        correctAnswer: "12",
        explanation: "1 and 2 are different digits. 🔢",
        wrongAnswerExplanations: {
            "11": "Both digits are the same.",
            "22": "Both digits are the same.",
            "33": "Both digits are the same."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch16_t2_qe17',
        type: "mcq",
        question: "What is the smallest two-digit prime number?",
        options: ["10", "11", "12", "13"],
        correctAnswer: "11",
        explanation: "11 is the smallest two-digit prime number. 🔢",
        wrongAnswerExplanations: {
            "10": "10 is not prime (divisible by 2 and 5).",
            "12": "12 is not prime (divisible by 2, 3, 4, 6).",
            "13": "13 is prime but not the smallest two-digit prime."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch16_t2_qe18',
        type: "mcq",
        question: "Which number is a multiple of both 2 and 3?",
        options: ["4", "6", "8", "9"],
        correctAnswer: "6",
        explanation: "6 is divisible by both 2 and 3. ✖️",
        wrongAnswerExplanations: {
            "4": "4 is only divisible by 2.",
            "8": "8 is only divisible by 2.",
            "9": "9 is only divisible by 3."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch16_t2_qe19',
        type: "mcq",
        question: "What is the sum of the first three prime numbers?",
        options: ["5", "6", "10", "12"],
        correctAnswer: "10",
        explanation: "2 + 3 + 5 = 10. ➕",
        wrongAnswerExplanations: {
            "5": "This is just the first prime number.",
            "6": "This is the sum of the first two prime numbers.",
            "12": "This is not the sum of the first three primes."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch16_t2_qe20',
        type: "mcq",
        question: "Which number is both even and square?",
        options: ["4", "5", "7", "9"],
        correctAnswer: "4",
        explanation: "4 is even and 2×2=4. ✖️",
        wrongAnswerExplanations: {
            "5": "5 is not even or square.",
            "7": "7 is not even or square.",
            "9": "9 is square but not even."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    }
];
