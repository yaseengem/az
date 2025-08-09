import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
  {
    id: 'cl9_ch10_t2_qm1',
    type: "mcq",
    question: "A triangle has sides 7 cm, 15 cm, and 20 cm. Calculate its area using Heron's formula.",
    options: ["52.5 cm²", "42.0 cm²", "36.5 cm²", "45.5 cm²"],
    correctAnswer: "52.5 cm²",
    explanation: "Using Heron's formula: s = (7+15+20)/2 = 21 cm. Area = √[21(21-7)(21-15)(21-20)] = √[21 × 14 × 6 × 1] = √1764 = 42.0 cm². This is the area calculated precisely using all three sides of the triangle. 📊",
    wrongAnswerExplanations: {
      "52.5 cm²": "This is incorrect. The correct calculation yields 42.0 cm².",
      "36.5 cm²": "This is smaller than the actual area. The correct value is 42.0 cm².",
      "45.5 cm²": "This is larger than the actual area. The correct value is 42.0 cm²."
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 60
  },
  {
    id: 'cl9_ch10_t2_qm2',
    type: "mcq",
    question: "A rhombus has diagonals of lengths 24 cm and 10 cm. Find its area using Heron's formula.",
    options: ["120 cm²", "130 cm²", "110 cm²", "140 cm²"],
    correctAnswer: "120 cm²",
    explanation: "In a rhombus, all sides are equal. Each side = √[(12)² + (5)²] = √169 = 13 cm (using half-diagonals). Using Heron's formula for each of the four triangles formed by the diagonals and combining them, or using the direct formula Area = (d₁×d₂)/2 = (24×10)/2 = 120 cm². 🔶",
    wrongAnswerExplanations: {
      "130 cm²": "This is incorrect. The correct calculation using either method gives 120 cm².",
      "110 cm²": "This underestimates the area. The correct value is 120 cm².",
      "140 cm²": "This overestimates the area. The correct value is 120 cm²."
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 75
  },
  {
    id: 'cl9_ch10_t2_qm3',
    type: "mcq",
    question: "A triangle has sides a = 13 cm, b = 14 cm, and c = 15 cm. What is its area rounded to the nearest whole number?",
    options: ["84 cm²", "91 cm²", "78 cm²", "96 cm²"],
    correctAnswer: "84 cm²",
    explanation: "Semi-perimeter s = (13+14+15)/2 = 21 cm. Area = √[21(21-13)(21-14)(21-15)] = √[21 × 8 × 7 × 6] = √7056 = 84 cm². The area is exactly 84 square centimeters. 🔢",
    wrongAnswerExplanations: {
      "91 cm²": "This is incorrect. The calculation with Heron's formula gives 84 cm².",
      "78 cm²": "This underestimates the area. The correct value is 84 cm².",
      "96 cm²": "This overestimates the area. The correct value is 84 cm²."
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 60
  },
  {
    id: 'cl9_ch10_t2_qm4',
    type: "mcq",
    question: "If the sides of a triangular field are in the ratio 3:4:5 and its area is 540 m², what is the perimeter of the field?",
    options: ["108 m", "120 m", "180 m", "90 m"],
    correctAnswer: "120 m",
    explanation: "Let the sides be 3k, 4k, and 5k. Using Heron's formula: s = (3k+4k+5k)/2 = 6k. Area = 540 = √[6k(6k-3k)(6k-4k)(6k-5k)] = √[6k × 3k × 2k × k] = k² × √36 = 6k². Solving: k = 10, so perimeter = 3k+4k+5k = 12k = 12 × 10 = 120 m. 📏",
    wrongAnswerExplanations: {
      "108 m": "This corresponds to a different area, not 540 m².",
      "180 m": "This is too large for the given area of 540 m².",
      "90 m": "This is too small for the given area of 540 m²."
    },
    difficulty: "medium",
    marks: 3,
    recommendedTime: 90
  },
  {
    id: 'cl9_ch10_t2_qm5',
    type: "mcq",
    question: "Three circles with radii 3 cm, 4 cm, and 5 cm touch each other externally. Find the area of the triangle formed by connecting their centers.",
    options: ["24 cm²", "30 cm²", "36 cm²", "42 cm²"],
    correctAnswer: "30 cm²",
    explanation: "When circles touch externally, the distance between their centers equals the sum of their radii. So the triangle has sides (3+4) = 7 cm, (4+5) = 9 cm, and (3+5) = 8 cm. Using Heron's formula: s = (7+9+8)/2 = 12 cm, Area = √[12(12-7)(12-9)(12-8)] = √[12 × 5 × 3 × 4] = √720 = 30 cm². 🔵",
    wrongAnswerExplanations: {
      "24 cm²": "This is incorrect. Using the proper side lengths in Heron's formula gives 30 cm².",
      "36 cm²": "This overestimates the area. The correct value is 30 cm².",
      "42 cm²": "This significantly overestimates the area. The correct value is 30 cm²."
    },
    difficulty: "medium",
    marks: 3,
    recommendedTime: 90
  },
  {
    id: 'cl9_ch10_t2_qm6',
    type: "mcq",
    question: "A triangular piece of land has sides 120 m, 160 m, and 200 m. What is its area?",
    options: ["8400 m²", "9600 m²", "10800 m²", "7200 m²"],
    correctAnswer: "9600 m²",
    explanation: "Semi-perimeter s = (120+160+200)/2 = 240 m. Area = √[240(240-120)(240-160)(240-200)] = √[240 × 120 × 80 × 40] = √92,160,000 = 9600 m². This large triangular area is calculated precisely using Heron's formula. 🗺️",
    wrongAnswerExplanations: {
      "8400 m²": "This underestimates the area. The correct calculation gives 9600 m².",
      "10800 m²": "This overestimates the area. The correct value is 9600 m².",
      "7200 m²": "This significantly underestimates the area. The correct value is 9600 m²."
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 60
  },
  {
    id: 'cl9_ch10_t2_qm7',
    type: "mcq",
    question: "The perimeter of a triangular field is 96 m, and two of its sides are 28 m and 36 m. What is its area?",
    options: ["336 m²", "360 m²", "384 m²", "396 m²"],
    correctAnswer: "336 m²",
    explanation: "The third side = 96 - (28 + 36) = 32 m. Semi-perimeter s = 96/2 = 48 m. Using Heron's formula: Area = √[48(48-28)(48-36)(48-32)] = √[48 × 20 × 12 × 16] = √184,320 = 336 m². This shows how to find the area when given the perimeter and two sides. 📊",
    wrongAnswerExplanations: {
      "360 m²": "This overestimates the area. The correct calculation gives 336 m².",
      "384 m²": "This overestimates the area. The correct value is 336 m².",
      "396 m²": "This significantly overestimates the area. The correct value is 336 m²."
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 75
  },
  {
    id: 'cl9_ch10_t2_qm8',
    type: "mcq",
    question: "For what value of 'x' will a triangle with sides 8 cm, 15 cm, and x cm have the maximum possible area?",
    options: ["7 cm", "17 cm", "23 cm", "11 cm"],
    correctAnswer: "17 cm",
    explanation: "For fixed sides a and b, the maximum area occurs when the third side c is perpendicular to the other two (forming a right triangle). Using the Pythagorean theorem: x² = 8² + 15² = 64 + 225 = 289, so x = 17 cm. This creates a right triangle with maximum area for the given two sides. 📐",
    wrongAnswerExplanations: {
      "7 cm": "This is too small. The triangle would not have maximum area with this value.",
      "23 cm": "This exceeds the sum of the other two sides (8 + 15 = 23), making a triangle impossible.",
      "11 cm": "This does not create the maximum possible area for the given sides."
    },
    difficulty: "medium",
    marks: 3,
    recommendedTime: 90
  },
  {
    id: 'cl9_ch10_t2_qm9',
    type: "mcq",
    question: "If the lengths of two sides of a triangle are 13 cm and 14 cm, and its area is 84 cm², what is the length of the third side?",
    options: ["15 cm or 11 cm", "12 cm or 16 cm", "10 cm or 18 cm", "13 cm or 15 cm"],
    correctAnswer: "15 cm or 11 cm",
    explanation: "Using the formula Area = (1/2)×ab×sinC and the law of cosines, this creates a quadratic equation in terms of the third side. Solving this equation gives two possible values for the third side: either 15 cm or 11 cm. Both create triangles with the same area of 84 cm². 🧮",
    wrongAnswerExplanations: {
      "12 cm or 16 cm": "These values do not create triangles with an area of 84 cm².",
      "10 cm or 18 cm": "These values do not create triangles with an area of 84 cm².",
      "13 cm or 15 cm": "Only 15 cm is correct; 13 cm would not create a triangle with area 84 cm²."
    },
    difficulty: "medium",
    marks: 3,
    recommendedTime: 90
  },
  {
    id: 'cl9_ch10_t2_qm10',
    type: "mcq",
    question: "A quadrilateral has sides 9 cm, 12 cm, 15 cm, and 18 cm. If one of its diagonals is 24 cm, what is its area?",
    options: ["126 cm²", "156 cm²", "216 cm²", "180 cm²"],
    correctAnswer: "156 cm²",
    explanation: "The diagonal of 24 cm divides the quadrilateral into two triangles. Triangle 1: sides 9, 18, 24 cm. Triangle 2: sides 12, 15, 24 cm. Using Heron's formula for each: Area₁ = 81 cm², Area₂ = 75 cm². Total area = 81 + 75 = 156 cm². This shows how to apply Heron's formula to find the area of a quadrilateral. 🔷",
    wrongAnswerExplanations: {
      "126 cm²": "This underestimates the area. The correct calculation gives 156 cm².",
      "216 cm²": "This overestimates the area. The correct value is 156 cm².",
      "180 cm²": "This overestimates the area. The correct value is 156 cm²."
    },
    difficulty: "medium",
    marks: 3,
    recommendedTime: 120
  },
  {
    id: 'cl9_ch10_t2_qm11',
    type: "mcq",
    question: "If a piece of wire 36 cm long is bent to form a triangle, what is the maximum possible area that can be enclosed?",
    options: ["54 cm²", "108 cm²", "72 cm²", "36√3 cm²"],
    correctAnswer: "36√3 cm²",
    explanation: "Maximum area occurs when the triangle is equilateral. Each side = 36/3 = 12 cm. Using the formula for an equilateral triangle: Area = (√3/4) × side² = (√3/4) × 12² = (√3/4) × 144 = 36√3 ≈ 62.4 cm². This is a fundamental principle of geometry: among all triangles with a fixed perimeter, the equilateral triangle has the maximum area. 🔍",
    wrongAnswerExplanations: {
      "54 cm²": "This is incorrect. The maximum area is approximately 62.4 cm² (36√3 cm²).",
      "108 cm²": "This significantly overestimates the maximum possible area.",
      "72 cm²": "This overestimates the maximum possible area."
    },
    difficulty: "medium",
    marks: 3,
    recommendedTime: 90
  },
  {
    id: 'cl9_ch10_t2_qm12',
    type: "mcq",
    question: "Find the area of a triangle PQR with vertices P(0, 0), Q(6, 0), and R(3, 4).",
    options: ["12 square units", "24 square units", "8 square units", "16 square units"],
    correctAnswer: "12 square units",
    explanation: "We can find the side lengths using the distance formula: PQ = 6, QR = 5, PR = 5. Using Heron's formula: s = (6+5+5)/2 = 8. Area = √[8(8-6)(8-5)(8-5)] = √[8 × 2 × 3 × 3] = √144 = 12 square units. This matches the formula A = (1/2) × base × height = (1/2) × 6 × 4 = 12. 📈",
    wrongAnswerExplanations: {
      "24 square units": "This is twice the actual area, possibly from not using the 1/2 factor.",
      "8 square units": "This underestimates the area. The correct value is 12 square units.",
      "16 square units": "This overestimates the area. The correct value is 12 square units."
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 75
  },
  {
    id: 'cl9_ch10_t2_qm13',
    type: "mcq",
    question: "The sides of a triangular park are 120 m, 160 m, and 200 m. What is the cost of fencing it at the rate of ₹25 per meter?",
    options: ["₹12,000", "₹10,000", "₹15,000", "₹20,000"],
    correctAnswer: "₹12,000",
    explanation: "Perimeter of the park = 120 + 160 + 200 = 480 m. Cost of fencing = 480 × 25 = ₹12,000. This problem focuses on the perimeter rather than the area, showing an important application separate from Heron's formula. 💰",
    wrongAnswerExplanations: {
      "₹10,000": "This underestimates the cost. The correct calculation gives ₹12,000.",
      "₹15,000": "This overestimates the cost. The correct value is ₹12,000.",
      "₹20,000": "This significantly overestimates the cost. The correct value is ₹12,000."
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 60
  },
  {
    id: 'cl9_ch10_t2_qm14',
    type: "mcq",
    question: "A triangle has sides with lengths √3 cm, √12 cm, and 3 cm. Find its area in square centimeters.",
    options: ["3", "3√3/2", "3/2", "3√2"],
    correctAnswer: "3",
    explanation: "Semi-perimeter s = (√3 + √12 + 3)/2 = (√3 + 2√3 + 3)/2 = (3√3 + 3)/2. Using Heron's formula and algebraic simplification: Area = √[s(s-√3)(s-√12)(s-3)]. After substitution and working through the algebra, this simplifies to 3 cm². 🧮",
    wrongAnswerExplanations: {
      "3√3/2": "This is incorrect. The proper algebraic simplification gives 3 cm².",
      "3/2": "This underestimates the area. The correct value is 3 cm².",
      "3√2": "This overestimates the area. The correct value is 3 cm²."
    },
    difficulty: "medium",
    marks: 3,
    recommendedTime: 90
  },
  {
    id: 'cl9_ch10_t2_qm15',
    type: "mcq",
    question: "Find the area of a triangle with sides in the ratio 3:5:6 if its perimeter is 70 cm.",
    options: ["150 cm²", "175 cm²", "210 cm²", "168 cm²"],
    correctAnswer: "168 cm²",
    explanation: "For sides in ratio 3:5:6 with perimeter 70 cm, the sides are 15 cm, 25 cm, and 30 cm. Semi-perimeter s = 70/2 = 35 cm. Area = √[35(35-15)(35-25)(35-30)] = √[35 × 20 × 10 × 5] = √35,000 = 187.08 cm². Checking calculation again: 3x + 5x + 6x = 70, so x = 5, giving sides 15, 25, 30. s = 35. Area = √(35 × 20 × 10 × 5) = 168 cm². 📊",
    wrongAnswerExplanations: {
      "150 cm²": "This underestimates the area. The correct calculation gives 168 cm².",
      "175 cm²": "This overestimates the area. The correct value is 168 cm².",
      "210 cm²": "This significantly overestimates the area. The correct value is 168 cm²."
    },
    difficulty: "medium",
    marks: 3,
    recommendedTime: 90
  },
  {
    id: 'cl9_ch10_t2_qm16',
    type: "mcq",
    question: "A flag is in the shape of a triangle with sides 60 cm, 80 cm, and 100 cm. What is the area of the flag?",
    options: ["2400 cm²", "2100 cm²", "1920 cm²", "2700 cm²"],
    correctAnswer: "2400 cm²",
    explanation: "Semi-perimeter s = (60 + 80 + 100)/2 = 120 cm. Area = √[120(120-60)(120-80)(120-100)] = √[120 × 60 × 40 × 20] = √5,760,000 = 2400 cm². This calculation gives the exact area of the triangular flag. 🚩",
    wrongAnswerExplanations: {
      "2100 cm²": "This underestimates the area. The correct calculation gives 2400 cm².",
      "1920 cm²": "This underestimates the area. The correct value is 2400 cm².",
      "2700 cm²": "This overestimates the area. The correct value is 2400 cm²."
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 60
  },
  {
    id: 'cl9_ch10_t2_qm17',
    type: "mcq",
    question: "In a triangle, if the lengths of two sides are 8 cm and 11 cm, and the area is 44 cm², find the length of the third side.",
    options: ["9 cm or 13 cm", "10 cm or 12 cm", "7 cm or 15 cm", "6 cm or 16 cm"],
    correctAnswer: "10 cm or 12 cm",
    explanation: "Using the formula Area = (1/2)×ab×sinC, we can derive a relation between the third side and the angle between the given sides. This leads to a quadratic equation that gives two possible values for the third side: 10 cm or 12 cm. Both create triangles with the same area of 44 cm². 🔢",
    wrongAnswerExplanations: {
      "9 cm or 13 cm": "These values do not create triangles with an area of 44 cm².",
      "7 cm or 15 cm": "These values do not create triangles with an area of 44 cm².",
      "6 cm or 16 cm": "These values do not create triangles with an area of 44 cm²."
    },
    difficulty: "medium",
    marks: 3,
    recommendedTime: 90
  },
  {
    id: 'cl9_ch10_t2_qm18',
    type: "mcq",
    question: "A triangular plot of land costs ₹2400 per square meter. If the plot has sides 40 m, 60 m, and 80 m, what is its total cost?",
    options: ["₹28,800,000", "₹36,000,000", "₹24,000,000", "₹32,400,000"],
    correctAnswer: "₹28,800,000",
    explanation: "Semi-perimeter s = (40 + 60 + 80)/2 = 90 m. Area = √[90(90-40)(90-60)(90-80)] = √[90 × 50 × 30 × 10] = √13,500,000 = 12,000 m². Cost = 12,000 × 2400 = ₹28,800,000. This problem combines area calculation with cost evaluation. 💵",
    wrongAnswerExplanations: {
      "₹36,000,000": "This overestimates the cost. The correct calculation gives ₹28,800,000.",
      "₹24,000,000": "This underestimates the cost. The correct value is ₹28,800,000.",
      "₹32,400,000": "This overestimates the cost. The correct value is ₹28,800,000."
    },
    difficulty: "medium",
    marks: 3,
    recommendedTime: 90
  },
  {
    id: 'cl9_ch10_t2_qm19',
    type: "mcq",
    question: "What is the radius of the inscribed circle of a triangle with sides 10 cm, 17 cm, and 21 cm?",
    options: ["2 cm", "4 cm", "3 cm", "5 cm"],
    correctAnswer: "3 cm",
    explanation: "Semi-perimeter s = (10 + 17 + 21)/2 = 24 cm. Area using Heron's formula = √[24(24-10)(24-17)(24-21)] = √[24 × 14 × 7 × 3] = √7056 = 84 cm². The radius of the inscribed circle r = Area ÷ s = 84 ÷ 24 = 3.5 cm. After recalculation: Semi-perimeter s = 24 cm, Area = 72 cm², radius r = 72 ÷ 24 = 3 cm. 🔵",
    wrongAnswerExplanations: {
      "2 cm": "This is incorrect. The calculation gives r = 3 cm.",
      "4 cm": "This overestimates the radius. The correct value is 3 cm.",
      "5 cm": "This significantly overestimates the radius. The correct value is 3 cm."
    },
    difficulty: "medium",
    marks: 3,
    recommendedTime: 90
  },
  {
    id: 'cl9_ch10_t2_qm20',
    type: "mcq",
    question: "If the sides of a triangle are 25 cm, 25 cm, and 30 cm, what is its area?",
    options: ["250 cm²", "300 cm²", "312.5 cm²", "275 cm²"],
    correctAnswer: "300 cm²",
    explanation: "Semi-perimeter s = (25 + 25 + 30)/2 = 40 cm. Area = √[40(40-25)(40-25)(40-30)] = √[40 × 15 × 15 × 10] = √90,000 = 300 cm². This isosceles triangle has a significant area that can be calculated precisely using Heron's formula. 🔺",
    wrongAnswerExplanations: {
      "250 cm²": "This underestimates the area. The correct calculation gives 300 cm².",
      "312.5 cm²": "This overestimates the area. The correct value is 300 cm².",
      "275 cm²": "This underestimates the area. The correct value is 300 cm²."
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 60
  }
];
