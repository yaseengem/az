import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: "cl7_ch15_t1_qe1",
        type: "mcq",
        question: "What is a vertex in a 3D shape?",
        options: [
            "A point where two or more edges meet",
            "A flat surface of the shape",
            "A line segment where two faces meet",
            "The center of the shape"
        ],
        correctAnswer: "A point where two or more edges meet",
        explanation: "A vertex is a point where two or more edges of a 3D shape meet, like the corner of a cube. 📍",
        wrongAnswerExplanations: {
            "A flat surface of the shape": "This describes a face, not a vertex.",
            "A line segment where two faces meet": "This describes an edge, not a vertex.",
            "The center of the shape": "The center is an internal point, not a vertex."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: "cl7_ch15_t1_qe2",
        type: "mcq",
        question: "How many faces does a cube have?",
        options: ["4", "6", "8", "12"],
        correctAnswer: "6",
        explanation: "A cube has 6 identical square faces. Each face is a flat surface of the cube. ⬛",
        wrongAnswerExplanations: {
            "4": "A triangular pyramid (tetrahedron) has 4 faces, not a cube.",
            "8": "A cube has 8 vertices, not 8 faces.",
            "12": "A cube has 12 edges, not 12 faces."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: "cl7_ch15_t1_qe3",
        type: "mcq",
        question: "What is an edge in a 3D shape?",
        options: [
            "A line segment where two faces meet",
            "A point where edges meet",
            "A flat surface",
            "The center line of the shape"
        ],
        correctAnswer: "A line segment where two faces meet",
        explanation: "An edge is a line segment formed where two faces of a 3D shape meet, like the line where two walls meet. 📏",
        wrongAnswerExplanations: {
            "A point where edges meet": "This describes a vertex, not an edge.",
            "A flat surface": "This describes a face, not an edge.",
            "The center line of the shape": "A center line is not an edge."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: "cl7_ch15_t1_qe4",
        type: "mcq",
        question: "How many edges does a triangular pyramid (tetrahedron) have?",
        options: ["4", "6", "8", "12"],
        correctAnswer: "6",
        explanation: "A triangular pyramid has 6 edges: 3 edges at the base and 3 edges connecting the base to the apex. 🔺",
        wrongAnswerExplanations: {
            "4": "A triangular pyramid has 4 faces, not 4 edges.",
            "8": "A cube has 8 vertices, not a triangular pyramid.",
            "12": "A cube has 12 edges, not a triangular pyramid."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: "cl7_ch15_t1_qe5",
        type: "mcq",
        question: "What is a face in a 3D shape?",
        options: [
            "A flat surface that forms part of the shape",
            "A line where two surfaces meet",
            "A point at the corner",
            "The space inside the shape"
        ],
        correctAnswer: "A flat surface that forms part of the shape",
        explanation: "A face is a flat surface that forms part of a 3D shape, like each side of a box. 📦",
        wrongAnswerExplanations: {
            "A line where two surfaces meet": "This describes an edge, not a face.",
            "A point at the corner": "This describes a vertex, not a face.",
            "The space inside the shape": "This is the volume, not a face."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: "cl7_ch15_t1_qe6",
        type: "mcq",
        question: "How many vertices does a rectangular prism have?",
        options: ["4", "6", "8", "12"],
        correctAnswer: "8",
        explanation: "A rectangular prism has 8 vertices, one at each corner where three edges meet. 📦",
        wrongAnswerExplanations: {
            "4": "A triangular pyramid has 4 vertices, not a rectangular prism.",
            "6": "A rectangular prism has 6 faces, not 6 vertices.",
            "12": "A rectangular prism has 12 edges, not 12 vertices."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: "cl7_ch15_t1_qe7",
        type: "mcq",
        question: "Which 3D shape has 5 faces, 8 edges, and 5 vertices?",
        options: [
            "Cube",
            "Square pyramid",
            "Triangular prism",
            "Rectangular prism"
        ],
        correctAnswer: "Square pyramid",
        explanation: "A square pyramid has 5 faces (1 square base + 4 triangular faces), 8 edges, and 5 vertices (4 at base + 1 at apex). 🔺",
        wrongAnswerExplanations: {
            "Cube": "A cube has 6 faces, 12 edges, and 8 vertices.",
            "Triangular prism": "A triangular prism has 5 faces, 9 edges, and 6 vertices.",
            "Rectangular prism": "A rectangular prism has 6 faces, 12 edges, and 8 vertices."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: "cl7_ch15_t1_qe8",
        type: "mcq",
        question: "What shape is formed when two faces meet in a 3D shape?",
        options: [
            "A point",
            "A line",
            "A plane",
            "A circle"
        ],
        correctAnswer: "A line",
        explanation: "When two faces of a 3D shape meet, they form a line called an edge. For example, where two walls meet in a room. 📐",
        wrongAnswerExplanations: {
            "A point": "A point is formed where three or more edges meet (vertex).",
            "A plane": "A plane is a flat surface (face), not where faces meet.",
            "A circle": "Faces meeting form straight lines, not circles."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: "cl7_ch15_t1_qe9",
        type: "mcq",
        question: "How many edges meet at each vertex of a cube?",
        options: ["2", "3", "4", "6"],
        correctAnswer: "3",
        explanation: "At each vertex of a cube, exactly 3 edges meet at right angles to each other. This is true for all 8 vertices. 📦",
        wrongAnswerExplanations: {
            "2": "At least 3 edges must meet to form a vertex in a 3D shape.",
            "4": "In a cube, only 3 edges meet at each vertex.",
            "6": "This is the total number of faces in a cube, not edges at a vertex."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: "cl7_ch15_t1_qe10",
        type: "mcq",
        question: "Which of these is NOT a 3D shape?",
        options: [
            "Square",
            "Cube",
            "Sphere",
            "Cylinder"
        ],
        correctAnswer: "Square",
        explanation: "A square is a 2D shape (flat), while all others are 3D shapes with depth. A square has no thickness. ⬛",
        wrongAnswerExplanations: {
            "Cube": "A cube is a 3D shape with 6 faces, 12 edges, and 8 vertices.",
            "Sphere": "A sphere is a 3D shape with a curved surface.",
            "Cylinder": "A cylinder is a 3D shape with two circular faces and a curved surface."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: "cl7_ch15_t1_qe11",
        type: "mcq",
        question: "What is the relationship between faces and edges in a cube?",
        options: [
            "Number of faces = Number of edges",
            "Number of edges = 2 × Number of faces",
            "Number of faces = 2 × Number of edges",
            "No fixed relationship"
        ],
        correctAnswer: "Number of edges = 2 × Number of faces",
        explanation: "A cube has 6 faces and 12 edges, so the number of edges (12) is twice the number of faces (6). This is a consistent relationship in cubes. 📊",
        wrongAnswerExplanations: {
            "Number of faces = Number of edges": "A cube has 6 faces but 12 edges.",
            "Number of faces = 2 × Number of edges": "This would mean 12 faces and 6 edges, which is incorrect.",
            "No fixed relationship": "There is a fixed relationship: edges = 2 × faces."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: "cl7_ch15_t1_qe12",
        type: "mcq",
        question: "Which 3D shape has no vertices?",
        options: [
            "Cube",
            "Sphere",
            "Pyramid",
            "Prism"
        ],
        correctAnswer: "Sphere",
        explanation: "A sphere has no vertices because it has a completely smooth, curved surface with no corners or edges. 🔮",
        wrongAnswerExplanations: {
            "Cube": "A cube has 8 vertices.",
            "Pyramid": "A pyramid has vertices, including one at its apex.",
            "Prism": "A prism has vertices where its edges meet."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: "cl7_ch15_t1_qe13",
        type: "mcq",
        question: "What is the shape of each face in a cube?",
        options: [
            "Rectangle",
            "Triangle",
            "Square",
            "Circle"
        ],
        correctAnswer: "Square",
        explanation: "All six faces of a cube are identical squares. This is what makes it a cube rather than just a rectangular prism. ⬛",
        wrongAnswerExplanations: {
            "Rectangle": "A rectangular prism has rectangular faces, but a cube specifically has square faces.",
            "Triangle": "Triangular faces are found in pyramids and tetrahedra, not cubes.",
            "Circle": "Circular faces are found in cylinders, not cubes."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: "cl7_ch15_t1_qe14",
        type: "mcq",
        question: "How many faces does a triangular prism have?",
        options: ["3", "5", "6", "8"],
        correctAnswer: "5",
        explanation: "A triangular prism has 5 faces: 2 triangular faces (ends) and 3 rectangular faces (sides). 📐",
        wrongAnswerExplanations: {
            "3": "This is the number of rectangular faces, not total faces.",
            "6": "A cube has 6 faces, not a triangular prism.",
            "8": "This is the number of vertices in a cube."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: "cl7_ch15_t1_qe15",
        type: "mcq",
        question: "Which statement about edges in 3D shapes is TRUE?",
        options: [
            "All edges must be the same length",
            "Edges can only meet at right angles",
            "An edge is formed where two faces meet",
            "Every 3D shape must have edges"
        ],
        correctAnswer: "An edge is formed where two faces meet",
        explanation: "An edge is always formed at the intersection of two faces in a 3D shape, creating a line segment. 📏",
        wrongAnswerExplanations: {
            "All edges must be the same length": "Edges can have different lengths, like in a rectangular prism.",
            "Edges can only meet at right angles": "Edges can meet at various angles, like in a pyramid.",
            "Every 3D shape must have edges": "Some 3D shapes like spheres have no edges."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: "cl7_ch15_t1_qe16",
        type: "mcq",
        question: "What is the minimum number of faces needed to make a 3D shape?",
        options: ["2", "3", "4", "5"],
        correctAnswer: "4",
        explanation: "The minimum number of faces needed for a 3D shape is 4, forming a triangular pyramid (tetrahedron). 🔺",
        wrongAnswerExplanations: {
            "2": "Two faces cannot enclose a 3D space.",
            "3": "Three faces cannot enclose a 3D space.",
            "5": "While some 3D shapes have 5 faces, it's not the minimum needed."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: "cl7_ch15_t1_qe17",
        type: "mcq",
        question: "In a rectangular prism, how many edges are parallel to each other?",
        options: ["4", "8", "12", "16"],
        correctAnswer: "12",
        explanation: "In a rectangular prism, edges come in parallel pairs. Each of the 12 edges is parallel to 3 other edges, making 12 parallel relationships. 📦",
        wrongAnswerExplanations: {
            "4": "This is less than the number of parallel edge relationships.",
            "8": "This is the number of vertices, not parallel relationships.",
            "16": "This exceeds the total number of edges in a rectangular prism."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: "cl7_ch15_t1_qe18",
        type: "mcq",
        question: "Which 3D shape has the same number of faces as vertices?",
        options: [
            "Cube",
            "Square pyramid",
            "Triangular prism",
            "Tetrahedron"
        ],
        correctAnswer: "Tetrahedron",
        explanation: "A tetrahedron (triangular pyramid) has 4 faces and 4 vertices, making it the only regular 3D shape with equal numbers of faces and vertices. 🔺",
        wrongAnswerExplanations: {
            "Cube": "A cube has 6 faces and 8 vertices.",
            "Square pyramid": "A square pyramid has 5 faces and 5 vertices.",
            "Triangular prism": "A triangular prism has 5 faces and 6 vertices."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: "cl7_ch15_t1_qe19",
        type: "mcq",
        question: "What happens to the number of edges in a prism as the number of sides in its base increases?",
        options: [
            "Stays the same",
            "Decreases",
            "Increases",
            "No pattern"
        ],
        correctAnswer: "Increases",
        explanation: "As the number of sides in the base increases, the number of edges increases. For example, a triangular prism has 9 edges, while a square prism has 12 edges. 📈",
        wrongAnswerExplanations: {
            "Stays the same": "The number of edges changes with the number of base sides.",
            "Decreases": "More sides in the base means more edges, not fewer.",
            "No pattern": "There is a clear pattern of increase."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: "cl7_ch15_t1_qe20",
        type: "mcq",
        question: "Which of these is NOT a vertex property?",
        options: [
            "A vertex is a point",
            "A vertex is where edges meet",
            "A vertex has length",
            "A vertex can be counted"
        ],
        correctAnswer: "A vertex has length",
        explanation: "A vertex is a point where edges meet and has no length. It's a zero-dimensional point in space. 📍",
        wrongAnswerExplanations: {
            "A vertex is a point": "This is a correct property of vertices.",
            "A vertex is where edges meet": "This is a correct property of vertices.",
            "A vertex can be counted": "This is a correct property of vertices."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    }
]; 