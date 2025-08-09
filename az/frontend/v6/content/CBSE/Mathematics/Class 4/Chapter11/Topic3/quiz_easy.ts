import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl4_ch11_t3_qe1',
        type: "mcq",
        question: "If 15 ÷ 3 = 5, which multiplication fact helps us solve this division?",
        options: ["5 × 3 = 15", "3 × 5 = 15", "15 × 3 = 45", "15 × 5 = 75"],
        correctAnswer: "5 × 3 = 15",
        explanation: "Division is the inverse of multiplication. 15 ÷ 3 = 5 because 5 × 3 = 15. Multiplication tables help solve division problems. 🔢",
        wrongAnswerExplanations: {
            "3 × 5 = 15": "While this equation is true, it's written in a different order.",
            "15 × 3 = 45": "This equation is incorrect. 15 × 3 = 45, not 5.",
            "15 × 5 = 75": "This equation is unrelated to 15 ÷ 3."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch11_t3_qe2',
        type: "mcq",
        question: "What is 24 ÷ 6 using multiplication facts?",
        options: ["2", "4", "5", "6"],
        correctAnswer: "4",
        explanation: "To find 24 ÷ 6, we need to find what number multiplied by 6 equals 24. Since 6 × 4 = 24, the answer is 4. ✖️",
        wrongAnswerExplanations: {
            "2": "2 is incorrect because 6 × 2 = 12, not 24.",
            "5": "5 is incorrect because 6 × 5 = 30, not 24.",
            "6": "6 is incorrect because 6 × 6 = 36, not 24."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch11_t3_qe3',
        type: "mcq",
        question: "If we have 40 apples 🍎 and put them in 8 baskets with an equal number in each, how many apples will be in each basket?",
        options: ["5 apples", "8 apples", "4 apples", "32 apples"],
        correctAnswer: "5 apples",
        explanation: "We need to find 40 ÷ 8. Using the multiplication fact 5 × 8 = 40, we know that 40 ÷ 8 = 5. Each basket will have 5 apples. 🧺",
        wrongAnswerExplanations: {
            "8 apples": "8 is incorrect. If each basket had 8 apples, we would have 8 × 8 = 64 apples total, not 40.",
            "4 apples": "4 is incorrect. If each basket had 4 apples, we would have 8 × 4 = 32 apples total, not 40.",
            "32 apples": "32 is incorrect. This would be the total apples if we had 4 in each of 8 baskets."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 40
    },
    {
        id: 'cl4_ch11_t3_qe4',
        type: "mcq",
        question: "How can you use multiplication tables to solve 56 ÷ 7?",
        options: ["Find what number times 7 equals 56", "Add 7 and 56", "Subtract 7 from 56", "Find what number times 56 equals 7"],
        correctAnswer: "Find what number times 7 equals 56",
        explanation: "To solve division using multiplication tables, we find the number that, when multiplied by the divisor, gives the dividend. 7 × 8 = 56, so 56 ÷ 7 = 8. 📊",
        wrongAnswerExplanations: {
            "Add 7 and 56": "Adding gives 63, which isn't related to 56 ÷ 7.",
            "Subtract 7 from 56": "Subtracting gives 49, which isn't related to 56 ÷ 7.",
            "Find what number times 56 equals 7": "This approach is reversed and mathematically impossible."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch11_t3_qe5',
        type: "mcq",
        question: "If 7 × 6 = 42, what is 42 ÷ 6?",
        options: ["6", "7", "12", "42"],
        correctAnswer: "7",
        explanation: "Since 7 × 6 = 42, we know that 42 ÷ 6 = 7. Division and multiplication are inverse operations, so we can use multiplication facts to solve division problems. ➗",
        wrongAnswerExplanations: {
            "6": "6 is incorrect. 42 ÷ 6 is asking how many times 6 goes into 42, which is 7.",
            "12": "12 is incorrect. 6 × 12 = 72, not 42.",
            "42": "42 is incorrect. 42 is the dividend, not the quotient."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch11_t3_qe6',
        type: "mcq",
        question: "Mrs. Sharma has 27 pencils ✏️ to distribute equally among 9 students. How many pencils will each student get?",
        options: ["3 pencils", "9 pencils", "18 pencils", "27 pencils"],
        correctAnswer: "3 pencils",
        explanation: "We need to calculate 27 ÷ 9. Using multiplication tables, we know 3 × 9 = 27, so 27 ÷ 9 = 3. Each student will get 3 pencils. 📏",
        wrongAnswerExplanations: {
            "9 pencils": "9 is incorrect. If each student got 9 pencils, we would need 9 × 9 = 81 pencils total.",
            "18 pencils": "18 is incorrect. If each student got 18 pencils, we would need 9 × 18 = 162 pencils.",
            "27 pencils": "27 is incorrect. This is the total number of pencils, not what each student gets."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 40
    },
    {
        id: 'cl4_ch11_t3_qe7',
        type: "mcq",
        question: "Which multiplication fact helps you solve 32 ÷ 4?",
        options: ["4 × 8 = 32", "4 × 4 = 16", "8 × 4 = 32", "32 × 4 = 128"],
        correctAnswer: "8 × 4 = 32",
        explanation: "To solve 32 ÷ 4, we need to find what number times 4 equals 32. Since 8 × 4 = 32, we know that 32 ÷ 4 = 8. 🔢",
        wrongAnswerExplanations: {
            "4 × 8 = 32": "This equation is true, but written in a different order.",
            "4 × 4 = 16": "This equation is true but doesn't help solve 32 ÷ 4.",
            "32 × 4 = 128": "This equation is true but doesn't help solve 32 ÷ 4."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch11_t3_qe8',
        type: "mcq",
        question: "If 36 chocolates 🍫 are shared equally among 4 children, how many chocolates does each child get?",
        options: ["4", "9", "12", "36"],
        correctAnswer: "9",
        explanation: "We need to calculate 36 ÷ 4. Using multiplication tables, we know 9 × 4 = 36, so 36 ÷ 4 = 9. Each child gets 9 chocolates. 🧮",
        wrongAnswerExplanations: {
            "4": "4 is incorrect. If each child got 4 chocolates, we would have distributed only 4 × 4 = 16 chocolates total.",
            "12": "12 is incorrect. If each child got 12 chocolates, we would need 4 × 12 = 48 chocolates total.",
            "36": "36 is incorrect. This is the total number of chocolates, not what each child gets."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 40
    },
    {
        id: 'cl4_ch11_t3_qe9',
        type: "mcq",
        question: "What is 72 ÷ 9 using multiplication tables?",
        options: ["7", "8", "9", "12"],
        correctAnswer: "8",
        explanation: "To find 72 ÷ 9, we need to find what number multiplied by 9 equals 72. Since 8 × 9 = 72, the answer is 8. 📊",
        wrongAnswerExplanations: {
            "7": "7 is incorrect because 9 × 7 = 63, not 72.",
            "9": "9 is incorrect because 9 × 9 = 81, not 72.",
            "12": "12 is incorrect because 9 × 12 = 108, not 72."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch11_t3_qe10',
        type: "mcq",
        question: "A baker made 45 cookies 🍪 and packed them equally into 5 boxes. How many cookies are in each box?",
        options: ["5 cookies", "9 cookies", "40 cookies", "45 cookies"],
        correctAnswer: "9 cookies",
        explanation: "We need to calculate 45 ÷ 5. Using the multiplication fact 9 × 5 = 45, we know that 45 ÷ 5 = 9. Each box has 9 cookies. 📦",
        wrongAnswerExplanations: {
            "5 cookies": "5 is incorrect. If each box had 5 cookies, there would be only 5 × 5 = 25 cookies total.",
            "40 cookies": "40 is incorrect. This is almost the total number of cookies, not what goes in each box.",
            "45 cookies": "45 is incorrect. This is the total number of cookies, not what goes in each box."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 40
    },
    {
        id: 'cl4_ch11_t3_qe11',
        type: "mcq",
        question: "Which division problem is solved using the multiplication fact 7 × 6 = 42?",
        options: ["42 ÷ 6 = 7", "42 ÷ 7 = 6", "Both of the above", "None of the above"],
        correctAnswer: "Both of the above",
        explanation: "The multiplication fact 7 × 6 = 42 can be used to solve both 42 ÷ 6 = 7 and 42 ÷ 7 = 6. This shows how multiplication facts help solve division problems. ➗",
        wrongAnswerExplanations: {
            "42 ÷ 6 = 7": "This is correct, but it's not the only answer.",
            "42 ÷ 7 = 6": "This is correct, but it's not the only answer.",
            "None of the above": "This is incorrect. Both division problems are solved using the given multiplication fact."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch11_t3_qe12',
        type: "mcq",
        question: "If you know that 8 × 7 = 56, what division fact can you derive from this?",
        options: ["56 ÷ 8 = 7", "56 ÷ 7 = 8", "Both of the above", "None of the above"],
        correctAnswer: "Both of the above",
        explanation: "From 8 × 7 = 56, we can derive both 56 ÷ 8 = 7 and 56 ÷ 7 = 8. This relationship between multiplication and division helps in solving problems. 🔢",
        wrongAnswerExplanations: {
            "56 ÷ 8 = 7": "This is correct, but it's not the only answer.",
            "56 ÷ 7 = 8": "This is correct, but it's not the only answer.",
            "None of the above": "This is incorrect. Both division facts can be derived from the given multiplication fact."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch11_t3_qe13',
        type: "mcq",
        question: "A librarian has 63 books 📚 and wants to arrange them equally on 7 shelves. How many books will be on each shelf?",
        options: ["7 books", "9 books", "49 books", "63 books"],
        correctAnswer: "9 books",
        explanation: "We need to calculate 63 ÷ 7. Using multiplication tables, we know 9 × 7 = 63, so 63 ÷ 7 = 9. Each shelf will have 9 books. 📚",
        wrongAnswerExplanations: {
            "7 books": "7 is incorrect. If each shelf had 7 books, we would have only 7 × 7 = 49 books total.",
            "49 books": "49 is incorrect. This would be 7² or 7 × 7, not 63 ÷ 7.",
            "63 books": "63 is incorrect. This is the total number of books, not what goes on each shelf."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 40
    },
    {
        id: 'cl4_ch11_t3_qe14',
        type: "mcq",
        question: "What is 81 ÷ 9 using the 9 times table?",
        options: ["7", "8", "9", "10"],
        correctAnswer: "9",
        explanation: "To find 81 ÷ 9, we need to know what number multiplied by 9 equals 81. From the 9 times table, 9 × 9 = 81, so 81 ÷ 9 = 9. 🧮",
        wrongAnswerExplanations: {
            "7": "7 is incorrect because 9 × 7 = 63, not 81.",
            "8": "8 is incorrect because 9 × 8 = 72, not 81.",
            "10": "10 is incorrect because 9 × 10 = 90, not 81."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch11_t3_qe15',
        type: "mcq",
        question: "A fruit vendor has 48 oranges 🍊 to be packed equally in 6 bags. How many oranges will be in each bag?",
        options: ["6 oranges", "8 oranges", "12 oranges", "48 oranges"],
        correctAnswer: "8 oranges",
        explanation: "We need to calculate 48 ÷ 6. Using multiplication tables, we know 8 × 6 = 48, so 48 ÷ 6 = 8. Each bag will have 8 oranges. 🛍️",
        wrongAnswerExplanations: {
            "6 oranges": "6 is incorrect. If each bag had 6 oranges, we would have only 6 × 6 = 36 oranges total.",
            "12 oranges": "12 is incorrect. If each bag had 12 oranges, we would need 6 × 12 = 72 oranges total.",
            "48 oranges": "48 is incorrect. This is the total number of oranges, not what goes in each bag."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 40
    },
    {
        id: 'cl4_ch11_t3_qe16',
        type: "mcq",
        question: "Which multiplication fact helps solve 54 ÷ 6?",
        options: ["6 × 9 = 54", "6 × 8 = 48", "9 × 6 = 54", "54 × 6 = 324"],
        correctAnswer: "9 × 6 = 54",
        explanation: "To solve 54 ÷ 6, we need to find what number times 6 equals 54. Since 9 × 6 = 54, we know that 54 ÷ 6 = 9. ✖️",
        wrongAnswerExplanations: {
            "6 × 9 = 54": "This equation is true, but written in a different order.",
            "6 × 8 = 48": "This equation is true but doesn't help solve 54 ÷ 6.",
            "54 × 6 = 324": "This equation is true but doesn't help solve 54 ÷ 6."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch11_t3_qe17',
        type: "mcq",
        question: "If 35 children are divided equally into 5 teams, how many children will be in each team?",
        options: ["5 children", "7 children", "30 children", "35 children"],
        correctAnswer: "7 children",
        explanation: "We need to calculate 35 ÷ 5. Using multiplication tables, we know 7 × 5 = 35, so 35 ÷ 5 = 7. Each team will have 7 children. 👫",
        wrongAnswerExplanations: {
            "5 children": "5 is incorrect. If each team had 5 children, we would have only 5 × 5 = 25 children total.",
            "30 children": "30 is incorrect. This is not equal to 35 and doesn't answer the question.",
            "35 children": "35 is incorrect. This is the total number of children, not what goes in each team."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 40
    },
    {
        id: 'cl4_ch11_t3_qe18',
        type: "mcq",
        question: "What is 49 ÷ 7 using multiplication tables?",
        options: ["6", "7", "8", "9"],
        correctAnswer: "7",
        explanation: "To find 49 ÷ 7, we need to find what number multiplied by 7 equals 49. Since 7 × 7 = 49, the answer is 7. 🔢",
        wrongAnswerExplanations: {
            "6": "6 is incorrect because 7 × 6 = 42, not 49.",
            "8": "8 is incorrect because 7 × 8 = 56, not 49.",
            "9": "9 is incorrect because 7 × 9 = 63, not 49."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch11_t3_qe19',
        type: "mcq",
        question: "A teacher distributes 64 color pencils 🖌️ equally among 8 groups. How many color pencils does each group get?",
        options: ["7", "8", "16", "64"],
        correctAnswer: "8",
        explanation: "We need to calculate 64 ÷ 8. Using multiplication tables, we know 8 × 8 = 64, so 64 ÷ 8 = 8. Each group gets 8 color pencils. 🎨",
        wrongAnswerExplanations: {
            "7": "7 is incorrect. If each group got 7 pencils, we would have distributed only 8 × 7 = 56 pencils total.",
            "16": "16 is incorrect. If each group got 16 pencils, we would need 8 × 16 = 128 pencils total.",
            "64": "64 is incorrect. This is the total number of pencils, not what each group gets."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 40
    },
    {
        id: 'cl4_ch11_t3_qe20',
        type: "mcq",
        question: "If you know that 6 × 4 = 24, which division problem can be solved using this fact?",
        options: ["24 ÷ 4 = 6", "24 ÷ 6 = 4", "Both of the above", "None of the above"],
        correctAnswer: "Both of the above",
        explanation: "From 6 × 4 = 24, we can solve both 24 ÷ 4 = 6 and 24 ÷ 6 = 4. Understanding this relationship helps in using multiplication tables for division. ➗",
        wrongAnswerExplanations: {
            "24 ÷ 4 = 6": "This is correct, but it's not the only answer.",
            "24 ÷ 6 = 4": "This is correct, but it's not the only answer.",
            "None of the above": "This is incorrect. Both division problems can be solved using the given multiplication fact."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 45
    }
];
