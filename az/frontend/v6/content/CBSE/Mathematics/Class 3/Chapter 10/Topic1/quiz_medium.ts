import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl3_ch10_t1_qm1',
        type: "mcq",
        question: "Which number would continue the pattern: 2, 6, 10, 14, ___?",
        options: ["16", "18", "20", "22"],
        correctAnswer: "18",
        explanation: "The pattern adds 4 each time: 2, 6, 10, 14, 18. Each number increases by 4.",
        wrongAnswerExplanations: {
            "16": "The pattern adds 4 each time, not 2.",
            "20": "The pattern adds 4 each time, so 14 + 4 = 18, not 20.",
            "22": "The pattern adds 4 each time, so 14 + 4 = 18, not 22."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch10_t1_qm2',
        type: "mcq",
        question: "What number would complete this pattern? 1, 3, 6, 10, 15, ___",
        options: ["18", "20", "21", "25"],
        correctAnswer: "21",
        explanation: "This is a pattern of triangular numbers. Each number is found by adding the position number: 1, 1+2=3, 3+3=6, 6+4=10, 10+5=15, 15+6=21.",
        wrongAnswerExplanations: {
            "18": "The pattern adds increasing numbers (1, 2, 3, 4, 5, 6). 15 + 6 = 21, not 18.",
            "20": "The pattern adds increasing numbers (1, 2, 3, 4, 5, 6). 15 + 6 = 21, not 20.",
            "25": "The pattern adds increasing numbers (1, 2, 3, 4, 5, 6). 15 + 6 = 21, not 25."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch10_t1_qm3',
        type: "mcq",
        question: "What comes next in this pattern? 🟥 🟦 🟥🟥 🟦🟦 🟥🟥🟥 ___",
        options: ["🟦", "🟦🟦", "🟦🟦🟦", "🟥🟥🟥🟥"],
        correctAnswer: "🟦🟦🟦",
        explanation: "The pattern alternates red and blue squares, with the number increasing: one red, one blue, two red, two blue, three red, three blue.",
        wrongAnswerExplanations: {
            "🟦": "The pattern shows an increasing number of squares each time, not just one.",
            "🟦🟦": "The pattern increases by one square each time. After three red squares comes three blue squares.",
            "🟥🟥🟥🟥": "The pattern alternates colors. After three red squares should come blue squares, not more red."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch10_t1_qm4',
        type: "mcq",
        question: "What number comes next? 1, 4, 9, 16, 25, ___",
        options: ["30", "36", "42", "49"],
        correctAnswer: "36",
        explanation: "These are square numbers: 1=1², 4=2², 9=3², 16=4², 25=5², 36=6². The next number is 6²=36.",
        wrongAnswerExplanations: {
            "30": "The pattern shows square numbers. The next would be 6², which is 36, not 30.",
            "42": "The pattern shows square numbers. The next would be 6², which is 36, not 42.",
            "49": "The pattern shows square numbers. The next would be 6², which is 36, not 49 (which is 7²)."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch10_t1_qm5',
        type: "mcq",
        question: "If the pattern continues, what will be the 8th number? 3, 6, 9, 12, ...",
        options: ["21", "23", "24", "27"],
        correctAnswer: "24",
        explanation: "This pattern adds 3 each time. To find the 8th number: 3 + (8-1) × 3 = 3 + 7 × 3 = 3 + 21 = 24.",
        wrongAnswerExplanations: {
            "21": "The 7th number would be 21, but the question asks for the 8th number, which is 24.",
            "23": "The pattern adds 3 each time, so the 8th number would be 24, not 23.",
            "27": "The 9th number would be 27, but the question asks for the 8th number, which is 24."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch10_t1_qm6',
        type: "mcq",
        question: "What shape pattern is shown? 🔴 🔵 🟡 🔴 🔵 🟡...",
        options: ["AABB pattern", "ABC pattern", "ABBA pattern", "ABCD pattern"],
        correctAnswer: "ABC pattern",
        explanation: "This is an ABC pattern because it has three different items (red, blue, yellow) that repeat in the same order.",
        wrongAnswerExplanations: {
            "AABB pattern": "An AABB pattern would be like 🔴🔴🔵🔵. The given pattern is 🔴🔵🟡.",
            "ABBA pattern": "An ABBA pattern would be like 🔴🔵🔵🔴. The given pattern is 🔴🔵🟡.",
            "ABCD pattern": "An ABCD pattern would have four different items. The given pattern has three items: 🔴🔵🟡."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch10_t1_qm7',
        type: "mcq",
        question: "If the pattern is 2, 5, 11, 23, ___, what rule is being followed?",
        options: ["Add 3, then 6, then 12", "Multiply by 2, then add 1", "Multiply by 2, then add 3", "Multiply by 2, then subtract 1"],
        correctAnswer: "Multiply by 2, then add 1",
        explanation: "Each number is doubled and then 1 is added: 2×2+1=5, 5×2+1=11, 11×2+1=23. The next number would be 23×2+1=47.",
        wrongAnswerExplanations: {
            "Add 3, then 6, then 12": "This doesn't match the pattern. 2+3=5 works, but 5+6=11 doesn't work for the next step.",
            "Multiply by 2, then add 3": "This doesn't match the pattern. 2×2+3=7, which doesn't equal 5.",
            "Multiply by 2, then subtract 1": "This doesn't match the pattern. 2×2-1=3, which doesn't equal 5."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch10_t1_qm8',
        type: "mcq",
        question: "What number is missing? 4, 8, 12, ___, 20, 24",
        options: ["14", "15", "16", "18"],
        correctAnswer: "16",
        explanation: "This pattern adds 4 each time: 4, 8, 12, 16, 20, 24. The missing number is 16.",
        wrongAnswerExplanations: {
            "14": "The pattern adds 4 each time, so 12 + 4 = 16, not 14.",
            "15": "The pattern adds 4 each time, so 12 + 4 = 16, not 15.",
            "18": "The pattern adds 4 each time, so 12 + 4 = 16, not 18."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch10_t1_qm9',
        type: "mcq",
        question: "Which number does NOT fit the pattern? 3, 7, 11, 14, 19, 23",
        options: ["7", "11", "14", "23"],
        correctAnswer: "14",
        explanation: "The pattern adds 4 each time: 3+4=7, 7+4=11, 11+4=15 (not 14), 15+4=19, 19+4=23. The number 14 breaks the pattern.",
        wrongAnswerExplanations: {
            "7": "The pattern adds 4 each time. 3+4=7, so 7 fits the pattern.",
            "11": "The pattern adds 4 each time. 7+4=11, so 11 fits the pattern.",
            "23": "The pattern adds 4 each time. 19+4=23, so 23 fits the pattern."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch10_t1_qm10',
        type: "mcq",
        question: "What is the rule for this pattern? 3, 7, 15, 31, 63, ___",
        options: ["Multiply by 2, add 1", "Multiply by 3, subtract 2", "Multiply by 2, subtract 1", "Double the previous number"],
        correctAnswer: "Multiply by 2, add 1",
        explanation: "Each number is doubled and then 1 is added: 3×2+1=7, 7×2+1=15, 15×2+1=31, 31×2+1=63. The next number would be 63×2+1=127.",
        wrongAnswerExplanations: {
            "Multiply by 3, subtract 2": "This doesn't match the pattern. 3×3-2=7 works, but 7×3-2=19, which doesn't equal 15.",
            "Multiply by 2, subtract 1": "This doesn't match the pattern. 3×2-1=5, which doesn't equal 7.",
            "Double the previous number": "This doesn't match the pattern. Double 3 is 6, not 7. There's an addition step too."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch10_t1_qm11',
        type: "mcq",
        question: "What number should replace the question mark? 2, 6, 18, 54, ?",
        options: ["60", "108", "162", "270"],
        correctAnswer: "162",
        explanation: "Each number is multiplied by 3: 2×3=6, 6×3=18, 18×3=54, 54×3=162.",
        wrongAnswerExplanations: {
            "60": "The pattern multiplies by 3 each time, not adds 6. 54×3=162, not 60.",
            "108": "The pattern multiplies by 3 each time. 54×3=162, not 108 (which would be 54×2).",
            "270": "The pattern multiplies by 3 each time. 54×3=162, not 270 (which would be 54×5)."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch10_t1_qm12',
        type: "mcq",
        question: "Which comes next in the pattern? 🔺 🔺🔺 🔺🔺🔺🔺 🔺🔺🔺🔺🔺🔺🔺 ___",
        options: ["🔺🔺🔺🔺🔺🔺🔺🔺", "🔺🔺🔺🔺🔺🔺🔺🔺🔺", "🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺", "🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺"],
        correctAnswer: "🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺",
        explanation: "The pattern shows 1, 3, 7, 13 triangles, which increases by adding 2, 4, 6... triangles. The next term will have 13 + 8 = 21 triangles.",
        wrongAnswerExplanations: {
            "🔺🔺🔺🔺🔺🔺🔺🔺": "The pattern follows a specific rule, adding 2, 4, 6, 8... triangles each time. There should be 21 triangles next.",
            "🔺🔺🔺🔺🔺🔺🔺🔺🔺": "The pattern follows a specific rule, adding 2, 4, 6, 8... triangles each time. There should be 21 triangles next.",
            "🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺": "The pattern follows a specific rule, adding 2, 4, 6, 8... triangles each time. There should be 21 triangles next."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch10_t1_qm13',
        type: "mcq",
        question: "Fill in the missing number: 40, 35, ___, 25, 20",
        options: ["28", "30", "32", "34"],
        correctAnswer: "30",
        explanation: "This pattern decreases by 5 each time: 40, 35, 30, 25, 20.",
        wrongAnswerExplanations: {
            "28": "The pattern decreases by 5 each time, not by 7. 35 - 5 = 30, not 28.",
            "32": "The pattern decreases by 5 each time, not by 3. 35 - 5 = 30, not 32.",
            "34": "The pattern decreases by 5 each time, not by 1. 35 - 5 = 30, not 34."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch10_t1_qm14',
        type: "mcq",
        question: "Which pattern shows an AABBC sequence?",
        options: ["🔵🔵🔴🔴🟡🔵", "🔵🔴🔵🔴🔵", "🔵🔵🔴🔴🟡🟡", "🔵🔴🟡🔵🔴"],
        correctAnswer: "🔵🔵🔴🔴🟡🔵",
        explanation: "An AABBC pattern has two of the first item, two of the second item, and one of the third item. Option 🔵🔵🔴🔴🟡🔵 matches this pattern.",
        wrongAnswerExplanations: {
            "🔵🔴🔵🔴🔵": "This shows an ABABA pattern, not an AABBC pattern.",
            "🔵🔵🔴🔴🟡🟡": "This shows an AABBCC pattern, not an AABBC pattern.",
            "🔵🔴🟡🔵🔴": "This shows an ABCAB pattern, not an AABBC pattern."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch10_t1_qm15',
        type: "mcq",
        question: "What rule is followed in this pattern? 12, 9, 6, 3, 0, ___",
        options: ["Subtract 2", "Subtract 3", "Subtract 4", "Divide by 2"],
        correctAnswer: "Subtract 3",
        explanation: "The pattern subtracts 3 each time: 12-3=9, 9-3=6, 6-3=3, 3-3=0. The next number would be 0-3=-3.",
        wrongAnswerExplanations: {
            "Subtract 2": "The pattern subtracts 3 each time, not 2. 12-2=10, not 9.",
            "Subtract 4": "The pattern subtracts 3 each time, not 4. 12-4=8, not 9.",
            "Divide by 2": "The pattern doesn't divide. 12÷2=6, not 9."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch10_t1_qm16',
        type: "mcq",
        question: "What should replace the question mark? 2, 4, 8, 16, 32, ?",
        options: ["36", "48", "60", "64"],
        correctAnswer: "64",
        explanation: "The pattern doubles each number: 2×2=4, 4×2=8, 8×2=16, 16×2=32, 32×2=64.",
        wrongAnswerExplanations: {
            "36": "The pattern doubles each number, not adds 4. 32×2=64, not 36.",
            "48": "The pattern doubles each number. 32×2=64, not 48.",
            "60": "The pattern doubles each number. 32×2=64, not 60."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch10_t1_qm17',
        type: "mcq",
        question: "Which shape pattern follows the rule 'add one more each time'?",
        options: [
            "🔵 🔵🔵 🔵 🔵🔵",
            "🔴 🔴🔴 🔴🔴🔴 🔴🔴🔴🔴",
            "🔺 🔺 🔺🔺 🔺🔺",
            "🟡 🟡 🟡🟡 🟡🟡🟡"
        ],
        correctAnswer: "🔴 🔴🔴 🔴🔴🔴 🔴🔴🔴🔴",
        explanation: "The pattern 🔴 🔴🔴 🔴🔴🔴 🔴🔴🔴🔴 shows 1, 2, 3, 4 circles, adding one more each time.",
        wrongAnswerExplanations: {
            "🔵 🔵🔵 🔵 🔵🔵": "This pattern alternates between 1 and 2 circles, not adding one more each time.",
            "🔺 🔺 🔺🔺 🔺🔺": "This pattern doesn't add one more each time - it shows 1, 1, 2, 2 triangles.",
            "🟡 🟡 🟡🟡 🟡🟡🟡": "This pattern doesn't consistently add one more each time."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch10_t1_qm18',
        type: "mcq",
        question: "What is the next set of numbers in the pattern? 1-2, 3-4, 5-6, ___",
        options: ["6-7", "7-8", "8-9", "9-10"],
        correctAnswer: "7-8",
        explanation: "The pattern shows consecutive pairs of numbers: 1-2, 3-4, 5-6, 7-8.",
        wrongAnswerExplanations: {
            "6-7": "The pattern shows consecutive pairs of numbers. After 5-6 comes 7-8, not 6-7.",
            "8-9": "While this is a consecutive pair, the pattern increases by 2 for each starting number: 1, 3, 5, 7. So 7-8 comes next.",
            "9-10": "The pattern increases by 2 for each starting number: 1, 3, 5, 7. So 7-8 comes next, not 9-10."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch10_t1_qm19',
        type: "mcq",
        question: "If the shape pattern is 🔺 🟦 🔴 🔺 🟦 🔴..., what is the 10th shape?",
        options: ["🔺", "🟦", "🔴", "Cannot be determined"],
        correctAnswer: "🔴",
        explanation: "This is a repeating pattern of triangle, square, circle. Position 10 would be: Position 1=🔺, 2=🟦, 3=🔴, 4=🔺, 5=🟦, 6=🔴, 7=🔺, 8=🟦, 9=🔴, 10=🔺.",
        wrongAnswerExplanations: {
            "🔺": "The 10th shape is a repeat of the 1st, 4th, and 7th positions, which is a triangle.",
            "🟦": "The 10th shape follows the repeating pattern and would be a triangle, not a square.",
            "Cannot be determined": "The pattern repeats every 3 shapes, so we can determine the 10th shape."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch10_t1_qm20',
        type: "mcq",
        question: "What number should replace the question mark? 3, 5, 9, 17, ?",
        options: ["24", "27", "33", "34"],
        correctAnswer: "33",
        explanation: "Each number is multiplied by 2 and then reduced by 1: 3×2-1=5, 5×2-1=9, 9×2-1=17, 17×2-1=33.",
        wrongAnswerExplanations: {
            "24": "The pattern doubles each number and subtracts 1. 17×2-1=33, not 24.",
            "27": "The pattern doubles each number and subtracts 1. 17×2-1=33, not 27.",
            "34": "The pattern doubles each number and subtracts 1. 17×2-1=33, not 34 (which would be 17×2)."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    }
];
