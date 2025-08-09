import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl4_ch11_t3_qm1',
        type: "mcq",
        question: "Which multiplication table fact helps us find the answer to 84 ÷ 7?",
        options: ["7 × 10 = 70", "7 × 11 = 77", "7 × 12 = 84", "7 × 14 = 98"],
        correctAnswer: "7 × 12 = 84",
        explanation: "To solve 84 ÷ 7, we need to find what number times 7 equals 84. Since 7 × 12 = 84, the quotient of 84 ÷ 7 is 12. 🔢",
        wrongAnswerExplanations: {
            "7 × 10 = 70": "This doesn't help us find 84 ÷ 7 because 70 ≠ 84.",
            "7 × 11 = 77": "This doesn't help us find 84 ÷ 7 because 77 ≠ 84.",
            "7 × 14 = 98": "This doesn't help us find 84 ÷ 7 because 98 ≠ 84."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch11_t3_qm2',
        type: "mcq",
        question: "Mrs. Singh has 96 stickers to distribute equally among 8 students. How many stickers will each student receive?",
        options: ["8", "12", "16", "24"],
        correctAnswer: "12",
        explanation: "We need to calculate 96 ÷ 8. Using multiplication tables, we know 12 × 8 = 96, so 96 ÷ 8 = 12. Each student receives 12 stickers. 🌟",
        wrongAnswerExplanations: {
            "8": "8 is incorrect. If each student got 8 stickers, we would have distributed only 8 × 8 = 64 stickers total.",
            "16": "16 is incorrect. If each student got 16 stickers, we would need 8 × 16 = 128 stickers total.",
            "24": "24 is incorrect. If each student got 24 stickers, we would need 8 × 24 = 192 stickers total."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch11_t3_qm3',
        type: "mcq",
        question: "If I divide 72 marbles equally among 9 children, each child gets how many marbles?",
        options: ["7", "8", "9", "12"],
        correctAnswer: "8",
        explanation: "To find 72 ÷ 9, we use the multiplication fact 8 × 9 = 72. Therefore, each child gets 8 marbles. Using multiplication tables helps solve division problems. 🔮",
        wrongAnswerExplanations: {
            "7": "7 is incorrect because 9 × 7 = 63, not 72.",
            "9": "9 is incorrect because 9 × 9 = 81, not 72.",
            "12": "12 is incorrect because 9 × 12 = 108, not 72."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 40
    },
    {
        id: 'cl4_ch11_t3_qm4',
        type: "mcq",
        question: "A baker made 108 cupcakes 🧁 and arranged them equally in 9 boxes. How many cupcakes were in each box?",
        options: ["9", "12", "18", "27"],
        correctAnswer: "12",
        explanation: "We need to calculate 108 ÷ 9. Using multiplication tables, we know 12 × 9 = 108, so 108 ÷ 9 = 12. Each box has 12 cupcakes. 📦",
        wrongAnswerExplanations: {
            "9": "9 is incorrect. If each box had 9 cupcakes, we would have only 9 × 9 = 81 cupcakes total.",
            "18": "18 is incorrect. If each box had 18 cupcakes, we would need 9 × 18 = 162 cupcakes total.",
            "27": "27 is incorrect. If each box had 27 cupcakes, we would need 9 × 27 = 243 cupcakes total."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch11_t3_qm5',
        type: "mcq",
        question: "Using the multiplication table of 6, which of these division problems equals 7?",
        options: ["42 ÷ 6", "36 ÷ 6", "48 ÷ 6", "54 ÷ 6"],
        correctAnswer: "42 ÷ 6",
        explanation: "From the multiplication table of 6, we know 6 × 7 = 42. Therefore, 42 ÷ 6 = 7. Using multiplication facts helps us solve division problems. ➗",
        wrongAnswerExplanations: {
            "36 ÷ 6": "36 ÷ 6 = 6 because 6 × 6 = 36, not 7.",
            "48 ÷ 6": "48 ÷ 6 = 8 because 6 × 8 = 48, not 7.",
            "54 ÷ 6": "54 ÷ 6 = 9 because 6 × 9 = 54, not 7."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 40
    },
    {
        id: 'cl4_ch11_t3_qm6',
        type: "mcq",
        question: "A school has 120 students in Class 4, and they need to be divided equally into 8 sections. How many students will be in each section?",
        options: ["12", "15", "20", "24"],
        correctAnswer: "15",
        explanation: "We need to calculate 120 ÷ 8. Using multiplication tables, we know 15 × 8 = 120, so 120 ÷ 8 = 15. Each section will have 15 students. 👨‍🎓",
        wrongAnswerExplanations: {
            "12": "12 is incorrect. If each section had 12 students, we would have only 8 × 12 = 96 students total.",
            "20": "20 is incorrect. If each section had 20 students, we would need 8 × 20 = 160 students total.",
            "24": "24 is incorrect. If each section had 24 students, we would need 8 × 24 = 192 students total."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 50
    },
    {
        id: 'cl4_ch11_t3_qm7',
        type: "mcq",
        question: "Which division problem can be solved using the multiplication fact 9 × 7 = 63?",
        options: ["63 ÷ 9 = 7", "63 ÷ 7 = 9", "Both of the above", "None of the above"],
        correctAnswer: "Both of the above",
        explanation: "The multiplication fact 9 × 7 = 63 helps solve both 63 ÷ 9 = 7 and 63 ÷ 7 = 9. This shows the relationship between multiplication and division. 🔄",
        wrongAnswerExplanations: {
            "63 ÷ 9 = 7": "This is correct, but it's not the only answer.",
            "63 ÷ 7 = 9": "This is correct, but it's not the only answer.",
            "None of the above": "This is incorrect. Both division problems can be solved using the given multiplication fact."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch11_t3_qm8',
        type: "mcq",
        question: "There are 144 chairs 🪑 to be arranged equally in 12 rows. How many chairs will be in each row?",
        options: ["10", "12", "14", "16"],
        correctAnswer: "12",
        explanation: "We need to calculate 144 ÷ 12. Using multiplication tables, we know 12 × 12 = 144, so 144 ÷ 12 = 12. Each row will have 12 chairs. 🪑",
        wrongAnswerExplanations: {
            "10": "10 is incorrect. If each row had 10 chairs, we would have only 12 × 10 = 120 chairs total.",
            "14": "14 is incorrect. If each row had 14 chairs, we would need 12 × 14 = 168 chairs total.",
            "16": "16 is incorrect. If each row had 16 chairs, we would need 12 × 16 = 192 chairs total."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch11_t3_qm9',
        type: "mcq",
        question: "If you know that 11 × 8 = 88, what is 88 ÷ 8?",
        options: ["8", "11", "16", "88"],
        correctAnswer: "11",
        explanation: "From the multiplication fact 11 × 8 = 88, we can determine that 88 ÷ 8 = 11. This shows how multiplication tables help in division. 🧮",
        wrongAnswerExplanations: {
            "8": "8 is incorrect. While 88 ÷ 11 = 8, the question asks for 88 ÷ 8.",
            "16": "16 is incorrect. 8 × 16 = 128, not 88.",
            "88": "88 is incorrect. This is the dividend, not the quotient."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 40
    },
    {
        id: 'cl4_ch11_t3_qm10',
        type: "mcq",
        question: "A gardener has 156 flower pots 🪴 to arrange equally in 12 rows. How many pots will be in each row?",
        options: ["12", "13", "14", "26"],
        correctAnswer: "13",
        explanation: "We need to calculate 156 ÷ 12. Using multiplication tables, we know 13 × 12 = 156, so 156 ÷ 12 = 13. Each row will have 13 pots. 🌸",
        wrongAnswerExplanations: {
            "12": "12 is incorrect. If each row had 12 pots, we would have only 12 × 12 = 144 pots total.",
            "14": "14 is incorrect. If each row had 14 pots, we would need 12 × 14 = 168 pots total.",
            "26": "26 is incorrect. If each row had 26 pots, we would need 12 × 26 = 312 pots total."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 50
    },
    {
        id: 'cl4_ch11_t3_qm11',
        type: "mcq",
        question: "Rahul has ₹132 and wants to buy identical toys 🧸 costing ₹12 each. How many toys can he buy?",
        options: ["10", "11", "12", "132"],
        correctAnswer: "11",
        explanation: "To find how many toys Rahul can buy, we calculate 132 ÷ 12. Using multiplication tables, 11 × 12 = 132, so 132 ÷ 12 = 11. He can buy 11 toys. 🧸",
        wrongAnswerExplanations: {
            "10": "10 is incorrect. 10 toys would cost 10 × ₹12 = ₹120, not ₹132.",
            "12": "12 is incorrect. 12 toys would cost 12 × ₹12 = ₹144, which is more than ₹132.",
            "132": "132 is incorrect. This is the total amount of money, not the number of toys."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch11_t3_qm12',
        type: "mcq",
        question: "Which of these division problems equals 9?",
        options: ["81 ÷ 9", "72 ÷ 8", "90 ÷ 10", "63 ÷ 7"],
        correctAnswer: "81 ÷ 9",
        explanation: "We need to find which division equals 9. Using multiplication tables, we know 9 × 9 = 81, so 81 ÷ 9 = 9. Using multiplication facts helps solve division. 🔢",
        wrongAnswerExplanations: {
            "72 ÷ 8": "72 ÷ 8 = 9 is also correct, because 8 × 9 = 72.",
            "90 ÷ 10": "90 ÷ 10 = 9 is also correct, because 10 × 9 = 90.",
            "63 ÷ 7": "63 ÷ 7 = 9 is also correct, because 7 × 9 = 63."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 50
    },
    {
        id: 'cl4_ch11_t3_qm13',
        type: "mcq",
        question: "Ravi distributes 168 candies 🍬 equally among 12 friends. How many candies does each friend receive?",
        options: ["12", "14", "16", "24"],
        correctAnswer: "14",
        explanation: "We need to calculate 168 ÷ 12. Using multiplication tables, we know 14 × 12 = 168, so 168 ÷ 12 = 14. Each friend receives 14 candies. 🍬",
        wrongAnswerExplanations: {
            "12": "12 is incorrect. If each friend got 12 candies, we would have distributed only 12 × 12 = 144 candies total.",
            "16": "16 is incorrect. If each friend got 16 candies, we would need 12 × 16 = 192 candies total.",
            "24": "24 is incorrect. If each friend got 24 candies, we would need 12 × 24 = 288 candies total."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch11_t3_qm14',
        type: "mcq",
        question: "Which multiplication fact helps to solve 126 ÷ 9?",
        options: ["9 × 13 = 117", "9 × 14 = 126", "9 × 15 = 135", "9 × 16 = 144"],
        correctAnswer: "9 × 14 = 126",
        explanation: "To solve 126 ÷ 9, we need to find what number times 9 equals 126. Since 9 × 14 = 126, we know that 126 ÷ 9 = 14. ✖️",
        wrongAnswerExplanations: {
            "9 × 13 = 117": "This doesn't help solve 126 ÷ 9 because 117 ≠ 126.",
            "9 × 15 = 135": "This doesn't help solve 126 ÷ 9 because 135 ≠ 126.",
            "9 × 16 = 144": "This doesn't help solve 126 ÷ 9 because 144 ≠ 126."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch11_t3_qm15',
        type: "mcq",
        question: "What is 112 ÷ 8 using the multiplication table of 8?",
        options: ["10", "12", "14", "16"],
        correctAnswer: "14",
        explanation: "To find 112 ÷ 8, we need to know what number times 8 equals 112. From the multiplication table of 8, 14 × 8 = 112, so 112 ÷ 8 = 14. 🧮",
        wrongAnswerExplanations: {
            "10": "10 is incorrect because 8 × 10 = 80, not 112.",
            "12": "12 is incorrect because 8 × 12 = 96, not 112.",
            "16": "16 is incorrect because 8 × 16 = 128, not 112."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 40
    },
    {
        id: 'cl4_ch11_t3_qm16',
        type: "mcq",
        question: "If there are 192 pages 📄 in a book and 12 pages in each chapter, how many chapters are in the book?",
        options: ["14", "16", "18", "24"],
        correctAnswer: "16",
        explanation: "We need to calculate 192 ÷ 12. Using multiplication tables, we know 16 × 12 = 192, so 192 ÷ 12 = 16. There are 16 chapters in the book. 📚",
        wrongAnswerExplanations: {
            "14": "14 is incorrect. 14 chapters would have 14 × 12 = 168 pages total, not 192.",
            "18": "18 is incorrect. 18 chapters would have 18 × 12 = 216 pages total, not 192.",
            "24": "24 is incorrect. 24 chapters would have 24 × 12 = 288 pages total, not 192."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch11_t3_qm17',
        type: "mcq",
        question: "A factory produces 154 toys in 7 days. If the production is equal each day, how many toys are produced daily?",
        options: ["14", "21", "22", "28"],
        correctAnswer: "22",
        explanation: "We need to calculate 154 ÷ 7. Using multiplication tables, we know 22 × 7 = 154, so 154 ÷ 7 = 22. The factory produces 22 toys daily. 🏭",
        wrongAnswerExplanations: {
            "14": "14 is incorrect. 14 toys per day for 7 days would be 14 × 7 = 98 toys total, not 154.",
            "21": "21 is incorrect. 21 toys per day for 7 days would be 21 × 7 = 147 toys total, not 154.",
            "28": "28 is incorrect. 28 toys per day for 7 days would be 28 × 7 = 196 toys total, not 154."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 50
    },
    {
        id: 'cl4_ch11_t3_qm18',
        type: "mcq",
        question: "Neha bought 180 balloons 🎈 for a party and wants to decorate 9 tables equally. How many balloons will be on each table?",
        options: ["18", "20", "27", "36"],
        correctAnswer: "20",
        explanation: "We need to calculate 180 ÷ 9. Using multiplication tables, we know 20 × 9 = 180, so 180 ÷ 9 = 20. Each table will have 20 balloons. 🎈",
        wrongAnswerExplanations: {
            "18": "18 is incorrect. 18 balloons on each of 9 tables would be 18 × 9 = 162 balloons total, not 180.",
            "27": "27 is incorrect. 27 balloons on each of 9 tables would be 27 × 9 = 243 balloons total, not 180.",
            "36": "36 is incorrect. 36 balloons on each of 9 tables would be 36 × 9 = 324 balloons total, not 180."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch11_t3_qm19',
        type: "mcq",
        question: "A school has 216 students to be equally distributed in 8 buses. How many students will be in each bus?",
        options: ["24", "27", "30", "36"],
        correctAnswer: "27",
        explanation: "We need to calculate 216 ÷ 8. Using multiplication tables, we know 27 × 8 = 216, so 216 ÷ 8 = 27. Each bus will have 27 students. 🚌",
        wrongAnswerExplanations: {
            "24": "24 is incorrect. 24 students in each of 8 buses would be 24 × 8 = 192 students total, not 216.",
            "30": "30 is incorrect. 30 students in each of 8 buses would be 30 × 8 = 240 students total, not 216.",
            "36": "36 is incorrect. 36 students in each of 8 buses would be 36 × 8 = 288 students total, not 216."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 50
    },
    {
        id: 'cl4_ch11_t3_qm20',
        type: "mcq",
        question: "If 11 × 13 = 143, what is 143 ÷ 11?",
        options: ["11", "13", "14", "143"],
        correctAnswer: "13",
        explanation: "From the multiplication fact 11 × 13 = 143, we can determine that 143 ÷ 11 = 13. This shows how multiplication tables help in division. 🔢",
        wrongAnswerExplanations: {
            "11": "11 is incorrect. 143 ÷ 13 = 11, but the question asks for 143 ÷ 11.",
            "14": "14 is incorrect. 11 × 14 = 154, not 143.",
            "143": "143 is incorrect. This is the dividend, not the quotient."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 40
    }
];
