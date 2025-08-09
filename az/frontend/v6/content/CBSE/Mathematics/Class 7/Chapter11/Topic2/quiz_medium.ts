// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 7\Chapter11\Topic2\quiz_medium.ts
import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl7_ch11_t2_qm1',
        type: "mcq",
        question: "A parallelogram has a base of 12 cm and a height of 8 cm. What is its area?",
        options: ["96 cm²", "48 cm²", "40 cm²", "64 cm²"],
        correctAnswer: "96 cm²",
        explanation: "The area of a parallelogram is A = base × height. So, A = 12 × 8 = 96 cm². The perpendicular height must be used, not the slant height. 📊",
        wrongAnswerExplanations: {
            "48 cm²": "This is half of the correct area, perhaps from incorrectly using the triangle formula.",
            "40 cm²": "This may come from miscalculating or using perimeter rather than area.",
            "64 cm²": "This does not correspond to the correct calculation for the given measurements."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch11_t2_qm2',
        type: "mcq",
        question: "The perimeter of a square is 48 cm. What is the area of the square?",
        options: ["144 cm²", "576 cm²", "24 cm²", "288 cm²"],
        correctAnswer: "144 cm²",
        explanation: "The perimeter is P = 4s, so 48 = 4s, which gives s = 12 cm. The area is A = s² = 12² = 144 cm². The relationship between perimeter and area is key. 🔍",
        wrongAnswerExplanations: {
            "576 cm²": "This would be the area if side length were 24 cm, but 48 ÷ 4 = 12 cm.",
            "24 cm²": "This is half the perimeter, not the area.",
            "288 cm²": "This is 48 × 6, which doesn't represent the correct area calculation."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch11_t2_qm3',
        type: "mcq",
        question: "A circle has a circumference of 44 cm. What is its area? (Use π = 22/7)",
        options: ["154 cm²", "308 cm²", "176 cm²", "88 cm²"],
        correctAnswer: "154 cm²",
        explanation: "From C = 2πr, we get 44 = 2 × (22/7) × r, so r = 44 × 7 ÷ (2 × 22) = 7 cm. The area is A = πr² = (22/7) × 7² = 154 cm². ⭕",
        wrongAnswerExplanations: {
            "308 cm²": "This is twice the correct area, perhaps resulting from an error in calculation.",
            "176 cm²": "This doesn't correspond to the correct calculation for a circle with circumference 44 cm.",
            "88 cm²": "This is the product of circumference and π/2, which is not the area formula."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 60
    },
    {
        id: 'cl7_ch11_t2_qm4',
        type: "mcq",
        question: "A rectangular field is 25 m long and 16 m wide. What is the cost of fencing it at ₹75 per meter?",
        options: ["₹6,150", "₹30,000", "₹3,075", "₹1,200"],
        correctAnswer: "₹6,150",
        explanation: "The perimeter of the rectangle is P = 2(l + w) = 2(25 + 16) = 2(41) = 82 m. Cost of fencing = 82 × 75 = ₹6,150. Remember to use the perimeter, not the area. 💰",
        wrongAnswerExplanations: {
            "₹30,000": "This would be the cost if using the area (25 × 16 = 400) instead of perimeter, which is incorrect.",
            "₹3,075": "This is half of the correct cost, suggesting an error in calculation.",
            "₹1,200": "This doesn't match any reasonable calculation based on the given measurements."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch11_t2_qm5',
        type: "mcq",
        question: "A triangular park has sides of 12 m, 15 m, and 9 m. What is the cost of fencing it at ₹250 per meter?",
        options: ["₹9,000", "₹4,500", "₹13,500", "₹36,000"],
        correctAnswer: "₹9,000",
        explanation: "The perimeter of the triangle is P = 12 + 15 + 9 = 36 m. Cost of fencing = 36 × 250 = ₹9,000. Always sum all sides for the perimeter. 🔺",
        wrongAnswerExplanations: {
            "₹4,500": "This is half the correct cost, perhaps resulting from an error in calculation.",
            "₹13,500": "This doesn't correspond to the correct calculation for the given measurements.",
            "₹36,000": "This would be 36 × 1,000, not 36 × 250, suggesting a place value error."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch11_t2_qm6',
        type: "mcq",
        question: "A square has a diagonal of 10√2 cm. What is its perimeter?",
        options: ["40 cm", "20 cm", "10 cm", "80 cm"],
        correctAnswer: "40 cm",
        explanation: "For a square with diagonal d, the side length s = d/√2. Here, s = 10√2/√2 = 10 cm. The perimeter is P = 4s = 4 × 10 = 40 cm. 🟦",
        wrongAnswerExplanations: {
            "20 cm": "This would be half the perimeter, or twice the side length, not the full perimeter.",
            "10 cm": "This is the side length, not the perimeter.",
            "80 cm": "This is twice the perimeter, suggesting an error in calculation."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 60
    },
    {
        id: 'cl7_ch11_t2_qm7',
        type: "mcq",
        question: "A rectangular playground is 90 m long and 50 m wide. The cost of leveling it at ₹12 per square meter is:",
        options: ["₹54,000", "₹1,680", "₹27,000", "₹108,000"],
        correctAnswer: "₹54,000",
        explanation: "The area of the playground is A = l × w = 90 × 50 = 4,500 m². Cost of leveling = 4,500 × 12 = ₹54,000. Use area when calculating costs per square unit. 🏫",
        wrongAnswerExplanations: {
            "₹1,680": "This equals the perimeter (90 + 50 + 90 + 50 = 280) × 6, not the area cost.",
            "₹27,000": "This is half the correct cost, suggesting an error in calculation.",
            "₹108,000": "This is twice the correct cost, perhaps using a rate of ₹24 instead of ₹12."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch11_t2_qm8',
        type: "mcq",
        question: "A rhombus has diagonals of lengths 24 cm and 10 cm. What is its area?",
        options: ["120 cm²", "240 cm²", "60 cm²", "34 cm²"],
        correctAnswer: "120 cm²",
        explanation: "The area of a rhombus is A = ½ × d₁ × d₂, where d₁ and d₂ are the lengths of the diagonals. So, A = ½ × 24 × 10 = 120 cm². ◊",
        wrongAnswerExplanations: {
            "240 cm²": "This would be the area if using the formula d₁ × d₂ without the ½ factor.",
            "60 cm²": "This is half of the correct area, suggesting an error in calculation.",
            "34 cm²": "This is the sum of the diagonals (24 + 10), not the area."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch11_t2_qm9',
        type: "mcq",
        question: "A trapezoid has parallel sides of 15 cm and 25 cm, with a height of 8 cm. What is its area?",
        options: ["160 cm²", "120 cm²", "200 cm²", "300 cm²"],
        correctAnswer: "160 cm²",
        explanation: "The area of a trapezoid is A = ½ × (b₁ + b₂) × h. So, A = ½ × (15 + 25) × 8 = ½ × 40 × 8 = 160 cm². Parallel sides are called bases in a trapezoid. 📊",
        wrongAnswerExplanations: {
            "120 cm²": "This would be the area if using 15 × 8 (one base times height), which is incorrect.",
            "200 cm²": "This would be the area if using 25 × 8 (one base times height), which is incorrect.",
            "300 cm²": "This doesn't correspond to the correct calculation for a trapezoid."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch11_t2_qm10',
        type: "mcq",
        question: "The area of a triangle is 84 cm². If the base is 12 cm, what is its height?",
        options: ["14 cm", "7 cm", "21 cm", "42 cm"],
        correctAnswer: "14 cm",
        explanation: "The area of a triangle is A = ½ × base × height. Given A = 84 cm² and base = 12 cm, we get 84 = ½ × 12 × h, so h = 2 × 84 ÷ 12 = 14 cm. 📐",
        wrongAnswerExplanations: {
            "7 cm": "This is half of the correct height, suggesting an error in calculation.",
            "21 cm": "This would be the height if the area were 126 cm², not 84 cm².",
            "42 cm": "This would be the height if missing the ½ factor in the triangle area formula."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch11_t2_qm11',
        type: "mcq",
        question: "A circular park has a circumference of 352 m. What is the area of the park? (Use π = 22/7)",
        options: ["9,856 m²", "4,928 m²", "19,712 m²", "1,232 m²"],
        correctAnswer: "9,856 m²",
        explanation: "From C = 2πr, we get 352 = 2 × (22/7) × r, so r = 352 × 7 ÷ (2 × 22) = 56 m. The area is A = πr² = (22/7) × 56² = 9,856 m². 🌳",
        wrongAnswerExplanations: {
            "4,928 m²": "This is half the correct area, suggesting an error in calculation.",
            "19,712 m²": "This is twice the correct area, suggesting an error in calculation.",
            "1,232 m²": "This doesn't match any reasonable calculation based on the given measurements."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 60
    },
    {
        id: 'cl7_ch11_t2_qm12',
        type: "mcq",
        question: "A square room has an area of 169 m². How much carpet is needed to cover the floor if carpet comes in rolls 1 m wide?",
        options: ["169 m", "338 m", "13 m", "26 m"],
        correctAnswer: "169 m",
        explanation: "The area of the room is 169 m². Since the carpet is 1 m wide, we need 169 ÷ 1 = 169 m length of carpet to cover the floor. We're converting area to linear measurement based on width. 🧶",
        wrongAnswerExplanations: {
            "338 m": "This would be twice the required length, perhaps resulting from an error in calculation.",
            "13 m": "This is the side length of the square (√169), not the length of carpet needed.",
            "26 m": "This is twice the side length, not the length of carpet needed."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch11_t2_qm13',
        type: "mcq",
        question: "If a regular hexagon has a perimeter of 42 cm, what is the length of each side?",
        options: ["7 cm", "3.5 cm", "14 cm", "21 cm"],
        correctAnswer: "7 cm",
        explanation: "The perimeter of a regular hexagon is P = 6 × side. So, 42 = 6 × side, which gives side = 42 ÷ 6 = 7 cm. All sides of a regular hexagon are equal. 🔷",
        wrongAnswerExplanations: {
            "3.5 cm": "This is half of the correct side length, suggesting an error in calculation.",
            "14 cm": "This is twice the correct side length, suggesting an error in calculation.",
            "21 cm": "This would be the side length if the hexagon had 2 sides, not 6."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch11_t2_qm14',
        type: "mcq",
        question: "A parallelogram has an area of 120 cm². If its height is 8 cm, what is the length of its base?",
        options: ["15 cm", "30 cm", "60 cm", "7.5 cm"],
        correctAnswer: "15 cm",
        explanation: "The area of a parallelogram is A = base × height. Given A = 120 cm² and h = 8 cm, we get 120 = base × 8, so base = 120 ÷ 8 = 15 cm. Remember to use the perpendicular height. ▱",
        wrongAnswerExplanations: {
            "30 cm": "This is twice the correct base length, suggesting an error in calculation.",
            "60 cm": "This would be the base if the height were 2 cm, not 8 cm.",
            "7.5 cm": "This is half the correct base length, suggesting an error in calculation."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch11_t2_qm15',
        type: "mcq",
        question: "A circle has an area of 616 cm². What is its circumference? (Use π = 22/7)",
        options: ["88 cm", "44 cm", "176 cm", "22 cm"],
        correctAnswer: "88 cm",
        explanation: "From A = πr², we get 616 = (22/7) × r², so r² = 616 × 7 ÷ 22 = 196, giving r = 14 cm. The circumference is C = 2πr = 2 × (22/7) × 14 = 88 cm. ⭕",
        wrongAnswerExplanations: {
            "44 cm": "This would be the circumference if r = 7 cm, but r = 14 cm from the given area.",
            "176 cm": "This is twice the correct circumference, suggesting an error in calculation.",
            "22 cm": "This would be the circumference if r = 3.5 cm, but r = 14 cm from the given area."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 60
    },
    {
        id: 'cl7_ch11_t2_qm16',
        type: "mcq",
        question: "A rectangular field is 72 m long and 58 m wide. What will it cost to put a fence around it at the rate of ₹92 per meter?",
        options: ["₹23,920", "₹382,720", "₹11,960", "₹47,840"],
        correctAnswer: "₹23,920",
        explanation: "The perimeter of the field is P = 2(l + w) = 2(72 + 58) = 2 × 130 = 260 m. Cost of fencing = 260 × 92 = ₹23,920. Use perimeter for boundary calculations. 🚜",
        wrongAnswerExplanations: {
            "₹382,720": "This would be the cost if using area (72 × 58 = 4,176) × 92, not perimeter.",
            "₹11,960": "This is half the correct cost, suggesting an error in calculation.",
            "₹47,840": "This is twice the correct cost, suggesting an error in calculation."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch11_t2_qm17',
        type: "mcq",
        question: "A square garden has a perimeter of 100 m. How much will it cost to sow grass in it at the rate of ₹25 per square meter?",
        options: ["₹15,625", "₹2,500", "₹625", "₹31,250"],
        correctAnswer: "₹15,625",
        explanation: "The perimeter is P = 4s, so 100 = 4s, which gives s = 25 m. The area is A = s² = 25² = 625 m². Cost of sowing grass = 625 × 25 = ₹15,625. Use area for covering costs. 🌱",
        wrongAnswerExplanations: {
            "₹2,500": "This would be the cost of 100 m² of grass, not 625 m².",
            "₹625": "This is the area in m², not the cost.",
            "₹31,250": "This is twice the correct cost, suggesting an error in calculation."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl7_ch11_t2_qm18',
        type: "mcq",
        question: "A path 3.5 m wide runs around a rectangular park of length 66 m and breadth 42 m. Find the area of the path.",
        options: ["788.5 m²", "2,772 m²", "915 m²", "3,815.5 m²"],
        correctAnswer: "788.5 m²",
        explanation: "The outer rectangle has dimensions (66 + 2 × 3.5) × (42 + 2 × 3.5) = 73 × 49. Its area is 73 × 49 = 3,577 m². The inner rectangle (park) has area 66 × 42 = 2,772 m². The path area is 3,577 - 2,772 = 805 m². 🚶",
        wrongAnswerExplanations: {
            "2,772 m²": "This is the area of the inner rectangle (the park), not the path.",
            "915 m²": "This value is incorrect based on the given dimensions.",
            "3,815.5 m²": "This value is incorrect and exceeds even the outer rectangle's area."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 60
    },
    {
        id: 'cl7_ch11_t2_qm19',
        type: "mcq",
        question: "The diagonal of a rectangle is 25 cm. If its length is 24 cm, what is its width?",
        options: ["7 cm", "15 cm", "20 cm", "18 cm"],
        correctAnswer: "7 cm",
        explanation: "Using the Pythagorean theorem in a rectangle, diagonal² = length² + width². So, 25² = 24² + width², giving width² = 625 - 576 = 49, thus width = 7 cm. 📏",
        wrongAnswerExplanations: {
            "15 cm": "This doesn't satisfy the Pythagorean relationship with the given length and diagonal.",
            "20 cm": "This doesn't satisfy the Pythagorean relationship with the given length and diagonal.",
            "18 cm": "This doesn't satisfy the Pythagorean relationship with the given length and diagonal."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 60
    },
    {
        id: 'cl7_ch11_t2_qm20',
        type: "mcq",
        question: "The ratio of the areas of two similar triangles is 16:25. If the height of the smaller triangle is 12 cm, what is the height of the larger triangle?",
        options: ["15 cm", "20 cm", "18 cm", "10 cm"],
        correctAnswer: "15 cm",
        explanation: "For similar triangles, the ratio of areas equals the square of the ratio of corresponding sides or heights. So, 16/25 = (12/h)², giving h² = 12² × 25/16 = 144 × 25/16 = 225, thus h = 15 cm. 🔼",
        wrongAnswerExplanations: {
            "20 cm": "This would give an area ratio of 16:36, not 16:25.",
            "18 cm": "This would give an area ratio of 16:36, not 16:25.",
            "10 cm": "This would make the smaller triangle the larger one, which contradicts the given information."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 60
    }
];
