// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 9\Chapter7\Topic6\quiz_medium.ts
// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 9\Chapter7\Topic6\quiz_medium.ts
import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl9_ch7_t6_qm1',
        type: "mcq",
        question: "In a triangle ABC, if angle A = 50°, angle B = 60°, and side AB = 6 cm, which of the following statements is true?",
        options: [
            "Side BC > side AC",
            "Side AC > side BC",
            "Side AC = side BC",
            "Cannot be determined without more information"
        ],
        correctAnswer: "Side AC > side BC",
        explanation: "Since angle B (60°) > angle A (50°), the side opposite to angle B (side AC) is greater than the side opposite to angle A (side BC), by the inequality theorem of triangles. 📏",
        wrongAnswerExplanations: {
            "Side BC > side AC": "This contradicts the inequality theorem. Since angle B > angle A, the side opposite to angle B (AC) must be greater than the side opposite to angle A (BC).",
            "Side AC = side BC": "The sides would be equal only if the angles were equal, which is not the case here.",
            "Cannot be determined without more information": "We have sufficient information to determine the relationship between sides using the inequality theorem."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch7_t6_qm2',
        type: "mcq",
        question: "In a triangle ABC, D is the midpoint of BC and E is the midpoint of AC. If AB = 8 cm, what is the length of DE?",
        options: [
            "2 cm",
            "4 cm",
            "8 cm",
            "Cannot be determined"
        ],
        correctAnswer: "4 cm",
        explanation: "By the midpoint theorem, the line joining the midpoints of two sides of a triangle is parallel to and half the length of the third side. Since AB = 8 cm, DE = AB/2 = 4 cm. 📏",
        wrongAnswerExplanations: {
            "2 cm": "This would be correct if DE were half of half the length of AB, but the midpoint theorem states it is half the length.",
            "8 cm": "This would mean DE equals AB, but the midpoint theorem states it is half the length of AB.",
            "Cannot be determined": "We have sufficient information to determine the length of DE using the midpoint theorem."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch7_t6_qm3',
        type: "mcq",
        question: "If two triangles have their corresponding angles equal, what can be said about these triangles?",
        options: [
            "They are congruent",
            "They are similar",
            "They have equal areas",
            "They have equal perimeters"
        ],
        correctAnswer: "They are similar",
        explanation: "If two triangles have their corresponding angles equal, they are similar triangles but not necessarily congruent, as their sides could be proportional rather than equal. 🔄",
        wrongAnswerExplanations: {
            "They are congruent": "Equal angles alone don't guarantee congruence. The sizes could still differ, making them similar but not congruent.",
            "They have equal areas": "Similar triangles have areas proportional to the square of their corresponding sides, not necessarily equal.",
            "They have equal perimeters": "Similar triangles have perimeters proportional to their corresponding sides, not necessarily equal."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch7_t6_qm4',
        type: "mcq",
        question: "In triangle ABC, D is a point on BC such that AD is the angle bisector of angle A. If AB = 12 cm, AC = 8 cm, what is the ratio BD:DC?",
        options: [
            "2:3",
            "3:2",
            "3:4",
            "4:3"
        ],
        correctAnswer: "3:2",
        explanation: "According to the angle bisector theorem, if AD is the angle bisector of angle A, then BD:DC = AB:AC = 12:8 = 3:2. 📊",
        wrongAnswerExplanations: {
            "2:3": "This is the inverse of the correct ratio. The angle bisector theorem gives BD:DC = AB:AC = 12:8 = 3:2.",
            "3:4": "This does not match the ratio of the sides AB:AC = 12:8 = 3:2.",
            "4:3": "This does not match the ratio of the sides AB:AC = 12:8 = 3:2."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch7_t6_qm5',
        type: "mcq",
        question: "A line parallel to the base of a triangle divides the other two sides in the ratio 2:3. In what ratio does it divide the area of the triangle?",
        options: [
            "2:3",
            "2:5",
            "4:9",
            "4:25"
        ],
        correctAnswer: "4:9",
        explanation: "If a line divides two sides of a triangle in the ratio m:n, it divides the area in the ratio m²:n². Here, the ratio is 2:3, so the area ratio is 2²:3² = 4:9. 📊",
        wrongAnswerExplanations: {
            "2:3": "This is the ratio of the sides, not the areas. For areas, we need to square the ratio.",
            "2:5": "This is the ratio of one part to the whole (2:2+3), not the ratio between the two parts of the area.",
            "4:25": "The correct calculation is 2²:3² = 4:9, not 4:25."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch7_t6_qm6',
        type: "mcq",
        question: "In a right-angled triangle, if one of the acute angles is 30°, what is the ratio of the side opposite to this angle to the hypotenuse?",
        options: [
            "1:1",
            "1:2",
            "1:√3",
            "√3:2"
        ],
        correctAnswer: "1:2",
        explanation: "In a right-angled triangle with one acute angle of 30°, the ratio of the side opposite to this angle to the hypotenuse is 1:2, as derived from the properties of a 30°-60°-90° triangle. 📐",
        wrongAnswerExplanations: {
            "1:1": "This would mean the side equals the hypotenuse, which is impossible in a right-angled triangle.",
            "1:√3": "This is the ratio of the side opposite to the 30° angle to the side adjacent to it, not to the hypotenuse.",
            "√3:2": "This is the ratio of the side opposite to the 60° angle to the hypotenuse, not the side opposite to the 30° angle."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch7_t6_qm7',
        type: "mcq",
        question: "If the angles of a triangle are in the ratio 2:3:4, what are the measures of these angles?",
        options: [
            "20°, 30°, 40°",
            "40°, 60°, 80°",
            "30°, 45°, 105°",
            "36°, 54°, 90°"
        ],
        correctAnswer: "40°, 60°, 80°",
        explanation: "If the angles are in the ratio 2:3:4, and their sum is 180°, then 2x + 3x + 4x = 180°, so 9x = 180°, and x = 20°. Thus, the angles are 40°, 60°, and 80°. 🔢",
        wrongAnswerExplanations: {
            "20°, 30°, 40°": "This gives a sum of 90°, not the required 180° for a triangle.",
            "30°, 45°, 105°": "These angles are not in the ratio 2:3:4.",
            "36°, 54°, 90°": "These angles are not in the ratio 2:3:4."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch7_t6_qm8',
        type: "mcq",
        question: "In triangle ABC, the perpendicular from A to BC meets BC at D. If BD = 8 cm and DC = 10 cm, what is the area of triangle ABC if AD = 12 cm?",
        options: [
            "96 cm²",
            "108 cm²",
            "216 cm²",
            "432 cm²"
        ],
        correctAnswer: "108 cm²",
        explanation: "The area of triangle ABC is (1/2) × BC × AD = (1/2) × (BD + DC) × AD = (1/2) × (8 + 10) × 12 = (1/2) × 18 × 12 = 108 cm². 📏",
        wrongAnswerExplanations: {
            "96 cm²": "This would be the result if BC = 16 cm instead of 18 cm.",
            "216 cm²": "This would be the result if we forgot to multiply by (1/2).",
            "432 cm²": "This is too large and likely the result of a calculation error."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch7_t6_qm9',
        type: "mcq",
        question: "Two triangles are congruent by the AAS criterion. Which of the following must be true?",
        options: [
            "They have all three angles equal",
            "They have two angles and the non-included side equal",
            "They have two angles and the included side equal",
            "They have two sides and the included angle equal"
        ],
        correctAnswer: "They have two angles and the non-included side equal",
        explanation: "In the AAS (Angle-Angle-Side) criterion, two triangles are congruent if two angles and the non-included side of one triangle are equal to the corresponding parts of the other triangle. 📐",
        wrongAnswerExplanations: {
            "They have all three angles equal": "Having all three angles equal makes the triangles similar but not necessarily congruent.",
            "They have two angles and the included side equal": "This describes the ASA criterion, not AAS.",
            "They have two sides and the included angle equal": "This describes the SAS criterion, not AAS."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch7_t6_qm10',
        type: "mcq",
        question: "In triangle ABC, points D, E, and F are the midpoints of sides AB, BC, and CA respectively. What is the ratio of the area of triangle DEF to the area of triangle ABC?",
        options: [
            "1:2",
            "1:3",
            "1:4",
            "3:4"
        ],
        correctAnswer: "1:4",
        explanation: "When the midpoints of the sides of a triangle are joined, the resulting triangle has an area that is 1/4 of the original triangle. Therefore, the ratio of the area of triangle DEF to the area of triangle ABC is 1:4. 📊",
        wrongAnswerExplanations: {
            "1:2": "This would be the ratio of the area if DEF were formed by connecting points that divide each side in a 2:1 ratio, not midpoints.",
            "1:3": "This is not the correct ratio. The midpoint triangle has 1/4 the area of the original triangle.",
            "3:4": "This suggests the midpoint triangle has 3/4 the area of the original triangle, which is incorrect."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch7_t6_qm11',
        type: "mcq",
        question: "In triangle ABC, D is a point on side BC such that BD:DC = 1:2. Point E is on side AC with AE:EC = 1:2. What is the ratio of the area of triangle ADE to the area of triangle ABC?",
        options: [
            "1:3",
            "1:6",
            "2:9",
            "3:10"
        ],
        correctAnswer: "1:6",
        explanation: "When a point divides a side of a triangle in the ratio m:n and another point divides another side in the same ratio, the triangle formed has an area in the ratio m×m:(m+n)². Here, m=1, n=2, so the ratio is 1×1:(1+2)² = 1:9. The ratio of ADE to ABC is thus 1:6. 📊",
        wrongAnswerExplanations: {
            "1:3": "This is not correct. The area ratio involves a more complex calculation based on the internal division points.",
            "2:9": "This would be the answer if the question asked for a different area ratio within the divided triangle.",
            "3:10": "This is not the correct ratio based on the given division points."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 75
    },
    {
        id: 'cl9_ch7_t6_qm12',
        type: "mcq",
        question: "If the sides of a triangle are in the ratio 3:5:7, which of the following statements is true?",
        options: [
            "The triangle is isosceles",
            "The triangle is obtuse-angled",
            "The triangle is acute-angled",
            "The triangle is right-angled"
        ],
        correctAnswer: "The triangle is obtuse-angled",
        explanation: "For a triangle with sides in ratio 3:5:7, we can check using the converse of the Pythagorean theorem. Since 3² + 5² = 34, and 7² = 49, and 34 < 49, the triangle has an obtuse angle (opposite to the longest side). 📐",
        wrongAnswerExplanations: {
            "The triangle is isosceles": "An isosceles triangle has at least two equal sides, which is not the case in the ratio 3:5:7.",
            "The triangle is acute-angled": "For an acute-angled triangle, the square of the longest side must be less than the sum of squares of the other two sides, which is not true here.",
            "The triangle is right-angled": "For a right-angled triangle, the square of the longest side must equal the sum of squares of the other two sides, which is not true here."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch7_t6_qm13',
        type: "mcq",
        question: "In triangle ABC, AB = 7 cm, BC = 8 cm, and AC = 9 cm. D is a point on BC such that AD is perpendicular to BC. What is the length of BD?",
        options: [
            "3.36 cm",
            "4 cm",
            "4.8 cm",
            "5.6 cm"
        ],
        correctAnswer: "4.8 cm",
        explanation: "Using the formula BD = (AB² + BC² - AC²)/(2×BC), we get BD = (7² + 8² - 9²)/(2×8) = (49 + 64 - 81)/16 = 32/16 = 4.8 cm. 📏",
        wrongAnswerExplanations: {
            "3.36 cm": "This is the result of an incorrect calculation.",
            "4 cm": "This would be the result if we used different side lengths in the formula.",
            "5.6 cm": "This is the result of an incorrect calculation or formula."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 75
    },
    {
        id: 'cl9_ch7_t6_qm14',
        type: "mcq",
        question: "Which of the following can determine whether a triangle is obtuse-angled based on its sides a, b, and c?",
        options: [
            "a² + b² < c²",
            "a² + b² = c²",
            "a² + b² > c²",
            "a + b < c"
        ],
        correctAnswer: "a² + b² < c²",
        explanation: "A triangle is obtuse-angled if the square of the length of one side is greater than the sum of the squares of the other two sides. If c is the longest side, then a² + b² < c² indicates an obtuse triangle. 📐",
        wrongAnswerExplanations: {
            "a² + b² = c²": "This is the Pythagorean theorem, which identifies a right-angled triangle, not an obtuse triangle.",
            "a² + b² > c²": "This condition identifies an acute-angled triangle, not an obtuse triangle.",
            "a + b < c": "This violates the triangle inequality theorem. A valid triangle must have the sum of any two sides greater than the third side."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch7_t6_qm15',
        type: "mcq",
        question: "In triangles ABC and DEF, AB = DE, ∠ABC = ∠DEF, and BC = EF. By which congruence criterion can we prove these triangles are congruent?",
        options: [
            "SSS",
            "SAS",
            "ASA",
            "AAS"
        ],
        correctAnswer: "SAS",
        explanation: "The triangles have two sides (AB = DE and BC = EF) and the included angle (∠ABC = ∠DEF) equal. Therefore, they are congruent by the SAS (Side-Angle-Side) criterion. 📏",
        wrongAnswerExplanations: {
            "SSS": "SSS requires all three sides to be equal, but we only know two sides are equal.",
            "ASA": "ASA requires two angles and the included side to be equal, but we only know one angle and two sides.",
            "AAS": "AAS requires two angles and a non-included side to be equal, but we only know one angle and two sides."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch7_t6_qm16',
        type: "mcq",
        question: "If ABCD is a quadrilateral in which AB = CD and AD = BC, what type of quadrilateral is ABCD?",
        options: [
            "Square",
            "Rectangle",
            "Rhombus",
            "Parallelogram"
        ],
        correctAnswer: "Parallelogram",
        explanation: "If opposite sides of a quadrilateral are equal (AB = CD and AD = BC), then it is a parallelogram. Note that this doesn't necessarily make it a rhombus, rectangle, or square unless additional conditions are met. 🔷",
        wrongAnswerExplanations: {
            "Square": "A square requires all sides to be equal AND all angles to be 90°. We only know that opposite sides are equal.",
            "Rectangle": "A rectangle requires all angles to be 90°. We only know that opposite sides are equal.",
            "Rhombus": "A rhombus requires all sides to be equal. We only know that opposite sides are equal."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch7_t6_qm17',
        type: "mcq",
        question: "In a right-angled triangle, if the hypotenuse is 10 cm and one of the legs is 8 cm, what is the length of the other leg?",
        options: [
            "4 cm",
            "6 cm",
            "8 cm",
            "12 cm"
        ],
        correctAnswer: "6 cm",
        explanation: "Using the Pythagorean theorem in a right-angled triangle with hypotenuse 10 cm and one leg 8 cm: a² + b² = c², so b² = c² - a² = 10² - 8² = 100 - 64 = 36, thus b = 6 cm. 📏",
        wrongAnswerExplanations: {
            "4 cm": "This would make 8² + 4² = 80, not 100, violating the Pythagorean theorem.",
            "8 cm": "This would make 8² + 8² = 128, not 100, violating the Pythagorean theorem.",
            "12 cm": "This would make 8² + 12² = 208, not 100, violating the Pythagorean theorem."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch7_t6_qm18',
        type: "mcq",
        question: "In an equilateral triangle, what is the ratio of the height to the side length?",
        options: [
            "√2:1",
            "√3:1",
            "√3:2",
            "1:2"
        ],
        correctAnswer: "√3:2",
        explanation: "In an equilateral triangle, the height h to a side of length s is given by h = (√3/2)s. Therefore, the ratio of height to side length is √3:2. 📐",
        wrongAnswerExplanations: {
            "√2:1": "This is not the correct ratio. The height of an equilateral triangle is related to the side by h = (√3/2)s.",
            "√3:1": "This would be the ratio if the formula were h = √3×s, which is not correct.",
            "1:2": "This is not the correct ratio. The height of an equilateral triangle involves √3."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch7_t6_qm19',
        type: "mcq",
        question: "If two triangles have the same area and the same height, what can you say about their bases?",
        options: [
            "The bases must be equal",
            "The bases are in the ratio of their heights",
            "The bases must be parallel",
            "Nothing can be said about their bases"
        ],
        correctAnswer: "The bases must be equal",
        explanation: "If two triangles have the same area A and the same height h, then using the formula A = (1/2) × base × height, we get base₁ = base₂ = 2A/h. Thus, the bases must be equal. 📊",
        wrongAnswerExplanations: {
            "The bases are in the ratio of their heights": "Since the heights are the same, this would imply the bases are also the same.",
            "The bases must be parallel": "The bases being parallel is not a necessary condition for triangles with equal areas and heights.",
            "Nothing can be said about their bases": "We can definitely conclude the bases are equal using the area formula."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch7_t6_qm20',
        type: "mcq",
        question: "In a triangle ABC, if the centroid G divides the median AD in the ratio 2:1, what is the distance of G from vertex A in terms of the distance between A and D?",
        options: [
            "1/3 of AD",
            "2/3 of AD",
            "1/2 of AD",
            "3/4 of AD"
        ],
        correctAnswer: "2/3 of AD",
        explanation: "The centroid of a triangle divides each median in the ratio 2:1 from the vertex. Therefore, the distance of G from vertex A is 2/3 of the length of the median AD. 🔍",
        wrongAnswerExplanations: {
            "1/3 of AD": "This would place G at 1/3 of the way from A to D, which is incorrect.",
            "1/2 of AD": "This would place G at the midpoint of AD, which is not where the centroid is located.",
            "3/4 of AD": "This places G too far from vertex A and doesn't match the 2:1 ratio."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    }
];
