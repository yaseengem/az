import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl5_ch9_t1_qm1',
        type: "mcq",
        question: "If a cube has a side length of 3 cm, what is the total length of all its edges?",
        options: ["36 cm", "24 cm", "18 cm", "12 cm"],
        correctAnswer: "36 cm",
        explanation: "A cube has 12 edges. If each edge is 3 cm, total length = 12 × 3 = 36 cm. 🎲",
        wrongAnswerExplanations: {
            "24 cm": "This would be correct if the cube had 8 edges.",
            "18 cm": "This would be correct if the cube had 6 edges.",
            "12 cm": "This is just the length of one edge."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch9_t1_qm2',
        type: "mcq",
        question: "Which shape has the same number of faces as a cube but different face shapes?",
        options: ["Cuboid", "Sphere", "Cylinder", "Cone"],
        correctAnswer: "Cuboid",
        explanation: "A cuboid has 6 faces like a cube, but its faces are rectangles instead of squares. 📦",
        wrongAnswerExplanations: {
            "Sphere": "A sphere has no faces.",
            "Cylinder": "A cylinder has 2 circular faces and 1 curved surface.",
            "Cone": "A cone has 1 circular face and 1 curved surface."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch9_t1_qm3',
        type: "mcq",
        question: "If you cut a cube in half through its center, what shape would the cut surface be?",
        options: ["Square", "Rectangle", "Circle", "Triangle"],
        correctAnswer: "Square",
        explanation: "Cutting a cube through its center would create a square cross-section because all faces of a cube are squares. 🎲",
        wrongAnswerExplanations: {
            "Rectangle": "This would be true for a cuboid, not a cube.",
            "Circle": "A cube has no curved surfaces.",
            "Triangle": "A cube has no triangular faces."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch9_t1_qm4',
        type: "mcq",
        question: "Which shape can roll in any direction?",
        options: ["Sphere", "Cylinder", "Cone", "Cube"],
        correctAnswer: "Sphere",
        explanation: "A sphere can roll in any direction because it is perfectly round with no edges or corners. ⚽",
        wrongAnswerExplanations: {
            "Cylinder": "A cylinder can only roll in one direction.",
            "Cone": "A cone rolls in a circle.",
            "Cube": "A cube cannot roll smoothly."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch9_t1_qm5',
        type: "mcq",
        question: "If you stack 3 cubes on top of each other, how many faces are touching?",
        options: ["4", "2", "6", "8"],
        correctAnswer: "4",
        explanation: "When stacking cubes, each cube touches the one above and below it with one face each. For 3 cubes, there are 2 touching points with 2 faces each = 4 faces touching. 🎲",
        wrongAnswerExplanations: {
            "2": "This would be correct for 2 cubes.",
            "6": "This is the number of faces on one cube.",
            "8": "This is the number of vertices on one cube."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch9_t1_qm6',
        type: "mcq",
        question: "Which shape has the most edges?",
        options: ["Cube and Cuboid", "Cylinder", "Cone", "Sphere"],
        correctAnswer: "Cube and Cuboid",
        explanation: "Both cube and cuboid have 12 edges. Cylinder has 2 edges, cone has 1 edge, and sphere has no edges. 🎲📦",
        wrongAnswerExplanations: {
            "Cylinder": "A cylinder has only 2 edges.",
            "Cone": "A cone has only 1 edge.",
            "Sphere": "A sphere has no edges."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch9_t1_qm7',
        type: "mcq",
        question: "If you cut a cylinder horizontally through its center, what shape would the cut surface be?",
        options: ["Circle", "Rectangle", "Square", "Triangle"],
        correctAnswer: "Circle",
        explanation: "Cutting a cylinder horizontally through its center would create a circular cross-section because the cylinder has circular faces. 🥫",
        wrongAnswerExplanations: {
            "Rectangle": "This would be true for a vertical cut.",
            "Square": "A cylinder has no square faces.",
            "Triangle": "A cylinder has no triangular faces."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch9_t1_qm8',
        type: "mcq",
        question: "Which shape has the fewest vertices?",
        options: ["Cone and Sphere", "Cube", "Cuboid", "Cylinder"],
        correctAnswer: "Cone and Sphere",
        explanation: "A cone has 1 vertex and a sphere has 0 vertices. Cube and cuboid have 8 vertices each, and cylinder has 0 vertices. 🍦⚽",
        wrongAnswerExplanations: {
            "Cube": "A cube has 8 vertices.",
            "Cuboid": "A cuboid has 8 vertices.",
            "Cylinder": "A cylinder has 0 vertices, but cone also has few vertices."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch9_t1_qm9',
        type: "mcq",
        question: "If you cut a cone vertically through its vertex, what shape would the cut surface be?",
        options: ["Triangle", "Circle", "Rectangle", "Square"],
        correctAnswer: "Triangle",
        explanation: "Cutting a cone vertically through its vertex would create a triangular cross-section. 🍦",
        wrongAnswerExplanations: {
            "Circle": "This would be true for a horizontal cut.",
            "Rectangle": "A cone has no rectangular faces.",
            "Square": "A cone has no square faces."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch9_t1_qm10',
        type: "mcq",
        question: "Which shape can stand on its curved surface?",
        options: ["Cylinder", "Cube", "Cone", "Sphere"],
        correctAnswer: "Cylinder",
        explanation: "A cylinder can stand on its curved surface because it has a uniform circular cross-section. 🥫",
        wrongAnswerExplanations: {
            "Cube": "A cube stands on its flat faces.",
            "Cone": "A cone stands on its circular face.",
            "Sphere": "A sphere has no flat surface to stand on."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch9_t1_qm11',
        type: "mcq",
        question: "If you have 4 cubes, what is the minimum number of faces that must be touching when they are arranged in a square?",
        options: ["8", "4", "12", "6"],
        correctAnswer: "8",
        explanation: "When arranging 4 cubes in a square, each cube touches 2 others. Each touching point involves 2 faces, so total touching faces = 4 × 2 = 8. 🎲",
        wrongAnswerExplanations: {
            "4": "This would be correct for 2 cubes.",
            "12": "This is the number of edges on one cube.",
            "6": "This is the number of faces on one cube."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch9_t1_qm12',
        type: "mcq",
        question: "Which shape has the most faces?",
        options: ["Cube and Cuboid", "Cylinder", "Cone", "Sphere"],
        correctAnswer: "Cube and Cuboid",
        explanation: "Both cube and cuboid have 6 faces. Cylinder has 2 faces and 1 curved surface, cone has 1 face and 1 curved surface, and sphere has 1 curved surface. 🎲📦",
        wrongAnswerExplanations: {
            "Cylinder": "A cylinder has 2 faces and 1 curved surface.",
            "Cone": "A cone has 1 face and 1 curved surface.",
            "Sphere": "A sphere has only 1 curved surface."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch9_t1_qm13',
        type: "mcq",
        question: "If you cut a sphere in half, what shape would the cut surface be?",
        options: ["Circle", "Square", "Rectangle", "Triangle"],
        correctAnswer: "Circle",
        explanation: "Cutting a sphere in half would create a circular cross-section because a sphere is perfectly round. ⚽",
        wrongAnswerExplanations: {
            "Square": "A sphere has no flat faces.",
            "Rectangle": "A sphere has no flat faces.",
            "Triangle": "A sphere has no flat faces."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch9_t1_qm14',
        type: "mcq",
        question: "Which shape can roll in a straight line?",
        options: ["Cylinder", "Sphere", "Cone", "Cube"],
        correctAnswer: "Cylinder",
        explanation: "A cylinder can roll in a straight line because it has a uniform circular cross-section. 🥫",
        wrongAnswerExplanations: {
            "Sphere": "A sphere can roll in any direction.",
            "Cone": "A cone rolls in a circle.",
            "Cube": "A cube cannot roll smoothly."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch9_t1_qm15',
        type: "mcq",
        question: "If you have 8 cubes, what is the minimum number of faces that must be touching when they are arranged in a larger cube?",
        options: ["24", "12", "36", "48"],
        correctAnswer: "24",
        explanation: "When arranging 8 cubes in a larger cube, each inner cube touches 3 others. Each touching point involves 2 faces, so total touching faces = 12 × 2 = 24. 🎲",
        wrongAnswerExplanations: {
            "12": "This would be correct for 4 cubes.",
            "36": "This is the number of edges in the larger cube.",
            "48": "This is the number of faces in the larger cube."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch9_t1_qm16',
        type: "mcq",
        question: "Which shape has the fewest edges?",
        options: ["Sphere and Cone", "Cube", "Cuboid", "Cylinder"],
        correctAnswer: "Sphere and Cone",
        explanation: "A sphere has 0 edges and a cone has 1 edge. Cube and cuboid have 12 edges each, and cylinder has 2 edges. ⚽🍦",
        wrongAnswerExplanations: {
            "Cube": "A cube has 12 edges.",
            "Cuboid": "A cuboid has 12 edges.",
            "Cylinder": "A cylinder has 2 edges, but sphere has fewer."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch9_t1_qm17',
        type: "mcq",
        question: "If you cut a cuboid vertically through its center, what shape would the cut surface be?",
        options: ["Rectangle", "Square", "Circle", "Triangle"],
        correctAnswer: "Rectangle",
        explanation: "Cutting a cuboid vertically through its center would create a rectangular cross-section because a cuboid has rectangular faces. 📦",
        wrongAnswerExplanations: {
            "Square": "This would be true for a cube, not a cuboid.",
            "Circle": "A cuboid has no curved surfaces.",
            "Triangle": "A cuboid has no triangular faces."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch9_t1_qm18',
        type: "mcq",
        question: "Which shape can roll in a circle?",
        options: ["Cone", "Cylinder", "Sphere", "Cube"],
        correctAnswer: "Cone",
        explanation: "A cone rolls in a circle because its base is circular and its height decreases as it rolls. 🍦",
        wrongAnswerExplanations: {
            "Cylinder": "A cylinder rolls in a straight line.",
            "Sphere": "A sphere can roll in any direction.",
            "Cube": "A cube cannot roll smoothly."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch9_t1_qm19',
        type: "mcq",
        question: "If you have 27 cubes, what is the minimum number of faces that must be touching when they are arranged in a larger cube?",
        options: ["54", "27", "81", "108"],
        correctAnswer: "54",
        explanation: "When arranging 27 cubes in a larger cube, each inner cube touches 3 others. Each touching point involves 2 faces, so total touching faces = 27 × 2 = 54. 🎲",
        wrongAnswerExplanations: {
            "27": "This would be correct for 8 cubes.",
            "81": "This is the number of edges in the larger cube.",
            "108": "This is the number of faces in the larger cube."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl5_ch9_t1_qm20',
        type: "mcq",
        question: "Which shape has the fewest faces?",
        options: ["Sphere and Cone", "Cube", "Cuboid", "Cylinder"],
        correctAnswer: "Sphere and Cone",
        explanation: "A sphere has 0 faces (only a curved surface) and a cone has 1 face. Cube and cuboid have 6 faces each, and cylinder has 2 faces. ⚽🍦",
        wrongAnswerExplanations: {
            "Cube": "A cube has 6 faces.",
            "Cuboid": "A cuboid has 6 faces.",
            "Cylinder": "A cylinder has 2 faces, but sphere has fewer."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    }
];