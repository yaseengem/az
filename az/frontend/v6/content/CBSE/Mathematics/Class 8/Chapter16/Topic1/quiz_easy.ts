// filepath: content/CBSE/Mathematics/Class 8/Chapter16/Topic1/quiz_easy.ts
import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl8_ch16_t1_qe1',
        type: "mcq",
        question: "What is the quickest way to multiply any number by 10?",
        options: [
            "Add a zero at the end",
            "Multiply each digit by 10",
            "Add 0 + number",
            "Double the number 5 times"
        ],
        correctAnswer: "Add a zero at the end",
        explanation: "To multiply by 10, simply add a zero at the end of the number. For example, 45 × 10 = 450. This works because each place value is multiplied by 10. 🔢",
        wrongAnswerExplanations: {
            "Multiply each digit by 10": "This method is incorrect and would give wrong results.",
            "Add 0 + number": "This would not multiply the number by 10.",
            "Double the number 5 times": "This would multiply by 32, not 10."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch16_t1_qe2',
        type: "mcq",
        question: "What is the trick to quickly multiply a number by 5?",
        options: [
            "Divide by 2 and multiply by 10",
            "Add 5 repeatedly",
            "Multiply by 10 and divide by 2",
            "Add the number to itself 4 times"
        ],
        correctAnswer: "Multiply by 10 and divide by 2",
        explanation: "To multiply by 5, first multiply by 10 (add a zero) then divide by 2. For example, 24 × 5 = (24 × 10) ÷ 2 = 240 ÷ 2 = 120. This works because 5 = 10 ÷ 2. 🧮",
        wrongAnswerExplanations: {
            "Divide by 2 and multiply by 10": "This gives the same result but is less efficient mentally.",
            "Add 5 repeatedly": "This is time-consuming and prone to errors.",
            "Add the number to itself 4 times": "This would multiply by 5, but is more complicated."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch16_t1_qe3',
        type: "mcq",
        question: "To quickly multiply by 9, what can you do?",
        options: [
            "Multiply by 10 and subtract the original number",
            "Add 9 repeatedly",
            "Double the number 3 times",
            "Add the number to itself 8 times"
        ],
        correctAnswer: "Multiply by 10 and subtract the original number",
        explanation: "To multiply by 9, multiply by 10 and subtract the original number. For example, 7 × 9 = (7 × 10) - 7 = 70 - 7 = 63. This works because 9 = 10 - 1. 🎯",
        wrongAnswerExplanations: {
            "Add 9 repeatedly": "This method is time-consuming and error-prone.",
            "Double the number 3 times": "This would multiply by 8, not 9.",
            "Add the number to itself 8 times": "This is inefficient and prone to errors."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch16_t1_qe4',
        type: "mcq",
        question: "What is the fastest way to multiply a number by 100?",
        options: [
            "Add two zeros at the end",
            "Multiply by 10 twice",
            "Add 00 to the number",
            "All of the above"
        ],
        correctAnswer: "All of the above",
        explanation: "All methods work because adding two zeros or multiplying by 10 twice both multiply by 100. For example, 45 × 100 = 4500. Adding two zeros is the quickest mental method. 💫",
        wrongAnswerExplanations: {
            "Add two zeros at the end": "This is correct but not the only valid method.",
            "Multiply by 10 twice": "This is correct but not the only valid method.",
            "Add 00 to the number": "This is correct but not the only valid method."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch16_t1_qe5',
        type: "mcq",
        question: "To quickly find 15% of a number, what can you do?",
        options: [
            "Divide by 10 and add half of that",
            "Multiply by 15 and divide by 100",
            "Add 5% three times",
            "Divide by 100 and multiply by 15"
        ],
        correctAnswer: "Divide by 10 and add half of that",
        explanation: "15% = 10% + 5% = 10% + (10% ÷ 2). For example, 15% of 80: 8 + 4 = 12. This works because 15% = 10% + 5%, and 5% is half of 10%. 📊",
        wrongAnswerExplanations: {
            "Multiply by 15 and divide by 100": "This works but is less efficient mentally.",
            "Add 5% three times": "This is more complicated and time-consuming.",
            "Divide by 100 and multiply by 15": "This is less efficient than using 10% + 5%."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch16_t1_qe6',
        type: "mcq",
        question: "What's the quickest way to multiply a number by 4?",
        options: [
            "Double it twice",
            "Add it three times",
            "Multiply each digit by 4",
            "Add 4 repeatedly"
        ],
        correctAnswer: "Double it twice",
        explanation: "To multiply by 4, double the number twice. For example, 23 × 4 = 23 × 2 × 2 = 46 × 2 = 92. This works because 4 = 2 × 2. 🎲",
        wrongAnswerExplanations: {
            "Add it three times": "This gives the wrong result as it multiplies by 3.",
            "Multiply each digit by 4": "This method doesn't work for multi-digit numbers.",
            "Add 4 repeatedly": "This is time-consuming and prone to errors."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch16_t1_qe7',
        type: "mcq",
        question: "To quickly find 25% of a number, what can you do?",
        options: [
            "Divide by 4",
            "Multiply by 25 then divide by 100",
            "Take half of the half",
            "All of the above"
        ],
        correctAnswer: "All of the above",
        explanation: "All methods work because 25% = ¼ = half of half. For example, 25% of 80: 80 ÷ 4 = 20, or 80 ÷ 2 = 40, then 40 ÷ 2 = 20. Dividing by 4 is usually quickest. 💡",
        wrongAnswerExplanations: {
            "Divide by 4": "This is correct but not the only valid method.",
            "Multiply by 25 then divide by 100": "This is correct but not the only valid method.",
            "Take half of the half": "This is correct but not the only valid method."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch16_t1_qe8',
        type: "mcq",
        question: "What's the fastest way to multiply by 11 (for single-digit numbers)?",
        options: [
            "Duplicate the digit",
            "Add 1 to the number ten times",
            "Multiply by 10 and add the number",
            "Double the number and add 1"
        ],
        correctAnswer: "Duplicate the digit",
        explanation: "For single digits, multiplying by 11 creates a two-digit number with the same digit repeated. For example, 4 × 11 = 44, 7 × 11 = 77. This pattern makes mental calculation easy. ✨",
        wrongAnswerExplanations: {
            "Add 1 to the number ten times": "This is time-consuming and prone to errors.",
            "Multiply by 10 and add the number": "This works but is less efficient than duplicating the digit.",
            "Double the number and add 1": "This gives incorrect results."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch16_t1_qe9',
        type: "mcq",
        question: "To quickly multiply by 20, what can you do?",
        options: [
            "Multiply by 2 and add a zero",
            "Add two zeros and divide by 5",
            "Double the number 4 times",
            "Add 20 repeatedly"
        ],
        correctAnswer: "Multiply by 2 and add a zero",
        explanation: "20 = 2 × 10, so multiply by 2 then add a zero. For example, 35 × 20 = (35 × 2) × 10 = 70 × 10 = 700. This breaks down the multiplication into simpler steps. 🎯",
        wrongAnswerExplanations: {
            "Add two zeros and divide by 5": "This method is more complicated and gives wrong results.",
            "Double the number 4 times": "This would multiply by 16, not 20.",
            "Add 20 repeatedly": "This is time-consuming and error-prone."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch16_t1_qe10',
        type: "mcq",
        question: "What's the quickest way to multiply a number by 50?",
        options: [
            "Multiply by 100 and divide by 2",
            "Multiply by 5 and add a zero",
            "Add two zeros and divide by 2",
            "All of the above"
        ],
        correctAnswer: "All of the above",
        explanation: "All methods work because 50 = 100 ÷ 2 = 5 × 10. For example, 24 × 50 = 1200 ÷ 2 = 600. Adding two zeros and dividing by 2 is often quickest mentally. 🎨",
        wrongAnswerExplanations: {
            "Multiply by 100 and divide by 2": "This is correct but not the only valid method.",
            "Multiply by 5 and add a zero": "This is correct but not the only valid method.",
            "Add two zeros and divide by 2": "This is correct but not the only valid method."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch16_t1_qe11',
        type: "mcq",
        question: "To quickly find 1% of a number, what can you do?",
        options: [
            "Move the decimal point two places left",
            "Divide by 100",
            "Multiply by 0.01",
            "All of the above"
        ],
        correctAnswer: "All of the above",
        explanation: "All methods work because 1% = 1/100 = 0.01. For example, 1% of 300 = 3. Moving the decimal point two places left is usually the quickest mental method. 📏",
        wrongAnswerExplanations: {
            "Move the decimal point two places left": "This is correct but not the only valid method.",
            "Divide by 100": "This is correct but not the only valid method.",
            "Multiply by 0.01": "This is correct but not the only valid method."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch16_t1_qe12',
        type: "mcq",
        question: "What's the fastest way to multiply by 25?",
        options: [
            "Multiply by 100 and divide by 4",
            "Add two zeros and divide by 4",
            "Divide by 4 and add two zeros",
            "All of the above"
        ],
        correctAnswer: "All of the above",
        explanation: "All methods work because 25 = 100 ÷ 4. For example, 32 × 25 = 3200 ÷ 4 = 800. Adding two zeros and dividing by 4 is often the quickest mental method. 🎭",
        wrongAnswerExplanations: {
            "Multiply by 100 and divide by 4": "This is correct but not the only valid method.",
            "Add two zeros and divide by 4": "This is correct but not the only valid method.",
            "Divide by 4 and add two zeros": "This is correct but not the only valid method."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch16_t1_qe13',
        type: "mcq",
        question: "To quickly multiply by 99, what can you do?",
        options: [
            "Multiply by 100 and subtract the original number",
            "Add 99 repeatedly",
            "Multiply by 9 twice",
            "Double the number and multiply by 50"
        ],
        correctAnswer: "Multiply by 100 and subtract the original number",
        explanation: "99 = 100 - 1, so multiply by 100 (add two zeros) and subtract the original number. For example, 45 × 99 = 4500 - 45 = 4455. This uses the distributive property. 🎪",
        wrongAnswerExplanations: {
            "Add 99 repeatedly": "This is time-consuming and prone to errors.",
            "Multiply by 9 twice": "This gives the wrong result (81 times the number).",
            "Double the number and multiply by 50": "This gives an incorrect result."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch16_t1_qe14',
        type: "mcq",
        question: "What's the quickest way to multiply a number by 8?",
        options: [
            "Double it three times",
            "Multiply by 10 and subtract twice the number",
            "Add the number to itself 7 times",
            "Multiply each digit by 8"
        ],
        correctAnswer: "Double it three times",
        explanation: "To multiply by 8, double the number three times because 8 = 2 × 2 × 2. For example, 12 × 8 = 12 × 2 = 24 × 2 = 48 × 2 = 96. This breaks down multiplication into simpler steps. 🎲",
        wrongAnswerExplanations: {
            "Multiply by 10 and subtract twice the number": "This is more complicated and prone to errors.",
            "Add the number to itself 7 times": "This is time-consuming and error-prone.",
            "Multiply each digit by 8": "This method doesn't work for multi-digit numbers."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch16_t1_qe15',
        type: "mcq",
        question: "To quickly find 75% of a number, what can you do?",
        options: [
            "Find 25% and multiply by 3",
            "Take three-quarters",
            "Subtract 25% from 100%",
            "All of the above"
        ],
        correctAnswer: "All of the above",
        explanation: "All methods work because 75% = 3 × 25% = ¾ = 100% - 25%. For example, 75% of 80: 20 × 3 = 60 (using 25% method). Taking three-quarters is often quickest. 📊",
        wrongAnswerExplanations: {
            "Find 25% and multiply by 3": "This is correct but not the only valid method.",
            "Take three-quarters": "This is correct but not the only valid method.",
            "Subtract 25% from 100%": "This is correct but not the only valid method."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch16_t1_qe16',
        type: "mcq",
        question: "What's the fastest way to multiply by 15?",
        options: [
            "Multiply by 10 and add half of that",
            "Add the number 14 times",
            "Multiply by 3 then by 5",
            "Double the number and multiply by 7"
        ],
        correctAnswer: "Multiply by 10 and add half of that",
        explanation: "15 = 10 + 5 = 10 + (10 ÷ 2). For example, 24 × 15 = (24 × 10) + (240 ÷ 2) = 240 + 120 = 360. This breaks down multiplication into easier steps. 🎯",
        wrongAnswerExplanations: {
            "Add the number 14 times": "This is time-consuming and prone to errors.",
            "Multiply by 3 then by 5": "This works but is less efficient mentally.",
            "Double the number and multiply by 7": "This gives an incorrect result."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch16_t1_qe17',
        type: "mcq",
        question: "To quickly multiply by 12, what can you do?",
        options: [
            "Multiply by 10 and add twice the number",
            "Add the number 11 times",
            "Double the number and multiply by 6",
            "Multiply by 3 then by 4"
        ],
        correctAnswer: "Multiply by 10 and add twice the number",
        explanation: "12 = 10 + 2, so multiply by 10 and add twice the number. For example, 25 × 12 = (25 × 10) + (25 × 2) = 250 + 50 = 300. This uses the distributive property. 🎨",
        wrongAnswerExplanations: {
            "Add the number 11 times": "This is time-consuming and prone to errors.",
            "Double the number and multiply by 6": "This works but is less efficient mentally.",
            "Multiply by 3 then by 4": "This works but is less efficient than using 10 + 2."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch16_t1_qe18',
        type: "mcq",
        question: "What's the quickest way to multiply a number by 16?",
        options: [
            "Double it four times",
            "Multiply by 8 then by 2",
            "Add the number 15 times",
            "Multiply by 10 and add 6 times the number"
        ],
        correctAnswer: "Double it four times",
        explanation: "16 = 2 × 2 × 2 × 2, so double the number four times. For example, 5 × 16 = 5 × 2 = 10 × 2 = 20 × 2 = 40 × 2 = 80. This breaks down multiplication into simple doubling. 🎭",
        wrongAnswerExplanations: {
            "Multiply by 8 then by 2": "This works but requires knowing 8 times tables.",
            "Add the number 15 times": "This is time-consuming and prone to errors.",
            "Multiply by 10 and add 6 times the number": "This is more complicated and error-prone."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch16_t1_qe19',
        type: "mcq",
        question: "To quickly find 20% of a number, what can you do?",
        options: [
            "Divide by 5",
            "Find 10% and double it",
            "Multiply by 2 and divide by 10",
            "All of the above"
        ],
        correctAnswer: "All of the above",
        explanation: "All methods work because 20% = 1/5 = 2 × 10%. For example, 20% of 85: 85 ÷ 5 = 17. Finding 10% and doubling it is often the quickest mental method. 💫",
        wrongAnswerExplanations: {
            "Divide by 5": "This is correct but not the only valid method.",
            "Find 10% and double it": "This is correct but not the only valid method.",
            "Multiply by 2 and divide by 10": "This is correct but not the only valid method."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch16_t1_qe20',
        type: "mcq",
        question: "What's the fastest way to multiply by 125?",
        options: [
            "Multiply by 1000 and divide by 8",
            "Add three zeros and divide by 8",
            "Multiply by 100 and add a quarter of that",
            "All of the above"
        ],
        correctAnswer: "All of the above",
        explanation: "All methods work because 125 = 1000 ÷ 8. For example, 24 × 125 = 24000 ÷ 8 = 3000. Adding three zeros and dividing by 8 is often the quickest mental method. 🎪",
        wrongAnswerExplanations: {
            "Multiply by 1000 and divide by 8": "This is correct but not the only valid method.",
            "Add three zeros and divide by 8": "This is correct but not the only valid method.",
            "Multiply by 100 and add a quarter of that": "This is correct but not the only valid method."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    }
]; 