import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl6_ch16_t2_qm1',
        type: "mcq",
        question: "In a 3×3 puzzle, if A1 + A2 + A3 = 15 and B1 × B2 × B3 = 24, what could be the numbers in the first row?",
        options: [
            "4, 5, 6",
            "3, 5, 7",
            "2, 6, 7",
            "1, 7, 7"
        ],
        correctAnswer: "4, 5, 6",
        explanation: "4 + 5 + 6 = 15 and 4 × 5 × 6 = 120, but this is the only option where the numbers add up to 15 and are all different digits.",
        wrongAnswerExplanations: {
            "3, 5, 7": "3 + 5 + 7 = 15, but 3 × 5 × 7 = 105, not 24.",
            "2, 6, 7": "2 + 6 + 7 = 15, but 2 × 6 × 7 = 84, not 24.",
            "1, 7, 7": "1 + 7 + 7 = 15, but this uses repeating numbers which is usually not allowed."
        },
        difficulty: "medium",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch16_t2_qm2',
        type: "mcq",
        question: "In a 3×3 puzzle, if C1 - C2 = 3 and D1 ÷ D2 = 2, what could be the numbers in the third column?",
        options: [
            "6, 3, 9",
            "8, 4, 12",
            "10, 5, 15",
            "4, 2, 6"
        ],
        correctAnswer: "6, 3, 9",
        explanation: "6 - 3 = 3 and 6 ÷ 3 = 2, and 9 is a reasonable third number that maintains the pattern.",
        wrongAnswerExplanations: {
            "8, 4, 12": "8 - 4 = 4, not 3.",
            "10, 5, 15": "10 - 5 = 5, not 3.",
            "4, 2, 6": "4 - 2 = 2, not 3."
        },
        difficulty: "medium",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch16_t2_qm3',
        type: "mcq",
        question: "What is the best strategy for solving a puzzle with multiple intersecting clues?",
        options: [
            "Solve the easiest clue first",
            "Look for clues that share a common number",
            "Try random numbers until one works",
            "Skip the intersecting clues"
        ],
        correctAnswer: "Look for clues that share a common number",
        explanation: "Clues that share a common number provide more constraints and can help narrow down possible solutions faster.",
        wrongAnswerExplanations: {
            "Solve the easiest clue first": "This might not be the most efficient approach with intersecting clues.",
            "Try random numbers until one works": "This is not a systematic approach to solving puzzles.",
            "Skip the intersecting clues": "Intersecting clues are often the key to solving the puzzle."
        },
        difficulty: "medium",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch16_t2_qm4',
        type: "mcq",
        question: "In a 3×3 puzzle, if the diagonal A1 to C3 sums to 15 and the diagonal A3 to C1 sums to 15, what must be true about the center number?",
        options: [
            "It must be 5",
            "It must be even",
            "It must be odd",
            "It must be prime"
        ],
        correctAnswer: "It must be 5",
        explanation: "In a 3×3 puzzle with both diagonals summing to 15, the center number must be 5 to maintain balance.",
        wrongAnswerExplanations: {
            "It must be even": "The center number doesn't have to be even.",
            "It must be odd": "While 5 is odd, this isn't the specific requirement.",
            "It must be prime": "While 5 is prime, this isn't the specific requirement."
        },
        difficulty: "medium",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch16_t2_qm5',
        type: "mcq",
        question: "What is the maximum number of intersecting clues a single cell can have in a 3×3 puzzle?",
        options: [
            "2",
            "3",
            "4",
            "5"
        ],
        correctAnswer: "2",
        explanation: "In a 3×3 puzzle, each cell can be part of at most 2 clues - one across and one down.",
        wrongAnswerExplanations: {
            "3": "A cell cannot be part of more than 2 clues in a 3×3 grid.",
            "4": "This is not possible in a 3×3 grid.",
            "5": "This is not possible in a 3×3 grid."
        },
        difficulty: "medium",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch16_t2_qm6',
        type: "mcq",
        question: "In a 3×3 puzzle, if A1 × A2 × A3 = 120 and B1 + B2 + B3 = 12, what could be the numbers in the first column?",
        options: [
            "5, 4, 3",
            "6, 4, 2",
            "8, 3, 2",
            "10, 2, 1"
        ],
        correctAnswer: "5, 4, 3",
        explanation: "5 × 4 × 3 = 120 and 5 + 4 + 3 = 12, satisfying both conditions.",
        wrongAnswerExplanations: {
            "6, 4, 2": "6 × 4 × 2 = 48, not 120.",
            "8, 3, 2": "8 × 3 × 2 = 48, not 120.",
            "10, 2, 1": "10 × 2 × 1 = 20, not 120."
        },
        difficulty: "medium",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch16_t2_qm7',
        type: "mcq",
        question: "What is the best way to handle a puzzle with multiple possible solutions?",
        options: [
            "Choose the first solution you find",
            "Look for additional constraints in other clues",
            "Make up new rules",
            "Skip the puzzle"
        ],
        correctAnswer: "Look for additional constraints in other clues",
        explanation: "Additional constraints from other clues can help eliminate impossible solutions and find the correct one.",
        wrongAnswerExplanations: {
            "Choose the first solution you find": "This might not be the correct solution.",
            "Make up new rules": "You should follow the given rules of the puzzle.",
            "Skip the puzzle": "This is not a productive approach."
        },
        difficulty: "medium",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch16_t2_qm8',
        type: "mcq",
        question: "In a 3×3 puzzle, if the sum of all numbers is 45 and each row sums to 15, what must be true about the columns?",
        options: [
            "Each column must also sum to 15",
            "Columns can sum to any number",
            "Columns must sum to 45",
            "Columns must sum to 30"
        ],
        correctAnswer: "Each column must also sum to 15",
        explanation: "In a balanced 3×3 puzzle, if rows sum to 15, columns must also sum to 15 to maintain consistency.",
        wrongAnswerExplanations: {
            "Columns can sum to any number": "This would create an unbalanced puzzle.",
            "Columns must sum to 45": "This is the total sum, not the column sum.",
            "Columns must sum to 30": "This is not consistent with the row sums."
        },
        difficulty: "medium",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch16_t2_qm9',
        type: "mcq",
        question: "What is the minimum number of clues needed to solve a 3×3 puzzle?",
        options: [
            "4",
            "5",
            "6",
            "7"
        ],
        correctAnswer: "5",
        explanation: "A 3×3 puzzle typically needs at least 5 clues to have a unique solution, as this provides enough constraints.",
        wrongAnswerExplanations: {
            "4": "4 clues might not provide enough constraints for a unique solution.",
            "6": "While 6 clues would work, it's more than the minimum needed.",
            "7": "While 7 clues would work, it's more than the minimum needed."
        },
        difficulty: "medium",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch16_t2_qm10',
        type: "mcq",
        question: "In a 3×3 puzzle, if A1 + B1 + C1 = 15 and A2 × B2 × C2 = 36, what could be the numbers in the second row?",
        options: [
            "3, 4, 3",
            "2, 6, 3",
            "1, 9, 4",
            "4, 3, 3"
        ],
        correctAnswer: "2, 6, 3",
        explanation: "2 × 6 × 3 = 36, and these numbers could work with the column sum of 15.",
        wrongAnswerExplanations: {
            "3, 4, 3": "3 × 4 × 3 = 36, but this uses repeating numbers.",
            "1, 9, 4": "1 × 9 × 4 = 36, but 9 might be too large for the column sum.",
            "4, 3, 3": "4 × 3 × 3 = 36, but this uses repeating numbers."
        },
        difficulty: "medium",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch16_t2_qm11',
        type: "mcq",
        question: "What is the best way to verify a solution to a cross-number puzzle?",
        options: [
            "Check that all clues are satisfied",
            "Ask someone else to check it",
            "Assume it's correct if it looks right",
            "Only check the hardest clues"
        ],
        correctAnswer: "Check that all clues are satisfied",
        explanation: "A complete solution must satisfy all clues in the puzzle, both across and down.",
        wrongAnswerExplanations: {
            "Ask someone else to check it": "While helpful, you should be able to verify the solution yourself.",
            "Assume it's correct if it looks right": "This is not a reliable verification method.",
            "Only check the hardest clues": "All clues must be satisfied, not just the hardest ones."
        },
        difficulty: "medium",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch16_t2_qm12',
        type: "mcq",
        question: "In a 3×3 puzzle, if the product of the first row is 24 and the sum of the first column is 12, what could be the number in the top-left corner?",
        options: [
            "4",
            "6",
            "8",
            "3"
        ],
        correctAnswer: "4",
        explanation: "4 could be part of both 4 × 3 × 2 = 24 and 4 + 5 + 3 = 12.",
        wrongAnswerExplanations: {
            "6": "6 is too large for these constraints.",
            "8": "8 is too large for these constraints.",
            "3": "3 could work, but 4 is a better fit for both constraints."
        },
        difficulty: "medium",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch16_t2_qm13',
        type: "mcq",
        question: "What is the best way to handle a puzzle with repeating numbers?",
        options: [
            "Assume numbers can repeat",
            "Check if repeating numbers are allowed",
            "Always avoid repeating numbers",
            "Use only even numbers"
        ],
        correctAnswer: "Check if repeating numbers are allowed",
        explanation: "Some puzzles allow repeating numbers while others don't, so it's important to check the rules first.",
        wrongAnswerExplanations: {
            "Assume numbers can repeat": "This might violate the puzzle rules.",
            "Always avoid repeating numbers": "This might be too restrictive if repeats are allowed.",
            "Use only even numbers": "This is not related to handling repeating numbers."
        },
        difficulty: "medium",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch16_t2_qm14',
        type: "mcq",
        question: "In a 3×3 puzzle, if the sum of the middle row is 15 and the product of the middle column is 120, what could be the center number?",
        options: [
            "5",
            "6",
            "4",
            "8"
        ],
        correctAnswer: "5",
        explanation: "5 is a good center number as it can be part of both 15 (middle row sum) and 120 (middle column product).",
        wrongAnswerExplanations: {
            "6": "6 might be too large for these constraints.",
            "4": "4 might be too small for these constraints.",
            "8": "8 is too large for these constraints."
        },
        difficulty: "medium",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch16_t2_qm15',
        type: "mcq",
        question: "What is the best way to approach a puzzle with both addition and multiplication clues?",
        options: [
            "Start with the multiplication clues",
            "Start with the addition clues",
            "Alternate between both types",
            "Ignore one type of clue"
        ],
        correctAnswer: "Start with the multiplication clues",
        explanation: "Multiplication clues often have fewer possible solutions, making them a better starting point.",
        wrongAnswerExplanations: {
            "Start with the addition clues": "Addition clues often have more possible solutions.",
            "Alternate between both types": "This might not be the most efficient approach.",
            "Ignore one type of clue": "All clues must be considered to solve the puzzle."
        },
        difficulty: "medium",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch16_t2_qm16',
        type: "mcq",
        question: "In a 3×3 puzzle, if A1 × A2 = 12 and B1 + B2 = 7, what could be the numbers in the first two cells of the first column?",
        options: [
            "3 and 4",
            "2 and 6",
            "1 and 12",
            "4 and 3"
        ],
        correctAnswer: "3 and 4",
        explanation: "3 × 4 = 12 and 3 + 4 = 7, satisfying both conditions.",
        wrongAnswerExplanations: {
            "2 and 6": "2 × 6 = 12, but 2 + 6 = 8, not 7.",
            "1 and 12": "1 × 12 = 12, but 1 + 12 = 13, not 7.",
            "4 and 3": "While 4 × 3 = 12 and 4 + 3 = 7, the order matters in the puzzle."
        },
        difficulty: "medium",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch16_t2_qm17',
        type: "mcq",
        question: "What is the best way to handle a puzzle with negative numbers?",
        options: [
            "Check if negative numbers are allowed",
            "Always use negative numbers",
            "Never use negative numbers",
            "Use only positive numbers"
        ],
        correctAnswer: "Check if negative numbers are allowed",
        explanation: "Some puzzles allow negative numbers while others don't, so it's important to check the rules first.",
        wrongAnswerExplanations: {
            "Always use negative numbers": "This might violate the puzzle rules.",
            "Never use negative numbers": "This might be too restrictive if negatives are allowed.",
            "Use only positive numbers": "This might be too restrictive if negatives are allowed."
        },
        difficulty: "medium",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch16_t2_qm18',
        type: "mcq",
        question: "In a 3×3 puzzle, if the sum of the diagonal is 15 and the product of the other diagonal is 45, what could be the center number?",
        options: [
            "5",
            "3",
            "9",
            "15"
        ],
        correctAnswer: "5",
        explanation: "5 is a good center number as it can be part of both 15 (diagonal sum) and 45 (other diagonal product).",
        wrongAnswerExplanations: {
            "3": "3 might be too small for these constraints.",
            "9": "9 might be too large for these constraints.",
            "15": "15 is too large for these constraints."
        },
        difficulty: "medium",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch16_t2_qm19',
        type: "mcq",
        question: "What is the best way to handle a puzzle with fractions?",
        options: [
            "Check if fractions are allowed",
            "Always use fractions",
            "Never use fractions",
            "Convert all numbers to decimals"
        ],
        correctAnswer: "Check if fractions are allowed",
        explanation: "Some puzzles allow fractions while others don't, so it's important to check the rules first.",
        wrongAnswerExplanations: {
            "Always use fractions": "This might violate the puzzle rules.",
            "Never use fractions": "This might be too restrictive if fractions are allowed.",
            "Convert all numbers to decimals": "This might complicate the puzzle unnecessarily."
        },
        difficulty: "medium",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch16_t2_qm20',
        type: "mcq",
        question: "In a 3×3 puzzle, if A1 + A2 + A3 = 12 and B1 × B2 × B3 = 24, what could be the numbers in the first row?",
        options: [
            "3, 4, 5",
            "2, 5, 5",
            "1, 6, 5",
            "4, 4, 4"
        ],
        correctAnswer: "3, 4, 5",
        explanation: "3 + 4 + 5 = 12 and 3 × 4 × 5 = 60, but this is the only option with all different numbers that add up to 12.",
        wrongAnswerExplanations: {
            "2, 5, 5": "This uses repeating numbers which is usually not allowed.",
            "1, 6, 5": "1 + 6 + 5 = 12, but 1 × 6 × 5 = 30, not 24.",
            "4, 4, 4": "This uses repeating numbers which is usually not allowed."
        },
        difficulty: "medium",
        marks: 1,
        recommendedTime: 45
    }
]; 