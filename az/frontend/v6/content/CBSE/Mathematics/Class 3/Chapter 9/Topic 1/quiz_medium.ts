import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl3_ch9_t1_qm1',
        type: "mcq",
        question: "Ravi has 4 boxes with 3 balls in each. Sita has 3 boxes with 4 balls in each. Who has more balls?",
        options: ["Ravi", "Sita", "Both have the same number", "Cannot be determined"],
        correctAnswer: "Both have the same number",
        explanation: "Ravi has 4 × 3 = 3 + 3 + 3 + 3 = 12 balls. Sita has 3 × 4 = 4 + 4 + 4 = 12 balls. Both have the same number.",
        wrongAnswerExplanations: {
            "Ravi": "Ravi has 4 × 3 = 12 balls, which is equal to Sita's 12 balls.",
            "Sita": "Sita has 3 × 4 = 12 balls, which is equal to Ravi's 12 balls.",
            "Cannot be determined": "We can determine the answer by calculating the total number of balls each person has."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch9_t1_qm2',
        type: "mcq",
        question: "Which of these is NOT a way to find 3 × 6?",
        options: ["6 + 6 + 6", "3 + 3 + 3 + 3 + 3 + 3", "3 + 6", "Count by 6 three times"],
        correctAnswer: "3 + 6",
        explanation: "3 + 6 is simple addition, not multiplication. 3 × 6 means adding 6 three times (6 + 6 + 6) or adding 3 six times (3 + 3 + 3 + 3 + 3 + 3).",
        wrongAnswerExplanations: {
            "6 + 6 + 6": "This is correct. 3 × 6 means adding 6 three times.",
            "3 + 3 + 3 + 3 + 3 + 3": "This is 6 × 3, which equals 3 × 6 because multiplication is commutative.",
            "Count by 6 three times": "This is a valid method: 6, 12, 18."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch9_t1_qm3',
        type: "mcq",
        question: "Each apple costs ₹5. How much will 7 apples cost?",
        options: ["₹12", "₹30", "₹35", "₹25"],
        correctAnswer: "₹35",
        explanation: "7 apples cost 7 × ₹5 = ₹5 + ₹5 + ₹5 + ₹5 + ₹5 + ₹5 + ₹5 = ₹35.",
        wrongAnswerExplanations: {
            "₹12": "This is 7 + 5, not 7 × 5.",
            "₹30": "This is 6 × 5, not 7 × 5.",
            "₹25": "This is 5 × 5, not 7 × 5."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch9_t1_qm4',
        type: "mcq",
        question: "A teacher arranged students in 5 rows with 6 students in each row. How many students are there in total?",
        options: ["11", "30", "56", "15"],
        correctAnswer: "30",
        explanation: "The total number of students is 5 × 6 = 6 + 6 + 6 + 6 + 6 = 30 students.",
        wrongAnswerExplanations: {
            "11": "This is 5 + 6, not 5 × 6.",
            "56": "This is incorrect. 5 × 6 = 30, not 56.",
            "15": "This is 5 × 3, not 5 × 6."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch9_t1_qm5',
        type: "mcq",
        question: "Arjun reads 3 pages of a book every day. How many pages will he read in 9 days?",
        options: ["12", "27", "23", "9"],
        correctAnswer: "27",
        explanation: "In 9 days, Arjun will read 9 × 3 = 3 + 3 + 3 + 3 + 3 + 3 + 3 + 3 + 3 = 27 pages.",
        wrongAnswerExplanations: {
            "12": "This is 4 × 3, not 9 × 3.",
            "23": "This is incorrect. 9 × 3 = 27, not 23.",
            "9": "This is the number of days, not the total number of pages."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch9_t1_qm6',
        type: "mcq",
        question: "Which expression shows 8 × 0?",
        options: ["8 + 0", "0 + 0 + 0 + 0 + 0 + 0 + 0 + 0", "8", "0"],
        correctAnswer: "0 + 0 + 0 + 0 + 0 + 0 + 0 + 0",
        explanation: "8 × 0 means adding 0 eight times: 0 + 0 + 0 + 0 + 0 + 0 + 0 + 0 = 0.",
        wrongAnswerExplanations: {
            "8 + 0": "This is addition, not multiplication. 8 + 0 = 8, but 8 × 0 = 0.",
            "8": "This is incorrect. 8 × 0 = 0, not 8.",
            "0": "This is the answer, but not the repeated addition expression for 8 × 0."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch9_t1_qm7',
        type: "mcq",
        question: "There are 4 cars. Each car has 4 wheels. How many wheels are there in total?",
        options: ["8", "16", "12", "20"],
        correctAnswer: "16",
        explanation: "The total number of wheels is 4 × 4 = 4 + 4 + 4 + 4 = 16 wheels.",
        wrongAnswerExplanations: {
            "8": "This is 4 + 4, not 4 × 4.",
            "12": "This is 4 × 3, not 4 × 4.",
            "20": "This is 4 × 5, not 4 × 4."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch9_t1_qm8',
        type: "mcq",
        question: "Meera buys 6 packets of pencils. Each packet has 5 pencils. How many pencils does she buy in all?",
        options: ["11", "30", "25", "35"],
        correctAnswer: "30",
        explanation: "Meera buys 6 × 5 = 5 + 5 + 5 + 5 + 5 + 5 = 30 pencils in total.",
        wrongAnswerExplanations: {
            "11": "This is 6 + 5, not 6 × 5.",
            "25": "This is 5 × 5, not 6 × 5.",
            "35": "This is 7 × 5, not 6 × 5."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch9_t1_qm9',
        type: "mcq",
        question: "Reena bought 3 boxes of chocolates. Each box has 8 chocolates. After eating 5 chocolates, how many chocolates does she have left?",
        options: ["19", "24", "18", "20"],
        correctAnswer: "19",
        explanation: "Reena initially had 3 × 8 = 8 + 8 + 8 = 24 chocolates. After eating 5, she has 24 - 5 = 19 chocolates left.",
        wrongAnswerExplanations: {
            "24": "This is the initial number of chocolates, but she ate 5 of them.",
            "18": "This is incorrect. After eating 5 chocolates, she has 24 - 5 = 19 chocolates left.",
            "20": "This is incorrect. After eating 5 chocolates, she has 24 - 5 = 19 chocolates left."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl3_ch9_t1_qm10',
        type: "mcq",
        question: "Mira saves ₹2 every day. How much will she save in 8 days?",
        options: ["₹10", "₹16", "₹14", "₹8"],
        correctAnswer: "₹16",
        explanation: "In 8 days, Mira will save 8 × ₹2 = ₹2 + ₹2 + ₹2 + ₹2 + ₹2 + ₹2 + ₹2 + ₹2 = ₹16.",
        wrongAnswerExplanations: {
            "₹10": "This is 5 × ₹2, not 8 × ₹2.",
            "₹14": "This is 7 × ₹2, not 8 × ₹2.",
            "₹8": "This is 4 × ₹2, not 8 × ₹2."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch9_t1_qm11',
        type: "mcq",
        question: "A tricycle has 3 wheels. How many wheels do 7 tricycles have?",
        options: ["10", "21", "28", "14"],
        correctAnswer: "21",
        explanation: "7 tricycles have 7 × 3 = 3 + 3 + 3 + 3 + 3 + 3 + 3 = 21 wheels in total.",
        wrongAnswerExplanations: {
            "10": "This is 7 + 3, not 7 × 3.",
            "28": "This is 7 × 4, not 7 × 3.",
            "14": "This is 7 × 2, not 7 × 3."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch9_t1_qm12',
        type: "mcq",
        question: "Raj has 9 packets of stickers with 5 stickers in each packet. Vani has 5 packets with 9 stickers in each. Who has more stickers?",
        options: ["Raj", "Vani", "Both have the same number", "Cannot be determined"],
        correctAnswer: "Both have the same number",
        explanation: "Raj has 9 × 5 = 45 stickers. Vani has 5 × 9 = 45 stickers. Both have the same number because multiplication is commutative (9 × 5 = 5 × 9).",
        wrongAnswerExplanations: {
            "Raj": "Raj has 9 × 5 = 45 stickers, which is equal to Vani's 45 stickers.",
            "Vani": "Vani has 5 × 9 = 45 stickers, which is equal to Raj's 45 stickers.",
            "Cannot be determined": "We can determine the answer by calculating the total number of stickers each person has."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl3_ch9_t1_qm13',
        type: "mcq",
        question: "There are 3 plates with 6 cookies on each plate. If you eat 4 cookies, how many cookies are left?",
        options: ["14", "18", "15", "17"],
        correctAnswer: "14",
        explanation: "Initially, there are 3 × 6 = 6 + 6 + 6 = 18 cookies. After eating 4 cookies, 18 - 4 = 14 cookies are left.",
        wrongAnswerExplanations: {
            "18": "This is the initial number of cookies, but 4 cookies were eaten.",
            "15": "This is incorrect. After eating 4 cookies, 18 - 4 = 14 cookies are left.",
            "17": "This is incorrect. After eating 4 cookies, 18 - 4 = 14 cookies are left."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl3_ch9_t1_qm14',
        type: "mcq",
        question: "A toy car costs ₹15. How much will 4 toy cars cost?",
        options: ["₹19", "₹60", "₹45", "₹30"],
        correctAnswer: "₹60",
        explanation: "4 toy cars will cost 4 × ₹15 = ₹15 + ₹15 + ₹15 + ₹15 = ₹60.",
        wrongAnswerExplanations: {
            "₹19": "This is 4 + 15, not 4 × 15.",
            "₹45": "This is 3 × 15, not 4 × 15.",
            "₹30": "This is 2 × 15, not 4 × 15."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch9_t1_qm15',
        type: "mcq",
        question: "Which of these is equal to 4 × 6?",
        options: ["4 + 6", "6 + 6 + 6 + 6", "4 + 4 + 4 + 4 + 4 + 4", "Both B and C"],
        correctAnswer: "Both B and C",
        explanation: "4 × 6 can be written as 6 + 6 + 6 + 6 (adding 6 four times) or as 4 + 4 + 4 + 4 + 4 + 4 (adding 4 six times). Both equal 24.",
        wrongAnswerExplanations: {
            "4 + 6": "This is simple addition, not multiplication. 4 + 6 = 10, but 4 × 6 = 24.",
            "6 + 6 + 6 + 6": "This is correct, but so is option C. The answer is both B and C.",
            "4 + 4 + 4 + 4 + 4 + 4": "This is correct, but so is option B. The answer is both B and C."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl3_ch9_t1_qm16',
        type: "mcq",
        question: "A bookshelf has 4 shelves. Each shelf has 8 books. If 6 books are removed, how many books remain on the bookshelf?",
        options: ["26", "32", "30", "24"],
        correctAnswer: "26",
        explanation: "Initially, there are 4 × 8 = 8 + 8 + 8 + 8 = 32 books. After removing 6 books, 32 - 6 = 26 books remain.",
        wrongAnswerExplanations: {
            "32": "This is the initial number of books, but 6 books were removed.",
            "30": "This is incorrect. After removing 6 books, 32 - 6 = 26 books remain.",
            "24": "This is 4 × 6, not the correct answer to the problem."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl3_ch9_t1_qm17',
        type: "mcq",
        question: "If 5 children share 25 candies equally, how many candies does each child get?",
        options: ["5", "25", "30", "20"],
        correctAnswer: "5",
        explanation: "If 25 candies are shared equally among 5 children, each child gets 25 ÷ 5 = 5 candies.",
        wrongAnswerExplanations: {
            "25": "This is the total number of candies, not the number each child gets.",
            "30": "This is 5 × 6 = 30, which is not the correct calculation for this problem.",
            "20": "This is incorrect. 25 ÷ 5 = 5, not 20."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch9_t1_qm18',
        type: "mcq",
        question: "I have 7 boxes of crayons. Each box has 4 crayons. If I give 6 crayons to my friend, how many crayons do I have left?",
        options: ["22", "28", "24", "20"],
        correctAnswer: "22",
        explanation: "Initially, I have 7 × 4 = 4 + 4 + 4 + 4 + 4 + 4 + 4 = 28 crayons. After giving 6 to my friend, I have 28 - 6 = 22 crayons left.",
        wrongAnswerExplanations: {
            "28": "This is the initial number of crayons, but 6 crayons were given away.",
            "24": "This is 6 × 4 = 24, not the correct answer to the problem.",
            "20": "This is incorrect. After giving away 6 crayons, 28 - 6 = 22 crayons are left."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl3_ch9_t1_qm19',
        type: "mcq",
        question: "What is 5 × 8 equal to?",
        options: ["13", "40", "35", "45"],
        correctAnswer: "40",
        explanation: "5 × 8 = 8 + 8 + 8 + 8 + 8 = 40.",
        wrongAnswerExplanations: {
            "13": "This is 5 + 8, not 5 × 8.",
            "35": "This is 5 × 7 = 35, not 5 × 8 = 40.",
            "45": "This is 5 × 9 = 45, not 5 × 8 = 40."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch9_t1_qm20',
        type: "mcq",
        question: "Sana arranged 24 flowers equally in 6 vases. How many flowers are in each vase?",
        options: ["4", "6", "30", "18"],
        correctAnswer: "4",
        explanation: "If 24 flowers are arranged equally in 6 vases, each vase has 24 ÷ 6 = 4 flowers.",
        wrongAnswerExplanations: {
            "6": "This is the number of vases, not the number of flowers in each vase.",
            "30": "This is 24 + 6, not 24 ÷ 6.",
            "18": "This is 24 - 6, not 24 ÷ 6."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    }
];
