import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl7_ch4_t1_qe1',
        type: "mcq",
        question: "If a number increased by 5 is 12, what is the equation?",
        options: ["x + 5 = 12", "x - 5 = 12", "5x = 12", "x/5 = 12"],
        correctAnswer: "x + 5 = 12",
        explanation: "The phrase 'increased by' means addition, so x + 5 = 12 represents the situation. ➕",
        wrongAnswerExplanations: {
            "x - 5 = 12": "This would mean the number decreased by 5.",
            "5x = 12": "This would mean the number multiplied by 5.",
            "x/5 = 12": "This would mean the number divided by 5."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch4_t1_qe2',
        type: "mcq",
        question: "A number when multiplied by 3 gives 15. What is the equation?",
        options: ["x + 3 = 15", "x - 3 = 15", "3x = 15", "x/3 = 15"],
        correctAnswer: "3x = 15",
        explanation: "The phrase 'multiplied by' means multiplication, so 3x = 15 represents the situation. ✖️",
        wrongAnswerExplanations: {
            "x + 3 = 15": "This would mean the number increased by 3.",
            "x - 3 = 15": "This would mean the number decreased by 3.",
            "x/3 = 15": "This would mean the number divided by 3."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch4_t1_qe3',
        type: "mcq",
        question: "If you have ₹100 and spend ₹x, leaving you with ₹40, what is the equation?",
        options: ["100 + x = 40", "100 - x = 40", "x - 100 = 40", "100/x = 40"],
        correctAnswer: "100 - x = 40",
        explanation: "Starting amount minus amount spent equals remaining amount. 💰",
        wrongAnswerExplanations: {
            "100 + x = 40": "This would mean you gained money.",
            "x - 100 = 40": "This would mean you spent more than you had.",
            "100/x = 40": "This would mean division, not subtraction."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch4_t1_qe4',
        type: "mcq",
        question: "The sum of two numbers is 25. If one number is x, what is the equation?",
        options: ["x = 25", "x + y = 25", "x - y = 25", "x × y = 25"],
        correctAnswer: "x + y = 25",
        explanation: "Sum means addition, so x + y = 25 represents the situation. ➕",
        wrongAnswerExplanations: {
            "x = 25": "This would mean the first number is 25.",
            "x - y = 25": "This would mean the difference is 25.",
            "x × y = 25": "This would mean the product is 25."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch4_t1_qe5',
        type: "mcq",
        question: "A rectangle's length is 5 cm more than its width. If width is x, what is the equation for length?",
        options: ["x = 5", "x + 5", "x - 5", "5x"],
        correctAnswer: "x + 5",
        explanation: "5 cm more than width means add 5 to width. 📏",
        wrongAnswerExplanations: {
            "x = 5": "This would mean width is 5 cm.",
            "x - 5": "This would mean length is 5 cm less than width.",
            "5x": "This would mean length is 5 times the width."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch4_t1_qe6',
        type: "mcq",
        question: "If a number is divided by 4 and the result is 3, what is the equation?",
        options: ["x + 4 = 3", "x - 4 = 3", "4x = 3", "x/4 = 3"],
        correctAnswer: "x/4 = 3",
        explanation: "Divided by means division, so x/4 = 3 represents the situation. ➗",
        wrongAnswerExplanations: {
            "x + 4 = 3": "This would mean the number increased by 4.",
            "x - 4 = 3": "This would mean the number decreased by 4.",
            "4x = 3": "This would mean the number multiplied by 4."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch4_t1_qe7',
        type: "mcq",
        question: "The difference between two numbers is 8. If the larger number is x, what is the equation?",
        options: ["x - y = 8", "x + y = 8", "x = 8", "y = 8"],
        correctAnswer: "x - y = 8",
        explanation: "Difference means subtraction, so x - y = 8 represents the situation. ➖",
        wrongAnswerExplanations: {
            "x + y = 8": "This would mean the sum is 8.",
            "x = 8": "This would mean the larger number is 8.",
            "y = 8": "This would mean the smaller number is 8."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch4_t1_qe8',
        type: "mcq",
        question: "A number is 7 less than another number. If the first number is x, what is the equation?",
        options: ["x = y - 7", "x = y + 7", "x = 7y", "x = y/7"],
        correctAnswer: "x = y - 7",
        explanation: "7 less than means subtract 7, so x = y - 7 represents the situation. ➖",
        wrongAnswerExplanations: {
            "x = y + 7": "This would mean 7 more than.",
            "x = 7y": "This would mean 7 times.",
            "x = y/7": "This would mean one-seventh of."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch4_t1_qe9',
        type: "mcq",
        question: "If you have 3 times as many pencils as pens, and you have x pens, what is the equation for pencils?",
        options: ["x + 3", "x - 3", "3x", "x/3"],
        correctAnswer: "3x",
        explanation: "3 times as many means multiply by 3, so 3x represents the number of pencils. ✏️",
        wrongAnswerExplanations: {
            "x + 3": "This would mean 3 more than pens.",
            "x - 3": "This would mean 3 less than pens.",
            "x/3": "This would mean one-third of pens."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch4_t1_qe10',
        type: "mcq",
        question: "The sum of three consecutive numbers is 18. If the first number is x, what is the equation?",
        options: ["x = 18", "x + (x+1) = 18", "x + (x+1) + (x+2) = 18", "3x = 18"],
        correctAnswer: "x + (x+1) + (x+2) = 18",
        explanation: "Consecutive numbers increase by 1, so the sum is x + (x+1) + (x+2) = 18. 🔢",
        wrongAnswerExplanations: {
            "x = 18": "This would mean only the first number is 18.",
            "x + (x+1) = 18": "This would only add two numbers.",
            "3x = 18": "This would mean three times the first number."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch4_t1_qe11',
        type: "mcq",
        question: "A number when divided by 2 and then increased by 3 gives 7. What is the equation?",
        options: ["x/2 + 3 = 7", "2x + 3 = 7", "x + 3/2 = 7", "x/2 - 3 = 7"],
        correctAnswer: "x/2 + 3 = 7",
        explanation: "First divide by 2, then add 3, so x/2 + 3 = 7 represents the situation. ➗➕",
        wrongAnswerExplanations: {
            "2x + 3 = 7": "This would multiply by 2 instead of dividing.",
            "x + 3/2 = 7": "This would add 3/2 instead of dividing by 2 first.",
            "x/2 - 3 = 7": "This would subtract 3 instead of adding."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch4_t1_qe12',
        type: "mcq",
        question: "If you have ₹50 and want to buy some chocolates at ₹10 each, how many can you buy? What is the equation?",
        options: ["10x = 50", "x + 10 = 50", "x - 10 = 50", "x/10 = 50"],
        correctAnswer: "10x = 50",
        explanation: "Cost per chocolate times number of chocolates equals total money. 🍫",
        wrongAnswerExplanations: {
            "x + 10 = 50": "This would add 10 to the number of chocolates.",
            "x - 10 = 50": "This would subtract 10 from the number of chocolates.",
            "x/10 = 50": "This would divide the number of chocolates by 10."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch4_t1_qe13',
        type: "mcq",
        question: "The perimeter of a square is 20 cm. What is the equation for its side length?",
        options: ["x = 20", "4x = 20", "x + 4 = 20", "x/4 = 20"],
        correctAnswer: "4x = 20",
        explanation: "Perimeter of square is 4 times side length, so 4x = 20. ⬜",
        wrongAnswerExplanations: {
            "x = 20": "This would mean side length is 20 cm.",
            "x + 4 = 20": "This would add 4 to side length.",
            "x/4 = 20": "This would divide side length by 4."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch4_t1_qe14',
        type: "mcq",
        question: "A number is 5 more than twice another number. If the second number is x, what is the equation?",
        options: ["y = 2x + 5", "y = 2x - 5", "y = x/2 + 5", "y = x + 5"],
        correctAnswer: "y = 2x + 5",
        explanation: "Twice means multiply by 2, then add 5, so y = 2x + 5. 🔢",
        wrongAnswerExplanations: {
            "y = 2x - 5": "This would subtract 5 instead of adding.",
            "y = x/2 + 5": "This would divide by 2 instead of multiplying.",
            "y = x + 5": "This would only add 5 without doubling."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch4_t1_qe15',
        type: "mcq",
        question: "If you have some marbles and give 3 to your friend, you have 7 left. What is the equation?",
        options: ["x + 3 = 7", "x - 3 = 7", "3x = 7", "x/3 = 7"],
        correctAnswer: "x - 3 = 7",
        explanation: "Starting amount minus 3 given away equals 7 left. 🎯",
        wrongAnswerExplanations: {
            "x + 3 = 7": "This would mean you gained 3 marbles.",
            "3x = 7": "This would mean you have 3 times as many marbles.",
            "x/3 = 7": "This would mean you divided your marbles by 3."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch4_t1_qe16',
        type: "mcq",
        question: "The sum of a number and its half is 15. What is the equation?",
        options: ["x + x = 15", "x + x/2 = 15", "x - x/2 = 15", "x × x/2 = 15"],
        correctAnswer: "x + x/2 = 15",
        explanation: "Number plus half of number equals 15, so x + x/2 = 15. ➕",
        wrongAnswerExplanations: {
            "x + x = 15": "This would add the number to itself.",
            "x - x/2 = 15": "This would subtract half instead of adding.",
            "x × x/2 = 15": "This would multiply instead of adding."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch4_t1_qe17',
        type: "mcq",
        question: "A rectangle's area is 24 cm². If its length is 6 cm, what is the equation for width?",
        options: ["6x = 24", "x + 6 = 24", "x - 6 = 24", "x/6 = 24"],
        correctAnswer: "6x = 24",
        explanation: "Area = length × width, so 6x = 24 represents the situation. 📐",
        wrongAnswerExplanations: {
            "x + 6 = 24": "This would add length and width.",
            "x - 6 = 24": "This would subtract length from width.",
            "x/6 = 24": "This would divide width by length."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch4_t1_qe18',
        type: "mcq",
        question: "If you have twice as many apples as oranges, and you have x oranges, what is the equation for apples?",
        options: ["x + 2", "x - 2", "2x", "x/2"],
        correctAnswer: "2x",
        explanation: "Twice as many means multiply by 2, so 2x represents the number of apples. 🍎",
        wrongAnswerExplanations: {
            "x + 2": "This would mean 2 more than oranges.",
            "x - 2": "This would mean 2 less than oranges.",
            "x/2": "This would mean half as many as oranges."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch4_t1_qe19',
        type: "mcq",
        question: "The sum of two numbers is 30 and their difference is 10. What is the equation for the sum?",
        options: ["x - y = 30", "x + y = 30", "x = 30", "y = 30"],
        correctAnswer: "x + y = 30",
        explanation: "Sum means addition, so x + y = 30 represents the sum of the numbers. ➕",
        wrongAnswerExplanations: {
            "x - y = 30": "This would represent the difference, not the sum.",
            "x = 30": "This would mean one number is 30.",
            "y = 30": "This would mean the other number is 30."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch4_t1_qe20',
        type: "mcq",
        question: "A number when increased by 8 gives 15. What is the equation?",
        options: ["x + 8 = 15", "x - 8 = 15", "8x = 15", "x/8 = 15"],
        correctAnswer: "x + 8 = 15",
        explanation: "Increased by means addition, so x + 8 = 15 represents the situation. ➕",
        wrongAnswerExplanations: {
            "x - 8 = 15": "This would mean the number decreased by 8.",
            "8x = 15": "This would mean the number multiplied by 8.",
            "x/8 = 15": "This would mean the number divided by 8."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    }
]; 