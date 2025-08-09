// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 6\Chapter2\Topic2\quiz_easy.ts
import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl6_ch2_t2_qe1',
        type: "mcq",
        question: "On a number line, which direction represents increasing values?",
        options: ["Left", "Right", "Up", "Down"],
        correctAnswer: "Right",
        explanation: "On a horizontal number line, values increase as you move to the right. This is the standard convention for number lines. ➡️",
        wrongAnswerExplanations: {
            "Left": "Moving left on a number line decreases the values.",
            "Up": "Up and down directions are not used on a horizontal number line.",
            "Down": "Up and down directions are not used on a horizontal number line."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch2_t2_qe2',
        type: "mcq",
        question: "What is the distance between 3 and 7 on the number line?",
        options: ["3 units", "4 units", "7 units", "10 units"],
        correctAnswer: "4 units",
        explanation: "The distance is calculated by subtracting the smaller number from the larger: 7 - 3 = 4 units. 📏",
        wrongAnswerExplanations: {
            "3 units": "This would be the distance from 3 to 6, not to 7.",
            "7 units": "This is the value of the larger number, not the distance between the numbers.",
            "10 units": "This is the sum of the two numbers, not the distance between them."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch2_t2_qe3',
        type: "mcq",
        question: "What whole number is located 5 units to the right of 4 on the number line?",
        options: ["8", "9", "5", "1"],
        correctAnswer: "9",
        explanation: "Starting at 4 and moving 5 units to the right means adding 5: 4 + 5 = 9. 🔢",
        wrongAnswerExplanations: {
            "8": "This would be 4 units to the right of 4, not 5 units.",
            "5": "This is only 1 unit to the right of 4, not 5 units.",
            "1": "This is to the left of 4, not to the right."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch2_t2_qe4',
        type: "mcq",
        question: "What is the predecessor of 7 on the number line?",
        options: ["6", "8", "7", "5"],
        correctAnswer: "6",
        explanation: "The predecessor of a number is the number that comes immediately before it, which is 1 less than the number. So 7 - 1 = 6. ⏮️",
        wrongAnswerExplanations: {
            "8": "8 is the successor of 7, not the predecessor.",
            "7": "A number cannot be its own predecessor.",
            "5": "5 is two units less than 7, not the immediate predecessor."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch2_t2_qe5',
        type: "mcq",
        question: "What is the successor of 10 on the number line?",
        options: ["9", "11", "10", "12"],
        correctAnswer: "11",
        explanation: "The successor of a number is the number that comes immediately after it, which is 1 more than the number. So 10 + 1 = 11. ⏭️",
        wrongAnswerExplanations: {
            "9": "9 is the predecessor of 10, not the successor.",
            "10": "A number cannot be its own successor.",
            "12": "12 is two units more than 10, not the immediate successor."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch2_t2_qe6',
        type: "mcq",
        question: "Which number does NOT have a predecessor in the whole number system?",
        options: ["1", "5", "10", "0"],
        correctAnswer: "0",
        explanation: "0 is the smallest whole number and has no predecessor within the whole number system. All other whole numbers have predecessors. 0️⃣",
        wrongAnswerExplanations: {
            "1": "The predecessor of 1 is 0.",
            "5": "The predecessor of 5 is 4.",
            "10": "The predecessor of 10 is 9."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch2_t2_qe7',
        type: "mcq",
        question: "If you start at 8 on the number line and move 3 units left, where will you land?",
        options: ["5", "11", "3", "6"],
        correctAnswer: "5",
        explanation: "Moving left means subtracting, so 8 - 3 = 5. Think of stepping back 3 units from position 8. ⬅️",
        wrongAnswerExplanations: {
            "11": "Moving 3 units right from 8 would give 11, not left.",
            "3": "This would mean moving 5 units left, not 3.",
            "6": "This would mean moving 2 units left, not 3."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch2_t2_qe8',
        type: "mcq",
        question: "On the number line, which is greater: 7 or 4?",
        options: ["7", "4", "Both are equal", "Cannot be determined"],
        correctAnswer: "7",
        explanation: "7 is greater than 4 because it appears to the right of 4 on the number line. Any number to the right is greater than numbers to the left. 📊",
        wrongAnswerExplanations: {
            "4": "4 is less than 7, as it appears to the left of 7 on the number line.",
            "Both are equal": "7 and 4 are different numbers and cannot be equal.",
            "Cannot be determined": "The relative positions on the number line clearly show that 7 > 4."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch2_t2_qe9',
        type: "mcq",
        question: "How many whole numbers are there between 3 and 8 on the number line?",
        options: ["3", "4", "5", "6"],
        correctAnswer: "4",
        explanation: "The whole numbers between 3 and 8 are 4, 5, 6, and 7. That's 4 numbers in total. 🔢",
        wrongAnswerExplanations: {
            "3": "This isn't enough. The numbers 4, 5, 6, and 7 are between 3 and 8.",
            "5": "This counts either 3 or 8 as being between, but they're the endpoints.",
            "6": "This incorrectly counts both 3 and 8 as being between themselves."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch2_t2_qe10',
        type: "mcq",
        question: "If you add 5 to a number and then subtract 5 from the result, where will you end up on the number line?",
        options: ["At the original number", "5 units to the right", "5 units to the left", "10 units to the right"],
        correctAnswer: "At the original number",
        explanation: "Adding 5 moves you 5 units right, and subtracting 5 moves you 5 units left, bringing you back to the original position. ⏪⏩",
        wrongAnswerExplanations: {
            "5 units to the right": "This would be the result of only adding 5, not adding and then subtracting.",
            "5 units to the left": "This would be the result of only subtracting 5, not adding and then subtracting.",
            "10 units to the right": "This would be the result of adding 5 twice, not adding and then subtracting."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch2_t2_qe11',
        type: "mcq",
        question: "Which operation on the number line is represented by moving to the right?",
        options: ["Addition", "Subtraction", "Multiplication", "Division"],
        correctAnswer: "Addition",
        explanation: "Moving to the right on a number line represents addition. Each step to the right adds 1 to the current value. ➕",
        wrongAnswerExplanations: {
            "Subtraction": "Subtraction is represented by moving to the left on the number line.",
            "Multiplication": "Multiplication isn't directly represented by simple movement on a basic number line.",
            "Division": "Division isn't directly represented by simple movement on a basic number line."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch2_t2_qe12',
        type: "mcq",
        question: "What is 6 + 3 represented on the number line?",
        options: ["Moving 3 units left from 6", "Moving 3 units right from 6", "Moving 6 units right from 3", "Moving 6 units left from 3"],
        correctAnswer: "Moving 3 units right from 6",
        explanation: "Addition means moving to the right. To calculate 6 + 3, start at 6 and move 3 units right to reach 9. ➡️",
        wrongAnswerExplanations: {
            "Moving 3 units left from 6": "This represents 6 - 3, not 6 + 3.",
            "Moving 6 units right from 3": "This represents 3 + 6, which equals 6 + 3 but is described differently on the number line.",
            "Moving 6 units left from 3": "This would result in a negative number and doesn't represent 6 + 3."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch2_t2_qe13',
        type: "mcq",
        question: "Which operation is represented by moving to the left on a number line?",
        options: ["Addition", "Subtraction", "Multiplication", "Division"],
        correctAnswer: "Subtraction",
        explanation: "Moving to the left on a number line represents subtraction. Each step to the left subtracts 1 from the current value. ➖",
        wrongAnswerExplanations: {
            "Addition": "Addition is represented by moving to the right on the number line, not left.",
            "Multiplication": "Multiplication isn't directly represented by simple movement on a basic number line.",
            "Division": "Division isn't directly represented by simple movement on a basic number line."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch2_t2_qe14',
        type: "mcq",
        question: "What is the distance between 0 and 12 on the number line?",
        options: ["12 units", "11 units", "10 units", "13 units"],
        correctAnswer: "12 units",
        explanation: "The distance between 0 and 12 is calculated by subtracting: 12 - 0 = 12 units. 📏",
        wrongAnswerExplanations: {
            "11 units": "This would be the distance from 0 to 11, not to 12.",
            "10 units": "This would be the distance from 0 to 10, not to 12.",
            "13 units": "This is one more than the actual distance from 0 to 12."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch2_t2_qe15',
        type: "mcq",
        question: "If you are at 7 on the number line and move to 2, how many units did you move?",
        options: ["5 units left", "5 units right", "9 units left", "9 units right"],
        correctAnswer: "5 units left",
        explanation: "Moving from 7 to 2 means going left, and the distance is 7 - 2 = 5 units. ⬅️",
        wrongAnswerExplanations: {
            "5 units right": "Moving right from 7 would take you to 12, not 2.",
            "9 units left": "This would take you from 7 to -2, not to 2.",
            "9 units right": "Moving right from 7 by 9 units would take you to 16, not 2."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch2_t2_qe16',
        type: "mcq",
        question: "What is 8 - 3 represented on the number line?",
        options: ["Moving 3 units right from 8", "Moving 3 units left from 8", "Moving 8 units right from 3", "Moving 8 units left from 3"],
        correctAnswer: "Moving 3 units left from 8",
        explanation: "Subtraction means moving to the left. To calculate 8 - 3, start at 8 and move 3 units left to reach 5. ⬅️",
        wrongAnswerExplanations: {
            "Moving 3 units right from 8": "This represents 8 + 3, not 8 - 3.",
            "Moving 8 units right from 3": "This represents 3 + 8, not 8 - 3.",
            "Moving 8 units left from 3": "This would result in a negative number and doesn't represent 8 - 3."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch2_t2_qe17',
        type: "mcq",
        question: "Which of these is NOT a property of the whole number line?",
        options: [
            "It extends infinitely to the right",
            "It starts at 0",
            "It extends infinitely to the left",
            "The distance between consecutive numbers is constant"
        ],
        correctAnswer: "It extends infinitely to the left",
        explanation: "The whole number line starts at 0 and extends infinitely only to the right. It doesn't include negative numbers, so it doesn't extend to the left. ➡️",
        wrongAnswerExplanations: {
            "It extends infinitely to the right": "This is a correct property of the whole number line.",
            "It starts at 0": "This is a correct property of the whole number line.",
            "The distance between consecutive numbers is constant": "This is a correct property of the whole number line."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch2_t2_qe18',
        type: "mcq",
        question: "A student starts at 6 on the number line, moves 4 units right, and then 7 units left. Where does the student end up?",
        options: ["3", "5", "9", "10"],
        correctAnswer: "3",
        explanation: "Starting at 6, moving 4 units right reaches 10, then moving 7 units left from 10 reaches 3. The operations are: 6 + 4 - 7 = 3. 🔄",
        wrongAnswerExplanations: {
            "5": "This would be the result if the student moved 5 units left instead of 7.",
            "9": "This would be the result if the student had only moved 3 units right.",
            "10": "This would be the result if the student had only moved 4 units right without the subsequent 7 units left."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch2_t2_qe19',
        type: "mcq",
        question: "Which point on the number line represents the starting point of whole numbers?",
        options: ["1", "0", "-1", "Any number can be the starting point"],
        correctAnswer: "0",
        explanation: "The whole number system starts at 0 and includes all non-negative integers. Unlike natural numbers, which start at 1, whole numbers start at 0. 0️⃣",
        wrongAnswerExplanations: {
            "1": "1 is the starting point for natural numbers, not whole numbers.",
            "-1": "-1 is a negative integer, not a whole number.",
            "Any number can be the starting point": "The whole number system has a fixed starting point at 0."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch2_t2_qe20',
        type: "mcq",
        question: "If you are at point 15 on the number line and want to reach point 8, in which direction should you move?",
        options: ["Left", "Right", "Either direction works", "Impossible to reach"],
        correctAnswer: "Left",
        explanation: "To go from a larger number to a smaller number on the number line, you need to move left. Since 15 > 8, you move left from 15 to reach 8. ⬅️",
        wrongAnswerExplanations: {
            "Right": "Moving right from 15 would take you to numbers larger than 15, not to 8.",
            "Either direction works": "Only one direction (left) will take you from 15 to 8.",
            "Impossible to reach": "It is definitely possible to move from 15 to 8 on the number line."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    }
];
