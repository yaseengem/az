// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 7\Chapter8\Topic1\quiz_medium.ts
import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl7_ch8_t1_qm1',
        type: "mcq",
        question: "In a mixture of milk and water, the ratio of milk to water is 3:2. If 5 more liters of water is added, the ratio becomes 3:3. How many liters of milk were in the original mixture?",
        options: ["15 liters", "12 liters", "9 liters", "18 liters"],
        correctAnswer: "15 liters",
        explanation: "Let milk = 3x, water = 2x. After adding 5L water: 3x:(2x+5) = 3:3. Solving: 3(2x+5) = 3×3x, 6x+15 = 9x, so x = 5. Therefore milk = 15L. 🥛",
        wrongAnswerExplanations: {
            "12 liters": "This value doesn't satisfy the given conditions when substituted into the equations.",
            "9 liters": "This value doesn't satisfy the given conditions when substituted into the equations.",
            "18 liters": "This value doesn't satisfy the given conditions when substituted into the equations."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch8_t1_qm2',
        type: "mcq",
        question: "A map has a scale of 1:10,000. A rectangular field measures 5 cm by 3 cm on the map. What is the actual area of the field in square meters?",
        options: ["15,000 m²", "150,000 m²", "1,500,000 m²", "15,000,000 m²"],
        correctAnswer: "150,000 m²",
        explanation: "Real length = 5×10,000 = 50,000 cm = 500 m. Real width = 3×10,000 = 30,000 cm = 300 m. Area = 500×300 = 150,000 m². Map scales convert linear measurements. 🗺️",
        wrongAnswerExplanations: {
            "15,000 m²": "This is too small. You may have made an error in unit conversion.",
            "1,500,000 m²": "This is incorrect. The correct calculation gives 150,000 m².",
            "15,000,000 m²": "This is far too large. You may have multiplied by the scale factor twice."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch8_t1_qm3',
        type: "mcq",
        question: "A mixture contains acid and water in the ratio 2:5. If 14 liters of water is added to the mixture, the ratio becomes 2:7. What was the quantity of acid in the original mixture?",
        options: ["10 liters", "8 liters", "12 liters", "14 liters"],
        correctAnswer: "10 liters",
        explanation: "Let acid = 2x, water = 5x. After adding 14L water: 2x:(5x+14) = 2:7. Solving: 7(2x) = 2(5x+14), 14x = 10x+28, 4x = 28, x = 7. So acid = 2x = 14L. 🧪",
        wrongAnswerExplanations: {
            "8 liters": "This answer is incorrect. When substituted back, it doesn't satisfy the given ratios.",
            "12 liters": "This answer is incorrect. When substituted back, it doesn't satisfy the given ratios.",
            "14 liters": "This answer is incorrect. When substituted back, it doesn't satisfy the given ratios."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch8_t1_qm4',
        type: "mcq",
        question: "Two numbers are in the ratio 3:5. If 9 is added to both numbers, the ratio becomes 5:7. Find the smaller number.",
        options: ["6", "9", "15", "12"],
        correctAnswer: "15",
        explanation: "Let numbers be 3x and 5x. After adding 9: (3x+9):(5x+9) = 5:7. Solving: 7(3x+9) = 5(5x+9), 21x+63 = 25x+45, 63-45 = 25x-21x, 18 = 4x, x = 4.5. So smaller number = 3x = 15. 🧮",
        wrongAnswerExplanations: {
            "6": "This value doesn't satisfy the given ratio conditions when 9 is added to both numbers.",
            "9": "This value doesn't satisfy the given ratio conditions when 9 is added to both numbers.",
            "12": "This value doesn't satisfy the given ratio conditions when 9 is added to both numbers."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch8_t1_qm5',
        type: "mcq",
        question: "If 8 men can build a wall in 15 days, how many men would be needed to build the same wall in 10 days?",
        options: ["10 men", "12 men", "16 men", "20 men"],
        correctAnswer: "12 men",
        explanation: "This is inverse proportion. Men × days = constant. 8 × 15 = n × 10, giving n = (8 × 15) ÷ 10 = 12 men. More workers means the job finishes faster. 👷",
        wrongAnswerExplanations: {
            "10 men": "This is incorrect. Using the inverse proportion equation, we get 12 men, not 10.",
            "16 men": "This is incorrect. You may have calculated 8 × 2 instead of using the inverse proportion formula.",
            "20 men": "This is incorrect. This would be too many men for the given timeframe."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch8_t1_qm6',
        type: "mcq",
        question: "A train travels 300 km in 4 hours. Assuming constant speed, how far will it travel in 7 hours?",
        options: ["450 km", "500 km", "525 km", "600 km"],
        correctAnswer: "525 km",
        explanation: "This is direct proportion. Distance ∝ Time. Using unitary method: Speed = 300 ÷ 4 = 75 km/hr. Distance in 7 hrs = 75 × 7 = 525 km. Speed remains constant. 🚆",
        wrongAnswerExplanations: {
            "450 km": "This is incorrect. The train travels at 75 km/h, so in 7 hours it will travel 525 km, not 450 km.",
            "500 km": "This is incorrect. The correct calculation using proportional reasoning gives 525 km.",
            "600 km": "This is incorrect. This would be the distance traveled in 8 hours, not 7."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch8_t1_qm7',
        type: "mcq",
        question: "If the ratio of boys to girls in a class is 4:5, and there are 36 students in total, how many boys are there?",
        options: ["16", "20", "15", "18"],
        correctAnswer: "16",
        explanation: "Let the number of boys be 4x and girls be 5x. Total = 4x + 5x = 9x = 36, so x = 4. Therefore, boys = 4x = 16. Always check your answer with the total. 🏫",
        wrongAnswerExplanations: {
            "20": "This is incorrect. If there were 20 boys, there would be 25 girls, making a total of 45 students, not 36.",
            "15": "This is incorrect. This doesn't match the 4:5 ratio given in the problem.",
            "18": "This is incorrect. This doesn't match the 4:5 ratio given in the problem."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch8_t1_qm8',
        type: "mcq",
        question: "A gearwheel with 40 teeth meshes with another gearwheel with 25 teeth. When the first wheel makes 30 revolutions, how many revolutions does the second wheel make?",
        options: ["48", "18.75", "50", "75"],
        correctAnswer: "48",
        explanation: "The number of teeth and revolutions are inversely proportional. 40 × 30 = 25 × x, giving x = 48 revolutions. Think of gear ratio mechanics. ⚙️",
        wrongAnswerExplanations: {
            "18.75": "This is incorrect. You may have set up the proportion in reverse.",
            "50": "This is incorrect. The correct calculation gives 48 revolutions.",
            "75": "This is incorrect. You may have multiplied instead of using the inverse proportion relationship."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch8_t1_qm9',
        type: "mcq",
        question: "In a fruit basket, the ratio of apples to oranges is 7:5. If there are 30 fruits in total, how many oranges are there?",
        options: ["10", "12.5", "13", "21"],
        correctAnswer: "12.5",
        explanation: "Let apples = 7x, oranges = 5x. Total = 7x + 5x = 12x = 30, so x = 2.5. Therefore oranges = 5x = 12.5. This is valid for situations where parts need not be whole numbers. 🍊",
        wrongAnswerExplanations: {
            "10": "This is incorrect. Using the ratio 7:5 and total 30, we get 12.5 oranges, not 10.",
            "13": "This is incorrect. The correct calculation gives 12.5 oranges.",
            "21": "This is incorrect. This is closer to the number of apples (17.5), not oranges."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch8_t1_qm10',
        type: "mcq",
        question: "If 6 pipes can fill a tank in 8 hours, how long will it take 9 pipes of the same capacity to fill the tank?",
        options: ["12 hours", "5.33 hours", "4.5 hours", "6 hours"],
        correctAnswer: "5.33 hours",
        explanation: "This is inverse proportion. Pipes × time = constant. 6 × 8 = 9 × t, giving t = (6 × 8) ÷ 9 = 48 ÷ 9 = 5.33 hours. More pipes = faster filling. 🚿",
        wrongAnswerExplanations: {
            "12 hours": "This is incorrect. More pipes would decrease the time, not increase it.",
            "4.5 hours": "This is incorrect. Using the inverse proportion equation, we get 5.33 hours, not 4.5.",
            "6 hours": "This is incorrect. The correct calculation gives 5.33 hours."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch8_t1_qm11',
        type: "mcq",
        question: "The cost of 15 books is ₹1,800. Using the same rate, what would be the cost of 23 books?",
        options: ["₹2,700", "₹2,760", "₹2,800", "₹3,000"],
        correctAnswer: "₹2,760",
        explanation: "Using direct proportion: 15:1800 = 23:x, so 15x = 23 × 1800, giving x = (23 × 1800) ÷ 15 = 41400 ÷ 15 = ₹2,760. Cost is directly proportional to quantity. 📚",
        wrongAnswerExplanations: {
            "₹2,700": "This is incorrect. The correct cost is ₹2,760 using proportional reasoning.",
            "₹2,800": "This is incorrect. The correct calculation gives ₹2,760.",
            "₹3,000": "This is incorrect. This is too high compared to the correct answer."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch8_t1_qm12',
        type: "mcq",
        question: "A shopkeeper mixes two varieties of tea costing ₹200 and ₹300 per kg in the ratio 3:2. What is the cost of the mixture per kg?",
        options: ["₹240", "₹250", "₹260", "₹280"],
        correctAnswer: "₹240",
        explanation: "Cost = (3×₹200 + 2×₹300)/(3+2) = (₹600 + ₹600)/5 = ₹1200/5 = ₹240 per kg. Weighted average gives the cost of mixtures. 🍵",
        wrongAnswerExplanations: {
            "₹250": "This is incorrect. The weighted average calculation gives ₹240 per kg, not ₹250.",
            "₹260": "This is incorrect. The correct calculation gives ₹240 per kg.",
            "₹280": "This is incorrect. This would require a different ratio of tea varieties."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch8_t1_qm13',
        type: "mcq",
        question: "A car travels 280 km in 4 hours. How long will it take to travel 420 km at the same speed?",
        options: ["5 hours", "6 hours", "7 hours", "7.5 hours"],
        correctAnswer: "6 hours",
        explanation: "Using proportion: 280:4 = 420:t, so 280t = 4 × 420, giving t = (4 × 420) ÷ 280 = 1680 ÷ 280 = 6 hours. Time is directly proportional to distance at constant speed. 🚗",
        wrongAnswerExplanations: {
            "5 hours": "This is incorrect. The car would need to travel faster to cover 420 km in 5 hours.",
            "7 hours": "This is incorrect. Using the proportion 280:4 = 420:t gives t = 6 hours, not 7.",
            "7.5 hours": "This is incorrect. The correct calculation gives 6 hours."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch8_t1_qm14',
        type: "mcq",
        question: "In an alloy, zinc and copper are in the ratio 2:3. If 10 kg of zinc is added, the ratio becomes 3:4. How much copper was in the original alloy?",
        options: ["15 kg", "20 kg", "25 kg", "30 kg"],
        correctAnswer: "30 kg",
        explanation: "Let zinc = 2x, copper = 3x. After adding 10kg zinc: (2x+10):3x = 3:4. Solving: 4(2x+10) = 3×3x, 8x+40 = 9x, 40 = x. So copper = 3x = 30kg. 🔧",
        wrongAnswerExplanations: {
            "15 kg": "This is incorrect. When substituted into the equation, this doesn't satisfy the given ratios.",
            "20 kg": "This is incorrect. When substituted into the equation, this doesn't satisfy the given ratios.",
            "25 kg": "This is incorrect. When substituted into the equation, this doesn't satisfy the given ratios."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch8_t1_qm15',
        type: "mcq",
        question: "The angles in a triangle are in the ratio 2:3:5. Find the measure of the smallest angle.",
        options: ["18°", "30°", "36°", "60°"],
        correctAnswer: "36°",
        explanation: "Sum of angles in a triangle = 180°. Let angles be 2x, 3x, and 5x. 2x + 3x + 5x = 180°, so 10x = 180°, giving x = 18°. Smallest angle = 2x = 36°. Ratio helps find unknown angles. 📐",
        wrongAnswerExplanations: {
            "18°": "This is incorrect. Using the ratio 2:3:5 and total 180°, the smallest angle is 36°, not 18°.",
            "30°": "This is incorrect. The correct calculation gives 36°.",
            "60°": "This is incorrect. This would be the measure of one of the larger angles."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch8_t1_qm16',
        type: "mcq",
        question: "If 5 workers can finish a job in 12 days working 8 hours daily, how many days will 6 workers take to finish the job working 10 hours daily?",
        options: ["8 days", "8.4 days", "9.6 days", "10 days"],
        correctAnswer: "8 days",
        explanation: "Work done = workers × hours × days. 5 × 8 × 12 = 6 × 10 × d, giving d = (5 × 8 × 12) ÷ (6 × 10) = 480 ÷ 60 = 8 days. Account for all variables in work problems. ⏱️",
        wrongAnswerExplanations: {
            "8.4 days": "This is incorrect. The correct calculation gives 8 days.",
            "9.6 days": "This is incorrect. You may have ignored the change in daily work hours.",
            "10 days": "This is incorrect. This would be the answer if the daily work hours remained the same."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch8_t1_qm17',
        type: "mcq",
        question: "A pump can fill a tank in 2 hours. After working for half an hour, the pump breaks down and a second pump is used, which fills the remaining part in 2 hours. How long would the second pump take to fill the entire tank?",
        options: ["2.5 hours", "3 hours", "4 hours", "3.5 hours"],
        correctAnswer: "3 hours",
        explanation: "First pump fills 1/4 of tank in 0.5 hours. Second pump fills 3/4 in 2 hours. Rate of second pump = 3/8 tank per hour. For full tank: 1 ÷ (3/8) = 8/3 = 2.67 ≈ 3 hours. 💧",
        wrongAnswerExplanations: {
            "2.5 hours": "This is incorrect. The second pump is slower than the first pump.",
            "4 hours": "This is incorrect. The correct calculation gives 3 hours.",
            "3.5 hours": "This is incorrect. The correct calculation gives 3 hours."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch8_t1_qm18',
        type: "mcq",
        question: "The salaries of A and B are in the ratio 2:3. If each gets a raise of ₹4000, the new ratio becomes 3:4. Find B's original salary.",
        options: ["₹8,000", "₹12,000", "₹18,000", "₹24,000"],
        correctAnswer: "₹12,000",
        explanation: "Let original salaries be 2x and 3x. After raise: (2x+4000):(3x+4000) = 3:4. Solving: 4(2x+4000) = 3(3x+4000), 8x+16000 = 9x+12000, 16000-12000 = 9x-8x, 4000 = x. So B's salary = 3x = ₹12,000. 💵",
        wrongAnswerExplanations: {
            "₹8,000": "This is incorrect. This would be A's salary, not B's.",
            "₹18,000": "This is incorrect. When substituted back, this doesn't satisfy the given ratio conditions.",
            "₹24,000": "This is incorrect. This is too high compared to the correct answer."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch8_t1_qm19',
        type: "mcq",
        question: "A 20% sugar solution is mixed with a 50% sugar solution in the ratio 3:2. What percentage of sugar is in the final mixture?",
        options: ["32%", "33%", "35%", "38%"],
        correctAnswer: "32%",
        explanation: "Sugar content = (3×20% + 2×50%)/(3+2) = (60% + 100%)/5 = 160%/5 = 32%. Weighted average gives the concentration in mixtures. 🧊",
        wrongAnswerExplanations: {
            "33%": "This is incorrect. The weighted average calculation gives 32%, not 33%.",
            "35%": "This is incorrect. This would require a different ratio of the two solutions.",
            "38%": "This is incorrect. This is too high compared to the correct answer."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch8_t1_qm20',
        type: "mcq",
        question: "If 15 workers can build a wall in 10 days, how many workers would be needed to build the same wall in 6 days, if they work with 80% efficiency compared to the original workers?",
        options: ["25 workers", "31.25 workers", "30 workers", "22.5 workers"],
        correctAnswer: "31.25 workers",
        explanation: "Work = workers × days × efficiency. 15 × 10 × 1 = n × 6 × 0.8, giving n = (15 × 10) ÷ (6 × 0.8) = 150 ÷ 4.8 = 31.25 workers. Adjust for changing efficiency. 👷",
        wrongAnswerExplanations: {
            "25 workers": "This is incorrect. This doesn't account for the decreased efficiency.",
            "30 workers": "This is incorrect. The correct calculation gives 31.25 workers.",
            "22.5 workers": "This is incorrect. This doesn't account for both the decreased time and efficiency."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    }
];
