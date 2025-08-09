// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 7\Chapter8\Topic1\quiz_easy.ts
import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl7_ch8_t1_qe1',
        type: "mcq",
        question: "What is the simplified form of the ratio 24:36?",
        options: ["2:3", "3:2", "4:6", "6:4"],
        correctAnswer: "2:3",
        explanation: "To simplify 24:36, divide both terms by their GCD 12, resulting in 2:3. Always express ratios in their lowest terms. ✂️",
        wrongAnswerExplanations: {
            "3:2": "The correct ratio maintains the original order. 24:36 simplifies to 2:3, not 3:2.",
            "4:6": "This ratio can be further simplified by dividing both terms by 2.",
            "6:4": "This is neither the correct order nor the simplified form."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch8_t1_qe2',
        type: "mcq",
        question: "If 3 pencils cost ₹15, how much would 7 pencils cost?",
        options: ["₹30", "₹35", "₹25", "₹21"],
        correctAnswer: "₹35",
        explanation: "Using the unitary method: 1 pencil costs ₹15 ÷ 3 = ₹5, so 7 pencils cost ₹5 × 7 = ₹35. Direct proportion applies here. 📝",
        wrongAnswerExplanations: {
            "₹30": "This is incorrect. The cost of 6 pencils would be ₹30, not 7 pencils.",
            "₹25": "This is incorrect. Each pencil costs ₹5, so 7 pencils would cost more than ₹25.",
            "₹21": "This is incorrect. You may have used 3:1 instead of calculating the unit cost."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch8_t1_qe3',
        type: "mcq",
        question: "In a proportion, if a:b = c:d, what is true?",
        options: ["a × b = c × d", "a × d = b × c", "a × c = b × d", "a + b = c + d"],
        correctAnswer: "a × d = b × c",
        explanation: "In a proportion, the product of extremes equals the product of means: a × d = b × c. This is the cross-multiplication property of proportions. ⚖️",
        wrongAnswerExplanations: {
            "a × b = c × d": "This is not the correct relationship in a proportion.",
            "a × c = b × d": "This mixes extremes and means incorrectly.",
            "a + b = c + d": "Proportions involve multiplication, not addition."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch8_t1_qe4',
        type: "mcq",
        question: "What is the ratio of 75 cm to 1.5 m?",
        options: ["1:2", "2:1", "1:3", "1:20"],
        correctAnswer: "1:2",
        explanation: "Convert to same units: 75 cm to 1.5 m = 75 cm to 150 cm = 75:150 = 1:2 after simplifying. Always use the same units when writing ratios. 📏",
        wrongAnswerExplanations: {
            "2:1": "This reverses the order of the ratio; the correct order is 75 cm to 150 cm, which is 1:2.",
            "1:3": "This is incorrect. 75 cm to 150 cm simplifies to 1:2, not 1:3.",
            "1:20": "This is incorrect. You may have forgotten to convert meters to centimeters properly."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch8_t1_qe5',
        type: "mcq",
        question: "If 4 workers can complete a job in 10 days, how many days will 5 workers take to complete the same job?",
        options: ["8 days", "8.5 days", "9 days", "12 days"],
        correctAnswer: "8 days",
        explanation: "This is inverse proportion. Number of workers × days = constant, so 4 × 10 = 5 × x, giving x = 40 ÷ 5 = 8 days. More workers = less time. ⏱️",
        wrongAnswerExplanations: {
            "8.5 days": "Incorrect calculation. Using inverse proportion: 4 × 10 = 5 × x gives x = 8 days.",
            "9 days": "Incorrect calculation. With more workers, the time should decrease proportionally.",
            "12 days": "This would mean more workers take more time, which is incorrect for this scenario."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch8_t1_qe6',
        type: "mcq",
        question: "The ratio of boys to girls in a class is 7:8. If there are 35 boys, how many girls are there?",
        options: ["30", "40", "38", "42"],
        correctAnswer: "40",
        explanation: "Using proportion: 7:8 = 35:x, so 7x = 35 × 8, giving x = 280 ÷ 7 = 40 girls. Set up proportions to find unknown quantities. 🏫",
        wrongAnswerExplanations: {
            "30": "This is incorrect. Using the proportion 7:8 = 35:x gives x = 40, not 30.",
            "38": "This is incorrect. Maybe you added 35 + 3 instead of using proportional reasoning.",
            "42": "This is incorrect. You may have made a calculation error."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch8_t1_qe7',
        type: "mcq",
        question: "Which of these ratios is equal to 5:7?",
        options: ["10:14", "15:28", "25:35", "35:25"],
        correctAnswer: "25:35",
        explanation: "To check equivalence, simplify each ratio. 25:35 = 5:7 (dividing both by 5). Two ratios are equal if they simplify to the same ratio. 🔢",
        wrongAnswerExplanations: {
            "10:14": "While this initially looks correct, 10:14 can be further simplified to 5:7.",
            "15:28": "This simplifies to 15:28, which is not equal to 5:7.",
            "35:25": "This is the inverse of 5:7 (it's actually 7:5)."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch8_t1_qe8',
        type: "mcq",
        question: "If a car travels 150 km in 3 hours, how far will it travel in 5 hours at the same speed?",
        options: ["200 km", "250 km", "225 km", "300 km"],
        correctAnswer: "250 km",
        explanation: "This is direct proportion. Distance ∝ Time. Using the relation 150/3 = x/5, we get x = (150 × 5) ÷ 3 = 250 km. 🚗",
        wrongAnswerExplanations: {
            "200 km": "This is incorrect. Using proportions: 150/3 = x/5 gives x = 250 km.",
            "225 km": "This is incorrect. You might have added 150 + 75 instead of using proportional reasoning.",
            "300 km": "This is incorrect. You might have doubled 150, but that would be for 6 hours, not 5."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch8_t1_qe9',
        type: "mcq",
        question: "Which of the following is NOT a correct way to write the ratio 3:4?",
        options: ["3/4", "3÷4", "3 to 4", "3 and 4"],
        correctAnswer: "3 and 4",
        explanation: "The ratio 3:4 can be written as 3/4, 3÷4, or 3 to 4, but '3 and 4' doesn't indicate a ratio relationship. Proper notation is important. 📝",
        wrongAnswerExplanations: {
            "3/4": "This is a correct way to express the ratio 3:4 as a fraction.",
            "3÷4": "This is a correct way to express the ratio 3:4 using the division symbol.",
            "3 to 4": "This is a correct verbal way to express the ratio 3:4."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch8_t1_qe10',
        type: "mcq",
        question: "If the ratio of water to milk in a mixture is 2:3, how much milk is needed for 10 liters of water?",
        options: ["15 liters", "6.67 liters", "12 liters", "20 liters"],
        correctAnswer: "15 liters",
        explanation: "Using proportion: 2:3 = 10:x, so 2x = 10 × 3, giving x = 15 liters of milk. Always maintain the order when setting up proportions. 🥛",
        wrongAnswerExplanations: {
            "6.67 liters": "This is incorrect. You may have set up the proportion backward.",
            "12 liters": "This is incorrect. Using the proportion 2:3 = 10:x gives x = 15.",
            "20 liters": "This is incorrect. This would imply a ratio of 1:2 rather than 2:3."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch8_t1_qe11',
        type: "mcq",
        question: "A recipe calls for 2 cups of flour for every 3 eggs. How many cups of flour are needed for 12 eggs?",
        options: ["6 cups", "8 cups", "9 cups", "4 cups"],
        correctAnswer: "8 cups",
        explanation: "Using proportion: 3:2 = 12:x (eggs to flour), so 3x = 12 × 2, giving x = 8 cups of flour. Recipe proportions must be maintained. 🧁",
        wrongAnswerExplanations: {
            "6 cups": "This is incorrect. Using the proportion 3:2 = 12:x gives x = 8 cups, not 6.",
            "9 cups": "This is incorrect. You may have set up the proportion incorrectly.",
            "4 cups": "This is incorrect. This would be the amount for 6 eggs, not 12."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch8_t1_qe12',
        type: "mcq",
        question: "On a map with scale 1:5000, two cities are 6 cm apart. What is their actual distance?",
        options: ["300 m", "30 km", "3 km", "500 m"],
        correctAnswer: "300 m",
        explanation: "Actual distance = 6 cm × 5000 = 30,000 cm = 300 m. Map scales show how much larger the real distance is compared to the map distance. 🗺️",
        wrongAnswerExplanations: {
            "30 km": "This is incorrect. 6 cm × 5000 = 30,000 cm = 300 m = 0.3 km, not 30 km.",
            "3 km": "This is incorrect. 6 cm × 5000 = 30,000 cm = 300 m = 0.3 km, not 3 km.",
            "500 m": "This is incorrect. The correct calculation gives 300 m."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch8_t1_qe13',
        type: "mcq",
        question: "What is the ratio of 1 hour to 1 day?",
        options: ["1:12", "1:24", "1:60", "1:1440"],
        correctAnswer: "1:24",
        explanation: "1 day = 24 hours, so the ratio is 1:24. Always convert to the same units when comparing in ratios. ⏰",
        wrongAnswerExplanations: {
            "1:12": "This is incorrect. There are 24 hours in a day, not 12.",
            "1:60": "This is incorrect. This would be the ratio of 1 minute to 1 hour, not 1 hour to 1 day.",
            "1:1440": "This is incorrect. This would be the ratio of 1 minute to 1 day, not 1 hour to 1 day."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch8_t1_qe14',
        type: "mcq",
        question: "If 8 kg of rice costs ₹320, what is the cost of 12 kg of rice?",
        options: ["₹420", "₹480", "₹450", "₹540"],
        correctAnswer: "₹480",
        explanation: "Using unitary method: 1 kg costs ₹320 ÷ 8 = ₹40, so 12 kg costs ₹40 × 12 = ₹480. Direct proportion applies to cost and quantity. 💰",
        wrongAnswerExplanations: {
            "₹420": "This is incorrect. Using proportional reasoning: 8:320 = 12:x gives x = 480, not 420.",
            "₹450": "This is incorrect. The correct calculation gives ₹480.",
            "₹540": "This is incorrect. You might have made a calculation error."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch8_t1_qe15',
        type: "mcq",
        question: "Which ratio is in its simplest form?",
        options: ["25:75", "18:45", "16:36", "15:20"],
        correctAnswer: "15:20",
        explanation: "15:20 is already in its simplest form as the GCD of 15 and 20 is 5, resulting in 3:4. Always verify by finding common factors. 🔍",
        wrongAnswerExplanations: {
            "25:75": "This can be simplified to 1:3 by dividing both terms by 25.",
            "18:45": "This can be simplified to 2:5 by dividing both terms by 9.",
            "16:36": "This can be simplified to 4:9 by dividing both terms by 4."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch8_t1_qe16',
        type: "mcq",
        question: "If a car travels 60 km on 4 liters of petrol, how many liters will it need for a journey of 450 km?",
        options: ["25 liters", "30 liters", "20 liters", "35 liters"],
        correctAnswer: "30 liters",
        explanation: "Using proportion: 60:4 = 450:x, so 60x = 450 × 4, giving x = 1800 ÷ 60 = 30 liters. Fuel consumption forms a direct proportion with distance. ⛽",
        wrongAnswerExplanations: {
            "25 liters": "This is incorrect. Using the proportion 60:4 = 450:x gives x = 30, not 25.",
            "20 liters": "This is incorrect. This would be enough for only 300 km at this rate.",
            "35 liters": "This is incorrect. The correct calculation gives 30 liters."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch8_t1_qe17',
        type: "mcq",
        question: "In a proportion, if 5:x = 15:24, what is the value of x?",
        options: ["6", "8", "10", "12"],
        correctAnswer: "8",
        explanation: "Using cross-multiplication: 5 × 24 = x × 15, so 120 = 15x, giving x = 8. Always cross-multiply when solving for a variable in a proportion. 🧮",
        wrongAnswerExplanations: {
            "6": "This is incorrect. Cross-multiplication gives x = 8, not 6.",
            "10": "This is incorrect. The correct value is x = 8.",
            "12": "This is incorrect. You may have mixed up the terms in the cross-multiplication."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch8_t1_qe18',
        type: "mcq",
        question: "The ratio of students who passed to those who failed is 9:2. If 99 students passed, how many students failed?",
        options: ["22", "18", "20", "24"],
        correctAnswer: "22",
        explanation: "Using proportion: 9:2 = 99:x, so 9x = 99 × 2, giving x = 198 ÷ 9 = 22 students failed. Set up proportions to find unknown quantities. 📚",
        wrongAnswerExplanations: {
            "18": "This is incorrect. Using the proportion 9:2 = 99:x gives x = 22, not 18.",
            "20": "This is incorrect. The correct calculation gives 22 students.",
            "24": "This is incorrect. You might have made a calculation error."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch8_t1_qe19',
        type: "mcq",
        question: "In which of these situations does direct proportion apply?",
        options: [
            "Number of workers and time taken to complete a job",
            "Speed and time taken for a fixed distance",
            "Cost and quantity of an item",
            "Distance between cities and time taken at varying speeds"
        ],
        correctAnswer: "Cost and quantity of an item",
        explanation: "Cost and quantity have direct proportion: more items = proportionally higher cost. In contrast, workers & time have inverse proportion. 🔍",
        wrongAnswerExplanations: {
            "Number of workers and time taken to complete a job": "This is an inverse proportion: more workers make the job finish faster.",
            "Speed and time taken for a fixed distance": "This is an inverse proportion: higher speed means less time.",
            "Distance between cities and time taken at varying speeds": "Without fixed speed, there's no direct or simple inverse proportion."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch8_t1_qe20',
        type: "mcq",
        question: "If the cost of 5 meters of cloth is ₹350, what would be the cost of 8 meters of the same cloth?",
        options: ["₹560", "₹525", "₹580", "₹540"],
        correctAnswer: "₹560",
        explanation: "Using direct proportion: 5:350 = 8:x, so 5x = 8 × 350, giving x = 2800 ÷ 5 = ₹560. Cost is directly proportional to quantity. 🧵",
        wrongAnswerExplanations: {
            "₹525": "This is incorrect. Using the proportion 5:350 = 8:x gives x = 560, not 525.",
            "₹580": "This is incorrect. The correct calculation gives ₹560.",
            "₹540": "This is incorrect. You might have made a calculation error."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    }
];
