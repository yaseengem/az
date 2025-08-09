import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl9_ch9_t1_qe1',
        type: "mcq",
        question: "What is the relationship between the angle subtended by an arc at the center and the angle subtended by the same arc at any point on the alternate segment of the circle?",
        options: [
            "They are equal",
            "The angle at the center is twice the angle at any point on the circle",
            "The angle at any point on the circle is twice the angle at the center",
            "They are supplementary (sum to 180°)"
        ],
        correctAnswer: "The angle at the center is twice the angle at any point on the circle",
        explanation: "According to the fundamental theorem of circle geometry, the angle subtended by an arc at the center is twice the angle subtended by the same arc at any point on the alternate segment of the circle. This is often written as ∠AOB = 2 × ∠ACB. 📐",
        wrongAnswerExplanations: {
            "They are equal": "This is incorrect. The angle at the center is always larger than the angle at any point on the circle for the same arc.",
            "The angle at any point on the circle is twice the angle at the center": "This is the opposite of the correct relationship. The angle at the center is twice the angle at any point, not the other way around.",
            "They are supplementary (sum to 180°)": "This is incorrect. While some angles in a circle have supplementary relationships, this doesn't apply to the relationship between the central angle and the inscribed angle for the same arc."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch9_t1_qe2',
        type: "mcq",
        question: "If a chord AB of a circle subtends an angle of 50° at the center, what angle does it subtend at any point on the alternate segment of the circle?",
        options: [
            "25°",
            "50°",
            "100°",
            "130°"
        ],
        correctAnswer: "25°",
        explanation: "According to the theorem, angle at center = 2 × angle at any point on the alternate segment. So if the angle at center is 50°, then the angle at any point on the alternate segment = 50° ÷ 2 = 25°. 🔍",
        wrongAnswerExplanations: {
            "50°": "This is incorrect. The angle at any point on the alternate segment would be half of the angle at the center, not equal to it.",
            "100°": "This is incorrect. This would be twice the angle at the center, which is the opposite of the correct relationship.",
            "130°": "This is incorrect. There is no such relationship that would give 130° from a central angle of 50°."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch9_t1_qe3',
        type: "mcq",
        question: "What is the angle subtended by a semicircle at any point on the circle?",
        options: [
            "45°",
            "60°",
            "90°",
            "180°"
        ],
        correctAnswer: "90°",
        explanation: "A semicircle is formed by a diameter of the circle. The angle subtended by a diameter at any point on the circle is always 90° (a right angle). This is a special case known as -the angle in a semicircle is a right angle. 📏",
        wrongAnswerExplanations: {
            "45°": "This is incorrect. The angle in a semicircle is always 90°, not 45°.",
            "60°": "This is incorrect. The angle in a semicircle is always 90°, not 60°.",
            "180°": "This is incorrect. 180° is the angle subtended by a semicircle at the center of the circle, not at a point on the circle."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch9_t1_qe4',
        type: "mcq",
        question: "In a circle, angles in the same segment are:",
        options: [
            "Always different",
            "Equal to the central angle",
            "Equal to each other",
            "Supplementary to each other"
        ],
        correctAnswer: "Equal to each other",
        explanation: "All angles subtended by the same arc at points on the same side of the chord (i.e., in the same segment) are equal to each other. This is a fundamental property of circle geometry. 🔄",
        wrongAnswerExplanations: {
            "Always different": "This is incorrect. Angles in the same segment are always equal, not different.",
            "Equal to the central angle": "This is incorrect. Angles in the same segment are equal to each other but not to the central angle (which is twice as large).",
            "Supplementary to each other": "This is incorrect. Angles in the same segment are equal, not supplementary."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch9_t1_qe5',
        type: "mcq",
        question: "If chord AB subtends an angle of 30° at point C on the circle, what angle will it subtend at another point D on the same side of the chord?",
        options: [
            "15°",
            "30°",
            "60°",
            "180°"
        ],
        correctAnswer: "30°",
        explanation: "According to the theorem 'angles in the same segment are equal,' if points C and D are on the same side of chord AB, then ∠ACB = ∠ADB = 30°. This is why all points on the same arc see the same chord at the same angle. 👁️",
        wrongAnswerExplanations: {
            "15°": "This is incorrect. Angles in the same segment remain equal, not half.",
            "60°": "This is incorrect. This would be the angle at the center, not at another point on the same segment.",
            "180°": "This is incorrect. There's no situation where a chord would subtend an angle of 180° on the circle."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch9_t1_qe6',
        type: "mcq",
        question: "If two chords AB and CD intersect at point P inside a circle, which of the following relationships is true?",
        options: [
            "∠APD = ∠BPC",
            "∠APD = ∠CPB",
            "∠APD + ∠CPB = 90°",
            "∠APD + ∠CPB = 180°"
        ],
        correctAnswer: "∠APD + ∠CPB = 180°",
        explanation: "When two chords AB and CD intersect at a point P inside the circle, the angles ∠APD and ∠CPB are supplementary (sum to 180°). This follows from the properties of intersecting chords in a circle. 📊",
        wrongAnswerExplanations: {
            "∠APD = ∠BPC": "This is incorrect. These angles are not necessarily equal when chords intersect inside a circle.",
            "∠APD = ∠CPB": "This is incorrect. These angles are supplementary, not equal.",
            "∠APD + ∠CPB = 90°": "This is incorrect. The sum is 180°, not 90°."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch9_t1_qe7',
        type: "mcq",
        question: "What is the measure of the central angle in a circle if the corresponding inscribed angle is 35°?",
        options: [
            "17.5°",
            "35°",
            "70°",
            "140°"
        ],
        correctAnswer: "70°",
        explanation: "Since the angle at the center is twice the angle at any point on the circle for the same arc, if the inscribed angle is 35°, then the central angle = 2 × 35° = 70°. This is a direct application of the central angle theorem. 🧮",
        wrongAnswerExplanations: {
            "17.5°": "This is incorrect. The central angle should be twice, not half, of the inscribed angle.",
            "35°": "This is incorrect. The central angle is not equal to the inscribed angle but twice its value.",
            "140°": "This is incorrect. The central angle would be 70°, not 140°."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch9_t1_qe8',
        type: "mcq",
        question: "In a circle, if AB is a diameter and C is any point on the circle (except A and B), what is always true about triangle ABC?",
        options: [
            "It is equilateral",
            "It is isosceles",
            "It is right-angled",
            "It is obtuse-angled"
        ],
        correctAnswer: "It is right-angled",
        explanation: "When AB is a diameter of a circle and C is any point on the circle, angle ACB is always 90° (a right angle) according to the theorem 'angle in a semicircle is a right angle.' Therefore, triangle ABC is always right-angled at C. 📐",
        wrongAnswerExplanations: {
            "It is equilateral": "This is incorrect. The triangle formed is not necessarily equilateral; it's specifically right-angled.",
            "It is isosceles": "This is incorrect. The triangle would only be isosceles if C were at a very specific position, but it's always right-angled regardless.",
            "It is obtuse-angled": "This is incorrect. The triangle is right-angled, not obtuse-angled."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch9_t1_qe9',
        type: "mcq",
        question: "In a circle with center O, points A, B, and C lie on the circle. If angle AOB = 120°, what is the measure of angle ACB where C is on the major arc AB?",
        options: [
            "40°",
            "60°",
            "120°",
            "240°"
        ],
        correctAnswer: "60°",
        explanation: "The angle subtended by an arc at any point on the circle is half the central angle subtended by the same arc. Since the central angle AOB = 120°, the angle ACB = 120° ÷ 2 = 60°. This follows directly from the central angle theorem. 🔄",
        wrongAnswerExplanations: {
            "40°": "This is incorrect. The angle should be half of the central angle, which would be 60°.",
            "120°": "This is incorrect. This equals the central angle, but the angle at point C should be half of the central angle.",
            "240°": "This is incorrect. This value is twice the central angle, not half of it."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch9_t1_qe10',
        type: "mcq",
        question: "Which of the following statements is NOT true about angles in a circle?",
        options: [
            "The angle subtended by an arc at the center is twice the angle subtended by it at any point on the circle",
            "Angles in the same segment are equal",
            "The angle in a semicircle is a right angle",
            "The sum of all angles in a circle is always 360°"
        ],
        correctAnswer: "The sum of all angles in a circle is always 360°",
        explanation: "The statement 'The sum of all angles in a circle is always 360°' is not meaningful in circle geometry. While 360° represents a full rotation around a point, we don't speak of the sum of all angles in a circle' as a property. The other three statements are fundamental theorems in circle geometry. ❌",
        wrongAnswerExplanations: {
            "The angle subtended by an arc at the center is twice the angle subtended by it at any point on the circle": "This is a true statement, known as the central angle theorem.",
            "Angles in the same segment are equal": "This is a true statement, known as the inscribed angle theorem for same segment.",
            "The angle in a semicircle is a right angle": "This is a true statement, a special case of the central angle theorem."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch9_t1_qe11',
        type: "mcq",
        question: "If an arc of a circle subtends an angle of 40° at the center, what angle does the same arc subtend at a point on the circle in the alternate segment?",
        options: [
            "20°",
            "40°",
            "80°",
            "140°"
        ],
        correctAnswer: "20°",
        explanation: "According to the central angle theorem, the angle subtended by an arc at the center is twice the angle subtended by the same arc at any point on the alternate segment. So if the central angle is 40°, then the angle at a point on the circle = 40° ÷ 2 = 20°. 📊",
        wrongAnswerExplanations: {
            "40°": "This is incorrect. The angle at a point on the circle would be half of the central angle, not equal to it.",
            "80°": "This is incorrect. This would be twice the central angle, not half of it.",
            "140°": "This is incorrect. There is no relationship that would give 140° from a central angle of 40°."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch9_t1_qe12',
        type: "mcq",
        question: "In a circle, if an arc subtends an angle of 25° at a point on the circle, what angle does it subtend at another point in the same segment?",
        options: [
            "25°",
            "50°",
            "75°",
            "125°"
        ],
        correctAnswer: "25°",
        explanation: "According to the theorem 'angles in the same segment are equal,' all angles subtended by the same arc at points in the same segment are equal. So if an arc subtends an angle of 25° at one point, it will also subtend an angle of 25° at any other point in the same segment. 🔄",
        wrongAnswerExplanations: {
            "50°": "This is incorrect. This would be the angle at the center, not at another point in the same segment.",
            "75°": "This is incorrect. There's no relationship that would give 75° from an inscribed angle of 25°.",
            "125°": "This is incorrect. There's no relationship that would give 125° from an inscribed angle of 25°."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch9_t1_qe13',
        type: "mcq",
        question: "If chord AB subtends a central angle of 90° in a circle with center O, what angle does it subtend at any point on the major arc AB?",
        options: [
            "45°",
            "90°",
            "180°",
            "270°"
        ],
        correctAnswer: "45°",
        explanation: "The angle subtended by a chord at any point on the alternate segment is half of the central angle. Since the central angle is 90°, the angle subtended by the chord AB at any point P on the major arc AB is 90° ÷ 2 = 45°. 📐",
        wrongAnswerExplanations: {
            "90°": "This equals the central angle, but the angle at a point on the major arc should be half of the central angle.",
            "180°": "This is incorrect. This is twice the central angle, not half of it.",
            "270°": "This is incorrect. There's no relationship that would give 270° from a central angle of 90°."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch9_t1_qe14',
        type: "mcq",
        question: "In a circle, if two chords AB and CD are parallel, what can be said about the arcs AC and BD?",
        options: [
            "They are equal",
            "They are supplementary (sum to 180°)",
            "They are complementary (sum to 90°)",
            "Nothing definite can be said"
        ],
        correctAnswer: "They are equal",
        explanation: "When two chords AB and CD are parallel in a circle, the arcs AC and BD are equal. This is because parallel chords intercept equal arcs on a circle. This property is useful in proving other circle theorems. 🔄",
        wrongAnswerExplanations: {
            "They are supplementary (sum to 180°)": "This is incorrect. Parallel chords intercept equal arcs, not supplementary arcs.",
            "They are complementary (sum to 90°)": "This is incorrect. Parallel chords intercept equal arcs, not complementary arcs.",
            "Nothing definite can be said": "This is incorrect. We can definitely say that the arcs are equal when the chords are parallel."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch9_t1_qe15',
        type: "mcq",
        question: "What is the measure of an angle formed by a tangent to a circle and a chord drawn from the point of contact?",
        options: [
            "Equal to the angle in the alternate segment",
            "Twice the angle in the alternate segment",
            "Half the angle in the alternate segment",
            "Equal to the central angle"
        ],
        correctAnswer: "Equal to the angle in the alternate segment",
        explanation: "The angle between a tangent and a chord drawn from the point of contact is equal to the angle in the alternate segment. This is known as the alternate segment theorem and is very useful in problems involving tangents and chords. 📏",
        wrongAnswerExplanations: {
            "Twice the angle in the alternate segment": "This is incorrect. The angle equals, not doubles, the angle in the alternate segment.",
            "Half the angle in the alternate segment": "This is incorrect. The angle equals, not halves, the angle in the alternate segment.",
            "Equal to the central angle": "This is incorrect. The angle is not related to the central angle in this way."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch9_t1_qe16',
        type: "mcq",
        question: "In a circle, chord AB subtends an angle of 80° at the center. What is the angle subtended by the same chord at a point on the minor arc AB?",
        options: [
            "40°",
            "80°",
            "100°",
            "160°"
        ],
        correctAnswer: "80°",
        explanation: "The angle subtended by a chord at a point on the same arc as the chord is not related by the central angle theorem. For a point P on the minor arc AB, the angle APB would be related to the supplement of the central angle, not the central angle itself. Since this is a special case, the angle would be 80°. 📐",
        wrongAnswerExplanations: {
            "40°": "This would be the angle at a point on the major arc AB, not the minor arc.",
            "100°": "This is incorrect. There's no relationship that would give 100° from a central angle of 80°.",
            "160°": "This is incorrect. There's no relationship that would give 160° from a central angle of 80°."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch9_t1_qe17',
        type: "mcq",
        question: "What special quadrilateral is formed when all four vertices lie on a circle?",
        options: [
            "Rectangle",
            "Rhombus",
            "Cyclic quadrilateral",
            "Kite"
        ],
        correctAnswer: "Cyclic quadrilateral",
        explanation: "When all four vertices of a quadrilateral lie on a circle, it is called a cyclic quadrilateral. These quadrilaterals have special properties, such as opposite angles being supplementary (summing to 180°). 🔷",
        wrongAnswerExplanations: {
            "Rectangle": "While a rectangle can be cyclic, not all cyclic quadrilaterals are rectangles.",
            "Rhombus": "A rhombus is generally not cyclic unless it's also a square.",
            "Kite": "While certain kites can be cyclic, not all cyclic quadrilaterals are kites."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch9_t1_qe18',
        type: "mcq",
        question: "In a cyclic quadrilateral ABCD, if ∠A = 80°, what is ∠C?",
        options: [
            "80°",
            "100°",
            "160°",
            "180°"
        ],
        correctAnswer: "100°",
        explanation: "In a cyclic quadrilateral, opposite angles are supplementary (sum to 180°). So if ∠A = 80°, then ∠C = 180° - 80° = 100°. This property is fundamental to solving problems involving cyclic quadrilaterals. 🧮",
        wrongAnswerExplanations: {
            "80°": "This is incorrect. Opposite angles in a cyclic quadrilateral are supplementary, not equal.",
            "160°": "This is incorrect. The opposite angle would be 180° - 80° = 100°, not 160°.",
            "180°": "This is incorrect. While the sum of opposite angles is 180°, the value of ∠C would be 100°, not 180°."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch9_t1_qe19',
        type: "mcq",
        question: "If a chord AB subtends an angle of 50° at the center O of a circle, what is the measure of the arc AB?",
        options: [
            "25°",
            "50°",
            "100°",
            "130°"
        ],
        correctAnswer: "50°",
        explanation: "The measure of an arc is equal to the central angle that subtends it. So if chord AB subtends an angle of 50° at the center O, then the measure of arc AB is also 50°. This is a basic definition in circle geometry. 🌓",
        wrongAnswerExplanations: {
            "25°": "This is incorrect. The arc measure equals the central angle, not half of it.",
            "100°": "This is incorrect. The arc measure equals the central angle, not twice it.",
            "130°": "This is incorrect. There's no relationship that would give 130° from a central angle of 50°."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch9_t1_qe20',
        type: "mcq",
        question: "Which of the following is a correct statement about circles?",
        options: [
            "All radii of a circle are perpendicular to each other",
            "A diameter always bisects a chord that it intersects",
            "The angle subtended by any chord at the center is always 90°",
            "All chords of equal length subtend equal angles at the center"
        ],
        correctAnswer: "All chords of equal length subtend equal angles at the center",
        explanation: "Equal chords subtend equal angles at the center of a circle. This is because the distance from the center to a chord is inversely related to the chord's length. So if two chords have equal length, they will subtend equal angles at the center. 📏",
        wrongAnswerExplanations: {
            "All radii of a circle are perpendicular to each other": "This is incorrect. Radii can form any angle with each other, not just 90°.",
            "A diameter always bisects a chord that it intersects": "This is only true if the diameter is perpendicular to the chord, not in general.",
            "The angle subtended by any chord at the center is always 90°": "This is incorrect. Chords can subtend various angles at the center, not just 90°."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    }
];
