import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl4_ch8_t2_qe1',
        type: "mcq",
        question: "What shape is a wheel?",
        options: ["Square", "Triangle", "Circle", "Rectangle"],
        correctAnswer: "Circle",
        explanation: "A wheel is shaped like a circle, which is a round shape where all points on the edge are the same distance from the center. 🔄",
        wrongAnswerExplanations: {
            "Square": "A square has four equal sides and four right angles, unlike a wheel which is round.",
            "Triangle": "A triangle has three sides and three angles, unlike a wheel which is round.",
            "Rectangle": "A rectangle has four sides with opposite sides equal, unlike a wheel which is round."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch8_t2_qe2',
        type: "mcq",
        question: "Which part of a circle is the distance from one side to the other passing through the center?",
        options: ["Radius", "Diameter", "Circumference", "Arc"],
        correctAnswer: "Diameter",
        explanation: "The diameter is the distance across a circle through the center. It's twice the length of the radius. 📏",
        wrongAnswerExplanations: {
            "Radius": "The radius is the distance from the center to any point on the circle, not from one side to the other.",
            "Circumference": "The circumference is the distance around the circle, not across it.",
            "Arc": "An arc is just a portion of the circumference, not the complete distance across."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch8_t2_qe3',
        type: "mcq",
        question: "If the radius of a circle is 5 cm, what is its diameter?",
        options: ["5 cm", "10 cm", "15 cm", "2.5 cm"],
        correctAnswer: "10 cm",
        explanation: "The diameter is twice the radius. So if radius = 5 cm, then diameter = 2 × 5 = 10 cm. 🔢",
        wrongAnswerExplanations: {
            "5 cm": "This is the radius, not the diameter. The diameter is twice the radius.",
            "15 cm": "This is three times the radius, not twice the radius.",
            "2.5 cm": "This is half the radius, not the diameter."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch8_t2_qe4',
        type: "mcq",
        question: "What is the distance around a circle called?",
        options: ["Radius", "Diameter", "Circumference", "Perimeter"],
        correctAnswer: "Circumference",
        explanation: "The distance around a circle is called the circumference. It's like the 'perimeter' of a circle. 🔄",
        wrongAnswerExplanations: {
            "Radius": "The radius is the distance from the center to any point on the circle.",
            "Diameter": "The diameter is the distance across a circle through the center.",
            "Perimeter": "While technically correct, the specific term for the perimeter of a circle is 'circumference'."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch8_t2_qe5',
        type: "mcq",
        question: "What is the relationship between diameter and radius?",
        options: ["Diameter = Radius × 2", "Radius = Diameter × 2", "Diameter = Radius ÷ 2", "Diameter = Radius"],
        correctAnswer: "Diameter = Radius × 2",
        explanation: "The diameter of a circle is twice its radius: d = 2r. 📊",
        wrongAnswerExplanations: {
            "Radius = Diameter × 2": "This is incorrect. The radius is half the diameter, not twice.",
            "Diameter = Radius ÷ 2": "This is incorrect. The diameter is twice the radius, not half.",
            "Diameter = Radius": "This is incorrect. The diameter is twice the radius, not equal to it."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch8_t2_qe6',
        type: "mcq",
        question: "Which of these everyday objects is shaped most like a circle?",
        options: ["A book", "A pizza", "A television screen", "A door"],
        correctAnswer: "A pizza",
        explanation: "A traditional pizza is circular in shape with a center and radius, making it an everyday example of a circle. 🍕",
        wrongAnswerExplanations: {
            "A book": "Books are typically rectangular, not circular.",
            "A television screen": "Most modern TV screens are rectangular or square, not circular.",
            "A door": "Doors are typically rectangular, not circular."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch8_t2_qe7',
        type: "mcq",
        question: "What is the center of a circle?",
        options: ["The midpoint of the diameter", "Any point on the circumference", "The starting point of the radius", "The endpoint of the radius"],
        correctAnswer: "The midpoint of the diameter",
        explanation: "The center is the point inside the circle that is the same distance from all points on the circumference. It's also the midpoint of any diameter. ⭕",
        wrongAnswerExplanations: {
            "Any point on the circumference": "Points on the circumference are all the same distance from the center, but aren't the center itself.",
            "The starting point of the radius": "The radius starts at the center, not ends there.",
            "The endpoint of the radius": "The radius ends at the circumference, not at the center."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch8_t2_qe8',
        type: "mcq",
        question: "If the diameter of a circle is 14 cm, what is its radius?",
        options: ["28 cm", "7 cm", "3.5 cm", "14 cm"],
        correctAnswer: "7 cm",
        explanation: "The radius is half the diameter. So if diameter = 14 cm, then radius = 14 ÷ 2 = 7 cm. 📏",
        wrongAnswerExplanations: {
            "28 cm": "This doubles the diameter instead of halving it.",
            "3.5 cm": "This is a quarter of the diameter, not half.",
            "14 cm": "This is the same as the diameter. The radius is half the diameter."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch8_t2_qe9',
        type: "mcq",
        question: "Which of these shapes has a diameter?",
        options: ["Square", "Triangle", "Circle", "Rectangle"],
        correctAnswer: "Circle",
        explanation: "Only a circle has a diameter, which is a straight line passing through the center connecting two points on the circumference. ⭕",
        wrongAnswerExplanations: {
            "Square": "A square has diagonals, not a diameter.",
            "Triangle": "A triangle has no diameter, only sides and angles.",
            "Rectangle": "A rectangle has diagonals, not a diameter."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch8_t2_qe10',
        type: "mcq",
        question: "What do we call a straight line from the center of a circle to any point on its circumference?",
        options: ["Diameter", "Circumference", "Radius", "Arc"],
        correctAnswer: "Radius",
        explanation: "A radius is a straight line from the center of a circle to any point on its circumference. 📊",
        wrongAnswerExplanations: {
            "Diameter": "A diameter goes all the way across the circle through the center, not just to the circumference.",
            "Circumference": "The circumference is the boundary or perimeter of the circle.",
            "Arc": "An arc is a portion of the circumference, not a line from center to circumference."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch8_t2_qe11',
        type: "mcq",
        question: "Which of these has the shape of a circle?",
        options: ["A matchbox", "A coin", "A ruler", "A pencil"],
        correctAnswer: "A coin",
        explanation: "A coin is circular in shape, with a center point and all points on its edge the same distance from the center. 💰",
        wrongAnswerExplanations: {
            "A matchbox": "A matchbox is typically rectangular, not circular.",
            "A ruler": "A ruler is long and rectangular, not circular.",
            "A pencil": "The cross-section of a pencil may be circular, but a pencil itself is cylindrical, not circular."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch8_t2_qe12',
        type: "mcq",
        question: "How many diameters can a circle have?",
        options: ["Only 1", "2", "10", "Infinitely many"],
        correctAnswer: "Infinitely many",
        explanation: "A circle can have infinitely many diameters, as a diameter can pass through the center in any direction. ⭕",
        wrongAnswerExplanations: {
            "Only 1": "A circle has infinitely many diameters, not just one.",
            "2": "While we often draw horizontal and vertical diameters, a circle actually has infinitely many.",
            "10": "A circle has infinitely many diameters, not just 10."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch8_t2_qe13',
        type: "mcq",
        question: "What is true about all radii of the same circle?",
        options: ["They have different lengths", "They have the same length", "Only two radii are equal", "None are equal"],
        correctAnswer: "They have the same length",
        explanation: "All radii of the same circle are equal in length. This is a defining property of a circle. 📏",
        wrongAnswerExplanations: {
            "They have different lengths": "All radii in a circle are equal by definition.",
            "Only two radii are equal": "All radii in a circle are equal, not just two.",
            "None are equal": "All radii in a circle are equal, not unequal."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch8_t2_qe14',
        type: "mcq",
        question: "What is the approximate value of π (pi) used in calculating the circumference?",
        options: ["2.14", "3.14", "4.14", "1.14"],
        correctAnswer: "3.14",
        explanation: "π (pi) is approximately 3.14, which is the ratio of a circle's circumference to its diameter. 🧮",
        wrongAnswerExplanations: {
            "2.14": "The approximate value of π is 3.14, not 2.14.",
            "4.14": "The approximate value of π is 3.14, not 4.14.",
            "1.14": "The approximate value of π is 3.14, not 1.14."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch8_t2_qe15',
        type: "mcq",
        question: "Which formula is used to find the circumference of a circle?",
        options: ["C = r × r × π", "C = 2 × r × π", "C = 2 × r", "C = d + π"],
        correctAnswer: "C = 2 × r × π",
        explanation: "The circumference of a circle is calculated using C = 2πr, where r is the radius and π is approximately 3.14. 🔄",
        wrongAnswerExplanations: {
            "C = r × r × π": "This is the formula for the area of a circle (πr²), not the circumference.",
            "C = 2 × r": "This formula is missing π. The correct formula is C = 2πr.",
            "C = d + π": "This is not a valid formula. The correct formula is C = πd, where d is the diameter."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch8_t2_qe16',
        type: "mcq",
        question: "If the diameter of a circle is 8 cm, what is its circumference? (Take π = 3.14)",
        options: ["25.12 cm", "16 cm", "12.56 cm", "50.24 cm"],
        correctAnswer: "25.12 cm",
        explanation: "Circumference = π × diameter = 3.14 × 8 = 25.12 cm. 📏",
        wrongAnswerExplanations: {
            "16 cm": "This is double the diameter without using π.",
            "12.56 cm": "This calculates the circumference as π × radius, not π × diameter.",
            "50.24 cm": "This incorrectly doubles the correct answer."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch8_t2_qe17',
        type: "mcq",
        question: "Which of these is NOT part of a circle?",
        options: ["Radius", "Diameter", "Circumference", "Corner"],
        correctAnswer: "Corner",
        explanation: "A circle has no corners. Corners are found in shapes with angles, like squares and triangles. ⭕",
        wrongAnswerExplanations: {
            "Radius": "The radius is a line from the center to any point on the circumference.",
            "Diameter": "The diameter is a line passing through the center connecting two points on the circumference.",
            "Circumference": "The circumference is the perimeter or boundary of the circle."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch8_t2_qe18',
        type: "mcq",
        question: "What is the formula for calculating the diameter of a circle if you know the radius?",
        options: ["d = r ÷ 2", "d = r × 2", "d = r + 2", "d = r - 2"],
        correctAnswer: "d = r × 2",
        explanation: "The diameter equals twice the radius: d = 2 × r. 🔢",
        wrongAnswerExplanations: {
            "d = r ÷ 2": "This is the formula for radius from diameter, not diameter from radius.",
            "d = r + 2": "The diameter is not the radius plus 2, but twice the radius.",
            "d = r - 2": "The diameter is not the radius minus 2, but twice the radius."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch8_t2_qe19',
        type: "mcq",
        question: "Which of these everyday items most closely resembles a circumference?",
        options: ["A stick", "A rubber band", "A pencil", "A book"],
        correctAnswer: "A rubber band",
        explanation: "A rubber band forms a closed loop that resembles the circumference of a circle. 🔄",
        wrongAnswerExplanations: {
            "A stick": "A stick is straight, while a circumference is a curved, closed loop.",
            "A pencil": "A pencil is a straight object, not a curved loop like a circumference.",
            "A book": "A book has straight edges and corners, unlike a circumference."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch8_t2_qe20',
        type: "mcq",
        question: "If a circle has a radius of 7 cm, what is its circumference? (Take π = 3.14)",
        options: ["14 cm", "21.98 cm", "43.96 cm", "153.86 cm"],
        correctAnswer: "43.96 cm",
        explanation: "Circumference = 2 × π × radius = 2 × 3.14 × 7 = 43.96 cm. 📏",
        wrongAnswerExplanations: {
            "14 cm": "This is just double the radius without using π.",
            "21.98 cm": "This uses the formula π × diameter but incorrectly calculates diameter as 7 cm.",
            "153.86 cm": "This incorrectly calculates the area instead of the circumference."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    }
];
