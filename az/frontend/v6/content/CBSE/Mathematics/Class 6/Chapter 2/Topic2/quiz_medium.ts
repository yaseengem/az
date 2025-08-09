// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 6\Chapter2\Topic2\quiz_medium.ts
import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl6_ch2_t2_qm1',
        type: "mcq",
        question: "Ram started from 6 on the number line, moved 7 units right, and then 4 units left. Shyam started from 3 on the number line and moved 6 units right. Who is at a greater position now?",
        options: ["Ram", "Shyam", "Both are at the same position", "Cannot be determined"],
        correctAnswer: "Both are at the same position",
        explanation: "Ram's position: 6 + 7 - 4 = 9. Shyam's position: 3 + 6 = 9. Both are at position 9 on the number line. 📊",
        wrongAnswerExplanations: {
            "Ram": "Ram is at position 9, not greater than Shyam.",
            "Shyam": "Shyam is at position 9, not greater than Ram.",
            "Cannot be determined": "We can determine their positions precisely as 9 for both."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl6_ch2_t2_qm2',
        type: "mcq",
        question: "What is the sum of the successor of 24 and the predecessor of 19?",
        options: ["42", "43", "44", "45"],
        correctAnswer: "43",
        explanation: "Successor of 24 is 25. Predecessor of 19 is 18. Sum = 25 + 18 = 43. Using successor and predecessor properties of the number line. 🧮",
        wrongAnswerExplanations: {
            "42": "This would be 24 + 18, not using the successor of 24.",
            "44": "This would be 25 + 19, using the successor of 24 but not the predecessor of 19.",
            "45": "This would be if you added the wrong successor or predecessor."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch2_t2_qm3',
        type: "mcq",
        question: "If you start at 4, move 6 units right, move 2 units left, move 5 units right, and finally move 3 units left, where do you end up?",
        options: ["8", "10", "12", "14"],
        correctAnswer: "10",
        explanation: "Starting at 4: 4 + 6 - 2 + 5 - 3 = 10. Track each movement step by step on the number line to find the final position. 🚶‍♂️",
        wrongAnswerExplanations: {
            "8": "This misses one of the right movements.",
            "12": "This doesn't account for one of the left movements.",
            "14": "This would be the result if you only added the right movements without subtracting the left movements."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl6_ch2_t2_qm4',
        type: "mcq",
        question: "What is the average of three consecutive whole numbers on the number line?",
        options: [
            "The middle number",
            "One more than the middle number",
            "One less than the middle number",
            "The sum of the first and last numbers"
        ],
        correctAnswer: "The middle number",
        explanation: "For consecutive numbers like n-1, n, n+1, the average is (n-1+n+n+1)/3 = (3n)/3 = n, which is the middle number. This demonstrates number line's evenly spaced property. 📏",
        wrongAnswerExplanations: {
            "One more than the middle number": "This would make the average higher than it should be.",
            "One less than the middle number": "This would make the average lower than it should be.",
            "The sum of the first and last numbers": "This isn't mathematically correct for calculating an average."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl6_ch2_t2_qm5',
        type: "mcq",
        question: "A frog starts at 0 on the number line. It jumps 3 units right, then 2 units right, then 4 units left. How far is the frog from its starting point?",
        options: ["1 unit", "5 units", "9 units", "7 units"],
        correctAnswer: "1 unit",
        explanation: "Starting at 0: 0 + 3 + 2 - 4 = 1. The frog ends at position 1, which is 1 unit away from its starting position at 0. 🐸",
        wrongAnswerExplanations: {
            "5 units": "This would be the total distance if you only counted the right jumps (3+2).",
            "9 units": "This is the total distance traveled (3+2+4), not the distance from start.",
            "7 units": "This doesn't correctly account for the direction of the jumps."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch2_t2_qm6',
        type: "mcq",
        question: "Which of the following statements is true about whole numbers on a number line?",
        options: [
            "Every whole number has a predecessor",
            "Every whole number has a successor",
            "The distance between any two whole numbers is always odd",
            "Whole numbers extend infinitely in both directions"
        ],
        correctAnswer: "Every whole number has a successor",
        explanation: "Every whole number has a successor (the next number), but 0 has no predecessor in the whole number system. Whole numbers only extend infinitely to the right. ♾️",
        wrongAnswerExplanations: {
            "Every whole number has a predecessor": "Zero is a whole number that has no predecessor within the whole number system.",
            "The distance between any two whole numbers is always odd": "The distance can be any positive integer, not just odd numbers.",
            "Whole numbers extend infinitely in both directions": "Whole numbers start at 0 and extend infinitely only to the right."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch2_t2_qm7',
        type: "mcq",
        question: "If a, b, and c are consecutive whole numbers on the number line with a < b < c, which of these equations is true?",
        options: ["a + c = 2b", "a × c = b²", "a + b = c", "a + b + c = 3b"],
        correctAnswer: "a + c = 2b",
        explanation: "If a, b, c are consecutive, then b = a + 1 and c = a + 2. So a + c = a + (a + 2) = 2a + 2 = 2(a + 1) = 2b, which reflects the evenly spaced property. 🧮",
        wrongAnswerExplanations: {
            "a × c = b²": "This isn't generally true. For example, if a=1, b=2, c=3, then a×c=3 but b²=4.",
            "a + b = c": "This is only true if the numbers are 0, 1, 2. Not true for all consecutive whole numbers.",
            "a + b + c = 3b": "This isn't generally true. For a=1, b=2, c=3, we get 1+2+3=6, but 3b=6, so this is only true for specific values."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl6_ch2_t2_qm8',
        type: "mcq",
        question: "A student made these statements about the number line:\n1. Zero is the smallest whole number\n2. Every whole number has a successor\n3. Every whole number has a predecessor\nWhich statements are correct?",
        options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2, and 3"],
        correctAnswer: "1 and 2 only",
        explanation: "Statements 1 and 2 are correct. Statement 3 is false because zero has no predecessor in the whole number system. 0️⃣",
        wrongAnswerExplanations: {
            "2 and 3 only": "Statement 3 is false since 0 has no predecessor in the whole number system.",
            "1 and 3 only": "Statement 3 is false since 0 has no predecessor in the whole number system.",
            "1, 2, and 3": "Statement 3 is false since 0 has no predecessor in the whole number system."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl6_ch2_t2_qm9',
        type: "mcq",
        question: "Which of the following operations can be visualized on a number line as moving in opposite directions?",
        options: ["Addition and subtraction", "Addition and multiplication", "Subtraction and division", "Multiplication and division"],
        correctAnswer: "Addition and subtraction",
        explanation: "Addition is represented by moving right on the number line, while subtraction is represented by moving left. These are opposite directions. ↔️",
        wrongAnswerExplanations: {
            "Addition and multiplication": "Both typically result in larger numbers but aren't represented as opposite movements.",
            "Subtraction and division": "These aren't directly represented as opposite movements on a basic number line.",
            "Multiplication and division": "These are inverse operations but aren't represented as opposite directional movements."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch2_t2_qm10',
        type: "mcq",
        question: "How many steps would you need to move on the number line to calculate 14 - 5 + 7 - 2?",
        options: ["14 steps", "28 steps", "4 steps", "None of these"],
        correctAnswer: "28 steps",
        explanation: "You would move 14 steps right from 0, then 5 steps left, then 7 steps right, then 2 steps left. Total steps: 14 + 5 + 7 + 2 = 28. 🦶",
        wrongAnswerExplanations: {
            "14 steps": "This is only the first movement, not accounting for all operations.",
            "4 steps": "This is the number of operations, not the total steps moved.",
            "None of these": "The total number of steps is indeed 28."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl6_ch2_t2_qm11',
        type: "mcq",
        question: "If the distance between points A and B on the number line is 5 units, and the distance between points B and C is 7 units, what is the maximum possible distance between points A and C?",
        options: ["2 units", "12 units", "35 units", "None of these"],
        correctAnswer: "12 units",
        explanation: "The maximum distance occurs when A, B, and C are in a straight line. This gives A to C = 5 + 7 = 12 units when C is beyond B from A. 📏",
        wrongAnswerExplanations: {
            "2 units": "This is the minimum possible distance when C is between A and B.",
            "35 units": "This seems to be multiplying the distances, which is incorrect.",
            "None of these": "12 units is the correct maximum distance."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl6_ch2_t2_qm12',
        type: "mcq",
        question: "A teacher asked students to locate a number on the number line that is 3 units to the right of the predecessor of 15. What number should they locate?",
        options: ["17", "18", "19", "12"],
        correctAnswer: "17",
        explanation: "The predecessor of 15 is 14. Moving 3 units right from 14 gives 14 + 3 = 17. This combines predecessor and movement concepts. 🔢",
        wrongAnswerExplanations: {
            "18": "This would be 3 units right of 15, not its predecessor.",
            "19": "This is too far to the right.",
            "12": "This would be 3 units left of 15, not 3 units right of its predecessor."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch2_t2_qm13',
        type: "mcq",
        question: "What is the sum of all whole numbers between 10 and 15 on the number line?",
        options: ["60", "75", "65", "50"],
        correctAnswer: "65",
        explanation: "The whole numbers between 10 and 15 are 11, 12, 13, and 14. Their sum is 11 + 12 + 13 + 14 = 50. Adding the endpoints: 50 + 10 + 15 = 75. But the question asks only for numbers between, so 50. 🧮",
        wrongAnswerExplanations: {
            "60": "This is not equal to the sum of the whole numbers between 10 and 15.",
            "75": "This includes the endpoints 10 and 15, which are not 'between' 10 and 15.",
            "65": "This is not equal to the sum of the whole numbers between 10 and 15."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl6_ch2_t2_qm14',
        type: "mcq",
        question: "Rohan starts at position 8 on the number line and makes these moves: 5 units right, 7 units left, 4 units right, and 6 units left. At the same time, Sohan starts at position 12 and moves 8 units left. Who ends up further to the right?",
        options: ["Rohan", "Sohan", "Both end at the same position", "Cannot be determined"],
        correctAnswer: "Rohan",
        explanation: "Rohan's position: 8 + 5 - 7 + 4 - 6 = 4. Sohan's position: 12 - 8 = 4. Both end at position 4, so neither is further right. 📊",
        wrongAnswerExplanations: {
            "Rohan": "Rohan and Sohan both end at position 4.",
            "Sohan": "Rohan and Sohan both end at position 4.",
            "Cannot be determined": "We can precisely determine that both end at position 4."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl6_ch2_t2_qm15',
        type: "mcq",
        question: "If the sum of three consecutive whole numbers on the number line is 33, what is the middle number?",
        options: ["10", "11", "12", "13"],
        correctAnswer: "11",
        explanation: "If the numbers are x-1, x, x+1, then (x-1) + x + (x+1) = 3x = 33, so x = 11. The middle number is 11. This uses algebraic representation of number line patterns. 🧮",
        wrongAnswerExplanations: {
            "10": "If the middle number is 10, the sum would be 9 + 10 + 11 = 30, not 33.",
            "12": "If the middle number is 12, the sum would be 11 + 12 + 13 = 36, not 33.",
            "13": "If the middle number is 13, the sum would be 12 + 13 + 14 = 39, not 33."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl6_ch2_t2_qm16',
        type: "mcq",
        question: "On the number line, what is the total number of whole numbers from 25 to 52, inclusive?",
        options: ["26", "27", "28", "29"],
        correctAnswer: "28",
        explanation: "To find the total count inclusive of endpoints, calculate 52 - 25 + 1 = 28. This counts each point on the number line between and including 25 and 52. 🔢",
        wrongAnswerExplanations: {
            "26": "This doesn't include both endpoints in the count.",
            "27": "This is the result of 52 - 25, which doesn't account for including both endpoints.",
            "29": "This count is too high and doesn't match the correct calculation."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch2_t2_qm17',
        type: "mcq",
        question: "If you mark every third number on the number line starting from 0, which of these numbers will you mark?",
        options: ["25", "26", "27", "28"],
        correctAnswer: "27",
        explanation: "When marking every 3rd number starting from 0, you mark: 0, 3, 6, 9, 12, 15, 18, 21, 24, 27... So 27 will be marked. This demonstrates pattern recognition on the number line. 🔍",
        wrongAnswerExplanations: {
            "25": "25 is not divisible by 3, so it wouldn't be marked when marking every 3rd number from 0.",
            "26": "26 is not divisible by 3, so it wouldn't be marked when marking every 3rd number from 0.",
            "28": "28 is not divisible by 3, so it wouldn't be marked when marking every 3rd number from 0."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch2_t2_qm18',
        type: "mcq",
        question: "If you place three points A, B, and C on a number line such that the distance from A to B is 7 units and the distance from B to C is 5 units, which of these CANNOT be the distance from A to C?",
        options: ["2 units", "7 units", "12 units", "13 units"],
        correctAnswer: "13 units",
        explanation: "When three points are on a number line, the maximum distance from A to C is the sum of distances (7 + 5 = 12) and the minimum is the absolute difference (|7 - 5| = 2). Any value between 2 and 12 is possible, but 13 exceeds the maximum. 📏",
        wrongAnswerExplanations: {
            "2 units": "This is the minimum possible distance when C is between A and B.",
            "7 units": "This is possible if C is positioned such that B is between A and C.",
            "12 units": "This is the maximum possible distance when A, B, and C are in a straight line."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl6_ch2_t2_qm19',
        type: "mcq",
        question: "A mailman delivers mail starting at house number 1 and delivers to every 4th house. If there are 30 houses in a row, to how many houses will the mailman deliver mail?",
        options: ["7", "8", "9", "10"],
        correctAnswer: "8",
        explanation: "The mailman delivers to houses 1, 5, 9, 13, 17, 21, 25, and 29. That's 8 houses total. This is like marking points on a number line with a specific pattern. 📬",
        wrongAnswerExplanations: {
            "7": "This misses one of the houses in the count.",
            "9": "This counts too many houses; there are only 8 houses that receive mail.",
            "10": "This counts too many houses; there are only 8 houses that receive mail."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl6_ch2_t2_qm20',
        type: "mcq",
        question: "Which of the following best describes the whole number line?",
        options: [
            "A line starting at 1 and extending infinitely in both directions",
            "A line starting at 0 and extending infinitely to the right only",
            "A line starting at 0 and extending infinitely in both directions",
            "A line starting at 1 and extending infinitely to the right only"
        ],
        correctAnswer: "A line starting at 0 and extending infinitely to the right only",
        explanation: "The whole number line starts at 0 (the smallest whole number) and extends infinitely in the positive direction only. It includes 0, 1, 2, 3, and so on. 📊",
        wrongAnswerExplanations: {
            "A line starting at 1 and extending infinitely in both directions": "This would include negative numbers, which aren't whole numbers.",
            "A line starting at 0 and extending infinitely in both directions": "This would include negative numbers, which aren't whole numbers.",
            "A line starting at 1 and extending infinitely to the right only": "This describes the natural number line, not the whole number line which starts at 0."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    }
];
