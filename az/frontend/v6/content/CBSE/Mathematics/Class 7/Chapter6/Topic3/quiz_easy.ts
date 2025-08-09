// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 7\Chapter6\Topic3\quiz_easy.ts
import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: "cl7_ch6_t3_qe1",
        type: "mcq",
        question: "In a right-angled triangle, the square of the length of the hypotenuse is equal to the _________.",
        options: ["Sum of the other two sides", "Sum of squares of other two sides", "Product of other two sides", "Difference of other two sides"],
        correctAnswer: "Sum of squares of other two sides",
        explanation: "The Pythagoras theorem states that the square of the hypotenuse equals the sum of squares of the other two sides.",
        wrongAnswerExplanations: {
            "Sum of the other two sides": "This is incorrect as the theorem involves squares of sides, not just the sides themselves.",
            "Product of other two sides": "The Pythagoras theorem uses addition of squares, not multiplication.",
            "Difference of other two sides": "The theorem uses the sum, not difference, of the squares of the two sides."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: "cl7_ch6_t3_qe2",
        type: "mcq",
        question: "Which of the following triangles is a right-angled triangle?",
        options: ["3, 4, 5", "2, 3, 4", "5, 6, 7", "4, 5, 6"],
        correctAnswer: "3, 4, 5",
        explanation: "For a 3-4-5 triangle: 3² + 4² = 5². Since 9 + 16 = 25, it is a right-angled triangle.",
        wrongAnswerExplanations: {
            "2, 3, 4": "For a 2-3-4 triangle: 2² + 3² = 4 + 9 = 13, but 4² = 16. Not right-angled.",
            "5, 6, 7": "For a 5-6-7 triangle: 5² + 6² = 25 + 36 = 61, but 7² = 49. Not right-angled.",
            "4, 5, 6": "For a 4-5-6 triangle: 4² + 5² = 16 + 25 = 41, but 6² = 36. Not right-angled."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: "cl7_ch6_t3_qe3",
        type: "mcq",
        question: "In a right-angled triangle, if the two legs are 6 cm and 8 cm, what is the length of the hypotenuse?",
        options: ["10 cm", "14 cm", "12 cm", "9 cm"],
        correctAnswer: "10 cm",
        explanation: "Using Pythagoras theorem: c² = 6² + 8² = 36 + 64 = 100, so c = 10 cm.",
        wrongAnswerExplanations: {
            "14 cm": "This is the sum of the two sides (6 + 8), not the correct application of Pythagoras theorem.",
            "12 cm": "This is not the correct result of applying the Pythagoras theorem.",
            "9 cm": "This is not the correct result of applying the Pythagoras theorem."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: "cl7_ch6_t3_qe4",
        type: "mcq",
        question: "The Pythagoras theorem is applicable to which type of triangle?",
        options: ["All triangles", "Only right-angled triangles", "Only equilateral triangles", "Only isosceles triangles"],
        correctAnswer: "Only right-angled triangles",
        explanation: "The Pythagoras theorem (a² + b² = c²) is valid only for right-angled triangles.",
        wrongAnswerExplanations: {
            "All triangles": "The theorem only applies to triangles with one angle of exactly 90°.",
            "Only equilateral triangles": "Equilateral triangles have three equal sides and angles, but the theorem applies to right triangles.",
            "Only isosceles triangles": "Isosceles triangles have two equal sides, but the theorem applies to right triangles."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: "cl7_ch6_t3_qe5",
        type: "mcq",
        question: "If the hypotenuse of a right-angled triangle is 13 cm and one leg is 5 cm, what is the length of the other leg?",
        options: ["12 cm", "8 cm", "9 cm", "11 cm"],
        correctAnswer: "12 cm",
        explanation: "Using Pythagoras theorem: b² = 13² - 5² = 169 - 25 = 144, so b = 12 cm.",
        wrongAnswerExplanations: {
            "8 cm": "This is the difference of the two given sides (13 - 5), not the correct application of Pythagoras theorem.",
            "9 cm": "This is not the correct result of applying the Pythagoras theorem.",
            "11 cm": "This is not the correct result of applying the Pythagoras theorem."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: "cl7_ch6_t3_qe6",
        type: "mcq",
        question: "Which of the following triplets forms a Pythagorean triplet?",
        options: ["6, 8, 10", "5, 7, 8", "4, 6, 8", "7, 9, 11"],
        correctAnswer: "6, 8, 10",
        explanation: "For the triplet 6, 8, 10: 6² + 8² = 36 + 64 = 100 = 10², so it's a Pythagorean triplet.",
        wrongAnswerExplanations: {
            "5, 7, 8": "5² + 7² = 25 + 49 = 74, but 8² = 64, so this is not a Pythagorean triplet.",
            "4, 6, 8": "4² + 6² = 16 + 36 = 52, but 8² = 64, so this is not a Pythagorean triplet.",
            "7, 9, 11": "7² + 9² = 49 + 81 = 130, but 11² = 121, so this is not a Pythagorean triplet."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: "cl7_ch6_t3_qe7",
        type: "mcq",
        question: "A ladder 10 m long reaches a window 8 m above the ground. How far is the foot of the ladder from the wall?",
        options: ["6 m", "8 m", "5 m", "4 m"],
        correctAnswer: "6 m",
        explanation: "Using Pythagoras theorem: distance² = 10² - 8² = 100 - 64 = 36, so distance = 6 m.",
        wrongAnswerExplanations: {
            "8 m": "This equals the height, but we need to find the distance from the wall using Pythagoras theorem.",
            "5 m": "This is not the correct result of applying the Pythagoras theorem.",
            "4 m": "This is not the correct result of applying the Pythagoras theorem."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: "cl7_ch6_t3_qe8",
        type: "mcq",
        question: "What is the formula for the Pythagoras theorem?",
        options: ["a + b = c", "a² + b² = c²", "a × b = c", "a² - b² = c²"],
        correctAnswer: "a² + b² = c²",
        explanation: "The Pythagoras theorem states that the square of the hypotenuse equals the sum of squares of the other two sides.",
        wrongAnswerExplanations: {
            "a + b = c": "This equation doesn't involve squares and is not the Pythagoras theorem.",
            "a × b = c": "The Pythagoras theorem uses addition of squares, not multiplication.",
            "a² - b² = c²": "The theorem uses the sum, not difference, of the squares."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: "cl7_ch6_t3_qe9",
        type: "mcq",
        question: "In a right-angled triangle, if both legs are equal, what is the relationship between a leg and the hypotenuse?",
        options: ["The hypotenuse is twice the leg", "The hypotenuse is equal to the leg", "The hypotenuse is √2 times the leg", "The hypotenuse is half the leg"],
        correctAnswer: "The hypotenuse is √2 times the leg",
        explanation: "If both legs = a, then by Pythagoras theorem: a² + a² = c², so c = a√2.",
        wrongAnswerExplanations: {
            "The hypotenuse is twice the leg": "This is incorrect. Using Pythagoras theorem, c = a√2, not 2a.",
            "The hypotenuse is equal to the leg": "If this were true, the triangle would be flat, not right-angled.",
            "The hypotenuse is half the leg": "This is impossible as the hypotenuse must be longer than either leg."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: "cl7_ch6_t3_qe10",
        type: "mcq",
        question: "The sides of a triangle are 5 cm, 12 cm, and 13 cm. Is it a right-angled triangle?",
        options: ["Yes", "No", "Can't determine", "It's an equilateral triangle"],
        correctAnswer: "Yes",
        explanation: "Check if 5² + 12² = 13². Since 25 + 144 = 169 = 13², it is a right-angled triangle.",
        wrongAnswerExplanations: {
            "No": "It is a right-angled triangle as it satisfies the Pythagoras theorem.",
            "Can't determine": "We can determine it using the Pythagoras theorem.",
            "It's an equilateral triangle": "An equilateral triangle has all sides equal, which this doesn't."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: "cl7_ch6_t3_qe11",
        type: "mcq",
        question: "Which Greek mathematician is credited with the Pythagoras theorem?",
        options: ["Archimedes", "Euclid", "Pythagoras", "Thales"],
        correctAnswer: "Pythagoras",
        explanation: "The theorem is named after Pythagoras, a Greek mathematician who lived around 570-495 BCE.",
        wrongAnswerExplanations: {
            "Archimedes": "Archimedes is known for other principles, not the Pythagoras theorem.",
            "Euclid": "Euclid compiled geometric principles but didn't discover the Pythagoras theorem.",
            "Thales": "Thales is known for other theorems, not the Pythagoras theorem."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: "cl7_ch6_t3_qe12",
        type: "mcq",
        question: "Which side of a right-angled triangle is called the hypotenuse?",
        options: ["The longest side", "The side opposite to the right angle", "Any of the three sides", "The shortest side"],
        correctAnswer: "The side opposite to the right angle",
        explanation: "The hypotenuse is the side opposite to the right angle in a right-angled triangle.",
        wrongAnswerExplanations: {
            "The longest side": "While the hypotenuse is always the longest side, that's not its definition.",
            "Any of the three sides": "Only one specific side is called the hypotenuse.",
            "The shortest side": "The hypotenuse is always the longest side, never the shortest."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: "cl7_ch6_t3_qe13",
        type: "mcq",
        question: "If leg a = 9 and leg b = 12 in a right-angled triangle, what is the hypotenuse c?",
        options: ["15", "21", "18", "√225"],
        correctAnswer: "15",
        explanation: "c² = 9² + 12² = 81 + 144 = 225, so c = 15.",
        wrongAnswerExplanations: {
            "21": "This is the sum of the two legs, not the hypotenuse.",
            "18": "This is not the result of correctly applying the Pythagoras theorem.",
            "√225": "While correct, this simplifies to 15, which is the exact value."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: "cl7_ch6_t3_qe14",
        type: "mcq",
        question: "What is the value of the longest side in a right-angled triangle with sides 7 cm and 24 cm?",
        options: ["25 cm", "31 cm", "17 cm", "26 cm"],
        correctAnswer: "25 cm",
        explanation: "Using Pythagoras theorem: c² = 7² + 24² = 49 + 576 = 625, so c = 25 cm.",
        wrongAnswerExplanations: {
            "31 cm": "This is the sum of the two given sides (7 + 24), not the hypotenuse.",
            "17 cm": "This is the difference of the two sides (24 - 7), not the hypotenuse.",
            "26 cm": "This is not the correct result of applying the Pythagoras theorem."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: "cl7_ch6_t3_qe15",
        type: "mcq",
        question: "A right-angled triangle has hypotenuse 10 cm and one leg 8 cm. What is the length of the other leg?",
        options: ["6 cm", "5 cm", "7 cm", "9 cm"],
        correctAnswer: "6 cm",
        explanation: "Using Pythagoras theorem: b² = 10² - 8² = 100 - 64 = 36, so b = 6 cm.",
        wrongAnswerExplanations: {
            "5 cm": "This is not the correct result of applying the Pythagoras theorem.",
            "7 cm": "This is not the correct result of applying the Pythagoras theorem.",
            "9 cm": "This is not the correct result of applying the Pythagoras theorem."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: "cl7_ch6_t3_qe16",
        type: "mcq",
        question: "Which of these is NOT a Pythagorean triplet?",
        options: ["3, 4, 5", "5, 12, 13", "8, 15, 17", "6, 7, 10"],
        correctAnswer: "6, 7, 10",
        explanation: "For 6, 7, 10: 6² + 7² = 36 + 49 = 85, but 10² = 100. So it's not a Pythagorean triplet.",
        wrongAnswerExplanations: {
            "3, 4, 5": "This is a valid Pythagorean triplet as 3² + 4² = 5².",
            "5, 12, 13": "This is a valid Pythagorean triplet as 5² + 12² = 13².",
            "8, 15, 17": "This is a valid Pythagorean triplet as 8² + 15² = 17²."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: "cl7_ch6_t3_qe17",
        type: "mcq",
        question: "The distance between two ships is 25 km. One ship sails 7 km north and the other sails a certain distance east. How far east did the second ship sail?",
        options: ["24 km", "18 km", "32 km", "20 km"],
        correctAnswer: "24 km",
        explanation: "Using Pythagoras theorem: distance_east² = 25² - 7² = 625 - 49 = 576, so distance_east = 24 km.",
        wrongAnswerExplanations: {
            "18 km": "This is not the correct result of applying the Pythagoras theorem.",
            "32 km": "This is the sum of 25 and 7, not the correct application of Pythagoras theorem.",
            "20 km": "This is not the correct result of applying the Pythagoras theorem."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: "cl7_ch6_t3_qe18",
        type: "mcq",
        question: "A rectangular TV screen has a width of 48 cm and a height of 36 cm. What is the diagonal length of the screen?",
        options: ["60 cm", "84 cm", "54 cm", "72 cm"],
        correctAnswer: "60 cm",
        explanation: "Using Pythagoras theorem: diagonal² = 48² + 36² = 2304 + 1296 = 3600, so diagonal = 60 cm.",
        wrongAnswerExplanations: {
            "84 cm": "This is the sum of the width and height (48 + 36), not the diagonal.",
            "54 cm": "This is not the correct result of applying the Pythagoras theorem.",
            "72 cm": "This is not the correct result of applying the Pythagoras theorem."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: "cl7_ch6_t3_qe19",
        type: "mcq",
        question: "If the legs of a right-angled triangle are in the ratio 3:4, what is the ratio of the shorter leg to the hypotenuse?",
        options: ["3:4", "3:5", "4:5", "4:7"],
        correctAnswer: "3:5",
        explanation: "If legs are 3k and 4k, the hypotenuse is 5k (using Pythagoras theorem). So ratio is 3:5.",
        wrongAnswerExplanations: {
            "3:4": "This is the ratio of the legs, not the ratio of shorter leg to hypotenuse.",
            "4:5": "This is the ratio of the longer leg to hypotenuse, not the shorter leg.",
            "4:7": "This is not the correct ratio derived from the Pythagoras theorem."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: "cl7_ch6_t3_qe20",
        type: "mcq",
        question: "A man walks 12 km due east and then 5 km due north. How far is he from his starting point?",
        options: ["13 km", "17 km", "7 km", "10 km"],
        correctAnswer: "13 km",
        explanation: "Using Pythagoras theorem: distance² = 12² + 5² = 144 + 25 = 169, so distance = 13 km.",
        wrongAnswerExplanations: {
            "17 km": "This is the total distance walked (12 + 5), not the direct distance.",
            "7 km": "This is the difference (12 - 5), not the correct application of Pythagoras theorem.",
            "10 km": "This is not the correct result of applying the Pythagoras theorem."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 60
    }
];
