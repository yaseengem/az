import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl4_ch2_t1_qe1',
        type: "mcq",
        question: "Which of these is the correct unit to measure the length of a pencil?",
        options: ["Kilometer", "Meter", "Centimeter", "Millimeter"],
        correctAnswer: "Centimeter",
        explanation: "A pencil is small enough to be measured in centimeters, which is the most appropriate unit for such objects. 📏",
        wrongAnswerExplanations: {
            "Kilometer": "A kilometer is too large to measure a pencil. It's used for long distances.",
            "Meter": "A meter is too large for a pencil. A pencil is usually less than 20 cm long.",
            "Millimeter": "While millimeters can be used, centimeters are more commonly used for measuring pencils."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch2_t1_qe2',
        type: "mcq",
        question: "How many centimeters are there in 1 meter?",
        options: ["10 cm", "100 cm", "1000 cm", "10000 cm"],
        correctAnswer: "100 cm",
        explanation: "1 meter equals 100 centimeters. This is a fundamental conversion in the metric system of measurement. 📏",
        wrongAnswerExplanations: {
            "10 cm": "This is incorrect. 1 meter is much larger than 10 cm.",
            "1000 cm": "This is incorrect. 1000 cm equals 10 meters.",
            "10000 cm": "This is incorrect. 10000 cm equals 100 meters."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch2_t1_qe3',
        type: "mcq",
        question: "Which unit would you use to measure the length of a classroom?",
        options: ["Millimeter", "Centimeter", "Meter", "Kilometer"],
        correctAnswer: "Meter",
        explanation: "A classroom is large enough to be measured in meters. Meters are appropriate for measuring rooms, halls, and short distances. 🏫",
        wrongAnswerExplanations: {
            "Millimeter": "Millimeters are too small for measuring a classroom.",
            "Centimeter": "While centimeters could be used, meters are more practical for a large space like a classroom.",
            "Kilometer": "Kilometers are too large and are used for long distances like between cities."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch2_t1_qe4',
        type: "mcq",
        question: "Which tool is commonly used to measure short lengths in centimeters?",
        options: ["Scale (ruler)", "Measuring tape", "Odometer", "Weighing scale"],
        correctAnswer: "Scale (ruler)",
        explanation: "A scale or ruler is the most common tool for measuring short lengths in centimeters and millimeters. It's used by students in classrooms. 📏",
        wrongAnswerExplanations: {
            "Measuring tape": "Though measuring tapes can measure in cm, rulers are more commonly used for short lengths.",
            "Odometer": "An odometer measures distance traveled by vehicles, not small objects.",
            "Weighing scale": "A weighing scale measures weight, not length."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch2_t1_qe5',
        type: "mcq",
        question: "Which of these is the smallest unit of length?",
        options: ["Meter", "Centimeter", "Millimeter", "Kilometer"],
        correctAnswer: "Millimeter",
        explanation: "A millimeter is the smallest among these units. It equals 1/10th of a centimeter or 1/1000th of a meter. 📐",
        wrongAnswerExplanations: {
            "Meter": "A meter is larger than both centimeters and millimeters.",
            "Centimeter": "A centimeter is larger than a millimeter but smaller than a meter.",
            "Kilometer": "A kilometer is the largest unit among these options."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch2_t1_qe6',
        type: "mcq",
        question: "If your pencil is 15 cm long, how long is it in millimeters?",
        options: ["1.5 mm", "15 mm", "150 mm", "1500 mm"],
        correctAnswer: "150 mm",
        explanation: "To convert cm to mm, multiply by 10. So, 15 cm × 10 = 150 mm. Every centimeter contains 10 millimeters. ✏️",
        wrongAnswerExplanations: {
            "1.5 mm": "This is incorrect. 15 cm is much larger than 1.5 mm.",
            "15 mm": "This is incorrect. 15 mm equals 1.5 cm, not 15 cm.",
            "1500 mm": "This is incorrect. 1500 mm equals 150 cm or 1.5 meters."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch2_t1_qe7',
        type: "mcq",
        question: "What would you use to measure the distance between two cities?",
        options: ["Centimeter", "Meter", "Kilometer", "Millimeter"],
        correctAnswer: "Kilometer",
        explanation: "Kilometers are used to measure long distances such as between cities. One kilometer equals 1000 meters. 🚗",
        wrongAnswerExplanations: {
            "Centimeter": "Centimeters are too small for measuring distances between cities.",
            "Meter": "Meters are too small for conveniently expressing distances between cities.",
            "Millimeter": "Millimeters are extremely small and impractical for measuring large distances."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch2_t1_qe8',
        type: "mcq",
        question: "How many meters are there in 1 kilometer?",
        options: ["10 meters", "100 meters", "1000 meters", "10000 meters"],
        correctAnswer: "1000 meters",
        explanation: "1 kilometer equals 1000 meters. This is a basic conversion in the metric system. 🛣️",
        wrongAnswerExplanations: {
            "10 meters": "This is incorrect. 1 kilometer is much larger than 10 meters.",
            "100 meters": "This is incorrect. 100 meters is only 1/10th of a kilometer.",
            "10000 meters": "This is incorrect. 10000 meters equals 10 kilometers."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch2_t1_qe9',
        type: "mcq",
        question: "Which of these objects would most likely measure about 1 meter in length?",
        options: ["A paperclip", "A cricket bat", "A car", "An ant"],
        correctAnswer: "A cricket bat",
        explanation: "A cricket bat is approximately 1 meter long. This is a good example of an object that measures about a meter. 🏏",
        wrongAnswerExplanations: {
            "A paperclip": "A paperclip is only a few centimeters long, much less than 1 meter.",
            "A car": "A car is several meters long, much more than 1 meter.",
            "An ant": "An ant is just a few millimeters long, far less than 1 meter."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch2_t1_qe10',
        type: "mcq",
        question: "If a ribbon is 2 meters long, what is its length in centimeters?",
        options: ["2 cm", "20 cm", "200 cm", "2000 cm"],
        correctAnswer: "200 cm",
        explanation: "To convert meters to centimeters, multiply by 100. So, 2 m × 100 = 200 cm. 🎀",
        wrongAnswerExplanations: {
            "2 cm": "This is incorrect. 2 meters is much longer than 2 cm.",
            "20 cm": "This is incorrect. 20 cm is only 1/10th of 2 meters.",
            "2000 cm": "This is incorrect. 2000 cm equals 20 meters."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch2_t1_qe11',
        type: "mcq",
        question: "Which of these would you measure in millimeters?",
        options: ["Height of a building", "Thickness of a coin", "Length of a playground", "Distance to school"],
        correctAnswer: "Thickness of a coin",
        explanation: "The thickness of a coin is very small and is appropriately measured in millimeters. Small dimensions are usually measured in mm. 💰",
        wrongAnswerExplanations: {
            "Height of a building": "A building is tall and would be measured in meters.",
            "Length of a playground": "A playground is large and would be measured in meters.",
            "Distance to school": "The distance to school would typically be measured in meters or kilometers."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch2_t1_qe12',
        type: "mcq",
        question: "If you want to measure the length of your finger, which unit would be most appropriate?",
        options: ["Kilometer", "Meter", "Centimeter", "None of these"],
        correctAnswer: "Centimeter",
        explanation: "Centimeters are the most appropriate unit for measuring finger length. Fingers are typically a few centimeters long. 👆",
        wrongAnswerExplanations: {
            "Kilometer": "A kilometer is far too large for measuring a finger.",
            "Meter": "A meter is too large for measuring a finger.",
            "None of these": "Centimeters are perfect for this measurement."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch2_t1_qe13',
        type: "mcq",
        question: "A new pencil is about how many centimeters long?",
        options: ["2 cm", "15 cm", "50 cm", "100 cm"],
        correctAnswer: "15 cm",
        explanation: "A new, unsharpened pencil is typically about 15 centimeters long. This is a common length for standard pencils. ✏️",
        wrongAnswerExplanations: {
            "2 cm": "This is too short for a standard pencil.",
            "50 cm": "This is too long for a standard pencil.",
            "100 cm": "This equals 1 meter, which is much too long for a pencil."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch2_t1_qe14',
        type: "mcq",
        question: "Which of these measurements is the longest?",
        options: ["5 meters", "500 centimeters", "50 centimeters", "5000 millimeters"],
        correctAnswer: "500 centimeters",
        explanation: "500 cm = 5 m, 50 cm = 0.5 m, 5000 mm = 5 m. So both 500 cm and 5000 mm equal 5 m, but 500 cm is written first in the options. 📏",
        wrongAnswerExplanations: {
            "5 meters": "5 meters equals 500 cm, so they're the same length.",
            "50 centimeters": "50 cm equals 0.5 m, which is shorter than 5 m.",
            "5000 millimeters": "5000 mm equals 5 m, so it's the same as 5 meters."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch2_t1_qe15',
        type: "mcq",
        question: "If a child is 125 cm tall, what is the height in meters?",
        options: ["1.25 m", "12.5 m", "0.125 m", "125 m"],
        correctAnswer: "1.25 m",
        explanation: "To convert cm to m, divide by 100. So, 125 cm ÷ 100 = 1.25 m. This is the height of an average child. 👦",
        wrongAnswerExplanations: {
            "12.5 m": "This is incorrect. 12.5 m equals 1250 cm, which is much taller than a child.",
            "0.125 m": "This is incorrect. 0.125 m equals 12.5 cm, which is much shorter than a child.",
            "125 m": "This is incorrect. 125 m equals 12500 cm, which is impossibly tall."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch2_t1_qe16',
        type: "mcq",
        question: "Which unit would you use to measure the height of a door?",
        options: ["Millimeter", "Centimeter", "Meter", "Kilometer"],
        correctAnswer: "Meter",
        explanation: "A door is typically 2 meters tall, so meters are the appropriate unit for measuring door height. 🚪",
        wrongAnswerExplanations: {
            "Millimeter": "Millimeters are too small for conveniently expressing the height of a door.",
            "Centimeter": "While doors can be measured in centimeters, meters are more commonly used.",
            "Kilometer": "Kilometers are far too large for measuring the height of a door."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch2_t1_qe17',
        type: "mcq",
        question: "How many millimeters are there in 1 centimeter?",
        options: ["10 mm", "100 mm", "1000 mm", "0.1 mm"],
        correctAnswer: "10 mm",
        explanation: "1 centimeter equals 10 millimeters. This is a basic conversion in the metric system. 📏",
        wrongAnswerExplanations: {
            "100 mm": "This is incorrect. 100 mm equals 10 cm.",
            "1000 mm": "This is incorrect. 1000 mm equals 100 cm or 1 m.",
            "0.1 mm": "This is incorrect. 0.1 mm is 1/10th of a millimeter."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch2_t1_qe18',
        type: "mcq",
        question: "Which of these would you measure in kilometers?",
        options: ["Length of a book", "Height of a tree", "Distance from Delhi to Mumbai", "Width of a door"],
        correctAnswer: "Distance from Delhi to Mumbai",
        explanation: "The distance between cities like Delhi and Mumbai is very large and is best measured in kilometers. Long distances are measured in km. 🚆",
        wrongAnswerExplanations: {
            "Length of a book": "A book is small and would be measured in centimeters.",
            "Height of a tree": "A tree's height would typically be measured in meters.",
            "Width of a door": "A door's width would be measured in centimeters or meters."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch2_t1_qe19',
        type: "mcq",
        question: "If you walk 500 meters and then another 500 meters, how far have you walked in total?",
        options: ["10 meters", "100 meters", "1000 meters", "1 kilometer"],
        correctAnswer: "1 kilometer",
        explanation: "500 m + 500 m = 1000 m = 1 km. You've walked a total of 1 kilometer. 🚶",
        wrongAnswerExplanations: {
            "10 meters": "This is incorrect. You've walked much farther than 10 meters.",
            "100 meters": "This is incorrect. You've walked much farther than 100 meters.",
            "1000 meters": "This is correct in meters, and equals 1 kilometer."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch2_t1_qe20',
        type: "mcq",
        question: "Which of these is equal to 1.5 meters?",
        options: ["15 cm", "150 cm", "1500 cm", "15000 cm"],
        correctAnswer: "150 cm",
        explanation: "To convert meters to centimeters, multiply by 100. So, 1.5 m × 100 = 150 cm. 📏",
        wrongAnswerExplanations: {
            "15 cm": "This is incorrect. 15 cm equals 0.15 m.",
            "1500 cm": "This is incorrect. 1500 cm equals 15 m.",
            "15000 cm": "This is incorrect. 15000 cm equals it 150 m."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    }
];
