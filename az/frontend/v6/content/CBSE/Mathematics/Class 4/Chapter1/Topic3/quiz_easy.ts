import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl4_ch1_t3_qe1',
        type: "mcq",
        question: "If each row of a brick pattern has 5 bricks, how many bricks are there in 3 rows?",
        options: ["8 bricks", "15 bricks", "12 bricks", "10 bricks"],
        correctAnswer: "15 bricks",
        explanation: "Multiply rows by bricks per row: 3 × 5 = 15 bricks. Arranging objects in rows helps us use multiplication to count efficiently.",
        wrongAnswerExplanations: {
            "8 bricks": "This is incorrect. 3 rows of 5 bricks would be 3 × 5 = 15 bricks.",
            "12 bricks": "This would be correct for 3 rows of 4 bricks, but we have 5 bricks per row.",
            "10 bricks": "This would be correct for 2 rows of 5 bricks, not 3 rows."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch1_t3_qe2',
        type: "mcq",
        question: "How many bricks are needed to build 4 equal columns with 6 bricks in each column?",
        options: ["10 bricks", "24 bricks", "20 bricks", "22 bricks"],
        correctAnswer: "24 bricks",
        explanation: "Multiply columns by bricks per column: 4 × 6 = 24 bricks. Arranging in columns is similar to rows - we multiply the number of columns by items in each column.",
        wrongAnswerExplanations: {
            "10 bricks": "This is much less than needed. 4 columns of 6 bricks would be 4 × 6 = 24 bricks.",
            "20 bricks": "This is incorrect. 4 columns of 6 bricks would be 4 × 6 = 24 bricks.",
            "22 bricks": "This is incorrect. 4 columns of 6 bricks would be 4 × 6 = 24 bricks."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch1_t3_qe3',
        type: "mcq",
        question: "In a brick pattern, there are 3 rows with 7 bricks in the first row, 7 bricks in the second row, and 7 bricks in the third row. How many bricks are there in total?",
        options: ["21 bricks", "17 bricks", "14 bricks", "28 bricks"],
        correctAnswer: "21 bricks",
        explanation: "Add all bricks: 7 + 7 + 7 = 21 bricks, or multiply: 3 rows × 7 bricks = 21 bricks. When all rows have the same number of items, we can use multiplication.",
        wrongAnswerExplanations: {
            "17 bricks": "This is incorrect. 3 rows of 7 bricks would be 3 × 7 = 21 bricks.",
            "14 bricks": "This would be correct for 2 rows of 7 bricks, not 3 rows.",
            "28 bricks": "This would be correct for 4 rows of 7 bricks, not 3 rows."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch1_t3_qe4',
        type: "mcq",
        question: "If you arrange bricks in a square pattern with 4 bricks on each side, how many bricks will you need in total?",
        options: ["8 bricks", "12 bricks", "16 bricks", "20 bricks"],
        correctAnswer: "16 bricks",
        explanation: "A square with 4 bricks on each side will have 4 × 4 = 16 bricks in total. For a square arrangement, we multiply the number of rows by itself.",
        wrongAnswerExplanations: {
            "8 bricks": "This would only count the perimeter, not the entire square.",
            "12 bricks": "This is incorrect. A square with 4 bricks on each side contains 4 × 4 = 16 bricks.",
            "20 bricks": "This is more than needed. A square with 4 bricks on each side contains 4 × 4 = 16 bricks."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch1_t3_qe5',
        type: "mcq",
        question: "A wall has 5 rows of bricks. Each row has 8 bricks. How many bricks are there in the wall?",
        options: ["35 bricks", "40 bricks", "13 bricks", "45 bricks"],
        correctAnswer: "40 bricks",
        explanation: "Multiply rows by bricks per row: 5 × 8 = 40 bricks. Brick walls are typically arranged in rows and columns, making them perfect examples for multiplication.",
        wrongAnswerExplanations: {
            "35 bricks": "This is incorrect. 5 rows of 8 bricks would be 5 × 8 = 40 bricks.",
            "13 bricks": "This is incorrect. 5 rows of 8 bricks would be 5 × 8 = 40 bricks.",
            "45 bricks": "This would be correct for 5 rows of 9 bricks, not 8 bricks per row."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch1_t3_qe6',
        type: "mcq",
        question: "In a step pattern, the first row has 5 bricks, the second row has 4 bricks, and the third row has 3 bricks. How many bricks are used in total?",
        options: ["12 bricks", "13 bricks", "15 bricks", "10 bricks"],
        correctAnswer: "12 bricks",
        explanation: "Add all bricks: 5 + 4 + 3 = 12 bricks. When rows have different numbers of bricks, we need to add them individually or recognize the pattern.",
        wrongAnswerExplanations: {
            "13 bricks": "This is incorrect. The sum of 5 + 4 + 3 = 12 bricks.",
            "15 bricks": "This would be correct if each row had 5 bricks, but the rows decrease in size.",
            "10 bricks": "This is incorrect. The sum of 5 + 4 + 3 = 12 bricks."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch1_t3_qe7',
        type: "mcq",
        question: "A rectangular arrangement of bricks has 3 rows and 4 columns. How many bricks are there in total?",
        options: ["7 bricks", "12 bricks", "8 bricks", "10 bricks"],
        correctAnswer: "12 bricks",
        explanation: "Multiply rows by columns: 3 × 4 = 12 bricks. A rectangular arrangement is counted by multiplying the number of rows by the number of columns.",
        wrongAnswerExplanations: {
            "7 bricks": "This is incorrect. 3 rows × 4 columns = 12 bricks.",
            "8 bricks": "This is incorrect. 3 rows × 4 columns = 12 bricks.",
            "10 bricks": "This is incorrect. 3 rows × 4 columns = 12 bricks."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch1_t3_qe8',
        type: "mcq",
        question: "If you arrange 20 bricks in 5 equal rows, how many bricks will be in each row?",
        options: ["4 bricks", "5 bricks", "2 bricks", "10 bricks"],
        correctAnswer: "4 bricks",
        explanation: "Divide total bricks by number of rows: 20 ÷ 5 = 4 bricks per row. When we know the total and want equal rows, we use division.",
        wrongAnswerExplanations: {
            "5 bricks": "This is incorrect. 20 bricks divided into 5 equal rows gives 20 ÷ 5 = 4 bricks per row.",
            "2 bricks": "This is incorrect. 20 bricks divided into 5 equal rows gives 20 ÷ 5 = 4 bricks per row.",
            "10 bricks": "This is incorrect. 20 bricks divided into 5 equal rows gives 20 ÷ 5 = 4 bricks per row."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch1_t3_qe9',
        type: "mcq",
        question: "A triangular pattern of bricks has 1 brick in the first row, 2 bricks in the second row, and 3 bricks in the third row. How many bricks are used in total?",
        options: ["5 bricks", "6 bricks", "9 bricks", "4 bricks"],
        correctAnswer: "6 bricks",
        explanation: "Add all rows: 1 + 2 + 3 = 6 bricks. Triangular patterns often add one more brick to each row as we go down.",
        wrongAnswerExplanations: {
            "5 bricks": "This is incorrect. The sum of 1 + 2 + 3 = 6 bricks.",
            "9 bricks": "This would be correct if there were 3 rows with 3 bricks each.",
            "4 bricks": "This is incorrect. The sum of 1 + 2 + 3 = 6 bricks."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch1_t3_qe10',
        type: "mcq",
        question: "If each brick in a pattern is 10 cm long, and 8 bricks are arranged in a straight line, how long is the line?",
        options: ["18 cm", "80 cm", "8 cm", "800 cm"],
        correctAnswer: "80 cm",
        explanation: "Multiply number of bricks by length of each brick: 8 × 10 = 80 cm. When identical objects are arranged in a line, we multiply to find the total length.",
        wrongAnswerExplanations: {
            "18 cm": "This is incorrect. 8 bricks of 10 cm each would be 8 × 10 = 80 cm long.",
            "8 cm": "This is incorrect. 8 bricks of 10 cm each would be 8 × 10 = 80 cm long.",
            "800 cm": "This is incorrect. 8 bricks of 10 cm each would be 8 × 10 = 80 cm long."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch1_t3_qe11',
        type: "mcq",
        question: "How many bricks are needed to make a 2×3 rectangle pattern?",
        options: ["5 bricks", "6 bricks", "9 bricks", "12 bricks"],
        correctAnswer: "6 bricks",
        explanation: "Multiply rows by columns: 2 × 3 = 6 bricks. A 2×3 rectangle has 2 rows and 3 columns, for a total of 6 bricks.",
        wrongAnswerExplanations: {
            "5 bricks": "This is incorrect. A 2×3 rectangle needs 2 × 3 = 6 bricks.",
            "9 bricks": "This would be correct for a 3×3 square, not a 2×3 rectangle.",
            "12 bricks": "This would be correct for a 3×4 rectangle, not a 2×3 rectangle."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch1_t3_qe12',
        type: "mcq",
        question: "In a pattern, bricks are arranged in 4 rows with 6 bricks in each row. If 2 more bricks are added to each row, how many bricks will there be in total?",
        options: ["24 bricks", "32 bricks", "28 bricks", "30 bricks"],
        correctAnswer: "32 bricks",
        explanation: "First calculate the original total: 4 × 6 = 24 bricks. Then add the extra bricks: 4 × 2 = 8 more bricks. Total: 24 + 8 = 32 bricks.",
        wrongAnswerExplanations: {
            "24 bricks": "This was the original total before adding 2 more bricks to each row.",
            "28 bricks": "This is incorrect. The new total would be 4 rows × 8 bricks = 32 bricks.",
            "30 bricks": "This is incorrect. The new total would be 4 rows × 8 bricks = 32 bricks."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 40
    },
    {
        id: 'cl4_ch1_t3_qe13',
        type: "mcq",
        question: "If you have 30 bricks and arrange them in 6 equal rows, how many bricks will be in each row?",
        options: ["3 bricks", "5 bricks", "6 bricks", "10 bricks"],
        correctAnswer: "5 bricks",
        explanation: "Divide total bricks by number of rows: 30 ÷ 6 = 5 bricks per row. When we share evenly, we divide the total by the number of groups.",
        wrongAnswerExplanations: {
            "3 bricks": "This is incorrect. 30 bricks divided into 6 equal rows gives 30 ÷ 6 = 5 bricks per row.",
            "6 bricks": "This is incorrect. 30 bricks divided into 6 equal rows gives 30 ÷ 6 = 5 bricks per row.",
            "10 bricks": "This is incorrect. 30 bricks divided into 6 equal rows gives 30 ÷ 6 = 5 bricks per row."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch1_t3_qe14',
        type: "mcq",
        question: "A brick pattern has 3 rows. The first row has 5 bricks, the second row has 5 bricks, and the third row has 4 bricks. How many bricks are there in total?",
        options: ["12 bricks", "14 bricks", "15 bricks", "9 bricks"],
        correctAnswer: "14 bricks",
        explanation: "Add all rows: 5 + 5 + 4 = 14 bricks. When rows have different numbers of bricks, we add each row separately.",
        wrongAnswerExplanations: {
            "12 bricks": "This is incorrect. The sum of 5 + 5 + 4 = 14 bricks.",
            "15 bricks": "This would be correct if all 3 rows had 5 bricks each.",
            "9 bricks": "This is incorrect. The sum of 5 + 5 + 4 = 14 bricks."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch1_t3_qe15',
        type: "mcq",
        question: "If you arrange 24 bricks in 3 equal columns, how many bricks will be in each column?",
        options: ["8 bricks", "6 bricks", "12 bricks", "4 bricks"],
        correctAnswer: "8 bricks",
        explanation: "Divide total bricks by number of columns: 24 ÷ 3 = 8 bricks per column. When arranging equal columns, we divide the total by the number of columns.",
        wrongAnswerExplanations: {
            "6 bricks": "This is incorrect. 24 bricks divided into 3 equal columns gives 24 ÷ 3 = 8 bricks per column.",
            "12 bricks": "This is incorrect. 24 bricks divided into 3 equal columns gives 24 ÷ 3 = 8 bricks per column.",
            "4 bricks": "This is incorrect. 24 bricks divided into 3 equal columns gives 24 ÷ 3 = 8 bricks per column."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch1_t3_qe16',
        type: "mcq",
        question: "A brick pattern makes a square with 5 bricks on each side. How many bricks are used in total?",
        options: ["20 bricks", "10 bricks", "25 bricks", "15 bricks"],
        correctAnswer: "25 bricks",
        explanation: "Multiply length by width: 5 × 5 = 25 bricks. A square has equal sides, so we multiply the side length by itself to find the total number of bricks.",
        wrongAnswerExplanations: {
            "20 bricks": "This would be the perimeter of the square (4 × 5), not the total number of bricks.",
            "10 bricks": "This is incorrect. A 5×5 square contains 5 × 5 = 25 bricks.",
            "15 bricks": "This is incorrect. A 5×5 square contains 5 × 5 = 25 bricks."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch1_t3_qe17',
        type: "mcq",
        question: "In a brick pattern, there are 2 rows with 6 bricks each, and 2 rows with 5 bricks each. How many bricks are used in total?",
        options: ["20 bricks", "22 bricks", "24 bricks", "18 bricks"],
        correctAnswer: "22 bricks",
        explanation: "Calculate and add: (2 × 6) + (2 × 5) = 12 + 10 = 22 bricks. When different rows have different numbers of bricks, we calculate each group separately.",
        wrongAnswerExplanations: {
            "20 bricks": "This is incorrect. The total is (2 × 6) + (2 × 5) = 12 + 10 = 22 bricks.",
            "24 bricks": "This would be correct if all 4 rows had 6 bricks each.",
            "18 bricks": "This is incorrect. The total is (2 × 6) + (2 × 5) = 12 + 10 = 22 bricks."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch1_t3_qe18',
        type: "mcq",
        question: "If you have 35 bricks and arrange them in 7 equal rows, how many bricks will be in each row?",
        options: ["7 bricks", "5 bricks", "4 bricks", "6 bricks"],
        correctAnswer: "5 bricks",
        explanation: "Divide total bricks by number of rows: 35 ÷ 7 = 5 bricks per row. Division helps us find how many items go into each equal group.",
        wrongAnswerExplanations: {
            "7 bricks": "This is incorrect. 35 bricks divided into 7 equal rows gives 35 ÷ 7 = 5 bricks per row.",
            "4 bricks": "This is incorrect. 35 bricks divided into 7 equal rows gives 35 ÷ 7 = 5 bricks per row.",
            "6 bricks": "This is incorrect. 35 bricks divided into 7 equal rows gives 35 ÷ 7 = 5 bricks per row."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch1_t3_qe19',
        type: "mcq",
        question: "A brick wall pattern has 6 rows. Each row has 7 bricks. How many bricks are there in total?",
        options: ["42 bricks", "36 bricks", "13 bricks", "48 bricks"],
        correctAnswer: "42 bricks",
        explanation: "Multiply rows by bricks per row: 6 × 7 = 42 bricks. When we have equal rows, multiplication helps us find the total quickly.",
        wrongAnswerExplanations: {
            "36 bricks": "This would be correct for 6 rows of 6 bricks each, not 7 bricks per row.",
            "13 bricks": "This is incorrect. 6 rows of 7 bricks would be 6 × 7 = 42 bricks.",
            "48 bricks": "This would be correct for 6 rows of 8 bricks each, not 7 bricks per row."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch1_t3_qe20',
        type: "mcq",
        question: "In a pattern, the first row has 2 bricks, and each row after that has 2 more bricks than the row above it. How many bricks are in the 3rd row?",
        options: ["4 bricks", "6 bricks", "8 bricks", "10 bricks"],
        correctAnswer: "6 bricks",
        explanation: "First row: 2 bricks, Second row: 2 + 2 = 4 bricks, Third row: 4 + 2 = 6 bricks. This is a pattern where each row increases by 2 bricks.",
        wrongAnswerExplanations: {
            "4 bricks": "This is the number of bricks in the second row, not the third row.",
            "8 bricks": "This would be the number of bricks in the fourth row, not the third row.",
            "10 bricks": "This would be the number of bricks in the fifth row, not the third row."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 40
    }
]; 