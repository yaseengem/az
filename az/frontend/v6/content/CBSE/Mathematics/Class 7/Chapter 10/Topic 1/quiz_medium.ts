// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 7\Chapter10\Topic1\quiz_medium.ts
import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: "cl7_ch10_t1_qm1",
        type: "mcq",
        question: "What is the minimum information needed to construct a unique triangle?",
        options: ["Three sides", "Three angles", "Two sides and one angle", "Two angles and one side"],
        correctAnswer: "Three sides",
        explanation: "Three sides (SSS) provide sufficient information for a unique triangle. Three angles (AAA) result in similar triangles of different sizes. SAS and ASA also yield unique triangles. 📐",
        wrongAnswerExplanations: {
            "Three angles": "Three angles determine only the shape, not the size, resulting in similar triangles.",
            "Two sides and one angle": "Depends on which angle. SAS works, but SSA may yield multiple triangles.",
            "Two angles and one side": "This is sufficient (ASA or AAS), but not the minimum requirement."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: "cl7_ch10_t1_qm2",
        type: "mcq",
        question: "In constructing a triangle ABC with sides AB = 5 cm, BC = 6 cm, and AC = 7 cm, which criterion is being used?",
        options: ["SSS", "SAS", "ASA", "RHS"],
        correctAnswer: "SSS",
        explanation: "When all three sides (AB, BC, and AC) are given, we use the Side-Side-Side (SSS) construction method to create a unique triangle. 📏",
        wrongAnswerExplanations: {
            "SAS": "SAS requires two sides and the included angle between them.",
            "ASA": "ASA requires two angles and the included side between them.",
            "RHS": "RHS is for right triangles with the hypotenuse and one side given."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: "cl7_ch10_t1_qm3",
        type: "mcq",
        question: "Which of these is NOT a valid combination for constructing a unique triangle?",
        options: ["Three sides", "Two angles and the included side", "Two sides and the included angle", "Two sides and a non-included angle"],
        correctAnswer: "Two sides and a non-included angle",
        explanation: "Two sides and a non-included angle (SSA) may yield zero, one, or two triangles, depending on the specific measurements. It's not a valid criterion for unique construction. 🔍",
        wrongAnswerExplanations: {
            "Three sides": "This is the SSS criterion, which yields a unique triangle.",
            "Two angles and the included side": "This is the ASA criterion, which yields a unique triangle.",
            "Two sides and the included angle": "This is the SAS criterion, which yields a unique triangle."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: "cl7_ch10_t1_qm4",
        type: "mcq",
        question: "If you're constructing a triangle with sides 8 cm, 15 cm, and 17 cm, which type of triangle will result?",
        options: ["Equilateral", "Isosceles", "Scalene", "Right-angled"],
        correctAnswer: "Right-angled",
        explanation: "These sides form a right-angled triangle because 8² + 15² = 64 + 225 = 289 = 17². This follows the Pythagorean theorem, where a² + b² = c². 📐",
        wrongAnswerExplanations: {
            "Equilateral": "An equilateral triangle has all sides equal; these sides have different lengths.",
            "Isosceles": "An isosceles triangle has at least two equal sides; all these sides differ.",
            "Scalene": "A scalene triangle has all sides of different lengths, but these specific measurements form a right-angled triangle."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: "cl7_ch10_t1_qm5",
        type: "mcq",
        question: "When constructing a triangle with the ASA method, if the two angles are 45° and 60°, what is the third angle?",
        options: ["45°", "60°", "75°", "90°"],
        correctAnswer: "75°",
        explanation: "The sum of angles in a triangle is 180°. If two angles are 45° and 60°, then the third angle = 180° - (45° + 60°) = 180° - 105° = 75°. 📐",
        wrongAnswerExplanations: {
            "45°": "This would make the sum of angles 150°, which is less than the required 180°.",
            "60°": "This would make the sum of angles 165°, which is less than the required 180°.",
            "90°": "This would make the sum of angles 195°, which exceeds the required 180°."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: "cl7_ch10_t1_qm6",
        type: "mcq",
        question: "Which of the following measurements can form a triangle?",
        options: ["Sides: 3 cm, 4 cm, 8 cm", "Sides: 5 cm, 5 cm, 10 cm", "Sides: 6 cm, 8 cm, 10 cm", "Sides: 1 cm, 2 cm, 3 cm"],
        correctAnswer: "Sides: 6 cm, 8 cm, 10 cm",
        explanation: "For a triangle to exist, the sum of any two sides must exceed the third side. For 6, 8, 10: 6 + 8 = 14 > 10, 8 + 10 = 18 > 6, and 6 + 10 = 16 > 8. ✅",
        wrongAnswerExplanations: {
            "Sides: 3 cm, 4 cm, 8 cm": "3 + 4 = 7 < 8, violating the triangle inequality theorem.",
            "Sides: 5 cm, 5 cm, 10 cm": "5 + 5 = 10 = 10, violating the strict inequality requirement.",
            "Sides: 1 cm, 2 cm, 3 cm": "1 + 2 = 3 = 3, violating the strict inequality requirement."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: "cl7_ch10_t1_qm7",
        type: "mcq",
        question: "In the construction of a triangle using the SAS method, if the two sides are 5 cm and 7 cm, and the included angle is 60°, what is the length of the third side?",
        options: ["6 cm", "√74 cm", "√49 cm", "12 cm"],
        correctAnswer: "√74 cm",
        explanation: "Using the law of cosines: c² = a² + b² - 2ab·cos(C), where a = 5 cm, b = 7 cm, C = 60°. So c² = 25 + 49 - 2(5)(7)cos(60°) = 74 - 35 = 74. Thus c = √74 cm ≈ 8.6 cm. 📐",
        wrongAnswerExplanations: {
            "6 cm": "This is incorrect; the actual value is approximately 8.6 cm.",
            "√49 cm": "√49 = 7 cm, which is one of the given sides, not the third side.",
            "12 cm": "This is incorrect; the actual value is approximately 8.6 cm."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: "cl7_ch10_t1_qm8",
        type: "mcq",
        question: "If you're constructing a triangle with angles 30°, 60°, and 90°, what type of triangle will result?",
        options: ["Equilateral triangle", "Isosceles triangle", "Scalene right triangle", "Right-angled triangle"],
        correctAnswer: "Right-angled triangle",
        explanation: "With an angle of 90°, this is a right-angled triangle. Specifically, it's a 30-60-90 triangle, a special right triangle with well-known proportions. 📐",
        wrongAnswerExplanations: {
            "Equilateral triangle": "An equilateral triangle has all angles equal to 60°.",
            "Isosceles triangle": "Unless two sides are equal, which isn't guaranteed by these angles.",
            "Scalene right triangle": "While it is right-angled, without side measurements we can't determine if it's scalene."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: "cl7_ch10_t1_qm9",
        type: "mcq",
        question: "What is the purpose of the RHS construction method?",
        options: ["To construct any triangle", "To construct only equilateral triangles", "To construct only right-angled triangles", "To construct only isosceles triangles"],
        correctAnswer: "To construct only right-angled triangles",
        explanation: "RHS (Right angle-Hypotenuse-Side) is specifically used to construct right-angled triangles when we know one side and the hypotenuse. It's not used for other triangle types. 📐",
        wrongAnswerExplanations: {
            "To construct any triangle": "RHS is specifically for right-angled triangles, not any triangle.",
            "To construct only equilateral triangles": "Equilateral triangles don't have right angles and don't use RHS.",
            "To construct only isosceles triangles": "RHS is not specific to isosceles triangles."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: "cl7_ch10_t1_qm10",
        type: "mcq",
        question: "In the construction of a triangle using compass and ruler, what is the role of the compass?",
        options: ["To draw straight lines", "To measure angles", "To draw arcs of specific radii", "To bisect lines"],
        correctAnswer: "To draw arcs of specific radii",
        explanation: "The compass is used to draw arcs with specific radii, which helps in marking distances, locating points, and constructing angles in triangle construction. 🧭",
        wrongAnswerExplanations: {
            "To draw straight lines": "Straight lines are drawn using a ruler, not a compass.",
            "To measure angles": "Angles are measured with a protractor, not a compass.",
            "To bisect lines": "While a compass can help in bisection, its primary role is drawing arcs."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: "cl7_ch10_t1_qm11",
        type: "mcq",
        question: "What is the key difference between the SAS and ASA construction methods?",
        options: ["SAS uses three sides, ASA uses three angles", "SAS includes two sides and an angle, ASA includes two angles and a side", "SAS is for right triangles only, ASA is for any triangle", "There is no difference"],
        correctAnswer: "SAS includes two sides and an angle, ASA includes two angles and a side",
        explanation: "SAS (Side-Angle-Side) uses two sides and the included angle, while ASA (Angle-Side-Angle) uses two angles and the included side. Both yield unique triangles. 📐",
        wrongAnswerExplanations: {
            "SAS uses three sides, ASA uses three angles": "SAS uses two sides and an angle, not three sides.",
            "SAS is for right triangles only, ASA is for any triangle": "Both SAS and ASA can be used for any type of triangle.",
            "There is no difference": "There is a clear difference in the given measurements."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: "cl7_ch10_t1_qm12",
        type: "mcq",
        question: "If a triangle has sides of lengths 7 cm, 24 cm, and 25 cm, what type of triangle is it?",
        options: ["Equilateral", "Isosceles", "Scalene", "Right-angled"],
        correctAnswer: "Right-angled",
        explanation: "These sides form a right-angled triangle because 7² + 24² = 49 + 576 = 625 = 25². This satisfies the Pythagorean theorem: a² + b² = c². 📐",
        wrongAnswerExplanations: {
            "Equilateral": "An equilateral triangle has all sides equal; these sides have different lengths.",
            "Isosceles": "An isosceles triangle has at least two equal sides; all these sides differ.",
            "Scalene": "While it has all sides of different lengths (scalene), it's more specifically a right-angled triangle."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: "cl7_ch10_t1_qm13",
        type: "mcq",
        question: "In constructing a triangle, if you are given two angles as 45° and 45°, what is the third angle?",
        options: ["45°", "90°", "180°", "Can't be determined"],
        correctAnswer: "90°",
        explanation: "The sum of all angles in a triangle is 180°. If two angles are 45° each, then the third angle = 180° - (45° + 45°) = 180° - 90° = 90°. 📐",
        wrongAnswerExplanations: {
            "45°": "This would make the sum 135°, which is less than the required 180°.",
            "180°": "This is the sum of all three angles, not just the third angle.",
            "Can't be determined": "It can be determined using the angle sum property of triangles."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: "cl7_ch10_t1_qm14",
        type: "mcq",
        question: "When constructing a triangle with sides 5 cm, 12 cm, and 13 cm, what is the area of the triangle?",
        options: ["30 sq cm", "60 sq cm", "65 sq cm", "6 sq cm"],
        correctAnswer: "30 sq cm",
        explanation: "Using Heron's formula, Area = √(s(s-a)(s-b)(s-c)), where s = (a+b+c)/2 = (5+12+13)/2 = 15. Area = √(15(15-5)(15-12)(15-13)) = √(15·10·3·2) = √900 = 30 sq cm. 📏",
        wrongAnswerExplanations: {
            "60 sq cm": "This is twice the actual area.",
            "65 sq cm": "This is incorrect; the area is 30 sq cm.",
            "6 sq cm": "This is incorrect; the area is 30 sq cm."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: "cl7_ch10_t1_qm15",
        type: "mcq",
        question: "Which of these methods requires knowledge of the right angle when constructing a triangle?",
        options: ["SSS", "SAS", "ASA", "RHS"],
        correctAnswer: "RHS",
        explanation: "RHS (Right angle-Hypotenuse-Side) specifically requires knowledge of the right angle, along with the hypotenuse and one other side, for constructing right triangles. 📐",
        wrongAnswerExplanations: {
            "SSS": "SSS uses three sides, with no specific requirement for a right angle.",
            "SAS": "SAS uses two sides and the included angle, not necessarily a right angle.",
            "ASA": "ASA uses two angles and the included side, not specifically requiring a right angle."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: "cl7_ch10_t1_qm16",
        type: "mcq",
        question: "In a triangle with sides a, b, and c, which inequality must be satisfied for the triangle to exist?",
        options: ["a + b = c", "a + b < c", "a + b > c", "a = b + c"],
        correctAnswer: "a + b > c",
        explanation: "The triangle inequality theorem states that the sum of the lengths of any two sides must be greater than the length of the third side: a + b > c, b + c > a, and a + c > b. 📏",
        wrongAnswerExplanations: {
            "a + b = c": "If a + b = c, the points would be collinear, not forming a triangle.",
            "a + b < c": "This violates the triangle inequality theorem; no triangle would form.",
            "a = b + c": "This violates the triangle inequality theorem; no triangle would form."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: "cl7_ch10_t1_qm17",
        type: "mcq",
        question: "If you're constructing a triangle using the SAS method with sides 6 cm, 8 cm, and included angle 30°, what is the area of the resulting triangle?",
        options: ["12 sq cm", "24 sq cm", "48 sq cm", "96 sq cm"],
        correctAnswer: "12 sq cm",
        explanation: "For SAS, Area = (1/2)ab·sinC, where a = 6 cm, b = 8 cm, C = 30°. Area = (1/2)(6)(8)sin(30°) = 24 × 0.5 = 12 sq cm. 📐",
        wrongAnswerExplanations: {
            "24 sq cm": "This is the value before multiplying by sin(30°) = 0.5.",
            "48 sq cm": "This is incorrect; the area is 12 sq cm.",
            "96 sq cm": "This is incorrect; the area is 12 sq cm."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: "cl7_ch10_t1_qm18",
        type: "mcq",
        question: "When is it impossible to construct a triangle with three given side lengths?",
        options: ["When all sides are equal", "When one side is longer than the other two combined", "When all sides form a right triangle", "When two sides are equal"],
        correctAnswer: "When one side is longer than the other two combined",
        explanation: "If one side is longer than or equal to the sum of the other two (violating the triangle inequality theorem), it's impossible to construct a triangle. The points would be collinear. 📏",
        wrongAnswerExplanations: {
            "When all sides are equal": "Equal sides form an equilateral triangle, which is perfectly constructable.",
            "When all sides form a right triangle": "Right triangles can be constructed, satisfying the Pythagorean theorem.",
            "When two sides are equal": "Equal sides form an isosceles triangle, which is constructable."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: "cl7_ch10_t1_qm19",
        type: "mcq",
        question: "What is the precise term for the point where all three angle bisectors of a triangle meet?",
        options: ["Centroid", "Circumcenter", "Orthocenter", "Incenter"],
        correctAnswer: "Incenter",
        explanation: "The incenter is the point where all three angle bisectors of a triangle meet. It's also the center of the inscribed circle (incircle) that touches all three sides. 📍",
        wrongAnswerExplanations: {
            "Centroid": "The centroid is where the three medians (lines from vertices to midpoints of opposite sides) meet.",
            "Circumcenter": "The circumcenter is where the three perpendicular bisectors of the sides meet.",
            "Orthocenter": "The orthocenter is where the three altitudes (perpendicular lines from vertices to opposite sides) meet."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: "cl7_ch10_t1_qm20",
        type: "mcq",
        question: "Which of these tools is necessary for constructing an angle of exactly 60° without using a protractor?",
        options: ["Calculator", "Ruler only", "Compass only", "Compass and ruler"],
        correctAnswer: "Compass and ruler",
        explanation: "A 60° angle can be constructed using compass and ruler by first creating an equilateral triangle (all angles 60°) or by bisecting a 120° angle. The process requires both tools. 📐",
        wrongAnswerExplanations: {
            "Calculator": "A calculator calculates values but doesn't physically construct angles.",
            "Ruler only": "A ruler alone can't measure or construct specific angles accurately.",
            "Compass only": "While essential, a compass alone can't draw the straight lines needed."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    }
];
