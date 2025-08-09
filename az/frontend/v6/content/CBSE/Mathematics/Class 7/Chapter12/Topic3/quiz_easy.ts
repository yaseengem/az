// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 7\Chapter12\Topic3\quiz_easy.ts
import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl7_ch12_t3_qe1',
        type: "mcq",
        question: "What algebraic expression represents 'five more than a number x'?",
        options: ["5x", "x + 5", "5 - x", "x/5"],
        correctAnswer: "x + 5",
        explanation: "When we say 'more than', it means addition. So five more than x is x + 5. 🧮",
        wrongAnswerExplanations: {
            "5x": "5x means 5 times x, not 5 more than x.",
            "5 - x": "5 - x means 5 minus x, not 5 more than x.",
            "x/5": "x/5 means x divided by 5, not 5 more than x."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch12_t3_qe2',
        type: "mcq",
        question: "Which expression represents 'twice a number decreased by 3'?",
        options: ["2x - 3", "3 - 2x", "2(x - 3)", "2 + x - 3"],
        correctAnswer: "2x - 3",
        explanation: "'Twice a number' means 2x and 'decreased by 3' means subtracting 3, so 2x - 3. 🔢",
        wrongAnswerExplanations: {
            "3 - 2x": "This represents 3 decreased by twice the number, not twice the number decreased by 3.",
            "2(x - 3)": "This represents twice the result of (x - 3), which equals 2x - 6, not 2x - 3.",
            "2 + x - 3": "This simplifies to x - 1, not twice the number decreased by 3."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch12_t3_qe3',
        type: "mcq",
        question: "The expression for 'half of a number y' is:",
        options: ["2y", "y/2", "y - 2", "y + 1/2"],
        correctAnswer: "y/2",
        explanation: "'Half of' means dividing by 2, so half of y is y/2. 🍕",
        wrongAnswerExplanations: {
            "2y": "2y means 2 times y, not half of y.",
            "y - 2": "y - 2 means y minus 2, not half of y.",
            "y + 1/2": "y + 1/2 means y plus one-half, not half of y."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch12_t3_qe4',
        type: "mcq",
        question: "What expression represents 'the sum of x and twice y'?",
        options: ["2(x + y)", "x + 2y", "2x + y", "xy + xy"],
        correctAnswer: "x + 2y",
        explanation: "'Sum of x and twice y' means x + 2y. The sum indicates addition, and twice y is 2y. ➕",
        wrongAnswerExplanations: {
            "2(x + y)": "This equals 2x + 2y, representing twice the sum of x and y, not the sum of x and twice y.",
            "2x + y": "This is the sum of twice x and y, not the sum of x and twice y.",
            "xy + xy": "This equals 2xy, representing twice the product of x and y, not the sum of x and twice y."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch12_t3_qe5',
        type: "mcq",
        question: "Which expression represents 'a number z subtracted from 10'?",
        options: ["z - 10", "10 - z", "10z", "z/10"],
        correctAnswer: "10 - z",
        explanation: "When we say 'z subtracted from 10', we're taking z away from 10, so 10 - z. 📝",
        wrongAnswerExplanations: {
            "z - 10": "This represents 10 subtracted from z, not z subtracted from 10.",
            "10z": "This means 10 times z, not z subtracted from 10.",
            "z/10": "This means z divided by 10, not z subtracted from 10."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch12_t3_qe6',
        type: "mcq",
        question: "The expression 'three consecutive integers starting with n' is:",
        options: ["n, n+1, n+2", "3n", "n+3", "n, 2n, 3n"],
        correctAnswer: "n, n+1, n+2",
        explanation: "Consecutive integers are numbers that follow each other in sequence, so they are n, n+1, n+2. 🔢",
        wrongAnswerExplanations: {
            "3n": "This represents 3 times n, not three consecutive integers.",
            "n+3": "This represents n plus 3, not three consecutive integers.",
            "n, 2n, 3n": "These are multiples of n, not consecutive integers."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch12_t3_qe7',
        type: "mcq",
        question: "What does the expression '2p + 3' represent in words?",
        options: ["2 plus 3 times p", "p plus 3, all multiplied by 2", "Twice p plus 3", "2 times the sum of p and 3"],
        correctAnswer: "Twice p plus 3",
        explanation: "The expression 2p + 3 means two times p plus 3, or simply 'twice p plus 3'. 🧮",
        wrongAnswerExplanations: {
            "2 plus 3 times p": "This would be written as 2 + 3p, not 2p + 3.",
            "p plus 3, all multiplied by 2": "This would be written as 2(p + 3) = 2p + 6, not 2p + 3.",
            "2 times the sum of p and 3": "This would be written as 2(p + 3) = 2p + 6, not 2p + 3."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch12_t3_qe8',
        type: "mcq",
        question: "The phrase 'x decreased by 7' is represented by:",
        options: ["x + 7", "7 - x", "x - 7", "7x"],
        correctAnswer: "x - 7",
        explanation: "'Decreased by' indicates subtraction, so x decreased by 7 is x - 7. ➖",
        wrongAnswerExplanations: {
            "x + 7": "This represents x increased by 7, not decreased by 7.",
            "7 - x": "This represents 7 decreased by x, not x decreased by 7.",
            "7x": "This represents 7 times x, not x decreased by 7."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch12_t3_qe9',
        type: "mcq",
        question: "The expression for 'the product of a and b, added to 5' is:",
        options: ["a + b + 5", "5ab", "ab + 5", "(a + b)5"],
        correctAnswer: "ab + 5",
        explanation: "The product of a and b is ab, and when we add 5 to it, we get ab + 5. ✖️",
        wrongAnswerExplanations: {
            "a + b + 5": "This represents the sum of a, b, and 5, not the product of a and b added to 5.",
            "5ab": "This represents 5 times the product of a and b, not the product added to 5.",
            "(a + b)5": "This represents 5 times the sum of a and b, not the product of a and b added to 5."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch12_t3_qe10',
        type: "mcq",
        question: "What phrase best describes the expression '5m - 2'?",
        options: ["5 minus twice m", "5 times m minus 2", "m minus 2, all multiplied by 5", "2 less than 5 times m"],
        correctAnswer: "2 less than 5 times m",
        explanation: "The expression 5m - 2 means 5 times m with 2 subtracted, which is '2 less than 5 times m'. 🔢",
        wrongAnswerExplanations: {
            "5 minus twice m": "This would be written as 5 - 2m, not 5m - 2.",
            "m minus 2, all multiplied by 5": "This would be written as 5(m - 2) = 5m - 10, not 5m - 2.",
            "5 times m minus 2": "While technically correct, '2 less than 5 times m' is a more natural phrase."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch12_t3_qe11',
        type: "mcq",
        question: "The price of a pen is ₹p and the price of a pencil is ₹10 less than the pen. Which expression represents the price of the pencil?",
        options: ["p + 10", "10p", "p - 10", "10 - p"],
        correctAnswer: "p - 10",
        explanation: "If the pen costs ₹p and the pencil costs ₹10 less, then the pencil costs p - 10. 💰",
        wrongAnswerExplanations: {
            "p + 10": "This means the pencil costs ₹10 more than the pen, not less.",
            "10p": "This means the pencil costs 10 times the price of the pen.",
            "10 - p": "This means the pencil costs ₹10 minus the price of the pen."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch12_t3_qe12',
        type: "mcq",
        question: "If a school has 'n' students and each student needs 3 notebooks, which expression gives the total number of notebooks needed?",
        options: ["n + 3", "n - 3", "3/n", "3n"],
        correctAnswer: "3n",
        explanation: "With n students each needing 3 notebooks, the total is 3 × n = 3n notebooks. 📚",
        wrongAnswerExplanations: {
            "n + 3": "This would mean n notebooks plus 3 more notebooks in total.",
            "n - 3": "This would mean n notebooks minus 3 notebooks.",
            "3/n": "This would mean 3 notebooks divided by the number of students."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch12_t3_qe13',
        type: "mcq",
        question: "What expression represents 'the average of x and y'?",
        options: ["xy", "(x + y)/2", "2(x + y)", "x - y"],
        correctAnswer: "(x + y)/2",
        explanation: "The average of two numbers is their sum divided by 2, so the average of x and y is (x + y)/2. 🧮",
        wrongAnswerExplanations: {
            "xy": "This is the product of x and y, not their average.",
            "2(x + y)": "This is twice the sum of x and y, not their average.",
            "x - y": "This is the difference between x and y, not their average."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch12_t3_qe14',
        type: "mcq",
        question: "If a rectangle has length 'l' and width 'l-5', which expression gives its area?",
        options: ["l(l-5)", "2l + 2(l-5)", "l - 5", "l²"],
        correctAnswer: "l(l-5)",
        explanation: "The area of a rectangle is length × width, so here it's l × (l-5) = l(l-5). 📏",
        wrongAnswerExplanations: {
            "2l + 2(l-5)": "This is the perimeter of the rectangle, not its area.",
            "l - 5": "This is just the width of the rectangle, not its area.",
            "l²": "This would be the area if the rectangle was a square with side length l."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch12_t3_qe15',
        type: "mcq",
        question: "A taxi charges ₹50 plus ₹10 per kilometer traveled (d). Which expression represents the total fare?",
        options: ["50d", "50 + 10d", "50 + d/10", "50 - 10d"],
        correctAnswer: "50 + 10d",
        explanation: "The fare is ₹50 plus ₹10 times the distance, which gives 50 + 10d. 🚕",
        wrongAnswerExplanations: {
            "50d": "This would mean ₹50 per kilometer, with no base fare.",
            "50 + d/10": "This would mean ₹50 plus ₹0.10 per kilometer.",
            "50 - 10d": "This would mean the fare decreases as distance increases, which doesn't make sense."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch12_t3_qe16',
        type: "mcq",
        question: "If a square has side length 's', which expression represents its perimeter?",
        options: ["s²", "2s", "4s", "s/4"],
        correctAnswer: "4s",
        explanation: "The perimeter of a square is the sum of all four sides, so 4 × s = 4s. ⬜",
        wrongAnswerExplanations: {
            "s²": "This is the area of the square, not its perimeter.",
            "2s": "This would be the perimeter of a rectangle with length and width both equal to s/2.",
            "s/4": "This is one-fourth of the side length, not the perimeter."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch12_t3_qe17',
        type: "mcq",
        question: "If Raj is 'r' years old now, which expression represents his age 7 years from now?",
        options: ["r - 7", "7r", "r/7", "r + 7"],
        correctAnswer: "r + 7",
        explanation: "In 7 years, Raj's age will increase by 7, so his age will be r + 7. 🧓",
        wrongAnswerExplanations: {
            "r - 7": "This would be Raj's age 7 years ago, not 7 years from now.",
            "7r": "This would mean Raj is 7 times older, not 7 years older.",
            "r/7": "This would mean Raj is one-seventh of his current age."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch12_t3_qe18',
        type: "mcq",
        question: "If Meera has 'm' rupees and Ravi has twice as much money as Meera, which expression gives the total amount they have together?",
        options: ["2m", "3m", "m + 2", "m/2"],
        correctAnswer: "3m",
        explanation: "Ravi has 2m rupees, so together they have m + 2m = 3m rupees. 💵",
        wrongAnswerExplanations: {
            "2m": "This is just how much Ravi has, not their combined total.",
            "m + 2": "This would mean Ravi has only 2 rupees more than Meera, not twice as much.",
            "m/2": "This would mean Ravi has half as much as Meera, not twice as much."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch12_t3_qe19',
        type: "mcq",
        question: "A shopkeeper buys a shirt for ₹x and sells it for ₹x + 200. Which expression represents the profit?",
        options: ["₹x", "₹200", "₹x + 200", "₹x - 200"],
        correctAnswer: "₹200",
        explanation: "Profit = Selling price - Cost price = (x + 200) - x = 200. The profit is ₹200. 💸",
        wrongAnswerExplanations: {
            "₹x": "This is the cost price, not the profit.",
            "₹x + 200": "This is the selling price, not the profit.",
            "₹x - 200": "This would be the result if the cost price was subtracted from the wrong value."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch12_t3_qe20',
        type: "mcq",
        question: "If a train travels at 'v' km/h for 't' hours, which expression gives the total distance covered?",
        options: ["v + t", "v - t", "v/t", "v × t"],
        correctAnswer: "v × t",
        explanation: "Distance = Speed × Time, so the distance covered is v × t kilometers. 🚄",
        wrongAnswerExplanations: {
            "v + t": "This incorrectly adds speed and time, which have different units.",
            "v - t": "This incorrectly subtracts time from speed, which have different units.",
            "v/t": "This gives acceleration, not distance."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    }
];
