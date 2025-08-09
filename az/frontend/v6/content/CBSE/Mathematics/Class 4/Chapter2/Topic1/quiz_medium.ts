import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl4_ch2_t1_qm1',
        type: "mcq",
        question: "If Rahul's height is 1.45 meters, what is his height in centimeters?",
        options: ["14.5 cm", "145 cm", "1450 cm", "1.45 cm"],
        correctAnswer: "145 cm",
        explanation: "To convert meters to centimeters, multiply by 100. So, 1.45 m × 100 = 145 cm. This is a standard height conversion. 👦",
        wrongAnswerExplanations: {
            "14.5 cm": "This is incorrect. 14.5 cm equals 0.145 m, which is too short for a child.",
            "1450 cm": "This is incorrect. 1450 cm equals 14.5 m, which is unrealistically tall.",
            "1.45 cm": "This is incorrect. 1.45 cm equals 0.0145 m, which is extremely short."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch2_t1_qm2',
        type: "mcq",
        question: "Priya measured the length of her bedroom as 3 m 50 cm. What is this length in centimeters?",
        options: ["53 cm", "350 cm", "3050 cm", "3500 cm"],
        correctAnswer: "350 cm",
        explanation: "3 m = 300 cm, and 50 cm remains 50 cm. Adding them: 300 cm + 50 cm = 350 cm. Mixed units require converting to the same unit before adding. 📏",
        wrongAnswerExplanations: {
            "53 cm": "This is incorrect. 53 cm is much shorter than 3 m 50 cm.",
            "3050 cm": "This is incorrect. This would be 30 m 50 cm, not 3 m 50 cm.",
            "3500 cm": "This is incorrect. 3500 cm equals 35 m, not 3 m 50 cm."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch2_t1_qm3',
        type: "mcq",
        question: "Hari walked 1 km 200 m from home to the park. What is this distance in meters?",
        options: ["120 m", "1200 m", "1020 m", "10200 m"],
        correctAnswer: "1200 m",
        explanation: "1 km = 1000 m, and 200 m remains 200 m. Adding them: 1000 m + 200 m = 1200 m. Converting all units to meters helps in addition. 🚶",
        wrongAnswerExplanations: {
            "120 m": "This is incorrect. 120 m is much shorter than 1 km 200 m.",
            "1020 m": "This is incorrect. This would be 1 km 20 m, not 1 km 200 m.",
            "10200 m": "This is incorrect. 10200 m equals 10 km 200 m, not 1 km 200 m."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch2_t1_qm4',
        type: "mcq",
        question: "A ribbon is 2.75 meters long. If Sita cuts off 150 centimeters, how much ribbon is left in meters?",
        options: ["1.25 m", "2.6 m", "1.6 m", "1.25 cm"],
        correctAnswer: "1.25 m",
        explanation: "2.75 m = 275 cm. After cutting 150 cm, 275 - 150 = 125 cm remains. 125 cm = 1.25 m. Converting between units is essential for this calculation. 🎀",
        wrongAnswerExplanations: {
            "2.6 m": "This is incorrect. 2.75 m - 0.15 m = 2.6 m, but 150 cm = 1.5 m, not 0.15 m.",
            "1.6 m": "This is incorrect. This would be if 115 cm was cut off, not 150 cm.",
            "1.25 cm": "This is incorrect. The answer is 1.25 meters, not centimeters."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch2_t1_qm5',
        type: "mcq",
        question: "Ravi's pencil is 12 cm long. Neha's pencil is 8 cm long. How much longer is Ravi's pencil than Neha's?",
        options: ["4 cm", "4 mm", "40 mm", "0.4 m"],
        correctAnswer: "4 cm",
        explanation: "To find the difference, subtract: 12 cm - 8 cm = 4 cm. This represents how much longer Ravi's pencil is compared to Neha's. ✏️",
        wrongAnswerExplanations: {
            "4 mm": "This is incorrect. 4 mm is too small; it's only 0.4 cm.",
            "40 mm": "This is correct in millimeters (4 cm = 40 mm), but the question asks for the most appropriate unit.",
            "0.4 m": "This is incorrect. 4 cm = 0.04 m, not 0.4 m."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch2_t1_qm6',
        type: "mcq",
        question: "A table is 75 cm high. A chair is 45 cm high. How much higher is the table than the chair?",
        options: ["30 cm", "3 m", "300 mm", "35 cm"],
        correctAnswer: "30 cm",
        explanation: "To find the difference, subtract: 75 cm - 45 cm = 30 cm. This represents how much higher the table is than the chair. 🪑",
        wrongAnswerExplanations: {
            "3 m": "This is incorrect. 30 cm = 0.3 m, not 3 m.",
            "300 mm": "This is correct in millimeters (30 cm = 300 mm), but the question asks for the most appropriate unit.",
            "35 cm": "This is incorrect. 75 - 45 = 30, not 35."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch2_t1_qm7',
        type: "mcq",
        question: "A carpenter needs to cut a 2-meter wooden plank into 4 equal pieces. How long will each piece be?",
        options: ["50 cm", "25 cm", "40 cm", "75 cm"],
        correctAnswer: "50 cm",
        explanation: "2 meters = 200 cm. When divided into 4 equal pieces: 200 cm ÷ 4 = 50 cm per piece. Division requires converting to the same unit first. 🪚",
        wrongAnswerExplanations: {
            "25 cm": "This is incorrect. 200 cm ÷ 8 = 25 cm, but the plank is being divided into 4 pieces, not 8.",
            "40 cm": "This is incorrect. 200 cm ÷ 5 = 40 cm, but the plank is being divided into 4 pieces, not 5.",
            "75 cm": "This is incorrect. 3 m ÷ 4 = 75 cm, but the plank is 2 m, not 3 m."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch2_t1_qm8',
        type: "mcq",
        question: "Amit walks 1.5 km to school every day. How many meters does he walk in 5 days?",
        options: ["750 m", "7500 m", "1500 m", "15000 m"],
        correctAnswer: "7500 m",
        explanation: "1.5 km = 1500 m. For 5 days: 1500 m × 5 = 7500 m. This combines unit conversion with multiplication. 🏫",
        wrongAnswerExplanations: {
            "750 m": "This is incorrect. 750 m is only half of the daily distance.",
            "1500 m": "This is incorrect. 1500 m is the distance for 1 day, not 5 days.",
            "15000 m": "This is incorrect. This would be the distance for 10 days, not 5 days."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch2_t1_qm9',
        type: "mcq",
        question: "A rope is 3 m 25 cm long. Another rope is 2 m 75 cm long. What is the total length of both ropes?",
        options: ["5 m", "6 m", "5 m 100 cm", "6 m 100 cm"],
        correctAnswer: "6 m",
        explanation: "3 m 25 cm + 2 m 75 cm = 5 m 100 cm = 6 m (since 100 cm = 1 m). Adding lengths requires careful handling of different units. 🧵",
        wrongAnswerExplanations: {
            "5 m": "This is incorrect. This neglects the centimeters in the measurement.",
            "5 m 100 cm": "This is correct but should be simplified to 6 m, as 100 cm = 1 m.",
            "6 m 100 cm": "This is incorrect. 5 m 100 cm = 6 m, not 6 m 100 cm."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch2_t1_qm10',
        type: "mcq",
        question: "A ruler is 30 cm long. How many such rulers placed end to end would make 1.5 meters?",
        options: ["3 rulers", "5 rulers", "15 rulers", "50 rulers"],
        correctAnswer: "5 rulers",
        explanation: "1.5 m = 150 cm. To find how many rulers: 150 cm ÷ 30 cm = 5 rulers. This requires unit conversion before division. 📏",
        wrongAnswerExplanations: {
            "3 rulers": "This is incorrect. 3 rulers would make 90 cm, not 150 cm.",
            "15 rulers": "This is incorrect. 15 rulers would make 450 cm, not 150 cm.",
            "50 rulers": "This is incorrect. 50 rulers would make 1500 cm, not 150 cm."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch2_t1_qm11',
        type: "mcq",
        question: "Anil measured the length of his garden as 12 meters. His sister measured it as 1200 centimeters. Who is correct?",
        options: ["Only Anil is correct", "Only Anil's sister is correct", "Both are correct", "Neither is correct"],
        correctAnswer: "Both are correct",
        explanation: "12 m = 1200 cm, so both measurements are equal but expressed in different units. This demonstrates the relationship between meters and centimeters. 🌱",
        wrongAnswerExplanations: {
            "Only Anil is correct": "This is incorrect. Both measurements represent the same length in different units.",
            "Only Anil's sister is correct": "This is incorrect. Both measurements represent the same length in different units.",
            "Neither is correct": "This is incorrect. Both measurements are mathematically equivalent."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch2_t1_qm12',
        type: "mcq",
        question: "A book is 25 cm long and 20 cm wide. What is its perimeter?",
        options: ["45 cm", "90 cm", "50 cm", "100 cm"],
        correctAnswer: "90 cm",
        explanation: "Perimeter = 2 × (length + width) = 2 × (25 cm + 20 cm) = 2 × 45 cm = 90 cm. Perimeter measures the total distance around a shape. 📚",
        wrongAnswerExplanations: {
            "45 cm": "This is incorrect. 45 cm is just the sum of length and width, not the perimeter.",
            "50 cm": "This is incorrect. 50 cm would be the perimeter if each side was 12.5 cm.",
            "100 cm": "This is incorrect. 100 cm would be the perimeter if each side was 25 cm."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch2_t1_qm13',
        type: "mcq",
        question: "The width of a rectangular field is 25 meters. If the perimeter is 150 meters, what is the length of the field?",
        options: ["125 m", "100 m", "75 m", "50 m"],
        correctAnswer: "50 m",
        explanation: "For a rectangle: Perimeter = 2 × (length + width). 150 = 2 × (length + 25). So length + 25 = 75, and length = 50 meters. This applies the perimeter formula. 🏞️",
        wrongAnswerExplanations: {
            "125 m": "This is incorrect. This would make the perimeter 300 m, not 150 m.",
            "100 m": "This is incorrect. This would make the perimeter 250 m, not 150 m.",
            "75 m": "This is incorrect. This would make the perimeter 200 m, not 150 m."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch2_t1_qm14',
        type: "mcq",
        question: "Deepa has a 6 m long ribbon. She uses 250 cm for a project. How much ribbon does she have left?",
        options: ["3.5 m", "3.75 m", "4.5 m", "5.75 m"],
        correctAnswer: "3.5 m",
        explanation: "6 m = 600 cm. After using 250 cm, she has 600 - 250 = 350 cm left. Converting back to meters: 350 cm = 3.5 m. Calculation requires consistent units. 🎀",
        wrongAnswerExplanations: {
            "3.75 m": "This is incorrect. This would be if she used 225 cm, not 250 cm.",
            "4.5 m": "This is incorrect. This would be if she used 150 cm, not 250 cm.",
            "5.75 m": "This is incorrect. This would be if she used 25 cm, not 250 cm."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch2_t1_qm15',
        type: "mcq",
        question: "Ram measured his height as 125 cm. Shyam is 0.25 m taller than Ram. What is Shyam's height in centimeters?",
        options: ["127.5 cm", "150 cm", "250 cm", "100 cm"],
        correctAnswer: "150 cm",
        explanation: "0.25 m = 25 cm. So Shyam's height = 125 cm + 25 cm = 150 cm. This requires converting all measurements to the same unit. 👦",
        wrongAnswerExplanations: {
            "127.5 cm": "This is incorrect. 0.25 m = 25 cm, not 2.5 cm.",
            "250 cm": "This is incorrect. This would be if Shyam was 1.25 m taller, not 0.25 m taller.",
            "100 cm": "This is incorrect. This would make Shyam shorter than Ram, not taller."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch2_t1_qm16',
        type: "mcq",
        question: "A class needs to make a line with students standing 50 cm apart. If there are 10 students, what is the length of the line?",
        options: ["4.5 m", "5 m", "5.5 m", "4 m"],
        correctAnswer: "4.5 m",
        explanation: "With 10 students, there are 9 gaps between them. Total length = 9 × 50 cm = 450 cm = 4.5 m. This applies the concept of gaps between points. 👨‍👩‍👧‍👦",
        wrongAnswerExplanations: {
            "5 m": "This is incorrect. This would be the length if there were 10 gaps, not 9.",
            "5.5 m": "This is incorrect. This would be the length if there were 11 gaps, not 9.",
            "4 m": "This is incorrect. This would be the length if there were 8 gaps, not 9."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch2_t1_qm17',
        type: "mcq",
        question: "A tailor needs 1.5 meters of cloth for each shirt. How many complete shirts can be made from a 10-meter roll of cloth?",
        options: ["5 shirts", "6 shirts", "7 shirts", "8 shirts"],
        correctAnswer: "6 shirts",
        explanation: "Number of shirts = Total cloth ÷ Cloth per shirt = 10 m ÷ 1.5 m = 6.67. Since we can't make a partial shirt, the answer is 6 complete shirts. This applies division with units. 👕",
        wrongAnswerExplanations: {
            "5 shirts": "This is incorrect. 5 shirts would require only 7.5 m of cloth, wasting too much.",
            "7 shirts": "This is incorrect. 7 shirts would require 10.5 m of cloth, which is more than available.",
            "8 shirts": "This is incorrect. 8 shirts would require 12 m of cloth, which is much more than available."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch2_t1_qm18',
        type: "mcq",
        question: "Rita walks at a speed of 4 km per hour. How far will she walk in 45 minutes?",
        options: ["4 km", "3 km", "2 km", "1.5 km"],
        correctAnswer: "3 km",
        explanation: "In 1 hour (60 minutes), Rita walks 4 km. In 45 minutes, she walks: 4 km × (45/60) = 4 km × 0.75 = 3 km. This applies proportional reasoning with time. 🚶‍♀️",
        wrongAnswerExplanations: {
            "4 km": "This is incorrect. 4 km would be the distance walked in 1 hour, not 45 minutes.",
            "2 km": "This is incorrect. 2 km would be the distance walked in 30 minutes, not 45 minutes.",
            "1.5 km": "This is incorrect. 1.5 km would be the distance walked in 22.5 minutes, not 45 minutes."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch2_t1_qm19',
        type: "mcq",
        question: "A rectangular garden is 15 m long and 10 m wide. What is the distance around the garden?",
        options: ["25 m", "50 m", "150 m", "30 m"],
        correctAnswer: "50 m",
        explanation: "The distance around the garden is its perimeter. Perimeter = 2 × (length + width) = 2 × (15 m + 10 m) = 2 × 25 m = 50 m. This applies the perimeter formula to a real-world context. 🌳",
        wrongAnswerExplanations: {
            "25 m": "This is incorrect. 25 m is the sum of length and width, not the perimeter.",
            "150 m": "This is incorrect. 150 m is the area of the garden, not the perimeter.",
            "30 m": "This is incorrect. This is not related to either the perimeter or area."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch2_t1_qm20',
        type: "mcq",
        question: "Meera has two strings: one 75 cm long and another 1.25 m long. What is their total length in meters?",
        options: ["1.5 m", "2 m", "2.5 m", "0.2 m"],
        correctAnswer: "2 m",
        explanation: "75 cm = 0.75 m. Total length = 0.75 m + 1.25 m = 2 m. All measurements must be converted to the same unit before adding. 🧵",
        wrongAnswerExplanations: {
            "1.5 m": "This is incorrect. 75 cm = 0.75 m, not 0.25 m.",
            "2.5 m": "This is incorrect. This would be the total if the first string were 1.25 m, not 0.75 m.",
            "0.2 m": "This is incorrect. This is unrelated to the correct calculation."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    }
];
