// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 7\Chapter7\Topic1\quiz_easy.ts
import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl7_ch7_t1_qe1',
        type: "mcq",
        question: "What does the congruence symbol ≅ mean when comparing two triangles?",
        options: ["The triangles have the same area", "The triangles have exactly the same shape and size", "The triangles have the same perimeter", "The triangles have three equal angles"],
        correctAnswer: "The triangles have exactly the same shape and size",
        explanation: "The congruence symbol ≅ indicates that the triangles have identical shape and size, with all corresponding sides and angles being equal. 🔺",
        wrongAnswerExplanations: {
            "The triangles have the same area": "Two triangles can have equal areas but different shapes, so this doesn't define congruence.",
            "The triangles have the same perimeter": "Two triangles with equal perimeters can have different shapes and sizes.",
            "The triangles have three equal angles": "This defines similar triangles, not necessarily congruent ones."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch7_t1_qe2',
        type: "mcq",
        question: "Which congruence criterion states that if three sides of one triangle equal three sides of another triangle, the triangles are congruent?",
        options: ["SSS", "SAS", "ASA", "RHS"],
        correctAnswer: "SSS",
        explanation: "SSS (Side-Side-Side) criterion states that if three sides of one triangle equal the corresponding three sides of another triangle, the triangles are congruent. 📏📏📏",
        wrongAnswerExplanations: {
            "SAS": "SAS refers to Side-Angle-Side, not three sides.",
            "ASA": "ASA refers to Angle-Side-Angle, not three sides.",
            "RHS": "RHS refers to Right angle-Hypotenuse-Side, specific to right triangles."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch7_t1_qe3',
        type: "mcq",
        question: "In the SAS congruence criterion, what does the first 'S' stand for?",
        options: ["Side", "Segment", "Similar", "Straight"],
        correctAnswer: "Side",
        explanation: "In the SAS (Side-Angle-Side) criterion, the first 'S' stands for Side, referring to one of the sides of the triangle. The criterion requires two equal sides and their included angle. 📐",
        wrongAnswerExplanations: {
            "Segment": "While a side is a segment, the specific term used in SAS is 'Side'.",
            "Similar": "Similar refers to a different relationship between shapes.",
            "Straight": "This is not related to the SAS criterion."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch7_t1_qe4',
        type: "mcq",
        question: "Which congruence criterion involves a right angle, the hypotenuse, and a side?",
        options: ["ASA", "SSS", "SAS", "RHS"],
        correctAnswer: "RHS",
        explanation: "The RHS (Right angle-Hypotenuse-Side) criterion applies to right-angled triangles when the hypotenuse and one side of one triangle equal the hypotenuse and corresponding side of another right triangle. 📐",
        wrongAnswerExplanations: {
            "ASA": "ASA refers to Angle-Side-Angle, not specifically involving right angles or hypotenuse.",
            "SSS": "SSS refers to Side-Side-Side, with no specific requirement for right angles.",
            "SAS": "SAS refers to Side-Angle-Side, with no specific requirement for right angles."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch7_t1_qe5',
        type: "mcq",
        question: "In two triangles ABC and PQR, if AB = PQ, BC = QR, and AC = PR, which congruence criterion proves that the triangles are congruent?",
        options: ["SSS", "SAS", "ASA", "AAA"],
        correctAnswer: "SSS",
        explanation: "If all three sides of triangle ABC equal the corresponding sides of triangle PQR (AB = PQ, BC = QR, and AC = PR), then by the SSS criterion, the triangles are congruent. 🔢",
        wrongAnswerExplanations: {
            "SAS": "SAS requires two sides and the included angle, not three sides.",
            "ASA": "ASA requires two angles and the included side, not three sides.",
            "AAA": "AAA is not a valid congruence criterion; it only shows similarity."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 40
    },
    {
        id: 'cl7_ch7_t1_qe6',
        type: "mcq",
        question: "What is the minimum number of corresponding parts that need to be equal to prove two triangles are congruent?",
        options: ["3", "4", "5", "6"],
        correctAnswer: "3",
        explanation: "Three corresponding parts (using SSS, SAS, ASA, or RHS criteria) are the minimum needed to prove two triangles are congruent. Not any three parts will work—they must follow one of the congruence criteria. 🧩",
        wrongAnswerExplanations: {
            "4": "The congruence criteria (SSS, SAS, ASA, RHS) all require only 3 corresponding parts.",
            "5": "This is more than the minimum required by the congruence criteria.",
            "6": "While 6 parts (3 sides and 3 angles) would ensure congruence, it's more than the minimum required."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch7_t1_qe7',
        type: "mcq",
        question: "In the ASA congruence criterion, what does the 'A' stand for?",
        options: ["Angle", "Area", "Adjacent", "Altitude"],
        correctAnswer: "Angle",
        explanation: "In the ASA (Angle-Side-Angle) criterion, 'A' stands for Angle. This criterion states that if two angles and the included side of one triangle equal the corresponding parts of another triangle, they are congruent. 📐",
        wrongAnswerExplanations: {
            "Area": "Area is not directly used in congruence criteria.",
            "Adjacent": "While the angles are adjacent to the side in ASA, the 'A' specifically means Angle.",
            "Altitude": "Altitude is not part of the standard congruence criteria."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch7_t1_qe8',
        type: "mcq",
        question: "If two triangles have all three angles equal (AAA), are they necessarily congruent?",
        options: ["Yes, always", "No, they are only similar", "Yes, but only for right triangles", "It depends on the size of the angles"],
        correctAnswer: "No, they are only similar",
        explanation: "When two triangles have all three angles equal (AAA), they are similar but not necessarily congruent. They have the same shape but might differ in size. AAA is not a congruence criterion. 🔍",
        wrongAnswerExplanations: {
            "Yes, always": "This is incorrect. AAA only proves similarity, not congruence.",
            "Yes, but only for right triangles": "Even for right triangles, equal angles don't ensure congruence.",
            "It depends on the size of the angles": "Regardless of the angle sizes, AAA never guarantees congruence."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch7_t1_qe9',
        type: "mcq",
        question: "Which congruence criterion states that if two angles and the included side of one triangle equal the corresponding parts of another triangle, they are congruent?",
        options: ["SSS", "SAS", "ASA", "AAS"],
        correctAnswer: "ASA",
        explanation: "The ASA (Angle-Side-Angle) criterion states that if two angles and the included side of one triangle equal the corresponding parts of another triangle, they are congruent. 🔄📏🔄",
        wrongAnswerExplanations: {
            "SSS": "SSS refers to three sides, not angles and a side.",
            "SAS": "SAS refers to two sides and the included angle, not two angles and a side.",
            "AAS": "AAS is a valid criterion but refers to two angles and a non-included side."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch7_t1_qe10',
        type: "mcq",
        question: "In two congruent triangles, how many pairs of corresponding parts are equal?",
        options: ["3", "4", "5", "6"],
        correctAnswer: "6",
        explanation: "In congruent triangles, all 6 corresponding parts are equal: 3 pairs of sides and 3 pairs of angles. Congruent triangles are identical in all respects. ✅",
        wrongAnswerExplanations: {
            "3": "This is the minimum needed to prove congruence, but congruent triangles have 6 equal pairs.",
            "4": "Congruent triangles have all 6 corresponding parts equal, not just 4.",
            "5": "Congruent triangles have all 6 corresponding parts equal, not just 5."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch7_t1_qe11',
        type: "mcq",
        question: "What is the symbol used to denote congruence between triangles?",
        options: ["=", "~", "≅", "≈"],
        correctAnswer: "≅",
        explanation: "The symbol ≅ is used to denote congruence between triangles. For example, △ABC ≅ △DEF means triangle ABC is congruent to triangle DEF. 🎯",
        wrongAnswerExplanations: {
            "=": "The equals sign is used for equality, not specifically for congruence of geometric shapes.",
            "~": "The tilde symbol is typically used to denote similarity, not congruence.",
            "≈": "The approximately equal symbol denotes rough equality, not congruence."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 25
    },
    {
        id: 'cl7_ch7_t1_qe12',
        type: "mcq",
        question: "In the SAS congruence criterion, what must be the position of the angle?",
        options: ["Any of the three angles", "The angle with the largest measure", "The angle between the two sides", "The angle opposite to the longest side"],
        correctAnswer: "The angle between the two sides",
        explanation: "In the SAS criterion, the angle must be the included angle—the one formed between the two equal sides. This is crucial for the criterion to guarantee congruence. 🔄",
        wrongAnswerExplanations: {
            "Any of the three angles": "Not correct. The position of the angle matters in SAS; it must be between the two sides.",
            "The angle with the largest measure": "The size of the angle doesn't determine which one to use in SAS.",
            "The angle opposite to the longest side": "This is not relevant to the SAS criterion."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch7_t1_qe13',
        type: "mcq",
        question: "Two triangles are congruent by the RHS criterion. What type of triangles must they be?",
        options: ["Equilateral triangles", "Isosceles triangles", "Right-angled triangles", "Obtuse triangles"],
        correctAnswer: "Right-angled triangles",
        explanation: "The RHS (Right angle-Hypotenuse-Side) criterion applies only to right-angled triangles, as it specifically involves a right angle, the hypotenuse, and one side. 📐",
        wrongAnswerExplanations: {
            "Equilateral triangles": "The RHS criterion is specifically for right-angled triangles, not equilateral ones.",
            "Isosceles triangles": "The RHS criterion is specifically for right-angled triangles, not isosceles ones.",
            "Obtuse triangles": "The RHS criterion is specifically for right-angled triangles, not obtuse ones."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch7_t1_qe14',
        type: "mcq",
        question: "In triangles PQR and XYZ, ∠P = ∠X, PQ = XY, and PR = XZ. Which congruence criterion proves that the triangles are congruent?",
        options: ["SSS", "SAS", "ASA", "RHS"],
        correctAnswer: "SAS",
        explanation: "Given information matches the SAS criterion: two sides (PQ = XY and PR = XZ) and their included angle (∠P = ∠X). This is sufficient to prove the triangles are congruent. 📏🔄📏",
        wrongAnswerExplanations: {
            "SSS": "We know only two pairs of sides are equal, not all three, so SSS doesn't apply.",
            "ASA": "We have information about only one pair of angles, not two, so ASA doesn't apply.",
            "RHS": "There's no mention of right angles or hypotenuse, so RHS doesn't apply."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch7_t1_qe15',
        type: "mcq",
        question: "Which of these is NOT a valid criterion for triangle congruence?",
        options: ["SSS", "SAS", "ASA", "AAA"],
        correctAnswer: "AAA",
        explanation: "AAA (Angle-Angle-Angle) is not a valid congruence criterion. If all three angles of one triangle equal those of another, the triangles are similar but not necessarily congruent. They could be different sizes. ❌",
        wrongAnswerExplanations: {
            "SSS": "Side-Side-Side is a valid congruence criterion.",
            "SAS": "Side-Angle-Side is a valid congruence criterion.",
            "ASA": "Angle-Side-Angle is a valid congruence criterion."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch7_t1_qe16',
        type: "mcq",
        question: "If two triangles have equal corresponding sides, what can you conclude?",
        options: ["They are similar triangles", "They are isosceles triangles", "They are congruent triangles", "They have equal areas"],
        correctAnswer: "They are congruent triangles",
        explanation: "If all three pairs of corresponding sides are equal, the triangles are congruent by the SSS criterion. This means they're identical in shape and size. ✅",
        wrongAnswerExplanations: {
            "They are similar triangles": "Congruent triangles are always similar, but the specific conclusion here is congruence.",
            "They are isosceles triangles": "Equal sides of different triangles don't make them isosceles; this refers to sides within a triangle.",
            "They have equal areas": "While true, this is a weaker statement than congruence, which implies complete identity."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch7_t1_qe17',
        type: "mcq",
        question: "Which statement about congruent triangles is true?",
        options: ["They have the same area but different perimeters", "They have the same perimeter but different areas", "They have the same shape but different sizes", "They have exactly the same shape and size"],
        correctAnswer: "They have exactly the same shape and size",
        explanation: "Congruent triangles have identical shape and size, meaning all corresponding sides and angles are equal. They could be placed directly on top of each other with a perfect match. 🎯",
        wrongAnswerExplanations: {
            "They have the same area but different perimeters": "Congruent triangles have both equal areas and perimeters.",
            "They have the same perimeter but different areas": "Congruent triangles have both equal areas and perimeters.",
            "They have the same shape but different sizes": "This describes similar triangles, not congruent ones."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch7_t1_qe18',
        type: "mcq",
        question: "In two right-angled triangles, if the hypotenuse and one leg of the first triangle equal the hypotenuse and the corresponding leg of the second triangle, what can you conclude?",
        options: ["They are similar but not necessarily congruent", "Nothing can be concluded without more information", "They are congruent by the RHS criterion", "They are isosceles triangles"],
        correctAnswer: "They are congruent by the RHS criterion",
        explanation: "If two right-angled triangles have equal hypotenuses and one pair of corresponding legs, they are congruent by the RHS (Right angle-Hypotenuse-Side) criterion. 📐",
        wrongAnswerExplanations: {
            "They are similar but not necessarily congruent": "The RHS criterion guarantees congruence, not just similarity.",
            "Nothing can be concluded without more information": "The information is sufficient to apply the RHS criterion.",
            "They are isosceles triangles": "Right triangles with equal legs are isosceles, but that's not guaranteed by the given conditions."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch7_t1_qe19',
        type: "mcq",
        question: "If two triangles have two angles and a non-included side of one triangle equal to the corresponding parts of another triangle, which congruence criterion applies?",
        options: ["SSS", "SAS", "ASA", "AAS"],
        correctAnswer: "AAS",
        explanation: "This is the AAS (Angle-Angle-Side) criterion. While not listed as one of the main four, it's a valid criterion derived from ASA because in a triangle, when two angles are known, the third is determined. 🔍",
        wrongAnswerExplanations: {
            "SSS": "SSS involves three sides, not angles and a side.",
            "SAS": "SAS requires the side to be between the two angles, not a non-included side.",
            "ASA": "ASA requires the side to be between the two angles, not a non-included side."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch7_t1_qe20',
        type: "mcq",
        question: "Why is the concept of congruent triangles important in construction and engineering?",
        options: ["It allows for the use of fewer materials", "It ensures structures have artistic value", "It guarantees structures maintain their shape under stress", "It makes calculations faster"],
        correctAnswer: "It guarantees structures maintain their shape under stress",
        explanation: "Triangles are rigid shapes that maintain their form when forces are applied. Using congruent triangles in structures ensures uniformity and stability, which is crucial for safety in construction. 🏗️",
        wrongAnswerExplanations: {
            "It allows for the use of fewer materials": "Congruence isn't primarily about material efficiency.",
            "It ensures structures have artistic value": "While symmetry can be aesthetically pleasing, congruence in engineering is primarily for structural integrity.",
            "It makes calculations faster": "While congruence properties can simplify some calculations, this isn't the main engineering importance."
        },
        difficulty: "easy",
        marks: 2,
        recommendedTime: 40
    }
];
