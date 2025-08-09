// filepath: content/CBSE/Mathematics/Class 3/Chapter10/Topic2/quiz_easy.ts
import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl3_ch10_t2_qe1',
        type: "mcq",
        question: "What comes next in the pattern: 5, 10, 15, 20, ____?",
        options: ["21", "24", "25", "30"],
        correctAnswer: "25",
        explanation: "This is a pattern that increases by 5 each time. Adding 5 to 20 gives 25 as the next number. 🔢",
        wrongAnswerExplanations: {
            "21": "This would be adding 1 to 20, not following the +5 pattern.",
            "24": "This would be adding 4 to 20, not following the +5 pattern.",
            "30": "This would be adding 10 to 20, which is double the pattern's increment."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl3_ch10_t2_qe2',
        type: "mcq",
        question: "What comes next in the pattern: 2, 4, 6, 8, ____?",
        options: ["9", "10", "12", "16"],
        correctAnswer: "10",
        explanation: "This is a pattern of counting by 2s or even numbers. After 8, the next even number is 10. This pattern adds 2 each time. 🔢",
        wrongAnswerExplanations: {
            "9": "9 is an odd number, but this pattern follows even numbers.",
            "12": "This would be adding 4 to 8, not following the +2 pattern.",
            "16": "This would be adding 8 to 8, not following the +2 pattern."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl3_ch10_t2_qe3',
        type: "mcq",
        question: "Look at the pattern: 🔴🔵🔴🔵🔴🔵. What comes next?",
        options: ["🔴", "🔵", "⚫", "⚪"],
        correctAnswer: "🔴",
        explanation: "This is an alternating pattern of 🔴 and 🔵. Since the last shape is 🔵, the next one would be 🔴, continuing the alternating pattern.",
        wrongAnswerExplanations: {
            "🔵": "The pattern alternates between 🔴 and 🔵. Since the last one is 🔵, the next one should be 🔴, not another 🔵.",
            "⚫": "This is a new shape that doesn't appear in the given pattern.",
            "⚪": "This is a new shape that doesn't appear in the given pattern."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 25
    },
    {
        id: 'cl3_ch10_t2_qe4',
        type: "mcq",
        question: "What comes next in the pattern: 20, 18, 16, 14, ____?",
        options: ["10", "12", "13", "22"],
        correctAnswer: "12",
        explanation: "This is a decreasing pattern that subtracts 2 each time. After 14, subtracting 2 gives 12 as the next number. 📉",
        wrongAnswerExplanations: {
            "10": "This would be subtracting 4 from 14, not following the -2 pattern.",
            "13": "This would be subtracting 1 from 14, not following the -2 pattern.",
            "22": "This would be adding 8 to 14, not following the decreasing pattern."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl3_ch10_t2_qe5',
        type: "mcq",
        question: "What comes next in the shape pattern: ▲ ■ ● ▲ ■ ____?",
        options: ["▲", "■", "●", "◆"],
        correctAnswer: "●",
        explanation: "This is a repeating pattern of three shapes: ▲ (triangle), ■ (square), and ● (circle). After ■, the pattern repeats with ●.",
        wrongAnswerExplanations: {
            "▲": "The pattern is ▲, ■, ●, repeating. After the square (■), the next shape should be ● (circle), not triangle (▲).",
            "■": "The pattern is ▲, ■, ●, repeating. We just had a square (■), so it shouldn't repeat.",
            "◆": "This is a new shape that doesn't appear in the given pattern."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl3_ch10_t2_qe6',
        type: "mcq",
        question: "Complete the number pattern: 1, 3, 5, 7, ____.",
        options: ["8", "9", "10", "11"],
        correctAnswer: "9",
        explanation: "This is a pattern of odd numbers that increases by 2 each time. After 7, adding 2 gives 9 as the next odd number. 🔢",
        wrongAnswerExplanations: {
            "8": "8 is an even number. This pattern follows odd numbers only.",
            "10": "10 is an even number. This pattern follows odd numbers only.",
            "11": "This would be adding 4 to 7, not following the +2 pattern."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl3_ch10_t2_qe7',
        type: "mcq",
        question: "Look at the fruit pattern: 🍎 🍌 🍎 🍌 🍎 ____. What comes next?",
        options: ["🍎", "🍌", "🍊", "🍇"],
        correctAnswer: "🍌",
        explanation: "This is an alternating pattern of apple (🍎) and banana (🍌). Since the last fruit is an apple, the next one would be a banana, following the alternating pattern.",
        wrongAnswerExplanations: {
            "🍎": "The pattern alternates between 🍎 and 🍌. Since the last one is 🍎, the next should be 🍌, not another 🍎.",
            "🍊": "This is a new fruit that doesn't appear in the given pattern.",
            "🍇": "This is a new fruit that doesn't appear in the given pattern."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 25
    },
    {
        id: 'cl3_ch10_t2_qe8',
        type: "mcq",
        question: "What comes next in the pattern: 10, 15, 20, 25, ____?",
        options: ["30", "35", "40", "45"],
        correctAnswer: "30",
        explanation: "This pattern increases by 5 each time. After 25, adding 5 gives 30 as the next number in the pattern. 📈",
        wrongAnswerExplanations: {
            "35": "This would be adding 10 to 25, not following the +5 pattern.",
            "40": "This would be adding 15 to 25, not following the +5 pattern.",
            "45": "This would be adding 20 to 25, not following the +5 pattern."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl3_ch10_t2_qe9',
        type: "mcq",
        question: "What comes next in the color pattern: Red, Blue, Green, Red, Blue, ____?",
        options: ["Red", "Blue", "Green", "Yellow"],
        correctAnswer: "Green",
        explanation: "This is a repeating pattern of three colors: Red, Blue, and Green. After Blue, the pattern continues with Green, repeating the sequence. 🌈",
        wrongAnswerExplanations: {
            "Red": "The pattern is Red, Blue, Green, repeating. After Blue, the next color should be Green, not Red.",
            "Blue": "This would repeat Blue, which doesn't follow the established pattern.",
            "Yellow": "This is a new color that doesn't appear in the given pattern."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl3_ch10_t2_qe10',
        type: "mcq",
        question: "What comes next in the pattern: 2, 4, 8, 16, ____?",
        options: ["18", "24", "32", "64"],
        correctAnswer: "32",
        explanation: "This is a doubling pattern where each number is twice the previous number. After 16, doubling gives 32 as the next number. 🔢",
        wrongAnswerExplanations: {
            "18": "This would be adding 2 to 16, not following the doubling pattern.",
            "24": "This would be adding 8 to 16, not following the doubling pattern.",
            "64": "This would be multiplying 16 by 4, not by 2 as the pattern requires."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 40
    },
    {
        id: 'cl3_ch10_t2_qe11',
        type: "mcq",
        question: "Look at the animal pattern: 🐶 🐱 🐶 🐱 ____. What comes next?",
        options: ["🐶", "🐱", "🐰", "🐭"],
        correctAnswer: "🐶",
        explanation: "This is an alternating pattern of dog (🐶) and cat (🐱). Since the last animal is a cat, the next one would be a dog, continuing the alternating pattern.",
        wrongAnswerExplanations: {
            "🐱": "The pattern alternates between 🐶 and 🐱. Since the last one is 🐱, the next one should be 🐶, not another 🐱.",
            "🐰": "This is a new animal that doesn't appear in the given pattern.",
            "🐭": "This is a new animal that doesn't appear in the given pattern."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 25
    },
    {
        id: 'cl3_ch10_t2_qe12',
        type: "mcq",
        question: "What is the missing number in the pattern: 5, 10, ___, 20, 25?",
        options: ["12", "15", "18", "22"],
        correctAnswer: "15",
        explanation: "This pattern increases by 5 each time (5, 10, 15, 20, 25). The missing number is 15. 🔍",
        wrongAnswerExplanations: {
            "12": "This would mean +5, +2, +8, +5, which is not a consistent pattern.",
            "18": "This would mean +5, +8, +2, +5, which is not a consistent pattern.",
            "22": "This would mean +5, +12, -2, +5, which is not a consistent pattern."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 35
    },
    {
        id: 'cl3_ch10_t2_qe13',
        type: "mcq",
        question: "What comes next in the pattern: AB, CD, EF, GH, ____?",
        options: ["IJ", "JK", "KL", "LM"],
        correctAnswer: "IJ",
        explanation: "This pattern shows consecutive pairs of letters in alphabetical order. After GH, the next pair would be IJ, continuing the alphabetical sequence. 📚",
        wrongAnswerExplanations: {
            "JK": "This skips the letter I, which doesn't follow the consecutive letter pattern.",
            "KL": "This skips the letters I and J, which doesn't follow the consecutive letter pattern.",
            "LM": "This skips the letters I, J, and K, which doesn't follow the consecutive letter pattern."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 40
    },
    {
        id: 'cl3_ch10_t2_qe14',
        type: "mcq",
        question: "Look at this pattern: 3, 6, 9, 12, ____. What comes next?",
        options: ["13", "15", "16", "18"],
        correctAnswer: "15",
        explanation: "This is a pattern of multiples of 3, increasing by 3 each time. After 12, adding 3 gives 15 as the next number. 🔢",
        wrongAnswerExplanations: {
            "13": "This would be adding 1 to 12, not following the +3 pattern.",
            "16": "This would be adding 4 to 12, not following the +3 pattern.",
            "18": "This would be adding 6 to 12, not following the +3 pattern."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl3_ch10_t2_qe15',
        type: "mcq",
        question: "What is the next shape in the pattern: ○ □ △ ○ □ ____?",
        options: ["○", "□", "△", "⬡"],
        correctAnswer: "△",
        explanation: "This is a repeating pattern of three shapes: circle (○), square (□), and triangle (△). After square, the pattern continues with triangle.",
        wrongAnswerExplanations: {
            "○": "The pattern is ○, □, △, repeating. After □, the next shape should be △, not ○.",
            "□": "The pattern is ○, □, △, repeating. After □, the next shape should be △, not another □.",
            "⬡": "This is a new shape that doesn't appear in the given pattern."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl3_ch10_t2_qe16',
        type: "mcq",
        question: "Continue the number pattern: 25, 20, 15, 10, ____.",
        options: ["0", "5", "7", "30"],
        correctAnswer: "5",
        explanation: "This is a decreasing pattern that subtracts 5 each time. After 10, subtracting 5 gives 5 as the next number. 📉",
        wrongAnswerExplanations: {
            "0": "This would be subtracting 10 from 10, not following the -5 pattern.",
            "7": "This would be subtracting 3 from 10, not following the -5 pattern.",
            "30": "This would be adding 20 to 10, not following the decreasing pattern."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl3_ch10_t2_qe17',
        type: "mcq",
        question: "What missing number completes the pattern: 2, 4, 6, ___, 10?",
        options: ["7", "8", "9", "12"],
        correctAnswer: "8",
        explanation: "This pattern increases by 2 each time (2, 4, 6, 8, 10). The missing number is 8. 🔍",
        wrongAnswerExplanations: {
            "7": "This would mean +2, +2, +1, +3, which is not a consistent pattern.",
            "9": "This would mean +2, +2, +3, +1, which is not a consistent pattern.",
            "12": "This would mean +2, +2, +6, -2, which is not a consistent pattern."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 35
    },
    {
        id: 'cl3_ch10_t2_qe18',
        type: "mcq",
        question: "Look at the clapping pattern: 👏 👏 👏👏 👏 👏 👏👏. What comes next?",
        options: ["👏", "👏👏", "👏👏👏", "No more claps"],
        correctAnswer: "👏",
        explanation: "The pattern shows 1 clap, 1 clap, 2 claps, repeating. Since we just completed 2 claps, the pattern starts over with 1 clap.",
        wrongAnswerExplanations: {
            "👏👏": "The pattern is 👏, 👏, 👏👏, repeating. After completing the 2 claps, we should return to 1 clap.",
            "👏👏👏": "This would introduce 3 claps, which doesn't appear in the established pattern.",
            "No more claps": "The pattern should continue repeating, not stop."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 35
    },
    {
        id: 'cl3_ch10_t2_qe19',
        type: "mcq",
        question: "What comes next in the pattern: 1, 1, 2, 3, 5, ____?",
        options: ["6", "7", "8", "9"],
        correctAnswer: "8",
        explanation: "This is a Fibonacci sequence where each number is the sum of the two numbers before it. After 5, the next number would be 3 + 5 = 8. 🌟",
        wrongAnswerExplanations: {
            "6": "This would be adding 1 to 5, which doesn't follow the Fibonacci pattern.",
            "7": "This would be adding 2 to 5, which doesn't follow the Fibonacci pattern.",
            "9": "This would be adding 4 to 5, which doesn't follow the Fibonacci pattern."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch10_t2_qe20',
        type: "mcq",
        question: "What should replace the question mark in the pattern: 1, 4, 9, 16, ?",
        options: ["20", "25", "36", "49"],
        correctAnswer: "25",
        explanation: "These are square numbers: 1=1², 4=2², 9=3², 16=4². The next square number is 5²=25. This pattern follows the squares of consecutive numbers. 📊",
        wrongAnswerExplanations: {
            "20": "This doesn't follow the pattern of square numbers. 20 is not a perfect square.",
            "36": "This is 6², which would skip 5² in the sequence.",
            "49": "This is 7², which would skip both 5² and 6² in the sequence."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 45
    }
]; 