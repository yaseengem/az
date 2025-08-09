import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl3_ch3_t2_qm1',
        type: "mcq",
        question: "Find the value of 732 - 458.",
        options: ["274", "324", "284", "264"],
        correctAnswer: "274",
        explanation: "Subtract 732 - 458 by borrowing from tens and hundreds, then subtracting each place value.",
        wrongAnswerExplanations: {
            "324": "Check your borrowing from the hundreds to tens place.",
            "284": "You may have made an error in the borrowing process.",
            "264": "Verify your subtraction in the tens place."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl3_ch3_t2_qm2',
        type: "mcq",
        question: "A school ordered 825 notebooks and received 639 notebooks. How many more notebooks does the school need to receive?",
        options: ["186", "196", "176", "286"],
        correctAnswer: "186",
        explanation: "To find remaining notebooks, subtract received from ordered: 825 - 639 = 186 notebooks still needed.",
        wrongAnswerExplanations: {
            "196": "Check your subtraction in the ones place after borrowing.",
            "176": "Verify your subtraction in the tens place.",
            "286": "Make sure you're borrowing correctly from the hundreds place."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch3_t2_qm3',
        type: "mcq",
        question: "What is the difference between the largest and the smallest 3-digit numbers?",
        options: ["899", "900", "999", "998"],
        correctAnswer: "899",
        explanation: "The largest 3-digit number is 999 and the smallest is 100. The difference is 999 - 100 = 899.",
        wrongAnswerExplanations: {
            "900": "Check your identification of the smallest 3-digit number.",
            "999": "Verify your calculation. This is the largest 3-digit number, not the difference.",
            "998": "Double-check your subtraction operation."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch3_t2_qm4',
        type: "mcq",
        question: "A number decreased by 357 equals 478. What is the number?",
        options: ["835", "825", "735", "935"],
        correctAnswer: "835",
        explanation: "Let the number be x. Then x - 357 = 478. So x = 478 + 357 = 835.",
        wrongAnswerExplanations: {
            "825": "Check your addition in the tens place.",
            "735": "Verify your calculation in the hundreds place.",
            "935": "Make sure you're adding correctly in each place value."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl3_ch3_t2_qm5',
        type: "mcq",
        question: "What must be subtracted from 803 to get 475?",
        options: ["328", "428", "338", "318"],
        correctAnswer: "328",
        explanation: "We need to find x where 803 - x = 475. So x = 803 - 475 = 328.",
        wrongAnswerExplanations: {
            "428": "Check your subtraction in the hundreds place.",
            "338": "Verify your subtraction in the tens place.",
            "318": "Double-check your borrowing and subtraction process."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch3_t2_qm6',
        type: "mcq",
        question: "A fruit seller had 953 apples. He sold 267 apples on Monday and 398 apples on Tuesday. How many apples does he have left?",
        options: ["288", "298", "388", "278"],
        correctAnswer: "288",
        explanation: "Total apples sold: 267 + 398 = 665. Remaining apples: 953 - 665 = 288 apples.",
        wrongAnswerExplanations: {
            "298": "Check your addition of apples sold or the final subtraction.",
            "388": "Verify your calculation in the hundreds place.",
            "278": "Make sure you're adding and subtracting correctly."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 60
    },
    {
        id: 'cl3_ch3_t2_qm7',
        type: "mcq",
        question: "The sum of two numbers is 784. If one number is 356, what is the other number?",
        options: ["428", "438", "328", "528"],
        correctAnswer: "428",
        explanation: "Let the other number be x. Then x + 356 = 784. So x = 784 - 356 = 428.",
        wrongAnswerExplanations: {
            "438": "Check your subtraction in the ones place.",
            "328": "Verify your subtraction in the hundreds place.",
            "528": "Make sure you're borrowing correctly in the tens place."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch3_t2_qm8',
        type: "mcq",
        question: "A shopkeeper buys a toy for ₹475 and sells it for ₹650. What is his profit?",
        options: ["₹175", "₹185", "₹165", "₹275"],
        correctAnswer: "₹175",
        explanation: "Profit = Selling price - Cost price = ₹650 - ₹475 = ₹175.",
        wrongAnswerExplanations: {
            "₹185": "Check your subtraction in the ones place.",
            "₹165": "Verify your subtraction in the tens place.",
            "₹275": "Make sure you're subtracting correctly in the hundreds place."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch3_t2_qm9',
        type: "mcq",
        question: "What is the value of 604 - 387?",
        options: ["217", "227", "317", "207"],
        correctAnswer: "217",
        explanation: "When subtracting 604 - 387, we borrow from hundreds to tens, and tens to ones before subtracting.",
        wrongAnswerExplanations: {
            "227": "Check your subtraction in the ones place after borrowing.",
            "317": "Verify your calculation in the hundreds place.",
            "207": "Make sure you're borrowing correctly for the tens place."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch3_t2_qm10',
        type: "mcq",
        question: "Ravi had ₹725. He spent ₹348 on books and ₹127 on stationery. How much money does he have left?",
        options: ["₹250", "₹240", "₹260", "₹350"],
        correctAnswer: "₹250",
        explanation: "Total spent: ₹348 + ₹127 = ₹475. Remaining money: ₹725 - ₹475 = ₹250.",
        wrongAnswerExplanations: {
            "₹240": "Check your addition of expenses or final subtraction.",
            "₹260": "Verify your calculation in the tens place.",
            "₹350": "Make sure you're adding and subtracting correctly."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 60
    },
    {
        id: 'cl3_ch3_t2_qm11',
        type: "mcq",
        question: "In a school, there are 524 girls and 489 boys. How many more girls than boys are there in the school?",
        options: ["35", "45", "135", "25"],
        correctAnswer: "35",
        explanation: "Difference = Number of girls - Number of boys = 524 - 489 = 35 more girls.",
        wrongAnswerExplanations: {
            "45": "Check your subtraction in the ones place.",
            "135": "Verify your subtraction in the hundreds place.",
            "25": "Make sure you're borrowing correctly in the tens place."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch3_t2_qm12',
        type: "mcq",
        question: "A bus can carry 400 passengers. If 276 passengers are already on the bus, how many more passengers can it carry?",
        options: ["124", "134", "224", "114"],
        correctAnswer: "124",
        explanation: "Remaining capacity = Total capacity - Current passengers = 400 - 276 = 124 more passengers.",
        wrongAnswerExplanations: {
            "134": "Check your subtraction in the ones place.",
            "224": "Verify your subtraction in the hundreds place.",
            "114": "Make sure you're borrowing correctly in the tens place."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch3_t2_qm13',
        type: "mcq",
        question: "Rita had ₹500. She spent ₹125 on a dress and ₹98 on shoes. How much money does she have left?",
        options: ["₹277", "₹287", "₹377", "₹267"],
        correctAnswer: "₹277",
        explanation: "Total spent = ₹125 + ₹98 = ₹223. Money left = ₹500 - ₹223 = ₹277.",
        wrongAnswerExplanations: {
            "₹287": "Check your addition of expenses.",
            "₹377": "Verify your subtraction in the hundreds place.",
            "₹267": "Make sure you're adding and subtracting correctly."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 60
    },
    {
        id: 'cl3_ch3_t2_qm14',
        type: "mcq",
        question: "When 387 is subtracted from a number, the result is 542. What is the number?",
        options: ["929", "939", "829", "919"],
        correctAnswer: "929",
        explanation: "Let the number be x. Then x - 387 = 542. So x = 542 + 387 = 929.",
        wrongAnswerExplanations: {
            "939": "Check your addition in the ones place.",
            "829": "Verify your addition in the hundreds place.",
            "919": "Make sure you're adding correctly in the tens place."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch3_t2_qm15',
        type: "mcq",
        question: "A toy shop had 856 toys. 397 toys were sold in the morning and 128 toys were sold in the evening. How many toys are left?",
        options: ["331", "321", "341", "421"],
        correctAnswer: "331",
        explanation: "Total toys sold = 397 + 128 = 525. Toys left = 856 - 525 = 331 toys.",
        wrongAnswerExplanations: {
            "321": "Check your addition of toys sold or final subtraction.",
            "341": "Verify your subtraction in the tens place.",
            "421": "Make sure you're adding the total sold toys correctly."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 60
    },
    {
        id: 'cl3_ch3_t2_qm16',
        type: "mcq",
        question: "What is the value of 800 - (156 + 243)?",
        options: ["401", "411", "501", "391"],
        correctAnswer: "401",
        explanation: "First calculate (156 + 243) = 399, then subtract from 800: 800 - 399 = 401.",
        wrongAnswerExplanations: {
            "411": "Check your addition inside the brackets.",
            "501": "Verify your final subtraction operation.",
            "391": "Make sure you're adding and subtracting correctly."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 60
    },
    {
        id: 'cl3_ch3_t2_qm17',
        type: "mcq",
        question: "A factory produced 976 items in a week. If 493 items were sold, how many items are still unsold?",
        options: ["483", "473", "583", "383"],
        correctAnswer: "483",
        explanation: "Unsold items = Total produced - Items sold = 976 - 493 = 483 items.",
        wrongAnswerExplanations: {
            "473": "Check your subtraction in the ones place.",
            "583": "Verify your subtraction in the hundreds place.",
            "383": "Make sure you're borrowing correctly in the tens place."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch3_t2_qm18',
        type: "mcq",
        question: "What number should be added to 367 to get 843?",
        options: ["476", "486", "376", "576"],
        correctAnswer: "476",
        explanation: "Let the number be x. Then 367 + x = 843. So x = 843 - 367 = 476.",
        wrongAnswerExplanations: {
            "486": "Check your subtraction in the ones place.",
            "376": "Verify your subtraction in the hundreds place.",
            "576": "Make sure you're borrowing correctly in the tens place."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch3_t2_qm19',
        type: "mcq",
        question: "The difference between two numbers is 234. If the larger number is 567, what is the smaller number?",
        options: ["333", "343", "323", "233"],
        correctAnswer: "333",
        explanation: "Let smaller number be x. Then 567 - x = 234. So x = 567 - 234 = 333.",
        wrongAnswerExplanations: {
            "343": "Check your subtraction in the ones place.",
            "323": "Verify your subtraction in the tens place.",
            "233": "Make sure you're subtracting correctly in the hundreds place."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch3_t2_qm20',
        type: "mcq",
        question: "Ram had 825 stickers. He gave 147 stickers to Sita and 278 stickers to Gita. How many stickers does Ram have now?",
        options: ["400", "410", "390", "300"],
        correctAnswer: "400",
        explanation: "Total stickers given away = 147 + 278 = 425. Stickers left = 825 - 425 = 400 stickers.",
        wrongAnswerExplanations: {
            "410": "Check your addition of stickers given away.",
            "390": "Verify your final subtraction operation.",
            "300": "Make sure you're adding and subtracting correctly."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 60
    }
];
