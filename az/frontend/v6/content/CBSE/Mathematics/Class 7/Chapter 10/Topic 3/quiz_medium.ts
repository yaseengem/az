// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 7\Chapter10\Topic3\quiz_medium.ts
import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl7_ch10_t3_qm1',
        type: "mcq",
        question: "What is the correct sequence of steps to construct an angle bisector using compass and ruler?",
        options: [
            "Draw an arc, connect the marks, mark two points on the arc",
            "Draw two arcs, mark the intersection point, connect to original vertex",
            "Mark the intersection point, draw an arc, connect to the original vertex",
            "Draw the angle, measure with protractor, draw bisector line"
        ],
        correctAnswer: "Draw an arc, mark two points on the arc, connect the marks",
        explanation: "Draw an arc from vertex, mark points where arc meets angle sides, use compass to create intersecting arcs, draw bisector line. ✏️",
        wrongAnswerExplanations: {
            "Draw two arcs, mark the intersection point, connect to original vertex": "This omits the first arc from the vertex.",
            "Mark the intersection point, draw an arc, connect to the original vertex": "This sequence is out of order.",
            "Draw the angle, measure with protractor, draw bisector line": "This uses a protractor, not compass and ruler construction."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl7_ch10_t3_qm2',
        type: "mcq",
        question: "When a compass opens wider, how does it affect the radius of the circle drawn?",
        options: [
            "The radius decreases",
            "The radius increases",
            "The radius remains the same",
            "The radius becomes variable"
        ],
        correctAnswer: "The radius increases",
        explanation: "The distance between the compass's point and pencil determines the radius—wider opening means larger radius. ⭕",
        wrongAnswerExplanations: {
            "The radius decreases": "Opening wider increases the distance between points, increasing radius.",
            "The radius remains the same": "Changing the compass opening directly affects the radius.",
            "The radius becomes variable": "The radius remains constant for a given compass opening."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch10_t3_qm3',
        type: "mcq",
        question: "A line segment AB is 8 cm long. To construct a perpendicular bisector, what should be the minimum radius of the arc drawn from points A and B?",
        options: ["2 cm", "4 cm", "More than 4 cm", "8 cm"],
        correctAnswer: "More than 4 cm",
        explanation: "The radius must exceed half of AB's length to ensure the arcs intersect, so must be > 4 cm for an 8 cm segment. 📏",
        wrongAnswerExplanations: {
            "2 cm": "This is too small and arcs won't intersect outside the line segment.",
            "4 cm": "This would place points exactly on the segment, not creating a proper perpendicular bisector.",
            "8 cm": "This is excessive—we need more than half the length but not necessarily the full length."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl7_ch10_t3_qm4',
        type: "mcq",
        question: "Which construction is impossible to perform using only a compass and a ruler?",
        options: [
            "Bisecting an angle",
            "Constructing a 60° angle",
            "Trisecting an arbitrary angle",
            "Drawing a perpendicular bisector"
        ],
        correctAnswer: "Trisecting an arbitrary angle",
        explanation: "Trisecting an arbitrary angle using only compass and ruler is mathematically proven to be impossible. ∠",
        wrongAnswerExplanations: {
            "Bisecting an angle": "This is a standard construction possible with compass and ruler.",
            "Constructing a 60° angle": "This can be done by constructing an equilateral triangle.",
            "Drawing a perpendicular bisector": "This is a standard construction possible with compass and ruler."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl7_ch10_t3_qm5',
        type: "mcq",
        question: "If you want to draw a line parallel to an existing line through a point not on the line, which instrument combination works best?",
        options: [
            "Ruler only",
            "Compass only",
            "Set squares and ruler",
            "Protractor and ruler"
        ],
        correctAnswer: "Set squares and ruler",
        explanation: "Set squares with a ruler allow accurate parallel line construction by maintaining the same angle alignment. 📐",
        wrongAnswerExplanations: {
            "Ruler only": "A ruler alone cannot ensure the line is parallel.",
            "Compass only": "A compass alone cannot draw straight lines.",
            "Protractor and ruler": "While possible, set squares provide better accuracy for parallel lines."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch10_t3_qm6',
        type: "mcq",
        question: "What is the purpose of the adjusting screw or joint in a compass?",
        options: [
            "To change the color of the pencil",
            "To lock the compass at a specific radius",
            "To increase the weight of the compass",
            "To attach additional tools"
        ],
        correctAnswer: "To lock the compass at a specific radius",
        explanation: "The adjusting screw or joint allows setting and maintaining a specific radius while drawing. ⭕",
        wrongAnswerExplanations: {
            "To change the color of the pencil": "The screw doesn't affect pencil color.",
            "To increase the weight of the compass": "Weight adjustment is not the purpose of the screw.",
            "To attach additional tools": "The screw isn't designed for attaching other tools."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch10_t3_qm7',
        type: "mcq",
        question: "When using a protractor to measure an angle, where should the center point of the protractor be placed?",
        options: [
            "At the midpoint of one of the angle's sides",
            "At the vertex of the angle",
            "At any point on one side of the angle",
            "Outside the angle to be measured"
        ],
        correctAnswer: "At the vertex of the angle",
        explanation: "The center point or origin of the protractor must align with the vertex of the angle being measured. 📐",
        wrongAnswerExplanations: {
            "At the midpoint of one of the angle's sides": "This would give an incorrect measurement.",
            "At any point on one side of the angle": "This would not provide accurate measurement.",
            "Outside the angle to be measured": "The protractor must be centered at the vertex for accuracy."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch10_t3_qm8',
        type: "mcq",
        question: "Which of these errors would cause the most significant inaccuracy when constructing a triangle with given side lengths?",
        options: [
            "Not sharpening the pencil",
            "Using a flexible ruler",
            "Incorrect compass opening",
            "Drawing light lines"
        ],
        correctAnswer: "Incorrect compass opening",
        explanation: "The compass opening determines side lengths, so an incorrect setting directly affects the triangle's proportions. 📏",
        wrongAnswerExplanations: {
            "Not sharpening the pencil": "This affects line thickness but not critical measurements.",
            "Using a flexible ruler": "While not ideal, careful use can still produce acceptable results.",
            "Drawing light lines": "Line visibility doesn't significantly affect geometric accuracy."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl7_ch10_t3_qm9',
        type: "mcq",
        question: "What is the minimum number of arcs needed to construct an equilateral triangle using compass and ruler?",
        options: ["2", "3", "4", "6"],
        correctAnswer: "2",
        explanation: "You need just 2 arcs: one from each endpoint of the base, with radius equal to the base length. △",
        wrongAnswerExplanations: {
            "3": "Only 2 arcs are needed; a third is unnecessary for an equilateral triangle.",
            "4": "This exceeds the minimum number needed.",
            "6": "This greatly exceeds the minimum number needed."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl7_ch10_t3_qm10',
        type: "mcq",
        question: "When copying an angle using compass and ruler, what is the first step?",
        options: [
            "Draw an arc from the vertex of the original angle",
            "Draw a ray that will become one side of the new angle",
            "Place the protractor on the angle",
            "Measure the angle with a protractor"
        ],
        correctAnswer: "Draw an arc from the vertex of the original angle",
        explanation: "First draw an arc from the original angle's vertex, then transfer this arc measurement to construct the copy. 📐",
        wrongAnswerExplanations: {
            "Draw a ray that will become one side of the new angle": "This comes after marking the original angle.",
            "Place the protractor on the angle": "We're using compass and ruler, not a protractor.",
            "Measure the angle with a protractor": "We're using compass and ruler, not measuring with a protractor."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl7_ch10_t3_qm11',
        type: "mcq",
        question: "What is the term for the distance from the center to any point on the circle when using a compass?",
        options: ["Diameter", "Circumference", "Radius", "Arc length"],
        correctAnswer: "Radius",
        explanation: "The radius is the fixed distance from the center to any point on the circle when using a compass. ⭕",
        wrongAnswerExplanations: {
            "Diameter": "The diameter is twice the radius, crossing the center of the circle.",
            "Circumference": "The circumference is the distance around the entire circle.",
            "Arc length": "An arc length is only part of the circumference, not the center-to-edge distance."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch10_t3_qm12',
        type: "mcq",
        question: "When constructing the perpendicular bisector of a line segment, why do we draw arcs of equal radius from both endpoints?",
        options: [
            "To make the construction look symmetrical",
            "To locate points equidistant from both endpoints",
            "To divide the segment into multiple parts",
            "To confirm the length of the segment"
        ],
        correctAnswer: "To locate points equidistant from both endpoints",
        explanation: "Points on the perpendicular bisector are equidistant from both endpoints—equal radius arcs find such points. 📊",
        wrongAnswerExplanations: {
            "To make the construction look symmetrical": "Symmetry is a result, not the purpose of equal radii.",
            "To divide the segment into multiple parts": "The construction divides the segment into two equal parts, not multiple parts.",
            "To confirm the length of the segment": "This is not the purpose of the construction."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl7_ch10_t3_qm13',
        type: "mcq",
        question: "Which of these is NOT a common error when using a protractor to measure angles?",
        options: [
            "Misplacing the center point",
            "Reading from the wrong scale",
            "Using too sharp a pencil",
            "Not aligning the baseline properly"
        ],
        correctAnswer: "Using too sharp a pencil",
        explanation: "A sharp pencil actually improves precision; common errors involve alignment and reading the scale. 📝",
        wrongAnswerExplanations: {
            "Misplacing the center point": "This is a common error that leads to incorrect measurements.",
            "Reading from the wrong scale": "Protractors often have two scales, and using the wrong one is a common error.",
            "Not aligning the baseline properly": "Improper baseline alignment leads to measurement errors."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch10_t3_qm14',
        type: "mcq",
        question: "In geometric constructions, why is a ruler without measurements often preferred over one with measurements?",
        options: [
            "It is lighter and easier to handle",
            "It enforces precision through geometric principles rather than measurement",
            "It is less expensive",
            "It allows for larger constructions"
        ],
        correctAnswer: "It enforces precision through geometric principles rather than measurement",
        explanation: "Pure constructions rely on geometric properties and proportions, not numerical measurements. 📏",
        wrongAnswerExplanations: {
            "It is lighter and easier to handle": "Weight and handling aren't the main reasons.",
            "It is less expensive": "Cost isn't the primary consideration for using an unmarked ruler.",
            "It allows for larger constructions": "The size of constructions isn't determined by markings."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl7_ch10_t3_qm15',
        type: "mcq",
        question: "Which process would require the most precise use of geometric tools?",
        options: [
            "Drawing a rough sketch of a triangle",
            "Constructing a square inscribed in a circle",
            "Measuring the length of a pencil",
            "Drawing a straight line between two points"
        ],
        correctAnswer: "Constructing a square inscribed in a circle",
        explanation: "This requires precise construction of perpendicular diameters and equal arcs—demanding accurate tool use. ⭕",
        wrongAnswerExplanations: {
            "Drawing a rough sketch of a triangle": "A rough sketch doesn't require high precision.",
            "Measuring the length of a pencil": "Simple measurement requires moderate precision.",
            "Drawing a straight line between two points": "This is a basic operation requiring standard precision."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl7_ch10_t3_qm16',
        type: "mcq",
        question: "To divide a line segment into 5 equal parts using compass and ruler, what geometric principle is primarily used?",
        options: [
            "Circle theorems",
            "Parallel line properties",
            "Triangle congruence",
            "Angle bisection"
        ],
        correctAnswer: "Parallel line properties",
        explanation: "This uses the parallel line method where parallel lines cut by transversals create proportional segments. 📏",
        wrongAnswerExplanations: {
            "Circle theorems": "While circles may be used in some constructions, parallel lines are key here.",
            "Triangle congruence": "This isn't the primary principle for dividing a line segment.",
            "Angle bisection": "This divides angles, not line segments."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl7_ch10_t3_qm17',
        type: "mcq",
        question: "What must be true about the angles in a set square used for drawing?",
        options: [
            "All angles must be acute",
            "One angle must be 90°",
            "All angles must be 60°",
            "Two angles must be equal"
        ],
        correctAnswer: "One angle must be 90°",
        explanation: "Set squares always have one right angle (90°), with the other two angles totaling 90° as well. 📐",
        wrongAnswerExplanations: {
            "All angles must be acute": "Set squares always have one right angle, which isn't acute.",
            "All angles must be 60°": "This would make an equilateral triangle, not a set square.",
            "Two angles must be equal": "While some set squares have equal angles (45°-45°-90°), not all do (30°-60°-90°)."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch10_t3_qm18',
        type: "mcq",
        question: "When a compass's lead needs replacing, what is the most important consideration?",
        options: [
            "The color of the lead",
            "The hardness of the lead",
            "The price of the lead",
            "The brand of the lead"
        ],
        correctAnswer: "The hardness of the lead",
        explanation: "Lead hardness affects line quality—too soft smudges, too hard scratches paper, medium hardness is ideal. ✏️",
        wrongAnswerExplanations: {
            "The color of the lead": "Color is less important than hardness for geometric constructions.",
            "The price of the lead": "Quality and hardness matter more than price for precision.",
            "The brand of the lead": "The brand is less important than the lead's hardness."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch10_t3_qm19',
        type: "mcq",
        question: "What is the advantage of a compass with a wheel adjustment over one with a simple hinge?",
        options: [
            "It's more colorful",
            "It allows more precise radius adjustment",
            "It's always cheaper",
            "It draws thicker lines"
        ],
        correctAnswer: "It allows more precise radius adjustment",
        explanation: "A wheel adjustment allows fine, incremental radius changes, providing greater precision in constructions. ⭕",
        wrongAnswerExplanations: {
            "It's more colorful": "Color has no relation to the adjustment mechanism.",
            "It's always cheaper": "Wheel-adjusted compasses are often more expensive due to the mechanism.",
            "It draws thicker lines": "The adjustment mechanism doesn't affect line thickness."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl7_ch10_t3_qm20',
        type: "mcq",
        question: "If a student wants to construct a regular hexagon, which tool combination would be most efficient?",
        options: [
            "Ruler and set square",
            "Compass and protractor",
            "Compass and ruler",
            "Protractor and ruler"
        ],
        correctAnswer: "Compass and ruler",
        explanation: "With compass set to radius length, stepping around a circle creates a perfect regular hexagon. ⬡",
        wrongAnswerExplanations: {
            "Ruler and set square": "This combination doesn't easily ensure equal sides and angles.",
            "Compass and protractor": "While possible, compass and ruler alone is more efficient.",
            "Protractor and ruler": "This requires more measurements and has more potential for error."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    }
];
