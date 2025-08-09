// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 6\Chapter4\Topic3\quiz_medium.ts
import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl6_ch4_t3_qm1',
        type: "mcq",
        question: "If a regular polygon has 5 sides, what is the measure of each interior angle?",
        options: ["60°", "72°", "108°", "120°"],
        correctAnswer: "108°",
        explanation: "In a regular pentagon, each interior angle = (5-2) × 180° ÷ 5 = 3 × 180° ÷ 5 = 108°. 📐",
        wrongAnswerExplanations: {
            "60°": "60° is the interior angle of a regular triangle (equilateral triangle), not a pentagon.",
            "72°": "72° is the exterior angle of a regular pentagon, not the interior angle.",
            "120°": "120° is the interior angle of a regular hexagon, not a pentagon."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch4_t3_qm2',
        type: "mcq",
        question: "What is the sum of interior angles in a hexagon?",
        options: ["540°", "720°", "900°", "1080°"],
        correctAnswer: "720°",
        explanation: "Sum of interior angles in a polygon = (n-2) × 180°. For hexagon, n=6, so (6-2) × 180° = 4 × 180° = 720°. 🔢",
        wrongAnswerExplanations: {
            "540°": "This is the sum of interior angles in a pentagon (5 sides), not a hexagon.",
            "900°": "This is the sum of interior angles in a heptagon (7 sides), not a hexagon.",
            "1080°": "This is the sum of interior angles in an octagon (8 sides), not a hexagon."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch4_t3_qm3',
        type: "mcq",
        question: "How many diagonals can be drawn in a pentagon?",
        options: ["2", "5", "8", "10"],
        correctAnswer: "5",
        explanation: "Number of diagonals in a polygon = n(n-3)/2. For pentagon, n=5, so 5(5-3)/2 = 5(2)/2 = 5. 📏",
        wrongAnswerExplanations: {
            "2": "A triangle has 0 diagonals, a quadrilateral has 2 diagonals, but a pentagon has more.",
            "8": "This is not the correct number of diagonals for a pentagon.",
            "10": "This is not the correct number of diagonals for a pentagon."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch4_t3_qm4',
        type: "mcq",
        question: "If the diameter of a circle is 14 cm, what is its circumference? (Use π = 3.14)",
        options: ["21.98 cm", "43.96 cm", "87.92 cm", "153.86 cm"],
        correctAnswer: "43.96 cm",
        explanation: "Circumference = πd = 3.14 × 14 = 43.96 cm. Alternatively, C = 2πr = 2 × 3.14 × 7 = 43.96 cm. 🔄",
        wrongAnswerExplanations: {
            "21.98 cm": "This is half the circumference.",
            "87.92 cm": "This is double the circumference.",
            "153.86 cm": "This is the area of the circle (πr²), not the circumference."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch4_t3_qm5',
        type: "mcq",
        question: "Which statement about circles is NOT true?",
        options: [
            "All radii in a circle are equal",
            "A diameter is twice the radius",
            "A diameter is the longest chord",
            "All chords in a circle are equal in length"
        ],
        correctAnswer: "All chords in a circle are equal in length",
        explanation: "Chords vary in length based on their distance from the center. Only diameters (chords passing through the center) are equal. ⭕",
        wrongAnswerExplanations: {
            "All radii in a circle are equal": "By definition, all radii in a circle are equal.",
            "A diameter is twice the radius": "This is true by definition: d = 2r.",
            "A diameter is the longest chord": "A diameter passes through the center and is the longest possible chord."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch4_t3_qm6',
        type: "mcq",
        question: "How many sides does a polygon have if the sum of its interior angles is 1080°?",
        options: ["6", "7", "8", "9"],
        correctAnswer: "8",
        explanation: "Sum of interior angles = (n-2) × 180°. So 1080° = (n-2) × 180°. Solving: n-2 = 6, so n = 8 sides. 🔢",
        wrongAnswerExplanations: {
            "6": "The sum of interior angles in a hexagon is 720°, not 1080°.",
            "7": "The sum of interior angles in a heptagon is 900°, not 1080°.",
            "9": "The sum of interior angles in a nonagon is 1260°, not 1080°."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch4_t3_qm7',
        type: "mcq",
        question: "If the radius of a circle is doubled, what happens to its circumference?",
        options: ["It remains the same", "It doubles", "It triples", "It quadruples"],
        correctAnswer: "It doubles",
        explanation: "Circumference = 2πr. If r doubles to 2r, then C = 2π(2r) = 4πr = 2 × (2πr) = 2 × original circumference. 📈",
        wrongAnswerExplanations: {
            "It remains the same": "Changing the radius affects the circumference.",
            "It triples": "Doubling the radius doesn't triple the circumference.",
            "It quadruples": "This would be true for the area, not the circumference."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch4_t3_qm8',
        type: "mcq",
        question: "In a polygon with 7 sides, how many diagonals can be drawn?",
        options: ["7", "14", "21", "28"],
        correctAnswer: "14",
        explanation: "Number of diagonals = n(n-3)/2. For a heptagon, n=7, so 7(7-3)/2 = 7(4)/2 = 14. 🔍",
        wrongAnswerExplanations: {
            "7": "This is not the correct number of diagonals for a heptagon.",
            "21": "This exceeds the number of diagonals possible in a heptagon.",
            "28": "This exceeds the number of diagonals possible in a heptagon."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch4_t3_qm9',
        type: "mcq",
        question: "What is the measure of each interior angle of a regular octagon?",
        options: ["108°", "120°", "135°", "150°"],
        correctAnswer: "135°",
        explanation: "In a regular octagon, each interior angle = (8-2) × 180° ÷ 8 = 6 × 180° ÷ 8 = 1080° ÷ 8 = 135°. 📐",
        wrongAnswerExplanations: {
            "108°": "108° is the interior angle of a regular pentagon, not an octagon.",
            "120°": "120° is the interior angle of a regular hexagon, not an octagon.",
            "150°": "150° is not the correct interior angle measure for a regular octagon."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch4_t3_qm10',
        type: "mcq",
        question: "Which of these polygons has the greatest number of diagonals?",
        options: ["Hexagon", "Heptagon", "Octagon", "Nonagon"],
        correctAnswer: "Nonagon",
        explanation: "Diagonals = n(n-3)/2. For nonagon (n=9): 9(9-3)/2 = 27, which is greater than others. 📊",
        wrongAnswerExplanations: {
            "Hexagon": "A hexagon has 9 diagonals, which is fewer than a nonagon.",
            "Heptagon": "A heptagon has 14 diagonals, which is fewer than a nonagon.",
            "Octagon": "An octagon has 20 diagonals, which is fewer than a nonagon."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch4_t3_qm11',
        type: "mcq",
        question: "If a circle has a radius of 7 cm, what is its circumference in terms of π?",
        options: ["7π cm", "14π cm", "21π cm", "49π cm"],
        correctAnswer: "14π cm",
        explanation: "Circumference = 2πr = 2π × 7 = 14π cm. This is the exact value using π. 🔄",
        wrongAnswerExplanations: {
            "7π cm": "This would be the circumference if the formula was πr, which is incorrect.",
            "21π cm": "This is 3 × circumference, not the correct value.",
            "49π cm": "This is 7πr, not 2πr, so it's incorrect for circumference."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch4_t3_qm12',
        type: "mcq",
        question: "What is the measure of each exterior angle in a regular pentagon?",
        options: ["36°", "60°", "72°", "108°"],
        correctAnswer: "72°",
        explanation: "In a regular polygon with n sides, each exterior angle = 360° ÷ n = 360° ÷ 5 = 72°. 🔄",
        wrongAnswerExplanations: {
            "36°": "This is not the measure of an exterior angle in a regular pentagon.",
            "60°": "This is the exterior angle of a regular hexagon, not a pentagon.",
            "108°": "This is the interior angle of a regular pentagon, not the exterior angle."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch4_t3_qm13',
        type: "mcq",
        question: "How many sides does a regular polygon have if each interior angle is 144°?",
        options: ["8", "9", "10", "12"],
        correctAnswer: "10",
        explanation: "Interior angle of regular polygon = (n-2) × 180° ÷ n. So 144° = (n-2) × 180° ÷ n. Solving gives n = 10. 🔢",
        wrongAnswerExplanations: {
            "8": "The interior angle in a regular octagon is 135°, not 144°.",
            "9": "The interior angle in a regular nonagon is 140°, not 144°.",
            "12": "The interior angle in a regular dodecagon is 150°, not 144°."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch4_t3_qm14',
        type: "mcq",
        question: "If a regular hexagon and a regular octagon each have sides of the same length, which one has a greater perimeter?",
        options: ["The hexagon", "The octagon", "Both have the same perimeter", "Cannot be determined"],
        correctAnswer: "The octagon",
        explanation: "With equal side lengths, the octagon has 8 sides while the hexagon has 6. So the octagon has a greater perimeter. 📏",
        wrongAnswerExplanations: {
            "The hexagon": "The hexagon has fewer sides of the same length, so its perimeter is smaller.",
            "Both have the same perimeter": "Different numbers of sides with the same length result in different perimeters.",
            "Cannot be determined": "With the given information, we can determine which has a greater perimeter."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch4_t3_qm15',
        type: "mcq",
        question: "A regular polygon has 20 diagonals. How many sides does it have?",
        options: ["7", "8", "9", "10"],
        correctAnswer: "8",
        explanation: "Number of diagonals = n(n-3)/2 = 20. Solving: n(n-3) = 40. n = 8 (verified by substituting). 🔍",
        wrongAnswerExplanations: {
            "7": "A heptagon has 14 diagonals, not 20.",
            "9": "A nonagon has 27 diagonals, not 20.",
            "10": "A decagon has 35 diagonals, not 20."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch4_t3_qm16',
        type: "mcq",
        question: "What happens to the circumference of a circle if its radius is tripled?",
        options: ["It increases by 3 units", "It becomes 3 times the original", "It becomes 6 times the original", "It becomes 9 times the original"],
        correctAnswer: "It becomes 3 times the original",
        explanation: "Circumference = 2πr. If r becomes 3r, then C = 2π(3r) = 6πr = 3 × (2πr) = 3 × original circumference. 📈",
        wrongAnswerExplanations: {
            "It increases by 3 units": "The change depends on the original radius, not a fixed increment.",
            "It becomes 6 times the original": "This is not the correct scaling factor.",
            "It becomes 9 times the original": "This would be true for the area, not the circumference."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch4_t3_qm17',
        type: "mcq",
        question: "In how many points can a circle intersect with a straight line?",
        options: ["0, 1, or 2 points", "Exactly 1 point", "Exactly 2 points", "Infinitely many points"],
        correctAnswer: "0, 1, or 2 points",
        explanation: "A line can miss the circle (0 points), touch it tangentially (1 point), or pass through it (2 points). ⭕",
        wrongAnswerExplanations: {
            "Exactly 1 point": "This is true only when the line is tangent to the circle.",
            "Exactly 2 points": "This is true only when the line passes through the circle but is not tangent.",
            "Infinitely many points": "A straight line cannot intersect a circle at infinitely many points."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch4_t3_qm18',
        type: "mcq",
        question: "Which of these statements about polygons is FALSE?",
        options: [
            "A polygon with 3 sides is a triangle",
            "The sum of exterior angles of any polygon is always 360°",
            "All regular polygons have equal sides and angles",
            "A polygon can have both concave and convex interior angles"
        ],
        correctAnswer: "A polygon can have both concave and convex interior angles",
        explanation: "A specific polygon is either convex (all interior angles < 180°) or concave (at least one > 180°), not both. 🔷",
        wrongAnswerExplanations: {
            "A polygon with 3 sides is a triangle": "This statement is true by definition.",
            "The sum of exterior angles of any polygon is always 360°": "This is a true property of all polygons.",
            "All regular polygons have equal sides and angles": "This is true by the definition of regular polygons."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch4_t3_qm19',
        type: "mcq",
        question: "If a regular polygon has 12 sides, what is the measure of each exterior angle?",
        options: ["30°", "36°", "45°", "60°"],
        correctAnswer: "30°",
        explanation: "Exterior angle of a regular polygon = 360° ÷ n = 360° ÷ 12 = 30°. Each exterior angle is 30°. 📐",
        wrongAnswerExplanations: {
            "36°": "This is the exterior angle of a regular decagon (10 sides), not a dodecagon.",
            "45°": "This is the exterior angle of a regular octagon (8 sides), not a dodecagon.",
            "60°": "This is the exterior angle of a regular hexagon (6 sides), not a dodecagon."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch4_t3_qm20',
        type: "mcq",
        question: "What is the sum of interior angles in a quadrilateral?",
        options: ["180°", "360°", "540°", "720°"],
        correctAnswer: "360°",
        explanation: "Sum of interior angles in a polygon = (n-2) × 180°. For a quadrilateral, n=4, so (4-2) × 180° = 2 × 180° = 360°. 🔢",
        wrongAnswerExplanations: {
            "180°": "This is the sum of interior angles in a triangle, not a quadrilateral.",
            "540°": "This is the sum of interior angles in a pentagon, not a quadrilateral.",
            "720°": "This is the sum of interior angles in a hexagon, not a quadrilateral."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    }
];
