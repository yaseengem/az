import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl3_ch3_t3_qe1',
        type: "mcq",
        question: "Ravi had 45 stickers. He gave 18 stickers to his friend. How many stickers does Ravi have now?",
        options: ["27 stickers", "63 stickers", "28 stickers", "17 stickers"],
        correctAnswer: "27 stickers",
        explanation: "This is a subtraction problem: 45 - 18 = 27 stickers left with Ravi. We subtract what was given away from the initial amount. 📝",
        wrongAnswerExplanations: {
            "63 stickers": "You added instead of subtracting. 45 + 18 = 63, but Ravi gave stickers away, so we need to subtract.",
            "28 stickers": "The correct calculation is 45 - 18 = 27, not 28.",
            "17 stickers": "The correct calculation is 45 - 18 = 27, not 17."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl3_ch3_t3_qe2',
        type: "mcq",
        question: "Meena collected 125 seashells at the beach. Her brother collected 89 seashells. How many seashells did they collect altogether?",
        options: ["214 seashells", "36 seashells", "196 seashells", "224 seashells"],
        correctAnswer: "214 seashells",
        explanation: "This is an addition problem: 125 + 89 = 214 seashells in total. We add the two amounts to find the total collection. 🐚",
        wrongAnswerExplanations: {
            "36 seashells": "You subtracted instead of adding. 125 - 89 = 36, but we need to find the total, so we add.",
            "196 seashells": "The calculation is incorrect. 125 + 89 = 214, not 196.",
            "224 seashells": "The calculation is incorrect. 125 + 89 = 214, not 224."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl3_ch3_t3_qe3',
        type: "mcq",
        question: "A school bus had 52 children. At the first stop, 14 children got off. How many children are still on the bus?",
        options: ["38 children", "66 children", "48 children", "28 children"],
        correctAnswer: "38 children",
        explanation: "This is a subtraction problem: 52 - 14 = 38 children remaining on the bus. We subtract the number who left from the initial number. 🚌",
        wrongAnswerExplanations: {
            "66 children": "You added instead of subtracting. 52 + 14 = 66, but children got off the bus, so we need to subtract.",
            "48 children": "The calculation is incorrect. 52 - 14 = 38, not 48.",
            "28 children": "The calculation is incorrect. 52 - 14 = 38, not 28."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl3_ch3_t3_qe4',
        type: "mcq",
        question: "Rahul had 215 marbles. He bought 145 more marbles. How many marbles does Rahul have now?",
        options: ["360 marbles", "70 marbles", "350 marbles", "460 marbles"],
        correctAnswer: "360 marbles",
        explanation: "This is an addition problem: 215 + 145 = 360 marbles. We add the new marbles to the initial amount to find the total. 🔮",
        wrongAnswerExplanations: {
            "70 marbles": "You subtracted instead of adding. 215 - 145 = 70, but Rahul bought more marbles, so we need to add.",
            "350 marbles": "The calculation is incorrect. 215 + 145 = 360, not 350.",
            "460 marbles": "The calculation is incorrect. 215 + 145 = 360, not 460."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl3_ch3_t3_qe5',
        type: "mcq",
        question: "There were 324 apples in a basket. 135 apples were taken out. How many apples are left in the basket?",
        options: ["189 apples", "459 apples", "191 apples", "124 apples"],
        correctAnswer: "189 apples",
        explanation: "This is a subtraction problem: 324 - 135 = 189 apples left. We subtract what was taken from the initial amount to find what remains. 🍎",
        wrongAnswerExplanations: {
            "459 apples": "You added instead of subtracting. 324 + 135 = 459, but apples were taken out, so we need to subtract.",
            "191 apples": "The calculation is incorrect. 324 - 135 = 189, not 191.",
            "124 apples": "The calculation is incorrect. 324 - 135 = 189, not 124."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl3_ch3_t3_qe6',
        type: "mcq",
        question: "A bookseller had 258 books. She sold 129 books and then received a shipment of 167 more books. How many books does she have now?",
        options: ["296 books", "129 books", "425 books", "167 books"],
        correctAnswer: "296 books",
        explanation: "First subtract the books sold, then add the new books: 258 - 129 = 129, then 129 + 167 = 296 books. We need to perform both operations in sequence. 📚",
        wrongAnswerExplanations: {
            "129 books": "This is only the result after subtraction (258 - 129 = 129). You need to add the new shipment: 129 + 167 = 296.",
            "425 books": "You added all the numbers (258 + 167 = 425) without subtracting the books sold.",
            "167 books": "This is just the number of books in the new shipment, not the final total."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch3_t3_qe7',
        type: "mcq",
        question: "A school collected 456 kilograms of waste paper for recycling. Another school collected 389 kilograms. How much waste paper did they collect altogether?",
        options: ["845 kilograms", "67 kilograms", "745 kilograms", "945 kilograms"],
        correctAnswer: "845 kilograms",
        explanation: "This is an addition problem: 456 + 389 = 845 kilograms. We add the two amounts to find the total waste paper collected. ♻️",
        wrongAnswerExplanations: {
            "67 kilograms": "You subtracted instead of adding. 456 - 389 = 67, but we need to find the total, so we add.",
            "745 kilograms": "The calculation is incorrect. 456 + 389 = 845, not 745.",
            "945 kilograms": "The calculation is incorrect. 456 + 389 = 845, not 945."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl3_ch3_t3_qe8',
        type: "mcq",
        question: "Sita had 305 rupees. She spent 168 rupees on books. How much money does Sita have left?",
        options: ["137 rupees", "473 rupees", "163 rupees", "173 rupees"],
        correctAnswer: "137 rupees",
        explanation: "This is a subtraction problem: 305 - 168 = 137 rupees left. We subtract what was spent from the initial amount to find what remains. 💰",
        wrongAnswerExplanations: {
            "473 rupees": "You added instead of subtracting. 305 + 168 = 473, but Sita spent money, so we need to subtract.",
            "163 rupees": "The calculation is incorrect. 305 - 168 = 137, not 163.",
            "173 rupees": "The calculation is incorrect. 305 - 168 = 137, not 173."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl3_ch3_t3_qe9',
        type: "mcq",
        question: "A fruit shop had 267 apples and 188 oranges. How many fruits did the shop have in total?",
        options: ["455 fruits", "79 fruits", "445 fruits", "355 fruits"],
        correctAnswer: "455 fruits",
        explanation: "This is an addition problem: 267 + 188 = 455 fruits in total. We add the two amounts to find the total number of fruits. 🍎🍊",
        wrongAnswerExplanations: {
            "79 fruits": "You subtracted instead of adding. 267 - 188 = 79, but we need the total, so we add.",
            "445 fruits": "The calculation is incorrect. 267 + 188 = 455, not 445.",
            "355 fruits": "The calculation is incorrect. 267 + 188 = 455, not 355."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl3_ch3_t3_qe10',
        type: "mcq",
        question: "Raj had 186 color pencils. He gave 47 pencils to his sister and 39 pencils to his brother. How many pencils does Raj have now?",
        options: ["100 pencils", "139 pencils", "272 pencils", "147 pencils"],
        correctAnswer: "100 pencils",
        explanation: "We need to subtract both amounts given away: 186 - 47 = 139, then 139 - 39 = 100 pencils. This requires two subtractions in sequence. 🖌️",
        wrongAnswerExplanations: {
            "139 pencils": "This is the result after subtracting only the sister's pencils (186 - 47 = 139). You also need to subtract the brother's pencils.",
            "272 pencils": "You added instead of subtracting. 186 + 47 + 39 = 272, but Raj gave pencils away, so we need to subtract.",
            "147 pencils": "The calculation is incorrect. 186 - 47 - 39 = 100, not 147."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch3_t3_qe11',
        type: "mcq",
        question: "A garden has 245 red flowers and 178 yellow flowers. How many flowers are there in total?",
        options: ["423 flowers", "67 flowers", "413 flowers", "433 flowers"],
        correctAnswer: "423 flowers",
        explanation: "This is an addition problem: 245 + 178 = 423 flowers. We add the two amounts to find the total number of flowers in the garden. 🌸",
        wrongAnswerExplanations: {
            "67 flowers": "You subtracted instead of adding. 245 - 178 = 67, but we need the total, so we add.",
            "413 flowers": "The calculation is incorrect. 245 + 178 = 423, not 413.",
            "433 flowers": "The calculation is incorrect. 245 + 178 = 423, not 433."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl3_ch3_t3_qe12',
        type: "mcq",
        question: "Aman had 350 marbles. After playing a game, he lost 175 marbles. How many marbles does Aman have now?",
        options: ["175 marbles", "525 marbles", "185 marbles", "165 marbles"],
        correctAnswer: "175 marbles",
        explanation: "This is a subtraction problem: 350 - 175 = 175 marbles remaining. We subtract what was lost from the initial amount to find what remains. 🔮",
        wrongAnswerExplanations: {
            "525 marbles": "You added instead of subtracting. 350 + 175 = 525, but Aman lost marbles, so we need to subtract.",
            "185 marbles": "The calculation is incorrect. 350 - 175 = 175, not 185.",
            "165 marbles": "The calculation is incorrect. 350 - 175 = 175, not 165."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl3_ch3_t3_qe13',
        type: "mcq",
        question: "A school library had 576 books. They received 249 new books. How many books does the library have now?",
        options: ["825 books", "327 books", "725 books", "925 books"],
        correctAnswer: "825 books",
        explanation: "This is an addition problem: 576 + 249 = 825 books. We add the new books to the initial amount to find the total. 📚",
        wrongAnswerExplanations: {
            "327 books": "You subtracted instead of adding. 576 - 249 = 327, but the library received more books, so we need to add.",
            "725 books": "The calculation is incorrect. 576 + 249 = 825, not 725.",
            "925 books": "The calculation is incorrect. 576 + 249 = 825, not 925."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl3_ch3_t3_qe14',
        type: "mcq",
        question: "A bus had 65 passengers. At a stop, 28 passengers got off the bus and 15 passengers got on. How many passengers are on the bus now?",
        options: ["52 passengers", "37 passengers", "78 passengers", "108 passengers"],
        correctAnswer: "52 passengers",
        explanation: "First subtract passengers who got off, then add those who got on: 65 - 28 = 37, then 37 + 15 = 52 passengers. This requires both subtraction and addition. 🚌",
        wrongAnswerExplanations: {
            "37 passengers": "This is only the result after subtraction (65 - 28 = 37). You need to add the passengers who got on: 37 + 15 = 52.",
            "78 passengers": "You only did addition (65 + 13 = 78) without correctly handling the passengers who got off and on.",
            "108 passengers": "You added all numbers (65 + 28 + 15 = 108) instead of subtracting those who got off and adding those who got on."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch3_t3_qe15',
        type: "mcq",
        question: "A toy shop had 325 toy cars. The shop sold 138 toy cars on Monday and 87 toy cars on Tuesday. How many toy cars are left in the shop?",
        options: ["100 toy cars", "187 toy cars", "550 toy cars", "225 toy cars"],
        correctAnswer: "100 toy cars",
        explanation: "We need to subtract both days' sales: 325 - 138 = 187, then 187 - 87 = 100 toy cars left. This requires applying subtraction twice. 🚗",
        wrongAnswerExplanations: {
            "187 toy cars": "This is the result after subtracting only Monday's sales (325 - 138 = 187). You also need to subtract Tuesday's sales.",
            "550 toy cars": "You added all the numbers (325 + 138 + 87 = 550) instead of subtracting the sales.",
            "225 toy cars": "The calculation is incorrect. The correct answer is 325 - 138 - 87 = 100 toy cars."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch3_t3_qe16',
        type: "mcq",
        question: "Ritu spent 156 rupees on fruits and 247 rupees on vegetables. How much money did she spend in total?",
        options: ["403 rupees", "91 rupees", "413 rupees", "303 rupees"],
        correctAnswer: "403 rupees",
        explanation: "This is an addition problem: 156 + 247 = 403 rupees. We add the two amounts to find the total money spent. 💰",
        wrongAnswerExplanations: {
            "91 rupees": "You subtracted instead of adding. 247 - 156 = 91, but we need the total spent, so we add.",
            "413 rupees": "The calculation is incorrect. 156 + 247 = 403, not 413.",
            "303 rupees": "The calculation is incorrect. 156 + 247 = 403, not 303."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl3_ch3_t3_qe17',
        type: "mcq",
        question: "A farmer had 475 apples. He sold 289 apples. How many apples does the farmer have left?",
        options: ["186 apples", "764 apples", "166 apples", "196 apples"],
        correctAnswer: "186 apples",
        explanation: "This is a subtraction problem: 475 - 289 = 186 apples left. We subtract what was sold from the initial amount to find what remains. 🍎",
        wrongAnswerExplanations: {
            "764 apples": "You added instead of subtracting. 475 + 289 = 764, but the farmer sold apples, so we need to subtract.",
            "166 apples": "The calculation is incorrect. 475 - 289 = 186, not 166.",
            "196 apples": "The calculation is incorrect. 475 - 289 = 186, not 196."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl3_ch3_t3_qe18',
        type: "mcq",
        question: "Neha had 725 stickers in her collection. She gave 138 stickers to her friend Meera and 214 stickers to her friend Anita. How many stickers does Neha have now?",
        options: ["373 stickers", "511 stickers", "587 stickers", "1077 stickers"],
        correctAnswer: "373 stickers",
        explanation: "We need to subtract both amounts given away: 725 - 138 = 587, then 587 - 214 = 373 stickers. This requires applying subtraction twice in sequence. 📝",
        wrongAnswerExplanations: {
            "511 stickers": "This is the result of subtracting only one friend's amount: 725 - 214 = 511, but we need to subtract both amounts.",
            "587 stickers": "This is the result after subtracting only Meera's stickers (725 - 138 = 587). You also need to subtract Anita's stickers.",
            "1077 stickers": "You added all numbers (725 + 138 + 214 = 1077) instead of subtracting what was given away."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch3_t3_qe19',
        type: "mcq",
        question: "A school ordered 324 notebooks and 237 textbooks. How many books did the school order in total?",
        options: ["561 books", "87 books", "551 books", "661 books"],
        correctAnswer: "561 books",
        explanation: "This is an addition problem: 324 + 237 = 561 books. We add the two amounts to find the total number of books ordered. 📚",
        wrongAnswerExplanations: {
            "87 books": "You subtracted instead of adding. 324 - 237 = 87, but we need the total, so we add.",
            "551 books": "The calculation is incorrect. 324 + 237 = 561, not 551.",
            "661 books": "The calculation is incorrect. 324 + 237 = 561, not 661."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl3_ch3_t3_qe20',
        type: "mcq",
        question: "A water tank contained 875 liters of water. After some water was used, 392 liters remained. How much water was used?",
        options: ["483 liters", "1267 liters", "493 liters", "383 liters"],
        correctAnswer: "483 liters",
        explanation: "This is a subtraction problem: 875 - 392 = 483 liters used. We subtract what remains from the initial amount to find what was used. 💧",
        wrongAnswerExplanations: {
            "1267 liters": "You added instead of subtracting. 875 + 392 = 1267, but we need to find how much was used, so we subtract.",
            "493 liters": "The calculation is incorrect. 875 - 392 = 483, not 493.",
            "383 liters": "The calculation is incorrect. 875 - 392 = 483, not 383."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    }
]; 