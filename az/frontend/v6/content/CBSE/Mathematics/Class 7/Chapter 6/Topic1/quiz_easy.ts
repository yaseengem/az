import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl7_ch6_t1_qe1',
        type: "mcq",
        question: "A triangle has sides measuring 5cm, 5cm, and 5cm. What type of triangle is it?",
        options: ["Scalene", "Isosceles", "Equilateral", "Right-angled"],
        correctAnswer: "Equilateral",
        explanation: "All sides are equal (5cm), making it an equilateral triangle. 🔺",
        wrongAnswerExplanations: {
            "Scalene": "Scalene triangles have all sides different.",
            "Isosceles": "While an equilateral triangle is technically isosceles, it's more specifically equilateral.",
            "Right-angled": "This is not a right-angled triangle as all sides are equal."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch6_t1_qe2',
        type: "mcq",
        question: "How many lines of symmetry does an equilateral triangle have?",
        options: ["0", "1", "2", "3"],
        correctAnswer: "3",
        explanation: "An equilateral triangle has three lines of symmetry, one from each vertex to the midpoint of the opposite side. 📐",
        wrongAnswerExplanations: {
            "0": "Scalene triangles have no lines of symmetry, not equilateral ones.",
            "1": "Isosceles triangles have one line of symmetry, not equilateral ones.",
            "2": "Equilateral triangles have three lines of symmetry, not two."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch6_t1_qe3',
        type: "mcq",
        question: "A triangle has sides measuring 4cm, 4cm, and 6cm. What type of triangle is it?",
        options: ["Scalene", "Isosceles", "Equilateral", "Right-angled"],
        correctAnswer: "Isosceles",
        explanation: "Two sides are equal (4cm), making it an isosceles triangle. 🔺",
        wrongAnswerExplanations: {
            "Scalene": "Scalene triangles have all sides different.",
            "Equilateral": "Equilateral triangles have all sides equal.",
            "Right-angled": "This is not necessarily a right-angled triangle."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch6_t1_qe4',
        type: "mcq",
        question: "What is the measure of each angle in an equilateral triangle?",
        options: ["30°", "45°", "60°", "90°"],
        correctAnswer: "60°",
        explanation: "In an equilateral triangle, all angles are equal to 60° (180° ÷ 3). 📐",
        wrongAnswerExplanations: {
            "30°": "This is too small for an equilateral triangle's angles.",
            "45°": "This is the measure of angles in a right-angled isosceles triangle.",
            "90°": "This is the measure of a right angle, not an equilateral triangle's angle."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch6_t1_qe5',
        type: "mcq",
        question: "A triangle has sides measuring 3cm, 4cm, and 5cm. What type of triangle is it?",
        options: ["Scalene", "Isosceles", "Equilateral", "Right-angled"],
        correctAnswer: "Scalene",
        explanation: "All sides are different lengths, making it a scalene triangle. 🔺",
        wrongAnswerExplanations: {
            "Isosceles": "Isosceles triangles have two equal sides.",
            "Equilateral": "Equilateral triangles have all sides equal.",
            "Right-angled": "While this is a right-angled triangle, it's more specifically scalene."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch6_t1_qe6',
        type: "mcq",
        question: "How many lines of symmetry does a scalene triangle have?",
        options: ["0", "1", "2", "3"],
        correctAnswer: "0",
        explanation: "Scalene triangles have no lines of symmetry because all sides and angles are different. 📐",
        wrongAnswerExplanations: {
            "1": "Isosceles triangles have one line of symmetry, not scalene ones.",
            "2": "No triangle has exactly two lines of symmetry.",
            "3": "Equilateral triangles have three lines of symmetry, not scalene ones."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch6_t1_qe7',
        type: "mcq",
        question: "If a triangle has two angles equal to 45° each, what type of triangle is it?",
        options: ["Scalene", "Isosceles", "Equilateral", "Right-angled"],
        correctAnswer: "Isosceles",
        explanation: "Equal angles are opposite equal sides, making it an isosceles triangle. 🔺",
        wrongAnswerExplanations: {
            "Scalene": "Scalene triangles have all angles different.",
            "Equilateral": "Equilateral triangles have all angles equal to 60°.",
            "Right-angled": "While this is a right-angled triangle, it's more specifically isosceles."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch6_t1_qe8',
        type: "mcq",
        question: "Which type of triangle has all sides different?",
        options: ["Scalene", "Isosceles", "Equilateral", "Right-angled"],
        correctAnswer: "Scalene",
        explanation: "Scalene triangles have all sides of different lengths. 🔺",
        wrongAnswerExplanations: {
            "Isosceles": "Isosceles triangles have two equal sides.",
            "Equilateral": "Equilateral triangles have all sides equal.",
            "Right-angled": "Right-angled triangles can be scalene or isosceles."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch6_t1_qe9',
        type: "mcq",
        question: "What is the perimeter of an equilateral triangle with each side measuring 6cm?",
        options: ["12cm", "18cm", "24cm", "36cm"],
        correctAnswer: "18cm",
        explanation: "Perimeter = 3 × side = 3 × 6cm = 18cm. 📏",
        wrongAnswerExplanations: {
            "12cm": "This would be for a triangle with sides 4cm each.",
            "24cm": "This would be for a triangle with sides 8cm each.",
            "36cm": "This would be for a triangle with sides 12cm each."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch6_t1_qe10',
        type: "mcq",
        question: "A triangle has sides measuring 7cm, 7cm, and 10cm. What type of triangle is it?",
        options: ["Scalene", "Isosceles", "Equilateral", "Right-angled"],
        correctAnswer: "Isosceles",
        explanation: "Two sides are equal (7cm), making it an isosceles triangle. 🔺",
        wrongAnswerExplanations: {
            "Scalene": "Scalene triangles have all sides different.",
            "Equilateral": "Equilateral triangles have all sides equal.",
            "Right-angled": "This is not necessarily a right-angled triangle."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch6_t1_qe11',
        type: "mcq",
        question: "Which type of triangle has all angles equal?",
        options: ["Scalene", "Isosceles", "Equilateral", "Right-angled"],
        correctAnswer: "Equilateral",
        explanation: "In an equilateral triangle, all angles are equal to 60°. 🔺",
        wrongAnswerExplanations: {
            "Scalene": "Scalene triangles have all angles different.",
            "Isosceles": "Isosceles triangles have two equal angles.",
            "Right-angled": "Right-angled triangles have one 90° angle."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch6_t1_qe12',
        type: "mcq",
        question: "How many lines of symmetry does an isosceles triangle have?",
        options: ["0", "1", "2", "3"],
        correctAnswer: "1",
        explanation: "An isosceles triangle has one line of symmetry through the vertex angle. 📐",
        wrongAnswerExplanations: {
            "0": "Scalene triangles have no lines of symmetry, not isosceles ones.",
            "2": "No triangle has exactly two lines of symmetry.",
            "3": "Equilateral triangles have three lines of symmetry, not isosceles ones."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch6_t1_qe13',
        type: "mcq",
        question: "A triangle has sides measuring 8cm, 9cm, and 10cm. What type of triangle is it?",
        options: ["Scalene", "Isosceles", "Equilateral", "Right-angled"],
        correctAnswer: "Scalene",
        explanation: "All sides are different lengths, making it a scalene triangle. 🔺",
        wrongAnswerExplanations: {
            "Isosceles": "Isosceles triangles have two equal sides.",
            "Equilateral": "Equilateral triangles have all sides equal.",
            "Right-angled": "This is not a right-angled triangle."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch6_t1_qe14',
        type: "mcq",
        question: "What is the sum of all angles in any triangle?",
        options: ["90°", "180°", "270°", "360°"],
        correctAnswer: "180°",
        explanation: "The sum of interior angles in any triangle is always 180°. 📐",
        wrongAnswerExplanations: {
            "90°": "This is the measure of one right angle.",
            "270°": "This is the sum of three right angles.",
            "360°": "This is the sum of angles in a quadrilateral."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch6_t1_qe15',
        type: "mcq",
        question: "Which type of triangle has two equal sides?",
        options: ["Scalene", "Isosceles", "Equilateral", "Right-angled"],
        correctAnswer: "Isosceles",
        explanation: "Isosceles triangles have exactly two sides equal. 🔺",
        wrongAnswerExplanations: {
            "Scalene": "Scalene triangles have all sides different.",
            "Equilateral": "Equilateral triangles have all three sides equal.",
            "Right-angled": "Right-angled triangles can be scalene or isosceles."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch6_t1_qe16',
        type: "mcq",
        question: "A triangle has sides measuring 6cm, 6cm, and 6cm. What type of triangle is it?",
        options: ["Scalene", "Isosceles", "Equilateral", "Right-angled"],
        correctAnswer: "Equilateral",
        explanation: "All sides are equal (6cm), making it an equilateral triangle. 🔺",
        wrongAnswerExplanations: {
            "Scalene": "Scalene triangles have all sides different.",
            "Isosceles": "While an equilateral triangle is technically isosceles, it's more specifically equilateral.",
            "Right-angled": "This is not a right-angled triangle as all sides are equal."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch6_t1_qe17',
        type: "mcq",
        question: "What is the perimeter of an isosceles triangle with two sides of 5cm and one side of 8cm?",
        options: ["13cm", "18cm", "20cm", "25cm"],
        correctAnswer: "18cm",
        explanation: "Perimeter = 5cm + 5cm + 8cm = 18cm. 📏",
        wrongAnswerExplanations: {
            "13cm": "This would be the sum of two sides only.",
            "20cm": "This would be for sides 5cm, 5cm, and 10cm.",
            "25cm": "This would be for sides 5cm, 5cm, and 15cm."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch6_t1_qe18',
        type: "mcq",
        question: "Which type of triangle has all sides equal?",
        options: ["Scalene", "Isosceles", "Equilateral", "Right-angled"],
        correctAnswer: "Equilateral",
        explanation: "Equilateral triangles have all three sides equal. 🔺",
        wrongAnswerExplanations: {
            "Scalene": "Scalene triangles have all sides different.",
            "Isosceles": "Isosceles triangles have two equal sides.",
            "Right-angled": "Right-angled triangles can be scalene or isosceles."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch6_t1_qe19',
        type: "mcq",
        question: "A triangle has sides measuring 4cm, 5cm, and 6cm. What type of triangle is it?",
        options: ["Scalene", "Isosceles", "Equilateral", "Right-angled"],
        correctAnswer: "Scalene",
        explanation: "All sides are different lengths, making it a scalene triangle. 🔺",
        wrongAnswerExplanations: {
            "Isosceles": "Isosceles triangles have two equal sides.",
            "Equilateral": "Equilateral triangles have all sides equal.",
            "Right-angled": "This is not a right-angled triangle."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch6_t1_qe20',
        type: "mcq",
        question: "What is the perimeter of a scalene triangle with sides 7cm, 8cm, and 9cm?",
        options: ["21cm", "24cm", "27cm", "30cm"],
        correctAnswer: "24cm",
        explanation: "Perimeter = 7cm + 8cm + 9cm = 24cm. 📏",
        wrongAnswerExplanations: {
            "21cm": "This would be for sides 7cm, 7cm, and 7cm.",
            "27cm": "This would be for sides 9cm, 9cm, and 9cm.",
            "30cm": "This would be for sides 10cm, 10cm, and 10cm."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    }
]; 