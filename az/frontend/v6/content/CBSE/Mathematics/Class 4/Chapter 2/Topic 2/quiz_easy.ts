import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl4_ch2_t2_qe1',
        type: "mcq",
        question: "Which of these is longer than a meter?",
        options: ["A pencil", "A classroom", "A notebook", "A shoe"],
        correctAnswer: "A classroom",
        explanation: "A classroom is much longer than a meter, while the other items are typically shorter than a meter.",
        wrongAnswerExplanations: {
            "A pencil": "A pencil is usually about 15-20 cm long, which is less than a meter.",
            "A notebook": "A notebook is typically less than 30 cm long, which is less than a meter.",
            "A shoe": "A shoe is usually less than 30 cm long, which is less than a meter."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch2_t2_qe2',
        type: "mcq",
        question: "If Ravi is 125 cm tall and Sita is 130 cm tall, who is taller?",
        options: ["Ravi", "Sita", "Both are the same height", "Cannot be determined"],
        correctAnswer: "Sita",
        explanation: "Sita is 130 cm tall which is greater than Ravi's height of 125 cm. When comparing lengths, the larger number represents the greater length.",
        wrongAnswerExplanations: {
            "Ravi": "Ravi is 125 cm tall, which is less than Sita's height of 130 cm.",
            "Both are the same height": "The heights are different: Ravi is 125 cm and Sita is 130 cm.",
            "Cannot be determined": "We can determine the taller person by comparing their heights: 130 cm > 125 cm."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch2_t2_qe3',
        type: "mcq",
        question: "What is 250 cm equal to?",
        options: ["0.25 m", "2.5 m", "25 m", "0.025 m"],
        correctAnswer: "2.5 m",
        explanation: "To convert from cm to m, divide by 100. So, 250 cm ÷ 100 = 2.5 m.",
        wrongAnswerExplanations: {
            "0.25 m": "0.25 m = 25 cm, not 250 cm.",
            "25 m": "25 m = 2500 cm, not 250 cm.",
            "0.025 m": "0.025 m = 2.5 cm, not 250 cm."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch2_t2_qe4',
        type: "mcq",
        question: "Which of these is the best unit to measure the length of a pencil?",
        options: ["Kilometer", "Meter", "Centimeter", "Millimeter"],
        correctAnswer: "Centimeter",
        explanation: "A pencil is typically 15-20 cm long, making centimeter the most appropriate unit for measurement.",
        wrongAnswerExplanations: {
            "Kilometer": "A kilometer is much too large to measure a pencil (1 km = 1000 m).",
            "Meter": "A meter is too large for a pencil, which is typically less than 0.2 m long.",
            "Millimeter": "While millimeters could be used, centimeters are more convenient for measuring pencils."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch2_t2_qe5',
        type: "mcq",
        question: "If book A is 25 cm long and book B is 2 dm long, which book is longer?",
        options: ["Book A", "Book B", "Both are the same length", "Cannot be determined"],
        correctAnswer: "Book A",
        explanation: "2 dm = 20 cm. Since book A is 25 cm and book B is 20 cm, book A is longer.",
        wrongAnswerExplanations: {
            "Book B": "Book B is 2 dm = 20 cm, which is less than book A's 25 cm.",
            "Both are the same length": "The books have different lengths: A is 25 cm and B is 20 cm.",
            "Cannot be determined": "We can determine which is longer by converting to the same unit and comparing."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch2_t2_qe6',
        type: "mcq",
        question: "Which is the correct order of lengths from shortest to longest?",
        options: ["cm, m, km", "km, m, cm", "m, cm, km", "m, km, cm"],
        correctAnswer: "cm, m, km",
        explanation: "1 km = 1000 m and 1 m = 100 cm, so the correct order from shortest to longest is cm, m, km.",
        wrongAnswerExplanations: {
            "km, m, cm": "This is the order from longest to shortest, not shortest to longest.",
            "m, cm, km": "Centimeters (cm) are shorter than meters (m).",
            "m, km, cm": "This order is incorrect; centimeters are shorter than both meters and kilometers."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch2_t2_qe7',
        type: "mcq",
        question: "Rohan measured his height as 135 cm. What is his height in meters?",
        options: ["1.35 m", "13.5 m", "0.135 m", "135 m"],
        correctAnswer: "1.35 m",
        explanation: "To convert from cm to m, divide by 100. So, 135 cm ÷ 100 = 1.35 m.",
        wrongAnswerExplanations: {
            "13.5 m": "13.5 m = 1350 cm, not 135 cm.",
            "0.135 m": "0.135 m = 13.5 cm, not 135 cm.",
            "135 m": "135 m = 13500 cm, not 135 cm."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch2_t2_qe8',
        type: "mcq",
        question: "If a ribbon is 4 m 50 cm long, what is its length in centimeters?",
        options: ["4.5 cm", "45 cm", "450 cm", "4050 cm"],
        correctAnswer: "450 cm",
        explanation: "4 m = 400 cm. So 4 m 50 cm = 400 cm + 50 cm = 450 cm.",
        wrongAnswerExplanations: {
            "4.5 cm": "4.5 cm is much too short; 4 m alone equals 400 cm.",
            "45 cm": "45 cm is less than half a meter, not 4 m 50 cm.",
            "4050 cm": "This incorrectly converts 4 m as 4000 cm instead of 400 cm."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch2_t2_qe9',
        type: "mcq",
        question: "Which of these would you measure in kilometers?",
        options: ["Length of a pen", "Height of a door", "Length of a playground", "Distance between two cities"],
        correctAnswer: "Distance between two cities",
        explanation: "Kilometers are used for long distances, such as the distance between cities.",
        wrongAnswerExplanations: {
            "Length of a pen": "A pen is very small and would be measured in centimeters.",
            "Height of a door": "A door's height is usually measured in meters or centimeters.",
            "Length of a playground": "A playground might be measured in meters, though very large ones could use kilometers."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch2_t2_qe10',
        type: "mcq",
        question: "Which is longer: 1 meter or 95 centimeters?",
        options: ["1 meter", "95 centimeters", "Both are equal", "Cannot be determined"],
        correctAnswer: "1 meter",
        explanation: "1 meter = 100 centimeters, which is more than 95 centimeters.",
        wrongAnswerExplanations: {
            "95 centimeters": "95 centimeters is less than 1 meter (100 centimeters).",
            "Both are equal": "1 meter (100 cm) is longer than 95 centimeters.",
            "Cannot be determined": "We can determine by converting to the same unit: 1 m = 100 cm > 95 cm."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch2_t2_qe11',
        type: "mcq",
        question: "What is 3.5 m in centimeters?",
        options: ["35 cm", "350 cm", "3.5 cm", "3500 cm"],
        correctAnswer: "350 cm",
        explanation: "To convert from meters to centimeters, multiply by 100. So, 3.5 m × 100 = 350 cm.",
        wrongAnswerExplanations: {
            "35 cm": "35 cm = 0.35 m, not 3.5 m.",
            "3.5 cm": "3.5 cm = 0.035 m, not 3.5 m.",
            "3500 cm": "3500 cm = 35 m, not 3.5 m."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch2_t2_qe12',
        type: "mcq",
        question: "If Aman is 140 cm tall and his younger brother is 120 cm tall, how much taller is Aman?",
        options: ["20 cm", "2 m", "0.2 m", "2 cm"],
        correctAnswer: "20 cm",
        explanation: "Aman's height - brother's height = 140 cm - 120 cm = 20 cm.",
        wrongAnswerExplanations: {
            "2 m": "2 m = 200 cm, which is much more than the difference (20 cm).",
            "0.2 m": "0.2 m = 20 cm, which is correct, but the question asks for the answer in cm.",
            "2 cm": "2 cm is too small; the actual difference is 20 cm."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch2_t2_qe13',
        type: "mcq",
        question: "Which of these would you measure in millimeters?",
        options: ["Length of a football field", "Height of a person", "Thickness of a coin", "Distance between two towns"],
        correctAnswer: "Thickness of a coin",
        explanation: "Millimeters are used for very small measurements, like the thickness of a coin.",
        wrongAnswerExplanations: {
            "Length of a football field": "A football field would be measured in meters.",
            "Height of a person": "A person's height is usually measured in centimeters or meters.",
            "Distance between two towns": "The distance between towns would be measured in kilometers."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch2_t2_qe14',
        type: "mcq",
        question: "If a rope is 7 m long and another rope is 650 cm long, which rope is longer?",
        options: ["The 7 m rope", "The 650 cm rope", "Both are the same length", "Cannot be determined"],
        correctAnswer: "The 7 m rope",
        explanation: "7 m = 700 cm. Since 700 cm > 650 cm, the 7 m rope is longer.",
        wrongAnswerExplanations: {
            "The 650 cm rope": "650 cm = 6.5 m, which is less than 7 m.",
            "Both are the same length": "The ropes have different lengths: 7 m and 6.5 m.",
            "Cannot be determined": "We can determine which is longer by converting to the same unit and comparing."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch2_t2_qe15',
        type: "mcq",
        question: "How many centimeters are there in 2 meters?",
        options: ["20 cm", "200 cm", "2000 cm", "0.2 cm"],
        correctAnswer: "200 cm",
        explanation: "To convert from meters to centimeters, multiply by 100. So, 2 m × 100 = 200 cm.",
        wrongAnswerExplanations: {
            "20 cm": "20 cm = 0.2 m, not 2 m.",
            "2000 cm": "2000 cm = 20 m, not 2 m.",
            "0.2 cm": "0.2 cm = 0.002 m, not 2 m."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch2_t2_qe16',
        type: "mcq",
        question: "Meera's pencil is 15 cm long. Raj's pencil is 12 cm long. How much shorter is Raj's pencil?",
        options: ["3 cm", "3 mm", "0.3 m", "3 dm"],
        correctAnswer: "3 cm",
        explanation: "Meera's pencil - Raj's pencil = 15 cm - 12 cm = 3 cm.",
        wrongAnswerExplanations: {
            "3 mm": "3 mm = 0.3 cm, which is too small. The difference is 3 cm.",
            "0.3 m": "0.3 m = 30 cm, which is too large. The difference is 3 cm.",
            "3 dm": "3 dm = 30 cm, which is too large. The difference is 3 cm."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch2_t2_qe17',
        type: "mcq",
        question: "Which is shorter: 1 m or 90 cm?",
        options: ["1 m", "90 cm", "Both are equal", "Cannot be determined"],
        correctAnswer: "90 cm",
        explanation: "1 m = 100 cm. Since 90 cm < 100 cm, 90 cm is shorter.",
        wrongAnswerExplanations: {
            "1 m": "1 m = 100 cm, which is longer than 90 cm.",
            "Both are equal": "1 m (100 cm) is not equal to 90 cm.",
            "Cannot be determined": "We can determine by converting to the same unit: 1 m = 100 cm > 90 cm."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch2_t2_qe18',
        type: "mcq",
        question: "Which of these shows lengths in increasing order?",
        options: ["5 cm, 5 m, 5 km", "5 km, 5 m, 5 cm", "5 m, 5 cm, 5 km", "5 m, 5 km, 5 cm"],
        correctAnswer: "5 cm, 5 m, 5 km",
        explanation: "5 cm < 5 m < 5 km, as each unit is 100 or 1000 times larger than the previous one.",
        wrongAnswerExplanations: {
            "5 km, 5 m, 5 cm": "This is in decreasing order, not increasing.",
            "5 m, 5 cm, 5 km": "5 cm is less than 5 m, so this order is incorrect.",
            "5 m, 5 km, 5 cm": "5 cm is the smallest, so this order is incorrect."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch2_t2_qe19',
        type: "mcq",
        question: "If you add 50 cm to 1 m, what is the total length?",
        options: ["1.5 m", "1.05 m", "1.5 cm", "150 cm"],
        correctAnswer: "1.5 m",
        explanation: "1 m = 100 cm. So 1 m + 50 cm = 100 cm + 50 cm = 150 cm = 1.5 m.",
        wrongAnswerExplanations: {
            "1.05 m": "1.05 m = 105 cm, not 150 cm.",
            "1.5 cm": "1.5 cm is much too small; the answer should be 150 cm or 1.5 m.",
            "150 cm": "150 cm = 1.5 m, which is correct, but the question asks for the answer in meters."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch2_t2_qe20',
        type: "mcq",
        question: "Which is the most suitable unit to measure the height of a door?",
        options: ["Kilometer", "Millimeter", "Meter", "Centimeter"],
        correctAnswer: "Meter",
        explanation: "Doors are typically 2-2.5 meters tall, making meter the most appropriate unit for measurement.",
        wrongAnswerExplanations: {
            "Kilometer": "A kilometer is much too large (1000 meters) to measure a door.",
            "Millimeter": "Millimeters are too small for convenient measurement of a door's height.",
            "Centimeter": "While centimeters could be used, meters are more conventional for door height."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    }
];
