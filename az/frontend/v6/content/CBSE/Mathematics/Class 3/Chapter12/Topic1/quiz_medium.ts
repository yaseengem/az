// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 3\Chapter12\Topic1\quiz_medium.ts
import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl3_ch12_t1_qm1',
        type: "mcq",
        question: "Ram has 15 marbles and wants to share them equally with 2 friends and himself. How many marbles will each person get?",
        options: ["3 marbles", "5 marbles", "7 marbles", "15 marbles"],
        correctAnswer: "5 marbles",
        explanation: "There are 3 people in total (Ram and his 2 friends). So 15 ÷ 3 = 5 marbles for each person.",
        wrongAnswerExplanations: {
            "3 marbles": "This is incorrect. 15 ÷ 3 = 5, not 3.",
            "7 marbles": "This is incorrect. If each person got 7 marbles, we would need 21 marbles in total.",
            "15 marbles": "This would mean only one person gets all the marbles, which is not equal sharing."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch12_t1_qm2',
        type: "mcq",
        question: "If 24 biscuits are shared equally among some children and each child gets 6 biscuits, how many children are there?",
        options: ["2 children", "3 children", "4 children", "6 children"],
        correctAnswer: "4 children",
        explanation: "We need to find how many groups of 6 make 24. So 24 ÷ 6 = 4 children.",
        wrongAnswerExplanations: {
            "2 children": "If there were 2 children, each would get 12 biscuits (24 ÷ 2 = 12), not 6.",
            "3 children": "If there were 3 children, each would get 8 biscuits (24 ÷ 3 = 8), not 6.",
            "6 children": "If there were 6 children, each would get 4 biscuits (24 ÷ 6 = 4), not 6."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch12_t1_qm3',
        type: "mcq",
        question: "A shopkeeper has 35 oranges and puts 5 oranges in each bag. How many bags does he need?",
        options: ["5 bags", "7 bags", "8 bags", "10 bags"],
        correctAnswer: "7 bags",
        explanation: "To find how many bags are needed, we divide: 35 ÷ 5 = 7 bags.",
        wrongAnswerExplanations: {
            "5 bags": "This is incorrect. If we used 5 bags with 5 oranges in each, we would only use 25 oranges.",
            "8 bags": "This is incorrect. If we used 8 bags with 5 oranges in each, we would need 40 oranges.",
            "10 bags": "This is incorrect. If we used 10 bags with 5 oranges in each, we would need 50 oranges."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch12_t1_qm4',
        type: "mcq",
        question: "Mrs. Sharma baked 30 cookies and arranged them equally on 6 plates for a party. Later, she added 2 more cookies to each plate. How many cookies were on each plate in the end?",
        options: ["5 cookies", "7 cookies", "8 cookies", "12 cookies"],
        correctAnswer: "7 cookies",
        explanation: "First, 30 ÷ 6 = 5 cookies on each plate. Then she added 2 more to each plate, so 5 + 2 = 7 cookies on each plate.",
        wrongAnswerExplanations: {
            "5 cookies": "This was the initial number before adding 2 more cookies to each plate.",
            "8 cookies": "This is incorrect. The final number is 7 cookies per plate, not 8.",
            "12 cookies": "This is incorrect. The final number is 7 cookies per plate, not 12."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl3_ch12_t1_qm5',
        type: "mcq",
        question: "A teacher divides 28 students into equal groups for a project. If each group has 4 students, how many groups are there?",
        options: ["4 groups", "6 groups", "7 groups", "8 groups"],
        correctAnswer: "7 groups",
        explanation: "To find the number of groups, we divide: 28 ÷ 4 = 7 groups.",
        wrongAnswerExplanations: {
            "4 groups": "This is incorrect. If there were 4 groups of 4 students each, we would only have 16 students total.",
            "6 groups": "This is incorrect. If there were 6 groups of 4 students each, we would only have 24 students total.",
            "8 groups": "This is incorrect. If there were 8 groups of 4 students each, we would have 32 students total."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch12_t1_qm6',
        type: "mcq",
        question: "Ravi has 32 stickers. He wants to give the same number of stickers to each of his 4 friends. How many stickers will each friend get if Ravi keeps 8 stickers for himself?",
        options: ["4 stickers", "6 stickers", "8 stickers", "10 stickers"],
        correctAnswer: "6 stickers",
        explanation: "Ravi keeps 8 stickers, so he gives away 32 - 8 = 24 stickers. These 24 stickers are shared among 4 friends, so 24 ÷ 4 = 6 stickers each.",
        wrongAnswerExplanations: {
            "4 stickers": "This is incorrect. Each friend would get 6 stickers, not 4.",
            "8 stickers": "This is incorrect. Ravi kept 8 stickers for himself, but each friend gets 6 stickers.",
            "10 stickers": "This is incorrect. Each friend would get 6 stickers, not 10."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl3_ch12_t1_qm7',
        type: "mcq",
        question: "A fruit seller has 48 apples. She puts them equally into 6 baskets, then sells 2 apples from each basket. How many apples are left in each basket?",
        options: ["6 apples", "8 apples", "10 apples", "12 apples"],
        correctAnswer: "6 apples",
        explanation: "First, 48 ÷ 6 = 8 apples in each basket. After selling 2 apples from each basket, 8 - 2 = 6 apples are left in each basket.",
        wrongAnswerExplanations: {
            "8 apples": "This was the initial number before selling 2 apples from each basket.",
            "10 apples": "This is incorrect. Each basket would have 6 apples left, not 10.",
            "12 apples": "This is incorrect. Each basket would have 6 apples left, not 12."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl3_ch12_t1_qm8',
        type: "mcq",
        question: "If 42 pencils are shared equally among 6 children and each child gives 1 pencil to the teacher, how many pencils does each child have left?",
        options: ["5 pencils", "6 pencils", "7 pencils", "8 pencils"],
        correctAnswer: "6 pencils",
        explanation: "First, 42 ÷ 6 = 7 pencils for each child. After each child gives 1 pencil to the teacher, 7 - 1 = 6 pencils are left with each child.",
        wrongAnswerExplanations: {
            "5 pencils": "This is incorrect. Each child would have 6 pencils left, not 5.",
            "7 pencils": "This was the initial number before giving 1 pencil to the teacher.",
            "8 pencils": "This is incorrect. Each child would have 6 pencils left, not 8."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl3_ch12_t1_qm9',
        type: "mcq",
        question: "A baker has 36 cupcakes. If she arranges them in boxes with 4 cupcakes in each box, how many complete boxes can she fill?",
        options: ["7 boxes", "8 boxes", "9 boxes", "10 boxes"],
        correctAnswer: "9 boxes",
        explanation: "To find how many boxes, we divide: 36 ÷ 4 = 9 boxes.",
        wrongAnswerExplanations: {
            "7 boxes": "This is incorrect. With 7 boxes of 4 cupcakes each, we would only use 28 cupcakes.",
            "8 boxes": "This is incorrect. With 8 boxes of 4 cupcakes each, we would only use 32 cupcakes.",
            "10 boxes": "This is incorrect. With 10 boxes of 4 cupcakes each, we would need 40 cupcakes."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch12_t1_qm10',
        type: "mcq",
        question: "A school has 60 students going on a field trip. If each bus can carry 15 students, how many buses are needed?",
        options: ["3 buses", "4 buses", "5 buses", "6 buses"],
        correctAnswer: "4 buses",
        explanation: "To find how many buses are needed, we divide: 60 ÷ 15 = 4 buses.",
        wrongAnswerExplanations: {
            "3 buses": "This is incorrect. If we used 3 buses that carry 15 students each, we could only transport 45 students.",
            "5 buses": "This is incorrect. We need 4 buses, not 5. Using 5 buses would provide space for 75 students.",
            "6 buses": "This is incorrect. We need 4 buses, not 6. Using 6 buses would provide space for 90 students."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch12_t1_qm11',
        type: "mcq",
        question: "Neha has 40 flowers that she wants to make into identical bouquets. If she wants to make 5 bouquets, how many flowers will be in each bouquet?",
        options: ["4 flowers", "6 flowers", "8 flowers", "10 flowers"],
        correctAnswer: "8 flowers",
        explanation: "To find how many flowers in each bouquet, we divide: 40 ÷ 5 = 8 flowers per bouquet.",
        wrongAnswerExplanations: {
            "4 flowers": "This is incorrect. If each bouquet had 4 flowers, we would only use 20 flowers total.",
            "6 flowers": "This is incorrect. If each bouquet had 6 flowers, we would only use 30 flowers total.",
            "10 flowers": "This is incorrect. If each bouquet had 10 flowers, we would need 50 flowers total."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch12_t1_qm12',
        type: "mcq",
        question: "A gardener plants 56 saplings in equal rows. If there are 8 rows, how many saplings are in each row?",
        options: ["5 saplings", "6 saplings", "7 saplings", "8 saplings"],
        correctAnswer: "7 saplings",
        explanation: "To find how many saplings in each row, we divide: 56 ÷ 8 = 7 saplings per row.",
        wrongAnswerExplanations: {
            "5 saplings": "This is incorrect. If each row had 5 saplings, we would only use 40 saplings total.",
            "6 saplings": "This is incorrect. If each row had 6 saplings, we would only use 48 saplings total.",
            "8 saplings": "This is incorrect. If each row had 8 saplings, we would need 64 saplings total."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch12_t1_qm13',
        type: "mcq",
        question: "Amit has 27 oranges that he wants to arrange equally in 3 fruit baskets for a display. Later, he adds 2 more oranges to each basket. How many oranges are in each basket now?",
        options: ["9 oranges", "11 oranges", "12 oranges", "15 oranges"],
        correctAnswer: "11 oranges",
        explanation: "First, 27 ÷ 3 = 9 oranges in each basket. After adding 2 more to each basket, 9 + 2 = 11 oranges are in each basket.",
        wrongAnswerExplanations: {
            "9 oranges": "This was the initial number before adding 2 more oranges to each basket.",
            "12 oranges": "This is incorrect. Each basket would have 11 oranges, not 12.",
            "15 oranges": "This is incorrect. Each basket would have 11 oranges, not 15."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl3_ch12_t1_qm14',
        type: "mcq",
        question: "A toy factory makes 64 toys in a day. If the toys are packed equally in 8 boxes, and then 2 toys are added to each box, how many toys are in each box?",
        options: ["8 toys", "10 toys", "12 toys", "16 toys"],
        correctAnswer: "10 toys",
        explanation: "First, 64 ÷ 8 = 8 toys in each box. After adding 2 more to each box, 8 + 2 = 10 toys are in each box.",
        wrongAnswerExplanations: {
            "8 toys": "This was the initial number before adding 2 more toys to each box.",
            "12 toys": "This is incorrect. Each box would have 10 toys, not 12.",
            "16 toys": "This is incorrect. Each box would have 10 toys, not 16."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl3_ch12_t1_qm15',
        type: "mcq",
        question: "If 45 marbles are divided equally among 9 children, and each child loses 2 marbles, how many marbles does each child have left?",
        options: ["2 marbles", "3 marbles", "5 marbles", "7 marbles"],
        correctAnswer: "3 marbles",
        explanation: "First, 45 ÷ 9 = 5 marbles for each child. After each child loses 2 marbles, 5 - 2 = 3 marbles are left with each child.",
        wrongAnswerExplanations: {
            "2 marbles": "This is incorrect. Each child would have 3 marbles left, not 2.",
            "5 marbles": "This was the initial number before each child lost 2 marbles.",
            "7 marbles": "This is incorrect. Each child would have 3 marbles left, not 7."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl3_ch12_t1_qm16',
        type: "mcq",
        question: "In a game, 48 stickers are to be shared equally among 6 winners. If 2 more winners join, and the stickers are shared again equally, how many stickers will each winner get?",
        options: ["6 stickers", "8 stickers", "10 stickers", "12 stickers"],
        correctAnswer: "6 stickers",
        explanation: "With 6 winners, each would get 48 ÷ 6 = 8 stickers. With 2 more winners (total 8), each gets 48 ÷ 8 = 6 stickers.",
        wrongAnswerExplanations: {
            "8 stickers": "This is how many each winner would get if there were only 6 winners, not 8.",
            "10 stickers": "This is incorrect. Each winner would get 6 stickers, not 10.",
            "12 stickers": "This is incorrect. Each winner would get 6 stickers, not 12."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl3_ch12_t1_qm17',
        type: "mcq",
        question: "A farmer has 54 eggs. She puts an equal number of eggs in each of 6 cartons and sells them. If each carton is sold for ₹30, how much money does she receive in total?",
        options: ["₹150", "₹180", "₹240", "₹300"],
        correctAnswer: "₹180",
        explanation: "First, 54 ÷ 6 = 9 eggs in each carton. The farmer sells 6 cartons at ₹30 each, so 6 × ₹30 = ₹180 in total.",
        wrongAnswerExplanations: {
            "₹150": "This is incorrect. The total amount received would be ₹180, not ₹150.",
            "₹240": "This is incorrect. The total amount received would be ₹180, not ₹240.",
            "₹300": "This is incorrect. The total amount received would be ₹180, not ₹300."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl3_ch12_t1_qm18',
        type: "mcq",
        question: "A class of 30 students is divided into 5 equal groups for a science project. If 2 students are absent, and the remaining students are divided into 4 equal groups instead, how many students are in each new group?",
        options: ["6 students", "7 students", "8 students", "9 students"],
        correctAnswer: "7 students",
        explanation: "With 2 students absent, there are 30 - 2 = 28 students present. When divided into 4 equal groups, 28 ÷ 4 = 7 students in each group.",
        wrongAnswerExplanations: {
            "6 students": "This is incorrect. Each new group would have 7 students, not 6.",
            "8 students": "This is incorrect. Each new group would have 7 students, not 8.",
            "9 students": "This is incorrect. Each new group would have 7 students, not 9."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl3_ch12_t1_qm19',
        type: "mcq",
        question: "Mrs. Gupta made 36 cupcakes and arranged them equally on some plates. If she put 4 cupcakes on each plate, how many plates did she use? If she wanted to put 6 cupcakes on each plate instead, how many plates would she need?",
        options: ["9 plates; 6 plates", "8 plates; 6 plates", "9 plates; 7 plates", "10 plates; 6 plates"],
        correctAnswer: "9 plates; 6 plates",
        explanation: "With 4 cupcakes per plate: 36 ÷ 4 = 9 plates. With 6 cupcakes per plate: 36 ÷ 6 = 6 plates.",
        wrongAnswerExplanations: {
            "8 plates; 6 plates": "This is incorrect. She would need 9 plates when using 4 cupcakes per plate, not 8.",
            "9 plates; 7 plates": "This is incorrect. She would need 6 plates when using 6 cupcakes per plate, not 7.",
            "10 plates; 6 plates": "This is incorrect. She would need 9 plates when using 4 cupcakes per plate, not 10."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl3_ch12_t1_qm20',
        type: "mcq",
        question: "A shopkeeper has 72 pencils. He makes packets with an equal number of pencils in each. If he can make 8 packets, how many pencils are in each packet? If he makes 9 packets instead, how many pencils would be in each packet?",
        options: ["8 pencils; 7 pencils", "9 pencils; 8 pencils", "10 pencils; 9 pencils", "12 pencils; 8 pencils"],
        correctAnswer: "9 pencils; 8 pencils",
        explanation: "With 8 packets: 72 ÷ 8 = 9 pencils in each packet. With 9 packets: 72 ÷ 9 = 8 pencils in each packet.",
        wrongAnswerExplanations: {
            "8 pencils; 7 pencils": "This is incorrect. With 8 packets, there would be 9 pencils in each, not 8.",
            "10 pencils; 9 pencils": "This is incorrect. With 8 packets, there would be 9 pencils in each, not 10.",
            "12 pencils; 8 pencils": "This is incorrect. With 8 packets, there would be 9 pencils in each, not 12."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    }
];
