import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl4_ch13_t2_qe1',
        type: "mcq",
        question: "What do we call the distance around a field or shape?",
        options: ["Area", "Perimeter", "Volume", "Radius"],
        correctAnswer: "Perimeter",
        explanation: "Perimeter is the total distance around the edge of a shape or field.",
        wrongAnswerExplanations: {
            "Area": "Area measures the space inside a shape, not the distance around it.",
            "Volume": "Volume measures the space inside a 3D object, not the distance around a 2D shape.",
            "Radius": "Radius is the distance from the center to the edge of a circle."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch13_t2_qe2',
        type: "mcq",
        question: "If a square field has a side length of 5 meters, what is its perimeter?",
        options: ["10 meters", "15 meters", "20 meters", "25 meters"],
        correctAnswer: "20 meters",
        explanation: "The perimeter of a square is 4 × side length. So, 4 × 5 = 20 meters.",
        wrongAnswerExplanations: {
            "10 meters": "This is only counting two sides of the square.",
            "15 meters": "This is counting three sides of the square.",
            "25 meters": "This is the area of the square (5 × 5), not the perimeter."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch13_t2_qe3',
        type: "mcq",
        question: "Which unit would be best to measure the perimeter of a playground?",
        options: ["Centimeters", "Meters", "Kilometers", "Millimeters"],
        correctAnswer: "Meters",
        explanation: "Meters are suitable for measuring medium-sized areas like playgrounds.",
        wrongAnswerExplanations: {
            "Centimeters": "Centimeters are too small for efficiently measuring a playground.",
            "Kilometers": "Kilometers are too large for a playground measurement.",
            "Millimeters": "Millimeters are far too small for measuring a playground perimeter."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch13_t2_qe4',
        type: "mcq",
        question: "How do you find the perimeter of a rectangle?",
        options: ["Add all four sides", "Multiply length × width", "Add length + width", "2 × (length + width)"],
        correctAnswer: "2 × (length + width)",
        explanation: "For a rectangle, perimeter = 2 × (length + width) or 2 × length + 2 × width.",
        wrongAnswerExplanations: {
            "Add all four sides": "This is correct in principle, but there's a simpler formula since opposite sides are equal.",
            "Multiply length × width": "This gives the area, not the perimeter.",
            "Add length + width": "This only accounts for half of the perimeter."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch13_t2_qe5',
        type: "mcq",
        question: "A rectangular field has length 8 m and width 5 m. What is its perimeter?",
        options: ["13 m", "26 m", "40 m", "30 m"],
        correctAnswer: "26 m",
        explanation: "Perimeter = 2 × (length + width) = 2 × (8 + 5) = 2 × 13 = 26 m.",
        wrongAnswerExplanations: {
            "13 m": "This is just length + width, not the full perimeter.",
            "40 m": "This is the area (8 × 5), not the perimeter.",
            "30 m": "This is incorrect. The correct calculation is 2 × (8 + 5) = 26 m."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch13_t2_qe6',
        type: "mcq",
        question: "If we need to put a fence around a square garden with sides of 7 meters each, how much fencing material do we need?",
        options: ["7 meters", "14 meters", "21 meters", "28 meters"],
        correctAnswer: "28 meters",
        explanation: "The amount of fencing needed equals the perimeter: 4 × 7 = 28 meters.",
        wrongAnswerExplanations: {
            "7 meters": "This is just one side of the square, not the full perimeter.",
            "14 meters": "This only accounts for two sides of the square.",
            "21 meters": "This only accounts for three sides of the square."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch13_t2_qe7',
        type: "mcq",
        question: "What happens to the perimeter of a square if the length of each side is doubled?",
        options: ["It stays the same", "It doubles", "It triples", "It becomes four times larger"],
        correctAnswer: "It doubles",
        explanation: "If the side length doubles, the perimeter also doubles because perimeter = 4 × side length.",
        wrongAnswerExplanations: {
            "It stays the same": "The perimeter changes when the side length changes.",
            "It triples": "Doubling the side length doesn't triple the perimeter.",
            "It becomes four times larger": "This would happen to the area, not the perimeter."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch13_t2_qe8',
        type: "mcq",
        question: "A triangular field has sides measuring 5 m, 7 m, and 9 m. What is its perimeter?",
        options: ["15 m", "21 m", "35 m", "63 m"],
        correctAnswer: "21 m",
        explanation: "The perimeter of a triangle is the sum of all three sides: 5 + 7 + 9 = 21 m.",
        wrongAnswerExplanations: {
            "15 m": "This doesn't account for all three sides of the triangle.",
            "35 m": "This is an incorrect calculation of the three sides.",
            "63 m": "This is the product of the three sides, not their sum."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch13_t2_qe9',
        type: "mcq",
        question: "If a square field has a perimeter of 36 meters, how long is each side?",
        options: ["4 meters", "9 meters", "12 meters", "36 meters"],
        correctAnswer: "9 meters",
        explanation: "For a square, side length = perimeter ÷ 4. So, 36 ÷ 4 = 9 meters.",
        wrongAnswerExplanations: {
            "4 meters": "This is incorrect. 4 × 4 = 16 meters, not 36 meters.",
            "12 meters": "This would make the perimeter 48 meters, not 36 meters.",
            "36 meters": "This would be the side length if there was only one side, not four."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch13_t2_qe10',
        type: "mcq",
        question: "A rectangular vegetable garden has a length of 12 meters and a width of 8 meters. How much fencing is needed to go around it?",
        options: ["20 meters", "40 meters", "96 meters", "48 meters"],
        correctAnswer: "40 meters",
        explanation: "Perimeter = 2 × (length + width) = 2 × (12 + 8) = 2 × 20 = 40 meters of fencing.",
        wrongAnswerExplanations: {
            "20 meters": "This is just the length + width, not the full perimeter.",
            "96 meters": "This is the area (12 × 8), not the perimeter.",
            "48 meters": "This is incorrect. The correct calculation is 2 × (12 + 8) = 40 meters."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch13_t2_qe11',
        type: "mcq",
        question: "Ram wants to put a ribbon around the edge of a square picture frame with sides of 20 cm each. How much ribbon does he need?",
        options: ["20 cm", "40 cm", "60 cm", "80 cm"],
        correctAnswer: "80 cm",
        explanation: "The amount of ribbon needed equals the perimeter: 4 × 20 = 80 cm.",
        wrongAnswerExplanations: {
            "20 cm": "This is just one side of the square, not the full perimeter.",
            "40 cm": "This only accounts for two sides of the square.",
            "60 cm": "This only accounts for three sides of the square."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch13_t2_qe12',
        type: "mcq",
        question: "Which shape with a perimeter of 20 cm could have sides of 5 cm each?",
        options: ["Triangle", "Square", "Rectangle", "Pentagon"],
        correctAnswer: "Square",
        explanation: "A square has 4 equal sides. If each side is 5 cm, the perimeter is 4 × 5 = 20 cm.",
        wrongAnswerExplanations: {
            "Triangle": "A triangle with equal sides of 5 cm would have a perimeter of 15 cm.",
            "Rectangle": "A rectangle has two pairs of equal sides, so it couldn't have all sides equal to 5 cm.",
            "Pentagon": "A pentagon with equal sides of 5 cm would have a perimeter of 25 cm."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch13_t2_qe13',
        type: "mcq",
        question: "Meera's garden is in the shape of a rectangle with length 15 m and width 10 m. She wants to put a fence around it. If fencing costs ₹50 per meter, how much will she spend?",
        options: ["₹1,250", "₹2,500", "₹500", "₹750"],
        correctAnswer: "₹2,500",
        explanation: "Perimeter = 2 × (15 + 10) = 2 × 25 = 50 m. Cost = 50 × 50 = ₹2,500.",
        wrongAnswerExplanations: {
            "₹1,250": "This calculation is incorrect. The perimeter is 50 m, so cost is 50 × 50 = ₹2,500.",
            "₹500": "This isn't enough for the complete perimeter.",
            "₹750": "This calculation is incorrect. The full cost is ₹2,500."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch13_t2_qe14',
        type: "mcq",
        question: "A rectangular field has a perimeter of 30 meters. If its length is 8 meters, what is its width?",
        options: ["7 meters", "14 meters", "15 meters", "22 meters"],
        correctAnswer: "7 meters",
        explanation: "Using the formula: 2 × (length + width) = perimeter, we get 2 × (8 + width) = 30, so width = 7 meters.",
        wrongAnswerExplanations: {
            "14 meters": "This would give a perimeter of 2 × (8 + 14) = 44 meters, not 30 meters.",
            "15 meters": "This would give a perimeter of 2 × (8 + 15) = 46 meters, not 30 meters.",
            "22 meters": "This would give a perimeter of 2 × (8 + 22) = 60 meters, not 30 meters."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch13_t2_qe15',
        type: "mcq",
        question: "Which of these has the largest perimeter?",
        options: ["A square with sides of 6 cm", "A rectangle with length 8 cm and width 4 cm", "A triangle with sides 7 cm, 8 cm, and 9 cm", "A square with sides of 5 cm"],
        correctAnswer: "A rectangle with length 8 cm and width 4 cm",
        explanation: "Square: 4 × 6 = 24 cm. Rectangle: 2 × (8 + 4) = 24 cm. Triangle: 7 + 8 + 9 = 24 cm. Other square: 4 × 5 = 20 cm.",
        wrongAnswerExplanations: {
            "A square with sides of 6 cm": "This has a perimeter of 24 cm, which equals the rectangle and triangle.",
            "A triangle with sides 7 cm, 8 cm, and 9 cm": "This has a perimeter of 24 cm, which equals the square and rectangle.",
            "A square with sides of 5 cm": "This has a perimeter of 20 cm, which is smaller than the others."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch13_t2_qe16',
        type: "mcq",
        question: "If the perimeter of a square is equal to the perimeter of a rectangle with length 9 cm and width 3 cm, what is the side length of the square?",
        options: ["3 cm", "6 cm", "9 cm", "12 cm"],
        correctAnswer: "6 cm",
        explanation: "Rectangle perimeter = 2 × (9 + 3) = 24 cm. Square perimeter = 4 × side, so side = 24 ÷ 4 = 6 cm.",
        wrongAnswerExplanations: {
            "3 cm": "A square with 3 cm sides would have a perimeter of 12 cm, not 24 cm.",
            "9 cm": "A square with 9 cm sides would have a perimeter of 36 cm, not 24 cm.",
            "12 cm": "A square with 12 cm sides would have a perimeter of 48 cm, not 24 cm."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch13_t2_qe17',
        type: "mcq",
        question: "A farmer has 48 meters of fencing. If he wants to fence a square field, what will be the side length of the field?",
        options: ["12 meters", "16 meters", "24 meters", "48 meters"],
        correctAnswer: "12 meters",
        explanation: "For a square, the side length is the perimeter divided by 4: 48 ÷ 4 = 12 meters.",
        wrongAnswerExplanations: {
            "16 meters": "This would require 64 meters of fencing, which is more than available.",
            "24 meters": "This would require 96 meters of fencing, which is more than available.",
            "48 meters": "This would require 192 meters of fencing, which is much more than available."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch13_t2_qe18',
        type: "mcq",
        question: "Ravi is putting a border around a rectangular mat that is 80 cm long and 60 cm wide. How much border material does he need?",
        options: ["140 cm", "280 cm", "480 cm", "4,800 cm"],
        correctAnswer: "280 cm",
        explanation: "Perimeter = 2 × (length + width) = 2 × (80 + 60) = 2 × 140 = 280 cm of border material.",
        wrongAnswerExplanations: {
            "140 cm": "This is just the sum of length and width, not the full perimeter.",
            "480 cm": "This is an incorrect calculation of the perimeter.",
            "4,800 cm": "This is the area (80 × 60), not the perimeter."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch13_t2_qe19',
        type: "mcq",
        question: "If the width of a rectangular field is increased by 2 meters and the length remains the same, what happens to the perimeter?",
        options: ["Increases by 2 meters", "Increases by 4 meters", "Decreases by 2 meters", "Remains the same"],
        correctAnswer: "Increases by 4 meters",
        explanation: "The width appears twice in the perimeter formula, so increasing width by 2 m increases perimeter by 2 × 2 = 4 m.",
        wrongAnswerExplanations: {
            "Increases by 2 meters": "This doesn't account for both sides where the width is measured.",
            "Decreases by 2 meters": "The perimeter would increase, not decrease.",
            "Remains the same": "The perimeter changes when any side length changes."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch13_t2_qe20',
        type: "mcq",
        question: "A square and a rectangle have the same perimeter of 40 cm. If the rectangle has a width of 5 cm, what is its length?",
        options: ["10 cm", "15 cm", "20 cm", "30 cm"],
        correctAnswer: "15 cm",
        explanation: "For rectangle: 2 × (length + 5) = 40, so length = 15 cm.",
        wrongAnswerExplanations: {
            "10 cm": "This would give a perimeter of 2 × (10 + 5) = 30 cm, not 40 cm.",
            "20 cm": "This would give a perimeter of 2 × (20 + 5) = 50 cm, not 40 cm.",
            "30 cm": "This would give a perimeter of 2 × (30 + 5) = 70 cm, not 40 cm."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 60
    }
];
