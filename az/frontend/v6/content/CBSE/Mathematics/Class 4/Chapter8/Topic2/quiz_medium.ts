import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl4_ch8_t2_qm1',
        type: "mcq",
        question: "A circle has a diameter of 16 cm. What is its circumference? (Take π = 3.14)",
        options: ["50.24 cm", "100.48 cm", "25.12 cm", "16 cm"],
        correctAnswer: "50.24 cm",
        explanation: "Circumference = π × diameter = 3.14 × 16 = 50.24 cm. 🔄",
        wrongAnswerExplanations: {
            "100.48 cm": "This incorrectly doubles the correct answer.",
            "25.12 cm": "This incorrectly calculates for a radius of 8 cm, not a diameter of 16 cm.",
            "16 cm": "This just repeats the diameter without using π."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch8_t2_qm2',
        type: "mcq",
        question: "If the radius of a circle is 5 cm, what is its circumference? (Take π = 3.14)",
        options: ["15.7 cm", "31.4 cm", "10 cm", "78.5 cm"],
        correctAnswer: "31.4 cm",
        explanation: "Circumference = 2 × π × radius = 2 × 3.14 × 5 = 31.4 cm. 📏",
        wrongAnswerExplanations: {
            "15.7 cm": "This uses the formula π × diameter but incorrectly calculates diameter as 5 cm.",
            "10 cm": "This is just double the radius without using π.",
            "78.5 cm": "This calculates the area (πr²) instead of the circumference."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch8_t2_qm3',
        type: "mcq",
        question: "A circular garden has a circumference of 132 meters. What is its diameter? (Take π = 3.14)",
        options: ["42 m", "21 m", "66 m", "132 m"],
        correctAnswer: "42 m",
        explanation: "Diameter = Circumference ÷ π = 132 ÷ 3.14 = 42 m. Using C = πd, solve for d. 🌳",
        wrongAnswerExplanations: {
            "21 m": "This calculates the radius, not the diameter.",
            "66 m": "This is half the circumference, not the diameter.",
            "132 m": "This incorrectly assumes the diameter equals the circumference."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch8_t2_qm4',
        type: "mcq",
        question: "Rahul measured around his circular dining table with a string and found it was 220 cm long. What is the radius of the table? (Take π = 3.14)",
        options: ["35 cm", "70 cm", "110 cm", "55 cm"],
        correctAnswer: "35 cm",
        explanation: "Circumference = 220 cm. Radius = C ÷ (2π) = 220 ÷ (2 × 3.14) ≈ 35 cm. 🪑",
        wrongAnswerExplanations: {
            "70 cm": "This calculates the diameter, not the radius.",
            "110 cm": "This is half the circumference, not the radius.",
            "55 cm": "This incorrectly divides the circumference only by π, not 2π."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch8_t2_qm5',
        type: "mcq",
        question: "The wheel of a toy car has a radius of 3 cm. How far does the car move in 5 complete rotations of the wheel? (Take π = 3.14)",
        options: ["15 cm", "30 cm", "94.2 cm", "47.1 cm"],
        correctAnswer: "94.2 cm",
        explanation: "Distance in 1 rotation = Circumference = 2πr = 2 × 3.14 × 3 = 18.84 cm. In 5 rotations: 5 × 18.84 = 94.2 cm. 🚗",
        wrongAnswerExplanations: {
            "15 cm": "This just multiplies the radius by 5, ignoring circumference.",
            "30 cm": "This multiplies the diameter by 5, ignoring π.",
            "47.1 cm": "This is half the correct answer, possibly from using radius instead of diameter in calculations."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch8_t2_qm6',
        type: "mcq",
        question: "A circular track has a diameter of 14 meters. How many times must an athlete run around it to cover 1 kilometer?",
        options: ["23 times", "22 times", "44 times", "11 times"],
        correctAnswer: "23 times",
        explanation: "Track circumference = π × d = 3.14 × 14 ≈ 44 m. To cover 1 km (1000 m): 1000 ÷ 44 ≈ 22.7, so 23 full laps needed. 🏃",
        wrongAnswerExplanations: {
            "22 times": "This rounds down when an additional lap is needed to cover the full distance.",
            "44 times": "This confuses the circumference (44 m) with the number of laps needed.",
            "11 times": "This incorrectly calculates based on diameter, not circumference."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch8_t2_qm7',
        type: "mcq",
        question: "If the circumference of a circle is 75.36 cm, what is its radius? (Take π = 3.14)",
        options: ["12 cm", "24 cm", "75.36 cm", "37.68 cm"],
        correctAnswer: "12 cm",
        explanation: "Radius = Circumference ÷ (2π) = 75.36 ÷ (2 × 3.14) = 75.36 ÷ 6.28 = 12 cm. 📏",
        wrongAnswerExplanations: {
            "24 cm": "This calculates the diameter, not the radius.",
            "75.36 cm": "This is the same as the circumference, not the radius.",
            "37.68 cm": "This is half the circumference, not the radius."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch8_t2_qm8',
        type: "mcq",
        question: "A pizza has a diameter of 12 inches. If you cut it into 6 equal slices, what is the length of the outer edge (crust) of each slice?",
        options: ["6.28 inches", "3.14 inches", "37.68 inches", "6 inches"],
        correctAnswer: "6.28 inches",
        explanation: "Total crust length = Circumference = π × d = 3.14 × 12 = 37.68 inches. Each slice: 37.68 ÷ 6 = 6.28 inches. 🍕",
        wrongAnswerExplanations: {
            "3.14 inches": "This is the value of π, not the answer to the problem.",
            "37.68 inches": "This is the total circumference, not the length per slice.",
            "6 inches": "This incorrectly assumes the crust length equals half the diameter."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch8_t2_qm9',
        type: "mcq",
        question: "A circular pond has a circumference of 88 meters. What is its diameter? (Take π = 3.14)",
        options: ["28 m", "14 m", "88 m", "44 m"],
        correctAnswer: "28 m",
        explanation: "Diameter = Circumference ÷ π = 88 ÷ 3.14 = 28 m. 🌊",
        wrongAnswerExplanations: {
            "14 m": "This calculates the radius, not the diameter.",
            "88 m": "This incorrectly assumes the diameter equals the circumference.",
            "44 m": "This is half the circumference, not the diameter."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch8_t2_qm10',
        type: "mcq",
        question: "The diameter of a bicycle wheel is 60 cm. How far does the bicycle travel in 50 complete rotations of the wheel? (Take π = 3.14)",
        options: ["3000 cm", "9420 cm", "600 cm", "188.4 cm"],
        correctAnswer: "9420 cm",
        explanation: "Distance in 1 rotation = Circumference = π × d = 3.14 × 60 = 188.4 cm. In 50 rotations: 50 × 188.4 = 9420 cm. 🚲",
        wrongAnswerExplanations: {
            "3000 cm": "This just multiplies the diameter by 50, ignoring π.",
            "600 cm": "This adds 60 × 50 ÷ 5 instead of using the circumference.",
            "188.4 cm": "This is the distance in just one rotation, not 50."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch8_t2_qm11',
        type: "mcq",
        question: "A circular garden has a radius of 7 meters. What fence length is needed to go around it? (Take π = 3.14)",
        options: ["14 m", "21.98 m", "43.96 m", "153.86 m"],
        correctAnswer: "43.96 m",
        explanation: "Fence length = Circumference = 2πr = 2 × 3.14 × 7 = 43.96 m. 🌳",
        wrongAnswerExplanations: {
            "14 m": "This is just double the radius, ignoring π.",
            "21.98 m": "This uses the formula π × diameter but incorrectly calculates diameter as 7 m.",
            "153.86 m": "This calculates the area (πr²) instead of the circumference."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch8_t2_qm12',
        type: "mcq",
        question: "Amit walks around a circular field 3 times. If the diameter of the field is 50 meters, how far does he walk? (Take π = 3.14)",
        options: ["150 m", "471 m", "157 m", "628 m"],
        correctAnswer: "471 m",
        explanation: "Distance in one lap = Circumference = π × d = 3.14 × 50 = 157 m. Total distance in 3 laps: 3 × 157 = 471 m. 🚶",
        wrongAnswerExplanations: {
            "150 m": "This just multiplies the diameter by 3, ignoring π.",
            "157 m": "This is the distance in just one lap, not 3 laps.",
            "628 m": "This incorrectly uses the formula for area instead of circumference."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch8_t2_qm13',
        type: "mcq",
        question: "A circular park has a circumference of 314 meters. What is its radius? (Take π = 3.14)",
        options: ["100 m", "50 m", "314 m", "157 m"],
        correctAnswer: "50 m",
        explanation: "Radius = Circumference ÷ (2π) = 314 ÷ (2 × 3.14) = 314 ÷ 6.28 = 50 m. 🏞️",
        wrongAnswerExplanations: {
            "100 m": "This calculates the diameter, not the radius.",
            "314 m": "This is the same as the circumference, not the radius.",
            "157 m": "This incorrectly calculates the diameter as circumference ÷ 2 instead of circumference ÷ π."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch8_t2_qm14',
        type: "mcq",
        question: "What happens to the circumference of a circle if its diameter is doubled?",
        options: ["It doubles", "It triples", "It becomes four times", "It remains the same"],
        correctAnswer: "It doubles",
        explanation: "Circumference = π × diameter. If diameter doubles, circumference also doubles. 📊",
        wrongAnswerExplanations: {
            "It triples": "The circumference doubles, not triples, when the diameter doubles.",
            "It becomes four times": "That happens to the area, not the circumference, when diameter doubles.",
            "It remains the same": "The circumference changes when the diameter changes."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch8_t2_qm15',
        type: "mcq",
        question: "A circular clock has a diameter of 28 cm. What is the distance traveled by the tip of the minute hand in 1 hour? (Take π = 3.14)",
        options: ["28 cm", "44 cm", "88 cm", "132 cm"],
        correctAnswer: "88 cm",
        explanation: "The minute hand radius = 14 cm. In 1 hour, it makes a complete circle. Circumference = 2πr = 2 × 3.14 × 14 = 88 cm. 🕒",
        wrongAnswerExplanations: {
            "28 cm": "This is the diameter, not the circumference.",
            "44 cm": "This is half the circumference, not the full circumference.",
            "132 cm": "This incorrectly calculates 3πr instead of 2πr."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch8_t2_qm16',
        type: "mcq",
        question: "A circular swimming pool has a diameter of 8 meters. What is the distance around the pool? (Take π = 3.14)",
        options: ["16 m", "25.12 m", "50.24 m", "8 m"],
        correctAnswer: "25.12 m",
        explanation: "Distance around the pool = Circumference = π × diameter = 3.14 × 8 = 25.12 m. 🏊",
        wrongAnswerExplanations: {
            "16 m": "This is double the diameter, ignoring π.",
            "50.24 m": "This incorrectly doubles the correct answer.",
            "8 m": "This is just the diameter, not the circumference."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch8_t2_qm17',
        type: "mcq",
        question: "Sita's bracelet has a diameter of 6 cm. If she needs to put a ribbon around it, how long should the ribbon be? (Take π = 3.14)",
        options: ["6 cm", "12 cm", "18.84 cm", "9.42 cm"],
        correctAnswer: "18.84 cm",
        explanation: "Ribbon length = Circumference = π × diameter = 3.14 × 6 = 18.84 cm. 💍",
        wrongAnswerExplanations: {
            "6 cm": "This is just the diameter, not the circumference.",
            "12 cm": "This is double the diameter, ignoring π.",
            "9.42 cm": "This is half the circumference, not the full circumference."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch8_t2_qm18',
        type: "mcq",
        question: "A circular plate has a circumference of 31.4 cm. What is its diameter? (Take π = 3.14)",
        options: ["31.4 cm", "15.7 cm", "10 cm", "5 cm"],
        correctAnswer: "10 cm",
        explanation: "Diameter = Circumference ÷ π = 31.4 ÷ 3.14 = 10 cm. 🍽️",
        wrongAnswerExplanations: {
            "31.4 cm": "This is the same as the circumference, not the diameter.",
            "15.7 cm": "This is half the circumference, not the diameter.",
            "5 cm": "This is the radius, not the diameter."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch8_t2_qm19',
        type: "mcq",
        question: "Ravi's toy car wheel has a radius of 2 cm. How many complete rotations does the wheel make to travel 50.24 cm? (Take π = 3.14)",
        options: ["4", "8", "12", "16"],
        correctAnswer: "4",
        explanation: "Circumference = 2πr = 2 × 3.14 × 2 = 12.56 cm. Number of rotations = 50.24 ÷ 12.56 = 4. 🚗",
        wrongAnswerExplanations: {
            "8": "This incorrectly calculates based on the radius, not the circumference.",
            "12": "This incorrectly uses diameter instead of radius in the calculation.",
            "16": "This incorrectly multiplies the radius by π."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch8_t2_qm20',
        type: "mcq",
        question: "A circular running track has a diameter of 200 meters. If Ram runs halfway around the track, how far does he run? (Take π = 3.14)",
        options: ["100 m", "200 m", "314 m", "628 m"],
        correctAnswer: "314 m",
        explanation: "Full circuit = π × diameter = 3.14 × 200 = 628 m. Halfway around = 628 ÷ 2 = 314 m. 🏃",
        wrongAnswerExplanations: {
            "100 m": "This is half the diameter, not half the circumference.",
            "200 m": "This is the diameter, not half the circumference.",
            "628 m": "This is the full circumference, not half of it."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    }
];
