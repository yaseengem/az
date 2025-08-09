import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl4_ch10_t2_qm1',
        type: "mcq",
        question: "What would be the 7th term in this pattern? 1, 5, 9, 13, 17, 21, ___",
        options: ["24", "25", "26", "25"],
        correctAnswer: "25",
        explanation: "The pattern adds 4 each time. Starting with 1, then 5, 9, 13, 17, 21, and finally 25 as the 7th term.",
        wrongAnswerExplanations: {
            "24": "Adding 3 to 21 gives 24, but the pattern shows adding 4 each time.",
            "26": "Adding 5 to 21 gives 26, but the pattern shows adding 4 each time.",
            "25": "This is a duplicate option."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch10_t2_qm2',
        type: "mcq",
        question: "In the pattern 3, 6, 12, 24, 48, what is the rule?",
        options: ["Add 3 each time", "Multiply by 2 each time", "Add the previous two numbers", "Double and add 3"],
        correctAnswer: "Multiply by 2 each time",
        explanation: "Each number is multiplied by 2 to get the next number: 3×2=6, 6×2=12, 12×2=24, 24×2=48.",
        wrongAnswerExplanations: {
            "Add 3 each time": "Adding 3 to 3 gives 6, but adding 3 to 6 gives 9, not 12.",
            "Add the previous two numbers": "This would give 3, 6, 9, 15, 24, not 3, 6, 12, 24, 48.",
            "Double and add 3": "This would give 3, 9, 21, 45, 93, not 3, 6, 12, 24, 48."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch10_t2_qm3',
        type: "mcq",
        question: "What observation helps find which shape is out of place in a pattern?",
        options: [
            "Only counting the shapes", 
            "Looking only at colors", 
            "Comparing each shape to the pattern rule", 
            "Measuring the shapes"
        ],
        correctAnswer: "Comparing each shape to the pattern rule",
        explanation: "You need to identify the pattern rule first, then check if each shape follows it to find which one doesn't fit.",
        wrongAnswerExplanations: {
            "Only counting the shapes": "Counting alone doesn't help identify which shape breaks a pattern rule.",
            "Looking only at colors": "Colors may be part of the pattern but aren't always the only element to observe.",
            "Measuring the shapes": "In most pattern problems, exact measurements aren't necessary."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch10_t2_qm4',
        type: "mcq",
        question: "In this pattern, which number doesn't belong? 2, 4, 8, 12, 16, 32",
        options: ["4", "8", "12", "32"],
        correctAnswer: "12",
        explanation: "The pattern is doubling each number (×2). 2×2=4, 4×2=8, 8×2=16, 16×2=32. 12 breaks this pattern.",
        wrongAnswerExplanations: {
            "4": "4 is 2×2, following the doubling pattern.",
            "8": "8 is 4×2, following the doubling pattern.",
            "32": "32 is 16×2, following the doubling pattern."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch10_t2_qm5',
        type: "mcq",
        question: "What's the missing shape in this pattern? △, ◯, □, △, ◯, ___",
        options: ["△", "◯", "□", "♢"],
        correctAnswer: "□",
        explanation: "The pattern repeats triangle, circle, square. After circle comes square in this repeating pattern.",
        wrongAnswerExplanations: {
            "△": "The pattern is triangle, circle, square, so triangle would be two steps ahead.",
            "◯": "Circle just appeared, so repeating it breaks the pattern.",
            "♢": "Diamond isn't part of the established triangle-circle-square pattern."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch10_t2_qm6',
        type: "mcq",
        question: "Which sequence shows a growing pattern?",
        options: [
            "2, 2, 2, 2, 2", 
            "5, 10, 15, 20, 25", 
            "7, 5, 3, 1, -1", 
            "1, 3, 6, 10, 15"
        ],
        correctAnswer: "1, 3, 6, 10, 15",
        explanation: "This is a triangular number pattern where the differences increase: +2, +3, +4, +5. It's truly growing.",
        wrongAnswerExplanations: {
            "2, 2, 2, 2, 2": "This is a repeating pattern with no growth.",
            "5, 10, 15, 20, 25": "This is a linear pattern adding 5 each time, not a growing pattern.",
            "7, 5, 3, 1, -1": "This is a decreasing pattern, subtracting 2 each time."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch10_t2_qm7',
        type: "mcq",
        question: "Look at this pattern: AABAABAAB... What are the next three letters?",
        options: ["AAB", "AAA", "BAA", "BBA"],
        correctAnswer: "AAB",
        explanation: "The pattern repeats the sequence AAB. After the last B, the pattern restarts with AAB.",
        wrongAnswerExplanations: {
            "AAA": "This would break the repeating pattern of AAB.",
            "BAA": "This would reverse the established pattern of AAB.",
            "BBA": "This would create a new pattern not matching the established AAB sequence."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch10_t2_qm8',
        type: "mcq",
        question: "Which number comes next in this pattern? 1, 4, 9, 16, 25, ___",
        options: ["30", "36", "42", "49"],
        correctAnswer: "36",
        explanation: "These are square numbers: 1=1², 4=2², 9=3², 16=4², 25=5². The next is 6²=36.",
        wrongAnswerExplanations: {
            "30": "Adding 5 gives 30, but these are square numbers, not a linear pattern.",
            "42": "Adding 17 gives 42, but these are square numbers following n² pattern.",
            "49": "49 is 7², but the next term should be 6²=36."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch10_t2_qm9',
        type: "mcq",
        question: "What's the rule in this number pattern? 2, 6, 18, 54, 162",
        options: ["Add 4 each time", "Add the previous number", "Multiply by 3 each time", "Multiply by 2 and add 2"],
        correctAnswer: "Multiply by 3 each time",
        explanation: "Each number is multiplied by 3: 2×3=6, 6×3=18, 18×3=54, 54×3=162.",
        wrongAnswerExplanations: {
            "Add 4 each time": "Adding 4 to 2 gives 6, but adding 4 to 6 gives 10, not 18.",
            "Add the previous number": "Adding previous numbers would give 2, 2, 4, 6, 10, not 2, 6, 18, 54, 162.",
            "Multiply by 2 and add 2": "This would give 2, 6, 14, 30, 62, not 2, 6, 18, 54, 162."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch10_t2_qm10',
        type: "mcq",
        question: "Look at the pattern: ◯, ◯◯, ◯◯◯, ◯◯◯◯, ___. What's the 10th term?",
        options: ["5 circles", "8 circles", "9 circles", "10 circles"],
        correctAnswer: "10 circles",
        explanation: "Each term has the same number of circles as its position number. The 10th term would have 10 circles.",
        wrongAnswerExplanations: {
            "5 circles": "This would be the 5th term, not the 10th term.",
            "8 circles": "This would be the 8th term, not the 10th term.",
            "9 circles": "This would be the 9th term, not the 10th term."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch10_t2_qm11',
        type: "mcq",
        question: "What's the rule in this pattern? 64, 32, 16, 8, 4, ___",
        options: ["Divide by 4", "Subtract 32", "Divide by 2", "Subtract half each time"],
        correctAnswer: "Divide by 2",
        explanation: "Each number is divided by 2 to get the next number: 64÷2=32, 32÷2=16, 16÷2=8, 8÷2=4, 4÷2=2.",
        wrongAnswerExplanations: {
            "Divide by 4": "Dividing 64 by 4 gives 16, not 32.",
            "Subtract 32": "Subtracting 32 from 64 gives 32, but subtracting 32 from 32 gives 0, not 16.",
            "Subtract half each time": "This is the same as dividing by 2, so it's a duplicate answer."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch10_t2_qm12',
        type: "mcq",
        question: "Identify the incorrect figure in this pattern: ✓, ✓✓, ✓✓✓, ✓✓✓✓✓, ✓✓✓✓✓✓",
        options: ["First", "Third", "Fourth", "Fifth"],
        correctAnswer: "Fourth",
        explanation: "The pattern adds one ✓ each time, so the fourth figure should have 4 checks, not 5.",
        wrongAnswerExplanations: {
            "First": "The first figure has 1 check, which follows the pattern.",
            "Third": "The third figure has 3 checks, which follows the pattern.",
            "Fifth": "The fifth figure has 6 checks, which follows the pattern of adding one more than before."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch10_t2_qm13',
        type: "mcq",
        question: "What number completes this pattern? 3, 8, 13, 18, ___",
        options: ["21", "23", "24", "23"],
        correctAnswer: "23",
        explanation: "The pattern adds 5 each time: 3+5=8, 8+5=13, 13+5=18, 18+5=23.",
        wrongAnswerExplanations: {
            "21": "Adding 3 gives 21, but the pattern shows adding 5 each time.",
            "24": "Adding 6 gives 24, but the pattern shows adding 5 each time.",
            "23": "This is a duplicate option."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch10_t2_qm14',
        type: "mcq",
        question: "In the pattern 1, 2, 4, 7, 11, ___, what's the rule?",
        options: [
            "Add 1, then 2, then 3, and so on", 
            "Double the previous number", 
            "Add the position number each time", 
            "Add 3 each time"
        ],
        correctAnswer: "Add the position number each time",
        explanation: "Add the position number: 1+1=2, 2+2=4, 4+3=7, 7+4=11, 11+5=16 would be next.",
        wrongAnswerExplanations: {
            "Add 1, then 2, then 3, and so on": "This would give 1, 2, 4, 7, 11, but it's the same as adding the position number.",
            "Double the previous number": "This would give 1, 2, 4, 8, 16, not 1, 2, 4, 7, 11.",
            "Add 3 each time": "This would give 1, 4, 7, 10, 13, not 1, 2, 4, 7, 11."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch10_t2_qm15',
        type: "mcq",
        question: "What comes next in this pattern? 1, 4, 7, 10, 13, ___",
        options: ["15", "16", "17", "18"],
        correctAnswer: "16",
        explanation: "The pattern adds 3 each time: 1+3=4, 4+3=7, 7+3=10, 10+3=13, 13+3=16.",
        wrongAnswerExplanations: {
            "15": "Adding 2 gives 15, but the pattern shows adding 3 each time.",
            "17": "Adding 4 gives 17, but the pattern shows adding 3 each time.",
            "18": "Adding 5 gives 18, but the pattern shows adding 3 each time."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch10_t2_qm16',
        type: "mcq",
        question: "What is the pattern in this sequence? 1, 8, 27, 64, ___",
        options: ["Add 7, 19, and 37", "Multiply by 8, then by 3.4, then by 2.4", "Cube the position number", "Square the number and add 7"],
        correctAnswer: "Cube the position number",
        explanation: "These are cube numbers: 1=1³, 8=2³, 27=3³, 64=4³. The next number would be 5³=125.",
        wrongAnswerExplanations: {
            "Add 7, 19, and 37": "This describes the differences (+7, +19, +37) but doesn't provide the rule.",
            "Multiply by 8, then by 3.4, then by 2.4": "This is too complex and doesn't correctly describe the pattern.",
            "Square the number and add 7": "This doesn't match the given numbers."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch10_t2_qm17',
        type: "mcq",
        question: "What observation skill is used to find a missing element in a pattern?",
        options: [
            "Only memorizing", 
            "Identifying relationships between elements", 
            "Looking only at the last element", 
            "Counting the total elements"
        ],
        correctAnswer: "Identifying relationships between elements",
        explanation: "You need to observe how elements relate to each other to identify the pattern rule.",
        wrongAnswerExplanations: {
            "Only memorizing": "Memorization alone doesn't help understand the pattern's structure.",
            "Looking only at the last element": "You need to observe multiple elements to understand the pattern.",
            "Counting the total elements": "The total count doesn't usually help identify the pattern rule."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch10_t2_qm18',
        type: "mcq",
        question: "In the pattern AB, BAB, ABBAB, what comes next?",
        options: ["BABABBAB", "BABBAB", "ABBABBAB", "BABBA"],
        correctAnswer: "BABABBAB",
        explanation: "Each term is formed by adding the previous two terms: AB, BAB, ABBAB, (BAB+ABBAB)=BABABBAB.",
        wrongAnswerExplanations: {
            "BABBAB": "This doesn't follow the pattern of combining the previous two terms.",
            "ABBABBAB": "This adds AB at the beginning, which doesn't follow the pattern.",
            "BABBA": "This is shorter than the previous term, breaking the growing pattern."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch10_t2_qm19',
        type: "mcq",
        question: "Which is the odd one out in this pattern? ▲▲, ■■, ●●, ♦, ✚✚",
        options: ["▲▲", "■■", "●●", "♦"],
        correctAnswer: "♦",
        explanation: "All other shapes appear in pairs, but the diamond appears only once.",
        wrongAnswerExplanations: {
            "▲▲": "The triangles appear in a pair, following the pattern of pairs.",
            "■■": "The squares appear in a pair, following the pattern of pairs.",
            "●●": "The circles appear in a pair, following the pattern of pairs."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch10_t2_qm20',
        type: "mcq",
        question: "If the pattern continues, what will be the 12th term? 3, 6, 9, 12, 15, ...",
        options: ["33", "36", "39", "42"],
        correctAnswer: "36",
        explanation: "The pattern adds 3 each time, forming the sequence 3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36.",
        wrongAnswerExplanations: {
            "33": "This would be the 11th term, not the 12th term.",
            "39": "This would be the 13th term, not the 12th term.",
            "42": "This would be the 14th term, not the 12th term."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    }
];
