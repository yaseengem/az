import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl4_ch13_t3_qe1',
        type: "mcq",
        question: "Which of the following is a practical application of perimeter?",
        options: ["Calculating the area of a room", "Measuring the distance around a garden", "Finding the volume of a water tank", "Weighing vegetables"],
        correctAnswer: "Measuring the distance around a garden",
        explanation: "Perimeter is the total distance around a shape, like the boundary of a garden. 📏",
        wrongAnswerExplanations: {
            "Calculating the area of a room": "Area measures the space inside a shape, not the distance around it.",
            "Finding the volume of a water tank": "Volume measures the capacity or space inside a 3D object.",
            "Weighing vegetables": "Weight measurement has no direct relation to perimeter."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch13_t3_qe2',
        type: "mcq",
        question: "If a farmer wants to put a fence around his square field with side length 25 meters, how much fencing material will he need?",
        options: ["25 meters", "50 meters", "75 meters", "100 meters"],
        correctAnswer: "100 meters",
        explanation: "For a square, perimeter = 4 × side. So 4 × 25 = 100 meters of fencing material is needed. 🚜",
        wrongAnswerExplanations: {
            "25 meters": "This is just the length of one side, not the entire perimeter.",
            "50 meters": "This would only cover two sides of the square field.",
            "75 meters": "This would cover three sides but not the complete perimeter."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch13_t3_qe3',
        type: "mcq",
        question: "Why would someone need to find the perimeter of a playground?",
        options: ["To know how much space is available to play", "To determine how many children can fit inside", "To calculate how much fencing is needed around it", "To measure how high the slide is"],
        correctAnswer: "To calculate how much fencing is needed around it",
        explanation: "Perimeter helps determine the length of boundary needed, such as fencing around a playground. 🏫",
        wrongAnswerExplanations: {
            "To know how much space is available to play": "That would require calculating the area, not the perimeter.",
            "To determine how many children can fit inside": "This relates to area, not perimeter.",
            "To measure how high the slide is": "This is a height measurement, unrelated to perimeter."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch13_t3_qe4',
        type: "mcq",
        question: "A picture frame has a width of 15 cm and a height of 20 cm. What is the perimeter of the frame?",
        options: ["30 cm", "35 cm", "60 cm", "70 cm"],
        correctAnswer: "70 cm",
        explanation: "Perimeter of rectangle = 2(length + width) = 2(20 + 15) = 2(35) = 70 cm. 🖼️",
        wrongAnswerExplanations: {
            "30 cm": "This is only the sum of width and height, not the complete perimeter.",
            "35 cm": "This is just the sum of length and width (20 + 15), not the full perimeter.",
            "60 cm": "This is an incorrect calculation of the perimeter."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch13_t3_qe5',
        type: "mcq",
        question: "When measuring the perimeter of your classroom, what would you use?",
        options: ["A weighing scale", "A measuring tape or ruler", "A clock", "A thermometer"],
        correctAnswer: "A measuring tape or ruler",
        explanation: "A measuring tape or ruler measures length, which is needed to find the perimeter. 📏",
        wrongAnswerExplanations: {
            "A weighing scale": "This measures weight, not distance or length.",
            "A clock": "This measures time, not distance or length.",
            "A thermometer": "This measures temperature, not distance or length."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch13_t3_qe6',
        type: "mcq",
        question: "Which situation requires finding the perimeter?",
        options: ["Measuring how much water a bucket can hold", "Finding how much carpet is needed to cover a floor", "Calculating how much ribbon is needed to go around a gift box", "Determining how much paint is needed for a wall"],
        correctAnswer: "Calculating how much ribbon is needed to go around a gift box",
        explanation: "Ribbon around a box follows the perimeter, as it measures the distance around the object. 🎁",
        wrongAnswerExplanations: {
            "Measuring how much water a bucket can hold": "This involves volume, not perimeter.",
            "Finding how much carpet is needed to cover a floor": "This requires area calculation, not perimeter.",
            "Determining how much paint is needed for a wall": "This is related to the area of the wall, not its perimeter."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch13_t3_qe7',
        type: "mcq",
        question: "A triangular garden has sides of 4 m, 5 m, and 3 m. What is its perimeter?",
        options: ["8 m", "12 m", "10 m", "15 m"],
        correctAnswer: "12 m",
        explanation: "Perimeter of a triangle = sum of all sides. 4 m + 5 m + 3 m = 12 m. 🌱",
        wrongAnswerExplanations: {
            "8 m": "This doesn't include all three sides of the triangle.",
            "10 m": "This doesn't include all three sides of the triangle.",
            "15 m": "This is an incorrect sum of the three sides."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch13_t3_qe8',
        type: "mcq",
        question: "Why would someone measure the perimeter of a table?",
        options: ["To know how much food can fit on it", "To determine how many people can sit around it", "To calculate how heavy it is", "To find its height"],
        correctAnswer: "To determine how many people can sit around it",
        explanation: "Perimeter helps calculate the space around the table where people can sit. 🪑",
        wrongAnswerExplanations: {
            "To know how much food can fit on it": "This relates to the area of the table surface, not perimeter.",
            "To calculate how heavy it is": "This is related to weight/mass, not perimeter.",
            "To find its height": "Height is a vertical measurement, unrelated to perimeter."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch13_t3_qe9',
        type: "mcq",
        question: "A rectangular vegetable garden is 8 m long and 6 m wide. How much fencing is needed to go around it?",
        options: ["14 m", "24 m", "28 m", "48 m"],
        correctAnswer: "28 m",
        explanation: "Perimeter = 2(length + width) = 2(8 + 6) = 2(14) = 28 m of fencing needed. 🥕",
        wrongAnswerExplanations: {
            "14 m": "This is only the sum of length and width, not the complete perimeter.",
            "24 m": "This is an incorrect calculation of the perimeter.",
            "48 m": "This is the area (8 × 6), not the perimeter."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch13_t3_qe10',
        type: "mcq",
        question: "If each meter of fencing costs ₹50, how much would it cost to fence a square garden with sides of 12 meters each?",
        options: ["₹600", "₹1,200", "₹2,400", "₹7,200"],
        correctAnswer: "₹2,400",
        explanation: "Perimeter = 4 × 12 = 48 m. Cost = 48 × ₹50 = ₹2,400. 💰",
        wrongAnswerExplanations: {
            "₹600": "This only accounts for one side of the square garden.",
            "₹1,200": "This accounts for just half the perimeter of the garden.",
            "₹7,200": "This is an incorrect calculation of the cost."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch13_t3_qe11',
        type: "mcq",
        question: "What is the perimeter of a rectangular field with width 15 m and length 25 m?",
        options: ["40 m", "50 m", "70 m", "80 m"],
        correctAnswer: "80 m",
        explanation: "Perimeter = 2(length + width) = 2(25 + 15) = 2(40) = 80 m. 🏞️",
        wrongAnswerExplanations: {
            "40 m": "This is just the sum of length and width, not the full perimeter.",
            "50 m": "This is an incorrect calculation of the perimeter.",
            "70 m": "This is an incorrect calculation of the perimeter."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch13_t3_qe12',
        type: "mcq",
        question: "Which of these situations would NOT use perimeter measurement?",
        options: ["Installing a fence around a garden", "Putting decorative border around a bulletin board", "Measuring how much rice fits in a container", "Adding trim around the edge of a tablecloth"],
        correctAnswer: "Measuring how much rice fits in a container",
        explanation: "Volume is used to measure how much rice fits in a container, not perimeter. 🍚",
        wrongAnswerExplanations: {
            "Installing a fence around a garden": "Fence installation requires perimeter measurement.",
            "Putting decorative border around a bulletin board": "Adding borders requires knowing the perimeter.",
            "Adding trim around the edge of a tablecloth": "Trim follows the perimeter of the tablecloth."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch13_t3_qe13',
        type: "mcq",
        question: "A circular pond has a diameter of 7 meters. What is its approximate perimeter (circumference)?",
        options: ["7 meters", "14 meters", "22 meters", "49 meters"],
        correctAnswer: "22 meters",
        explanation: "Circumference = π × diameter = 3.14 × 7 ≈ 22 meters. 🌊",
        wrongAnswerExplanations: {
            "7 meters": "This is the diameter, not the circumference.",
            "14 meters": "This is just 2 times the diameter, not π times the diameter.",
            "49 meters": "This is the area (π × radius²), not the perimeter."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch13_t3_qe14',
        type: "mcq",
        question: "If a person walks around the perimeter of a square park once, which of these has the person done?",
        options: ["Walked through the middle of the park", "Walked across half of the park", "Walked around the boundary of the park", "Walked in a zigzag pattern in the park"],
        correctAnswer: "Walked around the boundary of the park",
        explanation: "The perimeter represents the boundary or outer edge of the park. 🚶",
        wrongAnswerExplanations: {
            "Walked through the middle of the park": "This would be a path through the park, not around its perimeter.",
            "Walked across half of the park": "This doesn't represent walking around the perimeter.",
            "Walked in a zigzag pattern in the park": "A zigzag pattern doesn't follow the perimeter."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch13_t3_qe15',
        type: "mcq",
        question: "A square tile has a side length of 10 cm. What is its perimeter?",
        options: ["10 cm", "20 cm", "30 cm", "40 cm"],
        correctAnswer: "40 cm",
        explanation: "Perimeter of a square = 4 × side = 4 × 10 = 40 cm. 🔷",
        wrongAnswerExplanations: {
            "10 cm": "This is the length of one side, not the perimeter.",
            "20 cm": "This represents the length of two sides, not all four.",
            "30 cm": "This represents the length of three sides, not all four."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch13_t3_qe16',
        type: "mcq",
        question: "When would a carpenter need to measure perimeter?",
        options: ["To determine how much wood is needed for a picture frame", "To calculate how much paint is needed for a wall", "To find out how much water a bathtub holds", "To measure the height of a ladder"],
        correctAnswer: "To determine how much wood is needed for a picture frame",
        explanation: "A picture frame follows the perimeter of the picture, requiring perimeter measurement. 🖼️",
        wrongAnswerExplanations: {
            "To calculate how much paint is needed for a wall": "This requires area calculation, not perimeter.",
            "To find out how much water a bathtub holds": "This is a volume measurement, not perimeter.",
            "To measure the height of a ladder": "Height is a linear measurement, not perimeter."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch13_t3_qe17',
        type: "mcq",
        question: "A rectangular swimming pool is 25 meters long and 10 meters wide. How many meters of safety rope is needed to go around it?",
        options: ["35 meters", "50 meters", "70 meters", "250 meters"],
        correctAnswer: "70 meters",
        explanation: "Perimeter = 2(length + width) = 2(25 + 10) = 2(35) = 70 meters of rope. 🏊",
        wrongAnswerExplanations: {
            "35 meters": "This is just the sum of length and width, not the full perimeter.",
            "50 meters": "This is an incorrect calculation of the perimeter.",
            "250 meters": "This is the area (25 × 10), not the perimeter."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch13_t3_qe18',
        type: "mcq",
        question: "A triangular flag has sides measuring 30 cm, 40 cm, and 50 cm. What is its perimeter?",
        options: ["40 cm", "60 cm", "90 cm", "120 cm"],
        correctAnswer: "120 cm",
        explanation: "Perimeter = sum of all sides = 30 + 40 + 50 = 120 cm. 🚩",
        wrongAnswerExplanations: {
            "40 cm": "This is the length of one side, not the full perimeter.",
            "60 cm": "This doesn't account for all sides of the triangle.",
            "90 cm": "This doesn't account for all sides of the triangle."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch13_t3_qe19',
        type: "mcq",
        question: "Why would we measure the perimeter of a playground?",
        options: ["To find how many swings can fit inside", "To determine how much fencing is needed", "To calculate how much sand is needed to fill it", "To find out how many children can play there"],
        correctAnswer: "To determine how much fencing is needed",
        explanation: "Perimeter measurement tells us how much material is needed for the boundary, like fencing. 🎪",
        wrongAnswerExplanations: {
            "To find how many swings can fit inside": "This relates to area, not perimeter.",
            "To calculate how much sand is needed to fill it": "Sand filling relates to area or volume, not perimeter.",
            "To find out how many children can play there": "This relates to the area, not perimeter."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch13_t3_qe20',
        type: "mcq",
        question: "A rectangular garden plot has a perimeter of 30 meters. If its width is 5 meters, what is its length?",
        options: ["5 meters", "10 meters", "15 meters", "20 meters"],
        correctAnswer: "10 meters",
        explanation: "Perimeter = 2(l+w), so 30 = 2(l+5), 15 = l+5, therefore l = 10 meters. 🌿",
        wrongAnswerExplanations: {
            "5 meters": "This would give a perimeter of 20 meters, not 30 meters.",
            "15 meters": "This would give a perimeter of 40 meters, not 30 meters.",
            "20 meters": "This would give a perimeter of 50 meters, not 30 meters."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    }
];
