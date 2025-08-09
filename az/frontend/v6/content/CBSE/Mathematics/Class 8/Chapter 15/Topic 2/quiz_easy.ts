import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl8_ch15_t2_qe1',
        type: "mcq",
        question: "What comes next in the pattern: 2, 6, 12, 20, 30, __?",
        options: ["36", "42", "48", "40"],
        correctAnswer: "42",
        explanation: "The differences between consecutive terms are 4, 6, 8, 10, 12. The pattern shows differences increasing by 2 each time. 🔢",
        wrongAnswerExplanations: {
            "36": "This doesn't follow the pattern of differences increasing by 2 each time.",
            "48": "This increase is too large for the pattern.",
            "40": "This doesn't maintain the pattern of differences increasing by 2."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch15_t2_qe2',
        type: "mcq",
        question: "In the pattern 1, 4, 9, 16, 25, what is the relationship between each number and its position?",
        options: ["Square of position", "Double the position", "Cube of position", "Position plus 3"],
        correctAnswer: "Square of position",
        explanation: "Each number is the square of its position: 1² = 1, 2² = 4, 3² = 9, 4² = 16, 5² = 25. This forms the sequence of perfect squares. 🎯",
        wrongAnswerExplanations: {
            "Double the position": "Doubling positions would give 2, 4, 6, 8, 10.",
            "Cube of position": "Cubing positions would give 1, 8, 27, 64, 125.",
            "Position plus 3": "Adding 3 would give 4, 5, 6, 7, 8."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch15_t2_qe3',
        type: "mcq",
        question: "What is the next shape in the pattern: ⭐, ⭐⭐, ⭐⭐⭐, ⭐⭐⭐⭐, __?",
        options: ["⭐", "⭐⭐", "⭐⭐⭐⭐⭐", "⭐⭐⭐"],
        correctAnswer: "⭐⭐⭐⭐⭐",
        explanation: "The pattern shows an increase of one star in each term, starting from 1 and going up to 4, so the next term would have 5 stars. 🌟",
        wrongAnswerExplanations: {
            "⭐": "This would break the pattern of increasing stars.",
            "⭐⭐": "This would decrease the number of stars.",
            "⭐⭐⭐": "This would decrease the number of stars."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch15_t2_qe4',
        type: "mcq",
        question: "What number comes next: 1, 3, 6, 10, 15, __?",
        options: ["18", "21", "20", "25"],
        correctAnswer: "21",
        explanation: "The differences between consecutive terms are 2, 3, 4, 5, 6. Each difference increases by 1, so adding 6 to 15 gives 21. 📈",
        wrongAnswerExplanations: {
            "18": "This doesn't follow the pattern of differences increasing by 1.",
            "20": "This increase is too small for the pattern.",
            "25": "This increase is too large for the pattern."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch15_t2_qe5',
        type: "mcq",
        question: "What is the next letter pattern: AB, DEF, HIJK, __?",
        options: ["LMN", "LMNOP", "MNO", "MNOPQ"],
        correctAnswer: "LMNOP",
        explanation: "Each term increases in length by one letter (2, 3, 4, 5) and uses consecutive letters skipping one letter between terms. 📝",
        wrongAnswerExplanations: {
            "LMN": "This doesn't continue the pattern of increasing length.",
            "MNO": "This doesn't maintain the pattern of increasing length.",
            "MNOPQ": "This skips the wrong letters in the sequence."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch15_t2_qe6',
        type: "mcq",
        question: "What comes next in the pattern: 1, 4, 7, 10, 13, __?",
        options: ["15", "16", "17", "14"],
        correctAnswer: "16",
        explanation: "Each number increases by 3. Adding 3 to 13 gives 16. This is an arithmetic sequence with a common difference of 3. 🔢",
        wrongAnswerExplanations: {
            "15": "This doesn't maintain the constant increase of 3.",
            "17": "This increase is too large for the pattern.",
            "14": "This increase is too small for the pattern."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch15_t2_qe7',
        type: "mcq",
        question: "What fraction comes next: 1/2, 2/3, 3/4, 4/5, __?",
        options: ["5/5", "5/6", "6/5", "6/7"],
        correctAnswer: "5/6",
        explanation: "In each fraction, the numerator is one less than the denominator, and both increase by 1 each time. 🎯",
        wrongAnswerExplanations: {
            "5/5": "This breaks the pattern of numerator being one less than denominator.",
            "6/5": "This reverses the relationship between numerator and denominator.",
            "6/7": "This skips a term in the sequence."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch15_t2_qe8',
        type: "mcq",
        question: "What comes next: 2, 4, 8, 16, 32, __?",
        options: ["48", "54", "64", "36"],
        correctAnswer: "64",
        explanation: "Each number is doubled from the previous number (multiply by 2). So 32 × 2 = 64. This is a geometric sequence with ratio 2. 📊",
        wrongAnswerExplanations: {
            "48": "This doesn't follow the pattern of doubling.",
            "54": "This doesn't maintain the geometric pattern.",
            "36": "This is too small and breaks the doubling pattern."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch15_t2_qe9',
        type: "mcq",
        question: "What is the missing number: 1, 1, 2, 3, 5, 8, __, 21?",
        options: ["11", "13", "15", "12"],
        correctAnswer: "13",
        explanation: "This is the Fibonacci sequence where each number is the sum of the previous two numbers: 8 + 5 = 13. 🌀",
        wrongAnswerExplanations: {
            "11": "This doesn't follow the Fibonacci pattern of adding previous two numbers.",
            "15": "This is too large for the Fibonacci pattern.",
            "12": "This doesn't match the sum of previous two numbers."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch15_t2_qe10',
        type: "mcq",
        question: "What comes next in the pattern: 1, 3, 5, 7, 9, __?",
        options: ["10", "11", "12", "13"],
        correctAnswer: "11",
        explanation: "Each number increases by 2. This is the sequence of odd numbers, so adding 2 to 9 gives 11. 🎯",
        wrongAnswerExplanations: {
            "10": "This breaks the pattern of odd numbers.",
            "12": "This is an even number and doesn't follow the pattern.",
            "13": "This increase is too large for the pattern."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch15_t2_qe11',
        type: "mcq",
        question: "What is the next shape: □, △, ○, □, △, ○, □, __?",
        options: ["□", "△", "○", "⭐"],
        correctAnswer: "△",
        explanation: "The pattern repeats every three shapes: square, triangle, circle. After the last square, the next shape should be triangle. 🔄",
        wrongAnswerExplanations: {
            "□": "This breaks the repeating pattern of three shapes.",
            "○": "This skips the triangle in the pattern.",
            "⭐": "This introduces a new shape not in the pattern."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch15_t2_qe12',
        type: "mcq",
        question: "What number completes the pattern: 25, 36, 49, 64, __?",
        options: ["71", "81", "100", "121"],
        correctAnswer: "81",
        explanation: "These are perfect squares: 5², 6², 7², 8², so the next number should be 9² = 81. 📊",
        wrongAnswerExplanations: {
            "71": "This is not a perfect square and breaks the pattern.",
            "100": "This skips 9² and jumps to 10².",
            "121": "This skips 9² and jumps to 11²."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch15_t2_qe13',
        type: "mcq",
        question: "What comes next: 100, 50, 25, 12.5, __?",
        options: ["6.25", "6", "7.5", "10"],
        correctAnswer: "6.25",
        explanation: "Each number is half of the previous number. Half of 12.5 is 6.25. This is a geometric sequence with ratio 1/2. 📉",
        wrongAnswerExplanations: {
            "6": "This is not exactly half of 12.5.",
            "7.5": "This is not half of 12.5.",
            "10": "This breaks the pattern of halving."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch15_t2_qe14',
        type: "mcq",
        question: "What is the next term: 2, 6, 18, 54, __?",
        options: ["108", "162", "216", "324"],
        correctAnswer: "162",
        explanation: "Each number is multiplied by 3 to get the next number. So 54 × 3 = 162. This is a geometric sequence with ratio 3. 🎯",
        wrongAnswerExplanations: {
            "108": "This is multiplying by 2 instead of 3.",
            "216": "This is multiplying by 4 instead of 3.",
            "324": "This is multiplying by 6 instead of 3."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch15_t2_qe15',
        type: "mcq",
        question: "What number completes the pattern: 1, 8, 27, 64, __?",
        options: ["125", "100", "81", "216"],
        correctAnswer: "125",
        explanation: "These are perfect cubes: 1³, 2³, 3³, 4³, so the next number should be 5³ = 125. 🎲",
        wrongAnswerExplanations: {
            "100": "This is 10² instead of 5³.",
            "81": "This is 9² instead of 5³.",
            "216": "This is 6³, skipping 5³."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch15_t2_qe16',
        type: "mcq",
        question: "What comes next: 3, 6, 12, 24, 48, __?",
        options: ["72", "96", "60", "84"],
        correctAnswer: "96",
        explanation: "Each number is multiplied by 2 to get the next number. So 48 × 2 = 96. This is a geometric sequence with ratio 2. 📈",
        wrongAnswerExplanations: {
            "72": "This is multiplying by 1.5 instead of 2.",
            "60": "This is adding 12 instead of multiplying by 2.",
            "84": "This is multiplying by 1.75 instead of 2."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch15_t2_qe17',
        type: "mcq",
        question: "What is the next letter pattern: A1, B2, C3, D4, __?",
        options: ["E4", "F5", "E5", "F6"],
        correctAnswer: "E5",
        explanation: "The pattern combines consecutive letters with consecutive numbers. After D4, we get E5. 📝",
        wrongAnswerExplanations: {
            "E4": "This doesn't increase the number.",
            "F5": "This skips the letter E.",
            "F6": "This skips both the letter E and number 5."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch15_t2_qe18',
        type: "mcq",
        question: "What number comes next: 2, 5, 10, 17, 26, __?",
        options: ["37", "35", "39", "41"],
        correctAnswer: "37",
        explanation: "The differences increase by 2: +3, +5, +7, +9, so +11 gives 37. The pattern shows differences increasing by 2 each time. 🔢",
        wrongAnswerExplanations: {
            "35": "This doesn't follow the pattern of differences increasing by 2.",
            "39": "This increase is too large for the pattern.",
            "41": "This doesn't maintain the pattern of differences."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch15_t2_qe19',
        type: "mcq",
        question: "What is the missing term: 1, 4, 9, __, 25, 36?",
        options: ["12", "16", "20", "15"],
        correctAnswer: "16",
        explanation: "These are perfect squares: 1², 2², 3², 4², 5², 6². The missing term is 4² = 16. 🎯",
        wrongAnswerExplanations: {
            "12": "This is not a perfect square.",
            "20": "This is not a perfect square.",
            "15": "This is not a perfect square."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl8_ch15_t2_qe20',
        type: "mcq",
        question: "What comes next: 1, 2, 4, 7, 11, __?",
        options: ["13", "15", "16", "18"],
        correctAnswer: "16",
        explanation: "The differences increase by 1: +1, +2, +3, +4, so +5 gives 16. This forms a pattern where each increase is one more than the previous. 📊",
        wrongAnswerExplanations: {
            "13": "This doesn't follow the pattern of differences increasing by 1.",
            "15": "This doesn't maintain the pattern of differences.",
            "18": "This increase is too large for the pattern."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    }
]; 