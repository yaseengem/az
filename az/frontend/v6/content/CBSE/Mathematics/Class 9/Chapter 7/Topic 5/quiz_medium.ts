import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl9_ch7_t5_qm1',
        type: "mcq",
        question: "In a right-angled triangle ABC, right-angled at B, if the altitude BD to the hypotenuse AC creates triangles ABD and CBD, which of the following statements is TRUE?",
        options: [
            "Triangles ABD and CBD are congruent",
            "Triangles ABD and CBD are similar to each other",
            "Triangles ABD and CBD are similar to the original triangle ABC",
            "Triangle ABD is congruent to the original triangle ABC"
        ],
        correctAnswer: "Triangles ABD and CBD are similar to the original triangle ABC",
        explanation: "When the altitude is drawn from the right angle to the hypotenuse of a right triangle, it creates two triangles (ABD and CBD) that are similar to the original triangle (ABC) and to each other. This is because all three triangles have a right angle, and the angle at A in triangle ABD equals the angle at A in triangle ABC, while the angle at C in triangle CBD equals the angle at C in triangle ABC. 📐",
        wrongAnswerExplanations: {
            "Triangles ABD and CBD are congruent": "These triangles are generally not congruent unless the original triangle is isosceles.",
            "Triangles ABD and CBD are similar to each other": "While this is true, they are also similar to the original triangle, which is a more complete answer.",
            "Triangle ABD is congruent to the original triangle ABC": "Triangle ABD is similar to, but not congruent to, the original triangle."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch7_t5_qm2',
        type: "mcq",
        question: "In a right-angled triangle PQR, right-angled at Q, if PM is the median to the hypotenuse QR, what is the relationship between PM and QR?",
        options: [
            "PM = QR",
            "PM = QR/2",
            "PM = QR/√2",
            "PM = QR×√2/2"
        ],
        correctAnswer: "PM = QR/2",
        explanation: "In a right-angled triangle, the median to the hypotenuse has length equal to half the length of the hypotenuse. This is a special property of right triangles that can be proven using the properties of circles (the median to the hypotenuse passes through the center of the circumscribed circle). If PM is the median to hypotenuse QR, then PM = QR/2. 📊",
        wrongAnswerExplanations: {
            "PM = QR": "The median to the hypotenuse is half its length, not equal to it.",
            "PM = QR/√2": "This relationship doesn't hold for the median to the hypotenuse.",
            "PM = QR×√2/2": "This relationship doesn't hold for the median to the hypotenuse."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 40
    },
    {
        id: 'cl9_ch7_t5_qm3',
        type: "mcq",
        question: "In triangles ABC and DEF, if AB = DE, BC = EF, and ∠ABC = ∠DEF, what additional information would guarantee that the triangles are congruent?",
        options: [
            "∠BAC = ∠EDF",
            "AC = DF",
            "∠BCA = ∠EFD",
            "No additional information is needed"
        ],
        correctAnswer: "No additional information is needed",
        explanation: "Given that AB = DE, BC = EF, and ∠ABC = ∠DEF, we have two sides and the included angle equal in both triangles. This satisfies the SAS (Side-Angle-Side) congruence criterion, which is sufficient to prove that the triangles are congruent. No additional information is needed for this proof. 📏",
        wrongAnswerExplanations: {
            "∠BAC = ∠EDF": "While this would provide additional confirmation, it's not needed as SAS is already satisfied.",
            "AC = DF": "While this would provide additional confirmation, it's not needed as SAS is already satisfied.",
            "∠BCA = ∠EFD": "While this would provide additional confirmation, it's not needed as SAS is already satisfied."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 40
    },
    {
        id: 'cl9_ch7_t5_qm4',
        type: "mcq",
        question: "In right-angled triangles ABC and DEF, right-angled at B and E respectively, if AB = DE and ∠ACB = ∠DFE, what additional information would guarantee they are congruent?",
        options: [
            "BC = EF",
            "AC = DF",
            "∠BAC = ∠EDF",
            "Nothing more is needed"
        ],
        correctAnswer: "BC = EF",
        explanation: "In right-angled triangles ABC and DEF (right-angled at B and E), we know AB = DE and ∠ACB = ∠DFE. We need one more corresponding pair to be equal for congruence. If BC = EF, then by AAS (Angle-Angle-Side), the triangles would be congruent. We already know two angles (the right angle and ∠ACB = ∠DFE), and with BC = EF, we'd have a non-included side, completing the AAS criterion. 🔍",
        wrongAnswerExplanations: {
            "AC = DF": "This would also work but using the HL criterion rather than AAS.",
            "∠BAC = ∠EDF": "This wouldn't add any new information since we already know two angles and the third is determined.",
            "Nothing more is needed": "The given information isn't sufficient for congruence; we need one more pair to be equal."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch7_t5_qm5',
        type: "mcq",
        question: "In triangle ABC, if D, E, and F are the midpoints of sides BC, CA, and AB respectively, which congruence criterion proves that triangles DEF and ABC are similar?",
        options: [
            "SSS criterion for similarity",
            "SAS criterion for similarity",
            "AAA criterion for similarity",
            "ASA criterion for similarity"
        ],
        correctAnswer: "SSS criterion for similarity",
        explanation: "When D, E, and F are the midpoints of sides BC, CA, and AB, the triangle DEF is called the medial triangle. According to the midsegment theorem, the sides of triangle DEF are parallel to and half the length of the corresponding sides of triangle ABC. This means that corresponding sides are in the same ratio (1:2), which satisfies the SSS criterion for similarity (all corresponding sides are proportional). 📊",
        wrongAnswerExplanations: {
            "SAS criterion for similarity": "While this would also work, SSS is more directly applicable given the proportional relationship between all sides.",
            "AAA criterion for similarity": "While the triangles do have equal angles, SSS is more directly applicable given the information about the midpoints.",
            "ASA criterion for similarity": "While this would also work, SSS is more directly applicable given the proportional relationship between all sides."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch7_t5_qm6',
        type: "mcq",
        question: "In parallelogram ABCD, if diagonals AC and BD intersect at point O, which congruence criterion proves that triangles AOB and COD are congruent?",
        options: [
            "SSS",
            "SAS",
            "ASA",
            "AAS"
        ],
        correctAnswer: "SAS",
        explanation: "In a parallelogram, the diagonals bisect each other. So, if O is the point of intersection, then AO = OC and BO = OD. Additionally, ∠AOB and ∠COD are vertically opposite angles, which are equal. Therefore, triangles AOB and COD have two sides and the included angle equal (AO = OC, BO = OD, and ∠AOB = ∠COD), satisfying the SAS criterion for congruence. 📐",
        wrongAnswerExplanations: {
            "SSS": "We only know two pairs of sides are equal, not all three.",
            "ASA": "We only know one angle and two sides, not two angles and a side.",
            "AAS": "We only know one angle and two sides, not two angles and a side."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 40
    },
    {
        id: 'cl9_ch7_t5_qm7',
        type: "mcq",
        question: "In a rhombus ABCD, if diagonals AC and BD intersect at point O, which congruence criterion proves that triangles AOB and BOC are congruent?",
        options: [
            "SSS",
            "SAS",
            "ASA",
            "RHS"
        ],
        correctAnswer: "SAS",
        explanation: "In a rhombus, the diagonals bisect each other at right angles. So, if O is the point of intersection, then AO = OC and BO = OD. Additionally, ∠AOB = ∠BOC (both are right angles). Therefore, triangles AOB and BOC have two sides and the included angle equal (AO = OC, BO is common, and ∠AOB = ∠BOC = 90°), satisfying the SAS criterion for congruence. 🔷",
        wrongAnswerExplanations: {
            "SSS": "We only know two pairs of sides are equal, not all three.",
            "ASA": "We only know one angle and two sides, not two angles and a side.",
            "RHS": "While both triangles have right angles, we don't know if they have equal hypotenuses, so RHS doesn't directly apply."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch7_t5_qm8',
        type: "mcq",
        question: "In right-angled triangles PQR and XYZ, right-angled at Q and Y respectively, if PQ = XY, PR = XZ, and QR = YZ, which congruence criterion is most directly applicable?",
        options: [
            "SSS",
            "SAS",
            "ASA",
            "HL (Hypotenuse-Leg)"
        ],
        correctAnswer: "SSS",
        explanation: "Given that all three pairs of corresponding sides are equal (PQ = XY, PR = XZ, and QR = YZ), triangles PQR and XYZ are congruent by the SSS (Side-Side-Side) criterion. While the HL criterion could also apply (since the triangles are right-angled, and we know the hypotenuses PR = XZ and one leg PQ = XY are equal), SSS is more directly applicable as we already know all three pairs of sides are equal. 📏",
        wrongAnswerExplanations: {
            "SAS": "While this could work, SSS is more directly applicable since we know all three pairs of sides are equal.",
            "ASA": "While this could work (using the right angles and two sides), SSS is more directly applicable.",
            "HL (Hypotenuse-Leg)": "While this could work (using the right angles, hypotenuses, and one leg), SSS is more directly applicable."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 40
    },
    {
        id: 'cl9_ch7_t5_qm9',
        type: "mcq",
        question: "Which congruence criterion is best suited for proving that the diagonals of a kite bisect each other at right angles?",
        options: [
            "SSS",
            "SAS",
            "ASA",
            "None of the above"
        ],
        correctAnswer: "None of the above",
        explanation: "The diagonals of a kite do not bisect each other at right angles (unlike a rhombus). In a kite, one diagonal bisects the other, but not vice versa. Therefore, none of the standard congruence criteria directly proves this property. To prove properties of a kite's diagonals, we'd typically use the definition of a kite (a quadrilateral with two pairs of adjacent sides equal) along with congruence criteria to show specific relationships between triangles formed by the diagonals. 🔷",
        wrongAnswerExplanations: {
            "SSS": "This criterion doesn't directly apply to proving the given property about kite diagonals.",
            "SAS": "This criterion doesn't directly apply to proving the given property about kite diagonals.",
            "ASA": "This criterion doesn't directly apply to proving the given property about kite diagonals."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch7_t5_qm10',
        type: "mcq",
        question: "In an isosceles triangle ABC with AB = AC, if D is the midpoint of BC, which congruence criterion proves that triangles ABD and ACD are congruent?",
        options: [
            "SSS",
            "SAS",
            "ASA",
            "AAS"
        ],
        correctAnswer: "SAS",
        explanation: "In isosceles triangle ABC with AB = AC, if D is the midpoint of BC, then BD = DC. Also, AD is common to both triangles. Therefore, triangles ABD and ACD have two sides and the included angle equal (AB = AC, BD = DC, and ∠ABD ≠ ∠ACD in general but ∠BAD = ∠CAD), satisfying the SAS criterion for congruence. This congruence can be used to prove that AD is both an angle bisector and an altitude in an isosceles triangle. 📐",
        wrongAnswerExplanations: {
            "SSS": "We only know two pairs of sides are equal, not all three (AB = AC, BD = DC, but we don't know if AD = AD yet).",
            "ASA": "We don't have two pairs of angles known to be equal initially.",
            "AAS": "We don't have two pairs of angles known to be equal initially."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 40
    },
    {
        id: 'cl9_ch7_t5_qm11',
        type: "mcq",
        question: "In triangle ABC, if the angle bisector from vertex A meets side BC at point D, and AB = AC, what does congruence tell us about BD and DC?",
        options: [
            "BD = DC",
            "BD > DC",
            "BD < DC",
            "No relationship can be determined"
        ],
        correctAnswer: "BD = DC",
        explanation: "If ABC is an isosceles triangle with AB = AC, and AD is the angle bisector from vertex A to side BC, then BD = DC. This can be proven using the SAS congruence criterion: In triangles ABD and ACD, we have AB = AC (given), ∠BAD = ∠CAD (angle bisector), and AD is common. By SAS, the triangles are congruent, which implies BD = DC (corresponding parts of congruent triangles are congruent). In an isosceles triangle, the angle bisector from the apex is also a median and an altitude. 📏",
        wrongAnswerExplanations: {
            "BD > DC": "The angle bisector from the apex of an isosceles triangle divides the base into equal parts, not unequal parts.",
            "BD < DC": "The angle bisector from the apex of an isosceles triangle divides the base into equal parts, not unequal parts.",
            "No relationship can be determined": "A definite relationship (BD = DC) can be determined using congruence."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch7_t5_qm12',
        type: "mcq",
        question: "In a right-angled triangle, if the hypotenuse is 10 cm and one leg is 6 cm, what is the length of the median to the hypotenuse?",
        options: [
            "4 cm",
            "5 cm",
            "6 cm",
            "8 cm"
        ],
        correctAnswer: "5 cm",
        explanation: "In a right-angled triangle, the median to the hypotenuse has length equal to half the length of the hypotenuse. Given that the hypotenuse is 10 cm, the median to the hypotenuse is 10/2 = 5 cm. This is a special property of right-angled triangles and can be proved using the properties of circles, specifically that the median to the hypotenuse passes through the center of the circumscribed circle. 📊",
        wrongAnswerExplanations: {
            "4 cm": "This is not half the hypotenuse.",
            "6 cm": "This is the length of one leg, not the median to the hypotenuse.",
            "8 cm": "This is not half the hypotenuse; it's more than half."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 40
    },
    {
        id: 'cl9_ch7_t5_qm13',
        type: "mcq",
        question: "If the diagonals of a quadrilateral bisect each other and are equal in length, what type of quadrilateral is it?",
        options: [
            "Parallelogram",
            "Rectangle",
            "Rhombus",
            "Square"
        ],
        correctAnswer: "Rectangle",
        explanation: "If the diagonals of a quadrilateral bisect each other, the quadrilateral is a parallelogram. If, additionally, the diagonals are equal in length, the parallelogram must be a rectangle. This can be proven using congruence criteria: In a parallelogram, if the diagonals are equal, the triangles formed by the diagonals and two adjacent sides are congruent by the SSS criterion, which establishes that the angles between adjacent sides are right angles, making it a rectangle. 🔷",
        wrongAnswerExplanations: {
            "Parallelogram": "While it is a parallelogram, the additional condition of equal diagonals makes it specifically a rectangle.",
            "Rhombus": "A rhombus has diagonals that bisect each other at right angles, but they're not necessarily equal in length.",
            "Square": "While a square satisfies these conditions, a rectangle also does, and is the more general answer."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch7_t5_qm14',
        type: "mcq",
        question: "In triangles ABC and DEF, if three angles and one side of triangle ABC equal the corresponding parts of triangle DEF, what criterion establishes their congruence?",
        options: [
            "AAA criterion",
            "AAA with additional information",
            "AAS criterion",
            "SAAA criterion"
        ],
        correctAnswer: "AAS criterion",
        explanation: "If three angles and one side of triangle ABC equal the corresponding parts of triangle DEF, we can use the AAS (Angle-Angle-Side) criterion to establish congruence. Since the sum of angles in a triangle is 180°, knowing three angles is redundant; two angles determine the third. So, we effectively have two angles and one side equal, which satisfies the AAS criterion for congruence. 📐",
        wrongAnswerExplanations: {
            "AAA criterion": "AAA only establishes similarity, not congruence; we need at least one pair of equal sides.",
            "AAA with additional information": "This is essentially what AAS is, but AAS is the standard term.",
            "SAAA criterion": "This is not a standard congruence criterion; the correct term is AAS."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 40
    },
    {
        id: 'cl9_ch7_t5_qm15',
        type: "mcq",
        question: "In an isosceles triangle PQR with PQ = PR, if S is a point on QR such that PS is perpendicular to QR, where is S located?",
        options: [
            "S is the midpoint of QR",
            "S is closer to Q than to R",
            "S is closer to R than to Q",
            "S could be anywhere on QR"
        ],
        correctAnswer: "S is the midpoint of QR",
        explanation: "In an isosceles triangle PQR with PQ = PR, the perpendicular from the apex P to the base QR is also a median, meaning it bisects QR. This can be proven using the SAS congruence criterion: In triangles PQS and PRS, we have PQ = PR (given), ∠PQS = ∠PRS (both are right angles), and PS is common. By SAS, the triangles are congruent, which implies QS = SR. Therefore, S is the midpoint of QR. 📏",
        wrongAnswerExplanations: {
            "S is closer to Q than to R": "In an isosceles triangle, the perpendicular from the apex to the base bisects the base, so S is at the midpoint, not closer to either end.",
            "S is closer to R than to Q": "In an isosceles triangle, the perpendicular from the apex to the base bisects the base, so S is at the midpoint, not closer to either end.",
            "S could be anywhere on QR": "The perpendicular from the apex of an isosceles triangle has a specific location; it's not arbitrary."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch7_t5_qm16',
        type: "mcq",
        question: "In a triangle ABC, if D, E, and F are the midpoints of sides BC, CA, and AB respectively, what is the relationship between triangles ABC and DEF?",
        options: [
            "Triangle DEF is congruent to triangle ABC",
            "Triangle DEF is similar to triangle ABC with ratio 1:2",
            "Triangle DEF is similar to triangle ABC with ratio 2:1",
            "Triangle DEF is similar to triangle ABC with ratio 1:3"
        ],
        correctAnswer: "Triangle DEF is similar to triangle ABC with ratio 1:2",
        explanation: "According to the midsegment theorem, when D, E, and F are the midpoints of sides BC, CA, and AB respectively, the sides of triangle DEF are parallel to and half the length of the corresponding sides of triangle ABC. This means triangle DEF is similar to triangle ABC with a ratio of 1:2 (DEF:ABC). This can be proven using similar triangles and the properties of parallelograms formed by connecting midpoints. 📊",
        wrongAnswerExplanations: {
            "Triangle DEF is congruent to triangle ABC": "DEF is similar to, not congruent to, ABC; it's smaller by a factor of 2.",
            "Triangle DEF is similar to triangle ABC with ratio 2:1": "The ratio is 1:2, not 2:1; DEF is smaller than ABC.",
            "Triangle DEF is similar to triangle ABC with ratio 1:3": "The ratio is 1:2, not 1:3; the linear dimensions are halved."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 40
    },
    {
        id: 'cl9_ch7_t5_qm17',
        type: "mcq",
        question: "In triangles ABC and DEF, if AB = DE, ∠A = ∠D, and ∠B = ∠E, which congruence criterion proves they are congruent?",
        options: [
            "SSS",
            "SAS",
            "ASA",
            "AAS"
        ],
        correctAnswer: "ASA",
        explanation: "Given that AB = DE, ∠A = ∠D, and ∠B = ∠E, we have two angles (A and B) and the included side (AB) equal to the corresponding parts in the other triangle. This matches the ASA (Angle-Side-Angle) criterion, which states that if two angles and the included side of one triangle equal the corresponding parts of another triangle, the triangles are congruent. 📐",
        wrongAnswerExplanations: {
            "SSS": "SSS requires all three sides to be equal, but we only know one pair of sides is equal.",
            "SAS": "SAS requires two sides and the included angle, but we have two angles and the included side.",
            "AAS": "AAS requires two angles and a non-included side, but here the side AB is included between angles A and B."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 40
    },
    {
        id: 'cl9_ch7_t5_qm18',
        type: "mcq",
        question: "In triangles ABC and PQR, if ∠A = ∠P, ∠B = ∠Q, and AB = PQ, what additional information would guarantee they are congruent?",
        options: [
            "AC = PR",
            "BC = QR",
            "No additional information is needed",
            "∠C = ∠R"
        ],
        correctAnswer: "No additional information is needed",
        explanation: "Given that ∠A = ∠P, ∠B = ∠Q, and AB = PQ, we already have enough information to establish congruence using the AAS (Angle-Angle-Side) criterion. Since two angles of a triangle determine the third (angles in a triangle sum to 180°), we know ∠C = ∠R as well. With two pairs of angles equal and one pair of sides equal, the triangles are congruent by the AAS criterion. 🔍",
        wrongAnswerExplanations: {
            "AC = PR": "While this would provide additional confirmation, it's not needed as AAS is already satisfied.",
            "BC = QR": "While this would provide additional confirmation, it's not needed as AAS is already satisfied.",
            "∠C = ∠R": "This is already implied by the given conditions (since angles in a triangle sum to 180°)."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch7_t5_qm19',
        type: "mcq",
        question: "If the diagonals of a quadrilateral bisect each other at right angles, but are not equal in length, what type of quadrilateral is it?",
        options: [
            "Parallelogram",
            "Rectangle",
            "Rhombus",
            "Square"
        ],
        correctAnswer: "Rhombus",
        explanation: "If the diagonals of a quadrilateral bisect each other, the quadrilateral is a parallelogram. If, additionally, the diagonals bisect each other at right angles, the parallelogram must be a rhombus. This can be proven using congruence criteria: In a parallelogram, if the diagonals intersect at right angles, the triangles formed by the diagonals and two adjacent sides are congruent, which establishes that all sides are equal, making it a rhombus. 🔷",
        wrongAnswerExplanations: {
            "Parallelogram": "While it is a parallelogram, the additional condition of diagonals bisecting at right angles makes it specifically a rhombus.",
            "Rectangle": "In a rectangle, diagonals bisect each other and are equal in length, but they don't necessarily intersect at right angles.",
            "Square": "A square has diagonals that bisect each other at right angles and are equal in length, but here the diagonals are not equal in length."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch7_t5_qm20',
        type: "mcq",
        question: "In right-angled triangles ABC and PQR, right-angled at B and Q respectively, if AC = PR (the hypotenuses) and AB = PQ, what can be concluded?",
        options: [
            "BC = QR by the Pythagorean theorem",
            "∠C = ∠R by the AAS criterion",
            "The triangles are congruent by the HL criterion",
            "All of the above"
        ],
        correctAnswer: "All of the above",
        explanation: "Given that triangles ABC and PQR are right-angled at B and Q, with AC = PR (hypotenuses) and AB = PQ, we can conclude: (1) BC = QR by the Pythagorean theorem (since the third sides are determined by a² + b² = c²), (2) ∠C = ∠R by the AAS criterion (we know two angles and a non-included side), and (3) the triangles are congruent by the HL criterion (they have equal hypotenuses and one pair of legs). All these conclusions are valid and follow from the given conditions. 📊",
        wrongAnswerExplanations: {
            "BC = QR by the Pythagorean theorem": "This is true, but it's not the only valid conclusion.",
            "∠C = ∠R by the AAS criterion": "This is true, but it's not the only valid conclusion.",
            "The triangles are congruent by the HL criterion": "This is true, but it's not the only valid conclusion."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 50
    }
]; 