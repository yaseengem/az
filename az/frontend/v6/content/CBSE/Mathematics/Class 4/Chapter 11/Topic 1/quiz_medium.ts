import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl4_ch11_t1_qm1',
        type: "mcq",
        question: "If 24 chocolates 🍫 are shared equally among some children and each child gets 6 chocolates, how many children are there?",
        options: ["3 children", "4 children", "5 children", "6 children"],
        correctAnswer: "4 children",
        explanation: "To find the number of children, divide total chocolates by chocolates per child: 24 ÷ 6 = 4 children.",
        wrongAnswerExplanations: {
            "3 children": "If 3 children each get 6 chocolates, that would be 18 chocolates total.",
            "5 children": "If 5 children each get 6 chocolates, that would be 30 chocolates total.",
            "6 children": "If 6 children each get 6 chocolates, that would be 36 chocolates total."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch11_t1_qm2',
        type: "mcq",
        question: "Ravi has 45 marbles. If he wants to give the same number of marbles to each of his 5 friends and keep the same number for himself, how many marbles will each person get?",
        options: ["7 marbles", "8 marbles", "9 marbles", "10 marbles"],
        correctAnswer: "7 marbles",
        explanation: "Ravi and his 5 friends make 6 people total. Each person gets 45 ÷ 6 = 7 marbles.",
        wrongAnswerExplanations: {
            "8 marbles": "If 6 people each get 8 marbles, that would be 48 marbles total.",
            "9 marbles": "If 6 people each get 9 marbles, that would be 54 marbles total.",
            "10 marbles": "If 6 people each get 10 marbles, that would be 60 marbles total."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch11_t1_qm3',
        type: "mcq",
        question: "A teacher has 32 students and wants to arrange them in equal rows with 4 students in each row. How many rows will there be?",
        options: ["6 rows", "7 rows", "8 rows", "9 rows"],
        correctAnswer: "8 rows",
        explanation: "To find the number of rows, divide the total students by students per row: 32 ÷ 4 = 8 rows.",
        wrongAnswerExplanations: {
            "6 rows": "6 rows with 4 students each would be only 24 students total.",
            "7 rows": "7 rows with 4 students each would be only 28 students total.",
            "9 rows": "9 rows with 4 students each would be 36 students total, which is too many."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch11_t1_qm4',
        type: "mcq",
        question: "Meera has 56 flowers 🌸 and she wants to make identical bouquets. If she makes 8 bouquets, how many flowers will be in each bouquet?",
        options: ["6 flowers", "7 flowers", "8 flowers", "9 flowers"],
        correctAnswer: "7 flowers",
        explanation: "When 56 flowers are divided equally into 8 bouquets, each bouquet will have 56 ÷ 8 = 7 flowers.",
        wrongAnswerExplanations: {
            "6 flowers": "8 bouquets with 6 flowers each would use only 48 flowers total.",
            "8 flowers": "8 bouquets with 8 flowers each would require 64 flowers total.",
            "9 flowers": "8 bouquets with 9 flowers each would require 72 flowers total."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch11_t1_qm5',
        type: "mcq",
        question: "A fruit vendor has 72 apples 🍎 and wants to pack them equally into 9 boxes. How many apples will be in each box?",
        options: ["7 apples", "8 apples", "9 apples", "10 apples"],
        correctAnswer: "8 apples",
        explanation: "When 72 apples are packed equally into 9 boxes, each box will contain 72 ÷ 9 = 8 apples.",
        wrongAnswerExplanations: {
            "7 apples": "9 boxes with 7 apples each would hold only 63 apples total.",
            "9 apples": "9 boxes with 9 apples each would require 81 apples total.",
            "10 apples": "9 boxes with 10 apples each would require 90 apples total."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch11_t1_qm6',
        type: "mcq",
        question: "If 42 pencils are shared equally among 6 students and each student gives 2 pencils to the teacher, how many pencils does each student have left?",
        options: ["3 pencils", "5 pencils", "7 pencils", "9 pencils"],
        correctAnswer: "5 pencils",
        explanation: "Each student initially gets 42 ÷ 6 = 7 pencils. After giving 2 pencils to the teacher, each student has 7 - 2 = 5 pencils left.",
        wrongAnswerExplanations: {
            "3 pencils": "This is incorrect. Each student starts with 7 pencils and gives away 2, leaving 5.",
            "7 pencils": "This is the initial number each student gets, but they give 2 away.",
            "9 pencils": "This is too many. Each student starts with only 7 pencils."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch11_t1_qm7',
        type: "mcq",
        question: "A baker made 60 cookies and packed them equally into some boxes with 12 cookies in each box. How many boxes did the baker use?",
        options: ["3 boxes", "4 boxes", "5 boxes", "6 boxes"],
        correctAnswer: "5 boxes",
        explanation: "To find the number of boxes, divide the total cookies by cookies per box: 60 ÷ 12 = 5 boxes.",
        wrongAnswerExplanations: {
            "3 boxes": "3 boxes with 12 cookies each would hold only 36 cookies total.",
            "4 boxes": "4 boxes with 12 cookies each would hold only 48 cookies total.",
            "6 boxes": "6 boxes with 12 cookies each would require 72 cookies total."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch11_t1_qm8',
        type: "mcq",
        question: "Rohan has 36 toy cars. He wants to give the same number of cars to his 4 friends. How many cars does each friend get?",
        options: ["7 cars", "8 cars", "9 cars", "10 cars"],
        correctAnswer: "9 cars",
        explanation: "When 36 cars are shared equally among 4 friends, each friend gets 36 ÷ 4 = 9 cars.",
        wrongAnswerExplanations: {
            "7 cars": "4 friends with 7 cars each would receive only 28 cars total.",
            "8 cars": "4 friends with 8 cars each would receive only 32 cars total.",
            "10 cars": "4 friends with 10 cars each would receive 40 cars total, which is too many."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch11_t1_qm9',
        type: "mcq",
        question: "A school has 144 students who need to be divided equally into 12 classrooms. How many students will be in each classroom?",
        options: ["10 students", "11 students", "12 students", "14 students"],
        correctAnswer: "12 students",
        explanation: "When 144 students are divided equally into 12 classrooms, each classroom will have 144 ÷ 12 = 12 students.",
        wrongAnswerExplanations: {
            "10 students": "12 classrooms with 10 students each would hold only 120 students total.",
            "11 students": "12 classrooms with 11 students each would hold only 132 students total.",
            "14 students": "12 classrooms with 14 students each would require 168 students total."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch11_t1_qm10',
        type: "mcq",
        question: "If 4 children share 20 candies 🍬 equally and then each child eats 2 candies, how many candies do they have left in total?",
        options: ["4 candies", "8 candies", "12 candies", "16 candies"],
        correctAnswer: "12 candies",
        explanation: "Each child gets 20 ÷ 4 = 5 candies. After each child eats 2, they have 5 - 2 = 3 candies each, for a total of 3 × 4 = 12 candies.",
        wrongAnswerExplanations: {
            "4 candies": "This is too few. Each child has 3 candies left, so 4 children have 12 candies total.",
            "8 candies": "This is too few. Each child has 3 candies left, so 4 children have 12 candies total.",
            "16 candies": "This is too many. Each child eats 2 candies, so 8 candies are eaten total."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch11_t1_qm11',
        type: "mcq",
        question: "Ritu arranged 30 chairs equally in some rows with 6 chairs in each row. How many rows did she make?",
        options: ["3 rows", "4 rows", "5 rows", "6 rows"],
        correctAnswer: "5 rows",
        explanation: "To find the number of rows, divide the total chairs by chairs per row: 30 ÷ 6 = 5 rows.",
        wrongAnswerExplanations: {
            "3 rows": "3 rows with 6 chairs each would be only 18 chairs total.",
            "4 rows": "4 rows with 6 chairs each would be only 24 chairs total.",
            "6 rows": "6 rows with 6 chairs each would be 36 chairs total, which is too many."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch11_t1_qm12',
        type: "mcq",
        question: "A farmer has 84 eggs and wants to put them equally into 6 baskets. After filling the baskets, he finds 12 more eggs. If he distributes these additional eggs equally among the same baskets, how many eggs will each basket have now?",
        options: ["14 eggs", "16 eggs", "18 eggs", "20 eggs"],
        correctAnswer: "16 eggs",
        explanation: "Initially, each basket gets 84 ÷ 6 = 14 eggs. With 12 more eggs distributed equally, each basket gets 12 ÷ 6 = 2 more eggs, for a total of 14 + 2 = 16 eggs per basket.",
        wrongAnswerExplanations: {
            "14 eggs": "This was the initial amount in each basket before adding the extra eggs.",
            "18 eggs": "This is too many. Each basket gets only 2 more eggs, not 4.",
            "20 eggs": "This is too many. Each basket gets only 2 more eggs, not 6."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch11_t1_qm13',
        type: "mcq",
        question: "If 54 stickers are shared equally among some children and each child gets 9 stickers, how many children are there?",
        options: ["5 children", "6 children", "7 children", "8 children"],
        correctAnswer: "6 children",
        explanation: "To find the number of children, divide the total stickers by stickers per child: 54 ÷ 9 = 6 children.",
        wrongAnswerExplanations: {
            "5 children": "5 children with 9 stickers each would receive only 45 stickers total.",
            "7 children": "7 children with 9 stickers each would require 63 stickers total.",
            "8 children": "8 children with 9 stickers each would require 72 stickers total."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch11_t1_qm14',
        type: "mcq",
        question: "A teacher has 48 students for a field trip. If each bus can carry 12 students, how many buses will be needed?",
        options: ["3 buses", "4 buses", "5 buses", "6 buses"],
        correctAnswer: "4 buses",
        explanation: "To find the number of buses needed, divide the total students by the capacity of each bus: 48 ÷ 12 = 4 buses.",
        wrongAnswerExplanations: {
            "3 buses": "3 buses carrying 12 students each would transport only 36 students total.",
            "5 buses": "5 buses would be too many. 4 buses can carry all 48 students.",
            "6 buses": "6 buses would be too many. 4 buses can carry all 48 students."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch11_t1_qm15',
        type: "mcq",
        question: "If 96 pencils are distributed equally among 8 boxes, and then 3 pencils are added to each box, how many pencils will be in each box?",
        options: ["12 pencils", "14 pencils", "15 pencils", "16 pencils"],
        correctAnswer: "15 pencils",
        explanation: "Each box initially gets 96 ÷ 8 = 12 pencils. After adding 3 more pencils to each box, each box will have 12 + 3 = 15 pencils.",
        wrongAnswerExplanations: {
            "12 pencils": "This was the initial amount before adding 3 more pencils to each box.",
            "14 pencils": "This is incorrect. Each box gets 12 + 3 = 15 pencils.",
            "16 pencils": "This is too many. Each box gets 12 + 3 = 15 pencils."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch11_t1_qm16',
        type: "mcq",
        question: "Rahul has 64 stickers. He gives an equal number to each of his 8 friends. How many stickers does each friend receive?",
        options: ["6 stickers", "7 stickers", "8 stickers", "9 stickers"],
        correctAnswer: "8 stickers",
        explanation: "When 64 stickers are shared equally among 8 friends, each friend gets 64 ÷ 8 = 8 stickers.",
        wrongAnswerExplanations: {
            "6 stickers": "If 8 friends each get 6 stickers, that would be only 48 stickers total.",
            "7 stickers": "If 8 friends each get 7 stickers, that would be only 56 stickers total.",
            "9 stickers": "If 8 friends each get 9 stickers, that would be 72 stickers total, which is too many."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch11_t1_qm17',
        type: "mcq",
        question: "A librarian has 80 new books to arrange equally on 5 shelves. After arranging them, she finds 10 more books and distributes them equally among the same shelves. How many books are now on each shelf?",
        options: ["16 books", "18 books", "19 books", "20 books"],
        correctAnswer: "18 books",
        explanation: "Initially, each shelf gets 80 ÷ 5 = 16 books. After adding 10 more books distributed equally, each shelf gets 10 ÷ 5 = 2 more books, for a total of 16 + 2 = 18 books per shelf.",
        wrongAnswerExplanations: {
            "16 books": "This was the initial amount before adding the extra books.",
            "19 books": "This is incorrect. Each shelf gets 16 + 2 = 18 books.",
            "20 books": "This is too many. Each shelf gets 16 + 2 = 18 books."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch11_t1_qm18',
        type: "mcq",
        question: "If 63 apples 🍎 are shared equally among 7 baskets, and then 2 apples are taken from each basket, how many apples will be left in total?",
        options: ["35 apples", "42 apples", "49 apples", "56 apples"],
        correctAnswer: "49 apples",
        explanation: "Each basket initially gets 63 ÷ 7 = 9 apples. After removing 2 apples from each basket, each basket has 9 - 2 = 7 apples, for a total of 7 × 7 = 49 apples.",
        wrongAnswerExplanations: {
            "35 apples": "This is too few. Each basket has 7 apples left, so 7 baskets have 49 apples total.",
            "42 apples": "This is too few. Each basket has 7 apples left, so 7 baskets have 49 apples total.",
            "56 apples": "This is too many. A total of 7 × 2 = 14 apples are taken away from the original 63."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch11_t1_qm19',
        type: "mcq",
        question: "A teacher has 75 pencils to distribute among 25 students. If each student gets an equal number of pencils, how many pencils will each student get?",
        options: ["2 pencils", "3 pencils", "4 pencils", "5 pencils"],
        correctAnswer: "3 pencils",
        explanation: "When 75 pencils are distributed equally among 25 students, each student gets 75 ÷ 25 = 3 pencils.",
        wrongAnswerExplanations: {
            "2 pencils": "If 25 students each get 2 pencils, that would be only 50 pencils total.",
            "4 pencils": "If 25 students each get 4 pencils, that would be 100 pencils total, which is too many.",
            "5 pencils": "If 25 students each get 5 pencils, that would be 125 pencils total, which is too many."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch11_t1_qm20',
        type: "mcq",
        question: "If 120 oranges 🍊 are shared equally among 10 baskets, and then 4 more oranges are put in each basket, how many oranges will each basket have?",
        options: ["12 oranges", "14 oranges", "16 oranges", "18 oranges"],
        correctAnswer: "16 oranges",
        explanation: "Each basket initially gets 120 ÷ 10 = 12 oranges. After adding 4 more oranges to each basket, each basket will have 12 + 4 = 16 oranges.",
        wrongAnswerExplanations: {
            "12 oranges": "This was the initial amount before adding the extra oranges.",
            "14 oranges": "This is incorrect. Each basket gets 12 + 4 = 16 oranges.",
            "18 oranges": "This is too many. Each basket gets 12 + 4 = 16 oranges."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    }
];
