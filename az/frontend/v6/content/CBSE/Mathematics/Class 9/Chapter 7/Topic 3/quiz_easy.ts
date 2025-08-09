// filepath: content/CBSE/Mathematics/Class 9/Chapter7/Topic3/quiz_easy.ts
import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl9_ch7_t3_qe1',
        type: "mcq",
        question: "Which congruence criterion states that if three sides of one triangle are equal to three sides of another triangle, then the triangles are congruent?",
        options: [
            "SAS",
            "ASA",
            "SSS",
            "AAS"
        ],
        correctAnswer: "SSS",
        explanation: "The SSS (Side-Side-Side) criterion states that if three sides of one triangle are equal to the three corresponding sides of another triangle, then the triangles are congruent. This is because a unique triangle is formed when all three side lengths are fixed. 📏",
        wrongAnswerExplanations: {
            "SAS": "SAS (Side-Angle-Side) requires two sides and the included angle to be equal.",
            "ASA": "ASA (Angle-Side-Angle) requires two angles and the included side to be equal.",
            "AAS": "AAS (Angle-Angle-Side) requires two angles and a non-included side to be equal."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch7_t3_qe2',
        type: "mcq",
        question: "In the SAS congruence criterion, what does the letter 'A' stand for?",
        options: [
            "Area",
            "Angle",
            "Adjacent",
            "Altitude"
        ],
        correctAnswer: "Angle",
        explanation: "In the SAS (Side-Angle-Side) congruence criterion, 'A' stands for Angle. This criterion states that if two sides and the included angle of one triangle are equal to the corresponding parts of another triangle, then the triangles are congruent. The angle must be the one formed between the two sides. 📐",
        wrongAnswerExplanations: {
            "Area": "Area is not used in congruence criteria naming conventions.",
            "Adjacent": "While the angle in SAS is adjacent to the sides, 'A' specifically stands for Angle.",
            "Altitude": "Altitude is not used in congruence criteria naming conventions."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 25
    },
    {
        id: 'cl9_ch7_t3_qe3',
        type: "mcq",
        question: "Which of the following is NOT a valid triangle congruence criterion?",
        options: [
            "SSS",
            "SAS",
            "ASA",
            "SSA"
        ],
        correctAnswer: "SSA",
        explanation: "SSA (Side-Side-Angle) is not a valid congruence criterion because it can result in two different triangles with the same measurements. This is known as the ambiguous case. For example, with two sides and a non-included angle, you can often construct two different triangles satisfying these conditions. ⚠️",
        wrongAnswerExplanations: {
            "SSS": "SSS is a valid criterion - three equal sides guarantee congruence.",
            "SAS": "SAS is a valid criterion - two equal sides and the included angle guarantee congruence.",
            "ASA": "ASA is a valid criterion - two equal angles and the included side guarantee congruence."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch7_t3_qe4',
        type: "mcq",
        question: "In the ASA congruence criterion, what does the middle 'S' stand for?",
        options: [
            "Side",
            "Similar",
            "Straight",
            "Segment"
        ],
        correctAnswer: "Side",
        explanation: "In the ASA (Angle-Side-Angle) congruence criterion, the middle 'S' stands for Side. This criterion states that if two angles and the included side of one triangle are equal to the corresponding parts of another triangle, then the triangles are congruent. The side must be the one between the two angles. 📏",
        wrongAnswerExplanations: {
            "Similar": "'Similar' is not used in congruence criteria naming conventions.",
            "Straight": "'Straight' is not used in congruence criteria naming conventions.",
            "Segment": "While a side is a line segment, 'S' specifically stands for Side in this context."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 25
    },
    {
        id: 'cl9_ch7_t3_qe5',
        type: "mcq",
        question: "What does the RHS congruence criterion apply to?",
        options: [
            "All triangles",
            "Only equilateral triangles",
            "Only right-angled triangles",
            "Only isosceles triangles"
        ],
        correctAnswer: "Only right-angled triangles",
        explanation: "The RHS (Right angle-Hypotenuse-Side) criterion applies only to right-angled triangles. It states that if the hypotenuse and one side of a right-angled triangle are equal to the hypotenuse and the corresponding side of another right-angled triangle, then the triangles are congruent. 📊",
        wrongAnswerExplanations: {
            "All triangles": "RHS is specific to right-angled triangles, not all triangles.",
            "Only equilateral triangles": "RHS is specific to right-angled triangles, not equilateral triangles. In fact, no equilateral triangle can be right-angled.",
            "Only isosceles triangles": "RHS is specific to right-angled triangles, though a right-angled triangle can also be isosceles."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch7_t3_qe6',
        type: "mcq",
        question: "What does the 'H' stand for in the RHS congruence criterion?",
        options: [
            "Height",
            "Horizontal",
            "Hypotenuse",
            "Half"
        ],
        correctAnswer: "Hypotenuse",
        explanation: "In the RHS (Right angle-Hypotenuse-Side) congruence criterion, 'H' stands for Hypotenuse. The hypotenuse is the longest side of a right-angled triangle, opposite to the right angle. This criterion is specific to right-angled triangles and requires the right angle, hypotenuse, and one side to be equal. 📐",
        wrongAnswerExplanations: {
            "Height": "While height (or altitude) is important in triangles, 'H' in RHS specifically refers to the Hypotenuse.",
            "Horizontal": "'Horizontal' is not used in this congruence criterion.",
            "Half": "'Half' is not used in this congruence criterion."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 25
    },
    {
        id: 'cl9_ch7_t3_qe7',
        type: "mcq",
        question: "In triangles ABC and PQR, if AB = PQ, BC = QR, and AC = PR, which congruence criterion can be used to prove they are congruent?",
        options: [
            "SSS",
            "SAS",
            "ASA",
            "AAS"
        ],
        correctAnswer: "SSS",
        explanation: "Since all three pairs of corresponding sides are equal (AB = PQ, BC = QR, and AC = PR), the SSS (Side-Side-Side) congruence criterion can be used to prove the triangles are congruent. The SSS criterion states that if all three sides of one triangle equal the corresponding sides of another triangle, the triangles are congruent. 🔍",
        wrongAnswerExplanations: {
            "SAS": "SAS requires two sides and the included angle to be equal, but here we only know about the sides.",
            "ASA": "ASA requires two angles and the included side to be equal, but here we only know about the sides.",
            "AAS": "AAS requires two angles and a non-included side to be equal, but here we only know about the sides."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch7_t3_qe8',
        type: "mcq",
        question: "In triangles ABC and DEF, if ∠A = ∠D, ∠B = ∠E, and AB = DE, which congruence criterion can be used?",
        options: [
            "SSS",
            "SAS",
            "ASA",
            "AAS"
        ],
        correctAnswer: "AAS",
        explanation: "Since two angles (∠A = ∠D, ∠B = ∠E) and a non-included side (AB = DE) are equal, the AAS (Angle-Angle-Side) criterion applies. This criterion states that if two angles and a non-included side of one triangle are equal to the corresponding parts of another triangle, the triangles are congruent. 📐",
        wrongAnswerExplanations: {
            "SSS": "SSS requires all three sides to be equal, but we only know one pair of sides is equal.",
            "SAS": "SAS requires two sides and the included angle, which doesn't match the given information.",
            "ASA": "ASA requires two angles and the included side, but here the side AB = DE is not between angles A and C."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch7_t3_qe9',
        type: "mcq",
        question: "Which congruence criterion should be used if two triangles have two pairs of equal angles and the sides opposite to one pair of these angles are equal?",
        options: [
            "SSS",
            "SAS",
            "ASA",
            "AAS"
        ],
        correctAnswer: "AAS",
        explanation: "When two triangles have two pairs of equal angles and the sides opposite to one pair of these angles are equal, the AAS (Angle-Angle-Side) criterion applies. This is because we have two angles and a non-included side that are equal in both triangles, which is sufficient to prove congruence. 🔍",
        wrongAnswerExplanations: {
            "SSS": "SSS requires all three sides to be equal, but here we only know one pair of sides is equal.",
            "SAS": "SAS requires two sides and the included angle to be equal, but here we have two angles and a side that is not included between them.",
            "ASA": "ASA requires two angles and the included side to be equal, but here the side is not between the two angles."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 35
    },
    {
        id: 'cl9_ch7_t3_qe10',
        type: "mcq",
        question: "If two right-angled triangles have their hypotenuses equal, what additional information would guarantee their congruence?",
        options: [
            "One pair of corresponding angles is equal",
            "The perimeters are equal",
            "One pair of corresponding legs is equal",
            "The areas are equal"
        ],
        correctAnswer: "One pair of corresponding legs is equal",
        explanation: "For two right-angled triangles with equal hypotenuses, having one pair of corresponding legs (sides) equal guarantees their congruence by the RHS (Right angle-Hypotenuse-Side) criterion. By the Pythagorean theorem, the third side of each triangle is then determined, making the triangles congruent. 📊",
        wrongAnswerExplanations: {
            "One pair of corresponding angles is equal": "Since both triangles are right-angled, they already have one pair of angles equal (90°). A second pair wouldn't necessarily guarantee congruence.",
            "The perimeters are equal": "Equal perimeters don't guarantee congruence, even for right-angled triangles.",
            "The areas are equal": "Equal areas don't guarantee congruence, even for right-angled triangles."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 35
    },
    {
        id: 'cl9_ch7_t3_qe11',
        type: "mcq",
        question: "Why is AAA not a valid congruence criterion for triangles?",
        options: [
            "Three angles don't uniquely determine a triangle",
            "It's too complex to apply in proofs",
            "It only works for right-angled triangles",
            "It requires too many measurements"
        ],
        correctAnswer: "Three angles don't uniquely determine a triangle",
        explanation: "AAA (Angle-Angle-Angle) is not a valid congruence criterion because three equal angles only ensure that the triangles are similar, not necessarily congruent. Triangles with the same three angles can have different sizes. For example, a 30°-60°-90° triangle can be of any size while maintaining these angles. 📏",
        wrongAnswerExplanations: {
            "It's too complex to apply in proofs": "The complexity of application is not the reason AAA isn't valid for congruence.",
            "It only works for right-angled triangles": "AAA doesn't work for congruence in any type of triangle.",
            "It requires too many measurements": "The number of measurements is not the issue; it's what those measurements determine."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 35
    },
    {
        id: 'cl9_ch7_t3_qe12',
        type: "mcq",
        question: "In the SAS congruence criterion, what must be true about the angle?",
        options: [
            "It must be a right angle",
            "It must be an acute angle",
            "It must be the included angle between the two sides",
            "It must be an obtuse angle"
        ],
        correctAnswer: "It must be the included angle between the two sides",
        explanation: "In the SAS (Side-Angle-Side) criterion, the angle must be the included angle between the two sides. This means it's the angle formed by the two sides we're comparing. If the angle is not between the two sides, the SAS criterion doesn't apply, and congruence isn't guaranteed. 📐",
        wrongAnswerExplanations: {
            "It must be a right angle": "The angle doesn't need to be a right angle; it can be any angle measure.",
            "It must be an acute angle": "The angle doesn't need to be acute; it can be any angle measure.",
            "It must be an obtuse angle": "The angle doesn't need to be obtuse; it can be any angle measure."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch7_t3_qe13',
        type: "mcq",
        question: "What is the minimum number of corresponding parts that must be equal to prove two triangles congruent?",
        options: [
            "Two",
            "Three",
            "Four",
            "Six"
        ],
        correctAnswer: "Three",
        explanation: "Three corresponding parts must be equal to prove two triangles congruent, but they must be the correct three parts as specified by the congruence criteria (SSS, SAS, ASA, AAS, RHS). Simply having any three parts equal doesn't guarantee congruence; they must follow one of these specific patterns. 🧮",
        wrongAnswerExplanations: {
            "Two": "Two parts are not sufficient to guarantee congruence.",
            "Four": "While four parts would be sufficient, three properly chosen parts are enough.",
            "Six": "Six parts (all sides and all angles) would definitely prove congruence, but this is more than the minimum needed."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch7_t3_qe14',
        type: "mcq",
        question: "In triangles PQR and XYZ, if PQ = XY, QR = YZ, and ∠Q = ∠Y, which congruence criterion applies?",
        options: [
            "SSS",
            "SAS",
            "ASA",
            "AAS"
        ],
        correctAnswer: "SAS",
        explanation: "Since two sides (PQ = XY, QR = YZ) and the included angle (∠Q = ∠Y) are equal, the SAS (Side-Angle-Side) criterion applies. This criterion states that if two sides and the included angle of one triangle are equal to the corresponding parts of another triangle, the triangles are congruent. 🔍",
        wrongAnswerExplanations: {
            "SSS": "SSS requires all three sides to be equal, but we only know two pairs of sides are equal.",
            "ASA": "ASA requires two angles and the included side, but we have two sides and the included angle.",
            "AAS": "AAS requires two angles and a non-included side, which doesn't match the given information."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch7_t3_qe15',
        type: "mcq",
        question: "Which of the following statements about congruence criteria is TRUE?",
        options: [
            "SSA always guarantees triangle congruence",
            "ASA requires two sides and one angle to be equal",
            "RHS is applicable to all types of triangles",
            "SAS requires the angle to be between the two sides"
        ],
        correctAnswer: "SAS requires the angle to be between the two sides",
        explanation: "In the SAS (Side-Angle-Side) criterion, the angle must be the one included between the two sides. This is a critical requirement for the criterion to be valid. If the angle is not between the two sides, congruence is not guaranteed, and we would have the SSA case, which is not a valid congruence criterion. 📐",
        wrongAnswerExplanations: {
            "SSA always guarantees triangle congruence": "SSA (Side-Side-Angle) doesn't always guarantee congruence; it can lead to the ambiguous case.",
            "ASA requires two sides and one angle to be equal": "ASA (Angle-Side-Angle) requires two angles and the included side to be equal.",
            "RHS is applicable to all types of triangles": "RHS (Right angle-Hypotenuse-Side) is only applicable to right-angled triangles."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 35
    },
    {
        id: 'cl9_ch7_t3_qe16',
        type: "mcq",
        question: "In triangles ABC and PQR, if ∠A = ∠P, ∠B = ∠Q, and ∠C = ∠R, can we conclude the triangles are congruent?",
        options: [
            "Yes, because all angles are equal",
            "Yes, if they are right-angled triangles",
            "No, the triangles are similar but not necessarily congruent",
            "No, we need more information about the sides"
        ],
        correctAnswer: "No, the triangles are similar but not necessarily congruent",
        explanation: "When all three angles of one triangle equal the corresponding angles of another triangle (AAA), the triangles are similar but not necessarily congruent. They have the same shape but might have different sizes. To establish congruence, we need information about at least one pair of corresponding sides. 🔄",
        wrongAnswerExplanations: {
            "Yes, because all angles are equal": "Equal angles only ensure similarity, not congruence.",
            "Yes, if they are right-angled triangles": "Even for right-angled triangles, equal angles don't guarantee congruence.",
            "No, we need more information about the sides": "This is correct, but the better answer is that the triangles are similar, as that's the specific relationship determined by equal angles."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch7_t3_qe17',
        type: "mcq",
        question: "If two right-angled triangles have their hypotenuses equal, what additional information would guarantee their congruence?",
        options: [
            "One pair of corresponding angles is equal",
            "The perimeters are equal",
            "One pair of corresponding legs is equal",
            "The areas are equal"
        ],
        correctAnswer: "One pair of corresponding legs is equal",
        explanation: "For two right-angled triangles with equal hypotenuses, having one pair of corresponding legs (sides) equal guarantees their congruence by the RHS (Right angle-Hypotenuse-Side) criterion. By the Pythagorean theorem, the third side of each triangle is then determined, making the triangles congruent. 📊",
        wrongAnswerExplanations: {
            "One pair of corresponding angles is equal": "Since both triangles are right-angled, they already have one pair of angles equal (90°). A second pair wouldn't necessarily guarantee congruence.",
            "The perimeters are equal": "Equal perimeters don't guarantee congruence, even for right-angled triangles.",
            "The areas are equal": "Equal areas don't guarantee congruence, even for right-angled triangles."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 35
    },
    {
        id: 'cl9_ch7_t3_qe18',
        type: "mcq",
        question: "In triangles ABC and DEF, if ∠A = ∠D, ∠C = ∠F, and AB = DE, which congruence criterion applies?",
        options: [
            "SSS",
            "SAS",
            "ASA",
            "AAS"
        ],
        correctAnswer: "AAS",
        explanation: "Since two angles (∠A = ∠D, ∠C = ∠F) and a non-included side (AB = DE) are equal, the AAS (Angle-Angle-Side) criterion applies. This criterion states that if two angles and a non-included side of one triangle are equal to the corresponding parts of another triangle, the triangles are congruent. 📐",
        wrongAnswerExplanations: {
            "SSS": "SSS requires all three sides to be equal, but we only know one pair of sides is equal.",
            "SAS": "SAS requires two sides and the included angle, which doesn't match the given information.",
            "ASA": "ASA requires two angles and the included side, but here the side AB = DE is not between angles A and C."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch7_t3_qe19',
        type: "mcq",
        question: "In triangles PQR and XYZ, if ∠P = ∠X, QR = YZ, and ∠R = ∠Z, which congruence criterion applies?",
        options: [
            "SSS",
            "SAS",
            "ASA",
            "AAS"
        ],
        correctAnswer: "ASA",
        explanation: "Since two angles (∠P = ∠X, ∠R = ∠Z) and the included side (QR = YZ) are equal, the ASA (Angle-Side-Angle) criterion applies. This criterion states that if two angles and the included side of one triangle are equal to the corresponding parts of another triangle, the triangles are congruent. 🔍",
        wrongAnswerExplanations: {
            "SSS": "SSS requires all three sides to be equal, but we only know one pair of sides is equal.",
            "SAS": "SAS requires two sides and the included angle, which doesn't match the given information.",
            "AAS": "AAS requires two angles and a non-included side, but here the side QR = YZ is included between angles R and P (considering the triangle as PQR)."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch7_t3_qe20',
        type: "mcq",
        question: "What happens if you have two triangles with two pairs of equal sides, but the included angles are not equal?",
        options: [
            "The triangles are still congruent",
            "The triangles must be equilateral",
            "The triangles are not necessarily congruent",
            "The triangles must be right-angled"
        ],
        correctAnswer: "The triangles are not necessarily congruent",
        explanation: "If two triangles have two pairs of equal sides but the included angles are not equal, the triangles are not necessarily congruent. This doesn't satisfy the SAS criterion, which requires the included angles to be equal. Different included angles can result in triangles with different shapes and sizes, even if two pairs of sides are equal. 📏",
        wrongAnswerExplanations: {
            "The triangles are still congruent": "Without equal included angles, the SAS criterion isn't satisfied, so congruence isn't guaranteed.",
            "The triangles must be equilateral": "There's no reason the triangles must be equilateral based on this information.",
            "The triangles must be right-angled": "There's no reason the triangles must be right-angled based on this information."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    }
]; 