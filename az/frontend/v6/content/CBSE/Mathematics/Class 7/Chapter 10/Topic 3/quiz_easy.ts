// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 7\Chapter10\Topic3\quiz_easy.ts
import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl7_ch10_t3_qe1',
        type: "mcq",
        question: "Which instrument is used to draw circles and arcs?",
        options: ["Ruler", "Protractor", "Compass", "Divider"],
        correctAnswer: "Compass",
        explanation: "A compass is specifically designed for drawing circles and arcs by fixing one leg and rotating the other containing a pencil. 📏",
        wrongAnswerExplanations: {
            "Ruler": "A ruler is used for drawing straight lines and measuring lengths, not circles.",
            "Protractor": "A protractor is used for measuring and drawing angles, not circles.",
            "Divider": "A divider is used to measure distances, not for drawing circles."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch10_t3_qe2',
        type: "mcq",
        question: "What is the primary purpose of a protractor?",
        options: ["Drawing circles", "Drawing straight lines", "Measuring angles", "Measuring length"],
        correctAnswer: "Measuring angles",
        explanation: "A protractor is a semicircular or circular tool marked with degrees used for measuring and constructing angles. 📐",
        wrongAnswerExplanations: {
            "Drawing circles": "Compasses are used for drawing circles, not protractors.",
            "Drawing straight lines": "Rulers are used for drawing straight lines, not protractors.",
            "Measuring length": "Rulers are used for measuring length, not protractors."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch10_t3_qe3',
        type: "mcq",
        question: "Which of these instruments is used to draw parallel lines?",
        options: ["Compass", "Set squares", "Divider", "Protractor"],
        correctAnswer: "Set squares",
        explanation: "Set squares can be used along with a ruler to draw parallel lines by maintaining the same angle alignment. 📐",
        wrongAnswerExplanations: {
            "Compass": "A compass is primarily used for drawing circles and arcs, not parallel lines.",
            "Divider": "A divider is used to transfer measurements, not for drawing parallel lines.",
            "Protractor": "A protractor is used for measuring angles, not specifically for drawing parallel lines."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch10_t3_qe4',
        type: "mcq",
        question: "What is the unit used for measuring angles with a protractor?",
        options: ["Centimeter", "Meter", "Degree", "Radian"],
        correctAnswer: "Degree",
        explanation: "Angles are measured in degrees (°) on a protractor, with a full circle containing 360 degrees. 🔄",
        wrongAnswerExplanations: {
            "Centimeter": "Centimeter is a unit of length, not angle measurement.",
            "Meter": "Meter is a unit of length, not angle measurement.",
            "Radian": "While radian is an angle measure, standard protractors use degrees."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch10_t3_qe5',
        type: "mcq",
        question: "To construct a 60° angle with compass and ruler, what is the first step?",
        options: [
            "Draw an arc from the vertex",
            "Draw a straight line",
            "Place the protractor on the paper",
            "Measure 60° with the protractor"
        ],
        correctAnswer: "Draw a straight line",
        explanation: "First draw a ray (straight line) that forms the initial side of the angle, then use compass to construct the angle. 📐",
        wrongAnswerExplanations: {
            "Draw an arc from the vertex": "This is the second step, not the first one.",
            "Place the protractor on the paper": "This is not needed as we're using compass and ruler construction.",
            "Measure 60° with the protractor": "We're constructing using compass and ruler, not measuring with a protractor."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch10_t3_qe6',
        type: "mcq",
        question: "Which geometric tool would you use to check if a line is straight?",
        options: ["Compass", "Protractor", "Ruler", "Set square"],
        correctAnswer: "Ruler",
        explanation: "A ruler has a straight edge that can be used to check if a line is straight by aligning it with the line. 📏",
        wrongAnswerExplanations: {
            "Compass": "A compass is for drawing circles and arcs, not checking straight lines.",
            "Protractor": "A protractor is for measuring angles, not checking straight lines.",
            "Set square": "While a set square has straight edges, a ruler is the primary tool for this purpose."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch10_t3_qe7',
        type: "mcq",
        question: "What is the standard full angle measurement on most protractors?",
        options: ["90°", "180°", "270°", "360°"],
        correctAnswer: "180°",
        explanation: "Standard protractors measure up to 180°, covering a semicircle, though some circular protractors measure up to 360°. 🔄",
        wrongAnswerExplanations: {
            "90°": "This is a right angle, but standard protractors measure up to 180°.",
            "270°": "Standard protractors only measure up to 180°, not 270°.",
            "360°": "This is a full circle, but standard semicircular protractors measure up to 180°."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch10_t3_qe8',
        type: "mcq",
        question: "When using a ruler, which unit is typically used for measurement in the metric system?",
        options: ["Inch", "Foot", "Centimeter", "Mile"],
        correctAnswer: "Centimeter",
        explanation: "In the metric system, rulers typically use centimeters (cm) and millimeters (mm) as the units of measurement. 📏",
        wrongAnswerExplanations: {
            "Inch": "Inch is a unit in the imperial system, not the metric system.",
            "Foot": "Foot is a unit in the imperial system, not the metric system.",
            "Mile": "Mile is a unit of longer distance in the imperial system, not used on rulers."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch10_t3_qe9',
        type: "mcq",
        question: "Which construction tool helps maintain a consistent distance when drawing?",
        options: ["Protractor", "Divider", "Ruler", "Set square"],
        correctAnswer: "Divider",
        explanation: "A divider has two pointed legs and can be set to a specific width to maintain consistent distances while drawing. 📏",
        wrongAnswerExplanations: {
            "Protractor": "A protractor measures angles, not distances.",
            "Ruler": "A ruler measures length but doesn't automatically maintain consistent distance while drawing.",
            "Set square": "A set square is used for drawing right angles and parallel lines, not for maintaining distance."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch10_t3_qe10',
        type: "mcq",
        question: "What is the purpose of the small hole at one end of many rulers?",
        options: [
            "To hang the ruler",
            "To reduce weight",
            "To attach to a compass",
            "To mark a point accurately"
        ],
        correctAnswer: "To hang the ruler",
        explanation: "The small hole at one end of many rulers is designed to allow the ruler to be hung for storage. 🔄",
        wrongAnswerExplanations: {
            "To reduce weight": "The hole is too small to significantly reduce weight.",
            "To attach to a compass": "Rulers are not typically attached to compasses.",
            "To mark a point accurately": "While it could be used for this, it's not the primary purpose."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch10_t3_qe11',
        type: "mcq",
        question: "When using a compass to draw a circle, where is the fixed point of the compass placed?",
        options: [
            "On the circumference",
            "At the center",
            "Outside the circle",
            "At any point on the paper"
        ],
        correctAnswer: "At the center",
        explanation: "The pointed leg of the compass is fixed at the center point, while the leg with pencil traces the circumference. ⭕",
        wrongAnswerExplanations: {
            "On the circumference": "Placing the fixed point on the circumference wouldn't create a circle.",
            "Outside the circle": "Placing the fixed point outside would not create a circle.",
            "At any point on the paper": "The fixed point must be at the center to create a perfect circle."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch10_t3_qe12',
        type: "mcq",
        question: "Which of the following is NOT a common use of a ruler in geometry?",
        options: [
            "Drawing straight lines",
            "Measuring lengths",
            "Drawing angles",
            "Serving as a straight edge"
        ],
        correctAnswer: "Drawing angles",
        explanation: "Rulers are not designed for drawing angles; that's the function of a protractor or compass construction. 📏",
        wrongAnswerExplanations: {
            "Drawing straight lines": "This is a primary function of a ruler.",
            "Measuring lengths": "This is a primary function of a ruler.",
            "Serving as a straight edge": "Rulers provide a straight edge for various geometric constructions."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch10_t3_qe13',
        type: "mcq",
        question: "What shape is a standard protractor typically?",
        options: ["Circular", "Rectangular", "Triangular", "Semicircular"],
        correctAnswer: "Semicircular",
        explanation: "Standard protractors are semicircular in shape, allowing measurement up to 180°. Some special protractors are circular. 📐",
        wrongAnswerExplanations: {
            "Circular": "While circular protractors exist, the standard school protractor is semicircular.",
            "Rectangular": "Protractors are not typically rectangular.",
            "Triangular": "Protractors are not triangular; set squares are."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch10_t3_qe14',
        type: "mcq",
        question: "Which geometric tool would be most suitable for dividing a line segment into equal parts?",
        options: ["Ruler alone", "Protractor", "Compass", "Divider"],
        correctAnswer: "Compass",
        explanation: "A compass can be used to step off equal distances, making it ideal for dividing a line into equal parts. 📏",
        wrongAnswerExplanations: {
            "Ruler alone": "A ruler can measure but not easily divide a line into equal parts without additional steps.",
            "Protractor": "A protractor measures angles, not divisions on a line.",
            "Divider": "While useful, a compass is more versatile for this construction."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch10_t3_qe15',
        type: "mcq",
        question: "What is one advantage of using a compass over a template for drawing circles?",
        options: [
            "It is always faster",
            "It can draw circles of any size",
            "It requires no skill",
            "It never makes mistakes"
        ],
        correctAnswer: "It can draw circles of any size",
        explanation: "A compass allows drawing circles of any radius within its range, while templates are limited to specific sizes. ⭕",
        wrongAnswerExplanations: {
            "It is always faster": "Templates can sometimes be faster for specific sizes.",
            "It requires no skill": "Using a compass properly requires some skill and practice.",
            "It never makes mistakes": "Errors can still occur when using a compass."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch10_t3_qe16',
        type: "mcq",
        question: "Which of these instruments would you use to bisect an angle?",
        options: ["Ruler only", "Protractor only", "Compass and ruler", "Divider only"],
        correctAnswer: "Compass and ruler",
        explanation: "The compass and ruler together can precisely bisect an angle using geometric constructions. 📐",
        wrongAnswerExplanations: {
            "Ruler only": "A ruler alone cannot bisect an angle with precision.",
            "Protractor only": "While a protractor can measure, precise bisection is better with compass and ruler.",
            "Divider only": "A divider without a ruler cannot complete the bisection construction."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch10_t3_qe17',
        type: "mcq",
        question: "What does the zero mark on a ruler represent?",
        options: [
            "The midpoint",
            "The starting point of measurement",
            "The end of the ruler",
            "A reference for negative measurements"
        ],
        correctAnswer: "The starting point of measurement",
        explanation: "The zero mark indicates where measurements begin on a ruler, typically at one edge of the ruler. 📏",
        wrongAnswerExplanations: {
            "The midpoint": "The zero is typically at the edge, not the middle of a ruler.",
            "The end of the ruler": "The zero is at one end, but specifically represents the starting point for measurement.",
            "A reference for negative measurements": "Standard rulers don't typically show negative measurements."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch10_t3_qe18',
        type: "mcq",
        question: "What is the smallest division typically marked on a standard school ruler?",
        options: ["0.1 cm", "1 mm", "0.5 cm", "1 cm"],
        correctAnswer: "1 mm",
        explanation: "Standard school rulers typically have millimeter (mm) markings as their smallest division (1 mm = 0.1 cm). 📏",
        wrongAnswerExplanations: {
            "0.1 cm": "This is equal to 1 mm, but typically labeled as mm on rulers.",
            "0.5 cm": "This is too large to be the smallest division.",
            "1 cm": "This is too large to be the smallest division on standard rulers."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch10_t3_qe19',
        type: "mcq",
        question: "Which tool would you use to construct a perpendicular bisector of a line segment?",
        options: ["Protractor only", "Ruler only", "Compass and ruler", "Set square only"],
        correctAnswer: "Compass and ruler",
        explanation: "Using a compass and ruler allows precise construction of a perpendicular bisector through geometric methods. 📐",
        wrongAnswerExplanations: {
            "Protractor only": "A protractor alone cannot construct an accurate perpendicular bisector.",
            "Ruler only": "A ruler alone cannot determine the exact midpoint and perpendicular.",
            "Set square only": "A set square can make perpendicular lines but not precisely locate the midpoint."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl7_ch10_t3_qe20',
        type: "mcq",
        question: "What happens if you press too hard when using a compass?",
        options: [
            "The compass works better",
            "The paper may tear",
            "The circle becomes more accurate",
            "The compass draws thicker lines"
        ],
        correctAnswer: "The paper may tear",
        explanation: "Pressing too hard with the pointed leg of a compass can tear the paper and damage the surface underneath. 📝",
        wrongAnswerExplanations: {
            "The compass works better": "Excessive pressure actually makes the compass harder to control.",
            "The circle becomes more accurate": "Pressing too hard doesn't improve accuracy and may reduce it.",
            "The compass draws thicker lines": "The pressure affects the pointed leg, not the pencil thickness."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    }
];
