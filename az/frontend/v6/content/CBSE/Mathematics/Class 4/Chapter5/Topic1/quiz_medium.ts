import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl4_ch5_t1_qm1',
        type: "mcq",
        question: "Which of these is NOT a property of a 2D shape?",
        options: ["Has length", "Has width", "Has height", "Has area"],
        correctAnswer: "Has height",
        explanation: "2D shapes have only length and width, with no height or thickness.",
        wrongAnswerExplanations: {
            "Has length": "2D shapes have length, which is one of their dimensions.",
            "Has width": "2D shapes have width, which is one of their dimensions.",
            "Has area": "2D shapes have area, calculated using length and width."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch5_t1_qm2',
        type: "mcq",
        question: "How many edges does a cube have?",
        options: ["6", "8", "12", "24"],
        correctAnswer: "12",
        explanation: "A cube has 12 edges where its 6 square faces meet.",
        wrongAnswerExplanations: {
            "6": "A cube has 6 faces, not 12 edges.",
            "8": "A cube has 8 vertices (corners), not 12 edges.",
            "24": "12 is the correct number of edges in a cube."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch5_t1_qm3',
        type: "mcq",
        question: "Which of these statements about 3D shapes is TRUE?",
        options: [
            "All 3D shapes have at least one flat surface",
            "All 3D shapes can roll easily",
            "All 3D shapes have volume",
            "All 3D shapes are symmetrical"
        ],
        correctAnswer: "All 3D shapes have volume",
        explanation: "All 3D shapes have volume, which is the space they occupy in three dimensions.",
        wrongAnswerExplanations: {
            "All 3D shapes have at least one flat surface": "Some 3D shapes like spheres have no flat surfaces.",
            "All 3D shapes can roll easily": "Many 3D shapes with flat faces don't roll easily.",
            "All 3D shapes are symmetrical": "Not all 3D shapes have symmetry."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch5_t1_qm4',
        type: "mcq",
        question: "What is the name of a 3D shape with a circular base and a point at the top?",
        options: ["Cylinder", "Sphere", "Cone", "Pyramid"],
        correctAnswer: "Cone",
        explanation: "A cone has a circular base and tapers to a single point at the top.",
        wrongAnswerExplanations: {
            "Cylinder": "A cylinder has two parallel circular bases, not a point.",
            "Sphere": "A sphere is completely round with no base or point.",
            "Pyramid": "A pyramid has a polygonal base (like a square), not a circular one."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch5_t1_qm5',
        type: "mcq",
        question: "If a 3D shape has 5 faces, 8 edges, and 5 vertices, what shape could it be?",
        options: ["Cube", "Rectangular prism", "Square pyramid", "Triangular prism"],
        correctAnswer: "Square pyramid",
        explanation: "A square pyramid has 5 faces, 8 edges, and 5 vertices.",
        wrongAnswerExplanations: {
            "Cube": "A cube has 6 faces, 12 edges, and 8 vertices.",
            "Rectangular prism": "A rectangular prism has 6 faces, 12 edges, and 8 vertices.",
            "Triangular prism": "A triangular prism has 5 faces, 9 edges, and 6 vertices."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 60
    },
    {
        id: 'cl4_ch5_t1_qm6',
        type: "mcq",
        question: "Which of these 3D shapes has the most faces?",
        options: ["Triangular pyramid", "Triangular prism", "Square pyramid", "Cube"],
        correctAnswer: "Cube",
        explanation: "A cube has 6 faces, more than any of the other shapes listed.",
        wrongAnswerExplanations: {
            "Triangular pyramid": "A triangular pyramid (tetrahedron) has 4 faces.",
            "Triangular prism": "A triangular prism has 5 faces.",
            "Square pyramid": "A square pyramid has 5 faces."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch5_t1_qm7',
        type: "mcq",
        question: "What special name is given to a 3D shape that has only flat faces?",
        options: ["Round shape", "Curved solid", "Polyhedron", "Cylinder"],
        correctAnswer: "Polyhedron",
        explanation: "A polyhedron is a 3D shape made up of only flat polygonal faces.",
        wrongAnswerExplanations: {
            "Round shape": "Round shapes have curved surfaces, not flat faces.",
            "Curved solid": "Curved solids have at least some curved surfaces.",
            "Cylinder": "A cylinder has curved surfaces, not only flat faces."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch5_t1_qm8',
        type: "mcq",
        question: "Which of these shapes has exactly one curved surface and two flat faces?",
        options: ["Sphere", "Cube", "Cone", "Cylinder"],
        correctAnswer: "Cylinder",
        explanation: "A cylinder has one curved surface and two flat circular faces.",
        wrongAnswerExplanations: {
            "Sphere": "A sphere has one curved surface but no flat faces.",
            "Cube": "A cube has only flat faces (6) and no curved surfaces.",
            "Cone": "A cone has one curved surface and one flat circular face."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch5_t1_qm9',
        type: "mcq",
        question: "Which 2D shape would you get if you cut a sphere exactly in half and look at the flat surface?",
        options: ["Square", "Rectangle", "Triangle", "Circle"],
        correctAnswer: "Circle",
        explanation: "Cutting a sphere in half creates a circular cross-section.",
        wrongAnswerExplanations: {
            "Square": "A sphere doesn't create square cross-sections when cut.",
            "Rectangle": "A sphere doesn't create rectangular cross-sections when cut.",
            "Triangle": "A sphere doesn't create triangular cross-sections when cut."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch5_t1_qm10',
        type: "mcq",
        question: "What 3D shape is formed when you spin a semicircle around its straight edge?",
        options: ["Cylinder", "Cone", "Sphere", "Hemisphere"],
        correctAnswer: "Sphere",
        explanation: "Spinning a semicircle around its diameter creates a full sphere.",
        wrongAnswerExplanations: {
            "Cylinder": "Spinning a rectangle creates a cylinder, not a semicircle.",
            "Cone": "Spinning a triangle creates a cone, not a semicircle.",
            "Hemisphere": "Spinning a semicircle creates a full sphere, not just a hemisphere."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch5_t1_qm11',
        type: "mcq",
        question: "Which of these statements about prisms is FALSE?",
        options: [
            "Prisms have the same cross-section all along their length",
            "Prisms have two identical ends",
            "Prisms must have triangular bases",
            "Prisms can have any polygon as their base"
        ],
        correctAnswer: "Prisms must have triangular bases",
        explanation: "Prisms can have any polygon as their base, not just triangles.",
        wrongAnswerExplanations: {
            "Prisms have the same cross-section all along their length": "This is true for all prisms.",
            "Prisms have two identical ends": "This is true; prisms have identical ends.",
            "Prisms can have any polygon as their base": "This is true; bases can be any polygon."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch5_t1_qm12',
        type: "mcq",
        question: "What is the correct term for a solid shape that can be 'unfolded' to make a flat pattern?",
        options: ["Polygon", "Perimeter", "Net", "Vertex"],
        correctAnswer: "Net",
        explanation: "A net is a 2D pattern that can be folded to form a 3D solid shape.",
        wrongAnswerExplanations: {
            "Polygon": "A polygon is a 2D shape with straight sides, not an unfolded 3D shape.",
            "Perimeter": "Perimeter is the distance around a 2D shape.",
            "Vertex": "A vertex is a corner point where edges meet."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch5_t1_qm13',
        type: "mcq",
        question: "Rashmi makes a model using wooden blocks. Her model has 6 faces, 12 edges, and 8 vertices. What 3D shape did she most likely create?",
        options: ["Pyramid", "Sphere", "Cube", "Cylinder"],
        correctAnswer: "Cube",
        explanation: "A cube has exactly 6 faces, 12 edges, and 8 vertices.",
        wrongAnswerExplanations: {
            "Pyramid": "A square pyramid has 5 faces, 8 edges, and 5 vertices.",
            "Sphere": "A sphere has no faces, edges, or vertices as traditionally defined.",
            "Cylinder": "A cylinder has 3 faces (2 circular, 1 curved), 2 edges, and 0 vertices."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch5_t1_qm14',
        type: "mcq",
        question: "Which of these sets contains only 2D shapes?",
        options: [
            "Square, rectangle, cube",
            "Circle, triangle, rectangle",
            "Sphere, cylinder, cone",
            "Pyramid, prism, polygon"
        ],
        correctAnswer: "Circle, triangle, rectangle",
        explanation: "Circle, triangle, and rectangle are all 2D shapes (flat with no thickness).",
        wrongAnswerExplanations: {
            "Square, rectangle, cube": "Cube is a 3D shape, not 2D.",
            "Sphere, cylinder, cone": "These are all 3D shapes, not 2D.",
            "Pyramid, prism, polygon": "Pyramid and prism are 3D shapes; only polygon is 2D."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch5_t1_qm15',
        type: "mcq",
        question: "What is the name of a shape that is half of a sphere?",
        options: ["Semicircle", "Hemisphere", "Half-sphere", "Dome"],
        correctAnswer: "Hemisphere",
        explanation: "Hemisphere is the correct term for half a sphere.",
        wrongAnswerExplanations: {
            "Semicircle": "A semicircle is half of a circle (2D), not half of a sphere.",
            "Half-sphere": "Hemisphere is the correct mathematical term, not half-sphere.",
            "Dome": "While domes are hemispherical, 'hemisphere' is the precise term."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch5_t1_qm16',
        type: "mcq",
        question: "If you place a pyramid and a prism with the same base next to each other, what will be different?",
        options: [
            "The number of bases",
            "The shape of the base",
            "The material they're made of",
            "The color"
        ],
        correctAnswer: "The number of bases",
        explanation: "A pyramid has one base while a prism has two identical bases.",
        wrongAnswerExplanations: {
            "The shape of the base": "They can have the same base shape (e.g., square).",
            "The material they're made of": "Material is not a defining characteristic of these shapes.",
            "The color": "Color is not a defining characteristic of these shapes."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch5_t1_qm17',
        type: "mcq",
        question: "How many faces does a triangular prism have?",
        options: ["3", "5", "6", "9"],
        correctAnswer: "5",
        explanation: "A triangular prism has 5 faces: 2 triangular bases and 3 rectangular sides.",
        wrongAnswerExplanations: {
            "3": "This is the number of edges on each triangular base, not the total faces.",
            "6": "A cube or rectangular prism has 6 faces, not a triangular prism.",
            "9": "This is the number of edges in a triangular prism, not faces."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch5_t1_qm18',
        type: "mcq",
        question: "Which of these 3D shapes does NOT have any vertices (corners)?",
        options: ["Cube", "Cylinder", "Cone", "Sphere"],
        correctAnswer: "Sphere",
        explanation: "A sphere has no vertices as it has a completely smooth, curved surface.",
        wrongAnswerExplanations: {
            "Cube": "A cube has 8 vertices where its edges meet.",
            "Cylinder": "A cylinder has edges where the curved surface meets the circular faces.",
            "Cone": "A cone has one vertex at its pointed tip."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch5_t1_qm19',
        type: "mcq",
        question: "What is common to both a cube and a square pyramid?",
        options: [
            "They both have the same number of faces",
            "They can both have a square base",
            "They both have the same number of edges",
            "They both roll easily"
        ],
        correctAnswer: "They can both have a square base",
        explanation: "Both a cube and a square pyramid can have a square base.",
        wrongAnswerExplanations: {
            "They both have the same number of faces": "A cube has 6 faces, a square pyramid has 5.",
            "They both have the same number of edges": "A cube has 12 edges, a square pyramid has 8.",
            "They both roll easily": "Neither shape rolls easily due to their flat faces."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl4_ch5_t1_qm20',
        type: "mcq",
        question: "If you place a cube on a table and shine a light directly from above, what shape will its shadow be?",
        options: ["Circle", "Triangle", "Square", "Rectangle"],
        correctAnswer: "Square",
        explanation: "A cube viewed from directly above creates a square shadow.",
        wrongAnswerExplanations: {
            "Circle": "A sphere would create a circular shadow, not a cube.",
            "Triangle": "A cube doesn't create a triangular shadow from any angle.",
            "Rectangle": "A cube creates a square shadow from above, not a rectangle."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    }
];