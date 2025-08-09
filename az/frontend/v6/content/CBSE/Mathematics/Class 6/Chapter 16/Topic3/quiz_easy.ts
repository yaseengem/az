import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl6_ch16_t3_qe1',
        type: "mcq",
        question: "What is the quickest way to multiply a number by 10?",
        options: [
            "Add a zero at the end",
            "Add 10 to the number",
            "Multiply by 2 and add 5",
            "Divide by 10"
        ],
        correctAnswer: "Add a zero at the end",
        explanation: "When multiplying by 10, we simply add a zero at the end of the number. For example, 45 × 10 = 450.",
        wrongAnswerExplanations: {
            "Add 10 to the number": "Adding 10 is different from multiplying by 10. For example, 45 + 10 = 55, not 450.",
            "Multiply by 2 and add 5": "This is not a correct method for multiplying by 10.",
            "Divide by 10": "Dividing by 10 would make the number smaller, not larger."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch16_t3_qe2',
        type: "mcq",
        question: "What is 100 - 37 using the complement method?",
        options: [
            "63",
            "73",
            "67",
            "57"
        ],
        correctAnswer: "63",
        explanation: "Using the complement method, we think: 37 + 63 = 100, so 100 - 37 = 63.",
        wrongAnswerExplanations: {
            "73": "73 is not the complement of 37 to make 100.",
            "67": "67 is not the complement of 37 to make 100.",
            "57": "57 is not the complement of 37 to make 100."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch16_t3_qe3',
        type: "mcq",
        question: "How can you quickly multiply a number by 5?",
        options: [
            "Multiply by 10 and divide by 2",
            "Add 5 to the number",
            "Multiply by 2 and add 3",
            "Divide by 2 and multiply by 10"
        ],
        correctAnswer: "Multiply by 10 and divide by 2",
        explanation: "To multiply by 5, we can multiply by 10 and then divide by 2. For example, 24 × 5 = (24 × 10) ÷ 2 = 240 ÷ 2 = 120.",
        wrongAnswerExplanations: {
            "Add 5 to the number": "Adding 5 is different from multiplying by 5.",
            "Multiply by 2 and add 3": "This is not a correct method for multiplying by 5.",
            "Divide by 2 and multiply by 10": "This would give a different result than multiplying by 5."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch16_t3_qe4',
        type: "mcq",
        question: "What is 47 + 38 using the breaking numbers apart method?",
        options: [
            "85",
            "75",
            "95",
            "65"
        ],
        correctAnswer: "85",
        explanation: "Breaking numbers apart: (40 + 30) + (7 + 8) = 70 + 15 = 85.",
        wrongAnswerExplanations: {
            "75": "This is incorrect. The correct sum is 85.",
            "95": "This is incorrect. The correct sum is 85.",
            "65": "This is incorrect. The correct sum is 85."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch16_t3_qe5',
        type: "mcq",
        question: "What is 7 × 9 using the multiplication shortcut?",
        options: [
            "63",
            "56",
            "72",
            "49"
        ],
        correctAnswer: "63",
        explanation: "To multiply by 9, multiply by 10 and subtract the number: (7 × 10) - 7 = 70 - 7 = 63.",
        wrongAnswerExplanations: {
            "56": "This is 7 × 8, not 7 × 9.",
            "72": "This is 8 × 9, not 7 × 9.",
            "49": "This is 7 × 7, not 7 × 9."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch16_t3_qe6',
        type: "mcq",
        question: "What is 85 ÷ 5 using the division shortcut?",
        options: [
            "17",
            "15",
            "19",
            "21"
        ],
        correctAnswer: "17",
        explanation: "To divide by 5, multiply by 2 and divide by 10: (85 × 2) ÷ 10 = 170 ÷ 10 = 17.",
        wrongAnswerExplanations: {
            "15": "This is incorrect. The correct answer is 17.",
            "19": "This is incorrect. The correct answer is 17.",
            "21": "This is incorrect. The correct answer is 17."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch16_t3_qe7',
        type: "mcq",
        question: "What is 35 × 11 using the multiplication shortcut?",
        options: [
            "385",
            "355",
            "315",
            "345"
        ],
        correctAnswer: "385",
        explanation: "For two-digit numbers × 11, add the digits and put the sum in the middle: 3 (3+5) 5 = 385.",
        wrongAnswerExplanations: {
            "355": "This is incorrect. The correct answer is 385.",
            "315": "This is incorrect. The correct answer is 385.",
            "345": "This is incorrect. The correct answer is 385."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch16_t3_qe8',
        type: "mcq",
        question: "What is 25² using the squaring shortcut?",
        options: [
            "625",
            "525",
            "425",
            "725"
        ],
        correctAnswer: "625",
        explanation: "For numbers ending in 5, multiply the first digit by the next number and add 25: (2 × 3) followed by 25 = 625.",
        wrongAnswerExplanations: {
            "525": "This is incorrect. The correct answer is 625.",
            "425": "This is incorrect. The correct answer is 625.",
            "725": "This is incorrect. The correct answer is 625."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch16_t3_qe9',
        type: "mcq",
        question: "What is 98 + 47 using the complement method?",
        options: [
            "145",
            "135",
            "155",
            "165"
        ],
        correctAnswer: "145",
        explanation: "Using complements: (100 - 2) + 47 = 100 + (47 - 2) = 145.",
        wrongAnswerExplanations: {
            "135": "This is incorrect. The correct sum is 145.",
            "155": "This is incorrect. The correct sum is 145.",
            "165": "This is incorrect. The correct sum is 145."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch16_t3_qe10',
        type: "mcq",
        question: "What is 93 - 68 using the round numbers method?",
        options: [
            "25",
            "35",
            "15",
            "45"
        ],
        correctAnswer: "25",
        explanation: "Add 2 to both numbers: (95 - 70) = 25.",
        wrongAnswerExplanations: {
            "35": "This is incorrect. The correct difference is 25.",
            "15": "This is incorrect. The correct difference is 25.",
            "45": "This is incorrect. The correct difference is 25."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch16_t3_qe11',
        type: "mcq",
        question: "What is 1+2+3+4+5 using the consecutive numbers formula?",
        options: [
            "15",
            "10",
            "20",
            "25"
        ],
        correctAnswer: "15",
        explanation: "Using the formula: (first + last) × number of terms ÷ 2 = (1 + 5) × 5 ÷ 2 = 15.",
        wrongAnswerExplanations: {
            "10": "This is incorrect. The correct sum is 15.",
            "20": "This is incorrect. The correct sum is 15.",
            "25": "This is incorrect. The correct sum is 15."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch16_t3_qe12',
        type: "mcq",
        question: "What is 450 ÷ 10 using the division shortcut?",
        options: [
            "45",
            "4500",
            "4.5",
            "450"
        ],
        correctAnswer: "45",
        explanation: "When dividing by 10, move the decimal point one place to the left: 450 ÷ 10 = 45.0.",
        wrongAnswerExplanations: {
            "4500": "This is multiplication by 10, not division.",
            "4.5": "This is division by 100, not 10.",
            "450": "This is the original number, not the result of division."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch16_t3_qe13',
        type: "mcq",
        question: "What is 24 × 5 using the multiplication shortcut?",
        options: [
            "120",
            "100",
            "140",
            "160"
        ],
        correctAnswer: "120",
        explanation: "Multiply by 10 and divide by 2: (24 × 10) ÷ 2 = 240 ÷ 2 = 120.",
        wrongAnswerExplanations: {
            "100": "This is incorrect. The correct product is 120.",
            "140": "This is incorrect. The correct product is 120.",
            "160": "This is incorrect. The correct product is 120."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch16_t3_qe14',
        type: "mcq",
        question: "What is 85 - 47 using the breaking down method?",
        options: [
            "38",
            "48",
            "28",
            "58"
        ],
        correctAnswer: "38",
        explanation: "Break down the subtraction: (85 - 40) - 7 = 45 - 7 = 38.",
        wrongAnswerExplanations: {
            "48": "This is incorrect. The correct difference is 38.",
            "28": "This is incorrect. The correct difference is 38.",
            "58": "This is incorrect. The correct difference is 38."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch16_t3_qe15',
        type: "mcq",
        question: "What is 98 × 97 using the numbers close to 100 method?",
        options: [
            "9506",
            "9606",
            "9406",
            "9706"
        ],
        correctAnswer: "9506",
        explanation: "Using the formula: (100 - 2) × (100 - 3) = 10000 - 500 + 6 = 9506.",
        wrongAnswerExplanations: {
            "9606": "This is incorrect. The correct product is 9506.",
            "9406": "This is incorrect. The correct product is 9506.",
            "9706": "This is incorrect. The correct product is 9506."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch16_t3_qe16',
        type: "mcq",
        question: "What is 345 + 267 using the left-to-right method?",
        options: [
            "612",
            "512",
            "712",
            "812"
        ],
        correctAnswer: "612",
        explanation: "Add from left to right: (300 + 200) + (40 + 60) + (5 + 7) = 500 + 100 + 12 = 612.",
        wrongAnswerExplanations: {
            "512": "This is incorrect. The correct sum is 612.",
            "712": "This is incorrect. The correct sum is 612.",
            "812": "This is incorrect. The correct sum is 612."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch16_t3_qe17',
        type: "mcq",
        question: "What is 99 × 7 using the multiplication shortcut?",
        options: [
            "693",
            "793",
            "593",
            "893"
        ],
        correctAnswer: "693",
        explanation: "Multiply by 100 and subtract the number: (100 × 7) - 7 = 700 - 7 = 693.",
        wrongAnswerExplanations: {
            "793": "This is incorrect. The correct product is 693.",
            "593": "This is incorrect. The correct product is 693.",
            "893": "This is incorrect. The correct product is 693."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch16_t3_qe18',
        type: "mcq",
        question: "What is 150 ÷ 5 using the division shortcut?",
        options: [
            "30",
            "25",
            "35",
            "40"
        ],
        correctAnswer: "30",
        explanation: "Multiply by 2 and divide by 10: (150 × 2) ÷ 10 = 300 ÷ 10 = 30.",
        wrongAnswerExplanations: {
            "25": "This is incorrect. The correct quotient is 30.",
            "35": "This is incorrect. The correct quotient is 30.",
            "40": "This is incorrect. The correct quotient is 30."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch16_t3_qe19',
        type: "mcq",
        question: "What is 78 + 45 using the breaking numbers apart method?",
        options: [
            "123",
            "113",
            "133",
            "143"
        ],
        correctAnswer: "123",
        explanation: "Break numbers apart: (70 + 40) + (8 + 5) = 110 + 13 = 123.",
        wrongAnswerExplanations: {
            "113": "This is incorrect. The correct sum is 123.",
            "133": "This is incorrect. The correct sum is 123.",
            "143": "This is incorrect. The correct sum is 123."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch16_t3_qe20',
        type: "mcq",
        question: "What is 36 × 5 using the multiplication shortcut?",
        options: [
            "180",
            "160",
            "200",
            "220"
        ],
        correctAnswer: "180",
        explanation: "Multiply by 10 and divide by 2: (36 × 10) ÷ 2 = 360 ÷ 2 = 180.",
        wrongAnswerExplanations: {
            "160": "This is incorrect. The correct product is 180.",
            "200": "This is incorrect. The correct product is 180.",
            "220": "This is incorrect. The correct product is 180."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    }
]; 