import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl8_ch16_t3_qm1',
        type: "mcq",
        question: "Using the divisibility rule for 11, find the smallest number that should be added to 7,392 to make it divisible by 11.",
        options: ["3", "5", "7", "9"],
        correctAnswer: "7",
        explanation: "Alternating sum of 7,392 is 2 - 9 + 3 - 7 = -11. Adding 7 makes alternating sum 0, making number divisible by 11. 🔢",
        wrongAnswerExplanations: {
            "3": "Adding 3 would not make the alternating sum 0.",
            "5": "Adding 5 would not make the alternating sum 0.",
            "9": "Adding 9 would make the alternating sum too large."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl8_ch16_t3_qm2',
        type: "mcq",
        question: "What is 105 × 95 using the trick: (100 + 5)(100 - 5)?",
        options: ["9,875", "9,975", "9,975", "10,075"],
        correctAnswer: "9,975",
        explanation: "Using (100 + 5)(100 - 5) = 100² - 5² = 10,000 - 25 = 9,975. This is a difference of squares pattern. 🎯",
        wrongAnswerExplanations: {
            "9,875": "You might have subtracted too much.",
            "9,975": "This is a duplicate option.",
            "10,075": "You might have added instead of subtracting."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch16_t3_qm3',
        type: "mcq",
        question: "Using divisibility rules, which of these numbers is divisible by both 8 and 9?",
        options: ["3,456", "7,272", "8,424", "9,144"],
        correctAnswer: "7,272",
        explanation: "7,272: last three digits (272) ÷ 8 = 34 (no remainder), and sum of digits 7+2+7+2 = 18 is divisible by 9. 🎲",
        wrongAnswerExplanations: {
            "3,456": "While divisible by 8, sum of digits (18) is not divisible by 9.",
            "8,424": "Not divisible by 8 (424 is not divisible by 8).",
            "9,144": "While divisible by 8, sum of digits (18) is not divisible by 9."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl8_ch16_t3_qm4',
        type: "mcq",
        question: "What is 85 × 115 using the trick: (100 - 15)(100 + 15)?",
        options: ["9,525", "9,725", "9,775", "9,975"],
        correctAnswer: "9,775",
        explanation: "Using (100 - 15)(100 + 15) = 100² - 15² = 10,000 - 225 = 9,775. This uses the difference of squares formula. 🎨",
        wrongAnswerExplanations: {
            "9,525": "You might have subtracted too much.",
            "9,725": "You might have made a calculation error.",
            "9,975": "You might have subtracted too little."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch16_t3_qm5',
        type: "mcq",
        question: "Using divisibility rules, find the smallest number that should be subtracted from 8,436 to make it divisible by both 6 and 11.",
        options: ["3", "5", "7", "9"],
        correctAnswer: "5",
        explanation: "8,436 needs to be even and sum of digits divisible by 3 for 6, and alternating sum 0 for 11. Subtracting 5 achieves both. 🎯",
        wrongAnswerExplanations: {
            "3": "Subtracting 3 wouldn't make it divisible by 11.",
            "7": "Subtracting 7 would be more than needed.",
            "9": "Subtracting 9 would be more than needed."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl8_ch16_t3_qm6',
        type: "mcq",
        question: "What is 995 × 1005 using the trick: (1000 - 5)(1000 + 5)?",
        options: ["999,725", "999,825", "999,925", "1,000,025"],
        correctAnswer: "999,925",
        explanation: "Using (1000 - 5)(1000 + 5) = 1000² - 5² = 1,000,000 - 75 = 999,925. This uses difference of squares. 🎪",
        wrongAnswerExplanations: {
            "999,725": "You might have subtracted too much.",
            "999,825": "You might have made a calculation error.",
            "1,000,025": "You might have added instead of subtracting."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch16_t3_qm7',
        type: "mcq",
        question: "Using divisibility rules, which number is divisible by both 9 and 11?",
        options: ["9,999", "9,889", "9,779", "9,669"],
        correctAnswer: "9,999",
        explanation: "9,999: sum of digits = 36 (divisible by 9), and alternating sum 9-9+9-9 = 0 (divisible by 11). 🎭",
        wrongAnswerExplanations: {
            "9,889": "Sum of digits = 34 (not divisible by 9).",
            "9,779": "Neither divisible by 9 nor 11.",
            "9,669": "Sum of digits = 30 (not divisible by 9)."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch16_t3_qm8',
        type: "mcq",
        question: "What is 1015 × 985 using the trick: (1000 + 15)(1000 - 15)?",
        options: ["999,525", "999,675", "999,775", "999,875"],
        correctAnswer: "999,775",
        explanation: "Using (1000 + 15)(1000 - 15) = 1000² - 15² = 1,000,000 - 225 = 999,775. This uses difference of squares. 🎲",
        wrongAnswerExplanations: {
            "999,525": "You might have subtracted too much.",
            "999,675": "You might have made a calculation error.",
            "999,875": "You might have subtracted too little."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch16_t3_qm9',
        type: "mcq",
        question: "Using divisibility rules, find the smallest number that should be added to 7,425 to make it divisible by both 8 and 9.",
        options: ["3", "5", "7", "11"],
        correctAnswer: "11",
        explanation: "7,425 needs last three digits divisible by 8 and sum of digits divisible by 9. Adding 11 achieves both conditions. 🎯",
        wrongAnswerExplanations: {
            "3": "Adding 3 wouldn't make it divisible by 8.",
            "5": "Adding 5 wouldn't make it divisible by 9.",
            "7": "Adding 7 wouldn't make it divisible by either 8 or 9."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl8_ch16_t3_qm10',
        type: "mcq",
        question: "What is 92 × 108 using the trick: (100 - 8)(100 + 8)?",
        options: ["9,836", "9,936", "9,956", "10,036"],
        correctAnswer: "9,936",
        explanation: "Using (100 - 8)(100 + 8) = 100² - 8² = 10,000 - 64 = 9,936. This uses difference of squares formula. 🎨",
        wrongAnswerExplanations: {
            "9,836": "You might have subtracted too much.",
            "9,956": "You might have subtracted too little.",
            "10,036": "You might have added instead of subtracting."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch16_t3_qm11',
        type: "mcq",
        question: "Using divisibility rules, which number is divisible by both 6 and 11?",
        options: ["6,666", "7,722", "8,844", "9,966"],
        correctAnswer: "7,722",
        explanation: "7,722 is even, sum of digits (18) divisible by 3, and alternating sum 2-2+7-7 = 0, making it divisible by both 6 and 11. 🎭",
        wrongAnswerExplanations: {
            "6,666": "While divisible by 6, not divisible by 11.",
            "8,844": "Not divisible by 11.",
            "9,966": "Not divisible by 11."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch16_t3_qm12',
        type: "mcq",
        question: "What is 88 × 112 using the trick: (100 - 12)(100 + 12)?",
        options: ["9,756", "9,856", "9,956", "10,056"],
        correctAnswer: "9,856",
        explanation: "Using (100 - 12)(100 + 12) = 100² - 12² = 10,000 - 144 = 9,856. This uses difference of squares. 🎪",
        wrongAnswerExplanations: {
            "9,756": "You might have subtracted too much.",
            "9,956": "You might have subtracted too little.",
            "10,056": "You might have added instead of subtracting."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch16_t3_qm13',
        type: "mcq",
        question: "Using divisibility rules, find the smallest number that should be subtracted from 8,547 to make it divisible by both 4 and 9.",
        options: ["3", "5", "7", "9"],
        correctAnswer: "3",
        explanation: "8,547 needs last two digits divisible by 4 and sum of digits divisible by 9. Subtracting 3 achieves both. 🎲",
        wrongAnswerExplanations: {
            "5": "Subtracting 5 would be more than needed.",
            "7": "Subtracting 7 would be more than needed.",
            "9": "Subtracting 9 would be more than needed."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl8_ch16_t3_qm14',
        type: "mcq",
        question: "What is 96 × 104 using the trick: (100 - 4)(100 + 4)?",
        options: ["9,884", "9,984", "10,084", "10,184"],
        correctAnswer: "9,984",
        explanation: "Using (100 - 4)(100 + 4) = 100² - 4² = 10,000 - 16 = 9,984. This uses difference of squares formula. 🎯",
        wrongAnswerExplanations: {
            "9,884": "You might have subtracted too much.",
            "10,084": "You might have added instead of subtracting.",
            "10,184": "You might have made a calculation error."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch16_t3_qm15',
        type: "mcq",
        question: "Using divisibility rules, which number is divisible by both 8 and 11?",
        options: ["8,712", "8,800", "8,888", "8,976"],
        correctAnswer: "8,976",
        explanation: "8,976: last three digits (976) divisible by 8, and alternating sum 6-7+9-8 = 0 (divisible by 11). 🎭",
        wrongAnswerExplanations: {
            "8,712": "Not divisible by 11.",
            "8,800": "Not divisible by 11.",
            "8,888": "Not divisible by 11."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch16_t3_qm16',
        type: "mcq",
        question: "What is 94 × 106 using the trick: (100 - 6)(100 + 6)?",
        options: ["9,864", "9,964", "10,064", "10,164"],
        correctAnswer: "9,964",
        explanation: "Using (100 - 6)(100 + 6) = 100² - 6² = 10,000 - 36 = 9,964. This uses difference of squares formula. 🎪",
        wrongAnswerExplanations: {
            "9,864": "You might have subtracted too much.",
            "10,064": "You might have added instead of subtracting.",
            "10,164": "You might have made a calculation error."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch16_t3_qm17',
        type: "mcq",
        question: "Using divisibility rules, find the smallest number that should be added to 7,563 to make it divisible by both 3 and 11.",
        options: ["4", "6", "8", "10"],
        correctAnswer: "8",
        explanation: "7,563 needs sum of digits divisible by 3 and alternating sum 0 for 11. Adding 8 achieves both conditions. 🎲",
        wrongAnswerExplanations: {
            "4": "Adding 4 wouldn't make it divisible by 11.",
            "6": "Adding 6 wouldn't make it divisible by 11.",
            "10": "Adding 10 would be more than needed."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl8_ch16_t3_qm18',
        type: "mcq",
        question: "What is 98 × 102 using the trick: (100 - 2)(100 + 2)?",
        options: ["9,976", "9,996", "10,016", "10,036"],
        correctAnswer: "9,996",
        explanation: "Using (100 - 2)(100 + 2) = 100² - 2² = 10,000 - 4 = 9,996. This uses difference of squares formula. 🎯",
        wrongAnswerExplanations: {
            "9,976": "You might have subtracted too much.",
            "10,016": "You might have added instead of subtracting.",
            "10,036": "You might have made a calculation error."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch16_t3_qm19',
        type: "mcq",
        question: "Using divisibility rules, which number is divisible by both 9 and 10?",
        options: ["9,000", "9,090", "9,180", "9,270"],
        correctAnswer: "9,180",
        explanation: "9,180 ends in 0 (divisible by 10) and sum of digits 9+1+8+0 = 18 is divisible by 9. 🎭",
        wrongAnswerExplanations: {
            "9,000": "Sum of digits (9) is not divisible by 9.",
            "9,090": "Sum of digits (18) is divisible by 9, but not by 10.",
            "9,270": "Sum of digits (18) is divisible by 9, but not by 10."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch16_t3_qm20',
        type: "mcq",
        question: "What is 1025 × 975 using the trick: (1000 + 25)(1000 - 25)?",
        options: ["999,275", "999,375", "999,475", "999,575"],
        correctAnswer: "999,375",
        explanation: "Using (1000 + 25)(1000 - 25) = 1000² - 25² = 1,000,000 - 625 = 999,375. This uses difference of squares. 🎪",
        wrongAnswerExplanations: {
            "999,275": "You might have subtracted too much.",
            "999,475": "You might have subtracted too little.",
            "999,575": "You might have made a calculation error."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    }
]; 