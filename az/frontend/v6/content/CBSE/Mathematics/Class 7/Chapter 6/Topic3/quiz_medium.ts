// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 7\Chapter6\Topic3\quiz_medium.ts
import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: "cl7_ch6_t3_qm1",
        type: "mcq",
        question: "The perpendicular height of an equilateral triangle with side 8 cm is:",
        options: ["4√3 cm", "6√3 cm", "4 cm", "2√3 cm"],
        correctAnswer: "4√3 cm",
        explanation: "In an equilateral triangle, height = (√3/2) × side = (√3/2) × 8 = 4√3 cm.",
        wrongAnswerExplanations: {
            "6√3 cm": "This is incorrect. The formula for height is (√3/2) × side.",
            "4 cm": "This ignores the √3 factor in the correct formula for height.",
            "2√3 cm": "This is half the correct value."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 60
    },
    {
        id: "cl7_ch6_t3_qm2",
        type: "mcq",
        question: "A rope attached to the top of a 12m tall pole is staked to the ground 5m away from the base of the pole. What is the length of the rope?",
        options: ["13 m", "17 m", "√169 m", "15 m"],
        correctAnswer: "13 m",
        explanation: "Using Pythagoras theorem: rope² = 12² + 5² = 144 + 25 = 169, so rope = 13 m.",
        wrongAnswerExplanations: {
            "17 m": "This is the sum of the height and distance (12 + 5), not the rope length.",
            "√169 m": "While mathematically correct, this equals 13 m when simplified.",
            "15 m": "This is not the correct result of applying the Pythagoras theorem."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 60
    },
    {
        id: "cl7_ch6_t3_qm3",
        type: "mcq",
        question: "If the hypotenuse of a right-angled triangle is 17 cm and one of the legs is 15 cm, what is the length of the other leg?",
        options: ["6 cm", "8 cm", "7 cm", "9 cm"],
        correctAnswer: "8 cm",
        explanation: "Using Pythagoras theorem: b² = 17² - 15² = 289 - 225 = 64, so b = 8 cm.",
        wrongAnswerExplanations: {
            "6 cm": "This is not the correct result of applying the Pythagoras theorem.",
            "7 cm": "This is not the correct result of applying the Pythagoras theorem.",
            "9 cm": "This is not the correct result of applying the Pythagoras theorem."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 60
    },
    {
        id: "cl7_ch6_t3_qm4",
        type: "mcq",
        question: "In a rhombus with diagonals 24 cm and 10 cm, what is the side length?",
        options: ["13 cm", "15 cm", "14 cm", "12 cm"],
        correctAnswer: "13 cm",
        explanation: "Half-diagonals form a right triangle. Using d₁ = 24, d₂ = 10: side² = (24/2)² + (10/2)² = 12² + 5² = 144 + 25 = 169, so side = 13 cm.",
        wrongAnswerExplanations: {
            "15 cm": "This is not the correct result of applying the Pythagoras theorem.",
            "14 cm": "This is not the correct result of applying the Pythagoras theorem.",
            "12 cm": "This is just half of the first diagonal, not the side length."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 90
    },
    {
        id: "cl7_ch6_t3_qm5",
        type: "mcq",
        question: "A ladder rests against a vertical wall with its foot 6 m from the wall. If the top of the ladder is 8 m from the ground, what is the length of the ladder?",
        options: ["10 m", "14 m", "9 m", "√100 m"],
        correctAnswer: "10 m",
        explanation: "Using Pythagoras theorem: ladder² = 8² + 6² = 64 + 36 = 100, so ladder = 10 m.",
        wrongAnswerExplanations: {
            "14 m": "This is the sum of the height and distance from wall (8 + 6), not the ladder length.",
            "9 m": "This is not the correct result of applying the Pythagoras theorem.",
            "√100 m": "While mathematically correct, this equals 10 m when simplified."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 60
    },
    {
        id: "cl7_ch6_t3_qm6",
        type: "mcq",
        question: "Two ships leave a port at the same time. One sails east at 15 km/h and the other sails north at 20 km/h. After 3 hours, how far apart are they?",
        options: ["65 km", "45 km", "75 km", "25 km"],
        correctAnswer: "75 km",
        explanation: "Ship 1 travels 15 × 3 = 45 km east, ship 2 travels 20 × 3 = 60 km north. Distance = √(45² + 60²) = √(2025 + 3600) = √5625 = 75 km.",
        wrongAnswerExplanations: {
            "65 km": "This is not the correct result of applying the Pythagoras theorem.",
            "45 km": "This is the distance traveled by the first ship, not the distance between ships.",
            "25 km": "This is not the correct result of applying the Pythagoras theorem."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 90
    },
    {
        id: "cl7_ch6_t3_qm7",
        type: "mcq",
        question: "Which of the following is NOT a primitive Pythagorean triplet?",
        options: ["3, 4, 5", "5, 12, 13", "9, 12, 15", "8, 15, 17"],
        correctAnswer: "9, 12, 15",
        explanation: "9, 12, 15 = 3 × (3, 4, 5), which is not primitive as these numbers share a common factor of 3.",
        wrongAnswerExplanations: {
            "3, 4, 5": "This is a primitive Pythagorean triplet as these numbers have no common factor.",
            "5, 12, 13": "This is a primitive Pythagorean triplet as these numbers have no common factor.",
            "8, 15, 17": "This is a primitive Pythagorean triplet as these numbers have no common factor."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 90
    },
    {
        id: "cl7_ch6_t3_qm8",
        type: "mcq",
        question: "A rectangle has a diagonal of 25 cm and a length of 24 cm. What is its width?",
        options: ["10 cm", "7 cm", "5 cm", "12 cm"],
        correctAnswer: "7 cm",
        explanation: "Using Pythagoras theorem: width² = 25² - 24² = 625 - 576 = 49, so width = 7 cm.",
        wrongAnswerExplanations: {
            "10 cm": "This is not the correct result of applying the Pythagoras theorem.",
            "5 cm": "This is not the correct result of applying the Pythagoras theorem.",
            "12 cm": "This is not the correct result of applying the Pythagoras theorem."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 60
    },
    {
        id: "cl7_ch6_t3_qm9",
        type: "mcq",
        question: "The diagonals of a rhombus are 16 cm and 12 cm. What is the perimeter of the rhombus?",
        options: ["40 cm", "56 cm", "60 cm", "24 cm"],
        correctAnswer: "40 cm",
        explanation: "Each side = √((16/2)² + (12/2)²) = √(64 + 36)/2 = √100/2 = 10 cm. Perimeter = 4 × 10 = 40 cm.",
        wrongAnswerExplanations: {
            "56 cm": "This is not the correct result of applying the Pythagoras theorem.",
            "60 cm": "This is not the correct result of applying the Pythagoras theorem.",
            "24 cm": "This is not the correct result of applying the Pythagoras theorem."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 90
    },
    {
        id: "cl7_ch6_t3_qm10",
        type: "mcq",
        question: "A square has a diagonal of length 8√2 cm. What is the area of the square?",
        options: ["64 cm²", "128 cm²", "16 cm²", "32 cm²"],
        correctAnswer: "64 cm²",
        explanation: "In a square, diagonal = side × √2. So, side = 8√2/√2 = 8 cm. Area = side² = 8² = 64 cm².",
        wrongAnswerExplanations: {
            "128 cm²": "This is twice the correct area.",
            "16 cm²": "This is one-fourth of the correct area.",
            "32 cm²": "This is half of the correct area."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 90
    },
    {
        id: "cl7_ch6_t3_qm11",
        type: "mcq",
        question: "The sides of a right-angled triangle are (x - 1), (x), and (x + 1). What is the value of x?",
        options: ["3", "4", "2", "5"],
        correctAnswer: "4",
        explanation: "Using Pythagoras: (x+1)² = (x-1)² + x². Simplifying: x² + 2x + 1 = x² - 2x + 1 + x² gives x = 4.",
        wrongAnswerExplanations: {
            "3": "This value doesn't satisfy the Pythagoras theorem for the given sides.",
            "2": "This value doesn't satisfy the Pythagoras theorem for the given sides.",
            "5": "This value doesn't satisfy the Pythagoras theorem for the given sides."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 120
    },
    {
        id: "cl7_ch6_t3_qm12",
        type: "mcq",
        question: "If the legs of a right-angled triangle are in the ratio 5:12, what is the ratio of the shorter leg to the hypotenuse?",
        options: ["5:13", "12:13", "5:12", "1:√2"],
        correctAnswer: "5:13",
        explanation: "For legs 5k and 12k, hypotenuse = √(5²k² + 12²k²) = √(169k²) = 13k. So the ratio is 5:13.",
        wrongAnswerExplanations: {
            "12:13": "This is the ratio of the longer leg to the hypotenuse.",
            "5:12": "This is the ratio of the legs to each other, not to the hypotenuse.",
            "1:√2": "This is not the correct ratio for the given legs."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 90
    },
    {
        id: "cl7_ch6_t3_qm13",
        type: "mcq",
        question: "A man walks 24 km due east and then 10 km due north. What is his shortest distance from the starting point?",
        options: ["26 km", "34 km", "√676 km", "25 km"],
        correctAnswer: "26 km",
        explanation: "Using Pythagoras theorem: distance² = 24² + 10² = 576 + 100 = 676, so distance = 26 km.",
        wrongAnswerExplanations: {
            "34 km": "This is the total distance walked (24 + 10), not the direct distance.",
            "√676 km": "While mathematically correct, this equals 26 km when simplified.",
            "25 km": "This is not the correct result of applying the Pythagoras theorem."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 60
    },
    {
        id: "cl7_ch6_t3_qm14",
        type: "mcq",
        question: "Two posts are 12 m apart. The height of the shorter post is 9 m and the height of the taller post is 15 m. What is the distance between the tops of the posts?",
        options: ["10 m", "12 m", "6 m", "15 m"],
        correctAnswer: "10 m",
        explanation: "Using Pythagoras theorem with horizontal distance 12 m and vertical difference 6 m: distance² = 12² + 6² = 144 + 36 = 180, so distance = √180 = 6√5 ≈ 13.4 m.",
        wrongAnswerExplanations: {
            "12 m": "This is just the horizontal distance between the posts.",
            "6 m": "This is just the difference in heights.",
            "15 m": "This is the height of the taller post, not the distance between the tops."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 90
    },
    {
        id: "cl7_ch6_t3_qm15",
        type: "mcq",
        question: "A 20 m long ladder reaches a window 16 m high from the ground. At what distance from the wall is the foot of the ladder?",
        options: ["4 m", "12 m", "8 m", "10 m"],
        correctAnswer: "12 m",
        explanation: "Using Pythagoras theorem: distance² = 20² - 16² = 400 - 256 = 144, so distance = 12 m.",
        wrongAnswerExplanations: {
            "4 m": "This is the difference between ladder length and window height (20 - 16).",
            "8 m": "This is not the correct result of applying the Pythagoras theorem.",
            "10 m": "This is not the correct result of applying the Pythagoras theorem."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 60
    },
    {
        id: "cl7_ch6_t3_qm16",
        type: "mcq",
        question: "In an isosceles right-angled triangle, if the hypotenuse is 10√2 cm, what is the length of each of the equal sides?",
        options: ["10 cm", "5√2 cm", "10√2 cm", "20 cm"],
        correctAnswer: "10 cm",
        explanation: "In isosceles right triangle, if both legs = a, then hypotenuse = a√2. So 10√2 = a√2, giving a = 10 cm.",
        wrongAnswerExplanations: {
            "5√2 cm": "This is not the correct result of applying the Pythagoras theorem.",
            "10√2 cm": "This is the length of the hypotenuse, not the equal sides.",
            "20 cm": "This is twice the correct length of the equal sides."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 90
    },
    {
        id: "cl7_ch6_t3_qm17",
        type: "mcq",
        question: "What is the distance between the points (3, 4) and (8, 12)?",
        options: ["10", "9", "11", "√125"],
        correctAnswer: "√125",
        explanation: "Using distance formula: d = √[(8-3)² + (12-4)²] = √[25 + 64] = √89 ≈ 9.434.",
        wrongAnswerExplanations: {
            "10": "This is not the correct distance between the given points.",
            "9": "This is not the correct distance between the given points.",
            "11": "This is not the correct distance between the given points."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 90
    },
    {
        id: "cl7_ch6_t3_qm18",
        type: "mcq",
        question: "A tree breaks due to a storm and the broken part makes an angle of 30° with the ground. The top of the tree touches the ground at a distance of 30 m from the base. What was the height of the tree?",
        options: ["15 m", "30 m", "45 m", "60 m"],
        correctAnswer: "45 m",
        explanation: "The broken part forms a 30-60-90 triangle. If the base is 30 m, height = 30 × tan(60°) = 30 × √3 ≈ 51.96 m.",
        wrongAnswerExplanations: {
            "15 m": "This is half the distance from base to the touching point, not the height.",
            "30 m": "This is the distance from base to where the top touches the ground.",
            "60 m": "This is twice the distance from base to the touching point, not the height."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 120
    },
    {
        id: "cl7_ch6_t3_qm19",
        type: "mcq",
        question: "The angle of elevation of the top of a building from a point on the ground is 30°. If the distance of the point from the foot of the building is 30√3 m, what is the height of the building?",
        options: ["30 m", "60 m", "45 m", "15 m"],
        correctAnswer: "30 m",
        explanation: "Using tan(30°) = height/30√3, height = 30√3 × tan(30°) = 30√3 × (1/√3) = 30 m.",
        wrongAnswerExplanations: {
            "60 m": "This is twice the correct height.",
            "45 m": "This is not the correct result using trigonometry and Pythagoras theorem.",
            "15 m": "This is half the correct height."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 90
    },
    {
        id: "cl7_ch6_t3_qm20",
        type: "mcq",
        question: "In a circle with radius 5 cm, a chord is drawn at a distance of 4 cm from the center. What is the length of the chord?",
        options: ["3 cm", "6 cm", "8 cm", "6 cm"],
        correctAnswer: "6 cm",
        explanation: "Using Pythagoras theorem in right triangle: chord length = 2 × √(5² - 4²) = 2 × √(25 - 16) = 2 × √9 = 2 × 3 = 6 cm.",
        wrongAnswerExplanations: {
            "3 cm": "This is half the correct chord length.",
            "8 cm": "This is not the correct result of applying the Pythagoras theorem.",
            "10 cm": "This is the diameter of the circle, not the length of the chord."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 90
    }
];
