import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl5_ch9_t2_qe1',
        type: "mcq",
        question: "What is a net of a 3D shape?",
        options: [
            "A 2D pattern that can be folded into a 3D shape",
            "A type of fishing net",
            "A computer network",
            "A sports net"
        ],
        correctAnswer: "A 2D pattern that can be folded into a 3D shape",
        explanation: "A net is a 2D pattern that shows all the faces of a 3D shape and how they connect. When folded, it forms the 3D shape. 📐",
        wrongAnswerExplanations: {
            "A type of fishing net": "This is not related to 3D shapes.",
            "A computer network": "This is about computers, not shapes.",
            "A sports net": "This is about sports equipment, not shapes."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch9_t2_qe2',
        type: "mcq",
        question: "How many squares are in a cube net?",
        options: ["6", "4", "8", "12"],
        correctAnswer: "6",
        explanation: "A cube has 6 square faces, so its net must have 6 squares. 🎲",
        wrongAnswerExplanations: {
            "4": "A cube has more than 4 faces.",
            "8": "8 is the number of vertices in a cube.",
            "12": "12 is the number of edges in a cube."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch9_t2_qe3',
        type: "mcq",
        question: "Which shapes make up a cylinder net?",
        options: [
            "Two circles and one rectangle",
            "One circle and one rectangle",
            "Two circles and two rectangles",
            "One circle and two rectangles"
        ],
        correctAnswer: "Two circles and one rectangle",
        explanation: "A cylinder net has two circular faces and one rectangular face that wraps around to form the curved surface. 🥫",
        wrongAnswerExplanations: {
            "One circle and one rectangle": "A cylinder has two circular faces.",
            "Two circles and two rectangles": "A cylinder has only one rectangular face.",
            "One circle and two rectangles": "A cylinder has two circular faces."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch9_t2_qe4',
        type: "mcq",
        question: "What shapes make up a cone net?",
        options: [
            "One circle and one sector of a circle",
            "Two circles and one triangle",
            "One circle and one triangle",
            "Two circles and one rectangle"
        ],
        correctAnswer: "One circle and one sector of a circle",
        explanation: "A cone net has one circular face and one sector of a circle that forms the curved surface. 🍦",
        wrongAnswerExplanations: {
            "Two circles and one triangle": "A cone has only one circular face.",
            "One circle and one triangle": "The curved part is a sector, not a triangle.",
            "Two circles and one rectangle": "A cone has only one circular face."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch9_t2_qe5',
        type: "mcq",
        question: "How many rectangles are in a cuboid net?",
        options: ["6", "4", "8", "12"],
        correctAnswer: "6",
        explanation: "A cuboid has 6 rectangular faces, so its net must have 6 rectangles. 📦",
        wrongAnswerExplanations: {
            "4": "A cuboid has more than 4 faces.",
            "8": "8 is the number of vertices in a cuboid.",
            "12": "12 is the number of edges in a cuboid."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch9_t2_qe6',
        type: "mcq",
        question: "Which of these is NOT a valid cube net?",
        options: [
            "A net with 5 squares",
            "A net with 6 squares",
            "A net with 6 squares in a cross shape",
            "A net with 6 squares in a T shape"
        ],
        correctAnswer: "A net with 5 squares",
        explanation: "A cube has 6 faces, so its net must have 6 squares. A net with 5 squares cannot form a cube. 🎲",
        wrongAnswerExplanations: {
            "A net with 6 squares": "This is a valid cube net.",
            "A net with 6 squares in a cross shape": "This is a valid cube net arrangement.",
            "A net with 6 squares in a T shape": "This is a valid cube net arrangement."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch9_t2_qe7',
        type: "mcq",
        question: "What is the shape of the curved part in a cylinder net?",
        options: ["Rectangle", "Circle", "Square", "Triangle"],
        correctAnswer: "Rectangle",
        explanation: "The curved surface of a cylinder unfolds into a rectangle. The length of the rectangle equals the circumference of the circular faces. 🥫",
        wrongAnswerExplanations: {
            "Circle": "The circles are the top and bottom faces.",
            "Square": "A cylinder has no square faces.",
            "Triangle": "A cylinder has no triangular faces."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch9_t2_qe8',
        type: "mcq",
        question: "How many different net arrangements are possible for a cube?",
        options: ["11", "6", "8", "12"],
        correctAnswer: "11",
        explanation: "There are 11 different ways to arrange 6 squares to form a cube net. 🎲",
        wrongAnswerExplanations: {
            "6": "This is the number of faces, not net arrangements.",
            "8": "This is the number of vertices.",
            "12": "This is the number of edges."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch9_t2_qe9',
        type: "mcq",
        question: "What is the shape of the curved part in a cone net?",
        options: ["Sector of a circle", "Rectangle", "Triangle", "Circle"],
        correctAnswer: "Sector of a circle",
        explanation: "The curved surface of a cone unfolds into a sector of a circle. 🍦",
        wrongAnswerExplanations: {
            "Rectangle": "A cone has no rectangular faces.",
            "Triangle": "The curved part is a sector, not a triangle.",
            "Circle": "The circle is the base face."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch9_t2_qe10',
        type: "mcq",
        question: "Which shape's net has the fewest parts?",
        options: ["Sphere", "Cube", "Cylinder", "Cone"],
        correctAnswer: "Sphere",
        explanation: "A sphere's net is just one piece - a flat pattern that can be formed into a sphere. ⚽",
        wrongAnswerExplanations: {
            "Cube": "A cube net has 6 squares.",
            "Cylinder": "A cylinder net has 3 parts (2 circles and 1 rectangle).",
            "Cone": "A cone net has 2 parts (1 circle and 1 sector)."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch9_t2_qe11',
        type: "mcq",
        question: "What tool is most helpful for drawing nets?",
        options: ["Ruler", "Compass", "Protractor", "Calculator"],
        correctAnswer: "Ruler",
        explanation: "A ruler helps draw straight lines and measure lengths accurately when drawing nets. 📏",
        wrongAnswerExplanations: {
            "Compass": "A compass is used for drawing circles, not straight lines.",
            "Protractor": "A protractor measures angles, not lengths.",
            "Calculator": "A calculator helps with numbers, not drawing."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch9_t2_qe12',
        type: "mcq",
        question: "Which shape's net has the most parts?",
        options: ["Cube and Cuboid", "Cylinder", "Cone", "Sphere"],
        correctAnswer: "Cube and Cuboid",
        explanation: "Both cube and cuboid nets have 6 parts (faces). Other shapes have fewer parts. 🎲📦",
        wrongAnswerExplanations: {
            "Cylinder": "A cylinder net has 3 parts.",
            "Cone": "A cone net has 2 parts.",
            "Sphere": "A sphere net has 1 part."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch9_t2_qe13',
        type: "mcq",
        question: "What is the purpose of tabs in a net?",
        options: [
            "To help glue the shape together",
            "To make the shape stronger",
            "To decorate the shape",
            "To measure the shape"
        ],
        correctAnswer: "To help glue the shape together",
        explanation: "Tabs are extra flaps added to nets to help glue the faces together when making the 3D shape. 🧩",
        wrongAnswerExplanations: {
            "To make the shape stronger": "Tabs are for joining, not strengthening.",
            "To decorate the shape": "Tabs are functional, not decorative.",
            "To measure the shape": "Tabs are for assembly, not measurement."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch9_t2_qe14',
        type: "mcq",
        question: "Which shape's net has circular parts?",
        options: ["Cylinder and Cone", "Cube", "Cuboid", "Sphere"],
        correctAnswer: "Cylinder and Cone",
        explanation: "Both cylinder and cone nets have circular parts. Cylinder has two circles, cone has one circle. 🥫🍦",
        wrongAnswerExplanations: {
            "Cube": "A cube net has only squares.",
            "Cuboid": "A cuboid net has only rectangles.",
            "Sphere": "A sphere net is a single piece."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch9_t2_qe15',
        type: "mcq",
        question: "What is the first step in drawing a net?",
        options: [
            "Understand the shape and count its faces",
            "Start drawing immediately",
            "Measure the paper",
            "Choose colors"
        ],
        correctAnswer: "Understand the shape and count its faces",
        explanation: "First, you need to understand the shape, count its faces, and know how they connect before drawing the net. 📐",
        wrongAnswerExplanations: {
            "Start drawing immediately": "Planning is important before drawing.",
            "Measure the paper": "Understanding the shape comes first.",
            "Choose colors": "Colors are not essential for drawing nets."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch9_t2_qe16',
        type: "mcq",
        question: "Which shape's net has only one type of face?",
        options: ["Cube", "Cuboid", "Cylinder", "Cone"],
        correctAnswer: "Cube",
        explanation: "A cube net has only squares, while other shapes have different types of faces. 🎲",
        wrongAnswerExplanations: {
            "Cuboid": "A cuboid has rectangles of different sizes.",
            "Cylinder": "A cylinder has circles and a rectangle.",
            "Cone": "A cone has a circle and a sector."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch9_t2_qe17',
        type: "mcq",
        question: "What is the shape of all faces in a cube net?",
        options: ["Square", "Rectangle", "Circle", "Triangle"],
        correctAnswer: "Square",
        explanation: "All faces in a cube net are squares of equal size. 🎲",
        wrongAnswerExplanations: {
            "Rectangle": "A cube has square faces, not rectangles.",
            "Circle": "A cube has no circular faces.",
            "Triangle": "A cube has no triangular faces."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch9_t2_qe18',
        type: "mcq",
        question: "Which shape's net has the simplest pattern?",
        options: ["Sphere", "Cube", "Cylinder", "Cone"],
        correctAnswer: "Sphere",
        explanation: "A sphere's net is the simplest as it's just one piece that can be formed into a sphere. ⚽",
        wrongAnswerExplanations: {
            "Cube": "A cube net has 6 squares in a pattern.",
            "Cylinder": "A cylinder net has 3 parts in a pattern.",
            "Cone": "A cone net has 2 parts in a pattern."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch9_t2_qe19',
        type: "mcq",
        question: "What is the last step in making a 3D shape from a net?",
        options: [
            "Fold and glue the faces together",
            "Draw the net",
            "Plan the layout",
            "Count the faces"
        ],
        correctAnswer: "Fold and glue the faces together",
        explanation: "After drawing and cutting the net, the final step is to fold and glue the faces together to make the 3D shape. 🧩",
        wrongAnswerExplanations: {
            "Draw the net": "This is the first step.",
            "Plan the layout": "This is done before drawing.",
            "Count the faces": "This is done at the beginning."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch9_t2_qe20',
        type: "mcq",
        question: "Which shape's net has the most complex pattern?",
        options: ["Cube and Cuboid", "Cylinder", "Cone", "Sphere"],
        correctAnswer: "Cube and Cuboid",
        explanation: "Cube and cuboid nets have the most complex patterns with 6 faces that need to be arranged correctly. 🎲📦",
        wrongAnswerExplanations: {
            "Cylinder": "A cylinder net has a simpler pattern with 3 parts.",
            "Cone": "A cone net has a simpler pattern with 2 parts.",
            "Sphere": "A sphere net has the simplest pattern."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    }
]; 