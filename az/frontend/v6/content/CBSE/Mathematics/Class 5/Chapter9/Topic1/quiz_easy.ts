import { QuizQuestion } from '../../../../../types';

export const easyQuestions: QuizQuestion[] = [
    {
        id: 'cl5_ch9_t1_qe1',
        type: "mcq",
        question: "Which shape has 6 square faces, 12 edges, and 8 vertices?",
        options: ["Cube", "Sphere", "Cylinder", "Cone"],
        correctAnswer: "Cube",
        explanation: "A cube has 6 square faces, 12 edges (where faces meet), and 8 vertices (corners). All faces are equal squares. 🎲",
        wrongAnswerExplanations: {
            "Sphere": "A sphere has no faces, edges, or vertices.",
            "Cylinder": "A cylinder has 2 circular faces and 1 curved surface.",
            "Cone": "A cone has 1 circular face, 1 curved surface, and 1 vertex."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch9_t1_qe2',
        type: "mcq",
        question: "Which shape is perfectly round with no edges or vertices?",
        options: ["Sphere", "Cube", "Cuboid", "Cylinder"],
        correctAnswer: "Sphere",
        explanation: "A sphere is perfectly round with one curved surface. It has no edges or vertices. ⚽",
        wrongAnswerExplanations: {
            "Cube": "A cube has edges and vertices.",
            "Cuboid": "A cuboid has edges and vertices.",
            "Cylinder": "A cylinder has edges where the circular faces meet the curved surface."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch9_t1_qe3',
        type: "mcq",
        question: "Which shape has two circular faces and one curved surface?",
        options: ["Cylinder", "Cube", "Cone", "Sphere"],
        correctAnswer: "Cylinder",
        explanation: "A cylinder has two circular faces (top and bottom) and one curved surface connecting them. 🥫",
        wrongAnswerExplanations: {
            "Cube": "A cube has 6 square faces.",
            "Cone": "A cone has only one circular face.",
            "Sphere": "A sphere has only one curved surface."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch9_t1_qe4',
        type: "mcq",
        question: "Which shape has one circular face, one curved surface, and one vertex?",
        options: ["Cone", "Cylinder", "Cube", "Sphere"],
        correctAnswer: "Cone",
        explanation: "A cone has one circular face at the bottom, one curved surface, and one vertex at the top. 🍦",
        wrongAnswerExplanations: {
            "Cylinder": "A cylinder has two circular faces and no vertices.",
            "Cube": "A cube has 8 vertices and no curved surfaces.",
            "Sphere": "A sphere has no vertices."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch9_t1_qe5',
        type: "mcq",
        question: "Which shape has 6 rectangular faces, 12 edges, and 8 vertices?",
        options: ["Cuboid", "Cube", "Cylinder", "Cone"],
        correctAnswer: "Cuboid",
        explanation: "A cuboid has 6 rectangular faces, 12 edges, and 8 vertices. Opposite faces are equal. 📦",
        wrongAnswerExplanations: {
            "Cube": "A cube has square faces, not rectangular.",
            "Cylinder": "A cylinder has 2 circular faces and 1 curved surface.",
            "Cone": "A cone has 1 circular face and 1 vertex."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch9_t1_qe6',
        type: "mcq",
        question: "Which shape is a football?",
        options: ["Sphere", "Cube", "Cylinder", "Cone"],
        correctAnswer: "Sphere",
        explanation: "A football is a sphere because it is perfectly round with no edges or vertices. ⚽",
        wrongAnswerExplanations: {
            "Cube": "A cube has flat faces and sharp edges.",
            "Cylinder": "A cylinder has flat circular faces.",
            "Cone": "A cone has a pointy vertex."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch9_t1_qe7',
        type: "mcq",
        question: "Which shape is a dice?",
        options: ["Cube", "Sphere", "Cylinder", "Cone"],
        correctAnswer: "Cube",
        explanation: "A dice is a cube because it has 6 square faces, 12 edges, and 8 vertices. 🎲",
        wrongAnswerExplanations: {
            "Sphere": "A sphere is round with no flat faces.",
            "Cylinder": "A cylinder has circular faces.",
            "Cone": "A cone has a pointy vertex."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch9_t1_qe8',
        type: "mcq",
        question: "Which shape is a can of soda?",
        options: ["Cylinder", "Cube", "Sphere", "Cone"],
        correctAnswer: "Cylinder",
        explanation: "A can of soda is a cylinder because it has two circular faces (top and bottom) and one curved surface. 🥫",
        wrongAnswerExplanations: {
            "Cube": "A cube has square faces.",
            "Sphere": "A sphere is perfectly round.",
            "Cone": "A cone has a pointy vertex."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch9_t1_qe9',
        type: "mcq",
        question: "Which shape is an ice cream cone?",
        options: ["Cone", "Cylinder", "Cube", "Sphere"],
        correctAnswer: "Cone",
        explanation: "An ice cream cone is a cone because it has one circular face at the bottom, one curved surface, and one vertex at the top. 🍦",
        wrongAnswerExplanations: {
            "Cylinder": "A cylinder has two circular faces.",
            "Cube": "A cube has square faces.",
            "Sphere": "A sphere is perfectly round."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch9_t1_qe10',
        type: "mcq",
        question: "Which shape is a shoebox?",
        options: ["Cuboid", "Cube", "Cylinder", "Cone"],
        correctAnswer: "Cuboid",
        explanation: "A shoebox is a cuboid because it has 6 rectangular faces, 12 edges, and 8 vertices. 📦",
        wrongAnswerExplanations: {
            "Cube": "A cube has square faces of equal size.",
            "Cylinder": "A cylinder has circular faces.",
            "Cone": "A cone has a pointy vertex."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch9_t1_qe11',
        type: "mcq",
        question: "How many faces does a cube have?",
        options: ["6", "4", "8", "12"],
        correctAnswer: "6",
        explanation: "A cube has 6 square faces - one on each side. 🎲",
        wrongAnswerExplanations: {
            "4": "A cube has more than 4 faces.",
            "8": "8 is the number of vertices, not faces.",
            "12": "12 is the number of edges, not faces."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch9_t1_qe12',
        type: "mcq",
        question: "How many vertices does a cuboid have?",
        options: ["8", "6", "12", "4"],
        correctAnswer: "8",
        explanation: "A cuboid has 8 vertices (corners) where the edges meet. 📦",
        wrongAnswerExplanations: {
            "6": "6 is the number of faces, not vertices.",
            "12": "12 is the number of edges, not vertices.",
            "4": "A cuboid has more than 4 vertices."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch9_t1_qe13',
        type: "mcq",
        question: "How many edges does a cube have?",
        options: ["12", "6", "8", "4"],
        correctAnswer: "12",
        explanation: "A cube has 12 edges where the faces meet. 🎲",
        wrongAnswerExplanations: {
            "6": "6 is the number of faces, not edges.",
            "8": "8 is the number of vertices, not edges.",
            "4": "A cube has more than 4 edges."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch9_t1_qe14',
        type: "mcq",
        question: "Which shape has no edges or vertices?",
        options: ["Sphere", "Cube", "Cuboid", "Cylinder"],
        correctAnswer: "Sphere",
        explanation: "A sphere is perfectly round with no edges or vertices. ⚽",
        wrongAnswerExplanations: {
            "Cube": "A cube has edges and vertices.",
            "Cuboid": "A cuboid has edges and vertices.",
            "Cylinder": "A cylinder has edges where the faces meet."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch9_t1_qe15',
        type: "mcq",
        question: "Which shape has only one vertex?",
        options: ["Cone", "Cube", "Cuboid", "Cylinder"],
        correctAnswer: "Cone",
        explanation: "A cone has only one vertex at its pointy top. 🍦",
        wrongAnswerExplanations: {
            "Cube": "A cube has 8 vertices.",
            "Cuboid": "A cuboid has 8 vertices.",
            "Cylinder": "A cylinder has no vertices."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch9_t1_qe16',
        type: "mcq",
        question: "Which shape is a globe?",
        options: ["Sphere", "Cube", "Cylinder", "Cone"],
        correctAnswer: "Sphere",
        explanation: "A globe is a sphere because it is perfectly round with no edges or vertices. 🌍",
        wrongAnswerExplanations: {
            "Cube": "A cube has flat faces and sharp edges.",
            "Cylinder": "A cylinder has flat circular faces.",
            "Cone": "A cone has a pointy vertex."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch9_t1_qe17',
        type: "mcq",
        question: "Which shape is a traffic cone?",
        options: ["Cone", "Cylinder", "Cube", "Sphere"],
        correctAnswer: "Cone",
        explanation: "A traffic cone is a cone because it has one circular face at the bottom, one curved surface, and one vertex at the top. 🚧",
        wrongAnswerExplanations: {
            "Cylinder": "A cylinder has two circular faces.",
            "Cube": "A cube has square faces.",
            "Sphere": "A sphere is perfectly round."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch9_t1_qe18',
        type: "mcq",
        question: "Which shape is a pencil?",
        options: ["Cylinder", "Cube", "Sphere", "Cone"],
        correctAnswer: "Cylinder",
        explanation: "A pencil is a cylinder because it has two circular faces (top and bottom) and one curved surface. ✏️",
        wrongAnswerExplanations: {
            "Cube": "A cube has square faces.",
            "Sphere": "A sphere is perfectly round.",
            "Cone": "A cone has a pointy vertex."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch9_t1_qe19',
        type: "mcq",
        question: "How many circular faces does a cylinder have?",
        options: ["2", "1", "0", "3"],
        correctAnswer: "2",
        explanation: "A cylinder has 2 circular faces - one at the top and one at the bottom. 🥫",
        wrongAnswerExplanations: {
            "1": "A cylinder has more than 1 circular face.",
            "0": "A cylinder has circular faces.",
            "3": "A cylinder has only 2 circular faces."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    },
    {
        id: 'cl5_ch9_t1_qe20',
        type: "mcq",
        question: "Which shape has all faces equal?",
        options: ["Cube", "Cuboid", "Cylinder", "Cone"],
        correctAnswer: "Cube",
        explanation: "A cube has all faces equal - they are all squares of the same size. 🎲",
        wrongAnswerExplanations: {
            "Cuboid": "A cuboid has rectangular faces that may be different sizes.",
            "Cylinder": "A cylinder has circular faces and a curved surface.",
            "Cone": "A cone has one circular face and one curved surface."
        },
        difficulty: "easy",
        marks: 1,
        recommendedTime: 30
    }
]; 