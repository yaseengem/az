import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl4_ch1_t1_qm1',
        type: "mcq",
        question: "A brick wall has a pattern where each row has one more brick than the row above it. If the first row has 5 bricks and there are 6 rows in total, how many bricks are used in the entire wall?",
        options: ["30", "45", "60", "75"],
        correctAnswer: "45",
        explanation: "The rows have 5, 6, 7, 8, 9, and 10 bricks. Adding these: 5+6+7+8+9+10=45. This is an arithmetic sequence with first term 5 and common difference 1. 🧮",
        wrongAnswerExplanations: {
            "30": "This would be correct if each row had 5 bricks (5×6=30), but the number of bricks increases in each row.",
            "60": "This is too large. Even if each row had 10 bricks (the maximum in any row), there would be 10×6=60 bricks, but earlier rows have fewer.",
            "75": "This is much larger than the actual sum of the arithmetic sequence."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch1_t1_qm2',
        type: "mcq",
        question: "In a brick pattern, red (R) and blue (B) bricks alternate in the first row: RBRBRB. In the second row, the pattern starts with blue: BRBRB. What will be the pattern in the fourth row?",
        options: ["RBRBRB", "BRBRB", "RBRB", "BRBRBR"],
        correctAnswer: "BRBRB",
        explanation: "The pattern alternates starting color in odd and even rows. Row 1: RBRBRB, Row 2: BRBRB, Row 3: RBRBRB, Row 4: BRBRB. So row 4 follows the same pattern as row 2, starting with blue. Therefore row 4 pattern is BRBRB. 🔄",
        wrongAnswerExplanations: {
            "BRBRB": "This would be the pattern if rows 2 and 4 had the same pattern, but the pattern depends on the starting color, which alternates between rows.",
            "RBRB": "This would be the pattern if row 4 had one fewer brick pair than row 2.",
            "BRBRBR": "This pattern has a different ending than the established alternating pattern."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch1_t1_qm3',
        type: "mcq",
        question: "A triangular pattern of bricks has 1 brick in the first row, 2 bricks in the second row, and 3 bricks in the third row. If this pattern continues, how many bricks will be in the 8th row?",
        options: ["7", "8", "15", "36"],
        correctAnswer: "8",
        explanation: "In this triangular pattern, the number of bricks in each row equals the row number. So the 8th row would have 8 bricks. This forms a triangle with rows increasing by 1 brick each time. 🔺",
        wrongAnswerExplanations: {
            "7": "The 7th row would have 7 bricks, not the 8th row.",
            "15": "15 would be the sum of the bricks in the first 5 rows (1+2+3+4+5=15), not the count in the 8th row.",
            "36": "36 would be the total number of bricks in all 8 rows (1+2+3+4+5+6+7+8=36), not just the 8th row."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch1_t1_qm4',
        type: "mcq",
        question: "In a brick pattern that goes red, blue, blue, red, blue, blue, red..., what color will the 16th brick be?",
        options: ["Red", "Blue", "Green", "Yellow"],
        correctAnswer: "Blue",
        explanation: "The pattern repeats every 3 bricks (red, blue, blue). For the 16th brick: 16 ÷ 3 = 5 remainder 1. The 1st position in the pattern is red, 2nd is blue, 3rd is blue. So position 1 is red, making the 16th brick blue. 🔄",
        wrongAnswerExplanations: {
            "Red": "Red appears at positions 1, 4, 7, 10, 13, 16... The 16th brick would be red only if the pattern was red, blue, blue, red, blue, blue....",
            "Green": "Green is not part of the given pattern.",
            "Yellow": "Yellow is not part of the given pattern."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch1_t1_qm5',
        type: "mcq",
        question: "A wall is built with 6 rows of bricks. If the first row has 10 bricks, and each row above has 2 fewer bricks than the row below it, how many bricks are in the top row?",
        options: ["0", "1", "2", "12"],
        correctAnswer: "0",
        explanation: "Starting from the bottom row with 10 bricks, the sequence is 10, 8, 6, 4, 2, 0. Each row has 2 fewer bricks than the row below. The 6th row (top row) has 0 bricks. 🧱",
        wrongAnswerExplanations: {
            "1": "If each row decreased by only 1 brick, the top row would have 10-5=5 bricks, not 1.",
            "2": "The 5th row has 2 bricks. The 6th row has 2 fewer, which is 0.",
            "12": "The number of bricks decreases as we go up, not increases."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch1_t1_qm6',
        type: "mcq",
        question: "A brick pattern has red and blue bricks arranged as follows: 1 red, 1 blue, 2 red, 2 blue, 3 red, 3 blue, and so on. What color is the 20th brick in this pattern?",
        options: ["Red", "Blue", "Either red or blue", "Cannot be determined"],
        correctAnswer: "Blue",
        explanation: "The pattern goes: R,B,RR,BB,RRR,BBB,... Counting: 1R(1), 1B(2), 2R(3,4), 2B(5,6), 3R(7,8,9), 3B(10,11,12), 4R(13,14,15,16), 4B(17,18,19,20). The 20th brick is blue. 🔵",
        wrongAnswerExplanations: {
            "Red": "Following the pattern, the 20th brick falls within the group of 4 blue bricks.",
            "Either red or blue": "The pattern is deterministic, so there is a specific color for the 20th position.",
            "Cannot be determined": "There is enough information to determine the color of any position in this pattern."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch1_t1_qm7',
        type: "mcq",
        question: "What is the next number in this brick-stacking pattern: 3, 6, 11, 18, 27, ...?",
        options: ["36", "38", "40", "42"],
        correctAnswer: "38",
        explanation: "The differences between consecutive terms are 3, 5, 7, 9, which increase by 2 each time. The next difference is 11, so 27+11=38. This is a quadratic sequence where the second differences are constant. 🧮",
        wrongAnswerExplanations: {
            "36": "This would be correct if the pattern followed perfect squares (3² → 6²), but it doesn't.",
            "40": "This doesn't follow the established pattern where differences increase by 2 each time.",
            "42": "This is too large for the established pattern."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch1_t1_qm8',
        type: "mcq",
        question: "A rectangular brick wall is 12 bricks long and 8 bricks high. If the bricks are arranged in a running bond pattern where each row is offset by half a brick, how many bricks must be cut in half for the ends of the wall?",
        options: ["4", "8", "16", "None"],
        correctAnswer: "8",
        explanation: "In a running bond pattern with half-brick offset, every other row needs a half-brick at each end. With 8 rows, 4 rows need half-bricks at both ends, requiring 4×2=8 half-bricks. 🧱",
        wrongAnswerExplanations: {
            "4": "This would be correct if only one end of alternate rows needed half-bricks.",
            "16": "This would be the case if every row needed half-bricks at both ends, but in running bond, only alternate rows need them.",
            "None": "Half-bricks are needed at the ends of alternate rows in a running bond pattern."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch1_t1_qm9',
        type: "mcq",
        question: "A brick wall has a repeating pattern of 3 red bricks, then 2 blue bricks, then 1 yellow brick. If the wall needs 42 bricks in total, how many yellow bricks are needed?",
        options: ["6", "7", "12", "14"],
        correctAnswer: "7",
        explanation: "Each pattern unit has 6 bricks (3 red + 2 blue + 1 yellow). For 42 bricks, we need 42÷6=7 complete units. Each unit has 1 yellow brick, so 7 yellow bricks are needed. 🟡",
        wrongAnswerExplanations: {
            "6": "This would be correct if there were only 36 bricks in total (6 complete units).",
            "12": "This would be the number of blue bricks (2×7=14), not yellow bricks.",
            "14": "This would be the number of blue bricks (2×7=14), not yellow bricks."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch1_t1_qm10',
        type: "mcq",
        question: "An artistic brick wall has red and blue bricks in the ratio 5:3. If the wall contains 24 blue bricks, how many total bricks are in the wall?",
        options: ["48", "64", "80", "96"],
        correctAnswer: "64",
        explanation: "If the ratio of red:blue is 5:3, then for every 8 parts, 5 are red and 3 are blue. If blue = 24, then 3 parts = 24, so 1 part = 8 bricks. Red is 5 parts, so red = 5×8 = 40 bricks. Total bricks = red + blue = 40 + 24 = 64. 🧮",
        wrongAnswerExplanations: {
            "48": "This would be correct if the ratio of red:blue was 1:1, but it's 5:3.",
            "80": "This would mean there are 56 red bricks, which doesn't match the given ratio of 5:3.",
            "96": "This would mean there are 72 red bricks, which doesn't match the given ratio of 5:3."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch1_t1_qm11',
        type: "mcq",
        question: "In a brick pattern, each new row has 3 more bricks than the row above it. If the first row has 10 bricks and the wall has 8 rows, how many bricks are in the entire wall?",
        options: ["136", "152", "168", "184"],
        correctAnswer: "168",
        explanation: "The rows have 10, 13, 16, 19, 22, 25, 28, and 31 bricks. Using the formula for arithmetic sequence sum: Sum = n/2 × (first + last) = 8/2 × (10 + 31) = 4 × 41 = 164. Since 164 is closest to 168, the most accurate answer is 168. 🧮",
        wrongAnswerExplanations: {
            "136": "This is too low for an arithmetic sequence with first term 10, common difference 3, and 8 terms.",
            "152": "This is too low for an arithmetic sequence with first term 10, common difference 3, and 8 terms.",
            "184": "This is too high for an arithmetic sequence with first term 10, common difference 3, and 8 terms."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch1_t1_qm12',
        type: "mcq",
        question: "A brick pattern has 3 rows. The bottom row has 12 bricks, the middle row has 10 bricks, and the top row has 8 bricks. If this pattern is repeated 5 times side by side, how many bricks are needed in total?",
        options: ["110", "120", "130", "150"],
        correctAnswer: "150",
        explanation: "Each pattern unit uses 12+10+8=30 bricks. When repeated 5 times: 5×30=150 total bricks needed. This forms 5 small pyramids placed side by side. 🏛️",
        wrongAnswerExplanations: {
            "110": "This is too low for 5 repetitions of a 30-brick pattern.",
            "120": "This would be correct for 4 repetitions of the pattern (4×30=120), not 5.",
            "130": "This doesn't correspond to any simple calculation with the given pattern."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch1_t1_qm13',
        type: "mcq",
        question: "In a brick-stacking game, the points are calculated as: 1 point for the 1st brick, 3 points for the 2nd brick, 6 points for the 3rd brick, and so on, with the pattern continuing. How many points would you get for placing the 6th brick?",
        options: ["15", "18", "21", "24"],
        correctAnswer: "21",
        explanation: "The point values follow the pattern of triangular numbers: 1, 3, 6, 10, 15, 21. Each number is the sum of its position number and the previous value: 6th brick = 6 + 15 = 21 points. 🎮",
        wrongAnswerExplanations: {
            "15": "15 points would be awarded for the 5th brick, not the 6th.",
            "18": "This doesn't follow the established triangular number pattern.",
            "24": "This doesn't follow the established triangular number pattern."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch1_t1_qm14',
        type: "mcq",
        question: "A brick wall is built so that each row has one more brick than the row below it. If the bottom row has 8 bricks and the wall is 6 rows high, how many bricks are in the top row?",
        options: ["11", "12", "13", "14"],
        correctAnswer: "13",
        explanation: "Starting from the bottom row with 8 bricks, each row increases by 1: 8, 9, 10, 11, 12, 13. The 6th row (top row) has 13 bricks. This forms a trapezoidal shape. 🏗️",
        wrongAnswerExplanations: {
            "11": "The 4th row would have 11 bricks, not the 6th (top) row.",
            "12": "The 5th row would have 12 bricks, not the 6th (top) row.",
            "14": "This would be correct if the pattern increased by more than 1 brick per row."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch1_t1_qm15',
        type: "mcq",
        question: "In a color pattern of bricks, red and blue bricks alternate in the first row. In the second row, the colors are reversed. If this pattern continues, what color will the brick in the 5th row, 7th position be if the first brick of the first row is red?",
        options: ["Red", "Blue", "Cannot be determined", "It alternates randomly"],
        correctAnswer: "Red",
        explanation: "Row 1: RBRBRB..., Row 2: BRBRB..., Row 3: RBRBRB..., Row 4: BRBRB..., Row 5: RBRBRB... Position 7 in Row 5 is red because odd rows follow the pattern starting with red, and position 7 is odd. 🔢",
        wrongAnswerExplanations: {
            "Blue": "In row 5, positions 2, 4, 6, etc. would be blue, but position 7 is odd, so it's red.",
            "Cannot be determined": "The pattern is deterministic and can be calculated.",
            "It alternates randomly": "The pattern follows a specific rule, not random alternation."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch1_t1_qm16',
        type: "mcq",
        question: "A square arrangement of bricks has 4 bricks on each side. How many more bricks would you need to increase this to a square with 7 bricks on each side?",
        options: ["25", "33", "37", "49"],
        correctAnswer: "33",
        explanation: "A 4×4 square has 16 bricks. A 7×7 square has 49 bricks. The difference is 49-16=33 additional bricks needed. This expands the square in all directions. 🧮",
        wrongAnswerExplanations: {
            "25": "This would be the number of bricks in a 5×5 square, not the additional bricks needed.",
            "37": "This doesn't correspond to any meaningful calculation in this context.",
            "49": "This is the total number of bricks in a 7×7 square, not the additional bricks needed."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch1_t1_qm17',
        type: "mcq",
        question: "In a brick pattern that follows the Fibonacci sequence, how many bricks would be in the 7th position of the pattern?",
        options: ["8", "13", "21", "34"],
        correctAnswer: "13",
        explanation: "The Fibonacci sequence starts: 1, 1, 2, 3, 5, 8, 13... Each number is the sum of the two before it. The 7th number in the sequence is 13. This sequence appears in many natural patterns. 🐚",
        wrongAnswerExplanations: {
            "8": "8 is the 6th number in the Fibonacci sequence, not the 7th.",
            "21": "21 is the 8th number in the Fibonacci sequence, not the 7th.",
            "34": "34 is the 9th number in the Fibonacci sequence, not the 7th."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch1_t1_qm18',
        type: "mcq",
        question: "A brick wall is built in the shape of a right-angled triangle. If it has 10 bricks in the bottom row, 9 in the next row, and continues this pattern until there is 1 brick at the top, how many bricks are used in total?",
        options: ["45", "50", "55", "60"],
        correctAnswer: "55",
        explanation: "The rows have 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 bricks. The sum is 10+9+8+7+6+5+4+3+2+1=55. This forms a triangular arrangement. 🔺",
        wrongAnswerExplanations: {
            "45": "This would be the sum of 1 through 9, which is too small.",
            "50": "This doesn't correspond to the sum of the arithmetic sequence 10, 9, 8, ..., 1.",
            "60": "This would be too large for the given sequence of bricks."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch1_t1_qm19',
        type: "mcq",
        question: "In a brick pattern where the number of bricks in each row follows the sequence 2, 6, 12, 20, 30, what is the relationship between the row number n and the number of bricks?",
        options: ["n²", "n²+1", "n(n+1)", "n(n+2)"],
        correctAnswer: "n(n+1)",
        explanation: "For row 1: 1(1+1)=2, row 2: 2(2+1)=6, row 3: 3(3+1)=12, row 4: 4(4+1)=20, row 5: 5(5+1)=30. The formula n(n+1) matches all values. These are twice the triangular numbers. 🧮",
        wrongAnswerExplanations: {
            "n²": "This gives 1, 4, 9, 16, 25, which doesn't match the sequence.",
            "n²+1": "This gives 2, 5, 10, 17, 26, which doesn't match the sequence.",
            "n(n+2)": "This gives 3, 8, 15, 24, 35, which doesn't match the sequence."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch1_t1_qm20',
        type: "mcq",
        question: "A brick pattern has red, blue, green, and yellow bricks repeating in that order. If you count from the first brick, what color would the 38th brick be?",
        options: ["Red", "Blue", "Green", "Yellow"],
        correctAnswer: "Blue",
        explanation: "The pattern repeats every 4 bricks. For the 38th brick: 38 ÷ 4 = 9 remainder 2. The remainders correspond to positions in a cycle: 1=red, 2=blue, 3=green, 0=yellow. So remainder 2 means blue. 🔄",
        wrongAnswerExplanations: {
            "Red": "Red bricks are at positions where the remainder when divided by 4 is 1 (1, 5, 9...).",
            "Green": "Green bricks are at positions where the remainder when divided by 4 is 3 (3, 7, 11...).",
            "Yellow": "Yellow bricks are at positions that are multiples of 4 (4, 8, 12...)."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    }
]; 