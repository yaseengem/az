import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl6_ch12_t1_qm1',
        type: "mcq",
        question: "If the ratio of boys to girls in a class is 3:5 and there are 24 boys, how many girls are there?",
        options: ["40", "30", "35", "45"],
        correctAnswer: "40",
        explanation: "3:5 = 24:x. Solving for x, we get x = (24 × 5) ÷ 3 = 40. 👧👦",
        wrongAnswerExplanations: {
            "30": "This would be correct if the ratio was 3:4, not 3:5.",
            "35": "This is not the correct solution to the ratio 3:5.",
            "45": "This would be correct if the ratio was 3:6, not 3:5."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch12_t1_qm2',
        type: "mcq",
        question: "A recipe requires sugar and flour in the ratio 2:3. If you use 4 cups of sugar, how much flour should you use?",
        options: ["6 cups", "5 cups", "8 cups", "7 cups"],
        correctAnswer: "6 cups",
        explanation: "2:3 = 4:x. Solving for x, we get x = (4 × 3) ÷ 2 = 6. 🍳",
        wrongAnswerExplanations: {
            "5 cups": "This would be correct if the ratio was 2:2.5, not 2:3.",
            "8 cups": "This would be correct if the ratio was 2:4, not 2:3.",
            "7 cups": "This is not the correct solution to the ratio 2:3."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch12_t1_qm3',
        type: "mcq",
        question: "The ratio of red to blue marbles in a bag is 4:7. If there are 28 blue marbles, how many red marbles are there?",
        options: ["16", "20", "24", "12"],
        correctAnswer: "16",
        explanation: "4:7 = x:28. Solving for x, we get x = (28 × 4) ÷ 7 = 16. 🔴🔵",
        wrongAnswerExplanations: {
            "20": "This would be correct if the ratio was 5:7, not 4:7.",
            "24": "This would be correct if the ratio was 6:7, not 4:7.",
            "12": "This would be correct if the ratio was 3:7, not 4:7."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch12_t1_qm4',
        type: "mcq",
        question: "A map scale is 1:50000. If two cities are 8 cm apart on the map, what is their actual distance in kilometers?",
        options: ["4 km", "40 km", "400 km", "0.4 km"],
        correctAnswer: "4 km",
        explanation: "1:50000 = 8:x. x = 8 × 50000 = 400000 cm = 4 km. 🗺️",
        wrongAnswerExplanations: {
            "40 km": "This would be correct if the scale was 1:500000, not 1:50000.",
            "400 km": "This would be correct if the scale was 1:5000000, not 1:50000.",
            "0.4 km": "This would be correct if the scale was 1:5000, not 1:50000."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch12_t1_qm5',
        type: "mcq",
        question: "The ratio of apples to oranges in a fruit basket is 5:8. If there are 40 oranges, how many fruits are there in total?",
        options: ["65", "60", "70", "75"],
        correctAnswer: "65",
        explanation: "5:8 = x:40. x = (40 × 5) ÷ 8 = 25 apples. Total fruits = 25 + 40 = 65. 🍎🍊",
        wrongAnswerExplanations: {
            "60": "This would be correct if the ratio was 5:7, not 5:8.",
            "70": "This would be correct if the ratio was 5:9, not 5:8.",
            "75": "This would be correct if the ratio was 5:10, not 5:8."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch12_t1_qm6',
        type: "mcq",
        question: "A mixture contains milk and water in the ratio 3:2. If there are 15 liters of milk, how much water should be added to make the ratio 1:1?",
        options: ["7.5 liters", "10 liters", "5 liters", "12.5 liters"],
        correctAnswer: "7.5 liters",
        explanation: "Current water = (15 × 2) ÷ 3 = 10 liters. To make 1:1, we need 15 liters of water. Additional water needed = 15 - 10 = 5 liters. 🥛",
        wrongAnswerExplanations: {
            "10 liters": "This would make the ratio 3:4, not 1:1.",
            "5 liters": "This would make the ratio 3:3, but we need 1:1.",
            "12.5 liters": "This would make the ratio 3:5, not 1:1."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch12_t1_qm7',
        type: "mcq",
        question: "The ratio of boys to girls in a school is 4:5. If there are 180 girls, how many students are there in total?",
        options: ["324", "300", "360", "340"],
        correctAnswer: "324",
        explanation: "4:5 = x:180. x = (180 × 4) ÷ 5 = 144 boys. Total students = 144 + 180 = 324. 👦👧",
        wrongAnswerExplanations: {
            "300": "This would be correct if the ratio was 4:6, not 4:5.",
            "360": "This would be correct if the ratio was 4:8, not 4:5.",
            "340": "This is not the correct solution to the ratio 4:5."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch12_t1_qm8',
        type: "mcq",
        question: "A rectangle has length and width in the ratio 5:3. If the perimeter is 48 cm, what is the length?",
        options: ["15 cm", "20 cm", "25 cm", "30 cm"],
        correctAnswer: "15 cm",
        explanation: "Let length = 5x, width = 3x. Perimeter = 2(5x + 3x) = 48. Solving, x = 3. Length = 5 × 3 = 15 cm. 📏",
        wrongAnswerExplanations: {
            "20 cm": "This would be correct if the ratio was 5:4, not 5:3.",
            "25 cm": "This would be correct if the ratio was 5:2, not 5:3.",
            "30 cm": "This would be correct if the ratio was 5:1, not 5:3."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch12_t1_qm9',
        type: "mcq",
        question: "The ratio of red to blue to green marbles is 2:3:4. If there are 36 green marbles, how many red marbles are there?",
        options: ["8", "12", "16", "20"],
        correctAnswer: "8",
        explanation: "2:3:4 = x:y:36. x = (36 × 2) ÷ 4 = 8 red marbles. 🔴🔵🟢",
        wrongAnswerExplanations: {
            "12": "This would be correct if the ratio was 3:3:4, not 2:3:4.",
            "16": "This would be correct if the ratio was 4:3:4, not 2:3:4.",
            "20": "This would be correct if the ratio was 5:3:4, not 2:3:4."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch12_t1_qm10',
        type: "mcq",
        question: "A mixture contains sugar and salt in the ratio 7:3. If there are 21 grams of sugar, how much salt is there?",
        options: ["9 grams", "12 grams", "15 grams", "18 grams"],
        correctAnswer: "9 grams",
        explanation: "7:3 = 21:x. x = (21 × 3) ÷ 7 = 9 grams. 🧂",
        wrongAnswerExplanations: {
            "12 grams": "This would be correct if the ratio was 7:4, not 7:3.",
            "15 grams": "This would be correct if the ratio was 7:5, not 7:3.",
            "18 grams": "This would be correct if the ratio was 7:6, not 7:3."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch12_t1_qm11',
        type: "mcq",
        question: "The ratio of pencils to pens in a box is 3:5. If there are 15 more pens than pencils, how many pencils are there?",
        options: ["22.5", "25", "30", "35"],
        correctAnswer: "22.5",
        explanation: "Let pencils = 3x, pens = 5x. 5x - 3x = 15. x = 7.5. Pencils = 3 × 7.5 = 22.5. ✏️🖊️",
        wrongAnswerExplanations: {
            "25": "This would be correct if the difference was 20, not 15.",
            "30": "This would be correct if the difference was 25, not 15.",
            "35": "This would be correct if the difference was 30, not 15."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch12_t1_qm12',
        type: "mcq",
        question: "A map scale is 1:25000. If two points are 12 cm apart on the map, what is their actual distance in meters?",
        options: ["3000 m", "2500 m", "3500 m", "4000 m"],
        correctAnswer: "3000 m",
        explanation: "1:25000 = 12:x. x = 12 × 25000 = 300000 cm = 3000 m. 🗺️",
        wrongAnswerExplanations: {
            "2500 m": "This would be correct if the scale was 1:20000, not 1:25000.",
            "3500 m": "This would be correct if the scale was 1:30000, not 1:25000.",
            "4000 m": "This would be correct if the scale was 1:35000, not 1:25000."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch12_t1_qm13',
        type: "mcq",
        question: "The ratio of boys to girls in a class is 7:8. If there are 5 more girls than boys, how many students are there in total?",
        options: ["75", "80", "85", "90"],
        correctAnswer: "75",
        explanation: "Let boys = 7x, girls = 8x. 8x - 7x = 5. x = 5. Total = 7x + 8x = 15x = 75. 👦👧",
        wrongAnswerExplanations: {
            "80": "This would be correct if the difference was 6, not 5.",
            "85": "This would be correct if the difference was 7, not 5.",
            "90": "This would be correct if the difference was 8, not 5."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch12_t1_qm14',
        type: "mcq",
        question: "A mixture contains water and alcohol in the ratio 4:1. If there are 20 liters of water, how much alcohol should be added to make the ratio 2:1?",
        options: ["10 liters", "15 liters", "20 liters", "25 liters"],
        correctAnswer: "10 liters",
        explanation: "Current alcohol = (20 × 1) ÷ 4 = 5 liters. To make 2:1, we need 10 liters of alcohol. Additional alcohol needed = 10 - 5 = 5 liters. 🥤",
        wrongAnswerExplanations: {
            "15 liters": "This would make the ratio 4:3, not 2:1.",
            "20 liters": "This would make the ratio 4:4, not 2:1.",
            "25 liters": "This would make the ratio 4:5, not 2:1."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch12_t1_qm15',
        type: "mcq",
        question: "The ratio of red to blue to yellow marbles is 3:4:5. If there are 60 marbles in total, how many blue marbles are there?",
        options: ["20", "25", "30", "35"],
        correctAnswer: "20",
        explanation: "Total parts = 3 + 4 + 5 = 12. Blue marbles = (60 × 4) ÷ 12 = 20. 🔴🔵🟡",
        wrongAnswerExplanations: {
            "25": "This would be correct if the ratio was 3:5:5, not 3:4:5.",
            "30": "This would be correct if the ratio was 3:6:5, not 3:4:5.",
            "35": "This would be correct if the ratio was 3:7:5, not 3:4:5."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch12_t1_qm16',
        type: "mcq",
        question: "A rectangle has length and width in the ratio 7:4. If the area is 112 cm², what is the width?",
        options: ["8 cm", "10 cm", "12 cm", "14 cm"],
        correctAnswer: "8 cm",
        explanation: "Let length = 7x, width = 4x. Area = 7x × 4x = 28x² = 112. x = 2. Width = 4 × 2 = 8 cm. 📏",
        wrongAnswerExplanations: {
            "10 cm": "This would be correct if the ratio was 7:5, not 7:4.",
            "12 cm": "This would be correct if the ratio was 7:6, not 7:4.",
            "14 cm": "This would be correct if the ratio was 7:7, not 7:4."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch12_t1_qm17',
        type: "mcq",
        question: "The ratio of apples to oranges to bananas is 2:3:4. If there are 18 more bananas than apples, how many oranges are there?",
        options: ["27", "30", "33", "36"],
        correctAnswer: "27",
        explanation: "Let apples = 2x, oranges = 3x, bananas = 4x. 4x - 2x = 18. x = 9. Oranges = 3 × 9 = 27. 🍎🍊🍌",
        wrongAnswerExplanations: {
            "30": "This would be correct if the difference was 20, not 18.",
            "33": "This would be correct if the difference was 22, not 18.",
            "36": "This would be correct if the difference was 24, not 18."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch12_t1_qm18',
        type: "mcq",
        question: "A mixture contains milk and water in the ratio 5:2. If there are 35 liters of milk, how much water should be added to make the ratio 5:3?",
        options: ["7 liters", "10 liters", "14 liters", "21 liters"],
        correctAnswer: "7 liters",
        explanation: "Current water = (35 × 2) ÷ 5 = 14 liters. To make 5:3, we need 21 liters of water. Additional water needed = 21 - 14 = 7 liters. 🥛",
        wrongAnswerExplanations: {
            "10 liters": "This would make the ratio 5:4, not 5:3.",
            "14 liters": "This would make the ratio 5:5, not 5:3.",
            "21 liters": "This would make the ratio 5:6, not 5:3."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch12_t1_qm19',
        type: "mcq",
        question: "The ratio of boys to girls in a school is 5:6. If there are 132 girls, how many students are there in total?",
        options: ["242", "250", "260", "270"],
        correctAnswer: "242",
        explanation: "5:6 = x:132. x = (132 × 5) ÷ 6 = 110 boys. Total students = 110 + 132 = 242. 👦👧",
        wrongAnswerExplanations: {
            "250": "This would be correct if the ratio was 5:7, not 5:6.",
            "260": "This would be correct if the ratio was 5:8, not 5:6.",
            "270": "This would be correct if the ratio was 5:9, not 5:6."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch12_t1_qm20',
        type: "mcq",
        question: "A map scale is 1:5000. If two points are 15 cm apart on the map, what is their actual distance in kilometers?",
        options: ["0.75 km", "1 km", "1.25 km", "1.5 km"],
        correctAnswer: "0.75 km",
        explanation: "1:5000 = 15:x. x = 15 × 5000 = 75000 cm = 0.75 km. 🗺️",
        wrongAnswerExplanations: {
            "1 km": "This would be correct if the scale was 1:6667, not 1:5000.",
            "1.25 km": "This would be correct if the scale was 1:8333, not 1:5000.",
            "1.5 km": "This would be correct if the scale was 1:10000, not 1:5000."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    }
]; 