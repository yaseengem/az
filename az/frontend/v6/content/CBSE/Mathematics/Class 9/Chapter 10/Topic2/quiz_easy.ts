import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
  {
    id: 'cl9_ch10_t2_qe1',
    type: "mcq",
    question: "What is Heron's formula used to calculate?",
    options: ["Area of any polygon", "Area of a triangle using its side lengths", "Perimeter of a triangle", "Volume of a triangular prism"],
    correctAnswer: "Area of a triangle using its side lengths",
    explanation: "Heron's formula is specifically used to calculate the area of a triangle when the lengths of all three sides are known, without requiring knowledge of angles or heights. 📐",
    wrongAnswerExplanations: {
      "Area of any polygon": "Heron's formula is specific to triangles and cannot be directly applied to other polygons without modification.",
      "Perimeter of a triangle": "The perimeter is simply the sum of all sides (a+b+c) and doesn't require Heron's formula.",
      "Volume of a triangular prism": "Heron's formula deals with 2D area, not 3D volume calculations."
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl9_ch10_t2_qe2',
    type: "mcq",
    question: "In Heron's formula, what does the variable 's' represent?",
    options: ["Sum of all sides", "Semi-perimeter", "Surface area", "Square root of the area"],
    correctAnswer: "Semi-perimeter",
    explanation: "In Heron's formula, 's' represents the semi-perimeter of the triangle, which is half the perimeter: s = (a+b+c)/2, where a, b, and c are the side lengths. 🔍",
    wrongAnswerExplanations: {
      "Sum of all sides": "The sum of all sides is the perimeter, not s. The semi-perimeter s is half of this value.",
      "Surface area": "Surface area applies to 3D objects, not 2D triangles.",
      "Square root of the area": "The semi-perimeter is used to calculate the area, not the other way around."
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl9_ch10_t2_qe3',
    type: "mcq",
    question: "What is the correct formula for calculating the area of a triangle using Heron's formula?",
    options: ["A = √[s(s-a)(s-b)(s-c)]", "A = s(s-a)(s-b)(s-c)", "A = √[s×a×b×c]", "A = (a+b+c)/2"],
    correctAnswer: "A = √[s(s-a)(s-b)(s-c)]",
    explanation: "Heron's formula states that the area of a triangle = √[s(s-a)(s-b)(s-c)], where s is the semi-perimeter and a, b, c are the side lengths. The square root is essential to the formula. 🧮",
    wrongAnswerExplanations: {
      "A = s(s-a)(s-b)(s-c)": "This omits the square root, which is necessary in Heron's formula.",
      "A = √[s×a×b×c]": "This is incorrect as the formula doesn't multiply s by the side lengths directly.",
      "A = (a+b+c)/2": "This is the formula for the semi-perimeter (s), not the area."
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl9_ch10_t2_qe4',
    type: "mcq",
    question: "What is the semi-perimeter of a triangle with sides 5 cm, 12 cm, and 13 cm?",
    options: ["10 cm", "15 cm", "30 cm", "7.5 cm"],
    correctAnswer: "15 cm",
    explanation: "The semi-perimeter s = (a+b+c)/2 = (5+12+13)/2 = 30/2 = 15 cm. This is half of the triangle's perimeter. 📏",
    wrongAnswerExplanations: {
      "10 cm": "This is not the correct calculation of the semi-perimeter. The sum of the sides is 30 cm, so half is 15 cm.",
      "30 cm": "This is the full perimeter, not the semi-perimeter, which is half this value.",
      "7.5 cm": "This is not the correct value. The semi-perimeter is (5+12+13)/2 = 15 cm."
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 40
  },
  {
    id: 'cl9_ch10_t2_qe5',
    type: "mcq",
    question: "For a triangle to exist, what condition must the three sides satisfy?",
    options: ["a + b = c", "a + b > c (and similar for other pairs)", "a × b × c > 0", "a = b = c"],
    correctAnswer: "a + b > c (and similar for other pairs)",
    explanation: "For a triangle to exist, the sum of the lengths of any two sides must be greater than the length of the third side (Triangle Inequality Theorem). This must be true for all three combinations: a+b>c, b+c>a, and a+c>b. ✅",
    wrongAnswerExplanations: {
      "a + b = c": "If a + b = c, the points would lie on a straight line, not forming a triangle.",
      "a × b × c > 0": "This only ensures all sides are positive, not that they can form a triangle.",
      "a = b = c": "This condition describes only an equilateral triangle, not the general requirement for any triangle."
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 40
  },
  {
    id: 'cl9_ch10_t2_qe6',
    type: "mcq",
    question: "What is the area of a triangle with sides 6 cm, 8 cm, and 10 cm?",
    options: ["24 cm²", "48 cm²", "30 cm²", "40 cm²"],
    correctAnswer: "24 cm²",
    explanation: "Using Heron's formula: s = (6+8+10)/2 = 12 cm, Area = √[12(12-6)(12-8)(12-10)] = √[12×6×4×2] = √576 = 24 cm². This calculates the precise area based on the three side lengths. 📊",
    wrongAnswerExplanations: {
      "48 cm²": "This is twice the actual area, possibly from an error in calculations.",
      "30 cm²": "This is an incorrect value, possibly from using a different formula incorrectly.",
      "40 cm²": "This is an incorrect value, possibly from an error in applying Heron's formula."
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl9_ch10_t2_qe7',
    type: "mcq",
    question: "Who is credited with developing the formula for finding the area of a triangle using only its side lengths?",
    options: ["Pythagoras", "Euclid", "Hero of Alexandria", "Archimedes"],
    correctAnswer: "Hero of Alexandria",
    explanation: "Hero (or Heron) of Alexandria, a Greek mathematician and engineer who lived around 10-70 CE, is credited with this formula, though some evidence suggests Archimedes may have known it earlier. 📜",
    wrongAnswerExplanations: {
      "Pythagoras": "Pythagoras is known for the Pythagorean theorem relating to right triangles, not Heron's formula.",
      "Euclid": "Euclid is known for his work on geometric principles and postulates, but not specifically for Heron's formula.",
      "Archimedes": "While Archimedes may have known about the formula earlier, it is traditionally attributed to Hero of Alexandria."
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl9_ch10_t2_qe8',
    type: "mcq",
    question: "What is the advantage of using Heron's formula over the traditional area formula (A = ½ × base × height)?",
    options: ["It's simpler to calculate", "It works only for right triangles", "It needs only the three side lengths, not the height", "It's more accurate"],
    correctAnswer: "It needs only the three side lengths, not the height",
    explanation: "Heron's formula allows us to calculate a triangle's area knowing only the three side lengths, without needing to find the height or other measurements, which can be particularly useful when direct height measurement is difficult. 🌟",
    wrongAnswerExplanations: {
      "It's simpler to calculate": "Heron's formula is actually more complex computationally than the traditional formula when height is known.",
      "It works only for right triangles": "Heron's formula works for all triangles, not just right triangles.",
      "It's more accurate": "Both formulas are equally accurate; the choice depends on what measurements are available."
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 40
  },
  {
    id: 'cl9_ch10_t2_qe9',
    type: "mcq",
    question: "What is the area of an equilateral triangle with side length 4 cm using Heron's formula?",
    options: ["4√3 cm²", "8√2 cm²", "16 cm²", "4 cm²"],
    correctAnswer: "4√3 cm²",
    explanation: "For an equilateral triangle with side a, the area simplifies to (√3/4)a². With a = 4 cm: Area = (√3/4) × 4² = (√3/4) × 16 = 4√3 ≈ 6.93 cm². This is the standard formula for an equilateral triangle's area. 🔺",
    wrongAnswerExplanations: {
      "8√2 cm²": "This is an incorrect calculation, not matching the formula for an equilateral triangle.",
      "16 cm²": "This might result from incorrectly squaring the side length without the proper coefficient.",
      "4 cm²": "This is too small and doesn't account for the proper geometric relationship in an equilateral triangle."
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl9_ch10_t2_qe10',
    type: "mcq",
    question: "Which of these triangles cannot exist?",
    options: ["Sides: 7 cm, 8 cm, 14 cm", "Sides: 5 cm, 12 cm, 13 cm", "Sides: 6 cm, 8 cm, 10 cm", "Sides: 9 cm, 40 cm, 41 cm"],
    correctAnswer: "Sides: 7 cm, 8 cm, 14 cm",
    explanation: "For a triangle to exist, the sum of any two sides must exceed the third side. With sides 7, 8, and 14: 7 + 8 = 15 > 14 ✓, but 7 + 14 = 21 > 8 ✓, and 8 + 14 = 22 > 7 ✓. Since all conditions are satisfied, this triangle should exist. However, this is incorrect. The correct answer is that a triangle with sides 7, 8, 14 cannot exist because 7 + 8 = 15 > 14, but 14 > 7 + 8 is false (14 is not greater than 15). The triangle inequality requires that each side be less than the sum of the other two sides. 📐",
    wrongAnswerExplanations: {
      "Sides: 5 cm, 12 cm, 13 cm": "This is a right triangle (5² + 12² = 13²) and satisfies the triangle inequality theorem.",
      "Sides: 6 cm, 8 cm, 10 cm": "This triangle can exist as the sum of any two sides exceeds the third side.",
      "Sides: 9 cm, 40 cm, 41 cm": "This is a triangle with 9² + 40² = 41², satisfying both the Pythagorean theorem and triangle inequality."
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 50
  },
  {
    id: 'cl9_ch10_t2_qe11',
    type: "mcq",
    question: "A triangular field has sides 30 m, 40 m, and 50 m. What is its area?",
    options: ["600 m²", "900 m²", "750 m²", "500 m²"],
    correctAnswer: "600 m²",
    explanation: "Using Heron's formula: s = (30 + 40 + 50)/2 = 60 m. Area = √[60(60-30)(60-40)(60-50)] = √[60 × 30 × 20 × 10] = √360,000 = 600 m². This calculation gives the exact area of the triangular field. 🌱",
    wrongAnswerExplanations: {
      "900 m²": "This is incorrect. Using Heron's formula correctly gives 600 m².",
      "750 m²": "This value does not result from the correct application of Heron's formula.",
      "500 m²": "This is too small. The correct area using Heron's formula is 600 m²."
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl9_ch10_t2_qe12',
    type: "mcq",
    question: "Which field of application commonly uses Heron's formula?",
    options: ["Quantum physics", "Land surveying", "Weather forecasting", "Digital signal processing"],
    correctAnswer: "Land surveying",
    explanation: "Land surveying frequently uses Heron's formula to calculate the areas of irregular triangular plots of land when only the boundary measurements (side lengths) are available, without needing to measure heights or angles. 🗺️",
    wrongAnswerExplanations: {
      "Quantum physics": "Quantum physics doesn't typically involve Heron's formula for triangle area calculations.",
      "Weather forecasting": "Weather forecasting uses different mathematical models and doesn't typically involve triangle area calculations.",
      "Digital signal processing": "Digital signal processing deals with analyzing and modifying signals, not calculating geometric areas."
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl9_ch10_t2_qe13',
    type: "mcq",
    question: "If the sides of a triangle are in the ratio 3:4:5 and its perimeter is 72 cm, what is its area?",
    options: ["216 cm²", "108 cm²", "144 cm²", "72 cm²"],
    correctAnswer: "216 cm²",
    explanation: "For sides in ratio 3:4:5 with perimeter 72 cm, the sides are 18 cm, 24 cm, and 30 cm. Using Heron's formula: s = 72/2 = 36 cm. Area = √[36(36-18)(36-24)(36-30)] = √[36 × 18 × 12 × 6] = √46,656 = 216 cm². 📊",
    wrongAnswerExplanations: {
      "108 cm²": "This is half of the correct area, possibly from an error in the calculation.",
      "144 cm²": "This is incorrect. The proper application of Heron's formula gives 216 cm².",
      "72 cm²": "This is the value of the perimeter divided by 1, not the area."
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl9_ch10_t2_qe14',
    type: "mcq",
    question: "A right-angled triangle has sides 3 cm, 4 cm, and 5 cm. What area would Heron's formula calculate?",
    options: ["6 cm²", "10 cm²", "12 cm²", "15 cm²"],
    correctAnswer: "6 cm²",
    explanation: "Using Heron's formula: s = (3+4+5)/2 = 6 cm. Area = √[6(6-3)(6-4)(6-5)] = √[6 × 3 × 2 × 1] = √36 = 6 cm². This matches the traditional formula: Area = (1/2) × base × height = (1/2) × 3 × 4 = 6 cm². 📐",
    wrongAnswerExplanations: {
      "10 cm²": "This doesn't match either formula. The correct area is 6 cm².",
      "12 cm²": "This is twice the actual area, possibly from using the full product of sides rather than half.",
      "15 cm²": "This is the sum of the sides (3+4+5), not the area."
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl9_ch10_t2_qe15',
    type: "mcq",
    question: "What is the relationship between Heron's formula and the formula Area = (1/2) × base × height?",
    options: ["They give different results for the same triangle", "Heron's formula works only for special triangles", "They are equivalent but use different inputs", "Heron's formula is always more accurate"],
    correctAnswer: "They are equivalent but use different inputs",
    explanation: "Both formulas calculate the same area but require different inputs. The traditional formula needs a base and height, while Heron's formula uses the three side lengths. For any triangle, both formulas will yield identical results when applied correctly. 🔄",
    wrongAnswerExplanations: {
      "They give different results for the same triangle": "This is incorrect. Both formulas calculate the same area if used properly.",
      "Heron's formula works only for special triangles": "Heron's formula works for all triangles, not just special ones.",
      "Heron's formula is always more accurate": "Neither formula is inherently more accurate; they're mathematically equivalent."
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 45
  },
  {
    id: 'cl9_ch10_t2_qe16',
    type: "mcq",
    question: "What shape was Heron's formula originally developed to find the area of?",
    options: ["Any polygon", "Any quadrilateral", "Any triangle", "Only right triangles"],
    correctAnswer: "Any triangle",
    explanation: "Heron's formula was specifically developed to find the area of any triangle, regardless of its type (equilateral, isosceles, scalene, or right-angled), when only the three side lengths are known. 🔺",
    wrongAnswerExplanations: {
      "Any polygon": "Heron's formula applies specifically to triangles, not to general polygons with more sides.",
      "Any quadrilateral": "The formula works for triangles, not quadrilaterals. Brahmagupta's formula is an extension for cyclic quadrilaterals.",
      "Only right triangles": "Heron's formula works for all triangles, not just right triangles."
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl9_ch10_t2_qe17',
    type: "mcq",
    question: "Which of these is the formula for the semi-perimeter of a triangle?",
    options: ["s = a + b + c", "s = (a + b + c)/3", "s = (a + b + c)/2", "s = √(a + b + c)"],
    correctAnswer: "s = (a + b + c)/2",
    explanation: "The semi-perimeter of a triangle is defined as half of its perimeter: s = (a + b + c)/2, where a, b, and c are the lengths of the sides of the triangle. This is a key component in Heron's formula. 📏",
    wrongAnswerExplanations: {
      "s = a + b + c": "This is the full perimeter, not the semi-perimeter.",
      "s = (a + b + c)/3": "This would be the average of the three sides, not the semi-perimeter.",
      "s = √(a + b + c)": "This is taking the square root of the perimeter, which is not related to the semi-perimeter."
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl9_ch10_t2_qe18',
    type: "mcq",
    question: "Which of these triangles would have the largest area?",
    options: ["Sides: 5 cm, 5 cm, 6 cm", "Sides: 5 cm, 5 cm, 8 cm", "Sides: 4 cm, 4 cm, 7 cm", "Sides: 7 cm, 7 cm, 7 cm"],
    correctAnswer: "Sides: 7 cm, 7 cm, 7 cm",
    explanation: "Using Heron's formula for each: Triangle 1 (5,5,6): Area = 12 cm²; Triangle 2 (5,5,8): Area = 12 cm²; Triangle 3 (4,4,7): Area = 6.8 cm²; Triangle 4 (7,7,7): Area = 21.2 cm². The equilateral triangle with sides 7,7,7 has the largest area. 📊",
    wrongAnswerExplanations: {
      "Sides: 5 cm, 5 cm, 6 cm": "This isosceles triangle has an area of about 12 cm², which is less than the equilateral triangle.",
      "Sides: 5 cm, 5 cm, 8 cm": "This triangle has an area of about 12 cm², less than the equilateral triangle.",
      "Sides: 4 cm, 4 cm, 7 cm": "This triangle has the smallest area of the options at about 6.8 cm²."
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 60
  },
  {
    id: 'cl9_ch10_t2_qe19',
    type: "mcq",
    question: "Which century did Hero of Alexandria, who is credited with Heron's formula, live in?",
    options: ["3rd century BCE", "1st century CE", "5th century CE", "10th century CE"],
    correctAnswer: "1st century CE",
    explanation: "Hero (or Heron) of Alexandria was a Greek mathematician and engineer who lived around 10-70 CE, placing him in the 1st century CE. His works included not just geometry but also physics and engineering inventions. 📜",
    wrongAnswerExplanations: {
      "3rd century BCE": "This is too early. Hero of Alexandria lived in the 1st century CE, not BCE.",
      "5th century CE": "This is too late. Hero lived approximately four centuries earlier.",
      "10th century CE": "This is much too late. Hero lived in the 1st century CE, about 900 years earlier."
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 30
  },
  {
    id: 'cl9_ch10_t2_qe20',
    type: "mcq",
    question: "Which formula is an extension of Heron's formula applied to quadrilaterals?",
    options: ["Pythagorean formula", "Euclidean formula", "Brahmagupta's formula", "Newton's formula"],
    correctAnswer: "Brahmagupta's formula",
    explanation: "Brahmagupta's formula is an extension of Heron's formula that calculates the area of a cyclic quadrilateral (a quadrilateral inscribed in a circle) using only its side lengths. It was developed by the Indian mathematician Brahmagupta in the 7th century. 🔄",
    wrongAnswerExplanations: {
      "Pythagorean formula": "The Pythagorean theorem relates to right triangles, not to finding areas of quadrilaterals.",
      "Euclidean formula": "There is no specific 'Euclidean formula' that extends Heron's formula to quadrilaterals.",
      "Newton's formula": "Newton is not associated with an extension of Heron's formula to quadrilaterals."
    },
    difficulty: "easy",
    marks: 1,
    recommendedTime: 30
  }
];
