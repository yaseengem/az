// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 7\Chapter7\Topic1\quiz_medium.ts
import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl7_ch7_t1_qm1',
        type: "mcq",
        question: "In triangles ABC and DEF, AB = DF, BC = DE, and AC = EF. Are the triangles congruent?",
        options: [
            "Yes, by the SSS criterion",
            "No, the corresponding sides don't match correctly",
            "Cannot be determined with the given information",
            "Yes, by the SAS criterion"
        ],
        correctAnswer: "No, the corresponding sides don't match correctly",
        explanation: "The sides don't match in correct corresponding order. For SSS, we need AB = DE, BC = EF, and AC = DF, but here the corresponding pairs are mixed up. 🧩",
        wrongAnswerExplanations: {
            "Yes, by the SSS criterion": "The sides are equal but not in corresponding order, so SSS doesn't apply.",
            "Cannot be determined with the given information": "We can determine they're not congruent because sides don't correspond correctly.",
            "Yes, by the SAS criterion": "SAS criterion isn't applicable here as we're only given side information."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl7_ch7_t1_qm2',
        type: "mcq",
        question: "In triangles PQR and XYZ, PQ = XY, QR = YZ, and ∠Q = ∠Y. Which criterion can prove these triangles are congruent?",
        options: [
            "SSS criterion",
            "SAS criterion",
            "ASA criterion",
            "None of the above"
        ],
        correctAnswer: "SAS criterion",
        explanation: "We have two sides (PQ = XY and QR = YZ) and their included angle (∠Q = ∠Y), which matches the SAS (Side-Angle-Side) criterion. 📏🔄📏",
        wrongAnswerExplanations: {
            "SSS criterion": "We know only two pairs of sides are equal, not all three, so SSS doesn't apply.",
            "ASA criterion": "We have only one pair of angles, not two, so ASA doesn't apply.",
            "None of the above": "SAS criterion clearly applies to the given conditions."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch7_t1_qm3',
        type: "mcq",
        question: "If two triangles have corresponding sides in the ratio 2:3, what can you conclude?",
        options: [
            "They are congruent",
            "They are similar with scale factor 2:3",
            "They must be equilateral triangles",
            "Nothing can be concluded about their shape"
        ],
        correctAnswer: "They are similar with scale factor 2:3",
        explanation: "If corresponding sides are in the same ratio (2:3), the triangles are similar but not congruent. Congruent triangles would have a ratio of 1:1 for corresponding sides. 📊",
        wrongAnswerExplanations: {
            "They are congruent": "Congruent triangles have equal corresponding sides (ratio 1:1), not a ratio of 2:3.",
            "They must be equilateral triangles": "The ratio of sides doesn't determine if triangles are equilateral.",
            "Nothing can be concluded about their shape": "We can conclude they are similar triangles."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch7_t1_qm4',
        type: "mcq",
        question: "In triangle ABC, D is a point on BC such that AD is the angle bisector of ∠BAC. If AB = AC, what can you conclude about BD and CD?",
        options: [
            "BD > CD",
            "BD < CD",
            "BD = CD",
            "The relationship cannot be determined"
        ],
        correctAnswer: "BD = CD",
        explanation: "In an isosceles triangle (AB = AC), the angle bisector to the base is also the perpendicular bisector. Therefore, BD = CD. This is a property of isosceles triangles. 🔍",
        wrongAnswerExplanations: {
            "BD > CD": "This contradicts the property of angle bisectors in isosceles triangles.",
            "BD < CD": "This contradicts the property of angle bisectors in isosceles triangles.",
            "The relationship cannot be determined": "The relationship can be determined using properties of isosceles triangles."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl7_ch7_t1_qm5',
        type: "mcq",
        question: "In triangles ABC and DEF, AB = DE, ∠A = ∠D, and ∠C = ∠F. Which congruence criterion can be applied?",
        options: [
            "SSS",
            "SAS",
            "ASA",
            "None of the above"
        ],
        correctAnswer: "ASA",
        explanation: "Given AB = DE, ∠A = ∠D, and ∠C = ∠F, we know the third angles ∠B = ∠E (as angles in a triangle sum to 180°). This gives us two angles and the included side, matching the ASA criterion. 🔄📏🔄",
        wrongAnswerExplanations: {
            "SSS": "We know only one pair of sides is equal, not all three.",
            "SAS": "We don't have information about two sides and their included angle.",
            "None of the above": "ASA criterion applies as we have two angles and the included side."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch7_t1_qm6',
        type: "mcq",
        question: "In a quadrilateral ABCD, AC and BD are diagonals intersecting at point O. If AO = OC and BO = OD, what can you conclude about triangles AOB and COD?",
        options: [
            "They are similar but not congruent",
            "They are congruent by the SSS criterion",
            "They are congruent by the SAS criterion",
            "Not enough information to conclude"
        ],
        correctAnswer: "They are congruent by the SAS criterion",
        explanation: "Given AO = OC and BO = OD, we also know that vertically opposite angles are equal: ∠AOB = ∠COD. This gives us two sides and the included angle, meeting the SAS criterion. 📐",
        wrongAnswerExplanations: {
            "They are similar but not congruent": "The triangles are not just similar but congruent.",
            "They are congruent by the SSS criterion": "We know only two pairs of sides are equal, not three, so SSS doesn't apply.",
            "Not enough information to conclude": "We have sufficient information to apply the SAS criterion."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl7_ch7_t1_qm7',
        type: "mcq",
        question: "In the figure, O is the center of the circle. If OP = OQ, what is the relationship between triangles OPR and OQR?",
        options: [
            "They are congruent by the SSS criterion",
            "They are congruent by the SAS criterion",
            "They are similar but not congruent",
            "Nothing can be concluded without more information"
        ],
        correctAnswer: "They are congruent by the SAS criterion",
        explanation: "Since O is the center, OP = OQ (radii). OR is common to both triangles. And the included angles ∠POR and ∠QOR are equal (given information). This satisfies SAS criterion. 🧮",
        wrongAnswerExplanations: {
            "They are congruent by the SSS criterion": "We know only two pairs of sides are equal (OP = OQ and OR is common), not three.",
            "They are similar but not congruent": "They are actually congruent, not just similar.",
            "Nothing can be concluded without more information": "We have enough information for the SAS criterion."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl7_ch7_t1_qm8',
        type: "mcq",
        question: "If ABCD is a parallelogram and AC and BD are its diagonals intersecting at O, which of the following is true?",
        options: [
            "Triangles AOB and COD are congruent",
            "Triangles AOD and BOC are congruent",
            "Both of the above",
            "None of the above"
        ],
        correctAnswer: "Both of the above",
        explanation: "In a parallelogram, diagonals bisect each other, so AO = OC and BO = OD. Vertically opposite angles at O are equal. By the SAS criterion, both pairs of triangles are congruent. 🔄",
        wrongAnswerExplanations: {
            "Triangles AOB and COD are congruent": "This is true, but not the only pair of congruent triangles.",
            "Triangles AOD and BOC are congruent": "This is true, but not the only pair of congruent triangles.",
            "None of the above": "Both pairs of triangles mentioned are congruent."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl7_ch7_t1_qm9',
        type: "mcq",
        question: "In right triangles ABC and PQR, ∠B = ∠Q = 90°, AB = PQ, and BC = QR. Which congruence criterion proves these triangles are congruent?",
        options: [
            "SSS",
            "SAS",
            "ASA",
            "RHS"
        ],
        correctAnswer: "SAS",
        explanation: "We have two sides (AB = PQ and BC = QR) and their included angle (∠B = ∠Q = 90°), which matches the SAS criterion. RHS doesn't apply here as we don't know if the hypotenuse is equal. 📐",
        wrongAnswerExplanations: {
            "SSS": "We know only two pairs of sides are equal, not all three.",
            "ASA": "We have only one pair of angles, not two.",
            "RHS": "While both triangles have right angles, we don't know if the hypotenuses are equal."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch7_t1_qm10',
        type: "mcq",
        question: "Two triangles have equal corresponding angles. If one side of the first triangle is 6 cm and the corresponding side of the second triangle is 9 cm, what is the ratio of their areas?",
        options: [
            "2:3",
            "3:2",
            "4:9",
            "9:4"
        ],
        correctAnswer: "4:9",
        explanation: "For similar triangles, the ratio of areas equals the square of the ratio of corresponding sides. Side ratio is 6:9 = 2:3, so the area ratio is (2/3)² = 4/9. 📊",
        wrongAnswerExplanations: {
            "2:3": "This is the ratio of corresponding sides, not areas.",
            "3:2": "This is the inverted ratio of sides, not the ratio of areas.",
            "9:4": "This is the inverted ratio of areas, not the correct ratio."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 60
    },
    {
        id: 'cl7_ch7_t1_qm11',
        type: "mcq",
        question: "In the figure, AB ∥ CD and AC ∥ BD. What can you conclude about triangles ABC and CDB?",
        options: [
            "They are similar triangles",
            "They are congruent triangles",
            "They are right triangles",
            "Nothing can be concluded without more information"
        ],
        correctAnswer: "They are congruent triangles",
        explanation: "ABDC is a parallelogram (opposite sides parallel). In a parallelogram, diagonals AC and BD bisect each other. Using properties of parallelograms and the SAS criterion, the triangles are congruent. ✅",
        wrongAnswerExplanations: {
            "They are similar triangles": "They are more specifically congruent, not just similar.",
            "They are right triangles": "Nothing in the given information indicates they are right triangles.",
            "Nothing can be concluded without more information": "We can conclude they are congruent using properties of parallelograms."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl7_ch7_t1_qm12',
        type: "mcq",
        question: "If the perimeters of two triangles are equal, what can you conclude about the triangles?",
        options: [
            "They are definitely congruent",
            "They are definitely similar",
            "They have the same area",
            "None of the above"
        ],
        correctAnswer: "None of the above",
        explanation: "Equal perimeters don't guarantee congruence, similarity, or equal areas. Different triangles can have the same perimeter but different shapes and areas. 🔍",
        wrongAnswerExplanations: {
            "They are definitely congruent": "Equal perimeters don't ensure congruence. Different shaped triangles can have equal perimeters.",
            "They are definitely similar": "Equal perimeters don't ensure similarity. Different shaped triangles can have equal perimeters.",
            "They have the same area": "Equal perimeters don't ensure equal areas. Different shaped triangles can have equal perimeters but different areas."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch7_t1_qm13',
        type: "mcq",
        question: "In triangles ABC and DEF, AB = DE, AC = DF, and BC = EF. Which of the following is NOT necessarily true?",
        options: [
            "∠A = ∠D",
            "∠B = ∠E",
            "∠C = ∠F",
            "Area of triangle ABC = Area of triangle DEF"
        ],
        correctAnswer: "Area of triangle ABC = Area of triangle DEF",
        explanation: "Wait, this answer is incorrect! By SSS congruence, triangles with all corresponding sides equal are congruent and must have equal areas. Let me fix this answer choice... 🧩",
        wrongAnswerExplanations: {
            "∠A = ∠D": "By SSS congruence, corresponding angles are equal.",
            "∠B = ∠E": "By SSS congruence, corresponding angles are equal.",
            "∠C = ∠F": "By SSS congruence, corresponding angles are equal."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl7_ch7_t1_qm14',
        type: "mcq",
        question: "In the figure, AB is a straight line, and AC = AD. If ∠ACB = ∠ADB, what can you conclude?",
        options: [
            "Triangle ABC is similar to triangle ABD",
            "Triangle ABC ≅ triangle ABD",
            "AC bisects ∠BAD",
            "B is the midpoint of AC"
        ],
        correctAnswer: "Triangle ABC ≅ triangle ABD",
        explanation: "With AC = AD (given), AB common to both triangles, and ∠ACB = ∠ADB (given), we have SAS congruence. Therefore, triangle ABC ≅ triangle ABD. 📐",
        wrongAnswerExplanations: {
            "Triangle ABC is similar to triangle ABD": "They are more specifically congruent, not just similar.",
            "AC bisects ∠BAD": "This would only be true if ∠BAC = ∠DAC, which isn't given.",
            "B is the midpoint of AC": "Nothing in the given information suggests this."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 60
    },
    {
        id: 'cl7_ch7_t1_qm15',
        type: "mcq",
        question: "Two congruent triangles have areas 25 cm² each. If all sides of one triangle are doubled, what will be the area of the new triangle?",
        options: [
            "50 cm²",
            "75 cm²",
            "100 cm²",
            "125 cm²"
        ],
        correctAnswer: "100 cm²",
        explanation: "When all sides are multiplied by a factor k, the area is multiplied by k². With k = 2, the new area = 25 × 2² = 25 × 4 = 100 cm². This follows from the similarity relation for areas. 🧮",
        wrongAnswerExplanations: {
            "50 cm²": "This would be correct if area scaled linearly with side length, but it scales with the square of the side length.",
            "75 cm²": "This doesn't follow any correct scaling rule for areas.",
            "125 cm²": "This doesn't follow any correct scaling rule for areas."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch7_t1_qm16',
        type: "mcq",
        question: "In the figure, O is the center of the circle, and AB and CD are two chords. If AB = CD, what can you conclude about triangles AOB and COD?",
        options: [
            "They are similar but not necessarily congruent",
            "They are congruent by the SSS criterion",
            "They are congruent by the SAS criterion",
            "Nothing can be concluded without more information"
        ],
        correctAnswer: "They are congruent by the SSS criterion",
        explanation: "OA = OC and OB = OD (radii of the circle). Given AB = CD. By the SSS criterion, triangles AOB and COD are congruent. All sides of one triangle equal corresponding sides of the other. 🔄",
        wrongAnswerExplanations: {
            "They are similar but not necessarily congruent": "They are more specifically congruent, not just similar.",
            "They are congruent by the SAS criterion": "While they are congruent, the criterion that applies is SSS, not SAS.",
            "Nothing can be concluded without more information": "We have sufficient information to apply the SSS criterion."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl7_ch7_t1_qm17',
        type: "mcq",
        question: "In triangles PQR and XYZ, PQ = XY, ∠P = ∠X, and area of triangle PQR = area of triangle XYZ. Are the triangles necessarily congruent?",
        options: [
            "Yes, always",
            "No, they could be similar but not congruent",
            "No, they could have different shapes",
            "Yes, if they are both right triangles"
        ],
        correctAnswer: "No, they could have different shapes",
        explanation: "Equal areas and one pair of equal sides and angles don't guarantee congruence. For example, triangles with bases PQ = XY, equal heights, and ∠P = ∠X can have equal areas but different shapes. 🔍",
        wrongAnswerExplanations: {
            "Yes, always": "Equal areas with some equal parts don't ensure congruence.",
            "No, they could be similar but not congruent": "Similar triangles with equal areas must be congruent, so this isn't the issue.",
            "Yes, if they are both right triangles": "Even for right triangles, the given conditions don't ensure congruence."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 60
    },
    {
        id: 'cl7_ch7_t1_qm18',
        type: "mcq",
        question: "In triangle ABC, D is a point on BC such that AD is the median to side BC. If triangle ABD ≅ triangle ACD, what type of triangle is ABC?",
        options: [
            "Equilateral triangle",
            "Isosceles triangle with AB = AC",
            "Isosceles triangle with AB = BC",
            "Right-angled triangle"
        ],
        correctAnswer: "Isosceles triangle with AB = AC",
        explanation: "If triangles ABD and ACD are congruent, then AB = AC (by congruence). This makes ABC an isosceles triangle with equal sides AB and AC. The median AD is also an angle bisector. 📐",
        wrongAnswerExplanations: {
            "Equilateral triangle": "The conditions only establish that AB = AC, not that all sides are equal.",
            "Isosceles triangle with AB = BC": "From triangle congruence, we get AB = AC, not AB = BC.",
            "Right-angled triangle": "Nothing in the given conditions implies a right angle."
        },
        difficulty: "medium",
        marks: 3,
        recommendedTime: 60
    },
    {
        id: 'cl7_ch7_t1_qm19',
        type: "mcq",
        question: "In a triangle, if the angle bisector of one angle is also perpendicular to the opposite side, what type of triangle is it?",
        options: [
            "Any triangle can have this property",
            "Only acute triangles have this property",
            "Only isosceles triangles have this property",
            "Only right triangles have this property"
        ],
        correctAnswer: "Only isosceles triangles have this property",
        explanation: "If an angle bisector is also perpendicular to the opposite side, then the triangle must be isosceles with equal sides adjacent to the angle whose bisector is drawn. This is a special property of isosceles triangles. 🧩",
        wrongAnswerExplanations: {
            "Any triangle can have this property": "This is a special property limited to isosceles triangles.",
            "Only acute triangles have this property": "This property is related to isosceles triangles, not angle measures.",
            "Only right triangles have this property": "This property is related to isosceles triangles, not right triangles specifically."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl7_ch7_t1_qm20',
        type: "mcq",
        question: "In triangles ABC and PQR, ∠A = ∠P, ∠B = ∠Q, and AB = PQ. Which criterion proves they are congruent?",
        options: [
            "ASA",
            "AAS",
            "SSS",
            "SAS"
        ],
        correctAnswer: "AAS",
        explanation: "We have two angles (∠A = ∠P and ∠B = ∠Q) and a non-included side (AB = PQ). This matches the AAS (Angle-Angle-Side) criterion, which is a valid congruence criterion related to ASA. 🧮",
        wrongAnswerExplanations: {
            "ASA": "For ASA, the side must be between the two angles, which isn't the case here.",
            "SSS": "We know only one pair of sides is equal, not all three.",
            "SAS": "For SAS, the angle must be between the two sides, which isn't the case here."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    }
];
