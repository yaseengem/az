import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl9_ch7_t5_qe1',
        type: "mcq",
        question: "What is another name for the RHS congruence criterion?",
        options: [
            "Angle-Side-Side",
            "Side-Angle-Side",
            "Hypotenuse-Leg",
            "Angle-Angle-Side"
        ],
        correctAnswer: "Hypotenuse-Leg",
        explanation: "The RHS (Right angle-Hypotenuse-Side) criterion is also commonly known as the Hypotenuse-Leg (HL) criterion. It states that two right-angled triangles are congruent if their hypotenuses and one pair of corresponding legs are equal. This criterion is specifically for right-angled triangles. 📐",
        wrongAnswerExplanations: {
            "Angle-Side-Side": "This is not a standard name for any congruence criterion.",
            "Side-Angle-Side": "This is the name for the SAS criterion, not RHS.",
            "Angle-Angle-Side": "This is the name for the AAS criterion, not RHS."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch7_t5_qe2',
        type: "mcq",
        question: "In right-angled triangles ABC and DEF, right-angled at B and E respectively, if AB = DE and BC = EF, which criterion proves they are congruent?",
        options: [
            "SSS",
            "SAS",
            "ASA",
            "None of the above"
        ],
        correctAnswer: "None of the above",
        explanation: "For right-angled triangles ABC and DEF, we know: ∠B = ∠E = 90°, AB = DE, and BC = EF. These correspond to one angle and two non-included sides, which doesn't match any of the standard congruence criteria (SSS, SAS, ASA). To prove congruence, we'd need additional information like a third pair of equal sides or an additional pair of equal angles. 🔍",
        wrongAnswerExplanations: {
            "SSS": "SSS requires all three pairs of sides to be equal, but we only know two pairs are equal.",
            "SAS": "SAS requires two sides and the included angle to be equal, but here the right angle is not between the two known sides.",
            "ASA": "ASA requires two angles and the included side to be equal, but we only know one angle and two sides."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 35
    },
    {
        id: 'cl9_ch7_t5_qe3',
        type: "mcq",
        question: "The HL (Hypotenuse-Leg) criterion applies to which type of triangles?",
        options: [
            "All triangles",
            "Only equilateral triangles",
            "Only isosceles triangles",
            "Only right-angled triangles"
        ],
        correctAnswer: "Only right-angled triangles",
        explanation: "The HL (Hypotenuse-Leg) criterion, also known as RHS (Right angle-Hypotenuse-Side), applies only to right-angled triangles. It states that two right-angled triangles are congruent if their hypotenuses and one leg (one of the sides forming the right angle) are equal. This criterion doesn't work for other types of triangles. 📏",
        wrongAnswerExplanations: {
            "All triangles": "The HL criterion is specifically for right-angled triangles, not all triangles.",
            "Only equilateral triangles": "Equilateral triangles don't have right angles, so the HL criterion doesn't apply to them.",
            "Only isosceles triangles": "While some isosceles triangles can be right-angled, the HL criterion applies specifically to right-angled triangles, not all isosceles triangles."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch7_t5_qe4',
        type: "mcq",
        question: "Why does the HL (Hypotenuse-Leg) criterion work for proving congruence in right-angled triangles?",
        options: [
            "Because all right-angled triangles are similar",
            "Because of the Pythagorean theorem",
            "Because the hypotenuse is always the longest side",
            "Because right angles make triangles automatically congruent"
        ],
        correctAnswer: "Because of the Pythagorean theorem",
        explanation: "The HL criterion works because of the Pythagorean theorem. If two right-angled triangles have equal hypotenuses and one equal leg, the Pythagorean theorem (a² + b² = c²) allows us to determine that the second leg must also be equal. With all three sides equal, the triangles are congruent by the SSS criterion. 📊",
        wrongAnswerExplanations: {
            "Because all right-angled triangles are similar": "Not all right-angled triangles are similar; they need to have the same angle measurements to be similar.",
            "Because the hypotenuse is always the longest side": "While true, this fact alone doesn't explain why the HL criterion works.",
            "Because right angles make triangles automatically congruent": "Having right angles doesn't automatically make triangles congruent; other corresponding parts must also be equal."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 35
    },
    {
        id: 'cl9_ch7_t5_qe5',
        type: "mcq",
        question: "In right-angled triangles PQR and XYZ, right-angled at Q and Y respectively, if PR = XZ and QR = YZ, are the triangles necessarily congruent?",
        options: [
            "Yes, by the SSS criterion",
            "Yes, by the SAS criterion",
            "Yes, by the HL criterion",
            "No, not enough information"
        ],
        correctAnswer: "Yes, by the HL criterion",
        explanation: "In these right-angled triangles, PR and XZ are the hypotenuses (opposite to the right angles at Q and Y), and QR and YZ are corresponding legs. Since the hypotenuses and one pair of legs are equal, the triangles are congruent by the HL (Hypotenuse-Leg) criterion. The HL criterion is specifically designed for right-angled triangles. 📐",
        wrongAnswerExplanations: {
            "Yes, by the SSS criterion": "We only know two pairs of sides are equal, not all three.",
            "Yes, by the SAS criterion": "The right angle is not between the two known sides, so SAS doesn't apply directly.",
            "No, not enough information": "The HL criterion is sufficient to prove congruence for right-angled triangles."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 35
    },
    {
        id: 'cl9_ch7_t5_qe6',
        type: "mcq",
        question: "What does the AAS congruence criterion stand for?",
        options: [
            "Angle-Angle-Side",
            "Angle-Angle-Similar",
            "Angle-Adjacent-Side",
            "Adjacent-Angle-Side"
        ],
        correctAnswer: "Angle-Angle-Side",
        explanation: "AAS stands for Angle-Angle-Side. This congruence criterion states that two triangles are congruent if two angles and a non-included side of one triangle are equal to the corresponding parts of another triangle. For example, if ∠A = ∠P, ∠B = ∠Q, and AC = PR, then triangles ABC and PQR are congruent by the AAS criterion. 📏",
        wrongAnswerExplanations: {
            "Angle-Angle-Similar": "This is not a standard congruence criterion abbreviation.",
            "Angle-Adjacent-Side": "This is not a standard congruence criterion abbreviation.",
            "Adjacent-Angle-Side": "This is not a standard congruence criterion abbreviation."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 25
    },
    {
        id: 'cl9_ch7_t5_qe7',
        type: "mcq",
        question: "In triangles ABC and DEF, if ∠A = ∠D, ∠B = ∠E, and BC = EF, which congruence criterion can be used?",
        options: [
            "SSS",
            "SAS",
            "ASA",
            "AAS"
        ],
        correctAnswer: "AAS",
        explanation: "Given that ∠A = ∠D, ∠B = ∠E, and BC = EF, we have two angles (A and B) and a non-included side (BC) that are equal to the corresponding parts in the other triangle. This matches the Angle-Angle-Side (AAS) criterion. Note that the side BC is not included between angles A and B, making this AAS rather than ASA. 📐",
        wrongAnswerExplanations: {
            "SSS": "SSS requires all three sides to be equal, but we only know one pair of sides is equal.",
            "SAS": "SAS requires two sides and the included angle, but we have two angles and a non-included side.",
            "ASA": "ASA requires two angles and the included side, but here the side BC is not between angles A and B."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch7_t5_qe8',
        type: "mcq",
        question: "Why is the AAS criterion valid for proving triangle congruence?",
        options: [
            "Because we know all three angles and one side",
            "Because we can calculate the third side using the law of sines",
            "Because if two angles are equal, the triangles are automatically congruent",
            "Because AAS is the same as ASA, just in a different order"
        ],
        correctAnswer: "Because we know all three angles and one side",
        explanation: "The AAS criterion is valid because when we know two angles in a triangle, we automatically know the third angle (since angles in a triangle sum to 180°). So, with AAS, we effectively know all three angles and one side. This ensures that the triangles are similar, and the equal side ensures they are the same size, making them congruent. 🔍",
        wrongAnswerExplanations: {
            "Because we can calculate the third side using the law of sines": "While this is possible, it's not the primary reason why AAS is a valid criterion.",
            "Because if two angles are equal, the triangles are automatically congruent": "Equal angles only ensure similarity, not congruence; we need at least one pair of equal sides.",
            "Because AAS is the same as ASA, just in a different order": "AAS and ASA are distinct criteria; in ASA, the side is between the two angles, while in AAS, it's not."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 35
    },
    {
        id: 'cl9_ch7_t5_qe9',
        type: "mcq",
        question: "What is the key difference between the ASA and AAS congruence criteria?",
        options: [
            "ASA requires three parts, while AAS requires four",
            "ASA works for all triangles, while AAS only works for right-angled triangles",
            "In ASA, the side is included between the two angles, while in AAS, it's not",
            "ASA is valid, but AAS is not a valid congruence criterion"
        ],
        correctAnswer: "In ASA, the side is included between the two angles, while in AAS, it's not",
        explanation: "The key difference between ASA and AAS is the position of the side relative to the angles. In ASA (Angle-Side-Angle), the side is included between the two angles. In AAS (Angle-Angle-Side), the side is not between the two angles; it's adjacent to one angle but not the other. Both are valid congruence criteria that can be used to prove triangles are congruent. 📏",
        wrongAnswerExplanations: {
            "ASA requires three parts, while AAS requires four": "Both ASA and AAS require three corresponding parts to be equal.",
            "ASA works for all triangles, while AAS only works for right-angled triangles": "Both ASA and AAS work for all types of triangles, not just right-angled ones.",
            "ASA is valid, but AAS is not a valid congruence criterion": "Both ASA and AAS are valid congruence criteria."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 35
    },
    {
        id: 'cl9_ch7_t5_qe10',
        type: "mcq",
        question: "In which case might the SSA (Side-Side-Angle) combination guarantee triangle congruence?",
        options: [
            "When the angle is a right angle",
            "When the angle is an acute angle",
            "When the angle is an obtuse angle",
            "SSA never guarantees congruence"
        ],
        correctAnswer: "When the angle is a right angle",
        explanation: "The SSA combination generally doesn't guarantee congruence (the 'ambiguous case'), but there are exceptions. When the angle is a right angle, SSA becomes the HL (Hypotenuse-Leg) criterion, which does guarantee congruence. In this case, the 'angle' is the right angle, and the 'sides' are the hypotenuse and one leg of the right-angled triangle. ⚠️",
        wrongAnswerExplanations: {
            "When the angle is an acute angle": "With an acute angle, SSA can still lead to the ambiguous case where two different triangles satisfy the conditions.",
            "When the angle is an obtuse angle": "With an obtuse angle, SSA can still lead to ambiguity, though less frequently than with acute angles.",
            "SSA never guarantees congruence": "While generally true, there are special cases (like when the angle is a right angle) where SSA does guarantee congruence."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 40
    },
    {
        id: 'cl9_ch7_t5_qe11',
        type: "mcq",
        question: "If triangles ABC and PQR have AB = PQ, AC = PR, and BC = QR, which criterion proves they are congruent?",
        options: [
            "SSS",
            "SAS",
            "ASA",
            "AAA"
        ],
        correctAnswer: "SSS",
        explanation: "Given that all three pairs of corresponding sides are equal (AB = PQ, AC = PR, BC = QR), triangles ABC and PQR are congruent by the SSS (Side-Side-Side) criterion. This criterion states that if three sides of one triangle equal three sides of another triangle, the triangles are congruent. 📏",
        wrongAnswerExplanations: {
            "SAS": "SAS requires two sides and the included angle, but we only have information about the sides.",
            "ASA": "ASA requires two angles and the included side, but we only have information about the sides.",
            "AAA": "AAA only proves triangles are similar, not congruent, and we only have information about the sides anyway."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch7_t5_qe12',
        type: "mcq",
        question: "If triangles ABC and DEF have ∠A = ∠D, AB = DE, and ∠C = ∠F, which criterion can prove they are congruent?",
        options: [
            "AAS",
            "ASA",
            "SAS",
            "Cannot be determined"
        ],
        correctAnswer: "AAS",
        explanation: "Given ∠A = ∠D, AB = DE, and ∠C = ∠F, we have two angles (A and C) and a non-included side (AB) that are equal to the corresponding parts in the other triangle. This matches the AAS (Angle-Angle-Side) criterion. Since we know two angles, we also know the third angle (∠B = ∠E), making the triangles congruent. 📐",
        wrongAnswerExplanations: {
            "ASA": "ASA requires the side to be included between the two angles, but AB is not between angles A and C.",
            "SAS": "SAS requires two sides and the included angle, but we have two angles and a non-included side.",
            "Cannot be determined": "The given information is sufficient to prove congruence using the AAS criterion."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 35
    },
    {
        id: 'cl9_ch7_t5_qe13',
        type: "mcq",
        question: "In triangle ABC, if D is the midpoint of BC, E is the midpoint of AC, and F is the midpoint of AB, what type of triangle is DEF?",
        options: [
            "Similar to ABC but smaller",
            "Congruent to ABC",
            "Not related to ABC",
            "None of the above"
        ],
        correctAnswer: "Similar to ABC but smaller",
        explanation: "When the midpoints of the three sides of a triangle are connected, they form a triangle that is similar to the original triangle, with a scale factor of 1/2. So, if D, E, and F are the midpoints of sides BC, AC, and AB respectively, triangle DEF is similar to triangle ABC but has half the linear dimensions and one-fourth the area. This is known as the midsegment theorem or the middle-point theorem. 🔍",
        wrongAnswerExplanations: {
            "Congruent to ABC": "Triangle DEF is not congruent to ABC; it's similar but smaller.",
            "Not related to ABC": "There is a definite relationship; DEF is similar to ABC with a scale factor of 1/2.",
            "None of the above": "The correct relationship is that DEF is similar to ABC but smaller."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 40
    },
    {
        id: 'cl9_ch7_t5_qe14',
        type: "mcq",
        question: "What does the term 'CPCTC' stand for in the context of triangle congruence?",
        options: [
            "Congruent Parts of Congruent Triangles are Congruent",
            "Corresponding Parts of Congruent Triangles are Congruent",
            "Center Points of Congruent Triangles are Collinear",
            "Common Properties of Congruent Triangles are Consistent"
        ],
        correctAnswer: "Corresponding Parts of Congruent Triangles are Congruent",
        explanation: "CPCTC stands for 'Corresponding Parts of Congruent Triangles are Congruent.' This principle states that if two triangles are proven congruent, then all their corresponding parts (sides, angles, medians, altitudes, etc.) are also congruent. CPCTC is often used in geometric proofs to draw conclusions after establishing triangle congruence. 📊",
        wrongAnswerExplanations: {
            "Congruent Parts of Congruent Triangles are Congruent": "This is not the correct expansion of CPCTC.",
            "Center Points of Congruent Triangles are Collinear": "This is not the correct expansion of CPCTC.",
            "Common Properties of Congruent Triangles are Consistent": "This is not the correct expansion of CPCTC."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch7_t5_qe15',
        type: "mcq",
        question: "In a parallelogram ABCD, if the diagonals AC and BD intersect at point O, which of the following is TRUE?",
        options: [
            "Triangles AOB and COD are congruent",
            "Triangles AOB and BOC are congruent",
            "Triangles AOD and BOC are congruent",
            "No pair of triangles is necessarily congruent"
        ],
        correctAnswer: "Triangles AOB and COD are congruent",
        explanation: "In a parallelogram, diagonals bisect each other at their point of intersection (O). This means AO = OC and BO = OD. Additionally, ∠AOB and ∠COD are vertically opposite angles, which are equal. Using the SAS congruence criterion (with equal sides AO and BO and the included angle ∠AOB), triangles AOB and COD are congruent. 📐",
        wrongAnswerExplanations: {
            "Triangles AOB and BOC are congruent": "These triangles may not be congruent in a general parallelogram.",
            "Triangles AOD and BOC are congruent": "These triangles may not be congruent in a general parallelogram.",
            "No pair of triangles is necessarily congruent": "Triangles AOB and COD are definitely congruent, as explained."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 40
    },
    {
        id: 'cl9_ch7_t5_qe16',
        type: "mcq",
        question: "If the diagonals of a quadrilateral bisect each other, what type of quadrilateral is it?",
        options: [
            "Rectangle",
            "Rhombus",
            "Parallelogram",
            "Square"
        ],
        correctAnswer: "Parallelogram",
        explanation: "If the diagonals of a quadrilateral bisect each other, the quadrilateral is a parallelogram. This is a defining property of parallelograms. Using congruence criteria, we can prove that when diagonals bisect each other, opposite sides of the quadrilateral are parallel and equal, which makes it a parallelogram. Note that while all rectangles, rhombuses, and squares are also parallelograms, not all parallelograms have these more specific properties. 🔷",
        wrongAnswerExplanations: {
            "Rectangle": "While rectangles have diagonals that bisect each other, not all quadrilaterals with bisecting diagonals are rectangles.",
            "Rhombus": "While rhombuses have diagonals that bisect each other, not all quadrilaterals with bisecting diagonals are rhombuses.",
            "Square": "While squares have diagonals that bisect each other, not all quadrilaterals with bisecting diagonals are squares."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 35
    },
    {
        id: 'cl9_ch7_t5_qe17',
        type: "mcq",
        question: "In a rhombus, what special property do the diagonals have that can be proven using congruence criteria?",
        options: [
            "They are equal in length",
            "They bisect each other at right angles",
            "They form four congruent triangles",
            "They divide the rhombus into four equilateral triangles"
        ],
        correctAnswer: "They bisect each other at right angles",
        explanation: "In a rhombus, the diagonals bisect each other at right angles. This can be proven using congruence criteria: when we consider the triangles formed by the diagonals, we can show that these triangles are congruent by the SSS criterion (all sides of a rhombus are equal). From this congruence, we can deduce that the diagonals not only bisect each other (as in all parallelograms) but do so at right angles. 📏",
        wrongAnswerExplanations: {
            "They are equal in length": "The diagonals of a rhombus are not necessarily equal in length.",
            "They form four congruent triangles": "While the diagonals do form congruent triangles, this is not a special property of rhombuses; it applies to parallelograms in general.",
            "They divide the rhombus into four equilateral triangles": "The triangles formed by the diagonals are not necessarily equilateral."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 40
    },
    {
        id: 'cl9_ch7_t5_qe18',
        type: "mcq",
        question: "In triangles ABC and PQR, if ∠A = ∠P, ∠B = ∠Q, and ∠C = ∠R, what can we conclude?",
        options: [
            "The triangles are congruent",
            "The triangles are similar",
            "The triangles have the same area",
            "No definite conclusion can be drawn"
        ],
        correctAnswer: "The triangles are similar",
        explanation: "When all three angles of one triangle equal the corresponding angles of another triangle (AAA), the triangles are similar. This means they have the same shape but not necessarily the same size. For congruence, we would need at least one pair of corresponding sides to be equal, in addition to the equal angles. So, triangles ABC and PQR are similar, but we can't conclude they're congruent with just the given information. 📐",
        wrongAnswerExplanations: {
            "The triangles are congruent": "Equal angles only ensure similarity, not congruence; we need at least one pair of equal sides for congruence.",
            "The triangles have the same area": "Similar triangles don't necessarily have the same area; their areas are proportional to the square of the ratio of their corresponding sides.",
            "No definite conclusion can be drawn": "We can definitely conclude that the triangles are similar based on the equal angles."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 35
    },
    {
        id: 'cl9_ch7_t5_qe19',
        type: "mcq",
        question: "Which of the following is NOT a valid criterion for triangle congruence?",
        options: [
            "SSS (Side-Side-Side)",
            "SAS (Side-Angle-Side)",
            "SSA (Side-Side-Angle)",
            "ASA (Angle-Side-Angle)"
        ],
        correctAnswer: "SSA (Side-Side-Angle)",
        explanation: "SSA (Side-Side-Angle) is not generally a valid criterion for triangle congruence because it can lead to the 'ambiguous case' where two different triangles satisfy the same SSA conditions. Unlike SSS, SAS, and ASA, which uniquely determine a triangle, SSA can result in two possible triangles in some cases. There are special cases where SSA does guarantee congruence (like when the angle is a right angle), but it's not universally valid. ⚠️",
        wrongAnswerExplanations: {
            "SSS (Side-Side-Side)": "SSS is a valid criterion; three equal sides guarantee congruence.",
            "SAS (Side-Angle-Side)": "SAS is a valid criterion; two sides and the included angle guarantee congruence.",
            "ASA (Angle-Side-Angle)": "ASA is a valid criterion; two angles and the included side guarantee congruence."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 35
    },
    {
        id: 'cl9_ch7_t5_qe20',
        type: "mcq",
        question: "What is the Middle-Point Theorem in triangles?",
        options: [
            "The midpoint of the hypotenuse of a right triangle is equidistant from all three vertices",
            "The midpoints of any two sides of a triangle determine a line parallel to the third side",
            "The line joining the midpoints of two sides of a triangle is parallel to the third side and half its length",
            "The midpoint of a triangle is always at the centroid"
        ],
        correctAnswer: "The line joining the midpoints of two sides of a triangle is parallel to the third side and half its length",
        explanation: "The Middle-Point Theorem (also called the midsegment theorem) states that the line joining the midpoints of two sides of a triangle is parallel to the third side and equals half its length. For example, if D and E are the midpoints of sides AB and AC of triangle ABC, then DE is parallel to BC and DE = BC/2. This theorem can be proved using similar triangles or the properties of parallelograms. 📊",
        wrongAnswerExplanations: {
            "The midpoint of the hypotenuse of a right triangle is equidistant from all three vertices": "This is a different theorem related to the circumcenter of a right triangle.",
            "The midpoints of any two sides of a triangle determine a line parallel to the third side": "This is partially correct but misses the crucial fact that this line is half the length of the third side.",
            "The midpoint of a triangle is always at the centroid": "This statement is meaningless; triangles don't have 'midpoints,' though they do have centroids."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 40
    }
]; 