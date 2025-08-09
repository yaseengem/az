import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl3_ch3_t1_qe1',
        type: "mcq",
        question: "What is 356 + 243?",
        options: ["599", "589", "699", "499"],
        correctAnswer: "599",
        explanation: "Adding the numbers: 6+3=9 in ones place, 5+4=9 in tens place, and 3+2=5 in hundreds place. So 356+243=599.",
        wrongAnswerExplanations: {
            "589": "Error in addition. Check each place value carefully.",
            "699": "Error in addition. You may have miscounted in the hundreds place.",
            "499": "Error in addition. Check each place value again."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl3_ch3_t1_qe2',
        type: "mcq",
        question: "Find the sum: 425 + 138",
        options: ["563", "553", "663", "463"],
        correctAnswer: "563",
        explanation: "5+8=13, carry 1. 2+3+1=6 in tens place. 4+1=5 in hundreds place. So 425+138=563.",
        wrongAnswerExplanations: {
            "553": "Error in addition. Check the ones place again.",
            "663": "Error in addition. You may have added incorrectly in the hundreds place.",
            "463": "Error in addition. Check your carrying in the tens place."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl3_ch3_t1_qe3',
        type: "mcq",
        question: "What is 209 + 463?",
        options: ["672", "662", "772", "572"],
        correctAnswer: "672",
        explanation: "9+3=12, carry 1. 0+6+1=7 in tens place. 2+4=6 in hundreds place. So 209+463=672.",
        wrongAnswerExplanations: {
            "662": "Error in addition. Check your carrying in the ones place.",
            "772": "Error in addition. Check the hundreds place carefully.",
            "572": "Error in addition. Double-check each place value."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl3_ch3_t1_qe4',
        type: "mcq",
        question: "Rajesh had 275 marbles. His friend gave him 124 more marbles. How many marbles does Rajesh have now?",
        options: ["399", "389", "499", "299"],
        correctAnswer: "399",
        explanation: "Adding: 275+124=399. 5+4=9 in ones, 7+2=9 in tens, 2+1=3 in hundreds place.",
        wrongAnswerExplanations: {
            "389": "Error in addition. Check your work in each place value.",
            "499": "Error in addition. You may have added incorrectly in the hundreds place.",
            "299": "Error in addition. You may have subtracted instead of adding."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch3_t1_qe5',
        type: "mcq",
        question: "Find the sum: 362 + 217",
        options: ["579", "569", "589", "679"],
        correctAnswer: "579",
        explanation: "2+7=9 in ones place, 6+1=7 in tens place, 3+2=5 in hundreds place. So 362+217=579.",
        wrongAnswerExplanations: {
            "569": "Error in addition. Check the ones place again.",
            "589": "Error in addition. Check the tens place.",
            "679": "Error in addition. Double-check the hundreds place."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl3_ch3_t1_qe6',
        type: "mcq",
        question: "What is 528 + 271?",
        options: ["799", "789", "899", "699"],
        correctAnswer: "799",
        explanation: "8+1=9 in ones place, 2+7=9 in tens place, 5+2=7 in hundreds place. So 528+271=799.",
        wrongAnswerExplanations: {
            "789": "Error in addition. Check each place value carefully.",
            "899": "Error in addition. Check the hundreds place again.",
            "699": "Error in addition. You may have miscounted in the hundreds place."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl3_ch3_t1_qe7',
        type: "mcq",
        question: "A school library has 385 storybooks and 214 textbooks. How many books are there in total?",
        options: ["599", "589", "609", "499"],
        correctAnswer: "599",
        explanation: "Adding: 385+214=599. 5+4=9 in ones, 8+1=9 in tens, 3+2=5 in hundreds place.",
        wrongAnswerExplanations: {
            "589": "Error in addition. Check your carrying in each place value.",
            "609": "Error in addition. You may have made a mistake in the tens place.",
            "499": "Error in addition. Check your work carefully."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch3_t1_qe8',
        type: "mcq",
        question: "What is 175 + 326?",
        options: ["501", "401", "511", "601"],
        correctAnswer: "501",
        explanation: "5+6=11, carry 1. 7+2+1=10, carry 1. 1+3+1=5 in hundreds place. So 175+326=501.",
        wrongAnswerExplanations: {
            "401": "Error in addition. Check your carrying in the tens place.",
            "511": "Error in addition. Check the tens place calculation again.",
            "601": "Error in addition. You may have miscounted in the hundreds place."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl3_ch3_t1_qe9',
        type: "mcq",
        question: "Find the sum: 648 + 132",
        options: ["780", "880", "770", "680"],
        correctAnswer: "780",
        explanation: "8+2=10, carry 1. 4+3+1=8 in tens place. 6+1=7 in hundreds place. So 648+132=780.",
        wrongAnswerExplanations: {
            "880": "Error in addition. Check the hundreds place again.",
            "770": "Error in addition. Check the tens place carefully.",
            "680": "Error in addition. You may have miscounted in the hundreds place."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl3_ch3_t1_qe10',
        type: "mcq",
        question: "When 157 is added to 286, what is the result?",
        options: ["443", "453", "543", "343"],
        correctAnswer: "443",
        explanation: "7+6=13, carry 1. 5+8+1=14, carry 1. 1+2+1=4 in hundreds place. So 157+286=443.",
        wrongAnswerExplanations: {
            "453": "Error in addition. Check your carrying in the tens place.",
            "543": "Error in addition. Check all place values again.",
            "343": "Error in addition. You may have made an error in the hundreds place."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch3_t1_qe11',
        type: "mcq",
        question: "What number must be added to 247 to get 582?",
        options: ["335", "325", "235", "435"],
        correctAnswer: "335",
        explanation: "To find the missing number, subtract: 582-247=335. You can verify: 247+335=582.",
        wrongAnswerExplanations: {
            "325": "Error in calculation. Double-check your subtraction.",
            "235": "Error in calculation. Check each place value carefully.",
            "435": "Error in calculation. The sum would be too large."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch3_t1_qe12',
        type: "mcq",
        question: "A fruit seller sold 234 apples 🍎 in the morning and 315 apples in the evening. How many apples did he sell in total?",
        options: ["549", "559", "649", "449"],
        correctAnswer: "549",
        explanation: "Adding: 234+315=549. 4+5=9 in ones, 3+1=4 in tens, 2+3=5 in hundreds place.",
        wrongAnswerExplanations: {
            "559": "Error in addition. Check the tens place carefully.",
            "649": "Error in addition. You may have miscounted in the hundreds place.",
            "449": "Error in addition. Double-check your work."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch3_t1_qe13',
        type: "mcq",
        question: "What is the sum of 199 and 342?",
        options: ["541", "531", "641", "441"],
        correctAnswer: "541",
        explanation: "9+2=11, carry 1. 9+4+1=14, carry 1. 1+3+1=5 in hundreds place. So 199+342=541.",
        wrongAnswerExplanations: {
            "531": "Error in addition. Check your carrying in the ones place.",
            "641": "Error in addition. Check the hundreds place calculation.",
            "441": "Error in addition. You may have made an error in the hundreds place."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl3_ch3_t1_qe14',
        type: "mcq",
        question: "First day of a cricket match had 357 spectators. Second day had 246 spectators. What was the total attendance?",
        options: ["603", "593", "613", "503"],
        correctAnswer: "603",
        explanation: "Adding: 357+246=603. 7+6=13, carry 1. 5+4+1=10, carry 1. 3+2+1=6 in hundreds place.",
        wrongAnswerExplanations: {
            "593": "Error in addition. Check your carrying in the tens place.",
            "613": "Error in addition. Check the tens place calculation again.",
            "503": "Error in addition. You may have miscounted in the hundreds place."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch3_t1_qe15',
        type: "mcq",
        question: "What is 485 + 315?",
        options: ["800", "790", "810", "900"],
        correctAnswer: "800",
        explanation: "5+5=10, carry 1. 8+1+1=10, carry 1. 4+3+1=8 in hundreds place. So 485+315=800.",
        wrongAnswerExplanations: {
            "790": "Error in addition. Check your carrying in the ones place.",
            "810": "Error in addition. Check the hundreds place calculation again.",
            "900": "Error in addition. You've likely added 100 too many."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl3_ch3_t1_qe16',
        type: "mcq",
        question: "In a school, there are 345 boys and 278 girls. What is the total number of students?",
        options: ["623", "523", "723", "633"],
        correctAnswer: "623",
        explanation: "Adding: 345+278=623. 5+8=13, carry 1. 4+7+1=12, carry 1. 3+2+1=6 in hundreds place.",
        wrongAnswerExplanations: {
            "523": "Error in addition. Check your carrying carefully.",
            "723": "Error in addition. The hundreds place is incorrect.",
            "633": "Error in addition. Check the tens place calculation again."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch3_t1_qe17',
        type: "mcq",
        question: "What is the sum of 294 and 128?",
        options: ["422", "322", "522", "432"],
        correctAnswer: "422",
        explanation: "4+8=12, carry 1. 9+2+1=12, carry 1. 2+1+1=4 in hundreds place. So 294+128=422.",
        wrongAnswerExplanations: {
            "322": "Error in addition. Check your carrying in the tens place.",
            "522": "Error in addition. The hundreds place is incorrect.",
            "432": "Error in addition. Check your carrying and each place value."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl3_ch3_t1_qe18',
        type: "mcq",
        question: "Ravi has ₹256 and Meena has ₹187. How much money do they have in total?",
        options: ["₹443", "₹453", "₹343", "₹543"],
        correctAnswer: "₹443",
        explanation: "Adding: ₹256+₹187=₹443. 6+7=13, carry 1. 5+8+1=14, carry 1. 2+1+1=4 in hundreds place.",
        wrongAnswerExplanations: {
            "₹453": "Error in addition. Check the tens place calculation.",
            "₹343": "Error in addition. Check your carrying in the tens place.",
            "₹543": "Error in addition. The hundreds place is incorrect."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch3_t1_qe19',
        type: "mcq",
        question: "What is 305 + 476?",
        options: ["781", "881", "771", "681"],
        correctAnswer: "781",
        explanation: "5+6=11, carry 1. 0+7+1=8 in tens place. 3+4=7 in hundreds place. So 305+476=781.",
        wrongAnswerExplanations: {
            "881": "Error in addition. The hundreds place is incorrect.",
            "771": "Error in addition. Check the tens place calculation.",
            "681": "Error in addition. Check the hundreds place calculation again."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl3_ch3_t1_qe20',
        type: "mcq",
        question: "A bookstore sold 156 books in one week and 289 books in the next week. How many books were sold in the two weeks?",
        options: ["445", "435", "545", "535"],
        correctAnswer: "445",
        explanation: "Adding: 156+289=445. 6+9=15, carry 1. 5+8+1=14, carry 1. 1+2+1=4 in hundreds place.",
        wrongAnswerExplanations: {
            "435": "Error in addition. Check your carrying in the ones place.",
            "545": "Error in addition. The hundreds place is incorrect.",
            "535": "Error in addition. Check your carrying and each place value."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 45
    }
];
