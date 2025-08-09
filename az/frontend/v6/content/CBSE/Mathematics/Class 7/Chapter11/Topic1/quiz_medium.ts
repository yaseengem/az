// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 7\Chapter11\Topic1\quiz_medium.ts
import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl7_ch11_t1_qm1',
        type: "mcq",
        question: "A rectangular garden is 15 m long and 10 m wide. If fencing costs ₹50 per meter, how much will it cost to fence the entire garden?",
        options: ["₹2,500", "₹1,250", "₹7,500", "₹5,000"],
        correctAnswer: "₹2,500",
        explanation: "Perimeter = 2(15 + 10) = 50 m. Cost = 50 × 50 = ₹2,500. 🌱",
        wrongAnswerExplanations: {
            "₹1,250": "This is half the correct amount; the full perimeter is 50 m.",
            "₹7,500": "This is calculating using area (150 m²) instead of perimeter (50 m).",
            "₹5,000": "This is double the correct amount; perhaps multiplying by 100 instead of 50."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl7_ch11_t1_qm2',
        type: "mcq",
        question: "The radius of a circle is increased from 7 cm to 14 cm. By what factor does its area increase?",
        options: ["4 times", "2 times", "8 times", "14 times"],
        correctAnswer: "4 times",
        explanation: "Original area = πr² = π(7)² = 49π. New area = π(14)² = 196π. Ratio = 196π/49π = 4. ⭕",
        wrongAnswerExplanations: {
            "2 times": "The radius is doubled, but area changes by r², so the area increases by 2² = 4 times.",
            "8 times": "This would be true if the radius increased by a factor of √8 ≈ 2.83, not 2.",
            "14 times": "This is confusing the radius value (14) with the scaling factor."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl7_ch11_t1_qm3',
        type: "mcq",
        question: "A square and a rectangle have the same perimeter of 40 cm. If the rectangle's length is 12 cm and width is 8 cm, how much larger is the area of the square than the rectangle?",
        options: ["4 cm²", "16 cm²", "0 cm²", "8 cm²"],
        correctAnswer: "4 cm²",
        explanation: "Square side = 40 ÷ 4 = 10 cm, area = 10² = 100 cm². Rectangle area = 12 × 8 = 96 cm². Difference = 100 - 96 = 4 cm². 🔄",
        wrongAnswerExplanations: {
            "16 cm²": "This is incorrect; the square area is 100 cm² and rectangle area is 96 cm².",
            "0 cm²": "The areas are not equal; the square has a larger area.",
            "8 cm²": "This is double the actual difference; the correct difference is 4 cm²."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl7_ch11_t1_qm4',
        type: "mcq",
        question: "The perimeter of a parallelogram is 30 cm. If adjacent sides measure 7 cm and 8 cm, what is its area if the height to the 8 cm side is 6 cm?",
        options: ["48 cm²", "56 cm²", "30 cm²", "42 cm²"],
        correctAnswer: "48 cm²",
        explanation: "Area of parallelogram = base × height = 8 × 6 = 48 cm². ◊",
        wrongAnswerExplanations: {
            "56 cm²": "This is 7 × 8, which doesn't represent area. Area = base × height = 48 cm².",
            "30 cm²": "This is the perimeter, not the area.",
            "42 cm²": "This is 7 × 6, using the wrong side as the base."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl7_ch11_t1_qm5',
        type: "mcq",
        question: "A triangle has sides of lengths 5 cm, 12 cm, and 13 cm. What is its area?",
        options: ["30 cm²", "60 cm²", "65 cm²", "20 cm²"],
        correctAnswer: "30 cm²",
        explanation: "Using Heron's formula with s = (5+12+13)/2 = 15: Area = √[15(15-5)(15-12)(15-13)] = √(15×10×3×2) = 30 cm². 🔺",
        wrongAnswerExplanations: {
            "60 cm²": "This is double the correct area; the actual area is 30 cm².",
            "65 cm²": "This is the sum of the sides, not the area.",
            "20 cm²": "This calculation is incorrect; the area calculated by Heron's formula is 30 cm²."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl7_ch11_t1_qm6',
        type: "mcq",
        question: "A circular plate has an area of 154 cm². What is its circumference? (Use π = 22/7)",
        options: ["44 cm", "77 cm", "22 cm", "88 cm"],
        correctAnswer: "44 cm",
        explanation: "Area = πr², so 154 = (22/7)r², giving r² = 154 × 7/22 = 49, so r = 7. Circumference = 2πr = 2 × 22/7 × 7 = 44 cm. ⭕",
        wrongAnswerExplanations: {
            "77 cm": "This appears to be using the formula πr with r = 7 and π = 22/7, which is incorrect.",
            "22 cm": "This is half the correct circumference; the actual circumference is 44 cm.",
            "88 cm": "This is double the correct answer; the circumference is 44 cm."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl7_ch11_t1_qm7',
        type: "mcq",
        question: "A rectangular field is 25 m long and 16 m wide. What is the cost of fencing it at ₹12 per meter and also cultivating it at ₹2 per square meter?",
        options: ["₹1,832", "₹984", "₹1,600", "₹2,384"],
        correctAnswer: "₹1,832",
        explanation: "Perimeter = 2(25+16) = 82 m. Fencing cost = 82 × 12 = ₹984. Area = 25 × 16 = 400 m². Cultivation cost = 400 × 2 = ₹800. Total = 984 + 800 = ₹1,784. 🌾",
        wrongAnswerExplanations: {
            "₹984": "This is only the fencing cost without cultivation cost.",
            "₹1,600": "This is incorrect; the total cost is ₹1,784.",
            "₹2,384": "This is incorrect; the total cost is ₹1,784."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl7_ch11_t1_qm8',
        type: "mcq",
        question: "The area of a rhombus is 48 cm². If one of its diagonals is 12 cm, what is the length of the other diagonal?",
        options: ["8 cm", "16 cm", "4 cm", "24 cm"],
        correctAnswer: "8 cm",
        explanation: "Area of a rhombus = ½ × d₁ × d₂. So, 48 = ½ × 12 × d₂, giving d₂ = 48 × 2 ÷ 12 = 8 cm. ◊",
        wrongAnswerExplanations: {
            "16 cm": "This is double the correct answer; the other diagonal is 8 cm.",
            "4 cm": "This is half the correct answer; the other diagonal is 8 cm.",
            "24 cm": "This is triple the correct answer; the other diagonal is 8 cm."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl7_ch11_t1_qm9',
        type: "mcq",
        question: "A circular garden has a circular path of width 2.1 m around it. If the radius of the garden is 3 m, what is the area of the path? (Take π = 3.14)",
        options: ["40.71 m²", "28.26 m²", "76.93 m²", "123.14 m²"],
        correctAnswer: "40.71 m²",
        explanation: "Outer radius = 3 + 2.1 = 5.1 m. Area of path = π(5.1² - 3²) = 3.14(26.01 - 9) = 3.14 × 17.01 ≈ 40.71 m². ⭕",
        wrongAnswerExplanations: {
            "28.26 m²": "This is the area of the inner circle, not the path.",
            "76.93 m²": "This is close to the area of the outer circle (π × 5.1² ≈ 81.64 m²), not just the path.",
            "123.14 m²": "This calculation is incorrect; the path area is about 40.71 m²."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl7_ch11_t1_qm10',
        type: "mcq",
        question: "If the perimeter of a square and an equilateral triangle are equal, what is the ratio of the area of the square to that of the triangle?",
        options: ["4:√3", "2:√3", "4:3", "√3:3"],
        correctAnswer: "4:√3",
        explanation: "If perimeter is 12a, square side = 3a, area = 9a². Triangle side = 4a, area = √3/4 × (4a)² = 4a²√3. Ratio = 9a²/(4a²√3) = 9/(4√3) = 4:√3. 🔷",
        wrongAnswerExplanations: {
            "2:√3": "This is an incorrect calculation of the ratio.",
            "4:3": "This is an incorrect calculation of the ratio.",
            "√3:3": "This is an incorrect calculation of the ratio."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl7_ch11_t1_qm11',
        type: "mcq",
        question: "A square has a perimeter of 64 cm. What is the length of its diagonal?",
        options: ["16√2 cm", "16 cm", "32 cm", "8√2 cm"],
        correctAnswer: "16√2 cm",
        explanation: "Perimeter = 4s = 64 cm, so s = 16 cm. Diagonal = s√2 = 16√2 cm from the Pythagoras theorem. 🔷",
        wrongAnswerExplanations: {
            "16 cm": "This is the side length, not the diagonal.",
            "32 cm": "This is double the side length, not the diagonal.",
            "8√2 cm": "This is half the correct answer; the diagonal is 16√2 cm."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl7_ch11_t1_qm12',
        type: "mcq",
        question: "The base of a trapezoid is 8 cm and 12 cm, and the height is 6 cm. What is its area?",
        options: ["60 cm²", "120 cm²", "72 cm²", "48 cm²"],
        correctAnswer: "60 cm²",
        explanation: "Area of trapezoid = ½ × height × (sum of parallel sides) = ½ × 6 × (8 + 12) = ½ × 6 × 20 = 60 cm². 📐",
        wrongAnswerExplanations: {
            "120 cm²": "This is double the correct area; the area is 60 cm².",
            "72 cm²": "This is 12 × 6, using only one base, which is incorrect.",
            "48 cm²": "This is 8 × 6, using only one base, which is incorrect."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl7_ch11_t1_qm13',
        type: "mcq",
        question: "A rectangular park is 45 m long and 30 m wide. A path 2.5 m wide surrounds the park on the outside. Find the area of the path.",
        options: ["392.5 m²", "1350 m²", "2142.5 m²", "1750 m²"],
        correctAnswer: "392.5 m²",
        explanation: "Outer rectangle: (45+5) × (30+5) = 50 × 35 = 1750 m². Park area: 45 × 30 = 1350 m². Path area: 1750 - 1350 = 400 m². 🌳",
        wrongAnswerExplanations: {
            "1350 m²": "This is the area of the park, not the path.",
            "2142.5 m²": "This calculation is incorrect; the path area is 400 m².",
            "1750 m²": "This is the area of the outer rectangle including the park, not just the path."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl7_ch11_t1_qm14',
        type: "mcq",
        question: "If the circumference of a circle is 44 cm, what is its area? (Use π = 22/7)",
        options: ["154 cm²", "308 cm²", "77 cm²", "616 cm²"],
        correctAnswer: "154 cm²",
        explanation: "Circumference = 2πr = 44 cm. r = 44 ÷ (2 × 22/7) = 7 cm. Area = πr² = (22/7) × 7² = 22 × 7 = 154 cm². ⭕",
        wrongAnswerExplanations: {
            "308 cm²": "This is double the correct area; the area is 154 cm².",
            "77 cm²": "This is half the correct area; the area is 154 cm².",
            "616 cm²": "This is four times the correct area; the area is 154 cm²."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl7_ch11_t1_qm15',
        type: "mcq",
        question: "A triangle has sides 9 cm, 40 cm, and 41 cm. What is its area?",
        options: ["180 cm²", "360 cm²", "410 cm²", "1,640 cm²"],
        correctAnswer: "180 cm²",
        explanation: "This is a right triangle (9²+40²=41²). Area = ½ × base × height = ½ × 9 × 40 = 180 cm². 🔺",
        wrongAnswerExplanations: {
            "360 cm²": "This is double the correct area; the area is 180 cm².",
            "410 cm²": "This is close to the value of the hypotenuse (41), not the area.",
            "1,640 cm²": "This seems to be using an incorrect formula; the area is 180 cm²."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl7_ch11_t1_qm16',
        type: "mcq",
        question: "The length of the diagonal of a square is 10√2 cm. What is its perimeter?",
        options: ["40 cm", "20 cm", "10 cm", "80 cm"],
        correctAnswer: "40 cm",
        explanation: "Diagonal = s√2, so 10√2 = s√2, giving s = 10. Perimeter = 4s = 4 × 10 = 40 cm. 🔷",
        wrongAnswerExplanations: {
            "20 cm": "This is half the perimeter; the perimeter is 40 cm.",
            "10 cm": "This is the side length, not the perimeter.",
            "80 cm": "This is double the perimeter; the perimeter is 40 cm."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl7_ch11_t1_qm17',
        type: "mcq",
        question: "A rectangle has a width of 8 cm and a diagonal of 10 cm. What is its perimeter?",
        options: ["36 cm", "32 cm", "20 cm", "24 cm"],
        correctAnswer: "36 cm",
        explanation: "Using Pythagoras: 8² + length² = 10², so length = √(100-64) = 6 cm. Perimeter = 2(8+6) = 28 cm. 📏",
        wrongAnswerExplanations: {
            "32 cm": "This calculation is incorrect; the perimeter is 28 cm.",
            "20 cm": "This is double the diagonal, not the perimeter.",
            "24 cm": "This would be if both sides were 6 cm, but they're not."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl7_ch11_t1_qm18',
        type: "mcq",
        question: "Which has a larger area: a circle with radius 7 cm or a square with side 12 cm?",
        options: ["The square", "The circle", "Both have the same area", "Not enough information"],
        correctAnswer: "The square",
        explanation: "Circle area = πr² = π × 7² = 49π ≈ 153.9 cm². Square area = s² = 12² = 144 cm². The square has a larger area. 🔄",
        wrongAnswerExplanations: {
            "The circle": "The circle's area is 49π ≈ 153.9 cm², which is larger than the square's area of 144 cm².",
            "Both have the same area": "Their areas are different; the circle's area is approximately 153.9 cm², and the square's is 144 cm².",
            "Not enough information": "We have all the information needed to calculate both areas."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl7_ch11_t1_qm19',
        type: "mcq",
        question: "The perimeter of an equilateral triangle is 30 cm. What is its area?",
        options: ["25√3 cm²", "50√3 cm²", "75 cm²", "100 cm²"],
        correctAnswer: "25√3 cm²",
        explanation: "Side length = 30 ÷ 3 = 10 cm. Area = (√3/4) × s² = (√3/4) × 10² = 25√3 cm². 🔺",
        wrongAnswerExplanations: {
            "50√3 cm²": "This is double the correct area; the area is 25√3 cm².",
            "75 cm²": "This approximates the area but isn't exact; the exact area is 25√3 cm².",
            "100 cm²": "This calculation is incorrect; the area is 25√3 cm²."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl7_ch11_t1_qm20',
        type: "mcq",
        question: "A circular pond has a circumference of 132 m. What is the cost of fencing it at ₹45 per meter and planting grass in it at ₹40 per square meter? (Take π = 22/7)",
        options: ["₹18,840", "₹5,940", "₹12,900", "₹24,780"],
        correctAnswer: "₹18,840",
        explanation: "Circumference = 2πr = 132, so r = 21 m. Fencing cost = 132 × 45 = ₹5,940. Area = πr² = (22/7) × 21² = 1,386 m². Grass cost = 1,386 × 40 = ₹55,440. Total = 5,940 + 55,440 = ₹61,380. 🌿",
        wrongAnswerExplanations: {
            "₹5,940": "This is only the fencing cost without the cost of planting grass.",
            "₹12,900": "This calculation is incorrect; the total cost is ₹61,380.",
            "₹24,780": "This calculation is incorrect; the total cost is ₹61,380."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    }
];
