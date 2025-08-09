// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 7\Chapter11\Topic1\quiz_easy.ts
import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl7_ch11_t1_qe1',
        type: "mcq",
        question: "What is the formula for finding the perimeter of a rectangle?",
        options: ["P = 2(l + w)", "P = l × w", "P = 2(l - w)", "P = 2l + w"],
        correctAnswer: "P = 2(l + w)",
        explanation: "The perimeter of a rectangle equals twice the sum of length and width: P = 2(l + w) or 2l + 2w. 📏",
        wrongAnswerExplanations: {
            "P = l × w": "This formula calculates the area of a rectangle, not its perimeter.",
            "P = 2(l - w)": "This is an incorrect formula that doesn't give the perimeter of a rectangle.",
            "P = 2l + w": "This formula is incomplete; it only adds twice the length and the width once."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch11_t1_qe2',
        type: "mcq",
        question: "What is the formula for finding the area of a square with side length s?",
        options: ["A = s²", "A = 4s", "A = s + s + s + s", "A = 2s"],
        correctAnswer: "A = s²",
        explanation: "The area of a square is calculated by squaring its side length: A = s × s = s². 🔷",
        wrongAnswerExplanations: {
            "A = 4s": "This formula gives the perimeter of a square, not its area.",
            "A = s + s + s + s": "This formula also gives the perimeter of a square, not its area.",
            "A = 2s": "This formula doesn't represent any standard measurement of a square."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch11_t1_qe3',
        type: "mcq",
        question: "The perimeter of a triangle with sides 4 cm, 5 cm and 6 cm is:",
        options: ["15 cm", "30 cm²", "120 cm", "60 cm²"],
        correctAnswer: "15 cm",
        explanation: "Perimeter of a triangle is the sum of all three sides: 4 + 5 + 6 = 15 cm. 📐",
        wrongAnswerExplanations: {
            "30 cm²": "This is not the perimeter; perimeter is measured in linear units, not square units.",
            "120 cm": "This value is incorrect; the sum of the sides is 15 cm.",
            "60 cm²": "This is not the perimeter; perimeter is measured in linear units, not square units."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch11_t1_qe4',
        type: "mcq",
        question: "If the radius of a circle is 7 cm, what is its circumference?",
        options: ["14π cm", "7π cm", "49π cm", "21π cm"],
        correctAnswer: "14π cm",
        explanation: "Circumference of a circle = 2πr = 2 × π × 7 = 14π cm. ⭕",
        wrongAnswerExplanations: {
            "7π cm": "This would be the formula πr, which is incomplete for circumference.",
            "49π cm": "This would be the formula πr², which calculates area, not circumference.",
            "21π cm": "This is incorrect; the formula for circumference is 2πr = 14π cm."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch11_t1_qe5',
        type: "mcq",
        question: "What is the area of a parallelogram with base 8 cm and height 5 cm?",
        options: ["40 cm²", "26 cm²", "13 cm²", "80 cm²"],
        correctAnswer: "40 cm²",
        explanation: "Area of a parallelogram = base × height = 8 × 5 = 40 cm². ◊",
        wrongAnswerExplanations: {
            "26 cm²": "This is an incorrect calculation; the area is base × height = 40 cm².",
            "13 cm²": "This is an incorrect calculation; the area is base × height = 40 cm².",
            "80 cm²": "This is incorrect; you might have multiplied by 2 somewhere."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch11_t1_qe6',
        type: "mcq",
        question: "Which formula correctly calculates the area of a triangle?",
        options: ["A = ½ × b × h", "A = b × h", "A = 3s", "A = πr²"],
        correctAnswer: "A = ½ × b × h",
        explanation: "The area of a triangle equals half the product of its base and height: A = ½ × b × h. 🔺",
        wrongAnswerExplanations: {
            "A = b × h": "This is the formula for the area of a rectangle or parallelogram, not a triangle.",
            "A = 3s": "This doesn't represent any standard formula for area calculations.",
            "A = πr²": "This is the formula for the area of a circle, not a triangle."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch11_t1_qe7',
        type: "mcq",
        question: "A square has a side length of 9 cm. What is its perimeter?",
        options: ["36 cm", "81 cm²", "27 cm", "18 cm"],
        correctAnswer: "36 cm",
        explanation: "Perimeter of a square = 4 × side = 4 × 9 = 36 cm. 🔷",
        wrongAnswerExplanations: {
            "81 cm²": "This is the area of the square (9² = 81 cm²), not its perimeter.",
            "27 cm": "This is 3 × side, not 4 × side, so it's not the perimeter.",
            "18 cm": "This is 2 × side, not 4 × side, so it's not the perimeter."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch11_t1_qe8',
        type: "mcq",
        question: "What is the formula for the area of a circle?",
        options: ["A = πr²", "A = 2πr", "A = πd", "A = πr"],
        correctAnswer: "A = πr²",
        explanation: "The area of a circle is calculated using the formula A = πr², where r is the radius. ⭕",
        wrongAnswerExplanations: {
            "A = 2πr": "This is the formula for the circumference of a circle, not its area.",
            "A = πd": "This is similar to the circumference formula, not the area.",
            "A = πr": "This formula is incomplete and doesn't calculate the area correctly."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch11_t1_qe9',
        type: "mcq",
        question: "A rectangle has a length of 12 cm and a width of 5 cm. What is its area?",
        options: ["60 cm²", "34 cm²", "17 cm²", "120 cm²"],
        correctAnswer: "60 cm²",
        explanation: "Area of a rectangle = length × width = 12 × 5 = 60 cm². 📏",
        wrongAnswerExplanations: {
            "34 cm²": "This is the perimeter (2 × (12 + 5) = 34), not the area.",
            "17 cm²": "This is the sum of length and width, not the area.",
            "120 cm²": "This is incorrect; it's double the actual area."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch11_t1_qe10',
        type: "mcq",
        question: "Which shape has an area formula of A = ½ × b × h?",
        options: ["Triangle", "Rectangle", "Circle", "Square"],
        correctAnswer: "Triangle",
        explanation: "The formula A = ½ × b × h calculates the area of a triangle, where b is base and h is height. 🔺",
        wrongAnswerExplanations: {
            "Rectangle": "The area of a rectangle is calculated as A = l × w.",
            "Circle": "The area of a circle is calculated as A = πr².",
            "Square": "The area of a square is calculated as A = s²."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch11_t1_qe11',
        type: "mcq",
        question: "What is the perimeter of a regular pentagon with side length 7 cm?",
        options: ["35 cm", "25 cm", "49 cm", "14 cm"],
        correctAnswer: "35 cm",
        explanation: "Perimeter of a regular pentagon = 5 × side length = 5 × 7 = 35 cm. 🔶",
        wrongAnswerExplanations: {
            "25 cm": "This might be from using 5 sides with 5 cm each, not 7 cm.",
            "49 cm": "This is 7² (49), not the perimeter calculation.",
            "14 cm": "This is 2 × 7, which doesn't represent the pentagon's perimeter."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch11_t1_qe12',
        type: "mcq",
        question: "The radius of a circle is 10 cm. What is its area?",
        options: ["100π cm²", "20π cm²", "10π cm²", "50π cm²"],
        correctAnswer: "100π cm²",
        explanation: "Area of a circle = πr² = π × 10² = 100π cm². ⭕",
        wrongAnswerExplanations: {
            "20π cm²": "This is the circumference (2πr = 2π × 10 = 20π), not the area.",
            "10π cm²": "This is πr, not πr², so it doesn't represent the area.",
            "50π cm²": "This calculation is incorrect; the area is πr² = 100π cm²."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch11_t1_qe13',
        type: "mcq",
        question: "A triangle has a base of 8 cm and a height of 6 cm. What is its area?",
        options: ["24 cm²", "48 cm²", "14 cm²", "28 cm²"],
        correctAnswer: "24 cm²",
        explanation: "Area of a triangle = ½ × base × height = ½ × 8 × 6 = 24 cm². 🔺",
        wrongAnswerExplanations: {
            "48 cm²": "This would be base × height (8 × 6), without the ½ factor.",
            "14 cm²": "This is the sum of base and height (8 + 6), not the area.",
            "28 cm²": "This calculation is incorrect; the area is ½ × 8 × 6 = 24 cm²."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch11_t1_qe14',
        type: "mcq",
        question: "Which of the following has the largest area for the same perimeter of 20 cm?",
        options: ["A 5 cm × 5 cm square", "A 9 cm × 1 cm rectangle", "A 7 cm × 3 cm rectangle", "A 6 cm × 4 cm rectangle"],
        correctAnswer: "A 5 cm × 5 cm square",
        explanation: "For a fixed perimeter, a square has the maximum area. Square: 5 × 5 = 25 cm². Other rectangles: 9 × 1 = 9 cm², 7 × 3 = 21 cm², 6 × 4 = 24 cm². 🔷",
        wrongAnswerExplanations: {
            "A 9 cm × 1 cm rectangle": "Area is 9 cm², which is less than the square's area of 25 cm².",
            "A 7 cm × 3 cm rectangle": "Area is 21 cm², which is less than the square's area of 25 cm².",
            "A 6 cm × 4 cm rectangle": "Area is 24 cm², which is less than the square's area of 25 cm²."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch11_t1_qe15',
        type: "mcq",
        question: "What is the area of a parallelogram with base 15 cm and height 4 cm?",
        options: ["60 cm²", "38 cm²", "30 cm²", "120 cm²"],
        correctAnswer: "60 cm²",
        explanation: "Area of a parallelogram = base × height = 15 × 4 = 60 cm². ◊",
        wrongAnswerExplanations: {
            "38 cm²": "This might be from adding the dimensions (15 + 4 + 15 + 4), which gives perimeter, not area.",
            "30 cm²": "This is half the correct area, as if using the triangle formula incorrectly.",
            "120 cm²": "This is double the correct area; the formula is base × height = 60 cm²."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch11_t1_qe16',
        type: "mcq",
        question: "If a circle has a circumference of 36π cm, what is its radius?",
        options: ["18 cm", "36 cm", "9 cm", "6 cm"],
        correctAnswer: "18 cm",
        explanation: "Circumference = 2πr, so r = Circumference/(2π) = 36π/(2π) = 18 cm. ⭕",
        wrongAnswerExplanations: {
            "36 cm": "This would be the diameter, not the radius.",
            "9 cm": "This is half the correct answer; the calculation is 36π/(2π) = 18 cm.",
            "6 cm": "This calculation is incorrect; the radius is 18 cm."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch11_t1_qe17',
        type: "mcq",
        question: "What is the formula for the perimeter of a square with side length s?",
        options: ["P = 4s", "P = s²", "P = 2s", "P = 3s"],
        correctAnswer: "P = 4s",
        explanation: "The perimeter of a square equals 4 times its side length: P = 4s. 🔷",
        wrongAnswerExplanations: {
            "P = s²": "This is the formula for the area of a square, not its perimeter.",
            "P = 2s": "This only accounts for two sides, not all four sides of the square.",
            "P = 3s": "This only accounts for three sides, not all four sides of the square."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch11_t1_qe18',
        type: "mcq",
        question: "A square field has a perimeter of 36 meters. What is the area of the field?",
        options: ["81 m²", "36 m²", "18 m²", "9 m²"],
        correctAnswer: "81 m²",
        explanation: "Perimeter = 4s, so 36 = 4s, giving s = 9 m. Area = s² = 9² = 81 m². 🔷",
        wrongAnswerExplanations: {
            "36 m²": "This is the perimeter, not the area.",
            "18 m²": "This is half the side length squared, not the area.",
            "9 m²": "This is the side length, not the area."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch11_t1_qe19',
        type: "mcq",
        question: "What is the relationship between the radius (r) and diameter (d) of a circle?",
        options: ["d = 2r", "r = 2d", "d = r/2", "r = d/2"],
        correctAnswer: "d = 2r",
        explanation: "The diameter of a circle is twice its radius: d = 2r. ⭕",
        wrongAnswerExplanations: {
            "r = 2d": "This is incorrect; the radius is half the diameter, not twice it.",
            "d = r/2": "This is incorrect; the diameter is twice the radius, not half of it.",
            "r = d/2": "This is correct, but rewritten; the question asks for the relation of d to r."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch11_t1_qe20',
        type: "mcq",
        question: "If the area of a rectangle is 48 cm² and its length is 12 cm, what is its width?",
        options: ["4 cm", "6 cm", "8 cm", "16 cm"],
        correctAnswer: "4 cm",
        explanation: "Area = length × width, so 48 = 12 × width, giving width = 48 ÷ 12 = 4 cm. 📏",
        wrongAnswerExplanations: {
            "6 cm": "This is incorrect; using the formula: 48 = 12 × width gives width = 4 cm.",
            "8 cm": "This is incorrect; using the formula: 48 = 12 × width gives width = 4 cm.",
            "16 cm": "This is incorrect; using the formula: 48 = 12 × width gives width = 4 cm."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    }
];
