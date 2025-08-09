import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl7_ch17_t2_qe1',
        type: "mcq",
        question: "What is the quick way to multiply any number by 5?",
        options: [
            "Add a zero and divide by 2",
            "Multiply by 10 and divide by 2",
            "Add the number to itself 5 times",
            "Multiply by 2 and add the original number"
        ],
        correctAnswer: "Multiply by 10 and divide by 2",
        explanation: "To multiply by 5, multiply by 10 (add a zero) and divide by 2. For example, 24 × 5 = 240 ÷ 2 = 120. This works because 5 = 10 ÷ 2. 🧮",
        wrongAnswerExplanations: {
            "Add a zero and divide by 2": "Adding a zero means multiplying by 10, not 5.",
            "Add the number to itself 5 times": "This works but is not the quickest method.",
            "Multiply by 2 and add the original number": "This gives you 3 times the number, not 5 times."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch17_t2_qe2',
        type: "mcq",
        question: "What is the shortcut to multiply a number by 9?",
        options: [
            "Multiply by 10 and subtract the original number",
            "Add the number to itself 9 times",
            "Multiply by 3 three times",
            "Double the number and multiply by 4"
        ],
        correctAnswer: "Multiply by 10 and subtract the original number",
        explanation: "To multiply by 9, multiply by 10 and subtract the original number. For example, 7 × 9 = 70 - 7 = 63. This works because 9 = 10 - 1. ✨",
        wrongAnswerExplanations: {
            "Add the number to itself 9 times": "This method is too time-consuming.",
            "Multiply by 3 three times": "This gives you 27 times the number.",
            "Double the number and multiply by 4": "This gives you 8 times the number."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch17_t2_qe3',
        type: "mcq",
        question: "What is the quick way to find 15% of a number?",
        options: [
            "Divide by 10 and add half of that",
            "Multiply by 3 and divide by 20",
            "Add 5% three times",
            "Divide by 100 and multiply by 15"
        ],
        correctAnswer: "Divide by 10 and add half of that",
        explanation: "To find 15%, divide by 10 (10%) and add half of that (5%). For example, 15% of 80 = 8 + 4 = 12. This works because 15% = 10% + 5%. 💡",
        wrongAnswerExplanations: {
            "Multiply by 3 and divide by 20": "This is more complicated than needed.",
            "Add 5% three times": "This would give you 15% but takes longer.",
            "Divide by 100 and multiply by 15": "This works but is not the quickest method."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch17_t2_qe4',
        type: "mcq",
        question: "What is the shortcut to square a number ending in 5?",
        options: [
            "Multiply the first digit by its next number and add 25",
            "Square the first digit and add 25",
            "Add 5 to the first digit, multiply by 10, and add 25",
            "Double the number and multiply by 5"
        ],
        correctAnswer: "Multiply the first digit by its next number and add 25",
        explanation: "For numbers ending in 5, multiply the first digit by (first digit + 1) and append 25. For example, 25² = 2 × 3 = 6, append 25 = 625. 🎯",
        wrongAnswerExplanations: {
            "Square the first digit and add 25": "This doesn't give the correct result.",
            "Add 5 to the first digit, multiply by 10, and add 25": "This method doesn't work for squaring.",
            "Double the number and multiply by 5": "This doesn't give the square of the number."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch17_t2_qe5',
        type: "mcq",
        question: "What is the quick way to multiply by 11 (for single-digit numbers)?",
        options: [
            "Write the same digit twice",
            "Add 1 to the number and multiply by 10",
            "Multiply by 10 and add the original number",
            "Double the number and add 1"
        ],
        correctAnswer: "Write the same digit twice",
        explanation: "For single digits, multiplying by 11 gives a result where the digit is repeated. For example, 4 × 11 = 44, 7 × 11 = 77. This pattern works for all single digits. 🔢",
        wrongAnswerExplanations: {
            "Add 1 to the number and multiply by 10": "This gives a different result.",
            "Multiply by 10 and add the original number": "This is the actual calculation but not the quickest method.",
            "Double the number and add 1": "This doesn't give the product by 11."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch17_t2_qe6',
        type: "mcq",
        question: "What mental math trick helps in multiplying by 4?",
        options: [
            "Double the number twice",
            "Add the number four times",
            "Multiply by 5 and subtract the number",
            "Add a zero and divide by 25"
        ],
        correctAnswer: "Double the number twice",
        explanation: "To multiply by 4, double the number and then double again. For example, 23 × 4 = 23 × 2 = 46 × 2 = 92. This is faster than multiplying directly by 4. ✌️",
        wrongAnswerExplanations: {
            "Add the number four times": "This works but takes longer.",
            "Multiply by 5 and subtract the number": "This is more complicated.",
            "Add a zero and divide by 25": "This doesn't give the correct result."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch17_t2_qe7',
        type: "mcq",
        question: "What is the quick way to multiply by 25?",
        options: [
            "Divide by 4 and multiply by 100",
            "Multiply by 100 and divide by 4",
            "Add two zeros and divide by 4",
            "Multiply by 20 and add 5 times the number"
        ],
        correctAnswer: "Divide by 4 and multiply by 100",
        explanation: "To multiply by 25, divide by 4 and multiply by 100. For example, 48 × 25 = 48 ÷ 4 = 12 × 100 = 1200. This works because 25 = 100 ÷ 4. 💫",
        wrongAnswerExplanations: {
            "Multiply by 100 and divide by 4": "This works but with larger numbers first.",
            "Add two zeros and divide by 4": "This is the same as multiplying by 100 first.",
            "Multiply by 20 and add 5 times the number": "This works but is more complex."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch17_t2_qe8',
        type: "mcq",
        question: "What mental math trick helps in finding 1% of a number?",
        options: [
            "Move the decimal point two places left",
            "Divide by 10 twice",
            "Divide by 100",
            "All of the above"
        ],
        correctAnswer: "All of the above",
        explanation: "All methods work as they're equivalent ways to divide by 100. Moving decimal point left twice = dividing by 10 twice = dividing by 100 = finding 1%. 📊",
        wrongAnswerExplanations: {
            "Move the decimal point two places left": "This is correct but not the only method.",
            "Divide by 10 twice": "This is correct but not the only method.",
            "Divide by 100": "This is correct but not the only method."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch17_t2_qe9',
        type: "mcq",
        question: "What is the shortcut to multiply by 50?",
        options: [
            "Multiply by 100 and divide by 2",
            "Multiply by 5 and add a zero",
            "Double the number and multiply by 25",
            "Add two zeros and halve the result"
        ],
        correctAnswer: "Multiply by 100 and divide by 2",
        explanation: "To multiply by 50, multiply by 100 (add two zeros) and divide by 2. For example, 24 × 50 = 2400 ÷ 2 = 1200. This works because 50 = 100 ÷ 2. 🎯",
        wrongAnswerExplanations: {
            "Multiply by 5 and add a zero": "This gives a different result.",
            "Double the number and multiply by 25": "This works but is more complex.",
            "Add two zeros and halve the result": "This is the same as the correct answer."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch17_t2_qe10',
        type: "mcq",
        question: "What mental math trick helps in multiplying by 99?",
        options: [
            "Multiply by 100 and subtract the original number",
            "Add the number 99 times",
            "Multiply by 100 and add the number",
            "Double the number and multiply by 50"
        ],
        correctAnswer: "Multiply by 100 and subtract the original number",
        explanation: "To multiply by 99, multiply by 100 and subtract the original number. For example, 45 × 99 = 4500 - 45 = 4455. This works because 99 = 100 - 1. 🧮",
        wrongAnswerExplanations: {
            "Add the number 99 times": "This is too time-consuming.",
            "Multiply by 100 and add the number": "This would give multiplication by 101.",
            "Double the number and multiply by 50": "This gives a different result."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    }
]; 