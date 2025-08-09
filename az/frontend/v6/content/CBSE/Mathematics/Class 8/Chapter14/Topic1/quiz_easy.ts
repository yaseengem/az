import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl8_ch14_t1_qe1',
        type: "mcq",
        question: "What is the next number in the pattern: 2, 6, 12, 20, 30, __?",
        options: ["36", "42", "40", "44"],
        correctAnswer: "42",
        explanation: "The pattern adds consecutive even numbers: +4, +6, +8, +10, +12. So 30 + 12 = 42. 🔢",
        wrongAnswerExplanations: {
            "36": "This would be adding 6 each time, but the pattern adds increasing even numbers.",
            "40": "This would be adding 10 again, but the pattern increases the addition each time.",
            "44": "This overshoots the pattern by adding 14 instead of 12."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch14_t1_qe2',
        type: "mcq",
        question: "In a magic square, each row, column, and diagonal sum to the same number. If one row is [4, 9, 2], what is the magic sum?",
        options: ["12", "15", "18", "21"],
        correctAnswer: "15",
        explanation: "The sum of numbers in any row of a magic square gives the magic sum. 4 + 9 + 2 = 15. 🎯",
        wrongAnswerExplanations: {
            "12": "This is less than the actual sum of the given row (4 + 9 + 2 = 15).",
            "18": "This exceeds the sum of the given row (4 + 9 + 2 = 15).",
            "21": "This is much larger than the sum of the given row (4 + 9 + 2 = 15)."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch14_t1_qe3',
        type: "mcq",
        question: "What number should replace ? in the sequence: 1, 8, 27, 64, ?",
        options: ["125", "100", "81", "120"],
        correctAnswer: "125",
        explanation: "These are perfect cubes: 1³, 2³, 3³, 4³, 5³. So the next number is 5³ = 125. 🧊",
        wrongAnswerExplanations: {
            "100": "This is 10², but the pattern uses cubes, not squares.",
            "81": "This is 9², but the pattern uses cubes, not squares.",
            "120": "This doesn't follow any clear pattern."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch14_t1_qe4',
        type: "mcq",
        question: "If a number puzzle has: A + B = 15 and A × B = 54, what is the value of A?",
        options: ["6", "9", "7", "8"],
        correctAnswer: "6",
        explanation: "If A + B = 15 and A × B = 54, then A and B are 6 and 9, as these are the only numbers that satisfy both conditions. 🧩",
        wrongAnswerExplanations: {
            "9": "If A = 9, then B = 6, but 9 × 6 = 54 and 9 + 6 = 15, so this could also be B's value.",
            "7": "7 + 8 = 15 but 7 × 8 = 56, not 54.",
            "8": "8 + 7 = 15 but 8 × 7 = 56, not 54."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 40
    },
    {
        id: 'cl8_ch14_t1_qe5',
        type: "mcq",
        question: "What is the missing number in the pattern: 16, 25, 36, ?, 64",
        options: ["45", "49", "51", "54"],
        correctAnswer: "49",
        explanation: "These are perfect squares: 4², 5², 6², 7², 8². The missing number is 7² = 49. 📐",
        wrongAnswerExplanations: {
            "45": "This doesn't follow the square number pattern.",
            "51": "This is not a perfect square number.",
            "54": "This is not a perfect square number."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch14_t1_qe6',
        type: "mcq",
        question: "In a number pattern, each number is triple the previous number minus 1. If it starts with 2, what's the third number?",
        options: ["15", "16", "17", "18"],
        correctAnswer: "16",
        explanation: "Starting with 2: First → 2, Second → (2 × 3) - 1 = 5, Third → (5 × 3) - 1 = 16. 🔄",
        wrongAnswerExplanations: {
            "15": "This would be (5 × 3) - 2, but we subtract 1, not 2.",
            "17": "This would be (5 × 3) + 0, but we need to subtract 1.",
            "18": "This would be (5 × 3) + 1, but we need to subtract 1."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch14_t1_qe7',
        type: "mcq",
        question: "What number completes the pattern: 3, 6, 11, 18, 27, ?",
        options: ["38", "36", "37", "39"],
        correctAnswer: "38",
        explanation: "The pattern adds increasing numbers: +3, +5, +7, +9, +11. So 27 + 11 = 38. 📈",
        wrongAnswerExplanations: {
            "36": "This would mean adding 9 again, but the pattern increases by 2 each time.",
            "37": "This doesn't follow the pattern of adding increasing odd numbers.",
            "39": "This would mean adding 12, but the pattern adds 11."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch14_t1_qe8',
        type: "mcq",
        question: "If ABCD is a 4-digit number where A + B + C + D = 15 and A > B > C > D, what is the smallest possible value of A?",
        options: ["3", "4", "5", "6"],
        correctAnswer: "6",
        explanation: "For descending digits summing to 15, the smallest possible combination is 6321. Any smaller first digit won't allow three smaller descending digits to sum to 15. 🔢",
        wrongAnswerExplanations: {
            "3": "With A=3, the remaining digits can't be both smaller and sum to 12.",
            "4": "With A=4, the remaining digits can't be both smaller and sum to 11.",
            "5": "With A=5, the remaining digits can't be both smaller and sum to 10."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch14_t1_qe9',
        type: "mcq",
        question: "What is the next letter pair in the pattern: AB, CD, EF, GH, ?",
        options: ["IJ", "JK", "KL", "IK"],
        correctAnswer: "IJ",
        explanation: "The pattern shows consecutive letter pairs: A&B, C&D, E&F, G&H, so I&J comes next. 📝",
        wrongAnswerExplanations: {
            "JK": "This skips 'I' which should come after 'H'.",
            "KL": "This skips both 'I' and 'J'.",
            "IK": "This skips 'J' which should pair with 'I'."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch14_t1_qe10',
        type: "mcq",
        question: "In a sequence where each number is the sum of the previous three numbers, if the first three numbers are 1, 2, 3, what is the fifth number?",
        options: ["10", "11", "12", "13"],
        correctAnswer: "11",
        explanation: "1, 2, 3, 6 (1+2+3), 11 (2+3+6). Each number is the sum of the previous three numbers. 🧮",
        wrongAnswerExplanations: {
            "10": "This would be incorrect as 2 + 3 + 6 = 11.",
            "12": "This exceeds the sum of the previous three numbers (2 + 3 + 6 = 11).",
            "13": "This is too large as the sum of the previous three numbers is 11."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch14_t1_qe11',
        type: "mcq",
        question: "What is the next shape in the pattern: ▲, ▲▲, ▲▲▲, ▲▲▲▲, ?",
        options: ["▲▲▲", "▲▲▲▲▲", "▲▲", "▲"],
        correctAnswer: "▲▲▲▲▲",
        explanation: "The pattern adds one triangle in each step: 1, 2, 3, 4, so next is 5 triangles. 📐",
        wrongAnswerExplanations: {
            "▲▲▲": "This would be going backwards in the pattern.",
            "▲▲": "This would be decreasing instead of increasing.",
            "▲": "This would be going back to the start."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch14_t1_qe12',
        type: "mcq",
        question: "In a number pattern where each term is double the previous term plus 1, if the first term is 3, what is the fourth term?",
        options: ["29", "31", "33", "35"],
        correctAnswer: "31",
        explanation: "3 → (3×2)+1=7 → (7×2)+1=15 → (15×2)+1=31. Each term doubles and adds 1. 🔄",
        wrongAnswerExplanations: {
            "29": "This would be if we added 2 instead of 1 after doubling.",
            "33": "This would be if we added 3 instead of 1 after doubling.",
            "35": "This would be if we added 5 instead of 1 after doubling."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch14_t1_qe13',
        type: "mcq",
        question: "What number comes next: 1, 1, 2, 3, 5, 8, 13, ?",
        options: ["18", "20", "21", "22"],
        correctAnswer: "21",
        explanation: "This is a Fibonacci sequence where each number is the sum of the previous two: 8 + 13 = 21. 🧮",
        wrongAnswerExplanations: {
            "18": "This would be adding 5 to 13, but we need to add the previous two numbers.",
            "20": "This would be adding 7 to 13, but we need to add the previous two numbers.",
            "22": "This would be adding 9 to 13, but we need to add the previous two numbers."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch14_t1_qe14',
        type: "mcq",
        question: "If the pattern is: +2, +4, +6, +8, what number comes after 20?",
        options: ["26", "28", "30", "32"],
        correctAnswer: "30",
        explanation: "The pattern adds increasing even numbers. After 20, we add 10 to get 30. 📈",
        wrongAnswerExplanations: {
            "26": "This would be adding 6 again, but the pattern increases by 2 each time.",
            "28": "This would be adding 8 again, but we need to add 10.",
            "32": "This would be adding 12, but we need to add 10."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch14_t1_qe15',
        type: "mcq",
        question: "What is the sum of all single digits that make a number divisible by 3 when placed in □: 2□5?",
        options: ["12", "15", "18", "21"],
        correctAnswer: "12",
        explanation: "The digits that work are 1, 2, 5, and 4 (making 215, 225, 255, 245). Their sum is 12. 🔢",
        wrongAnswerExplanations: {
            "15": "This includes digits that don't make the number divisible by 3.",
            "18": "This includes digits that don't make the number divisible by 3.",
            "21": "This includes digits that don't make the number divisible by 3."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch14_t1_qe16',
        type: "mcq",
        question: "In the pattern 2, 4, 8, 16, 32, what operation is being performed each time?",
        options: ["Adding 2", "Multiplying by 2", "Adding the previous number", "Squaring"],
        correctAnswer: "Multiplying by 2",
        explanation: "Each number is doubled to get the next: 2×2=4, 4×2=8, 8×2=16, 16×2=32. 🔄",
        wrongAnswerExplanations: {
            "Adding 2": "Adding 2 would give 2, 4, 6, 8, 10.",
            "Adding the previous number": "This would give 2, 4, 6, 10, 16.",
            "Squaring": "Squaring would give 2, 4, 16, 256."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch14_t1_qe17',
        type: "mcq",
        question: "What is the missing number in the sequence: 1, 4, 7, __, 13, 16?",
        options: ["9", "10", "11", "12"],
        correctAnswer: "10",
        explanation: "The pattern adds 3 each time: 1+3=4, 4+3=7, 7+3=10, 10+3=13, 13+3=16. 📊",
        wrongAnswerExplanations: {
            "9": "This would mean adding 2 instead of 3.",
            "11": "This would mean adding 4 instead of 3.",
            "12": "This would mean adding 5 instead of 3."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch14_t1_qe18',
        type: "mcq",
        question: "Which number does NOT belong in the sequence: 3, 6, 12, 15, 24, 48?",
        options: ["6", "15", "24", "48"],
        correctAnswer: "15",
        explanation: "The pattern should multiply by 2 each time. 15 breaks this pattern as 12×2=24. 🎯",
        wrongAnswerExplanations: {
            "6": "6 fits the pattern as 3×2=6.",
            "24": "24 fits the pattern as 12×2=24.",
            "48": "48 fits the pattern as 24×2=48."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch14_t1_qe19',
        type: "mcq",
        question: "What comes next in the letter pattern: A1, B2, C3, D4, ?",
        options: ["E4", "E5", "F5", "D5"],
        correctAnswer: "E5",
        explanation: "Letters increase alphabetically (A→B→C→D→E) and numbers increase by 1 (1→2→3→4→5). 📝",
        wrongAnswerExplanations: {
            "E4": "The number should increase to 5, not stay at 4.",
            "F5": "The letter should be E, not F.",
            "D5": "The letter should increase to E, not stay at D."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch14_t1_qe20',
        type: "mcq",
        question: "If ◯=2, □=4, and △=7, what is the value of ◯+□+△+◯?",
        options: ["13", "15", "17", "19"],
        correctAnswer: "15",
        explanation: "Replace symbols with values: 2+4+7+2 = 15. 🔢",
        wrongAnswerExplanations: {
            "13": "This would be if ◯=1 instead of 2.",
            "17": "This would be if ◯=3 instead of 2.",
            "19": "This would be if □=6 instead of 4."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    }
]; 