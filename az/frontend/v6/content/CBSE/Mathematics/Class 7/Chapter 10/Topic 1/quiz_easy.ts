// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 7\Chapter10\Topic1\quiz_easy.ts
import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: "cl7_ch10_t1_qe1",
        type: "mcq",
        question: "Which instrument is NOT typically used in the construction of a triangle?",
        options: ["Compass", "Ruler", "Protractor", "Calculator"],
        correctAnswer: "Calculator",
        explanation: "Triangle construction typically uses compass, ruler, and protractor to measure and draw lengths and angles. A calculator is not a construction tool. 📐",
        wrongAnswerExplanations: {
            "Compass": "A compass is essential for constructing arcs to measure equal lengths.",
            "Ruler": "A ruler is needed to draw straight lines and measure lengths.",
            "Protractor": "A protractor helps measure and construct angles accurately."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: "cl7_ch10_t1_qe2",
        type: "mcq",
        question: "What is the minimum number of measurements needed to construct a triangle?",
        options: ["1", "2", "3", "4"],
        correctAnswer: "3",
        explanation: "At least 3 measurements (3 sides, or 2 sides and an angle, or 2 angles and a side) are needed to construct a unique triangle. This follows from triangle congruence criteria. 🔍",
        wrongAnswerExplanations: {
            "1": "With only 1 measurement, infinite triangles can be constructed.",
            "2": "With only 2 measurements, infinite triangles can be constructed.",
            "4": "3 measurements are sufficient; a 4th would be redundant."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: "cl7_ch10_t1_qe3",
        type: "mcq",
        question: "In the SSS construction method, what does SSS stand for?",
        options: ["Side Side Side", "Same Side Similarity", "Side Slope Side", "Standard Shape Size"],
        correctAnswer: "Side Side Side",
        explanation: "SSS stands for Side Side Side, meaning all three sides of the triangle are given. This is enough information to construct a unique triangle. 📏",
        wrongAnswerExplanations: {
            "Same Side Similarity": "This is not a geometric term related to triangle construction.",
            "Side Slope Side": "This is not a standard method in triangle construction.",
            "Standard Shape Size": "This is not related to triangle construction methods."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: "cl7_ch10_t1_qe4",
        type: "mcq",
        question: "What is the SAS method of triangle construction?",
        options: ["Side Angle Side", "Side Angle Slope", "Same Angle Side", "Standard Angle Size"],
        correctAnswer: "Side Angle Side",
        explanation: "SAS stands for Side Angle Side, where two sides and the included angle (the angle between those sides) are given for constructing a triangle. 📐",
        wrongAnswerExplanations: {
            "Side Angle Slope": "This is not a standard method in triangle construction.",
            "Same Angle Side": "This is not a geometric term related to triangle construction.",
            "Standard Angle Size": "This is not related to triangle construction methods."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: "cl7_ch10_t1_qe5",
        type: "mcq",
        question: "When constructing a triangle using the SSS method, what tool is primarily used to mark the lengths?",
        options: ["Ruler only", "Compass only", "Both ruler and compass", "Protractor"],
        correctAnswer: "Both ruler and compass",
        explanation: "In SSS construction, a ruler is used to draw straight lines and a compass is used to mark the required lengths from the endpoints. Both tools are necessary. ✏️",
        wrongAnswerExplanations: {
            "Ruler only": "A ruler alone cannot construct arcs needed in SSS method.",
            "Compass only": "A compass alone cannot draw the straight sides of the triangle.",
            "Protractor": "A protractor measures angles, but SSS method requires only side measurements."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: "cl7_ch10_t1_qe6",
        type: "mcq",
        question: "Which of these is NOT a valid triangle construction method?",
        options: ["SSS", "SAS", "ASA", "SSA"],
        correctAnswer: "SSA",
        explanation: "SSA (Side-Side-Angle) is not a valid construction method as it may not yield a unique triangle. In some cases, it can result in two different triangles. 🔺",
        wrongAnswerExplanations: {
            "SSS": "Side-Side-Side is a valid construction method.",
            "SAS": "Side-Angle-Side is a valid construction method.",
            "ASA": "Angle-Side-Angle is a valid construction method."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: "cl7_ch10_t1_qe7",
        type: "mcq",
        question: "In the ASA construction method, what does ASA stand for?",
        options: ["Angle Side Angle", "Area Side Angle", "Angle Side Area", "Adjacent Side Angle"],
        correctAnswer: "Angle Side Angle",
        explanation: "ASA stands for Angle Side Angle, where two angles and the included side (side between the angles) are given for constructing a triangle. 📐",
        wrongAnswerExplanations: {
            "Area Side Angle": "This is not a standard method in triangle construction.",
            "Angle Side Area": "This is not a geometric term related to triangle construction.",
            "Adjacent Side Angle": "This is not a standard triangle construction method."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: "cl7_ch10_t1_qe8",
        type: "mcq",
        question: "What is the sum of all angles in any triangle?",
        options: ["90 degrees", "180 degrees", "270 degrees", "360 degrees"],
        correctAnswer: "180 degrees",
        explanation: "The sum of all angles in any triangle is always 180° (π radians). This is a fundamental property used in constructing triangles with given angle measurements. 📐",
        wrongAnswerExplanations: {
            "90 degrees": "90 degrees is the sum of angles in a right triangle.",
            "270 degrees": "This is not the sum of angles in a triangle.",
            "360 degrees": "360 degrees is the sum of angles in a quadrilateral, not a triangle."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: "cl7_ch10_t1_qe9",
        type: "mcq",
        question: "When constructing a triangle with a compass, what geometric shape are you drawing?",
        options: ["Line", "Angle", "Arc", "Square"],
        correctAnswer: "Arc",
        explanation: "A compass draws arcs, which are portions of circles. These arcs are used to mark distances and locate vertices in triangle construction. 🧭",
        wrongAnswerExplanations: {
            "Line": "Lines are drawn with a ruler, not a compass.",
            "Angle": "Angles are formed by two rays, not drawn directly with a compass.",
            "Square": "A compass cannot directly draw a square."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: "cl7_ch10_t1_qe10",
        type: "mcq",
        question: "What is the RHS criterion for triangle construction?",
        options: ["Right angle, Hypotenuse, Side", "Right angle, Height, Slant", "Regular, Half, Straight", "Radius, Height, Side"],
        correctAnswer: "Right angle, Hypotenuse, Side",
        explanation: "RHS stands for Right angle, Hypotenuse, Side. It's used to construct a right-angled triangle when the hypotenuse and one side are known. 📐",
        wrongAnswerExplanations: {
            "Right angle, Height, Slant": "This is not a standard construction criterion.",
            "Regular, Half, Straight": "These terms don't form a standard construction criterion.",
            "Radius, Height, Side": "This is not related to triangle construction."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: "cl7_ch10_t1_qe11",
        type: "mcq",
        question: "Which of these is true about a triangle with sides of length 5 cm, 9 cm, and 15 cm?",
        options: ["It can be constructed", "It forms an equilateral triangle", "It forms a right-angled triangle", "It cannot be constructed"],
        correctAnswer: "It cannot be constructed",
        explanation: "A triangle can't be constructed if the sum of any two sides is less than or equal to the third side. Here, 5 + 9 = 14 < 15, violating the triangle inequality theorem. 📏",
        wrongAnswerExplanations: {
            "It can be constructed": "The given measurements violate the triangle inequality theorem.",
            "It forms an equilateral triangle": "An equilateral triangle has all sides equal in length.",
            "It forms a right-angled triangle": "A right triangle must satisfy the Pythagorean theorem."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: "cl7_ch10_t1_qe12",
        type: "mcq",
        question: "Which of these is a necessary condition for constructing a triangle?",
        options: ["All angles must be less than 60°", "The sum of all sides must equal 180", "The sum of any two sides must be greater than the third side", "At least one angle must be 90°"],
        correctAnswer: "The sum of any two sides must be greater than the third side",
        explanation: "The triangle inequality theorem states that the sum of any two sides must be greater than the third side for a triangle to exist. This is fundamental to triangle construction. 📐",
        wrongAnswerExplanations: {
            "All angles must be less than 60°": "Triangles can have angles of 60° or greater (except 180° or more).",
            "The sum of all sides must equal 180": "180 relates to the sum of angles (in degrees), not sides.",
            "At least one angle must be 90°": "Triangles can exist without any right angles."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: "cl7_ch10_t1_qe13",
        type: "mcq",
        question: "When using a protractor in triangle construction, what are you measuring?",
        options: ["Side length", "Area", "Angle", "Perimeter"],
        correctAnswer: "Angle",
        explanation: "A protractor is specifically designed to measure and draw angles in degrees. In triangle construction, it's used to establish the required angle measurements. 📐",
        wrongAnswerExplanations: {
            "Side length": "Side lengths are measured using a ruler, not a protractor.",
            "Area": "A protractor cannot measure area directly.",
            "Perimeter": "Perimeter is calculated by adding side lengths, not measured with a protractor."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: "cl7_ch10_t1_qe14",
        type: "mcq",
        question: "In triangle construction, what happens if all three angles are given but no sides?",
        options: ["A unique triangle can be constructed", "No triangle can be constructed", "Exactly two triangles can be constructed", "Infinitely many similar triangles can be constructed"],
        correctAnswer: "Infinitely many similar triangles can be constructed",
        explanation: "When only angles are given (AAA), infinitely many similar triangles can be constructed, differing in size but having the same shape. A side length is needed to fix the size. 🔍",
        wrongAnswerExplanations: {
            "A unique triangle can be constructed": "Without any side length, the size isn't determined.",
            "No triangle can be constructed": "Triangles can be constructed, but not a unique one.",
            "Exactly two triangles can be constructed": "There are infinitely many possibilities, not just two."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    },
    {
        id: "cl7_ch10_t1_qe15",
        type: "mcq",
        question: "Which construction method requires a protractor?",
        options: ["SSS", "SAS", "ASA", "All of the above"],
        correctAnswer: "ASA",
        explanation: "ASA (Angle-Side-Angle) requires measuring angles, so a protractor is necessary. SSS uses only side lengths, and SAS needs one angle measurement. 📏",
        wrongAnswerExplanations: {
            "SSS": "SSS only requires side measurements, so a compass and ruler are sufficient.",
            "SAS": "SAS requires one angle measurement, so a protractor is needed here too.",
            "All of the above": "Not all methods necessarily require a protractor."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: "cl7_ch10_t1_qe16",
        type: "mcq",
        question: "Which of these is true about an equilateral triangle?",
        options: ["All sides have different lengths", "All angles measure 60°", "It has exactly one right angle", "It cannot be constructed with compass and ruler"],
        correctAnswer: "All angles measure 60°",
        explanation: "In an equilateral triangle, all sides are equal and all angles measure 60°. This follows from the angle sum property of triangles (180° ÷ 3 = 60°). 🔺",
        wrongAnswerExplanations: {
            "All sides have different lengths": "An equilateral triangle has all sides equal in length.",
            "It has exactly one right angle": "An equilateral triangle has no right angles; all angles are 60°.",
            "It cannot be constructed with compass and ruler": "An equilateral triangle can be constructed using compass and ruler."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: "cl7_ch10_t1_qe17",
        type: "mcq",
        question: "In which construction method are three angles given?",
        options: ["SSS", "SAS", "ASA", "AAA"],
        correctAnswer: "AAA",
        explanation: "AAA stands for Angle-Angle-Angle, where all three angles of the triangle are given. However, this doesn't yield a unique triangle, only similar triangles. 📐",
        wrongAnswerExplanations: {
            "SSS": "SSS involves three sides, not angles.",
            "SAS": "SAS involves two sides and one angle.",
            "ASA": "ASA involves two angles and one side."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: "cl7_ch10_t1_qe18",
        type: "mcq",
        question: "Which triangle construction is possible with the measurements: sides 3 cm, 4 cm, and angle 45° between them?",
        options: ["SSS", "SAS", "ASA", "AAA"],
        correctAnswer: "SAS",
        explanation: "With two sides (3 cm and 4 cm) and the included angle (45°) between them, the SAS (Side-Angle-Side) construction method can be used. 📐",
        wrongAnswerExplanations: {
            "SSS": "SSS requires three sides; here we have only two sides and an angle.",
            "ASA": "ASA requires two angles and a side; here we have two sides and an angle.",
            "AAA": "AAA requires three angles; here we have only one angle."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: "cl7_ch10_t1_qe19",
        type: "mcq",
        question: "What is the first step in constructing a triangle using the SSS method?",
        options: ["Draw a circle", "Measure an angle", "Draw one side of the given length", "Calculate the perimeter"],
        correctAnswer: "Draw one side of the given length",
        explanation: "In SSS construction, we first draw one side of the given length using a ruler. This forms the base from which the other two sides are constructed using compass arcs. 📏",
        wrongAnswerExplanations: {
            "Draw a circle": "Triangle construction doesn't start with a complete circle.",
            "Measure an angle": "SSS method uses only side lengths, not angles.",
            "Calculate the perimeter": "Computing the perimeter isn't needed for construction."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: "cl7_ch10_t1_qe20",
        type: "mcq",
        question: "Which of these triangles can be constructed with sides measuring 5 cm, 6 cm, and 12 cm?",
        options: ["Equilateral triangle", "Right-angled triangle", "Isosceles triangle", "No triangle possible"],
        correctAnswer: "No triangle possible",
        explanation: "For a triangle to exist, the sum of any two sides must exceed the third side. Here, 5 + 6 = 11 < 12, violating the triangle inequality theorem. 📏",
        wrongAnswerExplanations: {
            "Equilateral triangle": "An equilateral triangle has all sides equal.",
            "Right-angled triangle": "These measurements don't satisfy the Pythagorean theorem.",
            "Isosceles triangle": "An isosceles triangle has at least two equal sides."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 45
    }
];
