import { QuizQuestion } from '../../../../../types';

export const mediumQuestions: QuizQuestion[] = [
    {
        id: 'cl6_ch5_t2_qm1',
        type: "mcq",
        question: "If a cube has an edge length of 3 cm, what is the total length of all its edges?",
        options: ["24 cm", "36 cm", "48 cm", "72 cm"],
        correctAnswer: "36 cm",
        explanation: "A cube has 12 edges. Total length = 12 edges × 3 cm = 36 cm. 🎲",
        wrongAnswerExplanations: {
            "24 cm": "This would be correct for a cube with 2 cm edges.",
            "48 cm": "This would be correct for a cube with 4 cm edges.",
            "72 cm": "This would be correct for a cube with 6 cm edges."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch5_t2_qm2',
        type: "mcq",
        question: "Which shape has the same number of faces, edges, and vertices as a cube?",
        options: ["Cone", "Cylinder", "Cuboid", "Sphere"],
        correctAnswer: "Cuboid",
        explanation: "A cuboid has 6 faces, 12 edges, and 8 vertices, just like a cube. 📦",
        wrongAnswerExplanations: {
            "Cone": "A cone has 2 faces, 1 edge, and 1 vertex.",
            "Cylinder": "A cylinder has 3 faces, 2 edges, and 0 vertices.",
            "Sphere": "A sphere has 1 face, 0 edges, and 0 vertices."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch5_t2_qm3',
        type: "mcq",
        question: "If you have a cuboid with dimensions 2 cm × 3 cm × 4 cm, how many faces are rectangular?",
        options: ["4", "5", "6", "3"],
        correctAnswer: "6",
        explanation: "A cuboid has 6 rectangular faces, regardless of its dimensions. 📦",
        wrongAnswerExplanations: {
            "4": "A cuboid always has 6 rectangular faces.",
            "5": "A cuboid always has 6 rectangular faces.",
            "3": "A cuboid always has 6 rectangular faces."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch5_t2_qm4',
        type: "mcq",
        question: "Which shape has more edges: a cylinder or a cone?",
        options: ["Cylinder", "Cone", "Both have the same", "Neither has edges"],
        correctAnswer: "Cylinder",
        explanation: "A cylinder has 2 edges, while a cone has only 1 edge. 🥫",
        wrongAnswerExplanations: {
            "Cone": "A cone has only 1 edge, while a cylinder has 2.",
            "Both have the same": "A cylinder has 2 edges, while a cone has 1.",
            "Neither has edges": "Both shapes have edges where their curved surfaces meet their bases."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch5_t2_qm5',
        type: "mcq",
        question: "If you cut a cube in half through its center, what shape would the cross-section be?",
        options: ["Circle", "Square", "Rectangle", "Triangle"],
        correctAnswer: "Square",
        explanation: "Cutting a cube through its center would result in a square cross-section. 🎲",
        wrongAnswerExplanations: {
            "Circle": "A cube's cross-section is always a polygon, not a circle.",
            "Rectangle": "Only if cut at an angle would the cross-section be rectangular.",
            "Triangle": "A cube's cross-section cannot be triangular."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch5_t2_qm6',
        type: "mcq",
        question: "Which shape has the most vertices among these: cube, cone, cylinder, sphere?",
        options: ["Cube", "Cone", "Cylinder", "Sphere"],
        correctAnswer: "Cube",
        explanation: "A cube has 8 vertices, while a cone has 1, and cylinder and sphere have 0. 🎲",
        wrongAnswerExplanations: {
            "Cone": "A cone has only 1 vertex, while a cube has 8.",
            "Cylinder": "A cylinder has 0 vertices, while a cube has 8.",
            "Sphere": "A sphere has 0 vertices, while a cube has 8."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch5_t2_qm7',
        type: "mcq",
        question: "If you have a cylinder standing upright, what shape would you see from the top?",
        options: ["Rectangle", "Circle", "Square", "Triangle"],
        correctAnswer: "Circle",
        explanation: "Looking at a cylinder from the top, you see its circular base. 🥫",
        wrongAnswerExplanations: {
            "Rectangle": "You would see a rectangle from the side, not the top.",
            "Square": "A cylinder's top view is always circular.",
            "Triangle": "A cylinder's top view is always circular."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch5_t2_qm8',
        type: "mcq",
        question: "Which shape has the fewest faces among these: cube, cuboid, cylinder, cone?",
        options: ["Cube", "Cuboid", "Cylinder", "Cone"],
        correctAnswer: "Cone",
        explanation: "A cone has 2 faces, while cube and cuboid have 6, and cylinder has 3. 🍦",
        wrongAnswerExplanations: {
            "Cube": "A cube has 6 faces, while a cone has only 2.",
            "Cuboid": "A cuboid has 6 faces, while a cone has only 2.",
            "Cylinder": "A cylinder has 3 faces, while a cone has only 2."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch5_t2_qm9',
        type: "mcq",
        question: "If you have a sphere with a radius of 5 cm, what is its diameter?",
        options: ["5 cm", "10 cm", "15 cm", "20 cm"],
        correctAnswer: "10 cm",
        explanation: "Diameter = 2 × radius = 2 × 5 cm = 10 cm. ⚽",
        wrongAnswerExplanations: {
            "5 cm": "This is the radius, not the diameter.",
            "15 cm": "This is 3 times the radius, not the diameter.",
            "20 cm": "This is 4 times the radius, not the diameter."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch5_t2_qm10',
        type: "mcq",
        question: "Which shape has the most edges among these: cube, cuboid, cylinder, cone?",
        options: ["Cube", "Cuboid", "Cylinder", "Cone"],
        correctAnswer: "Cuboid",
        explanation: "Both cube and cuboid have 12 edges, while cylinder has 2 and cone has 1. 📦",
        wrongAnswerExplanations: {
            "Cylinder": "A cylinder has only 2 edges, while cube and cuboid have 12.",
            "Cone": "A cone has only 1 edge, while cube and cuboid have 12.",
            "Cube": "Both cube and cuboid have 12 edges, but cuboid is also correct."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch5_t2_qm11',
        type: "mcq",
        question: "If you cut a cone parallel to its base, what shape would the cross-section be?",
        options: ["Circle", "Square", "Rectangle", "Triangle"],
        correctAnswer: "Circle",
        explanation: "Cutting a cone parallel to its base would result in a circular cross-section. 🍦",
        wrongAnswerExplanations: {
            "Square": "A cone's cross-section parallel to base is always circular.",
            "Rectangle": "A cone's cross-section parallel to base is always circular.",
            "Triangle": "A cone's cross-section parallel to base is always circular."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch5_t2_qm12',
        type: "mcq",
        question: "Which shape has the same number of faces as a cylinder?",
        options: ["Cube", "Cone", "Sphere", "None of these"],
        correctAnswer: "None of these",
        explanation: "A cylinder has 3 faces, while cube has 6, cone has 2, and sphere has 1. 🥫",
        wrongAnswerExplanations: {
            "Cube": "A cube has 6 faces, while a cylinder has 3.",
            "Cone": "A cone has 2 faces, while a cylinder has 3.",
            "Sphere": "A sphere has 1 face, while a cylinder has 3."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch5_t2_qm13',
        type: "mcq",
        question: "If you have a cuboid with dimensions 2 cm × 3 cm × 4 cm, how many edges are 4 cm long?",
        options: ["4", "8", "12", "6"],
        correctAnswer: "4",
        explanation: "A cuboid has 4 edges of each dimension. So 4 edges are 4 cm long. 📦",
        wrongAnswerExplanations: {
            "8": "A cuboid has 4 edges of each dimension, not 8.",
            "12": "This is the total number of edges, not just the 4 cm ones.",
            "6": "A cuboid has 4 edges of each dimension, not 6."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch5_t2_qm14',
        type: "mcq",
        question: "Which shape has the fewest edges among these: cube, cuboid, cylinder, cone?",
        options: ["Cube", "Cuboid", "Cylinder", "Cone"],
        correctAnswer: "Cone",
        explanation: "A cone has 1 edge, while cylinder has 2, and cube and cuboid have 12. 🍦",
        wrongAnswerExplanations: {
            "Cube": "A cube has 12 edges, while a cone has only 1.",
            "Cuboid": "A cuboid has 12 edges, while a cone has only 1.",
            "Cylinder": "A cylinder has 2 edges, while a cone has only 1."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch5_t2_qm15',
        type: "mcq",
        question: "If you have a cube with edge length 5 cm, what is the area of one face?",
        options: ["10 cm²", "20 cm²", "25 cm²", "30 cm²"],
        correctAnswer: "25 cm²",
        explanation: "Area of a square face = side × side = 5 cm × 5 cm = 25 cm². 🎲",
        wrongAnswerExplanations: {
            "10 cm²": "This would be the perimeter of one face, not the area.",
            "20 cm²": "This would be 4 times the edge length, not the area.",
            "30 cm²": "This is not the correct area calculation for a square face."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch5_t2_qm16',
        type: "mcq",
        question: "Which shape has the most faces among these: cube, cuboid, cylinder, cone?",
        options: ["Cube", "Cuboid", "Cylinder", "Cone"],
        correctAnswer: "Cuboid",
        explanation: "Both cube and cuboid have 6 faces, while cylinder has 3 and cone has 2. 📦",
        wrongAnswerExplanations: {
            "Cylinder": "A cylinder has 3 faces, while cube and cuboid have 6.",
            "Cone": "A cone has 2 faces, while cube and cuboid have 6.",
            "Cube": "Both cube and cuboid have 6 faces, but cuboid is also correct."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch5_t2_qm17',
        type: "mcq",
        question: "If you have a cylinder standing upright, what shape would you see from the side?",
        options: ["Circle", "Square", "Rectangle", "Triangle"],
        correctAnswer: "Rectangle",
        explanation: "Looking at a cylinder from the side, you see a rectangle. 🥫",
        wrongAnswerExplanations: {
            "Circle": "You would see a circle from the top, not the side.",
            "Square": "A cylinder's side view is always rectangular.",
            "Triangle": "A cylinder's side view is always rectangular."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch5_t2_qm18',
        type: "mcq",
        question: "Which shape has the fewest vertices among these: cube, cuboid, cylinder, cone?",
        options: ["Cube", "Cuboid", "Cylinder", "Cone"],
        correctAnswer: "Cylinder",
        explanation: "A cylinder has 0 vertices, while cube and cuboid have 8, and cone has 1. 🥫",
        wrongAnswerExplanations: {
            "Cube": "A cube has 8 vertices, while a cylinder has 0.",
            "Cuboid": "A cuboid has 8 vertices, while a cylinder has 0.",
            "Cone": "A cone has 1 vertex, while a cylinder has 0."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch5_t2_qm19',
        type: "mcq",
        question: "If you have a cone standing upright, what shape would you see from the top?",
        options: ["Circle", "Square", "Rectangle", "Triangle"],
        correctAnswer: "Circle",
        explanation: "Looking at a cone from the top, you see its circular base. 🍦",
        wrongAnswerExplanations: {
            "Square": "A cone's top view is always circular.",
            "Rectangle": "A cone's top view is always circular.",
            "Triangle": "A cone's top view is always circular."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    },
    {
        id: 'cl6_ch5_t2_qm20',
        type: "mcq",
        question: "Which shape has the same number of vertices as a cube?",
        options: ["Cone", "Cylinder", "Cuboid", "Sphere"],
        correctAnswer: "Cuboid",
        explanation: "Both cube and cuboid have 8 vertices. 📦",
        wrongAnswerExplanations: {
            "Cone": "A cone has 1 vertex, while a cube has 8.",
            "Cylinder": "A cylinder has 0 vertices, while a cube has 8.",
            "Sphere": "A sphere has 0 vertices, while a cube has 8."
        },
        difficulty: "medium",
        marks: 2,
        recommendedTime: 45
    }
]; 