import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl9_ch7_t2_qm1',
        type: "mcq",
        question: "In a rhombus ABCD, the diagonals AC and BD intersect at point O. Which of the following statements about triangles AOB and COD is true?",
        options: [
            "They are similar but not congruent",
            "They are congruent",
            "They have the same area but are not congruent",
            "None of the above"
        ],
        correctAnswer: "They are congruent",
        explanation: "In a rhombus, the diagonals bisect each other at point O. This means AO = OC and BO = OD. Since all sides of a rhombus are equal, AB = CD. With two pairs of equal sides and the included angles being vertically opposite (and thus equal), triangles AOB and COD are congruent by the SAS criterion. 📐",
        wrongAnswerExplanations: {
            "They are similar but not congruent": "The triangles are not just similar; they have the same size and shape, making them congruent.",
            "They have the same area but are not congruent": "While they do have the same area, they are also congruent because they have the same size and shape.",
            "None of the above": "The triangles are definitely congruent, so this answer is incorrect."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch7_t2_qm2',
        type: "mcq",
        question: "In an isosceles triangle ABC, AB = AC. If point D is on BC such that AD is the angle bisector of ∠BAC, which of the following is true?",
        options: [
            "BD = CD",
            "BD > CD",
            "BD < CD",
            "Cannot be determined"
        ],
        correctAnswer: "BD = CD",
        explanation: "In an isosceles triangle where AB = AC, if AD is the angle bisector of ∠BAC, then AD is also the perpendicular bisector of BC. This is a property of isosceles triangles. Since AD is a perpendicular bisector of BC, it divides BC into two equal parts, making BD = CD. 🔍",
        wrongAnswerExplanations: {
            "BD > CD": "This contradicts the property that an angle bisector from the apex of an isosceles triangle is also the perpendicular bisector of the base.",
            "BD < CD": "This contradicts the property that an angle bisector from the apex of an isosceles triangle is also the perpendicular bisector of the base.",
            "Cannot be determined": "The relationship can be determined using properties of isosceles triangles."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 50
    },
    {
        id: 'cl9_ch7_t2_qm3',
        type: "mcq",
        question: "If two triangles have two pairs of sides equal and the included angle of one is the supplement of the included angle of the other, what can be said about these triangles?",
        options: [
            "They are congruent",
            "They are similar but not congruent",
            "They have the same area",
            "None of the above"
        ],
        correctAnswer: "None of the above",
        explanation: "If two triangles have two pairs of sides equal but the included angle of one is the supplement of the included angle of the other, they are neither congruent nor similar. For congruence under the SAS criterion, the included angles must be equal, not supplementary. The areas will also differ because different included angles result in different shapes. ✏️",
        wrongAnswerExplanations: {
            "They are congruent": "For congruence under SAS, the included angles must be equal, not supplementary.",
            "They are similar but not congruent": "For similarity, the corresponding angles must be equal, which isn't satisfied with supplementary angles.",
            "They have the same area": "Different included angles with the same sides will result in different areas."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch7_t2_qm4',
        type: "mcq",
        question: "What is the minimum number of parts (sides or angles) that must be known to be equal in order to prove that two triangles are congruent?",
        options: [
            "Two",
            "Three",
            "Four",
            "Six"
        ],
        correctAnswer: "Three",
        explanation: "Generally, three parts must be known to be equal to prove triangle congruence, but they must be the correct three parts. The SAS, ASA, and SSS criteria each require three specific parts to be equal. For example, in SAS, two sides and the included angle must be equal. Simply having any three equal parts is not sufficient. 🧮",
        wrongAnswerExplanations: {
            "Two": "Two equal parts are not sufficient to prove congruence.",
            "Four": "Three properly chosen parts are sufficient; requiring four would be redundant.",
            "Six": "This would mean all sides and all angles are known to be equal, which is excessive for proving congruence."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 40
    },
    {
        id: 'cl9_ch7_t2_qm5',
        type: "mcq",
        question: "In a triangle, if all three sides remain the same but the orientation is reversed (like a reflection), what can be said about the original and reflected triangles?",
        options: [
            "They are congruent but not identical",
            "They are identical",
            "They are similar but not congruent",
            "They have the same area but different shapes"
        ],
        correctAnswer: "They are congruent but not identical",
        explanation: "When a triangle is reflected, it maintains the same side lengths and angle measures, making it congruent to the original. However, it's not identical because its orientation is reversed—it's a mirror image. This demonstrates that congruent triangles can have different orientations while maintaining the same size and shape. 🪞",
        wrongAnswerExplanations: {
            "They are identical": "Identical would mean they are exactly the same, including orientation, which is not the case with a reflection.",
            "They are similar but not congruent": "They are congruent, not just similar, as all dimensions remain the same.",
            "They have the same area but different shapes": "Both the area and shape remain the same in a reflection."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch7_t2_qm6',
        type: "mcq",
        question: "In the figure below, line segments AB and CD intersect at point P such that AP = DP and BP = CP. What can be concluded about triangles APD and BPC?",
        options: [
            "They are equilateral",
            "They are congruent",
            "They are similar but not congruent",
            "Nothing can be concluded"
        ],
        correctAnswer: "They are congruent",
        explanation: "Given that AP = DP and BP = CP, we have two pairs of equal sides. Additionally, ∠APD and ∠BPC are vertically opposite angles, which are equal. Using the SAS (Side-Angle-Side) criterion for congruence, triangles APD and BPC are congruent. This demonstrates how identifying equal parts can establish congruence. 🔄",
        wrongAnswerExplanations: {
            "They are equilateral": "There's no information suggesting all sides are equal, which would be necessary for equilateral triangles.",
            "They are similar but not congruent": "They are actually congruent, not just similar.",
            "Nothing can be concluded": "We can definitely conclude that the triangles are congruent based on the given information."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 50
    },
    {
        id: 'cl9_ch7_t2_qm7',
        type: "mcq",
        question: "If triangles ABC and DEF are congruent with A corresponding to D, B to E, and C to F, what can be said about the triangles if the coordinates are A(1,2), B(4,6), C(7,3), D(2,3), E(5,7), and F(8,4)?",
        options: [
            "The triangles are reflections of each other",
            "The triangles are rotations of each other",
            "The triangles are translations of each other",
            "The triangles are not actually congruent"
        ],
        correctAnswer: "The triangles are translations of each other",
        explanation: "If you calculate the vector from each point in triangle ABC to its corresponding point in DEF, you'll find it's consistently (1,1). This means triangle DEF is a translation of triangle ABC by the vector (1,1). A translation preserves both shape and size, confirming that the triangles are congruent. 📊",
        wrongAnswerExplanations: {
            "The triangles are reflections of each other": "Reflection would involve a change in orientation, not just a consistent shift in coordinates.",
            "The triangles are rotations of each other": "Rotation would involve a more complex relationship between corresponding coordinates, not a consistent shift.",
            "The triangles are not actually congruent": "The triangles are congruent as stated in the problem, and their coordinates confirm a translation."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl9_ch7_t2_qm8',
        type: "mcq",
        question: "In a quadrilateral ABCD, if AC and BD are diagonals that bisect each other at point O, what type of quadrilateral is ABCD and what can be said about triangles AOB and COD?",
        options: [
            "ABCD is a rhombus; triangles AOB and COD are congruent",
            "ABCD is a rectangle; triangles AOB and COD are similar but not congruent",
            "ABCD is a parallelogram; triangles AOB and COD are congruent",
            "ABCD is a square; triangles AOB and COD have the same area"
        ],
        correctAnswer: "ABCD is a parallelogram; triangles AOB and COD are congruent",
        explanation: "When diagonals of a quadrilateral bisect each other, the quadrilateral is a parallelogram. In triangles AOB and COD: AO = OC (given that diagonals bisect each other), BO = OD (same reason), and ∠AOB and ∠COD are vertically opposite angles (equal). By the SAS criterion, triangles AOB and COD are congruent. 🔄",
        wrongAnswerExplanations: {
            "ABCD is a rhombus; triangles AOB and COD are congruent": "Diagonals bisecting each other only guarantees a parallelogram, not specifically a rhombus.",
            "ABCD is a rectangle; triangles AOB and COD are similar but not congruent": "Diagonals bisecting each other only guarantees a parallelogram, and the triangles are congruent, not just similar.",
            "ABCD is a square; triangles AOB and COD have the same area": "Diagonals bisecting each other only guarantees a parallelogram, not a square."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 50
    },
    {
        id: 'cl9_ch7_t2_qm9',
        type: "mcq",
        question: "If two triangles have their corresponding medians equal in length, can we conclude that the triangles are congruent?",
        options: [
            "Yes, always",
            "Yes, if all three medians are equal",
            "No, never",
            "No, equal medians alone are not sufficient"
        ],
        correctAnswer: "No, equal medians alone are not sufficient",
        explanation: "Having equal corresponding medians doesn't guarantee triangle congruence. Two triangles can have the same median lengths but different side lengths and angles. To prove congruence, we need specific criteria like SSS, SAS, or ASA to be satisfied. Equal medians provide information about triangle structure but aren't sufficient for congruence. 📏",
        wrongAnswerExplanations: {
            "Yes, always": "This is incorrect. Equal medians don't guarantee congruence.",
            "Yes, if all three medians are equal": "Even if all three medians are equal, this doesn't guarantee congruence.",
            "No, never": "This is too strong. Equal medians combined with other conditions might establish congruence."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch7_t2_qm10',
        type: "mcq",
        question: "In the context of triangle congruence, which of the following statements is NOT true?",
        options: [
            "Congruence is transitive: if △ABC ≅ △DEF and △DEF ≅ △GHI, then △ABC ≅ △GHI",
            "Congruence is symmetric: if △ABC ≅ △DEF, then △DEF ≅ △ABC",
            "Congruence is reflexive: △ABC ≅ △ABC",
            "If two triangles are congruent to the same triangle, they must be similar to each other"
        ],
        correctAnswer: "If two triangles are congruent to the same triangle, they must be similar to each other",
        explanation: "The incorrect statement is 'If two triangles are congruent to the same triangle, they must be similar to each other.' In fact, if two triangles are congruent to the same triangle, they must be congruent to each other (not just similar). This follows from the transitive property of congruence. Congruence is an equivalence relation, exhibiting reflexive, symmetric, and transitive properties. 🧠",
        wrongAnswerExplanations: {
            "Congruence is transitive: if △ABC ≅ △DEF and △DEF ≅ △GHI, then △ABC ≅ △GHI": "This is true. Congruence is transitive.",
            "Congruence is symmetric: if △ABC ≅ △DEF, then △DEF ≅ △ABC": "This is true. Congruence is symmetric.",
            "Congruence is reflexive: △ABC ≅ △ABC": "This is true. Any triangle is congruent to itself."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch7_t2_qm11',
        type: "mcq",
        question: "A triangle with vertices at (0,0), (3,0), and (0,4) is translated 2 units right and 3 units up. What are the vertices of the resulting triangle?",
        options: [
            "(2,3), (5,3), (2,7)",
            "(2,3), (5,3), (3,6)",
            "(2,3), (5,3), (2,6)",
            "(3,2), (6,2), (3,6)"
        ],
        correctAnswer: "(2,3), (5,3), (2,7)",
        explanation: "When a triangle is translated 2 units right and 3 units up, we add 2 to each x-coordinate and 3 to each y-coordinate. Original vertices: (0,0), (3,0), (0,4). After translation: (0+2, 0+3) = (2,3), (3+2, 0+3) = (5,3), (0+2, 4+3) = (2,7). This translation preserves congruence between the original and resulting triangle. 🔄",
        wrongAnswerExplanations: {
            "(2,3), (5,3), (3,6)": "The translation of (0,4) should be (2,7), not (3,6).",
            "(2,3), (5,3), (2,6)": "The translation of (0,4) should be (2,7), not (2,6).",
            "(3,2), (6,2), (3,6)": "This represents a different translation (3 right, 2 up) rather than the specified 2 right, 3 up."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch7_t2_qm12',
        type: "mcq",
        question: "In triangles ABC and DEF, if AB = DE, BC = EF, and AC = DF, what can be concluded about angles A and D?",
        options: [
            "They must be equal",
            "They must be supplementary",
            "They must be complementary",
            "Nothing can be concluded about their relationship"
        ],
        correctAnswer: "They must be equal",
        explanation: "When three sides of one triangle equal three sides of another triangle (AB = DE, BC = EF, AC = DF), the triangles are congruent by the SSS criterion. When triangles are congruent, all corresponding parts are equal, including angles. Since A corresponds to D in the congruence, ∠A = ∠D. 📐",
        wrongAnswerExplanations: {
            "They must be supplementary": "Supplementary angles sum to 180°, but there's no reason why angles A and D should be supplementary.",
            "They must be complementary": "Complementary angles sum to 90°, but there's no reason why angles A and D should be complementary.",
            "Nothing can be concluded about their relationship": "We can definitely conclude that the angles are equal based on triangle congruence."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 40
    },
    {
        id: 'cl9_ch7_t2_qm13',
        type: "mcq",
        question: "In a parallelogram ABCD, the diagonals AC and BD intersect at point O. If triangle AOB has an area of 12 square units, what is the area of triangle COD?",
        options: [
            "6 square units",
            "12 square units",
            "24 square units",
            "Cannot be determined"
        ],
        correctAnswer: "12 square units",
        explanation: "In a parallelogram, the diagonals bisect each other at their intersection point O. Using the SAS congruence criterion (AO = OC, BO = OD, and vertically opposite angles at O are equal), triangles AOB and COD are congruent. Congruent triangles have equal areas, so if triangle AOB has an area of 12 square units, triangle COD also has an area of 12 square units. 🔢",
        wrongAnswerExplanations: {
            "6 square units": "This would be half the area, which contradicts the fact that congruent triangles have equal areas.",
            "24 square units": "This would be double the area, which contradicts the fact that congruent triangles have equal areas.",
            "Cannot be determined": "We can determine the area based on the congruence of the triangles."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch7_t2_qm14',
        type: "mcq",
        question: "If two triangles have the same perimeter and the same area, must they be congruent?",
        options: [
            "Yes, always",
            "Yes, if they are both isosceles",
            "Yes, if they are both equilateral",
            "No, not necessarily"
        ],
        correctAnswer: "No, not necessarily",
        explanation: "Two triangles with the same perimeter and area are not necessarily congruent. For example, two triangles with sides [3, 4, 5] and [2, 5, 5] both have a perimeter of 12 and an area of 6 square units (using Heron's formula), but they have different shapes and are not congruent. Congruence requires all corresponding sides and angles to be equal. 🧮",
        wrongAnswerExplanations: {
            "Yes, always": "This is incorrect. Same area and perimeter don't guarantee congruence.",
            "Yes, if they are both isosceles": "Even two isosceles triangles with the same area and perimeter can have different shapes.",
            "Yes, if they are both equilateral": "If both triangles are equilateral with the same perimeter, they would be congruent, but this is a special case, not the general rule."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch7_t2_qm15',
        type: "mcq",
        question: "Which of the following is NOT a rigid motion that preserves congruence?",
        options: [
            "Translation",
            "Rotation",
            "Reflection",
            "Dilation"
        ],
        correctAnswer: "Dilation",
        explanation: "Dilation is not a rigid motion because it changes the size of a figure while preserving its shape. Rigid motions (translation, rotation, reflection) preserve both the size and shape of figures, resulting in congruent images. Dilation results in similar but not necessarily congruent figures, as it involves scaling by a factor. 🔍",
        wrongAnswerExplanations: {
            "Translation": "Translation (sliding) is a rigid motion that preserves congruence.",
            "Rotation": "Rotation (turning around a point) is a rigid motion that preserves congruence.",
            "Reflection": "Reflection (flipping over a line) is a rigid motion that preserves congruence."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 35
    },
    {
        id: 'cl9_ch7_t2_qm16',
        type: "mcq",
        question: "In an isosceles triangle, if we know that two triangles formed by drawing an altitude are congruent, what can we conclude about the original triangle?",
        options: [
            "It is equilateral",
            "It is right-angled",
            "It is isosceles",
            "Nothing can be concluded"
        ],
        correctAnswer: "It is isosceles",
        explanation: "If an altitude in a triangle creates two congruent triangles, then the original triangle must be isosceles with the altitude going to the base. The altitude serves as both a perpendicular bisector of the base and an angle bisector of the vertex angle, which is a property unique to isosceles triangles. This demonstrates how identifying congruent triangles can reveal structural properties. 📐",
        wrongAnswerExplanations: {
            "It is equilateral": "While an equilateral triangle is also isosceles, the given information only confirms it's isosceles, not specifically equilateral.",
            "It is right-angled": "An altitude creating congruent triangles doesn't imply a right angle.",
            "Nothing can be concluded": "We can definitely conclude the triangle is isosceles based on the given information."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl9_ch7_t2_qm17',
        type: "mcq",
        question: "Which of the following best describes what happens to a triangle after a sequence of two reflections over parallel lines?",
        options: [
            "It returns to its original position",
            "It is rotated 180° from its original position",
            "It is translated perpendicular to the reflection lines",
            "It is enlarged by a factor of 2"
        ],
        correctAnswer: "It is translated perpendicular to the reflection lines",
        explanation: "Two reflections over parallel lines result in a translation perpendicular to those lines. The distance of the translation is twice the distance between the parallel lines. This is a fundamental concept in transformation geometry: combined reflections over parallel lines produce translations, while preserving congruence between the original and final triangles. 🔄",
        wrongAnswerExplanations: {
            "It returns to its original position": "The triangle doesn't return to its original position; it's translated.",
            "It is rotated 180° from its original position": "Two reflections over perpendicular lines would result in a 180° rotation, not parallel lines.",
            "It is enlarged by a factor of 2": "Reflections don't change the size of the figure, so no enlargement occurs."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 50
    },
    {
        id: 'cl9_ch7_t2_qm18',
        type: "mcq",
        question: "In a right-angled triangle, which of the following ways would NOT be sufficient to prove congruence with another right-angled triangle?",
        options: [
            "Two sides of one triangle equal to two sides of another",
            "Hypotenuse and one side of one triangle equal to hypotenuse and the corresponding side of another",
            "Two angles of one triangle equal to two angles of another",
            "Area and perimeter of one triangle equal to area and perimeter of another"
        ],
        correctAnswer: "Area and perimeter of one triangle equal to area and perimeter of another",
        explanation: "Equal area and perimeter don't guarantee congruence, even for right-angled triangles. Two right-angled triangles can have the same area and perimeter but different dimensions. The other options are valid criteria: two sides in right triangles (HL theorem), hypotenuse and one side (HL theorem), or two angles (one being 90°, using ASA or AAS) are sufficient for proving congruence. 📏",
        wrongAnswerExplanations: {
            "Two sides of one triangle equal to two sides of another": "In right triangles, if two sides are equal, the third sides must also be equal (by the Pythagorean theorem), making the triangles congruent.",
            "Hypotenuse and one side of one triangle equal to hypotenuse and the corresponding side of another": "This is the Hypotenuse-Leg (HL) theorem for congruence in right triangles.",
            "Two angles of one triangle equal to two angles of another": "In triangles, if two angles are equal, the third angles must also be equal (sum of angles is 180°). This, combined with the right angle, establishes similarity, and if one pair of corresponding sides is equal, it establishes congruence."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 50
    },
    {
        id: 'cl9_ch7_t2_qm19',
        type: "mcq",
        question: "If triangles ABC and DEF have AB = DE = 5 cm, BC = EF = 7 cm, and AC = DF = 8 cm, what can be said about their angles?",
        options: [
            "Only corresponding angles A and D are equal",
            "Only corresponding angles B and E are equal",
            "Only corresponding angles C and F are equal",
            "All corresponding angles are equal"
        ],
        correctAnswer: "All corresponding angles are equal",
        explanation: "When three sides of one triangle equal three sides of another triangle (AB = DE, BC = EF, AC = DF), the triangles are congruent by the SSS criterion. When triangles are congruent, all corresponding parts are equal, including all three pairs of angles. Thus, ∠A = ∠D, ∠B = ∠E, and ∠C = ∠F. 📐",
        wrongAnswerExplanations: {
            "Only corresponding angles A and D are equal": "All corresponding angles are equal, not just A and D.",
            "Only corresponding angles B and E are equal": "All corresponding angles are equal, not just B and E.",
            "Only corresponding angles C and F are equal": "All corresponding angles are equal, not just C and F."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 40
    },
    {
        id: 'cl9_ch7_t2_qm20',
        type: "mcq",
        question: "In a coordinate plane, triangle ABC has vertices at A(0,0), B(4,0), and C(0,3). After a reflection over the y-axis, what are the coordinates of the image of vertex B?",
        options: [
            "(4,0)",
            "(-4,0)",
            "(0,4)",
            "(0,-4)"
        ],
        correctAnswer: "(-4,0)",
        explanation: "When reflecting over the y-axis, the x-coordinate changes sign while the y-coordinate remains the same. The formula is (x,y) → (-x,y). For vertex B(4,0), the reflection gives B'(-4,0). The reflection creates a congruent triangle with a different orientation, demonstrating how rigid motions preserve congruence while potentially changing position and orientation. 🪞",
        wrongAnswerExplanations: {
            "(4,0)": "This is the original point, not its reflection over the y-axis.",
            "(0,4)": "This would be a different point, not the reflection of B over the y-axis.",
            "(0,-4)": "This would be a different point, not the reflection of B over the y-axis."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 40
    }
]; 