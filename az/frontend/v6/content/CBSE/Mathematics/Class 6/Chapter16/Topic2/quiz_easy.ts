import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl6_ch16_t2_qe1',
        type: "mcq",
        question: "What is a cross-number puzzle?",
        options: [
            "A puzzle with words and numbers",
            "A puzzle similar to crosswords but with numbers",
            "A puzzle with only addition problems",
            "A puzzle with only multiplication problems"
        ],
        correctAnswer: "A puzzle similar to crosswords but with numbers",
        explanation: "A cross-number puzzle is similar to a crossword puzzle, but instead of words, you fill in numbers based on mathematical clues.",
        wrongAnswerExplanations: {
            "A puzzle with words and numbers": "Cross-number puzzles use only numbers, not words.",
            "A puzzle with only addition problems": "Cross-number puzzles can include various operations, not just addition.",
            "A puzzle with only multiplication problems": "Cross-number puzzles can include various operations, not just multiplication."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch16_t2_qe2',
        type: "mcq",
        question: "In a cross-number puzzle, what must each number satisfy?",
        options: [
            "Only across clues",
            "Only down clues",
            "Both across and down clues",
            "Neither across nor down clues"
        ],
        correctAnswer: "Both across and down clues",
        explanation: "Each number in a cross-number puzzle must satisfy both its across and down clues simultaneously.",
        wrongAnswerExplanations: {
            "Only across clues": "Numbers must satisfy both across and down clues.",
            "Only down clues": "Numbers must satisfy both across and down clues.",
            "Neither across nor down clues": "Numbers must satisfy both types of clues."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch16_t2_qe3',
        type: "mcq",
        question: "Which of these is NOT a common type of clue in cross-number puzzles?",
        options: [
            "Addition",
            "Subtraction",
            "Multiplication",
            "Division",
            "Square root"
        ],
        correctAnswer: "Square root",
        explanation: "While addition, subtraction, multiplication, and division are common operations in cross-number puzzles, square root is not typically used in basic puzzles.",
        wrongAnswerExplanations: {
            "Addition": "Addition is a common operation in cross-number puzzles.",
            "Subtraction": "Subtraction is a common operation in cross-number puzzles.",
            "Multiplication": "Multiplication is a common operation in cross-number puzzles.",
            "Division": "Division is a common operation in cross-number puzzles."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch16_t2_qe4',
        type: "mcq",
        question: "In a 2×2 puzzle, if A1 + A2 = 5 and B1 × B2 = 6, what are the possible numbers?",
        options: [
            "2 and 3",
            "1 and 4",
            "3 and 4",
            "1 and 5"
        ],
        correctAnswer: "2 and 3",
        explanation: "2 + 3 = 5 and 2 × 3 = 6, so these numbers satisfy both clues.",
        wrongAnswerExplanations: {
            "1 and 4": "1 + 4 = 5, but 1 × 4 = 4, not 6.",
            "3 and 4": "3 + 4 = 7, not 5.",
            "1 and 5": "1 + 5 = 6, not 5."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch16_t2_qe5',
        type: "mcq",
        question: "What is the best strategy to start solving a cross-number puzzle?",
        options: [
            "Start with the largest numbers",
            "Start with clues that have only one possible answer",
            "Start with any random clue",
            "Start with the most complex operation"
        ],
        correctAnswer: "Start with clues that have only one possible answer",
        explanation: "Starting with clues that have only one possible answer helps establish certain numbers that can then be used to solve other clues.",
        wrongAnswerExplanations: {
            "Start with the largest numbers": "The size of numbers doesn't determine where to start.",
            "Start with any random clue": "This might make the puzzle more difficult to solve.",
            "Start with the most complex operation": "Complex operations might have multiple solutions, making them harder to start with."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch16_t2_qe6',
        type: "mcq",
        question: "In a cross-number puzzle, if a cell is part of both 'A + B = 7' and 'C × D = 12', what could the number be?",
        options: [
            "3",
            "5",
            "7",
            "9"
        ],
        correctAnswer: "3",
        explanation: "3 + 4 = 7 and 3 × 4 = 12, so 3 is a possible number for this cell.",
        wrongAnswerExplanations: {
            "5": "5 + 2 = 7, but 5 × 2 = 10, not 12.",
            "7": "7 + 0 = 7, but 7 × 0 = 0, not 12.",
            "9": "9 is too large for these operations."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch16_t2_qe7',
        type: "mcq",
        question: "What should you do if you get stuck while solving a cross-number puzzle?",
        options: [
            "Give up and start over",
            "Look for intersecting clues you haven't used",
            "Guess random numbers",
            "Skip to a different puzzle"
        ],
        correctAnswer: "Look for intersecting clues you haven't used",
        explanation: "Looking for intersecting clues you haven't used can provide new information to help solve the puzzle.",
        wrongAnswerExplanations: {
            "Give up and start over": "This should be a last resort, not the first response.",
            "Guess random numbers": "Guessing is not a good strategy for solving puzzles.",
            "Skip to a different puzzle": "It's better to try to solve the current puzzle using different strategies."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch16_t2_qe8',
        type: "mcq",
        question: "In a 2×2 puzzle, if A1 - A2 = 2 and B1 ÷ B2 = 3, what are the possible numbers?",
        options: [
            "6 and 2",
            "5 and 3",
            "4 and 2",
            "3 and 1"
        ],
        correctAnswer: "6 and 2",
        explanation: "6 - 2 = 4 and 6 ÷ 2 = 3, so these numbers satisfy both clues.",
        wrongAnswerExplanations: {
            "5 and 3": "5 - 3 = 2, but 5 ÷ 3 is not a whole number.",
            "4 and 2": "4 - 2 = 2, but 4 ÷ 2 = 2, not 3.",
            "3 and 1": "3 - 1 = 2, but 3 ÷ 1 = 3, but these are different numbers."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch16_t2_qe9',
        type: "mcq",
        question: "What is the process of elimination in cross-number puzzles?",
        options: [
            "Guessing numbers randomly",
            "Eliminating impossible numbers based on other filled cells",
            "Adding all numbers together",
            "Multiplying all numbers together"
        ],
        correctAnswer: "Eliminating impossible numbers based on other filled cells",
        explanation: "Process of elimination means removing numbers that can't possibly fit based on other numbers already filled in the puzzle.",
        wrongAnswerExplanations: {
            "Guessing numbers randomly": "This is not a systematic approach to solving puzzles.",
            "Adding all numbers together": "This is not what process of elimination means.",
            "Multiplying all numbers together": "This is not what process of elimination means."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch16_t2_qe10',
        type: "mcq",
        question: "In a cross-number puzzle, what should you do after filling in a number?",
        options: [
            "Move on to the next clue",
            "Check if the number satisfies all related clues",
            "Erase the number and try another",
            "Stop solving the puzzle"
        ],
        correctAnswer: "Check if the number satisfies all related clues",
        explanation: "After filling in a number, you should verify that it works with all related across and down clues.",
        wrongAnswerExplanations: {
            "Move on to the next clue": "You should verify the current number first.",
            "Erase the number and try another": "Only do this if the number doesn't satisfy all clues.",
            "Stop solving the puzzle": "This is not a productive approach."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch16_t2_qe11',
        type: "mcq",
        question: "What is the first step in solving a cross-number puzzle?",
        options: [
            "Read all the clues carefully",
            "Start filling in random numbers",
            "Look for the hardest clue",
            "Skip the puzzle"
        ],
        correctAnswer: "Read all the clues carefully",
        explanation: "Reading all clues carefully helps you understand the puzzle and identify the best place to start.",
        wrongAnswerExplanations: {
            "Start filling in random numbers": "This is not a good strategy for solving puzzles.",
            "Look for the hardest clue": "It's better to start with simpler clues.",
            "Skip the puzzle": "This is not a productive approach."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch16_t2_qe12',
        type: "mcq",
        question: "In a 2×2 puzzle, if A1 × A2 = 12 and B1 + B2 = 7, what are the possible numbers?",
        options: [
            "3 and 4",
            "2 and 6",
            "1 and 12",
            "4 and 5"
        ],
        correctAnswer: "3 and 4",
        explanation: "3 × 4 = 12 and 3 + 4 = 7, so these numbers satisfy both clues.",
        wrongAnswerExplanations: {
            "2 and 6": "2 × 6 = 12, but 2 + 6 = 8, not 7.",
            "1 and 12": "1 × 12 = 12, but 1 + 12 = 13, not 7.",
            "4 and 5": "4 + 5 = 9, not 7."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch16_t2_qe13',
        type: "mcq",
        question: "What should you do if you find a contradiction in your solution?",
        options: [
            "Ignore it and continue",
            "Check your previous steps for errors",
            "Start over completely",
            "Change the rules of the puzzle"
        ],
        correctAnswer: "Check your previous steps for errors",
        explanation: "When you find a contradiction, you should review your previous steps to find where you might have made a mistake.",
        wrongAnswerExplanations: {
            "Ignore it and continue": "This will lead to more errors.",
            "Start over completely": "This should be a last resort.",
            "Change the rules of the puzzle": "This is not allowed in puzzle-solving."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch16_t2_qe14',
        type: "mcq",
        question: "In a cross-number puzzle, what is an intersecting clue?",
        options: [
            "A clue that crosses another clue",
            "A clue that is very difficult",
            "A clue that uses multiplication",
            "A clue that uses division"
        ],
        correctAnswer: "A clue that crosses another clue",
        explanation: "An intersecting clue is one that shares a cell with another clue, either across or down.",
        wrongAnswerExplanations: {
            "A clue that is very difficult": "Difficulty is not related to intersection.",
            "A clue that uses multiplication": "The operation used doesn't determine intersection.",
            "A clue that uses division": "The operation used doesn't determine intersection."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch16_t2_qe15',
        type: "mcq",
        question: "What is the advantage of starting with single-digit numbers in a cross-number puzzle?",
        options: [
            "They are easier to multiply",
            "They have fewer possible combinations",
            "They are always the correct answer",
            "They make the puzzle harder"
        ],
        correctAnswer: "They have fewer possible combinations",
        explanation: "Single-digit numbers have fewer possible combinations, making it easier to find the correct solution.",
        wrongAnswerExplanations: {
            "They are easier to multiply": "This is not the main advantage.",
            "They are always the correct answer": "This is not true.",
            "They make the puzzle harder": "This is the opposite of the truth."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch16_t2_qe16',
        type: "mcq",
        question: "In a 2×2 puzzle, if A1 ÷ A2 = 2 and B1 - B2 = 3, what are the possible numbers?",
        options: [
            "6 and 3",
            "4 and 2",
            "8 and 4",
            "10 and 5"
        ],
        correctAnswer: "6 and 3",
        explanation: "6 ÷ 3 = 2 and 6 - 3 = 3, so these numbers satisfy both clues.",
        wrongAnswerExplanations: {
            "4 and 2": "4 ÷ 2 = 2, but 4 - 2 = 2, not 3.",
            "8 and 4": "8 ÷ 4 = 2, but 8 - 4 = 4, not 3.",
            "10 and 5": "10 ÷ 5 = 2, but 10 - 5 = 5, not 3."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch16_t2_qe17',
        type: "mcq",
        question: "What should you do before starting a cross-number puzzle?",
        options: [
            "Read the instructions carefully",
            "Start filling in numbers immediately",
            "Skip the instructions",
            "Ask someone else to solve it"
        ],
        correctAnswer: "Read the instructions carefully",
        explanation: "Reading the instructions carefully helps you understand the rules and constraints of the puzzle.",
        wrongAnswerExplanations: {
            "Start filling in numbers immediately": "This might lead to mistakes.",
            "Skip the instructions": "This might cause you to miss important rules.",
            "Ask someone else to solve it": "This defeats the purpose of solving the puzzle yourself."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch16_t2_qe18',
        type: "mcq",
        question: "In a cross-number puzzle, what is a unique solution?",
        options: [
            "A solution that uses only odd numbers",
            "A solution that uses only even numbers",
            "A clue that has only one possible answer",
            "A solution that no one else has found"
        ],
        correctAnswer: "A clue that has only one possible answer",
        explanation: "A unique solution is one where there is only one possible set of numbers that satisfies the clue.",
        wrongAnswerExplanations: {
            "A solution that uses only odd numbers": "This is not what makes a solution unique.",
            "A solution that uses only even numbers": "This is not what makes a solution unique.",
            "A solution that no one else has found": "This is not what makes a solution unique."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch16_t2_qe19',
        type: "mcq",
        question: "What is the best way to keep track of possible numbers in a cross-number puzzle?",
        options: [
            "Write them down lightly in pencil",
            "Memorize them all",
            "Guess and check",
            "Ask for help"
        ],
        correctAnswer: "Write them down lightly in pencil",
        explanation: "Writing possible numbers lightly in pencil allows you to keep track of options and easily make changes if needed.",
        wrongAnswerExplanations: {
            "Memorize them all": "This is difficult and error-prone.",
            "Guess and check": "This is not a systematic approach.",
            "Ask for help": "This defeats the purpose of solving the puzzle yourself."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch16_t2_qe20',
        type: "mcq",
        question: "In a 2×2 puzzle, if A1 + A2 = 9 and B1 × B2 = 20, what are the possible numbers?",
        options: [
            "4 and 5",
            "3 and 6",
            "2 and 7",
            "1 and 8"
        ],
        correctAnswer: "4 and 5",
        explanation: "4 + 5 = 9 and 4 × 5 = 20, so these numbers satisfy both clues.",
        wrongAnswerExplanations: {
            "3 and 6": "3 + 6 = 9, but 3 × 6 = 18, not 20.",
            "2 and 7": "2 + 7 = 9, but 2 × 7 = 14, not 20.",
            "1 and 8": "1 + 8 = 9, but 1 × 8 = 8, not 20."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    }
]; 