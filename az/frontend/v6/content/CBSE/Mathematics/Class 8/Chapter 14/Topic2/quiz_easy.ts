import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl8_ch14_t2_qe1',
        type: "mcq",
        question: "A number is divisible by 2 if:",
        options: ["Its first digit is even", "Its last digit is even", "The sum of its digits is even", "It has an even number of digits"],
        correctAnswer: "Its last digit is even",
        explanation: "A number is divisible by 2 if its last digit is 0, 2, 4, 6, or 8. For example, 346 ends in 6, so it's divisible by 2. 🔢",
        wrongAnswerExplanations: {
            "Its first digit is even": "First digit being even doesn't guarantee divisibility by 2. For example, 223 starts with 2 but isn't even.",
            "The sum of its digits is even": "Sum of digits being even doesn't determine divisibility by 2. For example, 123 has sum 6 but isn't even.",
            "It has an even number of digits": "Number of digits doesn't determine divisibility by 2. For example, 123 has 3 digits but isn't even."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch14_t2_qe2',
        type: "mcq",
        question: "Which number is divisible by 3?",
        options: ["152", "235", "456", "571"],
        correctAnswer: "456",
        explanation: "456 is divisible by 3 because sum of its digits (4+5+6=15) is divisible by 3. 🧮",
        wrongAnswerExplanations: {
            "152": "1+5+2=8, which isn't divisible by 3",
            "235": "2+3+5=10, which isn't divisible by 3",
            "571": "5+7+1=13, which isn't divisible by 3"
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch14_t2_qe3',
        type: "mcq",
        question: "A number is divisible by 4 if:",
        options: ["Its last digit is 4", "Its last two digits form a number divisible by 4", "All its digits are even", "The sum of its digits is divisible by 4"],
        correctAnswer: "Its last two digits form a number divisible by 4",
        explanation: "For divisibility by 4, check if number formed by last two digits is divisible by 4. Example: 1524 ends in 24, which is divisible by 4. 📊",
        wrongAnswerExplanations: {
            "Its last digit is 4": "Last digit being 4 isn't enough. For example, 114 ends in 4 but isn't divisible by 4.",
            "All its digits are even": "Having all even digits doesn't ensure divisibility by 4. For example, 222 has all even digits but isn't divisible by 4.",
            "The sum of its digits is divisible by 4": "Sum of digits doesn't determine divisibility by 4. For example, 112 has sum 4 but isn't divisible by 4."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch14_t2_qe4',
        type: "mcq",
        question: "Which number is divisible by 5?",
        options: ["234", "567", "890", "123"],
        correctAnswer: "890",
        explanation: "890 is divisible by 5 because it ends in 0. A number is divisible by 5 if it ends in 0 or 5. 🎯",
        wrongAnswerExplanations: {
            "234": "234 doesn't end in 0 or 5, so it's not divisible by 5",
            "567": "567 doesn't end in 0 or 5, so it's not divisible by 5",
            "123": "123 doesn't end in 0 or 5, so it's not divisible by 5"
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch14_t2_qe5',
        type: "mcq",
        question: "A number is divisible by 6 if it is divisible by:",
        options: ["2 and 3", "2 and 4", "3 and 4", "2 and 5"],
        correctAnswer: "2 and 3",
        explanation: "A number divisible by both 2 and 3 is divisible by 6. For example, 126 is even and 1+2+6=9 is divisible by 3. 🔢",
        wrongAnswerExplanations: {
            "2 and 4": "Being divisible by 2 and 4 doesn't ensure divisibility by 6. For example, 12 is divisible by 2 and 4 but not by 6.",
            "3 and 4": "Being divisible by 3 and 4 doesn't ensure divisibility by 6. For example, 12 is divisible by 3 and 4 but not by 6.",
            "2 and 5": "Being divisible by 2 and 5 doesn't ensure divisibility by 6. For example, 10 is divisible by 2 and 5 but not by 6."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch14_t2_qe6',
        type: "mcq",
        question: "Which number is divisible by 8?",
        options: ["1024", "1234", "2468", "3579"],
        correctAnswer: "1024",
        explanation: "1024 is divisible by 8 because its last three digits (024) form a number divisible by 8. 024 ÷ 8 = 3. 🎲",
        wrongAnswerExplanations: {
            "1234": "234 isn't divisible by 8, so 1234 isn't divisible by 8",
            "2468": "468 isn't divisible by 8, so 2468 isn't divisible by 8",
            "3579": "579 isn't divisible by 8, so 3579 isn't divisible by 8"
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch14_t2_qe7',
        type: "mcq",
        question: "A number is divisible by 9 if:",
        options: ["Its last digit is 9", "The sum of its digits is divisible by 9", "It ends in 09", "It has 9 digits"],
        correctAnswer: "The sum of its digits is divisible by 9",
        explanation: "For divisibility by 9, sum all digits. If sum is divisible by 9, the number is divisible by 9. Example: 729 → 7+2+9=18 → 1+8=9. ✨",
        wrongAnswerExplanations: {
            "Its last digit is 9": "Last digit being 9 doesn't ensure divisibility by 9. For example, 19 isn't divisible by 9.",
            "It ends in 09": "Ending in 09 doesn't ensure divisibility by 9. For example, 109 isn't divisible by 9.",
            "It has 9 digits": "Number of digits doesn't determine divisibility by 9. For example, 123456789 isn't divisible by 9."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch14_t2_qe8',
        type: "mcq",
        question: "Which number is divisible by 10?",
        options: ["1235", "4567", "8900", "2468"],
        correctAnswer: "8900",
        explanation: "8900 is divisible by 10 because it ends in 0. Any number ending in 0 is divisible by 10. 🎯",
        wrongAnswerExplanations: {
            "1235": "1235 doesn't end in 0, so it's not divisible by 10",
            "4567": "4567 doesn't end in 0, so it's not divisible by 10",
            "2468": "2468 doesn't end in 0, so it's not divisible by 10"
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch14_t2_qe9',
        type: "mcq",
        question: "Which divisibility test requires subtracting alternate digits?",
        options: ["Divisibility by 7", "Divisibility by 11", "Divisibility by 13", "Divisibility by 3"],
        correctAnswer: "Divisibility by 11",
        explanation: "For divisibility by 11, subtract alternate digits. If result is 0 or divisible by 11, the number is divisible by 11. 🔄",
        wrongAnswerExplanations: {
            "Divisibility by 7": "Divisibility by 7 has a different test involving grouping digits",
            "Divisibility by 13": "Divisibility by 13 has a different test",
            "Divisibility by 3": "Divisibility by 3 involves adding all digits"
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch14_t2_qe10',
        type: "mcq",
        question: "If a number is divisible by both 3 and 4, it must be divisible by:",
        options: ["7", "12", "6", "8"],
        correctAnswer: "12",
        explanation: "If a number is divisible by both 3 and 4, it's divisible by their LCM, which is 12. Example: 24 is divisible by both 3 and 4, and also by 12. 🎲",
        wrongAnswerExplanations: {
            "7": "7 is not related to divisibility by 3 and 4",
            "6": "6 is too small - it's only the LCM of 2 and 3",
            "8": "8 is not related to divisibility by 3"
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch14_t2_qe11',
        type: "mcq",
        question: "Which number is divisible by both 2 and 5?",
        options: ["125", "130", "135", "140"],
        correctAnswer: "140",
        explanation: "140 ends in 0, making it divisible by both 2 and 5. Any number ending in 0 is divisible by both 2 and 5. 🎯",
        wrongAnswerExplanations: {
            "125": "125 is divisible by 5 but not by 2",
            "130": "130 is divisible by both 2 and 5",
            "135": "135 is divisible by 5 but not by 2"
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch14_t2_qe12',
        type: "mcq",
        question: "A number divisible by 3 must have:",
        options: ["3 as its last digit", "Sum of digits divisible by 3", "An odd number of digits", "All digits divisible by 3"],
        correctAnswer: "Sum of digits divisible by 3",
        explanation: "For divisibility by 3, sum all digits. If sum is divisible by 3, the number is divisible by 3. Example: 423 → 4+2+3=9. 🧮",
        wrongAnswerExplanations: {
            "3 as its last digit": "Last digit being 3 doesn't ensure divisibility by 3. For example, 13 isn't divisible by 3.",
            "An odd number of digits": "Number of digits doesn't affect divisibility by 3",
            "All digits divisible by 3": "Individual digits don't need to be divisible by 3"
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch14_t2_qe13',
        type: "mcq",
        question: "Which number is divisible by 4 and 6?",
        options: ["24", "28", "32", "36"],
        correctAnswer: "24",
        explanation: "24 is divisible by both 4 (24÷4=6) and 6 (24÷6=4). It's divisible by their LCM, which is 12. 🎲",
        wrongAnswerExplanations: {
            "28": "28 is divisible by 4 but not by 6",
            "32": "32 is divisible by 4 but not by 6",
            "36": "36 is divisible by 6 but not by 4"
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch14_t2_qe14',
        type: "mcq",
        question: "A number is divisible by 8 if:",
        options: ["Its last digit is 8", "Its last three digits form a number divisible by 8", "The sum of its digits is 8", "It has 8 digits"],
        correctAnswer: "Its last three digits form a number divisible by 8",
        explanation: "For divisibility by 8, check if number formed by last three digits is divisible by 8. Example: 1016 ends in 016, which is divisible by 8. 📊",
        wrongAnswerExplanations: {
            "Its last digit is 8": "Last digit being 8 doesn't ensure divisibility by 8",
            "The sum of its digits is 8": "Sum of digits doesn't determine divisibility by 8",
            "It has 8 digits": "Number of digits doesn't affect divisibility by 8"
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch14_t2_qe15',
        type: "mcq",
        question: "Which number is divisible by both 2 and 3?",
        options: ["123", "124", "125", "126"],
        correctAnswer: "126",
        explanation: "126 is even (divisible by 2) and sum of its digits (1+2+6=9) is divisible by 3, so 126 is divisible by both 2 and 3. 🔢",
        wrongAnswerExplanations: {
            "123": "123 is divisible by 3 but not by 2",
            "124": "124 is divisible by 2 but not by 3",
            "125": "125 is not divisible by either 2 or 3"
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch14_t2_qe16',
        type: "mcq",
        question: "A number divisible by 9 must also be divisible by:",
        options: ["2", "3", "4", "6"],
        correctAnswer: "3",
        explanation: "Any number divisible by 9 is also divisible by 3 because 3 is a factor of 9. Example: 27 is divisible by 9 and also by 3. ✨",
        wrongAnswerExplanations: {
            "2": "Being divisible by 9 doesn't ensure divisibility by 2",
            "4": "Being divisible by 9 doesn't ensure divisibility by 4",
            "6": "Being divisible by 9 doesn't ensure divisibility by 6"
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch14_t2_qe17',
        type: "mcq",
        question: "Which number is divisible by 11?",
        options: ["1221", "1231", "1241", "1251"],
        correctAnswer: "1221",
        explanation: "1221: (1-2+2-1=0) is divisible by 11. When we subtract alternate digits, we get 0, which is divisible by 11. 🔄",
        wrongAnswerExplanations: {
            "1231": "1-2+3-1=1, not divisible by 11",
            "1241": "1-2+4-1=2, not divisible by 11",
            "1251": "1-2+5-1=3, not divisible by 11"
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch14_t2_qe18',
        type: "mcq",
        question: "A number divisible by both 4 and 5 must be divisible by:",
        options: ["9", "20", "25", "40"],
        correctAnswer: "20",
        explanation: "If a number is divisible by both 4 and 5, it's divisible by their LCM, which is 20. Example: 40 is divisible by both 4 and 5, and also by 20. 🎲",
        wrongAnswerExplanations: {
            "9": "9 is not related to divisibility by 4 and 5",
            "25": "25 is only related to divisibility by 5",
            "40": "40 is too large - 20 is the LCM of 4 and 5"
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch14_t2_qe19',
        type: "mcq",
        question: "Which divisibility test involves checking only the last digit?",
        options: ["Divisibility by 2", "Divisibility by 3", "Divisibility by 4", "Divisibility by 6"],
        correctAnswer: "Divisibility by 2",
        explanation: "Only divisibility by 2 requires checking just the last digit (must be 0, 2, 4, 6, or 8). 🔢",
        wrongAnswerExplanations: {
            "Divisibility by 3": "Requires checking sum of all digits",
            "Divisibility by 4": "Requires checking last two digits",
            "Divisibility by 6": "Requires checking both 2 and 3 divisibility"
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch14_t2_qe20',
        type: "mcq",
        question: "If a number is divisible by both 3 and 5, what is the smallest number it must be divisible by?",
        options: ["8", "15", "30", "45"],
        correctAnswer: "15",
        explanation: "If a number is divisible by both 3 and 5, it must be divisible by their LCM, which is 15. Example: 45 is divisible by both 3 and 5, and also by 15. 🎯",
        wrongAnswerExplanations: {
            "8": "8 is not related to divisibility by 3 and 5",
            "30": "30 is too large - 15 is the LCM of 3 and 5",
            "45": "45 is too large - 15 is the LCM of 3 and 5"
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    }
]; 