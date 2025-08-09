import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl4_ch11_t2_qm1',
        type: "mcq",
        question: "A farmer arranges 48 tomatoes 🍅 equally in 6 rows. After selling 2 tomatoes from each row, how many tomatoes are left?",
        options: ["24", "36", "42", "46"],
        correctAnswer: "36",
        explanation: "First, find tomatoes per row: 48 ÷ 6 = 8. After selling 2 from each row, 6 remain in each row. Total: 6 × 6 = 36 tomatoes left.",
        wrongAnswerExplanations: {
            "24": "This is incorrect. There were 8 tomatoes per row, and 2 were sold from each row, leaving 6 per row. 6 × 6 = 36, not 24.",
            "42": "This is incorrect. 2 tomatoes were sold from each of the 6 rows, so 12 tomatoes were sold. 48 - 12 = 36, not 42.",
            "46": "This is incorrect. The calculation is 48 - (6 × 2) = 48 - 12 = 36, not 46."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch11_t2_qm2',
        type: "mcq",
        question: "A bookshelf has 4 shelves with 7 books on each shelf. If 5 more books are added to each shelf, how many books are there in total now?",
        options: ["28", "32", "48", "52"],
        correctAnswer: "48",
        explanation: "Initially: 4 × 7 = 28 books. After adding 5 books per shelf: 4 × (7 + 5) = 4 × 12 = 48 books total.",
        wrongAnswerExplanations: {
            "28": "This is incorrect. This was the initial number of books before adding more.",
            "32": "This is incorrect. You might have added just 4 books total instead of 5 books to each of the 4 shelves.",
            "52": "This is incorrect. The calculation is 4 × (7 + 5) = 48, not 52."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch11_t2_qm3',
        type: "mcq",
        question: "A classroom has 6 equal rows of chairs. If there are 36 chairs in total and 2 more chairs are added to each row, how many chairs will there be?",
        options: ["42", "46", "48", "52"],
        correctAnswer: "48",
        explanation: "Initially, each row had 36 ÷ 6 = 6 chairs. Adding 2 more to each row means 8 chairs per row. Total: 6 × 8 = 48 chairs.",
        wrongAnswerExplanations: {
            "42": "This is incorrect. You might have only added 6 chairs total instead of 2 chairs to each of the 6 rows.",
            "46": "This is incorrect. The calculation is 36 + (6 × 2) = 36 + 12 = 48, not 46.",
            "52": "This is incorrect. The calculation is 36 + (6 × 2) = 36 + 12 = 48, not 52."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch11_t2_qm4',
        type: "mcq",
        question: "A fruit vendor arranges 45 mangoes 🥭 in 5 equal rows. If he sells 2 rows completely, how many mangoes are left?",
        options: ["18", "21", "27", "36"],
        correctAnswer: "27",
        explanation: "Each row has 45 ÷ 5 = 9 mangoes. If 2 rows are sold, then 3 rows remain. Total remaining: 3 × 9 = 27 mangoes.",
        wrongAnswerExplanations: {
            "18": "This is incorrect. Each row has 9 mangoes, and 3 rows remain. 3 × 9 = 27, not 18.",
            "21": "This is incorrect. The calculation is 5 - 2 = 3 rows remaining, and 3 × 9 = 27, not 21.",
            "36": "This is incorrect. Two rows containing 18 mangoes were sold, so 45 - 18 = 27 mangoes remain, not 36."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch11_t2_qm5',
        type: "mcq",
        question: "In a garden, 30 plants are arranged in rows with 6 plants in each row. If 12 more plants are added and arranged in the same way, how many rows will there be in total?",
        options: ["5", "7", "8", "10"],
        correctAnswer: "7",
        explanation: "Initially: 30 ÷ 6 = 5 rows. After adding 12 plants: 30 + 12 = 42 plants. Total rows: 42 ÷ 6 = 7 rows.",
        wrongAnswerExplanations: {
            "5": "This is incorrect. This was the initial number of rows before adding more plants.",
            "8": "This is incorrect. The calculation is (30 + 12) ÷ 6 = 42 ÷ 6 = 7, not 8.",
            "10": "This is incorrect. The calculation is (30 + 12) ÷ 6 = 42 ÷ 6 = 7, not 10."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch11_t2_qm6',
        type: "mcq",
        question: "A teacher arranges 40 notebooks in rows of 8. If she removes 1 notebook from each row, how many notebooks will be left?",
        options: ["32", "35", "36", "39"],
        correctAnswer: "35",
        explanation: "Initially: 40 ÷ 8 = 5 rows. After removing 1 notebook from each row: 40 - 5 = 35 notebooks remain.",
        wrongAnswerExplanations: {
            "32": "This is incorrect. The calculation is 40 - 5 = 35, not 32.",
            "36": "This is incorrect. 1 notebook is removed from each of the 5 rows, so 40 - 5 = 35, not 36.",
            "39": "This is incorrect. The calculation is 40 - 5 = 35, not 39."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch11_t2_qm7',
        type: "mcq",
        question: "A classroom has 6 columns with 5 desks in each column. If 2 more columns with the same number of desks are added, how many desks will there be in total?",
        options: ["30", "40", "42", "48"],
        correctAnswer: "40",
        explanation: "Initially: 6 × 5 = 30 desks. Adding 2 more columns: (6 + 2) × 5 = 8 × 5 = 40 desks total.",
        wrongAnswerExplanations: {
            "30": "This is incorrect. This was the initial number of desks before adding more columns.",
            "42": "This is incorrect. The calculation is (6 + 2) × 5 = 40, not 42.",
            "48": "This is incorrect. The calculation is (6 + 2) × 5 = 40, not 48."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch11_t2_qm8',
        type: "mcq",
        question: "In a school, 56 students are standing in 7 equal rows. If 2 students leave from each row, how many students remain?",
        options: ["42", "49", "52", "54"],
        correctAnswer: "42",
        explanation: "Initially each row had 56 ÷ 7 = 8 students. After 2 students leave from each row: 56 - (7 × 2) = 56 - 14 = 42 students remain.",
        wrongAnswerExplanations: {
            "49": "This is incorrect. 7 rows with 2 students leaving each row means 14 students leave in total, so 56 - 14 = 42.",
            "52": "This is incorrect. The calculation is 56 - (7 × 2) = 56 - 14 = 42, not 52.",
            "54": "This is incorrect. The calculation is 56 - (7 × 2) = 56 - 14 = 42, not 54."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch11_t2_qm9',
        type: "mcq",
        question: "Rahul arranges 24 marbles in 4 equal rows. Sita arranges her 32 marbles in 4 equal rows. How many more marbles are there in each of Sita's rows compared to Rahul's?",
        options: ["2", "4", "6", "8"],
        correctAnswer: "2",
        explanation: "Rahul's rows: 24 ÷ 4 = 6 marbles per row. Sita's rows: 32 ÷ 4 = 8 marbles per row. Difference: 8 - 6 = 2 marbles.",
        wrongAnswerExplanations: {
            "4": "This is incorrect. The calculation is (32 ÷ 4) - (24 ÷ 4) = 8 - 6 = 2, not 4.",
            "6": "This is incorrect. Rahul has 6 marbles per row, but the question asks for the difference.",
            "8": "This is incorrect. Sita has 8 marbles per row, but the question asks for the difference."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch11_t2_qm10',
        type: "mcq",
        question: "A teacher has 42 pencils ✏️ to be distributed equally among 6 groups of students. If each group gets 2 extra pencils, how many pencils will the teacher need in total?",
        options: ["44", "52", "54", "60"],
        correctAnswer: "54",
        explanation: "Initially: 42 ÷ 6 = 7 pencils per group. Adding 2 extra: 7 + 2 = 9 pencils per group. Total needed: 6 × 9 = 54 pencils.",
        wrongAnswerExplanations: {
            "44": "This is incorrect. The teacher needs 2 extra pencils for each of the 6 groups, so 42 + (6 × 2) = 42 + 12 = 54.",
            "52": "This is incorrect. The calculation is 42 + (6 × 2) = 42 + 12 = 54, not 52.",
            "60": "This is incorrect. The calculation is 42 + (6 × 2) = 42 + 12 = 54, not 60."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch11_t2_qm11',
        type: "mcq",
        question: "A fruit seller has 64 apples 🍎 arranged in 8 equal rows. If he sells 3 apples from each row, how many apples will he have left?",
        options: ["24", "32", "40", "48"],
        correctAnswer: "40",
        explanation: "Initially each row had 64 ÷ 8 = 8 apples. After selling 3 from each row: 64 - (8 × 3) = 64 - 24 = 40 apples remain.",
        wrongAnswerExplanations: {
            "24": "This is incorrect. This is the number of apples sold (8 × 3), not the number remaining.",
            "32": "This is incorrect. The calculation is 64 - (8 × 3) = 64 - 24 = 40, not 32.",
            "48": "This is incorrect. The calculation is 64 - (8 × 3) = 64 - 24 = 40, not 48."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch11_t2_qm12',
        type: "mcq",
        question: "In a parking lot, 35 cars are parked in 5 equal rows. If 3 more cars are added to each row, how many cars will there be in total?",
        options: ["38", "40", "50", "60"],
        correctAnswer: "50",
        explanation: "Initially: 35 ÷ 5 = 7 cars per row. After adding 3 more: 5 × (7 + 3) = 5 × 10 = 50 cars total.",
        wrongAnswerExplanations: {
            "38": "This is incorrect. You might have added only 3 cars total instead of 3 cars to each of the 5 rows.",
            "40": "This is incorrect. The calculation is 35 + (5 × 3) = 35 + 15 = 50, not 40.",
            "60": "This is incorrect. The calculation is 35 + (5 × 3) = 35 + 15 = 50, not 60."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch11_t2_qm13',
        type: "mcq",
        question: "A gardener plants 48 flowers 🌸 in 6 equal rows. If she adds 2 more rows with the same number of flowers, how many flowers will there be in total?",
        options: ["56", "64", "72", "96"],
        correctAnswer: "64",
        explanation: "Initially each row has 48 ÷ 6 = 8 flowers. Adding 2 more rows: (6 + 2) × 8 = 8 × 8 = 64 flowers total.",
        wrongAnswerExplanations: {
            "56": "This is incorrect. The calculation is (6 + 2) × 8 = 64, not 56.",
            "72": "This is incorrect. The calculation is (6 + 2) × 8 = 64, not 72.",
            "96": "This is incorrect. The calculation is (6 + 2) × 8 = 64, not 96."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch11_t2_qm14',
        type: "mcq",
        question: "A shopkeeper has 60 chocolates 🍫 arranged in rows with 10 chocolates in each row. If he rearranges them into rows with 6 chocolates each, how many rows will he have now?",
        options: ["6", "10", "12", "16"],
        correctAnswer: "10",
        explanation: "Initially: 60 ÷ 10 = 6 rows. After rearranging: 60 ÷ 6 = 10 rows with 6 chocolates each.",
        wrongAnswerExplanations: {
            "6": "This is incorrect. This was the initial number of rows before rearranging.",
            "12": "This is incorrect. The calculation is 60 ÷ 6 = 10, not 12.",
            "16": "This is incorrect. The calculation is 60 ÷ 6 = 10, not 16."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch11_t2_qm15',
        type: "mcq",
        question: "In a library, 72 books 📚 are arranged in 9 equal shelves. If 2 books are removed from each shelf, how many books will remain?",
        options: ["54", "56", "62", "63"],
        correctAnswer: "54",
        explanation: "Initially each shelf had 72 ÷ 9 = 8 books. After removing 2 from each shelf: 72 - (9 × 2) = 72 - 18 = 54 books remain.",
        wrongAnswerExplanations: {
            "56": "This is incorrect. The calculation is 72 - (9 × 2) = 72 - 18 = 54, not 56.",
            "62": "This is incorrect. The calculation is 72 - (9 × 2) = 72 - 18 = 54, not 62.",
            "63": "This is incorrect. The calculation is 72 - (9 × 2) = 72 - 18 = 54, not 63."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch11_t2_qm16',
        type: "mcq",
        question: "A school has 50 computers arranged in 5 equal rows. If they add 2 more computers to each row, how many computers will there be in total?",
        options: ["52", "60", "70", "80"],
        correctAnswer: "60",
        explanation: "Initially each row had 50 ÷ 5 = 10 computers. After adding 2 more to each row: 5 × (10 + 2) = 5 × 12 = 60 computers total.",
        wrongAnswerExplanations: {
            "52": "This is incorrect. You might have added only 2 computers total instead of 2 computers to each of the 5 rows.",
            "70": "This is incorrect. The calculation is 50 + (5 × 2) = 50 + 10 = 60, not 70.",
            "80": "This is incorrect. The calculation is 50 + (5 × 2) = 50 + 10 = 60, not 80."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch11_t2_qm17',
        type: "mcq",
        question: "A farmer has 54 plants in 6 equal rows. If he adds 2 more rows with the same number of plants, what will be the total number of plants?",
        options: ["63", "72", "81", "108"],
        correctAnswer: "72",
        explanation: "Initially each row has 54 ÷ 6 = 9 plants. Adding 2 more rows: (6 + 2) × 9 = 8 × 9 = 72 plants total.",
        wrongAnswerExplanations: {
            "63": "This is incorrect. The calculation is (6 + 2) × 9 = 72, not 63.",
            "81": "This is incorrect. The calculation is (6 + 2) × 9 = 72, not 81.",
            "108": "This is incorrect. The calculation is (6 + 2) × 9 = 72, not 108."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch11_t2_qm18',
        type: "mcq",
        question: "A classroom has 32 students sitting in 4 equal rows. If 3 students are added to each row, how many students will there be in total?",
        options: ["35", "44", "48", "56"],
        correctAnswer: "44",
        explanation: "Initially each row had 32 ÷ 4 = 8 students. After adding 3 more to each row: 4 × (8 + 3) = 4 × 11 = 44 students total.",
        wrongAnswerExplanations: {
            "35": "This is incorrect. You might have added only 3 students total instead of 3 students to each of the 4 rows.",
            "48": "This is incorrect. The calculation is 32 + (4 × 3) = 32 + 12 = 44, not 48.",
            "56": "This is incorrect. The calculation is 32 + (4 × 3) = 32 + 12 = 44, not 56."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch11_t2_qm19',
        type: "mcq",
        question: "A shopkeeper has 40 oranges 🍊 arranged in 8 equal rows. If he sells half of the oranges from each row, how many oranges will he have left?",
        options: ["10", "16", "20", "24"],
        correctAnswer: "20",
        explanation: "Initially each row had 40 ÷ 8 = 5 oranges. After selling half from each row: 40 - (8 × 5 ÷ 2) = 40 - 20 = 20 oranges remain.",
        wrongAnswerExplanations: {
            "10": "This is incorrect. The calculation is 40 ÷ 2 = 20, not 10.",
            "16": "This is incorrect. The calculation is 40 - (8 × 5 ÷ 2) = 40 - 20 = 20, not 16.",
            "24": "This is incorrect. The calculation is 40 - (8 × 5 ÷ 2) = 40 - 20 = 20, not 24."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch11_t2_qm20',
        type: "mcq",
        question: "A theater has 9 rows with 8 seats in each row. If 3 more seats are added to each row, how many seats will the theater have in total?",
        options: ["72", "81", "90", "99"],
        correctAnswer: "99",
        explanation: "Initially: 9 × 8 = 72 seats. After adding 3 more seats to each row: 9 × (8 + 3) = 9 × 11 = 99 seats total.",
        wrongAnswerExplanations: {
            "72": "This is incorrect. This was the initial number of seats before adding more.",
            "81": "This is incorrect. The calculation is 72 + (9 × 3) = 72 + 27 = 99, not 81.",
            "90": "This is incorrect. The calculation is 72 + (9 × 3) = 72 + 27 = 99, not 90."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    }
];
