import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl8_ch11_t1_qm1',
        type: "mcq",
        question: "If y ∝ x and y = 24 when x = 6, find the equation connecting x and y.",
        options: ["y = 4x", "y = 6x", "y = 3x", "y = 2x"],
        correctAnswer: "y = 4x",
        explanation: "In direct proportion, y = kx where k is constant. Here, 24 = k × 6, so k = 24/6 = 4. Therefore, y = 4x. 📊",
        wrongAnswerExplanations: {
            "y = 6x": "This would give y = 36 when x = 6, which is incorrect.",
            "y = 3x": "This would give y = 18 when x = 6, which is incorrect.",
            "y = 2x": "This would give y = 12 when x = 6, which is incorrect."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl8_ch11_t1_qm2',
        type: "mcq",
        question: "A recipe for 4 people needs 300g of rice. Using the same proportion, how much rice is needed for 7 people?",
        options: ["525g", "550g", "500g", "475g"],
        correctAnswer: "525g",
        explanation: "Amount of rice ∝ number of people. For 4 people, 300g is needed. For 7 people: (300 × 7) ÷ 4 = 525g. 🍚",
        wrongAnswerExplanations: {
            "550g": "This is more than the proportional amount needed.",
            "500g": "This is less than the proportional amount needed.",
            "475g": "This is less than the proportional amount needed."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch11_t1_qm3',
        type: "mcq",
        question: "If 15 workers can build a wall in 12 days working 8 hours per day, how many days will it take if they work 12 hours per day?",
        options: ["8 days", "9 days", "10 days", "6 days"],
        correctAnswer: "8 days",
        explanation: "Time taken ∝ 1/(hours per day). Original: 12 days × 8 hours = New days × 12 hours. So, new days = (12 × 8) ÷ 12 = 8 days. 👷",
        wrongAnswerExplanations: {
            "9 days": "This is not the correct proportional value.",
            "10 days": "This would mean the work is slower than expected.",
            "6 days": "This is not the correct proportional value."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl8_ch11_t1_qm4',
        type: "mcq",
        question: "In a scale drawing, 5 cm represents 2 km. What actual distance is represented by 8.5 cm?",
        options: ["3.4 km", "3.2 km", "3.6 km", "3.8 km"],
        correctAnswer: "3.4 km",
        explanation: "Distance on map ∝ actual distance. If 5 cm → 2 km, then 1 cm → 0.4 km. Therefore, 8.5 cm → 8.5 × 0.4 = 3.4 km. 🗺️",
        wrongAnswerExplanations: {
            "3.2 km": "This would be for 8 cm on the map.",
            "3.6 km": "This would be for 9 cm on the map.",
            "3.8 km": "This would be for 9.5 cm on the map."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch11_t1_qm5',
        type: "mcq",
        question: "If the side length of a cube is doubled, by what factor does its surface area increase?",
        options: ["4 times", "2 times", "6 times", "8 times"],
        correctAnswer: "4 times",
        explanation: "Surface area of cube ∝ (side length)². If side length doubles, surface area increases by 2² = 4 times. For example, if side is 2 units, SA = 24 sq units; if side is 4 units, SA = 96 sq units. 📦",
        wrongAnswerExplanations: {
            "2 times": "This would be if surface area was directly proportional to side length.",
            "6 times": "This is not the correct proportional increase.",
            "8 times": "This is the factor by which volume increases, not surface area."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl8_ch11_t1_qm6',
        type: "mcq",
        question: "A car travels 280 km using 40 liters of petrol. How far can it travel with 28 liters, assuming the same rate of consumption?",
        options: ["196 km", "200 km", "184 km", "192 km"],
        correctAnswer: "196 km",
        explanation: "Distance ∝ amount of petrol. If 40L → 280 km, then 28L → (280 × 28) ÷ 40 = 196 km. 🚗",
        wrongAnswerExplanations: {
            "200 km": "This is more than the proportional distance.",
            "184 km": "This is less than the proportional distance.",
            "192 km": "This is not the correct proportional distance."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch11_t1_qm7',
        type: "mcq",
        question: "If 3x + 6 = ky, where k is a constant, is y directly proportional to x?",
        options: [
            "No, because the equation has an additional term",
            "Yes, because x and y are related by a constant",
            "Yes, because both x and y increase together",
            "Cannot be determined"
        ],
        correctAnswer: "No, because the equation has an additional term",
        explanation: "For direct proportion, y = mx where m is constant. Here, y = (3x + 6)/k, which is not in the form y = mx due to the +6 term. 📐",
        wrongAnswerExplanations: {
            "Yes, because x and y are related by a constant": "The relationship includes an additional term (+6) which breaks direct proportion.",
            "Yes, because both x and y increase together": "Just increasing together is not sufficient for direct proportion.",
            "Cannot be determined": "We can determine it's not direct proportion due to the +6 term."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl8_ch11_t1_qm8',
        type: "mcq",
        question: "A factory produces 800 items in 20 days. If they need to produce 1200 items of the same type, how many days will it take at the same rate?",
        options: ["30 days", "25 days", "35 days", "40 days"],
        correctAnswer: "30 days",
        explanation: "Time taken ∝ number of items. If 800 items → 20 days, then 1200 items → (20 × 1200) ÷ 800 = 30 days. 🏭",
        wrongAnswerExplanations: {
            "25 days": "This would not be enough time at the same production rate.",
            "35 days": "This is more time than needed at the same rate.",
            "40 days": "This is much more time than needed at the same rate."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch11_t1_qm9',
        type: "mcq",
        question: "If y ∝ x and y = 18 when x = 3, what is the value of x when y = 48?",
        options: ["8", "6", "9", "12"],
        correctAnswer: "8",
        explanation: "Since y ∝ x, y = kx where k = 18/3 = 6. When y = 48, x = 48/6 = 8. The constant of proportionality (k = 6) remains the same. 🧮",
        wrongAnswerExplanations: {
            "6": "This would give y = 36, not 48.",
            "9": "This would give y = 54, not 48.",
            "12": "This would give y = 72, not 48."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch11_t1_qm10',
        type: "mcq",
        question: "A pump fills a tank in 8 hours. If three identical pumps work together, how long will they take to fill the same tank?",
        options: ["2⅔ hours", "3 hours", "4 hours", "2 hours"],
        correctAnswer: "2⅔ hours",
        explanation: "Time taken ∝ 1/(number of pumps). If 1 pump takes 8 hours, 3 pumps will take 8/3 = 2⅔ hours. Rate of filling triples, so time reduces to ⅓. 🚰",
        wrongAnswerExplanations: {
            "3 hours": "This is more than the proportional time needed.",
            "4 hours": "This is much more than the proportional time needed.",
            "2 hours": "This is less than the proportional time needed."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl8_ch11_t1_qm11',
        type: "mcq",
        question: "The cost of 5 kg of apples is ₹300. Using the same rate, what would be the cost of 7.5 kg?",
        options: ["₹450", "₹400", "₹425", "₹475"],
        correctAnswer: "₹450",
        explanation: "Cost ∝ weight. If 5 kg → ₹300, then 7.5 kg → (300 × 7.5) ÷ 5 = ₹450. The unit rate is ₹60 per kg. 🍎",
        wrongAnswerExplanations: {
            "₹400": "This would be for about 6.67 kg of apples.",
            "₹425": "This is less than the proportional cost.",
            "₹475": "This is more than the proportional cost."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch11_t1_qm12',
        type: "mcq",
        question: "If y ∝ x, which of these statements must be true?",
        options: [
            "y/x is constant for all non-zero values of x",
            "x - y is constant",
            "x + y is constant",
            "xy is constant"
        ],
        correctAnswer: "y/x is constant for all non-zero values of x",
        explanation: "In direct proportion, y = kx where k is constant. Therefore, y/x = k is constant for all non-zero x values. This is a key property of direct proportion. 📊",
        wrongAnswerExplanations: {
            "x - y is constant": "This would be true for a different type of relationship.",
            "x + y is constant": "This would mean x and y have inverse relationship plus a constant.",
            "xy is constant": "This would be true for inverse proportion."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch11_t1_qm13',
        type: "mcq",
        question: "A cyclist covers 36 km in 2 hours at constant speed. What distance will they cover in 3½ hours?",
        options: ["63 km", "60 km", "65 km", "58 km"],
        correctAnswer: "63 km",
        explanation: "Distance ∝ time at constant speed. If 2 hours → 36 km, then 3.5 hours → (36 × 3.5) ÷ 2 = 63 km. 🚲",
        wrongAnswerExplanations: {
            "60 km": "This would be for 3⅓ hours of cycling.",
            "65 km": "This is more than the proportional distance.",
            "58 km": "This is less than the proportional distance."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch11_t1_qm14',
        type: "mcq",
        question: "If 8 identical boxes weigh 20 kg, and you have 35 kg of the same type of boxes, how many boxes do you have?",
        options: ["14 boxes", "13 boxes", "15 boxes", "16 boxes"],
        correctAnswer: "14 boxes",
        explanation: "Number of boxes ∝ weight. If 8 boxes → 20 kg, then 35 kg → (8 × 35) ÷ 20 = 14 boxes. Each box weighs 2.5 kg. 📦",
        wrongAnswerExplanations: {
            "13 boxes": "This would weigh 32.5 kg, which is too little.",
            "15 boxes": "This would weigh 37.5 kg, which is too much.",
            "16 boxes": "This would weigh 40 kg, which is too much."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl8_ch11_t1_qm15',
        type: "mcq",
        question: "A photocopier makes 120 copies in 4 minutes. How many copies will it make in 15 minutes?",
        options: ["450 copies", "400 copies", "480 copies", "500 copies"],
        correctAnswer: "450 copies",
        explanation: "Number of copies ∝ time. If 4 minutes → 120 copies, then 15 minutes → (120 × 15) ÷ 4 = 450 copies. The rate is 30 copies per minute. 📄",
        wrongAnswerExplanations: {
            "400 copies": "This would be for about 13.3 minutes.",
            "480 copies": "This would be for 16 minutes.",
            "500 copies": "This would be for about 16.7 minutes."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch11_t1_qm16',
        type: "mcq",
        question: "If the radius of a sphere is tripled, by what factor does its surface area increase?",
        options: ["9 times", "3 times", "6 times", "27 times"],
        correctAnswer: "9 times",
        explanation: "Surface area of sphere ∝ r². If radius is tripled, surface area increases by 3² = 9 times. For example, if r = 2, SA = 16π; if r = 6, SA = 144π. 🔮",
        wrongAnswerExplanations: {
            "3 times": "This would be if surface area was directly proportional to radius.",
            "6 times": "This is not the correct proportional increase.",
            "27 times": "This is how much the volume increases, not the surface area."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl8_ch11_t1_qm17',
        type: "mcq",
        question: "A train travels 240 km at a constant speed of 80 km/h. How long will it take to travel 420 km at the same speed?",
        options: ["5¼ hours", "5 hours", "5½ hours", "4¾ hours"],
        correctAnswer: "5¼ hours",
        explanation: "Time ∝ distance at constant speed. If 240 km → 3 hours, then 420 km → (3 × 420) ÷ 240 = 5.25 = 5¼ hours. 🚂",
        wrongAnswerExplanations: {
            "5 hours": "This would only cover 400 km at 80 km/h.",
            "5½ hours": "This would cover 440 km at 80 km/h.",
            "4¾ hours": "This would only cover 380 km at 80 km/h."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl8_ch11_t1_qm18',
        type: "mcq",
        question: "In a factory, 12 machines produce 300 items per day. How many machines are needed to produce 475 items per day?",
        options: ["19 machines", "18 machines", "20 machines", "17 machines"],
        correctAnswer: "19 machines",
        explanation: "Number of machines ∝ items produced. If 12 machines → 300 items, then for 475 items → (12 × 475) ÷ 300 = 19 machines. 🏭",
        wrongAnswerExplanations: {
            "18 machines": "This would only produce about 450 items per day.",
            "20 machines": "This would produce 500 items per day, which is too many.",
            "17 machines": "This would only produce about 425 items per day."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch11_t1_qm19',
        type: "mcq",
        question: "If y ∝ x and y = 40 when x = 8, what is the value of y when x = 12?",
        options: ["60", "55", "65", "50"],
        correctAnswer: "60",
        explanation: "Since y ∝ x, y = kx where k = 40/8 = 5. When x = 12, y = 5 × 12 = 60. The constant of proportionality (k = 5) remains the same. 🧮",
        wrongAnswerExplanations: {
            "55": "This is not the correct proportional value.",
            "65": "This is more than the proportional value.",
            "50": "This is less than the proportional value."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl8_ch11_t1_qm20',
        type: "mcq",
        question: "A water tank fills at a constant rate of 25 liters per minute. If it takes 12 minutes to fill the tank, how long will it take to fill ⅔ of the tank?",
        options: ["8 minutes", "7 minutes", "9 minutes", "10 minutes"],
        correctAnswer: "8 minutes",
        explanation: "Time ∝ volume to be filled. If whole tank (12 min) = 300L, then ⅔ tank = 200L. Time needed = (12 × ⅔) = 8 minutes. 🚰",
        wrongAnswerExplanations: {
            "7 minutes": "This would only fill about 58% of the tank.",
            "9 minutes": "This would fill about 75% of the tank.",
            "10 minutes": "This would fill about 83% of the tank."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    }
]; 