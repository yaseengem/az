// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 7\Chapter11\Topic2\quiz_easy.ts
import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl7_ch11_t2_qe1',
        type: "mcq",
        question: "What is the formula for the area of a rectangle?",
        options: ["Length × Width", "Length + Width", "2(Length + Width)", "Length × Width × Height"],
        correctAnswer: "Length × Width",
        explanation: "The area of a rectangle is calculated by multiplying its length by its width: A = l × w. This gives us the total square units contained within the rectangle. 📏",
        wrongAnswerExplanations: {
            "Length + Width": "Length + Width calculates half of the perimeter, not the area.",
            "2(Length + Width)": "This formula calculates the perimeter of a rectangle.",
            "Length × Width × Height": "This formula calculates the volume of a rectangular prism, not the area of a rectangle."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch11_t2_qe2',
        type: "mcq",
        question: "The formula for the perimeter of a square is:",
        options: ["4 × side", "side × side", "2 × side", "side + side"],
        correctAnswer: "4 × side",
        explanation: "A square has 4 equal sides, so its perimeter is calculated by multiplying the side length by 4: P = 4s. This gives the total distance around the square. ⬜",
        wrongAnswerExplanations: {
            "side × side": "This formula calculates the area of a square, not its perimeter.",
            "2 × side": "This would only count two sides of the square, not all four.",
            "side + side": "This only counts two sides of the square, which is insufficient."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch11_t2_qe3',
        type: "mcq",
        question: "The area of a triangle can be calculated using which formula?",
        options: ["½ × base × height", "base × height", "3 × side", "½ × perimeter"],
        correctAnswer: "½ × base × height",
        explanation: "The area of a triangle is half the product of its base and height: A = ½ × b × h. This formula works for all types of triangles. 📐",
        wrongAnswerExplanations: {
            "base × height": "This calculates the area of a rectangle, not a triangle.",
            "3 × side": "This is not a valid formula for the area of a triangle.",
            "½ × perimeter": "This is not the formula for the area of a triangle."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch11_t2_qe4',
        type: "mcq",
        question: "What is the formula for the circumference of a circle?",
        options: ["2πr", "πr²", "πd", "2πd"],
        correctAnswer: "2πr",
        explanation: "The circumference of a circle is calculated as 2πr, where r is the radius. This can also be written as πd, where d is the diameter (d = 2r). ⭕",
        wrongAnswerExplanations: {
            "πr²": "This is the formula for the area of a circle, not the circumference.",
            "πd": "This is another correct form of the circumference formula (since d = 2r), but 2πr is the standard form.",
            "2πd": "This would be 4πr, which is incorrect for circumference."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch11_t2_qe5',
        type: "mcq",
        question: "The area of a circle is calculated using which formula?",
        options: ["πr²", "2πr", "πd", "πr"],
        correctAnswer: "πr²",
        explanation: "The area of a circle is calculated using the formula A = πr², where r is the radius. This gives us the total square units within the circle. 🔄",
        wrongAnswerExplanations: {
            "2πr": "This is the formula for the circumference of a circle, not the area.",
            "πd": "This is a form of the circumference formula (πd = 2πr), not the area formula.",
            "πr": "This is not a valid formula for either area or circumference."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch11_t2_qe6',
        type: "mcq",
        question: "What is the formula for the area of a parallelogram?",
        options: ["base × height", "½ × base × height", "length × width", "perimeter ÷ 4"],
        correctAnswer: "base × height",
        explanation: "The area of a parallelogram is calculated by multiplying the base by the perpendicular height: A = b × h. Note that this is similar to a rectangle's area formula. ⏹️",
        wrongAnswerExplanations: {
            "½ × base × height": "This is the formula for the area of a triangle, not a parallelogram.",
            "length × width": "While conceptually similar to base × height, this terminology is typically used for rectangles.",
            "perimeter ÷ 4": "This would give the average side length, not the area."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch11_t2_qe7',
        type: "mcq",
        question: "Which formula represents the perimeter of an equilateral triangle?",
        options: ["3 × side", "3 + side", "side × side × side", "½ × side × height"],
        correctAnswer: "3 × side",
        explanation: "An equilateral triangle has 3 equal sides, so its perimeter is 3 times the length of one side: P = 3s. This gives the total distance around the triangle. 🔼",
        wrongAnswerExplanations: {
            "3 + side": "This doesn't represent any meaningful measurement for a triangle.",
            "side × side × side": "This would calculate the volume if it were a 3D shape, not the perimeter.",
            "½ × side × height": "This is related to the area formula for a triangle, not its perimeter."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch11_t2_qe8',
        type: "mcq",
        question: "If a square has a side length of 6 cm, what is its area?",
        options: ["36 cm²", "24 cm²", "12 cm²", "18 cm²"],
        correctAnswer: "36 cm²",
        explanation: "The area of a square is side × side or side². With a side length of 6 cm, A = 6 × 6 = 36 cm². Remember area is measured in square units. 🔲",
        wrongAnswerExplanations: {
            "24 cm²": "This is the perimeter of the square (4 × 6 = 24), not the area.",
            "12 cm²": "This is incorrect. The formula A = s² gives 36 cm².",
            "18 cm²": "This is incorrect. The formula A = s² gives 36 cm²."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch11_t2_qe9',
        type: "mcq",
        question: "What is the perimeter of a rectangle with length 8 cm and width 5 cm?",
        options: ["26 cm", "40 cm²", "13 cm", "16 cm"],
        correctAnswer: "26 cm",
        explanation: "The perimeter of a rectangle is P = 2(l + w). With l = 8 cm and w = 5 cm, P = 2(8 + 5) = 2(13) = 26 cm. Perimeter is measured in units of length. 📏",
        wrongAnswerExplanations: {
            "40 cm²": "This is the area (8 × 5 = 40 cm²), not the perimeter.",
            "13 cm": "This is the sum of length and width (8 + 5), but perimeter is 2(l + w).",
            "16 cm": "This is twice the width plus the length (2 × 5 + 8), not the full perimeter."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch11_t2_qe10',
        type: "mcq",
        question: "The area of a triangle with base 12 cm and height 5 cm is:",
        options: ["30 cm²", "60 cm²", "17 cm²", "35 cm²"],
        correctAnswer: "30 cm²",
        explanation: "The area of a triangle is A = ½ × base × height. With b = 12 cm and h = 5 cm, A = ½ × 12 × 5 = 30 cm². The area is measured in square units. 📐",
        wrongAnswerExplanations: {
            "60 cm²": "This would be the area if calculating base × height without the ½ factor.",
            "17 cm²": "This is the perimeter (assuming 3 sides of 12, 5, and about 13 cm), not the area.",
            "35 cm²": "This is an incorrect calculation."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch11_t2_qe11',
        type: "mcq",
        question: "If the radius of a circle is 7 cm, what is its circumference? (Use π = 22/7)",
        options: ["44 cm", "154 cm²", "14 cm", "21 cm"],
        correctAnswer: "44 cm",
        explanation: "The circumference of a circle is C = 2πr. With r = 7 cm and π = 22/7, C = 2 × 22/7 × 7 = 44 cm. The circumference is a length measurement. ⭕",
        wrongAnswerExplanations: {
            "154 cm²": "This is the area (πr² = 22/7 × 7² = 154 cm²), not the circumference.",
            "14 cm": "This is 2r, not 2πr, which is needed for the circumference.",
            "21 cm": "This is 3r, not 2πr, which is needed for the circumference."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch11_t2_qe12',
        type: "mcq",
        question: "What is the area of a circle with diameter 8 cm? (Use π = 3.14)",
        options: ["50.24 cm²", "25.12 cm²", "16 cm²", "100.48 cm²"],
        correctAnswer: "50.24 cm²",
        explanation: "The area of a circle is A = πr². Since the diameter is 8 cm, the radius is 4 cm. Thus, A = 3.14 × 4² = 3.14 × 16 = 50.24 cm². 🔄",
        wrongAnswerExplanations: {
            "25.12 cm²": "This is the circumference (2πr = 2 × 3.14 × 4 = 25.12 cm), not the area.",
            "16 cm²": "This is the square of the radius, but we need to multiply by π to get the area.",
            "100.48 cm²": "This is twice the correct area, perhaps resulting from using the diameter in place of the radius."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch11_t2_qe13',
        type: "mcq",
        question: "Which shape has the formula A = ½ × base × height?",
        options: ["Triangle", "Rectangle", "Circle", "Square"],
        correctAnswer: "Triangle",
        explanation: "The formula A = ½ × base × height is used to calculate the area of a triangle. This works for any triangle regardless of its type (scalene, isosceles, or equilateral). 📐",
        wrongAnswerExplanations: {
            "Rectangle": "The formula for the area of a rectangle is length × width or base × height (without the ½ factor).",
            "Circle": "The formula for the area of a circle is πr².",
            "Square": "The formula for the area of a square is side²."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch11_t2_qe14',
        type: "mcq",
        question: "Which formula gives the perimeter of a regular pentagon?",
        options: ["5 × side", "5 + side", "side²", "5 × side²"],
        correctAnswer: "5 × side",
        explanation: "A regular pentagon has 5 equal sides, so its perimeter is 5 times the length of one side: P = 5s. This gives the total distance around the pentagon. 🔶",
        wrongAnswerExplanations: {
            "5 + side": "This doesn't represent any meaningful measurement for a pentagon.",
            "side²": "This is related to the area formula for a square, not the perimeter of a pentagon.",
            "5 × side²": "This doesn't represent any meaningful measurement for a pentagon."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch11_t2_qe15',
        type: "mcq",
        question: "A square room has a perimeter of 24 meters. What is its area?",
        options: ["36 m²", "24 m²", "12 m²", "6 m²"],
        correctAnswer: "36 m²",
        explanation: "The perimeter is P = 4s, so 24 = 4s, which gives s = 6 m. The area is A = s² = 6² = 36 m². Always consider the relationship between perimeter and side length. 🏠",
        wrongAnswerExplanations: {
            "24 m²": "This is the perimeter, not the area. The area must be calculated using the side length.",
            "12 m²": "This would be the area if the side length were 2√3 m, which is incorrect.",
            "6 m²": "This equals the side length, not the area. The area is the square of the side length."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch11_t2_qe16',
        type: "mcq",
        question: "The area of a rectangle is 48 cm². If its length is 8 cm, what is its width?",
        options: ["6 cm", "12 cm", "4 cm", "16 cm"],
        correctAnswer: "6 cm",
        explanation: "The area of a rectangle is A = l × w. We know A = 48 cm² and l = 8 cm. So 48 = 8 × w, which gives w = 48 ÷ 8 = 6 cm. 📏",
        wrongAnswerExplanations: {
            "12 cm": "This would make the area 8 × 12 = 96 cm², which is incorrect.",
            "4 cm": "This would make the area 8 × 4 = 32 cm², which is incorrect.",
            "16 cm": "This would make the area 8 × 16 = 128 cm², which is incorrect."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch11_t2_qe17',
        type: "mcq",
        question: "Which formula is used to find the area of a rhombus?",
        options: ["½ × d₁ × d₂", "side²", "½ × base × height", "2(length + width)"],
        correctAnswer: "½ × d₁ × d₂",
        explanation: "The area of a rhombus is calculated using half the product of its diagonals: A = ½ × d₁ × d₂, where d₁ and d₂ are the lengths of the two diagonals. ◊",
        wrongAnswerExplanations: {
            "side²": "This is the formula for the area of a square, not a rhombus.",
            "½ × base × height": "While this can work for a rhombus, the standard formula uses the diagonals.",
            "2(length + width)": "This is the formula for the perimeter of a rectangle, not the area of a rhombus."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch11_t2_qe18',
        type: "mcq",
        question: "What is the formula for the perimeter of a trapezoid?",
        options: ["sum of all four sides", "2(base₁ + base₂)", "½(base₁ + base₂) × height", "base₁ + base₂ + height"],
        correctAnswer: "sum of all four sides",
        explanation: "The perimeter of a trapezoid is the sum of all four sides: P = a + b + c + d, where a, b, c, and d are the lengths of the four sides. This gives the total distance around the trapezoid. 🔷",
        wrongAnswerExplanations: {
            "2(base₁ + base₂)": "This doesn't represent any meaningful measurement for a trapezoid.",
            "½(base₁ + base₂) × height": "This is the formula for the area of a trapezoid, not its perimeter.",
            "base₁ + base₂ + height": "This omits one side length, so it's insufficient for the perimeter."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch11_t2_qe19',
        type: "mcq",
        question: "If a circle has an area of 154 cm², what is its radius? (Use π = 22/7)",
        options: ["7 cm", "14 cm", "22 cm", "11 cm"],
        correctAnswer: "7 cm",
        explanation: "The area of a circle is A = πr². Given A = 154 cm² and π = 22/7, we have 154 = (22/7) × r². Solving for r²: r² = 154 × 7 ÷ 22 = 49, so r = 7 cm. ⭕",
        wrongAnswerExplanations: {
            "14 cm": "This is the diameter (2r), not the radius.",
            "22 cm": "This value is incorrect. Solving the equation A = πr² gives r = 7 cm.",
            "11 cm": "This value is incorrect. Solving the equation A = πr² gives r = 7 cm."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch11_t2_qe20',
        type: "mcq",
        question: "The area of a trapezoid is calculated using which formula?",
        options: ["½ × (base₁ + base₂) × height", "base₁ × base₂", "base × height", "½ × base × height"],
        correctAnswer: "½ × (base₁ + base₂) × height",
        explanation: "The area of a trapezoid is calculated as half the product of the sum of parallel sides (bases) and the height: A = ½ × (b₁ + b₂) × h. This gives the total square units within the trapezoid. 📏",
        wrongAnswerExplanations: {
            "base₁ × base₂": "This does not calculate the area of any common geometric shape.",
            "base × height": "This is the formula for the area of a parallelogram or rectangle, not a trapezoid.",
            "½ × base × height": "This is the formula for the area of a triangle, not a trapezoid."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    }
];
