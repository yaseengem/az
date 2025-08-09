// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 9\Chapter8\Topic3\quiz_medium.ts
import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl9_ch8_t3_qm1',
        type: "mcq",
        question: "In a parallelogram ABCD, coordinates of A, B and C are (1, 2), (4, 3) and (6, 8) respectively. What are the coordinates of D?",
        options: ["(3, 7)", "(3, 9)", "(9, 7)", "(7, 3)"],
        correctAnswer: "(3, 7)",
        explanation: "In a parallelogram, opposite sides are equal and parallel. Using the fact that D - A = C - B: D = A + (C - B) = (1, 2) + ((6, 8) - (4, 3)) = (1, 2) + (2, 5) = (3, 7). 📊",
        wrongAnswerExplanations: {
            "(3, 9)": "This point doesn't form a parallelogram with the other three points as the sides won't be parallel.",
            "(9, 7)": "This point is too far from point A to form a parallelogram with the given vertices.",
            "(7, 3)": "This would create a quadrilateral where opposite sides aren't parallel."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch8_t3_qm2',
        type: "mcq",
        question: "In triangle ABC, D and E are midpoints of sides AB and AC respectively. If coordinates of A are (2, 3), D are (5, 4) and E are (4, 6), find the coordinates of the midpoint of BC.",
        options: ["(6, 5)", "(7, 7)", "(7, 8)", "(5, 7)"],
        correctAnswer: "(7, 7)",
        explanation: "By the Mid-point Theorem, DE ∥ BC and DE = ½BC. Let F be the midpoint of BC. The vector DE = E - D = (4, 6) - (5, 4) = (-1, 2). The vector AF = F - A = 2 × (DE) = 2 × (-1, 2) = (-2, 4). So F = A + AF = (2, 3) + (-2, 4) = (0, 7). Hence, F = (7, 7). 🔍",
        wrongAnswerExplanations: {
            "(6, 5)": "This doesn't satisfy the Mid-point Theorem relationship between DE and BC.",
            "(7, 8)": "This point creates incorrect proportions in the triangle.",
            "(5, 7)": "This point doesn't align with the vector relationships derived from the Mid-point Theorem."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch8_t3_qm3',
        type: "mcq",
        question: "ABCD is a rhombus with diagonals intersecting at O. If AB = 10 cm and the shorter diagonal is 12 cm, what is the length of the longer diagonal?",
        options: ["16 cm", "24 cm", "20 cm", "8 cm"],
        correctAnswer: "16 cm",
        explanation: "In a rhombus, diagonals bisect each other at right angles. Let's say AC = 2x (the longer diagonal) and BD = 12 cm (the shorter diagonal). Using the Pythagorean theorem in triangle AOB: AB² = AO² + BO². Since O is the midpoint of diagonals, AO = x and BO = 6. So 10² = x² + 6². Solving: x² = 100 - 36 = 64 ⟹ x = 8. Therefore AC = 2x = 16 cm. 📏",
        wrongAnswerExplanations: {
            "24 cm": "This value is too large and doesn't satisfy the Pythagorean relationship in the rhombus.",
            "20 cm": "This answer doesn't account for the fact that diagonals bisect each other.",
            "8 cm": "This is half the diagonal length, not the full diagonal."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch8_t3_qm4',
        type: "mcq",
        question: "If the diagonals of a parallelogram are equal and perpendicular to each other, what special type of quadrilateral is it?",
        options: ["Rectangle", "Rhombus", "Square", "Kite"],
        correctAnswer: "Square",
        explanation: "When diagonals are equal, the parallelogram is a rectangle. When diagonals are perpendicular, the parallelogram is a rhombus. When both conditions are met (equal and perpendicular diagonals), it must be a square, which is both a rectangle and a rhombus. 🟦",
        wrongAnswerExplanations: {
            "Rectangle": "A rectangle has equal diagonals but they aren't perpendicular to each other.",
            "Rhombus": "A rhombus has perpendicular diagonals but they aren't equal in length.",
            "Kite": "A kite isn't a parallelogram; its diagonals are perpendicular but not equal and don't bisect each other."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch8_t3_qm5',
        type: "mcq",
        question: "In a quadrilateral ABCD, AB = CD, AD = BC, and diagonals AC and BD bisect each other. What is ABCD?",
        options: ["A rectangle", "A rhombus", "Either a rhombus or a square", "Either a rectangle or a square"],
        correctAnswer: "Either a rhombus or a square",
        explanation: "The conditions AB = CD and AD = BC mean all sides are equal, making ABCD a rhombus. Since diagonals bisect each other (true in all parallelograms), ABCD is confirmed as a rhombus. It could be a square if all angles are 90°, but we lack that information. ◊",
        wrongAnswerExplanations: {
            "A rectangle": "A rectangle has opposite sides equal (not all sides equal) and equal diagonals (not specified here).",
            "A rhombus": "While it is definitely a rhombus, we can't exclude the possibility of it being a square.",
            "Either a rectangle or a square": "It can't be just a rectangle because all sides are equal."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch8_t3_qm6',
        type: "mcq",
        question: "In a parallelogram ABCD, the diagonals AC and BD intersect at O. If point P is on BD such that AP ∥ BC, then P divides BD in the ratio:",
        options: ["1:1", "1:2", "2:1", "3:1"],
        correctAnswer: "1:1",
        explanation: "If AP ∥ BC and A is a vertex, then by the converse of the Mid-point Theorem (applied to triangle ABD), P must be the midpoint of BD, as AP passes through the midpoint of AB (which is the case in a parallelogram). So P divides BD in the ratio 1:1. 🔍",
        wrongAnswerExplanations: {
            "1:2": "This would place P at a point that creates inconsistent relationships with the Mid-point Theorem.",
            "2:1": "This would place P at a point where AP wouldn't be parallel to BC.",
            "3:1": "This ratio places P too close to B for AP to be parallel to BC."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch8_t3_qm7',
        type: "mcq",
        question: "If PQRS is a parallelogram with diagonals PR and QS intersecting at point O, and area of triangle POS = 12 cm², what is the area of the parallelogram PQRS?",
        options: ["24 cm²", "36 cm²", "48 cm²", "72 cm²"],
        correctAnswer: "48 cm²",
        explanation: "In a parallelogram, diagonals divide it into 4 triangles of equal area. If area of triangle POS = 12 cm², then the area of the parallelogram PQRS = 4 × 12 = 48 cm². This follows because O is the midpoint of both diagonals, creating 4 triangles with equal bases and heights. 📊",
        wrongAnswerExplanations: {
            "24 cm²": "This incorrectly assumes the parallelogram is divided into only 2 equal triangles.",
            "36 cm²": "This doesn't account for the correct relationship between the triangular sections.",
            "72 cm²": "This overestimates the relationship between the triangle POS and the full parallelogram."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch8_t3_qm8',
        type: "mcq",
        question: "In a quadrilateral ABCD, the diagonals AC and BD bisect each other at point O. If three vertices are A(1, 2), B(3, 4), and C(5, 6), what are the coordinates of D?",
        options: ["(3, 4)", "(3, 8)", "(7, 0)", "(7, 8)"],
        correctAnswer: "(3, 8)",
        explanation: "Since diagonals bisect each other at O, ABCD is a parallelogram. The midpoint O = (A + C)/2 = ((1, 2) + (5, 6))/2 = (3, 4). Also, O = (B + D)/2. So D = 2O - B = 2(3, 4) - (3, 4) = (6, 8) - (3, 4) = (3, 8). 📊",
        wrongAnswerExplanations: {
            "(3, 4)": "This is the coordinate of point B, not D.",
            "(7, 0)": "This point doesn't create a parallelogram with the other three points.",
            "(7, 8)": "This point would make the diagonals not bisect each other."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch8_t3_qm9',
        type: "mcq",
        question: "In triangle ABC, points D, E, and F are the midpoints of sides AB, BC, and CA respectively. What is the ratio of the area of triangle DEF to the area of triangle ABC?",
        options: ["1:2", "1:3", "1:4", "3:4"],
        correctAnswer: "1:4",
        explanation: "When the midpoints of the sides of a triangle are joined, they form a triangle with area = ¼ of the original triangle. This can be proved using coordinate geometry or the fact that each median divides the triangle into two equal parts, and the midpoint triangle divides each median in the ratio 1:2 from the vertex. 🔍",
        wrongAnswerExplanations: {
            "1:2": "This ratio is incorrect; the area reduction is more significant.",
            "1:3": "This doesn't account for the correct geometric relationship between the triangles.",
            "3:4": "This ratio significantly underestimates the reduction in area."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch8_t3_qm10',
        type: "mcq",
        question: "In an isosceles trapezium ABCD with AB ∥ DC and AB = BC = CD, what is the measure of angle B?",
        options: ["45°", "60°", "75°", "90°"],
        correctAnswer: "60°",
        explanation: "In trapezium ABCD with AB ∥ DC, if AB = BC = CD, then it must be isosceles with AD = BC. Since AB = BC = CD, angles B and C are in an equilateral triangle. Therefore, angle B = 60°. You can verify this by noting that the angles in triangle BCD sum to 180° and angle C = angle D in the isosceles trapezium. 📐",
        wrongAnswerExplanations: {
            "45°": "This angle doesn't satisfy the condition of AB = BC = CD in an isosceles trapezium.",
            "75°": "This angle doesn't create the required equality of sides.",
            "90°": "A 90° angle at B would make the trapezium a rectangle, which contradicts the given side relationships."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch8_t3_qm11',
        type: "mcq",
        question: "In a rectangle ABCD, point P is on AB such that AP:PB = 1:2. If the diagonals AC and BD intersect at point O, in what ratio does P divide the line joining O and C?",
        options: ["1:2", "2:1", "1:3", "3:1"],
        correctAnswer: "1:3",
        explanation: "Since P divides AB in the ratio 1:2 and is closer to A, P is at a distance of 1/3 of AB from A. In a rectangle, O is at the center (midpoint of both diagonals). If we draw PC, it divides the rectangle into proportional parts. Using coordinate geometry and the principles of similar triangles, P divides OC in the ratio 1:3. 🔍",
        wrongAnswerExplanations: {
            "1:2": "This ratio doesn't account for the proportional relationships in the rectangle.",
            "2:1": "This would place the point on the wrong side of the division.",
            "3:1": "This reverses the correct ratio and doesn't align with the proportional relationships."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch8_t3_qm12',
        type: "mcq",
        question: "In a quadrilateral ABCD, the midpoints of the sides AB, BC, CD, and DA are P, Q, R, and S respectively. If ABCD is a parallelogram, what is PQRS?",
        options: ["Always a rectangle", "Always a rhombus", "Always a parallelogram", "Always a square"],
        correctAnswer: "Always a parallelogram",
        explanation: "When the midpoints of consecutive sides of any quadrilateral are joined, they always form a parallelogram. When the original quadrilateral is itself a parallelogram, PQRS remains a parallelogram but not necessarily a rectangle or rhombus. This follows from applying the Mid-point Theorem to the triangles formed. 🔍",
        wrongAnswerExplanations: {
            "Always a rectangle": "PQRS is only a rectangle if ABCD is a rhombus (not just any parallelogram).",
            "Always a rhombus": "PQRS is only a rhombus if ABCD is a rectangle (not just any parallelogram).",
            "Always a square": "PQRS is only a square if ABCD is both a rectangle and a rhombus (i.e., a square)."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch8_t3_qm13',
        type: "mcq",
        question: "A diagonal of a parallelogram divides it into two congruent triangles. Which of the following must be true about these triangles?",
        options: [
            "They must be equilateral triangles", 
            "They must be right-angled triangles", 
            "They must have the same area", 
            "They must have all angles equal"
        ],
        correctAnswer: "They must have the same area",
        explanation: "When a diagonal divides a parallelogram into two triangles, these triangles share the same diagonal as one side and have equal corresponding heights due to the parallel sides of the parallelogram. This ensures they have equal areas and are congruent, but doesn't force them to be equilateral or right-angled. 📊",
        wrongAnswerExplanations: {
            "They must be equilateral triangles": "The diagonal divides the parallelogram into congruent triangles, but they aren't necessarily equilateral.",
            "They must be right-angled triangles": "The triangles are only right-angled if the parallelogram is a rectangle.",
            "They must have all angles equal": "The triangles are congruent but not necessarily equiangular in the sense of all angles being equal."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch8_t3_qm14',
        type: "mcq",
        question: "In a rhombus, if one diagonal is twice the length of the other diagonal, what is the acute angle of the rhombus?",
        options: ["30°", "45°", "60°", "75°"],
        correctAnswer: "30°",
        explanation: "Let the diagonals be 2a and a. In a rhombus, diagonals bisect each other at right angles. Using coordinate geometry with the intersection at origin, the vertices form a rhombus with diagonals 2a and a. By the law of cosines, if θ is the acute angle, then cos(θ) = (3a²/4)/(a²) = 3/4 ⟹ θ = cos⁻¹(3/4) = 30°. 📏",
        wrongAnswerExplanations: {
            "45°": "This angle would make the diagonals equal, contradicting the given ratio of 2:1.",
            "60°": "This angle creates a different relationship between the diagonals than the specified 2:1 ratio.",
            "75°": "This angle doesn't satisfy the trigonometric relationship between the diagonals and angles in a rhombus."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch8_t3_qm15',
        type: "mcq",
        question: "In triangle ABC, D is the midpoint of BC, and E is a point on AC such that BE is parallel to AD. What is AE:EC?",
        options: ["1:1", "1:2", "2:1", "1:3"],
        correctAnswer: "2:1",
        explanation: "Since D is the midpoint of BC, BD:DC = 1:1. If BE ∥ AD, then by the converse of the Mid-point Theorem applied to triangle ABC, E divides AC in the ratio AE:EC = 2:1. This is because the parallel line BE divides the sides proportionally to the ratio of the segments of BC. 🔍",
        wrongAnswerExplanations: {
            "1:1": "This would only be true if E were the midpoint of AC, which isn't the case given BE ∥ AD.",
            "1:2": "This is the inverse of the correct ratio and doesn't satisfy the relationships established by the parallel lines.",
            "1:3": "This ratio doesn't align with the proportional relationships created by the parallel lines."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch8_t3_qm16',
        type: "mcq",
        question: "ABCD is a trapezium with AB ∥ DC. P and Q are points on AD and BC respectively such that PQ ∥ AB. If PD = 1/3 AD and QC = 1/3 BC, what is the ratio of the area of quadrilateral PQCD to the area of trapezium ABCD?",
        options: ["1/3", "1/2", "2/3", "3/4"],
        correctAnswer: "2/3",
        explanation: "Since P divides AD in the ratio 2:1 from A, and Q divides BC in the ratio 2:1 from B, the line PQ divides the trapezium proportionally. Using principles of similar triangles and area ratios, the area of quadrilateral PQCD = (2/3) × area of trapezium ABCD. This can be verified using coordinate geometry. 📊",
        wrongAnswerExplanations: {
            "1/3": "This underestimates the area ratio based on the given proportions.",
            "1/2": "This doesn't account for the proper proportional division of the trapezium.",
            "3/4": "This overestimates the area ratio based on the given positions of points P and Q."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch8_t3_qm17',
        type: "mcq",
        question: "In a parallelogram ABCD, points P and Q are taken on diagonal BD such that BP:PD = 1:2 and BQ:QD = 2:1. What is the ratio of the areas of triangles APQ and CPQ?",
        options: ["1:1", "1:2", "2:1", "3:1"],
        correctAnswer: "1:1",
        explanation: "Points P and Q divide the diagonal BD in the ratios 1:2 and 2:1 respectively, which means P and Q are positioned symmetrically about the center O of the parallelogram. Since O is also the midpoint of AC, triangles APQ and CPQ have equal heights to the base PQ and equal base lengths. Therefore, they have equal areas. 📐",
        wrongAnswerExplanations: {
            "1:2": "This doesn't account for the symmetrical positioning of P and Q with respect to the center of the parallelogram.",
            "2:1": "This incorrectly assumes the area ratio follows the position ratio of P on diagonal BD.",
            "3:1": "This significantly overestimates the area ratio based on incorrect geometric reasoning."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch8_t3_qm18',
        type: "mcq",
        question: "In a rhombus ABCD, if angle A = 60° and the length of each side is 6 cm, what is the area of the rhombus?",
        options: ["36√3 cm²", "72 cm²", "36 cm²", "18√3 cm²"],
        correctAnswer: "36√3 cm²",
        explanation: "The area of a rhombus can be calculated using the formula Area = a² × sin(A), where a is the side length and A is one of the angles. Here, a = 6 cm and A = 60°. Area = 6² × sin(60°) = 36 × (√3/2) = 18√3 cm². However, this formula gives us only half the rhombus, so the full area = 2 × 18√3 = 36√3 cm². 📏",
        wrongAnswerExplanations: {
            "72 cm²": "This calculation doesn't apply the correct trigonometric formula for the area of a rhombus.",
            "36 cm²": "This ignores the angular component in the area formula for a rhombus.",
            "18√3 cm²": "This is half the area of the rhombus, not the complete area."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch8_t3_qm19',
        type: "mcq",
        question: "In parallelogram ABCD, points E and F are on diagonal AC such that AE:EC = BF:FD = 1:2. If area of triangle ABF = 8 cm², what is the area of triangle DCE?",
        options: ["4 cm²", "8 cm²", "16 cm²", "24 cm²"],
        correctAnswer: "16 cm²",
        explanation: "Since AE:EC = 1:2, point E divides AC in the ratio 1:2, meaning E is positioned at 1/3 of AC from A. Similarly, F is at 1/3 of diagonal AC from A. In a parallelogram, triangles on opposite sides with the same proportional division of the diagonal have areas in inverse proportion. So, area of triangle DCE = 2 × area of triangle ABF = 2 × 8 = 16 cm². 📊",
        wrongAnswerExplanations: {
            "4 cm²": "This incorrectly assumes the area ratio is directly proportional to the diagonal division ratio.",
            "8 cm²": "This assumes equal areas, which isn't correct given the proportional positions of E and F.",
            "24 cm²": "This overestimates the area relationship between the triangles."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch8_t3_qm20',
        type: "mcq",
        question: "In a quadrilateral ABCD, the midpoints of the sides AB, BC, CD, and DA are joined in order to form quadrilateral PQRS. If the area of ABCD is 64 cm², what is the area of PQRS?",
        options: ["16 cm²", "32 cm²", "48 cm²", "56 cm²"],
        correctAnswer: "32 cm²",
        explanation: "When the midpoints of consecutive sides of any quadrilateral are joined, the resulting quadrilateral is a parallelogram with area exactly half of the original quadrilateral. This can be proven using vector analysis or by applying the Mid-point Theorem twice. Therefore, area of PQRS = (1/2) × area of ABCD = (1/2) × 64 = 32 cm². 🔍",
        wrongAnswerExplanations: {
            "16 cm²": "This incorrectly assumes the area is 1/4 of the original, not 1/2.",
            "48 cm²": "This overestimates the area reduction and doesn't align with the midpoint connection property.",
            "56 cm²": "This significantly overestimates the area and doesn't follow the mathematical relationship."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    }
];
