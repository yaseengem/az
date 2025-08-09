// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 9\Chapter6\Topic1\quiz_easy.ts
import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl9_ch6_t1_qe1',
        type: "mcq",
        question: "What is a line in geometry?",
        options: ["A one-dimensional figure with definite length", "A one-dimensional figure that extends infinitely in both directions", "A one-dimensional figure with one endpoint", "A two-dimensional figure with width and length"],
        correctAnswer: "A one-dimensional figure that extends infinitely in both directions",
        explanation: "In geometry, a line is a straight one-dimensional figure that extends infinitely in both directions. It has no thickness and no endpoints. 📏",
        wrongAnswerExplanations: {
            "A one-dimensional figure with definite length": "That describes a line segment, which has two endpoints and finite length, not a line.",
            "A one-dimensional figure with one endpoint": "That describes a ray, which has one endpoint and extends infinitely in only one direction.",
            "A two-dimensional figure with width and length": "A line is one-dimensional; it has length but no width."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch6_t1_qe2',
        type: "mcq",
        question: "How many degrees are in a complete rotation?",
        options: ["90°", "180°", "270°", "360°"],
        correctAnswer: "360°",
        explanation: "A complete rotation (full circle) measures 360 degrees (360°). This is the standard unit for measuring angles in a circle. 🔄",
        wrongAnswerExplanations: {
            "90°": "90° represents a quarter turn or a right angle, not a complete rotation.",
            "180°": "180° represents a half turn or a straight angle, not a complete rotation.",
            "270°": "270° represents three-quarters of a rotation, not a complete rotation."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch6_t1_qe3',
        type: "mcq",
        question: "Through how many points can exactly one straight line be drawn?",
        options: ["One point", "Two points", "Three points", "Infinitely many points"],
        correctAnswer: "Two points",
        explanation: "Through exactly two distinct points, one and only one straight line can be drawn. This is a fundamental postulate in Euclidean geometry. ✏️",
        wrongAnswerExplanations: {
            "One point": "Through a single point, infinitely many lines can be drawn in different directions.",
            "Three points": "Three points may not lie on the same straight line (unless they're collinear).",
            "Infinitely many points": "A single line contains infinitely many points, but the question asks how many points determine a unique line."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch6_t1_qe4',
        type: "mcq",
        question: "What is the measure of a right angle?",
        options: ["45°", "90°", "180°", "360°"],
        correctAnswer: "90°",
        explanation: "A right angle measures exactly 90°. It forms a perfect square corner and is denoted by a small square symbol at the vertex. 📐",
        wrongAnswerExplanations: {
            "45°": "45° is an acute angle, half of a right angle.",
            "180°": "180° is a straight angle, twice the measure of a right angle.",
            "360°": "360° is a complete rotation, four times the measure of a right angle."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch6_t1_qe5',
        type: "mcq",
        question: "What is the vertex of an angle?",
        options: ["The point where two rays meet", "The distance between two points", "The region between two rays", "The line passing through two points"],
        correctAnswer: "The point where two rays meet",
        explanation: "The vertex of an angle is the common endpoint where the two rays that form the angle meet. It's the point of intersection of the angle's sides. 📍",
        wrongAnswerExplanations: {
            "The distance between two points": "This defines the length of a line segment, not the vertex of an angle.",
            "The region between two rays": "This describes the interior of an angle, not its vertex.",
            "The line passing through two points": "This describes a line, not the vertex of an angle."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch6_t1_qe6',
        type: "mcq",
        question: "Which branch of mathematics primarily deals with the study of shapes, sizes, and properties of space?",
        options: ["Algebra", "Arithmetic", "Calculus", "Geometry"],
        correctAnswer: "Geometry",
        explanation: "Geometry is the branch of mathematics that deals with the study of shapes, sizes, properties of space, and the positions of figures. The word comes from Greek words meaning 'earth measurement.' 🌍",
        wrongAnswerExplanations: {
            "Algebra": "Algebra deals with symbols and the rules for manipulating these symbols in equations.",
            "Arithmetic": "Arithmetic deals with numbers and basic operations like addition and subtraction.",
            "Calculus": "Calculus deals with rates of change and accumulation of quantities."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch6_t1_qe7',
        type: "mcq",
        question: "What is the measure of a half-turn (straight angle)?",
        options: ["90°", "180°", "270°", "360°"],
        correctAnswer: "180°",
        explanation: "A straight angle or half-turn measures exactly 180°. It forms a straight line and is equivalent to 6 hours on a clock face. ⏰",
        wrongAnswerExplanations: {
            "90°": "90° is a quarter turn or right angle, not a half-turn.",
            "270°": "270° is a three-quarter turn, not a half-turn.",
            "360°": "360° is a full turn or complete rotation, not a half-turn."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch6_t1_qe8',
        type: "mcq",
        question: "In the figure where two roads meet at an angle of 90°, what type of angle is formed?",
        options: ["Acute angle", "Right angle", "Obtuse angle", "Straight angle"],
        correctAnswer: "Right angle",
        explanation: "When two roads meet at an angle of 90°, they form a right angle. This is commonly seen in grid-based city layouts and is represented by the corner of a square. 🏙️",
        wrongAnswerExplanations: {
            "Acute angle": "An acute angle measures less than 90°, not exactly 90°.",
            "Obtuse angle": "An obtuse angle measures more than 90° but less than 180°, not exactly 90°.",
            "Straight angle": "A straight angle measures exactly 180°, not 90°."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch6_t1_qe9',
        type: "mcq",
        question: "Who is credited with compiling geometric knowledge in the famous work 'Elements'?",
        options: ["Pythagoras", "Aristotle", "Euclid", "Archimedes"],
        correctAnswer: "Euclid",
        explanation: "Euclid, a Greek mathematician who lived around 300 BCE, compiled geometric knowledge in his famous work 'Elements'. This book formed the basis of mathematical reasoning and geometry that we still use today. 📚",
        wrongAnswerExplanations: {
            "Pythagoras": "Pythagoras is famous for the Pythagorean theorem but did not write 'Elements'.",
            "Aristotle": "Aristotle was a philosopher who contributed to many fields but did not write 'Elements'.",
            "Archimedes": "Archimedes made significant contributions to mathematics but did not write 'Elements'."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch6_t1_qe10',
        type: "mcq",
        question: "If an angle of 60° is bisected, what is the measure of each resulting angle?",
        options: ["15°", "30°", "45°", "60°"],
        correctAnswer: "30°",
        explanation: "When an angle is bisected, it is divided into two equal parts. So, a 60° angle when bisected results in two angles of 30° each. The word 'bisect' means to cut into two equal parts. ✂️",
        wrongAnswerExplanations: {
            "15°": "This would result if the angle was divided into four equal parts, not bisected.",
            "45°": "This is not the result of bisecting a 60° angle.",
            "60°": "This is the original angle, not the result of bisection."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch6_t1_qe11',
        type: "mcq",
        question: "What is a ray in geometry?",
        options: [
            "A line with finite length",
            "A line that extends infinitely in both directions",
            "A part of a line with one endpoint that extends infinitely in one direction",
            "A part of a line with two endpoints"
        ],
        correctAnswer: "A part of a line with one endpoint that extends infinitely in one direction",
        explanation: "A ray is a part of a line that has exactly one endpoint and extends infinitely in one direction. It's like a beam of light from a flashlight - starting at a point and extending onward without end. 💫",
        wrongAnswerExplanations: {
            "A line with finite length": "This describes a line segment, which has two endpoints.",
            "A line that extends infinitely in both directions": "This describes a line, not a ray.",
            "A part of a line with two endpoints": "This describes a line segment, not a ray."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch6_t1_qe12',
        type: "mcq",
        question: "If the hands of a clock show 3 o'clock, what is the angle formed between the hour and minute hands?",
        options: ["0°", "90°", "180°", "270°"],
        correctAnswer: "90°",
        explanation: "At 3 o'clock, the hour hand points to 3 and the minute hand points to 12. This forms a right angle or 90° between the hands. Clock faces are excellent real-life examples of angles. 🕒",
        wrongAnswerExplanations: {
            "0°": "At 0°, the hands would be pointing in the same direction, which doesn't happen at 3 o'clock.",
            "180°": "At 180°, the hands would be pointing in opposite directions, which happens at 6 o'clock.",
            "270°": "270° would represent a three-quarter turn, which is not the angle at 3 o'clock."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch6_t1_qe13',
        type: "mcq",
        question: "What is the angle measure of a quarter turn?",
        options: ["45°", "90°", "180°", "360°"],
        correctAnswer: "90°",
        explanation: "A quarter turn represents one-fourth of a complete rotation, which is 360° ÷ 4 = 90°. This is equivalent to turning from 12 to 3 on a clock face. 🔄",
        wrongAnswerExplanations: {
            "45°": "45° is one-eighth of a complete rotation, not a quarter turn.",
            "180°": "180° is a half-turn, not a quarter turn.",
            "360°": "360° is a complete rotation, not a quarter turn."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch6_t1_qe14',
        type: "mcq",
        question: "Which of the following is NOT a real-life application of angles?",
        options: ["Designing staircases", "Navigation in ships", "Chemical bonding", "Playing billiards"],
        correctAnswer: "Chemical bonding",
        explanation: "While angles are important in many fields, chemical bonding primarily involves electron sharing and atomic forces rather than geometric angles. The other options all directly involve angle measurements in their applications. 🧪",
        wrongAnswerExplanations: {
            "Designing staircases": "Staircases require precise angle measurements for safety and comfort.",
            "Navigation in ships": "Navigation uses angles to determine direction and position.",
            "Playing billiards": "Billiards involves calculating angles for shots to bounce correctly."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch6_t1_qe15',
        type: "mcq",
        question: "If a triangle has angles measuring 30° and 60°, what is the measure of the third angle?",
        options: ["30°", "60°", "90°", "120°"],
        correctAnswer: "90°",
        explanation: "In a triangle, the sum of all interior angles is always 180°. If two angles are 30° and 60°, then the third angle must be 180° - (30° + 60°) = 180° - 90° = 90°. This makes it a right triangle. 📐",
        wrongAnswerExplanations: {
            "30°": "If the third angle was 30°, the sum would be 120°, which is less than the required 180°.",
            "60°": "If the third angle was 60°, the sum would be 150°, which is less than the required 180°.",
            "120°": "If the third angle was 120°, the sum would be 210°, which exceeds the required 180°."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch6_t1_qe16',
        type: "mcq",
        question: "What is the degree measure of an acute angle?",
        options: ["Exactly 90°", "Less than 90°", "Between 90° and 180°", "Exactly 180°"],
        correctAnswer: "Less than 90°",
        explanation: "An acute angle measures less than 90° (a right angle). Examples include 30°, 45°, and 60°. These angles appear smaller or 'sharper' than right angles. 📏",
        wrongAnswerExplanations: {
            "Exactly 90°": "An angle that measures exactly 90° is a right angle, not an acute angle.",
            "Between 90° and 180°": "Angles measuring between 90° and 180° are obtuse angles, not acute angles.",
            "Exactly 180°": "An angle that measures exactly 180° is a straight angle, not an acute angle."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch6_t1_qe17',
        type: "mcq",
        question: "How many lines can pass through a single point?",
        options: ["None", "One", "Two", "Infinitely many"],
        correctAnswer: "Infinitely many",
        explanation: "Infinitely many lines can pass through a single point. This is because we can rotate a line around that point in any direction, generating an infinite number of possible lines. 🔄",
        wrongAnswerExplanations: {
            "None": "At least one line must pass through any given point.",
            "One": "More than one line can pass through a single point.",
            "Two": "More than two lines can pass through a single point."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch6_t1_qe18',
        type: "mcq",
        question: "Which of the following best describes an obtuse angle?",
        options: ["An angle less than 90°", "An angle exactly 90°", "An angle between 90° and 180°", "An angle exactly 180°"],
        correctAnswer: "An angle between 90° and 180°",
        explanation: "An obtuse angle measures more than 90° (a right angle) but less than 180° (a straight angle). Examples include 120°, 135°, and 150°. These angles appear wider or more 'open' than right angles. ⊿",
        wrongAnswerExplanations: {
            "An angle less than 90°": "This describes an acute angle, not an obtuse angle.",
            "An angle exactly 90°": "This describes a right angle, not an obtuse angle.",
            "An angle exactly 180°": "This describes a straight angle, not an obtuse angle."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch6_t1_qe19',
        type: "mcq",
        question: "If two roads intersect, how many angles are formed at the intersection?",
        options: ["1", "2", "4", "8"],
        correctAnswer: "4",
        explanation: "When two straight roads intersect, they form exactly 4 angles at the point of intersection. These four angles consist of two pairs of vertically opposite angles, which are equal in measure. 🛣️",
        wrongAnswerExplanations: {
            "1": "A single intersection of two lines creates multiple angles, not just one.",
            "2": "Two intersecting lines create more than two angles.",
            "8": "Two intersecting straight lines cannot form eight angles."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch6_t1_qe20',
        type: "mcq",
        question: "What is the value of π (pi) rounded to two decimal places?",
        options: ["3.14", "3.41", "3.12", "3.24"],
        correctAnswer: "3.14",
        explanation: "The value of π (pi) is approximately 3.14159... When rounded to two decimal places, it becomes 3.14. This constant represents the ratio of a circle's circumference to its diameter. 🔢",
        wrongAnswerExplanations: {
            "3.41": "This is not the correct value of π rounded to two decimal places.",
            "3.12": "This is not the correct value of π rounded to two decimal places.",
            "3.24": "This is not the correct value of π rounded to two decimal places."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    }
];
