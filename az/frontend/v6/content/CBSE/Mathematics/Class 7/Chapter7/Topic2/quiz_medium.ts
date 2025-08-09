// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 7\Chapter7\Topic2\quiz_medium.ts
// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 7\Chapter7\Topic2\quiz_medium.ts
import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: "cl7_ch7_t2_qm1",
        type: "mcq",
        question: "In triangles ABC and PQR, if AB = PQ, BC = QR, and ∠B = ∠Q, which congruence criterion can be used to prove that the triangles are congruent?",
        options: ["SSS", "SAS", "ASA", "AAS"],
        correctAnswer: "SAS",
        explanation: "Two sides and the included angle (AB = PQ, BC = QR, ∠B = ∠Q) satisfy the SAS criterion.",
        wrongAnswerExplanations: {
            "SSS": "We don't have information about the third sides AC and PR.",
            "ASA": "We only have one pair of equal angles, not two.",
            "AAS": "We don't have two pairs of equal angles."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: "cl7_ch7_t2_qm2",
        type: "mcq",
        question: "In a geometric proof, if you know that ∠B = ∠E, ∠C = ∠F, and BC = EF, which congruence criterion can you use to prove triangles ABC and DEF congruent?",
        options: ["SSS", "SAS", "ASA", "None of these"],
        correctAnswer: "ASA",
        explanation: "Two angles and the included side (∠B = ∠E, ∠C = ∠F, BC = EF) satisfy the ASA criterion.",
        wrongAnswerExplanations: {
            "SSS": "We only have information about one pair of sides, not three.",
            "SAS": "We don't have two pairs of equal sides and the included angle.",
            "None of these": "ASA is a valid criterion for this case."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: "cl7_ch7_t2_qm3",
        type: "mcq",
        question: "Two right-angled triangles have equal hypotenuses and one pair of equal legs. Which congruence criterion proves they are congruent?",
        options: ["SSS", "SAS", "ASA", "RHS"],
        correctAnswer: "RHS",
        explanation: "Right angle, equal hypotenuses, and one pair of equal legs satisfy the RHS criterion for right triangles.",
        wrongAnswerExplanations: {
            "SSS": "We only know two pairs of equal sides, not three.",
            "SAS": "We don't know if the equal legs are between equal angles.",
            "ASA": "We only know one pair of equal angles (right angles)."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: "cl7_ch7_t2_qm4",
        type: "mcq",
        question: "If the perimeters of two triangles are equal, what can you conclude about their congruence?",
        options: ["They are definitely congruent", "They are not congruent", "They may or may not be congruent", "They are similar but not congruent"],
        correctAnswer: "They may or may not be congruent",
        explanation: "Equal perimeters don't guarantee congruence. Different triangles can have the same perimeter.",
        wrongAnswerExplanations: {
            "They are definitely congruent": "Equal perimeters don't ensure congruence.",
            "They are not congruent": "Equal perimeters don't rule out congruence.",
            "They are similar but not congruent": "Equal perimeters don't establish similarity."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: "cl7_ch7_t2_qm5",
        type: "mcq",
        question: "In triangles PQR and XYZ, if PQ = XY, QR = YZ, and ∠P = ∠X, which additional piece of information would prove the triangles congruent by SAS?",
        options: ["PR = XZ", "∠Q = ∠Y", "∠R = ∠Z", "None of these"],
        correctAnswer: "None of these",
        explanation: "For SAS, the angle must be between the two equal sides. ∠P = ∠X is not between PQ and QR.",
        wrongAnswerExplanations: {
            "PR = XZ": "This would give SSS, not SAS.",
            "∠Q = ∠Y": "This would still not give SAS as ∠P = ∠X is not the included angle.",
            "∠R = ∠Z": "This would still not give SAS as ∠P = ∠X is not the included angle."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: "cl7_ch7_t2_qm6",
        type: "mcq",
        question: "Which of the following is sufficient to prove that two triangles are congruent?",
        options: ["Two sides and an angle not included between them are equal", "Three angles are equal", "Two angles and any side are equal", "One side and two angles not adjacent to that side are equal"],
        correctAnswer: "Two angles and any side are equal",
        explanation: "Two angles and any side (ASA or AAS) is sufficient for congruence of triangles.",
        wrongAnswerExplanations: {
            "Two sides and an angle not included between them are equal": "This is SSA, which doesn't guarantee congruence.",
            "Three angles are equal": "This is AAA, which only proves similarity, not congruence.",
            "One side and two angles not adjacent to that side are equal": "This is equivalent to AAA, not sufficient for congruence."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: "cl7_ch7_t2_qm7",
        type: "mcq",
        question: "In an isosceles triangle, the base angles are congruent. What congruence criterion can be used to prove that the two triangles formed by the altitude to the base are congruent?",
        options: ["SSS", "SAS", "ASA", "RHS"],
        correctAnswer: "ASA",
        explanation: "The altitude creates right angles and equal base angles, with the altitude as common side (ASA).",
        wrongAnswerExplanations: {
            "SSS": "We don't have three pairs of equal sides immediately available.",
            "SAS": "While this could work, ASA is more directly applicable with the given information.",
            "RHS": "While both triangles are right-angled, we don't immediately know about equal hypotenuses."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: "cl7_ch7_t2_qm8",
        type: "mcq",
        question: "Which congruence criterion is being used in the statement: 'If two angles and the non-included side of one triangle are equal to two angles and the corresponding non-included side of another triangle, then the triangles are congruent'?",
        options: ["SSS", "SAS", "ASA", "AAS"],
        correctAnswer: "AAS",
        explanation: "AAS (Angle-Angle-Side) criterion has two angles and a non-included side equal.",
        wrongAnswerExplanations: {
            "SSS": "SSS requires three pairs of equal sides.",
            "SAS": "SAS requires two sides and the included angle to be equal.",
            "ASA": "ASA requires two angles and the included side to be equal."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: "cl7_ch7_t2_qm9",
        type: "mcq",
        question: "Which property is NOT guaranteed when two triangles are congruent?",
        options: ["Equal corresponding sides", "Equal corresponding angles", "Same orientation", "Equal areas"],
        correctAnswer: "Same orientation",
        explanation: "Congruent triangles may have different orientations (one might be flipped or rotated).",
        wrongAnswerExplanations: {
            "Equal corresponding sides": "Congruent triangles always have equal corresponding sides.",
            "Equal corresponding angles": "Congruent triangles always have equal corresponding angles.",
            "Equal areas": "Congruent triangles always have equal areas."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: "cl7_ch7_t2_qm10",
        type: "mcq",
        question: "In a proof, triangles ABC and PQR are shown to be congruent using the ASA criterion. If AB = 5 cm, BC = 7 cm, and AC = 8 cm, what is the length of PR?",
        options: ["5 cm", "7 cm", "8 cm", "Cannot be determined"],
        correctAnswer: "8 cm",
        explanation: "In congruent triangles, corresponding sides are equal. PR corresponds to AC, so PR = 8 cm.",
        wrongAnswerExplanations: {
            "5 cm": "PR corresponds to AC, not AB.",
            "7 cm": "PR corresponds to AC, not BC.",
            "Cannot be determined": "Since the triangles are congruent, PR = AC = 8 cm."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: "cl7_ch7_t2_qm11",
        type: "mcq",
        question: "In an equilateral triangle, all sides are equal and all angles are 60°. What is the minimum information needed to prove that two equilateral triangles are congruent?",
        options: ["One pair of equal sides", "One pair of equal angles", "Two pairs of equal sides", "Three pairs of equal sides"],
        correctAnswer: "One pair of equal sides",
        explanation: "In equilateral triangles, one equal side implies all sides and angles are equal (by definition).",
        wrongAnswerExplanations: {
            "One pair of equal angles": "All equilateral triangles have 60° angles, so this doesn't distinguish size.",
            "Two pairs of equal sides": "One equal side is sufficient for equilateral triangles.",
            "Three pairs of equal sides": "One equal side is sufficient for equilateral triangles."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: "cl7_ch7_t2_qm12",
        type: "mcq",
        question: "Which congruence criterion is most useful for proving that the diagonals of a rhombus bisect each other perpendicularly?",
        options: ["SSS", "SAS", "ASA", "RHS"],
        correctAnswer: "SAS",
        explanation: "When diagonals intersect, they form triangles with two equal sides (half-diagonals) and right angles.",
        wrongAnswerExplanations: {
            "SSS": "While valid eventually, SAS is more directly applicable with the given property.",
            "ASA": "We immediately know about sides and the right angle, making SAS more suitable.",
            "RHS": "RHS is for right triangles with hypotenuse and one leg, not directly applicable here."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: "cl7_ch7_t2_qm13",
        type: "mcq",
        question: "In a proof, a student correctly shows that three sides of one triangle equal three sides of another triangle. What is the maximum number of parts that must be checked to fully confirm congruence?",
        options: ["0 more parts", "3 more parts", "2 more parts", "1 more part"],
        correctAnswer: "0 more parts",
        explanation: "By SSS criterion, equal sides are sufficient to prove congruence. No additional checks needed.",
        wrongAnswerExplanations: {
            "3 more parts": "SSS is sufficient; no more parts need to be checked.",
            "2 more parts": "SSS is sufficient; no more parts need to be checked.",
            "1 more part": "SSS is sufficient; no more parts need to be checked."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: "cl7_ch7_t2_qm14",
        type: "mcq",
        question: "If ΔABC and ΔDEF are congruent, and the correspondence is A↔D, B↔E, C↔F, which statement must be true?",
        options: ["AB = DE only", "∠A = ∠D only", "AB + BC + CA = DE + EF + FD", "AB = DE and BC = EF and CA = FD"],
        correctAnswer: "AB = DE and BC = EF and CA = FD",
        explanation: "In congruent triangles with given correspondence, all corresponding sides are equal.",
        wrongAnswerExplanations: {
            "AB = DE only": "All corresponding sides and angles are equal, not just one pair.",
            "∠A = ∠D only": "All corresponding sides and angles are equal, not just one pair.",
            "AB + BC + CA = DE + EF + FD": "This only states that perimeters are equal, which is true but incomplete."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: "cl7_ch7_t2_qm15",
        type: "mcq",
        question: "In a quadrilateral ABCD, the diagonals AC and BD intersect at point O. If OA = OC and OB = OD, which of the following is true?",
        options: ["ABCD is a rectangle", "ABCD is a rhombus", "ABCD is a parallelogram", "ABCD is a square"],
        correctAnswer: "ABCD is a parallelogram",
        explanation: "When diagonals bisect each other, the quadrilateral is a parallelogram (by congruence of triangles).",
        wrongAnswerExplanations: {
            "ABCD is a rectangle": "A rectangle needs right angles, not just bisecting diagonals.",
            "ABCD is a rhombus": "A rhombus needs equal sides, not just bisecting diagonals.",
            "ABCD is a square": "A square needs both equal sides and right angles."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: "cl7_ch7_t2_qm16",
        type: "mcq",
        question: "Which of the following statements is NOT a valid application of triangle congruence criteria?",
        options: ["The angle bisector of a triangle divides the opposite side proportionally", "The diagonals of a parallelogram bisect each other", "Corresponding parts of congruent triangles are equal", "Base angles of an isosceles triangle are equal"],
        correctAnswer: "The angle bisector of a triangle divides the opposite side proportionally",
        explanation: "This is a property of angle bisectors related to similar triangles, not congruence.",
        wrongAnswerExplanations: {
            "The diagonals of a parallelogram bisect each other": "This can be proven using congruence criteria.",
            "Corresponding parts of congruent triangles are equal": "This is the definition of congruence.",
            "Base angles of an isosceles triangle are equal": "This can be proven using congruence criteria."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: "cl7_ch7_t2_qm17",
        type: "mcq",
        question: "In triangles ABC and DEF, if AB = DE, ∠A = ∠D, and ∠C = ∠F, which criterion can be used to prove congruence?",
        options: ["SSS", "SAS", "ASA", "AAS"],
        correctAnswer: "AAS",
        explanation: "Two angles (∠A = ∠D, ∠C = ∠F) and a non-included side (AB = DE) satisfy the AAS criterion.",
        wrongAnswerExplanations: {
            "SSS": "We only have information about one pair of sides, not three.",
            "SAS": "We don't have the included angle between equal sides.",
            "ASA": "We don't have the included side between equal angles."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: "cl7_ch7_t2_qm18",
        type: "mcq",
        question: "To prove that the diagonals of a rhombus bisect each other at right angles, which congruence criterion would be most useful?",
        options: ["SSS", "SAS", "ASA", "RHS"],
        correctAnswer: "SAS",
        explanation: "The half-diagonals form equal sides with right angles at intersection, making SAS applicable.",
        wrongAnswerExplanations: {
            "SSS": "We immediately know sides and right angle, making SAS more direct.",
            "ASA": "We immediately know sides and right angle, making SAS more direct.",
            "RHS": "While applicable for the right triangles formed, SAS is more directly relevant."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: "cl7_ch7_t2_qm19",
        type: "mcq",
        question: "Which property is most directly proven using congruence criteria?",
        options: ["The angles in a triangle sum to 180°", "A line has infinite points", "Base angles of an isosceles triangle are equal", "The Pythagorean theorem"],
        correctAnswer: "Base angles of an isosceles triangle are equal",
        explanation: "This is proven by showing two triangles formed by the altitude are congruent by SAS criterion.",
        wrongAnswerExplanations: {
            "The angles in a triangle sum to 180°": "This uses parallel lines and alternate angles.",
            "A line has infinite points": "This is an undefined concept in geometry.",
            "The Pythagorean theorem": "This is proven using area relationships, not primarily congruence."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: "cl7_ch7_t2_qm20",
        type: "mcq",
        question: "In an isosceles triangle ABC with AB = AC, what can be concluded about the angles opposite to these sides?",
        options: ["∠B > ∠C", "∠B < ∠C", "∠B = ∠C", "Nothing can be concluded"],
        correctAnswer: "∠B = ∠C",
        explanation: "In an isosceles triangle, angles opposite to equal sides are equal (proven by congruence).",
        wrongAnswerExplanations: {
            "∠B > ∠C": "Equal sides have equal opposite angles.",
            "∠B < ∠C": "Equal sides have equal opposite angles.",
            "Nothing can be concluded": "We can definitely conclude equal opposite angles."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    }
];
