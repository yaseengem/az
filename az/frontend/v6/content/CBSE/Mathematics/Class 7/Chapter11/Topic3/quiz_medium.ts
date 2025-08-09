// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 7\Chapter11\Topic3\quiz_medium.ts
import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl7_ch11_t3_qm1',
        type: "mcq",
        question: "Sanjay wants to install tiles on the floor of his rectangular room measuring 5m by 4m. If each tile is a square with side length 50cm, how many tiles will he need?",
        options: ["20 tiles", "40 tiles", "80 tiles", "100 tiles"],
        correctAnswer: "40 tiles",
        explanation: "Room area = 5m × 4m = 20m². Tile area = 0.5m × 0.5m = 0.25m². Number of tiles = 20m² ÷ 0.25m² = 80 tiles.",
        wrongAnswerExplanations: {
            "20 tiles": "This only considers the perimeter, not the area.",
            "40 tiles": "This calculation is incorrect.",
            "100 tiles": "This calculation is incorrect."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl7_ch11_t3_qm2',
        type: "mcq",
        question: "A circular park has a circumference of 132m. What is the area of the park? (Use π = 3.14)",
        options: ["1,056 m²", "1,320 m²", "1,386 m²", "1,452 m²"],
        correctAnswer: "1,386 m²",
        explanation: "Circumference = 2πr, so r = 132m ÷ (2 × 3.14) = 21m. Area = πr² = 3.14 × 21² = 3.14 × 441 = 1,386 m². 🌳",
        wrongAnswerExplanations: {
            "1,056 m²": "This calculation is incorrect.",
            "1,320 m²": "This calculation is incorrect.",
            "1,452 m²": "This calculation is incorrect."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl7_ch11_t3_qm3',
        type: "mcq",
        question: "A rectangular garden has a perimeter of 36m and a width of 6m. What is its area?",
        options: ["60 m²", "72 m²", "96 m²", "108 m²"],
        correctAnswer: "72 m²",
        explanation: "Perimeter = 2(length + width) = 36m. So, 2(length + 6m) = 36m, which gives length = 12m. Area = length × width = 12m × 6m = 72 m². 🌻",
        wrongAnswerExplanations: {
            "60 m²": "This calculation is incorrect.",
            "96 m²": "This calculation is incorrect.",
            "108 m²": "This calculation is incorrect."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch11_t3_qm4',
        type: "mcq",
        question: "The area of a trapezoid is 120 cm². If the height is 8 cm and one of the parallel sides is 10 cm, what is the length of the other parallel side?",
        options: ["15 cm", "20 cm", "25 cm", "30 cm"],
        correctAnswer: "20 cm",
        explanation: "Area = ½ × h × (a + b) where a and b are parallel sides. So 120 = ½ × 8 × (10 + b). This gives 120 = 4 × (10 + b), so 10 + b = 30, and b = 20 cm. 📏",
        wrongAnswerExplanations: {
            "15 cm": "This calculation is incorrect.",
            "25 cm": "This calculation is incorrect.",
            "30 cm": "This is the sum of both parallel sides, not the length of the second side."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl7_ch11_t3_qm5',
        type: "mcq",
        question: "A path 2m wide runs around the outside of a rectangular field of dimensions 48m × 36m. What is the area of the path?",
        options: ["168 m²", "336 m²", "344 m²", "352 m²"],
        correctAnswer: "344 m²",
        explanation: "Outer rectangle area = 52m × 40m = 2,080 m². Field area = 48m × 36m = 1,728 m². Path area = 2,080 - 1,728 = 352 m². 🚶",
        wrongAnswerExplanations: {
            "168 m²": "This calculation is incorrect.",
            "336 m²": "This calculation is incorrect.",
            "344 m²": "This calculation is incorrect."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl7_ch11_t3_qm6',
        type: "mcq",
        question: "A triangle has a base of 14cm and an area of 84 cm². What is its height?",
        options: ["6 cm", "12 cm", "16 cm", "24 cm"],
        correctAnswer: "12 cm",
        explanation: "Area = ½ × base × height. So 84 = ½ × 14 × height, which gives height = 84 × 2 ÷ 14 = 12 cm. The height is perpendicular to the base. 📐",
        wrongAnswerExplanations: {
            "6 cm": "This calculation is incorrect.",
            "16 cm": "This calculation is incorrect.",
            "24 cm": "This calculation is incorrect."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch11_t3_qm7',
        type: "mcq",
        question: "The perimeter of a regular pentagon is 65cm. What is the length of each side?",
        options: ["10 cm", "13 cm", "16.25 cm", "32.5 cm"],
        correctAnswer: "13 cm",
        explanation: "A regular pentagon has 5 equal sides. So, side length = perimeter ÷ 5 = 65cm ÷ 5 = 13cm. All sides have the same length in a regular pentagon. 🔶",
        wrongAnswerExplanations: {
            "10 cm": "This calculation is incorrect.",
            "16.25 cm": "This is perimeter ÷ 4, but a pentagon has 5 sides.",
            "32.5 cm": "This is half the perimeter, not the side length."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch11_t3_qm8',
        type: "mcq",
        question: "A farmer has a square field with area 2,500 m². He wants to put a fence around it. If fencing costs ₹75 per meter, what is the total cost?",
        options: ["₹7,500", "₹15,000", "₹18,750", "₹22,500"],
        correctAnswer: "₹15,000",
        explanation: "Area = side², so side = √2,500 = 50m. Perimeter = 4 × 50 = 200m. Cost = 200m × ₹75 = ₹15,000. 🏞️",
        wrongAnswerExplanations: {
            "₹7,500": "This calculation is incorrect.",
            "₹18,750": "This calculation is incorrect.",
            "₹22,500": "This calculation is incorrect."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl7_ch11_t3_qm9',
        type: "mcq",
        question: "A rhombus has diagonals of length 24cm and 10cm. What is its area?",
        options: ["120 cm²", "240 cm²", "320 cm²", "480 cm²"],
        correctAnswer: "120 cm²",
        explanation: "Area of rhombus = ½ × product of diagonals = ½ × 24cm × 10cm = 120 cm². The diagonals bisect each other at right angles. 🔹",
        wrongAnswerExplanations: {
            "240 cm²": "This is double the correct area.",
            "320 cm²": "This calculation is incorrect.",
            "480 cm²": "This calculation is incorrect."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch11_t3_qm10',
        type: "mcq",
        question: "The floor of a square room has side length 4m. How much will it cost to cover it with carpet costing ₹250 per square meter?",
        options: ["₹1,000", "₹2,000", "₹4,000", "₹16,000"],
        correctAnswer: "₹4,000",
        explanation: "Area of room = side² = 4² = 16 m². Cost = 16 m² × ₹250 = ₹4,000. The cost depends on the area, not the perimeter. 🏠",
        wrongAnswerExplanations: {
            "₹1,000": "This is the cost for the perimeter (incorrectly calculated), not the area.",
            "₹2,000": "This calculation is incorrect.",
            "₹16,000": "This calculation is incorrect."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch11_t3_qm11',
        type: "mcq",
        question: "The area of a circle is 154 cm². What is its circumference? (Use π = 3.14)",
        options: ["22 cm", "44 cm", "69.08 cm", "138.16 cm"],
        correctAnswer: "44 cm",
        explanation: "Area = πr², so r = √(154 ÷ 3.14) = √49 = 7 cm. Circumference = 2πr = 2 × 3.14 × 7 = 44 cm. ⭕",
        wrongAnswerExplanations: {
            "22 cm": "This is the diameter (2r), not the circumference.",
            "69.08 cm": "This calculation is incorrect.",
            "138.16 cm": "This calculation is incorrect."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl7_ch11_t3_qm12',
        type: "mcq",
        question: "A rectangular picture frame has an outside perimeter of 80cm and inside perimeter of 48cm. If the frame has uniform width, what is the width of the frame?",
        options: ["2 cm", "4 cm", "8 cm", "16 cm"],
        correctAnswer: "4 cm",
        explanation: "Let outside dimensions be a and b, and inside dimensions be a-2w and b-2w where w is the frame width. Outside perimeter = 2(a+b) = 80cm, so a+b = 40cm. Inside perimeter = 2(a-2w+b-2w) = 2(a+b-4w) = 48cm. So, a+b-4w = 24cm. Substituting a+b = 40cm, we get 40-4w = 24, which gives w = 4cm. 🖼️",
        wrongAnswerExplanations: {
            "2 cm": "This calculation is incorrect.",
            "8 cm": "This calculation is incorrect.",
            "16 cm": "This calculation is incorrect."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 90
    },
    {
        id: 'cl7_ch11_t3_qm13',
        type: "mcq",
        question: "A circular flower bed has a diameter of 3.5m. How much soil is needed to fill it to a depth of 20cm?",
        options: ["1.925 m³", "3.85 m³", "19.25 m³", "38.5 m³"],
        correctAnswer: "1.925 m³",
        explanation: "Area of flower bed = πr² = π × (3.5÷2)² = π × 1.75² = 3.14 × 3.0625 = 9.625 m². Volume of soil = area × depth = 9.625 m² × 0.2 m = 1.925 m³. 🌱",
        wrongAnswerExplanations: {
            "3.85 m³": "This is double the correct volume.",
            "19.25 m³": "This calculation is incorrect.",
            "38.5 m³": "This calculation is incorrect."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl7_ch11_t3_qm14',
        type: "mcq",
        question: "A triangular piece of land has sides measuring 20m, 30m, and 40m. What is its area?",
        options: ["200 m²", "290 m²", "300 m²", "600 m²"],
        correctAnswer: "290 m²",
        explanation: "Using Heron's formula: s = (a+b+c)/2 = (20+30+40)/2 = 45. Area = √[s(s-a)(s-b)(s-c)] = √[45×25×15×5] = √84,375 ≈ 290 m². We can calculate area when we know all three sides. 🔺",
        wrongAnswerExplanations: {
            "200 m²": "This calculation is incorrect.",
            "300 m²": "This is an approximation that's close but not accurate.",
            "600 m²": "This calculation is incorrect."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 90
    },
    {
        id: 'cl7_ch11_t3_qm15',
        type: "mcq",
        question: "A rectangular playground is 50m long and 30m wide. A 2.5m wide path is to be built around it. What is the area of the path?",
        options: ["265 m²", "390 m²", "415 m²", "1,500 m²"],
        correctAnswer: "415 m²",
        explanation: "Outer rectangle area = 55m × 35m = 1,925 m². Playground area = 50m × 30m = 1,500 m². Path area = 1,925 - 1,500 = 425 m². 🚶‍♂️",
        wrongAnswerExplanations: {
            "265 m²": "This calculation is incorrect.",
            "390 m²": "This calculation is incorrect.",
            "1,500 m²": "This is the area of the playground, not the path."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl7_ch11_t3_qm16',
        type: "mcq",
        question: "A swimming pool is 25m long and 10m wide. It is surrounded by a concrete deck that is 3m wide on all sides. What is the total area of the deck?",
        options: ["204 m²", "306 m²", "496 m²", "744 m²"],
        correctAnswer: "306 m²",
        explanation: "Outer area = 31m × 16m = 496 m². Pool area = 25m × 10m = 250 m². Deck area = 496 - 250 = 246 m². 🏊",
        wrongAnswerExplanations: {
            "204 m²": "This calculation is incorrect.",
            "496 m²": "This is the total area including the pool, not just the deck.",
            "744 m²": "This calculation is incorrect."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl7_ch11_t3_qm17',
        type: "mcq",
        question: "A square garden plot with side length 15m has a square flower bed with side length 5m at its center. What is the area that remains for grass?",
        options: ["200 m²", "225 m²", "245 m²", "250 m²"],
        correctAnswer: "200 m²",
        explanation: "Garden area = 15² = 225 m². Flower bed area = 5² = 25 m². Grass area = 225 - 25 = 200 m². 🌷",
        wrongAnswerExplanations: {
            "225 m²": "This is the total garden area, not just the grass area.",
            "245 m²": "This calculation is incorrect.",
            "250 m²": "This calculation is incorrect."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch11_t3_qm18',
        type: "mcq",
        question: "A circular pond with radius 7m is surrounded by a path of uniform width 1.5m. What is the area of the path?",
        options: ["66 m²", "70 m²", "72 m²", "154 m²"],
        correctAnswer: "72 m²",
        explanation: "Outer area = π(7+1.5)² = π×8.5² = 3.14×72.25 = 227 m². Pond area = π×7² = 3.14×49 = 154 m². Path area = 227 - 154 = 73 m². 🌊",
        wrongAnswerExplanations: {
            "66 m²": "This calculation is incorrect.",
            "70 m²": "This is close but not accurate.",
            "154 m²": "This is the area of the pond, not the path."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl7_ch11_t3_qm19',
        type: "mcq",
        question: "The diagonal of a square is 8√2 cm. What is its perimeter?",
        options: ["16 cm", "32 cm", "64 cm", "128 cm"],
        correctAnswer: "32 cm",
        explanation: "If the diagonal is 8√2 cm, the side length is 8 cm (using s² + s² = d², so s = d/√2). Perimeter = 4 × 8 = 32 cm. 📏",
        wrongAnswerExplanations: {
            "16 cm": "This is half the perimeter.",
            "64 cm": "This calculation is incorrect.",
            "128 cm": "This calculation is incorrect."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl7_ch11_t3_qm20',
        type: "mcq",
        question: "A rectangular field is 90m long and 60m wide. A path 5m wide runs all around it inside the boundary. What is the area of the path?",
        options: ["1,350 m²", "1,450 m²", "1,500 m²", "5,400 m²"],
        correctAnswer: "1,450 m²",
        explanation: "Field area = 90m × 60m = 5,400 m². Inner area = (90-2×5)m × (60-2×5)m = 80m × 50m = 4,000 m². Path area = 5,400 - 4,000 = 1,400 m². 🚶‍♀️",
        wrongAnswerExplanations: {
            "1,350 m²": "This calculation is incorrect.",
            "1,500 m²": "This is close but not accurate.",
            "5,400 m²": "This is the total field area, not just the path."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    }
];
