import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl4_ch10_t1_qm1',
        type: "mcq",
        question: "If the pattern is 2, 5, 8, 11, 14, what will be the 8th number in this pattern?",
        options: ["20", "23", "26", "29"],
        correctAnswer: "23",
        explanation: "The pattern adds 3 each time. The 6th number is 17, 7th is 20, and 8th is 23. 📈",
        wrongAnswerExplanations: {
            "20": "20 is the 7th number in the pattern, not the 8th.",
            "26": "Adding 3 each time gives: 14+3=17, 17+3=20, 20+3=23, not 26.",
            "29": "29 would be the 10th number in this pattern, not the 8th."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch10_t1_qm2',
        type: "mcq",
        question: "What is the rule for this pattern? 1, 3, 9, 27, 81",
        options: ["Add 2", "Multiply by 2", "Multiply by 3", "Add 6"],
        correctAnswer: "Multiply by 3",
        explanation: "Each number is multiplied by 3 to get the next: 1×3=3, 3×3=9, 9×3=27, 27×3=81. ✖️",
        wrongAnswerExplanations: {
            "Add 2": "If we add 2, we get 1, 3, 5, 7, 9, which is not the given pattern.",
            "Multiply by 2": "If we multiply by 2, we get 1, 2, 4, 8, 16, which is not the given pattern.",
            "Add 6": "If we add 6, we get 1, 7, 13, 19, 25, which is not the given pattern."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 50
    },
    {
        id: 'cl4_ch10_t1_qm3',
        type: "mcq",
        question: "What are the next two numbers in this pattern? 100, 90, 80, 70, ..., ...",
        options: ["60, 50", "65, 60", "60, 40", "50, 40"],
        correctAnswer: "60, 50",
        explanation: "The pattern decreases by 10 each time: 100-10=90, 90-10=80, 80-10=70, 70-10=60, 60-10=50. 📉",
        wrongAnswerExplanations: {
            "65, 60": "The pattern decreases by 10 each time, not by 5 then 5.",
            "60, 40": "The pattern decreases by 10 each time, not by 10 then 20.",
            "50, 40": "This skips the number 60 which should come after 70."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 40
    },
    {
        id: 'cl4_ch10_t1_qm4',
        type: "mcq",
        question: "Find the missing numbers in this pattern: 4, 8, __, 16, 20, __",
        options: ["10, 22", "12, 24", "10, 24", "12, 22"],
        correctAnswer: "12, 24",
        explanation: "The pattern adds 4 each time: 4+4=8, 8+4=12, 12+4=16, 16+4=20, 20+4=24. ➕",
        wrongAnswerExplanations: {
            "10, 22": "If we add 4 each time, the missing numbers should be 12 and 24, not 10 and 22.",
            "10, 24": "If we add 4 each time, the first missing number should be 12, not 10.",
            "12, 22": "If we add 4 each time, the second missing number should be 24, not 22."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch10_t1_qm5',
        type: "mcq",
        question: "Which number does NOT belong in this pattern? 3, 6, 9, 11, 15, 18",
        options: ["3", "6", "11", "18"],
        correctAnswer: "11",
        explanation: "The pattern counts by 3s: 3, 6, 9, 12, 15, 18. The number 11 doesn't fit the pattern, as 9+3=12, not 11. 🧮",
        wrongAnswerExplanations: {
            "3": "3 is the first number in the pattern and fits with counting by 3s.",
            "6": "6 comes after 3 when counting by 3s, so it fits the pattern.",
            "18": "18 is the 6th number when counting by 3s, so it fits the pattern."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch10_t1_qm6',
        type: "mcq",
        question: "If the rule is 'multiply by 2 and add 1', what are the next two numbers after 3, 7, 15?",
        options: ["23, 31", "30, 60", "31, 63", "31, 61"],
        correctAnswer: "31, 63",
        explanation: "For each number, multiply by 2 and add 1: 7×2+1=15, 15×2+1=31, 31×2+1=63. 🔢",
        wrongAnswerExplanations: {
            "23, 31": "Using the rule 'multiply by 2 and add 1' on 15 gives 31, not 23.",
            "30, 60": "The rule adds 1 after multiplying by 2, so 15×2+1=31, not 30.",
            "31, 61": "Using the rule on 31 gives 31×2+1=63, not 61."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch10_t1_qm7',
        type: "mcq",
        question: "What comes next in this shape pattern? ▲, ■, ■, ▲, ▲, ▲, ■, ■, ■, ■, ▲, ▲, ▲, ▲, ▲, ■, ■, ■, ■, ■, ■, ...",
        options: ["▲", "■", "●", "None of these"],
        correctAnswer: "▲",
        explanation: "The pattern shows increasing groups: 1 triangle, 2 squares, 3 triangles, 4 squares, 5 triangles, 6 squares, and next would be 7 triangles. 📐",
        wrongAnswerExplanations: {
            "■": "The pattern alternates between triangles and squares, with each group increasing in size. After 6 squares should come 7 triangles, not squares.",
            "●": "Circles are not part of this pattern at all.",
            "None of these": "The pattern follows a clear rule of alternating shapes with increasing group sizes."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch10_t1_qm8',
        type: "mcq",
        question: "What are the next two shapes in this pattern? ○, ○, △, △, □, □, ○, ○, ...",
        options: ["△, △", "□, □", "○, ○", "△, □"],
        correctAnswer: "△, △",
        explanation: "The pattern repeats with pairs of shapes: 2 circles, 2 triangles, 2 squares, then repeats. After 2 circles come 2 triangles. 🔄",
        wrongAnswerExplanations: {
            "□, □": "The pattern is 2 circles, 2 triangles, 2 squares, then repeats. After 2 circles come 2 triangles, not 2 squares.",
            "○, ○": "The pattern just had 2 circles, so it's now time for 2 triangles, not more circles.",
            "△, □": "The shapes come in pairs of the same shape. After 2 circles should come 2 triangles, not a triangle and a square."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch10_t1_qm9',
        type: "mcq",
        question: "What is the pattern in this number sequence? 1, 4, 9, 16, 25",
        options: ["Add 3, then 5, then 7, etc.", "Square numbers", "Multiply by 4", "Add the previous two numbers"],
        correctAnswer: "Square numbers",
        explanation: "These are square numbers: 1=1², 4=2², 9=3², 16=4², 25=5². Each number is the square of its position in the sequence. 🔲",
        wrongAnswerExplanations: {
            "Add 3, then 5, then 7, etc.": "While the differences between consecutive terms do increase by 2 each time, the simpler pattern is that these are square numbers.",
            "Multiply by 4": "Multiplying by 4 would give 1, 4, 16, 64, 256, which is not the given pattern.",
            "Add the previous two numbers": "This would give 1, 1, 2, 3, 5, 8, 13, which is the Fibonacci sequence, not the given pattern."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 50
    },
    {
        id: 'cl4_ch10_t1_qm10',
        type: "mcq",
        question: "Look at the pattern: 1, 2, 4, 7, 11, ... What is the next number?",
        options: ["13", "15", "16", "18"],
        correctAnswer: "16",
        explanation: "The differences between consecutive numbers increase by 1: 2-1=1, 4-2=2, 7-4=3, 11-7=4. Next, 11+5=16. 📊",
        wrongAnswerExplanations: {
            "13": "The differences increase by 1 each time, so after adding 4 to get 11, we should add 5 to get 16, not 2 to get 13.",
            "15": "The differences increase by 1 each time, so after adding 4 to get 11, we should add 5 to get 16, not 4 to get 15.",
            "18": "The differences increase by 1 each time, so after adding 4 to get 11, we should add 5 to get 16, not 7 to get 18."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch10_t1_qm11',
        type: "mcq",
        question: "Find the rule for this pattern: 0, 5, 8, 17, 24, 41, ...",
        options: ["Add 5, then 3, then 9", "Fibonacci-like: each number is the sum of the two before it", "Add increasing multiples of prime numbers", "No consistent pattern"],
        correctAnswer: "Fibonacci-like: each number is the sum of the two before it",
        explanation: "Each number is the sum of the two numbers before it: 0+5=5, 5+3=8, 3+5=8, 8+9=17, 9+8=17, 17+7=24, 24+17=41. 🧩",
        wrongAnswerExplanations: {
            "Add 5, then 3, then 9": "This doesn't explain the entire pattern consistently.",
            "Add increasing multiples of prime numbers": "The pattern doesn't follow this rule consistently.",
            "No consistent pattern": "There is a consistent pattern: each number is the sum of the two before it."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch10_t1_qm12',
        type: "mcq",
        question: "Which rule describes this pattern? 1, 3, 7, 15, 31",
        options: ["Add 2, then 4, then 8, etc.", "Double the previous number and add 1", "Add prime numbers", "Add the previous two numbers"],
        correctAnswer: "Double the previous number and add 1",
        explanation: "Each number follows the rule: 1×2+1=3, 3×2+1=7, 7×2+1=15, 15×2+1=31. 🔍",
        wrongAnswerExplanations: {
            "Add 2, then 4, then 8, etc.": "This describes the differences between terms but is more complex than the actual rule.",
            "Add prime numbers": "The pattern doesn't involve adding prime numbers consistently.",
            "Add the previous two numbers": "This would give the Fibonacci sequence, which is different from the given pattern."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch10_t1_qm13',
        type: "mcq",
        question: "What numbers should fill the blanks? 81, 27, 9, ___, ___",
        options: ["3, 1", "6, 3", "4, 2", "3, 0"],
        correctAnswer: "3, 1",
        explanation: "The pattern divides each number by 3: 81÷3=27, 27÷3=9, 9÷3=3, 3÷3=1. ➗",
        wrongAnswerExplanations: {
            "6, 3": "If we divide by 3 each time, after 9 comes 3, not 6.",
            "4, 2": "If we divide by 3 each time, after 9 comes 3 and after 3 comes 1, not 4 and 2.",
            "3, 0": "If we divide by 3 each time, after 3 comes 1, not 0."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch10_t1_qm14',
        type: "mcq",
        question: "Create a pattern following the rule 'start at 2 and add 6 each time'. Which option shows the first four numbers of this pattern?",
        options: ["2, 8, 14, 20", "2, 6, 10, 14", "2, 8, 16, 24", "2, 12, 22, 32"],
        correctAnswer: "2, 8, 14, 20",
        explanation: "Starting at 2 and adding 6 each time: 2, 2+6=8, 8+6=14, 14+6=20. ➕",
        wrongAnswerExplanations: {
            "2, 6, 10, 14": "This pattern adds 4 each time, not 6.",
            "2, 8, 16, 24": "This pattern multiplies by 2 and then adds 2 each time, not adds 6.",
            "2, 12, 22, 32": "This pattern adds 10 each time (except for the first step), not 6."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch10_t1_qm15',
        type: "mcq",
        question: "Which number pattern follows the rule 'double the previous number'?",
        options: ["2, 4, 6, 8, 10", "2, 4, 8, 16, 32", "3, 6, 12, 24, 48", "1, 3, 9, 27, 81"],
        correctAnswer: "2, 4, 8, 16, 32",
        explanation: "Each number is double the previous one: 2×2=4, 4×2=8, 8×2=16, 16×2=32. 2️⃣",
        wrongAnswerExplanations: {
            "2, 4, 6, 8, 10": "This pattern adds 2 each time, rather than doubling.",
            "3, 6, 12, 24, 48": "This pattern doubles each time, but starts with 3, not 2.",
            "1, 3, 9, 27, 81": "This pattern triples each time (multiplies by 3), not doubles."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch10_t1_qm16',
        type: "mcq",
        question: "What is the rule for this pattern? 3, 6, 11, 18, 27",
        options: ["Add 3, then 5, then 7, then 9", "Add 3 to the previous number, then add one more each time", "Square plus 2", "No clear pattern"],
        correctAnswer: "Add 3, then 5, then 7, then 9",
        explanation: "The differences between consecutive terms increase by 2 each time: 6-3=3, 11-6=5, 18-11=7, 27-18=9. 📈",
        wrongAnswerExplanations: {
            "Add 3 to the previous number, then add one more each time": "This is similar but not precisely the rule.",
            "Square plus 2": "3 is not 1²+2 and 6 is not 2²+2, so this rule doesn't work.",
            "No clear pattern": "There is a clear pattern where differences increase by 2 each time."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch10_t1_qm17',
        type: "mcq",
        question: "If the pattern continues, which shape would be in the 15th position? ○, △, □, ○, △, □, ○, △, □, ...",
        options: ["○", "△", "□", "Cannot be determined"],
        correctAnswer: "○",
        explanation: "The pattern repeats every 3 positions. Position 15 divided by 3 gives remainder 0, so it's like position 3, which is □. But actually, it's position 15, so it's the next one after □, which is ○. 🔄",
        wrongAnswerExplanations: {
            "△": "Position 15 would not be a triangle based on the repeating pattern of 3 shapes.",
            "□": "Position 15 would not be a square based on the repeating pattern of 3 shapes.",
            "Cannot be determined": "The pattern clearly repeats every 3 positions, so we can determine the 15th shape."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch10_t1_qm18',
        type: "mcq",
        question: "Which pattern shows counting backward by 5s from 50?",
        options: ["50, 45, 40, 35, 30", "50, 40, 30, 20, 10", "55, 50, 45, 40, 35", "50, 44, 38, 32, 26"],
        correctAnswer: "50, 45, 40, 35, 30",
        explanation: "Counting backward by 5s means subtracting 5 each time: 50-5=45, 45-5=40, 40-5=35, 35-5=30. 🔢",
        wrongAnswerExplanations: {
            "50, 40, 30, 20, 10": "This pattern counts backward by 10s, not 5s.",
            "55, 50, 45, 40, 35": "This pattern counts backward by 5s, but starts at 55, not 50.",
            "50, 44, 38, 32, 26": "This pattern counts backward by 6s, not 5s."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch10_t1_qm19',
        type: "mcq",
        question: "A pattern starts with 3 red beads, then 5 blue beads, then 7 red beads, then 9 blue beads. What comes next and how many?",
        options: ["11 red beads", "10 blue beads", "11 blue beads", "13 red beads"],
        correctAnswer: "11 red beads",
        explanation: "The pattern alternates between red and blue beads, with the number increasing by 2 each time: 3 red, 5 blue, 7 red, 9 blue, 11 red. 🧶",
        wrongAnswerExplanations: {
            "10 blue beads": "The pattern increases by 2 each time, not by 1, and should alternate colors.",
            "11 blue beads": "The pattern alternates colors, so after blue beads should come red beads, not more blue.",
            "13 red beads": "The pattern increases by 2 each time, so after 9 comes 11, not 13."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch10_t1_qm20',
        type: "mcq",
        question: "What is the pattern in this number series? 1, 4, 7, 10, 13, 16",
        options: ["Add 2 each time", "Add 3 each time", "Odd numbers only", "Multiply by 3, then add 1"],
        correctAnswer: "Add 3 each time",
        explanation: "Each number increases by 3: 1+3=4, 4+3=7, 7+3=10, 10+3=13, 13+3=16. 3️⃣",
        wrongAnswerExplanations: {
            "Add 2 each time": "The difference between consecutive numbers is 3, not 2.",
            "Odd numbers only": "The sequence includes even numbers (4, 10, 16), not just odd numbers.",
            "Multiply by 3, then add 1": "This rule doesn't generate the given sequence consistently."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    }
];
