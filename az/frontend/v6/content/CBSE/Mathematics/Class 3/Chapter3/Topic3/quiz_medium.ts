import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl3_ch3_t3_qm1',
        type: "mcq",
        question: "A fruit seller had 356 oranges. He sold 167 oranges in the morning and 98 oranges in the evening. How many oranges did he have left?",
        options: ["91 oranges", "621 oranges", "189 oranges", "289 oranges"],
        correctAnswer: "91 oranges",
        explanation: "First find the total oranges sold: 167 + 98 = 265. Then subtract from initial amount: 356 - 265 = 91 oranges remaining. This requires addition followed by subtraction. 🍊",
        wrongAnswerExplanations: {
            "621 oranges": "You added all numbers (356 + 167 + 98 = 621) instead of subtracting the oranges sold.",
            "189 oranges": "You only subtracted the morning sales (356 - 167 = 189) without accounting for evening sales.",
            "289 oranges": "This calculation is incorrect. The correct answer is 356 - 167 - 98 = 91."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch3_t3_qm2', type: "mcq", question: "Rohan had 275 rupees. He spent 98 rupees on a book and 57 rupees on a pen. How much money does he have left?", options: ["120 rupees", "177 rupees", "430 rupees", "155 rupees"], correctAnswer: "120 rupees",
        explanation: "First find the total amount spent: 98 + 57 = 155. Then subtract from initial amount: 275 - 155 = 120 rupees left. This requires addition followed by subtraction. 💰",
        wrongAnswerExplanations: {
            "430 rupees": "You added all numbers (275 + 98 + 57 = 430) instead of subtracting the money spent.",
            "155 rupees": "This is the amount spent (98 + 57 = 155), not the amount remaining.",
            "177 rupees": "You only subtracted one expense (275 - 98 = 177) without accounting for the second expense."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch3_t3_qm3',
        type: "mcq",
        question: "A baker made 425 cookies. He sold 136 cookies on Saturday and 197 cookies on Sunday. He gave 25 cookies to his neighbor. How many cookies were left?",
        options: ["67 cookies", "92 cookies", "783 cookies", "217 cookies"],
        correctAnswer: "67 cookies",
        explanation: "Find the total cookies no longer with the baker: 136 + 197 + 25 = 358. Then subtract from initial amount: 425 - 358 = 67 cookies left. This requires addition followed by subtraction. 🍪",
        wrongAnswerExplanations: {
            "92 cookies": "You didn't account for the cookies given to the neighbor: 425 - 136 - 197 = 92, but you also need to subtract 25.",
            "783 cookies": "You added all numbers (425 + 136 + 197 + 25 = 783) instead of subtracting what was sold or given away.",
            "217 cookies": "This calculation is incorrect. After selling on both days, he had 425 - 136 - 197 = 92 cookies, and after giving 25 to the neighbor, 92 - 25 = 67 cookies remained."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl3_ch3_t3_qm4',
        type: "mcq",
        question: "A shop had 347 chocolates. It received 128 more chocolates. If it sold 215 chocolates, how many chocolates does the shop have now?",
        options: ["260 chocolates", "434 chocolates", "690 chocolates", "132 chocolates"],
        correctAnswer: "260 chocolates",
        explanation: "First add the new chocolates: 347 + 128 = 475. Then subtract what was sold: 475 - 215 = 260 chocolates remaining. This requires addition followed by subtraction. 🍫",
        wrongAnswerExplanations: {
            "434 chocolates": "You added what was sold instead of subtracting: 347 + 128 + 215 = 690. Since chocolates were sold, we need to subtract.",
            "690 chocolates": "You added all numbers (347 + 128 + 215 = 690) instead of subtracting what was sold.",
            "132 chocolates": "You subtracted incorrectly: (347 + 128) - 215 = 475 - 215 = 260, not 132."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch3_t3_qm5',
        type: "mcq",
        question: "In a school, there are 253 boys and 276 girls. If 128 students were absent today, how many students attended school?",
        options: ["401 students", "529 students", "149 students", "657 students"],
        correctAnswer: "401 students",
        explanation: "First find the total students: 253 + 276 = 529. Then subtract the absent students: 529 - 128 = 401 students attended. This requires addition followed by subtraction. 👫",
        wrongAnswerExplanations: {
            "529 students": "This is the total number of students (253 + 276 = 529), but you need to subtract the absent students as well.",
            "149 students": "This calculation is incorrect. The total students is 529, and after subtracting 128 absent students, 401 students attended.",
            "657 students": "You added all numbers (253 + 276 + 128 = 657) instead of subtracting the absent students."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch3_t3_qm6',
        type: "mcq",
        question: "A library had 615 books. It received 247 new books and gave away 128 old books. How many books does the library have now?",
        options: ["734 books", "487 books", "990 books", "368 books"],
        correctAnswer: "734 books",
        explanation: "Add the new books: 615 + 247 = 862. Then subtract the books given away: 862 - 128 = 734 books remaining. This requires addition followed by subtraction. 📚",
        wrongAnswerExplanations: {
            "487 books": "You subtracted both numbers (615 - 247 - 128 = 240) instead of adding the new books and subtracting the ones given away.",
            "990 books": "You added all numbers (615 + 247 + 128 = 990) instead of subtracting the books given away.",
            "368 books": "This calculation is incorrect. The correct calculation is 615 + 247 - 128 = 734."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch3_t3_qm7',
        type: "mcq",
        question: "Suresh went to the market with 500 rupees. He spent 275 rupees on vegetables and 165 rupees on fruits. How much money does he have left?",
        options: ["60 rupees", "940 rupees", "225 rupees", "335 rupees"],
        correctAnswer: "60 rupees",
        explanation: "Find the total spent: 275 + 165 = 440. Then subtract from initial amount: 500 - 440 = 60 rupees left. This requires addition followed by subtraction. 🛒",
        wrongAnswerExplanations: {
            "940 rupees": "You added all numbers (500 + 275 + 165 = 940) instead of subtracting the money spent.",
            "225 rupees": "You only subtracted the vegetables (500 - 275 = 225) without accounting for the fruits.",
            "335 rupees": "You only subtracted the fruits (500 - 165 = 335) without accounting for the vegetables."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch3_t3_qm8',
        type: "mcq",
        question: "Rita bought 325 candies for a party. Her friends ate 148 candies. Rita's mother gave her 75 more candies. How many candies does Rita have now?",
        options: ["252 candies", "177 candies", "548 candies", "400 candies"],
        correctAnswer: "252 candies",
        explanation: "First, find candies after eating: 325 - 148 = 177. Then add new candies: 177 + 75 = 252 candies. This requires subtraction followed by addition. 🍬",
        wrongAnswerExplanations: {
            "177 candies": "This is the number after friends ate candies (325 - 148 = 177), but you need to add the new candies received.",
            "548 candies": "You added all numbers (325 + 148 + 75 = 548) instead of subtracting the candies eaten.",
            "400 candies": "You added the new candies to the initial amount without subtracting what was eaten: 325 + 75 = 400."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch3_t3_qm9',
        type: "mcq",
        question: "A teacher had 136 stickers. She gave 25 stickers to group A, 32 stickers to group B, and 41 stickers to group C. How many stickers does she have left?",
        options: ["38 stickers", "79 stickers", "234 stickers", "98 stickers"],
        correctAnswer: "38 stickers",
        explanation: "Find the total stickers given away: 25 + 32 + 41 = 98. Then subtract from initial amount: 136 - 98 = 38 stickers left. This requires addition followed by subtraction. 📝",
        wrongAnswerExplanations: {
            "79 stickers": "This calculation is incorrect. After giving to all groups, the teacher has 136 - 25 - 32 - 41 = 38 stickers left, not 79.",
            "234 stickers": "You added all numbers (136 + 25 + 32 + 41 = 234) instead of subtracting the stickers given away.",
            "98 stickers": "This is the total number of stickers given away (25 + 32 + 41 = 98), not the number remaining."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl3_ch3_t3_qm10',
        type: "mcq",
        question: "A school had 416 chairs. It received 125 new chairs but then 89 chairs were broken and removed. How many chairs does the school have now?",
        options: ["452 chairs", "291 chairs", "630 chairs", "541 chairs"],
        correctAnswer: "452 chairs",
        explanation: "Add the new chairs: 416 + 125 = 541. Then subtract the broken chairs: 541 - 89 = 452 chairs remaining. This requires addition followed by subtraction. 🪑",
        wrongAnswerExplanations: {
            "291 chairs": "You subtracted both numbers (416 - 125 - 89 = 202) instead of adding the new chairs and subtracting the broken ones.",
            "630 chairs": "You added all numbers (416 + 125 + 89 = 630) instead of subtracting the broken chairs.",
            "541 chairs": "This is the number after adding new chairs (416 + 125 = 541), but you need to subtract the broken chairs as well."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch3_t3_qm11',
        type: "mcq",
        question: "A bookstore sold 138 books on Monday, 156 books on Tuesday, and 165 books on Wednesday. How many books were sold in all?",
        options: ["459 books", "294 books", "303 books", "449 books"],
        correctAnswer: "459 books",
        explanation: "Add all three days' sales: 138 + 156 + 165 = 459 books. This requires adding multiple quantities to find the total. 📚",
        wrongAnswerExplanations: {
            "294 books": "You only added Monday and Tuesday (138 + 156 = 294) without including Wednesday's sales.",
            "303 books": "You only added Tuesday and Wednesday (156 + 147 = 303) without including Monday's sales.",
            "449 books": "The calculation is incorrect. 138 + 156 + 165 = 459, not 449."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch3_t3_qm12',
        type: "mcq",
        question: "During a school trip, 215 children visited a museum and 175 children visited a zoo. If 85 children visited both places, how many different children went on the trip?",
        options: ["305 children", "390 children", "475 children", "260 children"],
        correctAnswer: "305 children",
        explanation: "Add both groups, then subtract those who visited both (to avoid counting them twice): 215 + 175 - 85 = 305 children. This uses addition and subtraction to solve a counting problem. 🦒",
        wrongAnswerExplanations: {
            "390 children": "You just added both groups (215 + 175 = 390) without accounting for the children who visited both places.",
            "475 children": "You added all numbers (215 + 175 + 85 = 475), but the 85 children are already counted in both groups.",
            "260 children": "This calculation is incorrect. The correct calculation is 215 + 175 - 85 = 305."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl3_ch3_t3_qm13',
        type: "mcq",
        question: "A shop had 645 pencils. It sold 268 pencils in the first week and 175 pencils in the second week. In the third week, it received 95 new pencils. How many pencils does the shop have now?",
        options: ["297 pencils", "202 pencils", "745 pencils", "393 pencils"],
        correctAnswer: "297 pencils",
        explanation: "Calculate pencils after sales: 645 - 268 - 175 = 202. Then add new pencils: 202 + 95 = 297. This requires subtraction followed by addition. ✏️",
        wrongAnswerExplanations: {
            "202 pencils": "This is the number after sales (645 - 268 - 175 = 202), but you need to add the new pencils received.",
            "745 pencils": "You added all positive values (645 + 95 = 740) without subtracting the pencils sold.",
            "393 pencils": "The calculation is incorrect. First find pencils after sales (645 - 268 - 175 = 202), then add new pencils: 202 + 95 = 297."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 60
    },
    {
        id: 'cl3_ch3_t3_qm14',
        type: "mcq",
        question: "Meera saved 245 rupees in January, 189 rupees in February, and 278 rupees in March. She spent 350 rupees to buy a gift. How much money does she have left?",
        options: ["362 rupees", "712 rupees", "432 rupees", "342 rupees"],
        correctAnswer: "362 rupees",
        explanation: "Find the total saved: 245 + 189 + 278 = 712. Then subtract what was spent: 712 - 350 = 362 rupees left. This requires addition followed by subtraction. 💰",
        wrongAnswerExplanations: {
            "712 rupees": "This is the total amount saved (245 + 189 + 278 = 712), but you need to subtract the amount spent.",
            "432 rupees": "You made a calculation error. The total saved is 712, and 712 - 350 = 362, not 432.",
            "342 rupees": "The calculation is incorrect. The correct calculation is 245 + 189 + 278 - 350 = 362."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl3_ch3_t3_qm15',
        type: "mcq",
        question: "A water tank contained 525 liters of water. If 210 liters were used in the morning and 185 liters were used in the evening, how much water was added to the tank if it now contains 355 liters?",
        options: ["225 liters", "95 liters", "910 liters", "130 liters"],
        correctAnswer: "225 liters",
        explanation: "First find water after usage: 525 - 210 - 185 = 130 liters. For final amount to be 355 liters, added water = 355 - 130 = 225 liters. This requires subtraction followed by another calculation. 💧",
        wrongAnswerExplanations: {
            "95 liters": "This is incorrect. The amount of water after usage is 130 liters, and the difference to 355 liters is 225 liters.",
            "910 liters": "You added all values (525 + 210 + 185 = 920) instead of following the problem steps.",
            "130 liters": "This is the amount of water left after usage (525 - 210 - 185 = 130), not the amount added."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 60
    },
    {
        id: 'cl3_ch3_t3_qm16',
        type: "mcq",
        question: "Ram, Shyam, and Mohan collected marbles. Ram collected 125 marbles, Shyam collected 164 marbles, and Mohan collected 138 marbles. How many more marbles did Shyam collect than Ram?",
        options: ["39 marbles", "289 marbles", "427 marbles", "26 marbles"],
        correctAnswer: "39 marbles",
        explanation: "To find how many more marbles Shyam collected than Ram, subtract: 164 - 125 = 39 marbles. This uses subtraction to compare two quantities. 🔮",
        wrongAnswerExplanations: {
            "289 marbles": "This is the total of Ram and Shyam's marbles (125 + 164 = 289), not the difference between them.",
            "427 marbles": "This is the total of all three boys' marbles (125 + 164 + 138 = 427), not the difference between Shyam and Ram.",
            "26 marbles": "This is the difference between Shyam and Mohan (164 - 138 = 26), not between Shyam and Ram."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch3_t3_qm17',
        type: "mcq",
        question: "A factory produced 258 toys on Monday, 213 toys on Tuesday, and 194 toys on Wednesday. If 587 toys were shipped out, how many toys remain at the factory?",
        options: ["78 toys", "665 toys", "471 toys", "1252 toys"],
        correctAnswer: "78 toys",
        explanation: "Find the total toys produced: 258 + 213 + 194 = 665. Then subtract the toys shipped: 665 - 587 = 78 toys remain. This requires addition followed by subtraction. 🧸",
        wrongAnswerExplanations: {
            "665 toys": "This is the total number of toys produced (258 + 213 + 194 = 665), but you need to subtract the toys shipped out.",
            "471 toys": "This is not the correct calculation. The total toys produced is 665, and 665 - 587 = 78 toys remain.",
            "1252 toys": "You added all numbers (258 + 213 + 194 + 587 = 1252) instead of subtracting the toys shipped."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl3_ch3_t3_qm18',
        type: "mcq",
        question: "A school collected 378 kg of paper, 254 kg of plastic, and 198 kg of metal for recycling. How much material was collected in all?",
        options: ["830 kg", "632 kg", "576 kg", "424 kg"],
        correctAnswer: "830 kg",
        explanation: "Add all three types of material: 378 + 254 + 198 = 830 kg. This requires adding multiple quantities to find the total. ♻️",
        wrongAnswerExplanations: {
            "632 kg": "You only added paper and plastic (378 + 254 = 632) without including metal.",
            "576 kg": "You only added plastic and metal (254 + 198 = 452) or made some other calculation error.",
            "424 kg": "This calculation is incorrect. The correct sum is 378 + 254 + 198 = 830 kg."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch3_t3_qm19',
        type: "mcq",
        question: "Rani had some marbles. She won 25 more marbles in a game. Now she has 73 marbles. How many marbles did Rani have in the beginning?",
        options: ["48 marbles", "98 marbles", "25 marbles", "73 marbles"],
        correctAnswer: "48 marbles",
        explanation: "If she started with x marbles, then x + 25 = 73. Solving for x: x = 73 - 25 = 48 marbles. This requires working backwards using subtraction. 🔮",
        wrongAnswerExplanations: {
            "98 marbles": "You added instead of subtracting: 73 + 25 = 98. Since she gained 25 marbles, we need to subtract to find the starting amount.",
            "25 marbles": "This is the number of marbles she won, not what she started with.",
            "73 marbles": "This is her final number of marbles, not what she started with."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch3_t3_qm20',
        type: "mcq",
        question: "A car traveled 157 km on Monday, 203 km on Tuesday, and 184 km on Wednesday. How much farther did the car travel on Tuesday than on Monday?",
        options: ["46 km", "544 km", "19 km", "360 km"],
        correctAnswer: "46 km",
        explanation: "To find how much farther the car traveled on Tuesday than Monday, subtract: 203 - 157 = 46 km. This uses subtraction to compare two quantities. 🚗",
        wrongAnswerExplanations: {
            "544 km": "This is the total distance traveled on all three days (157 + 203 + 184 = 544), not the difference between Tuesday and Monday.",
            "19 km": "This is the difference between Tuesday and Wednesday (203 - 184 = 19), not between Tuesday and Monday.",
            "360 km": "This is the sum of Monday and Tuesday's distances (157 + 203 = 360), not the difference between them."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    }
]; 