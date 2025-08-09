// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 7\Chapter11\Topic3\quiz_easy.ts
import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl7_ch11_t3_qe1',
        type: "mcq",
        question: "Which real-life problem involves calculating both perimeter and area?",
        options: ["Finding the amount of paint needed for walls", "Finding the amount of fence needed around a garden", "Finding the amount of carpet needed for a room", "Finding how much grass seed is needed for a lawn"],
        correctAnswer: "Finding the amount of fence needed around a garden",
        explanation: "The perimeter determines the length of fence needed around a garden. Area isn't relevant for this calculation. 🏡",
        wrongAnswerExplanations: {
            "Finding the amount of paint needed for walls": "This involves area calculation, not perimeter.",
            "Finding the amount of carpet needed for a room": "This involves floor area calculation, not perimeter.",
            "Finding how much grass seed is needed for a lawn": "This involves area calculation, not perimeter."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch11_t3_qe2',
        type: "mcq",
        question: "A farmer wants to fence a rectangular field that is 75m long and 45m wide. How much fencing will be needed?",
        options: ["120m", "240m", "3,375m²", "4,500m"],
        correctAnswer: "240m",
        explanation: "Perimeter = 2(length + width) = 2(75m + 45m) = 2(120m) = 240m of fencing needed. 🚜",
        wrongAnswerExplanations: {
            "120m": "This is only the sum of length and width, not the perimeter.",
            "3,375m²": "This is the area (75m × 45m), not the perimeter.",
            "4,500m": "This calculation is incorrect."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch11_t3_qe3',
        type: "mcq",
        question: "A school needs to install new flooring in a rectangular classroom measuring 12m by 8m. How much flooring material should they order?",
        options: ["20m", "40m", "96m²", "192m²"],
        correctAnswer: "96m²",
        explanation: "Area = length × width = 12m × 8m = 96m² of flooring material needed. 🏫",
        wrongAnswerExplanations: {
            "20m": "This is the sum of length and width, not the area.",
            "40m": "This is the perimeter of the classroom, not the area.",
            "192m²": "This calculation is incorrect."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch11_t3_qe4',
        type: "mcq",
        question: "What is the formula to calculate the perimeter of a circle?",
        options: ["πr", "2πr", "πr²", "2πr²"],
        correctAnswer: "2πr",
        explanation: "The perimeter of a circle (circumference) is 2πr where r is the radius. This formula gives the distance around the circle. ⭕",
        wrongAnswerExplanations: {
            "πr": "This formula is incorrect.",
            "πr²": "This is the formula for the area of a circle, not the perimeter.",
            "2πr²": "This formula is incorrect."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch11_t3_qe5',
        type: "mcq",
        question: "A circular pizza has a radius of 7cm. What is its area?",
        options: ["14π cm²", "44π cm²", "49π cm²", "98π cm²"],
        correctAnswer: "49π cm²",
        explanation: "Area of a circle = πr² = π × 7² = 49π cm². This measures the total surface of the pizza. 🍕",
        wrongAnswerExplanations: {
            "14π cm²": "This is the circumference (2πr), not the area.",
            "44π cm²": "This calculation is incorrect.",
            "98π cm²": "This calculation is incorrect."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch11_t3_qe6',
        type: "mcq",
        question: "A triangular garden has sides measuring 5m, 7m, and 8m. What is its perimeter?",
        options: ["15m", "20m", "35m²", "40m²"],
        correctAnswer: "20m",
        explanation: "Perimeter of a triangle = sum of all sides = 5m + 7m + 8m = 20m. This measures the distance around the garden. 🌷",
        wrongAnswerExplanations: {
            "15m": "This is an incorrect calculation of the perimeter.",
            "35m²": "This is an area measurement, not perimeter, and the calculation is incorrect.",
            "40m²": "This is an area measurement, not perimeter, and the calculation is incorrect."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch11_t3_qe7',
        type: "mcq",
        question: "A square tile has a side length of 10cm. What is its area?",
        options: ["10 cm²", "40 cm²", "100 cm²", "400 cm²"],
        correctAnswer: "100 cm²",
        explanation: "Area of a square = side² = 10² = 100 cm². This represents the total surface of the tile. 🧱",
        wrongAnswerExplanations: {
            "10 cm²": "This is the side length, not the area.",
            "40 cm²": "This is the perimeter (4 × side), not the area.",
            "400 cm²": "This calculation is incorrect."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch11_t3_qe8',
        type: "mcq",
        question: "A rectangular room is 6m long and 4m wide. What is the cost of painting the floor if paint costs ₹50 per square meter?",
        options: ["₹1,000", "₹1,200", "₹1,500", "₹2,000"],
        correctAnswer: "₹1,200",
        explanation: "Area = 6m × 4m = 24m². Cost = 24m² × ₹50 = ₹1,200. This calculates the total cost based on area. 🎨",
        wrongAnswerExplanations: {
            "₹1,000": "This calculation is incorrect.",
            "₹1,500": "This calculation is incorrect.",
            "₹2,000": "This calculation is incorrect."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch11_t3_qe9',
        type: "mcq",
        question: "The perimeter of a regular hexagon is 42cm. What is the length of each side?",
        options: ["6cm", "7cm", "8cm", "9cm"],
        correctAnswer: "7cm",
        explanation: "A regular hexagon has 6 equal sides. So, side length = perimeter ÷ 6 = 42cm ÷ 6 = 7cm. All sides are equal in a regular hexagon. 🔷",
        wrongAnswerExplanations: {
            "6cm": "This calculation is incorrect.",
            "8cm": "This calculation is incorrect.",
            "9cm": "This calculation is incorrect."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch11_t3_qe10',
        type: "mcq",
        question: "A parallelogram has a base of 8cm and a height of 5cm. What is its area?",
        options: ["13 cm²", "26 cm²", "40 cm²", "80 cm²"],
        correctAnswer: "40 cm²",
        explanation: "Area of a parallelogram = base × height = 8cm × 5cm = 40 cm². The height is the perpendicular distance between parallel sides. 📏",
        wrongAnswerExplanations: {
            "13 cm²": "This is the sum of base and height, not the area.",
            "26 cm²": "This calculation is incorrect.",
            "80 cm²": "This is double the correct area."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch11_t3_qe11',
        type: "mcq",
        question: "A triangle has a base of 12cm and a height of 9cm. What is its area?",
        options: ["21 cm²", "54 cm²", "108 cm²", "216 cm²"],
        correctAnswer: "54 cm²",
        explanation: "Area of a triangle = ½ × base × height = ½ × 12cm × 9cm = 54 cm². This formula works for any triangle. 📐",
        wrongAnswerExplanations: {
            "21 cm²": "This is the sum of base and height, not the area.",
            "108 cm²": "This is the area of a rectangle with these dimensions, not a triangle.",
            "216 cm²": "This calculation is incorrect."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch11_t3_qe12',
        type: "mcq",
        question: "If a rectangle has an area of 48 cm² and a length of 12 cm, what is its width?",
        options: ["4 cm", "6 cm", "8 cm", "24 cm"],
        correctAnswer: "4 cm",
        explanation: "Width = Area ÷ Length = 48 cm² ÷ 12 cm = 4 cm. We rearrange the area formula to solve for the missing dimension. 📐",
        wrongAnswerExplanations: {
            "6 cm": "This calculation is incorrect.",
            "8 cm": "This calculation is incorrect.",
            "24 cm": "This calculation is incorrect."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch11_t3_qe13',
        type: "mcq",
        question: "The circumference of a circle is 62.8 cm. What is its radius? (Use π = 3.14)",
        options: ["10 cm", "20 cm", "31.4 cm", "100 cm"],
        correctAnswer: "10 cm",
        explanation: "Circumference = 2πr, so r = Circumference ÷ (2π) = 62.8 cm ÷ (2 × 3.14) = 62.8 cm ÷ 6.28 = 10 cm. The radius is half the diameter. ⭕",
        wrongAnswerExplanations: {
            "20 cm": "This is the diameter, not the radius.",
            "31.4 cm": "This is πr, not the radius itself.",
            "100 cm": "This calculation is incorrect."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch11_t3_qe14',
        type: "mcq",
        question: "A square plot of land has a perimeter of 36m. What is its area?",
        options: ["36 m²", "81 m²", "324 m²", "None of these"],
        correctAnswer: "81 m²",
        explanation: "For a square, side length = perimeter ÷ 4 = 36m ÷ 4 = 9m. Area = side² = 9² = 81 m². The area represents the total surface of the land. 🌱",
        wrongAnswerExplanations: {
            "36 m²": "This is equal to the perimeter, but doesn't represent the area.",
            "324 m²": "This is the square of the perimeter, not the area.",
            "None of these": "81 m² is the correct answer."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch11_t3_qe15',
        type: "mcq",
        question: "A circular garden has an area of 154 m². What is its radius? (Use π = 3.14)",
        options: ["7 m", "11 m", "14 m", "22 m"],
        correctAnswer: "7 m",
        explanation: "Area = πr², so r = √(Area ÷ π) = √(154 m² ÷ 3.14) = √49 m² = 7 m. We rearrange the area formula to solve for radius. 🌳",
        wrongAnswerExplanations: {
            "11 m": "This calculation is incorrect.",
            "14 m": "This is the diameter, not the radius.",
            "22 m": "This is the circumference, not the radius."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch11_t3_qe16',
        type: "mcq",
        question: "A rectangular field is twice as long as it is wide. If the perimeter is 60m, what is its area?",
        options: ["200 m²", "300 m²", "400 m²", "None of these"],
        correctAnswer: "200 m²",
        explanation: "Let width = w, then length = 2w. Perimeter = 2(length + width) = 2(2w + w) = 2(3w) = 6w = 60m. So w = 10m, length = 20m. Area = 10m × 20m = 200 m². 🌾",
        wrongAnswerExplanations: {
            "300 m²": "This calculation is incorrect.",
            "400 m²": "This calculation is incorrect.",
            "None of these": "200 m² is the correct answer."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl7_ch11_t3_qe17',
        type: "mcq",
        question: "The area of a trapezoid is 96 cm². If the parallel sides are 10 cm and 14 cm, what is the height?",
        options: ["4 cm", "8 cm", "12 cm", "16 cm"],
        correctAnswer: "8 cm",
        explanation: "Area = ½ × h × (a + b) where a and b are parallel sides. So 96 = ½ × h × (10 + 14) = ½ × h × 24. Therefore h = 96 × 2 ÷ 24 = 8 cm. 📐",
        wrongAnswerExplanations: {
            "4 cm": "This calculation is incorrect.",
            "12 cm": "This calculation is incorrect.",
            "16 cm": "This calculation is incorrect."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch11_t3_qe18',
        type: "mcq",
        question: "A rectangular piece of paper is 30cm long and 20cm wide. If 2cm is cut off from each side to make a smaller rectangle, what is the area of the smaller rectangle?",
        options: ["416 cm²", "442 cm²", "484 cm²", "600 cm²"],
        correctAnswer: "416 cm²",
        explanation: "The smaller rectangle's dimensions are 30 - 2 - 2 = 26 cm and 20 - 2 - 2 = 16 cm. Area = 26 cm × 16 cm = 416 cm². We subtract from both sides of each dimension. 📄",
        wrongAnswerExplanations: {
            "442 cm²": "This calculation is incorrect.",
            "484 cm²": "This calculation is incorrect.",
            "600 cm²": "This is the area of the original rectangle (30 cm × 20 cm)."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl7_ch11_t3_qe19',
        type: "mcq",
        question: "The perimeter of an equilateral triangle is 27cm. What is the length of each side?",
        options: ["3 cm", "9 cm", "13.5 cm", "27 cm"],
        correctAnswer: "9 cm",
        explanation: "An equilateral triangle has three equal sides. So, side length = perimeter ÷ 3 = 27cm ÷ 3 = 9cm. All sides have the same length. 🔺",
        wrongAnswerExplanations: {
            "3 cm": "This calculation is incorrect.",
            "13.5 cm": "This is half the perimeter, not the side length.",
            "27 cm": "This is the perimeter, not the side length."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch11_t3_qe20',
        type: "mcq",
        question: "A garden is in the shape of a rhombus with a perimeter of 40m. What is the length of each side?",
        options: ["10 m", "20 m", "40 m", "Cannot be determined without additional information"],
        correctAnswer: "10 m",
        explanation: "A rhombus has all sides of equal length. So, side length = perimeter ÷ 4 = 40m ÷ 4 = 10m. The perimeter is the sum of all sides. 🏡",
        wrongAnswerExplanations: {
            "20 m": "This is half the perimeter, not the side length.",
            "40 m": "This is the perimeter, not the side length.",
            "Cannot be determined without additional information": "A rhombus has all sides equal, so we can determine the side length from the perimeter."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    }
];
