import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl6_ch17_t2_qm1',
        type: "mcq",
        question: "A recipe needs 2.5 cups of flour for 5 servings. If you want to make 8 servings, how much flour is needed?",
        options: ["3 cups", "3.5 cups", "4 cups", "4.5 cups"],
        correctAnswer: "4 cups",
        explanation: "For 8 servings (1.6 times 5), we need 1.6 × 2.5 cups = 4 cups. This involves decimal multiplication in recipe scaling. 🥖",
        wrongAnswerExplanations: {
            "3 cups": "This would be for 6 servings, not 8.",
            "3.5 cups": "This would be for 7 servings, not 8.",
            "4.5 cups": "This is more than needed for 8 servings."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch17_t2_qm2',
        type: "mcq",
        question: "If a recipe calls for 1.25 kg of sugar and you only have a 500g measuring cup, how many times should you fill the cup?",
        options: ["2", "2.5", "3", "3.5"],
        correctAnswer: "2.5",
        explanation: "1.25 kg = 1250g. 1250g ÷ 500g = 2.5 times. This involves converting between units and division. ⚖️",
        wrongAnswerExplanations: {
            "2": "This would give 1000g, which is less than needed.",
            "3": "This would give 1500g, which is more than needed.",
            "3.5": "This would give 1750g, which is more than needed."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch17_t2_qm3',
        type: "mcq",
        question: "A recipe needs 3/4 cup of milk and 1/3 cup of water. What is the total liquid in tablespoons?",
        options: ["12", "13", "14", "15"],
        correctAnswer: "13",
        explanation: "3/4 cup = 12 tbsp, 1/3 cup ≈ 5 tbsp + 1 tsp. Total ≈ 13 tbsp. This involves fraction conversions. 🥛",
        wrongAnswerExplanations: {
            "12": "This is just the milk, not including water.",
            "14": "This is more than the total amount.",
            "15": "This is more than the total amount."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch17_t2_qm4',
        type: "mcq",
        question: "If a cake recipe needs 180°C oven temperature, what is this in Fahrenheit?",
        options: ["350°F", "356°F", "360°F", "365°F"],
        correctAnswer: "356°F",
        explanation: "(180 × 9/5) + 32 = 356°F. This is temperature conversion using the formula. 🌡️",
        wrongAnswerExplanations: {
            "350°F": "This is approximately 177°C, not 180°C.",
            "360°F": "This is approximately 182°C, not 180°C.",
            "365°F": "This is approximately 185°C, not 180°C."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch17_t2_qm5',
        type: "mcq",
        question: "A recipe needs 2.5 liters of water for 10 servings. How many milliliters are needed for 4 servings?",
        options: ["500 ml", "750 ml", "1000 ml", "1250 ml"],
        correctAnswer: "1000 ml",
        explanation: "For 4 servings (2/5 of 10), we need 2/5 of 2.5 liters = 1 liter = 1000 ml. This involves fraction and unit conversion. 💧",
        wrongAnswerExplanations: {
            "500 ml": "This would be for 2 servings, not 4.",
            "750 ml": "This would be for 3 servings, not 4.",
            "1250 ml": "This would be for 5 servings, not 4."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch17_t2_qm6',
        type: "mcq",
        question: "If a recipe needs 1.2 kg of flour and you only have a 250g measuring cup, how many times should you fill the cup?",
        options: ["4", "4.5", "4.8", "5"],
        correctAnswer: "4.8",
        explanation: "1.2 kg = 1200g. 1200g ÷ 250g = 4.8 times. This involves decimal division in measurement. 🥖",
        wrongAnswerExplanations: {
            "4": "This would give 1000g, which is less than needed.",
            "4.5": "This would give 1125g, which is less than needed.",
            "5": "This would give 1250g, which is more than needed."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch17_t2_qm7',
        type: "mcq",
        question: "A recipe needs 3/4 cup of sugar and 1/2 cup of flour. What is the total in tablespoons?",
        options: ["18", "20", "22", "24"],
        correctAnswer: "20",
        explanation: "3/4 cup = 12 tbsp, 1/2 cup = 8 tbsp. Total = 20 tbsp. This involves fraction conversions. 🥄",
        wrongAnswerExplanations: {
            "18": "This is less than the total amount.",
            "22": "This is more than the total amount.",
            "24": "This is more than the total amount."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch17_t2_qm8',
        type: "mcq",
        question: "If a recipe needs 200°C oven temperature, what is this in Fahrenheit?",
        options: ["390°F", "392°F", "394°F", "396°F"],
        correctAnswer: "392°F",
        explanation: "(200 × 9/5) + 32 = 392°F. This is temperature conversion using the formula. 🌡️",
        wrongAnswerExplanations: {
            "390°F": "This is approximately 199°C, not 200°C.",
            "394°F": "This is approximately 201°C, not 200°C.",
            "396°F": "This is approximately 202°C, not 200°C."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch17_t2_qm9',
        type: "mcq",
        question: "A recipe needs 1.8 liters of milk for 6 servings. How many milliliters are needed for 5 servings?",
        options: ["1200 ml", "1300 ml", "1400 ml", "1500 ml"],
        correctAnswer: "1500 ml",
        explanation: "For 5 servings (5/6 of 6), we need 5/6 of 1.8 liters = 1.5 liters = 1500 ml. This involves fraction and unit conversion. 🥛",
        wrongAnswerExplanations: {
            "1200 ml": "This would be for 4 servings, not 5.",
            "1300 ml": "This is not the correct amount for 5 servings.",
            "1400 ml": "This is not the correct amount for 5 servings."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch17_t2_qm10',
        type: "mcq",
        question: "If a recipe needs 0.75 kg of sugar and you only have a 200g measuring cup, how many times should you fill the cup?",
        options: ["3", "3.5", "3.75", "4"],
        correctAnswer: "3.75",
        explanation: "0.75 kg = 750g. 750g ÷ 200g = 3.75 times. This involves decimal division in measurement. 🥄",
        wrongAnswerExplanations: {
            "3": "This would give 600g, which is less than needed.",
            "3.5": "This would give 700g, which is less than needed.",
            "4": "This would give 800g, which is more than needed."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch17_t2_qm11',
        type: "mcq",
        question: "A recipe needs 2/3 cup of oil and 1/4 cup of vinegar. What is the total in tablespoons?",
        options: ["10", "11", "12", "13"],
        correctAnswer: "11",
        explanation: "2/3 cup ≈ 10 tbsp + 2 tsp, 1/4 cup = 4 tbsp. Total ≈ 11 tbsp. This involves fraction conversions. 🥄",
        wrongAnswerExplanations: {
            "10": "This is just the oil, not including vinegar.",
            "12": "This is more than the total amount.",
            "13": "This is more than the total amount."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch17_t2_qm12',
        type: "mcq",
        question: "If a recipe needs 160°C oven temperature, what is this in Fahrenheit?",
        options: ["320°F", "322°F", "324°F", "326°F"],
        correctAnswer: "320°F",
        explanation: "(160 × 9/5) + 32 = 320°F. This is temperature conversion using the formula. 🌡️",
        wrongAnswerExplanations: {
            "322°F": "This is approximately 161°C, not 160°C.",
            "324°F": "This is approximately 162°C, not 160°C.",
            "326°F": "This is approximately 163°C, not 160°C."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch17_t2_qm13',
        type: "mcq",
        question: "A recipe needs 2.4 liters of water for 8 servings. How many milliliters are needed for 3 servings?",
        options: ["600 ml", "700 ml", "800 ml", "900 ml"],
        correctAnswer: "900 ml",
        explanation: "For 3 servings (3/8 of 8), we need 3/8 of 2.4 liters = 0.9 liters = 900 ml. This involves fraction and unit conversion. 💧",
        wrongAnswerExplanations: {
            "600 ml": "This would be for 2 servings, not 3.",
            "700 ml": "This is not the correct amount for 3 servings.",
            "800 ml": "This is not the correct amount for 3 servings."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch17_t2_qm14',
        type: "mcq",
        question: "If a recipe needs 1.5 kg of flour and you only have a 300g measuring cup, how many times should you fill the cup?",
        options: ["4", "4.5", "5", "5.5"],
        correctAnswer: "5",
        explanation: "1.5 kg = 1500g. 1500g ÷ 300g = 5 times. This involves unit conversion and division. 🥖",
        wrongAnswerExplanations: {
            "4": "This would give 1200g, which is less than needed.",
            "4.5": "This would give 1350g, which is less than needed.",
            "5.5": "This would give 1650g, which is more than needed."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch17_t2_qm15',
        type: "mcq",
        question: "A recipe needs 5/8 cup of milk and 1/3 cup of cream. What is the total in tablespoons?",
        options: ["12", "13", "14", "15"],
        correctAnswer: "14",
        explanation: "5/8 cup = 10 tbsp, 1/3 cup ≈ 5 tbsp + 1 tsp. Total ≈ 14 tbsp. This involves fraction conversions. 🥛",
        wrongAnswerExplanations: {
            "12": "This is less than the total amount.",
            "13": "This is less than the total amount.",
            "15": "This is more than the total amount."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch17_t2_qm16',
        type: "mcq",
        question: "If a recipe needs 170°C oven temperature, what is this in Fahrenheit?",
        options: ["338°F", "340°F", "342°F", "344°F"],
        correctAnswer: "338°F",
        explanation: "(170 × 9/5) + 32 = 338°F. This is temperature conversion using the formula. 🌡️",
        wrongAnswerExplanations: {
            "340°F": "This is approximately 171°C, not 170°C.",
            "342°F": "This is approximately 172°C, not 170°C.",
            "344°F": "This is approximately 173°C, not 170°C."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch17_t2_qm17',
        type: "mcq",
        question: "A recipe needs 3.6 liters of water for 12 servings. How many milliliters are needed for 5 servings?",
        options: ["1200 ml", "1300 ml", "1400 ml", "1500 ml"],
        correctAnswer: "1500 ml",
        explanation: "For 5 servings (5/12 of 12), we need 5/12 of 3.6 liters = 1.5 liters = 1500 ml. This involves fraction and unit conversion. 💧",
        wrongAnswerExplanations: {
            "1200 ml": "This would be for 4 servings, not 5.",
            "1300 ml": "This is not the correct amount for 5 servings.",
            "1400 ml": "This is not the correct amount for 5 servings."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch17_t2_qm18',
        type: "mcq",
        question: "If a recipe needs 2.1 kg of sugar and you only have a 400g measuring cup, how many times should you fill the cup?",
        options: ["4", "4.5", "5", "5.25"],
        correctAnswer: "5.25",
        explanation: "2.1 kg = 2100g. 2100g ÷ 400g = 5.25 times. This involves decimal division in measurement. 🥄",
        wrongAnswerExplanations: {
            "4": "This would give 1600g, which is less than needed.",
            "4.5": "This would give 1800g, which is less than needed.",
            "5": "This would give 2000g, which is less than needed."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch17_t2_qm19',
        type: "mcq",
        question: "A recipe needs 7/8 cup of flour and 1/2 cup of sugar. What is the total in tablespoons?",
        options: ["20", "22", "24", "26"],
        correctAnswer: "22",
        explanation: "7/8 cup = 14 tbsp, 1/2 cup = 8 tbsp. Total = 22 tbsp. This involves fraction conversions. 🥄",
        wrongAnswerExplanations: {
            "20": "This is less than the total amount.",
            "24": "This is more than the total amount.",
            "26": "This is more than the total amount."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch17_t2_qm20',
        type: "mcq",
        question: "If a recipe needs 190°C oven temperature, what is this in Fahrenheit?",
        options: ["374°F", "376°F", "378°F", "380°F"],
        correctAnswer: "374°F",
        explanation: "(190 × 9/5) + 32 = 374°F. This is temperature conversion using the formula. 🌡️",
        wrongAnswerExplanations: {
            "376°F": "This is approximately 191°C, not 190°C.",
            "378°F": "This is approximately 192°C, not 190°C.",
            "380°F": "This is approximately 193°C, not 190°C."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    }
]; 