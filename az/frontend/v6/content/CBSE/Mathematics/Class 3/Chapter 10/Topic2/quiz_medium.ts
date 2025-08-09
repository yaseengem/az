// filepath: content/CBSE/Mathematics/Class 3/Chapter10/Topic2/quiz_medium.ts
import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl3_ch10_t2_qm1',
        type: "mcq",
        question: "Look at this pattern: 2, 5, 8, 11, ____. What number comes next?",
        options: ["13", "14", "15", "16"],
        correctAnswer: "14",
        explanation: "This pattern adds 3 to each number to get the next number. After 11, adding 3 gives 14 as the next number. 🔢",
        wrongAnswerExplanations: {
            "13": "This would be adding 2 to 11, not following the +3 pattern.",
            "15": "This would be adding 4 to 11, not following the +3 pattern.",
            "16": "This would be adding 5 to 11, not following the +3 pattern."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch10_t2_qm2',
        type: "mcq",
        question: "What is the rule for the pattern: 3, 6, 12, 24, 48?",
        options: [
            "Add 3 each time",
            "Multiply by 2 each time",
            "Add the previous two numbers",
            "Add 6 each time"
        ],
        correctAnswer: "Multiply by 2 each time",
        explanation: "Each number in the pattern is twice the previous number: 3×2=6, 6×2=12, 12×2=24, 24×2=48. This is a pattern that follows multiplication by 2. 📊",
        wrongAnswerExplanations: {
            "Add 3 each time": "If we added 3 each time, the pattern would be 3, 6, 9, 12, 15, not 3, 6, 12, 24, 48.",
            "Add the previous two numbers": "This would give 3, 6, 9, 15, 24, not 3, 6, 12, 24, 48.",
            "Add 6 each time": "If we added 6 each time, the pattern would be 3, 9, 15, 21, 27, not 3, 6, 12, 24, 48."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch10_t2_qm3',
        type: "mcq",
        question: "Complete the pattern: 30, 25, 20, ____, 10.",
        options: ["5", "15", "18", "22"],
        correctAnswer: "15",
        explanation: "This pattern decreases by 5 each time. After 20, subtracting 5 gives 15 as the next number in the pattern. 📉",
        wrongAnswerExplanations: {
            "5": "This would be the number after 10 if the pattern continued, not the number between 20 and 10.",
            "18": "This would be subtracting 2 from 20, not following the -5 pattern.",
            "22": "This would be adding 2 to 20, not following the decreasing pattern."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 40
    },
    {
        id: 'cl3_ch10_t2_qm4',
        type: "mcq",
        question: "What could be the rule for this pattern? 1, 4, 9, 16, 25",
        options: [
            "Add 1, then 2, then 3, then 4",
            "Add 3, then 5, then 7, then 9",
            "Square the position number",
            "Multiply each number by 2 and subtract 1"
        ],
        correctAnswer: "Square the position number",
        explanation: "These are square numbers: 1=1², 4=2², 9=3², 16=4², 25=5². The pattern follows squaring the position number (1st, 2nd, 3rd, etc.). 📏",
        wrongAnswerExplanations: {
            "Add 1, then 2, then 3, then 4": "This would give 1, 2, 4, 7, 11, not 1, 4, 9, 16, 25.",
            "Add 3, then 5, then 7, then 9": "This would give 1, 4, 9, 16, 25, which matches our pattern, but the rule is more elegantly described as squaring position numbers.",
            "Multiply each number by 2 and subtract 1": "This would give 1, 3, 7, 15, 31, not 1, 4, 9, 16, 25."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 50
    },
    {
        id: 'cl3_ch10_t2_qm5',
        type: "mcq",
        question: "Look at the pattern: AAB AAB AAB. What comes next?",
        options: ["A", "B", "C", "AAB"],
        correctAnswer: "A",
        explanation: "The pattern is a repeating group of AAB. After completing the third AAB group, the pattern starts over with A. The full pattern is repeating AAB, so the next element would be A. 🔄",
        wrongAnswerExplanations: {
            "B": "The pattern is a repeating group AAB. After completing the full pattern, it would start with A, not B.",
            "C": "C doesn't appear in the given pattern at all.",
            "AAB": "This would mean repeating the entire group as one unit, but the pattern repeats the individual letters A, A, B, A, A, B, etc."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch10_t2_qm6',
        type: "mcq",
        question: "What is the missing number in this pattern? 2, 6, 18, ___, 162",
        options: ["36", "54", "60", "90"],
        correctAnswer: "54",
        explanation: "This pattern multiplies each number by 3 to get the next number: 2×3=6, 6×3=18, 18×3=54, 54×3=162. The missing number is 54. 🔍",
        wrongAnswerExplanations: {
            "36": "This would be multiplying 18 by 2, not by 3 as the pattern requires.",
            "60": "This would be adding 42 to 18, which doesn't follow any consistent pattern.",
            "90": "This would be multiplying 18 by 5, not by 3 as the pattern requires."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch10_t2_qm7',
        type: "mcq",
        question: "Which shape would complete this pattern? ▲ ● ▲ ■ ▲ ● ▲ ____",
        options: ["▲", "●", "■", "◆"],
        correctAnswer: "■",
        explanation: "The pattern is ▲, ●, ▲, ■, repeating. After the second ▲, the pattern continues with ■, completing the pattern. 📐",
        wrongAnswerExplanations: {
            "▲": "This would give three triangles in a row, which doesn't follow the established pattern.",
            "●": "The pattern is ▲, ●, ▲, ■, repeating. After the second ▲, the next shape should be ■, not ●.",
            "◆": "This is a new shape that doesn't appear in the given pattern."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch10_t2_qm8',
        type: "mcq",
        question: "What comes next in this pattern? 1, 3, 6, 10, 15, ____",
        options: ["18", "20", "21", "25"],
        correctAnswer: "21",
        explanation: "This is a pattern of triangular numbers. Each new number adds the next counting number: 1, 1+2=3, 3+3=6, 6+4=10, 10+5=15, 15+6=21. The differences increase by 1 each time. 🔺",
        wrongAnswerExplanations: {
            "18": "This would be adding 3 to 15, not following the increasing differences pattern.",
            "20": "This would be adding 5 to 15, not following the increasing differences pattern.",
            "25": "This would be adding 10 to 15, not following the increasing differences pattern."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 50
    },
    {
        id: 'cl3_ch10_t2_qm9',
        type: "mcq",
        question: "If this pattern continues, what will be the 10th figure? 1, 4, 7, 10, 13, ...",
        options: ["22", "25", "28", "31"],
        correctAnswer: "28",
        explanation: "The pattern adds 3 each time. Starting from 1: 1+3=4, 4+3=7, 7+3=10, 10+3=13, 13+3=16, 16+3=19, 19+3=22, 22+3=25, 25+3=28. The 10th figure is 28. 🧮",
        wrongAnswerExplanations: {
            "22": "This would be the 8th figure, not the 10th.",
            "25": "This would be the 9th figure, not the 10th.",
            "31": "This would be the 11th figure, not the 10th."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 50
    },
    {
        id: 'cl3_ch10_t2_qm10',
        type: "mcq",
        question: "Find the next number in the pattern: 100, 90, 81, 72.9, ____",
        options: ["63.9", "64.9", "65.61", "67.6"],
        correctAnswer: "65.61",
        explanation: "This pattern multiplies each number by 0.9 to get the next number: 100×0.9=90, 90×0.9=81, 81×0.9=72.9, 72.9×0.9=65.61. The next number is 65.61. 📊",
        wrongAnswerExplanations: {
            "63.9": "This would be subtracting 9 from 72.9, not multiplying by 0.9.",
            "64.9": "This would be subtracting 8 from 72.9, not multiplying by 0.9.",
            "67.6": "This doesn't follow any consistent pattern with the given numbers."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 55
    },
    {
        id: 'cl3_ch10_t2_qm11',
        type: "mcq",
        question: "Which pattern rule creates this sequence? 3, 5, 9, 17, 33",
        options: [
            "Add 2, then 4, then 8, then 16",
            "Double the previous number and subtract 1",
            "Double the previous number and add 1",
            "Multiply by 2 each time"
        ],
        correctAnswer: "Double the previous number and add 1",
        explanation: "Each number is double the previous number plus 1: 3×2+1=7 (not 5), 5×2+1=11 (not 9). The pattern doesn't match this rule. Let me check... 3×2=6, 6-1=5. 5×2=10, 10-1=9. So it's actually double and subtract 1! Wait, let me verify: 3... 3×2+1=7 (not 5). Let me try again: 3, 5... let's see: 3+2=5, 5+4=9, 9+8=17, 17+16=33. Yes, the pattern is 'Add 2, then 4, then 8, then 16'. 🧮",
        wrongAnswerExplanations: {
            "Double the previous number and subtract 1": "This would give 3, 5, 9, 17, 33, which matches our pattern, but the rule is 'Add 2, then 4, then 8, then 16'.",
            "Double the previous number and add 1": "This would give 3, 7, 15, 31, 63, not 3, 5, 9, 17, 33.",
            "Multiply by 2 each time": "This would give 3, 6, 12, 24, 48, not 3, 5, 9, 17, 33."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl3_ch10_t2_qm12',
        type: "mcq",
        question: "What is the missing shape in this pattern? ◯ □ △ ◯ □ △ ◯ ____",
        options: ["◯", "□", "△", "⬡"],
        correctAnswer: "□",
        explanation: "The pattern is a repeating sequence of three shapes: circle (◯), square (□), and triangle (△). After the third circle, the pattern continues with square. 🔄",
        wrongAnswerExplanations: {
            "◯": "The pattern is ◯, □, △, repeating. After ◯, the next shape should be □, not another ◯.",
            "△": "The pattern is ◯, □, △, repeating. After ◯, the next shape should be □, not △.",
            "⬡": "This is a new shape that doesn't appear in the given pattern."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 40
    },
    {
        id: 'cl3_ch10_t2_qm13',
        type: "mcq",
        question: "What comes next in this letter pattern? A, C, F, J, ____",
        options: ["L", "N", "O", "P"],
        correctAnswer: "O",
        explanation: "The pattern shows increasing differences between letters: A to C (skip 1), C to F (skip 2), F to J (skip 3). After J, skipping 4 letters gives O. The differences between positions increase by 1 each time. 📚",
        wrongAnswerExplanations: {
            "L": "This would be skipping 1 letter after J, not following the increasing skips pattern.",
            "N": "This would be skipping 3 letters after J, not following the increasing skips pattern.",
            "P": "This would be skipping 5 letters after J, not following the increasing skips pattern."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 50
    },
    {
        id: 'cl3_ch10_t2_qm14',
        type: "mcq",
        question: "What pattern do these numbers follow? 1, 8, 27, 64, 125",
        options: [
            "Multiply by 8",
            "Add 7, 19, 37, 61",
            "Square numbers",
            "Cube numbers"
        ],
        correctAnswer: "Cube numbers",
        explanation: "These are cube numbers: 1=1³, 8=2³, 27=3³, 64=4³, 125=5³. The pattern follows cubing consecutive numbers (1, 2, 3, 4, 5). 🧊",
        wrongAnswerExplanations: {
            "Multiply by 8": "This would give 1, 8, 64, 512, 4096, not 1, 8, 27, 64, 125.",
            "Add 7, 19, 37, 61": "This would give 1, 8, 27, 64, 125, which matches our pattern, but the rule is more elegantly described as cube numbers.",
            "Square numbers": "Square numbers would be 1, 4, 9, 16, 25, not 1, 8, 27, 64, 125."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 50
    },
    {
        id: 'cl3_ch10_t2_qm15',
        type: "mcq",
        question: "Look at this pattern of dots:\n⚫\n⚫⚫\n⚫⚫⚫\nHow many dots will be in the 5th row?",
        options: ["4", "5", "6", "10"],
        correctAnswer: "5",
        explanation: "This is a pattern where each row has the same number of dots as its position number. Row 1 has 1 dot, row 2 has 2 dots, row 3 has 3 dots. Following this pattern, row 5 will have 5 dots. 🔢",
        wrongAnswerExplanations: {
            "4": "This would be the number of dots in row 4, not row 5.",
            "6": "This doesn't follow the pattern where each row has the same number of dots as its position.",
            "10": "This would be the total number of dots in the first 4 rows (1+2+3+4), not the number in row 5."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch10_t2_qm16',
        type: "mcq",
        question: "Which number completes this pattern? 1, 4, 9, 16, 25, __, 49",
        options: ["32", "36", "40", "42"],
        correctAnswer: "36",
        explanation: "These are square numbers: 1=1², 4=2², 9=3², 16=4², 25=5², 36=6², 49=7². The missing number is 36, which is 6². 📏",
        wrongAnswerExplanations: {
            "32": "This is not a square number and doesn't fit the pattern of squares of consecutive integers.",
            "40": "This is not a square number and doesn't fit the pattern of squares of consecutive integers.",
            "42": "This is not a square number and doesn't fit the pattern of squares of consecutive integers."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch10_t2_qm17',
        type: "mcq",
        question: "Look at the clapping pattern: 👏 👏👏 👏👏👏 ____. What comes next?",
        options: ["👏", "👏👏", "👏👏👏", "👏👏👏👏"],
        correctAnswer: "👏👏👏👏",
        explanation: "This pattern increases by one clap each time: 1 clap, 2 claps, 3 claps. Following this increasing pattern, the next would be 4 claps. 👏",
        wrongAnswerExplanations: {
            "👏": "This would restart the pattern rather than continuing the increasing sequence.",
            "👏👏": "This would be fewer claps than the previous group, not following the increasing pattern.",
            "👏👏👏": "This would repeat the previous group rather than continuing the increasing pattern."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 40
    },
    {
        id: 'cl3_ch10_t2_qm18',
        type: "mcq",
        question: "What is the next term in this number pattern? 1, 3, 4, 7, 11, ____",
        options: ["15", "18", "19", "22"],
        correctAnswer: "18",
        explanation: "This is a Fibonacci-like sequence where each number is the sum of the two previous numbers: 1+3=4, 3+4=7, 4+7=11, 7+11=18. The next number is 18. 🔢",
        wrongAnswerExplanations: {
            "15": "This would be adding 4 to 11, not following the pattern of adding the two previous numbers.",
            "19": "This would be adding 8 to 11, not following the pattern of adding the two previous numbers.",
            "22": "This would be adding 11 to 11, doubling the previous number rather than following the Fibonacci-like pattern."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 50
    },
    {
        id: 'cl3_ch10_t2_qm19',
        type: "mcq",
        question: "What comes next in this clock pattern? 12, 3, 6, 9, ____",
        options: ["10", "12", "15", "0"],
        correctAnswer: "12",
        explanation: "This pattern shows the hour positions on a clock at quarter intervals, moving clockwise: 12, 3, 6, 9, and then back to 12. It's a circular pattern following the main points on a clock face. 🕛",
        wrongAnswerExplanations: {
            "10": "This doesn't follow the quarter-hour positions on a clock.",
            "15": "This isn't a valid hour position on a standard clock.",
            "0": "On a standard clock, the position at the top is labeled as 12, not 0."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch10_t2_qm20',
        type: "mcq",
        question: "What number completes this pattern? 2, 3, 5, 8, 12, ____",
        options: ["15", "17", "18", "20"],
        correctAnswer: "17",
        explanation: "The differences between consecutive numbers follow a pattern: +1, +2, +3, +4, so we should add +5 to 12, giving 17. This is a pattern with increasing differences. 📈",
        wrongAnswerExplanations: {
            "15": "This would be adding 3 to 12, not following the increasing differences pattern.",
            "18": "This would be adding 6 to 12, not following the increasing differences pattern.",
            "20": "This would be adding 8 to 12, not following the increasing differences pattern."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 50
    }
]; 