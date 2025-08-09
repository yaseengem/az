import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl4_ch8_t1_qm1',
        type: "mcq",
        question: "What is the name of the distance from the center to any point on a circle?",
        options: ["Diameter", "Circumference", "Radius", "Perimeter"],
        correctAnswer: "Radius",
        explanation: "The radius is the distance from the center to any point on a circle. It's like the spoke of a wheel. 📏",
        wrongAnswerExplanations: {
            "Diameter": "The diameter is twice the radius and goes from one side of the circle to the other through the center.",
            "Circumference": "The circumference is the distance around the circle (its perimeter).",
            "Perimeter": "For a circle, the perimeter is called the circumference."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch8_t1_qm2',
        type: "mcq",
        question: "What is the name of the distance across a circle passing through the center?",
        options: ["Radius", "Circumference", "Diameter", "Arc"],
        correctAnswer: "Diameter",
        explanation: "The diameter is the distance across a circle through its center. It equals twice the radius. ⭕",
        wrongAnswerExplanations: {
            "Radius": "The radius is half the diameter, measuring from center to edge.",
            "Circumference": "The circumference is the distance around the circle.",
            "Arc": "An arc is just a portion of the circumference, not the full distance across."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch8_t1_qm3',
        type: "mcq",
        question: "If a circle has a radius of 3 cm, what is its diameter?",
        options: ["3 cm", "6 cm", "9 cm", "12 cm"],
        correctAnswer: "6 cm",
        explanation: "The diameter equals twice the radius: 2 × 3 cm = 6 cm. 🔢",
        wrongAnswerExplanations: {
            "3 cm": "This is the radius, not the diameter.",
            "9 cm": "This incorrectly multiplies the radius by 3 instead of 2.",
            "12 cm": "This incorrectly multiplies the radius by 4 instead of 2."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch8_t1_qm4',
        type: "mcq",
        question: "What is the name of the distance all the way around a circle?",
        options: ["Radius", "Diameter", "Circumference", "Chord"],
        correctAnswer: "Circumference",
        explanation: "The circumference is the distance all the way around a circle (its perimeter). 🔄",
        wrongAnswerExplanations: {
            "Radius": "The radius is the distance from the center to any point on the circle.",
            "Diameter": "The diameter is the distance across the circle through the center.",
            "Chord": "A chord is a line segment connecting two points on the circle."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch8_t1_qm5',
        type: "mcq",
        question: "Which is larger for any circle?",
        options: ["Radius", "Diameter", "They are equal", "It depends on the circle"],
        correctAnswer: "Diameter",
        explanation: "The diameter is always twice the radius, so it's always larger. ⭕",
        wrongAnswerExplanations: {
            "Radius": "The radius is half the diameter, so it's smaller.",
            "They are equal": "The diameter is twice the radius, so they are not equal.",
            "It depends on the circle": "For all circles, the diameter is always twice the radius."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch8_t1_qm6',
        type: "mcq",
        question: "How many radii does a circle have?",
        options: ["1", "2", "4", "Infinite"],
        correctAnswer: "Infinite",
        explanation: "A circle has infinite radii as you can draw a line from the center to any point on the circle. 🔄",
        wrongAnswerExplanations: {
            "1": "A circle has many possible radii, not just one.",
            "2": "This might confuse radius with diameter, but a circle has infinite radii.",
            "4": "A circle has infinitely many radii, not just 4."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch8_t1_qm7',
        type: "mcq",
        question: "What is the relationship between the diameter and radius of a circle?",
        options: ["Diameter = Radius", "Diameter = 2 × Radius", "Diameter = 3 × Radius", "Diameter = Radius × Radius"],
        correctAnswer: "Diameter = 2 × Radius",
        explanation: "The diameter is twice the radius: d = 2r. Think of the diameter as two radii in a straight line. 📊",
        wrongAnswerExplanations: {
            "Diameter = Radius": "The diameter is twice the radius, not equal to it.",
            "Diameter = 3 × Radius": "The diameter is twice (2×) the radius, not three times.",
            "Diameter = Radius × Radius": "This would be the formula for area, not diameter."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch8_t1_qm8',
        type: "mcq",
        question: "If you draw a straight line from one point on a circle to another point on the circle, what is this line called?",
        options: ["Radius", "Diameter", "Chord", "Circumference"],
        correctAnswer: "Chord",
        explanation: "A chord is a straight line connecting any two points on a circle. 📏",
        wrongAnswerExplanations: {
            "Radius": "A radius connects the center to a point on the circle.",
            "Diameter": "A diameter is a chord that passes through the center.",
            "Circumference": "The circumference is the complete boundary of the circle."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch8_t1_qm9',
        type: "mcq",
        question: "If a circle has a diameter of 8 cm, what is its radius?",
        options: ["4 cm", "16 cm", "2 cm", "12 cm"],
        correctAnswer: "4 cm",
        explanation: "The radius is half the diameter: 8 cm ÷ 2 = 4 cm. 🔢",
        wrongAnswerExplanations: {
            "16 cm": "This incorrectly multiplies the diameter by 2 rather than dividing it.",
            "2 cm": "This incorrectly divides the diameter by 4 instead of 2.",
            "12 cm": "This incorrectly adds 4 to the diameter instead of dividing by 2."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch8_t1_qm10',
        type: "mcq",
        question: "What is a diameter that passes through the center of a circle to connect two points on the circumference?",
        options: ["A long radius", "A straight diameter", "A normal diameter", "All diameters do this"],
        correctAnswer: "All diameters do this",
        explanation: "By definition, all diameters pass through the center and connect two points on the circle. ⭕",
        wrongAnswerExplanations: {
            "A long radius": "A radius connects the center to just one point on the circle, not two.",
            "A straight diameter": "All diameters are straight lines, and all pass through the center.",
            "A normal diameter": "All diameters, by definition, pass through the center."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch8_t1_qm11',
        type: "mcq",
        question: "Which of these objects is NOT circular when viewed from the top?",
        options: ["Cup", "Plate", "Bowl", "Book"],
        correctAnswer: "Book",
        explanation: "A book typically has a rectangular shape when viewed from above, not circular. 📚",
        wrongAnswerExplanations: {
            "Cup": "A cup typically has a circular opening when viewed from above.",
            "Plate": "A plate is typically circular when viewed from above.",
            "Bowl": "A bowl typically has a circular opening when viewed from above."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch8_t1_qm12',
        type: "mcq",
        question: "Which statement about a circle is correct?",
        options: ["A circle has one center", "A circle has many centers", "A circle has no center", "A circle has a moving center"],
        correctAnswer: "A circle has one center",
        explanation: "Every circle has exactly one center point from which all points on the circle are equidistant. ⚪",
        wrongAnswerExplanations: {
            "A circle has many centers": "By definition, a circle has only one center point.",
            "A circle has no center": "A circle always has a center - it's a key part of its definition.",
            "A circle has a moving center": "The center of a circle is fixed, not moving."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch8_t1_qm13',
        type: "mcq",
        question: "Which of these is a real-world application of circular shapes?",
        options: ["Building walls", "Making tables", "Designing wheels", "Creating bookshelves"],
        correctAnswer: "Designing wheels",
        explanation: "Wheels are circular to allow smooth rolling motion without bumps. 🛞",
        wrongAnswerExplanations: {
            "Building walls": "Walls are typically flat and rectangular, not circular.",
            "Making tables": "While some tables can be circular, tables can be various shapes.",
            "Creating bookshelves": "Bookshelves are typically rectangular with flat surfaces."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch8_t1_qm14',
        type: "mcq",
        question: "If you cut an apple horizontally through the middle, what shape do you see?",
        options: ["Square", "Rectangle", "Circle", "Triangle"],
        correctAnswer: "Circle",
        explanation: "Cutting an apple horizontally through the middle reveals a roughly circular cross-section. 🍎",
        wrongAnswerExplanations: {
            "Square": "An apple's cross-section is not square-shaped.",
            "Rectangle": "An apple's cross-section is not rectangular.",
            "Triangle": "An apple's cross-section is not triangular."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch8_t1_qm15',
        type: "mcq",
        question: "Which of these is NOT a property of a circle?",
        options: ["All radii are equal", "All diameters are equal", "It has equal sides", "It has a center"],
        correctAnswer: "It has equal sides",
        explanation: "A circle has no sides, so it can't have 'equal sides.' It has a continuous curved edge. ⭕",
        wrongAnswerExplanations: {
            "All radii are equal": "By definition, all radii in a circle are equal.",
            "All diameters are equal": "All diameters of the same circle are equal.",
            "It has a center": "Every circle has a center point."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch8_t1_qm16',
        type: "mcq",
        question: "If a bicycle wheel has a radius of 30 cm, what is its diameter?",
        options: ["15 cm", "30 cm", "60 cm", "90 cm"],
        correctAnswer: "60 cm",
        explanation: "Diameter = 2 × Radius = 2 × 30 cm = 60 cm. 🚲",
        wrongAnswerExplanations: {
            "15 cm": "This incorrectly divides the radius by 2 instead of multiplying it by 2.",
            "30 cm": "This is the radius, not the diameter.",
            "90 cm": "This incorrectly multiplies the radius by 3 instead of 2."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch8_t1_qm17',
        type: "mcq",
        question: "What shape is formed when you look at the bottom of a glass?",
        options: ["Rectangle", "Square", "Triangle", "Circle"],
        correctAnswer: "Circle",
        explanation: "Most drinking glasses have circular bottoms, forming a circle when viewed from below. 🥤",
        wrongAnswerExplanations: {
            "Rectangle": "Drinking glasses typically have circular, not rectangular bottoms.",
            "Square": "Drinking glasses typically have circular, not square bottoms.",
            "Triangle": "Drinking glasses do not have triangular bottoms."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch8_t1_qm18',
        type: "mcq",
        question: "Why are manhole covers usually circular?",
        options: ["They're easier to make", "They look nicer", "They can't fall through the hole", "They're lighter"],
        correctAnswer: "They can't fall through the hole",
        explanation: "Circular covers can't fall through their holes because the diameter is the same in all directions. ⭕",
        wrongAnswerExplanations: {
            "They're easier to make": "This isn't the main reason for the circular shape.",
            "They look nicer": "Appearance isn't the main safety reason for circular manhole covers.",
            "They're lighter": "The shape doesn't determine the weight of the cover."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch8_t1_qm19',
        type: "mcq",
        question: "What is a semicircle?",
        options: ["A quarter of a circle", "Half of a circle", "Two circles joined together", "A circle with a hole"],
        correctAnswer: "Half of a circle",
        explanation: "A semicircle is exactly half of a circle, cut along a diameter. 🌓",
        wrongAnswerExplanations: {
            "A quarter of a circle": "A quarter of a circle is called a quadrant, not a semicircle.",
            "Two circles joined together": "This would be two circles, not a semicircle.",
            "A circle with a hole": "This describes a ring or annulus, not a semicircle."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch8_t1_qm20',
        type: "mcq",
        question: "Which of these would NOT help you draw a circle if you don't have a compass?",
        options: ["Tracing around a round plate", "Using a string attached to a center point", "Using a ruler", "Tracing around a round lid"],
        correctAnswer: "Using a ruler",
        explanation: "A ruler helps draw straight lines, not circles. You need a curved or flexible tool for circles. 📏",
        wrongAnswerExplanations: {
            "Tracing around a round plate": "This method works well for drawing circles.",
            "Using a string attached to a center point": "This creates a circle with a consistent radius.",
            "Tracing around a round lid": "This method works well for drawing circles."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    }
];
