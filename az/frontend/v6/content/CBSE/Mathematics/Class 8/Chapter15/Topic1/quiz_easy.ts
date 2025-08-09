import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl8_ch15_t1_qe1',
        type: "mcq",
        question: "If a clock shows 3:15, what is the angle between the hour and minute hands?",
        options: ["7.5°", "67.5°", "97.5°", "82.5°"],
        correctAnswer: "67.5°",
        explanation: "At 3:15, hour hand moves 15° (¼ hour = 15°) from 3, and minute hand is at 75°. The difference is 67.5°. 🕒",
        wrongAnswerExplanations: {
            "7.5°": "This is too small for the angle between 3:15 hands.",
            "97.5°": "This would be the angle if the hour hand didn't move.",
            "82.5°": "This doesn't account for hour hand movement."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch15_t1_qe2',
        type: "mcq",
        question: "In a sequence: 2, 6, 12, 20, 30, what comes next?",
        options: ["36", "42", "40", "35"],
        correctAnswer: "42",
        explanation: "The difference between consecutive terms increases by 2: 4, 6, 8, 10, 12. So next difference is 12, making next term 42. 🔢",
        wrongAnswerExplanations: {
            "36": "This assumes constant difference of 6.",
            "40": "This is too small based on the pattern.",
            "35": "This breaks the increasing pattern."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch15_t1_qe3',
        type: "mcq",
        question: "If RED = 27 and BLUE = 37, what does GREEN equal?",
        options: ["47", "57", "67", "77"],
        correctAnswer: "57",
        explanation: "Each letter's position in alphabet (R=18, E=5, D=4) sum is 27. Similarly for GREEN: 7+18+5+5+14=57. 🎯",
        wrongAnswerExplanations: {
            "47": "Sum of letter positions is higher.",
            "67": "Sum of letter positions is lower.",
            "77": "This is much higher than actual sum."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch15_t1_qe4',
        type: "mcq",
        question: "In a family, A is B's sister, C is B's mother, D is C's father, E is D's mother. How is A related to D?",
        options: ["Daughter", "Granddaughter", "Mother", "Sister"],
        correctAnswer: "Granddaughter",
        explanation: "D is C's father, C is B's mother, A is B's sister. Therefore, A is D's granddaughter. 👨‍👩‍👧‍👦",
        wrongAnswerExplanations: {
            "Daughter": "D is A's grandfather, not father.",
            "Mother": "D is older generation than A.",
            "Sister": "They are from different generations."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch15_t1_qe5',
        type: "mcq",
        question: "If ⭕ + ⭕ = 8, ⭕ + △ = 11, △ + ◻ = 15, what is ◻ + ⭕?",
        options: ["9", "10", "12", "13"],
        correctAnswer: "12",
        explanation: "If ⭕ + ⭕ = 8, then ⭕ = 4. If ⭕ + △ = 11, then △ = 7. If △ + ◻ = 15, then ◻ = 8. So ◻ + ⭕ = 12. 🧮",
        wrongAnswerExplanations: {
            "9": "This value is too small.",
            "10": "Doesn't satisfy the equations.",
            "13": "This value is too large."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch15_t1_qe6',
        type: "mcq",
        question: "What number should replace the ? in the sequence: 1, 4, 9, 16, 25, 36, ?",
        options: ["42", "45", "49", "64"],
        correctAnswer: "49",
        explanation: "These are perfect squares: 1², 2², 3², 4², 5², 6², 7². So next is 7² = 49. 🎯",
        wrongAnswerExplanations: {
            "42": "Not a perfect square.",
            "45": "Not a perfect square.",
            "64": "This would be 8², skipping 7²."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch15_t1_qe7',
        type: "mcq",
        question: "If FAST = 6341 and LAST = 7341, what does SALT equal?",
        options: ["3471", "4371", "3741", "4731"],
        correctAnswer: "3471",
        explanation: "By comparing FAST and LAST, L=7, A=3, S=4, T=1. Therefore, SALT = 3471. 🔍",
        wrongAnswerExplanations: {
            "4371": "Incorrect digit for S.",
            "3741": "Digits in wrong order.",
            "4731": "Multiple digits incorrect."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch15_t1_qe8',
        type: "mcq",
        question: "In a certain code, COMPUTER is written as RFUVQNPC. How will PRINTER be written?",
        options: ["QSJOUFS", "SFUOJSQ", "QSJOUFQ", "SFUOJSP"],
        correctAnswer: "QSJOUFQ",
        explanation: "Each letter is replaced by previous letter in alphabet. P→Q, R→S, etc. 🖨️",
        wrongAnswerExplanations: {
            "QSJOUFS": "Last letter is incorrect.",
            "SFUOJSQ": "Pattern is reversed.",
            "SFUOJSP": "Multiple letters incorrect."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch15_t1_qe9',
        type: "mcq",
        question: "If × means +, ÷ means ×, + means ÷, and - remains -, what is the value of 8 × 4 ÷ 2 + 4 - 3?",
        options: ["9", "11", "13", "15"],
        correctAnswer: "13",
        explanation: "Converting symbols: 8 + 4 × 2 ÷ 4 - 3 = 8 + 8 ÷ 4 - 3 = 8 + 2 - 3 = 13. 🧮",
        wrongAnswerExplanations: {
            "9": "Incorrect order of operations.",
            "11": "Symbols not properly converted.",
            "15": "Operations performed incorrectly."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch15_t1_qe10',
        type: "mcq",
        question: "If A = 1, B = 2, C = 3, what is the value of (A + B)² - C²?",
        options: ["0", "1", "2", "3"],
        correctAnswer: "0",
        explanation: "(1 + 2)² - 3² = 9 - 9 = 0. Square of sum minus square gives zero. 🎯",
        wrongAnswerExplanations: {
            "1": "Check calculation again.",
            "2": "Both squares equal 9.",
            "3": "Result is exactly zero."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch15_t1_qe11',
        type: "mcq",
        question: "In a row of 40 students, if Rohit is 10th from the left, what is his position from the right?",
        options: ["30th", "31st", "29th", "32nd"],
        correctAnswer: "31st",
        explanation: "From right = Total + 1 - Position from left = 40 + 1 - 10 = 31st. 👥",
        wrongAnswerExplanations: {
            "30th": "Forgot to add 1.",
            "29th": "Calculation error.",
            "32nd": "Position too far."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch15_t1_qe12',
        type: "mcq",
        question: "If today is Tuesday, what day will it be after 100 days?",
        options: ["Monday", "Tuesday", "Wednesday", "Thursday"],
        correctAnswer: "Thursday",
        explanation: "100 ÷ 7 = 14 remainder 2. So after 100 days, it will be 2 days after Tuesday. 📅",
        wrongAnswerExplanations: {
            "Monday": "Count days carefully.",
            "Tuesday": "Can't be same day.",
            "Wednesday": "One day short."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch15_t1_qe13',
        type: "mcq",
        question: "What comes next in the pattern: 2, 6, 18, 54, ?",
        options: ["108", "162", "216", "324"],
        correctAnswer: "162",
        explanation: "Each number is multiplied by 3 to get next number: 2×3=6, 6×3=18, 18×3=54, 54×3=162. 🔢",
        wrongAnswerExplanations: {
            "108": "Multiplied by 2 instead of 3.",
            "216": "Multiplied by 4 instead of 3.",
            "324": "Multiplied by 6 instead of 3."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch15_t1_qe14',
        type: "mcq",
        question: "If GIVE = 7985 and TAKE = 2165, what is GATE?",
        options: ["7125", "7625", "7165", "7425"],
        correctAnswer: "7125",
        explanation: "From given codes: G=7, A=1, T=2, E=5. Therefore, GATE = 7125. 🔍",
        wrongAnswerExplanations: {
            "7625": "A is not 6.",
            "7165": "T is not 1.",
            "7425": "A is not 4."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch15_t1_qe15',
        type: "mcq",
        question: "In a certain code, MOUSE is written as PRUVI. How is HOUSE written?",
        options: ["JRWUG", "KRWVI", "HRVYI", "PRUHI"],
        correctAnswer: "HRVYI",
        explanation: "Each letter is shifted 3 positions forward: H→H+3=R, O→O+3=R, etc. 🏠",
        wrongAnswerExplanations: {
            "JRWUG": "Wrong shift pattern.",
            "KRWVI": "Incorrect encoding.",
            "PRUHI": "Multiple letters wrong."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch15_t1_qe16',
        type: "mcq",
        question: "If ▲ = 10, ■ = 20, ● = 30, what is ▲ + ■ - ●?",
        options: ["0", "10", "-10", "20"],
        correctAnswer: "0",
        explanation: "▲ + ■ - ● = 10 + 20 - 30 = 0. Simple substitution and arithmetic. 🧮",
        wrongAnswerExplanations: {
            "10": "Check subtraction.",
            "-10": "Order matters.",
            "20": "Final result is zero."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch15_t1_qe17',
        type: "mcq",
        question: "What number comes next: 1, 1, 2, 3, 5, 8, 13, ?",
        options: ["18", "21", "24", "34"],
        correctAnswer: "21",
        explanation: "This is Fibonacci sequence where each number is sum of previous two: 8 + 13 = 21. 📈",
        wrongAnswerExplanations: {
            "18": "Not sum of previous two.",
            "24": "Too large.",
            "34": "Way too large."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch15_t1_qe18',
        type: "mcq",
        question: "If A = 1, B = 2, C = 3, what is the value of A + B × C?",
        options: ["7", "9", "4", "6"],
        correctAnswer: "7",
        explanation: "A + B × C = 1 + 2 × 3 = 1 + 6 = 7. Follow order of operations. 🎯",
        wrongAnswerExplanations: {
            "9": "Wrong order of operations.",
            "4": "Multiplication first.",
            "6": "Don't forget to add A."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch15_t1_qe19',
        type: "mcq",
        question: "If 5 cats catch 5 mice in 5 minutes, how many cats catch 15 mice in 15 minutes?",
        options: ["5", "10", "15", "20"],
        correctAnswer: "5",
        explanation: "Same cats can catch triple mice in triple time. No need for more cats. 🐱",
        wrongAnswerExplanations: {
            "10": "Time increased proportionally.",
            "15": "Both time and mice tripled.",
            "20": "No need for more cats."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch15_t1_qe20',
        type: "mcq",
        question: "What is the missing number: 16, 25, ?, 49, 64",
        options: ["32", "36", "40", "42"],
        correctAnswer: "36",
        explanation: "These are perfect squares: 4², 5², 6², 7², 8². Missing is 6² = 36. 🎯",
        wrongAnswerExplanations: {
            "32": "Not a perfect square.",
            "40": "Not a perfect square.",
            "42": "Not a perfect square."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    }
]; 