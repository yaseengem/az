import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl4_ch5_t1_qe1',
        type: "mcq",
        question: "Which of these is a 2D shape?",
        options: ["Cube", "Square", "Sphere", "Cylinder"],
        correctAnswer: "Square",
        explanation: "A square is a 2D shape because it has only length and width, no height.",
        wrongAnswerExplanations: {
            "Cube": "A cube is a 3D shape with length, width, and height.",
            "Sphere": "A sphere is a 3D shape like a ball.",
            "Cylinder": "A cylinder is a 3D shape like a can."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch5_t1_qe2',
        type: "mcq",
        question: "How many sides does a triangle have?",
        options: ["2", "3", "4", "5"],
        correctAnswer: "3",
        explanation: "A triangle has exactly 3 sides, which is why it's called a 'tri-angle'.",
        wrongAnswerExplanations: {
            "2": "A shape with 2 sides is not a closed shape.",
            "4": "A shape with 4 sides is a quadrilateral, like a square or rectangle.",
            "5": "A shape with 5 sides is a pentagon."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch5_t1_qe3',
        type: "mcq",
        question: "Which shape has 4 equal sides and 4 equal angles?",
        options: ["Rectangle", "Triangle", "Circle", "Square"],
        correctAnswer: "Square",
        explanation: "A square has 4 equal sides and 4 right angles (90°).",
        wrongAnswerExplanations: {
            "Rectangle": "A rectangle has 4 right angles but not all sides are equal.",
            "Triangle": "A triangle has 3 sides, not 4.",
            "Circle": "A circle has no straight sides or angles."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch5_t1_qe4',
        type: "mcq",
        question: "What is the name of a 3D shape that looks like a ball?",
        options: ["Cube", "Cylinder", "Sphere", "Circle"],
        correctAnswer: "Sphere",
        explanation: "A sphere is a 3D shape that looks like a ball, round in all directions.",
        wrongAnswerExplanations: {
            "Cube": "A cube has flat faces and straight edges, like a box.",
            "Cylinder": "A cylinder has two circular faces connected by a curved surface.",
            "Circle": "A circle is a 2D shape, not a 3D shape."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch5_t1_qe5',
        type: "mcq",
        question: "Which of these shapes is a 3D object?",
        options: ["Rectangle", "Triangle", "Circle", "Cube"],
        correctAnswer: "Cube",
        explanation: "A cube is a 3D object with height, width, and depth.",
        wrongAnswerExplanations: {
            "Rectangle": "A rectangle is a 2D shape with only length and width.",
            "Triangle": "A triangle is a 2D shape with three sides.",
            "Circle": "A circle is a 2D shape that is perfectly round."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch5_t1_qe6',
        type: "mcq",
        question: "How many faces does a cube have?",
        options: ["4", "6", "8", "12"],
        correctAnswer: "6",
        explanation: "A cube has 6 square faces - top, bottom, front, back, left, and right.",
        wrongAnswerExplanations: {
            "4": "A cube has 6 faces, not 4. A tetrahedron has 4 faces.",
            "8": "A cube has 8 vertices (corners), but 6 faces.",
            "12": "A cube has 12 edges, but 6 faces."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch5_t1_qe7',
        type: "mcq",
        question: "Which of these everyday objects is shaped most like a cylinder?",
        options: ["A ball", "A book", "A can of juice", "A die"],
        correctAnswer: "A can of juice",
        explanation: "A can of juice is cylindrical in shape with circular top and bottom faces.",
        wrongAnswerExplanations: {
            "A ball": "A ball is shaped like a sphere, not a cylinder.",
            "A book": "A book is shaped more like a rectangular prism.",
            "A die": "A die (dice) is typically shaped like a cube."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch5_t1_qe8',
        type: "mcq",
        question: "What is the main difference between 2D and 3D shapes?",
        options: ["Color", "Size", "Thickness", "Material"],
        correctAnswer: "Thickness",
        explanation: "3D shapes have thickness (height/depth) while 2D shapes are flat with only length and width.",
        wrongAnswerExplanations: {
            "Color": "Both 2D and 3D shapes can be any color.",
            "Size": "Both 2D and 3D shapes can be of any size.",
            "Material": "Both 2D and 3D shapes can be made of various materials."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch5_t1_qe9',
        type: "mcq",
        question: "Which of these is NOT a 2D shape?",
        options: ["Square", "Circle", "Triangle", "Cone"],
        correctAnswer: "Cone",
        explanation: "A cone is a 3D shape with height and a circular base.",
        wrongAnswerExplanations: {
            "Square": "A square is a 2D shape with 4 equal sides.",
            "Circle": "A circle is a 2D shape that is perfectly round.",
            "Triangle": "A triangle is a 2D shape with 3 sides."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch5_t1_qe10',
        type: "mcq",
        question: "What shape is the face of a clock?",
        options: ["Square", "Rectangle", "Triangle", "Circle"],
        correctAnswer: "Circle",
        explanation: "Most clock faces are circular in shape.",
        wrongAnswerExplanations: {
            "Square": "Clock faces are typically circular, not square.",
            "Rectangle": "Clock faces are typically circular, not rectangular.",
            "Triangle": "Clock faces are typically circular, not triangular."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch5_t1_qe11',
        type: "mcq",
        question: "Which shape is used for most traffic 'STOP' signs?",
        options: ["Circle", "Triangle", "Octagon", "Rectangle"],
        correctAnswer: "Octagon",
        explanation: "Stop signs are typically octagonal (8-sided) in shape.",
        wrongAnswerExplanations: {
            "Circle": "Circular signs often indicate information or prohibitions, not stop.",
            "Triangle": "Triangular signs typically indicate warnings or yield signs.",
            "Rectangle": "Rectangular signs usually provide information or directions."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch5_t1_qe12',
        type: "mcq",
        question: "Which of these 3D shapes rolls in a straight line?",
        options: ["Cube", "Sphere", "Cylinder", "Pyramid"],
        correctAnswer: "Cylinder",
        explanation: "A cylinder can roll in a straight line along its curved surface.",
        wrongAnswerExplanations: {
            "Cube": "A cube slides or tumbles, it doesn't roll smoothly in a straight line.",
            "Sphere": "A sphere rolls in any direction, not necessarily in a straight line.",
            "Pyramid": "A pyramid cannot roll smoothly due to its pointed top."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch5_t1_qe13',
        type: "mcq",
        question: "How many vertices (corners) does a square have?",
        options: ["2", "3", "4", "6"],
        correctAnswer: "4",
        explanation: "A square has 4 vertices where its 4 sides meet.",
        wrongAnswerExplanations: {
            "2": "A line segment has 2 endpoints, not a square.",
            "3": "A triangle has 3 vertices, not a square.",
            "6": "A square has 4 vertices, not 6."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch5_t1_qe14',
        type: "mcq",
        question: "Which shape has the same distance from its center to any point on its edge?",
        options: ["Square", "Rectangle", "Circle", "Triangle"],
        correctAnswer: "Circle",
        explanation: "A circle has all points at the same distance (radius) from its center.",
        wrongAnswerExplanations: {
            "Square": "In a square, corners are farther from center than midpoints of sides.",
            "Rectangle": "In a rectangle, distance from center to edges varies.",
            "Triangle": "In a triangle, distance from center to edges varies."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch5_t1_qe15',
        type: "mcq",
        question: "What shape is a rectangular sheet of paper when rolled into a tube?",
        options: ["Sphere", "Cone", "Cylinder", "Cube"],
        correctAnswer: "Cylinder",
        explanation: "A rectangular sheet rolled into a tube forms a cylinder.",
        wrongAnswerExplanations: {
            "Sphere": "Rolling paper doesn't form a sphere, which is round in all directions.",
            "Cone": "A cone has a pointed top, unlike a paper tube.",
            "Cube": "Rolling paper doesn't form a cube, which has flat faces."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch5_t1_qe16',
        type: "mcq",
        question: "Which of these objects is shaped most like a sphere?",
        options: ["A box", "A book", "A football", "A pencil"],
        correctAnswer: "A football",
        explanation: "A football (soccer ball) is spherical in shape.",
        wrongAnswerExplanations: {
            "A box": "A box is shaped like a rectangular prism, not a sphere.",
            "A book": "A book is shaped like a rectangular prism, not a sphere.",
            "A pencil": "A pencil is shaped more like a cylinder, not a sphere."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch5_t1_qe17',
        type: "mcq",
        question: "What is the shape of most picture frames?",
        options: ["Circle", "Triangle", "Rectangle", "Pentagon"],
        correctAnswer: "Rectangle",
        explanation: "Most picture frames are rectangular in shape.",
        wrongAnswerExplanations: {
            "Circle": "While some frames are circular, most are rectangular.",
            "Triangle": "Triangular picture frames are uncommon.",
            "Pentagon": "Pentagon-shaped picture frames are very rare."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch5_t1_qe18',
        type: "mcq",
        question: "What is a cube with its corners cut off called?",
        options: ["Sphere", "Cylinder", "Pyramid", "Octahedron"],
        correctAnswer: "Octahedron",
        explanation: "When all 8 corners of a cube are cut off, it creates an octahedron.",
        wrongAnswerExplanations: {
            "Sphere": "Cutting corners of a cube doesn't make it a sphere.",
            "Cylinder": "Cutting corners of a cube doesn't make it a cylinder.",
            "Pyramid": "Cutting corners of a cube doesn't make it a pyramid."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch5_t1_qe19',
        type: "mcq",
        question: "Which of these is a real-life example of a cone shape?",
        options: ["A ball", "An ice cream cone", "A can", "A dice"],
        correctAnswer: "An ice cream cone",
        explanation: "An ice cream cone has a circular base and tapers to a point, like a cone.",
        wrongAnswerExplanations: {
            "A ball": "A ball is sphere-shaped, not cone-shaped.",
            "A can": "A can is cylinder-shaped, not cone-shaped.",
            "A dice": "A dice is cube-shaped, not cone-shaped."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl4_ch5_t1_qe20',
        type: "mcq",
        question: "What 3D shape is formed when a rectangle is folded to make a box?",
        options: ["Cylinder", "Sphere", "Rectangular prism", "Cone"],
        correctAnswer: "Rectangular prism",
        explanation: "A folded rectangle that forms a box creates a rectangular prism.",
        wrongAnswerExplanations: {
            "Cylinder": "A cylinder has circular faces, unlike a box.",
            "Sphere": "A sphere is round, unlike the flat-faced box.",
            "Cone": "A cone has a circular base and a point, unlike a box."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    }
];