// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 7\Chapter7\Topic2\quiz_easy.ts
// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 7\Chapter7\Topic2\quiz_easy.ts
import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: "cl7_ch7_t2_qe1",
        type: "mcq",
        question: "Which of the following is NOT a criterion for congruence in triangles?",
        options: ["SSS", "SAS", "SSA", "ASA"],
        correctAnswer: "SSA",
        explanation: "SSA (Side-Side-Angle) is not a valid congruence criterion as it doesn't guarantee congruence of triangles. ⚠️",
        wrongAnswerExplanations: {
            "SSS": "Side-Side-Side is a valid congruence criterion for triangles.",
            "SAS": "Side-Angle-Side is a valid congruence criterion for triangles.",
            "ASA": "Angle-Side-Angle is a valid congruence criterion for triangles."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: "cl7_ch7_t2_qe2",
        type: "mcq",
        question: "In congruent triangles, which of the following is true?",
        options: ["Only sides are equal", "Only angles are equal", "Both sides and angles are equal", "None of these"],
        correctAnswer: "Both sides and angles are equal",
        explanation: "Congruent triangles have equal corresponding sides and equal corresponding angles. ≅",
        wrongAnswerExplanations: {
            "Only sides are equal": "Congruent triangles must have both equal sides and equal angles.",
            "Only angles are equal": "Triangles with only equal angles are similar, not necessarily congruent.",
            "None of these": "Congruent triangles have equal sides and equal angles."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: "cl7_ch7_t2_qe3",
        type: "mcq",
        question: "What does the RHS congruence rule stand for?",
        options: ["Right Hand Side", "Right Hypotenuse Side", "Right-angled triangle, Hypotenuse, Side", "Right-angled triangle, Height, Side"],
        correctAnswer: "Right-angled triangle, Hypotenuse, Side",
        explanation: "RHS stands for Right-angled triangle, Hypotenuse, Side - used for congruence of right-angled triangles. 📐",
        wrongAnswerExplanations: {
            "Right Hand Side": "This is not a mathematical term for congruence.",
            "Right Hypotenuse Side": "This is not a standard congruence criterion.",
            "Right-angled triangle, Height, Side": "The criterion uses hypotenuse, not height."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: "cl7_ch7_t2_qe4",
        type: "mcq",
        question: "If two triangles have SSS correspondence, what can you conclude?",
        options: ["They must be equilateral", "They are congruent", "They are similar", "They must be isosceles"],
        correctAnswer: "They are congruent",
        explanation: "By SSS congruence criterion, if three sides of one triangle equal three sides of another, the triangles are congruent. ≅",
        wrongAnswerExplanations: {
            "They must be equilateral": "SSS only ensures congruence, not that the triangles are equilateral.",
            "They are similar": "They are not just similar but congruent.",
            "They must be isosceles": "SSS does not imply isosceles triangles."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: "cl7_ch7_t2_qe5",
        type: "mcq",
        question: "In the SAS congruence criterion, what does the 'A' stand for?",
        options: ["Area", "Angle", "Adjacent", "All sides"],
        correctAnswer: "Angle",
        explanation: "In SAS (Side-Angle-Side), 'A' stands for the angle included between the two sides. ∠",
        wrongAnswerExplanations: {
            "Area": "Congruence criteria are about sides and angles, not areas.",
            "Adjacent": "While the angle is adjacent to sides, 'A' specifically means angle.",
            "All sides": "This is not what 'A' stands for in SAS."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: "cl7_ch7_t2_qe6",
        type: "mcq",
        question: "Which congruence criterion states that two right-angled triangles are congruent if hypotenuse and one side of one triangle are equal to hypotenuse and the corresponding side of the other?",
        options: ["SSS", "SAS", "ASA", "RHS"],
        correctAnswer: "RHS",
        explanation: "RHS criterion applies specifically to right-angled triangles, requiring equal hypotenuse and one corresponding side. 📐",
        wrongAnswerExplanations: {
            "SSS": "This requires all three sides to be equal, not specifically for right triangles.",
            "SAS": "This requires two sides and the included angle to be equal.",
            "ASA": "This requires two angles and the included side to be equal."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: "cl7_ch7_t2_qe7",
        type: "mcq",
        question: "If Δ ABC ≅ Δ PQR, which of the following is true?",
        options: ["AB = PR", "BC = PQ", "AC = QR", "AB = PQ"],
        correctAnswer: "AB = PQ",
        explanation: "In congruent triangles, corresponding sides are equal, so AB = PQ, BC = QR, and AC = PR. ≅",
        wrongAnswerExplanations: {
            "AB = PR": "This matches non-corresponding sides.",
            "BC = PQ": "This matches non-corresponding sides.",
            "AC = QR": "This matches non-corresponding sides."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: "cl7_ch7_t2_qe8",
        type: "mcq",
        question: "What is the minimum number of corresponding parts needed to be equal to prove two triangles congruent?",
        options: ["All 6 parts", "3 parts", "5 parts", "4 parts"],
        correctAnswer: "3 parts",
        explanation: "3 parts are sufficient if they satisfy one of the congruence criteria (SSS, SAS, ASA, AAS, RHS). ▲",
        wrongAnswerExplanations: {
            "All 6 parts": "Fewer than 6 parts can establish congruence if they match a criterion.",
            "5 parts": "Fewer than 5 parts can establish congruence.",
            "4 parts": "3 parts can be sufficient for congruence."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: "cl7_ch7_t2_qe9",
        type: "mcq",
        question: "In the ASA congruence criterion, what do the two 'A's stand for?",
        options: ["Areas", "Angles", "Adjacent sides", "All vertices"],
        correctAnswer: "Angles",
        explanation: "In ASA (Angle-Side-Angle), both 'A's stand for angles that are separated by the side 'S'. ∠",
        wrongAnswerExplanations: {
            "Areas": "Congruence criteria are about sides and angles, not areas.",
            "Adjacent sides": "The 'A's represent angles, not sides.",
            "All vertices": "The 'A's specifically refer to angles."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: "cl7_ch7_t2_qe10",
        type: "mcq",
        question: "If corresponding angles of two triangles are equal, what can you conclude?",
        options: ["The triangles are congruent", "The triangles are similar", "Nothing can be concluded", "The triangles are equilateral"],
        correctAnswer: "The triangles are similar",
        explanation: "Equal corresponding angles only make triangles similar. For congruence, sides must also be proportional. ∝",
        wrongAnswerExplanations: {
            "The triangles are congruent": "Equal angles alone don't guarantee congruence.",
            "Nothing can be concluded": "Equal angles do establish similarity.",
            "The triangles are equilateral": "Equal angles don't make triangles equilateral."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: "cl7_ch7_t2_qe11",
        type: "mcq",
        question: "When using the SAS congruence criterion, which angle must be equal in both triangles?",
        options: ["Any angle", "The largest angle", "The included angle between the two sides", "The smallest angle"],
        correctAnswer: "The included angle between the two sides",
        explanation: "In SAS, the angle must be the included angle between the two corresponding equal sides. ∠",
        wrongAnswerExplanations: {
            "Any angle": "Not any angle works; it must be the included angle.",
            "The largest angle": "It must be the included angle, not necessarily the largest.",
            "The smallest angle": "It must be the included angle, not necessarily the smallest."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: "cl7_ch7_t2_qe12",
        type: "mcq",
        question: "What does the symbol '≅' represent in geometry?",
        options: ["Equal to", "Approximately equal to", "Congruent to", "Similar to"],
        correctAnswer: "Congruent to",
        explanation: "The symbol '≅' means 'is congruent to' and indicates that two shapes have identical size and shape. ≅",
        wrongAnswerExplanations: {
            "Equal to": "Equal to is represented by '='.",
            "Approximately equal to": "This is represented by '≈'.",
            "Similar to": "Similar to is represented by '~'."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: "cl7_ch7_t2_qe13",
        type: "mcq",
        question: "In two triangles, if three angles of one triangle equal three angles of another, what can you conclude?",
        options: ["The triangles are congruent", "The triangles are similar", "The triangles are identical", "Nothing can be concluded"],
        correctAnswer: "The triangles are similar",
        explanation: "Three equal angles make triangles similar but not necessarily congruent; their sizes may differ. ∝",
        wrongAnswerExplanations: {
            "The triangles are congruent": "Equal angles alone don't ensure congruence.",
            "The triangles are identical": "'Identical' implies congruence, which isn't guaranteed.",
            "Nothing can be concluded": "Equal angles do establish similarity."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: "cl7_ch7_t2_qe14",
        type: "mcq",
        question: "Two triangles have 'AAA' correspondence. Are they congruent?",
        options: ["Yes, always", "No, never", "Sometimes", "Cannot be determined"],
        correctAnswer: "No, never",
        explanation: "AAA only ensures similarity, not congruence. The triangles could be different sizes. ∝",
        wrongAnswerExplanations: {
            "Yes, always": "AAA is not a congruence criterion, only a similarity criterion.",
            "Sometimes": "AAA never guarantees congruence.",
            "Cannot be determined": "We can determine they are not congruent by AAA alone."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: "cl7_ch7_t2_qe15",
        type: "mcq",
        question: "Which of the following is an application of congruence in real life?",
        options: ["Different sized cell phones", "Mass production of identical parts", "Similar triangles in architecture", "Perspective drawing"],
        correctAnswer: "Mass production of identical parts",
        explanation: "Mass production relies on creating identical (congruent) parts for assembly and interchangeability. 🏭",
        wrongAnswerExplanations: {
            "Different sized cell phones": "Different sizes indicate non-congruence.",
            "Similar triangles in architecture": "Similar shapes have same shape but different sizes.",
            "Perspective drawing": "Uses similar, not necessarily congruent shapes."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: "cl7_ch7_t2_qe16",
        type: "mcq",
        question: "If triangle ABC is congruent to triangle DEF, and angle A = 60°, what is angle D?",
        options: ["30°", "60°", "90°", "120°"],
        correctAnswer: "60°",
        explanation: "In congruent triangles, corresponding angles are equal, so angle D = angle A = 60°. ∠",
        wrongAnswerExplanations: {
            "30°": "Corresponding angles in congruent triangles are equal, so D = A = 60°.",
            "90°": "Corresponding angles in congruent triangles are equal, so D = A = 60°.",
            "120°": "Corresponding angles in congruent triangles are equal, so D = A = 60°."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: "cl7_ch7_t2_qe17",
        type: "mcq",
        question: "Which criterion cannot be used to prove that two triangles are congruent?",
        options: ["SSS", "AAA", "ASA", "SAS"],
        correctAnswer: "AAA",
        explanation: "AAA (Angle-Angle-Angle) only proves similarity, not congruence. It lacks side length information. ⚠️",
        wrongAnswerExplanations: {
            "SSS": "SSS is a valid congruence criterion for triangles.",
            "ASA": "ASA is a valid congruence criterion for triangles.",
            "SAS": "SAS is a valid congruence criterion for triangles."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: "cl7_ch7_t2_qe18",
        type: "mcq",
        question: "In a geometric proof, two triangles are shown to have SAS correspondence. What is the correct conclusion?",
        options: ["The triangles have the same area", "The triangles are congruent", "The triangles are similar", "The triangles have equal perimeters"],
        correctAnswer: "The triangles are congruent",
        explanation: "By the SAS congruence criterion, triangles with two equal sides and the included angle are congruent. ≅",
        wrongAnswerExplanations: {
            "The triangles have the same area": "Congruence implies equal area, but equal area doesn't characterize the relationship.",
            "The triangles are similar": "They are not just similar but congruent (identical in size and shape).",
            "The triangles have equal perimeters": "Congruence implies equal perimeters, but this doesn't fully characterize them."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: "cl7_ch7_t2_qe19",
        type: "mcq",
        question: "What is the purpose of using congruence criteria in geometric proofs?",
        options: ["To show shapes are similar", "To calculate perimeters", "To prove figures are identical without measuring each part", "To find areas of shapes"],
        correctAnswer: "To prove figures are identical without measuring each part",
        explanation: "Congruence criteria let us prove triangles are identical by checking only certain key parts. 📏",
        wrongAnswerExplanations: {
            "To show shapes are similar": "Similarity requires different criteria than congruence.",
            "To calculate perimeters": "While congruent shapes have equal perimeters, this isn't the purpose of congruence criteria.",
            "To find areas of shapes": "Congruence criteria aren't primarily for finding areas."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: "cl7_ch7_t2_qe20",
        type: "mcq",
        question: "If two triangles have 'SSA' correspondence, what can you conclude?",
        options: ["They are always congruent", "They are never congruent", "They may or may not be congruent", "They are similar but not congruent"],
        correctAnswer: "They may or may not be congruent",
        explanation: "SSA doesn't guarantee congruence; it can result in two possible triangles (ambiguous case). ⚠️",
        wrongAnswerExplanations: {
            "They are always congruent": "SSA is not a valid congruence criterion in all cases.",
            "They are never congruent": "SSA might result in congruence in some specific cases.",
            "They are similar but not congruent": "SSA may result in congruence in some cases."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    }
];
