// filepath: content/CBSE/Mathematics/Class 3/Chapter4/Topic2/quiz_medium.ts
import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl3_ch4_t2_qm1',
        type: "mcq",
        question: "Rohan's height is 1 m 25 cm and Raj's height is 125 cm. Which statement is true?",
        options: [
            "Rohan is taller than Raj",
            "Raj is taller than Rohan",
            "Both are of the same height",
            "Cannot be compared"
        ],
        correctAnswer: "Both are of the same height",
        explanation: "1 m 25 cm = 100 cm + 25 cm = 125 cm, which is equal to Raj's height of 125 cm.",
        wrongAnswerExplanations: {
            "Rohan is taller than Raj": "This is incorrect. Both heights are equal at 125 cm.",
            "Raj is taller than Rohan": "This is incorrect. Both heights are equal at 125 cm.",
            "Cannot be compared": "Both are length measurements and can be compared after converting to the same unit."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch4_t2_qm2',
        type: "mcq",
        question: "Arrange in ascending order: 1 m 25 cm, 95 cm, 1 m 50 cm, 200 cm",
        options: [
            "95 cm, 1 m 25 cm, 1 m 50 cm, 200 cm",
            "95 cm, 1 m 25 cm, 200 cm, 1 m 50 cm",
            "1 m 25 cm, 95 cm, 1 m 50 cm, 200 cm",
            "200 cm, 1 m 50 cm, 1 m 25 cm, 95 cm"
        ],
        correctAnswer: "95 cm, 1 m 25 cm, 1 m 50 cm, 200 cm",
        explanation: "Converting all to cm: 95 cm, 125 cm, 150 cm, 200 cm. The ascending order is 95 < 125 < 150 < 200.",
        wrongAnswerExplanations: {
            "95 cm, 1 m 25 cm, 200 cm, 1 m 50 cm": "This is incorrect. 1 m 50 cm = 150 cm, which is less than 200 cm.",
            "1 m 25 cm, 95 cm, 1 m 50 cm, 200 cm": "This is incorrect. 95 cm is less than 1 m 25 cm (125 cm).",
            "200 cm, 1 m 50 cm, 1 m 25 cm, 95 cm": "This is in descending order, not ascending order."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl3_ch4_t2_qm3',
        type: "mcq",
        question: "Sita's height is 1 m 35 cm. Gita's height is 1 m 42 cm. How much taller is Gita than Sita?",
        options: [
            "7 cm",
            "13 cm",
            "77 cm",
            "27 cm"
        ],
        correctAnswer: "7 cm",
        explanation: "Sita: 1 m 35 cm = 135 cm. Gita: 1 m 42 cm = 142 cm. Difference: 142 cm - 135 cm = 7 cm.",
        wrongAnswerExplanations: {
            "13 cm": "This is incorrect. The difference is 142 cm - 135 cm = 7 cm, not 13 cm.",
            "77 cm": "This is incorrect. The difference is 142 cm - 135 cm = 7 cm, not 77 cm.",
            "27 cm": "This is incorrect. The difference is 142 cm - 135 cm = 7 cm, not 27 cm."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch4_t2_qm4',
        type: "mcq",
        question: "A table is 95 cm tall. A chair is 45 cm tall. How much taller is the table than the chair?",
        options: [
            "50 cm",
            "55 cm",
            "40 cm",
            "140 cm"
        ],
        correctAnswer: "50 cm",
        explanation: "Difference in height = 95 cm - 45 cm = 50 cm. The table is 50 cm taller than the chair.",
        wrongAnswerExplanations: {
            "55 cm": "This is incorrect. The difference is 95 cm - 45 cm = 50 cm, not 55 cm.",
            "40 cm": "This is incorrect. The difference is 95 cm - 45 cm = 50 cm, not 40 cm.",
            "140 cm": "This is incorrect. This is the sum (95 cm + 45 cm), not the difference."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch4_t2_qm5',
        type: "mcq",
        question: "The heights of four children are: Anu - 1 m 45 cm, Raj - 150 cm, Sam - 1 m 40 cm, Maya - 145 cm. Who is the tallest?",
        options: [
            "Anu",
            "Raj",
            "Sam",
            "Maya"
        ],
        correctAnswer: "Raj",
        explanation: "Converting all to cm: Anu - 145 cm, Raj - 150 cm, Sam - 140 cm, Maya - 145 cm. Raj is the tallest at 150 cm.",
        wrongAnswerExplanations: {
            "Anu": "Anu is 1 m 45 cm = 145 cm, which is less than Raj's height of 150 cm.",
            "Sam": "Sam is 1 m 40 cm = 140 cm, which is less than Raj's height of 150 cm.",
            "Maya": "Maya is 145 cm, which is less than Raj's height of 150 cm."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl3_ch4_t2_qm6',
        type: "mcq",
        question: "Rahul has two ropes. The first rope is 2 m 35 cm long, and the second rope is 1 m 95 cm long. How much longer is the first rope?",
        options: [
            "40 cm",
            "1 m 40 cm",
            "30 cm",
            "1 m 30 cm"
        ],
        correctAnswer: "40 cm",
        explanation: "First rope: 2 m 35 cm = 235 cm. Second rope: 1 m 95 cm = 195 cm. Difference: 235 cm - 195 cm = 40 cm.",
        wrongAnswerExplanations: {
            "1 m 40 cm": "This is incorrect. The difference is 40 cm, not 1 m 40 cm (140 cm).",
            "30 cm": "This is incorrect. The difference is 235 cm - 195 cm = 40 cm, not 30 cm.",
            "1 m 30 cm": "This is incorrect. The difference is 40 cm, not 1 m 30 cm (130 cm)."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch4_t2_qm7',
        type: "mcq",
        question: "A rope is 3 m 50 cm long. If 75 cm is cut off, how long is the remaining rope?",
        options: [
            "2 m 75 cm",
            "2 m 25 cm",
            "2 m 85 cm",
            "3 m 25 cm"
        ],
        correctAnswer: "2 m 75 cm",
        explanation: "Original length: 3 m 50 cm = 350 cm. After cutting: 350 cm - 75 cm = 275 cm = 2 m 75 cm.",
        wrongAnswerExplanations: {
            "2 m 25 cm": "This is incorrect. 350 cm - 75 cm = 275 cm = 2 m 75 cm, not 2 m 25 cm.",
            "2 m 85 cm": "This is incorrect. 350 cm - 75 cm = 275 cm = 2 m 75 cm, not 2 m 85 cm.",
            "3 m 25 cm": "This is incorrect. 350 cm - 75 cm = 275 cm = 2 m 75 cm, not 3 m 25 cm."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch4_t2_qm8',
        type: "mcq",
        question: "The heights of three plants are: Plant A - 45 cm, Plant B - 0.5 m, Plant C - 35 cm. Arrange them in descending order of height.",
        options: [
            "Plant B, Plant A, Plant C",
            "Plant A, Plant B, Plant C",
            "Plant A, Plant C, Plant B",
            "Plant B, Plant C, Plant A"
        ],
        correctAnswer: "Plant B, Plant A, Plant C",
        explanation: "Plant B: 0.5 m = 50 cm. So heights are: Plant A - 45 cm, Plant B - 50 cm, Plant C - 35 cm. Descending order: 50 cm > 45 cm > 35 cm, or Plant B > Plant A > Plant C.",
        wrongAnswerExplanations: {
            "Plant A, Plant B, Plant C": "This is incorrect. Plant B (50 cm) is taller than Plant A (45 cm).",
            "Plant A, Plant C, Plant B": "This is incorrect. Plant B (50 cm) is the tallest, not the shortest.",
            "Plant B, Plant C, Plant A": "This is incorrect. Plant A (45 cm) is taller than Plant C (35 cm)."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl3_ch4_t2_qm9',
        type: "mcq",
        question: "Meera has three ribbons with the following lengths: 1 m 25 cm, 0.95 m, and 115 cm. Which ribbon is the shortest?",
        options: [
            "1 m 25 cm",
            "0.95 m",
            "115 cm",
            "All are the same length"
        ],
        correctAnswer: "0.95 m",
        explanation: "Converting all to cm: 1 m 25 cm = 125 cm, 0.95 m = 95 cm, 115 cm = 115 cm. The shortest is 95 cm (0.95 m).",
        wrongAnswerExplanations: {
            "1 m 25 cm": "This equals 125 cm, which is longer than 95 cm.",
            "115 cm": "This is 115 cm, which is longer than 95 cm.",
            "All are the same length": "The ribbons have different lengths: 125 cm, 95 cm, and 115 cm."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch4_t2_qm10',
        type: "mcq",
        question: "A bookshelf is 1 m 80 cm tall. A book is 25 cm tall. How many books of the same height can be arranged one above the other on the shelf?",
        options: [
            "7 books",
            "7 books with space left over",
            "8 books",
            "6 books"
        ],
        correctAnswer: "7 books with space left over",
        explanation: "Shelf height: 1 m 80 cm = 180 cm. Number of books: 180 cm ÷ 25 cm = 7.2, which means 7 books with 5 cm space left over.",
        wrongAnswerExplanations: {
            "7 books": "This is incomplete. There would be 7 books with 5 cm space left over.",
            "8 books": "This is incorrect. 8 books would need 8 × 25 cm = 200 cm, which is more than 180 cm.",
            "6 books": "This is incorrect. 6 books would take 6 × 25 cm = 150 cm, leaving 30 cm unused, which is enough for another book."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 60
    },
    {
        id: 'cl3_ch4_t2_qm11',
        type: "mcq",
        question: "Sanjay is walking from his home to the park. He walks 50 m east, then 30 m north, then 70 m east. What is the total distance he walked?",
        options: [
            "150 m",
            "50 m",
            "120 m",
            "100 m"
        ],
        correctAnswer: "150 m",
        explanation: "Total distance = 50 m + 30 m + 70 m = 150 m.",
        wrongAnswerExplanations: {
            "50 m": "This is only the first part of his walk, not the total distance.",
            "120 m": "This only accounts for the east direction (50 m + 70 m), ignoring the 30 m north.",
            "100 m": "This is incorrect. The total distance is 50 m + 30 m + 70 m = 150 m."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch4_t2_qm12',
        type: "mcq",
        question: "The length of a rectangular field is 45 m and its width is 30 m. By how much is the length greater than the width?",
        options: [
            "15 m",
            "75 m",
            "15 cm",
            "1 m 50 cm"
        ],
        correctAnswer: "15 m",
        explanation: "Difference = 45 m - 30 m = 15 m. The length is 15 m greater than the width.",
        wrongAnswerExplanations: {
            "75 m": "This is the sum of the length and width (45 m + 30 m), not the difference.",
            "15 cm": "This is incorrect. The difference is 15 m, not 15 cm (which would be much smaller).",
            "1 m 50 cm": "This is incorrect. The difference is 15 m, not 1 m 50 cm (which equals 1.5 m)."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch4_t2_qm13',
        type: "mcq",
        question: "Neha measures her height as 1 m 42 cm. Her younger brother's height is 28 cm less. How tall is her brother?",
        options: [
            "1 m 14 cm",
            "114 cm",
            "14 m 2 cm",
            "170 cm"
        ],
        correctAnswer: "1 m 14 cm",
        explanation: "Neha's height = 1 m 42 cm = 142 cm. Brother's height = 142 cm - 28 cm = 114 cm = 1 m 14 cm.",
        wrongAnswerExplanations: {
            "114 cm": "This is the correct measurement but should be expressed as 1 m 14 cm for the mixed unit format.",
            "14 m 2 cm": "This is incorrect. The brother's height is 114 cm or 1 m 14 cm, not 14 m 2 cm.",
            "170 cm": "This is incorrect. The brother's height is 142 cm - 28 cm = 114 cm, not 170 cm."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch4_t2_qm14',
        type: "mcq",
        question: "A ribbon of length 3 m 60 cm is cut into 6 equal pieces. How long is each piece?",
        options: [
            "60 cm",
            "6 cm",
            "6 m",
            "600 cm"
        ],
        correctAnswer: "60 cm",
        explanation: "Total length = 3 m 60 cm = 360 cm. Each piece = 360 cm ÷ 6 = 60 cm.",
        wrongAnswerExplanations: {
            "6 cm": "This is incorrect. 360 cm ÷ 6 = 60 cm, not 6 cm.",
            "6 m": "This is incorrect. 6 m would be 600 cm, not 60 cm.",
            "600 cm": "This is incorrect. The total length is 360 cm, not 600 cm."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch4_t2_qm15',
        type: "mcq",
        question: "A pencil is 12 cm long. A pen is 3 cm longer than the pencil. An eraser is 7 cm shorter than the pen. How long is the eraser?",
        options: [
            "8 cm",
            "15 cm",
            "5 cm",
            "22 cm"
        ],
        correctAnswer: "8 cm",
        explanation: "Pen length = 12 cm + 3 cm = 15 cm. Eraser length = 15 cm - 7 cm = 8 cm.",
        wrongAnswerExplanations: {
            "15 cm": "This is the length of the pen, not the eraser.",
            "5 cm": "This is incorrect. The eraser length is 15 cm - 7 cm = 8 cm, not 5 cm.",
            "22 cm": "This is incorrect. The eraser length is 15 cm - 7 cm = 8 cm, not 22 cm."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl3_ch4_t2_qm16',
        type: "mcq",
        question: "The lengths of three sticks are 35 cm, 0.5 m, and 45 cm. Which of the following statements is true?",
        options: [
            "The first stick is the shortest",
            "The second stick is the longest",
            "The third stick is the shortest",
            "All sticks are of equal length"
        ],
        correctAnswer: "The second stick is the longest",
        explanation: "Converting to cm: first stick = 35 cm, second stick = 0.5 m = 50 cm, third stick = 45 cm. The second stick is the longest at 50 cm.",
        wrongAnswerExplanations: {
            "The first stick is the shortest": "The first stick is 35 cm, which is shorter than the third stick (45 cm) but it's not the shortest.",
            "The third stick is the shortest": "The third stick is 45 cm, which is longer than the first stick (35 cm).",
            "All sticks are of equal length": "The sticks have different lengths: 35 cm, 50 cm, and 45 cm."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch4_t2_qm17',
        type: "mcq",
        question: "In a race, Arun finished 25 meters ahead of Bina, and Bina finished 15 meters ahead of Charu. How far ahead of Charu did Arun finish?",
        options: [
            "40 m",
            "10 m",
            "30 m",
            "5 m"
        ],
        correctAnswer: "40 m",
        explanation: "Arun is 25 m ahead of Bina, and Bina is 15 m ahead of Charu. So Arun is 25 m + 15 m = 40 m ahead of Charu.",
        wrongAnswerExplanations: {
            "10 m": "This is incorrect. The total distance is 25 m + 15 m = 40 m, not 10 m.",
            "30 m": "This is incorrect. The total distance is 25 m + 15 m = 40 m, not 30 m.",
            "5 m": "This is incorrect. The total distance is 25 m + 15 m = 40 m, not 5 m."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch4_t2_qm18',
        type: "mcq",
        question: "A thread is 2 m 45 cm long. Another thread is 175 cm long. What is the difference in their lengths?",
        options: [
            "70 cm",
            "7 cm",
            "170 cm",
            "0.7 m"
        ],
        correctAnswer: "70 cm",
        explanation: "First thread = 2 m 45 cm = 245 cm. Second thread = 175 cm. Difference = 245 cm - 175 cm = 70 cm.",
        wrongAnswerExplanations: {
            "7 cm": "This is incorrect. The difference is 245 cm - 175 cm = 70 cm, not 7 cm.",
            "170 cm": "This is incorrect. The difference is 245 cm - 175 cm = 70 cm, not 170 cm.",
            "0.7 m": "This is correct (0.7 m = 70 cm), but the answer should be given in centimeters as specified."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch4_t2_qm19',
        type: "mcq",
        question: "In a garden, there are 3 plants of heights 65 cm, 0.8 m, and 75 cm. If the gardener wants to arrange them in a row with increasing heights, what would be the correct order?",
        options: [
            "65 cm, 75 cm, 0.8 m",
            "0.8 m, 75 cm, 65 cm",
            "75 cm, 65 cm, 0.8 m",
            "65 cm, 0.8 m, 75 cm"
        ],
        correctAnswer: "65 cm, 75 cm, 0.8 m",
        explanation: "Converting to cm: 65 cm, 0.8 m = 80 cm, 75 cm. In ascending order: 65 cm < 75 cm < 80 cm (0.8 m).",
        wrongAnswerExplanations: {
            "0.8 m, 75 cm, 65 cm": "This is in descending order, not ascending order.",
            "75 cm, 65 cm, 0.8 m": "This is incorrect. 65 cm is less than 75 cm.",
            "65 cm, 0.8 m, 75 cm": "This is incorrect. 0.8 m = 80 cm, which is greater than 75 cm."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl3_ch4_t2_qm20',
        type: "mcq",
        question: "A door is 2 m high. A child is 1 m 25 cm tall. How much taller should the child grow to reach the top of the door?",
        options: [
            "75 cm",
            "0.75 m",
            "1.25 m",
            "25 cm"
        ],
        correctAnswer: "75 cm",
        explanation: "Door height = 2 m = 200 cm. Child's height = 1 m 25 cm = 125 cm. Height needed to grow = 200 cm - 125 cm = 75 cm.",
        wrongAnswerExplanations: {
            "0.75 m": "This is correct (0.75 m = 75 cm), but the answer should be given in centimeters as specified.",
            "1.25 m": "This is the child's current height, not how much more the child needs to grow.",
            "25 cm": "This is incorrect. The height needed to grow is 200 cm - 125 cm = 75 cm, not 25 cm."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    }
];
