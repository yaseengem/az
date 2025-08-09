import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl4_ch2_t4_qm1',
        type: "mcq",
        question: "A car travels about 50 kilometers in one hour. About how far will it travel in 3 hours?",
        options: ["50 kilometers", "100 kilometers", "150 kilometers", "300 kilometers"],
        correctAnswer: "150 kilometers",
        explanation: "To estimate: 50 km × 3 hours = 150 km. This uses the concept of multiplication to estimate distance over time.",
        wrongAnswerExplanations: {
            "50 kilometers": "This is the distance for only 1 hour, not 3 hours.",
            "100 kilometers": "This is the distance for 2 hours, not 3 hours.",
            "300 kilometers": "This would be the distance for 6 hours, which is too much."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch2_t4_qm2',
        type: "mcq",
        question: "A standard classroom door is about 2 meters tall. How tall would a stack of 4 such doors be?",
        options: ["4 meters", "8 meters", "2 meters", "6 meters"],
        correctAnswer: "8 meters",
        explanation: "To estimate: 2 m × 4 = 8 m. This uses multiplication to estimate the combined height of stacked objects.",
        wrongAnswerExplanations: {
            "4 meters": "This would be for 2 doors, not 4 doors.",
            "2 meters": "This is the height of just 1 door, not 4 doors.",
            "6 meters": "This would be for 3 doors, not 4 doors."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch2_t4_qm3',
        type: "mcq",
        question: "Rahul's height is 127 cm. To the nearest 10 cm, his height is:",
        options: ["120 cm", "130 cm", "127 cm", "100 cm"],
        correctAnswer: "130 cm",
        explanation: "When rounding to the nearest 10, we look at the ones digit. Since 7 > 5, we round 127 up to 130 cm.",
        wrongAnswerExplanations: {
            "120 cm": "When rounding to the nearest 10, since 7 > 5, we round up, not down.",
            "127 cm": "This is the exact height, not rounded to the nearest 10 cm.",
            "100 cm": "This is rounded to the nearest 100, not to the nearest 10."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch2_t4_qm4',
        type: "mcq",
        question: "The width of a classroom is about 6 meters and its length is about 8 meters. What is the approximate perimeter of the classroom?",
        options: ["14 meters", "24 meters", "28 meters", "48 meters"],
        correctAnswer: "28 meters",
        explanation: "To find perimeter: 2 × (length + width) = 2 × (8 m + 6 m) = 2 × 14 m = 28 m. This estimates the distance around the classroom.",
        wrongAnswerExplanations: {
            "14 meters": "This is just the sum of length and width, not the perimeter.",
            "24 meters": "This is an incorrect calculation of perimeter.",
            "48 meters": "This is the area (6 × 8 = 48 square meters), not the perimeter."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch2_t4_qm5',
        type: "mcq",
        question: "Meena walks about 75 meters to reach her friend's house. About how many centimeters is this distance?",
        options: ["7.5 centimeters", "750 centimeters", "7,500 centimeters", "75,000 centimeters"],
        correctAnswer: "7,500 centimeters",
        explanation: "To convert: 75 m = 75 × 100 cm = 7,500 cm. This uses the relationship between meters and centimeters (1 m = 100 cm).",
        wrongAnswerExplanations: {
            "7.5 centimeters": "This is much too small. The conversion is 1 m = 100 cm, not 1 m = 0.1 cm.",
            "750 centimeters": "This is incorrect. The conversion is 1 m = 100 cm, not 1 m = 10 cm.",
            "75,000 centimeters": "This is incorrect. The conversion is 1 m = 100 cm, not 1 m = 1,000 cm."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch2_t4_qm6',
        type: "mcq",
        question: "You need to make a border around a rectangular poster that is 90 cm long and 60 cm wide. About how much border material will you need?",
        options: ["150 cm", "300 cm", "360 cm", "5,400 cm"],
        correctAnswer: "300 cm",
        explanation: "For the border (perimeter): 2 × (length + width) = 2 × (90 cm + 60 cm) = 2 × 150 cm = 300 cm. This estimates material needed.",
        wrongAnswerExplanations: {
            "150 cm": "This is just the sum of length and width (90 + 60), not enough for the entire border.",
            "360 cm": "This is an incorrect calculation.",
            "5,400 cm": "This is the area (90 × 60 = 5,400 square cm), not the perimeter."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch2_t4_qm7',
        type: "mcq",
        question: "Rani has a ribbon that is 3 meters 20 centimeters long. About how many millimeters is this?",
        options: ["320 mm", "3,020 mm", "3,200 mm", "3,000 mm"],
        correctAnswer: "3,200 mm",
        explanation: "To convert: 3 m 20 cm = 300 cm + 20 cm = 320 cm = 3,200 mm. This uses unit conversions (1 m = 100 cm, 1 cm = 10 mm).",
        wrongAnswerExplanations: {
            "320 mm": "This is just 32 cm converted to mm, not the full length.",
            "3,020 mm": "This incorrectly converts 3 m to 3,000 mm and adds 20 mm instead of 200 mm.",
            "3,000 mm": "This only accounts for the 3 m part, ignoring the 20 cm."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch2_t4_qm8',
        type: "mcq",
        question: "A football field is approximately 100 meters long. If Rohan runs the length of the field 5 times, about how far has he run?",
        options: ["50 meters", "100 meters", "500 meters", "1000 meters"],
        correctAnswer: "500 meters",
        explanation: "To estimate: 100 m × 5 = 500 m. This uses multiplication to calculate the total distance run.",
        wrongAnswerExplanations: {
            "50 meters": "This would be half the length of the field, not 5 times the length.",
            "100 meters": "This is just the length of the field once, not 5 times.",
            "1000 meters": "This would be 10 times the length of the field, not 5 times."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch2_t4_qm9',
        type: "mcq",
        question: "The ruler shown below is marked in centimeters. About how long is the pencil?",
        options: ["9 cm", "10 cm", "12 cm", "15 cm"],
        correctAnswer: "12 cm",
        explanation: "Looking at the ruler markings, the pencil extends from about 2 cm to 14 cm, so it's approximately 12 cm long.",
        wrongAnswerExplanations: {
            "9 cm": "This is too short compared to the ruler markings shown.",
            "10 cm": "This is too short compared to the ruler markings shown.",
            "15 cm": "This is too long compared to the ruler markings shown."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch2_t4_qm10',
        type: "mcq",
        question: "A typical adult's step is about 75 cm long. About how many steps would it take to walk 15 meters?",
        options: ["20 steps", "15 steps", "2 steps", "200 steps"],
        correctAnswer: "20 steps",
        explanation: "To estimate: 15 m = 1,500 cm. Then 1,500 cm ÷ 75 cm = 20 steps. This uses division to find the number of steps needed.",
        wrongAnswerExplanations: {
            "15 steps": "This assumes each step is 1 meter, not 75 cm.",
            "2 steps": "This is far too few steps to cover 15 meters.",
            "200 steps": "This assumes each step is 7.5 cm, which is much too small for an adult."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch2_t4_qm11',
        type: "mcq",
        question: "Geeta's eraser is 4 cm long. Her pencil is about 3 times as long as her eraser. About how long is her pencil?",
        options: ["7 cm", "12 cm", "3 cm", "4 cm"],
        correctAnswer: "12 cm",
        explanation: "To estimate: 4 cm × 3 = 12 cm. This uses multiplication to find the length based on a comparison.",
        wrongAnswerExplanations: {
            "7 cm": "This is 4 cm + 3 cm, not 4 cm × 3.",
            "3 cm": "This is the factor by which the pencil is longer, not the actual length.",
            "4 cm": "This is the length of the eraser, not the pencil."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch2_t4_qm12',
        type: "mcq",
        question: "A piece of string is 2 meters 35 centimeters long. When rounded to the nearest meter, its length is:",
        options: ["2 meters", "2.5 meters", "3 meters", "2.35 meters"],
        correctAnswer: "2 meters",
        explanation: "2 m 35 cm = 2.35 m. When rounding to the nearest meter, since 35 cm < 50 cm, we round down to 2 meters.",
        wrongAnswerExplanations: {
            "2.5 meters": "When rounding to the nearest meter, we don't round to half meters.",
            "3 meters": "We only round up to 3 m if the length was 2.5 m or greater.",
            "2.35 meters": "This is the exact measurement, not rounded to the nearest meter."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch2_t4_qm13',
        type: "mcq",
        question: "Raju is 135 cm tall. His younger brother is 95 cm tall. About how much taller is Raju than his brother?",
        options: ["30 cm", "40 cm", "45 cm", "50 cm"],
        correctAnswer: "40 cm",
        explanation: "To estimate: 135 cm - 95 cm = 40 cm. This uses subtraction to find the difference in height.",
        wrongAnswerExplanations: {
            "30 cm": "This is an incorrect calculation of the difference.",
            "45 cm": "This is an incorrect calculation of the difference.",
            "50 cm": "This is an incorrect calculation of the difference."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch2_t4_qm14',
        type: "mcq",
        question: "A standard paper clip is about 3 cm long. About how many paper clips would you need to make a line 30 cm long?",
        options: ["3 paper clips", "10 paper clips", "30 paper clips", "90 paper clips"],
        correctAnswer: "10 paper clips",
        explanation: "To estimate: 30 cm ÷ 3 cm = 10 paper clips. This uses division to find how many items fit into a length.",
        wrongAnswerExplanations: {
            "3 paper clips": "This would only make a line 9 cm long, not 30 cm.",
            "30 paper clips": "This assumes each paper clip is 1 cm long, not 3 cm.",
            "90 paper clips": "This assumes each paper clip is 1/3 cm long, which is too small."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch2_t4_qm15',
        type: "mcq",
        question: "Sita needs to buy fencing for her rectangular garden that is 8 meters long and 5 meters wide. To the nearest 10 meters, how much fencing should she buy?",
        options: ["10 meters", "20 meters", "30 meters", "40 meters"],
        correctAnswer: "30 meters",
        explanation: "Perimeter = 2 × (8 m + 5 m) = 2 × 13 m = 26 m. Rounded to the nearest 10 meters, that's 30 m.",
        wrongAnswerExplanations: {
            "10 meters": "This is too little for the perimeter of the garden.",
            "20 meters": "When rounding 26 m to the nearest 10 m, since 6 > 5, we round up to 30 m, not down to 20 m.",
            "40 meters": "This is rounding up too far from 26 m."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch2_t4_qm16',
        type: "mcq",
        question: "Which of these would give the best estimate for the height of a building with 5 floors?",
        options: [
            "5 meters", 
            "15 meters", 
            "50 meters", 
            "500 meters"
        ],
        correctAnswer: "15 meters",
        explanation: "Each floor of a building is typically 3-4 meters high, so a 5-floor building would be about 15-20 meters. 15 meters is reasonable.",
        wrongAnswerExplanations: {
            "5 meters": "This is too short, as a single floor is typically 3-4 meters high.",
            "50 meters": "This is too tall for just 5 floors unless they're extremely high ceilings.",
            "500 meters": "This is far too tall, suitable for skyscrapers with dozens of floors."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch2_t4_qm17',
        type: "mcq",
        question: "Raj measured his desk and found it was 73 cm long. Leena measured the same desk and found it was 7 dm and 4 cm long. Which statement is true?",
        options: [
            "Raj's measurement is bigger", 
            "Leena's measurement is bigger", 
            "Both measurements are approximately the same", 
            "Both measurements are exactly the same"
        ],
        correctAnswer: "Both measurements are approximately the same",
        explanation: "Leena's measurement: 7 dm 4 cm = 70 cm + 4 cm = 74 cm. This is very close to Raj's 73 cm, so they're approximately the same.",
        wrongAnswerExplanations: {
            "Raj's measurement is bigger": "Raj measured 73 cm while Leena measured about 74 cm, so Leena's is slightly larger.",
            "Leena's measurement is bigger": "While technically true (by 1 cm), in estimation, they're considered approximately the same.",
            "Both measurements are exactly the same": "There's a small difference (1 cm), so they're not exactly the same."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch2_t4_qm18',
        type: "mcq",
        question: "A group of students is making a paper chain for decoration. Each paper link is about 15 cm long. About how many links would they need for a 3-meter chain?",
        options: ["15 links", "20 links", "30 links", "45 links"],
        correctAnswer: "20 links",
        explanation: "To estimate: 3 m = 300 cm. Then 300 cm ÷ 15 cm = 20 links. This calculates how many items fit into a total length.",
        wrongAnswerExplanations: {
            "15 links": "This would make a chain about 225 cm long, not 300 cm.",
            "30 links": "This would make a chain about 450 cm long, which is too long.",
            "45 links": "This would make a chain about 675 cm long, which is much too long."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch2_t4_qm19',
        type: "mcq",
        question: "Meera wants to put a ribbon around a gift box. The box is 25 cm long, 15 cm wide, and 10 cm high. She needs extra ribbon to tie a bow, which requires about 30 cm more. About how much ribbon should she buy?",
        options: ["50 cm", "80 cm", "110 cm", "140 cm"],
        correctAnswer: "110 cm",
        explanation: "For wrapping around the box: 2 × (25 + 15) = 2 × 40 = 80 cm. Adding 30 cm for the bow: 80 + 30 = 110 cm ribbon needed.",
        wrongAnswerExplanations: {
            "50 cm": "This isn't enough to go around the box even once.",
            "80 cm": "This is enough to go around the box but doesn't include ribbon for the bow.",
            "140 cm": "This is more ribbon than needed for this box and bow."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch2_t4_qm20',
        type: "mcq",
        question: "A construction worker estimates that a wall is 3.7 meters high. Which is the most reasonable way to round this measurement for practical use?",
        options: [
            "3 meters, because it's easier to remember", 
            "4 meters, to ensure enough material is purchased", 
            "3.5 meters, because it's the mathematical average", 
            "3.7 meters exactly, because estimation isn't useful"
        ],
        correctAnswer: "4 meters, to ensure enough material is purchased",
        explanation: "In construction, it's better to round up when estimating to ensure you have enough materials for the job.",
        wrongAnswerExplanations: {
            "3 meters, because it's easier to remember": "This is too low and could lead to not having enough material.",
            "3.5 meters, because it's the mathematical average": "This isn't the average, and it's still less than the actual measurement.",
            "3.7 meters exactly, because estimation isn't useful": "Estimation is very useful in construction planning."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    }
];
