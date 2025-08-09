// filepath: c:\pro\tj\frontend\v5\content\CBSE\Mathematics\Class 6\Chapter4\Topic3\quiz_easy.ts
import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl6_ch4_t3_qe1',
        type: "mcq",
        question: "What is the center of a circle?",
        options: ["The middle line", "A fixed point from which all points on the circle are equidistant", "The longest line in the circle", "Half of the diameter"],
        correctAnswer: "A fixed point from which all points on the circle are equidistant",
        explanation: "The center is a fixed point from which all points on the circle are at the same distance. ⭕",
        wrongAnswerExplanations: {
            "The middle line": "The center is a point, not a line.",
            "The longest line in the circle": "The diameter is the longest line in a circle, not the center.",
            "Half of the diameter": "Half of the diameter is the radius, not the center."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch4_t3_qe2',
        type: "mcq",
        question: "What is the relationship between the diameter and radius of a circle?",
        options: ["Diameter = Radius × 2", "Diameter = Radius ÷ 2", "Diameter = Radius × π", "Diameter = Radius + π"],
        correctAnswer: "Diameter = Radius × 2",
        explanation: "The diameter of a circle is twice the length of its radius. If r is the radius, then d = 2r. 📏",
        wrongAnswerExplanations: {
            "Diameter = Radius ÷ 2": "This is incorrect. Radius = Diameter ÷ 2, not the other way around.",
            "Diameter = Radius × π": "This formula does not represent the relationship between diameter and radius.",
            "Diameter = Radius + π": "This is not a valid relationship between diameter and radius."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch4_t3_qe3',
        type: "mcq",
        question: "What is a chord in a circle?",
        options: ["A line passing through the center", "A line segment whose endpoints lie on the circle", "The distance around the circle", "Half of the circle"],
        correctAnswer: "A line segment whose endpoints lie on the circle",
        explanation: "A chord is a straight line segment connecting two points on the circumference of a circle. 📈",
        wrongAnswerExplanations: {
            "A line passing through the center": "This describes a diameter, not necessarily a chord.",
            "The distance around the circle": "This describes the circumference of the circle.",
            "Half of the circle": "This describes a semicircle, not a chord."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch4_t3_qe4',
        type: "mcq",
        question: "Which of these is NOT a polygon?",
        options: ["Triangle", "Square", "Circle", "Hexagon"],
        correctAnswer: "Circle",
        explanation: "A circle is a curved shape with no straight sides or vertices, while polygons have straight sides. ⭕",
        wrongAnswerExplanations: {
            "Triangle": "A triangle is a polygon with 3 sides.",
            "Square": "A square is a polygon with 4 equal sides.",
            "Hexagon": "A hexagon is a polygon with 6 sides."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch4_t3_qe5',
        type: "mcq",
        question: "How many sides does a pentagon have?",
        options: ["3", "4", "5", "6"],
        correctAnswer: "5",
        explanation: "The prefix 'penta-' means five, so a pentagon has 5 sides. 🔷",
        wrongAnswerExplanations: {
            "3": "A polygon with 3 sides is called a triangle.",
            "4": "A polygon with 4 sides is called a quadrilateral.",
            "6": "A polygon with 6 sides is called a hexagon."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch4_t3_qe6',
        type: "mcq",
        question: "What is the longest chord of a circle?",
        options: ["Radius", "Diameter", "Circumference", "Arc"],
        correctAnswer: "Diameter",
        explanation: "The diameter is the longest chord as it passes through the center of the circle. 📏",
        wrongAnswerExplanations: {
            "Radius": "The radius connects the center to a point on the circle, not two points on the circle.",
            "Circumference": "The circumference is the distance around the circle, not a chord.",
            "Arc": "An arc is a portion of the circumference, not a chord."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch4_t3_qe7',
        type: "mcq",
        question: "Which polygon has the smallest number of sides?",
        options: ["Triangle", "Line", "Square", "Point"],
        correctAnswer: "Triangle",
        explanation: "A triangle has 3 sides, which is the minimum needed to form a polygon. 🔺",
        wrongAnswerExplanations: {
            "Line": "A line is not a polygon as it doesn't enclose a space.",
            "Square": "A square has 4 sides, which is more than a triangle.",
            "Point": "A point has no sides, so it's not a polygon."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch4_t3_qe8',
        type: "mcq",
        question: "What is the difference between a regular and an irregular polygon?",
        options: [
            "Regular polygons have more sides than irregular ones",
            "Regular polygons have all sides and angles equal",
            "Regular polygons are always smaller than irregular ones",
            "Regular polygons always have an odd number of sides"
        ],
        correctAnswer: "Regular polygons have all sides and angles equal",
        explanation: "In a regular polygon, all sides have the same length and all interior angles are equal. 📐",
        wrongAnswerExplanations: {
            "Regular polygons have more sides than irregular ones": "The regularity of a polygon is not determined by the number of sides.",
            "Regular polygons are always smaller than irregular ones": "The size doesn't determine whether a polygon is regular or irregular.",
            "Regular polygons always have an odd number of sides": "Regular polygons can have either an even or odd number of sides."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch4_t3_qe9',
        type: "mcq",
        question: "What is a quadrilateral?",
        options: ["A 3-sided polygon", "A 4-sided polygon", "A 5-sided polygon", "A 6-sided polygon"],
        correctAnswer: "A 4-sided polygon",
        explanation: "A quadrilateral is a 4-sided polygon. Common examples include squares, rectangles, and rhombuses. 🔲",
        wrongAnswerExplanations: {
            "A 3-sided polygon": "A 3-sided polygon is called a triangle.",
            "A 5-sided polygon": "A 5-sided polygon is called a pentagon.",
            "A 6-sided polygon": "A 6-sided polygon is called a hexagon."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch4_t3_qe10',
        type: "mcq",
        question: "What is the formula for the circumference of a circle?",
        options: ["C = πr", "C = 2πr", "C = πr²", "C = 2πr²"],
        correctAnswer: "C = 2πr",
        explanation: "The circumference of a circle equals 2πr, where r is the radius and π is approximately 3.14. 🔄",
        wrongAnswerExplanations: {
            "C = πr": "This is not the correct formula for circumference.",
            "C = πr²": "This is the formula for the area of a circle, not its circumference.",
            "C = 2πr²": "This is not a valid formula in circle geometry."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch4_t3_qe11',
        type: "mcq",
        question: "What shape is a stop sign?",
        options: ["Hexagon", "Heptagon", "Octagon", "Nonagon"],
        correctAnswer: "Octagon",
        explanation: "A stop sign is an octagon, which is an 8-sided polygon. 🛑",
        wrongAnswerExplanations: {
            "Hexagon": "A hexagon has 6 sides, not 8.",
            "Heptagon": "A heptagon has 7 sides, not 8.",
            "Nonagon": "A nonagon has 9 sides, not 8."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch4_t3_qe12',
        type: "mcq",
        question: "Which polygon has 7 sides?",
        options: ["Pentagon", "Hexagon", "Heptagon", "Octagon"],
        correctAnswer: "Heptagon",
        explanation: "A heptagon is a 7-sided polygon. The prefix 'hepta-' means seven. 7️⃣",
        wrongAnswerExplanations: {
            "Pentagon": "A pentagon has 5 sides, not 7.",
            "Hexagon": "A hexagon has 6 sides, not 7.",
            "Octagon": "An octagon has 8 sides, not 7."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch4_t3_qe13',
        type: "mcq",
        question: "What do you call the point where two sides of a polygon meet?",
        options: ["Edge", "Vertex", "Angle", "Corner"],
        correctAnswer: "Vertex",
        explanation: "A vertex is the point where two sides of a polygon meet, forming an angle. 📍",
        wrongAnswerExplanations: {
            "Edge": "An edge refers to the side of a polygon, not where sides meet.",
            "Angle": "An angle is formed at a vertex, but the point itself is called a vertex.",
            "Corner": "While informally called a corner, the geometric term is vertex."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch4_t3_qe14',
        type: "mcq",
        question: "What is a semicircle?",
        options: ["A quarter of a circle", "Half of a circle", "Two-thirds of a circle", "A circle with a small piece missing"],
        correctAnswer: "Half of a circle",
        explanation: "A semicircle is exactly half of a circle, formed by a diameter and the arc connecting its endpoints. 🌓",
        wrongAnswerExplanations: {
            "A quarter of a circle": "A quarter of a circle is called a quadrant, not a semicircle.",
            "Two-thirds of a circle": "This is a segment of a circle but not a semicircle.",
            "A circle with a small piece missing": "This describes a sector or segment, not specifically a semicircle."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch4_t3_qe15',
        type: "mcq",
        question: "If the radius of a circle is 5 cm, what is its diameter?",
        options: ["5 cm", "10 cm", "15 cm", "25 cm"],
        correctAnswer: "10 cm",
        explanation: "Diameter = 2 × Radius = 2 × 5 cm = 10 cm. The diameter is twice the radius. 📏",
        wrongAnswerExplanations: {
            "5 cm": "This equals the radius, not the diameter.",
            "15 cm": "This is 3 × radius, not the diameter.",
            "25 cm": "This is 5 × radius, not the diameter."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch4_t3_qe16',
        type: "mcq",
        question: "Which of these real-life objects most closely resembles a circle?",
        options: ["A book cover", "A window frame", "A dinner plate", "A picture frame"],
        correctAnswer: "A dinner plate",
        explanation: "A dinner plate has a circular shape with all points on its edge equidistant from the center. 🍽️",
        wrongAnswerExplanations: {
            "A book cover": "A book cover is typically rectangular, not circular.",
            "A window frame": "Window frames are usually rectangular or square.",
            "A picture frame": "Picture frames are commonly rectangular or square."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch4_t3_qe17',
        type: "mcq",
        question: "How many sides does a decagon have?",
        options: ["5", "7", "8", "10"],
        correctAnswer: "10",
        explanation: "A decagon has 10 sides. The prefix 'deca-' means ten. 🔟",
        wrongAnswerExplanations: {
            "5": "A polygon with 5 sides is called a pentagon.",
            "7": "A polygon with 7 sides is called a heptagon.",
            "8": "A polygon with 8 sides is called an octagon."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch4_t3_qe18',
        type: "mcq",
        question: "What is the name of a polygon with 9 sides?",
        options: ["Septagon", "Octagon", "Nonagon", "Decagon"],
        correctAnswer: "Nonagon",
        explanation: "A nonagon is a 9-sided polygon. The prefix 'nona-' relates to nine. 9️⃣",
        wrongAnswerExplanations: {
            "Septagon": "A septagon (or heptagon) has 7 sides, not 9.",
            "Octagon": "An octagon has 8 sides, not 9.",
            "Decagon": "A decagon has 10 sides, not 9."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch4_t3_qe19',
        type: "mcq",
        question: "What is an arc of a circle?",
        options: ["A straight line through the center", "A portion of the circumference", "The distance around the circle", "The area inside the circle"],
        correctAnswer: "A portion of the circumference",
        explanation: "An arc is a portion of the circumference (the curved boundary) of a circle. 🌈",
        wrongAnswerExplanations: {
            "A straight line through the center": "This describes a diameter, not an arc.",
            "The distance around the circle": "This describes the complete circumference, not just an arc.",
            "The area inside the circle": "This describes the area of the circle, not an arc."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl6_ch4_t3_qe20',
        type: "mcq",
        question: "What is a diagonal in a polygon?",
        options: ["A side of the polygon", "A line connecting any two vertices", "A line connecting two non-adjacent vertices", "The perimeter of the polygon"],
        correctAnswer: "A line connecting two non-adjacent vertices",
        explanation: "A diagonal is a line segment that joins two non-adjacent vertices of a polygon. 📐",
        wrongAnswerExplanations: {
            "A side of the polygon": "A side connects adjacent vertices, not a diagonal.",
            "A line connecting any two vertices": "This is too broad; a diagonal specifically connects non-adjacent vertices.",
            "The perimeter of the polygon": "The perimeter is the sum of all sides, not a diagonal."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    }
];
