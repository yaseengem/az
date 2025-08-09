import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl8_ch14_t2_qm1',
        type: "mcq",
        question: "If a number is divisible by both 8 and 12, what is the smallest number it must be divisible by?",
        options: ["20", "24", "48", "96"],
        correctAnswer: "24",
        explanation: "The LCM of 8 (2³) and 12 (2² × 3) is 24 (2³ × 3). Any number divisible by both 8 and 12 must be divisible by their LCM. 🧮",
        wrongAnswerExplanations: {
            "20": "20 is not related to divisibility by 8 and 12",
            "48": "48 is too large - 24 is the LCM of 8 and 12",
            "96": "96 is too large - 24 is the LCM of 8 and 12"
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch14_t2_qm2',
        type: "mcq",
        question: "A number N when divided by 2, 3, and 4 leaves remainders 1, 2, and 3 respectively. What is the remainder when N is divided by 12?",
        options: ["5", "7", "11", "9"],
        correctAnswer: "11",
        explanation: "If N = 12q + r, where r is the remainder, then N must satisfy the given conditions. Testing values, we find r = 11 works for all cases. 🔢",
        wrongAnswerExplanations: {
            "5": "With remainder 5, the number wouldn't leave remainder 1 when divided by 2",
            "7": "With remainder 7, the number wouldn't leave remainder 2 when divided by 3",
            "9": "With remainder 9, the number wouldn't leave remainder 3 when divided by 4"
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl8_ch14_t2_qm3',
        type: "mcq",
        question: "Which of these numbers is divisible by both 9 and 11?",
        options: ["198", "297", "396", "495"],
        correctAnswer: "396",
        explanation: "396: sum of digits (3+9+6=18→1+8=9) is divisible by 9, and alternating sum (3-9+6=0) is divisible by 11. 📊",
        wrongAnswerExplanations: {
            "198": "198 is divisible by 9 but not by 11",
            "297": "297 is divisible by 11 but not by 9",
            "495": "495 is neither divisible by 9 nor by 11"
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch14_t2_qm4',
        type: "mcq",
        question: "If a number is divisible by both 6 and 15, what is the smallest number it must be divisible by?",
        options: ["30", "45", "60", "90"],
        correctAnswer: "30",
        explanation: "6 = 2 × 3 and 15 = 3 × 5. LCM(6,15) = 2 × 3 × 5 = 30. Any number divisible by both 6 and 15 must be divisible by 30. 🎲",
        wrongAnswerExplanations: {
            "45": "45 is too large - 30 is the LCM of 6 and 15",
            "60": "60 is too large - 30 is the LCM of 6 and 15",
            "90": "90 is too large - 30 is the LCM of 6 and 15"
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch14_t2_qm5',
        type: "mcq",
        question: "A four-digit number 2A5B is divisible by both 4 and 9. If A and B are single digits, what could be the value of A + B?",
        options: ["7", "8", "9", "10"],
        correctAnswer: "9",
        explanation: "For divisibility by 4, 5B must be divisible by 4. For divisibility by 9, 2+A+5+B must be divisible by 9. Testing values, A=4 and B=5 work. 🔍",
        wrongAnswerExplanations: {
            "7": "This sum doesn't give a number divisible by both 4 and 9",
            "8": "This sum doesn't give a number divisible by both 4 and 9",
            "10": "This sum is too large for single digits A and B"
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl8_ch14_t2_qm6',
        type: "mcq",
        question: "Which of these statements about divisibility by 6 is TRUE?",
        options: [
            "Any number divisible by 2 and 3 is divisible by 6",
            "Any number divisible by 6 is divisible by 2 or 3",
            "A number ending in 6 is always divisible by 6",
            "The sum of digits must be divisible by 6"
        ],
        correctAnswer: "Any number divisible by 2 and 3 is divisible by 6",
        explanation: "Since 6 = 2 × 3, any number divisible by both 2 and 3 must be divisible by 6. Example: 126 is even and 1+2+6=9 is divisible by 3. 🎯",
        wrongAnswerExplanations: {
            "Any number divisible by 6 is divisible by 2 or 3": "It must be divisible by both, not just one",
            "A number ending in 6 is always divisible by 6": "Example: 116 ends in 6 but isn't divisible by 6",
            "The sum of digits must be divisible by 6": "Sum of digits only needs to be divisible by 3"
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch14_t2_qm7',
        type: "mcq",
        question: "What is the smallest positive number that leaves remainder 2 when divided by 3, remainder 3 when divided by 5, and remainder 4 when divided by 7?",
        options: ["104", "209", "314", "419"],
        correctAnswer: "209",
        explanation: "Using the Chinese Remainder Theorem or systematic checking, 209 is the smallest number satisfying all conditions. When divided by 3, 5, and 7, it leaves remainders 2, 3, and 4 respectively. 🧮",
        wrongAnswerExplanations: {
            "104": "104 doesn't satisfy all the remainder conditions",
            "314": "314 satisfies the conditions but isn't the smallest such number",
            "419": "419 satisfies the conditions but isn't the smallest such number"
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 90
    },
    {
        id: 'cl8_ch14_t2_qm8',
        type: "mcq",
        question: "If a number is divisible by both 3 and 8, what is the smallest such three-digit number?",
        options: ["120", "144", "216", "240"],
        correctAnswer: "120",
        explanation: "LCM(3,8) = 24. The smallest three-digit multiple of 24 is 120. It's divisible by 3 (1+2+0=3) and 8 (last three digits 120 divisible by 8). 📈",
        wrongAnswerExplanations: {
            "144": "144 works but isn't the smallest such number",
            "216": "216 works but isn't the smallest such number",
            "240": "240 works but isn't the smallest such number"
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch14_t2_qm9',
        type: "mcq",
        question: "A number when divided by 2, 3, 4, and 5 leaves remainder 1 in each case. What is the remainder when this number is divided by 60?",
        options: ["1", "31", "41", "51"],
        correctAnswer: "41",
        explanation: "If N = 60q + r, r must give remainder 1 when divided by 2, 3, 4, and 5. Testing values, r = 41 satisfies all conditions. 🔢",
        wrongAnswerExplanations: {
            "1": "1 doesn't satisfy all the remainder conditions",
            "31": "31 doesn't satisfy all the remainder conditions",
            "51": "51 doesn't satisfy all the remainder conditions"
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 90
    },
    {
        id: 'cl8_ch14_t2_qm10',
        type: "mcq",
        question: "Which property is used in the divisibility test for 3?",
        options: [
            "Place value system",
            "Distributive property",
            "Associative property",
            "Commutative property"
        ],
        correctAnswer: "Place value system",
        explanation: "The divisibility test for 3 uses place value: each digit's value can be replaced by its remainder when divided by 3. Example: 234 → 2+3+4=9 is divisible by 3. 🎯",
        wrongAnswerExplanations: {
            "Distributive property": "This property isn't specifically used in the divisibility test for 3",
            "Associative property": "This property isn't specifically used in the divisibility test for 3",
            "Commutative property": "This property isn't specifically used in the divisibility test for 3"
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch14_t2_qm11',
        type: "mcq",
        question: "What is the smallest number that when divided by 8, 12, and 15 leaves remainder 1 in each case?",
        options: ["121", "241", "361", "481"],
        correctAnswer: "361",
        explanation: "Using LCM(8,12,15) = 120, the number must be of form 120k + 1. The smallest such number that leaves remainder 1 with all divisors is 361. 🧮",
        wrongAnswerExplanations: {
            "121": "121 doesn't leave remainder 1 when divided by all three numbers",
            "241": "241 doesn't leave remainder 1 when divided by all three numbers",
            "481": "481 works but isn't the smallest such number"
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 60
    },
    {
        id: 'cl8_ch14_t2_qm12',
        type: "mcq",
        question: "If a number is divisible by both 9 and 10, what is the smallest such three-digit number?",
        options: ["180", "270", "360", "450"],
        correctAnswer: "180",
        explanation: "LCM(9,10) = 90. The smallest three-digit multiple of 90 is 180. It ends in 0 (divisible by 10) and 1+8+0=9 is divisible by 9. 📊",
        wrongAnswerExplanations: {
            "270": "270 works but isn't the smallest such number",
            "360": "360 works but isn't the smallest such number",
            "450": "450 works but isn't the smallest such number"
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch14_t2_qm13',
        type: "mcq",
        question: "Which of these numbers is divisible by both 11 and 15?",
        options: ["165", "330", "495", "660"],
        correctAnswer: "330",
        explanation: "330: alternating sum (3-3+0=0) is divisible by 11, and it's divisible by both 3 and 5 (factors of 15). 🎲",
        wrongAnswerExplanations: {
            "165": "165 is divisible by 15 but not by 11",
            "495": "495 is divisible by 15 but not by 11",
            "660": "660 is divisible by 15 but not by 11"
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch14_t2_qm14',
        type: "mcq",
        question: "A four-digit number 4A3B is divisible by both 3 and 11. What could be the values of A and B?",
        options: ["A=2, B=5", "A=5, B=2", "A=7, B=4", "A=8, B=9"],
        correctAnswer: "A=2, B=5",
        explanation: "For divisibility by 3: 4+A+3+B must be divisible by 3. For divisibility by 11: 4-A+3-B must be divisible by 11. A=2, B=5 satisfies both. 🔍",
        wrongAnswerExplanations: {
            "A=5, B=2": "This combination doesn't make the number divisible by both 3 and 11",
            "A=7, B=4": "This combination doesn't make the number divisible by both 3 and 11",
            "A=8, B=9": "This combination doesn't make the number divisible by both 3 and 11"
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 90
    },
    {
        id: 'cl8_ch14_t2_qm15',
        type: "mcq",
        question: "What is the smallest number that when divided by 6, 8, and 12 leaves remainder 5 in each case?",
        options: ["125", "245", "365", "485"],
        correctAnswer: "245",
        explanation: "Using LCM(6,8,12) = 24, the number must be of form 24k + 5. The smallest such number that works is 245. 🧮",
        wrongAnswerExplanations: {
            "125": "125 doesn't leave remainder 5 when divided by all three numbers",
            "365": "365 works but isn't the smallest such number",
            "485": "485 works but isn't the smallest such number"
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 60
    },
    {
        id: 'cl8_ch14_t2_qm16',
        type: "mcq",
        question: "If a number is divisible by both 4 and 9, what is the smallest such three-digit number?",
        options: ["108", "144", "180", "216"],
        correctAnswer: "144",
        explanation: "LCM(4,9) = 36. The smallest three-digit multiple of 36 that's divisible by both 4 (last two digits divisible by 4) and 9 (sum of digits divisible by 9) is 144. 📈",
        wrongAnswerExplanations: {
            "108": "108 is divisible by 4 but not by 9",
            "180": "180 works but isn't the smallest such number",
            "216": "216 works but isn't the smallest such number"
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch14_t2_qm17',
        type: "mcq",
        question: "Which of these statements about divisibility by 8 is TRUE?",
        options: [
            "Any number divisible by 8 must be divisible by 2 and 4",
            "A number ending in 8 is always divisible by 8",
            "The sum of digits must be divisible by 8",
            "Only the last two digits determine divisibility by 8"
        ],
        correctAnswer: "Any number divisible by 8 must be divisible by 2 and 4",
        explanation: "Since 8 = 2³, any number divisible by 8 must be divisible by both 2 and 4. Example: 24 is divisible by 8, and also by 2 and 4. 🎯",
        wrongAnswerExplanations: {
            "A number ending in 8 is always divisible by 8": "Example: 18 ends in 8 but isn't divisible by 8",
            "The sum of digits must be divisible by 8": "Sum of digits doesn't determine divisibility by 8",
            "Only the last two digits determine divisibility by 8": "Last three digits determine divisibility by 8"
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch14_t2_qm18',
        type: "mcq",
        question: "A number when divided by 3, 4, and 7 leaves remainders 2, 1, and 3 respectively. What is the smallest such positive number?",
        options: ["115", "157", "199", "241"],
        correctAnswer: "157",
        explanation: "Using systematic checking or Chinese Remainder Theorem, 157 is the smallest number that when divided by 3, 4, and 7 leaves remainders 2, 1, and 3 respectively. 🔢",
        wrongAnswerExplanations: {
            "115": "115 doesn't satisfy all the remainder conditions",
            "199": "199 satisfies the conditions but isn't the smallest such number",
            "241": "241 satisfies the conditions but isn't the smallest such number"
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 90
    },
    {
        id: 'cl8_ch14_t2_qm19',
        type: "mcq",
        question: "If a number is divisible by both 6 and 9, what is the smallest such three-digit number?",
        options: ["108", "126", "144", "162"],
        correctAnswer: "108",
        explanation: "LCM(6,9) = 18. The smallest three-digit multiple of 18 is 108. It's divisible by 6 (even and sum of digits divisible by 3) and 9 (sum of digits divisible by 9). 📊",
        wrongAnswerExplanations: {
            "126": "126 works but isn't the smallest such number",
            "144": "144 works but isn't the smallest such number",
            "162": "162 works but isn't the smallest such number"
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch14_t2_qm20',
        type: "mcq",
        question: "Which of these numbers is divisible by both 8 and 15?",
        options: ["120", "240", "360", "480"],
        correctAnswer: "120",
        explanation: "120 is divisible by 8 (last three digits 120 divisible by 8) and 15 (divisible by both 3 and 5). LCM(8,15) = 120. 🎲",
        wrongAnswerExplanations: {
            "240": "240 works but isn't the smallest such number",
            "360": "360 works but isn't the smallest such number",
            "480": "480 works but isn't the smallest such number"
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    }
]; 