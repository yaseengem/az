import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl7_ch6_t1_qm1',
        type: "mcq",
        question: "If a triangle has two angles measuring 70° each, what type of triangle is it?",
        options: ["Scalene", "Isosceles", "Equilateral", "Right-angled"],
        correctAnswer: "Isosceles",
        explanation: "Equal angles are opposite equal sides, making it an isosceles triangle. The third angle is 40° (180° - 70° - 70°). 🔺",
        wrongAnswerExplanations: {
            "Scalene": "Scalene triangles have all angles different.",
            "Equilateral": "Equilateral triangles have all angles equal to 60°.",
            "Right-angled": "This is not a right-angled triangle as no angle is 90°."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch6_t1_qm2',
        type: "mcq",
        question: "A triangle has sides in the ratio 2:2:3. What type of triangle is it?",
        options: ["Scalene", "Isosceles", "Equilateral", "Right-angled"],
        correctAnswer: "Isosceles",
        explanation: "The ratio shows two equal sides (2:2) and one different side (3), making it an isosceles triangle. 🔺",
        wrongAnswerExplanations: {
            "Scalene": "Scalene triangles have all sides different.",
            "Equilateral": "Equilateral triangles have all sides equal (1:1:1 ratio).",
            "Right-angled": "This is not necessarily a right-angled triangle."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch6_t1_qm3',
        type: "mcq",
        question: "If the perimeter of an equilateral triangle is 24cm, what is the length of each side?",
        options: ["6cm", "8cm", "12cm", "16cm"],
        correctAnswer: "8cm",
        explanation: "In an equilateral triangle, all sides are equal. So, side length = perimeter ÷ 3 = 24cm ÷ 3 = 8cm. 📏",
        wrongAnswerExplanations: {
            "6cm": "This would give a perimeter of 18cm.",
            "12cm": "This would give a perimeter of 36cm.",
            "16cm": "This would give a perimeter of 48cm."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch6_t1_qm4',
        type: "mcq",
        question: "A triangle has angles measuring 45°, 45°, and 90°. What type of triangle is it?",
        options: ["Scalene", "Isosceles", "Equilateral", "Right-angled"],
        correctAnswer: "Isosceles",
        explanation: "It's an isosceles right-angled triangle because it has two equal angles (45°) and one right angle (90°). 🔺",
        wrongAnswerExplanations: {
            "Scalene": "Scalene triangles have all angles different.",
            "Equilateral": "Equilateral triangles have all angles equal to 60°.",
            "Right-angled": "While it is right-angled, it's more specifically isosceles."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch6_t1_qm5',
        type: "mcq",
        question: "If a triangle has sides measuring 5cm, 12cm, and 13cm, what type of triangle is it?",
        options: ["Scalene", "Isosceles", "Equilateral", "Right-angled"],
        correctAnswer: "Scalene",
        explanation: "All sides are different lengths, making it a scalene triangle. It's also a right-angled triangle (5² + 12² = 13²). 🔺",
        wrongAnswerExplanations: {
            "Isosceles": "Isosceles triangles have two equal sides.",
            "Equilateral": "Equilateral triangles have all sides equal.",
            "Right-angled": "While it is right-angled, it's more specifically scalene."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch6_t1_qm6',
        type: "mcq",
        question: "What is the measure of the third angle in an isosceles triangle if one of the equal angles is 50°?",
        options: ["50°", "60°", "80°", "90°"],
        correctAnswer: "80°",
        explanation: "The third angle = 180° - 50° - 50° = 80°. In an isosceles triangle, the angles opposite equal sides are equal. 📐",
        wrongAnswerExplanations: {
            "50°": "This would make all angles equal, which would be an equilateral triangle.",
            "60°": "This would make the sum of angles 160°, which is incorrect.",
            "90°": "This would make the sum of angles 190°, which is incorrect."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch6_t1_qm7',
        type: "mcq",
        question: "A triangle has sides measuring 7cm, 7cm, and 7√2 cm. What type of triangle is it?",
        options: ["Scalene", "Isosceles", "Equilateral", "Right-angled"],
        correctAnswer: "Isosceles",
        explanation: "Two sides are equal (7cm), making it an isosceles triangle. It's also a right-angled triangle (7² + 7² = (7√2)²). 🔺",
        wrongAnswerExplanations: {
            "Scalene": "Scalene triangles have all sides different.",
            "Equilateral": "Equilateral triangles have all sides equal.",
            "Right-angled": "While it is right-angled, it's more specifically isosceles."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch6_t1_qm8',
        type: "mcq",
        question: "If the perimeter of an isosceles triangle is 20cm and the equal sides are 7cm each, what is the length of the third side?",
        options: ["4cm", "6cm", "8cm", "10cm"],
        correctAnswer: "6cm",
        explanation: "Third side = perimeter - (2 × equal side) = 20cm - (2 × 7cm) = 6cm. 📏",
        wrongAnswerExplanations: {
            "4cm": "This would make the perimeter 18cm.",
            "8cm": "This would make the perimeter 22cm.",
            "10cm": "This would make the perimeter 24cm."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch6_t1_qm9',
        type: "mcq",
        question: "A triangle has angles in the ratio 1:2:3. What type of triangle is it?",
        options: ["Scalene", "Isosceles", "Equilateral", "Right-angled"],
        correctAnswer: "Scalene",
        explanation: "The angles are 30°, 60°, and 90° (1:2:3 ratio), making it a scalene right-angled triangle. 🔺",
        wrongAnswerExplanations: {
            "Isosceles": "Isosceles triangles have two equal angles.",
            "Equilateral": "Equilateral triangles have all angles equal.",
            "Right-angled": "While it is right-angled, it's more specifically scalene."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch6_t1_qm10',
        type: "mcq",
        question: "If a triangle has sides measuring 8cm, 15cm, and 17cm, what type of triangle is it?",
        options: ["Scalene", "Isosceles", "Equilateral", "Right-angled"],
        correctAnswer: "Scalene",
        explanation: "All sides are different lengths, making it a scalene triangle. It's also a right-angled triangle (8² + 15² = 17²). 🔺",
        wrongAnswerExplanations: {
            "Isosceles": "Isosceles triangles have two equal sides.",
            "Equilateral": "Equilateral triangles have all sides equal.",
            "Right-angled": "While it is right-angled, it's more specifically scalene."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch6_t1_qm11',
        type: "mcq",
        question: "What is the measure of each angle in an isosceles triangle if the unequal angle is 100°?",
        options: ["30°", "40°", "50°", "60°"],
        correctAnswer: "40°",
        explanation: "The equal angles = (180° - 100°) ÷ 2 = 40° each. In an isosceles triangle, the angles opposite equal sides are equal. 📐",
        wrongAnswerExplanations: {
            "30°": "This would make the sum of angles 160°, which is incorrect.",
            "50°": "This would make the sum of angles 200°, which is incorrect.",
            "60°": "This would make the sum of angles 220°, which is incorrect."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch6_t1_qm12',
        type: "mcq",
        question: "A triangle has sides measuring 9cm, 12cm, and 15cm. What type of triangle is it?",
        options: ["Scalene", "Isosceles", "Equilateral", "Right-angled"],
        correctAnswer: "Scalene",
        explanation: "All sides are different lengths, making it a scalene triangle. It's also a right-angled triangle (9² + 12² = 15²). 🔺",
        wrongAnswerExplanations: {
            "Isosceles": "Isosceles triangles have two equal sides.",
            "Equilateral": "Equilateral triangles have all sides equal.",
            "Right-angled": "While it is right-angled, it's more specifically scalene."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch6_t1_qm13',
        type: "mcq",
        question: "If the perimeter of a scalene triangle is 24cm and two sides are 7cm and 8cm, what is the length of the third side?",
        options: ["6cm", "9cm", "10cm", "12cm"],
        correctAnswer: "9cm",
        explanation: "Third side = perimeter - (sum of other two sides) = 24cm - (7cm + 8cm) = 9cm. 📏",
        wrongAnswerExplanations: {
            "6cm": "This would make the perimeter 21cm.",
            "10cm": "This would make the perimeter 25cm.",
            "12cm": "This would make the perimeter 27cm."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch6_t1_qm14',
        type: "mcq",
        question: "A triangle has angles measuring 30°, 60°, and 90°. What type of triangle is it?",
        options: ["Scalene", "Isosceles", "Equilateral", "Right-angled"],
        correctAnswer: "Scalene",
        explanation: "All angles are different, making it a scalene triangle. It's also a right-angled triangle (90°). 🔺",
        wrongAnswerExplanations: {
            "Isosceles": "Isosceles triangles have two equal angles.",
            "Equilateral": "Equilateral triangles have all angles equal to 60°.",
            "Right-angled": "While it is right-angled, it's more specifically scalene."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch6_t1_qm15',
        type: "mcq",
        question: "If a triangle has sides measuring 6cm, 8cm, and 10cm, what type of triangle is it?",
        options: ["Scalene", "Isosceles", "Equilateral", "Right-angled"],
        correctAnswer: "Scalene",
        explanation: "All sides are different lengths, making it a scalene triangle. It's also a right-angled triangle (6² + 8² = 10²). 🔺",
        wrongAnswerExplanations: {
            "Isosceles": "Isosceles triangles have two equal sides.",
            "Equilateral": "Equilateral triangles have all sides equal.",
            "Right-angled": "While it is right-angled, it's more specifically scalene."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch6_t1_qm16',
        type: "mcq",
        question: "What is the measure of each angle in an isosceles triangle if the equal angles are 65° each?",
        options: ["50°", "60°", "70°", "80°"],
        correctAnswer: "50°",
        explanation: "The third angle = 180° - 65° - 65° = 50°. In an isosceles triangle, the angles opposite equal sides are equal. 📐",
        wrongAnswerExplanations: {
            "60°": "This would make the sum of angles 190°, which is incorrect.",
            "70°": "This would make the sum of angles 200°, which is incorrect.",
            "80°": "This would make the sum of angles 210°, which is incorrect."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch6_t1_qm17',
        type: "mcq",
        question: "A triangle has sides measuring 5cm, 5cm, and 5√2 cm. What type of triangle is it?",
        options: ["Scalene", "Isosceles", "Equilateral", "Right-angled"],
        correctAnswer: "Isosceles",
        explanation: "Two sides are equal (5cm), making it an isosceles triangle. It's also a right-angled triangle (5² + 5² = (5√2)²). 🔺",
        wrongAnswerExplanations: {
            "Scalene": "Scalene triangles have all sides different.",
            "Equilateral": "Equilateral triangles have all sides equal.",
            "Right-angled": "While it is right-angled, it's more specifically isosceles."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch6_t1_qm18',
        type: "mcq",
        question: "If the perimeter of an equilateral triangle is 30cm, what is the length of each side?",
        options: ["8cm", "10cm", "12cm", "15cm"],
        correctAnswer: "10cm",
        explanation: "In an equilateral triangle, all sides are equal. So, side length = perimeter ÷ 3 = 30cm ÷ 3 = 10cm. 📏",
        wrongAnswerExplanations: {
            "8cm": "This would give a perimeter of 24cm.",
            "12cm": "This would give a perimeter of 36cm.",
            "15cm": "This would give a perimeter of 45cm."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch6_t1_qm19',
        type: "mcq",
        question: "A triangle has angles measuring 40°, 70°, and 70°. What type of triangle is it?",
        options: ["Scalene", "Isosceles", "Equilateral", "Right-angled"],
        correctAnswer: "Isosceles",
        explanation: "Two angles are equal (70°), making it an isosceles triangle. The angles opposite equal sides are equal. 🔺",
        wrongAnswerExplanations: {
            "Scalene": "Scalene triangles have all angles different.",
            "Equilateral": "Equilateral triangles have all angles equal to 60°.",
            "Right-angled": "This is not a right-angled triangle as no angle is 90°."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch6_t1_qm20',
        type: "mcq",
        question: "If a triangle has sides measuring 7cm, 24cm, and 25cm, what type of triangle is it?",
        options: ["Scalene", "Isosceles", "Equilateral", "Right-angled"],
        correctAnswer: "Scalene",
        explanation: "All sides are different lengths, making it a scalene triangle. It's also a right-angled triangle (7² + 24² = 25²). 🔺",
        wrongAnswerExplanations: {
            "Isosceles": "Isosceles triangles have two equal sides.",
            "Equilateral": "Equilateral triangles have all sides equal.",
            "Right-angled": "While it is right-angled, it's more specifically scalene."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    }
]; 