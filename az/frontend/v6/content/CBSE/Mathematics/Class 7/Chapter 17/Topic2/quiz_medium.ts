import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl7_ch17_t2_qm1',
        type: "mcq",
        question: "Using mental math tricks, what is the fastest way to calculate 98 × 5?",
        options: [
            "(100 × 5) - (2 × 5)",
            "(98 × 10) ÷ 2",
            "98 + 98 + 98 + 98 + 98",
            "(100 - 2) × 5"
        ],
        correctAnswer: "(100 × 5) - (2 × 5)",
        explanation: "Break 98 into (100 - 2), then multiply each part by 5. 100 × 5 = 500, 2 × 5 = 10, so 98 × 5 = 490. This is faster than other methods. 🎯",
        wrongAnswerExplanations: {
            "(98 × 10) ÷ 2": "This works but involves larger numbers first.",
            "98 + 98 + 98 + 98 + 98": "This is too time-consuming.",
            "(100 - 2) × 5": "This is the same as the correct method but not broken down."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch17_t2_qm2',
        type: "mcq",
        question: "What mental math trick can be used to quickly find 87.5% of a number?",
        options: [
            "Divide by 8 and multiply by 7",
            "Find 75% and add 12.5%",
            "Subtract 12.5% from 100%",
            "Divide by 8, multiply by 7, then add the original number"
        ],
        correctAnswer: "Divide by 8 and multiply by 7",
        explanation: "87.5% = 7/8 = 0.875, so divide by 8 and multiply by 7. For example, 87.5% of 40 = (40 ÷ 8) × 7 = 5 × 7 = 35. This is quicker than other methods. 💡",
        wrongAnswerExplanations: {
            "Find 75% and add 12.5%": "This requires more steps and calculations.",
            "Subtract 12.5% from 100%": "This is the concept but not the calculation method.",
            "Divide by 8, multiply by 7, then add the original number": "This would give more than 87.5%."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch17_t2_qm3',
        type: "mcq",
        question: "What is the quickest way to mentally calculate 15² using special number tricks?",
        options: [
            "(10 + 5)² = 100 + 100 + 25",
            "(20 - 5)² = 400 - 200 + 25",
            "15 × 10 + 15 × 5",
            "First digit (1) × next digit (2) = 2, append 25"
        ],
        correctAnswer: "First digit (1) × next digit (2) = 2, append 25",
        explanation: "For numbers ending in 5, multiply first digit by next number and append 25. Here, 1 × 2 = 2, append 25 = 225. This is the fastest method. 🔢",
        wrongAnswerExplanations: {
            "(10 + 5)² = 100 + 100 + 25": "This expansion takes more steps.",
            "(20 - 5)² = 400 - 200 + 25": "This method is more complex.",
            "15 × 10 + 15 × 5": "This distributive method takes longer."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch17_t2_qm4',
        type: "mcq",
        question: "Using mental math, what's the fastest way to calculate 624 ÷ 8?",
        options: [
            "Divide by 2 three times",
            "First divide by 4, then by 2",
            "Multiply by 0.125",
            "Divide by 16, then multiply by 2"
        ],
        correctAnswer: "Divide by 2 three times",
        explanation: "Since 8 = 2³, divide by 2 three times: 624 ÷ 2 = 312 ÷ 2 = 156 ÷ 2 = 78. Each step is simple division by 2. ➗",
        wrongAnswerExplanations: {
            "First divide by 4, then by 2": "This works but might be harder mentally.",
            "Multiply by 0.125": "Converting to decimals is more complex.",
            "Divide by 16, then multiply by 2": "This involves more complex division."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch17_t2_qm5',
        type: "mcq",
        question: "What mental math trick helps in multiplying a two-digit number by 11?",
        options: [
            "Add the digits and place the sum between them",
            "Multiply by 10 and add the original number",
            "Double each digit and add them",
            "Add the digits and multiply by 10"
        ],
        correctAnswer: "Add the digits and place the sum between them",
        explanation: "For two-digit numbers × 11, add the digits and put sum between them. For 45 × 11: 4 + 5 = 9, so answer is 495. If sum > 9, carry over. 🧮",
        wrongAnswerExplanations: {
            "Multiply by 10 and add the original number": "This works but is slower mentally.",
            "Double each digit and add them": "This doesn't give the correct result.",
            "Add the digits and multiply by 10": "This gives a different result."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch17_t2_qm6',
        type: "mcq",
        question: "What is the quickest way to mentally calculate 88 × 12?",
        options: [
            "(88 × 10) + (88 × 2)",
            "88 + (88 × 11)",
            "(90 × 12) - (2 × 12)",
            "(100 × 12) - (12 × 12)"
        ],
        correctAnswer: "(88 × 10) + (88 × 2)",
        explanation: "Break 12 into 10 + 2. 88 × 10 = 880, 88 × 2 = 176, so 880 + 176 = 1056. Breaking into tens and ones makes multiplication easier. ✨",
        wrongAnswerExplanations: {
            "88 + (88 × 11)": "This requires a more complex multiplication by 11.",
            "(90 × 12) - (2 × 12)": "This involves more steps with larger numbers.",
            "(100 × 12) - (12 × 12)": "This method uses numbers that are too large."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch17_t2_qm7',
        type: "mcq",
        question: "What mental math trick can quickly find 37.5% of a number?",
        options: [
            "Divide by 8 and multiply by 3",
            "Find 25% and add 12.5%",
            "Take half of 75%",
            "Divide by 4 and add half of that"
        ],
        correctAnswer: "Divide by 8 and multiply by 3",
        explanation: "37.5% = 3/8 = 0.375, so divide by 8 and multiply by 3. For example, 37.5% of 80 = (80 ÷ 8) × 3 = 10 × 3 = 30. Quick and efficient! 📊",
        wrongAnswerExplanations: {
            "Find 25% and add 12.5%": "This requires more steps.",
            "Take half of 75%": "This works but requires more calculation.",
            "Divide by 4 and add half of that": "This gives a different percentage."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch17_t2_qm8',
        type: "mcq",
        question: "What is the fastest way to mentally square a number ending in 0?",
        options: [
            "Square the first number and add two zeros",
            "Multiply the number by itself digit by digit",
            "Add zeros to the end of the original number",
            "Double the number and multiply by half the number"
        ],
        correctAnswer: "Square the first number and add two zeros",
        explanation: "For numbers ending in 0, square the first digit and add two zeros. For 30², square 3 = 9, add two zeros = 900. Works because (a × 10)² = a² × 100. 🎯",
        wrongAnswerExplanations: {
            "Multiply the number by itself digit by digit": "This is more time-consuming.",
            "Add zeros to the end of the original number": "This doesn't give the square.",
            "Double the number and multiply by half the number": "This is more complex."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch17_t2_qm9',
        type: "mcq",
        question: "What mental math trick helps in multiplying any number by 125?",
        options: [
            "Divide by 8 and multiply by 1000",
            "Multiply by 100 and add a quarter of that",
            "Take 1000 and divide by 8",
            "Multiply by 1000 and divide by 8"
        ],
        correctAnswer: "Divide by 8 and multiply by 1000",
        explanation: "125 = 1000 ÷ 8, so divide by 8 first, then multiply by 1000. For 24 × 125: 24 ÷ 8 = 3, then 3 × 1000 = 3000. Order matters for easier calculation! 💫",
        wrongAnswerExplanations: {
            "Multiply by 100 and add a quarter of that": "This gives a different result.",
            "Take 1000 and divide by 8": "This just gives 125, not the multiplication.",
            "Multiply by 1000 and divide by 8": "This works but with larger numbers first."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch17_t2_qm10',
        type: "mcq",
        question: "What is the quickest way to mentally calculate 96 × 25?",
        options: [
            "Divide 96 by 4 and multiply by 100",
            "(100 × 25) - (4 × 25)",
            "(96 × 100) ÷ 4",
            "96 × 20 + 96 × 5"
        ],
        correctAnswer: "Divide 96 by 4 and multiply by 100",
        explanation: "Since 25 = 100 ÷ 4, divide first by 4 (96 ÷ 4 = 24), then multiply by 100 (24 × 100 = 2400). This avoids working with large numbers. 🎯",
        wrongAnswerExplanations: {
            "(100 × 25) - (4 × 25)": "This involves more steps and larger numbers.",
            "(96 × 100) ÷ 4": "This works but uses larger numbers first.",
            "96 × 20 + 96 × 5": "This method requires more calculations."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    }
]; 