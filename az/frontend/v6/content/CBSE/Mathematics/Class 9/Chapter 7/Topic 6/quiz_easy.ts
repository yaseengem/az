// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 9\Chapter7\Topic6\quiz_easy.ts
// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 9\Chapter7\Topic6\quiz_easy.ts
import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl9_ch7_t6_qe1',
        type: "mcq",
        question: "Two triangles are congruent by SAS congruence rule if...",
        options: [
            "Two sides and any angle are equal",
            "Two sides and the included angle are equal",
            "Three sides are equal",
            "Two angles and one side are equal"
        ],
        correctAnswer: "Two sides and the included angle are equal",
        explanation: "According to SAS congruence rule, two triangles are congruent if two sides and the included angle of one triangle are equal to the corresponding two sides and the included angle of the other triangle. 📐",
        wrongAnswerExplanations: {
            "Two sides and any angle are equal": "Having any angle equal is not sufficient. The angle must specifically be the one included between the two equal sides.",
            "Three sides are equal": "This describes the SSS congruence rule, not SAS.",
            "Two angles and one side are equal": "This describes either the ASA or AAS congruence rule, depending on the position of the side."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch7_t6_qe2',
        type: "mcq",
        question: "Which of the following is NOT a congruence criteria for triangles?",
        options: [
            "SSS",
            "SAS",
            "SSA",
            "AAS"
        ],
        correctAnswer: "SSA",
        explanation: "SSA (Side-Side-Angle) is not a valid congruence criterion because it doesn't guarantee congruence. The valid criteria are SSS, SAS, ASA, AAS, and RHS. ✖️",
        wrongAnswerExplanations: {
            "SSS": "SSS (Side-Side-Side) is a valid congruence criterion for triangles.",
            "SAS": "SAS (Side-Angle-Side) is a valid congruence criterion for triangles.",
            "AAS": "AAS (Angle-Angle-Side) is a valid congruence criterion for triangles."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch7_t6_qe3',
        type: "mcq",
        question: "If two angles of a triangle are equal, then...",
        options: [
            "The third angle must be 60°",
            "The sides opposite to the equal angles are equal",
            "The triangle is equilateral",
            "The triangle is right-angled"
        ],
        correctAnswer: "The sides opposite to the equal angles are equal",
        explanation: "If two angles of a triangle are equal, then the sides opposite to these equal angles are also equal. This is a property of isosceles triangles. ⚖️",
        wrongAnswerExplanations: {
            "The third angle must be 60°": "The third angle depends on the values of the two equal angles, not necessarily 60°.",
            "The triangle is equilateral": "Having two equal angles makes the triangle isosceles, not equilateral. For an equilateral triangle, all three angles must be equal.",
            "The triangle is right-angled": "Equal angles don't determine whether a triangle is right-angled or not."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch7_t6_qe4',
        type: "mcq",
        question: "In a right-angled triangle, which side is the hypotenuse?",
        options: [
            "The shortest side",
            "The side opposite to the right angle",
            "The side adjacent to the right angle",
            "Any of the three sides"
        ],
        correctAnswer: "The side opposite to the right angle",
        explanation: "The hypotenuse in a right-angled triangle is the side opposite to the right angle. It is also the longest side of the triangle. 📏",
        wrongAnswerExplanations: {
            "The shortest side": "The hypotenuse is actually the longest side, not the shortest.",
            "The side adjacent to the right angle": "The sides adjacent to the right angle are called legs or catheti, not the hypotenuse.",
            "Any of the three sides": "The hypotenuse is specifically the side opposite to the right angle, not any side."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch7_t6_qe5',
        type: "mcq",
        question: "The RHS congruence rule applies to...",
        options: [
            "All triangles",
            "Only equilateral triangles",
            "Only isosceles triangles",
            "Only right-angled triangles"
        ],
        correctAnswer: "Only right-angled triangles",
        explanation: "The RHS (Right angle-Hypotenuse-Side) congruence rule applies only to right-angled triangles where the hypotenuse and one side are equal. 📐",
        wrongAnswerExplanations: {
            "All triangles": "RHS criterion requires a right angle, so it cannot apply to all triangles.",
            "Only equilateral triangles": "Equilateral triangles have all angles equal to 60°, so they cannot have a right angle.",
            "Only isosceles triangles": "While some right-angled triangles can be isosceles, RHS applies to all right-angled triangles, not just isosceles ones."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch7_t6_qe6',
        type: "mcq",
        question: "The sum of all angles in a triangle is...",
        options: [
            "90°",
            "180°",
            "270°",
            "360°"
        ],
        correctAnswer: "180°",
        explanation: "The sum of all interior angles in any triangle is 180° (π radians). This is a fundamental property of triangles in Euclidean geometry. 🔺",
        wrongAnswerExplanations: {
            "90°": "90° is the measure of a right angle, not the sum of angles in a triangle.",
            "270°": "270° is not the sum of angles in a triangle. The correct sum is 180°.",
            "360°": "360° is the sum of angles in a full circle or a quadrilateral, not a triangle."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 25
    },
    {
        id: 'cl9_ch7_t6_qe7',
        type: "mcq",
        question: "The line segment joining the midpoints of two sides of a triangle is...",
        options: [
            "Equal to the third side",
            "Parallel to the third side and half its length",
            "Perpendicular to the third side",
            "Equal to half the perimeter of the triangle"
        ],
        correctAnswer: "Parallel to the third side and half its length",
        explanation: "According to the midpoint theorem, the line segment joining the midpoints of two sides of a triangle is parallel to the third side and equal to half its length. 📏",
        wrongAnswerExplanations: {
            "Equal to the third side": "It's half the length of the third side, not equal to it.",
            "Perpendicular to the third side": "It's parallel to the third side, not perpendicular.",
            "Equal to half the perimeter of the triangle": "It's half the length of the third side only, not half the perimeter."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch7_t6_qe8',
        type: "mcq",
        question: "In an isosceles triangle, the angles opposite to the equal sides are...",
        options: [
            "Equal",
            "Complementary",
            "Supplementary",
            "Right angles"
        ],
        correctAnswer: "Equal",
        explanation: "In an isosceles triangle, the angles opposite to the equal sides are equal. This is a fundamental property that helps identify isosceles triangles. 🔄",
        wrongAnswerExplanations: {
            "Complementary": "Complementary angles sum to 90°, which is not necessarily true for the angles in an isosceles triangle.",
            "Supplementary": "Supplementary angles sum to 180°, which is not necessarily true for the angles in an isosceles triangle.",
            "Right angles": "The angles opposite to equal sides are equal to each other, but not necessarily right angles."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch7_t6_qe9',
        type: "mcq",
        question: "CPCT in the context of triangle congruence stands for...",
        options: [
            "Congruent Parts of Congruent Triangles",
            "Corresponding Parts of Congruent Triangles",
            "Congruent Parts Comparison Theorem",
            "Corresponding Points Congruence Theory"
        ],
        correctAnswer: "Corresponding Parts of Congruent Triangles",
        explanation: "CPCT stands for 'Corresponding Parts of Congruent Triangles.' It means that if two triangles are congruent, their corresponding parts (angles and sides) are equal. 🔄",
        wrongAnswerExplanations: {
            "Congruent Parts of Congruent Triangles": "The correct term is 'Corresponding Parts' not 'Congruent Parts.'",
            "Congruent Parts Comparison Theorem": "This is not a standard term in geometry.",
            "Corresponding Points Congruence Theory": "This is not a standard term in geometry."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch7_t6_qe10',
        type: "mcq",
        question: "In a triangle, if two sides are unequal, then...",
        options: [
            "The triangle is isosceles",
            "The angles are also unequal",
            "The angle opposite to the longer side is greater",
            "The angle opposite to the shorter side is greater"
        ],
        correctAnswer: "The angle opposite to the longer side is greater",
        explanation: "In any triangle, if two sides are unequal, then the angle opposite to the longer side is greater than the angle opposite to the shorter side. 📏",
        wrongAnswerExplanations: {
            "The triangle is isosceles": "An isosceles triangle has two equal sides, not unequal sides.",
            "The angles are also unequal": "While this may be true, it's not specific enough. The relationship between the sides and angles is more specific.",
            "The angle opposite to the shorter side is greater": "This is incorrect. The angle opposite to the longer side is greater, not the shorter side."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch7_t6_qe11',
        type: "mcq",
        question: "What is the sum of the exterior angles of a triangle, one at each vertex?",
        options: [
            "180°",
            "270°",
            "360°",
            "540°"
        ],
        correctAnswer: "360°",
        explanation: "The sum of the exterior angles of a triangle, one at each vertex, is 360°. This is true for any triangle regardless of its shape or size. 🔄",
        wrongAnswerExplanations: {
            "180°": "180° is the sum of interior angles of a triangle, not exterior angles.",
            "270°": "The sum of exterior angles of a triangle is 360°, not 270°.",
            "540°": "The sum of exterior angles of a triangle is 360°, not 540°."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch7_t6_qe12',
        type: "mcq",
        question: "If the three angles of a triangle are 30°, 60°, and 90°, what type of triangle is it?",
        options: [
            "Equilateral triangle",
            "Isosceles triangle",
            "Scalene right-angled triangle",
            "Obtuse triangle"
        ],
        correctAnswer: "Scalene right-angled triangle",
        explanation: "A triangle with angles 30°, 60°, and 90° is a right-angled triangle (due to the 90° angle) and it is scalene since all angles are different, meaning all sides have different lengths. 📐",
        wrongAnswerExplanations: {
            "Equilateral triangle": "An equilateral triangle has all angles equal to 60°, which is not the case here.",
            "Isosceles triangle": "An isosceles triangle has at least two equal angles, which is not the case here.",
            "Obtuse triangle": "An obtuse triangle has one angle greater than 90°. This triangle has one angle exactly 90°, making it a right triangle, not obtuse."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch7_t6_qe13',
        type: "mcq",
        question: "The ASA congruence rule states that two triangles are congruent if...",
        options: [
            "All sides are equal",
            "Two angles and the included side are equal",
            "Two angles and any side are equal",
            "All angles are equal"
        ],
        correctAnswer: "Two angles and the included side are equal",
        explanation: "According to the ASA (Angle-Side-Angle) congruence rule, two triangles are congruent if two angles and the included side of one triangle are equal to the corresponding parts of the other triangle. 📐",
        wrongAnswerExplanations: {
            "All sides are equal": "This describes the SSS congruence rule, not ASA.",
            "Two angles and any side are equal": "This is close but not precise. The side must be the included side between the two angles for the ASA criterion.",
            "All angles are equal": "Having all angles equal only makes triangles similar, not necessarily congruent."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch7_t6_qe14',
        type: "mcq",
        question: "For which type of triangle is the centroid, orthocenter, circumcenter, and incenter the same point?",
        options: [
            "Right-angled triangle",
            "Isosceles triangle",
            "Equilateral triangle",
            "Scalene triangle"
        ],
        correctAnswer: "Equilateral triangle",
        explanation: "In an equilateral triangle, the centroid, orthocenter, circumcenter, and incenter all coincide at the same point due to the triangle's perfect symmetry. 🌟",
        wrongAnswerExplanations: {
            "Right-angled triangle": "In a right-angled triangle, these points do not coincide at a single location.",
            "Isosceles triangle": "In an isosceles triangle, these points lie on the axis of symmetry but do not generally coincide.",
            "Scalene triangle": "In a scalene triangle with no equal sides, these points are all at different locations."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch7_t6_qe15',
        type: "mcq",
        question: "What is the minimum number of congruent parts needed to establish congruence between two triangles?",
        options: [
            "2",
            "3",
            "4",
            "6"
        ],
        correctAnswer: "3",
        explanation: "At minimum, 3 congruent parts are needed to establish triangle congruence, as seen in the SSS, SAS, and ASA criteria. However, these parts must satisfy one of the congruence rules. 🔢",
        wrongAnswerExplanations: {
            "2": "Two congruent parts are not sufficient to establish congruence between triangles.",
            "4": "While having 4 congruent parts would establish congruence, the minimum required is 3.",
            "6": "A triangle has 6 parts total (3 sides and 3 angles), but we don't need all of them to be congruent to establish triangle congruence."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch7_t6_qe16',
        type: "mcq",
        question: "In congruent triangles, which of the following is NOT necessarily equal?",
        options: [
            "Corresponding sides",
            "Corresponding angles",
            "Area",
            "Distance from a vertex to the nearest town"
        ],
        correctAnswer: "Distance from a vertex to the nearest town",
        explanation: "In congruent triangles, corresponding sides, angles, and areas are equal. However, the distance from a vertex to the nearest town is not a property of the triangle itself and has nothing to do with congruence. 🏙️",
        wrongAnswerExplanations: {
            "Corresponding sides": "Corresponding sides are equal in congruent triangles by definition.",
            "Corresponding angles": "Corresponding angles are equal in congruent triangles by definition.",
            "Area": "Congruent triangles have the same shape and size, so their areas are equal."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch7_t6_qe17',
        type: "mcq",
        question: "The HL congruence rule applies to which type of triangles?",
        options: [
            "All triangles",
            "Only equilateral triangles",
            "Only isosceles triangles",
            "Only right-angled triangles"
        ],
        correctAnswer: "Only right-angled triangles",
        explanation: "The HL (Hypotenuse-Leg) congruence rule applies only to right-angled triangles. It states that if the hypotenuse and one leg of a right triangle are equal to those of another right triangle, then the triangles are congruent. 📐",
        wrongAnswerExplanations: {
            "All triangles": "The HL criterion requires one angle to be a right angle, so it cannot apply to all triangles.",
            "Only equilateral triangles": "Equilateral triangles have all angles equal to 60°, so they cannot have a right angle.",
            "Only isosceles triangles": "While some right-angled triangles can be isosceles, the HL criterion applies to all right-angled triangles, not just isosceles ones."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch7_t6_qe18',
        type: "mcq",
        question: "Which congruence criterion is equivalent to the RHS criterion?",
        options: [
            "SSS",
            "SAS",
            "HL",
            "ASA"
        ],
        correctAnswer: "HL",
        explanation: "The RHS (Right angle-Hypotenuse-Side) criterion is equivalent to the HL (Hypotenuse-Leg) criterion. Both apply only to right-angled triangles and involve the hypotenuse and one leg. 🔄",
        wrongAnswerExplanations: {
            "SSS": "SSS involves three sides but doesn't specifically require a right angle like RHS does.",
            "SAS": "SAS involves two sides and the included angle, but doesn't specifically require a right angle like RHS does.",
            "ASA": "ASA involves two angles and the included side, which is different from RHS that requires the hypotenuse and a leg."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch7_t6_qe19',
        type: "mcq",
        question: "If one angle of a triangle is greater than another angle, then...",
        options: [
            "The triangle is isosceles",
            "The side opposite to the greater angle is longer",
            "The side opposite to the greater angle is shorter",
            "The triangle is equilateral"
        ],
        correctAnswer: "The side opposite to the greater angle is longer",
        explanation: "In any triangle, if one angle is greater than another angle, then the side opposite to the greater angle is longer than the side opposite to the smaller angle. 📏",
        wrongAnswerExplanations: {
            "The triangle is isosceles": "Having unequal angles doesn't make a triangle isosceles. An isosceles triangle has two equal angles.",
            "The side opposite to the greater angle is shorter": "This is incorrect. The side opposite to the greater angle is longer, not shorter.",
            "The triangle is equilateral": "An equilateral triangle has all angles equal, which contradicts the premise of having unequal angles."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl9_ch7_t6_qe20',
        type: "mcq",
        question: "According to the converse of the midpoint theorem, if a line divides two sides of a triangle proportionally, then it is...",
        options: [
            "Perpendicular to the third side",
            "Passing through the third side's midpoint",
            "Parallel to the third side",
            "Equal in length to the third side"
        ],
        correctAnswer: "Parallel to the third side",
        explanation: "According to the converse of the midpoint theorem, if a line divides two sides of a triangle proportionally, then it is parallel to the third side. This is particularly true when the line divides the sides in the same ratio. 📐",
        wrongAnswerExplanations: {
            "Perpendicular to the third side": "The line would be parallel to the third side, not perpendicular.",
            "Passing through the third side's midpoint": "This is not necessarily true. The line is parallel to the third side but doesn't need to pass through its midpoint.",
            "Equal in length to the third side": "The length of the line depends on the proportional division of the two sides and is not necessarily equal to the third side."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    }
];
