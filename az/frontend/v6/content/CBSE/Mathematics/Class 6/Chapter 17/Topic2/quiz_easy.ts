import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl6_ch17_t2_qe1',
        type: "mcq",
        question: "How many milliliters are in 1 liter?",
        options: ["10", "100", "1000", "10000"],
        correctAnswer: "1000",
        explanation: "1 liter = 1000 milliliters. This is a basic conversion in the metric system. 📏",
        wrongAnswerExplanations: {
            "10": "This is too small. Remember, 1 liter is 1000 milliliters.",
            "100": "This is too small. Remember, 1 liter is 1000 milliliters.",
            "10000": "This is too large. Remember, 1 liter is 1000 milliliters."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch17_t2_qe2',
        type: "mcq",
        question: "If a recipe needs 2 cups of flour for 4 servings, how much flour is needed for 2 servings?",
        options: ["1/2 cup", "1 cup", "1.5 cups", "2 cups"],
        correctAnswer: "1 cup",
        explanation: "For 2 servings (half of 4), we need half of 2 cups = 1 cup. This is basic recipe scaling. 🥄",
        wrongAnswerExplanations: {
            "1/2 cup": "This would be for 1 serving, not 2.",
            "1.5 cups": "This is more than needed for 2 servings.",
            "2 cups": "This is the amount for 4 servings, not 2."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch17_t2_qe3',
        type: "mcq",
        question: "How many teaspoons are in 1 tablespoon?",
        options: ["2", "3", "4", "5"],
        correctAnswer: "3",
        explanation: "1 tablespoon = 3 teaspoons. This is a standard kitchen measurement conversion. 🥄",
        wrongAnswerExplanations: {
            "2": "This is less than the correct amount. 1 tablespoon equals 3 teaspoons.",
            "4": "This is more than the correct amount. 1 tablespoon equals 3 teaspoons.",
            "5": "This is more than the correct amount. 1 tablespoon equals 3 teaspoons."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch17_t2_qe4',
        type: "mcq",
        question: "Convert 500 grams to kilograms.",
        options: ["0.05 kg", "0.5 kg", "5 kg", "50 kg"],
        correctAnswer: "0.5 kg",
        explanation: "500 grams = 0.5 kilograms (500 ÷ 1000). This is a basic metric conversion. ⚖️",
        wrongAnswerExplanations: {
            "0.05 kg": "This would be 50 grams, not 500 grams.",
            "5 kg": "This would be 5000 grams, not 500 grams.",
            "50 kg": "This would be 50000 grams, not 500 grams."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch17_t2_qe5',
        type: "mcq",
        question: "If a recipe calls for 1/2 cup of sugar, how many tablespoons is that?",
        options: ["4", "6", "8", "10"],
        correctAnswer: "8",
        explanation: "1/2 cup = 8 tablespoons. This is a standard kitchen measurement conversion. 🥄",
        wrongAnswerExplanations: {
            "4": "This would be 1/4 cup, not 1/2 cup.",
            "6": "This is not a standard conversion for 1/2 cup.",
            "10": "This is more than 1/2 cup."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch17_t2_qe6',
        type: "mcq",
        question: "How many grams are in 1 kilogram?",
        options: ["10", "100", "1000", "10000"],
        correctAnswer: "1000",
        explanation: "1 kilogram = 1000 grams. This is a basic metric conversion. ⚖️",
        wrongAnswerExplanations: {
            "10": "This is too small. Remember, 1 kilogram is 1000 grams.",
            "100": "This is too small. Remember, 1 kilogram is 1000 grams.",
            "10000": "This is too large. Remember, 1 kilogram is 1000 grams."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch17_t2_qe7',
        type: "mcq",
        question: "If a recipe needs 3 cups of milk for 6 servings, how much milk is needed for 2 servings?",
        options: ["1 cup", "1.5 cups", "2 cups", "2.5 cups"],
        correctAnswer: "1 cup",
        explanation: "For 2 servings (1/3 of 6), we need 1/3 of 3 cups = 1 cup. This is basic recipe scaling. 🥛",
        wrongAnswerExplanations: {
            "1.5 cups": "This would be for 3 servings, not 2.",
            "2 cups": "This is more than needed for 2 servings.",
            "2.5 cups": "This is more than needed for 2 servings."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch17_t2_qe8',
        type: "mcq",
        question: "How many tablespoons are in 1/4 cup?",
        options: ["2", "3", "4", "5"],
        correctAnswer: "4",
        explanation: "1/4 cup = 4 tablespoons. This is a standard kitchen measurement conversion. 🥄",
        wrongAnswerExplanations: {
            "2": "This would be 1/8 cup, not 1/4 cup.",
            "3": "This is not a standard conversion for 1/4 cup.",
            "5": "This is more than 1/4 cup."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch17_t2_qe9',
        type: "mcq",
        question: "Convert 750 milliliters to liters.",
        options: ["0.075 l", "0.75 l", "7.5 l", "75 l"],
        correctAnswer: "0.75 l",
        explanation: "750 ml = 0.75 liters (750 ÷ 1000). This is a basic metric conversion. 📏",
        wrongAnswerExplanations: {
            "0.075 l": "This would be 75 ml, not 750 ml.",
            "7.5 l": "This would be 7500 ml, not 750 ml.",
            "75 l": "This would be 75000 ml, not 750 ml."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch17_t2_qe10',
        type: "mcq",
        question: "If a recipe calls for 2 tablespoons of butter, how many teaspoons is that?",
        options: ["4", "6", "8", "10"],
        correctAnswer: "6",
        explanation: "2 tablespoons = 6 teaspoons (2 × 3). This is a standard kitchen measurement conversion. 🥄",
        wrongAnswerExplanations: {
            "4": "This would be 1 tablespoon and 1 teaspoon.",
            "8": "This is more than 2 tablespoons.",
            "10": "This is more than 2 tablespoons."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch17_t2_qe11',
        type: "mcq",
        question: "How many cups are in 1 liter?",
        options: ["2", "4", "6", "8"],
        correctAnswer: "4",
        explanation: "1 liter ≈ 4 cups. This is a standard kitchen measurement conversion. 🥤",
        wrongAnswerExplanations: {
            "2": "This is less than 1 liter.",
            "6": "This is more than 1 liter.",
            "8": "This is more than 1 liter."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch17_t2_qe12',
        type: "mcq",
        question: "If a recipe needs 1.5 kg of flour for 10 servings, how much flour is needed for 5 servings?",
        options: ["0.5 kg", "0.75 kg", "1 kg", "1.25 kg"],
        correctAnswer: "0.75 kg",
        explanation: "For 5 servings (half of 10), we need half of 1.5 kg = 0.75 kg. This is basic recipe scaling. 🥖",
        wrongAnswerExplanations: {
            "0.5 kg": "This is less than half of 1.5 kg.",
            "1 kg": "This is more than half of 1.5 kg.",
            "1.25 kg": "This is more than half of 1.5 kg."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch17_t2_qe13',
        type: "mcq",
        question: "How many milliliters are in 2.5 liters?",
        options: ["250", "2500", "25000", "250000"],
        correctAnswer: "2500",
        explanation: "2.5 liters = 2500 milliliters (2.5 × 1000). This is a basic metric conversion. 📏",
        wrongAnswerExplanations: {
            "250": "This would be 0.25 liters, not 2.5 liters.",
            "25000": "This would be 25 liters, not 2.5 liters.",
            "250000": "This would be 250 liters, not 2.5 liters."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch17_t2_qe14',
        type: "mcq",
        question: "If a recipe calls for 1/3 cup of milk, how many tablespoons is that approximately?",
        options: ["4", "5", "6", "7"],
        correctAnswer: "5",
        explanation: "1/3 cup ≈ 5 tablespoons + 1 teaspoon. This is a standard kitchen measurement conversion. 🥛",
        wrongAnswerExplanations: {
            "4": "This would be 1/4 cup, not 1/3 cup.",
            "6": "This would be more than 1/3 cup.",
            "7": "This would be more than 1/3 cup."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch17_t2_qe15',
        type: "mcq",
        question: "Convert 2000 grams to kilograms.",
        options: ["0.2 kg", "2 kg", "20 kg", "200 kg"],
        correctAnswer: "2 kg",
        explanation: "2000 grams = 2 kilograms (2000 ÷ 1000). This is a basic metric conversion. ⚖️",
        wrongAnswerExplanations: {
            "0.2 kg": "This would be 200 grams, not 2000 grams.",
            "20 kg": "This would be 20000 grams, not 2000 grams.",
            "200 kg": "This would be 200000 grams, not 2000 grams."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch17_t2_qe16',
        type: "mcq",
        question: "If a recipe needs 4 eggs for 8 servings, how many eggs are needed for 2 servings?",
        options: ["1", "2", "3", "4"],
        correctAnswer: "1",
        explanation: "For 2 servings (1/4 of 8), we need 1/4 of 4 eggs = 1 egg. This is basic recipe scaling. 🥚",
        wrongAnswerExplanations: {
            "2": "This would be for 4 servings, not 2.",
            "3": "This would be for 6 servings, not 2.",
            "4": "This is the amount for 8 servings, not 2."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch17_t2_qe17',
        type: "mcq",
        question: "How many teaspoons are in 4 tablespoons?",
        options: ["8", "10", "12", "14"],
        correctAnswer: "12",
        explanation: "4 tablespoons = 12 teaspoons (4 × 3). This is a standard kitchen measurement conversion. 🥄",
        wrongAnswerExplanations: {
            "8": "This would be less than 4 tablespoons.",
            "10": "This is not a standard conversion for 4 tablespoons.",
            "14": "This is more than 4 tablespoons."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch17_t2_qe18',
        type: "mcq",
        question: "Convert 1.5 liters to milliliters.",
        options: ["150", "1500", "15000", "150000"],
        correctAnswer: "1500",
        explanation: "1.5 liters = 1500 milliliters (1.5 × 1000). This is a basic metric conversion. 📏",
        wrongAnswerExplanations: {
            "150": "This would be 0.15 liters, not 1.5 liters.",
            "15000": "This would be 15 liters, not 1.5 liters.",
            "150000": "This would be 150 liters, not 1.5 liters."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch17_t2_qe19',
        type: "mcq",
        question: "If a recipe calls for 3/4 cup of sugar, how many tablespoons is that?",
        options: ["8", "10", "12", "14"],
        correctAnswer: "12",
        explanation: "3/4 cup = 12 tablespoons. This is a standard kitchen measurement conversion. 🥄",
        wrongAnswerExplanations: {
            "8": "This would be 1/2 cup, not 3/4 cup.",
            "10": "This is not a standard conversion for 3/4 cup.",
            "14": "This is more than 3/4 cup."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch17_t2_qe20',
        type: "mcq",
        question: "How many grams are in 0.5 kilograms?",
        options: ["50", "500", "5000", "50000"],
        correctAnswer: "500",
        explanation: "0.5 kilograms = 500 grams (0.5 × 1000). This is a basic metric conversion. ⚖️",
        wrongAnswerExplanations: {
            "50": "This would be 0.05 kg, not 0.5 kg.",
            "5000": "This would be 5 kg, not 0.5 kg.",
            "50000": "This would be 50 kg, not 0.5 kg."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    }
]; 