import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl4_ch12_t2_qe1',
        type: "mcq",
        question: "Which unit is used to measure the weight of a pencil?",
        options: ["Kilogram", "Gram", "Meter", "Liter"],
        correctAnswer: "Gram",
        explanation: "A pencil is lightweight, so we use grams to measure its weight. Grams are used for measuring small objects.",
        wrongAnswerExplanations: {
            "Kilogram": "Kilogram is for heavier objects like a watermelon or a schoolbag.",
            "Meter": "Meter is a unit of length, not weight.",
            "Liter": "Liter is a unit of volume or capacity, not weight."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch12_t2_qe2',
        type: "mcq",
        question: "How many grams are equal to 1 kilogram?",
        options: ["10 grams", "100 grams", "1000 grams", "10000 grams"],
        correctAnswer: "1000 grams",
        explanation: "1 kilogram = 1000 grams. This is the standard conversion between kilograms and grams.",
        wrongAnswerExplanations: {
            "10 grams": "This is incorrect. 1 kilogram is much larger than 10 grams.",
            "100 grams": "This is incorrect. 1 kilogram is equal to 1000 grams, not 100.",
            "10000 grams": "This is incorrect. 1 kilogram equals 1000 grams, not 10000."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch12_t2_qe3',
        type: "mcq",
        question: "Which of the following objects would likely weigh 1 kilogram?",
        options: ["A paper clip", "An apple 🍎", "A car 🚗", "An elephant 🐘"],
        correctAnswer: "An apple 🍎",
        explanation: "An apple typically weighs close to 1 kilogram. This is a good reference for understanding what 1 kg feels like.",
        wrongAnswerExplanations: {
            "A paper clip": "A paper clip is very light and weighs only a few grams, not a kilogram.",
            "A car 🚗": "A car is extremely heavy, weighing hundreds or thousands of kilograms.",
            "An elephant 🐘": "An elephant weighs thousands of kilograms, much more than 1 kg."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch12_t2_qe4',
        type: "mcq",
        question: "What do we use to measure weight?",
        options: ["Ruler", "Clock", "Weighing scale ⚖️", "Thermometer"],
        correctAnswer: "Weighing scale ⚖️",
        explanation: "A weighing scale is used to measure the weight of objects. Different types of scales are used for different weights.",
        wrongAnswerExplanations: {
            "Ruler": "A ruler measures length or distance, not weight.",
            "Clock": "A clock measures time, not weight.",
            "Thermometer": "A thermometer measures temperature, not weight."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch12_t2_qe5',
        type: "mcq",
        question: "Which weighs more?",
        options: ["1 kilogram of cotton", "1 kilogram of iron", "Both weigh the same", "Cannot be determined"],
        correctAnswer: "Both weigh the same",
        explanation: "Both weigh exactly 1 kilogram. The weight is the same, though the volume (space they take) is different.",
        wrongAnswerExplanations: {
            "1 kilogram of cotton": "This is incorrect. Both have exactly the same weight of 1 kg.",
            "1 kilogram of iron": "This is incorrect. Both have exactly the same weight of 1 kg.",
            "Cannot be determined": "This is incorrect. We can determine they weigh the same as they're both 1 kg."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch12_t2_qe6',
        type: "mcq",
        question: "2 kilograms 500 grams is equal to how many grams?",
        options: ["250 grams", "2050 grams", "2500 grams", "25000 grams"],
        correctAnswer: "2500 grams",
        explanation: "2 kg = 2000 g, and 500 g more makes 2500 g total. Converting kg to g means multiplying by 1000.",
        wrongAnswerExplanations: {
            "250 grams": "This is too small. 2 kg alone equals 2000 g.",
            "2050 grams": "This is incorrect. 2 kg = 2000 g, plus 500 g equals 2500 g.",
            "25000 grams": "This is too large. 2 kg = 2000 g, plus 500 g equals 2500 g."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch12_t2_qe7',
        type: "mcq",
        question: "Which of these would you measure in kilograms?",
        options: ["Weight of a button", "Weight of a paperclip", "Weight of a watermelon 🍉", "Weight of a feather"],
        correctAnswer: "Weight of a watermelon 🍉",
        explanation: "A watermelon is heavy enough to be measured in kilograms. Small items are measured in grams.",
        wrongAnswerExplanations: {
            "Weight of a button": "A button is very light and would be measured in grams, not kilograms.",
            "Weight of a paperclip": "A paperclip is very light and would be measured in grams, not kilograms.",
            "Weight of a feather": "A feather is extremely light and would be measured in grams, not kilograms."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch12_t2_qe8',
        type: "mcq",
        question: "How many 500-gram packets of sugar make 2 kilograms?",
        options: ["2 packets", "4 packets", "5 packets", "20 packets"],
        correctAnswer: "4 packets",
        explanation: "2 kg = 2000 g. Since each packet is 500 g, we need 2000 ÷ 500 = 4 packets to make 2 kg.",
        wrongAnswerExplanations: {
            "2 packets": "2 packets of 500 g each would be only 1000 g or 1 kg.",
            "5 packets": "5 packets of 500 g each would be 2500 g or 2.5 kg, which is too much.",
            "20 packets": "20 packets of 500 g each would be 10000 g or 10 kg, which is much too heavy."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch12_t2_qe9',
        type: "mcq",
        question: "Which of these units is NOT used for measuring weight?",
        options: ["Kilogram", "Gram", "Liter", "Milligram"],
        correctAnswer: "Liter",
        explanation: "Liter is a unit for measuring capacity or volume, not weight. Kilogram, gram, and milligram are all weight units.",
        wrongAnswerExplanations: {
            "Kilogram": "Kilogram is a standard unit of weight measurement.",
            "Gram": "Gram is a standard unit of weight measurement.",
            "Milligram": "Milligram is a standard unit of weight measurement for very small weights."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch12_t2_qe10',
        type: "mcq",
        question: "Which of these is the lightest?",
        options: ["1 kilogram", "100 grams", "1000 grams", "1200 grams"],
        correctAnswer: "100 grams",
        explanation: "100 grams is the lightest. 1 kg = 1000 g, so 100 g is less than 1 kg, 1000 g, and 1200 g.",
        wrongAnswerExplanations: {
            "1 kilogram": "1 kilogram equals 1000 grams, which is heavier than 100 grams.",
            "1000 grams": "1000 grams equals 1 kilogram, which is heavier than 100 grams.",
            "1200 grams": "1200 grams is more than 1 kilogram, so it's heavier than 100 grams."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch12_t2_qe11',
        type: "mcq",
        question: "A bag of flour weighs 2 kg 250 g. A bag of sugar weighs 1 kg 750 g. How much do they weigh together?",
        options: ["3 kg", "4 kg", "3 kg 500 g", "4 kg 500 g"],
        correctAnswer: "4 kg",
        explanation: "2 kg 250 g + 1 kg 750 g = 3 kg + 1000 g = 4 kg. The grams add up: 250 g + 750 g = 1000 g = 1 kg.",
        wrongAnswerExplanations: {
            "3 kg": "This is too low. We need to add both the kg and g parts.",
            "3 kg 500 g": "This is incorrect. 250 g + 750 g = 1000 g, not 500 g.",
            "4 kg 500 g": "This is too high. 250 g + 750 g = 1000 g = 1 kg, so the total is 3 kg + 1 kg = 4 kg."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch12_t2_qe12',
        type: "mcq",
        question: "What is 3500 grams equal to?",
        options: ["35 kg", "3 kg 500 g", "350 kg", "35000 kg"],
        correctAnswer: "3 kg 500 g",
        explanation: "3500 g = 3 kg 500 g. Since 1 kg = 1000 g, we divide 3500 by 1000 to get 3.5 kg or 3 kg 500 g.",
        wrongAnswerExplanations: {
            "35 kg": "This is too large. 35 kg = 35000 g, not 3500 g.",
            "350 kg": "This is much too large. 350 kg = 350000 g, not 3500 g.",
            "35000 kg": "This is far too large. 35000 kg = 35000000 g, not 3500 g."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch12_t2_qe13',
        type: "mcq",
        question: "A toy car weighs 250 grams. How many such toy cars would weigh 1 kilogram?",
        options: ["2 toy cars", "4 toy cars", "10 toy cars", "25 toy cars"],
        correctAnswer: "4 toy cars",
        explanation: "1 kg = 1000 g. Each toy car weighs 250 g. So, 1000 ÷ 250 = 4 toy cars to make 1 kg.",
        wrongAnswerExplanations: {
            "2 toy cars": "2 toy cars would weigh 2 × 250 g = 500 g, which is only half a kilogram.",
            "10 toy cars": "10 toy cars would weigh 10 × 250 g = 2500 g, which is 2.5 kg.",
            "25 toy cars": "25 toy cars would weigh 25 × 250 g = 6250 g, which is 6.25 kg."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch12_t2_qe14',
        type: "mcq",
        question: "Which of these would be the best unit to measure the weight of an eraser?",
        options: ["Kilogram", "Gram", "Ton", "Quintal"],
        correctAnswer: "Gram",
        explanation: "An eraser is light, so grams is the most appropriate unit. Kilograms, tons, and quintals are for much heavier objects.",
        wrongAnswerExplanations: {
            "Kilogram": "A kilogram is too large for an eraser, which is very light.",
            "Ton": "A ton is an extremely large unit for weight, used for very heavy objects like cars or elephants.",
            "Quintal": "A quintal (100 kg) is much too large for measuring the weight of a small eraser."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch12_t2_qe15',
        type: "mcq",
        question: "What would a doctor use to measure your weight?",
        options: ["Ruler", "Weighing scale", "Measuring tape", "Thermometer"],
        correctAnswer: "Weighing scale",
        explanation: "A doctor uses a weighing scale to measure your weight. This helps monitor your growth and health.",
        wrongAnswerExplanations: {
            "Ruler": "A ruler measures length, not weight.",
            "Measuring tape": "A measuring tape is used for measuring length or distance, not weight.",
            "Thermometer": "A thermometer measures body temperature, not weight."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch12_t2_qe16',
        type: "mcq",
        question: "Which of these fruits would likely weigh around 100 grams?",
        options: ["Watermelon 🍉", "Apple 🍎", "Banana 🍌", "Grape 🍇"],
        correctAnswer: "Banana 🍌",
        explanation: "A medium-sized banana typically weighs about 100 grams. Apples are heavier, grapes lighter, and watermelons much heavier.",
        wrongAnswerExplanations: {
            "Watermelon 🍉": "A watermelon typically weighs several kilograms, much more than 100 grams.",
            "Apple 🍎": "An average apple weighs about 150-200 grams, which is more than 100 grams.",
            "Grape 🍇": "A single grape weighs only a few grams, much less than 100 grams."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch12_t2_qe17',
        type: "mcq",
        question: "Which weighs more: 1500 grams or 1 kilogram 700 grams?",
        options: ["1500 grams", "1 kilogram 700 grams", "Both weigh the same", "Cannot be determined"],
        correctAnswer: "1 kilogram 700 grams",
        explanation: "1 kg 700 g = 1700 g. Since 1700 g > 1500 g, 1 kilogram 700 grams weighs more.",
        wrongAnswerExplanations: {
            "1500 grams": "1500 g is less than 1 kg 700 g (which equals 1700 g).",
            "Both weigh the same": "They don't weigh the same. 1 kg 700 g (1700 g) is more than 1500 g.",
            "Cannot be determined": "We can determine this by converting to the same unit: 1 kg 700 g = 1700 g."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch12_t2_qe18',
        type: "mcq",
        question: "If 1 orange weighs about 150 grams, approximately how many oranges would make 1 kilogram?",
        options: ["About 3 oranges", "About 7 oranges", "About 10 oranges", "About 15 oranges"],
        correctAnswer: "About 7 oranges",
        explanation: "1 kg = 1000 g. Each orange weighs 150 g. So 1000 ÷ 150 ≈ 6.67, which is about 7 oranges.",
        wrongAnswerExplanations: {
            "About 3 oranges": "3 oranges would weigh only 3 × 150 g = 450 g, less than half a kilogram.",
            "About 10 oranges": "10 oranges would weigh 10 × 150 g = 1500 g, which is 1.5 kg.",
            "About 15 oranges": "15 oranges would weigh 15 × 150 g = 2250 g, which is 2.25 kg."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch12_t2_qe19',
        type: "mcq",
        question: "What unit would you use to measure the weight of a school bag?",
        options: ["Milligram", "Gram", "Kilogram", "Ton"],
        correctAnswer: "Kilogram",
        explanation: "A school bag typically weighs a few kilograms, making kilogram the most appropriate unit for measurement.",
        wrongAnswerExplanations: {
            "Milligram": "Milligrams are used for very tiny weights like medicine doses, too small for a school bag.",
            "Gram": "While possible, grams would give a very large number for a school bag, making kilograms more practical.",
            "Ton": "A ton is far too large for a school bag, as it equals 1000 kilograms."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch12_t2_qe20',
        type: "mcq",
        question: "The weight shown on a weighing scale is 5 kg 400 g. What is this weight in grams?",
        options: ["540 g", "5040 g", "5400 g", "54000 g"],
        correctAnswer: "5400 g",
        explanation: "5 kg = 5000 g. Adding 400 g gives 5400 g. To convert from kg to g, multiply by 1000.",
        wrongAnswerExplanations: {
            "540 g": "This is too small. 5 kg alone is 5000 g.",
            "5040 g": "This is incorrect. 5 kg = 5000 g, and 5000 g + 400 g = 5400 g.",
            "54000 g": "This is too large. 5 kg = 5000 g, not 50000 g."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    }
];
