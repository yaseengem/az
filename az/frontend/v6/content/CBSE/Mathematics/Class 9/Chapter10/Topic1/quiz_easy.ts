import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
  {
    id: 'cl9_ch10_t1_qe1',
    question: "Heron's formula is used to calculate the area of a triangle when we know the:",
    options: [
      "Lengths of all three sides",
      "Base and height of the triangle",
      "Coordinates of the three vertices",
      "One side and two angles"
    ],
    correctOptionIndex: 0,
    explanation: "Heron's formula allows us to calculate the area of any triangle when only the lengths of all three sides are known, without needing to know angles or heights."
  },
  {
    id: 'cl9_ch10_t1_qe2',
    question: "In Heron's formula, what does 's' represent?",
    options: [
      "Sum of all sides",
      "Semi-perimeter of the triangle",
      "Square of the area",
      "Shortest side of the triangle"
    ],
    correctOptionIndex: 1,
    explanation: "In Heron's formula, 's' represents the semi-perimeter of the triangle, which is half the sum of all three sides: s = (a + b + c) ÷ 2."
  },
  {
    id: 'cl9_ch10_t1_qe3',
    question: "If a triangle has sides of lengths 5 cm, 12 cm, and 13 cm, what is its semi-perimeter?",
    options: [
      "30 cm",
      "15 cm",
      "17 cm",
      "10 cm"
    ],
    correctOptionIndex: 1,
    explanation: "Semi-perimeter s = (a + b + c) ÷ 2 = (5 + 12 + 13) ÷ 2 = 30 ÷ 2 = 15 cm."
  },
  {
    id: 'cl9_ch10_t1_qe4',
    question: "Which of the following correctly represents Heron's formula for the area of a triangle with sides a, b, and c?",
    options: [
      "Area = √(a + b + c)",
      "Area = √[s(s-a)(s-b)(s-c)]",
      "Area = s(s-a)(s-b)(s-c)",
      "Area = (a × b × c) ÷ 2"
    ],
    correctOptionIndex: 1,
    explanation: "Heron's formula states that the area of a triangle = √[s(s-a)(s-b)(s-c)], where s is the semi-perimeter of the triangle."
  },
  {
    id: 'cl9_ch10_t1_qe5',
    question: "The area of an equilateral triangle with side length 'a' using Heron's formula simplifies to:",
    options: [
      "(√3/4)a²",
      "a²/2",
      "√3 × a",
      "a²/4"
    ],
    correctOptionIndex: 0,
    explanation: "For an equilateral triangle with side 'a', Heron's formula simplifies to Area = (√3/4)a², which is the standard formula for an equilateral triangle's area."
  },
  {
    id: 'cl9_ch10_t1_qe6',
    question: "A triangle has sides of lengths 6 cm, 8 cm, and 10 cm. What is its area using Heron's formula?",
    options: [
      "48 cm²",
      "24 cm²",
      "30 cm²",
      "40 cm²"
    ],
    correctOptionIndex: 1,
    explanation: "Semi-perimeter s = (6 + 8 + 10) ÷ 2 = 12 cm. Area = √[12(12-6)(12-8)(12-10)] = √[12 × 6 × 4 × 2] = √576 = 24 cm²."
  },
  {
    id: 'cl9_ch10_t1_qe7',
    question: "Who is credited with discovering the formula for finding the area of a triangle using only its side lengths?",
    options: [
      "Pythagoras",
      "Euclid",
      "Hero of Alexandria",
      "Archimedes"
    ],
    correctOptionIndex: 2,
    explanation: "Hero (or Heron) of Alexandria, a Greek mathematician and engineer who lived around 10-70 CE, is credited with this formula, though Archimedes may have known it earlier."
  },
  {
    id: 'cl9_ch10_t1_qe8',
    question: "For a triangle to exist using Heron's formula, which condition must be satisfied?",
    options: [
      "a + b = c",
      "a + b > c (and similarly for other pairs)",
      "a + b < c",
      "a = b = c"
    ],
    correctOptionIndex: 1,
    explanation: "For a triangle to exist, the sum of the lengths of any two sides must be greater than the third side (Triangle Inequality Theorem)."
  },
  {
    id: 'cl9_ch10_t1_qe9',
    question: "What is the area of a triangle with sides 9 cm, 10 cm, and 11 cm?",
    options: [
      "42.43 cm²",
      "45 cm²",
      "44 cm²",
      "43.56 cm²"
    ],
    correctOptionIndex: 3,
    explanation: "Semi-perimeter s = (9 + 10 + 11) ÷ 2 = 15 cm. Area = √[15(15-9)(15-10)(15-11)] = √[15 × 6 × 5 × 4] = √1800 = 43.56 cm²."
  },
  {
    id: 'cl9_ch10_t1_qe10',
    question: "Which of these triangles will have the largest area?",
    options: [
      "Sides: 5 cm, 5 cm, 8 cm",
      "Sides: 6 cm, 7 cm, 8 cm",
      "Sides: 6 cm, 6 cm, 6 cm",
      "Sides: 4 cm, 4 cm, 7 cm"
    ],
    correctOptionIndex: 1,
    explanation: "Calculating with Heron's formula: Triangle 1: 12 cm², Triangle 2: 20.33 cm², Triangle 3: 15.59 cm², Triangle 4: 6.78 cm². The triangle with sides 6, 7, 8 has the largest area."
  },
  {
    id: 'cl9_ch10_t1_qe11',
    question: "A triangular field has sides 30 m, 40 m, and 50 m. What is its area?",
    options: [
      "600 m²",
      "6000 m²",
      "60 m²",
      "60000 m²"
    ],
    correctOptionIndex: 0,
    explanation: "Semi-perimeter s = (30 + 40 + 50) ÷ 2 = 60 m. Area = √[60(60-30)(60-40)(60-50)] = √[60 × 30 × 20 × 10] = √360000 = 600 m²."
  },
  {
    id: 'cl9_ch10_t1_qe12',
    question: "If the perimeter of an equilateral triangle is 30 cm, what is its area using Heron's formula?",
    options: [
      "43.3 cm²",
      "25 cm²",
      "50 cm²",
      "30 cm²"
    ],
    correctOptionIndex: 0,
    explanation: "Each side = 30 ÷ 3 = 10 cm. s = (10 + 10 + 10) ÷ 2 = 15 cm. Area = √[15(15-10)³] = √[15 × 125] = √1875 = 43.3 cm²."
  },
  {
    id: 'cl9_ch10_t1_qe13',
    question: "What is the main advantage of using Heron's formula?",
    options: [
      "It works only for right triangles",
      "It requires knowing the coordinates of vertices",
      "It requires only the side lengths, not heights or angles",
      "It is simpler than the standard area formula"
    ],
    correctOptionIndex: 2,
    explanation: "The main advantage of Heron's formula is that it allows calculation of a triangle's area using only the lengths of its three sides, without needing to know heights or angles."
  },
  {
    id: 'cl9_ch10_t1_qe14',
    question: "A triangular piece of land has sides 120 m, 160 m, and 200 m. What is its area?",
    options: [
      "8000 m²",
      "9600 m²",
      "12000 m²",
      "10800 m²"
    ],
    correctOptionIndex: 1,
    explanation: "Semi-perimeter s = (120 + 160 + 200) ÷ 2 = 240 m. Area = √[240(240-120)(240-160)(240-200)] = √[240 × 120 × 80 × 40] = √92,160,000 = 9600 m²."
  },
  {
    id: 'cl9_ch10_t1_qe15',
    question: "Which of these is NOT a practical application of Heron's formula?",
    options: [
      "Land surveying",
      "Architecture",
      "Calculating molecular weights in chemistry",
      "Computer graphics"
    ],
    correctOptionIndex: 2,
    explanation: "While Heron's formula is used in land surveying, architecture, and computer graphics to calculate areas, it has no direct application in calculating molecular weights in chemistry."
  },
  {
    id: 'cl9_ch10_t1_qe16',
    question: "If a triangle has sides in the ratio 3:4:5 and a perimeter of 144 cm, what is its area?",
    options: [
      "864 cm²",
      "720 cm²",
      "540 cm²",
      "756 cm²"
    ],
    correctOptionIndex: 0,
    explanation: "If sides are in ratio 3:4:5, with perimeter 144 cm, then sides = 36, 48, 60 cm. s = 72 cm. Area = √[72(72-36)(72-48)(72-60)] = √[72 × 36 × 24 × 12] = √864 × 864 = 864 cm²."
  },
  {
    id: 'cl9_ch10_t1_qe17',
    question: "The area of a triangle with sides 13 cm, 14 cm, and 15 cm is closest to:",
    options: [
      "84 cm²",
      "91 cm²",
      "87 cm²",
      "96 cm²"
    ],
    correctOptionIndex: 1,
    explanation: "Semi-perimeter s = (13 + 14 + 15) ÷ 2 = 21 cm. Area = √[21(21-13)(21-14)(21-15)] = √[21 × 8 × 7 × 6] = √7056 ≈ 91 cm²."
  },
  {
    id: 'cl9_ch10_t1_qe18',
    question: "For which of these sets of lengths is it impossible to form a triangle?",
    options: [
      "6 cm, 7 cm, 8 cm",
      "5 cm, 12 cm, 13 cm",
      "2 cm, 3 cm, 6 cm",
      "9 cm, 12 cm, 15 cm"
    ],
    correctOptionIndex: 2,
    explanation: "For a triangle to exist, the sum of any two sides must be greater than the third side. In the set 2, 3, 6: 2 + 3 = 5, which is less than 6, so a triangle cannot be formed."
  },
  {
    id: 'cl9_ch10_t1_qe19',
    question: "A right-angled triangle has sides 5 cm, 12 cm, and 13 cm. Calculate its area using Heron's formula.",
    options: [
      "30 cm²",
      "26 cm²",
      "32.5 cm²",
      "35 cm²"
    ],
    correctOptionIndex: 0,
    explanation: "Semi-perimeter s = (5 + 12 + 13) ÷ 2 = 15 cm. Area = √[15(15-5)(15-12)(15-13)] = √[15 × 10 × 3 × 2] = √900 = 30 cm², which matches ½ × base × height = ½ × 12 × 5 = 30 cm²."
  },
  {
    id: 'cl9_ch10_t1_qe20',
    question: "If a circle is inscribed in a triangle with sides a, b, and c, its radius r can be found using the formula:",
    options: [
      "r = Area of triangle ÷ s",
      "r = Area of triangle ÷ (a + b + c)",
      "r = s ÷ Area of triangle",
      "r = (a + b + c) ÷ Area of triangle"
    ],
    correctOptionIndex: 0,
    explanation: "The radius of an inscribed circle in a triangle is related to the area by the formula r = Area ÷ s, where s is the semi-perimeter. This shows how Heron's formula connects to other geometric concepts."
  }
];
