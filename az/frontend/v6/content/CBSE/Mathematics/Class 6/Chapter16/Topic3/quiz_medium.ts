import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl6_ch16_t3_qm1',
        type: "mcq",
        question: "What is 47 × 99 using mental math?",
        options: [
            "4653",
            "4753",
            "4553",
            "4853"
        ],
        correctAnswer: "4653",
        explanation: "Multiply by 100 and subtract the number: (47 × 100) - 47 = 4700 - 47 = 4653.",
        wrongAnswerExplanations: {
            "4753": "This is incorrect. You need to subtract 47, not add it.",
            "4553": "This is incorrect. You subtracted too much.",
            "4853": "This is incorrect. You added instead of subtracting."
        },
        difficulty: "medium",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch16_t3_qm2',
        type: "mcq",
        question: "What is 123 + 456 using the left-to-right method?",
        options: [
            "579",
            "569",
            "589",
            "599"
        ],
        correctAnswer: "579",
        explanation: "Add from left to right: (100 + 400) + (20 + 50) + (3 + 6) = 500 + 70 + 9 = 579.",
        wrongAnswerExplanations: {
            "569": "This is incorrect. Check your addition of the tens place.",
            "589": "This is incorrect. Check your addition of the ones place.",
            "599": "This is incorrect. Check your addition of all places."
        },
        difficulty: "medium",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch16_t3_qm3',
        type: "mcq",
        question: "What is 35² using the squaring shortcut?",
        options: [
            "1225",
            "1125",
            "1325",
            "1425"
        ],
        correctAnswer: "1225",
        explanation: "For numbers ending in 5: multiply the first digit by the next number and add 25: (3 × 4) followed by 25 = 1225.",
        wrongAnswerExplanations: {
            "1125": "This is incorrect. Check your multiplication of the first digits.",
            "1325": "This is incorrect. Check your multiplication of the first digits.",
            "1425": "This is incorrect. Check your multiplication of the first digits."
        },
        difficulty: "medium",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch16_t3_qm4',
        type: "mcq",
        question: "What is 1+2+3+...+10 using the consecutive numbers formula?",
        options: [
            "55",
            "45",
            "65",
            "75"
        ],
        correctAnswer: "55",
        explanation: "Using the formula: (first + last) × number of terms ÷ 2 = (1 + 10) × 10 ÷ 2 = 55.",
        wrongAnswerExplanations: {
            "45": "This is incorrect. Check your calculation of the formula.",
            "65": "This is incorrect. Check your calculation of the formula.",
            "75": "This is incorrect. Check your calculation of the formula."
        },
        difficulty: "medium",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch16_t3_qm5',
        type: "mcq",
        question: "What is 98 × 102 using the numbers close to 100 method?",
        options: [
            "9996",
            "9896",
            "10096",
            "10196"
        ],
        correctAnswer: "9996",
        explanation: "Using the formula: (100 - 2) × (100 + 2) = 10000 - 4 = 9996.",
        wrongAnswerExplanations: {
            "9896": "This is incorrect. Check your calculation of the difference of squares.",
            "10096": "This is incorrect. Check your calculation of the difference of squares.",
            "10196": "This is incorrect. Check your calculation of the difference of squares."
        },
        difficulty: "medium",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch16_t3_qm6',
        type: "mcq",
        question: "What is 123 × 5 using the multiplication shortcut?",
        options: [
            "615",
            "515",
            "715",
            "815"
        ],
        correctAnswer: "615",
        explanation: "Multiply by 10 and divide by 2: (123 × 10) ÷ 2 = 1230 ÷ 2 = 615.",
        wrongAnswerExplanations: {
            "515": "This is incorrect. Check your multiplication and division.",
            "715": "This is incorrect. Check your multiplication and division.",
            "815": "This is incorrect. Check your multiplication and division."
        },
        difficulty: "medium",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch16_t3_qm7',
        type: "mcq",
        question: "What is 1000 - 375 using the complement method?",
        options: [
            "625",
            "525",
            "725",
            "825"
        ],
        correctAnswer: "625",
        explanation: "Using complements: 375 + 625 = 1000, so 1000 - 375 = 625.",
        wrongAnswerExplanations: {
            "525": "This is incorrect. Check your complement calculation.",
            "725": "This is incorrect. Check your complement calculation.",
            "825": "This is incorrect. Check your complement calculation."
        },
        difficulty: "medium",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch16_t3_qm8',
        type: "mcq",
        question: "What is 45 × 11 using the multiplication shortcut?",
        options: [
            "495",
            "485",
            "505",
            "515"
        ],
        correctAnswer: "495",
        explanation: "For two-digit numbers × 11: add the digits and put the sum in the middle: 4 (4+5) 5 = 495.",
        wrongAnswerExplanations: {
            "485": "This is incorrect. Check your digit addition.",
            "505": "This is incorrect. Check your digit addition.",
            "515": "This is incorrect. Check your digit addition."
        },
        difficulty: "medium",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch16_t3_qm9',
        type: "mcq",
        question: "What is 78 + 95 using the complement method?",
        options: [
            "173",
            "163",
            "183",
            "193"
        ],
        correctAnswer: "173",
        explanation: "Using complements: (100 - 22) + (100 - 5) = 200 - 27 = 173.",
        wrongAnswerExplanations: {
            "163": "This is incorrect. Check your complement calculations.",
            "183": "This is incorrect. Check your complement calculations.",
            "193": "This is incorrect. Check your complement calculations."
        },
        difficulty: "medium",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch16_t3_qm10',
        type: "mcq",
        question: "What is 123 ÷ 5 using the division shortcut?",
        options: [
            "24.6",
            "23.6",
            "25.6",
            "26.6"
        ],
        correctAnswer: "24.6",
        explanation: "Multiply by 2 and divide by 10: (123 × 2) ÷ 10 = 246 ÷ 10 = 24.6.",
        wrongAnswerExplanations: {
            "23.6": "This is incorrect. Check your multiplication and division.",
            "25.6": "This is incorrect. Check your multiplication and division.",
            "26.6": "This is incorrect. Check your multiplication and division."
        },
        difficulty: "medium",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch16_t3_qm11',
        type: "mcq",
        question: "What is 45 × 9 using the multiplication shortcut?",
        options: [
            "405",
            "395",
            "415",
            "425"
        ],
        correctAnswer: "405",
        explanation: "Multiply by 10 and subtract the number: (45 × 10) - 45 = 450 - 45 = 405.",
        wrongAnswerExplanations: {
            "395": "This is incorrect. Check your subtraction.",
            "415": "This is incorrect. Check your subtraction.",
            "425": "This is incorrect. Check your subtraction."
        },
        difficulty: "medium",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch16_t3_qm12',
        type: "mcq",
        question: "What is 123 - 78 using the breaking down method?",
        options: [
            "45",
            "35",
            "55",
            "65"
        ],
        correctAnswer: "45",
        explanation: "Break down the subtraction: (123 - 70) - 8 = 53 - 8 = 45.",
        wrongAnswerExplanations: {
            "35": "This is incorrect. Check your subtraction steps.",
            "55": "This is incorrect. Check your subtraction steps.",
            "65": "This is incorrect. Check your subtraction steps."
        },
        difficulty: "medium",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch16_t3_qm13',
        type: "mcq",
        question: "What is 45 × 25 using the multiplication shortcut?",
        options: [
            "1125",
            "1025",
            "1225",
            "1325"
        ],
        correctAnswer: "1125",
        explanation: "Multiply by 100 and divide by 4: (45 × 100) ÷ 4 = 4500 ÷ 4 = 1125.",
        wrongAnswerExplanations: {
            "1025": "This is incorrect. Check your multiplication and division.",
            "1225": "This is incorrect. Check your multiplication and division.",
            "1325": "This is incorrect. Check your multiplication and division."
        },
        difficulty: "medium",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch16_t3_qm14',
        type: "mcq",
        question: "What is 1+2+3+...+15 using the consecutive numbers formula?",
        options: [
            "120",
            "110",
            "130",
            "140"
        ],
        correctAnswer: "120",
        explanation: "Using the formula: (first + last) × number of terms ÷ 2 = (1 + 15) × 15 ÷ 2 = 120.",
        wrongAnswerExplanations: {
            "110": "This is incorrect. Check your calculation of the formula.",
            "130": "This is incorrect. Check your calculation of the formula.",
            "140": "This is incorrect. Check your calculation of the formula."
        },
        difficulty: "medium",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch16_t3_qm15',
        type: "mcq",
        question: "What is 45 × 12 using the multiplication shortcut?",
        options: [
            "540",
            "530",
            "550",
            "560"
        ],
        correctAnswer: "540",
        explanation: "Break down: (45 × 10) + (45 × 2) = 450 + 90 = 540.",
        wrongAnswerExplanations: {
            "530": "This is incorrect. Check your multiplication steps.",
            "550": "This is incorrect. Check your multiplication steps.",
            "560": "This is incorrect. Check your multiplication steps."
        },
        difficulty: "medium",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch16_t3_qm16',
        type: "mcq",
        question: "What is 123 + 456 + 789 using the left-to-right method?",
        options: [
            "1368",
            "1268",
            "1468",
            "1568"
        ],
        correctAnswer: "1368",
        explanation: "Add from left to right: (100 + 400 + 700) + (20 + 50 + 80) + (3 + 6 + 9) = 1200 + 150 + 18 = 1368.",
        wrongAnswerExplanations: {
            "1268": "This is incorrect. Check your addition of all places.",
            "1468": "This is incorrect. Check your addition of all places.",
            "1568": "This is incorrect. Check your addition of all places."
        },
        difficulty: "medium",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch16_t3_qm17',
        type: "mcq",
        question: "What is 45 × 99 using the multiplication shortcut?",
        options: [
            "4455",
            "4355",
            "4555",
            "4655"
        ],
        correctAnswer: "4455",
        explanation: "Multiply by 100 and subtract the number: (45 × 100) - 45 = 4500 - 45 = 4455.",
        wrongAnswerExplanations: {
            "4355": "This is incorrect. Check your subtraction.",
            "4555": "This is incorrect. Check your subtraction.",
            "4655": "This is incorrect. Check your subtraction."
        },
        difficulty: "medium",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch16_t3_qm18',
        type: "mcq",
        question: "What is 123 ÷ 4 using the division shortcut?",
        options: [
            "30.75",
            "29.75",
            "31.75",
            "32.75"
        ],
        correctAnswer: "30.75",
        explanation: "Divide by 2 twice: (123 ÷ 2) ÷ 2 = 61.5 ÷ 2 = 30.75.",
        wrongAnswerExplanations: {
            "29.75": "This is incorrect. Check your division steps.",
            "31.75": "This is incorrect. Check your division steps.",
            "32.75": "This is incorrect. Check your division steps."
        },
        difficulty: "medium",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch16_t3_qm19',
        type: "mcq",
        question: "What is 45 × 15 using the multiplication shortcut?",
        options: [
            "675",
            "665",
            "685",
            "695"
        ],
        correctAnswer: "675",
        explanation: "Multiply by 10 and add half: (45 × 10) + (45 × 5) = 450 + 225 = 675.",
        wrongAnswerExplanations: {
            "665": "This is incorrect. Check your multiplication steps.",
            "685": "This is incorrect. Check your multiplication steps.",
            "695": "This is incorrect. Check your multiplication steps."
        },
        difficulty: "medium",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch16_t3_qm20',
        type: "mcq",
        question: "What is 123 × 11 using the multiplication shortcut?",
        options: [
            "1353",
            "1343",
            "1363",
            "1373"
        ],
        correctAnswer: "1353",
        explanation: "For three-digit numbers × 11: add adjacent digits and carry over: 1 (1+2) (2+3) 3 = 1353.",
        wrongAnswerExplanations: {
            "1343": "This is incorrect. Check your digit addition and carrying.",
            "1363": "This is incorrect. Check your digit addition and carrying.",
            "1373": "This is incorrect. Check your digit addition and carrying."
        },
        difficulty: "medium",
        marks: 1,
        recommendedTime: 45
    }
]; 