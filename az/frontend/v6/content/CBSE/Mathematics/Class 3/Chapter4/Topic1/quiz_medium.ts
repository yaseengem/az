// filepath: content/CBSE/Mathematics/Class 3/Chapter4/Topic1/quiz_medium.ts
import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl3_ch4_t1_qm1',
        type: "mcq",
        question: "Sohan measures a ribbon and finds that it is 160 cm long. What is the length of the ribbon in meters?",
        options: ["1.6 m", "16 m", "0.16 m", "160 m"],
        correctAnswer: "1.6 m",
        explanation: "To convert centimeters to meters, divide by 100. So 160 cm ÷ 100 = 1.6 m.",
        wrongAnswerExplanations: {
            "16 m": "This is incorrect. 160 cm equals 1.6 m, not 16 m.",
            "0.16 m": "This is incorrect. 160 cm equals 1.6 m, not 0.16 m.",
            "160 m": "This is incorrect. 160 cm equals 1.6 m, not 160 m."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch4_t1_qm2',
        type: "mcq",
        question: "Ravi is 125 cm tall. His younger sister Meena is 95 cm tall. How much taller is Ravi than Meena?",
        options: ["20 cm", "30 cm", "35 cm", "40 cm"],
        correctAnswer: "30 cm",
        explanation: "To find the difference in height, subtract: 125 cm - 95 cm = 30 cm.",
        wrongAnswerExplanations: {
            "20 cm": "This is incorrect. The difference between 125 cm and 95 cm is 30 cm, not 20 cm.",
            "35 cm": "This is incorrect. The difference between 125 cm and 95 cm is 30 cm, not 35 cm.",
            "40 cm": "This is incorrect. The difference between 125 cm and 95 cm is 30 cm, not 40 cm."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch4_t1_qm3',
        type: "mcq",
        question: "A pencil is 12 cm long. If you place 8 such pencils in a straight line, what would be the total length?",
        options: ["86 cm", "96 cm", "92 cm", "106 cm"],
        correctAnswer: "96 cm",
        explanation: "To find the total length, multiply: 12 cm × 8 = 96 cm.",
        wrongAnswerExplanations: {
            "86 cm": "This is incorrect. 12 cm × 8 = 96 cm, not 86 cm.",
            "92 cm": "This is incorrect. 12 cm × 8 = 96 cm, not 92 cm.",
            "106 cm": "This is incorrect. 12 cm × 8 = 96 cm, not 106 cm."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch4_t1_qm4',
        type: "mcq",
        question: "A room is 4 m long and 3 m wide. What is its perimeter?",
        options: ["7 m", "12 m", "14 m", "24 m"],
        correctAnswer: "14 m",
        explanation: "To find the perimeter, add all sides: 4 m + 3 m + 4 m + 3 m = 14 m.",
        wrongAnswerExplanations: {
            "7 m": "This is the sum of length and width (4 m + 3 m), not the perimeter.",
            "12 m": "This is incorrect. The perimeter is 4 m + 3 m + 4 m + 3 m = 14 m.",
            "24 m": "This is incorrect. 24 m² would be the area (4 m × 6 m), not the perimeter."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch4_t1_qm5',
        type: "mcq",
        question: "Rani wants to put a ribbon around a square gift box with sides of 25 cm. How much ribbon does she need?",
        options: ["75 cm", "100 cm", "50 cm", "25 cm"],
        correctAnswer: "100 cm",
        explanation: "For a square, the perimeter is 4 × side length. So 4 × 25 cm = 100 cm of ribbon is needed.",
        wrongAnswerExplanations: {
            "75 cm": "This is incorrect. The perimeter of a square with 25 cm sides is 4 × 25 cm = 100 cm.",
            "50 cm": "This is incorrect. The perimeter of a square with 25 cm sides is 4 × 25 cm = 100 cm.",
            "25 cm": "This is just the length of one side, not the perimeter."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch4_t1_qm6',
        type: "mcq",
        question: "A measuring tape shows 3 m and 45 cm. What is this length in centimeters?",
        options: ["345 cm", "3.45 cm", "305 cm", "45 cm"],
        correctAnswer: "345 cm",
        explanation: "To convert 3 m to cm, multiply by 100: 3 × 100 = 300 cm. Then add: 300 cm + 45 cm = 345 cm.",
        wrongAnswerExplanations: {
            "3.45 cm": "This is incorrect. 3 m and 45 cm equals 345 cm, not 3.45 cm.",
            "305 cm": "This is incorrect. 3 m and 45 cm equals 345 cm, not 305 cm.",
            "45 cm": "This is only the centimeter portion of the measurement, not the total."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch4_t1_qm7',
        type: "mcq",
        question: "Arjun walks 250 meters to school from home. How many centimeters is this distance?",
        options: ["2.5 cm", "25 cm", "2500 cm", "25000 cm"],
        correctAnswer: "25000 cm",
        explanation: "To convert meters to centimeters, multiply by 100. So 250 m × 100 = 25000 cm.",
        wrongAnswerExplanations: {
            "2.5 cm": "This is incorrect. 250 m equals 25000 cm, not 2.5 cm.",
            "25 cm": "This is incorrect. 250 m equals 25000 cm, not 25 cm.",
            "2500 cm": "This is incorrect. 250 m equals 25000 cm, not 2500 cm."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch4_t1_qm8',
        type: "mcq",
        question: "A piece of rope is 5 m 25 cm long. Another piece is 3 m 45 cm long. What is their total length?",
        options: ["8 m 60 cm", "8 m 70 cm", "9 m 70 cm", "8 m 50 cm"],
        correctAnswer: "8 m 70 cm",
        explanation: "Add the meters: 5 m + 3 m = 8 m. Add the centimeters: 25 cm + 45 cm = 70 cm. Total: 8 m 70 cm.",
        wrongAnswerExplanations: {
            "8 m 60 cm": "This is incorrect. 25 cm + 45 cm = 70 cm, not 60 cm.",
            "9 m 70 cm": "This is incorrect. 5 m + 3 m = 8 m, not 9 m.",
            "8 m 50 cm": "This is incorrect. 25 cm + 45 cm = 70 cm, not 50 cm."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch4_t1_qm9',
        type: "mcq",
        question: "A rectangular playground is 25 m long and 15 m wide. How far will Rahul travel if he walks around it once?",
        options: ["40 m", "80 m", "50 m", "75 m"],
        correctAnswer: "80 m",
        explanation: "The perimeter is 2 × (length + width) = 2 × (25 m + 15 m) = 2 × 40 m = 80 m.",
        wrongAnswerExplanations: {
            "40 m": "This is only the sum of length and width (25 m + 15 m), not the perimeter.",
            "50 m": "This is incorrect. The perimeter is 2 × (25 m + 15 m) = 80 m.",
            "75 m": "This is incorrect. The perimeter is 2 × (25 m + 15 m) = 80 m."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch4_t1_qm10',
        type: "mcq",
        question: "Reena wants to buy a ribbon that is 2 m and 75 cm long. The shopkeeper only has a ribbon that is 350 cm long. Is this ribbon long enough?",
        options: ["Yes, with 75 cm extra", "No, it's 25 cm too short", "Yes, with 25 cm extra", "No, it's 75 cm too short"],
        correctAnswer: "Yes, with 75 cm extra",
        explanation: "2 m 75 cm = 200 cm + 75 cm = 275 cm. The shopkeeper's ribbon is 350 cm, so 350 cm - 275 cm = 75 cm extra.",
        wrongAnswerExplanations: {
            "No, it's 25 cm too short": "This is incorrect. 350 cm is more than 275 cm, not less.",
            "Yes, with 25 cm extra": "This is incorrect. The extra length is 350 cm - 275 cm = 75 cm.",
            "No, it's 75 cm too short": "This is incorrect. The ribbon is longer, not shorter."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl3_ch4_t1_qm11',
        type: "mcq",
        question: "A tailor needs 2 m 25 cm of cloth for a shirt. If he has 10 m of cloth, how many complete shirts can he make?",
        options: ["4 shirts", "5 shirts", "4 shirts with cloth left over", "5 shirts with cloth left over"],
        correctAnswer: "4 shirts with cloth left over",
        explanation: "Each shirt needs 2 m 25 cm = 225 cm. For 4 shirts: 4 × 225 cm = 900 cm = 9 m. 10 m - 9 m = 1 m cloth left over.",
        wrongAnswerExplanations: {
            "4 shirts": "This is incomplete. He can make 4 shirts but will have cloth left over.",
            "5 shirts": "This is incorrect. 5 shirts would need 5 × 225 cm = 1125 cm = 11.25 m, more than available.",
            "5 shirts with cloth left over": "This is incorrect. 5 shirts would need more than 10 m of cloth."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl3_ch4_t1_qm12',
        type: "mcq",
        question: "A ribbon is 3 m 40 cm long. If Meera cuts off 75 cm, how much ribbon is left?",
        options: ["2 m 65 cm", "2 m 75 cm", "2 m 35 cm", "2 m 25 cm"],
        correctAnswer: "2 m 65 cm",
        explanation: "3 m 40 cm = 340 cm. After cutting 75 cm: 340 cm - 75 cm = 265 cm = 2 m 65 cm.",
        wrongAnswerExplanations: {
            "2 m 75 cm": "This is incorrect. 340 cm - 75 cm = 265 cm = 2 m 65 cm.",
            "2 m 35 cm": "This is incorrect. 340 cm - 75 cm = 265 cm = 2 m 65 cm.",
            "2 m 25 cm": "This is incorrect. 340 cm - 75 cm = 265 cm = 2 m 65 cm."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch4_t1_qm13',
        type: "mcq",
        question: "A rectangular frame measures 40 cm by 25 cm on the outside. If the frame is 2 cm wide all around, what are the dimensions of the photo inside?",
        options: ["38 cm by 23 cm", "36 cm by 21 cm", "38 cm by 21 cm", "36 cm by 23 cm"],
        correctAnswer: "36 cm by 21 cm",
        explanation: "For each dimension, subtract twice the frame width: 40 cm - (2 × 2 cm) = 36 cm and 25 cm - (2 × 2 cm) = 21 cm.",
        wrongAnswerExplanations: {
            "38 cm by 23 cm": "This subtracts only 2 cm from each dimension, but we need to subtract 2 cm from each side (4 cm total).",
            "38 cm by 21 cm": "This incorrectly subtracts 2 cm from length but 4 cm from width.",
            "36 cm by 23 cm": "This incorrectly subtracts 4 cm from length but 2 cm from width."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl3_ch4_t1_qm14',
        type: "mcq",
        question: "Pawan walks 150 m east, then 75 m north, then 100 m west, and finally 75 m south. How far is he from his starting point?",
        options: ["50 m east", "50 m west", "50 m north", "50 m south"],
        correctAnswer: "50 m west",
        explanation: "East-West movements: 150 m east + 100 m west = 50 m east. North-South movements: 75 m north + 75 m south = 0 m. Final position: 50 m east of starting point.",
        wrongAnswerExplanations: {
            "50 m east": "This is incorrect. He ends up 50 m west, not east.",
            "50 m north": "This is incorrect. The north-south movements cancel out (75 m - 75 m = 0).",
            "50 m south": "This is incorrect. The north-south movements cancel out (75 m - 75 m = 0)."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 60
    },
    {
        id: 'cl3_ch4_t1_qm15',
        type: "mcq",
        question: "A wire of length 12 m is cut into equal pieces of 75 cm each. How many complete pieces can be made?",
        options: ["16 pieces", "15 pieces", "14 pieces", "18 pieces"],
        correctAnswer: "16 pieces",
        explanation: "12 m = 1200 cm. Number of pieces = 1200 cm ÷ 75 cm = 16 pieces.",
        wrongAnswerExplanations: {
            "15 pieces": "This is incorrect. 1200 cm ÷ 75 cm = 16 pieces, not 15.",
            "14 pieces": "This is incorrect. 1200 cm ÷ 75 cm = 16 pieces, not 14.",
            "18 pieces": "This is incorrect. 1200 cm ÷ 75 cm = 16 pieces, not 18."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch4_t1_qm16',
        type: "mcq",
        question: "Amit is measuring the side of a square garden. His measuring tape shows 4 m 50 cm. What is the perimeter of the garden?",
        options: ["16 m", "18 m", "16 m 50 cm", "18 m 00 cm"],
        correctAnswer: "18 m 00 cm",
        explanation: "For a square, perimeter = 4 × side length. So perimeter = 4 × (4 m 50 cm) = 4 × 450 cm = 1800 cm = 18 m.",
        wrongAnswerExplanations: {
            "16 m": "This is incorrect. The perimeter is 4 × 450 cm = 1800 cm = 18 m.",
            "18 m 50 cm": "This is incorrect. The perimeter is 4 × 450 cm = 1800 cm = 18 m.",
            "16 m 50 cm": "This is incorrect. The perimeter is 4 × 450 cm = 1800 cm = 18 m."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch4_t1_qm17',
        type: "mcq",
        question: "A vegetable garden has a rectangular shape with a length of 8 m and width of 6 m. How many meters of fencing are needed to enclose it?",
        options: ["14 m", "24 m", "28 m", "48 m"],
        correctAnswer: "28 m",
        explanation: "Perimeter = 2 × (length + width) = 2 × (8 m + 6 m) = 2 × 14 m = 28 m of fencing needed.",
        wrongAnswerExplanations: {
            "14 m": "This is just the sum of length and width (8 m + 6 m), not the perimeter.",
            "24 m": "This is incorrect. The perimeter is 2 × (8 m + 6 m) = 28 m.",
            "48 m": "This is incorrect. 48 m² would be the area (8 m × 6 m), not the perimeter."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch4_t1_qm18',
        type: "mcq",
        question: "Which of these measurements is equal to 325 cm?",
        options: ["3 m 25 cm", "3 m 2 cm 5 mm", "32 m 5 cm", "3.25 m"],
        correctAnswer: "3 m 25 cm",
        explanation: "325 cm = 3 m 25 cm (since 1 m = 100 cm, so 300 cm = 3 m).",
        wrongAnswerExplanations: {
            "3 m 2 cm 5 mm": "This equals 302.5 cm, not 325 cm.",
            "32 m 5 cm": "This equals 3205 cm, not 325 cm.",
            "3.25 m": "This equals 325 cm, but the correct way to express it in mixed units is 3 m 25 cm."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch4_t1_qm19',
        type: "mcq",
        question: "A carpenter has a wooden plank that is 2 m 55 cm long. He wants to cut it into 5 equal pieces. How long will each piece be?",
        options: ["41 cm", "51 cm", "45 cm", "55 cm"],
        correctAnswer: "51 cm",
        explanation: "2 m 55 cm = 255 cm. Each piece will be 255 cm ÷ 5 = 51 cm long.",
        wrongAnswerExplanations: {
            "41 cm": "This is incorrect. 255 cm ÷ 5 = 51 cm, not 41 cm.",
            "45 cm": "This is incorrect. 255 cm ÷ 5 = 51 cm, not 45 cm.",
            "55 cm": "This is incorrect. 255 cm ÷ 5 = 51 cm, not 55 cm."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl3_ch4_t1_qm20',
        type: "mcq",
        question: "Sheela is 135 cm tall. Her brother is 32 cm taller than her. How tall is her brother?",
        options: ["167 cm", "157 cm", "103 cm", "153 cm"],
        correctAnswer: "167 cm",
        explanation: "To find her brother's height, add: 135 cm + 32 cm = 167 cm.",
        wrongAnswerExplanations: {
            "157 cm": "This is incorrect. 135 cm + 32 cm = 167 cm, not 157 cm.",
            "103 cm": "This is incorrect. The question asks for the sum (135 cm + 32 cm), not the difference.",
            "153 cm": "This is incorrect. 135 cm + 32 cm = 167 cm, not 153 cm."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    }
];
