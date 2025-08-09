import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl4_ch1_t3_qm1',
        type: "mcq",
        question: "A pattern of bricks has 3 rows with increasing numbers of bricks. The first row has 4 bricks, the second row has 6 bricks, and the third row has 8 bricks. How many bricks are there in total?",
        options: ["14 bricks", "16 bricks", "18 bricks", "20 bricks"],
        correctAnswer: "18 bricks",
        explanation: "Add all rows: 4 + 6 + 8 = 18 bricks. In patterns with different numbers in each row, we add all the rows to find the total.",
        wrongAnswerExplanations: {
            "14 bricks": "This is less than the correct total. The sum of 4 + 6 + 8 = 18 bricks.",
            "16 bricks": "This is less than the correct total. The sum of 4 + 6 + 8 = 18 bricks.",
            "20 bricks": "This is more than the correct total. The sum of 4 + 6 + 8 = 18 bricks."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch1_t3_qm2',
        type: "mcq",
        question: "A wall has 5 rows of bricks. Each row has 2 more bricks than the row above it. If the top row has 6 bricks, how many bricks are in the bottom row?",
        options: ["10 bricks", "12 bricks", "14 bricks", "16 bricks"],
        correctAnswer: "14 bricks",
        explanation: "Starting with 6 bricks, add 2 for each row: row 1 = 6, row 2 = 8, row 3 = 10, row 4 = 12, row 5 = 14 bricks. In growing patterns, we track how the values change with each step.",
        wrongAnswerExplanations: {
            "10 bricks": "This would be the number of bricks in the 3rd row, not the 5th row.",
            "12 bricks": "This would be the number of bricks in the 4th row, not the 5th row.",
            "16 bricks": "This is incorrect. The pattern increases by 2 each time, so the 5th row would have 6 + (4 × 2) = 14 bricks."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch1_t3_qm3',
        type: "mcq",
        question: "A rectangular brick pattern has 7 rows and 6 columns. If you remove 2 bricks from the pattern, how many bricks remain?",
        options: ["40 bricks", "39 bricks", "41 bricks", "42 bricks"],
        correctAnswer: "40 bricks",
        explanation: "First calculate the total: 7 × 6 = 42 bricks. Then subtract the removed bricks: 42 - 2 = 40 bricks remain. Subtraction helps us find how many are left after removing some.",
        wrongAnswerExplanations: {
            "39 bricks": "This is incorrect. The original number of bricks was 7 × 6 = 42, and after removing 2, there would be 42 - 2 = 40 bricks.",
            "41 bricks": "This would be correct if only 1 brick was removed, not 2.",
            "42 bricks": "This is the original number of bricks before any were removed."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch1_t3_qm4',
        type: "mcq",
        question: "In a brick pattern, each row has twice as many bricks as the row above it. If the top row has 3 bricks, how many bricks are in the 4th row?",
        options: ["12 bricks", "18 bricks", "24 bricks", "36 bricks"],
        correctAnswer: "24 bricks",
        explanation: "Starting with 3, multiply by 2 for each row: row 1 = 3, row 2 = 6, row 3 = 12, row 4 = 24 bricks. In patterns that double, we multiply by 2 for each step.",
        wrongAnswerExplanations: {
            "12 bricks": "This would be the number of bricks in the 3rd row, not the 4th row.",
            "18 bricks": "This is incorrect. In a doubling pattern, the 4th row would have 3 × 2³ = 3 × 8 = 24 bricks.",
            "36 bricks": "This would be the number of bricks in the 5th row, not the 4th row."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch1_t3_qm5',
        type: "mcq",
        question: "A builder arranges bricks in rows. The pattern starts with 2 bricks in the first row and increases by 3 bricks in each subsequent row. How many bricks are in the 5th row?",
        options: ["13 bricks", "14 bricks", "17 bricks", "20 bricks"],
        correctAnswer: "14 bricks",
        explanation: "Starting with 2, add 3 for each row: row 1 = 2, row 2 = 5, row 3 = 8, row 4 = 11, row 5 = 14 bricks. When we add the same number each time, we're creating an arithmetic sequence.",
        wrongAnswerExplanations: {
            "13 bricks": "This is incorrect. The pattern is 2, 5, 8, 11, 14, so the 5th row has 14 bricks.",
            "17 bricks": "This would be the number of bricks in the 6th row, not the 5th row.",
            "20 bricks": "This would be the number of bricks in the 7th row, not the 5th row."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch1_t3_qm6',
        type: "mcq",
        question: "If you have 60 bricks to build a wall with 4 equal rows, how many bricks will be in each row?",
        options: ["12 bricks", "15 bricks", "16 bricks", "20 bricks"],
        correctAnswer: "15 bricks",
        explanation: "Divide total bricks by number of rows: 60 ÷ 4 = 15 bricks per row. Division helps us distribute items equally among groups.",
        wrongAnswerExplanations: {
            "12 bricks": "This is incorrect. 60 bricks divided into 4 equal rows gives 60 ÷ 4 = 15 bricks per row.",
            "16 bricks": "This is incorrect. 60 bricks divided into 4 equal rows gives 60 ÷ 4 = 15 bricks per row.",
            "20 bricks": "This is incorrect. 60 bricks divided into 4 equal rows gives 60 ÷ 4 = 15 bricks per row."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch1_t3_qm7',
        type: "mcq",
        question: "A brick wall has 6 rows. The first row has 10 bricks, and each row after has 1 fewer brick than the row above. How many bricks are in the wall?",
        options: ["45 bricks", "55 bricks", "50 bricks", "60 bricks"],
        correctAnswer: "45 bricks",
        explanation: "Calculate each row and add: row 1 = 10, row 2 = 9, row 3 = 8, row 4 = 7, row 5 = 6, row 6 = 5. Sum: 10 + 9 + 8 + 7 + 6 + 5 = 45 bricks. This is an arithmetic sequence with a common difference of -1.",
        wrongAnswerExplanations: {
            "55 bricks": "This is incorrect. The sum of 10 + 9 + 8 + 7 + 6 + 5 = 45 bricks.",
            "50 bricks": "This is incorrect. The sum of 10 + 9 + 8 + 7 + 6 + 5 = 45 bricks.",
            "60 bricks": "This would be correct if all 6 rows had 10 bricks each, but each row decreases by 1 brick."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch1_t3_qm8',
        type: "mcq",
        question: "A square pattern of bricks has the same number of bricks in each row as it has rows. If there are 36 bricks in total, how many rows does the pattern have?",
        options: ["4 rows", "6 rows", "9 rows", "12 rows"],
        correctAnswer: "6 rows",
        explanation: "For a square with n rows and n bricks per row, the total is n². We need n² = 36, so n = 6. This is a square arrangement with 6 rows and 6 bricks in each row.",
        wrongAnswerExplanations: {
            "4 rows": "This is incorrect. 4 rows with 4 bricks per row would give 16 bricks, not 36.",
            "9 rows": "This is incorrect. 9 rows with 9 bricks per row would give 81 bricks, not 36.",
            "12 rows": "This is incorrect. 12 rows with 12 bricks per row would give 144 bricks, not 36."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch1_t3_qm9',
        type: "mcq",
        question: "A pyramid pattern of bricks has 8 bricks in the bottom row. Each row above has 1 brick fewer than the row below. How many rows are in the pyramid if all bricks are used?",
        options: ["4 rows", "6 rows", "8 rows", "5 rows"],
        correctAnswer: "8 rows",
        explanation: "The rows from bottom to top have: 8, 7, 6, 5, 4, 3, 2, 1 bricks. Since the pattern reaches 1 brick at the top, there are 8 rows in total. This forms a triangular pattern.",
        wrongAnswerExplanations: {
            "4 rows": "This is incorrect. With 8 bricks in the bottom row, decreasing by 1 each time, 4 rows would have 8 + 7 + 6 + 5 = 26 bricks and stop at 5 bricks in the top row.",
            "6 rows": "This is incorrect. With 8 bricks in the bottom row, decreasing by 1 each time, 6 rows would have 8 + 7 + 6 + 5 + 4 + 3 = 33 bricks and stop at 3 bricks in the top row.",
            "5 rows": "This is incorrect. With 8 bricks in the bottom row, decreasing by 1 each time, 5 rows would have 8 + 7 + 6 + 5 + 4 = 30 bricks and stop at 4 bricks in the top row."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch1_t3_qm10',
        type: "mcq",
        question: "A triangular brick pattern starts with 1 brick in the first row. Each row has 1 more brick than the previous row. How many bricks are in the first 5 rows combined?",
        options: ["15 bricks", "25 bricks", "10 bricks", "20 bricks"],
        correctAnswer: "15 bricks",
        explanation: "Add all rows: 1 + 2 + 3 + 4 + 5 = 15 bricks. This forms a triangular number pattern where the sum equals n(n+1)/2 = 5×6/2 = 15.",
        wrongAnswerExplanations: {
            "25 bricks": "This is incorrect. The sum of 1 + 2 + 3 + 4 + 5 = 15 bricks.",
            "10 bricks": "This is incorrect. The sum of 1 + 2 + 3 + 4 = 10 bricks, which would be for 4 rows, not 5.",
            "20 bricks": "This is incorrect. The sum of 1 + 2 + 3 + 4 + 5 = 15 bricks."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch1_t3_qm11',
        type: "mcq",
        question: "A rectangular arrangement of bricks has 8 rows with 7 bricks in each row. If 4 bricks are removed from one corner, how many bricks remain?",
        options: ["52 bricks", "56 bricks", "48 bricks", "60 bricks"],
        correctAnswer: "52 bricks",
        explanation: "Calculate the original total: 8 × 7 = 56 bricks. Then subtract the removed bricks: 56 - 4 = 52 bricks remain. This is a basic subtraction problem using multiplication first.",
        wrongAnswerExplanations: {
            "56 bricks": "This is the original number of bricks before any were removed.",
            "48 bricks": "This is incorrect. After removing 4 bricks from 56, there would be 56 - 4 = 52 bricks.",
            "60 bricks": "This is more than the original number of bricks (56), which isn't possible."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch1_t3_qm12',
        type: "mcq",
        question: "A pattern starts with 5 bricks in the first row. The number of bricks in each row increases by 3 from the previous row. How many bricks are in the 4th row?",
        options: ["11 bricks", "14 bricks", "15 bricks", "17 bricks"],
        correctAnswer: "14 bricks",
        explanation: "Starting with 5, add 3 for each row: row 1 = 5, row 2 = 8, row 3 = 11, row 4 = 14 bricks. This is an arithmetic progression with first term 5 and common difference 3.",
        wrongAnswerExplanations: {
            "11 bricks": "This is the number of bricks in the 3rd row, not the 4th row.",
            "15 bricks": "This is incorrect. Following the pattern 5, 8, 11, the 4th row would have 11 + 3 = 14 bricks.",
            "17 bricks": "This would be the number of bricks in the 5th row, not the 4th row."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch1_t3_qm13',
        type: "mcq",
        question: "A wall pattern has 5 rows with 8 bricks in each row. If the pattern is extended to 8 rows, keeping the same number of bricks per row, how many bricks will be in the complete pattern?",
        options: ["64 bricks", "40 bricks", "56 bricks", "24 bricks"],
        correctAnswer: "64 bricks",
        explanation: "Calculate the new total: 8 rows × 8 bricks = 64 bricks. When extending a pattern with the same number of items per row, we multiply the new number of rows by the number per row.",
        wrongAnswerExplanations: {
            "40 bricks": "This is the original number of bricks (5 rows × 8 bricks).",
            "56 bricks": "This is incorrect. 8 rows with 8 bricks per row would be 8 × 8 = 64 bricks.",
            "24 bricks": "This would be the number of bricks in the 3 additional rows (3 × 8), not the total."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch1_t3_qm14',
        type: "mcq",
        question: "A builder creates a pattern with 5 rows. Each row has 2 more bricks than the row above it. If there are 9 bricks in the middle (3rd) row, how many bricks are used in the entire pattern?",
        options: ["35 bricks", "40 bricks", "45 bricks", "50 bricks"],
        correctAnswer: "35 bricks",
        explanation: "If the 3rd row has 9 bricks, then: row 1 has 5 bricks, row 2 has 7 bricks, row 3 has 9 bricks, row 4 has 11 bricks, row 5 has 13 bricks. Total: 5 + 7 + 9 + 11 + 13 = 45 bricks.",
        wrongAnswerExplanations: {
            "35 bricks": "This is incorrect. Adding all five rows (5 + 7 + 9 + 11 + 13) gives a total of 45 bricks.",
            "40 bricks": "This is incorrect. Adding all five rows (5 + 7 + 9 + 11 + 13) gives a total of 45 bricks.",
            "50 bricks": "This is incorrect. Adding all five rows (5 + 7 + 9 + 11 + 13) gives a total of 45 bricks."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch1_t3_qm15',
        type: "mcq",
        question: "A rectangular pattern of bricks has 6 rows with 9 bricks in each row. How many more bricks would be needed to make it a square pattern with 9 rows of 9 bricks each?",
        options: ["27 bricks", "54 bricks", "18 bricks", "21 bricks"],
        correctAnswer: "27 bricks",
        explanation: "Original pattern: 6 × 9 = 54 bricks. Square pattern: 9 × 9 = 81 bricks. Additional bricks needed: 81 - 54 = 27 bricks. This problem involves comparing two different rectangular arrangements.",
        wrongAnswerExplanations: {
            "54 bricks": "This is the number of bricks in the original pattern (6 × 9), not the additional bricks needed.",
            "18 bricks": "This is incorrect. The additional bricks needed would be (9 × 9) - (6 × 9) = 81 - 54 = 27.",
            "21 bricks": "This is incorrect. The additional bricks needed would be (9 × 9) - (6 × 9) = 81 - 54 = 27."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch1_t3_qm16',
        type: "mcq",
        question: "In a brick pattern, the first row has 4 bricks, the second row has 7 bricks, and the third row has 10 bricks. If this pattern continues, how many bricks will be in the 6th row?",
        options: ["16 bricks", "19 bricks", "20 bricks", "22 bricks"],
        correctAnswer: "19 bricks",
        explanation: "Looking at the pattern: 4, 7, 10, ..., we add 3 each time. Continuing: row 4 = 13, row 5 = 16, row 6 = 19 bricks. This is an arithmetic sequence with first term 4 and common difference 3.",
        wrongAnswerExplanations: {
            "16 bricks": "This is the number of bricks in the 5th row, not the 6th row.",
            "20 bricks": "This is incorrect. Following the pattern 4, 7, 10, 13, 16, the 6th row would have 16 + 3 = 19 bricks.",
            "22 bricks": "This is incorrect. Following the pattern 4, 7, 10, 13, 16, the 6th row would have 16 + 3 = 19 bricks."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch1_t3_qm17',
        type: "mcq",
        question: "In a brick wall, there are 4 rows with 7 bricks in each row. If each brick is 9 cm long, what is the total length of all bricks placed end to end?",
        options: ["252 cm", "158 cm", "126 cm", "63 cm"],
        correctAnswer: "252 cm",
        explanation: "Calculate total bricks: 4 × 7 = 28 bricks. Then multiply by the length of each brick: 28 × 9 = 252 cm. This problem combines multiplication in two steps.",
        wrongAnswerExplanations: {
            "158 cm": "This is incorrect. The total length would be 4 × 7 × 9 = 252 cm.",
            "126 cm": "This is incorrect. The total length would be 4 × 7 × 9 = 252 cm.",
            "63 cm": "This is the length of one row (7 × 9 = 63 cm), not the total length of all bricks."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch1_t3_qm18',
        type: "mcq",
        question: "A brick pattern has 3 rows. The top row has 5 red bricks, the middle row has 7 yellow bricks, and the bottom row has 9 blue bricks. How many bricks are there in total?",
        options: ["19 bricks", "21 bricks", "15 bricks", "25 bricks"],
        correctAnswer: "21 bricks",
        explanation: "Add all rows: 5 + 7 + 9 = 21 bricks. When counting different colored bricks in different rows, we add all the rows together.",
        wrongAnswerExplanations: {
            "19 bricks": "This is incorrect. The sum of 5 + 7 + 9 = 21 bricks.",
            "15 bricks": "This is incorrect. The sum of 5 + 7 + 9 = 21 bricks.",
            "25 bricks": "This is incorrect. The sum of 5 + 7 + 9 = 21 bricks."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch1_t3_qm19',
        type: "mcq",
        question: "A step pattern of bricks has 1 brick in the first row, 2 bricks in the second row, 3 bricks in the third row, and so on. If there are 6 rows in total, how many bricks are used?",
        options: ["15 bricks", "18 bricks", "21 bricks", "36 bricks"],
        correctAnswer: "21 bricks",
        explanation: "Add all rows: 1 + 2 + 3 + 4 + 5 + 6 = 21 bricks. This forms a triangular pattern where the sum equals n(n+1)/2 = 6×7/2 = 21.",
        wrongAnswerExplanations: {
            "15 bricks": "This would be the sum for 5 rows (1 + 2 + 3 + 4 + 5), not 6 rows.",
            "18 bricks": "This is incorrect. The sum of 1 + 2 + 3 + 4 + 5 + 6 = 21 bricks.",
            "36 bricks": "This would be the result if each row had 6 bricks, not an increasing number of bricks."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch1_t3_qm20',
        type: "mcq",
        question: "A builder has 50 bricks. She uses them to create rows with an equal number of bricks in each row. Which of these arrangements is NOT possible?",
        options: ["5 rows of 10 bricks", "10 rows of 5 bricks", "7 rows of 7 bricks", "2 rows of 25 bricks"],
        correctAnswer: "7 rows of 7 bricks",
        explanation: "7 × 7 = 49 bricks, which is less than 50. All other options use exactly 50 bricks. We check each option by multiplying rows × bricks per row and comparing with the total available.",
        wrongAnswerExplanations: {
            "5 rows of 10 bricks": "This works because 5 × 10 = 50 bricks.",
            "10 rows of 5 bricks": "This works because 10 × 5 = 50 bricks.",
            "2 rows of 25 bricks": "This works because 2 × 25 = 50 bricks."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    }
]; 