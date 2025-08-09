import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl9_ch7_t3_qm1',
        type: "mcq",
        question: "In triangles ABC and PQR, if AB = 5 cm, BC = 7 cm, AC = 9 cm, PQ = 5 cm, QR = 7 cm, and PR = 9 cm, which congruence criterion can be used to prove congruence?",
        options: [
            "SSS",
            "SAS",
            "ASA",
            "AAS"
        ],
        correctAnswer: "SSS",
        explanation: "Since all three pairs of corresponding sides are equal (AB = PQ = 5 cm, BC = QR = 7 cm, and AC = PR = 9 cm), we can use the SSS (Side-Side-Side) criterion. This criterion states that if three sides of one triangle equal the corresponding sides of another triangle, the triangles are congruent. 📏",
        wrongAnswerExplanations: {
            "SAS": "SAS requires two sides and the included angle to be equal, but we only have information about the sides.",
            "ASA": "ASA requires two angles and the included side to be equal, but we only have information about the sides.",
            "AAS": "AAS requires two angles and a non-included side to be equal, but we only have information about the sides."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 40
    },
    {
        id: 'cl9_ch7_t3_qm2',
        type: "mcq",
        question: "In triangles ABC and DEF, if AB = 8 cm, ∠ABC = 60°, BC = 10 cm, DE = 8 cm, ∠DEF = 60°, and EF = 10 cm, which congruence criterion can be used?",
        options: [
            "SSS",
            "SAS",
            "ASA",
            "AAS"
        ],
        correctAnswer: "SAS",
        explanation: "Given that AB = DE = 8 cm, BC = EF = 10 cm, and the included angles ∠ABC = ∠DEF = 60°, we can use the SAS (Side-Angle-Side) criterion. This criterion states that if two sides and the included angle of one triangle equal the corresponding parts of another triangle, the triangles are congruent. 📐",
        wrongAnswerExplanations: {
            "SSS": "SSS requires all three sides to be equal, but we only know two pairs of sides are equal.",
            "ASA": "ASA requires two angles and the included side, but we have two sides and the included angle.",
            "AAS": "AAS requires two angles and a non-included side, which doesn't match the given information."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 40
    },
    {
        id: 'cl9_ch7_t3_qm3',
        type: "mcq",
        question: "In right-angled triangles PQR and XYZ (right-angled at Q and Y respectively), if PQ = 6 cm, QR = 8 cm, XY = 6 cm, and YZ = 8 cm, which congruence criterion can be used?",
        options: [
            "SSS",
            "SAS",
            "ASA",
            "RHS"
        ],
        correctAnswer: "RHS",
        explanation: "For right-angled triangles PQR and XYZ (right-angled at Q and Y), if PQ = XY = 6 cm and QR = YZ = 8 cm, we need to determine if these sides correspond to the hypotenuse and a leg. Since the triangles are right-angled at Q and Y, PQ and XY are legs, and using the Pythagorean theorem, we can find that PR and XZ (the hypotenuses) are equal. Thus, we can use the RHS criterion. 📊",
        wrongAnswerExplanations: {
            "SSS": "SSS requires all three sides to be equal, but we only know two pairs of sides are equal.",
            "SAS": "SAS requires two sides and the included angle to be equal, which doesn't match the given information.",
            "ASA": "ASA requires two angles and the included side to be equal, which doesn't match the given information."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 50
    },
    {
        id: 'cl9_ch7_t3_qm4',
        type: "mcq",
        question: "In triangles ABC and PQR, if ∠A = 45°, ∠B = 60°, AB = 7 cm, ∠P = 45°, ∠Q = 60°, and PQ = 7 cm, which congruence criterion can be used?",
        options: [
            "SSS",
            "SAS",
            "ASA",
            "AAS"
        ],
        correctAnswer: "ASA",
        explanation: "Given that ∠A = ∠P = 45°, ∠B = ∠Q = 60°, and the included sides AB = PQ = 7 cm, we can use the ASA (Angle-Side-Angle) criterion. This criterion states that if two angles and the included side of one triangle equal the corresponding parts of another triangle, the triangles are congruent. Since two angles in a triangle determine the third, we know ∠C = ∠R = 75° (as angles in a triangle sum to 180°). 📐",
        wrongAnswerExplanations: {
            "SSS": "SSS requires all three sides to be equal, but we only know one pair of sides is equal.",
            "SAS": "SAS requires two sides and the included angle, but we have two angles and the included side.",
            "AAS": "AAS requires two angles and a non-included side, but here the side AB = PQ is included between angles A and B."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch7_t3_qm5',
        type: "mcq",
        question: "In triangles LMN and XYZ, if ∠L = 30°, ∠N = 70°, LM = 10 cm, ∠X = 30°, ∠Z = 70°, and XY = 10 cm, which congruence criterion can be used?",
        options: [
            "SSS",
            "SAS",
            "ASA",
            "AAS"
        ],
        correctAnswer: "AAS",
        explanation: "Given that ∠L = ∠X = 30°, ∠N = ∠Z = 70°, and the sides LM = XY = 10 cm (which are not included between the given angles), we can use the AAS (Angle-Angle-Side) criterion. Since two angles in a triangle determine the third, we know ∠M = ∠Y = 80° (as angles in a triangle sum to 180°). This criterion states that if two angles and a non-included side of one triangle equal the corresponding parts of another triangle, the triangles are congruent. 🔍",
        wrongAnswerExplanations: {
            "SSS": "SSS requires all three sides to be equal, but we only know one pair of sides is equal.",
            "SAS": "SAS requires two sides and the included angle, but we have two angles and a non-included side.",
            "ASA": "ASA requires two angles and the included side, but here the side LM = XY is not included between angles L and N."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch7_t3_qm6',
        type: "mcq",
        question: "Why is SSA not a valid congruence criterion in general?",
        options: [
            "It doesn't provide enough information",
            "It can result in two different triangles with the same measurements",
            "It only works for equilateral triangles",
            "It requires too many measurements"
        ],
        correctAnswer: "It can result in two different triangles with the same measurements",
        explanation: "SSA (Side-Side-Angle) is not a valid congruence criterion because it can lead to the ambiguous case where two different triangles can be constructed with the same measurements. This happens when the given angle is not the one included between the two sides, and specifically when the side opposite to the angle is shorter than the other given side but longer than the height to that side. 📏",
        wrongAnswerExplanations: {
            "It doesn't provide enough information": "The issue isn't lack of information, but that the information can lead to multiple valid triangles.",
            "It only works for equilateral triangles": "SSA is not specifically related to equilateral triangles.",
            "It requires too many measurements": "The number of measurements is not the issue; it's the ambiguity in triangle construction."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 40
    },
    {
        id: 'cl9_ch7_t3_qm7',
        type: "mcq",
        question: "In what case would SSA be a valid congruence criterion?",
        options: [
            "When the angle is a right angle",
            "When the angle is acute",
            "When the angle is obtuse",
            "When the triangles are equilateral"
        ],
        correctAnswer: "When the angle is a right angle",
        explanation: "SSA becomes a valid congruence criterion when the angle is a right angle, which is then referred to as the RHS (Right angle-Hypotenuse-Side) criterion. In a right-angled triangle, if the hypotenuse and one side are equal to the corresponding parts of another right-angled triangle, then the triangles are congruent. The ambiguous case doesn't occur with right angles. 📊",
        wrongAnswerExplanations: {
            "When the angle is acute": "An acute angle in SSA can still lead to the ambiguous case.",
            "When the angle is obtuse": "An obtuse angle in SSA can still lead to ambiguity, though less frequently than acute angles.",
            "When the triangles are equilateral": "SSA doesn't apply to equilateral triangles, as they have all sides and angles equal."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch7_t3_qm8',
        type: "mcq",
        question: "In triangles DEF and PQR, if DE = 6 cm, EF = 8 cm, DF = 10 cm, PQ = 6 cm, QR = 8 cm, and PR = 10 cm, what can be concluded about the angles of these triangles?",
        options: [
            "Only ∠D = ∠P",
            "Only ∠E = ∠Q",
            "Only ∠F = ∠R",
            "∠D = ∠P, ∠E = ∠Q, and ∠F = ∠R"
        ],
        correctAnswer: "∠D = ∠P, ∠E = ∠Q, and ∠F = ∠R",
        explanation: "Since all three pairs of corresponding sides are equal (DE = PQ, EF = QR, DF = PR), the triangles are congruent by the SSS criterion. When triangles are congruent, all corresponding parts are equal, including all three pairs of angles. Therefore, ∠D = ∠P, ∠E = ∠Q, and ∠F = ∠R. This illustrates the principle of CPCTC (Corresponding Parts of Congruent Triangles are Congruent). 📐",
        wrongAnswerExplanations: {
            "Only ∠D = ∠P": "Not just one pair, but all three pairs of corresponding angles are equal.",
            "Only ∠E = ∠Q": "Not just one pair, but all three pairs of corresponding angles are equal.",
            "Only ∠F = ∠R": "Not just one pair, but all three pairs of corresponding angles are equal."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 40
    },
    {
        id: 'cl9_ch7_t3_qm9',
        type: "mcq",
        question: "In an isosceles triangle ABC with AB = AC, what is the relationship between angles B and C?",
        options: [
            "∠B < ∠C",
            "∠B > ∠C",
            "∠B = ∠C",
            "Cannot be determined"
        ],
        correctAnswer: "∠B = ∠C",
        explanation: "In an isosceles triangle, the angles opposite to the equal sides are equal. Since AB = AC, the angles opposite to these sides, ∠C and ∠B respectively, are equal. This can be proven using the SAS congruence criterion by drawing the angle bisector from A to BC, which creates two congruent triangles. 📐",
        wrongAnswerExplanations: {
            "∠B < ∠C": "In an isosceles triangle with AB = AC, the angles opposite to the equal sides are equal, not less than each other.",
            "∠B > ∠C": "In an isosceles triangle with AB = AC, the angles opposite to the equal sides are equal, not greater than each other.",
            "Cannot be determined": "The relationship can definitely be determined based on the properties of isosceles triangles."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 35
    },
    {
        id: 'cl9_ch7_t3_qm10',
        type: "mcq",
        question: "Which congruence criterion would you use to prove that the diagonals of a rhombus bisect each other at right angles?",
        options: [
            "SSS",
            "SAS",
            "ASA",
            "AAS"
        ],
        correctAnswer: "SAS",
        explanation: "To prove that the diagonals of a rhombus bisect each other at right angles, we can use the SAS criterion. Let the diagonals intersect at point O. Take any two adjacent triangles formed, like AOB and BOC. We know AO = OC (as diagonals bisect each other), BO = BO (common side), and ∠AOB = ∠BOC (right angles). By SAS, the triangles are congruent, helping establish the property. 📏",
        wrongAnswerExplanations: {
            "SSS": "While SSS could be used for some parts of the proof, SAS is more directly applicable.",
            "ASA": "ASA doesn't directly apply to the most straightforward proof for this property.",
            "AAS": "AAS doesn't directly apply to the most straightforward proof for this property."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 50
    },
    {
        id: 'cl9_ch7_t3_qm11',
        type: "mcq",
        question: "In triangles ABC and DEF, if AB = DE, AC = DF, and BC = EF, what can be said about the corresponding angles?",
        options: [
            "Only ∠A = ∠D",
            "Only ∠A = ∠D and ∠B = ∠E",
            "∠A = ∠D, ∠B = ∠E, and ∠C = ∠F",
            "Nothing can be said about the angles"
        ],
        correctAnswer: "∠A = ∠D, ∠B = ∠E, and ∠C = ∠F",
        explanation: "Since all three pairs of corresponding sides are equal (AB = DE, AC = DF, BC = EF), the triangles are congruent by the SSS criterion. When triangles are congruent, all corresponding parts are equal, including all three pairs of angles. Therefore, ∠A = ∠D, ∠B = ∠E, and ∠C = ∠F by CPCTC (Corresponding Parts of Congruent Triangles are Congruent). 📐",
        wrongAnswerExplanations: {
            "Only ∠A = ∠D": "Not just one pair, but all three pairs of corresponding angles are equal.",
            "Only ∠A = ∠D and ∠B = ∠E": "Not just two pairs, but all three pairs of corresponding angles are equal.",
            "Nothing can be said about the angles": "We can definitely conclude that all corresponding angles are equal based on the congruence of the triangles."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 40
    },
    {
        id: 'cl9_ch7_t3_qm12',
        type: "mcq",
        question: "In a parallelogram ABCD, if AC and BD are the diagonals intersecting at point O, which congruence criterion can be used to prove that triangles AOB and COD are congruent?",
        options: [
            "SSS",
            "SAS",
            "ASA",
            "AAS"
        ],
        correctAnswer: "SAS",
        explanation: "In a parallelogram, the diagonals bisect each other at point O. This means AO = OC and BO = OD. Also, ∠AOB and ∠COD are vertically opposite angles, so they are equal. Using the SAS (Side-Angle-Side) criterion with these equal parts (AO = OC, ∠AOB = ∠COD, BO = OD), we can prove that triangles AOB and COD are congruent. 📊",
        wrongAnswerExplanations: {
            "SSS": "We only know two pairs of sides are equal (AO = OC and BO = OD), not all three.",
            "ASA": "We only know one angle and two sides, not two angles and a side.",
            "AAS": "We only know one angle and two sides, not two angles and a side."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch7_t3_qm13',
        type: "mcq",
        question: "Which of the following would NOT help prove that two triangles are congruent?",
        options: [
            "Three pairs of equal angles",
            "Two pairs of equal sides and the included angle",
            "Two pairs of equal angles and the included side",
            "Two pairs of equal angles and a non-included side"
        ],
        correctAnswer: "Three pairs of equal angles",
        explanation: "Three pairs of equal angles (AAA) would not prove that two triangles are congruent. This only ensures the triangles are similar (same shape, possibly different sizes). For congruence, we need at least one pair of corresponding sides to be equal in addition to angle information. The other options all provide valid criteria for proving triangle congruence (SAS, ASA, and AAS respectively). 📏",
        wrongAnswerExplanations: {
            "Two pairs of equal sides and the included angle": "This is the SAS criterion, which is valid for proving congruence.",
            "Two pairs of equal angles and the included side": "This is the ASA criterion, which is valid for proving congruence.",
            "Two pairs of equal angles and a non-included side": "This is the AAS criterion, which is valid for proving congruence."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 40
    },
    {
        id: 'cl9_ch7_t3_qm14',
        type: "mcq",
        question: "If two right-angled triangles have their hypotenuses equal and one pair of legs equal, what can be said about the remaining legs?",
        options: [
            "They must be equal",
            "They must be unequal",
            "They may or may not be equal",
            "The relationship depends on the angles"
        ],
        correctAnswer: "They must be equal",
        explanation: "When two right-angled triangles have equal hypotenuses and one pair of legs equal, they are congruent by the RHS criterion. Since congruent triangles have all corresponding parts equal, the remaining legs must also be equal. This can also be verified using the Pythagorean theorem: if the hypotenuses and one pair of legs are equal, the remaining legs must be equal for the Pythagorean equation to hold in both triangles. 📊",
        wrongAnswerExplanations: {
            "They must be unequal": "This contradicts the congruence established by the RHS criterion.",
            "They may or may not be equal": "They must be equal due to the RHS criterion and the Pythagorean theorem.",
            "The relationship depends on the angles": "The relationship is determined by the RHS criterion, not additional angle information."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch7_t3_qm15',
        type: "mcq",
        question: "In triangles ABC and PQR, if AB = PQ, BC = QR, and ∠A = ∠P, which criterion, if any, can be used to prove congruence?",
        options: [
            "SSS",
            "SAS",
            "ASA",
            "None of the above"
        ],
        correctAnswer: "None of the above",
        explanation: "Given that AB = PQ, BC = QR, and ∠A = ∠P, we cannot directly apply any congruence criterion. These measurements don't match SSS (need all three sides), SAS (the equal angle ∠A is not between the two equal sides AB and BC), or ASA (need two angles and the included side). This information is insufficient to prove congruence without additional data. 🔍",
        wrongAnswerExplanations: {
            "SSS": "SSS requires all three sides to be equal, but we only know two pairs of sides are equal.",
            "SAS": "SAS requires the angle to be included between the two equal sides, but ∠A is not between AB and BC.",
            "ASA": "ASA requires two angles and the included side, but we only have one angle and two sides that are not related as required."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch7_t3_qm16',
        type: "mcq",
        question: "In triangles LMN and XYZ, if ∠L = ∠X, ∠M = ∠Y, and LN = XZ, which congruence criterion can be used?",
        options: [
            "SSS",
            "SAS",
            "ASA",
            "AAS"
        ],
        correctAnswer: "AAS",
        explanation: "Given that ∠L = ∠X, ∠M = ∠Y, and LN = XZ (a side that is not included between the two given angles), we can use the AAS (Angle-Angle-Side) criterion. Since two angles of a triangle determine the third (as angles in a triangle sum to 180°), we know ∠N = ∠Z. Therefore, triangles LMN and XYZ are congruent by the AAS criterion. 📐",
        wrongAnswerExplanations: {
            "SSS": "SSS requires all three sides to be equal, but we only know one pair of sides is equal.",
            "SAS": "SAS requires two sides and the included angle, but we have two angles and a non-included side.",
            "ASA": "ASA requires two angles and the included side, but here the side LN = XZ is not included between angles L and M."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch7_t3_qm17',
        type: "mcq",
        question: "Which of the following statements is TRUE for all isosceles triangles?",
        options: [
            "All sides are equal",
            "All angles are equal",
            "The angle bisector from the apex is also the perpendicular bisector of the base",
            "The angle bisector from any vertex is also the perpendicular bisector of the opposite side"
        ],
        correctAnswer: "The angle bisector from the apex is also the perpendicular bisector of the base",
        explanation: "In an isosceles triangle, the angle bisector from the apex (the vertex where the two equal sides meet) to the base is also the perpendicular bisector of the base. This can be proven using the SAS congruence criterion: the two equal sides, the equal angles created by the angle bisector, and the fact that the angle bisector creates congruent triangles implies it must also be the perpendicular bisector of the base. 📏",
        wrongAnswerExplanations: {
            "All sides are equal": "This describes an equilateral triangle, not all isosceles triangles. Isosceles triangles have at least two equal sides.",
            "All angles are equal": "This describes an equilateral triangle, not all isosceles triangles. Isosceles triangles have at least two equal angles.",
            "The angle bisector from any vertex is also the perpendicular bisector of the opposite side": "This is only true for the angle bisector from the apex, not from any vertex."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch7_t3_qm18',
        type: "mcq",
        question: "In a right-angled isosceles triangle, which congruence criterion requires the minimum number of measurements to establish congruence with another right-angled isosceles triangle?",
        options: [
            "One side",
            "Two sides",
            "One angle and one side",
            "Two angles and one side"
        ],
        correctAnswer: "One side",
        explanation: "For right-angled isosceles triangles, knowing just one side is sufficient to establish congruence. Since the triangle is right-angled, one angle is 90°. Since it's isosceles, two sides are equal, and two angles (other than the right angle) are equal (both 45°). Given these constraints, one side measurement uniquely determines the triangle, making all right-angled isosceles triangles with the same side length congruent. 📊",
        wrongAnswerExplanations: {
            "Two sides": "While two sides would be sufficient, one side is actually enough given the constraints.",
            "One angle and one side": "One angle alone doesn't add new information since we already know the angles (90°, 45°, 45°).",
            "Two angles and one side": "Two angles don't add new information since we already know all three angles."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 50
    },
    {
        id: 'cl9_ch7_t3_qm19',
        type: "mcq",
        question: "Which of the following sets of measurements would NOT uniquely determine a triangle?",
        options: [
            "Three sides: 3 cm, 4 cm, 5 cm",
            "Two sides: 5 cm, 7 cm and the included angle: 60°",
            "Two angles: 30°, 45° and the included side: 8 cm",
            "Two angles: 30°, 60° and the non-included side: 10 cm"
        ],
        correctAnswer: "Two angles: 30°, 60° and the non-included side: 10 cm",
        explanation: "The option 'Two angles: 30°, 60° and the non - included side: 10 cm' would not uniquely determine a triangle. While this information falls under the AAS criterion, the side length given must correspond to a specific side of the triangle. If we don't specify which side the 10 cm corresponds to (such as the side opposite to the 30° angle or the side opposite to the 60° angle), multiple non-congruent triangles could satisfy these conditions. 🔍",
    wrongAnswerExplanations: {
        "Three sides: 3 cm, 4 cm, 5 cm": "This uniquely determines a triangle by the SSS criterion.",
        "Two sides: 5 cm, 7 cm and the included angle: 60°": "This uniquely determines a triangle by the SAS criterion.",
        "Two angles: 30°, 45° and the included side: 8 cm": "This uniquely determines a triangle by the ASA criterion."
    },
    difficulty: "medium",
    marks: 2,
    recommendedTime: 50
    },
{
    id: 'cl9_ch7_t3_qm20',
        type: "mcq",
            question: "In the figure below, triangles ABC and DEF are such that AB = DE, BC = EF, and ∠ABC = ∠DEF. If ∠BAC = 30° and ∠EDF = 45°, can we conclude that the triangles are congruent?",
                options: [
                    "Yes, by the SAS criterion",
                    "Yes, by the ASA criterion",
                    "No, the triangles are not congruent",
                    "Cannot be determined with the given information"
                ],
                    correctAnswer: "No, the triangles are not congruent",
                        explanation: "Given that AB = DE, BC = EF, and ∠ABC = ∠DEF, we have two sides and the included angle equal, which suggests the SAS criterion. However, the other angles (∠BAC = 30° and ∠EDF = 45°) are different, which means the triangles cannot be congruent. Congruent triangles must have all corresponding parts equal, but here we have different angles. 📐",
                            wrongAnswerExplanations: {
        "Yes, by the SAS criterion": "While SAS conditions are met, the additional information about unequal angles (∠BAC ≠ ∠EDF) contradicts congruence.",
            "Yes, by the ASA criterion": "The given information doesn't satisfy ASA, and the triangles aren't congruent anyway due to unequal angles.",
                "Cannot be determined with the given information": "We can definitely determine the triangles are not congruent based on the different angles."
    },
    difficulty: "medium",
        marks: 2,
            recommendedTime: 50
}
]; 