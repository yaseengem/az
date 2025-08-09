import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl6_ch5_t3_qm1',
        type: "mcq",
        question: "If two angles of a triangle are 45° and 60°, what is the third angle?",
        options: ["45°", "60°", "75°", "90°"],
        correctAnswer: "75°",
        explanation: "Sum of angles in a triangle is 180°. Third angle = 180° - (45° + 60°) = 75°. 🔺",
        wrongAnswerExplanations: {
            "45°": "This would make the sum less than 180°.",
            "60°": "This would make the sum less than 180°.",
            "90°": "This would make the sum more than 180°."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch5_t3_qm2',
        type: "mcq",
        question: "If a rectangle has length 8 cm and width 5 cm, what is its perimeter?",
        options: ["13 cm", "26 cm", "40 cm", "20 cm"],
        correctAnswer: "26 cm",
        explanation: "Perimeter = 2 × (length + width) = 2 × (8 cm + 5 cm) = 26 cm. 📦",
        wrongAnswerExplanations: {
            "13 cm": "This is the sum of length and width, not the perimeter.",
            "40 cm": "This is the area, not the perimeter.",
            "20 cm": "This is less than the actual perimeter."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch5_t3_qm3',
        type: "mcq",
        question: "If three angles of a quadrilateral are 90°, 90°, and 70°, what is the fourth angle?",
        options: ["90°", "100°", "110°", "120°"],
        correctAnswer: "110°",
        explanation: "Sum of angles in a quadrilateral is 360°. Fourth angle = 360° - (90° + 90° + 70°) = 110°. 📦",
        wrongAnswerExplanations: {
            "90°": "This would make the sum less than 360°.",
            "100°": "This would make the sum less than 360°.",
            "120°": "This would make the sum more than 360°."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch5_t3_qm4',
        type: "mcq",
        question: "If a square has a perimeter of 24 cm, what is the length of each side?",
        options: ["4 cm", "6 cm", "8 cm", "12 cm"],
        correctAnswer: "6 cm",
        explanation: "In a square, all sides are equal. Side length = Perimeter ÷ 4 = 24 cm ÷ 4 = 6 cm. ⬜",
        wrongAnswerExplanations: {
            "4 cm": "This would make the perimeter 16 cm.",
            "8 cm": "This would make the perimeter 32 cm.",
            "12 cm": "This would make the perimeter 48 cm."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch5_t3_qm5',
        type: "mcq",
        question: "If a triangle has angles of 60° and 80°, what type of triangle is it?",
        options: ["Acute", "Right", "Obtuse", "Equilateral"],
        correctAnswer: "Acute",
        explanation: "Third angle = 180° - (60° + 80°) = 40°. All angles are less than 90°, so it's an acute triangle. 🔺",
        wrongAnswerExplanations: {
            "Right": "A right triangle has one 90° angle.",
            "Obtuse": "An obtuse triangle has one angle more than 90°.",
            "Equilateral": "An equilateral triangle has all angles 60°."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch5_t3_qm6',
        type: "mcq",
        question: "If a circle has a diameter of 14 cm, what is its radius?",
        options: ["7 cm", "14 cm", "21 cm", "28 cm"],
        correctAnswer: "7 cm",
        explanation: "Radius = Diameter ÷ 2 = 14 cm ÷ 2 = 7 cm. ⭕",
        wrongAnswerExplanations: {
            "14 cm": "This is the diameter, not the radius.",
            "21 cm": "This is 1.5 times the diameter, not the radius.",
            "28 cm": "This is twice the diameter, not the radius."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch5_t3_qm7',
        type: "mcq",
        question: "If a parallelogram has one angle of 70°, what is the measure of its adjacent angle?",
        options: ["70°", "90°", "110°", "180°"],
        correctAnswer: "110°",
        explanation: "Adjacent angles in a parallelogram add up to 180°. So, 180° - 70° = 110°. 📦",
        wrongAnswerExplanations: {
            "70°": "This would be the opposite angle, not the adjacent angle.",
            "90°": "This would make it a rectangle, not a general parallelogram.",
            "180°": "This is the sum of adjacent angles, not one angle."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch5_t3_qm8',
        type: "mcq",
        question: "If an isosceles triangle has one angle of 80°, what are the other two angles?",
        options: ["50° each", "60° each", "70° each", "80° each"],
        correctAnswer: "50° each",
        explanation: "In an isosceles triangle, two angles are equal. Let the equal angles be x. Then, 80° + x + x = 180° ⇒ 2x = 100° ⇒ x = 50°. 🔺",
        wrongAnswerExplanations: {
            "60° each": "This would make the sum 200°.",
            "70° each": "This would make the sum 220°.",
            "80° each": "This would make the sum 240°."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch5_t3_qm9',
        type: "mcq",
        question: "If a rhombus has one angle of 60°, what is the measure of its opposite angle?",
        options: ["30°", "60°", "120°", "180°"],
        correctAnswer: "60°",
        explanation: "In a rhombus, opposite angles are equal. So, the opposite angle is also 60°. 📦",
        wrongAnswerExplanations: {
            "30°": "Opposite angles in a rhombus are equal.",
            "120°": "This would be the adjacent angle, not the opposite angle.",
            "180°": "This is the sum of adjacent angles, not one angle."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch5_t3_qm10',
        type: "mcq",
        question: "If a triangle has sides of 5 cm, 12 cm, and 13 cm, what type of triangle is it?",
        options: ["Acute", "Right", "Obtuse", "Equilateral"],
        correctAnswer: "Right",
        explanation: "5² + 12² = 25 + 144 = 169 = 13². This satisfies the Pythagorean theorem, so it's a right triangle. 🔺",
        wrongAnswerExplanations: {
            "Acute": "This would be true if the sum of squares of shorter sides was greater than the square of the longest side.",
            "Obtuse": "This would be true if the sum of squares of shorter sides was less than the square of the longest side.",
            "Equilateral": "An equilateral triangle has all sides equal."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch5_t3_qm11',
        type: "mcq",
        question: "If a quadrilateral has three angles of 90°, 90°, and 100°, what type of quadrilateral is it?",
        options: ["Square", "Rectangle", "Trapezium", "Parallelogram"],
        correctAnswer: "Trapezium",
        explanation: "Fourth angle = 360° - (90° + 90° + 100°) = 80°. Since it has only one pair of parallel sides (due to unequal angles), it's a trapezium. 📦",
        wrongAnswerExplanations: {
            "Square": "A square has all angles 90°.",
            "Rectangle": "A rectangle has all angles 90°.",
            "Parallelogram": "A parallelogram has opposite angles equal."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch5_t3_qm12',
        type: "mcq",
        question: "If a circle has a radius of 10 cm, what is its circumference?",
        options: ["20π cm", "40π cm", "60π cm", "80π cm"],
        correctAnswer: "20π cm",
        explanation: "Circumference = 2πr = 2 × π × 10 cm = 20π cm. ⭕",
        wrongAnswerExplanations: {
            "40π cm": "This would be correct for radius 20 cm.",
            "60π cm": "This would be correct for radius 30 cm.",
            "80π cm": "This would be correct for radius 40 cm."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch5_t3_qm13',
        type: "mcq",
        question: "If a triangle has angles of 30° and 60°, what is the third angle?",
        options: ["30°", "60°", "90°", "120°"],
        correctAnswer: "90°",
        explanation: "Third angle = 180° - (30° + 60°) = 90°. This makes it a right-angled triangle. 🔺",
        wrongAnswerExplanations: {
            "30°": "This would make the sum less than 180°.",
            "60°": "This would make the sum less than 180°.",
            "120°": "This would make the sum more than 180°."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch5_t3_qm14',
        type: "mcq",
        question: "If a rectangle has a perimeter of 30 cm and length 8 cm, what is its width?",
        options: ["5 cm", "7 cm", "9 cm", "11 cm"],
        correctAnswer: "7 cm",
        explanation: "Perimeter = 2 × (length + width). So, 30 cm = 2 × (8 cm + width) ⇒ width = 7 cm. 📦",
        wrongAnswerExplanations: {
            "5 cm": "This would make the perimeter 26 cm.",
            "9 cm": "This would make the perimeter 34 cm.",
            "11 cm": "This would make the perimeter 38 cm."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch5_t3_qm15',
        type: "mcq",
        question: "If a triangle has sides of 7 cm, 24 cm, and 25 cm, what type of triangle is it?",
        options: ["Acute", "Right", "Obtuse", "Equilateral"],
        correctAnswer: "Right",
        explanation: "7² + 24² = 49 + 576 = 625 = 25². This satisfies the Pythagorean theorem, so it's a right triangle. 🔺",
        wrongAnswerExplanations: {
            "Acute": "This would be true if the sum of squares of shorter sides was greater than the square of the longest side.",
            "Obtuse": "This would be true if the sum of squares of shorter sides was less than the square of the longest side.",
            "Equilateral": "An equilateral triangle has all sides equal."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch5_t3_qm16',
        type: "mcq",
        question: "If a quadrilateral has angles of 70°, 110°, 70°, and x°, what is the value of x?",
        options: ["70°", "90°", "110°", "130°"],
        correctAnswer: "110°",
        explanation: "Sum of angles in a quadrilateral is 360°. So, x = 360° - (70° + 110° + 70°) = 110°. 📦",
        wrongAnswerExplanations: {
            "70°": "This would make the sum less than 360°.",
            "90°": "This would make the sum less than 360°.",
            "130°": "This would make the sum more than 360°."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch5_t3_qm17',
        type: "mcq",
        question: "If a circle has a circumference of 44 cm, what is its diameter?",
        options: ["7 cm", "14 cm", "21 cm", "28 cm"],
        correctAnswer: "14 cm",
        explanation: "Circumference = πd ⇒ 44 cm = πd ⇒ d = 44 cm ÷ π ≈ 14 cm. ⭕",
        wrongAnswerExplanations: {
            "7 cm": "This would make the circumference 22 cm.",
            "21 cm": "This would make the circumference 66 cm.",
            "28 cm": "This would make the circumference 88 cm."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch5_t3_qm18',
        type: "mcq",
        question: "If a triangle has angles of 40° and 50°, what type of triangle is it?",
        options: ["Acute", "Right", "Obtuse", "Equilateral"],
        correctAnswer: "Right",
        explanation: "Third angle = 180° - (40° + 50°) = 90°. This makes it a right-angled triangle. 🔺",
        wrongAnswerExplanations: {
            "Acute": "This would be true if all angles were less than 90°.",
            "Obtuse": "This would be true if one angle was more than 90°.",
            "Equilateral": "An equilateral triangle has all angles 60°."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch5_t3_qm19',
        type: "mcq",
        question: "If a square has an area of 64 cm², what is its perimeter?",
        options: ["16 cm", "32 cm", "48 cm", "64 cm"],
        correctAnswer: "32 cm",
        explanation: "Side length = √64 cm² = 8 cm. Perimeter = 4 × 8 cm = 32 cm. ⬜",
        wrongAnswerExplanations: {
            "16 cm": "This would be the side length, not the perimeter.",
            "48 cm": "This would be correct for a square with area 144 cm².",
            "64 cm": "This would be correct for a square with area 256 cm²."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch5_t3_qm20',
        type: "mcq",
        question: "If a triangle has sides of 6 cm, 8 cm, and 10 cm, what type of triangle is it?",
        options: ["Acute", "Right", "Obtuse", "Equilateral"],
        correctAnswer: "Right",
        explanation: "6² + 8² = 36 + 64 = 100 = 10². This satisfies the Pythagorean theorem, so it's a right triangle. 🔺",
        wrongAnswerExplanations: {
            "Acute": "This would be true if the sum of squares of shorter sides was greater than the square of the longest side.",
            "Obtuse": "This would be true if the sum of squares of shorter sides was less than the square of the longest side.",
            "Equilateral": "An equilateral triangle has all sides equal."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    }
]; 