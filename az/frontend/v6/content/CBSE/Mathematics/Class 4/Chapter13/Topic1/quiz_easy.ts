import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl4_ch13_t1_qe1',
        type: "mcq",
        question: "What is the perimeter of a shape?",
        options: ["The total area inside the shape", "The distance around the outside of the shape", "The length of the shape", "The width of the shape"],
        correctAnswer: "The distance around the outside of the shape",
        explanation: "Perimeter is the total distance around the boundary of a shape, like finding the length of its outline. 📏",
        wrongAnswerExplanations: {
            "The total area inside the shape": "This is area, not perimeter. Perimeter measures the boundary length.",
            "The length of the shape": "Length is just one dimension, while perimeter includes all sides of a shape.",
            "The width of the shape": "Width is just one dimension, while perimeter includes all sides of a shape."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch13_t1_qe2',
        type: "mcq",
        question: "Which of these is used to measure perimeter?",
        options: ["Square centimeters (cm²)", "Kilograms (kg)", "Centimeters (cm)", "Liters (L)"],
        correctAnswer: "Centimeters (cm)",
        explanation: "Perimeter is a length measurement, so we use length units like centimeters (cm), meters (m), or inches. 📏",
        wrongAnswerExplanations: {
            "Square centimeters (cm²)": "Square centimeters measure area, not perimeter.",
            "Kilograms (kg)": "Kilograms measure weight/mass, not distance or perimeter.",
            "Liters (L)": "Liters measure volume of liquids, not perimeter."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch13_t1_qe3',
        type: "mcq",
        question: "What is the perimeter of a square with each side measuring 5 cm?",
        options: ["5 cm", "10 cm", "15 cm", "20 cm"],
        correctAnswer: "20 cm",
        explanation: "A square has 4 equal sides. Perimeter = 4 × side length = 4 × 5 cm = 20 cm. 🔲",
        wrongAnswerExplanations: {
            "5 cm": "This is just the length of one side, not the perimeter.",
            "10 cm": "This only accounts for two sides of the square.",
            "15 cm": "This only accounts for three sides of the square."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch13_t1_qe4',
        type: "mcq",
        question: "If you want to put a fence around a rectangular garden with length 8 m and width 6 m, how much fencing do you need?",
        options: ["14 m", "24 m", "28 m", "48 m"],
        correctAnswer: "28 m",
        explanation: "Perimeter of rectangle = 2 × (length + width) = 2 × (8 m + 6 m) = 2 × 14 m = 28 m. 🏡",
        wrongAnswerExplanations: {
            "14 m": "This is just the sum of length and width, not the perimeter.",
            "24 m": "This is an incorrect calculation of the perimeter.",
            "48 m": "This is the area (8 × 6 = 48 m²), not the perimeter."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch13_t1_qe5',
        type: "mcq",
        question: "What happens to the perimeter of a square if each side doubles in length?",
        options: ["It stays the same", "It doubles", "It triples", "It becomes four times larger"],
        correctAnswer: "It doubles",
        explanation: "If each side doubles, the perimeter also doubles. For example, if side = 5 cm, perimeter = 20 cm. If side = 10 cm, perimeter = 40 cm. 📈",
        wrongAnswerExplanations: {
            "It stays the same": "The perimeter changes when side lengths change.",
            "It triples": "When sides double, perimeter doubles, not triples.",
            "It becomes four times larger": "This would be true for area, not perimeter."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch13_t1_qe6',
        type: "mcq",
        question: "A rectangular field has a perimeter of 30 meters. If its length is 8 meters, what is its width?",
        options: ["7 meters", "8 meters", "14 meters", "22 meters"],
        correctAnswer: "7 meters",
        explanation: "Perimeter = 2 × (length + width). 30 = 2 × (8 + width). 15 = 8 + width. Width = 7 meters. 🧮",
        wrongAnswerExplanations: {
            "8 meters": "This would make the field a square, but the perimeter would be 32 meters.",
            "14 meters": "This gives perimeter of 2 × (8 + 14) = 44 meters, not 30 meters.",
            "22 meters": "This gives perimeter of 2 × (8 + 22) = 60 meters, not 30 meters."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch13_t1_qe7',
        type: "mcq",
        question: "Which of these shapes has the largest perimeter if each side is 2 cm long?",
        options: ["Triangle with 3 sides", "Square with 4 sides", "Pentagon with 5 sides", "Hexagon with 6 sides"],
        correctAnswer: "Hexagon with 6 sides",
        explanation: "Each shape has sides of 2 cm. Perimeter = number of sides × 2 cm. Hexagon has most sides (6), so highest perimeter: 6 × 2 = 12 cm. 🔯",
        wrongAnswerExplanations: {
            "Triangle with 3 sides": "Perimeter = 3 × 2 cm = 6 cm, which is less than other options.",
            "Square with 4 sides": "Perimeter = 4 × 2 cm = 8 cm, which is less than pentagon and hexagon.",
            "Pentagon with 5 sides": "Perimeter = 5 × 2 cm = 10 cm, which is less than hexagon."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch13_t1_qe8',
        type: "mcq",
        question: "What is the area of a shape?",
        options: ["The distance around the shape", "The space covered by the shape", "The number of corners in the shape", "The length of the longest side"],
        correctAnswer: "The space covered by the shape",
        explanation: "Area measures the amount of space or surface covered by a shape, like how much paper would be needed to cover it completely. 📄",
        wrongAnswerExplanations: {
            "The distance around the shape": "This is the definition of perimeter, not area.",
            "The number of corners in the shape": "This is not related to area; it's related to vertices or angles.",
            "The length of the longest side": "This is just one dimension of the shape, not its area."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch13_t1_qe9',
        type: "mcq",
        question: "Which unit is used to measure area?",
        options: ["Centimeters (cm)", "Square centimeters (cm²)", "Kilograms (kg)", "Liters (L)"],
        correctAnswer: "Square centimeters (cm²)",
        explanation: "Area is measured in square units like square centimeters (cm²) or square meters (m²), representing squares with 1 cm or 1 m sides. 📏²",
        wrongAnswerExplanations: {
            "Centimeters (cm)": "Centimeters measure length, not area.",
            "Kilograms (kg)": "Kilograms measure weight/mass, not area.",
            "Liters (L)": "Liters measure volume of liquids, not area."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch13_t1_qe10',
        type: "mcq",
        question: "How do you find the area of a rectangle?",
        options: ["Add all sides", "Subtract width from length", "Multiply length by width", "Divide length by width"],
        correctAnswer: "Multiply length by width",
        explanation: "The area of a rectangle is calculated by multiplying its length by its width (Area = length × width). 🔍",
        wrongAnswerExplanations: {
            "Add all sides": "This calculates the perimeter, not the area.",
            "Subtract width from length": "This doesn't calculate area or any useful measurement.",
            "Divide length by width": "This doesn't calculate area or any standard measurement."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch13_t1_qe11',
        type: "mcq",
        question: "What is the area of a square with sides of 3 cm each?",
        options: ["3 cm²", "6 cm²", "9 cm²", "12 cm²"],
        correctAnswer: "9 cm²",
        explanation: "Area of a square = side × side = 3 cm × 3 cm = 9 cm². Think of it as 9 little squares of 1 cm². 🔲",
        wrongAnswerExplanations: {
            "3 cm²": "This is just the length of one side, not the area.",
            "6 cm²": "This is not the area of the square with 3 cm sides.",
            "12 cm²": "This is 4 × 3, which would be the perimeter, not the area."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch13_t1_qe12',
        type: "mcq",
        question: "A rectangular garden has a length of 5 m and width of 4 m. What is its area?",
        options: ["9 m²", "18 m²", "20 m²", "25 m²"],
        correctAnswer: "20 m²",
        explanation: "Area of rectangle = length × width = 5 m × 4 m = 20 m². This is like 20 squares with 1 m sides. 🏡",
        wrongAnswerExplanations: {
            "9 m²": "This is not the area of a 5 m × 4 m rectangle.",
            "18 m²": "This is 2 × (5 + 4), which would be the perimeter, not the area.",
            "25 m²": "This would be the area if it were a 5 m × 5 m square."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch13_t1_qe13',
        type: "mcq",
        question: "What happens to the area of a square if each side doubles in length?",
        options: ["It doubles", "It triples", "It becomes four times larger", "It stays the same"],
        correctAnswer: "It becomes four times larger",
        explanation: "When side length doubles, area increases by factor of 4. If side = 3 cm, area = 9 cm². If side = 6 cm, area = 36 cm² (4 times larger). 📊",
        wrongAnswerExplanations: {
            "It doubles": "This would be true for perimeter, not area.",
            "It triples": "Area increases by a factor of 4, not 3, when sides double.",
            "It stays the same": "Area changes when dimensions change."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch13_t1_qe14',
        type: "mcq",
        question: "A square and a rectangle both have the same perimeter of 20 cm. Which statement is TRUE?",
        options: ["The square always has a larger area", "The rectangle always has a larger area", "They always have the same area", "We need to know the sides to determine which has a larger area"],
        correctAnswer: "The square always has a larger area",
        explanation: "For the same perimeter, a square always has the largest area among all rectangles. The square's sides would be 5 cm each, giving an area of 25 cm². 🧩",
        wrongAnswerExplanations: {
            "The rectangle always has a larger area": "This is incorrect; squares maximize area for a given perimeter.",
            "They always have the same area": "Different rectangles with the same perimeter can have different areas.",
            "We need to know the sides to determine which has a larger area": "While true generally, we know a square maximizes area for a given perimeter."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch13_t1_qe15',
        type: "mcq",
        question: "Ravi wants to put a fence around his square garden with area 36 m². How much fencing does he need?",
        options: ["18 m", "24 m", "36 m", "72 m"],
        correctAnswer: "24 m",
        explanation: "Area of square = 36 m². Side length = √36 = 6 m. Perimeter = 4 × side = 4 × 6 m = 24 m of fencing needed. 🏡",
        wrongAnswerExplanations: {
            "18 m": "This is not the perimeter of a square with area 36 m².",
            "36 m": "This is the area, not the perimeter.",
            "72 m": "This is twice the area, not the perimeter."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch13_t1_qe16',
        type: "mcq",
        question: "Which of these has both a larger perimeter AND a larger area?",
        options: ["A square with 3 cm sides", "A rectangle with length 4 cm and width 2 cm", "A square with 4 cm sides", "A rectangle with length 5 cm and width 1 cm"],
        correctAnswer: "A square with 4 cm sides",
        explanation: "Square (4 cm): Perimeter = 16 cm, Area = 16 cm². This is largest in both categories compared to others. 🏆",
        wrongAnswerExplanations: {
            "A square with 3 cm sides": "Perimeter = 12 cm, Area = 9 cm². Both smaller than the 4 cm square.",
            "A rectangle with length 4 cm and width 2 cm": "Perimeter = 12 cm, Area = 8 cm². Both smaller than the 4 cm square.",
            "A rectangle with length 5 cm and width 1 cm": "Perimeter = 12 cm, Area = 5 cm². Both smaller than the 4 cm square."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch13_t1_qe17',
        type: "mcq",
        question: "In a rectangular field, the length is 12 m and the width is 8 m. What is the difference between its perimeter and area?",
        options: ["0 m", "40 m", "56 m", "96 m"],
        correctAnswer: "40 m",
        explanation: "Perimeter = 2 × (12 + 8) = 40 m. Area = 12 × 8 = 96 m². Difference = 96 - 40 = 56 m. But we need to compare same units. 🔄",
        wrongAnswerExplanations: {
            "0 m": "The perimeter and area have different values and units.",
            "40 m": "This is just the perimeter, not the difference between perimeter and area.",
            "96 m": "This is just the area, not the difference between area and perimeter."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch13_t1_qe18',
        type: "mcq",
        question: "Which of these real-life examples represents perimeter?",
        options: ["The amount of carpet needed to cover a room", "The amount of paint needed for a wall", "The length of fence needed around a garden", "The number of tiles needed for a floor"],
        correctAnswer: "The length of fence needed around a garden",
        explanation: "Perimeter represents the boundary around a shape, so the fence needed around a garden is a perfect real-life example. 🏡",
        wrongAnswerExplanations: {
            "The amount of carpet needed to cover a room": "This represents area, not perimeter.",
            "The amount of paint needed for a wall": "This represents area, not perimeter.",
            "The number of tiles needed for a floor": "This represents area, not perimeter."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch13_t1_qe19',
        type: "mcq",
        question: "Which of these real-life examples represents area?",
        options: ["The length of ribbon around a gift box", "The number of seats in a movie theater", "The length of a running track", "The size of a page in your notebook"],
        correctAnswer: "The size of a page in your notebook",
        explanation: "Area represents the surface covered by a shape, so the size of a notebook page (how much space it covers) is measuring area. 📝",
        wrongAnswerExplanations: {
            "The length of ribbon around a gift box": "This represents perimeter, not area.",
            "The number of seats in a movie theater": "This is counting individual items, not measuring area.",
            "The length of a running track": "This represents distance or perimeter, not area."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch13_t1_qe20',
        type: "mcq",
        question: "A square field has a perimeter of 20 meters. What is its area?",
        options: ["16 m²", "25 m²", "36 m²", "100 m²"],
        correctAnswer: "25 m²",
        explanation: "Perimeter = 4 × side length, so side length = 20 ÷ 4 = 5 m. Area = side length × side length = 5 m × 5 m = 25 m². 🔲",
        wrongAnswerExplanations: {
            "16 m²": "This would be the area if each side were 4 m, but that would give a perimeter of 16 m.",
            "36 m²": "This would be the area if each side were 6 m, but that would give a perimeter of 24 m.",
            "100 m²": "This would be the area if each side were 10 m, but that would give a perimeter of 40 m."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 60
    }
];
